import { ArrowRight, Phone, Check, Star } from "lucide-react";
import SignalOrb from "@/components/signal-orb";

const DEPARTMENTS = [
  "Customer Service",
  "Sales & Outreach",
  "Dispatch & Field Ops",
  "Billing & Collections",
  "HR & Onboarding",
  "Tech Support",
  "Marketing",
  "Compliance & QA",
];

const INDUSTRIES = [
  { label: "Telecom & ISP", desc: "Tier-1 routing, LNP, field dispatch" },
  { label: "Field Services", desc: "HVAC, plumbing, electrical, pest control" },
  { label: "Healthcare", desc: "HIPAA-compliant patient intake & scheduling" },
  { label: "Legal", desc: "Client triage, conflict checks, case status" },
  { label: "Property Mgmt", desc: "Maintenance dispatch, tenant screening" },
  { label: "Financial Services", desc: "Loan servicing, collections, KYC" },
];

const PRICING_TIERS = [
  {
    name: "Starter",
    price: "$499",
    period: "/mo",
    desc: "One department, essential AI coverage.",
    features: [
      "Up to 3 AI agents",
      "Voice + SMS + Email",
      "Basic CRM integration",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Growth",
    price: "$1,299",
    period: "/mo",
    desc: "Multi-department, custom workflows.",
    features: [
      "Up to 10 AI agents",
      "Advanced call routing",
      "Custom integrations",
      "Real-time dashboard",
      "Priority support",
      "Dedicated account manager",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Full-scale AI ops with compliance guardrails.",
    features: [
      "Unlimited AI agents",
      "SSO + audit logging",
      "Custom compliance rules",
      "99.99% SLA",
      "24/7 support",
      "On-premise deployment option",
    ],
    cta: "Talk to Sales",
    featured: false,
  },
];

const PILLARS = [
  { num: "01", label: "Conversational", desc: "Natural voice AI that answers, routes, and resolves — 24/7 across phone, SMS, and email." },
  { num: "02", label: "Connected", desc: "Deep integrations with your CRM, dispatch, billing, and scheduling tools — no rip-and-replace." },
  { num: "03", label: "Compliant", desc: "Built for regulated industries: call recording, audit trails, HIPAA, and SOC 2 compliance." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* ── HERO ── */}
      <section id="hero" className="relative h-screen flex flex-col overflow-hidden">
        <div className="hero-tunnel-bg absolute inset-0">
          <img
            src="/images/dsx-edge-bkg.jpg"
            alt="DSX Edge"
            className="relative z-[1] w-full h-full object-contain object-center"
          />
        </div>
        <div className="absolute inset-0 bg-black/[0.08] pointer-events-none" />

        <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24">
          <div className="max-w-2xl">
            <h1 className="font-sans font-bold text-[#191919] text-4xl sm:text-5xl md:text-6xl lg:text-[75px] leading-[1.05] tracking-[-0.02em] text-balance">
              Every Department,<br />Every Function, 24/7.
            </h1>
            <p className="mt-5 sm:mt-6 md:mt-8 max-w-xl text-base md:text-lg text-[#191919]/70 leading-relaxed tracking-[-0.01em]">
              DSX Edge AI handles routine calls, texts, and tasks — freeing your team for the work that grows your business.
            </p>
            <a
              href="tel:+18443793343"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 text-base font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-2xl hover:scale-[1.02] transition-transform duration-200"
              style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
            >
              <Phone className="w-4 h-4" />
              Call the Live Demo → 844-DSX-Edge
            </a>
            <p className="mt-3 text-sm text-[#191919]/50">
              Pick up the phone and hear it yourself
            </p>
          </div>
        </div>

        {/* ── BOTTOM INFO PANEL ── */}
        <div className="relative z-10 w-full">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 border-b-0 pt-8 sm:pt-12 md:pt-16 px-5 sm:px-8 md:px-12 pb-0 shadow-sm">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
                    What do we do?
                  </span>
                  <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-sans font-bold leading-tight tracking-tight text-[#191919]">
                    AI that answers
                    <br className="hidden sm:block" />
                    the phone — and a lot more.
                  </h2>
                </div>
                <div className="flex items-end">
                  <p className="text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">
                    Voice AI built for operations-heavy businesses. DSX Edge agents don't just chat — they pull up accounts, book appointments, route calls, and log every interaction in the tools your team already uses.
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-10 h-px bg-gray-200 w-full" />

              <div className="grid sm:grid-cols-3 gap-[2px] sm:gap-[3px]">
                {PILLARS.map((p) => (
                  <button
                    key={p.num}
                    className="group flex items-center justify-between bg-[#F4F3F3] hover:bg-[#eaeaea] transition-all duration-200 cursor-pointer px-4 sm:px-6 py-3.5 sm:py-4 text-left"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#191919]/40 text-sm font-mono">{p.num}</span>
                      <span className="text-[#191919]/30">/</span>
                      <span className="font-medium text-[#191919] text-sm sm:text-base">
                        {p.label}
                      </span>
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all duration-200" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
              How it works
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-[#191919]">
              Three layers. One platform.
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-[#191919]/70 leading-relaxed">
              Communications, Infrastructure, and Intelligence — integrated into a single operating model that scales with your business.
            </p>
          </div>
          <SignalOrb />
        </div>
      </section>

      {/* ── DEPARTMENTS ── */}
      <section id="departments" className="py-24 sm:py-32 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
              Every department
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-[#191919]">
              AI that fits how you operate
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-[#191919]/70 leading-relaxed">
              From the front desk to the back office — DSX Edge covers every function.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept}
                className="glass-card px-5 py-4 text-sm font-medium text-[#191919] hover:bg-white/50 transition-colors duration-200"
              >
                {dept}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section id="industries" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
              Industries
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-[#191919]">
              Purpose-built for high-compliance operations
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.label}
                className="glass-card px-6 py-5 hover:bg-white/50 transition-colors duration-200"
              >
                <h3 className="font-semibold text-[#191919]">{ind.label}</h3>
                <p className="mt-1 text-sm text-[#191919]/60 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 sm:py-32 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-14">
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
              Pricing
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-[#191919]">
              Transparent, no surprises
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-6 sm:p-8 border ${
                  tier.featured
                    ? "bg-white border-[#0084FF]/30 shadow-lg ring-1 ring-[#0084FF]/20"
                    : "glass-card"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-6 px-3 py-0.5 text-xs font-semibold text-white bg-[#0084FF] rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-[#191919]">{tier.name}</h3>
                <div className="mt-3 flex items-baseline gap-0.5">
                  <span className="text-4xl font-bold text-[#191919]">{tier.price}</span>
                  {tier.period && <span className="text-[#191919]/50">{tier.period}</span>}
                </div>
                <p className="mt-2 text-sm text-[#191919]/60">{tier.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-[#191919]/70">
                      <Check className="w-4 h-4 text-[#0084FF] mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block text-center py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    tier.featured
                      ? "bg-[#0084FF] text-white hover:bg-[#0084FF]/90"
                      : "bg-[#191919] text-white hover:bg-[#191919]/90"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 sm:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 md:px-14 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
            About
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-[#191919]">
            We're operators, not just engineers
          </h2>
          <p className="mt-5 text-[#191919]/70 leading-relaxed max-w-xl mx-auto">
            DSX Edge was built inside a working telecom — not a VC-backed lab. Every feature comes from real ops pain: missed calls, dropped handoffs, broken integrations. We build AI that earns its seat at the table.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            {["Reno, NV", "Founded 2025", "US-based support"].map((s) => (
              <span key={s} className="glass-card px-4 py-2 text-sm text-[#191919]/70">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 sm:py-32 bg-[#F8F8F8]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 md:px-14 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
            Contact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-sans font-bold text-[#191919]">
            Let's talk
          </h2>
          <p className="mt-4 text-[#191919]/70 leading-relaxed max-w-lg mx-auto">
            Whether you're exploring AI for the first time or scaling to enterprise — we'll walk you through a live demo on your own use case.
          </p>
          <a
            href="tel:+18443793343"
            className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 text-base font-medium text-white bg-[#0084FF] rounded-xl hover:bg-[#0084FF]/90 transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            Call 844-DSX-Edge
          </a>
          <p className="mt-3 text-sm text-[#191919]/50">
            Or email{" "}
            <a href="mailto:hello@dsxedge.com" className="text-[#0084FF] hover:underline">
              hello@dsxedge.com
            </a>
          </p>
        </div>
      </section>

      {/* ── PRE-FOOTER CTA ── */}
      <section className="py-16 bg-[#191919] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 md:px-14 text-center">
          <h2 className="text-2xl sm:text-3xl font-sans font-bold">
            See the platform handle your actual calls
          </h2>
          <p className="mt-3 text-white/60 max-w-lg mx-auto">
            Request a workflow audit — we'll map your current call flow and show where AI can take over.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#191919] bg-white rounded-xl hover:bg-white/90 transition-colors duration-200"
          >
            Request a Workflow Audit
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
