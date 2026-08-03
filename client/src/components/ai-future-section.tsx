import { Sparkles, CheckCircle2, Building2, Scale, Wrench, Heart, Home, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function AIFutureSection() {
  const industries = [
    {
      icon: Wrench,
      name: "Contractors & Trades",
      example: "Your phone system answers estimate requests, qualifies job scope, and books site visits \u2014 while you\u2019re on the job.",
      flow: "New quote request \u2192 intake \u2192 appointment booked",
    },
    {
      icon: Scale,
      name: "Law Practices",
      example: "Your phone system captures new client inquiries, gathers case details, and schedules consultations without interrupting billable work.",
      flow: "New caller \u2192 case type identified \u2192 consultation scheduled",
    },
    {
      icon: Heart,
      name: "Medical & Dental",
      example: "Your phone system handles appointment requests, insurance questions, and reminders \u2014 24/7, without hold times.",
      flow: "Patient call \u2192 reason captured \u2192 office notified",
    },
    {
      icon: Building2,
      name: "Insurance & Finance",
      example: "Your phone system qualifies inbound leads, collects policy details, and routes warm prospects to the right rep automatically.",
      flow: "Inbound lead \u2192 qualified \u2192 routed to rep",
    },
    {
      icon: Home,
      name: "Real Estate",
      example: "Your phone system answers property inquiries, qualifies buyer intent, and schedules showings directly into your calendar.",
      flow: "Property inquiry \u2192 intent gauged \u2192 showing booked",
    },
    {
      icon: Briefcase,
      name: "Any Business That Gets Calls",
      example: "If your business loses time or leads through routine phone calls, DSX Edge can change that.",
      flow: "Inbound contact \u2192 qualified \u2192 action taken",
    },
  ];

  return (
    <section id="ai-future" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-orange-400 mb-4 font-mono-dsx">
            What\u2019s New on Top of the Phones
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
            The same phone system \u2014 now it answers, too.
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            For 12 years we\u2019ve handled the calls, the routing, the queues, the voicemail.
            When you can\u2019t pick up, we now let the system take the call \u2014 qualify the caller,
            update your CRM, and book the appointment. Your phones, doing more.
          </p>
        </div>

        <div className="bg-slate-900 rounded-lg p-8 md:p-12 mb-16 text-white border border-slate-800">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="h-5 w-5 text-orange-400" />
            <span className="text-orange-400 font-semibold uppercase text-sm tracking-wider">A real after-hours call</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 max-w-2xl">
            A painter gets an estimate call at 9pm on a Saturday.
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Without DSX: it goes to voicemail. By Monday, the homeowner called three competitors.
                Lead lost.
              </p>
              <p className="text-slate-200 leading-relaxed mb-6">
                With DSX: the phone system picks up, asks the same qualifying questions the owner
                would ask, logs the job in the CRM, and books the site visit straight into the
                calendar \u2014 before the homeowner hangs up.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Same pattern works for law intake, medical scheduling, insurance qualification,
                property showings, and any business where missed calls equal missed money. Read the full breakdown in{" "}
                <Link href="/blog/ai-voice-agents-for-contractors" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">AI voice agents for contractors</Link>.
              </p>
            </div>

            <div className="space-y-3 bg-slate-950 rounded-lg p-5 border border-slate-800">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold font-mono-dsx mb-2">Call log</div>
              {[
                "21:04 \u2014 Inbound call answered by DSX",
                "21:04 \u2014 Intent classified: exterior paint estimate",
                "21:05 \u2014 Asked: one story or two? Sq ft? Timeline?",
                "21:06 \u2014 Job logged in HubSpot, tagged \u2018qualified\u2019",
                "21:06 \u2014 Booked Tue 10am into owner\u2019s calendar",
                "21:07 \u2014 SMS confirmation sent to homeowner",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded border border-orange-500/30 bg-orange-500/10 flex items-center justify-center mt-0.5">
                    <span className="text-orange-400 text-xs font-bold font-mono-dsx">{i + 1}</span>
                  </div>
                  <span className="text-slate-300 text-sm font-mono-dsx">{step}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800">
            <p className="text-orange-200/90 text-sm italic">
              One booked job from one after-hours call pays for the whole setup.
            </p>
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Same idea. Every industry.
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto">
            The phone flow is built around{" "}
            <span className="text-white font-semibold">your</span> routing,
            <span className="text-white font-semibold"> your</span> CRM, and{" "}
            <span className="text-white font-semibold">your</span> playbook \u2014 not someone else\u2019s script.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {industries.map((item, index) => (
            <div
              key={item.name}
              className="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-slate-700 transition-colors group overflow-hidden"
              data-testid={`industry-card-${index}`}
            >
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:border-blue-500/40 transition-colors">
                <item.icon className="h-5 w-5 text-blue-400" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">{item.name}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.example}</p>
              <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
                <span className="text-xs font-mono-dsx text-slate-300 tracking-tight">{item.flow}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-lg p-10 text-white border border-slate-800">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <p className="text-xs font-semibold tracking-wider uppercase text-slate-500 font-mono-dsx">
                  Above the Cloud \u00b7 Into the Business
                </p>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Cloud rents you servers. DSX runs your phones.
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Every vendor sells you cloud. We deliver the whole communications stack \u2014
                phones, hosting, integrations, and the AI layer when you want it \u2014 from one partner.
                Your tools stop sitting next to each other and start working together. We unpack the
                difference in{" "}
                <Link href="/blog/cloud-vs-intelligence" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">Cloud vs. Intelligence</Link>{" "}
                \u2014 and the infrastructure powering it lives in our{" "}
                <Link href="/data-center" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">Citadel Campus data center</Link>.
              </p>
              <div className="space-y-2 mb-6">
                {[
                  "One partner for phones, hosting, and the AI layer",
                  "Built on your business logic \u2014 not a generic chatbot",
                  "12+ years installing systems that actually stay running",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <Button
                  data-testid="button-explore-ai"
                  className="bg-orange-600 hover:bg-orange-500 text-white rounded-lg py-6 px-7 text-base font-semibold transition-colors duration-200"
                >
                  Claim Your Free Workflow Audit
                </Button>
              </Link>
              <p className="text-xs text-slate-500 mt-3">Limited audits per month. We keep them deep, not many.</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-950 rounded-lg p-5 text-center border border-slate-800">
                <div className="text-3xl font-bold text-orange-400 mb-1 font-mono-dsx">60%</div>
                <div className="text-xs text-slate-400">Avg. cost cut vs. legacy PBX</div>
              </div>
              <div className="bg-slate-950 rounded-lg p-5 text-center border border-slate-800">
                <div className="text-3xl font-bold text-blue-400 mb-1 font-mono-dsx">24/7</div>
                <div className="text-xs text-slate-400">Agents never sleep</div>
              </div>
              <div className="bg-slate-950 rounded-lg p-5 text-center border border-slate-800">
                <div className="text-3xl font-bold text-blue-400 mb-1 font-mono-dsx">99.9%</div>
                <div className="text-xs text-slate-400">Uptime SLA on hosted systems</div>
              </div>
              <div className="bg-slate-950 rounded-lg p-5 text-center border border-slate-800">
                <div className="text-3xl font-bold text-orange-400 mb-1 font-mono-dsx">12+</div>
                <div className="text-xs text-slate-400">Years deploying real systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
