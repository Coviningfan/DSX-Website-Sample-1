import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Server } from "lucide-react";
import SignalOrb from "./signal-orb";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-background">
      {/* Background noise */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Headline + subhead + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Fernley, NV &mdash; Serving the Mountain West
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-foreground text-balance">
              The phone system that<br />
              <span className="text-primary">runs your operation</span>
              <span className="text-accent">.</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              DSX builds phone systems, connects them to your operation, and
              adds AI only where it earns its keep. Not a platform. Not a
              promise of disruption. Just telecom infrastructure that works.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors group"
              >
                Free Workflow Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
              >
                See Case Studies
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { icon: Shield, label: "HIPAA Compliant" },
                { icon: Clock, label: "24/7 Monitoring" },
                { icon: Server, label: "NV Data Centers" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <item.icon className="w-3.5 h-3.5 text-primary" />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: SignalOrb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative aspect-square"
          >
            <SignalOrb />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
