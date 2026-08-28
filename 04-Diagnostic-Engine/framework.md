# Mortgage Qualification Diagnostic Framework

> **Purpose.** This document defines a deterministic, citation-grounded framework for a
> consumer-facing *educational* mortgage readiness assessment. It is **not underwriting**,
> does **not** pull credit, and produces **non-binding, preliminary** results.
>
> **Audience.** Product, engineering, and compliance reviewers building the
> "Why am I denied?" diagnostic engine.
>
> **Scope.** Conventional (Conf conforming / jumbo), FHA, VA, USDA.
> Excludes reverse mortgages, HELOCs, construction-only, and non-QM unless explicitly
> called out.
>
> **Status.** v1.0 — author: research subagent. To be reviewed by compliance lead
> before public launch.

---

## 0. Source Documents (Citation Key)

All rules in this framework trace back to one or more of the following primary sources.
Inline citations use the bracketed keys.

| Key | Document | Issuer | URL |
|---|---|---|---|
| **[FNMA]** | Fannie Mae *Single Family Selling Guide* (current version, Part B Origination) | Fannie Mae (Federal National Mortgage Association) | sellingguide.fanniemae.com |
| **[FHLMC]** | Freddie Mac *Single-Family Seller/Servicer Guide* (current version, Chapters 5101–5501) | Freddie Mac (Federal Home Loan Mortgage Corporation) | guide.freddiemac.com |
| **[FHA]** | HUD Handbook 4000.1 *Single Family Housing Policy Handbook* (current version) | U.S. Department of Housing and Urban Development / FHA | portal.hud.gov / hudexchange.info |
| **[VA]** | VA Lender's Handbook, VA Pamphlet 26-7 (current chapters) | U.S. Department of Veterans Affairs | benefits.va.gov / vetsuccess.gov |
| **[USDA]** | USDA Single Family Housing Guaranteed Loan Program Technical Handbook HB-1-3555 (current chapter 11) | USDA Rural Development | rd.usda.gov |
| **[CFPB]** | TILA-RESPA Integrated Disclosure (TRID) and Ability-to-Repay (ATR) rules | Consumer Financial Protection Bureau | consumerfinance.gov |
| **[HMDA]** | Regulation C (12 CFR 1003) | CFPB | consumerfinance.gov |
| **[ECOA]** | Regulation B (12 CFR 1002) — Equal Credit Opportunity Act | CFPB | consumerfinance.gov |
| **[FCRA]** | Fair Credit Reporting Act (15 USC 1681) | FTC | consumerfinance.gov |

> **Important compliance note.** The framework must never claim to be a "qualification"
> or "pre-approval". Language must consistently be **preliminary, educational, illustrative**.
> See §11.

---

## 1. Minimum Information Required (Input Schema)

A useful preliminary assessment can be produced with the fields below. The diagnostic
must work in a **degraded but honest** way when fields are missing — see §10 for
uncertainty handling.

### 1.1 Required (engine cannot run without)

| Field | Type | Why it is required |
|---|---|---|
| `loan_purpose` | enum: `purchase` \| `refinance_rate_term` \| `refinance_cash_out` | Determines which rule set (LTV limits, seasoning) applies |
| `property_use` | enum: `primary` \| `second_home` \| `investment` | Most loan programs only allow primary residence; second-home has tighter DTI; investment uses DSCR/rental income rules |
| `loan_type` | enum: `conventional_conf` \| `conventional_jumbo` \| `fha` \| `va` \| `usda` \| `unknown` | Determines FICO floor, DTI caps, MI/MIP/RIP/PMI, reserves |
| `gross_monthly_income` | number (USD) | Drives every affordability calculation |
| `income_type` | enum: `w2` \| `self_employed` \| `commission` \| `variable_hourly` \| `retired_fixed` \| `social_security` \| `mixed` \| `unknown` | Drives how income is *qualified* (W-2 base vs. 2-year average vs. less conservative treatment) |
| `credit_score_self_reported` | int (300–850) or `unknown` | Loan-program eligibility gate |
| `total_monthly_debt_payments` | number (USD) — including the proposed new PITI | DTI denominator |
| `down_payment_available` | number (USD) | Cash readiness + LTV |
| `target_purchase_price` | number (USD) — or `unknown` | PITI estimation + LTV |

### 1.2 Strongly Recommended (engine still runs, but bands widen)

| Field | Type | Why it helps |
|---|---|---|
| `estimated_home_value` | number | For refinance LTV |
| `state` | US state code | Property tax + insurance vary 3–4× by state |
| `property_type` | enum: `sfr` \| `condo_warrantable` \| `condo_nonwarrantable` \| `townhome` \| `manufactured` \| `multi_2_4` \| `unknown` | Triggers FHA condo approval / non-warrantable condo gates |
| `credit_event_history` | enum + years-since: `none` \| `bk_ch7` \| `bk_ch13` \| `foreclosure` \| `short_sale` \| `deeds_in_lieu` \| `modification` | Waiting period gate |
| `liquid_assets_after_close` | number (USD) | Reserves test |
| `employment_years_in_field` | number | 2-year rule |
| `has_hoa` | bool | HOA dues must be included in DTI; condo approval gating |
| `is_first_time_buyer` | bool | Some programs reduce down-payment requirements (FHA, USDA, state HFA) |

### 1.3 Optional (enriches output but not gating)

| Field | Type |
|---|---|
| `gift_funds_available` | number |
| `expected_closing_costs_pct` | number (0–10) — user-supplied override |
| `current_rent_payment` | number (payment shock context) |
| `co_borrower_income` | number |
| `co_borrower_credit` | int |
| `child_support_alimony_paid` | number |
| `child_support_alimony_received` | number |

### 1.4 Explicitly Collected for Compliance, Not Used in Math

