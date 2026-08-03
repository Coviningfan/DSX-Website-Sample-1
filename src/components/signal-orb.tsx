import { useState, useRef, useCallback, useMemo } from "react";
import { PhoneCall, Server, BrainCircuit, Database, CalendarCheck, MessageSquareText } from "lucide-react";

const VIEWBOX = 600;
const CX = VIEWBOX / 2;
const CY = VIEWBOX / 2;
const CORE_RADIUS = 72;

interface Layer {
  key: string;
  label: string;
  shortLabel: string;
  description: string;
  angle: number;
  color: string;
  icon: typeof PhoneCall;
}

interface Output {
  key: string;
  label: string;
  angle: number;
  icon: typeof Database;
}

const LAYERS: Layer[] = [
  { key: "communications", label: "Business Communications", shortLabel: "Communications", description: "Calls, messaging, queues, routing, handsets, and customer entry.", angle: -90, color: "#60a5fa", icon: PhoneCall },
  { key: "infrastructure", label: "Hosted Infrastructure", shortLabel: "Infrastructure", description: "SIP, hosting, redundancy, connectivity, uptime, and support.", angle: 150, color: "#cbd5e1", icon: Server },
  { key: "intelligence", label: "Operational Intelligence", shortLabel: "Intelligence", description: "Qualification, decision logic, automation, summaries, and escalation.", angle: 30, color: "#fb923c", icon: BrainCircuit },
];

const OUTPUTS: Output[] = [
  { key: "crm", label: "CRM updated", angle: 205, icon: Database },
  { key: "booking", label: "Appointment booked", angle: 270, icon: CalendarCheck },
  { key: "followup", label: "Follow-up sent", angle: 335, icon: MessageSquareText },
];

const LAYER_RADII: Record<string, number> = { communications: 158, infrastructure: 142, intelligence: 174 };
const OUTPUT_RADIUS = 230;

function polarToCartesian(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + Math.cos(rad) * radius, y: CY + Math.sin(rad) * radius };
}

