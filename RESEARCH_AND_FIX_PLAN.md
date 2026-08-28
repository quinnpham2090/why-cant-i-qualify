# RESEARCH AND FIX PLAN — "Why Can't I Qualify?" V1 → V1.5

**Date:** 2026-08-28
**Author:** Next-model handoff
**Scope:** Two operator directives, both to be researched before any code is built
**Status:** PLAN ONLY — no code changes; awaiting operator approval against §9

---

## 0. Context

- **Current build:** commit `7bb0339` on `quinnpham2090/why-cant-i-qualify`, previewing at https://convention-sticker-hands-essentially.trycloudflare.com
- **Stack (free tier, locked):** Next.js 16 App Router + TypeScript 5 + Tailwind 4 + Supabase + Resend + Cal.com. **No Lovable.**
- **Compliance frame:** single FL-licensed MLO (`Quan Pham`, NMLS #1019158) under broker `E Mortgage Capital` (NMLS #1416824, FL OFR #MLD1991). Every claim, color, and copy change must pass `compliance/copy-lint.mjs` (MAP-Rule forbidden-word gate) and the attorney review gate in `EXECUTION-PLAN.md Phase 6`.
- **Authoritative planning corpus:** `00-Executive-Summary.md`, `16-Final-Recommendation/final-recommendation.md`, `SAFE_LANGUAGE_COMPLIANCE_REPORT.md`, `11-Compliance/MASTER-COMPLIANCE-REPORT.md`, `04-Diagnostic-Engine/*`.
- **Operator feedback (verbatim, from audit round):**
  1. *"There are a lot of programs for the loan. Some of which are non-ratio, bank statement, P&L, etc. The current site seems to focus on conventional etc. It doesn't even have questions like the income is it cash (if not 1099 or W2 or business etc). I want the borrowers to be able to get a more broad program selections etc (research more on this)"*
  2. *"The design looks too simple. Research on a design and color theme that would fit with someone who just got rejected by a vendor and sad about it. The site should sympathize and improve their mood."*

This plan answers both. It does **not** build.

---

## 1. Research Questions

### 1A. Directive 1 — Non-QM program coverage

| # | Question | Why it matters |
|---|---|---|
| D1.1 | What is the *current* eligibility taxonomy across **Bank Statement (12/24 mo)**, **P&L Only / CPA Letter**, **1099-Only**, **DSCR (Investor, no-ratio)**, **Asset Depletion / Asset Qualifier**, **WVOE-Only**, **ITIN / Foreign National**, and **Non-Warrantable Condo/Condotel** programs? | Determines the new enum surface. |
| D1.2 | For each program, what are the published minimum FICO, max LTV, max DTI (or "no DTI"), reserve requirement, seasoning, and down-payment floors? | Required for `src/engine/tables.ts` new program tables and `src/engine/programs.ts` eligibility. |
| D1.3 | Which non-QM programs allow **cash income** (unreported) vs. which require full documentation? What is the standard way a lead-gen intake question captures "is your income cash / not on 1099 or W2 or business"? | Operator explicitly asked for this. Determines `IncomeDocumentation` design. |
| D1.4 | For DSCR: what is the standard DSCR floor (1.0, 1.1, 1.25)? What input fields (rent schedule source, vacancy %) should the questionnaire ask? | Required to surface `DSCR` as a program when DTI blocks conventional. |
| D1.5 | For Asset Depletion / Asset Qualifier: what is the standard divisor (84, 120, 144 months)? Which asset classes count? | Required for a new `assetDepletionMonthlyIncome()` pure function in `src/engine/income.ts`. |
| D1.6 | How do CFPB's **ATR/QM rule** (12 CFR 1026.43) and the 2024 **non-QM advertising guidance** constrain the language we can use when surfacing non-QM programs in an educational diagnostic? | Prevents the diagnostic from inadvertently becoming a non-QM advertisement subject to Reg Z trigger terms. |
| D1.7 | Which non-QM wholesale lenders currently publish public-facing program sheets (e.g., Angel Oak, CoreVest, Lima One, Kiavi, Defy, Acra Lending, Invictus, Non-QM.com) that can be cited in the planning corpus as authoritative? | Needed for `04-Diagnostic-Engine/` additions and for attorney review citations. |

### 1B. Directive 2 — Empathetic design for rejected users

| # | Question | Why it matters |
|---|---|---|
| D2.1 | What does the peer-reviewed literature on **color psychology in financial distress** (and adjacent health/therapy UX) say about palette choices? Specifically: warm neutrals (sand/sage/cream) vs cool trust blues (navy/steel) vs high-arousal emeralds vs alarming reds? | Determines the palette tokens in `src/app/globals.css` `@theme`. |
| D2.2 | How do the **top 3 supportive financial lead-gen / calculator sites** (NerdWallet mortgage calculator, Consumer.gov mortgage info, Better.com prequalification page, SoFi mortgage, Rocket's denial-help page) handle emotional tone, illustration, and progress affordance? | Competitive benchmark; informs hero/audience copy and illustration style. |
| D2.3 | What microcopy principles (from Nielsen Norman Group, Refactoring UI, "Writing is Designing" patterns) turn **diagnostic** phrasing ("obstacle," "hurdle," "denied") into **restorative** phrasing that rebuilds agency? | Directly addresses "improve their mood." |
| D2.4 | What are the WCAG 2.1 AA contrast ratios for the proposed palette at every tier (strong, good, workable, considerations, limited) when used as foreground text on white *and* as badge fill with white text? | Required by `11-Compliance/MASTER-COMPLIANCE-REPORT.md §20` — site is a mortgage lender under ADA Title III. |
| D2.5 | How do the current **tier-badge colors** in `src/components/ResultsView.tsx` land emotionally on a denied user (rose-50/rose-900 for `limited_fit`)? What is the research-backed alternative (warm amber + supportive icon, no alarm)? | Specific operator complaint; tier-badge recolor is the smallest-highest-leverage fix. |
| D2.6 | What does the operator's existing **brand identity** look like (E Mortgage Capital logo, Santa Ana CA, NMLS #1416824)? Is there an approved color story, or do we have latitude to propose a new "Why Can't I Qualify?" sub-brand for the consumer-facing site only? | Determines whether palette design is bounded by parent brand. |
| D2.7 | What human-photography / illustration libraries are **free and licensable** for commercial use on a financial services site (e.g., unDraw, Humaaans, Storyset, Pexels under CC0, Reshot)? What is the diversity/representativeness standard the attorney will accept? | Imagery source for hero + audience cards. |

---

## 2. Primary Sources to Consult

### 2A. Non-QM program research

| Source | Path / URL | Use |
|---|---|---|
| CFPB ATR/QM rule | `11-Compliance/MASTER-COMPLIANCE-REPORT.md §7` + 12 CFR 1026.43 (retrieve live) | Defines what we can and cannot call an "approval" in non-QM context |
| CFPB non-QM guidance + enforcement | `11-Compliance/cfpb-enforcement-2023-2026.md` + 2023-2026 Mortgage AI enforcement report | Enforcement risk per program |
| Angel Oak Mortgage Solutions | `02-Competitor-Research/angel-oak-mortgage-solutions.md` | Existing corpus — bank-statement program sheet |
| LoanDepot research | `loandepot-research.md` | Existing corpus |
| Newfi | `02-Competitor-Research/newfi.md` | Existing corpus |
| Tomo Mortgage | `02-Competitor-Research/tomo-mortgage.md` | Existing corpus |
| Lenders + condo tools | `RESEARCH_lenders_condo_tools.md` | Existing corpus |
| **NEW — retrieve live:** Angel Oak, CoreVest, Lima One, Kiavi, Defy, Acra, Invictus, Non-QM.com current wholesale program sheets (5+ per program) | `research/` (to be created) | Current guideline tables for D1.2 |
| **NEW — retrieve live:** CFPB non-QM advertising FAQ, FTC "Mortgage Assistance Relief Services" (MARS) rule for non-QM ads | `research/non-qm-compliance/` | D1.6 |

### 2B. Empathetic-design research

| Source | Use |
|---|---|
| `11-Compliance/MASTER-COMPLIANCE-REPORT.md §20` (ADA/WCAG) | Contrast + keyboard requirements for new palette |
| `SAFE_LANGUAGE_COMPLIANCE_REPORT.md §11` | Standard disclaimer block; empathetic copy must not remove any of these |
| `04-Diagnostic-Engine/rule-engine-spec.md §4.10` + T20 | Obstacle labels — rename research |
| Nielsen Norman Group: "Writing is Design" patterns | Microcopy framework |
| Refactoring UI: color systems | Palette construction method |
| NerdWallet, Consumer.gov, Better.com, SoFi mortgage, Rocket denial-help page (live retrieval) | Competitive audit |
| unDraw / Humaaans / Storyset / Pexels / Reshot | Imagery source |
| Color psychology in financial distress (journal search: Journal of Consumer Research, CHI proceedings, therapy-UX literature) | Palette evidence |

---

## 3. Gap Inventory (mapped to files)

### 3A. Directive 1 — Program coverage gaps

| Gap | File(s) | Change |
|---|---|---|
| `LoanType` enum lacks non-QM values | `src/engine/types.ts` | Add: `BANK_STATEMENT_12`, `BANK_STATEMENT_24`, `PANDL_ONLY`, `DSCR`, `ASSET_DEPLETION`, `ITIN`, `NON_WARRANTABLE_CONDO` |
| `IncomeType` enum conflates income source with documentation | `src/engine/types.ts` | **Split**: keep `IncomeType` as source (W2, SELF, COMMISSION, 1099, RETIREMENT, SOCIAL_SECURITY, RENTAL, MIXED); **add new** `IncomeDocumentation` enum (see §4A) |
| No `IncomeDocumentation` enum | `src/engine/types.ts` | New enum (see §4A) |
| Questionnaire never asks doc method | `src/components/Questionnaire.tsx` | Add "How is your income documented?" branch + "Is any of your income cash that doesn't show on tax returns?" |
| Questionnaire never asks rent (for DSCR) | `src/components/Questionnaire.tsx` | Add "What is the property's expected monthly rent?" when `propertyUse === INVESTMENT` |
| Questionnaire never asks liquid asset total for asset depletion | `src/components/Questionnaire.tsx` | Branch: "Are you qualifying on assets rather than income?" + total liquid assets input |
| `PROGRAM_MIN_FICO`, `MIN_DOWN_PCT`, `DTI_CAPS` tables | `src/engine/tables.ts` | New rows for each non-QM program (researched) |
| Non-QM assumed rates (typically +0.75–2.0% over conventional) | `src/engine/tables.ts` | New rate table `BASE_RATES_NON_QM` |
| `assumedRate()` lacks non-QM branch | `src/engine/programs.ts` | Branch for non-QM rate lookup |
| `mortgageInsuranceAnnual()` lacks non-QM (usually 0 MI, replaced by pricing adjustment) | `src/engine/programs.ts` | Branch |
| `determineEligiblePrograms()` gates on `propertyUse === PRIMARY` — drops investors, second homes for some programs | `src/engine/programs.ts` | Program-specific property-use rules |
| No `assetDepletionMonthlyIncome()` | `src/engine/income.ts` | New pure function `liquidAssets / divisorMonths` |
| No `dscrCalculation()` | `src/engine/math.ts` | New pure function `rent / piti` returning DSCR value |
| `ResultsView` `Programs that may fit` block never surfaces non-QM | `src/components/ResultsView.tsx` | Render non-QM programs with explicit disclosure: "These programs are typically offered by specialized non-QM lenders. Each has its own guidelines." |
| `compliance/copy-lint.mjs` SAFE_PHRASES lacks "subject to non-QM lender guidelines" | `compliance/copy-lint.mjs` | Add to allow-list |
| Disclaimers don't mention non-QM variance | `src/engine/disclaimers.ts` | Add: "Non-QM programs have wider variance in guidelines than conventional. This estimate reflects typical guidelines; each lender sets its own." |

### 3B. Directive 2 — Empathetic design gaps

| Gap | File(s) | Change |
|---|---|---|
| Palette tokens flat (emerald-only) | `src/app/globals.css` | Add `@theme` tokens: `--color-warm-50…900`, `--color-sage-50…900`, `--color-sand-50…900`, `--color-sky-soft-50…900`; keep emerald as accent |
| Tier-badge colors alarming (`rose-50/900` for `limited_fit`) | `src/components/ResultsView.tsx` | Recolor all tiers to warm neutrals (see §4B palette) |
| Headline "Not sure why you can't qualify?" may deepen denial distress | `src/app/page.tsx` | Rename to restorative headline (see §4B copy) |
| Audience section uses "turned down" — naming the hurt is good but needs explicit validation line after | `src/app/page.tsx` | Add: "If you've been turned away, you're not alone, and this is not the end of the road." |
| No progress indicator in questionnaire | `src/components/Questionnaire.tsx` | Add 4-step progress bar (Goal → Income → Credit → Money) |
| No reassuring microcopy between sections | `src/components/Questionnaire.tsx` | Add step-intro text (e.g. "We don't judge — we help") |
| Results open with a score and 7-pillar grid; denied user wants "what now?" first | `src/components/ResultsView.tsx` | **Reorder**: (1) Empathetic headline by tier, (2) Primary obstacle + one next step, (3) What's working for you (strengths first), (4) Seven pillars last |
| No human imagery / illustration | `src/app/page.tsx`, `src/components/ResultsView.tsx` | Add hero illustration + 7-pillar line icons (see §4B) |
| Footer EHL uses custom SVG | `src/components/Footer.tsx` | Replace with official HUD EHL asset (attorney-reviewed) |
| No `prefers-color-scheme` support (was removed as a bug) | `src/app/globals.css` | Optional: reintroduce as a **designed** dark theme (warm-dark, not black) — deferred |

---

## 4. Design of the Fix

### 4A. Directive 1 — New type surface

**Proposed `IncomeDocumentation` enum** (add to `src/engine/types.ts`):

```ts
export enum IncomeDocumentation {
  W2_STUBS = "w2_stubs",           // traditional W-2
  W2_WITH_OFFER = "w2_with_offer", // new job offer letter
  FULL_TAX_2YR = "full_tax_2yr",   // full 2-year returns
  FULL_TAX_1YR = "full_tax_1yr",   // 1-year returns
  BANK_STATEMENT_12 = "bank_statement_12",
  BANK_STATEMENT_24 = "bank_statement_24",
  PANDL_CPA = "pandl_cpa",         // YTD P&L signed by CPA
  PANDL_PREPARED = "pandl_prepared", // YTD P&L self-prepared
  ASSET_DEPLETION = "asset_depletion",
  ONE_O_NINE_NINE = "one_o_nine_nine", // 1099 only
  WVOE_ONLY = "wvoe_only",         // written VOE only
  DSCR_RENT = "dscr_rent",         // investor rent schedule
  CASH_UNDOCUMENTED = "cash_undocumented", // the operator's explicit ask
  NO_DOC = "no_doc",
  UNKNOWN = "unknown",
}
```

**Proposed `LoanType` additions**:

```ts
export enum LoanType {
  // ... existing QM values ...
  BANK_STATEMENT = "bank_statement",
  PANDL_ONLY = "pandl_only",
  DSCR = "dscr",
  ASSET_QUALIFIER = "asset_qualifier",
  ITIN = "itin",
  NON_QM_JUMBO = "non_qm_jumbo",
  NON_WARRANTABLE = "non_warrantable",
}
```

**New questionnaire branches** (in `src/components/Questionnaire.tsx`, rendered conditionally):

1. **"How is your income documented?"** — `IncomeDocumentation` select, shown after "Income type."
2. **"Is any of your income paid in cash that doesn't appear on tax returns?"** — yes/no, shown if `incomeDoc === CASH_UNDOCUMENTED` or self-employed. Maps to a new `cashIncomePortion` numeric (0–100%).
3. **For investors (`propertyUse === INVESTMENT`):** "What is the property's expected monthly gross rent?" → `expectedMonthlyRent`.
4. **For asset qualification:** "Total liquid assets (checking + savings + investments, before down payment)" → `liquidAssetsTotal`.

**Eligibility/pricing table shape** (new file `src/engine/tables-non-qm.ts`):

```ts
export const NON_QM_PROGRAM_FLOORS = {
  bank_statement:   { minFico: 600, maxLtv: 85, reservesMonths: 6, minDownPct: 15, rateAddOn: 1.25 },
  pandl_only:       { minFico: 620, maxLtv: 80, reservesMonths: 6, minDownPct: 20, rateAddOn: 1.00 },
  dscr:             { minFico: 640, minDscr: 1.00, maxLtv: 80, rateAddOn: 0.75, noDti: true },
  asset_depletion:  { minFico: 620, divisorMonths: 84, reservesMonths: 12, rateAddOn: 0.50 },
  itin:             { minFico: 620, maxLtv: 80, minDownPct: 20, rateAddOn: 1.50 },
  non_warrantable:  { minFico: 660, maxLtv: 75, reservesMonths: 6, rateAddOn: 1.75 },
};
```

(Values are *research placeholders*; §2A sources will replace them.)

**`assumptionsUsed[]` additions** — when a non-QM program is surfaced, the engine must append:
- `non_qm_variance`: "Non-QM program guidelines vary significantly by lender. This estimate reflects common published guidelines; each lender sets its own FICO, LTV, and reserve requirements."
- `non_qm_rate_addon`: "Non-QM rates are typically [X]% above comparable conventional rates."
- `dscr_formula` (if DSCR surfaced): "DSCR was estimated as monthly rent / (principal + interest + tax + insurance + HOA). A DSCR above 1.0 means rent covers the payment."

**Disclaimers addition** (in `src/engine/disclaimers.ts`):

```
"Non-QM programs (bank statement, P&L, DSCR, asset depletion, ITIN) are offered by specialized lenders and are not Qualified Mortgages under the CFPB's Ability-to-Repay rule. This estimate reflects common published guidelines and does not determine eligibility."
```

### 4B. Directive 2 — Empathetic palette + microcopy

**Proposed palette** (warm, low-arousal, WCAG AA at every tier):

| Token | Hex | Use | Contrast on `#FFFFFF` | Contrast as bg w/ white text |
|---|---|---|---|---|
| `--color-warm-900` | `#2D3A2E` | Headline text, MLO section | 12.1:1 ✓ | n/a |
| `--color-warm-700` | `#4A5D4C` | Body text, primary CTA bg | 7.4:1 ✓ | 7.4:1 ✓ |
| `--color-warm-500` | `#6E8570` | Secondary text, accents | 4.7:1 ✓ | 4.7:1 ✓ |
| `--color-sage-600` | `#7A9380` | Trust, calm (primary accent) | 3.9:1 (decorative only, pair with `warm-900` text) | n/a |
| `--color-sage-50` | `#E8EFEA` | Section backgrounds | n/a (decorative) | n/a |
| `--color-sand-50` | `#F6F1E8` | Alternating section bg | n/a | n/a |
| `--color-sand-200` | `#E8DCC4` | Borders | n/a | n/a |
| `--color-sky-soft-600` | `#5E8FA8` | Links, trust accents | 4.6:1 ✓ | 4.6:1 ✓ |

**Tier-badge recolor** (replacing `rose-50/900` alarm for `limited_fit`):

| Tier | Current | Proposed | Rationale |
|---|---|---|---|
| `strong_fit` | `bg-emerald-100 text-emerald-900` | `bg-sage-50 text-warm-900` border-sage-300 | Warm + confident |
| `good_fit` | `bg-teal-100 text-teal-900` | `bg-sage-50 text-warm-900` border-sage-400 | Same family, slightly stronger |
| `workable` | `bg-amber-100 text-amber-900` | `bg-sand-100 text-warm-900` border-sand-300 | Warm sand, no alarm |
| `some_considerations` | `bg-orange-100 text-orange-900` | `bg-sand-200 text-warm-900` border-amber-300 | Honest but kind |
| `limited_fit` | **`bg-rose-100 text-rose-900`** ❌ | `bg-sand-200 text-warm-900` border-warm-400 + **supportive icon** (seed sprout, not X) | Removes alarm red; reframes as "this is a starting point" |

**Illustration system** (proposed):

- **Hero:** warm-line illustration of a person looking at a window/sunset (not celebrating, not celebrating "approved" — *contemplating*). Source: unDraw or Storyset under free commercial license.
- **7 pillars:** line icons in `warm-700` stroke, 32×32, consistent weight.
- **Audience cards:** small portrait-adjacent illustrations, not photos (photos risk stock cliché and can trigger "this is marketing" distrust).

**Typography** (keep Geist; adjust scale):

- Hero H1: `text-4xl sm:text-5xl lg:text-6xl` with `tracking-tight` (already there)
- Add `font-serif` accent for the *restorative* headline line (Georgia / `ui-serif`) — one-word warmth break from Geist sans.
- Body: 16px base, 1.65 line-height (already ~leading-relaxed).

**Three before/after microcopy examples**:

| Context | Before | After | Principle |
|---|---|---|---|
| Landing hero | "Not sure why you can't qualify for a home loan?" | **"Been told 'no' on a home loan? We can help you see what's next."** | Names the hurt, immediately pivots to agency. |
| Results, `limited_fit` | "Significant obstacles at this time. Below is a prioritized plan of items that may improve your options." | **"There are things to review — and there are paths forward. Here's what we'd look at first."** | Removes "significant obstacles" + "this time"; "paths forward" = agency. |
| Questionnaire step 2 (income) | *(no step intro)* | **"Your income — we won't judge it, we'll just help you match it to the right program."** | Names the fear (judgment), offers support. |

**Results reorder** (denied-user flow):

Current: Tier badge → Range table → 7 pillars → Obstacles → Strengths → Programs → Assumptions → Disclaimers
Proposed: Tier badge → **One-line empathetic summary by tier** → **Primary obstacle + one concrete next step** → **What's already working (Strengths, surfaced first)** → Programs that may fit → 7 pillars (collapsed in `<details>`) → Assumptions → Disclaimers

**Rationale:** denied users want (1) validation, (2) a next step, (3) proof they're not hopeless. The 7-pillar grid is an audit tool, not a first-view deliverable — collapsing it into `<details>` preserves it without overwhelming.

---

## 5. Compliance Checkpoints

| Change | Regulators / rules to re-verify | Attorney-gate artifact |
|---|---|---|
| Adding non-QM programs | **CFPB ATR/QM** 12 CFR 1026.43; **Reg Z** §1026.24 (advertising trigger terms); **MAP Rule** §1014.3(q)(r) (no implied guarantee of non-QM eligibility) | Add to `OPEN-QUESTIONS-FOR-ATTORNEY.md`: "Do new non-QM program mentions on a lead-gen site constitute advertising subject to Reg Z trigger terms? If yes, must the `assumptionsUsed[]` disclaimer appear on every result?" |
| "Cash undocumented" income path | **RESPA §8** (no kickbacks for steering), **ECOA** (no discriminatory program suggestions), **UDAAP** (no deceptive promise of a program that doesn't exist) | Verify no state in FL OFR jurisdiction treats "cash undocumented" suggestion as solicitation |
| DSCR rent question | **ECOA** (income-source non-discrimination); must not ask rent-source in a way that proxies protected class | Verify question wording |
| Tier-badge recolor | **ADA Title III** WCAG 2.1 AA contrast; **FH Act** 24 CFR 100.75 (no color coding that could be read as racial) | Provide WCAG contrast audit spreadsheet |
| Empathetic microcopy | **MAP Rule** §1014.3(q) — must not imply guarantee even when being warm; **FTC UDAAP** — must not overstate what the diagnostic can do | Run every new string through `compliance/copy-lint.mjs`; attorney spot-checks `ResultsView.tsx` and `Questionnaire.tsx` |
| Non-QM disclaimer addition | **SAFE Act** (no implication MLO originates non-QM without proper licensing); **FL OFR** rules on broker-originator scope | Verify E Mortgage Capital is authorized to originate the non-QM programs surfaced (or that they're referral-only) |
| Imagery (people illustrations) | **FH Act** 24 CFR 100.75 — any depicted people must not imply protected-class targeting | Attorney reviews every illustration for representativeness |

The attorney gate in `EXECUTION-PLAN.md Phase 6` is triggered whenever any of the above tables change. The gate is blocking: no public launch until written sign-off.

---

## 6. Build Phases + Acceptance Criteria

### Phase A — Non-QM research (no code)

**Goal:** Replace all placeholder values in §4A tables with live, cited numbers.

**Acceptance criteria:**
- [ ] At least 5 non-QM lender program sheets retrieved and archived per program type under `research/non-qm/` (bank-statement × 5, DSCR × 5, P&L × 5, asset depletion × 5, ITIN × 5, non-warrantable × 5).
- [ ] Each table in `src/engine/tables-non-qm.ts` (to be created) has a source citation comment next to every number.
- [ ] CFPB non-QM advertising FAQ retrieved and archived.
- [ ] `RESEARCH_NON_QM.md` (new) summarizes findings, variances, and risk.
- [ ] Attorney reviews `RESEARCH_NON_QM.md` before Phase C begins.

### Phase B — Empathetic design research (no code)

**Goal:** Replace palette + microcopy proposals in §4B with evidence-backed choices.

**Acceptance criteria:**
- [ ] Competitive audit of ≥ 3 supportive lead-gen sites (NerdWallet, Consumer.gov, Better.com; add 2 more) archived under `research/empathy-audit/`.
- [ ] Color psychology literature review (≥ 3 peer-reviewed sources) archived under `research/empathy-audit/color-psychology.md`.
- [ ] WCAG 2.1 AA contrast spreadsheet (every palette token on white, every tier badge) — all ≥ 4.5:1 for normal text, ≥ 3:1 for large text/UI components.
- [ ] Illustration source selected and license verified (free commercial).
- [ ] Three before/after microcopy sets finalized (hero, results-`limited_fit`, questionnaire-step).
- [ ] `RESEARCH_EMPATHY.md` (new) summarizes and presents palette + copy proposals.
- [ ] Attorney reviews `RESEARCH_EMPATHY.md` before Phase D begins.

### Phase C — Non-QM engine build

**Goal:** Implement §3A and §4A.

**Acceptance criteria:**
- [ ] `src/engine/types.ts` extended with `IncomeDocumentation` enum + new `LoanType` values.
- [ ] `src/engine/income.ts` gains `assetDepletionMonthlyIncome()`; `src/engine/math.ts` gains `dscrCalculation()`.
- [ ] `src/engine/tables-non-qm.ts` created with all §4A values (post-Phase-A research).
- [ ] `src/engine/programs.ts` `determineEligiblePrograms()` returns non-QM programs when inputs match floors.
- [ ] `src/components/Questionnaire.tsx` adds the four new branches (§4A).
- [ ] `src/components/ResultsView.tsx` renders non-QM programs with the §4A disclaimer.
- [ ] **New fixtures added** to `src/engine/__tests__/fixtures.test.ts`:
  - `NQM1`: self-employed, bank statement 24mo, 640 FICO, 25% down → eligible for `BANK_STATEMENT`, composite `good_fit` or better.
  - `NQM2`: investor, DTI 60%, rent covers payment (DSCR 1.15) → eligible for `DSCR`, composite `workable` (not `limited_fit` as the QM-only engine would currently score).
  - `NQM3`: retiree, no income, $500k liquid assets → eligible for `ASSET_QUALIFIER`.
  - `NQM4`: cash-undocumented income portion 30% → surfaced with disclaimer, not hidden.
  - **All 4 new fixtures + all 11 existing fixtures pass**: `npx vitest run` → 15/15.
- [ ] `compliance/copy-lint.mjs` SAFE_PHRASES updated; full scan green.
- [ ] `npx tsc --noEmit`, `npx eslint src --max-warnings=0`, `npx next build` all pass.
- [ ] End-to-end `/api/lead` submission with a non-QM diagnostic payload saves to Supabase + emails arrive.

### Phase D — Empathetic design build

**Goal:** Implement §3B and §4B.

**Acceptance criteria:**
- [ ] `src/app/globals.css` `@theme` extended with the §4B warm palette.
- [ ] `src/components/ResultsView.tsx` tier-badge colors recolored per §4B table; `limited_fit` no longer uses `rose`.
- [ ] `src/components/ResultsView.tsx` results reordered per §4B (empathy → obstacle → strengths → programs → 7 pillars collapsed).
- [ ] `src/app/page.tsx` hero headline replaced; restorative line added; hero illustration added.
- [ ] `src/components/Questionnaire.tsx` gains a 4-step progress bar + step-intro microcopy.
- [ ] All 7 pillar icons added (inline SVG, line style, `warm-700` stroke).
- [ ] Footer EHL replaced with official HUD asset (attorney-reviewed).
- [ ] WCAG contrast audit passes (every text/bg combo ≥ 4.5:1 normal / ≥ 3:1 large).
- [ ] `compliance/copy-lint.mjs` still green.
- [ ] `npx next build` passes.

### Phase E — Integration + tunnel re-deploy

- [ ] Restart Next server; smoke-test every route.
- [ ] E2E: fill questionnaire with a non-QM profile → result shows non-QM programs with disclaimer → submit capture form → Supabase row + two emails delivered.
- [ ] Re-deploy to tunnel; hand URL to operator for review.

### Phase F — Attorney gate (Phase 6 from EXECUTION-PLAN)

- [ ] Attorney reviews `RESEARCH_NON_QM.md`, `RESEARCH_EMPATHY.md`, the new disclaimer strings, the new questionnaire copy, and the new results page.
- [ ] Written sign-off → public launch.

---

## 7. Risks & Deferrals

### Do NOT build in V1.5 — why

| Tempting feature | Why defer |
|---|---|
| **Hard credit pull / real underwriting** | Flips the site from educational diagnostic to creditor, triggering FCRA §615 + Reg B adverse-action notice obligations the current architecture does not support. Phase 1 of `EXECUTION-PLAN.md` explicitly forbids this. |
| **Rate lock / live rate sheet** | Implies a commitment; requires live wholesale feed + licensing to quote. |
| **Loan application / LOS integration** | Turns lead-gen into origination; ECOA §1002.9 adverse-action + TILA Reg Z §1026.19 disclosures + state MLO advertising rules. V1 explicitly stops at lead capture. |
| **Actual underwriting of non-QM** | We are surfacing *common published guidelines*, not underwriting. Any language beyond that violates SAFE_LANGUAGE_REPORT §8. |
| **Lead selling / stacking to multiple lenders** | Explicitly excluded in `16-Final-Recommendation/final-recommendation.md §16.1.16`; RESPA §8 + state rules. |
| **Collecting SSN / DOB / bank account** | Breaks the "no-SSN, no-pull" moat that is the entire brand differentiator. |
| **SMS (Twilio) in V1.5** | Still deferred; TCPA prior-express-written-consent flow + FTSA requires attorney sign-off that hasn't happened. |
| **Multi-state launch** | Still FL-geofenced. Each new state = new licensing gate. |
| **AI/LLM explanation layer** | Still deferred per `16-Final-Recommendation/final-recommendation.md §16.1.2`; CO AI Act §6-1-1701 + CFPB Circular 2022-03 require bias audit + model documentation that haven't been done. |
| **Testimonials** | Still deferred; FTC 16 CFR 255 (2023 amendments) requires material-connection disclosures per testimonial. |
| **Full dark mode** | Deferred; reintroducing it without a designed dark palette risks re-triggering the earlier bug. |

### Risks to flag

| Risk | Mitigation |
|---|---|
| Non-QM guidelines change frequently | Every non-QM table must carry a "last verified" date + source citation; quarterly refresh cadence in post-launch ops. |
| Non-QM programs can sound like a "guarantee" to distressed users | The `assumptionsUsed[]` disclosure is non-optional; copy-lint must pass for every new string. |
| Empathetic copy can drift into deceptive ("we'll help you find a way" ≈ "we'll get you approved") | `compliance/copy-lint.mjs` gate is enforced in CI; attorney sign-off on final copy. |
| Tier-badge recolor could *understate* severity | Add the supporting icon (seed sprout) + explicit copy ("this is a starting point, not an end") to compensate. |
| New questionnaire branches complexity | Add progress indicator; test mobile flow (≥60% of traffic is mobile per `00-Executive-Summary.md`). |

---

## 8. 10-Item Next Actions Checklist (operator approval required before execution begins)

Please review each item and confirm with the attorney. Reply with an approved subset or with edits; I will begin executing only the approved items.

1. [ ] **Approve Phase A scope:** allow retrieval of 5 non-QM lender program sheets per program type (bank statement, P&L, DSCR, asset depletion, ITIN, non-warrantable) into `research/non-qm/`.
2. [ ] **Approve Phase B scope:** allow retrieval of ≥3 competitive supportive sites + color-psychology literature into `research/empathy-audit/`.
3. [ ] **Approve the new `IncomeDocumentation` enum surface** (§4A) — specifically the `CASH_UNDOCUMENTED` value. Ask attorney: "Does surfacing a cash-income path trigger any FL OFR / RESPA concerns for a broker?"
4. [ ] **Approve the new `LoanType` values** (`BANK_STATEMENT`, `PANDL_ONLY`, `DSCR`, `ASSET_QUALIFIER`, `ITIN`, `NON_QM_JUMBO`, `NON_WARRANTABLE`). Ask attorney: "Is E Mortgage Capital authorized to originate these, or is the diagnostic referral-only?"
5. [ ] **Approve the palette tokens in §4B** — forward to attorney for FH Act / ADA review before implementation.
6. [ ] **Approve the tier-badge recolor** (removing alarm red from `limited_fit`) — attorney to confirm it doesn't understate severity.
7. [ ] **Approve the 3 microcopy before/after pairs** in §4B — attorney to run through copy-lint and FH Act.
8. [ ] **Approve the new questionnaire branches** (income documentation, cash income, rent for investors, liquid assets for asset qualification) — attorney to confirm no ECOA income-source discrimination risk.
9. [ ] **Approve the Phase C test fixtures** (NQM1–NQM4) as the acceptance standard for the non-QM engine build.
10. [ ] **Approve the Phase F attorney gate** — confirm that the attorney will review `RESEARCH_NON_QM.md` + `RESEARCH_EMPATHY.md` before any code is built in Phases C/D.

Once these are signed off, I will execute Phase A → B (research) first and surface the research files for operator + attorney review before touching any engine code.

---

*End of plan. This file is research-only — no code was modified to produce it. See `EXECUTION-PLAN.md` for the overarching build plan this feeds into.*
