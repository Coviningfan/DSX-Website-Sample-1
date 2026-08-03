import { PhoneCall, ArrowRight, GitBranch, UserCheck, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Call Arrives",
    desc: "Inbound call hits the DSX-managed PBX. Caller ID and intent are captured before the first ring.",
  },
  {
    icon: GitBranch,
    title: "Intelligent Routing",
    desc: "Skills-based routing sends the call to the right person or department based on time, availability, and caller history.",
  },
  {
    icon: UserCheck,
    title: "Screen Pop + Context",
    desc: "The recipient sees the caller's full history, active tickets, and account status on their screen instantly.",
  },
  {
    icon: BarChart3,
    title: "Logged + Measured",
    desc: "Every call is recorded, transcribed, and tagged. Dashboards show resolution times, abandon rates, and agent performance.",
  },
];

export default function CallFlowSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            One call flow, end to end
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            From the moment a call hits your number to the dashboard that tracks
            resolution. No black boxes, no proprietary magic. Just engineering
            you can see.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block w-4 h-4 text-muted-foreground/30" />
                )}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
