# 11.5 TOMO MORTGAGE — Deep Dive (tomo.com)

> **Scope:** Direct review of tomo.com in production, including the full prequalification/preapproval client bundle (the only US mortgage lender that has given us clean visibility into the actual client-side React/Turbopack step map, every form label, and the exact denial screens). All copy is quoted from public pages or from the live JavaScript bundle for `tomo.com/mortgage/app/preapproval` as of the snapshot date.

> **Why Tomo matters to the diagnostic:** Tomo is the most "denial-aware" of the top 10 in *one* narrow way — they actually have dedicated "Sorry, we're unable to complete a loan at this time" screens for the two failure cases the engine can detect (DTI and assets). But — and this is the diagnostic's opportunity — those screens say "**Go back and add more income / more sources**" and offer no reason, no guideline citation, no scenario simulation, no alternative program, no timeline, and no consumer education. They are **recovery prompts, not diagnoses**. And there is **no denial screen at all for credit-score failures or low-credit qualification** — that falls into a generic "credit check problem" error that doesn't even include a reason the user can act on.

---

## 11.5.1 Website URLs

| Surface | URL | Notes |
|---|---|---|
| Marketing home | `https://tomo.com/` | Title: *"Tomo Mortgage: Home buying made happy, mortgages made simple."* |
| Preapproval / Prequalification app | **`https://tomo.com/mortgage/app/preapproval`** | Title: *"Tomo Mortgage: Get preapproved in minutes!"* — this is the real funnel. |
| About / company | `https://tomo.com/mortgage/about-us` | Title: *"New homes bring joy. We think buying them should too."* |
| Affordability calculator | `https://tomo.com/mortgage/affordability` | Title: *"Tomo Mortgage Home Affordability Calculator"* — the **standalone, anonymous** calculator. |
| Benefits & features | `https://tomo.com/mortgage/benefits-and-features` | The "why Tomo" page — Lower rates, no fees, no rate-keeping, etc. |
| FAQ | `https://tomo.com/mortgage/faq` | Heavy on the credit-check / SSN disclosure questions. |
| TrueRate rate explorer (national) | `https://tomo.com/mortgage/interest-rates-today` | Title: *"Today's Best Mortgage Rates: Real Data, 100% Transparency with TrueRate"* |
| TrueRate state pages (e.g.) | `https://tomo.com/mortgage/interest-rates-today/ca` | Title: *"CA's TrueRate: Low Mortgage Interest Rates"* |
| Today's rates / national | `https://tomo.com/mortgage/rates` | "Today's rates" hub. |
| City-level rate pages (e.g.) | `https://tomo.com/mortgage/rates/atlanta-ga` | Title: *"Today's mortgage rates for Atlanta, GA | Tomo Mortgage"* |
| FHA / VA / Jumbo / Conventional / 15-yr / Refinance product pages | `https://tomo.com/mortgage/products/fha`, `…/va`, `…/jumbo`, `…/conventional`, `…/15-year`, `…/refinance` | One page per loan product, each with a custom in-page rate quote. |
| Press | `https://tomo.com/mortgage/press` | 5 named loan advisors with first-person Trustpilot / Bankrate / Zillow / Google reviews. |
| Licenses & disclosures | `https://tomo.com/mortgage/licenses-and-disclosures` | NMLS #2059741; "Tomo Mortgage, LLC, 1156 6th Ave, 9th Fl, New York, NY 10036". |

**Critical:** Tomo is a single Next.js / Turbopack app. The preapproval flow is **not** a separate marketing landing page — it is the *application itself*. The OG/canonical URL is `https://tomo.com/mortgage/app/preapproval`; meta title is literally *"Tomo Mortgage: Get preapproved in minutes!"* (no mention of "prequalification" anywhere in the title). Tomo uses the term "preapproval" even for what is functionally a prequalification. The app shell is server-rendered; the funnel runs entirely client-side.

---

## 11.5.2 Target audience

**Primary:** First-time homebuyers, W-2 salaried, urban/suburban, credit score 620–760+, in the 41 states where Tomo is licensed. Tomo's copy is consistent: *"Tomo Mortgage, the first complete home buying service,"* *"Low rates, no gotchas,"* *"the world's first complete home buying service."* The /about-us page says Tomo was *"co-founded by former Zillow exec, Greg Schwartz"* and was *"backed by Progressive Insurance®, Metaprop, Ribbit Capital, DST Global, and NFX, among others."* The lead investors are real-estate and fintech VCs — not subprime/Non-QM shops.

**On first-time buyers specifically:** Tomo leans **hard** into first-time buyers. The FHA product page meta description is *"Own a home with 3.5% down and a 580 credit score. FHA loans from Tomo Mortgage close in 12 days with $0 lender fees. **First-time buyers welcome.**"* (emphasis added). The affordability calculator CTA reads *"Got dreams? Explore them here."* The blog is full of "Buying Your First Home" content (e.g., *"As first-time homebuyers with limited knowledge of the mortgage process, we discovered Tomo and couldn't be happier with our experience. —Selva in New Jersey"*). The `/affordability` page explicitly invites the *"I have an accepted offer on a new home"* path and the *"I am making offers or have a signed offer letter"* state.

**On denied / sub-prime / self-employed borrowers:** Tomo's own FAQ documents a **580 FICO minimum for purchase**, an **SSN requirement for ITIN borrowers** (*"If you are applying without an SSN using an individual taxpayer identification number (ITIN), please call our team at (737) 510-2523 to discuss special loan options"* — i.e., self-service is not available), and **620+ for refinance**. The asset question explicitly excludes sub-580 borrowers from the consumer flow.

**Self-employed borrowers:** Tomo has a **dedicated self-employed income tile** in the income wizard — see §11.5.5 below. The income wizard presents exactly three income categories: *"Employed (W-2)"*, *"Self-employed"*, *"Retirement"*. So they **do** support self-employed, but the rest of the flow still asks for W-2-style questions (start date, employer name, position/title) until you toggle "Self-employed" on a per-employer basis. There is **no separate "bank statement loan" or non-QM flow** visible in the consumer funnel — the self-employed path still feeds into the same income verification engine. There is no specialist "1099 only" or "P&L" or "12-month bank statement" sub-flow. Critically, the FAQ still tells self-employed ITIN users to *call* the team rather than letting them complete the flow.

**Denied / low-credit / high-DTI borrowers:** This is the **gap the diagnostic owns**. See §11.5.12 for the specific screens and what they say.

---

## 11.5.3 Value proposition (headline promise)

| Surface | Headline |
|---|---|
| Home (`/`) | *"Home buying made happy, mortgages made simple."* Sub-headline: *"Low Rates, No Gotchas."*; sub-sub: *"Tomo Mortgage makes buying a home easy, honest, and way less expensive."* |
| About | *"New homes bring joy. We think buying them should too."* |
| Benefits & features | *"What people love about Tomo"* — *"Faster closings, fewer headaches, and prices that terrify every lender in America."* |
| FHA | *"FHA Loans: Own a home with just 3.5% down"* — *"FHA loans make home ownership accessible with lower credit requirements, flexible income guidelines, and down payments as low as 3.5%."* |
| VA | *"VA loans: you served, now get the home you've earned."* |
| 15-year | *"15-Year Mortgage: Pay off your home faster, save on interest."* |
| Jumbo | *"Jumbo Loans: Finance a high-value home with Tomo Mortgage"* — up to $3M. |
| Conventional | *"Conventional loans: low rates & fast closings."* |
| Affordability | *"Got dreams? Explore them here."* |
| TrueRate | *"Today's Best Mortgage Rates: Real Data, 100% Transparency with TrueRate."* |
| Press tagline | *"low rates, no gotchas"* |
| Preapproval app | *"Tomo Mortgage: Get preapproved in minutes!"* |

