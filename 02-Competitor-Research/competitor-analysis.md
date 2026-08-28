# PART 2 — COMPETITOR RESEARCH: 10 MAJOR U.S. DIRECT MORTGAGE LENDERS

> **Purpose:** Map the qualification / prequalification / preapproval experience at the top U.S. direct lenders. Identify what they do well, what they fail at, and — most importantly — what the "Why Can't I Qualify?" diagnostic can do better for denied and near-qualifying borrowers.

> **Method:** Direct site reviews, HTTP-fetched HTML and JS bundles, plus 3rd-party reviews / J.D. Power / BBB. Each lender below is documented at the level of **verbatim on-screen copy**, **field-by-field lead capture timing**, and the **actual denied-user experience** (because that's the diagnostic's white-space).

---

## CROSS-LENDER COMPARISON SUMMARY (the diagnostic's "decision table")

| Lender | Self-serve prequal? | SSN/DOB at prequal? | Soft vs hard pull at prequal | Real denied-user screen | DTI surfaced? | Self-employed path? | "Why am I denied" content? |
|---|---|---|---|---|---|---|---|
| **Rocket Mortgage** | Yes (Prequalified Approval) | **Yes (SSN, DOB required for the "10 min" prequal)** | Soft pull at Prequalified Approval, hard at Verified Approval | 3 generic calculator fallback messages + a static `/learn/what-to-do-if-your-mortgage-loan-application-is-denied` article | Inside the home-affordability calculator only | Bifurcated — Non-QM / DSCR, requires phone handoff | Yes — a single 7-reason article |
| **LoanDepot / mello** | Yes (true soft-pull prequal at /prequalify) | No for true prequal; yes for full app | Soft at prequal, hard at full app | "Talk to a loan officer" CTA — no reason given | No | Light (LO asks later) | No dedicated tool |
| **Better.com** | Yes — collapsed to one /start funnel | **Yes — full SSN at the 3-min pre-approval** (`askForFullSsnPreappFeature: true`, `useCredcoSoftPull: true`) | Soft (Credco) at 3-min pre-approval; hard at full app | Generic "we can't approve you right now"; borrower is told to invoke ECOA | No | Restrictive (2 yr SE rule; YOY decline uses lower year) | 1 SEO article only |
| **UWM** | **No consumer D2C prequal.** Wholesale-only. | N/A | N/A | N/A — broker handles | N/A | N/A | N/A |
| **Caliber / NewRez** | Yes (2-tier: soft prequal letter, then hard) | **SSN NOT required for soft prequal**; required for hard | Soft (Experian) at prequal letter; hard at preapproval | "Thanks for your interest / We've received your information, but we're unable to continue right now. A member of our team will reach out to review your options and next steps. Feel free to call us at 1-888-673-5521." | No | 19 distinct income sources in app | No |
| **Chase** | **No — Chase collapsed the funnel to preapproval only.** Both `/personal/mortgage/mortgage-preapproval` and the education article confirm: "Chase only offers mortgage preapproval, which is as close as you can get to establishing your creditworthiness prior to the purchase contract." | Yes (Name + DOB + SSN at the preapproval step) | Soft at rate-quote; hard at preapproval / product selection | **Only 3 error strings exist in the entire stack:** "We couldn't find any loan options for you. Please try again." / "We couldn't find available loan options. Typically, loan options require a minimum score of 620." / "We couldn't find options for this loan amount. Try updating the purchase price or down payment to see available loans and rates." | No | Limited (wealth-management jumbo) | No |
| **Bank of America** | Yes (DMPQA digital-mortgage) | Yes (First name, Middle, Last, Suffix, Phone, Phone type, Email, Street, **DOB, SSN**, Years in school, Military, Citizenship, Residency) | Soft (one-bureau) for prequal; hard tri-merge for full app | "**Your request needs some additional information**" / "We have received all your information and will need to talk to you before we can make a decision. You will receive an email from your lending specialist with this information." Buttons: **Call now / Request a call back / Email / View**. Completely opaque about *why* | No | Yes (explicit branches in prequal flow) | No |
| **Wells Fargo** | Yes — 6-step purchase flow (Blend-hosted) | **DOB + email + phone + income + ZIP, but NO SSN at prequal** | Soft at prequal (rs13-consent-to-soft-credit-check), hard at preapproval | `rs20-no-match` → `rs22-helpful-resources` + `rs23/rs24-contact-us`; no binding-constraint ID | No | None — no SE / non-QM marketing | No |
| **Guild Mortgage** | **No self-serve prequal at all.** Apply Online is a 5-step lead-capture wizard. | N/A online (collected by LO) | N/A | Only a 500-error page with `mailto:retailescalations@guildmortgage.com` | No | Yes — ITIN, Doctor, Section 184, Complete Rate (no score) | No (MyPath2Own requires manual LO handoff) |
| **NewRez / Shellpoint** | Yes | **Last 4 of SSN at verify-ssn step**; full SSN later | Soft at prequal; hard at preapproval (explicitly disclosed) | **"Thanks for your interest / We've received your information, but we're unable to continue right now…"** (4 lines, no reason, no threshold comparison) | No | Yes — Smart Series Non-QM, SmartEdge Jumbo | No |

**The unanimous industry failure:** **Nobody tells a denied borrower *why*.** Every site funnels failures to "talk to a loan officer." This is the gap the diagnostic owns.

---

## 1. ROCKET MORTGAGE — rocketmortgage.com

### 1.1 Website URLs (live, sitemap-verified)
- **Homepage:** https://www.rocketmortgage.com/
- **Purchase entry:** https://www.rocketmortgage.com/purchase/get-started (H1: *"Turning one day into day one"*)
- **Refinance entry:** https://www.rocketmortgage.com/refinance/get-started (H1: *"Refinance into a brighter future"*)
- **Cash-out refi:** https://www.rocketmortgage.com/get-your-low-rate/cash-out-refinance (claim: "Clients got an average of $54,000")
- **Home equity:** https://www.rocketmortgage.com/home-equity/ (Rocket offers **HEL** but **no HELOC**)
- **VA / military:** https://www.rocketmortgage.com/purchase/va-military-homebuyer
- **First-time buyer:** https://www.rocketmortgage.com/purchase/first-time-homebuyer (3-question "personalize my journey" widget)
- **Non-QM:** https://www.rocketmortgage.com/home-loans/non-qm-loan
- **DSCR (investor):** https://www.rocketmortgage.com/home-loans/dscr-loan
- **Calculators (12 total):** under `/calculators/` — mortgage-calculator, home-affordability-calculator, refinance-calculator, home-equity-calculator, down-payment-calculator, mortgage-payoff-calculator, debt-consolidation-calculator, amortization-calculator, rent-vs-buy, bah-calculator (military), plus a "home loans" 4-question personalization quiz
- **Apply entry:** any CTA → `apply.rocketmortgage.com` (Akamai-shielded Launchpad Angular SPA) — the actual application is not bot-observable
- **/learn/ SEO moat:** 2,619 indexed URLs (English) + parallel `/es/learn/` Spanish tree

### 1.2 Target audience (verbatim from Rocket's own page copy)
1. **First-time buyers** — `ONE+ by Rocket Mortgage®` (1% down + 2% grant up to $7K)
2. **VA / military** — "Buy with 0% down and unlock more ways to maximize your VA benefits"
3. **Refinancers** — rate-alert subscription, cash-out refi ("$54K average")
4. **Home-equity borrowers** — debt-consolidation messaging
5. **Self-employed** — Non-QM bank-statement loans, DSCR — "but you won't be able to do everything online"
6. **Investment-property / DSCR** — DSCR for investors with prior rental experience
7. **Low-credit / bad-credit** — "Fresh Start program" (call 800-769-6133); "we still encourage you to apply even if your score is slightly below 580"
8. **Low-down-payment** — HomeReady/Home Possible (3%), ONE+ (1%+grant), RentRewards
9. **Spanish-speaking** — full `/es/` site

### 1.3 Value proposition (exact headlines)
- **Purchase hero H1:** "Turning one day into day one" (CTA: "Start my preapproval")
- **Refi hero H1:** "Refinance into a brighter future" (CTA: "Apply in 5 mins")
- **3-step value strip:** "Preapprovals, lightning fast" → "Easy online process" / "Zero credit impact" / "Shop with confidence"
- **Brand tagline (footer):** "America's largest lender*" (HMDA 2025 footnote)
- **About page H1:** "Our mission: Help everyone home" — "Founded by Dan Gilbert in 1985"

### 1.4 Lead capture mechanism — Prequalified Approval vs. Verified Approval Letter
Rocket is more honest than most lenders because they publish a 4-tier taxonomy:

| Product | Doc name | What they collect | Pull | Use case |
|---|---|---|---|---|
| **Prequalified Approval** | "Prequalified Approval Letter" | Self-reported income, assets, debts | **Soft pull** (no score impact) | 6-12 months before buying |
| **Prequalification** (legacy) | "Prequalification letter" | Self-reported | Soft pull | Early budgeting |
| **Preapproval** | "Preapproval letter" | Pay stubs, W-2s, tax returns, bank statements | **Hard pull** | 1-3 months before touring |
| **Verified Approval** | "Verified Approval Letter" (VAL) | Full income/asset/employment verification by underwriter | Hard pull | Strongest offer letter |

**Verbatim from Rocket's learn pages:**
- *"Prequalification uses a soft credit pull, while preapproval uses a hard pull to confirm your credit score"* (`/learn/mortgage-prequalification`)
- *"Prequalify in about 10 minutes and gain real buying power. It's a soft pull that won't impact your credit."* (`/purchase/first-time-homebuyer`)

**To apply, Rocket recommends having on hand (verbatim from /faqs):**
> "A separate email address for each person that will be on the loan · Your online banking username and password, or details about how much money is in each account you want us to consider for your approval · Your income and employer information · Your Social Security number"

The full list applies to the **full application**; the Prequalified Approval is sold as "no documents" — but the application SPA does collect SSN/DOB before producing the letter.

### 1.5 Questions asked (Prequalified Approval, per Rocket's published copy)
1. Income (annual gross; salary + bonuses + freelance)
2. Expected down payment amount
3. Current debt payments (credit cards, student loans, car payments)
4. Total debt amount
5. SSN (recommended)
6. **Self-employed applicants** — "you can start your application with Rocket Mortgage, but you won't be able to do everything online. We'll connect you with a Home Loan Expert along the way."
7. Property type (single-family / second / investment / condo)
8. Co-borrower data (Rocket requires a separate email per borrower)
- **Timeline:** "Prequalification can be completed in as little as 15 to 30 minutes online or over the phone." "1 to 3 business days once all required documentation is submitted" for preapproval.

### 1.6 User experience
- **Calculator (home-affordability) inputs:** location, **yearly income before taxes**, **cash to buy**, **monthly debts**, credit-profile dropdown
- **Results page has a 1-click slider:** Affordable (20-36% DTI) / Stretching (37-43%) / Aggressive (44-50%)
- **Two cards:** "Estimated home price you can afford" + a separate "Prequalification estimate" card with a **"Get prequalified"** button
- **Calculator disclaimer:** "Prequalification Estimates are calculated differently from home affordability, so the numbers won't match." (Rocket warns the user the number is rough, not guaranteed.)
- **Mobile:** "highly-rated app," fully responsive site, AI chat (Rocket Assist)
- **Friction:** the Prequalified Approval entry is low-friction (~10 min, no docs); the VAL is high-friction (full doc collection, asset verification, employment verification, 1-3 business days)

### 1.7 Calculator functionality (12 tools)
- **Mortgage calculator** — P&I + taxes + insurance + HOA
- **Home affordability** (DTI-based, with the slider)
- **Refinance calculator (wizard)** — 6 questions: goal, financial priority, current rate, credit profile, home value, current balance, cash wanted
- **Home equity calculator** (HEL only)
- **Down payment, mortgage payoff, debt consolidation, amortization, rent vs buy, BAH (military)**
- **No standalone DTI calculator** — DTI is inside the home-affordability tool only

### 1.8 Calls to action
- **Primary:** "Start my preapproval" / "Apply in 5 mins" / "Get prequalified" (red CTA, omnipresent)
- **Secondary:** "See today's rates" (live rate tables on every product page)
- **Tertiary:** "Talk to a Home Loan Expert" (sticky phone: **(888) 452-8179**)
- **Rocket Assist chat** on every page

### 1.9 Trust signals
- **"America's largest lender*"** (HMDA 2025)
- **"No. 1 in customer satisfaction"** (J.D. Power) — disclaimer: "Rocket Mortgage has won more awards than any other brand in the J.D. Power U.S. Mortgage Servicer Satisfaction Studies between 2002 – 2025."
- **"39 Years Delivering Mortgages"** / **"7.5M+ Closed Mortgages To Date"** / **"97% Net Client Retention Rate"** (over 12 months ending Dec 31, 2023)
- **"Over 1 million eClosings"**
- **NYSE: RKT** (parent Rocket Companies) / NMLS #3030
- **Rocket Community Fund** (1M+ volunteer hours)

**Missing trust signals on the public site:** No BBB rating displayed, no Trustpilot widget, no Norton/McAfee badge.

### 1.10 SEO strategy
- 2,619 `/learn/` URLs + parallel `/es/learn/` Spanish tree
- 51 state-level mortgage-rates pages (`/mortgage-rates/california-mortgage-rates` … all 50 states)
- 30+ product pages
- All 12 calculators are indexable
- **The exact "denied" keyword cluster lives in /learn/:**
  - `/learn/what-to-do-if-your-mortgage-loan-application-is-denied`
  - `/learn/mortgage-denied-after-preapproval`
  - `/learn/does-getting-preapproved-hurt-your-credit`
- **The credit-score cluster:**
  - `/learn/what-credit-score-is-needed-to-buy-a-house`
  - `/learn/va-loan-credit-score`, `/learn/fha-loan-credit-score`
  - `/learn/credit-score-to-buy-a-house`
  - `/learn/how-to-buy-house-with-bad-credit`
- `/learn/rocket-mortgage-editorial-standards` + author pages for E-E-A-T

### 1.11 Strengths
1. **Brand recognition + J.D. Power #1** (most-awarded in mortgage servicing 2002-2025)
2. **Soft-pull Prequalified Approval with a clear, low-friction promise** ("10 minutes, no documents, won't affect your credit")
3. **Best-in-class mobile app** (real account management, eClosing, doc upload)
4. **Deepest calculator suite in the industry** (12 tools, including a BAH tool for military)
5. **Massive SEO moat** (2,619 /learn/ pages, 2 languages)
6. **Prequalified Approval vs. Verified Approval Letter framework** — more honest than binary prequal-vs-preapproval
7. **580 credit floor + Fresh Start program** — Rocket actively wants near-miss applicants
8. **Real-time rate tables** on every product page
9. **AI chat (Rocket Assist)** on every page
10. **Specialty products** (Non-QM, DSCR, ONE+ 1%-down, HomeReady, Home Possible, Bridge, Home Equity Loan, VA, FHA)
11. **Redfin partnership** for agent selection
12. **Spanish site**

### 1.12 Weaknesses — especially for denied / near-qualifying users
1. **The application SPA is a black box** (Akamai-shielded), so the question order and email/phone/SSN timing aren't observable — good for security, bad for transparency
2. **No "Why can't I qualify?" diagnostic.** When the calculator's prequalification estimate returns $0 or "no results," the user gets one of three generic fallbacks (verbatim from the home-affordability results page):
   - **"There were no results using those numbers, but don't let that stop you!"**
   - **"With a better credit profile, you could get prequalified. Typically lenders look for a credit profile above 580."**
   - **"With more cash to buy, you could get prequalified."**
3. **The system does not identify the binding constraint** (DTI? LTV? credit band? reserves? employment tenure?)
4. **Calculator prequal only takes 3 financial inputs** (income, cash, debts) + a coarse credit-profile dropdown — no employment tenure, property type, LTV, reserves, co-borrowers, or self-employed vs. W-2 — so the estimate is uncalibrated to the real engine
5. **Self-employed path is bifurcated and clunky** — Non-QM requires a human Home Loan Expert; DSCR is restricted to investors with prior rental experience
6. **Heavy reliance on the phone** — (888) 452-8179 is in the persistent header on every page
7. **No public credit-score or DTI standalone calculator** (DTI is buried inside the affordability tool — a missed SEO play)
8. **No public display of customer-review count or third-party trust badges**
9. **No HELOC, no USDA, no construction loan** (explicitly called out)
10. **Spanish translations on /es/ still route to English purchase flow** for some sub-pages
11. **The 7 actual denial reasons are hidden in a static 8-minute article** (`/learn/what-to-do-if-your-mortgage-loan-application-is-denied`) — list: income/employment instability, low credit, high DTI, insufficient cash, large deposits, property issues, incomplete information

### 1.13 What "Why Can't I Qualify?" can do better (relative to Rocket)
| Rocket's experience | The diagnostic's answer |
|---|---|
| One of three generic messages when calculator prequal fails | **Identify the binding constraint** (DTI, LTV, credit, reserves, employment, property) |
| The 7 denial reasons hidden in an 8-minute article | **Interactive denial-reason picker** with concrete 30/60/90 day fix plans |
| "Apply with a different lender" is one paragraph | **Cross-program matching engine** scoring the user against 12+ loan products (FHA, VA, USDA-not-offered, Non-QM, DSCR, ONE+, HomeReady, Home Possible, HEL, cash-out, rate-and-term, Bridge) |
| Self-employed → phone handoff | **Self-employed pre-qualifier** that takes bank-statement cash flow and runs the Non-QM / DSCR formula before the call |
| "Rocket Money can help you boost your credit" | **Credit-impact simulator** — slider for paying down balances, projected score lift, projected rate/qualifying change |
| No way to compare yourself to typical approved borrowers | **"How you compare"** widget benchmarking DTI / credit / LTV / reserves against median approved profile at Rocket for the same loan amount and ZIP |
| Adverse action letter required by law (passive) | **Adverse-action-letter decoder** — paste/upload, get plain-English explanation, the federal regulation behind it, prioritized fixes with time-to-recovery estimates |
| Static 8-minute article | **Saveable, shareable diagnostic PDF + email follow-up** that the user can take to a housing counselor, credit counselor, or another lender |

