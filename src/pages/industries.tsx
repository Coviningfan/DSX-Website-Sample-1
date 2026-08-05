import { useState } from "react";
import { ArrowRight, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const INDUSTRIES = [
  {
    name: "Automotive",
    bullets: [
      "Answer a call or text from an existing customer by name. Ask which vehicle they are calling about and what service they need.",
      "For a new customer, get their name, contact information, and vehicle info and add it to the shop's database.",
      "For a standard service — tune-up, oil change, brake job — quote a price if asked and book an appointment, updating the shop's schedule.",
      "For a problem, run a first-level diagnosis: ask the right questions, give a repair estimate with disclaimers, create a trouble ticket.",
      "Check inventory for likely parts, add them to the ticket, flag out-of-stock items for the parts manager.",
      "Take payment and update accounting.",
      "Change or cancel an appointment without a phone call.",
      "Remind a customer of an upcoming appointment the day before.",
      "Notify a customer that their parts arrived and schedule the install.",
      "Reach out when it's time for regular maintenance — tune-ups, oil changes, tire rotations.",
    ],
  },
  {
    name: "Construction",
    bullets: [
      "Answer a call from a subcontractor and confirm the schedule for next week's concrete pour, then text them the gate code.",
      "Take an incoming bid request: ask about the project scope, timeline, and plans available, then create a bid ticket and notify the estimator.",
      "Call a supplier to check on the ETA for steel rebar that's two days late and update the project manager by text.",
      "When a crew supervisor calls in sick, call down the backup list until someone confirms, then text the updated crew roster to the site lead.",
      "Answer a homeowner's question about the construction schedule and what to expect next week — pull the latest project timeline and walk them through it.",
      "Remind all subcontractors of the morning safety standup at 6:30 AM via group text.",
      "Log every communication into the project file — RFIs, change orders, submittals — with timestamps and searchable text.",
      "After hours, take an emergency call about a burst pipe on a completed job and dispatch the on-call plumber.",
    ],
  },
  {
    name: "Education",
    bullets: [
      "Answer a parent's call about enrollment requirements for their incoming kindergartner — walk them through the forms, required documents, and deadlines.",
      "Take an absence report: ask which student, which grade, the date, and the reason, then log it into the attendance system and notify the teacher.",
      "When a bus is running 20 minutes late, batch-call or text every parent on that route with the updated ETA.",
      "Handle school closure announcements: record the message once, send it to all families via phone, text, and email simultaneously.",
      "Schedule a parent-teacher conference based on the parent's availability and the teacher's open slots — confirm by text the day before.",
      "Answer questions about lunch menus, sports schedules, school board meeting dates, and testing calendars without tying up the front office.",
      "Notify parents when a student's lunch balance is low or when permission slips are overdue.",
      "During registration week, handle incoming calls about course selection, transfer credits, and immunization records — escalate only the exceptions.",
    ],
  },
  {
    name: "Financial Services",
    bullets: [
      "Answer a client calling about their account balance: verify their identity, pull the current balance and last three transactions, and read them aloud.",
      "Schedule an annual review meeting based on the client's preferred time and the advisor's calendar — send a confirmation email with a calendar invite.",
      "When a wire transfer is initiated, call the client to confirm the amount and destination using the voice-on-file verification protocol, then log the confirmation.",
      "Answer questions about statement line items: 'What was the charge from Merchant X on the 14th?' — pull the transaction detail and explain it.",
      "Handle a lost-card report: verify the cardholder, freeze the card, confirm the last legitimate transaction, and initiate a replacement card shipment.",
      "Notify clients when a CD is about to mature and present the renewal rate and current alternatives.",
      "Conduct outbound campaigns for tax-season reminders, required minimum distributions, and beneficiary review requests.",
      "Every interaction is logged with timestamps, caller verification steps, and a full transcript for compliance.",
    ],
  },
  {
    name: "Healthcare",
    bullets: [
      "Answer a patient calling to schedule an appointment: ask about their condition, check provider availability, and book based on urgency and preference.",
      "Call a patient the day before to confirm their appointment time and location, and ask them to bring their insurance card and medication list.",
      "When a patient needs to cancel, offer alternative times from the provider's schedule and reschedule in one conversation.",
      "Conduct a pre-visit interview: ask about current medications, recent symptoms, allergies, and family history — flag anything critical for the provider before the visit.",
      "Handle a prescription refill request: verify the patient, confirm the medication and dosage, check for refills remaining, and route to the prescriber for approval.",
      "Answer questions about lab results: 'Your A1C came back at 6.2 — that's within normal range. Dr. Chen added a note: keep doing what you're doing.'",
      "Call patients who are overdue for screenings — mammograms, colonoscopies, annual physicals — and offer to schedule.",
      "After hours, triage incoming calls using a symptom protocol: send non-urgent messages to the nurse line and escalate chest pain, stroke symptoms, or severe bleeding directly to the on-call provider.",
    ],
  },
  {
    name: "Hotels & Hospitality",
    bullets: [
      "Answer a guest calling to book a room: ask about dates, number of guests, bed preference, and any special requests, then check availability and confirm the reservation.",
      "When a guest calls about a late check-out, check the housekeeping schedule for that room and extend if available — or offer luggage storage and lobby access.",
      "Take a room service order: read the menu, note dietary restrictions, confirm the room number, and send the order to the kitchen with the guest's preferences flagged.",
      "Handle a maintenance issue: 'The AC in room 312 isn't cooling' — create a work order with priority, notify maintenance, and text the guest when it's resolved.",
      "Answer concierge questions: restaurant recommendations within walking distance, showtimes for the theater two blocks over, shuttle schedule to the airport.",
      "Process a wake-up call request: confirm the time and whether they want a follow-up call five minutes later.",
      "Call guests who checked out to thank them and invite them to leave a review — if they mentioned an issue, flag it for the manager before the review request goes out.",
      "During a sold-out weekend, manage the waitlist: when a cancellation comes in, call the first person on the list and give them 30 minutes to confirm before moving to the next.",
    ],
  },
  {
    name: "Manufacturing",
    bullets: [
      "Take an incoming order from a distributor: confirm SKUs, quantities, and pricing, check inventory availability, and create the sales order with a promised ship date.",
      "When a raw material shipment is delayed, call the supplier for the new ETA, update the production schedule, and notify the shift supervisor by text.",
      "Answer a customer's call about their order status: pull the order, confirm it's in production on line 3, and give them the expected ship date from the WIP tracker.",
      "Handle a quality complaint: ask for the lot number, document the issue with photos if the customer can text them, create a quality ticket, and notify QA.",
      "Call the freight carrier to confirm tomorrow's pickup window and send the dock schedule to the warehouse lead.",
      "When a machine goes down on second shift, call down the maintenance technician list until someone confirms they're on their way.",
      "Send production count updates to the plant manager at end of each shift — actual vs. planned, with reasons for any variance pulled from the line logs.",
      "Manage preventive maintenance reminders: 'Pump #4 on line 2 is due for its 90-day service on Thursday — confirm the maintenance window with the shift supervisor.'",
    ],
  },
  {
    name: "Nonprofit",
    bullets: [
      "Answer a donor calling to make a contribution: take their payment information, confirm the designation, send a receipt by email, and log the gift into the CRM.",
      "When a monthly donor's card expires, call to update the payment method before the next recurring gift is declined.",
      "Call lapsed donors from last year's annual campaign: remind them of the impact their gift made and ask if they'd like to renew at the same level.",
      "Handle event registration: 'How many seats would you like at the annual gala? Table of ten or individual tickets? Dietary restrictions for any guests?' — process the registration and send a confirmation.",
      "Answer questions from volunteers: upcoming opportunities, training requirements, background check status, and shift openings at the food bank on Saturday.",
      "Conduct an outbound campaign for Giving Tuesday: share a specific story about what $50, $100, or $500 makes possible and ask for a gift.",
      "Take a call from someone seeking services: ask screening questions based on your intake protocol, check eligibility, and schedule the first appointment or refer them to the right program.",
      "Send thank-you calls within 48 hours of every gift over $100 — not a recording, but a real conversation that mentions their name, their gift amount, and what it funds.",
    ],
  },
  {
    name: "Professional Services",
    bullets: [
      "Answer a prospective client calling about your firm: ask about their situation, explain which practice areas are relevant, and schedule a consultation with the right attorney or partner.",
      "When a client calls for a document status update, pull their matter file and tell them exactly where things stand — 'The filing was submitted Tuesday. Current processing time is 5–7 business days.'",
      "Handle conflict checks during intake: ask the standard questions, cross-reference the name against the database, and flag any potential conflicts before scheduling the consultation.",
      "Schedule a deposition: coordinate availability across three attorneys and a court reporter, book the conference room, and send calendar invites to all parties.",
      "Call clients with billing reminders: 'Your retainer balance is below the $2,000 threshold. Would you like to replenish now, or shall I send the trust account instructions by email?'",
      "Answer questions about your services, fee structures, and what to expect during the first consultation — without a partner spending 15 minutes on the phone.",
      "After hours, take an urgent call from a client who was just served: capture the details, identify the response deadline, and notify the assigned partner immediately.",
      "Every client communication is logged with timestamp, duration, and a summary added to the matter file.",
    ],
  },
  {
    name: "Real Estate",
    bullets: [
      "Answer a call from a buyer inquiring about a listing: confirm they're pre-qualified, ask about their timeline and must-haves, and schedule a showing with the listing agent.",
      "When a buyer texts 'What's the asking price for 124 Maple?', reply with the price, square footage, bed/bath count, and the next open house date.",
      "After a showing, call the buyer's agent to ask for feedback: 'Did your client have any questions? Are they interested in making an offer? What's their timeline?'",
      "Handle a showing coordination: when the seller requests a two-hour block, call the three agents who had showings scheduled and reschedule them into the remaining windows.",
      "Answer listing-pitch calls: ask about the property, explain your firm's commission structure, and schedule the listing consultation with the agent who covers that neighborhood.",
      "Notify all parties when a deadline is approaching: inspection contingency expiring in 48 hours, appraisal due Friday, closing scheduled for the 15th.",
      "Call past clients on the anniversary of their closing: ask how they're enjoying the home and whether they know anyone looking to buy or sell.",
      "After hours, take a call from a buyer who wants to make an offer before the morning: capture the terms, generate the offer letter, and send it to the listing agent with a flag for the seller to review by 8 AM.",
    ],
  },
  {
    name: "Retail",
    bullets: [
      "Answer a customer calling about their order: pull the order by number or email, tell them exactly where it is — 'In the warehouse, shipping label printed, expected to go out Thursday' — and offer to text them the tracking link.",
      "Take an incoming phone order: ask for the SKU or product name, confirm the price, check inventory at the nearest store, and process the order for pickup or delivery.",
      "Handle a return or exchange: ask what's wrong with the item, walk through the return policy, generate an RMA number, and email a prepaid return label.",
      "When a customer says a gift arrived damaged, apologize, ship a replacement immediately, and offer a discount code for their next purchase — no manager approval needed.",
      "Answer product questions: 'Does this jacket run large or true to size? Is the navy darker than it looks online? What's the inseam on the 32 waist?' — pull the size chart and product specs and give an honest answer.",
      "Notify customers when a wishlist item goes on sale or comes back in stock.",
      "Run an outbound campaign to customers who haven't purchased in 90 days: mention what they bought last time, tell them what's new in that category, and offer free shipping.",
      "After hours, take orders and answer questions while the store is closed — every sale captured, nothing left to voicemail.",
    ],
  },
  {
    name: "Transportation & Logistics",
    bullets: [
      "Answer a shipper's call for a rate quote: ask about the origin, destination, freight class, weight, and pickup window, then pull the rate from the pricing engine and give the quote verbally with a follow-up email.",
      "When a customer calls about a delayed shipment, pull the GPS tracking data from the carrier, explain the delay — 'Weather shut down I-80 near Truckee, driver is holding at the rest stop. New ETA is 4:30 PM' — and ask if that still works.",
      "Call a consignee the day before delivery to confirm their receiving hours, dock availability, and whether they need a liftgate or inside delivery.",
      "When a driver calls in a breakdown, log the location and issue, dispatch roadside assistance, and notify the shipper and consignee of the delay with the revised ETA.",
      "Handle a booking request: 'I need a full truckload from Reno to Phoenix, pickup Monday, delivery Thursday, hazmat class 3' — check carrier availability, confirm the rate, and book the load.",
      "Answer BOL and documentation questions from a new shipper: walk them through what's needed, confirm the shipment details, and send a pre-filled BOL template.",
      "After delivery, call the consignee for a satisfaction check: 'Did the shipment arrive in good condition? Was the driver on time? Anything we should know for next time?'",
      "Manage detention alerts: when a driver has been waiting at a dock for more than two hours, call the consignee's receiving manager to resolve the delay.",
    ],
  },
  {
    name: "Wholesale",
    bullets: [
      "Take an incoming order from a retailer: confirm their account number, walk through the order line by line, check stock availability in real time, and offer substitutes for any out-of-stock items.",
      "When a customer's usual item is on backorder, suggest the alternative SKU that's in stock, explain the minor difference, and offer a one-time discount on the substitute.",
      "Handle a pricing question: 'What's my tier pricing on SKU 4408 if I order 50 cases instead of 20?' — look up the customer's pricing tier and quote the per-unit and total.",
      "Answer a minimum-order question: confirm the customer's current order meets the $500 minimum, and if it doesn't, suggest add-on items that bring it over the threshold without padding.",
      "Call accounts that haven't ordered in 60 days: reference their last order, mention what's new in their category, and ask if they're ready to restock.",
      "Process a credit-return authorization: verify the original order number, confirm the reason for return, check the return window, and email the RMA form and return label.",
      "Notify all accounts in a region when a price increase takes effect next month: give them the old price, the new price, and the deadline to order at the current rate.",
      "After hours, take orders from West Coast accounts and East Coast accounts equally — the warehouse picks them up in the morning with no overnight delay.",
    ],
  },
  {
    name: "Municipalities",
    bullets: [
      "Answer a resident calling about their water bill: verify their account, explain the current charges, and walk through the tiered rate structure — including any conservation credits applied this month.",
      "Handle a building-permit inquiry: ask about the project type and scope, check zoning rules for that parcel, explain which permits are required, and email the application forms.",
      "When a resident reports a pothole on Elm Street, log the location, severity, and caller's description, create a work order, and text them the ticket number for tracking.",
      "Answer questions about trash pickup: 'Is this week recycling or yard waste? What time does the truck come through on Tuesdays? What's the bulk-pickup schedule?'",
      "Handle court-date reminders: call defendants the day before their appearance, confirm they know the courthouse location and time, and remind them what to bring.",
      "Manage public-meeting notices: batch-call or text every subscriber who signed up for Planning Commission alerts when the agenda is posted.",
      "Answer FOIA and public-records requests: confirm the request details, explain the processing timeline, collect the requester's contact information, and log the request into the tracking system.",
      "During a weather emergency, broadcast road-closure and shelter-location information to every number in the municipal alert database — simultaneously by phone, text, and email.",
    ],
  },
];

export default function IndustriesPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-44 pb-24 px-4 sm:px-6 md:px-10 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#0084FF] font-medium mb-4">
            Industries
          </p>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight text-[#191919]">
            How We Serve Your Business
          </h1>
          <p className="mt-6 text-lg text-[#191919]/60 leading-relaxed max-w-2xl">
            DSX Edge is customized to your individual business: your products, your workflows,
            your customers, your pricing. The examples below show some of the business activities
            we handle autonomously during business hours, so your staff can focus on the work
            that builds your business, and after hours, so you never miss an opportunity.
          </p>
        </div>
      </section>

      {/* Industry accordion */}
      <section className="py-12 px-4 sm:px-6 md:px-10 max-w-4xl mx-auto">
        <div className="space-y-3">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.name}
              className="rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F9F8F6] transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#191919]/30 font-medium w-6 text-right">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-lg text-[#191919]">{ind.name}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#191919]/40 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-6 pb-8 border-t border-gray-100">
                  <ul className="mt-6 space-y-3">
                    {ind.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-[#191919]/70 leading-relaxed">
                        <span className="text-[#0084FF] mt-1 shrink-0 select-none">&bull;</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 bg-[#F4F3F3] rounded-xl p-5">
                    {i === 0 ? (
                      <>
                        <p className="text-sm text-[#191919]/50 mb-1">Try it for yourself</p>
                        <a
                          href="tel:8443792886"
                          className="inline-flex items-center gap-2 font-semibold text-[#0084FF] hover:text-[#0066CC] transition-colors duration-200"
                        >
                          <Phone className="w-4 h-4" />
                          Call 844-DSX-AUTO (844-379-2886) and talk with Pete
                        </a>
                      </>
                    ) : (
                      <p className="text-sm text-[#191919]/60">
                        This industry demo line is being prepared for the client presentation.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 md:px-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-bold text-3xl sm:text-4xl leading-tight tracking-tight text-[#191919] mb-4">
            Improve your operations &amp; increase profits.
          </h2>
          <Link
            to="/about#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0084FF]/80 backdrop-blur-[2px] rounded-2xl hover:scale-[1.02] transition-transform duration-200"
            style={{ boxShadow: "inset 0px 4px 4px 0px rgba(255,255,255,0.35)" }}
          >
            Request A Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
