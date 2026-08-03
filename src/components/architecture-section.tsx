import { Server, Plug, BrainCircuit } from "lucide-react";

const layers = [
  {
    icon: Server,
    title: "Communications",
    tagline: "The foundation",
    items: [
      "3CX PBX deployment and management",
      "SIP trunking and carrier negotiation",
      "Multi-location failover and redundancy",
      "HIPAA / PCI compliant call recording",
    ],
  },
  {
    icon: Plug,
    title: "Integrations",
    tagline: "The connective tissue",
    items: [
      "CRM screen pop (Salesforce, HubSpot, custom)",
      "Calendar sync and presence routing",
      "SMS and email workflows triggered by calls",
      "Webhook bridge to any REST API",
    ],
  },
  {
    icon: BrainCircuit,
    title: "AI (Where It Earns Its Keep)",
    tagline: "Optional. Purpose-built.",
    items: [
      "24/7 AI receptionist with department-aware routing",
      "Post-call transcription and auto-summarization",
      "Sentiment analysis for QA and coaching",
      "Voice-based lookup against your knowledge base",
    ],
  },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Architecture
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Three layers. Zero bloat.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            DSX doesn't sell you a platform you don't need. Start with
            communications. Add integrations when you're ready. Layer in AI
            only where it actually improves outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {layers.map((layer) => (
            <div
              key={layer.title}
              className="rounded-md border border-border bg-background p-8"
            >
              <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                <layer.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-xs font-mono text-muted-foreground mb-2">
                {layer.tagline}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-6">
                {layer.title}
              </h3>
              <ul className="space-y-3">
                {layer.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
