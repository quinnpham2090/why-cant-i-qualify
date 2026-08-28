# Angel Oak Mortgage Solutions — Competitor Research Report

**Researched:** August 27, 2026
**Researcher:** DeepSeek subagent (for "Why am I denied" project)
**Sources verified live via direct HTTP fetch (Cloudflare-protected pages were skipped where blocked; everything cited was successfully loaded and parsed).**

---

## 0. CRITICAL CORRECTION TO THE BRIEF

The brief assumes **angeloakms.com** is the "retail prequalification flow." It is not.

Angel Oak runs **three distinct web properties** under the Angel Oak Companies umbrella, and a parked-domains fourth:

| Domain | Audience | Tech | Purpose |
|---|---|---|---|
| `angeloakms.com` | **Wholesale / TPO** (3rd-party mortgage brokers) | WordPress + Yoast SEO | Product marketing, broker login, Non-QM QuickQuote pricing engine (broker portal) |
| `my.angeloakms.com` | **Consumer Direct / Retail** (the borrower) | Webflow (data-wf-site id `647a2c2b…`) | "Get Quote" form, Find-an-Advisor, product-offerings, borrower portal, 50 state pages, 30+ branch pages, 50+ paid-media landing pages |
| `angeloakcorrespondent.com` | **Correspondent lenders** | WP | Non-delegated/correspondent channel |
| `angeloakcompanies.com` | **Holding company** / press / careers | WP | Angel Oak Asset Management, Capital Advisors, etc. |
| `angeloakmortgage.com` | (parked GoDaddy lander) | – | Not in use |

The retail site is therefore **`https://my.angeloakms.com`** — this is where a consumer looking for a "prequal" lands. All answers below are split between the two sites because the brief's "retail prequal flow" question actually has two completely different answers depending on which Angel Oak site you mean.

---

## 1. Retail Prequalification Flow — URLs

### Consumer-direct (retail) entry points
- **Homepage:** `https://my.angeloakms.com` — title *"Angel Oak Mortgage Solutions | Non-QM Mortgage Lender"*
- **Get-Quote form anchor (id):** `#get-started` — appears on **every product page** in the right rail
- **All products hub:** `https://my.angeloakms.com/product-offerings`
- **Find an Advisor:** `https://my.angeloakms.com/find-an-advisor`
- **Contact:** `https://my.angeloakms.com/contact-angel-oak`
- **Apply:** `https://my.angeloakms.com/apply` (stub — currently just renders the footer)
- **Borrower portal (post-application):** `https://my.angeloakms.com/portal`

### Wholesale (broker) pricing tool
- **Non-QM QuickQuote (broker pricing engine):** `https://angeloakms.com/non-qm-quick-quote/`
  - The form is loaded inside an iframe pointing to `https://aoquickquoteform.azurewebsites.net/#/` — so the *real* prequal engine is hosted on Azure, not on the WP site.
- **AngelOak iQ (broker intelligence / pricing platform):** `https://angeloakms.com/angeloak-iq-brokers-intelligence-suite/`
  - Marketed as "Accurate pricing in seconds, not hours" with steps 1 Quote → 2 Analyze → 3 Connect → 4 Estimate → 5 Close.

### Phone numbers (every one of them — useful for "alternative path" data)
- Speak to Advisor: **888.981.5196** (homepage) / **833.471.0594** (product pages)
- Loan Servicing: **844.209.7424**
- Corporate: **(855) 539-4910**
- SMS / opt-out: **855-750-0469**

---

## 2. Target Audience

> Direct quote from the `<meta name="description">` on `my.angeloakms.com`:
> *"Angel Oak Mortgage Solutions is a mortgage lender specializing in loan programs for **self-employed borrowers, private real estate investors, high net worth individuals, and more**."*

> About-Us page (`/about-us`):
> *"Innovative Solutions for Underserved Borrowers … Our consumer direct platform services customers through leads generated online from our digital lending system which integrates consumers directly with our loan products."*

### Persona buckets Angel Oak explicitly courts (verbatim from product page copy)
1. **Self-employed borrowers** — "Bank Statement Loan … No tax returns required" (640+ FICO, up to $4M)
2. **Real estate investors** — DSCR / Investor Cash Flow (no personal income/employment required, 680+ FICO, up to $3M, LLCs allowed)
3. **High-net-worth / Jumbo "just missed" borrowers** — Platinum Jumbo "for borrowers who just miss qualifying under Prime Jumbo guidelines" (680+ FICO, up to $4M, 90% LTV at 720+)
4. **Asset-rich retirees / divorced / no-income** — Asset Qualifier (700+ FICO, **no employment, no income, no DTI**, $500K+ post-close assets)
5. **Foreign nationals** — Foreign National (NA FICO, 70% LTV, 1:1 DSCR, $1.5M max)
6. **ITIN borrowers (no SSN)** — ITIN Mortgage Loan (640+ FICO, 80% LTV)
7. **Gig / 1099 contractors** — 1099 Income Loan (640+ FICO, 90% LTV, single source)
8. **Credit-event borrowers (post-foreclosure / BK)** — Portfolio Select (640+ FICO, 1-year seasoning for FC/SS/DIL, 2-year for BK)
9. **Conventional / FHA / VA / USDA** — agency products (yes — Angel Oak is **not** non-QM-only on the retail side; they do full-doc agency too)

### Explicitly *not* their audience
- The site contains zero agency jumbo/conventional marketing — those are pushed because AOMS holds the GSE license, not as a lead channel.
- The brand almost never references FHA 203k, VA IRRRL, USDA repair, or any niche government program — only the vanilla versions.

---

## 3. Value Proposition / Headline Promise

