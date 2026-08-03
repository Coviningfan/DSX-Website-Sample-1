import { ArrowRight, BookOpen, FileText, MessageSquare, PhoneCall } from "lucide-react";

const resources = [
  {
    icon: BookOpen,
    title: "The Telecom Buyer's Guide",
    desc: "What to ask before signing a 3-year contract. 14 questions most vendors hope you skip.",
    href: "#",
  },
  {
    icon: FileText,
    title: "HIPAA Phone Compliance Checklist",
    desc: "The 8 technical safeguards your phone system needs for HIPAA. With audit expectations.",
    href: "#",
  },
  {
    icon: MessageSquare,
    title: "AI Receptionist Reality Check",
    desc: "When AI call handling works, when it doesn't, and how to test before you commit.",
    href: "#",
  },
];

export default function ResourceSection() {
  return (
    <section id="resources" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Resources
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Guides built from real deployments
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            No generic advice. Every guide comes from actual projects —
            healthcare migrations, logistics dispatch, and manufacturing paging
            integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.href}
              className="group border border-border rounded-md p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <resource.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {resource.desc}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="rounded-md border border-primary/20 bg-primary/5 p-10 sm:p-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-6">
            <PhoneCall className="w-3.5 h-3.5" />
            Limited Availability
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
            Ready to see what your phone system is actually costing you?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We'll audit your current call flows, integration gaps, and
            automation opportunities. You get a concrete report with numbers,
            not a sales pitch.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors group"
          >
            Get Your Free Workflow Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-muted-foreground mt-4">
            No obligation. We'll need about 30 minutes with your team.
          </p>
        </div>
      </div>
    </section>
  );
}
