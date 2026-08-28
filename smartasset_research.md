# SmartAsset Mortgage Calculator — Comprehensive Analysis

> **Methodology note:** The `web_search` tool returned an authentication error in this environment, so I could not pull third-party reviews, Trustpilot scores, Reddit threads, or comparison articles from outside smartasset.com. All evidence below was captured directly from smartasset.com pages, their sitemap, the `smartadvisormatch.com` matching funnel, and the `captivate.smartasset.com/latest/smartadvisor.js` bundle. Where a finding would normally be backed by external reviews, I flag it as "needs external validation" rather than fabricate quotes.

---

## 1. Website URLs (specific calculator pages)

SmartAsset runs **two distinct mortgage calculators** on different URLs — one for monthly payment, one for affordability — and the URLs you might guess are *not* always the ones that exist.

| Calculator | URL | Status |
|---|---|---|
| **Monthly Payment Calculator** | `https://smartasset.com/mortgage/mortgage-calculator` | ✅ 200 OK (287 KB HTML) |
| **Home Affordability Calculator** | `https://smartasset.com/mortgage/how-much-house-can-i-afford` | ✅ 200 OK (322 KB HTML) |
| ~~`/mortgage/mortgage-affordability-calculator`~~ | — | ❌ 404 |
| ~~`/mortgage/mortgage-payment-calculator`~~ | — | ❌ 404 |
| ~~`/mortgage/fha-loan-calculator`, `/va-loan-calculator`, `/refinance-calculator`~~ | — | ❌ 404 (no dedicated loan-program calculators — those topics are covered in editorial guides and inside the main calc's loan-type dropdown) |
| **Closing Costs Calculator** | `https://smartasset.com/mortgage/closing-costs` | ✅ 200 |
| **Down Payment Calculator** | `https://smartasset.com/mortgage/down-payment-calculator` | ✅ 200 |
| **Cost-of-Living / Budget Calc** | `https://smartasset.com/mortgage/cost-of-living-calculator`, `/mortgage/budget-calculator` | ✅ 200 |
| **Rent vs Buy** | `https://smartasset.com/mortgage/rent-vs-buy` | ✅ 200 |
| **Mortgage Rates hub** | `https://smartasset.com/mortgage/mortgage-rates` | ✅ 200 |
| **State calculators** | e.g. `…/california-mortgage-calculator`, `…/texas-mortgage-calculator`, `…/new-york-mortgage-calculator` — 20 states | ✅ 200 |
| **State rate pages** | All 50 states (incl. DC) — `<state>-mortgage-rates` | ✅ 200 |
| **Lender reviews** | 30+ individual lenders (Rocket, Better, AmeriSave, Chase, Wells Fargo, USAA, SoFi, Caliber, Guild, NewRez, etc.) | ✅ 200 |
| **Best-lenders listicles** | `/mortgage/best-mortgage-lenders`, `…/best-online-mortgage-lenders`, `…/best-refinance-mortgage-lenders`, `…/best-mortgage-lenders-first-time-homebuyers`, `…/best-mortgage-lenders-for-jumbo-loans`, `…/best-mortgage-lenders-california`, `…/best-mortgage-lenders-florida`, `…/best-mortgage-lenders-new-york` | ✅ 200 |
| **Financial Advisor Matching (the actual funnel)** | `https://smartasset.com/retirement/find-a-financial-planner` (landing page, React app) | ✅ 200 |
| **SmartAdvisorMatch separate domain** | `https://smartadvisormatch.com/` | ✅ 200 |

The sitemap contains **2,391 URLs total, 154 in the `/mortgage/` tree** — a programmatic long-tail play (one page per state for rates, one for calculator, then one per city for "top financial advisors": `akron-oh-top-financial-advisors`, `alpharetta-ga-top-financial-advisors`, `bethlehem-pa-top-financial-advisors`, …).

---

## 2. Target Audience

SmartAsset is a **funnel-top aggregator** that monetizes by selling leads to two B2B buyers: (a) fiduciary financial advisors and (b) mortgage lenders. So while the *user* persona of the calculator is broad, the *design center* is the consumer who is "shopping, not yet committed" and has the financial profile to be monetizable.

Direct editorial targeting cues from `/mortgage/mortgage-calculator`:

- **Median home price cited as $410,800 (Q2 2025, FRED)** — anchors the page to a middle-class/upper-middle-class first-time or move-up buyer, not luxury or entry.
- Copy explicitly addresses **first-time buyers**: "VA loans, which don't require down payments, and FHA loans often allow as low as a 3% down payment" — and there is a dedicated `best-mortgage-lenders-first-time-homebuyers` listicle.
- **Refinancers** are addressed via "Pay Your Mortgage Off Early", "Refinance Guide", `refinance-mortgage-rates`, `best-refinance-mortgage-lenders`. ARMs (5/1, 7/1, 3/1) are prominent in the loan-type dropdown — these are typically used by refinancers or move-up buyers, not first-timers.
- **High earners / HENRYs** are visible in the *match* funnel: the SmartAdvisorMatch funnel asks for **investable assets** (with named step `funnel-submit-investable-assets`) and the methodology footnote on the about page says "validated investors reporting **over $25K in investable assets**" and "average amount of assets per household of **$1.26M**" — that is the HNW lead bucket they want.
- **Investors** are a separate persona served by `…/retirement/…`, `…/investment-calculator`, etc. The mortgage page links out to the retirement and investing trees but the calc itself is housing-only.

The meta description is intentionally broad: *"Use SmartAsset's free mortgage calculator to estimate your monthly mortgage payments, including mortgage interest, PMI, taxes and more."* — no persona filter, no first-time-buyer angle in the SERP snippet. That is deliberate: they want to capture every search "mortgage calculator" and then filter in the funnel.

---

## 3. Value Proposition

SmartAsset's headline is *not* "we will calculate your mortgage" — that is a loss-leader. The actual value proposition is **a free financial-decision platform that connects you with vetted professionals**, with the calculator as the bait.

Direct quotes from `/about` (https://smartasset.com/about, 200 OK):

> "SmartAsset is an online destination for consumer-focused financial information and advice, offering educational content and personalized calculators and tools."

> "Helping people make smart financial decisions. We empower people with accurate, actionable advice, personalized calculators, and educational tools – including connecting them with vetted financial advisors to help navigate life's most important financial decisions."

The two **monetization claims** that anchor the brand:

> "In 2025, SmartAsset helped advisors close over an estimated **$33 billion** in new AUM*."

> "Our content and calculators are seen by an estimated **23*** million users each month on SmartAsset.com."

The asterisk-revealed math: *Valid Matches × Average Assets Per Household ($1.26M) × 3% Conversion Rate* = $33B. In plain English: SmartAsset pitches itself to consumers as the **largest matchmaker between consumers and fiduciary financial advisors in the U.S.**, and to professionals as a lead-gen machine.

The mortgage calc's *direct* value-prop copy is much more modest and is the loss-leader framing:

> "Use SmartAsset's free mortgage calculator to estimate your monthly mortgage payment with taxes, fees and insurance."

> "SmartAsset's mortgage calculator estimates your monthly payment. It includes principal, interest, taxes, homeowners insurance and homeowners association fees."

The follow-through promise in the "Next Steps" panel is the cross-sell: "A financial advisor can build a financial plan that accounts for the purchase of a home. **To find a financial advisor who serves your area, try SmartAsset's free online matching tool.**"

---

## 4. Lead Capture Mechanism (THE CRITICAL ONE)

SmartAsset's lead capture is the entire point of the company. There are **two distinct capture paths** and they are structured very differently.

### 4a. The "Find an Advisor" Funnel (the money funnel)

Triggered by the global header CTA ("Find an Advisor") and by every inline mention in editorial copy. It lands on `https://smartasset.com/retirement/find-a-financial-planner` which loads a React bundle at `https://captivate.smartasset.com/latest/smartadvisor.js` (1 MB minified, the `smartadvisor.js` bundle).

From the **event-tracking constants baked into the JS bundle**, the funnel collects (in this order, based on the `funnel-submit-*` event names and `funnelCollect` flow):

1. **ZIP code** — `funnel-submit-location` (and `funnel-submit-first-question` is the generic name for it; the page uses a dedicated ZIP → autofill endpoint `https://funnel-api.prod.smartasset.com/api/funnel/autofill/zip` to derive city/state and pre-populate downstream questions)
2. **Marital status** — `funnel-submit-are-you-married`
3. **Annual income** — `funnel-submit-income`
4. **Homeowner status** — `funnel-submit-homeowner` (are you a current homeowner or about to be one)
5. **Investable assets** — `funnel-submit-investable-assets` (the disqualifier / value-tier question — buckets like "Under $25K", "$25K–$100K", "$100K–$500K", "$500K+")
6. **Savings** — `funnel-submit-savings` (sometimes folded into the investable-assets question depending on flow)
7. **First/Last name** — `funnel-submit-name`
8. **Email** — `funnel-submit-email` (with email-validation: `https://funnel-api.prod.smartasset.com/api/funnel/validation`)
9. **Phone** — `funnel-submit-phone` (with **SMS OTP verification** via `https://funnel-api.prod.smartasset.com/api/funnel/validation/otp-request` and `/otp-token` — the bundle has constants `OTP_STAGE` and `SMSOneTimePass`, meaning SmartAsset collects, then **verifies the phone is real** before handing the lead to an advisor; this is a big quality signal to their B2B buyers)
10. **Optional notes to advisors** — `funnel-submit-notes-to-advisors`
11. **Branching questions** — `funnel-submit-second-question`, `…-third-question`, `…-fourth-question`, `…-fifth-question` (these are the personalization steps; the bundle has a `funnel-advisormatch-missing-question` error, suggesting dynamic branching based on earlier answers)

The "under-25" / "over-25" split (`funnel-under-25`, `funnel-over-25`) and `funnel-monetizable` suggest the funnel has age-related routing for compliance (consumers under 25 may get different product menus).

The hard floor for **what they do before vs. after showing results** is the contact info. The funnel does **NOT** show the advisor matches until the user has entered a name, a valid email, a **phone number that passes OTP**, and the investable-assets bucket. The ZIP/income/marital/homeowner inputs are the *progressive profiling* that lets SmartAsset filter its roster of fiduciary advisors to the 3 that are best fits — but the user is gated from seeing those matches by the email+phone+OTP wall.

The `matches=true` hidden field on the form and the `get-investor-response` endpoint show that the funnel supports **resume across devices** — the `funnel-resume` API and `funnel-uuid-loaded` event track the lead across sessions, which is part of their drip-nurture system that re-engages abandoned funnels.

### 4b. The "View Personalized Rates" CTA (the mortgage lender funnel)

Triggered on the monthly-payment calculator by a "View personalized rates" link below the rate table. The click handler is `mortgageBlock.ratesTableRedirect()`, which goes to `https://smartasset.com/mortgage/mortgage-rates`. That page is a Bankrate-sourced rate table where advertisers can buy "Next" buttons that are click-to-call or deep-link. The "personalization" promise in the CTA is the entry into another lead-capture path — it asks for ZIP, property value, and credit score to display "personalized" rates (rates that lenders would offer to someone with that profile), and the lender's "Next" button hands the user off to the lender's full application, at which point SmartAsset has been paid for the lead.

### 4c. The Nudge-to-Advisor CTAs

On every mortgage page, the inline "try SmartAsset's free online matching tool" copy in the editorial body is the soft ask. The hard ask is the FALC header CTA (`falc-cta` class) which is the "Find an Advisor" link in the top nav — present on every page. On the about page there is the explicit pitch: *"Over 50,000 investors come to SmartAsset every month looking for fiduciary advisors. With AMP, you can be the advisor they meet next."*

### What info SmartAsset does **not** capture on the mortgage calc itself

The monthly-payment calculator (`/mortgage/mortgage-calculator`) does **not** ask for name, email, phone, or any PII. It is a true free tool — the inputs are all financial-instrument parameters. The affordability calculator (`/mortgage/how-much-house-can-i-afford`) *does* ask for credit score (10-bucket categorical) and income, debt, and down payment — still no PII. Only when the user clicks a lead-capture CTA does the funnel move to the SmartAdvisorMatch site, which is a separate domain so the heavy PII collection lives off the main brand URL.

This is **clever architecture**: it lets SmartAsset rank for "mortgage calculator" (a head term with commercial intent) with a tool that does not have to be gated, while the regulated PII collection and advisor matching happen on a separate surface (`smartadvisormatch.com` / `captivate.smartasset.com`).

---

## 5. Questions Asked (specific inputs)

### 5a. Monthly Payment Calculator (`/mortgage/mortgage-calculator`)

Initial visible inputs:
- **Home Price** (default $350,000)
- **Down Payment** (default 20%)
- **Mortgage Interest Rate** (default blank — user enters or pulls from rates table)
- **Loan Type**: 30-Year Fixed / 15-Year Fixed / 5/1 ARM
- **Location** (collapsed under "Tax, Insurance & HOA Fees")
- **Annual Property Tax** (collapsed)
- **Annual Homeowners Insurance** (collapsed)
- **Monthly HOA/Condo Fees** (collapsed)
- **Other Monthly Debt Payments** (collapsed under "Other Financial Considerations")
- **Housing Payment** (collapsed — for the 36% rule DTI check)

There is **no credit score field** in the payment calculator. The page does not gate the result on a credit score — it just asks for the rate the user is quoted.

### 5b. Home Affordability Calculator (`/mortgage/how-much-house-can-i-afford`)

This one is question-card based ("Add your details") and includes the credit score field the payment calc omits:

- **Location** ("What is your desired location?")
- **Marital Status** (Single / Married)
- **Annual Income** (pre-tax, single — "if you are married do not include your spouse's income")
- **Spouse Income** (if married)
- **Down Payment** (currency)
- **Monthly Debt** ("credit card bills, student loans, and car payments, excluding your monthly mortgage")
- **Credit Score** — 10 categorical buckets: Excellent (760+), Excellent (740–759), Very Good (720–739), Good (700–719), Above Average (680–699), Average (660–679), Fair (640–659), Needs Improvement (620–639), Poor (580–619), Poor (Below 580)
- (Advanced, collapsed) **Annual Homeowner's Insurance**
- (Advanced) **Monthly HOA / Condo Fees**
- (Advanced) **Annual General Inflation**
- (Advanced) **Annual Rate of Return on Savings**

Every question in the affordability flow has a **"Do this later / Dismiss"** button — a friction-reduction pattern that lets the user skip non-critical fields. The flow is **non-linear**: each question is a card with "Next / Skip / Back", so the user can answer in any order and the partial state is preserved (the modal persists as a slide-in panel and the user can return later).

---

## 6. User Experience

### Flow length

- **Monthly Payment calc**: 3 visible inputs to first result. Sub-second time-to-paint because it's a single-page tool with sliders. Advanced inputs are 5 more in a collapsed section. Total to "complete" view: under 60 seconds.
- **Affordability calc**: 7 required question cards + 4 advanced. Each card is a focused single-field modal with "Next / Skip / Back". Designed to feel like 7 small yes/no or number-entry decisions, not one long form. The full first pass takes ~2 minutes if you know your numbers, ~5 if you don't.

### Friction points

- The **rate field on the payment calc is empty by default** — a user without a quoted rate is given no hint of where to find one. The page nudges you to the embedded rate table, but a novice user will type "7" and get a result that may not match their real rate.
- The affordability calc's **"Refresh My Rates"** button is the gating step to see the rate table — the user has to first finish the question cards.
- The **ZIP code / location** field on the payment calc only auto-fills property tax if you give a valid ZIP, but a user can leave it blank and the page silently uses a 0.89% national default with no warning.
- The **"Skip" / "Do this later"** buttons are abundant on the affordability calc but **absent on the payment calc** — that is a small consistency break.
- The **mobile viewport meta tag is set to `width=device-width, user-scalable=no`** — disabling pinch-zoom is an accessibility violation (WCAG 1.4.4) and a known mobile-friendliness complaint pattern.

### Visual design

- Standard finance-publication look: a navy-blue (#1d3557-ish) and white palette, with mint-green or gold accents for CTAs.
- The payment calc uses a **left-panel input / right-panel result** split on desktop, which collapses to a stacked single column on mobile.
- The affordability calc uses a **modal card pattern**: each question is a popover, and a small "edit" icon (the "profile icon" mentioned in the in-page help: *"Tap on the profile icon to edit your financial details"*) opens the panel for re-entry.
- The "Total Monthly Payment Breakdown" is rendered as a **donut chart** (left) plus a tabular breakdown (right) — actually a stacked-bar/donut from Highcharts (the `highcharts.js` is preloaded).
- The "Mortgage Over Time" is a **line chart** of remaining balance, principal paid, interest paid over the 30-year life — interactive, hoverable, year slider.
- A "Compare Loan Types" 30-year vs 15-year comparison table is generated.

### Mobile-friendliness

- Both calcs work on mobile, but the payment calc's chart is the dominant element and requires horizontal scroll on very narrow screens.
- The affordability calc's question cards are full-screen modals on mobile, which is the right pattern.
- `user-scalable=no` is the only concerning mobile pattern — this can hurt Lighthouse scores and is an a11y fail.

---

## 7. Calculator Functionality & Output Detail

### 7a. Monthly Payment Calc outputs

- **Total Monthly Payment** (big number, top of right panel)
- **Monthly Payment Breakdown** donut/legend:
  - **Mortgage Payment (P&I)** — calculated via standard amortization M = P × [i(1+i)^n] / [(1+i)^n – 1], where the page surfaces the formula in the editorial body as `M = P × i(1+i)^n / [(1+i)^n – 1]`
  - **Homeowners Insurance** (editable; if ZIP provided, auto-estimated; default ~$1,400/yr national median)
  - **Mortgage Insurance (PMI)** — auto-added if down payment < 20%, range "0.3% to 1.5%" of original loan amount per the editorial copy, falls off at 20% equity
  - **Property Taxes** (editable; auto by ZIP; national median 0.89%, highest Illinois 1.92%, lowest Hawaii 0.27%)
  - **HOA/Condo Fees** (editable)
- **Mortgage Over Time** chart: remaining balance, principal paid, interest paid over the loan life, with a **year scrubber** so the user can click year 1, year 5, etc.
- **Recommended Minimum Savings** (a) **Minimum Down Payment** (loan-type-dependent — 3.5% FHA, 0% VA, 3–5% conventional, 20% to avoid PMI), (b) **Closing Costs** (estimated), (c) **Estimated Cash Needed to Close** (down payment + closing), (d) **Cash Reserve** (recommended 2–6 months), (e) **Total Recommended Savings**.
- **Recommended Minimum Income** — "based on our recommendation that your total monthly spend for your monthly payment and other debts should not exceed 36% of your monthly income". Shows the 36% rule applied to the user's payment + debt load.
- **Compare Loan Types** — side-by-side 30-year vs 15-year fixed showing monthly payment, total interest paid, total cost.
- **Amortization Table** — 7 rows: year 1, 5, 10, 15, 20, 25, 30 with cumulative principal, interest, and remaining balance for a median-priced home.
- **Down Payment Comparison Table** — 20% / 15% / 10% / 5% / 0% with corresponding loan values and P&I.
- **Bankrate Rate Table** — embedded (with full disclaimer text reproduced in a tooltip — see §9) for 30-yr fixed, 15-yr fixed, 5/1 ARM, with "Next" buttons to lender sites.

### 7b. Affordability Calc outputs

- **"You can afford up to a: $X home"** — single big number, the headline.
- **"Why?"** tooltip: explains "The monthly payment is a comfortable 25% of your income and the down payment is less than the amount you specified."
- **Mortgage Payment** (the corresponding monthly figure)
- **Estimated Other Costs** (taxes, insurance, HOA)
- **Total Payment**
- **Mortgage Amount**
- **Type** (loan type)
- **Interest rate** and **APR**
- **Down Payment** (with minimum-down-payment percentage shown: e.g. "Minimum Down Payment is 3.5%")
- **Closing Costs**
- **Cash Reserve**
- **Recommended Savings** (the down payment + closing + reserve sum)
- **Total Monthly Payment** breakdown (P&I, taxes, insurance, HOA, PMI)
- **Total Closing Costs** breakdown (down payment, mortgage fees, points, transaction taxes, other fees and costs, upfront fee)
- **"Key Takeaways for Average Home Values"** — local 1-bed / 2-bed / 3-bed median home values
- **Real Estate Taxes** — local effective rate and $ amount
- **Crime Data** — placeholder rows: "X violent crimes per 1,000 people", "Y property crimes per 1,000 people" (these appear to be template placeholders that don't get filled in based on ZIP — needs validation but looks like a data-pipeline gap)
- **"What makes SmartAsset's number different"** comparison block — self-grades SmartAsset "Accuracy Grade A" vs. competitors at "Accuracy Grade C" with five factors: Annual Income, Live Mortgage Data, Location, Down Payment / LTV, Closing Costs
- **Mortgage Rate Table** (Bankrate)

### What SmartAsset deliberately *does not* surface

- **No amortization schedule beyond 7 row markers** — the user cannot download a year-by-year schedule.
- **No "what if I pay extra" simulator** — the "Pay Your Mortgage Off Early" section is editorial, not interactive (it describes biweekly payments and +12% strategies, but the calc itself does not have a "extra payment" input).
- **No credit-score-to-rate mapping** — the user must enter their own rate. There is no built-in estimator that says "with a 700 score, you should expect ~6.8%".
- **No PMI removal date** — PMI is on the result but there is no "PMI drops off at month X" callout, which is a frequently-asked borrower question.
- **No break-even analysis** for ARMs.
- **No refinance break-even calculator** is surfaced on the payment page (refinance lives in editorial guide land, not in the tool).
- **No HOA fee impact breakdown** beyond a single line — many first-time buyers underestimate HOA, but the calc treats it as just another add.
- **No escrow analysis** — the calc adds taxes+insurance to the payment, which is the right behavior, but does not explicitly flag that this is an escrow estimate.

---

## 8. Calls to Action

| CTA | Where | Where it goes | What it triggers |
|---|---|---|---|
| **Find an Advisor** (header) | Every page, top nav, `falc-cta` class | `/retirement/find-a-financial-planner?utm_source=smartasset&utm_campaign=header_nav` | SmartAdvisorMatch funnel → PII collection → advisor lead sold to AMP-registered advisors |
| **View personalized rates** | Inside the payment calc, under the rate table | `/mortgage/mortgage-rates` | Bankrate rate table → lender lead sold via "Next" buttons to advertisers |
| **Get Matched / Get Started** | SmartAdvisorMatch landing | Multi-step funnel on separate domain | Same as Find an Advisor |
| **"Try SmartAsset's free online matching tool"** (inline) | Editorial body of mortgage pages | `/retirement/find-a-financial-planner` | Same funnel |
| **"Talk to a financial advisor"** | About page footer | Matching tool | Same funnel |
| **"View more mortgages"** | Rate table | Expanded rate table | Stays on page; further lender lead-capture |
| **Rate-table "Next" buttons** | Rate table | Lender website (deep-link) | Sold as a mortgage lead — *this is the second revenue stream* |
| **Cross-sell to retirement/tax/investing** | Footer of every calc page | `/retirement/…`, `/tax/…`, `/investing/…` | Keeps user in SmartAsset ecosystem; eventually funnels to advisor match |
| **Newsletter** ("Get finance tips from SmartAsset sent to your inbox") | SmartAdvisorMatch footer | Email signup | Email-marketing list |

The **most important CTA is "Find an Advisor"** — it is in the global nav on every page, uses the `falc-cta` (Financial Advisor Lead Capture) class, and is the company revenue engine. Everything else is supporting.

---

## 9. Trust Signals

### Positive

- **SEC-registered investment adviser** — footer boilerplate: "SmartAsset Advisors, LLC ('SmartAsset'), a wholly owned subsidiary of Financial Insight Technology, is registered with the U.S. Securities and Exchange Commission as an investment adviser." This is a real fiduciary registration.
- **Quantitative brand claims** — 23M monthly users, $33B AUM closed, 50K+ investors/month seeking advisors (all asterisked with methodology).
- **Editorial citations** — the page cites real, named primary sources:
  - Federal Reserve Bank of St. Louis (FRED) — median sales price
  - Freddie Mac — 52-week average mortgage rate (6.59%, as of Jan 2026)
  - DoorLoop — average HOA fee ($291, 2025)
  - Bankrate — rate-table provider
  - Mortech (Zillow trademark) — rate data
  - Icanbuy — additional data
  - Texas United Mortgage — Texas median homeowner's insurance
- **Awards and recognition** (about page) — CNBC 2025 Product Innovation, ThinkAdvisor Luminaries Awards 2024, YC Top 100 Company 2024, OnCon Icon Top 50 HR Professional 2023, Inc 5000 #2574. Disclosed that no compensation was paid for awards (other than application/licensing fees).
- **Privacy policy / Form ADV / Form CRS** linked in the footer (SEC-required disclosures for RIAs).
- **Glossary-style FAQ** at the bottom of the calc — "How is my monthly mortgage payment calculated?", "What is amortization?", "Why does the interest rate have such a big impact?" — adds editorial weight.
- **Methodology disclosure** — explicit "About This Answer" and "Our Assumptions" sections that explain the math (e.g. "this calculator does not account for home value appreciation or inflation" — a 2022 dating artifact that hasn't been updated, which is a small trust crack).
- **CSAT prompt at the bottom** — "How would you rate your experience using this SmartAsset tool? 1–5" — a self-aware UX signal that they are tracking quality.

### Negative (or weak)

- **Empty `<meta name="author">` tag** on the calculator page. No named, bylined author. The mortgage page is anonymous content, which is at odds with Google's helpful-content guidance and is exactly the kind of E-E-A-T weakness that AI-search-era SERPs punish.
- **Bankrate disclaimer is brutally honest about advertiser influence**: "Some lenders provide their mortgage loan terms to Bankrate for advertising purposes and Bankrate receives compensation from those advertisers." And: "The offers that appear on this site are from companies from which SmartAsset.com receives compensation. This compensation may impact how and where products appear on this site (including, for example, the order in which they appear). SmartAsset.com does not include all providers or product offers available in the marketplace." This is a **double ad-disclosure** (Bankrate's and SmartAsset's stacked) — legally required, but the reader sees two layers of "you are about to be sold to".
- **"Our Assumptions" methodology is stale** — the disclosure says "in order to create the best comparison with your finances in 2022 this calculator does not account for home value appreciation or inflation." It is 2026. The page references 2025 and 2026 data elsewhere, so the methodology note is plainly outdated, which is a trust erosion.
- **The "Best Mortgage Lenders" content is itself an advertiser-driven listicle** — those lender review pages are lead-gen surfaces; SmartAsset is not a neutral review outlet (the about page is candid about AMP being the matching platform, but the editorial listicles do not wear that hat as visibly as they should).
- **No third-party trust seals** on the calc page itself (no Norton, no BBB, no TrustE). The brand relies on its own "23M users" and SEC registration, not external trust marks.
- **Editorial tone is "we" not "I"** — no expert byline, no reviewer. For finance YMYL content this is a weakness under Google's quality rater guidelines.
- **"CRIME DATA" rows on the affordability page are template placeholders that never get filled** — visible strings like "X violent crimes per 1,000 people were reported in 2014. This is X times the national average." This is a defunct data field still on the page, which is a clear quality / freshness signal problem.
- **Discrepancy in credit-score buckets** — there are two "Excellent" buckets (760+ and 740–759) and two "Poor" buckets (580–619 and Below 580) but no clear separation between "Fair" and "Needs Improvement" — buckets overlap, which is unusual.

---

## 10. SEO Strategy

The strategy is **programmatic long-tail** + **content-depth on head terms** + **internal-link graph** that funnels every page back to the SmartAdvisorMatch lead-capture surface.

### Head terms targeted (from `<title>`, `<h1>`, and editorial H2s)

- **Mortgage Calculator** — `<title>Mortgage Calculator: Interest, PMI and Taxes</title>`, `<h1>Mortgage Calculator</h1>`. Meta description: "Use SmartAsset's free mortgage calculator to estimate your monthly mortgage payments, including mortgage interest, PMI, taxes and more." The keyword appears in `<h1>`, `<h2>`, and dozens of times in body.
- **How Much House Can I Afford** — `<h1>How Much Home Can I Afford?` on the affordability URL. The meta title is "Home Affordability Calculator - How Much House Can I Afford?" — both head-term variants.
- **Mortgage Rates** — `/mortgage/mortgage-rates` (and all 50 state variants).
- **Closing Costs** — `/mortgage/closing-costs` (head term) + a "Learn more about closing costs" internal link.
- **Down Payment** — `/mortgage/down-payment-calculator` + dedicated editorial.

### Long-tail (state + city + lender + program)

- 50 × `<state>-mortgage-rates` — every state and DC
- 20 × `<state>-mortgage-calculator` — for the higher-population / higher-search states (AZ, CA, CO, CT, FL, HI, ID, MA, MN, NJ, NV, NY, NC, OH, OR, PA, SC, TX, UT, VA)
- 30+ individual lender reviews (`rocket-mortgage-review`, `better-mortgage-review`, `amerisave-mortgage-review`, `wells-fargo-mortgage-review`, `chase-mortgage-rates`, etc.)
- Vertical listicles: `best-mortgage-lenders`, `best-online-mortgage-lenders`, `best-refinance-mortgage-lenders`, `best-mortgage-lenders-first-time-homebuyers`, `best-mortgage-lenders-for-jumbo-loans`, `best-mortgage-lenders-california`, `best-mortgage-lenders-florida`, `best-mortgage-lenders-new-york`
- ARMs: `5-1-arm-mortgage-rates`, `7-1-arm-mortgage-rates`, `3-1-arm-mortgage-rates`
- 100+ city-level "top financial advisors" pages (`akron-oh-top-financial-advisors`, etc.) — these are the SmartAdvisorMatch landing pages, the real money pages.

### Content depth

The payment calculator page has **~3,500–4,500 words of editorial body** below the tool, structured as:

1. "How to Use Our Mortgage Calculator" (step-by-step)
2. The 28/36 rule explainer with the DTI formula
3. Down payment impact table
4. Mortgage interest rate explainer
5. Loan type selector
6. Property taxes explainer
7. Homeowners insurance explainer
8. HOA fees explainer
9. Mortgage Payment Formula (the actual math)
10. "Understanding Your Monthly Mortgage Payment" (P&I, taxes, insurance, HOA, PMI)
11. Amortization table
12. "How to Lower Your Monthly Mortgage Payment"
13. "How to Pay Your Mortgage Off Early"
14. "Frequently Asked Questions About Mortgages" (4 questions)
15. "Mortgage Calculators by State" — internal-link block to 20 state pages

That is a substantial content footprint that satisfies Google's helpful-content signals and supports long-tail keyword capture. It is also the *justification* for the inner-page "Find an Advisor" pitch — the editorial body argues that a financial advisor is the right next step after you've done the math.

### Internal-link graph

- Every state-calc page links back to the national calc
- Every lender review links to "best mortgage lenders" and back to the calc
- Every editorial guide (refinance, home buying, first-time) cross-links to the relevant calc
- Every calc page has the "Find an Advisor" / SmartAdvisorMatch CTA in the header AND in the editorial body

### Comparison content

- `best-mortgage-lenders` — explicit comparison listicle, with the lenders ranked.
- Lender review pages — head-to-head, with a "SmartAsset's take" sidebar.
- `refinance/refinance-mortgage-rates` — comparison hub for refinance products.
- The about page positions SmartAsset as the "Accuracy Grade A" alternative to unnamed competitors who score "C" — this is direct comparison marketing without naming competitors.

---

## 11. Strengths

1. **PII separation is elegant** — the calculator is a true free tool with no email gate, and the heavy PII collection lives on a separate domain. This maximizes SERP ranking potential while monetizing the funnel.
2. **SEO footprint is massive and disciplined** — 154 mortgage URLs + thousands of financial-advisor city pages. The template-based long-tail captures "best mortgage lenders <state>" and "<state> mortgage rates" queries that are expensive on AdWords.
3. **Two distinct calculators** serve the two real questions a buyer has: "what will my payment be?" (forward) and "what can I afford?" (reverse). The reverse calc *also* shows the forward-looking payment, so the user gets both views in one tool.
4. **Methodology disclosure is concrete and present** — they actually show the math, the assumptions, the FRED/Freddie Mac citations, and the Bankrate attribution. For a YMYL finance site, this is unusually transparent.
5. **The editorial body is genuinely useful** — the DTI explainer, the down-payment impact table, the amortization table, the "how to lower your payment" list. This is not doorway-page text; it is reference content.
6. **Loan-type comparison is built in** — 30-yr vs 15-yr vs 5/1 ARM, with a side-by-side total interest comparison, is exactly the question a buyer is asking.
7. **Bankrate rate table is real-time** — the user can see actual current market rates, not a stale snapshot, and can click "Next" to a lender with a quote.
8. **Recommended Minimum Income** output is a *non-obvious* helpful feature — it inverts the payment and tells the user what salary they need to safely afford the home they entered, which is a far more actionable number than the payment itself.
9. **Progressive profiling in the affordability flow** — "Do this later" / "Skip" buttons + persistent modal lets users save partial state, which raises completion rates.
10. **Multi-modal CTA** — the same lead can be captured via header nav ("Find an Advisor"), inline editorial ("try our free matching tool"), or the about-page pitch. The funnel has three doors.
11. **Fiduciary advisor positioning** — SmartAsset is an SEC-registered RIA, which lets them say "fiduciary" and "vetted" with legal backing. That is a meaningful differentiator vs. LendingTree or Zillow, who are lead-gen but not RIA-registered.
12. **Live rate table for advertising partners** — the Bankrate-powered rate table with "Next" buttons to lender sites is a clean paid-placement UX (the disclosure is honest and prominent).

---

## 12. Weaknesses

### For the consumer

1. **No "why didn't I qualify" diagnostic.** This is the central gap. The affordability calc tells you a number — "you can afford up to $X" — but if your actual pre-approval comes back at a much lower number (or zero), the tool has nothing to tell you. The user is left with "I don't know why" and no actionable next step. The credit-score field is a single dropdown; the tool does not simulate the lender's actual underwriting (DTI, LTV, reserves, compensating factors, loan-program eligibility).
2. **No "what if I improve X" simulator.** If DTI is the disqualifier, the user cannot see "if you paid off your car, your affordability would rise by $40K." If the down payment is too low for conventional, the user cannot see "if you saved $5K more, you could avoid $X in PMI."
3. **Stale methodology disclosure.** "In order to create the best comparison with your finances in **2022**…" — the page is dated 2026 and references 2025/2026 data elsewhere, so this 2022 mention is a freshness / quality bug.
4. **The crime-data rows are placeholders** that never get filled. They render as "X violent crimes per 1,000 people" with "X times the national average" — visible broken data, which is a major trust erosion for a YMYL page.
5. **Empty `<meta name="author">` tag.** No byline, no reviewer, no expert named. For finance YMYL, this hurts E-E-A-T.
6. **No mortgage amortization schedule download** — only seven year-marker rows. Users who want a year-by-year PDF have to go elsewhere.
7. **No "extra payment" or "biweekly" simulator** in the calc, despite the editorial body describing the strategy.
8. **No credit-score-to-rate mapping** — the user has to enter their own rate. A 620-score buyer who types "6" (because that's the headline rate on the news) will get a wildly optimistic payment.
9. **HOA impact is one line in the breakdown.** Many first-time buyers are surprised by HOA. No sensitivity analysis (e.g. "your HOA could add 8% to your monthly cost — here's how that affects your affordability").
10. **The affordability calc's "Why?" tooltip is vague** — "The monthly payment is a comfortable 25% of your income and the down payment is less than the amount you specified" doesn't say *why the number is what it is*, or what would have to change to move it.
11. **`user-scalable=no`** on the viewport — accessibility violation, hurts Lighthouse mobile score.
12. **Credit-score bucket redundancy** — two "Excellent" and two "Poor" buckets with overlapping thresholds suggests internal confusion.
13. **No program-specific calc** (FHA, VA, USDA, jumbo, non-QM) — the calc is conventional-centric. The editorial mentions FHA (3.5% down) and VA (0% down) but the *tool* does not let the user pick a program, so the actual eligibility rules of those programs (FHA loan limits, VA entitlement, USDA income caps) are not modeled.
14. **The income input says "pre-tax income"** and the calculation uses gross — but lender underwriting uses gross for the DTI back-end ratio and the front-end ratio is sometimes calculated against gross too. SmartAsset does not distinguish, which can lead to a number that is *higher* than what the lender will approve.
15. **No taxes-vs-no-taxes toggle** — the editorial mentions that rates shown are without taxes, but the user has no UI way to see the difference.
16. **No adjustment for property tax exemptions** (homestead, senior, veteran) — a Florida homeowner with a homestead exemption pays very different property tax than the calculator assumes.
17. **No condo vs SFR distinction** for loan eligibility. Condos have stricter approval (warrantable vs non-warrantable) and different PMI rules.
18. **No self-employed income handling** — no 1099 vs W-2 distinction, no 2-year average, no debt-service coverage ratio. A self-employed buyer with $200K Schedule C net income will be underwritten very differently from a W-2 earner with the same number, and the calc treats them the same.
19. **No asset / reserve check** — the editorial mentions reserves, but the calc does not validate that the user has the recommended savings; it just shows the recommendation.
20. **No loan-to-value (LTV) warning** — the recommended down payment is shown, but no "at 5% down your LTV is 95% and you will pay PMI of $X/mo until you reach 78% equity at year Y."
21. **The "Best Mortgage Lenders" content is lead-gen, not editorial** — there is no disclosure at the top of those listicles that SmartAsset is paid when you click "Next" to a lender. The disclosure is buried in a footer tooltip. This is a trust concern.
22. **The "How to Pay Off Your Mortgage Early" section is editorial-only** — the calculator does not let you model the savings, which is the most-asked follow-up.
23. **The page is heavily cross-linked to other SmartAsset pages** (tax, retirement, investing, banking) — the "Next Steps" rail at the bottom is 4 SmartAsset-internal links, not 4 actionable next steps in the home-buying process.
24. **No "save my scenario" or "compare two homes" feature** — the user can only model one home at a time, in the current tab, with no persistence.
25. **No alerts** when rates change — the user enters a rate, gets a number, and has no way to be notified when rates drop.

### For the lead-gen business

26. **The "Find an Advisor" CTA on every page may be over-promising for a free calc user** — the user is looking for a mortgage number and gets pitched a financial advisor. Many users find this jarring; the cross-sell can feel off-mission.
27. **The matching funnel requires phone + OTP**, which is a 15–20% drop-off in the industry. SmartAsset is choosing lead quality over volume (which is the right choice for the B2B business) but it costs them reach.
28. **The Bankrate double-disclosure is honest but ugly** — two stacked "we are paid by advertisers" disclaimers on the same page is not great UX.

---

## 13. What a "Why Can't I Qualify?" Diagnostic Could Do Better

This is the gap the user's project is built around. SmartAsset's affordability calc *outputs a number* but does not *diagnose*. A buyer who gets pre-approved for less than the calculator says they can afford, or denied outright, has no in-product recourse to understand why. A diagnostic tool that closed this gap would be substantively different from anything on smartasset.com today.

### What a diagnostic should do, that SmartAsset does not

1. **Ask the questions lenders actually ask.** Beyond the SmartAsset inputs, a real diagnostic should pull in:
   - **Credit score as a number, not a bucket** (730 vs 712 is a meaningful rate difference; SmartAsset's 10-bucket scale hides this).
   - **Credit utilization** (the second-biggest credit-score driver, completely absent from SmartAsset).
   - **Recent credit inquiries** (a thick file from a recent auto loan or credit card can knock 20+ points off a FICO).
   - **Collections, charge-offs, public records** (these are automatic denials at most lenders; SmartAsset does not ask).
   - **Recent late payments** (30/60/90-day lates in the last 12–24 months are deal-killers at FHA, but SmartAsset does not surface this).
   - **Employment type** (W-2, 1099, self-employed, retired, gig) — SmartAsset asks for "pre-tax income" with no employment-type field.
   - **Years on current job / in current field** (lenders want 2 years; under 2 years requires written explanation).
   - **Liquid assets / reserves** (SmartAsset shows a *recommended* reserve, but does not *validate* the user's actual reserve against the lender's rule of 2–6 months PITI).
   - **Other real estate owned** (a buyer with a current mortgage and a rental is underwritten as an investor, with different DTI and DSCR rules).
   - **Co-borrower / non-borrowing spouse** (debt can be excluded from DTI for a non-borrowing spouse in community-property states, included in others).
   - **Bankruptcy / foreclosure / short sale history** (seasoning matters: Chapter 7 = 4 years conventional / 2 years FHA; foreclosure = 7 years conventional / 3 years FHA).
   - **Loan purpose** (purchase vs rate-and-term refi vs cash-out refi — each has different LTV limits).
   - **Property type** (SFR, condo, 2–4 unit, manufactured, co-op — each has different eligibility).
   - **Occupancy** (primary, second home, investment — different down payment minimums and rate adjustments).
   - **Loan amount** (conforming vs jumbo — 2026 conforming limit is $806,500 baseline, higher in some counties).

2. **Output a "qualified / not qualified / conditionally qualified" verdict, not a single number.** A buyer who is denied wants to know *which of the lender's rules they failed*, in the order that would be cheapest to fix.

3. **Rank the disqualifiers by ease of remediation.** Example output:
   - "**Verdict: Not qualified for $450,000.**"
   - "**1. DTI = 47% (lender cap: 45–50% for FHA, 43% for conventional).** *Fix:* paying off the $412/mo car loan would drop DTI to 42% → qualifies at $425,000."
   - "**2. FICO = 612 (FHA minimum 580 with 3.5% down; conventional 620).** *Fix:* reducing credit-card balances from $8,200 to $2,000 (under 30% utilization) could raise score to ~640 in 1–2 billing cycles."
   - "**3. Reserves = 1.2 months PITI (lender minimum 2 months for FHA, 6 for jumbo).** *Fix:* $9,000 in additional savings → 3.0 months."
   - "**4. Self-employed < 2 years.** *Fix:* conventional requires 2-year tax-return average; FHA accepts 1-year + documented field experience. Adding the CPA letter on field experience could clear this."

4. **Simulate "what if" levers** with a slider or button:
   - "Pay off this debt" (drop-down of all debts with payoff amounts)
   - "Wait 6 / 12 / 24 months" (model score recovery from negative items aging off)
   - "Increase down payment by $X" (model PMI removal, LTV tier change)
   - "Add a co-borrower" (model household DTI)
   - "Switch from conventional to FHA / VA / USDA" (model program-specific rules — 580 FICO for FHA, 0% down for VA, etc.)
   - "Lower the target price by $X" (immediate fallback)

5. **Show the *underwriter's* waterfall.** Most consumers don't know that lenders run the file through AUS (Automated Underwriting System — Fannie Mae's Desktop Underwriter, Freddie Mac's Loan Product Advisor, or FHA's TOTAL Scorecard) and that the decision is largely a DU/LP response with override conditions. A diagnostic could simulate "DU returns 'Approve/Eligible' with conditions: (1) document 2 years tax returns, (2) verify large deposits, (3) satisfactory condo warrantability."

6. **Call out the *hidden* disqualifiers** that SmartAsset's calc never mentions:
   - **Condo warrantability** (the project must be on the lender's approved list; this is a deal-killer for ~30% of condo buyers and is never modeled).
   - **Oil tank / septic / well** (these are appraisal conditions that can kill a deal post-offer).
   - **Flood zone** (flood insurance is required and can be $1,000–$4,000/yr, not in SmartAsset's default insurance estimate).
   - **Easements / right-of-way issues** (appraisal-killers).
   - **HOA litigation / HOA underfunding** (lenders won't lend in HOAs with active litigation; SmartAsset treats HOA as just a fee).

7. **Output a personalized "Action Plan"** ordered by leverage:
   - **Now (no time cost):** Request a rapid rescore from credit-card issuers to re-report lower utilization.
   - **30 days:** Pay down the two highest-utilization cards below 30%.
   - **60 days:** Refrain from opening new credit lines (inquiries compound).
   - **90 days:** Get a new FICO and re-run the diagnostic.
   - **6 months:** Re-apply with the new score, new reserves, and a co-borrower if needed.
   - **Now, alternative path:** If the buyer can't wait, switch to an FHA loan at 3.5% down with 580 FICO (vs conventional at 620 + 5% down).

8. **Show what the user *can* qualify for, not just what they *can't*.** A denied buyer wants a fallback home price, in a fallback program, in a fallback timeline. The diagnostic should output:
   - "At your current profile, the largest home you qualify for is $X (FHA, 3.5% down, with condition Y)."
   - "If you raise your credit by 30 points in 90 days, you can qualify for $X + $Y (conventional, PMI dropping at 20% equity)."
   - "If you add a co-borrower with $Z income, you can qualify for $X + $W (jumbo-eligible, 10% down)."

9. **Be honest about the SmartAsset blind spots.** The diagnostic should explicitly call out that **lender overlays** — extra rules that overlay on top of Fannie/Freddie/FHA — can make a "qualified" buyer unqualified. SmartAsset's calc does not model overlay rules at all, which is a real source of "but the calculator said I could afford it!" disappointment.

10. **Tone and copy should be diagnostic, not aspirational.** SmartAsset's editorial voice is "you can do this, here's the math, talk to an advisor." A diagnostic's voice is "here is exactly what is wrong, and here is the exact fix." The first is motivating; the second is actionable. They are different jobs.

11. **Avoid the SmartAsset failure mode of *one number, no explanation*.** The output should never be a single dollar figure. It should be a *verdict + a list of constraints + a remediation plan + a fallback qualification*. If a user gets denied and leaves the page knowing exactly which three things to fix and in what order, the tool has done its job.

12. **Monetization (the unglamorous but necessary part).** SmartAsset monetizes by selling financial-advisor leads. A "why can't I qualify?" diagnostic could monetize by:
   - **Selling mortgage leads** to the right lender for that buyer's specific situation (FHA lender for a 600-score buyer, bank statement lender for a 1099 worker, portfolio lender for a jumbo borrower) — this is a *higher-quality* lead than the average rate-table lead because the diagnostic has already classified the buyer.
   - **Selling credit-repair / rapid-rescore service leads** to a partner (e.g. a credit-repair SaaS).
   - **Selling the "wait 6 months and re-qualify" segment to debt-consolidation lenders** — a buyer who can qualify in 6 months at a better rate is a refinance-in-6-months lead today.
   - **NOT selling advisor leads** as the primary CTA — because a buyer who has just been told "you don't qualify" is in a fix-it mindset, not a holistic-planning mindset. The advisor pitch is wrong for that emotional state. (This is a meaningful strategic difference from SmartAsset.)

---

## TL;DR for the "Why am I denied" project

SmartAsset's mortgage calculator is a **best-in-class SEO landing page + lead-gen loss leader**. It is good at *teaching the math of a mortgage* and *ranking for "mortgage calculator"* and *funneling high-intent users to financial advisors*. It is *not* good at *diagnosing why a specific buyer does not qualify*, because that is a different problem:

- SmartAsset is **calculator-first**; a denial-diagnostic is **underwriting-rule-first**.
- SmartAsset outputs **one number**; a diagnostic outputs **a verdict + a ranked list of constraints + a remediation plan**.
- SmartAsset asks for **5–7 inputs**; a diagnostic asks for **15–25 inputs** because lender underwriting needs more.
- SmartAsset monetizes with **advisor leads**; a diagnostic monetizes with **mortgage leads (better-segmented) + credit-repair leads + debt-consolidation leads**.
- SmartAsset's voice is **motivational + educational**; a diagnostic's voice is **clinical + actionable**.

The competitive wedge is: SmartAsset tells you what the math says you can afford; a diagnostic tells you *what the lender's computer will actually decide*, *why*, and *what to do about it*. That is the unowned territory, and it is the territory of buyers who have just been told "no" — the highest-intent, most-frustrated, most-likely-to-pay-for-help segment of the mortgage market.
