import DsxEdgeHero from "@/components/dsx-edge-hero-v4";
import { useState } from "react";
import SignalOrb from "@/components/signal-orb";
import {
  Phone, ArrowRight, Wrench, Stethoscope, ShoppingCart,
  Truck, Home, GraduationCap, Zap, ChevronRight,
  MessageCircle, HelpCircle, ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";

const DEPARTMENTS = [
  "Customer Service", "Sales", "Marketing", "Appointment Setting",
  "Shipping", "Management", "Finance", "Human Resources",
  "IT", "Legal", "Construction", "Hotels", "Medical", "Retail",
  "Transportation", "Logistics", "Wholesale", "Professional Services",
  "Manufacturing", "Education",
];

const WORKFLOW_EXAMPLES = [
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    desc: "Talk or text with your customer to diagnose their issue, identify parts needed, create a job ticket, and schedule a service call. After hours, DSX Edge contacts the on-call tech if the problem is critical.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    desc: "Schedule appointments based on the patient's condition. Call to remind and confirm, reschedule if there's a conflict. Interview patients before visits, asking follow-up questions based on their responses.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & Wholesale",
    desc: "Take incoming orders, check inventory, handle backorders, process payments or bill to account, generate pick tickets, and schedule delivery. Check order status and delivery tracking anytime.",
  },
  {
    icon: Truck,
    title: "Transportation & Shipping",
    desc: "Tell a customer when the next departure is from their location. Provide shipment location and ETA. Notify clients of delays with the cause and new expected arrival. Give time and cost estimates based on input.",
  },
  {
    icon: Home,
    title: "Residential & Commercial Services",
    desc: "Ask about the property and prepare a quote. Schedule, cancel, or reschedule appointments. Pause or restart recurring service. Answer billing questions. Confirm appointments and service by phone.",
  },
  {
    icon: GraduationCap,
    title: "Hotels & Hospitality",
    desc: "Handle reservations, check-in confirmations, concierge requests, room-service orders, and guest follow-up. Upsell upgrades and amenities at the right moment — without you training anyone.",
  },
];


