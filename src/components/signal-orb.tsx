import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { motion, animate, useMotionValue, useTransform, useReducedMotion } from "framer-motion";
import { PhoneCall, Server, BrainCircuit, Database, CalendarCheck, MessageSquareText } from "lucide-react";

const VIEWBOX = 600;
const CX = VIEWBOX / 2;
const CY = VIEWBOX / 2;
const CORE_RADIUS = 72;
const MAX_TILT = 6;
const PACKET_COUNT = 3;

interface Layer {
  key: string;
  label: string;
  shortLabel: string;
  description: string;
  angle: number;
  color: string;
  glow: string;
  icon: React.ElementType;
  radius: number;
}

interface Output {
  key: string;
  label: string;
  angle: number;
  icon: React.ElementType;
}

const LAYERS: Layer[] = [
  { key: "communications", label: "Business Communications", shortLabel: "Communications", description: "Calls, messaging, routing, handsets, customer entry.", angle: -90, color: "#60a5fa", glow: "rgba(96,165,250,0.55)", icon: PhoneCall, radius: 170 },
  { key: "infrastructure", label: "Hosted Infrastructure", shortLabel: "Infrastructure", description: "SIP, hosting, connectivity, uptime, data center.", angle: 150, color: "#cbd5e1", glow: "rgba(203,213,225,0.42)", icon: Server, radius: 155 },
  { key: "intelligence", label: "Operational Intelligence", shortLabel: "Intelligence", description: "Qualification, decision logic, automation, escalation.", angle: 30, color: "#fb923c", glow: "rgba(251,146,60,0.58)", icon: BrainCircuit, radius: 185 },
];

const OUTPUTS: Output[] = [
  { key: "crm", label: "CRM updated", angle: 205, icon: Database },
  { key: "booking", label: "Appointment booked", angle: 270, icon: CalendarCheck },
  { key: "followup", label: "Follow-up sent", angle: 335, icon: MessageSquareText },
];

function polarToCartesian(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + Math.cos(rad) * radius, y: CY + Math.sin(rad) * radius };
}

function bezierPoint(t: number, p0: { x: number; y: number }, cp: { x: number; y: number }, p1: { x: number; y: number }) {
  const u = 1 - t;
  return {
    x: u * u * p0.x + 2 * u * t * cp.x + t * t * p1.x,
    y: u * u * p0.y + 2 * u * t * cp.y + t * t * p1.y,
  };
}

function OrbitRing({ rx, ry, rotation, color, reducedMotion }: { rx: number; ry: number; rotation: number; color: string; reducedMotion: boolean }) {
  const progress = useMotionValue(0);
  const x = useTransform(progress, (v) => CX + rx * Math.cos(v * Math.PI * 2));
  const y = useTransform(progress, (v) => CY + ry * Math.sin(v * Math.PI * 2));
  useEffect(() => {
    if (reducedMotion) return;
    const ctrl = animate(progress, 1, { duration: 14 + rx * 0.05, repeat: Infinity, ease: "linear" });
    return () => ctrl.stop();
  }, [progress, reducedMotion, rx]);
  return (
    <g transform={"rotate(" + rotation + " " + CX + " " + CY + ")"}>
      <ellipse cx={CX} cy={CY} rx={rx} ry={ry} fill="none" stroke={color} strokeOpacity={0.22} strokeWidth={0.75} />
      {!reducedMotion && (
        <>
          <motion.circle r={8} fill={color} opacity={0.08} style={{ cx: x, cy: y }} />
          <motion.circle r={2.5} fill={color} style={{ cx: x, cy: y }} />
        </>
      )}
    </g>
  );
}

function SignalPath({ angle, color, inbound, label, reducedMotion }: { angle: number; color: string; inbound: boolean; label: string; reducedMotion: boolean }) {
  const outerR = inbound ? LAYERS[0].radius : LAYERS[0].radius - 20;
  const innerR = inbound ? CORE_RADIUS + 12 : LAYERS[0].radius + 30;
  const start = polarToCartesian(angle, inbound ? outerR : innerR);
  const end = polarToCartesian(angle, inbound ? innerR : outerR);
  const bend = inbound ? 40 : -50;
  const rad = (angle * Math.PI) / 180;
  const cp = { x: (start.x + end.x) / 2 - Math.sin(rad) * bend, y: (start.y + end.y) / 2 + Math.cos(rad) * bend };
  const d = "M " + start.x + " " + start.y + " Q " + cp.x + " " + cp.y + " " + end.x + " " + end.y;
  const dotProgress = useMotionValue(0);
  useEffect(() => {
    if (reducedMotion) return;
    const ctrl = animate(dotProgress, 1, { duration: 2.2, repeat: Infinity, ease: "easeInOut" });
    return () => ctrl.stop();
  }, [dotProgress, reducedMotion]);
  const dotPos = useTransform(dotProgress, (t) => bezierPoint(t, start, cp, end));
  const mid = bezierPoint(0.5, start, cp, end);
  return (
    <g>
      <motion.path d={d} fill="none" stroke={color} strokeWidth={1.5} strokeOpacity={0.4} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reducedMotion ? 0 : 0.8 }} />
      {!reducedMotion && <motion.circle r={3.5} fill={color} style={{ cx: dotPos.x, cy: dotPos.y }} />}
      <text x={mid.x + (inbound ? -12 : 12)} y={mid.y + (inbound ? -8 : 14)} textAnchor="middle" fill={color} fontSize="9" fontWeight={500} opacity={0.85}>{label}</text>
    </g>
  );
}