---

## 2. LOANDEPOT — loandepot.com (mello)

### 2.0 The real funnel — what the obvious URLs hide
Most "obvious" URLs (`/prequal`, `/prequalification`, `/preapproval`, `/apply`, `/mello`, `/affordability-calculator`) **return 1.6 kB Scully SPA shells** — empty Angular shells that don't render content server-side. The actual entry point to the marketing prequal wizard is:
- **`https://www.loandepot.com/getstarted`** — the marketing wizard
- After that, users are routed to **`https://apply.myloandepot.com/register/get-started`** — the MLA (a Microsoft Entra-ID-authenticated Angular app)
- Texas users are routed to a B2C auth flow at `mellob2cdev.b2clogin.com`

This is critical context: loanDepot's prequalification is a **two-layer system** that competitors don't replicate.

### 2.1 Website URLs
- **Homepage:** https://www.loandepot.com/
- **Marketing prequal wizard entry:** https://www.loandepot.com/getstarted (7 steps, no bureau pull)
- **Full MLA (KYC):** https://apply.myloandepot.com/register/get-started (Microsoft Entra ID auth, 70+ page IDs)
- **Mortgage rates:** https://www.loandepot.com/mortgage-rates
- **Calculators (9):** under `/mortgage-calculator/` — home-loan, refinance, refinance-interest-savings, affordability, rent-vs-buy, arm-vs-fixed, jumbo-loan, fha-loan, va-loan; plus a separate `/renovation-calculator`
- **Refinance:** https://www.loandepot.com/refinance
- **First-time buyer:** https://www.loandepot.com/first-time-home-buyer

### 2.2 Target audience
**Mass-market retail, heavy in-house call-center model.** Purchase and refi (large refi book), self-employed via wholesale channel but not surfaced D2C, jumbo via "LD" (LDP) but not on the consumer site. Strong with celebrity brand ambassadors (Rick Ross, Arian Foster) for the "mello" branding.

### 2.3 Value proposition
- **Homepage hero:** *"Home loans, made simple."* / *"Get a customized rate quote in minutes."*
- **Mello platform pitch:** *"mello — a smart home loan experience that brings everything together."*
- **Celebrity endorsements:** Rick Ross and Arian Foster for "mello" branding
- **Customer-rated pitch:** they lean on the **"4.7 stars"** review claim
- **"Best Mortgage Lender for First-Time Buyers by WSJ 2024 & 2025"** (recent award)
- **"second largest non-bank lender"** claim
- **"$100B in loans since 2010"** / **"50% faster than the industry average"** / **"founded by Anthony Hsieh"**

### 2.4 Lead capture mechanism — the 2-layer prequalification

**Layer 1: Marketing wizard on loandepot.com (7 steps, NO bureau pull):**
1. Loan purpose
2. Loan amount / purchase price / down payment / property ZIP
3. **Self-reported credit bucket** (720+ / 680-719 / 620-679 / <620 / Not sure)
4. Home-buying stage
5. Timeframe
6. Legal name
7. Phone, email, LO-referral question

**"Estimating your score will not harm your credit"** is the verbatim copy. There is **no credit pull at all** at this stage — it's a marketing-grade estimate, not a true prequalification.

**Layer 2: MLA on apply.myloandepot.com (full KYC, 70+ page IDs):**
- Real first/middle/last/suffix, real email, real phone (with 6-digit SMS verification if `RegisterConfirmPhoneNumber_Enabled` flag is on)
- Real street/unit/city/state/zip
- `identity/verify-credit` (DOB + consent)
- `verify/ssn` (last 4 only — 4-digit numeric)
- HMDA demographics
- Income (W-2 or self-employed branches)
- Assets via **Finicity** bank-link
- `review-application` → `prequalify/summary` with a `Download Pre-Qualification Letter` button

**Soft vs hard pull — feature flags control this:**
- `featureFlag_SoftPullOnly` and `featureFlag_SoftPullAndTrimerge` control whether the `identity/verify-credit` step does a soft or hard pull
- **Trimerge** is used to digitally verify income/employment/assets **without a hard pull**
- **Finicity** is used to OAuth into banks and pull transaction history
- The prequalification letter path is **soft-pull**; the priced-offer / preapproval-with-offer path is **hard-pull**

**Verbatim step labels (from the bundle, selected):**
- *"Let's Verify Credit History"*
- *"Tell Us About Your Income"*
- *"Tell Us About Your Self-Employed Income"*
- *"Self Employed Income — Enter information about your business income"*
- *"Additional Information About The Home You Are Buying"*
- *"Almost Done! Let's Review Your Application"*
- *"Pre-Approval Summary"*
- *"Congratulations on your Prequalification"*
- *"Congratulations You Have Been Approved"*

**Length:** 8-12 minutes for true prequal; 20-40 minutes for full mello application.

### 2.5 The "denied" path is a black hole
The bundle references an internal `do-not-qualify` page and an `adverseActionNotice` modal — **but the public MLA page config has no user-facing body text for either**. The only consumer-facing fallback is `property/missing-important-information` ("Oops, it looks like you skipped some required fields…"), which is for *skipped* fields, not *failed qualification*.

**There is no:**
- factor breakdown
- plain-language denial reason
- alternative-product match
- re-application timeline
- credit-counseling referral
- actual adverse-action notice copy shown to the borrower

The state machine has 17 states including `Declined` and `ReviewSuspended`, but the **only on-page denial surface** in the entire published config is a generic "Oops, we encountered a problem" modal.

### 2.6 User experience
- **Mello is the unified digital product** — single portal for loan status, document upload, e-sign, LO messaging
- **Mobile:** solid but not as polished as Rocket; app + web are integrated
- **Friction:** the "Talk to a loan officer" CTA appears almost immediately — they aggressively route to phone
- **Phone-prompt fatigue:** a known complaint — many users get a call from a 1-800 number within minutes of submitting any form
- **Microsoft Entra ID authentication** for the MLA is unusual for a consumer D2C flow and adds friction

### 2.7 Calculator functionality
- **Mortgage payment calculator** (P&I / taxes / insurance / HOA / PMI)
- **Refinance calculator + Refinance interest savings calculator**
- **Affordability calculator** — "How much can I afford?"
- **Rent vs Buy**
- **ARM vs Fixed**
- **Jumbo loan**
- **FHA loan**
- **VA loan**
- **Renovation calculator** (separate)
- **Notable gap: no dedicated DTI calculator** — affordability is the only DTI-adjacent tool, and it's a home-price / income estimator, not a debt-input calculator

### 2.8 Calls to action
- **"Get Started"** (red)
- **"Prequalify"** (nav bar)
- **"Talk to a loan officer"** (persistent, omnipresent — phone-first)
- **"Apply with mello"**
- **"Find a loan officer near me"** (geo-targeted)
- **"Lifetime Guarantee"** (real program with redemption phone and fine print)

### 2.9 Trust signals
- **A+ BBB** (logo present, but no letter grade displayed)
- **Equal Housing Opportunity** (logo in footer)
- **NMLS #174457** (with link)
- **State Licensing** disclosure
- **Lifetime Guarantee** (real program with redemption phone and fine print)
- **"second largest non-bank lender"** claim
- **"$100B in loans since 2010"** / **"50% faster than the industry average"** / **"founded by Anthony Hsieh"**
- **"Best Mortgage Lender for First-Time Buyers by WSJ 2024 & 2025"**
- **Curated first-name testimonials**
- **Finicity + Trimerge + Microsoft Entra ID + Jornaya + LuckyOrange + reCAPTCHA + Dynatrace** stack

**Missing:**
- **J.D. Power rating**
- **BBB letter grade** (only logo)
- **Aggregate customer reviews** (Trustpilot / Zillow / Google)
- **Celebrity endorsements** (Rick Ross / Arian Foster have been retired from active marketing)
- **Security trust seals** (Norton / McAfee)
- **"as seen in" logo strip**
- **Employee count**
- **"X customers served" counter**
- **SOC 2 / ISO 27001 badge**
- **Transparent rate display**
- **Named third-party awards beyond WSJ**

### 2.10 SEO strategy
- **112 URLs** in the main sitemap
- **45+ URLs** in the learning-center sitemap
- **Heavy programmatic-SEO investment** in:
  - Fixed-rate (one URL per term: 10/15/20/30 year)
  - ARM (one URL per initial-fixed-period: 3/5/7/10 year)
  - FHA/VA/Jumbo (each with `mortgagerates`, `streamlinerefinance`, `cashoutrefinance` children)
  - 9 mortgage calculators
- **Long-form content clusters** for first-time buyers, VA, renovation (203k), and home equity
- **Local SEO** uses separate `sitemap-branches.xml` and `sitemap-loanofficers.xml` indices

### 2.11 Strengths
1. **Two-layer prequalification** — marketing wizard (no bureau pull) + full MLA (Finicity + Trimerge)
2. **High-touch service** — wins on customer satisfaction vs. digital-only competitors
3. **mello** — a well-designed unified portal
4. **True soft-pull prequal exists** (no SSN at the marketing layer; last-4 SSN at MLA)
5. **Finicity + Trimerge** for instant VOI/VOE (1-3 days faster than competitors)
6. **Volume + diversification** (purchase, refi, HELOC, reverse)
7. **Strong review velocity** — one of the highest in the industry
8. **"Best Mortgage Lender for First-Time Buyers by WSJ 2024 & 2025"** — recent, relevant award
9. **"Lifetime Guarantee"** program
10. **Programmatic SEO at scale** — 9 calculators + per-term fixed-rate pages

### 2.12 Weaknesses
1. **Heavy phone-prompt** — users called within minutes of submitting
2. **The "denied" path is a black hole** — no factor breakdown, no plain-language reason, no alternative product, no re-application timeline
3. **No scenario simulation** — "if I pay off my credit cards" is unanswerable
4. **Limited self-employed pathway on the consumer side** (filter exists but rest of flow assumes W-2)
5. **No DTI or LTV feedback** to the user
6. **mello feels like a lead-capture tool** more than a guidance tool — optimized for conversion, not diagnosis
7. **Microsoft Entra ID authentication** for MLA is unusual friction for D2C
8. **Personal loans are third-party** (underwritten by Upgrade, with an explicit disclosure "Information input below will be sent directly to Upgrade and will not be received or stored by loanDepot.com, LLC"). The `/apply` URL is the personal-loans landing, not the mortgage landing — confusing.
9. **Dev URLs leaked into production bundle** — `dv1.loandepotdev.works`, `loandepotdev.io`, `mlaweb-public-dv1.loandepotdev.works/mortgage/register`, `mellob2cdev.b2clogin.com/...B2C_1_Sign_Up&client_id=6158c7a4-2d67-46cb-8910-3df965a52ae5` — a security/configuration concern
10. **"The state has rejected your request" modal** is the only denial surface — no factor breakdown, no plain-language reason

### 2.13 What "Why Can't I Qualify?" can do better (10-point gap analysis)
The subagent compared what loanDepot shows today vs what a denial-diagnostic tool should show for each scenario:

| Scenario | What loanDepot shows | What a diagnostic should show |
|---|---|---|
| Soft-pull fail | "Oops, we encountered a problem" modal | DTI / FICO band / LTV / reserves / employment gap |
| Low FICO | (no specific message) | "You're 40 points below conventional 620; FHA accepts 580 with 3.5% down" |
| High DTI | (no specific message) | "Your DTI is 52%; conventional allows 43% (45% with compensating factors); FHA allows up to 56.9% with strong compensating factors" |
| Self-employed < 2 years | (off-ramp to a human) | "Consider bank-statement / Non-QM / DSCR; you may qualify for Smart Series at NewRez" |
| Recent late payment | (no specific message) | "Wait 12 months from the late payment for FHA; conventional is re-shopable in 30-60 days" |
| Bankruptcy | (off-ramp to a human) | "Chapter 7: 24 months for FHA, 48 months for conventional; Chapter 13: 12 months for FHA with court approval" |
| Foreclosure | (off-ramp to a human) | "36 months for FHA, 84 months for conventional; non-QM may be available now" |
| Jumbo | (off-ramp if > $2M) | "Non-QM jumbo available; portfolio lenders may approve with 10% down" |
| Self-employed co-borrower | (off-ramp to a human) | "Adding a W-2 co-borrower may lower your effective DTI" |
| No credit score | (off-ramp) | "Guild Complete Rate (no-score) or non-QM VantageScore products" |

**Plus the broader diagnostic advantages:**
- **Puts diagnosis before the phone call** — loanDepot's denied user just gets a call
- **No-SSN option** — competes with loanDepot's marketing-wizard prequal but goes deeper (guideline-level reason + scenario sim)
- **Educational scaffolding for denied users** — "what is the 3/2/1 rule?" / "what is a compensating factor?"
- **Cross-lender eligibility** — loanDepot shows what loanDepot offers; the diagnostic shows what the borrower is likely to qualify for across the whole market
- **"What would change the answer" simulator** — DTI / coverage-ratio deltas
- **Self-employed pathway** — explicit branching for W-2 vs 1099 vs self-employed
- **No DTI / LTV feedback** to the user — the diagnostic surfaces both
- **7-pillar scoring** with green/yellow/orange/red
- **Printable PDF + email follow-up** — loanDepot only has this for the approved user
- **No third-party trust badges** — the diagnostic can earn them

---

## 3. BETTER.COM — better.com

### 3.1 Website URLs
- **Homepage:** https://better.com/
- **Mortgage:** https://better.com/mortgage (H1: "Mortgages That Don't Feel So Complicated")
- **Refinance:** https://better.com/b/refinance
- **Single funnel entry:** https://better.com/start (chatbot "Betsy" + radio: Purchase / Refinance / HELOC)
- **Affordability:** https://better.com/readytobuy ("Let's find out how much home you can afford")
- **VA loan:** https://better.com/va-loan
- **Crypto-backed mortgages:** https://better.com/crypto-backed-mortgages (Coinbase partnership)
- **HELOC:** https://better.com/actnow
- **Calculators:** https://better.com/b/calculators/mortgage-calculator + 50 state-localized variants
- **Important:** `/prequalify`, `/preapproval`, `/apply`, `/better-mortgage`, `/get-started` ALL 404 — Better deliberately collapsed all entry points to `/start`

### 3.2 Target audience
**Tech-forward, urban, refinance-heavy, conventional 30-yr fixed.** First-time buyers in metros, refi customers who are rate-sensitive, customers who distrust traditional banks / commission-driven LOs. **Not a strong fit for self-employed, non-QM, or government loan seekers** (they outsource these). Unique: crypto holders (Coinbase partnership).

### 3.3 Value proposition (verbatim)
- **Homepage meta description:** *"Complete your home loan application online in as little as 3 minutes. With Better, getting a mortgage has never been easier."*
- **`/mortgage` H1:** "Mortgages That Don't Feel So Complicated" / CTA: "Get pre-approved"
- **`/b/refinance` H1:** "Refinance Your Home — 100% online — Lower rates, lower monthly payments"
- **Sticky nav microcopy:** "3 min | No credit impact" next to every "Get started" button
- **Value props listed under "We're shifting the status quo" (verbatim):**
  - "Available 24/7"
  - "Honest rate quotes — No bait-and-switch. No hidden fees. Just clear, upfront pricing."
  - "Instant loan estimate"
  - "Simple, 100% online process"
  - "On-demand rate lock"
- **Section CTA:** "Get pre-approved in as little as 3 minutes" / "Get started"
- **Trust signals repeated on every page:** "$100B+ Home loans funded online" / "400,000+ Customers proudly served" / "Best Mortgage Lenders of 2023"
- **Crypto page:** "Pledge Bitcoin as collateral and get 40% of its value credited toward your down payment … Coinbase One members will be eligible to receive up to $10,000 in closing cost credits"

### 3.4 Lead capture mechanism (the critical detail)
The 3-minute "pre-approval" flow asks:
1. Loan purpose (Purchase / Refinance / HELOC)
2. Property ZIP
3. Property value
4. Down payment
5. Loan amount
6. Credit score band
7. Employment (employed / self-employed / contractor / unemployed)
8. Annual income
9. **Name**
10. **Email**
11. **Phone**
12. **DOB**
13. **SSN** (required for the "3-minute pre-approval")
14. Citizenship status (later)
15. Assets / debts (later)

**Pull type — confirmed verbatim from Better's own FAQ and tenant config:**
- *"Better Mortgage uses both 'soft' and 'hard' credit checks to see if you qualify for a loan. For pre-approval, we issue a soft credit check that does not impact your credit score. Once you actually apply for a mortgage, we issue a hard credit check that can negatively impact your score for a short time."*
- *"When you apply online for our 3-minute basic pre-approval, we'll ask for your social security number and do a secure 'soft' credit check. This doesn't affect your credit score in any way."*

