import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import SignalOrb from "@/components/signal-orb";
import {
  Phone, ArrowRight, Wrench, Stethoscope, ShoppingCart,
  Truck, Home, Hotel, Zap, ChevronRight,
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
    icon: Hotel,
    title: "Hotels & Hospitality",
    desc: "Handle reservations, check-in confirmations, concierge requests, room-service orders, and guest follow-up. Upsell upgrades and amenities at the right moment — without you training anyone.",
  },
];


export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalTriggerRef = useRef<HTMLElement | null>(null);

  const openModal = (layer: number) => {
    modalTriggerRef.current = document.activeElement as HTMLElement;
    setActiveLayer(layer);
    setModalOpen(true);
  };

  useEffect(() => {
    if (!modalOpen || window.matchMedia("(min-width: 640px)").matches) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;

    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setModalOpen(false);
      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>("button, a[href]"),
      ).filter((element) => !element.hasAttribute("disabled"));
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      modalTriggerRef.current?.focus();
    };
  }, [modalOpen]);

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

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-[env(safe-area-inset-top)] max-md:min-h-0">
        <div className="absolute inset-0 z-0 hero-tunnel-bg" aria-hidden="true">
          <img
            src="/images/dsx-edge-bkg.webp"
            alt=""
            width="2560"
            height="1435"
            fetchPriority="high"
            className="block h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-white/10 via-transparent to-[#d9ebf7]/20" />

        <div className="relative z-10 flex flex-1 flex-col items-center px-4 pb-8 pt-24 sm:px-6 sm:pt-32 md:pb-0 md:pt-36">
          <h1 className="max-w-5xl text-balance text-center text-[clamp(2.65rem,12vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.045em] text-[#191919] md:text-7xl lg:text-8xl">
            Every Department, Every Function, 24/7.
          </h1>
          <p className="mt-4 text-center text-lg font-semibold text-[#0084FF] sm:text-xl md:text-2xl">
            Business Communications That Drive Profit
          </p>
          <p className="mt-4 max-w-2xl text-center text-base leading-relaxed text-[#191919]/70 sm:mt-6 sm:text-lg md:text-xl">
            A new dimension in customer interaction and service, tailored to your business.
          </p>

          <div className="mt-7 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <a
              href="tel:844-379-3343"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0872d6] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,91,176,0.2)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Call the Live Demo · 844-DSX-EDGE
            </a>
            <p className="inline-flex items-center gap-2 text-sm font-medium text-[#191919]/80">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e2712f]" aria-hidden="true" />
              Pick up the phone and hear it yourself
            </p>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-4 w-full max-w-5xl px-4 sm:mt-10 sm:px-6 md:mt-12">
          <div className="relative overflow-hidden rounded-t-2xl border border-b-0 border-slate-200/80 bg-white/90 px-5 pb-0 pt-8 shadow-[0_-8px_32px_rgba(27,70,108,0.08)] backdrop-blur-md sm:px-8 sm:pt-10 md:px-12 md:pt-12">
            <div className="brand-accent-rail absolute inset-x-0 top-0" aria-hidden="true" />
            <div className="grid gap-6 md:grid-cols-2 md:gap-16">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#191919]/50">
                  What does DSX Edge do?
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#191919] sm:text-3xl md:text-4xl">
                  Conversations that build momentum
                </h2>
              </div>
              <div className="flex items-end">
                <p className="text-sm leading-relaxed text-[#191919]/70 md:text-[15px]">
                  Conversational AI built for real businesses. Agents hold real conversations, connect to the systems you run, and complete work across voice, SMS, and email.
                </p>
              </div>
            </div>

            <div className="mt-7 h-px w-full bg-slate-200 sm:mt-9" />

            <div className="grid gap-0.5 sm:grid-cols-3">
              {LAYERS.map((item, index) => (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => openModal(index)}
                  className="group flex min-h-11 items-center justify-between bg-[#F4F3F3] px-4 py-4 text-left transition-colors duration-200 hover:bg-[#e9eef2] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#0872d6] sm:px-6"
                >
                  <span className="flex items-center gap-2">
                    <span className="font-medium text-[#191919]/40">{item.num}</span>
                    <span className="text-[#191919]/30">/</span>
                    <span className="font-medium text-[#191919]">{item.label}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#c85f1f] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-[#e2712f]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="opportunity" className="relative overflow-hidden bg-[#102b43] px-4 py-20 text-white sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden="true">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0872d6]/15 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#e2712f]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#f28a45]">
              Never Miss Another Opportunity
            </p>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              The most expensive call may be the one you never knew you missed.
            </h2>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-white/70">
              Customers call, click, and text when they are ready to act. DSX Edge answers routine
              questions and completes common requests during business hours and after hours, so a
              missed interaction does not quietly become lost revenue.
            </p>
          </div>
          <div className="border border-white/12 bg-[#153650] shadow-[0_28px_80px_rgba(3,18,31,0.28)]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">Example call flow</p>
                <p className="mt-1 text-sm font-medium text-white/85">After-hours appointment request</p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-[#9fd3ff]">
                <span className="h-2 w-2 rounded-full bg-[#55b4ff] shadow-[0_0_14px_rgba(85,180,255,0.75)]" aria-hidden="true" />
                Request active
              </span>
            </div>

            <ol className="relative px-5 py-2 sm:px-6" aria-label="Example after-hours call progression">
              {[
                ["00:00", "Incoming call", "A customer calls after business hours."],
                ["00:02", "Request understood", "“I need to move my appointment to Wednesday afternoon.”"],
                ["00:12", "Availability checked", "Two open times are found using the business schedule."],
                ["00:18", "Appointment confirmed", "The calendar is updated and the customer receives confirmation."],
              ].map(([time, title, detail], index) => (
                <li key={title} className="relative grid grid-cols-[3.5rem_1rem_1fr] gap-3 border-b border-white/8 py-5 last:border-b-0 sm:grid-cols-[4rem_1rem_1fr]">
                  <span className="pt-0.5 font-mono text-[11px] text-white/48">{time}</span>
                  <span className="relative mt-1 flex justify-center" aria-hidden="true">
                    {index < 3 && <span className="absolute left-1/2 top-3 h-[calc(100%+1.6rem)] w-px -translate-x-1/2 bg-gradient-to-b from-[#4aa6ff]/70 to-[#e2712f]/30" />}
                    <span className={`relative z-10 h-2.5 w-2.5 rounded-full ${index === 3 ? "bg-[#f28a45] shadow-[0_0_16px_rgba(242,138,69,0.7)]" : "bg-[#69baff]"}`} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/72">{detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="grid gap-3 border-t border-white/10 bg-white/[0.045] px-5 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/42">Business result</p>
                <p className="mt-1 text-sm text-white/78">The request is captured, the schedule is updated, and the customer receives confirmation.</p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#f7a66f]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f28a45]" aria-hidden="true" />
                Completed
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* ── How It Works ─────────────────────────────────── */}
      <section id="how-it-works" className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-[#191919] text-center mb-6">
            How It Works
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-[#191919]/60 sm:mb-14">
            Communications, Intelligence, and Infrastructure — integrated into a single operating layer that runs alongside your team, 24 hours a day.
          </p>

          <div className="how-it-works-orb">
            <SignalOrb />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#0084FF]">
              The Easiest Way to Benefit From AI
            </p>
            <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-[#191919] sm:text-4xl md:text-5xl">
              One communications platform, configured for the work you need done.
            </h2>
          </div>
          <div>
            <p className="text-pretty text-lg leading-relaxed text-[#191919]/65">
              DSX Edge combines business communications with AI agents that can handle customer
              interactions, back-office tasks, and requests from customers or suppliers. It works
              across calls, texts, email, and live chat, and connects each conversation to the next
              action in your business.
            </p>
            <Link
              to="/features"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#191919] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#333]"
            >
              See the Full Platform
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Turnkey AI ───────────────────────────────────── */}
      <section className="bg-[#F9F8F6] px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
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
      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 md:px-10">
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
      <section className="bg-[#F9F8F6] px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
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
                <article
                  key={ex.title}
                  className="border border-gray-200 bg-white p-5 transition-colors duration-200 hover:border-[#0084FF]/20 sm:p-6"
                >
                  <Icon className="w-8 h-8 text-[#0084FF] mb-4" />
                  <h3 className="font-semibold text-[#191919] mb-2">{ex.title}</h3>
                  <details className="group sm:hidden">
                    <summary className="cursor-pointer list-none text-sm font-medium text-[#0872d6] marker:hidden">See workflow</summary>
                    <p className="mt-3 text-sm leading-relaxed text-[#191919]/60">{ex.desc}</p>
                  </details>
                  <p className="hidden text-sm leading-relaxed text-[#191919]/60 sm:block">{ex.desc}</p>
                </article>
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
            to="/about#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#191919] bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200"
          >
            REQUEST A CONSULTATION
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
          Automotive, construction, education, finance, government, healthcare, hospitality, manufacturing, nonprofit, professional services, real estate, retail, transportation, wholesale, and many more.
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
          You do not need to learn new software. DSX Edge fits into the way you already work. Call in, tell us about your business, and we will show you exactly how it runs on your own phone line.
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
            to="/about#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#191919] bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200"
          >
            REQUEST A CONSULTATION
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── Modal ─────────────────────────────────────────── */}
      {modalOpen && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="layer-modal-title"
            aria-describedby="layer-modal-description"
            className="relative z-10 max-h-[calc(100dvh-2rem)] w-full max-w-lg overflow-y-auto rounded-2xl border border-gray-200 bg-white p-5 shadow-xl animate-[fadeIn_0.2s_ease-out] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-[#0084FF]">{LAYERS[activeLayer].num}</span>
              <span className="text-[#191919]/30">/</span>
              <h3 id="layer-modal-title" className="text-xl font-semibold text-[#191919]">{LAYERS[activeLayer].label}</h3>
            </div>
            <p className="text-sm font-medium text-[#191919]/60 mb-4">{LAYERS[activeLayer].subtitle}</p>
            <p id="layer-modal-description" className="text-[#191919]/70 leading-relaxed">{LAYERS[activeLayer].body}</p>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row" role="group" aria-label="Choose platform layer">
              {LAYERS.map((l, i) => (
                <button
                  key={l.num}
                  onClick={() => setActiveLayer(i)}
                  aria-pressed={i === activeLayer}
                  className={`flex min-h-11 w-full min-w-0 items-center gap-3 rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors duration-200 sm:min-h-0 sm:w-auto sm:justify-center sm:text-center ${
                    i === activeLayer
                      ? "bg-[#191919] text-white"
                      : "bg-[#F4F3F3] text-[#191919]/60 hover:bg-[#eaeaea]"
                  }`}
                >
                  <span className={`text-xs tabular-nums sm:hidden ${i === activeLayer ? "text-white/60" : "text-[#191919]/35"}`}>
                    {l.num}
                  </span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
            <button
              ref={closeButtonRef}
              onClick={() => setModalOpen(false)}
              className="mt-4 min-h-11 w-full rounded-lg border border-gray-200 text-sm font-medium text-[#191919]/60 transition-colors duration-200 hover:bg-gray-50 hover:text-[#191919] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0872d6] sm:mt-6"
            >
              Close
            </button>
          </div>
        </div>,
        document.body,
      )}
    </main>
  );
}
