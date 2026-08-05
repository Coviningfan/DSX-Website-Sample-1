# DSX Edge PPTX-to-Website Specification Audit

**Audit date:** August 5, 2026  
**Specification baseline:** `Web Mockup-5-7cdeccbb849e.pptx` (five slides)  
**Visual cross-check:** `Web Mockup-5-e8123125e25d.PDF`  
**Website reviewed:** `https://dsx-sample-coviningfan.zocomputer.io`  
**Original code baseline:** `feat/refine-signal-orb` at `a25d333`  
**Remediation branch:** `feat/client-presentation-readiness`

## Remediation Status

The presentation-readiness branch now resolves the two functional blockers and the highest-risk content issues:

- Contact submissions are validated and recorded before the site shows success.
- Automotive dials the confirmed `844-379-2886`; unconfirmed industry numbers and voice names are no longer presented.
- The Home page restores the missed-opportunity story, concrete conversation examples, and the full-platform explanation.
- The unsupported 15% productivity claim and placeholder Trusted By brands are removed.
- Approved About positioning and a distinct Contact path are restored.
- Direct Contact links scroll to the intake form.

The remaining client decisions are the approved calendar URL, the final industry demo numbers and voices, the approved customer/logo list, and whether the 50%/65% productivity claims have sources suitable for publication. These are intentionally not invented in the preview.

## Executive Summary

The website correctly implements the PPTX's five-page architecture and retains most of the Features, Industries, Pricing, and About/Contact subject matter. It is not yet faithful enough to treat as a finished implementation of the content-and-flow specification.

The main problems are:

1. **Industry demo links dial invalid numbers.** The implementation concatenates digits from the vanity label and numeric number, producing values such as `8448443792` instead of `8443792886`.
2. **The contact form does not submit data.** It immediately displays a success message without sending, storing, or forwarding the inquiry.
3. **Consultation CTAs do not book a consultation.** They route to `/about`; none links to Joe's calendar or implements the PPTX's booking-to-intake funnel.
4. **Home omits major Slide 1 persuasion and education blocks.** The missing material includes “Never Miss Another Opportunity,” both conversational examples, the complete “Easiest Way” explanation, the missed-profit narrative, and the 50% productivity argument.
5. **Several claims and phone numbers appear to have been invented during implementation.** These need owner verification before publication.

The current site is strongest as a visual prototype. It is not ready as a lead-capture or demo-conversion website until the two functional blockers and consultation funnel are corrected.

## Priority Findings

| Severity | Finding | Evidence | Required outcome |
|---|---|---|---|
| **Blocker** | Industry demo call links dial the wrong number | `industries.tsx` strips all non-digits from strings such as `844-DSX-AUTO (844-379-2886)` and keeps the first ten digits, yielding `8448443792` | Store a separate numeric `tel` value and verify every link |
| **Blocker** | Contact form provides false success feedback | `handleSubmit` only calls `setSubmitted(true)` | Deliver inquiries to an approved endpoint and show success only after confirmation |
| **Major** | Calendar funnel is absent | All “Book A Free Consultation” CTAs route to `/about` | Link to Joe's approved calendar, then collect/forward the requested intake data |
| **Major** | Slide 1's central lost-opportunity story is absent | No “Never Miss Another Opportunity” or missed-profit narrative on Home | Restore the approved problem framing and its place in the flow |
| **Major** | Slide 1's conversational proof is reduced to a generic Mary CTA | The two detailed appointment/service dialogues are absent | Restore the approved concrete conversation examples before the demo CTA |
| **Major** | Slide 1's AI/productivity education is incomplete | “The Easiest Way…” and “Increase Productivity By 50% or More” sections are absent | Restore the platform explanation and productivity narrative |
| **Major** | Home has no Trusted By section | Slide 1 requires one; current Home ends without it | Add only after Joe supplies an approved logo list |
| **Major** | Pricing includes an unsupported 15% productivity claim | Pricing shows “15% Typical productivity gain”; PPTX says 50%+ and cites routine work consuming up to 65% | Remove or replace with an approved, sourced claim |
| **Major** | Non-Automotive demo numbers and voices are unverified | PPTX says to obtain numbers from Joe; current code supplies 13 additional numbers and named voices | Treat all except Automotive as placeholders until approved |
| **Major** | About-page story materially changes the approved positioning | The “not consultants / local experts / community” language is mostly replaced | Restore the approved differentiators or explicitly approve the rewrite |
| **Minor** | Global navigation omits a distinct Contact item | PPTX shows Features, Industries, Pricing, About, Contact | Add Contact or explicitly approve “Book A Demo” as its replacement |
| **Minor** | Industry list differs from Slide 3 | Site omits separate Logistics and adds Municipalities; Transportation is combined with Logistics | Reconcile the final taxonomy with the latest approved list |
| **Minor** | Features condenses some operational details | Shipping omits explicit COD/prepaid collection, damage/loss complaints, and weather details | Restore details if the PPTX is intended as exact copy, not only scope |
| **Minor** | Industry Trusted By uses text placeholders | Slide 3 calls for a different real logo set | Replace after Joe supplies approved brands and assets |

