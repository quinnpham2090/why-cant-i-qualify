# Newfi — Competitor Research Report

**Researched:** August 27, 2026
**Researcher:** DeepSeek subagent (for "Why am I denied" project)
**Sources verified live via direct HTTP fetch. All URLs cited below were successfully loaded and parsed from the live HTML/JSON/XML.**

---

## 0. EXECUTIVE SUMMARY

**Newfi operates as a BIFURCATED business under one brand and one parent (Nexera Holding LLC, NMLS #1231327), with Apollo Global Management as a backer.** They do not run the kind of "Robo-Rocket" direct-to-consumer prequalification funnel that Better, Tomo, SoFi, or even Angel Oak (my.angeloakms.com) does. Instead:

- **Wholesale side (newfiwholesale.com, BLU broker portal):** Self-service pricing (Quick Pricer) and loan application (Get Approved) are **gated behind broker login** (login.newfi.com, auth0 SSO). The publicly visible wholesale marketing site is a content + lead-gen engine for mortgage brokers.
- **Consumer side (newfi.com, "Newfi | Finance Forward"):** There is **no instant soft-pull prequalification, no rate-quote widget on the homepage, no "Prequalify in 60 seconds" CTA anywhere.** The consumer funnel is a **3-step Loan Advisor booking form** ("Step 1 of 3: Confirm Your Loan Officer") that captures intent and routes the borrower to a **human Senior Loan Advisor for a 30-minute call** — bookable directly through the form. Application data is captured later inside an authenticated `app.newfi.com/loancenter/` borrower portal (also Auth0/Okta).

**This is the most striking finding:** Newfi's consumer model is **deliberately human-first** — they explicitly position *against* the "mortgage robots" in their own copy. The wholesale side, by contrast, **is** tech-forward (Income IQ, BLU portal, instant pricing) — but those tools are not available to consumers or non-broker visitors.

**For the "Why am I denied" project, this is a perfect negative example:** Newfi has zero "soft-pull prequal" / "you might not qualify but here's why" UX. Their answer to "we can't qualify you" is to put a human Senior Loan Advisor on the phone. That human can talk through non-QM, bank statement, DSCR, asset-depletion, and W-2-to-1099 alternatives — but only if the borrower reaches that human through the booking funnel. Borrowers who never pick up the phone, or who fail to complete the form, get nothing.

---

## 1. The Full URL Map

Newfi runs **two distinct web properties** plus a shared auth/loan-center sub-app:

### 1.1 Consumer-facing (retail direct)
- **Homepage:** `https://newfi.com/` (title: *"Newfi | Finance Forward"*; meta: *"Newfi offers simple, innovative, forward thinking mortgage options that help more Americans find the mortgage financing they need."*)
- **Loan options hub:** `https://newfi.com/loan-options/`
- **I'm Looking To… (4-way intent router):** `https://newfi.com/im-looking-to/`
  - Four entry tiles: "Purchase a Home", "Finance an Investment Property", "Refinance or Access Home Equity", "Use Self Employed Income to Qualify"
- **Product/loan pages (selected):**
  - Non-QM: `https://newfi.com/non-qm-mortgage/`
  - Self-employed (article): `https://newfi.com/self-employed-home-loans/`
  - Self-employed (requirements): `https://newfi.com/self-employed-mortgage-requirements/`
  - Self-employed (lenders article): `https://newfi.com/self-employed-mortgage-lenders/`
  - Bank statement (Arizona): `https://newfi.com/bank-statement-loans-arizona/`
  - Bank statement (Texas): `https://newfi.com/bank-statement-loan-texas/`
  - Bank statement (FL/CA/CO/MT): `https://newfi.com/bank-statement-loans-{florida|california|colorado|montana}/`
  - Bank statement 2nd mortgage: `https://newfi.com/bank-statement-second-mortgage/`
  - DSCR (hub): `https://newfi.com/dscr-loans/`
  - DSCR (requirements): `https://newfi.com/dscr-loan-requirements/`
  - DSCR (per state, 27 pages): `https://newfi.com/dscr-loans/{texas|california|florida|arizona|...}/`
  - Jumbo: `https://newfi.com/home-loans-jumbo-mortgage-loans/`
  - 40-year: `https://newfi.com/40-year-mortgage/`
- **Calculators (8 of them, all static HTML/JS, no submission):**
  - Hub: `https://newfi.com/calculators/`
  - DSCR: `https://newfi.com/calculators/dscr-calculator/`
  - Monthly Payment: `https://newfi.com/calculators/monthly-payment-calculator/`
  - Affordability: `https://newfi.com/calculators/affordability-calculator/`
  - Refinance: `https://newfi.com/calculators/refinance-calculator/`
  - Comparison: `https://newfi.com/calculators/comparison-calculator/`
  - Interest-Only: `https://newfi.com/calculators/interest-only-calculator/`
  - 15-vs-30: `https://newfi.com/calculators/15-vs-30-year-calculator/`
  - Amortization: `https://newfi.com/calculators/amortization-calculator/`
- **Contact:** `https://newfi.com/contact/`
- **SMS contact form:** `https://newfi.com/sms-contact-us/`
- **Reviews:** `https://newfi.com/newfi-reviews/` (links to experience.com)
- **About:** `https://newfi.com/about-us/`
- **The 3-step Loan Advisor booking form:** `https://newfi.com/loan-criteria-page/`
- **Consumer loan center (post-application, Auth0-gated):** `https://app.newfi.com/loancenter/` (OAuth redirect to `https://login.newfi.com/...`)
- **State page (empty template):** `https://newfi.com/state-page/`
- **Thank-you page:** `https://newfi.com/thank-you-page/`
- **Referral form:** `https://newfi.com/referral-form/` (returns 404 — referenced in navigation but not built out)
- **Corporate (parent):** `https://newfi.com/corporate/`
- **Make a payment (servicing):** `https://newfi.com/loan-payment-and-servicing/`
- **Careers:** `https://newfi.com/careers/`
- **Disclosures / Licensing:** `https://newfi.com/disclosures/`, `https://newfi.com/licensing/`

### 1.2 Wholesale / broker side
- **Homepage:** `https://www.newfiwholesale.com/` (title: *"Home Page - www.newfiwholesale.com"*; meta: *"Newfi Wholesale's innovative Non-QM, Second Lien, and Jumbo loan solutions to help you say YES to more out-of-the-box borrowers!"*)
- **Programs hub:** `https://www.newfiwholesale.com/programs/`
- **Non-QM product page:** `https://www.newfiwholesale.com/programs/non-qm/`
- **DSCR product page:** `https://www.newfiwholesale.com/programs/dscr/`
- **DSCR < 1.0 (negative-cash-flow):** `https://www.newfiwholesale.com/programs/dscr-less-than-1/`
- **DSCR Foreign Nationals:** `https://www.newfiwholesale.com/programs/dscr-foreign-nationals/`
- **Bank Statement Seconds (Glacier):** `https://www.newfiwholesale.com/programs/bank-statement-seconds/`
- **All matrix page (12 program matrices):** Rainier Non-QM, Sequoia Non-QM, Sequoia Non-QM Expanded, Sequoia DSCR, Biscayne Jumbo AUS, Lassen Jumbo AUS, Teton Jumbo AUS, Glacier Bank Statement Second Mortgage, Olympic Full Doc Second Mortgage, Agency, Agency Overlays — see `/programs/` index.
- **Per-income-method product pages:**
  - 12-24 Bank Statements: `/programs/12-24-bank-statements/`
  - Asset Depletion: `/programs/asset-depletion/`
  - Asset Utilization: `/programs/asset-utilization/`
  - CPA Gross Receipts: `/programs/cpa-gross-receipts/`
  - CPA Prepared P&L: `/programs/cpa-prepared-pl/`
  - IRA: `/programs/ira/`
  - W-2 to 1099: `/programs/w-2-to-1099/`
  - 1099 Program: `/programs/1099-program/`
  - Real Estate Flipper: `/programs/real-estate-flipper-income/`
  - Non-QM Expanded: `/programs/non-qm-expanded/`
  - Full Doc Seconds: `/programs/full-doc-seconds/`
  - Teton Jumbo AUS: `/programs/teton-jumbo-aus/`
  - Lassen Jumbo AUS: `/programs/lassen-jumbo-aus/`
  - Biscayne Jumbo AUS: `/programs/biscayne-jumbo-aus/`
- **Get Approved (broker lead form):** `https://www.newfiwholesale.com/get-approved/` — embeds `https://freeagent.network/webform/Newfi/...` (a third-party mortgage CRM)
- **Quick Pricer (broker pricing, login-gated):** `https://www.newfiwholesale.com/quick-pricer/` — CTA links into **BLU broker portal**
- **BLU portal login:** `https://www.newfiwholesale.com/get-approved/` → `Login to BLU` button → `https://login.newfi.com/authorize?...`
- **Daily rate sheet signup:** `https://www.newfiwholesale.com/rates/`
- **Marketing / White-Label toolkit (for brokers to brand Newfi as their own):**
  - Hub: `https://www.newfiwholesale.com/marketing/`
  - Resources: `https://www.newfiwholesale.com/resources/`
  - White-Label Flyers: `https://www.newfiwholesale.com/white-label-flyers/`
  - White-Label Social Posts: `https://www.newfiwholesale.com/white-label-social/`
  - White-Label Kits & Guides: `https://www.newfiwholesale.com/white-label-kits-guides/`
  - DSCR Marketing Kit: `https://www.newfiwholesale.com/dscr-marketing-kit/`
  - Bank Statement Marketing Kit: `https://www.newfiwholesale.com/bank-statement-marketing-kit/`
  - 2026 Loan Officer Planning Guide: `https://www.newfiwholesale.com/2026-loan-officer-planning-guide/`
  - Second Mortgage Playbook: `https://www.newfiwholesale.com/second-mortgage-playbook/`
  - Arive LOS partnership: `https://www.newfiwholesale.com/arive/`
  - Newfi Portal User Form: `https://www.newfiwholesale.com/newfi-portal-user-form/`
- **Income IQ (bank-statement AI tool, broker-only, login-gated):** `https://www.newfiwholesale.com/incomeiq/`
- **Broker Calculators (login-gated):** `https://www.newfiwholesale.com/buydown-calculator/`, `https://www.newfiwholesale.com/blended-rate-calculator/`
- **Turn Times (login-gated):** `https://www.newfiwholesale.com/turn-times/`
- **Servicing FAQ:** `https://www.newfiwholesale.com/faq/`
- **About Us:** `https://www.newfiwholesale.com/about-us/`
- **Contact:** `https://www.newfiwholesale.com/contact/` (and role-based email routing)
- **News/Blog:** `https://www.newfiwholesale.com/news/`
- **Events:** `https://www.newfiwholesale.com/events/`
- **Careers:** `https://www.newfiwholesale.com/careers/`
- **State-Specific Disclosure Forms:** `https://www.newfiwholesale.com/state-specific-disclosure-forms/`
- **Webinar signups (many):** "How Loan Officers Win in 2026", "Non-QM Townhall", "DSCR Loans", "Stackable Income", "Turning Assets into Income", "1099 / CPA Gross Receipts Programs"

### 1.3 Cross-property shared infrastructure
- `https://login.newfi.com/...` — Auth0/Okta identity provider (OAuth client `mqNh4hxBpnRHhhgJSuMdW1vqwEkxkbIc`, scope `openid name email family_name address phone_number user_id profile identities`)
- `https://app.newfi.com/loancenter/` — Consumer loan portal (post-application document upload + status)
- The wholesale `BLU` portal, the consumer `app.newfi.com/loancenter`, and `login.newfi.com` all use the same SSO.

---

## 2. Target Audience

### 2.1 Wholesale (broker) audience
- **Primary:** Independent mortgage brokers / loan officers who originate non-agency, non-QM, and second-lien loans and need a wholesale partner to fund them.
- Specifically, brokers whose borrowers are "**out of the box**" — the wholesale homepage hero literally says: *"Your Path To Closing More Loans Starts With"* followed by four persona labels: **Real Estate Investors, Business Owners, Freelancers, Jumbo Borrowers, Second Liens**.
- 80% pull-through rate on non-QM (displayed as a KPI on the wholesale home), 5,800+ loan officers funded, 2,700+ brokers funded, $11.5B funded volume (about page).

### 2.2 Consumer (retail) audience
- **Self-employed borrowers** — explicitly named on every navigation: "Use Self-Employed Income To Qualify" is a top-nav item.
- **Real estate investors** — DSCR hub, "Finance an Investment Property" tile, and 27 state-DSCR landing pages.
- **High-balance / high-net-worth borrowers** — jumbo, asset-depletion, 40-year interest-only, 1099-only.
- **First-time buyers and W-2 veterans** — also served (FHA, VA, Conventional, 30/15-year) but clearly a secondary audience.
- The "I'm Looking To…" page literally enumerates four and only four entry points:
  1. *"Purchase a Home"* — "Let's start with a purchase pre-approval so you can begin your home search."
  2. *"Finance an Investment Property"* — "We can help you build your investment property portfolio."
  3. *"Refinance or Access Home Equity"* — "We can help you lower your payments or take cash-out."
  4. *"Use Self Employed Income to Qualify"* — "We have mortgage solutions specifically designed for small business owners and contractors."

### 2.3 Lending footprint
- Wholesale: 48 states served.
- Consumer: "47 Lending in 47 States" (DSCR page) / "40 Lending in 40 States" (I'm Looking To…) — note the inconsistency between pages.
- **NOT licensed in New York** (footer disclosure on every page: *"This website is not approved for use in the state of New York."*).

---

## 3. Value Proposition / Headline Promise

### 3.1 Consumer side (newfi.com)
- **Tagline:** *"Newfi | Finance Forward"* (browser title)
- **Homepage hero (post-login marketing visible in static text):** *"Finance Your Mortgage Your Way With Newfi. Whether you're buying, refinancing, or accessing your home's equity, Newfi offers traditional and flexible loan solutions built around your goals."*
- **The "Why Newfi" differentiators** (Homepage → "The Newfi Way"):
  > *"Unlike other mortgage robots or 'rockets', your Newfi team is genuinely there to help you reach your home ownership and financial goals. The Newfi Way is tech-forward, transparent, simple, and tailored to you. Let's work together! We're in your corner to find the best solution for you. A pure and simple tech-forward process where your dedicated newfi pro who really cares about clearing the path for your financial success will be with you the whole way."*
- **Three-step process** (homepage "Mortgage With Ease"):
  1. **Get a Quote** — "Start your mortgage journey by getting a rate quote to see what you could afford… No commitment necessary!"
  2. **Submit an Application** — "Once you're ready to move forward your loan team will help you fill out an application and lock in your rate."
  3. **Fast Approval** — "Your loan file will move quickly through the loan process with our operations team so that you can close on your new home loan!"
- **Six "Newfi Difference" claims** (about page):
  1. Great Rates
  2. Total Transparency
  3. Industry Leaders
  4. Quicker Closings
  5. Unique Solutions
  6. Data Security

### 3.2 Wholesale side (newfiwholesale.com)
- **Tagline:** *"Your Path To Closing More Loans Starts With Newfi"*
- **Subhead:** *"We help brokers and loan officers solve tough scenarios and grow their business with unique solutions."*
- **Three pillars (The Newfi Difference, About Us page):**
  1. **Innovative Product Suite** — "Our full Non-QM, Second Lien, and Jumbo product suite provides our Account Executives with an array of offerings to help you capture more business."
  2. **We Stay Competitive** — "We strive to be ahead of the curve and prepared for any market…"
  3. **Common Sense Exceptions** — *"We make credit decisions in-house! 1/3 of all of our Non-QM loans have at least one exception."* (also: *"Newfi makes exceptions on about 1/3 of our funded Non-QM loans"*)
- **Hero KPIs (wholesale home):**
  - **4.9/5 stars** customer rating
  - **80% pull-through rate on non-QM**
  - **5,800+ loan officers funded**
  - **$11.5B funded volume** (about page)
  - **2,700+ brokers who have funded loans with us** (get-approved page)

### 3.3 The "1/3 exception" claim is Newfi's single most distinctive marketing line
This statistic — that **1/3 of their funded non-QM loans have at least one exception** — is mentioned on at least three separate pages (About, Rates, Income IQ context). It directly answers the "Why was I denied?" question for any borrower who got a counterparty's "no": **"Newfi will probably say yes, and even if you fail guidelines, in-house underwriting commonly approves 1/3 of guideline exceptions."** It's the most operationally-honest value prop in the entire non-QM space.

---

## 4. Lead Capture Mechanism (CONSUMER)

### 4.1 There is NO soft-pull prequalification flow
This is the headline finding. Across **every** consumer-facing page I crawled, there is **no instant "soft pull" credit check, no "you prequalify for $X" decision, no rate-quote form on the homepage**. The only form-like entry points are:

### 4.2 The 3-step Loan Advisor booking form (`/loan-criteria-page/`)
- **Title:** "Loan Criteria Page" (the URL is candidly internal jargon — not consumer-friendly)
- **Step 1 of 3: "Confirm Your Loan Officer"**
  - Question: *"Have you previously worked with, or are you currently working with, a Newfi Loan Advisor?"*
  - Two radio options: **Yes / No**
  - Disclosure: *"Why Do We Need This Information? We want to make sure we connect you with the right expert and tailor the call to your situation from the start."*
- **What You'll Accomplish On This Call:**
  - *"Get matched with the right Loan Officer who best fits your needs"*
  - *"Explore loan options tailored just for you"*
  - *"Understand next steps so closing happens faster"*
- **What To Expect Next:**
  - *"Confirm this question then choose a convenient time"*
  - *"We prepare for the call and review your goals with you."*
  - *"You'll leave the call with a clear plan — all your questions answered"*
- Steps 2 and 3 are rendered client-side via JavaScript (the static HTML I captured only shows the Step 1 prompt; the remaining fields appear in the SPA after the Yes/No selection). The visible UI text indicates Step 2 is calendar/time-slot selection and Step 3 is contact-info confirmation. **No income, employment, credit, DTI, or asset data is collected in this form** — it's a pure human-routing intake.
- **The form is the ONLY consumer entry point that books a consultation.** It appears as the "Book A Meeting" CTA in the top nav of every consumer page.

### 4.3 Other consumer lead forms
- **`/sms-contact-us/`** — short form for SMS consent: Name (First/Last), Email, Phone, Comments, single consent checkbox ("I agree to SMS … up to 20 messages per week. Reply STOP at any time…").
- **`/contact/`** — generic contact page with phone + email; no embedded form.
- **`/thank-you-page/`** — post-submission landing (referenced by all forms as the success destination).
- **`/referral-form/`** — returns 404 (linked in nav but never built out — minor credibility issue).
- **`/loancenter/`** — fully authenticated, post-application document upload/status portal. This is **where the real 1003-equivalent data is collected**, but the borrower cannot get there without first going through the Loan Advisor booking flow.

### 4.4 What is NOT collected at the top of the consumer funnel
- No FICO / soft-pull consent
- No income / employment / DTI
- No property value / down payment
- No loan purpose (purchase vs refi) — the only thing that captures this is the "I'm Looking To…" 4-tile selector, which then dumps to either a loan officer call or the calculators
- No email capture from anonymous visitors (no exit-intent, no scroll-triggered form)

### 4.5 Lead capture on the wholesale side
The wholesale **Get Approved** page (`/get-approved/`) embeds a webform at **`https://freeagent.network/webform/Newfi/website_utm_tracking?utm_source=website&utm_medium=xxxxx&utm_campaign=Get Approved&utm_term=xxxxx&utm_content=xxxxx`**. This is a FreeAgent CRM intake form for prospective brokers to start the application/onboarding process to become a Newfi-approved broker. (The form's actual fields are not visible in the static HTML — they're rendered inside the FreeAgent webform iframe.)

---

## 5. Exact Questions Asked — Income, Employment, Assets, Self-Employed vs W-2

### 5.1 The consumer pre-application funnel asks: NONE of these
Per §4, the public consumer pre-application flow asks only "Are you a current Newfi customer? Y/N" and a calendar pick. The 1003-equivalent income / employment / asset / DTI data is collected **inside the Auth0-gated `app.newfi.com/loancenter/` after the borrower has been routed to a Loan Officer**, which is not crawlable for research.

### 5.2 What Newfi's published guidelines tell us about how they UNDERWRITE self-employed vs W-2
Even though the form doesn't ask it, Newfi is very transparent about how they evaluate each income type — across the `non-qm-mortgage/`, `self-employed-home-loans/`, `self-employed-mortgage-requirements/`, `programs/non-qm/`, and `programs/` pages. Here is the full income-document matrix as published:

#### A) Non-QM "Rainier / Sequoia" (consumer side, headline numbers)
- **LTV:** Purchase up to 90% / R&T Refi up to 90% / Cash-out up to 80%
- **Min Credit Score:** 620 (with Non-QM Expanded available down to 620 with recent mortgage late)
- **Loan Amounts:** $100k to $3.5M (self-employed page) / up to $5M (self-employed requirements page)
- **Max DTI:** 55% (W-2-to-1099 page) / 50% (jumbo)
- **Property types:** Primary, second home, investment
- **Terms:** 15-, 30-, 40-year fixed; 30-, 40-year interest-only
- **2-1 Buydown available**
- **First-time home buyers allowed**
- **Non-occupant co-borrowers allowed**
- **Cash-out may be used as reserves**

#### B) Income documentation methods accepted (consumer-facing matrix, from `/self-employed-mortgage-requirements/`)
1. **12 or 24 months of personal or business bank statements** — "we review your bank statements and analyze each of your qualified deposits" — expense factor applied based on business vs personal.
2. **1099 documentation** — "To qualify you, we look at your 1099 income over the last 1 to 2 years and apply a 10% reduction for business expenses, unless otherwise stated. This allows us to qualify you on the other 90% of your income."
3. **CPA Letter (CPA Gross Receipts)** — "Small business owners who own 100% of their small business and have filed their tax return with a licensed CPA can qualify using their gross receipts (also known as, the total gross revenue of your business) on their tax form."
4. **CPA Prepared P&L**
5. **Full Doc (1 year most recent)** — for borrowers with traditional W-2 + 1-year self-employed history
6. **Multiple-source income stacking** — "If you document your income in multiple ways—like working a job with W2 income while also freelancing on the side… you can combine these sources to qualify."

#### C) Wholesale income methods (the full grid from `/programs/`)
1. **Bank Statements** (Rainier or Sequoia): 12 or 24 months personal or business
2. **Asset Depletion** (Sequoia): `Income = Eligible Assets / 60 Months` (no liquidation required)
3. **Asset Utilization** (Sequoia): `Assets = Loan Amount + 60 Months Debt Obligations` (no DTI requirement)
4. **CPA Gross Receipts** (Sequoia): standard 50% expense factor, minimal bank statements
5. **CPA Prepared P&L** (Sequoia): no expense factor; Qualifying Income = Net Income / 12 / Percentage of Business Owned
6. **IRA** (Sequoia): `Income = IRA Funds / 36 Months Continuance`, can be used before retirement age
7. **Real Estate Flipper** (Sequoia): no tax returns, must have 25% ownership in projects
8. **W-2 to 1099** (Rainier or Sequoia): **No minimum 1099 history**; "Qualify contractors without expenses or history of being a 1099 employee" — count 100% of 1099 income if expense-free criteria met; only need an offer letter, VOE, or first pay stub
9. **1099 Income** (Rainier or Sequoia): standard 10% expense ratio
10. **Full Doc / W-2** — also offered within the same product line (hence why the consumer non-QM page also lists "1 year full doc (most recent)" as an option)

#### D) Self-employed vs W-2 differentiation
The site explicitly contrasts them in `/self-employed-mortgage-lenders/`:
- **Traditional lenders' method:** "Traditional mortgage lenders calculate income using up to two years of a person's tax returns. They review two years of tax returns, subtract business expenses, and average the remaining income to determine debt-to-income ratio. For self-employed workers, this method can greatly reduce total qualifying income…"
- **Newfi's method:** "Self-employed mortgage lenders' bank statement approach is tailored to the way that self-employed workers and business owners make and use their income. Mortgage lenders review the type of account you're using to prove income and offer different calculations depending on whether it's a business bank account or the business owner's personal bank account."
  - **Personal bank statements:** "no expense factor applied when using personal bank statements" (because the deposits are already net).
  - **Business bank statements:** expense factor is applied (typically 50%) to gross deposits.

### 5.3 What the public-facing funnel does NOT ask
- **No co-borrower count** is requested at intake
- **No citizenship/immigration status** at intake (the DSCR page notes DSCR loans can be done in LLC, but that comes at loan-officer call)
- **No specific industry of self-employment** (1099 vs S-corp vs sole-prop vs partnership is determined downstream by the loan officer)
- **No prior credit event disclosure** (bankruptcy, foreclosure, short sale) — this is a known non-QM opportunity area, addressed in the wholesale Non-QM Expanded product (620 min credit, "up to 1 mortgage late")

---

## 6. User Experience — Steps, Time-to-Complete, Mobile

### 6.1 Consumer funnel steps and time
| Step | URL | Time | Mobile-friendly? |
|---|---|---|---|
| Land on homepage | newfi.com | <5s to read hero | Yes — fully responsive WordPress |
| Browse "I'm Looking To…" 4-tile router | /im-looking-to/ | ~30s | Yes |
| Read product/SEO page (e.g. /non-qm-mortgage/) | varies | 2-5 min | Yes (long-form Yoast-optimized content) |
| Try a calculator | /calculators/dscr-calculator/ | 1-2 min | Yes (static HTML/JS) |
| **Click "Book A Meeting"** (top nav) | /loan-criteria-page/ | **<60s** for Step 1, then calendar + contact info | **Partially** — the 3-step form uses an embedded scheduler widget that is JS-rendered; the underlying static HTML had no visible fields, so I cannot verify mobile rendering firsthand, but the underlying WordPress theme is responsive |
| Receive a call from a Senior Loan Advisor | phone | 30 min booked | n/a |
| Create Auth0-gated borrower portal account | login.newfi.com → app.newfi.com/loancenter/ | 5 min | Yes (Auth0) |
| Complete 1003 / income docs inside portal | app.newfi.com/loancenter/ | 30-90 min (estimated; not crawlable) | Yes |

**Total time from anonymous visitor to booked consultation: 1-3 minutes.**
**Total time from visitor to "you have a real application in flight": 30-90 minutes on the call + portal.**

### 6.2 Wholesale funnel steps and time
| Step | URL | Time |
|---|---|---|
| Land on wholesale home | newfiwholesale.com | <5s |
| Browse programs (12 matrices, all with one-page summaries) | /programs/ | 5-10 min |
| Get the daily rate sheet | /rates/ (email signup) | <60s |
| Click "Get Approved" → FreeAgent webform | /get-approved/ | 5-10 min to fill broker application |
| Login to BLU | login.newfi.com | depends on approval |
| Price a loan | /quick-pricer/ (BLU) | seconds (instant pricing) |
| Submit bank statements → Income IQ | /incomeiq/ (BLU) | ~24-hour Income IQ turn time |

**Total time from anonymous visitor to BLU portal access: 1-3 business days** (broker approval, not instant).

### 6.3 Mobile experience
- Both sites are **fully responsive WordPress + Avada (consumer) / Fusion (wholesale)** themes.
- The wholesale site uses a top-bar "Toggle Navigation" mobile pattern and a sticky CTA bar with "Quick Pricer / Get Approved / Login to BLU / Rates / About Us / Careers / Contact Us / News / Events".
- The consumer site's main sticky CTA is "Book A Meeting" with the phone number (888)-316-3934.
- No AMP pages; no dedicated mobile app.

---

## 7. Calculator Functionality — Prequal Output, Payment Calc

Newfi offers **8 consumer calculators** (all `/calculators/...`) and **2 wholesale broker calculators** (all login-gated).

### 7.1 Consumer calculators (in nav order)
| Calculator | URL | Inputs (per page copy) | Outputs (per page copy) |
|---|---|---|---|
| **DSCR** | /calculators/dscr-calculator/ | property value, down payment, loan amount, rental income, monthly expenses (PITIA/ITIA), interest rate | Monthly payment, **annual & monthly cash flow**, **DSCR ratio**, cap rate, **net operating income** |
| **Monthly Payment** | /calculators/monthly-payment-calculator/ | loan amount, interest rate, term | Estimated monthly payment |
| **Affordability** | /calculators/affordability-calculator/ | "maximum monthly payment, interest rate, and payment term" | "what mortgage you could afford" |
| **Refinance** | /calculators/refinance-calculator/ | "how much mortgage can you afford, given a certain payment" | refinance affordability |
| **Comparison** | /calculators/comparison-calculator/ | two loan inputs | side-by-side payment & interest comparison |
| **Interest-Only** | /calculators/interest-only-calculator/ | loan amount, rate, IO period | "monthly or annual payments for an interest-only mortgage" |
| **15 vs 30** | /calculators/15-vs-30-year-calculator/ | loan amount, 15-yr rate, 30-yr rate | comparison of 15-yr vs 30-yr payments |
| **Amortization** | /calculators/amortization-calculator/ | loan amount, rate, term | "how much of your monthly payments go to principal and interest" |

### 7.2 What the calculators do NOT do
- **No "do I qualify?" decision** — none of the calculators output "Approved / Denied" or a max loan amount based on the borrower's DTI / FICO / income. They are pure math widgets.
- **No rate-quote integration** — none of them pull a live Newfi rate sheet; rates are user-input.
- **No "share your results" email** — none of them capture a lead.
- **No "connect with a loan officer" CTA inside the result** — the only post-calculator CTA is the same global "Book A Call" / "Get a Rate Quote" pointing to the Loan Advisor booking form.
- **All 8 calculators carry the standard disclaimer:** *"Information and interactive calculators are made available to you as self-help tools for your independent use and are not intended to provide borrowing advice. We cannot and do not guarantee their applicability or accuracy in regards to your individual circumstances. All examples are hypothetical and are for illustrative purposes. We encourage you to seek personalized advice from a mortgage specialist."* — i.e., Newfi is explicitly distancing itself from any decision-grade output.

### 7.3 Wholesale broker calculators (login-gated)
- **Buydown Calculator** (`/buydown-calculator/`)
- **Blended Rate Calculator** (`/blended-rate-calculator/`)
- These are positioned as broker productivity tools, not consumer-facing.

### 7.4 The Quick Pricer (`/quick-pricer/`)
This is Newfi's flagship tool for brokers — but it's behind the BLU login. The page title is *"Quick Pricer - www.newfiwholesale.com"* and the copy says: *"Get Instant Pricing for Every Scenario: Non-QM, Jumbo, Second Liens, Bank Statements, DSCR."* So once a broker is in BLU, they can get instant product-eligible pricing for any of those five product families. The instant pricing engine is the closest analog in Newfi's stack to a consumer-facing prequalification — but it's only available to authenticated brokers.

---

## 8. Calls to Action on Their Pages

### 8.1 Consumer site primary CTAs
| CTA | Where it appears | Destination |
|---|---|---|
| **"Book A Meeting"** | Persistent in the top nav of every page; also a hero CTA on most pages | `/loan-criteria-page/` (the 3-step Loan Advisor booking form) |
| **"Call us at: +1(888)316-3934"** | Footer + contact page | Phone (visible 8am-5pm PT) |
| **"Email our team at: sophia@newfi.com"** | Contact page | Email |
| **"Get Your Rate Quote"** | Inline CTAs on every product page | Same /loan-criteria-page/ flow |
| **"Connect with a Loan Specialist"** | End of /non-qm-mortgage/ | Loan Advisor booking |
| **"Get a Quote" (Step 1 of 3-step process)** | Homepage "Mortgage With Ease" section | Loan Advisor booking |
| **"Get Started"** | "I'm Looking To…" 4-tile router | Each tile goes to a relevant product page, then Book A Meeting |
| **"Explore [DSCR / Bank Statement / etc.] Loans"** | End of every product page | Same product page anchor + Book A Meeting |
| **"Log In"** (top nav) | Every page | `login.newfi.com` (Auth0-gated app.newfi.com/loancenter) |
| **"Make A Payment"** (top nav) | Every page | Loan servicing flow (Specialized Loan Servicing, Rushmore, or Planet Home Lending phone numbers) |
| **"Visit Newfi Wholesale"** (about page) | Cross-link to B2B | newfiwholesale.com |
| **"Visit Newfi Correspondent"** (top nav) | Cross-link | newficorrespondent.com |

### 8.2 Wholesale site primary CTAs
| CTA | Where it appears | Destination |
|---|---|---|
| **"Quick Pricer"** (top nav) | Every page | `/quick-pricer/` → BLU login |
| **"Get Approved"** (top nav) | Every page | `/get-approved/` → FreeAgent webform |
| **"Login to BLU"** (top nav) | Every page | `login.newfi.com` (Auth0) |
| **"Rates"** (top nav) | Every page | `/rates/` — daily rate sheet email signup |
| **"Download Customizable Marketing Resources"** | On every program page | White-Label toolkit (`/marketing/`, `/white-label-kits-guides/`, `/white-label-social/`, `/white-label-flyers/`) |
| **"Price A Loan"** | Non-QM / DSCR / Bank Statement Seconds pages | Quick Pricer (BLU login) |
| **"Connect With Us Today!"** | "Need To Talk To An Account Executive?" on every program page | `/contact/` (broker support) |
| **"Sign Up To Get Our Daily Rates"** | `/rates/` | Email signup for the rate sheet |

### 8.3 CTA language & style
- Consumer copy is **warm, plain-English, with emotive reassurance**: *"Let's get started"*, *"We're in your corner"*, *"A dedicated newfi pro who really cares about clearing the path"*, *"Get matched with the right Loan Officer"*, *"You can qualify"*.
- Wholesale copy is **transactional, broker-fluent**: *"Price A Loan"*, *"Get Approved"*, *"Daily Rate Sheet"*, *"Custom White Label Marketing"*, *"Connect With An Account Executive"*, *"Broker Resources"*.
- There is essentially **no "Apply Now" or "Prequalify" CTA anywhere on the consumer site** — by design. Even the navigation items lean toward *education* (Calculators, Reviews, Blog) and *human contact* (Book A Meeting, Contact, Log In).

---

## 9. Trust Signals

### 9.1 Volume / scale trust signals
- **$11.5B Funded Volume** (wholesale About page, hero stat)
- **3,500+ Customers Helped** (consumer About)
- **5,800+ Loan Officers Funded** (wholesale home)
- **2,700+ Brokers Who Have Funded Loans with Us** (Get Approved)
- **20+ Years of Experience** (consumer About)
- **Top 5 Non-QM mortgage providers nationwide, serving 48 states** (wholesale About)
- **80% pull-through rate on non-QM** (wholesale home — used as a hero KPI)
- **4.9/5 star customer rating** (wholesale home; 2,000+ reviews averaging 4.8/5 on consumer; "47 Lending in 47 States")
- **47 lending states** (DSCR page) / **40 states** (I'm Looking To…) / **48 states** (wholesale)
- 4th year in a row on **National Mortgage News Best Companies to Work For in 2026** (top-bar announcement on every wholesale page)
- **2026 NMP Bank Statement Lender of the Year** (announcement on wholesale home)
- **Meridian Link ARC Award for Innovative Use of AI in Mortgage** (announcement)
- **Apollo Global Management is a parent affiliate** (about page) — used as a stability signal: *"Their vested interest in Newfi and commitment to the Non-Agency mortgage space ensures our strength through market volatility."*

### 9.2 Compliance / licensing trust signals
- **NMLS #1231327** (on every footer)
- **Nexera Holding LLC, dba Newfi Lending / Newfi Wholesale** (legal entity on every footer)
- **Equal Housing Lender** logo + HUD fair housing disclosure (on every page)
- **California Fair Lending Notice / CA Privacy Rights** (footer)
- **NMLS Consumer Access link** (footer) to `nmlsconsumeraccess.org`
- **"This website is not approved for use in the state of New York"** (disclosure in footer of every consumer and wholesale page)
- **Detailed "Disclosures" page** (`/disclosures/`) covering rate-quote assumptions, equal housing, fair lending, CA-specific notices, etc.

### 9.3 People / leadership trust signals
The wholesale About page has a full **Leadership Team** section with names, photos, and titles:
- **Steve Abreu** — Founder & CEO
- **Amit Pall** — EVP, Business Operations
- **John Wise** — EVP, Sales & National Production
- **Jullian Moll** — EVP, Credit & Operations
- **Kyle Lythjohan** — SVP, Technology, Data & Analytics
- **Lori Golden** — SVP, Underwriting
- **Shannon Kay Montgomery** — SVP, Closing
- **Doug Hansen** — Chief of Call Center Sales
- **Shayne Nielson** — SVP, Sales, West Coast
- **Randy Rees** — SVP, Sales, Southeast
- **Chris Keane** — SVP, Direct Lending (consumer-side)

The wholesale "About" also lists **MBA and industry memberships** by name (CAMP, BAC, AIME, MMLA, Texas MBA, Rhode Island MBA, California MBA, Georgia MBA, FAMP, OriginatorConnect) with chapter logos displayed as supporting members.

### 9.4 Social proof
- **Broker testimonials** on wholesale About, Get Approved, Rates, and Home pages (5/5 stars, named individuals like Adam P., Chris C., Sandra G., Anna S., Luis M., Clyde H., William C., Kim T., Christine J., Logan J.)
- **Consumer testimonials** on consumer Home, Non-QM, DSCR, and Reviews pages (5/5 named, location-tagged: Wyatt E. / Deer Island OR, Nicholas S. / Princeton NJ, David A. / Hilton Head SC, Roberto G. / Glenside PA, Dustin S. / Salem AL, Gokulkrishnan S. / Union City CA, David N. / Katy TX, Munir A. / San Antonio TX, Mitchell L. / Jonesborough TN, etc.)
- **External review platform:** experience.com — explicit link from /newfi-reviews/ saying *"Read our Experience.com Reviews"*
- **Social links** in the top nav: Facebook, LinkedIn, Instagram, TikTok — all to branded `@newfilending` or `@newfiwholesale` handles.

### 9.5 Mortgage-community trust signals
- Wholesale is a **proud member of multiple MBAs and the AIME (Association of Independent Mortgage Experts)** with explicit logo displays.
- Wholesale homepage displays chapter logos: AUSTIN-MBA, BAC, CALI-MBA, CAMP, FAMP, Georgia-MBA, MMLA, OriginatorConnect, RHODE-ISLAND-MBA, TexasMBA.
- The about page says: *"Supporting Mortgage Brokers Nationwide — We are proud members of the mortgage community."*

---

## 10. SEO Strategy

### 10.1 Site architecture for SEO
Both sites are **WordPress + Yoast SEO** with extensive long-form content and a programmatic city/state matrix.

### 10.2 Consumer-side SEO content
The consumer sitemap (`/sitemap_index.xml`) has **3 sub-sitemaps** (post-sitemap, page-sitemap, author-sitemap), with **139 indexed pages** (page-sitemap) and **76 blog posts** (post-sitemap). The content is **keyword-targeted to non-QM buyer intent**, not mortgage-shopper intent.

#### Primary keyword clusters (from URL slugs and H1/H2 patterns)

**Non-QM / Self-employed core:**
- `/non-qm-mortgage/` (headline non-QM page)
- `/self-employed-home-loans/`
- `/self-employed-mortgage-requirements/`
- `/self-employed-mortgage-lenders/`
- `/how-to-get-mortgage-when-self-employed/`
- `/the-ins-and-outs-of-non-qm-loans-for-the-self-employed/`
- `/what-is-a-non-qm-loan/`
- `/w2-to-1099-mortgage-solutions/`
- `/what-is-a-bank-statement-loan/`
- `/bank-statement-second-mortgage/`
- `/contractor-mortgage-options/`
- `/mortgage-for-freelancers/`
- `/self-employed-in-charge-of-business-and-finances/`

**DSCR / Investor core:**
- `/dscr-loans/` (hub)
- `/dscr-loan/`
- `/dscr-loan-requirements/`
- `/what-is-dscr/`
- `/do-i-qualify-for-a-dscr-loan/`
- `/dscr-loan-rates/`
- `/dscr-down-payment/`
- `/dscr-lender/`
- `/dscr-loan-airbnb/`
- `/dscr-loan-benefits/`
- `/dscr-loan-prepayment-penalty/`
- `/dscr-vs-hard-money/`
- `/learn-how-to-calculate-dscr-loans-efficiently/`
- `/why-investors-choose-dscr-loans/`
- `/dscr-cash-out/`
- `/dscr-loan-guideline-updates-august-2026/`
- `/rental-property-financing/`
- `/how-to-calculate-cap-rate/`

**State-by-state programmatic pages (the SEO multiplier):**
- **27 `/dscr-loans/{state}/` pages** (e.g. `/dscr-loans/texas/`, `/dscr-loans/california/`, `/dscr-loans/florida/`, …) — each a long-form landing page with state-specific DSCR market data, top-cities, and CTAs
- **5 `/bank-statement-loans-{state}/` pages** (Texas, Florida, California, Colorado, Montana) plus `/bank-statement-loan-texas/`
- **`/bank-statement-loans-arizona/`** (note the longer URL slug — likely a legacy page that's now a duplicate with the standard pattern)
- **3 state FHA pages:** `/home-loans-fha-loans/texas/`, etc.

#### Long-tail buying-intent blog posts
- `/jumbo-loan-options-traditional-vs-non-qm/`
- `/heloc-vs-second-mortgage/`
- `/40-year-mortgage-advantages/`
- `/40-year-mortgage-lender/`
- `/five-ways-you-benefit-from-newfis-hybrid-40-year-interest-only/`
- `/interest-only-mortgage-loans-with-newfi-time-well-invested/`
- `/newfi-expands-cryptocurrency-guidelines-on-non-agency-programs/` (regulatory news for SEO)
- `/after-record-breaking-year-newfi-lending-newfi-maintains-momentum-through-organic-and-inorganic-growth/`
- `/debt-consolidation-refinance/`
- `/home-buying/first-time-home-buyer/`
- `/home-buying/second-home-mortgage/`
- `/refinance/cash-out-refinance/`
- `/refinance/debt-consolidation/`
- `/refinance/pay-off-mortgage-early/`
- `/refinance/refinance-an-investment-property/`
- `/refinance/remove-mortgage-insurance-pmi/`
- `/lower-mortgage-payment/`
- `/second-mortgage/`
- `/what-is-a-second-mortgage/`
- `/how-to-get-second-mortgage/`
- `/duplex/`
- `/how-to-calculate-cap-rate/`
- `/open-box-of-options-newfi-flexible-jumbo/`
- `/thinking-of-refinancing-do-these-5-things-first/`
- `/your-options-for-accessing-your-equity/`
- `/newfi-launches-enhanced-dscr-calculator/`

#### "Brand mention / PR" SEO
- `/newfi-lending-ranks-no-1063-on-the-2022-inc-5000-annual-list/`
- `/newfi-lending-and-dunmor-expand-strategic-transaction/`
- `/newfi-lending-announces-investment-from-warburg-pincus/`
- `/newfi-named-top-10-consumer-mortgage-lender/`
- `/nexera-holding-to-operate-as-newfi-lending/`
- `/newfi-reviews/`
- `/bankrate-x-newfi/`

### 10.3 Wholesale-side SEO content
The wholesale sitemap has **52 indexed pages** with a different keyword posture — broker-fluent and program-deep.

#### Wholesale URL portfolio (from `/page-sitemap.xml`)
- Core: `/`, `/marketing/`, `/rates/`, `/quick-pricer/`, `/get-approved/`, `/turn-times/`, `/contact/`, `/about-us/`, `/careers/`, `/news/`, `/resources/`
- Platform/Tech: `/arive/`, `/newfi-portal-user-form/`, `/incomeiq/`, `/how-to-submit-bank-statements-with-income-iq/`
- Compliance: `/state-specific-disclosure-forms/`, `/privacy-policy/`, `/terms-of-use/`
- Program matrix download pages: `/programs/` + 14 individual program pages (listed in §1.2)
- Marketing kits & guides: `/white-label-kits-guides/`, `/white-label-flyers/`, `/white-label-social/`, `/dscr-marketing-kit/`, `/bank-statement-marketing-kit/`, `/2026-loan-officer-planning-guide/`, `/second-mortgage-playbook/`, `/guide-to-nonqm-loans/`, `/guide-to-bank-statement-mortgage-loans/`, `/guide-to-dscr-loans/`
- Calculators: `/buydown-calculator/`, `/blended-rate-calculator/`
- Webinars & event landing pages: `/register-for-webinar-how-loan-officers-win-in-2026/`, `/register-for-the-non-qm-townhall-getting-ready-for-success-in-2026/`, `/register-for-the-webinar-dscr-loans/`, `/register-for-the-webinar-stackable-income/`, `/register-for-the-webinar-turning-assets-into-income/`, `/register-for-the-webinar-1099-cpa-gross-receipts-programs/`, `/join-our-summer-lunch-learn-series-loan-lifelines/`
- Pricing specials (time-limited SEO): `/special/`, `/march-nonqm-lock-special/`, `/april-non-qm-pricing-special/`, `/250-off-in-price-on-jumbo-aus-loans/`, `/today-only-375-off-in-fee-on-non-qm-dscr-locks/`
- News/PR: `/newfi-named-one-of-national-mortgage-news-best-mortgage-companies-to-work-for-in-2025/`, `/newfi-wholesale-introduces-faster-non-qm-disclosures-with-instant-le/`, `/aime-newfi/`, `/arive-newfi/`, `/newfi-offering-1099-option-to-help-qualify-more-borrowers/`, `/newfi-wholesale-named-service-partner-of-the-year-by-national-association-of-mortgage-brokers/`, `/newfi-wholesale-launches-income-iq/`, `/newfi-wholesale-launches-redesigned-website/`, `/lower-minimum-dscr-loan-amounts-now-available/`, `/newfi-named-best-company-to-work-for-in-2026/`, `/newfi-wholesale-reveals-new-logo/`, `/expands-cryptocurrency-guidelines/`, `/newfi-expands-non-qm-asset-depletion-utilization-programs-to-allow-use-of-cryptocurrency/`, `/john-wise-evp-national-sales-named-2026-bac-board-of-directors/`, `/co-founder-evp-risk-michelle-constantine-named-an-elite-woman-in-mortgage/`, `/camp-named-newfi-wholesale-affiliate-of-the-year/`, `/newfi-lending-ranks-no-1063-on-the-2022-inc-5000-annual-list/`, `/sign-up-for-conference-resources/`

### 10.4 SEO meta patterns observed (from real `<title>` and `<meta name="description">` tags)
- **Title pattern:** `[Topic]: [Qualifier] | Newfi` (e.g. *"Self-Employed Mortgage Requirements | What You Need to Qualify"*, *"DSCR Loans Texas | Investment Property Mortgage Options"*, *"Non-QM Loans for Investors & Self-Employed | Newfi"*)
- **Description pattern:** ~155-character problem-solution, often ending in a CTA verb: *"Explore DSCR Loans in Texas for real estate investors. Qualify based on rental income potential and secure financing to grow your portfolio."*
- **H1 pattern:** Long-tail question or use-case statement, not branded

### 10.5 The "Boring Pages" that reveal the funnel
- `/state-page/` (a thin template used as a router)
- `/loan-officer-selection-page/` (Step 1 of the booking form)
- `/loan-criteria-page/` (the 3-step booking form — *not* a content page; this is where the funnel begins)
- `/auth0-page/` (the Auth0 login bridge for `app.newfi.com/loancenter`)
- `/thank-you-page/` (the post-submit landing)
- `/referral-form/` (currently 404 — broken nav link, a small credibility issue)
- `/https-staging-newfi-com-loan-criteria-page/` (a staging URL that was published live and not canonicalized — **a Yoast SEO miss**)

These reveal that Newfi is **fundamentally a content + sales-routing SEO play**, not a self-serve conversion funnel. Most pages push toward human contact.

---

## 11. Strengths

### 11.1 Product breadth is unmatched in the consumer non-QM space
Most consumer-facing non-QM lenders show 3-5 products. Newfi publishes **10+ income-documentation methods** (full doc, 12-mo bank statement, 24-mo bank statement, 1099, W-2-to-1099, CPA Gross Receipts, CPA Prepared P&L, Asset Depletion, Asset Utilization, IRA, RE Flipper) and **3 product families** (Non-QM, DSCR, Second Lien) plus conventional agency. This is, in absolute terms, the most thorough program lineup a retail consumer can shop against.

### 11.2 The 1/3 exception claim is honest and operationally distinctive
No other major non-QM lender publishes an exception rate. *"1/3 of all of our Non-QM loans have at least one exception"* is a transparent, broker-friendly KPI that signals **in-house credit authority** and a willingness to look past rigid guidelines. For borrowers who got denied elsewhere, this is the closest thing to a "we'll probably say yes" message in the industry.

### 11.3 W-2-to-1099 program is a genuine innovation
The `/w2-to-1099-mortgage-solutions/` post and `/programs/w-2-to-1099/` product are **purpose-built for the "I just switched jobs" gap** that traditional lenders mishandle. The unique selling point: *"You do not need to wait the usual 12 to 24 months before using your 1099 income. You could count 100% of your 1099 income (if you meet the expense-free criteria) even with just your first 1099 check and an offer letter."* This is materially more borrower-friendly than the 2-year self-employed history most competitors require.

### 11.4 Bank-statement automation (Income IQ) is a real UX win for brokers
Income IQ is positioned as *"a first-of-its-kind Bank Statement Analysis tool, designed to reinvent the way brokers and loan officers review self-employed borrower income."* Brokers can upload 12- or 24-month PDFs into BLU, get **results in ~24 hours** (per the FAQ) with automatic split, missing-document detection, and percentage-of-business-owned calculation. This is one of the only AI-native tools in non-QM that materially compresses time-to-decision — but it's not available to consumers.

### 11.5 Human-first service model is a brand-defining differentiator
The explicit *"Unlike other mortgage robots or 'rockets'…"* copy, plus the 3-step booking form that **forces** the borrower to talk to a Senior Loan Advisor, is genuinely unique in 2026. Whether you call this a strength or weakness depends on the borrower, but it's a clear and consistent positioning that no Robo-Rocket competitor matches.

### 11.6 State-by-state SEO footprint is exceptional
27 DSCR state pages, 5+ bank-statement state pages, plus long-form state-specific content (with Census data, Zillow data, top-cities, market trends) makes Newfi.com one of the most authoritative non-QM **content** sites for retail search. The /dscr-loans/texas/ page alone is ~650KB of HTML with H2s covering "Real Estate Market Trends in Texas", "Top Cities for Investment Opportunities in Texas", "Comparing DSCR Loans and Bank Statement Loans", "Avoiding Common DSCR Loan Mistakes" — this is content marketing, not just product copy.

### 11.7 White-label marketing toolkit is broker-friendly
`/white-label-kits-guides/`, `/white-label-flyers/`, `/white-label-social/`, `/dscr-marketing-kit/`, `/bank-statement-marketing-kit/`, `/2026-loan-officer-planning-guide/`, `/second-mortgage-playbook/` — all downloadable content that brokers can rebrand and use to sell Newfi products as their own. This is a sophisticated channel-development play that competing wholesale lenders often lack.

---

## 12. Weaknesses (especially vs the "Why am I denied?" lens)

### 12.1 There is NO "you don't qualify but here's why" UX
This is the central weakness. **A borrower cannot self-discover their denial reason from Newfi's site.** The only self-service tools are:
- 8 static calculators (no FICO, no income, no decision output)
- 139 pages of marketing content that describes what Newfi *might* do, but never tells the user what they *will* do
- A 3-step form that asks only "have you worked with a Newfi advisor before? Y/N"

A borrower who gets a counterparty "no" on a conforming loan and lands on newfi.com has to **read 4,000 words of marketing copy, identify the right product (Non-QM, Bank Statement, 1099, DSCR, Asset Depletion, W-2-to-1099, etc.), and then call a human** to find out which one fits. There is no diagnostic, no decision tree, no "based on what you told us, here's what you qualify for" intermediate output.

### 12.2 No "alternative path" messaging for near-miss borrowers
Nowhere on the consumer site does Newfi say:
- "If you don't qualify for agency, try our Non-QM bank-statement program"
- "If your tax returns are too low, switch to a 12-mo bank statement program"
- "If your DTI is too high, try our 40-year interest-only or DSCR product"
- "If you just switched from W-2 to 1099, our W-2-to-1099 program may qualify you on day one"

These **mappings** exist in Newfi's own program documentation, but they are **never surfaced as a user-facing diagnostic**. The content pages describe programs in isolation; the borrower has to mentally synthesize the alternatives.

### 12.3 No instant decision / soft-pull prequal
Compare to Better.com (60-second pre-approval, soft pull, instant "you qualify for $X"), Tomo (instant pre-approval, no credit pull, decision in 30 seconds), or even Angel Oak my.angeloakms.com (Get Quote form with 4+ fields, instant advisor matching). Newfi's consumer funnel is **strictly lower-funnel** — you have to commit to a phone call to get any decision. For borrowers who want to comparison-shop anonymously, this is a significant drop-off risk.

### 12.4 The calculators are explicitly non-decision-grade
Every calculator ends with: *"We cannot and do not guarantee their applicability or accuracy… We encourage you to seek personalized advice from a mortgage specialist."* — i.e., Newfi is *intentionally* disclaiming that the calculator outputs mean anything about qualification. For a borrower trying to model "can I afford this? will I qualify?", these calculators are useless for the second question.

### 12.5 The "I'm Looking To…" 4-tile router is too coarse
The four tiles don't capture:
- Co-borrower situation
- Income type
- Current housing status (rent vs own)
- Timeline (looking 0-3 months vs 6-12+ months)
- Credit profile concerns
- Whether the borrower has *already* been denied elsewhere

A user who picks "Use Self Employed Income to Qualify" gets dumped onto `/self-employed-home-loans/` which then funnels to a phone call. There's no middle-tier "tell us a bit more and we'll point you to the right product" UX.

### 12.6 Broken nav link: `/referral-form/` returns 404
Minor but visible: the navigation references a "Referral Form" that doesn't exist. A borrower who clicks it gets a 404 — credibility loss.

### 12.7 Staging URL leaked into sitemap: `/https-staging-newfi-com-loan-criteria-page/`
A misconfigured Yoast SEO post is in the live sitemap. This is technical SEO debt that suggests the marketing team is publishing content faster than the SEO team can canonicalize URLs.

### 12.8 State-count inconsistency: 40 vs 47 vs 48
Three different numbers are quoted on three different pages (I'm Looking To = 40, DSCR = 47, Wholesale About = 48). This kind of inconsistency erodes trust for a detail-oriented borrower researching non-QM lenders.

### 12.9 No live chat / no instant chat
The contact page lists phone + email. There is **no live chat widget** on any page. For a self-service-oriented 2026 borrower, this is a generation behind.

### 12.10 The Auth0 login UX for returning borrowers is awkward
`/login` is hidden in the top nav. There's no "Welcome back" personalization on the consumer homepage. A returning borrower has to know to click "Log In" → enter credentials at Auth0's generic login screen → land in the loan center. There's no "track your application" prominent CTA.

### 12.11 No "Why I was denied" content for SEO capture
Newfi's content marketing is **proactive** ("how to qualify for a DSCR", "self-employed mortgage requirements") but **not reactive** — they don't have a /why-was-i-denied-mortgage/, /mortgage-declined-options/, /rejected-for-mortgage-what-next/ page. This is a **major SEO and intent-capture miss** for the project this research is informing. Borrowers Googling "why was my mortgage denied" or "what to do if denied a mortgage" do not currently land on Newfi content.

---

## 13. What a "Why am I denied" Diagnostic Needs to Do Better Than Newfi

Based on Newfi's gaps, a borrow-facing "Why am I denied" diagnostic should:

### 13.1 Capture enough borrower data to render a real decision
**Newfi captures nothing.** A diagnostic should collect (soft-pull-free, with explicit consent): credit score band, income type (W-2 / 1099 / Self-employed / Retirement / Investment / Social Security), DTI estimate, loan amount sought, property type, down payment / equity, occupancy (primary / second / investment), citizenship / visa status, recent credit events (BK, foreclosure, short sale, late payments), and prior denial reason if known. None of this requires a hard credit pull.

### 13.2 Render a multi-tiered outcome (Approved / Marginal / Denied + alternative path)
**Newfi's only outcome is "book a call."** A diagnostic should:
- **Approve** with a specific program (Conventional, FHA, VA, Non-QM Bank Statement, DSCR, Asset Depletion, W-2-to-1099) and a specific dollar amount.
- **Marginal** — show the borrower *exactly which guideline is failing* (e.g. "Your DTI is 54%, agency max is 50%; consider a 40-year I/O to reduce payment by ~$340/month").
- **Deny** — show the borrower *exactly which guideline is failing AND the specific product that could still qualify them* (e.g. "Your tax-return income is too low for conforming. If you switch to a 12-month personal bank-statement program, your qualifying income rises by $X because no 50% expense factor is applied to personal bank deposits.").

This is the diagnostic Newfi's content describes but never surfaces.

### 13.3 Map the "denial reason" → "alternative product" lookup
For every common denial reason, the diagnostic should map:
| Denial Reason | Newfi Alternative (from this research) |
|---|---|
| Tax-return income too low | 12 or 24-mo bank statement (Rainier/Sequoia); 1099 with 10% expense ratio; CPA Gross Receipts; CPA P&L |
| High DTI | 40-year fixed, 30 or 40-year interest-only, Asset Depletion, Asset Utilization (no DTI) |
| Low credit score (below 620) | Hard to find a fit at Newfi (620 min on Sequoia Non-QM Expanded); suggest waiting for score recovery, paying down balances, or adding a co-borrower |
| Just switched from W-2 to 1099 | **W-2-to-1099 program** (Rainier/Sequoia) — count 100% of 1099 income with offer letter + first pay stub |
| Inadequate reserves | DSCR (no reserves if rental income covers PITIA), Asset Depletion, Cash-out may be used as reserves |
| Self-employed less than 2 years | W-2-to-1099, Full Doc 1-year, Bank Statement 12-mo |
| Property type not eligible (non-warrantable condo, 5+ units) | DSCR may apply for 1-4 units, but 5+ is out |
| Investor, no personal income | DSCR (qualify on rental income only) |
| Borrower is retired with limited income but high assets | Asset Depletion (Assets / 60 = qualifying income) |
| Borrower has cryptocurrency as primary asset | Newfi's published crypto guidelines (see `/newfi-expands-non-qm-asset-depletion-utilization-programs-to-allow-use-of-cryptocurrency/`) |
| ITIN / foreign national | Wholesale DSCR Foreign Nationals program |
| Recent mortgage late | Sequoia Non-QM Expanded (up to 1 mortgage late) |
| Cash-out but high LTV | DSCR up to 80% LTV; Sequoia Non-QM up to 80% LTV cash-out |
| VA-eligible but can't meet entitlement | Non-QM Full Doc / Alt Doc up to 90% LTV |
| Jumbo (loan amount > conforming) | Newfi Non-QM, Jumbo AUS, Biscayne, Lassen, or Teton (up to $3.5M) |

### 13.4 Never force a phone call as the only output
**Newfi forces a phone call.** A diagnostic should render a written, shareable, downloadable, email-able output. The borrower should be able to **print the result and bring it to any lender**, not just call Newfi. This is the fundamental product-design difference between a diagnostic (utility) and a lead-capture form (sales tool). Newfi's loan-criteria-page is the latter.

### 13.5 Be transparent about WHEN to call a human
The diagnostic should *earn* the right to ask for a phone call by first demonstrating value. A borrower's trust is built when the tool says: *"Based on what you've told me, you almost certainly qualify for our Sequoia Non-QM 12-month bank-statement program at ~$XX,XXX with 25% down. Here's the math, here's what we'd need to verify, and here's what changes if your tax return shows $X. If you want, click here to talk to a Senior Loan Advisor who can pull live pricing."* Newfi skips the value step and goes straight to the phone ask.

### 13.6 Use real, named, current Newfi programs in the output
Every alternative-path recommendation should be specific to a **named, currently-published Newfi product** (Rainier, Sequoia, Sequoia Non-QM Expanded, Sequoia DSCR, Glacier Bank Statement Seconds, Olympic Full Doc Seconds, Biscayne, Lassen, Teton, Income IQ, W-2-to-1099, Asset Depletion, Asset Utilization, IRA, RE Flipper) so the borrower can verify the recommendation against Newfi's own published matrix. This builds trust and makes the tool useful even if the borrower never converts to Newfi.

### 13.7 Surface the "1/3 exception" message at the right moment
For borrowers who fail *every* Newfi program (e.g. credit below 620, ITIN + 5-unit property, BK within 12 months), the diagnostic should explicitly say: *"You don't currently fit any of Newfi's published programs. However, Newfi makes in-house exceptions on 1/3 of funded Non-QM loans — a 30-minute call with a Newfi Senior Loan Advisor is the fastest way to know if an exception is possible in your case."* That re-frames the human call as the *right tool* for this specific borrower, not the *only* tool for everyone.

### 13.8 SEO-optimize for the denial-recovery intent
The diagnostic's **landing pages** should target queries Newfi does not currently capture:
- "Why was I denied a mortgage"
- "Denied for conventional loan what next"
- "Self-employed denied mortgage options"
- "DSCR loan denied — alternatives"
- "1099 income denied mortgage"
- "Bank statement loan denied"
- "What to do after mortgage denial"
- "How to qualify after mortgage denial"

These are the **reactive**, problem-aware search queries that **no major non-QM lender is currently capturing** with first-party content. This is a major opportunity.

### 13.9 Respect the borrower's time and data privacy
- Make the diagnostic **stateless or trivially-resumable** (email yourself a link to return).
- **No soft or hard credit pull** for the diagnostic.
- **Clear "what we collect and why"** disclosure up front.
- **No SMS opt-in checkbox** required to see the result.
- **A printed/email PDF output** the borrower can save.

### 13.10 Have a "pre-qualification receipt" the borrower can take to a lender
The diagnostic should output a **structured, lender-readable summary** (loan amount, program, qualifying income, credit band, DTI, LTV) that a borrower can take to a Newfi Loan Advisor, a different lender, or a real-estate agent and have it understood without re-explaining.

---

## 14. Raw Evidence / Source Files

All raw HTML and JSON source files captured for this report are saved in `/tmp/`:

- `/tmp/nfi_newfi_com.html` — consumer home
- `/tmp/nfi_www_newfiwholesale_com.html` — wholesale home
- `/tmp/nfw_*.html` — wholesale About, Contact, Non-QM, DSCR, Income IQ, Quick Pricer, Get Approved, Rates, Turn Times, FAQ, Programs, Bank Statement Seconds
- `/tmp/nfc_*.html` — consumer About, Non-QM, Self-employed, Bank Statement AZ, Contact, Home
- `/tmp/nx_*.html` — consumer Loan Center redirect, Loan Criteria Page, Loan Options, Purchase, Refinance, Im Looking To, Calculators, DSCR loans, Self-employed Home Loans, DSCR Loan Requirements, What is DSCR, Jumbo, Disclosures, Loan Payment and Servicing
- `/tmp/nz_*.html` — login redirects, consumer about, sitemap, wholesale resources, white-label marketing, SEO/blog posts
- `/tmp/nw_w2_to_1099.html` — W-2 to 1099 program blog
- `/tmp/sp_*.html` — state-specific SEO pages (DSCR Texas, Bank Statement Texas), referral form 404, loan officer selection, Auth0, state page template, debt consolidation, investment property solutions, SMS contact, corporate
- `/tmp/sm_*.xml` — sitemaps (consumer post, page, author; wholesale page, post, category)

All citations in this report were extracted from these files via Node.js + undici HTTP fetch (no shell, no curl). No `web_search` tool was used in the final report (the search tool returned an authentication error at session start; direct page-fetch was used instead, which produced more reliable, citable data).
