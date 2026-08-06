import {
  ArrowRight,
  Building2,
  HeartPulse,
  Home,
  Phone,
  ShoppingCart,
  Truck,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const INDUSTRIES = [
  "Automotive",
  "Insurance",
  "Real Estate",
  "HVAC",
  "Plumbing",
  "Legal",
  "Construction",
  "Hotel",
  "Medical",
  "Retail",
  "Nonprofit",
];

const FUNCTIONS = [
  "Customer Service",
  "Appointment Setting",
  "Dispatch",
  "Accounting Inquiries",
  "FAQs",
  "Order Taking",
  "Return Processing & RMAs",
  "Inventory Control",
  "Troubleshooting",
  "And much more",
];

const WORKFLOWS = [
  {
    icon: Wrench,
    title: "Repair / Maintenance",
    body: "Talk/text with a customer to get information about their problem, diagnose the issue, make a list of the parts needed, creating job ticket and scheduling a service call. If the customer call comes in after hours and the problem is critical, DSXEdge can contact the tech on call and dispatch them.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    body: "Schedule an appointment based on the patient’s issue and condition. Call a patient to remind them of, and confirm, their appointment and reschedule if there is a problem. Interview patient to gather information prior to visit, asking questions based on patient responses.",
  },
  {
    icon: ShoppingCart,
    title: "Retail / Wholesale",
    body: "Take an incoming order, checking inventory to see if the items are in stock, tell the customer if some items are on backorder, if some items are not in stock confirm that they still want to place the order or amend the order, create the order, take payment or put the order on the customer’s account, generate the pick ticket and schedule delivery. Check order status, delivery status, …",
  },
  {
    icon: Truck,
    title: "Transportation / Shipping",
    body: "Tell a customer when the next bus/train/boat is departing from their location for their destination. Tell a client where their shipment is and when it is expected to arrive. Call a client and let them know that there is a delay, the cause and the new expected arrival date and time. Give a time and cost estimate based on customer input.",
  },
  {
    icon: Home,
    title: "Residential / Commercial Services",
    body: "Ask a caller about their yard/house/building and prepare a quote. Schedule/cancel an appointment. Make a schedule change. Pause/restart a recurring service. Answer billing questions. Call customer to confirm appointment and service.",
  },
];

function ConsultationLink({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/about#contact"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#191919] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#102b43] ${className}`}
    >
      Book a Free Consultation
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export default function HomePage() {
  const [crawlPaused, setCrawlPaused] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <section id="home-hero" className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[env(safe-area-inset-top)] max-md:min-h-0">
        <div className="hero-tunnel-bg absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/dsx-edge-bkg.webp"
            alt=""
            width="2560"
            height="1435"
            fetchPriority="high"
            className="block h-full w-full object-cover"
          />
        </div>
        <div className="hero-readability absolute inset-0 z-[1]" aria-hidden="true" />

        <Link to="/" className="hero-brand absolute left-4 top-6 z-10 sm:left-6 sm:top-8 md:left-10" aria-label="DSX Edge home">
          <img src="/images/dsx-edge-logo-official.png" alt="DSX Edge" width="472" height="188" />
        </Link>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-20 pt-32 sm:px-6 sm:pt-40 md:px-10 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">
              DSX Edge Business Communications
            </p>
            <h1 className="font-display text-balance text-[clamp(3rem,8vw,6.75rem)] font-bold leading-[0.9] tracking-[-0.035em] text-[#102b43]">
              Business Communications That Drive Profit
            </h1>
            <p className="mt-7 max-w-2xl text-balance text-xl font-semibold leading-snug text-[#191919] sm:text-2xl md:text-3xl">
              A New Dimension in Customer Interaction &amp; Service
            </p>
            <p className="mt-5 border-l-2 border-[#FC5104FA] pl-4 text-lg font-semibold uppercase tracking-[0.08em] text-[#191919]/75 sm:text-xl">
              Tailored to <em className="font-bold text-[#FC5104FA]">YOUR</em> Business
            </p>
          </div>
        </div>

        <div className="industry-crawl relative z-10 border-y border-[#102b43]/12 bg-white/94" aria-label="Industries served">
          <div className="industry-crawl-viewport">
            <div className="industry-crawl-track" data-paused={crawlPaused ? "true" : "false"} aria-hidden="true">
              {[0, 1].map((copy) => (
                <div className="industry-crawl-group" key={copy}>
                  {INDUSTRIES.map((industry) => <span key={`${copy}-${industry}`}>{industry}</span>)}
                </div>
              ))}
            </div>
          </div>
          <ul className="industry-crawl-static" role="list">
            {INDUSTRIES.map((industry) => <li key={industry}>{industry}</li>)}
          </ul>
          <button type="button" className="industry-crawl-toggle" onClick={() => setCrawlPaused((paused) => !paused)} aria-pressed={crawlPaused}>
            {crawlPaused ? "Resume industries" : "Pause industries"}
          </button>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">The unseen cost</p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-tight tracking-tight text-[#191919] sm:text-5xl">
              Every missed call is profit that disappears
            </h2>
            <p className="mt-4 text-2xl font-bold text-[#FC5104FA]">Hundreds or Thousands a Month!</p>
          </div>
          <div className="border-l-2 border-[#1688e8] pl-6 sm:pl-8">
            <p className="text-2xl font-semibold text-[#191919]">The worst part? You never knew it happened.</p>
            <p className="mt-5 text-lg leading-relaxed text-[#191919]/68">
              The most expensive problem in your business may be the one you never see. Every day, potential customers call, click, text, and leave without doing business with you. That’s serious lost profit. And because you never knew they were ready to buy, you don’t even know what you’ve lost.
            </p>
          </div>
        </div>
      </section>

      <section id="opportunity" className="bg-white px-4 py-20 text-[#191919] sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">Never Miss Another Opportunity</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Customer interaction that continues when your staff cannot.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#191919]/68">
            DSXEdge is an intelligent addition to your staff that works 24/7, never missing a call or text. It can handle many routine customer interactions autonomously. After hours it serves customers while no one is there, increasing revenue and delivering excellent customer service.
              </p>
            </div>
            <div className="space-y-5">
              <div className="border border-[#191919]/12 bg-[#f6f8fa] p-6 sm:p-8">
                <p className="font-mono text-sm uppercase tracking-[0.12em] text-[#191919]/52">The old experience</p>
                <blockquote className="mt-4 text-xl font-semibold text-[#191919]/82">“Press 1 for sales, press 2 for accounting…”</blockquote>
              </div>
              <div className="border border-[#191919]/12 border-l-4 border-l-[#FC5104FA] bg-white p-6 text-[#191919] sm:p-8">
                <p className="font-mono text-sm uppercase tracking-[0.12em] text-[#FC5104FA]">The conversation now</p>
                <blockquote className="mt-4 text-lg leading-relaxed">
                  “I’ll be happy to schedule your appointment Mrs. Smith. For Wednesday, May 5th I have 11:30am or 2:00pm. Will either work for you?”
                </blockquote>
                <div className="my-5 h-px bg-[#191919]/12" />
                <blockquote className="text-lg leading-relaxed">
                  “Thank you for explaining your problem. If you tell me your model number, I’ll order the replacement parts, and we can schedule your service call. You will find the model number inside the door, bottom left corner.”
                </blockquote>
              </div>
              <p className="text-pretty text-center text-sm leading-relaxed text-[#191919]/62">
                All spoken in a natural, conversational voice indistinguishable from a live person in the caller’s language.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 border-y border-[#191919]/12 py-10 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">Live telephone demonstration</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[#191919] sm:text-4xl">
              Try It for Yourself — call 844-DSX-Edge and talk with Mary
            </h2>
          </div>
          <a href="tel:8443793343" className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-lg bg-[#FC5104FA] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#FC5104]">
            <Phone className="h-5 w-5" aria-hidden="true" />
            844-379-3343
          </a>
        </div>
      </section>

      <section id="departments" className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">Across the business</p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-[#191919] sm:text-5xl md:text-6xl">
            Every Department, Every Function, 24/7
          </h2>
          <div className="mt-12 grid grid-cols-1 border-l border-t border-[#191919]/12 sm:grid-cols-2 lg:grid-cols-5">
            {FUNCTIONS.map((item, index) => (
              <div key={item} className="min-w-0 border-b border-r border-[#191919]/12 p-5 sm:p-6">
                <span className="font-mono text-xs text-[#FC5104FA]">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-pretty font-semibold text-[#191919]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fa] px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">The Easiest Way for Your Business to Benefit From AI</p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-tight tracking-tight text-[#191919] sm:text-5xl">
              A full-featured business communication platform with a unique AI component.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-[#191919]/68">
            DSXEdge is a full-featured business communication platform that also includes a unique AI component designed to handle a wide range of business chores, from customer interactions and back-office tasks to taking and acting on customer and supplier information, answering complex customer questions and taking actions based on customer or staff requests. And it works across calls, texts, email, and live chat on your website.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl border-l-4 border-[#1688e8] pl-6 sm:pl-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">Turnkey AI</p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-[#191919] sm:text-5xl">
            We set up the platform for your specific business and your specific needs.
          </h2>
          <p className="mt-5 text-3xl font-bold text-[#FC5104FA] sm:text-4xl">You Just Use It.</p>
        </div>
      </section>

      <section className="bg-[#f6f8fa] px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-[#191919] sm:text-5xl">Increase Productivity By 50% or More</h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#191919]/68">
            <p>Numerous studies have shown that repetitive, routine tasks consume as much as 65% of staff time, keeping them from doing high-value work that boosts profitability.</p>
            <p>During business hours, DSXEdge offloads routine customer interactions that drain your team’s time, reducing interruptions, raising productivity, and increasing customer and employee satisfaction.</p>
          </div>
        </div>
      </section>

      <section id="workflows" className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">Tailored to Your Business</p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-[#191919] sm:text-5xl">See DSXEdge for Your Business</h2>
          </div>
          <div className="mt-12 divide-y divide-[#191919]/12 border-y border-[#191919]/12">
            {WORKFLOWS.map((workflow) => {
              const Icon = workflow.icon;
              return (
                <details key={workflow.title} className="group">
                  <summary className="flex min-h-14 list-none items-center gap-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0872d6]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#eaf4fc] text-[#0b5ea8]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 text-lg font-bold text-[#191919]">{workflow.title}</span>
                    <span className="text-2xl text-[#FC5104FA] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-4xl pb-7 pl-[3.75rem] leading-relaxed text-[#191919]/68">{workflow.body}</p>
                </details>
              );
            })}
          </div>
          <p className="mt-8 flex items-center gap-3 text-lg font-semibold text-[#191919]">
            <Building2 className="h-5 w-5 text-[#FC5104FA]" aria-hidden="true" />
            And Dozens of Others
          </p>
        </div>
      </section>

      <section className="bg-[#f6f8fa] px-4 py-20 text-[#191919] sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">Improve Your Operations &amp; Increase Profits</p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">Learn How DSX Edge Can Improve Your Operations &amp; Profits</h2>
          </div>
          <ConsultationLink className="shrink-0 bg-[#FC5104FA] text-white hover:bg-[#FC5104]" />
        </div>
      </section>
    </main>
  );
}
