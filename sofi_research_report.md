# SoFi Mortgage Qualification Flow — Detailed Research Report

**Research date:** August 2026 (SoFi site captured this session)
**Method:** Direct page HTML fetch + sitemap analysis + extraction of inline React state machine from SoFi's own `/home-loan/continue` React bundle. Web search API was unavailable (`web_search` returned `Authentication Fails`); the data below is sourced from the live SoFi site.

---

## TL;DR — the single most important finding

**SoFi does not have a true public prequalification tool.** They do not expose a calculator that returns "you qualify for $X." What they have is a **soft-pull rate-shopping flow** dressed up to look like prequal, which is actually the front end of a full mortgage application. If you don't qualify for a rate card, you fall off to a generic "we aren't able to show current rates. A Loan Officer will be in touch…" page that does **not** diagnose *why* (no DTI, no LTV, no credit-band explanation, no self-employed callout, no alternative-path messaging). This is the gap a "why am I denied" diagnostic should fill.

---

## 1. URLs of the actual prequal / rate / application flow

| Purpose | URL | Status |
|---|---|---|
| Marketing entry (legacy "mortgage" — redirects) | `https://www.sofi.com/mortgage` | 301 → `/home-loan/` |
| Marketing entry (canonical) | `https://www.sofi.com/home-loan/` | 200 (renders Home Loans hub) |
| Home purchase mortgage product page | `https://www.sofi.com/home-loans/mortgage/` | 200 |
| **Mortgage preapproval page** (the funnel entry) | `https://www.sofi.com/home-loans/mortgage-preapproval/` | 200 |
| Mortgage refinance | `https://www.sofi.com/home-loans/mortgage-refinance/` | 200 |
| Cash-out refi | `https://www.sofi.com/home-loans/cash-out-refinance/` | 200 |
| Home equity loan | `https://www.sofi.com/home-loans/home-equity-loan/` | 200 |
| HELOC | `https://www.sofi.com/home-loans/heloc/` | 200 |
| Jumbo | `https://www.sofi.com/home-loans/jumbo-mortgage-loans/` | 200 |
| FHA loans | `https://www.sofi.com/home-loans/fha-loans/` | 200 |
| VA loans | `https://www.sofi.com/home-loans/va-loans/` | 200 |
| Mortgage rates | `https://www.sofi.com/home-loans/mortgage-rates/` | 200 |
| **Top-Ranked Mortgage Lender** landing | `https://www.sofi.com/mortgage-lender/` | 200 |
| **Rate-quote entry form (soft pull)** | `https://www.sofi.com/signup/hl/v1` | 200 — title "Mortgage - SoFi Mortgages" |
| **Full preapproval React app** | `https://www.sofi.com/home-loan/continue` and `/home-loan/continue/` | 200 — separate Webpack app at `d25w3v87zu4vev.cloudfront.net/sofiinc/lending/originations/master/` |
| Eligibility criteria (mortgage section) | `https://www.sofi.com/eligibility-criteria/` | 200 |
| Home Affordability Calculator | `https://www.sofi.com/home-affordability-calculator/` | 200 |
| Mortgage Calculator (basic) | `https://www.sofi.com/mortgage-calculator/` | 200 |
| Mortgage Calculator w/ taxes & insurance | `https://www.sofi.com/mortgage-calculator-with-taxes-and-insurance/` | 200 |
| Mortgage Down Payment Calculator | `https://www.sofi.com/mortgage-down-payment-calculator/` | 200 |
| Mortgage Preapproval Calculator | `https://www.sofi.com/calculators/mortgage-preapproval-calculator/` | 200 |
| Learn: Prequalification vs Preapproval | `https://www.sofi.com/learn/content/buying-home-mortgage-prequalification-vs-preapproval/` | 200 |
| Learn: How to qualify for a mortgage | `https://www.sofi.com/learn/content/tips-to-qualify-for-a-mortgage/` | 200 |
| Learn: Self-employed + student loans (redirect) | `https://www.sofi.com/learn/content/self-employed/` | 301 → `…/self-employed-and-student-loan-payments/` |
| First-Time Homebuyer Programs | `https://www.sofi.com/first-time-home-buyer-programs/` | 200 |
| Home Loan Help Center | `https://www.sofi.com/home-loan-help-center/` | 200 |

**Sitemap discovery:** SoFi has **5 page sitemaps** totalling 2,341 indexed pages, of which **~500+ are mortgage-related**. Massive programmatic-SEO footprint: every state gets its own `mortgage-rates-in-<state>/` page, every city gets `<city>-mortgage-calculator/`, every state gets `first-time-home-buyer-programs-in-<state>/`, every state gets `<state>-mortgage-refinance-calculator/`, and there is a separate cluster of `<city>-jumbo-loan-calculator/` and `<state>-home-equity-loan-calculator/` pages. Plus 50+ `home-equity-loan-rates-in-<city>/` pages.

---

## 2. Target audience — including denied and self-employed?

**Primary target:** credit-worthy, employed, W-2 or salaried borrowers looking to buy or refinance a primary residence, second home, or investment property. SoFi is unapologetically selling to the upper-middle class.

