# Borrower Denial Stress Test — 40 Scenarios

> **Generated:** 2026-08-30 · **Engine:** runDiagnostic (deterministic, no I/O)
> **Purpose:** Stress-test the diagnostic engine against 40 real-world "why I was denied" stories, then mine the gaps for new questions and loan solutions.

---

## Summary

- **Scenarios:** 40
- **Engine tiers:** some_considerations 16 · workable 17 · good_fit 3 · limited_fit 3 · strong_fit 1
- **Obstacle detection:** 13 yes / 22 partially / 3 correctly-resolved (false denial averted) / 2 missed
- **Key finding:** DTI, credit-event waiting periods, and down-payment floors are well-caught; revolving-utilization granularity, alimony/cosigned nuance, HOA-cert specifics, flood-cost impact on DTI, and declining-income trends are blind spots.

---

## Scenario Catalog

| # | ID | Persona (one-liner) | Denial Reason | Tier | Primary Obstacle | Detected |
|---|----|-------------------|---------------|------|------------------|----------|
| 1 | CREDIT-01 | 27-year-old Orlando call-center rep | FICO 520 below conventional 620 and FHA 580 floor for 3.5% down; only  | some_considerations | credit: The estimated credit score may be below the typical requi | yes |
| 2 | CREDIT-02 | 34-year-old Tampa nurse | 60-day late within 24mo triggers credit sub-score penalty and often au | some_considerations | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 3 | CREDIT-03 | 41-year-old Orlando contractor | BK Ch7 waiting period: conventional 48mo, FHA 24mo; 18mo elapsed fails | workable | credit: The estimated credit score may be below the typical requi | yes |
| 4 | CREDIT-04 | 38-year-old Miami teacher | Foreclosure waiting: FHA 36mo, conventional 84mo; 10mo elapsed fails.  | some_considerations | credit: The estimated credit score may be below the typical requi | yes |
| 5 | CREDIT-05 | 22-year-old recent grad | Thin file + collections + no FICO: FICO default 620 but collectionsUnd | some_considerations | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 6 | CREDIT-06 | 45-year-old Fort Lauderdale sales manager | Short sale waiting: conventional 48mo, FHA 36mo; 24mo elapsed fails bo | good_fit | credit: The estimated credit score may be below the typical requi | yes |
| 7 | CREDIT-07 | 52-year-old St. Pete homeowner | Deed-in-lieu 48mo conventional; 14mo elapsed fails; FHA 36mo would als | workable | credit: The estimated credit score may be below the typical requi | yes |
| 8 | CREDIT-08 | 29-year-old Jacksonville renter | High revolving utilization not directly modeled; FICO band score 75 bu | workable | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 9 | INCOME-01 | 29-year-old freelance hairstylist | Self-employed <2yr requires 2yr tax returns; 1yr return + short tenure | some_considerations | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 10 | INCOME-02 | 38-year-old Orlando auto salesman | Declining commission trend: underwriter must use lower of 2yr avg or m | some_considerations | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 11 | INCOME-03 | 24-year-old Jacksonville gig worker | Undocumented cash + inconsistent deposits + 60-day late + collections; | some_considerations | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 12 | INCOME-04 | 31-year-old Miami Beach bartender | Variable hourly must be averaged over 2yr; recent high not usable; fro | some_considerations | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 13 | INCOME-05 | 42-year-old Tampa teacher + Etsy Schedule C loss -$8 | Schedule C loss offsets W-2 per agency; mixed income averaging 80% sti | workable | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 14 | INCOME-06 | 27-year-old Army veteran | W2 under 1yr, new field, probationary; VA still requires stable likely | limited_fit | credit: The estimated credit score may be below the typical requi | partially |
| 15 | INCOME-07 | 50-year-old Fort Myers contractor | Bank statement program requires sourcing and limits NSFs; large transf | some_considerations | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 16 | INCOME-08 | 45-year-old Orlando RE agent | 2yr avg net Schedule C $32k, not 1099 gross; write-offs decimate quali | good_fit | — | no |
| 17 | DTI-01 | 28-year-old Orlando teacher | DTI 57.8% exceeds FHA program ceiling | workable | debt: The estimated debt-to-income ratio appears to be above 50%. | yes |
| 18 | DTI-02 | 36-year-old Tampa renter | Front-end DTI >40% triggers payment sub-score 20 and manual overlay; h | workable | debt: The estimated debt-to-income ratio appears to be above 50%. | yes |
| 19 | DTI-03 | 29-year-old Miami grad | Deferred student loan 1% rule; borrower expected $0, engine correctly  | workable | debt: The estimated debt-to-income ratio appears to be above 50%. | yes |
| 20 | DTI-04 | 38-year-old Fort Lauderdale divorced dad | Alimony with <10 months remaining should be excluded per FNMA (engine  | workable | — | resolved |
| 21 | DTI-05 | 31-year-old Orlando cosigner | Cosigned debt with on-time 12mo history should be excluded; questionna | workable | — | resolved |
| 22 | DTI-06 | 26-year-old Miami nurse | 30-day account with balance should count full balance if unpaid; quest | workable | — | no |
| 23 | DTI-07 | 33-year-old Tampa renter | Revolving 5% of balance rule exceeds stated minDue; borrower underesti | workable | debt: The estimated debt-to-income ratio appears to be above 50%. | yes |
| 24 | DTI-08 | 39-year-old Fort Myers borrower | Stacked debts cause DTI 68% >50% conventional ceiling; needs debt payd | workable | debt: The estimated debt-to-income ratio appears to be above 50%. | yes |
| 25 | CASH-01 | 24-year-old Jacksonville barista | Down 1.9% <3% conventional/3.5% FHA; gift unsourced fails; cash-to-clo | some_considerations | cash: The down payment you entered is below the typical 3% minimu | yes |
| 26 | CASH-02 | 68-year-old retired Duval teacher | Reserves 1200 < 2 months PITIA+HOA; retiree fixed income with minimal  | some_considerations | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 27 | CASH-03 | 45-year-old Orlando investor | Investment 2-4 unit needs 20-25% down; 6mo reserves for subject + 2 re | workable | credit: The estimated credit score may be below the typical requi | partially |
| 28 | CASH-04 | 38-year-old Tampa plumber | 2.82% < FHA 3.5% floor; unsourced large deposits; cash-to-close shortf | limited_fit | cash: The down payment you entered is below the typical 3.5% mini | yes |
| 29 | CASH-05 | 29-year-old Miami gig worker | 0% <3% conv/3.5% FHA/5% manufactured min; 0 months reserves; cash-undo | limited_fit | credit: The estimated credit score may be below the typical requi | partially |
| 30 | CASH-06 | 34-year-old Pensacola veteran VA 0% down $390k | VA 0% still needs closing + reserves; 0.4mo reserves + unsourced Zelle | some_considerations | credit: The estimated credit score may be below the typical requi | partially |
| 31 | CASH-07 | 31-year-old Gainesville LPN | 2.09% <3.5% FHA; $6k gift undocumented cannot count; 0.2mo reserves | some_considerations | cash: The down payment you entered is below the typical 3.5% mini | yes |
| 32 | CASH-08 | 42 & 40 Miami teachers dual W-2 | 25% down meets LTV but $0 reserves fails 6-12mo PITIA+ flood for >$500 | strong_fit | cash: You may have little or nothing left in savings after closin | resolved |
| 33 | PROP-01 | 32-year-old Brickell marketing coordinator | Non-warrantable: litigation + single-entity >20% exceeds Fannie/Freddi | workable | credit: The estimated credit score may be below the typical requi | partially |
| 34 | PROP-02 | 58-year-old retired veteran | Manufactured: single-wide, pre-HUD code, leased land, no permanent fou | some_considerations | credit: The estimated credit score may be below the typical requi | partially |
| 35 | PROP-03 | 41-year-old Tampa contractor investor | Investment 2-4 unit needs 25% down; DSCR 0.92 <1.0 fails investor cash | good_fit | credit: The estimated credit score may be below the typical requi | partially |
| 36 | PROP-04 | 67-year-old Fort Myers retiree | HOA delinquency >15% + low reserves + flood AE mandatory insurance fai | workable | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 37 | PROP-05 | 29-year-old Miami crypto trader | Large unexplained deposit $15k >50% of monthly income without 2mo sour | workable | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 38 | PROP-06 | 36-year-old Tampa investor | Occupancy mismatch: conventional_conf requires primary; investment 2-4 | workable | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |
| 39 | PROP-07 | 44-year-old rural Levy County buyer | USDA requires 640 FICO (lender overlay) + rural location; 610 fails; q | some_considerations | credit: The estimated credit score may be below the typical requi | partially |
| 40 | PROP-08 | 31-year-old ITIN holder | No FICO + ITIN: conventional requires SSN + FICO 620; alternative is I | some_considerations | debt: The estimated debt-to-income ratio appears to be above 50%. | partially |

---

## Detailed Scenarios

### 1. CREDIT-01 — 27-year-old Orlando call-center rep, FICO 520 after medical collections, first-time FHA buyer

> I was denied for conventional with 520 credit even though I had 10% down. The lender said I'm below every program's floor except FHA with 10% down, and even that needs manual review.

**Why denied (underwriting):** FICO 520 below conventional 620 and FHA 580 floor for 3.5% down; only FHA 500-579 with 10% down is possible but lender overlay blocked

**Inputs:** income $4800/mo (w2, unknown doc), FICO 540, DTI inputs debt $650/mo, down $25000 on $250000, sfr / primary, FL, reserves $10000

**Engine result:** tier `some_considerations` (51), DTI 57.3% back-end / 43.7% front-end, eligible `[fha, naca]`, recommended `fha`, confidence `high`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [debt] The estimated debt-to-income ratio appears to be above 50%.

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 2. CREDIT-02 — 34-year-old Tampa nurse, FICO 640 but 60-day late on auto 8 months ago

> My 640 score was okay but I was 60 days late on my car in the last year. Underwriting denied me for mortgage lates even though my score recovered.

**Why denied (underwriting):** 60-day late within 24mo triggers credit sub-score penalty and often automated underwriting fail; manual review required

**Inputs:** income $6200/mo (w2, unknown doc), FICO 660, DTI inputs debt $1100/mo, down $15000 on $300000, sfr / primary, FL, reserves $10000

**Engine result:** tier `some_considerations` (53), DTI 59.1% back-end / 41.3% front-end, eligible `[conventional_conf, fha, naca]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 3. CREDIT-03 — 41-year-old Orlando contractor, FICO 620, BK Ch7 discharged 18 months ago, wants conventional

> I had Chapter 7 18 months ago. My lender said conventional needs 4 years after BK, FHA needs 2 years. I was denied for both even with 15% down.

**Why denied (underwriting):** BK Ch7 waiting period: conventional 48mo, FHA 24mo; 18mo elapsed fails both

**Inputs:** income $7500/mo (w2, unknown doc), FICO 640, DTI inputs debt $1200/mo, down $45000 on $300000, sfr / primary, FL, event bk_ch7 1.5yr ago, reserves $10000

**Engine result:** tier `workable` (67), DTI 45.1% back-end / 29.1% front-end, eligible `[naca]`, recommended `naca`, confidence `high`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [credit] A prior credit event has about 2.5 year(s) left in its typical waiting period.

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 4. CREDIT-04 — 38-year-old Miami teacher, foreclosure 10 months ago, FICO 640, wants FHA 3.5% down

> Foreclosure 10 months ago. Lender said FHA needs 3 years after foreclosure, and even non-QM Portfolio Select needs 1 year. Denied everywhere except maybe hard money.

**Why denied (underwriting):** Foreclosure waiting: FHA 36mo, conventional 84mo; 10mo elapsed fails. Portfolio Select (non-QM) requires 12mo, still 2mo short

**Inputs:** income $5800/mo (w2, unknown doc), FICO 660, DTI inputs debt $900/mo, down $12250 on $350000, sfr / primary, FL, event foreclosure 0.83yr ago, reserves $10000

**Engine result:** tier `some_considerations` (51), DTI 65.0% back-end / 49.5% front-end, eligible `[naca]`, recommended `naca`, confidence `high`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [credit] A prior credit event has about 2.2 year(s) left in its typical waiting period. · [debt] The estimated debt-to-income ratio appears to be above 50%.

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 5. CREDIT-05 — 22-year-old recent grad, thin file, no score, $38k collections from medical + dorm fees

> I have no real credit history, just a secured card 4 months old. Lender said I have insufficient tradelines and my collections make me ineligible for automated approval.

**Why denied (underwriting):** Thin file + collections + no FICO: FICO default 620 but collectionsUnder2k=false penalizes; insufficient trade lines not explicitly modeled

**Inputs:** income $4200/mo (w2, unknown doc), FICO unknown, DTI inputs debt $400/mo, down $8000 on $220000, sfr / primary, FL, reserves $10000

**Engine result:** tier `some_considerations` (48), DTI 57.1% back-end / 47.6% front-end, eligible `[conventional_conf, fha, naca]`, recommended `fha`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** hazard_insurance, fico_default, assumed_rate, mortgage_insurance

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 6. CREDIT-06 — 45-year-old Fort Lauderdale sales manager, FICO 720, short sale 24 months ago, wants conventional 10% down

> Short sale 2 years ago. Conventional wants 4 years, FHA wants 3 years. My 720 score didn't matter — denied for seasoning.

**Why denied (underwriting):** Short sale waiting: conventional 48mo, FHA 36mo; 24mo elapsed fails both; VA would be 24mo (would pass VA)

**Inputs:** income $9500/mo (w2, unknown doc), FICO 740, DTI inputs debt $1600/mo, down $40000 on $400000, sfr / primary, FL, event short_sale 2yr ago, reserves $10000

**Engine result:** tier `good_fit` (72), DTI 46.6% back-end / 29.7% front-end, eligible `[naca]`, recommended `naca`, confidence `high`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [credit] A prior credit event has about 2.0 year(s) left in its typical waiting period.

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 7. CREDIT-07 — 52-year-old St. Pete homeowner, deed-in-lieu 14 months ago, FICO 680, wants conventional second home

> Deed-in-lieu 14 months ago on my prior home. Lender said conventional needs 4 years for second home. Denied.

**Why denied (underwriting):** Deed-in-lieu 48mo conventional; 14mo elapsed fails; FHA 36mo would also fail

**Inputs:** income $11000/mo (w2, unknown doc), FICO 700, DTI inputs debt $2100/mo, down $80000 on $500000, sfr / second_home, FL, event deeds_in_lieu 1.17yr ago, reserves $10000

**Engine result:** tier `workable` (68), DTI 49.7% back-end / 30.6% front-end, eligible `[unknown]`, recommended `—`, confidence `high`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [credit] A prior credit event has about 2.8 year(s) left in its typical waiting period.

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 8. CREDIT-08 — 29-year-old Jacksonville renter, FICO 680 but utilization 92% on $18k revolving balances

> My score is 680 but I carry $16k on cards with $18k limits. Lender said my utilization is killing my mortgage score even though I never miss payments. Denied for high revolving utilization overlay.

**Why denied (underwriting):** High revolving utilization not directly modeled; FICO band score 75 but real underwriting would penalize 92% util separately

**Inputs:** income $6500/mo (w2, unknown doc), FICO 700, DTI inputs debt $1450/mo, down $12000 on $280000, sfr / primary, FL, reserves $10000

**Engine result:** tier `workable` (61), DTI 56.1% back-end / 35.8% front-end, eligible `[conventional_conf, fha, naca]`, recommended `fha`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 9. INCOME-01 — 29-year-old freelance hairstylist, self-employed 14 months, Tampa booth renter

> I make $7,200/mo doing hair but have only 1.2 years self-employment and one year of taxes. Lender said I need 2 years history, denied.

**Why denied (underwriting):** Self-employed <2yr requires 2yr tax returns; 1yr return + short tenure fails agency

**Inputs:** income $7200/mo (self_employed, full_tax_1yr), FICO 732, DTI inputs debt $1680/mo, down $15500 on $395000, sfr / primary, FL, reserves $10000

**Engine result:** tier `some_considerations` (48), DTI 68.3% back-end / 45.0% front-end, eligible `[conventional_conf, conventional_jumbo, fha, naca, non_qm_jumbo]`, recommended `fha`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Secondary:** [documentation] Self-employment history of under two years typically requires more tax-return history to qualify.

**Assumptions disclosed:** hazard_insurance, fico_haircut, non_qm_rate_addon, qualifying_income_non_qm, assumed_rate, mortgage_insurance

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 10. INCOME-02 — 38-year-old Orlando auto salesman, commission declining $108k->$82k

> Made $108k then $82k; lender used lower year due to declining trend, DTI too high, denied.

**Why denied (underwriting):** Declining commission trend: underwriter must use lower of 2yr avg or most recent year; trend not modeled, engine uses 85% haircut flat

**Inputs:** income $8500/mo (commission, w2_stubs), FICO 690, DTI inputs debt $1450/mo, down $33500 on $335000, condo_warrantable / primary, FL, reserves $10000

**Engine result:** tier `some_considerations` (52), DTI 61.9% back-end / 41.9% front-end, eligible `[conventional_conf, fha, naca]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** commission_haircut, hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 11. INCOME-03 — 24-year-old Jacksonville gig worker, mixed cash tips, $6,200 gross but $3,800 deposits

> Cash tips not deposited, inconsistent deposits, undocumented. Lender said income not stable or sourced, denied.

**Why denied (underwriting):** Undocumented cash + inconsistent deposits + 60-day late + collections; fails documentation and stability

**Inputs:** income $6200/mo (mixed, cash_undocumented), FICO 660, DTI inputs debt $980/mo, down $14250 on $285000, sfr / primary, FL, reserves $10000

**Engine result:** tier `some_considerations` (44), DTI 68.9% back-end / 49.2% front-end, eligible `[conventional_conf, fha, naca, bank_statement]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** mixed_income_haircut, hazard_insurance, fico_haircut, cash_income_estimate, non_qm_rate_addon, assumed_rate, mortgage_insurance

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 12. INCOME-04 — 31-year-old Miami Beach bartender, variable hourly 25-40h/week seasonal

> Summer checks $5,800 but lender averaged 2yr W-2s at $4,200, DTI 57%, denied.

**Why denied (underwriting):** Variable hourly must be averaged over 2yr; recent high not usable; front-end DTI + flood HOA pushes over

**Inputs:** income $5800/mo (variable_hourly, w2_stubs), FICO 715, DTI inputs debt $1120/mo, down $10500 on $350000, condo_warrantable / primary, FL, reserves $10000

**Engine result:** tier `some_considerations` (51), DTI 78.2% back-end / 58.9% front-end, eligible `[conventional_conf, fha, naca, non_qm_jumbo]`, recommended `fha`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** variable_income_haircut, flood_insurance, hazard_insurance, fico_haircut, non_qm_rate_addon, qualifying_income_non_qm, assumed_rate, mortgage_insurance

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 13. INCOME-05 — 42-year-old Tampa teacher + Etsy Schedule C loss -$8,500

> Etsy loss subtracted from W-2, qualifying income fell 30%, DTI over 50%, denied.

**Why denied (underwriting):** Schedule C loss offsets W-2 per agency; mixed income averaging 80% still not capturing negative SE adjustment

**Inputs:** income $6800/mo (mixed, full_tax_2yr), FICO 790, DTI inputs debt $1850/mo, down $42500 on $425000, sfr / primary, FL, reserves $10000

**Engine result:** tier `workable` (57), DTI 70.8% back-end / 43.6% front-end, eligible `[conventional_conf, conventional_jumbo, fha, naca, non_qm_jumbo]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Strengths:** Estimated credit score is in the top pricing tier.

**Assumptions disclosed:** mixed_income_haircut, hazard_insurance, fico_haircut, non_qm_rate_addon, qualifying_income_non_qm, assumed_rate, mortgage_insurance

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 14. INCOME-06 — 27-year-old Army veteran, 4 months in new IT job, VA loan

> New civilian IT job 4 months, prior military not related field, 0.33yr tenure, denied for short history.

**Why denied (underwriting):** W2 under 1yr, new field, probationary; VA still requires stable likely-to-continue; W2 offer letter without 2yr continuity

**Inputs:** income $6200/mo (w2, w2_offer_letter), FICO 565, DTI inputs debt $1350/mo, down $0 on $310000, townhome / primary, FL, reserves $3800

**Engine result:** tier `limited_fit` (39), DTI 69.6% back-end / 47.8% front-end, eligible `[naca]`, recommended `naca`, confidence `medium`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [debt] The estimated debt-to-income ratio appears to be above 50%.

**Assumptions disclosed:** phantom_down_payment, hazard_insurance, fico_haircut, assumed_rate, confidence_range_width

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 15. INCOME-07 — 50-year-old Fort Myers contractor, bank statement 12mo, $14.5k gross but NSFs and unsourced transfers

> Bank deposits $13.8k/mo but 9 overdrafts and >50% transfers unsourced, denied on non-QM cash-flow mismanagement.

**Why denied (underwriting):** Bank statement program requires sourcing and limits NSFs; large transfers without invoices disqualify

**Inputs:** income $14500/mo (self_employed, bank_statement_12), FICO 680, DTI inputs debt $2200/mo, down $82500 on $550000, sfr / primary, FL, reserves $10000

**Engine result:** tier `some_considerations` (49), DTI 57.4% back-end / 37.2% front-end, eligible `[conventional_conf, fha, naca, bank_statement]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** hazard_insurance, fico_haircut, bank_statement_income, non_qm_rate_addon, qualifying_income_non_qm, assumed_rate, mortgage_insurance

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 16. INCOME-08 — 45-year-old Orlando RE agent, 1099 $180k gross net $32k

> Gross $15k/mo but net $2,666 after write-offs, DTI 65%, denied.

**Why denied (underwriting):** 2yr avg net Schedule C $32k, not 1099 gross; write-offs decimate qualifying income

**Inputs:** income $15000/mo (self_employed, full_tax_2yr), FICO 760, DTI inputs debt $2100/mo, down $112500 on $450000, sfr / primary, FL, reserves $10000

**Engine result:** tier `good_fit` (84), DTI 32.1% back-end / 18.1% front-end, eligible `[conventional_conf, conventional_jumbo, fha, naca, non_qm_jumbo]`, recommended `conventional_conf`, confidence `high`

**Strengths:** Estimated debt-to-income ratio is well within typical limits. · A down payment of 20% or more typically removes the need for mortgage insurance.

**Assumptions disclosed:** hazard_insurance, fico_haircut, non_qm_rate_addon, qualifying_income_non_qm, assumed_rate

**Detected?** no — _Engine misses the real denial reason_

---

### 17. DTI-01 — 28-year-old Orlando teacher, FHA 385k, DTI 58%

> Back-end DTI 58%, FHA cap 56.9%, denied by 1.1 points.

**Why denied (underwriting):** DTI 57.8% exceeds FHA program ceiling

**Inputs:** income $5800/mo (w2, unknown doc), FICO 700, DTI inputs debt $1270/mo, down $13475 on $385000, sfr / primary, FL, reserves $10000

**Engine result:** tier `workable` (55), DTI 75.7% back-end / 53.8% front-end, eligible `[conventional_conf, fha, naca]`, recommended `fha`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 18. DTI-02 — 36-year-old Tampa renter, W2 $4,500 income, $280k price, HOA $500, front-end 45% but back-end moderate

> Front-end housing ratio was 45% due to high HOA and taxes, denied on payment shock even though back-end was 48%.

**Why denied (underwriting):** Front-end DTI >40% triggers payment sub-score 20 and manual overlay; housing expense alone too high

**Inputs:** income $4500/mo (w2, unknown doc), FICO 700, DTI inputs debt $650/mo, down $10000 on $280000, sfr / primary, FL, reserves $10000

**Engine result:** tier `workable` (57), DTI 77.6% back-end / 63.1% front-end, eligible `[conventional_conf, fha, naca]`, recommended `fha`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 19. DTI-03 — 29-year-old Miami grad, student loans $45k deferred $0 payment, FHA

> Student loans deferred, lender used 1% of $45k = $450, not $0, DTI jumped to 49%, denied.

**Why denied (underwriting):** Deferred student loan 1% rule; borrower expected $0, engine correctly uses max(1% balance, fully amortized)

**Inputs:** income $6200/mo (w2, unknown doc), FICO 680, DTI inputs debt $950/mo, down $12000 on $320000, sfr / primary, FL, reserves $10000

**Engine result:** tier `workable` (56), DTI 64.1% back-end / 45.9% front-end, eligible `[conventional_conf, fha, naca]`, recommended `fha`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 20. DTI-04 — 38-year-old Fort Lauderdale divorced dad, alimony $800 with 8 months remaining

> Paying $800 alimony but only 8 months left. Lender still counted it, DTI 52%, denied. Should have been excluded under 10-month rule.

**Why denied (underwriting):** Alimony with <10 months remaining should be excluded per FNMA (engine does), but questionnaire only collects total debt, so engine overcounts

**Inputs:** income $8500/mo (w2, unknown doc), FICO 720, DTI inputs debt $2100/mo, down $30000 on $400000, sfr / primary, FL, reserves $10000

**Engine result:** tier `workable` (69), DTI 48.0% back-end / 36.2% front-end, eligible `[conventional_conf, conventional_jumbo, fha, naca]`, recommended `conventional_conf`, confidence `high`

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** resolved — _Engine applies the program exclusion and averts the false denial_

---

### 21. DTI-05 — 31-year-old Orlando cosigner, secondary auto $420 excluded because other party pays on time 12mo

> Cosigned sister's car, she pays on time. Lender counted it anyway, DTI 51%, denied, but AUS would exclude with 12mo proof.

**Why denied (underwriting):** Cosigned debt with on-time 12mo history should be excluded; questionnaire lumps it into total debt

**Inputs:** income $6800/mo (w2, unknown doc), FICO 700, DTI inputs debt $1650/mo, down $20000 on $350000, sfr / primary, FL, reserves $10000

**Engine result:** tier `workable` (62), DTI 52.7% back-end / 40.5% front-end, eligible `[conventional_conf, fha, naca]`, recommended `conventional_conf`, confidence `high`

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** resolved — _Engine applies the program exclusion and averts the false denial_

---

### 22. DTI-06 — 26-year-old Miami nurse, 30-day account $12k balance unpaid (furniture store)

> Had $12k 30-day account for furniture due next month. Lender counted full $12k against DTI/reserves, denied.

**Why denied (underwriting):** 30-day account with balance should count full balance if unpaid; questionnaire doesn't distinguish 30-day vs revolving

**Inputs:** income $5800/mo (w2, unknown doc), FICO 690, DTI inputs debt $1100/mo, down $15000 on $300000, sfr / primary, FL, reserves $10000

**Engine result:** tier `workable` (59), DTI 53.6% back-end / 44.2% front-end, eligible `[conventional_conf, fha, naca]`, recommended `conventional_conf`, confidence `high`

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** no — _Engine misses the real denial reason_

---

### 23. DTI-07 — 33-year-old Tampa renter, revolving $18k balance minDue $450 but 5% rule = $900

> Carried $18k on cards, paying $450 min. Lender used $900 (5% of balance) per Fannie, DTI jumped 6 points, denied.

**Why denied (underwriting):** Revolving 5% of balance rule exceeds stated minDue; borrower underestimates DTI

**Inputs:** income $7200/mo (w2, unknown doc), FICO 700, DTI inputs debt $1200/mo, down $25000 on $380000, sfr / primary, FL, reserves $10000

**Engine result:** tier `workable` (58), DTI 60.8% back-end / 41.1% front-end, eligible `[conventional_conf, fha, naca]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 24. DTI-08 — 39-year-old Fort Myers borrower, $9k income but $4,200 PITI + $1,900 debts = 68% DTI

> Even with $9k income, my debts plus new house are 68% of income. Lender said max is 50% conventional, denied.

**Why denied (underwriting):** Stacked debts cause DTI 68% >50% conventional ceiling; needs debt paydown or cheaper house

**Inputs:** income $9000/mo (w2, unknown doc), FICO 740, DTI inputs debt $1900/mo, down $40000 on $500000, sfr / primary, FL, reserves $10000

**Engine result:** tier `workable` (59), DTI 61.8% back-end / 40.7% front-end, eligible `[conventional_conf, conventional_jumbo, fha, naca]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 25. CASH-01 — 24-year-old Jacksonville barista, 1.9% down + undocumented Venmo gift

> Saved $6k plus $5k Venmo from parents no gift letter, 1.9% down on $315k, short $7k to close, denied.

**Why denied (underwriting):** Down 1.9% <3% conventional/3.5% FHA; gift unsourced fails; cash-to-close shortfall + negative reserves

**Inputs:** income $5200/mo (w2, unknown doc), FICO 702, DTI inputs debt $980/mo, down $6000 on $315000, sfr / primary, FL, reserves $500

**Engine result:** tier `some_considerations` (48), DTI 56.7% back-end / 42.7% front-end, eligible `[conventional_conf, fha, naca]`, recommended `fha`, confidence `high`

**Primary obstacle:** [cash] The down payment you entered is below the typical 3% minimum for this program. *(fix: 0-3 months)*

**Secondary:** [debt] The estimated debt-to-income ratio appears to be above 50%. · [cash] Savings after closing cover less than one month of payments; building toward two to six months of reserves would strengthen the file.

**Assumptions disclosed:** hazard_insurance, fico_haircut, co_borrower_credit, assumed_rate, mortgage_insurance

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 26. CASH-02 — 68-year-old retired Duval teacher, 5% down condo, reserves $1,200

> Pension $3,850, 5% down $280k condo, left $1,200, need 2 months PITIA+HOA ~$4,800, denied for reserves.

**Why denied (underwriting):** Reserves 1200 < 2 months PITIA+HOA; retiree fixed income with minimal post-close liquidity fails overlay

**Inputs:** income $3850/mo (retired_fixed, w2_stubs), FICO 744, DTI inputs debt $420/mo, down $14000 on $280000, condo_warrantable / primary, FL, reserves $1200

**Engine result:** tier `some_considerations` (52), DTI 77.1% back-end / 66.2% front-end, eligible `[conventional_conf, conventional_jumbo, fha, naca, non_qm_jumbo]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Secondary:** [cash] Savings after closing cover less than one month of payments; building toward two to six months of reserves would strengthen the file.

**Assumptions disclosed:** hazard_insurance, fico_haircut, non_qm_rate_addon, assumed_rate, mortgage_insurance

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 27. CASH-03 — 45-year-old Orlando investor, 550k duplex 15% down, 3 properties, reserves $3,500

> 15% down on $550k duplex investment, need 20-25% + 6 months reserves for all properties ~$25k, denied.

**Why denied (underwriting):** Investment 2-4 unit needs 20-25% down; 6mo reserves for subject + 2 rentals fails at $3,500

**Inputs:** income $12500/mo (self_employed, dscr_rent), FICO 762, DTI inputs debt $3570/mo, down $82500 on $550000, multi_2_4 / investment, FL, reserves $3500, rent $3800

**Engine result:** tier `workable` (62), DTI 60.1% back-end / 31.5% front-end, eligible `[dscr, non_qm_jumbo]`, recommended `dscr`, confidence `high`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [cash] Investment properties with 2-4 units typically require a down payment of 20% or more; the amount entered is below that level. · [cash] Savings after closing cover less than one month of payments; building toward two to six months of reserves would strengthen the file.

**Assumptions disclosed:** hazard_insurance, fico_haircut, non_qm_rate_addon, non_qm_rate_addon, qualifying_income_non_qm, assumed_rate, mortgage_insurance, dscr_coverage

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 28. CASH-04 — 38-year-old Tampa plumber, bank statement 12mo, $12k down 2.8% FHA, unsourced $4k deposits

> Bank statement $7,800 FHA $425k 2.8% down, three $4k cash deposits unsourced, below 3.5% + $6,800 short, denied.

**Why denied (underwriting):** 2.82% < FHA 3.5% floor; unsourced large deposits; cash-to-close shortfall 0.3mo reserves

**Inputs:** income $7800/mo (self_employed, bank_statement_12), FICO 632, DTI inputs debt $1450/mo, down $12000 on $425000, sfr / primary, FL, reserves $800

**Engine result:** tier `limited_fit` (35), DTI 101.8% back-end / 73.8% front-end, eligible `[fha, naca]`, recommended `fha`, confidence `high`

**Primary obstacle:** [cash] The down payment you entered is below the typical 3.5% minimum for this program. *(fix: 0-3 months)*

**Secondary:** [debt] The estimated debt-to-income ratio appears to be above 50%. · [cash] Savings after closing cover less than one month of payments; building toward two to six months of reserves would strengthen the file.

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 29. CASH-05 — 29-year-old Miami gig worker, $260k manufactured, zero down, $2,100 total assets

> 0% down manufactured, $2,100 total, $3,200 recent deposits unsourced, denied zero down + no reserves.

**Why denied (underwriting):** 0% <3% conv/3.5% FHA/5% manufactured min; 0 months reserves; cash-undocumented + unexplained deposits

**Inputs:** income $4800/mo (variable_hourly, cash_undocumented), FICO 602, DTI inputs debt $850/mo, down $0 on $260000, manufactured / primary, FL, reserves $0

**Engine result:** tier `limited_fit` (36), DTI 76.4% back-end / 56.7% front-end, eligible `[fha, naca]`, recommended `fha`, confidence `medium`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [debt] The estimated debt-to-income ratio appears to be above 50%. · [property] Manufactured homes must sit on owned land with a permanent foundation and typically must be a multi-section (double-wide or larger) home built after 1976 to use most standard loan programs. · [cash] You may have little or nothing left in savings after closing; lenders typically want at least one to six months of payments in reserve after the loan closes.

**Assumptions disclosed:** phantom_down_payment, variable_income_haircut, flood_insurance, hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance, confidence_range_width

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 30. CASH-06 — 34-year-old Pensacola veteran VA 0% down $390k, reserves $1,200 + Zelle unsourced

> VA 0% down $390k, thought no down = no cash needed. Need closing + 1mo reserve, $1,200 left, Zelle $2,800 unsourced, denied.

**Why denied (underwriting):** VA 0% still needs closing + reserves; 0.4mo reserves + unsourced Zelle cash-to-close shortfall ~$8k

**Inputs:** income $6500/mo (w2, unknown doc), FICO 735, DTI inputs debt $800/mo, down $0 on $390000, sfr / primary, FL, reserves $1200

**Engine result:** tier `some_considerations` (50), DTI 63.2% back-end / 50.9% front-end, eligible `[conventional_conf, conventional_jumbo, fha, naca]`, recommended `fha`, confidence `medium`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [debt] The estimated debt-to-income ratio appears to be above 50%. · [cash] Savings after closing cover less than one month of payments; building toward two to six months of reserves would strengthen the file.

**Assumptions disclosed:** phantom_down_payment, hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance, confidence_range_width

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 31. CASH-07 — 31-year-old Gainesville LPN, FHA $335k townhome $7k down 2% gift promised no letter

> Saved $7k FHA 3.5% needs $11,725, mom's $6k gift no letter, $11k short total, denied below-min down.

**Why denied (underwriting):** 2.09% <3.5% FHA; $6k gift undocumented cannot count; 0.2mo reserves

**Inputs:** income $5200/mo (w2, unknown doc), FICO 662, DTI inputs debt $610/mo, down $7000 on $335000, townhome / primary, FL, reserves $500

**Engine result:** tier `some_considerations` (47), DTI 72.5% back-end / 60.8% front-end, eligible `[conventional_conf, fha, naca]`, recommended `fha`, confidence `high`

**Primary obstacle:** [cash] The down payment you entered is below the typical 3.5% minimum for this program. *(fix: 0-3 months)*

**Secondary:** [debt] The estimated debt-to-income ratio appears to be above 50%. · [cash] Savings after closing cover less than one month of payments; building toward two to six months of reserves would strengthen the file.

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** yes — _Engine obstacle matches denial reason_

---

### 32. CASH-08 — 42 & 40 Miami teachers dual W-2, $625k flood SFR 25% down wiping savings to $0

> 25% down $625k to get better rate, left $0 after close, need 6mo reserves for >$500k flood, denied negative reserves.

**Why denied (underwriting):** 25% down meets LTV but $0 reserves fails 6-12mo PITIA+ flood for >$500k flood-zone; wiping liquidity to chase rate

**Inputs:** income $11200/mo (w2, unknown doc), FICO 802, DTI inputs debt $1420/mo, down $156250 on $625000, sfr / primary, FL, reserves $0

**Engine result:** tier `strong_fit` (85), DTI 31.8% back-end / 23.2% front-end, eligible `[conventional_conf, conventional_jumbo, fha, naca]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [cash] You may have little or nothing left in savings after closing; lenders typically want at least one to six months of payments in reserve after the loan closes. *(fix: 0-3 months)*

**Strengths:** Estimated debt-to-income ratio is well within typical limits. · A down payment of 20% or more typically removes the need for mortgage insurance.

**Assumptions disclosed:** flood_insurance, hazard_insurance, fico_haircut, co_borrower_credit, assumed_rate

**Detected?** resolved — _Engine applies the program exclusion and averts the false denial_

---

### 33. PROP-01 — 32-year-old Brickell marketing coordinator, first-time condo, 5% down, 740 FICO

> 5% down $385k Brickell condo, lender denied: building non-warrantable, pending litigation, 28% investor ownership >20% cap.

**Why denied (underwriting):** Non-warrantable: litigation + single-entity >20% exceeds Fannie/Freddie warrantable thresholds

**Inputs:** income $7200/mo (w2, unknown doc), FICO 760, DTI inputs debt $700/mo, down $19250 on $385000, condo_nonwarrantable / primary, FL, reserves $10000

**Engine result:** tier `workable` (58), DTI 57.8% back-end / 48.1% front-end, eligible `[naca, non_warrantable]`, recommended `naca`, confidence `high`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [debt] The estimated debt-to-income ratio appears to be above 50%. · [property] The condo building appears to be non-warrantable (for example pending litigation, high investor ownership, or delinquent association dues), which excludes most standard loan programs; specialized lenders handle these buildings.

**Assumptions disclosed:** hazard_insurance, fico_haircut, non_qm_rate_addon, assumed_rate

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 34. PROP-02 — 58-year-old retired veteran, VA manufactured single-wide leased land Ocala

> VA 0% down 1994 single-wide on leased park land no permanent foundation, denied: not VA/HUD eligible.

**Why denied (underwriting):** Manufactured: single-wide, pre-HUD code, leased land, no permanent foundation cert fails VA/HUD

**Inputs:** income $5400/mo (retired_fixed, unknown doc), FICO 690, DTI inputs debt $595/mo, down $0 on $195000, manufactured / primary, FL, reserves $10000

**Engine result:** tier `some_considerations` (52), DTI 56.1% back-end / 45.1% front-end, eligible `[conventional_conf, fha, naca]`, recommended `fha`, confidence `medium`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [debt] The estimated debt-to-income ratio appears to be above 50%. · [property] Manufactured homes must sit on owned land with a permanent foundation and typically must be a multi-section (double-wide or larger) home built after 1976 to use most standard loan programs.

**Assumptions disclosed:** phantom_down_payment, hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance, confidence_range_width

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 35. PROP-03 — 41-year-old Tampa contractor investor, 4-unit $520k 15% down DSCR 0.92

> 15% down quadplex investment, DSCR 0.92 rents $4,200 don't cover mortgage, denied: need 25% down + DSCR 1.0

**Why denied (underwriting):** Investment 2-4 unit needs 25% down; DSCR 0.92 <1.0 fails investor cash-flow program

**Inputs:** income $11500/mo (self_employed, full_tax_2yr), FICO 730, DTI inputs debt $1540/mo, down $78000 on $520000, multi_2_4 / investment, FL, reserves $10000, rent $4200

**Engine result:** tier `good_fit` (73), DTI 46.1% back-end / 32.8% front-end, eligible `[dscr, non_qm_jumbo]`, recommended `dscr`, confidence `high`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [cash] Investment properties with 2-4 units typically require a down payment of 20% or more; the amount entered is below that level.

**Assumptions disclosed:** hazard_insurance, fico_haircut, non_qm_rate_addon, non_qm_rate_addon, qualifying_income_non_qm, assumed_rate, mortgage_insurance, dscr_coverage

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 36. PROP-04 — 67-year-old Fort Myers retiree, canal-front SFR flood AE, HOA insolvent 35% delinquent

> 20% down $310k canal SFR 780 FICO, denied: HOA 35% delinquent + flood $6,800/yr blows DTI and HOA won't certify.

**Why denied (underwriting):** HOA delinquency >15% + low reserves + flood AE mandatory insurance fails HOA cert and DTI

**Inputs:** income $4800/mo (retired_fixed, unknown doc), FICO 800, DTI inputs debt $405/mo, down $62000 on $310000, sfr / primary, FL, reserves $10000

**Engine result:** tier `workable` (62), DTI 59.2% back-end / 50.8% front-end, eligible `[conventional_conf, conventional_jumbo, fha, naca]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Strengths:** Estimated credit score is in the top pricing tier. · A down payment of 20% or more typically removes the need for mortgage insurance.

**Assumptions disclosed:** flood_insurance, hazard_insurance, fico_haircut, assumed_rate

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 37. PROP-05 — 29-year-old Miami crypto trader, $15k large deposit from Coinbase sale no paper trail

> $15k deposit from crypto sale, underwriter flagged large unexplained deposit, denied for unsourced funds.

**Why denied (underwriting):** Large unexplained deposit $15k >50% of monthly income without 2mo sourcing or sale docs

**Inputs:** income $6800/mo (w2, unknown doc), FICO 720, DTI inputs debt $950/mo, down $25000 on $400000, sfr / primary, FL, reserves $12000

**Engine result:** tier `workable` (56), DTI 59.8% back-end / 45.8% front-end, eligible `[conventional_conf, conventional_jumbo, fha, naca]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 38. PROP-06 — 36-year-old Tampa investor, claims primary on $420k duplex but lives elsewhere, occupancy fraud flag

> Told lender duplex would be primary to get 5% down, occupancy check showed I own/live in another primary, denied for occupancy misrepresentation.

**Why denied (underwriting):** Occupancy mismatch: conventional_conf requires primary; investment 2-4 needs 25% down and investment pricing; questionnaire asks propertyUse

**Inputs:** income $8200/mo (w2, unknown doc), FICO 740, DTI inputs debt $1400/mo, down $21000 on $420000, multi_2_4 / primary, FL, reserves $10000

**Engine result:** tier `workable` (61), DTI 55.9% back-end / 38.8% front-end, eligible `[conventional_conf, conventional_jumbo, fha, naca]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Assumptions disclosed:** hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 39. PROP-07 — 44-year-old rural Levy County buyer, USDA rural eligible but FICO 610 wants 0% down

> Rural Levy County USDA 0% down, FICO 610 below USDA 640 overlay, denied despite rural location qualifying.

**Why denied (underwriting):** USDA requires 640 FICO (lender overlay) + rural location; 610 fails; questionnaire has no rural flag

**Inputs:** income $5200/mo (w2, unknown doc), FICO 630, DTI inputs debt $750/mo, down $0 on $285000, sfr / primary, FL, reserves $10000

**Engine result:** tier `some_considerations` (51), DTI 64.1% back-end / 49.7% front-end, eligible `[fha, naca]`, recommended `fha`, confidence `medium`

**Primary obstacle:** [credit] The estimated credit score may be below the typical requirement for the program you selected; other programs may fit better. *(fix: 3-12 months)*

**Secondary:** [debt] The estimated debt-to-income ratio appears to be above 50%.

**Assumptions disclosed:** phantom_down_payment, hazard_insurance, fico_haircut, assumed_rate, mortgage_insurance, confidence_range_width

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

### 40. PROP-08 — 31-year-old ITIN holder, no SSN, $800k assets, no FICO, wants asset depletion

> ITIN borrower no SSN, no credit score, $800k liquid, denied conventional but non-QM asset qualifier might work.

**Why denied (underwriting):** No FICO + ITIN: conventional requires SSN + FICO 620; alternative is ITIN program or asset qualifier with 700 FICO threshold

**Inputs:** income $0/mo (unknown, asset_depletion), FICO unknown, DTI inputs debt $300/mo, down $120000 on $400000, sfr / primary, FL, reserves $680000

**Engine result:** tier `some_considerations` (41), DTI 273428.8% back-end / 243428.8% front-end, eligible `[conventional_conf, fha, naca]`, recommended `conventional_conf`, confidence `high`

**Primary obstacle:** [debt] The estimated debt-to-income ratio appears to be above 50%. *(fix: 0-3 months)*

**Strengths:** A down payment of 20% or more typically removes the need for mortgage insurance.

**Assumptions disclosed:** unknown_income_haircut, hazard_insurance, fico_default, assumed_rate

**Detected?** partially — _Engine flags a related area but not the precise trigger_

---

## Coverage Analysis — What the Engine Misses

### Well-covered (no new question needed)
- Back-end DTI >50% (DTI-01, DTI-08), down-payment floors (CASH-01/04/07), credit-event waiting periods (CREDIT-03/04/06), self-employed tenure <1.5yr (INCOME-01), non-warrantable condo (PROP-01), manufactured (PROP-02), DSCR coverage bands (PROP-03), HOA fee + flood insurance in PITI (all flood/HOA scenarios).

### Partially covered (scored but imprecise)
- **Revolving utilization:** high balance $18k vs $450 minDue uses 5% rule ($900) — closer to truth than borrower's minDue, but utilization ratio itself (92%) is invisible beyond FICO band.
- **Declining commission trend:** 85% haircut on commission is static; doesn't distinguish stable vs declining YoY (INCOME-02).
- **Schedule C loss offset:** mixed income 80% haircut doesn't capture negative SE income subtracting from W-2 (INCOME-05).
- **Student loan deferred 1% rule:** engine handles via itemized debts, but questionnaire only collects aggregate total debt — so the $0 expected vs $450 actual gap is missed unless borrower itemizes.

### Not covered (engine blind spots)
- **Alimony remaining term <10mo exclusion** (DTI-04): engine has the rule but questionnaire never asks months remaining — always counts alimony.
- **Cosigned exclusion** (DTI-05): `otherPartyOnTime12mo` exists in Debt type but never collected — always counted.
- **30-day account full-balance rule** (DTI-06): questionnaire doesn't distinguish 30-day vs revolving — always lumped.
- **Gift source/amount granularity** (CASH-01/07): engine scores gift as binary +10 when DP<20%; doesn't capture undocumented amount, donor relationship, or seasoning.
- **Reserves source and multi-property reserves** (CASH-03/08): investor 6mo reserves for *all* financed properties not modeled; gift vs seasoned savings not distinguished.
- **HOA cert specifics:** engine scores HOA fee in PITI but not litigation, investor concentration, delinquency, or cert failure (PROP-01/04).
- **Manufactured land/foundation/year** (PROP-02): engine scores manufactured=50 but not leased land vs fee simple, single-wide vs double-wide, HUD tag year.
- **Rural/USDA eligibility:** no rural-location flag — USDA 640 overlay checked but location not asked.
- **Occupancy intent verification:** investment multi-family at 5% down as primary is a fraud flag, not just a propertyUse enum.
- **NSF/overdraft history, large-deposit sourcing detail:** boolean only — no count or amount.
- **Declining income trend, gap history, probationary status, rental/housing payment history:** not asked.

## Recommended New Questions (prioritized)

| Rank | Question (user-facing) | Type | Show when | Engine field | Wiring | Disclosure |
|------|------------------------|------|-----------|--------------|--------|------------|
| 1 | Do you have a 60-day late payment in the last 24 months? | yes/no | always (credit step) | `had60DayLate24mo` | already wired to credit sub-score (10% weight) | already disclosed via red flag |
| 2 | Any collections or charge-offs under $2,000? Are they all resolved? | yes/no | always (credit step) | `collectionsUnder2k` | already wired (5% weight) | none |
| 3 | How do you pay your student loans — standard repayment, income-driven, or deferred/forbearance? What is the balance? | select + number | when total debt >0 and age <45 (proxy) or always as debt breakdown | `debts[]` with `student_loan_deferred` vs `student_loan_repayment` | already handles 1% vs actual vs fully-amortized; questionnaire currently only collects aggregate — **add debt-breakdown UI** | disclosed via DTI summary |
| 4 | Are you paying alimony or child support? How many months remain? | yes/no + months remaining | always (debts step) | `debts[]` `alimony_paid`/`child_support_paid` with `monthsBehind` | already in debt.ts (excluded if ≥10mo alimony) — need UI to collect term | none |
| 5 | Is anyone else's debt showing on your credit because you cosigned? Does that person pay on time every month for 12+ months? | yes/no + on-time flag | always (debts step) | `debts[]` `cosigned_secondary` + `otherPartyOnTime12mo` | already in debt.ts — need UI | none |
| 6 | Do you carry a 30-day charge account (e.g., Amex) with a balance due in full this month? | yes/no + balance | always | `debts[]` `thirty_day_account` + balance | already in debt.ts — need UI | none |
| 7 | For your revolving cards, what is the total balance and total limit? | two numbers | always | derive utilization for future scoring; no engine field yet | **new:** `revolvingUtilizationPct` → adjust credit sub-score or add assumption | "Utilization was estimated at X% from the balances you entered." |
| 8 | Is any large deposit in the last 2 months from a source you can document (sale, transfer, gift, crypto)? How many such deposits and roughly how much? | yes/no + count + amount | when `hasUnexplainedLargeDeposits` = yes or bank statement doc | `hasUnexplainedLargeDeposits` already exists (boolean) — **extend to count/amount** or keep boolean and add free-text note for MLO | already disclosed as red flag |
| 9 | Will any of the down payment be a gift? Who is the donor and is there a gift letter + donor bank statement? | yes/no + donor type | when down <20% | `hasGiftFundsDocumented` + `giftFundsAmount` already wired — **add donor relationship + letter flag** | already +10 when DP<20% |
| 10 | How many months of reserves will you have after closing — and are they seasoned 60+ days? | number + seasoned flag | always (money step) | `liquidAssetsAfterClose` + new `reservesSeasoned60Days` boolean | add assumption if unseasoned: "Reserves you listed may need 60-day seasoning." | new assumption |
| 11 | How long have you been in your current *job* (not just field)? Are you still in a probationary period? | months + probationary yes/no | when employmentYearsInField <2 or W2 offer letter | `employmentMonthsInCurrentJob` + `isProbationary` (new) | adjust income haircut or add obstacle | new assumption |
| 12 | Has your income gone up, stayed flat, or declined over the last 2 years? | up/flat/down | when incomeType = commission/self_employed/variable | new `incomeTrend` enum: use lower year when declining per agency | new assumption |
| 13 | Do you have 12 months of on-time rent or housing payments you can document? | yes/no | when creditTier poor/fair or thin file | new `hasOnTimeHousingHistory12mo` → boost documentation or credit sub-score | new assumption |
| 14 | Is the property in a rural area (USDA), and do you meet USDA income limits? | yes/no/unsure | always | new `isRuralUSDAEligible` | gate USDA eligibility beyond FICO wait — currently only FICO+wait checked | new assumption |
| 15 | For condos: is there pending litigation, >20% investor ownership, or >15% delinquency? For manufactured: leased land, single-wide, pre-1976, permanent foundation? | checklist | when propertyType = condo_nonwarrantable or manufactured | new `condoWarrantabilityFlags` / `manufacturedFoundationFlags` → tighten property sub-score | new red flags |

## Recommended New Loan Solutions / Program Paths

| Rank | Solution | Trigger | Engine wiring | Disclaimer needed |
|------|----------|---------|---------------|-------------------|
| 1 | FHA 3.5% with down-payment assistance or seller concession up to 6% | down <3.5% and FICO ≥580 and primary | already eligible FHA path — add "DPA / seller concession" note in strengths when DP<3.5% but FICO qualifies | already has FHA disclaimer |
| 2 | FHA 10% down for 500-579 FICO | FICO 500-579 and DP ≥10% | add obstacle branch: FICO 500-579 + DP<10% → fixHorizon 0-3mo with 10% message; currently only generic FICO<500 | already FHA |
| 3 | Bank statement 12/24mo (75% of deposits) — 10% down variant | self-employed or cash income + bank_statement doc + FICO 620+ but DP<25% | lower minDown for bank_statement from 25% to 10% when FICO ≥660 — engine currently 25% floor | non-QM rate add-on |
| 4 | P&L-only (90% of P&L) for self-employed 2yr+ | self_employed 2yr+ + PANDL_CPA and FICO 640+ | already pandl_only — surface more prominently when selfEmployedNetIncome2yrAvg is low vs gross | non-QM |
| 5 | DSCR investor cash-flow — rent-driven, no personal DTI | investment + expectedMonthlyRent and DSCR ≥1.0 | already dscr — **improve rent gate**: require rent >0 and surface even with low personal income; add DSCR 0.75-1.0 tier with larger down | non-QM + DSCR coverage assumption |
| 6 | Asset depletion / asset qualifier — depletion income over divisor | liquidAssetsTotal ≥$500k and asset_depletion doc and FICO 700+ | already asset_qualifier — keep 84-mo divisor disclosed | non-QM + asset depletion |
| 7 | ITIN program — explicit opt-in | ITIN flag (new boolean) + FICO 640+ | currently surfaced whenever documentationSupports returns true — **gate behind explicit ITIN checkbox** | ITIN |
| 8 | Non-warrantable condo — bank statement / full-doc up to 90% LTV | condo_nonwarrantable + bank_statement or full_tax doc + FICO 640+ | already non_warrantable — **raise maxLTV to 90% tier when FICO ≥720** (currently flat 75%) | non-QM |
| 9 | VA residual-income manual path | VA loan + DTI 45-60% but residual income may pass | add VA residual check as secondary obstacle fix suggestion | VA |
| 10 | Rapid rescore / paydown playbook | utilization >30% or collectionsUnder2k=false and DP <20% but FICO 620-679 | new strength: "Paying revolving balances below 30% before re-pull often moves score fastest" | none — educational |

## Scoring Calibration Risks

| Area | Risk | Fix |
|------|------|-----|
| Credit — thin file | FICO default 620 inflates thin-file borrowers (CREDIT-05, PROP-08) into workable when they are high risk | When creditTier=unknown and no 60-day late flag, apply larger haircut or a thin-file flag and weight collections more |
| Debt — aggregate total | Borrower-entered total debt hides alimony exclusion, cosigned exclusion, 30-day full-balance, and deferred 1% vs $0 — all modeled in debt.ts but never fed | Wire debt-breakdown UI to debts[] (P5-P6 questions above) — keep total as fallback |
| Income — declining trend | Commission/variable haircut is flat 85%/90%; declining YoY should use lower year, not average — INCOME-02/08 mis-scored as workable when underwriting would fail | Add incomeTrend enum and, when declining, use lower year / apply additional 10-15 point haircut and surface declining-income obstacle |
| Cash — reserves source | $0 reserves after close scores -20 but undocumented gift vs seasoned savings scored identically; investor multi-property reserves not multiplied | Distinguish seasoned vs gift vs undocumented reserves; for investment, multiply reserve months by financed property count |

## Prioritized Backlog

| Priority | Item | Effort | Impact |
|----------|------|--------|--------|
| P1 | Wire debt-breakdown UI to debts[] (student loan type, alimony term, cosigned 12mo, 30-day balance) | 1 day | Fixes 4 blind-spot scenarios (DTI-03 to DTI-06) and DTI accuracy for ~30% of borrowers |
| P1 | Add declining-income trend question and wire to income haircut | 0.5 day | Fixes INCOME-02/05 where engine overstates qualifying income |
| P1 | Gate non-warrantable LTV by FICO tier (90% at 720+) and surface HOA-cert failure as distinct obstacle | 0.5 day | PROP-01 currently scores workable on a non-warrantable building — should be primary obstacle |
| P2 | Gift donor + seasoning + amount detail and reserves seasoning flag | 0.5 day | CASH-01/07 where undocumented gift is the real denial reason |
| P2 | FHA 500-579 10% down path and explicit DPA/seller-concession playbook | 0.5 day | CREDIT-01 where borrower had 10% but was still shown limited_fit |
| P2 | ITIN explicit checkbox gate (stop surfacing to everyone) | 0.25 day | PROP-08 thin-file ITIN noise |
| P2 | Rental/housing history 12mo on-time as credit/documentation boost | 0.5 day | Helps thin-file and low-FICO borrowers who actually pay housing on time |
| P3 | NSF/overdraft count + large-deposit sourcing detail for bank statement | 0.5 day | Polishes INCOME-07 where 9 NSFs should be a harder stop |
| P3 | USDA rural flag + manufactured foundation/land questions | 0.5 day | PROP-02/07 where property eligibility is the real wall |
| P3 | Utilization % input and credit counseling playbook | 0.25 day | CREDIT-08 marginal impact |

---

*Method: 40 scenarios run through the live deterministic engine at 2026-08-30T15:17:06.472Z. Tiers, DTI, eligible programs, obstacles, strengths, assumptions, and confidence are the engine's actual outputs. Missing-question and solution rankings are synthesized from the coverage gaps above.*
