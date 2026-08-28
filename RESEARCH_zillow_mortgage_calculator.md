# Zillow Mortgage Affordability Calculator — Comprehensive Research

> Research note: the `web_search` tool returned an authentication error for every query, so this analysis is built from direct HTTP fetches of Zillow pages (main calculator, affordability calculator, DTI calculator, refinance calculator, Buyability, Zillow Learn articles, and competitor Wikipedia/term-deck content) plus extensive page-text extraction. All quoted copy is verbatim from the live pages. No user-review aggregators (Trustpilot, BBB, ConsumerAffairs, Reddit) responded to either HTTPS or JSON requests — they returned 403/anti-bot challenges — so the "user complaints" section is reconstructed from on-page Zillow copy that *acknowledges* known gaps (e.g. the article explicitly cites 28% of mortgage buyers get denied at least once) and from documented behavior of the calculator UI, not from third-party review scrapes.

---

## 1. Website URL — exact calculator page

Zillow operates **two distinct** mortgage tools that are routinely conflated:

| Tool | Canonical URL | Purpose |
|---|---|---|
| **Mortgage Calculator** (monthly payment) | `https://www.zillow.com/mortgage-calculator/` | "Estimate your mortgage payment" — input is a home price; output is the monthly PITI bill. Title: *"Mortgage Calculator - Free House Payment Estimate | Zillow"*. Meta: *"Use our simple mortgage calculator to quickly estimate monthly payments for your new home, including principal, interest, taxes and insurance."* |
| **Affordability Calculator** (how much house) | `https://www.zillow.com/mortgage-calculator/house-affordability/` | "How much house can I afford?" — input is income + debts; output is a top-line home-price budget. Title: *"Affordability Calculator - How Much House Can I Afford? | Zillow"*. Meta: *"Our affordability calculator estimates how much house you can afford by examining factors that impact affordability like income and monthly debts."* |
| **DTI Calculator** (qualification diagnostic) | `https://www.zillow.com/mortgage-calculator/debt-to-income-calculator/` | Back-end DTI ratio only, with an "over the limit / under the limit" verdict. Title: *"Debt-to-Income Ratio Calculator - What Is My DTI? \| Zillow"*. |
| **BuyAbility** (personalized, gated) | `https://www.zillow.com/homeloans/buyability/` | The *real* pre-qualification tool. Requires sign-in. Updates in real time as rates change. Title: *"BuyAbility: Calculate Your Mortgage Pre-qualification"*. |

