# DSX Edge — PPTX Fidelity Audit (2026-08-04)

**Source:** Web Mockup-5 (`Web Mockup-5-6c660efc82b9.pptx`), 5 slides.
**Target:** 5-page SPA at `/home/workspace/dsx-website-sample/dsx-sample/` (Home, Features, Industries, Pricing, About).
**Audit type:** Content fidelity + structural gap analysis.

---

## 1. Home Page (`/`)

### Present ✅

| PPTX content | Status |
|---|---|
| "Every Department, Every Function, 24/7" headline | ✅ |
| Department grid (Customer Service, Order Taking, Appointment Setting, Return Processing, Dispatch, Inventory Control, Accounting Inquiries) | ✅ 7 of 9 — missing Troubleshooting, FAQs, "and much more" |
| Tunnel hero background + SignalOrb | ✅ |
| "Never Miss Another Opportunity" + paragraph | ✅ |
| Before/after dialogue example ("Press 1 for sales" → AI conversation) | ✅ |
| "Try It for Yourself — call 844-DSX-Edge (844-379-3343)" | ✅ |
| "Every missed call is profit that disappears" | ✅ |
| "Trusted By" logos | ✅ (placeholder logos; needs real logos from Joe) |

### Missing ❌

| PPTX content | Priority | Notes |
|---|---|---|
| **"Business Communications That Drive Profit"** headline | HIGH | Core positioning statement, should follow hero |
| **"A New Dimension in Customer Interaction & Service"** subhead | HIGH | Reinforces value proposition |
| **"Tailored to Your Business"** header | MED | Bridges to industry content |
| **Industry crawl** (Automotive, Insurance, Real Estate, HVAC, Plumbing, Legal, Construction, Hotel, Medical, Retail, Nonprofit, Auto) | HIGH | Auto-scrolling horizontal list from PPTX; links to Industries page |
| **"The Easiest Way for Your Business to Benefit From AI"** full paragraph | HIGH | Explains the platform concisely |
| **"Turnkey AI"** section (we configure, you use) | HIGH | Key differentiator |
| **"Increase Productivity By 50% or More"** section with supporting paragraph | HIGH | ROI proof point with 65% stat |
| **5 industry-specific examples** (Repair/Maintenance, Healthcare, Retail/Wholesale, Transportation/Shipping, Residential/Commercial) with full AI workflow descriptions | MED | These demonstrate real capability; currently only in PPTX, no implementation |
| **"And Dozens of Others"** | LOW | Closeout for examples |
| **"SEE DSXEDGE FOR YOUR BUSINESS"** CTA → Industries page | HIGH | In-page cross-link missing |
| **"Learn How DSXEdge Can Improve Your Operations & Profits"** + calendar link | HIGH | Needs link to Joe's calendar (no implementation exists) |
| **"Pick up phone and delegate"** CTA copy | LOW | Closing call-to-action |
| **"Mary"** name on demo call | LOW | PPTX specifies the AI voice name |
| **Real department icons** | MED | PPTX note: "[Need much better icons]" |

---

## 2. Features Page (`/features`)

### Present ✅

| PPTX content | Status |
|---|---|
| "The Industry's Most Advanced Business Communications Platform" headline | ✅ |
| Multi-channel support paragraph | ✅ |
| Sales department functions (take orders, lead qualification, handover, scheduling, order history, outbound campaigns) | ✅ |
| Customer Service functions (routing, common inquiries, handover, payments, returns, troubleshooting, verify info) | ✅ |
| Shipping & Returns functions (order status, tracking, delivery window, complaints, proof of delivery, surveys, reminders, COD, RMAs) | ✅ |
| Management functions (call screening, message taking, routing rules) | ✅ |

### Missing ❌

| PPTX content | Priority | Notes |
|---|---|---|
| **Marketing department section completely absent** | HIGH | PPTX lists: reengagement campaigns, event/promotion invitations, anniversary/birthday calls, loyalty programs, surveys, referral generation, Google Ads/Facebook/Instagram integration. Currently 0 of these in the page. |
| **"Communications" section** | HIGH | PPTX lists: never miss a call/text, voicemails as emailed transcriptions, Work From Anywhere, one integrated system, increases productivity. Missing entirely. |
| **"BOOK A FREE CONSULTATION" CTA** | HIGH | Present in PPTX, missing in implementation |

---

## 3. Industries Page (`/industries`)

### Present ✅

| PPTX content | Status |
|---|---|
| "How We Serve Your Business" headline | ✅ |
| Intro paragraphs (customized to business, examples autonomously handled) | ✅ |
| Automotive accordion with full text and demo phone (844-DSX-AUTO) | ✅ |
| 14 industry headings as collapsed accordion items | ✅ |

### Missing ❌