**The single Tomo promise, summarized:** **low rates, no lender fees, no games, faster closings.** Three numerical proof points the marketing repeats on every page:

- **Rates "about 0.5% less than the industry. A full 1% less than some of the big guys."**
- **"$0 lender fees — no origination, processing, or underwriting fees. This saves you an average of $2,000 compared to traditional lenders."**
- **"98% on-time closing vs. 40% industry average."** *"Tomo Mortgage can close a home loan in as little as 12 to 21 days, significantly outperforming the industry average of 45 days."* (FHA goes to 25 days; conventional 12.)
- **"30-second account verification"** via Finicity (bank account linking replaces the W-2 / paystub upload dance).

The benefits page goes further on the pricing model: *"One lender could charge the same person for the same loan $20,000 more than another. It's bonkers! So we stopped playing that game. We write code to be better and faster and cheaper."* The **advisor compensation** is also marketed as a differentiator: *"Other lenders pay their mortgage advisors 1% (or more!) of your loan value as commission. Not us—our team is paid based on their service to you, nothing else."*

**Time-to-preapproval claim:** *"Get preapproved in minutes!"* on the conventional, 15-yr, and jumbo product pages. **"Get pre-approved in hours"** on the FHA, VA, and refinance pages. **Tomo does NOT make a "7-minute" claim on the public site.** (See §11.5.6 for the actual flow length.)

---

## 11.5.4 Lead capture mechanism — soft pull vs hard pull, and the SSN ask

**This is the most important UX detail in the entire Tomo funnel.** Tomo actually has **two distinct credit-pull flows** inside the same `/app/preapproval` URL, and the consumer-facing copy in the bundle makes the difference plain:

### Soft-pull prequalification (FCRA "soft" consent)

The first time Tomo touches the credit bureaus, they ask the user to consent to a **soft credit check** — but only "for prequalification." The exact checkbox label, copied from the React bundle:

> *"I grant permission for Tomo Mortgage to run my personal credit report **(a soft credit check) from Equifax, based on the Fair Credit Reporting Act. We do this solely for mortgage prequalification for credit.**"*

The SSN step's helper text reads:

> *"By continuing, I authorize Tomo Mortgage to conduct a **soft credit check** for preapproval."*
>
> *"Your SSN and date of birth allow us to get a clear snapshot of your finances. We do a soft credit check with zero impact on your credit score."*

A second inline copy element on the same screen literally states: **"No hard credit check."**

So: **Tomo's prequalification IS a true soft pull.** It can be done with just SSN + DOB, and there is a clearly labeled "soft" path that the user opts into. This is the most consumer-friendly credit-pull flow in the top 10 — the diagnostic should explicitly call this out as a benchmark.

### Hard-pull preapproval (FCRA "hard" consent)

Later in the flow (the borrower-ssn-form, the declarations step, and the credit-consent step), Tomo asks for the **hard credit check** consent, with a separate checkbox:

> *"I grant permission for Tomo Mortgage to run my personal credit report **(a hard credit check) from Equifax, based on the Fair Credit Reporting Act.**"*

The accompanying UI includes a "Heads up!" callout: *"If you need to unfreeze your credit, please keep it unfrozen until your loan closes. We will check for any changes to your credit history before your close date and want to avoid delays."*

The FAQ makes the timing explicit: *"A hard credit check is a critical part of getting a mortgage. It helps us confirm your eligibility and without it we can't determine the type of mortgage product and interest rate you'll qualify for. The impact of a mortgage hard credit check is low (typically 3-8 points), is temporary (typically 12 months), and is usually the same no matter how many other mortgage hard credit checks you get in a 30 day period."*

### Lead capture fields (in order, before the soft pull)

The very first screen of the preapproval flow is the "Get your custom rate quote" form, titled **"New home information"** in the React tree. Fields:

1. **City, county or ZIP** (`property_city`, `property_state` — validated "required").
2. **Property type** — *"Single-family home," "Townhouse," "Condo," "Multi-family (2 unit)," "Multi-family (3 or 4 unit)."*
3. **Intended use** — *"Primary residence," "Second / vacation home," "Investment property."*
4. **"I have an accepted offer on a new home."** (checkbox that materially changes the rest of the flow — it changes the next step from "borrower goal" to "purchase contract upload")

The submit button reads **"Get started"** (sometimes "Get pre-approved").

### The anonymous / Ephemeral / no-SSN path

Tomo's bundle references an **`anonymous_borrower`** state. When the user has not yet linked an identity, the UI greets them with *"Your Tomo Mortgage quote"* and offers the rate-quote experience without creating an account. The "no-SSN" path runs through the rate explorer, where the user can manipulate loan amount, credit score band, location, and down payment to see live rate options and a payment estimate without any identity verification. **This is the closest thing in the Tomo experience to a true no-SSN pre-screen, but it is a rate tool, not a qualification diagnostic.**

### MFA / phone verification

The preapproval flow includes a **mandatory SMS code verification** step. The text field is *"Check your texts"* and the testid is `mfa-headline`. The bundle code includes *"Your code has expired. Select Resend it and try again."* and *"Your phone number needs 10 digits. Double check the number."* This means Tomo has the user's phone before the soft pull happens.

---

## 11.5.5 Exact questions asked in the prequalification flow

**Below is the actual list of step IDs and form labels, captured from the React/Turbopack bundle of `tomo.com/mortgage/app/preapproval`.** The order is the order Tomo actually renders the steps (Step order is in `STEPS.*` constants, and we walked the React tree to confirm the rendered sequence).

### Step order (exhaustive)

The `STEPS.*` enum and the order they fire in the flow:

```
1.  RATE QUOTE / "Get your custom rate quote"            — location, property type, intended use, accepted-offer toggle
2.  BORROWER_GOAL / "How much would you like to qualify for?"   — "My highest home price" vs "A target amount"
3.  TARGET_HOME_PRICE / "What's your target home price and down payment?"   — Home price + Down payment + currency field
4.  BORROWER_INFORMATION / "Tell us about yourself" / "Create an account"   — primary borrower form
5.  MFA / "Check your texts"                                 — SMS verification (phone required here)
6.  SOFT_CREDIT_CONSENT_FORM                                 — FCRA soft-pull consent (Equifax)
7.  SSN / "Your Social Security number"                       — SSN entry, form id "borrower-ssn-form"
8.  RESIDENTIAL_HISTORY / "Previous Residences"              — 2+ years address history
9.  MARITAL_STATUS / "Marital Status"                         — single/married/separated/etc
10. EMPLOYMENT_HISTORY / "Employment History"                 — employer name, position, dates, self-employed toggle
11. INCOME_WIZARD_PRIMARY_BORROWER / "Select an income type to start"   — Employed (W-2) / Self-employed / Retirement
12. VOI / "Verification of Income"                            — bank/employer/finicity data + uploads
13. VOA / "Verification of Assets"                            — bank account linking via Finicity + manual assets
14. DECLARATIONS / "New Home Declarations"                    — bankruptcy, foreclosure, alimony, etc
15. PROPERTY_INFORMATION / "Property information"             — subject property detail
16. REO / "Property you own"                                  — for users who already own
17. SUMMARY / "Pre-approved" / "Conditionally approved" / "Application Advisor"
18. APPLICATION_HUB / "Path to closing"                       — post-decision hub
19. (Hard credit check) HARD_CREDIT_CONSENT                   — FCRA hard-pull consent
20. FINAL / SUBMIT
```

