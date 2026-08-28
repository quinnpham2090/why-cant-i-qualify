# U.S. Fintech Mortgage Qualification Tools — Consolidated Competitive Analysis

**Project:** "Why am I denied" diagnostic tool
**Date:** August 2026
**Researchers:** 10 parallel subagents, all evidence-based (direct HTTP fetch of live production sites; `__NEXT_DATA__`, JS bundle, and sitemap inspection where the funnel is a SPA; Wayback CDX where the site is dead)
**Method note:** `web_search` returned an auth error in this session, so every finding below comes from the production HTML/JS the lenders actually serve, not from a search snippet.

---

## 0. Executive Summary

Across all 10 lenders studied, **not one of them has a real "why can't I qualify?" diagnostic**. The patterns observed, from best to worst:

| Tier | Lenders | What they offer for the denied borrower |
|---|---|---|
| **1. Has actual denial screens with some specificity** | **Tomo** | 3 named denial screens (`DTIEligibilityRed`, `AssetsEligibilityRed`, `CreditError`) — but no guideline citation, no scenario, no alt-program routing. |
| **2. Soft-pull prequal works well, but the denial moment is a single sentence** | **Better.com**, **SoFi**, **Figure** | A real soft-pull prequal → then "Sorry, we aren't able to show current rates" + a phone number. No diagnostic. |
| **3. Soft-pull prequal exists, denial UX is decent on near-miss ("winback") but exits the funnel** | **Figure** (prequal-winback-page for HELOC mortgage-payoff) | Best near-miss path of the group, but still hands the borrower to a phone call or affiliate lead-gen. |
| **4. No soft-pull prequal at all; relies on human routing** | **Newfi**, **Angel Oak (retail)**, **Rocket Pro (B2B)**, **Homepoint (B2B)**, **Deephaven (B2B)** | A 5–12 field contact form → "we'll call you." The borrower never sees a denial screen. |
| **5. The brand is dead** | **Loanai** (parked domain, GoDaddy/Afternic) | A 114-byte parking stub. No product to study. |
| **6. The brand was acquired / exited origination** | **Homepoint (HMPT)** | The HMPT wholesale brand is gone since April 2023. Only two unrelated small retail brokers (NMLS 2616258 UT and 1945093 CA) use the name today. |

The single most important finding for the project: **a "why can't I qualify" diagnostic does not have to beat Better, SoFi, Figure, or Tomo. It has to be the only public-facing tool in the top 10 that does this job at all.** Every one of the 10 lenders has either (a) no denial UX, (b) a denial screen that says "we can't, call us", or (c) hands the failed borrower to an affiliate lead-gen card.

---

## 1. Per-Lender Deep Dives

### 1.1 Better.com

| Field | Finding |
|---|---|
| **Website** | `better.com` |
| **Target audience** | Mainstream W-2 + conventional conforming; 620+ FICO public floor, **internal `denialCreditScoreGate` = 540** (purchase/refi/cashout) / 600 (HELOC) extracted from `__NEXT_DATA__` on `/preapproval/nxt-purchase`. **Self-employed: yes** (Schedule C / K-1 / 1120) with 2-yr history, declining YoY = lower amount, losses deducted. **No stated-income, no bank-statement, no non-QM.** Crypto-collateralized down payments via Coinbase Prime. **No second-look product.** |
| **Value prop** | "Simple, Online Home Finance" / "Get pre-approved in as little as 3 minutes" / "No credit impact" / "Honest rate quotes — No bait-and-switch" / **"One Day Mortgage"** verified in 24h. Wall Street Journal "Best Mortgage Lender for Affordability", Forbes "Best Online Mortgage Lender". 0% LO commission. |
| **Lead capture** | **Soft pull via Credco (Experian FICO 2)** at pre-approval. Full SSN + DOB asked up front. **Hard tri-merge (median of TU/EX/EQ)** for verified approval. The flow is a Next.js `barrel` sub-app, the soft-pull is fired after income + assets + SSN are submitted. |
| **Questions asked (pre-approval)** | (1) Total household income (single field, no bonus/RSU breakdown at soft-pull stage), (2) Total assets (single field, "checking, savings, retirement, CDs, brokerage"), (3) SSN for soft credit check. That's the official "3 questions" per their own article. Plus property address, type, use, loan amount, name, email, phone, DOB. **No employment history, no residence history at pre-approval** (`showEmploymentHistoryInPreapp = false`, `showResidenceHistoryInPreapp = false`). **No self-employed branch at the soft-pull stage.** |
| **UX** | ~5–7 screens, ~3 minutes claimed. Mobile-first React app, phone collected for Twilio SMS. Betsy AI chat widget. Phone: 415-523-8837. M-F 8am-9pm ET, Sa-Su 9am-9pm ET. Email: hello@better.com. |
| **Calculators** | Affordability (`/how-much-house-can-i-afford`), Mortgage Payment (with PMI/taxes/insurance donut), Rent vs Buy, HELOC vs Cash-out, Loan Comparison, Refi rates, HELOC rates, Home Equity Loan rates, VA rates. Affordability Calc is anonymous, no email required, no credit pull, but it logs `POST /api/leads?lead[sourceName]=betteraffordabilitycalculator`. |
| **CTAs** | "Get started · 3 min \| No credit impact" (sticky), "See personalized rates", "Start pre-approval", "Get pre-approved", "Check your homebuying power". |
| **Trust signals** | NMLS #330511, 50-state licensed, BBB A+, $100B+ funded, 400K+ customers, Betsy AI assistant, 0% LO commission, Better Price Guarantee, Better Cover (insurance), crypto-mortgage. |
| **SEO** | 5 site-wide meta keywords + 50-state programmatic SEO for mortgage calculator. **ZERO content targeting "denied", "rejected", "second-chance", "non-QM", "bank-statement loan"** — 70+ URL 404s confirm this is unowned territory. |
| **Strengths** | Real 3-min pre-approval, single-screen live affordability calc, One Day Mortgage, direct-lender pricing, crypto-backed product, full family-of-companies ecosystem (Better Cover, Better Real Estate, Better Settlement Services). |
| **The denied moment** | **A single 23-word modal** on the Affordability Calculator: *"Something isn't adding up — Based on that it might be tough to get a loan. See if you have any wiggle room or read our article for more help."* That's the entire "you're denied" UX. No diagnostic, no thresholds, no remediation plan, no alternative product nudge, no human handoff, no email follow-up. The content page at `/content/mortgage-application-denied` is generic blog advice: "ask your realtor for lender recommendations… smaller, local, or private lenders may be less conservative… consider adding a co-borrower… apply for government-backed loans." |
| **What the diagnostic should do better** | (1) Identify *which* input failed (DTI / LTV / FICO / reserves / property type), (2) show *thresholds* (your DTI 51% vs. our 50% cap), (3) what-if simulator, (4) right alternative product routing (FHA at 580, VA at 620, USDA at 640, non-QM at 620 with bank statements), (5) human/co-borrower/alt-lender handoff, (6) concrete remediation timeline (when can you re-apply). |

**Source:** `/root/Website/Why am i denied/BETTER_COM_RESEARCH_REPORT.md` (676 lines)

---

### 1.2 SoFi

| Field | Finding |
|---|---|
| **Website** | `sofi.com/home-loan/` (marketing) → `/signup/hl/v1` (entry) → `/home-loan/continue` (React app) |
| **Target audience** | **Prime / super-prime W-2 borrower** (600 FICO min per FAQ; 8-band picker goes down to "Below 620" but no alternate path). **No self-employed landing page** (5 URLs all 404). **No denied page** (5 URLs all 404). Self-employed mentioned only passively in two article paragraphs. State eligibility: "all states except purchase only for New York." |
| **Value prop** | "$10,000 On-Time Close Guarantee" / "$500 off origination for SoFi members / $500 extra for SoFi Plus" / Up to $9,500 HomeStory cash-back / 90-day "Lock and Look" rate lock / 3–5% down / 10/15/20/30-yr terms / 4.9/5 across 1,720 reviews / FDIC-insured deposits cross-sell. |
| **Lead capture** | **Two-step:** (1) `/signup/hl/v1` — email + 1 ESIGN/GLBA consent checkbox → "View my rate"; (2) `/home-loan/continue` is a full Webpack React app that ends in a **soft credit pull** (Experian FICO 2) with the label *"Last step — A soft credit check to get your personalized rates. It's secure and won't have any impact on your credit score whatsoever."* Hard pull is a separate later step. |
| **Questions asked (full 11-step purchase branch)** | (1) Loan type, (2) "Where are you in your home buying process?" (4 options), (3) "What are your goals right now?" (multi-select, changes by stage), (4) "What kind of property are you interested in?" + occupancy (Primary/2nd/Investment) + ZIP, (5) "Have you owned a home in the last 3 years?", (6) VA eligibility, (7) VA prior loan, (8) "Tell us more about the loan" (price + down), (9) **"What's your credit score?" (8 bands: >740 / 720–739 / 700–719 / 680–699 / 660–679 / 640–659 / 620–639 / Below 620)**, (10) Review info (name, DOB, phone, address, SSN if existing app), (11) View rates. **No self-employed question. No employment history. No income source question. No assets question. No debts question. No co-borrower question.** |
| **UX** | 11 screens, ~2 minutes claimed. Mobile responsive. Customer service phone: 855-456-7634. |
| **Calculators** | Affordability (`/home-affordability-calculator`), Mortgage Calculator, Mortgage Calculator w/ taxes & insurance, Down Payment Calculator, Preapproval Calculator. **All decoupled from the preapproval app** — output has no relationship to actual underwriting. |
| **CTAs** | "View my rate" (entry), "View personalized rates" (after soft pull), "Lock and Look" (rate lock CTA), "Get preapproved" (final step). |
| **Trust signals** | NMLS (SoFi Bank N.A.), FDIC, 4.9/5 from 1,720 reviews, CNBC Select Top Lender. |
| **SEO** | 5 page sitemaps / 2,341 indexed pages / ~500+ mortgage-related. Massive programmatic-SEO: `mortgage-rates-in-<state>/`, `<city>-mortgage-calculator/`, `first-time-home-buyer-programs-in-<state>/`, `<state>-mortgage-refinance-calculator/`, `<city>-jumbo-loan-calculator/`, `<state>-home-equity-loan-calculator/`, 50+ `home-equity-loan-rates-in-<city>/`. **Zero SEO for "denied", "rejected", "self-employed mortgage", "low credit mortgage"** — all 404. |
| **Strengths** | $10K On-Time Close Guarantee is industry-leading, member-discount moat, 90-day Lock and Look, large product menu (Conv, FHA, VA, Jumbo, HELOC, Home Equity Loan, Refi, Cash-out Refi). |
| **The denied moment** | A single line: *"Based on the information you provided, we aren't able to show current rates. A Loan Officer will be in touch…"* + a phone number. **No DTI, no LTV, no credit-band, no self-employed callout, no alt-path.** Eligibility error codes are buried in the React (`MAXIMUM_LTV`, `MINIMUM_AMOUNT`, `MAXIMUM_JUMBO_AMOUNT`, `CASHOUT_LTV`, `UNSUPPORTED_STATE`, `CREDIT_DECLINED`, `CREDIT_INELIGIBLE`, `LOAN_AMOUNT_OVER_LIMIT`, `NO_ELIGIBLE_PRODUCTS`) but **none are surfaced to the user with a name they can act on.** |
| **What the diagnostic should do better** | (1) Name the binding constraint (DTI, LTV, credit band, reserves, employment type, state), (2) rebalance scenario ("if you put $5K more down, LTV drops from 97% to 89%"), (3) compute 1099/Schedule C income correctly (post-deductions, with add-backs), (4) show credit-band impact on rate, (5) route to FHA 500+, VA 580+, USDA 640+, non-QM 620+, (6) capture the failure at the input stage, not after a 7-minute funnel, (7) deliver a shareable 30/60/90-day plan. |

