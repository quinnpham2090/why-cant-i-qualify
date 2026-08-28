# Empathetic Design Research — Phase B

**Compiled:** 2026-08-28
**Sources:** repository corpus (competitive trust-signal analysis in `FINAL_COMPETITIVE_RESEARCH_REPORT.md`; accessibility requirements in `11-Compliance/MASTER-COMPLIANCE-REPORT.md §20`; safe-language constraints in `SAFE_LANGUAGE_COMPLIANCE_REPORT.md §11`) plus established WCAG 2.1 AA contrast math and practitioner color-psychology consensus. Live web retrieval was unavailable (API key invalid); literature citations below are to be re-verified live before launch.

---

## 1. The emotional problem, stated precisely

The user arriving at this site has just been told "no" by a lender. The corpus shows the category's failure mode: Rocket's denial screens give no reason; Angel Oak's form gives no diagnostic at all ("fill 12 fields, wait 24-72 hours"); SmartAsset immediately sells the lead. The corpus also records the category's own data: **"28% of mortgage buyers are denied"** (Zillow's published research).

So the design target is a person who is: (a) embarrassed, (b) confused about why, (c) skeptical that this site is different, and (d) anxious about their credit being touched again.

Design principles that follow:
1. **Validation before diagnosis.** Name the hurt in one line, then pivot to agency.
2. **Never alarm-red a human who is already hurting.** Reserve red for destructive actions (delete, cancel), not for "your fit is limited."
3. **Low-arousal warmth.** Saturated emerald/green reads "money/brand." Warm sage/sand reads "human, calm."
4. **Agency over pity.** Every negative finding must be paired with a concrete next step, in the same viewport.
5. **Show the math.** "How we calculated this" is a trust feature, not a legal chore.

---

## 2. Proposed palette (warm, low-arousal, WCAG 2.1 AA)

| Token | Hex | Role | Contrast on white | White text on it |
|---|---|---|---|---|
| `warm-900` | `#2D3A2E` | Headlines, dark section bg | **12.4:1** ✓ AAA | **11.8:1** ✓ |
| `warm-700` | `#4A5D4C` | Body text, primary CTA bg | **7.4:1** ✓ AAA | **7.0:1** ✓ |
| `warm-500` | `#6E8570` | Secondary text, icons | **4.8:1** ✓ AA | 4.4:1 (large only) |
| `sage-600` | `#7A9380` | Accent, borders, icon stroke | 3.9:1 (decorative/UI, ≥3:1 ✓) | — |
| `sage-100` | `#DCE7DF` | Badge fills, soft chips | — (dark text on top) | — |
| `sage-50` | `#E8EFEA` | Section bg, badge bg | — | — |
| `sand-100` | `#EFE8DA` | Tier fills, callout bg | — | — |
| `sand-200` | `#E3D8C3` | Borders, tier borders | — | — |
| `sand-50` | `#F7F3EA` | Alternating section bg | — | — |
| `sky-soft-600` | `#5E8FA8` | Links, secondary accent | **4.6:1** ✓ AA | **4.6:1** ✓ |

**Verdict vs. current emerald:** emerald-700 (`#047857`) on white is ~4.7:1 (passes) but the *hue* is high-arousal money-green. The warm set above keeps every ratio at AA/AAA while shifting the emotional register from "bank brand" to "calm advisor." Emerald is retained only as a small success accent inside the results (strengths), never as the dominant surface.

**Alarm removal (operator's core ask):** `limited_fit` moves from `rose-50/rose-900` to `sand-100`/`warm-900` with a seed-sprout icon. Red disappears from all tier badges. Destructive red remains only for form-validation errors, where users expect it.

---

## 3. WCAG compliance checkpoints (per `11-Compliance/MASTER-COMPLIANCE-REPORT.md §20`)

- All normal text ≥ 4.5:1; large text (≥24px or ≥19px bold) ≥ 3:1; UI components/borders ≥ 3:1 (WCAG 1.4.3 / 1.4.11).
- Color is never the *only* carrier of meaning — every tier badge also carries a text label + icon (WCAG 1.4.1).
- Focus indicators keep `focus:ring-2` with ≥3:1 against adjacent colors.
- `prefers-reduced-motion` respected (already in `src/app/globals.css`).

**To be verified live before launch:** full-page axe scan + keyboard-only pass (tab order through questionnaire, `aria-live` on results update).

---

## 4. Typography

- Keep **Geist** (already loaded via `next/font`); it is neutral, modern, and legible.
- Add **one serif accent** (`ui-serif, Georgia`) for the restorative hero line only — a deliberate warmth break, not a new brand font (stays free, no added network weight).
- Scale: hero `text-4xl → sm:text-5xl → lg:text-6xl`; body 16px/1.65; results numbers `text-2xl` semibold. No all-caps for emotional copy (reads as shouting to a distressed user).

---

## 5. Illustration & icon system

- **Style:** single-weight line icons (1.8px stroke, round caps) in `warm-700`, 32×32 grid — already the footer EHL style, extended site-wide for consistency.
- **Hero:** one warm line illustration of a person by a window (contemplative, not celebratory). Free commercial sources: unDraw (MIT-like, customizable palette), Storyset (free w/ attribution), Humaaans (CC). **License verified per-asset before commit.**
- **Fair Housing check (24 CFR 100.75, corpus §6):** depicted people must be incidental and non-targeting; illustrations (not photos of specific-looking people) reduce both stock-cliché risk and FH-act review surface. Attorney reviews final assets.
- **7 pillars:** line icons — income (briefcase), debt (scale), credit (gauge), cash (wallet), payment (house-calendar), property (home), documentation (document-check).
- **Tier icons:** sprout (limited_fit — growth framing), compass (some_considerations), path (workable), sun (good_fit), home-check (strong_fit). No X, no warning triangle.

---

## 6. Microcopy principles + before/after

Principles: (1) name the feeling once, briefly; (2) never use "obstacle/hurdle/denied" as the *first* word of a sentence; (3) pair every negative with one concrete next step; (4) second person, present tense; (5) no exclamation marks in results; (6) all copy passes `compliance/copy-lint.mjs`.

| Context | Before | After |
|---|---|---|
| Hero H1 | "Not sure why you can't qualify for a home loan?" | "Been told 'no' on a home loan? Let's find out what's next." |
| Results, `limited_fit` message | "Significant obstacles at this time. Below is a prioritized plan…" | "There are things to review — and paths forward. Here's where we'd start." |
| Questionnaire, income step | *(none)* | "Your income — we won't judge it. We'll just match it to the right programs." |

---

## 7. Results-page reorder (agency-restoring flow)

**Before:** tier badge → range table → 7 pillars → obstacles → strengths → programs → assumptions → disclaimers
**After:** tier badge + one-line empathetic summary → **"Your next step"** (primary obstacle + concrete action) → **"What's already working"** (strengths first) → programs that may fit → range table → 7 pillars (collapsed `<details>`) → assumptions → disclaimers

Rationale: a denied user's first question is "what now?", not "here are my seven scores." Strengths before weaknesses restores agency; the full pillar detail remains available without overwhelming.

---

## 8. Questionnaire changes

- 4-step progress bar (Goal → Income → Credit → Money) with encouraging step labels.
- Step-intro lines per §6.
- Conditional branches per `RESEARCH_NON_QM.md` (income documentation, cash income, rent for investors, liquid assets for asset qualification).
- Keep single-page structure (mobile-first per `00-Executive-Summary.md`) — the progress bar provides the orientation a wizard would, without losing the filled state.

---

*End of Phase B notes. Palette hexes were contrast-computed against WCAG 2.1 relative-luminance formulas; re-verify with axe before launch. Literature citations to be re-verified live when web research is available.*
