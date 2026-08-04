import { useState, useRef, useCallback, useEffect } from "react";
import { motion, animate, useMotionValue, useTransform, useSpring, useReducedMotion } from "framer-motion";
import { PhoneCall, Server, BrainCircuit, Database, CalendarCheck, MessageSquareText } from "lucide-react";

/* ------------------------------------------------------------------ */
/* DSX Edge — Signal Core                                               */
/* A communications-routing emblem, not a galaxy. Three inbound systems */
/* (Communications, Infrastructure, Intelligence) feed a switching     */
/* core. Three business actions leave the core and exit right.          */
/*                                                                      */
/* Motion is used to explain the system, never to decorate it:          */
/*   + one coordinated entrance (reduce-aware)                          */
/*   + packets flowing on each ring (3 motion systems, constant speed)  */
/*   + path dots on inbound/outbound lanes                              */
/*   + a slow data-ring rotation inside the core                        */
/*   + spring-smoothed pointer tilt, capped at 6 degrees                */
/*   + reduced-motion renders a static, fully readable diagram          */
/* ------------------------------------------------------------------ */

const VIEWBOX = 600;
const CX = VIEWBOX / 2;
const CY = VIEWBOX / 2;
const CORE_R = 86;
const MAX_TILT = 6;

interface Layer {
  key: "communications" | "infrastructure" | "intelligence";
  label: string;
  short: string;
  description: string;
  color: string;
  faint: string;
  angle: number;      // ring rotation, degrees
  rx: number;         // semi-major
  ry: number;         // semi-minor
  nodeRadius: number; // distance of the node chip from center
  icon: React.ElementType;
}

interface Output {
  key: string;
  label: string;
  icon: React.ElementType;
  x: number;
  y: number;
  connectAngle: number; // degrees, exit lane direction
}

/* Node chip sits at the tip of each ring's major axis, so the ring
   visibly "points at" its system. Three asymmetric ellipses, three
   distinct stations: left, bottom-left, top. */
const COMMUNICATIONS_ANGLE = -15;
const INFRASTRUCTURE_ANGLE = 118;
const INTELLIGENCE_ANGLE = 92;

const LAYERS: Layer[] = [
  {
    key: "communications",
    label: "Business Communications",
    short: "Communications",
    description: "Calls, routing, messaging, handsets, customer entry.",
    color: "#5b9dfd",
    faint: "rgba(91,157,253,0.4)",
    angle: COMMUNICATIONS_ANGLE,
    rx: 206,
    ry: 66,
    nodeRadius: 212,
    icon: PhoneCall,
  },
  {
    key: "infrastructure",
    label: "Hosted Infrastructure",
    short: "Infrastructure",
    description: "SIP, hosting, redundancy, uptime, data center.",
    color: "#8fa5c0",
    faint: "rgba(143,165,192,0.38)",
    angle: INFRASTRUCTURE_ANGLE,
    rx: 156,
    ry: 76,
    nodeRadius: 160,
    icon: Server,
  },
  {
    key: "intelligence",
    label: "Operational Intelligence",
    short: "Intelligence",
    description: "Qualification, decision logic, automation, escalation.",
    color: "#ff9540",
    faint: "rgba(255,149,64,0.4)",
    angle: INTELLIGENCE_ANGLE,
    rx: 170,
    ry: 56,
    nodeRadius: 172,
    icon: BrainCircuit,
  },
];

/* Business actions exit on the right edge — "into the business." */
const OUTPUTS: Output[] = [
  { key: "crm", label: "CRM updated", icon: Database, x: 538, y: 212, connectAngle: -18 },
  { key: "booking", label: "Appointment booked", icon: CalendarCheck, x: 545, y: 300, connectAngle: 2 },
  { key: "followup", label: "Follow-up sent", icon: MessageSquareText, x: 538, y: 388, connectAngle: 22 },
];

/* ---------- geometry ---------- */

