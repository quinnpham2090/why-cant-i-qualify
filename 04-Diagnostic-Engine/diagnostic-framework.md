# PART 4 — DIAGNOSTIC ENGINE DESIGN

## 4.1 Diagnostic Philosophy

The engine is a **deterministic rule-based system** with **AI-assisted explanation** layered on top. It does **not** use AI to make credit decisions. All credit-related calculations are explicit rules based on publicly available lender guidelines.

**Why deterministic first?**
- Reproducible and auditable
- Easy to test and validate
- Compliance-friendly (the logic is inspectable)
- AI failures are isolated to *explanation* layer, not *decision* layer

## 4.2 Input Data Model

```yaml
borrower_profile:
  state: string                          # 2-letter state code
  zip: string | null                    # optional
  purpose: enum                         # purchase | refinance | cash_out | explore
  property_type: enum                   # single_family | condo | townhome | multi_family | manufactured
  is_first_time_buyer: bool
  target_purchase_price: number | null
  estimated_home_value: number | null    # for refi
  estimated_current_loan_balance: number | null  # for refi
  annual_gross_income: number
  employment_type: enum                 # w2 | self_employed | commissioned | variable | retired | other
  years_at_current_job: number | null
  credit_band: enum                     # 760_plus | 720_759 | 680_719 | 620_679 | 580_619 | below_580 | not_sure
  monthly_debt_payments: number         # total recurring monthly debts
  down_payment_available: number
  reserves_after_close: number | null   # optional
  has_hoa: bool
  monthly_hoa_dues: number | null
  has_bankruptcy: bool | null
  has_foreclosure: bool | null
  has_recent_late_payments: bool | null
  timeline: enum                        # within_30 | 1_to_3_months | 3_to_6 | 6_to_12 | just_researching
```

## 4.3 Diagnostic Categories (7 Pillars)

Each pillar is scored on a 4-level scale:

| Level | Label | Meaning |
|---|---|---|
| 🟢 | **Strong** | Likely supports qualification across most programs |
| 🟡 | **Workable** | May require attention but is generally workable |
| 🟠 | **Tight / Stretched** | Likely a primary or secondary obstacle |
| 🔴 | **Likely Obstacle** | Probably a significant hurdle for conventional programs; specialty programs may apply |

### Pillar 1: Income Readiness
- **Workable:** W-2 with 2+ years on job, stable income > purchase supports PITI at <28% front-end DTI
- **Tight:** Variable income, 0-2 years tenure, or income causes PITI to be 28-35% front-end
- **Likely Obstacle:** <1 year tenure, income not stable, PITI >35% front-end, or self-employed without 2-year tax history
- **Strong:** W-2, 2+ years, PITI comfortably under 28% front-end, large stable employer

### Pillar 2: Debt Readiness
- **Strong:** Back-end DTI < 36%, no collections/judgments
- **Workable:** Back-end DTI 36-43%
- **Tight:** Back-end DTI 43-50% (FHA may still allow with compensating factors)
- **Likely Obstacle:** Back-end DTI > 50%, recent collections, judgments, deferred student loans becoming due

### Pillar 3: Credit Readiness
- **Strong:** 720+
- **Workable:** 680-719
- **Tight:** 620-679 (FHA may be easier; conventional tight)
- **Likely Obstacle:** 580-619 (FHA only with 10% down), below 580, recent BK/foreclosure/late payments, open collections

### Pillar 4: Cash Readiness
- **Strong:** 20%+ down payment + 6+ months reserves + cash to close
- **Workable:** 5-20% down + 2-6 months reserves
- **Tight:** 3-5% down + 1-2 months reserves
- **Likely Obstacle:** <3% down (FHA minimum), no reserves, insufficient cash to close (typically 3-5% of price for closing costs + prepaids)

### Pillar 5: Payment Affordability
- **Strong:** Total monthly PITI + debts < 36% gross monthly income
- **Workable:** 36-43%
- **Tight:** 43-50%
- **Likely Obstacle:** > 50% (DTI limit exceeded) or target price results in payment exceeding income

### Pillar 6: Property Readiness
- **Strong:** Single family, no HOA complications, insurance readily available
- **Workable:** Townhome, standard PUD, standard insurance
- **Tight:** Condo (warrantable, FHA-approved project, healthy HOA)
- **Likely Obstacle:** Non-warrantable condo, condo not on FHA approval list, problem HOA, insurance availability issues, manufactured older than 1976, in a flood zone with high insurance

### Pillar 7: Documentation Complexity
- **Strong:** W-2 with 2 years W-2s and recent paystubs — straightforward
- **Workable:** W-2 with commission or bonus, simple returns
- **Tight:** Self-employed with 2 years tax returns, complex income
- **Likely Obstacle:** Self-employed <2 years, only one year filed, gig income, foreign income, divorce decree issues, etc.

## 4.4 Core Calculations

### 4.4.1 Estimated Affordable Purchase Price

