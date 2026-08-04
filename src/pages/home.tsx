import SignalOrb from "@/components/signal-orb";
import { Phone, ArrowRight, Wrench, TrendingUp, Building2, Stethoscope, ShoppingCart, Truck, Home, Zap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const DEPARTMENTS = [
  "Customer Service", "Order Taking", "Appointment Setting",
  "Return Processing & RMAs", "Dispatch", "Inventory Control",
  "Accounting Inquiries", "Trouble Shooting", "FAQs",
];

const INDUSTRIES = [
  "Automotive", "Insurance", "Real Estate", "HVAC", "Plumbing",
  "Legal", "Construction", "Hotels", "Medical", "Retail",
  "Nonprofit", "Manufacturing", "Education", "Financial Services",
  "Transportation", "Logistics", "Wholesale", "Professional Services",
];

const WORKFLOW_EXAMPLES = [
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    desc: "Talk or text with a customer to diagnose their issue, identify parts needed, create a job ticket, and schedule a service call. After hours, DSX Edge contacts the on-call tech if the problem is critical.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Schedule appointments based on the patient's condition. Call to remind and confirm, reschedule if there's a conflict. Interview patients before visits, asking follow-up questions based on their responses.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Wholesale",
    desc: "Take incoming orders, check inventory, handle backorders, process payments or bill to account, generate pick tickets, and schedule delivery. Check order status and delivery tracking anytime.",
  },
  {
    icon: Truck,
    title: "Transportation & Shipping",
    desc: "Tell a customer when the next departure is from their location. Provide shipment location and ETA. Notify clients of delays with the cause and new expected arrival. Give time and cost estimates based on input.",
  },
  {
    icon: Home,
    title: "Residential & Commercial Services",
    desc: "Ask about the property and prepare a quote. Schedule, cancel, or reschedule appointments. Pause or restart recurring service. Answer billing questions. Confirm appointments and service by phone.",
  },
];