function polar(angleDeg: number, radius: number) {
  const r = (angleDeg * Math.PI) / 180;
  return { x: CX + Math.cos(r) * radius, y: CY + Math.sin(r) * radius };
}

/* Point on a rotated ellipse (SVG, y down). */
function ellipsePoint(cx: number, cy: number, rx: number, ry: number, rotDeg: number, t: number) {
  const rot = (rotDeg * Math.PI) / 180;
  const px = rx * Math.cos(t);
  const py = ry * Math.sin(t);
  return {
    x: cx + px * Math.cos(rot) - py * Math.sin(rot),
    y: cy + px * Math.sin(rot) + py * Math.cos(rot),
  };
}

function bezier(p0: { x: number; y: number }, cp: { x: number; y: number }, p1: { x: number; y: number }, t: number) {
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * cp.x + t * t * p1.x,
    y: u * u * p0.y + 2 * u * t * cp.y + t * t * p1.y,
  };
}

/* node -> core (inbound) and core -> output (outbound) lane geometry */
function laneGeometry(angleDeg: number, inbound: boolean, toX?: number, toY?: number) {
  const innerR = CORE_R + 14;
  const start = inbound
    ? polar(angleDeg, 236)
    : { x: CX + Math.cos((angleDeg * Math.PI) / 180) * innerR, y: CY + Math.sin((angleDeg * Math.PI) / 180) * innerR };
  const end = inbound
    ? polar(angleDeg, innerR)
    : { x: toX ?? 520, y: toY ?? CY };
  const rad = (angleDeg * Math.PI) / 180;
  const bend = inbound ? 46 : -54;
  const cp = {
    x: (start.x + end.x) / 2 - Math.sin(rad) * bend,
    y: (start.y + end.y) / 2 + Math.cos(rad) * bend,
  };
  return { start, end, cp, d: `M ${start.x},${start.y} Q ${cp.x},${cp.y} ${end.x},${end.y}` };
}

/* ---------- sub-renderers ---------- */

function OrbitRing({ layer, active, reducedMotion }: { layer: Layer; active: boolean; reducedMotion: boolean }) {
  const progress = useMotionValue(0);
  const t = useTransform(progress, (v) => v * Math.PI * 2);
  const p = useTransform(t, (v) => ellipsePoint(CX, CY, layer.rx, layer.ry, layer.angle, v));
  useEffect(() => {
    if (reducedMotion) return;
    const ctrl = animate(progress, 1, { duration: 16, repeat: Infinity, ease: "linear" });
    return () => ctrl.stop();
  }, [progress, reducedMotion]);
  return (
    <g>
      <ellipse
        cx={CX} cy={CY} rx={layer.rx} ry={layer.ry}
        transform={`rotate(${layer.angle} ${CX} ${CY})`}
        fill="none"
        stroke={layer.color}
        strokeOpacity={active ? 0.55 : 0.26}
        strokeWidth={active ? 1.6 : 1.1}
      />
      {!reducedMotion && (
        <>
          <motion.circle r={6.5} fill={layer.color} opacity={active ? 0.16 : 0.09} style={{ cx: p.x, cy: p.y }} />
          <motion.circle r={2.6} fill={layer.color} style={{ cx: p.x, cy: p.y }} />
        </>
      )}
    </g>
  );
}

function SignalLane({ angle, color, inbound, toX, toY, active, reducedMotion }: {
  angle: number; color: string; inbound: boolean; toX?: number; toY?: number; active: boolean; reducedMotion: boolean;
}) {
  const g = laneGeometry(angle, inbound, toX, toY);
  const prog = useMotionValue(0);
  useEffect(() => {
    if (reducedMotion) return;
    const ctrl = animate(prog, 1, { duration: 2.4, repeat: Infinity, ease: "linear" });
    return () => ctrl.stop();
  }, [prog, reducedMotion]);
  const pos = useTransform(prog, (v) => bezier(g.start, g.cp, g.end, v));
  return (
    <g>
      <path
        d={g.d}
        fill="none"
        stroke={color}
        strokeWidth={active ? 1.8 : 1.1}
        strokeOpacity={active ? 0.6 : 0.28}
        strokeLinecap="round"
        strokeDasharray="3 4"
      />
      {!reducedMotion && <motion.circle r={3.1} fill={color} style={{ cx: pos.x, cy: pos.y }} />}
    </g>
  );
}

