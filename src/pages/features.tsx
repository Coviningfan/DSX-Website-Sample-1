import {
  BarChart3,
  Check,
  Globe,
  HeadphonesIcon,
  PackageCheck,
  Phone,
  Shield,
} from "lucide-react";
import PrimaryCta from "@/components/primary-cta";

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
          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#191919]/68">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FC5104FA]" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <details className="group mt-3">
        <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm font-semibold text-[#FC5104FA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#114CA8]">
          <span className="group-open:hidden">View all capabilities</span>
          <span className="hidden group-open:inline">Show fewer capabilities</span>
          <span className="text-base transition-transform duration-200 group-open:rotate-90 motion-reduce:transition-none" aria-hidden="true">
            →
          </span>
        </summary>
        <ul className="space-y-3 pb-1 pt-1">
          {items.slice(3).map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#191919]/68">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FC5104FA]" aria-hidden="true" />
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
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-white">
      <section className="px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FC5104FA]">
              Platform Features
            </p>
            <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-[#191919] sm:text-5xl md:text-6xl">
              A complete business communications platform for modern operations.
            </h1>
            <p className="mt-7 max-w-3xl text-pretty text-lg leading-relaxed text-[#191919]/62">
              Calls, texts, email, customer requests, and business systems operate as one connected
              layer. DSX Edge supports the whole business without forcing every department into a
              separate tool or workflow.
            </p>
          </div>

          <aside className="border-l-2 border-[#114CA8] pl-6" aria-label="Platform structure">
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

      <section className="surface-muted px-4 py-20 text-[#191919] sm:px-6 sm:py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="relative border-y border-[#191919]/12 bg-white px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#FC5104FA]" aria-hidden="true" />
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
              <div className="flex items-start gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center border border-[#114CA8]/30 text-[#114CA8]">
                  <FoundationIcon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FC5104FA]">
                    Foundation / 01
                  </p>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    {foundation.title}
                  </h2>
                  <p className="mt-3 max-w-md text-pretty leading-relaxed text-[#191919]/65">
                    {foundation.outcome}
                  </p>
                </div>
              </div>
              <div className="grid gap-7 md:grid-cols-[1fr_0.9fr] md:items-start">
                <p className="text-pretty text-lg leading-relaxed text-[#191919]/68">{foundation.description}</p>
                <CapabilityList items={foundation.items} />
              </div>
            </div>
          </div>

          <div className="mb-8 mt-16 flex items-end justify-between gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FC5104FA]">
                Connected operations / 02–06
              </p>
              <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Communications become completed work.
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-relaxed text-[#191919]/55 lg:block">
              Information moves between departments instead of stopping at a voicemail, inbox, or
              handoff someone has to remember.
            </p>
          </div>

          <div className="border-t border-[#191919]/14">
            {operatingCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <article
                  key={capability.title}
                  className={`features-capability-row grid min-w-0 gap-7 border-b border-[#191919]/14 py-9 sm:py-11 md:grid-cols-[6rem_minmax(0,1.05fr)_minmax(16rem,0.95fr)] md:gap-10 ${index % 2 === 1 ? "features-capability-row-alt" : ""}`}
                >
                  <div className="flex items-center gap-4 md:block">
                    <span className="flex size-11 items-center justify-center border border-[#114CA8]/25 bg-white text-[#114CA8]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs tracking-[0.18em] text-[#FC5104FA] md:mt-4 md:block">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">{capability.title}</h3>
                    <p className="mt-3 max-w-xl text-pretty leading-relaxed text-[#191919]/78">
                      {capability.outcome}
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#191919]/52">
                      {capability.description}
                    </p>
                  </div>
                  <div className="min-w-0 md:border-l md:border-[#191919]/12 md:pl-8">
                    <CapabilityList items={capability.items} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto grid max-w-5xl gap-8 border-y border-[#191919]/12 py-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FC5104FA]">
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
          <PrimaryCta className="shrink-0" />
        </div>
      </section>
    </main>
  );
}