**Source:** `/root/Website/Why am i denied/sofi_research_report.md` (525 lines)

---

### 1.3 Figure (HELOC / Home Equity)

| Field | Finding |
|---|---|
| **Website** | `figure.com` → `https://www.figure.com/account/heloc/register/` (the actual prequal) |
| **Target audience** | HELOC (Home Equity Line of Credit) and Home Equity Loan, with HELOC-for-Business as a distinct sub-product. State-specific landing pages (CA, TX, FL, AZ). 620 FICO (680 for 2nd home / investment). **Self-employed: YES, explicitly** — the `/home-equity-line/heloc-for-business/` page is dedicated to "Self-employed homeowners" and "LLC owners". Business income is now includable in DTI (per HELOC for Business page). Employment-form rejection rule is only for *literal unemployment* — self-employed is not blocked. Income verification path: Plaid (personal checking), Plaid (business), TurboTax/IRS, payroll provider, etc. |
| **Value prop** | "Finance, without the friction" / "**Get approved in 5 minutes, funding in as few as 5 days²**" / "Apply with our 100% online application in minutes" / blockchain angle (Provenance Blockchain, "Figure (blockchain_lender)" Wikipedia link, first SEC-registered blockchain-native stock FGR) — but blockchain is **investor-facing, not consumer-facing** on the HELOC funnel. No traditional "Figure Pay" BNPL; closest are Lowe's Digital Shop Card and Crypto-Backed Loan (BTC/ETH/SOL, 8.91% interest / 9.999% APR, 12-month, 50% LTV). |
| **Lead capture** | **Soft pull (Experian) on initial submit**; **hard pull on SSN submission**. Plaid Identity Verification + MiiSnap ID image capture. eNotary. Identity fields: name, DOB, email, phone, SSN, password. Property: address, occupancy (Primary/2nd/Investment), ownership (SOLE/JOINT/TRUST/LLC), "for sale within 6 months?" Income: employment type, annual income, other income. Property value + existing mortgage for CLTV. |
| **Questions asked (full 20-step funnel)** | (1) Email, (2) Phone, (3) SMS marketing consent, (4) SMS transactional consent, (5) Password, (6) Property address (typeahead), (7) Occupancy, (8) Ownership type, (9) For-sale status, (10) Legal name (first/middle/last/suffix), (11) DOB, (12) SSN, (13) Employment type, (14) Annual income, (15) Other income, (16) Estimated property value, (17) Current mortgage balance, (18) Income source choice (8 options: Plaid checking, Plaid business, TurboTax/IRS, payroll, etc.), (19) Income verification (Plaid/TurboTax/Paystub), (20) DocuSign eNotary. **Self-employed is a first-class path** in the income form. |
| **UX** | React SPA. Mobile responsive. Trustpilot widget, Upscope co-browse, reCAPTCHA v3, Optimizely feature flags, Datadog RUM session replay, OneTrust cookie consent, Braze email/SMS. 5 minutes claimed. |
| **Calculators** | HELOC Calculator (`/heloc-calculator`), HELOC vs Cash-out Refi, HELOC vs Personal Loan, Home Equity Calculator, Home Affordability results, HELOC-vs-Cash-out blended rate. All output-only (no decisioning). |
| **CTAs** | "Find my rate" / "Find my HELOC rate" / "Apply in minutes" / "Get a HELOC quote" / "Get approved in 5 minutes". |
| **Trust signals** | NMLS (Figure Lending LLC), 5-star Trustpilot widget, Provenance Blockchain, S&P AAA for blockchain assets, first SEC-registered blockchain-native stock, Plaid + reCAPTCHA + Optimizely. |
| **SEO** | 577-URL sitemap. Persona + state + use-case fan-out: `heloc-for-debt-consolidation`, `heloc-for-business`, `heloc-in-arizona/california/florida/texas`, `heloc-family-planning`, `college-tuition`, `retirement`, plus 5-day-heloc page, "didn't get HELOC offers" (a real denied-borrower post-mortem page). |
| **Strengths** | Real 5-min prequal, Plaid + Experian soft pull, **includes self-employed + business income in DTI**, LLC and revocable trust ownership types supported, 1099/gig/rental/retirement/investment income all countable. |
| **The denied moment** | **Two specific decline components:** `credit-score-decline-container` and `dti-decline-container`. **For credit:** "invite other individuals on title to apply or re-apply in the future." **For DTI:** "include total annual gross income for your household including retirement, investment, or rental income." **Plus a "winback" page** for the near-miss mortgage-payoff path: "Pre-qualify for up to $X by paying off your existing mortgage" with a 1–2 lien multi-select. **If both decline paths fail, the user is routed to a "Thank you for your application" page with affiliate partner cards** (Point, BusinessLoans.com, Unlock, New American Funding, Freedom Debt Relief, West Capital Lending) — a **monetized lead-gen arbitrage**, not a diagnostic. |
| **What the diagnostic should do better** | (1) Disclose the specific reason in plain language with the user's number vs threshold, (2) model if-then scenarios (co-borrower, lower amount, different product, lien-paydown), (3) preserve data + email a re-apply plan, (4) be honest about HEI alternatives (which cost 15–30% of appreciation), (5) use the word "no" not "Thank you", (6) explicitly handle the LLC / revocable trust / non-occupying co-borrower cases Figure can actually fund. |

**Source:** `/root/Website/Why am i denied/research/REPORT.md` (778 lines)

---

### 1.4 Tomo Mortgage

| Field | Finding |
|---|---|
| **Website** | `tomo.com` → `https://tomo.com/mortgage/app/preapproval` (the actual preapproval, which is functionally a prequal) |
| **Target audience** | First-time homebuyers, W-2 salaried, urban/suburban, 41 states + DC. **580 FICO min for purchase, 620 for refi.** Self-employed: yes (3 income tiles: W-2 / Self-employed / Retirement) but the rest of the flow still asks W-2-style questions. **ITIN borrowers are told to call** (no self-service). **No non-QM / bank-statement / 12-month-bank-statement flow.** |
| **Value prop** | "Home buying made happy, mortgages made simple" / "Low Rates, No Gotchas" / "**rates about 0.5% less than the industry. A full 1% less than some of the big guys**" / **"$0 lender fees — saves an average of $2,000**" / **"98% on-time closing vs. 40% industry**" / 12-21 day close / 30-second Finicity account linking / 0% commission loan advisors / **Bankrate "Best Online Lender 2025/2026"** / $70M seed (Progressive Insurance, Metaprop, Ribbit Capital, DST Global, NFX). |
| **Lead capture** | **True soft-pull prequal** with FCRA-compliant copy. Verbatim from React bundle: *"I grant permission for Tomo Mortgage to run my personal credit report (a soft credit check) from Equifax, based on the Fair Credit Reporting Act. We do this solely for mortgage prequalification for credit."* and a second inline element literally says **"No hard credit check."** SMS MFA is required before the soft pull. Hard pull is a separate later checkbox for actual preapproval. **No time-to-completion claim beyond "in minutes" / "in hours" — there is NO 7-minute claim anywhere.** |
| **Questions asked (20-step flow)** | `RATE_QUOTE → BORROWER_GOAL → TARGET_HOME_PRICE → BORROWER_INFORMATION → MFA → SOFT_CREDIT_CONSENT → SSN → RESIDENTIAL_HISTORY → MARITAL_STATUS → EMPLOYMENT_HISTORY → INCOME_WIZARD (Employed/Self-employed/Retirement) → VOI → VOA → DECLARATIONS → PROPERTY_INFO → REO → SUMMARY → APPLICATION_HUB → HARD_CREDIT_CONSENT → SUBMIT`. **Self-employed is a per-employer toggle** in employment history. **Assets include Finicity bank linking + manual entry of checking/savings, stocks, gift funds (with full donor info), retirement, crypto (must be converted to USD before closing).** |
| **UX** | Mobile sticky CTA bar on every page. MFA (SMS code) is a friction point. The "no hard credit check" callout is the standout trust moment. No native mobile app. |
| **Calculators** | **TrueRate** (national / state / city / FHA / VA, all variants) — histogram of 72 lenders bucketed into "low / average / high" rate ranges with named lenders, lender fees, and customer reviews. **Affordability calculator returns a range** ("Very affordable" / "Upper limit") — not a single false-precision number. **"Buy a lower rate" slider with live break-even math** ("It will take you 4 years to recoup the cost. Only do this if you plan to stay in your home for more than 4 years and don't refinance.") and a **savings comparison to named competitors** (e.g., "A customer in Wisconsin saved $3,103 by choosing Tomo over Better Mortgage"). **No DTI calculator, no scenario simulator, no approval-likelihood score.** |
| **CTAs** | Five canonical: "Get started" (preapproval), "Get pre-approved", "Get your TrueRate", "See what I can afford", "Talk with a mortgage expert". In-flow: Connect (Finicity), Save this estimate, Track rates, Adjust home price (the cleverest — lets the user change loan amount on the pre-approval letter without redoing the flow). |
| **Trust signals** | NMLS #2059741 + full state license list, Bankrate "Best Online Lender 2025/2026" on every page, Trustpilot / Bankrate / Zillow / Google / WalletHub / BBB / ConsumerAffairs all linked. Investors: Progressive Insurance, Metaprop, Ribbit Capital, DST Global, NFX. $70M seed round. 41-state enumeration. |
| **SEO** | State + city + product fan-out — **~175+ indexable pages.** Patterns: `/interest-rates-today/<state>` (41), `/rates/<city>-<state>` (45+), `/rates/fha-loans/<city>-<state>` (45+), `/rates/va-loans/<city>-<state>` (8, deliberately targeted at military bases — Dyess AFB, Fort Bliss, Fort Cavazos, etc.), 6 product pages, `/affordability`, `/blog` (Tomo Reports). **Massive SEO gap: Tomo has zero "denied" / "self-employed" / "dti-calculator" / "fha-eligibility" / "first-time-homebuyer" landing pages.** |
| **Strengths** | True soft-pull prequal with clear FCRA copy, anonymous no-SSN rate explorer, affordability range (not single number), three explicit income tiles, "No hard credit check" callout, Buy-a-lower-rate slider with break-even, named loan advisors with NMLS numbers, $0 lender fees, adjustable pre-approval letter, float-down protection, appraisal coverage, Bankrate Best Online Lender. |
| **The denied moment** | **Three actual denial screens exist in the React bundle, with verbatim copy:** (1) `DTIEligibilityRed`: *"Sorry, we're unable to complete a loan at this time. The debt-to-income calculated is [X]%. Tomo Mortgage requires a DTI below 43% in order to complete a loan request. Let's try again soon."* — Recovery: *"Go back and add it [income] to see if the income information then meets requirements."* (2) `AssetsEligibilityRed`: *"Sorry, we're unable to complete a loan at this time. The down payment sources provided do not cover the minimum, 5–10% of the purchase price, required for down payment."* (3) `CreditError`: Two sub-screens — "Credit frozen" (operational fix only) and "Credit check failed" (*"Some common issues that may have occurred: low credit score (below 580), late mortgage payments, bankruptcy or forbearance"*) — **lists 3 reasons but does not tell the user which one applies to them.** **No denial screen for: FICO < 580 path, bankruptcy/foreclosure seasoning, LTV/PMI, employment gap, self-employed income docs, property eligibility, occupancy eligibility, layered risk, reserves.** |
| **What the diagnostic should do better** | (1) **Personalize the credit-failure reason** (FICO < 580 → 6-12 month action plan; Chapter 7 → FHA at 24mo / Conv at 4yr / VA at 2yr), (2) **Surface the actual guidelines** (Fannie 43% back-end DTI / FHA 56.9% with compensating factors / VA residual income / non-QM 50–55%), (3) **Cross-program routing** (when Conv fails → FHA 580, VA, USDA 640, non-QM, portfolio), (4) **Timeline to qualification** (date math: *"you can apply for FHA in March 2027"*), (5) **DTI live display + slider scenario** (debt-paydown, co-borrower add, income change), (6) **Pre-screen FICO bands below 580** so the user doesn't waste a 5-minute preapproval attempt, (7) **ITIN / non-QM pathway explanation** (Tomo sends these users to the phone), (8) **Self-employed pre-screen** (1099 only / no W-2 → bank-statement / non-QM lenders), (9) **LTV → PMI trigger curve**, (10) **No-SSN anonymous prequal in <60 seconds**. |

