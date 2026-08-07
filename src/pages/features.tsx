import PrimaryCta from "@/components/primary-cta";

/** Features copy is word-for-word from Web Mockup-5 slide 2 (including DSXEdge). */

const COMMUNICATIONS = [
  "Never miss a call or text whether in the office, in the field or after hours",
  "Talk, chat, text, or video conference with customers from wherever you are",
  "Get voicemails as emailed transcriptions",
  "Work From Anywhere - All your devices are part of your DSXEdge phone service: one integrated system with a full suite of business class features.",
];

const DEPARTMENTS: { title: string; items: string[] }[] = [
  {
    title: "Sales",
    items: [
      "Take orders 24/7",
      "Inbound lead qualification based on your rules",
      "Call handover to a sales rep",
      "Schedule/reschedule/cancel appointments without taking sales time",
      "Offer options or upgrades based on the customer’s order history",
      "Outbound prospecting campaigns",
    ],
  },
  {
    title: "Marketing",
    items: [
      "Reengagement campaigns to dormant customers",
      "Event/promotion invitations to launches, webinars, sales events, VIP events",
      "Personalized anniversary/birthday calls",
      "Run loyalty programs – explain benefits, enroll customers, notify about points and rewards",
      "Do surveys and feedback collection",
      "Generate referrals",
      "Drive inbound calls by integrating with Google Ads, Facebook, Instagram, …",
    ],
  },
  {
    title: "Customer Service",
    items: [
      "Engage with the caller to understand why they are calling and route them depending on their issue",
      "Automatically answer most common inquiries such as order status, account balance, payment information, shipping information, backorder status, …",
      "Call handover to a customer service rep",
      "Handle payments, refunds, returns, exchanges",
      "Guide customers through technical issues, basic troubleshooting, …",
      "Verify/update customer information",
    ],
  },
  {
    title: "Shipping & Returns",
    items: [
      "Provide order status, tracking information, order ETA, shipping delay information, …",
      "Manage delivery time window",
      "Address common complaints such as damages, late delivery, lost packages",
      "Provide proof of delivery",
      "Notify customer of shipment details, delays, weather issues",
      "Conduct a post-delivery satisfaction survey",
      "Remind customers about a pending pickup or expiring return window",
      "Collect shipping fee (COD or Prepaid)",
      "For returns, query the customer and based on the replies provide an RMA number and email a return shipping label, or pass to a customer service agent",
    ],
  },
  {
    title: "Management",
    items: [
      "Personal Assistant that handles call screening, message taking, and call routing to others based on rules you set, reducing interruptions and protecting management time while maintaining a professional experience and ensuring that critical communications are never lost.",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden bg-white">
      <section className="px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-44 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-[#114CA8] sm:text-base">
            Power Your Business
          </p>
          <h1 className="mt-4 max-w-5xl text-balance text-4xl font-bold leading-[1.04] tracking-[-0.03em] text-[#191919] sm:text-5xl md:text-6xl">
            The Industry’s Most Advanced Business Communications Platform
          </h1>
          <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-[#191919]/68">
            <p>
              Your customers communicate in many different ways and DSXEdge supports all of them. From its industry-leading telephone service to text, video, live chat, WhatsApp, and integrations with MS 365, Google Workspace, and other 3rd -party platforms.
            </p>
            <p className="text-xl font-semibold text-[#191919]">DSXEdge empowers your entire business!</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#191919]/10 surface-muted px-4 py-16 sm:px-6 sm:py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start lg:gap-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-[#191919] sm:text-4xl">
              Communications
            </h2>
            <ul className="features-mockup-list">
              {COMMUNICATIONS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-[#191919] sm:text-4xl md:text-[2.75rem] md:leading-tight">
            AI-Powered Business Support For Every Department
          </h2>
          <div className="mt-12 space-y-0 border-t border-[#191919]/12">
            {DEPARTMENTS.map((dept, index) => (
              <article
                key={dept.title}
                className={`features-dept-row grid gap-6 border-b border-[#191919]/12 py-10 sm:py-12 md:grid-cols-[minmax(10rem,0.35fr)_minmax(0,1fr)] md:gap-12 ${
                  index % 2 === 1 ? "features-dept-row-alt" : ""
                }`}
              >
                <h3 className="font-display text-2xl font-bold tracking-tight text-[#191919] sm:text-3xl">
                  {dept.title}
                </h3>
                <ul className="features-mockup-list">
                  {dept.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-muted px-4 py-20 text-[#191919] sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Increases Productivity and Customer Satisfaction
          </h2>
          <PrimaryCta className="shrink-0">BOOK A FREE CONSULTATION</PrimaryCta>
        </div>
      </section>
    </main>
  );
}