The full step enum also includes: `HUB_V`, `INCOME_WIZARD_CO_BORROWER`, `NEW_HOME_DECLARATIONS`, `SPLIT_PIP_CREDIT`, `SWITCHER_POS`, `VERIFIED_REO`. These are sub-routes and conditional paths.

### Form fields (verbatim from `label:` props in the bundle)

**Borrower identity (Step 4)**
- First name, Middle name, Last name, Suffix (e.g., "Jr., Sr., II, III")
- Date of birth
- Email address, Mobile number
- "I have a co-borrower" toggle
- "I have a pre-approval letter" toggle
- Citizenship: *"U.S. citizen," "Permanent resident," "Non-permanent resident," "Non resident"*
- "Either my co-borrower or I are in the military, a veteran, or a surviving spouse" toggle

**SSN (Step 7)**
- Social Security number (full 9 digits)
- Consent language: *"I grant permission for Tomo Mortgage to run my personal credit report (a soft credit check) from Equifax, based on the Fair Credit Reporting Act. We do this solely for mortgage prequalification for credit."*

**Address history (Step 8)**
- "I've lived at this address less than 2 years." (yes/no)
- Previous address
- Move-in MM/YYYY, Move-out MM/YYYY
- City, county, or ZIP

**Marital status (Step 9)**
- Marital status: "Single," "Married," "Separated," "Unmarried"
- "Co-borrower is married to the borrower."
- "I anticipate changes to my marital status" / "Do you anticipate any changes to your marital status (e.g. wedding, divorce)?"
- "I have a co-borrower." (also here)

**Employment history (Step 10) — the W-2 / self-employed question lives here**
- Employer name
- Position/Title
- Employer address
- Start date MM/DD/YYYY, End date MM/DD/YYYY
- Are you approved to work remotely?
- Will you be working at the above address or another office? — "I will be working at another office" / "My commute is less than 90 minutes" / "My commute is more than 90 minutes" / "No, I will be working from an office"
- **"Employed by family or a party to this real estate transaction"** (yes/no)
- **"Self-employed or business owner"** (yes/no — **this is the explicit self-employed toggle per employer**)
- "Not currently employed"
- HR representative email (for employment verification) (optional)
- HR representative phone (optional)

**Income wizard (Step 11) — only 3 income categories**
- **"Employed (W-2)"** — *"Upload a pdf or snap a picture of your W-2s for [borrower] and [co-borrower] and we'll grab the details. Don't have a W-2?"* → "Other accepted documents" tooltip
- **"Self-employed"** — separate flow from W-2 (per the income-tiles testid)
- **"Retirement"** — separate flow
- "Any other current income to add?" / "Anything else you can add?" / "No more income to add?"
- Income source line item — type, monthly amount, documentation
- "If you have military income, upload an LES form."

**Income sources (the actual income types, inferred from the tile structure and finance-engine source code patterns)**
- Base salary, hourly, commission, tips, bonus, overtime
- Self-employment income (1099 / K-1 / business distributions)
- Retirement (Social Security, pension, 401k distribution)
- Rental income ("If you have rental income, upload an LES form" is the military version, but rental income is a separate income-source line item — see VERIFIED_REO step)
- Alimony / child support ("pays_alimony" / "monthly_alimony_payment" / "pays_child_support" / "monthly_child_support_payment" — pulled from the DECLARATIONS step in the bundle)
- Military income (LES upload)

**Asset / VOA (Step 13) — "Verification of Assets"**
- "Connect" bank accounts (Finicity — 10,000+ institutions per the marketing copy: *"Securely sync your bank accounts +10,000 more institutions"* on the home page)
- Checking / Savings buttons (`checking-savings-button` testid)
- Stocks / bonds (testid: `stocks-button`)
- Gift funds ("gift-button" testid, "add-gifts-modal" testid)
  - Total gift funds
  - Gift amount
  - Gift source: first name, last name, email, phone number, relationship (Parent, Grandparent, Other relative(s), Other)
  - State filed in
- "More information about accounts" (optional)
- "More information about bank or credit card statements" (optional)
- Crypto — the FAQ explicitly says: *"Stocks and bonds … Cryptocurrency (must be converted to USD before closing)"*

**Declarations (Step 14)**
- "I have completed homeownership education (optional)"
- "I have completed housing counseling (optional)" — Online counseling, Phone counseling, In-person counseling, "Counseling format"
- "I have veterans benefits"
- pays_alimony / monthly_alimony_payment
- pays_child_support / monthly_child_support_payment
- has_bankruptcy — "Chapter 7," "Chapter 11," "Chapter 12," "Chapter 13"
- has_delinquent_federal_debt
- "I am no longer receiving this gift"
- "Do you currently pay rent?" + Monthly rent payment (if yes)
- "I have conveyed title to a property in lieu of foreclosure in the past 7 years." (testid `title:"I have conveyed title to a property in lieu of foreclosure in the past 7 years."`)

**Property information (Step 15)**
- City, county, or ZIP (auto-populated from rate quote step)
- "I have an accepted offer on a new home" toggle → triggers PURCHASE_CONTRACT_FORM
- Upload signed purchase contract (PDF preferred)
- Estimated home value
- Estimated sale price (if existing property)
- Move-in MM/YYYY
- Property type
- Intended use
- Property use (testid: `property-use-mobile` / `desktop-property-use`)
- Monthly HOA payment (if applicable: "I pay an HOA fee.")
- Annual property taxes, Annual homeowners insurance
- "I pay taxes and insurance separately from my mortgage payment."

**Real estate owned (Step 16)**
- "Do you own any real estate?" / "Do you own any other real estate?"
- If yes: identified-property-row or self-reported-property-row
- Property address, value, mortgage balance, monthly payment
- "How did you hold title to the property?" — *"By myself," "Jointly with my spouse," "Jointly with another person"*
- "What type of property did you own?"
- "Future plans for this property" — *"Sell before my purchase," "Sell after my purchase," "Continue to receive rent," "Use as my primary residence," "Use as a second home," "Use as an investment property"*
- REO rental income (upload rental agreement or 2 most recent years tax returns)

**Property use / occupancy (cross-cutting)**
- *"Primary residence," "Second / vacation home," "Investment property"*
- For "Investment": rental income, REO net total, REO gross total, REO liability total

**Cash-to-close / final step (Step 17+)**
- "When will I know my final cash to close?"
- "Your estimated proceeds from sale"
- "Your estimated profit is based on 10% of the selling price, minus your remaining mortgage."
- "Your estimated selling price less 10% to cover selling costs"

