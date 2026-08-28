# Rule Engine Specification

> Deterministic, pure-function spec for the mortgage qualification diagnostic.
> Reference inputs: `framework.md` §1–§13, `thresholds.md`, `calculations.md`.
> Output: a `DiagnosticResult` object the UI can render directly.

---

## 0. Module Structure

```
diagnostic/
  inputs.py        # Input schema, validation, defaulting
  income.py        # Qualifying-income calculation by type
  debt.py          # Monthly-debt calculation
  piti.py          # PITI, MI, tax, insurance, HOA
  affordability.py # Max loan / max price, DTI
  cash.py          # Cash-to-close, reserves
  credit.py        # FICO bands, waiting periods
  property.py      # Property type eligibility
  documentation.py # Doc complexity tier
  obstacles.py     # Primary, secondary, strengths
  scorer.py        # Sub-scores, composite, tier, confidence
  output.py        # Result builder, ranges, disclaimers
```

Each module exposes pure functions taking typed inputs and returning typed
outputs. **No I/O**, no DB, no network. The engine is testable with fixed
fixtures.

---

## 1. Input Schema

```python
from dataclasses import dataclass
from typing import Optional, List, Literal
from enum import Enum

class LoanPurpose(str, Enum):
    PURCHASE = "purchase"
    REFI_RATE_TERM = "refinance_rate_term"
    REFI_CASH_OUT = "refinance_cash_out"

class PropertyUse(str, Enum):
    PRIMARY = "primary"
    SECOND_HOME = "second_home"
    INVESTMENT = "investment"

class LoanType(str, Enum):
    CONVENTIONAL_CONF = "conventional_conf"
    CONVENTIONAL_JUMBO = "conventional_jumbo"
    FHA = "fha"
    VA = "va"
    USDA = "usda"
    UNKNOWN = "unknown"

class IncomeType(str, Enum):
    W2 = "w2"
    SELF_EMPLOYED = "self_employed"
    COMMISSION = "commission"
    VARIABLE_HOURLY = "variable_hourly"
    RETIRED_FIXED = "retired_fixed"
    SOCIAL_SECURITY = "social_security"
    MIXED = "mixed"
    UNKNOWN = "unknown"

class PropertyType(str, Enum):
    SFR = "sfr"
    CONDO_WARRANTABLE = "condo_warrantable"
    CONDO_NONWARRANTABLE = "condo_nonwarrantable"
    TOWNHOME = "townhome"
    MANUFACTURED = "manufactured"
    MULTI_2_4 = "multi_2_4"
    UNKNOWN = "unknown"

class CreditEvent(str, Enum):
    NONE = "none"
    BK_CH7 = "bk_ch7"
    BK_CH13 = "bk_ch13"
    FORECLOSURE = "foreclosure"
    SHORT_SALE = "short_sale"
    DEEDS_IN_LIEU = "deeds_in_lieu"
    MODIFICATION = "modification"

class CreditTier(str, Enum):       # when FICO is "unsure"
    UNKNOWN = "unknown"
    POOR = "poor"
    FAIR = "fair"
    GOOD = "good"
    EXCELLENT = "excellent"

@dataclass
class Debt:
    kind: Literal["credit_card", "revolving_line", "auto_loan",
                  "student_loan_repayment", "student_loan_deferred",
                  "alimony_paid", "child_support_paid",
                  "thirty_day_account", "cosigned_secondary", "other"]
    actual_monthly_payment: float = 0.0
    min_due: float = 0.0
    balance: float = 0.0
    fully_amort_payment: float = 0.0
    court_ordered_amount: float = 0.0
    months_behind: int = 0
    other_party_on_time_12mo: bool = False

@dataclass
class Inputs:
    # Required
    loan_purpose: LoanPurpose
    property_use: PropertyUse
    loan_type: LoanType
    gross_monthly_income: float
    income_type: IncomeType
    credit_score_self_reported: Optional[int]    # 300-850 or None
    credit_tier_self_reported: Optional[CreditTier]   # backup if FICO not known
    total_monthly_debt_payments: float           # proposed PITI not included
    down_payment_available: float
    target_purchase_price: Optional[float]

    # Strongly recommended
    estimated_home_value: Optional[float] = None  # for refi
    state: Optional[str] = None                   # "CA", "TX", etc.
    property_type: PropertyType = PropertyType.UNKNOWN
    credit_event: CreditEvent = CreditEvent.NONE
    years_since_credit_event: Optional[float] = None
    liquid_assets_after_close: Optional[float] = None
    employment_years_in_field: Optional[float] = None
    has_hoa: bool = False
    monthly_hoa_fee: Optional[float] = None
    is_first_time_buyer: bool = False
    has_gift_funds_documented: bool = False
    gift_funds_amount: Optional[float] = None
    has_unexplained_large_deposits: bool = False
    had_60_day_late_24mo: bool = False
    had_30_day_late_12mo: bool = False
    collections_under_2k: bool = True
    self_employed_net_income_2yr_avg: Optional[float] = None

    # Co-borrower (optional, simple weighted)
    co_borrower_income: Optional[float] = None
    co_borrower_credit: Optional[int] = None

    # Compliance
    consent_to_soft_pull: bool = False
```

