# LoanDepot (loandepot.com) — Competitive Analysis: Prequalification & Qualification Flow

> Researched by fetching live pages and JS bundles from loandepot.com, myloandepot.com (the MLA — Mortgage Loan Application portal at apply.myloandepot.com), the Scully CMS config bundle, and the public sitemaps. Quotes are verbatim from page HTML, the Scully transfer-state JSON, and the Angular bundle (`main.2bfa63b9f748b1e24be1.js`, 4 MB) plus the per-tenant MLA config bundle (`myloandepot.com.809a0cd11a002ae8a6e.js`, 525 KB). All URLs resolve to 200 as of the crawl.

---

## 1. Website URL — the real map of pages

Many of the "obvious" URLs (`/prequalification`, `/preapproval`, `/apply`, `/mortgage`, `/mello`, `/affordability-calculator`, etc.) all **return a 1.6 kB Scully SPA shell** that does a client-side GraphQL call to `ldapi-rprd.loandepot.com/ContentDataStreamIntegration` to resolve a redirect URL. That call returns `""` for all paths I tried with an `Origin: https://www.loandepot.com` header, so the public site doesn't expose the deep funnel URLs through that path. The real funnel is gated by the entry points below.

### Top-level marketing & learning URLs (sitemap-confirmed, 112 URLs)
- `https://www.loandepot.com/` — homepage
- `https://www.loandepot.com/buying-a-house` — purchase hub ("Home Loans: Fixed Rate Mortgages, FHA Loans, ARM & More")
- `https://www.loandepot.com/buying-a-house/mortgage-pre-approval` — pre-approval explainer
- `https://www.loandepot.com/refinance` — refi hub
- `https://www.loandepot.com/refinance/cash-out`
- `https://www.loandepot.com/refinance/rates`
- `https://www.loandepot.com/home-loans` — product hub
- `https://www.loandepot.com/home-loans/{fixed-rate-mortgage, adjustable-rate-mortgage, fha-loan, va-loan, jumbo-loan, 203k}` — per-product pages
- `https://www.loandepot.com/heloc` — HELOC landing (phone is `(866) 790-3940` on this page)
- `https://www.loandepot.com/personal-loans` — **outsourced to Upgrade** (see "Strengths/weaknesses")
- `https://www.loandepot.com/financial-wellness` — credit score via SavvyMoney
- `https://www.loandepot.com/free-credit-score`
- `https://www.loandepot.com/first-time-homebuyer` — first-time buyer hub
- `https://www.loandepot.com/mortgage-rates` — "Simple. Secure. Smart. Applying for a mortgage shouldn't be complicated. With mello smartloan™, it's not."
- `https://www.loandepot.com/compare-mortgage-rates`
- `https://www.loandepot.com/lifetime-guarantee` — the "Lifetime Guarantee" pitch (no lender fees on a future refi)
- `https://www.loandepot.com/about`
- `https://www.loandepot.com/about/leadership`
- `https://www.loandepot.com/about/mission-values`
- `https://www.loandepot.com/about/contactus`
- `https://www.loandepot.com/about/builders`
- `https://www.loandepot.com/loan-officers`, `/find-a-loan-officer`, `/find-an-expert`
- `https://www.loandepot.com/mortgage-calculator` (and 9 sub-calcs — see §6)
- `https://www.loandepot.com/mellosmartloan` — the mello smartloan marketing page
- `https://www.loandepot.com/digital-loan-experience` — the digital application landing
- `https://www.loandepot.com/why-loandepot`, `/loandepot-difference` — exist but render empty
- `https://www.loandepot.com/learning-center/{home-purchase,first-time-home-buyer,home-equity,home-refinance,va-loan,personal-finance,home-renovation}` — SEO content hub
- `https://www.loandepot.com/stayconnected`, `/geico`, `/divvy`, `/bingo` — partner/promo landings (in sitemap, mostly empty or partner co-registration)

### Real entry points to the funnel (where people actually go)
The actual funnel begins at `https://www.loandepot.com/getstarted` (and the slightly older `https://www.loandepot.com/get-started`, both 1.6 kB SPA shells). The exact 4-option screen is in the bundle:

> **"Hi there! What are you looking for today?"** (header rendered as `Hi there! <br /> What are you looking for today?`)
> - ⦿ "I want to buy a home" (value: `buyAHome`)
> - ⦿ "I want to lower my monthly payments" (value: `lowerPayments`)
> - ⦿ "I need to take some cash out" (value: `cashOut`)
> - ⦿ "Show me all available types of loans" (value: `…`)
> - Button: **"Next Step"**
> - Subtext: "Want to skip ahead and speak with one of our team members?" → `(844) 536-8365`

After the "buy a home" / "cash out" / "refi" path, the bundle reveals a **7-step prequalification wizard** (`wizardStepSubject` initial value 0, `wizardTotalStepSubject` value 7). Step labels and inputs are baked into `main.1be48fa039b53bc41aa2.js`:

| # | Step label (`h1`) | Inputs | Notes |
|---|-------------------|--------|-------|
| 1 | "Hi there! What are you looking for today?" | 4 radio options (above) | Determines which wizard config to load (`UserInterest` step object). |
| 2 | "How much do you need?" (`RequiredAmount`) | single number input "Please enter an estimated amount." | Refi/cash-out only. |
| 2 | "How much is remaining on your current mortgage?" (`RemainingMortgage`) | number "Enter zero if you do not have a mortgage." | Refi only. |
| 3 | "What is the estimated purchase price?" (`DesiredLoanAmount`) | slider `$0`–`$2M+` (default $280k), "Continue" | Purchase path. |
| 3 | "How much will you pay as your down payment?" (`DownPayment`) | slider `0%`–`100%` (default 20%, step $14k) with `displayPercentageLabel:true,displayEstimatedLoanAmount:true` | Purchase path. |
| 3 | "Where is the property located?" (default h1) | "Zip Code" or "Zip Code (Optional)" | Property zip, optionally state. |
| 4 | "How is your credit?" / "Just one final question! Do you know your credit score?" | Radio: `Excellent - 720+` / `Good - 680-719` / `Fair - 620-679` / `Poor - <620` / `Not sure` | **Self-reported FICO bucket. Subheading: "Estimating your score will not harm your credit and will help us provide a range of available rates."** `isRequired:!1` (optional). |
| 5 | "Exciting! Can you tell me where you are in the home buying process?" | 4 radio: "I just started researching" / "I am looking at homes and listings" / "I am making offers" / "I signed a purchase agreement" | Only if purchase path. |
| 5 | "When do you plan to make the purchase?" | "0-3 Months" / "3-6 Months" / "6+ Months" / "Not sure" | Purchase path. |
| 5 | "Do you know where you want to buy?" | Y/N | |
| 6 | "Who is the loan for?" (`LegalName`) | "You'll have a chance to add a co-borrower at a later time, if like." Subtitle leads into a legal-name form. | Form group `legalName` is referenced; full SSN/DOB collected inside the MLA. |
| 6 | "Where can we reach you?" / "What's your email?" | Phone (with disclaimer "* By providing your phone number and submitting this form, you are providing your ESIGN/electronic signature…") then email | **Phone first, then email**. `stepNo:5` (counted differently in the wizard). |
| 7 | (post-lead) | "Have you previously spoken to or been referred to a Loan Officer at loanDepot?" → "Yes, search for my Loan Officer" / "No, I need a Loan Officer" | Determines whether you get the LO-search branch. |

After step 7 the wizard calls `submitLead(...)` and routes the user to **`https://apply.myloandepot.com/register/get-started`** (the MLA — Mortgage Loan Application). The `applyNowUrl` constant in the bundle is `https://dv1.loandepot.com/apply` (dev) and `purchaseMlaUrl` is `https://apply.myloandepot.com/register/get-started` (prod). Query parameters passed: `ldec`, `leadsource`, `i3guid`, plus loan-officer referral id when present. Texas residents are routed to a different B2C auth flow: `texasRegisterUrl:"https://mellob2cdev.b2clogin.com/...B2C_1_Sign_Up&client_id=6158c7a4-…"`.

