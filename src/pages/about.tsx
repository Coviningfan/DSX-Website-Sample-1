import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PrimaryCta from "@/components/primary-cta";

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-44 md:px-10">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FC5104FA]">About DSX Edge</p>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-[#191919] sm:text-5xl md:text-6xl">
            Serving Businesses Like Yours
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#191919]/60">
            For nearly 20 years DSX has helped small and medium businesses grow and prosper by applying technology wisely. We’ve grown from a small startup providing data services to an established business with clients across the United States.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:mt-20 md:grid-cols-3">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#114CA8]" aria-hidden="true" />
              <div>
                <p className="font-medium text-[#191919]">Reno, Nevada</p>
                <p className="text-sm text-[#191919]/60">Serving businesses nationwide</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#114CA8]" aria-hidden="true" />
              <div>
                <a
                  href="tel:7756249424"
                  className="font-medium text-[#191919] hover:text-[#FC5104FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114CA8]"
                >
                  775-624-9424
                </a>
                <p className="text-sm text-[#191919]/60">Available 24/7 for customers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#114CA8]" aria-hidden="true" />
              <div className="space-y-1">
                <a
                  href="mailto:info@dsxedge.com"
                  className="block font-medium text-[#191919] hover:text-[#FC5104FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114CA8]"
                >
                  info@dsxedge.com
                </a>
                <a
                  href="mailto:sales@dsxedge.com"
                  className="block text-sm text-[#191919]/60 hover:text-[#FC5104FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114CA8]"
                >
                  Sales: sales@dsxedge.com
                </a>
                <a
                  href="mailto:support@dsxedge.com"
                  className="block text-sm text-[#191919]/60 hover:text-[#FC5104FA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#114CA8]"
                >
                  Support: support@dsxedge.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#114CA8]" aria-hidden="true" />
              <div>
                <p className="font-medium text-[#191919]">We&rsquo;re always on</p>
                <p className="text-sm text-[#191919]/60">Your business never sleeps. Neither do we.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-2xl bg-[#f6f8fa] p-8 md:p-10">
              <p className="mb-8 text-lg leading-relaxed text-[#191919]/60">
                We are not consultants. We don’t charge high fees. We’re not big company outsiders.
              </p>
              <p className="text-lg leading-relaxed text-[#191919]/60">
                We are a local team of experienced IT, communications, data, networking, and AI experts delivering cost-effective solutions that benefit our clients. And we live in, and are part of, your community, so when you succeed, we succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="surface-muted px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FC5104FA]">Start a Conversation</p>
            <h2 className="mt-3 max-w-2xl text-balance text-3xl font-bold tracking-tight text-[#191919] sm:text-4xl">
              See where DSX Edge fits your business.
            </h2>
          </div>
          <PrimaryCta className="shrink-0" />
        </div>
      </section>
    </main>
  );
}