```yaml
formula:
  # Maximum monthly PITI allowed by DTI
  max_piti_at_36 = monthly_income * 0.36 - monthly_debt_payments
  max_piti_at_43 = monthly_income * 0.43 - monthly_debt_payments
  
  # Estimated PITI factor (P&I per $100k at current rate)
  # e.g., at 7% for 30yr: $665/mo per $100k
  # at 6.5%: $632/mo
  # at 7.5%: $699/mo
  
  # Conservative (36% DTI, FHA 30yr current rate, 0.85% tax, 0.35% insurance, PMI if <20%)
  conservative_loan = max_piti_at_36 / pi_factor_per_dollar * 100000
  conservative_price = conservative_loan / (1 - down_payment_pct)
  
  # Likely (43% DTI)
  likely_loan = max_piti_at_43 / pi_factor_per_dollar * 100000
  likely_price = likely_loan / (1 - down_payment_pct)
  
  # User's target price comparison
  target_piti = (target_price - down_payment) * pi_factor / 100000 + 
                 target_price * (tax_rate + insurance_rate) / 12 +
                 (hoa_dues if has_hoa else 0) +
                 (pmi if down_pct < 20 else 0)
  target_dti = (target_piti + monthly_debt) / monthly_income
```

**Output the user's affordable range, not a single number.** Always expressed as:

> "Based on the income and debts you provided, a comfortable range may be roughly **$X – $Y**. Actual qualification requires a lender's full review."

### 4.4.2 Loan Program Eligibility (Quick Heuristics)

```yaml
program_eligibility:
  fha: 
    eligible_if: 
      credit_band in [580+, 620+, ...]  # 580 with 3.5% down; 500-579 with 10% down
      dti <= 56.9  # with compensating factors
    notes: "Government-insured. Easier credit. Mortgage insurance premium (MIP) required for life of loan in most cases."
  
  va:
    eligible_if:
      is_veteran_or_eligible  # need to ask
    notes: "No down payment required. No PMI. Funding fee applies. Must be veteran/eligible spouse."
  
  usda:
    eligible_if:
      property_in_eligible_rural_area
      income <= 115% of area median
    notes: "No down payment. Geographic and income restrictions."
  
  conventional:
    eligible_if:
      credit_band in [620+, 680+ for best rates]
      dti <= 36 (45 with strong compensating factors)
    notes: "PMI required if <20% down. Removes PMI at 78% LTV."
  
  jumbo:
    eligible_if:
      loan_amount > conforming_limit (varies by county, ~$766k in 2024, 2025 limit ~$806k)
      credit_band 700+
    notes: "Higher rates, stricter guidelines, larger reserves."
  
  non_qm:
    eligible_if:
      self_employed OR has_credit_issue OR non_traditional_income
    notes: "Bank statement, DSCR, asset depletion. Higher rates, larger down payments."
```

### 4.4.3 DTI Calculation

```yaml
dti_calculation:
  gross_monthly_income = annual_gross_income / 12
  
  # Add co-borrower if applicable
  if has_co_borrower:
    combined_income = primary + coborrower
  
  monthly_debt_includes:
    - auto_loans
    - credit_card_min_payments
    - student_loans (greater of 1% of balance or documented minimum, unless in deferment >12mo at <5% of balance)
    - child_support
    - alimony
    - other_mortgages_or_rent (if applicable; for purchase it's future PITI not current rent)
  
  estimated_piti:
    principal_interest = loan_amount * pi_factor
    property_tax = property_value * 0.012 / 12  # national avg ~1.2%
    home_insurance = property_value * 0.004 / 12  # national avg ~0.4%
    hoa = hoa_dues if has_hoa else 0
    pmi_mip = loan_amount * 0.005 / 12 if ltv > 80% else 0  # 0.5% annual approx
  
  total_piti = pi + tax + insurance + hoa + pmi_mip
  
  front_end_dti = total_piti / gross_monthly_income
  back_end_dti = (total_piti + monthly_debt) / gross_monthly_income
```

### 4.4.4 Cash to Close Estimation

```yaml
cash_to_close:
  down_payment = price * down_pct
  
  # Closing costs typically 2-5% of price
  closing_costs = price * 0.03  # 3% midpoint
  
  # Prepaids (taxes, insurance, mortgage interest) typically 0.5-1.5% of price
  prepaids = price * 0.01
  
  # For refi: same plus any payoff
  estimated_cash_needed = down_payment + closing_costs + prepaids
  
  if down_payment_available < estimated_cash_needed:
    flag: "Cash-to-close may be short by approximately $X"
```

### 4.4.5 Reserves Estimation

```yaml
reserves:
  required_minimum_pmi = 0  # Conventional
  required_minimum_fha = 1  # FHA typically requires 1-3 months depending on FICO
  required_minimum_jumbo = 6  # Jumbo typically 6-12 months
  required_minimum_va = 0   # VA typically none
  required_minimum_usda = 0 # USDA typically none
  
  reserves_after_close = down_payment_available - estimated_cash_needed
  
  if reserves_after_close / estimated_piti < required:
    flag: "Reserves may be thin. Many programs require 2-6 months of PITI in reserves after closing."
```

## 4.5 Obstacle Detection Rules

### Primary Obstacle Logic (priority order)