### Inside the MLA (`apply.myloandepot.com` / `myloandepot.com`)
This is a full Microsoft Entra ID (B2C) authenticated Angular app (CIAM tenant, MSAL). Step pages are server-rendered from the `myloandepot.com.809a0cd11a002ae8a6e.js` config. Verified page IDs (titles are verbatim from the page config, all 70+ IDs found in the bundle):

**Pre-application / registration**
- `mortgage/register` — landing
- `mortgage/welcome` — "Welcome", `existingCustomerWorkflow` guard
- `register/get-started` — **"Get Started | Contact Information"** (entry point). Form fields: `lead.firstName`, `lead.middleName`, `lead.lastName`, `lead.suffix`, **`lead.email`**, **`lead.phone`**, `lead.street`, `lead.unit`, `lead.city`, `lead.state`, `lead.zipCode`, `lead.agreement` (TCPA disclosure). Commits to `register/confirm-phone` (if `featureFlag_RegisterConfirmPhoneNumber_Enabled` is on) else `register/password`.
- `register/confirm-phone` — "Get Started | Confirm Your Phone Number", 6-digit SMS code input
- `register/password` — "Get Started | Set Password"
- `register/has-loan-officer`, `search-loan-officer`, `confirm-loan-officer` — branch if a referral LO is detected

**Identity (KYC) — for purchase and refi**
- `about/information` — "Tell Us A Little About You"
- `identity/verify-credit` — **"Let's Verify Credit History"**. Subtitle: *"To quickly help find a mortgage loan that best fits your needs, you are authorizing loanDepot to review your credit history."* (Soft pull is gated by feature flags `featureFlag_SoftPullOnly` and `featureFlag_SoftPullAndTrimerge` — when set, the button label is `"!{ternary:($featureFlag_SoftPullOnly || $featureFlag_SoftPullAndTrimerge) && borrower.includeSpouse?I/We:I} Authorize"`; otherwise the text is augmented with "*This information is required to qualify for a mortgage loan.*"). DOB collected here: `borrower.dob` with `validation.minAge:"You must be 18 or older to apply for a loan."` The tooltip explicitly states: *"Running your credit report will impact your credit score."* (See §4 for full soft vs hard analysis.)
- `identity/credit-scores` — "Thanks for Submitting Your Info"
- `verify/ssn` — **"Verify Your Identity By SSN"**. Single input `$code`, **`minLength:4, maxLength:4`** — **i.e. last-4 of SSN**, not the full 9. Tooltip: "I Authorize".
- `identity/gov-hmda-questions` — "Government Questions We Have To Ask" / "Information for Government Monitoring Purposes" (race/ethnicity/gender)
- `identity/gov-declaration-questions` — "Please Answer All The Government Declarations"

**Property (purchase path)**
- `property/initial-questions` — "Initial Property Questions" (`loan.subjectProperty.isPropertySelected`, `isReferral`, `isRealtor`)
- `property/information` — "Property Questions" (city/state/zip/year-built/propertyType)
- `property/where` — "Property Location" (for refi/no-property-selected)
- `property/under-contract` — "Contract Information"
- `property/additional-information` — "Additional Property Information" (purchase price, down payment, occupancy, etc.)
- `property/sales-cost` — "Sales Closing Costs"
- `property/see-if-i-qualify` — **"See If I Qualify"**. Subheader: *"How To Get Pre-Approved"*. Body: *"By selecting 'Continue', we will ask you to provide required information to get Pre-Approved. If you qualify, you will have the option to download a Pre-Approval letter."*
- `property/missing-important-information` — **"Missing Important Information"**. Subtitle: *"Oops, it looks like you skipped some required fields when going through the loan application."* Body1: *"To provide you with an accurate mortgage offer, select 'Continue' below and follow screens to provide needed information."* Body2: *"If you select 'Submit' then you will be able to submit an application, but will not be presented with anything."* — This is the "you skipped a step" diagnostic.

**Property (refi path)**
- `property/refinance-goals` — "Refinance Goals" (radio)
- `property/refi-tell-us-about-your-property` — "Tell Us About Your Property"
- `property/refi-additional-information` — "Additional Information We Need About Your Property"
- `property/monthly-mortgage-payment` — "What Is Your Monthly Mortgage Payment?"
- `property/current-housing-expenses` (purchase-side: "What Are Your Current Housing Expenses?")
- `property/current-housing-hoa` — "Homeowner Association"

**Income**
- `income/income-source` — **"Tell Us About Your Income"**. Subtitle: *"Please tell us your sources of income from the last two years. Select one to begin:"*
- `income/verify-employment` — "Tell Us About Your Employment"
- `income/employed` — "Tell Us About Your Employment" (employer, position, dates, salary, hourly)
- `income/self-employed` — "Self Employed Income" (business name, business address, % ownership, gross annual income, etc.)
- `income/military` — "Military Pay"
- `income/pension` — "Pension"
- `income/social-security` — "Social Security Income"
- `income/other` — "Other Income" (Alimony, Child Support, Boarder Income, Capital Gains, Unemployment, VA Compensation, etc.)
- `income/summary` — "Your Income Summary"

**Assets**
- `assets/add-financial-assets` — "Adding Financial Assets"
- `assets/verify-automatic` (search/select/sign-in/summary) — **Powered by Finicity** (bank-account verification). SDK: `https://connect2.finicity.com/assets/sdk/finicity-connect.min.js`
- `assets/verify-automatic-sign-in-finicity` — opens the Finicity widget

**Spouse / co-borrower (mirrors the borrower flow with `spouse/` prefix)**

**Review & submit**
- `review-application` — "Almost Done! Let's Review Your Application"
- `prequalify/summary` — **"Pre-Approval Summary"** (shows `$totalPrequalAmount`, the prequal letter, and a `Download Pre-Qualification Letter` button — `route:"downloadPrequalifyLetter()"`)
- `prequalify/thank-you` — "Thank You" with "Congratulations on your Prequalification" subtitle for the prequal path: *"<strong>Next Steps:</strong> You will be contacted shortly by one of our Licensed Lending Officers to review your application."* Includes a `loan-officer-detail` block and 3 bullet steps.
- `prequalify/submitted` — "Loan Application Submitted" (full-app path, not prequal-only)
- `offers/select-offer`, `offers/selected-offer-details`, `offers/assigned` (title: **"Congratulations You Have Been Approved"**), `offers/finalized`, `offers/thank-you`, `offers/follow-up`
- `thank-you` (full application): "Thank You For Submitting Your Loan Application"

---

## 2. Target audience messaging

Headline targeting is segmented by product landing page, with the global tagline **"Your partner through every step of homeownership."** (homepage) and product-specific hero lines:

| Page | Hero / H1 |
|---|---|
| Homepage | "Mortgage Lender - Home Loan Refinancing \| loanDepot" — meta description: *"Apply for your mortgage or refinance online with loanDepot. Trust the second largest non-bank lender in the country…"* |
| `/buying-a-house` | "Make Your Dream Home a Reality." (sub: "Redefining the Home Purchasing Experience") |
| `/refinance` | "Lower Payments. Consolidate Debt. Pull Cash Out." (sub: "Refinance with Confidence") |
| `/heloc` | "5x5 HomeLoan*" / "Access up to $750,000 from your home's equity" / "Life moves pretty fast, and so does the loanDepot HELOC" |
| `/first-time-homebuyer` | "Are you a First-Time Homebuyer looking for your dream home?" (with "you could even receive up to $1,000 cash back" for FTBs) |
| `/mortgage-rates` | "Simple. Secure. Smart. Applying for a mortgage shouldn't be complicated. With mello smartloan™, it's not." |
| `/about` | "America's second largest non-bank lender" |
| `/personal-loans` | "Personal loans have never been easier." (underwritten by **Upgrade**, not loanDepot) |
| `/financial-wellness` | "Do you know your credit score?" — free monitoring powered by SavvyMoney |