- **Hero messaging is built around member benefits and rate shopping**, not problem-solving.
- **No dedicated "self-employed mortgage" page exists** on sofi.com. `…/learn/content/self-employed-mortgage-loan/`, `…/self-employed-borrowers/`, and `…/mortgage-for-self-employed/` all return **404**. The closest is a *student loan* article at `…/learn/content/self-employed-and-student-loan-payments/`.
- **No dedicated "denied" page exists.** `…/learn/content/mortgage-application-denied/`, `…/mortgage-denied/`, `…/reasons-mortgage-denied/`, `…/mortgage-after-bankruptcy/`, and `…/mortgage-options-low-credit/` all return **404**.
- Self-employed is only addressed in two passive contexts:
  1. The generic "How to qualify for a mortgage" article: *"Self-employed homebuyers should keep in mind that lenders look at your income after deductions. Taking too many deductions, however deserved, can lower the size of the loan you'll qualify for."* And: *"if you're self-employed, other evidence of income"* (W-2s, pay stubs, tax returns).
  2. The prequal-vs-preapproval article lists: *"Freelancers may be asked to provide 1099 forms, a profit and loss statement, a client list, or work contracts."*
- The **eligibility-criteria page** is a single sentence: *"Loan eligibility depends on a number of additional factors, including your credit score and credit history, monthly income and expenses, assets, and employment status and history."* No public DTI ceiling, no public minimum LTV, no public minimum credit score for the *general* mortgage (only on the preapproval FAQ: 600 minimum).
- SoFi's preapproval FAQ says: *"To be preapproved for a SoFi home mortgage, you're required to have a minimum credit score of 600."*
- The rate-quote flow's "stated credit band" picker shows the user 8 self-selected bands: **>740, 720-739, 700-719, 680-699, 660-679, 640-659, 620-639, Below 620** — but the data is wired to server-side credit bands (`EXCEPTIONAL / VERY_GOOD / GOOD / FAIR / POOR / VERY_POOR / BUILDING / DEVELOPING / STARTING / STRONG / ESTABLISHED`). The "Below 620" option is shown to the user but does not appear to generate a friendly alternate path.
- **No "near-miss" alternative path.** If the flow returns no rate cards, the user is shown a generic error component and a "Call us" link to a Mortgage Loan Officer. There is no in-flow "here's what was wrong and here's what would have to change" UX.
- **State eligibility:** "SoFi Bank, N.A. is currently able to issue and refinance mortgages in all states except purchase only for New York."

SoFi's de facto target is the **prime / super-prime borrower who can document W-2 income**. Self-employed, low-credit, and denied borrowers are explicitly out of the funnel's happy path.

---

## 3. Value proposition / headline promise

**Page-level hero (extracted from React JSX, not just meta description):**

- **Mortgage preapproval page** (canonical funnel entry):
  - Eyebrow: *"Online mortgage preapproval"*
  - H1/H2: *"Get on the fast track to home ownership **with mortgage pre-approval**."*
  - Subhead: *"Don't miss out on your dream home. Get preapproved for a mortgage with SoFi and stand out from other buyers with a Verified Preapproval Letter."*
  - Primary CTA: **"View your rate"** → `/home-loan/continue`

- **Home mortgage product page**:
  - H2: *"Best-in-class home mortgage loans built around you."*
  - Section: *"Why SoFi? Our mortgage loans [come] with benefits."*
  - Other H2: *"Purchase your dream home"*, *"Choose the mortgage loan rates that are right for you"*, *"Lock in today's low rate and find the home you love"*, *"Preparing to apply for a SoFi Mortgage Loan."*

- **Mortgage rates page**:
  - Eyebrow: *"CURRENT MORTGAGE RATES"*
  - H2: *"Find the best mortgage rate for your dream home."*
  - Subhead: *"View today's mortgage rates and learn how they impact your home loan."*

- **Rate-quote signup** (`/signup/hl/v1`):
  - H1: *"Mortgage - SoFi Mortgages"*
  - Headline: *"Your personalized mortgage rates are just minutes away"*
  - Subhead: *"Check your rates in two minutes"*
  - Reassurance: *"No impact to your credit score"*

- **Mortgage lender landing page**:
  - Meta description: *"SoFi is a tech-forward, human-backed mortgage lender with competitive rates and low down payment options. Apply online or speak to a Mortgage Loan Officer."*

**Value props that recur on every mortgage page** (from React JSX):
- "Tech-forward, human-backed" / "online with access to one-on-one help"
- Mortgage Loan Officers "standing by"
- **"$10,000 On-Time Close Guarantee"** (industry-leading; terms apply)
- **As little as 3% down for first-time buyers, 5% for everyone else** (with PMI)
- Up to $9,500 cash back via HomeStory real-estate partner
- SoFi member benefits: $500 off standard origination fee for SoFi members, $500 extra for SoFi Plus members
- "Lock and Look" 90-day rate lock while house-hunting
- Flexible terms: 10-, 15-, 20-, 30-year fixed
- 4.9/5 aggregate rating across 1,720 reviews (Product schema on `/home-loans/mortgage/`)

---

## 4. Lead capture mechanism — soft pull? When? What fields?