export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const openModal = (layer: number) => {
    setActiveLayer(layer);
    setModalOpen(true);
  };

  const LAYERS = [
    {
      num: "01", label: "Communications",
      subtitle: "Every channel, every function",
      body: "Your business doesn't stop at 5 PM. DSX Edge handles inbound and outbound calls, SMS, and email — answering questions, booking appointments, taking orders, and routing emergencies to the right person. All with the voice and tone you choose. All 24/7.",
    },
    {
      num: "02", label: "Intelligence",
      subtitle: "AI that learns your business",
      body: "DSX Edge doesn't just respond — it reasons. It knows your products, prices, inventory, schedules, and business rules. It asks the right questions, fills in the gaps, and gets smarter every shift. When it's not sure, it escalates cleanly — with a full record of the conversation.",
    },
    {
      num: "03", label: "Infrastructure",
      subtitle: "The stack beneath the voice",
      body: "Built on 3CX with deep CRM, ERP, and payment integrations. DSX Edge syncs with the software you already run so every call produces actionable work — not just a message someone has to deal with later. Ticketing, scheduling, billing, inventory — all connected.",
    },
  ];


  /* ── Tunnel blur: sharp in hero, gentle blur after scroll ── */
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const handler = () => {
      const hero = document.querySelector(".dsx-edge-hero");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const exit = Math.max(0, -rect.top);
      const h = hero.offsetHeight;
      const progress = Math.min(exit / h, 1);
      main.style.setProperty("--scroll-progress", progress.toString());
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <DsxEdgeHero />


      {/* ── How It Works ─────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919] text-center mb-6">
            How It Works
          </h2>
          <p className="text-[#191919]/60 max-w-2xl mx-auto text-center leading-relaxed mb-16">
            Communications, Intelligence, and Infrastructure — integrated into a single operating layer that runs alongside your team, 24 hours a day.
          </p>

          <div className="flex justify-center mb-16">
            <SignalOrb />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {LAYERS.map((l) => (
              <div key={l.num} className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#0084FF]/20 transition-colors duration-200">
                <span className="text-2xl font-bold text-[#0084FF]">{l.num}</span>
                <h3 className="mt-2 font-semibold text-[#191919]">{l.label}</h3>
                <p className="mt-2 text-sm text-[#191919]/60 leading-relaxed">{l.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Turnkey AI ───────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
              Turnkey AI
            </p>
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919] mb-6">
              We set up the platform for your specific business.
            </h2>
            <p className="text-3xl font-bold text-[#0084FF] mb-8">
              You just use it.
            </p>
            <p className="text-lg text-[#191919]/60 leading-relaxed max-w-2xl mx-auto">
              Every DSX Edge deployment is configured to your products, services, workflows, customers, pricing, and business rules. The AI learns your business — not the other way around.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: MessageCircle, label: "Talk or text with your customer", desc: "Respond naturally to voice calls, SMS, and email — in the tone your business uses." },
              { icon: HelpCircle, label: "Get information about their issue", desc: "Ask the right follow-up questions based on what the customer tells them." },
              { icon: Stethoscope, label: "Diagnose the problem", desc: "Match symptoms to causes using your business rules and product catalog." },
              { icon: ClipboardList, label: "Make a list of what's needed", desc: "Identify parts, schedule availability, and prepare estimates." },
              { icon: Wrench, label: "Create a ticket and schedule", desc: "Open a job in your system, notify the right people, and confirm with the customer." },
              { icon: Zap, label: "Escalate when necessary", desc: "If it's urgent or outside scope, route to a live person with full context — instantly." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 p-5 hover:border-[#0084FF]/20 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-[#0084FF] mb-3" />
                  <h4 className="font-semibold text-[#191919] text-sm mb-1">{item.label}</h4>
                  <p className="text-xs text-[#191919]/50 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Every Department ──────────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            Every Department
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-12">
            Built for the whole business.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {DEPARTMENTS.map((dept) => (
              <div
                key={dept}
                className="bg-[#F9F8F6] rounded-xl px-4 py-3 text-sm font-medium text-[#191919]/70 text-center hover:bg-[#F0EFEC] transition-colors duration-200"
              >
                {dept}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Workflow Examples ────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 bg-[#F9F8F6]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4 text-center">
            Tailored to Your Business
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919] text-center mb-6">
            How DSX Edge works in your world
          </h2>
          <p className="text-[#191919]/60 max-w-2xl mx-auto text-center leading-relaxed mb-16">
            These are examples of autonomous business activities DSX Edge handles during business hours — so your staff can focus on the work that builds your business — and after hours, so you never miss an opportunity.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {WORKFLOW_EXAMPLES.map((ex) => {
              const Icon = ex.icon;
              return (
                <div
                  key={ex.title}
                  className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-[#0084FF]/20 transition-all duration-200"
                >
                  <Icon className="w-8 h-8 text-[#0084FF] mb-4" />
                  <h3 className="font-semibold text-[#191919] mb-2">{ex.title}</h3>
                  <p className="text-sm text-[#191919]/60 leading-relaxed">{ex.desc}</p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-lg font-semibold text-[#191919] mb-8">
            Every industry. Every department. Every shift.
          </p>

          <div className="text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#191919] rounded-xl hover:bg-[#333] transition-colors duration-200"
            >
              SEE DSX EDGE FOR YOUR BUSINESS
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Try It for Yourself ───────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 text-center bg-white">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919] mb-6">
          Try It for Yourself — call 844-DSX-Edge and talk with Mary
        </h2>
        <p className="text-[#191919]/60 max-w-xl mx-auto leading-relaxed mb-8">
          She is one of our AI agents. Ask about pricing, availability, or call back later. She can take an order, book an appointment, or transfer you. Hang up when you are done. It is that simple.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:844-379-3343"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0084FF]/90 rounded-xl hover:scale-[1.02] transition-transform duration-200"
          >
            <Phone className="w-4 h-4" />
            844-DSX-EDGE
          </a>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#191919] bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200"
          >
            BOOK A FREE CONSULTATION
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Industries Cross-Link ─────────────────────────── */}
      <section className="py-24 px-4 sm:px-6 md:px-10 bg-[#F9F8F6] text-center">
        <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-4">
          See DSX Edge for Your Industry
        </h2>
        <p className="text-[#191919]/60 max-w-lg mx-auto leading-relaxed mb-8">
          Automotive, Construction, Education, Finance, Government, Healthcare, Hotels, Manufacturing, Nonprofit, Professional Services, Real Estate, Retail, Transportation, Wholesale. 14 industries. One platform.
        </p>
        <Link
          to="/industries"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#191919] rounded-xl hover:bg-[#333] transition-colors duration-200"
        >
          Explore All Industries
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 md:px-10 text-center bg-white">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919] mb-6">
          Tailored to Your Business
        </h2>
        <p className="text-[#191919]/60 max-w-xl mx-auto leading-relaxed mb-8">
          You do not need to learn new software. DSX Edge fits into the way you already work. Call in, tell us about your business, and we will show you exactly how it runs — live, on your own phone line.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:844-379-3343"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0084FF]/90 rounded-xl hover:scale-[1.02] transition-transform duration-200"
          >
            <Phone className="w-4 h-4" />
            844-DSX-EDGE
          </a>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#191919] bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200"
          >
            BOOK A FREE CONSULTATION
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Modal ─────────────────────────────────────────── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative z-10 bg-white rounded-2xl border border-gray-200 shadow-xl max-w-lg w-full p-8 animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-[#0084FF]">{LAYERS[activeLayer].num}</span>
              <span className="text-[#191919]/30">/</span>
              <h3 className="text-xl font-semibold text-[#191919]">{LAYERS[activeLayer].label}</h3>
            </div>
            <p className="text-sm font-medium text-[#191919]/60 mb-4">{LAYERS[activeLayer].subtitle}</p>
            <p className="text-[#191919]/70 leading-relaxed">{LAYERS[activeLayer].body}</p>
            <div className="mt-6 flex gap-2">
              {LAYERS.map((l, i) => (
                <button
                  key={l.num}
                  onClick={() => setActiveLayer(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    i === activeLayer
                      ? "bg-[#191919] text-white"
                      : "bg-[#F4F3F3] text-[#191919]/60 hover:bg-[#eaeaea]"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-6 text-sm text-[#191919]/40 hover:text-[#191919]/70 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