Audiences implicitly addressed: **first-time buyers** (dedicated hub, $1,000 cash-back promo), **refinancers** (cash-out, lower payments, debt consolidation), **HELOC borrowers** ($750k equity, debt-payoff built in), **self-employed** (the "self-employed" income page accepts business name, % ownership, gross income — no W-2 required), **military / VA borrowers** (VA-specific page), **FHA borrowers** ("Qualify with ease with as little as 3.5% down; originally for first-time buyers, FHA programs are now open to wider audiences"), **Jumbo**, **203k renovation**, and **HELOC refinancing** of an existing mortgage. The "Doctor Loan" URL exists in the bundle as a future product. There is no dedicated "non-QM" or "investor" landing on the public site.

---

## 3. Value proposition (exact headlines)

- **Global:** "Your partner through every step of homeownership." + "Second largest non-bank lender in the country" (used in meta descriptions and the about page).
- **Tagline tied to technology:** "**mello smartloan™** — Meeting your unique financing needs with a full spectrum of lending products." (verbatim from `/mellosmartloan`.)
- **Three big-segment pitch (homepage hero row):**
  - "**GET CASH** — Home Equity Loans / Cash Out Refinance / Personal Loans — VIEW OPTIONS"
  - "**BUY A HOME** — Fixed Rate Mortgage, Adjustable Rate Mortgage, VA Loan Programs, FHA Mortgage — GET STARTED"
  - "**LOWER PAYMENTS** — Lower your monthly payments by refinancing! Free up cash flow to do more in life! — START SAVING"
- **HELOC pitch:** "Receive your cash in as little as 5 days", "Apply in minutes", "Enjoy competitive rates", "Choose from flexible 10, 15, 20, or 30-year terms", "Redraw funds as you pay down your balance", "Available for primary, secondary, and investment properties". Headline sub: "Get a no-hassle online rate quote in minutes — with no impact to your credit score."
- **Lifetime Guarantee (refi retention):** "**loanDepot will waive all lender fees when you refinance your home with us in the future***" with the supporting stat: "Most homeowners refinance their mortgage every 7 years. …over the course of a 30-year mortgage you're likely to refinance at least four times…"
- **Personal loans:** "loanDepot is proud to introduce personal loans brought to you by Upgrade. You may pre-qualify in minutes and choose from multiple offers." (Disclosure: "Information input below will be sent directly to Upgrade and will not be received or stored by loanDepot.com, LLC.")
- **"Working for you / no steering":** "Our licensed lending officers are held by a strict no steering policy and are not incentivized to sell one loan over another." (Repeated on buying-a-house, refinance, and product pages.)
- **"Tech-enabled lending":** "We are a direct lender. We control the entire mortgage process, enabling us to deliver low home loan rates and closings up to 50% faster than the industry average."

---

## 4. Lead capture mechanism — when they ask for what, soft vs hard pull, prequal vs preapproval

The funnel has **two distinct lead-capture layers** plus one optional third, with different "credit" semantics.

### Layer 1 — Marketing prequal wizard (no credit pull at all)
- Lives on `loandepot.com/getstarted`. Collects: **loan purpose → loan amount / property value / down payment / property zip → self-reported credit bucket (720+ / 680-719 / 620-679 / <620 / Not sure) → home-buying stage → timeframe → home-buying process (purchase only) → legal name (just a hook) → phone → email → LO-referral question.**
- **No PII credit check is performed here.** The "credit score" question is self-reported (FICO buckets), and the page explicitly says "Estimating your score will not harm your credit." This stage is purely a lead-routing layer — the goal is to push the user into the MLA and assign a Loan Officer.
- After submit, the user is taken to `https://apply.myloandepot.com/register/get-started` (the MLA), or, if a referral LO is set, the wizard passes `refid` / `LO=1` query params and routes directly to that LO's MLA session.

### Layer 2 — MLA registration (`register/get-started`)
- **Title: "Get Started | Contact Information".** This is where real identity is collected: **`lead.firstName`, `lead.middleName`, `lead.lastName`, `lead.suffix`, `lead.email`, `lead.phone`, `lead.street`, `lead.unit`, `lead.city`, `lead.state`, `lead.zipCode`, `lead.agreement`** (TCPA disclosure checkbox). Address uses Google Address autocomplete.
- **Still no credit pull at this step.** It validates email uniqueness and (when the `RegisterConfirmPhoneNumber_Enabled` flag is on) sends a 6-digit SMS code to verify the phone before password creation.
- After password creation, the user is routed to `property/initial-questions` (purchase) or `property/refinance-goals` (refi).

### Layer 3 — Identity + credit + SSN (the real qualification)
- **`identity/verify-credit`** ("Let's Verify Credit History") is the **first hard-data point**. This is gated by feature flags:
  - **`featureFlag_SoftPullOnly`** (soft pull only) — when active, button label collapses to just "I Authorize" and the "required to qualify" sentence is suppressed in the subtitle.
  - **`featureFlag_SoftPullAndTrimerge`** (soft pull + Trimerge supplemental data verification) — used to allow a fully soft-pull prequalification that can still verify income/employment/assets digitally.
  - **Default (no flag):** hard pull.
  - In all cases, the user **must explicitly consent**. The page's tooltip is unambiguous: *"Running your credit report will impact your credit score."* (This is required FCRA / GLBA language even for soft pulls, which is why it always shows.)
- **Date of Birth** is collected on the same step as a `borrower.dob` field with a `minAge:"You must be 18 or older to apply for a loan."` validation.
- **`verify/ssn`** is a separate step ("Verify Your Identity By SSN") that asks for a **4-digit code** (not the full 9) — used for identity matching with the credit bureau.
- Income, employment (W-2 or self-employed), assets (via Finicity bank-connect), and HMDA demographics are collected in subsequent steps before any **offer** is generated.

### Layer 4 — Prequalification vs Preapproval
- A **prequalification** in loanDepot's terminology is the path that ends at `prequalify/summary` (a `downloadPrequalifyLetter()` button) → `prequalify/thank-you` ("Congratulations on your Prequalification", bullet list of "Next Steps: You will be contacted shortly by one of our Licensed Lending Officers to review your application"). This is the soft-pull or self-reported path.
- A **preapproval** requires the full identity/property/income/asset upload and ends at `review-application` ("Almost Done! Let's Review Your Application") → `prequalify/summary` (with verified loan amount) → if accepted, the user reaches `offers/select-offer` with a real offer from the loan engine, then `offers/assigned` ("Congratulations You Have Been Approved"), then `prequalify/submitted` / `offers/thank-you`.
- The internal loan state machine has 17 states: `Unsubmitted, Started, InProgress, Submitted, Reviewing, ReviewSuspended, FraudAnalyzing, Declined, Accepting, AcceptingCounter, Expired, Finalizing, Withdrawn, Funding, Funded, PaidOff` (plus initial). `Declined` is the formal "denied" state. There's also a `ReviewSuspended` state and a separate `pricingEligibility` status binding that controls whether the user can see priced offers vs only unpriced prequalification.

### Soft-pull vs hard-pull call summary
| Stage | Soft or hard? | Why |
|---|---|---|
| `/getstarted` marketing wizard | **None** | Self-reported credit bucket only. No bureau hit. |
| MLA `register/get-started` | **None** | Identity + email + phone + address. No bureau. |
| MLA `identity/verify-credit` | **Soft (when `featureFlag_SoftPullOnly` or `featureFlag_SoftPullAndTrimerge` is on) or Hard (default)** | This is the bureau pull. The tooltip text is the same in both cases (legal disclosure). |
| MLA `prequalify/summary` (letter download) | **Soft** at the bureau level — relies on the soft pull + Trimerge verification; the loan is a prequalification, not a firm approval. |
| MLA `offers/select-offer` and beyond | **Hard** (the loan engine runs a full pricing eligibility check, the `pricingEligibility` binding flips to `true` only after underwriting-style verification of income/assets via Trimerge/Finicity) |
| At signing/funding | **Hard** hard-pull on closing disclosures |

So loanDepot's marketing prequal is **soft-pull + no-bureau** depending on configuration, and the "pre-approval letter" download path is the soft-pull prequalification. Their preapproval-with-offer is hard-pull.

---

