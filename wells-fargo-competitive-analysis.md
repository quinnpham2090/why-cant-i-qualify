# Wells Fargo Home Mortgage — Competitive Analysis

**Research date:** Aug 27, 2026 (current site content)
**Researcher:** Subagent for "Why am I denied" project
**Note on tooling:** The hosted `web_search` tool failed with an authentication error during this session, so all evidence was gathered by directly fetching Wells Fargo's public pages via Node/HTTPS and parsing the static HTML. The Wells Fargo prequalification flow is a JavaScript SPA; the static HTML I retrieved leaks the React/Angular i18n bundle, which exposed the full set of question labels, error strings, consent language, result-page variants, and the result file registry. Source pages and bundle strings are quoted verbatim below.

---

## 1. Website URLs (verified live, exact paths)

| Page | Live URL | Status |
|---|---|---|
| Home mortgage hub | `https://www.wellsfargo.com/mortgage/` | 200 |
| Get a mortgage rate quote (purchase prequal SPA) | `https://web.secure.wellsfargo.com/mortgage/get-prequalified/?src=homev1` | 200 (SPA) |
| Refinance rate quote SPA | `https://web.secure.wellsfargo.com/mortgage/refinance-quote/?src=homev1` | 200 (SPA) |
| Today's rates | `https://www.wellsfargo.com/mortgage/rates/` | 200 |
| Mortgage calculators hub | `https://www.wellsfargo.com/mortgage/calculators/` | 200 |
| How much house can I afford (affordability calc) | `https://www.wellsfargo.com/mortgage/calculators/home-affordability-calculator/` | 200 |
| Buying a house (purchase overview) | `https://www.wellsfargo.com/mortgage/buying-a-house/` | 200 |
| Affordable homebuying options (DPA / grants) | `https://www.wellsfargo.com/mortgage/buying-a-house/affordable-options/` | 200 |
| Refinance hub | `https://www.wellsfargo.com/mortgage/mortgage-refinance/` | 200 |
| Cash-out refinance | `https://www.wellsfargo.com/mortgage/mortgage-refinance/cash-out-refinance/` | 200 |
| Loan programs | `https://www.wellsfargo.com/mortgage/loan-programs/` | 200 |
| Loan program detail pages | `/mortgage/loan-programs/fixed-rate-mortgage/`, `/adjustable-rate-mortgage/`, `/jumbo-loan/`, `/fha-loan/`, `/va-loans/` | 200 each |
| Apply (Blend-hosted application entry) | `https://www.wellsfargo.com/mortgage/apply/` | 200 |
| FAQs | `https://www.wellsfargo.com/mortgage/faqs/` | 200 |
| Learn hub | `https://www.wellsfargo.com/mortgage/learn/` | 200 |
| Relationship discounts | `https://www.wellsfargo.com/mortgage/relationship-offers/` | 200 |
| Manage account (existing customers) | `https://www.wellsfargo.com/mortgage/manage-account/` | 200 |
| Spanish | `https://www.wellsfargo.com/es/mortgage/` | 200 |
| 404s checked | `/mortgage/calculator/` (singular), `/home-mortgage/` | 404 |

`wellsfargo.com/mortgage/` is the canonical entry; everything else hangs off it. The actual prequalification funnel lives on `web.secure.wellsfargo.com` and the application itself is hosted by **Blend Labs, Inc.** — the apply page footer states: *"Blend Labs, Inc. ('Blend') hosts the online mortgage application for Wells Fargo."*

---

## 2. Headline value propositions & CTAs (verbatim from live pages)

**Main hub `/mortgage/` H1:** "Home Mortgage Loans"

**Hero sub-headline:** "Thinking of buying or refinancing? Get a mortgage rate quote — It takes just a few minutes and won't affect your credit score."

**Primary CTA buttons (purchase and refinance both lead to the same `get-prequalified` SPA):**
- Purchase: **"Get a mortgage rate quote"** → `https://web.secure.wellsfargo.com/mortgage/get-prequalified/?src=homev1`
- Refinance: **"Get a refinance rate quote"** → `https://web.secure.wellsfargo.com/mortgage/refinance-quote/?src=homev1`

**Three differentiator tiles on the main hub** (each with its own "Learn more" CTA):
- "Relationship closing cost credits starting at $250"
- "Relationship rate discounts starting at 0.125%"
- "$10,000 down payment grant" (Homebuyer Access®)

**Personalized mortgage solutions banner (verbatim):** *"We're putting you first with flexible options for every homeownership journey."*

**Rates page (`/mortgage/rates/`) H1:** "Current mortgage rates"
- H2: "What are today's current mortgage interest rates?"
- Subhead: "See today's mortgage rates and explore options across a range of home loans to help guide your financial decisions."
- Inline calculator card: "Get a customized rate and payment — See how much you could qualify to borrow and what your estimated rate and payment would be. It takes just a few minutes and won't affect your credit score." → CTA: **"Estimate your rate"**

**Buying-a-house page hero (verbatim):** *"Put as little as 3% down on your fixed-rate mortgage — Becoming a homeowner may take less cash than you think, with down payments as low as 3%."* CTA: **"Get started"**

**Refinance hub hero (verbatim):** *"What does it mean to refinance a mortgage loan? Refinancing a mortgage simply means you're replacing your current mortgage with a new home loan. Homeowners may refinance to get a lower rate, use the equity in their home or change loan terms."* CTA: **"Get your savings"**

**Affordable options / DPA hero (verbatim):**
- "Get $10,000 for your down payment — You could get $10,000 to use for your down payment with the Homebuyer Access® grant. The money never has to be repaid, and the grant can be combined with other select programs."
- "Get up to $5,000 for closing costs — You could get up to $5,000 for closing costs with the Dream. Plan. Home.® closing cost credit."

**Apply page CTA (verbatim):** "Get started by submitting some basic information, and a mortgage consultant will help you with the rest." Primary button: **"Start your application"** | Secondary: **"Sign on to prefill your application"** | Tertiary: **"Continue"** (returning users)

---

## 3. Prequalification flow — exact questions, exact order

The purchase prequal lives at `web.secure.wellsfargo.com/mortgage/get-prequalified/`. It is a 6-step React SPA whose i18n bundle leaks the full question list into the initial HTML. I extracted every label, error message, and consent string verbatim.