**Demographic (Reg B / HMDA) — clearly optional**
- Gender, Ethnicity, Race (Asian Indian, Chinese, Filipino, Japanese, Korean, Vietnamese, Other Asian, Mexican, Puerto Rican, Cuban, Other, etc.), "I do not wish to respond"
- Preferred language (English, Spanish, Chinese, Tagalog, Vietnamese, Other)
- "Are you a veteran?" (testid `military-service`)

### Net effect of the data Tomo collects (vs. the diagnostic)

Tomo's data is **~80% identical to every other top-10 lender** (income, employment, debt, assets, property, declarations). The **two outliers** are:

1. **True soft-pull path with FCRA-compliant copy.** The bundle text is the cleanest disclosure language we saw. The diagnostic can borrow this exact phrasing.
2. **Income wizard with three explicit tiles (W-2, Self-employed, Retirement).** This is a more honest self-employed handling than Rocket / Better / Chase (which bury self-employed in a dropdown), but it is **still W-2-centric** — there is no separate "1099" or "Bank Statement" or "P&L only" or "Non-QM" sub-flow. The self-employed path still requires the user to upload W-2s / tax returns / 1099s in the income-wizard step.

**Missing entirely from Tomo (which the diagnostic has):**
- **No DTI field.** The DTI is *computed* (and used to drive the DTIEligibilityRed denial screen), but it is never shown to the user as a live number. The diagnostic should show DTI live.
- **No "approval likelihood" or "next-best program" simulator.** Sliders for debt-payoff / score-improvement do not exist.
- **No scenario branching after a soft decline.** Both DTIEligibilityRed and AssetsEligibilityRed route the user back to a previous step to add *more* of the same thing. There is no path that says "you don't qualify for conventional — try FHA at 580 FICO" or "your DTI is borderline; here's what the math says."
- **No timeline to qualification.** "How long until I might qualify?" is not answered anywhere.

---

## 11.5.6 User experience — steps, time, mobile

**Entry page (the `/affordability` calculator, also reachable from home page):** This is the **anonymous, no-SSN, no-account entry point**. The user sees:

> *"Got dreams? Explore them here. Check out our affordability calculator to see how much home you can afford."*

Inputs: **State** ("What can I afford in *state* with…"), **Annual household income**, **Down payment**, **Monthly debt payments**, **Credit score** (slider with 12 buckets: 780+ / 760-779 / 740-759 / 720-739 / 700-719 / 680-699 / 660-679 / 640-659 / 620-639 / 600-619 / 580-599 / 579 and lower).

Output: **"Very affordable"** and **"Upper limit"** home price range, with **Monthly payment** broken into Principal + interest, Property taxes, Homeowners insurance, Mortgage insurance, and **Est. closing costs** (displayed as *"Down payment / Est. 3% closing costs / No lender fees / Estimated Rate/APR as of [date]"*).

There is a **"Download report"** CTA that saves a PDF — and a **"Get pre-approved"** CTA that takes the user into the full flow.

**"Get your custom rate quote" widget (on the home page, every product page, and the rates page):** This is the most-deployed widget on the site. A user picks City/county/ZIP + Property type + Intended use, then hits "Get started" and is taken into the preapproval flow. The widget shows a personalized Rate and APR in real time. This is the **soft pull** entry — no SSN, no DOB, no email until the user clicks "Get started."

**Time-to-result:** Tomo claims "in minutes" for conventional/15-yr/jumbo and "in hours" for FHA/VA/refi. **There is no "7-minute" claim anywhere on the current public site.** The bundle code includes a 30-second Finicity claim and a 12-day close claim, but no 7-minute prequal claim. (The "7-minute prequal" framing is sometimes repeated in industry press about Tomo, but the marketing site itself uses the generic "in minutes.")

**Mobile experience:** First-class. The home page serves a **sticky bottom mobile CTA bar** (`MobileCTABar-module__kuD4wG__container` class) with a "Get started" button that links to `/app/preapproval`. The preapproval flow itself has separate mobile / desktop button variants (`mobile-cta-button`, `desktop-cta-button`, `mobile-property-cta` testids). The home page has a `hidden md:block` (desktop-only) section and a `MobileCTABar` for mobile, indicating that the marketing team thinks hard about which CTAs to surface where. There is **no native mobile app** (unlike Rocket, which has a top-rated mobile app). Tomo is web-only.

**Friction / trust points:**
- **Asking for SSN at Step 7, after a 5-step warmup.** Better than Rocket (which asks at Step 1) but still required before any meaningful eligibility verdict.
- **Asking for a property ZIP before any rate quote.** Standard.
- **SMS code (MFA) is required before the soft pull.** This is good security but a friction point — the user's phone must be on hand.
- **Bank account linking via Finicity is *offered* but not required.** *"Securely sync your bank accounts +10,000 more institutions. Sync your accounts."*
- **Loan advisor chat is omnipresent.** Phone number (737) 510-2523, email hello@tomomortgage.com, and SMS at the same number are surfaced in the global header on every page.

---

## 11.5.7 Calculator functionality

| Calculator | URL | Inputs | Outputs |
|---|---|---|---|
| **Affordability** | `/mortgage/affordability` | State, Annual household income, Down payment, Monthly debt payments, Credit score (12 buckets) | "Very affordable" / "Upper limit" home price, monthly P&I, taxes, insurance, mortgage insurance, est. 3% closing costs, est. Rate/APR as of [date] |
| **TrueRate (national)** | `/mortgage/interest-rates-today` | Location, Purchase price, Down payment, %, Credit score (slider) | Histogram of 72 lenders bucketed into "low rate range" (4 lenders), "average" (64), "high" (4) — with named lenders, lender fees, customer reviews per bucket. Range updates dynamically as inputs change. |
| **TrueRate (state)** | `/mortgage/interest-rates-today/<state>` | Same as national | Same. State-specific. |
| **City rate pages** | `/mortgage/rates/<city>-<state>` | Location, Purchase price, Down payment, Loan term (15-yr / 30-yr), Credit score, slider for buying points | Tomo rate, Tomo APR, lender fees $0, total closing costs, monthly payment, **break-even calculation** ("It will take you 4 years to recoup the cost of buying down this rate. Only do this if you plan to stay in your home for more than 4 years and don't refinance."), **savings comparison** ("A customer in Wisconsin saved $3,103 by choosing Tomo Mortgage over Better Mortgage") |
| **In-page quote (every product page)** | `/mortgage/products/fha`, `…/va`, `…/jumbo`, `…/conventional`, `…/15-year`, `…/refinance` | City/county/ZIP, property type, intended use, "I have an accepted offer on a new home" | Live rate, live APR, "Buy a lower rate" slider, monthly payment, lender fees $0, due at closing |
| **FHA / VA city pages** | `/mortgage/rates/fha-loans/<city>-<state>`, `…/va-loans/<city>-<state>` | Same as city rate pages | Same, with FHA / VA product specific rates |

**What the calculator outputs that no competitor does:**
1. **"Very affordable" vs "Upper limit" range** on the affordability calculator — the only calculator in the top 10 that gives a *range* (not a single number) without requiring SSN.
2. **"Buy a lower rate" slider** with live break-even math: *"Buying a lower rate will reduce your monthly payment by $98.91. Break even: It will take you 4 years to recoup the cost of buying down this rate. Only do this if you plan to stay in your home for more than 4 years and don't refinance."*
3. **Side-by-side savings comparison** to a named competitor (e.g., Better Mortgage): *"A customer in Wisconsin saved $3,103 by choosing Tomo Mortgage over Better Mortgage."* with line-item breakdown (Lender fees, Cost to buy a lower rate, Required services, Title and settlement, Lender credits, Total).
4. **Estimated Rate/APR stamped "as of [date]"** — every rate output is dated, which is a small but distinctive trust signal.