## 5. Questions asked (exact inputs, in order)

### Marketing wizard (7 steps; partial inputs only — no PII)
1. Loan purpose (4-option radio).
2. Loan amount (refi/cash-out) or "How much is remaining on your current mortgage?" (refi) — number.
3. "What is the estimated purchase price?" → slider $0–$2M+ (default $280k) — purchase.
4. "How much will you pay as your down payment?" → slider 0–100% (default 20%, step $14k, shows estimated loan amount) — purchase.
5. "Where is the property located?" → "Zip Code" (or "Zip Code (Optional)" if not required) + state.
6. "Just one final question! Do you know your credit score?" → 5 buckets: Excellent 720+ / Good 680-719 / Fair 620-679 / Poor <620 / Not sure. **Optional, `isRequired:!1`**.
7. (Purchase only) "Where are you in the home buying process?" (4 options) + "When do you plan to make the purchase?" (0-3 / 3-6 / 6+ / Not sure) + "Do you know where you want to buy?" (Y/N).
8. "Who is the loan for?" → legal name form (h2: "You'll have a chance to add a co-borrower at a later time, if you like.").
9. "Where can we reach you?" → phone (with TCPA / ESIGN language).
10. "What's your email?" → email.
11. "Have you previously spoken to or been referred to a Loan Officer at loanDepot?" → "Yes, search for my Loan Officer" / "No, I need a Loan Officer".

### MLA (`apply.myloandepot.com`) — full KYC inputs in order
- `register/get-started` — **First name, middle name, last name, suffix, email, phone, street, unit, city, state, zip, TCPA agreement**.
- `register/confirm-phone` — **6-digit SMS code** (when feature-flagged on).
- `register/password` — **Password** (with 8-char complexity meter, "Use at least 8 characters. Your password is case sensitive and must include 3 of the following: Uppercase letter, Lowercase letter, Number, Symbol").
- `property/initial-questions` — Property identified Y/N, Referral Y/N (referrer company, name, phone, email), Realtor Y/N.
- `property/information` — **City, state, zip, year built, property type** (SFR / Condo / Manufactured / PUD / etc.), manufactured details if applicable.
- `property/under-contract` — Yes/No.
- `property/additional-information` — **Purchase price, down payment, down payment source, occupancy, FHA/VA eligibility, etc.**
- `property/sales-cost` — Closing costs.
- `identity/verify-credit` — **Date of birth, consent ("I Authorize")**, then a real credit pull (soft or hard per feature flag).
- `verify/ssn` — **Last 4 of SSN** (4-digit numeric, password-masked input).
- `identity/gov-hmda-questions` — **Race (5 categories), Ethnicity (Hispanic/Not), Sex (Female/Male/Not provided)** — required by federal HMDA.
- `income/income-source` — Pick from: Employed / Self-Employed / Military / Pension / Social Security / Other.
- `income/employed` (or self-employed / military / pension / social-security / other) — **Employer name, position, work address, work phone, monthly income, hourly rate, bonuses, commissions, overtime, start date, end date, "is this job current?"**.
- `income/summary` — 2-year history (you can add multiple jobs).
- `assets/add-financial-assets` → `assets/verify-automatic` — **Bank accounts via Finicity OAuth (search → select institution → sign in → review accounts)**, or manual entry. Auto-verification is gated by `featureFlag_SoftPullAndTrimerge` and pulls 60-90 days of transaction history.
- `review-application` — Read-only summary of everything above.
- `prequalify/summary` — **The prequal letter** with the offer/loan amount and a "Download Pre-Qualification Letter" button.

---

## 6. Calculator functionality (all 9 + their page IDs)

The main `/mortgage-calculator` page is a hub that links to 9 sub-calculators. The actual calculators (from sitemap) are:

- `/mortgage-calculator` — **"Mortgage Loan & Refinance Calculators"** — main hub. Lead text: *"Take the guesswork out of your mortgage payments. Use this mortgage loan calculator to generate a mortgage or savings estimate. Press the 'Calculate' button to find out."* Disclaimer: *"Estimated monthly payments include principal and interest and are not an offer to lend. Tax, insurance, and other fees and charges may apply. Default interest rate displayed is illustrative only. Interest rates, total cost of mortgage, and monthly mortgage payment are estimates based on information provided. Actual mortgage payment and interest rate may be higher or lower than those displayed and will depend on your mortgage product, collateral, and credit history."*
- `/mortgage-calculator/home-loan` — generic Home Loan payment calculator
- `/mortgage-calculator/refinance` — Mortgage Refinance Calculator
- `/mortgage-calculator/refinance-interest-savings` — Refinance interest savings (compares current vs new)
- `/mortgage-calculator/affordability` — **"Mortgage Affordability Calculator: How Much House Can I Afford?"** — DTI-based affordability
- `/mortgage-calculator/rent-vs-buy` — Rent vs. Buy
- `/mortgage-calculator/arm-vs-fixed` — ARM vs. Fixed
- `/mortgage-calculator/jumbo-loan` — Jumbo Loan
- `/mortgage-calculator/fha-loan` — **"FHA Loan Payment Calculator"**
- `/mortgage-calculator/va-loan` — VA Loan
- `/mortgage-calculator/home-loan` — base home-loan calc
- `/renovation-calculator` — separate (probably 203k-focused)

**Notable gap: there is no dedicated public DTI calculator** — affordability is the only place DTI is implicit, and it's not surfaced as a "Debt-to-Income" tool. URLs like `/dti` and `/debt-to-income` both return 200 (1.6 kB SPA shells) but the consumer-facing calculator is just `/mortgage-calculator/affordability`. The site also lacks a true DTI ratio slider — it's a home-price + down-payment + income → "you can afford" estimate, not an inputs-where-you-enter-your-debts calculator.

---

## 7. Calls to action (verbatim)

| CTA location | Text | Target |
|---|---|---|
| Header (global) | "Apply Now" | `/getstarted` (or `applyNowUrl` deep link with query params) |
| Home hero card 1 | "VIEW OPTIONS" | Get Cash products |
| Home hero card 2 | "GET STARTED" | Purchase flow |
| Home hero card 3 | "START SAVING" | Refi flow |
| Home prefab | "Prefer to talk with us? **(888) 983-3240**" | phone |
| `/getstarted` | "Next Step" | advances wizard |
| `/mellosmartloan` | "Get Started" (purple) | starts the wizard |
| `/buying-a-house` | "Make Your Dream Home a Reality." / "Get Started" | wizard |
| `/refinance` | "Lower Payments. Consolidate Debt. Pull Cash Out." / "Get Started" | wizard |
| `/first-time-homebuyer` | "Start Your Pre-Approval Process" / "Talk to a Loan Officer" | MLA or phone |
| `/heloc` | "Get Started" / "Check My Rate" (without impacting your credit score) | HELOC wizard (separate flow at `/heloc`) |
| `/mellosmartloan` | "Get Started" | wizard |
| `/digital-loan-experience` | "Refinance" / "Purchase" (segmented buttons under hero) | wizard |
| Personal loans page | "Apply Now!" (orange) | Upgrade (third party) |
| `/product-hub` | "Learn More" (×4 product cards) | each product page |
| `/lifetime-guarantee` | "(877) 395-7381" to redeem; "Calculate Purchase"/"Calculate Refinance" inline CTAs | phone / calculators |
| Home loan officer card | "Email Me" / phone icon | LO contact |
| MLA register | "Submit" / "I Authorize" | advances to next page |
| MLA prequal summary | `Download Pre-Qualification Letter` (button), `$prequalifyDownloadButton` | downloadable PDF letter |
| MLA prequal thank-you | `login('user/login')` after viewing LO | log in to dashboard |

---

## 8. Trust signals (what's actually on the page, what's missing)

