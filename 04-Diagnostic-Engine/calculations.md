# Calculations Reference

> Companion to `framework.md`. Each formula here is the deterministic
> implementation of a section in the framework. Variables are named to be
> obvious. Numbers and citations match `framework.md`.

---

## 1. Qualifying Income

### 1.1 W-2 Employee

```python
qualifying_income_w2 = (
    gross_annual_salary
    + (0 if overtime_share < 0.25 else overtime_2yr_avg)   # FNMA B3-3.1-01
    + (0 if bonus_share < 0.25 else bonus_2yr_avg)
    + commission_2yr_avg                                    # FNMA B3-3.1-02
) / 12.0
```

### 1.2 Self-Employed

```python
# Net taxable income (after add-backs) for the 2 most recent years
# Schedule C, K-1, 1120-S, or 1065

y1_net = (revenue_y1
         - cogs_y1
         - opex_y1
         + depreciation_addback_y1
         + amortization_addback_y1
         + business_use_of_home_addback_y1
         + meals_addback_y1 * 0.5            # 50% of meals
         + one_time_losses_addback_y1
         - one_time_gains_y1)                 # FNMA B3-3.2-01

y2_net = same_calculation_y2

# Use 2-year average (FNMA requires average if both positive; uses lower if trend declining)
if y1_net <= 0 and y2_net <= 0:
    qualifying_income_self_employed = 0
elif y1_net > 0 and y2_net > 0:
    qualifying_income_self_employed = (y1_net + y2_net) / 2.0 / 12.0
else:
    # One year negative: use the positive year only
    qualifying_income_self_employed = max(y1_net, y2_net) / 12.0
```

### 1.3 Variable / Hourly / Seasonal

```python
qualifying_income_variable = (
    sum_of_last_24_months_paystubs_total
    - overtime_excluded
) / 24.0
```

### 1.4 New Job Offer (not yet started)

```python
if offer_letter_is_non_contingent and has_start_date and days_to_start < 90:
    qualifying_income_offer = stated_annual_salary / 12.0
else:
    qualifying_income_offer = 0  # cannot use yet
```

### 1.5 Conservative Default (Self-Employed "Unsure")

```python
# Per framework §10.2: assume qualifying = 70% of stated gross revenue
qualifying_income_conservative_default = stated_gross_revenue * 0.70 / 12.0
```

### 1.6 Non-Taxable Income Gross-Up

```python
# Up to 25% gross-up if documented and continuing for >= 3 years
if income_is_nontaxable and receipt_documented and continuing_3yr:
    qualifying_income_grossed = qualifying_income_base * 1.25
else:
    qualifying_income_grossed = qualifying_income_base
```

---

## 2. Monthly Debt

### 2.1 Per-Debt Calculation

```python
def monthly_debt(debt, balance=None, min_due=None, fully_amort_payment=None):
    kind = debt.kind

    if kind in ("credit_card", "revolving_line"):
        # FNMA B3-6-05: greater of min or 5%
        return max(min_due, 0.05 * balance)

    if kind == "auto_loan":
        return debt.actual_monthly_payment  # from credit report

    if kind == "student_loan_repayment":
        return debt.actual_monthly_payment

    if kind == "student_loan_deferred":
        # FNMA B3-6-05 (12/2024): greater of 1% balance or fully-amortizing payment
        return max(0.01 * balance, fully_amort_payment or 0)

    if kind == "alimony_paid":
        if debt.months_behind >= 10:
            return 0   # excluded from DTI but is severe credit issue
        return debt.court_ordered_amount

    if kind == "child_support_paid":
        return debt.court_ordered_amount

    if kind == "thirty_day_account":  # e.g. Amex Pay-in-Full
        if debt.balance == 0:
            return 0
        return debt.actual_monthly_payment

    if kind == "cosigned_secondary":
        # Exclude if other party has 12+ months on-time
        return 0 if debt.other_party_on_time_12mo else debt.actual_monthly_payment

    return debt.actual_monthly_payment  # default
```

