# DSX Edge UI/UX Refinement Sprint

## Executive summary

This sprint preserves the approved DSX Edge composition while removing the hero's artificial side gutters, reducing its image transfer weight, and hardening layer-selector accessibility. The hero now uses one art-directed static image instead of a contained foreground over a blurred duplicate. No production deployment or merge was performed.

## Root cause analysis

The 4000×2242 hero JPEG was rendered with `object-contain`, exposing unused space on viewports that did not match its aspect ratio. A second copy filled that space with `cover`, blur, scale, opacity, and an edge wash. Scroll motion added another dynamic blur. The seams and washed-out gutters were therefore implementation artifacts, not source-image defects.

The layer modal was visually contained after the prior mobile fix, but it lacked complete dialog semantics, focus containment, focus restoration, and announced selector state.

## Implementation plan and engineering decisions

1. Preserve the existing hero DOM, copy, hierarchy, panel, palette, and vanishing point.
2. Replace the two-layer hero treatment with one 2560×1435 WebP using `object-fit: cover` and breakpoint-specific `object-position`.
3. Remove hero blur/scale/wash processing; retain the existing readability overlay.
4. Keep the homepage hero static. SignalOrb remains the meaningful motion surface.
5. Add dialog semantics, initial focus, Escape handling, Tab containment, focus restoration, pressed-state announcements, visible focus, and 44px minimum targets.

## Alternatives considered

- **Blurred duplicate fill:** rejected; it directly caused the defect.
- **Contained image with solid gutters:** rejected; seamlessness and first impression would remain weaker.
- **Stretched image:** rejected; it distorts the approved perspective.
- **51-frame loop/video/canvas:** not implemented. No frame archive is present in the repository or workspace, and motion is not needed to solve the confirmed defect. Static media is lighter, clearer, deterministic, and naturally reduced-motion safe.
- **New hero component or redesign:** rejected as unnecessary surface area.

## Trade-offs

`cover` necessarily crops the source outside the viewport aspect ratio. Centered breakpoint positions preserve the vanishing point and primary tunnel geometry at every tested size. The original JPEG remains in the repository as a rollback/reference source; the page serves the smaller WebP.

## Files modified

- `src/pages/home.tsx`
- `src/styles.css`
- `public/images/dsx-edge-bkg.webp`
- `README.md`
- `docs/ui-refinement/*`

## Responsive evidence

Screenshots: `320x568.png`, `360x800.png`, `390x844.png`, `430x932.png`, `768x1024.png`, `1024x768.png`, `1440x900.png`, `1920x1080.png`, and `2560x1080.png`.

Recordings: `desktop.webm` and `mobile.webm`.

All tested sizes reported `scrollWidth === clientWidth`. The hero remained centered and seamless at portrait mobile, landscape tablet, standard desktop, and 2560×1080 ultra-wide.

## Accessibility report

- Layer dialog exposes `role="dialog"`, `aria-modal`, labelled title, and description.
- Close receives initial focus; Escape closes; Tab/Shift+Tab remain contained; close restores the invoking control during real keyboard/pointer interaction.
- Layer choices expose `aria-pressed`; selector groups have an accessible label.
- Mobile selectors and close action retain a 44px minimum height.
- Visible focus indicators were added to hero selectors and the close action.
- Reduced-motion verification reported the media query active with no hero transform or filter.
- No accessibility regression was observed in the keyboard and responsive checks.

## Performance report

- Hero asset: 4.1 MB JPEG source → 89 KB served WebP (97.8% smaller).
- Removed continuous hero filter/transform work and its `will-change` allocation.
- Mobile production-preview sample: TTFB 3.9 ms, LCP 1.952 s, CLS 0.07, FCP 1.952 s.
- Desktop production-preview sample: TTFB 4 ms, LCP 2.196 s, CLS 0.12, FCP 2.196 s.
- Hidden-tab and offscreen SignalOrb suspension behavior remains unchanged.
- Existing bundle warning remains: 347.06 KB gzip JavaScript. No new dependency was added.

## Verification

- TypeScript: `bunx tsc --noEmit` passed.
- Production build: `bun run build` passed.
- Diff whitespace: `git diff --check` passed.
- Browser console: no application errors or warnings in the production preview.
- Media: all nine screenshots and both WebM files exist and open as media files.

## Remaining concerns

- The requested 51-frame archive was not present in the checked repository, GitHub tree, or workspace, so frame-quality and loop-seam analysis could not be performed.
- The existing monolithic JavaScript bundle remains above Vite's 500 KB uncompressed warning threshold.
- Performance figures are local production-preview samples, not field data or throttled laboratory results.

## Owner approval required before merge

1. Approve the `cover` crop and vanishing-point position across the supplied screenshots.
2. Approve keeping the homepage hero static.
3. Approve carrying the previously published but unmerged mobile-modal commits into this PR.
4. Approve merge of the draft PR. Publishing remains a separate confirmation-gated action.