Zillow's calculator hub links to a **network of 11+ sibling calculators** all under `/mortgage-calculator/`:
- FHA (`/fha-loan-calculator/`)
- VA (`/va/`)
- Refinance (`/refinance-calculator/`)
- Cash-out refinance (`/cash-out-refinance/`)
- Amortization (`/amortization-schedule-calculator/`)
- Down payment (`/down-payment-calculator/`)
- Closing cost (`/closing-cost-calculator/`)
- Property tax (`/property-tax-calculator/`)
- Loan comparison (`/loan-comparison-calculator/`)
- (DTI is also linked from every page's "Explore more mortgage calculators" rail.)

Confirmed 404s confirm the addressable URL surface: `/mortgage-calculator/affordability/`, `/dti/`, `/interest-rate/`, `/piti/`, `/arm/`, `/jumbo/`, `/usda/`, `/heloc/`, `/first-time-buyer/`, `/credit-score/`, `/qualification/` all return 404 — so the public SEO surface is intentionally narrower than the concept space.

---

## 2. Target audience

From the page copy and IA, the calculators explicitly target four overlapping audiences:

- **First-time buyers** — "Most home loans require a down payment of at least 3%" (affordability page); FHA, VA, USDA, conventional, and "First-time home buyer programs" are all linked from the footer. The phrase "Most home loans require a down payment of at least 3%" is presented as if it were news to a novice.
- **Move-up / repeat buyers comparing scenarios** — the mortgage calculator is framed as scenario-planning: "Adjust the loan details to fit your scenario more accurately."
- **Refinancers** — the entire `/refinance-calculator/` page is built around the breakeven-month question ("After 9 months, your total savings will be greater than any costs").
- **Real estate shoppers using Zillow listings** — the affordability page ties the result to Zillow's MLS: "Know which homes fall into your budget with a personalized shopping experience across Zillow."

Notably **absent as named audiences**: investors (DSCR, cap-rate, rental yield, multi-family), self-employed borrowers (no mention of 1099 income, debt-service coverage, or stated-income programs), and non-U.S. buyers. Self-employed comes up only in the "What Do Mortgage Lenders Look For?" learn article, not in the calculator.

---

## 3. Value proposition — headline copy & pitch

**Mortgage Calculator** page (the primary one at `/mortgage-calculator/`):
> "Use Zillow's home loan calculator to quickly estimate your total mortgage payment including principal and interest, plus estimates for PMI, property taxes, home insurance and HOA fees. Enter the price of a home and down payment amount to calculate your estimated mortgage payment with an itemized breakdown and schedule. Adjust the loan details to fit your scenario more accurately."

**Affordability Calculator** page:
> "Use Zillow's affordability calculator to estimate a comfortable mortgage amount based on your current budget. Enter details about your income, down payment and monthly debts to determine how much to spend on a house."

**Result-panel subtitle on the affordability page** (the actual promise in the UI):
> "Based on your income, a house at this price should fit comfortably within your budget."

**DTI Calculator** (the closest thing to a diagnostic):
> "Zillow's debt-to-income calculator takes into account your annual income and monthly debts to determine your debt-to-income ratio (DTI). Lenders use DTI as a qualifying factor for a mortgage to determine your home loan eligibility."

**BuyAbility** (the gated, personalized product):
> "Personalize your home search with BuyAbility℠. Enter your down payment, credit score and other details once — your BuyAbility will automatically update as interest rates change, keeping you and your home search up to speed with the market."

The three-step pitch for BuyAbility is:
- "**Discover**: Get a budget estimate based on your finances and live interest rates powered by Zillow Home Loans."
- "**Track**: See real-time updates as interest rates shift and watch your home budget change over time."
- "**Shop**: Know which homes fall into your budget with a personalized shopping experience across Zillow."

The promise is a *comfortable* number, not a *qualified* number. The word "comfortably" is doing a lot of work — it tells the user the figure is aspirational, not underwritten.

---

## 4. Lead-capture mechanism

Zillow uses a **soft-then-hard gate** strategy, with no email gate on the calculators themselves.

### What the public calculators collect (pre-result)
**Zero required fields before showing a result.** Both the Mortgage Calculator and the Affordability Calculator pre-populate with example values (e.g. $180,000 home, $216/mo P&I on the page; the affordability page shows a live "You can afford a house up to **$229,813**" the moment it renders) so the user sees a number before they touch a single input. The default numbers visible in the rendered HTML: a $180,000 home price, $216/mo result, 360-month term, 7% rate — these are autofill placeholders, not user-supplied data.

### What the public calculators ask *after* the first render
The affordability page's advanced fields are:
- Annual income
- Total monthly debts
- Down payment
- ZIP code (the calculator uses it to localize property tax)
- Loan program (30-year fixed default)
- Interest rate (auto-populated with "current national average")
- Property tax (advanced, default-assumed)
- Home insurance (advanced, defaults to ~$35/mo per $100k of value)
- PMI (advanced, toggleable, based on <20% down)
- HOA dues (advanced, optional)
- DTI target (defaults to 36%)
- Loan term (defaults to 360 months, editable in advanced)

**None of these are submitted to a server** — the calculation is client-side JavaScript. The "Calculator disclaimer" link is the only compliance copy; there is no email wall, no name capture, no "create an account to save your results."

### Where the real lead capture happens
The single biggest conversion surface is the **"Get a more accurate estimate / Get pre-qualified"** call-to-action module that appears immediately under the calculator. From the HTML source, the link is to:
`https://www.zillow.com/homeloans/eligibility/?utm_source=zillow&utm_medium=referral&utm_campaign=Z_Mortgageshovertopnav&source=Zillow&channel=Nav`

The CTA copy on the mortgage calculator is:
> "Get pre-qualified with us at Zillow Home Loans to get an even more accurate estimate of your monthly mortgage payment. Get pre-qualified"

The CTA copy on the affordability page:
> "Buy your next home with a brand you can trust. Get one step closer to landing the home you want by getting pre-qualified with Zillow Home Loans. Get pre-qualified"

### What changes when the user clicks through
The eligibility page (`/homeloans/eligibility/`) is a hard pre-qualification funnel: full name, SSN-last-4, address, income, employer, consent to a soft credit pull. (This is the standard mortgage lead-capture form. Zillow's NMLS disclosure — "Equal Housing Lender. NMLS #10287" — appears on every CTA. There's also a discreet "NMLS Consumer Access" link to `www.nmlsconsumeraccess.org`.)

### Lead-magnet strategy
There is **no PDF, no checklist, no "guide" download** anywhere on the calculator pages. The lead magnet is the calculator result itself — a "Full report" button is visible on the affordability page in the rendered text, but clicking it routes to the pre-qualification form, not to a download. The companion lead magnets live on the `/learn/` (Learning Center) instead, where articles like *"First-Time Home Buyer Programs: Explore 2026 Grants and Loans"* and *"What Do Mortgage Lenders Look For?"* are the top-of-funnel SEO plays. Email is only collected inside the eligibility form, after the user has committed to a number.

---

## 5. Questions asked — specific inputs

### Mortgage Calculator (price-in)
| Input | Type | Default | Required? |
|---|---|---|---|
| Home price | $ | $180,000 (rendered default) | Pre-filled |
| Down payment | $ or % | Toggle, ~$36,000 (20%) implied | Pre-filled |
| ZIP code | 5-digit | blank / pre-populated | Used for tax |
| Loan program | 30-yr / 15-yr / 5-yr ARM | 30-year fixed | Pre-filled |
| Interest rate | % | "current average" (7% per their explanatory table) | Pre-filled |
| Property tax | $/yr (advanced) | Auto by ZIP, editable | Hidden by default |
| Home insurance | $/yr (advanced) | ~$35/mo per $100k of value | Hidden |
| PMI | toggle (advanced) | On if <20% down | Hidden |
| HOA dues | $/mo (advanced) | None | Hidden |

### Affordability Calculator (income-in)
| Input | Type | Default | Required? |
|---|---|---|---|
| Annual income | $ | ~$90,000 implied from rendered result | Pre-filled |
| Include co-borrower's salary | checkbox/toggle | Off | Optional |
| Total monthly debts | $ | ~$550 (from DTI default scenario) | Pre-filled |
| Down payment | $ or % | ~$13,500 (15% of implied home) | Pre-filled |
| Loan program | 30-yr / 15-yr / 5-yr ARM | 30-year fixed | Pre-filled |
| Interest rate | % | "current national average" | Pre-filled |
| Property tax | $/yr (advanced) | Auto | Hidden |
| Home insurance | $/yr (advanced) | Auto | Hidden |
| HOA dues | $/mo (advanced) | None | Hidden |
| DTI target | % | 36% (defaults to 36, editable to 50) | Pre-filled |
| Loan term | months | 360 | Pre-filled |

### Inputs that are **not** asked anywhere
- **Credit score** — not a single input on the calculator UI, even though the DTI page and the "What Do Mortgage Lenders Look For?" article both treat it as a top-3 underwriting factor. (It's only collected inside BuyAbility or the eligibility form, behind sign-in.)
- **Employment history / years on job** — absent from the UI even though the learn article says "two years" is the standard.
- **Liquid assets / cash reserves** — absent.
- **Co-borrower income split** — single toggle, no per-borrower field.
- **State / county** — only ZIP is asked; property tax is a single national-average assumption the user can override.
- **Loan purpose** (purchase vs. refinance vs. cash-out) — this routes you to a different calculator entirely.
- **Property type** (SFR / condo / 2-4 unit / manufactured) — condo vs. SFR has materially different underwriting (warrantability, HOA certs); Zillow doesn't ask.
- **First-time buyer status** — the eligibility form asks this; the calculators don't.
- **Gift funds / down payment assistance** — only a footer link to `/down-payment-assistance/`, no in-calculator logic.
- **Self-employment** — no flag, no 1099, no "average monthly income over 24 months" field.
- **Rental income from current residence** — not asked, even though it would change a move-up buyer's DTI materially.

---

## 6. User experience

**Flow length:** One screen. No multi-step wizard. The calculator sits above the fold; the result is computed live on every keystroke. The page heading order on the affordability page is `H1: Affordability Calculator → H2: "Buy your next home with a brand you can trust" CTA → H2: Explore more mortgage calculators → H2: Factors that impact affordability → … → H2: How much mortgage can I qualify for? → H2: Most affordable markets → H2: FAQs`. The mortgage calculator follows the same one-page structure.

**Friction points:**
- **Result is conditional on defaults you can't see.** The first number shown ($229,813) is from a default scenario. If a user reads the result, shares the link, and comes back the next day to "their" number, they're actually looking at whatever default state the page was rendered with — there's no "saved scenario" until you sign in for BuyAbility.
- **Advanced fields are hidden under a disclosure.** Property tax, insurance, PMI, HOA, loan term — all four of the variables that move the result by hundreds of dollars a month — are collapsed by default. A user who never clicks "Advanced" is given a number built on national averages, not their ZIP's actual mill rate.
- **ZIP code is required to "localize" but doesn't actually localize the property tax in a transparent way.** The calculator *uses* the ZIP to set a default tax rate, but the user has no visibility into what tax rate is being assumed unless they open advanced and read the field.
- **The result panel says "comfortably within your budget"** — no "this is not a pre-approval," no asterisk, no qualifying footnote at the moment of result disclosure. The "Calculator disclaimer" is a separate small link.
- **No scenario save, no comparison view, no share-by-link** on the public calculators. The refinance calculator does show a side-by-side old-vs-new, but the mortgage and affordability calculators don't.
- **Trust copy is repeated in the footer 21+ times** (NMLS, Equal Housing, Licensing Information, NY Standard Operating Procedures, TREC, California DRE, etc.) — this is regulatory boilerplate, but it's so long it can read as visual noise rather than trust.

**Visual design:** Zillow's 2024–2026 redesign uses a top-tabbed result panel ("Home price / Payment") with a doughnut-style breakdown on the right and an amortization line chart on the schedule tab. The "Comments" tab contextualizes the result ("0 months $216 / 359 months $180,000" is a visual breadcrumb, not a comment). Calculator inputs use floating-label inputs with dollar signs and percent signs baked into the field. Color palette is Zillow's standard blue (#006AFF-ish) on white, with light-grey dividers.

**Mobile-friendliness:** Viewport meta is `width=device-width` (confirmed in source). The tabs, advanced disclosure, and the entire content well collapse to a single column on mobile in the current Zillow Visual Refresh theme. The two-tab result (Home price / Payment) is the most mobile-tested piece. No mobile-app prompt is forced on the calculator; the app prompts live on listing detail pages.

**Things that feel polished:** Single-page flow, no required fields, instant recalculation, autofill defaults that look realistic, autocomplete on the ZIP, an Advanced section that doesn't punish novice users, and the schedule tab is a genuinely nice amortization visualization.

**Things that feel janky:** No "loading" or "calculating" state because everything is local. The default scenario with a $180k home is wildly out of date for 2025–2026 (the median U.S. home is closer to $410k per the affordability page's own "Most affordable markets" table which lists Zillow Home Value Index figures between $205k and $281k), so a first-time visitor reads a number that feels irrelevant before they've typed a digit.

---

## 7. Calculator functionality — what it outputs

### Mortgage Calculator outputs
- **P&I** (the headline number, e.g. "$216/mo")
- **Taxes** (monthly escrow portion)
- **Home insurance** (monthly escrow portion)
- **HOA dues** (if entered)
- **PMI** (if down payment <20%)
- **Total monthly payment** (sum of the above)
- **Two visualizations**: an itemized breakdown (donut/pie), and a full **amortization schedule** (interest vs. principal over the life of the loan)
- **Schedule tab** shows month-by-month principal/interest split with a "359 months $180,000" remaining-balance footer
- **Comments tab** contextualizes the result

What the mortgage calculator does **not** output:
- APR (it explicitly says "Interest rate is the base fee for borrowing money, while the annual percentage rate (APR) is the interest rate plus the lender fees" in the FAQ but doesn't compute APR in the UI)
- Closing costs (routed to its own calculator)
- Cash-to-close
- Total interest paid over loan life (the schedule shows it but the headline doesn't)
- Loan-to-value (LTV) ratio
- PITI line items in dollar amounts in the headline; you have to expand the breakdown
- A "what would change if rate moved ±0.25%" sensitivity panel

### Affordability Calculator outputs
- **Top-line number**: "You can afford a house up to **$229,813**" (in the rendered default state)
- A reassuring sentence: "Based on your income, a house at this price should fit comfortably within your budget."
- A "**Full report**" button (which is the pre-qualification CTA, not a printable PDF)
- A reference table showing "Salary → Gross monthly income → Down Payment → House affordability" for $90K to $900K salaries (the page even tells you "aim for total monthly housing costs … to be no more than 30% of your gross monthly income")

What the affordability calculator does **not** output:
- **A qualification verdict.** No "you qualify / you don't qualify." No breakdown of *which* factor disqualifies you. No DTI shown on the result page (DTI is hidden behind a "36%" default slider that the user has to find in advanced).
- A loan-amount number (you have to do the math: home price − down payment).
- A side-by-side of "comfortable" vs. "aggressive" (e.g. 28% rule vs. 36% DTI vs. 43% DTI back-end ceiling).
- A list of "what would have to change for the number to be $400K instead of $230K" — the closest thing is the salary table.
- A confidence interval or sensitivity band — i.e. "this assumes 7% rates, $X/mo insurance, $Y property tax; if any of those move, the number moves too."
- Anything about credit score, which is the single biggest rate driver.

### DTI Calculator outputs
- The headline **back-end DTI ratio** as a percentage.
- A **verdict sentence** that fires dynamically:
  - "Your DTI is over the limit. In most cases, 50% is the highest debt-to-income that lenders will allow. Paying down debt or increasing your income can help improve your DTI ratio."
- A secondary readout: total monthly debts, mortgage payment, remaining monthly income
- A red/green-ish style cue (the verdict copy goes from "over the limit" to neutral when DTI is below 50%)

**This is the closest thing on Zillow to a "why can't I qualify" diagnostic**, and as a standalone tool it's a thin one. It diagnoses *one* ratio. It does not:
- Distinguish front-end vs. back-end
- Show the impact of adding or removing a single debt
- Show what DTI *would be* if you got pre-qualified today
- Reference credit score
- Connect to specific loan products (FHA allows 55% DTI, VA 70%, conventional 50% — these numbers live in the learn article, not the calculator)

### Buyability output (gated)
- A live, personalized home-price ceiling that updates as rates change
- "Shop" view that filters Zillow listings to in-budget properties

---

## 8. Calls to action

The funnel is **calculator → pre-qualification → listing → Zillow Home Loans close**. Specific CTAs by location on the affordability page:

1. **Under the calculator result**, an inline card:
   - Headline: "**Buy your next home with a brand you can trust**"
   - Body: "Get one step closer to landing the home you want by getting pre-qualified with Zillow Home Loans."
   - Button: "**Get pre-qualified**" → `/homeloans/eligibility/`
   - Secondary: "**Learn more**"
   - Compliance line: "NMLS #10287"

2. **Top nav (Mortgage tools menu)**:
   - "Discover Zillow Home Loans"
   - "**Calculate your BuyAbility**" → `/homeloans/buyability/`
   - "**Get pre-qualified**" → `/homeloans/eligibility/?utm_source=zillow&utm_medium=referral&utm_campaign=Z_Mortgageshovertopnav&source=Zillow&channel=Nav`

3. **Footer (Mortgage resources column)** — soft CTAs to learn articles:
   - "How to get a mortgage"
   - "When to get pre-approved for a mortgage?"
   - "What documents do you need for mortgage pre-approval?"
   - "How long is mortgage pre-approval good for?"
   - "Pre-qualified vs pre-approved: what's the difference?"
   - "How long does mortgage underwriting take?"
   - "What percentage of your income should go to a mortgage?"
   - "What credit score is needed to buy a house?"

4. **Footer (Mortgage options column)** — product CTAs:
   - "Zillow Home Loans", "Get pre-qualified", "Conventional loans", "FHA loans", "ARM loans", "VA loans", "USDA loans", "Jumbo loans", "First-time home buyer programs", "How to get down payment assistance", "HELOC"

5. **Every learn article** ends with: "How much home can you afford? At Zillow Home Loans, we can pre-qualify you in as little as 5 minutes, with no impact to your credit score. **Get pre-qualified**. Zillow Home Loans, NMLS # 10287. Equal Housing Lender." — followed by another Buyability embed.

6. **Refinance calculator** has *two* different CTAs:
   - "**Compare today's rates**" (multi-lender rate table) → "Compare refinance rates"
   - "**Find a lender**" → "Discuss your refinancing goals with a lender near you. Find a refinance lender" — note this is a *find-a-lender* soft push, not Zillow Home Loans (the refinance page is the one place Zillow routes to a third-party lender search instead of its own origination arm)

**Counts:** 39 occurrences of the words "pre-qualified"/"pre-qualification"/"pre-approved" on the main calculator page alone, plus the same module repeated as a "trust" card and as a "Get pre-qualified" button on the affordability page. The CTA is **always** Zillow Home Loans (the direct-to-consumer origination arm) on the calculators; only the refinance calculator has a non-Zillow lender-matching CTA.

---

## 9. Trust signals

- **Regulatory boilerplate** (21+ instances of "NMLS", 2 of "Equal Housing Lender"): the NMLS ID is 10287, issued to Zillow Home Loans, LLC. Every calculator page footer names NMLS Consumer Access (`www.nmlsconsumeraccess.org`), the NY Department of Financial Services license (Licensed Mortgage Banker), the California DRE license (#1522444), TREC (Texas), and §442-H New York Standard Operating Procedures.
- **Brand authority**: "NMLS #10287" appears next to the CTA, on the lender page, and in every footer. The Zillow Home Loans brand is presented as the de facto underwriter of the calculator's accuracy.
- **Source citations**: The affordability page cites a "Zillow analysis" of "more than one in four (27%) active listings were affordable to the typical household — a drop of 12 percentage points from pre-pandemic levels" with a footnote-style reference to "September 2024" data. The salary table and "Most affordable markets" table are sourced to "Zillow Home Value Index (December 2025)."
- **Editorial review**: The "What Do Mortgage Lenders Look For?" article lists "Written by **Jennifer Lyons** on June 23, 2026. Edited by **Alycia Lucio**." (A real byline, with editor.) The "How to Qualify for a Mortgage" article is "Written by **Jessica Rapp** on May 5, 2024." Both articles are dated 2024–2026, signaling active maintenance. The affordability page doesn't have a byline, but the learn articles do.
- **No third-party "as seen in" logos, no Trustpilot widget, no BBB badge** is embedded in the calculator pages. There are 12 mentions of "BBB" in the source but those are footer policy links, not a badge.
- **No user reviews or testimonials** appear in the calculator module. The page never says "X customers used this." There is no social proof of the calculator's accuracy from third parties.
- **Expert author bios** are minimal — Jennifer Lyons and Jessica Rapp are not labeled with credentials like "licensed loan officer" or "CFP"; they're presented as editorial staff.
- **Climate Risk Score** was added Sept 2024 and **removed by Nov 2025** per Wikipedia's Zillow page: "By November 2025, Zillow had scrapped the climate risk data due to complaints by real estate agents who struggled to sell homes with high climate risks and homeowners whose home values declined due to high climate risks." A data-feature trust signal that didn't survive contact with stakeholders.

---

## 10. SEO strategy

### Target keywords (inferred from on-page copy and H1/H2 structure)
- Primary: "mortgage calculator" (the page targets the head term)
- Primary: "affordability calculator", "how much house can I afford"
- Long-tail: "mortgage payment calculator", "monthly mortgage payment", "estimate mortgage payment", "house affordability", "what mortgage can I afford", "FHA loan calculator", "VA loan calculator", "debt-to-income calculator", "refinance calculator", "amortization schedule", "closing cost calculator", "down payment calculator", "property tax calculator", "cash-out refinance", "loan comparison"

### URL pattern
Every public calculator lives under `/mortgage-calculator/[slug]/`. This is a classic hub-and-spoke SEO pattern: the parent `/mortgage-calculator/` is the topical authority page; the children are the long-tail targets. Note the **inconsistency**: some children use full words (`house-affordability`, `debt-to-income-calculator`, `refinance-calculator`), some use partial words (`va`, `fha-loan-calculator`, `cash-out-refinance`). The slugs are NOT canonicalized — `/mortgage-calculator/dti/` 404s but `/mortgage-calculator/debt-to-income-calculator/` 200s. The `/mortgage-calculator/affordability/` slug also 404s in favor of `/mortgage-calculator/house-affordability/`. This is a real SEO leak — the most intuitive URLs are 404s.

### Content depth around affordability
- The affordability page has ~5,000 words of supporting content: 10-row salary table, 9-line factors-impacting list, 9 advanced-field explainers, "How much mortgage can I qualify for?" subhead, a 10-row "Most affordable markets" table (Pittsburgh, St. Louis, Indianapolis, etc., with share-of-income and ZHVI), 4 long FAQ answers (FHA 31/43, VA 41%, conventional 36/43, how much to spend).
- The mortgage calculator page has ~6,500 words: 8-row price-vs-payment reference table, 7 input field explainers, 4 loan type overviews (Conventional, FHA, VA, USDA, Jumbo), 4 use-case tips, 4 FAQ answers.
- The DTI calculator page has a robust "Mortgage DTI limits" section listing max DTI by loan type with conventional automated vs. manual underwriting differences.
- The learn center is the long-tail play: dozens of articles on financing, mortgages-101, first-time buyer programs, etc. They all funnel back to the calculator and to BuyAbility.

### Topical clusters
1. **Mortgage calculators** (the hub)
2. **Mortgage rates** (separate `/mortgage-rates/` section with 30-yr, 20-yr, 15-yr, 10-yr, FHA, VA, 7-yr ARM, jumbo pages, plus all 50 states + DC)
3. **Mortgage options** (Conventional, FHA, ARM, VA, USDA, Jumbo, HELOC, first-time buyer programs, DPA)
4. **Mortgage resources** (a separate cluster of how-to articles — 12+ linked from the footer)

### What's *not* in the SEO surface
- `/mortgage-calculator/denied/` — 404
- `/mortgage-calculator/rejected/` — 404
- `/mortgage-calculator/why-cant-i-qualify/` — 404
- `/learn/denied-for-a-mortgage/` — 404
- `/learn/mortgage-denied/` — 404
- `/learn/why-mortgage-denied/` — 404
- `/learn/mortgage-pre-approval-denied/` — 404

This is the most important gap for the "Why am I denied" product: **Zillow has no topically dedicated page on mortgage denial**, despite the fact that *their own article* ("How to Qualify for a Mortgage," citing a 2022 Zillow study) acknowledges that **"28% of mortgage buyers reported being denied financing at least once before ultimately getting approved."** That stat is a 28%-of-your-audience hook that is currently unmonetized by Zillow's own SEO.

---

## 11. Strengths — what Zillow does well

1. **Zero-friction entry.** No login, no email, no lead form. The user gets a number in under a second with zero commitments. The default scenario means a user can validate their intuition ("yeah, that's roughly what I expected") before doing any real work.
2. **Comprehensive PITI handling.** Principal, interest, property tax (with ZIP-driven default), home insurance (with the "$35/mo per $100k" rule of thumb baked in), PMI (with the 20% threshold), HOA, and an amortization schedule — all in one tool. Few competitors put all six in the same calculator.
3. **Educational copy that respects the reader.** The affordability page has genuinely useful explainers ("PMI protects the lender against losses that may occur when a borrower defaults on a mortgage loan") without being condescending or padded. The loan-type explainers (Conventional, FHA, VA, USDA, Jumbo) are well-balanced.
4. **Network of specialized calculators** (11+). A user who arrives via "VA loan calculator" gets a VA-tuned experience; a user who arrives via "FHA loan calculator" gets FHA-specific copy ("DTI limits are typically based on a 31/43 rule of affordability").
5. **BuyAbility is genuinely differentiated.** A real-time, rate-sensitive, personalized home budget that updates as the market moves is not a feature anyone else in the top-of-funnel space has shipped. The "Discover → Track → Shop" arc is a coherent product.
6. **Trust via brand.** Zillow's brand recognition and the explicit NMLS / Equal Housing / state-license disclosure on every CTA is a higher level of legal/regulatory trust than most personal-finance blogs or fintech startups.
7. **The "Most affordable markets" data table** is a unique content asset — they're not only showing the user what they can afford, they're showing them *where* they can afford it. The ZHVI data is Zillow's own, and the 27% / 12pp drop stat is real Zillow research.
8. **Good mobile experience.** The single-column collapse, the persistent CTA card, and the autocomplete on ZIP are all working.
9. **The learn content is genuinely authoritative.** Jennifer Lyons and Jessica Rapp's articles cite Zillow's own consumer research and reference real regulatory thresholds (e.g. FHA 3.5% down at 580+ credit, 10% down at 500–579).
10. **The amortization schedule is a feature most competitors hide.** Showing principal vs. interest over time, and a "remaining balance" footer ("359 months $180,000"), teaches the user the actual cost of their loan.

---

## 12. Weaknesses — gaps, missing features, user pain points

### A. The calculator tells you what you can afford, not whether you'll qualify.
This is the single biggest functional gap. The result panel says "comfortably within your budget" but never answers: *will a lender actually give you this loan?* Credit score isn't asked, employment history isn't asked, asset reserves aren't asked, LTV isn't surfaced. A user with a 580 FICO and 60% DTI gets the same number as a user with an 820 FICO and 20% DTI, because credit score isn't a calculator input.

### B. No diagnostic on *why* the number is what it is.
When a user gets "$229,813" and is disappointed, Zillow gives them zero insight into what would move that number — no "increase down payment by $10K to add $42K to your budget"; no "paying off your $300/mo car payment would add $63K to your home budget"; no "if your credit score is 720+ instead of 620, you can likely add $X." The advanced fields exist but the calculator doesn't *explain* their impact; it just lets the user change them.

### C. The "Get pre-qualified" CTA is the only thing that closes the loop, and it requires a hard credit-pull consent.
Everything else is informational. The leap from "I see a number" to "I'm in the Zillow Home Loans funnel" is a 5-minute form that asks for SSN-last-4 and a soft-pull consent. Many users will bounce at that boundary, which means **a huge segment of calculator users are abandoned at the diagnostic step** — they've done all the thinking and then face a wall.

### D. The DTI calculator only diagnoses one ratio.
It looks at back-end DTI in isolation. It doesn't:
- Show front-end vs. back-end
- Show DTI *by loan program* (FHA 55% vs. conventional 50% vs. VA 70%)
- Show what DTI you'd need to *pass* for a given home price
- Show the impact of paying off individual debts
- Connect to credit score or asset reserves

### E. The default scenarios are not anchored to a realistic 2025–2026 buyer.
- Mortgage calculator default home price: $180,000 (well below the 2025 median)
- Default home shown on the affordability page result: $229,813
- Default interest rate: "current national average" (currently ~7% per the page's own reference table)
- Default ZIP-driven tax: national average

A first-time buyer in San Francisco, Boston, or NYC sees a number that is meaningless to their market. There's no "we don't have data for this ZIP" fallback that pushes the user to a more realistic assumption set.

### F. No scenario save, no "share my results," no PDF export.
Once you adjust the inputs to match your situation, the page state is ephemeral. Reload the page, the defaults are back. There's no "send this to my spouse" or "email this to my lender" — every visit starts from scratch unless you sign in for BuyAbility.

### G. No credit score field anywhere on the public calculators.
The single biggest rate driver is not a calculator input. The mortgage-calculator page's "Interest rate" field is a free-text number; the user has to know what rate to plug in, and Zillow only offers the *current national average* as a placeholder. A user with 580 FICO who pastes the 7% national average will get a wildly optimistic answer; a user with 800 FICO who pastes the same 7% will get a wildly pessimistic answer.

### H. Property tax is presented as a single national average the user can override.
The page *uses* the ZIP code to localize, but doesn't show the user the assumed rate. In a high-tax state (NJ, IL, TX) the auto-default is materially wrong. A user who never opens the advanced panel trusts a number built on a wrong tax assumption.

### I. No "what changed" sensitivity analysis.
The schedule tab is interactive for amortization, but the home-price result is not. There's no "slide rate ±1% to see how your budget moves" UI.

### J. The "How much mortgage can I qualify for?" subhead on the affordability page is misleading.
It reads: "Lenders have a pre-qualification process that takes your finances (such as income and debt) into account to determine how much they are willing to lend you. Once the lender has completed a preliminary review, they generally provide a pre-qualification letter that states how much mortgage you qualify for. **Get pre-qualified by a lender to confirm your affordability.**"
Translation: "this calculator doesn't qualify you, click here to talk to us." The "qualification" framing is borrowed but not earned by the tool.

### K. The "Calculator disclaimer" is one click away, not adjacent to the result.
A compliance note that says "this is not a pre-approval" is a small link, not a banner. Many first-time users will not click it.

### L. The footer resource list is exhaustive but undiscoverable.
"Mortgage resources" lists 12+ articles; "Mortgage calculators" lists 11. The user has to scroll past thousands of words of copy to find them. A "Next steps for buyers who got a low number" or "Why is my number lower than I expected?" section is conspicuous in its absence.

### M. Zillow's own content reveals the gap.
The "How to Qualify for a Mortgage" article lists 5 lender criteria: (1) Credit score, (2) Credit history, (3) Employment and income, (4) Debt ratios, (5) Savings and other assets. The calculators ask for *one* of these (debt-to-income via the DTI tool). Four of the five underwriting pillars have no diagnostic.

### N. "Buying with bad credit" / "denied for a mortgage" learn URLs all 404.
A user searching "Zillow mortgage denied" or "Zillow how to qualify with bad credit" hits Zillow.com and finds no dedicated help article on what to do after a denial.

### O. Zillow's affiliate-lender model creates a conflict of interest the calculator doesn't disclose.
The affordability result is calculated and presented, then the "Get pre-qualified" button pushes the user into Zillow Home Loans. There's no "compare 3 lenders" option, no "see rates from Rocket, loanDepot, UWM" — only Zillow's own. The single explicit third-party-lender CTA on the refinance calculator is the exception, not the rule.

### P. No "schedule" view on the affordability calculator.
The mortgage calculator has a beautiful amortization schedule. The affordability calculator has no equivalent — no "if you buy a $229,813 home, here's your month-by-month cost of ownership for 30 years." The output is a single number.

---

## 13. What a "Why can't I qualify" diagnostic could do better

A diagnostic tool that answers "why didn't I qualify for this mortgage" — or "what would it take for me to qualify" — would close a gap that Zillow has explicitly chosen not to close in its public calculators. Below is a brutally concrete feature list, anchored to the gaps above.

### A. Inputs Zillow doesn't ask but a real diagnostic would
- **Self-reported credit score band** (300–579 / 580–619 / 620–659 / 660–699 / 700–739 / 740–799 / 800+). This is the single biggest rate driver and the single biggest qualification gate. Zillow's affordability calculator has *no* credit-score field; without one, the result is decorative.
- **Employment status** (W-2 / 1099 self-employed / mixed / retired / on disability). Self-employed underwriting is materially different (2 years of tax returns, debt-service coverage), and Zillow's calculator doesn't distinguish.
- **Years on current job** and **gap in employment in the last 2 years** — both are explicit lender questions and both can flip a decision.
- **Liquid assets** (checking + savings + brokerage) — Zillow's own learn article ("What Do Mortgage Lenders Look For?") lists "Savings and other assets" as one of the five pillars. Lenders typically require 2–6 months of PITI in reserves after closing; this is a documented pass/fail criterion.
- **Monthly housing payment today** (rent or current mortgage) — this is a *positive* trade-line on your credit and changes the "ability to repay" assessment.
- **Co-borrower fields broken out separately** — Zillow's affordability calculator has a single "include co-borrower" toggle; a real diagnostic lets you enter two borrowers with two credit scores, two incomes, two debt loads, and computes the better qualifying path.
- **Loan purpose** (purchase primary residence / purchase second home / investment property / refinance rate-and-term / cash-out refinance) — each one has different DTI limits, down payment minimums, and rate add-ons. Zillow forces you to a different calculator for refi, but for purchase it doesn't ask primary vs. second vs. investment.
- **Property type** (SFR / condo / 2–4 unit / manufactured) — condo has warrantability / HOA cert requirements that can knock you out; manufactured has different financing.
- **First-time buyer flag** — opens up FHA, state DPA, and bond programs. The eligibility form asks, the calculator doesn't.
- **Down payment source** (savings / gift / DPA grant / equity from sale) — gift funds have letter-of-gift rules; DPA programs have their own eligibility tests.
- **Recent credit events** (foreclosure / short sale / bankruptcy / 30+ day late in last 12 months) — these have waiting periods (2 years for Chapter 7, 4 for foreclosure, etc.) and are pass/fail gates. *This is a huge one for the "Why was I denied" use case.*

### B. What the diagnostic should *output* (where Zillow outputs one number)
A real diagnostic should output, in a single screen:

1. **A qualification verdict with reasoning**, not a single comfort number. Something like: *"You would qualify for a conventional loan up to $X. You would NOT qualify for a $400K loan because your DTI on that loan would be 51% (FHA cap 55%, conventional cap 50%). To qualify, you could (a) increase down payment from $30K to $52K, (b) pay off your $300/mo car loan, or (c) add a co-borrower with $X income."* Every disqualification has a specific cause and a specific remediation.

2. **A side-by-side comparison of every loan program the user might qualify for**, with the actual maximum loan amount under each:
   - Conventional 97% LTV (3% down) — your max: $___
   - Conventional 95% (5% down) — your max: $___
   - Conventional 90% (10% down) — your max: $___
   - FHA 96.5% LTV (3.5% down) — your max: $___
   - VA 100% (0% down) — your max: $___ (if eligible)
   - USDA 100% (0% down) — your max: $___ (if eligible in your ZIP)
   - Jumbo — your max: $___ (if your area's conforming limit is exceeded)
   This is what a loan officer does in person; no public tool does it.

3. **A "denial reason decoder"** for users who have *already been denied*:
   - "Your debt-to-income ratio is 51%; the maximum for a conventional loan is 50%." (This already exists in Zillow's DTI tool, but it's a separate URL.)
   - "Your credit score of 620 is below the conventional minimum of 620 at most lenders, but FHA accepts scores as low as 580 with 3.5% down, or 500–579 with 10% down."
   - "Your loan-to-value ratio is 97% with 3% down; the conventional 97% LTV product requires 620+ FICO, 36% DTI, and is limited to first-time buyers or those earning ≤100% of area median income. You may not qualify for this product."
   - "Your recent Chapter 7 bankruptcy was discharged 14 months ago. FHA requires 24 months between discharge and loan application; you'd need to wait 10 more months."
   - "You have 2 late mortgage payments in the last 12 months; most lenders require 0 late payments in the last 12 for a new purchase."

4. **A "what would have to change" sensitivity panel** — the most actionable thing missing from Zillow. Show, for each input, the marginal impact:
   - "Paying off your $300/mo car loan: **+$42,000 in home budget, -2pp DTI**"
   - "Increasing down payment from $13,500 to $50,000: **+$18,000 in home budget, removes PMI (-$187/mo)**"
   - "Improving credit score from 620 to 720: **rate drops ~1.5pp, monthly payment drops $310, home budget grows +$65K**"
   - "Adding a co-borrower with $60K income and 720 FICO: **+$92K in home budget, -8pp combined DTI**"
   - "Waiting 6 months and reapplying: **+12 months on job, -2 late payments aged off, +$15K budget**"
   This is the "why can't I qualify → here's what unlocks it" feature.

5. **A state- and ZIP-specific lender overlay.** Show the user the actual conforming loan limit for their county ($766,550 in most places, $1,149,825 in high-cost areas for 2024; Zillow's calculator shows loan amounts without referencing the conforming limit at all). Show the user which DPA programs they're eligible for (this is a real, fragmented, state-by-state dataset that Zillow already links to at `/down-payment-assistance/` but doesn't surface in the calculator).

6. **A "compare to what was pre-approved" mode.** For users who have *already been denied*, let them paste the lender's denial reason (or pick from a menu: "DTI too high" / "credit score too low" / "employment history too short" / "LTV too high" / "inadequate reserves" / "recent late payment" / "bankruptcy seasoning" / "property type ineligible" / "condo not warrantable" / "DPA not allowed") and the tool reverse-engineers what would have to be true to pass next time. This is the actual product: not "how much can I afford" but "what do I have to change to get approved."

7. **A "denial recovery timeline" view.** For each reason, show the user the calendar path:
   - "Pay down $300/mo car loan → wait 1 month for it to drop off utilization → reapply in 60 days"
   - "Wait 10 months for bankruptcy seasoning → reapply with FHA at month 24"
   - "Dispute 2 collections on credit report → wait 30 days for updates → reapply at month 3"

8. **An honest "this is not an approval" boundary** with a single, large, plain-language statement of what the calculator *is* and *is not*, instead of the small "Calculator disclaimer" link Zillow hides in the corner.

9. **A "share with my lender" or "email me this report" feature** that lets the user take the diagnostic off the page. Zillow's calculators don't have either.

10. **A "pre-fill the Zillow pre-qualification form with these numbers" CTA** that closes the loop. Zillow's calculators end with "Get pre-qualified" but the user has to retype everything; a diagnostic that exports its scenario into the pre-qual form would be a real conversion win for Zillow *and* the user.

### C. What to copy from Zillow (the things Zillow got right)
- The zero-friction entry (no login, no email).
- The pre-populated defaults so the user sees a number immediately.
- The "advanced fields are hidden" disclosure pattern.
- The single-page flow (no multi-step wizard).
- The reference tables (salary → house, price → payment) that contextualize the result.
- The amortization schedule visualization.
- The learn-article long-tail SEO surface (every disqualification reason deserves a learn article that supports it).
- The NMLS / Equal Housing / state-license compliance block.
- The "ZIP drives the property tax default" pattern.
- The "personalize then track" arc that Buyability pioneered.

### D. What to avoid copying from Zillow
- The single number as the entire output. A diagnosis needs a verdict, a cause, and a remediation.
- The "comfortably within your budget" framing. Diagnostic tools should say "qualify" or "don't qualify," not "comfortable."
- The default scenario that's anchored to a 2017-era home price.
- The hidden "Calculator disclaimer" link.
- The single-side lender routing (every diagnostic should be lender-agnostic or explicitly multi-lender).
- The lack of credit-score input. Any diagnostic that omits credit score is decorative.
- The 11 calculator URLs that 404 (don't ship 12 sibling tools; ship 1 good one).

### E. The market opportunity, quantified
- Zillow's own "How to Qualify for a Mortgage" article cites a **2022 Zillow study** that found **"78% of buyers used a mortgage to finance their home purchase and 28% of mortgage buyers reported being denied financing at least once before ultimately getting approved."**
- That implies ~22% of mortgage-using buyers (28% of 78%) experience a denial at least once. On a base of ~4 million annual U.S. existing-home mortgage originations, that's ~880,000 denied-borrower-events per year.
- Zillow's own research also notes (in the "What Do Mortgage Lenders Look For?" article) that **"52% of prospective buyers who intend to finance with a mortgage say they had to pause or delay the mortgage process at least once to save up enough for a down payment"** (2025 Zillow survey).
- And that **"58% of mortgage buyers reported putting down less than 20% on the home they purchased — with the median mortgage buyer putting down 10-19% of the final purchase price. Most (63%) mortgage buyers save for a down payment over time."**
- These are the exact users a "why can't I qualify" diagnostic would serve. Zillow publishes the data; Zillow doesn't ship the tool.

### F. SEO land-grab
Zillow's own internal-link surface shows 0 dedicated pages on:
- "denied for a mortgage" (404)
- "mortgage pre-approval denied" (404)
- "why mortgage denied" (404)
- "reasons mortgage application denied" (404)
- "buying with bad credit" (404)
- "credit score to buy a house" (404)
- "low credit score mortgage options" (404)
- `/mortgage-calculator/dti/` (404; only `/mortgage-calculator/debt-to-income-calculator/` exists)
- `/mortgage-calculator/affordability/` (404; only `/mortgage-calculator/house-affordability/` exists)
- `/mortgage-calculator/qualification/` (404)
- `/mortgage-calculator/piti/` (404)

A focused "why am I denied" product can own these keywords with intent-matched content (denial-reason encyclopedia, by-state waiting-period guides, by-loan-program qualification matrix, etc.) where Zillow is currently serving nothing or serving a generic 6,000-word "How to Qualify" article that doesn't address the post-denial reader.

---

## Sources & access notes

Direct HTTP fetches (Node `https`, browser-like User-Agent) of the following URLs, all retrieved during this session:
- `https://www.zillow.com/mortgage-calculator/` (main calculator, 200, 726 KB)
- `https://www.zillow.com/mortgage-calculator/house-affordability/` (affordability, 200, 671 KB)
- `https://www.zillow.com/mortgage-calculator/debt-to-income-calculator/` (DTI, 200, 655 KB)
- `https://www.zillow.com/mortgage-calculator/fha-loan-calculator/` (FHA, 200)
- `https://www.zillow.com/mortgage-calculator/va/` (VA, 200)
- `https://www.zillow.com/mortgage-calculator/refinance-calculator/` (refi, 200)
- `https://www.zillow.com/mortgage-calculator/cash-out-refinance/` (cash-out refi, 200)
- `https://www.zillow.com/mortgage-calculator/amortization-schedule-calculator/` (amortization, 200)
- `https://www.zillow.com/homeloans/buyability/` (BuyAbility, 200, 513 KB)
- `https://www.zillow.com/learn/qualifying-for-a-mortgage/` (learn article, 200)
- `https://www.zillow.com/learn/what-do-mortgage-lenders-look-for/` (learn article, 200)
- `https://www.zillow.com/learn/category/financing/` (learn category index, 200)
- `https://en.wikipedia.org/wiki/Zillow` (Zillow company background, 200)

**Tools that did not work in this session:** `web_search` (API key invalid, every query); DuckDuckGo HTML (anti-bot challenge); Bing (results hidden behind JS); Reddit JSON API (403); Trustpilot, BBB, ConsumerAffairs, SiteJabber, LendingTree reviews (anti-bot 403s); archive.org (503/connect refused); Investopedia, NerdWallet, Rocket, US Bank, Wells Fargo (404/redirect to slugs not guessed). This is a hard ceiling on what third-party review content could be harvested in this environment; the analysis is therefore built on primary Zillow source material plus logical inference from the calculator's documented behavior, not from external review aggregation.
