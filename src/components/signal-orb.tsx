import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "./signal-orb.css";

type FocusZone = "overview" | "communications" | "core" | "actions";

interface Flow {
  curve: THREE.CatmullRomCurve3;
  packets: Array<{
    mesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>;
    offset: number;
  }>;
  lineMaterial: THREE.MeshBasicMaterial;
  glowMaterial: THREE.MeshBasicMaterial;
  side: "in" | "out";
  speed: number;
  baseLineOpacity: number;
  baseGlowOpacity: number;
}

const ZONE_LABELS: Record<FocusZone, string> = {
  overview: "Entire platform",
  communications: "Communications entering DSX Edge",
  core: "DSX Edge communications platform",
  actions: "Intelligent business actions",
};

const COLORS = {
  blue: "#5f80b3",
  blueLight: "#8ca9d0",
  amber: "#d99658",
  amberLight: "#efb67d",
  silver: "#898889",
  white: "#f4f2ef",
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

function disposeScene(scene: THREE.Scene) {
  scene.traverse((object) => {
    if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.Line) {
      object.geometry?.dispose();

      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];

      materials.forEach((material) => {
        const candidate = material as THREE.Material & {
          map?: THREE.Texture;
          alphaMap?: THREE.Texture;
        };

        candidate.map?.dispose();
        candidate.alphaMap?.dispose();
        material.dispose();
      });
    }

    if (object instanceof THREE.Sprite) {
      object.material.map?.dispose();
      object.material.dispose();
    }
  });
}

