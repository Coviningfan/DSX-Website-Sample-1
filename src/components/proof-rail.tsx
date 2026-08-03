import { Award, Clock, BarChart3, Shield } from "lucide-react";

const proofPoints = [
  {
    metric: "12+",
    label: "Years Deploying",
    sublabel: "Real phone systems",
    icon: Clock,
  },
  {
    metric: "3CX",
    label: "Platinum Partner",
    sublabel: "Highest tier",
    icon: Award,
  },
  {
    metric: "Up to 60%",
    label: "Cost Reduction",
    sublabel: "Vs. legacy carriers",
    icon: BarChart3,
  },
  {
    metric: "99.9%",
    label: "Uptime SLA",
    sublabel: "In writing",
    icon: Shield,
  },
];

export default function ProofRail() {
  return (
    <section className="border-y border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {proofPoints.map((point) => (
          <div key={point.label} className="flex items-start gap-4 p-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <point.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="font-mono text-xl font-bold text-foreground tracking-tight">
                {point.metric}
              </div>
              <div className="text-sm font-medium text-foreground mt-0.5">
                {point.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {point.sublabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
