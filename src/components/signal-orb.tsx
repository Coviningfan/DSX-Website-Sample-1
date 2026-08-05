import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import * as THREE from "three";
import "./signal-orb.css";

type FocusZone =
  | "overview"
  | "communications"
  | "core"
  | "actions";

interface Flow {
  curve: THREE.CatmullRomCurve3;
  packets: Array<{
    mesh: THREE.Mesh<
      THREE.SphereGeometry,
      THREE.MeshBasicMaterial
    >;
    offset: number;
  }>;
  side: "in" | "out";
  speed: number;
  lineMaterial: THREE.ShaderMaterial;
  glowMaterial: THREE.ShaderMaterial;
  baseLineOpacity: number;
  baseGlowOpacity: number;
}

interface SignalOrbProps {
  className?: string;
}

const COLORS = {
  blue: "#4674aa",
  blueLight: "#8fc0e3",
  amber: "#dc7f43",
  amberLight: "#f0b173",
  silver: "#9aa7b4",
  white: "#f7fbff",
} as const;

function seededRandom(seed: number) {
  let value = seed >>> 0;

  return () => {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function createRadialTexture(
  stops: Array<[number, string]>,
  size = 256,
) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d");
  if (!context) {
    throw new Error("Unable to create DSX Edge canvas texture.");
  }

  const center = size / 2;
  const gradient = context.createRadialGradient(
    center,
    center,
    0,
    center,
    center,
    center,
  );

  stops.forEach(([position, color]) => {
    gradient.addColorStop(position, color);
  });

  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function disposeScene(scene: THREE.Scene) {
  const disposedTextures = new Set<THREE.Texture>();

  scene.traverse((object) => {
    if (
      object instanceof THREE.Mesh ||
      object instanceof THREE.Points ||
      object instanceof THREE.Line
    ) {
      object.geometry?.dispose();

      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];

      materials.forEach((material) => {
        const candidate = material as THREE.Material & {
          map?: THREE.Texture;
          alphaMap?: THREE.Texture;
        };

        if (candidate.map && !disposedTextures.has(candidate.map)) {
          candidate.map.dispose();
          disposedTextures.add(candidate.map);
        }

        if (
          candidate.alphaMap &&
          !disposedTextures.has(candidate.alphaMap)
        ) {
          candidate.alphaMap.dispose();
          disposedTextures.add(candidate.alphaMap);
        }

        material.dispose();
      });
    }

    if (object instanceof THREE.Sprite) {
      if (
        object.material.map &&
        !disposedTextures.has(object.material.map)
      ) {
        object.material.map.dispose();
        disposedTextures.add(object.material.map);
      }

      object.material.dispose();
    }
  });
}

export default function SignalOrb({
  className = "",
}: SignalOrbProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const pausedRef = useRef(false);
  const visibleRef = useRef(true);
  const focusRef =
    useRef<FocusZone>("overview");

  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [focus, setFocus] =
    useState<FocusZone>("overview");

  const changeFocus = (zone: FocusZone) => {
    focusRef.current = zone;
    setFocus(zone);
  };

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const normalizedX =
      ((event.clientX - rect.left) / rect.width) * 2 - 1;

    const normalizedY =
      -(((event.clientY - rect.top) / rect.height) * 2 - 1);

    pointerRef.current = {
      x: normalizedY * -0.018,
      y: normalizedX * 0.028,
    };
  };

  const handlePointerLeave = () => {
    pointerRef.current = { x: 0, y: 0 };
    changeFocus("overview");
  };

  const toggleMotion = () => {
    const nextPaused = !pausedRef.current;
    pausedRef.current = nextPaused;
    setPaused(nextPaused);
  };

  useEffect(() => {
    const stage = stageRef.current;
    const mount = mountRef.current;

    if (!stage || !mount) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    pausedRef.current = reducedMotion;
    setPaused(reducedMotion);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      32,
      1,
      0.1,
      100,
    );
    camera.position.set(0, 0, 8.6);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio || 1, 1.5),
    );
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const blue = new THREE.Color(COLORS.blue);
    const blueLight = new THREE.Color(COLORS.blueLight);
    const amber = new THREE.Color(COLORS.amber);
    const amberLight = new THREE.Color(COLORS.amberLight);
    const silver = new THREE.Color(COLORS.silver);
    const white = new THREE.Color(COLORS.white);

    const root = new THREE.Group();
    root.position.set(0.22, 0.02, 0);
    root.scale.setScalar(0.79);
    scene.add(root);

    /*
     * A smooth sphere restores the exact circular silhouette.
     * The triangular DSX network remains a separate, subtle shell.
     */
    const coreMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uBlue: { value: blue.clone() },
        uBlueLight: { value: blueLight.clone() },
        uAmber: { value: amber.clone() },
        uAmberLight: { value: amberLight.clone() },
        uCoreFocus: { value: 0 },
        uCommunicationsFocus: { value: 0 },
        uActionsFocus: { value: 0 },
      },
      vertexShader: `
        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        varying vec3 vLocalPosition;

        void main() {
          vLocalPosition = position;
          vWorldNormal = normalize(mat3(modelMatrix) * normal);

          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;

          gl_Position =
            projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uBlue;
        uniform vec3 uBlueLight;
        uniform vec3 uAmber;
        uniform vec3 uAmberLight;
        uniform float uCoreFocus;
        uniform float uCommunicationsFocus;
        uniform float uActionsFocus;

        varying vec3 vWorldNormal;
        varying vec3 vWorldPosition;
        varying vec3 vLocalPosition;

        void main() {
          vec3 normal = normalize(vWorldNormal);
          vec3 viewDirection =
            normalize(cameraPosition - vWorldPosition);

          float fresnel = pow(
            1.0 - max(dot(normal, viewDirection), 0.0),
            2.65
          );

          float topLight = smoothstep(
            -0.75,
            1.0,
            vLocalPosition.y
          );

          float frontLight = smoothstep(
            -0.55,
            1.0,
            vLocalPosition.z
          );

          float actionSide = smoothstep(
            0.05,
            0.95,
            vLocalPosition.x
          );

          /*
           * Lifted marine-blue material. It remains deep and
           * dimensional without reading as a black obstruction.
           */
          vec3 deepMarine = vec3(0.028, 0.105, 0.176);
          vec3 steelBlue = vec3(0.070, 0.245, 0.375);

          vec3 body = mix(
            deepMarine,
            steelBlue,
            topLight * 0.62 + frontLight * 0.22
          );

          body += uBlue * 0.040;

          /*
           * Broad environmental reflection from the bright
           * tunnel's upper-left architecture.
           */
          vec3 tunnelDirection =
            normalize(vec3(-0.70, 0.56, 0.72));

          float tunnelReflection = pow(
            max(dot(normal, tunnelDirection), 0.0),
            2.15
          );

          body += uBlueLight *
            tunnelReflection *
            0.335;

          vec3 frontalDirection =
            normalize(vec3(-0.24, 0.20, 1.0));

          float frontalReflection = pow(
            max(dot(normal, frontalDirection), 0.0),
            2.8
          );

          body += uBlueLight *
            frontalReflection *
            0.115;

          float communicationSide =
            1.0 -
            smoothstep(
              -0.92,
              0.10,
              vLocalPosition.x
            );

          body += uBlueLight *
            communicationSide *
            uCommunicationsFocus *
            (0.035 + fresnel * 0.075);

          body += uAmberLight *
            actionSide *
            uActionsFocus *
            (0.026 + fresnel * 0.095);

          body += uBlueLight *
            uCoreFocus *
            (0.035 + tunnelReflection * 0.07);

          vec3 rimColor = mix(
            uBlueLight,
            uAmberLight,
            actionSide
          );

          float slowWave = 0.5 + 0.5 * sin(
            vLocalPosition.y * 5.7 +
            vLocalPosition.z * 3.2 +
            uTime * 0.25
          );

          float field = 0.5 + 0.5 * sin(
            (
              vLocalPosition.x * 0.78 +
              vLocalPosition.y +
              vLocalPosition.z * 0.52
            ) * 18.0 +
            uTime * 0.34
          );

          float fieldLines =
            smoothstep(0.972, 1.0, field);

          vec3 color = body;

          color += rimColor *
            fresnel *
            (
              0.57 +
              slowWave * 0.09 +
              uCoreFocus * 0.10
            );

          color += rimColor *
            fieldLines *
            0.022;

          /*
           * Amber is a controlled action-side reflection,
           * not a second dominant color.
           */
          color += uAmber *
            actionSide *
            fresnel *
            (
              0.070 +
              uActionsFocus * 0.085
            );

          gl_FragColor = vec4(color, 0.985);
        }
      `,
      transparent: true,
      depthWrite: true,
    });

    const core = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 128, 96),
      coreMaterial,
    );
    root.add(core);

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: blueLight,
      wireframe: true,
      transparent: true,
      opacity: 0.066,
      depthWrite: false,
    });

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.212, 5),
      wireMaterial,
    );
    root.add(wire);

    const haloMaterial = new THREE.SpriteMaterial({
      map: createRadialTexture([
        [0, "rgba(111, 173, 222, 0.15)"],
        [0.43, "rgba(95, 145, 195, 0.052)"],
        [0.72, "rgba(217, 150, 88, 0.014)"],
        [1, "rgba(0, 0, 0, 0)"],
      ]),
      transparent: true,
      opacity: 0.44,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const halo = new THREE.Sprite(haloMaterial);
    halo.scale.set(4.35, 4.35, 1);
    halo.position.z = -0.42;
    root.add(halo);

    /*
     * Floor contact. This makes the orb occupy the tunnel
     * instead of floating over a flat background.
     */
    const floorShadowMaterial = new THREE.SpriteMaterial({
      map: createRadialTexture([
        [0, "rgba(44, 104, 159, 0.30)"],
        [0.42, "rgba(44, 104, 159, 0.11)"],
        [1, "rgba(44, 104, 159, 0)"],
      ]),
      transparent: true,
      opacity: 0.48,
      depthWrite: false,
    });

    const floorShadow = new THREE.Sprite(
      floorShadowMaterial,
    );
    floorShadow.position.set(0, -1.63, -0.5);
    floorShadow.scale.set(3.6, 0.54, 1);
    root.add(floorShadow);

    const reflectionMaterial = new THREE.SpriteMaterial({
      map: createRadialTexture([
        [0, "rgba(128, 190, 230, 0.14)"],
        [0.38, "rgba(76, 139, 190, 0.052)"],
        [1, "rgba(76, 139, 190, 0)"],
      ]),
      transparent: true,
      opacity: 0.34,
      depthWrite: false,
    });

    const reflection = new THREE.Sprite(
      reflectionMaterial,
    );
    reflection.position.set(0, -1.88, -0.7);
    reflection.scale.set(1.8, 0.82, 1);
    root.add(reflection);

    const random = seededRandom(731);
    const particleCount = 180;
    const particlePositions =
      new Float32Array(particleCount * 3);

    for (
      let index = 0;
      index < particleCount;
      index += 1
    ) {
      const radius = Math.cbrt(random()) * 1.0;
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);

      particlePositions[index * 3] =
        radius * Math.sin(phi) * Math.cos(theta);

      particlePositions[index * 3 + 1] =
        radius * Math.sin(phi) * Math.sin(theta);

      particlePositions[index * 3 + 2] =
        radius * Math.cos(phi);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        particlePositions,
        3,
      ),
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: white,
      size: 0.026,
      transparent: true,
      opacity: 0.7,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(
      particleGeometry,
      particleMaterial,
    );
    root.add(particles);

    const createEllipse = (
      radiusX: number,
      radiusY: number,
      rotationX: number,
      rotationY: number,
      color: THREE.Color,
      opacity: number,
    ) => {
      const points: THREE.Vector3[] = [];

      for (
        let index = 0;
        index <= 160;
        index += 1
      ) {
        const angle =
          (index / 160) * Math.PI * 2;

        points.push(
          new THREE.Vector3(
            Math.cos(angle) * radiusX,
            Math.sin(angle) * radiusY,
            0,
          ),
        );
      }

      const material =
        new THREE.LineBasicMaterial({
          color,
          transparent: true,
          opacity,
          depthWrite: false,
        });

      const line = new THREE.LineLoop(
        new THREE.BufferGeometry()
          .setFromPoints(points),
        material,
      );

      line.rotation.x = rotationX;
      line.rotation.y = rotationY;
      root.add(line);

      return line;
    };

    /*
     * Tight architectural rings. They frame the core instead of
     * becoming large, faded strands around the composition.
     */
    const orbitA = createEllipse(
      1.62,
      0.44,
      -0.22,
      0.18,
      blueLight,
      0.145,
    );

    const orbitB = createEllipse(
      1.54,
      0.51,
      0.65,
      -0.25,
      amber,
      0.065,
    );

    const orbitC = createEllipse(
      1.70,
      0.38,
      -0.88,
      0.15,
      silver,
      0.048,
    );

    const flows: Flow[] = [];

    const createRailMaterial = (
      color: THREE.Color,
      side: "in" | "out",
      opacity: number,
    ) =>
      new THREE.ShaderMaterial({
        uniforms: {
          uColor: { value: color.clone() },
          uOpacity: { value: opacity },
          uInbound: { value: side === "in" ? 1 : 0 },
        },
        vertexShader: `
          varying vec2 vRailUv;

          void main() {
            vRailUv = uv;

            gl_Position =
              projectionMatrix *
              modelViewMatrix *
              vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 uColor;
          uniform float uOpacity;
          uniform float uInbound;

          varying vec2 vRailUv;

          void main() {
            float travel = mix(
              1.0 - vRailUv.x,
              vRailUv.x,
              uInbound
            );

            float endpointFade =
              smoothstep(0.0, 0.055, vRailUv.x) *
              smoothstep(1.0, 0.945, vRailUv.x);

            /*
             * Incoming rails become brighter as they approach the
             * core. Outgoing rails begin bright and resolve outward.
             */
            float energy = mix(
              0.18,
              1.0,
              pow(travel, 0.72)
            );

            float centerHighlight =
              0.92 +
              0.08 *
              sin(vRailUv.x * 18.8495559);

            float alpha =
              uOpacity *
              endpointFade *
              energy *
              centerHighlight;

            gl_FragColor = vec4(uColor, alpha);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

    const createFlow = ({
      start,
      end,
      color,
      side,
      speed,
      packetCount,
      bendY,
      bendZ,
    }: {
      start: [number, number, number];
      end: [number, number, number];
      color: THREE.Color;
      side: "in" | "out";
      speed: number;
      packetCount: number;
      bendY: number;
      bendZ: number;
    }) => {
      const startPoint =
        new THREE.Vector3(...start);

      const endPoint =
        new THREE.Vector3(...end);

      const controlA = startPoint
        .clone()
        .lerp(endPoint, 0.38);

      const controlB = startPoint
        .clone()
        .lerp(endPoint, 0.76);

      controlA.y += bendY;
      controlA.z += bendZ;

      controlB.y -= bendY * 0.12;
      controlB.z -= bendZ * 0.12;

      const curve =
        new THREE.CatmullRomCurve3([
          startPoint,
          controlA,
          controlB,
          endPoint,
        ]);

      /*
       * A precise core rail plus a controlled luminous sheath.
       * Both taper according to direction through the UV shader.
       */
      const lineMaterial =
        createRailMaterial(
          color,
          side,
          0.64,
        );

      const glowMaterial =
        createRailMaterial(
          color,
          side,
          0.090,
        );

      root.add(
        new THREE.Mesh(
          new THREE.TubeGeometry(
            curve,
            80,
            0.0085,
            8,
            false,
          ),
          lineMaterial,
        ),
      );

      root.add(
        new THREE.Mesh(
          new THREE.TubeGeometry(
            curve,
            80,
            0.027,
            8,
            false,
          ),
          glowMaterial,
        ),
      );

      const packets = Array.from(
        { length: packetCount },
        (_, index) => {
          const packetMaterial =
            new THREE.MeshBasicMaterial({
              color,
              transparent: true,
              opacity: 0.95,
              depthWrite: false,
              blending:
                THREE.AdditiveBlending,
            });

          /*
           * These begin as spheres but are stretched and oriented
           * along the curve each frame, producing luminous dashes
           * instead of bead-like dots.
           */
          const packet = new THREE.Mesh(
            new THREE.SphereGeometry(
              0.034,
              12,
              12,
            ),
            packetMaterial,
          );

          root.add(packet);

          return {
            mesh: packet,
            offset: index / packetCount,
          };
        },
      );

      flows.push({
        curve,
        packets,
        side,
        speed,
        lineMaterial,
        glowMaterial,
        baseLineOpacity: 0.64,
        baseGlowOpacity: 0.13,
      });
    };

    /*
     * Three clean rails per side. Their shallow perspective follows
     * the tunnel architecture and avoids decorative wandering loops.
     */
    createFlow({
      start: [-3.02, 0.72, -0.10],
      end: [-1.16, 0.38, 0.06],
      color: blue,
      side: "in",
      speed: 0.102,
      packetCount: 2,
      bendY: 0.045,
      bendZ: 0.05,
    });

    createFlow({
      start: [-3.10, 0.0, -0.07],
      end: [-1.20, 0.0, 0.08],
      color: blueLight,
      side: "in",
      speed: 0.122,
      packetCount: 3,
      bendY: 0.0,
      bendZ: -0.035,
    });

    createFlow({
      start: [-3.02, -0.72, -0.10],
      end: [-1.16, -0.38, 0.06],
      color: blue,
      side: "in",
      speed: 0.096,
      packetCount: 2,
      bendY: -0.045,
      bendZ: 0.05,
    });

    createFlow({
      start: [1.16, 0.38, 0.06],
      end: [3.02, 0.72, -0.10],
      color: amberLight,
      side: "out",
      speed: 0.108,
      packetCount: 2,
      bendY: 0.045,
      bendZ: 0.05,
    });

    createFlow({
      start: [1.20, 0.0, 0.08],
      end: [3.10, 0.0, -0.07],
      color: amber,
      side: "out",
      speed: 0.128,
      packetCount: 3,
      bendY: 0.0,
      bendZ: -0.035,
    });

    createFlow({
      start: [1.16, -0.38, 0.06],
      end: [3.02, -0.72, -0.10],
      color: amberLight,
      side: "out",
      speed: 0.101,
      packetCount: 2,
      bendY: -0.045,
      bendZ: 0.05,
    });

    const orbitAMaterial =
      orbitA.material as THREE.LineBasicMaterial;

    const orbitBMaterial =
      orbitB.material as THREE.LineBasicMaterial;

    const orbitCMaterial =
      orbitC.material as THREE.LineBasicMaterial;

    const clock = new THREE.Clock();

    const resize = () => {
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      const rootScale =
        width >= 1100
          ? 1.05
          : width >= 760
            ? 0.92
            : 0.79;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      root.scale.setScalar(rootScale);

      renderer.setSize(
        width,
        height,
        false,
      );
    };

    const resizeObserver =
      new ResizeObserver(resize);

    resizeObserver.observe(stage);
    resize();

    const visibilityObserver =
      new IntersectionObserver(
        ([entry]) => {
          visibleRef.current =
            entry.isIntersecting;
        },
        { threshold: 0.05 },
      );

    visibilityObserver.observe(stage);

    renderer.setAnimationLoop(() => {
      const delta = Math.min(
        clock.getDelta(),
        0.05,
      );

      if (
        !pausedRef.current &&
        visibleRef.current
      ) {
        coreMaterial.uniforms.uTime.value +=
          delta;

        const elapsed =
          coreMaterial.uniforms.uTime.value;

        particles.rotation.y =
          elapsed * 0.11;

        particles.rotation.x =
          Math.sin(elapsed * 0.18) * 0.065;

        orbitA.rotation.z =
          elapsed * 0.034;

        orbitB.rotation.z =
          -elapsed * 0.026;

        orbitC.rotation.z =
          elapsed * 0.018;

        wire.rotation.y =
          elapsed * 0.022;

        const packetAxis =
          new THREE.Vector3(0, 1, 0);

        flows.forEach((flow) => {
          flow.packets.forEach((packet) => {
            const progress =
              (
                elapsed * flow.speed * 1.55 +
                packet.offset
              ) % 1;

            const point =
              flow.curve.getPointAt(
                progress,
              );

            const tangent =
              flow.curve
                .getTangentAt(progress)
                .normalize();

            const envelope =
              Math.sin(
                progress * Math.PI,
              );

            packet.mesh.position.copy(point);

            packet.mesh.quaternion
              .setFromUnitVectors(
                packetAxis,
                tangent,
              );

            packet.mesh.scale.set(
              0.82,
              2.15 +
                envelope * 0.9,
              0.82,
            );

            packet.mesh.material.opacity =
              0.48 +
              envelope * 0.48;
          });
        });
      }

      const activeZone = focusRef.current;

      const coreFocusTarget =
        activeZone === "core" ? 1 : 0;

      const communicationsFocusTarget =
        activeZone === "communications" ? 1 : 0;

      const actionsFocusTarget =
        activeZone === "actions" ? 1 : 0;

      coreMaterial.uniforms.uCoreFocus.value +=
        (
          coreFocusTarget -
          coreMaterial.uniforms.uCoreFocus.value
        ) * 0.09;

      coreMaterial.uniforms
        .uCommunicationsFocus.value +=
        (
          communicationsFocusTarget -
          coreMaterial.uniforms
            .uCommunicationsFocus.value
        ) * 0.09;

      coreMaterial.uniforms.uActionsFocus.value +=
        (
          actionsFocusTarget -
          coreMaterial.uniforms.uActionsFocus.value
        ) * 0.09;

      const coreScaleTarget =
        activeZone === "core"
          ? 1.038
          : 1;

      const coreScale =
        THREE.MathUtils.lerp(
          core.scale.x,
          coreScaleTarget,
          0.09,
        );

      core.scale.setScalar(coreScale);
      wire.scale.setScalar(coreScale);
      particles.scale.setScalar(coreScale);

      const haloTarget =
        activeZone === "core"
          ? 0.78
          : 0.52;

      haloMaterial.opacity +=
        (
          haloTarget -
          haloMaterial.opacity
        ) * 0.09;

      const particleTarget =
        activeZone === "core"
          ? 0.96
          : 0.7;

      particleMaterial.opacity +=
        (
          particleTarget -
          particleMaterial.opacity
        ) * 0.09;

      flows.forEach((flow) => {
        const emphasized =
          (
            activeZone === "communications" &&
            flow.side === "in"
          ) ||
          (
            activeZone === "actions" &&
            flow.side === "out"
          );

        const dimmed =
          (
            activeZone === "communications" &&
            flow.side === "out"
          ) ||
          (
            activeZone === "actions" &&
            flow.side === "in"
          ) ||
          activeZone === "core";

        const lineTarget = emphasized
          ? 1
          : dimmed
            ? 0.12
            : flow.baseLineOpacity;

        const glowTarget = emphasized
          ? 0.28
          : dimmed
            ? 0.016
            : flow.baseGlowOpacity;

        const lineOpacity =
          flow.lineMaterial.uniforms
            .uOpacity.value as number;

        const glowOpacity =
          flow.glowMaterial.uniforms
            .uOpacity.value as number;

        flow.lineMaterial.uniforms
          .uOpacity.value =
          THREE.MathUtils.lerp(
            lineOpacity,
            lineTarget,
            0.09,
          );

        flow.glowMaterial.uniforms
          .uOpacity.value =
          THREE.MathUtils.lerp(
            glowOpacity,
            glowTarget,
            0.09,
          );

        flow.packets.forEach((packet) => {
          packet.mesh.visible =
            !dimmed || emphasized;
        });
      });

      orbitAMaterial.opacity =
        THREE.MathUtils.lerp(
          orbitAMaterial.opacity,
          activeZone === "communications"
            ? 0.34
            : activeZone === "core"
              ? 0.28
              : 0.2,
          0.09,
        );

      orbitBMaterial.opacity =
        THREE.MathUtils.lerp(
          orbitBMaterial.opacity,
          activeZone === "actions"
            ? 0.24
            : activeZone === "core"
              ? 0.17
              : 0.11,
          0.09,
        );

      orbitCMaterial.opacity =
        THREE.MathUtils.lerp(
          orbitCMaterial.opacity,
          activeZone === "core"
            ? 0.15
            : 0.075,
          0.09,
        );

      root.rotation.x +=
        (
          pointerRef.current.x -
          root.rotation.x
        ) *
        Math.min(delta * 2.4, 1);

      root.rotation.y +=
        (
          pointerRef.current.y -
          root.rotation.y
        ) *
        Math.min(delta * 2.4, 1);

      renderer.render(scene, camera);
    });

    setReady(true);

    return () => {
      renderer.setAnimationLoop(null);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();

      disposeScene(scene);
      renderer.dispose();

      if (
        renderer.domElement.parentElement ===
        mount
      ) {
        mount.removeChild(
          renderer.domElement,
        );
      }
    };
  }, []);

  return (
    <section
      className={`dsx-hero-orb ${className}`}
      data-ready={ready}
      data-zone={focus}
      aria-label="DSX Edge communications platform"
    >
      <div
        ref={stageRef}
        className="dsx-hero-orb__stage"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div
          ref={mountRef}
          className="dsx-hero-orb__canvas"
          aria-hidden="true"
        />

        <div
          className="dsx-hero-orb__fallback"
          aria-hidden={ready}
        >
          <div className="dsx-hero-orb__fallback-core" />
        </div>

        <button
          type="button"
          className="dsx-hero-orb__zone dsx-hero-orb__zone--left"
          aria-label="Focus incoming communications"
          aria-pressed={focus === "communications"}
          onPointerEnter={() =>
            changeFocus("communications")
          }
          onFocus={() =>
            changeFocus("communications")
          }
          onBlur={() =>
            changeFocus("overview")
          }
        />

        <button
          type="button"
          className="dsx-hero-orb__zone dsx-hero-orb__zone--core"
          aria-label="Focus the DSX Edge core"
          aria-pressed={focus === "core"}
          onPointerEnter={() =>
            changeFocus("core")
          }
          onFocus={() =>
            changeFocus("core")
          }
          onBlur={() =>
            changeFocus("overview")
          }
        />

        <button
          type="button"
          className="dsx-hero-orb__zone dsx-hero-orb__zone--right"
          aria-label="Focus outgoing business actions"
          aria-pressed={focus === "actions"}
          onPointerEnter={() =>
            changeFocus("actions")
          }
          onFocus={() =>
            changeFocus("actions")
          }
          onBlur={() =>
            changeFocus("overview")
          }
        />

        <button
          className="dsx-hero-orb__motion"
          type="button"
          onClick={toggleMotion}
          aria-pressed={paused}
        >
          {paused
            ? "Resume motion"
            : "Pause motion"}
        </button>
      </div>

      <div className="dsx-hero-orb__explainers">
        <div className="dsx-hero-orb__explainer dsx-hero-orb__explainer--left">
          <p className="dsx-hero-orb__label">Communications enter</p>
          <h3>The starting point</h3>
          <p>Calls, messages, routing events, web chat, and customer inquiries.</p>
        </div>

        <div className="dsx-hero-orb__explainer dsx-hero-orb__explainer--right">
          <p className="dsx-hero-orb__label">Intelligent actions leave</p>
          <h3>The business responds</h3>
          <p>CRM updates, scheduling, routing, follow-up, and reporting.</p>
        </div>
      </div>
    </section>
  );
}
