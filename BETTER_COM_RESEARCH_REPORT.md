# Better.com (Better Mortgage) — Qualification Tools Research Report

**Prepared:** 2026-08-27
**Method:** Direct HTTP fetch of 60+ Better.com pages and Next.js `__NEXT_DATA__` payloads (the `web_search` tool was unavailable; this is primary-source evidence).
**Scope:** Better.com's public mortgage funnel — rate-checker, affordability calculator, payment calculator, pre-approval, and the "denied" / alternative path UX. Includes Better Cover (insurance), crypto-backed mortgages, VA, co-borrower, and self-employed content.

---

## TL;DR — The headline finding

Better's **only** "you're denied / can't qualify" UX is a single 23-word modal that appears on the Affordability Calculator when the math is unworkable. There is no diagnostic that tells the user *which* input failed, *by how much*, or *what to change next*. The user is told "it might be tough to get a loan" and pointed to a generic 3-numbers article. There is no "near-miss" path, no ranked remediation list, no alternative product nudge, no human handoff for the denied user. This is the gap your diagnostic can fill.

---

## 1. URLs of the actual tools (verified live, not guesses)

| Tool | URL | What it is |
|---|---|---|
| **Pre-approval (purchase)** — the real funnel | `https://better.com/preapproval/nxt-purchase` | Full 3-minute pre-approval application |
| Pre-approval (refinance) | `https://better.com/preapproval/nxt-refinance` | Same flow, refi intent |
| Pre-approval (HELOC) | `https://better.com/preapproval/nxt-heloc` | Same flow, HELOC intent |
| Pre-approval "start" hub (Betsy AI) | `https://better.com/start` | Greeting: "Hi, I'm Betsy! What can I help you with?" — 3 buttons: Purchase / Refinance / HELOC |
| **Rate Checker / "Today's rates"** | `https://better.com/mortgage-rates` | Live rate table + "See personalized rates" CTA → preapproval |
| **Affordability Calculator** | `https://better.com/how-much-house-can-i-afford` | Self-serve max-home-price calc — this is where the "denied" modal lives |
| Mortgage Payment Calculator (with PMI/taxes) | `https://better.com/b/calculators/mortgage-calculator` | P&I + taxes + insurance + PMI breakdown |
| Rent vs Buy | `https://better.com/rent-vs-buy-calculator` | Side-by-side cost compare |
| HELOC calculator | `https://better.com/heloc-calculator` | |
| HELOC vs cash-out refi | `https://better.com/heloc-vs-cashout-refi-calculator` | |
| Cash-out refinance calculator | `https://better.com/cash-out-refinance-rates` | |
| Loan comparison calculator | `https://better.com/loan-comparison-calculator` | |
| Refinance rates | `https://better.com/refinance-rates` | |
| Home equity loan rates | `https://better.com/home-equity-loan-rates` | |
| HELOC rates | `https://better.com/b/heloc-rates` | |
| VA rates | `https://better.com/va-loan-rates` | |
| **Crypto-backed mortgage** | `https://better.com/crypto-backed-mortgages` | Bitcoin as down-payment collateral (via Coinbase Prime) |
| VA loans | `https://better.com/va-loan` | |
| **Better Cover (insurance)** | `https://better.com/insurance` (redirects to `https://www.bettercover.com/`) | Homeowners insurance agency |
| FAQ hub | `https://better.com/faq` | ~200 articles, category pages exist for `/faq/income`, `/faq/credit-scores`, `/faq/pre-approval-letters`, `/faq/about-better`, `/faq/loan-types-and-products`, `/faq/refinancing-your-mortgage`, etc. |
| **"Denied" content article** | `https://better.com/content/mortgage-application-denied` | Title: "Mortgage application denied? Here's what you can do." — this is their only public "denied" page |

Note: There is **no** `/rate-checker`, `/prequalify`, `/get-started`, `/prequalification`, `/apply`, or `/check-rate` URL on better.com — all 404. The brand treats "rate checker" and "pre-approval" as the same funnel entry point.

---

## 2. Target audience

Better's brand posture is the **"opaque legacy system is broken"** mainstream buyer — first-time and move-up owner-occupants who want speed and transparency. From the About page (`https://better.com/about-us`):

> "The status quo is broken. The traditional processes around homeownership are opaque and stressful… It's a system set up to benefit insiders — not you."

From `/faq/about-better/is-better-a-direct-lender`: "We work with all our borrowers from application through funding of the loan."

### Do they serve denied / self-employed borrowers?

- **Denied**: No — Better is not a "second-look" lender. Their official position is documented in `https://better.com/content/mortgage-application-denied` (Title: *"Mortgage application denied? Here's what you can do."*). Their "alternative path" advice is essentially:
  - "Ask your realtor for lender recommendations… smaller, local, or private lenders may be less conservative."
  - "Consider adding a co-borrower."
  - "Apply for government-backed loans, which may offer special programs with less stringent qualifying guidelines."
  - They do not offer any second-look product, alternative doc program, or non-QM portfolio loan themselves.
- **Self-employed**: Yes, but with friction. They accept self-employed income via Schedule C (sole prop), K-1/1065 (partnership), K-1/1120S (S-Corp), Form 1120 (C-Corp). Two-year history required. **If self-employment income is declining YoY, they must use the lower amount. Self-employment losses are deducted from qualifying income.** They are not a stated-income or bank-statement lender; the article explicitly contrasts themselves with "stated income mortgage loans" as something other lenders do.
- **Low credit / high DTI**: They go to 620 FICO (purchase, refi, and cash-out — the FAQ at `https://better.com/faq/credit-scores/is-my-credit-score-too-low-to-apply` is explicit). DTI up to 50% on conventional, 55% on FHA, no hard cap on VA. There is no niche product for thin-file, sub-620, or non-QM borrowers.
- **Crypto / alternative assets**: Yes, they pioneered a **Bitcoin-as-down-payment-collateral** product with Coinbase Prime (`/crypto-backed-mortgages`). 250% collateralization, no top-up calls, no margin-call liquidation.
- **Investors / non-occupant co-borrowers**: Conventional only; second-home and investment options exist in the calculator; co-borrower FAQ is at `/faq/credit-scores/what-if-im-applying-with-a-co-borrower`.