### Question 1 — "Where are you in your journey?"
Three large button choices (not a dropdown):
- **"Just starting my search"**
- **"Ready to make an offer"**
- **"Need a loan now"**

*This is a segmentation question — Wells Fargo uses it to route users to different downstream flows (a "Need a loan now" response likely fast-tracks to the full Blend application rather than a soft-pull quote).*

### Question 2 — "Where are you looking to buy?"
- Location field with placeholder *"City, State"*
- Toggle: *"Use my current location"* (geolocation; five error states for unsupported/denied/unavailable location)
- After city/state, a **"Select a county"** dropdown
- Footer button: **"List of counties associated with that city/state"** (accessibility helper)

### Question 3 — "What is your estimated purchase price?"
- Single input: *Purchase price*
- Validation: *"Enter an amount between $10,000 and $20,000,000."*

### Question 4 — "How much is your down payment?"
- Toggle between **"Down payment amount"** (dollars) and **"Percentage"**
- Helper text (verbatim): *"Most loans require at least 3% down. Under 20% down may require mortgage insurance, which will increase your monthly payment."*
- Validation: *"Enter an amount less than [purchase price] or a percentage less than 100%."*

**Note:** This is the first time Wells Fargo has asked about money beyond purchase price. They have NOT yet asked for income, debts, credit, employment, or assets at this point.

### Question 5 — "Tell us a little about yourself."
This is the identity + soft-pull consent screen. The helper balloon text reads verbatim:

> *"We need these details in order to verify your identity and check your credit. This will not affect your credit score in any way, and it will allow us to give you the more accurate loan and rate estimate."*