---

## 2. Result Schema

```python
@dataclass
class Range:
    low: float
    mid: float
    high: float

@dataclass
class SubScore:
    category: str
    score: float
    tier: str
    summary: str
    red_flags: List[str]

@dataclass
class Obstacle:
    rank: int
    category: str
    description: str
    severity: Literal["primary", "secondary"]
    fix_horizon: str   # "immediate", "0-3 months", "3-12 months", "12+ months", "out_of_user_control"

@dataclass
class Strength:
    rank: int
    category: str
    description: str

@dataclass
class DiagnosticResult:
    # Numbers
    qualifying_income: float
    max_loan_amount: Range
    affordable_purchase_price: Range
    estimated_piti: Range
    cash_to_close: Range
    dti_back_end: float
    dti_front_end: float
    reserves_months: Optional[float]

    # Scores
    sub_scores: Dict[str, SubScore]
    composite_score: float
    composite_tier: str
    composite_tier_message: str

    # Analysis
    primary_obstacle: Obstacle
    secondary_obstacles: List[Obstacle]
    strengths: List[Strength]

    # Program recommendations
    eligible_programs: List[LoanType]
    recommended_program: Optional[LoanType]

    # Meta
    confidence: Literal["high", "medium", "low"]
    confidence_reasons: List[str]
    disclaimers: List[str]
```

---

## 3. Pipeline (Top Level)

```python
def run_diagnostic(inputs: Inputs) -> DiagnosticResult:
    """Top-level pipeline. All steps are pure functions."""

    # 1. Normalize / default
    normalized = normalize_inputs(inputs)

    # 2. Calculate qualifying income
    qualifying_income = calculate_qualifying_income(normalized)

    # 3. Calculate total existing debt
    total_existing_debt = calculate_total_existing_debt(normalized)

    # 4. Estimate property tax, insurance, HOA
    tax_ins_hoa = estimate_tax_insurance_hoa(normalized)

    # 5. Determine FICO and credit profile
    credit = build_credit_profile(normalized)

    # 6. Determine eligible loan programs
    eligible_programs = determine_eligible_programs(normalized, credit)

    # 7. For each eligible program (or just chosen one), compute PITI, max loan
    piti_estimates = compute_piti_estimates(normalized, qualifying_income,
                                            total_existing_debt, eligible_programs)

    # 8. Compute affordable price range
    price_range = compute_affordable_price_range(normalized, qualifying_income,
                                                 total_existing_debt, eligible_programs)

    # 9. Compute cash-to-close
    ctc = compute_cash_to_close(normalized, eligible_programs)

    # 10. Compute sub-scores
    sub_scores = compute_sub_scores(normalized, qualifying_income,
                                    total_existing_debt, piti_estimates,
                                    credit, ctc)

    # 11. Composite + tier
    composite, tier, message = compute_composite(sub_scores)

    # 12. Identify obstacles and strengths
    primary, secondary, strengths = identify_obstacles(normalized, sub_scores,
                                                       credit, eligible_programs)

    # 13. Confidence
    confidence, confidence_reasons = compute_confidence(normalized)

    # 14. Recommended program
    recommended = recommend_program(eligible_programs, normalized, credit)

    # 15. Disclaimers
    disclaimers = build_disclaimers(normalized)

    return DiagnosticResult(
        qualifying_income=qualifying_income,
        max_loan_amount=piti_estimates.max_loan,
        affordable_purchase_price=price_range,
        estimated_piti=piti_estimates.piti,
        cash_to_close=ctc,
        dti_back_end=piti_estimates.dti_back_end,
        dti_front_end=piti_estimates.dti_front_end,
        reserves_months=piti_estimates.reserves_months,
        sub_scores=sub_scores,
        composite_score=composite,
        composite_tier=tier,
        composite_tier_message=message,
        primary_obstacle=primary,
        secondary_obstacles=secondary,
        strengths=strengths,
        eligible_programs=eligible_programs,
        recommended_program=recommended,
        confidence=confidence,
        confidence_reasons=confidence_reasons,
        disclaimers=disclaimers,
    )
```