| Field | Reason |
|---|---|
| `race_ethnicity` (optional) | ECOA / HMDA — must be voluntary, not used in decisioning |
| `sex` | ECOA — voluntary |
| `age` (optional) | ECOA — for HMDA only |
| `consent_to_soft_pull` | If "no", engine must NOT call any credit bureau |

---

## 2. Income Readiness

### 2.1 What Counts as Qualifying Income — General Rule

Per **[FNMA] B3-3**, **[FHLMC] 5301.1**, **[FHA] II.A.4**, **[VA] Chapter 4**, and
**[USDA] Chapter 11**, only income that is **stable, likely to continue, and
documentable** can be used. The framework maps user-reported income to a
**"qualifying income"** number using these heuristics:

| Income type | Qualifying treatment | Citation |
|---|---|---|
| **W-2 base salary** | Gross monthly = annual ÷ 12. If overtime, bonus, commission is < 25% of base, can be added; otherwise must be 2-year averaged. | [FNMA] B3-3.1-01, [FHA] II.A.4.c |
| **Self-employed (≥ 25% ownership)** | Use **2-year average net income** from personal + business returns (Schedule C / K-1 / 1120-S / 1065). Add back depreciation, amortization, business use of home, meals, one-time losses. | [FNMA] B3-3.2-01, [FHLMC] 5301.2, [FHA] II.A.4.b |
| **Commission** (>25% of total) | 2-year average | [FNMA] B3-3.1-02 |
| **Variable hourly / shift / seasonal** | 2-year average; must show likely continuation | [FNMA] B3-3.1-01 |
| **Retirement / pension / Social Security** | Use award letter or current 1099-R / SSA-1099. Treat as stable if documented. | [FNMA] B3-3.1-09 |
| **Alimony / child support received** | Only if court-ordered AND ≥ 3 years remaining AND borrower can prove receipt. | [FNMA] B3-3.1-08, [FHA] II.A.4 |
| **Rental income on departing residence** (purchase of new primary) | 75% of gross rent less vacancy; for investment property use 75% of rent less PITI. | [FNMA] B3-3.1-08, [FHLMC] 5301.1 |
| **VA / military income** | Use LES (Leave and Earnings Statement). BAS/BAQ/BAH housing allowance can be grossed up for VA residual income calc but not for DTI. | [VA] Chapter 4 |
| **Non-taxable income** (e.g., child support, some disability) | May be grossed up at 25% for DTI if documented and continuing ≥ 3 years. | [FNMA] B3-3.1-01, [FHA] II.A.4 |

### 2.2 Job Tenure — "The 2-Year Rule"

| Situation | Treatment | Citation |
|---|---|---|
| Same job, same field, 2+ years | Use current income | [FNMA] B3-3.1-01 |
| Same job < 2 years but in same field 2+ years | Usually OK; lender will request written explanation | [FNMA] B3-3.1-01 |
| Job change in last 30 days | Income cannot be used until on new job ≥ 30 days (FHA sometimes more lenient) | [FNMA] B3-3.1-01 |
| **Employment offer (not yet started)** | Allowed if: (1) non-contingent offer letter, (2) salary is stated, (3) start date within 60–90 days. Use stated salary. | [FNMA] B3-3.1-02, [FHA] II.A.4 |
| **Gaps in employment > 30 days** in last 2 years | Must be explained in writing; FHA generally more flexible than conventional | [FNMA] B3-3.1-01, [FHA] II.A.4 |
| Probation period | Most lenders will not use income until probation complete; VA sometimes tolerates | [VA] Chapter 4 |

### 2.3 Income Readiness Diagnostic Thresholds

Mapping user input to a **sub-score (0–100)**:

| Condition | Sub-score |
|---|---|
| W-2, same job ≥ 2 years, stable field | 95 |
| W-2, same field, 1–2 years | 80 |
| W-2 with documented OT/bonus, 2-year average | 85 |
| Self-employed, 2-year tax returns, stable industry | 70 |
| Self-employed, only 1 year of returns | 50 (gate: most programs require 2 years) |
| Commission > 25%, 2-year average | 75 |
| Variable/seasonal, 2-year average | 70 |
| New job offer, non-contingent | 65 |
| Self-employed "unsure" or inconsistent YoY | 40 |
| Reported income < 50% of typical for stated occupation | 30 (red flag) |
| No income documentation available / relying on "cash" | 15 |

**Red-flag trigger language:** "Self-employed income is the #1 reason preliminary
estimates differ from final approval. We are using a conservative average."

---

## 3. Debt Readiness

### 3.1 DTI Definitions

- **Front-end ratio (housing ratio):** Proposed PITI ÷ gross monthly income.
- **Back-end ratio (total debt ratio):** (PITI + all other monthly debts) ÷ gross monthly income.
- "All other monthly debts" = every recurring obligation reported on credit report
  + legally obligated payments not on credit report (alimony, child support, etc.).

### 3.2 How Each Monthly Debt Is Computed

