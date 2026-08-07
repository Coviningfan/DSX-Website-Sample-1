import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { INDUSTRIES, INDUSTRY_DETAILS } from "@/data/industries";
import PrimaryCta from "@/components/primary-cta";

export default function IndustriesPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-white">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">Industries</p>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-[#191919] sm:text-5xl md:text-6xl">
          How We Serve Your Business
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#191919]/68">
          DSX Edge is customized to your individual business—your products and services, workflows, customers, pricing, payment terms, and any other information or activities you want the platform to handle for you.
        </p>
        <p className="mt-5 max-w-3xl leading-relaxed text-[#191919]/68">
          The examples below illustrate business activities we handle autonomously during business hours—so your staff can focus on work that builds the business—and after hours so you never miss an opportunity.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 md:px-10">
        <div className="divide-y divide-[#191919]/12 border-y border-[#191919]/12">
          {INDUSTRIES.map((industry, index) => {
            const expanded = open === index;
            const panelId = `industry-panel-${index}`;
            const detail = INDUSTRY_DETAILS[industry];
            return (
              <div key={industry}>
                <button
                  type="button"
                  onClick={() => setOpen(expanded ? null : index)}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  className="grid min-h-14 w-full min-w-0 grid-cols-[2.5rem_minmax(0,1fr)_2.75rem] items-center gap-3 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#114CA8]"
                >
                  <span className="font-mono text-xs text-[#FC5104FA]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="min-w-0 text-lg font-semibold text-[#191919]">{industry}</span>
                  <span className="flex h-11 w-11 items-center justify-center" aria-hidden="true">
                    <ChevronDown className={`h-5 w-5 text-[#FC5104FA] transition-transform ${expanded ? "rotate-180" : ""}`} />
                  </span>
                </button>
                {expanded && (
                  <div id={panelId} className="pb-8 pl-[3.25rem] pr-2">
                    {detail ? (
                      <>
                        <ul className="space-y-3">
                          {detail.activities.map((activity) => (
                            <li key={activity} className="flex gap-3 leading-relaxed text-[#191919]/70">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#114CA8]" aria-hidden="true" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                        {detail.demo && (
                          <a
                            href={`tel:${detail.demo.tel}`}
                            className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-[#FC5104FA] hover:text-[#FC5104] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#114CA8]"
                          >
                            <Phone className="h-4 w-4" aria-hidden="true" />
                            {detail.demo.label}
                          </a>
                        )}
                      </>
                    ) : (
                      <div className="max-w-2xl rounded-lg border border-[#191919]/10 bg-[#f6f8fa] px-5 py-4">
                        <p className="leading-relaxed text-[#191919]/70">
                          DSX Edge is configured to your workflows, systems, and escalation rules in this industry.
                          Detailed activity examples and a dedicated demonstration line are available on a free consultation.
                        </p>
                        <div className="mt-4">
                          <PrimaryCta className="text-xs uppercase tracking-[0.06em]" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="surface-muted px-4 py-20 text-[#191919] sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">Improve Your Operations &amp; Increase Profits</h2>
          <PrimaryCta className="shrink-0" />
        </div>
      </section>
    </main>
  );
}