### 2.2 Total Existing Monthly Debt

```python
total_existing_debt = sum(
    monthly_debt(d) for d in existing_debts
)
```

---

## 3. Property Tax and Insurance Estimates

### 3.1 Property Tax

```python
def estimate_annual_property_tax(state, county=None, home_value=None):
    if county and county_has_override:
        rate = county.effective_rate
    else:
        rate = PROPERTY_TAX_EFFECTIVE_RATE_BY_STATE.get(state, 1.10) / 100.0
    return home_value * rate
```

### 3.2 Insurance

```python
annual_hazard_insurance = (
    user_supplied_amount
    or HAZARD_INSURANCE_ANNUAL_DEFAULT
    or state_regional_multiplier(state) * REGION_BASE
)

# Add flood if in SFHA (would require FEMA lookup in production)
if in_sfha:
    annual_flood_insurance = FLOOD_INSURANCE_ANNUAL_DEFAULT
    annual_hazard_insurance += annual_flood_insurance
```

### 3.3 HOA / Condo Fees

```python
monthly_hoa = (
    user_supplied
    or (0 if property_type == "sfr"
       else CONDO_HOA_MONTHLY_DEFAULT)
)
```

### 3.4 Mortgage Insurance (MI / MIP / Funding Fee / Guarantee Fee)

```python
def mortgage_insurance_annual(loan_program, loan_amount, ltv, fico=None):
    if loan_program == "conventional_conf":
        if ltv <= 0.80:
            return 0  # PMI not required
        rate = conventional_pmi_rate_lookup(fico, ltv) / 100.0
        return loan_amount * rate
    elif loan_program == "fha":
        if ltv > 0.90:
            return loan_amount * 0.0055  # 0.55% annual
        else:
            return loan_amount * 0.0050  # 0.50% annual
    elif loan_program == "va":
        return 0  # VA has one-time funding fee, not annual MI
    elif loan_program == "usda":
        return loan_amount * 0.0035  # 0.35% annual
    return 0
```

---

## 4. PITI Calculation (Given a Loan Amount)

```python
def piti(loan_amount, rate_pct, term_years, annual_property_tax,
         annual_hazard_insurance, monthly_hoa, annual_mortgage_insurance):

    r = (rate_pct / 100.0) / 12.0
    n = term_years * 12

    # P&I — standard amortization
    if r == 0:
        pi = loan_amount / n
    else:
        pi = loan_amount * (r * (1 + r) ** n) / ((1 + r) ** n - 1)

    monthly_ti   = annual_property_tax / 12.0
    monthly_hi   = annual_hazard_insurance / 12.0
    monthly_mi   = annual_mortgage_insurance / 12.0

    return pi + monthly_ti + monthly_hi + monthly_mi + monthly_hoa
```

### 4.1 Reverse: Maximum Loan Amount Given a Target DTI

```python
def max_loan_amount(qualifying_income,
                    other_monthly_debt,
                    rate_pct,
                    term_years,
                    annual_tax,
                    annual_insurance,
                    monthly_hoa,
                    annual_mi,
                    target_back_end_dti=0.43):
    """
    Solve for L such that:
        (piti(L) + other_monthly_debt) / qualifying_income = target_back_end_dti
    """

    monthly_ti = annual_tax / 12.0
    monthly_hi = annual_insurance / 12.0
    monthly_mi = annual_mi / 12.0

    # DTI is on gross monthly income
    max_total_debt = qualifying_income * target_back_end_dti
    available_for_piti = max_total_debt - other_monthly_debt

    # Now we have piti_max, solve for principal
    fixed_ti = monthly_ti + monthly_hi + monthly_mi + monthly_hoa
    piti_max = max(0, available_for_piti)
    pi_max = piti_max - fixed_ti

    if pi_max <= 0:
        return 0

    r = (rate_pct / 100.0) / 12.0
    n = term_years * 12

    if r == 0:
        L = pi_max * n
    else:
        # P = pi_max * ((1+r)^n - 1) / (r * (1+r)^n)
        L = pi_max * ((1 + r) ** n - 1) / (r * (1 + r) ** n)

    return L
```