**What the calculator does NOT have:**
- No standalone DTI calculator (DTI is computed, not surfaced).
- No "what-if I add a co-borrower" simulator.
- No approval-likelihood scoring.
- No "what loan amount do I qualify for at this DTI" simulator.
- No scenario sliders for debt-payoff or credit-score improvement.

---

## 11.5.8 Calls to action

Tomo runs a very tight CTA vocabulary across the site — just five canonical CTAs:

| CTA | Where it appears | Destination |
|---|---|---|
| **"Get started"** | Home page hero, every product page, every TrueRate page, every blog post sidebar, mobile sticky bar | `https://tomo.com/mortgage/app/preapproval` |
| **"Get pre-approved"** | Affordability calculator, site footer (every page), blog | `https://tomo.com/mortgage/app/preapproval` |
| **"Get your TrueRate"** | Home page (the data-driven rate exploration tool) | `https://tomo.com/mortgage/interest-rates-today` |
| **"See what I can afford"** | Home page | `https://tomo.com/mortgage/affordability` |
| **"Talk with a mortgage expert / Contact us"** | Home page (bottom), /about, /careers | tel:+1-737-510-2523, sms:+1-737-510-2523, mailto:hello@tomomortgage.com |

The home page and product pages also include **mobile sticky CTAs** that are different from desktop: the mobile sticky is "Get started" only; desktop gets a richer inline CTA with the "Low rates. No lender fees." tagline.

**Secondary CTAs** (within the flow):
- "Connect" (Finicity bank linking)
- "Verify funds for down payment and closing costs"
- "Add another income source" / "No more income to add"
- "Save this estimate" (rate explorer)
- "Get an email copy of this estimate and come back any time to make updates"
- "Track rates" (rate-change notifications)
- "Adjust home price" (post-preapproval, lets the user change the loan amount on their pre-approval letter without redoing the flow — FAQ says: *"you can reduce the amount on your pre-approval letter to match your offer to avoid showing your hand to the seller"*)

---

## 11.5.9 Trust signals

Tomo is unusually aggressive with trust signals — they are dense and repeated on every page.