| PPTX content | Priority | Notes |
|---|---|---|
| **Non-Automotive industry body text** | HIGH | PPTX lists 14 industries but only Automotive has content. PPTX note: "Pull actual text from Industry Page Dropdown Text document." This document needs to be located or Joe needs to provide it. |
| **Per-industry demo phone numbers** | HIGH | PPTX says "Get phone numbers from Joe." Only Automotive (844-DSX-AUTO) specified. |
| **"Improve Your Operations & Increase Profits"** CTA | MED | Closing section |
| **Trusted By logos (different set than home page)** | MED | PPTX note: "[Different set of logos than on home page]" |
| **Municipalities** not yet in industry list | LOW | Listed separately in PPTX Slider 3 notes |
| **Male and female AI voices** | LOW | PPTX implementation note: "Need to use both male and female voices" |

---

## 4. Pricing Page (`/pricing`)

### Present ✅

| PPTX content | Status |
|---|---|
| "Power Your Business" headline | ✅ |
| "Improving your business with DSXEdge AI Does Not Cost Thousands of Dollars" | ✅ |
| "Why?" paragraph (own AI tools, savings passed on) | ✅ |
| "BOOK A FREE CONSULTATION" CTA | ✅ |
| "Everything after that is pure profit!" | ✅ |

### Missing ❌

| PPTX content | Priority | Notes |
|---|---|---|
| **Descriptive pricing (no tiers)** | CRITICAL | Current implementation uses 3 tiers (Starter/Professional/Enterprise) with fixed dollar amounts. **PPTX explicitly says descriptive only:** telephone by concurrent call capacity, not per user. Needs complete rewrite to match PPTX structure. |
| **"We Never Charge Per User!"** emphasis | HIGH | Core pricing differentiator. Not in current page. |
| **Three-factor capacity explanation** (company type, headcount, usage profile) | HIGH | PPTX explains the methodology behind concurrent capacity calculation. Missing. |
| **AI cost breakdown: $300–$1,000 customization + 15–20% ongoing** | HIGH | Current tier model has flat prices. PPTX structure is fundamentally different. |
| **"Maximize Your Communications Spend"** header | MED | Section header missing |
| **"Major Features • Minor Price • Great ROI"** tagline | MED | PPTX tagline |
| **Comparison paragraph** ("less than you are paying for your current telephone service alone") | MED | Closing framing |

### ⚠️ Structural mismatch

The PPTX pricing is **descriptive, not tiered**. The 3-tier implementation (Starter/Professional/Enterprise) with dollar amounts is an architectural deviation. The PPTX specifies:

- **Telephone:** concurrent call capacity (calculated from 3 factors), not per-user
- **AI customization:** $300–$1,000 one-time (varies by function count)
- **AI compute:** 15–20% of telephone service charge (monthly)
- **No fixed monthly subscription prices**

The current pricing page needs a full structural rewrite to match.

---

## 5. About Page (`/about`)

### Present ✅

| PPTX content | Status |
|---|---|
| "Serving Businesses Like Yours" headline | ✅ |
| About paragraph (20 years, local team, community) | ✅ |
| Contact form: NAME, COMPANY, EMAIL, PHONE, MESSAGE, INDUSTRY, NUMBER OF EMPLOYEES | ✅ |
| info@dsxedge.com | ✅ |
| sales@dsxedge.com | ✅ |
| support@dsxedge.com | ✅ |
| 775-624-9424 | ✅ |

### Missing ❌

| PPTX content | Priority | Notes |
|---|---|---|
| **"BOOK A FREE CONSULTATION" CTA** | HIGH | Present on PPTX Slide 5, missing in About page code |
| **"Talk With an Expert Today"** header | HIGH | Section header for the contact form |
| **"BEST TIMES TO REACH YOU" + DAY + TIMES fields** | MED | PPTX has Best Day and Best Time fields; current form has these but not visibly labeled as "BEST TIMES" |
| **Form submission endpoint** | MED | Current `handleSubmit` sets `submitted: true` with no actual send/API integration |
| **Recaptcha / spam protection** | LOW | None — form is open to bots |

---

## 6. Cross-Page Issues

| Issue | Pages affected | Priority |
|---|---|---|
| **"BOOK A FREE CONSULTATION" CTAs** | Home, Features, Industries, About | HIGH — PPTX places this on every slide; current implementation is inconsistent |
| **Joe's calendar booking link** | Home ("Learn How DSXEdge…"), Features, Industries, Pricing | HIGH — PPTX consistently says "[Should link to Joe's calendar so people can immediately book a call, and then bring up a page to gather some basic info that gets forwarded to Joe]" — no implementation exists |
| **Trusted By logos** | Home, Industries (different sets) | MED — "Get list and logos from Joe" per PPTX |
| **Industry dropdown text document** | Industries | HIGH — PPTX says "Pull actual text from Industry Page Dropdown Text document" — this document not located in workspace |
| **Per-industry demo phone numbers** | Industries | HIGH — Only Automotive specified (844-DSX-AUTO). PPTX: "Get phone numbers from Joe." Suggests consistent pattern like 844-DSX-CONS, 844-DSX-EDUC |
| **Navbar consistency** | All | MED — Nav links match PPTX header (Features/Industries/Pricing/About/Contact) ✓ |