## Slide 1 — Home

### Correctly represented

- “Every Department, Every Function, 24/7.” hero headline.
- “Business Communications That Drive Profit.”
- Approved tunnel image as the hero background.
- Live demo number and Mary reference.
- Turnkey AI concept with “You just use it.”
- Department coverage.
- Five PPTX industry workflow examples plus Hotels/Hospitality.
- Industries cross-link.
- Tailored-to-business positioning.
- SignalOrb explanation of Communications, Intelligence, and Infrastructure; this is an approved site enhancement even though it is not specified in the PPTX.

### Missing or materially changed

- The crawling industry list is replaced by a later static industry cross-link.
- “Never Miss Another Opportunity” is missing.
- The after-hours missed-opportunity explanation is missing.
- Both detailed conversational examples are missing.
- “Natural, conversational voice indistinguishable from a live person in the caller's language” is missing.
- “The Easiest Way for Your Business to Benefit From AI” and its complete multi-channel platform explanation are missing.
- The full “Every missed call is profit that disappears” sequence is missing.
- “Increase Productivity By 50% or More,” the 65% routine-task premise, and the related business-hours explanation are missing.
- “Pick up phone and delegate” is missing.
- Trusted By is missing.
- The calendar/intake funnel is not implemented.

**Assessment:** **Major gap.** The page has the approved subject matter but not the complete Slide 1 persuasion sequence.

## Slide 2 — Features

### Correctly represented

- Core platform headline and multi-channel positioning.
- Sales, Marketing, Customer Service, Shipping & Returns, and Management.
- Communications section.
- Microsoft 365, Google Workspace, WhatsApp, text, video, and live chat.
- Most named use cases under each department.

### Missing or condensed

- Sales does not explicitly state schedule/reschedule/cancel without using sales time.
- Shipping & Returns condenses explicit complaints, weather notices, COD/prepaid fee collection, and several notification details.
- Consultation CTA routes to `/about`, not the approved calendar/intake flow.

**Assessment:** **Strong alignment with minor copy compression and one major funnel gap.**

## Slide 3 — Industries

### Correctly represented

- “How We Serve Your Business.”
- Accordion-based industry presentation.
- Robust business-specific scenarios.
- Male and female voice names.
- Automotive number and Pete demonstration.
- Consultation CTA and Trusted By placement.

### Defects and unresolved inputs

- All displayed demo-call links are technically malformed because the `tel:` value is derived incorrectly.
- The PPTX explicitly marks non-Automotive phone numbers as pending Joe's input; the site publishes generated numbers as if confirmed.
- The source contains generated industry models rather than verified copy from the referenced “Industry Page Dropdown Text” document.
- Taxonomy differs: Slide 3 lists Logistics separately, while the website combines Transportation & Logistics and adds Municipalities.
- Trusted By contains text placeholders rather than approved logos.
- Consultation CTA does not open the calendar/intake flow.

