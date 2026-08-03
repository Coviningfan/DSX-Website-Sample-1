import { motion } from "framer-motion";
import {
  Wrench,
  PhoneCall,
  GitBranch,
  Shield,
  Layers,
  BarChart3,
  ChevronRight,
  ArrowUpRight,
  Server,
} from "lucide-react";
import { caseStudies } from "@/data/case-studies";

const proofItems = [
  { label: "Minutes routed", value: "2.4M+", suffix: "/mo" },
  { label: "Active deployments", value: "140+" },
  { label: "Avg cost reduction", value: "58%" },
  { label: "Avg uptime", value: "99.97%" },
];

export default function HomePage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_320px] gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-balance">
                  DSX builds the phone system,
                  <br />
                  connects it to the operation,
                  <br />
                  <span className="text-accent">and adds AI only where it earns
                    its keep.</span>
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Business telecom engineered for operations teams. 3CX,
                  carrier-grade SIP trunking, and practical AI routing — all
                  from our Nevada backbone.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex flex-wrap gap-3"
              >
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
              </motion.div>
            </div>

            {/* Signal Orb */}
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.03, 1],
                      opacity: [0.7, 0.9, 0.7],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-xl"
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-[-2px] rounded-full border border-primary/20 border-dashed"
                  />
                  <div className="relative z-10 text-center">
                    <Wrench className="w-12 h-12 text-accent mb-2 mx-auto" />
                    <div className="font-mono text-2xl font-semibold text-primary">
                      99.97%
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      Network uptime
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Rail */}
      <section className="py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {proofItems.map((item) => (
              <div key={item.label} className="text-center lg:text-left">
                <div className="font-mono text-2xl font-semibold text-foreground tabular-nums">
                  {item.value}
                  {item.suffix && (
                    <span className="text-sm text-muted-foreground font-normal">
                      {item.suffix}
                    </span>
                  )}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Flow */}
      <section id="call-flow" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground mb-4">
                <GitBranch className="w-3 h-3" />
                Intelligent Routing
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-balance">
                Every call has a destination. Most don't need a human to find
                it.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
                DSX routes calls by department, time of day, and caller context
                — not by a fixed flowchart. Your team gets the right calls. Your
                customers skip the maze.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Time-based routing with holiday override",
                  "Department-aware IVR with CRM lookups",
                  "Follow-the-sun logic for distributed teams",
                  "Optional AI triage for high-volume queues",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              {[
                { step: "Inbound call", dest: "SIP trunk → 3CX tenant" },
                {
                  step: "IVR + context lookup",
                  dest: "Caller ID → department flag",
                },
                {
                  step: "Queue assignment",
                  dest: "Sales, Support, or Auto-attendant",
                },
                {
                  step: "Optional AI triage",
                  dest: 'Intent detection → "Billing" → Finance',
                },
                { step: "Ring target", dest: "Agent softphone or mobile" },
              ].map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-2 border-b border-border last:border-0"
                >
                  <span className="text-sm font-medium">{row.step}</span>
                  <span className="text-sm text-muted-foreground">
                    {row.dest}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground mb-4">
              <Layers className="w-3 h-3" />
              Platform Architecture
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-balance">
              Three layers. No mystery.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <PhoneCall className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Communications
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                3CX hosted deployment on DSX infrastructure. SIP trunking,
                softphones, desk phones, and conference rooms. The phone system
                itself.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <GitBranch className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Integrations</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect the phone system to your CRM, ticketing, and
                operations tools. Caller context, click-to-dial, and
                automatic logging.
              </p>
            </div>
            <div className="border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
              <Server className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                AI (Optional)
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Voice-based AI receptionist, department-aware routing, and
                real-time call summaries. Added only where it earns its keep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground mb-4">
                <BarChart3 className="w-3 h-3" />
                Case Studies
              </div>
              <h2 className="text-3xl font-bold tracking-tight">
                Real deployments.
                <br />
                Real results.
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="border border-border rounded-lg p-8 hover:border-primary/20 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-semibold">{study.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {study.location} &bull; {study.category}
                    </p>
                  </div>
                  {study.featured && (
                    <span className="px-2.5 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      Featured
                    </span>
                  )}
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Challenge
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.challenge}
                    </p>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mt-4 mb-2">
                      Solution
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Results
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((r, i) => (
                        <div
                          key={i}
                          className="border border-border rounded-md p-4 text-center"
                        >
                          <div className="font-mono text-xl font-semibold text-accent tabular-nums">
                            {r.metric}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure + Trust */}
      <section id="infrastructure" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground mb-4">
              <Shield className="w-3 h-3" />
              Infrastructure &amp; Trust
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-balance">
              Business telecom should live on infrastructure you can see.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-lg border border-border">
                <Server className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Citadel Campus, Nevada</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    All DSX infrastructure runs from a carrier-grade datacenter
                    in Fernley, Nevada. Direct peering with major carriers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-lg border border-border">
                <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">HIPAA Compliant</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Full BAA coverage available. Encrypted call paths and
                    recording storage meet healthcare requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-lg border border-border">
                <BarChart3 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">SOC 2 Type II</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Annual audit with public report available. Security and
                    availability controls verified.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-6 bg-background">
              <div className="font-mono text-xs text-muted-foreground mb-4 uppercase tracking-widest">
                Network Status
              </div>
              <div className="space-y-4">
                {[
                  { label: "3CX Platform", uptime: "99.99%", status: "up" },
                  { label: "SIP Trunking", uptime: "99.97%", status: "up" },
                  { label: "NV Gateway", uptime: "99.98%", status: "up" },
                  { label: "AI Services", uptime: "99.95%", status: "up" },
                ].map((svc) => (
                  <div
                    key={svc.label}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm">{svc.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm tabular-nums">
                        {svc.uptime}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-balance">
            Not ready to buy a phone system.
            <br />
            Ready to fix how your operation communicates.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Start with a free workflow audit. We'll map your current call paths,
            identify the bottlenecks, and show you what a DSX deployment would
            look like. No obligation.
          </p>
          <a
            href="mailto:hello@dsxedge.com"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Request your workflow audit
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </main>
  );
}
