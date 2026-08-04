import { BarChart3, Users, Headphones, Truck, Shield, Megaphone, Smartphone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DEPARTMENTS = [
  {
    icon: BarChart3,
    name: "Sales",
    description: "Lead qualification, appointment scheduling, cross-sell offers, outbound prospecting campaigns — everything that fills the pipeline without filling a rep's calendar.",
    bullets: [
      "Take orders 24/7",
      "Inbound lead qualification based on your rules",
      "Call handover to a sales rep when it matters",
      "Offer options or upgrades based on order history",
      "Outbound prospecting campaigns",
    ],
  },
  {
    icon: Megaphone,
    name: "Marketing",
    description: "Automated outreach that turns dormant contacts into conversations and every campaign dollar into measurable engagement.",
    bullets: [
      "Reengagement campaigns to dormant customers",
      "Event and promotion invitations",
      "Personalized anniversary and birthday calls",
      "Loyalty program enrollment and point notifications",
      "Surveys and feedback collection",
      "Referral generation",
      "Google Ads, Facebook, and Instagram integration",
    ],
  },
  {
    icon: Headphones,
    name: "Customer Service",
    description: "Intelligent routing, automated answers for common inquiries, and seamless handoff to live agents when the caller needs a person.",
    bullets: [
      "Route callers based on their issue",
      "Auto-answer: order status, balances, shipping, backorders",
      "Handle payments, refunds, returns, exchanges",
      "Guide customers through basic troubleshooting",
      "Verify and update customer information",
    ],
  },
  {
    icon: Truck,
    name: "Shipping & Returns",
    description: "End-to-end order tracking, RMA automation, and proactive notifications that turn a friction point into a loyalty builder.",
    bullets: [
      "Order status, tracking, ETA, delay notifications",
      "Manage delivery time windows",
      "Proof of delivery and post-delivery surveys",
      "Notify about pending pickups and expiring return windows",
      "Process RMAs — provide return labels or escalate to an agent",
    ],
  },
  {
    icon: Shield,
    name: "Management",
    description: "An AI personal assistant that screens calls, takes messages, and routes by your rules — protecting leadership time without losing critical communications.",
    bullets: [
      "Call screening and priority routing",
      "Message taking with email delivery",
      "Custom routing rules based on caller, time, and urgency",
      "Reduces interruptions while maintaining professional response",
      "Critical communications are never lost",
    ],
  },
];

const COMMS_FEATURES = [
  {
    icon: Smartphone,
    title: "Never miss a call or text",
    desc: "Whether you're in the office, in the field, or after hours — every call and message reaches the right person or gets handled by AI.",
  },
  {
    icon: MessageCircle,
    title: "Voicemails as email transcriptions",
    desc: "Every voicemail becomes a readable, searchable email. No dial-in codes, no missed messages, no voicemail graveyards.",
  },
  {
    icon: Mail,
    title: "Work from anywhere",
    desc: "All your devices are part of one phone system. Talk, chat, text, or video conference from wherever you are — one integrated platform with a full suite of business-class features.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-44 pb-24 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            What DSX Edge Does
          </p>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-[#191919]">
            The Industry&rsquo;s Most Advanced Business Communications Platform
          </h1>
          <p className="mt-6 text-lg text-[#191919]/60 leading-relaxed max-w-xl">
            Your customers communicate in many different ways and DSX Edge supports all of them.
            Industry-leading telephone service, text, video, live chat, WhatsApp, and deep
            integrations with Microsoft 365 and Google Workspace — one platform that empowers
            your entire business.
          </p>
        </div>
      </section>

      {/* Department breakdown */}
      <section className="py-20 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            AI-Powered Business Support
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-16">
            One platform, every department.
          </h2>

          <div className="space-y-8">
            {DEPARTMENTS.map((dept) => {
              const Icon = dept.icon;
              return (
                <div
                  key={dept.name}
                  className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:border-[#0084FF]/20 transition-all duration-200"
                >
                  <div className="md:grid md:grid-cols-[auto_1fr] gap-8">
                    <div className="mb-4 md:mb-0">
                      <Icon className="w-10 h-10 text-[#0084FF]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-[#191919] mb-2">{dept.name}</h3>
                      <p className="text-[#191919]/60 leading-relaxed mb-4">{dept.description}</p>
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                        {dept.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-[#191919]/70"
                          >
                            <span className="text-[#0084FF] mt-1 shrink-0">&#8226;</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Communications section */}
      <section className="py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            Communications
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-6">
            Increases productivity and customer satisfaction.
          </h2>
          <p className="text-[#191919]/60 leading-relaxed max-w-2xl mb-16">
            Talk, chat, text, or video conference with customers from wherever you are.
            One integrated system with a full suite of business-class features that
            follows you everywhere.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {COMMS_FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="bg-[#F4F3F3] rounded-2xl p-6 hover:bg-[#eaeaea] transition-all duration-200"
                >
                  <Icon className="w-8 h-8 text-[#0084FF] mb-4" />
                  <h3 className="font-semibold text-[#191919] mb-2">{feat.title}</h3>
                  <p className="text-sm text-[#191919]/60 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 md:px-10 text-center bg-[#F9F8F6]">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-4">
            See it work for your business.
          </h2>
          <p className="text-[#191919]/60 leading-relaxed mb-8">
            Every department runs better when every call gets answered.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-2xl hover:scale-[1.02] transition-transform duration-200"
            style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
          >
            Book A Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