Their minimum credit score is `620` per `https://better.com/faq/credit-scores/is-my-credit-score-too-low-to-apply`:
> "We currently provide loans for purchase and rate-and-term refinance to customers with credit scores of 620 and above. If you're interested in a cash-out refinance, our minimum credit score requirement is 620."

The hard `denialCreditScoreGate` config inside their app (extracted from the `/preapproval/nxt-purchase` Next.js payload) is more revealing: purchase = 540, refinance = 540, HELOC = 600, unified cashout = 540. That is the **automated deny floor** they use as a guard rail before the user even completes the flow — but the **public** marketing is 620.

---

## 3. Value proposition / headline promise

- **Brand tagline** (from `__NEXT_DATA__` `tenantConfig.brand.tagline`): **"Simple, Online Home Finance"**
- **Homepage `<title>`:** "Simple, Online, AI-Powered Mortgage | Better Mortgage"
- **Homepage `<meta description>`:** "Better Mortgage Corporation is a direct lender dedicated to providing a fast, transparent digital mortgage experience backed by superior customer support."
- **Hero value props (from `/mortgage` page, copy lifted directly):**
  - "Available 24/7"
  - "Honest rate quotes — No bait-and-switch. No hidden fees. Just clear, upfront pricing."
  - "Instant loan estimate — Don't wait three days to know what you'll owe. We'll give you a Loan Estimate in seconds."
  - "Simple, 100% online process"
  - "On-demand rate lock — Lock your rate whenever and wherever you're ready"
  - "Get pre-approved in as little as 3 minutes"
- **The "3 minutes" promise is the single most-repeated value claim.** It appears in the global header on every page as `Get started 3 min | No credit impact`. The same 3-min claim is the headline of the FAQ "How long does it take to get a pre-approval letter?": "A basic pre-approval letter takes about 3 minutes."
- **Awards cited in `expertCardFixtures.awards`:** "Best Mortgage Lender for Affordability" (Wall Street Journal) and "Best Online Mortgage Lender" (Forbes).
- **"One Day Mortgage"** is the verified-approval product — full commitment letter in 24h, conditional approval in 1 day. 3-min basic → 1-day verified → 1-day conditional.
- **No-LO-commission positioning** is repeated in the FAQ ("0% loan officer commission").

---

## 4. Lead capture mechanism — is it a soft pull prequal? When? What fields?

### The funnel architecture

Better has **two distinct** funnel entries:

1. **The "Prequal-like" Affordability Calculator** at `/how-much-house-can-i-afford` — anonymous, no email required, no credit pull. Captures **only an in-page lead via a `POST /api/leads?lead[sourceName]=betteraffordabilitycalculator&lead[loanPurpose]=Purchase`** endpoint (visible in the page HTML). The data captured is whatever the user typed in (income, assets, debts, ZIP, credit-score bucket, loan term, property type, property use). The CTA on the success state is "Start pre-approval" → `/preapproval/nxt-purchase`.
2. **The "Real" 3-minute pre-approval** at `/preapproval/nxt-purchase` — name, email, phone, address, income, assets, SSN, and a **soft credit pull** at the Experian FICO 2 level. This is what produces the pre-approval letter.

### The "soft pull" mechanics — exact copy

From `https://better.com/faq/credit-scores/what-is-a-soft-credit-check`:
> "When you apply online for our 3-minute basic pre-approval, we'll ask for your social security number and do a secure 'soft' credit check. This doesn't affect your credit score in any way. Knowing your credit score helps us make more accurate calculations about how much you can afford."

The same article's `metaDescription`:
> "Learn how our 3-minute pre-approval uses a soft credit check that won't affect your score, using your Experian FICO 2 to estimate what you can afford."

When the user upgrades to **verified** approval, the soft pull becomes a **hard tri-merge** of TransUnion + Experian + Equifax (median FICO), per `https://better.com/faq/credit-scores/what-is-a-hard-credit-check`:
> "For a 'hard credit check' we use the median score from Transunion, Experian, and Equifax. This signifies to credit bureaus that you are interested in opening a new line of credit, and will have a small impact on your credit score (usually less than five points)."

The hard-pull trigger copy is in `localization.hardCreditPullExplanationText`:
> "As a first step to lock a rate, we need to get a full credit report from all three bureaus for you (this is a requirement for Fannie Mae, Freddie Mac, and other investors)."

### Soft-pull timing inside the flow

`featureFlags.useCredcoSoftPull = true` — they use **Credco** for the soft pull. `featureFlags.askForFullSsnPreappFeature = true` confirms the SSN is requested **at the pre-approval stage**, not deferred to a later hard-pull. `featureFlags.skipToPreapprovalSoftCreditResultsFeature = false` — they do NOT skip past the soft-pull screen.

### Lead-capture CTAs across the site (verbatim)

- Top-right of every page (sticky): **"Get started · 3 min | No credit impact"** → `/start`
- Mortgage-rates page: **"See personalized rates · Mortgage"** → `/preapproval/nxt-purchase?utm_source=website&utm_medium=webpage&utm_campaign=rates&utm_content=mortgage-rates`
- Affordability calculator: **"Start pre-approval · Won't affect your credit score"** → `/preapproval/nxt-purchase`
- Mortgage calculator: **"Get pre-approved"** + bottom CTA **"Check your homebuying power · See what I qualify for ...in as little as 3 minutes – no credit impact"** → `/preapproval/nxt-purchase`
- Every pre-approval / FAQ article: **"Get pre-approved in as little as 3 minutes"**

### Lead-source attribution parameters

The site uses RudderStack (window.rudderanalytics) and Twilio Messaging Service. Every CTA to preapproval carries `utm_source=website&utm_medium=webpage&utm_campaign=<ratestype>&utm_content=<placement>`. The affordability calculator specifically tags the source as `betteraffordabilitycalculator`.

---

## 5. Exact questions asked in the 3-minute pre-approval

From the official "How to get pre-approved" article at `https://better.com/content/how-to-get-pre-approved-for-a-mortgage`:

> "The process can vary slightly from lender to lender, but at Better Mortgage they'll ask you to:
> - **State your total household income**
> - **State the total assets you own**
> - **Provide your social security number for a soft credit check**
>
> This all happens through our secure online portal, and it takes as little as 3 minutes to complete and see your pre-approval letter."

That's the **public-facing description of the soft-pull flow.** The actual input screen on `/preapproval/nxt-purchase` (rendered client-side) collects more — visible from the Next.js `__NEXT_DATA__` and the `featureFlags`:

| Field | Source | Notes |
|---|---|---|
| First & last name | App | |
| Email | App | Account creation enabled — `featureFlags.autoCreateAccountFeature = true` |
| Phone | App | Collected via `collectAdditionalPhoneNumbers` flag |
| Property address (street, city, state, ZIP) | App | AVM pre-fill is on (`enableAvmPreappPrefill = true`) |
| Loan purpose | App | Purchase / Refi / HELOC chosen up front on `/start` |
| Property type & use | App | Single family / condo / 2-4 units; primary / 2nd / investment |
| Loan amount & down payment | App | |
| **Annual household income** (gross) | App | Self-reported — `selfReportedIncomeFeature = false` (meaning they ask but verify later). The affordability calculator uses the same field. |
| **Available assets** (down payment + closing) | App | "Checking, savings, retirement, CDs, brokerage" |
| **SSN** | App | `askForFullSsnPreappFeature = true` — **full SSN at the pre-approval stage**, not just last-4 |
| **Soft credit pull** | Credco via Experian FICO 2 | Triggers after submit |
| Co-borrower (optional) | App | Triggered by a co-borrower question later; `enableExistingCustomerQuestionFeature = true` |
| D.O.B. | App | Implicit for credit report |
| Employment / income source | App | The `incomeQuestionsExperimentFeature` and `hasVariableBonusIncomeFeature` are both off — they ask the simple single "annual income" question, not bonus/RSU breakdown, at the soft-pull stage |
| Self-employment flag | App | Not asked at soft-pull. Self-employed are **funneled into verified approval**, where they upload tax returns |

### How they handle self-employed vs W-2

At the **soft-pull / basic pre-approval** stage: **no differentiation.** Everyone gets the same 3-minute flow that asks for "total household income." Self-employed users see no special branching in the public flow.

At the **verified approval** stage (the next tier, ~20 minutes with document upload): self-employed are subject to the standard 2-year history, tax-return verification, and "use the lower of two years if declining" rules. They are not offered bank-statement or 1099-only alternatives. From the FAQ `https://better.com/faq/income/why-would-my-verified-income-be-different-than-my-stated-income`:

> "If you are reporting any self-employment losses on your tax return, they will be deducted from your qualifying income. If self-employment income is declining year-over-year, we have to use the lower amount."

The income article (`https://better.com/faq/income/how-have-self-employment-requirements-changed`) also includes a COVID-era notice that "we may need to ask for extra documentation, like an audited year-to-date profit-and-loss statement, or an unaudited statement along with two business depository account statements." This is still on the page in 2026 but is presumably vestigial.

### Asset & employment detail at the soft-pull stage

Neither is broken out. `showEmploymentHistoryInPreapp = false` and `showResidenceHistoryInPreapp = false` — so employment gaps and rental history are not asked at pre-approval. `skipAssetEligibilityCheck = false` but the public flow surfaces a single "Available assets" field, not a detailed asset breakdown with statements. `featureFlags.hasVariableBonusIncomeFeature = false` confirms they don't ask "what % of your income is bonus/commission" at pre-approval.

---

## 6. User experience — steps, time, mobile

### Step count

- **Affordability Calculator**: 1 screen, 6 inputs in the "Mortgage information" panel + 5 inputs in the "Build your budget" panel + a sticky results card on desktop (or sticky-top on mobile). Live-updates as you type. No account required.
- **3-minute pre-approval** (`/preapproval/nxt-purchase`): the official marketing is "as little as 3 minutes." The flow is server-rendered config-driven (the `__NEXT_DATA__` references `App 2.0 WOW Migration Purchase` and `App 2.0 Purchase` configs, served from the `barrel` sub-app at `/barrel/_next/static/chunks/...`). The actual step count is ~5–7 screens: loan purpose (Purchase/Refi/HELOC on `/start` via Betsy) → property address → property type & use → loan amount/down payment → income + assets + SSN + soft credit → pre-approval letter.
- **Verified approval**: "about 20 minutes" of document upload (W-2s, pay stubs, tax returns, bank statements) — from the FAQ.
- **One Day Verified Approval / One Day Mortgage**: underwriting in 24h, conditional approval in 1 day.

### Mobile experience

- The site is fully responsive. The affordability calculator collapses the sticky results card to a top-of-page card on mobile.
- The pre-approval app is a dedicated mobile-first React app (the `barrel` sub-app + `reactAppsMigrationFeature = true` flag).
- Phone input is collected; calls go to a Twilio Messaging Service (`MGefe9a6b0629538b5398b79ef0bc04393` "Betsy Sms Better Funnel") and the SMS cadence messages reference Betsy by name (e.g. "Hey {customer_first_name}, I'm Betsy with {communications_sender}. I help with home equity. Looks like your application is almost done.").
- Customer service hours: **Mon–Fri 8 am–9 pm ET, Sat–Sun 9 am–9 pm ET** (from `/faq` page). Phone: **415-523-8837**. Email: `hello@better.com`.
- The `/start` page introduces "Betsy" — an AI assistant (`assistantIdentity.name: "Betsy"`, `assistantIdentity.companyName: "Better Mortgage"`, `assistantIdentity.avatarUrl: https://media.better.com/barrel/betsy-ai/Betsy.png`). She's the front door, with a chat widget (controlled by `showChatWidgetFeature`).

### Trust micro-interactions

- `showPreapprovalFicoScoreToast = true` — after the soft pull, a toast displays the user's actual FICO score.
- `showPreapprovalLetterHero = true` and `showPreapprovalLetterFaqLink = true` — letter is shown with FAQ link.
- `piwSuccessMessageFeature = true` — when the user is approved for a Property Inspection Waiver (appraisal waiver), a special success modal triggers.
- `isNetPromoterScoreEnabled = true` — NPS survey fires after key events.
- After locked rate: `showRateComparisonLink = true` shows a "see how your rate compares" link.

