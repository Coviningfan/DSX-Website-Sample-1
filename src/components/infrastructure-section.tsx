import { Shield, Clock, HardDrive, Wrench, BadgeCheck } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    desc: "All deployments meet HIPAA technical safeguards for ePHI — BAA available for covered entities.",
  },
  {
    icon: Clock,
    title: "99.99% Uptime SLA",
    desc: "Multi-region failover across Nevada and California data centers with automatic cutover.",
  },
  {
    icon: HardDrive,
    title: "NV Data Residency",
    desc: "Call recordings, transcriptions, and logs stay in Nevada. No third-country data handling.",
  },
  {
    icon: Wrench,
    title: "3CX Platinum Partner",
    desc: "Certified for advanced deployments, custom integrations, and priority vendor escalation.",
  },
  {
    icon: BadgeCheck,
    title: "SOC 2 Type II",
    desc: "Annual independent audit of security, availability, and confidentiality controls.",
  },
];

export default function InfrastructureSection() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Infrastructure &amp; Trust
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Built for operations that can't go down
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Healthcare, logistics, financial services — these industries don't
            get second chances on phone uptime. Our infrastructure is built
            accordingly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-start gap-4 p-6">
              <item.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