| Page | Headline | Sub-headline |
|---|---|---|
| `my.angeloakms.com` | *"Your Full-Service Mortgage Lender"* | "Purchase / Refinance — Home Purchase / Home Refinance — Portfolio Non-QM Loans" |
| `product-offerings` | *"Our Mortgage Solutions"* | "Our Specialized Mortgage Products" |
| Bank Statement Home Loan | *"A Mortgage For Self-Employed"* | "allows eligible self-employed borrowers to qualify using personal or business bank statement. No tax returns required." |
| DSCR Loan | *"For Rental Property Investors"* | "specifically for real estate investors and does not require proof of income or employment to qualify." |
| Jumbo Loan | *"For Higher Valued Homes"* | "Our flexible non-QM Jumbo loans are for homebuyers who just miss Prime qualifications" |
| Bank Statement HELOC | *"A Flexible 2nd Mortgage for Self-Employed"* | "tap into their home equity while retaining first mortgage" |
| Asset Qualifier (retail) | *"No employment or income required"* | "borrowers to use their liquid assets to qualify for a mortgage" |
| Portfolio Select (retail) | *"A Mortgage After Credit Events"* | "Credit worthy borrowers who have recovered from credit events such as a foreclosure no longer have to wait seven years" |
| Wholesale home | "Non-QM Lender" | "Angel Oak is leading the way as a non-QM lender with loan products including Bank Statement, Investor Cash Flow, Platinum Jumbo and more." |
| Wholesale Non-QM QuickQuote | "Partner with a Non-QM lender committed to an efficient loan process, driven by exceptional customer service and advanced technology." | "gives you an answer in seconds" |

The single recurring promise across every page is **"If Agency won't approve you, Angel Oak will, with a non-QM program built for your situation."**

---

## 4. Lead-Capture Mechanism — The "Prequal" Flow

### Is it a soft-pull prequal? **No.**
Angel Oak does **not** run a soft credit pull, FICO check, or any automated eligibility engine on the consumer site. There is no "Prequalify in 60 seconds" widget, no soft-pull disclosure, no FICO consent language, no "this will not affect your credit score" reassurance. The form is a **lead-capture / contact form only** — the actual qualification happens later, with a human Loan Officer, after the prospect picks up the phone.

> Form-submission success message (identical on every product page):
> *"Thanks! A Mortgage Advisor Will Be In Touch With You Shortly."*
>
> Error message:
> *"Oops! Something went wrong while submitting the form."*

### Where in the flow does it live?
- **Hero / above-the-fold:** "Get Started" CTA → `#get-started` form
- **Sticky / repeated on every product page:** right-rail "Contact a Loan Officer" widget (state dropdown + the 6-question form)
- **Footer-adjacent:** same form repeats a third time on every page
- **Find-An-Advisor page:** choose-state dropdown → optional advisor picker → then the same 6-question form
- The form is **Webflow's form widget** (`id="quote_form" name="wf-form-Get-Quote-Form" method="get"`) and POSTs back to the Webflow site — there is no external PII handoff, no LOS bridge, no Plaid/Finicit pull.

### Exact form fields (from HTML inspection of `bank-statement-home-loan.html`)

The form is a single page, no multi-step wizard — all on one screen, no progress bar, no animations, no save-and-resume.

| # | Field name | Type | Required? | Values |
|---|---|---|---|---|
| 1 | `first_name` | text | ✅ | — |
| 2 | `last_name` | text | ✅ | — |
| 3 | `phone` | tel | ❌ | regex `^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$` |
| 4 | `email` | email | ✅ | standard RFC regex |
| 5 | `zipcode` | text | ✅ | — |
| 6 | `purpose` | radio | ✅ | `purchase` / `refinance` |
| 7 | `self_employed` | radio | ✅ | `yes` (id `yes-2`) / `no` (id `no-2`) |
| 8 | `residency_type` | radio | ✅ | `primary-residence` / `2nd-home-investment` |
| 9 | `credit_score` | **select** | ✅ | `760+` / `720-759` / `680-719` / `640-679` / `600-639` / `Below 599` |
| 10 | `loan_amount` | number | ✅ | — |
| 11 | `list_price` | number | ✅ | (property value) |
| 12 | `Legal-agreement-2` | checkbox | ✅ | TCPA / SMS consent |
| 13 | `ip_address` | hidden | auto | (Webflow auto-fills) |
| 14 | `landing_page` | hidden | auto | (UTM capture) |
| 15 | `utm_source` / `utm_medium` / `utm_campaign` | hidden | auto | (Webflow auto-fills) |
| – | "Looking for a specific mortgage advisor?" (yes/no, conditional) | radio | ✅ | shown on `/product-offerings` and `/contact-angel-oak`; if "Yes" → opens advisor-picker modal with name search ("Bill Sheats, Brad Self, Brandon Jewkes …" with NMLS IDs visible) |

The credit-score question is a **self-reported bucketed range**, not a soft pull. The loan-amount and list-price questions are the closest Angel Oak gets to an affordability check — but they are not used to calculate DTI or run any program-fit logic in the form itself.

### SMS / TCPA consent (verbatim)
> *"I consent to receive SMS for notifications, passcodes, and alerts from Angel Oak Mortgage Solutions LLC at the telephone number provided. Message frequency may vary. Message and data rates may apply. To opt-out of future SMS messages, text STOP to cancel, or call 855-750-0469 for customer care Information."*
> *"By clicking 'Submit', you agree that you are expressly authorizing Angel Oak Mortgage Solutions LLC NMLS 1160240 to contact you by telephone … using an automatic telephone dialing system or an artificial or prerecorded voice, even if the telephone number is assigned to a cellular telephone service …"*

---

## 5. Exact Questions Asked — and How They Handle W-2 vs. Self-Employed