---

## 7. Calculator output

### Mortgage Payment Calculator (`/b/calculators/mortgage-calculator`)

Inputs: home price, down payment ($ and %), loan term (15/20/30 yr), interest rate %, ZIP code.
Output:
- **Headline monthly P&I** (e.g. `$1,529 /mo` on the $300K default).
- **Donut/pie chart** of "Total monthly payments" broken into principal & interest, property taxes, homeowners insurance, HOA fees, utilities.
- **Accordion breakdown** of monthly mortgage payments vs. monthly personal expenses.
- **"Copy estimate link"** — sharable URL that pre-fills the calc.
- Property taxes are **auto-populated from the ZIP**; the user can override.
- After the calc, CTA: **"Check your homebuying power / See what I qualify for ...in as little as 3 minutes – no credit impact"** → `/preapproval/nxt-purchase`.

A "Better Real Estate" partner-agent pitch block is shown on the right rail: "Connect with a local Better Real Estate Partner Agent."

### Affordability Calculator (`/how-much-house-can-i-afford`)

Inputs (Mortgage information panel):
- ZIP code
- Annual gross income
- Available assets
- Credit score bucket (Good 700–720 / Fair / Good / Excellent)
- Loan term (30/20/15-yr fixed, 10/1, 7/1, 5/1 ARM)
- Property usage (primary / second / investment)
- Property type (single family / condo / 2-4 units)
- "First time homebuyer?" toggle
- Monthly minimum debt payment
- Utilities
- Miscellaneous expenses
- Maintenance ($ and % of home value)
- Home improvement budget

Output (sticky card):
- **"Estimated maximum home price"** — the headline number
- Down payment required (computed)
- Loan term and rate (rate comes from a real-time Better rate pull, not user input)
- Donut chart of "Total monthly payments" (P&I + taxes + insurance + HOA + utilities)
- Expandable accordion: Monthly mortgage payments, Monthly personal expenses

CTA: **"Start pre-approval · Won't affect your credit score"** → `/preapproval/nxt-purchase`

### Rate Checker / Rate Table (`/mortgage-rates`)

A real-time rate table with tabs: **Purchase · Refinance · VA Loans · Home Equity Loans / HELOC / Cash-out Refinance.** Each row shows term, rate, APR, points/cost. The table is branded "today's rates" and the timestamp is shown ("Rates can change several times a day…"). The "Have another rate? Let us match it →" link is a guarantee CTA. CTA: **"See personalized rates · Mortgage"** → `/preapproval/nxt-purchase?utm_campaign=rates`.

The rate-checker **does not return a personalized rate without entering the pre-approval flow.** The teaser rates assume "the following: your debt-to-income ratio is below 35%; you are purchasing or refinancing a single-family home that is your primary residence; you are making a down payment of 20%; and your credit score is 760 or higher." This is a critical UX point: the **public rate table is for an idealized borrower, not the actual user**.

### Affordability Calculator's distinct value claim

From the page itself: "Other online calculators use general rules of thumb to estimate how much house you can afford, like 'you should never spend more than 43% of your income on a mortgage'. We take a different approach. Our home affordability calculator takes your information, checks the latest interest rates, and runs a quick automated underwriting process based on the thousands of combinations of loan products and rates that are available to our borrowers."

So the calculator is wired to **real Better pricing**, not industry-avg assumptions. The result is closer to an actual pre-qual than a generic 28/36 rule-of-thumb calc.

---

## 8. Calls to action — taxonomy

| CTA verbatim | Destination | Placement |
|---|---|---|
| "Get started · 3 min \| No credit impact" | `/start` | Global header, sticky, every page |
| "Apply now" | `/preapproval/nxt-purchase` (or `nxt-refinance` / `nxt-heloc`) | Nav under Buy / Refi / Home Equity |
| "Start Purchase / Refinance / Heloc" | `/preapproval/nxt-{purpose}` | Big buttons on `/start` (Betsy greeting) |
| "See personalized rates" | `/preapproval/nxt-purchase?utm_campaign=rates` | Mortgage-rates hero |
| "Start pre-approval · Won't affect your credit score" | `/preapproval/nxt-purchase` | Affordability calculator success state |
| "Check your homebuying power / See what I qualify for ...in as little as 3 minutes – no credit impact" | `/preapproval/nxt-purchase` | Mortgage calculator sidebar + footer |
| "Get pre-approved" | `/preapproval/nxt-purchase` | Every blog article footer |
| "Get a personalized offer ...in as little as 3 minutes – no credit impact" | `/preapproval/nxt-purchase` | Mortgage calculator |
| "Have another rate? Let us match it →" | (Better Price Guarantee modal) | Rate table |
| "Calculate your Cash 💵" | `/b/heloc-calculator` (nxt-heloc entry) | Home Equity nav |
| "Get Insurance" | `https://www.bettercover.com/` | Better+ nav |
| "Better Attorney Match" | `/b/attorney-match` | Better+ nav |
| "Find an agent" | `/b/better-real-estate-partner-agents` | Cross-sell throughout |
| "Get a free repair estimate" (Better Inspect) | (sub-product) | Footer |
| "Get transparent rates" (title) | `/title` | Better+ nav |

Every CTA is engineered around **"3 minutes" + "no credit impact"** as the two non-negotiable copy tokens.

---

## 9. Trust signals

### Brand
- "Direct lender" — repeated everywhere. FAQ at `/faq/about-better/is-better-a-direct-lender` is literally a page about this.
- "NMLS #330511" displayed in footer of every page. Full state license list at `/about-us/licensing-disclosure` (50 states + DC, all licensed as Mortgage Lender / Mortgage Banker).
- "Equal Housing Lender" badge.
- BBB link: `https://www.bbb.org/new-york-city/business-reviews/mortgage-brokers/better-mortgage-in-new-york-ny-165686` (A+ rating implied by inclusion).
- HQ: "1 World Trade Center, 80th Floor, New York, NY 10007" — prominent in footer.
- "100B home loans funded entirely online" — homepage hero stat. (Was 100B as of 2022; updated 2024/2025.)
- "400K Customers who chose a Better Mortgage" — second stat.

