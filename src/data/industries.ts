/** Mockup-aligned industry lists (Web Mockup-5). */

/** Home page industry crawl fragment list from mockup. */
export const HOME_CRAWL_INDUSTRIES = [
  "Automotive",
  "Insurance",
  "Real Estate",
  "HVAC",
  "Plumbing",
  "Legal",
  "Construction",
  "Hotel",
  "Medical",
  "Retail",
  "Nonprofit",
] as const;

/** Industries page accordion names (mockup uppercase labels). */
export const INDUSTRIES = [
  "AUTOMOTIVE",
  "CONSTRUCTION",
  "EDUCATION",
  "FINANCIAL SERVICES",
  "HEALTHCARE",
  "HOTELS",
  "LOGISTICS",
  "MUNICIPALITIES",
  "MANUFACTURING",
  "NONPROFIT",
  "PROFESSIONAL SERVICES",
  "REAL ESTATE",
  "RETAIL",
  "TRANSPORTATION",
  "WHOLESALE",
] as const;

export type Industry = (typeof INDUSTRIES)[number];

/** Contact form options (title case + Other). */
export const INDUSTRY_FORM_OPTIONS = [
  "Automotive",
  "Construction",
  "Education",
  "Financial Services",
  "Healthcare",
  "Hotels",
  "Logistics",
  "Municipalities",
  "Manufacturing",
  "Nonprofit",
  "Professional Services",
  "Real Estate",
  "Retail",
  "Transportation",
  "Wholesale",
  "Other",
] as const;

/** Word-for-word Automotive activities from mockup. */
export const AUTOMOTIVE_ACTIVITIES = [
  "Answer a call/text from an existing customer by name. Ask which vehicle they are calling about and what service need or problem they are having.",
  "For a new customer, get their name, contact information, and vehicle information and add it to the shop’s database.",
  "For a standard service, like a tune up or oil change, quote a price if asked and book an appointment and update the shop’s schedule.",
  "For a problem they are having, ask questions for a 1st level diagnosis, give a repair estimate with disclaimers, create a trouble ticket, check inventory for likely parts needed and add to ticket, notify parts manager of parts not in stock, add parts to order list for confirmation by parts manager, based on estimated parts arrival book an appointment and update the shop’s schedule.",
  "Take a payment and update your accounting.",
  "Change or cancel an appointment.",
  "Remind a customer of an upcoming appointment.",
  "Notify a customer that their parts are in and schedule an appointment.",
  "Notify a customer that it is time for a tuneup/oil change, …",
] as const;

export const INDUSTRY_DETAILS: Partial<
  Record<
    Industry,
    {
      activities: readonly string[];
      demo?: { label: string; tel: string };
    }
  >
> = {
  AUTOMOTIVE: {
    activities: AUTOMOTIVE_ACTIVITIES,
    demo: {
      label: "Try It for Yourself – call 844-DSX-AUTO (844-379-2886) and talk with Pete",
      tel: "8443792886",
    },
  },
};
