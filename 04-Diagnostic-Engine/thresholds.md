# Threshold Lookup Tables

> Companion to `framework.md`. Each table is meant to be portable into code as
> a static constant. All numbers are derived from the citations in `framework.md`
> §2–§12. **Confirm with current-year rate sheets and program guides before production use.**

---

## T1. FICO Bands and Program Floors

```yaml
fico_bands:
  - { min: 760, max: 850, tier: "exceptional", sub_score: 100 }
  - { min: 720, max: 759, tier: "strong",      sub_score: 90  }
  - { min: 680, max: 719, tier: "workable",    sub_score: 75  }
  - { min: 620, max: 679, tier: "thin",        sub_score: 55  }
  - { min: 580, max: 619, tier: "fha_only",    sub_score: 35  }
  - { min: 500, max: 579, tier: "fha_10pct",   sub_score: 20  }
  - { min:   0, max: 499, tier: "ineligible",  sub_score:  5  }

program_min_fico:
  conventional_conf:    620   # FNMA B3-5.1-01; many lenders won't go here
  conventional_jumbo:   700   # lender guideline typical
  fha:                  580   # FHA 4000.1 II.A.5.a; 500 with 10% down
  va:                   null  # VA has no minimum; lender overlay 620–640
  usda:                 640   # USDA HB-1-3555 (GUS typical)
  non_qm:               500   # lender guideline typical
```

## T2. Loan Amount → Loan Type Lookup (Conforming Loan Limits, 2024)

```yaml
# 2024 baseline conforming limit = $766,550 (most counties)
# High-cost (e.g., Bay Area, NYC, Honolulu) up to $1,149,825
# Anything above is jumbo

conforming_limit_2024:
  baseline: 766550
  max:      1149825

# Pre-2024 also valid (2023 = $726,200; 2022 = $647,200)
```

## T3. Loan Type Minimum Down Payment and LTV

```yaml
min_down_payment_pct:
  conventional_conf_purchase:       3    # HomeReady / Home Possible
  conventional_conf_standard:       5
  conventional_jumbo:               5    # lender-dependent; 10% common
  fha:                              3.5  # FICO >= 580
  fha_sub580:                       10   # FICO 500-579
  va:                               0
  usda:                             0
  conventional_second_home:         10
  conventional_investment:          15   # 25% for cash-out conv investment

max_ltv:
  conventional_conf:                97
  conventional_jumbo:               95
  fha:                              96.5
  va:                               100
  usda:                             100
  conventional_cash_out_refi:       80
  fha_cash_out_refi:                80
  va_cash_out_refi:                 100
```

## T4. DTI Caps by Program

```yaml
dti_caps:
  conventional_conf:
    front_end_baseline: 28
    back_end_baseline:  36
    back_end_max:       45   # with strong compensating factors
  fha:
    front_end_baseline: 31
    back_end_baseline:  43
    back_end_max:       56.9 # AUS-approved with compensating factors
  usda:
    front_end_baseline: 29
    front_end_stretched:32
    back_end_baseline:  41
    back_end_stretched: 44
  va:
    front_end_baseline: null
    back_end_baseline:  null
    back_end_lender_overlay: 41  # many lenders won't go above
  jumbo:
    back_end_max:       43     # lender-specific
```

## T5. VA Residual Income (illustrative; see [VA] Ch. 4 for current values)

```yaml
va_residual_income:
  northeast_midwest_south:
    family_size_1: 450
    family_size_2: 755
    family_size_3: 909
    family_size_4: 1025
    family_size_5: 1062
    per_additional: 75
  west:
    family_size_1: 540
    family_size_2: 903
    family_size_3: 1083
    family_size_4: 1222
    family_size_5: 1261
    per_additional: 90
```

## T6. Debt Readiness Sub-Score (back-end DTI)

```yaml
dti_subscore:
  - { max: 30,  tier: "excellent", score: 100 }
  - { max: 36,  tier: "strong",    score:  90 }
  - { max: 43,  tier: "workable",  score:  75 }
  - { max: 50,  tier: "stretched",  score:  50 }
  - { max: 55,  tier: "obstacle",  score:  30 }
  - { max: 999, tier: "extreme",   score:  15 }
```

## T7. Front-End (PITI/Income) Sub-Score

```yaml
front_end_subscore:
  - { max: 25, score: 100 }
  - { max: 28, score:  90 }
  - { max: 31, score:  75 }
  - { max: 35, score:  60 }
  - { max: 40, score:  40 }
  - { max: 50, score:  20 }
  - { max: 999, score:  5 }
```

## T8. Income Readiness Sub-Score

