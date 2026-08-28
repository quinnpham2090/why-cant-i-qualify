# Diagnostic Engine — File Index

This folder contains the spec for the consumer-facing mortgage qualification
diagnostic. There are two layers:

**Layer 1 — High-level overview (existing in project):**

- **`diagnostic-framework.md`** — Part 4 overview: philosophy, 7 pillars, basic
  formulas, obstacle logic, output structure, prohibitions. Use this for
  the "story" version of the engine. ~400 lines.

**Layer 2 — Deep implementation spec (added by this research pass):**

1. **`framework.md`** — citation-backed canonical reference. Sections:
   - §0 Source document citation key
   - §1 Minimum input schema
   - §2 Income readiness (W-2, self-employed, commission, variable, offers, 2-year rule)
   - §3 Debt readiness (DTI, per-debt treatment, FHA 43/56.9, conventional 36/45, USDA 29/41, VA residual income)
   - §4 Credit readiness (FICO bands, waiting periods, collections, late payments)
   - §5 Cash readiness (down payment, reserves, gift funds, cash to close)
   - §6 Payment affordability (PITI, tax/insurance, PMI/MIP, VA fee, USDA fee)
   - §7 Property readiness (SFR, condo warrantable/non, manufactured, co-op, HOA)
   - §8 Documentation complexity (full doc, bank statement, 1099, DSCR, asset depletion)
   - §9 Composite weights and tiers
   - §10 Uncertainty handling
   - §11 Output ranges and safety language
   - §12 Obstacle detection logic
   - §13 Prohibitions
   - §14 Open compliance questions

2. **`thresholds.md`**
   Machine-friendly lookup tables. 20 tables (T1–T20) covering every
   constant the engine needs: FICO bands, DTI caps, VA residual income, waiting
   periods, tax rates by state, MI rates, closing cost percentages, etc.
   Copy/paste these into a `constants.py`.

3. **`calculations.md`**
   The math. 13 sections covering qualifying income, per-debt monthly payment,
   PITI, max loan amount, max purchase price, reserves, cash to close, and
   output range construction. Includes a full worked example.

4. **`rule-engine-spec.md`**
   The deterministic spec. Pipeline architecture, input/output schemas, and
   per-stage pseudocode ready to port to TypeScript or Python. Includes a
   test fixture list (T1–T8) and a UI rendering requirements list.

## Quick Architecture

```
Inputs (user-provided)
   │
   ▼
normalize_inputs           haircut FICO by 20, default unknowns
   │
   ▼
calculate_qualifying_income  W-2, self-employed, commission, etc.
   │
   ▼
calculate_total_existing_debt  per-debt minimum treatment
   │
   ▼
estimate_tax_insurance_hoa   state-table, county-override, default HOA
   │
   ▼
build_credit_profile         FICO + waiting periods + late payments
   │
   ▼
determine_eligible_programs  conventional, FHA, VA, USDA, jumbo
   │
   ▼
compute_piti_estimates       principal+interest+tax+ins+MI
   │
   ▼
compute_affordable_price_range  bisection search across DTIs
   │
   ▼
compute_cash_to_close        down + closing + prepaids - credits
   │
   ▼
compute_sub_scores           7 sub-scores (income, debt, credit, cash, payment, property, docs)
   │
   ▼
compute_composite            weighted sum → tier
   │
   ▼
identify_obstacles           primary, secondary, strengths
   │
   ▼
compute_confidence           field-missing count
   │
   ▼
DiagnosticResult  ──►  UI renders headline, score grid, obstacles, ranges, disclaimers
```

## Citation Sources (used throughout)

- **Fannie Mae Selling Guide** — sellingguide.fanniemae.com (Part B Origination)
- **Freddie Mac Seller/Servicer Guide** — guide.freddiemac.com (Chapters 5101–5501)
- **HUD Handbook 4000.1** — Single Family Housing Policy Handbook
- **VA Lender's Handbook / VA Pamphlet 26-7** — VA Ch. 4 (income/residual), Ch. 5 (refi)
- **USDA HB-1-3555** — Chapter 11 (income, ratios)
- **CFPB** — TRID (RESPA-TILA), Ability-to-Repay
- **ECOA / Regulation B** — fair lending prohibitions
- **FCRA** — credit reporting and adverse action

## Open Items for Compliance (from framework.md §14)

- [ ] Disclaimer wording — sign-off from counsel
- [ ] Property tax data source for production
- [ ] Soft credit pull opt-in (must be separate session)
- [ ] VA / USDA affiliation disclaimer
- [ ] Lead routing consent (separate folder: `08-Lead-Scoring`)
- [ ] A/B testing plan for the "what if" re-runs (need delta-validated output)

## Quick Stats

- **Required input fields:** 9
- **Optional input fields:** 18
- **Sub-scores:** 7
- **Loan programs covered:** 5 (conventional conf, conventional jumbo, FHA, VA, USDA)
- **Output range:** always a 3-point range, never a single number
- **Confidence levels:** 3 (high / medium / low)
- **Composite tiers:** 5

— research subagent, v1.0
