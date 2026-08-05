import { Check, ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-44 pb-24 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            Pricing
          </p>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-[#191919]">
            Power Your Business
          </h1>
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-[#191919]/80">
            Major Features &middot; Minor Price &middot; Great ROI
          </h2>
          <p className="mt-6 text-lg text-[#191919]/60 leading-relaxed max-w-2xl">
            Improving your business with DSX Edge AI does not cost thousands of dollars.
            We built our own AI tools so most of the customization and training is automated —
            saving hundreds of man-hours that we pass on to you.
          </p>
        </div>
      </section>

      {/* Telephone pricing */}
      <section className="py-20 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
                Telephone Service
              </p>
              <h2 className="font-bold text-2xl sm:text-3xl leading-tight tracking-tight text-[#191919] mb-6">
                Priced by concurrent call capacity, not per person.
              </h2>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
                <p className="text-4xl font-bold text-[#191919] mb-2">We Never Charge Per User.</p>
                <p className="text-sm text-[#191919]/60 leading-relaxed">
                  No per-seat fees, no per-extension markups, no "line" charges.
                  Industry-standard pricing schemes always cost more. We size your system
                  based on what your business actually needs — not on how many people sit at desks.
                </p>
              </div>
              <p className="text-sm text-[#191919]/50 leading-relaxed">
                We calculate your capacity by looking at three things: what your company does,
                how many people you have across every location, and how your phones are actually
                used day-to-day. That gives us the number of concurrent calls to support — the
                only number that matters.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
                AI Services
              </p>
              <h2 className="font-bold text-2xl sm:text-3xl leading-tight tracking-tight text-[#191919] mb-6">
                Two components. No surprises.
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-lg text-[#191919] mb-2">
                    Customization &amp; Training
                  </h3>
                  <p className="text-3xl font-bold text-[#0084FF] mb-2">$300 – $1,000</p>
                  <p className="text-sm text-[#191919]/60 leading-relaxed">
                    One-time setup to match the AI agents to your specific business functions,
                    workflows, products, pricing, and payment terms. Cost depends on how many
                    business functions you automate.
                  </p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-lg text-[#191919] mb-2">
                    AI Compute &amp; Storage
                  </h3>
                  <p className="text-3xl font-bold text-[#0084FF] mb-2">15% – 20%</p>
                  <p className="text-sm text-[#191919]/60 leading-relaxed">
                    Ongoing monthly cost that covers AI processing and data storage —
                    calculated as 15% to 20% of your telephone service charge.
                    Scales with your usage, not with a pricing committee.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-[#191919]/50 leading-relaxed">
                Together, these charges are almost always less than what you pay for your
                current telephone service alone — and you get AI-powered operations on top.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI framing */}
      <section className="py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4 text-center">
            Return On Investment
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] text-center mb-12">
            A minimal investment that pays for itself in a week.
          </h2>
          <div className="bg-[#F4F3F3] rounded-2xl p-8 md:p-12">
            <p className="text-lg text-[#191919]/80 leading-relaxed mb-6">
              Adding DSX Edge AI typically pays for itself in less than a week with just
              <strong className="text-[#191919]"> one sale you would have missed </strong>
              or your staff's increased productivity because they aren't spending time on
              repetitive, low-value tasks.
            </p>
            <p className="text-lg font-bold text-[#0084FF]">
              Everything after that is pure profit.
            </p>
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="py-24 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] text-center mb-16">
            Adding DSX Edge AI is equivalent to adding staff —
            at a fraction of the cost.
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <p className="text-4xl font-bold text-[#0084FF] mb-2">$0</p>
              <p className="text-sm text-[#191919]/60">Per user, forever. No seat licenses.</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <p className="text-4xl font-bold text-[#0084FF] mb-2">24/7</p>
              <p className="text-sm text-[#191919]/60">Availability. No overtime, no PTO, no benefits.</p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <p className="text-4xl font-bold text-[#0084FF] mb-2">&lt;1</p>
              <p className="text-sm text-[#191919]/60">Week to break even on a single recovered sale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-4">
            Hear it for yourself.
          </h2>
          <p className="text-[#191919]/60 leading-relaxed mb-3">
            Call our live demo. No forms, no funnel — just pick up the phone.
          </p>
          <a
            href="tel:844-379-3343"
            className="inline-flex items-center gap-2 text-lg font-semibold text-[#0084FF] hover:text-[#0066CC] transition-colors duration-200 mb-8"
          >
            <Phone className="w-5 h-5" />
            844-DSX-Edge
          </a>
          <div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-2xl hover:scale-[1.02] transition-transform duration-200"
              style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
            >
              Book A Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
