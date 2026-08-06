# DSX Edge web style guide

## Positioning

DSX Edge is an established business-communications platform with telephone service, communications infrastructure, and practical AI capabilities. It should feel professional, trustworthy, strong, experienced, high-tech, and knowledgeable—not like an AI consultancy or startup template.

## Logo

- Source authority: `DSX Edge LOGO PackLogo` (AI, EPS, JPG, PSD).
- Web derivative: `public/images/dsx-edge-logo-official.png`, rendered from the supplied EPS without redrawing.
- Preserve the complete mark, clear space, aspect ratio, colors, and “ABOVE THE CLOUD” line.
- Do not stretch, recolor, retype, or separate the artwork.

## Color

- Ink/navy: `#102b43` for primary text and structural detail on light media, not full-page section fills.
- Communications blue: `#114CA8` for direction, structure, links, and focus. Pale blue surfaces use this same hue with transparency.
- Action orange: `#FC5104` at 98% opacity (`#FC5104FA`) for all emphasis and primary actions.
- Text: `#191919`; neutral surface: `#f6f8fa`. Avoid warm or pinkish off-white backgrounds.
- Orange is an accent, not a dominant page background. Meaning must never depend on color alone.

## Typography and scale

- Display: Barlow Semi Condensed for headings. Body and interface: IBM Plex Sans. Data labels and sequence numbers: IBM Plex Mono.
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
- Primary buttons use controlled orange with white text; neutral secondary actions use dark ink.
- Links remain identifiable and receive visible focus.
- Forms require persistent labels, server/client validation, clear error/success states, and no false success response.

## Motion

- Motion supports comprehension only.
- The industry crawl moves continuously, includes pause/resume control, pauses on hover/focus, and becomes a static wrapped list for reduced motion.
- On the homepage, the official logo lives in the hero on tablet/desktop. The compact fixed navigation appears after the hero exits; mobile navigation remains immediately available.
- Avoid constant floating, layout-shifting hover scale, parallax, full-screen filters, and decorative reveals.
- Static media is preferred when motion does not measurably improve the message.

## Images

- Homepage hero: owner-supplied tunnel, one full-bleed responsive layer with intentional `object-position`.
- Never create blurred duplicates, mirrored filler, generated extensions, or distorted crops.
- Internal imagery must be owner-supplied or have documented licensing and clear business-communications relevance.
- Use explicit dimensions or stable aspect ratios; do not lazy-load the LCP hero.
