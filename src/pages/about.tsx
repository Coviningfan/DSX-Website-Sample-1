import PrimaryCta from "@/components/primary-cta";

/** About copy is word-for-word from Web Mockup-5 slide 5. */

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-44 md:px-10">
        <div className="max-w-3xl">
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-[#191919] sm:text-5xl md:text-6xl">
            Serving Businesses Like Yours
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#191919]/68">
            For nearly 20 years DSX has helped small and medium businesses grow and prosper by applying technology wisely. We’ve grown from a small startup providing data services to an established business with clients across the United States.
          </p>
        </div>

        <div className="mt-14 max-w-3xl space-y-6 sm:mt-20">
          <p className="text-lg leading-relaxed text-[#191919]/68">
            We are not consultants. We don’t charge high fees. We’re not big company outsiders.
          </p>
          <p className="text-lg leading-relaxed text-[#191919]/68">
            We are a local team of experienced IT, communications, data, networking, and AI experts delivering cost-effective solutions that benefit our clients. And we live in, and are part of, your community, so when you succeed, we succeed.
          </p>
        </div>
      </section>

      <section className="surface-muted px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight text-[#191919] sm:text-4xl">
            Talk With an Expert Today
          </h2>
          <PrimaryCta className="shrink-0">BOOK A FREE CONSULTATION</PrimaryCta>
        </div>
      </section>
    </main>
  );
}
