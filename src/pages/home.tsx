import { PhoneCall, BrainCircuit, Shield, ArrowUpRight, ChevronRight, Headphones, Hotel, Stethoscope, Truck, Scale, Home, GraduationCap, ShoppingCart, Car, Wrench } from "lucide-react";
import SignalOrb from "@/components/signal-orb";

const DEPARTMENTS = [
  "Customer Service", "Order Taking", "Appointment Setting", "Return Processing",
  "Dispatch", "Inventory Control", "Accounting Inquiries", "Troubleshooting", "FAQs"
];

const INDUSTRIES = [
  { label: "Automotive", icon: Car },
  { label: "Insurance", icon: Shield },
  { label: "Real Estate", icon: Home },
  { label: "HVAC", icon: Wrench },
  { label: "Plumbing", icon: Wrench },
  { label: "Legal", icon: Scale },
  { label: "Construction", icon: Wrench },
  { label: "Hotel", icon: Hotel },
  { label: "Medical", icon: Stethoscope },
  { label: "Retail", icon: ShoppingCart },
  { label: "Nonprofit", icon: GraduationCap },
  { label: "Auction", icon: PhoneCall },
];

const PROOF_POINTS = [
  { metric: "99.9%", label: "Uptime SLA" },
  { metric: "100K+/mo", label: "Minutes on one platform" },
  { metric: "12+ yrs", label: "Years deploying" },
  { metric: "3CX Platinum", label: "Highest partner tier" },
];