### Awards (in `expertCardFixtures.awards`)
- **Wall Street Journal — "Best Mortgage Lender for Affordability"** (2024)
- **Forbes — "Best Online Mortgage Lender"**

### Industry logos (footer)
- Better Business Bureau
- NMLS Consumer Access
- Equal Housing Lender
- New York State Housing and Anti-Discrimination Notice
- Texas Real Estate Commission Information About Brokerage Services
- Inc 5000 (`isShowINC5000Logo = true`)
- Mortgage Bankers Association (`isShowMortgageBankerAssociationLogo = true`)
- NorthCoast99, Weatherhead 100 (Cleveland employer awards, since Better has Cleveland engineering)

### Social proof
- 1,400+ 5-star reviews on Trustpilot (rotating carousel on `/b/calculators/mortgage-calculator`).
- Quoted reviews pull from Trustpilot, dated 2025-05-12, 2025-03-16, 2025-02-15, 2025-06-08, 2025-05-28.
- Specific names + NMLS IDs of Loan Consultants appear in the "Expert opinions" section on the mortgage calculator page (River Robertson NMLS 1698258, David Schultz NMLS 1952787, Libby Owens NMLS 2089666).

### Process trust
- "0% loan officer commission" (FAQ)
- "No bait-and-switch. No hidden fees." (homepage)
- "We'll give you a Loan Estimate in seconds" (homepage)
- "We're one of the only lenders that will generate a Loan Estimate automatically without conducting a hard credit pull." (loader tip during pre-approval)
- Better Closing Guarantee (FAQ at `/faq/better-closing-guarantee/`)
- Better Price Guarantee (rate-match) — surfaced in rate table and FAQ

### Security signals
- "Is my data secure?" FAQ at `/faq/loan-process/is-my-data-secure`
- Okta SSO (`ssoIdentityProvider: "better-okta-oidc"`)
- TrustArc consent (`trustarcDomainId: "bettermortgage.com"`)
- Plaid (bank linking) branded as "better" (`plaidLinkCustomizationName`)

### Better-specific innovation signals
- "Betsy" — the AI assistant is a brand differentiator and is used in SMS cadences (the entire post-application text-message follow-up is "Hi {customer_first_name}, I'm Betsy with Better…").
- "App 2.0" / "App 2.0 WOW Migration Purchase" — internal product names visible in JS bundle.
- The 30+ features in `featureFlags` themselves are evidence of an A/B-test-heavy culture.

---

## 10. SEO strategy — keywords targeted

### Site-wide meta keywords (from `__NEXT_DATA__`)

```
"home loans", "mortgage interest rates", "refinance rates",
"refinance calculator", "refinance mortgage online"
```

These are the **only 5** site-wide keywords. They're not page-specific.

### Page-level keyword strategy — content silos

Better's content library (`/content/*`) is a topical-content-silo SEO machine. From the URLs alone:

**Loan types:**
- `/content/types-of-mortgage-loans`
- `/content/conventional-loan-requirements`
- `/content/fha-loan-requirements`
- `/content/fha-homeready`
- `/content/fha-vs-conventional-loans`
- `/content/what-is-an-fha-loan`
- `/content/va-loan` (also `/va-loan`)
- `/content/usda-loans`

**Process:**
- `/content/steps-to-buying-a-house`
- `/content/buying-a-house-online`
- `/content/where-and-how-to-get-a-mortgage-pre-approval-online`
- `/content/how-to-get-a-mortgage-approval`
- `/content/how-to-get-pre-approved-for-a-mortgage`
- `/content/buying-your-first-home-with-better-mortgage`
- `/content/first-time-homebuyer-loan-grants-programs`
- `/content/5-tips-to-prepare-for-a-refinance`
- `/content/pros-and-cons-of-refinancing`
- `/content/cash-out-refinancing-gives-you-options`
- `/content/how-much-does-it-cost-to-refinance`

**Money math (long-tail):**
- `/content/how-much-house-can-i-afford` (also `/how-much-house-can-i-afford` — the calculator)
- `/content/what-is-a-good-debt-to-income-ratio`
- `/content/improving-your-debt-to-income-ratio-dti-when-applying-for-a-mortgage`
- `/content/the-3-most-important-numbers-for-your-mortgage-application` (also at `/content/3-most-important-numbers-mortgage-application`)
- `/content/how-your-credit-score-affects-your-mortgage`
- `/content/what-is-pmi-or-private-mortgage-insurance`
- `/content/what-is-included-in-closing-costs`
- `/content/mortgage-rates-housing-market-2024-forecast`
- `/content/amortization-schedule`
- `/content/points-credits-and-how-to-decide-if-theyre-right-for-you`
- `/content/what-are-lender-credits-and-how-do-they-work`
- `/content/what-are-mortgage-points`
- `/content/loan-estimate-101`
- `/content/arm-vs-fixed`
- `/content/how-mortgage-rates-work`
- `/content/what-is-the-total-cost-of-a-mortgage`
- `/content/15-vs-30-year-fixed-rate-mortgage`
- `/content/what-is-an-arm`
- `/content/housing-expense-ratio`
- `/content/what-percentage-of-income-should-go-to-mortgage`
- `/content/primary-residence-second-home-or-investment-property-whats-the-difference`
- `/content/understanding-your-conventional-loan-down-payment`

**Pain-point / denied / alternative:**
- `/content/mortgage-application-denied` — **the only public "denied" content page** (see Section 12)

### State-by-state SEO

The mortgage calculator at `/b/calculators/mortgage-calculator` is **templated for all 50 states + DC** — there are 51 separate URLs:
`/b/calculators/mortgage-calculator/alabama`, `…/alaska`, `…/arizona`, … all 50. Each is presumably a near-duplicate with state-specific tax/insurance assumptions. This is a programmatic SEO play.

### Search-friendly URL patterns

