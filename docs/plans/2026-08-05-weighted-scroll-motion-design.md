# Weighted Scroll Motion Design

## Intent

Add a restrained GSAP-style motion rhythm without intercepting native scrolling. The site should feel weighted and continuous while remaining trustworthy, readable, and fast on mobile.

## System

- Native scrolling remains authoritative on every device.
- Desktop visual motion interpolates toward scroll position to create slight inertial weight.
- Touch devices update directly from native scroll position.
- Top-level section content reveals once with opacity and settles through a 24px scroll-linked travel range.
- The hero tunnel gains at most 1.8% scale and 3px blur only near the end of the hero.
- The fixed navigation compresses by at most 1.2% and moves 4px as the page advances.
- `prefers-reduced-motion` removes all transforms, blur, and transitions.
- Section snapping is intentionally excluded because the homepage sections vary substantially in height and snapping would interfere with reading and touch momentum.

## Verification

Verify the five routes at 390px, 430px, 768px, 1024px, and 1440px; confirm native touch scroll, no horizontal overflow, no hidden content when JavaScript is delayed, reduced-motion behavior, route cleanup, and stable WebGL animation.
