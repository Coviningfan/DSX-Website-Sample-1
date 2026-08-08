import {
  Building2,
  HeartPulse,
  Home,
  Phone,
  ShoppingCart,
  Truck,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import PrimaryCta from "@/components/primary-cta";

/** Home copy is word-for-word from Web Mockup-5 slide 1 (including DSXEdge). */

const FUNCTIONS = [
  "Customer Service",
  "Order Taking",
  "Appointment Setting",
  "Return Processing & RMAs",
  "Dispatch",
  "Inventory Control",
  "Accounting Inquiries",
  "Trouble Shooting",
  "FAQs",
  "and much more",
];

const WORKFLOWS = [
  {
    icon: Wrench,
    title: "Repair/Maintenance",
    body: "Talk/text with a customer to get information about their problem, diagnose the issue, make a list of the parts needed, creating job ticket and scheduling a service call. If the customer call comes in after hours and the problem is critical, DSXEdge can contact the tech on call and dispatch them.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    body: "Schedule an appointment based on the patient’s issue and condition. Call a patient to remind them of, and confirm, their appointment and reschedule if there is a problem. Interview patient to gather information prior to visit, asking questions based on patient responses.",
  },
  {
    icon: ShoppingCart,
    title: "Retail/Wholesale",
    body: "Take an incoming order, checking inventory to see if the items are in stock, tell the customer if some items are on backorder, if some items are not in stock confirm that they still want to place the order or amend the order, create the order, take payment or put the order on the customer’s account, generate the pick ticket and schedule delivery. Check order status, delivery status, …",
  },
  {
    icon: Truck,
    title: "Transportation/Shipping",
    body: "Tell a customer when the next bus/train/boat is departing from their location for their destination. Tell a client where their shipment is and when it is expected to arrive. Call a client and let them know that there is a delay, the cause and the new expected arrival date and time. Give a time and cost estimate based on customer input.",
  },
  {
    icon: Home,
    title: "Residential/Commercial Services",
    body: "Ask a caller about their yard/house/building and prepare a quote. Schedule/cancel an appointment. Make a schedule change. Pause/restart a recurring service. Answer billing questions. Call customer to confirm appointment and service.",
  },
];

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-white">
      <section
        id="home-hero"
        className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[env(safe-area-inset-top)] max-md:min-h-0"
      >
        <div className="hero-tunnel-bg absolute inset-0 z-0" aria-hidden="true">
          <img
            src="/images/dsx-edge-bkg.webp"
            srcSet="/images/dsx-edge-bkg-960.webp 960w, /images/dsx-edge-bkg-1600.webp 1600w, /images/dsx-edge-bkg.webp 2560w"
            sizes="100vw"
            alt=""
            width="2560"
            height="1435"
            fetchPriority="high"
            decoding="async"
            className="block h-full w-full object-cover"
          />
        </div>
        <div className="hero-readability absolute inset-0 z-[1]" aria-hidden="true" />
        {/* Soft fade into white content below */}
        <div className="hero-close" aria-hidden="true" />

        <Link
          to="/"
          className="hero-brand absolute left-4 top-6 z-10 sm:left-6 sm:top-8 md:left-10"
          aria-label="DSXEdge home"
        >
          <img src="/images/dsx-edge-logo-official.png" alt="DSXEdge" width="472" height="188" />
        </Link>

        <div className="hero-copy-shell relative z-10 flex w-full max-w-[80rem] flex-1 flex-col items-start justify-center px-4 pb-20 pt-32 text-left sm:px-6 sm:pb-24 sm:pt-40 md:px-10 md:pb-28">
          <div className="hero-copy self-start text-left pl-[clamp(4.5rem,7vw,6.25rem)]">
            <h1 className="hero-title font-display">
              <span className="hero-title-line">Business Communications</span>
              <span className="hero-title-line">
                That Drive <span className="hero-title-accent">Profit</span>
              </span>
            </h1>
            <p className="hero-lead">A New Dimension in Customer Interaction &amp; Service</p>
            <p className="hero-tailored">
              Tailored to <em className="hero-tailored-your">YOUR</em> Business
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <h2 className="section-title">Every missed call is profit that disappears</h2>
            <p className="mt-4 text-2xl font-bold text-[#FC5104FA]">Hundreds or Thousands a Month!</p>
          </div>
          <div className="border-l-2 border-[#114CA8] pl-6 sm:pl-8">
            <p className="text-2xl font-semibold text-[#191919]">The worst part? You never knew it happened.</p>
            <p className="mt-5 text-lg leading-relaxed text-[#191919]/68">
              The most expensive problem in your business may be the one you never see. Every day, potential customers call, click, text, and leave without doing business with you. That’s serious lost profit. And because you never knew they were ready to buy, you don’t even know what you’ve lost.
            </p>
          </div>
        </div>
      </section>

      <section id="opportunity" className="bg-white px-4 py-20 text-[#191919] sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-title">Never Miss Another Opportunity</h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#191919]/68">
            DSXEdge is an intelligent addition to your staff that works 24/7, never missing a call or text. It can handle many routine customer interactions autonomously. After hours it serves customers while no one is there, increasing revenue and delivering excellent customer service.
          </p>
          <div className="experience-comparison mt-12">
            <div className="experience-panel experience-panel-old">
              <blockquote className="text-xl font-semibold italic text-[#191919]/82">
                The old “Press 1 for sales, press 2 for accounting, …”
              </blockquote>
            </div>
            <p className="py-3 text-center text-sm font-bold uppercase tracking-[0.14em] text-[#191919]/55">is now</p>
            <div className="experience-panel experience-panel-new">
              <blockquote className="text-lg italic leading-relaxed">
                “I’ll be happy to schedule your appointment Mrs. Smith. For Wednesday, May 5th I have 11:30am or 2:00pm. Will either work for you?”
              </blockquote>
              <div className="experience-or" aria-hidden="true">
                <span>or</span>
              </div>
              <blockquote className="text-lg italic leading-relaxed">
                “Thank you for explaining your problem. If you tell me your model number, I’ll order the replacement parts, and we can schedule your service call. You will find the model number inside the door, bottom left corner.”
              </blockquote>
            </div>
            <p className="experience-note text-pretty text-center text-sm font-bold italic leading-relaxed text-[#191919]/62">
              All spoken in a natural, conversational voice indistinguishable from a live person in the caller’s language.
            </p>
          </div>
        </div>
      </section>

      <section className="surface-muted px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <h2 className="section-title">Increase Productivity By 50% or More</h2>
          <div className="space-y-5 text-lg leading-relaxed text-[#191919]/68">
            <p>
              Numerous studies have shown that repetitive, routine tasks consume as much as 65% of staff time, keeping them from doing high-value work that boosts profitability.
            </p>
            <p>
              During business hours, DSXEdge offloads routine customer interactions that drain your team’s time, reducing interruptions, raising productivity, and increasing customer and employee satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section id="demo" className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 border-y border-[#191919]/12 py-10 text-center md:flex-row md:text-left">
          <h2 className="section-title">
            Try It for Yourself – call 844-DSX-Edge (844-379-3343) and talk with Mary
          </h2>
          <PrimaryCta href="tel:8443793343" showArrow={false} className="demo-call-action shrink-0">
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            844-379-3343
          </PrimaryCta>
        </div>
      </section>

      <section id="departments" className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-title max-w-4xl">Every Department, Every Function, 24/7</h2>
          <div className="mt-12 grid grid-cols-1 border-l border-t border-[#191919]/12 sm:grid-cols-2 lg:grid-cols-5">
            {FUNCTIONS.map((item) => (
              <div key={item} className="min-w-0 border-b border-r border-[#191919]/12 p-5 sm:p-6">
                <p className="text-pretty font-semibold text-[#191919]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="workflows" className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <h2 className="section-title">SEE DSXEDGE FOR YOUR BUSINESS</h2>
            <Link
              to="/industries"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#FC5104FA] hover:text-[#FC5104]"
            >
              Industries
            </Link>
          </div>
          <div className="mt-12 divide-y divide-[#191919]/12 border-y border-[#191919]/12">
            {WORKFLOWS.map((workflow) => {
              const Icon = workflow.icon;
              return (
                <details key={workflow.title} className="group">
                  <summary className="flex min-h-14 list-none items-center gap-4 py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#114CA8]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#114CA8]/10 text-[#114CA8]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 text-lg font-bold text-[#191919]">{workflow.title}</span>
                    <span className="text-2xl text-[#FC5104FA] transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
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

      <section className="surface-muted px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-title">The Easiest Way for Your Business to Benefit From AI</h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#191919]/68">
            DSXEdge is a full-featured business communication platform that also includes a unique AI component designed to handle a wide range of business chores, from customer interactions and back-office tasks to taking and acting on customer and supplier information, answering complex customer questions and taking actions based on customer or staff requests. And it works across calls, texts, email, and live chat on your website.
          </p>
          <div className="mt-14 border-l-4 border-[#114CA8] pl-6 sm:pl-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">Turnkey AI</p>
            <h3 className="mt-4 max-w-4xl">We set up the platform for your specific business and your specific needs.</h3>
            <p className="mt-5 text-3xl font-bold text-[#FC5104FA] sm:text-4xl">You Just Use It.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 text-[#191919] sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="section-title max-w-3xl">
              Learn How DSXEdge Can Improve Your Operations &amp; Profits
            </h2>
            <p className="mt-4 text-lg text-[#191919]/60">Pick up phone and delegate</p>
          </div>
          <PrimaryCta className="shrink-0">BOOK A FREE CONSULTATION</PrimaryCta>
        </div>
      </section>

      <section className="border-t border-[#191919]/10 surface-muted px-4 py-16 sm:px-6 md:px-10" aria-label="Trusted by">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#191919]/45">TRUSTED BY</p>
          <p className="mt-6 text-sm text-[#191919]/45">Example logos – get list and logos from Joe</p>
        </div>
      </section>
    </main>
  );
}