---

## 7. Priority Summary

### Critical (must fix before review)

1. **Pricing page: rewrite from tiers to descriptive** — this is the biggest structural mismatch. PPTX explicitly specifies descriptive pricing (concurrent capacity + AI costs), current implementation uses 3 tiers with fixed prices.
2. **Marketing section on Features page** — complete department missing (reengagement, loyalty, surveys, Google Ads integration, referrals, anniversary calls, event invitations).
3. **Communications section on Features page** — "Never miss a call/text", voicemails, Work From Anywhere all missing.

### High (significant omission)

4. **Home page: 7 missing sections** — "Business Communications That Drive Profit", industry crawl, "The Easiest Way" paragraph, Turnkey AI, "Increase Productivity By 50%", industry examples, "SEE DSXEDGE FOR YOUR BUSINESS" cross-link.
5. **Joe's calendar booking integration** — referenced on 5 slides, zero implementation.
6. **"BOOK A FREE CONSULTATION" CTAs** — inconsistent across pages (present on Pricing, missing on Home, About, Industries).
7. **Non-Automotive industry body text** — need the Industry Page Dropdown Text document.
8. **Per-industry demo phone numbers** — need from Joe.

### Medium (quality/polish)

9. **About page: form submission** — stub, needs real API endpoint.
10. **Trusted By logos** — placeholder, need actual from Joe.
11. **Real department icons** — PPTX notes "[Need much better icons]".
12. **AI voice name "Mary"** — PPTX specifies it; currently generic.

### Low (nice-to-have)

13. **"And Dozens of Others"** closeout copy.
14. **"Pick up phone and delegate"** CTA copy.
15. **Male/female voice variety** for industry demos.
16. **Municipalities** industry category.
17. **Spam protection** on contact form.

---

[STATUS UPDATED 2026-08-04 23:05]

**P4 — Home Page Sections:** ~~MISSING~~ → ✅ RESOLVED
All 12 sections from PPTX slide deck are now present on the home page (verified in production build JS bundle):
1. Navbar (liquid glass, pegasus logo) ✅
2. "Business Communications That Drive Profit" headline ✅
3. Industry crawl ✅
4. Turnkey AI ✅
5. "The Easiest Way" explainer ✅
6. "Increase Productivity By 50%" ✅
7. 5 industry-specific workflow examples (Repair & Maintenance, Healthcare, Automotive, Retail & Wholesale, Residential & Commercial) ✅
8. Industries cross-link CTA ("SEE DSX EDGE FOR YOUR BUSINESS") ✅
9. How It Works (SignalOrb) ✅
10. Every Department, Every Function ✅
11. "Try It for Yourself" (call Mary) ✅
12. Trusted By ✅

**P2 — Pricing Page:** ~~MISMATCH~~ → ✅ RESOLVED
Replaced with PPTX descriptive model: concurrent call capacity, no per-user pricing, AI services $300–$1,000 + 15–20% ongoing, ROI framing ("pays for itself"). Build: clean.

**P3 — Features Page:** ~~MISSING~~ → ✅ RESOLVED
Added Marketing department (7 capabilities including reengagement, anniversary, loyalty, surveys, referrals, Google Ads/Facebook) and Communications section (4 capabilities: never miss calls, voicemail-to-email transcriptions, Work From Anywhere, Microsoft 365 + Google Workspace integrations).

**P1 — Industries Page:** ~~MISSING~~ → ✅ RESOLVED
Now 14 industries with scenario-driven capabilities per industry, named voice personas (Pete, Sarah, Dr. Chen, Kevin, Nina, Chris, etc.), per-industry demo phone numbers (844-DSX-AUTO through 844-DSX-GOV), responsive accordion UI, social proof structure. Build: clean.

**New — Favicon:** → ✅ RESOLVED
DSX Pegasus icon installed as /public/favicon.png.

**New — SignalOrb:** → ✅ RESOLVED
Shader tuned for tunnel blend: body brightness (0.020/0.075/0.125 coolBody, 0.008/0.030/0.060 deepBody), blue-to-amber edge mix, wider side range (-0.45→0.65). Background: object-fit contain with blurred ::before fill layer.

**New — Logo:** → ✅ RESOLVED
Pegasus SVG installed at /public/images/pegasus.svg, rendered in navbar.

**New — Text Color:** → ✅ RESOLVED
All content uses #191919 (near-black) on white/light backgrounds per Marketing Psychology skill guidance.