**Assessment:** **Content-rich but not production-safe until phone numbers, links, taxonomy, and source copy are verified.**

## Slide 4 — Pricing

### Correctly represented

- Descriptive pricing rather than SaaS tiers.
- Concurrent-call-capacity model.
- No per-user pricing.
- Three capacity inputs: business type, people/locations, and usage profile.
- AI customization/training at `$300–$1,000`.
- AI compute/storage at `15%–20%` of telephone service.
- Less-than-current-phone-service framing.
- ROI and staff-equivalent framing.

### Problems

- “15% Typical productivity gain” is not in the PPTX and conflicts with the PPTX's “50% or more” headline.
- “$0 per user,” “24/7,” and “<1 week” metric cards make the page feel more like fixed claims than the descriptive specification; only the break-even argument is grounded in the slide.
- Consultation CTA does not implement booking.

**Assessment:** **Close alignment, with one unsupported claim that should be removed before client review.**

## Slide 5 — About and Contact

### Correctly represented

- “Serving Businesses Like Yours.”
- Nearly 20 years of experience.
- Local/Northern Nevada positioning and nationwide service.
- Contact fields: name, company, email, phone, message, industry, employee count, day, and time.
- Info, sales, and support email addresses plus the phone number.

### Missing or materially changed

- The approved “We are not consultants / not high-fee outsiders” language is omitted.
- The community-alignment paragraph is omitted.
- “Talk With an Expert Today” is not used as the contact transition.
- Best day and time are free-text fields rather than the requested calendar/time-selection experience.
- The form sends nothing but still promises a response within one business day.
- The consultation CTA does not link to a calendar.

**Assessment:** **Visually complete but functionally blocked and less faithful to the approved positioning.**

## Global Design and Experience Review

### Working well

- Clear five-page information architecture.
- Consistent DSX logo, typography, spacing, and blue-led palette.
- Strong responsive page structure with no obvious horizontal overflow in the reviewed public pages.
- SignalOrb has purposeful animation, keyboard focus zones, Pause/Resume, reduced-motion support, and offscreen pausing.
- Page hierarchy is clear and generally readable.

### Needs attention

- The site is very long and card-heavy on Home and Features; several sections read as repeated white/gray blocks rather than a deliberate narrative progression.
- Many CTAs use the same visual and destination despite representing different intents: demo call, consultation, industry exploration, and contact.
- Repeated hard-coded colors make brand changes harder and weaken token consistency.
- The production JavaScript bundle remains roughly 1.19 MB minified; Three.js should be isolated or lazy-loaded if performance becomes a concern.
- Several motion and hover treatments are visually subtle, but motion is not the current conversion blocker. Lead capture and accurate demo dialing come first.

## Recommended Correction Order

1. **Repair all industry telephone links and verify every published demo number.**
2. **Implement a real contact submission endpoint with failure handling.**
3. **Obtain Joe's calendar URL and implement the booking-to-intake funnel.**
4. **Restore the missing Slide 1 persuasion sequence without changing the approved hero or orb.**
5. **Remove the unsupported 15% productivity metric.**
6. **Reconcile industry taxonomy and validate dropdown copy against the referenced source document.**
7. **Restore the approved About positioning.**
8. **Add real Trusted By logos only after written approval.**
9. **Perform a final responsive/accessibility review and production build.**

## Inputs Still Required From Joe

- Approved calendar booking URL.
- Confirmed demo phone number and voice/persona for every industry except Automotive.
- Final industry taxonomy, including whether Logistics and Municipalities are separate.
- “Industry Page Dropdown Text” source document or approval of the generated industry scenarios.
- Approved Home and Industries Trusted By logo lists and assets.
- Confirmation that `info@dsxedge.com`, `sales@dsxedge.com`, and `support@dsxedge.com` are active and monitored.
- Approved destination for contact-form submissions.

## Audit Boundary

The PPTX explicitly says it is a content-and-flow mockup, not a visual design. This audit therefore treats layout and styling differences as acceptable unless they obscure, omit, contradict, or break the specified content and conversion flow. No website files were changed during this review.