---

## 4. Per-Stage Rules

### 4.1 `normalize_inputs`

```python
def normalize_inputs(i: Inputs) -> Inputs:
    # Apply haircut to self-reported FICO
    if i.credit_score_self_reported is not None:
        i.credit_score_self_reported = max(300, i.credit_score_self_reported - 20)

    # Map tier to FICO if FICO missing
    if i.credit_score_self_reported is None and i.credit_tier_self_reported:
        mapping = {
            "poor": 580,
            "fair": 640,
            "good": 700,
            "excellent": 760,
        }
        i.credit_score_self_reported = mapping[i.credit_tier_self_reported]

    # Default down payment to FHA minimum
    if i.down_payment_available <= 0 and i.target_purchase_price:
        i.down_payment_available = i.target_purchase_price * 0.035

    # Default state
    if not i.state:
        i.state = "DEFAULT"

    # Default property type
    if i.property_type == PropertyType.UNKNOWN:
        i.property_type = PropertyType.SFR

    return i
```

### 4.2 `calculate_qualifying_income`

```python
def calculate_qualifying_income(i: Inputs) -> float:
    if i.income_type == IncomeType.W2:
        return i.gross_monthly_income

    if i.income_type == IncomeType.SELF_EMPLOYED:
        if i.self_employed_net_income_2yr_avg is not None:
            return i.self_employed_net_income_2yr_avg / 12.0
        # Conservative default
        return i.gross_monthly_income * 0.70

    if i.income_type == IncomeType.COMMISSION:
        # 2-year average; if user supplied gross, apply 0.85 haircut
        return i.gross_monthly_income * 0.85

    if i.income_type == IncomeType.VARIABLE_HOURLY:
        return i.gross_monthly_income * 0.90   # conservative haircut

    if i.income_type == IncomeType.RETIRED_FIXED:
        return i.gross_monthly_income  # pension/SS is stable

    if i.income_type == IncomeType.SOCIAL_SECURITY:
        return i.gross_monthly_income  # SS is stable; could gross up 25% if not taxed

    if i.income_type == IncomeType.MIXED:
        return i.gross_monthly_income * 0.80   # conservative

    # Unknown
    return i.gross_monthly_income * 0.75
```

### 4.3 `calculate_total_existing_debt`

```python
def calculate_total_existing_debt(i: Inputs) -> float:
    return i.total_monthly_debt_payments

# Note: If user supplied a list of Debt objects, use:
#   return sum(monthly_debt(d) for d in i.debts)
# Per calculations.md §2.1
```

### 4.4 `estimate_tax_insurance_hoa`