const TRUSTED_BY = ["Switch", "3CX", "Cisco", "Polycom", "Yealink"];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* ── Hero ─────────────────────────────────────────── */}
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
          <p className="mt-4 text-xl md:text-2xl text-[#0084FF] font-semibold">
            Business Communications That Drive Profit
          </p>
          <p className="mt-6 text-lg md:text-xl text-[#191919]/60 leading-relaxed max-w-2xl text-center">
            A new dimension in customer interaction and service — tailored to your business.
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

        {/* Bottom info panel */}
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

      {/* ── The Easiest Way ──────────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            The Easiest Way for Your Business to Benefit From AI
          </p>
          <p className="text-lg leading-relaxed text-[#191919]/70">
            DSX Edge is a full-featured business communication platform that also includes
            a unique AI component designed to handle a wide range of business chores — from
            customer interactions and back-office tasks to taking and acting on customer
            and supplier information, answering complex questions, and taking actions based
            on customer or staff requests. And it works across calls, texts, email, and
            live chat on your website.
          </p>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
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
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#0084FF]/20 transition-all duration-200"
              >
                <h3 className="font-semibold text-lg text-[#191919] mb-2">{layer.title}</h3>
                <p className="text-sm text-[#191919]/60 leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Turnkey AI ───────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0084FF]/10 rounded-full text-sm font-semibold text-[#0084FF] mb-6">
            <Zap className="w-4 h-4" />
            Turnkey AI
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919] mb-6">
            We set up the platform for your specific business.
          </h2>
          <p className="text-3xl font-bold text-[#0084FF] mb-8">
            You just use it.
          </p>
          <p className="text-lg text-[#191919]/60 leading-relaxed max-w-2xl mx-auto">
            Every DSX Edge deployment is configured to your products, services, workflows,
            customers, pricing, and business rules. The AI learns your business — not the
            other way around.
          </p>
        </div>
      </section>

      {/* ── Every Department ──────────────────────────────── */}
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

      {/* ── Never Miss ────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919] mb-6">
            Never Miss Another Opportunity
          </h2>
          <p className="text-lg text-[#191919]/60 leading-relaxed mb-8">
            DSX Edge is an intelligent addition to your staff that works 24/7, never
            missing a call or text. It can handle many routine customer interactions
            autonomously. After hours it serves customers while no one is there,
            increasing revenue and delivering excellent customer service.
          </p>

          {/* Dialogue example */}
          <div className="bg-[#F4F3F3] rounded-2xl p-6 md:p-8 mb-8">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#191919]/30 font-medium mb-2">
                  The Old Way
                </p>
                <blockquote className="text-[#191919]/40 italic text-lg">
                  &ldquo;Press 1 for sales, press 2 for accounting, press 3 for&hellip;&rdquo;
                </blockquote>
              </div>
              <div className="h-px bg-gray-300" />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-2">
                  The DSX Edge Way
                </p>
                <blockquote className="text-[#191919]/80 text-lg leading-relaxed">
                  &ldquo;I&rsquo;ll be happy to schedule your appointment, Mrs. Smith.
                  For Wednesday, May 5th I have 11:30am or 2:00pm. Will either work for
                  you?&rdquo;
                </blockquote>
                <p className="mt-4 text-sm text-[#191919]/40">
                  All spoken in a natural, conversational voice &mdash; indistinguishable
                  from a live person, in the caller&rsquo;s language.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:844-379-3343"
              className="inline-flex items-center gap-2 text-lg font-semibold text-[#0084FF] hover:text-[#0066CC] transition-colors duration-200"
            >
              <Phone className="w-5 h-5" />
              Try It for Yourself — call 844-DSX-Edge and talk with Mary
            </a>
          </div>
        </div>
      </section>

      {/* ── Industry Workflow Examples ────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4 text-center">
            Tailored to Your Business
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919] text-center mb-6">
            How DSX Edge works in your world
          </h2>
          <p className="text-[#191919]/60 max-w-2xl mx-auto text-center leading-relaxed mb-16">
            These are just a few of the autonomous business activities DSX Edge handles
            during business hours — so your staff can focus on the work that builds
            your business — and after hours, so you never miss an opportunity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {WORKFLOW_EXAMPLES.map((ex) => {
              const Icon = ex.icon;
              return (
                <div
                  key={ex.title}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#0084FF]/20 transition-all duration-200"
                >
                  <Icon className="w-8 h-8 text-[#0084FF] mb-4" />
                  <h3 className="font-semibold text-[#191919] mb-2">{ex.title}</h3>
                  <p className="text-sm text-[#191919]/60 leading-relaxed">{ex.desc}</p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-lg font-semibold text-[#191919] mb-8">
            And dozens of others.
          </p>

          <div className="text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#191919] rounded-xl hover:bg-[#333] transition-colors duration-200"
            >
              SEE DSX EDGE FOR YOUR BUSINESS
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Industry Crawl ────────────────────────────────── */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#191919]/30 font-medium text-center mb-6">
            Industries We Serve
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#191919]/40">
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="whitespace-nowrap">{ind}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Increase Productivity ─────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-6xl sm:text-7xl font-bold text-[#0084FF] mb-4">50%</p>
              <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-6">
                Increase Productivity By 50% or More
              </h2>
              <p className="text-[#191919]/60 leading-relaxed">
                Numerous studies have shown that repetitive, routine tasks consume as much
                as 65% of staff time — keeping them from doing high-value work that boosts
                profitability. During business hours, DSX Edge offloads routine customer
                interactions that drain your team&rsquo;s time, reducing interruptions,
                raising productivity, and increasing customer and employee satisfaction.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <p className="text-xl font-bold text-[#191919] mb-4">
                Every missed call is profit that disappears.
              </p>
              <p className="text-[#191919]/60 leading-relaxed mb-4">
                Hundreds or thousands of dollars a month. The worst part? You never knew
                it happened. The most expensive problem in your business may be the one
                you never see.
              </p>
              <p className="text-sm text-[#191919]/40 leading-relaxed">
                Every day, potential customers call, click, text, and leave without doing
                business with you. That&rsquo;s serious lost profit. And because you never
                knew they were ready to buy, you don&rsquo;t even know what you&rsquo;ve lost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trusted By ────────────────────────────────────── */}
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

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 text-center bg-[#F9F8F6]">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919] mb-4">
            Learn how DSX Edge can improve your operations & profits.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href="tel:844-379-3343"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-2xl hover:scale-[1.02] transition-transform duration-200"
              style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
            >
              <Phone className="w-4 h-4" />
              Pick up phone and delegate
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#191919] bg-white border border-gray-200 rounded-2xl hover:bg-[#F4F3F3] transition-colors duration-200"
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