**Source:** `/root/Website/Why am i denied/02-Competitor-Research/tomo-mortgage.md` (624 lines)

---

### 1.5 Loanai

| Field | Finding |
|---|---|
| **Website** | `loanai.com` — **PARKED DOMAIN. For sale on GoDaddy / Afternic.** |
| **Target audience** | None. The site does not exist. |
| **Value prop** | "Buy this domain" / "Make Offer" (GoDaddy/Afternic template). |
| **Lead capture** | None. 114-byte JS stub that redirects `/lander` → `forsale.godaddy.com/forsale/loanai.com`. |
| **Questions asked** | None. No form, no fields, no flow. |
| **UX** | Single JS redirect. |
| **Calculators** | None. |
| **CTAs** | "Buy this domain" / "Make Offer" (GoDaddy/Afternic). |
| **Trust signals** | None. No SOC 2, NMLS, state-license, Equal Housing Lender, BBB, Trustpilot. |
| **SEO** | None. 114 bytes. No title, no meta description, no H1, no schema, no canonical, no robots, no sitemap. |
| **Strengths** | N/A. |
| **The denied moment** | N/A — there is no product to be denied from. |
| **What the diagnostic should do better** | A parked domain has nothing to compare against. The diagnostic should **own the keyword universe** (`loanai.com`, `loanai`, "AI mortgage prequal", "AI loan qualification") that no live competitor is competing for. **Press search confirms zero existence:** HousingWire "0 Results", TechCrunch "No results", SEC EDGAR no 10-K matches 2020–2024, BBB "No results". Related TLDs (`loanai.io` at $9,995, `loanai.co`, `loanai.app`, `loanai.ai`) are all parked. **`loanai.us` is a different GoDaddy Website Builder placeholder ("Launching Soon") with copyright 2024 — unrelated.** |

**Source:** `/root/Website/Why am i denied/loanai_research_report.md` (162 lines)

---

### 1.6 Rocket Pro TPO (broker platform)