function OrbCore({ activeLabel }: { activeLabel: string }) {
  return (
    <g>
      <defs>
        <radialGradient id="core-grad" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </radialGradient>
      </defs>
      <circle cx={CX} cy={CY} r={CORE_RADIUS} fill="url(#core-grad)" />
      <circle cx={CX} cy={CY} r={CORE_RADIUS} fill="none" stroke="#475569" strokeOpacity={0.45} strokeWidth={1} />
      <motion.circle cx={CX} cy={CY} r={CORE_RADIUS} fill="none" stroke="#93c5fd" strokeOpacity={0.35} strokeWidth={1.5} animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.008, 1] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} style={{ transformOrigin: "" + CX + "px " + CY + "px" }} />
      <circle cx={CX} cy={CY} r={16} fill="#1e293b" stroke="#64748b" strokeWidth={1.5} />
      <circle cx={CX} cy={CY} r={6} fill="#93c5fd" opacity={0.85} />
      <circle cx={CX} cy={CY} r={2} fill="#ffffff" />
      <text x={CX} y={CY + 108} textAnchor="middle" fill="#f8fafc" fontSize="12" fontWeight={600} letterSpacing="2">DSX EDGE</text>
      <text x={CX} y={CY + 127} textAnchor="middle" fill="#94a3b8" fontSize="9" letterSpacing="1.4">{activeLabel.toUpperCase()}</text>
    </g>
  );
}

export function SignalOrb() {
  const reduceMotion = useReducedMotion() ?? false;
  const [activeLayer, setActiveLayer] = useState(LAYERS[0].key);
  const containerRef = useRef<HTMLDivElement>(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (reduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    tiltX.set(-ny * MAX_TILT);
    tiltY.set(nx * MAX_TILT);
  }, [reduceMotion, tiltX, tiltY]);
  const resetPointer = useCallback(() => { tiltX.set(0); tiltY.set(0); }, [tiltX, tiltY]);
  const active = LAYERS.find((l) => l.key === activeLayer) ?? LAYERS[0];
  return (
    <section ref={containerRef} className="relative mx-auto aspect-square w-full max-w-[620px]" aria-label="DSX Edge operating system" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <motion.svg viewBox={"0 0 " + VIEWBOX + " " + VIEWBOX + ""} className="absolute inset-0 h-full w-full overflow-visible" style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }} role="img" aria-labelledby="orb-title orb-description">
        <title id="orb-title">DSX Edge operating system</title>
        <desc id="orb-description">Communications and hosted infrastructure feed the DSX Edge intelligence core, which performs actions inside the customer's business.</desc>
        <OrbitRing rx={178} ry={68} rotation={-18} color="#60a5fa" reducedMotion={reduceMotion} />
        <OrbitRing rx={165} ry={88} rotation={22} color="#cbd5e1" reducedMotion={reduceMotion} />
        <OrbitRing rx={182} ry={56} rotation={58} color="#fb923c" reducedMotion={reduceMotion} />
        {LAYERS.map((layer) => (
          <SignalPath key={layer.key} angle={layer.angle} color={layer.color} inbound={true} label={layer.shortLabel} reducedMotion={reduceMotion} />
        ))}
        {OUTPUTS.map((output) => (
          <SignalPath key={output.key} angle={output.angle} color="#f59e0b" inbound={false} label={output.label} reducedMotion={reduceMotion} />
        ))}
        <OrbCore activeLabel={active.shortLabel} />
      </motion.svg>
      {LAYERS.map((layer) => {
        const pos = polarToCartesian(layer.angle, layer.radius);
        const Icon = layer.icon;
        return (
          <button key={layer.key} onClick={() => setActiveLayer(layer.key)} className="absolute -translate-x-1/2 -translate-y-1/2 group" style={{ left: (pos.x / VIEWBOX) * 100 + "%", top: (pos.y / VIEWBOX) * 100 + "%" }} aria-pressed={activeLayer === layer.key}>
            <div className={"rounded-full p-2.5 transition-colors " + (activeLayer === layer.key ? "bg-background/90" : "bg-background/60 hover:bg-background/80")} style={{ boxShadow: activeLayer === layer.key ? "0 0 18px " + layer.glow : undefined }}>
              <Icon className={"w-4 h-4 " + (activeLayer === layer.key ? "text-foreground" : "text-muted-foreground")} strokeWidth={1.8} />
            </div>
          </button>
        );
      })}
      {OUTPUTS.map((output) => {
        const pos = polarToCartesian(output.angle, LAYERS[0].radius + 40);
        const Icon = output.icon;
        return (
          <div key={output.key} className="absolute -translate-x-1/2 -translate-y-1/2 text-[10px] text-muted-foreground/70 font-mono uppercase tracking-[0.15em] text-center" style={{ left: (pos.x / VIEWBOX) * 100 + "%", top: (pos.y / VIEWBOX) * 100 + "%" }}>
            <Icon className="w-3 h-3 mx-auto mb-1 text-amber-500/60" />
            {output.label}
          </div>
        );
      })}
      <div className="absolute inset-x-[18%] bottom-0 text-center" aria-live="polite">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">{active.shortLabel}</p>
        <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-xs mx-auto">{active.description}</p>
      </div>
    </section>
  );
}
