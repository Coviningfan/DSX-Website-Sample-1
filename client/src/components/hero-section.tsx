import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SignalOrb from "./signal-orb";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-20 overflow-hidden min-h-[100svh] flex items-center">
      <div className="absolute inset-0 bg-slate-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

          <div className="lg:col-span-7 text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-sm font-semibold tracking-wider uppercase text-blue-400 mb-4 font-mono-dsx">
                3CX Platinum Partner &middot; 12+ Years
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[1.05] tracking-tight"
            >
              Your phone system, built for how you actually work.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-slate-300 mb-3 max-w-2xl leading-relaxed"
            >
              We&rsquo;ve built business phone systems for 12 years &mdash; calls, routing, hosting, support.
              Now we layer in AI that answers, qualifies, updates your CRM, and books the appointment.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm md:text-base text-orange-300 mb-8 max-w-2xl italic"
            >
              A missed call is a missed customer. We make sure the phone gets answered &mdash; every time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <Button
                data-testid="button-see-workflow"
                onClick={() => scrollToSection("services")}
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-6 text-base font-semibold rounded-lg transition-colors duration-200"
              >
                See How DSX Works
              </Button>
              <Link href="/contact">
                <Button
                  data-testid="button-contact-hero"
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/20 text-white bg-transparent hover:bg-white/5 hover:border-white/40 px-7 py-6 text-base font-semibold rounded-lg transition-all duration-200 w-full sm:w-auto"
                >
                  Get a Free Workflow Audit
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 order-1 lg:order-2 w-full"
          >
            <SignalOrb />
            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-slate-500 font-mono-dsx">
                <span className="h-px w-8 bg-slate-700" />
                <span>Above the Cloud</span>
                <span className="text-orange-500">/</span>
                <span>Into the Business</span>
                <span className="h-px w-8 bg-slate-700" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