| Debt | Treatment | Citation |
|---|---|---|
| **Credit cards** | Use the **greater of** minimum payment due or 5% of outstanding balance. ($10,000 balance = $500/mo, not $200 min.) | [FNMA] B3-6-05, [FHLMC] 5401.2, [FHA] II.A.5.b |
| **Revolving lines (HELOC, signature)** | Same — greater of min or 5% | Same |
| **Auto loans** | Use actual monthly payment from credit report | [FNMA] B3-6-05 |
| **Student loans — in repayment** | Use actual payment per credit report or student loan statement | [FNMA] B3-6-05 |
| **Student loans — in deferment/forbearance** | Use **greater of** (a) 1% of outstanding balance, or (b) the documented fully-amortizing payment. This was updated in late 2024. | [FNMA] B3-6-05 (12/2024 update), [FHA] II.A.5.b |
| **Child support / alimony (legally obligated)** | Use court-ordered amount, regardless of payment status. **If > 10 months behind** the debt is excluded from DTI but creates a severe credit issue. | [FNMA] B3-6-05, [FHA] II.A.5 |
| **Collections / judgments** | If > $2,000 and not paid before closing, must be paid down to ≤ $2,000 OR a payment plan in place ≥ 3 months. | [FNMA] B3-6-05, [FHA] II.A.5 |
| **30-day accounts (e.g., American Express "Pay in Full")** | Excluded if balance paid in full each month | [FNMA] B3-6-05 |
| **Co-signed loans** | Include if borrower is primary; exclude if secondary and other party has ≥ 12 months documented on-time payments | [FNMA] B3-6-05 |
| **Childcare / private school** | Generally **not** included (not reported on credit) | Industry convention |
| **Proposed new PITI** | Always included in the numerator | All |

### 3.3 DTI Caps by Program

| Program | Front-end cap | Back-end cap | Notes / Citation |
|---|---|---|---|
| **Conventional conforming** (Fannie / Freddie) | 28% (baseline) | **36% (baseline)** | Up to 45% allowed with strong compensating factors (high FICO, reserves, low LTV) — [FNMA] B3-6-04, [FHLMC] 5401.1 |
| **FHA** | 31% (baseline) | **43%** baseline, **56.9%** with AUS approval (DU/LP "approve/eligible") | [FHA] II.A.5 — 56.9% is *not* a hard ceiling; it's a calculated ceiling based on the AUS (DU/LP) finding, with required compensating factors |
| **VA** | No hard cap on DTI | No hard cap on DTI | Uses **residual income** as primary test; lender overlay often imposes a 41–55% DTI limit | [VA] Chapter 4 |
| **USDA** | **29%** baseline, **32%** with strong factors | **41%** baseline, **44%** with strong factors | [USDA] Chapter 11 |
| **Jumbo** | Typically 28–33% | Typically 36–43%, varies by lender | Lender-specific; very tight |
| **FHA streamline refi** | N/A | N/A (no DTI recalc) | [FHA] II.A.5 |
| **VA IRRRL** | N/A | N/A (no DTI recalc) | [VA] Chapter 5 |

### 3.4 VA Residual Income (Primary Test)

**[VA] Chapter 4, Residual Income Method.** Regardless of DTI, VA-approved loan
must leave the borrower with residual income ≥ table value, based on family size
and region. Loan is denied if residual income falls short *and* DTI > 41%.

| Family size | Residual income (Northeast / Midwest / South) | Residual income (West) |
|---|---|---|
| 1 | $450 | $540 |
| 2 | $755 | $903 |
| 3 | $909 | $1,083 |
| 4 | $1,025 | $1,222 |
| 5 | $1,062 | $1,261 |
| Over 5 | add $75 per person (NE/MW/S) or $90 (W) | |

*Numbers above are illustrative and rounded. The actual values in [VA] Chapter 4
are updated periodically.*

### 3.5 Debt Readiness Diagnostic Thresholds

| Back-end DTI | Tier | Diagnostic sub-score |
|---|---|---|
| < 30% | Excellent | 100 |
| 30–36% | Strong | 90 |
| 36–43% | Workable | 75 |
| 43–50% | Stretched — needs compensating factors | 50 |
| 50–55% | Likely obstacle for conventional/USDA; possible for FHA with AUS approval | 30 |
| > 55% | Obstacle for nearly all programs except high-DTI non-QM | 15 |

**Note on PITI estimation** — see §6 for the full breakdown.

---

## 4. Credit Readiness

### 4.1 Minimum FICO by Loan Type

| Loan type | Minimum FICO | Citation |
|---|---|---|
| **FHA** | **580** for 3.5% down; **500–579** for 10% down; < 500 generally ineligible | [FHA] II.A.5.a |
| **VA** | **No VA-set minimum**; lender overlays typically require **620–640** | [VA] Chapter 4 (and lender overlays) |
| **USDA** | **No hard minimum in handbook**, but USDA RD scoreboard / GUS often requires **640** for streamlined approval; lower with manual underwrite | [USDA] Chapter 11 |
| **Conventional conforming** | **620** per selling guide, but DU/LP often returns "refer" below 620 and many lenders won't go there | [FNMA] B3-5.1-01, [FHLMC] 5101.1 |
| **Jumbo** | **700+** typical; some products 680 | Lender guidelines |
| **Non-QM / DSCR** | **500–620** typical | Lender guidelines |

> Use the **middle of three** bureau scores per **[FNMA] B3-5.1-01**. The user self-
> reports a single number; the tool must say so and apply a haircut of ~20 points
> to be conservative (see §10.4).

### 4.2 Self-Reported Credit Score Bands (for the user-facing tool)

| FICO range | Tier | Sub-score | User-facing language |
|---|---|---|---|
| 760–850 | Exceptional | 100 | "You're in the top tier — best rates typically available." |
| 720–759 | Strong | 90 | "Strong credit — likely to receive most lender pricing." |
| 680–719 | Workable | 75 | "Workable — qualifies for most programs but not top pricing." |
| 620–679 | Thin | 55 | "Thin — limits program options; expect higher rate." |
| 580–619 | FHA-only | 35 | "Likely FHA-only at this time." |
| 500–579 | FHA-10%-down only | 20 | "FHA only with 10% down; significant hurdle." |
| < 500 | Ineligible | 5 | "Most loan programs require a minimum score." |

### 4.3 Waiting Periods After Major Credit Events

