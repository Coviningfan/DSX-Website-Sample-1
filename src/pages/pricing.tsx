import { Check, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const TIERS = [
  {
    name: "Starter",
    calls: "Up to 4 concurrent calls",
    ideal: "Small office, retail counter, single location",
    price: "Starting at $29/mo per path",
    features: [
      "AI call handling & routing",
      "SMS & email integration",
      "Basic reporting dashboard",
      "Standard voice quality",
    ],
  },
  {
    name: "Professional",
    calls: "Up to 12 concurrent calls",
    ideal: "Multi-department business, growing team",
    price: "Starting at $39/mo per path",
    features: [
      "Everything in Starter",
      "Advanced AI agent customization",
      "Department-level routing",
      "Call recording & transcription",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    calls: "Unlimited concurrent calls",
    ideal: "High-volume operations, multi-location",
    price: "Custom pricing",
    features: [
      "Everything in Professional",
      "Custom AI model training",
      "Dedicated infrastructure",
      "Full API access",
      "White-glove onboarding",
      "24/7 premium support",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-44 pb-24 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            Pricing
          </p>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-[#191919]">
            Power Your Business
          </h1>
          <p className="mt-6 text-lg text-[#191919]/60 leading-relaxed max-w-2xl">
            Improving your business with DSX Edge AI does not cost thousands of dollars.
            We built our own AI tools so you don&rsquo;t pay enterprise markups.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 border ${
                tier.highlight
                  ? "border-[#0084FF] bg-[#0084FF]/[0.03] ring-1 ring-[#0084FF]/20"
                  : "border-gray-200 bg-white"
              }`}
            >
              {tier.highlight && (
                <span className="inline-block px-3 py-1 text-xs font-medium text-[#0084FF] bg-[#0084FF]/10 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="font-bold text-xl text-[#191919] mb-1">{tier.name}</h3>
              <p className="text-sm text-[#191919]/40 mb-4">{tier.calls}</p>
              <p className="text-xs text-[#191919]/50 mb-6">{tier.ideal}</p>

              <p className="text-2xl font-bold text-[#191919] mb-8">{tier.price}</p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#191919]/70">
                    <Check className="w-4 h-4 text-[#0084FF] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className={`block text-center px-6 py-3 text-sm font-medium rounded-2xl transition-all duration-200 ${
                  tier.highlight
                    ? "text-white bg-[#0084FF] hover:bg-[#0066CC]"
                    : "text-[#191919] bg-[#F4F3F3] hover:bg-[#eaeaea]"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[#0084FF] mb-2">$0</p>
              <p className="text-sm text-[#191919]/60">Per user, forever. We never charge per seat.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#0084FF] mb-2">24/7</p>
              <p className="text-sm text-[#191919]/60">Availability. Your AI works nights, weekends, holidays.</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#0084FF] mb-2">3x</p>
              <p className="text-sm text-[#191919]/60">Average call-capacity increase after deploying DSX Edge.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-4">
            Try it before you commit.
          </h2>
          <p className="text-[#191919]/60 leading-relaxed mb-3">
            Call our live demo and hear exactly how DSX Edge handles a real conversation.
          </p>
          <a
            href="tel:844-379-3343"
            className="inline-flex items-center gap-2 text-lg font-semibold text-[#0084FF] hover:text-[#0066CC] transition-colors duration-200 mb-8"
          >
            <Phone className="w-5 h-5" />
            844-DSX-Edge
          </a>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-2xl hover:scale-[1.02] transition-transform duration-200"
            style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
          >
            Book A Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