### 4.2 Reverse: Maximum Loan Given a Target Front-End DTI

```python
def max_loan_front_end(qualifying_income, rate_pct, term_years,
                       annual_tax, annual_insurance, monthly_hoa, annual_mi,
                       target_front_end_dti=0.31):

    monthly_ti = annual_tax / 12.0
    monthly_hi = annual_insurance / 12.0
    monthly_mi = annual_mi / 12.0
    fixed_ti = monthly_ti + monthly_hi + monthly_mi + monthly_hoa

    piti_max = qualifying_income * target_front_end_dti
    pi_max = max(0, piti_max - fixed_ti)

    if pi_max <= 0:
        return 0

    r = (rate_pct / 100.0) / 12.0
    n = term_years * 12
    if r == 0:
        return pi_max * n
    return pi_max * ((1 + r) ** n - 1) / (r * (1 + r) ** n)
```

---

## 5. Affordable Purchase Price (Given Down Payment)

```python
def max_purchase_price(qualifying_income, other_monthly_debt,
                       down_payment, rate_pct, term_years,
                       annual_tax_rate_pct, annual_insurance,
                       monthly_hoa, annual_mi_on_loan_pct,
                       target_dti=0.43,
                       property_value_assumed_ratio=1.0):
    """
    Iterate: assume purchase_price, compute L = price - down, compute DTI,
    check against target. Use bisection.
    """
    lo, hi = down_payment, down_payment * 8  # 8x down as ceiling
    for _ in range(50):  # bisection convergence
        mid = (lo + hi) / 2
        L = mid - down_payment
        LTV = L / mid if mid > 0 else 1
        annual_tax = mid * (annual_tax_rate_pct / 100.0)
        annual_mi = L * annual_mi_on_loan_pct
        p = piti(L, rate_pct, term_years, annual_tax,
                 annual_insurance, monthly_hoa, annual_mi)
        dti = (p + other_monthly_debt) / max(qualifying_income, 1)
        if dti < target_dti:
            lo = mid
        else:
            hi = mid
    return lo
```

---

## 6. DTI Calculation (Given Target Price)

```python
def dti(qualifying_income, other_monthly_debt, purchase_price,
        down_payment, rate_pct, term_years,
        annual_tax_rate_pct, annual_insurance, monthly_hoa,
        loan_program):
    L = purchase_price - down_payment
    if L < 0:
        return float("inf")

    LTV = L / purchase_price if purchase_price > 0 else 1
    annual_tax = purchase_price * (annual_tax_rate_pct / 100.0)
    annual_mi = L * (annual_mortgage_insurance_rate(loan_program, LTV) / 100.0)

    p = piti(L, rate_pct, term_years, annual_tax,
             annual_insurance, monthly_hoa, annual_mi)
    return (p + other_monthly_debt) / max(qualifying_income, 1)
```

---

## 7. Reserves Calculation

```python
def reserve_months(liquid_assets_after_close, piti):
    if piti <= 0:
        return float("inf") if liquid_assets_after_close > 0 else 0
    return liquid_assets_after_close / piti

def reserves_acceptable(months, loan_program, dti):
    base_required = {
        "conventional_conf": 0,
        "conventional_jumbo": 6,
        "fha": 1,
        "va": 2,
        "usda": 2,
    }[loan_program]

    if months >= 6:
        return "strong"
    if months >= base_required:
        return "acceptable"
    if months >= 2:
        return "thin"
    if months >= 0:
        return "very_thin"
    return "negative"   # red flag
```

---

## 8. Cash to Close

