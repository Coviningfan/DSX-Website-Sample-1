# Agent / CLI Guardrails — DSXEdge Website

**Read this entire file before changing public copy, layout, type, or contact booking.**

Owner: **Joe (Coviningfan)** · Site: Zo `dsx-sample` · Repo: `Coviningfan/DSX-Website-Sample-1`  
**Last updated:** 2026-08-08

If your task conflicts with this file or Joe’s latest chat instruction, **stop and ask**. Do not “improve,” soft-rewrite, or re-merge audit branches over locked work.

---

## Owner attitude (how Joe wants agents to work)

Joe is the product owner and final design authority. Treat him as a sharp, time-constrained founder who has already paid the cost of agents undoing good work.

1. **Protect finished decisions.** Once something is locked in chat or in this file, do not reverse it for aesthetics, SEO, or a generic “UI/UX audit.”
2. **Mockup = words. Design system = presentation.** Web Mockup-5 owns **wording**. Typography, color, spacing, and hierarchy can and should be refined—without rewriting sentences.
3. **No PowerPoint energy.** Avoid stacked equal-weight titles, generic SaaS labels, glow pills, card spam, and “feature theater.” Prefer editorial hierarchy: one command line, one lead, one caption.
4. **Short, direct, no filler.** Explain tradeoffs in plain language. Don’t over-engineer. Justify the change or cut it.
5. **Do not silently overwrite sessions.** Broad merges of `feat/*` / audit branches have destroyed mockup-faithful work before. Diff `src/pages/*` before merging anything into `main`.
6. **Ask before consequence.** Publish, secrets, domain, brand/copy rewrites, removing demos/CTAs — prepare first, then explicit Joe OK.
7. **Ship the intent, not a parallel product.** If the strip/carousel isn’t working, remove it rather than leave a broken widget. “Good enough” from Joe means stop polishing that thread and lock state.

---

## Brand & color (locked)

| Role | Value | Use |
|------|--------|-----|
| **Company blue** | `#114CA8` | Titles, headings, display type, structural UI, industry labels |
| **Company orange** | `#FC5104` / emphasis `#FC5104FA` | Primary CTAs, accents, **Profit**, **YOUR**, separators |
| **Body ink** | `#191919` | Paragraph/body only — **not** titles |
| **Navy** | `#102b43` | Avoid for headings/lettering; too heavy vs brand blue |

**Do not** paint titles navy or near-black. **Do not** bulk-replace `DSXEdge` → `DSX Edge` on public pages.

---

## Content authority = Web Mockup-5 (word-for-word)

- Source: Zo chat-uploads `Web Mockup-5-*.pptx` (+ PDF if present).
- Public **wording** stays mockup-faithful, including **`DSXEdge`** (one word) where the mockup uses it.
- Do **not** invent kickers (“The unseen cost”, “Get In Touch”, fake outcomes).
- Do **not** collapse Features into “view all” or a different IA than the mockup lists.

| Route | Mockup | Notes |
|-------|--------|--------|
| `/` | Slide 1 | Headlines, dialogues, functions, Turnkey AI, Mary line, TRUSTED BY placeholder |
| `/features` | Slide 2 | Full Communications + department bullets (`…`, `3rd -party`) |
| `/industries` | Slide 3 | Exact intro; Automotive + Pete demo exact |
| `/pricing` | Slide 4 | Exact body; final CTA = **Maximize Your Communications Spend** |
| `/about` | Slide 5 | Exact story; CTA = **Talk With an Expert Today** |
| `/contact` | Slide 5 form | Field labels; BEST TIMES = calendar select only; **SUBMIT** |

**Allowed presentation exceptions (Joe-approved, keep):**

- Hero **Profit** in company orange.
- **Tailored to YOUR Business** — `YOUR` bold + italic + ~1.1em, orange; line is a caption under the lead, not a third title.
- Controlled H1 line breaks: “Business Communications” / “That Drive Profit”.

---

## Layout & type (locked as of 2026-08-08)

### Hero

- Copy **left-aligned**, inset ~**half logo width** (`pl-[clamp(4.5rem,7vw,6.25rem)]`).
- Hierarchy: **H1 (display blue)** → **lead (quieter body)** → **tailored caption** (tight to lead).
- **No industry strip / marquee on the hero for now** (removed after broken carousel work). Do not re-add without Joe saying so.
- **Hero close:** soft white fade + hairline into next section (`.hero-close`). Not a ticker.

### Body hierarchy

- Section `h2` / `h3` use **section scale** (`.section-title` / CSS under `main section:not(#home-hero)`), clearly smaller than hero display — so the page doesn’t feel like equal PowerPoint titles.
- Page `h1`s medium; hero remains largest.

### Other layout locks

- Opportunity: **`or` between the two new-conversation quotes**, not between old/new panels.
- Industries **page**: card accordion (`industry-accordion`), mockup content.
- CTAs: **BOOK A FREE CONSULTATION** (`PrimaryCta` OK).

### Contact booking

- DAY/TIMES = select-only (`booking-calendar.tsx` + `GET /api/availability`).
- No free-text day/time.
- Outlook optional via env (`backend-lib/outlook-calendar.ts`). Never commit secrets.

---

## Git / process

- Do not merge UI-audit / refinement branches over `main` without a full mockup-copy + hierarchy check of `src/pages/*` and hero CSS.
- Prefer small commits. Copy changes cite mockup; visual locks cite this file.
- After big refactors: mockup loyalty + hierarchy check before “done.”

---

## Safe without asking / need Joe’s OK

**Safe:** CSS polish that keeps copy; a11y; performance; booking bugs; internal-only `_design` / `signal-orb*`.

**Need OK:** public string changes; re-adding hero industries strip; nav/routes; removing demos/CTAs/TRUSTED BY; publish; domains; secrets; model/brand rewrites.

---

## Canonical docs

- `docs/AGENT_GUARDRAILS.md` — history, restore checklist, attitude detail  
- `docs/DSX-EDGE-STYLE-GUIDE.md` — visual system (subordinate to mockup **words** and this file’s locks)  
- `docs/PPTX-AUDIT-REPORT.md` — older PPTX notes (may lag)  
- `README.md` — overview (must stay consistent)

---

## Restore checklist

1. `src/pages/{home,features,industries,pricing,about,contact}.tsx` vs mockup wording + `DSXEdge`
2. Hero: no marquee; `.hero-close` present; Profit orange; YOUR treatment; left inset
3. Section titles quieter than hero (no inflated `text-5xl`/`text-6xl` fighting hierarchy)
4. Booking calendar + `/api/availability` + `outlook-calendar.ts` still present
5. Prefer commit messages containing `guardrails` / `mockup-faithful` over re-deriving from audit branches
