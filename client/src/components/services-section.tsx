import { Network, Map, PlugZap, Sparkles, Check } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const steps = [
    {
      icon: Network,
      number: "01",
      title: "Modernize the Phones",
      tagline: "VoIP done right \u2014 by a 3CX Platinum Partner.",
      description:
        "VoIP, PBX, 3CX, SIP trunking, queues, extensions, voicemail, and support. The phone system your customers and staff actually use \u2014 deployed, managed, and supported by us.",
      flow: ["3CX platform \u00b7 VoIP & SIP routing", "Queues, extensions, voicemail, support", "99.9% uptime infrastructure"],
      iconBg: "bg-blue-700",
      numberColor: "text-blue-500/15",
      flowDot: "bg-blue-700",
    },
    {
      icon: Map,
      number: "02",
      title: "Map How You Actually Work",
      tagline: "Free workflow audit \u2014 no commitment.",
      description:
        "How do customers reach you? Where do leads go cold? What gets repeated by hand? We map every step before we automate anything. You see exactly where money is leaking before you spend a dollar.",
      flow: ["Customer & staff workflow audit", "Where you lose leads \u00b7 bottlenecks \u00b7 gaps", "Clear blueprint, yours to keep"],
      iconBg: "bg-slate-700",
      numberColor: "text-slate-500/15",
      flowDot: "bg-slate-700",
    },
    {
      icon: PlugZap,
      number: "03",
      title: "Wire It All Together",
      tagline: "Phones, CRM, calendar \u2014 one system.",
      description:
        "Connect the phones to your CRM, calendar, ticket system, and reporting. No more copying numbers between tabs. No more leads lost in voicemail. Every tool you already pay for, finally talking to each other.",
      flow: ["CRM & calendar connections", "Notifications & reporting", "One source of truth"],
      iconBg: "bg-cyan-600",
      numberColor: "text-cyan-500/15",
      flowDot: "bg-cyan-600",
    },
    {
      icon: Sparkles,
      number: "04",
      title: "Add AI Where It Pays Off",
      tagline: "Optional \u2014 only where it makes a difference.",
      description:
        "When the phones, the flow, and the integrations are solid, we add an AI layer to the spots that move the needle: after-hours answering, lead qualification, booking, follow-up, call summaries. Your logic, not a generic script.",
      flow: ["Phone system answers & qualifies 24/7", "Books, updates CRM, sends follow-ups", "Escalates only when a human is needed"],
      iconBg: "bg-orange-600",
      numberColor: "text-orange-500/15",
      flowDot: "bg-orange-600",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-5">
          <p className="text-sm font-semibold tracking-wider uppercase text-blue-400 mb-4 font-mono-dsx">
            How DSX Edge Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Built on communications. Finished with intelligence.
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We modernize the phones, map your real workflow, connect the tools you
            already use \u2014 and then, only then, add AI where it actually pays off.
          </p>
        </div>

        <p className="text-center text-sm text-slate-500 mb-16 max-w-2xl mx-auto font-mono-dsx tracking-tight">
          Modernize \u2192 Map \u2192 Connect \u2192 Add AI
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, index) => (
            <div key={step.title} className="group">
              <div
                className="relative bg-slate-900 rounded-lg p-6 h-full border border-slate-800 hover:border-slate-700 transition-colors overflow-hidden"
                data-testid={`service-card-${index}`}
              >
                <div className={`absolute top-4 right-5 text-6xl font-black ${step.numberColor} leading-none select-none`}>
                  {step.number}
                </div>
                <div className="mb-5 relative">
                  <div
                    className={`${step.iconBg} w-12 h-12 rounded-lg flex items-center justify-center`}
                  >
                    <step.icon className="text-white h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 relative leading-snug">{step.title}</h3>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded bg-white/5 text-blue-300 border border-white/10 mb-3 relative">
                  {step.tagline}
                </span>
                <p className="text-slate-400 leading-relaxed relative mb-4 text-[13px]">{step.description}</p>

                <div className="relative pt-3 border-t border-slate-800 space-y-2">
                  {step.flow.map((line, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className={`w-4 h-4 rounded-full ${step.flowDot} flex items-center justify-center flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity mt-0.5`}>
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      <span className="text-[11.5px] text-slate-300 font-medium leading-snug">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button
              data-testid="button-services-cta"
              className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-8 py-6 text-base font-semibold transition-colors duration-200"
            >
              Claim Your Free Workflow Audit
            </Button>
          </Link>
          <p className="text-xs text-slate-500 mt-3">No commitment. You keep the blueprint either way.</p>
          <p className="text-sm text-slate-400 mt-6 max-w-2xl mx-auto">
            Dig deeper:{" "}
            <Link href="/blog/3cx-platinum-partner-what-it-means" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">why our 3CX Platinum Partner status matters</Link>
            {", "}
            <Link href="/blog/ai-voice-agents-for-contractors" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">AI voice agents for contractors</Link>
            {", or read about "}
            <Link href="/about" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">our 12-year communications story</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