1. **NMLS #2059741** — on every page footer. *"Tomo Mortgage, LLC, 1156 6th Ave, 9th Fl, New York, NY 10036. NMLS #2059741. View the Tomo Mortgage NMLS consumer access page."* Linked to the NMLS Consumer Access database. Plus a separate `/mortgage/licenses-and-disclosures` page with the full list of state licenses.
2. **State coverage list.** The FAQ spells out all 41 licensed states by name (full enumeration in the FAQ JSON-LD).
3. **Bankrate "Best Online Lender 2025 / 2026"** — appears on the home page hero, every product page, and the press page. *"We even score #1 on Bankrate's 'Best Online Lender: 2025.'"*
4. **Aggregate rating schema.** The home page emits a Product JSON-LD with `aggregateRating: { ratingValue: "4.4", ratingCount: "486" }`.
5. **Trustpilot / Bankrate / Zillow / Google / WalletHub / BBB / ConsumerAffairs** all linked in the Organization JSON-LD `sameAs` array.
6. **Press coverage** in named outlets: HousingWire, Yahoo Finance, USA Today mentions, plus an internal "In the news" carousel with 8+ dated press articles.
7. **Press page with named loan advisors and first-person quotes:** Craig Smith (NMLS #2391114), Aaron Shaw (NMLS #182019), Ted Volynets (NMLS #1149505), Jamar Jackson (NMLS #1537664), Joseph Lee (NMLS #1866664), Jacob Hayes (NMLS #1762617). Each quote is attributed to a specific customer, specific city, and specific review platform.
8. **Investor signals** on /about-us: *"backed by Progressive Insurance®, Metaprop, Ribbit Capital, DST Global, and NFX."*
9. **"$70M seed round"** is mentioned on the careers page.
10. **Operational proof points** (numeric, repeated on every page):
    - 98% on-time closing (40% industry average)
    - $4,000 average savings at closing
    - 5.0 / 70+ customer reviews (home page)
    - 4.9 / 5 stars rating (every product page)
    - 41 licensed states + DC
    - 30-second account verification (Finicity)
    - 12-21 day close (vs. 45 industry)
    - 0% lender fees
11. **Compliance disclosures.** The preapproval app explicitly reminds the user: *"This is not a commitment to lend. Affordability may vary based on property type, occupancy, location, loan type, loan amount and credit. Affordability here is calculated for conventional, jumbo, and FHA loans. You may be able to qualify for other loan options. Tomo Mortgage's Loan Advisors will assist you in choosing the correct loan for your particular financial situation."* The FAQ also clearly states the 580 FICO floor and the 620 refi floor.
12. **Equal Housing Lender, NMLS, security trust marks** in the footer.

---

## 11.5.10 SEO strategy

Tomo runs a **classic state-fan-out + product-fan-out + city-fan-out SEO play**, similar to Bankrate and NerdWallet. The site emits ~175+ distinct indexable pages from the home page navigation.

### Top-of-funnel keyword clusters (from `<title>` and `<meta description>` tags, exhaustive)

**National mortgage rates cluster:**
- `/interest-rates-today` — *"Today's Best Mortgage Rates: Real Data, 100% Transparency with TrueRate"*
- `/rates` — *"Today's rates"*

**State-level interest-rate pages** (one per state + DC; pattern: `/interest-rates-today/<state-slug>`):
- 41 pages. Example: `/interest-rates-today/ca` — *"CA's TrueRate: Low Mortgage Interest Rates"*

**City-level rate pages** (pattern: `/rates/<city>-<state>`):
- 45+ city pages. Examples: `/rates/atlanta-ga`, `/rates/austin-tx`, `/rates/houston-tx`, `/rates/seattle-wa`, `/rates/miami-fl`, `/rates/denver-co`, `/rates/philadelphia-pa`, `/rates/chicago-il`, `/rates/phoenix-az`, etc.

**FHA city pages** (pattern: `/rates/fha-loans/<city>-<state>`):
- 45+ pages. Examples: `/rates/fha-loans/atlanta-ga`, `/rates/fha-loans/denver-co`, etc.

**VA loan pages** (only major military cities — 8 pages):
- Pattern: `/rates/va-loans/<city>-<state>`. Example: `/rates/va-loans/abilene-tx` (near Dyess AFB), `/rates/va-loans/el-paso-tx` (near Fort Bliss), `/rates/va-loans/fort-worth-tx` (near Naval Air Station JRB Fort Worth), `/rates/va-loans/killeen-tx` (near Fort Cavazos), `/rates/va-loans/san-antonio-tx`, `/rates/va-loans/seattle-wa`, `/rates/va-loans/texarkana-tx` (near Red River Army Depot), `/rates/va-loans/wichita-falls-tx` (near Sheppard AFB). Note the deliberate proximity-to-military-base targeting.

**Product pages (one per loan type):**
- `/products/conventional` — *"Get conventional loan rates 0.25% lower with Tomo Mortgage. Close in as little as 12 days with $0 lender fees. 620+ credit, 3% down. Licensed in 40+ states."*
- `/products/fha` — *"Own a home with 3.5% down and a 580 credit score. FHA loans from Tomo Mortgage close in 12 days with $0 lender fees. **First-time buyers welcome.**"*
- `/products/va` — *"0% Down | No PMI | $0 Fees | Tomo Mortgage"*
- `/products/jumbo` — *"What is a jumbo loan? Borrow above the $832,750 conforming limit with $0 lender fees. 700+ credit, 10–20% down, up to $3M. Licensed in 40+ states."*
- `/products/15-year` — *"A 15-year fixed mortgage gets you to homeownership in half the time. Lower rates, $0 lender fees, close in as little as 12 days. 620+ credit, 5% down."*
- `/products/refinance` — *"Lower Rate or Cash-Out | $0 Fees"*

**Calculator / utility pages:**
- `/affordability` — *"Tomo Mortgage Home Affordability Calculator"*
- `/interest-rates-today` — also a calculator (TrueRate)

**Editorial:**
- `/blog` (Tomo Reports) — content marketing with categories "Home Buying Guide", "Home Buying Tips", "Money Saving Tips", "Mortgage Dictionary", "Mortgage Reviews", "News & Events", "Real Estate Investing", "Real Estate Tips", "Real Estate Trends", "Research & Analysis". Recent posts include: "How to Rate Shop for a Mortgage Without Hurting Your Credit Score," "2025 mortgage interest rate forecast," "How to Get a VA Loan on a Condo," "Online Mortgage Lender Comparison: Rate, Fees, and Close Time (2026)," "VA Loan Limits by State and County: 2026," "Are Online Mortgage Lenders Cheaper on Closing Costs?"

**Authority / E-E-A-T:**
- `/about-us` — Greg Schwartz bio, investor list
- `/press` — press hits + named loan advisor reviews
- `/careers` — core values + benefits + $70M seed round mention
- `/faq` — exhaustive FAQ
- `/licenses-and-disclosures` — full NMLS list
- `/privacy-policy`, `/terms`

### SEO observations

- **Schema.org coverage is best-in-class.** Every page emits FAQPage, FinancialProduct, and Organization schema. The home page also emits Product/aggregateRating.
- **Tomo does not aggressively target first-time-homebuyer keywords** as standalone URLs — they fold first-time-buyer messaging into the FHA page and into the editorial. There is **no `/first-time-homebuyer` or `/first-time-buyer` URL pattern** in the navigation. This is a SEO gap the diagnostic could exploit (long-tail).
- **Tomo does not have a "denied" or "rejected" or "self-employed" landing page** at all. No `…/denied`, `…/self-employed-mortgage`, `…/why-was-i-denied`, `…/dti-calculator`, `…/fha-eligibility-calculator`. **This is the single largest SEO gap in their site.**
- **Tomo is doing *programmatic city SEO*** (state + city + product combinations) but not *denial-intent SEO* (the queries a denied user actually types).
- The blog leans into **rate-forecast content** (highly competitive SERP), **comparison content** (e.g., the "Online Mortgage Lender Comparison: Rate, Fees, and Close Time (2026)"), and **regulatory content** (VA loan limits by state and county, mortgage rate shopping within the 45-day window). It's solid for top-of-funnel authority but does not address denied-borrower intent.

---

## 11.5.11 Strengths

Tomo is, by the evidence, the most consumer-friendly and most tech-forward lender in the top 10 for first-time buyers. The diagnostic should benchmark against these:

1. **True soft-pull prequalification with clear FCRA consent copy.** This is the **most consumer-friendly credit-pull flow in the top 10** — the diagnostic can adopt Tomo's exact consent language as a model.
2. **Anonymous / no-SSN rate explorer with real rate output.** The TrueRate widget (national, state, city, and FHA/VA variants) lets a user see real rate ranges without an account. No other top-10 lender does this as well.
3. **The affordability calculator gives a *range* ("Very affordable" vs "Upper limit"), not a single number.** This is the right pattern — a range, not a false-precision single number.
4. **Three explicit income tiles (W-2, Self-employed, Retirement) in the income wizard.** Better than Rocket / Better / Chase which bury self-employed in a dropdown. *Honest, but not a full non-QM / bank-statement path.*
5. **"No hard credit check" callout on the soft pull step.** This is unique among the top 10 — the diagnostic can replicate this exact UX.
6. **"Buy a lower rate" slider with break-even math.** *"It will take you 4 years to recoup the cost of buying down this rate. Only do this if you plan to stay in your home for more than 4 years."* This is genuinely useful guidance.
7. **Customer review volume + named loan advisors.** Trustpilot / Bankrate / Zillow / Google / WalletHub / BBB / ConsumerAffairs all linked, with named advisors and full NMLS numbers on the press page. This is the most transparent "who is your loan officer" treatment in the top 10.
8. **No lender fees, structurally.** Not just "low fees" — they advertise **$0 origination, $0 processing, $0 underwriting, and they will price-match any competitor's Loan Estimate.** This is rare and is the core of their pricing story.
9. **Same-day loan advisor contact.** 7-day/week support (8AM-9PM ET weekdays, 9AM-6PM ET weekends), with a phone number on every page. *"We are closed on New Year's Day, Martin Luther King Jr Day, Memorial Day, Juneteenth, Independence Day, Labor Day, Veteran's Day, Thanksgiving Day, and Christmas Day. If you need us on Halloween, we'll be there, likely wearing a costume."* This is the warmth piece.
10. **Adjustable pre-approval letter.** *"You can reduce the amount on your pre-approval letter to match your offer to avoid showing your hand to the seller. Just log in and click 'Adjust home price.'"* This is the most clever UX touch in the top 10.
11. **Float-down rate protection.** *"If rates drop 0.25%+ from your lock date, you can float down. You get the rate reduction minus our 0.125% execution cost."*
12. **Appraisal Coverage.** *"We guarantee your loan terms even if your appraisal comes back low. Same APR, cash-to-close, and monthly payment — guaranteed."* (With caveats: 10%+ down, partner agent, primary residence.)
13. **Bankrate "Best Online Lender 2025 / 2026"** stamp. Used as a primary trust signal across the site.
14. **Editorial content** (Tomo Reports / blog) is a real asset, not linkbait. Recent posts include a data-driven online lender comparison, the 45-day rate-shopping rule, the VA loan on a condo post, the first-time-buyer age piece.
15. **Compliance-disclosure discipline.** Every numeric output is dated (*"Estimated Rate/APR as of 8/27"*). Every quote is attributed to a named loan officer with NMLS number. Every page footer has the full NMLS disclosure.

---

## 11.5.12 Weaknesses — the "denied" / "near-miss" gap (and why the diagnostic wins)

**This is the most important section for the project.** The weakness in Tomo's flow is *not* a small UX gap — it is a **structural denial-experience failure** that the diagnostic is purpose-built to solve. The bundle reveals the exact screens Tomo renders when the engine detects a problem.

### There are exactly three failure screens in the consumer funnel. We found all three.

#### 1. **DTIEligibilityRed** (DTI too high) — the closest thing Tomo has to a denial screen

Exact copy from the React bundle:

> **h2:** *"Sorry, we're unable to complete a loan at this time."*
>
> **h2:** *"The debt-to-income calculated is [Tomo's computed DTI]%. Tomo Mortgage requires a DTI below 43% in order to complete a loan request. Let's try again soon."*
>
> **p:** *"Have other income? **Go back** and add it to see if the income information then meets requirements"*

Analytics event: `DTINotQualified`.

**What the diagnostic can do better:**
- Tomo says **"DTI is X%. We need 43%."** That's the entire reason. No guideline citation. No mention that FHA allows up to 50% with compensating factors, or that non-QM lenders go to 55%. No mention of the difference between front-end and back-end DTI. No mention that the user can pay down debt, recast, or remove a co-borrower. No alternative program routing. The user is told to "Go back" and "add more income" — which is the *only* knob Tomo's engine allows them to turn. **A user who genuinely cannot add more income has no path forward except to call a loan officer.**
- The diagnostic can name the **Fannie Mae 43% back-end / FHA 56.9% back-end / VA residual-income / non-QM 50-55%** guideline, distinguish front-end vs. back-end DTI, explain compensating factors, and show a **slider-based scenario** ("if your DTI were 40% instead of 52%, you'd be workable on conventional").

#### 2. **AssetsEligibilityRed** (down payment sources insufficient) — the second denial screen

Exact copy from the React bundle:

> **h2:** *"Sorry, we're unable to complete a loan at this time."*
>
> **h2:** *"The down payment sources provided do not cover the minimum, 5-10% of the purchase price, required for down payment. Lets try again soon."*
>
> **p:** *"Have more sources to put towards your down payment? **Go back** and add them to see if asset sources then meets requirements."*

Analytics event: `AssetsNotQualified`.

**What the diagnostic can do better:**
- Tomo says **"you need 5-10% of the purchase price, you don't have it, go back."** No explanation of *why* 5-10% (FHA 3.5%, conventional 3%, VA 0%, USDA 0%). No mention of *what counts* as a source (gift funds, retirement, crypto, sale of current home — Tomo accepts all of these but doesn't tell the user). No mention of *which programs* they may still be eligible for. The user is told to "Go back" and "add more sources" — which, again, is the *only* lever Tomo's engine allows. **A user whose actual problem is "FHA lets me put 3.5% down" but Tomo's conventional flow says 5-10% is never told that.**
- The diagnostic can name **FHA 3.5% / Conventional 3% / VA 0% / USDA 0% / state down-payment assistance programs (Tomo only has CT currently) / gift fund rules / retirement-account withdrawal rules / employer-assistance programs**.

#### 3. **CreditError** (credit check failure) — the only screen that handles the credit path

This is *not* a "denied" screen — it's a generic error screen that fires when the soft pull fails for a system reason. There are **exactly two** sub-screens:

##### 3a. **Credit check frozen** (`CREDIT_CHECK_STATUS_FROZEN`)

> **h2:** *"Your credit is frozen."*
>
> **h2:** *"No need to worry, unfreezing your credit is easy:"*
>
> *You'll need to unfreeze it with [Experian link]…*

This is **operational** (the user needs to lift a freeze), not **diagnostic** (the user is not told *why* their credit is an issue, only that the system can't read it).

##### 3b. **Credit check failed** (`CREDIT_CHECK_STATUS_FAILED`)

> **h2:** *"We've encountered a problem"*
>
> **h2:** *"Some common issues that may have occurred:"*
>
> *"Some of the personal information provided does not match credit database records."*
>
> *Plus a list of reasons:*
> - **"Low credit score (below 580)"** (testid `credit-eligibility.text.low-score`)
> - *"Late mortgage payments"*
> - *"Bankruptcy or forbearance"*

Analytics event implied: `CreditCheckFailed`.

**Critical gap:** this screen **mentions** "low credit score (below 580)," "late mortgage payments," and "bankruptcy or forbearance" as *reasons the system might have failed* — but it does **not** tell the user *which one* failed for *them*. There is no personalization, no guideline, no alternative-program suggestion, no timeline ("you can apply for FHA 24 months after Chapter 7 discharge"), no path to FHA, no path to non-QM, no path to portfolio, no path to a co-borrower. The user is left to guess which of the three things happened.

**What the diagnostic can do better:**
- The Tomo bundle reveals three of the most common credit-pull failure reasons. The diagnostic can name the *exact* Fannie / FHA / VA / non-QM guideline for each:
  - **FICO < 580** → not eligible for FHA / VA / conventional. Path: 12 months of on-time payments, secured credit card, credit-builder loan, rapid rescoring. Timeline: 6-18 months.
  - **Late mortgage payments** → severity depends on seasoning. Path: bring payments current, then 12 months of on-time history, then re-apply. Timeline: 12-24 months.
  - **Chapter 7 bankruptcy** → FHA waiting period is 24 months from discharge (with re-established credit). Conventional is 4 years. VA is 2 years. Chapter 13 is 12 months into the plan with 12 months of on-time payments.
  - **Forbearance / foreclosure** → FHA 3 years from completion. Conventional 7 years (3 with extenuating circumstances). VA 2 years.
- The diagnostic can also name **non-FICO barriers** that Tomo never surfaces: charge-offs, collections, judgments, tax liens, student loan delinquency, medical debt, recent inquiries, high credit utilization (above 30% drags score; above 10% is the "good" zone), thin file (no score at all because of insufficient credit history).

### What about FICO below 580 *but the user hasn't pulled credit yet*?

Tomo's **affordability calculator** lets the user pick a credit score band as low as **"579 and lower"** — but the **preapproval app** has a hard 580 floor (per the FAQ). If a user runs the affordability calculator with a 550 credit score, they will see a "Very affordable" home price *as if they could get a mortgage* — and then the preapproval flow will reject them at the soft pull with the CreditError screen. **This is a UX trap, not a guidance feature.**

The diagnostic can pre-screen *before* the user wastes 5+ minutes of the flow: *"Your self-reported credit score is below 580. Tomo Mortgage requires 580+ for FHA, 620+ for conventional. Here's what you'd need to do to get there."*

### What about self-employed "denial"?

The bundle does **not** show a dedicated self-employed denial screen. The self-employed path still feeds into the same VOI / VOA engine, which can trigger DTIEligibilityRed or AssetsEligibilityRed. The user self-identifies as self-employed by toggling "Self-employed or business owner" on a per-employer basis in the employment history step. There is **no specialist "1099 only" or "12-month bank statement" or "P&L only" sub-flow**, so a self-employed user with no W-2s and no tax returns has to either (a) upload documents they don't have, (b) call the team, or (c) abandon the flow. **For self-employed ITIN users, the FAQ explicitly tells them to call — there is no self-service path.**

The diagnostic can pre-route self-employed / 1099 / ITIN users to non-QM and bank-statement lender categories *before* they waste a preapproval attempt.

### What about bankruptcy / foreclosure / short sale?

The Declarations step asks *"I have conveyed title to a property in lieu of foreclosure in the past 7 years"* (one specific question) and Chapter 7/11/12/13 bankruptcy questions, but the flow does **not** give the user a guideline-based preview of whether their situation is disqualifying, how long they need to wait, or what their next program option is. The "Conveyed title in lieu of foreclosure" question is binary (yes / no) and there is no help text explaining what that means for qualification. A user with a 2020 Chapter 7 discharge who is now ready to buy in 2025 will not be told *"FHA allows Chapter 7 buyers 24 months after discharge with re-established credit; you're at 60 months — you're good."*

The diagnostic can answer this question with the actual guideline and a personalized timeline.

### What about high LTV / PMI?

Tomo's affordability calculator outputs a single number that *implicitly assumes* the user is putting 20% down (the default down payment slider). It does not surface LTV, does not surface PMI, does not show the user what the payment looks like at 3% down vs. 5% vs. 10% vs. 20%. The "PMI" line in the monthly payment breakdown is shown only when the down payment is below 20%, but there is no comparison tool for "what if I put 3% down vs 5% vs 20%."

The diagnostic can show the **LTV → PMI trigger curve** live.

### What about time-to-close / speed?

Tomo's speed claims are about closing (12-21 days), not about prequalification. The prequalification itself is unmeasured in the marketing. The diagnostic can show a **time-to-result estimate** (anonymous prequal in < 60 seconds; with bank linking, in 2-3 minutes) and a **time-to-close estimate** based on the user's chosen product and state.

---

## 11.5.13 What a "why can't I qualify?" diagnostic needs to do better than Tomo

Synthesizing the failure screens above, here is what Tomo does *not* do that the diagnostic must do:

| Tomo does | The diagnostic must |
|---|---|
| **Two denial screens** (DTIEligibilityRed, AssetsEligibilityRed) — both say "Go back" and "add more" | **8+ denial diagnoses**: DTI, FICO, bankruptcy/foreclosure seasoning, asset shortage, employment gap, self-employed income not verified, property type ineligible, occupancy ineligible, reserve shortage, layered risk (multiple moderate issues) |
| **One copy-paste credit error screen** (CreditError — lists 3 reasons but doesn't tell the user which one applies) | **Personalized diagnosis**: *"Your reported credit score is 545. The FHA program requires 580. Conventional requires 620. VA requires 620 (if eligible). Here's what would need to happen for you to qualify for FHA: pay all revolving balances below 30% utilization, make 12 on-time payments, then re-apply. Estimated timeline: 6-12 months."* |
| **No timeline to qualification** | **Personalized timeline**: *"Based on your Chapter 7 discharge date of June 2023, you are eligible for FHA now (24 months met) and for conventional in June 2027 (4 years)."* |
| **No alternative-program routing** (DTIEligibilityRed only says "add more income") | **Cross-program routing**: *"Conventional at 43% DTI is not workable for you, but FHA may allow up to 56.9% with strong compensating factors. Non-QM lenders may go to 55% with 12-month bank statements. Here's how to get there."* |
| **No "what if" simulator** | **Sliders** for credit-score improvement, debt-paydown, co-borrower addition, down payment, income change, employment history gap |
| **No DTI display anywhere** | **Live DTI display** with front-end / back-end breakdown and the relevant program thresholds |
| **No "you have ITIN" path** | **ITIN / non-QM pathway explanation**: *"ITIN loans are available from a small set of lenders; Tomo does not support them in the consumer flow. Here's a list of lenders that do."* |
| **No self-employed specialist path** | **Self-employed pre-screen**: *"You indicated 1099 income only. Bank-statement loans from [lenders X, Y, Z] can qualify you with 12-24 months of bank deposits and 10-20% down."* |
| **No DTI calculator** | **DTI calculator**: enter monthly income, housing payment, other debts → see DTI, see program eligibility by program |
| **No "is this rate fair?" comparison** (Tomo has TrueRate but only for *itself* vs the market) | **Rate fairness comparison** across the top 10 lenders for the user's specific scenario |
| **No 7-minute prequal claim anywhere** | **Sub-7-minute anonymous prequal** as a *promise* and a *core feature* |
| **Single number / range, no confidence interval** | **Range with confidence interval** (the affordability calc has a range, but the preapproval result is binary) |
| **Recovery only via "Go back"** | **Recovery via three paths**: (a) "adjust inputs to qualify here," (b) "qualify for a different program," (c) "if you do X over Y months, you'll qualify" |

The Tomo evidence is unusually supportive: the bundle literally tells us *every* denial reason the engine knows about, and we can confirm that **the engine knows about DTI, assets, and credit-failure — and nothing else.** The diagnostic must cover FICO, bankruptcy/foreclosure seasoning, LTV/PMI, employment gap, self-employed income documentation, property eligibility, occupancy eligibility, layered risk, and reserves. All of these are *unsurfaced* by Tomo, even when they are the reason the user gets stuck.

---

## 11.5.14 The one-line summary

**Tomo has built the best prequalification UX in the top 10 for the user who qualifies.** Clean soft-pull consent, anonymous rate exploration, a three-tile income wizard, a range-based affordability calculator, and a "Buy a lower rate" slider with break-even math. **But the moment a user is denied, Tomo hands them a single sentence ("Sorry, we're unable to complete a loan at this time. DTI is X%. Go back and add more income.") and a single button ("Go back").** There is no reason. No guideline. No alternative program. No timeline. No education. The user is exactly the person the diagnostic is built for.

---

## 11.5.15 Source URLs and methodology

- **Direct fetch** of the production site: `https://tomo.com/` (228 KB server-rendered HTML), `https://tomo.com/mortgage/app/preapproval` (canonical, 10 KB shell), `https://tomo.com/mortgage/affordability` (124 KB), `https://tomo.com/mortgage/about-us` (90 KB), `https://tomo.com/mortgage/faq` (167 KB), `https://tomo.com/mortgage/benefits-and-features` (137 KB), `https://tomo.com/mortgage/rates` (194 KB), `https://tomo.com/mortgage/interest-rates-today` (249 KB), `https://tomo.com/mortgage/products/{conventional,fha,va,jumbo,15-year,refinance}` (290-348 KB each), `https://tomo.com/mortgage/press` (131 KB), `https://tomo.com/mortgage/careers` (103 KB), `https://tomo.com/mortgage/licenses-and-disclosures` (102 KB), `https://tomo.com/mortgage/privacy-policy` (104 KB), `https://tomo.com/mortgage/terms` (125 KB), and city/state rate pages (`/rates/atlanta-ga`, `/rates/austin-tx`).
- **Client-side bundle analysis:** all 23 JS chunks for `/mortgage/app/preapproval` (1.5-848 KB each, total ~5 MB), extracted from `<script>` tags on the preapproval page. The biggest bundle (`3flzkaeasetzi.js`, 785 KB) contains the entire prequalification flow — the form labels, step IDs, denial screens, soft/hard credit consent language, and test IDs are all literal strings in this file.
- **Schema.org extraction:** Organization, Product/aggregateRating, FAQPage, and FinancialProduct JSON-LD blocks harvested from the home page, FAQ page, and product pages.
- **Trust-signal harvesting:** all `sameAs` URLs from the Organization schema, plus all third-party review platform references on the press page.
- **SEO enumeration:** all 175+ unique internal href values on the home page, cross-referenced against the sitemap-like structure of `/interest-rates-today/<state>` and `/rates/<city>-<state>`.

All quoted copy in this report is verbatim from the production site or the production bundle as of the snapshot date (August 2026, per the Tomo footer "© 2026 Tomo Mortgage"). Where a flow detail is behind client-side rendering, the description is grounded in the literal JavaScript of the bundle — the bundle is fully visible and not minified, so form labels, step IDs, and denial screens are quoted as they actually appear to a user with a browser open.

---

*End of Section 11.5 — Tomo Mortgage.*
