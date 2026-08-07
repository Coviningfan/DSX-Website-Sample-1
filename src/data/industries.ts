/** Canonical industry list for crawl, Industries page, and contact form. */
export const INDUSTRIES = [
  "Automotive",
  "Construction",
  "Education",
  "Financial Services",
  "Healthcare",
  "Hotels & Hospitality",
  "HVAC",
  "Insurance",
  "Legal",
  "Logistics",
  "Manufacturing",
  "Municipalities",
  "Nonprofit",
  "Plumbing",
  "Professional Services",
  "Real Estate",
  "Retail",
  "Transportation",
  "Wholesale",
] as const;

export type Industry = (typeof INDUSTRIES)[number];

/** Contact form options include an explicit Other path. */
export const INDUSTRY_FORM_OPTIONS = [...INDUSTRIES, "Other"] as const;

export const AUTOMOTIVE_ACTIVITIES = [
  "Answer a call or text from an existing customer by name. Ask which vehicle they are calling about and what service need or problem they are having.",
  "For a new customer, get their name, contact information, and vehicle information and add it to the shop’s database.",
  "For a standard service, like a tune up or oil change, quote a price if asked and book an appointment and update the shop’s schedule.",
  "For a problem they are having, ask questions for a first-level diagnosis, give a repair estimate with disclaimers, create a trouble ticket, check inventory for likely parts needed and add them to the ticket, notify the parts manager of parts not in stock, add parts to the order list for confirmation by the parts manager, and—based on estimated parts arrival—book an appointment and update the shop’s schedule.",
  "Take a payment and update your accounting.",
  "Change or cancel an appointment.",
  "Remind a customer of an upcoming appointment.",
  "Notify a customer that their parts are in and schedule an appointment.",
  "Notify a customer that it is time for a tuneup or oil change.",
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
  Automotive: {
    activities: AUTOMOTIVE_ACTIVITIES,
    demo: {
      label: "Try It for Yourself — call 844-DSX-AUTO (844-379-2886) and talk with Pete",
      tel: "8443792886",
    },
  },
};