| Event | Conventional ([FNMA] B3-5.3-07) | FHA ([FHA] II.A.5) | VA ([VA] Ch. 4) | USDA ([USDA] Ch. 11) |
|---|---|---|---|---|
| **Chapter 7 BK** | **4 years** from discharge; 2 years with extenuating circumstances (EC) | **2 years** (24 months) from discharge | **2 years** from discharge | **3 years** from discharge |
| **Chapter 13 BK** | 4 years from discharge; 2 years from dismissal with EC; can be 1 year if on-time payments to plan | **1 year** of on-time payments + court permission to enter mortgage | 1 year of on-time payments to trustee | 3 years from discharge or 1 year with EC |
| **Foreclosure** | **7 years** from completion date; 3 years with EC | **3 years** from completion | **2 years** from completion | **3 years** from completion |
| **Deed-in-lieu / Short sale** | 4 years (or 2 with EC) for short sale; 4 years for DIL | **3 years** (FHA treats both like foreclosure) | 2 years | 3 years |
| **Loan modification** | 2 years from completion if on the modified loan itself; 4 years if rewritten; conventional has fewer options | 12 months on-time payments for FHA modification | 12 months on-time | 12 months on-time |
| **Multiple events in last 7 years** | Per DU/LP; 5 years from most recent if both BK + FC | 5 years if cumulative | Per lender | 5 years if cumulative |

### 4.4 Other Credit Red Flags

| Issue | Treatment | Citation |
|---|---|---|
| **30-day late in last 12 months** | FHA: not automatically disqualifying but pricing impact; Conventional: refer to DU/LP; if > 1.5% of balance or 1+ 60-day late — usually declines | [FNMA] B3-5.3-06 |
| **60-day late in last 24 months** | Most programs: decline or strong compensating factors required | [FNMA] B3-5.3-06 |
| **Collections < $2,000** | May be ignored; aggregate > $2,000 must be paid down or payment plan | [FNMA] B3-6-05 |
| **Judgments** | Must be paid prior to or at closing, OR payment plan with 3+ months on-time | [FNMA] B3-6-05 |
| **Charge-offs (medical, etc.)** | FHA: medical charge-offs do not have to be paid; Conventional: depends on amount | [FHA] II.A.5 |
| **Disputed accounts > $1,000** (post-2021) | Disputed balances may be added back to debt; if cumulative disputed > $5,000 the loan often requires manual underwrite | [FNMA] B3-6-05 (LL-2021-01) |
| **Foreclosure with prior loan** (e.g., previous primary) | "Waiting period" runs from the date title transferred, not the date of the foreclosure notice | [FNMA] B3-5.3-07 |
| **Bankruptcy dismissed vs discharged** | Dismissed = no waiting period; FHA and conventional both treat as if discharged at dismissal date for seasoning | [FHA] II.A.5 |

### 4.5 Credit Readiness Composite

```
credit_sub_score = (
    0.6 * fico_band_score
  + 0.25 * (waiting_period_clear ? 100 : max(0, 100 - (years_remaining * 25)))
  + 0.10 * (any_60_day_late_in_24mo ? 0 : 100)
  + 0.05 * (collections_clean ? 100 : 30)
)
```

---

## 5. Cash Readiness

### 5.1 Minimum Down Payment by Loan Type

| Loan type | Min down payment | Min LTV (max LTV = 100% - down) | Citation |
|---|---|---|---|
| **Conventional conforming** | **3%** (HomeReady / Home Possible for first-time / low-income); **5%** standard | 97% LTV; PMI required > 80% LTV | [FNMA] B5-6, [FHLMC] 4601.2 |
| **Conventional jumbo** | **5–10%** (lender specific; 10% common) | 90–95% LTV | Lender guidelines |
| **FHA** | **3.5%** if FICO ≥ 580; **10%** if FICO 500–579 | 96.5% LTV (3.5% down) or 90% LTV (10% down) | [FHA] II.A.5 |
| **VA** | **0%** down | 100% LTV + up to 4% financing of closing costs via seller concessions | [VA] Chapter 4 |
| **VA manufactured home** | 0% down (lot + home) | 100% LTV; tighter insurance / title requirements | [VA] Chapter 12 |
| **USDA** | **0%** down | 100% LTV | [USDA] Chapter 11 |
| **Second home** | 10% min | 90% LTV | [FNMA] B2-3 |
| **Investment property** | 15–25% | 75–85% LTV | [FNMA] B2-3 |

### 5.2 Reserve Requirements

Reserves = liquid assets remaining after closing (savings, money market, mutual
funds — *not* retirement unless borrower is over 59½ with full access).

| Loan type | Reserve requirement | Citation |
|---|---|---|
| **Conventional conforming** | 0–6 months PITI depending on DU/LP findings, FICO, LTV | [FNMA] B3-4.1-01, [FHLMC] 5501.1 |
| **FHA** | 1–3 months typically; up to 6 with high DTI | [FHA] II.A.5 |
| **VA** | Typically 2–6 months; residual income is the primary cushion test | [VA] Chapter 4 |
| **USDA** | 2 months PITI minimum; 6+ for high DTI | [USDA] Chapter 11 |
| **Jumbo** | 6–24 months PITI; very lender-specific | Lender guidelines |

### 5.3 Gift Funds

| Loan type | Allowed? | Source rules | Citation |
|---|---|---|---|
| **Conventional** | Yes, with 5%+ own funds for LTV ≤ 75% (3% own for 75–95%) | Family member, fiancé/fiancée, domestic partner, charitable org. Required gift letter + donor's bank withdrawal | [FNMA] B3-4.3-06 |
| **FHA** | Yes, **100% gift allowed** for down payment + closing costs | Family, employer, labor union, government agency, charitable org | [FHA] II.A.5 |
| **VA** | Yes; seller can pay up to 4% toward closing + prepaids (called "seller concessions") | Same donor rules as FHA | [VA] Chapter 4 |
| **USDA** | Yes | Family, government agency, non-profits; gift letter required | [USDA] Chapter 11 |

### 5.4 Cash to Close Components

