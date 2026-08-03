import { Link } from "wouter";
import { TrendingDown, BookOpen, HelpCircle } from "lucide-react";
import { getAllPosts } from "@/content/blog";
import Seo from "@/components/seo";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import ServicesSection from "@/components/services-section";
import ThreeCXSection from "@/components/threecx-section";
import AIFutureSection from "@/components/ai-future-section";
import FactsSection from "@/components/facts-section";
import AboutSection from "@/components/about-section";
import TestimonialsSection from "@/components/testimonials-section";
import PartnersSection from "@/components/partners-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { CASE_STUDIES } from "@shared/case-studies";

const CASE_ACCENTS = ["text-blue-600", "text-orange-600", "text-blue-600"] as const;
const caseStudies = CASE_STUDIES.map((c, i) => ({
  ...c,
  accent: CASE_ACCENTS[i] ?? "text-blue-600",
}));

function ProofRail() {
  const proofs = [
    { label: "Years deploying real systems", value: "12+", detail: "Since 2014" },
    { label: "3CX Partner tier", value: "Platinum", detail: "Highest tier" },
    { label: "Avg. cost reduction", value: "60%", detail: "vs. legacy PBX" },
    { label: "Uptime SLA", value: "99.9%", detail: "In writing" },
  ];

  return (
    <section className="border-y border-white/10 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {proofs.map((p) => (
            <div key={p.label} className="px-4 py-6 first:pl-0 last:pr-0 md:px-6 md:py-8">
              <div className="text-2xl md:text-3xl font-bold text-white font-mono-dsx tracking-tight">
                {p.value}
              </div>
              <div className="text-xs md:text-sm text-slate-400 mt-1 font-medium">
                {p.label}
              </div>
              <div className="text-xs text-slate-600 mt-0.5 font-mono-dsx">{p.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <Seo path="/" />
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <ProofRail />
        <ProblemSection />
        <ServicesSection />
        <ThreeCXSection />
        <AIFutureSection />
        <FactsSection />
        <AboutSection />
        <TestimonialsSection />

        <section id="case-studies" className="py-24 relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <p className="text-sm font-semibold tracking-wider uppercase text-orange-500 mb-3 font-mono-dsx">
                Case Studies
              </p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
                Real businesses. Real savings.
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl">
                The communications work that proved DSX is the right place to bring AI next.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <Link key={study.name} href={`/case-studies/${study.slug}`}>
                  <div
                    data-testid={`link-case-study-${study.slug}`}
                    className="group block h-full surface-raised rounded-lg p-8 hover:border-blue-500/40 transition-colors duration-200 cursor-pointer"
                  >
                    <div className={`text-3xl font-bold ${study.accent} mb-3 font-mono-dsx`}>
                      {study.savings}
                      <span className="text-sm text-slate-500 font-normal ml-1">saved</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {study.name}
                    </h3>
                    <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-slate-400 mb-3">
                      {study.size}
                    </span>
                    <p className="text-sm text-slate-400 mb-5">{study.description}</p>
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-white/5">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Monthly Cost</span>
                        <span className={`font-bold font-mono-dsx ${study.accent}`}>{study.monthlyCost}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-3">{study.note}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 group-hover:text-orange-400 transition-colors">
                      Read case study
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/case-studies">
                <span
                  data-testid="link-all-case-studies"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  See all case studies
                </span>
              </Link>
            </div>
          </div>
        </section>

        <section id="resources" className="py-24 bg-slate-950 border-t border-white/5 relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <p className="text-sm font-semibold tracking-wider uppercase text-blue-400 mb-3 font-mono-dsx">
                  Resources
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Learn how DSX Edge works in practice.
                </h2>
                <p className="mt-3 text-slate-400 max-w-2xl">
                  Articles, plain-language answers, and real customer case studies.
                </p>
              </div>
              <Link href="/resources">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-orange-400 transition-colors cursor-pointer">
                  Browse all resources
                </span>
              </Link>
            </div>

            {latestPosts.length > 0 && (
              <div className="grid md:grid-cols-3 gap-6">
                {latestPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`}>
                    <article
                      data-testid={`card-home-resource-${p.slug}`}
                      className="group h-full surface-raised rounded-lg p-6 flex flex-col cursor-pointer hover:border-blue-500/30 transition-colors duration-200"
                    >
                      <div className="text-xs uppercase tracking-wider text-blue-400 mb-3 font-mono-dsx">
                        {p.category}
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors line-clamp-3">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-400 line-clamp-3 flex-grow">
                        {p.description}
                      </p>
                      <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono-dsx">
                        <span>
                          {new Date(p.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span>{p.readTime}</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}

            <div className="mt-8 grid sm:grid-cols-3 gap-3">
              <Link href="/blog">
                <span className="flex items-center justify-between surface-raised rounded-lg p-4 cursor-pointer hover:border-blue-500/30 transition-colors">
                  <span className="flex items-center gap-2 text-sm text-white">
                    <BookOpen size={16} className="text-blue-400" /> Articles & field notes
                  </span>
                </span>
              </Link>
              <Link href="/faq">
                <span className="flex items-center justify-between surface-raised rounded-lg p-4 cursor-pointer hover:border-blue-500/30 transition-colors">
                  <span className="flex items-center gap-2 text-sm text-white">
                    <HelpCircle size={16} className="text-blue-400" /> Plain-language FAQ
                  </span>
                </span>
              </Link>
              <Link href="/case-studies">
                <span className="flex items-center justify-between surface-raised rounded-lg p-4 cursor-pointer hover:border-blue-500/30 transition-colors">
                  <span className="flex items-center gap-2 text-sm text-white">
                    <TrendingDown size={16} className="text-blue-400" /> Customer case studies
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </section>

        <PartnersSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
