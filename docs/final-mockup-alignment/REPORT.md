# DSX Edge final mockup alignment report

Date: 2026-08-06
Model: GPT-5.6 Sol (owner-selected active model)
Baseline: `ab24b01425234744f81ef9e45692d9a21c3444d5`
Branch: `fix/final-mockup-alignment`
Production: unchanged

## Executive summary

The site now presents DSX Edge first as a business-communications platform enhanced by AI. The homepage follows the supplied content hierarchy, uses the owner-supplied tunnel as a single full-bleed layer, removes the client-rejected SignalOrb from public routing while preserving its source, restores source-backed internal-page content, uses an official-package logo derivative, and retains the existing contact backend.

## Source hierarchy

1. `Web Mockup-5` PPTX/PDF for exact content, hierarchy, order, CTAs, and implementation notes.
2. `DSXEdge Website Design Brief-1` for audience and visual character.
3. `Background Hi Res DSX EDGE` for the homepage hero.
4. `DSX Edge LOGO PackLogo` for official brand artwork.

The supplied `Images-1for DSX to find better except tunnel.docx` and `Industry Page Dropdown Text` were not available. No missing industry detail or external imagery was fabricated.

## Root causes and corrections

- Hero: `object-contain` over a blurred enlarged duplicate created fake gutters. One 90 KiB WebP now uses `object-cover` with breakpoint positioning and a restrained local readability gradient.
- Hierarchy: the former hero promoted “Every Department…” and an immediate CTA. The approved business-communications headline now leads; Mary, department/function breadth, Turnkey AI, workflows, and consultation follow in the approved narrative.
- Public abstraction: SignalOrb dominated the sales story. Its homepage import/section is removed; `src/components/signal-orb.tsx` and CSS remain preserved.
- Content drift: speculative industry activities, summarized pricing copy, and unsupported Features claims had entered the implementation. Source-backed copy/categories are restored; missing material is explicitly pending.
- Hidden content: global intersection-based reveals made unscrolled sections transparent. Universal reveals are removed; the restrained navigation response remains.

## Engineering decisions and trade-offs

- Static hero selected. It provides stable readability, zero media layout shift, and no reduced-motion exception complexity.
- The industry ticker advances in whole-item steps so labels never clip at viewport edges. Hover/focus pauses it; reduced motion displays a wrapped static list. This favors complete labels over a continuously sliding marquee.
- Consultation links temporarily target `/about#contact`. No calendar service or fake booking interface was invented.
- Trusted-by logos are not rendered until the owner confirms the customer list and permissions.
- Internal-page replacement imagery was not added because the requested image-direction document and licensing evidence were unavailable.

## Files modified

- `README.md`
- `docs/DSX-EDGE-STYLE-GUIDE.md`
- `docs/final-mockup-alignment/*`
- `public/images/dsx-edge-bkg.webp`
- `public/images/dsx-edge-logo-official.png`
- `src/components/footer.tsx`
- `src/components/navbar.tsx`
- `src/components/scroll-motion.tsx`
- `src/pages/about.tsx`
- `src/pages/features.tsx`
- `src/pages/home.tsx`
- `src/pages/industries.tsx`
- `src/pages/pricing.tsx`
- `src/styles.css`

## Responsive validation

Zero horizontal overflow (`scrollWidth === clientWidth`) was measured at 320×568, 360×800, 375×812, 390×844, 412×915, 430×932, 844×390, 768×1024, 820×1180, 1024×768, 1280×720, 1440×900, 1920×1080, 2560×1440, and 2560×1080.

The 320px hero is intentionally content-driven and may exceed one short viewport; it does not trap a CTA or clip content. Mobile navigation remains scroll-contained and safe-area aware.

## Accessibility report

- Semantic page landmarks and one page-level `h1` per route are retained.
- Industry controls expose `aria-expanded` and `aria-controls`; 44px targets, `minmax(0,1fr)`, icon reservation, and visible focus are present.
- Mobile form inputs compute to 16px; labels, required fields, API failure alert, success state, and keyboard order are retained.
- Reduced motion replaces the moving industry presentation with a static list.
- Primary measured contrasts: blue/white 6.60:1; accessible orange/white 5.79:1; light orange/navy 5.87:1; ink/white 17.58:1.
- No meaning depends on color alone.
- Browser page-error collection returned no application exceptions. The managed Vite development connection emits its existing websocket warning; it is not present in the production build.

## Performance report

| Metric | `origin/main` | Alignment branch |
|---|---:|---:|
| JavaScript minified | 1,193.91 KiB | 614.70 KiB |
| JavaScript gzip | 346.17 KiB | 196.04 KiB |
| CSS gzip | 15.97 KiB | 14.76 KiB |
| Hero source served | 4.0 MiB JPEG | 90 KiB WebP |

Removing the homepage SignalOrb import reduced JavaScript gzip by 150.13 KiB (43.4%). Local production-profile sampling reported mobile LCP 408ms with the hero image, desktop LCP 284ms with the heading, and CLS 0 for both. These localhost figures are comparative engineering samples, not field data.

The production build retains Vite's warning that the single JavaScript chunk exceeds 500 KiB minified. Route-level code splitting remains a maintainability opportunity, not a release blocker for this scoped correction.

## Verification results

- `bunx tsc --noEmit`: passed
- `bun run build`: passed
- `git diff --check`: passed
- Existing lint script: none
- Existing automated test script: none
- Public routes and required assets: HTTP 200
- Mary telephone target: `tel:8443793343`
- Automotive telephone target: `tel:8443792886`
- Contact form failure path: verified without writing a submission
- Missing/broken loaded images: none observed

## Evidence

Screenshots are under `docs/final-mockup-alignment/screenshots/` and include the required hero sizes, mobile/desktop full pages, Features, Industries with Automotive expanded, Pricing, About, Contact, mobile navigation, reduced motion, focus-visible, and form failure states.

Recordings are under `docs/final-mockup-alignment/recordings/` and include desktop homepage, mobile homepage, mobile menu, industry accordion, and contact keyboard navigation. No animation prototype was created because static media remained the better implementation.

## Unresolved dependencies

- Joe's Outlook calendar URL and desired calendar-to-form handoff
- `Industry Page Dropdown Text`
- `Images-1for DSX to find better except tunnel.docx`
- approved trusted-customer list, logo files, and logo permissions
- industry-specific demo numbers and voice assignments beyond Automotive
- licensed internal-page image sources

## Copy requiring owner approval

The following source wording is preserved but should be approved or corrected by the owner before merge:

- “Increase Productivity By 50% or More” and the “65% of staff time” claim need source verification.
- “typically pays for itself in less than a week” needs owner/legal substantiation.
- “This let’s us configure…” contains a grammatical error in the supplied pricing copy.
- The Repair/Maintenance sentence uses “creating job ticket,” and the Retail/Wholesale example ends with an ellipsis in the source.
- “The Industry’s Most Advanced Business Communications Platform” is an unqualified superlative.

## Owner approval required before merge

- Approve the homepage content order and exact preserved copy.
- Approve the static hero crop at the supplied responsive sizes.
- Approve removal of SignalOrb from public routes while retaining its source.
- Approve the official EPS-derived web logo.
- Approve whole-label stepped industry ticker behavior.
- Approve temporary contact-form routing for consultation CTAs.
- Approve omission of unconfirmed trusted logos, unsupported industry details, and unlicensed internal imagery.
- Approve the flagged numerical/superlative claims or provide corrected copy and citations.
- Approve the draft PR for merge. Publishing remains a separate confirmation-gated action.