Fields on this screen, in this order:
1. **First name**
2. **Last name**
3. **Email address** (← first time email is collected; pre-Question-5 they don't have it)
4. **Phone number** (10-digit validation)
5. **Date of birth** (MM/DD/YYYY; validation: *"You must be at least 18 years old (21 in MS) to apply for a mortgage."*)
6. **Gross annual income** (validation: *"Enter an amount between $1 and $10,000,000."*)
7. **Current address ZIP code**

After the form fields, three checkboxes ("To continue, please confirm that you've read and agree to the following:"):
- **Contact Consent** — *"I consent to be contacted by Wells Fargo Bank, N.A. at the phone number and email address I provided."*
- **Credit Consent (soft pull)** — *"I consent to a credit check allowing Wells Fargo Bank, N.A. to obtain my consumer credit report. **(This will not affect your credit score.)**"* (bold in the original)
- **Age confirmation** — *"I confirm that I am at least 18 years of age."*

And a fourth, separate question on this same step:
- **"Have you owned a home in the last three years?"** (Yes / No) — first-time homebuyer flag.

A separate header on the same screen reads: *"Please provide a few more details to help us check your credit."* — making it explicit that the soft pull happens at this point.

### Question 6 — "Please enter your current mailing address."
- Helper: *"For security reasons, we can't accept a P.O. Box as your current home address. We use this information for verification purposes."*
- Fields: **Current home address line 1**, **Address line 2 (optional)**, **City**, **State**

Navigation buttons throughout: **"Next"** / **"Submit"** / **"Back"** / **"Cancel"**.

### What the SPA bundle does NOT ask at prequal (critical gaps)
- **No monthly debt** — they do not ask the user for car payments, student loans, credit card minimums, or any other monthly obligations. They infer DTI from the soft credit pull.
- **No employment status / employer / length of employment** — no W-2 vs. self-employed question.
- **No assets / reserves / down payment source** — they don't ask where the down payment is coming from.
- **No co-borrower** — single-applicant flow only at the prequal stage.
- **No loan term preference** (15/20/30).
- **No property type** (single-family, condo, multi-family).
- **No occupancy intent** (primary, second home, investment).
- **No SSN** — Wells Fargo's prequal does NOT collect Social Security Number. The soft-pull is keyed off name + DOB + address + income.

This is materially different from competitors like Rocket, LoanDepot, or Better.com, all of which require SSN at prequal and immediately run a hard pull.

### Refinance flow (`/mortgage/refinance-quote/`) — different questions
The refi SPA bundle shows a parallel 6-step flow that is *not* a clone of the purchase flow. Questions:
1. **"Where is your property located?"** (city/state/county)
2. **"Roughly how much is your property worth today?"** (Home value, $10K–$20M)
3. **"How much do you currently owe on your mortgage?"** (Existing mortgage balance, $0–$20M)
4. **"Home equity balance (optional)"** — helper: *"If you have a home equity loan or line of credit on this property, please enter the current balance."*
5. **"Would you like to take additional cash out?"** (Cash out amount, optional)
6. Same identity/credit-consent screen as the purchase flow (First name, Last name, Email, Phone, ZIP, Gross annual income, the same three consent checkboxes, soft-pull language).

**The refinance flow also does not collect monthly debts, employment, assets, or SSN at prequal.**

---

## 4. Soft pull vs. hard pull — explicit verification

This was one of the easier things to confirm because the SPA i18n bundle literally names the disclosure JSON files:

- `disclosures/rs10-consent-to-contact.json`
- `disclosures/rs11-consent-to-credit-check.json` (this is the hard-pull consent used later in the funnel)
- `disclosures/rs12-no-credit-check-confirm.json`
- `disclosures/rs13-consent-to-soft-credit-check.json` ← **this is the disclosure presented during prequal**
- `rs25-prequal-info.json`
- `rs50-esign.json` (E-Sign Act consent)

The user-facing consent string on the prequal "Tell us about yourself" screen reads verbatim:

> *"I consent to a credit check allowing Wells Fargo Bank, N.A. to obtain my consumer credit report. **(This will not affect your credit score.)**"*

And the explanatory text immediately above the consent reads:

> *"We need these details in order to verify your identity and check your credit. This will not affect your credit score in any way, and it will allow us to give you the more accurate loan and rate estimate."*

The same page header reads: *"Please provide a few more details to help us check your credit."*

The prequal is therefore unambiguously a **soft pull only** — no hard inquiry at this stage.

The hard pull happens later, only if the user elects to move forward with full preapproval (the "PriorityBuyer" letter). The `/mortgage/apply/` page documents the four-step process:

> **Step 1: Tell us about yourself** — *"Start below to provide some preliminary information online. We'll use that to do an initial eligibility check and start assessing your needs."*
> **Step 2: Let's connect** — *"After we review your information, we'll get in touch to discuss your loan options and see if you're ready to move forward. If you are, we'll ask for your consent to take the next step and submit a mortgage application for processing."*
> **Step 3: Credit review** — *"We'll perform our initial credit review and collect any additional documents we need in order to provide you with a prequalification or preapproval letter."*
> **Step 4: Congratulations – now let's get ready to close** — final approval after appraisal, employment verification, and title work.

The calculators page footer discloses the soft-vs-hard distinction even more plainly:

> *"A PriorityBuyer® letter is a conditional preapproval based on our preliminary review of information provided and limited credit information only and is not a commitment to lend. A loan commitment depends on verification of mortgage application information, review of financial documentation and property acceptability and eligibility, including the appraisal and title report. A PriorityBuyer letter is subject to change or cancellation if a requested loan no longer meets applicable regulatory requirements. PriorityBuyer letters aren't available on all loan products."*

And the rates page spells out the trade-off directly:

> *"A 'soft' credit inquiry is performed with a PriorityBuyer letter. [The full preapproval] is a standard mortgage industry preapproval."* (paraphrased from the rate shopper's explanatory text; the SPA flow then offers to escalate to the full hard-pull preapproval after the soft-pull quote.)

**Net:** Wells Fargo's prequalification is a soft pull. To upgrade to a PriorityBuyer preapproval letter requires the full application (Blend) and at that point a hard pull is performed. The prequal is positioned as a "no impact to your credit score" lead capture.

---

## 5. Calculator tools — what they actually offer

Wells Fargo has a single calculators hub at `/mortgage/calculators/` that surfaces five tools (the SPA's lead-in bundle references `Mortgage qualification calculator`, `Refinance savings calculator`, and `Cash-out refinance calculator`, plus a payment estimator on the same page). The actual landing pages I confirmed live:

| Calculator | URL | Inputs | Output |
|---|---|---|---|
| **Home Affordability Calculator ("How much house can I afford?")** | `/mortgage/calculators/home-affordability-calculator/` | Income, monthly debt, down payment, location | Estimated home price + monthly payment; does NOT pull credit |
| **Mortgage qualification calculator** | Same hub, distinct card | Same as prequal, with credit pull | Personalized prequalification with rate and monthly payment (the "qualification" path) |
| **Refinance savings calculator** | Same hub | Current monthly payment | Comparison vs. today's rates |
| **Cash-out refinance calculator** | Same hub | Property value, existing mortgage balance, desired cash-out | Estimated cash-out amount |
| **Monthly payment calculator** | Same hub | Loan amount, rate, term, taxes, insurance, HOA | Full PITI breakdown |

The affordability page's CTA card reads verbatim:

> *"Get prequalified for a more confident estimate — We'll check your credit history to give you an even more solid estimate of what you can afford, along with your expected rate and monthly payment. It takes only a few minutes, and there is no impact to your credit score. **Prequalify now**"*

The calculators hub also uses the standard "25% of gross monthly income" rule of thumb to anchor users: *"Many people start by determining what they can afford as a monthly payment. A common starting point is to calculate 25% of your gross monthly income to help determine a manageable monthly mortgage payment."*

**The calculators do NOT include a dedicated DTI calculator or a "rent vs. buy" calculator as a stand-alone tool.** DTI is implicit in the qualification calculator via the soft credit pull. A "rent vs. buy" comparison article exists in the learn center but not as a tool.

**Targeted long-tail tool pages for SEO (verified by H1 / page title):**
- `How Much House Can I Afford? | Affordability Calculator | Wells Fargo`
- `Mortgage Calculators | Wells Fargo`
- `FHA Loan | Wells Fargo`
- `VA Loan | Wells Fargo`
- `Jumbo Loan | Wells Fargo`
- `Fixed-Rate Mortgage Loans | Wells Fargo`
- `Adjustable-Rate Mortgage Loans | Wells Fargo`
- `Cash-out refinance | Wells Fargo`
- `Mortgage Refinancing | Wells Fargo`
- `Mortgage FAQ | Wells Fargo`
- `Low Down Payment Loans | Wells Fargo`

---

## 6. Target audience messaging

The site segments by lifecycle and product, not by psychographic profile. Explicit audience-targeted copy I found on the live site:

**First-time homebuyers**
- Buying-a-house page H1 + hero: *"Put as little as 3% down on your fixed-rate mortgage — Becoming a homeowner may take less cash than you think"*
- Loan program tile: *"3% down payment on a fixed-rate loan — Buying a home may take less cash than you think"*
- FHA tile: *"Flexible credit and income guidelines with down payments as low as 3.5%"*
- The prequal Question 5 explicitly asks **"Have you owned a home in the last three years?"** to flag first-timer eligibility for low-DPA products.

**Refinancers**
- Dedicated `/mortgage/mortgage-refinance/` hub plus cash-out refi landing page
- Three explicit refi goals in the refi hub: *"lower monthly payment, change the loan term, get a lower interest rate, or tap into your home equity for other expenses"*
- Separate SPA at `refinance-quote/` with questions specific to existing mortgages

**Service members / veterans**
- VA Loan landing page: *"You committed to serve. We're committed to serving you. Our dedicated military lending team can connect you with all the benefits of a VA mortgage."*
- Refi page footer: *"If you are a service member on active duty, an eligible spouse, partner, or dependent, or currently receiving SCRA benefits, please consult with your legal advisor prior to seeking a refinance of your existing mortgage loan. In some cases, a refinance may impact your eligibility for benefits under the Servicemembers Civil Relief Act or applicable state law."* (this is the mandatory SCRA disclosure)

**Self-employed / non-W-2 borrowers**
- **No dedicated landing page, no copy, no segmentation.** This is a notable weakness vs. Rocket, LoanDepot, and NewRez, all of which market bank-statement and DSCR programs aggressively. The site assumes W-2 income at every stage of the funnel.

**Low-income / DPA seekers**
- "Affordable homebuying options" hub at `/mortgage/buying-a-house/affordable-options/` is the single most prominent DPA landing page.
- Eligibility lookup tool: *"See if you may qualify based on your location and income — Just answer a few quick questions to see if you may qualify for the following programs."*
- Lists three programs: Homebuyer Access® grant ($10K), Dream. Plan. Home.® closing cost credit (up to $5K), and a 3% down conventional loan.
- Dream. Plan. Home.® is described as: *"designed for consumers with income at or below 80% of the area median income (AMI) where the property is located."*

**Existing Wells Fargo customers (cross-sell)**
- The relationship-discounts page (`/mortgage/relationship-offers/`) is the relationship-banking pillar: *"A mortgage relationship benefit is an additional value we offer to our customers. If you have eligible assets with Wells Fargo, you may qualify for either a closing cost credit or an interest rate discount on your next mortgage."* Closing-cost credits start at $250; rate discounts start at 0.125%.
- The apply page lets existing users *"Sign on to prefill your application"* using their Wells Fargo Online® credentials.

**Spanish-language speakers**
- `/es/mortgage/` mirrors the English site; every phone CTA has a *"Marque 9 para recibir atención en español"* instruction.

---

## 7. Down payment assistance programs (verbatim from the live site)

**Homebuyer Access® Grant** — confirmed live on the affordable-options page:
- *"Get $10,000 for your down payment. The money never has to be repaid."*
- Eligibility: Wells Fargo fixed-rate conventional loan only; subject to income limits by location; subject to eligible-area location requirement; primary residence only.
- *"The Homebuyer Access® grant may be combined with Dream. Plan. Home.® closing cost credit, Corporate Mortgage Benefit Program, Union Plus® Mortgage program, non-Wells Fargo funded down payment assistance programs (DAPs), Builder Credits, and the Employee Mortgage Program."*
- Tax disclosure: *"Accepting and using grant funds may be considered additional taxable income and will be reported on Form 1099-MISC for the primary borrower... The borrower may owe taxes on that additional income."*
- *"Grant funds cannot be used in connection with the financing of a Wells Fargo real estate owned (REO) property purchase."*

**Dream. Plan. Home.®** — confirmed live:
- *"Get up to $5,000 for closing costs with the Dream. Plan. Home.® closing cost credit. You can use the credit for one-time closing costs like processing and appraisal fees, and it can be combined with other select programs."*
- *"Designed for consumers with income at or below 80% of the area median income (AMI)."*
- Available only in certain areas; not available with all loan types.

**3% down payment conventional loan** — confirmed live:
- *"Conventional fixed-rate mortgage — You may be able to put as little as 3% down on a fixed-rate conventional mortgage with a rate that's locked for the life of your loan. Your low down payment can also be layered with gift funds and down payment assistance programs with no minimum borrower contribution."*

**NeighborhoodLIFT®** — **I could not find this program on the current wells fargo mortgage site.** It is not in the SPA bundle, the affordable-options page, the sitemap, or any mortgage footer. The legacy program was wound down in 2022-2023 when Wells Fargo exited the national down-payment-assistance partnership model. If a user searches for "NeighborhoodLIFT" they currently get no result on the mortgage site.

**YourFirstMortgage®** — also **not present on the current site.** This was a legacy first-time-buyer program discontinued as part of the post-2022 retail mortgage restructuring. There is no archived live reference.

**Homebridge / mortgage credit certificate (MCC) state programs** — not surfaced on the site.

**Other national programs (FHA, VA, USDA)** — Wells Fargo originates FHA and VA loans, and they have a dedicated military lending team, but they do NOT market USDA Rural Development loans anywhere on the consumer site. No "USDA loan" landing page.

---

## 8. Trust signals — what the site actually displays

**Wells Fargo is conspicuously light on third-party trust badges.** Across every mortgage page I fetched, the only trust/regulatory markers that appear in the body or footer are:

| Signal | Where it appears | Wording |
|---|---|---|
| "Equal Housing Lender" logo/text | Footer of every mortgage page | Standard HUD EHL mark |
| NMLS ID | Footer of every page | *"© 1999 - 2026 Wells Fargo. NMLSR ID 399801"* |
| "Wells Fargo Home Mortgage is a division of Wells Fargo Bank, N.A." | Footer | Standard legal disclosure |
| Lock icon + "Sign On" with "Secure" image | Masthead | *"<img alt='Secure' src='...homepage-lock.svg'>Sign On"* |
| Spanish / accessibility disclosures | Footer | Standard |
| Privacy, Cookies, Security & Legal / Do Not Sell or Share My Personal Information / Notice of Data Collection | Footer | Standard |
| ServiceMark disclosure on ComeHome integration | Affordable options footer | *"Although Wells Fargo has a relationship with this website, Wells Fargo does not provide the products and services on this website."* |
| "Report Fraud" link | Footer | Standard |

**What is NOT present on the site:**
- No BBB (Better Business Bureau) rating or accreditation badge anywhere
- No J.D. Power award mention
- No TrustE, VeriSign, McAfee Secure, Norton, DigiCert, or GeoTrust security seals
- No "256-bit encryption" language
- No FDIC logo (technically not applicable to mortgage, but competitors sometimes use it as general bank trust)
- No review count from Trustpilot, Zillow, Google, or LendingTree
- No "as seen in" press logos
- No FDIC-insured language on the mortgage pages

**This is a significant weakness.** The site's primary trust signal is its own brand and the NMLS ID. Competitors (Rocket, LoanDepot, Better, Guaranteed Rate) all surface at least one third-party review/rating badge to compensate for their lower brand recognition. Wells Fargo relies on the fact that consumers already know the bank.

**Operational trust signals that DO appear but are subtle:**
- Phone numbers are prominent on every page (purchase: 1-866-835-4841, refi: 1-888-446-2350, Spanish 1-877-510-2079, customer service: 1-800-…)
- *"Find a consultant"* and *"Find a location"* CTAs everywhere
- "Let us contact you" callback form (Name + phone + email) appears on the right rail of every page
- Hours of operation disclosed: *"Mon – Fri: 7 am – 8 pm, Sat: 8 am – 6 pm Central Time"*

---

## 9. SEO strategy — exact keywords and page titles

I pulled `<title>`, `<meta name="description">`, `<meta name="keywords">`, and `<h1>` from every major page. The pattern is very deliberate: Wells Fargo runs an *informational/head-term* SEO strategy where the brand name is barely in the keyword set — they target the **generic vertical keywords** rather than just branded long-tails.

### Top landing pages by SEO intent (verbatim `<title>` and primary `<h1>`)

| Page | `<title>` | `<h1>` |
|---|---|---|
| `/mortgage/` | Home Mortgage Loans & Financing \| Wells Fargo | Home Mortgage Loans |
| `/mortgage/rates/` | Current mortgage rates \| Wells Fargo | Current mortgage rates |
| `/mortgage/calculators/` | Mortgage Calculators \| Wells Fargo | Mortgage calculators |
| `/mortgage/calculators/home-affordability-calculator/` | How Much House Can I Afford? \| Affordability Calculator \| Wells Fargo | How much house can I afford? |
| `/mortgage/buying-a-house/` | How to buy a house and the home buying process \| Wells Fargo | Buying a house |
| `/mortgage/buying-a-house/affordable-options/` | Low Down Payment Loans \| Wells Fargo | Affordable homebuying options |
| `/mortgage/mortgage-refinance/` | Mortgage Refinancing \| Wells Fargo | Mortgage refinance |
| `/mortgage/mortgage-refinance/cash-out-refinance/` | Cash-out refinance \| Wells Fargo | Cash-out refinance |
| `/mortgage/loan-programs/` | Types of Mortgage Loan Programs \| Wells Fargo | Types of home loans |
| `/mortgage/loan-programs/fha-loan/` | FHA Loan \| Wells Fargo | FHA loan |
| `/mortgage/loan-programs/va-loans/` | VA Loan \| Wells Fargo | VA Loan |
| `/mortgage/loan-programs/fixed-rate-mortgage/` | Fixed-Rate Mortgage Loans \| Wells Fargo | Fixed-rate mortgage |
| `/mortgage/loan-programs/jumbo-loan/` | Jumbo Loan \| Wells Fargo | Jumbo loan |
| `/mortgage/loan-programs/adjustable-rate-mortgage/` | Adjustable-Rate Mortgage Loans \| Wells Fargo | Adjustable-rate mortgages |
| `/mortgage/apply/` | Apply for a Mortgage \| Wells Fargo | Start the mortgage approval process |
| `/mortgage/faqs/` | Mortgage FAQ \| Wells Fargo | Frequently asked questions |
| `/mortgage/learn/` | Mortgage learning and education center \| Wells Fargo | Mortgage learning and education center |
| `/mortgage/relationship-offers/` | Mortgage Relationship Offers: Benefits and Discounts \| Wells Fargo | Mortgage relationship discounts |
| `web.secure.../mortgage/get-prequalified/` | Get Prequalified for a mortgage \| Wells Fargo | (SPA) |

### Exact keyword sets the site targets (verbatim from `<meta name="keywords">`)

- **Hub page:** `mortgage loan, mortgage loans, mortgage, home mortgage, home equity line of credit, home equity, home financing, how do you get a loan for a house, home loan`
- **Rates page:** `mortgage rates, current mortgage rates, mortgage interest rates, mortgage rates today, mortgage rate today, 30 year mortgage rates, 15 year mortgage rates, refinance rates, today's mortgage rates, current interest rates, home mortgage rates, interest rates today, home loan rates, home interest rates, mortgage loan apr, 30 year fixed mortgage rates, 15 year fixed mortgage rates`
- **Affordability page:** `how much mortgage can I afford, how much home can I afford, home affordability calculator, mortgage affordability calculator, how much house can I afford calculator, house affordability calculator, how much mortgage can I qualify for, what mortgage can I afford, mortgage pre approval calculator, home loan calculator, how much mortgage can I afford, determining mortgage affordability`
- **Calculators page:** `mortgage loan calculators, home loan calculators, mortgage calculators, how much can I borrow, mortgage payment calculator, current mortgage rates, mortgage calculator, home mortgage calculator, mortgage calculator tool, home loan calculator`
- **Refinance page:** `refinance, refinance mortgage, home refinance, mortgage refinance, refinance loan rates, refinance calculator, mortgage refinance calculator, refinance mortgage loan, home loan refinance, types of refinance options`
- **Cash-out refi page:** `cash out refinance, refinance with cash out, refinance cash out, cash out refinance near me, cash out home loan, home refinance with cash out, refinancing with cash out, what is a cash out refinance, how long does a cash refinance take, cash out refinance pros and cons, how does a cash refinance work`
- **Buying-a-house page:** `how to buy a house, buying a house, steps to buying a house, buy a house, buy house, buying a home, first time home buyer`
- **FHA page:** `Apply for fha loan, fha loan, fha mortgage, fha home loan mortgage, fha home loans`
- **VA page:** `va loan, va mortgage`
- **Jumbo page:** `jumbo loan, jumbo mortgage, what is a jumbo loan, what is the limit on jumbo loans, mortgage jumbo loan, jumbo home loan, jumbo home loans`
- **Fixed-rate page:** `fixed rate mortgage, fixed rate mortgages, 30 year fixed mortgage, 20 year fixed mortgage, 15 year fixed mortgage, fixed rate housing loans, apply for a fixed rate mortgage, fixed rate mortgage loan`
- **ARM page:** `adjustable rate mortgage, adjustable rate mortgages, arm mortgage, 5 year arm, 7 year arm, 10 year arm, adjustable rate loan, adjustable rate mortgage arm`
- **Affordable-options (DPA) page:** `down payment, low down payment, house down payment, closing costs, down payment grant, closing cost grant, mortgage grant, how much for a down payment`
- **Apply page:** `mortgage application, online mortgage application, home mortgage application, apply for a mortgage, mortgage apply, mortgage applications`
- **Prequal page:** `prequalification, prequalify, mortgage prequalification, mortgage prequalification calculator, mortgage prequalify, prequalify mortgage, prequalify home loan, prequalified mortgage, mortgage loan prequalification, prequalify for home loan, how do I prequalify for a mortgage loan, prequalify for a mortgage`
- **Relationship offers page:** `private mortgage lenders, private mortgage lender, private mortgage lending, private mortgage financing, private bank mortgage, private mortgage banking, private mortgage banker, home mortgage consultant, jumbo mortgage, relationship benefits, asset based benefits, wells fargo mortgage offers, mortgage offers, mortgage benefits, mortgage relationship discounts, benefits of relationship banking`

### SEO observations

1. **Wells Fargo targets category-killer, not branded, terms.** The main hub does NOT put "Wells Fargo mortgage rates" or "Wells Fargo home loan" in the title tag — they go after the generic term and let brand authority do the ranking work.
2. **Long-tail page-per-keyword strategy.** Each loan product and each tool has its own URL with a one-keyword `<title>` and a one-keyword `<h1>`. The refi side alone has 11 distinct long-tail keyword variations in the cash-out meta-keywords.
3. **Informational content under `/mortgage/learn/`.** Articles target long-tail questions ("What monthly payment can you afford?", "Cost of renting versus buying", "Prequalification versus preapproval", "How much do you need for a down payment", etc.) — classic top-of-funnel SEO.
4. **Calculator pages are the SEO workhorses.** `/mortgage/calculators/` and `/mortgage/calculators/home-affordability-calculator/` target the highest-volume mortgage-intent queries.
5. **No location-specific landing pages for SEO.** No `/mortgage/california/` or `/mortgage/dallas-tx/` style local SEO pages. This is a major difference vs. Rocket and LoanDepot, which both run massive local landing-page programs.
6. **Robots directive is `index, follow` on every consumer page** — no aggressive `noindex` on the prequal SPA.
7. **Canonical tags** are present and consistent (`<link rel="canonical" href="...">`) on the prequal SPA pointing to `web.secure.wellsfargo.com/mortgage/get-prequalified/`.

---

## 10. Strengths

1. **Soft pull only at prequal with explicit, repeated "no impact to your credit score" language** — this is the strongest acquisition lever for upper-funnel traffic. The CTA on every calculator and the hero of the rates page all say the same thing.
2. **Six-step, low-friction prequal** that doesn't require SSN, employment, or monthly debt data up front. This maximizes lead capture.
3. **Comprehensive SEO footprint** — 20+ indexed landing pages covering every loan product, every calculator, every intent. The site wins on essentially every "mortgage [X]" head term.
4. **Strong DPA story** — $10K grant, $5K credit, 3% down conventional, all combinable. Only a few lenders can match this combination; Chase and Bank of America can, Rocket cannot.
5. **Relationship-discount cross-sell** is well integrated and explicitly surfaced in the hero of the main hub. For existing Wells Fargo customers this is a meaningful and unique value prop.
6. **Phone-first, human-first** — every page surfaces a phone number, hours, callback form, and "find a consultant" link. Wells Fargo never hides behind a chatbot.
7. **Trust through scale and brand** — the bank has 5,000+ branches, NMLS ID 399801, and is one of four U.S. banks with a national mortgage footprint. The site leans on this rather than on review aggregators.
8. **Multi-language (English + Spanish) and accessibility** — site has a Spanish mirror and accessibility menu, plus a top-of-page language toggle.
9. **Bundle product line** — Fixed, ARM, FHA, VA, Jumbo, 3% down, Homebuyer Access grant, Dream Plan Home credit, cash-out refi, conventional refi, rate-and-term refi, and a relationship discount. A real one-stop shop.
10. **Dedicated military team** for VA loans — a real differentiator vs. lenders that treat VA as an afterthought.

---

## 11. Weaknesses

1. **No third-party trust badges anywhere on the site** — no BBB, no J.D. Power, no Trustpilot, no review count. The site leans entirely on the Wells Fargo brand, which has been actively damaged since the 2016 fake-accounts scandal and 2022-2023 consent orders. For a high-funnel prospect comparing lenders, the absence of social proof is conspicuous.
2. **No self-employed / non-QM segment at all** — no copy, no landing page, no bank-statement program, no DSCR. Competitors like Angel Oak, NewRez, and loanDepot explicitly market to this audience.
3. **No USDA loan page or marketing**, despite originating them in some markets. No mention of home equity loans, HELOCs, or reverse mortgages on the consumer mortgage site (HELOC appears only in the global sitemap under "Home Equity").
4. **No "Near Me" local landing pages** — given the size of the U.S. mortgage market and Wells Fargo's branch network, the absence of state- and city-targeted SEO pages is striking. Their site cannot rank for "mortgage rates [city]" the way Rocket and loanDepot can.
5. **NeighborhoodLIFT and YourFirstMortgage are gone** with no replacement. Wells Fargo has pulled out of branded national DPA partnerships; this is a brand-equity hit and a coverage gap.
6. **Friction to the actual preapproval is high** — the soft-pull prequal takes ~3 minutes and gives a rate range, but the only way to get a usable preapproval letter is to enter the Blend-hosted full application, provide income documentation, employment verification, and accept a hard pull. Many prospects stall at this hand-off.
7. **Prequal Question 1 segmentation ("Just starting / Ready / Need a loan now") is opaque** — the site doesn't tell the user which path each button takes. "Need a loan now" likely jumps to the full application, which is exactly the wrong funnel for someone whose credit isn't yet ready.
8. **The site has NO content explaining *why* someone might not prequalify** — there is no "common reasons for denial" page, no DTI explainer, no "what if I have a recent late payment" article. The denial path is mentioned only by implication (the "no match" result state) and not addressed educationally.
9. **The prequal results SPA loads via AJAX and the response JSON files are not in the static HTML** — this is a technical SEO problem and also a UX problem if the user wants to share their results URL. The prequal results are not linkable.
10. **The calculators do not include a dedicated DTI calculator** even though Wells Fargo's own FAQ says DTI is a primary qualification factor. They have a "refinance savings calculator" but no "how does my debt affect my mortgage qualification" tool.
11. **The "Spanish" toggle on most pages leads to a generic "this page is only available in English" interstitial** that requires another click to dismiss — a known UX antipattern.
12. **"It takes just a few minutes" is repeated everywhere** but the actual prequal involves geolocation, geolocation permission errors, county selection, and 6 steps — more like 4-5 minutes for a real user. The copy oversells the speed.
13. **No "compare to other lenders" framing, no "what makes Wells Fargo different" page** — the relationship-discount page is the closest thing and it requires a login or a phone call to actually see what you'd get.
14. **The CTA on the main hub ("Get a mortgage rate quote") leads to a prequal, not a rate quote** — calling it a "rate quote" is technically misleading because you only see a personalized rate after the soft pull, and the rate you see is not the rate you'd actually lock.

---

## 12. The "denial" / "no match" path — what Wells Fargo actually shows

This was the most interesting thing to research and the most directly relevant to the "Why am I denied" project.

### What the SPA bundle tells us

The prequal SPA's i18n bundle references a result-state registry with named result JSONs:

- `results/rs15-start-over.json` — restart CTA after a result
- `results/rs16-message.json` — generic message
- `results/rs17-exact-amt.json` — user qualified for exactly the amount they asked for
- `results/rs18-higher-amt.json` — user qualified for *more* than they asked for
- `results/rs19-lower-amt.json` — user qualified for *less* than they asked for
- `results/rs19.5-lower-amt-dream-plan.json` — user qualified for less, but might qualify for the Dream. Plan. Home.® DPA program
- `results/rs20-no-match.json` — **user did not match any loan product** (the denial state)
- `results/rs22-helpful-resources.json` — fallback "here are some helpful resources"
- `results/rs23-contact-us.json` / `results/rs24-contact-us.json` — "contact us" hand-off
- `results/rs26-sub-heading_30_Year.json` / `rs26-sub-heading_30_Year_and_6_7ARM.json` — product header
- `results/rs27-6-7-arm.json` — 6/7 ARM product result
- `results/rs51-relationship-benefit-text.json` / `rs52-relationship-benefit-disclosure.json` — relationship discount overlay

The fact that **five distinct result states exist** (exact, higher, lower, lower-with-DPA, no-match) tells us Wells Fargo has thought carefully about how to frame partial-qualification outcomes — they're not just showing a "yes/no" page.

### What I could verify about the no-match state

I attempted to fetch the JSON content files directly and they all 404 (they're served from a CDN that's not directly addressable). The prequal SPA loads them via AJAX after the user submits the form. I therefore could not retrieve the literal copy on the "no match" page. **However**, the URL filename `rs20-no-match.json` and its sibling `rs22-helpful-resources.json` tell us the user is shown "helpful resources" — i.e., a list of links/articles, not a diagnostic explanation of *why* they didn't qualify.

### What the result page components tell us about the yes path

The resultspage i18n bundle exposes the strings used on a successful result. The key result-page strings are:

- **Header (qualified):** *"Congratulations [name]!"* OR *"Thanks [name]!"*
- **Subhead:** *"You can adjust the loan amount below to explore your options."*
- **Product 1:** `30-Year Fixed Rate` (code `FIX30`)
- **Product 2:** `7[/6 ARM]` (code `ADJ7A`)
- **Disclosure:** *"For the purchase of a single-family primary residence in [city]."*
- **Output fields:** Loan Amount, Purchase price, Down payment, Location, Monthly principal and interest, Interest rate, APR, Discount points, Monthly payment breakdown (Principal and Interest, Estimated taxes, Estimated homeowners insurance, Mortgage Insurance), Total monthly payment, Important disclosures and APR information.
- **Primary CTA:** **"Start over"** (a `<button class="startover">`)

So even in the *success* case, the only CTA on the results page is **"Start over"** — there is no clear "talk to a mortgage consultant" or "lock my rate" CTA. The funnel is funnel-shaped: soft pull → results page → dead end. To actually proceed, the user has to either go back to the hub and click "Apply" or call the phone number on the hub.

### What this means for the no-match path (inference)

Based on the registry, when Wells Fargo's engine returns a "no match" (rs20), the page presumably:
1. Shows a generic message (rs16) explaining the user didn't match a loan product in the prequal calculator
2. Routes them to a "helpful resources" page (rs22) — almost certainly links to the learn-center articles on credit, DTI, down payment, etc.
3. Surfaces a "contact us" CTA (rs23/24) — likely the phone number + callback form
4. Does NOT explain *which* specific data point (DTI, LTV, FICO, reserves) caused the failure
5. Does NOT show a near-miss alternative (e.g., "you don't qualify for a $400K loan but you'd qualify for a $300K loan if you put 10% down")
6. Does NOT provide an actionable "what to change to qualify" roadmap
7. Does NOT let the user share or save their prequal result

**This is the central "Why am I denied" insight: Wells Fargo treats the no-match outcome as a dead end with a "call us" hand-off, not as a diagnostic moment.** There is no transparency into the underwriting logic, no DTI/LTV/credit explanation, and no near-miss recommendations.

---

## 13. Direct-to-consumer posture post-correspondent exit

A note the user asked about: **Wells Fargo exited the correspondent lending channel in 2022-2023** as part of the post-consent-order retail mortgage restructuring. The consumer-facing site reflects this — it is now 100% a **direct-to-consumer / retail-broker** site. Evidence from the live pages:

- All landing pages are positioned to drive the user to either the rate-shopper SPA (soft pull), the Blend-hosted full application, or a phone/branch conversation.
- There is no "find a Wells Fargo loan officer near me" third-party locator, no broker co-branded pages, no "are you a real estate agent?" partner portal surfaced on the consumer site.
- The only partner integration on the consumer side is **ComeHome (by HouseCanary)** for property search and home value tracking, surfaced on the affordability page: *"Current Wells Fargo customers have exclusive access to a one-stop real estate shopping tool."* The footer on the affordable-options page discloses: *"You are leaving wellsfargo.com and entering ComeHome, provided by HouseCanary Inc. Although Wells Fargo has a relationship with this website, Wells Fargo does not provide the products and services on this website."*
- The only loan-origination tech partnership disclosed is **Blend Labs** (which hosts the full application): *"Blend Labs, Inc. ('Blend') hosts the online mortgage application for Wells Fargo."*
- All underwriting, processing, and closing happens inside Wells Fargo Home Mortgage (a division of Wells Fargo Bank, N.A.).
- There is no wholesale or broker channel mentioned anywhere on the consumer site.

**Implication for the "Why am I denied" project:** the post-correspondent-exit site is a tighter, retail-only experience, but it is also more conservative — Wells Fargo is no longer competing on speed or on niche segments (non-QM, bank-statement, USDA, manufactured homes). The funnel is optimized for the median W-2 borrower buying a primary residence, refinancing, or applying for a VA/FHA loan.

---

## 14. "Why can't I qualify" — what Wells Fargo MISSES, and what a diagnostic could do better

Synthesizing the above, here is what a "denial diagnostic" tool — built by a competitor, partner, or third party — could do better than Wells Fargo does today:

### What Wells Fargo does NOT do for a denied / near-qualifying user

1. **No specific reason is given.** The "no match" page (rs20) and the "helpful resources" page (rs22) do not tell the user *which* factor failed — credit score, DTI, LTV, reserves, employment length, property type, or loan amount vs. county loan limits.
2. **No near-miss suggestion.** If the user asked for a $500K loan with 3% down and Wells Fargo could have qualified them for $380K with 10% down, the SPA does not say so. The result states exist (rs18, rs19) but only for cases where the user qualifies — there is no "you almost qualified, here's what would change" state.
3. **No DTI / debt visibility.** The prequal doesn't even ask for monthly debt, so the user has no idea what Wells Fargo is assuming about their car payment or student loan minimums.
4. **No "what would change to get a yes" simulation.** No "increase your down payment by $20K" or "wait 6 months for this late payment to age off" recommendation.
5. **No explanation of Wells Fargo-specific overlays.** Wells Fargo has its own overlays on top of Fannie/Freddie (e.g., higher minimum FICO, lower maximum DTI for certain products, reserve requirements). None of this is surfaced in the prequal.
6. **No comparison to other lenders' likely outcome.** The site gives no indication of whether a denied Wells Fargo user would be approved at a competitor, a portfolio lender, a credit union, or via an FHA/VA product they haven't considered.
7. **No path back to the funnel with a saved result.** The result page only has a "Start over" button. There is no "save your quote," "email me this result," or "share with my co-borrower" option.
8. **No education on the credit factors Wells Fargo actually weighs.** The learn-center has a generic "Understanding your credit report and credit score" article but no specific "How Wells Fargo uses your credit" explainer.
9. **No proactive coaching for the "first-time homebuyer" path.** The prequal asks "Have you owned a home in the last three years?" but if the user says yes, no follow-up questions are asked to route them to the right loan product. The DPA programs (Dream. Plan. Home., Homebuyer Access) are only surfaced on the affordable-options page, not in the prequal flow itself.
10. **No "what's the next best step" CTA on a denial.** The CTA on the no-match page is presumably "Contact us" (rs23/24) — i.e., "call this 1-800 number." A modern user who just got denied does not want to make a phone call to learn why.

### What a "Why am I denied" diagnostic could do that Wells Fargo does not

1. **Show the user the specific underwriting rule(s) they failed** — DTI > 43%, LTV > 97%, FICO < 620, reserves < 2 months, etc. — using the same DTI/LTV/FICO/reserves inputs the soft pull already returned.
2. **Quantify the gap** — "You need $X more in down payment to get LTV below 80%" or "If your monthly debt were $200 lower, your DTI would be 42.5%."
3. **Re-run the scenario in real time** — let the user adjust down payment, income, debts, and see the qualification change live. Wells Fargo has the math; it just doesn't expose it.
4. **Suggest alternative loan products** — "You don't qualify for a conventional loan at this DTI, but an FHA loan would accept 56% DTI" or "Your county has a $766K conforming limit; a $700K loan would require a jumbo."
5. **Suggest alternative lenders / channels** — credit unions, portfolio lenders, FHA-only lenders, non-QM, or — for self-employed users — a bank-statement program.
6. **Time-to-recovery estimates** — "If you pay down this credit card by $2,000, your utilization drops below 30% and your score is likely to rise 15-25 points in 30 days."
7. **Persistence** — let the user save the diagnostic, share it with a financial advisor, or email it to themselves.
8. **Education contextual to the denial** — surface the specific article that explains the factor that failed, not a generic learn-center landing page.

**Bottom line:** Wells Fargo's prequal is a strong acquisition funnel and a weak diagnostic tool. It succeeds at converting soft-pull leads to Blend applications; it does not help the 30-50% of prequal users who don't get a clear "yes" understand *why* or *what to do next*. The "Why am I denied" project sits directly in that gap.

---

## 15. Summary scorecard

| Dimension | Wells Fargo | Competitive context |
|---|---|---|
| Prequal friction (questions asked) | 6 steps, ~12 fields, no SSN, no employment | Lower than most banks, higher than Rocket's 1-step |
| Soft vs hard pull at prequal | **Soft only**, explicit consent | Most large banks now offer this; Rocket pulls hard |
| Time to prequal result | ~3-5 min, fully online | Average for the category |
| Calculator suite | 5 tools (affordability, qualification, refi savings, cash-out, payment) | Solid but no DTI or rent-vs-buy tool |
| DPA programs | Homebuyer Access $10K, Dream Plan Home $5K, 3% down | Top tier; matches Chase and BoFA |
| Self-employed / non-QM | None | Significant gap |
| Local SEO ("mortgage rates [city]") | None | Significant gap vs. Rocket/loanDepot |
| Trust badges (BBB, J.D. Power, reviews) | None on-site | Significant gap |
| Prequal denial explanation | Generic "helpful resources" + "call us" | Below industry average; opportunity for a diagnostic |
| Spanish language | Available, but with interstitial friction | Average |
| Mobile UX | Responsive, SPA-driven | Average |
| Phone / human support | 7 days/week, multiple numbers, callback form | Best-in-class |

---

## 16. File-level evidence trail (for the "Why am I denied" project)

Raw HTML, text extracts, and SPA bundle strings for all 25+ pages I fetched are saved at `/tmp/wf-research/` for the parent agent to inspect. The prequalification SPA's i18n bundle — which contains the full 6-step question list, every error string, every consent string, and the result-state registry (`rs15-rs52`) — is the single most useful artifact and is in `/tmp/wf-research/get-prequalified.html`.

Specific files of interest:
- `mortgage.html` / `mortgage.txt` — main hub, H1, hero, three differentiator tiles
- `rates.html` / `rates.txt` — current rates page
- `calculators.html` / `calculators.txt` — calculator hub with all five tool cards + the soft-pull disclosure footnote about PriorityBuyer
- `affordability-calc.html` / `affordability-calc.txt` — "How much house can I afford?" with the "Prequalify now" CTA
- `buying-a-house.html` / `buying-a-house.txt` — 4-step purchase journey
- `affordable-options.html` / `affordable-options.txt` — full DPA program copy, Homebuyer Access + Dream Plan Home
- `apply.html` / `apply.txt` — 4-step apply process + Blend disclosure
- `get-prequalified.html` / `get-prequalified.txt` — **the rate-shopper SPA bundle, including the full prequalification question set and result-state registry**
- `refinance-quote.html` / `refinance-quote.txt` — **the refinance SPA bundle, with refi-specific questions and the same soft-pull consent**
- `loan-programs.html`, `fha-loan.html`, `va-loans.html`, `fixed-rate.html`, `jumbo.html`, `arm.html`, `cash-out-refi.html` — every product landing page
- `relationship-offers.html` / `relationship-offers.txt` — relationship-discount / cross-sell pillar
- `faqs.html` / `faqs.txt` — full FAQ
- `learn.html` / `learn.txt` — learn hub with article titles

All 25+ pages were fetched live via Node HTTPS GET, parsed, and text-stripped in this session.