```yaml
obstacle_priority:
  - check: extreme_dti  # > 50%
    label: "Debt-to-income ratio"
    description: "Your total monthly debts plus an estimated mortgage payment may exceed the typical DTI limit (around 43-50% depending on program)."
  
  - check: severe_credit  # < 580 or recent BK
    label: "Credit profile"
    description: "Your credit may be a significant obstacle for many programs. FHA and specialty lenders may have options."
  
  - check: insufficient_cash
    label: "Cash-to-close"
    description: "Your down payment and closing costs may exceed the cash you have available."
  
  - check: no_reserves
    label: "Reserves"
    description: "Many loan programs require 2-6 months of mortgage payments in reserves after closing."
  
  - check: self_employed_complex
    label: "Self-employed income documentation"
    description: "Self-employed income requires 2 years of tax returns. Newer businesses may need alternative documentation."
  
  - check: high_piti_for_income
    label: "Payment-to-income"
    description: "Your target purchase price may result in a payment that's high relative to your income."
  
  - check: condo_hoa
    label: "Property / HOA"
    description: "Condos must meet project eligibility. HOA certification and insurance can cause delays."
  
  - check: borderline_credit
    label: "Credit score band"
    description: "Your credit range may be workable but you may face higher rates or require larger down payment."
  
  - check: variable_income
    label: "Income stability"
    description: "Variable income, recent job change, or commission-based income may require additional documentation."
  
  - check: target_price_too_high
    label: "Target price vs qualification"
    description: "Your target price may exceed what a lender would likely qualify you for based on the information provided."
```

### Strength Detection Rules

```yaml
strength_rules:
  - check: high_credit
    label: "Credit profile"
    description: "Your credit range may qualify for the best rates available."
  
  - check: low_dti
    label: "Debt-to-income ratio"
    description: "Your current debts are low relative to your income, which is a positive factor."
  
  - check: strong_down_payment
    label: "Down payment"
    description: "Your down payment exceeds the minimum for most programs and may eliminate PMI."
  
  - check: reserves_strong
    label: "Reserves"
    description: "Your reserves after closing should provide a comfortable cushion."
  
  - check: stable_w2
    label: "Income stability"
    description: "W-2 income with 2+ years on the job is generally straightforward to document."
  
  - check: low_target_dti
    label: "Target purchase price"
    description: "Your target price results in a payment that's comfortable for your income."
```

## 4.6 Confidence / Uncertainty Handling

The system must display **three confidence levels** for any estimate:

| Confidence | When | Display |
|---|---|---|
| 🟢 **Higher confidence** | All required fields filled, no co-borrower complexity, standard W-2, single family | "Based on the information you provided..." |
| 🟡 **Moderate confidence** | Self-employed, condo, or some optional fields missing | "This is a preliminary estimate. Self-employed income can vary significantly..." |
| 🔴 **Lower confidence** | Many unknowns, "not sure" credit, exploration mode | "With limited information, here's a general framework..." |

**Always add a confidence note, never present a single number as fact.**

## 4.7 Output Structure

```yaml
output:
  header:
    title: "Your Mortgage Readiness Snapshot"
    disclaimer: "This is a preliminary educational estimate, not a mortgage application, preapproval, or commitment to lend."
  
  estimated_purchase_range:
    conservative: number
    likely: number
    user_target: number | null
    comparison: "Your target of $X is within the comfortable range" | "Your target of $X is above the comfortable range"
  
  estimated_monthly_payment:
    principal_interest: number
    taxes: number
    insurance: number
    hoa: number | null
    pmi_mip: number | null
    total: number
  
  estimated_dti:
    front_end: percent
    back_end: percent
    program_comparison:
      conventional: "Within typical limits" | "Above typical limits"
      fha: "Within typical limits" | "Above typical limits"
  
  pillar_scores:
    income: { level: "Strong" | "Workable" | "Tight" | "Likely Obstacle", note: "..." }
    debt: { ... }
    credit: { ... }
    cash: { ... }
    payment_affordability: { ... }
    property: { ... }
    documentation: { ... }
  
  primary_obstacle:
    label: string
    description: string
    education: string  # 1-2 sentence educational explanation
    potential_steps: [string]  # 2-3 actionable suggestions
  
  secondary_obstacles: [obstacle, obstacle]
  
  strengths: [string, string]
  
  loan_programs_you_may_qualify_for: [string, string]
  
  what_a_licensed_loan_officer_would_need: [string, string]
  
  next_steps_cta:
    primary: "Schedule a Free 15-Minute Review"
    secondary: "Email My Results"
    tertiary: "Read the Full Guide"
```

## 4.8 What the Engine Does NOT Do

The engine does **not**:

- Make credit decisions
- Use AI to deny or approve
- Pull credit reports
- Provide guaranteed rates
- Promise specific loan amounts
- Discriminate based on protected classes
- Replace a licensed underwriter
- Make a loan commitment
- Send applications to lenders
- Sell leads to multiple parties

The engine **does**:

- Provide a structured, rule-based educational assessment
- Identify likely obstacles
- Suggest potential next steps
- Educate about qualification concepts
- Connect motivated consumers with a licensed professional
