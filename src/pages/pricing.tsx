import { Check } from "lucide-react";
import PrimaryCta from "@/components/primary-cta";

export default function PricingPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-white">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">Pricing</p>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-[#191919] sm:text-5xl md:text-6xl">Power Your Business</h1>
        <p className="mt-5 text-balance text-2xl font-bold text-[#FC5104FA] sm:text-3xl">Major Features • Minor Price • Great ROI</p>
        <div className="mt-10 max-w-3xl border-l-4 border-[#114CA8] pl-6 sm:pl-8">
          <p className="text-2xl font-semibold leading-snug text-[#191919]">Improving your business with DSX Edge does not cost thousands of dollars.</p>
          <p className="mt-5 text-lg leading-relaxed text-[#191919]/68">
            Why? Because we use our own AI tools to do most of the customization and training for your specific company, which saves hundreds of man-hours. And we pass those savings on to you.
          </p>
        </div>
      </section>

      <section className="surface-muted px-4 py-20 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">High ROI</p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-[#191919] sm:text-5xl">Maximize Your Communications Spend</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-[#191919]/68">
              A focused investment to add DSX Edge to your business is designed to pay for itself quickly—with one sale you would have missed, or through higher staff productivity when people stop spending time on repetitive, low-value tasks.
            </p>
            <p className="mt-5 text-2xl font-bold text-[#FC5104FA]">Everything after that is pure profit!</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold tracking-tight text-[#191919] sm:text-5xl">Pricing</h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <article className="border-t-4 border-[#114CA8] pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">Telephone Service</p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-[#191919]">We Never Charge Per User!</h3>
              <p className="mt-5 leading-relaxed text-[#191919]/68">
                Telephone Service is priced based on the concurrent call capacity you need and how you use your phones, not on the number of people, extensions, or “lines” — we never charge per user.
              </p>
              <p className="mt-6 font-semibold text-[#191919]">We calculate your capacity requirement by looking at:</p>
              <ul className="mt-4 space-y-4">
                {[
                  "What your company does — are you a sales organization that is phone intensive, or a manufacturer that is a light phone user",
                  "The number of people you have — not only at your main location, but also in any other locations around the country or world",
                  "Your usage profile — how your phones are used, for what, and how often",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-[#191919]/68">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#FC5104FA]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-relaxed text-[#191919]/68">
                This lets us configure the size of the system you need and estimate the number of concurrent calls you’re likely to require—the critical variable, and the reason we never use simple per-user pricing that always results in higher cost.
              </p>
            </article>

            <article className="border-t-4 border-[#FC5104FA] pt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FC5104FA]">AI Services</p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-[#191919]">Two cost components</h3>
              <div className="mt-7 space-y-8">
                <div>
                  <p className="font-semibold text-[#191919]">Customization and training</p>
                  <p className="mt-2 text-3xl font-bold text-[#FC5104FA]">$300 to $1,000</p>
                  <p className="mt-3 leading-relaxed text-[#191919]/68">
                    Customization and training to match AI agents to your business, generally $300 to $1,000 depending on which and how many business functions you automate.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#191919]">Monthly computing and storage</p>
                  <p className="mt-2 text-3xl font-bold text-[#FC5104FA]">15% to 20%</p>
                  <p className="mt-3 leading-relaxed text-[#191919]/68">
                    Small monthly computing and storage cost for AI processing and data storage, generally 15% to 20% of your telephone service charge.
                  </p>
                </div>
              </div>
              <p className="mt-7 border-l-2 border-[#FC5104FA] pl-5 font-semibold leading-relaxed text-[#191919]">
                Together these charges are almost always less than you are paying for your current telephone service alone.
              </p>
            </article>
          </div>
          <p className="mt-14 max-w-4xl text-lg leading-relaxed text-[#191919]/68">
            Adding DSX Edge to your business is equivalent to adding staff capacity, but at a fraction of the cost and without the overhead of paid time off, overtime, or benefits. And it makes your current staff more productive by offloading repetitive tasks.
          </p>
        </div>
      </section>

      <section className="surface-muted px-4 py-20 text-[#191919] sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">Major Features • Minor Price • Great ROI</h2>
          <PrimaryCta className="shrink-0" />
        </div>
      </section>
    </main>
  );
}