function Core({ reducedMotion }: { reducedMotion: boolean }) {
  const spin = useMotionValue(0);
  const rot = useTransform(spin, (v) => v * 360);
  useEffect(() => {
    if (reducedMotion) return;
    const ctrl = animate(spin, 1, { duration: 60, repeat: Infinity, ease: "linear" });
    return () => ctrl.stop();
  }, [spin, reducedMotion]);
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    const r1 = CORE_R - 24;
    const r2 = CORE_R - 18;
    return {
      x1: CX + Math.cos(a) * r1, y1: CY + Math.sin(a) * r1,
      x2: CX + Math.cos(a) * r2, y2: CY + Math.sin(a) * r2,
    };
  });
  return (
    <g>
      <defs>
        <radialGradient id="core-grad" cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor="#24324a" />
          <stop offset="60%" stopColor="#131d30" />
          <stop offset="100%" stopColor="#0a1120" />
        </radialGradient>
      </defs>
      {/* body */}
      <circle cx={CX} cy={CY} r={CORE_R} fill="url(#core-grad)" />
      <circle cx={CX} cy={CY} r={CORE_R} fill="none" stroke="#475569" strokeOpacity={0.55} strokeWidth={1} />
      {/* breathing ring */}
      <motion.circle
        cx={CX} cy={CY} r={CORE_R}
        fill="none" stroke="#5b9dfd" strokeOpacity={0.32} strokeWidth={1.2}
        animate={reducedMotion ? undefined : { scale: [1, 1.012, 1], opacity: [0.22, 0.42, 0.22] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: `${CX}px ${CY}px` }}
      />
      {/* rotating data ring */}
      <g style={reducedMotion ? undefined : { transformOrigin: `${CX}px ${CY}px`, rotate: rot }}>
        <circle cx={CX} cy={CY} r={CORE_R - 21} fill="none" stroke="#475569" strokeOpacity={0.5} strokeWidth={1} strokeDasharray="2 5" />
        {ticks.map((tk, i) => (
          <line key={i} x1={tk.x1} y1={tk.y1} x2={tk.x2} y2={tk.y2} stroke="#64748b" strokeOpacity={0.7} strokeWidth={1} />
        ))}
      </g>
      {/* center mark */}
      <circle cx={CX} cy={CY} r={14} fill="#0d1526" stroke="#60a5fa" strokeOpacity={0.6} strokeWidth={1.4} />
      <motion.circle
        cx={CX} cy={CY} r={5.5} fill="#9cc4ff"
        animate={reducedMotion ? undefined : { opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx={CX} cy={CY} r={1.8} fill="#ffffff" />
    </g>
  );
}

/* ---------- main ---------- */

export function SignalOrb() {
  const reduceMotion = useReducedMotion() ?? false;
  const [activeKey, setActiveKey] = useState<Layer["key"]>("communications");
  const containerRef = useRef<HTMLDivElement>(null);

  const rawTiltX = useMotionValue(0);
  const rawTiltY = useMotionValue(0);
  const tiltX = useSpring(rawTiltX, { stiffness: 140, damping: 18 });
  const tiltY = useSpring(rawTiltY, { stiffness: 140, damping: 18 });

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (reduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    rawTiltX.set(-ny * MAX_TILT);
    rawTiltY.set(nx * MAX_TILT);
  }, [reduceMotion, rawTiltX, rawTiltY]);

  const resetPointer = useCallback(() => { rawTiltX.set(0); rawTiltY.set(0); }, [rawTiltX, rawTiltY]);

  const active = LAYERS.find((l) => l.key === activeKey) ?? LAYERS[0];

  return (
    <section
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[600px] select-none"
      aria-label="DSX Edge operating core"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      {/* emblem */}
      <motion.svg
        viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
        className="absolute inset-0 h-full w-full overflow-visible"
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        role="img"
        aria-labelledby="orb-title orb-desc"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <title id="orb-title">DSX Edge operating core</title>
        <desc id="orb-desc">Communications, infrastructure, and intelligence feed the DSX Edge core. Business actions — CRM updates, bookings, follow-ups — leave the core and move into the operation.</desc>

        {LAYERS.map((layer, i) => (
          <motion.g
            key={layer.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
          >
            <OrbitRing layer={layer} active={layer.key === activeKey} reducedMotion={reduceMotion} />
          </motion.g>
        ))}

        {LAYERS.map((layer, i) => (
          <motion.g key={`in-${layer.key}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}>
            <SignalLane angle={layer.angle} color={layer.color} inbound active={layer.key === activeKey} reducedMotion={reduceMotion} />
          </motion.g>
        ))}

        {OUTPUTS.map((out, i) => (
          <motion.g key={`out-${out.key}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}>
            <SignalLane angle={out.connectAngle} color="#fbbf24" inbound={false} toX={out.x} toY={out.y} active={activeKey === "intelligence"} reducedMotion={reduceMotion} />
          </motion.g>
        ))}

        <motion.g initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
          <Core reducedMotion={reduceMotion} />
        </motion.g>
      </motion.svg>

      {/* core label (HTML for crisp typography) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <p className="font-mono text-[13px] font-semibold tracking-[0.3em] text-foreground">DSX&nbsp;EDGE</p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.26em] text-muted-foreground/70">signal core</p>
        </div>
      </div>

      {/* system station chips */}
      {LAYERS.map((layer) => {
        const pos = polar(layer.angle, layer.nodeRadius);
        const Icon = layer.icon;
        const isActive = layer.key === activeKey;
        return (
          <button
            key={layer.key}
            onClick={() => setActiveKey(layer.key)}
            className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-md border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            style={{
              left: `${(pos.x / VIEWBOX) * 100}%`,
              top: `${(pos.y / VIEWBOX) * 100}%`,
              borderColor: isActive ? layer.color : "var(--border)",
              backgroundColor: isActive ? "var(--card)" : "transparent",
              boxShadow: isActive ? `0 0 22px ${layer.faint}` : "none",
            }}
            aria-pressed={isActive}
            aria-label={layer.label}
            title={layer.label}
          >
            <span className="flex h-12 w-12 items-center justify-center">
              <Icon
                className="h-[20px] w-[20px] transition-colors"
                style={{ color: isActive ? layer.color : "var(--muted-foreground)" }}
                strokeWidth={1.7}
              />
            </span>
          </button>
        );
      })}

      {/* business output ticks */}
      {OUTPUTS.map((out) => {
        const Icon = out.icon;
        return (
          <div
            key={out.key}
            className="pointer-events-none absolute -translate-y-1/2"
            style={{ left: `${(out.x / VIEWBOX) * 100}%`, top: `${(out.y / VIEWBOX) * 100}%` }}
          >
            <div className="flex items-center gap-1.5 rounded-sm border border-dashed border-amber-500/30 bg-background/60 px-1.5 py-1">
              <Icon className="h-3 w-3 text-amber-500/80" strokeWidth={2} />
              <span className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                {out.label}
              </span>
            </div>
          </div>
        );
      })}

      {/* active layer caption */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[2%] text-center" aria-live="polite">
        <p className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]" style={{ color: active.color }}>
          {active.short}
        </p>
        <p className="mx-auto mt-1 max-w-[280px] text-xs leading-relaxed text-muted-foreground">
          {active.description}
        </p>
      </div>
    </section>
  );
}