```python
def estimate_tax_insurance_hoa(i: Inputs, home_value=None):
    home_value = home_value or i.target_purchase_price or 300000
    tax_rate = PROPERTY_TAX_EFFECTIVE_RATE_BY_STATE.get(i.state, 1.10) / 100.0
    annual_tax = home_value * tax_rate
    annual_insurance = HAZARD_INSURANCE_ANNUAL_DEFAULT

    # Flood zone detection requires FEMA lookup; if user says "in flood zone"
    if i.is_in_flood_zone:
        annual_insurance += 1000

    monthly_hoa = i.monthly_hoa_fee or 0
    return {
        "annual_tax": annual_tax,
        "annual_insurance": annual_insurance,
        "monthly_hoa": monthly_hoa,
    }
```

### 4.5 `build_credit_profile`

```python
def build_credit_profile(i: Inputs) -> dict:
    fico = i.credit_score_self_reported or 620  # already haircut in normalize

    # Waiting-period check
    if i.credit_event != CreditEvent.NONE and i.years_since_credit_event is not None:
        program = i.loan_type.value
        required_months = WAITING_PERIOD_MONTHS[i.credit_event.value][program]
        months_elapsed = i.years_since_credit_event * 12
        waiting_clear = months_elapsed >= required_months
        years_remaining = max(0, (required_months - months_elapsed) / 12.0)
    else:
        waiting_clear = True
        years_remaining = 0

    return {
        "fico": fico,
        "waiting_clear": waiting_clear,
        "years_remaining": years_remaining,
        "had_60_day_late_24mo": i.had_60_day_late_24mo,
        "had_30_day_late_12mo": i.had_30_day_late_12mo,
        "collections_clean": i.collections_under_2k,
    }
```

### 4.6 `determine_eligible_programs`

```python
def determine_eligible_programs(i: Inputs, credit: dict) -> List[LoanType]:
    eligible = []
    fico = credit["fico"]

    # Conventional conforming
    if fico >= 620 and credit["waiting_clear"] and i.property_use == PropertyUse.PRIMARY:
        eligible.append(LoanType.CONVENTIONAL_CONF)

    # Conventional jumbo
    if fico >= 700 and credit["waiting_clear"] and i.property_use in (PropertyUse.PRIMARY, PropertyUse.SECOND_HOME):
        eligible.append(LoanType.CONVENTIONAL_JUMBO)

    # FHA
    if fico >= 500 and credit["waiting_clear"] and i.property_use == PropertyUse.PRIMARY:
        eligible.append(LoanType.FHA)

    # VA — only if user is eligible (need to ask explicitly)
    if i.loan_type == LoanType.VA and fico >= 620 and credit["waiting_clear"]:
        eligible.append(LoanType.VA)

    # USDA — only if user is eligible
    if i.loan_type == LoanType.USDA and fico >= 640 and credit["waiting_clear"]:
        eligible.append(LoanType.USDA)

    # If user chose a type but not eligible, keep it but flag
    if i.loan_type not in eligible and i.loan_type != LoanType.UNKNOWN:
        # Don't append; just flag
        pass

    return eligible if eligible else [LoanType.UNKNOWN]
```

### 4.7 `compute_piti_estimates`

This is the central numerical engine. See `calculations.md` §4.

