import { PhoneCall, BrainCircuit, Shield, ArrowUpRight, ChevronRight, Headphones, Hotel, Stethoscope, Car, Scale, Clock, BarChart3 } from "lucide-react";
import SignalOrb from "../components/signal-orb";

const proofStats = [
  { metric: "99.97%", label: "Uptime" },
  { metric: "2.4M+", label: "Minutes routed / month" },
  { metric: "140+", label: "Active deployments" },
  { metric: "58%", label: "Average cost reduction" },
];

const industries = [
  {
    icon: Hotel,
    name: "Hotels & Hospitality",
    scenario: "A guest calls at 2 AM about a flooded bathroom. The AI routes them to the on-call maintenance team — not the front desk.",
    outcome: "Guest issues resolved 3× faster. Front desk freed for check-ins.",
    demo: '"Press 1 for reservations, 2 for maintenance, or say what you need."',
  },
  {
    icon: Stethoscope,
    name: "Medical Practices",
    scenario: "A patient calls to reschedule. The AI checks the calendar, offers open slots, and confirms — no front-desk time used.",
    outcome: "HIPAA-compliant. BAA included. Staff handle 40% fewer admin calls.",
    demo: '"Your appointment is confirmed for Tuesday at 10:15 AM. A reminder will be sent."',
  },
  {
    icon: Car,
    name: "Automotive & Service",
    scenario: "A customer calls about their car being ready. The AI pulls the repair status and reads it back — no hold, no transfer.",
    outcome: "Service bay throughput up. Missed calls down 60%+.",
    demo: '"Your vehicle is ready for pickup. Service hours are until 6 PM."',
  },
  {
    icon: Scale,
    name: "Legal Practices",
    scenario: "A potential client calls after hours. The AI qualifies the lead, captures case type and contact, and books a consultation.",
    outcome: "Zero intake calls missed. Attorney reviews qualified leads, not voicemails.",
    demo: '"I\'ll have Mr. Bonner\'s office call you tomorrow at 9 AM. Is that a good time?"',
  },
];

