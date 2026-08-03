import { useEffect, useRef } from "react";

export default function SignalOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const w = rect.width;
      const h = rect.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.38;

      // Clear
      ctx.clearRect(0, 0, w, h);

      // Ring
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(66, 140, 255, 0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Orbiting points
      const count = 3;
      for (let i = 0; i < count; i++) {
        const angle = (time * 0.4) + (i * (Math.PI * 2) / count);
        const orbitRadius = radius * 0.85;
        const x = cx + Math.cos(angle) * orbitRadius;
        const y = cy + Math.sin(angle) * orbitRadius;

        // Orbital arc
        ctx.beginPath();
        ctx.arc(cx, cy, orbitRadius, angle - 0.3, angle + 0.3);
        ctx.strokeStyle = "rgba(66, 140, 255, 0.25)";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Point
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(66, 140, 255, 0.9)";
        ctx.fill();

        // Glow
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 12);
        glow.addColorStop(0, "rgba(66, 140, 255, 0.4)");
        glow.addColorStop(1, "rgba(66, 140, 255, 0)");
        ctx.beginPath();
        ctx.arc(x, y, 12, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      // Center point
      const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 20);
      centerGlow.addColorStop(0, "rgba(66, 140, 255, 0.6)");
      centerGlow.addColorStop(0.5, "rgba(66, 140, 255, 0.2)");
      centerGlow.addColorStop(1, "rgba(66, 140, 255, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 20, 0, Math.PI * 2);
      ctx.fillStyle = centerGlow;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(66, 140, 255, 0.9)";
      ctx.fill();

      // Signal rings
      for (let r = 1; r <= 3; r++) {
        const pulsePhase = (time * 1.5 + r * 1.2) % (Math.PI * 2);
        const opacity = Math.max(0, 1 - pulsePhase / (Math.PI * 2)) * 0.12;
        ctx.beginPath();
        ctx.arc(cx, cy, radius + r * 12 + pulsePhase * 4, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(66, 140, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Orange accent points
      for (let i = 0; i < 2; i++) {
        const angle = time * 0.15 + i * Math.PI + Math.PI * 0.5;
        const dist = radius * 1.3;
        const x = cx + Math.cos(angle) * dist;
        const y = cy + Math.sin(angle) * dist;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(240, 140, 50, 0.7)";
        ctx.fill();
      }

      time += 0.016;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      aria-hidden="true"
    />
  );
}
