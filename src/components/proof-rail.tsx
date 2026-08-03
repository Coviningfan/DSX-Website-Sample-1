import { Shield, Headphones, Wrench, BarChart3 } from "lucide-react";

const proofPoints = [
  {
    metric: "14",
    label: "Locations Migrated",
    sublabel: "Zero downtime",
    icon: BarChart3,
  },
  {
    metric: "2,000+",
    label: "Extensions Deployed",
    sublabel: "Across 3 states",
    icon: Shield,
  },
  {
    metric: "37%",
    label: "Fewer Missed Calls",
    sublabel: "Average across clients",
    icon: Headphones,
  },
  {
    metric: "8+ yrs",
    label: "Telecom Experience",
    sublabel: "3CX Platinum partner",
    icon: Wrench,
  },
];

export default function ProofRail() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {proofPoints.map((point) => (
          <div key={point.label} className="flex items-start gap-3">
            <point.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <div className="font-mono text-2xl font-semibold tracking-tight text-foreground">
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
