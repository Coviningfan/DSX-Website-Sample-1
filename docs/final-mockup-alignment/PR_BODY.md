## Executive summary

Aligns DSX Edge with the authoritative `Web Mockup-5` content/flow and supplied design brief while preserving the approved visual system. Production is unchanged. This PR is draft and must not be merged or published without owner approval.

## Source hierarchy

1. `Web Mockup-5` PPTX/PDF — exact content, hierarchy, order, CTAs, and implementation notes
2. `DSXEdge Website Design Brief-1` — audience and visual character
3. Owner-supplied high-resolution tunnel — required homepage hero
4. Owner-supplied logo pack — official brand artwork

## Root causes

- Blurred enlarged hero duplicate behind `object-contain` media created fake side gutters.
- Homepage hierarchy elevated “Every Department…” and an immediate CTA above the approved business-communications positioning.
- SignalOrb remained public after the client rejected it as dominant and unclear.
- Internal pages contained summarized source copy, unsupported additions, and speculative industry details.
- Universal scroll reveals hid unvisited sections until intersection.

## Content and design-system changes

- Restores “Business Communications That Drive Profit” as the homepage `h1`.
- Reorders the homepage to the approved business narrative.
- Restores Mary’s live demo and exact `tel:8443793343` target.
- Restores approved department/function labels, Turnkey AI language, workflows, pricing, and About copy.
- Uses an official EPS-derived transparent logo asset without redrawing.
- Adds `docs/DSX-EDGE-STYLE-GUIDE.md`.
- Uses accessible orange for text/actions and neutral blue-white surfaces.

## Hero media

- One responsive 90 KiB WebP derived from the byte-matching owner source
- `object-cover` with breakpoint positioning
- No blurred duplicate, fake extension, animated filter, seam, or distortion
- Static by design; no animation prototype is proposed

## SignalOrb disposition

Removed from the public homepage and bundle. Source remains preserved in `src/components/signal-orb.tsx` and its CSS for internal prototypes, presentations, or a future technical page.

## Accessibility and performance

- Whole-label industry ticker; pause on hover/focus; static reduced-motion alternative
- 44px controls, contained accordion tracks, visible focus, labeled form, 16px mobile inputs
- Measured contrasts: blue/white 6.60:1; orange/white 5.79:1; light-orange/navy 5.87:1
- JavaScript gzip: 346.17 KiB → 196.04 KiB (43.4% reduction)
- Local sampling: mobile LCP 408ms, desktop LCP 284ms, CLS 0 for both
- No application page exceptions; managed dev Vite websocket warning remains environment-only

## Responsive matrix

No horizontal overflow at 320×568, 360×800, 375×812, 390×844, 412×915, 430×932, 844×390, 768×1024, 820×1180, 1024×768, 1280×720, 1440×900, 1920×1080, 2560×1440, and 2560×1080.

## Verification

- `bunx tsc --noEmit` — passed
- `bun run build` — passed; existing >500 KiB minified chunk warning remains
- `git diff --check` — passed
- Lint/test scripts — not present
- Routes/assets — HTTP 200
- Contact API failure state — verified without recording a test submission

## Evidence

- [Full report](docs/final-mockup-alignment/REPORT.md)
- [Mobile hero](docs/final-mockup-alignment/screenshots/home-hero-390x844.png)
- [Tablet hero](docs/final-mockup-alignment/screenshots/home-hero-768x1024.png)
- [Desktop hero](docs/final-mockup-alignment/screenshots/home-hero-1440x900.png)
- [1920px hero](docs/final-mockup-alignment/screenshots/home-hero-1920x1080.png)
- [Mobile full page](docs/final-mockup-alignment/screenshots/home-mobile-full.png)
- [Desktop full page](docs/final-mockup-alignment/screenshots/home-desktop-full.png)
- [All screenshots](docs/final-mockup-alignment/screenshots/)
- [All recordings](docs/final-mockup-alignment/recordings/)

## Exact commits

- `22c133e` — source audit
- `906458a` — static hero correction
- `13afe53` — homepage content alignment
- `2be4579` — public SignalOrb removal
- `2715a47` — client-mockup content correction
- `394199b` — Features composition
- `1635ea1` — internal pages and official branding
- `f2e1e9d` — responsive motion/navigation
- `39302b3` — exact source copy and contrast
- `78e4111` — validation evidence

## Unresolved dependencies

- Joe’s Outlook calendar URL and calendar-to-form handoff
- `Industry Page Dropdown Text`
- `Images-1for DSX to find better except tunnel.docx`
- approved customer/logo list and permissions
- industry demo numbers/voices beyond Automotive
- licensed internal-page image sources

## Copy requiring approval

- “Increase Productivity By 50% or More” and “65% of staff time”
- “pays for itself in less than a week”
- source grammar: “This let’s us configure…,” “creating job ticket,” and the truncated Retail/Wholesale ellipsis
- “The Industry’s Most Advanced Business Communications Platform”

## Owner approval checklist before merge

- [ ] Homepage content order and preserved copy
- [ ] Static responsive hero crop
- [ ] SignalOrb removal from public routes
- [ ] Official EPS-derived web logo
- [ ] Whole-label stepped industry ticker
- [ ] Temporary contact-form consultation routing
- [ ] Omission of unconfirmed logos, unsupported industry detail, and unlicensed images
- [ ] Numerical/superlative claims and source grammar
- [ ] Merge approval
- [ ] Separate publication approval, if desired after merge