| Field | Finding |
|---|---|
| **Website** | `rocketprotpo.com` (now redirects) → **`rocketpro.com`** (renamed Jan 14, 2025). The consumer never sees "Rocket Pro" directly — borrowers come in via `rocketmortgage.com/broker-near-me`. Broker portal: `app.rocketpro.com/homepage`. |
| **Target audience** | **Wholesale mortgage brokers / LOs / correspondent lenders** — B2B only. 7,000+ broker partners, **43,000 LOs**, ~28,000 active ARIVE users, 2nd-largest US wholesale lender. The consumer-facing "Broker Near Me" directory exists to feed leads to brokers, not serve borrowers. |
| **Value prop** | "**The journey home starts with you.**" "Rocket Pro℠ is committed to partnership that puts brokers first." "**Every partner. Every time. No Exceptions. No Excuses.**" Backed by Rocket Companies (NYSE: RKT), 40 years of industry experience, $100M+ tech investment. 10 Partner Promises; #5 is the most relevant for the diagnostic: *"**Helping everyone home means everyone. Not just the people with high credit scores. We'll always invent new ways to unlock doors until you can approve every dream.**"* |
| **Lead capture** | Rocket Pro provides brokers with: (1) **Broker Near Me directory** on rocketmortgage.com (~115M annual visitors), (2) **Rocket Homes integration** (funnels homebuyers to Pinnacle Partners), (3) **Pro Mixers in-person events**, (4) **Proprietary agent-relationship tracking engine** (anti-poach firewall), (5) **MMI market data at $100/mo**, (6) **Bully Shield** (anti-UWM-ultimatum), (7) **Co-branded marketing materials**, (8) **Waymark personalized video tool** (4,200 partner videos in May 2021), (9) **The Big Pitch** ($100K broker-idea contest, NMLS-gated voting), (10) **VAL Update Hotline** (gen-AI voice tool, Jan 2024). |
| **Tools (verbatim from `benefits` page)** | **Client Portal** (co-brandable), **Rocket Connect** (2-hour SLA), **Pathfinder by Rocket** (Google-partnered guideline search), **Padlock** (rate extension days), **Condo Simply** (preapproved condo projects), **Clear Choice Findings** + **Best AUS** (underwriting service choice), **Rocket Pro University** (Saba LMS at `rocketpro-tpo.sabacloud.com`), **Rocket Fuel** (weekly newsletter), **Pinnacle Partners tier**, **Doc Draw** (correspondent), **Target Profit Control** (correspondent), **Pricing Calculator**, **Vendor Marketplace** (Waymark, Sift, ARIVE, Jupiter LOS, Aila AI agent, Shape CRM, MMI data, Model Match, **Credit Builder Card**, **Starting Now for credit-challenged borrowers**, Savvy, UPS). |
| **Pricing calculator / consumer flow** | Pricing Calculator is the "advanced pricing calculator to meet every client's needs" — the broker-side price engine. **The borrower never sees it directly**; the broker uses it. |
| **Non-QM offering** | **Buried in a footnote:** 24 months of bank statements + business license + tax preparer letter + Secretary of State filing + proof of ownership. **No ITIN, no Foreign National, no hard-money, no B-minus, no thin-file, no second-look public path.** |
| **Trust signals** | 2nd-largest wholesale (IMF), NMLS #3030, equal-housing lender, 50-state licensed, Rocket Companies (RKT), 40 years, $100M+ tech. Recent 2026 changes: "August Power Play" 100bps purchase / 60bps refi; 12-day clear-to-close offer; VantageScore 4.0 went live June 9, 2026 (meaningful re-qualification lever). |
| **SEO** | Broker / TPO keywords: "Rocket Pro TPO", "wholesale mortgage", "broker partner", "Rocket Pro University", "Rocket Connect", "Pathfinder", "Vendor Marketplace", "The Big Pitch", "Pinnacle Partners", "Bully Shield". |
| **Strengths** | Massive scale (2nd wholesale), NMLS transparency, 50-state, Vendor Marketplace breadth, gen-AI voice hotline, ARIVE LOS integration (28K users), "10 Partner Promises" broker manifesto, dedicated AE within 24h of signup, Committed Crews (dedicated underwriter team). |
| **The denied moment** | **There is no consumer-facing "denied" UX** — Rocket Pro is B2B. The only mention of "denied" in the entire site is in the Data Partners retention policy. **VantageScore 4.0 (live June 9, 2026)** is the meaningful re-qualification lever for the diagnostic — *"which scoring model was your denial based on?"* |
| **What the diagnostic should do better** | (1) Decode the real denial reason beyond "credit" or "DTI" (e.g., the VantageScore 4.0 change will re-qualify many borrowers), (2) surface the alternative products Rocket Pro *does* offer but doesn't advertise as "denial solutions" (Rocket Pro's non-QM, Starting Now, Credit Builder Card), (3) address the self-employed blind spot (Rocket Pro's own non-QM still requires extensive documentation), (4) provide a transparent broker-finder that exposes the broker's pricing markup, (5) verify the "no poach" promise is actually being honored, (6) give the borrower a self-serve recourse path that doesn't require a phone call to a broker who might not be a Rocket Pro partner. |

**Source:** `/root/Website/Why am i denied/research/rocket-pro/REPORT.md` (571 lines)

---

### 1.7 Homepoint (B2B wholesale lender + defunct brand)

| Field | Finding |
|---|---|
| **Website** | **THE BRAND HAS FRACTURED.** `homepointmortgage.com` is now a 301 redirect to `mortgagedepot.com` (an unrelated Queens, NY broker — zero Homepoint content). The original **Home Point Financial Corporation (HMPT)** — the well-known wholesale lender — **exited origination April 2023** (sold wholesale unit to The Loan Store) and was absorbed by UWM in 2024. Two unrelated small retail brokers use the name today: `myhomepointmortgage.com` (NMLS 2616258, Salt Lake City UT) and `homepointlending.com` (NMLS 1945093, San Mateo CA — defers to Floify for the actual application). The original HMPT-era marketing site `www.homepointfinancial.com` is still up behind Cloudflare but has no consumer prequal. UWM (successor) is wholesale-only. |
| **Target audience (original HMPT)** | Wholesale — brokers only. 2,000+ employees, 2021 volume $96B, #3 wholesale in the US. **Now dead as a consumer product.** |
| **Target audience (today's "Homepoint" consumer sites)** | Two independent small retail brokers. Homepoint Mortgage LLC (NMLS 2616258) markets self-employed, foreign national, DSCR, ITIN, and bank-statement (non-QM focus) + conventional/FHA/VA/USDA/Jumbo. Homepoint Lending (NMLS 1945093) is a one-officer (Shawn Maxwell) San Mateo / SF retail broker, CA-only, standard W-2 / bank-statement / investor focus. |
| **Value prop (today's small brokers)** | "WITH OUR HELP, YOUR DREAM HOME IS CLOSER THAN YOU THINK" (myhomepointmortgage.com) / "Your time & money matter… usually in less than 30 days" (homepointlending.com). **No real-time qualification promise anywhere — uniformly "we'll call you" / "free pre-approval letter".** |
| **Lead capture** | **No soft credit pull.** Form does not ask for SSN or DOB. Self-reported contact form. Identity (name, email, cell) is collected in the LAST 4 of N questions, then CAPTCHA + TCPA SMS opt-in + free-text "Question" field. Broker calls back; hard pull happens later. **The opposite of a soft-pull prequal.** |
| **Questions asked (purchase flow, 14 steps)** | Location → First-time? → Selling? → Stage → Real-estate agent? → Property type → Use → Veteran? → Target price → Down payment → Annual income → **Credit tier (self-rated)** → Self-employed? → BK/FC/SS in past 4 years? → Name → Email → Cell phone. **Self-employed is a single Y/N question;** the answer doesn't change the question set during the flow but routes the post-lead handoff to non-QM programs (bank-statement, DSCR, foreign-national, ITIN). The documentation page explicitly says: "salaried = 2yr W-2s + 1mo paystubs; self-employed = 2yr tax returns + corporate returns + P&L." |
| **UX** | Single-page SPA, one question per screen, 14–22 questions depending on flow (VA is longest at ~22), **3–6 min to complete**. No progress bar, no save-and-resume, **no co-borrower field, no assets field, no debt field.** Mobile-responsive but no app. If the API errors, the user sees *"Uh Oh! Something went wrong. Please refresh the page and try again or call us at 801-979-7176"* — i.e. the "denied" UX a stuck user gets. |
| **Calculators** | The prequal funnel itself outputs **nothing** — it just submits and shows a thank-you. The site has a separate calculator suite at `/mortgage-information/calculators` (amortization, biweekly, 15-vs-30, debt consolidation, "how much can I afford") that is not wired into the funnel. The mortgagedepot.com widget (the redirect target) is a 4-input monthly payment calculator that ignores taxes, insurance, HOA, PMI. |
| **CTAs** | "GET A QUOTE / APPLY NOW" (homepage), "Get a Free Pre-Approval Letter" (purchase), "Lock in a Low Rate!" (refi), "Stay in Your Own Home!" (reverse), "I Want My Mortgage Rate Quote!" (homepointlending). Phone fallback "Prefer speaking to a person? Call 801-979-7176" appears on every step. |
| **Trust signals** | NMLS numbers, physical addresses, TCPA disclosures, Privacy/Terms links, state-disclaimer on the SERVICING site. **ABSENT: no BBB/Trustpilot, no reviews widget on the funnel (the `/aboutus/reviews` page shows "0 reviews"), no officer bios/photos on the funnel, no "as seen in", no security badges, no transaction-volume counter.** The only "denied-borrower-success" testimonial is on the unrelated mortgagedepot.com (one Ruben Benjaminoff review: *"We finally closed on our purchase after being declined with other lenders"*). |
| **SEO** | Etrafficers template targeting long-tail local + program. URL pattern `/loan-programs/{conventional,fha,va,usda,jumbo,reverse,dscr,construction,non-qm,refinance,foreign-national,commercial}-loans` × `/get-a-quote/{purchase,refi,fthb,reverse,va-loans}` × `/mortgage-information/{faq,requested-documents,loan-process,calculators,glossary,news}`. Title tags are aggressively long-tail. Keywords: "how much house can I afford", "self-employed mortgage", "bank statement loan", "DSCR loan", "VA funding fee", "ITIN loan", "foreign national", "no income check", "1% down", "first-time home buyer". |
| **Strengths** | Channelized funnels (5 separate), self-employed as a first-class branch trigger, self-rated credit tier (avoids forcing FICO), "it is ok to estimate" reassurance copy, soft phone fallback on every step, full TCPA compliance, VA-flow has a real military-specific pre-screen (branch, reserves, CONUS/OCONUS, PCS, disability rating, prior VA use), niche-program surfacing for non-QM, DSCR, foreign-national, ITIN, reverse. |
| **The denied moment** | **There is no "you might not qualify" message anywhere** — no screen, no banner, no paragraph. The only nod to ineligibility in the entire purchase funnel is the "BK/FC/SS doesn't mean you can't get a loan" helper text. **The reverse-mortgage age question offers "Less Than 62" with zero follow-up** explaining "you don't qualify because HECM requires 62+; consider a HELOC instead." Just submits. **No near-miss routing. No "DTI looks tight, here's what to do." No "your credit profile fits FHA but not conventional, click here." No co-borrower option. No "Plan B" letter. No credit-rebuild resources. No HFA DPA. No HUD counseling referral. No assets, no debts, no housing-payment inputs. Back-end DTI is invisible.** |
| **What the diagnostic should do better** | 15 things: (1) Real-time inline decisioning, (2) Explicit denial with reason, (3) Near-miss routing with named alternatives, (4) Act on self-employed and credit-tier answers *during* the flow, (5) No-surprise state restrictions, (6) Persist the session, (7) Transparent about pull vs no-pull, (8) Visualize the math (DTI, LTV, CLTV, PITI, reserves, FICO), (9) Exit-intent capture, (10) Pre-route by intent, (11) Co-borrower support, (12) Debt input, (13) Asset input, (14) Outcome-aware routing, (15) Output a structured "denied but here's what to do" document. |

**Source:** `/root/Website/Why am i denied/research/homepoint_research_report.md` (1,200+ lines)

---

### 1.8 Newfi (non-QM wholesale + retail)

| Field | Finding |
|---|---|
| **Website** | **Two distinct properties under Nexera Holding LLC (NMLS #1231327, Apollo-backed):** Consumer/retail: `newfi.com` ("Newfi \| Finance Forward"). Wholesale/broker: `newfiwholesale.com` ("Your Path To Closing More Loans Starts With Newfi"). Shared Auth0/SSO at `login.newfi.com` powering `app.newfi.com/loancenter/` (consumer portal) and the BLU broker portal. |
| **Target audience** | **Self-employed, real estate investors, bank-statement borrowers, foreign nationals, ITIN, 1099, asset-depletion, W-2-to-1099, IRA-based, RE flippers.** Plus 8 other income-documentation methods (the most thorough in the non-QM space). 10+ programs. **No consumer prequal — the consumer top-of-funnel is a 3-step "Book A Meeting" form (`/loan-criteria-page/`) that asks ONE question: "Have you worked with a Newfi Loan Advisor before? Y/N" — then routes to a 30-min phone call.** |
| **Value prop** | "**1/3 of all of our Non-QM loans have at least one exception**" — published on About, Rates, and Income IQ pages. **This is a transparent in-house-credit-authority signal no other major non-QM lender matches.** $11.5B funded volume, 5,800+ loan officers, 2,700+ brokers, 3,500+ consumers, 4.9/5 stars, 80% pull-through, NMP 2026 Bank Statement Lender, Meridian Link ARC Award for AI use. |
| **Lead capture** | **No soft-pull prequalification anywhere.** The 3-step "Book A Meeting" form at `/loan-criteria-page/` is the entire top-of-funnel — Step 1: "Confirm Your Loan Officer" (Y/N), Step 2: contact info, Step 3: schedule the 30-min call. **No income, employment, credit, DTI, or property data is collected pre-call.** Income IQ (a first-of-its-kind AI bank-statement analyzer that lets brokers upload PDFs and get analysis in ~24 hours) is **broker-only, login-gated** at BLU. |
| **Questions asked** | Just the 3-step form: "Have you worked with a Newfi Loan Advisor before?" + name/email/phone + calendar booking. Actual qualification happens offline. |
| **UX** | 3-step form, ~60-90 seconds to complete. Mobile-responsive WordPress site. **No live chat anywhere.** |
| **Calculators** | **8 consumer calculators** (DSCR, Monthly Payment, Affordability, Refinance, Comparison, Interest-Only, 15-vs-30, Amortization) — all explicitly **disclaim decision-grade output**: *"We cannot and do not guarantee their applicability or accuracy."* **None output "approved/denied."** |
| **CTAs** | "Get Approved" (login-gated, broker), "Book a Meeting" (consumer), "Apply Now" (login-gated, consumer portal). |
| **Trust signals** | $11.5B funded, 4.9/5 stars, NMP 2026 Bank Statement Lender, Meridian Link ARC Award, full leadership team with names/photos, all NMLS disclosures, multiple MBA chapter logos (CAMP, BAC, AIME, MMLA, etc.). |
| **SEO** | **Exceptional footprint:** 27 `/dscr-loans/{state}/` pages, 5+ state bank-statement pages, 139 indexed consumer pages, 52 wholesale pages, 76 blog posts targeting DSCR, non-QM, self-employed, bank statement, 1099, W-2-to-1099 keywords. State pages are long-form (650KB Texas DSCR page with Census/Zillow data and top-cities content). |
| **Strengths** | The most thorough non-QM income-doc matrix in the space (10+ methods). **W-2-to-1099 is a genuine innovation** — count 100% of 1099 income on day one with an offer letter + first pay stub, instead of the typical 12–24 month self-employed history. Income IQ is a first-of-its-kind AI bank-statement analyzer. Programmatic SEO is a major source of inbound. |
| **The denied moment** | **Zero "you don't qualify but here's why" UX anywhere.** No alternative-path mapping surfaced to borrowers (programs are described in isolation). No instant decision / soft-pull prequal to compare against Better/Tomo/SoFi. No "Why was I denied" SEO content. **The 3-step booking form is the ONLY pre-application intake** — explicitly positions against "mortgage robots." State-count inconsistency (40 vs 47 vs 48 states on different pages). Broken `/referral-form/` link (404 in live nav). Staging URL leaked into sitemap (`/https-staging-newfi-com-loan-criteria-page/`). |
| **What the diagnostic should do better** | 13-point implementation blueprint including a 13-row mapping table from common denial reason → specific named Newfi alternative program (e.g., "Tax-return income too low → 12/24-mo bank statement on Rainier/Sequoia", "Just switched W-2 to 1099 → W-2-to-1099 program counts 100% of 1099 income day one", "Retired with high assets → Asset Depletion (Assets / 60 = qualifying income)", "Recent mortgage late → Sequoia Non-QM Expanded up to 1 mortgage late"). |

**Source:** `/root/Website/Why am i denied/02-Competitor-Research/newfi.md` (737 lines)

---

### 1.9 Angel Oak Mortgage Solutions (non-QM retail + wholesale)

| Field | Finding |
|---|---|
| **Website** | **THREE distinct web properties:** (1) `angeloakms.com` — wholesale/broker portal (Non-QM QuickQuote, AngelOak iQ, product pages, broker login), (2) **`my.angeloakms.com`** — the **retail/consumer-direct site** (Webflow, 263 sitemap URLs, the actual borrower-facing Get-Quote form, Find-An-Advisor, 50 state pages, 50+ paid-media landing pages), (3) `angeloakcorrespondent.com` — correspondent lenders. |
| **Target audience (retail)** | Self-employed, real estate investors, "just-missed" jumbo, credit-event borrowers, foreign nationals, ITIN, 1099, asset-rich retirees, gig contractors. **Plus they also offer agency Conventional/FHA/VA/USDA.** |
| **Value prop** | "Your Full-Service Mortgage Lender" / "**Innovative Solutions for Underserved Borrowers**" / "If Agency won't approve you, Angel Oak will, with a non-QM program built for your situation." 15 wholesale + 7 retail products. |
| **Lead capture (retail)** | **Single-page contact form, NOT a soft-pull prequal.** No FICO check, no DTI calc, no instant decision. Routed to a human Loan Officer. **12 form fields:** first/last name, phone (optional), email, zipcode, loan purpose (Purchase/Refi), self-employed (Yes/No), residency (Primary/2nd-home-investment), **credit score (bucketed select: 760+ → Below 599)**, loan amount, property value, TCPA consent. Plus hidden UTM capture. |
| **Questions asked** | Just the 12 form fields. No income, no employment, no assets, no debts, no co-borrower. |
| **UX** | One-step form, ~90-120 seconds to complete, mobile-responsive Webflow, no multi-step wizard, no progress bar, no save-and-resume. |
| **Calculators** | **Zero on retail site.** Three wholesale-side (DSCR, Blended Rate, 2-1 Buydown). |
| **CTAs** | "Get Started" / "Contact a Loan Officer" / "Find an Advisor" — **no "Prequalify" or "Apply Now" CTA exists on the retail site.** |
| **Trust signals** | NMLS #1160240, state-by-state licensing, 3 named testimonials, 50+ branch locations, 20 named advisors with NMLS IDs, Angel Oak Companies parent (50+ securitizations). |
| **SEO** | **Two independent sites targeting non-overlapping keyword universes;** 50+ state pages, 30+ city pages, 50+ paid-media `/cd/*` landing pages, 15 product pages, 30+ webinar-replay posts; explicit tag taxonomy around non-QM/self-employed/bank-statement/DSCR/alternative-lending. Paid-media destinations target Bing, Meta, Yahoo, Reddit, JustAnswer, etc. |
| **Strengths** | Largest non-QM brand by SEO surface, 15 programs, productized experience, lead-routing to humans as a feature, AngelOak iQ broker platform, industry-first DSCR rental AVM, NMLS transparency. |
| **The denied moment** | **Zero denial messaging anywhere on the retail site.** No "we can't qualify you" diagnostic, no "what to do if denied" page, no alternative-path routing for credit <600, no instant pass/fail, no DTI calculation, no asset verification, **no self-employed sub-segmentation (1099 vs K-1 vs S-corp)**, outdated `/resources` articles (nothing after 2022), **no California branches despite the largest state**, FAQ answers that are non-answers. |
| **What the diagnostic should do better** | (1) Soft-pull FICO with FCRA consent, (2) real DTI/LTV math, (3) per-program pass/fail with the specific failing constraint called out, (4) branching for self-employed sub-types, (5) immediate denial acknowledgment, (6) alternative-path routing (credit-repair waitlist, down-payment calc, debt-paydown amount), (7) a public-facing "you got denied, here's why and what to do" page that targets keywords Angel Oak completely ignores (`denied mortgage`, `didn't qualify for mortgage`, `non-QM after denial`). |

**Source:** `/root/Website/Why am i denied/02-Competitor-Research/angel-oak-mortgage-solutions.md` (607 lines)

---

### 1.10 Deephaven Mortgage (non-QM wholesale + correspondent)

| Field | Finding |
|---|---|
| **Website** | `deephavenmortgage.com` — **B2B only. No consumer prequalification flow.** Every URL one would expect a consumer prequal to live at (`/prequalify/`, `/apply/`, `/prequalification/`, `/get-pre-qualified/`, `/get-started/`, `/loan-application/`) returns a WordPress 404 (or Cloudflare 403 to bots). The site footer on every page says: *"This material is intended solely for the use of licensed mortgage professionals. Distribution to consumers is strictly prohibited."* |
| **Target audience (B2B, the real audience)** | 1,000+ independent mortgage brokers, 200+ correspondent partners, real estate investor clients-of-clients. The site explicitly names the underserved borrowers in marketing copy: "**Here, mortgage borrowers belong in circles, not boxes.**" / "Non-Agency/Non-QM. We prefer the term pro-borrower." / "**Deephaven's Expanded-Prime Product Can Turn a No into a Yes!**" / "Lending Ingenuity." |
| **Target audience (borrower-side, marketing only)** | The `/borrower/` page describes: self-employed, 1099, retirees, real estate investors, business owners, ITIN, first-time buyers (millennials with high DTI), borrowers with credit events (foreclosure, BK, short sale, deed-in-lieu within 7 years), foreign nationals. **The borrower is captured via a 5-field contact form and routed to a wholesale broker — no soft pull, no qualification.** |
| **Value prop** | "**Non-QM Lending at Its Best.**" / "**Lending Ingenuity**" / "Deephaven's Expanded-Prime Product Can Turn a No into a Yes!" / "How can we make this work?" Mission: *"To provide innovative mortgage products to the millions of borrowers underserved by the traditional mortgage industry."* |
| **Lead capture** | **WPForms-hosted contact form** with **B2B fields leaking into the consumer page:** First Name, Last Name, **Company** (yes, a Company field on the consumer page), Email, Phone, Wholesale/Correspondent/Both, State, **NMLS ID** (yes, an NMLS ID field on the consumer page), Request Type, Message, "How did you hear about us?" with options: *Mortgage Professional America, Scotsman Guide, HousingWire, Rob Chrisman, Google, LinkedIn, Tradeshow/Conference, Other* (all B2B trade sources). **No consent to credit pull, no SSN, no income, no employment, no assets, no loan amount, no property value, no soft-pull toggle.** Consumer phone: 1-800-983-0457. Email: consumerexperience@deephavenmortgage.com. |
| **Questions asked** | Just the contact form fields. The actual qualification questions happen offline between the borrower and the matched broker using Deephaven's Scenario Desk. |
| **UX** | **Number of steps: 1** (single-form page, no funnel, no progress bar, no wizard). Time to complete: 30–90 seconds. Mobile: standard WordPress Divi build with NitroPack CDN; form fields are full-width responsive. **No progressive-web-app affordances, no saved-progress, no soft-pull, no native mobile prequal flow, no app, no SMS link drop.** |
| **Calculators** | **Two calculators, both GATED to the wholesale broker/correspondent** — they explicitly disclose: *"INFORMATIONAL PURPOSES ONLY. Solely for the use of mortgage professionals, consumer use is strictly prohibited."* (1) **Scenario Calculator** powered by LenderPrice Portfolio Underwriter™ (requires authenticated wholesale portal access to run scenarios; the public page only displays the disclaimer). (2) **Blended Rate Calculator** — three input modes (Existing Low Rate + New Cash-Out 2nd, New 1st Lien Cash-Out Refi, Existing 1st + Closed-End 2nd Cash-Out Refi). Outputs: blended rate, new P&I payment, refi rate, payment, monthly savings. **No amortization schedule, no PMI/tax/insurance line items, no qualification check.** |
| **CTAs** | "Discover The Deephaven Difference", "Learn More", "Download PDF", "Test Your Scenario" (correspondent), "Download Matrix", "Contact Me" (under each AE), "Submit the contact form today to connect with a Deephaven specialist that covers {State}.", "Register today" (Power Pulse events), "Not an approved originator with Deephaven, begin today!", "Get Blended Rate", "Find Your AE". |
| **Trust signals** | 1,000+ brokers, 200+ correspondents, "all-time record" non-QM volume March 2024, MPA Top Mortgage Employer, #1 Workplace Charlotte NC, NMLS #958425, full Disclosures and Licenses page, NY opt-out on every page (regulatory), 5-Star Google Review widget, 3 borrower case studies on /homeold/ (Sara — freelance designer, 1099 + bank statements, $168K, 90% LTV; James — HVAC owner, personal bank statements, $285K, 85% LTV; Jennifer — restaurant owner, 24-mo business bank statements + CPA P&L, $373K, 80% LTV). |
| **SEO** | **Programmatic local SEO for non-QM lender keywords**, anchored on 50 state landing pages. URL pattern: `/non-qm-lender-{state}/`. Title: *"Non-QM Lender {State} - Deephaven Mortgage"*. Meta: *"Deephaven is a leading Non-QM lender in {State} offering flexible, alternative mortgage solutions for self-employed borrowers and investors."* Long-tail: "Non-QM lender", "Self-employed mortgage", "Bank statement loan", "DSCR loan", "ITIN mortgage", "Asset Utilization mortgage", "Non-warrantable condo loan", "Expanded-Prime mortgage", "Non-Prime mortgage", "First Lien HELOC", "Foreign National mortgage", "High-LTV refinance", "Real estate investor loan", "Common-sense underwriting", "Lending ingenuity". |
| **Strengths** | 8+ product families, documented underwriting flexibility (12- or 24-month personal or business bank statements, CPA P&L, 1099 + YTD, asset utilization with DTI or no-DTI, DSCR for investors, 100% business deposits accepted in personal checking), strong program headlines that explicitly reframe "denial" (Expanded-Prime, "Turn a No into a Yes", "Lending Ingenuity"), excellent broker experience (Scenario Desk 1.844.512.5626, AE model, Broker Portal, FlexPricer, 1–4 day initial underwriting turn times, 2-day initial disclosures on wholesale). |
| **The denied moment** | **There is no consumer decision point where "denied" can happen.** Deephaven does not collect income, employment, credit, or asset information from a consumer. There is no decision engine, no soft pull, no DU/LP-style findings, no approval/denial outcome to communicate. **The site never tells a borrower "you don't qualify" because the site never asked them whether they qualify.** That's the central product gap for the diagnostic. |
| **What the diagnostic should do better** | (1) Ask the questions Deephaven would underwrite on (self-employed vs W-2, annual gross income, monthly debts, FICO band, loan amount, property value, occupancy, property type, citizenship/ITIN, recent credit events, liquid assets, LLC vesting, DSCR rent). (2) Produce a "best-fit Deephaven program" output (Expanded-Prime, Non-Prime, DSCR, ITIN, HELOC, First Lien HELOC, DSCR HELOC, Non-Warrantable Condo, Expanded-Prime Super Jumbo, 1099, Foreign National) with the specific eligibility rule hit or missed. (3) Provide a structured "why not" explanation in three layers: hard "no"s, soft "no"s, "yes-but-better". (4) Give an actionable "next step" tree per failure mode. (5) Soft-pull the credit. (6) Tie the output to a human handoff with a real SLA. (7) Localize the output to the borrower's state (NY carve-out!). (8) Emulate Deephaven's "reframe" copy. (9) Show pricing transparency (Non-Prime par + 1.5%, Expanded-Prime par + 0.5%, DSCR par + 0.75%). (10) Build a "next 3 best alternatives" view. (11) Capture the lead at the failure point, not the success point. (12) Translate to Spanish. (13) Send a "Deephaven-specific" PDF report. |

**Source:** `/root/Website/Why am i denied/research/REPORT.md` (778 lines — same file as Figure, different page)

---

## 2. Cross-Cutting Comparison Matrix

### 2.1 Audience & Business Model

| Lender | Direct-to-consumer? | Soft-pull prequal? | Self-employed served? | Non-QM / bank-statement? | Denied / near-prime served? |
|---|---|---|---|---|---|
| **Better.com** | ✅ Yes | ✅ Yes (Credco, Experian FICO 2) | ⚠️ Yes (with friction) | ❌ No stated-income / bank-statement / non-QM | ❌ No second-look product |
| **SoFi** | ✅ Yes | ✅ Yes (soft pull on rate-quote) | ⚠️ Mentioned only in article copy | ❌ No non-QM | ❌ No alt-path |
| **Figure** | ✅ Yes (HELOC) | ✅ Yes (Experian, with FCRA copy) | ✅ Yes — **first-class** | ⚠️ HELOC only (no mortgage) | ⚠️ "Winback" page for mortgage-payoff path only |
| **Tomo** | ✅ Yes | ✅ Yes (Equifax, with FCRA copy) | ✅ Yes (3 income tiles) | ❌ No non-QM (ITIN must call) | ⚠️ 3 denial screens exist but unhelpful |
| **Loanai** | ❌ Parked domain | ❌ | ❌ | ❌ | ❌ |
| **Rocket Pro** | ❌ B2B only (brokers) | n/a | n/a | ⚠️ Yes but buried (24-mo bank statements required) | ❌ No consumer-facing "denied" UX |
| **Homepoint** | ❌ B2B (HMPT dead since 2023) | ❌ | ⚠️ Two unrelated small brokers market non-QM | ⚠️ Via the small retail brokers | ❌ No near-miss routing |
| **Newfi** | ⚠️ Indirect (3-step "Book A Meeting" form) | ❌ | ✅ Yes (10+ income methods) | ✅ **Yes — deepest non-QM matrix in the space** | ❌ No diagnostic — human call only |
| **Angel Oak (retail)** | ✅ Yes (single-page form) | ❌ | ✅ Yes (15 programs) | ✅ Yes (DSCR, bank-statement, asset-qualifier, ITIN, FN, 1099, Portfolio Select for credit events) | ❌ No denied-borrower UX |
| **Deephaven** | ❌ B2B only (brokers + correspondents) | ❌ | ✅ Yes (8+ product families) | ✅ Yes (Expanded-Prime, Non-Prime, DSCR, ITIN, HELOC, etc.) | ❌ Never asked — routes to broker |

### 2.2 Lead Capture Mechanics

| Lender | Step count | Time to complete | First credit pull | Has progress bar / save-and-resume? |
|---|---|---|---|---|
| **Better.com** | ~5–7 screens | ~3 min claimed | Soft pull (Credco/Experian FICO 2) | ❌ No progress bar |
| **SoFi** | 11 steps | ~2 min claimed | Soft pull (after review_info) | ❌ |
| **Figure** | ~20 steps | ~5 min claimed | Soft pull (Experian) | ❌ (React SPA, but no save-and-resume) |
| **Tomo** | 20 steps (`RATE_QUOTE → SUBMIT`) | "minutes" | Soft pull (Equifax) after SMS MFA | ❌ |
| **Loanai** | n/a | n/a | n/a | n/a |
| **Rocket Pro** | n/a (B2B) | n/a | n/a | n/a |
| **Homepoint** | 14–22 questions | 3–6 min | None (no SSN asked) | ❌ No progress bar |
| **Newfi** | 3 steps | ~60-90 sec | None | n/a |
| **Angel Oak (retail)** | 1 step (12 fields) | ~90-120 sec | None | n/a |
| **Deephaven** | 1 step (5 fields) | 30–90 sec | None | n/a |

### 2.3 Self-Employed vs W-2 Handling

| Lender | Self-employed at prequal? | Tax return required? | Bank-statement option? | P&L option? | 1099-only option? | ITIN option? | Foreign National? |
|---|---|---|---|---|---|---|---|
| **Better.com** | Same flow, 2-yr tax returns at verified | ✅ Yes | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No |
| **SoFi** | No question at prequal, 1099 verified offline later | ✅ Yes | ❌ No | ❌ No | ❌ No | ❌ No | ❌ No |
| **Figure (HELOC)** | ✅ Yes — **dedicated UI path** | ⚠️ Optional (Plaid link or TurboTax) | ✅ Yes (Plaid checking/business) | ❌ | ✅ (Plaid for 1099) | ⚠️ | ⚠️ |
| **Tomo** | ✅ Yes (3 income tiles) | ✅ Yes (same as W-2 flow) | ❌ No | ❌ No | ❌ No | ⚠️ Call to apply | ❌ No |
| **Loanai** | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| **Rocket Pro** | Yes (wholesale broker handles) | ✅ Yes (24-mo bank statements + business license + tax preparer letter + SOS filing + proof of ownership) | ✅ Yes (but extensive) | ❌ | ❌ | ❌ | ❌ |
| **Homepoint (small brokers)** | Single Y/N question, routes offline | ✅ Yes (2-yr tax returns + corporate + P&L) | ✅ Yes (via the brokers) | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Newfi** | ✅ Yes (10+ income methods) | ⚠️ Optional | ✅ Yes (12/24-mo) | ✅ Yes (CPA P&L) | ✅ Yes | ✅ Yes (IRA) | ✅ Yes (DSCR-FN) |
| **Angel Oak (retail)** | Yes (Y/N in form) | ⚠️ Optional (bank statement, 1099) | ✅ Yes | ✅ Yes | ✅ Yes (single source, 90% LTV) | ✅ Yes (640+ FICO, 80% LTV) | ✅ Yes (NA FICO, 70% LTV) |
| **Deephaven** | Yes (via broker) | ⚠️ Optional (12/24-mo bank statements or full doc) | ✅ Yes (12 or 24 months) | ✅ Yes (CPA-prepared, 1-year P&L up to 70% LTV/$2M) | ✅ Yes (1099 + YTD bank statements) | ✅ Yes ($1.5M max, 680+ FICO, 80% LTV) | ✅ Yes |

### 2.4 What Each Lender Says When You're Denied (or "Can't Qualify")

| Lender | The denied experience (verbatim where possible) | Diagnostic on site? | Alt-path routing? | Timeline to re-apply? |
|---|---|---|---|---|
| **Better.com** | A 23-word modal: *"Something isn't adding up — Based on that it might be tough to get a loan. See if you have any wiggle room or read our article for more help."* Then links to `/content/mortgage-application-denied` (generic blog). | ❌ No | ⚠️ Generic: "ask your realtor for lender recommendations… add a co-borrower… apply for government-backed loans." | ❌ No |
| **SoFi** | A single line: *"Based on the information you provided, we aren't able to show current rates. A Loan Officer will be in touch…"* + a phone number. Eligibility error codes (`MAXIMUM_LTV`, `MINIMUM_AMOUNT`, `MAXIMUM_JUMBO_AMOUNT`, `CASHOUT_LTV`, `UNSUPPORTED_STATE`, `CREDIT_DECLINED`, `CREDIT_INELIGIBLE`, `LOAN_AMOUNT_OVER_LIMIT`, `NO_ELIGIBLE_PRODUCTS`) are buried in the React but never surfaced. | ❌ No | ❌ No | ❌ No |
| **Figure** | Two specific decline components: `credit-score-decline-container` and `dti-decline-container`. For credit: "invite other individuals on title to apply or re-apply in the future." For DTI: "include total annual gross income for your household including retirement, investment, or rental income." **Plus a "winback" page** for the near-miss mortgage-payoff path: "Pre-qualify for up to $X by paying off your existing mortgage" with a 1–2 lien multi-select. **If both decline paths fail, the user is routed to a "Thank you for your application" page with affiliate partner cards** (Point, BusinessLoans.com, Unlock, New American Funding, Freedom Debt Relief, West Capital Lending) — **monetized lead-gen arbitrage**. | ❌ No | ⚠️ Winback (mortgage-payoff only) | ❌ No |
| **Tomo** | **3 actual denial screens in the React bundle:** (1) `DTIEligibilityRed`: *"Sorry, we're unable to complete a loan at this time. The debt-to-income calculated is [X]%. Tomo Mortgage requires a DTI below 43% in order to complete a loan request. Let's try again soon."* — Recovery: *"Go back and add it [income] to see if the income information then meets requirements."* (2) `AssetsEligibilityRed`: *"Sorry, we're unable to complete a loan at this time. The down payment sources provided do not cover the minimum, 5–10% of the purchase price, required for down payment."* (3) `CreditError`: Two sub-screens — "Credit frozen" and "Credit check failed" (*"Some common issues that may have occurred: low credit score (below 580), late mortgage payments, bankruptcy or forbearance"*). **No denial screen for: FICO < 580 path, BK/FC seasoning, LTV/PMI, employment gap, self-employed income docs, property eligibility, occupancy eligibility, layered risk, reserves.** | ❌ No | ⚠️ Recovery: "Go back" only | ❌ No |
| **Loanai** | n/a (parked domain) | n/a | n/a | n/a |
| **Rocket Pro** | **No consumer-facing denied UX** — broker channel. The only mention of "denied" in the entire site is in the Data Partners retention policy. **VantageScore 4.0 (live June 9, 2026)** is the meaningful re-qualification lever. | ❌ No | n/a | n/a |
| **Homepoint** | **No "you might not qualify" message anywhere.** The only nod to ineligibility is the "BK/FC/SS doesn't mean you can't get a loan" helper text. The reverse-mortgage age question offers "Less Than 62" with zero follow-up. Just submits. | ❌ No | ❌ No | ❌ No |
| **Newfi** | **Zero "you don't qualify but here's why" UX anywhere.** The 3-step booking form is the ONLY pre-application intake — explicitly positions against "mortgage robots." | ❌ No | ❌ No | ❌ No |
| **Angel Oak (retail)** | **Zero denial messaging anywhere on the retail site.** | ❌ No | ❌ No | ❌ No |
| **Deephaven** | **The site never tells a borrower "you don't qualify" because the site never asked them whether they qualify.** | ❌ No | ❌ No | ❌ No |

### 2.5 Trust Signals

| Lender | NMLS | Big trust anchors | Where the trust signal fails the denied borrower |
|---|---|---|---|
| **Better.com** | #330511 | $100B+ funded, 400K+ customers, WSJ Best Lender, Forbes Best Online, BBB A+, Betsy AI, 0% LO commission, Better Price Guarantee | The Better Price Guarantee and BBB A+ are buying-time signals, not denial-help signals |
| **SoFi** | SoFi Bank N.A. | FDIC, 4.9/5 from 1,720 reviews, CNBC Select Top Lender | Member discounts are gated to existing members; no help-center content for denied |
| **Figure** | (Figure Lending LLC) | Provenance Blockchain, S&P AAA for blockchain assets, first SEC-registered blockchain-native stock, Plaid + reCAPTCHA, 5-star Trustpilot | Blockchain is investor-facing; not a denied-borrower signal |
| **Tomo** | #2059741 | Bankrate "Best Online Lender 2025/2026", Trustpilot/Bankrate/Zillow/Google/WalletHub/BBB/ConsumerAffairs, $70M seed (Progressive Insurance, Metaprop, Ribbit, DST, NFX) | Trustpilot page shows individual LO reviews, not denial outcomes |
| **Loanai** | n/a | n/a | n/a |
| **Rocket Pro** | #3030 | 2nd-largest wholesale (IMF), 50-state, Rocket Companies (RKT), 40 years, $100M+ tech | Trust is broker-facing; consumer never sees the portal |
| **Homepoint** | #2616258 (UT broker), #1945093 (CA broker) | NMLS, TCPA, Privacy, state disclosures. **No BBB/Trustpilot, no reviews widget, no officer bios/photos, no "as seen in", no security badges, no volume counter.** | The "denied-borrower-success" testimonial is on the unrelated mortgagedepot.com |
| **Newfi** | #1231327 | $11.5B funded, 4.9/5, 80% pull-through, NMP 2026 Bank Statement Lender, Meridian Link ARC Award | Trust is built for the broker, not the consumer; the consumer gets a phone call |
| **Angel Oak** | #1160240 | 50+ branch locations, 20 named advisors, Angel Oak Companies parent (50+ securitizations) | Single 12-field form has no reviews widget; the testimonials don't include denied-borrower stories |
| **Deephaven** | #958425 | 1,000+ brokers, 200+ correspondents, MPA Top Mortgage Employer, #1 Workplace Charlotte NC, NY opt-out on every page | Single testimonial is from a broker, not a borrower |

### 2.6 SEO Strategy Comparison

| Lender | Sitemap pages | Programmatic SEO approach | Denied-borrower keywords owned? |
|---|---|---|---|
| **Better.com** | ~50 state pages for mortgage calculator | Meta description + state pages + topical content silos | ❌ Zero ("denied", "rejected", "second-chance", "non-QM", "bank-statement loan" all 404) |
| **SoFi** | **2,341 pages / ~500+ mortgage-related** | `mortgage-rates-in-<state>/`, `<city>-mortgage-calculator/`, `first-time-home-buyer-programs-in-<state>/`, `<state>-mortgage-refinance-calculator/`, `<city>-jumbo-loan-calculator/`, `<state>-home-equity-loan-calculator/` | ❌ Zero |
| **Figure** | 577 URLs | Persona + state + use-case fan-out (heloc-for-debt-consolidation, heloc-for-business, heloc-in-arizona/california/florida/texas) + "didn't get HELOC offers" (real denied-borrower post-mortem page) | ⚠️ One page on "didn't get HELOC offers" — but no diagnostic |
| **Tomo** | **~175+ pages** | `/interest-rates-today/<state>` (41), `/rates/<city>-<state>` (45+), `/rates/fha-loans/<city>-<state>` (45+), `/rates/va-loans/<city>-<state>` (8 military-base-targeted), 6 product pages, `/affordability`, `/blog` | ❌ Zero ("denied", "self-employed", "dti-calculator", "fha-eligibility", "first-time-homebuyer" all 404) |
| **Loanai** | n/a (parked) | n/a | n/a (but the *keyword* "loanai" is uncontested) |
| **Rocket Pro** | (B2B) | TPO keywords: "Rocket Pro TPO", "wholesale mortgage", "broker partner", "Rocket Pro University", "Rocket Connect", "Pathfinder", "Vendor Marketplace", "The Big Pitch", "Pinnacle Partners", "Bully Shield" | ❌ Zero consumer-facing denied content |
| **Homepoint (small brokers)** | Etrafficers template | `/loan-programs/{conventional,fha,va,usda,jumbo,reverse,dscr,construction,non-qm,refinance,foreign-national,commercial}-loans` × `/get-a-quote/{purchase,refi,fthb,reverse,va-loans}` × `/mortgage-information/{faq,requested-documents,loan-process,calculators,glossary,news}` | ⚠️ Targets "self-employed mortgage", "bank statement loan", "DSCR loan", "ITIN loan", "foreign national", "no income check", "1% down" — but no diagnostic UX |
| **Newfi** | **139 consumer + 52 wholesale + 76 blog posts** | 27 `/dscr-loans/{state}/` pages, 5+ state bank-statement pages, 76 blog posts (DSCR, non-QM, self-employed, bank statement, 1099, W-2-to-1099) | ⚠️ Targets DSCR, non-QM, self-employed, bank statement keywords (proactive intent), but **zero reactive "Why was I denied" content** |
| **Angel Oak** | 263 retail + 50+ paid-media `/cd/*` landing pages | 50+ state, 30+ city, 50+ paid-media (Bing, Meta, Yahoo, Reddit, JustAnswer), 15 product, 30+ webinar-replay | ❌ Zero ("denied mortgage", "didn't qualify for mortgage", "non-QM after denial" all 404) |
| **Deephaven** | 50 state + ~30 blog + ~10 program pages | Programmatic local SEO: `/non-qm-lender-{state}/` × 50 (one per state + DC), 30 blog posts, 10 product pages | ⚠️ Targets "Non-QM lender", "Self-employed mortgage", "Bank statement loan", "DSCR loan", "ITIN mortgage", "Asset Utilization mortgage", "Non-warrantable condo loan", "Expanded-Prime mortgage", "Foreign National mortgage" — but the consumer is routed to a broker contact form |

---

## 3. The "Why Can't I Qualify?" Diagnostic Opportunity — Cross-Cutting Synthesis

### 3.1 What NONE of the 10 lenders do (the universal gap)

Across every lender studied, the following **are all missing** — meaning the diagnostic owns this space by default:

1. **No "you don't qualify, but here's the binding constraint" explanation.** Even Tomo, which has 3 actual denial screens, just says *"Sorry, we're unable to complete a loan at this time"* with a back-button.
2. **No "and here's what would have to change for you to qualify" rebalance scenario.** No DTI slider, no FICO-band simulator, no LTV slider, no debt-paydown calculator that returns a re-qualification date.
3. **No cross-program routing in the failure moment.** When Conv fails, no one says "you qualify for FHA at 580 / VA at 620 / USDA at 640 / non-QM at 620 with bank statements / DSCR for investors / ITIN for foreign nationals / HELOC if you have equity."
4. **No timeline-to-re-qualification math.** No one says "you can re-apply for FHA in March 2027" (4 years after BK discharge) or "Chapter 13 BK allows FHA at 1 year into the plan with trustee approval" or "if you pay down this $5K card, your utilization drops from 47% to 28% and your FICO likely rises 30–50 points in 1–2 cycles."
5. **No capture of the lead at the failure point.** Most fail to capture email + phone at the "here's why you don't qualify" screen, even though that lead is the most qualified for a future re-application.
6. **No consumer-facing "VantageScore 4.0" / "FCRA medical-collection exclusion" / "newer scoring models" content.** The VantageScore 4.0 update (live June 9, 2026) is a major re-qualification lever no one is telling denied borrowers about.
7. **No "your adverse action notice says X, here's the regulatory language decoded"** translator. The CFPB requires adverse-action notices within 30 days, but most borrowers can't parse them.
8. **No multilingual/Spanish version of any denied-borrower flow.** A diagnostic that does this owns the largest underserved non-QM segment in CA, TX, FL.
9. **No "co-borrower / add-a-spouse" simulator at the prequal stage.** This is the single most common rescue, and none of the 10 lenders surface it in the failure UX.
10. **No "what credit score do you actually need for THIS specific loan" calculator** at the program level. Each program (Conv, FHA, VA, USDA, Jumbo, non-QM, DSCR, HELOC, bank-statement) has different thresholds (some 500, some 580, some 620, some 660, some 680, some 700), and no one helps the borrower know which one is within reach.

### 3.2 What SOME of the 10 lenders do well (and the diagnostic should benchmark)

| Pattern | Who does it well | What the diagnostic should copy |
|---|---|---|
| **True soft-pull prequal with explicit FCRA copy** | **Tomo** — *"I grant permission for Tomo Mortgage to run my personal credit report (a soft credit check) from Equifax... We do this solely for mortgage prequalification for credit."* + "No hard credit check" callout | Adopt the same FCRA-compliant soft-pull consent, **with an anonymous no-SSN option for rate exploration** (Tomo has this for rate, not for qualification). |
| **Affordability range, not single false-precision number** | **Tomo** — returns "Very affordable" / "Upper limit" rather than a single dollar figure | The diagnostic should return **a range of qualifying loan amounts, not a single number** — the difference between a denied and a qualified borrower is often a $20K–$50K range, not a binary. |
| **Buy-a-lower-rate slider with live break-even math** | **Tomo** — *"It will take you 4 years to recoup the cost. Only do this if you plan to stay in your home for more than 4 years and don't refinance."* | The diagnostic should let the user **simulate rate-buy-down, point-buy-down, and term changes live with break-even math** (when do you recoup the cost?). |
| **3 explicit income tiles** | **Tomo** — "Employed (W-2)" / "Self-employed" / "Retirement" | The diagnostic should adopt the same 3-tile branching but **add sub-segments**: 1099 only (no W-2), K-1 partner, S-Corp owner, C-Corp owner, sole prop Schedule C, gig contractor. |
| **Cryptocurrency and alt-asset handling** | **Better.com** (Coinbase Prime) + **Figure** (Crypto-Backed Loan BTC/ETH/SOL) | The diagnostic should treat crypto as a down-payment source (with haircut), not a denier. |
| **First lien / second lien blended-rate option** | **Deephaven** (Blended Rate Calculator) + **Figure** (mortgage-payoff winback) | The diagnostic should help a borrower see *"keep your 3% first mortgage, add a HELOC at 8% as a 2nd — blended rate 5.2% vs. a 6.5% cash-out refi"* — this is often the optimal path. |
| **W-2-to-1099 income day-one eligibility** | **Newfi** (W-2-to-1099 program counts 100% of 1099 income day one with offer letter + first pay stub) | The diagnostic should flag this program specifically when a borrower says *"I just switched from W-2 to 1099, my tax returns are bad, but I have an offer letter."* |
| **Asset Depletion / Asset Utilization** | **Deephaven** (60% of eligible assets, DTI or no-DTI, 660+ FICO, 80% LTV) + **Newfi** (Assets / 60 = qualifying income) + **Angel Oak** (Asset Qualifier, no employment/income/DTI, $500K+ post-close assets) | The diagnostic should compute **asset-depletion qualifying income** in real time and route to the right program. |
| **DSCR for investors (no personal income)** | **Deephaven** + **Newfi** + **Angel Oak** + **Rocket Pro** (in 1% of mentions) | The diagnostic should branch to DSCR when a borrower is buying an investment property and the question is "do I need to document my personal income?" |
| **ITIN handling** | **Deephaven** + **Newfi** + **Angel Oak** — all 680+ FICO, 80% LTV, bank-statement or 1-yr P&L | The diagnostic should specifically route ITIN borrowers to these three lenders (and to brokers who use them). Tomo and Better both refuse. |
| **Co-borrower support** | **Better.com** (the only one of the 4 majors to support co-borrower in the soft-pull stage) | The diagnostic should let a borrower **add a co-borrower live and re-run the qualification** — the single most common rescue. |
| **Trustpilot + named loan advisors with NMLS numbers** | **Tomo** (5 named LOs with NMLS on the press page) + **Angel Oak** (20 named advisors with NMLS IDs) | The diagnostic's handoff should connect to a **named human LO with a verifiable NMLS**, not a generic 800 number. |
| **"1/3 of all loans have at least one exception"** | **Newfi** — published on About, Rates, and Income IQ pages | The diagnostic should teach the borrower that **exceptions exist and that manual underwriting is a real path** — most denied borrowers don't know this. |
| **State-specific SEO capture** | **Deephaven** (50 state pages), **Tomo** (175+ state + city), **SoFi** (500+ mortgage pages), **Homepoint brokers** (state-by-state), **Newfi** (27 state DSCR pages) | The diagnostic should have a state-by-state page for "what mortgage can I get in {state}" with the actual state-specific FICO/DTI/LTV limits, license lookup, and DPA programs. |

### 3.3 What each lender teaches the diagnostic about positioning

| Lender | Lesson |
|---|---|
| **Better.com** | The slick 3-min pre-approval with a single denied-modal is the **anti-pattern**. The diagnostic's positioning is the opposite: "Better didn't tell you why. We will." |
| **SoFi** | The $10K On-Time Close Guarantee is industry-leading trust. The diagnostic should adopt a similar **money-back guarantee for accurate diagnosis** ("if our reason-code mapping is wrong, we'll refund the diagnostic fee"). |
| **Figure** | The mortgage-payoff winback page is the **only true near-miss UX in the top 10**. The diagnostic should adopt this pattern for every lender — *"if you do X, you qualify for Y"*. |
| **Tomo** | The 3 denial screens prove that denial UX is technically possible. The diagnostic should adopt the **per-reason screen pattern** but with 10x the content: guideline citation, scenario simulator, alt-program routing, and a shareable re-apply plan. |
| **Loanai** | A parked domain is a lesson: even the name "Loanai" is uncontested. The diagnostic should **own the keyword "AI loan qualification"** before any AI-driven lender does. |
| **Rocket Pro** | B2B platforms have an enormous lead-gen asymmetry — 43,000 LOs, 2nd wholesale. The diagnostic should position as a **borrower-side pre-filter** that helps borrowers arrive at a Rocket Pro broker (or any other broker) **already pre-qualified against multiple programs**, so the broker call is more efficient. |
| **Homepoint** | The brand is fractured. A borrower with a 2022-era Homepoint denial letter is dealing with a defunct originator. The diagnostic should **decode legacy denial letters from defunct lenders** ("Homepoint denied you in 2022, but the wholesale unit was sold to The Loan Store, and UWM now services; here's what to do now"). |
| **Newfi** | The "1/3 of loans have exceptions" claim + the "human-first" positioning is a **teaching moment** — exceptions exist, but the diagnostic's job is to surface them without requiring a phone call. |
| **Angel Oak** | The 15-product matrix is a **catalog of alt-paths**. The diagnostic should expose this catalog at the moment of denial — *"you didn't qualify for Conv, but Angel Oak's Portfolio Select at 640+ FICO with 1-year BK seasoning is a match."* |
| **Deephaven** | The "**circles, not boxes**" / "**Turn a No into a Yes**" / "**Lending Ingenuity**" reframe is the best denial-reframe copy in the space. The diagnostic should adopt this voice. |

### 3.4 The diagnostic's 30/60/90-day roadmap (synthesized from all 10 reports)

#### MVP (30 days) — the "Why am I denied?" core

- **3 soft-pull denied-borrower journeys:** (a) "My DTI is too high," (b) "My credit is too low," (c) "I'm self-employed and my tax returns don't qualify me."
- **2 input-only journeys** (no credit pull): (a) "I have a denial letter — what does it mean?", (b) "I'm thinking of applying — what would I likely qualify for?"
- **1 calculator:** Affordability range (Tomo-style) with a binding-constraint label.
- **Output:** A single PDF "**Your Mortgage Qualification Snapshot**" that includes the binding constraint, the guideline, the 3 alternative programs the borrower likely qualifies for, the 30/60/90-day remediation plan, and a 1-click handoff to a named human LO with an NMLS ID.

#### V1 (60 days) — the cross-lender matrix

- **Lenders in matrix:** Better, SoFi, Figure (HELOC), Tomo, Rocket (via broker), UWM (via broker), Newfi, Angel Oak, Deephaven, +2 regional non-QM.
- **Per-lender rules:** FICO floor, DTI cap, LTV cap, loan-amount cap, income-doc method, seasoning requirements, reserves requirement, occupancy rules, property-type rules.
- **State overlay:** 50 state pages, each with state-specific FICO/DTI/LTV limits, license lookup, DPA programs, HFA links.
- **Output:** A "**You qualify with**" ranked list of 1–5 lenders + "**You might qualify with**" 5–10 (with the specific constraint that's in the way) + "**You don't qualify with**" 5–10 (with the specific binding constraint).

#### V2 (90 days) — the live decisioning

- **Real-time credit-bureau soft pull** (Plaid + Experian or MicroBilt).
- **Real-time cross-program decisioning** against 30+ program matrices.
- **Real-time scenario simulator** (co-borrower add, debt-paydown, down-payment increase, term change, ARM vs. fixed, point-buy-down).
- **Real-time handoff** to named LOs with NMLS IDs at 3–5 specific lenders that match the borrower's profile.
- **SEO content play:** 50 state + 100 city + 50 program pages targeting *"why can't I qualify for a mortgage in {state}"*, *"denied mortgage in {city} — what to do"*, *"self-employed mortgage denied — alternatives"*, *"bank statement loan denied — what next"*, *"after bankruptcy mortgage"*, *"after foreclosure mortgage"*, *"high DTI mortgage"*, *"low credit mortgage"*, *"ITIN mortgage denied"*, *"DSCR loan denied"*.

---

## 4. Files Produced (Master Index)

| # | Lender | Primary report | Lines |
|---|---|---|---|
| 1 | **Better.com** | `/root/Website/Why am i denied/BETTER_COM_RESEARCH_REPORT.md` | 676 |
| 2 | **SoFi** | `/root/Website/Why am i denied/sofi_research_report.md` | 525 |
| 3 | **Figure** | `/root/Website/Why am i denied/research/REPORT.md` | 778 |
| 4 | **Tomo** | `/root/Website/Why am i denied/02-Competitor-Research/tomo-mortgage.md` | 624 |
| 5 | **Loanai** | `/root/Website/Why am i denied/loanai_research_report.md` | 162 |
| 6 | **Rocket Pro** | `/root/Website/Why am i denied/research/rocket-pro/REPORT.md` | 571 |
| 7 | **Homepoint** | `/root/Website/Why am i denied/research/homepoint_research_report.md` | 1,200+ |
| 8 | **Newfi** | `/root/Website/Why am i denied/02-Competitor-Research/newfi.md` | 737 |
| 9 | **Angel Oak** | `/root/Website/Why am i denied/02-Competitor-Research/angel-oak-mortgage-solutions.md` | 607 |
| 10 | **Deephaven** | `/root/Website/Why am i denied/research/REPORT.md` (Deephaven section, ~80% of file) | (shared with Figure) |
| **Total** | | | **~5,800 lines / ~500KB** |

**Backup files (raw HTML/JS/sitemaps/JSON):** Every subagent saved raw HTML, JS bundles, sitemaps, and JSON payloads to `/tmp/` and `/root/Website/Why am i denied/research/` for reproducibility.

**Method:** All findings are sourced from the production HTML/JS the lenders actually serve, not from search snippets. `web_search` returned an auth error in this session, so the research was done via direct HTTP fetch (Node `https` and `undici`).

---

## 5. The Single Sentence That Sums It All Up

**Across all 10 U.S. fintech mortgage lenders studied, not one of them has a real "why can't I qualify?" diagnostic — the best in class (Tomo) has 3 denial screens that say "Sorry, we're unable" with a back button, and the worst (Loanai) is a parked domain — meaning the "Why am I denied" diagnostic owns this entire product category by default.**
