# Agent / CLI Guardrails — DSXEdge Website

**Read this before changing public copy, page structure, or contact booking.**

Owner: Joe (Coviningfan). Live Zo Site: `dsx-sample`. Repo: `Coviningfan/DSX-Website-Sample-1`.

If your task conflicts with this file, **stop and ask Joe**. Do not “improve” copy or silently re-merge older branches over this work.

---

## Non-negotiables (do not reverse)

### 1. Content authority = Web Mockup-5 (word-for-word)

- Source deck: Zo chat-uploads `Web Mockup-5-*.pptx` (also PDF export if present).
- Public page **wording must stay 100% mockup-faithful**, including brand spelling **`DSXEdge`** (one word) wherever the mockup uses it.
- **Do not** rewrite mockup sentences for “clarity,” “tone,” “SEO,” or “UX audit” without Joe’s explicit approval.
- **Do not** invent section kickers/H2s that are not in the mockup (e.g. “The unseen cost”, “Get In Touch”, generic SaaS outcomes).
- **Do not** collapse Features bullets behind “view all” or re-architect Features into a different model than the mockup (Communications + AI-Powered Business Support For Every Department + full lists).

Pages and roles:

| Route | Mockup slide | Notes |
|-------|--------------|--------|
| `/` | Slide 1 | Exact headlines, dialogues, functions list, Turnkey AI, Mary line, TRUSTED BY placeholder |
| `/features` | Slide 2 | Exact channel intro + department bullets (keep `…` and `3rd -party` as in mockup) |
| `/industries` | Slide 3 | Exact intro; Automotive bullets exact; demo Pete line exact |
| `/pricing` | Slide 4 | Exact pricing paragraphs; final CTA title = **Maximize Your Communications Spend** |
| `/about` | Slide 5 | Exact story; CTA = **Talk With an Expert Today** |
| `/contact` | Slide 5 form | Labels NAME/COMPANY/EMAIL/PHONE/INDUSTRY/NUMBER OF EMPLOYEES/MESSAGE; BEST TIMES = calendar select only; SUBMIT |

### 2. Layout decisions already locked

- Hero copy is **left-aligned**, inset about **half the logo width** (`pl-[clamp(4.5rem,7vw,6.25rem)]`) — not centered flush with logo edge.
- “Never Miss Another Opportunity”: **`or` sits between the two new-conversation dialogues**, not between “old experience” and “new experience” panels.
- Industries use the **card accordion** treatment (`industry-accordion` CSS), not a bare `divide-y` FAQ strip, while keeping mockup content.
- Consultation CTAs use mockup text **BOOK A FREE CONSULTATION** (via `PrimaryCta` is fine).

### 3. Contact booking system

- DAY/TIMES are **select-only**: `src/components/booking-calendar.tsx` + `GET /api/availability`.
- Free-text day/time fields are **forbidden**.
- Outlook Graph integration lives in `backend-lib/outlook-calendar.ts`; wire via env (`OUTLOOK_*`). Without env, local business-hours slots still work.
- `POST /api/contact` accepts `slotStart` / `slotEnd` and may create an Outlook event. Do not strip those fields.

### 4. Git / process (this is how work got wrecked before)

- **Do not** merge `feat/*` or “UI/UX audit” branches into `main` without a full mockup-copy diff of `src/pages/*`.
- **Do not** restore old PortfolioRevamp wording or “DSX Edge” two-word brand across public pages as a bulk find-replace.
- Prefer small PR/commit diffs. If you change copy, cite mockup slide text in the commit body.
- After structural refactors, re-run a mockup loyalty check on all six routes before declaring done.

### 5. Safe to change without asking

- CSS polish that does not hide/reorder mockup text
- A11y (focus, aria) that does not alter visible copy
- Performance (images, lazy routes)
- Bug fixes in booking availability math
- Internal-only components (`signal-orb*`, `_design`) not on public routes

### 6. Require Joe’s OK

- Any public string change
- Nav IA / new public routes
- Removing TRUSTED BY placeholders, Mary demo, or industry Pete demo
- Publishing / custom domain / production secrets
- Connecting real Outlook credentials (env only — never commit secrets)

---

## Canonical references in-repo

- `docs/AGENT_GUARDRAILS.md` — expanded history + restore checklist
- `docs/PPTX-AUDIT-REPORT.md` — prior PPTX alignment notes
- `docs/DSX-EDGE-STYLE-GUIDE.md` — visual system (design, not copy authority)
- `README.md` — project overview (must stay consistent with this file)

---

## Restore checklist (if another session overwrites again)

1. Compare `src/pages/{home,features,industries,pricing,about,contact}.tsx` to mockup text.
2. Confirm brand **`DSXEdge`** on public strings.
3. Confirm booking calendar + `/api/availability` + `backend-lib/outlook-calendar.ts` exist.
4. Confirm hero left inset + experience `or` placement + industries accordion CSS.
5. Prefer restoring from the commit message containing `mockup-faithful` / `AGENT_GUARDRAILS` rather than re-deriving from audit branches.