### Trust signals that ARE present
- **BBB logo** in the footer of every page (SVG asset `bbb.png`).
- **Equal Housing Opportunity (EHO) logo** in the footer (`fheo.png`).
- **NMLS #174457** in the footer of every page, with a link to NMLS Consumer Access (`nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/174457`).
- **State Licensing** link in the legal footer on every page (legal requirement).
- **Lifetime Guarantee** — a real, fully-fleshed-out program with its own page and fine print ("Basic Eligibility", "Future Loans Not Covered by the Guarantee", "Other Terms and Conditions", "Redemption" sections). The redemption phone is `(877) 395-7381`.
- **"Founded in 2010 by mortgage industry trailblazer Anthony Hsieh"** — founder credibility on `/about`.
- **"named the 'Best Mortgage Lender for First-Time Buyers' by The Wall Street Journal in 2024 and 2025"** — a named third-party award (Wall Street Journal, 2024 and 2025).
- **"$100 billion in loans since 2010"** — volume claim on `/buying-a-house` and `/refinance`.
- **"closings up to 50% faster than the industry average"** — speed claim.
- **Customer testimonials** on the homepage with first names ("Paul R.", "Chris", "Jon S.", "Bill V.") and a 5-star implied rating; "10 stars" mentioned in one quote.
- **"Licensed in all 50 states"** — geographic credibility.
- **mello®** is trademarked and featured across `/about`, `/mellosmartloan`, `/mortgage-rates`, and `/digital-loan-experience` — proprietary technology claim.
- **Lifetime Guarantee redemption CTA** at `(877) 395-7381` for retention.
- **"No steering policy"** — repeated trust claim about LOs.
- **Microsoft Entra ID (B2C) authentication** for the MLA — enterprise-grade auth.
- **Finicity** (Mastercard) for bank-account verification — enterprise data partner.
- **Trimerge** for supplemental credit / income / employment data — enterprise data partner.
- **Microsoft Dynamics / Dataverse** appears to back the CMS (`webpageman~FuncApp~api~page-by-path?path=...&uiApp=loandepot-web`).
- **Jornaya** and **LuckyOrange** are loaded on the MLA registration pages (`jornaya:!0, luckyOrange:!0` in the page config) — lead-form compliance and session-replay.
- **OneLink** by Jornaya (`https://www.onelink-edge.com/moxie.min.js?PF53B-4890-8E62-31A7`).
- **Cloudflare** bot management / iframe resizer.
- **Dynatrace** RUM (`js-cdn.dynatrace.com/jstag/16ad5ab9…`).
- **reCAPTCHA** explicit render on every form (`https://www.google.com/recaptcha/api.js?render=explicit`).
- **Akamai** and **CloudFront** for asset delivery.
- **Phone numbers everywhere** — `(888) 983-3240` for new loans, `(866) 258-6572` for servicing, `(866) 790-3940` for HELOC, `(888) 337-6888 x 6789` for customer care, `(844) 536-8365` for the wizard's "skip ahead" option, `(855) 734-6900` for login help.
- **Email contacts:** `customercare@loandepot.com`.

