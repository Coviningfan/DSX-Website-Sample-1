# DSX Edge — PPTX Compliance Audit Report

**Updated:** 2026-08-04 23:30 PT  
**Commit:** `7c52ea7` (audit fixes batch)  
**Site:** https://dsx-sample-coviningfan.zocomputer.io

---

## Status Summary

| Priority | Count | Status |
|----------|-------|--------|
| P0 (blocking) | 4 | ✅ Resolved |
| P1 (high) | 7 | ✅ Resolved |
| P2 (medium) | 8 | ✅ Resolved |
| P3 (low) | 2 | ⚠️ Pending user input |
| P4 (funnel/experience) | 3 | 🔜 Requires separate design session |

---

## Resolved Items

### Hero Section
- **Hero image cropping/sidebars** → Replaced `<img object-contain>` with CSS `hero-tunnel-bg::before` at `cover`, blurred fill edge-to-edge, gradient overlay for text contrast. No sidebars, no cropping.
- **Em dash in subtitle** → "customer interaction and service — tailored" → "customer interaction and service, tailored"
- **"Pick up the phone" opacity** → `text-[#191919]/50` → `text-[#191919]/60` (more visible)
- **Bottom panel buttons navigate off-page** → Replaced `<Link to="/features">` with `<button onClick={openPanel}>` that opens an in-page glass modal. Three layer descriptions (Communications, Infrastructure, Intelligence) displayed in a centered dialog with `bg-white/95 backdrop-blur-xl`.
- **Hero text layout** → Unified to `text-[#191919]` (dark) for contrast against the bright corridor image per user directive.

### Turnkey AI Section
- **Pill/badge UI removed** → Replaced with clean headline "We set up the platform for your specific business" + use case icons
- **Use case icons restored per PPTX**: Talk or Text, Get Information, Diagnose, Make a List, Escalate — each with icon and description
- **"Every Department" section moved after Turnkey AI** → Logical flow: Turnkey → Departments → Industry workflow

### Industry Workflow
- **5 industries → 6** → Added "Hotels & Hospitality" as 6th workflow example (icon: Building2)
- **"And dozens of others" → "14 industries. One platform."**
- **All 6 industries have Lucide React icons**: Wrench, Stethoscope, ShoppingCart, Truck, Home, Building2

### Tailored to Your Business
- **"How Does DSX Edge Work in Your World?" header** → Clean, no em dashes
- **Industry crawl text** → "Automotive, Construction, Education, Finance, Government, Healthcare, Hotels, Manufacturing, Nonprofit, Professional Services, Real Estate, Retail, Transportation, Wholesale. 14 industries. One platform."

### Navbar & Logo
- **Logo not visible** → Pegasus SVG + "DSX Edge" wordmark visible in navbar
- **Scroll behavior** → Navbar slides to top-right when scrolled past hero section
- **Glass pill style** → `backdrop-blur-[50px]`, `bg-white/30`, inner highlight shadow, 1px border

### Color Palette
- Primary text: `#191919` (near-black)
- Primary accent: `#0084FF` (electric blue)
- Background: `#FFFFFF` (white), secondary `#F9F8F6`
- CTA buttons: `#191919` solid or `#0084FF`/80 glass
- Card backgrounds: `#F4F3F3` with hover `#eaeaea`

### Features Page
- Removed em dashes in department descriptions
- Added context to Marketing department (7 capabilities: reengagement, loyalty, surveys, anniversary, referral, Google Ads, Facebook)
- Added Communications section (4 capabilities: never miss calls, voicemail-to-email, Work From Anywhere, M365 + Google Workspace)

### Pricing Page
- Rewritten to PPTX descriptive model (concurrent call capacity, $300–$1,000 AI customization + 15–20% ongoing, no per-user charges, ROI framing)

### Industries Page
- 14 industries with per-industry demo phone numbers (844-DSX-AUTO through 844-DSX-GOV)
- Named voice personas (Pete, Sarah, Dr. Chen, Kevin, Nina, Chris, etc.)
- **Lucide React icons added** to each industry accordion header (Car, Construction, Building2, GraduationCap, BriefcaseBusiness, Landmark, Hotel, Wrench, Heart, Stethoscope, Briefcase, Plane, ShoppingBag, Ship, Stethoscope)

### About Page
- Contact form with all PPTX fields: name, email, company, phone, industry, employees, message
- **"Best time to reach you" dropdown** (Morning, Afternoon, Evening, Anytime)
- **"Best number to reach you" field**
- **Calendar date picker** with computed dates (replaced `—` placeholders)
- "Book a Call Instead" button with "Schedule Your Demo" section
- Address: Reno, Nevada

---

## Pending Items

### P3 — Requires User Input
1. **Trusted-by logos** — Current placeholders (Switch, 3CX, Cisco, Polycom, Yealink, Microsoft 365, Google Workspace). User: "We will worry about the trusted-by logos later."
2. **Calendar booking link** — "Book a Call Instead" currently shows an in-page date picker. A Calendly or similar external link can be added when ready.

### P4 — Funnel/Experience Design
User directive: "Make this note: first thing, we're going to have to funnel and create the experience as such, so that it is engaging enough and interactive enough to catch the intention."

1. **Conversion funnel design** — Psychology-driven walkthrough from landing → understanding → desire → action
2. **Interactive demo flow** — Real-time AI call demonstration with live response
3. **Psychology integration** — Social proof anchors, scarcity signals, authority markers throughout the journey

These require a dedicated design session.

---

## Verification

All changes verified via:
- `bun run build` — clean, 15.8s build time
- Bundle content grep — all PPTX terms confirmed in production JS
- Local production server test — HTTP 200 on all 5 routes
- GitHub push — `main` branch, clean history

---

## Next Steps (for next thread)

1. Trusted-by logos (once Joe provides list)
2. Calendar booking link (Calendly or equivalent)
3. Funnel/experience design session
4. SignalOrb: verify shader body values (coolBody 0.020/0.075/0.125, deepBody 0.008/0.030/0.060, blue-to-amber edge mix) in production rendering
5. Consider code-splitting via dynamic imports to reduce initial bundle size (currently 1.18MB gzip 342KB)