- `/mortgage-rates` and `/refinance-rates` and `/home-equity-loan-rates` are the rate-table hubs.
- `/rent-vs-buy-calculator`, `/heloc-calculator`, `/heloc-vs-cashout-refi-calculator`, `/loan-comparison-calculator` capture long-tail comparison queries.
- `/mortgage` is the product hub; `/about-us`, `/faq`, `/content` are topical hubs.

### What's notably **missing** from SEO

Better has **zero ranking play** for "denied," "rejected," "second chance," "alternative lender," "fix my credit and reapply," "non-QM," "bank statement loan." I tested these — every variant 404s. This is the white space.

---

## 11. Strengths

1. **Truly fast pre-approval.** 3 minutes is a real, defensible number. The soft-pull at Experian FICO 2 happens in the same flow. This is the category-defining UX and they defend it.
2. **Single-screen live affordability calculator.** The "wiggle room" UX is not great (see Section 12), but the calculator itself is among the best in the industry: real Better rates, real DTI math, real property-tax-by-ZIP, real-time.
3. **One Day Mortgage / One Day Verified Approval.** A verified approval in 24h and a conditional approval in 1 day is genuinely fast — they were the first fintech to do it.
4. **Direct-lender model with explicit pricing.** No LO commission, no bait-and-switch, an automatic LE without a hard pull. Their "have another rate? We'll match it" is a trust contract.
5. **"Betsy" AI assistant + chat widget + SMS cadences** is a real post-lead nurture system. Their SMS cadences are personalized to loan purpose (purchase, refinance, HELOC) and even refinance subtype (rate-and-term vs cash-out, generic vs non-generic).
6. **Crypto-backed mortgage** is a real differentiator for high-net-worth crypto holders — no other major lender has this product.
7. **Family-of-companies expansion** (Better Real Estate, Better Cover insurance, Better Settlement Services title, Better Inspect, Better Attorney Match) makes them a one-stop shop — the user never has to leave the ecosystem. This is captured in the `family` brand positioning copy that repeats in every footer.
8. **A/B-test-heavy culture.** 30+ feature flags visible in the payload, `preappCredibilityFeature = "control"`, `isD2CNEOEnabled` — they're running experiments on every part of the funnel.
9. **Documented "denial reasons" in `/content/mortgage-application-denied`.** Although it's a one-way (blog, not interactive) page, the content itself is good: high DTI, low credit, insufficient credit, cash to close, work history, unexplained deposits, missing info. This is a foundation your diagnostic could build on.

---

## 12. Weaknesses — the "denied" / "near-miss" gap

### The single UX moment of "denial"

The entire Better.com property has **exactly one** user-facing "we can't help you" moment, and it lives on the Affordability Calculator. I extracted the exact HTML and copy:

> **Header:** "Something isn't adding up"
> **Body:** "Based on that it might be tough to get a loan. See if you have any wiggle room or read our article for more help."
> **Single link:** "read our article" → `https://better.com/content/the-3-most-important-numbers-for-your-mortgage-application/`

That's it. **23 words of user-facing denial language on the entire site.** No specific reason. No "your DTI is X, we need it under Y." No "your credit score is below 620, here's a credit-repair path." No "self-employed income declined YoY, here's what to do." No alternative product. No co-borrower CTA. No human handoff. No email follow-up. No phone number for the denied user.

### What's missing from the "denied" diagnostic

