import { useState } from "react";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { INDUSTRIES, INDUSTRY_DETAILS } from "@/data/industries";
import PrimaryCta from "@/components/primary-cta";

/** Industries copy is word-for-word from Web Mockup-5 slide 3 (including DSXEdge). */

export default function IndustriesPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-white">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-44 md:px-10">
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-[#191919] sm:text-5xl md:text-6xl">
          How We Serve Your Business
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#191919]/68">
          DSXEdge is customized to your individual business – your products and services, workflows, customers, pricing, payment terms, and any other information or activities you want the platform to handle for you.
        </p>
        <p className="mt-5 max-w-3xl leading-relaxed text-[#191919]/68">
          The examples below illustrate just some of the business activities we handle autonomously during business hours, so your staff can focus on the work that builds your business and increases profits, and after hours so you never miss an opportunity.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 md:px-10" aria-label="Industry examples">
        <div className="industry-accordion">
          {INDUSTRIES.map((industry, index) => {
            const expanded = open === index;
            const panelId = `industry-panel-${index}`;
            const triggerId = `industry-trigger-${index}`;
            const detail = INDUSTRY_DETAILS[industry];
            return (
              <article
                key={industry}
                className={`industry-item${expanded ? " is-open" : ""}`}
                data-open={expanded ? "true" : "false"}
              >
                <h2 className="industry-item-heading">
                  <button
                    type="button"
                    id={triggerId}
                    onClick={() => setOpen(expanded ? null : index)}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    className="industry-item-trigger"
                  >
                    <span className="industry-item-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="industry-item-title">{industry}</span>
                    <span className="industry-item-chevron" aria-hidden="true">
                      <ChevronDown className="h-4 w-4" strokeWidth={2.25} />
                    </span>
                  </button>
                </h2>

                {expanded && (
                  <div id={panelId} role="region" aria-labelledby={triggerId} className="industry-item-panel">
                    {detail ? (
                      <>
                        <ul className="industry-activity-list">
                          {detail.activities.map((activity) => (
                            <li key={activity}>{activity}</li>
                          ))}
                        </ul>
                        {detail.demo && (
                          <a href={`tel:${detail.demo.tel}`} className="industry-demo-call">
                            <span className="industry-demo-call-icon" aria-hidden="true">
                              <Phone className="h-4 w-4" />
                            </span>
                            <span className="industry-demo-call-copy">
                              <span className="industry-demo-call-line">{detail.demo.label}</span>
                            </span>
                            <ArrowRight className="industry-demo-call-arrow h-4 w-4 shrink-0" aria-hidden="true" />
                          </a>
                        )}
                      </>
                    ) : (
                      <p className="industry-panel-placeholder">
                        Detailed activities and the dedicated demonstration line for this industry are pending approved source content.
                      </p>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="surface-muted px-4 py-20 text-[#191919] sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Improve Your Operations &amp; Increase Profits
          </h2>
          <PrimaryCta className="shrink-0">BOOK A FREE CONSULTATION</PrimaryCta>
        </div>
      </section>

      <section className="border-t border-[#191919]/10 bg-white px-4 py-16 sm:px-6 md:px-10" aria-label="Trusted by">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#191919]/45">TRUSTED BY</p>
          <p className="mt-6 text-sm text-[#191919]/45">[Different set of logos than on home page]</p>
        </div>
      </section>
    </main>
  );
}