const pricingTiers = [
  {
    name: "Core",
    price: "$499",
    period: "/mo",
    desc: "Phone system + AI answering",
    features: [
      "3CX hosted deployment",
      "SIP trunking included",
      "AI receptionist (voice)",
      "Call routing & IVR",
      "Email + SMS alerts",
      "Standard support (8–5 PT)",
    ],
    cta: "Start with Core",
    featured: false,
  },
  {
    name: "Connected",
    price: "$799",
    period: "/mo",
    desc: "Phone + AI + CRM integration",
    features: [
      "Everything in Core",
      "CRM integration (HubSpot, Salesforce, etc.)",
      "Click-to-dial & screen pop",
      "Call logging & analytics",
      "SMS automation",
      "Priority support",
    ],
    cta: "Go Connected",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Multi-site, HIPAA, custom workflows",
    features: [
      "Everything in Connected",
      "Multi-site deployment",
      "HIPAA BAA + compliance",
      "Custom API integrations",
      "Dedicated account manager",
      "24/7 support",
    ],
    cta: "Talk to us",
    featured: false,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      {/* Hero — copy left, orb smaller on right */}
      <section className="relative px-6 pt-20 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              AI-Powered Business Phone Systems
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-balance">
              Never miss another
              <br />
              customer call again.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg leading-relaxed">
              A phone system that answers, routes, qualifies, and books —
              whether your team is at their desks or asleep. 3CX, carrier-grade
              infrastructure, and AI that only does what earns its keep.
            </p>

            {/* Demo phone number */}
            <div className="mt-8 p-4 border border-border/60 bg-card/40 inline-block">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
                Try the demo
              </p>
              <a
                href="tel:+17752345678"
                className="font-mono text-2xl font-semibold tracking-wide text-primary hover:text-primary/80 transition-colors"
              >
                (775) 234-5678
              </a>
              <p className="mt-1 text-xs text-muted-foreground">
                Call it. It's live. Ask it anything.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                See pricing
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-sm font-medium hover:bg-secondary transition-colors"
              >
                Request a workflow audit
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center">
            <div className="w-full max-w-[420px]">
              <SignalOrb />
            </div>
          </div>
        </div>
      </section>

      {/* Proof rail */}
      <section className="px-6 pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-b border-border/50">
          {proofStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-2xl sm:text-3xl font-semibold tracking-tight">
                {stat.metric}
              </div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works — simple, not technical */}
      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          How it works
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-balance">
          Your customers talk. Our system listens, routes, and follows up.
        </h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="mt-1 shrink-0 w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <PhoneCall className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold">1. They call your number</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Same business number. The AI answers instantly — no hold music,
                no "press 9 to repeat."
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="mt-1 shrink-0 w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <BrainCircuit className="w-4 h-4 text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold">2. The AI figures out what they need</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                It asks questions, checks your calendar, looks up account
                details — and routes, books, or answers accordingly. No
                buttons for callers to push unless they want to.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="mt-1 shrink-0 w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-orange-400" />
            </div>
            <div>
              <h3 className="font-semibold">3. Your team gets the summary — or the call</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Urgent? It rings a human. Routine? It handles it and sends you
                a summary. CRM updated, appointment booked, follow-up queued —
                automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry scenarios */}
      <section id="industries" className="px-6 pb-24 max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Industry Scenarios
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-balance">
          Built for industries where calls are revenue.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Same technology, different playbooks. Here's how the AI handles four
          very different businesses.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="p-6 border border-border/60 bg-card/40"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <ind.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold">{ind.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {ind.scenario}
              </p>
              <div className="p-3 mb-3 bg-background border border-border/40 italic text-sm text-muted-foreground leading-relaxed">
                {ind.demo}
              </div>
              <p className="text-xs font-medium text-blue-400">
                {ind.outcome}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture: Three layers — kept but simplified */}
      <section id="architecture" className="px-6 pb-24 max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Under the Hood
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-balance">
          Three layers. No mystery.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-border/60 bg-card/40">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
              <PhoneCall className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Communications</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              3CX hosted on DSX infrastructure. SIP trunks, desk phones,
              softphones, conference rooms. The phone system itself.
            </p>
          </div>
          <div className="p-6 border border-border/60 bg-card/40 md:mt-8">
            <div className="w-10 h-10 rounded-lg bg-slate-400/10 flex items-center justify-center mb-5">
              <Shield className="w-5 h-5 text-slate-400" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Infrastructure</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Carrier-grade datacenter in Reno, Nevada. Direct carrier peering.
              HIPAA BAA available. SOC 2 audited.
            </p>
          </div>
          <div className="p-6 border border-border/60 bg-card/40 md:mt-16">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-5">
              <BrainCircuit className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="font-semibold text-lg mb-3">AI (Optional)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Voice AI receptionist, CRM lookups, real-time summaries. Added
              only where it earns its keep. No black boxes.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 pb-24 max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Pricing
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-balance">
          Straightforward pricing. No per-seat surprises.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Per-seat pricing punishes you for growing. DSX charges by capacity —
          your team scales, your bill stays predictable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-6 border ${
                tier.featured
                  ? "border-primary/50 bg-primary/5 ring-1 ring-primary/20"
                  : "border-border/60 bg-card/40"
              }`}
            >
              {tier.featured && (
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary mb-3">
                  Most popular
                </p>
              )}
              <h3 className="font-semibold text-lg">{tier.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-semibold">{tier.price}</span>
                {tier.period && (
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{tier.desc}</p>
              <ul className="mt-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-primary/60" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 block text-center px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  tier.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-secondary"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies — editorial, kept from original */}
      <section id="case-studies" className="px-6 pb-24 max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Case Studies
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-balance">
          Real deployments. Measurable results.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Three different businesses, three different problems, one approach. No
          filler — just what was built, why, and what changed.
        </p>
        <div className="space-y-16">
          <article className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 flex items-start">
              <span className="font-mono text-5xl font-semibold text-primary/25 leading-none">01</span>
            </div>
            <div className="md:col-span-3">
              <div className="flex flex-wrap gap-3 items-center mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Synology</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">Washington State • Mid-Market — Manufacturing</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Unified Communications for Multi-Site Manufacturing</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">challenge</p>
                  <p className="mt-1 text-sm leading-relaxed">Legacy on-prem PBX across multiple locations. No centralized management or reporting.</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">solution</p>
                  <p className="mt-1 text-sm leading-relaxed">3CX enterprise deployment with capacity-based DSX trunks. Department-aware call-flow routing. CRM integration.</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">results</p>
                  <p className="mt-1 text-sm leading-relaxed">46% monthly spend reduction. Centralized management across 4 sites.</p>
                </div>
              </div>
            </div>
          </article>

          <article className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 flex items-start">
              <span className="font-mono text-5xl font-semibold text-primary/25 leading-none">02</span>
            </div>
            <div className="md:col-span-3">
              <div className="flex flex-wrap gap-3 items-center mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Law Office of Michael H. Bonner</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">California • Small Business — Legal</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Call handling for a practice that can't miss calls</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">challenge</p>
                  <p className="mt-1 text-sm leading-relaxed">Single attorney relying on call forwarding. No overflow handling. Missed calls meant missed clients.</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">solution</p>
                  <p className="mt-1 text-sm leading-relaxed">Dedicated 3CX instance with time-based routing, voicemail-to-text transcription, and a softphone client for mobile.</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">results</p>
                  <p className="mt-1 text-sm leading-relaxed">Zero missed calls in 12 months. Client callback time reduced from 4 hours to 22 minutes.</p>
                </div>
              </div>
            </div>
          </article>

          <article className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 flex items-start">
              <span className="font-mono text-5xl font-semibold text-primary/25 leading-none">03</span>
            </div>
            <div className="md:col-span-3">
              <div className="flex flex-wrap gap-3 items-center mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Synergy Homeopathic</span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">Arizona • Small Business — Healthcare</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">HIPAA-Compliant Phone System for a Growing Practice</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">challenge</p>
                  <p className="mt-1 text-sm leading-relaxed">Consumer VoIP line without HIPAA compliance or business features. Growing patient volume required a real phone system.</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">solution</p>
                  <p className="mt-1 text-sm leading-relaxed">HIPAA-compliant 3CX deployment with encrypted call paths, BAA coverage, and a webRTC client for practitioner mobility.</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">results</p>
                  <p className="mt-1 text-sm leading-relaxed">Practice grew 40%. Phone system scaled without hardware changes.</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Trust & Infrastructure — kept, simplified */}
      <section id="infrastructure" className="px-6 pb-24 max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Infrastructure & Trust
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-balance">
          Business telecom should live on infrastructure you can see.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          No shared-tenancy VoIP, no resold minutes from a reseller of a
          reseller. DSX infrastructure is carrier-direct and purpose-built.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-border/60 bg-card/40">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Carrier-Grade Datacenter</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All DSX infrastructure runs from a carrier-grade datacenter in
              Reno, Nevada. Direct peering with major carriers. 99.9% uptime SLA.
            </p>
          </div>
          <div className="p-6 border border-border/60 bg-card/40">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-3">HIPAA Compliant</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full BAA coverage available. Encrypted call paths and recording
              storage meet healthcare requirements.
            </p>
          </div>
          <div className="p-6 border border-border/60 bg-card/40">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
              <Shield className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-3">SOC 2 Type II</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Independently audited controls for security, availability, and
              confidentiality. Annual certification maintained.
            </p>
          </div>
        </div>
      </section>

      {/* Resources + CTA */}
      <section id="contact" className="px-6 pb-24 max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Resources
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-balance">
          Four things to read before your next phone system decision.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {[
            "3CX Platinum Partner: What It Means",
            "Multi-Tenant 3CX Explained",
            "Why Phone System Pricing Models Matter",
            "Three Things to Do Before You Turn On an AI Receptionist",
          ].map((title, i) => (
            <a
              key={i}
              href="#"
              className="p-4 border border-border/60 hover:border-primary/30 transition-colors group"
            >
              <p className="font-medium group-hover:text-primary transition-colors">{title}</p>
              <p className="mt-1 text-xs text-muted-foreground">Read guide →</p>
            </a>
          ))}
        </div>

        <div className="text-center p-8 border border-border/60 bg-card/40">
          <h2 className="text-xl font-semibold mb-4">
            Your current phone system isn't as good as you think.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            We'll map your call routing, audit your infrastructure, and show you
            where a purpose-built system saves money and reduces chaos.
          </p>
          <a
            href="mailto:info@dsxedge.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Request a free workflow audit
          </a>
        </div>
      </section>
    </main>
  );
}
