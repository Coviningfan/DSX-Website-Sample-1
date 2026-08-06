import { useState } from "react";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const AUTOMOTIVE_ACTIVITIES = [
  "Answer a call or text from an existing customer by name. Ask which vehicle they are calling about and what service need or problem they are having.",
  "For a new customer, get their name, contact information, and vehicle information and add it to the shop’s database.",
  "For a standard service, like a tune up or oil change, quote a price if asked and book an appointment and update the shop’s schedule.",
  "For a problem they are having, ask questions for a first-level diagnosis, give a repair estimate with disclaimers, create a trouble ticket, check inventory for likely parts needed and add them to the ticket, notify the parts manager of parts not in stock, add parts to the order list for confirmation by the parts manager, and—based on estimated parts arrival—book an appointment and update the shop’s schedule.",
  "Take a payment and update your accounting.",
  "Change or cancel an appointment.",
  "Remind a customer of an upcoming appointment.",
  "Notify a customer that their parts are in and schedule an appointment.",
  "Notify a customer that it is time for a tuneup or oil change.",
];

const INDUSTRIES = [
  "Automotive",
  "Construction",
  "Education",
  "Financial Services",
  "Healthcare",
  "Hotels",
  "Logistics",
  "Municipalities",
  "Manufacturing",
  "Nonprofit",
  "Professional Services",
  "Real Estate",
  "Retail",
  "Transportation",
  "Wholesale",
];

export default function IndustriesPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">Industries</p>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-[#191919] sm:text-5xl md:text-6xl">
          How We Serve Your Business
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#191919]/68">
          DSX Edge is customized to your individual business—your products and services, workflows, customers, pricing, payment terms, and any other information or activities you want the platform to handle for you.
        </p>
        <p className="mt-5 max-w-3xl leading-relaxed text-[#191919]/68">
          The examples below illustrate just some of the business activities we handle autonomously during business hours, so your staff can focus on the work that builds your business and increases profits, and after hours so you never miss an opportunity.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 md:px-10">
        <div className="divide-y divide-[#191919]/12 border-y border-[#191919]/12">
          {INDUSTRIES.map((industry, index) => {
            const expanded = open === index;
            const panelId = `industry-panel-${index}`;
            return (
              <div key={industry}>
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : index)}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  className="grid min-h-14 w-full min-w-0 grid-cols-[2.5rem_minmax(0,1fr)_2.75rem] items-center gap-3 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0872d6]"
                >
                  <span className="font-mono text-xs text-[#FC5104FA]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 text-lg font-semibold text-[#191919]">{industry}</span>
                  <span className="flex h-11 w-11 items-center justify-center" aria-hidden="true">
                    <ChevronDown className={`h-5 w-5 text-[#FC5104FA] transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </span>
                </button>
                {expanded && (
                  <div id={panelId} className="pb-8 pl-[3.25rem] pr-2">
                    {index === 0 ? (
                      <>
                        <ul className="space-y-3">
                          {AUTOMOTIVE_ACTIVITIES.map((activity) => (
                            <li key={activity} className="flex gap-3 leading-relaxed text-[#191919]/70">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1688e8]" aria-hidden="true" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                        <a href="tel:8443792886" className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-[#FC5104FA] hover:text-[#FC5104]">
                          <Phone className="h-4 w-4" aria-hidden="true" />
                          Try It for Yourself — call 844-DSX-AUTO (844-379-2886) and talk with Pete
                        </a>
                      </>
                    ) : (
                      <p className="max-w-2xl leading-relaxed text-[#191919]/60">
                        Detailed activities and the dedicated demonstration line for this industry are pending approved source content.
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f6f8fa] px-4 py-20 text-[#191919] sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">Improve Your Operations &amp; Increase Profits</h2>
          <Link to="/about#contact" className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg bg-[#FC5104FA] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#FC5104]">
            Book a Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