```python
def compute_piti_estimates(i, qualifying_income, total_existing_debt, eligible_programs):
    # Pick the user's chosen program if eligible; else use first eligible
    program = i.loan_type if i.loan_type in eligible_programs else eligible_programs[0]

    tax_ins_hoa = estimate_tax_insurance_hoa(i)
    annual_tax = tax_ins_hoa["annual_tax"]
    annual_ins = tax_ins_hoa["annual_insurance"]
    monthly_hoa = tax_ins_hoa["monthly_hoa"]

    # Assume rate based on FICO and LTV
    price = i.target_purchase_price or 300000
    down = min(i.down_payment_available, price)
    L = price - down
    ltv = L / price if price > 0 else 1
    rate = assumed_rate(program, credit["fico"], ltv, 30)

    # MI
    annual_mi = mortgage_insurance_annual(program, L, ltv, credit["fico"])

    p = piti(L, rate, 30, annual_tax, annual_ins, monthly_hoa, annual_mi)
    dti_back = (p + total_existing_debt) / max(qualifying_income, 1)
    dti_front = p / max(qualifying_income, 1)

    # Reserves
    piti_for_reserves = p
    reserves_months = None
    if i.liquid_assets_after_close is not None:
        reserves_months = i.liquid_assets_after_close / max(piti_for_reserves, 1)

    # Range (see calculations.md §9)
    max_loan_low  = max_loan_amount(qualifying_income, total_existing_debt, rate, 30,
                                    annual_tax, annual_ins, monthly_hoa, annual_mi, 0.36)
    max_loan_mid  = max_loan_amount(qualifying_income, total_existing_debt, rate, 30,
                                    annual_tax, annual_ins, monthly_hoa, annual_mi, 0.43)
    max_loan_high = max_loan_amount(qualifying_income, total_existing_debt, rate, 30,
                                    annual_tax, annual_ins, monthly_hoa, annual_mi, 0.50)

    # PITI for each DTI point
    piti_low  = (max_loan_low  * rate_factor) + ...   # see calculations.md
    # Simpler: present "PITI for current price" plus implied PITI at each loan amount

    return PITISummary(
        piti=Range(low=..., mid=p, high=...),
        max_loan=Range(low=max_loan_low, mid=max_loan_mid, high=max_loan_high),
        dti_back_end=dti_back,
        dti_front_end=dti_front,
        reserves_months=reserves_months,
    )
```

### 4.8 `compute_sub_scores`

```python
def compute_sub_scores(i, qualifying_income, total_existing_debt,
                       piti_estimates, credit, ctc) -> Dict[str, SubScore]:
    sub_scores = {}

    # 1. Income readiness
    sub_scores["income"] = score_income(i)

    # 2. Debt readiness
    dti_back = piti_estimates.dti_back_end
    sub_scores["debt"] = SubScore(
        category="debt",
        score=score_from_band(dti_back * 100, DTI_SUBSCORE_BANDS),
        tier=tier_from_dti(dti_back),
        summary=f"Back-end DTI {dti_back*100:.1f}%",
        red_flags=[]
    )

    # 3. Credit readiness
    sub_scores["credit"] = score_credit(credit)

    # 4. Cash readiness
    sub_scores["cash"] = score_cash(i, piti_estimates, ctc)

    # 5. Payment affordability
    dti_front = piti_estimates.dti_front_end
    sub_scores["payment"] = SubScore(
        category="payment",
        score=score_from_band(dti_front * 100, FRONT_END_SUBSCORE_BANDS),
        tier=tier_from_front_dti(dti_front),
        summary=f"Front-end (PITI/income) {dti_front*100:.1f}%",
        red_flags=[]
    )

    # 6. Property readiness
    sub_scores["property"] = score_property(i)

    # 7. Documentation complexity
    sub_scores["documentation"] = score_documentation(i)

    return sub_scores
```

### 4.9 `compute_composite`

```python
def compute_composite(sub_scores: Dict[str, SubScore]):
    composite = (
        0.25 * sub_scores["debt"].score
      + 0.25 * sub_scores["credit"].score
      + 0.20 * sub_scores["income"].score
      + 0.15 * sub_scores["cash"].score
      + 0.10 * sub_scores["payment"].score
      + 0.03 * sub_scores["property"].score
      + 0.02 * sub_scores["documentation"].score
    )

    tier, message = None, None
    for band in COMPOSITE_TIERS:
        if band.min <= composite <= band.max:
            tier = band.tier
            message = band.message
            break

    return composite, tier, message
```

### 4.10 `identify_obstacles` (priority-ordered)