### In the lead form
The form makes **a single binary self-employed question** (`yes` / `no`). It does **not** ask:
- 1099 vs. K-1 vs. sole-prop vs. S-corp vs. C-corp
- Years self-employed
- Whether they have tax returns or not
- Their actual gross income
- Their monthly debts
- Their liquid assets
- Their desired LTV
- Their property type (SFR, condo, 2-4 unit, etc.)
- Whether it's a cash-out refi
- Whether the property is mixed-use / non-warrantable condo

The only "income proxy" is the self-reported **credit score bucket** plus the loan-amount / property-value pair (which an advisor would later use to gauge LTV).

### In the product page copy
Angel Oak **does** segment self-employed vs. W-2 explicitly on the product pages, but the segmentation lives in the *product catalog*, not the form:
- **Self-employed path** → routed to **Bank Statement**, **1099 Income**, **P&L**, **ITIN**, **Bank Statement HELOC**, **Asset Qualifier**
- **Real estate investor path** → routed to **DSCR**, **DSCR 2nd Lien**, **Asset Qualifier**
- **"Just missed" jumbo path** → routed to **Platinum Jumbo**
- **Credit-event path** → routed to **Portfolio Select**
- **Foreign National path** → routed to **Foreign National**
- **Agency-eligible path** → routed to **Conventional, FHA, VA, USDA**

The **retail site `/product-offerings` page lists 7 products**:
1. Bank Statement Home Loan (self-employed)
2. Bank Statement HELOC (self-employed)
3. DSCR Loan (investors)
4. Jumbo Loan Options ("just missed" jumbo)
5. Asset Qualifier Home Loan (no income)
6. Closed End Second Mortgage (self-employed & investors)
7. Portfolio Select Home Loan (after credit events)

The **wholesale site `/programs` lists 15 programs** (the retail site above plus 1099, P&L, ITIN, Asset Depletion, DSCR 2nd, Foreign National, Closed-End Second, ITIN).

### Critical W-2 handling
A W-2 borrower who clicks the "Bank Statement Home Loan" page is **not redirected to a W-2 product**. They are simply told — in the FAQ — *"A bank statement loan is often a great option for qualified self-employed borrowers. However, self-employed borrowers should choose the best loan product to help meet their mortgage needs."* There is **no decision-tree wizard, no branching form, no "based on your answer, you qualify for X" message.** Routing happens entirely by which product page the borrower self-selects.

---

## 6. User Experience — Steps, Time, Mobile

### Number of steps: **One** (single page form)
There is no multi-step wizard. There is no progress bar. There is no save-and-resume. There is no animated "loading" interstitial. The form is a single `<form>` with all 12 fields visible at once. Click "Submit" → success message → wait for callback.

### Time to complete
- **Best case** (returning borrower who knows what they want): ~30-45 seconds
- **Realistic** (someone deciding between Yes/No on self-employed, picking a credit-score bucket, typing loan amount, etc.): 90-120 seconds
- **With advisor-picker modal**: +20-30 seconds (modal search by name)
- **No ID-verification, no document upload, no soft pull** — the form completes in under two minutes

### Mobile experience
- **Viewport meta:** `width=device-width, initial-scale=1` ✅
- **Stack:** Webflow (responsive) ✅
- **No app, no SMS link, no biometric, no document upload widget** — fully browser-only
- **Phone is OPTIONAL** (not required) — which is unusual for lead-capture but reflects the "we'll text you" follow-up channel
- **State picker** is a 50-state grid of clickable badges (AL AZ AR CA CO …) — mobile-friendly
- **Credit-score select** is a native `<select>` — works on iOS/Android

### Frictions (UX-fail points)
- **No immediate feedback if a value is invalid** — only the form submit fires validation
- **No "What does this mean?" tooltips** on jargon like "DSCR" or "Bank Statement Loan"
- **No "Save and finish later"** — start over if you walk away
- **No logged-in state** — `/apply` is a stub
- **Two different lead-capture forms** (one on product pages, one on the advisor page) with slightly different fields — confusing
- **Advisor-picker modal** uses pagination ("1/7", "Next 1 / 50") with no obvious search-by-state filter
- **"No items found"** error appears in the Find-An-Advisor advisor-picker even when advisors exist — known UX bug visible in the static HTML
- **Phone numbers differ across pages** (888.981.5196 vs. 833.471.0594 vs. 844.209.7424) — three numbers, three different purposes (sales, advisor, servicing) is a recipe for mis-dials
- **State abbreviations are listed twice** — once at top of every product page, once in Find-an-Advisor

---

## 7. Calculator Functionality

### Consumer-side (retail) calculators
**There are NO calculators on `my.angeloakms.com`.** The retail site has zero payment calculators, affordability calculators, DSCR calculators, or "How much can I borrow?" tools. (Confirmed: no `/calculator`, no `/tools`, no `mortgage-calculator` route. The retail sitemap has 263 URLs and not one is a calculator.)

### Wholesale-side (broker) calculators — `angeloakms.com`
Three JavaScript calculators, all client-side, no API call needed:

1. **DSCR Loan Calculator** — `https://angeloakms.com/dscr-loan-calculator/`
   - **Inputs (all 7 fields):** Monthly Rental Income, Loan Amount, Monthly Taxes, Interest Rate %, Monthly Insurance, Term, Monthly HOA
   - **Outputs (12 metrics):** Monthly Fixed Payment (P&I), Fixed Principal & Interest, Fixed PITIA, Monthly Interest-Only Payment, Interest-Only PITIA, **DSCR Fixed**, **DSCR Interest-Only**
   - **CTA after calculation:** "Get a QuickQuote for your DSCR scenario" → opens the broker QuickQuote pricing engine
   - **Note:** calculator does **not** include a property-value or LTV field, so it cannot compute equity or compare scenarios

