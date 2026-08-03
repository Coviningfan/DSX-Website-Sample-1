import { Phone, PlugZap, Database, EyeOff } from "lucide-react";

export default function ProblemSection() {
  const frictions = [
    {
      icon: Phone,
      label: "Phones that miss customers",
      detail:
        "Missed calls, dead-end voicemail, slow callbacks. The customer hangs up and dials your competitor.",
    },
    {
      icon: PlugZap,
      label: "Vendors that don\u2019t talk to each other",
      detail:
        "Phones, hosting, CRM, calendars, support \u2014 owned by different vendors, with no integration between them.",
    },
    {
      icon: Database,
      label: "Manual intake and disconnected records",
      detail:
        "Staff repeat the same questions and re-enter the same data. Customer information lives in places it should not.",
    },
    {
      icon: EyeOff,
      label: "No visibility into the operation",
      detail:
        "Owners cannot see what is happening across calls, staff, customers, and follow-up. Decisions are made on instinct, not data.",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">
          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-blue-400 mb-4 font-mono-dsx">
              The Cost of Disconnected Systems
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Most businesses don\u2019t fail from a lack of software. They fail from disconnection.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              They lose time, leads, visibility, and control because their communications,
              staff workflows, customer records, and follow-up processes are not connected.
              DSX Edge starts at the communications layer and uses it as the entry point to
              modernize the rest of the operation.
            </p>
          </div>

          <div className="bg-slate-900 rounded-lg p-8 border border-slate-800">
            <p className="text-xs uppercase tracking-[0.18em] text-blue-400 font-semibold mb-3 font-mono-dsx">
              The buyer\u2019s reality
            </p>
            <p className="text-slate-200 text-lg leading-relaxed italic mb-5">
              \u201cOur phones, our CRM, our schedules, our follow-ups \u2014 none of it talks. We
              know we should be using AI somewhere, but we don\u2019t know where to start.\u201d
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500 pt-4 border-t border-slate-800">
              <span>DSX Edge starts at communications \u2014 and connects the operation from there.</span>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {frictions.map((item, i) => (
            <div
              key={item.label}
              className="group bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-slate-700 transition-colors"
              data-testid={`problem-card-${i}`}
            >
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/40 transition-colors">
                  <item.icon className="h-5 w-5 text-blue-400" />
                </div>
                <div className="flex-1">
                  <div className="text-[15px] font-semibold text-white mb-1.5 leading-snug">
                    {item.label}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