```python
def identify_obstacles(i, sub_scores, credit, eligible_programs):
    obstacles = []

    # Priority 1: FICO below all program floors
    if credit["fico"] < 500:
        obstacles.append(Obstacle(
            rank=1, category="credit", severity="primary",
            description="FICO below minimum for any program",
            fix_horizon="out_of_user_control"  # well, months of work
        ))

    # Priority 2: FICO below chosen program
    if i.loan_type != LoanType.UNKNOWN and i.loan_type not in eligible_programs:
        obstacles.append(Obstacle(
            rank=2, category="credit", severity="primary",
            description=f"FICO too low for {i.loan_type.value}; consider FHA or VA",
            fix_horizon="3-12 months"
        ))

    # Priority 3: Credit event within waiting period
    if not credit["waiting_clear"] and credit["years_remaining"] > 0:
        obstacles.append(Obstacle(
            rank=3, category="credit", severity="primary",
            description=f"{credit['years_remaining']:.1f} years until major credit event clears",
            fix_horizon=f"{int(credit['years_remaining']*12)} months"
        ))

    # Priority 4: Down payment below minimum
    if i.target_purchase_price and i.down_payment_available / i.target_purchase_price < MIN_DOWN_PCT[i.loan_type]:
        obstacles.append(Obstacle(
            rank=4, category="cash", severity="primary",
            description=f"Down payment below {MIN_DOWN_PCT[i.loan_type]}% minimum",
            fix_horizon="0-3 months"
        ))

    # Priority 5: DTI > 50%
    if sub_scores["debt"].score < 30:
        obstacles.append(Obstacle(
            rank=5, category="debt", severity="primary",
            description="Back-end DTI > 50%",
            fix_horizon="0-3 months"  # pay down debt
        ))

    # Priority 6: Self-employed, 1 year
    if i.income_type == IncomeType.SELF_EMPLOYED and i.employment_years_in_field and i.employment_years_in_field < 1.5:
        obstacles.append(Obstacle(
            rank=6, category="documentation", severity="primary",
            description="Self-employed, less than 2 years of tax returns",
            fix_horizon="12+ months"
        ))

    # Priority 7: Non-warrantable condo for FHA/VA/USDA
    if i.property_type == PropertyType.CONDO_NONWARRANTABLE and i.loan_type in (LoanType.FHA, LoanType.VA, LoanType.USDA):
        obstacles.append(Obstacle(
            rank=7, category="property", severity="primary",
            description="Non-warrantable condo ineligible for FHA/VA/USDA",
            fix_horizon="0-3 months"  # switch program
        ))

    # Priority 8: Negative reserves
    if sub_scores["cash"].score < 0:
        obstacles.append(Obstacle(
            rank=8, category="cash", severity="primary",
            description="No liquid assets after closing",
            fix_horizon="0-3 months"
        ))

    # Pick the top 1 as primary
    primary = obstacles[0] if obstacles else None
    secondary = obstacles[1:4]   # top 3 of remaining

    # Strengths
    strengths = []
    if credit["fico"] >= 760:
        strengths.append(Strength(rank=1, category="credit",
                                  description="FICO 760+ — top pricing tier"))
    if sub_scores["debt"].score >= 90:
        strengths.append(Strength(rank=2, category="debt",
                                  description="DTI well within standard limits"))
    if i.target_purchase_price and i.down_payment_available / i.target_purchase_price >= 20:
        strengths.append(Strength(rank=3, category="cash",
                                  description="20%+ down — no PMI required"))

    return primary, secondary, strengths
```

### 4.11 `compute_confidence`

```python
def compute_confidence(i: Inputs):
    reasons = []
    missing_count = 0

    if i.loan_type == LoanType.UNKNOWN:
        reasons.append("Loan type not specified")
        missing_count += 1
    if i.credit_score_self_reported is None and i.credit_tier_self_reported is None:
        reasons.append("Credit score not provided")
        missing_count += 1
    if i.income_type == IncomeType.UNKNOWN:
        reasons.append("Income type not specified")
        missing_count += 1
    if i.total_monthly_debt_payments == 0 and not i.debts:
        reasons.append("No debt information provided")
        missing_count += 1
    if i.target_purchase_price is None:
        reasons.append("No target purchase price")
        missing_count += 1
    if i.state is None or i.state == "DEFAULT":
        reasons.append("State not specified (using national averages for tax/insurance)")
        missing_count += 1
    if i.liquid_assets_after_close is None:
        reasons.append("Reserves not provided")
        missing_count += 1
    if i.property_type == PropertyType.UNKNOWN:
        reasons.append("Property type not specified")
        missing_count += 1

    if missing_count <= 1:    confidence = "high"
    elif missing_count <= 3:  confidence = "medium"
    else:                     confidence = "low"

    return confidence, reasons
```

