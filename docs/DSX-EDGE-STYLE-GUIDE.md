# DSX Edge web style guide

## Positioning

DSX Edge is an established business-communications platform with telephone service, communications infrastructure, and practical AI capabilities. It should feel professional, trustworthy, strong, experienced, high-tech, and knowledgeable—not like an AI consultancy or startup template.

## Logo

- Source authority: `DSX Edge LOGO PackLogo` (AI, EPS, JPG, PSD).
- Web derivative: `public/images/dsx-edge-logo-official.png`, rendered from the supplied EPS without redrawing.
- Preserve the complete mark, clear space, aspect ratio, colors, and “ABOVE THE CLOUD” line.
- Do not stretch, recolor, retype, or separate the artwork.

## Color

- Ink/navy: `#102b43` for high-emphasis sections and primary text on light media.
- Communications blue: `#1688e8` / `#0b5ea8` for direction, structure, links, and focus.
- Action orange: `#c85f1f` / `#f28a45` for selective emphasis and high-value actions.
- Text: `#191919`; neutral surface: `#f6f8fa`. Avoid warm or pinkish off-white backgrounds.
- Orange is an accent, not a dominant page background. Meaning must never depend on color alone.

## Typography and scale

- Primary: IBM Plex Sans. Data labels and sequence numbers: IBM Plex Mono.
- Page `h1`: responsive 40–96px; section `h2`: 36–48px; lead: 18–24px; body: 16–18px.
- Use tight heading tracking, balanced wrapping, readable line lengths, and one `h1` per page.
- Mobile form controls use at least 16px text.

## Spacing and layout

- Mobile sections: 80px vertical baseline. Tablet/desktop: 96–128px.
- General content width: 1152px; editorial text remains narrower.
- Responsive design recomposes grids and controls rather than shrinking desktop layouts.
- Grid/flex children use `min-width: 0`; interactive targets are at least 44×44 CSS pixels.

## Surfaces, radii, and shadows

- Prefer white space, rules, editorial rows, and square technical surfaces over card stacks.
- Standard control radius: 8–10px. Larger radii remain limited to established navigation/forms.
- Shadows are restrained and functional, primarily for elevated navigation and overlays.
- No glassmorphism, animated full-screen blur, glow pills, gradient text, or fake dashboard interfaces.

## Buttons, links, and form controls

- Primary CTA wording: “Book a Free Consultation.”
- Primary buttons use dark ink or controlled orange; white-on-navy is acceptable for emphasis.
- Links remain identifiable and receive visible focus.
- Forms require persistent labels, server/client validation, clear error/success states, and no false success response.

## Motion

- Motion supports comprehension only.
- The industry crawl is slow, pauses on hover/focus, and becomes a static wrapped list for reduced motion.
- Avoid constant floating, layout-shifting hover scale, parallax, full-screen filters, and decorative reveals.
- Static media is preferred when motion does not measurably improve the message.

## Images

- Homepage hero: owner-supplied tunnel, one full-bleed responsive layer with intentional `object-position`.
- Never create blurred duplicates, mirrored filler, generated extensions, or distorted crops.
- Internal imagery must be owner-supplied or have documented licensing and clear business-communications relevance.
- Use explicit dimensions or stable aspect ratios; do not lazy-load the LCP hero.
