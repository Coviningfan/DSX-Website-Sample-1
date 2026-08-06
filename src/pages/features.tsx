import {
  ArrowRight,
  BarChart3,
  Check,
  Globe,
  HeadphonesIcon,
  PackageCheck,
  Phone,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const CAPABILITIES = [
  {
    icon: Globe,
    title: "Business Communications",
    outcome: "One communications system across every device, location, and shift.",
    items: [
      "Never miss a call, day or night",
      "Voicemails transcribed and delivered as email",
      "Work from anywhere with full phone system access",
      "Microsoft 365 and Google Workspace integration",
      "Enterprise call handling with custom routing rules",
    ],
    description:
      "DSX Edge unifies voice, SMS, and email across your devices and locations, with intelligent routing and response built into the operating layer.",
  },
  {
    icon: Phone,
    title: "Sales",
    outcome: "Capture, qualify, and advance opportunities without consuming selling time.",
    items: [
      "Lead qualification and routing",
      "Appointment scheduling and follow-up",
      "Cross-sell and upsell offers based on customer history",
      "Outbound prospecting campaigns that fill the pipeline",
      "After-hours inquiry capture with next-day handoff",
    ],
    description:
      "DSX Edge qualifies leads, schedules meetings, and follows up automatically so sales representatives enter informed, productive conversations.",
  },
  {
    icon: BarChart3,
    title: "Marketing",
    outcome: "Turn customer history and campaign responses into timely conversations.",
    items: [
      "Customer reengagement campaigns for dormant accounts",
      "Anniversary and loyalty recognition outreach",
      "Post-purchase satisfaction surveys",
      "Referral program enrollment and follow-up",
      "Google Ads and Facebook lead callback automation",
    ],
    description:
      "DSX Edge runs targeted outreach, captures responses, and routes each interested customer to the right next step.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Service",
    outcome: "Resolve routine requests immediately and escalate with complete context.",
    items: [
      "Answer common questions instantly",
      "Process returns and exchanges with RMA labels",
      "Track order status and shipping details",
      "Escalate complex issues to the right person",
      "Follow up after resolution to confirm satisfaction",
    ],
    description:
      "Customers receive useful answers without waiting, while complex issues reach a person with the conversation history already attached.",
  },
  {
    icon: PackageCheck,
    title: "Shipping & Returns",
    outcome: "Keep customers informed from shipment through return completion.",
    items: [
      "Provide order status, tracking details, and delivery estimates",
      "Notify customers about shipment delays and weather issues",
      "Manage delivery windows and pending pickups",
      "Handle common delivery complaints and proof of delivery",
      "Issue RMAs and email return shipping labels",
    ],
    description:
      "DSX Edge answers delivery questions, sends proactive updates, manages return windows, and completes routine RMA workflows.",
  },
  {
    icon: Shield,
    title: "Management",
    outcome: "Protect leadership time without losing critical communications.",
    items: [
      "Screen calls and take complete messages",
      "Route callers according to rules you set",
      "Reduce interruptions to management time",
      "Escalate critical communications without delay",
      "Maintain a professional caller experience",
    ],
    description:
      "DSX Edge screens calls, takes messages, and routes people according to your rules while urgent matters continue to reach the right leader.",
  },
];

const foundation = CAPABILITIES[0];
const operatingCapabilities = CAPABILITIES.slice(1);

function CapabilityList({ items }: { items: string[] }) {
  return (
    <>
      <ul className="mt-6 space-y-3">
        {items.slice(0, 3).map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/72">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#69baff]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <details className="group mt-3">
        <summary className="inline-flex min-h-11 list-none items-center gap-2 text-sm font-semibold text-[#9fd3ff] marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#69baff]">
          <span className="group-open:hidden">View all capabilities</span>
          <span className="hidden group-open:inline">Show fewer capabilities</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-open:rotate-90 motion-reduce:transition-none" aria-hidden="true" />
        </summary>
        <ul className="space-y-3 pb-1 pt-1">
          {items.slice(3).map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/72">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#f28a45]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
}

export default function FeaturesPage() {
  const FoundationIcon = foundation.icon;

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <section className="px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#0872d6]">
              Platform Features
            </p>
            <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-[#191919] sm:text-5xl md:text-6xl">
              The industry&rsquo;s most advanced business communications platform.
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-[#191919]/62">
              Calls, texts, email, customer requests, and business systems operate as one connected
              layer. DSX Edge supports the whole business without forcing every department into a
              separate tool or workflow.
            </p>
          </div>

          <aside className="border-l-2 border-[#0872d6] pl-6" aria-label="Platform structure">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#191919]/42">
              Operating model
            </p>
            <p className="mt-3 text-xl font-semibold leading-snug text-[#191919]">
              One communications foundation. Five connected operating areas.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#191919]/58">
              Each area is configured to your business rules, systems, and escalation paths.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-[#102b43] px-4 py-20 text-white sm:px-6 sm:py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 border-y border-white/12 py-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16 lg:py-10">
            <div className="flex items-start gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center border border-[#69baff]/45 bg-[#69baff]/8 text-[#9fd3ff]">
                <FoundationIcon className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#9fd3ff]/70">
                  Foundation / 01
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                  {foundation.title}
                </h2>
                <p className="mt-3 max-w-md text-pretty text-base leading-relaxed text-white/65">
                  {foundation.outcome}
                </p>
              </div>
            </div>
            <div className="grid gap-7 md:grid-cols-[1fr_0.9fr] md:items-start">
              <p className="text-pretty leading-relaxed text-white/72">{foundation.description}</p>
              <CapabilityList items={foundation.items} />
            </div>
          </div>

          <div className="mt-14 flex items-end justify-between gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f7a66f]">
                Connected operations / 02–06
              </p>
              <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Communications become completed work.
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-relaxed text-white/55 lg:block">
              Information moves between departments instead of stopping at a voicemail, inbox, or
              handoff someone has to remember.
            </p>
          </div>

          <div className="features-capability-grid mt-10 grid gap-px border border-white/12 bg-white/12 md:grid-cols-2">
            {operatingCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <article
                  key={capability.title}
                  className={`relative bg-[#153650] p-6 sm:p-8 ${index === operatingCapabilities.length - 1 ? "md:col-span-2 md:grid md:grid-cols-2 md:gap-12" : ""}`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex size-10 items-center justify-center border border-white/14 text-[#9fd3ff]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.18em] text-white/35">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-7 text-2xl font-bold tracking-tight">{capability.title}</h3>
                    <p className="mt-3 max-w-xl text-pretty leading-relaxed text-white/78">
                      {capability.outcome}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/52">
                      {capability.description}
                    </p>
                  </div>
                  <CapabilityList items={capability.items} />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto grid max-w-5xl gap-8 border-y border-[#191919]/12 py-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#c85f1f]">
              Configured for your operation
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[#191919] sm:text-4xl">
              Start with the work your team needs off its plate.
            </h2>
            <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-[#191919]/60">
              We map the communication, business rules, system updates, and human escalation before
              configuring the platform.
            </p>
          </div>
          <Link
            to="/about#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#e2712f] px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#c85f1f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0872d6]"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
