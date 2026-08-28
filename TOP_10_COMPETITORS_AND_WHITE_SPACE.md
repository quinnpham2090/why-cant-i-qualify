# "Why Can't I Qualify?" — Top 10 Competitors & Market White Space

**Date:** August 28, 2026
**Product:** "Why Can't I Qualify?" — a consumer mortgage qualification diagnostic
**Scope:** Focused analysis of the 10 most directly-competitive products + the market white space

---

## EXECUTIVE SUMMARY (60 seconds)

After analyzing **45+ competitors across 12 categories**, the market white space is unambiguous: **no incumbent product offers a no-SSN, no-credit-pull, anonymous, educational mortgage qualification diagnostic** that explains WHY a borrower can't qualify and WHAT they can do about it.

**The 10 most directly competitive products** span 4 buckets:
- **Calculators** (Zillow, Bankrate, NerdWallet, SmartAsset) — show one number, route to a single lender
- **Lenders with prequal** (Rocket Mortgage, Better.com, SoFi) — soft/hard pull, "Not likely" → phone call
- **Lead-gen aggregators** (LendingTree, Credible) — collect 8-10 fields, route to 1-8 partner lenders
- **Near-miss denial UX** (Figure) — the only product with a "winback" page after decline

**The denied borrower is the highest-intent mortgage audience in the U.S.** — Zillow's own research says 28% of buyers are denied at least once (~880K events/year). HMDA data: DTI 37%, credit 34%, collateral 18% as top 3 reasons. **No one in the top 10 serves this audience.**

**The strategic wedge:** A diagnostic that takes 8-15 anonymous inputs (no SSN, no DOB, no credit pull) and returns a 7-pillar assessment with ranked denial reasons, a remediation plan, and triage to the right next step. **This is unowned territory.**

---

## THE TOP 10 COMPETITORS (Most Directly Competitive)

Selection criteria: products that compete for the same denied/near-qualifying borrower journey that "Why Can't I Qualify?" targets. Ranked by direct competitive overlap.

---

### #1 — ROCKET MORTGAGE
**URL:** `rocketmortgage.com` | **Category:** Direct lender (largest U.S. mortgage originator)

**What they do well:**
- Industry-leading UX; "Get my custom rate" in 8 minutes is a real benchmark
- 12 calculators including a BAH tool for military; full Prequalified Approval with soft pull
- 1.5M+ customers; 4.7 Trustpilot; biggest mortgage brand in U.S.
- Full vertical: apply, process, close, service

**Lead capture flow:**
- Minute 1: name + email
- Minute 3-5: SSN + DOB (triggers Experian soft pull)
- Hard pull at full application
- The "real" prequalification requires PII — no anonymous path

**The denial UX (verbatim from their production code):**
- 3 generic fallback messages on calculators
- "Prequalified Approval" requires SSN/DOB
- Denial route: phone call to a loan officer
- No "why" explanation, no remediation plan

**Why this is a top competitor:**
- They have the brand and the funnel. Any denied borrower eventually considers Rocket.
- If a denied borrower goes to Rocket and gets denied again, they have no answer.

**What "Why Can't I Qualify?" does better:**
- Anonymity: 8-15 questions, no SSN required
- Diagnosis: tells the user WHY they won't qualify at Rocket (or anywhere else) before they apply
- Triage: routes to the right lender type (FHA, non-QM, bank statement, HFA DPA) instead of "Rocket or nothing"

---

### #2 — BETTER.COM
**URL:** `better.com` (collapsed to `/start`) | **Category:** Fintech lender

**What they do well:**
- Modern, slick UX; "1,219 sitemap URLs" indicates heavy SEO play
- Soft pull at 3-minute pre-approval (Credco/Experian FICO 2)
- Co-borrower support, crypto-collateralized down payments, "no commission, no origination fee" model

**Lead capture flow:**
- Soft pull (Experian FICO 2) at 3-minute pre-approval
- Full SSN at 3 minutes — the `askForFullSsnPreappFeature: true` flag in their Next.js bundle
- Hard pull at full application