```python
def cash_to_close(purchase_price, down_payment_pct, closing_cost_pct,
                  include_upfront_mip=False, va_funding_fee_pct=0,
                  usda_guarantee_pct=0, gift_funds=0, seller_concessions=0,
                  lender_credits=0):
    down = purchase_price * (down_payment_pct / 100.0)
    closing = purchase_price * (closing_cost_pct / 100.0)
    prepaids = purchase_price * 0.005  # ~0.5% for prepaid tax/insurance

    upfront = 0
    if include_upfront_mip:
        loan_amount = purchase_price - down
        upfront = loan_amount * 0.0175  # 1.75% FHA UFMIP, typically financed
    if va_funding_fee_pct:
        loan_amount = purchase_price - down
        upfront = loan_amount * (va_funding_fee_pct / 100.0)
    if usda_guarantee_pct:
        loan_amount = purchase_price - down
        upfront = loan_amount * (usda_guarantee_pct / 100.0)

    return (
        down
        + closing
        + prepaids
        - lender_credits
        - seller_concessions
        - gift_funds
    )
```

### 8.1 Cash-to-Close Range Output

```python
def cash_to_close_range(purchase_price, loan_program):
    low_pct  = 2.0   # absolute floor
    mid_pct  = {"conventional_conf": 3.0, "fha": 5.0, "va": 3.0, "usda": 4.0}.get(loan_program, 4.0)
    high_pct = 6.0
    return {
        "low":  purchase_price * low_pct  / 100.0,
        "mid":  purchase_price * mid_pct  / 100.0,
        "high": purchase_price * high_pct / 100.0,
    }
```

---

## 9. Output Range Construction (Affordable Price)

```python
def affordable_price_range(qualifying_income, other_monthly_debt,
                           down_payment, rate_pct, term_years,
                           annual_tax_rate_pct, annual_insurance,
                           monthly_hoa):
    """
    Three DTI targets:
      low    = 36% (back-end, conventional baseline)
      mid    = 43% (back-end, FHA baseline)
      high   = 50% (back-end, stretched / FHA with factors)
    """
    return {
        "low":  max_purchase_price(qualifying_income, other_monthly_debt, down_payment,
                                   rate_pct, term_years, annual_tax_rate_pct,
                                   annual_insurance, monthly_hoa, 0, target_dti=0.36),
        "mid":  max_purchase_price(qualifying_income, other_monthly_debt, down_payment,
                                   rate_pct, term_years, annual_tax_rate_pct,
                                   annual_insurance, monthly_hoa, 0, target_dti=0.43),
        "high": max_purchase_price(qualifying_income, other_monthly_debt, down_payment,
                                   rate_pct, term_years, annual_tax_rate_pct,
                                   annual_insurance, monthly_hoa, 0, target_dti=0.50),
    }
```

---

## 10. Cash-Readiness Sub-Score

```python
def cash_readiness_score(down_payment_pct, cash_to_close_required,
                         liquid_assets_after_close, piti,
                         has_gift_funds, has_unexplained_deposits):
    score = 0

    # Down payment
    if down_payment_pct >= 20:   score += 35
    elif down_payment_pct >= 10: score += 25
    elif down_payment_pct >= 3.5: score += 15
    else:                         score += 5

    # Reserves
    months = liquid_assets_after_close / max(piti, 1)
    if months >= 6:   score += 20
    elif months >= 2: score += 10
    elif months >= 0: score += 0
    else:             score -= 20

    # Cash to close covered
    if cash_to_close_required <= 0:
        score += 25
    elif cash_to_close_required > 0 and liquid_assets_after_close > cash_to_close_required:
        score += 25
    else:
        # partial credit proportional
        score += int(25 * liquid_assets_after_close / cash_to_close_required)

    # Gift funds
    if has_gift_funds and down_payment_pct < 20:
        score += 10

    # Unexplained deposits
    if has_unexplained_deposits:
        score -= 15

    return max(0, min(100, score))
```

---

## 11. Composite Score