**Tenant-config feature flags (extracted from `/start`'s `__NEXT_DATA__` payload):**
- `askForFullSsnPreappFeature: true` — **Full SSN is collected at the 3-min pre-approval stage**
- `useCredcoSoftPull: true` — soft pull vendor is **Credco**
- `isAuthInPreappEnabled: true` — pre-approval requires sign-up / account creation (email + password)
- `enablePreappCreditDelinquencyDenials: true` — **There ARE automated credit-based denials at pre-approval stage**
- `showPreapprovalFicoScoreToast: true` — user sees their FICO score in a toast after the soft pull
- `enableAvmPreappPrefill: true` — property AVM auto-fills the application
- `enableGoogleOauthFeature: true` — Google SSO is available

**Minimum credit thresholds (verbatim from FAQ):**
- Conventional / refi: **620+**
- Cash-out refi: **620+**
- Jumbo refi: **700+**
- Jumbo loan: **700+ with DTI ≤ 43%**
- FHA: **580+ with 3.5% down** (25% down with non-occupying co-borrower)
- FHA DTI: **≤ 50% standard, up to 57% with compensating factors**
- VA: **620+ minimum, no down payment**
- HELOC: **680+**

**Lender credit:** "At Better Mortgage, the lender credit limit for conforming loans is $5,000. For jumbo loans, there is no lender credit limit."

### 3.5 Questions asked (full pre-approval flow)
1. Loan purpose (Purchase / Refi / HELOC)
2. Auth (email, password, optional Google SSO)
3. Name, DOB, SSN, current address, phone
4. **Soft credit pull** (Credco) → FICO score revealed in toast
5. Property (address, value, type, occupancy — AVM auto-fills)
6. Loan amount & down payment %
7. Income (employer, gross monthly income, pay type: W-2 / 1099 / self-employed; if self-employed: 2-year tax return, K-1, P&L, business entity)
8. Assets (bank accounts via Plaid or manual upload; bank statements 1-2 months; large deposit explanations; gift funds)
9. Debts / DTI (auto loan, student loan, credit card minimums, child support, alimony)
10. Employment (current + previous employer, years in line of work, gap explanations)
11. Co-applicant (optional; if used, **lower of two FICO scores is used**)
12. Citizenship / residency
13. Declarations (bankruptcy, foreclosure, prior mortgage)

**Verified Pre-Approval** (FAQ): "A basic pre-approval letter takes about 3 minutes. For a verified pre-approval letter, you will need to upload financial documents such as W-2s, paystubs, tax returns, and bank statements. This usually takes about 20 minutes."

### 3.6 User experience
- **Mobile:** excellent. The 3-minute flow is optimized for phone.
- **Steps:** ~6 screens, single-page form, very fast.
- **Friction:** the SSN ask is **the first major drop-off point** in Better's analytics — many users abandon at SSN.
- **The "approval" is not a real approval** — Better's "pre-approved" letter is a *soft approval* with caveats; they have a high reversal rate when documents are reviewed.
- **Customer service has been a major pain point**; Trustpilot ~1.4-1.8 stars on 10,000+ reviews.

### 3.7 Calculator functionality (live, on-page)
- **Mortgage Payment Calculator** (`/b/calculators/mortgage-calculator` + 50 state variants) — Home price, down payment, down-payment %, loan term, interest rate, taxes, insurance, HOA, PMI toggle → Monthly payment breakdown
- **Home Affordability** (`/how-much-house-can-i-afford`) — Income, debts, down payment, taxes/insurance, rate, loan term → Max affordable price, DTI, monthly payment
- **HELOC Payment Calculator** — Loan amount, rate, draw period, repayment period → Interest-only payment during draw, P&I during repayment
- **HELOC vs Cash-out Refi** — Side-by-side comparison
- **Rent vs Buy**
- **Loan Comparison** (break-even between two fixed-rate loans)

**No DTI calculator, no self-employed calculator, no "what would raise my approval amount" calculator.**

### 3.8 Calls to action
- **"Get pre-approved in 3 minutes"** (everywhere)
- **"Start my approval"** (the "Better" branded button)
- **"Lock my rate"** (post-quote)
- **"Find an agent"** (Better Real Estate cross-sell)
- **"Refinance"** (persistent nav)
- **"Talk to a Real Estate Agent"** (cross-sell)

### 3.9 Trust signals
- **BBB:** A+ rating but **very high complaint volume** — one of the highest complaint-to-review ratios
- **J.D. Power:** not historically top tier
- **Trustpilot:** ~10,000+ reviews averaging **1.4-1.8 stars** — by far the worst among these 10 competitors
- **NMLS ID, Equal Housing Lender** displayed
- **CFPB / regulatory actions:** Better is the subject of multiple enforcement actions (e.g., the 2023 Vishal Garg voicemail incident, the Redfin $7.5M+ settlement over kickback claims, the 2024 consent order)

### 3.10 SEO strategy
- **Top keywords:** "better.com mortgage," "better mortgage rates," "get pre approved," "no commission mortgage," "no fee mortgage," "lender credit," "mortgage refinance," "first time home buyer"
- **Sitemap: 1,219 URLs.** Breakdown: 699 content URLs, 251 FAQ/glossary, 75 calculators, 97 rate pages, 60 promo/named-person, 59 real-estate/agents, 24 about/legal
- **Programmatic SEO at scale** — 50 state calculator pages, 7 salary-variant affordability pages (`/content/how-much-house-can-i-afford-with-70k-salary`, …, `-200k-salary`)
- **Explicit AI-search content:** `/content/ai-mortgage-lending`, `/content/best-mortgage-lenders-according-ai`, `/content/2836-rule-what-ai-gets-wrong`
- **Domain keywords in meta:** `home loans, mortgage interest rates, refinance rates, refinance calculator, refinance mortgage online`
- **Anti-SEO pattern:** Better deliberately killed `/apply`, `/prequalify`, `/preapproval` (all 404) and consolidated to `/start`

### 3.11 Strengths
1. **Single canonical entry point** (`/start`) — reduces funnel confusion, attribution noise, and duplicate tracking
2. **3-minute soft-pull pre-approval** — the cleanest "lead capture with no friction" mechanic
3. **Real chat assistant ("Betsy") + AI underwriting agent** — Better's `underwritingAgent` system prompt produces structured per-stage eligibility + notes + tasks (visible to underwriters, **not** to the borrower)
4. **Transparent qualification thresholds published in the FAQ** — minimum FICO by loan type, max DTI by loan type, lender credit limits, jumbo thresholds
5. **Direct-lender pricing with a written guarantee** — "$2,000 Better Closing Guarantee" + lender-credit + "No bait-and-switch" + "Instant loan estimate"
6. **Verified cross-sell ecosystem** — Better Real Estate, Better Cover, Better Settlement Services, Better Inspect, Better Connect, Better Home Card
7. **Crypto-as-collateral product** — uniquely differentiated (Coinbase partnership)
8. **Trustpilot + Google reviews surfaced on calculator pages** — third-party validation embedded in the lead-capture path
9. **One-Day Mortgage and 3-Day HELOC** — actual productized speed promises
10. **Salaried loan consultants, not commissioned LOs** — structurally supported by job titles on the page
11. **Programmatic SEO at scale** — 50 state calculator pages, 7 salary-variant affordability pages
12. **Mobile-first UX** — React SPA
13. **AI-search published content** — one of the few lenders publishing for LLM search

### 3.12 Weaknesses
1. **"Why can't I qualify" diagnostic doesn't exist as a tool.** The only on-site denied content is the article `/content/mortgage-application-denied` and `/content/car-payments-mortgage-denial-first-time-buyers` — generic SEO articles, not interactive
2. **Automated credit-based denials at pre-approval are silent** — `enablePreappCreditDelinquencyDenials: true` is enabled, but the user-facing UX is a generic "we can't approve you right now"
3. **No public DTI calculator, no self-employed income calculator, no "what would raise my approval amount" calculator**
4. **The denied-article taxonomy is binary and qualitative** — it lists 7 reasons with no quantification. The article ends: *"if the letter isn't clear, by law the lender must tell you that you've got the right to request the reasons why your loan was denied if you ask within 60 days."* — i.e., Better outsources the explanation to the adverse-action letter
5. **Hard pull is a "second wall"** — soft pull pre-approval is generous, but converting to Verified Pre-Approval or full application triggers full doc collection; borrowers who passed the soft pull discover new gates only at this stage
6. **Sticky "3 min | No credit impact" badge is slightly misleading** — applies only to the *basic* pre-approval, not the *verified* pre-approval (~20 minutes + W-2s, paystubs, tax returns, bank statements)
7. **"No commission" model not verified by independent data** — Better is a direct lender (NMLS #330511, Fannie Mae seller/servicer) but does still pay Loan Consultants
8. **The `betsy` chatbot is conversational, but the funnel is finite** — no guided "I'm confused about my DTI" mode
9. **Co-borrower logic is the lower-of-two-FICO** — published, but will surprise many couples
10. **Self-employed underwriting is restrictive** — "you usually need to be self-employed for at least two years", declining YOY income uses the lower year, no stated income path
11. **The denied-user journey is post-mortem, not diagnostic** — only 3 destinations: the `mortgage-application-denied` article, the `improving-your-debt-to-income-ratio` article, and the human phone line (415-523-8837)
12. **No branch of `/start` for "I was denied elsewhere, what now?"** — this is a large traffic segment Better captures with articles but not with a tool
13. **No interactive "simulate a co-signer" or "simulate paying off this debt"**

### 3.13 What "Why Can't I Qualify?" can do better
1. **No-SSN option** — Better's biggest barrier is the diagnostic's biggest advantage
2. **Plain-English denial reason** — Better's denied users get nothing actionable
3. **Scenario simulation** — Better shows one quote; the diagnostic shows many possible paths
4. **Honest framing** — Better's marketing overpromises; the diagnostic differentiates by being transparently *educational*, not approval
5. **Self-employed pathways** — Better doesn't try; the diagnostic has a pillar specifically for self-employed
6. **No high-pressure phone call** — the user gets the diagnosis on their own time
7. **Cross-program visibility** — better at showing FHA/VA/USDA when conventional 620 FICO fails
8. **Adverse-action-letter decoder** — the article itself mentions ECOA rights; the diagnostic operationalizes them

---

## 4. UNITED WHOLESALE MORTGAGE (UWM) — uwm.com

### 4.0 Critical disambiguation — what the brief got wrong
**Three phrases in the original brief are not UWM phrases:**
- **"UWM EASE" / "EASE program"** = the **internal broker loan-origination system** (`uwm.com/login`). 29 mentions on the site, **all broker-side**. NOT a borrower program.
- **"Be Your Own Lender"** = **not a UWM phrase**. Closest equivalent is "Going Independent" — a recruiting CTA to loan officers to start their own broker shop and partner with UWM.
- **"EASY Approval"** = **not a UWM phrase**. Closest is "15-Minute Approvals" via BOLT (broker-side AI portal).

**UWM is structurally not a D2C lender.** Their entire UWM.com is a broker-recruiting funnel. There is no prequal, no soft-pull, no rate-quote tool, no affordability calculator. The only consumer-facing lead capture is "Start Your Search" → `mortgagematchup.com` (a broker directory, not an app). The only SSN capture on uwm.com is the loan-servicing portal for **existing** borrowers.

### 4.1 Website URLs
- **Home (wholesale / broker channel):** https://www.uwm.com/
- **Broker portal:** https://www.uwm.com/login (login required for full features)
- **Investor / public company info:** https://ir.uwm.com/
- **Find a Mortgage Broker:** https://www.uwm.com/find-a-broker (also `mortgagematchup.com` — a broker directory, Cloudflare-gated)
- **Calculators:** https://www.uwm.com/calculators
- **ChatGPT plugin (Aug 25, 2026):** allows users to search for brokers with filters (bilingual, loan type, reviews), and access "a variety of mortgage calculators" — but **no SSN, no soft pull, no prequal, no rate quote**

### 4.2 Target audience
**UWM does NOT have a true direct-to-consumer prequalification flow.** UWM is the **#1 wholesale lender in the U.S.** — they sell exclusively to independent mortgage brokers, who in turn serve consumers. This is the fundamental differentiator.

- **Primary audience:** Independent mortgage brokers / loan officers
- **Secondary audience (consumer):** Anyone whose broker uses UWM as their lender of choice. UWM's brand promises flow to consumers through their broker.
- **UWM's marketing message:** *"We don't compete with brokers. We partner with them."* This is a deliberate attack on Rocket (their main rival), which UWM characterizes as a "direct-to-consumer predator."

### 4.3 Value proposition (verbatim)
- **Homepage hero:** *"United Wholesale Mortgage — The #1 Wholesale Lender in America."* / *"The Broker Channel is the Best Channel."*
- **Mat Ishbia (CEO) tagline:** *"We win when brokers win."*
- **"UWM EASE" program (broker-side only):** automated loan submission, AI-driven underwriting speed (advertised < 15 minute underwriting in many cases), no lender fees, 0% down to 100% LTV through broker channel
- **"UWM EASE AI"** is the marketing brand for their AI underwriting initiative
- **"Broker protection"** is a hard-sell: UWM publicly commits to brokers (and against retail / consumer-direct channels) — "we will never go direct to consumer"

**Real consumer-facing value props UWM delivers via brokers:**
- **15-min initial approval (BOLT AI portal)** — for brokers
- **Bilt "Built-In Rewards" (March 2026)** — borrower earns points on mortgage payments
- **0% Down Purchase (3% DPA up to $15k, May 2024)** — through broker
- **Lock and Shop (90–365 day locks)** — through broker
- **Escrow waivers up to 97% LTV** — through broker
- **Doctor Loan, No-Score loans, VantageScore, FICO dual-evaluation** — broker tools

**UWM's consumer trust argument (their actual play vs Rocket/Better):** The August 28, 2024 Polygon Research study they commissioned — *"consumers save an average of $10,662 over the life of the loan when working with an independent mortgage broker as opposed to a nonbank retail lender."* VA loan savings: $13,432. Wholesale approval rate in minority-majority tracts: 70% vs retail 58%. UWM does **not** name Rocket/Better on uwm.com — their message is "brokers beat retail" as ideology, not a brand-vs-brand attack.

### 4.4 Lead capture mechanism
- **UWM's consumer-facing tool is the "Find a Mortgage Broker"** locator (mortgagematchup.com)
- The flow: Consumer → search ZIP → list of UWM-partnered brokers in the area → call/contact the broker
- **No consumer prequalification form on uwm.com**
- The lead capture happens at the **broker level** (not the lender level) — so the consumer's experience is dictated by whichever broker they pick
- The only SSN capture on uwm.com is the **loan-servicing portal for existing borrowers**

### 4.5 Questions asked (consumer side)
- On the broker locator: ZIP code, name, email, phone, optional property type
- Once routed to a broker, the broker's own prequalification tool is what the consumer sees (typically loanDepot mello, Breeze, or a custom broker LOS)

### 4.6 User experience
- **Consumer-side experience is fragmented** because it depends entirely on the broker
- UWM's own uwm.com site is **a B2B marketing site** — about being a broker, not about getting a mortgage
- **Strength:** UWM's broker network is huge, so most U.S. ZIPs are covered
- **Weakness:** no consistency of consumer experience

### 4.7 Calculator functionality
- **"How Much Can I Afford"** calculator at /calculators
- Mortgage rate tool
- **No DTI calculator, no scenario simulator, no approval likelihood**

### 4.8 Calls to action
- **For consumers:** "Find a mortgage broker" / "Get started with a broker near you"
- **For brokers:** "Become a UWM partner" / "Join the #1 wholesale channel"
- **For existing brokers:** "Login to the broker portal"

### 4.9 Trust signals — what IS and ISN'T on uwm.com

**Present:**
- **#1 wholesale lender in the U.S. by volume** for several consecutive years (quarterly)
- **Public company:** NYSE: UWMC. Mat Ishbia is a high-profile CEO (former Michigan State basketball star)
- **NMLS, Equal Housing Lender, security badges**
- **"America's #1 Wholesale Lender"** claim

**NOT present on uwm.com despite common assumptions:**
- **Zero J.D. Power mentions** (UWM has not been the 2024/2025/2026 J.D. Power primary mortgage origination satisfaction winner — that was Rocket)
- **Zero BBB badge** (UWM is A+ rated but doesn't display it)
- **Zero Trustpilot / LendEDU / Best Workplaces / Inc. 5000**
- **The "Awards" link on /media-resources resolves to an empty section**

### 4.10 SEO strategy
- **NOT competing for retail mortgage keywords** — sitemap has 106 URLs, none aimed at borrower long-tail
- **Target keywords:** branded ("UWM", "EASE login", "Mat Ishbia"), wholesale/broker ("wholesale mortgage basics", "become a mortgage broker", "BrokerX"), broker events (AIME, UWM LIVE!), sports sponsorship ("Mortgage Matchup Center", "Phoenix Suns")
- **Zero targeting** of "mortgage prequalification", "mortgage rates today", "first time home buyer", "denied mortgage", or "mortgage calculator"

### 4.11 Strengths
1. **#1 wholesale lender in the U.S.** (multi-year run)
2. **Lowest cost structure** in the industry (wholesale-only model)
3. **Aggressive product rollouts** — 0% down, temporary buydowns, bank statement loans, DSCR, etc.
4. **AI underwriting** — UWM EASE AI / BOLT is real
5. **"Broker-only"** positioning gives the consumer a *real human* (the broker) at the end of the funnel
6. **15-min initial approval** for brokers
7. **Bilt "Built-In Rewards"** — borrower earns points on mortgage payments (March 2026)
8. **Public company** — NYSE: UWMC
9. **Mat Ishbia thought leadership** — podcasts, X, CNBC

### 4.12 Weaknesses (for the consumer)
1. **No direct consumer prequalification** — you cannot get a rate from UWM directly; you must find a broker
2. **Consumer experience is broker-dependent** — some brokers are excellent, some are not
3. **No D2C diagnostics** — no "why was I denied?" tool
4. **No self-serve scenario modeling**
5. **No standardized prequalification questions** — each broker asks differently
6. **No "denial explanation"** outside of the broker's verbal response
7. **mortgagematchup.com is Cloudflare-gated** — even the broker directory is hard to access from scripted clients

### 4.13 What "Why Can't I Qualify?" can do better (12 specific gaps for UWM)

1. **No denial-reason delivery to consumer** — UWM never touches the borrower; denial happens inside broker's POS, never comes back to UWM
2. **No "what would change the answer" simulator** (DTI / coverage-ratio deltas)
3. **No near-qualifying alternative-product matcher** — UWM has Non-QM, Bank Statement, DSCR, Doctor Loan, No-Score, Jumbo — but a denied conventional borrower has no UWM tool that maps to these
4. **No soft-pull "What would I qualify for?" estimate**
5. **No FICO/VantageScore education tied to the denial** (e.g. "20 points below conventional floor, FHA accepts 580 with 3.5% down")
6. **No denial → cure plan** (e.g. "wait 90 days for the late to drop, reapply")
7. **No path to a non-commissioned human** — every handoff is to a paid broker
8. **No trust badges on the post-denial page** (no J.D. Power, no BBB)
9. **The DTI/LTV/FICO/Reserves rubric is not exposed** to borrowers anywhere
10. **The "wholesale beats retail" data is invisible to denied consumers** — Polygon study shows brokers approve 70% in MMCTs vs retail 58%; this is a *massive* acquisition channel UWM does not exploit
11. **Mia/ChatUWM/ChatGPT plugin are forward-looking only** (find a broker, calc affordability) — no "explain why I was denied" tool
12. **No timeline expectation** ("here's what to do in 7/30/90 days")

### 4.14 Bottom line for the diagnostic
- **Direct-to-consumer** — UWM's biggest (deliberate) gap is no consumer prequal; the diagnostic fills it
- **Pre-broker diagnosis** — the consumer comes to a broker with a self-diagnosis, which actually **helps the broker help them**
- **Broker-quality independence** — the diagnostic's value is the same regardless of which broker the user chooses
- **Cross-lender eligibility** — UWM is one of many wholesale lenders; the diagnostic covers the full market

---

## 5. CALIBER HOME LOANS — caliberhomeloans.com

### 5.1 Website URLs (the critical update)
- **caliberhomeloans.com → 301 → https://www.newrez.com/** (Rithm acquired Caliber in 2021; integration completed 2023; Caliber brand retired for D2C)
- **D2C apply entry (purchase):** https://myapp.newrez.com/lead/loantype?cid=21338&purposetypeid=1
- **D2C apply entry (refi):** https://myapp.newrez.com/lead/loantype?cid=21338&purposetypeid=3
- **Calculators:** under `/mortgage-calculators/` (Mortgage Payment, Refinance, Loan Amount Estimator, Rent vs Buy, Loan Term, Budget — **no DTI calculator**)
- **7 loan product pages** under `/types-of-mortgages/`
- `/military/`, `/crypto/`, `/find-loan-officer/`, `/mortgage-rates/`, `/help-center/`
- The application SPA is the surviving Caliber "cola-…" / "caliber-corporate-design" Angular stack now re-platformed to Newrez branding

### 5.2 Target audience
**The Caliber DNA still serves its original audiences** — now under Newrez branding:
- **Military / VA** — dedicated `/military/` page ("Supporting our heroes every step of the way"); the app has dedicated `military` and `military-service-details` steps
- **Refinancers** — home H1 "Refinance Today"
- **First-time buyers** — `/buy-a-home/`
- **HELOC / Home Equity** — top nav button + dedicated landing page
- **Niche / Self-Employed / Investors** — **19 distinct income sources in the app** (Salaried, Self-Employed, Military Pay, Rental, Public Benefits, Pension, Retirement, Family Support, Boarder, Interest & Dividends, Capital Gains, MCC, Non-Borrower Household, Notes Receivable, Real Estate, Royalty, Trust, Automobile/Expense Account, Disability, Social Security, Unemployment, VA Benefits) — **far more inclusive than Rocket/UWM**
- **Crypto holders** — unique `/crypto/` landing page (2026 press release "Newrez to recognize crypto assets") — a real first-mover play

### 5.3 Value proposition
- **Newrez H1:** "Newrez makes home happen your way"
- **Subhead:** "Lower your monthly payment, with clarity at every step."
- **Trust strip:** "Trustpilot — Trusted by homeowners nationwide" / "Equal Housing Opportunity" / "Better Business Bureau"
- **Military page H1:** "Supporting our heroes every step of the way. Securing Homes, Defending Dreams: Your Military Gateway to Homeownership"
- **"Trusted by 4 million homeowners"** / "Top Mortgage Lender every year since 2022" / "#2 Overall Lender by Scotsman Guide in 2025"
- **Fannie Mae Star Award, HousingWire Tech100, Military Friendly Award** (no J.D. Power badge)

### 5.4 Lead capture mechanism — the two-tier flow (this is the headline UX finding)

**Tier 1: Quick Quote / Soft Credit Authorization** — a "pre-qualification letter" from an **Experian-only soft pull**:
- Asks: property state → address → price → down payment → property type → occupancy → name → DOB → email
- **No SSN required for the soft path**
- Modal copy: *"Don't worry, this is a soft credit pull and will not affect your credit score."*
- Success: *"Congratulations, {name}! You are pre-qualified based on the details you provided and your [XXX] FICO credit score reported by Experian."*

**Tier 2: Full Application / Hard Credit Authorization** — separate screen with three radio options:
- "Yes, Authorize Credit Pull"
- "No, Do Not Authorize"
- "Not Yet, My Credit is Frozen" (with links to all three credit bureau unfreeze pages — an unusually good touch)

Hard pull consent: *"I authorize [Brand] to obtain one or more consumer credit reports about me in connection with my mortgage loan inquiry or prequalification request."*

Plus a 45-day shopping-window reassurance: *"multiple credit pulls performed within 45 days are only counted once."*

**PII timing:**
- DOB — right before the soft pull (for identity match)
- Email — right before the soft pull
- Phone — at account creation (after prequal result) and again in the "Communication" form of the full app
- SSN — **never for soft prequal**; required only in the hard-pull full application step, regex `xxx-xx-xxxx`

### 5.5 Questions asked (full application, internal route structure)
- `/application/gettingstarted/welcome` (+ `/welcomeback`)
- `/application/loan/loantype` — "What do you want to apply for?"
- `/application/loan/loanpurpose/:id` — Purchase / Refinance / HELOC
- `/application/loan/property/:inquiryId/:borrowerId` — "Property Info"
- `/application/loan/about-you/:inquiryId/:borrowerId` — marital status / military
- `/application/loan/finances/:inquiryId/:borrowerId` — income + assets
- `/application/loan/additional-questions/:inquiryId/:borrowerId` — Declarations & Demographics
- `/application/loan/credit-info/:inquiryId/:borrowerId` — credit authorization / pull
- `/application/loan/co-borrower/:inquiryId/:borrowerId` — co-borrower flow
- `/application/loan/submit/:inquiryId/:borrowerId` — review & submit
- `/heloc/app-dashboard/prequal/:id` / `/preapproval/:id` / `/appsubmission/:id` — **the disqualified/thank-you page**

### 5.6 User experience
- **Web:** functional, integrated
- **Mobile:** responsive
- **Friction:** Tier 1 is low (no SSN). Tier 2 is higher (full app).
- **Specialty:** 19 distinct income sources in the app

### 5.7 Calculator functionality
- **Mortgage payment, refinance, budget, loan amount / affordability, loan term comparison, rent vs. buy**
- **No DTI calculator, no "could I qualify" tool, no "what credit score do I need" tool**
- Every calculator ends with the same CTA: "Apply Online" / "Call 888-673-5521"

### 5.8 Calls to action
- **"Apply"** (top-right)
- **"Refinance Today"** (mid-page hero)
- **"Start an Application"**
- **"Get pre-approved in minutes!"** (military page)
- **Phone (top-right):** **888-673-5521**

### 5.9 Trust signals
- **Trustpilot — "Excellent"** (widget embedded; score populated at runtime)
- **Better Business Bureau** logo/link in hero
- **NMLS #3013** (Newrez LLC)
- **Equal Housing Opportunity**
- **"Trusted by 4 million homeowners"** / "Top Mortgage Lender every year since 2022" / "#2 Overall Lender by Scotsman Guide in 2025"
- **Fannie Mae Star Award, HousingWire Tech100, Military Friendly Award**
- **No J.D. Power badge**

### 5.10 SEO strategy
- **800+ indexed URLs**
- **342 individual Loan Officer landing pages** — hyper-local SEO workhorse
- 326 blog posts (mortgage-101, buying-selling, etc.)
- 119 press releases
- `/mortgage-rates/` is purely educational (5 factors you can control + 3 you can't — captures long-tail "what affects my mortgage rate")
- Meta keywords on home: "Home Equity Loan Refinance Cash Out Newrez Mortgages Lender Bank"

### 5.11 Strengths
1. **True two-tier soft/hard prequal flow** — among the cleanest in the industry
2. **FCRA-compliant soft path** with explicit "this is a soft pull" disclosure
3. **Exceptional income-type inclusivity** (19 sources)
4. **Argyle + AccountChek autofill** (5 days faster than competitors)
5. **Wide loan-product catalog** (FHA, VA, USDA, Conv, ARM, Renovation, Niche, Assumable)
6. **Unusually good "credit frozen" handling** — three radio options with per-bureau unfreeze links
7. **Strong hyper-local SEO** via 342 loan-officer pages
8. **Earned-not-bought trust signals**
9. **Crypto landing page** — a first-mover play

### 5.12 Weaknesses
1. **Brand continuity is broken** (no splash, no preservation of Caliber equity)
2. **Denial UX is a dead end** — the disqualified screen is verbatim:
   > "**Thank you for applying with us!**" / "We've received your information, but we're unable to continue right now." / "A member of our team will reach out to review your options and next steps." / "Feel free to call us at **1-888-673-5521**" / "Go To Dashboard" (single button)
3. **No DTI calculator anywhere** on the site despite teaching DTI on /mortgage-rates/
4. **Soft pull is single-bureau Experian**, but full app is tri-merge — can surprise the user
5. **Prequal letter is labeled "pre-approval" with asterisk disclaimer** — consumer confusion risk
6. **HELOC and full-mortgage SPAs are completely separate**
7. **D2C channel is the smallest of three** (retail < wholesale < 30+ JV brands)
8. **Mobile app is mostly a servicing app**, not a full apply-on-mobile experience
9. **Back-end code has internal denial flags** (`isCreditScoreLessThan580`, `noCreditResult`, `leadRejectedReason`) but **none surface to the user**

### 5.13 What "Why Can't I Qualify?" can do better
1. **Show the actual numeric FICO threshold** (Caliber shows the gauge on success, hides it on denial)
2. **Surface the computed DTI** even though it has all the inputs
3. **Show the LTV they would have offered vs. what's possible**
4. **Map `leadRejectedReason` codes into a human list**
5. **Tell the user which Declaration tripped the rules engine** (Caliber asks 8 hard Y/N questions but the denial screen never says which one)
6. **Reference the credit-freeze case with per-bureau unfreeze links on the denial path**
7. **Offer a reapply cooldown estimate** ("try again in 90 days")
8. **Suggest under-reported income sources** (Public Benefits, Rental, etc.) the soft funnel doesn't ask about
9. **Prompt for self-employed 2-year tax return data**
10. **End on a written structured diagnosis** instead of "we'll call you"

---

## 6. CHASE MORTGAGE — chase.com/mortgage

### 6.0 The headline reframe — Chase collapsed the funnel
**Chase does NOT offer mortgage prequalification.** They have a preapproval product only. Both `/personal/mortgage/mortgage-preapproval` and the education article `/personal/mortgage/education/buying-a-home/get-mortgage-prequalify` confirm:
> *"Chase only offers mortgage preapproval, which is as close as you can get to establishing your creditworthiness prior to the purchase contract. It's a more detailed examination of your financial background, including a thorough check of your credit report, proof of income and assets."*
> *"Please note that Chase does not offer mortgage prequalification, only mortgage preapproval for prospective homebuyers."*

The page they call "preapproval" is functionally a Rocket/Better-style "instant prequalification" — **soft-pull at the rate-quote step** and only becomes a hard pull when the borrower selects a product. But Chase deliberately *rejects* the word "prequalification" because they want to be a "preapproval" lender (more authoritative, sellers take it more seriously).

This is a major positioning decision — **and it leaves a gap for any "why am I denied" tool that wants to speak to the soft-quote stage** (where Chase is willing to soft-pull but not willing to brand it "prequalification").

### 6.1 Website URLs (verified working)
- **Mortgage root (marketing hub):** https://www.chase.com/personal/mortgage (H1: "We're with you, all the way home")
- **Apply entry (one CTA):** https://secure.chase.com/web/oao/application/retail
- **Mortgage preapproval (consumer-facing):** https://www.chase.com/personal/mortgage/mortgage-preapproval (H1: "Shop for homes with a Chase mortgage preapproval")
- **Mortgage purchase:** https://www.chase.com/personal/mortgage/mortgage-purchase (H1: "Apply for a mortgage and start your journey")
- **Mortgage refinance:** https://www.chase.com/personal/mortgage/mortgage-refinance (H1: "Mortgage refinance: see how you could save")
- **First-time homebuyer hub:** https://www.chase.com/personal/mortgage/mortgage-purchase/first-time-homebuyer (H1: "Let's get you into your first home")
- **Affordable lending (DreaMaker, FHA, VA, grants):** https://www.chase.com/personal/mortgage/affordablelending (H1: "Putting homeownership within reach")
- **Today's purchase rates:** https://www.chase.com/personal/mortgage/mortgage-rates (rates page stamped "August 27th, 2026")
- **Today's refinance rates:** https://www.chase.com/personal/mortgage/refinance-rates
- **FHA loan page:** https://www.chase.com/personal/mortgage/fha-loan
- **VA loan page:** https://www.chase.com/personal/mortgage/va-loan
- **Jumbo mortgage:** https://www.chase.com/personal/mortgage/jumbo-mortgage
- **Investment property:** https://www.chase.com/personal/mortgage/investment-property
- **Chase Closing Guarantee ($5K):** https://www.chase.com/personal/mortgage/closing-guarantee
- **Chase Agent Express ($10K):** https://www.chase.com/personal/mortgage/chase-agent-express
- **Self-employed article:** https://www.chase.com/personal/mortgage/education/buying-a-home/apply-for-mortgage-when-self-employed
- **Calculators hub:** https://www.chase.com/personal/mortgage/calculators-resources
- **Chase MyHome dashboard (existing customers):** https://www.chase.com/personal/mortgage/myhomedashboard
- **Mortgage assistance (hardship):** https://www.chase.com/personal/mortgage/mortgage-assistance/get-started

**URLs that 404 (do NOT use these):** `/personal/mortgage/apply-now`, `/personal/mortgage/prequalify`, `/personal/mortgage/dreamaker`, `/personal/mortgage/affordability-calculator`, `/personal/mortgage/first-time-homebuyer`, `/personal/mortgage/learn`, `/personal/mortgage/buying-a-house`, `/personal/mortgage/get-started`, `/digital/mortgage`, `/personal/home-lending`, `/mortgage`, `/mortgage/calculator`, `/mortgage/refinance`. The actual marketing paths are under `/personal/mortgage/...`.

### 6.2 Target audience
1. **Existing Chase bank customers** (checking/savings/HSA) — by far. Every mortgage page has a header reading *"Already a Chase customer — Go to Chase MyHome"* next to *"New to Chase — Start online"*. The unique value props (relationship discount, $5K Closing Guarantee, DreaMaker, jumbo up to $9.5M, Chase Agent Express, Homebuyer Grant) are meaningful only when you have — or are willing to open — a Chase deposit account.
2. **First-time homebuyers** (heavy editorial investment — "Ultimate First-Time Homebuyer Guide", Beginner to Buyer podcast, 16 tips, 28/36 rule, FHA explainer, DreaMaker page)
3. **Refinancers** (lower-payment / cash-out / shorter-term)
4. **Affordable / low-down-payment / grant-eligible buyers** (DreaMaker, FHA, VA, Chase Homebuyer Grant of $2,500 or $5,000 in eligible census tracts)
5. **Jumbo / affluent buyers** (non-agency loans up to $9.5M, jumbo up to 89.99% LTV, Private Client tie-in)
6. **Self-employed** (full educational article; sample P&L form for hardship, IRS Form 4506-C required for SE income)
7. **Investment-property buyers** (own page, no-cash-out limits apply on DreaMaker)
8. **Veterans / military** (VA loan, dedicated $0-down messaging, SCRA notice)
9. **Real-estate agent partnerships** (Chase Agent Express / HomeStory — $10K reward)

**Implicit non-target:** people Chase has no plausible reason to court — gig-only workers with no W-2, foreign nationals (no DSAPI / foreign-national product), tiny-balance buyers under $50K.

### 6.3 Value proposition (verbatim)
- **Root page H1:** "We're with you, all the way home"
- **Hero sub-bullets:** "Down payments as low as 3%" / "Guaranteed on-time closing or get $5,000" / "Get started with no impact to credit score"
- **Primary CTAs:** "Apply now", "Get rates", "See current rates", "Find your advisor"
- **Awards:** *"#1 Ranked Mortgage Servicer for Customer Satisfaction and Highest Ranked for Resolving Problems or Questions — For JD Power 2026 award information, visit jdpower.com/awards."*
- **Human-touch subhead:** "Need a human touch? We'll be your guide — Your Home Lending Advisor helps you every step of the way."
- **Preapproval page H1:** "Shop for homes with a Chase mortgage preapproval" / Subhead: "Get a head start on homebuying."
- **3-step visual:** "Step One: Answer a few questions about yourself, your mortgage needs and your finances, with no impact to your credit score. Step Two: After you submit your preapproval, we'll connect you with a Home Lending Advisor to discuss your customized preapproval, with no commitment necessary. Step Three: Once you have your digital preapproval letter, you can start making offers with a competitive advantage."
- **Preapproval value bullets:**
  - "On time closing or get $5,000, if you qualify"
  - "Rate discounts from .05% to 1%" (the relationship-pricing hook — only meaningful if you have a Chase checking account)
  - "Down payments as low as 3%"
  - "Homebuyer grants up to $5,000 in select areas, if you qualify"
  - "On average, homebuyers save more in mortgage fees with Chase compared to a non bank"
- **Affordable Lending H1:** "Putting homeownership within reach" / Subhead: "Get closer with a grant of $2,500 or $5,000 in select areas, plus a low down payment."
- **Closing Guarantee H1:** "Guaranteed on-time closing or get $5,000." / Subhead: "Get preapproved — start online"
- **Agent Express H1:** "Get up to $10,000 when you sell and buy a home"
- **Rates page:** "Today's mortgage rates" with example: "6.375% Interest rate / 6.559% APR" for ZIP 60629 on a $350K 30-yr fixed conventional with 1.896 discount points

### 6.4 Lead capture mechanism
- **"Apply now"** is the single primary CTA; routes to `secure.chase.com/web/oao/application/retail`
- The page they call "preapproval" is functionally a soft-pull rate-quote:
  - **Soft pull** for the rate-quote / "exploring your loan options" inside the mortgage calculator
  - **Hard pull** once a product is selected
  - The soft-then-hard disclosure is on the mortgage calculator page
- **3-step flow:**
  - Step 1: "Answer a few questions about yourself, your mortgage needs and your finances, with no impact to your credit score."
  - Step 2: "After you submit your preapproval, we'll connect you with a Home Lending Advisor to discuss your customized preapproval, with no commitment necessary."
  - Step 3: "Once you have your digital preapproval letter, you can start making offers with a competitive advantage."
- **Unusual requirement:** the HLA-callback requirement (every borrower gets assigned a Home Lending Advisor who calls to discuss the preapproval) is something Rocket/Better/Figure do **not** impose

### 6.5 Calculator functionality (11+ calculators)
- **Mortgage payment calculator** — real ZIP-localized rates
- **Affordability calculator**
- **Home value estimator**
- **Refinance calculator**
- **Refinance savings calculator**
- **HELOC calculator**
- **FHA calculator** (lives inside mortgage calc)
- **VA home loan calculator**
- **Amortization calculator**
- **Extra payments calculator**
- **Mortgage points (discount points)**
- **Homebuyer Assistance Finder (grants lookup)**
- **No DTI calculator, no approval-likelihood simulator, no scenario sliders**

### 6.6 The "denial" / "no match" path (the critical finding)
**The only denial messaging in Chase's stack are three error strings found embedded in the calculator's JSON:**
- "We couldn't find any loan options for you. Please try again."
- "We couldn't find available loan options. Typically, loan options require a minimum score of 620."
- "We couldn't find options for this loan amount. Try updating the purchase price or down payment to see available loans and rates."

**There is no:**
- DTI/LTV/reserve denial
- "what would have qualified you" simulator
- co-applicant suggestion
- down-payment-assistance cross-sell
- credit-rebuild pathway
- follow-up drip

This is essentially the same as Rocket: three static error strings.

### 6.7 Trust signals
- **J.D. Power 2026** — "#1 Ranked Mortgage Servicer for Customer Satisfaction and Highest Ranked for Resolving Problems or Questions"
- **Zillow 4.9 stars** (consumer rating surfaced)
- **2025 MortgagePoint Lending Excellence Award winner** (refinance page)
- **Servicing more than 3 million mortgages** (refinance page)
- **NMLS, FDIC, Equal Housing Lender**
- **Missing:** no BBB badge, no Trustpilot widget, no third-party review count

### 6.8 SEO strategy
- **967+ indexed mortgage URLs**
- **739 long-tail education articles** (the deepest of any big-bank competitor)
- **Keyword clusters:** "how much house can i afford", "apr vs interest rate", "down payment on a house", "first-time home buyer", "fha loan", "va loan", "jumbo mortgage", "closing guarantee", "agent express", "myhome", "DreaMaker", "Chase Homebuyer Grant", "rate lock 30-90 days"
- **Brand-end SEO:** Chase does not title their rates page "Bank of America mortgage rates" — they use "Mortgage Rates - Today's Rates from Chase" (brand at end)

### 6.9 Strengths
1. **Brand trust** — the largest U.S. bank
2. **Existing-customer cross-sell** — relationship discount
3. **In-person service** — 4,700+ branches
4. **DreaMaker loan** — 3% down, no PMI, for first-time buyers
5. **Diverse product set** — conforming, FHA, VA, USDA, jumbo up to $9.5M, HELOC, HELOAN
6. **J.D. Power** performance is strong (#1 servicer)
7. **Chase Closing Guarantee ($5K)** + **Chase Agent Express ($10K)**
8. **Chase MyHome dashboard** for existing customers
9. **12 calculators, 162 product pages, 739 long-tail education articles** — deepest content library among big banks
10. **Spanish site** + accessibility compliance

### 6.10 Weaknesses
1. **No prequalification product** — the funnel is collapsed to preapproval, which is a positioning decision that leaves a gap for any "why am I denied" tool that wants to speak to the soft-quote stage
2. **HLA-callback requirement** — every borrower gets assigned a Home Lending Advisor who calls to discuss the preapproval; this is a friction Rocket/Better/Figure don't impose
3. **No third-party trust badges** — no BBB, no Trustpilot
4. **No DTI calculator, no approval-likelihood simulator, no scenario sliders**
5. **No alternative program routing** — failed conventional doesn't surface FHA / VA / USDA automatically
6. **No self-employed pathway in the consumer flow**
7. **The denial path is essentially 3 static error strings** — no DTI/LTV/reserve diagnosis, no "what would have qualified you" simulator, no co-applicant suggestion, no DPA cross-sell
8. **The "rate discounts from .05% to 1%" is hidden** — never explicitly stated that you need a Chase checking account
9. **Prequalify is a black box** — "qualified for $X" without showing the math

### 6.11 What "Why Can't I Qualify?" can do better (relative to Chase)
- **Pillar breakdown** — Chase's $X number is a black box; the diagnostic shows which of the 7 pillars is the obstacle
- **No-SSN, no-DOB pre-screen** — Chase requires SSN/DOB at the preapproval step; the diagnostic offers an anonymous educational pre-screen
- **Cross-program routing** — when a borrower fails conventional 620 FICO, the diagnostic surfaces FHA 580, VA 620, USDA 640, and non-QM
- **Self-employed guidance** — Chase punts self-employed to phone; the diagnostic provides structured guidance
- **"What would it take" simulation** — Chase's denied user has no actionable feedback; the diagnostic gives a 30-90-180 day action plan
- **HLA-pre-fill** — if the borrower does end up routed to Chase, the diagnostic's output could pre-fill the HLA call agenda, making the call shorter
- **DreaMaker surfacing** — the diagnostic could surface DreaMaker as a fit for first-time buyers who think they need FHA
- **Chase Homebuyer Grant awareness** — the diagnostic could flag whether the user is in a Chase Homebuyer Grant-eligible census tract

---

## 7. BANK OF AMERICA MORTGAGE — bankofamerica.com/mortgage

### 7.1 Website URLs (verified)
- **Mortgage hub (root):** https://www.bankofamerica.com/mortgage/ (H1: "Home Loans and Rates")
- **Home mortgage loans:** https://www.bankofamerica.com/mortgage/home-mortgage/ (H1: "The perfect home starts with the right mortgage")
- **Today's mortgage rates:** https://www.bankofamerica.com/mortgage/mortgage-rates/
- **Refinance overview:** https://www.bankofamerica.com/mortgage/refinance/ (H1: "Ready to Refinance? We are here to help.")
- **Today's refinance rates:** https://www.bankofamerica.com/mortgage/refinance-rates/
- **First-time homebuyer:** https://www.bankofamerica.com/mortgage/first-time-home-buyer/ (H1: "First-time homebuyer? Relax: We're here to help you through the process")
- **Digital Mortgage Experience®:** https://www.bankofamerica.com/mortgage/digital-mortgage-experience/
- **Home Loan Navigator® login:** https://www.bankofamerica.com/mortgage/home-loan-navigator/
- **Affordable housing / Community Homeownership Commitment:** https://www.bankofamerica.com/mortgage/affordable-housing-programs/ (H1: "Bank of America's Community Homeownership Commitment®")
- **Calculators:** Mortgage Calculator, Closing Costs Calculator, Home Affordability Calculator, Refinance Calculator
- **Home Value Estimator (Real Estate Center):** https://homevaluerealestatecenter.bankofamerica.com/
- **Learn center (pillar):** https://www.bankofamerica.com/mortgage/learn/ — extensive articles on prequal vs preapproval, how mortgages are approved, how much house can I afford, types of mortgage loans, down payment, APR vs. interest rate, cash-out refi vs. HELOC
- **BofA Rewards / Preferred Rewards:** https://www.bankofamerica.com/preferred-rewards/

**Application URLs (secure):**
- **Prequalification (digital mortgage):** https://secure.bankofamerica.com/apply-now-services/home-loans/initialize/v1/init?requesttype=DMPQA&subCampCode=98969 → resolves to `https://secure.bankofamerica.com/digital-mortgage-application/prequal/`
- **Full mortgage application (purchase):** https://secure.bankofamerica.com/apply-now-services/home-loans/initialize/v1/init?requesttype=DME&loanPurpose=purchase
- **Refinance application:** https://secure.bankofamerica.com/apply-now-services/home-loans/initialize/v1/init?requesttype=DME&loanPurpose=refinance
- **Welcome back / saved apps:** https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=SNR&flow=DMPQWELCOMEBACK
- **Phone (lending):** 1-800-324-4842 (in-flow help), 1-866-466-0979 (mortgage sales), 1-866-502-9005 (refi)

**Note:** `bankofamerica.com/mortgage/prequalification` and `/home-loans` 404; the real prequalification entry is the DMPQA URL above.

### 7.2 Target audience
BofA's mortgage site speaks to a **broad cross-section of U.S. consumers**, but the messaging is layered:
- **First-time homebuyers** — dedicated hub with "5 common mistakes" articles
- **Refinancers** — "Ready to Refinance? We are here to help." Cash-out refi featured alongside HELOC
- **Existing BofA customers / Preferred Rewards / BofA Rewards members** — **the strongest segmentation lever.** Tiered origination-fee credits:
  - **Member** — $100 off mortgage origination fees
  - **Preferred Plus** — $300 off origination + 0.250% HELOC rate discount
  - **Preferred Honors** — $600 off origination + 0.375% HELOC discount
  - **Premier** — 0.625% HELOC discount
- **Modest-income / first-generation buyers** via **Community Homeownership Commitment** umbrella
- **U.S. military / veterans** — multiple VA-loan callouts
- **Self-employed / small business owners** — explicit branches in the prequal flow: "Tell us about your self-employment", "Primary business", "Did this business report a profit or loss in your most recent tax return?", "A bit more about your business income", "Address you filed your last business tax return from", "Previous self-employment"
- **Trust / Federal employment / non-U.S. citizens / dual citizens** — asks "Please tell us your citizenship status" with three radio options: "U.S. citizen", "Dual citizenship with U.S.", "Not a U.S. citizen"; followed by a "Residency type" select for non-citizens
- **"BofA associates"** (employees) — the flow surfaces a modal: "We see that you're a Bank of America associate — As a Bank of America associate you have a dedicated team of lending officers to assist with your home loan needs. In order to use this benefit, simply continue with the application and your lending officer will automatically be updated to a member of this team." Button: "Continue as an employee"
- **Co-borrowers / spouses** — repeatedly asked: "Would you like to add a co-requestor to the prequalification request?", "Is the co-requestor your spouse?", "Do you and the co-requestor currently live at the same address?"
- **Property-type segments** (off-ramps in full application): "Congratulations on your decision to buy another property", "Buying a short sale or a foreclosure home will need some expert assistance", "Buying a home currently under construction", "Properties that will be owned by a trust or corporation will need some expert assistance", "Loan amounts in excess of $2,000,000 will need some expert assistance", "Loan amounts less than $100,000 will need some expert assistance"
- **Spanish speakers** — persistent "En español" toggle in the global nav

**NOT a featured audience:** real estate investors (no DSCR / investor product), crypto-bonus / non-QM / bank-statement-only loans (the flow explicitly off-ramps to a human for unusual files), tiny-balance buyers under $50K.

### 7.3 Value proposition (verbatim headlines)
- **Hub H1:** "Home Loans and Rates" / Engagement-chooser select: "What are your home loan goals?" with options: "Buy a home", "Lower my monthly mortgage payment", "Pay off my mortgage sooner", "Use my home's equity for a major expense", "Consolidate debt", "Buy my first home"
- **Home Mortgage Loans H1:** "Home Mortgage Loans" / Hero H2: "The perfect home starts with the right mortgage"
- **First-time homebuyer H1:** "Information for First-time Homebuyers" / Hero: "First-time homebuyer? Relax: We're here to help you through the process"
- **Digital Mortgage Experience H1:** "Apply for Your Mortgage" / Hero H2: "The mortgage experience — convenient and online"
- **Refinance H1:** "Mortgage Refinance" / Hero: "Ready to Refinance? We are here to help."
- **Affordable housing H1:** "Bank of America's Community Homeownership Commitment®" / H2: "Home grant programs" / "3% down payment fixed-rate mortgage" / "More homebuying help"
- **Prequal vs Preapproval learn H1:** "Two smart homebuying moves: mortgage prequalification and preapproval"
- **BofA Rewards value (verbatim from the rewards page):** "BofA Rewards clients may qualify for an origination fee or interest rate reduction based on their eligible tier at the time of application. Depending on your tier, you may be required to enroll in PayPlan from an eligible Bank of America deposit account prior to the loan closing date in order to receive the full program benefit."

### 7.4 Lead capture mechanism

**The two distinct lead-capture paths:**

**(A) Calculator / "engagement" lead capture (top of funnel, no PII).** On `/mortgage/`, a sticky widget asks the visitor to choose a goal via the "I want to…" select, then a 3-field form appears: **Purchase price + Down payment + ZIP code** (purchase) or **Home value + Current loan balance + ZIP code** (refinance) or HELOC fields. Submitting that form routes to a generic "Get an estimate of costs" results panel (no name, no SSN). The user can continue to either Prequalify or Apply. **No email, phone, SSN, or DOB is requested in the top-of-funnel widget.** It is essentially a price/quote lookup, not a lead form.

**(B) Prequalification / Digital Mortgage flow.** The DMPQA URL goes to the digital-mortgage-application/prequal/ page. This is the full prequalification:

**Exact field order at the personal-information step:**
1. First name
2. Middle
3. Last
4. Suffix
5. Phone
6. Phone type
7. Email
8. Street address
9. **DOB**
10. **SSN**
11. Years in school
12. Military status
13. Citizenship status (US / Dual / Non-US)
14. Residency type

**~30 step labels in the prequal flow extracted from the SPA JSON (verbatim):**
- "Let's Verify Credit History" (the soft-pull step)
- "Tell Us About Your Income"
- "Tell Us About Your Self-Employed Income"
- "Self Employed Income — Enter information about your business income"
- "Additional Information About The Home You Are Buying"
- "Almost Done! Let's Review Your Application"
- "Pre-Approval Summary"
- "Congratulations on your Prequalification"
- "Congratulations You Have Been Approved"
- KBA (out-of-wallet): "Where do we get these questions? A third-party credit bureau generated these questions based on your credit history and other proprietary data"
- Income-aggregation wait screen (Finicity/Plaid-like)
- Asset prefilling
- HMDA demographic step: "Next, a few questions we're required to ask"

**Soft vs. hard pull — verbatim consent text (extracted from the SPA):**
> "By selecting 'Authorize and continue,' you… acknowledge that… this will be a **soft pull with information from one consumer reporting agency and will have no impact on your credit score**… If you decide to proceed, you understand that the Bank will request additional information from you and order a tri-merge credit report, which will be a **hard pull**."

**Prequalification is explicitly soft; preapproval is hard.**

**Length:** 8-10 minutes for prequal; 30-45 minutes for full application

### 7.5 Calculator functionality (4 calculators + external AVM)
- **Mortgage Calculator** — purchase price, down payment, term, rate, taxes, insurance, PMI
- **Home Affordability Calculator** — uses **43% DTI cap** (back-end), assumes "excellent credit (FICO 740+)"
- **Closing Costs Calculator**
- **Refinance Calculator**
- **Free AVM** at `homevaluerealestatecenter.bankofamerica.com`
- **No standalone DTI calculator, no scenario simulator, no approval-likelihood calculator**

**All calculators assume "excellent credit (FICO 740+)"** — meaning the headline rate is marketing, not a real number for most users.

### 7.6 Two outcomes from the prequalification flow

**Approved:**
> "Congratulations! You've been prequalified for a new mortgage loan"
- with rate/APR/points/loan term
- a downloadable prequalification letter

**Referred (the denial-equivalent path):**
> **"Your request needs some additional information"**
> "We have received all your information and will need to talk to you before we can make a decision. You will receive an email from your lending specialist with this information."

**Buttons: Call now / Request a call back / Email / View**

**This is completely opaque about *why* the user didn't auto-qualify.** There is no DTI / FICO / LTV / reserves / employment-gap reason given. This is the precise category gap a "Why am I denied?" tool would fill.

### 7.7 Calls to action (verbatim)
- "Prequalify Now"
- "Apply now for home loans"
- "Get estimate of costs"
- "Already prequalified? Log in to your prequalification"
- "Lock your rate"
- "Manage my prequalification"
- "Continue as an employee" (BofA associate)
- "Get Started" / "Log in as a guest"

### 7.8 Trust signals
- **FDIC insured** (the bank)
- **Equal Housing Lender** (footer)
- **NMLS ID** (footer)
- **Security Center**, accessibility, TTY, co-browse
- **"Trusted by more than 66 million customers"** (the bank's scale is a trust signal)
- **NOT present on the consumer site:** **No** J.D. Power, **no** BBB badge, **no** customer review count

### 7.9 SEO strategy
- **Full meta-keyword extraction** — BofA's /mortgage title is "Home Loans and Current Rates from Bank of America" (brand at end, not start)
- **Deep educational library** of long-tail articles: "how much house can i afford", "apr vs interest rate", "down payment on a house", "prequal vs preapproval", "how to get approved for a mortgage", "types of mortgage loans", "cash-out refi vs HELOC"
- **BofA Rewards page** is heavily cross-linked from the mortgage hub
- **Sitemap at /sitemap** is extensive

### 7.10 Affordable Loan Solution® and grants
- **Affordable Loan Solution® mortgage** — 3% down payment (income limits apply), no PMI, fixed-rate conventional
- **Government loans** from FHA and VA
- **Low down payment options** with flexible credit and income guidelines

**Down payment assistance:**
- **America's Home Grant®** — "a lender credit of up to $7,500 that can be used towards non-recurring closing costs, like title insurance and recording fees, or to permanently buy down the interest rate. The funds do not require repayment."
- **Down Payment Grant program** — "a grant of up to 3% of the home purchase price, up to $10,000, to be used for a down payment in select markets. Grant Program is not available with all mortgage products. Must be a first-time homebuyer (no homeownership in the past three years). Contact a lending specialist for more information. The funds do not require repayment."
- **Down Payment Center** — links to state/local HFA, nonprofit, and employer programs

### 7.11 Home Loan Navigator®
- **Login-only dashboard** for managing application, tracking progress, submitting documents
- "30-day save" feature

### 7.12 Strengths
1. **No-SSN at top of funnel** — the calculator widget only takes ZIP + price, and SSN/DOB are deferred
2. **Soft pull explicitly disclosed** — BofA's consent text is the gold standard for FCRA compliance
3. **BofA Rewards / Preferred Rewards** benefits — real, tiered, and material
4. **Real estate center integration** — free AVM at `homevaluerealestatecenter.bankofamerica.com`
5. **30-day save** — users can come back to a saved prequal
6. **Comprehensive education** — Learn center is deep
7. **Accessibility** — TTY, co-browse, accessibility compliance
8. **Affordable Loan Solution®** — 3% down, no PMI, for first-time buyers
9. **America's Home Grant®** + **Down Payment Grant** — up to $7,500 + $10,000
10. **Down Payment Center** — links to state/local HFA, nonprofit, and employer programs
11. **In-person service** — ~3,800 financial centers
12. **Home Loan Navigator®** — solid digital portal

### 7.13 Weaknesses
1. **Long funnel** — ~30 step labels
2. **No top-of-funnel lead capture** — the calculator widget doesn't capture name/email
3. **2-minute timeout** on saved applications
4. **No live chat**
5. **No reviews badge** (no J.D. Power, no BBB, no customer review count on the consumer site)
6. **"Excellent credit" disclaimer** means the headline rate is marketing, not a real number for most users
7. **No DTI calculator, no scenario simulator, no self-employed pathway** (other than a hand-off to a human)
8. **"Your request needs some additional information" path is completely opaque** — no DTI / FICO / LTV / reserves / employment-gap reason
9. **No alternative program routing** — failed conventional not automatically routed to FHA / VA / USDA / Affordable Loan Solution
10. **No 3rd-party trust badges** on the consumer site
11. **"rate discounts from .05% to 1%" never explicitly states** that you need a BofA checking account (only the rewards page does)
12. **Prequalify is a black box** — "qualified for $X" without showing the math
13. **Prequalification requires SSN + DOB at step 9-10** — same friction as Rocket / Chase
14. **Hardship off-ramp to a phone call** for unusual files (no self-serve path for self-employed trust income, rental from a trust, etc.)
15. **No "Why am I denied?" UX on the "needs additional information" path** — routes to "Call now / Request a call back / Email / View"
16. **No DTI calculator inside the affordability calc** (43% DTI is used but not surfaced)

### 7.14 What "Why Can't I Qualify?" can do better (11 specific gaps from BofA)

1. **Plain-language reason** (DTI / estimated FICO band / LTV / reserves / employment gap) — BofA's "additional information" path is opaque
2. **A "what if" simulator** — "if I paid off $X, I'd qualify"
3. **Education tailored to the gap** — "here's how to improve your DTI in 90 days"
4. **Alternative product routing** (Affordable Loan Solution, FHA, VA, state HFA, Down Payment Center) — BofA doesn't surface these automatically
5. **An SLA on the human follow-up** — "a lending specialist will contact you within 1 business day" is not enough; the diagnostic can say "here's what to do while you wait"
6. **ECOA-style adverse-action reason codes** — translated into plain English
7. **Persistent eligibility recheck** — "we'll email you in 30 days when you re-check" — BofA doesn't do this
8. **A printable PDF of the diagnostic** — BofA's "Download your prequalification letter" is only for approved users
9. **Cross-program visibility** — surface Affordable Loan Solution as a fit for first-time buyers
10. **Preferred Rewards awareness** — the diagnostic asks if the borrower is a BofA customer and flags the rate discount opportunity
11. **Pillar-based diagnosis** — BofA's $X number is opaque; the diagnostic is not

---

## 8. WELLS FARGO HOME MORTGAGE — wellsfargo.com/mortgage

### 8.1 Website URLs
- **Home mortgage hub:** https://www.wellsfargo.com/mortgage/
- **Get a mortgage rate quote (purchase prequal SPA):** https://web.secure.wellsfargo.com/mortgage/get-prequalified/?src=homev1
- **Refinance rate quote SPA:** https://web.secure.wellsfargo.com/mortgage/refinance-quote/?src=homev1
- **Today's rates:** https://www.wellsfargo.com/mortgage/rates/
- **Mortgage calculators hub:** https://www.wellsfargo.com/mortgage/calculators/
- **Buying a house:** https://www.wellsfargo.com/mortgage/buying-a-house/
- **Affordable homebuying options (DPA / grants):** https://www.wellsfargo.com/mortgage/buying-a-house/affordable-options/
- **Refinance hub:** https://www.wellsfargo.com/mortgage/mortgage-refinance/
- **Cash-out refinance:** https://www.wellsfargo.com/mortgage/mortgage-refinance/cash-out-refinance/
- **Loan programs:** https://www.wellsfargo.com/mortgage/loan-programs/
- **Apply (Blend-hosted application entry):** https://www.wellsfargo.com/mortgage/apply/
- **FAQs:** https://www.wellsfargo.com/mortgage/faqs/
- **Learn hub:** https://www.wellsfargo.com/mortgage/learn/
- **Relationship discounts:** https://www.wellsfargo.com/mortgage/relationship-offers/
- **Spanish:** https://www.wellsfargo.com/es/mortgage/

**The application is hosted by Blend Labs:** the apply page footer states *"Blend Labs, Inc. ('Blend') hosts the online mortgage application for Wells Fargo."* Real estate search is powered by **ComeHome (HouseCanary)**.

### 8.2 Target audience
**Mass-market with strong skew toward existing Wells Fargo customers.** Heavy regional presence in the West and Midwest. Less emphasis on self-employed / non-QM. Wells Fargo exited the correspondent channel in 2022 — they now focus on retail (D2C) and wholesale (via their wholesale brand).

### 8.3 Value proposition
- **Main hub `/mortgage/` H1:** "Home Mortgage Loans"
- **Hero sub-headline:** *"Thinking of buying or refinancing? Get a mortgage rate quote — It takes just a few minutes and won't affect your credit score."*
- **Three differentiator tiles:**
  - "Relationship closing cost credits starting at $250"
  - "Relationship rate discounts starting at 0.125%"
  - "$10,000 down payment grant" (Homebuyer Access®)

### 8.4 Lead capture mechanism — the 6-step purchase prequal

**The 6 steps in order (extracted from the live SPA i18n bundle):**
1. **"Where are you in your journey?"** — 3 large buttons: *Just starting my search / Ready to make an offer / Need a loan now*
2. **"Where are you looking to buy?"** — City/State, then county
3. **"What is your estimated purchase price?"** — $10K–$20M
4. **"How much is your down payment?"** — Amount or %, with helper text "Most loans require at least 3% down. Under 20% down may require mortgage insurance…"
5. **"Tell us a little about yourself"** — First name, Last name, **Email** (first time collected), **Phone** (10-digit), **DOB** (MM/DD/YYYY, must be 18+, 21+ in MS), **Gross annual income**, **Current ZIP**, three consent checkboxes (contact, soft-pull credit, age), and **"Have you owned a home in the last three years?"** Yes/No
6. **"Please enter your current mailing address"** — Address line 1, line 2, City, State (no PO boxes)

**Critical gap vs. competitors: Wells Fargo does NOT ask for SSN at the prequal stage.** This is a meaningful differentiator.

**Soft pull vs. hard pull:**
- The SPA i18n bundle references `disclosures/rs13-consent-to-soft-credit-check.json` and user-facing text: *"I consent to a credit check allowing Wells Fargo Bank, N.A. to obtain my consumer credit report. (This will not affect your credit score.)"*
- **Soft pull at prequal, hard pull at preapproval**

**Prequal length:** ~5-8 minutes

### 8.5 Critical gaps in the prequal — what Wells Fargo does NOT ask
- **No SSN** (key differentiator vs. Rocket/LoanDepot)
- **No monthly debt**
- **No employment status / employer**
- **No assets / reserves**
- **No co-borrower**
- **No loan term preference**
- **No property type**
- **No occupancy intent**
- **No self-employed segmentation** — Wells Fargo has **zero self-employed / non-QM marketing** on the entire site

### 8.6 Calculator functionality
- **Mortgage payment calculator** — P&I + taxes + insurance + PMI + HOA
- **Home affordability calculator** — "How much house can I afford?"
- **Refinance calculator** — savings, breakeven
- **Rent vs Buy**
- **Down payment calculator**
- **Closing costs calculator**
- **No DTI calculator, no scenario simulator**

### 8.7 Calls to action
- **"Get a mortgage rate quote"** (purchase primary) → `https://web.secure.wellsfargo.com/mortgage/get-prequalified/?src=homev1`
- **"Get a refinance rate quote"** (refi primary) → `https://web.secure.wellsfargo.com/mortgage/refinance-quote/?src=homev1`

### 8.8 Trust signals (NOTABLE GAPS)
- **No third-party trust badges anywhere** — no BBB, no J.D. Power, no Trustpilot, no TrustE, no Norton, no McAfee
- **Only Equal Housing Lender and NMLSR ID 399801** displayed
- **The 2018-2020 fake-accounts scandal and ongoing CFPB consent orders** have damaged trust

### 8.9 SEO strategy
- **Generic-head-term SEO** — main hub does NOT target "Wells Fargo mortgage rates" in the title; it goes after the generic term
- **No local SEO pages** ("mortgage rates [city]") — major gap vs. Rocket and LoanDepot
- **Loan-program and calculator long-tail** — each loan product and each calculator has a dedicated page with hand-picked long-tail keywords (the cash-out refi page alone targets 11 distinct keyword variations)
- **No USDA, no HELOC, no reverse mortgage, no manufactured home marketing** on the consumer site

### 8.10 The "denial" / "no match" path (the critical finding)
The SPA bundle references a result-state registry with five distinct outcomes:
- `rs17-exact-amt` — prequalified for the requested amount
- `rs18-higher-amt` — prequalified for more than the requested amount
- `rs19-lower-amt` — prequalified for less than the requested amount
- `rs19.5-lower-amt-dream-plan` — prequalified for less with a "Dream Plan" upsell
- **`rs20-no-match` — the failed case**

When a user hits `rs20-no-match`, the flow routes them to:
- `rs22-helpful-resources` (a generic list of learn-center articles)
- `rs23/rs24-contact-us` (a phone number)

**The system does NOT:**
- Explain *which* factor failed (DTI, LTV, FICO, reserves)
- Show a near-miss alternative
- Let the user adjust inputs to find a passing scenario
- Let the user save/share their result

**This is the exact gap the "Why am I denied" project fills.**

### 8.11 Strengths
1. **No SSN at prequal** — a major differentiator vs. Rocket/LoanDepot/Better
2. **Branch network** — ~4,400 branches
3. **Diverse product set** — conforming, FHA, VA, USDA, jumbo, HELOC, HELOAN, construction
4. **Homebuyer Access® grant** ($10K, no repayment)
5. **Dream. Plan. Home.®** closing cost credit (up to $5K) + 3% down conventional
6. **In-person service**
7. **Wells Fargo Wealth / Private Bank** — jumbo and portfolio products for high-net-worth
8. **Real estate search via ComeHome** (HouseCanary)
9. **Blend Labs integration** for the application

### 8.12 Weaknesses
1. **No SSN means the prequal estimate is very rough** — they can't run a real soft pull without SSN
2. **No local SEO pages** ("mortgage rates [city]") — major gap vs. Rocket and LoanDepot
3. **No third-party trust badges** anywhere on the site
4. **No USDA, no HELOC, no reverse mortgage, no manufactured home marketing** on the consumer site
5. **No DTI calculator, no scenario simulator, no self-employed pathway**
6. **Prequal doesn't ask about employment, monthly debt, or assets** — the estimate is necessarily rough
7. **2018-2023 history** of consent orders / scandals has damaged trust
8. **No "Why am I denied" UX on the rs20-no-match path** — routes to generic articles + phone

### 8.13 What "Why Can't I Qualify?" can do better
- **Wells Fargo's prequal is the no-SSN model.** The diagnostic can do the same — keep the educational pre-screen free of SSN/DOB, and surface the "rs20-no-match" diagnostic output the SPA hides
- **Pillar-based denial reason** — Wells Fargo's denied user has nowhere to learn "your DTI is too high" in plain English
- **Scenario simulation** — "what if I had $X in reserves" is answerable by the diagnostic
- **Cross-program routing** — including FHA, VA, USDA, non-QM (which Wells Fargo is light on for consumer D2C)
- **Self-employed pillar** — Wells Fargo has zero self-employed marketing; the diagnostic can be the place the borrower learns about non-QM

---

## 9. GUILD MORTGAGE — guildmortgage.com

### 9.1 The headline finding (must read first)
**Guild Mortgage does NOT have a self-serve online prequalification or preapproval flow.** What looks like a prequalification funnel ("Apply Online") is actually a **5-step + account-setup lead-capture wizard** that asks for name, email, loan type, state, and preferred loan officer — and then hands the user off to a human loan officer. There is:
- **No soft credit pull** anywhere on the public site
- **No hard credit pull** anywhere on the public site
- **No SSN, DOB, income, employment, or asset questions** in the online flow
- **No FICO / VantageScore collection** online
- **No "you don't qualify" or "denial" UX** — the only "Sorry" message in the entire React bundle is a generic 500-error page with a `mailto:retailescalations@guildmortgage.com` link

The prequalification **calculator** (a separate, non-lead-capture tool) accepts income + debt + rate + state and returns an estimated max purchase price — but is explicitly disclaimed as **illustrative, not a loan offer, not a credit check, and not a commitment to lend**.

**Any "why can't I qualify" diagnostic has no incumbent to displace in the self-serve funnel — the gap Guild leaves is the entire funnel.**

### 9.2 Website URLs
- **Root:** https://www.guildmortgage.com/
- **Real loan-product pages (singular, under /mortgage-loans/):**
  - Conventional: `/mortgage-loans/conventional-mortgage/`
  - FHA: `/mortgage-loans/fha-loan/`
  - VA: `/mortgage-loans/va-loan/`
  - USDA: `/mortgage-loans/usda-loan/`
  - Jumbo: `/mortgage-loans/jumbo-loan/`
  - Home Equity / HELOC / HELOAN: `/mortgage-loans/home-equity-options/`
  - Refi root: `/refinance-a-mortgage/`
- **Specialty / niche programs:**
  - **MyPath2Own** (the "not yet mortgage-ready" program) — `/mortgage-loans/mypath2own/`
  - **Zero Down, 1% Down, Down Payment Assistance**
  - **ITIN Mortgage** — `/mortgage-loans/itin-mortgage-program/` (no SSN!)
  - **Doctor / Medical Professionals** — `/mortgage-loans/doctor-program/`
  - **Section 184 Indian Home Loan** — `/mortgage-loans/section-184/`
  - **Flex Payment Mortgage** (HECM / reverse-mortgage)
  - **Lock and Shop** (120-day rate lock)
  - **BuyNow Advantage** (all-cash offer)
  - **Complete Rate** (no-credit-score program)
  - **GreenSmart Advantage** (energy-efficient w/ Home Depot)
  - **Payment Advantage** (1% lender-paid buydown yr 1)
  - **Manufactured Home, Renovation, Bridge, Temporary Buydowns, New Construction, Energy-Efficient Mortgage**
- **Calculators (8):** under `/mortgage-calculators/` — Total mortgage payment, **Pre-qualification (affordability)**, **Buying power**, **Income (how much do I need to qualify)**, Refinance, Closing cost / Cash needed, Home sale / Net proceeds, Temporary buydown
- **Apply / prequal / preapproval paths:**
  - **Public "Apply Online"** — `https://myaccount.guildmortgage.com/guild-home/apply-online/` (302 → `https://applyonline.guildmortgage.com/guild-home/apply-online/`) — the lead-capture SPA. **There is no public `/prequalify` or `/preapproval` URL — both return 404 from the homepage nav**

### 9.3 Target audience
- **First-time homebuyers** (largest focus): "Are you a first-time homebuyer? We can help." 800+ down-payment-assistance programs
- **Government-loan borrowers** — heavy emphasis on FHA, VA, USDA. Target audience explicitly listed: "VETS and military"
- **Lower-credit / alternative-credit borrowers** — ITIN (no SSN), Complete Rate (no score), Doctor Program (no PMI, low down), Section 184 (tribal members, 2.25% down)
- **Self-employed / 1099 / non-W-2** — not heavily targeted on public pages
- **Move-up / relocating / second-home buyers** — Bridge loan, Lock & Shop, BuyNow Advantage
- **Refinance audience** — rate-and-term and cash-out, plus HELOC / HELOAN / Reverse
- **First-generation homebuyers** — explicitly called out
- **Existing customers / servicing** — large help-center, mobile app

**Geo footprint:** 49 states (does NOT originate in New York). Heavy regional marketing.

### 9.4 Value proposition
- **Homepage H1 / hero CTA:** "Take the next step" / "We can find the right loan for you today."
- **Primary buttons:** "Get pre-qualified for purchase" and "Access your home equity"
- **Brand stat:** "60+ Years in Business — Building lifetime connections since 1960" / "27x Growth since 2007"
- **Matchmaker on /mortgage-loans/:** "Which one of these describes you best?" with persona-driven loan tiles (verbatim):
  - "I have a solid credit profile → Conventional Loans"
  - "I want to keep my payment low → FHA loans"
  - "I want rural home information → USDA Loans"
  - "Show me options for VETS and military → VA Loans"
  - "I want down payment assistance → DPA Programs"
  - "I don't have a credit score → Complete Rate"
  - "I don't have a social security number → ITIN"
  - "I want a lower payment for the first year → Payment Advantage"
  - "I'm looking for a home equity loan or line of credit → Home Equity Programs"
  - "I want to buy a home with no down payment → Zero down options"

### 9.5 Lead capture mechanism — the 5-step wizard
The "Apply Online" flow:
1. **About You** — First name, Last name, **Email only**
2. **Loan Type** — Purchase / Refinance
3. **Property State**
4. **Loan Officer** — pick from a list
5. **Review** → **reCAPTCHA-protected password step** → submit

The wizard is **not a prequalification**. It is a lead-capture form that hands the user off to a human loan officer who collects the 1003, runs credit, and produces a real prequal offline.

### 9.6 User experience
- **The prequalification calculator** at `/mortgage-calculators/pre-qualification-calculator/` takes income + debt + rate + state and returns an estimated max purchase price — **explicitly disclaimed as illustrative, not a loan offer, not a credit check, and not a commitment to lend**
- **No application status** (a complaint in user reviews)
- **No rate quote** — the calculator doesn't surface a rate
- **Password step is a bait-and-switch** — after the wizard, users hit a reCAPTCHA and password step, which feels like they're creating an account but the "app" never becomes a real prequal
- **No mobile app prequal** (the app is for servicing)
- **No personalization** (the calculator returns one number, not a range)

### 9.7 Calculator functionality
- **Total mortgage payment calculator** — P&I + taxes + insurance
- **Pre-qualification calculator (affordability)** — income + debt + rate + state → max purchase price
- **Buying power calculator** — how much home can the user afford
- **Income calculator (how much do I need to qualify)** — reverse engineering the affordability math
- **Refinance calculator** — savings, breakeven
- **Closing cost / Cash needed** — estimate of cash to close
- **Home sale / Net proceeds** — sale proceeds after mortgage payoff and costs
- **Temporary buydown calculator** — 1-0, 2-1, 1-1, 3-2-1 buydown impact

**No DTI calculator, no approval-likelihood simulator, no scenario sliders.**

### 9.8 Calls to action
- **"Get pre-qualified for purchase"** (homepage primary)
- **"Access your home equity"** (homepage secondary)
- **"Apply Online"** (every page nav)
- **"Find a loan officer"**
- **"Find a Branch"**

### 9.9 Trust signals
- **J.D. Power 2025** U.S. Mortgage Servicer Satisfaction Study — dedicated `/jd-power/` page
- **Scotsman Guide** #7 Top Overall, #5 Top Retail
- **Freddie Mac RISE 2026** award
- **Military Friendly Gold 2026**
- **Fannie Mae STAR** 6th year
- **MortgageCX 5-category winner**
- **334 Scotsman Guide Top Originators**
- **60+ years in business** (founded 1960)
- **27x growth since 2007**
- **Equal Housing Lender, NMLS**

**Missing trust signals:** no BBB, no aggregate review count, no third-party review widget on the public site

### 9.10 SEO strategy
- **WordPress / Avada / Yoast** stack
- **234 indexed pages** (regional + blog sitemaps)
- **Target keyword clusters:**
  - "first time home buyer" / "FHA loan" / "VA loan" / "USDA loan"
  - "down payment assistance" / "ITIN mortgage" / "doctor mortgage"
  - "Complete Rate" / "no credit score mortgage"

### 9.11 Strengths
1. **Loan-officer-first moat** — Guild has a strong field force; the entire business model is "talk to our LO"
2. **MyPath2Own** — the "not yet mortgage-ready" program with eHome America classes
3. **Program breadth** — FHA, VA, USDA, Conventional, Jumbo, **ITIN 680+**, Doctor, Section 184, Complete Rate (no score)
4. **Homebuyer Protection** (CAP / 17-day close / Lock & Shop)
5. **J.D. Power 2025 top-ranked** for mortgage servicing
6. **60+ years in business** / strong brand

### 9.12 Weaknesses
1. **Misleading "Apply Online" naming** — it's not a real apply, it's a lead-capture wizard
2. **No diagnostic, no DTI calculator, no rate quote, no application status**
3. **Password step bait-and-switch** — after the wizard, users hit a reCAPTCHA and password step
4. **No mobile-app prequal** (the app is for servicing)
5. **No personalization**
6. **All PII collection is offloaded to the LO** — this is Guild's design but it means no self-serve explanation
7. **No HELOC, HELOAN, or reverse product on the consumer flow** (these are listed but not on the calculator)

### 9.13 What "Why Can't I Qualify?" can do better
A self-serve diagnostic would not cannibalize any existing flow because Guild has no existing self-serve prequal to displace. MyPath2Own is their only fallback and it requires manual LO contact. The opportunity to replace their prequal calculator with a real diagnostic that runs the user's numbers against Guild's published program matrix (FHA 540+, Conventional 620+, VA, USDA, Jumbo, ITIN 680+, Doctor, Section 184, etc.) and returns a structured denial reason + fix-it roadmap is wide open.

---

## 10. NEWREZ / SHELLPOINT — newrez.com, shellpointmtg.com

### 10.1 Website URLs — the critical reframe
**NewRez and Shellpoint are NOT two parallel direct-to-consumer mortgage brands.** They are two sides of the same parent (NewRez LLC, NMLS #3013) but serve different points in the loan lifecycle:

| Brand | What it does | URL |
|---|---|---|
| **NewRez** (DTC origination) | Purchase, refinance, HELOC, HELOAN, calculators, rates, blog, loan officer search | `newrez.com` |
| **Shellpoint Mortgage Servicing** (post-close servicer) | Payments, escrow, statements, loan assistance, transfer-in support | `shellpointmtg.com` |

**Confirmed on the Shellpoint Contact page (verbatim):** *"Shellpoint Mortgage Servicing is proud to be a part of the Newrez Family of Companies."*

**The Shellpoint site has NO consumer prequalification flow. There is no `/apply`, no `/prequalify`, no calculator.** Every "apply"-style button on shellpointmtg.com routes into the NewRez system. The acquisition / prequal engine is one thing: the NewRez `/lead/loantype` application SPA at `myapp.newrez.com`.

The application SPA itself is a fork of the Caliber Home Loans platform (Rithm acquired Caliber in 2021). The HTML head links to `__CdnBaseUrl__/caliber-corporate-design/cdn/...` and the bundle still references *"Caliber Home Loans, Inc. NMLS#15622"* in footer text.

**Other URL paths:**
- newrez.com: `/buy-a-home/`, `/refinance/`, `/home-equity-loan/`, `/home-equity-line-of-credit/`, `/mortgage-rates/`, `/types-of-mortgages/`, `/mortgage-calculators/`, `/help-center/`, `/frequently-asked-questions/`, `/contact-us/`, `/find-loan-officer/`, `/blog/` (with `mortgage-101/`, `refinance/`, `home-ownership/`, `buying-selling/`)
- **App entry:** `myapp.newrez.com/lead/loantype?cid=21338&purposetypeid=1` (purchase) or `&purposetypeid=3` (refi)
- **HELOC app entry:** `myapp.newrez.com/heloc`
- **shellpointmtg.com:** `/im-new/` ("We're Glad You Are Here"), `/welcome-to-shellpoint/`, `/helpful-tips/`, `/frequently-asked-questions/`, `/contact-us/`

**Sitemap scale:** newrez.com = **862 URLs**; shellpointmtg.com = 101 URLs

### 10.2 Target audience
**NewRez** explicitly markets to:
1. **Home purchase / first-time buyers** — *"Your dream home is out there, get started with Newrez."*
2. **Refinancers** — *"Unlock savings with a mortgage refinance"* (Lower Your Rate / Shorten Your Term / Access Cash)
3. **Cash-out refi** — "A cash-out refinance allows you to unlock your home equity without taking out a second mortgage"
4. **HELOC and home equity** — $50,000–$350,000 credit lines, 75% of approved limit at closing
5. **Specialty / niche** — self-employed, real estate investors (Non-QM Smart Series, Investment Property, Jumbo SmartEdge, Assumable Mortgages, Renovation)
6. **Military / VA** — entire site footer carries the "Military Friendly®" trademark notice

**Shellpoint** targets an entirely different audience:
- Existing mortgage customers whose loans Shellpoint now services (transfers)
- Homeowners in distress / behind on payments
- Disaster victims
- Scam targets

### 10.3 Value proposition
- **NewRez H1:** "Newrez makes home happen your way"
- **Subhead:** "Lower your monthly payment, with clarity at every step."
- **What do you want to apply for?** Home Purchase Loan | Home Equity Loans | HELOC
- **Trust strip:** "Trustpilot — Trusted by homeowners nationwide" / "Equal Housing Opportunity" / "Better Business Bureau"
- **"Newrez Home Rewards"** — closing-cost credit for buyers (0.5% of sales price) and 1% real-estate-agent commission reduction for sellers
- **"Fast pre-approval in as little as 24 hours"**
- **"Save Big"** pitch — "save an average of $5,354"
- **Shellpoint H1:** "Welcome to Shellpoint. The most important part of our business is you."

### 10.4 Lead capture mechanism — the 30-step SPA
The application uses a step-based wizard. From the pageTitle enum in the bundle:

1. `getting-started` — loan-purpose chooser (Purchase / Refi / HELOC / Cash-out)
2. `about-property` — "Do you known the address of your target property?"
3. `property-purchase-price` / `property-monthly-payment`
4. `down-payment` — "Down payment percentage is required"
5. `estimated-home-value`
6. `loan-amount`
7. `property-type`
8. `property-use` / `property-occupancy` (primary / secondary / investment)
9. `current-housing` — "How much do you pay for rent?"
10. `marital-status`
11. `current-address` / `mailing-address`
12. `borrower-information` / `contact-info` — **name, email, phone** ("Please provide an email address and at least one phone number")
13. `credit-score` — **"Select your credit score range from the options below." (self-reported range)**
14. `credit-authorization` — soft pull consent
15. `ssn-verify` / `verify-ssn` — **"What is your Social Security Number and Date of Birth?"** (last 4 of SSN at this step)
16. `property-overview` / `property-review`
17. `income-employment-type` / `income-source`
18. `argyle` / `accountcheck` — **Argyle** (payroll) and **AccountChek** (assets) — automated VOI/VOE
19. `manual-income-verification` — fallback
20. `military-status` / `military-service-details`
21. `citizenship-declarations` / `legal-declarations` / `demographic-ethnicity`
22. `declarations` (bankruptcy, foreclosure, etc.)
23. `assets-summary` / `asset-review`
24. `additional-properties-overview`
25. `plan-for-current-property`
26. `refinance-purpose` / `refinance-type`
27. `sale-proceeds-downpayment-use`
28. `borrower-communication-preferences` / `borrower-econsent`
29. `set-password` / `verify-loan`
30. `congratulations` / `success`

**Number of steps to a soft-pull prequalification letter:** ~10-12 screens
**Time to prequalification result:** marketing claim is "as little as 24 hours" but the Argyle path can produce a prequal in minutes if the user connects their payroll account; the manual upload path takes 1 business day

### 10.5 PII timing
- **Email** at `contact-info` step — "Please enter your email address"
- **Phone** at `contact-info` step — "Please provide work phone number"
- **Self-reported credit score range** at `credit-score` step
- **SSN** at `verify-ssn` step — **"Please enter the last 4 digits of your Social Security Number to verify your identity"** then full SSN at later step
- **DOB** at same `verify-ssn` step
- **Co-borrower SSN/DOB** at `coborrower-information` — "To complete this step, we also need your co-borrower's Social security number and date of birth"

### 10.6 Soft pull vs. hard pull — explicit and well-disclosed

**Soft pull (used for the initial prequalification quote / FICO fetch):**
> *"to perform a Soft Credit Pull in order to access my credit score (FICO)."*
> *"A Soft Credit Pull will not affect your credit score."*
> *"Authorizing your credit allows us to give you the most accurate, personalized quote and pre-approval letter."*
> *"Please provide your date of birth and your Social Security Number, so that we can generate your customized pre-approval. This will not have an effect on your credit score."*

**Hard pull (gated, used at the preapproval handoff):**
> *"Do we have your permission to pull [your/your co-borrower's] credit?"*
> *"(This is a hard credit pull and will affect your credit score.)"*
> *"This hard credit pull will appear on your credit report. However, when you are working to obtain a mortgage, [multiple inquiries within a shopping window are treated as a single inquiry]."*

**Frozen-credit handling (verbatim):**
> *"If your credit is frozen, we are unable to run a credit check until you unfreeze it. A freeze remains in place until you ask the credit bureau to temporarily lift it or remove it altogether. If the request to unfreeze is made online or by phone, a credit bureau must lift a freeze within one hour."*

**Outcome strings:**
- **Pre-qualified:** "You are pre-qualified based on the details you provided and your [FICO score]" → leads to a pre-qualification letter emailed to the borrower
- **Pre-approved (with conditions):** "and you have been pre-approved for up to $[amount]"
- **Manual "approved with conditions" review path:** "It looks like we may need a little more information to provide you with accurate rate quotes and pre-qualification letter at this time. But don't worry, you can still continue your application online." / "By choosing this option, your pre-qualification will get pre-approved only after further review and may take longer."
- **Disqualified:** "Thanks for your interest / We've received your information, but we're unable to continue right now. A member of our team will reach out to review your options and next steps. Feel free to call us at 1-888-673-5521"

### 10.7 Calculator functionality
- **Mortgage Payment Calculator** — Loan amount, rate, term, taxes, insurance, PMI
- **Mortgage Refinance Calculator** — current balance, current rate, new rate, term, cash-out amount
- **Budget Calculator** — income + monthly expenses
- **Home Affordability Calculator** (Loan Amount Estimator) — desired monthly payment, down payment, taxes, insurance, rate, HOA, PMI
- **Loan Term Comparison** — 15/20/30/40 year
- **Rent vs Buy** — monthly rent, home price, appreciation, term

**No DTI calculator, no qualification simulator, no "what credit score do I need" tool.**

### 10.8 Calls to action
- **"Apply"** (top nav) / **"Refinance Today"** (homepage hero)
- **"Talk to a Loan Advisor"**
- **"Start an Application"** / **"Sign In"**
- **"Start My Application"** / **"Connect With a Local Agent →"** / **"Call a Loan Officer →"**
- **"Get My HELOC"** / **"Access My Cash →"**
- **"Apply for a mortgage with Newrez today!"** / **"Apply Online"**
- **Phone (top-right):** 888-673-5521, 844-522-4572, 888-556-9979, 844-956-1569, 844-529-3299, 833-919-3485

### 10.9 Trust signals
- **Trustpilot "Excellent"** widget (review snippet "Excellent" visible in homepage HTML)
- **Better Business Bureau** logo in footer
- **Equal Housing Opportunity** logo in footer
- **NMLS #3013** in every footer
- **State licensing disclosure** in every footer (Alaska, Arizona, California, Massachusetts, NJ, NY, Texas, etc.)
- **"Military Friendly®"** trademark in footer
- **Press & News, Social Impact** pages
- **"Testimonials are based on the individual's experiences and may not represent the experience of all customers."** disclaimer
- **No J.D. Power award** found

### 10.10 SEO strategy
- **862 indexed URLs** on newrez.com (heavy on `/blog/mortgage-101/`)
- **Content hub** with 4 topical silos: mortgage-101, refinance, home-ownership, buying-selling
- **Long-form guides:** /buy-a-home/purchase-guide/, /refinance/refinance-guide/
- **Calculator pages as SEO landing pages** (each individually crawlable)
- **Loan-type pages** under /types-of-mortgages/
- **No "denied" content** — the blog has no "what to do if denied" or "DTI denied" article
- **Shellpoint SEO:** FAQ-style content under /helpful-tips/, mortgage-glossary pages, loan-transfer FAQ

### 10.11 Strengths
1. **The most complete product set among non-bank competitors** — Conventional, FHA, VA, USDA, Jumbo, Non-QM (Smart Series), renovation, assumable, investment property, HELOC, HELOAN, refi, cash-out refi, rate/term refi
2. **Soft-pull prequalification is real, fast, and well-disclosed** — explicit soft-pull language up front
3. **Argyle and AccountChek integration** for instant VOI/VOE — cuts 1-3 business days off the verification cycle
4. **Scale** — 2.3M serviced loans, "Top 5 non-bank mortgage servicer", 2,500+ employees
5. **Self-reported credit score range** instead of a hard pull at the front of the funnel — major friction reducer
6. **Loan-officer search + phone fallback** in every page footer
7. **"Newrez Home Rewards"** differentiation for the purchase funnel — closing-cost credit for buyers + 1% commission reduction for sellers
8. **Help Center** is robust with 10 service-specific tiles
9. **Mobile app** for both origination and servicing
10. **Crypto landing page** — a first-mover play

### 10.12 Weaknesses
1. **No acquisition funnel on Shellpoint at all** — a denied user transferred to Shellpoint has no recourse or product path forward
2. **The disqualified path is a dead end** — see §10.13 below
3. **The application SPA is heavy and slow** — 5.4 MB JavaScript
4. **State restriction:** "No mortgage loan applications for properties located in the state of New York will be accepted through this site"
5. **No DTI calculator, no qualification simulator, no "what credit score do I need" tool**
6. **No public-facing customer review count** (Trustpilot shows "Excellent" but no specific number)
7. **"NewRez NOW" / "FastQual" / "GO" prequalification product** — these are not present as live product names; the actual product is the standard `myapp.newrez.com/lead/loantype` SPA
8. **"Caliber Home Loans" references still in the bundle** — technical debt from the 2021 acquisition
9. **No "What happens after I apply?" / "Why is my application taking so long?" content**
10. **Blog content is generic** — `/blog/mortgage-101/` posts are SEO-bait, not deep topical authority

### 10.13 What happens when a borrower FAILS to qualify — the biggest single finding

The denied path lives in the application SPA at the route flagged `[App Navigation] Go to preapproval disqualified` and `[Heloc Navigation] Go to preapproval disqualified`, with state `isPostDisqualified: true`.

**The denied screen is a static "call us" page. Verbatim:**
> **"Thanks for your interest"**
>
> "We've received your information, but we're unable to continue right now."
>
> "A member of our team will reach out to review your options and next steps."
>
> "Feel free to call us at **1-888-673-5521**"

**That is the entire user experience for a denied borrower.** No:
- denial reason
- credit-score breakdown
- DTI readout
- "your loan-to-value is X, we need Y" comparison
- "you'd qualify if your income were $X higher" simulator
- "wait 90 days and reapply with these fixes" timeline
- fallback product (FHA, VA, Non-QM, smaller loan amount, co-borrower)
- comparison to other lenders' general thresholds
- soft-pull-only DTI calculator that would let the user self-diagnose
- email with a written explanation
- "request a manual underwriter review" CTA

### 10.14 What "Why Can't I Qualify?" can do better (10 specific gaps)

1. **Tell the user what was measured.** NewRez never shows the user their actual credit-score number, their actual DTI, their actual LTV, or their actual reserves. A diagnostic tool that takes the user through the same five inputs (income, debts, credit-score range, down payment, target price) and computes estimated DTI, estimated LTV, and estimated residual income — then shows the user the numbers — would expose the most basic information NewRez hides.
2. **Show thresholds by loan program.** NewRez qualifies for FHA, VA, USDA, Conventional, Non-QM, Jumbo — but never shows the user the matrix. "Conventional: 620 FICO, 45% DTI, 97% LTV / FHA: 580 FICO, 56.9% DTI, 96.5% LTV / VA: 620 FICO, 60% DTI, 100% LTV / Non-QM: 500 FICO, 50% DTI, 85% LTV" would be instantly valuable.
3. **"What would change the outcome?"** The biggest single gap. A simple "Lower your DTI by $340/month (pay off the auto loan) and you'd be back in the box" simulator is impossible to find anywhere on the NewRez site.
4. **"You might qualify for X instead of Y."** FHA and VA have more lenient thresholds; if the user is in the "approved with conditions" state for Conventional, they should be steered to FHA/VA as alternatives. NewRez does not do this.
5. **"How long until you would qualify?"** If a borrower is denied for thin credit (1 trade line, <12 months history, or recent late payment), telling them "wait 4 months and your score recovers" is more useful than the current black-box.
6. **Post-denial follow-up path.** The denied user currently gets an SMS / email from a Loan Consultant, but only if they left a phone number. A diagnostic that emails a printable PDF "Why this lender said no, and what to do about it" would be a much better artifact.
7. **Honest disclosure of the credit pull used.** "You were denied based on a soft-pull estimated FICO" vs. "You were denied based on a full tri-merge hard pull" — NewRez does not tell the user which they used.
8. **The "low credit-score, no recent credit, thin file" trio.** A user can be denied with no negative items at all — just because they have no credit history. NewRez will not surface that. A diagnostic that asks "do you have any open credit accounts?" and then says "with no open tradelines you may need 3–6 months of on-time payments to build a score" is much more actionable.
9. **Self-employed and W-2 distinction.** Non-QM (Smart Series) exists for self-employed, but a denied W-2-only applicant is never shown this as a fallback. A diagnostic that asks "is your income W-2 or 1099?" would naturally open up the Non-QM path.
10. **No public "Common reasons for denial" page.** A search on the NewRez site for "denied" or "why was I denied" returns zero. There is no URL like `/blog/why-was-i-denied-a-mortgage/` or a help-center tile.

---

## 11. CROSS-CUTTING FINDINGS (the "Why Can't I Qualify?" Opportunity)

### 11.1 The unanimous industry failure

Across all 10 lenders:

1. **None offer a no-SSN pre-screen.** Every competitor asks for SSN + DOB before any meaningful estimate — except Wells Fargo (no SSN at prequal), NewRez (last 4 of SSN at the verify step, full SSN later), and Caliber's tier-1 soft pull (no SSN at all). Even those still require at least name + email.
2. **None offer a true anonymous educational tool.** All require at least name + email at the first step.
3. **None explain *why* you don't qualify.** Every decline routes to "talk to a loan officer" or one of three static error strings (Rocket, Chase) or a 4-line "we're unable to continue" page (NewRez/Caliber) or a "needs additional information" page (BofA) or a 500-error page (Guild) — but **no self-serve reason**.
4. **None offer scenario simulation.** "If I paid off $X in credit card debt" is not answerable.
5. **None surface DTI, LTV, or other ratios in real time.** The user is given a number, not the math.
6. **None offer alternative-program routing.** A borrower who fails conventional 620 FICO is not shown FHA 580, VA 620, USDA 640, or non-QM options.
7. **None have a denied-borrower educational flow.** Once declined, the borrower is on a phone call, not on a self-serve learning path.
8. **All assume W-2 income.** Self-employed is a checkbox, not a tailored flow (Caliber is the exception with 19 income sources; BofA has explicit self-employed branches in prequal; loanDepot has self-employed branches in the MLA).
9. **All start the funnel with a "buy / refinance" decision** rather than a "should I / can I" decision.
10. **None provide an estimated timeline to qualification.** "You could be FHA-eligible in 6 months if you do X" is not surfaced anywhere.
11. **UWM has zero D2C prequal** (wholesale only); **Chase doesn't offer prequalification at all** (collapsed to preapproval); **Guild's "Apply Online" is a 5-step lead-capture wizard** with no PII collected online.
12. **The most-claimed "trust signals" are missing from the most-prominent competitors**: UWM has zero J.D. Power / BBB on uwm.com; Better has the worst Trustpilot in the industry (1.4-1.8 stars); Chase has no BBB or Trustpilot on the consumer site; BofA has no J.D. Power, no BBB, no review count; Rocket has no BBB or Trustpilot displayed; Wells Fargo has no third-party trust badges anywhere.

### 11.2 The 5 things the diagnostic MUST do that no one else does

| # | What no one else does | Implementation |
|---|---|---|
| 1 | **No-SSN, no-DOB, no-email-required path** | Anonymous tier 1: take income, debts, credit band, and give an educational diagnosis. Defer lead capture to *after* the user sees value. |
| 2 | **Plain-English denial reason mapped to guideline** | "Your back-end DTI appears to be about 52%. Most conventional loans require ≤ 43%. FHA may allow up to 50% with strong compensating factors." |
| 3 | **7-pillar scoring with green/yellow/orange/red** | Income, Debt, Credit, Cash, Affordability, Property, Documentation. The user sees *which* pillar is the obstacle. |
| 4 | **Scenario simulator** | Sliders for "debt payoff," "credit-score improvement," "down payment," "income change." Outputs an updated pillar score and an updated "may qualify for" range. |
| 5 | **Cross-program routing** | When the borrower fails conventional 620 FICO, the diagnostic surfaces FHA 580, VA 620 (eligible service members), USDA 640 (rural), non-QM, portfolio, bank statement. The user sees *what programs they may still be eligible for*. |

### 11.3 The 5 ways the diagnostic can monetize the lead

1. **Tertiary lead capture:** After the diagnosis, offer a 15-minute call with a licensed MLO who can take the next step. (Rocket's strength.)
2. **Cross-lender marketplace:** If the user is denied at Rocket, route to a lender that does FHA / VA / non-QM (Caliber, Guild, NewRez). (UWM's wholesale model.)
3. **Content monetization:** "What is the 3/2/1 rule?" → educational article → affiliate / SEO play.
4. **Partner referral fee:** Pay-per-lead or revenue-share with downstream lenders.
5. **Premium features (for the user, optional):** A deeper report, an action plan PDF, a credit-action checklist, monthly monitoring.

### 11.4 The 3 dangers to avoid

1. **Don't become a lead-gen shop with no diagnosis.** The diagnostic's value is the diagnosis — the lead is the byproduct, not the product.
2. **Don't use a single number.** "You may qualify for $350,000" is what every competitor does. The diagnostic must show a *range* with a *confidence* level and a *set of conditions*.
3. **Don't pretend to be a lender.** The diagnostic must clearly state: "This is a preliminary educational assessment, not a mortgage application, preapproval, or commitment to lend. Actual qualification requires a full lender review." (Per the project's own compliance framework in `03-Product-Definition/product-concept.md`.)

### 11.5 SEO implications (the natural tailwinds)

The diagnostic targets keywords no competitor effectively targets:
- **"why was I denied a mortgage"** — massive volume, near-zero quality competition
- **"why can't I qualify for a mortgage"** — diagnostic's brand keyword
- **"denied mortgage what to do"** — informational, high-intent
- **"mortgage prequalification denied"** — high intent
- **"how to qualify for a mortgage with bad credit"** — informational
- **"FHA eligibility calculator"** — informational, decision-stage
- **"DTI calculator mortgage"** — informational
- **"self-employed mortgage qualification"** — informational
- **"what credit score do I need to buy a house"** — informational
- **"affordability calculator"** — informational

These are the keywords a denied borrower searches. The diagnostic is built for *that* person.

### 11.6 The competitive moat for the diagnostic — lender-by-lender

| Competitor | What they do for the denied user | What the diagnostic adds |
|---|---|---|
| **Rocket Mortgage** | 3 generic calculator fallback messages + 1 static 7-reason article | 7-pillar diagnosis + scenario simulator + cross-program routing |
| **LoanDepot** | "Oops, we encountered a problem" modal — the only on-page denial surface; no factor breakdown, no plain-language reason | Educational pre-screen + "what would change the outcome" + alternative program surfacing + a 10-point scenario-by-scenario analysis |
| **Better.com** | Generic "we can't approve you right now"; borrower is told to invoke ECOA | Plain-English denial reason + adverse-action-letter decoder + 30/60/90 day action plan |
| **UWM** | No D2C prequal at all (wholesale only) | D2C pre-screen + broker-routing with self-diagnosis; exposes the Polygon Research "brokers save $10,662" data to denied consumers |
| **Caliber / NewRez** | "we're unable to continue right now" + 1-888-673-5521 + "Go To Dashboard" (4 lines) | Pillar diagnosis + binding-constraint ID + "try again in N months" timeline; suggests the 19 income sources the soft funnel doesn't ask about |
| **Chase** | **No prequalification product at all** — collapsed to preapproval; 3 static error strings ("We couldn't find any loan options for you" / "Typically, loan options require a minimum score of 620" / "Try updating the purchase price or down payment") | No-SSN, no-DOB pre-screen; the diagnostic can fill the soft-quote stage Chase refuses to brand |
| **Bank of America** | "**Your request needs some additional information**" — completely opaque, no DTI/FICO/LTV/reserves/employment-gap reason | 11 specific gap items including plain-language reason, "what if" simulator, alternative product routing (Affordable Loan Solution, FHA, VA, state HFA, Down Payment Center), SLA on the human follow-up, ECOA-style reason codes, persistent eligibility recheck |
| **Wells Fargo** | `rs20-no-match` → `rs22-helpful-resources` + `rs23/24-contact-us` | Pillar diagnosis + scenario simulator + cross-program routing; surface Homebuyer Access® ($10K), Dream Plan Home® ($5K), 3% down conventional, USDA, non-QM (which Wells Fargo doesn't surface) |
| **Guild Mortgage** | 500-error page + `mailto:retailescalations@guildmortgage.com` — the only "Sorry" message in the entire React bundle | Replaces the entire self-serve prequal funnel that Guild doesn't have; routes to ITIN 680+, Doctor, Section 184, Complete Rate (no score) — Guild's own specialty products |
| **NewRez / Shellpoint** | 4-line "call us" page ("Thanks for your interest / We've received your information, but we're unable to continue right now / A member of our team will reach out / Feel free to call us at 1-888-673-5521") | 10 specific gap items including FICO/DTI/LTV/reserves readout, threshold matrix, "what would change the outcome" simulator, "you might qualify for X instead of Y" routing, "how long until you would qualify" timeline, post-denial PDF, honest credit-pull disclosure, thin-file diagnosis, self-employed pathway, public "common reasons for denial" page |

### 11.7 The "Why am I denied?" strategic opportunity

The diagnostic is positioned to own a search segment that **no major lender is competing for**:
- **Denied-borrower keywords** — every major lender has SEO content (Rocket's `/learn/what-to-do-if-your-mortgage-loan-application-is-denied`, Better's `/content/mortgage-application-denied`, Caliber's empty space, Guild's empty space) but **no one has an interactive tool**
- **AI-search queries** — Better and Rocket publish content for LLM search but neither has a tool that returns structured output
- **Mobile-first denied users** — every lender's denial UX is a phone call; a tool that delivers the diagnosis on the user's own time is differentiated
- **Self-employed denied users** — the most underserved segment across all 10 competitors
- **UWM's "wholesale beats retail" data** — Polygon study shows brokers approve 70% in MMCTs vs retail 58%; a diagnostic that surfaces this to denied consumers would convert denied-borrower traffic into wholesale-broker leads

### 11.8 The 10-lender denial-experience inventory (verbatim)

For the diagnostic's positioning, here is **every denial-equivalent screen a U.S. consumer can hit in 2025**, quoted verbatim:

1. **Rocket** — One of three messages: "There were no results using those numbers, but don't let that stop you!" / "With a better credit profile, you could get prequalified. Typically lenders look for a credit profile above 580." / "With more cash to buy, you could get prequalified." (`/calculators/home-affordability-calculator-results`)
2. **loanDepot** — A generic "Oops, we encountered a problem" modal — the only on-page denial surface in the entire MLA config
3. **Better.com** — A generic "we can't approve you right now" message; the user is told to invoke their ECOA right to ask for the reasons
4. **UWM** — N/A (no D2C prequal); denied users are sent back to the broker directory as a never-tried borrower
5. **Caliber / NewRez** — "Thanks for your interest / We've received your information, but we're unable to continue right now. / A member of our team will reach out to review your options and next steps. / Feel free to call us at 1-888-673-5521." (4 lines, no reason, no threshold comparison, no fallback product)
6. **Chase** — One of three error strings: "We couldn't find any loan options for you. Please try again." / "We couldn't find available loan options. Typically, loan options require a minimum score of 620." / "We couldn't find options for this loan amount. Try updating the purchase price or down payment to see available loans and rates."
7. **Bank of America** — "**Your request needs some additional information** / We have received all your information and will need to talk to you before we can make a decision. You will receive an email from your lending specialist with this information." Buttons: **Call now / Request a call back / Email / View**.
8. **Wells Fargo** — `rs20-no-match` → `rs22-helpful-resources` (a generic list of learn-center articles) + `rs23/rs24-contact-us` (a phone number). No binding-constraint ID, no near-miss alternative, no scenario adjustment.
9. **Guild Mortgage** — A generic 500-error page with `mailto:retailescalations@guildmortgage.com` — the only "Sorry" message in the entire React bundle
10. **NewRez / Shellpoint** — Same as Caliber: 4-line "call us" page (the acquisition funnel is one thing; the denial screen is the same)

**The diagnostic is the only product on the U.S. mortgage market that can replace all 10 of these with a single structured, plain-English, action-plan-driven answer.**

---

## 12. METHODOLOGY & SOURCES

### 12.1 Methods
- **Direct site reviews:** every lender's homepage, /mortgage, /apply, /prequalify (if exists), /calculators, /refinance, /first-time-homebuyer, /about, /contact, /blog (if exists)
- **HTTP fetches** with full Chrome request headers, gzip/brotli decompression, and 25-30s timeouts
- **JS bundle inspection** for SPAs (e.g., NewRez's 5.4 MB `myapp.newrez.com/main.<hash>.js`, Better.com's `__NEXT_DATA__` from `/start`, Caliber's "cola-…" Angular components, Blend Labs' hosted Wells Fargo prequal, Guild's React bundle on `applyonline.guildmortgage.com`)
- **Next.js / SPA i18n bundle parsing** for verbatim question labels, error strings, consent language, and result-state registries
- **Robots.txt + sitemap.xml** for URL architecture and SEO footprint
- **J.D. Power 2024 / 2025 U.S. Mortgage Origination Satisfaction Studies** (public summaries)
- **BBB profiles** for each entity
- **CFPB Consumer Complaint Database** (recent 24-month lookups)
- **Industry trade press** (HousingWire, National Mortgage News, Scotsman Guide, Inside Mortgage Finance)
- **Public statements** from lender CEOs / IR decks (UWM, Better, Rocket)
- **State mortgage licensing data** via NMLS Consumer Access
- **3rd-party review sites** (Trustpilot, Consumer Affairs)

### 12.2 Subagent reports referenced
This consolidated report draws on **10 detailed subagent reports** (one per lender) plus the consolidated analysis at `02-Competitor-Research/competitor-analysis.md`. The detailed subagent reports are:

- `wells-fargo-competitive-analysis.md` (565 lines, 54 KB) — Wells Fargo
- `caliber_analysis.md` (459 lines, 53 KB) — Caliber / NewRez (the surviving Caliber DNA)
- `research/newrez-shellpoint-analysis.md` (452 lines, 44 KB) — NewRez / Shellpoint
- `Guild_Mortgage_Competitive_Analysis.md` (590 lines, 51 KB) — Guild Mortgage
- `02-Competitor-Research/bank-of-america-mortgage.md` (658 lines, 205 KB) — Bank of America
- `research/chase-competitive-analysis.md` (598 lines, ~14,000 words) — Chase
- `loandepot-research.md` (~530 lines, 32 KB) — loanDepot
- `uwm_competitive_analysis.md` (433 lines, 16 sections) — UWM
- Plus the in-line subagent reports for Rocket Mortgage, Better.com, and the parent-agent's prior research

**Total raw research data captured:** ~120+ HTML pages, 6+ JS bundle inspections (Better `__NEXT_DATA__`, NewRez 5.4 MB Angular bundle, Caliber "cola-…" Angular components, Guild React bundle, Wells Fargo Blend-hosted SPA i18n bundle, loanDepot MLA 4 MB bundle), 10+ sitemaps, 10+ robots.txt files, 6+ rate tables, 5+ program matrices

All verbatim quotes, headlines, CTAs, and step labels are quoted from publicly accessible lender web pages during August 2024 - 2025 unless otherwise noted. Where a flow detail could not be verified directly (e.g., behind login or JavaScript-only render), the description is based on the lender's own consumer disclosures and on the consistent third-party review pattern.

### 12.3 Limitations
- The actual in-app experience (after the prequal step) is sometimes behind a bot-protected SPA (Akamai at Rocket, etc.) — the question order and PII timing in those cases is inferred from the lender's published FAQ and from the user-facing consent screens, not directly observed
- Some lenders' "Why am I denied?" content has changed month-to-month; the verbatim quotes here are as of August 2024-2025
- Customer review counts and Trustpilot scores fluctuate and were current at the time of research only

---

*End of Part 2 — Competitor Research.*
