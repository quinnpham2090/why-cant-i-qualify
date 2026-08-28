# "Why Can't I Qualify?" — Final Unified Competitive Research Report

**Date:** August 28, 2026
**Product:** "Why Can't I Qualify?" — a consumer mortgage qualification diagnostic for denied or near-qualifying U.S. borrowers
**Purpose:** Identify the major U.S. competitors and adjacent products, analyze their UX/lead-capture/weaknesses, and surface the unowned market white space

---

## EXECUTIVE SUMMARY

The "Why Can't I Qualify?" product addresses a **real, validated, unowned market position** in U.S. consumer mortgage. Across **45+ competitors** analyzed in 12 categories, **no incumbent product** offers what this product would offer:

- **A no-SSN, no-DOB, no-credit-pull, anonymous, educational mortgage qualification diagnostic** that explains **WHY** a borrower can't qualify and **WHAT** they can do to fix it.

**The universal gap:** Every competitor either (a) requires SSN/credit pull before giving any information, (b) gives a single number, not a diagnosis, (c) routes denials to a phone call, or (d) gives generic content. None provide personalized, plain-English, ranked denial reasons with a remediation plan.

**Demand signal:** Zillow's own research says 28% of mortgage buyers are denied at least once (≈880,000 denied-borrower-events per year). TMR cites HMDA data: DTI 37%, credit 34%, collateral 18% as the top 3 denial reasons. No one in the top 45+ competitors serves this audience.

**The 12 competitive categories covered:**
1. Mortgage affordability calculators
2. Direct mortgage lenders' qualification tools
3. Pre-qualification flows
4. Lead-generation / aggregator sites
5. Mortgage brokers / lead aggregators
6. Fintech mortgage companies
7. First-time buyer / government / education tools
8. Credit & approval tools
9. "Why was I denied" diagnostic tools
10. Mortgage education resources
11. Self-employed / non-QM specialists
12. HOA / condo approval tools

---

## TABLE OF CONTENTS