```python
def composite_score(income, debt, credit, cash, payment, property, documentation):
    return (
        0.25 * debt
      + 0.25 * credit
      + 0.20 * income
      + 0.15 * cash
      + 0.10 * payment
      + 0.03 * property
      + 0.02 * documentation
    )
```

---

## 12. Assumed Rate

```python
def assumed_rate(loan_program, fico, ltv, term_years, is_arm=False):
    """
    Representative national average as of 2024-2025.
    Production tool must pull from a live rate-sheet API.
    """
    base_rates = {
        "conventional_conf_30": 7.00,
        "conventional_conf_15": 6.25,
        "fha_30":               6.75,
        "va_30":                6.75,
        "usda_30":              6.85,
        "jumbo_30":             7.25,
    }

    rate = base_rates.get(f"{loan_program}_{term_years}", 7.00)

    # FICO adjustment
    if fico < 620:    rate += 1.50
    elif fico < 680:  rate += 0.75
    elif fico < 720:  rate += 0.25
    elif fico < 760:  rate += 0.00
    else:             rate -= 0.25

    # LTV adjustment
    if ltv > 95:      rate += 0.25
    elif ltv > 90:    rate += 0.10

    return round(rate, 3)
```

---

## 13. Example Walk-Through

**Inputs:**

- Income: $7,500/mo gross
- Income type: W-2
- Debts: $400/mo
- Credit score: 720
- Down payment: $30,000
- Target price: $400,000
- State: TX
- Property: SFR
- Loan type: conventional conforming
- 30-year fixed

**Step 1 — Qualifying income:** $7,500 (W-2 direct).

**Step 2 — Loan amount:** $400,000 − $30,000 = $370,000.
LTV = 92.5%. PMI required.

**Step 3 — Rate:** 7.00% base + 0% FICO adj + 0.10% LTV adj = **7.10%**.

**Step 4 — P&I:** 370,000 × 0.005917 = $2,189/mo.

**Step 5 — TI:** TX effective rate 1.68% × $400,000 / 12 = $560/mo.
Hazard: $1500 / 12 = $125/mo.
PMI: 720 FICO at 90–95% LTV = 0.18% × 370,000 / 12 = $55.50/mo.
HOA: $0.

**Step 6 — PITI:** $2,189 + $560 + $125 + $55.50 = $2,929.50.

**Step 7 — DTI:** ($2,929.50 + $400) / $7,500 = **44.4% back-end**.
**Front-end:** $2,929.50 / $7,500 = **39.1%**.

**Step 8 — Cash to close:**
Down $30,000 + closing costs (3%) $12,000 + prepaids (~$1,500) = **$43,500**.

**Step 9 — Sub-scores:**
- Income: 95 (W-2, 2+ years)
- Debt: 50 (DTI 44.4% → "stretched" tier)
- Credit: 90 (720 strong; clean history assumed)
- Cash: 25 (10% down) + 10 (assume 2–6 mo reserves) + 25 (covered) = 60
- Payment: 60 (front-end 39% → between 35 and 40)
- Property: 100 (SFR, no HOA)
- Documentation: 100 (W-2, clean)

**Step 10 — Composite:**
0.25·50 + 0.25·90 + 0.20·95 + 0.15·60 + 0.10·60 + 0.03·100 + 0.02·100
= 12.5 + 22.5 + 19.0 + 9.0 + 6.0 + 3.0 + 2.0
= **74.0 → "Likely approved with conditions"**

**Step 11 — Primary obstacle:** DTI is the limiting factor.
- Front-end 39% exceeds the 28% baseline conventional
- Back-end 44% exceeds 36% baseline
- 90% LTV triggers PMI
- **Recommendation:** Either reduce DTI (pay off $400/mo debt) or increase down to $50k (then LTV drops to 87.5%, removes PMI, P&I drops to $2,140, DTI back-end → 42%).

---

*End of calculations.md.*
