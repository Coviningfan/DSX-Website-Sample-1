import { useState } from "react";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const INDUSTRIES = [
  {
    name: "Automotive",
    description:
      "Service scheduling, parts inquiries, and recall notifications handled automatically. Your service bays stay full and your customers stay informed.",
    demo: "844-379-3343 x 201",
  },
  {
    name: "Construction",
    description:
      "Bid requests, subcontractor coordination, and supply-chain calls managed around the clock. Your crews stay building instead of answering the phone.",
    demo: "844-379-3343 x 202",
  },
  {
    name: "Education",
    description:
      "Enrollment inquiries, absence reporting, and parent communication streamlined across every channel. Staff focus on students, not voicemail.",
    demo: "844-379-3343 x 203",
  },
  {
    name: "Financial Services",
    description:
      "Compliant call handling, appointment setting, and document-status updates with full audit trails. Your clients get answers, and your regulators get records.",
    demo: "844-379-3343 x 204",
  },
  {
    name: "Healthcare",
    description:
      "Appointment scheduling, prescription refill requests, and insurance verification — handled with HIPAA awareness and zero hold time.",
    demo: "844-379-3343 x 205",
  },
  {
    name: "Hotels & Hospitality",
    description:
      "Reservations, concierge requests, and guest services that never clock out. Every call answered, every booking captured.",
    demo: "844-379-3343 x 206",
  },
  {
    name: "Manufacturing",
    description:
      "Order processing, inventory checks, and shipment tracking automated end-to-end. Your floor stays focused on production.",
    demo: "844-379-3343 x 207",
  },
  {
    name: "Professional Services",
    description:
      "Client intake, appointment confirmation, and document requests handled 24/7. Your billable hours aren&rsquo;t spent on phone tag.",
    demo: "844-379-3343 x 208",
  },
  {
    name: "Real Estate",
    description:
      "Showing coordination, listing inquiries, and lead qualification that works when agents can&rsquo;t. Never lose a buyer to a missed call.",
    demo: "844-379-3343 x 209",
  },
  {
    name: "Retail",
    description:
      "Order status, returns processing, and store-locator calls handled instantly. Turn support calls into upsell opportunities.",
    demo: "844-379-3343 x 210",
  },
  {
    name: "Transportation & Logistics",
    description:
      "Dispatch coordination, delivery status, and rate quotes managed automatically. Your drivers drive — DSX Edge handles the rest.",
    demo: "844-379-3343 x 211",
  },
];

const TRUSTED_BY = [
  "Switch", "3CX", "Cisco", "Polycom", "Yealink",
];

export default function IndustriesPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-44 pb-24 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            Industries
          </p>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-[#191919]">
            How We Serve Your Business
          </h1>
          <p className="mt-6 text-lg text-[#191919]/60 leading-relaxed max-w-xl">
            Every industry runs on conversations. We make sure yours never drop.
          </p>
        </div>

        <div className="mt-16 space-y-1">
          {INDUSTRIES.map((industry, i) => {
            const isOpen = open === i;
            return (
              <div key={industry.name} className="border-b border-gray-200">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-[#191919]/30 font-mono w-6">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-semibold text-lg text-[#191919] group-hover:text-[#0084FF] transition-colors duration-200">
                      {industry.name}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#191919]/30 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}
                >
                  <div className="pl-12">
                    <p className="text-[#191919]/60 leading-relaxed mb-4">
                      {industry.description}
                    </p>
                    <a
                      href={`tel:${industry.demo}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#0084FF] hover:text-[#0066CC] transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4" />
                      Try the demo: {industry.demo}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            Trusted By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
            {TRUSTED_BY.map((brand) => (
              <span key={brand} className="text-2xl font-bold text-[#191919] tracking-tight">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-4">
            Don&rsquo;t see your industry?
          </h2>
          <p className="text-[#191919]/60 leading-relaxed mb-8">
            If your business runs on conversations, DSX Edge works for you. Reach out and
            we&rsquo;ll build a demo for your exact use case.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-2xl hover:scale-[1.02] transition-transform duration-200"
            style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
          >
            Book A Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