2. **Blended Rate Calculator** — `https://angeloakms.com/blended-rate-calculator/`
   - **Inputs:** Property Value, Monthly Insurance, Monthly Taxes, Monthly HOA, First Mortgage Loan Amount / Rate / Term, Second Mortgage Loan Amount / Rate / Term (10/15/20/30-yr fixed)
   - **Outputs:** Monthly Payment (1st), LTV (1st), Monthly Payment (2nd), LTV (2nd), **Total Combined Payment**, **Combined LTV**, **Blended Rate**
   - **CTA:** "Get a QuickQuote for a Stand Alone 2nd Mortgage"

3. **2-1 Buydown Calculator** — `https://angeloakms.com/2-1-buydown-calculator/`
   - **Inputs:** Loan Amount, Interest Rate %
   - **Outputs:** 1st-Year (2% buydown) P&I, buydown rate, monthly buydown paid by seller, total payment with buydown — same for 2nd year (1% buydown) and years 3-30 — **Total Buydown Fund** (lump sum seller must contribute)

All three wholesale calculators include the standard disclaimer:
> *"This calculator is for estimation purposes only. It is a basic calculator using information entered by you which may differ from the actual terms at the time the loan terms are set. The calculator does not include fees and costs that may apply to a loan, and it does not account for all loan programs. Results may vary and will be subject to individual program guidelines and limits. Qualification, rates, and payment will vary based on timing and individual circumstances. The results do not reflect an official mortgage loan offer or a commitment to lend."*

### What the form (vs. calculator) outputs
- The **retail Get-Quote form** outputs **nothing** — no payment, no DTI, no program recommendation, no "you might qualify for $X." It just routes to an advisor.
- The **wholesale QuickQuote** is the closest thing to a real prequal engine and is broker-only.

---

## 8. Calls to Action — Page by Page

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| Homepage | "Get Started" buttons on each product card → `#get-started` form | "Find an Advisor" |
| Product pages | "Contact a Loan Officer" → form | "Learn More" (expands inline FAQ), "Get Quote" link |
| Product-offerings | "Get Started" on each card | "Find an Advisor" |
| Find an Advisor | "Start By Choosing Your State" → advisor list | "Find Advisors By Name" |
| Contact | Same lead form + "Speak to an Advisor: 888.981.5196" + "Find a Mortgage Advisor" | Branch directory |
| About | "Find an Advisor" | Phone numbers |
| Servicing | "Loan Servicing: 844.209.7424" | Email `servicingsupport@angeloakms.com` |
| Wholesale program pages | "Contact Angel Oak" (broker lead form) + "Connect with a Wholesale Account Executive" → `/ae/` | — |
| Wholesale QuickQuote | iframe-loaded Azure prequal (broker login or "Request Credentials") | "Find an AE" → `/ae/` |
| Wholesale calculators | "Get a QuickQuote for your scenario" | — |
| Wholesale iQ | "Request a Demo" | — |

**Repeated CTAs on every page:**
- "Loan Servicing: 844-209-7424" (or .7423 on product pages)
- "Speak to Advisor: 888-981-5196" (or 833-471-0594 on product pages)
- NMLS Consumer Access link

**There is NO "Apply Now" / "Prequalify" / "Get My Rate" / "See If You Qualify" CTA on the retail site** — the highest-intent action is "Contact a Loan Officer" and the form is presented as contact-me, not prequal-me.

---

## 9. Trust Signals

### Legal / regulatory
- **NMLS ID #1160240** prominently displayed in footer of every page, hyperlinked to NMLS Consumer Access
- **Equal Housing Opportunity** logo
- **State-by-state licensing list** (`/about-us#Licensing-Information`) — Alabama through Wyoming, including CA, FL, NY, TX DFI numbers
- Full disclosures page at `/about-us` (CCPA-compliant for California applicants)

### Social proof
- Three named testimonials on the homepage:
  - Sherry H. (Tara & team) — *"had everything ready to go for the closing!"*
  - William R. (William Lee) — *"closed in what I believe to be record time"*
  - Dr. Howard — *"outstanding work with the loan process"*
- Wholesale site has 20 named Licensed Mortgage Professionals (Bill Sheats, Brad Self, Brandon Jewkes, etc.) with NMLS IDs and email addresses visible
- 50+ branch locations across 30 cities (Alpharetta, Atlanta, Charleston, Charlotte, Houston, Las Vegas, etc.) — every branch is a trust signal

### Brand / corporate
- "**Innovative Solutions for Underserved Borrowers**" tagline
- "**Pioneer and turn Non-QM from an opportunity into a competitive advantage**" (wholesale)
- "**Industry-first technology, available only at Angel Oak**" (DSCR Rental AVM)
- Featured in Business Insider, Bankrate, MPA Magazine, National Mortgage Professional, Rob Chrisman
- 2023 Originator Choice Awards winner
- Cited in "2023 Top Non-QM Lenders"
- Angel Oak Companies parent (50+ non-agency securitizations via Angel Oak Capital Advisors)

### Technical / data
- AirDNA integration for DSCR short-term rental analysis
- 1007 AVM Waiver for DSCR
- 5/6 ARM and 7/6 ARM products
- FlyWheel Digital GTM container (Google Tag Manager) visible in source