**Two-step lead capture:**

1. **Step 1 — Email + consent on `/signup/hl/v1`** (the public-facing form):
   - One field: `Email` (input `data-qa="email"`, `data-mjs="email"`, `name="email"`, `id="input-1"`)
   - One checkbox: `consents` (ESIGN Act Consent, GLBA Privacy Notice, Privacy Policy, Terms of Use, Arbitration Agreement)
   - One submit button: **"View my rate"** (initially disabled until the box is checked)
   - "Have a SoFi account? Log in"
   - "View disclosures" (expands the rate disclaimers)
   - The button goes to `/home-loan/continue` (the React app).

2. **Step 2 — The full soft-pull preapproval flow** at `/home-loan/continue` (a separate Webpack React app). The flow ends in a **soft credit pull** before showing rates. The form's last step is literally titled:

   > *"Last step — A soft credit check to get your personalized rates. It's secure and won't have any impact on your credit score whatsoever."*
   > Next button label: **"View personalized rates"**

**Consent disclosure on `/signup/hl/v1`** (full legal text from the soft-pull consent):
> *"By clicking the 'View personalized rates' button below, you understand that you are providing 'written instructions' to SoFi Bank, National Association to obtain your credit report or other information from one or more consumer reporting agencies…"*

**Critical: SoFi explicitly states the flow is a soft pull at the rate-quote step, but the underlying data collection in the React app shows they ALSO support a hard-pull (full review) re-pull path** (component `Os`/`bs` calls `repullCredit:!0` and shows a "Review your information" screen when re-running credit). After a user proceeds past the rate card, SoFi says: *"if you choose a product and continue your application, we will request your full credit report from one or more consumer reporting agencies, which is considered a hard credit pull and may affect your credit."*

---

## 5. Exact questions asked (extracted from the React state machine)

The SoFi application is a **state machine** defined in `client.7136e26cfe.js`. The structure of "chapters" and "questions" is:

```
mc = [
  { id: "loan-info",         chapterLabel: "Loan needs",  condition: always,
    questionIds: ["loan_type"] },

  { id: "loan-info-refi",    chapterLabel: "Loan needs",  condition: refinance,
    questionIds: ["property_location_refi","property_value_and_type","property_lien",
                  "va_eligibility","fha_eligible_streamline","va_eligible_streamline","va_had_loan"] },

  { id: "loan-info-purchase", chapterLabel: "Loan needs", condition: purchase,
    questionIds: ["application_stage","application_goals","property_info",
                  "first_time_home_buyer","va_eligibility","va_had_loan","loan_amounts"] },

  { id: "loan-info-heloc",   chapterLabel: "Loan needs",  condition: heloc,
    questionIds: ["heloc_property_info","heloc_loan_amounts"] },

  { id: "about-you",         chapterLabel: "About you",   condition: any + no cred yet,
    questionIds: ["credit_score","review_info","review_info_v2"] },

  { id: "view-rates",        chapterLabel: "Your rates",  condition: any,
    questionIds: ["view_rates"] },
]
```

### 5a. Chapter 1 — "Loan needs" (Purchase branch, the happy path)

| Order | Question ID | Screen title | Fields |
|---|---|---|---|
| 1 | `application_stage` | "Where are you in your home buying process?" | Radio: `Just getting started` / `Looking at homes` / `Offer currently pending` / `Signed contract` (only shown in A/B test) |
| 2 | `application_goals` | "What are your goals right now?" (multi-select) | Checkbox goals shown differ by stage. If "Just getting started": *Figure out what I can afford* / *Pay down existing debt* / *Improve my credit score* / *Save for a down payment*. If "Looking at homes": *Calculate my monthly payments* / *See what rates I qualify for* / *Get preapproved* / *Find a realtor* |
| 3 | `property_info` | "What kind of property are you interested in?" (followed by address) | Property type (radio): `Single family home—Detached`, `Single family home—Attached`, `Condominium`, `Two-unit property`, `Three-unit property`, `Four-unit property`, `Planned unit development`, `Manufactured home—Doublewide`. Then occupancy (radio): `Primary Residence`, `Second Home`, `Investment Property`. If investment: asks for `Expected monthly rental income ($)`. Then ZIP code. |
| 4 | `first_time_home_buyer` | "Have you owned a home in the last three years?" (Yes/No) | If "No" → "If not, you could be considered a first-time homebuyer, and may qualify for additional mortgage programs." |
| 5 | `va_eligibility` | "🇺🇸 Are you currently an active military personnel, a veteran, or a surviving spouse?" | Yes/No |
| 6 | `va_had_loan` (conditional on yes) | "Have you ever had a VA loan?" | Yes/No |
| 7 | `loan_amounts` | "Tell us more about the loan you're looking for" | `Estimated purchase price ($)`, `Estimated down payment ($)`. The "loan amount" is computed and shown live. |

### 5b. Chapter 2 — "About you"