export default function SignalOrb() {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasMountRef = useRef<HTMLDivElement>(null);
  const focusRef = useRef<FocusZone>("overview");
  const pausedRef = useRef(false);
  const pointerTargetRef = useRef({ x: 0, y: 0 });

  const [focus, setFocus] = useState<FocusZone>("overview");
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  const changeFocus = (zone: FocusZone) => {
    focusRef.current = zone;
    setFocus(zone);
  };

  const toggleMotion = () => {
    // This is an explicit user override. The initial media preference may pause
    // playback, but it must not prevent a later manual resume.
    const nextPaused = !pausedRef.current;
    pausedRef.current = nextPaused;
    setPaused(nextPaused);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const normalizedY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

    pointerTargetRef.current.y = normalizedX * 0.042;
    pointerTargetRef.current.x = normalizedY * -0.028;
  };

  const handlePointerLeave = () => {
    pointerTargetRef.current = { x: 0, y: 0 };
    changeFocus("overview");
  };

  useEffect(() => {
    const stage = stageRef.current;
    const canvasMount = canvasMountRef.current;

    if (!stage || !canvasMount) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    pausedRef.current = reduceMotion;
    setPaused(reduceMotion);

    const blue = new THREE.Color(COLORS.blue);
    const blueLight = new THREE.Color(COLORS.blueLight);
    const amber = new THREE.Color(COLORS.amber);
    const amberLight = new THREE.Color(COLORS.amberLight);
    const silver = new THREE.Color(COLORS.silver);
    const white = new THREE.Color(COLORS.white);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 8.9);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    canvasMount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    root.position.set(0, -0.03, 0);
    root.scale.setScalar(0.96);
    scene.add(root);

    const coreMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uHover: { value: 0 },
        uBlue: { value: blue.clone() },
        uBlueLight: { value: blueLight.clone() },
        uAmber: { value: amber.clone() },
        uAmberLight: { value: amberLight.clone() },
      },
      vertexShader: `
        varying vec3 vNormalView;
        varying vec3 vWorldPosition;
        varying vec3 vLocalPosition;

        void main() {
          vLocalPosition = position;
          vNormalView = normalize(normalMatrix * normal);

          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;

          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uHover;
        uniform vec3 uBlue;
        uniform vec3 uBlueLight;
        uniform vec3 uAmber;
        uniform vec3 uAmberLight;

        varying vec3 vNormalView;
        varying vec3 vWorldPosition;
        varying vec3 vLocalPosition;

        void main() {
          vec3 viewDirection = normalize(cameraPosition - vWorldPosition);

          float fresnel = pow(
            1.0 - max(dot(vNormalView, viewDirection), 0.0),
            2.75
          );

          float side = smoothstep(-0.5, 0.52, vLocalPosition.x);

          vec3 warmTone = mix(
            uAmber,
            uAmberLight,
            smoothstep(0.0, 1.2, vLocalPosition.y) * 0.28
          );

          vec3 edgeColor = mix(uBlue, warmTone, side);

          float upperLight = smoothstep(
            0.3,
            1.0,
            vLocalPosition.y + 0.55
          );

          edgeColor = mix(
            edgeColor,
            uBlueLight,
            upperLight * (1.0 - side) * 0.24
          );

          float quietWave = 0.5 + 0.5 * sin(
            vLocalPosition.y * 6.0 +
            vLocalPosition.z * 3.0 +
            uTime * 0.28
          );

          float fineField = 0.5 + 0.5 * sin(
            (
              vLocalPosition.x * 0.8 +
              vLocalPosition.y +
              vLocalPosition.z * 0.55
            ) * 17.0 +
            uTime * 0.38
          );

          float fieldLines = smoothstep(0.96, 1.0, fineField);

          vec3 body = vec3(0.006, 0.012, 0.021);
          vec3 color = body;

          color += edgeColor * fresnel *
            (0.55 + quietWave * 0.10 + uHover * 0.17);

          color += edgeColor * fieldLines *
            (0.02 + uHover * 0.015);

          gl_FragColor = vec4(color, 0.99);
        }
      `,
      transparent: true,
      depthWrite: true,
    });

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.38, 7),
      coreMaterial,
    );
    root.add(core);

    const wireMaterial = new THREE.MeshBasicMaterial({
      color: silver,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
      depthWrite: false,
    });

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.405, 4),
      wireMaterial,
    );
    root.add(wire);

    const makeHaloTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;

      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Unable to create the DSX Edge halo texture.");
      }

      const gradient = context.createRadialGradient(
        128,
        128,
        0,
        128,
        128,
        128,
      );

      gradient.addColorStop(0, "rgba(95, 128, 179, 0.19)");
      gradient.addColorStop(0.45, "rgba(95, 128, 179, 0.065)");
      gradient.addColorStop(0.72, "rgba(217, 150, 88, 0.022)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      context.fillStyle = gradient;
      context.fillRect(0, 0, 256, 256);

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    const haloMaterial = new THREE.SpriteMaterial({
      map: makeHaloTexture(),
      transparent: true,
      opacity: 0.68,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const halo = new THREE.Sprite(haloMaterial);
    halo.scale.set(4.65, 4.65, 1);
    halo.position.z = -0.32;
    root.add(halo);

    const random = seededRandom(731);
    // Always construct the complete scene. Reduced-motion controls playback,
    // so pressing Resume can animate everything without rebuilding WebGL objects.
    const particleCount = 118;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      const radius = Math.cbrt(random()) * 1.16;
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
      new THREE.BufferAttribute(particlePositions, 3),
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: white,
      size: 0.016,
      transparent: true,
      opacity: 0.29,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const innerParticles = new THREE.Points(
      particleGeometry,
      particleMaterial,
    );
    root.add(innerParticles);

    const createEllipse = (
      radiusX: number,
      radiusY: number,
      rotationX: number,
      rotationY: number,
      color: THREE.Color,
      opacity: number,
    ) => {
      const points: THREE.Vector3[] = [];

      for (let index = 0; index <= 150; index += 1) {
        const angle = (index / 150) * Math.PI * 2;

        points.push(
          new THREE.Vector3(
            Math.cos(angle) * radiusX,
            Math.sin(angle) * radiusY,
            0,
          ),
        );
      }

      const material = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity,
        depthWrite: false,
      });

      const line = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(points),
        material,
      );

      line.rotation.x = rotationX;
      line.rotation.y = rotationY;
      root.add(line);

      return { line, material, baseOpacity: opacity };
    };

    const orbitA = createEllipse(
      2.38,
      0.75,
      -0.22,
      0.18,
      blue,
      0.21,
    );

    const orbitB = createEllipse(
      2.16,
      0.92,
      0.65,
      -0.25,
      amber,
      0.12,
    );

    const orbitC = createEllipse(
      2.45,
      0.64,
      -0.88,
      0.15,
      silver,
      0.1,
    );

    const foundation = new THREE.Group();
    foundation.position.set(0, -1.88, -0.2);
    root.add(foundation);

    [
      { y: 0.36, rx: 1.55, ry: 0.3, opacity: 0.23 },
      { y: 0.02, rx: 1.42, ry: 0.28, opacity: 0.17 },
      { y: -0.3, rx: 1.28, ry: 0.25, opacity: 0.12 },
    ].forEach((layer, layerIndex) => {
      const points: THREE.Vector3[] = [];

      for (let pointIndex = 0; pointIndex <= 110; pointIndex += 1) {
        const angle = (pointIndex / 110) * Math.PI * 2;

        points.push(
          new THREE.Vector3(
            Math.cos(angle) * layer.rx,
            Math.sin(angle) * layer.ry + layer.y,
            0,
          ),
        );
      }

      const material = new THREE.LineBasicMaterial({
        color: layerIndex === 0 ? blue : silver,
        transparent: true,
        opacity: layer.opacity,
        depthWrite: false,
      });

      foundation.add(
        new THREE.LineLoop(
          new THREE.BufferGeometry().setFromPoints(points),
          material,
        ),
      );
    });

    const flows: Flow[] = [];

    const createFlow = ({
      start,
      end,
      color,
      side,
      bendY,
      bendZ,
      speed,
      packetCount,
    }: {
      start: [number, number, number];
      end: [number, number, number];
      color: THREE.Color;
      side: "in" | "out";
      bendY: number;
      bendZ: number;
      speed: number;
      packetCount: number;
    }) => {
      const startPoint = new THREE.Vector3(...start);
      const endPoint = new THREE.Vector3(...end);

      const controlA = startPoint.clone().lerp(endPoint, 0.34);
      const controlB = startPoint.clone().lerp(endPoint, 0.7);

      controlA.y += bendY;
      controlA.z += bendZ;

      controlB.y -= bendY * 0.34;
      controlB.z -= bendZ * 0.35;

      const curve = new THREE.CatmullRomCurve3([
        startPoint,
        controlA,
        controlB,
        endPoint,
      ]);

      const lineMaterial = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.34,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const glowMaterial = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.022,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      root.add(
        new THREE.Mesh(
          new THREE.TubeGeometry(curve, 68, 0.008, 6, false),
          lineMaterial,
        ),
      );

      root.add(
        new THREE.Mesh(
          new THREE.TubeGeometry(curve, 68, 0.025, 6, false),
          glowMaterial,
        ),
      );

      const packets = Array.from(
        { length: packetCount },
        (_, index) => {
          const packetMaterial = new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity: 0.9,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
          });

          const packet = new THREE.Mesh(
            new THREE.SphereGeometry(0.031, 9, 9),
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
        lineMaterial,
        glowMaterial,
        side,
        speed,
        baseLineOpacity: 0.34,
        baseGlowOpacity: 0.022,
      });
    };

    createFlow({
      start: [-4.1, 1.05, 0.18],
      end: [-1.03, 0.62, 0.02],
      color: blue,
      side: "in",
      bendY: 0.4,
      bendZ: 0.16,
      speed: 0.085,
      packetCount: 3,
    });

    createFlow({
      start: [-4.1, 0.35, -0.05],
      end: [-1.16, 0.18, 0.06],
      color: blueLight,
      side: "in",
      bendY: 0.17,
      bendZ: -0.1,
      speed: 0.105,
      packetCount: 4,
    });

    createFlow({
      start: [-4.1, -0.35, 0.08],
      end: [-1.15, -0.2, -0.02],
      color: blue,
      side: "in",
      bendY: -0.11,
      bendZ: 0.16,
      speed: 0.092,
      packetCount: 4,
    });

    createFlow({
      start: [-4.1, -1.02, -0.1],
      end: [-1.0, -0.58, 0.04],
      color: blue,
      side: "in",
      bendY: -0.36,
      bendZ: -0.14,
      speed: 0.073,
      packetCount: 3,
    });

    createFlow({
      start: [1.03, 0.62, 0.02],
      end: [4.1, 1.05, 0.18],
      color: amberLight,
      side: "out",
      bendY: 0.4,
      bendZ: 0.16,
      speed: 0.098,
      packetCount: 3,
    });

    createFlow({
      start: [1.16, 0.18, 0.06],
      end: [4.1, 0.35, -0.05],
      color: amber,
      side: "out",
      bendY: 0.17,
      bendZ: -0.1,
      speed: 0.112,
      packetCount: 4,
    });

    createFlow({
      start: [1.15, -0.2, -0.02],
      end: [4.1, -0.35, 0.08],
      color: amber,
      side: "out",
      bendY: -0.11,
      bendZ: 0.16,
      speed: 0.091,
      packetCount: 4,
    });

    createFlow({
      start: [1.0, -0.58, 0.04],
      end: [4.1, -1.02, -0.1],
      color: amberLight,
      side: "out",
      bendY: -0.36,
      bendZ: -0.14,
      speed: 0.074,
      packetCount: 3,
    });

    let elapsed = 0;

    const clock = new THREE.Clock();
    const targetScale = new THREE.Vector3(1, 1, 1);

    const resize = () => {
      const width = stage.clientWidth;
      const height = stage.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(stage);
    resize();

    const frame = () => {

      const delta = Math.min(clock.getDelta(), 0.05);
      const activeZone = focusRef.current;

      if (!pausedRef.current) {
        elapsed += delta;

        coreMaterial.uniforms.uTime.value = elapsed;
        innerParticles.rotation.y = elapsed * 0.032;
        innerParticles.rotation.x =
          Math.sin(elapsed * 0.11) * 0.04;

        // Slow, but visibly alive. Previous values took several minutes per orbit
        // and appeared static when signal packets were unavailable.
        orbitA.line.rotation.z = elapsed * 0.042;
        orbitB.line.rotation.z = -elapsed * 0.031;
        orbitC.line.rotation.z = elapsed * 0.022;

        wire.rotation.y = elapsed * 0.028;

        flows.forEach((flow) => {
          flow.packets.forEach((packet) => {
            const progress =
              (elapsed * flow.speed + packet.offset) % 1;

            const point = flow.curve.getPointAt(progress);
            const envelope = Math.sin(progress * Math.PI);

            packet.mesh.position.copy(point);
            packet.mesh.scale.setScalar(0.7 + envelope * 0.38);
            packet.mesh.material.opacity =
              0.42 + envelope * 0.46;
          });
        });
      }

      const coreHoverTarget = activeZone === "core" ? 1 : 0;

      coreMaterial.uniforms.uHover.value +=
        (coreHoverTarget -
          coreMaterial.uniforms.uHover.value) *
        0.08;

      const coreScale = activeZone === "core" ? 1.035 : 1;
      targetScale.setScalar(coreScale);

      core.scale.lerp(targetScale, 0.08);
      wire.scale.copy(core.scale);

      const haloOpacityTarget =
        activeZone === "core" ? 0.86 : 0.68;

      haloMaterial.opacity +=
        (haloOpacityTarget - haloMaterial.opacity) * 0.08;

      root.rotation.x +=
        (pointerTargetRef.current.x - root.rotation.x) *
        Math.min(delta * 2.6, 1);

      root.rotation.y +=
        (pointerTargetRef.current.y - root.rotation.y) *
        Math.min(delta * 2.6, 1);

      flows.forEach((flow) => {
        const emphasized =
          (activeZone === "communications" &&
            flow.side === "in") ||
          (activeZone === "actions" &&
            flow.side === "out");

        const dimmed =
          (activeZone === "communications" &&
            flow.side === "out") ||
          (activeZone === "actions" &&
            flow.side === "in");

        const targetLineOpacity = emphasized
          ? 0.58
          : dimmed
            ? 0.07
            : flow.baseLineOpacity;

        const targetGlowOpacity = emphasized
          ? 0.052
          : dimmed
            ? 0.004
            : flow.baseGlowOpacity;

        flow.lineMaterial.opacity +=
          (targetLineOpacity -
            flow.lineMaterial.opacity) *
          0.08;

        flow.glowMaterial.opacity +=
          (targetGlowOpacity -
            flow.glowMaterial.opacity) *
          0.08;

        flow.packets.forEach((packet) => {
          packet.mesh.visible = !dimmed;
        });
      });

      orbitA.material.opacity +=
        (
          orbitA.baseOpacity +
          (activeZone === "communications" ? 0.12 : 0) -
          orbitA.material.opacity
        ) * 0.08;

      orbitB.material.opacity +=
        (
          orbitB.baseOpacity +
          (activeZone === "actions" ? 0.1 : 0) -
          orbitB.material.opacity
        ) * 0.08;

      renderer.render(scene, camera);
    };

    (window as typeof window & {
      __DSX_ORB_DEBUG__?: {
        renderer: THREE.WebGLRenderer;
        scene: THREE.Scene;
        flows: Flow[];
        pausedRef: React.MutableRefObject<boolean>;
        getElapsed: () => number;
      };
    }).__DSX_ORB_DEBUG__ = {
      renderer,
      scene,
      flows,
      pausedRef,
      getElapsed: () => elapsed,
    };

    setReady(true);
    renderer.setAnimationLoop(frame);

    return () => {
      renderer.setAnimationLoop(null);
      resizeObserver.disconnect();
      disposeScene(scene);
      renderer.dispose();

      if (renderer.domElement.parentElement === canvasMount) {
        canvasMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section
      className="dsx-orb"
      data-ready={ready}
      data-zone={focus}
      aria-labelledby="dsx-orb-title"
    >
      <div className="dsx-orb__toolbar">
        <div className="dsx-orb__state" aria-live="polite">
          Focus: <strong>{ZONE_LABELS[focus]}</strong>
        </div>

        <button
          type="button"
          className="dsx-orb__motion-button"
          aria-pressed={paused}
          onClick={toggleMotion}
        >
          {paused ? "Resume motion" : "Pause motion"}
        </button>
      </div>

      <div
        ref={stageRef}
        className="dsx-orb__stage"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <div
          ref={canvasMountRef}
          className="dsx-orb__canvas"
          aria-hidden="true"
        />

        <svg
          className="dsx-orb__fallback"
          viewBox="0 0 1000 620"
          role="img"
          aria-labelledby="dsx-orb-title dsx-orb-description"
        >
          <title id="dsx-orb-title">
            DSX Edge communications platform
          </title>

          <desc id="dsx-orb-description">
            Communications enter DSX Edge and become intelligent
            business actions through a 3CX-based PBX, SIP, and hosted
            infrastructure platform.
          </desc>

          <defs>
            <radialGradient
              id="dsx-static-core"
              cx="40%"
              cy="34%"
              r="72%"
            >
              <stop
                offset="0"
                stopColor={COLORS.blueLight}
                stopOpacity="0.28"
              />
              <stop
                offset="0.58"
                stopColor="#10151d"
                stopOpacity="0.98"
              />
              <stop offset="1" stopColor="#090a0c" />
            </radialGradient>

            <linearGradient
              id="dsx-static-rim"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
            >
              <stop offset="0" stopColor={COLORS.blue} />
              <stop offset="0.54" stopColor={COLORS.blueLight} />
              <stop offset="1" stopColor={COLORS.amber} />
            </linearGradient>
          </defs>

          <g
            fill="none"
            strokeLinecap="round"
          >
            <path
              d="M90 235 C245 235 330 265 420 298"
              stroke={COLORS.blue}
              strokeOpacity="0.48"
            />
            <path
              d="M70 310 C240 310 330 310 420 310"
              stroke={COLORS.blueLight}
              strokeOpacity="0.64"
            />
            <path
              d="M90 385 C245 385 330 350 420 322"
              stroke={COLORS.blue}
              strokeOpacity="0.42"
            />

            <path
              d="M580 298 C670 265 755 235 910 235"
              stroke={COLORS.amberLight}
              strokeOpacity="0.45"
            />
            <path
              d="M580 310 C670 310 760 310 930 310"
              stroke={COLORS.amber}
              strokeOpacity="0.58"
            />
            <path
              d="M580 322 C670 350 755 385 910 385"
              stroke={COLORS.amberLight}
              strokeOpacity="0.4"
            />

            <ellipse
              cx="500"
              cy="310"
              rx="215"
              ry="80"
              stroke={COLORS.blue}
              strokeOpacity="0.18"
            />

            <ellipse
              cx="500"
              cy="310"
              rx="202"
              ry="112"
              stroke={COLORS.amber}
              strokeOpacity="0.12"
              transform="rotate(36 500 310)"
            />
          </g>

          <circle
            cx="500"
            cy="310"
            r="112"
            fill="url(#dsx-static-core)"
            stroke="url(#dsx-static-rim)"
            strokeWidth="2"
          />

          <circle
            cx="500"
            cy="310"
            r="4"
            fill={COLORS.white}
          />
        </svg>

        <div className="dsx-orb__label dsx-orb__label--incoming">
          <div className="dsx-orb__kicker">
            Communications enter
          </div>
          <div className="dsx-orb__label-title">
            The starting point
          </div>
          <div className="dsx-orb__label-copy">
            Calls, messages, routing events, web chat, and customer
            inquiries.
          </div>
        </div>

        <div className="dsx-orb__label dsx-orb__label--outgoing">
          <div className="dsx-orb__kicker">
            Intelligent actions leave
          </div>
          <div className="dsx-orb__label-title">
            The business responds
          </div>
          <div className="dsx-orb__label-copy">
            CRM updates, scheduling, routing, follow-up, and reporting.
          </div>
        </div>

        <div className="dsx-orb__label dsx-orb__core-label">
          <strong>DSX EDGE</strong>
          <span>Communications platform</span>
        </div>

        <div className="dsx-orb__label dsx-orb__foundation-label">
          <div className="dsx-orb__kicker">Built on</div>
          <div className="dsx-orb__label-title">
            3CX · PBX · SIP · Hosted Infrastructure
          </div>
        </div>

        <button
          type="button"
          className="dsx-orb__hit-zone dsx-orb__hit-zone--left"
          aria-label="Focus incoming communications"
          aria-pressed={focus === "communications"}
          onPointerEnter={() => changeFocus("communications")}
          onFocus={() => changeFocus("communications")}
          onClick={() => changeFocus("communications")}
        />

        <button
          type="button"
          className="dsx-orb__hit-zone dsx-orb__hit-zone--core"
          aria-label="Focus the DSX Edge communications platform"
          aria-pressed={focus === "core"}
          onPointerEnter={() => changeFocus("core")}
          onFocus={() => changeFocus("core")}
          onClick={() => changeFocus("core")}
        />

        <button
          type="button"
          className="dsx-orb__hit-zone dsx-orb__hit-zone--right"
          aria-label="Focus intelligent business actions"
          aria-pressed={focus === "actions"}
          onPointerEnter={() => changeFocus("actions")}
          onFocus={() => changeFocus("actions")}
          onClick={() => changeFocus("actions")}
        />

        <div className="dsx-orb__mobile-summary" aria-hidden="true">
          <span>Communications</span>
          <span>→</span>
          <span>Business action</span>
        </div>
      </div>

      <p className="dsx-orb__tagline">
        <span>Above the Cloud.</span>
        <span>Into the Business.</span>
      </p>
    </section>
  );
}
