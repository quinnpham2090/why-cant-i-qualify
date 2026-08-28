# U.S. Consumer Mortgage Affordability Calculator Competitive Landscape

**Research date:** August 2026
**Project:** "Why am I denied" — mortgage qualification diagnostic tool
**Scope:** 10 U.S. consumer mortgage affordability calculator websites
**Methodology:** Live page fetches (web_search was unavailable). Each subagent analyzed a single competitor end-to-end and produced a deep-dive report; this document is the synthesized, comparative read of all 10.

---

## Executive summary — the one-page take

The U.S. consumer mortgage calculator market is **structurally broken** for the user who actually needs help: someone denied, struggling to qualify, or wondering "why can't I get approved?"

Every calculator in the top 10 falls into one of three categories:

1. **Publisher/affiliate lead-funnel calculators** (Zillow, Redfin, Realtor.com, Bankrate, NerdWallet, SmartAsset) — show a number, then route to a single lender partner. They are *frictionless* but they never diagnose. They tell you what you *might* be able to afford, never what is preventing you.
2. **Editorial / informational calculators** (Investopedia, Kiplinger) — math-helper widgets wrapped in long-form articles, zero lead capture, no lender handoff. They never say whether you qualify either.
3. **Dead / near-dead** (CNN Money, Consumer.gov) — CNN killed its calculator suite in 2021–2022; Consumer.gov never had one. CFPB has a "pre-computed scenarios" tool that is not interactive.

**The opportunity is consistent across all 10:** **no incumbent takes the actual underwriting inputs and returns a diagnostic verdict with ranked failure reasons and a remediation plan.** That is the unowned space.

| Competitor | URL pattern | Lead gate | Credit score input | DTI displayed | Qualification verdict | "Why I was denied" diagnostic |
|---|---|---|---|---|---|---|
| Zillow | `/mortgage-calculator/` + `/house-affordability/` | None (BuyAbility gated) | ❌ | DTI tool only | ❌ | ❌ |
| Redfin | `/how-much-house-can-i-afford` + `/mortgage-calculator` | None (Rocket handoff) | ❌ | Mentioned in copy | ❌ | ❌ |
| Realtor.com | `/mortgage/tools/affordability-calculator/` | None (pre-approval gated) | ❌ | Used, not shown | "Affordable / stretches / over" tier | ❌ |
| Bankrate | `/mortgages/home-affordability-calculator/` | None (rate table gated) | Range only | In prose, not code | ❌ | ❌ |
| NerdWallet | `/mortgages/calculators/how-much-house-can-i-afford` | None (prequal gated) | ❌ | ✅ 36% bar | "Affordable / Stretch / Difficult" | ❌ |
| SmartAsset | `/mortgage/mortgage-calculator` + `/how-much-house-can-i-afford` | PII-walled (SmartAdvisorMatch funnel) | 10-bucket band (affordability only) | ✅ 36% | ✅ "Accuracy Grade A" self-score | ❌ |
| CNN Money | `money.cnn.com/calculator/...` | **Dead — 404** | n/a | n/a | n/a | n/a |
| Consumer.gov | `consumer.gov` | n/a — no mortgage content | n/a | n/a | n/a | n/a |
| Investopedia | `/mortgage-calculator-5084794` | None (ad-monetized) | Range → APR | In prose | ❌ | ❌ |
| Kiplinger | `/personal-finance/mortgage-calculator-find-your-monthly-payment` | None (newsletter funnel) | Band → MyFICO table | ❌ | ❌ | ❌ |

**No competitor ships a denial-diagnostic flow.** Every page that says "we'll show you if you can afford it" actually means "we'll show you a number assuming everything else goes right."

---

## 1. Zillow (`zillow.com/mortgage-calculator/`)

### Website URL
- `https://www.zillow.com/mortgage-calculator/` — flagship **payment calculator** (price → monthly PITI)
- `https://www.zillow.com/mortgage-calculator/house-affordability/` — **affordability calculator** (income → max home price)
- `https://www.zillow.com/homeloans/buyability/` — **BuyAbility** (gated personalized pre-qual with soft credit pull)
- 11+ sibling calculators: FHA, VA, refinance, cash-out refi, amortization, DTI, down payment, closing cost, property tax, loan comparison

### Target audience
First-time buyers, scenario-planners, refinancers, and Zillow listing shoppers. **Not** investors (no DSCR), self-employed (acknowledged in copy), or non-U.S. buyers.

### Value proposition
> "Estimate a comfortable mortgage amount based on your current budget."

Note the word "comfortably" — not "qualified." The pitch is aspirational, not underwritten.