Per **[CFPB] TRID (RESPA-TILA)**:

```
cash_to_close = down_payment
              + closing_costs
              + prepaids (mortgage insurance, prepaid interest, escrow for taxes/insurance)
              - lender_credits
              - seller_concessions
              - gift_funds_used
```

**Closing cost + prepaids benchmarks** (national averages, vary by state):

| Component | Typical range | Notes |
|---|---|---|
| **Origination** (lender) | 0–1.5% of loan | Often negotiable |
| **Discount points** | 0–3% of loan | Optional; lowers rate |
| **Title services** | 0.5–1.0% of purchase price | Both lender's and owner's policies |
| **Recording fees** | $50–$200 | State / county specific |
| **Transfer tax** | 0–2% of price | NY, FL, CA high; TX, CO moderate; many states zero |
| **Survey** | $300–$700 | Optional / lender dependent |
| **Prepaid interest** | (loan_amount × rate / 365) × days_to_first_payment | Typically 10–30 days |
| **Prepaid hazard insurance** | 1–3 months | Often 1 year paid at close |
| **Prepaid property tax** | 2–12 months (county dependent) | Some states: 0 (paid in arrears) |
| **Prepaid mortgage insurance** | 1 month of MIP/PMI | FHA: also upfront MIP of 1.75% (see §6) |
| **Initial escrow cushion** | ~2 months PITI | [CFPB] RESPA §1024.17 |

**Rule of thumb for the tool:** Closing costs + prepaids ≈ **3% of purchase price**
for conventional (low LTV), **5%** for FHA/VA with zero-down + low LTV financing
is more typical, **6–7%** for FHA 3.5% down with full financing. The tool should
let the user override (with a hard floor of 2% and ceiling of 8%).

### 5.5 Cash Readiness Diagnostic Thresholds

| Sub-condition | Sub-score |
|---|---|
| Down payment ≥ 20% (avoids PMI) | +35 |
| Down payment 10–20% | +25 |
| Down payment 3.5–10% | +15 |
| Down payment 0–3.5% | +5 |
| Cash to close fully covered | +25 |
| Reserves ≥ 6 months PITI | +20 |
| Reserves 2–6 months | +10 |
| Reserves 0–2 months | +0 |
| Reserves negative (no cash left) | −20 |
| Gift funds documented properly | +10 (if down < 20%) |
| Large unexplained deposits in last 60 days | −15 (red flag for the underwriter) |

---

## 6. Payment Affordability (PITI)

### 6.1 PITI Definition

PITI = **P**rincipal + **I**nterest + **T**axes + **I**nsurance (hazard, mortgage
insurance, and any HOA/condo fees are also included by convention — sometimes
labeled **PITIA**).

### 6.2 Component Estimates

| Component | Default for tool | Override allowed? |
|---|---|---|
| **Property tax** | State median: see table below; county override possible | Yes (county lookup) |
| **Hazard insurance** | National average $1,500/yr; regional multiplier applied | Yes |
| **HOA / condo fee** | User-provided; default = 0 for SFR; assume $250–$600 for condo in unknown state | Yes |
| **PMI** (conventional > 80% LTV) | Auto-calculated from FICO + LTV; rate range 0.2–1.5% annually | No |
| **FHA MIP** | **1.75% upfront** (UFMIP) on loan amount + **annual 0.55%** for LTV > 90% (most new loans); 0.50% for LTV ≤ 90% with 15+ year term; **0.15%** annual for 15-year term | No |
| **VA funding fee** | 0.5% for first-time use + 0% down; 1.25% for subsequent; up to 3.3% for cash-out | No |
| **USDA guarantee fee** | 1% upfront + 0.35% annual | No |

### 6.3 State Property Tax Medians (Effective Rate, Annualized)

| State | Effective rate | Monthly $ per $100k of home value |
|---|---|---|
| NJ | 2.23% | $186 |
| IL | 2.08% | $173 |
| TX | 1.68% | $140 |
| CA | 0.75% | $63 |
| FL | 0.91% | $76 |
| NY | 1.40% | $117 |
| CO | 0.55% | $46 |
| HI | 0.32% | $27 |
| AL | 0.39% | $32 |
| US Median | ~1.10% | ~$92 |

(Compiled from public state-by-state effective property tax data, Census Bureau ACS,
state revenue departments. These are *illustrative defaults* — production tool
should use a county-level lookup.)

### 6.4 Insurance Estimate

- National median annual premium for owner-occupied SFR: ~**$1,500** (varies
  wildly — coastal Florida may be $4,000+, inland Midwest $1,000).
- Add **flood insurance** if FEMA Special Flood Hazard Area (SFHA). NFIP
  average ~$1,000/yr; private flood can be $3,000+.
- Earthquake: not typically required unless lender overlay (CA, OR, WA).
- **Windstorm**: required in many Gulf states and HAWAII, sometimes a separate deductible.

### 6.5 PMI Rate Lookup (Conventional, illustrative)

| FICO / LTV | 95–97% | 90.01–95% | 85.01–90% | 80.01–85% |
|---|---|---|---|---|
| 760+ | 0.32% | 0.20% | 0.16% | 0.12% |
| 720–759 | 0.45% | 0.31% | 0.18% | 0.13% |
| 680–719 | 0.85% | 0.51% | 0.33% | 0.22% |
| 620–679 | 1.40% | 0.85% | 0.62% | 0.40% |

(Source: representative national MI rates; production tool should use current
Radian/MGIC/Arch/Enact rate cards. These *vary by lender* and by region.)

### 6.6 Payment Affordability Diagnostic Thresholds

| Front-end ratio | Sub-score |
|---|---|
| < 25% | 100 |
| 25–28% | 90 |
| 28–31% | 75 |
| 31–35% | 60 |
| 35–40% | 40 |
| 40–50% | 20 |
| > 50% | 5 |