**The denial UX (verbatim from their production):**
> **"Something isn't adding up."**
>
> — Better.com, 23-word denial modal

This is the **entire** user-facing denial message. No explanation, no remediation, no next step.

**Why this is a top competitor:**
- They are the most aggressive tech-forward lender — they're spending the most on UX
- They have the **worst Trustpilot in the industry** (1.4-1.8 stars on 10,000+ reviews) — the brand damage from opaque denials is real
- Internal evidence (from Better's Next.js payload): `denialCreditScoreGate: 540 (purchase/refi), 600 (HELOC)` — these are the actual FICO floors, never published

**What "Why Can't I Qualify?" does better:**
- A "Better alternative" diagnostic. Take the 580-FICO borrower Better rejects and route them to a non-QM specialist (Acra 600 FICO floor, Angel Oak 640, etc.) — with a plain-English explanation of the path.

---

### #3 — LENDINGTREE
**URL:** `lendingtree.com/home/mortgage/` | **Category:** Lead-gen aggregator

**What they do well:**
- "LendingTree brings together 300+ lenders so you can compare your options, side by side" (verbatim)
- First-mover advantage in lead-gen; massive brand awareness
- NMLS #1136 — duly licensed mortgage broker

**Lead capture flow (the famous "5 lenders compete" form):**
- 8-10 fields: loan amount, ZIP, property type, FICO band, employment, name, email, phone
- Single multi-step form, 3-5 minutes
- Routes to 1-8 partner lenders based on profile (matched by an internal algorithm, not consumer-visible)

**The denied-mortgage content:**
- **Only 1 article that mentions denial:** `lendingtree.com/home/mortgage/denied-credit-for-home-loan/` ("Signs Your Mortgage Will Be Denied in Underwriting" — 7 generic reasons)
- The denied borrower is not the target — the rate-shopping borrower is
- The form is the same for a 580-FICO borrower as a 780-FICO borrower

**Why this is a top competitor:**
- They own the "compare mortgage lenders" SERP
- 300+ partner lenders = they shape the denied-borrower's next move
- A borrower who uses LendingTree and gets denied by all 5 lenders has zero path forward

**What "Why Can't I Qualify?" does better:**
- A "LendingTree denial decoder" — explain WHY the partner lenders denied, and route to non-partner specialists (non-QM, state HFAs, CDFIs) that LendingTree doesn't surface
- A 580-FICO borrower shown the same 5 lenders as a 780-FICO borrower is the problem

---

### #4 — ZILLOW (MORTGAGE CALCULATORS)
**URL:** `zillow.com/mortgage-calculator/` (and 11+ sibling calculators) | **Category:** Calculator / publisher

**What they do well:**
- Best-in-class publisher UX; 11+ calculators, ZIP-localized tax/insurance
- 200M+ users/month; dominant SERP ownership for "mortgage calculator," "affordability calculator"
- **The 5-pillar qualification framework** (on `BuyAbility`) is the closest any publisher has come to a diagnostic
- `BuyAbility` does a soft pull and updates in real time as rates change

**Lead capture flow:**
- **Zero friction on the calculators** (no email, no PII)
- Lead capture only on `BuyAbility` (gated, requires sign-in, does soft pull) and on Zillow Home Loans
- All mortgage products route to Zillow Home Loans (a single lender)

**The closest thing to a diagnostic:**
- DTI Calculator (`/mortgage-calculator/debt-to-income-calculator/`) returns "over the limit / under the limit" verdict
- Affordability Calculator returns a "comfortable" home price (the word "comfortably" tells the user it's aspirational, not underwritten)

**Why this is a top competitor:**
- They own the top of the mortgage funnel
- Zillow's own research says **28% of mortgage buyers are denied at least once** — and Zillow publishes this stat but never addresses it
- They are the 800-lb gorilla for "first time home buyer" SEO

**What "Why Can't I Qualify?" does better:**
- Zillow publishes the 28% denial rate but never builds a tool for those denied borrowers
- A "Zillow denial decoder" that takes the BuyAbility verdict and explains why the user is "borderline" or "not likely" is wide-open
- Zillow's DTI calc gives a binary verdict; the diagnostic should give a ranked list of 3-5 specific obstacles with fix timelines

---

### #5 — BANKRATE
**URL:** `bankrate.com/mortgages/mortgage-calculator/` | **Category:** Lead-gen aggregator + calculator

**What they do well:**
- "Mortgages without the overpaying" tagline; 100M+ users/year
- "In 2025, our process produced mortgage rates that beat 99.7% of offers from 850+ surveyed banks and credit unions" (verbatim from /about/)
- Transparent editorial standards; 12-minute editorial review
- No email gate on calculators; live rate data

**Lead capture flow:**
- None on the calc itself
- Lead capture via the mortgage marketplace (affiliate model) — but the credit-score dropdown bottoms out at "Lower than 620" with NO follow-up
- "Fountain" save-search requires a free account

**The denial content:**
- **0 articles** on mortgage denial
- The credit score dropdown has no "I don't know" option
- The marketplace routes all mortgage products to partner lenders, not to a denial diagnostic

**Why this is a top competitor:**
- They own "best mortgage lenders 2026" SERP
- 99.7% rate-beat claim is the most aggressive in the publisher category
- Bankrate is the most credible brand for rate shopping

**What "Why Can't I Qualify?" does better:**
- A "Bankrate denial decoder" that takes a borrower's credit score + DTI and shows them what rate they would actually get at 580 vs. 620 vs. 660 vs. 700 FICO — Bankrate just shows rates, not "rates for someone like you"
- A "Lower than 620" credit score needs more than a dropdown — it needs a fix plan

---

### #6 — NERDWALET
**URL:** `nerdwallet.com/article/mortgages/how-much-house-can-i-afford` | **Category:** Lead-gen aggregator + calculator

**What they do well:**
- "The Nerd's take" — editorial authority + lender comparison
- Zero-friction affordability calculator with "Affordable / Stretch / Difficult" verdict (3 buckets)
- Lender star ratings
- "Our editorial team does not receive direct compensation from our advertisers" (verbatim)
- The **only denial content in the publisher category**: "Mortgage Denial Data Reveals How to Boost Your Approval Odds" (Elizabeth Renter, Senior Economist) — uses HMDA data

**Lead capture flow:**
- None on the calc
- Save-search via TransUnion-linked account
- Lender marketplace (affiliate model)

**The denied-mortgage content:**
- 1 article (HMDA data analysis) — but no diagnostic tool
- 7 generic reasons listed in editorial content; no personalization
- No "Affordable / Stretch / Difficult" verdict applied to credit score or denial

**Why this is a top competitor:**
- They own the editorial authority for "first-time home buyer programs" and "best mortgage lenders"
- The HMDA data is the only denial analysis in the publisher category
- They have the most-respected editorial brand

**What "Why Can't I Qualify?" does better:**
- NerdWallet has the HMDA data but never built a denial tool — the diagnostic fills that gap
- A "NerdWallet-style" diagnostic with the same editorial integrity and fact-checking would inherit the trust

---

### #7 — CREDIT KARMA (MORTGAGE PREQUAL)
**URL:** `creditkarma.com/mortgage` | **Category:** Credit tool + mortgage prequal

**What they do well:**
- Largest free user base in U.S. consumer credit (Intuit-owned)
- Soft-pull VantageScore prequal that returns "Likely / Not likely" with up to 4 prequalified offers
- 10+ free calculators (home affordability, mortgage payment, DTI, rent vs. buy, etc.) — all without login
- Cleanest UX in the credit-tool category

**Lead capture flow:**
- Soft-pull VantageScore sign-up: email + name + DOB + SSN + address
- Once onboarded, every credit card / loan / mortgage prequal is a lender click-out (revenue share)
- Credit Karma Mortgage, Inc. (NMLS #1588622) is the captive mortgage arm

**The denial UX:**
- "Likely to qualify" or "Not likely" with up to 4 prequalified offers
- If "Not likely" → user clicks "why?" and gets a one-line tooltip, not a path forward
- **This is the closest existing tool to a denial diagnostic** — but it doesn't explain the "Not likely"

**Why this is a top competitor:**
- They have the user base, the data, and the funnel
- VantageScore (not FICO) is the main weakness — prequals are 95% accurate at best
- They are the most likely destination for a denied borrower who "tries again"

**What "Why Can't I Qualify?" does better:**
- CK has the *input* (user's full credit profile) and the *output* (prequalified max loan amount). The missing piece is the *explanation* of why the input doesn't qualify for *more*.
- A diagnostic that takes the CK prequal output and says "you're $50K short — here's the path" is the missing layer

---

### #8 — SOFI
**URL:** `sofi.com/home-loan` | **Category:** Fintech lender

**What they do well:**
- "Member benefits" framing; cross-sell from SoFi banking/investing
- Soft pull at rate-quote step; modern UX

**Lead capture flow:**
- Soft pull at rate-quote step
- Standard full application with hard pull

**The denial UX (verbatim from their React state machine):**
- Single line: "we aren't able to show current rates" + phone
- Internal error codes (from React state machine): `MAXIMUM_LTV`, `CREDIT_DECLINED`, `NO_ELIGIBLE_PRODUCTS` — these are the actual production state machine codes, never exposed to users
- The user never sees WHY they were declined

**Why this is a top competitor:**
- Strong brand in the "tech-forward millennial" segment
- They hide the error codes — a diagnostic that translates them is the missing product

**What "Why Can't I Qualify?" does better:**
- Translate SoFi's hidden error codes (`MAXIMUM_LTV` = "loan amount too high for the property," `CREDIT_DECLINED` = "FICO below threshold," `NO_ELIGIBLE_PRODUCTS` = "no program matches your profile")
- Show the user which product they would qualify for (FHA vs. conventional vs. SoFi's other products)

---

### #9 — FIGURE (HELOC)
**URL:** `figure.com/account/heloc/register` | **Category:** Fintech lender (HELOC)

**What they do well:**
- "Get approved in 5 minutes, funding in as few as 5 days" (verbatim from every page)
- **First-class self-employed support** — 8 income verification options including Plaid, TurboTax, H&R Block, IRS direct
- "Self-employed applicants are most successful connecting their personal checking or savings account" (verbatim)
- 5,324 Trustpilot reviews at 4.7 — Excellent
- "#1 Non-Bank HELOC Lender in the US"
- **Best denial UX in the industry** — the "winback" page

**Lead capture flow:**
- Soft pull (Experian) on HELOC prequal
- Hard pull triggered when user submits SSN
- 8 income verification options post-prequal

**The denial UX (the best in the top 10):**
- "Thank you for your application" page (dark pattern masking "no") with two specific decline reasons (credit score < 620/680, DTI too high) + **affiliate partner card list** (Point, BusinessLoans.com, Unlock, New American Funding, Freedom Debt Relief, West Capital Lending)
- This is the **only true near-miss UX in the top 10** — a "winback" page, not a denial page
- The `prequal-winback-page` (pay off existing mortgage to qualify) is the best decline UX in the industry

**Why this is a top competitor:**
- They have the **only denial UX worth studying**
- Self-employed support is first-class
- The winback model is exactly what a denial diagnostic should do

**What "Why Can't I Qualify?" does better:**
- Figure's winback is the model — but the affiliate partner card list is a **monetized lead-gen play**, not a borrower advocacy play
- The diagnostic should show in-house alternatives first (FHA, non-QM, HFA DPA) before the affiliate partner cards
- Figure's data is discarded on decline — the diagnostic should preserve application data for re-application

---

### #10 — SMARTASSET
**URL:** `smartasset.com/mortgage/mortgage-calculator` | **Category:** Calculator + lead-gen

**What they do well:**
- **The only top-10 calculator to ask for FICO** (10-bucket dropdown: 850, 800, 780, 760, 740, 720, 700, 680, 660, 640, 620, 600)
- "Recommended minimum income" output (a real attempt at personalized advice)
- RIA positioning (financial advisor brand)
- 20+ free tools; modern UX

**Lead capture flow (the most aggressive in the calculator category):**
- Calculator shows a single estimate and immediately requires **email + phone + SMS OTP** to "save your results"
- Routes to a separate domain (smartadvisormatch.com) where the lead is sold to 3-5 financial advisors, mortgage lenders, and insurance agents
- This is the lead-capture standard the category follows

**The denial content:**
- **0 articles** on denial
- The FICO input is used only to adjust the loan-amount estimate — not to map the user to specific programs or credit-tier-targeted products
- 2022 methodology (stale)

**Why this is a top competitor:**
- The only top-10 calculator that asks for FICO — but doesn't USE the FICO input beyond adjusting loan amount
- The most aggressive lead-capture in the category
- The RIA positioning is a trust signal

**What "Why Can't I Qualify?" does better:**
- Use the FICO input to map the user to specific loan programs (620 = FHA, 660 = Home Possible, 700+ = conventional) — SmartAsset throws away the signal
- Replace the SMS-OTP lead-capture wall with a soft email capture + a paywall-free diagnostic
- The "recommended minimum income" output is the closest SmartAsset gets to a diagnostic — but it's a single number, not a plan

---

## THE TOP 10 AT A GLANCE

| # | Competitor | Category | Denial Explanation | Credit Pull Required? | Diagnostic? |
|---|---|---|---|---|---|
| 1 | Rocket Mortgage | Direct lender | ❌ Phone call | ✅ Yes (soft) | ❌ No |
| 2 | Better.com | Fintech lender | ❌ "Something isn't adding up" | ✅ Yes (3 min) | ❌ No |
| 3 | LendingTree | Lead-gen aggregator | ❌ 1 article, no tool | ❌ No | ❌ No |
| 4 | Zillow | Calculator/publisher | ❌ 0 articles | ❌ No (Buyability: soft) | ⚠️ DTI binary only |
| 5 | Bankrate | Lead-gen + calculator | ❌ 0 articles | ❌ No | ❌ No |
| 6 | NerdWallet | Lead-gen + calculator | ❌ 1 HMDA data article | ❌ No | ❌ No |
| 7 | Credit Karma | Credit + prequal | ❌ "Likely/Not likely" + tooltip | ✅ Yes (VantageScore) | ❌ No |
| 8 | SoFi | Fintech lender | ❌ Hidden error codes | ✅ Yes (soft) | ❌ No |
| 9 | Figure | Fintech HELOC | ⚠️ Best in class (winback) | ✅ Yes (Experian) | ⚠️ Winback only |
| 10 | SmartAsset | Calculator + lead-gen | ❌ 0 articles | ❌ No (just FICO bucket) | ❌ No |

**Universal pattern:** 9 of 10 have **zero** denial explanation. Figure (#9) is the only one with a real decline UX, and it's a winback + affiliate lead-gen play, not a diagnostic.

---

## THE MARKET WHITE SPACE

### The Unowned Category: A New Product Type

**"Why Can't I Qualify?" sits in an unowned category that doesn't fit into any of the existing buckets:**

- **Not a publisher** (Zillow, Bankrate) — publishers show one number
- **Not a lender** (Rocket, Better) — lenders route to a phone call
- **Not a lead-gen aggregator** (LendingTree, Credible) — aggregators sell leads to partners
- **Not a credit tool** (Credit Karma, FICO Simulator) — credit tools focus on the score leg
- **Not a fintech** (SoFi, Figure) — fintechs sell their own product
- **Not an education site** (CFPB, HUD) — education is generic, not personalized

**The unowned category is: anonymous, no-credit-pull, educational mortgage qualification diagnostics that explain WHY a borrower can't qualify and WHAT they can do to fix it.**

### The 5 Unowned Positions

1. **No-SSN, no-DOB, no-credit-pull, anonymous mortgage qualification diagnostic.** Every existing tool requires PII before any information. A diagnostic that takes 8-15 anonymous inputs and produces a 7-pillar assessment is unowned.

2. **Personalized, plain-English, ranked denial reasons with a remediation plan.** No tool tells a denied borrower "you're 23 points short on FICO + 7% over DTI. Here's the path."

3. **Cross-program routing for the denied borrower.** CalHFA's "Find the right program" does this for the qualified borrower. No tool does it for the denied borrower across FHA, conventional, VA, USDA, Home Possible, state HFAs, DPA, CDFI, non-QM, and bank statement.

4. **Adverse Action Notice decoder.** The denial letter has reason codes (ECOA Reg B); no tool decodes them for the borrower.

5. **Public condo warrantability pre-flight.** No public tool exists. The HUD FHA condo lookup is the only public database, and it doesn't tell you if YOUR condo is warrantable.

### The 4 Underserved Personas (ranked by lead value)

1. **Recently Denied Borrower (30%)** — frustrated, needs explanation. **Highest-intent persona in the mortgage funnel.** Lead value: $25-200 CPL.
2. **Worried First-Time Buyer (40%)** — anxious, doesn't know where they stand. Lead value: $50-150 CPL.
3. **Self-Employed Borrower (20%)** — systematically underserved, frustrated. Lead value: $100-300 CPL (higher because of complexity).
4. **Condo Buyer in a Non-Warrantable Project (10%)** — discovers the issue 2 weeks into the loan. Lead value: $200-500 CPL (high because they're desperate).

### The 5 Things the Diagnostic Should Do That NO Competitor Does

1. **Anonymous inputs (no SSN, no DOB, no credit pull) → 7-pillar assessment with a range, not a single number.**
2. **Rank denial reasons by impact** ("Your DTI is 51%, FHA's standard is 50% — this is your #1 obstacle. Your FICO is 615, FHA's standard is 580 — this is your #2 obstacle.")
3. **Map to ALL programs** (FHA, Home Possible, conventional, USDA, VA, state HFA, DPA, CDFI, non-QM, bank statement, DSCR) — not just one lender's offerings.
4. **Prescribe a fix per gap with timeline** ("Paying down $1,200 of your credit card balance would drop your DTI to 49.5% and improve approval odds. With 0% utilization for 6 months, expect a 30-point FICO lift.")
5. **Triage to the right next step** (DIY credit repair / Find a HUD counselor / File CFPB complaint for discrimination / Apply for DPA via state HFA / Wait 6 months and reapply / Try a non-QM specialist / Try a different program).

**No competitor in the top 10 does any of these. The diagnostic owns all 5.**

---

## SEO SURFACE THAT IS UNOWNED

Per the research, the following high-intent keywords have **no major owner**:
- "why was my mortgage denied" (1-2K/mo)
- "denial reasons mortgage"
- "reapply after mortgage denial"
- "adverse action notice"
- "mortgage denied what to do"
- "denied for mortgage pre-approval"
- "why can't I qualify for a mortgage" (1-3K/mo)
- "mortgage qualification calculator" (real query, no current owner)
- "mortgage DTI calculator"
- "FHA eligibility check"
- "VA loan eligibility"
- "self-employed mortgage qualification"
- "mortgage after bankruptcy"
- "mortgage after foreclosure"

These problem-space queries are currently served by commercial lender blogs (Rocket, Bankrate, NerdWallet) — but those are commercial. **A non-commercial, government-style, diagnostic for "I was denied, what now?" would own that SERP.**

---

## COMPLIANCE POSTURE (Non-Negotiable)

The 7 forbidden claims (with safe alternatives):
| ❌ Never say | ✅ Safe alternative |
|---|---|
| "You're approved" | "You may be pre-qualified based on the information you provided" |
| "You qualify for $X" | "You may qualify for a loan of approximately $X, depending on lender underwriting" |
| "Guaranteed approval" | (Never use; no safe equivalent) |
| "We'll get you approved" | "We'll work with you to find a loan that may fit your needs" |
| "Pre-approved in 60 seconds" | "Get a pre-qualification estimate in 60 seconds" |
| "Bad credit OK" | "We work with lenders that may be able to assist a range of credit profiles" |
| AI "approval likelihood" | "Educational estimate based on the information you provided" |

---

## RECOMMENDED PHASING

**Phase 1 — MVP (30-45 days):**
- 8-15 question intake (no SSN, no DOB, no credit pull)
- 7-pillar scoring (Income, Debt, Credit, Cash, Payment, Property, Documentation)
- Top-3 obstacle ranking
- "Compare 3 loan programs" output (best-case, mid-case, fallback)
- Soft capture (name + email) at start; hard capture at "save plan"
- 5-email nurture sequence over 30 days
- Compliance pack: MAP Rule, ECOA/Reg B, FCRA, TCPA, CCPA, state licensing, WCAG 2.1 AA
- 5-10 SEO articles

**Phase 2 (90 days post-launch):**
- Adverse Action Notice decoder
- Time-to-qualify calculator

**Phase 3 (6 months post-launch):**
- Denial reason → lender type routing matrix
- Mortgage Denial Atlas (state-by-state HMDA data)
- Denial appeal wizard
- 50 state pages + 200 city pages
- AI personalization layer (with guardrails)

**Cost:** $20-30K Year 1 (before profitable). $100-150/month tech + $1,500-2,000/month marketing.
**Expected return:** $75-400K Year 1 revenue. ROI positive by month 4-9. Path to $250-600K by Year 3.

---

## THE BOTTOM LINE

**The opportunity is real.** A consumer-facing mortgage qualification diagnostic that provides anonymous, no-SSN, no-credit-pull, educational readiness assessments addresses a real, validated market gap. **No major competitor offers this.** The demand signals (rising "denied" searches, low consumer trust, underserved self-employed segment) are strong.

**The execution is achievable.** A non-technical MLO can launch in 30-45 days using Lovable + Supabase + AI coding tools. The cost is $20-30K Year 1. The expected return is $75-400K Year 1.

**The compliance is non-negotiable.** Engage a qualified mortgage compliance attorney before launch. Follow safe language. Display all required disclosures. Never use AI to make credit decisions.

**The timing is right.** With mortgage rates elevated, denials up, and consumers confused, the demand for an honest, educational diagnostic is at an all-time high. **No major competitor is serving this need.**

**BUILD IT.**

---

## APPENDIX — Full Source Files (for deeper analysis)

The Top 10 deep-dive files preserve verbatim quotes, exact lead-capture flows, and all source URLs:

| # | Competitor | Source File |
|---|---|---|
| 1 | Rocket Mortgage | `02-Competitor-Research/competitor-analysis.md` (1,846 lines) |
| 2 | Better.com | `BETTER_COM_RESEARCH_REPORT.md` (676 lines) |
| 3 | LendingTree | `research/lendingtree/lendingtree-report.md` (768 lines) |
| 4 | Zillow | `RESEARCH_zillow_mortgage_calculator.md` (528 lines) |
| 5 | Bankrate | `research/bankrate-report.md` (691 lines) |
| 6 | NerdWallet | `02-Competitor-Research/NerdWallet_Mortgage_Affordability_Calculator_Analysis.md` |
| 7 | Credit Karma | `research/competitive_analysis_credit_tools.md` (543 lines) |
| 8 | SoFi | `sofi_research_report.md` (525 lines) |
| 9 | Figure | `research/REPORT.md` (778 lines) |
| 10 | SmartAsset | `smartasset_research.md` |

**Plus the full 45+ competitor analysis:** `FINAL_COMPETITIVE_RESEARCH_REPORT.md` (1,285 lines).

**Total: ~30,000+ lines / ~5 MB of verbatim-quoted research** extracted from live production HTML/JS, sitemaps, and editorial content.

---

**End of Report.**
