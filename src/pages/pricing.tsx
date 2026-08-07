import { Check } from "lucide-react";
import PrimaryCta from "@/components/primary-cta";

/** Pricing copy is word-for-word from Web Mockup-5 slide 4 (including DSXEdge). */

export default function PricingPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-white">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44 md:px-10">
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-[#191919] sm:text-5xl md:text-6xl">
          Power Your Business
        </h1>
        <p className="mt-5 text-balance text-2xl font-bold text-[#FC5104FA] sm:text-3xl">
          Major Features • Minor Price • Great ROI
        </p>
        <div className="mt-10 max-w-3xl border-l-4 border-[#114CA8] pl-6 sm:pl-8">
          <p className="text-2xl font-semibold leading-snug text-[#191919]">
            Improving your business with DSXEdge AI
            <br />
            Does Not Cost Thousands of Dollars.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#191919]/68">
            Why? Because we use our own AI tools to do most of the customization and training for your specific company which saves hundreds of man-hours and hundreds of dollars. And we pass those savings on to you.
          </p>
        </div>
      </section>

      <section className="surface-muted px-4 py-20 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-balance text-4xl font-bold tracking-tight text-[#191919] sm:text-5xl">High ROI</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-[#191919]/68">
              A minimal investment to add DSXEdge AI to your business typically pays for itself in less than a week with just one sale you would have missed or your staff’s increased productivity because they are not spending time on repetitive, low-value tasks.
            </p>
            <p className="mt-5 text-2xl font-bold text-[#FC5104FA]">Everything after that is pure profit!</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="max-w-4xl text-lg leading-relaxed text-[#191919]/68">
            Adding DSXEdge AI to your business is equivalent to adding staff, but at a fraction of the cost and without the overhead of paid time off, overtime, or benefits. And it makes your current staff more productive by offloading repetitive tasks.
          </p>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold tracking-tight text-[#191919] sm:text-5xl">Pricing</h2>
          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <article className="border-t-4 border-[#114CA8] pt-7">
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-[#191919]">Telephone Service</h3>
              <p className="mt-5 leading-relaxed text-[#191919]/68">
                Telephone Service is priced based on the concurrent call capacity you need and how you use your phones, not on the number of people, extensions or “lines” – We Never Charge Per User!
              </p>
              <p className="mt-6 font-semibold text-[#191919]">We calculate your capacity requirement by looking at:</p>
              <ul className="mt-4 space-y-4">
                {[
                  "What your company does - are you a sales organization that is phone intensive, or a manufacturer that is a light phone user",
                  "The number of people you have - not only the people in your main location, but also in any other locations around the country or even around the world",
                  "Your usage profile - how are your phones used, for what, and how often.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-[#191919]/68">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#FC5104FA]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 leading-relaxed text-[#191919]/68">
                This let’s us configure the size of the system you need and also estimate the number of concurrent calls you’re likely to require, which is the critical variable and the reason why we never use simpleminded schemes like charging per user/seat which always results in higher pricing.
              </p>
            </article>

            <article className="border-t-4 border-[#FC5104FA] pt-7">
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-[#191919]">AI Services</h3>
              <p className="mt-5 font-semibold text-[#191919]">AI Services have two cost components:</p>
              <div className="mt-7 space-y-8">
                <div>
                  <p className="mt-2 text-3xl font-bold text-[#FC5104FA]">$300 to $1000</p>
                  <p className="mt-3 leading-relaxed text-[#191919]/68">
                    Customization and training costs to perfectly match the AI agents to your business, generally $300 to $1000 depending on which and how many business functions you automate
                  </p>
                </div>
                <div>
                  <p className="mt-2 text-3xl font-bold text-[#FC5104FA]">15% to 20%</p>
                  <p className="mt-3 leading-relaxed text-[#191919]/68">
                    Small monthly computing and storage cost that covers the AI processing and data storage, which generally comes out to 15% to 20% of your telephone service charge.
                  </p>
                </div>
              </div>
              <p className="mt-7 border-l-2 border-[#FC5104FA] pl-5 font-semibold leading-relaxed text-[#191919]">
                Together these charges are almost always less than you are paying for your current telephone service alone.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="surface-muted px-4 py-20 text-[#191919] sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Maximize Your Communications Spend
          </h2>
          <PrimaryCta className="shrink-0">BOOK A FREE CONSULTATION</PrimaryCta>
        </div>
      </section>
    </main>
  );
}