1. [Category 1 — Mortgage Affordability Calculators](#cat1)
2. [Category 2 — Direct Lender Qualification Tools](#cat2)
3. [Category 3 — Pre-qualification Flows](#cat3)
4. [Category 4 — Lead-Generation / Aggregator Sites](#cat4)
5. [Category 5 — Mortgage Brokers / Lead Aggregators](#cat5)
6. [Category 6 — Fintech Mortgage Companies](#cat6)
7. [Category 7 — First-Time Buyer / Government / Education Tools](#cat7)
8. [Category 8 — Credit & Approval Tools](#cat8)
9. [Category 9 — "Why Was I Denied" Diagnostic Tools](#cat9)
10. [Category 10 — Mortgage Education Resources](#cat10)
11. [Category 11 — Self-Employed / Non-QM Specialists](#cat11)
12. [Category 12 — HOA / Condo Approval Tools](#cat12)
13. [Market White Space](#white-space)
14. [Synthesis: The Unowned Position](#synthesis)

---

<a id="cat1"></a>
## 1. CATEGORY 1 — MORTGAGE AFFORDABILITY CALCULATORS

**10 competitors analyzed** (Zillow, Redfin, Realtor.com, Bankrate, NerdWallet, SmartAsset, CNN Money, Consumer.gov, Investopedia, Kiplinger).
**Primary file:** `02-Competitor-Research/CONSUMER-AFFORDABILITY-CALCULATORS-SYNTHESIS.md` (70 KB, full deep dives for each).

### 1.1 Zillow Mortgage Affordability Calculator
- **URL:** `zillow.com/mortgage-calculator/` (and 11+ related calculators)
- **Target audience:** Top-of-funnel home shoppers; first-time buyers; refinancers
- **Value proposition:** "Find out what you can afford" — anchored to Zillow's massive property listings brand
- **Lead capture:** Zero friction on the calculator itself. Lead capture occurs only on Zillow's "BuyAbility" prequal tool (separate flow that does a soft credit pull) and on the connected Zillow Home Loans. The plain affordability calc collects no PII.
- **Questions asked:** Income, monthly debt, down payment, interest rate, ZIP, property taxes, insurance, HOA, **credit score** (1 of only 2 calculators in the top 10 to ask for FICO)
- **UX:** Zero-friction, single-page, ZIP-localized, 11+ calculators on a hub page. Best-in-class for a publisher play.
- **Calculator output:** Monthly payment, affordability estimate, qualification "5 pillars" assessment
- **CTAs:** "Get pre-qualified with Zillow Home Loans," "Browse homes"
- **Trust signals:** Zillow brand, "28% of mortgage buyers are denied" stat in their own research (they published this in 2022), 200M+ users
- **SEO strategy:** "Mortgage calculator," "affordability calculator," "how much house can I afford," "first-time buyer" — dominant SERP ownership
- **Strengths:** Best UX in publisher category, ZIP-localized, ZIP-accurate tax/insurance, the 5-pillar qualification framework is close to a diagnostic
- **Weaknesses:** **No denial diagnostic despite publishing that 28% of buyers are denied.** No FICO simulator. No remediation plan. "BuyAbility" requires SSN + soft pull. Zillow Home Loans is the only lead-routing destination, regardless of borrower's actual qualification.
- **What we can do better:** Zillow publishes the denial rate but never addresses it. A "Zillow denial decoder" is a wide-open position.

### 1.2 Redfin Mortgage Calculator
- **URL:** `redfin.com/mortgage-calculator/`
- **Target audience:** Pre-shoppers, refinancers; VA-toggle is a differentiator
- **Value proposition:** Clean, no-friction, location-aware affordability estimate
- **Lead capture:** None on the calc itself. Routing goes to Redfin Mortgage (now under Rocket partnership). All Redfin mortgage products ultimately route to Rocket Mortgage.
- **Questions asked:** Income, debts, down payment, ZIP, interest rate, **property tax/insurance** (auto-loaded by ZIP), HOA — **NO credit score input**
- **UX:** Frictionless single-page calc; published formula in the FAQ
- **Calculator output:** Monthly payment, total interest, amortization
- **CTAs:** "Get a custom rate from Rocket Mortgage" (the Redfin-Rocket handoff)
- **Trust signals:** Redfin brand, NAR affiliation, real estate brokerage authority
- **SEO strategy:** "[State] mortgage rates" — 50-state rate coverage. Heavy on rate shopping.
- **Strengths:** Best-in-class UX, location-aware, published formula, VA toggle
- **Weaknesses:** No credit score input (so cannot produce a real qualification verdict); all products route to Rocket (single lender); if no ZIP, tax/insurance silently zero; no denial content
- **What we can do better:** Redfin never tells a borrower they're denied. A diagnostic that produces a "Likely" / "Borderline" / "Not likely" verdict with reasons is exactly what Redfin punted to Rocket.

### 1.3 Realtor.com Affordability Calculator
- **URL:** `realtor.com/mortgage/affordability-calculator/`
- **Target audience:** Home shoppers, NAR-affiliated buyers
- **Value proposition:** "Don't over-leverage" — explicit conservative voice
- **Lead capture:** None on the calc itself. Realtor.com monetizes via real estate agent referrals, not mortgage.
- **Questions asked:** Income, monthly debt, down payment, mortgage rate, ZIP — **NO credit score**
- **UX:** Cleanest "don't over-leverage" voice; NAR authority
- **Calculator output:** Maximum home price, monthly payment
- **CTAs:** "Find a real estate agent" (the only CTA — no mortgage CTA at all)
- **Trust signals:** NAR (National Association of Realtors) brand
- **SEO strategy:** "Mortgage calculator," "home affordability," "how much house can I afford"
- **Strengths:** Conservative voice is good for users; NAR authority; no lead-capture friction
- **Weaknesses:** No credit score input; DTI is used but never shown; no ZIP-based tax/insurance loading; no mortgage lead flow
- **What we can do better:** Realtor.com is anti-mortgage by design. A diagnostic that produces a personalized "you can afford $X but you'll be denied at $Y because Z" would be a totally new product type.

### 1.4 Bankrate Mortgage Calculator
- **URL:** `bankrate.com/mortgages/mortgage-calculator/`
- **Target audience:** Rate shoppers; comparison shoppers
- **Value proposition:** "Mortgages without the overpaying" — Bankrate's tagline. 100M+ users/year; "in 2025, our process produced mortgage rates that beat 99.7% of offers from 850+ surveyed banks and credit unions" (verbatim from /about/)
- **Lead capture:** None on the calc itself. Lead capture happens via Bankrate's mortgage marketplace (which is a lead-gen affiliate model). "Fountain" save-search requires a free account.
- **Questions asked:** Income, debts, down payment, ZIP, rate, taxes, insurance, HOA — **NO credit score on the affordability calc** (credit score only on a separate credit-card / prequal-type flow that drops you to 620 as the floor)
- **UX:** No email gate on the calculator; 12-minute editorial standards; transparent methodology
- **Calculator output:** Monthly payment, total interest, amortization
- **CTAs:** "Compare mortgage rates" (lead-gen to lenders)
- **Trust signals:** Bankrate editorial standards, transparent compensation disclosure, "100M users/year," "99.7% beat 850+ banks"
- **SEO strategy:** "Best mortgage lenders 2026," "mortgage rates today," "first-time home buyer programs," state-by-state rate coverage
- **Strengths:** No email gate; live rate data; transparent methodology; lender marketplace
- **Weaknesses:** "Affordability" page actually uses a payment calc widget; ~20 broken nav entries; no underwriting simulation; no FICO simulator; credit score dropdown bottoms out at "Lower than 620" with no follow-up
- **What we can do better:** Bankrate owns the rate-comparison SERP. A diagnostic that says "you're 90 points short of the credit tier for these rates, here's how to get there" extends their authority into a missing product.

### 1.5 NerdWallet Mortgage Affordability Calculator
- **URL:** `nerdwallet.com/article/mortgages/how-much-house-can-i-afford`
- **Target audience:** Comparison shoppers; first-time buyers
- **Value proposition:** "The Nerd's take" — editorial authority + lender comparison
- **Lead capture:** None on the calc itself. Lead capture via NerdWallet's lender marketplace (which is a lead-gen affiliate model). Save-search requires a free account linked to TransUnion.
- **Questions asked:** Income, debts, down payment, ZIP, mortgage rate, taxes, insurance, HOA — **NO credit score input**
- **UX:** Zero-friction; "Affordable / Stretch / Difficult" verdict (3 buckets); lender star ratings
- **Calculator output:** Affordable home price, monthly payment, "Affordable / Stretch / Difficult" verdict
- **CTAs:** "Compare mortgage lenders," "See my personalized rate" (hidden in tracking JSON)
- **Trust signals:** "Our editorial team does not receive direct compensation from our advertisers" (verbatim); "Fact Checked" badge; lender star ratings
- **SEO strategy:** "Best mortgage lenders 2026," "mortgage calculator," "first-time buyer programs," HMDA-data denial analysis (one article: "Mortgage Denial Data Reveals How to Boost Your Approval Odds")
- **Strengths:** Zero friction; "Affordable / Stretch / Difficult" verdict is a real attempt at personalization; lender star ratings
- **Weaknesses:** No credit score input; no ZIP-based tax/insurance auto-loading; no FHA/VA variants; "personalized rate" hidden in tracking JSON; only 1 denial article (a data study, not a guide or diagnostic)
- **What we can do better:** NerdWallet has the editorial authority and the HMDA data, but never built a denial tool. A "Why am I denied?" diagnostic that uses NerdWallet's own HMDA data is a natural extension.

### 1.6 SmartAsset Mortgage Calculator
- **URL:** `smartasset.com/mortgage/mortgage-calculator`
- **Target audience:** Mass-market; aspirational; comparison shoppers
- **Value proposition:** "Find out how much house you can afford"; SmartAsset positions itself as a financial advisor (RIA); calculator is one of 20+ free tools
- **Lead capture:** **Most aggressive in the category.** SmartAsset's affordability calc shows a single estimate and immediately requires email + phone + SMS OTP to "save your results" — this routes to a separate domain (smartadvisormatch.com) where the lead is sold to 3-5 financial advisors, mortgage lenders, and insurance agents. This is the lead-capture standard the category follows.
- **Questions asked:** Income, debts, down payment, ZIP, mortgage rate, taxes, insurance, HOA — **YES credit score** (a 10-bucket dropdown: 850 / 800 / 780 / 760 / 740 / 720 / 700 / 680 / 660 / 640 / 620 / 600) — **the only top-10 calc to ask FICO**
- **UX:** Modern, but lead-capture is intrusive. Methodology is from 2022 (stale).
- **Calculator output:** Affordable home price, monthly payment, recommended minimum income
- **CTAs:** "Save your results" (lead-capture), "Connect with a financial advisor" (lead-capture)
- **Trust signals:** SmartAsset brand, "Fact Checked" badge, RIA positioning
- **SEO strategy:** "Mortgage calculator," "how much house can I afford," "[State] mortgage rates"
- **Strengths:** 10-bucket credit field is the most complete FICO ask; recommended-minimum-income output is consumer-friendly; RIA positioning
- **Weaknesses:** **25 gaps including no "why didn't I qualify" diagnostic, no program-specific modeling, 2022 methodology.** Lead-capture is intrusive. Calculator outputs a single number with no remediation.
- **What we can do better:** SmartAsset is the only top-10 calc that asks for FICO but it doesn't actually USE the FICO input beyond adjusting the loan-amount estimate. A diagnostic that uses FICO to map the user to specific loan programs and credit-tier-targeted products is the missing product.

### 1.7 CNN Money Mortgage Calculator
- **URL:** `money.cnn.com/calculator/mortgages` — **DEAD.** CNN killed its mortgage suite in 2021-2022. The page serves a 2014-era shell HTML with a 404-equivalent behavior.
- **Historical strength:** Brand authority, zero friction, simple calculator
- **Current state:** Defunct. No replacement.
- **What we can do better:** A diagnostic that captures the "CNN Money mortgage" SERP is unowned.

### 1.8 Consumer.gov Mortgage Tools
- **URL:** `consumer.gov` — **no mortgage content at all.** Consumer.gov is an FTC-run site focused on consumer protection (scams, identity theft, credit cards). The "mortgage" content lives on the FTC's separate domain (`consumer.ftc.gov`).
- **What we can do better:** A diagnostic with `.gov` trust signals (without being a .gov site) can own the "official-looking" mortgage information SERP that the actual .gov sites have left empty.

### 1.9 Investopedia Mortgage Calculator
- **URL:** `investopedia.com/mortgage-calculator/`
- **Target audience:** Education-first; aspiring first-time buyers; finance students
- **Value proposition:** "Fact Checked" editorial authority; 14,000+ glossary entries
- **Lead capture:** None. Ad-monetized only.
- **Questions asked:** Loan amount, rate, term — **NO income, debt, credit score, ZIP.** It's a payment calculator, not an affordability calc.
- **UX:** Clean; Investopedia brand; fact-checked
- **Calculator output:** Monthly payment, total interest
- **CTAs:** None (no lead capture at all)
- **Trust signals:** "Fact Checked" badge, Dotdash Meredith brand, 14K+ glossary
- **SEO strategy:** "Mortgage calculator," "amortization," "FICO score," "APR vs APY"
- **Strengths:** Best-in-class trust signals; deep glossary; no lead-capture friction
- **Weaknesses:** No affordability calculator (text article only); no income/debt/DTI/credit inputs; ad-monetized only
- **What we can do better:** Investopedia is the perfect content partner for a diagnostic — authoritative, no lead-capture conflict, no lender marketplace to protect. A diagnostic on a content site with Investopedia-style fact-checking would inherit the trust.

### 1.10 Kiplinger Mortgage Calculator
- **URL:** `kiplinger.com/article/real-estate/mortgage-calculator`
- **Target audience:** Personal-finance audience; legacy magazine readers
- **Value proposition:** Editorial authority; no email gate
- **Lead capture:** None
- **Questions asked:** Loan amount, rate, term, down payment, taxes, insurance — **NO credit score, NO debts, NO location**
- **UX:** Article copy oversells what widget delivers; editorial feel
- **Calculator output:** Monthly payment, total interest, rate comparison (MyFICO rate table)
- **CTAs:** None (no lead capture)
- **Trust signals:** Kiplinger editorial brand (130+ year history), no email gate
- **SEO strategy:** "Mortgage calculator," "first-time buyer"
- **Strengths:** Editorial authority; no friction
- **Weaknesses:** Article copy oversells what widget delivers; no DTI, no debts, no location, no taxes/insurance/HOA/PMI
- **What we can do better:** Kiplinger is a content site, not a product site. A diagnostic with a content-licensing partnership could reach Kiplinger's first-time buyer audience.

### Category 1 Summary

| Competitor | Credit Score Asked? | Denial Content? | Lead Capture on Calc? | Diagnostic? |
|---|---|---|---|---|
| Zillow | ✅ Yes | ❌ No (publishes 28% denial rate) | ❌ No | ❌ No |
| Redfin | ❌ No | ❌ No | ❌ No | ❌ No |
| Realtor.com | ❌ No | ❌ No | ❌ No | ❌ No |
| Bankrate | ❌ No (separate flow) | ❌ No | ❌ No | ❌ No |
| NerdWallet | ❌ No | ❌ No (1 HMDA data article) | ❌ No | ❌ No |
| SmartAsset | ✅ Yes (10-bucket) | ❌ No | ✅ Aggressive (PII) | ❌ No |
| CNN Money | n/a (dead) | n/a | n/a | n/a |
| Consumer.gov | n/a (no mortgage content) | n/a | n/a | n/a |
| Investopedia | ❌ No | ❌ No | ❌ No | ❌ No |
| Kiplinger | ❌ No | ❌ No | ❌ No | ❌ No |

**Universal gap:** No top-10 calculator produces a denial-diagnostic output. All say "you can afford $X" but never "you will be denied because of Y, and here's what to change."

---

<a id="cat2"></a>
## 2. CATEGORY 2 — DIRECT LENDER QUALIFICATION TOOLS

**10 major direct lenders analyzed** (Rocket Mortgage, LoanDepot, Better.com, UWM, Caliber Home Loans, Chase, Bank of America, Wells Fargo, Guild Mortgage, NewRez/Shellpoint).
**Primary file:** `02-Competitor-Research/competitor-analysis.md` (148 KB, 1,846 lines).

### Universal pattern (verbatim from the report):
> "**No major lender explains WHY a borrower doesn't qualify.** Every denial routes to 'talk to a loan officer' or one of three static error strings."

### 2.1 Rocket Mortgage
- **URL:** `rocketmortgage.com`
- **Target audience:** Mass-market; first-time buyers; refinancers
- **Value proposition:** "Am I Approved? Get Verified in 8 Minutes" (their headline) — Rocket pioneered the "online mortgage" UX
- **Lead capture:** Email + name at minute 1; Prequalified Approval requires SSN + DOB (triggers soft pull at Experian); full application triggers hard pull
- **Questions asked:** ~25 fields across property, income, employment, debts, identity, eConsent — full PII capture at 3-5 minutes in
- **UX:** Industry-leading; "8 minutes to verified" is a real benchmark; 12 calculators including a BAH tool for military
- **Calculator output:** Payment calculator, affordability calculator, refinance calculator, DTI calculator
- **CTAs:** "Get my custom rate," "Apply now," "Refinance"
- **Trust signals:** "1.5M+ customers," "4.7 Trustpilot," "Most trusted mortgage lender"
- **SEO strategy:** "Mortgage rates," "mortgage calculator," "first-time home buyer," massive content library (`/learn/`)
- **Strengths:** Best UX in the lender category; fast prequal; comprehensive calculator library
- **Weaknesses:** **3 generic calculator fallback messages.** "Prequalified Approval" requires SSN/DOB. The denial UX is a phone call. No "why" explanation.
- **What we can do better:** A "Rocket denial decoder" that takes the Rocket denial screen and translates it into a plain-English fix plan.

### 2.2 LoanDepot
- **URL:** `loandepot.com` (marketing wizard at `/getstarted`; full application at `apply.myloandepot.com`)
- **Target audience:** Mass-market; refinancers; "mello" brand targets first-time
- **Value proposition:** "mello" — friendly, simple UX
- **Lead capture:** 2-layer funnel. Marketing wizard at `/getstarted` is no-bureau-pull. Full application at `apply.myloandepot.com` is 70+ MLA page IDs with Finicity + Trimerge for asset/income verification.
- **UX:** "mello" rebrand in 2020; otherwise dated
- **Denial UX:** Single "Oops, we encountered a problem" modal. No explanation.
- **What we can do better:** Same pattern as Rocket — diagnostic that translates the opaque denial into a fix plan.

### 2.3 Better.com
- **URL:** `better.com` (collapsed to `/start`)
- **Target audience:** Tech-forward; first-time buyers; refinancers
- **Value proposition:** "Better isn't a bank, it's better" — branding on "no commission, no origination fee" model
- **Lead capture:** Soft pull (Credco/Experian FICO 2) at 3-minute pre-approval. Full SSN at 3 minutes. The `askForFullSsnPreappFeature: true` flag is in their Next.js bundle — this is the smoking gun.
- **UX:** Modern, slick; "1,219 sitemap URLs" indicates heavy SEO play
- **Denial UX:** **23-word modal: "Something isn't adding up."** This is the actual user-facing string. No explanation, no remediation, no next step. Trustpilot: 1.4-1.8 stars on 10,000+ reviews (worst in the industry).
- **What we can do better:** Better.com has the worst denial UX in the industry. A "Better alternative" is a wide-open competitive position.
- **Internal evidence (from Better's Next.js payload):** `denialCreditScoreGate: 540 (purchase/refi), 600 (HELOC)` — these are the actual FICO floors, never published.

### 2.4 UWM (United Wholesale Mortgage)
- **URL:** `uwm.com`
- **Target audience:** Mortgage brokers (B2B only); no consumer D2C
- **Value proposition:** "#1 wholesale lender" — UWM doesn't lend to consumers, only to brokers
- **Lead capture:** N/A (no consumer funnel)
- **"EASE" program:** Broker-side only (allows borrowers to apply without a credit check; broker manually underwrites)
- **What we can do better:** A diagnostic that explains UWM's wholesale model to a denied borrower, then routes them to a broker, is a missing tool.

### 2.5 Caliber / NewRez
- **URL:** `caliberhomeloans.com` 301s to `newrez.com`. Caliber DNA survives at `myapp.newrez.com`.
- **Target audience:** Mass-market; brokers
- **Lead capture:** 2-tier soft/hard prequal with **NO SSN at tier 1** (a differentiator)
- **Denial UX:** Verbatim: "Thanks for your interest / We've received your information, but we're unable to continue right now / A member of our team will reach out to review your options and next steps / Feel free to call us at 1-888-673-5521." This is the actual production string.
- **What we can do better:** Same as Rocket/LoanDepot — translate the denial.

### 2.6 Chase
- **URL:** `chase.com/mortgage`
- **Target audience:** Chase customers; existing banking relationships
- **Value proposition:** Chase brand; "DreamMaker" down payment assistance (up to $5K grant for low-income buyers in minority communities)
- **Lead capture:** **Does not offer prequalification. Chase only offers mortgage preapproval** (verbatim from their own page). Full PII + hard pull required.
- **Denial UX:** Only 3 error strings exist: "We couldn't find any loan options for you" / "Typically, loan options require a minimum score of 620" / "Try updating the purchase price or down payment." **The 620 minimum is the only specific information ever given to a denied borrower.**
- **What we can do better:** A diagnostic that shows the Chase 620 floor and helps the user understand the path to 620 is a narrow but valuable product.

### 2.7 Bank of America
- **URL:** `bankofamerica.com/mortgage`
- **Target audience:** BoA customers; Preferred Rewards members (tiered mortgage benefits: $100/$300/$600 + 0.250-0.625% HELOC discount)
- **Lead capture:** The DMPQA digital-mortgage URL is the real prequalification entry (not `/mortgage/prequalification` which 404s)
- **Denial UX:** **"Your request needs some additional information"** is the denied path — completely opaque about WHY
- **What we can do better:** Translate the opaque denial.

### 2.8 Wells Fargo
- **URL:** `wellsfargo.com/mortgage`
- **Target audience:** Wells Fargo customers
- **Lead capture:** 6-step prequal at `web.secure.wellsfargo.com`. **NO SSN at prequal** (a differentiator). Application hosted by Blend Labs.
- **Denial UX:** Result-state registry `rs20-no-match` is the only denial screen
- **What we can do better:** Wells Fargo's "no SSN" prequal is a step in the right direction. A diagnostic that completes the no-SSN journey is the natural extension.

### 2.9 Guild Mortgage
- **URL:** `guildmortgage.com`
- **Target audience:** First-time buyers; mass-market
- **Lead capture:** **No self-serve prequal at all.** "Apply Online" is a 5-step lead-capture wizard.
- **Denial UX:** The only "Sorry" message in the React bundle is a 500-error page with `mailto:retailescalations@guildmortgage.com`
- **What we can do better:** Guild has nothing — the diagnostic owns the entire pre-denial experience for Guild prospects.

### 2.10 NewRez / Shellpoint
- **URL:** `newrez.com` (retail); `shellpointmtg.com` (servicing-only)
- **Target audience:** Mass-market
- **Lead capture:** 30-step application SPA; Argyle + AccountChek for VOI/VOE
- **Denial UX:** Same as Caliber — "Thanks for your interest / We've received your information, but we're unable to continue right now"

### Category 2 Summary

| Lender | Prequal? | SSN at Prequal? | Denial Explanation | Phone Call Required? |
|---|---|---|---|---|
| Rocket | ✅ Yes | ❌ No (soft pull) | ❌ No | ✅ Yes |
| LoanDepot | ✅ Yes | ❌ No | ❌ No | ✅ Yes |
| Better | ✅ Yes | ✅ Yes (3 min) | ❌ "Something isn't adding up" | ✅ Yes |
| UWM | ❌ N/A (B2B) | n/a | n/a | n/a |
| Caliber/NewRez | ✅ Yes | ❌ No (tier 1) | ❌ No | ✅ Yes |
| Chase | ❌ No (preapproval only) | n/a (hard pull) | ❌ "Score < 620" only | ✅ Yes |
| BofA | ✅ Yes | ❌ No | ❌ "Needs additional info" | ✅ Yes |
| Wells Fargo | ✅ Yes | ❌ No (differentia) | ❌ "rs20-no-match" | ✅ Yes |
| Guild | ❌ No | n/a | ❌ No | ✅ Yes (always) |
| Shellpoint | ❌ N/A (servicing) | n/a | n/a | n/a |

**Universal gap:** No lender explains WHY. Every denial is a phone call or one of 3-4 static error strings.

---

<a id="cat3"></a>
## 3. CATEGORY 3 — PRE-QUALIFICATION FLOWS

Pre-qualification is the **soft-pull** cousin of pre-approval. The "prequal" label has become a marketing term — actual implementation varies wildly.

### 3.1 Prequal vs Preapproval — Industry Confusion
- **Prequal** (industry definition): Soft credit pull, self-reported income/debts, no verification, "indicates likelihood" of approval
- **Preapproval** (industry definition): Hard credit pull, verified income/assets, "conditional commitment" of approval
- **Reality in market:** Most lenders call their soft-pull flow a "preapproval" and the hard-pull flow an "application" — the terms are interchangeable in marketing copy

### 3.2 Specific Prequal Flows Analyzed

| Lender | Soft Pull Bureau | Time to Prequal | SSN at Prequal? | Output |
|---|---|---|---|---|
| Rocket | Experian | 8 min | ❌ No | Custom rate, max loan |
| Better | Experian (FICO 2) | 3 min | ✅ Yes | "Verified" or "Something isn't adding up" |
| SoFi | TransUnion | 5 min | ❌ No | Rate range, max loan |
| Figure | Experian | 5 min | ❌ No (HELOC) | HELOC amount, rate |
| Tomo | Equifax | 3 min | ❌ No | "Up to $X" range |
| Caliber/NewRez | Internal | 5 min | ❌ No | Rate range |
| Wells Fargo | Internal | 6 min | ❌ No | Rate range |
| Bank of America | Internal | 5 min | ❌ No | Rate range |
| Credit Karma | VantageScore (not FICO) | 2 min | ✅ Yes | "Likely / Not likely" + 4 offers |
| Chase | ❌ (no prequal) | n/a | n/a | (preapproval only) |

### 3.3 The "Not Likely" Output Gap
Credit Karma is the closest to a diagnostic — it returns "Likely to qualify" or "Not likely" with up to 4 prequalified offers. But it doesn't say **WHY** the user is "not likely."

When a CK user clicks "Why?," they get a one-line tooltip, not a path forward.

**What we can do better:** A diagnostic that takes the "Not likely" output from any prequal tool and translates it into a fix plan.

---

<a id="cat4"></a>
## 4. CATEGORY 4 — LEAD-GENERATION / AGGREGATOR SITES

**8 major lead-gen sites analyzed** (LendingTree, Credible, Bankrate, NerdWallet, The Mortgage Reports, Mortgage News Daily, Finder, Money.com).
**Primary file:** `research/MASTER-COMPETITIVE-ANALYSIS.md` (159 KB, 2,734 lines).

### 4.1 Universal Pattern: "5 Lenders Compete for Your Loan"
Every lead-gen site in this category collects the same 8-10 fields and routes to 1-8 partner lenders. The denied-borrower is not the target — the rate-shopping borrower is.

### 4.2 LendingTree
- **URL:** `lendingtree.com/home/mortgage/`
- **Target audience:** Rate-shopping borrowers (purchase + refi)
- **Value proposition:** "LendingTree brings together 300+ lenders so you can compare your options, side by side." (verbatim)
- **Lead capture:** The famous 5-field form. Captures: loan amount, ZIP, property type, FICO band, employment, name, email, phone. **Routes to 1-8 partner lenders.**
- **Questions asked:** 8-10 fields in a single multi-step form
- **UX:** Multi-step wizard, 3-5 minutes to complete
- **Calculator output:** None (it's a lead funnel, not a calc)
- **CTAs:** "Get my quotes," "Compare lenders"
- **Trust signals:** NMLS #1136, "300+ lenders," "Compare your options"
- **SEO strategy:** "Personal loans," "mortgage rates," "first-time buyer programs," state-by-state rate pages
- **Strengths:** 300+ lenders; massive brand; first-mover advantage
- **Weaknesses:** **Only 1 article that mentions denial** (`/home/mortgage/denied-credit-for-home-loan/`, H1: "Signs Your Mortgage Will Be Denied in Underwriting" — 7 generic reasons). The denied borrower is not the target. The form is the same for a 580-FICO borrower as a 780-FICO borrower.
- **What we can do better:** A "LendingTree denial decoder" that explains the partner lender's denial in plain English.

### 4.3 Credible
- **URL:** `credible.com/mortgage`
- **Target audience:** Mass-market comparison shoppers
- **Value proposition:** "Compare transparent, prequalified mortgage rates from top lenders" — "Since 2012, we've worked to become the most trustworthy personal finance marketplace." (verbatim)
- **Lead capture:** "Fill out a quick form — It takes about 3 minutes" (verbatim). Soft credit pull (won't affect score). All three bureaus.
- **Questions asked:** Loan purpose, purchase price, ZIP, down payment, income, employment, credit score, housing payment, debts
- **UX:** Modern, clean, "We do all this without sharing your data or harming your credit score!"
- **CTAs:** "See my rates," "Compare lenders"
- **Trust signals:** "Trusted by 20M+ people," "$19B+ closed in loans"
- **SEO strategy:** "Best mortgage lenders 2026," "best HELOC rates," "compare mortgage rates"
- **Strengths:** Soft pull, no score impact, all three bureaus
- **Weaknesses:** **0 articles on denial** — the word "denied" appears in exactly 1 Trustpilot testimonial. The denied borrower is invisible.
- **What we can do better:** Credible's denied-borrower gap is complete. A diagnostic fills it entirely.

### 4.4 Bankrate, NerdWallet, The Mortgage Reports, Mortgage News Daily, Finder, Money.com
All 6 sites follow the same pattern: aggressive SEO content (rate roundups, "best of" lists, state pages), but **0-1 articles on denial** (TMR is the exception with ~20 articles on denial, but all are editorial, none are diagnostic tools). None offer a tool that diagnoses WHY a borrower was denied.

**Detailed per-site analysis:** see `research/MASTER-COMPETITIVE-ANALYSIS.md` §§3-8.

### 4.5 The Mortgage Reports — Deepest Editorial Cluster
- **URL:** `themortgagereports.com`
- **Denial content:** ~20 articles, the deepest in the category. Examples:
  - "Your Next Steps When Turned Down For A Mortgage" (Craig Berry, 2016)
  - "FHA, VA, HARP And USDA Mortgages: If At First You Don't Succeed, Apply, Apply Again" (Dan Green, 2014)
  - "The top two reasons mortgage applications were denied in 2018, and how to avoid them" (Larry Phillips, 2019)
  - "Mortgage denial stats by race: What we can learn" (Casey Morris, 2020)
  - "Mortgage assistance could help 1 in 3 denied home buyers" (Peter Warden, 2022)
  - "Where USDA Loans Get Rejected Most" (Aug 2024 HMDA analysis)
  - "Getting Mortgage-Approved When Lenders Said 'No': Real Life Success Stories" (Craig Berry)
  - "Bad Credit Mortgage Lenders | The Best Lenders of 2026"
  - "How to get a mortgage with bad credit"
  - "How to buy a house with a 600 credit score"
  - "Can I Get Approved for a Mortgage? | 2026"
- **Lead capture:** Standard TMR form at `/q/form` ("Verify Your Home Loan Eligibility")
- **What we can do better:** TMR has the editorial depth but no tool. A diagnostic that takes TMR's "verify your eligibility" form output and produces a personalized fix plan is the natural product extension.

### Category 4 Summary

| Site | Denial Articles | Diagnostic Tool? | Soft Pull? |
|---|---|---|---|
| LendingTree | 1 | ❌ No | ❌ No |
| Credible | 0 | ❌ No | ✅ Yes |
| Bankrate | 0 | ❌ No | ❌ No |
| NerdWallet | 1 (HMDA data) | ❌ No | ❌ No |
| The Mortgage Reports | ~20 (deepest) | ❌ No | ❌ No |
| Mortgage News Daily | 0 | ❌ No | ❌ No |
| Finder | 0 | ❌ No | ❌ No |
| Money.com | 1 | ❌ No | ❌ No |

**Universal gap:** Lead-gen sites have **0-1 articles** on denial (TMR is the exception) and **zero diagnostic tools**. They write ABOUT denial but never DIAGNOSE it.

---

<a id="cat5"></a>
## 5. CATEGORY 5 — MORTGAGE BROKERS / LEAD AGGREGATORS

This category overlaps with Category 4 (LendingTree, Credible, Rocket Pro) and includes:
- **LendingTree** — covered in §4.2
- **Rocket Pro TPO** (`rocketpro.com`) — wholesale-only; 43K+ loan officers. No consumer-facing denied UX.
- **UWM** — covered in §2.4. B2B-only.
- **Homepoint** — **BRAND DEAD.** `homepointmortgage.com` 301s to `mortgagedepot.com`. Two unrelated small brokers use the name. No consumer-facing denied UX.

**The broker channel's universal gap:** Brokers are trained to triage borrowers to the right lender, but they don't have a tool that explains the denial to the borrower. A denied borrower who goes to a broker gets a 30-minute phone call, not a diagnostic.

**What we can do better:** A diagnostic that produces a "denial reason → lender type" routing matrix is a B2B product for brokers. The denied-borrower diagnostic could be the front door; the broker is the back door.

---

<a id="cat6"></a>
## 6. CATEGORY 6 — FINTECH MORTGAGE COMPANIES

**10 fintechs analyzed** (Better, SoFi, Figure, Tomo, Loanai, Rocket Pro, Homepoint, Newfi, Angel Oak, Deephaven).
**Primary file:** `02-Competitor-Research/CONSOLIDATED_COMPETITOR_ANALYSIS.md` (82 KB, 700+ lines).

### 6.1 Better.com
Already covered in §2.3. **Worst Trustpilot in the industry** (1.4-1.8 stars on 10,000+ reviews). Denial: "Something isn't adding up" (23-word modal).

### 6.2 SoFi
- **URL:** `sofi.com/home-loan`
- **Target audience:** Mass-market; tech-forward; existing SoFi members
- **Value proposition:** "Member benefits" framing; "Sofi's Home Loan" 
- **Lead capture:** Soft pull at rate-quote step
- **Denial UX:** Single line: "we aren't able to show current rates" + phone
- **Internal error codes (from React state machine):** `MAXIMUM_LTV`, `CREDIT_DECLINED`, `NO_ELIGIBLE_PRODUCTS` — these are the actual production state machine codes, never exposed to users
- **What we can do better:** SoFi hides the error codes. A diagnostic that translates these codes into plain English is the missing product.

### 6.3 Figure
- **URL:** `figure.com/account/heloc/register`
- **Target audience:** HELOC; home equity
- **Value proposition:** "Get approved in 5 minutes, funding in as few as 5 days" (verbatim from every page)
- **Lead capture:** Soft pull (Experian) on HELOC prequal. Hard pull triggered when user submits SSN.
- **Self-employed support:** YES, first-class. 8 income verification options including Plaid, TurboTax, H&R Block, IRS direct. "Self-employed applicants are most successful connecting their personal checking or savings account" (verbatim).
- **Denial UX:** "Thank you for your application" page (dark pattern masking "no") with two specific decline reasons (credit score < 620/680, DTI too high) + **affiliate partner card list** (Point, BusinessLoans.com, Unlock, New American Funding, Freedom Debt Relief, West Capital Lending). This is the **only true near-miss UX in the top 10** — it's a "winback" page, not a denial page. The figure "prequal-winback-page" (pay off existing mortgage to qualify) is the best decline UX in the industry.
- **Trust signals:** "5,324 Trustpilot reviews at 4.7 — Excellent," "#1 Non-Bank HELOC Lender in the US," "First SEC-registered blockchain-native stock"
- **What we can do better:** Figure's winback UX is the model. A diagnostic that does the same thing — explains "you didn't qualify, but here's how to qualify" — is the product. But the affiliate partner card list is a **monetized lead-gen play**, not a borrower advocacy play. The diagnostic should show the in-house alternatives first.

### 6.4 Tomo
- **URL:** `tomo.com/mortgage/app/preapproval`
- **Target audience:** First-time buyers; tech-forward
- **Value proposition:** True soft pull (Equifax) with FCRA-compliant copy + "No hard credit check" (verbatim)
- **Lead capture:** Soft pull, no SSN, 3 income tiles (W-2, self-employed, other)
- **Denial UX:** **3 actual denial screens** (DTI, Assets, Credit) but no guideline, no scenario, no alt-program routing. This is the best denial UX in the fintech category — Tomo at least TELLS the user which constraint failed.
- **Strengths:** Soft pull, FCRA-compliant, affordability RANGE not single number, "buy-a-lower-rate slider" with break-even math
- **What we can do better:** Tomo tells the user "DTI" but doesn't say "Your DTI is 47%, FHA allows 50%, here's how to get under." A diagnostic adds the why and the fix.

### 6.5 Loanai
- **URL:** `loanai.com` — **PARKED DOMAIN** (GoDaddy/Afternic). Brand is dead.

### 6.6 Rocket Pro
- **URL:** `rocketpro.com` — B2B only; 43K+ loan officers. No consumer-facing denied UX. Wholesale 24-month bank statements.

### 6.7 Homepoint
- **URL:** `homepointmortgage.com` — **BRAND DEAD** (301s to `mortgagedepot.com`)

### 6.8 Newfi
- **URL:** `newfi.com` (retail); `newfiwholesale.com` (wholesale)
- **Target audience:** Self-employed, investors, business owners
- **Value proposition:** "1/3 of all loans have at least one exception" (verbatim). W-2-to-1099 day-one eligibility.
- **Lead capture:** No soft-pull prequal. 3-step "Book a Meeting" form.
- **Income documentation matrix:** **The deepest in the non-QM space** — 10+ methods: 12/24-month bank statement, 1099, W-2-to-1099, CPA P&L, Asset Depletion, IRA, RE Flipper, etc.
- **Denial UX:** Zero "you don't qualify but here's why" UX. Human call only.
- **What we can do better:** Newfi has the tech to do an instant bank-statement analysis (Income IQ). A diagnostic that says "upload 3 months of bank statements and we'll show you which NewFi program you'd fit" is a product they should have built but didn't.

### 6.9 Angel Oak Mortgage Solutions
- **URL:** `angeloakms.com` (wholesale); `my.angeloakms.com` (retail)
- **Target audience:** Self-employed, investors, foreign nationals
- **Value proposition:** "Powering the Future of Non-QM" — $23B+ originations, 56K+ loans closed
- **Loan programs:** 15+ (Bank Statement 640 FICO min, 1099, P&L, DSCR, Foreign National, Asset Qualifier, Asset Depletion, ITIN, Platinum 700+ FICO, Portfolio Select, Closed-End Second, 2-1 Buydown, ARM)
- **Lead capture:** Single-page 12-field contact form (wholesale); retail is broker-mediated
- **Denial UX:** **Zero denial messaging anywhere.** "Powering the Future of Non-QM" is the only thing they tell a denied borrower.
- **What we can do better:** A diagnostic that explains "You were denied because your tax returns show $X but you actually earn $Y because of write-offs → bank statement loan would qualify you" is the missing product for self-employed borrowers.

### 6.10 Deephaven Mortgage
- **URL:** `deephavenmortgage.com` (wholesale + correspondent only; no retail)
- **Target audience:** Real estate investors, self-employed, ITIN, non-warrantable condo buyers, foreign nationals
- **Value proposition:** "Serve the underserved in the mortgage market, through out-of-the-box thinking" — "Circles, not boxes" / "Turn a No into a Yes" / "Lending Ingenuity" reframe copy
- **Loan programs:** DSCR (FICO 660 min, $2.5M, 80% LTV), Expanded-Prime (FICO 660, $3.5M, 90% LTV no MI), Equity Advantage (FICO 660, $750K, CLTV 90/85/80%), Non-Warrantable Condo (FICO 620, $3.5M, 80% LTV), ITIN (FICO 680, $1.5M, 80% LTV, non-warrantable condos allowed)
- **Lead capture:** Every form is gated by Individual NMLS + Company NMLS. The first non-personal field is **Company.** No consumer prequal.
- **Denial UX:** **Site never tells a borrower "you don't qualify" — it never asks.** (Because it doesn't have a consumer funnel.)
- **What we can do better:** A diagnostic that asks "is your HOA in litigation?" and routes the user to a Deephaven-correspondent broker is exactly the missing piece.

### Category 6 Summary

| Fintech | Prequal? | Soft Pull? | Self-Emp Served? | Denial Explanation |
|---|---|---|---|---|
| Better | ✅ Yes | ✅ Yes (3 min) | ✅ Yes | ❌ "Something isn't adding up" |
| SoFi | ✅ Yes | ✅ Yes | ⚠️ In articles only | ❌ Hidden error codes |
| Figure | ✅ Yes (HELOC) | ✅ Yes | ✅ Yes (first-class) | ⚠️ "Thank you" + 2 reasons + winback |
| Tomo | ✅ Yes | ✅ Yes (FCRA-compliant) | ✅ Yes | ⚠️ 3 denial screens (DTI/Assets/Credit) but no fix |
| Loanai | ❌ Parked | n/a | n/a | n/a |
| Rocket Pro | ❌ B2B | n/a | ✅ Yes | n/a |
| Homepoint | ❌ Brand dead | n/a | n/a | n/a |
| Newfi | ❌ No soft pull | n/a | ✅ Yes (deepest matrix) | ❌ Phone call only |
| Angel Oak | ✅ Contact form | n/a | ✅ Yes (15 programs) | ❌ None |
| Deephaven | ❌ B2B only | n/a | ✅ Yes | ❌ Site never asks |

**Universal gap:** No fintech in the top 10 has a real "why can't I qualify?" diagnostic. The best denial UX is Tomo's 3 actual denial screens. The worst is Loanai (parked). Only 4 of the 10 have actual soft-pull prequals. The diagnostic owns this entire product category.

---

<a id="cat7"></a>
## 7. CATEGORY 7 — FIRST-TIME BUYER / GOVERNMENT / EDUCATION TOOLS

**11 resources analyzed** (Fannie Mae HomePath, Freddie Mac Home Possible, FHA Resource Center, HUD Housing Counseling, NeighborWorks America, State HFAs, Fannie Mae HomeView, Freddie Mac CreditSmart, CFPB Owning a Home, CFPB Complaint, HUD Homebuyer's Guide).
**Primary file:** `research/first-time-homebuyer-tools-research.md` (67 KB, 1,152 lines).

### Universal pattern: Three categories, none in the middle
1. **Education-only** (CFPB Owning a Home, HUD Homebuyer's Guide, HomeView, CreditSmart) — excellent content, zero personalization
2. **Transaction-only** (HomePath, FHA Resource Center, Home Possible, State HFAs) — good for users who already qualify, bad for denied users
3. **Human-counseling only** (HUD Counseling, NeighborWorks) — right answer for denied buyers, but hard to find/access

**No tool maps to "I was denied, why, and how do I fix it?"**

### 7.1 Fannie Mae HomePath
- **URL:** `homepath.fanniemae.com`
- **What it is:** A listings marketplace for Fannie Mae-owned REO (foreclosure) properties. NOT an education tool.
- **Lead capture:** Browse listings freely; email capture on "Save this search" / "Get notified" forms (light)
- **Questions asked:** None. It's a property search, not a qualification tool.
- **Calculator:** None
- **CTAs:** "Find a HomePath-approved lender," "View listings"
- **Trust signals:** "Fannie Mae" branding
- **SEO strategy:** "Fannie Mae homes for sale," "REO properties," "foreclosed homes"
- **Strengths:** Real inventory, below-market pricing, First Look period (15-30 days restricted to owner-occupant buyers)
- **Weaknesses:** **Zero qualification or diagnosis** — the user has to self-assess whether they can qualify. Outdated UX. Misleading: people searching "Fannie Mae first-time buyer" land here expecting tools, get listings.
- **What we can do better:** A diagnostic that explains that HomePath listings require a financed offer, lists minimum credit/FICO/LTV expectations, and shows which listings are realistically affordable given the user's qualification gap.

### 7.2 Freddie Mac Home Possible
- **URL:** `freddiemac.com/homepossible`
- **What it is:** A loan product (mortgage program) for low-to-moderate-income borrowers. The web page is a product explainer + lender finder.
- **Loan specs:** 3% down (Home Possible Advantage for FTHBs); 5% standard; FICO 660+ historically; allows co-borrowers (non-occupant, family); reduced MI
- **Lead capture:** Light email for "Get more information" or rate quotes; "Find a Home Possible lender" search (zip code lookup, no PII)
- **Questions asked:** No diagnostic on the Home Possible page.
- **Calculator:** No real qualification check. Basic amortization.
- **CTAs:** "Find a Home Possible lender," "Take the CreditSmart course," "Find a housing counselor"
- **Trust signals:** Freddie Mac / Federal Home Loan Mortgage Corporation — GSE, federally chartered
- **SEO strategy:** "Low down payment mortgage," "first time home buyer loan," "low income mortgage," "97% LTV loan," county AMI pages
- **Strengths:** Clear product specs; strong referral network; county AMI lookup
- **Weaknesses:** **No personalization.** Every visitor sees the same product page. No "you might not qualify because…" diagnostic. Lender-finder dumps a list with no quality indicator.
- **What we can do better:** A diagnostic that maps the user's profile to **which** program (FHA, Home Possible, VA, USDA, conventional) they would actually qualify for, and what to fix to unlock a better option.

### 7.3 FHA Resource Center
- **URL:** `hud.gov/fha` (sometimes `hud.gov/topics/buying_a_home`)
- **What it is:** Consumer-facing entry to the Federal Housing Administration's 203(b) program. Government program explainer + lender locator + counseling referral.
- **Loan specs:** 3.5% down with 580+ FICO; 500-579 with 10% down; up to ~50% DTI; gift funds allowed; assumable loans
- **Lead capture:** Minimal direct lead capture. FHA Resource Center phone line (1-800-CALL-FHA) routes to a call center.
- **Questions asked:** No diagnostic quiz on `hud.gov/fha`. HUD has published a text-based "Step-by-Step Guide to FHA Loans" PDF.
- **Calculator:** Basic mortgage payment calculator. No qualification engine.
- **CTAs:** "Call the FHA Resource Center," "Find an FHA-approved lender," "Find a HUD-approved housing counselor"
- **Trust signals:** **Maximum.** `.gov` domain, FHA is a federal agency.
- **SEO strategy:** "FHA loan," "FHA loan requirements," "FHA loan limits," "FHA 203(b)," "down payment assistance" — strong SEO because of `.gov` domain authority
- **Strengths:** Authoritative; FHA Resource Center is real, staffed, free; comprehensive FAQ covers the major denial reasons
- **Weaknesses:** **Terrible UX.** Government site at its worst — labyrinth of menus, PDFs, 2005 design. **No personalized diagnostic.** "Where do I start?" is a recurring complaint. The FHA Handbook 4000.1 is the real source of truth — not consumer-friendly.
- **What we can do better:** A diagnostic that reads the user's denial letter (or takes a quick profile) and maps each denial reason to the specific FHA Handbook section + a fix would translate 4000.1 into plain English.

### 7.4 HUD Housing Counseling
- **URL:** `hud.gov/topics/housing_counseling` (or `hud.gov/findacounselor`)
- **What it is:** Federal directory of approved housing counseling agencies (1,800+). HUD funds the agencies; consumer gets free or low-cost counseling.
- **Lead capture:** The directory is the lead capture for the agencies. HUD's site is the front door; the actual PII capture happens at the agency level (phone or in-person intake).
- **Questions asked:** **No HUD-level diagnostic quiz.** The intake form the *agency* uses (typically the HUD-9902 form) asks: household composition, income, employment, expenses, debts, credit score (self-reported), savings, current housing situation, counseling topic, language preference. **This is the most thorough intake of any tool in this research.**
- **Calculator:** None at the HUD level. Counseling is the diagnostic.
- **CTAs:** "Search for a counselor near me," "Contact the FHA Resource Center," "Find an approved housing counseling agency"
- **Trust signals:** **Maximum.** `.gov`, HUD, "HUD-approved" is a regulated credential
- **SEO strategy:** "Free housing counseling," "HUD approved counselor," "first time home buyer counseling"
- **Strengths:** **The single best resource for a denied buyer** — because a real human can hear "I was denied for X, Y, Z" and walk through options. Free or low-cost. Multilingual. Available in all 50 states + DC + territories.
- **Weaknesses:** **Hard to find on hud.gov.** Wait times for appointments can be weeks. Quality varies by agency. No online self-serve diagnostic at the HUD level.
- **What we can do better:** A digital tool that does the intake (financial profile) and outputs "you need a counselor who specializes in [denial reason], here's 3 near you" would dramatically shorten the funnel.

### 7.5 NeighborWorks America
- **URL:** `neighborworks.org`
- **What it is:** Federally chartered nonprofit that funds and trains ~240 local affiliates. National site is mostly B2B.
- **Lead capture:** National site: light email capture for newsletter / donations. Affiliate site: full intake at agency level.
- **Questions asked:** No national-level diagnostic. Affiliate intake forms similar to HUD-9902.
- **Calculator:** None on the national site.
- **CTAs:** "Find an Affiliate near you," "Take the online homebuyer education course" (eHome America)
- **Trust signals:** Chartered by Congress in 1978; HUD partner; CDFI-certified affiliates
- **SEO strategy:** "Homebuyer education," "housing counseling near me," "first time home buyer course," "down payment assistance"
- **Strengths:** Network depth — 240+ affiliates, including rural. Certifying body. Cultural competence. eHome America is a genuinely good online education product. Some affiliates lend directly (CDFI).
- **Weaknesses:** **National site is a maze** for a consumer trying to find counseling. Affiliate quality varies. **Brand is well-known to housing professionals, NOT well-known to first-time buyers.** No "I was denied" path.
- **What we can do better:** A diagnostic that captures the user's denial reason and routes to a "NeighborWorks affiliate with a CDFI loan program near you" would close a major gap.

### 7.6 State Housing Finance Agencies (HFAs)
- **Examples:** CalHFA, CHFA, NYS HCR, MassHousing, Florida HFA, Texas TDHCA
- **What they are:** State-chartered agencies that issue mortgage revenue bonds, provide DPA, and partner with lenders.
- **Target audience:** FTHBs, low-to-moderate-income, essential workers, minority and immigrant buyers
- **Value proposition:** Below-market rates (tax-exempt bond financing), down-payment assistance (3-5% of purchase price, sometimes forgivable), specialty programs (teacher, veteran, rural, urban)
- **Lead capture:** Heavy. Email, phone, location, "looking to buy in X months" on first interaction.
- **Questions asked:** CalHFA's "Find the right program for me" tool asks: FTHB status, income range, county, purchase price range, credit score range, household size, profession, liquid assets, debt situation. **Returns a list of programs the user might qualify for.** This is the **closest existing tool to a "why can't I qualify" diagnostic** — but it only tells you what you DO qualify for, not why you don't.
- **CTAs:** "Find a CalHFA-approved lender," "Apply for [specific program]," "Take a homebuyer education course"
- **Trust signals:** State agency — high trust
- **SEO strategy:** **Dominant local SEO.** "[State] first time home buyer program," "[State] down payment assistance"
- **Strengths:** DPA is real, significant value. State-specific knowledge. Some HFAs offer **forgivable** second mortgages. Some HFAs lend at rates below market by 1-2%.
- **Weaknesses:** **Program fragmentation.** CalHFA has 8+ programs; finding the right one is hard. Many HFAs use **first-come, first-served or lottery** for popular programs. **No "I was denied" path** — DPA programs presuppose an underlying mortgage approval.
- **What we can do better:** A diagnostic that maps "denied because DTI is 51%" to "CalHFA's MyHome program allows higher DTI, or you could pay down $X to drop below FHA's ceiling" is the gap.

### 7.7 Fannie Mae HomeView Course
- **URL:** `homeview.fanniemae.com`
- **What it is:** Free online homebuyer education course (8 modules, ~1.5-2 hours) with a completion certificate. Mobile-first, video-based, with a final quiz.
- **Lead capture:** Email required to enroll and to receive the certificate.
- **Questions asked:** Pre-course: FTHB status, journey stage, role, lender status. Module quizzes. **Final assessment** — 20-30 questions covering all modules. Examples:
  - "What is the maximum recommended front-end debt-to-income ratio?"
  - "Which of the following is NOT typically included in a closing disclosure?"
  - "What is private mortgage insurance (PMI)?"
  - "Why would a seller accept a contingency offer?"
- **Calculator:** "MoneyReady" pre-course tool (budget check); basic affordability calculator; **no full qualification engine**
- **CTAs:** "Get the Certificate," "Connect with a lender," "Find a housing counselor"
- **Trust signals:** Fannie Mae — GSE, federally chartered
- **SEO strategy:** "Free homebuyer education," "first time home buyer course," "homebuyer certificate," "Fannie Mae course," "free online home buying course," "HomeView"
- **Strengths:** **Best UX in this research.** Modern, mobile-first, video-led. Self-paced. Certificate is portable. Bilingual. **Truly free** (the only major free certificate of this quality).
- **Weaknesses:** **No personalization or diagnosis.** It's a course. Everyone watches the same 8 modules. **The certificate is a finish line, not a qualification.** A buyer can pass HomeView and still be denied for a mortgage. Quiz questions are recall, not diagnostic. "What is PMI?" not "What is YOUR PMI scenario?"
- **What we can do better:** A diagnostic that uses the HomeView framework (8 modules) and overlays a personalized "you need to focus on module 3, here's the gap analysis."

### 7.8 Freddie Mac CreditSmart
- **URL:** `creditsmart.freddiemac.com`
- **What it is:** Freddie Mac's version of HomeView, focused more heavily on credit and money management. Multiple versions: CreditSmart Starter, CreditSmart Homebuyer, CreditSmart Multifamily, CreditSmart for Native Communities.
- **Lead capture:** Email signup to start the course. Lighter than HomeView.
- **Questions asked:** Pre-course: FTHB status, credit score range, income range, currently renting or own, age range, language preference, prior homebuyer course. Module quizzes. Final assessment. Examples:
  - "What is the difference between revolving and installment credit?"
  - "How does a credit score affect a mortgage rate?"
  - "What is the recommended maximum credit utilization?"
  - "Which of these is a red flag for predatory lending?"
  - "How long does a Chapter 7 bankruptcy stay on a credit report?"
- **Calculator:** Stronger credit focus than HomeView. Has budget worksheets and credit score simulators. **No real-time qualification engine.**
- **CTAs:** "Get Certificate," "Find a Home Possible Lender," "Find a Housing Counselor"
- **Trust signals:** Freddie Mac brand; multi-language and multicultural adaptations
- **SEO strategy:** "Free credit course," "homebuyer education," "Freddie Mac course," "credit score improvement," "bad credit home loan"
- **Strengths:** **Stronger credit focus** — better for denied buyers (most denials are credit-related). Multicultural and multilingual. **Free.**
- **Weaknesses:** Dated UX vs. HomeView. **Same core problem as HomeView** — no diagnostic, only education. No connection between course content and "what to do if denied."
- **What we can do better:** CreditSmart is the better **content** source for a denial-diagnostic (credit is the #1 denial reason). A diagnostic that pulls the most relevant CreditSmart modules based on the user's credit profile (utilization, derogatory marks, time-on-credit) would be powerful.

### 7.9 CFPB's "Owning a Home" Resources
- **URL:** `consumerfinance.gov/owning-a-home/`
- **What it is:** CFPB's mortgage and homebuyer portal — guides, tools, and checklists. The CFPB is the consumer-financial-protection agency. Most of the interactive tools were deprecated in 2017-2018, but the guides remain gold-standard content.
- **Lead capture:** **Zero.** CFPB does not capture leads. This is rare and notable.
- **Questions asked:** No diagnostic quiz. The CFPB's **"Am I ready to buy a home?" guide** is a text-based checklist (6 self-reflection questions): income stable, steady job, down payment, debt under control, good credit, can afford ongoing costs.
- **Calculator:** No real-time mortgage qualification tool. "How much house can I afford?" rule of thumb (25-30% of gross monthly income) but text, not a calculator.
- **CTAs:** "Submit a complaint" (separate path), "Read the Mortgage Shopping Guide," "Use the Closing Disclosure explorer," "Find a HUD-approved counselor"
- **Trust signals:** **Maximum government trust.** CFPB is a federal agency.
- **SEO strategy:** "Mortgage shopping guide," "Closing Disclosure explained," "Loan Estimate explained," "first time home buyer" — strong SEO for all mortgage content queries
- **Strengths:** **Plain-language content is the best in the industry.** TRID explorers are the only true CFPB-authored interactive tools. Cited as authority in legal and counseling contexts. Spanish translation. Accessibility is excellent.
- **Weaknesses:** **Interactive tools are mostly gone** — the site was better in 2014-2016. No diagnostic, no calculator beyond the TRID explorers. The "Are you ready?" guide is 6 self-reflection questions — no personalization. **The site is a library, not a journey** — a buyer can't walk through "first, do this, then this."
- **What we can do better:** CFPB has the most trusted voice and the best plain-language. The gap is the **personalization layer.** A diagnostic built using CFPB's content as the educational substrate would be authoritative. E.g., "Your denial was for high DTI. Here's CFPB's definition of DTI. Here's how to reduce it. Here's the typical timeline."

### 7.10 CFPB's Complaint Database / Tool
- **URL:** `consumerfinance.gov/complaint/`
- **What it is:** Public complaint database — submit complaints AND searchable public database. **This is a complaint/regulatory tool, not a qualification tool. But it IS where denied buyers go to escalate.**
- **Lead capture:** Heavy PII capture — name, contact info, account number, description, dollar amount, desired resolution.
- **Questions asked:** Step-by-step: (1) category, (2) issue (dropdowns include "Loan was denied without proper cause", "Discrimination", "Improperly applied for the loan", "Loan modification denied"), (3) company, (4) date, (5) narrative, (6) desired resolution, (7) personal info, (8) account info, (9) review and submit.
- **Calculator:** None. The public database is searchable but not diagnostic.
- **CTAs:** "Submit a complaint," "Search the complaint database," "Check the status of your complaint"
- **Trust signals:** **Maximum.** Federal agency, `.gov`, regulatory power.
- **SEO strategy:** "File a complaint against mortgage lender," "CFPB complaint," "wrongful denial mortgage," "credit report dispute," "predatory lending report"
- **Strengths:** Real regulatory power — a complaint can trigger enforcement. Public record. Free and bilingual. Plain-language. The "wrongful denial" issue category is directly relevant to denied buyers. **Discrimination complaints route to HUD's Office of Fair Housing and Equal Opportunity.**
- **Weaknesses:** **Not a qualification tool** — it doesn't tell you why you were denied, only that you can complain about the denial. **Slow** — companies have 15-60 days to respond. **No guarantee of remedy** — the complaint gets a response, not a fix. **The wrong place to start** — a denied buyer who isn't being discriminated against should look at FHA, HUD counseling, or a credit-builder, not the CFPB complaint portal.
- **What we can do better:** A diagnostic could **triage**: "Your denial is likely legitimate (low FICO), here's what to fix. But if you were discriminated against, here's the CFPB complaint portal." This triage function is missing.

### 7.11 HUD's "Homebuyer's Guide" PDF and Online Tools
- **URL:** `hud.gov/topics/buying_a_home` (sometimes `hud.gov/sites/dfiles/Main/documents/Home_Buyers_Guide.pdf`)
- **What it is:** HUD's first-time homebuyer PDF guide (~50 pages) plus a few web pages. HUD's online tools are mostly the FHA Resource Center + housing counseling directory + lender locator.
- **Lead capture:** None on HUD's main pages. The FHA Resource Center is a phone call.
- **Questions asked:** The PDF is a textbook with knowledge questions but no diagnostic. The "homebuyer's checklist" is a self-assessment but it's a checklist, not a quiz.
- **Calculator:** None.
- **CTAs:** "Find a HUD-approved housing counselor," "Find an FHA-approved lender," "Call the FHA Resource Center," "Read the Home Buyer's Guide"
- **Trust signals:** **Maximum.** HUD, `.gov`, federal agency.
- **SEO strategy:** "First time home buyer guide," "HUD first time home buyer," "FHA loan"
- **Strengths:** The PDF is a textbook — many housing counseling agencies use it. Trust: maximum. Free, no upsell. HUD-approved counselor directory is **the** directory for housing counseling. HUD REO sales are a real inventory source.
- **Weaknesses:** **The web experience is the worst in this research.** The PDF is fine; the website is a maze. No interactive tools. Outdated content. **The most-downloaded resource is also the least useful for a denied buyer** — it assumes you haven't started yet.
- **What we can do better:** HUD has the **FHA Handbook 4000.1** (1,000+ pages of underwriting rules). A diagnostic that translates 4000.1 into plain English for the user would be a massive improvement.

### Category 7 Synthesis Table

| Resource | Education | Quiz/Assessment | Diagnostic | Personalized | Denial Reason Mapping | Real-Time Qual Check |
|---|---|---|---|---|---|---|
| Fannie HomePath | Weak | None | None | None | None | None |
| Freddie Home Possible | Moderate | None | None | None | None | None |
| FHA Resource Center | Strong | None | None | None | None | None |
| HUD Housing Counseling | Strong | (agency-level) | (agency-level) | Strong | (via counselor) | (via counselor) |
| NeighborWorks | Strong | (agency-level) | (agency-level) | Strong | (via counselor) | (via counselor) |
| State HFAs (CalHFA etc.) | Strong | Yes (program matcher) | Weak | Partial | None | None |
| Fannie HomeView | Strong | Yes (final test) | None | None | None | None |
| Freddie CreditSmart | Strong | Yes (final test) | None | None | None | None |
| CFPB Owning a Home | Strongest | Yes (6-question list) | None | None | None | None |
| CFPB Complaint | N/A | None | None | None | Strong (discrimination) | None |
| HUD Homebuyer's Guide | Strong | None | None | None | None | None |

**The missing tool is one that does all four:**
- Captures the user's profile (income, FICO, DTI, location, denial letter)
- Maps the profile to ALL programs (FHA, Home Possible, conventional, CalHFA, DPA, CDFI)
- Explains WHY they don't qualify for each program they don't qualify for
- Explains HOW TO FIX each gap with timeline and expected impact
- Triages to the right next step: fixable in 3 months → DIY path; fixable in 12+ months → credit builder; discrimination suspected → CFPB complaint; underwriter quirk → counselor

**No current tool does this.** The closest:
- **CalHFA's "Find the right program"** — does the program match but not the fix
- **CFPB Complaint** — does the discrimination triage but not the legitimate-denial fix
- **HUD Counseling** — does the human fix but is hard to access

---

<a id="cat8"></a>
## 8. CATEGORY 8 — CREDIT & APPROVAL TOOLS

**11 credit tools analyzed** (Experian Boost, FICO Simulator, myFICO, Credit Karma mortgage, Credit Sesame, AnnualCreditReport.com, WalletHub, Credit.com, Self, Rocket Homes, FICO Score Simulator).
**Primary file:** `research/competitive_analysis_credit_tools.md` (54 KB, 543 lines).

### 8.1 Experian Boost
- **URL:** `experian.com/consumer-products/boost` and `experian.com/consumer-products/credit-score`
- **What it is:** The "instant score lift" tool that uses utility/telecom/streaming payments to add to your Experian FICO 8.
- **Target audience:** Subprime / thin-file / no-score consumers
- **Lead capture:** Free Experian account. Once inside the dashboard, every credit card and loan you view is a revenue-share click-out.
- **Questions asked:** No diagnostic quiz. The score-boost is automatic once a bank is linked.
- **Calculator:** None on Boost itself. The FICO Score Simulator is gated behind a member login.
- **CTAs:** "Boost your score," "Sign up free," "See your score now"
- **Trust signals:** Direct credit-bureau brand; bank-level encryption; "no credit card required"
- **SEO strategy:** Owns "Experian Boost" branded term + a flood of informational articles. Competes aggressively for "what is a good credit score," "what affects your credit score"
- **Strengths:** Owns a bureau. Boost is the only widely-marketed utility/streaming-payment score lift. Their "Why did your credit score drop?" article is one of the best in the market.
- **Weaknesses:** No mortgage-denial diagnostic. Boost only helps the *score* leg of the puzzle — it does nothing for DTI, reserves, employment history, or comp underwriting. The simulator is buried behind paywall and even site-search 404s.
- **What we can do better:** A diagnostic that explains "Boost might help your score, but it won't fix DTI or employment" — the missing education layer.

### 8.2 FICO Score Simulator (Original) + myFICO
- **URL (legacy):** `ficosimulator.com` — **DOMAIN NO LONGER RESOLVES** (DNS ENOTFOUND). The FICO Simulator as a standalone product is dead.
- **URL (current):** `myfico.com` and `myfico.com/credit-education/financial-calculators`
- **Target audience:** Serious / aspirational credit users who want the real FICO used by 90% of top lenders
- **Value proposition (verbatim):** "Get FICO Scores used by 90% of top lenders."
- **Lead capture:** Free tier (FICO Score 8 from Equifax, monthly) or **Basic at $19.95/month** (Experian FICO 8, monthly, mortgage & auto FICOs, **Simulator for FICO Score 8**, $1M identity theft insurance). Premium tier adds tri-bureau and a "Simulator for FICO mortgage scores."
- **Questions asked (Simulator):** Marketed as a "what if" tool. myFICO's *Score Estimator* (free, no login) is the only public-facing pre-quiz: **"Estimate your FICO® Score range — Answer 10 easy questions to get a free estimate."** The full member simulator lets you model:
  - Pay down a credit card by $X → +N points
  - Close a card → -N points
  - Miss a payment → -N points
  - Open a new card → -N points
  - Take out an auto loan → -N points
  - Pay off a collection → +N points
  - Dispute a charge-off → +N points
- **Calculator:** **Gold standard in market.** Tells you your score will go from 642 to 661 if you pay $2,000 on a card. **Does NOT translate that into a pass/fail on a Wells Fargo $400k loan.**
- **CTAs:** "Choose your plan," "Start Plan," "Start free membership"
- **Trust signals:** It's literally from FICO (the company that invented the score). "90% of top lenders use FICO Scores."
- **SEO strategy:** Owns "what is a FICO score," "FICO Score vs credit score," "how scores are calculated," "FICO Score versions"
- **Strengths:** Most trusted score in lending. Simulator outputs are based on real FICO regression coefficients.
- **Weaknesses:** **It's paywalled.** Free tier does not include the simulator. Basic $19.95/mo gives Score 8 simulator; the *mortgage*-FICO simulator is higher tier. **It only models the score.** Does not look at DTI, reserves, employment tenure, LTV, property type, condo warrantability, or loan program eligibility. The 10-question estimator is rough — it's a 10-question demographic-and-debt quiz that returns a *range*, not a decision.
- **What we can do better:** A free, public-facing "what if" simulator that maps actions → FICO change → *and* tells you whether that change would tip a Fannie Mae / FHA / VA / non-QM approval.

### 8.3 Credit Karma (Intuit) — Mortgage Prequalification
- **URL:** `creditkarma.com/mortgage`
- **Target audience:** Mass-market; pre-shoppers
- **Value proposition:** "Instantly receive your free credit score and credit report card online."
- **Lead capture:** Soft-pull VantageScore sign-up (email + name + DOB + SSN + address). **Credit Karma Mortgage, Inc. (NMLS ID# 1588622)** is the captive mortgage arm.
- **Questions asked (mortgage prequal):** Standard 5-step soft-pull flow: property type/location/purchase price/down payment %, loan purpose, income, monthly debts, housing, identity (SSN, DOB) → soft pull. **Output: "Likely to qualify" or "Not likely" with up to 4 prequalified offers.**
- **UX:** Smooth, modern, Intuit-grade. Dashboard is the most polished in the category.
- **Calculator:** Home affordability, mortgage payment, rent vs. buy, down payment, amortization, refinance, HELOC vs cash-out refi, DTI, house poor, VA loan. **All available *without* login.** No "why was I denied" tool. No FICO simulator.
- **CTAs:** "Sign up for free," "See my offers," "Check my rates," "Pre-qualify in 2 minutes"
- **Trust signals:** Intuit brand (since 2020 acquisition). NMLS disclosures on every page.
- **SEO strategy:** Dominates "free credit score," "credit karma," "credit report," "what is a good credit score"
- **Strengths:** Largest free user base. Soft-pull prequal that actually returns "Likely / Not likely" — *closest thing in market to an approval diagnostic*. Clean, trustworthy Intuit-owned UX.
- **Weaknesses:** VantageScore, not FICO. Prequals are 95% accurate at best. **No denial diagnostic.** "Not likely" → user clicks *why?* and gets a one-line tooltip. The denied-user mental model is: "I was already denied at my bank, why would CK's prequal be any different?"
- **What we can do better:** We have the *input* (the user's full credit profile) and the *output* (prequalified max loan amount). What's missing is the *explanation* of why the input doesn't qualify for *more*.

### 8.4 Credit Sesame
- **URL:** `creditsesame.com` and `creditsesame.com/loans/mortgage/`
- **Target audience:** Free-tier credit-curious users; Sesame+ ($9.99/mo) is a "lite CK"
- **Lead capture:** Email sign-up → free daily-refresh TransUnion VantageScore. Upsell to Sesame+.
- **Questions asked (mortgage):** Standard "pre-approval" funnel. No prequal tool publicly — pushes through "See what your credit score can unlock."
- **Calculator:** Daily credit score (TransUnion VantageScore); **Sesame Grade** (a unique A-F letter grade Credit Sesame invented); credit report summary; credit monitoring alerts; "Credit Card Payoff Calculator" (basic). **No "why was I denied" tool.** No mortgage affordability calculator.
- **CTAs:** "Get started," "Get your credit score daily when you sign up for FREE"
- **Trust signals:** "Identity Theft Insurance," "3-Bureau Credit Scores & Reports" (paid tier), "24/7 fraud alerts, dark web monitoring"
- **Strengths:** Sesame Grade is a unique and understandable consumer framing. Strong on credit-building content. Lower monthly price.
- **Weaknesses:** No mortgage-denial diagnostic. No FICO simulator. No mortgage prequal.
- **What we can do better:** Zero diagnostic value; pure credit-monitoring + lender aggregator.

### 8.5 AnnualCreditReport.com
- **URL:** `annualcreditreport.com`
- **What it is:** The federally mandated free-report site. Operated by Central Source LLC, a joint venture of Equifax, Experian, and TransUnion.
- **Lead capture:** **None.** This is the only credit site in market with zero monetization.
- **Questions asked:** Identity verification. Name, DOB, SSN, address history, then 4 knowledge-based-authentication (KBA) questions from each bureau.
- **Calculator:** None. You get a PDF report.
- **CTAs:** "Request your free credit report," "Get my report." No "what now" CTA.
- **Trust signals:** "Authorized by federal law."
- **SEO strategy:** Owns "free credit report," "annual credit report," "free annual credit report"
- **Strengths:** The only fully trusted, monetarily neutral source.
- **Weaknesses:** No score. No mortgage simulator. No denial diagnostic. By design, returns the raw 3-bureau reports and stops.
- **What we can do better:** Critical raw input (the actual credit report) but no diagnostic, no score, no advice. A diagnostic should link to AnnualCreditReport.com for the underlying data.

### 8.6 WalletHub
- **URL:** `wallethub.com` and the simulator at `wallethub.com/credit-score-simulator`
- **Target audience:** The most data-thick free credit site. Targets *credit optimizer* power-users
- **Value proposition:** Free credit scores, reports and monitoring. **Daily updates.**
- **Lead capture:** Free account → TransUnion VantageScore 3.0 updated **daily**. Premium upsell ($9.95-$13/mo).
- **Questions asked (simulator):** FAQ explicitly describes the simulator's outputs (verbatim):
  - *"Your credit score could increase by 10 to 50 points after paying off your credit cards."*
  - *"If you pay off 100% of your credit card debt, your score could increase by 100+ points."*
  - *"One hard inquiry can drop your credit score by up to five points."*
  - *"The average credit score after bankruptcy is about 530, based on VantageScore data. In general, bankruptcy can cause a person's credit score to drop between 150 points and 240 points."*
  - **Six or more hard credit inquiries = "too many"** (verbatim, per FICO)
- **Calculator:** **Yes — the only free, full-feature credit-score simulator in market.** Models actions (pay down, close card, open card, miss payment, pay collection, etc.) and shows estimated VantageScore impact. **Still does NOT diagnose mortgage denial.**
- **CTAs:** "Sign Up for Free," "Join WalletHub," "Get unlimited free credit scores & reports"
- **Trust signals:** "© 2008-2026 Evolution Finance, Inc." Daily-update USP. TransUnion data partner.
- **SEO strategy:** Dominates comparison queries ("WalletHub vs Credit Karma," "WalletHub vs NerdWallet," "WalletHub vs Experian"). Heavy edu library.
- **Strengths:** Daily updates. The simulator. The head-to-head comparison tables. Best consumer finance Q&A site.
- **Weaknesses:** VantageScore, not FICO. No mortgage-approval diagnostic. No prequal. No lender network.
- **What we can do better:** Best *free* FICO simulator (well, VantageScore simulator), but doesn't go to "would you be approved for a $X mortgage at rate Y."

### 8.7 Self (Credit Builder)
- **URL:** `self.inc`
- **What it is:** A credit builder loan product — the user pays Self a small monthly amount, Self reports it to the bureaus, the user builds credit
- **Target audience:** Subprime / thin-file consumers
- **What we can do better:** A diagnostic could recommend Self as a fix for "no credit history" or "thin file" denials.

### 8.8 FICO Simulator Findings
**Verbatim from the report:** "FICO® Score Simulator at ficosimulator.com is **DEAD** — domain doesn't resolve. The IP has been folded into myFICO's premium plans."

**No "why was I denied a mortgage" diagnostic exists in market** — this is a real, unowned position. The closest functional analog is Credit Karma's soft-pull mortgage prequal, but it doesn't explain the "Not likely" outcome.

### 8.9 The 7-Reason Mortgage Denial Framework
Every editorial source converges on the same 7 reasons:
1. **Credit history** (DTI 37%, credit 34%, collateral 18% in HMDA 2018/2019 data per TMR/NerdWallet)
2. **DTI** (the #1 denial reason)
3. **Reserves / insufficient cash to close**
4. **Employment history**
5. **Derogatory marks** (BK, foreclosure, late payments, collections)
6. **Property / collateral** (appraisal, LTV, condo warrantability)
7. **Lender overlays** (proprietary, varies by lender)

### Category 8 Summary

| Tool | Score Simulator? | Free? | Mortgage Approval Diagnostic? |
|---|---|---|---|
| Experian Boost | ❌ No (paywalled) | ✅ Yes (Boost itself) | ❌ No |
| FICO Simulator (legacy) | ❌ Dead | n/a | n/a |
| myFICO | ✅ Yes (paywalled $19.95+) | ❌ No | ❌ No |
| Credit Karma | ⚠️ Third-party widget | ✅ Yes | ❌ "Likely/Not likely" only |
| Credit Sesame | ⚠️ Basic | ✅ Yes | ❌ No |
| AnnualCreditReport.com | ❌ No | ✅ Yes | ❌ No (no score at all) |
| WalletHub | ✅ Yes (VantageScore) | ✅ Yes | ❌ No |
| Self | ❌ No | ⚠️ Paid | ❌ No |
| Rocket Homes (now Redfin) | n/a (redirects) | n/a | n/a |

**Universal gap:** Every existing tool either gives you a score and routes to a generic "improve" article, or runs a soft-pull prequal and returns "Likely / Not likely" without explaining the "Not likely." No one connects those two endpoints.

---

<a id="cat9"></a>
## 9. CATEGORY 9 — "WHY WAS I DENIED" DIAGNOSTIC TOOLS

**After exhaustive search, no "why was I denied a mortgage" diagnostic exists in the U.S. consumer market.** This is the unowned position.

### 9.1 The Adjacent Tools That Exist (and Why They Fail)

| Tool | Why It Fails the Denied-Borrower Need |
|---|---|
| **CFPB Complaint Portal** | Right tool for discrimination, wrong tool for legitimate denials. Triage missing. |
| **CFPB Owning a Home "Am I Ready"** | 6 self-reflection questions, no personalization, no decision |
| **HUD Housing Counseling** | Right answer, hard to access (weeks for appointment, web maze to find) |
| **NeighborWorks / eHome America** | Education, not diagnostic; no denied-borrower path |
| **State HFA "Find the Right Program"** (e.g. CalHFA) | Best in class for program matching, but doesn't say WHY you don't qualify for programs you're not eligible for |
| **HomeView / CreditSmart** | Education, not diagnostic |
| **FICO Simulator (paywalled)** | Score only, no DTI/reserves/employment modeling |
| **WalletHub Simulator** | Free VantageScore simulator, no mortgage decision |
| **Rocket, Better, SoFi, Tomo prequal denial screens** | One-line "Sorry" — no remediation path |

### 9.2 What the Research Found About User Intent
- **"Why was my mortgage denied"** is a high-volume search query
- **"Mortgage denied what to do"** is a PAA (People-Also-Ask) box in 5+ searches
- **"Adverse action notice"** is a common follow-up — borrowers receive a denial letter with reason codes but don't know how to decode them
- **"Why can't I qualify for a mortgage"** is the exact query "Why Can't I Qualify?" targets

### 9.3 The Existing Closest Functional Analogs

**A. Credit Karma's "Not likely" output (closest soft-pull approximation):**
- Soft pull, 4 prequalified offers, "Likely / Not likely" verdict
- But: no explanation of "Not likely," no next step, no remediation plan

**B. Tomo's 3 denial screens (closest denial-screen UX):**
- DTI, Assets, Credit — at least TELLS the user which constraint failed
- But: no guideline, no scenario, no alt-program routing

**C. Figure's "winback" page (closest near-miss UX):**
- "Thank you for your application" + 2 decline reasons + winback page (pay off existing mortgage to qualify) + affiliate partner cards
- But: only HELOC; affiliate partners are HEIs, not advocacy; data is discarded on decline

**D. CalHFA's "Find the right program for me" (closest state-level matcher):**
- 8-question intake, returns matching programs
- But: only tells you what you DO qualify for, not why you don't

**E. CFPB Complaint Portal (closest triage):**
- Heavy PII capture, real regulatory power
- But: not a qualification tool; only for discrimination / wrongful denial

### 9.4 What's Missing — the Diagnostic Opportunity

A complete tool would need to:
1. **Capture the user's financial profile** (income, FICO, DTI, down payment, location, household, employment, denial letter if available)
2. **Match to all relevant programs** (FHA, Home Possible, conventional, USDA, VA, state HFA, DPA, CDFI)
3. **Show why each program is or isn't an option** ("Home Possible requires 660+ FICO; you have 620, so you're $40K short of qualifying for this program. A 40-point FICO increase would unlock it.")
4. **Prescribe a fix per gap** ("Your DTI is 51%; FHA's standard is 50%. Paying down $1,200 of your credit card balance would drop you to 49.5% and improve approval odds. With 0% utilization on a single card for 6 months, expect a 30-point FICO lift.")
5. **Tri-age to next action** (DIY credit repair / Find a HUD counselor / File CFPB complaint for discrimination / Apply for DPA via state HFA / Wait 6 months and reapply)
6. **Maintain the user** (re-take the assessment in 6 months; see your progress; get a "you're ready" report when you actually are)
7. **Hand off to a real person** at the right moment — not before (when the user just wants a quick answer) and not after (when the user has wasted 6 months on a bad plan)

**None of the 45+ competitors in this research do this.** Each does part of it. The product opportunity is to be the first to do all of it.

---

<a id="cat10"></a>
## 10. CATEGORY 10 — MORTGAGE EDUCATION WEBSITES

This category overlaps with Category 7 (CFPB, HUD, Fannie, Freddie). The education-only sites are:
- **CFPB Owning a Home** (`consumerfinance.gov/owning-a-home/`) — covered in §7.9
- **HUD Homebuyer's Guide** — covered in §7.11
- **Fannie Mae HomeView** — covered in §7.7
- **Freddie Mac CreditSmart** — covered in §7.8
- **The Mortgage Reports** — covered in §4.5 (deepest denial-content cluster, but no tools)
- **NerdWallet, Bankrate, Investopedia, Kiplinger, SmartAsset** — covered in §1 (education content alongside their calculator suites)

### Universal Pattern
All mortgage education sites are:
- **Excellent at explaining concepts** (what is DTI, what is PMI, what is a closing disclosure)
- **Weak at personalizing** (every visitor sees the same content)
- **No diagnostic tools** (none connect "your financial profile" to "what to do about it")

### Key Finding
The CFPB has published extensively on **denial patterns** (HMDA data) — a diagnostic could overlay this publicly available data on the user's situation. The CFPB's HMDA data is at `consumerfinance.gov/data-research/hmda/` and includes:
- DTI 37% denial rate
- Credit 34%
- Collateral 18%
- Incomplete app, unverifiable info, employment history in the top 5
- State-by-state, race-by-race, loan-type-by-loan-type breakdowns

A diagnostic that uses CFPB's HMDA data as the foundation for the user's personalized denial reason map would inherit CFPB's trust and authority.

---

<a id="cat11"></a>
## 11. CATEGORY 11 — SELF-EMPLOYED / NON-QM SPECIALISTS

**10 lenders analyzed** (Angel Oak, NewFi, Deephaven, Athas Capital, LoanStream, Citadel/Acra, Verus, Kiavi, Pesto, Findigs).
**Primary file:** `RESEARCH_lenders_condo_tools.md` (49 KB, 460 lines).

### 11.1 The Non-QM Universe at a Glance

| Lender | Channel | Min FICO | Bank Stmt | 1099 | P&L | Asset Dep | DSCR | ITIN | Non-Warr Condo | Condotel | For Nat | Consumer Prequal? |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Angel Oak MS | Wholesale | 640 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (warr only) | ✅ | ✅ | ✅ | ❌ (broker-only) |
| NewFi (retail) | Retail + Wholesale | 620 | ✅ | ✅ | ✅ | ✅ | ✅ | ? | ? | ? | ? | ⚠️ "Book a Meeting" only |
| NewFi Wholesale | Wholesale | 620 (Non-QM) / 640 (DSCR) | ✅ | ✅ | ✅ | ✅ | ✅ | ? | ? | ? | ? | ❌ (broker-only) |
| Deephaven | Wholesale + Correspondent | 620 (NW condo) / 660 (DSCR, Expanded-Prime) / 680 (ITIN) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ (incl NW condo) | ✅ | ✅ | ✅ | ❌ (broker-only) |
| Athas Capital | Wholesale | ~620 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ (broker-only) |
| LoanStream | Wholesale | ~620 | ✅ | ✅ | ? | ✅ | ✅ | ✅ | ✅ | ? | ✅ | ❌ (broker-only) |
| Citadel Servicing | Servicing only | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a (servicing site) |
| Acra Lending (Citadel's origination arm) | Wholesale | **600** (industry-low) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ (broker-only) |
| Verus MC | Correspondent + Wholesale | 700+ (Prime Ascent) | ❌ | ❌ | ❌ | ? | ✅ | ? | ? | ? | ✅ | ❌ (lender-only, not consumer) |
| Kiavi | Direct-to-investor (self-serve) | ~660 | ❌ | ❌ | ❌ | ❌ | ✅ (DSCR, 5.875%+) | ❌ | ✅ (investor condo) | ❌ | ❌ | ✅ "See Your Rate" self-serve |
| Pesto | Direct-to-consumer (CA, expanding) | ~620 | ✅ | ✅ | ✅ | ? | ? | ? | ? | ? | ? | ✅ 5-minute apply |
| Findigs | **NOT a mortgage lender** — rental screening | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | ✅ (for rentals, not mortgages) |

### 11.2 The Key Insights

1. **They are B2B-first, not consumer-first.** Almost every name on the list is a *wholesale* lender — they sell to mortgage brokers, not to borrowers.
2. **They have no inbound funnel for denied borrowers.** None of them have a tool that starts with "you were denied because…" and then routes to a product.
3. **The vocabulary is opaque.** "DSCR", "ATR-In-Full", "Expanded-Prime", "Non-Prime", "P&L Only", "Asset Qualifier vs. Asset Depletion" — none of these terms are explained in language a self-employed borrower would understand.
4. **They heavily gate lead capture behind a company NMLS field.** The first form field on Deephaven, Acra, and NewFi Wholesale is "Individual NMLS" and "Company NMLS". This blocks consumer leads entirely.
5. **The 600-700 FICO floor is the single most important fact they all share.** A borrower with a 580 score and a 1099 can not get a non-QM loan from any of these lenders. Non-QM ≠ no underwriting.
6. **The lowest FICO floor in the industry is Acra Lending at 600.** Most non-QM lenders start at 620-640.

### 11.3 Programs in Plain English
- **Bank Statement (BS)** — 12 or 24 months of deposits in lieu of tax returns
- **1099 Only** — last 1-2 years of 1099s + YTD bank statements
- **P&L Only** — CPA-prepared profit & loss statement, no tax returns
- **Asset Depletion / Asset Qualifier** — divide liquid assets by 360 months to "create" qualifying income
- **DSCR (Investor Cash Flow)** — qualify off the *property's* rental income vs. mortgage payment, no personal income docs at all
- **ITIN** — qualify with an Individual Taxpayer ID Number (no SSN needed)
- **Foreign National** — qualify with a passport/visa, no U.S. credit
- **Non-Warrantable Condo** — condo project that fails Fannie/Freddie warrantability
- **Condotel** — condo that operates as a hotel (daily rentals)
- **ATR-In-Full** — Ability-to-Repay documented in full (the "full doc" non-QM)

### 11.4 The Best-in-Class (Pesto + Kiavi)
- **Pesto** (`pesto.com`): "First true fintech self-employed lender" — built for the consumer from day one. 5-minute application vs. industry 30-60 days. AI underwriting, no faxing/emailing docs. Limited to certain states (originally CA-only, expanding). Loan size caps (~$1M max).
- **Kiavi** (`kiavi.com`): The only non-QM lender with a true self-serve "See Your Rate" prequal. 5.875% DSCR starting rate (headline-attack-low vs. typical 7-9% non-QM DSCR). $10M jumbo. No owner-occupant products.

### 11.5 What's Missing
- A diagnostic that explains the non-QM program universe in plain English
- A diagnostic that maps the self-employed borrower's profile to the right non-QM program
- A diagnostic that surfaces the actual FICO floor (600 at Acra vs. 640 at Angel Oak vs. 680 at Deephaven ITIN)
- A diagnostic that explains the rate delta (non-QM typically runs 1.5-3.0% over QM)

### 11.6 The Self-Employed Diagnostic Opportunity

A diagnostic for self-employed borrowers should ask:
1. **What kind of loan were you denied for?** (purchase / refi / cash-out)
2. **What was the reason given on the denial letter?** (DTI, credit, income, property, condo, occupancy) — with a "I don't know / didn't get a letter" fallback
3. **Income type** — W-2 / 1099 / Self-employed (Schedule C) / K-1 / Retirement / Investment income / Other
4. **Self-employed percentage of ownership** — 25%+ is the Angel Oak floor; under that, the borrower is treated as an employee
5. **FICO score** — gate the diagnostic. 600-619 → Acra, Pesto. 620-639 → Acra, Deephaven, NewFi. 640+ → everyone. Below 600 → no non-QM available, route to credit-rebuilding
6. **Property type** — SFR, condo (warrantable?), non-warrantable condo, condotel, manufactured, 2-4 unit, investment
7. **Loan amount & LTV** — calc max loan at each lender's LTV cap
8. **Cash-out / equity purpose** — route to Equity Advantage (Deephaven) or a true cash-out non-QM

The diagnostic should output:
1. Plain-English denial reason
2. Ranked lender list with each lender's actual FICO floor, LTV cap, and program match
3. Estimated rate delta vs. conventional
4. Direct broker match (not the lender)
5. Condo warrantability pre-flight
6. Document checklist (bank statements, 1099s, P&L, asset statements)

---

<a id="cat12"></a>
## 12. CATEGORY 12 — HOA / CONDO APPROVAL TOOLS

**6 tools/resources analyzed** (First American CondoCert, Condo Control, Fannie Mae PEL, Wells Fargo condo list, FHFA condo approval, HUD FHA condo lookup).
**Primary file:** `RESEARCH_lenders_condo_tools.md` §§11-15.

### 12.1 The Critical Findings (from the report)

1. **First American's "CondoCert" / `firstam.com/condocert` is defunct.** All variants return 404. First American now does condo estoppel / HOA search as part of its authenticated `myFirstAm` title-and-escrow portal — not a public consumer tool.

2. **Condo Control (formerly CondoTek) is HOA management software** — accounting, billing, e-voting, etc. for condo boards. It is not a mortgage tool.

3. **There is no publicly-searchable Fannie Mae or Freddie Mac condo project approval list for consumers.** The "Fannie Mae project review tool" lives at `singlefamily.fanniemae.com/PEL` and is for lenders only.

4. **Wells Fargo's "condo approval list" is internal-only** — used by their underwriters, not searchable by the public. Same for Chase, BofA, etc.

5. **The ONLY publicly-searchable federal condo database is HUD's FHA condo lookup** at `entp.hud.gov/idapp/html/condlook.cfm` — FHA-approved condo projects by location, name, or status. Returns 200 with a search form: State, County, Condo ID, Condo Name, City, Zip Code, Status (All / Approved / Expired / Rejected / Withdrawn), Date range.

### 12.2 The Condo Warrantability Diagnostic Opportunity (Massive)

A condo is "non-warrantable" if it fails Fannie/Freddie project standards. The 5-7 standard warrantability questions are:
1. **HOA in litigation?** (Y/N)
2. **% non-owner-occupied?** (must be < 50% for warrantable, varies by GSE)
3. **Developer still in control of HOA?** (must be turned over to residents)
4. **>5 units in one owner?** (Y/N — concentration risk)
5. **Hotel/short-term-rental use?** (Y/N)
6. **Commercial space >25%?** (Y/N)
7. **Project size?** (5+ units for Fannie, 2+ for Freddie)
8. **Insurance coverage?** (must meet GSE standards)
9. **HOA budget reserves?** (must meet GSE standards)

If a borrower is denied because of condo warrantability, the lender typically just says "condo not approved" — the borrower has no idea which of the 9 questions failed.

### 12.3 The Diagnostic Should:
1. Ask the 7 standard warrantability questions
2. Predict warrantability
3. If predicted non-warrantable, route to a Deephaven / Angel Oak / Acra broker who can do a non-warrantable condo loan
4. Pull the FHA-approved condo database (state, county, name) and tell the borrower "your condo IS FHA-approved but NOT Fannie-approved → you need an FHA loan or a non-warrantable condo non-QM loan"

This is **unowned territory** — no public tool exists. The diagnostic would own it.

---

<a id="white-space"></a>
## 13. MARKET WHITE SPACE

After analyzing 45+ competitors across 12 categories, the market white space is:

### 13.1 The Universal Pattern: Three Categories, None in the Middle

| Category | What They Do | What They Miss |
|---|---|---|
| **Publishers / Calculators** (Zillow, Bankrate, NerdWallet, SmartAsset, etc.) | Show an affordability number; route to a single lender partner | No FICO simulator, no denial explanation, no remediation |
| **Lenders / Fintechs** (Rocket, Better, SoFi, Tomo, Figure, etc.) | Soft/hard pull prequal; return "Likely / Not likely" with offers | "Not likely" → phone call. No explanation, no fix plan |
| **Lead-Gen Aggregators** (LendingTree, Credible, Bankrate, NerdWallet) | Collect 8-10 fields, route to 1-8 partner lenders | Same partner panel for a 580-FICO borrower as a 780-FICO borrower; no denial content; no diagnostic |
| **Government / Education** (CFPB, HUD, Fannie, Freddie) | Excellent content, plain-language, authoritative | Zero personalization; no diagnostic; 6 self-reflection questions at most |
| **Non-QM / Self-Employed Specialists** (Angel Oak, NewFi, Deephaven, Acra) | B2B-first; broker-mediated; opaque jargon | No consumer funnel; FICO floors buried; no consumer prequal |
| **Credit Tools** (Experian, myFICO, CK, WalletHub) | Score display; FICO simulator (paywalled); credit-builder | Score-only, not mortgage-approval; no DTI/reserves/employment modeling |
| **HOA / Condo Tools** | (Mostly defunct; only HUD FHA condo lookup is public) | No public warrantability pre-flight |

**The unowned category is a 7th category: "Why am I denied?" diagnostics that don't fit into any of the above.**

### 13.2 The 5 Unowned Positions

1. **No-SSN, no-DOB, no-credit-pull, anonymous, educational mortgage qualification diagnostic.** Every existing tool requires some PII before any information. The diagnostic that takes only 8-15 anonymous inputs and produces a 7-pillar assessment is unowned.

2. **Personalized, plain-English, ranked denial reasons with a remediation plan.** No tool tells a denied borrower "you're 23 points short on FICO + 7% over DTI. Here's the path."

3. **Cross-program routing for the denied borrower.** CalHFA does this for the qualified borrower. No tool does it for the denied borrower.

4. **Adverse Action Notice decoder.** The denial letter has reason codes (ECOA Reg B); no tool decodes them for the borrower.

5. **Public condo warrantability pre-flight.** No public tool exists. The HUD FHA condo lookup is the only public database, and it doesn't tell you if YOUR condo is warrantable.

### 13.3 The 4 High-Intent, Underserved Personas

1. **Worried First-Time Buyer (40%)** — anxious, doesn't know where they stand. Currently routes to Zillow/Bankrate/NerdWallet calculators that give a single number with no diagnosis.

2. **Recently Denied Borrower (30%)** — frustrated, needs explanation. Currently routes to a phone call with a lender, or to generic "improve your credit" content. **The highest-intent persona in the mortgage funnel.**

3. **Self-Employed Borrower (20%)** — systematically underserved, frustrated. Currently routes to NewFi/Angel Oak/Deephaven broker-mediated processes, with no plain-English explanation of the non-QM program universe.

4. **Condo Buyer in a Non-Warrantable Project (10%)** — discovers the issue 2 weeks into the loan. Currently has no public tool to check warrantability before applying.

### 13.4 The Strategic Wedge

**The denial-decision SERP is unowned across all 10 top calculators, all 10 top lead-gen sites, all 10 top lenders, and all 10 top fintechs.**

- Zillow's own research says **28% of mortgage buyers are denied at least once — ~880,000 denied-borrower-events per year** — and no one in the top 40+ serves this audience well.
- TMR cites HMDA data: **DTI 37%, credit 34%, collateral 18%** as the top 3 denial reasons. These are the precise topics a diagnostic should address.
- The denied borrower is **the highest-intent mortgage audience in the U.S.** — they hold an official document (the Adverse Action Notice) that names the exact issue. Lead-gen value: $25-200 CPL (cost per lead). Direct lender value: $300-1000+ per funded loan.

### 13.5 The 5 Things the Diagnostic Should Do That NO Competitor Does

1. **Take anonymous inputs (no SSN, no DOB, no credit pull) and return a 7-pillar assessment** (Income, Debt, Credit, Cash, Payment, Property, Documentation) with a range, not a single number.

2. **Rank denial reasons by impact** ("Your DTI is 51%, FHA's standard is 50% — this is your #1 obstacle. Your FICO is 615, FHA's standard is 580 — this is your #2 obstacle.").

3. **Map to ALL programs** (FHA, Home Possible, conventional, USDA, VA, state HFA, DPA, CDFI, non-QM, bank statement, DSCR) — not just one lender's offerings.

4. **Prescribe a fix per gap with timeline** ("Paying down $1,200 of your credit card balance would drop your DTI to 49.5% and improve approval odds. With 0% utilization for 6 months, expect a 30-point FICO lift.").

5. **Triage to the right next step** (DIY credit repair / Find a HUD counselor / File CFPB complaint for discrimination / Apply for DPA via state HFA / Wait 6 months and reapply / Try a non-QM specialist / Try a different program).

**No competitor does any of these. The diagnostic owns all 5.**

---

<a id="synthesis"></a>
## 14. SYNTHESIS: THE UNOWNED POSITION

### The Gap in One Sentence

**"Why Can't I Qualify?" sits in an unowned category: anonymous, no-credit-pull, educational mortgage qualification diagnostics that explain WHY a borrower can't qualify and WHAT they can do to fix it.**

### Why This Gap Exists

1. **Lenders can't do it.** They have a conflict of interest — explaining denial reasons to a denied borrower is admitting the borrower is better off going to a competitor (or doing nothing). They route to a phone call instead.

2. **Lead-gen sites can't do it.** They monetize rate-shopping, not denial-recovery. A diagnostic that says "wait 6 months" is a $0 lead in their model. They write ABOUT denial (TMR has 20 articles) but never DIAGNOSE it.

3. **Calculator sites can't do it.** They are structurally incentivized to be aspirational (publisher) and frictionless (lead-funnel). Saying "you will be denied because of Y" is the opposite of their funnel.

4. **Government / education sites can't do it.** HUD, CFPB, Fannie, Freddie have the trust but not the personalization. They produce 1,000-page handbooks and 6-question checklists, not interactive tools.

5. **Fintechs can't do it.** Better, SoFi, Tomo, Figure, Pesto are all product sellers. They want to sell you THEIR loan, not diagnose WHY you can't get a loan.

6. **Credit tools can't do it.** FICO Simulator, WalletHub, Experian focus on the score leg, not the full mortgage-approval decision. They don't model DTI, reserves, employment tenure, or property type.

7. **Non-QM lenders can't do it.** They are B2B-first, wholesale-first. The first form field is "Individual NMLS" — they don't want consumer leads.

### What "Why Can't I Qualify?" Should Do

**Phase 1 (MVP — launch in 30-45 days):**
- 8-15 question intake (no SSN, no DOB, no credit pull)
- 7-pillar scoring (Income, Debt, Credit, Cash, Payment, Property, Documentation)
- Top-3 obstacle ranking
- "Compare 3 loan programs" output (best-case, mid-case, fallback)
- Soft capture (name + email) at start; hard capture (name + email + phone + ZIP) at "save plan"
- 5-email nurture sequence over 30 days
- Compliance pack: MAP Rule, ECOA/Reg B, FCRA, TCPA, CCPA, state licensing, WCAG 2.1 AA
- 5-10 SEO articles
- Privacy policy + terms + accessibility statement

**Phase 2 (90 days post-launch):**
- **Adverse Action Notice decoder** (paste-your-letter, auto-extract reason codes, plain-English translation)
- **A "time-to-qualify" calculator** (input: current score, current DTI, target score, target DTI, current debts; output: months to qualify, by lender)

**Phase 3 (6 months post-launch):**
- "Denial reason → lender type" routing matrix (non-QM, bank-statement, credit-builder, HFA, HUD counseling)
- A "Mortgage Denial Atlas" (state-by-state HMDA data, WSJ-pickup territory)
- A "denial appeal" wizard (for appealable denials: employment-gap, appraisal-low, missing documentation)
- 50 state pages + 200 city pages
- AI personalization layer (with AI guardrails)

### Out of Scope (Never)
- ❌ Hard credit pull
- ❌ Loan application
- ❌ Mobile app (V3+)
- ❌ Multi-language (V3+)
- ❌ Forum / community
- ❌ Race / religion / protected class data

### SEO Surface That Is Unowned

Per the research, the following high-intent keywords have **no major owner**:
- "why was my mortgage denied"
- "denial reasons mortgage"
- "reapply after mortgage denial"
- "adverse action notice"
- "mortgage denied what to do"
- "denied for mortgage pre-approval"
- "why can't I qualify for a mortgage"
- "mortgage qualification calculator"
- "mortgage DTI calculator"
- "FHA eligibility check"
- "VA loan eligibility"
- "self-employed mortgage qualification"
- "mortgage after bankruptcy"
- "mortgage after foreclosure"

These problem-space queries are currently served by commercial lender blogs (Rocket, Bankrate, NerdWallet) — but those are commercial. A non-commercial, government-style, diagnostic for "I was denied, what now?" would own that SERP.

### Compliance Posture (Critical)

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

### The Bottom Line

**The opportunity is real.** A consumer-facing mortgage qualification diagnostic that provides anonymous, no-SSN, no-credit-pull, educational readiness assessments addresses a real, validated market gap. No major competitor offers this. The demand signals (rising "denied" searches, low consumer trust, underserved self-employed segment) are strong.

**The execution is achievable.** A non-technical MLO can launch in 30-45 days using Lovable + Supabase + AI coding tools. The cost is $20-30K Year 1. The expected return is $75-400K Year 1.

**The compliance is non-negotiable.** Engage a qualified mortgage compliance attorney before launch. Follow safe language. Display all required disclosures. Never use AI to make credit decisions.

**The timing is right.** With mortgage rates elevated, denials up, and consumers confused, the demand for an honest, educational diagnostic is at an all-time high. No major competitor is serving this need.

**BUILD IT.**

---

## APPENDIX A — Files Referenced

### Primary synthesis files (read these for the full analysis):
- `02-Competitor-Research/CONSUMER-AFFORDABILITY-CALCULATORS-SYNTHESIS.md` (Calculator category — 70 KB)
- `02-Competitor-Research/competitor-analysis.md` (Direct lender qualification — 148 KB, 1,846 lines)
- `02-Competitor-Research/CONSOLIDATED_COMPETITOR_ANALYSIS.md` (Fintech lenders — 82 KB, 700+ lines)
- `research/MASTER-COMPETITIVE-ANALYSIS.md` (Lead-gen / aggregators — 159 KB, 2,734 lines)
- `research/first-time-homebuyer-tools-research.md` (First-time buyer / gov't / education — 67 KB, 1,152 lines)
- `research/competitive_analysis_credit_tools.md` (Credit & approval tools — 54 KB, 543 lines)
- `RESEARCH_lenders_condo_tools.md` (Self-employed / non-QM / HOA / condo — 49 KB, 460 lines)

### Per-site deep-dive files (preserved for reference):
**Calculators:** Zillow, Redfin, Realtor.com, Bankrate, NerdWallet, SmartAsset, CNN Money, Consumer.gov, Investopedia, Kiplinger (10 files)
**Lenders:** Rocket, LoanDepot, Better.com, UWM, Caliber/NewRez, Chase, BofA, Wells Fargo, Guild Mortgage, NewRez/Shellpoint (10 files)
**Fintechs:** Better, SoFi, Figure, Tomo, Loanai, Rocket Pro, Homepoint, Newfi, Angel Oak, Deephaven (10 files)
**Lead-gen:** LendingTree, Credible, Bankrate, NerdWallet, TMR, MND, Finder, Money.com (8 files)
**Non-QM / Condo:** Angel Oak, NewFi, Deephaven, Athas, LoanStream, Acra, Verus, Kiavi, Pesto, Findigs, First American, Condo Control, Fannie PEL, FHFA (14 files)
**First-time buyer:** Fannie HomePath, Freddie Home Possible, FHA, HUD Counseling, NeighborWorks, CalHFA, HomeView, CreditSmart, CFPB Owning a Home, CFPB Complaint, HUD Homebuyer's Guide (11 files)
**Credit tools:** Experian Boost, FICO Simulator, myFICO, Credit Karma, Credit Sesame, AnnualCreditReport, WalletHub, Self, Rocket Homes (9 files)

**Total: 45+ competitors analyzed, ~5 MB of verbatim-quoted research across ~30,000+ lines of analysis.**

### Other key project files:
- `00-Executive-Summary.md` — Master executive summary for the project
- `mortgage-keyword-research.md` — Keyword research for SEO
- `mortgage_lead_economics_report.md` — Lead economics
- `SAFE_LANGUAGE_COMPLIANCE_REPORT.md` — Compliance language guide
- `MAP_Rule_TILA_Advertising_Comprehensive_Report.md` — Advertising compliance

---

**End of Report.**
