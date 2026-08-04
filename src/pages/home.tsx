import SignalOrb from "@/components/signal-orb";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DEPARTMENTS = [
  "Customer Service",
  "Order Taking",
  "Appointment Setting",
  "Return Processing & RMAs",
  "Dispatch",
  "Inventory Control",
  "Accounting Inquiries",
];

const TRUSTED_BY = ["Switch", "3CX", "Cisco", "Polycom", "Yealink"];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <section className="relative h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0 hero-tunnel-bg">
          <div className="bg" />
          <img
            src="/images/dsx-edge-bkg.jpg"
            alt=""
            className="relative z-[1] w-full h-full object-contain object-center"
          />
        </div>

        <div className="absolute inset-0 z-[5] hero-tunnel-overlay" />

        <div className="relative z-10 flex flex-col items-center flex-1 pt-32 px-4 sm:px-6">
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] -tracking-[2px] text-[#191919] text-center max-w-5xl">
            Every Department, Every Function, 24/7.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[#191919]/60 leading-relaxed max-w-2xl text-center">
            DSX Edge AI handles routine calls, texts, and tasks — freeing your team for
            the work that grows your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
            <a
              href="tel:844-379-3343"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-2xl hover:scale-[1.02] transition-transform duration-200"
              style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
            >
              <Phone className="w-4 h-4" />
              Call the Live Demo → 844-DSX-Edge
            </a>
            <p className="text-sm text-[#191919]/50">
              Pick up the phone and hear it yourself
            </p>
          </div>
        </div>

        <div className="relative z-10 mt-auto w-full max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 border-b-0 pt-8 sm:pt-12 md:pt-16 px-5 sm:px-8 md:px-12 pb-0 shadow-sm rounded-t-2xl">
            <div className="grid md:grid-cols-2 gap-6 md:gap-16">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#191919]/50 font-medium">
                  What does DSX Edge do?
                </p>
                <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-[#191919]">
                  Conversations that build momentum
                </h2>
              </div>
              <div className="flex items-end">
                <p className="text-sm md:text-[15px] text-[#191919]/70 leading-relaxed">
                  Conversational AI built for real businesses. Agents that hold a real
                  conversation, plug into the systems you run, and show their work —
                  across voice, SMS, and email.
                </p>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 md:mt-10 h-px bg-gray-200 w-full" />

            <div className="grid sm:grid-cols-3 gap-0.5">
              {[
                { num: "01", label: "Communications" },
                { num: "02", label: "Intelligence" },
                { num: "03", label: "Infrastructure" },
              ].map((item) => (
                <Link
                  key={item.num}
                  to="/features"
                  className="group flex items-center justify-between bg-[#F4F3F3] hover:bg-[#eaeaea] transition-all duration-200 px-4 sm:px-6 py-3.5 sm:py-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#191919]/40 font-medium">{item.num}</span>
                    <span className="text-[#191919]/30 mx-1">/</span>
                    <span className="font-medium text-[#191919]">{item.label}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-0.5 transition-all duration-200" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
              How It Works
            </p>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919]">
              Three layers, one platform.
            </h2>
            <p className="mt-4 text-[#191919]/60 max-w-xl mx-auto leading-relaxed">
              Communications, Intelligence, and Infrastructure — integrated into a single
              operating model that scales with your business.
            </p>
          </div>

          <div className="h-[600px] sm:h-[700px]">
            <SignalOrb />
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "Communications",
                desc: "Voice, SMS, email — every channel, answered. DSX Edge routes calls intelligently and never misses a conversation.",
              },
              {
                title: "Intelligence",
                desc: "AI agents trained on your business logic. They handle routine work, escalate what matters, and learn from every interaction.",
              },
              {
                title: "Infrastructure",
                desc: "Enterprise-grade telephony that runs on your terms. No per-user fees, no surprise bills, no downtime.",
              },
            ].map((layer) => (
              <div
                key={layer.title}
                className="bg-[#F9F8F6] rounded-2xl p-6 hover:bg-[#eaeaea] transition-all duration-200"
              >
                <h3 className="font-semibold text-lg text-[#191919] mb-2">{layer.title}</h3>
                <p className="text-sm text-[#191919]/60 leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            Every Department
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-12">
            Built for the whole business.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {DEPARTMENTS.map((dept) => (
              <span
                key={dept}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-[#191919]/70 hover:text-[#191919] hover:border-[#0084FF]/30 transition-all duration-200"
              >
                {dept}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#191919]/40">And every role in between.</p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#191919]/40 font-medium mb-4">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-40">
            {TRUSTED_BY.map((brand) => (
              <span key={brand} className="text-xl md:text-2xl font-bold text-[#191919] tracking-tight">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919] mb-4">
            Never Miss Another Opportunity
          </h2>
          <p className="text-[#191919]/60 leading-relaxed mb-3 max-w-lg mx-auto">
            Every missed call is profit that disappears. DSX Edge answers every call,
            qualifies every lead, and routes every conversation — 24/7.
          </p>
          <a
            href="tel:844-379-3343"
            className="inline-flex items-center gap-2 text-lg font-semibold text-[#0084FF] hover:text-[#0066CC] transition-colors duration-200 mb-6"
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
              Try It For Yourself
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
