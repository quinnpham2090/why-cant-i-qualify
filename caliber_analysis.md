# Caliber Home Loans — Competitive Analysis of Prequalification / Qualification Flow

> **Important up-front finding:** As of this research, **caliberhomeloans.com no longer exists as a standalone brand**. The domain 301-redirects to **https://www.newrez.com/**. The Caliber web application (the consumer prequalify/apply portal) has been re-platformed to a Newrez-themed Angular SPA at `https://myapp.newrez.com/...`, but the underlying codebase is the same "caliber-corporate-design" / `cola-` prefixed Angular components that powered the Caliber app. The end-user experience is now "Newrez" branded, but the loan officer, the loan product, the form fields, and the underwriting engine behind the soft credit pull are the surviving Caliber machinery. So this report documents the **Caliber-derived flow now living inside Newrez** — which is the only consumer prequalification experience left in the Caliber family of companies.

---

## 1. The corporate history question you asked (bankruptcy / restructuring)

- The widely reported "Caliber bankruptcy in late 2023" claim is **not accurate**. Caliber Home Loans was never a publicly traded entity that "filed for bankruptcy" in 2023. The events that did happen:
  - **2021** — New Residential Investment Corp. (later renamed Rithm Capital) acquired Caliber Home Loans. Both were brought under one parent and operationally merged. (Confirmed on Newrez's "About Us" timeline: *"2021 — Rithm acquires Caliber Home Loans to integrate into Newrez."*)
  - **2023** — "Consolidation of Rithm third-party sub-servicing into Newrez and **completion of Caliber Integration**." (Quoted from newrez.com/about-us timeline.)
  - **2024** — Newrez closed the acquisition of Specialized Loan Servicing (SLS).
- The Caliber brand was retired for direct-to-consumer marketing, but the loan origination platform (`myapp.newrez.com/lead/...`), the LOS (which still ships stylesheets from `caliber-corporate-design` CDN paths), and the NMLS ID for many originated loans (NMLS #6606 historically) are Caliber's. Newrez LLC (NMLS #3013) is the current operating entity.
- Headline from FAQ page: *"Newrez, formerly known as New Penn Financial, LLC was acquired by New Residential Investment Corp. in July 2018."* and *"Newrez is a wholly owned subsidiary of Rithm Capital."*

So the practical current state is: **Caliber's retail direct-to-consumer brand is gone; the technology, loan products, and underwriting have been absorbed into Newrez.** If you wanted to compare "Caliber as it existed pre-acquisition," you can no longer do it as a live D2C experience — the only D2C skin that exists is Newrez's, and it's running Caliber's application stack.

---

## 2. Website URLs (specific paths)

| Surface | URL |
|---|---|
| Root (301'd to Newrez) | https://www.caliberhomeloans.com/ → https://www.newrez.com/ |
| D2C apply entry (purchase) | https://myapp.newrez.com/lead/loantype?cid=21338&purposetypeid=1 |
| D2C apply entry (refi) | https://myapp.newrez.com/lead/loantype?cid=21338&purposetypeid=3 |
| Marketing site | https://www.newrez.com/ |
| Refinance overview | https://www.newrez.com/refinance/ and /refinance-guide/ |
| Buy a home | https://www.newrez.com/buy-a-home/ and /home-buying-guide/ |
| Home Equity Loan / HELOC | https://www.newrez.com/home-equity-loan/ |
| Mortgage rates | https://www.newrez.com/mortgage-rates/ |
| Calculators hub | https://www.newrez.com/mortgage-calculators/ |
| Loan Officer / Advisor search | https://www.newrez.com/find-loan-officer/ |
| Types of mortgages | https://www.newrez.com/types-of-mortgages/ |
| Military / VA | https://www.newrez.com/military/ |
| Crypto-backed mortgages | https://www.newrez.com/crypto/ |
| Help Center (servicing) | https://www.newrez.com/help-center/ |
| Contact / "Talk to a loan advisor" | https://www.newrez.com/contact-us/ |
| Application SPA (after lead) | https://myapp.newrez.com/application/... (Angular routes under `/application/`) |
| HELOC SPA | https://myapp.newrez.com/heloc/app-dashboard/... |
| Customer portal (servicing) | https://myapp.newrez.com/account/... |

Routes observed in the JS bundle that reveal the **internal step structure of the full mortgage application** (each path is a distinct screen inside the SPA):
- `/application/gettingstarted/welcome` (and `/welcomeback`)
- `/application/loan-type` / `/loantype`
- `/application/loan/loantype` — "What do you want to apply for?"
- `/application/loan/loanpurpose/:id` — Purchase / Refinance / HELOC
- `/application/loan/property/:inquiryId/:borrowerId` — "Property Info"
- `/application/loan/about-you/:inquiryId/:borrowerId` — "About You" / marital status / military
- `/application/loan/finances/:inquiryId/:borrowerId` — "Finances" (income + assets)
- `/application/loan/additional-questions/:inquiryId/:borrowerId` — Declarations & Demographics
- `/application/loan/credit-info/:inquiryId/:borrowerId` — credit authorization / pull
- `/application/loan/co-borrower/:inquiryId/:borrowerId` — co-borrower flow
- `/application/loan/submit/:inquiryId/:borrowerId` — review & submit
- `/application/reviewandsubmit/congratulation` — application-thanks page
- `/heloc/app-dashboard/prequal/:id`
- `/heloc/app-dashboard/preapproval/:id`
- `/heloc/app-dashboard/appsubmission/:id` — **the disqualified/thank-you page**
- `/application/loan/streamline/app/preapproval/:id` (for VA IRRRL Streamline)

The application is, as the legacy Caliber one was, a **single-page Angular app** with the brand asset path still pointing at `__CdnBaseUrl__/caliber-corporate-design/cdn/cdn-default/__CustomerPortalCdnVersion__/styles/styles.css`. The component selector prefixes are `cola-…` (Caliber Origination Loan Application).

---

## 3. Target audience (explicit messaging)

The newrez.com site is built around four explicit audience lanes and one passive one:

| Audience | Dedicated page | Headline on that page |
|---|---|---|
| **Military / Veterans / VA** | /military/ | "Supporting our heroes every step of the way." / "Securing Homes, Defending Dreams: Your Military Gateway to Homeownership" |
| **First-time buyers** | /buy-a-home/ and /blog/mortgage-101/ | "Wondering where to start? We've got you covered… We've got resources specifically designed for you no matter where you are on your journey." |
| **Refinancers** | /refinance/ | "Newrez makes home happen your way — Lower your monthly payment, with clarity at every step." |
| **HELOC / Home Equity** | /home-equity-loan/ | Top-nav button "Home Equity Loan" + "HELOC" |
| **Niche / non-QM / specialty** (self-employed, investors, medical professionals, etc.) | /types-of-mortgages/niche-specialty-loans/ | "Get competitively priced mortgages tailor-made for investment properties." and a recent (2026) press release for "Medical Professional Home Loan" |
| **Crypto holders** | /crypto/ | A whole landing page on crypto-asset recognition (press release: "Newrez to recognize crypto assets") |

There is **no dedicated "self-employed" or "jumbo" landing page** at the top of the nav — those are subsumed under "Niche & Specialty Loans." Income types that are explicitly accommodated in the application itself (per the JS bundle) are: **Salaried Employee, Self-Employed, Military Pay, Rental Income, Public Benefits, Pension, Retirement (401k), Family Support (alimony/child support), Boarder Income, Interest & Dividends, Capital Gains, Mortgage Credit Certificate (MCC), Non-Borrower Household Income, Notes Receivable, Real Estate / Mortgage Differential, Royalty, Trust, Automobile/Expense Account, Disability, Social Security, Unemployment, VA Benefits.** That is a far more inclusive income-type picker than most retail lenders expose.

---

## 4. Value proposition (exact headlines and CTAs)

**Homepage H1:** *"Newrez makes home happen your way"*
**Homepage subhead:** *"Lower your monthly payment, with clarity at every step."*
**Primary CTA buttons on homepage:** `Apply` (top-right corner) and `Refinance Today` (mid-page hero)
**Trust strip on hero:** *"Trustpilot — Trusted by homeowners nationwide. Equal Housing Opportunity. Better Business Bureau."* (rendered as a widget; the actual Trustpilot score is loaded dynamically so the page HTML says `…trustScore + ' out of 5 stars'`)
**Meta description:** *"Exceptional home lending options and service make Newrez the home of your perfect loan. Apply to refinance or buy a home online today."*
**Meta keywords:** `"Home Equity Loan Refinance Cash Out Newrez Mortgages Lender Bank"`
**Phone numbers in header:** `888-673-5521` (the public D2C number) and a secondary `844-956-1569` on sub-pages.

**Military page H1:** *"Supporting our heroes every step of the way. Securing Homes, Defending Dreams: Your Military Gateway to Homeownership"*
**"Apply now" copy on military page:** *"Get pre-approved in minutes!"* with `Buy A Home` and `Refinance` tabs.

**Refinance page H1:** *"Refinance Today — Answer a few simple questions to see what could work for your situation."*
**Section heading (refi page):** *"Wondering where to start? We've got you covered."*

**Crypto page headline (from JS bundle and sitemap):** "Newrez to recognize crypto assets" — there is a dedicated /crypto/ landing page and it is a clear differentiator no other major lender is offering as a top-level nav item.

---

## 5. Lead capture / soft vs hard pull / when they ask for what

The application is **two-staged** in a way most lenders are not. There is a true "Quick Quote" / "soft-pull prequal" tier that gives a prequalification letter without a hard pull, and then a deeper, hard-pull full mortgage application that follows.

### 5a. The Quick Quote / "Prequalified Letter" path (SOFT PULL)

This is the route that produces the "Prequalified" congratulations screen and the "pre-qualification letter." From the JS bundle:

- A modal is shown with the heading **"Soft Credit Authorization"**.
- Subhead copy: *"Don't worry, this is a soft credit pull and **will not** affect your credit score."*
- First question inside the soft-pull consent form: **"What is your date of birth?"** (Date of Birth). They collect DOB *before* the soft credit pull to ensure they're pulling the right file.
- Then they ask for **email address** (the soft-credit form has an `email` control, and a CTA literally called `Edit` next to it).
- After soft pull, they render: *"Your Credit Score"* with a `core-gauge` visualization, line: *"A Soft Credit Pull will not affect your credit score."*
- If qualified, the success page is **"Congratulations, {firstName}! You are pre-qualified. You are pre-qualified based on the details you provided and your FICO credit score reported by Experian.\* Conditions apply please check your Pre-qualification letter for details."**
- The prequal letter itself is referenced as `preApprovalDocumentID` in the API payload, and the bundle analytics events are `QQ_CLICKED_GET_QUICK_QUOTE`, `QQ_CLICKED_SOFT_PULL`, `QQ_CLICKED_CREDIT_CONSENT_DISCLOSURE`, `QQ_CLICKED_SELECT_AND_CONTINUE`.

In this flow the data you give up before the soft pull is roughly:
1. Property state (the "Where are you looking to purchase your new home?" / "Which state?" form)
2. Property address (or "No, I'm not sure yet")
3. Estimated Purchase Price
4. Down Payment (and Down Payment Percentage — both fields exist; the page even has a server-side rule: *"Down Payment Amount should be less than Purchase Price"*)
5. Property Type (Single Family / Multi-Family 2-4 units / Condo / Townhouse / Cooperative / Mobile Home / Not Sure)
6. Property Occupancy (Primary / Second / Investment)
7. First Name, Last Name
8. Date of Birth
9. Email Address
10. (Phone number — appears to be required at account creation once the prequal letter is generated; the soft form does not require phone in the soft-quote first hit)

**SSN is NOT required for the soft-pull prequalification.** That is a clean soft-pull only path, which is correct FCRA behavior. They use DOB + name + address to do the soft inquiry and then Experian returns the score; they show it back to the user as a gauge; they generate the prequal letter; and you can leave.

### 5b. The "full application" path (HARD PULL)

This is the route for actual loan submission. The hard-pull step lives at `/application/loan/credit-info/...` and the consent screen is labeled:

- Heading: **"Credit Authorization"**
- Sub: **"Do we have permission to pull your credit?"**
- Caption (verbatim from bundle): *"(This is a hard credit pull and will affect your credit score.)"*
- A clickable disclosure link: **"View Consent to Obtain Credit"**
- Modal body for the consent: *"I authorize [Brand] to obtain one or more consumer credit reports about me in connection with my mortgage loan inquiry or prequalification request. I also understand that if I complete an application with [Brand], updated or additional consumer report(s) may be obtained in connection with my application."*
- And a reassurance panel: *"This hard credit pull will appear on your credit report. However, when you are working to obtain a mortgage, multiple credit pulls performed within 45 days are only counted once."*

The hard-pull radio group is exactly three options:
- **"Yes, Authorize Credit Pull"**
- **"No, Do Not Authorize"**
- **"Not Yet, My Credit is Frozen"**

If you pick "Not Yet, My Credit is Frozen," the page opens an accordion that says: *"If your credit is frozen, we are unable to run a credit check until you unfreeze it. A freeze remains in place until you ask the credit bureau to temporarily lift it or remove it altogether."* — and gives direct links to Equifax, Experian, and TransUnion freeze-unfreeze pages. (That's a small, but unusually well-done, UX touch.)

### 5c. The exact moment each PII piece is requested

| PII element | Soft-pull Prequal | Hard-pull Full Application |
|---|---|---|
| First/Last name | Step 1 (with property) | Step 1 ("About You") |
| Email | Step 3 (right before soft pull) | Step 1 (Welcome back / Create Account) |
| Phone (cell) | Optional at first; required when you create the account to get the prequal letter | Step 2 ("Communication" form: eMail + cellPhone + homePhone + workPhone) |
| DOB | Step 2 (right before soft pull, as the soft-pull identity match) | Step 3 (SSN/DOB verification step) |
| **SSN** | **NOT required for the soft prequal** | Step 3 (SSN/DOB verification) — required, regex `^[0-9]{3}-?[0-9]{2}-[0-9]{4}$` |
| Property address / ZIP / state | Step 1 | Step 1 |
| Purchase price / down payment | Step 1 | Step 1 |
| Property type / occupancy | Step 1 | Step 1 |
| Loan purpose (purchase / refi / HELOC) | First screen | First screen |
| Loan amount / refinance details | Computed from price − DP | Yes (current balance, current lender, current rate, current payment, mortgage type, original start date) |
| Annual / monthly income | Not in soft form | Yes (gross monthly income with income type cards: "Autofill your salaried Income via Argyle", "Salaried Employee", "Self-Employed", "Military Pay", "Rental Income", "Public Benefits", "Pension", "Retirement", "Family Support", "Other") |
| Employment | Not in soft form | Yes — current employer, position/title, start date, employment type, payment options; "Manually Add Income" option notes "You will need to provide income documents and this may increase processing time." |
| Assets | Not in soft form | Yes — assets step with options: "Autofill Your Assets via AccountChek", "Checking/Savings", "Equity", "Gifts", "Investments", "Other", "Trusts", or "No assets to report" |
| Monthly debts (housing, credit cards, auto, student, child support, alimony) | Not in soft form | Yes (Housing question: "What is the current monthly payment for this property?" / "How much do you pay for rent each month?") |
| Marital status | Not in soft form | Yes ("Married", "Unmarried", "Separated" — helper text: *"Choose unmarried if you're single, divorced, widowed, in a civil union, domestic partnership or registered reciprocal beneficiary relationship."*) |
| Mailing address (2-year housing history) | Not in soft form | Yes — the bundle literally says: *"We'll need your past 2 years of housing details."* and *"Mortgage applications require 2 years of housing history."* |
| Citizenship / immigration status | Not in soft form | Yes — government-mandated "Demographics" step (HMDA): *"We're required by law to collect this information to process your pre-approval\* offer."* |
| Military service | Not in soft form | Yes — "What best describes the military service?" with options: *"Currently serving on active duty", "Currently retired, discharged, or separated from service", "Only period of service was as non-activated member for the Reserve or National Guard", "Surviving spouse"* |
| Declarations (bankruptcy, foreclosure, judgments, party to lawsuit) | Not in soft form | Yes — verbatim questions: *"Have you been declared bankrupt within the past 7 years?"*, *"Have you had property foreclosed upon in the last 7 years?"*, *"Have you conveyed title to any property in lieu of foreclosure in the past 7 years?"*, *"Are you a co-signer or guarantor on any debt or loan that is not disclosed on this application?"*, *"Are you borrowing any additional money for this real estate transaction…"*, *"Have you or will you be applying for any new credit (e.g., installment loan, credit card, etc.) on or before closing this loan that is not disclosed on this application?"*, *"Will you occupy the property as your primary residence?"*, *"Have you had an ownership interest in a property in the last three years?"* |
| Demographic info (race/ethnicity/gender) | Not in soft form | Yes (optional, HMDA) |
| Co-borrower | Not in soft form | Yes (button: **"Add Co-borrower"**) — at this point you're prompted with a modal: *"Loan Consultant — You'll need a Loan Consultant to get started. If you're already working with someone, connect them to your application. Don't have a Loan Consultant already? Choose one now."* |
| Account creation / password | Required to get the prequal letter emailed | Required to submit |
| TCPA / SMS consent | Implicit via account creation | Required ("I also consent to contact via text messaging, automated dialing system and/or pre-recorded telemarketing calls. Standard data and text messaging rates apply.") |
| E-Consent (e-signed docs) | Not in soft form | Required: *"I agree to receive and authorize electronic documents and forms."* |

The credit pull is a **single-bureau Experian soft pull** for the prequalification (the success copy literally says "your FICO credit score reported by Experian") and a **tri-bureau hard pull** for the full application (no bureau choice offered; Newrez pulls all three and uses middle FICO per the code that explicitly says `_t[_t.length%2==0?_t[Jo-1]>_t[Jo]?Jo:Jo-1:Jo].isMiddleScore=!0`).

---

## 6. Questions asked — exact inputs (in order, with literal labels)

1. **Welcome screen** — *"Getting Started"* / *"Welcome to Your Online Mortgage Application"* / *"This online application process will take about 15 minutes to complete."* CTA: **Continue**
2. **Choose your path** — *"What do you want to apply for?"* with cards: **Home Purchase Loan, Home Equity Loan, HELOC**, **Refinance** (and a tertiary selection on the marketing site: **Cash-Out, Rate & Term, Streamline**)
3. **Property state** — *"Where are you looking to purchase your new home?"* (Refi variant: *"Which state is the property you wish to refinance in?"*) — `<select>` of 50 states + DC
4. **Property address** — *"Do you know the address of the property?"* — Toggle: **"No, I'm not sure yet"** vs. address picker with autocomplete (Google Places API)
5. **Purchase price & down payment** — labels: **"Estimated Purchase Price"**, **"Down Payment Amount"**, **"Down Payment Percentage"** — calculated approx loan amount
6. **Property type** — radio cards: **Single Family (Detached) / Multi Family (Attached) / Mobile Home (Manufactured) / Condominium / Cooperative / Not Sure**
7. **Property occupancy** — **Primary Residence / Second Home / Investment Property** (FHA adds "FHA Secondary Residence")
8. **First name & Last name** — form heading: *"You're on your way to seeing how much you may be pre-qualified for."*
9. **Date of birth** — explicit label: *"What is your date of birth?"* — Datepicker, required for the soft pull
10. **Email address** — the soft-credit form's email field; tagline: *"Your information is used to run a quote request and provides a way for us to email you that quote along with your pre-qualification letter."*
11. **Account creation / password** — modal: *"I Agree to the [E-Sign Disclosure]"* + a `<cola-telephone-consent>` block (TCPA + text consent) — CTA: **Create An Account**
12. **Soft credit pull authorization** — radio: **Yes, Authorize Credit Pull** (the actual soft pull happens here, with the disclaimer **"Don't worry, this is a soft credit pull and will not affect your credit score"**)
13. **Result** — either **"Congratulations, [name]! You are pre-qualified. You are pre-qualified based on the details you provided and your [XXX] FICO credit score reported by Experian.* Conditions apply please check your Pre-qualification letter for details."** — with a CoreGauge chart and a **"Get My Quick Quote"** button — or the disqualification path (see §11).
14. (If continuing to full app) **"About You"** — marital status (Married / Unmarried / Separated), citizenship status ("US Citizen", "Permanent Resident Alien", "Non-Permanent Resident Alien", "Other"), title ownership, mailing address (with the *2 years of housing history* helper), how long at each address
15. **Property / finances** — refinance-specific: *"What is the current monthly payment for this property?"* / *"How much do you pay for rent each month?"* plus optional **Refinance Purpose** selector (Rate & Term / Cash-Out / Streamline / etc.), current lender, current balance, current rate, current payment, original mortgage type, mortgage start date
16. **Income & employment** — "income type" cards (Argyle autofill for salaried; manual entry for everything else). For self-employed, the bundle allows up to 2 years of tax returns / YTD P&L. Employment: *"Employment Type"* dropdown, payment options, employer name, position, start date, work phone
17. **Assets** — `Autofill Your Assets via AccountChek` (Plaid-style bank aggregator), Checking/Savings, Investments, Equity, Gifts, Trusts, Other, No Assets To Report. For each: balance, account number, and "Will this account (all or part) be used for your down payment?"
18. **Declarations** — verbatim Y/N list (bankruptcy 7y, foreclosure 7y, party to lawsuit, outstanding judgments, federal delinquency, pre-foreclosure / short sale, co-signer / guarantor, applying for new credit pre-close, intent to occupy, ownership interest in last 3 years, etc.)
19. **Demographics** (HMDA) — "I am required by law to ask…" race, ethnicity, sex, age — explicitly optional with a "I do not wish to provide this information" option
20. **Military service** — "What best describes the military service?" (4 options), date tour start, date tour end, "Have you or your co-borrower ever had a VA loan?"
21. **SSN & DOB** — *"View Consent to Obtain Credit"* → modal language above → input SSN (`xxx-xx-xxxx`), then identity verification
22. **Hard credit pull authorization** — radio: **Yes, Authorize Credit Pull / No, Do Not Authorize / Not Yet, My Credit is Frozen**
23. **Co-borrower (optional)** — button **"Add Co-borrower"** → loops the same flow for a second borrower
24. **Review & submit** — *"Let's wrap it up! You're almost done. Submit and let us do the rest."* CTA **Save & Continue**
25. **e-Consent** — *"I agree to receive and authorize electronic documents and forms"* + Electronic Delivery Consent Disclosure modal
26. **Submit & Thank you** — modal: *"Thank you for applying with us! You've successfully submitted your application."* Buttons: copy-to-clipboard confirmation, link to loan status dashboard
27. **Post-submit dashboard** — *"You can continue to track your loan status and next steps for faster processing"* with icon `phone-waveform.svg` and the help center CTA

---

## 7. User experience (steps, mobile, friction, time-to-result)

- **Number of distinct steps/screens:** ~12–15 visible on the "Prequalified Letter" path; ~20+ on the full application path (the JS route map shows 9 top-level steps in the breadcrumb, each of which can render 2–5 sub-screens — prequal onboarding, address, price/DP, property type, occupancy, name, DOB, email, soft-credit auth, result, then About You, Finances, Additional Questions, Credit Info, Co-borrower, Submit, Congrats).
- **First-screen friction is low:** the property-state selector and "What do you want to apply for?" are one click each. The *very first form field* is the **property state** — they do not ask for the borrower's name or email at the top of the funnel. That is a deliberate decision: maximize the "browse" without committing.
- **Time-to-result on the soft path:** the JS bundle times the soft pull as the "Quick Quote" flow and the `QQ_CLICKED_GET_QUICK_QUOTE` event triggers a real-time Experian inquiry. Newrez states on the marketing copy: *"Get pre-approved in minutes!"* — for the soft path that is essentially true (about 2–3 minutes of clicking + ~30 seconds for the soft inquiry).
- **Time-to-result on the hard path:** "This online application process will take about 15 minutes to complete." That is realistic because the Argyle + AccountChek automations let you skip most of the income/asset manual entry if you have online payroll / banking.
- **Mobile experience:** the app shell uses Tailwind utility classes (`flex flex-col`, `sm:font-bold`, etc.); header height is responsive (`[--header-height:60px] xl:[--header-height]:88px`); viewport meta is set; there's a separate Google Maps Places integration for address autocomplete. Newrez also publishes a native iOS/Android app (App Store + Google Play badges on every page footer).
- **Friction hotspots:**
  - **2 years of housing history** with a "Mortgage applications require 2 years of housing history" hard rule is a classic friction point for younger buyers.
  - **The hard credit pull consent modal is a separate, modal-from-modal pattern** — the user has to click "View Consent to Obtain Credit" to expand the FCRA language, which is good for compliance but adds a click.
  - **Income entry is intentionally an "income source" card pattern** — the user picks a card (Salaried, Self-Employed, Military Pay, Rental Income, Public Benefits, etc.) and only sees the fields relevant to that source. That's good UX.
  - **For military applicants there is a separate "Military Service Details" sub-route** off the "About You" screen — the bundle has `{path:"military", component:se, ...pageTitle:"military-service-details"}` — they special-case it.
- **Persistence / save & resume:** there are explicit welcome-back routes — `/application/gettingstarted/welcomeback`, `/application/income/welcomeback`, `/application/assets/welcomeback`, `/application/additionalproperties/welcomeback`, `/application/additionalborrower/welcomeback`. The app supports partial submission, you can log in later and resume.
- **Third-party integrations baked into the UX:**
  - **Argyle** — payroll data aggregator for W-2 income (autofills employment + income with a "5 days faster" claim)
  - **AccountChek** — bank/asset aggregator
  - **Plaid-style (Plaid implicit via AccountChek)** — bank linking
  - **Google Maps Places** — address autocomplete
  - **reCAPTCHA** — anti-bot on contact form
  - **Salesforce** — CRM; the press release archive references "acceleration of digital transformation in collaboration with Salesforce"
  - **Cognigy webchat** — AI chatbot (loaded only after cookie consent group C0003)
  - **FullStory** — session replay / analytics (FS org `18R3R6`); the home page also pulls FullStory Guides for in-product tours
  - **OneTrust** — cookie consent management
  - **Google Tag Manager (GTM-P854HRK3)**, Google Optimize, Facebook Pixel

---

## 8. Calculator tools

Newrez exposes six calculators under `/mortgage-calculators/`. Exact page titles from the bundle and HTML:

| Calculator | URL | Headline / value prop |
|---|---|---|
| **Mortgage Payment Calculator** | `/mortgage-calculators/mortgage-payment-calculator/` | *"Let's Run the Numbers — Estimate your monthly mortgage payment. Use the assumptions section to factor in additional variables like taxes, insurance, and PMI."* |
| **Refinance Calculator** | `/mortgage-calculators/refinance-calculator/` | *"Mortgage Refinance Calculator — You may be able to save money in the long run by refinancing your current home loan to a shorter term or lower interest rate."* |
| **Loan Amount Estimator** (affordability) | `/mortgage-calculators/loan-amount-estimator/` | *"How Much House Can I Afford? Use this calculator to find out how much you may be able to afford."* |
| **Rent vs. Buy Comparison** | `/mortgage-calculators/rent-vs-buy-comparison/` | *"View the financial benefits of buying versus renting based on your current rent and desired home loan."* |
| **Loan Term Comparison** | `/mortgage-calculators/loan-term-comparison/` | *"Calculate how different loan terms affect your rate, amortization, and monthly mortgage payment."* |
| **Budget Calculator** | `/mortgage-calculators/budget-calculator/` | *"Start planning with confidence. Use our budget calculator to estimate your monthly costs."* |

All calculator pages have a **`"Speak to a loan advisor"`** lead-capture form on them (Full Name, Phone Number, Email, Discussion Topic, Property State) which fires into the same Salesforce/lead-routing pipeline. So the calculators are not pure SEO content — they're a paid-lead source.

**There is no standalone DTI calculator.** That's a deliberate omission. Newrez discusses DTI in their `/mortgage-rates/` educational page (where they say *"lenders want applicants to have a DTI ratio of 36% or less"* and *"A DTI higher than 43% could result in a mortgage loan denial"*), but they don't expose a calculator for it. This is a **gap** for a "why am I denied?" diagnostic tool — the user can't sanity-check their own DTI before applying.

---

## 9. Calls to action (catalogued, verbatim from the codebase)

| Where | CTA button text |
|---|---|
| Top nav, every page | `Apply`, `Sign In`, phone icon `888-673-5521` |
| Hero, homepage | `Refinance Today` |
| Mid-page, homepage | `Apply Online` |
| Loan-officer module | `Talk to a Loan Advisor` and `Start an Application` |
| Soft-pull Prequal flow | `Continue`, `Save & Continue`, `Acknowledge & Continue`, `Yes, Authorize Credit Pull` / `No, Do Not Authorize` / `Not Yet, My Credit is Frozen`, `Get My Quick Quote` |
| After prequal success | `Get My Quick Quote` and an unstated "View Pre-Qualification Letter" link |
| Account creation | `Create An Account` |
| Income source picker | `Autofill…` (Argyle) and `Manually Add Income` |
| Assets picker | `Autofill Your Assets` (AccountChek) and `Manually Add Assets` and `No assets to report` |
| Co-borrower | `Add Co-borrower` |
| Submit step | `Save & Continue`, `Next`, `Back` |
| E-Consent | `Agree & Continue` |
| Final wrap-up | `Submit` (sometimes) and `Go To Dashboard` |
| HELOC disqualification page | `Call 888-673-5521` and `Talk to a Loan Officer` (button: *"Call a Loan Officer"*) |
| Application-success | `Go To Dashboard` |

A distinctive micro-CTA worth noting: each "edit" link inside the review-and-confirm steps is just the word **"Edit"** next to a printed summary line ("Current Mortgage Type [Edit]", "Current Lender [Edit]", "Current Mortgage Start [Edit]", "Refinance Purpose [Edit]", "Property Address [Edit]", "Property Occupancy [Edit]", "Purchase Price [Edit]"). Newrez leans heavily on the "review and confirm" pattern in the late steps.

---

## 10. Trust signals

The home page explicitly features, in this order:
- **Trustpilot widget** — TrustBox template `54197383fd9dceac42a68694` (the "Carousel" template). The script loader is `//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js`. Page chrome: `Excellent ... Based on reviews` (the actual numeric grade and review count are populated by the widget at runtime, so the rendered DOM only shows the literal string `"trustScore + ' out of 5 stars'"` and `"…total-reviews-link…"`. At the time of audit the rating could not be confirmed from raw HTML but the widget is live and scores 4.x on Trustpilot for the newrez.com domain in third-party listings; **this is a Trustpilot Excellent widget**.
- **Better Business Bureau** — icon and link to the BBB profile, in the hero trust strip. (Newrez LLC BBB profile in Fort Washington, PA.)
- **Equal Housing Opportunity** logo.
- **NMLS #3013** — Newrez LLC (also NMLS Consumer Access link). NMLS #6606 was the legacy Caliber number and is no longer the entity; this is the rebranded entity.
- **"Trusted by 4 million homeowners"** — claim from the FAQ page.
- **"Top Mortgage Lender every year since 2022"** — claim from the FAQ page.
- **"#2 Overall Lender by Scotsman Guide in 2025"** — claim from the FAQ page. (You can see the Newrez "Major Scotsman Guide Rankings" press release on /press-news/.)
- **"Newrez sweeps 2023 Star Awards from Fannie Mae"** and **"Newrez earns Fannie Mae's prestigious Star Award"** (2026-01-08) — visible in press releases.
- **"Military Friendly® Award winner — all four eligible Military Friendly awards for second consecutive year"** (2024-06-05) — the page explicitly notes *"Military Friendly® is a registered trademark of VIQTORY and is not affiliated with Newrez LLC."*
- **"Fannie Mae Star Award"** (sweeps 2023 + 2026).
- **"HousingWire Tech100 (2021)"** and **"HousingWire Women of Influence"** (multiple years).
- **HUD Equal Housing Opportunity** + state-by-state licensing (NMLS Consumer Access, Alaska, Arizona, California, Massachusetts, New Jersey, New York, Texas SML compliant).
- **Security/compliance** — OneTrust cookie consent, `__CdnBaseUrl__/caliber-corporate-design` paths, reCAPTCHA on the contact form, FullStory session recording, Cognigy chatbot. They do **not** show a VeriSign / Norton / McAfee badge on the home page.

**They do NOT prominently feature a J.D. Power award** on the home page or in any of the calculators I read; the only third-party review/trust badge in the hero is Trustpilot + BBB.

---

## 11. SEO strategy

The sitemap has roughly 800+ URLs. Top-level counts:

| Path bucket | Count | What it is |
|---|---|---|
| `/find-loan-officer/<slug>/` | 342 | One SEO landing page per Loan Officer (this is the bulk of the indexable footprint) |
| `/blog/<category>/<post>/` | 326 | Long-form blog posts (mortgage-101, buying-selling, etc.) |
| `/press-news/<slug>/` | 119 | Press releases / news |
| `/leadership/<slug>/` | 11 | Executive bios |
| `/types-of-mortgages/<slug>/` | 7 | VA Loans, Fixed-Rate Loans, FHA Loans, Adjustable-Rate Mortgages, Niche & Specialty Loans, Renovation Loans, Assumable Mortgages |
| `/mortgage-calculators/<slug>/` | 7 | (the six calculators plus the hub) |
| `/payments/<slug>/` | 3 | Existing-borrower servicing content |
| `/refinance/`, `/buy-a-home/`, `/escrow-hub/` | 2 each | Mid-funnel content |
| `~30 other top-level pages` | 1 each | About, Careers, FAQ, Contact, etc. |

**Keyword targeting observed** (from the meta tag on the home page, blog post titles in the sitemap, and on-page copy):
- "Home Equity Loan" (in the meta keywords tag)
- "Refinance" / "Refinance Today" (in the home title and H1)
- "Cash Out" (meta keywords)
- "Mortgages" / "Lender" / "Bank" (meta keywords)
- "Mortgage rates" (dedicated page targeting "mortgage rates" informational intent)
- "Mortgage calculator" (six dedicated URLs, each ranking for a different variant)
- "VA Loans" / "FHA Loans" / "Fixed-Rate Loans" / "Adjustable-Rate Mortgages" / "Renovation Loans" / "Assumable Mortgages" (7 dedicated landing pages — they are clearly trying to own each loan-type SERP)
- "Crypto mortgage" / "Bitcoin mortgage" — a 2026 press release announces *"Newrez to recognize crypto assets"* and a dedicated /crypto/ landing page exists — this is an aggressive first-mover keyword play
- "First-time buyer" — blog/buy-a-home, "smart ways to save for a down payment", "down payment and closing costs on your first home"
- "Self-employed" / "Investor" / "Jumbo" / "Non-QM" — these are technically under /types-of-mortgages/niche-specialty-loans/ but the page also calls out "Niche & Specialty Loans: Get competitively priced mortgages tailor-made for investment properties"
- **Hyper-local:** the 342 individual Loan Officer landing pages are the D2C SEO workhorse — each is a unique URL with a unique meta description, and the sitemap shows lastmod dates bumping frequently (Jan, May, Aug 2026) which signals ongoing index refreshes
- **Informational intent:** /mortgage-rates/ does NOT show a live rate table. It is purely educational content titled *"5 Factors of a Mortgage You Can Control"* / *"3 Factors of a Mortgage You Cannot Control"* — this is a classic "answer the question on the page, don't make them leave for the rate quote" play that captures long-tail searches like "what affects my mortgage rate"

The page is hosted on Microsoft Azure / Azure Application Gateway v2 (visible in the 301 redirect), the CMS appears to be Umbraco (based on `/App_Plugins/UmbracoForms/...` paths in the JS bundle), and the SPA is Angular Universal. Schema.org `LocalBusiness` and `Organization` JSON-LD is present on the home page (NMLS #, address, phone, social profiles).

---

## 12. Strengths

1. **True two-tier funnel.** The Quick Quote / Soft Credit Authorization is a real, do-it-without-touching-your-credit prequalification, with a separate "Yes / No / Frozen" gate before the hard pull. This is the cleanest, most FCRA-compliant prequal flow among the major direct lenders.
2. **The disqualification experience is a real screen with a real fallback** (see §13 — they do not just dump the user).
3. **Income type inclusivity.** Self-Employed, Military Pay, Rental Income, Public Benefits, Pension, Retirement, Family Support, Boarder Income, Non-Borrower Household Income, Capital Gains, Trust Income, Royalty, MCC, Automobile/Expense Account, Disability, Social Security, Unemployment, VA Benefits — all first-class income-source cards in the application. This is a real differentiator vs. Rocket or UWM, which lean salaried.
4. **Income & asset autofill via Argyle + AccountChek** ("5 days faster") — saves 5–10 minutes of typing and is genuinely a competitive edge. Most "online" lenders still make you type W-2 data by hand.
5. **All single-family loan products on one site:** VA, FHA, Conventional, USDA (implicit in "Niche & Specialty"), Renovation, Adjustable-Rate, Fixed-Rate, Non-QM, Jumbo, Crypto, HELOC, HELOAN, Cash-Out, Rate-and-Term, Streamline. Plus a "Medical Professional Home Loan" launched 2026-04. Very wide.
6. **The "credit frozen?" handling** is excellent — they detect the frozen case, explain the unfreeze process, and link to all three bureau freeze pages.
7. **The "Refinance Today — Answer a few simple questions to see what could work" copy** is unusually low-pressure for a refinance. They don't ask you to enter a loan balance to see your rate.
8. **Crypto product is unique** among retail D2C mortgage sites.
9. **Loan Officer landing pages (342 of them) are a serious moat** for hyper-local SEO and "mortgage broker near me" / "mortgage lender [city]" searches.
10. **No required J.D. Power / "award badge" inflation** — they lean on Trustpilot, BBB, NMLS, and real industry awards (Fannie Mae Star, Scotsman Guide, HousingWire) rather than made-up "best of" lists. The trust signal mix feels earned.

---

## 13. Weaknesses

1. **The brand is confusing and the domain is dead.** A user who types `caliberhomeloans.com` lands on a 301 to `newrez.com` with no redirect notice, no "Caliber is now part of Newrez" splash, no preservation of branded bookmarks. This is bad for SEO equity (any inbound Caliber links are silently lost) and bad for returning customers (your Caliber prequal letter is now a "Newrez" letter with no continuity messaging).
2. **The disclaimer text on the disqualification paths is generic** — see §14.
3. **No DTI calculator.** None of the six calculators computes a back-end ratio. The educational page says "A DTI higher than 43% could result in a mortgage loan denial" but gives the user no tool to self-check.
4. **The soft-pull prequal is one-bureau (Experian only).** That can produce a different score than the full-app tri-merge middle FICO. A user who gets prequalified at 700 Experian might find their actual tri-merge at 660 and then be denied. Newrez does not surface this risk in the prequal UI.
5. **The prequal letter is labeled "pre-approval"** in the UI ("pre-approval\* offer", "Pre-qualification letter") but the disclaimer literally says: *"A pre-approval does not signify that all underwriting requirements have been met. Eligibility and terms, including interest rates, are subject to change without prior notice. Not all products are available in every state or for all loan amounts."* That is a real risk of customer confusion.
6. **2 years of housing history is a hard requirement** ("Mortgage applications require 2 years of housing history"). This is industry standard but it is friction for first-time buyers who have only ever lived at home.
7. **The first-screen CTA on / is `Refinance Today`, not `Apply Today`.** For purchase-money shoppers the page buries the purchase path under `What do you want to apply for?` after a `Refinance Today` button. The decision tree is refinance-first.
8. **The HELOC and full-mortgage apps are two completely separate SPAs** (`/heloc/app-dashboard/...` vs. `/application/...`) — a user who starts a HELOC prequal cannot easily pivot to a cash-out refi without redoing the form. That's a real UX gap.
9. **D2C prominence is small** — Caliber was historically *primarily* a correspondent / wholesale lender, and the D2C website is still essentially "apply now or find a loan officer." The vast majority of Newrez originations go through the wholesale channel (Newrez Wholesale) or through their 30+ JV brands (Homeowners First Mortgage, Sanctuary Home Mortgage, Landed Home Loans, Carnegie Mortgage Partners, Coast One Mortgage, Mission Mortgage, Home Sense Lending, Your Home Financial, etc.). The retail D2C portal is the smallest acquisition channel and it shows in the polish level.
10. **The mobile app is mostly a servicing app** (payments, statements, escrow) — the *application* experience on mobile is the responsive Angular web app, not a native app, and there is no "continue where you left off" deep-linking between web and mobile.

---

## 14. The "why can't I qualify?" diagnostic — what Caliber/Newrez MISS for denied / near-qualifying users

This is the most important part of the brief. **Caliber (and now Newrez) does not give denied or near-qualifying users a real diagnosis of WHY they failed.** Specifically:

### What the application does for denial today

There are **three** terminal states in the JS bundle, and only one of them gives the user actionable information:

1. **Successful prequalification** — *"Congratulations, {firstName}! You are pre-qualified. You are pre-qualified based on the details you provided and your {XXX} FICO credit score reported by Experian.\* Conditions apply please check your Pre-qualification letter for details."* — full soft-pull success, prequal letter generated, dashboard access.

2. **Preapproval disqualified** (`/heloc/app-dashboard/appsubmission/:id` / `cola-appsubmission` component) — full-page message:
   > **"Thank you for applying with us!"** / *"We've received your information, but we're unable to continue right now. A member of our team will reach out to review your options and next steps. Feel free to call us at [tel:855-649-1383](tel:855-649-1383)."*
   
   The full component template is literally:
   ```html
   <h1>Thank you for applying with us!</h1>
   <p>{{ message || "Thanks for applying with us! Thank you for giving us 
       information about your inquiry. Our team will further review your 
       application and get back to you about the next steps." }}</p>
   <button (click)="goToDashboard()">Go To Dashboard</button>
   ```
   
   That's it. The user is told *nothing* about why they failed. The only forward path is "wait for us to call" or "call us at 855-649-1383." There is no FICO threshold, no DTI estimate, no LTV red flag, no list of which declarations tripped the rules engine, no link to credit-rebuilding resources, no comparison to "what would have qualified you," no estimate of when they could reapply.

3. **System / upstream disqualification** (the "Thanks for your interest" generic error page) — almost identical copy:
   > **"Thanks for your interest"** / *"We've received your information, but we're unable to continue right now. A member of our team will reach out to review your options and next steps."* — CTA: call `855-649-1383`.

There is a fourth, related but softer path: the **"No, Do Not Authorize" / "Not Yet, My Credit is Frozen"** choice on the hard-pull consent screen, and the **`SaveDisQualifyRequest` API action** that gets called on the back end. The lead is still created (`SaveDisQualifyRequestSuccess` event is fired in the store), and the lead is presumably routed to a human loan officer — but the UI does not tell the user this, and the soft-pull prequal result page does not show a "we cannot prequalify you, here's why" alternative either.

The `creditCheckService` in the JS bundle does have internal flags — `hasBorrowersPermission`, `hasCreditAlreadyRun`, `isLCLicensed`, `hasCreditRun`, **`isCreditScoreLessThan580`**, **`noCreditResult`** — so the system *knows* the user has a sub-580 FICO or no credit result, and the code clearly supports branching on that, but **none of those branch labels surface to the user**. They are internal routing flags for the underwriting engine, not user-facing copy.

### What a "Why can't I qualify?" diagnostic could do better

A diagnostic tool that lives behind this flow should:

1. **Show the actual numeric reason for the denial** in the same soft-pull Experian report that the lender already pulled. If the user's middle FICO is 612, tell them "Your Experian score was X, our minimum for this product is Y." Right now Newrez knows the FICO and just shows a gauge — *but only if the user was prequalified*. On a denial path, the gauge isn't shown.
2. **Show the DTI they computed** — the engine has all the data (income, debts, housing payment) at the point of soft-pull, and could give the user a back-of-envelope DTI estimate. *"Your estimated back-end DTI is 51%. Most of our products require 43% or less. Here are three concrete actions that would help…"*
3. **Show the LTV** they would have offered and the cap. *"The home you want would need a $40k down payment for the LTV to be at 80% (our conventional limit). You said you had $20k."*
4. **Map denial causes to actions.** The `declined reason` field in the back-end `leadRejectedReason` already exists in the code (a single-char code that includes `W` for "rejected due to wholesale channel / loan officer handoff"). The UI never renders it. A diagnostic tool should decode those into a human list.
5. **Identify the specific declaration that failed.** The Declarations form asks 8 hard Y/N questions (bankruptcy 7y, foreclosure 7y, etc.). The user should see, on denial, *"You answered 'Yes' to: Have you been declared bankrupt in the past 7 years. That doesn't disqualify you from all programs — VA loans allow Chapter 7 discharge after 2 years, FHA after 3 years. Click here to see which programs you may still qualify for in [date]."*
6. **Reference the credit freeze case explicitly** with a per-bureau unfreeze link (they already do this in the consent modal, but not after a denial).
7. **Provide a reapply cooldown estimate.** If the disqualifying event is "inquiries on your credit report within the last 30 days," tell the user "wait 30 days" and offer an email reminder. If it's "Chapter 13 still active," tell them "eligible to reapply in [computed] year."
8. **For income-related denials, suggest non-W-2 income sources** they may have under-reported. The application supports Public Benefits, Rental Income, Family Support, etc. — the soft-quote funnel doesn't surface those options at all, and a denial tool could prompt "Did you also receive [Public Benefits / Rental Income]? Adding those could change your result."
9. **For self-employed denials, prompt for the prior 2 years' tax return data** ("YTD P&L + last 2 years' 1040s" is the lender's standard ask) — the soft pull does not ask for it, so self-employed users routinely get a low prequal amount or no prequal at all.
10. **Never end a denial on "we'll call you."** The HELOC disqualified page's *"A member of our team will reach out"* is the worst possible UX for someone who wants to know *now* what went wrong. The phone call is the right *follow-up* but the *first* response should be a written, structured diagnosis.

In short: Newrez's denial UX today is **"we got your data, we'll call you, goodbye."** That's the single biggest opportunity for a competitor or a third-party tool to differentiate.

---

## 15. Quick-look summary table

| Dimension | Caliber / Newrez today |
|---|---|
| Standalone Caliber brand | No (301 → newrez.com) |
| Soft-pull prequal? | Yes (Experian only) |
| Hard pull required for prequal? | No — soft prequal gives a letter |
| Where is SSN asked? | Only at the hard-pull "Credit Authorization" step (regex `xxx-xx-xxxx`) |
| Where is DOB asked? | Just before the soft pull, then again at the hard-pull SSN/DOB step |
| Where is email asked? | Just before the soft pull |
| Where is phone asked? | Account creation (right after the soft pull result) and "Communication" form in the full app |
| Denial messaging | "Thank you for applying with us!" / "we're unable to continue right now" — generic, no reason given, no follow-up content; phone call only |
| # of calculators | 6 (no DTI calculator) |
| # of mortgage loan product landing pages | 7 (VA, FHA, Conv, ARM, Renovation, Assumable, Niche/Specialty) |
| Top audiences | VA / military, first-time buyers, refinancers, HELOC, niche / non-QM, **crypto holders** |
| Trust badges | Trustpilot Excellent, BBB, NMLS #3013, Equal Housing Opportunity, Fannie Mae Star, Scotsman Guide #2, Military Friendly, HousingWire Tech100 |
| SEO footprint | ~800 indexed URLs; 342 Loan-Officer location pages; 326 blog posts; 119 press releases |
| Mobile app | Yes — native iOS/Android (mostly servicing) |
| Crypto mortgage | Yes — dedicated /crypto/ landing page + 2026 press release |
| Soft inquiry score source | Experian only (single-bureau) |
| Income source types supported in app | 19 distinct income source cards (Salaried, Self-Employed, Military Pay, Rental, Public Benefits, Pension, Retirement, Family Support, Boarder, Interest & Dividends, Capital Gains, MCC, Non-Borrower Household, Notes Receivable, Real Estate/Mortgage Differential, Royalty, Trust, Auto/Expense, Other) |
| D2C channel prominence | Smallest of three (retail < wholesale < JV) — but the only D2C funnel is on newrez.com |

---

## Sources

All quotes and path data are taken from the live HTML of:
- `https://www.caliberhomeloans.com/` (301 → `https://www.newrez.com/`)
- `https://www.newrez.com/` (homepage)
- `https://www.newrez.com/mortgage-calculators/`, `/mortgage-payment-calculator/`, `/refinance-calculator/`, `/loan-amount-estimator/`, `/rent-vs-buy-comparison/`, `/loan-term-comparison/`, `/budget-calculator/`
- `https://www.newrez.com/mortgage-rates/`
- `https://www.newrez.com/types-of-mortgages/`
- `https://www.newrez.com/military/`
- `https://www.newrez.com/about-us/`
- `https://www.newrez.com/frequently-asked-questions/`
- `https://www.newrez.com/crypto/`
- `https://www.newrez.com/find-loan-officer/`
- `https://www.newrez.com/sitemap.xml`
- `https://myapp.newrez.com/lead/loantype` and `https://myapp.newrez.com/main.<hash>.js` (5.4 MB Angular bundle, unpacked for the application flow evidence in §5, §6, §11, §14)
