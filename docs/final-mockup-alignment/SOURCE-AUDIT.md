# DSX Edge final mockup alignment — source audit

Date: 2026-08-06  
Baseline: `ab24b01425234744f81ef9e45692d9a21c3444d5` (`origin/main`)  
Branch: `fix/final-mockup-alignment`

## Authority

1. `Web Mockup-5` PPTX/PDF: exact content, hierarchy, order, navigation, calls to action, and implementation notes.
2. `DSXEdge Website Design Brief-1`: audience, positioning, and visual character.
3. `Background Hi Res DSX EDGE`: required homepage hero.
4. `DSX Edge LOGO PackLogo`: official logo artwork.

The mockup is a content-and-flow specification, not a visual design. Its copy is preserved unless the owner approves a correction.

## Verified source facts

- The supplied hero is a 4000×2242, 4.0 MiB JPEG. It is byte-identical to `public/images/dsx-edge-bkg.jpg`.
- The logo archive contains AI, EPS, JPG, and layered PSD originals.
- The website is a five-page React experience: Home, Features, Industries, Pricing, and About/Contact.
- Consultation CTAs require Joe's future Outlook-calendar URL. Until supplied, they lead to the existing contact form.
- The client rejected the SignalOrb/How It Works presentation for public sales use. Its component remains preserved in the repository.

## Current-to-source gaps

1. The homepage leads with “Every Department…” instead of “Business Communications That Drive Profit,” includes an immediate hero CTA, and uses a blurred `object-contain` hero construction.
2. Homepage sections and exact source passages are reordered, summarized, or replaced.
3. SignalOrb and its layer selectors remain on the public homepage.
4. Internal pages contain missing source activities and unsupported substitutions.
5. Brand-asset provenance, responsive evidence, and a reusable style guide are incomplete.

## Missing dependencies

- `Industry Page Dropdown Text`
- `Images-1for DSX to find better except tunnel.docx`
- final trusted-customer list, logo files, and permissions
- Joe's Outlook calendar URL
- unconfirmed industry demo numbers and voice assignments
- licensing/source records for internal-page imagery

Missing material will be flagged rather than fabricated. No customer endorsement or unavailable demo number will be implied.

## Protected behavior

- Contact submissions remain server-validated and stored only after a successful API response.
- Pricing figures remain exactly as supplied.
- The SignalOrb component and its assets are retained but removed from the homepage route.
- Existing branding direction, routing, mobile navigation, and accessibility behavior are preserved unless a confirmed defect requires correction.

