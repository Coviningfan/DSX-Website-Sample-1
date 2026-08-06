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
    body: "Talk or text with a customer to get information about their problem, diagnose the issue, make a list of the parts needed, create a job ticket, and schedule a service call. If the customer call comes in after hours and the problem is critical, DSX Edge can contact the tech on call and dispatch them.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    body: "Schedule an appointment based on the patient’s issue and condition. Call a patient to remind them of, and confirm, their appointment and reschedule if there is a problem. Interview the patient to gather information prior to the visit, asking questions based on patient responses.",
  },
  {
    icon: ShoppingCart,
    title: "Retail / Wholesale",
    body: "Take an incoming order, check inventory to see if the items are in stock, explain backorders, confirm or amend the order, take payment or put the order on the customer’s account, generate the pick ticket, and schedule delivery. Check order status and delivery status.",
  },
  {
    icon: Truck,
    title: "Transportation / Shipping",
    body: "Tell a customer when the next bus, train, or boat is departing from their location for their destination. Tell a client where their shipment is and when it is expected to arrive. Call a client about a delay, its cause, and the new expected arrival date and time. Give a time and cost estimate based on customer input.",
  },
  {
    icon: Home,
    title: "Residential / Commercial Services",
    body: "Ask a caller about their yard, house, or building and prepare a quote. Schedule or cancel an appointment, make a schedule change, pause or restart a recurring service, answer billing questions, and call the customer to confirm an appointment and service.",
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

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-20 pt-32 sm:px-6 sm:pt-40 md:px-10 md:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5ea8]">
              DSX Edge Business Communications
            </p>
            <h1 className="text-balance text-[clamp(2.8rem,8vw,6.5rem)] font-bold leading-[0.98] tracking-[-0.045em] text-[#102b43]">
              Business Communications That Drive Profit
            </h1>
            <p className="mt-7 max-w-2xl text-balance text-xl font-semibold leading-snug text-[#191919] sm:text-2xl md:text-3xl">
              A New Dimension in Customer Interaction &amp; Service
            </p>
            <p className="mt-2 text-lg text-[#191919]/75 sm:text-xl">Tailored to Your Business</p>
          </div>
        </div>

        <div className="industry-crawl relative z-10 border-y border-[#102b43]/12 bg-white/90 py-3" aria-label="Industries served">
          <div className="industry-crawl-track" aria-hidden="true">
            {[...INDUSTRIES, ...INDUSTRIES].map((industry, index) => (
              <span key={`${industry}-${index}`}>{industry}</span>
            ))}
          </div>
          <ul className="industry-crawl-static" role="list">
            {INDUSTRIES.map((industry) => <li key={industry}>{industry}</li>)}
          </ul>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c85f1f]">The unseen cost</p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-tight tracking-tight text-[#191919] sm:text-5xl">
              Every missed call is profit that disappears
            </h2>
            <p className="mt-4 text-2xl font-bold text-[#c85f1f]">Hundreds or Thousands a Month!</p>
          </div>
          <div className="border-l-2 border-[#1688e8] pl-6 sm:pl-8">
            <p className="text-2xl font-semibold text-[#191919]">The worst part? You never knew it happened.</p>
            <p className="mt-5 text-lg leading-relaxed text-[#191919]/68">
              The most expensive problem in your business may be the one you never see. Every day, potential customers call, click, text, and leave without doing business with you. That’s serious lost profit. And because you never knew they were ready to buy, you don’t even know what you’ve lost.
            </p>
          </div>
        </div>
      </section>

      <section id="opportunity" className="bg-[#102b43] px-4 py-20 text-white sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f28a45]">Never Miss Another Opportunity</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <h2 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Customer interaction that continues when your staff cannot.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/72">
                DSX Edge is an intelligent addition to your staff that works 24/7, never missing a call or text. It can handle many routine customer interactions autonomously. After hours it serves customers while no one is there, increasing revenue and delivering excellent customer service.
              </p>
            </div>
            <div className="space-y-5">
              <div className="border border-white/15 bg-white/[0.04] p-6 sm:p-8">
                <p className="font-mono text-sm uppercase tracking-[0.12em] text-white/55">The old experience</p>
                <blockquote className="mt-4 text-xl font-semibold text-white/85">“Press 1 for sales, press 2 for accounting…”</blockquote>
              </div>
              <div className="border-l-4 border-[#f28a45] bg-white p-6 text-[#191919] sm:p-8">
                <p className="font-mono text-sm uppercase tracking-[0.12em] text-[#0b5ea8]">The conversation now</p>
                <blockquote className="mt-4 text-lg leading-relaxed">
                  “I’ll be happy to schedule your appointment Mrs. Smith. For Wednesday, May 5th I have 11:30am or 2:00pm. Will either work for you?”
                </blockquote>
                <div className="my-5 h-px bg-[#191919]/12" />
                <blockquote className="text-lg leading-relaxed">
                  “Thank you for explaining your problem. If you tell me your model number, I’ll order the replacement parts, and we can schedule your service call. You will find the model number inside the door, bottom left corner.”
                </blockquote>
              </div>
              <p className="text-pretty text-center text-sm leading-relaxed text-white/72">
                All spoken in a natural, conversational voice indistinguishable from a live person in the caller’s language.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 border-y border-[#191919]/12 py-10 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5ea8]">Live telephone demonstration</p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[#191919] sm:text-4xl">
              Try It for Yourself — call 844-DSX-Edge and talk with Mary
            </h2>
          </div>
          <a href="tel:8443793343" className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-lg bg-[#c85f1f] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#a84916]">
            <Phone className="h-5 w-5" aria-hidden="true" />
            844-379-3343
          </a>
        </div>
      </section>

      <section id="departments" className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5ea8]">Across the business</p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-[#191919] sm:text-5xl md:text-6xl">
            Every Department, Every Function, 24/7
          </h2>
          <div className="mt-12 grid grid-cols-1 border-l border-t border-[#191919]/12 sm:grid-cols-2 lg:grid-cols-5">
            {FUNCTIONS.map((item, index) => (
              <div key={item} className="min-w-0 border-b border-r border-[#191919]/12 p-5 sm:p-6">
                <span className="font-mono text-xs text-[#0b5ea8]">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-pretty font-semibold text-[#191919]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f8fa] px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5ea8]">The Easiest Way for Your Business to Benefit From AI</p>
            <h2 className="mt-4 text-balance text-4xl font-bold leading-tight tracking-tight text-[#191919] sm:text-5xl">
              A full-featured business communication platform with a unique AI component.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-[#191919]/68">
            DSX Edge handles customer interactions and back-office tasks, takes and acts on customer and supplier information, answers complex customer questions, and takes actions based on customer or staff requests. It works across calls, texts, email, and live chat on your website.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl border-l-4 border-[#1688e8] pl-6 sm:pl-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5ea8]">Turnkey AI</p>
          <h2 className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-[#191919] sm:text-5xl">
            We set up the platform for your specific business and your specific needs.
          </h2>
          <p className="mt-5 text-3xl font-bold text-[#c85f1f] sm:text-4xl">You Just Use It.</p>
        </div>
      </section>

      <section id="workflows" className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b5ea8]">Tailored to Your Business</p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-[#191919] sm:text-5xl">See DSX Edge for your business</h2>
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
                    <span className="text-2xl text-[#c85f1f] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-4xl pb-7 pl-[3.75rem] leading-relaxed text-[#191919]/68">{workflow.body}</p>
                </details>
              );
            })}
          </div>
          <p className="mt-8 flex items-center gap-3 text-lg font-semibold text-[#191919]">
            <Building2 className="h-5 w-5 text-[#0b5ea8]" aria-hidden="true" />
            And Dozens of Others
          </p>
        </div>
      </section>

      <section className="bg-[#102b43] px-4 py-20 text-white sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f28a45]">Improve Your Operations &amp; Increase Profits</p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">Learn How DSX Edge Can Improve Your Operations &amp; Profits</h2>
          </div>
          <ConsultationLink className="shrink-0 bg-white text-[#102b43] hover:bg-[#f6f8fa]" />
        </div>
      </section>
    </main>
  );
}
