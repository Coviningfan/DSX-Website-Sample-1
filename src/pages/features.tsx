import { Phone, ArrowRight, HeadphonesIcon, BarChart3, Globe, Shield, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const DEPARTMENTS = [
  {
    icon: Phone,
    title: "Sales",
    items: [
      "Lead qualification and routing",
      "Appointment scheduling and follow-up",
      "Cross-sell and upsell offers based on customer history",
      "Outbound prospecting campaigns that fill the pipeline",
      "After-hours inquiry capture with next-day handoff",
    ],
    description:
      "Everything that fills your pipeline without filling a rep's calendar. DSX Edge qualifies leads, schedules meetings, and follows up automatically — your sales team walks into warm conversations.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Service",
    items: [
      "Answer common questions instantly",
      "Process returns and exchanges with RMA labels",
      "Track order status and shipping details",
      "Escalate complex issues to the right person",
      "Follow up after resolution to confirm satisfaction",
    ],
    description:
      "Your customers get answers in seconds, not minutes. DSX Edge handles routine inquiries end to end and escalates only when a human touch is needed — reducing hold times and improving satisfaction.",
  },
  {
    icon: BarChart3,
    title: "Marketing",
    items: [
      "Customer reengagement campaigns for dormant accounts",
      "Anniversary and loyalty recognition outreach",
      "Post-purchase satisfaction surveys",
      "Referral program enrollment and follow-up",
      "Google Ads and Facebook lead callback automation",
    ],
    description:
      "Marketing that closes the loop. DSX Edge runs reengagement, loyalty, and survey campaigns automatically, then routes responses to the right team. Every lead from every channel gets a callback.",
  },
  {
    icon: Globe,
    title: "Business Communications",
    items: [
      "Never miss a call, day or night",
      "Voicemails transcribed and delivered as email",
      "Work from anywhere with full phone system access",
      "Microsoft 365 and Google Workspace integration",
      "Enterprise call handling with custom routing rules",
    ],
    description:
      "One phone system that works everywhere. DSX Edge unifies voice, SMS, and email communications across all your devices and locations — with AI that routes, transcribes, and responds.",
  },
  {
    icon: Shield,
    title: "Management",
    items: [
      "Real-time dashboard with call and response analytics",
      "AI agent performance monitoring and tuning",
      "Custom reporting by department and function",
      "Role-based access and audit trail",
      "Compliance guardrails for regulated industries",
    ],
    description:
      "Complete visibility into every customer interaction. DSX Edge gives leadership a real-time view of call volume, response quality, and AI performance — with the controls to adjust on the fly.",
  },
  {
    icon: Wrench,
    title: "Infrastructure & Integrations",
    items: [
      "Full PBX replacement with cloud phone system",
      "Works with Switch, 3CX, Cisco, Polycom, and Yealink",
      "SIP trunking and carrier-grade call routing",
      "Custom API integration with your business systems",
      "Enterprise security and uptime SLA",
    ],
    description:
      "The backbone that makes it all work. DSX Edge runs on carrier-grade infrastructure with deep integrations into the phone systems and business tools you already use.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden pt-24">
      <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
              Platform Features
            </p>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-[#191919] mb-6">
              Every department, every function, 24/7.
            </h1>
            <p className="text-lg text-[#191919]/60 leading-relaxed max-w-3xl mx-auto">
              DSX Edge is a complete AI operations platform. Six integrated departments working
              together across voice, SMS, email, and your business systems — one platform that
              empowers every function in your business.
            </p>
          </div>

          <div className="space-y-12">
            {DEPARTMENTS.map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.title}
                  className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 hover:border-[#0084FF]/20 transition-all duration-200"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[#0084FF]/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#0084FF]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-[#191919] mb-3">{dept.title}</h3>
                      <p className="text-[#191919]/60 leading-relaxed mb-5">{dept.description}</p>
                      <ul className="space-y-2">
                        {dept.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-[#191919]/70">
                            <span className="text-[#0084FF] mt-0.5 shrink-0">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-[#191919]/40 text-sm mb-6">
              Every DSX Edge department is configured to your business rules, workflows, and systems.
            </p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#191919] rounded-xl hover:bg-[#333] transition-colors duration-200"
            >
              See how pricing works
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
