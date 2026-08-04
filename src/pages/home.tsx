import { PhoneCall, GitBranch, BrainCircuit, Server, Database, CalendarCheck, MessageSquareText, ArrowUpRight, ChevronRight } from "lucide-react";
import { SignalOrb } from "../components/signal-orb";

const proofStats = [
  { metric: "99.97%", label: "Uptime" },
  { metric: "2.4M+", label: "Minutes routed / month" },
  { metric: "140+", label: "Active deployments" },
  { metric: "58%", label: "Average cost reduction" },
];

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      {/* Hero — two-column: copy left, orb right */}
      <section className="relative px-6 pt-28 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight text-balance">
              DSX builds the phone system,
              <br />
              <span className="text-muted-foreground">connects it to the operation,</span>
              <br />
              and adds AI only where
              <br />
              <span className="text-muted-foreground">it earns its keep.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Business telecom engineered for operations teams. 3CX,
              carrier-grade SIP trunking, and practical AI routing — all
              from our Nevada backbone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Request a workflow audit
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-sm font-medium hover:bg-secondary transition-colors"
              >
                Read case studies
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <SignalOrb />
        </div>
      </section>

      {/* Proof rail */}
      <section className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-b border-border/50">
          {proofStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-2xl sm:text-3xl font-semibold tracking-tight">
                {stat.metric}
              </div>
              <div className="mt-1 text-xs text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call flow: how calls actually move */}
      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          How calls move
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-balance">
          A call comes in. Your customer doesn&#39;t know they&#39;re being routed — they just know they got to the right person.
        </h2>
        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <PhoneCall className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Inbound call arrives</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                SIP trunk terminates the call. DSX infrastructure handles
                failover and carrier redundancy before the first ring.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <GitBranch className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Routing logic executes</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Department-aware IVR with CRM lookups. Time-based routing
                with holiday override. Follow-the-sun logic for distributed teams.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <BrainCircuit className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">AI qualifies (if enabled)</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Voice-based AI receptionist handles common intents, collects
                information, and escalates when a human is needed. Call
                summaries delivered in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture: Three layers. No mystery. */}
      <section id="architecture" className="px-6 pb-24 max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Architecture
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12 text-balance">
          Three layers. No mystery.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-border/60 bg-card/40">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
              <PhoneCall className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Communications</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              3CX hosted deployment on DSX infrastructure. SIP trunking,
              softphones, desk phones, and conference rooms. The phone
              system itself.
            </p>
          </div>
          <div className="p-6 border border-border/60 bg-card/40 md:mt-8">
            <div className="w-10 h-10 rounded-lg bg-slate-400/10 flex items-center justify-center mb-5">
              <Server className="w-5 h-5 text-slate-400" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Integrations</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Connect the phone system to your CRM, ticketing, and
              operations tools. Caller context, click-to-dial, and automatic
              logging.
            </p>
          </div>
          <div className="p-6 border border-border/60 bg-card/40 md:mt-16">
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-5">
              <BrainCircuit className="w-5 h-5 text-orange-400" />
            </div>
            <h3 className="font-semibold text-lg mb-3">AI (Optional)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Voice-based AI receptionist, department-aware routing, and
              real-time call summaries. Added only where it earns its keep.
            </p>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="px-6 pb-24 max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Case Studies
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-balance">
          Real deployments. Measurable results.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Three different businesses, three different problems, one
          approach. No filler — just what was built, why, and what changed.
        </p>
        <div className="space-y-16">
          {/* Synology */}
          <article className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 flex items-start">
              <span className="font-mono text-5xl font-semibold text-primary/25 leading-none">01</span>
            </div>
            <div className="md:col-span-3">
              <div className="flex flex-wrap gap-3 items-center mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Synology
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
                  Washington State • Mid-Market — Manufacturing
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Unified Communications for Multi-Site Manufacturing
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    challenge
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    Legacy on-prem PBX across multiple locations. No
                    centralized management or reporting.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    solution
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    3CX enterprise deployment with capacity-based DSX
                    trunks. Department-aware call-flow routing. CRM
                    integration.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    results
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    46% monthly spend reduction. Centralized management
                    across 4 sites.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Law Office */}
          <article className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 flex items-start">
              <span className="font-mono text-5xl font-semibold text-primary/25 leading-none">02</span>
            </div>
            <div className="md:col-span-3">
              <div className="flex flex-wrap gap-3 items-center mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Law Office of Michael H. Bonner
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
                  California • Small Business — Legal
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Call handling for a practice that can&#39;t miss calls
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    challenge
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    Single attorney relying on call forwarding. No
                    overflow handling. Missed calls meant missed
                    clients.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    solution
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    Dedicated 3CX instance with time-based routing,
                    voicemail-to-text transcription, and a softphone
                    client for mobile.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    results
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    Zero missed calls in 12 months. Client callback
                    time reduced from 4 hours to 22 minutes.
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Synergy Homeopathic */}
          <article className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 flex items-start">
              <span className="font-mono text-5xl font-semibold text-primary/25 leading-none">03</span>
            </div>
            <div className="md:col-span-3">
              <div className="flex flex-wrap gap-3 items-center mb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Synergy Homeopathic
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
                  Arizona • Small Business — Healthcare
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                HIPAA-Compliant Phone System for a Growing Practice
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    challenge
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    Consumer VoIP line without HIPAA compliance or
                    business features. Growing patient volume
                    required a real phone system.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    solution
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    HIPAA-compliant 3CX deployment with encrypted
                    call paths, BAA coverage, and a webRTC client
                    for practitioner mobility.
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    results
                  </p>
                  <p className="mt-1 text-sm leading-relaxed">
                    Practice grew 40%. Phone system scaled without
                    hardware changes.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Infrastructure & Trust */}
      <section id="infrastructure" className="px-6 pb-24 max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Infrastructure &amp; Trust
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-balance">
          Business telecom should live on infrastructure you can see.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          No shared-tenancy VoIP, no cloud handoffs, no resold minutes from
          a reseller of a reseller. DSX infrastructure is purpose-built and
          carrier-direct.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-border/60 bg-card/40">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
              <Server className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-3">Citadel Campus, Nevada</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All DSX infrastructure runs from a carrier-grade datacenter
              in Reno, Nevada. Direct peering with major carriers.
            </p>
          </div>
          <div className="p-6 border border-border/60 bg-card/40">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
              <Database className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-3">HIPAA Compliant</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full BAA coverage available. Encrypted call paths and
              recording storage meet healthcare requirements.
            </p>
          </div>
          <div className="p-6 border border-border/60 bg-card/40">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5">
              <CalendarCheck className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg mb-3">SOC 2 Type II</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Independently audited controls for security, availability,
              and confidentiality. Annual certification maintained.
            </p>
          </div>
        </div>
      </section>

      {/* Resources + CTA */}
      <section id="contact" className="px-6 pb-24 max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Resources
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-balance">
          Four things to read before your next phone system decision.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {[
            "3CX Platinum Partner: What It Means",
            "Multi-Tenant 3CX Explained",
            "Why Phone System Pricing Models Matter",
            "Three Things to Do Before You Turn On an AI Receptionist",
          ].map((title, i) => (
            <a
              key={i}
              href="#"
              className="p-4 border border-border/60 hover:border-primary/30 transition-colors group"
            >
              <p className="font-medium group-hover:text-primary transition-colors">
                {title}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Read guide &rarr;
              </p>
            </a>
          ))}
        </div>

        <div className="text-center p-8 border border-border/60 bg-card/40">
          <h2 className="text-xl font-semibold mb-4">
            Your current phone system isn&#39;t as good as you think.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mb-6">
            We&#39;ll map your call routing, audit your infrastructure,
            and show you where a purpose-built system saves money and
            reduces chaos.
          </p>
          <a
            href="mailto:info@dsxedge.com"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Request a free workflow audit
          </a>
        </div>
      </section>
    </main>
  );
}