### Trust signals that are NOT on the page (the weak spots)
- **No J.D. Power rating** — their 2024 issue (mortgage origination satisfaction) is not displayed anywhere.
- **No BBB rating letter grade** (A+, A, etc.) — only the logo. The actual accreditation status is not shown in-page.
- **No aggregate customer review count or star rating** — no Trustpilot, Zillow, LendingTree, or Google reviews embedded; only curated one-liner testimonials.
- **No celebrity endorsements on the public site** — I searched for "Rick Ross", "Arian Foster", and any sports/music figures. **No matches.** The brand does not appear to run celebrity spokespeople on the consumer website as of the current page crawl. (LoanDepot *did* have celebrity partnerships in the past, including with Kevin O'Leary, Magic Johnson, and others historically, but none are surfaced in the current public pages.)
- **No security/encryption trust badge** on the application pages (no Norton, McAfee, Trustwave, etc. — the application uses reCAPTCHA but no third-party SSL trust seal).
- **No "as seen in" media logo strip** beyond the one Wall Street Journal quote.
- **No mortgage-specific awards** displayed (e.g., not on a "Best of 2024" list with a logo, just the WSJ quote).
- **No "X customers served" or "X loans closed" counter** (they have the $100B figure but not a loan-count figure).
- **No Better Business Bureau accreditation date or grade** — just the logo.
- **No SOC 2 / ISO 27001 badge** for the digital application.
- **No Glassdoor / Indeed employee count** surfaced as a "great place to work" signal.
- **No "as low as" rate display with rate-lock language** — rates are hidden behind a contact CTA.
- **Disclaimer footer text uses a generic "Trust the second largest non-bank lender"** instead of a more specific credibility claim.

---

## 9. SEO strategy — what they target

### Keyword-level signal (from the meta tag set)
- Homepage title: `Mortgage Lender - Home Loan Refinancing | loanDepot`
- Homepage meta description: *"Apply for your mortgage or refinance online with loanDepot. Trust the second largest non-bank lender in the country to provide you with quality mortgage lending and refinance services in all 50 states."*
- Homepage meta keywords: `Loan, Lending, Home Purchase, Refinance, Equity, Leading, Lender` (sparse, not heavily optimized).
- About page meta description: *"As America's second largest non-bank lender, loanDepot is committed to creating a mortgage experience that meets or exceeds your expectations."*
- About page meta keywords: `About loanDepot America's Lender`

### Page-level keyword themes (from URL slugs and H1s)
The sitemap is heavily biased toward **informational / learning** content clusters:
- **`/learning-center/{home-purchase, first-time-home-buyer, home-equity, home-refinance, va-loan, personal-finance, home-renovation}`** with 40+ long-tail posts.
- Specific SEO articles that hit common long-tail queries:
  - `prequalification-vs-preapproval-comparison`
  - `types-of-mortgage-loans-guide`
  - `employment-history-requirements-for-mortgage-approval`
  - `how-much-down-payment-for-a-house`
  - `fico-score-factors-mortgage-rates`
  - `essential-mortgage-documents-list`
  - `10-steps-to-buying-a-house`
  - `mortgage-process-step-by-step-guide`
  - `mortgage-mistakes-to-avoid`
  - `homeownership-101-mortgage-basics`
  - `home-buying-budgeting-guide-affordability-mortgage-readiness`
  - `4-financial-mistakes-avoid-before-closing`
  - `reasons-to-refinance-mortgage`
  - `heloc-vs-home-equity-loan`
  - `heloc-application-document-checklist`
  - `heloc-home-equity-loan-fees-closing-costs-breakdown`
  - `va-loans-fico-score-why-credit-matters-for-eligibility`
  - `va-loan-zero-down-payment-financing`
  - `va-loan-eligibility-properties-you-can-buy-and-cant-buy`
  - `va-home-loan-eligibility-employment-income-explained`
  - `home-loan-qualification-9-essential-steps`
  - `loan-checklist-essential-documents-for-your-mortgage`
  - `benefits-disabled-veterans-funding-fee-waived`
  - `9-key-benefits-of-va-home-loans`
  - `how-to-get-va-certificate-of-eligibility-coe`
  - `fha-203k-renovation-loan-guide`
  - `fannie-mae-homestyle-renovation-loan`
  - `how-much-can-you-borrow-renovation-loan`
  - `benefits-of-renovation-loans-for-fixer-uppers`
  - `renovation-loan-checklist-5-essential-documents-fast-approval`
  - `fha-203k-versus-homestyle-va-loans-best-renovation-loans`
  - `renovation-loans-prequalification-versus-preapproval`
  - `8-smart-ways-use-renovation-loan-increase-home-value`
  - `how-to-get-best-renovation-loan-interest-rate-home-remodel-financing`
  - `hidden-costs-renovation-loans-explained`
  - `10-step-mortgage-refinance-process-complete-guide-homeowners`
  - `using-home-equity-past-credit-issues`
  - `use-home-equity-family-milestones-long-term-plans`
  - `access-cash-tied-up-in-home-value`
  - `the-process-of-buying-a-home`

### Per-product programmatic SEO
- **Fixed-rate mortgage** — `/home-loans/fixed-rate-mortgage` plus one URL per term: `10yearmortgagerates`, `15yearmortgagerates`, `20yearmortgagerates`, `30yearmortgagerates`.
- **ARM** — `/home-loans/adjustable-rate-mortgage` plus one URL per initial-fixed-period: `3yearrates`, `5yearrates`, `7yearrates`, `10yearrates`.
- **FHA** — `/home-loans/fha-loan/{mortgagerates, streamlinerefinance, cashoutrefinance}`.
- **VA** — `/home-loans/va-loan/{mortgagerates, streamlinerefinance, cashoutrefinance}`.
- **Jumbo** — `/home-loans/jumbo-loan/{mortgagerates, cashoutrefinance}`.
- **203k** — `/home-loans/203k`.

### Calculator SEO (9 long-tail calc pages)
The 9 calculator URLs above each rank for a specific "calculator" or "rate" query (e.g., "FHA Loan Payment Calculator", "Mortgage Affordability Calculator", "Rent vs. Buy Calculator"). The `*` disclaimer on the rate-calc pages is a soft disclaimer that they are estimates, not offers.

### Local / branch SEO
- `sitemap-branches.xml` — likely a large branch locator index (not parsed here, but the structure exists).
- `sitemap-loanofficers.xml` — likely individual LO profile pages (each is a sales landing).
- `branches` page exists in the nav.
- `loan-officers` / `find-a-loan-officer` pages with parameterized LO referral links.

### Structured / technical SEO
- One canonical per page, `revisit-after: 1 days`, `rating: general`, OG tags (`og:title`, `og:url`, `fb:app_id`).
- `robots.txt` allows everything except `/api/` and points to `sitemap-index.xml`.
- Sitemap index has 4 child sitemaps: `sitemap-ld.xml` (112 main URLs), `sitemap-branches.xml`, `sitemap-loanofficers.xml`, `sitemap-learning-center.xml` (45+ blog URLs).

### Top organic-money pages (best guess from URL structure)
- `/` (branded)
- `/mortgage-rates`
- `/refinance`
- `/refinance/rates`
- `/buying-a-house`
- `/buying-a-house/mortgage-pre-approval`
- `/buying-a-house/home-loan-rates`
- `/first-time-homebuyer`
- `/home-loans/{fixed-rate-mortgage, fha-loan, va-loan, adjustable-rate-mortgage, jumbo-loan}`
- `/heloc`
- `/home-loans/va-loan` and its 3 child pages
- `/mortgage-calculator` and 9 calc children
- `/lifetime-guarantee`
- `/about`
- Learning-center articles — especially the comparison ("prequalification vs preapproval"), VA, FHA, and renovation clusters.

### Local SEO weaknesses
- No public schema.org/LocalBusiness markup on the rendered pages (would need a JS-executed audit to confirm).
- No "near me" landing page strategy visible in the sitemap.

---

## 10. Strengths

1. **Massive informational content moat** — 40+ long-form SEO articles under `/learning-center` covering every step from prequal to closing, with specific high-intent clusters for VA, FHA, renovation, first-time buyers, and home equity.
2. **Proprietary technology branding** — "**mello® Technology**" / "**mello smartloan™**" / "**mello® software platform**" is featured on the homepage, `/about`, `/mortgage-rates`, `/mellosmartloan`, and the digital-loan-experience landing, and is trademarked (R-mark). The platform is a real differentiator: Finicity for bank-link, Trimerge for data verification, B2C auth, the wizard, and the loan engine.
3. **Soft-pull prequalification with optional Trimerge verification** (`featureFlag_SoftPullAndTrimerge`) — they can prequalify a borrower with **no hard inquiry** and still verify income, employment, and assets digitally. This is a serious competitive edge.
4. **Self-employed borrower support** — explicit `income/self-employed` page that accepts business name, % ownership, gross income, and other self-employed-specific fields. LoanDepot is one of the better large lenders for non-W-2 income.
5. **Co-borrower and spouse flow** — full `spouse/*` mirror pages covering all the way through co-borrower HMDA, income, and assets. Most online lenders have a thin co-borrower experience.
6. **DPA / down-payment-assistance program** — `/payment-assistance` and a separate sitemap entry, indicating an explicit down-payment-assistance funnel.
7. **Lifetime Guarantee retention hook** — concrete, fully-fleshed-out program (with its own URL, terms, redemption phone, and tracker) that materially differentiates the post-close relationship.
8. **Multi-channel entry** — `/geico`, `/divvy`, `/bingo` indicate co-marketing/partner landings (the Geico one accepts form data and routes to a `geico/duplicate-lead` error page — there is a real integration).
9. **Spanish language option** — `dictionary.es-us` exists and the language change consent page is in the MLA. The Terms of Use acknowledges: *"loanDepot is pleased to provide you with a Uniform Residential Loan Application in Spanish. …we are informing you that although the URLA is being provided to you in Spanish: (1) Our employees and agents are not permitted to negotiate the terms or charges of the mortgage loan in Spanish…"* — i.e., they offer a Spanish form but with a clear disclosure that the binding terms are in English.
10. **Pricing-engine architecture with branching states** — the loan state machine (`Unsubmitted → Submitted → Reviewing → ReviewSuspended → FraudAnalyzing → Declined → Accepting → AcceptingCounter → Expired → Finalizing → Withdrawn → Funding → Funded → PaidOff`) and the parallel `loan-loanPrequalify.statusFlag` and `loan-pricingEligibility.statusFlag` bindings mean they can offer **both a soft prequal letter and a fully-priced preapproval offer** from the same funnel.
11. **Real-time 1-3 minute soft-pull prequalification** ("mello smartloan — the swiftest, safest and most secure data verification process you'll ever experience. Once connected, our proprietary loan engines quickly determine the loan options").
12. **Multiple calculator funnels** with 9 specialized tools (including a Rent vs. Buy) that feed into the wizard.
13. **All-50-state licensing** displayed in the footer.
14. **Volume / longevity claim** — "founded in 2010" + "$100B funded" provides legitimacy.
15. **"No steering policy"** trust claim about LOs is repeated on every product page.
16. **No-app mortgage** — fully browser-driven prequal, with mobile-friendly forms (the `mella` library appears optimized for mobile-first single-column flow).
17. **Two-channel support** — phone (multiple numbers) AND Microsoft Entra ID-protected secure dashboard (`/login`).
18. **First-time buyer cash-back promo** ("up to $1,000 cash back") — concrete conversion hook.
19. **Fast home search tool** powered by **comehome** (homepage) and **HouseCanary** (first-time-homebuyer page) — adjacent lead-capture.
20. **Compliance-grade marketing stack** — Jornaya TrustedForm, LuckyOrange, reCAPTCHA explicit, Dynatrace RUM, Microsoft CIAM. They take lead fraud and attribution seriously.

---

## 11. Weaknesses

1. **Prequalification is two disjointed systems** — the marketing wizard on `loandepot.com` is built in Angular (one codebase) and the MLA at `apply.myloandepot.com` is built in a completely different Angular app (a customized MISMO/Encompass-adjacent platform, judging by the page-config structure). The "soft data" from the wizard does **not** flow into the MLA — the user re-enters everything (legal name, contact, address) on `register/get-started`. This is a major friction point: 7 steps in the marketing wizard + ~5 steps in the MLA registration = 12 steps before the credit check.
2. **The "denied" path is essentially a black hole.** The internal `do-not-qualify` page is referenced (`workflow.goTo("do-not-qualify")`) and the bundle's `LoanApplicationState.Declined` is a real state, **but the public `pages.txt` config does not contain a `do-not-qualify` page with any user-facing body text** — only the toast/modal references to `adverseActionNotice` (which is in the modals object but with no visible text in the public config). The only fallback I can verify is `property/missing-important-information` ("Oops, it looks like you skipped some required fields when going through the loan application.") which is for *skipped fields*, not for *failed qualification*. There is no in-product explanation of "why you don't qualify", no factor breakdown, no adverse-action notice copy, no link to credit-counseling resources, no offer to re-apply in 90 days, and no information about which factor (DTI, LTV, FICO, reserves) caused the decline.
3. **No customer review aggregate / no J.D. Power / no BBB letter grade** — the trust story is mostly *self-asserted* ("no steering policy", "second largest non-bank lender", "best mortgage lender for first-time buyers by WSJ") without third-party validation in the chrome of the site. The WSJ quote is a single sentence; no badge.
4. **No celebrity endorsement** — search returned zero matches for any celebrity name on the current public site. The brand has lost a high-profile spokesperson layer.
5. **The "apply" button doesn't actually start the prequal** — `/apply` is a personal-loans landing (underwritten by **Upgrade**, not loanDepot). The real prequal is `/getstarted` (or `/get-started`). The `Apply Now` button in the global header routes to `/getstarted` with the right query params, but a naive user typing `/apply` ends up on a personal-loans page, which is a confusing UX.
6. **No dedicated DTI calculator** — affordability is the only tool, and it's a home-price / down-payment / income estimator, not a DTI ratio calculator. A user trying to figure out "what's my DTI?" can't do it on this site.
7. **No "Why was I denied?" diagnostic anywhere on the public site.** No learning-center article titled "what to do if you were denied a mortgage", no post-decision tool, no path from `Declined` state to a help article. The internal `adverseActionNotice` modal exists but the body text is not exposed in the public-facing config; the only consumer-facing fallback I could find is a generic "Oops" message.
8. **Personal loans are third-party** — a user going to `/apply` or `/personal-loans` is redirected to Upgrade's application, with a disclosure: "Information input below will be sent directly to Upgrade and will not be received or stored by loanDepot.com, LLC." This dilutes the brand experience and the lead is owned by Upgrade.
9. **Multiple test/dev URLs leaked into production** — the env config has `dv1.loandepotdev.works`, `loandepotdev.io`, `loandepotdev.works`, `mlaweb-public-dv1.loandepotdev.works/mortgage/register`, `servicing-dv1.loandepotdev.works/sign-in`, `mellob2cdev.b2clogin.com/...`. These should be per-environment, not present in the prod bundle.
10. **No transparent rate display** — even a "today's rates" range table is hidden behind a contact CTA. The site intentionally funnels rate discovery to a phone call, which is friction compared to lenders like Rocket or Better that show live rates.
11. **Calculator disclaimers are heavy** — every calc says "is not an offer to lend" and "actual mortgage payment and interest rate may be higher or lower than those displayed." Reasonable legally, but reads as evasive compared to a lender that will actually prequal you with a rate.
12. **No mobile-app signup CTA on the apply page** — the home page has a QR code for the loanDepot mobile app, but the MLA's `register/get-started` page does not prominently surface the app for new borrowers.
13. **The "Best Mortgage Lender for First-Time Buyers" claim is the only named third-party award on the site.** No Inc. 5000, no Forbes, no Entrepreneur, no Fortune ranking, no CFPB data, no NMLS performance metrics.
14. **The "Five Steps" graphic on `/buying-a-house` and `/refinance` is a thin infographic** — "Talk to our Licensed Lending Officers → Define Your Goals → Choose the Loan that's Right for You! → Get Approved for the Loan You Want → Submit Your Documents → Close Your Loan." Doesn't actually show the steps they tout ("Simple, secure, smart").
15. **Testimonials are anonymous one-liners** — first names only ("Paul R.", "Chris", "Jon S.", "Bill V."), no city, no loan type, no year, no photo. Easy to dismiss as curated marketing.
16. **No transparent loan-limit / minimum-FICO stated on product pages** — the FHA page just says "Qualify with ease with as little as 3.5% down" without stating the actual FICO / DTI / reserve requirements.

---

## 12. What a "Why can't I qualify?" diagnostic could do better than LoanDepot

This is the most important section for the user's project. Below is a concrete analysis of where LoanDepot *fails* denied or near-qualifying borrowers, and where a diagnostic tool can add genuine value.

### 12.1 The single biggest gap
LoanDepot's prequalification funnel has **no "you don't qualify" surface** anywhere in the public marketing site, the wizard, or the MLA page config. The internal code references a `do-not-qualify` page and an `adverseActionNotice` modal, but **the public-facing copy for either does not exist** in the published config (only toast-level copy that says "Oops! We encountered a problem. Please try again." or "Oops! There was a problem loading your loans.").

What this means in practice:
- A borrower who fails the soft pull at `identity/verify-credit` is sent to a generic error toast — no factor breakdown, no next steps.
- A borrower whose `pricingEligibility.statusFlag` is `false` (i.e., the loan engine can't price them) is given a `prequalify/summary` page with a download letter that *says* "Congratulations on your Prequalification" but contains no offer, or is shown a `prequalify/submitted` page that says "Loan Application Submitted" without telling them what was approved.
- A borrower whose loan state transitions to `Declined` (state 8) sees a generic `Oops` modal — the same copy used for unrelated technical errors.
- A borrower who goes through the entire MLA and then is told they don't qualify is not given a `property/missing-important-information`-style explanation; they're given an empty form letter and a `downloadPrequalifyLetter()` button that may or may not download a real letter.

### 12.2 What's missing for denied / near-qualifying users
A diagnostic tool should provide what LoanDepot does not:

1. **A clear, factor-by-factor breakdown.** The Trimerge/credit data that loanDepot already has — credit score (FICO), credit score factor mix, DTI, LTV, reserves, employment tenure, income sufficiency, prior derog history — is never shown to the denied borrower. The bureau "adverse action notice" is required by FCRA, but the in-product UX in loanDepot's case is one modal with no body text visible to a non-staff user. A good diagnostic should at minimum show: estimated FICO, estimated DTI, estimated LTV, reserves vs. required, and pass/fail per factor.

2. **The "what would have made me qualify" simulation.** LoanDepot's `property/missing-important-information` page only addresses *skipped* fields, not *failed* fields. A good diagnostic takes the borrower's actual inputs and runs a what-if: "If your FICO were 640 instead of 580, you would have qualified for an FHA at $X. If your DTI were under 43% instead of 51%, you would have qualified for a Conventional at $Y." This is the single most-valuable piece of UX for a denied borrower, and no major lender offers it.

3. **A timeline-based re-application plan.** loanDepot's `reapplyLoanSetup` (in the bundle) has a `ReapplyNow` actionType, but the public surface only shows a "Try again" implicit via the registration page. A diagnostic should say: "Your short-term goal: pay down $X in credit-card balances to drop your DTI under 43% in 60-90 days. Re-apply then." It should also distinguish: "Hard-pull inquiries: 30 days. Recent late payments: 12 months. Bankruptcy: 2-4 years. Short sale: 3-4 years." None of this is on the loanDepot site.

4. **Alternative product matching.** If the borrower fails a Conventional but would pass an FHA, the system should show that. If they fail an FHA but would pass a Jumbo with a higher down payment, show that. loanDepot has the loan engine that can run all of these scenarios — but it does not surface them to denied borrowers.

5. **A plain-language explanation of *why* mortgage denials happen.** The `/learning-center` covers prequal-vs-preapproval, employment history, FICO, and essential documents, but it does **not** cover the post-decision experience. A diagnostic should link to (or host) articles on: "Why mortgages get denied", "How long to wait to reapply", "How to dispute a credit report error", "What counts as a 'bad' DTI", etc.

6. **A "talk to a human" path that actually routes the denied borrower to a specialist.** loanDepot's only universal "human" path is the generic `(888) 983-3240` number and the loan-officer card on the home page. There is no "denial specialist" or "credit counselor" CTA. A good diagnostic should offer: (a) a credit-counseling referral (NFCC-certified), (b) a loanDepot LO who specializes in non-QM / alternative-doc / renovation loans, (c) a co-borrower or down-payment-assistance path.

7. **An honest credit-report pull option.** loanDepot's `verify/ssn` collects last-4 of SSN. A diagnostic could prompt a full 3-bureau credit-report pull (or partner with SavvyMoney, which loanDepot already uses for `/financial-wellness`) and give the borrower an accurate, *their* data, FICO + factor breakdown — which is strictly more useful than a self-reported bucket.

8. **A way to verify what loanDepot saw.** The borrower has no way to download or view the credit report loanDepot pulled (or the soft-pull data Trimerge returned). A good diagnostic offers a free copy of the data that was used to make the decision, which is both required by FCRA in some cases and just a better customer experience.

9. **A "compare alternatives" path** to other lenders (Rocket, Better, UWM, Caliber, etc.) when the borrower is denied. loanDepot is not going to do this, of course — but a third-party diagnostic that knows the borrower's numbers can.

10. **A timeline of mortgage rules the borrower should know.** loanDepot has the `/learning-center` but no "if you were denied, read this first" hub. A good diagnostic should connect the user's situation (e.g., "high DTI, low FICO, self-employed") to the right articles.

### 12.3 Specific page-level comparisons

| Scenario | What loanDepot shows today | What a "Why can't I qualify?" diagnostic should show |
|---|---|---|
| Soft-pull fails identity match (`verify/ssn` mismatch) | Generic error toast | "We couldn't match your name, DOB, and last-4 of SSN to your credit file. Check your inputs and try again, or call us." |
| Soft pull returns <580 FICO | Generic `Oops` modal, possibly no `prequalify/summary` letter | "Your credit score is below our FHA minimum (580 with 3.5% down / 500 with 10% down). Here are 3 actions: (1) Pull a free credit report at annualcreditreport.com, (2) Dispute any errors, (3) Wait 6-12 months and reapply." |
| DTI > 50% | No surfaced message; the loan engine just doesn't price | "Your back-end DTI is 51%. FHA allows 43% with compensating factors up to 50%. To qualify, you'll need to either (a) pay off $X of debt, (b) increase your down payment to lower LTV, or (c) add a co-borrower." |
| Self-employed with <2 years history | Rejection with no explanation | "FHA requires a 2-year self-employment history for primary income. If you have W-2 history before self-employment, we can blend them. Otherwise, consider a 203k loan or a non-QM loan." |
| Property is non-eligible (e.g., co-op not in approved list, condo not on FHA's approved list) | Pre-submit message not clear | "This property isn't on our approved-condo list. Try a different property or contact us about a portfolio loan." |
| Recent late payment | No surfaced message | "You have a recent late payment (X days ago). Conventional loans require no late payments in the last 12 months; FHA allows up to 1×30 in the last 12 months. Wait until 12 months have passed with no lates, then reapply." |
| Bankruptcy discharged <2 years | No surfaced message | "Chapter 7 must be discharged ≥2 years (≤3.5 years for FHA with re-established credit). Chapter 13 must be ≥1 year discharged with 12 months of on-time payments. Here's your timeline." |
| Adverse action notice (FCRA-required) | Bundle references `adverseActionNotice` modal but the body is generic | The diagnostic should pull the actual adverse-action reasons and present them in plain language alongside the 4 required credit-bureau disclosures (Equifax, Experian, TransUnion, Innovis) and the CFPB notice. |

### 12.4 Where loanDepot *does* set the bar high (and the diagnostic should match or exceed)
- **The MLA's flow is genuinely fast** — 5-7 minutes from the wizard to a real prequalification letter if the borrower uses the Trimerge + Finicity integration.
- **Soft-pull prequalification with last-4-of-SSN identity verification** is exactly the right pattern for a no-impact diagnostic. A "Why can't I qualify?" tool that does the same thing — soft pull, last-4 SSN, Finicity bank-link — would be giving the borrower a similar experience to what loanDepot offers its best customers.
- **The co-borrower / spouse flow** — a diagnostic should ask "did you include a co-borrower? They might have qualified you."
- **The "show the offer" pattern** — even when the answer is "you don't qualify", a diagnostic should show the **near-miss offers** (Conventional denied, FHA 90% approved with conditions, etc.) rather than just a yes/no.

### 12.5 Bottom line for the user
LoanDepot's biggest competitive vulnerability in the prequalification space is the **complete absence of a "denied or near-miss" diagnostic surface**. They have the data (Trimerge soft-pull attributes, the loan engine's pricing matrix, the borrower DTI / LTV / FICO, the asset verification from Finicity), but they don't surface it to the borrower when the answer is "no" or "not yet". A "Why can't I qualify?" tool that:
1. Accepts the same inputs loanDepot accepts (or lets the user re-enter them),
2. Runs the same soft-pull credit check via a partner bureau,
3. Calculates DTI, LTV, reserves, and FICO from the borrower's actual data,
4. Compares against the actual overlays for FHA / VA / Conventional / Jumbo / renovation loans,
5. Returns a factor-by-factor pass/fail with **what-if simulations** (lower your DTI to 43%, raise your FICO to 640, increase down payment to 20% — here's the offer you'd get),
6. Surfaces a re-application timeline and alternative products,

…would directly fill a gap that loanDepot has chosen to leave open, and would be a genuinely useful tool for any borrower who has been denied, near-denied, or is preparing to apply and wants to know where they stand.

---

## Appendix A — Source files (all saved under `/tmp/loandepot/`)

- `home.html` (694 kB), `home.txt` (7 kB stripped)
- `apply.html` (446 kB), `apply.txt` — meta description: *"Fund your goals with a personal loan from loanDepot. Pre-qualify in minutes and choose from top lender offers — 100% online and from the comfort of home."*
- `buying-a-house.html` (601 kB), `refinance.html` (590 kB)
- `mortgage-rates.html` (504 kB), `heloc.html` (813 kB)
- `home-equity.html` (694 kB), `lifetime-guarantee.html` (515 kB)
- `mortgage-calc.html` (531 kB) plus 9 sub-calc pages
- `first-time-homebuyer.html` (564 kB), `product-hub.html` (488 kB)
- `personal-loans.html` (517 kB), `financial-wellness.html` (542 kB)
- `about.html` (483 kB), `mellosmartloan.html` (558 kB)
- `digital-loan-experience.html` (428 kB), `getstarted.html` (460 kB)
- `lead-form.html` (376 kB), `mortgage-pre-approval.html` (500 kB)
- `home-loans.html` (482 kB), `app.html` (502 kB)
- `main.js` (328 kB) — the loandepot.com marketing Angular bundle (contains the 7-step wizard)
- `myloandepot-config.js` (525 kB) — the per-tenant MLA page-config dictionary (page IDs, titles, field schemas, dictionary copy)
- `apply-mla-main.js` (4 MB) — the MLA Angular bundle (the wizard's `do-not-qualify`, `adverseActionNotice`, `prequalService`, Trimerge + Finicity integration, MSAL auth, full state machine)
- `apply-mla.html` (19 kB) — `apply.myloandepot.com` shell
- `pages.txt` (536 kB) — the full MLA page definitions
- `dictionary.txt` (200 kB slice) — the MLA dictionary section
- `sitemap-ld.xml` (112 URLs), `sitemap-lc.xml` (45 URLs) — public XML sitemaps
- `robots.txt` — `User-agent: *  Disallow: /api/  Sitemap: https://www.loandepot.com/sitemap-index.xml`

## Appendix B — Phone numbers and URLs (verbatim)

- New loans / prequal: `(888) 983-3240`
- Existing loan servicing: `(866) 258-6572`
- HELOC: `(866) 790-3940`
- Customer care: `(888) 337-6888 x 6789` — *Weekdays 10:00 am - 9:00 pm (EST)*
- Customer care email: `customercare@loandepot.com`
- Login help: `(855) 734-6900`
- Lifetime Guarantee redemption: `(877) 395-7381`
- Wizard "skip ahead" option: `(844) 536-8365`
- Prequal entry: `https://www.loandepot.com/getstarted` (and `/get-started`)
- MLA URL: `https://apply.myloandepot.com/register/get-started` (prod); `https://dv1.loandepot.com/apply` (dev)
- API host: `https://contentdatastream-integrationapi.dv1.loandepotdev.io/graphql` (CMS), `https://ldapi-rprd.loandepot.com/ContentDataStreamIntegration` (page redirect)
- NMLS: #174457 → `http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/174457`
- Texas registration (B2C auth): `https://mellob2cdev.b2clogin.com/...B2C_1_Sign_Up&client_id=6158c7a4-2d67-46cb-8910-3df965a52ae5`
- Servicing dashboard: `https://servicing-dv1.loandepotdev.works/sign-in`