```yaml
income_subscore:
  - { condition: "w2_2yr_stable",        score: 95 }
  - { condition: "w2_1to2yr",             score: 80 }
  - { condition: "w2_with_ot_bonus_avg",  score: 85 }
  - { condition: "self_employed_2yr",     score: 70 }
  - { condition: "self_employed_1yr",     score: 50 }
  - { condition: "commission_25pct_avg",  score: 75 }
  - { condition: "variable_seasonal_avg", score: 70 }
  - { condition: "offer_letter_noncontingent", score: 65 }
  - { condition: "self_employed_unsure",  score: 40 }
  - { condition: "low_income_occupation_mismatch", score: 30 }
  - { condition: "no_documentation",      score: 15 }
```

## T9. Cash Readiness Sub-Score Components

```yaml
down_payment_score:
  - { min_pct: 20, score: 35 }
  - { min_pct: 10, score: 25 }
  - { min_pct:  3.5, score: 15 }
  - { min_pct:  0, score: 5 }

reserves_score:
  - { min_months: 6, score: 20 }
  - { min_months: 2, score: 10 }
  - { min_months: 0, score:  0 }
  - { min_months: -1, score: -20 }  # negative

cash_to_close_covered: { score: 25 }
gift_funds_documented: { score: 10 }
unexplained_large_deposits: { score: -15 }
```

## T10. Credit Event Waiting Periods (months from event to eligibility)

```yaml
waiting_period_months:
  bk_ch7:
    conventional: 48   # 4 yrs; 24 with EC
    fha:          24
    va:           24
    usda:         36
  bk_ch13:
    conventional: 48   # 24 with EC; 12 if dismissed with on-time plan
    fha:          12
    va:           12
    usda:         36
  foreclosure:
    conventional: 84   # 7 yrs; 36 with EC
    fha:          36
    va:           24
    usda:         36
  short_sale:
    conventional: 48   # 24 with EC
    fha:          36   # FHA treats like foreclosure
    va:           24
    usda:         36
  deed_in_lieu:
    conventional: 48
    fha:          36
    va:           24
    usda:         36
  modification:
    conventional: 24   # if on the modified loan
    fha:          12
    va:           12
    usda:         12
```

## T11. Insurance & Tax Defaults

```yaml
property_tax_effective_rate_by_state:
  # Illustrative effective annual rate as percent of home value
  AL: 0.39; AK: 1.04; AZ: 0.63; AR: 0.62; CA: 0.75
  CO: 0.55; CT: 1.79; DE: 0.61; FL: 0.91; GA: 0.92
  HI: 0.32; ID: 0.67; IL: 2.08; IN: 0.84; IA: 1.52
  KS: 1.34; KY: 0.83; LA: 0.56; ME: 1.24; MD: 1.05
  MA: 1.14; MI: 1.38; MN: 1.11; MS: 0.75; MO: 0.97
  MT: 0.74; NE: 1.63; NV: 0.59; NH: 1.93; NJ: 2.23
  NM: 0.67; NY: 1.40; NC: 0.82; ND: 0.98; OH: 1.59
  OK: 0.89; OR: 0.93; PA: 1.49; RI: 1.40; SC: 0.57
  SD: 1.17; TN: 0.67; TX: 1.68; UT: 0.57; VT: 1.83
  VA: 0.82; WA: 0.87; WV: 0.55; WI: 1.61; WY: 0.56
  DC: 0.62
  default: 1.10

hazard_insurance_annual_default: 1500   # national median; production uses county lookup
flood_insurance_annual_default: 1000    # NFIP average; private flood can be 3-4x
hoa_monthly_default: 0                  # SFR default
condo_hoa_monthly_default: 350          # illustrative; user-overridable
```

## T12. PMI / MIP / VA Funding Fee / USDA Guarantee Fee

```yaml
# Conventional PMI - annual rate as % of loan; representative.
# Use current rate sheet in production.
conventional_pmi_rates:
  "760+":
    "97.01-100": 0.32
    "95.01-97":  0.20
    "90.01-95":  0.16
    "85.01-90":  0.12
  "720-759":
    "97.01-100": 0.45
    "95.01-97":  0.31
    "90.01-95":  0.18
    "85.01-90":  0.13
  "680-719":
    "97.01-100": 0.85
    "95.01-97":  0.51
    "90.01-95":  0.33
    "85.01-90":  0.22
  "620-679":
    "97.01-100": 1.40
    "95.01-97":  0.85
    "90.01-95":  0.62
    "85.01-90":  0.40

# FHA Mortgage Insurance Premium
fha_mip:
  upfront_ufmip_pct: 1.75    # of loan amount, usually financed
  annual_pct:
    "lte_90_ltv_30yr": 0.50
    "gt_90_ltv_30yr":  0.55
    "lte_90_ltv_15yr": 0.15
    "gt_90_ltv_15yr":  0.40
  # Most new FHA loans will be at > 90% LTV with 30-yr term, so 0.55% annual
  annual_pct_default: 0.55
  duration_months: 360        # for LTV > 90%; otherwise 11 years

# VA Funding Fee
va_funding_fee:
  first_use_zero_down: 2.15
  first_use_5_to_10_down: 1.50
  first_use_10_plus_down: 1.25
  subsequent_zero_down: 3.30
  subsequent_5_to_10_down: 1.50
  subsequent_10_plus_down: 1.25
  # Rolled into loan or paid in cash
  exempt_if_service_connected_disabled: true

# USDA Guarantee Fee
usda_guarantee_fee:
  upfront_pct: 1.00
  annual_pct: 0.35
```