---

## 7. Property Readiness

### 7.1 Property Types

| Type | Eligible? | Special rules | Citation |
|---|---|---|---|
| **Single-family residence (SFR)** | All programs | None beyond standard | — |
| **Townhome (PUD)** | All programs | Treated like SFR; PUD rider may apply | [FNMA] B4-2 |
| **Condo — warrantable** | All programs (if project approved) | Must be in approved project for FHA; conventional has recert cycles | [FHA] II.B.1, [FNMA] B4-2.2 |
| **Condo — non-warrantable** | **Jumbo, portfolio lenders, some non-QM**; **NOT eligible for FHA, VA, USDA, conventional** | Includes: > 25% commercial space, > 15% delinquent HOA, single-entity owner > 10%, hotel-like rental, name brand rentals < 30 days | [FNMA] B4-2.2, [FHA] II.B.1 |
| **2–4 unit** | All programs; rental income from other units can offset PITI | [FNMA] B2-3 |
| **Manufactured home** | FHA, VA, conventional; **USDA excludes manufactured for primary in some states** | Must be on permanent foundation, ≥ 400 sq ft, built after 1976 (FHA) | [FHA] II.B.4, [VA] Chapter 12 |
| **Co-op** | Conventional only (Fannie); Freddie limited; FHA/VA/USDA exclude | Share loan, not mortgage | [FNMA] B4-2.3 |
| **Mixed-use** | Generally **not** eligible | — | — |

### 7.2 Condo Project Certifications

| Program | Project approval method | Cert period |
|---|---|---|
| **Conventional** | Full review (established / new), limited review, Fannie PERS-approved, FHA spot approval | 1–3 years |
| **FHA** | Must be on FHA's **HRAP** (HUD Review and Approval Process) approved list, or **Spot** approval, or **DE** (Direct Endorsement) approval | 3 years (full); 1 year (spot) |
| **VA** | One-time project approval; many lenders also accept conventional approved projects | One-time |
| **USDA** | Project approval not required if single-family; otherwise follows conventional | — |

**Major red flag for the user-facing tool:** "Your condo must be approved by the
loan program. ~25% of condo projects are NOT FHA-approved. We strongly recommend
asking your HOA for the project approval status and HUD number before
contracting to buy."

### 7.3 HOA Documents Needed

- **Condo questionnaire** (lender-specific; 3–6 pages)
- **Master insurance certificate**
- **Bylaws, budget, most recent reserve study**
- **HOA certification** of dues + any special assessments

HOA cert turnaround is **typically 2–4 weeks**, often the longest single delay
in condo closings. The tool should warn: "If buying a condo, budget an extra
2–4 weeks for HOA paperwork."

### 7.4 Property Readiness Diagnostic Thresholds

| Condition | Sub-score |
|---|---|
| SFR / townhome, no HOA | 100 |
| Warrantable condo with active project approval | 85 |
| FHA condo not yet confirmed approved | 50 (red flag; verify before contract) |
| Non-warrantable condo (conventional target) | 30 (only jumbo / non-QM lenders) |
| 2–4 unit, not owner-occupied | 70 (rental income offset) |
| Manufactured home, FHA target | 65 (extra inspection) |
| Co-op | 60 (limited lender universe) |
| Commercial / mixed-use | 10 (likely ineligible) |

---

## 8. Documentation Complexity

### 8.1 Documentation Tiers

| Tier | Borrower | Required documents | Citation |
|---|---|---|---|
| **Full doc (Standard)** | W-2 employee | 2 most recent pay stubs (covering 30 days), 2 years W-2s, 2 months bank statements | [FNMA] B3-2 |
| **Alt doc — Bank Statement** | Self-employed | 12 or 24 months personal + business bank statements; lender calculates average deposits | [FNMA] B3-2 (non-QM); non-QM only |
| **Alt doc — 1099 / Profit & Loss** | Self-employed, contractors | 2 years 1099 + CPA-prepared P&L; often 90% of deposits accepted | Non-QM |
| **DSCR (Debt Service Coverage Ratio)** | Investor | No income docs; ratio of rent to PITI ≥ 1.0 (some lenders 0.75 minimum) | Non-QM |
| **Asset depletion** | Retiree / high-net-worth | Liquid assets ÷ 360 = qualifying monthly income | Non-QM |
| **VA — Post-9/11** | Veteran | DD-214, Certificate of Eligibility | [VA] Chapter 4 |
| **USDA** | Rural | 2 years tax returns even for W-2; 1 year for child support / retirement | [USDA] Chapter 11 |
| **FHA — 4506-C** | All | Tax transcripts (4506-C) pulled for all years in file | [FHA] II.A.4 |

### 8.2 Why This Matters for the Tool

- Self-employed borrowers often **cannot get a useful preliminary number** without
  a 2-year tax return summary. See §10.2.
- Bank statement loans are 1.5–2% higher rate; flag clearly.
- DSCR loans are asset-only; borrower can be a "no-doc" applicant.

### 8.3 Documentation Complexity Diagnostic Thresholds

| Borrower profile | Sub-score | Notes |
|---|---|---|
| W-2, 2 years returns, clean | 100 | Straightforward |
| W-2 + side gig reported on 1099 | 80 | Need 2 years 1099 + tax return |
| Self-employed, 2+ years tax returns | 70 | Standard self-employed doc |
| Self-employed, 1 year | 35 | Hard; many lenders will not run |
| New contract (1099) < 1 year | 25 | Non-QM only |
| Foreign income | 20 | Limited US lender universe; jumbo portfolio only |
| Cash-only income | 5 | Almost no mainstream options |
| Retiree (fixed income only) | 90 | Pension / Social Security letter is enough |

---

## 9. Category Weights and Composite Score