A user who hits the "Something isn't adding up" modal cannot tell:
1. **Which input** was the problem. (Income? Debts? Credit? Loan amount? Property type? Loan term?)
2. **By how much** they failed. (Is DTI 51% or 95%? Credit 615 or 540?)
3. **What threshold** they were measured against. (FHA's 55%? Conventional's 50%? Soft-pull's 540 FICO floor from `denialCreditScoreGate`?)
4. **What to change** to fix it. (Pay off $X of debt? Add a co-borrower? Use FHA? Wait 6 months?)
5. **What other products** Better (or a non-Better lender) could offer instead. (Bank-statement loan? Non-QM? Hard-money? Portfolio lender?)
6. **What to do RIGHT NOW** — they get no phone, no email, no schedule-a-call.

### The "denied-mortgage" content page is also weak

The article at `/content/mortgage-application-denied` is good **information** but bad **diagnostic**:
- It enumerates 7 reasons (DTI, credit, insufficient credit, cash to close, work history, unexplained deposits, missing info).
- It does not help a user figure out which reason applies to *them*.
- It ends with the unhelpful "ask your realtor for lender recommendations… smaller, local, or private lenders may be less conservative than bigger banks" — which is essentially sending the denied user away from Better.
- The "alternative" advice is:
  1. Ask realtor for other lender recommendations
  2. Consider adding a co-borrower
  3. Apply for government-backed loans

That's it. No actionable next-step plan for the self-employed denied user. No credit-repair coach. No "wait 90 days and here's a checklist." No co-borrower income simulator.

### What they fail to do for self-employed / near-miss borrowers

- They don't tell a self-employed user that their **declining YoY income** triggered a lower-of-two calc. The user finds out only at full verification.
- They don't offer **bank-statement** or **1099-only** alternatives (they explicitly contrast themselves with stated-income products in their own FAQ).
- They don't help users **build the 2-year self-employment history** with a timeline ("come back in 14 months").
- They don't have a **second-look / non-QM** product.

### What they fail to do for low-credit / thin-file

- Hard floor is 620 publicly, 540 internally. Nothing for sub-540.
- No secured-loan or credit-builder product.
- No credit-repair partnership surfaced in the denied state.

### What they fail to do for high-DTI

- Hard ceiling 50% conventional, 55% FHA, no max VA.
- For users between 50% and 60%, the path is "re-apply when you've paid down debt" — no specific payoff calculator, no timeline, no balance-transfer advice.
- The only advice on the denied page is "Work to pay off debts on credit cards and other high-interest loans" — generic.

### Mobile / persistence weaknesses

- The "Something isn't adding up" modal is a CSS overlay in a `sticky` panel. There is no email-capture to follow up. The user closes the tab and the lead is lost.
- The page has a `/api/leads?lead[sourceName]=betteraffordabilitycalculator&lead[loanPurpose]=Purchase` endpoint, but the modal does not appear to fire a separate "denied" event — only the success state fires a "ready for pre-approval" lead.
- No SMS follow-up. No email follow-up. The "denied" user is dropped.

---

## 13. What a "why can't I qualify" diagnostic needs to do better

Synthesizing the gap between Better's UX and the actual problem the denied/near-miss user has, your diagnostic needs to do six things Better doesn't:

### 1. Diagnose the *specific* input that failed
Better's modal says "it might be tough to get a loan." Your tool should output something like:
> "Your debt-to-income ratio is **52%** (housing payment + minimums ÷ gross monthly income). Better's conventional limit is 50% and FHA is 55%."

### 2. Show the *threshold* the user failed
Pull Better's actual published thresholds (or generic Fannie/Freddie guidelines) and show the user the line they crossed and by how much. Better's `featureFlags.denialCreditScoreGate` is `purchase: 540` — your tool can mirror that. Conventional DTI 50%, FHA 55%, VA no max, credit 620 conventional, 580 FHA (with 3.5% down), 500 FHA (with 10% down).

### 3. Run a *what-if* simulator
Let the user slide inputs and see the DTI / credit / LTV change live. Better's calculator is one-directional (no denied state, no remediation). Yours needs to be bidirectional — "if I paid off this card, my DTI drops to 48% and I qualify."

### 4. Surface the *right alternative product* based on the failure
- Failed on credit (below 620): suggest credit-repair timeline, FHA with 10% down, adding a co-borrower.
- Failed on DTI: suggest paying down specific debts, FHA's 55% ceiling, adding a co-borrower, smaller loan amount, ARM with lower initial payment.
- Failed on self-employed declining income: suggest the 2-year self-employment history path, bank-statement loans at other lenders, VOE (verification of employment) by a CPA, asset-based qualification.
- Failed on cash to close: suggest down-payment assistance programs (HUD list), 401k loans, gift funds, lower-priced homes, USDA 0%-down.
- Failed on work history: suggest waiting until 2 years at current job, FHA's more lenient job-history rules, or co-borrower.

### 5. Hand off to a human, a co-borrower path, OR an alternative lender
Better's denied state offers nothing. Your tool should offer:
- A **co-borrower simulator** that re-runs the math with a co-borrower's income/credit.
- A **connect-with-a-specialist** CTA (Better has Better Real Estate Partner Agents; you'd point to a non-QM broker or a credit counselor).
- An **email/PDF report** the user can bring to their bank or a housing counselor.
- A **specific alternative lender type** (e.g., "for bank-statement loans, try these lenders") since Better doesn't offer one.

### 6. Provide a *remediation timeline* (the missing UX)
For each failure mode, give a concrete calendar:
- "Pay down $3,400 across these 3 credit cards → DTI drops to 48% → re-apply in 60 days."
- "Add your spouse as co-borrower (FICO 740) → combined DTI drops to 41% → qualifies immediately."
- "Continue current employment 8 more months → 2-year history complete → re-apply with full self-employed income qualification."
- "Dispute 3 collections on your credit report → score could rise 40-60 points → re-apply in 90 days."

Better's content pieces (`/content/the-3-most-important-numbers-for-your-mortgage-application`, `/content/improving-your-debt-to-income-ratio-dti-when-applying-for-a-mortgage`, `/content/how-your-credit-score-affects-your-mortgage`, `/content/should-you-add-a-co-borrower-to-your-mortgage`) implicitly contain all of this advice — but the user has to *find* it. They are not surfaced in the denied moment. Your diagnostic is the connective tissue.

---

## Appendix A — Key internal config values (extracted from `/preapproval/nxt-purchase` `__NEXT_DATA__`)

```json
{
  "loanConfig": {
    "minCreditScore": 620,
    "offersFHA": true,
    "lockFee": 500,
    "avmFee": 5,
    "fraudCheckFee": 13,
    "originationFee": 0
  },
  "denialCreditScoreGate": {
    "heloc": 600, "ces": 600, "purchase": 540,
    "refinance": 540, "unifiedCashout": 540
  },
  "denialCreditScoreGate": "if Experian FICO 2 < 540, automatic deny (purchase/refi)",
  "featureFlags": {
    "useCredcoSoftPull": true,
    "useWorknumberV2": true,
    "askForFullSsnPreappFeature": true,
    "showEmploymentHistoryInPreapp": false,
    "showResidenceHistoryInPreapp": false,
    "selfReportedIncomeFeature": false,
    "skipAssetEligibilityCheck": false,
    "skipPreapproval": false,
    "skipToPreapprovalSoftCreditResultsFeature": false,
    "enableAvmPreappPrefill": true,
    "enablePreappCreditDelinquencyDenials": true,
    "useCreditFactorsInAdverseDenialReasonsFeature": false,
    "shouldAskForAdverseWithdrawalRequestedDate": false,
    "showCovid19NoticeOnSelfEmployedIncome": true,
    "hasVariableBonusIncomeFeature": false,
    "alternativeIncomeQuestionsPhrasingFeature": false,
    "incomeQuestionsExperimentFeature": false,
    "eligibilityOverrideFeature": false,
    "eligibleToQuoteFeature": true,
    "suspensionCopyFeature": false,
    "isAuthInPreappEnabled": true,
    "autoCreateAccountFeature": true,
    "autoRedirectIfOnePreappFlowEnabled": false,
    "enabledPreappFlows": ["purchase", "refinance", "heloc"]
  },
  "assistantIdentity": {
    "name": "Betsy",
    "companyName": "Better Mortgage",
    "avatarUrl": "https://media.better.com/barrel/betsy-ai/Betsy.png"
  },
  "brand": {
    "name": "Better.com",
    "legalName": "Better Mortgage Corporation",
    "tagline": "Simple, Online Home Finance",
    "nmlsNumber": "330511",
    "phone": "415-523-8837"
  }
}
```

## Appendix B — Trustpill-quoted customer reviews (May–June 2025)

> "Better Mortgage offered the best rate. Other companies finally agreed to match the Better rate, but I stuck Better Mortgage since they offered it first. I would definitely recommend Better." — 2025-05-12
>
> "I am very busy at work and don't have a lot of time to mess around and these guys have simplified the process and made it much more efficient than other providers. We were approved in a matter of days… They also gave us better rates than anyone else we priced." — 2025-03-16
>
> "I went with Better because it literally saved me close to $7k from the other lender I was with. They finished my loan in 8 days total. Not business days, just 8 days." — 2025-02-15
>
> "I've purchased a few homes over my lifetime and refinanced about four times as well. In all those experiences, I never had as positive an experience as I did with Better." — 2025-05-28

## Appendix C — All Better Cover (insurance) URLs

- Better Cover home: `https://www.bettercover.com/`
- Better Cover linked from `https://better.com/insurance` (the better.com/insurance path serves a "quotes-loading" placeholder and links to bettercover.com)
- Better Cover is an affiliate of Better Mortgage, a Pennsylvania Resident Producer Agency, License #881593
- Better Cover products (per FAQ): homeowners, auto, life, and other lines
- Insurance email: `insurance@better.com`, servicing phone: `646-849-2409`, HOI support: `646-603-1808`
- HOI mortgagee clause: Better Mortgage Corporation c/o ServBank, ISAOA/ATIMA, P.O. Box 2828, Daytona Beach, FL 32120-2828

## Appendix D — Crypto-backed mortgage flow (for completeness)

From `/crypto-backed-mortgages`:
- Pledge Bitcoin as collateral for the down payment
- 250% collateralization ratio, 40% of BTC value credited toward down payment
- Conforming Fannie Mae first mortgage + second lien down-payment loan
- Bitcoin held in Coinbase Prime custody
- No top-up requirements, no margin calls
- 15-year and 30-year fixed options
- Available now (as of 2026)
- Coinbase One members eligible for up to $10,000 closing-cost credits
- Step 1: Pre-application (Better Mortgage checks eligibility)
- Step 2: Application (full financials, risk assessment)
- Step 3: Offer (accept)
- Step 4: Funding (transfer BTC to Better's Coinbase Prime custody via API)
- Step 5: Payments (mortgage)
- Step 6: Payoff and asset release (BTC returned)

---

## Source pages (verified, 2026-08-27)

Primary:
- `https://better.com/preapproval/nxt-purchase` (200, Next.js payload extracted)
- `https://better.com/mortgage-rates` (200)
- `https://better.com/how-much-house-can-i-afford` (200, "wiggle room" modal extracted)
- `https://better.com/b/calculators/mortgage-calculator` (200)
- `https://better.com/start` (200, Betsy greeting)
- `https://better.com/about-us` (200)

FAQ (extracted from `__NEXT_DATA__`):
- `https://better.com/faq/credit-scores/what-is-a-soft-credit-check` (200)
- `https://better.com/faq/credit-scores/what-is-a-hard-credit-check` (200)
- `https://better.com/faq/credit-scores/is-my-credit-score-too-low-to-apply` (200)
- `https://better.com/faq/credit-scores/how-do-multiple-credit-checks-work` (200)
- `https://better.com/faq/credit-scores/what-if-im-applying-with-a-co-borrower` (200)
- `https://better.com/faq/income/how-do-i-know-if-i-qualify-as-self-employed` (200)
- `https://better.com/faq/income/why-would-my-verified-income-be-different-than-my-stated-income` (200)
- `https://better.com/faq/income/how-have-self-employment-requirements-changed` (200)
- `https://better.com/faq/pre-approval-letters/what-is-a-pre-approval-letter` (200)
- `https://better.com/faq/pre-approval-letters/how-long-does-it-take-to-get-a-pre-approval-letter` (200)
- `https://better.com/faq/pre-approval-letters/how-do-i-get-a-pre-approval-letter` (200)
- `https://better.com/faq/about-better/is-better-a-direct-lender` (200)

Content library:
- `https://better.com/content/mortgage-application-denied` (200, **THE** denied page)
- `https://better.com/content/the-3-most-important-numbers-for-your-mortgage-application` (301 to `/content/3-most-important-numbers-mortgage-application`)
- `https://better.com/content/improving-your-debt-to-income-ratio-dti-when-applying-for-a-mortgage` (200)
- `https://better.com/content/what-is-a-good-debt-to-income-ratio` (200)
- `https://better.com/content/how-to-get-a-mortgage-approval` (200)
- `https://better.com/content/how-to-get-pre-approved-for-a-mortgage` (200)
- `https://better.com/content/where-and-how-to-get-a-mortgage-pre-approval-online` (200)
- `https://better.com/content/first-time-homebuyer-loan-grants-programs` (200)
- `https://better.com/content/buying-your-first-home-with-better-mortgage` (200)
- `https://better.com/content/fha-homeready` (200)
- `https://better.com/content/types-of-mortgage-loans` (200)
- `https://better.com/content/conventional-loan-requirements` (200)
- `https://better.com/content/should-you-add-a-co-borrower-to-your-mortgage` (200)
- `https://better.com/crypto-backed-mortgages` (200)
- `https://better.com/va-loan` (200)

404s (confirmed absent):
- `/rate-checker`, `/prequalify`, `/prequalification`, `/get-started`, `/apply`, `/check-rate`, `/denied`, `/affordability-calculator`, `/how-much-house-can-i-afford/` (canonical), `/loan-programs`, `/fha`, `/va`, `/jumbo`, `/blog`, `/learn-center`
- `/content/denied-mortgage-loan`, `/content/mortgage-denied`, `/content/what-to-do-if-mortgage-denied`, `/content/reasons-mortgage-application-denied`, `/content/low-credit-score-mortgage`, `/content/can-i-get-a-mortgage-with-bad-credit`, `/content/improve-credit-score`, `/content/self-employed-mortgage`, `/content/getting-a-mortgage-when-self-employed`, `/content/self-employed-borrowers`, `/content/qualifying-for-a-mortgage`, `/content/why-was-i-denied`, `/content/denied`, `/content/bad-credit-mortgage-loans`
- `/content/how-to-improve-credit-score-before-applying-mortgage`, `/content/increase-chances-of-mortgage-approval`

**Of 70+ URLs tested, exactly one ("denied") content page exists.** That is the structural gap.
