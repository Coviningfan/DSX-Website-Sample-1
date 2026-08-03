import { Server, Shield, Clock, Users, Wrench } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "99.9% Uptime — In Writing",
    desc: "Data-center-backed infrastructure with a 99.9% uptime SLA. Reliable phones, reliable hosting.",
  },
  {
    icon: Clock,
    title: "12+ Years of Deployments",
    desc: "Same team, same company. We've been installing 3CX and building voice infrastructure since long before AI was in the conversation.",
  },
  {
    icon: Server,
    title: "One Vendor for the Whole Stack",
    desc: "Phones, trunking, connectivity, hosting, support — from one partner. One number to call when something needs attention.",
  },
  {
    icon: Wrench,
    title: "Built for Your Business — Not a SaaS Login",
    desc: "DSX Edge is implemented, not subscribed-to. We design the call flow, wire up the CRM, connect the calendar, and tune the system to how your team actually works.",
  },
  {
    icon: Users,
    title: "3CX Platinum Partner",
    desc: "Top-tier partner status. Certified engineers. Direct line to the vendor.",
  },
];

export default function InfrastructureSection() {
  return (
    <section id="infrastructure" className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Infrastructure &amp; Trust
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance mb-4">
            The foundation everything else stands on
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl">
            DSX Edge starts at the communications layer and uses it as the entry point
            to modernize the rest of the operation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4 p-5 rounded-lg bg-background border border-border">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
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