| Order | Question ID | Screen title | Fields |
|---|---|---|---|
| 8 | `credit_score` | "What's your credit score?" / subtitle "A best guess is just fine." | Single radio picker with **8 bands**: `Greater than 740`, `720-739`, `700-719`, `680-699`, `660-679`, `640-659`, `620-639`, `Below 620`. (The component also accepts server-fetched options.) |
| 9 | `review_info` | "Review your information" | `First name`, `Last name`, `Date of birth (mm/dd/yyyy)`, `Phone number`, `Current address` (street, unit, city, state, ZIP) |
| 10 | `review_info_v2` (when there's an existing app id) | "Review your information" — *"We need updated credit information to give accurate rates. We'll do a soft credit check, which won't affect your score."* | Same as #9 + `Social Security Number` (only when an existing application is being re-pulled). |

### 5c. Chapter 3 — "Your rates"

| Order | Question ID | Screen | Output |
|---|---|---|---|
| 11 | `view_rates` | Rate cards (no inputs) | 1–N rate cards. Each card shows: term, **rate** (e.g. 6.250%), **APR** (e.g. 6.465%), `Update rates` button, and (if `LTV` is high) a red "High Loan-to-Value" badge. If no cards: error block. |

### Refinance branch differences (so you can compare)

| Order | Refinance question | Fields |
|---|---|---|
| R1 | `property_location_refi` | "Where's your property located?" → ZIP code |
| R2 | `property_value_and_type` | "Property value and type" → `Estimated property value ($)`, property type, occupancy |
| R3 | `property_lien` | "Tell us what you owe on this property and the loan you need" → `First mortgage ($)`, `Second mortgage ($, optional)`, `Other property liens ($, optional)`, `Cashout amount ($)`. Computes: *"Your equity is $X."* |
| R4-R7 | VA / FHA streamline / VA had loan | Same as purchase |

### HELOC branch (much shorter)

| Order | HELOC question | Fields |
|---|---|---|
| H1 | `heloc_property_info` | "Let's start with your home equity needs" → property type, occupancy, ZIP |
| H2 | `heloc_loan_amounts` | "What are your loan needs?" → desired HELOC amount, plus property value display |

### 5d. Self-employed vs W-2 — explicit answer

**There is no explicit "self-employed" branch.** The flow has:
- A `goals` multi-select that doesn't ask employment type
- A property-info step (rental/investment) that asks for rental income if investment
- **No question for "what is your employment type" / "are you self-employed" / "do you have W-2s vs 1099s"**
- The `credit_score` step lets you self-report a band; no income, no employment
- The `view_rates` step pulls a soft credit and (per the React) returns pre-priced rate cards. **Underwriting of self-employed income happens later, offline, after a hard pull is authorized** — confirmed by the article copy in `tips-to-qualify-for-a-mortgage/`.

SoFi's process is: **self-report a credit band → get a soft-pull rate quote → if you continue, hand-verify docs later.** This means a self-employed borrower can be soft-pull-quoted a rate and then denied at the verification stage. The denied outcome surfaces only after they have already invested time and submitted tax returns, 1099s, and P&L statements.

---

## 6. User experience — steps, time, mobile

**Steps (purchase, happy path):** ~7-8 screens + 1 result screen.

1. Email + consent (`/signup/hl/v1`)
2. Loan type — Purchase / Refinance / Home equity
3. Where are you in your home buying process?
4. What are your goals right now?
5. What kind of property are you interested in? (type → use → ZIP)
6. First-time homebuyer (Y/N)
7. VA eligibility (Y/N) → had VA loan (Y/N if yes)
8. Loan amounts (purchase price + down payment)
9. Your credit score (one of 8 bands)
10. Review your information (name, DOB, phone, address)
11. Soft-credit confirmation screen ("View personalized rates" CTA)
12. Rate cards (1–4 product cards) or "no options" error

**Time:** "Check your rates in two minutes" (signup page) → 7-10 minutes for the full preapproval through to a rate quote, per SoFi's own marketing. The preapproval letter is then issued "in minutes" after underwriting review.

**Mobile experience:**
- Two separate mobile breakpoints in the React: `mJ.MOBILE` and `mJ.TABLET/DESKTOP`
- Hero image is swapped to a mobile-specific asset (`Hero_Mobile_Full.png`)
- The signup form is single-column on mobile
- Rate cards are designed mobile-first
- The eligibility-error block (`Pa` component) has explicit `isMobile` props that change padding/margins for small screens
- The credit-band picker has `columns:1` on mobile

---

## 7. Calculator functionality — what the prequal tool outputs

**The "prequal" tool is the rate-card step at the end of `/home-loan/continue`.** It outputs:

- A list of **rate cards** (`RateBox` component) — one per qualifying term. Each card shows:
  - **Term label** (e.g. "30-year fixed")
  - **Rate** (e.g. 6.250%) in turquoise
  - **APR** (e.g. 6.465%) in ink
  - Optionally: SoFi Plus discount pill, SoFi member pill, "Lock and Look" pill (via A/B experiment)
  - `Update rates` button
- A right rail (desktop) showing the 5-7 step "What's next" timeline (Tell us about income & assets → Get a preapproval letter → See your detailed Loan Estimate → View & lock your final rates → Complete your application → Discuss your loan options → Finalize your loan)
- A live **LTV** display and a "High Loan-to-Value" warning if applicable
- For ineligible combinations: an error block with the specific reason and a "Call us" link

**No payment calculator runs in-flow.** The "calculator" tools are separate URLs:
- `/mortgage-calculator/` — basic P&I calc
- `/mortgage-calculator-with-taxes-and-insurance/`
- `/mortgage-down-payment-calculator/`
- `/mortgage-repayment-calculator/`
- `/mortgage-preapproval-calculator/` — answers questions like *"What salary do you need for a $500,000 mortgage? The income needed for a $500,000 mortgage is around $150,000 a year."* Uses the **28/36 rule** explicitly.
- `/home-affordability-calculator/` — "Put four numbers into this helpful home mortgage calculator to learn what your monthly mortgage payments would be. Calculate your mortgage payments today."

**The prequal flow does NOT output:**
- A maximum loan amount you qualify for
- An "approved / not approved" decision
- A "you're prequalified up to $X" letter
- A list of conditions you'd need to fix to qualify

It only outputs a **rate quote** (or "no rate cards" + a phone number).

---

## 8. Calls to action on the mortgage pages

**Primary CTA everywhere: "View your rate"** → `/home-loan/continue` (which routes to the React app at `/home-loan/continue`).

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| `/home-loans/mortgage/` | "View your rate" | "Learn more" (product cards), "See more FAQs" |
| `/home-loans/mortgage-preapproval/` | "View your rate" | "Call (888)-541-0398", "Speak with a Mortgage Loan Officer or call (844) 763-4466" |
| `/home-loans/mortgage-rates/` | "View your rate" | "Learn more" on product cards, "(844) 763-4466" |
| `/home-loans/mortgage-refinance/` | "View your rate" | "Learn more" |
| `/home-loans/cash-out-refinance/` | "View your rate" | "Learn more" |
| `/home-loans/home-equity-loan/` | "View your rate" | "Learn more" |
| `/home-loans/heloc/` | "View your rate" | "Learn more" |
| `/home-loans/jumbo-mortgage-loans/` | "View your rate" | "Learn more" |
| `/home-loans/fha-loans/` | "View your rate" | "Learn more" |
| `/home-loans/va-loans/` | "View your rate" | "Learn more" |
| `/mortgage-lender/` | "View your rate" | "Apply online or speak to a Mortgage Loan Officer" |
| `/signup/hl/v1` | "View my rate" | "Log in" (if existing member) |

**The preapproval funnel itself uses these in-flow CTAs:**
- "View rates" (loan amounts step)
- "Next" (most steps)
- "Update rates" (after credit re-pull)
- "View personalized rates" (the final soft-credit step)
- "Apply Now" (right-rail, after rate cards)
- "Edit loan details" (in the error block when no cards)
- "Call us (844) 763-4466" (in the error block when no cards)

---

## 9. Trust signals used

- **SoFi Bank, N.A., NMLS #696891 (Member FDIC)** — appears on every page footer + in the body
- **Equal Housing Lender** logo and text
- **www.nmlsconsumeraccess.org** link
- **CNBC Select "Top Mortgage Lender"** — quoted in meta descriptions and footers ("CNBC Select makes its selection, which you can see here, based on their own methodology")
- **Aggregate rating 4.9 / 1,720 reviews** — embedded as `Product` schema on `/home-loans/mortgage/`
- **Trustpilot** widget rendered on rates pages (`<TrustPilot stars=[0,1,2,3,4,5] widgetType="Horizontal" />`)
- **$10,000 On-Time Close Guarantee** — "industry-leading" (terms apply)
- **SoFi On-Time Close Guarantee** explicit terms block
- **Up to $9,500 cash back** via HomeStory Real Estate Services partner
- **SoFi member benefits**: $500 off origination fee for SoFi members, $500 extra for SoFi Plus subscribers
- **SoFi Plus** — premium tier with rate discounts
- **"Lock and Look"** — 90-day rate lock
- **"Award-winning mortgage lender"** — direct from page copy
- **Brian Walsh, CFP® and Head of Advice & Planning at SoFi** — quoted byline in editorial content
- **Kendall Meade, a Certified Financial Planner at SoFi** — quoted byline
- **Jody McMaster** — byline on the prequal-vs-preapproval article
- **Disclaimer box**: *"Awards or rankings are not indicative of future success or results. Neither SoFi Bank, N.A. nor its employees paid a fee in exchange for ratings."*
- **Date stamps** on articles: "Information current as of 2/12/26", "Eligibility criteria current as of December 2025", "Information current as of 8/27/26"
- **App store CTA**: "Download the app"

There is **no BBB rating, no J.D. Power rating, no "as seen in" press logos**. Trust is built around the FDIC/NMLS/Equal Housing triumvirate + CNBC Select + their own Trustpilot rating.

---

## 10. SEO strategy

**Massive programmatic-SEO play.** Categorized URL patterns:

| Pattern | Count (approx) | Example |
|---|---|---|
| `mortgage-rates-in-<state>/` | 50 | `mortgage-rates-in-california/` |
| `<city>-mortgage-calculator/` | 80+ | `austin-mortgage-calculator/`, `cook-county-mortgage-calculator/`, `harris-county-mortgage-calculator/`, `bay-area-mortgage-calculator/`, `long-island-mortgage-calculator/` |
| `mortgage-refinance-rates-in-<state>/` | 50 | `mortgage-refinance-rates-in-texas/` |
| `first-time-home-buyer-programs-in-<state>/` | 51 | `first-time-home-buyer-programs-in-florida/` |
| `<state>-mortgage-calculator/` | 50 | `california-mortgage-calculator/` |
| `<state>-mortgage-refinance-calculator/` | 50 | `new-york-mortgage-refinance-calculator/` |
| `<city>-jumbo-loan-calculator/` | 50 | `texas-jumbo-loan-calculator/` |
| `<state>-home-equity-loan-calculator/` | 50 | `florida-home-equity-loan-calculator/` |
| `home-equity-loan-rates-in-<city>/` | 50+ | `home-equity-loan-rates-in-austin/` |
| `first-time-home-buyer-guide/<state>/` | 29 | `first-time-home-buyer-guide/california/` |
| Product pages (`/home-loans/...`) | 9 | `mortgage/`, `mortgage-preapproval/`, `mortgage-refinance/`, `cash-out-refinance/`, `home-equity-loan/`, `heloc/`, `jumbo-mortgage-loans/`, `fha-loans/`, `va-loans/` |
| Editorial / glossary | many | `mortgage-refinancing-guide/`, `glossary-jumbo-mortgages/`, `home-loan-help-center/`, `tips-to-qualify-for-a-mortgage/` |
| Research hub | several | `research/lowest-mortgage-payments-by-state/`, `research/student-loan-refinance-insights/` |

**Yoast SEO** is the WordPress SEO plugin in use (per the `<!-- This site is optimized with the Yoast SEO -->` comment). Sitemaps are split: `post-sitemap.xml`, `post-sitemap2.xml`, `post-sitemap3.xml`, `page-sitemap.xml` (×5), `press-release-sitemap.xml`, `on-the-money-sitemap.xml`, `on-the-money-category-sitemap.xml`, `author-sitemap.xml`.

**robots.txt** disallows `/wp/wp-admin/`, `/wealth/`, `/login/`, `/event/`, `/dashboard/`, `/banking-service/`, `/resource-center/`, `/blog/page/*?*`, `/web/`. **Both `archive.org_bot` and `ia_archiver` are blocked** — telling.

**Keyword targeting inferred from titles + meta descriptions:**

- Head terms: "mortgage", "mortgage rates", "home loan", "mortgage preapproval", "mortgage refinance", "cash-out refinance", "home equity loan", "HELOC", "jumbo loan", "FHA loan", "VA loan", "first-time home buyer", "mortgage calculator", "home affordability calculator", "mortgage down payment"
- Long-tail city+state: "[city] mortgage rates", "[city] mortgage calculator", "[city] jumbo loan calculator", "[state] first-time home buyer programs", "[state] home equity loan rates"
- Intent-cluster: "how to qualify for a mortgage", "mortgage prequalification vs preapproval", "mortgage refinancing guide", "fixed vs variable rates"
- Local-SEO signals: State and city in URL, H1, title, and meta description. Page H1s are often `[City] Mortgage Calculator` or `Mortgage Rates in [City]`.
- Schema.org: `MortgageLoan`, `Product` (with aggregate rating), `FAQPage`, `VideoObject`

**The SEO strategy is *purely information-acquisition and rate-shopping*.** There is **zero SEO for "denied", "rejected", "can't qualify", "self-employed mortgage", "low credit mortgage", "DTI too high"**. The closest is the article on "How to Qualify for a Mortgage" which is informational, not a tool.

---

## 11. Strengths

- **Speed-to-rate:** 7-10 minutes from email to a real soft-pull rate quote. "View my rate" in two minutes is credible.
- **Single-page soft-pull design:** User never has to create a full account to see rates.
- **Progressive disclosure:** 8 self-selectable credit bands let SoFi segment the rate display without burning a hard pull.
- **Goal-aware UX:** Multi-select "What are your goals right now?" adapts the page to whether the user is researching vs. ready to make an offer.
- **Member benefits stack:** $500 off for SoFi members, $500 off for SoFi Plus, $10K On-Time Close Guarantee, HomeStory cash-back, Lock and Look 90-day rate lock. This is *a lot* of unique value compared to a generic lender.
- **Tech-forward, human-backed pitch:** "Mortgage Loan Officers standing by" appears multiple times; phone numbers are everywhere.
- **Programmatic-SEO at scale:** 500+ indexed mortgage pages mean SoFi shows up in nearly every "[city] mortgage" search.
- **Multiple product lines under one roof:** Mortgage, refi, cash-out, HELOC, home equity loan, jumbo, FHA, VA — single application, single rate-display system.
- **Member-of-SoFi ecosystem:** A checking account with direct deposit or a SoFi Plus subscription can save real money on the mortgage origination fee.

---

## 12. Weaknesses — where SoFi fails denied / self-employed / low-credit / high-DTI users

This is the most important section. **SoFi's flow is structured to capture creditworthy leads and re-route the rest to a phone call.** The gap is enormous.

### 12a. No "you don't qualify" explanation
The "no matching loan options" path shows one of these strings (extracted from the React):

- *"No matching loan options found. To increase your chances, consider reducing the loan amount or exploring different property details. Feel free to contact us to speak with a helpful loan officer."*
- *"Based on the information you provided, we aren't able to show current rates. A Loan Officer will be in touch to answer any questions and discuss potential loan options."*
- *"Thanks for taking time to explore SoFi's home equity products. Based on the information you provided, we aren't able to show current rates. A Loan Officer will be in touch to answer any questions and discuss potential loan options."*
- *"Because your mortgage balance is $0, we can't offer a home equity loan. One of our loan officers would be happy to speak with you about cash-out refinancing options instead."*

The underlying state machine has explicit `eligibilityErrors.failedChecks` for `MINIMUM_AMOUNT`, `MAXIMUM_JUMBO_AMOUNT`, `MAXIMUM_LTV`, `CASHOUT_LTV`, `MAXIMUM_LTV_FTHB`, `UNSUPPORTED_STATE`, and credit-side codes like `CREDIT_DECLINED`, `CREDIT_INELIGIBLE`, `CREDIT_FROZEN`, `CREDIT_LOCKED`, `NO_CREDIT`, `NO_CREDIT_MISSING_SSN`, `LOAN_AMOUNT_OVER_LIMIT`, `LOAN_AMOUNT_UNDER_LIMIT`, `NO_ELIGIBLE_PRODUCTS`, `NO_OFFERS`. **None of these are surfaced to the user with a name they can act on.**

### 12b. No "alternative path" for near-miss borrowers
There is no "you don't quite qualify, but here are 3 things to do" UX. The fallback is a single CTA: **"Call us."** The phone numbers given are `(844) 763-4466` (mortgage help) and `(888) 541-0398` (first-time buyer support).

### 12c. Self-employed invisible until the verification step
A 1099 borrower can complete the entire prequal flow, get a soft-pull rate quote, and proceed all the way to the "Complete your application" stage without ever being asked their employment type. The self-employed-specific docs (1099s, P&L, client list) only get requested at the hard-pull/verification stage, **after** the user has already emotionally committed.

### 12d. No tool for "how much can I actually borrow?"
The Home Affordability Calculator is generic. The Mortgage Preapproval Calculator uses the 28/36 rule, but doesn't connect to SoFi's actual underwriting. The output of "you can afford $X" has no relationship to what SoFi will actually lend to you.

### 12e. Credit floor is opaque
The public-facing preapproval FAQ says 600. But the React state machine has 8 stated bands, including "Below 620" (which is below SoFi's stated minimum). A user who selects "Below 620" is not told "this may not qualify you for a SoFi mortgage"; they continue to the rate-card step and are then told "no options."

### 12f. No DTI / LTV / reserves feedback in-flow
The system knows your LTV (it computes it on the loan-amounts step) and warns "High Loan-to-Value" via a badge on the rate card, but it doesn't say *"your LTV is 97%, which is above our 95% cap; consider $5,000 more down"*. It also never shows a DTI.

### 12g. The funnel's "View your rate" promise is misleading
On the rate-quote entry page, the headline says *"Check your rates in two minutes"* and *"No impact to your credit score."* A user below 600, or with a frozen credit file, or in a thin-file situation, will burn 7+ minutes only to be told "we can't show rates." That's a soft cost the user pays, but the trust cost is on the user.

### 12h. No KB / help center articles for "denied" outcomes
The help center (`/home-loan-help-center/`) has zero articles for the denied borrower. There's no `…/denied/`, no `…/alternatives/`, no `…/low-credit-mortgage/`, no `…/self-employed-mortgage/`, no `…/bankruptcy-mortgage/`. **Every "what do I do now" search is unowned by SoFi and probably goes to LendingTree, Bankrate, or Rocket Mortgage.**

---

## 13. What a "why can't I qualify" diagnostic needs to do better

A diagnostic tool that actually helps the denied / near-miss borrower should:

1. **Take all the inputs the actual lender would have** — credit score (self-reported or soft-pulled), DTI, employment type (W-2 / 1099 / self-employed / retired), LTV, reserves, property type, occupancy, state, loan purpose — and tell the user **specifically which input is the binding constraint**.
2. **Show a rebalanced scenario** — *"if you put $10K more down, your LTV drops from 97% to 89% and you become eligible for a 6.25% rate. That's a $142/mo savings."*
3. **Map self-employed income correctly** — 1099 income is post-deductions, not gross; a 25% effective tax rate is typical. Show a side-by-side: *"as a W-2 with $X, you qualify; as a 1099 with the same gross, you qualify for $Y less because we net out self-employment tax."*
4. **Explain credit-band impact on rate** — a user at 619 sees a much different rate than 640; show the price of moving up one band.
5. **Name the SoFi-specific product alternatives** — *"Based on your inputs, you don't qualify for a SoFi Conventional. You may qualify for a SoFi FHA (500+ credit) or SoFi VA (580+ credit) loan. Try changing the loan type."*
6. **Spell out the alternative-path products** — bank statement loans, asset-depletion loans, non-QM loans, portfolio lenders. SoFi itself doesn't offer these, but a good diagnostic can route the user to lenders that do.
7. **Don't burn a hard pull.** A diagnostic should be informational; only the actual application should pull credit.
8. **Give the borrower a single-page, shareable "what would I need to change" plan** they can act on in 30/60/90 days.
9. **For self-employed borrowers specifically, build a 2-year tax-return aware calculator.** Not just gross, but: (Schedule C net + K-1 + 1099) × 24-month average, plus add-backs for depreciation/amortization. The current SoFi self-help article *says* this in words but doesn't *show* it.
10. **Capture the failure case at the input stage** — if a user says "credit 580" on SoFi's picker, the tool should immediately surface: *"SoFi's stated minimum is 600. A 580 FICO may still qualify you for an FHA loan through SoFi, but you should also consider these 3 alternative lenders…"* — not after the user has completed the entire 8-step funnel.

The most important thing a diagnostic must do that SoFi does **not** do: **own the moment of failure.** SoFi dumps the user into a phone-call handoff. A diagnostic owns the failure moment, names the constraint, and gives the user a concrete next step. That's the strategic hole.

---

## Appendix A — Property type & occupancy enums (from React)

```js
propertyType = [
  Detached          -> "Single family home—Detached",
  Attached          -> "Single family home—Attached",
  Condo             -> "Condominium",
  TwoUnit           -> "Two-unit property",
  ThreeUnit         -> "Three-unit property",
  FourUnit          -> "Four-unit property",
  Pud               -> "Planned unit development",
  ManufacturedDoublewide -> "Manufactured home—Doublewide",
]

occupancyType = [
  PrimaryResidence  -> "Primary Residence",
  SecondHome        -> "Second Home",
  InvestmentProperty -> "Investment Property",
]
```

## Appendix B — Stated credit band options shown to user

```
> 740
720-739
700-719
680-699
660-679
640-659
620-639
Below 620
```

## Appendix C — Stated credit band enums used by server (back-end)

```
BUILDING, DEVELOPING, ESTABLISHED, EXCEPTIONAL, FAIR,
GOOD, POOR, STARTING, STRONG, VERY_POOR
```

## Appendix D — Underlying loan-purposes and stages

```js
loanPurpose = { Purchase, Refinance, Heloc, HomeEquity }
applicationStage = { Researching, OpenHouse, Offer, SignedContract }
creditStatus = { CreditApproved, CreditDeclined, CreditExpired, CreditIneligible, Expired, InProgress, NotStarted }
creditProfile = { Building, Developing, Established, Exceptional, Fair, Good, Poor, Starting, Strong, VeryPoor }
creditErrorReason = { CreditFrozen, CreditLocked, NonRetryable, NoCredit, NoCreditMissingSsn, Other }
```

## Appendix E — Eligibility error codes surfaced to the React (but never named to the user)

```
APP_NOT_FOUND, BORROWER_DOES_NOT_OWN_APPLICATION, COMMERCIAL_PROPERTY,
COUNTY_MISMATCH, CREATE_APP_FAILURE, CUSTOMER_CLIENT_ERROR,
ENHANCE_YOUR_CALM, ERROR, ERROR_PARTNER_SYNC, ERROR_RETRIEVING_CUSTOMER,
ERROR_SOFI, ERROR_VALIDATING_ADDRESS, EXPIRED, INVALID_ADDRESS,
INVALID_ARGUMENT, INVALID_ARGUMENT_ANONYMOUS, INVALID_PHONE,
INVALID_ZIP, LOAN_AMOUNT_OVER_LIMIT, LOAN_AMOUNT_UNDER_LIMIT,
NO_ELIGIBLE_PRODUCTS, NO_OFFERS, PARTNER_CREATE_APP_ERROR,
PO_BOX, PROPERTY_NOT_FOUND, RETRY_PRICING,
UNAUTHORIZED_APPLICATION_ACCESS, UNIMPLEMENTED,
UNIQUE_CONSTRAINT_VIOLATION, UNKNOWN, UPDATE_APP_FAILURE
```

Plus the front-end failure checks:

```
CASHOUT_LTV, MAXIMUM_LTV, MAXIMUM_LTV_FTHB, MINIMUM_AMOUNT,
MAXIMUM_JUMBO_AMOUNT, UNSUPPORTED_STATE
```

These are exactly the diagnostics a "why am I denied" tool should expose.

---

## Sources / evidence trail

- All HTML fetched live this session: `/tmp/sofi_*.html`
- React state-machine source: `https://d25w3v87zu4vev.cloudfront.net/sofiinc/lending/originations/master/static/js/client.7136e26cfe.js` (saved as `/tmp/sofi_client.js`)
- SoFi page sitemaps: `https://www.sofi.com/sitemap_index.xml` → `page-sitemap.xml` through `page-sitemap5.xml`
- JSON-LD schemas captured from the live page sources
- React JSX of the rate-quote flow extracted by parsing the inline `try { ReactDOM.render(…) }` script in the preapproval page HTML
- Article copy captured from `/learn/content/buying-home-mortgage-prequalification-vs-preapproval/` and `/learn/content/tips-to-qualify-for-a-mortgage/`
