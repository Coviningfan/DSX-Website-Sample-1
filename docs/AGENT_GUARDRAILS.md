# Agent Guardrails & Owner Attitude — DSXEdge Site

**Status:** Binding for all agents, CLIs, and automation.  
**Last updated:** 2026-08-08  
**Owner:** Joe (Coviningfan)

---

## Owner attitude (read first)

Joe builds under real constraints (time, cost, brand trust). He is not looking for generic agency output.

| He wants | He rejects |
|----------|------------|
| Mockup-accurate **words** | Paraphrased “better marketing” copy |
| Clear type hierarchy (hero > section > body) | PowerPoint stacks of equal titles |
| Company blue headings, orange accents | Navy titles, rainbow UI, glow pills |
| Intentional layout (close, spacing, left editorial rail) | Broken widgets left “for later” |
| Small, reversible diffs | Silent main rewrites from audit merges |
| Straight answers and tradeoffs | Filler, over-scoping, unsolicited redesigns |
| Ask before publish/secrets/copy rewrites | Agents that “just ship” irreversible changes |

**Session history that still matters:**

1. Agents overwrote mockup-faithful work with UI/UX “audits.”
2. Industry hero carousel/pills never satisfied — **strip removed**; do not resurrect without orders.
3. Hierarchy/color passes: headings → company blue; **Profit** / **YOUR** → company orange; hero soft-close without ticker.

When Joe says **“good enough”**, lock that direction in docs/code and stop churning that thread.

---

## What went wrong (historical)

Earlier sessions on `main`:

- Softened mockup copy and brand to “DSX Edge”
- Rebuilt Features IA and flattened Industries
- Undid booking calendar / Outlook path
- Left docs describing obsolete models

**Instruction that still stands:** public **wording** is **100% word-for-word** with Web Mockup-5, including **`DSXEdge`**, except Joe-explicit presentation exceptions (Profit color, YOUR styling, line breaks, hierarchy CSS).

---

## Authority order

1. Joe’s **latest chat** instruction  
2. Web Mockup-5 **wording**  
3. `AGENTS.md`  
4. This file  
5. `docs/DSX-EDGE-STYLE-GUIDE.md`  
6. Old PPTX audit markdown (often stale)

Presentation may evolve; **strings do not** without approval.

---

## Locked visual state (2026-08-08)

### Colors

- Headings / display lettering: **`#114CA8`** (company blue)  
- Accents / CTAs / Profit / YOUR: **`#FC5104` / `#FC5104FA`**  
- Body: **`#191919`**  
- Avoid navy **`#102b43`** for titles  

### Hero

- Left rail, half-logo inset  
- Title lines: “Business Communications” / “That Drive **Profit**” (Profit orange)  
- Lead quieter; tailored caption tight under lead with YOUR treatment  
- **No industries marquee** on hero  
- **`.hero-close`**: white gradient + hairline into content  

### Body

- `.section-title` / CSS: section `h2`/`h3` smaller than hero so the page doesn’t compete with the first screen  
- Opportunity: `or` between the two new dialogues only  

### Contact

- Calendar select-only for day/time; Outlook-ready backend  

---

## Implementation map

| Concern | Location |
|---------|----------|
| Home + hero hierarchy | `src/pages/home.tsx`, `src/styles.css` (`.hero-*`, `.hero-close`, `.section-title`) |
| Features lists | `src/pages/features.tsx` |
| Industries accordion | `src/pages/industries.tsx`, `src/data/industries.ts` |
| Pricing / About | `src/pages/pricing.tsx`, `src/pages/about.tsx` |
| Contact + booking | `src/pages/contact.tsx`, `src/components/booking-calendar.tsx` |
| Availability / Outlook | `server.ts`, `backend-lib/outlook-calendar.ts` |
| Unused marquee experiment | `src/components/industry-carousel.tsx` (not mounted; keep or delete only with Joe OK) |

---

## Forbidden “helpful” moves

- Bulk `DSXEdge` → `DSX Edge`  
- Re-adding hero industry strip without a working, intentional design Joe approved  
- Inflating section titles back to hero-scale utilities  
- Navy/black title colors  
- Softening ROI/pricing copy “for legal” without Joe  
- Public SignalOrb  
- Merging `feat/ui-ux-refinement-sprint` (or similar) without page-by-page mockup + hierarchy check  

---

## Pre-merge checklist

- [ ] Mockup wording intact on all six routes  
- [ ] `DSXEdge` brand form  
- [ ] Mary + Pete demo lines  
- [ ] Hero: no marquee; close fade present; Profit + YOUR treatment  
- [ ] Section titles quieter than hero  
- [ ] Booking calendar still select-only  
- [ ] `tsc --noEmit` clean  

---

## Restore

```bash
git log --oneline --grep='guardrails\|mockup-faithful' -20
```

Prefer restoring public pages + `src/styles.css` hero/section blocks from those commits over reinventing.

---

## Exceptions

Only Joe authorizes mockup deviations, re-adding the strip, publish, domain, and credentials.