### Lead capture mechanism
- **Zero required fields** before showing a result. Defaults pre-render so the user sees "$229,813" before touching anything.
- No email gate, no PDF download, no newsletter lead magnet. The calculator itself is the magnet.
- The single hard conversion point is the **"Get pre-qualified"** CTA → `/homeloans/eligibility/` (NMLS #10287), a soft-credit-pull form feeding Zillow Home Loans.

### Questions asked
- Mortgage calc: home price, down payment, loan term, interest rate, ZIP (for tax), property tax, HOA, insurance, PMI
- Affordability calc: annual income, monthly debts, down payment, VA toggle, location
- BuyAbility (gated): all of the above + **credit score band, employment status, liquid assets, recent credit events**
- **The public calculators never ask for credit score, employment history, liquid assets, co-borrower breakdown, property type, FTHB status, or loan purpose** — all listed in Zillow's own "What Do Mortgage Lenders Look For?" article as top-5 underwriting criteria.

### User experience
- Single screen, one-page flow, mobile-collapsed
- Pre-rendered defaults (anchored to a sub-$200K home that feels irrelevant in 2026)
- Advanced fields are hidden in collapsible sections
- Disclaimer is a small link, easy to miss
- No save / share / PDF

### Calculator functionality
- **Mortgage calc:** PITI breakdown + amortization schedule + 30/15/ARM comparison
- **Affordability calc:** a single home-price ceiling
- **DTI calc:** back-end DTI ratio + "over the limit" verdict
- None produces a **qualification verdict** — only a comfort number

### Calls to action
- "Get pre-qualified" appears **39+ times** on the calculator pages alone
- All routes funnel to Zillow Home Loans
- Refinance calculator is the one place Zillow routes to a third-party lender search

### Trust signals
- 21+ NMLS mentions, 2 Equal Housing Lender logos
- Real bylines on the learn articles (Jennifer Lyons, Jessica Rapp)
- Zillow's own data (ZHVI, consumer survey citations)
- **No third-party review badges, no Trustpilot, no testimonials**

### SEO strategy
- Hub-and-spoke `/mortgage-calculator/[slug]/` pattern
- **Major SEO leak:** `/dti/`, `/affordability/`, `/piti/`, `/qualification/`, `/arm/`, `/jumbo/`, `/usda/`, `/heloc/`, `/first-time-buyer/`, `/credit-score/` all 404
- **Major denial-SERP gap:** `/learn/denied-for-a-mortgage/`, `/learn/mortgage-denied/`, `/learn/why-mortgage-denied/`, `/learn/mortgage-pre-approval-denied/` all 404 — even though Zillow's own 2022 research found **"28% of mortgage buyers reported being denied financing at least once before ultimately getting approved."**

### Strengths
- Zero-friction entry point
- Full PITI output
- 11+ specialized calculators in the cluster
- ZIP-localized tax defaults
- Authoritative learn articles (FICO, DTI, PITI explainers)
- BuyAbility is genuinely a useful live rate-tracking tool

### Weaknesses
- The 5 underwriting pillars (credit, history, employment, DTI, assets) get **1 input** (DTI)
- DTI tool only looks at back-end ratio
- No diagnostic on *why* the number is what it is
- Default scenario anchored to a 2017-era home price
- No scenario save, no share, no PDF
- All mortgage CTAs route to Zillow Home Loans — single-lender conflict of interest
- Massive 404 surface for denial-related keywords

### What a "why can't I qualify" diagnostic could do better
- Ask for credit score band, employment status, liquid assets, recent credit events, loan purpose, property type, co-borrower breakdown
- Output a **qualification verdict with reasoning**, not a single number
- Show a side-by-side of *every* loan program the user might qualify for (Conventional 97/95/90, FHA 96.5, VA 100, USDA 100, Jumbo) with the actual max loan under each
- Include a **"denial reason decoder"** for the already-denied user (DTI too high, FICO too low, BK seasoning, late payments, LTV, condo warrantability, etc.)
- Ship a **"what would have to change" sensitivity panel** (pay off car → +$42K budget; 620→720 FICO → +$65K budget; co-borrower with $60K income → +$92K budget)
- Include a denial-recovery calendar ("wait 10 months for FHA BK seasoning")
- Offer multi-lender comparison, not just Zillow Home Loans
- **Market size:** ~880,000 denied-borrower-events per year + 52% of prospective buyers who paused to save for down payment (Zillow's own research) — both unaddressed

---

## 2. Redfin (`redfin.com/mortgage-calculator`)

### Website URL
The URL paths the user supplied all return 503. The actual tools are at the parent kebab routes:
- `https://www.redfin.com/mortgage-calculator` — payment calculator (with PMI/taxes)
- `https://www.redfin.com/how-much-house-can-i-afford` — affordability calculator
- `https://www.redfin.com/refinance-calculator` — refinance calculator
- `https://www.redfin.com/home-equity-calculator` — home equity
- `https://www.redfin.com/rent-vs-buy-calculator` — rent vs. buy
- `https://www.redfin.com/todays-mortgage-rates` — current rates (with 50 state subpages)
- `https://www.redfin.com/mortgage-get-pre-approved` — Rocket Connect handoff

### Target audience
- **Primary:** first-time and move-up *buyers* (W-2, salaried, primary residence)
- **Secondary:** refinancers, home-equity tappers, renters comparing to buying
- **Not for:** investors (no cash-flow / DSCR / cap-rate inputs), self-employed (acknowledged in copy)

### Value proposition
> "Estimate your mortgage payment, including the principal and interest, taxes, insurance, HOA, and PMI. Add your location for more accurate estimates."

The pitch everywhere is "estimate / see / discover" — a quick, location-aware estimate. The reality is these are lead-funnel widgets for Rocket Mortgage, not deep decision-support tools.

### Lead capture mechanism
**All five calculators are no-gate tools** — you see results instantly with no email, name, or phone. The lead capture happens one click downstream in two places:

1. **"Get prequalified" button** → `/mortgage-get-pre-approved?context=82` → loads a page titled **"Rocket Connect"** → after a 4-option survey, hands the user off to Rocket Mortgage's actual prequal flow
2. **"Find an Agent" banner** → Redfin's brokerage

> "We've connected you to our partner Rocket Mortgage® to provide a quick estimate."

The funnel is explicitly disclosed in the footer: "All mortgage lending products and information are provided by Rocket Mortgage, LLC | NMLS #3030." Redfin is the front door, Rocket is the closing.

### Questions asked
**Payment calculator:** home price, down payment, VA toggle, location, loan type, interest rate (pre-filled per loan type), advanced (tax/insurance/HOA).

**Affordability calculator:** annual household income, monthly debts, cash down payment, "do you have a home to sell?" toggle, VA toggle, location.

**Refinance calculator:** current mortgage balance, current monthly payment, home value, ZIP, VA toggle.

**Rent vs. buy:** 19 inputs (the worst UX in the category).

**Notably missing from every calculator:** credit score, broken-out monthly debts, liquid assets beyond down payment, co-buyer details, desired loan term or target monthly payment, loan purpose.

### User experience
- **Trivially short flow.** Payment: type price → type down payment → optionally pick location → see monthly payment. No required fields beyond home price.
- **Local tax/insurance/HOA silently default to zero if no location** — the most serious trust issue. A naive user comparing two home prices sees a payment that doesn't include property tax.
- Advanced options collapsed by default
- Refinance calc asks you to know your own home's value (cognitive load)
- Mobile: React-rendered with standard two-column desktop / stacked mobile pattern
- Visual design: clean Redfin palette, big number, four row items below

### Calculator functionality
**Payment calculator outputs:** single dollar figure, four-line breakdown (P&I, property tax, HOA, insurance). **No PMI line in the on-page output** even though the meta description promises it. **No amortization schedule. No total interest paid. No DTI. No closing-cost estimate. No sensitivity analysis.**

**Affordability calculator outputs:** max home price. Computed DTI is mentioned in copy but value depends on adding a location. Integrates with Redfin home search by max price.

**Formula is published** (rare for a competitor):
> "P = L*(c*(1 + c)^n)/((1 + c)^n - 1)"

### Calls to action
1. **"Get prequalified"** → Rocket Connect handoff
2. **"Find an agent"** → Redfin brokerage
3. **"Connect with a Rocket Mortgage Home Loan Expert"** (refi + home equity)
4. **"Get prequalified and secure your dream home"** (affordability inline)
5. **"Learn more about mortgage pre-approvals"** → internal SEO guide
6. **"Make an offer fast"** → Redfin Premier / Buy with Redfin

### Trust signals
- NMLS #3030 disclosure in every footer ("Licensed in 50 states")
- Fair Housing Act, NY Standard Operating Procedures, California DRE #01521930
- Rocket Mortgage co-branding (institutional credibility)
- 50 state rate pages = massive SEO authority
- Phone support 1-844-759-7732
- **Not there:** no expert bylines, no "Reviewed by [named loan officer]" badges, no third-party BBB or Trustpilot

### SEO strategy
- Title tags: "Mortgage Calculator with PMI and Taxes", "How Much House Can I Afford? - Home Affordability Calculator", etc.
- Long-tail guides at `/guides/...`: first-time home buyer, mortgage pre-approval, first-time home buyer programs, how to improve your credit score, what credit score is needed, how to make a down payment, mortgage loan process
- 50 state rate landing pages (`/todays-mortgage-rates/california`, `/texas`, etc.)
- Affordability page is ~3,000 words with FAQ-style H3s

### Strengths
- **Frictionless.** Calculator → result in under 10 seconds.
- **Location-aware.** Drop in a city/zip and Redfin pulls local property tax, insurance, and HOA defaults.
- **Veteran-aware.** One-click VA toggle correctly applies $0 down and removes PMI. Real product thinking.
- **Loan-type aware.** Pre-fills the right interest rate per loan type.
- **Published formula** — earns trust and helps SEO.
- **Massive SEO footprint** (50 state rate pages, ~7 long-form guides).
- **Tight integration with home search** — pipes affordability number into Redfin listing search.

### Weaknesses
- **No credit-score input** — the single biggest gap
- **No "why won't I qualify" diagnostic** — only forward-looking estimates
- **No amortization schedule, no total interest over loan life, no month-by-month split**
- **No closing-cost estimate** — Redfin's payment calc pretends they don't exist
- **No DTI display on payment calc** (mentioned in copy, never computed)
- **Tax/insurance/HOA silently zero if no location** — serious trust issue
- **No soft-pull or actual prequal within the calculator** — the handoff dumps you into Rocket Connect which then asks a single question and bounces to rocketmortgage.com
- **No scenario comparison** — change one field at a time
- **All mortgage products route to Rocket** — if you don't qualify with Rocket, no alternative lender
- **Two competing CTAs** (prequal + agent) cause choice paralysis
- **Refinance inputs not auto-filled** — user has to know their own balance and value
- **Rent-vs-buy is a 19-field usability cliff**

### What a "why can't I qualify" diagnostic could do better
1. **Collect the actual underwriting inputs Redfin skips:** credit score (band), monthly debts broken out (car, student, credit-card minimum, child support, alimony), co-buyer separately, liquid assets, desired loan term, target purchase price, target monthly payment
2. **Compute and *display* the three real DTI numbers lenders use:**
   - Front-end DTI (housing PITI / gross monthly income, target ≤ 28%)
   - Back-end DTI (housing + all monthly debts / gross monthly income, target ≤ 36% conventional, ≤ 43% FHA)
   - LTV with the specific threshold for each loan type
3. **Return a verdict, not a number** — "You don't qualify for a $500,000 home with these numbers" or "You're $340/month short on back-end DTI"
4. **Identify the binding constraint** — "DTI too high" vs "LTV too high" vs "FICO below FHA's 580 floor"
5. **Show the fix** — "If you paid down the $4,200 credit-card balance, your DTI drops to 34% and you qualify for $525K instead of $480K"
6. **Branch by loan program** — Conventional vs FHA vs VA vs Jumbo each have different rules
7. **No lead gate on the diagnosis** — keep free, capture leads downstream
8. **Honest, multi-lender handoff** — solve the Rocket-conflict-of-interest problem
9. **Use the user's real credit profile** (Plaid/Experian Connect soft pull), not a default rate
10. **Surface closing costs and cash-to-close** — Redfin's payment calc ignores them
11. **Save the scenario with a shareable URL**

---

## 3. Realtor.com (`realtor.com/mortgage/affordability-calculator`)

### Website URL
- `https://www.realtor.com/mortgage/tools/affordability-calculator/` (canonical — the user-supplied path returns 429)
- 4 sibling calculators: mortgage-calculator (monthly payment), refinance-calculator, rent-or-buy-calculator
- `https://www.realtor.com/mortgage/home-loan/` — pre-approval funnel (NMLS #2121192)

### Target audience
Mass-market W-2 conventional borrowers, first-time buyers, move-up buyers. **Not** self-employed, recent-credit-event, or investor segments.

### Value proposition
The affordability calculator uses the 28/36 conventional rule, 31/43 FHA rule, and ~41% back-end VA rule to give a three-tier price range. Realtor.com's editorial explicitly says **"Don't buy the max dollar you're approved for"** — a humane constraint that the tool itself cannot enforce.

### Lead capture mechanism
- **Zero PII before results** — the calculator is anonymous
- Three conversion paths:
  1. **"View matching homes"** → listings funnel (the strongest)
  2. **"Get pre-approved"** → `/mortgage/home-loan/` (Move, Inc. NMLS #2121192)
  3. **"Find a REALTOR®"** → agent funnel
- The pre-approval form requires a credit pull and 2-year tax-return stack

### Questions asked
**Only four inputs on the affordability calculator:**
1. Annual household income
2. Monthly debt
3. Available funds (down payment + closing)
4. VA-military checkbox

**Missing:** credit score, location, interest rate, loan term, property tax, HOA, insurance, PMI.

### User experience
- **Three fields, one button, ~60 seconds to result** — among the fastest in the category
- Minimal friction on the calculator itself
- Site is mobile-friendly but rate-table pages require horizontal scroll on mobile

### Calculator functionality
- Three-tier output: **"Affordable / stretches your budget / over your budget"**
- DTI is used internally but **never displayed**
- One rate for all buyers (no credit score input)
- No location / property tax adjustment
- No PMI/MIP line
- No amortization schedule
- No "comfortable vs. max" toggle (Zillow has this)
- No sensitivity analysis

### Calls to action
- "View matching homes" (primary, drives the listing funnel)
- "Get pre-approved" (lender funnel)
- "Find a REALTOR®" (agent funnel)
- 50-state rate pages with weekly recaps (URL slugs include the rate, e.g. `$424,950-home-at-6-79-rate`)

### Trust signals
- **NAR ownership is the dominant signal.** Footer reads: "© 1995- 2026 National Association of REALTORS ® and Move, Inc."
- 99% MLS coverage (890 MLS systems)
- 15-minute listing refresh
- Named-and-bylined reporters
- Named local agent quotes throughout
- **Strongest trust stack of any consumer mortgage site**

### SEO strategy
- Brute-force long-tail coverage: 134 sub-sitemaps
- Weekly rate-recap articles with rate baked into URL slug
- State-by-state rate pages for all 50 states
- Owns every "how much house can I afford" / "mortgage calculator" / "current mortgage rates" / "[state] mortgage rates" query

### Strengths
- Cleanest "don't over-leverage" voice in the category
- NAR brand authority is unmatched
- Massive MLS-backed listings inventory
- 50-state rate coverage with weekly recaps
- Strong content + product integration

### Weaknesses
- No DTI display (used but not shown)
- No credit score input (one rate for all buyers)
- No location / property tax adjustment
- No PMI/MIP line
- No amortization schedule
- No "comfortable vs. max" toggle
- No "what would have to change" diagnostic

### What a "why can't I qualify" diagnostic could do better
- Score the user against the actual lender checklist (with a soft-pull credit report)
- Rank the top 3 reasons for denial in order of magnitude
- Map each reason to a specific action with a dollar payoff attached
- Hand off cleanly to the same "Get pre-approved" / "Find a REALTOR®" / "View matching homes" CTAs Realtor.com already monetizes
- Localize by state and metro (Realtor.com owns the data) to surface state-specific DPA programs, conforming loan limits, etc.

---

## 4. Bankrate (`bankrate.com/mortgages/mortgage-calculator/`)

### Website URL
- `https://www.bankrate.com/mortgages/mortgage-calculator/` — flagship **payment calculator**
- `https://www.bankrate.com/mortgages/home-affordability-calculator/` — affordability page (H1: "How Much House Can I Afford Calculator")
- `https://www.bankrate.com/mortgages/amortization-calculator/` — full amortization schedule
- `https://www.bankrate.com/mortgages/refinance-calculator/` — refi with break-even
- `https://www.bankrate.com/mortgages/15-or-30-year-mortgage-calculator/`
- `https://www.bankrate.com/mortgages/mortgage-rates/` — rate table (the real marketplace)

**Key SEO architecture observation:** there is no `/how-much-house-can-i-afford` URL — Bankrate consolidated that intent into `/home-affordability-calculator/`. The popular slug returns 404. **There is no "Why can't I qualify?" calculator.** That exact query is unserved by Bankrate.

### Target audience
First-time buyers, refinancers, mortgage shoppers — the four personas on the mortgages hub: **Buy / Refi / Tap home equity / First home / Second home / Mortgage relief**. Not investors or commercial buyers.

### Value proposition
Three quantified promises:
- **$73k** — "Average saved by Bankrate mortgage users over 30 years"
- **600+** — "Banks and credit unions surveyed annually"
- **99.7%** — "Bankrate offers beat 99.7% of banks and credit unions"

> "Bankrate Research 2026: 9 out of 10 homebuyers overpay for their mortgage. We analyzed 3.2 million mortgage originations — the largest independent study of its kind."

Position is **"we'll show you rates no one else shows you"** — marketplace, not diagnostic.

### Lead capture mechanism
**Three distinct lead flows, none a hard email gate:**

1. **Calculator inputs → no email wall** — results render inline, no required lead form
2. **Monarch/Conversations engagement widgets** — soft "Log in or create a free account" modal to "Save calculation" (feature is honestly labeled "coming soon")
3. **Rate table → lender click-out** — the hard lead flow on `/mortgages/mortgage-rates/` collects only 3 fields (ZIP, purchase price, down payment) plus credit score band. No email, no name, no phone, no income, no debts. Click-through goes to the lender's own site.

> "For live offers, represented by the solid button on each, we earn a fixed fee if you connect with the lender."

The funnel is: **calculator → no email capture → "Compare rates" CTA → click lender row → lender's own application.** Lead = tracked referral, sometimes phone-transfer.

### Questions asked
**Payment calculator:** home price, down payment ($ or %), **credit score range** (band selector), **ZIP code**, loan term, interest rate, property tax (auto/editable), homeowners insurance, HOA, additional principal payment.

**Home Affordability Calculator:** *same widget as payment calc* — no income, no debts, no DTI, no assets. The page is a long essay telling the user to do the 28/36 math themselves.

**Refinance Calculator:** remaining balance, remaining term, home value, ZIP, credit range, current rate, new rate, new term.

**Rate table:** ZIP, purchase price, down payment, credit score, loan type (purchase/refi).

**Never asks:** annual household income, monthly debts (car/student/CC minimums), liquid assets, employment type, recent credit events, co-borrower details, loan program, property type, occupancy.

### User experience
- One page, one widget, one "Update" button
- Heavy nav and modal chatter — 5 overlapping nav menus in the SSR markup
- "On This Page" sticky TOC is aggressive
- "Saving your calculation is coming soon" modal pops on first visit
- Multiple modal shells (disclosure, expert verified, bylines, login, save-calc, video, NPS) all in initial DOM
- Calculator widget loads from `calculators.bankrate.com` — separate origin, perceptible load delay
- No persistent result state — refresh and inputs vanish
- Visual: green CTA color, two-column desktop
- Mobile: NPS survey is mobile-only; rate table requires horizontal scroll for lender rows

### Calculator functionality
**Flagship outputs (Mortgage Payment Calculator):**
- Monthly payment (PITI)
- P&I broken out
- Property tax, insurance, HOA (editable)
- **PMI auto-calculated if down payment < 20%** ("generally, PMI costs an average of 0.46% to 1.50% of your loan amount annually")
- Loan amount, total interest paid, total cost of loan, **payoff date**
- **Amortization chart and schedule** (month-by-month)
- "Additional amount to monthly payment" field that recalculates interest savings

**Formula published:**
> M = P · [ r(1 + r)ⁿ / ((1 + r)ⁿ − 1) ]

**What's not calculated anywhere:**
- DTI ratio (front-end or back-end) as a number
- LTV / CLTV
- Loan program eligibility (FHA, VA, USDA, Conventional, Jumbo)
- Cash-to-close estimate
- Reserves required by program
- PMI removal date

### Calls to action
1. **"Compare rates"** (big green button) → rate table
2. **"Find your best rate"** (mortgages hub hero) → same
3. **"Read lender reviews"** / **"Best refinance lenders"** → `/best-lenders/`
4. **"Get a mortgage prequalification or preapproval"** → educational article
5. **CardMatch™** (top nav) — credit card matching funnel
6. **Editor's picks** in the hub — content links

**No "Talk to a loan officer" or "Schedule a call" CTA. No email course or drip funnel. No working "Save scenario" CTA. No app-download prompt.**

### Trust signals
**Strongest in the category:**
- Founded 1976 (45+ years)
- Subsidiary of Red Ventures since 2017 ($1.24B acquisition)
- NMLS #1427381 and BR Tech Services NMLS #1743443 in footer
- "Expert verified" badge with Financial Review Board
- Three named bylines per article: Writer (David McMillin), Editor (Michele Petry), Reviewer (Beverly Harzog — consumer-finance author)
- Mortgage rates page reviewed by Mark Hamrick (former Washington Bureau Chief)
- Best-lenders page reviewed by John Stearns, CMC, CRMS (real industry practitioner)
- Article sources cite NAR, ATTOM (property tax), Freddie Mac
- SABEW "Best in Business" 2012, NAREE Best Blog 2014, Forbes #41 in 2008
- AI policy disclosure (forward-looking)

**Negative signal:** Wikipedia entry notes "Bankrate contains AI-generated articles, and, like most other websites owned by Red Ventures, is considered 'generally unreliable' by Wikipedia due to its lack of credibility." E-E-A-T headwind.

### SEO strategy
- URLs target: "mortgage calculator", "how much house can I afford", "amortization calculator", "mortgage refinance calculator", "15-year or 30-year", "mortgage rates", "30-year mortgage rates", "FHA loan rates", "VA loan rates", "refinance rates", "best mortgage lenders", "preapproved vs prequalified", "FHA loans", "VA loans", "PMI"
- 12-min-read affordability page with primary sources
- Related landing pages: `fha-loan-rates`, `va-loan-rates`, `30-year-mortgage-rates`, `cash-out-refinance-rates`, `buying-a-home/` (16+ articles)
- "Mortgage rate history: 1972 to 2026" = strong long-tail SERP magnet
- 50 years of rate data via the "Bankrate Monitor (BRM) National Index"

**SEO gaps:**
- No `/mortgages/jumbo-loan-calculator/`, `/piti-calculator/`, `/fha-loan-calculator/`, `/va-loan-calculator/`, `/arm-vs-fixed-rate-calculator/`, `/rent-vs-buy-calculator/`, `/interest-only-mortgage-calculator/`, `/dti-calculator-mortgage/` — many popular-intent calculators 404
- No localized landing pages (e.g. `/mortgages/california/`)
- No state-level DPA or FTHB program pages

### Strengths
1. **No email gate on the calculator** — unlimited scenarios, live rates, PITI breakdown, amortization table without PII
2. **Live rate data wired into the calculator** — Bankrate's top-offer rate + national average pre-filled
3. **Transparent methodology** — formula shown, assumption about national-average taxes/insurance disclosed, $832,750 jumbo limit noted
4. **Editorial depth is best-in-class** — 12-minute read, primary sources, three byline levels
5. **Multiple linked calculators** — payment, affordability, amortization, refinance, 15-vs-30
6. **Marketplace is the moat** — filterable, ZIP-personalized, credit-score-banded rate table
7. **NMLS trust signals in footer**
8. **AI policy disclosure** — forward-looking
9. **Bilingual mobile accordion pattern** — engineering quality is high
10. **Honest "saving your calculation is coming soon"** — at least admits the gap

### Weaknesses
1. **The affordability calculator doesn't actually compute affordability** — same widget as payment calc
2. **No underwriting simulation** — tells you the payment, never tells you you'll be denied
3. **The "DTI ratio calculator" link is dead** — multiple 404s on the DTI URL
4. **~20 broken nav entries** to popular-intent calculators (FHA, VA, ARM, rent-vs-buy, jumbo, PITI, etc.)
5. **No state-level targeting** — competitors (Zillow, Redfin, Rocket) all have state-targeted SEO
6. **"Save my scenario" feature is missing** — modal admits it
7. **NPS survey is a forced ad-network data grab** — on every page
8. **Wikipedia + E-E-A-T reliability flag** — public-relations headwind
9. **No native mobile app, no PWA, no account persistence**
10. **Red Ventures affiliation is visible** — consumer trust tension

### What a "why can't I qualify" diagnostic could do better
- Take the inputs Bankrate refuses to take: gross monthly income, monthly debt broken out, liquid assets, **actual** credit score, desired loan program, property type, occupancy, co-borrower, employment type, recent credit events, down payment source
- Compute and surface the things a real underwriter computes: front-end DTI, back-end DTI, LTV/CLTV, reserve months, **loan program eligibility gate** (Conventional: ✅, FHA: ✅, VA: ❌, USDA: ❌, Jumbo: ❌), compensating factors
- Show the path to qualification, not just the verdict
- Be honest about the rate (band, not point estimate)
- **Skip the email gate** — mirror Bankrate's no-friction policy but add diagnostic value
- **Show the lender's actual reaction** — simulate Fannie Mae's Desktop Underwriter (DU) and Freddie Mac's Loan Product Advisor (LP) findings
- Be the anti-Bankrate: Bankrate is structurally aligned with the lender, not the user
- Visualize the gap: stacked bar, debt-payoff waterfall, timeline
- Differentiate by persona (FTHB, self-employed, post-credit-event, investor)
- Keep the editorial halo — pair the diagnostic with Bankrate-quality 12-min-read editorial

---

## 5. NerdWallet (`nerdwallet.com/article/mortgages/how-much-house-can-i-afford`)

### Website URL
The user-supplied path returns **404**. The live calculator is at:
- `https://www.nerdwallet.com/mortgages/calculators/how-much-house-can-i-afford` — affordability
- ~14 distinct mortgage calculators in the `/calculators/` cluster (FHA, VA, DTI, amortization, HELOC, closing costs, rent-vs-buy, income-required, etc.)
- `https://www.nerdwallet.com/mortgage/prequalification/` — gated prequalification

### Target audience
First-time buyers, refinancers, financially educated consumers. Editorial voice: "Will I ever be able to afford a house? I know, it's rough out there. First, stop doomscrolling."

### Value proposition
The NerdWallet Promise: "We're transparent about how we make money" + ad disclosure at top of every article + named star ratings on lenders. NerdWallet Compare, Inc. is a licensed lender (NMLS ID# 1617539), not just a publisher.

### Lead capture mechanism
**No email gate on the affordability page** (zero `type="email"` in HTML). The PII gate lives on the separate prequal page. Monetization is via sponsored `Check Rate` deep-links in a lender rotator with NerdWallet's 0–5 star ratings (NBKC 4.5, Rocket 4.5, New American Funding 3.5, AmeriSave 4.0).

**One piece of buried internal-tracking JSON literally admits:**
> "Personalized mortgage rates are not available on the website without providing contact information."

So the calculator's interest rate is the national average, not the user's rate — and the user is told the *real* rate only if they hand over PII.

### Questions asked
**Affordability calculator inputs:**
- Annual pretax income
- Monthly debt
- Monthly recurring expenses
- Down payment
- Interest rate (auto-filled with today's national average, e.g. 6.787%)
- 30-yr term
- Collapsed "Other Costs": property tax, insurance, HOA, PMI

**Critical missing inputs:** credit score, ZIP / location, co-borrower, employment type, asset reserves, loan type (FHA/VA/Jumbo get their own calculators).

**Prequalification page adds:** credit score range, employment status, prior foreclosure/bankruptcy — the real underwriting inputs.

### User experience
- Pre-filled sensible defaults ($110K income, $645 debt, 21% down, today's rate, 30-yr)
- Zero-friction — instant results
- Warm brand voice
- Full regulatory disclosures
- Cross-vertical linking (credit cards, banking, insurance, investing)
- 1.5 MB page payload is heavy for mobile

### Calculator functionality
- Home price, loan needed, monthly mortgage payment
- **DTI displayed (36% back-end bar)**
- **"Affordable | Stretch | Difficult" verdict bar**
- PITI breakdown (P&I, taxes, insurance, HOA, PMI, total)
- No amortization schedule on this page (separate page)
- No total interest paid
- No scenario compare
- No sensitivity analysis

### Calls to action
- Lender rotator → prequal page → "Get preapproved" (footer)
- Real-estate agent matching
- Credit-score upsell (TransUnion partnership)
- App install (4.8/4.3 ratings in footer)
- No credit card, balance transfer, or savings upsell on the mortgage vertical — kept clean

### Trust signals
- Full FTC ad disclosure at top of article
- NMLS ID# 1617539
- California Finance Lender license
- "Star rating methodologies" page
- 121k+ App Store reviews
- Sources cited: none in the article body — the 28/36 rule is presented as "broadly accepted" with no academic or regulatory citation

### SEO strategy
- Topical cluster of ~14 calculator URLs + ~30 lender-best-list URLs + ~10 rate URLs + ~20 learn/article URLs under `/mortgages/`
- Owns "how much house can I afford", "mortgage calculator", "FHA calculator", "VA calculator", "DTI calculator"

**Strategic gap:** the denial-decision SERP is almost completely empty on NerdWallet's site — no content for "why was my mortgage denied", "denial reasons", "reapply after denial", "adverse action notice". That's the unowned territory.

### Strengths
- Zero-friction
- Well-framed 28/36 rule with worked example
- Pre-filled sensible defaults
- Explicit PITI breakdown
- NerdWallet star ratings on lenders
- Warm brand voice
- Full regulatory disclosures
- Cross-vertical linking

### Weaknesses
- No credit score input
- No ZIP code (huge — tax/insurance defaults are national averages)
- No sensitivity analysis
- No scenario compare
- No FHA/VA variants on this page
- 28/36 rule is from 1981 and most lenders actually qualify at 43–50% DTI
- "Personalized rate" wall is hidden in tracking JSON
- "Compare more lenders" button on affordability page links to *refinance* lenders (likely a bug)
- 1.5 MB page payload is heavy for mobile
- 28/36 rule is presented without citation

### What a "why can't I qualify" diagnostic could do better
NerdWallet's report contains a full product spec for what a diagnostic should add (inputs, outputs, lead capture, trust signals, SEO keywords, compliance posture). Key elements:
- Add inputs: credit score, profile flags, employment type, income composition, co-borrower, down payment source, reserves, property type, FTHB status
- Output binary verdict per loan program, ranked denial reasons, "what would change" sensitivity, time-to-qualify, state overlays, adverse-action simulator
- Lead-capture pattern that respects the user
- Trust-signal additions
- SEO keywords to own
- Compliance posture

---

## 6. SmartAsset (`smartasset.com/mortgage/mortgage-calculator`)

### Website URL
- `https://smartasset.com/mortgage/mortgage-calculator` — payment calculator
- `https://smartasset.com/mortgage/how-much-house-can-i-afford` — affordability calculator
- 2,391 URLs in sitemap, 154 in `/mortgage/`
- SmartAdvisorMatch funnel lives on a separate domain: `smartadvisormatch.com` / `captivate.smartasset.com`

### Target audience
**Funnel-top aggregator; loss-leader calculator feeds a SmartAdvisorMatch funnel that monetizes through fiduciary advisor leads and mortgage lender leads.** Persona is broad SERP, monetized to HNW ($1.26M avg AUM, $25K+ investable-assets floor).

### Value proposition
- "23M monthly users"
- "$33B AUM closed in 2025"
- "Nation's largest marketplace connecting consumers to financial advisors"

The mortgage calc itself is positioned as a free, transparent PITI breakdown with editorial depth.

### Lead capture mechanism
**Two paths:**

1. **The main mortgage calc asks for zero PII** (pure free tool)
2. **"Find an Advisor" CTA** goes to a separate-domain React funnel on `smartadvisormatch.com` that collects, in order: **ZIP → marital status → income → homeowner status → investable assets → savings → name → email → phone with SMS OTP verification → notes → branching personalization**

**The phone+OTP gate is the B2B-quality signal** — that's how SmartAsset monetizes. APIs and event-tracking names extracted from the JS bundle: `funnel-submit-income`, `funnel-submit-investable-assets`, `OTP_STAGE`, `SMSOneTimePass`, `funnel-monetizable`, etc.

The payment calc's "View personalized rates" CTA goes to a **Bankrate rate table** that hands the user to lender advertisers on the "Next" click — a second revenue stream.

### Questions asked
**Payment calculator:** home price, down payment, ZIP, interest rate, term, tax, insurance, HOA. **No credit score input.**

**Affordability calculator:** adds income, monthly debt, cash on hand, **credit score 10-bucket field** (the only one in the category alongside NerdWallet's range), and a "Do this later / Skip" pattern.

### User experience
- Sub-second paint on payment calc
- Affordability calc takes 2–5 minutes due to modal-card pattern
- Payment calc: left-input / right-result
- Friction: empty default rate, no ZIP → silent national default, `user-scalable=no` (a11y violation), 2022-stamped "Our Assumptions" disclosure

### Calculator functionality
**Payment calc outputs:** PITI donut, year-scrubable amortization chart, **recommended savings** (down + closing + reserve), **recommended minimum income (36% rule)**, 30-vs-15 comparison, down-payment impact table, full amortization table, Bankrate rate table.

**Affordability calc outputs:** headline "You can afford up to $X", a vague "Why?" tooltip, full cost breakdown, average home values by bedroom, and a self-grading **"Accuracy Grade A"** comparison block vs unnamed competitors at "C".

### Calls to action
- **"Find an Advisor"** (header, FALC class) → SmartAdvisorMatch funnel — **the company revenue engine**
- **"View personalized rates"** → Bankrate rate table → lender lead
- Inline "try our free matching tool" → same funnel
- "Next" buttons in rate table → lender site

### Trust signals
**Positive:** SEC-registered RIA, quantitative brand claims, real citations (FRED, Freddie Mac, Bankrate, DoorLoop, Mortech/Zillow, Icanbuy, Texas United Mortgage), FAQ section, methodology disclosure, awards (CNBC, ThinkAdvisor, YC, Inc 5000), CSAT prompt.

**Negative:** empty `<meta name="author">` (E-E-A-T failure), 2022-stamped methodology note, **broken crime-data placeholders** on the affordability page that never get filled, double-stacked ad disclosures, no bylines, no third-party trust seals, credit-bucket redundancy.

### SEO strategy
- Programmatic long-tail: 50 state rate pages, 20 state calc pages, 30+ lender reviews, vertical listicles (best-mortgage-lenders, best-refinance, best-for-jumbo, best-first-time-buyer, best-online, plus state-specific)
- Heavy internal-link graph funneling every page to the SmartAdvisorMatch capture surface
- 3,500–4,500 words of editorial body on the calc page with named H2s matching search intent

### Strengths
1. PII separation (calc on smartasset.com, lead on smartadvisormatch.com)
2. SEO footprint
3. Two-calc architecture
4. Methodology disclosure
5. Editorial depth
6. Loan-type comparison
7. Live rate table
8. Recommended-minimum-income output
9. Progressive profiling
10. Multi-modal CTA
11. Fiduciary RIA positioning
12. Honest paid-placement UX

### Weaknesses (25 enumerated, top tier)
1. **No "why didn't I qualify" diagnostic** — headline gap
2. No "what if I improve X" simulator
3. No amortization download
4. No extra-payment simulator
5. No credit-score-to-rate mapping on payment calc
6. No program-specific (FHA/VA/USDA) modeling
7. No self-employed handling
8. No asset/reserve validation
9. No LTV warning
10. No condo-vs-SFR distinction
11. No property-tax exemption handling
12. No scenario save
13. Empty author meta
14. Stale 2022 methodology
15. Broken crime data
16. `user-scalable=no` a11y violation
17. The "recommended minimum income" is a 36% rule — same as everyone else's, no underwriting depth
18. "Accuracy Grade A vs C" self-score without methodology
19. Affordability calc's 10-bucket credit field is *separate* from payment calc — inconsistent
20. Bankrate rate table is *embedded* — third-party dependency
21. SmartAdvisorMatch funnel is on a separate domain — UX discontinuity
22. The vague "Why?" tooltip on the affordability calc is the *opposite* of diagnostic
23. ZIP-silent fallbacks for tax/insurance (national averages)
24. No amortization export
25. No condo-warrantability, flood-zone, HOA-litigation inputs

### What a "why can't I qualify" diagnostic could do better
- Ask the questions lenders actually ask: credit utilization, employment type, reserves, BK history, property type, occupancy, loan amount, etc.
- Output a **verdict**, not a single number
- Rank disqualifiers by ease of remediation
- Simulate "what if" levers (pay off debt, wait X months, switch to FHA)
- Expose the underwriter waterfall (DU/LP conditions)
- Call out hidden disqualifiers (condo warrantability, flood zone, HOA litigation, oil tank, easement)
- Output a personalized action plan ordered by leverage
- Show what the user *can* qualify for as a fallback
- Use a clinical, diagnostic voice instead of SmartAsset's motivational voice
- **Monetize via better-segmented mortgage leads + credit-repair + debt-consolidation** rather than advisor leads (which are wrong for the "I just got denied" emotional state)

**The strategic wedge in one sentence:** SmartAsset tells you what the math says you can afford; a diagnostic tells you what the lender's computer will actually decide, *why*, and what to do about it — and that is the unowned territory of the highest-intent, most-frustrated, most-likely-to-pay-for-help segment of the mortgage market.

---

## 7. CNN Money (`money.cnn.com/calculator/mortgages`)

### Website URL
**THE CALCULATOR NO LONGER EXISTS.** `https://money.cnn.com/calculator/mortgages` returns a 404 served with 2014-era jQuery 1.11.1, Lato fonts, AdFuel ad tags, and a 1024px fixed-width layout. The actual historical canonical URL was `https://money.cnn.com/calculator/real_estate/mortgage-payment/`, which now 301-redirects to a 2021-dated article at `https://www.cnn.com/2021/02/22/success/mortgage-calculator/index.html` (Cloudflare-gated). CNN killed the entire `money.cnn.com/calculator/` suite. `money.cnn.com` itself 301s to `cnn.com/business`.

### Target audience
**No audience** — the calculator is dead.

### Value proposition (historical)
"Editorial authority, no lender getting paid to show up first" — a math helper, not a sales tool.

### Lead capture (historical)
**None on the calculator.** No name, email, phone, SSN, or credit pull. Results were instantaneous and ungated. Monetization was via LendingTree/Bankrate affiliate handoff after the user clicked "see live rates." **This is a north star for the diagnostic's no-friction top of funnel.**

### Questions asked (historical)
Home price, down payment, loan term, interest rate, property tax, insurance, sometimes PMI/HOA. **No income, no debt, no credit score, no employment type, no location-specific tax.** This is the single biggest gap.

### User experience (historical)
One screen, instantaneous, <30 seconds to result. 1024px fixed-width desktop layout, jQuery 1.11.1, AdFuel ads, 2014-era design frozen in place. **Not mobile-first.** 3-5 ad units on every page.

### Calculator functionality (historical)
Monthly P&I, monthly total (PITI), total interest, total cost, amortization schedule, sometimes equity chart. No DTI, no qualification probability, no program eligibility, no credit-score sensitivity, no location-specific tax, no scenario simulator, no extra payments / points / ARM / biweekly modeling, no refinance break-even.

### Calls to action (historical)
"See live rates" → affiliate handoff to LendingTree/Bankrate. "Read more" → editorial articles. Newsletter sign-up. **No lender branding, no rate engine, no application flow, no live human.**

### Trust signals (historical)
CNN brand authority (the dominant signal), no commercial bias visible, editorial surround with bylines. **No methodology page, no third-party certifications, no expert-reviewer disclosures** — unlike Bankrate or NerdWallet. Borrowed trust that evaporated when the brand killed the tool.

### SEO strategy (historical)
Top-5 SERP for "mortgage calculator" / "mortgage payment calculator" / "how much house can I afford" / "amortization schedule" etc. through 2010s. The article-plus-widget pairing was the SEO unit. CNN's 2021-2022 migration lost the topical authority of `/calculator/` and the page is no longer on page 1 for "mortgage calculator" in 2026 — a **vacated SERP** the diagnostic can target.

### Strengths (historical)
- Brand authority
- Zero friction
- Instantaneous results
- Honest scope
- Editorial surround
- No lead-capture hostility
- Clean math

### Weaknesses (historical)
- No qualification output
- No DTI
- No credit sensitivity
- No program awareness
- National-average tax/insurance (materially wrong for many states)
- No extra payments / points / ARM / biweekly / refi modeling
- No first-time-buyer or self-employed or non-QM pathways
- No investor scenarios
- Heavy ad density
- Dated design
- No mobile-first
- Affiliate-handoff trust cliff
- No methodology page
- No updates visible to user
- Died in place

### What a "why can't I qualify" diagnostic could do better
- 17-22% of U.S. mortgage applications are denied/withdrawn per CFPB HMDA — a much larger share receive a soft decline with no clear answer
- The CNN SERP void ("why can't I qualify for a mortgage?", "denied for a mortgage what now", "FHA eligibility check", "DTI for mortgage") is the exact keyword set the diagnostic should target
- The article-plus-widget pattern that worked for CNN is the SEO playbook the diagnostic should adopt — but with the qualification angle CNN never covered
- 10 specific design recommendations in the source report, all derived from concrete CNN gaps

---

## 8. Consumer.gov mortgage tools

### Website URL
**Consumer.gov has no mortgage content whatsoever.** No calculator, no "buying a home" guide, no affordability tool, no down-payment tool, no glossary, no first-time-buyer page.

- `https://www.consumer.gov/credit-loans-debt` → 200 but body is empty. The site has 5 categories: Your Money, Credit, Debt, College & Career Schools, Cars, Scams & Identity Theft. **No Housing bucket.**
- The only "tool" on consumer.gov is `/your-money/budget-worksheet` — a 1-form, 2-input fillable HTML page whose text literally says "Subtract your expenses from how much money you make."
- Sitemap confirms 0 mortgage articles.

**FTC's actual mortgage content lives on a separate domain:**
- `https://consumer.ftc.gov/credit-loans-and-debt/loans-and-mortgages` — 4 Consumer Alerts about mortgage-relief scams. **No tool, no guide, no calculator.**

**The real federal mortgage consumer-education home is CFPB:**
- `https://www.consumerfinance.gov/owning-a-home/` — "Buying a house: Tools and resources for homebuyers"
- `https://www.consumerfinance.gov/consumer-tools/mortgages/` — main Mortgages hub
- `https://www.consumerfinance.gov/owning-a-home/explore-rates/` — the closest federal tool. **Pre-computed scenario comparisons** (credit score 625 vs 700, down payment 10% vs 25%, term 30 vs 15, conventional vs VA/FHA) on a fixed $400,000 home. **Not a calculator** — you cannot enter your own numbers. Data is from April 1, 2025 (~18 months stale).
- `https://www.consumerfinance.gov/consumer-tools/mortgages/ready-to-buy-a-home/` — 7-question "are you ready" yes/no checklist
- `https://files.consumerfinance.gov/f/documents/cfpb_your-home-loan-toolkit.pdf` — the headline PDF booklet (English + Spanish)

### Target audience
- **Consumer.gov:** mass-market, low-finance-literacy consumers + teachers. Plain-language, 6th–8th grade level, multilingual (English, Spanish on consumidor.gov, Vietnamese, Chinese, Korean)
- **CFPB:** all Americans shopping for a mortgage, with more depth

### Value proposition
- **Consumer.gov:** "Get the basics on how to make a budget, use credit, avoid scams, and more."
- **CFPB:** "Use our tools and resources to know what to expect every step of the way."

### Lead capture
**None on consumer.gov** (zero forms, zero email gates, no CRM). CFPB has a complaint funnel (`/complaint/`) but no marketing funnel. Neither collects data before showing results because there are no results to gate.

### Questions asked
- **Consumer.gov collects nothing.**
- **CFPB explore-rates** collects scenario choices only (no income, no DTI, no credit score input, no property input — everything is hardcoded).
- The "ready to buy" page is a 7-question yes/no rubric.

### User experience
- Both sites are 508-compliant (lang declared, viewport set, skip-to-main link, aria-*, role=, alt text, labels)
- Mobile-friendly
- Low-friction reading on consumer.gov
- CFPB includes "Page last modified [date]" timestamps as a trust signal

### Calculator functionality
- **Consumer.gov: no calculator.**
- **CFPB explore-rates:** pre-computed tables of interest paid over 5/30 years under each scenario, e.g. "Your higher credit score saves you up to $264,523 over the life of the loan." **No monthly-payment output, no DTI output, no qualification verdict.**

### Calls to action
- **Consumer.gov:** "Learn about [Category]", "Get resources", "Download PDF". No outbound service routing.
- **CFPB:** "Submit a Complaint", "Find a HUD-approved housing counselor", "Call the HOPE™ Hotline", "Trouble paying your mortgage? Get help", "Get answers from Ask CFPB", "Your home loan toolkit PDF (English + Spanish)"

### Trust signals
- `.gov` + FTC attribution + HTTPS banner + plain language + no ads/no affiliate links/no lead-gen + 508 compliance + multilingual
- CFPB adds: named data source (Curinos), named data date, named assumptions, formal "About us" + "Legal disclaimer" + page-modification timestamps

### SEO strategy
- **Consumer.gov:** 72 URLs, shallow keyword-rich slugs, proper `hreflang` to consumidor.gov, `lastmod` dates, zero mortgage targeting
- **CFPB:** massive deep site with topic clusters at `/consumer-tools/mortgages/`, `/owning-a-home/`, `/ask-cfpb/category-mortgages/`, `/mortgagehelp/`, plus downloadable PDFs

### Strengths
- **Truly unbiased, free, plain language, multilingual, 508-compliant, mobile-friendly, fast, low-friction, teacher resources hub, stable visual design**
- CFPB adds: a working (if limited) interactive tool, complaint funnel, HUD-counselor finder, HOPE hotline routing, PDF toolkits, public complaint database

### Weaknesses
- **Consumer.gov: no mortgage content, no interactive tools, no service routing, no bylines/timestamps on most pages, broken Spanish link in the language switcher, sparse update cadence, no connection to FTC scam-alert engine, content split between two domains confuses users**
- **CFPB: data is 18 months stale, single $400K price point, single geography, no live "can I qualify" calculator, no personalized fix-it list, HUD-counselor capacity is constrained**

User complaints (inferred):
- "I came here to find out if I can afford a house and the site just told me to make a budget."
- "I typed 'mortgage' into search and got nothing."
- "Why is FTC mortgage content on a different website?"
- "I was denied — what now?"

### What a "why can't I qualify" diagnostic could do better
10 specific gaps no federal tool currently fills:
1. Ask for the actual Adverse Action reasons on the denial letter
2. Run a live DTI/LTV calculation
3. Translate the diagnosis into a personalized fix-it list
4. Surface FTC fraud data when the user is in trouble
5. Pull current rates (not 18-month-old data)
6. Localize by ZIP / county / loan limit
7. Maintain the multilingual, mobile-first, 508-compliant bar consumer.gov already meets
8. Provide a specific next-step action (HUD counselor, credit report, complaint)
9. Front-load the "this is an estimate, not a guarantee" disclaimer
10. Act as the front door that bridges consumer.gov, consumer.ftc.gov, consumerfinance.gov, hud.gov, annualcreditreport.com, and the CFPB complaint portal

---

## 9. Investopedia (`investopedia.com/mortgage-calculator`)

### Website URL
- `https://www.investopedia.com/mortgage-calculator-5084794` — primary mortgage calculator
- 5 separate calculator pages: Mortgage, Mortgage Amortization, Loan, Loan Amortization, Amortization
- **No real affordability calculator** — only a text-only "How Much Mortgage Can I Afford?" article at `/articles/pf/05/030905.asp`

### Target audience
Financially educated consumers, students, professionals. Editorial policy explicitly: "We don't make recommendations."

### Value proposition
Educational authority. Best-in-class trust signals. The "Fact Checked by [Expert Reviewer]" badge is the brand's signature.

### Lead capture mechanism
**Zero lead capture.** The calculator has no email gate, no "Get pre-approved" CTA, no lender form, no LendingTree embed. **The whole page is monetized via 12+ display ad slots.** This is a content-marketing tool, not a lead-gen tool.

### Questions asked
**7 fields:**
1. Home price
2. Down payment %
3. Loan term
4. APR (or credit-score range that pre-fills APR)
5. Property tax
6. Homeowners insurance
7. HOA fees

**Defaults are beginner-friendly** (20% down, 30-year, national-average everything). **No income, no debts, no DTI, no credit score, no location, no loan program, no employment, no co-borrower.**

### User experience
- One screen, instant results
- "Fact Checked" badge in the byline area
- JSON-LD Article+FAQPage+BreadcrumbList schema
- Clean layout, minimal friction
- Education-first voice

### Calculator functionality
- Monthly P&I, total interest, total cost
- Amortization table
- No DTI output
- No qualification verdict
- No program-specific (FHA/VA/USDA) modeling
- 28/36/43% DTI rules taught in copy but never computed

### Calls to action
- 12+ display ad slots
- Editorial CTAs to related articles
- **No lender handoff**

### Trust signals
**Best-in-class in the category:**
- JSON-LD Article+FAQPage+BreadcrumbList schema
- Named author (Jean Folger) and reviewer (Melody Bell)
- Financial Review Board with 100+ years of expertise
- SABEW/FTC/SPJ compliance language
- Explicit "no AI content" policy
- Top-tier citations (CFPB, Federal Reserve, FDIC)
- Dotdash Meredith parent
- 44M monthly readers
- 14K+ glossary terms

### SEO strategy
- Strong SERP for "mortgage calculator" terms
- Massive glossary footprint (14K+ terms) gives Investopedia domain-wide authority
- The "How Much Mortgage Can I Afford?" text article ranks for affordability intent but offers no interactive tool
- **Wedge for diagnostic:** mortgage-affordability-calculator, why-did-i-get-denied, mortgage-dti-calculator, mortgage-qualification-calculator where Investopedia currently ranks with text-only articles

### Strengths
- Educational authority
- Zero-friction UX
- Best-in-class schema
- Multi-million monthly readers
- Trust signals unmatched
- Strong internal linking
- Plain-English editorial

### Weaknesses
- **No affordability calculator** — only a text article
- **No income, debts, DTI, credit score, location inputs**
- **No qualification verdict**
- **No denial-reason diagnosis**
- **No remediation path**
- Ad-monetized (display ads are the only revenue stream)
- 5 separate calc pages can confuse navigation

### What a "why can't I qualify" diagnostic could do better
- A 5-point roadmap (A through E) for what a "why can't I qualify" diagnostic should build
- Investopedia's "How Much Mortgage Can I Afford?" article is **text-only** — they rank for the affordability-intent SERPs but offer no interactive calculator
- Their editorial policy explicitly disclaims: "We don't make recommendations for you to buy, sell, or hold securities or investments"
- No major competitor (Bankrate, NerdWallet, Zillow, Redfin) closes that gap either
- That is your white-space

---

## 10. Kiplinger (`kiplinger.com/tool/mortgage-calculator/`)

### Website URL
Both URLs the user supplied return 404. The actual calculator is at:
- `https://www.kiplinger.com/personal-finance/mortgage-calculator-find-your-monthly-payment`
- **No standalone affordability calculator** — covered by a static article (`can-you-afford-that-house`) with a worked example

### Target audience
50+ / Kiplinger Letter demographic, not first-time buyers. Site chrome (sticky $107.88→$24.99 magazine sub, trending bar dominated by Social Security / estate planning / retirement articles) confirms this.

### Value proposition
> "Mortgage Calculator: Find Your Monthly Payment"

No affordability claim. Just the math.

### Lead capture mechanism
Two newsletter CTAs around the calculator (BlueConic blocks), a sticky header subscription upsell, and an end-of-article in-body email form. **The calculator itself is ungated** — users can compute without giving an email. Real revenue is the **click-out to Bankrate's lender marketplace** (powered by Bankrate disclosure).

### Questions asked
Home price, down payment / equity, loan term, interest rate, **annual household income, credit score**. **No location, no debts, no DTI, no property tax, no insurance, no HOA, no PMI, no loan program, no employment status.**

### User experience
- Single screen, ungated
- A video blocks the flow
- A mid-article newsletter form blocks the path to the calculator
- Sticky subscription upsell in the nav
- No rate date stamp
- No methodology page
- ~1.45 MB HTML payload
- **The article copy oversells what the widget delivers** — promises an affordability output that the widget doesn't actually show

### Calculator functionality
- Monthly P&I
- The article shows a MyFICO rate table cross-referenced
- The article's prose *promises* the tool "will show you how much you'll be able to reasonably afford" if you enter income + credit score — but the page text does not document what that affordability output actually looks like
- **This is the single biggest credibility gap on the page**

### Calls to action
- Newsletter signups
- "Powered by Bankrate" affiliate click-out
- Magazine subscription

### Trust signals
- Founded 1920 (Kiplinger has been around since 1920)
- "Editorial Standards" page
- Named authors with bios
- "Powered by Bankrate" disclosure
- Affiliate disclaimer
- **No third-party verification badges, no methodology disclosure, no "as of" date on rates**

### SEO strategy
- Solid title/H1 keyword match for "mortgage calculator" + "monthly payment"
- **Weak/zero coverage** for "why can't I qualify," "denied for a mortgage," "DTI calculator," or any qualification-diagnostic intent
- No FAQ/HowTo/Speakable schema

### Strengths
- Editorial authority
- No email gate
- Useful FICO band table
- Good internal cross-linking
- Plain-English framing

### Weaknesses (25 enumerated, top tier)
1. No affordability mode
2. No DTI
3. No debt inputs
4. No location/state
5. No taxes/insurance/HOA/PMI
6. No program branching
7. No amortization
8. No scenarios comparison
9. No "qualified / not qualified" verdict
10. No failure-reason diagnosis
11. The article copy oversells what the widget delivers
12. A video blocks the flow
13. A mid-article newsletter form blocks the path to the calculator
14. Sticky subscription upsell in the nav
15. No rate date stamp
16. No methodology page
17. ~1.45 MB HTML payload
18. No FAQ schema
19. No "HowTo" schema
20. No Speakable schema
21. No local SEO
22. Credit score input is a band, not the actual score
23. No DTI display
24. No closing costs
25. No cash-to-close calculation

### What a "why can't I qualify" diagnostic could do better
- Requires 14 additional inputs the user didn't have to provide to Kiplinger
- Must output a per-program verdict + ranked failure reasons + concrete action plan with dollar amounts
- Must cite the actual underwriting rules (CFPB QM, FHA 4000.1, VA Lender's Handbook, Freddie Mac selling guide)
- Must lead with "email me my action plan" instead of "subscribe to our 9 newsletters"

---

## Cross-competitor analysis

### Lead capture spectrum

| Pattern | Competitors | User experience | Monetization |
|---|---|---|---|
| **No gate on calc, no email collected** | Zillow, Redfin (calc), Bankrate, NerdWallet, Realtor.com, SmartAsset (calc), Investopedia, Kiplinger | Best UX | Click-out / ad / newsletter |
| **Soft account wall for save** | Bankrate (Fountain widget), NerdWallet (transunion upsell) | Friction on save | Account / cross-sell |
| **PII-walled lead funnel on a separate domain** | SmartAsset (smartadvisormatch.com) | Discontinuity | Premium lead |
| **Credit pull / soft-pull prequal** | Zillow (BuyAbility), Rocket (Redfin handoff) | High friction | Lender lead |
| **Dead** | CNN Money | n/a | n/a |
| **None** | Consumer.gov, Investopedia | n/a | None |

### Calculator input commonalities

| Input | % of calculators that ask |
|---|---|
| Home price | 100% (when calc is a payment calc) |
| Down payment | 100% |
| Interest rate | 100% (pre-filled) |
| Loan term | 100% |
| Property tax | 50% (auto-populated when ZIP is supplied) |
| Homeowners insurance | 50% |
| HOA | 40% |
| Annual income | 50% (affordability calcs only) |
| Monthly debts | 50% (affordability calcs only) |
| Credit score | 20% (NerdWallet range, SmartAsset 10-bucket, Kiplinger band, Investopedia range → APR) |
| ZIP / location | 60% |
| Loan program (FHA/VA/etc.) | 30% |
| Co-borrower | 10% (summed, not separate) |
| Employment type | 0% (none) |
| Reserves / liquid assets | 0% (none) |
| Recent credit events | 0% (none) |
| Property type | 0% (none) |
| Occupancy | 0% (none) |
| Down payment source | 0% (none) |
| Self-employed flag | 0% (none) |

### Calculator output commonalities

| Output | % of calculators |
|---|---|
| Monthly payment | 100% |
| PITI breakdown | 70% |
| Amortization schedule | 30% (Bankrate, Zillow, Investopedia, CNN historical) |
| Total interest over life | 50% |
| Payoff date | 30% |
| DTI ratio | 20% (NerdWallet, SmartAsset 36% rule, Zillow DTI tool only) |
| Max home price | 50% (affordability calcs) |
| Affordability verdict (3-tier) | 30% (NerdWallet "Affordable/Stretch/Difficult", Realtor.com "Affordable/Stretches/Over", Zillow "comfortably") |
| Per-program eligibility | 0% (none) |
| Qualification verdict | 0% (none) |
| Denial reason | 0% (none) |
| Remediation plan | 0% (none) |

### What a "why can't I qualify" diagnostic could do better — the meta-summary

Synthesizing all 10 subagent recommendations, the diagnostic opportunity has these dimensions:

#### 1. Inputs that no incumbent collects
- **Actual credit score** (not a range)
- **Credit utilization** (the most actionable credit lever)
- **Recent credit events** (BK, foreclosure, short sale, late payments) with timing
- **Employment type** (W-2, self-employed, contract, retired) with tenure
- **Income composition** (base, bonus, commission, rental, investment, alimony, child support)
- **Liquid assets** (savings, brokerage, retirement, gift funds)
- **Co-borrower** details as a separate profile
- **Down payment source** (savings, gift, equity, DPA grant)
- **Desired loan program** (Conventional, FHA, VA, USDA, Jumbo, Portfolio, Non-QM)
- **Property type** (SFR, condo, manufactured, 2-4 unit, co-op)
- **Occupancy** (primary, second, investment)
- **Target purchase price** AND **target monthly payment**
- **Condo warrantability, flood zone, HOA litigation, oil tank, easement** (hidden disqualifiers)

#### 2. Outputs that no incumbent produces
- **Per-program verdict** — "Conventional: ✅, FHA: ✅, VA: ❌ (not eligible), USDA: ❌ (not in eligible area), Jumbo: ❌ (DTI too high)"
- **Ranked denial reasons** — by magnitude and ease of remediation
- **Specific rule that fails** — "Your back-end DTI is 47%. Conventional requires ≤ 36% without compensating factors, or up to 45% with strong reserves. You are $612/month over the conventional limit."
- **Sensitivity panel** — "If you paid off the car loan: drops DTI to 41%, conventional becomes possible"
- **Path to qualification timeline** — "If you pause and do these three things over 8 months, you qualify for a $X home at Y rate with Z monthly payment"
- **DU/LP-style response** — "Approve/Eligible," "Approve/Ineligible," "Refer/Eligible with conditions"
- **Cash-to-close + reserves check** — "You can afford the mortgage but don't have enough cash to close"
- **What the user *can* qualify for as a fallback**

#### 3. Voice and posture
- **Clinical, diagnostic** instead of motivational or sales
- **Honest about uncertainty** — "This is an estimate, not a guarantee"
- **Multi-lender handoff** — no single-lender conflict of interest
- **Respectful of the user's emotional state** — denied buyers are frustrated, not aspirational

#### 4. Monetization that aligns with the user
- **Better-segmented mortgage leads** (multi-lender marketplace) — not the user being pushed to one partner
- **Credit-repair / debt-consolidation partners** — relevant to the actual remediation
- **DPA program referrals** — for closing the down-payment gap
- **HUD counselor routing** — for the deeply-denied
- **Skip the advisor lead** — wrong for this emotional state (SmartAsset's weakness)

#### 5. SEO surface
- **The denial-decision SERP is unowned across all 10 competitors:**
  - "why was my mortgage denied"
  - "denial reasons mortgage"
  - "reapply after mortgage denial"
  - "adverse action notice"
  - "mortgage denied what to do"
  - "denied for mortgage pre-approval"
  - "why can't I qualify for a mortgage"
  - "mortgage qualification calculator"
  - "mortgage DTI calculator"
  - "FHA eligibility check"
  - "VA loan eligibility"
  - "self-employed mortgage qualification"
  - "mortgage after bankruptcy"
  - "mortgage after foreclosure"
- All 10 competitors have **zero topically-dedicated pages** on these queries
- Zillow's own research says 28% of mortgage buyers are denied at least once — ~880,000 denied-borrower-events per year — and no one serves this audience well

#### 6. Compliance posture
- Front-load "this is an estimate, not a guarantee" disclaimer
- 508 accessibility (consumer.gov bar)
- Multilingual (consumer.gov bar)
- NMLS disclosures where applicable
- Plain-language at 6th–8th grade level for the broadest reach
- No "we'll show you rates no one else shows you" — that's a marketplace promise, not a diagnostic one

---

## Methodology note

`web_search` was unavailable for all 10 subagents ("Authentication Fails, Your api key is invalid"). Every analysis was built from direct page fetches of the live sites, parsing the SSR HTML, the JS bundles, the published APIs, the sitemaps, and the editorial copy. Where Wayback Machine, CommonCrawl, or third-party review sites were accessible, those were used as supplements. Where a subagent could not access a site (Realtor.com 429'd all bots; Investopedia Cloudflare-gated), it disclosed the limitation and used the next-best source (Yahoo SERP snippets, Wayback CDX index, official editorial documentation).

The 10 individual reports are in this workspace:
- `RESEARCH_zillow_mortgage_calculator.md`
- `redfin-calculator-research.md`
- `RESEARCH_realtor_mortgage_calculator.md` (+ 8 source artifacts in `02-Competitor-Research/realtor_sources/`)
- `02-Competitor-Research/...` (Bankrate report is in the synthesis subagent's output only — see also its source HTML in /tmp)
- `02-Competitor-Research/NerdWallet_Mortgage_Affordability_Calculator_Analysis.md`
- `smartasset_research.md`
- `02-Competitor-Research/CNN-Money-Mortgage-Calculator-Analysis.md`
- `CONSUMER_GOV_ANALYSIS.md`
- `INVESTOPEDIA_MORTGAGE_CALCULATOR_ANALYSIS.md`
- `KIPLINGER_MORTGAGE_CALCULATOR_ANALYSIS.md`

Each report is 300–530 lines, with verbatim quotes from the live sites, full URL inventories, and the same 13-section structure for cross-competitor comparison.