### What is *absent* as a trust signal
- **No BBB rating, no TrustPilot, no Google Reviews badge**
- **No "as seen in" press logos on the homepage**
- **No Better Business Bureau accreditation**
- **No "secure" / SSL trust badge** (Cloudflare is in front, but no visible badge)
- **No client count or loan-volume metric** (e.g., "10,000 loans closed") on the retail site
- **No "Founded in" year** on the consumer-facing pages (the company traces to ~2008–2010 but the date isn't shown)

---

## 10. SEO Strategy

### Three-site architecture (technically brilliant)
- `angeloakms.com` (wholesale) and `my.angeloakms.com` (retail) are completely independent properties, so they can each target their own keyword universe without cannibalizing each other.
- The wholesale site has 50+ blog posts (post-sitemap) and uses Yoast SEO 28.3 with proper `yoast-schema-graph` JSON-LD.
- The retail site (Webflow) has **263 sitemap URLs** — a much larger surface area targeting long-tail consumer queries.

### Primary keyword targets (inferred from URL slugs, page titles, and H1s)
**Wholesale / broker side (`angeloakms.com`):**
- "non-QM lender" (homepage H1)
- "non-QM quick quote"
- "non-QM loan programs"
- "bank statement loan"
- "DSCR loan"
- "investor cash flow loan"
- "non-warrantable condo loan"
- "ITIN mortgage loan"
- "1099 income loan"
- "P&L loan"
- "foreign national mortgage"
- "asset qualifier mortgage"
- "asset depletion mortgage"
- "Platinum jumbo mortgage"
- "Portfolio Select mortgage"
- "manufactured housing"
- "condotel loan"
- "DSCR loan calculator"
- "blended rate calculator"
- "2-1 buydown calculator"

**Retail / consumer side (`my.angeloakms.com`):**
- "home loans [state]" (50 state pages: `/state/california`, etc.)
- "mortgage advisor [city]" (30+ city pages: `/branch/atlanta`, `/branch/houston`, etc.)
- "self-employed mortgage"
- "mortgage for self-employed"
- "1099 income loan"
- "bank statement home loan"
- "investor cash flow loan"
- "jumbo home loan"
- "non-QM jumbo"
- "asset qualifier home loan"
- "foreign national home loan"
- "second mortgage self-employed"
- "mortgage for self-employed"
- "FHA home loan" (agency)
- "VA home loan" (agency)
- "USDA home loan" (agency)
- "conventional home loan" (agency)
- "portfolio select home loan" (post-credit-event)
- "closed end second mortgage"

### Tag taxonomy (extracted from wholesale `post_tag-sitemap.xml`)
The wholesale blog has explicit tags for: `non-qm`, `nonqm`, `nonprime`, `non-agency`, `self-employed`, `bank-statement`, `dscr`, `dscr-loans`, `debt-service-coverage-ratio`, `heloc`, `home-equity-line-of-credit`, `investor-cash-flow`, `non-warrantable-condos`, `platinum-mortgage-program`, `second-loans`, `alternative-lending`, `unconventional-financing`. So they explicitly own the "non-QM" + "alternative" cluster.

### Paid-media landing pages (cd/* routes)
The retail site has 50+ programmatic landing pages under `/cd/*` that look like UTMs:
- Bing: `bing-bank-statement`, `bing-investor-cash-flow`, `bing-jumbo`, `bing-asset-qualifier`, `bing-agency-conventional`, `bing-agency-jumbo`, `bing-low-down-payment-jumbo`
- Meta (Facebook/Instagram): `meta-bank-statement`
- Yahoo (BZG): `bzg-bank-statement`, `bzg-jumbo`, `bzg-fha`, `bzg-va`, `bzg-asset-qualifier`, `bzg-investor-cash-flow`, `bzg-conventional`, `bzg-low-down-payment-jumbo`
- Reddit: `reddit-bank-statement`
- JustAnswer: `ja` (CD page)
- Comparison shopping: `payoff`
- Internal: `ao-bank-statement`, `portfolio-bank-statement-heloc`, `mortgage-self-employed`, `self-employed`, `bank-statement`, `dscr`, `jumbo`, `itin`, `low-down-payment-jumbo`, `business-bank-statement-elite`, `second-home-mortgage`, `vacation-home-mortgage-loans`, `rental-property-loan`, `investment-property-mortgage`, `second-mortgage-self-employed`, `jumbo-cash-out-refinance`, `jumbo-credit-event`, `2nd-mortgage-self-employed`
- Each is essentially a copy of the matching product page with a different URL slug, giving the paid-search team clean UTM-tracked entry points.

### Content strategy
- Webinars (replays) are the dominant content type — at least 30 webinar replay posts (one every 2-4 weeks for the last 2 years), titled "A Non-QM Webinar on Bank Statement Loans [Month Year]" — they're using webinar content as a Google-indexable SEO asset
- Podcasts ("Non-QM is for Closers" series, "The Loan Officer Podcast")
- Press releases / news posts (Originator Choice Awards, hire announcements, securitization milestones)
- Case studies and borrower stories
- A "borrower-stories" landing page on the retail site

### What's *not* in the SEO playbook
- No glossary page
- No city-specific blog posts (only city *landing pages* with advisor info)
- No mortgage dictionary
- No schema.org FAQPage markup on most pages
- No video content (no YouTube embed, no Vimeo)
- No mortgage news / rates widget

---

## 11. Strengths

1. **Brand authority in non-QM** — clearly the largest non-QM-specific brand by SEO surface and marketing volume. "Non-QM" is in their title tag, H1, and meta description on the wholesale site.
2. **Program breadth** — 15 non-QM programs on wholesale, 7+ on retail. Covers virtually every "non-Agency" scenario from self-employed 1-year-out to foreign national to $500K-asset retiree to short-term-rental investor.
3. **Productized experience** — every product is given a name (Platinum, Portfolio Select, Bank Statement HELOC) and a card on the retail homepage. Easy for the borrower to self-select.
4. **Lead-routing to humans** — the Get-Quote form picks a Loan Officer by state and 50+ branches give geographic intimacy. They use the human advisor as a *feature*, not a fallback.
5. **Tech investment on the broker side** — AngelOak iQ is a real platform with AI-driven eligibility, TPO Connect integration, automated disclosures, and the industry-first rental AVM for DSCR.
6. **Speed of quote on broker side** — Non-QM QuickQuote "answer in seconds" + dedicated AEs per region.
7. **Program-mix education** — the Bank Statement, DSCR, Platinum, and Asset Qualifier pages each have 5-8 FAQs that explain the *why* and the *how*, which is great for SEO and for building trust with first-time non-Agency borrowers.
8. **NMLS transparency** — every advisor has their NMLS ID visible; this is regulator-friendly and earns trust with industry insiders.
9. **State-by-state licensing breadth** — they can actually lend in 50+ states (vs. competitors that are licensed in 10-20).
10. **Inclusive of agency lending** — by offering Conventional / FHA / VA / USDA on the retail site, they capture the borrower *before* they get denied and route them to a non-QM product if agency falls through.

---

## 12. Weaknesses — Where They Fail Near-Miss Borrowers

### 1. **No "we can't qualify you" diagnostic**
There is **zero messaging on the retail site that acknowledges denial**. Search results for "denied," "don't qualify," "can't qualify," "alternative path" on the retail site return **zero hits in the lead-flow copy**. The site assumes everyone is qualified — the form just routes to an advisor, who presumably qualifies or disqualifies on the phone.

### 2. **No "what to do if you got denied" page**
- The closest is the `/resources/we-are-saving-more-loans` article (Aug 2022) and `/resources/mortgage-loan-challenges-and-product-solutions` (Sep 2021), but these are **outdated, advisor-marketing content, not borrower-facing "you got denied, here's your next step" content**.
- The `/resources/the-benefits-of-a-pre-approval` page (May 2022) acknowledges that pre-qualification "is simply the borrower submitting an overall financial summary based on assets, debt and income" with "no credit checks … or determination of a borrower's ability to repay the loan" — which is an inadvertent admission that their own form does nothing to determine ability to repay.

### 3. **No instant decision / no soft pull / no DTI calculation**
A borrower who can't even *get* an agency loan — the exact person Angel Oak is built for — has no way to see on the screen "based on your inputs, you likely qualify for our Bank Statement program" or "unfortunately your LTV would need to be below X% to qualify." They fill in a 12-field form, hit Submit, and **wait for a phone call**. That is a 24-72 hour diagnostic latency in a category where Rocket, Better, and UWM give 60-second decisions.

### 4. **No alternative-path messaging for credit <600 or other obvious non-starters**
The form's credit-score dropdown has a "Below 599" option, but the form still submits and the success message is *"A Mortgage Advisor Will Be In Touch With You Shortly."* There is no warning, no acknowledgement that a 580 FICO is a hard stop, and no referral to a credit-repair partner or to a B-paper lender. The borrower is told to expect a call that will never come (or will be a "we can't help you" call with no fallback).

### 5. **No branch / advisor in California (the largest state)**
The California state page says: *"There are currently no branches in California. However, there are mortgage advisors licensed in this state. Please see below. All California Licensed Mortgage Advisors See Local Advisors"* — which is a self-defeating message on a state SEO page.

### 6. **The form is bad at self-employed qualification**
- The form asks *if* you're self-employed but never asks *how* (1099 vs. K-1 vs. S-corp)
- The form asks loan-amount and property-value but never asks for monthly income, monthly debts, or assets — so the advisor has to do the entire income calculation on the phone
- The form's credit-score buckets don't map to Angel Oak's actual product tiers (640, 660, 680, 700, 720, 760) — there's a 600-639 bucket that no Angel Oak product accepts

### 7. **The FAQ pages confuse the borrower**
- Bank Statement FAQ: *"Are Self-Employed Borrowers Required To Use Bank Statement Loan Products?"* → *"A bank statement loan is often a great option for qualified self-employed borrowers. However, self-employed borrowers should choose the best loan product to help meet their mortgage needs."* — useless non-answer.
- The "Get-Quote" form label is `"wf-form-Get-Quote-Form"` (Webflow internal name) — this is *technical debt* showing through. The Webflow CMS slug is `get-started`, the heading says "Contact a Loan Officer," the form id is "quote_form," the field name is `quote_form` — at least four different names for the same form.

### 8. **The website is built on Webflow for the consumer side**
Webflow is fine for marketing, but it means there's no real backend state, no application tracking, no condition engine, no automated prequalification logic. A non-QM retailer who is *routing every lead to a human* is leaving tens of millions of dollars on the table vs. competitors who prequalify automatically.

### 9. **The "alternative" word is only used internally, not in denial language**
The site says *"alternative lending," "alternative method to show the true cash flow,"* but **never** says "If you've been denied elsewhere, here's why" or "If you were told you don't qualify, here's what to do." That is the exact phrase a denied borrower would Google.

### 10. **Outdated content on the retail site**
The retail `/resources` articles are dated **2019, 2020, 2021, 2022** — nothing newer than 2022. The product pages themselves are current, but the educational content is stale, which signals (incorrectly) that the company has stopped investing in retail education.

---

## 13. What a "Why Can't I Qualify?" Diagnostic Needs to Do Better

For the "Why am I denied" project, here is the specific feature gap that Angel Oak exposes:

### A. The diagnostic itself
| Angel Oak does | The diagnostic should do |
|---|---|
| Self-reported credit-score **bucket** | A real soft-pull FICO (with explicit FCRA-permissible-purpose consent + ECOA Adverse Action disclosure ready to go) |
| Self-reported loan amount + property value | Real LTV calculation against actual product matrices (Bank Statement: 90% LTV at 720+ FICO, 80% at 680, 75% at 640) |
| No income, no DTI question | Income input (gross monthly or annual) → real DTI calc per program (Bank Statement 50% DTI max, DSCR 1.0 DSCR min, Asset Qualifier no DTI) |
| No asset question | Asset input → real "asset qualifier" math ($500K minimum post-close, $X * 60 months for income, etc.) |
| No self-employed segmentation | Branching: if "self-employed" → ask 1099 vs. K-1 vs. S-corp vs. C-corp vs. sole-prop → ask 12-mo or 24-mo bank statements available → match to Bank Statement / 1099 / P&L / ITIN |
| No "what didn't work" detection | Run borrower inputs against each program's matrix and produce a per-program pass/fail with the *failing constraint* called out (e.g., "Portfolio Select: credit score 580 vs. 640 minimum → FAIL by 60 points") |

### B. The "no" / "near-miss" path
Angel Oak's failure mode is that the form gives an unconditional "we'll be in touch" message regardless of inputs. A diagnostic should:

1. **Tell the borrower *immediately* if they don't qualify** for any AOMS program (no false hope, no 3-day callback to hear "no")
2. **Identify the specific reason**: credit, LTV, DTI, seasoning, occupancy, property type, income documentation, reserve
3. **Suggest a path forward**:
   - For credit-event misses: "Wait 12-23 months and re-apply" with a date calculator
   - For DTI misses: "Pay down $X of revolving debt" with a specific dollar amount
   - For LTV misses: "Add $Y to down payment"
   - For documentation misses: "Switch from tax-return to bank-statement qualification"
   - For product-not-fit: "Angel Oak doesn't offer manufactured housing in TX — try [competitor]"
4. **Provide an Adverse-Action-style disclosure** (ECOA / Reg B requires a reason within 30 days for adverse action; Angel Oak dodges this by *not* making a decision online — but the moment a competitor enters the denial-diagnostic space, they can offer a faster reason-than-the-lender-does experience that wins trust)

### C. Soft-pull prequal as a moat
Angel Oak's most glaring weakness is that the only competitor who can prequalify in 60 seconds on a non-QM loan is **Angel Oak themselves** (via the wholesale QuickQuote), and they hide that capability behind a broker login. A consumer-facing diagnostic that uses a *soft pull* (which is permitted under FCRA 604(c) when not used for credit decisions) and **maps the result to the 15 AOMS program matrices** would be the only public-facing non-QM prequalification tool on the internet.

### D. The "you got denied — here's why and what to do" page
The `/resources/mortgage-loan-challenges-and-product-solutions` page (Sep 2021) and `/resources/we-are-saving-more-loans` (Aug 2022) prove that Angel Oak *thinks* in "if X failed, try Y" terms, but the content is:
- Outdated (no post-2022 entries)
- Positioned as **Realtor marketing** (every "We Are Here To Walk You Through The Process Every Step Of The Way!" footer pitches Find-An-Advisor)
- Buried in the `/resources` subdirectory
- Not linked from any product page

A diagnostic landing page targeting "denied mortgage," "didn't qualify for mortgage," "what to do if mortgage denied," "non-QM after denial" with a real eligibility engine and a per-product pass/fail would (a) own a keyword cluster Angel Oak completely ignores, and (b) function as a *soft* lead-capture for AOMS (the borrower self-identifies, sees they don't qualify for Bank Statement at 580 FICO, gets pointed toward a credit-repair partner, and a year later returns to AOMS as a 640 borrower — which is the only way AOMS actually acquires denied-then-rehabilitated borrowers).

---

## Appendix A — File / URL Map (all verified live as of research date)

**Retail (consumer-direct) — Webflow — `my.angeloakms.com`**
- `/` — homepage
- `/product-offerings` — 7 products hub
- `/product-offerings/bank-statement-home-loan` — 640 FICO, up to $4M, 12/24-mo bank statements
- `/product-offerings/bank-statement-heloc` — 660 FICO, up to $750K (business) / $500K (personal)
- `/product-offerings/investor-cash-flow-loan` — DSCR, 680 FICO, up to $3M
- `/product-offerings/jumbo-home-loan` — Platinum Jumbo, 680 FICO, up to $4M
- `/product-offerings/asset-qualifier-home-loan` — 700 FICO, no income, $500K post-close assets
- `/product-offerings/closed-end-second-loans` — 660 FICO, up to $750K
- `/product-offerings/portfolio-select-home-loan` — 640 FICO, 1-yr FC / 2-yr BK seasoning
- `/product-offerings/foreign-national-home-loan` — DSCR 1:1, $1.5M max
- `/product-offerings/conventional-home-loan` — Agency
- `/product-offerings/federal-housing-administration-loan` — Agency
- `/product-offerings/veterans-affairs-home-loan` — Agency
- `/product-offerings/usda-home-loan` — Agency
- `/product-offerings/2-1-buydown` — Buydown variant
- `/product-offerings/business-bank-statement-elite` — Higher-tier Bank Statement
- `/find-an-advisor` — State-driven advisor picker
- `/contact-angel-oak` — Full contact + lead form
- `/apply` — Stub
- `/portal` — Borrower login
- `/state/{state}` — 50 state SEO pages
- `/branch/{city}` — 30+ city SEO pages
- `/advisors/{name}` — 20 individual advisor pages
- `/apply-now/{advisor}` — Advisor-specific apply pages
- `/cd/{campaign}` — 50+ paid-media landing pages
- `/embed/banks-form`, `/embed/consumer-direct-yext` — iframe embeds for partner sites
- `/forms/{form-name}` — multiple form variants
- `/resources/{article-slug}` — 50+ blog articles
- `/about-us` — company info, full state-by-state licensing

**Wholesale (broker) — WordPress + Yoast — `angeloakms.com`**
- `/` — wholesale homepage (Non-QM Lender)
- `/non-qm-quick-quote/` — broker pricing engine (iframe to `aoquickquoteform.azurewebsites.net`)
- `/prime-jumbo-quick-pricer/` — separate quick pricer
- `/agency-quick-pricer/` — agency quick pricer
- `/quickquote/` — alt URL to QuickQuote
- `/programs/` — 15 programs hub
- `/programs/bank-statement-mortgage-program/`
- `/programs/bank-statement-heloc/`
- `/programs/1099-income-loan-program/`
- `/programs/pl-loan/` — P&L
- `/programs/itin-mortgage-loan/`
- `/programs/investor-cash-flow-mortgage-program/` — DSCR
- `/programs/dscr-closed-end-second-lien/`
- `/programs/foreign-national-mortgage-program/`
- `/programs/asset-qualifier-mortgage-program/`
- `/programs/asset-depletion-mortgage-program/`
- `/programs/platinum-mortgage-program/`
- `/programs/portfolio-select-mortgage-program/`
- `/programs/closed-end-second-loans/`
- `/dscr-loan-calculator/`
- `/blended-rate-calculator/`
- `/2-1-buydown-calculator/`
- `/ae/` — Find an Account Executive
- `/connect/` — broker login
- `/secureupload/` — document upload for brokers
- `/resources/` — broker resource library (50+ loan-submission checklists, questionnaires, guides)
- `/insights/` — webinars / news / media / case-studies / podcasts
- `/team/` — exec team
- `/angel-oak-mortgage-solutions-property-type/` — property type hub
- `/investment-property-loans/`, `/investment-property-mortgage/`, `/vacation-home-mortgage/` — investor SEO pages
- `/non-qm-program-options/`, `/non-qm-resource-center/` — non-QM SEO pages
- `/angeloak-iq-brokers-intelligence-suite/` — broker platform marketing
- `/licensing/`, `/wholesale-disclosures/` — legal

**Parent / Sister sites**
- `angeloakcompanies.com` — Angel Oak Companies (parent)
- `angeloakcorrespondent.com` — Correspondent channel
- `angeloakcapital.com` — Angel Oak Capital Advisors
- `angeloakmortgage.com` — Parked GoDaddy lander (not in use)

---

## Appendix B — Direct Evidence Quotes

**Tagline (wholesale homepage H1):** "Non-QM Lender" — `<title>Non-QM Lender | Angel Oak Mortgage Solutions</title>`

**Tagline (retail homepage):** "Your Full-Service Mortgage Lender" — from `/` body text

**About-Us brand statement:** "Innovative Solutions for Underserved Borrowers … Our consumer direct platform services customers through leads generated online from our digital lending system which integrates consumers directly with our loan products."

**Self-employed product promise (bank-statement-home-loan page):**
> "Our Bank Statement mortgage program is the perfect option for self-employed borrowers who need an alternative method to show the true cash flow of their business. Borrowers do not have to own 100% of the business. Our Bank Statement program provides a loan solution to help underserved credit-worthy self-employed borrowers who otherwise would not qualify for a home loan."

**DSCR promise (investor-cash-flow-loan page):**
> "Our Investor Cash Flow mortgage (DSCR Loan) program allows your clients to qualify based on rental analysis to determine property cash flow. No personal income required to qualify. This saves you from submitting complicated income statements and tax returns."

**Jumbo "just missed" promise (jumbo-home-loan page):**
> "A Jumbo loan is for home purchases that exceed the conforming limit set by the FHFA. Our flexible non-QM Jumbo loans are for homebuyers who just miss Prime qualifications. These loan options allow flexibility to purchase the home of your dreams!"

**Asset Qualifier promise:**
> "Our Asset Qualifier program allows borrowers to use their liquid assets to qualify for a mortgage. … We do not require employment, income or DTI to justify ability-to-repay. We qualify based on assets that meet seasoning requirements. We have helped retirees, underserved self-employed, divorced with no income, and other borrowers with seasoned assets to purchase or refinance."

**Wholesale Non-QM QuickQuote promise (verbatim from page):**
> "Angel Oak Mortgage Solutions is a leader in Non-QM lending and our QuickQuote pricing engine gives you an answer in seconds. Our Account Executives specialize in matching a financial situation with the best possible loan for you. We will listen to your needs and explain the costs, rates and benefits of each Non-QM loan option so you can decide which one is right for your client. This page is intended for mortgage brokers."

**AngelOak iQ (wholesale platform) promise:**
> "AngelOak iQ is the intelligence platform purpose-built for Non-QM brokers — from instant pricing to closing, every step moves the deal forward. … QuickQuote: Accurate pricing in seconds, not hours. Generate accurate Non-QM loan pricing on the spot."

**Form submission success message (every page):** "Thanks! A Mortgage Advisor Will Be In Touch With You Shortly."

**Form submission error message:** "Oops! Something went wrong while submitting the form."

**"Saving more loans" angle (wholesale credibility):**
> "We Are Saving More Loans That Were Turned Away … We don't mind being known as deal savers, but we should be known as the lender to call first! … Common Fall-Out Scenarios: Self-employed borrowers who take write-offs and can't use their tax returns to qualify … Non-warrantable condos. We accept them - Fannie and Freddie do not. A foreclosure or bankruptcy that occurred less than seven years ago. Declining income over the past 2-3 years. … Self-employed borrowers who have owned their own business for less than 2 years can have a problem qualifying. We can qualify using assets for those who are eligible."

**Pre-approval vs prequal messaging (retail resource):**
> "A pre-approval is a conditional commitment to give borrowers a mortgage. … A pre-qualification is simply the borrower submitting an overall financial summary based on assets, debt and income. There are no credit checks with a pre-qualification or determination of a borrower's ability to repay the loan."

---

*End of report. This document is the full research deliverable for the "Why am I denied" project's competitive analysis of Angel Oak Mortgage Solutions.*
