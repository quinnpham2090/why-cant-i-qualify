# Guild Mortgage — Competitive Analysis (Prequalification / Qualification Flow)

> Research date: based on live content fetched from `guildmortgage.com` and `applyonline.guildmortgage.com` (Cloudflare-fronted React SPA). Direct page fetches via Node https (web search was unavailable in this session due to a tool authentication error; all quotes, page paths, form fields, and step labels are extracted from the live HTML/JS, not from third-party SEO tools).

---

## 1. Executive Summary — The Single Most Important Finding

**Guild Mortgage does NOT have a self-serve online prequalification or preapproval flow on the public site.** What looks like a prequalification funnel ("Apply Online") is actually a 5-step + account-setup **lead-capture wizard** that asks for name, email, loan type, state, and preferred loan officer — and then hands the user off to a human loan officer. There is:

- **No soft credit pull** anywhere on the public site
- **No hard credit pull** anywhere on the public site
- **No SSN, DOB, income, employment, or asset questions** in the online flow
- **No FICO / VantageScore collection** online
- **No "you don't qualify" or "denial" UX** — the only "Sorry" message in the entire React bundle is a generic server-error page

The prequalification **calculator** (a separate, non-lead-capture tool) does accept income + debt + rate + state and returns an estimated max purchase price — but it is explicitly disclaimed as **illustrative, not a loan offer, not a credit check, and not a commitment to lend**. The actual underwriting decision only happens after a loan officer collects a full 1003 and runs credit.

This is a critical competitive differentiator: **Guild has effectively delegated the "prequal" experience to the loan officer**, while its digital surface is optimized for human-handoff lead capture + education + calculators. Any "why can't I qualify" diagnostic product has no incumbent to displace in the self-serve funnel — the gap Guild leaves is the entire funnel.

---

## 2. Website URL / Specific Page Paths

