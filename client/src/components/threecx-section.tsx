import { Award, Network, Wrench, ShieldCheck, Sparkles, Layers } from "lucide-react";
import logo3cx from "@assets/3CX-Logo.wine_1771727597371.webp";

export default function ThreeCXSection() {
  const reasons = [
    {
      icon: Layers,
      title: "3CX is the Phone Platform",
      description: "3CX gives you the phone system. DSX gives you the install, the integrations, the call flows, and the support. A platform alone doesn\u2019t run a business \u2014 a partner does.",
    },
    {
      icon: Award,
      title: "3CX Platinum Partner",
      description: "Top-tier partner status. Certified engineers. Direct line to the vendor. A real communications company \u2014 not a generic AI startup reselling someone else\u2019s phones.",
    },
    {
      icon: Network,
      title: "One Vendor for the Whole Stack",
      description: "Phones, trunking, connectivity, hosting, support \u2014 from one partner. One number to call when something needs attention. (It rarely does.)",
    },
    {
      icon: Sparkles,
      title: "AI Where It Actually Helps",
      description: "When the foundation is solid, we add AI to the parts that move the needle: answering after hours, qualifying leads, booking appointments. Optional, not the whole pitch.",
    },
    {
      icon: Wrench,
      title: "Built for Your Business \u2014 Not a SaaS Login",
      description: "DSX Edge is implemented, not subscribed-to. We design the call flow, wire up the CRM, connect the calendar, and tune the system to how your team actually works.",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Uptime \u2014 In Writing",
      description: "Data-center-backed infrastructure with a 99.9% uptime SLA. Reliable phones, reliable hosting. The foundation everything else stands on.",
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <img
            src={logo3cx}
            alt="3CX Platinum Partner \u2014 DSX Edge"
            width={3000}
            height={2000}
            loading="lazy"
            decoding="async"
            className="h-5 w-auto brightness-0 invert opacity-90 inline-block mb-4"
          />
          <p className="text-sm font-semibold tracking-wider uppercase text-blue-400 font-mono-dsx mb-4">
            3CX Platinum Partner \u00b7 Highest Tier
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
            3CX is the platform. DSX is the partner who makes it work.
          </h2>
          <p className="text-lg text-slate-300">
            3CX gives you the phone system. We deliver the install, the integrations, the call flows,
            the hosting, and the support \u2014 same team, for 12 years. When you\u2019re ready, we add AI
            on top. One partner. One bill. One number to call.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-slate-700 transition-colors group"
              data-testid={`threecx-card-${index}`}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:border-blue-500/40 transition-colors">
                <reason.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">{reason.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
