import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/lib/types";

function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group border border-border bg-background rounded-md overflow-hidden hover:border-primary/30 transition-colors"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-accent">{study.category}</span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {study.location}
          </span>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {study.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {study.excerpt}
        </p>
        <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-border">
          {study.results.map((result) => (
            <div key={result.label}>
              <div className="font-mono text-lg font-semibold text-primary">
                {result.metric}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5 leading-tight">
                {result.label}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          Read full case study
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.article>
  );
}

export default function CaseStudiesSection() {
  const featured = caseStudies.filter((s) => s.featured);
  const others = caseStudies.filter((s) => !s.featured);

  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Real operations. Measurable results.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Every case study includes the problem, the solution, and the numbers
            that matter. No stock photography, no marketing fluff.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featured.map((study, i) => (
            <CaseCard key={study.id} study={study} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((study, i) => (
            <CaseCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