### Primary domain
- **Root:** `https://www.guildmortgage.com/`
- **Top nav (inferred from every page's main menu):** Buying a home · Refinance a mortgage · Mortgage loans · Mortgage calculators · About us · Help center · Find a loan officer · Apply Online · Log in · Find a Branch · Contact Us

### Real loan-product pages (note: many URLs return 404 from the homepage; actual paths are singular, not plural, and live under `/mortgage-loans/`)
- Conventional — `/mortgage-loans/conventional-mortgage/`
- FHA — `/mortgage-loans/fha-loan/`
- VA — `/mortgage-loans/va-loan/`
- USDA — `/mortgage-loans/usda-loan/`
- Jumbo — `/mortgage-loans/jumbo-loan/`
- Home Equity / HELOC / HELOAN — `/mortgage-loans/home-equity-options/`
- Refi root — `/refinance-a-mortgage/`
- Cash-out refi — `/refinance-a-mortgage/cash-out-refinance/`
- Rate-and-term refi — `/refinance-a-mortgage/rate-and-term-refinance/`
- Refi process — `/refinance-a-mortgage/refinance-process/`

### Specialty / niche programs
- **MyPath2Own** (the "not yet mortgage-ready" program) — `/mortgage-loans/mypath2own/` and top-level `/mypath2own/`
- **Zero Down** — `/mortgage-loans/zero-down/`
- **1% Down** — `/mortgage-loans/1-percent-down/`
- **Down Payment Assistance** — `/mortgage-loans/down-payment-assistance-programs/`
- **Homebuying Assistance Programs (Promise of Home)** — `/mortgage-loans/homebuying-assistance-programs/`
- **ITIN Mortgage** — `/mortgage-loans/itin-mortgage-program/`
- **Doctor / Medical Professionals** — `/mortgage-loans/doctor-program/`
- **Section 184 Indian Home Loan** — `/mortgage-loans/section-184/`
- **Flex Payment Mortgage** (HECM / reverse-mortgage suite) — `/mortgage-loans/flex-payment-mortgage/`
- **Lock and Shop** (120-day rate lock) — `/mortgage-loans/lock-and-shop/`
- **LockNow and Sell** — `/mortgage-loans/locknow-and-sell/`
- **BuyNow Advantage** (all-cash offer program) — `/mortgage-loans/buynow-advantage-program/`
- **Complete Rate** (no-credit-score program) — `/mortgage-loans/complete-rate-program/`
- **GreenSmart Advantage** (energy-efficient w/ Home Depot) — `/mortgage-loans/greensmart-advantage-program/`
- **Payment Advantage** (1% lender-paid buydown yr 1) — `/mortgage-loans/payment-advantage-program/`
- **Manufactured Home** — `/mortgage-loans/manufactured-home-loan/`
- **Renovation** (HomeStyle, 203k, 203k Limited) — `/mortgage-loans/renovation-loans/`
- **Bridge** — `/mortgage-loans/bridge-home-loan/`
- **Temporary Buydowns** (1-0, 2-1, 1-1, 3-2-1) — `/mortgage-loans/temporary-buydowns/`
- **New Construction** — `/mortgage-loans/new-construction-loans/`
- **Energy-Efficient Mortgage** — `/mortgage-loans/energy-efficient-mortgage-program/`
- **Homebuyer Protection** (CAP / 17-day close / Lock & Shop) — `/homebuyer-protection/`

### Calculators
- All calculators — `/mortgage-calculators/`
- Total mortgage payment — `/mortgage-calculators/total-mortgage-payment-calculator/`
- **Pre-qualification (affordability)** — `/mortgage-calculators/pre-qualification-calculator/`
- **Buying power** — `/mortgage-calculators/buying-power-calculator/`
- **Income (how much do I need to qualify)** — `/mortgage-calculators/income-calculator/`
- **Refinance** — `/mortgage-calculators/refinance-calculator/`
- **Closing cost / Cash needed** — `/mortgage-calculators/closing-cost-calculator/`
- **Home sale / Net proceeds** — `/mortgage-calculators/home-sale-calculator/`
- **Temporary buydown** — `/mortgage-calculators/temporary-buydown-calculator/`

### Apply / prequal / preapproval paths
- **Public "Apply Online"** — `https://myaccount.guildmortgage.com/guild-home/apply-online/` (302 → `https://applyonline.guildmortgage.com/guild-home/apply-online/`) — this is the lead-capture SPA. **There is no public `/prequalify` or `/preapproval` URL — both return 404 from the homepage nav.**

### Account / portal
- **My Account login** — `https://myaccount.guildmortgage.com/guild-home/my-account/login/`
- **Registration** — `https://myaccount.guildmortgage.com/guild-home/my-account/registration/`
- **Mobile app** — `/mobile-app/`

### Educational
- How to get pre-qualified — `/buying-a-home/getting-pre-qualified-for-a-mortgage/`
- How credit works — `/buying-a-home/learn-how-credit-works/`
- Mortgage basics — `/buying-a-home/mortgage-basics/`
- Should I refinance? — `/buying-a-home/should-i-refinance-my-mortgage/`
- First-time homebuyer landing — `/buying-a-home/first-time-homebuyer/` and `/buying-a-home/first-time-homebuyer-dos/`

### Trust / awards
- `/jd-power/` (J.D. Power 2025 U.S. Mortgage Servicer Satisfaction Study hub)
- `/about-us/news/guild-in-the-news/reviews-and-rankings/`
- `/about-us/` (lists Freddie Mac, Scotsman Guide, MortgageCX, Fannie Mae STAR, etc.)

---

## 3. Target Audience

Guild is a mid-size direct lender (founded 1960, 60+ years, ~27x growth since 2007, No. 7 Top Overall per Scotsman Guide 2026, No. 5 Top Retail). Their primary audiences, as written on the actual pages:

1. **First-time homebuyers** (largest focus) — copy: *"First-time or repeat homebuyers"*, *"Are you a first-time homebuyer? We can help."* (H1 on `/buying-a-home/first-time-homebuyer/`), 800+ down-payment-assistance programs.
2. **Government-loan borrowers** — heavy emphasis on FHA, VA, USDA. *"FHA loans"* page: *"designed for low-to-moderate income borrowers"*. *"VA home loans"* page: *"benefit veterans, service members and surviving spouses"* (target audience explicitly listed: "VETS and military"). *"USDA loans"* for rural + low-to-moderate income.
3. **Lower-credit / alternative-credit borrowers** — ITIN program (no SSN), Complete Rate (no credit score), Doctor Program (no PMI, low down), Section 184 (tribal members, 2.25% down).
4. **Self-employed / 1099 / non-W-2** — not heavily targeted on public pages; the Flex Payment Mortgage (HECM reverse) is the closest fit for retirement-age homeowners (55+) tapping equity.
5. **Move-up / relocating / second-home buyers** — Bridge loan program, Lock & Shop (120-day rate lock), BuyNow Advantage (all-cash offer).
6. **Refinance audience** — both rate-and-term and cash-out, plus a Home Equity / HELOC / Reverse product suite.
7. **First-generation homebuyers** — explicitly called out on `/mortgage-loans/homebuying-assistance-programs/`.
8. **Existing customers / servicing** — large dedicated help-center, mobile app, hardship assistance, payment questions, escrow, loan payoffs, transferred loans, natural disaster help.

**Geo footprint:** 49 states (does NOT originate in New York — disclaimer: *"Guild Mortgage does not originate in New York"*). Heavy regional marketing presence (regional news archive, community lending teams for Houston, St. Louis, etc.).

---

## 4. Value Proposition (Exact Headlines)

### Homepage
- **H1 / hero CTA:** *"Take the next step"*
- Hero subhead: *"We can find the right loan for you today."*
- Primary buttons on homepage: **"Get pre-qualified for purchase"** and **"Access your home equity"**
- Section headlines: *"Buying a home?"*, *"Starting your homebuying journey or planning your next steps? We can help you get there. With hundreds of options, we'll find the loan that fits your life."*
- *"Committed to delivering the promise of home, from coast to coast."*
- Brand stat: *"60+ Years in Business — Building lifetime connections since 1960"*, *"27x Growth since 2007"*

### Mortgage loans root (`/mortgage-loans/`)
- H1: **"Types of home loans to fit your life"**
- H2: **"Choose from the following mortgage types and services"**
- Subhead: *"A mortgage properly tailored to your needs becomes an instrument that enables a whole new life. That's why we offer different types of home loans for a wide array of borrower situations, including first-time homebuyers, military families and rural homebuyers. At Guild, you'll find a loan that fits your life."*
- Matchmaker H2: **"Which one of these describes you best?"** — followed by a long list of persona-driven loan tiles (verbatim):
  - "I have a solid credit profile → Conventional Loans"
  - "I want to keep my payment low → FHA loans"
  - "I want rural home information → USDA Loans"
  - "Show me options for VETS and military → VA Loans"
  - "I want to make upgrades and pay over time → Renovation loans"
  - "I want down payment assistance → DPA Programs"
  - "I want to keep my rates the same → Fixed-Rate Loans"
  - "I want to buy a new primary residence → Bridge Loans"
  - "I want the lowest available rate → Adjustable-Rate Loans"
  - "I want to access my equity and supplement my retirement → Flex Payment Mortgage"
  - "I want to live in a customized manufactured home → Manufactured Home Loans"
  - "I want to lock my rate and then shop for a home → Lock and Shop"
  - "I want to save and go green → Energy-Efficient Mortgage Programs"
  - "I don't have a credit score → Complete Rate"
  - "I want to make a cash offer on a new home → BuyNow Advantage"
  - "I don't have a social security number → ITIN"
  - "I want to sell my home quickly → LockNow and Sell"
  - "I want a lower payment for the first year → Payment Advantage"
  - "I'm looking for a home equity loan or line of credit → Home Equity Programs"
  - "I want to buy down an interest rate → Temporary Buydowns"
  - "I want to buy a home with no down payment → Zero down options"
  - "I'm a member of a federally recognized tribe → Section 184"
  - "I am a medical doctor → Doctor Program"
  - "I want a low down payment → 1% Down"
  - "I want to buy a brand-new home → New construction programs"

### First-time homebuyer (`/buying-a-home/first-time-homebuyer/`)
- H1: **"Are you a first-time homebuyer? We can help."**
- H2: **"First-time homebuyer considerations and tips"**, **"Understand the process and your opportunities"**, **"Find the right home loan for you"**

### FHA
- H1: **"FHA loans"** — *"An FHA loan is insured by the Federal Housing Administration (FHA) and issued by an FHA approved lender. Since these loans were designed for low-to-moderate income borrowers, they offer options to borrowers with lower minimum down payments and credit scores."*
- Bullets: *"Down payments as low as 3.5% · Credit scores as low as 540 · Financing up to 96.5% of home purchase price · Credit scores under 580 require a minimum of a 10% down payment."*

### VA
- H1: **"VA home loans"** — *"Helping Veterans for 55+ years"*
- *"VA home loans benefit veterans, service members and surviving spouses."* with advantages: *"No down payment options · Borrow up to 100% of the home's value with a cash out refinance · Rate and term refinance options · No private mortgage insurance (PMI) requirement · Lower interest rates than traditional mortgages · Higher debt-to-income ratios accepted · Reduced fees as compared to traditional mortgages"*

### USDA
- H1: **"USDA loans"** — *"100% financing of the purchase price · Better-than-average interest rates · Credit scores as low as 540 · Zero down payment options"*

### MyPath2Own (the "unqualified but not turned away" program)
- H1: **"Get mortgage-ready with MyPath2Own"**
- Hero: **"You can own a home. We can help. If you're not yet mortgage-ready, your path to homeownership starts here."**
- **"At Guild Mortgage, unqualified buyers aren't turned away; they're given a plan to become a homeowner."**
- *"MyPath2Own was specifically designed for those without enough down payment savings, a lower credit score, not enough employment history and a lack of knowledge about the homebuying process."*
- Assistance: *"up to $4,000 that can be used toward a down payment or closing costs"*

### About Us
- H1: **"Own what matters"**
- H2: **"Delivering the promise of home"**
- *"Guild Mortgage is committed to delivering the promise of home to anyone who aspires to own one, regardless of where they're starting from or how much they currently have in their bank account."*

### J.D. Power page
- H1: **"Your trust means everything to us."**
- Sub: *"How we stand apart"*, *"We know Guild customers value: A lending partner they can rely on · Clear guidance and education · A simple, streamlined experience · Local experts they can connect with · Quick answers and solutions"*

---

## 5. Lead-Capture Mechanism — The Actual "Apply Online" Flow

This is the single most important UX finding in this analysis. The flow lives on `https://applyonline.guildmortgage.com/guild-home/apply-online/`, behind a Cloudflare-protected React SPA. From the JS bundle (`/assets/index-BBAvK-XJ.js`, ~570 KB, framework: React + Zustand + React Hook Form/Joi + Axios + LogRocket), the canonical step labels array is:

```js
["About You","Loan Type","Property State","Loan Officer","Review & Continue"]
```

### Step 1 — "About You"
- **Fields collected: first name, last name, email.**
- Validation messages (verbatim from the Joi/Zod schema):
  - *"Please provide your first name"*
  - *"Please provide your last name"*
  - *"Please provide your email address - example: youremail@example.com"*
  - *"Must be 2 characters or more"*, *"Must be 20 characters or less"*
  - *"Invalid email"*
  - *"Guild Mortgage email addresses are not allowed"* (employees excluded)
- **No phone number. No SSN. No DOB. No address. No income.**
- Email regex is strict: `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$` with extra custom tests for exactly-one "@" and minimum domain format.
- If the user already has an account, the form supports Silent SSO via `/api/v1/auth/sso-start`; if SSO succeeds and the user has an application in progress, they're offered a *"View-logo-applyonline.jpg"* / *"BetterBuilt-logo-applyonline.jpg"* login modal linking to `https://my.guildmortgage.com/guild-home/my-account/login/`.

### Step 2 — "Loan Type"
- **Fields: loan type.** Two options surfaced: **"Purchase"** and **"Refinance"**. (Dropdown — no FHA/VA/USDA/Conventional selection at this stage; that choice is deferred to the loan officer.)
- Error message: *"Loan type is required"* / *"Select a loan type"*

### Step 3 — "Property State"
- **Fields: propertyState** (a US state code, uppercased server-side).
- State picker UI: *"In what state is the property you're looking to purchase?"* — autocomplete that calls `/api/v1/branches?state=XX&sessionId=…&domain=…` to surface local branches.
- Error: *"Property state is required"* / *"Select your property state"*

### Step 4 — "Loan Officer"
- **Fields: officerId OR branchId** (one required, mutually exclusive).
- UI text: *"Choose a loan officer..."*, *"I don't have a loan officer preference"*, *"No officer or branch selected"*, *"Change loan officer"*, *"Select a loan officer"*, *"Search by Zip code or city, state"*.
- If a pre-loaded `?officerUrl=…` or `?branchUrl=…` is in the URL, the store skips this step.
- Google Maps is used to plot branch locations (API key in HTML).
- Error: *"Please select a loan officer or a branch."*

### Step 5 — "Review & Continue"
- Reviews the four above, then submits `POST /api/v1/preapp` (the API literally called "preapp" — a lead-capture payload, not a credit application). The payload structure is `{firstName, lastName, email, loanType, propertyState, officerId, branchNumber, sessionId}`.
- On success the user is sent forward to step 6.

### Step 6 — "Create Password to complete your account setup"
- This is the second non-canonical step, but it appears in the bundle as `Step${6}_Password Created`.
- **Fields: password + confirmPassword.** Password rules (verbatim):
  - *"Between 8 - 25 characters"*
  - *"1 upper case letter"*
  - *"1 lower case letter"*
  - *"1 special character"*
  - *"1 number"*
- Modal title: **"Create Password to complete your account setup"**
- Submit gated by reCAPTCHA v3 (site key `6LdQKSUqAAAAAJm3LQzorZzr3iXYsVR_4hT7gB6Z`, validated via `POST /api/v1/captcha/validate`).
- On success, the server returns `applicationUrl`, and the user is redirected to the actual full mortgage application (presumably a 1003 + asset + employment intake, hosted on a separate Encompass/Black Knight/Blend-style LOS, not on this domain).

### Soft pull vs. hard pull
- **No soft pull** is performed at any point in the online funnel. The prequalification calculator (a separate tool — see Section 7) does NOT run credit; it just uses user-entered income + debt + an assumed rate to estimate a max purchase price.
- **No hard pull** is performed online either. The hard pull happens later, off-platform, once the loan officer is engaged.
- No SSN is ever collected in the public-facing flow.

### What this means competitively
Guild has explicitly chosen a **low-friction, low-friction-but-also-low-information** lead-capture flow. The trade-off:
- ✅ Zero friction: no SSN, no credit hit, no document upload — anyone will start it
- ❌ Zero prequalification: a user who fills this out has not actually been told whether they qualify
- ❌ Zero diagnostic value: a "why can't I qualify" tool has nothing to hook into

---

## 6. Questions Asked (Exact Inputs, by Form)

### A. Apply-Online lead form
| Step | Field | Type | Required? |
|---|---|---|---|
| 1. About You | First Name | text (2–20 chars, letters/spaces/-/'/@/.) | yes |
| 1. About You | Last Name | text (2–20 chars, letters/spaces/-/'/@/.) | yes |
| 1. About You | Email | email (regex-validated) | yes |
| 2. Loan Type | Loan Type | dropdown (Purchase / Refinance) | yes |
| 3. Property State | State | US state picker | yes |
| 4. Loan Officer | Officer or Branch | radio/select | yes (one of) |
| 5. Review & Continue | (read-only review) | — | — |
| 6. Password | Password | password (8–25, mixed case, 1 special, 1 digit) | yes |
| 6. Password | Confirm Password | password (match) | yes |
| 6. Password | reCAPTCHA v3 | token | yes |

### B. Pre-Qualification / Affordability Calculator (`/mortgage-calculators/pre-qualification-calculator/`)
| Field | Type | Notes |
|---|---|---|
| Total Monthly Income | currency ($) | "Your monthly income before taxes are taken out" |
| Total Monthly Debt Payments | currency ($) | "Do NOT include your current utility bills, rent, or debts you plan to pay off" |
| Interest Rate | % | free input |
| Term of Your Mortgage | dropdown | 10 / 15 / 20 / 25 / 30 years, Interest-Only, 40, 50 |
| Down Payment (%) | % | — |
| Select Your State | US state dropdown | AK through WY |

Outputs: **Purchase Price, Down Payment, Loan Amount, Anticipated Ratios, Actual Ratios, Total Monthly Payment** (broken into Principal & Interest, PMI, Hazard Insurance, Property Taxes, Total).

Critical disclaimer (verbatim, top-of-page footnote):
> ***Disclaimer: This calculator is offered for illustrative and educational purposes only and it is not intended to replace a professional estimate. Calculator results do not reflect all loan types and are subject to individual program loan limits. All calculations and costs are estimates and therefore, Guild Mortgage ("Guild") does not make any guarantee or warranty (express or implied) that all possible costs have been included. The assumptions made here and the output of the calculator do not constitute a loan offer or solicitation, or financial or legal advice. Please connect with a Guild loan professional for a formal estimate.***

### C. Income Calculator ("how much income do I need?")
Inputs: Sales Price of the Home · Down Payment (% or $) · Estimated Interest Rate · Select Your Property State · Estimated Total Monthly Debts ("Do not include your current housing expenses or debts you plan to pay off") · Select the Term of the Loan (10/15/20/25/30/IO/40/50 yrs)

### D. Refinance Calculator
Two sections — "tell us about your current loan" (current interest rate, current P&I payment, outstanding balance) and "fill-in some details about your proposed refinance" (amount to refinance, term, new rate, closing cost — *"if unknown, then assumed 2.5% of your new loan"*). Outputs: New Loan Amount, New P&I Payment, Est. Closing Cost, Payment Difference, "Break-Even" Point.

### E. Closing Cost / Cash Needed Calculator
Sales Price · Down Payment (% or $) · Estimated Interest Rate · Points being Charged · Property State. Outputs: Purchase Price, Loan Amount, Down Payment, Closing Cost, Taxes & Insurance, **Total Cash Needed**.

### F. Home Sale Net Proceeds Calculator
Sales Price · Real Estate Commission · Balance of First Mortgage · Balance of Other Liens · Month of Closing · Property State · Other Fees Paid by the Homeowner. Outputs: Commission, Lien-holder payoff, Property Taxes, Other Fees, Amount Owed at Closing, **Net Proceeds to Seller**.

### G. Buying Power Calculator (slider-style)
Sliders for "Ideal monthly payment" ($0–$15,000) and "Interest rate" (0%–10%), plus a separate "Ideal home price" slider ($0–$1M, 0%–10% rate). Includes "If interest rates increased by 1 or 2 percent…" scenarios. Uses 30-year loan, 20% down, P&I only (no MI/tax/insurance).

### H. Temporary Buydown Calculator
Type (3-2-1 / 2-1 / 1-1 / 1-0), Term (10/15/20/25/30 yrs), Interest Rate, Total loan amount. Outputs per year: Rate · Full monthly payment · Monthly payment with buydown · Monthly savings · Annual savings. Plus "Total buydown cost".

### I. Total Mortgage Payment Calculator
Standard payment calc with PMI.

### Note
**None of the calculators collect PII** (no name, no email, no phone, no SSN, no address). They are pure educational tools.

---

## 7. User Experience (Steps, Mobile, Friction, Time-to-Result)

### Apply-Online flow
- **Steps:** 5 (visible) + 1 password (after step 5) = 6 total
- **Estimated time:** 60–120 seconds (the "About You" step alone can be done in ~15s, loan officer selection is the slowest)
- **Friction:** Low. No SSN, no credit check, no document upload. Validation is reasonable (email regex, name length). The biggest friction point is Step 4 (Loan Officer) — users must select an officer or explicitly say "I don't have a preference" before they can proceed. The "Search by Zip code or city, state" autocomplete mitigates this.
- **Mobile:** React SPA is responsive (the CSS bundle is mobile-aware — there are explicit mobile-stepper breakpoints in the JS). Loan-officer map uses Google Maps API. Forms work on mobile.
- **Progress indicator:** Yes — there is a "progress" UI element and a "mobileStepper: 1000" z-index constant in the bundle, indicating a top progress bar.
- **Persistence:** Local — Zustand state is persisted to `window.sessionStorage` under the key `preapp-store`. The user can refresh and resume where they left off (within a session). On reset, `clearAllData()` is called.
- **Session start:** A `sessionId` is created on first load (referenced in the preapp POST).
- **Analytics:** LogRocket + a custom `yd(step_number, step_name, …)` tracker that fires on every step transition with structured analytics payloads. Step transitions are tracked: `Step1_AboutYou`, `Step2_LoanType`, `Step3_PropertyState`, `Step4_LoanOfficer`, `Step5_ReviewContinue`, `Step6_PasswordCreated`. So Guild knows exactly where users drop off.
- **Pre-population:** If the URL contains `?officerUrl=…` or `?branchUrl=…` (e.g., from a "Find a loan officer near you" branch page), the wizard pre-fills the loan officer step.
- **Trust gating:** The reCAPTCHA-protected password step is the friction gate before the user is sent to the actual loan application (`applicationUrl`).
- **End state:** User is sent to a separate (third-party LOS) full application. They never see a prequal result on Guild's site.

### Calculator flow
- **Steps:** 1 (single page)
- **Friction:** Very low. No PII. All inputs visible.
- **Time-to-result:** Real-time as the user types.
- **Mobile:** Standard responsive web.
- **Result presentation:** Inline below the form. No persistent link to the result; no "save my number" or "email me this estimate" — the only lead-capture CTA after a calc result is the omnipresent **"Get a free quote"** button (which routes to `/find-a-loan-officer/` or the Apply Online wizard).
- **Disclaimer:** Always shown in full at the bottom of every calculator page, with a CTA: *"Please connect with a Guild loan professional for a formal estimate."*

---

## 8. Calculator Functionality (Full Inventory)

Guild ships **eight** calculators. All are non-PII, single-page, client-side-computed, and disclaimer-loaded.

| Calculator | URL | Inputs | What it actually answers |
|---|---|---|---|
| Total mortgage payment | `/mortgage-calculators/total-mortgage-payment-calculator/` | Loan amount, rate, term, taxes, insurance, PMI | "What will my PITI be?" |
| **Pre-qualification / Affordability** | `/mortgage-calculators/pre-qualification-calculator/` | Income, debts, rate, term, down payment %, state | "What's the max home I can afford? Show purchase price, loan amount, DTI." |
| **Buying Power** | `/mortgage-calculators/buying-power-calculator/` | Sliders: monthly payment, interest rate, home price | "What can I afford with a $X payment at Y% rate?" With rate-stress scenarios. |
| **Income** | `/mortgage-calculators/income-calculator/` | Sales price, down payment, rate, state, monthly debts, term | "What income do I need to qualify for a $X home?" |
| **Refinance** | `/mortgage-calculators/refinance-calculator/` | Current rate/P&I/balance, new amount, new term/rate, closing cost | "Will refinancing save me money? What's the break-even?" |
| **Closing cost / Cash needed** | `/mortgage-calculators/closing-cost-calculator/` | Sales price, down payment, rate, points, state | "How much cash do I need to close?" |
| **Home sale / Net proceeds** | `/mortgage-calculators/home-sale-calculator/` | Sale price, commission, mortgage balance, other liens, month, state, other fees | "How much will I net when I sell?" |
| **Temporary buydown** | `/mortgage-calculators/temporary-buydown-calculator/` | Buydown type, term, rate, loan amount | "What does a 3-2-1 / 2-1 / 1-1 / 1-0 buydown actually save me?" |

**Note:** There is **no standalone DTI calculator** and no "How much can I borrow" calculator by that name. DTI is shown as a derived output inside the Pre-qualification calculator ("Anticipated Ratios / Actual Ratios" in the results panel). The Income calculator is effectively the "how much can I borrow" tool, run in reverse.

**Notes on calculator quality**
- All calc disclaimers are essentially identical: *"illustrative and educational purposes only… not a commitment to lend… subject to credit, income and collateral approval."*
- No calculator captures user info; all lead-capture CTAs route to "Get a free quote" → Find a Loan Officer.
- Buying power is the only one using a slider/UX-pattern that feels modern; the others are vanilla form inputs.

---

## 9. Calls to Action (Verbatim)

### Primary CTAs
- **"Get pre-qualified for purchase"** (homepage hero)
- **"Access your home equity"** (homepage hero)
- **"Get a free quote"** (every loan page and every calculator)
- **"Apply Online"** (top-right of every page)
- **"Apply Now Online"** (first-time page)
- **"Start My Loan Application"** (first-time page)
- **"I'm Ready"** (every specialty program page, opens a "Connect with us" modal)
- **"Find a Loan Officer"** / **"Find a Loan Officer in your neighborhood"**
- **"Find a Branch"**
- **"Connect with us"**
- **"Let's Talk!"** (Bridge loan page)
- **"Get Started"** (MyPath2Own, 1% Down, Zero Down, DPA, Homebuyer Protection tiles)
- **"Take the first steps with our pre-qualification calculator"** (FHA / VA footer CTA)
- **"Get an estimate of your mortgage payment with our mortgage payment calculator"** (Conventional / Jumbo / Section 184 footer CTA)
- **"Read the Guide"** (Renovation page)

### Step buttons in Apply Online
- "Continue", "Next", "Submit" (in password step)
- "Cancel", "Search", "I'm Ready" (modals)

### Loan officer modal flow
- "Search by city, state or loan officer name"
- "Search"
- "Choose a loan officer..."
- "I don't have a loan officer preference"
- "Change loan officer"
- "Select a loan officer"
- "No officer or branch selected"

---

## 10. Trust Signals

### Awards & rankings (from `/about-us/` and `/about-us/news/guild-in-the-news/reviews-and-rankings/`)
- **J.D. Power 2025 U.S. Mortgage Servicer Satisfaction Study** — *"ranked among the top"* (specific rank rendered dynamically; the page shows a comparison chart with "Industry average" vs. "Guild Mortgage" but the static text uses "top")
- **Freddie Mac 2026 Home Possible RISE Award® – Home Possible® Fastest Growth** — *"Guild delivered 2,333 Home Possible transactions in 2025"*
- **Freddie Mac 2026 Home Possible RISE Award® – HFA Advantage® Greatest Volume** — *"Guild delivered 717 HFA Advantage loans in 2025"*
- **Military Friendly® 2026 Employer — Gold**
- **San Diego Union-Tribune 2025 Top Workplaces** — 13th year in a row
- **Scotsman Guide 2026 Top Mortgage Lenders — No. 7 Top Overall** and **No. 5 Top Retail**
- **Scotsman Guide 2026 Top Originators** — 334 Guild LOs
- **Scotsman Guide 2025 Top Lenders**, **2025 Top Workplaces**, **2025 Top Women Originators (112)**, **2025 Top Emerging Stars (17)**
- **Fannie Mae 2024 STAR™ Performer** — 6th consecutive year
- **MortgageCX 2022 Best in Class** in 5 categories: Overall Satisfaction, Net Promoter Score, Likelihood to Use Again, Products and Costs, Loan Processor (Large Independent segment)

### Quantitative trust
- "60+ Years in Business — Building lifetime connections since 1960"
- "27x Growth since 2007"
- "**334 Guild Mortgage loan officers ranked as Scotsman Guide Top Originators in 2026**"
- A carousel of 8+ named-borrower testimonials (Carolin H., Kimberly M., Zachary I., Carlene R., Adam H., Malachi K., Sophia F., Lisa F., Elaine J.) with city attribution (Sidney ME, Vail AZ, Brown Deer WI, etc.)

### Security / compliance
- reCAPTCHA v3 on the password step
- reCAPTCHA on the loan-officer selection
- Standard privacy policy, terms of use, accessibility statement, "Report cyber security issue" link, hard-coded `Wire Fraud Tips` page (`/tips-protect-wire-fraud/`)
- 49-state licensing disclosure; explicitly does not originate in NY
- 24/7 Servicing phone (1.800.365.4441), NMLS licensing
- Cloudflare DDoS / bot protection on the apply-online SPA
- 256-bit TLS (assumed; standard for a Cloudflare-fronted app)

### Notable gaps in trust signals
- **No BBB rating displayed on the site** (BBB rating is not visible on any of the fetched pages, neither in nav, footer, nor trust strips). The site is not accredited-BBB-branded.
- **No aggregate review count** (e.g., "12,000+ 5-star reviews on Zillow/Google") anywhere visible. The testimonials on the J.D. Power page are hand-picked, not crowd-counted.
- **No third-party review widgets** (Trustpilot, Zillow, Google Reviews) embedded.

---

## 11. SEO Strategy

### Site architecture (from `/sitemap_index.xml` + `/page-sitemap.xml`)
- **CMS:** WordPress + Avada theme + Yoast SEO (XML sitemap generated by Yoast; W3 Total Cache plugin in use; Cloudflare CDN; SPA on `applyonline.guildmortgage.com` is a separate React app, not WordPress).
- **234 indexed pages** in the main page sitemap, plus 18 blog categories, plus a portfolio sitemap, plus a regional sitemap, plus a regional-category sitemap.
- **Blog URL:** `/blog/` (categories: first-time-homebuyer, homebuyer-education, homebuying-tips, mortgage-101, products-and-programs, financing-tips, customer-service, refinance, selling-a-home, about-guild, giving-back, hot-topics, the-guild-way, switch-to-guild, lifestyle/personal-finance, etc.)
- **Regional SEO play:** A separate `regional-sitemap.xml` + `regional_category-sitemap.xml` with pages like `/oregon/tillamook/`, `/new-mexico-district/`, `/texas-veterans-home-loans/`, and dedicated team pages for local branches. This is clearly a local-SEO play (city + state pages for branch markets).

### Target keywords (inferred from URL slugs, H1s, and meta descriptions)
| Keyword cluster | Landing page | Title tag |
|---|---|---|
| "FHA loan / FHA loans" | `/mortgage-loans/fha-loan/` | "FHA loans \| Guild Mortgage" |
| "VA home loan / VA loan requirements" | `/mortgage-loans/va-loan/` | "VA Home Loan \| VA Loan Requirements \| Guild Mortgage" |
| "USDA loan" | `/mortgage-loans/usda-loan/` | "USDA Loan - Learn more \| Guild Mortgage" |
| "Conventional loan / Conventional vs FHA" | `/mortgage-loans/conventional-mortgage/` | "Conventional vs. FHA loan: find out the difference \| Guild Mortgage" |
| "Jumbo loan" | `/mortgage-loans/jumbo-loan/` | "Jumbo loan – Learn more \| Guild Mortgage" |
| "First-time home buyer" | `/buying-a-home/first-time-homebuyer/` | "First-time Homebuyer Mortgage Guide and Calculators \| Guild Mortgage" |
| "Refinance mortgage / Cash-out refi" | `/refinance-a-mortgage/cash-out-refinance/` | "What is a Cash-out Refinance? \| Learn How it Works" |
| "Mortgage payment calculator" | `/mortgage-calculators/total-mortgage-payment-calculator/` | "Mortgage Payment Calculator with PMI \| Guild Mortgage" |
| "Mortgage affordability calculator / pre-qualification" | `/mortgage-calculators/pre-qualification-calculator/` | "Mortgage Affordability and Prequalification Calculator \| Guild Mortgage" |
| "Buying power calculator / how much can I afford" | `/mortgage-calculators/buying-power-calculator/` | "Buying Power Calculator \| Find Out How Much You Can Afford" |
| "How much house can I afford" | `/buying-a-home/` (DTI section) | "Homebuyers Mortgage Guide & Loan Process \| Guild Mortgage" |
| "Mortgage income calculator" | `/mortgage-calculators/income-calculator/` | "Mortgage Income Calculator \| Guild Mortgage" |
| "Refinance calculator" | `/mortgage-calculators/refinance-calculator/` | "Use Our Mortgage Refinance Calculator \| Guild Mortgage" |
| "Closing cost calculator" | `/mortgage-calculators/closing-cost-calculator/` | "Mortgage Closing Cost Calculator \| Guild Mortgage" |
| "Home equity / HELOC" | `/mortgage-loans/home-equity-options/` | "HELOC (Home Equity Loan) vs. HELOAN \| Guild Mortgage" |
| "Reverse mortgage" | `/mortgage-loans/flex-payment-mortgage/` | "Flex Payment Mortgage \| Reverse Mortgage \| Guild Mortgage" |
| "Down payment assistance" | `/mortgage-loans/down-payment-assistance-programs/` | "Down payment assistance programs \| Guild Mortgage" |
| "ITIN mortgage" | `/mortgage-loans/itin-mortgage-program/` | "ITIN Mortgage Program - Guild Mortgage" |
| "Doctor mortgage" | `/mortgage-loans/doctor-program/` | "Doctor & Medical Professionals mortgage loan program \| Guild Mortgage" |
| "Bridge loan" | `/mortgage-loans/bridge-home-loan/` | "Bridge loans \| Guild Mortgage" |
| "Renovation loan / 203k" | `/mortgage-loans/renovation-loans/` | "Home renovation loans \| Guild Mortgage" |

### SEO strengths
- Title tags are well-optimized for high-intent head terms (e.g., "VA Loan Requirements")
- Heavy use of long-tail comparison pages (Conventional vs FHA)
- Calculator pages are individually indexed and optimized
- Regional / city pages for local SEO
- Rich blog content (4+ blog categories tied to first-time / mortgage 101 / refinance / products)
- Internal linking is strong — every page links to the same nav, the same "Find a Loan Officer", the same "Apply Online"
- Meta descriptions are descriptive (not stuffed)

### SEO weaknesses
- No `/prequalify` or `/preapproval` page (high-volume, high-intent keywords being under-served)
- No `/how-much-house-can-i-afford` URL (the Buying Power calculator is the substitute, but the URL slug doesn't match search query)
- No `/mortgage-rates` page with a live rate table (only educational pages at `/buying-a-home/mortgage-rates-explained/primary-residence-mortgage-rates/` etc.)
- No location-targeted "FHA loan limits by county" content
- Blog categories look thin; many blog URL slugs end in numbers/dates (e.g., `/buying-a-home/first-time-homebuyer-dos/` with "5/10/21" publish dates) — looks like legacy thin content

---

## 12. Strengths

1. **Loan-officer-first model is a defensible moat** — 334 top-ranked LOs, 60+ years, 49-state footprint. Most digital-only lenders can't replicate this.
2. **Prequalification calculator is genuinely useful** — accepts income + debt + state + term, returns purchase price + DTI + monthly payment breakdown, and explicitly nudges users to a loan officer afterward. The disclaimer is honest.
3. **Program breadth is best-in-class for the segment** — ITIN, Section 184, Doctor, Complete Rate, Flex Payment, Bridge, BuyNow Advantage, Lock & Shop, LockNow & Sell, 1% Down, Zero Down, MyPath2Own, DPA — no major niche audience is unserved.
4. **Trust signals are strong on the institutional side** — J.D. Power top-ranked, Freddie Mac RISE, Scotsman Guide #7, Military Friendly Gold, Fannie Mae STAR 6 years, 60+ years in business, 27x growth.
5. **Homebuyer Protection** is a clever differentiator — earnest money + closing-cost + rate-lock guarantee (up to $5,000 / $1,000 / 120-day rate lock) de-risks the buyer.
6. **MyPath2Own is a near-unique "denial alternative"** — explicitly tells unqualified buyers *"unqualified buyers aren't turned away; they're given a plan to become a homeowner"*. Up to $4,000 in down-payment/closing-cost assistance after the buyer completes eHome America counseling.
7. **Educational content is real** — 30+ mortgage-101 / first-time / buying-a-home / refinance blog posts and a 50-page Home Loan Guide. Real value, not SEO filler.
8. **Local SEO** is well-developed (city + state pages, team pages, community-lending-team pages).
9. **Calculators are 100% PII-free** — no friction, can be used anonymously, no session storage of any user data, no email gate.
10. **Homepage testimonials are named + city-attributed** — more credible than anonymous star ratings.

---

## 13. Weaknesses

1. **The online "Apply Online" flow is misleadingly named** — it is not a prequalification. There is no soft credit pull, no DTI calculation, no FICO check. A user who clicks "Apply Online" thinks they're getting prequalified, but they actually just submit a lead form. The naming creates an expectation gap.
2. **No "I don't qualify" diagnostic anywhere** — there is no prequalification denial UX because there is no prequalification. The only "sorry" message in the entire React bundle is a generic 500-error page with a mailto link to `retailescalations@guildmortgage.com`.
3. **The prequalification calculator is the only prequal-adjacent tool, and it returns an "estimated" range with no action path** — there's no "Click here to apply for a $300,000 loan" CTA at the bottom; the only follow-up is the generic "Get a free quote" button.
4. **No application-status / dashboard preview** — once you leave the wizard, you have to wait for a loan officer to call. The mobile app and the My Account portal exist but are for post-close servicing, not for tracking the application.
5. **No DTI calculator** — DTI is only a derived output buried inside the prequal calculator's results. There's no standalone "What's my DTI?" tool.
6. **No rate quote at the prequal stage** — Guild links to rate-explained pages but does not show a personalized rate without a loan officer.
7. **No mobile-app prequal** — the mobile app is for existing customers only; the wizard is web-only.
8. **The wizard's "About You" step only asks for name + email — no phone number, so the lead is email-only by default** — which is a friction point for conversion (most lenders capture phone on step 1).
9. **No BBB rating shown** — the site conspicuously omits any BBB accreditation or rating badge.
10. **No aggregate review count** — testimonials are hand-picked; no Zillow/Google/Trustpilot widget is shown, which makes Guild look less "crowd-validated" than Rocket, Better, or LoanDepot.
11. **NY exclusion is awkward** — *"Guild Mortgage does not originate in New York"* is repeated in many footers; a national consumer landing on the page has no clear "your state isn't served" routing.
12. **The password step after "Review & Continue" feels like a bait-and-switch** — users don't expect to create a Guild account before seeing any prequalification output. Drop-off here is likely high.
13. **No personalization on the homepage** — the same "Get pre-qualified for purchase / Access your home equity" hero is shown to a 28-year-old first-time buyer in Detroit and a 62-year-old retiree in Phoenix.

---

## 14. The "Why Can't I Qualify?" Diagnostic — What Guild MISSES (and what a Diagnostic Tool Should Build)

This is the core gap. Below is a structured analysis of what Guild does *not* do today, organized by the question a denied or near-qualifying user would ask.

### 14a. The user's mental model when they "fail"
A user has just been told (verbally, by a loan officer, or by inference) that they don't qualify. They have no idea which of the following reasons is true:
- Credit score (FICO) too low — and for which loan program?
- Debt-to-income ratio too high — and by how much?
- Not enough down payment / reserves
- Insufficient employment history
- Income can't be documented (self-employed, 1099, gap)
- Loan amount exceeds county limit (FHA / conforming)
- Property type not eligible (condo, co-op, manufactured)
- Occupancy type mismatch (second home, investment)
- LTV / CLTV too high
- Recent major derogatory event (BK, foreclosure, short sale — and how recent)
- ITIN / visa status not eligible for the program

Guild's current experience provides **zero** structured feedback for any of these.

### 14b. Specific gaps in Guild's current prequalification UX
| User question | What Guild shows today | What's missing |
|---|---|---|
| "What credit score do I need?" | Static thresholds on each product page (e.g., FHA "as low as 540", Conventional "as low as 620", 1% Down "620+", Zero Down "600+") | A **personalized** "based on your 640 score, you qualify for FHA and VA but not Conventional at the best pricing tier" |
| "What's my DTI?" | No standalone calculator; buried inside prequal calc | A **dedicated** DTI tool with program-by-program thresholds (FHA 50%, Conventional 45%, VA residual-income test, USDA 29/41) |
| "How much house can I afford?" | Buying Power calculator (slider) + Pre-qualification calculator | A tool that **runs the user's actual numbers** against Guild's actual program matrix and returns a list of *eligible* programs |
| "Did I get pre-approved?" | "Apply Online" returns nothing — just a "thank you" and a wait-for-call | A **real-time result page** that says "you're prequalified for $X" with the conditions of that prequal |
| "Why was I denied?" | Nothing. The "Sorry for the inconvenience" page is a 500 error. | A **denial-reason page** (per ECOA / FCRA adverse-action requirements, this *must* be provided after a hard pull, but no soft-pull equivalent exists) |
| "What can I fix to qualify?" | MyPath2Own (one program, requires manual LO contact) | A **personalized roadmap** — "raise FICO 30 points, pay down $X in revolving debt, save $Y for reserves, and you'll qualify for Z" |
| "Which program is right for me?" | `/mortgage-loans/` has 25 tiles, hard to compare | A **guided quiz** that returns 1–3 specific programs |
| "Will this rate change?" | No rate quote at any point | A **rate-range estimate** with a disclaimer |
| "What documents will I need?" | Generic LO-led conversation | A **document checklist** by program (W-2s, 1099s, bank statements, gift letters, etc.) |

### 14c. Specific design implications for a "why can't I qualify" diagnostic
A diagnostic built to fill Guild's gap should:

1. **Replace the prequalification calculator with a real prequalification funnel.** Capture income (gross monthly), housing payment (rent or current mortgage), revolving debt (minimums), installment debt, FICO (or VantageScore via a true soft-pull partner like Plaid/MX/Pingtree/Argyle — not on Guild's site today), employment status, years on job, years at residence, down payment, reserves, desired loan amount, property state, property type, occupancy. No SSN, no DOB, no full address.
2. **Run a transparent rules engine** against all 25 of Guild's published program thresholds (FHA 540+, Conventional 620+, VA (no minimum FICO, lender overlay 580–620), USDA 540+, Jumbo 700+, Doctor Program 680+, ITIN 680+, Section 184 580+, Flex Payment 620+ HECM counseling required, etc.). Return a personalized list of qualifying programs.
3. **For non-qualifying users, return a structured "denial reason"** broken down by:
   - **Credit** (FICO below threshold for any program; recent late payments; recent BK/foreclosure in seasoning window)
   - **Capacity** (DTI > 50%, residual income insufficient for VA, front-end > 28/31)
   - **Capital** (reserves < 2–6 months PITI, down payment < program minimum)
   - **Collateral** (LTV/CLTV, condo non-warrantable, property in non-eligible USDA area)
   - **Character** (employment gap, immigration/visa status, etc.)
4. **Provide a "fix-it" roadmap** with specific, actionable steps and timelines: "Pay down $X in credit card debt → DTI drops to Y% → you qualify for FHA Z" or "Wait 2 years post-BK discharge → Chapter 13 seasoning clears" or "Save $Y in reserves → loan amount increases to Z."
5. **Hand off gracefully to Guild's MyPath2Own / DPA / 1% Down / Zero Down programs** for users who can qualify with assistance.
6. **Capture the lead** at the end (name + email + phone, mirroring Guild's own funnel) so the loan officer gets a richer, pre-qualified lead instead of a bare inquiry.
7. **Match by state and property type** using Guild's own published product matrix; do not show programs the user is not eligible for (e.g., don't show USDA to a buyer in Manhattan, don't show ITIN to a US citizen with an SSN).
8. **Integrate with Guild's loan-officer search** at the end — same `/api/v1/branches?state=…` endpoint that Guild already uses — so the diagnostic can route the warm lead to the correct local LO.
9. **Track denial-reason data anonymously** (no PII) to feed product development — what % of denied users are 30 points away from FHA? What % are DTI-limited vs. FICO-limited? This is data Guild does not have today.

### 14d. Why this is a real opportunity
- Guild's current online prequalification journey is **the worst of both worlds**: low friction (no SSN, no credit hit) but also low information (no actual prequal). A user who completes Guild's online flow today has not been told whether they qualify — they have just submitted a lead form. This means **every denied user is a *post-LO-call* denial**, not a self-serve denial. A self-serve diagnostic would not cannibalize any existing Guild flow; it would replace a void.
- The prequalification calculator is a *trailing indicator* — it tells you what you can afford given inputs you have to self-supply. A diagnostic would be a *leading indicator* — it tells you what you need to change to qualify.
- MyPath2Own is Guild's tacit admission that the existing flow doesn't work for unqualified buyers; it requires manual handoff to an LO + eHome America classes. A diagnostic could automate the triage into MyPath2Own vs. ITIN vs. Doctor vs. Section 184 vs. DPA, which MyPath2Own cannot do today.
- Guild explicitly markets to 25+ niche audiences (ITIN, Section 184, Doctor, manufactured, renovation, etc.), but the online funnel is one-size-fits-all (Purchase / Refinance / State). A diagnostic is the only place to expose the full program matrix online.

---

## 15. Appendix — Key API endpoints (from the React bundle)
- `POST /api/v1/preapp` — submits the lead-capture form (steps 1–5)
- `GET  /api/v1/branches?state=…&sessionId=…&domain=…` — branch/loan-officer search
- `GET  /api/v1/auth/sso-start` — silent SSO for returning applicants
- `POST /api/v1/captcha/validate` — reCAPTCHA v3 validation
- `POST /api/v1/leads/error` — error reporting (mailto fallback to `retailescalations@guildmortgage.com`)
- `mortgage.help@guildmortgage.net` — public help email
- `800.283.8823` — phone for new loans / refi
- `1.800.365.4441` — existing-loan servicing line
- `858-560-6330` — San Diego home office
- 5887 Copley Dr., Floors 1, 3, 4, 5, 6, San Diego, CA 92111 — home office

---

## 16. Quick-Reference: What to Quote in a Sales Pitch

> "Guild's 'Apply Online' button looks like a prequalification, but it's actually a 5-step lead form asking for name, email, loan type, and state. There's no soft credit pull, no SSN, no income, no FICO, no DTI. The only number that gets crunched is on the standalone affordability calculator, which is explicitly disclaimed as 'illustrative, not a commitment to lend.' The real prequalification happens after a loan officer calls you and pulls your credit offline. If you get denied, the only 'Sorry' message on the entire site is a generic 500-error page that opens your email client. There is no diagnostic, no denial reason, no 'here's what to fix' roadmap. The closest thing Guild has to a fallback is MyPath2Own, which routes you to a human loan officer + eHome America classes for up to $4,000 in down-payment assistance — but that requires you to find an LO and ask for it."