## T13. Closing Cost & Prepaid Benchmarks

```yaml
closing_cost_prepaid_pct_of_price:
  conventional_low_ltv:     2.0    # absolute floor
  conventional_typical:     3.0    # most common
  fha_typical:              5.0    # includes UFMIP financing
  va_typical:               3.0    # may include funding fee financing
  usda_typical:             4.0    # includes guarantee fee
  hard_floor_pct:           2.0
  hard_ceiling_pct:         8.0
```

## T14. Credit Readiness Composite Formula

```yaml
credit_composite_weights:
  fico_band:                0.60
  waiting_period_clear:     0.25   # partial credit if waiting period still has years remaining
  no_60_day_late_24mo:      0.10
  collections_clean:        0.05
```

## T15. Composite Score Tiers

```yaml
composite_tiers:
  - { min: 85, max: 100, tier: "likely_approved",
      message: "Strong preliminary position. Move to formal pre-approval." }
  - { min: 70, max:  84, tier: "likely_approved_with_conditions",
      message: "Workable, but address items in the watch list before applying." }
  - { min: 55, max:  69, tier: "likely_approved_with_factors",
      message: "Possible, but hurdles may impact pricing or require a co-signer / gift / DP adjustment." }
  - { min: 40, max:  54, tier: "significant_hurdles",
      message: "Material issues. Consider FHA/VA/USDA if eligible, or focus on improvements." }
  - { min:  0, max:  39, tier: "likely_denied",
      message: "Likely to prevent approval at this time. Here is a prioritized improvement plan." }
```

## T16. Category Weights for Composite

```yaml
category_weights:
  debt_readiness:           0.25
  credit_readiness:         0.25
  income_readiness:         0.20
  cash_readiness:           0.15
  payment_affordability:    0.10
  property_readiness:       0.03
  documentation_complexity: 0.02
```

## T17. Output Range Width (Confidence-Driven)

```yaml
output_range_width_by_confidence:
  high:
    loan_amount_spread_pct: 10     # ±5% around midpoint
    price_spread_pct: 12
  medium:
    loan_amount_spread_pct: 18
    price_spread_pct: 22
  low:
    loan_amount_spread_pct: 28
    price_spread_pct: 35
```

## T18. Confidence Label Rules

```yaml
confidence:
  high:    { max_missing_required: 1 }
  medium:  { max_missing_required: 3 }
  low:     { max_missing_required: 999 }  # 4+
```

## T19. Debt Item Treatment

```yaml
debt_min_payment_calculation:
  credit_cards:            "max(min_due, 0.05 * balance)"   # FNMA B3-6-05
  revolving_lines:         "max(min_due, 0.05 * balance)"
  auto_loans:              "actual_payment"
  student_loans_repayment: "actual_payment"
  student_loans_deferred:  "max(0.01 * balance, fully_amortizing_payment)"  # FNMA B3-6-05
  alimony_paid:            "court_ordered_amount"
  alimony_paid_overdue:    "excluded_if_10mo_behind"        # but severe credit issue
  collections:             "ignore_if_paid_or_under_2000"   # FNMA B3-6-05
  judgments:               "must_be_paid_or_payment_plan_3mo"
  thirty_day_accounts:     "exclude_if_paid_in_full_each_month"
  cosigned_secondary:      "exclude_if_other_party_12mo_on_time"
```

## T20. Obstacle Priority Order

```yaml
obstacle_priority:
  - fico_below_all_program_floors
  - fico_below_chosen_loan_type
  - credit_event_within_waiting_period
  - down_payment_below_minimum
  - back_end_dti_gt_50
  - self_employed_one_year_only
  - non_warrantable_condo_fha_va_usda
  - negative_reserves_after_close
  - insufficient_cash_to_close
  - income_below_occupation_typical
```

---

*End of thresholds.md. Cross-references: framework.md §2–§12.*