export default function HomePage() {
  return (
    <main>

      {/* Hero — copy overlaid on the SignalOrb */}
      <section id="hero" className="relative overflow-hidden px-6 pt-20 pb-12 max-w-7xl mx-auto">
        <div className="pointer-events-none absolute inset-0 -z-0 opacity-80">
          <SignalOrb />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance">
            Every Department,<br />
            Every Function,<br />
            <span className="text-primary">24/7.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Your employees spend up to 65% of their time performing routine tasks. DSX Edge AI handles
            those tasks automatically — answering calls, qualifying leads, booking appointments, processing
            returns, and more — freeing your team for the work that grows your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="tel:8443793343" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground text-lg font-semibold hover:bg-primary/90 transition-colors">
              <PhoneCall className="w-5 h-5" />
              844-DSX-Edge
            </a>
            <span className="text-sm text-muted-foreground self-center">
              Call and try it for yourself
            </span>
          </div>
        </div>
      </section>

      {/* Proof rail */}
      <section className="px-6 pb-20 max-w-7xl mx-auto" style={{ zIndex: 1, position: "relative" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-b border-border/50">
          {PROOF_POINTS.map((stat) => (
            <div key={stat.metric}>
              <div className="text-2xl sm:text-3xl font-semibold tracking-tight">{stat.metric}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Every Department */}
      <section id="departments" className="px-6 pb-24 max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Features</p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-balance">
          One system handles every department.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Industry-leading voice AI answers and routes every type of call — not just the easy ones.
        </p>
        <div className="flex flex-wrap gap-2">
          {DEPARTMENTS.map((dept) => (
            <span key={dept} className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground/80">
              {dept}
            </span>
          ))}
        </div>
      </section>

      {/* Natural Dialogue Examples */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Natural Language AI</p>
            <blockquote className="text-foreground/90 leading-relaxed space-y-3">
              <p className="text-primary font-medium">"Good morning, thank you for calling Sparkle Clean. This is Angie."</p>
              <p className="text-muted-foreground">"Hi, I need someone with an emergency. My basement flooded from a broken pipe."</p>
              <p className="text-primary font-medium">"Oh, I'm very sorry. I can help. May I have your name and member number?"</p>
              <p className="text-muted-foreground">"Mrs. Smith. Let me get the number..."</p>
            </blockquote>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Product Expert</p>
            <blockquote className="text-foreground/90 leading-relaxed space-y-3">
              <p className="text-primary font-medium">"Thanks for calling Wagner Equipment. My name is Dave. How can I help?"</p>
              <p className="text-muted-foreground">"My model 94 won't start. I need a tech and I need to order a part."</p>
              <p className="text-primary font-medium">"Happy to help. Let me look up your account and model specs. I see three open orders. Is this for your current order or a new problem?"</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Try It For Yourself */}
      <section id="demo" className="px-6 pb-24 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Try It for Yourself</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Pick up the phone and experience the difference. Call the number below and ask any question —
          you&rsquo;ll hear exactly what your customers would hear.
        </p>
        <a href="tel:8443793343" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-accent-foreground text-xl font-semibold hover:bg-accent/90 transition-colors">
          <PhoneCall className="w-5 h-5" />
          844-DSX-Edge
        </a>
        <p className="text-sm text-muted-foreground mt-3">(844-379-3343)</p>
      </section>

      {/* Turnkey AI */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <div className="bg-card border border-border rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
            We set up the platform for your specific business.<br />
            You just use it.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            DSX Edge is not a do-it-yourself toolkit. Our team configures the AI, routes, integrations,
            and workflows for your exact operations. Every deployment is custom — because your business
            is not a template.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="px-6 pb-24 max-w-7xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Industries</p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-balance">
          Trusted across manufacturing, automotive, medical, legal, hospitality, and construction — industries where every call carries money.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
          Proudly serving Northern Nevada and the Mountain West. Manufacturing, automotive, medical,
          legal, hospitality, construction — we handle the calls so you can handle the work.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {INDUSTRIES.map((ind) => (
            <div key={ind.label} className="flex items-center gap-2 px-4 py-3 rounded-md bg-secondary/50 text-sm">
              <ind.icon className="w-4 h-4 text-muted-foreground" />
              {ind.label}
            </div>
          ))}
        </div>
      </section>

      {/* "Never Miss Another Opportunity" */}
      <section id="features" className="px-6 pb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-balance">
          Every missed call is profit that disappears.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6">
            <PhoneCall className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Never Miss a Call</h3>
            <p className="text-sm text-muted-foreground">
              Every call is answered professionally — 24 hours a day, 7 days a week, 365 days a year.
              No voicemail jail, no busy signals, no missed revenue.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <BrainCircuit className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Customer Service AI</h3>
            <p className="text-sm text-muted-foreground">
              Your customers don&rsquo;t know or care if they&rsquo;re talking to AI. They just want
              their problem solved. DSX Edge delivers competent, natural conversation that
              resolves issues without escalation.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <Shield className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Professional Services</h3>
            <p className="text-sm text-muted-foreground">
              We configure the system for your business, your workflows, and your customers.
              Not a template. Not a chatbot. A production communication system, deployed by
              the team who built it.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing — descriptive, no tiers */}
      <section id="pricing" className="px-6 pb-24 max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Pricing</p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-balance">
          Does not cost thousands of dollars.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-12">
          Every deployment is custom — priced for exactly what your business needs, not a generic plan
          that charges for features you&rsquo;ll never use.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Telephone Service</h3>
            <p className="text-sm text-muted-foreground">
              Priced by concurrent call capacity and usage — not per user. You only pay for
              the call volume your business actually needs.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-2">AI Customization</h3>
            <p className="text-sm text-muted-foreground">
              $300–$1,000 to train and configure the AI for your specific business, products,
              services, and customer conversations.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Ongoing AI</h3>
            <p className="text-sm text-muted-foreground">
              Computing and storage is roughly 15%–20% of the telephone service charge.
              Transparent, predictable, and directly tied to usage.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 pb-24 max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">About</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-balance">
              20 years in telecom.<br />Not a consultancy.
            </h2>
            <p className="text-muted-foreground">
              DSX was founded to build communication systems that support real business operations across
              America. Our support team and engineers are located in Reno, Nevada — a local team with
              national reach, not a call center reading from scripts.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium">Local team, national capability</p>
                <p className="text-sm text-muted-foreground">Engineering and support in Reno, NV. Hosted infrastructure in Tahoe Reno.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium">Not consultants, not a reseller</p>
                <p className="text-sm text-muted-foreground">We build and operate the system — we don&rsquo;t hand off a report and walk away.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <div>
                <p className="font-medium">One relationship, one team</p>
                <p className="text-sm text-muted-foreground">Same engineers who design your system answer your calls when something changes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 pb-24 max-w-3xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Contact</p>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-balance">
          Schedule a workflow audit.
        </h2>
        <p className="text-muted-foreground mb-8">
          Tell us about your business. We&rsquo;ll review your communication workflows, identify gaps,
          and recommend a solution that fits — no obligation, no sales pitch.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a href="tel:8443793343" className="flex items-center gap-3 p-4 rounded-md bg-secondary hover:bg-secondary/80 transition-colors">
            <PhoneCall className="w-5 h-5 text-primary" />
            <div>
              <div className="font-medium">844-DSX-Edge</div>
              <div className="text-sm text-muted-foreground">(844-379-3343)</div>
            </div>
          </a>
          <a href="mailto:hello@dsxedge.com" className="flex items-center gap-3 p-4 rounded-md bg-secondary hover:bg-secondary/80 transition-colors">
            <ArrowUpRight className="w-5 h-5 text-primary" />
            <div>
              <div className="font-medium">hello@dsxedge.com</div>
              <div className="text-sm text-muted-foreground">Email us</div>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