### 9.1 Suggested Weights (revenue-weighted, not FICO-equal)

| Category | Weight | Why |
|---|---|---|
| **Debt readiness (DTI)** | **25%** | Single biggest reason loans are denied post-application |
| **Credit readiness** | **25%** | Program gate; drives rate; drives MI cost |
| **Income readiness** | **20%** | Determines what loan amount is even possible |
| **Cash readiness** | **15%** | Cash-to-close is a hard gate; reserves are tier-dependent |
| **Payment affordability** | **10%** | Largely a function of debt readiness; included separately for clarity |
| **Property readiness** | **3%** | Binary eligibility more than a score |
| **Documentation complexity** | **2%** | Process friction, not a denial driver |

### 9.2 Composite Score (0–100)

```
composite = (
    0.25 * debt_readiness_score
  + 0.25 * credit_readiness_score
  + 0.20 * income_readiness_score
  + 0.15 * cash_readiness_score
  + 0.10 * payment_affordability_score
  + 0.03 * property_readiness_score
  + 0.02 * documentation_score
)
```

### 9.3 Score → User-Facing Tier

| Composite | Tier | User-facing message |
|---|---|---|
| 85–100 | **Likely approved** | "Strong preliminary position. Move to formal pre-approval." |
| 70–84 | **Likely approved with conditions** | "Looks workable, but you may want to address the items in 'Watch list' before applying." |
| 55–69 | **Likely approved with compensating factors** | "Possible, but the items in 'Hurdles' are likely to impact pricing or require a co-signer / gift / down payment adjustment." |
| 40–54 | **Significant hurdles** | "Several material issues. Consider FHA / VA / USDA if eligible, or focus on improving the items below." |
| 0–39 | **Likely denied at this time** | "The items below are likely to prevent approval at this time. Here's a prioritized improvement plan." |

---

## 10. Handling Uncertainty

### 10.1 When Too Little Information Is Given

| Missing field | Default behavior | Confidence impact |
|---|---|---|
| `loan_type` | Default to **conventional conforming**; surface FHA/VA/USDA alternatives | −15 confidence |
| `credit_score` | Use **620** as conservative floor; do not project above | −20 confidence |
| `income_type` | Use **W-2** assumption | −10 confidence |
| `total_monthly_debt` | Assume 0 (user-friendly) but flag "If you have other debt, your DTI may be higher" | −25 confidence |
| `down_payment` | Default to **3.5%** (FHA) | −10 confidence |
| `target_purchase_price` | **Solve for the maximum affordable** instead | Major confidence change — show range |
| `state` | Use **national medians** for tax + insurance | −10 confidence |
| `property_type` | Default to **SFR** | Minor |

### 10.2 Self-Employed (Income Hard to Estimate)

- Default qualifying income = **70% of stated gross revenue** (highly conservative).
  Many self-employed borrowers take 1.0–1.2× their reported gross as net.
- If user can supply **net income from tax returns** → use that directly.
- Surface language: *"Self-employed income is the #1 reason preliminary numbers
  differ from final approval. We've assumed your qualifying income is 70% of
  what you told us; please provide net income from your last tax return for a
  more accurate number."*
- Always show the qualifying income figure separately from the gross.

### 10.3 Credit "Unsure"

- Do not guess. Use **620** (lowest conventional floor).
- Output must include: *"Your score is the single biggest factor in your
  estimated rate. Before applying, get a free score from AnnualCreditReport.com
  or a bank app."*
- If user says "**poor**" or "**bad**" → use 580 (FHA floor).
- If user says "**fair**" → use 640.
- If user says "**good**" → use 700.
- If user says "**excellent**" → use 760.

### 10.4 Self-Reported FICO Adjustment

Self-reported scores are typically **20–40 points higher** than the FICO that
the lender pulls (different bureau, score version, hard vs. soft pull). For
the conservative preliminary number:

```
conservative_fico = max(300, self_reported_fico - 20)
```

For tier display: show the user's self-reported tier in the headline, but the
**calculated numbers** use the conservative FICO.

### 10.5 Property / HOA / Condo Details Missing

- Default to **SFR, no HOA**.
- If user selects "**condo**" → add prominent note: *"For a complete picture,
  we'd need: (1) whether the project is currently approved, (2) the monthly HOA
  fee, and (3) whether there's a special assessment pending."* Provide three
  explicit input fields.
- If property type is "**unknown**" → exclude condo from the result set.

---

## 11. Output Bands and Safety Language

### 11.1 Affordable Purchase Price Range

Always show a **range**, not a single number:

```
affordable_price_low  = price that produces front-end DTI of 31% (conservative)
affordable_price_mid  = price that produces front-end DTI of 28% (target)
affordable_price_high = price that produces front-end DTI of 25% (stretch)
```

OR (for users with stated target price):

```
comfortable_price_high = price that produces back-end DTI of 36%
lender_max_price_high  = price that produces back-end DTI of 50% (with compensating factors)
```

The tool must always show the **mid** as the headline number with the range
underneath.

### 11.2 Maximum Loan Amount Range

Same pattern:

```
max_loan_low  = back-end DTI 36%  (target)
max_loan_mid  = back-end DTI 43%  (typical FHA baseline)
max_loan_high = back-end DTI 50%  (stretched; with compensating factors)
```

### 11.3 Required Cash to Close

```
cash_low  = 2% of purchase price  (absolute floor)
cash_mid  = 4% of purchase price  (typical)
cash_high = 6% of purchase price  (FHA/VA with full financing of costs)
```

### 11.4 Confidence Label

| Confidence factor count missing | Label |
|---|---|
| 0–1 missing required field | High |
| 2–3 missing required field | Medium |
| 4+ missing required field | Low |

**Always display the confidence label** under the headline number.

### 11.5 Required Disclaimers (Compliance)

The output must include, at minimum:

