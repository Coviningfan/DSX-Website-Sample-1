# Agent Guardrails & Incident Notes — DSXEdge Site

**Status:** Binding for all agents, CLIs, and automation touching this repo.  
**Last updated:** 2026-08-06 (restore after cross-session overwrite)  
**Owner approval required** for any deviation.

---

## What went wrong

A later session merged / applied broad “UI/UX audit” and refinement work on `main` that:

- Rewrote mockup-faithful copy into marketing paraphrases
- Changed brand spelling to spaced “DSX Edge” across pages
- Re-centered or re-labeled hero/sections
- Replaced Features with a different information architecture
- Flattened Industries accordion design
- Removed or bypassed the select-only calendar + Outlook booking path
- Left agent docs describing an outdated Features model and soft mockup compliance

**Joe’s instruction:** public **wording must be 100% word-for-word** with **Web Mockup-5**, including **`DSXEdge`**.

This document exists so the next agent does not “fix” the site back into that state.

---

## Content authority order

1. **Web Mockup-5** PPTX (content + flow only — not pixel design)  
2. **Joe’s explicit chat instructions in the current session**  
3. `AGENTS.md` (repo root of this site)  
4. This file  
5. Style guide / visual polish docs  
6. Historical audit markdown (secondary; may be outdated)

If (1) and an old audit conflict, **mockup wins**.

---

## Locked implementation map

| Concern | Location |
|---------|----------|
| Home mockup copy + structure | `src/pages/home.tsx` |
| Features mockup lists | `src/pages/features.tsx` |
| Industries accordion + Automotive | `src/pages/industries.tsx`, `src/data/industries.ts` |
| Pricing | `src/pages/pricing.tsx` |
| About | `src/pages/about.tsx` |
| Contact + booking UI | `src/pages/contact.tsx`, `src/components/booking-calendar.tsx` |
| Availability + Outlook | `server.ts`, `backend-lib/outlook-calendar.ts` |
| Experience OR, accordion, booking CSS | `src/styles.css` |
| Shared CTA chrome | `src/components/primary-cta.tsx` (label must stay mockup CTA text on public pages) |

### Hero

- Left-aligned copy shell; inner block `pl-[clamp(4.5rem,7vw,6.25rem)]` (~half logo width).
- Headlines: “Business Communications That Drive Profit” / “A New Dimension…” / “Tailored to Your Business” (no invented eyebrow unless Joe re-approves).

### Opportunity dialogues

- Structure: old line → **is now** → dialogue 1 → **or** → dialogue 2.
- `or` is **inside** the new panel between quotes, not between old/new cards.

### Contact booking

- No free-text day/time.
- Business hours default Mon–Fri 9–17 America/Los_Angeles, 30-minute slots (env-overridable).
- Outlook via Graph when `OUTLOOK_TENANT_ID`, `OUTLOOK_CLIENT_ID`, `OUTLOOK_CLIENT_SECRET`, `OUTLOOK_CALENDAR_USER` are set.
- **Never commit secrets.**

---

## Forbidden “helpful” changes

- Bulk replace `DSXEdge` → `DSX Edge` on public pages
- “Softening” ROI / pricing language for legal caution without Joe
- Reintroducing SignalOrb on public homepage
- Reintroducing case studies / blog mega-nav from PortfolioRevamp
- Merging `feat/ui-ux-refinement-sprint` or similar without page-by-page mockup diff
- Updating README Features section to describe the collapsed-capability model while code is mockup-list based (keep README aligned with code)

---

## Pre-commit / pre-merge checklist for agents

- [ ] `rg "DSX Edge" src/pages` — only intentional exceptions (if any); prefer **DSXEdge**
- [ ] Mary line includes `844-DSX-Edge (844-379-3343)`
- [ ] Features includes “AI-Powered Business Support For Every Department”
- [ ] Pricing final CTA is “Maximize Your Communications Spend”
- [ ] About CTA is “Talk With an Expert Today”
- [ ] Contact uses `BookingCalendar`; no `type="text"` bestDay
- [ ] `backend-lib/outlook-calendar.ts` and `GET /api/availability` still present
- [ ] `tsc --noEmit` clean

---

## How to restore if overwritten again

```bash
# Find the restore commit on main
git log --oneline --grep='mockup-faithful\|AGENT_GUARDRAILS\|guardrails' -20

# Or inspect page files vs this doc and re-apply from that commit
git show <commit>:src/pages/home.tsx | head
```

Prefer **cherry-picking or resetting only the public pages + booking stack** over re-implementing from memory.

---

## Owner contact for exceptions

Joe — only Joe can authorize mockup deviations, publish, or Outlook credential binding.