export function SignalOrb() {
  const [activeLayer, setActiveLayer] = useState<Layer["key"]>("communications");
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const active = LAYERS.find((l) => l.key === activeLayer) ?? LAYERS[0];

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -6, y: dx * 6 });
  }, []);

  const resetPointer = useCallback(() => setTilt({ x: 0, y: 0 }), []);

  return (
    <section
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[580px]"
      aria-label="DSX Edge operating system"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <svg
        viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
        className="absolute inset-0 h-full w-full overflow-visible"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.3s ease-out",
        }}
        role="img"
      >
        <title>DSX Edge operating system</title>
        <defs>
          <radialGradient id="core-grad">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="70%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>
        </defs>
        {/* Orbit rings */}
        <g transform={`rotate(-18 ${CX} ${CY})`}>
          <ellipse cx={CX} cy={CY} rx={170} ry={66} fill="none" stroke="#60a5fa" strokeOpacity={0.2} strokeWidth={1} />
        </g>
        <g transform={`rotate(22 ${CX} ${CY})`}>
          <ellipse cx={CX} cy={CY} rx={162} ry={86} fill="none" stroke="#cbd5e1" strokeOpacity={0.2} strokeWidth={1} />
        </g>
        <g transform={`rotate(58 ${CX} ${CY})`}>
          <ellipse cx={CX} cy={CY} rx={174} ry={54} fill="none" stroke="#fb923c" strokeOpacity={0.2} strokeWidth={1} />
        </g>
        {/* Inbound signal paths */}
        {LAYERS.map((layer) => {
          const outerR = LAYER_RADII[layer.key];
          const innerR = CORE_RADIUS + 8;
          const start = polarToCartesian(layer.angle, outerR);
          const end = polarToCartesian(layer.angle, innerR);
          const rad = (layer.angle * Math.PI) / 180;
          const mx = (start.x + end.x) / 2 - Math.sin(rad) * 40;
          const my = (start.y + end.y) / 2 + Math.cos(rad) * 40;
          const isActive = layer.key === activeLayer;
          return (
            <g key={layer.key}>
              <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke={layer.color} strokeOpacity={isActive ? 0.7 : 0.25} strokeWidth={isActive ? 2 : 1} strokeLinecap="round" />
              <path d={`M ${start.x},${start.y} Q ${mx},${my} ${end.x},${end.y}`} fill="none" stroke={layer.color} strokeOpacity={isActive ? 0.6 : 0.2} strokeWidth={isActive ? 2.5 : 1} strokeLinecap="round" />
            </g>
          );
        })}
        {/* Outbound signal paths */}
        {OUTPUTS.map((output) => {
          const innerR = CORE_RADIUS + 8;
          const start = polarToCartesian(output.angle, innerR);
          const end = polarToCartesian(output.angle, OUTPUT_RADIUS);
          const rad = (output.angle * Math.PI) / 180;
          const mx = (start.x + end.x) / 2 - Math.sin(rad) * -50;
          const my = (start.y + end.y) / 2 + Math.cos(rad) * -50;
          return (
            <g key={output.key}>
              <line x1={start.x} y1={start.y} x2={end.x} y2={end.y} stroke="#fb923c" strokeOpacity={0.15} strokeWidth={1} strokeLinecap="round" />
              <path d={`M ${start.x},${start.y} Q ${mx},${my} ${end.x},${end.y}`} fill="none" stroke="#fb923c" strokeOpacity={0.12} strokeWidth={1} strokeLinecap="round" strokeDasharray="6 4" />
            </g>
          );
        })}
        {/* Core */}
        <circle cx={CX} cy={CY} r={CORE_RADIUS} fill="url(#core-grad)" />
        <circle cx={CX} cy={CY} r={CORE_RADIUS} fill="none" stroke="#475569" strokeOpacity={0.5} strokeWidth={1} />
        <circle cx={CX} cy={CY} r={18} fill="#1e293b" stroke="#475569" strokeWidth={1} />
        <circle cx={CX} cy={CY} r={6} fill="#93c5fd" />
        <text x={CX} y={CY + 110} textAnchor="middle" fill="#f8fafc" fontSize={13} fontWeight={600} letterSpacing={2} fontFamily="system-ui, sans-serif">DSX EDGE</text>
        <text x={CX} y={CY + 130} textAnchor="middle" fill="#94a3b8" fontSize={9} letterSpacing={1.6} fontFamily="system-ui, sans-serif">{active.shortLabel.toUpperCase()}</text>
      </svg>
      {/* Layer buttons */}
      {LAYERS.map((layer) => {
        const pos = polarToCartesian(layer.angle, LAYER_RADII[layer.key]);
        const isActive = layer.key === activeLayer;
        return (
          <button
            key={layer.key}
            onClick={() => setActiveLayer(layer.key)}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(pos.x / VIEWBOX) * 100}%`, top: `${(pos.y / VIEWBOX) * 100}%` }}
            aria-pressed={isActive}
          >
            <span className={`block w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${isActive ? "bg-primary/15 ring-1 ring-primary/30" : "bg-card/40 hover:bg-card/60"}`}>
              <layer.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
            </span>
          </button>
        );
      })}
      {/* Output labels */}
      {OUTPUTS.map((output) => {
        const pos = polarToCartesian(output.angle, OUTPUT_RADIUS + 20);
        return (
          <div key={output.key} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(pos.x / VIEWBOX) * 100}%`, top: `${(pos.y / VIEWBOX) * 100}%` }}>
            <span className="flex items-center gap-1">
              <output.icon className="w-3 h-3 text-orange-400/60" />
              <span className="font-mono text-[9px] text-muted-foreground whitespace-nowrap">{output.label}</span>
            </span>
          </div>
        );
      })}
      {/* Active description */}
      <div className="absolute inset-x-[18%] bottom-[8%] text-center pointer-events-none">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">{active.shortLabel}</p>
        <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-xs mx-auto">{active.description}</p>
      </div>
    </section>
  );
}