1. "This is a **preliminary, educational** estimate. It is **not** a mortgage
   pre-approval and does **not** constitute a loan commitment."
2. "Actual qualification depends on full documentation, an underwriter's
   review, and lender-specific overlays."
3. "Interest rates and program guidelines change. We use representative
   defaults; your actual rate may differ."
4. "Self-reported data is not verified. Before applying, check your credit
   report at AnnualCreditReport.com and gather your tax returns and bank
   statements."
5. ECOA / Fair Lending: "Decisions are based on financial information only.
   We do not consider race, color, religion, national origin, sex, marital
   status, age (if you can contract), or public assistance income."

---

## 12. Obstacle Detection

The diagnostic engine must explicitly surface **primary obstacle**, **secondary
obstacles**, and **strengths**.

### 12.1 Primary Obstacle Identification (top 1)

Priority order (top wins):

1. **FICO below all program floors** for the chosen loan type
   - e.g., FICO 540 with VA target → cannot overcome; primary obstacle.
2. **FICO below chosen loan type's minimum** (e.g., 600 for conventional
   → recommend FHA instead; this becomes the recommendation, not an obstacle).
3. **Recent major credit event** within waiting period → "Time is the cure;
   here's when you'll qualify."
4. **Down payment below loan type's minimum** (e.g., 2% on conventional
   outside of HomeReady).
5. **Back-end DTI > 50%** (hard to overcome without paying off debt).
6. **Self-employed, 1 year tax returns only** (most programs require 2).
7. **Non-warrantable condo for FHA/VA/USDA** (eligible only with jumbo / non-QM).
8. **Negative reserves or no liquid assets after close**.
9. **Insufficient cash to close** (down + closing > available).
10. **Income below 50% of typical for stated occupation** (lender will likely
    not use it).

### 12.2 Secondary Obstacles

Report the **top 3** of the following, if they exist, in priority order:

- Back-end DTI > 43% (FHA baseline)
- Front-end DTI > 31% (USDA / FHA baseline)
- FICO between 580 and 620
- Credit event waiting period < 6 months remaining
- 30-day late in last 12 months
- Collections > $2,000 unpaid
- Property in flood zone (insurance may be expensive)
- HOA / condo project not currently approved
- Reserves < 2 months PITI
- Self-employed with declining YoY income
- Gift funds not documented
- Manufactured home for USDA
- 0 down on conventional (not a real product; suggest FHA/VA/USDA)

### 12.3 Strength Identification (top 1–2)

- FICO ≥ 760
- DTI ≤ 30%
- Down payment ≥ 20%
- Reserves ≥ 6 months
- Same job ≥ 5 years
- Self-employed with rising income YoY
- Eligible for VA or USDA (often forgotten benefits)
- Eligible for first-time buyer programs (Fannie HomeReady, Freddie Home Possible)
- Strong gift fund documentation

### 12.4 Red-Flag Trigger Phrases

Use exactly (or close to) the following user-facing language:

| Trigger | User-facing language |
|---|---|
| Back-end DTI > 55% | "This may be a significant hurdle. Most programs cap DTI at 43–50%." |
| FICO < 500 | "Likely ineligible for most programs at this time." |
| Active BK or foreclosure in last 12 months | "Almost no programs allow financing this close to a major credit event." |
| Self-employed, no tax returns | "We can't reliably estimate your qualifying income without tax returns." |
| Income not documented | "Income cannot be used for qualification without documentation." |
| Loan purpose = investment on a single-family | "Investment properties require 15–25% down and are reviewed more strictly." |
| Property value / loan > county conforming limit | "Loans above $766,550 (2024 limit) are jumbo and have stricter requirements." |
| Income less than half the median for the area | "We'd recommend confirming your income documentation; lenders verify against industry standards." |
| Negative reserves after close | "This may be a significant hurdle — having no reserves after closing is a red flag for most lenders." |

---

## 13. What the Engine Should NOT Do (Hard Prohibitions)

1. **No credit pull.** No Soft PULL of any bureau. Self-reported only. (Prohibition
   per [ECOA] Reg B — without the proper adverse-action infrastructure, you cannot
   pull credit. If a credit pull is added, full FCRA infrastructure is required.)
2. **No "approved/denied" verdict.** Only "likely qualifies," "workable,"
   "significant hurdles," "likely denied at this time."
3. **No representation of a specific lender's decision.** Each lender overlays
   differently. Engine is educational, not competitive.
4. **No targeting of protected classes.** Inputs must not include race, religion,
   national origin, sex, marital status, age, or public assistance status as
   factors. ECOA / Fair Housing.
5. **No storing of SSN, full account numbers, or anything resembling
   non-public personal information (NPI) under GLBA**.
6. **No "rate quote"** for a specific loan; only **"representative range"** with
   the disclaimer.
7. **No claim of partnership with any GSE, FHA, VA, USDA, or specific lender.**

---

## 14. Open Questions / To Be Validated by Compliance

- [ ] Confirm wording of required disclaimers with compliance counsel.
- [ ] Confirm state property tax data source for production (county assessor API
      or static medians).
- [ ] Confirm jumbo / non-QM rules are out of scope for v1.
- [ ] Confirm soft credit pull will be **opt-in** and **separate** session.
- [ ] Confirm VA and USDA disclaimers: "This tool is not affiliated with the
      U.S. Department of Veterans Affairs or the U.S. Department of Agriculture."
- [ ] Confirm lead-routing only happens after explicit user consent (see
      `08-Lead-Scoring` folder).

---

*End of framework v1.0. See companion documents:*
- *`thresholds.md` — numerical lookup tables in plain JSON-shape*
- *`calculations.md` — math: PITI, max loan, affordable price, DTI, reserves*
- *`rule-engine-spec.md` — deterministic rule engine pseudocode*
