import { Shield, Headphones, BarChart3, Truck, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DEPARTMENTS = [
  {
    icon: BarChart3,
    name: "Sales",
    description:
      "AI that qualifies leads, schedules meetings, and follows up so your sales team closes instead of chasing.",
  },
  {
    icon: Users,
    name: "Marketing",
    description:
      "Automated outreach, campaign response handling, and lead routing that connects every dollar spent to a conversation started.",
  },
  {
    icon: Headphones,
    name: "Customer Service",
    description:
      "24/7 call handling, intelligent routing, and real-time issue resolution — no hold music, no missed calls, no voicemail graveyards.",
  },
  {
    icon: Truck,
    name: "Shipping & Returns",
    description:
      "Automated RMA processing, return label generation, and status updates that turn a friction point into a loyalty builder.",
  },
  {
    icon: Shield,
    name: "Management",
    description:
      "Call screening, priority routing, and executive-level filtering so leadership hears what matters and skips the noise.",
  },
];

const FEATURES = [
  {
    label: "AI-Powered",
    text: "Conversational agents handle routine calls, texts, and tasks — trained on your business, not generic scripts.",
  },
  {
    label: "Omnichannel",
    text: "Voice, SMS, email — one platform, one conversation history, zero context lost between channels.",
  },
  {
    label: "Always On",
    text: "24/7/365 availability without overtime. Your business never sleeps, and neither does your phone system.",
  },
  {
    label: "Built-In Compliance",
    text: "Call recording, transcription, and audit trails that keep you on the right side of every regulation.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative pt-44 pb-24 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            What DSX Edge Does
          </p>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-[#191919]">
            The Industry&rsquo;s Most Advanced Business Communications Platform
          </h1>
          <p className="mt-6 text-lg text-[#191919]/60 leading-relaxed max-w-xl">
            Powered by AI that actually helps your business — not chatbots that pretend to.
          </p>
        </div>

        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.label}
              className="bg-[#F4F3F3] rounded-2xl p-6 hover:bg-[#eaeaea] transition-all duration-200"
            >
              <h3 className="font-semibold text-[#191919] mb-2">{f.label}</h3>
              <p className="text-sm text-[#191919]/60 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            Departments We Power
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-16">
            One platform, every department.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEPARTMENTS.map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.name}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#0084FF]/20 hover:shadow-md transition-all duration-200"
                >
                  <Icon className="w-8 h-8 text-[#0084FF] mb-4" />
                  <h3 className="font-semibold text-lg text-[#191919] mb-2">{dept.name}</h3>
                  <p className="text-sm text-[#191919]/60 leading-relaxed">
                    {dept.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-4">
            See it work for your business.
          </h2>
          <p className="text-[#191919]/60 leading-relaxed mb-8">
            Every department runs better when every call gets answered. Book a consultation
            and we&rsquo;ll show you exactly how DSX Edge fits.
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