### 4.12 `build_disclaimers`

```python
def build_disclaimers(i: Inputs) -> List[str]:
    base = [
        "This is a preliminary, educational estimate. It is not a mortgage pre-approval "
        "and does not constitute a loan commitment.",
        "Actual qualification depends on full documentation, an underwriter's review, "
        "and lender-specific overlays.",
        "Interest rates and program guidelines change. Your actual rate may differ.",
        "Self-reported data has not been verified. Check your credit report at "
        "AnnualCreditReport.com before applying.",
        "Decisions are based on financial information only. We do not consider race, "
        "color, religion, national origin, sex, marital status, age, or public "
        "assistance income.",
    ]

    program_specific = []
    if i.loan_type == LoanType.VA:
        program_specific.append("This tool is not affiliated with the U.S. Department of "
                                "Veterans Affairs. VA loans are issued by private lenders.")
    if i.loan_type == LoanType.USDA:
        program_specific.append("This tool is not affiliated with the U.S. Department of "
                                "Agriculture. USDA loans are issued by private lenders.")

    return base + program_specific
```

---

## 5. Test Fixtures (Minimum Set)

The engine should pass these at minimum:

| ID | Profile | Expected composite tier |
|---|---|---|
| T1 | $10k/mo W-2, 760 FICO, $40k DTI, 20% down, $500k price, TX SFR | likely_approved (≥85) |
| T2 | $5k/mo W-2, 620 FICO, $800 DTI, 3.5% down, $250k price, OH SFR | likely_approved_with_factors (55-69) |
| T3 | $4k/mo W-2, 580 FICO, $600 DTI, 3.5% down, $200k price, BK 18mo ago, FL condo | significant_hurdles (40-54) |
| T4 | $3k/mo self-employed, 540 FICO, $1.2k DTI, 0% down, $150k target | likely_denied (0-39) |
| T5 | $8k/mo W-2, 720 FICO, $200 DTI, 5% down, $400k price, CA SFR | likely_approved (≥85) |
| T6 | $6k/mo W-2, 700 FICO, $500 DTI, 0% down, $300k target, USDA | likely_approved_with_conditions (70-84) |
| T7 | All fields UNKNOWN | low confidence, ranges extremely wide |
| T8 | 760 FICO, $50k/yr income, $400 DTI, 50% down, $150k target | likely_approved_with_factors (DTI not DTI-driven, but high LTV-implied) |

---

## 6. Output Rendering Requirements (for the UI team)

The result object must render in **all** of the following ways:

1. **Headline number** — the mid-point of `affordable_purchase_price`, with
   the range immediately below.
2. **Confidence chip** — high / medium / low with a small "?" popover listing
   `confidence_reasons`.
3. **Composite score** — 0–100 number with tier label and message.
4. **Sub-score grid** — 7 cards (income, debt, credit, cash, payment, property, docs).
5. **Eligible programs** — list of `eligible_programs`; if `recommended_program`
   differs, call it out as "we recommend ___ because ___".
6. **Primary obstacle** — one big red card.
7. **Secondary obstacles** — up to 3 yellow cards.
8. **Strengths** — up to 2 green cards.
9. **Cash to close** — `cash_to_close` range.
10. **What if** — at least 3 "What if" scenarios:
    - What if you raised your credit score by 40 points?
    - What if you paid off your $X credit card?
    - What if you put 20% down instead of 3.5%?

The "what if" re-runs the affected sub-scores and shows the delta.

---

## 7. Performance Budget

- Total runtime: < 100 ms on a single CPU (pure functions, no I/O).
- Stateless — safe to run in parallel.
- Caching: results may be cached by a hash of `Inputs` for repeat sessions.
- No third-party network calls in the engine itself. Rate-sheet API is
  the **only** allowed external call, and only at the input-fetching layer.

---

*End of rule-engine-spec.md. See also: framework.md, thresholds.md, calculations.md.*
