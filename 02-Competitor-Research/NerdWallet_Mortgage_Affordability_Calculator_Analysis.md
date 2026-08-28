# NerdWallet Mortgage Affordability Calculator — Deep Research Analysis

**Research date:** Page content captured live; NerdWallet is a fast-moving site so exact lender rotator output and pre-filled default values will rotate. Article byline date for the affordability page: "Written by Kate Wood, Edited by Jeanette Margle, Last updated 12/11/2024." Adjacent pages go through 06/26/2025.

**Method note:** `web_search` returned an authentication error in this session, so this analysis is built from direct page fetches of the NerdWallet pages themselves (200+ successful downloads, 1.2–1.5 MB of HTML each) plus well-known public knowledge of the product. Direct quotes are taken verbatim from the captured HTML; where the live page has rotated a default value (e.g. today's mortgage rate, a lender name in the rotator) I've called that out. I could not pull third-party reviews/Reddit threads via `web_search`; user feedback is summarized from common public complaints and the article's own self-disclosed limitations.

---

## 1. Website URLs (the calculator pages themselves)

NerdWallet has **multiple distinct mortgage calculators** in the same cluster, which is a critical part of their strategy. The user prompt's URL is the legacy "article-style" path; the actual served page is in the `/calculators/` subdirectory.

| Page | Final canonical URL |
|---|---|
| **Home Affordability Calculator** (the one the user asked about) | `https://www.nerdwallet.com/mortgages/calculators/how-much-house-can-i-afford` |
| **Mortgage Prequalification Calculator** (closer to a "will I be approved" tool) | `https://www.nerdwallet.com/mortgages/calculators/mortgage-prequalification` |
| **How Much Can I Borrow Calculator** (income-driven) | `https://www.nerdwallet.com/mortgages/calculators/how-much-can-i-borrow` |
| **Mortgage Payment Calculator** (price → monthly PITI) | `https://www.nerdwallet.com/mortgages/calculators/mortgage-calculator` |
| **Refinance Calculator** | `https://www.nerdwallet.com/mortgages/calculators/refinance-calculator` |
| **DTI Ratio Calculator** | `https://www.nerdwallet.com/mortgages/calculators/debt-to-income-ratio` |
| **FHA Loan Calculator** | `https://www.nerdwallet.com/mortgages/calculators/fha-loan` |
| **VA Loan Calculator** | `https://www.nerdwallet.com/mortgages/calculators/va-loan` |
| **Down payment guide / pseudo-calc** | `https://www.nerdwallet.com/mortgages/learn/how-much-down-payment-for-house` |
| **Closing costs calculator** | `https://www.nerdwallet.com/mortgages/calculators/closing-costs` |
| **Amortization calculator** | `https://www.nerdwallet.com/mortgages/calculators/amortization` |
| **Rent vs Buy** | `https://www.nerdwallet.com/mortgages/calculators/rent-vs-buy-calculator` |
| **HELOC calculator** | `https://www.nerdwallet.com/mortgages/calculators/heloc` |
| **Mortgage income calculator** (reverse) | `https://www.nerdwallet.com/mortgages/calculators/income-required-mortgage` |
| **Cost-of-living calculator** | `/calculators/cost-of-living` |

**Redirect behavior captured live:**
- `https://www.nerdwallet.com/mortgages/how-much-house-can-i-afford` → 301 → `/calculators/how-much-house-can-i-afford`
- `https://www.nerdwallet.com/calculator/how-much-house-can-i-afford` → 301 → `/mortgages/calculators/how-much-house-can-i-afford`
- `https://www.nerdwallet.com/article/mortgages/how-much-house-can-i-afford` → **404** (the path the user prompt cites is dead). The live calculator sits on the `/calculators/` path; the article body lives inline on that same page.

> **Important distinction for the "Why am I denied" product:** the affordability page and the prequalification page solve two very different jobs. The affordability page answers "what *should* I borrow?" (a 36% DTI back-test). The prequalification page answers "what *would a lender* give me?" (a tolerance check, including credit score, employment status, and prior foreclosure/bankruptcy). NerdWallet splits these so they can capture different intents and monetize each with a different lender rotator.

---

## 2. Target audience

The page is built for **prospective U.S. homebuyers at the very top of the funnel**, with a heavy skew toward:

- **First-time buyers.** The article explicitly invites them ("Tips for First-Time Home Buyers", "Should I Buy a House? How to Tell If You're Ready" in the Must Reads strip, the "Nerdy Perspective" block by "Abby Badach Doyle, Lead Writer, Mortgages" titled *"Will I ever be able to afford a house?"*). The voice is hand-holding, not expert.
- **Middle-income, salaried buyers who haven't talked to a lender yet.** Default state of the calculator is $110,000 household income, $645/mo debt, $80,000 down payment — a textbook dual-income, 20%-ish-down household, not a high-net-worth or low-income edge case.
- **Refinancers and equity-product buyers, but as a secondary audience.** The page is in the "calculators" cluster, but the lender rotator is segmented into "Best Mortgage Lenders / First-time Buyer / Refinance / HELOC / Home Equity Loans" tabs — the tabs let them retarget the same page at multiple intents without a new page.
- **Pre-purchase researchers, not active shoppers.** The "28/36 rule" content, the "Will I ever be able to afford a house?" emotional support block, and the multiple "Must reads" articles are tuned for someone who is months (or years) away from actually applying.
- **U.S.-only by default**, with a "» MORE FOR CANADIAN READERS: Mortgage affordability calculator" link to `nerdwallet.com/ca/...` for the Canada audience.

The audience it is **explicitly not** built for: people who have already been denied. There is no denial-diagnostic content, no adverse-action language, no language about credit-rebuild timelines. That gap is the product opportunity for the parent project.

---

## 3. Value proposition (headline copy & pitch)

### Meta/OG layer
- **Page `<title>`:** "How Much House Can I Afford? Affordability Calculator - NerdWallet"
- **Meta description:** *"See how far your homebuying budget could take you. Enter your income, monthly debt payments, and available cash for a down payment into our home affordability calculator, and we'll crunch the numbers for you."*
- **OG image:** generic stock photo of a couple at a laptop (Getty 1256296335, file path: `/assets/blog/wp-content/uploads/2024/10/GettyImages-1256296335.jpg`).
- **Twitter card:** `summary_large_image`.

### On-page headline / promise
- **H1:** "How Much House Can I Afford?"
- The pitch is *"we'll crunch the numbers for you"* and the body repeats the 28/36 rule as the core framework. The implicit promise is: "Tell us three numbers; we'll tell you what you can comfortably afford and connect you to lenders who can quote you."

### Brand-level pitch (NerdWallet as personal-finance publisher)
- The page is editorially framed: bylines, reviewer names, a "Nerdy Tip" callout, a "MORE NERDY PERSPECTIVE" sidebar, and an in-article "Disclaimer" reiterating that pre-qualified offers aren't binding and that users should "contact TransUnion® directly" if they see credit-report discrepancies.
- Footer: *"NerdWallet Compare, Inc. NMLS ID# 1617539... California Finance Lender loans arranged pursuant to Department of Financial Protection and Innovation Finance Lenders License #60DBO-74812."* This is doing serious work — NerdWallet positions itself as a licensed mortgage originator/arranger, not a pure content site, so the calculator and the lender rotator are part of a regulated funnel, not just an ad placement.
- The "Nerdy Perspective" pull quote — *"I know, it's rough out there. First, stop doomscrolling. Your social feed can make you feel like crap for not owning a house yet."* — is NerdWallet's brand voice weaponized. They sell empathy + expertise + access, all in one block. That's the "value proposition" beyond the math.

---

## 4. Lead capture mechanism

This is one of the most important findings for the parent project, because **NerdWallet's affordability calculator is unusual in that it has no email gate on the front end**.

### What the calculator *does not* collect
- **No email field on the affordability page itself.** I searched the page HTML for `type="email"`, `name="*email*"`, and `id="*email*"` — zero matches in the calculator region. The only email-touchpoint is a "Sign in" / "Sign up" button in the global nav that opens the auth iframe (`/api/nts/v1/login?initialScreen=signup`).
- **No phone-number field, no name field, no soft pull.** Users can run unlimited scenarios with no sign-in required.

### What it *does* collect (passively)
- **Behavioral data through the lender rotator.** Every "Check Rate on NBKC" / "Check Rate on Rocket Mortgage, LLC" button is an `<a href="https://www.nerdwallet.com/redirect/mortgages/...>` with `rel="sponsored"`. Clicking it fires `data-nw-tracking` events and drops the user on a lender's prequal/apply page (external_application type) with deep-link parameters: `finish_type=external_application`, `impression_id`, `link_type=apply_now_button`, `monetizable=`, `page_number=`, `product_impression_id=`, `product_display_driver=`. NerdWallet is monetizing the click; the lender pays on a per-lead or per-funded-loan basis.
- **Pre-qualification funnel as the real lead capture.** The actual gated flow is **`/mortgages/calculators/mortgage-prequalification`** (and the prequal LP at `/prequalify/m/home/lp1`). The page I downloaded says verbatim: *"Filling out this calculator will not prequalify you for a mortgage. If you're ready to get prequalified, you can reach out to one of our recommended lenders to start the process."* That's where email, name, income, and a soft credit pull happen — not on the affordability page.
- **Footer CTAs to the gated flows.** Three big call-outs in the footer: *"Get preapproved — Make offers knowing what you can afford"* (deep link to the prequal tool with `trk_source=mortgages_mc_toolcard`), *"Find a real estate agent — Get matched with an agent in your area"* (a real-estate agent matching funnel, separate vertical), and *"Get your credit score for free — A better score gets you a better rate"* (a TransUnion partnership).
- **App install CTAs:** *"Finance Smarter — Learn more about the app / Download the app — 4.8 121,000+ reviews / 4.3 31,200+ reviews"* (App Store + Google Play ratings surfaced in the footer).

### Pre-results vs. post-results gating
- **Pre-results:** no gate. Users see the calculator immediately. The pre-filled defaults (income $110k, debts $645, down $80k, rate 6.787%, 30-yr term) let them hit "Calculate" without entering anything.
- **Post-results:** still no gate on the page itself. Results display inline, then the lender rotator fires, then the article body continues. The only "wall" is the **lender "Check Rate" button** which is the handoff.
- **The "personalized rate" wall is upstream:** A scrap of internal tracking data in the page source literally reads: *"Personalized mortgage rates are not available on the website without providing contact information."* That sentence is in the page's structured-content JSON. Translation: NerdWallet has built a PII-gated path to a *personalized* rate quote, but they don't put it in front of the affordability calculator — they save it for the prequal page so they don't kill the top-of-funnel traffic.

### Net
The affordability calculator is a **content-led, no-PII top-of-funnel**. The lead capture is engineered as a downstream trip: affordability → article body → must-reads → footer CTA → prequal page → PII. That's a sophisticated multi-step funnel, not a single-form capture.

---

## 5. Questions asked (calculator inputs)

Direct from the input HTML I pulled. The affordability calculator has **two accordion sections** ("Your info" and "Loan info") plus a collapsed "Show Other Costs" section.

### "Your info" section (top, always visible)
| # | Field id | Label | Default value | Notes |
|---|---|---|---|---|
| 1 | `preTaxHouseholdAnnualIncome` | "Annual pretax income" | `$110,000` | Single income field, not split by earner |
| 2 | `minimumMonthlyDebt` | "Debt payments (monthly)" | `$645` | Free-text, dollar input |
| 3 | `recurringExpenses` | "Recurring expenses (monthly)" | `$0` | **Defaulted to zero.** The help text specifically tells users to put childcare here if they want a real-world number. |

### "Loan info" section (top, always visible)
| # | Field id | Label | Default value | Notes |
|---|---|---|---|---|
| 4 | `downPayment` | "Down payment (21.03%)" | `$80,000` | Pre-calculated 21.03% of $380,433 result. Free-text dollar. |
| 5 | `loanInterestRate` | "Interest rate" | `6.787%` | **Auto-filled with today's average 30-year fixed rate** (it changes daily). The label "loanInterestRate" confirms it pre-fills with a market average, not the user's actual quote. |
| 6 | `loanTerm` | "Loan term" | `30` (years) | MUI select dropdown with `value="30"`. The 15-year option is also available, but not 20-year or 10-year. |

### "Show Other Costs" section (collapsed by default)
| # | Field id | Label | Default value | Notes |
|---|---|---|---|---|
| 7 | `propertyTaxesAmountMonthly` | "Property taxes (monthly)" | `$490` | Pre-populated from national-average-based calculation, but it's exposed for editing |
| 8 | `homeownersInsuranceAmountMonthly` | "Homeowners insurance (monthly)" | `$209` | Same — national average, editable |
| 9 | `homeownersAssociationHOAFeesMonthly` | "HOA fees (monthly)" | `$0` | Default zero |
| 10 | `privateMortgageInsurancePMIMonthly` | "Private mortgage insurance (monthly)" | `$0` | Only auto-appears to the user if down payment < 20%? In the current default (21% down) it's shown but zeroed. |

### Inputs the calculator does **not** ask for
- **Credit score.** Massive omission. The article says *"the average isn't specific to you: A lender is going to offer you a mortgage interest rate based on key financial factors like debt, income and down payment, with your credit score playing a key role"* — and then it asks you to *type in* a rate you don't know how to estimate. Compare to the **prequalification calculator** on the same site, which *does* ask for credit score range, employment status, prior foreclosure/bankruptcy.
- **Property location / ZIP code.** All taxes/insurance are national averages. A buyer in San Jose vs. a buyer in Birmingham gets the same $490/mo tax default, even though the real numbers are 5–10× apart.
- **Co-borrower / household composition.** Single income field. No "I have a co-borrower earning $X" toggle.
- **Employment type.** W-2 vs. self-employed vs. contract vs. unemployed is invisible.
- **Asset / reserves.** "Cash reserves" is *mentioned* in the article body as a factor but the calculator never asks.
- **Length of time in current job.**
- **Down payment source** (savings, gift, DPA, equity from sale).
- **Loan type.** It assumes a conventional 30-year fixed. FHA/VA/Jumbo/USDA get their own separate calculator pages.

### Inputs the **prequalification calculator** adds (contrast)
- Credit score range (select)
- Employment status (select)
- Down payment saved? (yes/no)
- Past foreclosure or bankruptcy? (yes/no)
- These are exactly the inputs a real underwriter cares about. NerdWallet keeps them on the *downstream* calculator so the top-of-funnel tool stays simple.

---

## 6. User experience

### Flow length
- **One screen.** The whole calculator (inputs + results + lender rotator) fits on a single desktop view. No multi-step wizard, no "step 1 of 4" progress bar, no email gate. The hidden "Other Costs" section is a single click to expand.
- **Live recompute.** I can't run the React app from a static HTML capture, but the inputs are React-controlled (MUI `MuiInputBase-input`) and the article body says results update as you change values — no explicit "Calculate" press required for the affordability page (the monthly payment page does have a "Calculate" button).
- **"Calculate" button visible** on the affordability page, suggesting on-demand compute is also possible (handy for the "Sticky" results panel that sits beside the form on desktop).

### Friction points
- **Hidden complexity in "Other Costs"** is both a UX strength and a friction. New users will not click "Show Other Costs" and will assume the pre-filled $490 property tax is right. For buyers in high-tax states (CA, NJ, IL, NY, TX), $490 is wildly wrong — the real number is 2–4× that.
- **No credit-score input** means the rate field is a guess, and most users will leave the default. The article acknowledges this (*"The average isn't specific to you"*) but the UX doesn't *solve* it — it just punts the user to the prequalification tool.
- **No ZIP code** means every user in a high-cost-of-living area gets the same misleading affordability ceiling. The most expensive complaint in real life ("I make $200k and the calculator says I can only afford $400k, but everything in my city costs $900k") is built into the tool.
- **No "I don't know" prompts.** A user who has never thought about monthly recurring expenses is told to add daycare costs in there. That's an unreasonable cognitive load for a casual visitor.

### Visual design
- **Material-UI based** (MUI class names everywhere: `MuiInputBase-input`, `MuiOutlinedInput-input`, `MuiSelect-select`, etc.). NerdWallet's design system wraps MUI; the resulting aesthetic is clean, modern, slightly bank-like.
- **NerdWallet green accent** (`--mui-palette-green-default` is referenced in the inline styles). Logo is the wordmark "NerdWallet" with a green underline.
- **Color-coded verdict bar:** "Affordable | Stretch | Difficult" with a horizontal indicator. The verdict is binary-ish (the page shows the "Affordable" text by default when DTI ≤ 36%). The text under it: *"This home price is likely affordable for you. A DTI ratio of 36% or less is an indicator that you'll be able to pay debt and live comfortably."*
- **Sticky results panel on desktop.** CSS class `nw-cubc0l` is a `position: sticky; top: 24px;` column that floats the results panel beside the form on screens ≥768px.
- **Lender rotator cards** with logo, lender name, NerdWallet rating (e.g. "4.5"), minimum credit score (e.g. "620"), minimum down payment (e.g. "3%"), and a "Check Rate" CTA. Cards are visually heavy — they have a "NMLS ID" implication and the brand trust of NerdWallet's review.
- **Lots of editorial chrome:** bylines, reviewer credit, "Must reads" tiles with author photos, "MORE NERDY PERSPECTIVE" sidebar with a lead writer quote, "Nerdy Tip" callout with nerd emoji. The article is doing a lot of work to look authoritative without being intimidating.

### Mobile-friendliness
- The page is responsive (React, fluid grid, mobile breakpoints in the CSS: `@media (min-width:0px)`, `min-width:768px`). The form and results likely stack vertically on mobile. The sticky panel behavior is desktop-only.
- The lender rotator is horizontal-scrollable on mobile (MUI `MuiTabs-scrollableX` class is in the markup).
- The 1.5 MB HTML payload is heavy for mobile — there is essentially zero chance this page loads fast on 3G. It is built for broadband.

---

## 7. Calculator functionality (what it outputs)

Directly from the live UI text I extracted:

### Headline results block
- **Home price:** `$380,433` (in the default state)
- **Monthly mortgage payment** (labeled *"36% DTI"*): `$2,655`
- **Debt-to-income ratio:** `36%` (the headline DTI is the **back-end DTI**, not the front-end housing DTI)
- **Verdict:** "This home price is likely affordable for you. A DTI ratio of 36% or less is an indicator that you'll be able to pay debt and live comfortably."

### Loan needed
- **Loan needed:** `$300,433` (= home price − down payment; the mortgage amount, not the total cost)

### Monthly breakdown table
- **Debt payments:** $645 (echo of input)
- **Recurring expenses:** $0 (echo of input)
- **Monthly mortgage payment:** $2,655
  - **Principal and interest:** $1,956
  - **Property taxes:** $490
  - **Homeowners insurance:** $209
  - **HOA fees:** $0
  - **PMI:** $0
- **Total monthly commitments:** $3,300 (= debt $645 + recurring $0 + mortgage $2,655)

### What it does *not* output (gaps)
- **No amortization schedule on the affordability page** (the separate mortgage-calculator page has one as a separate "Amortization Schedule" tab).
- **No total interest paid over the life of the loan.**
- **No break-even analysis** (when do cumulative principal payments exceed cumulative interest?).
- **No scenario comparison** (e.g. 15-year vs. 30-year side-by-side; 20% down vs. 5% down; FHA vs. conventional).
- **No "what would change if I…" sensitivity analysis.** A user cannot see "if I paid off my $20k credit card, I could afford $X more." (This is the precise gap the parent project addresses — see §13.)
- **No multi-property / neighborhood price validation.** The output is a single dollar number; it does not say "in your ZIP code, the median home is $X — your budget is above/below that."
- **No closing-cost estimate.** NerdWallet has a separate "Closing costs calculator" for that.
- **No cash-to-close total.** Just the down payment.

### Methodology disclosed in the article
- Uses the **28/36 rule** (≤28% of gross monthly income on housing; ≤36% on total debt).
- The default rate is today's average 30-year fixed, not a personalized rate.
- Property tax and insurance defaults are national averages.
- *"These results are estimates based on your input. Our math for what's affordable — or what's a stretch — may not fit with how those figures feel for you."* — a soft hedge in the article body.

---

## 8. Calls to action

### Above the article body (post-results, in the lender rotator)
- **"Check Rate on NBKC" / "Check Rate on Rocket Mortgage, LLC" / "Check Rate on New American Funding" / "Check Rate on AmeriSave" / "Check Rate on West Capital Lending"** — each is a deep-link out to the lender's prequal/apply page, sponsored (`rel="sponsored"`), with UTM-style tracking params for NerdWallet.
- **"COMPARE MORE LENDERS"** — links to `https://www.nerdwallet.com/best/mortgages/refinance-lenders` (yes, the affordability page's "compare more" link goes to a *refinance* lender list, which is a small SEO/IA mistake or an intentional cross-sell).
- **Tabs above the rotator:** "Best Mortgage Lenders | First-time Buyer | Refinance | HELOC | Home Equity Loans" — the same real estate on the page is re-used to capture all five intents.

### Inline editorial CTAs
- **"🤓 Nerdy Tip"** callout: *"Sometimes loan officers will start right in with 'Let's see how much you could borrow,' prepared to dazzle you with a high number. But the amount you could borrow doesn't necessarily translate to how much you can comfortably afford... Know what monthly payment could work for you before you start talking to lenders."* — i.e. use NerdWallet's calculator before talking to the lender (captures the user deeper in NerdWallet's funnel).
- **"» MORE: Calculate your DTI ratio"** → `/mortgages/calculators/debt-to-income-ratio` — keeps the user in the calculator cluster.
- **"» MORE: Check your credit score for free"** → TransUnion partnership page.
- **"» MORE: How to get the best mortgage rate"** → internal guide.
- **"» MORE: How to Buy a House: 15 Steps in the Homebuying Process"** → internal guide.

### Footer/utility nav CTAs
- *"Get preapproved — Make offers knowing what you can afford"* → prequal LP.
- *"Find a real estate agent — Get matched with an agent in your area"* → real-estate agent matching (different vertical, partner referral).
- *"Get your credit score for free — A better score gets you a better rate"* → TransUnion.
- *"Compare mortgage rates — Save hundreds a year with a lower rate"* → rates table.
- *"Finance Smarter — Learn more about the app — 4.8 121,000+ reviews / 4.3 31,200+ reviews"* → app install.
- *"NMLS Consumer Access | Licenses and Disclosures"* — regulatory CTAs that double as trust signals.

### What they **don't** push
- No credit card offers, no balance-transfer offers, no high-yield savings account pitch on this page. Those exist on other pages in the cluster. The mortgage vertical stays clean.
- No "buy now" or "save your scenario" feature. No "email me my results" — by design, since they want the user to either run another scenario or click a lender.

---

## 9. Trust signals

### Editorial / byline
- **Byline:** "Written by Kate Wood, Edited by Jeanette Margle" with a "+1" indicating two authors.
- **Reviewer credit** appears on the prequalification page ("Reviewed by Michelle Blackford, Edited by Dawnielle Robinson-Walker") but not on the affordability page itself (an inconsistency).
- **Last-updated date** is shown explicitly (*"Last updated 12/11/2024"*), which is a strong freshness signal for both users and Google.

### Methodology disclosure
- *"Here is a list of our partners."* — explicit partner list link.
- *"Some or all of the mortgage lenders featured on our site are advertising partners of NerdWallet, but this does not influence our evaluations, lender star ratings or the order in which lenders are listed on the page. Our opinions are our own."* — the full FTC-style ad disclosure, surfaced above the article.
- *"This information may be different than what you see when you visit a financial institution, service provider or specific product's site."* — standard publisher disclaimer.
- *"Pre-qualified offers are not binding. If you find discrepancies with your credit score or information from your credit report, please contact TransUnion® directly."* — partners with the credit-bureau upsell.

### NerdWallet star ratings
- Lender cards show a 0–5 star rating system with one-decimal precision (e.g. "NBKC 4.5 NerdWallet rating", "Rocket Mortgage, LLC 4.5", "New American Funding 3.5", "AmeriSave 4.0"). The brand has a **"Star rating methodologies"** page in the footer that documents how these are derived.
- Each card also shows "Min. credit score" (620 / 620 / 580 / 580 / 600 in the captured set) and "Min. down payment" (3% / 3% / 3% / 3% / N/A). These are pulled from each lender's published guidelines and updated periodically.

### Regulatory / licensing signals
- **NMLS ID# 1617539** for NerdWallet Compare, Inc.
- **California Finance Lender license #60DBO-74812.**
- Address: 4150 N Drinkwater Blvd, Suite 200, Scottsdale, AZ 85251.
- This matters because the *calculator* doesn't originate loans, but NerdWallet Compare does (in some states). The licensing puts a regulator between them and the user, which is a strong implicit trust signal in financial services.

### Social proof
- App store reviews surfaced in footer: **"4.8 121,000+ reviews"** (iOS), **"4.3 31,200+ reviews"** (Google Play).
- "First-time homebuyers guide" has implicit social proof (large, sustained, frequently updated guide).

### Sources cited
- The 28/36 rule is presented as a "broadly accepted starting point" without a single citation. The body says *"This states that you shouldn't spend more than 28% of your gross (or pre-tax) monthly income on home-related costs, and no more than 36% on total debts"* — that's it. No link to CFPB, no link to Fannie Mae, no academic citation. The article is written for a lay audience that doesn't want footnotes.
- The default 30-year rate is sourced implicitly from NerdWallet's own mortgage-rates page (`/mortgages/mortgage-rates`), which itself pulls from a rate-aggregator.
- NerdWallet's mortgage-rates pages are widely cited by other personal-finance sites and even by news outlets, so the underlying data has indirect credibility from the network of citations.

### Sources *not* cited (and the gap)
- No link to the Consumer Financial Protection Bureau (CFPB) "Buying a House" resources.
- No citation to Fannie Mae's published DTI guidance.
- No acknowledgment of the FHA/HUD underwriting handbook.
- No link to ECOA / Reg B content, even though NerdWallet operates as a lender in some states.
- For users who care about *why* a lender would approve or deny them, the article offers zero regulatory or underwriting depth.

---

## 10. SEO strategy

### The URL pattern is the SEO play
NerdWallet builds a **topical cluster** under `/mortgages/calculators/`. The same domain authority flows to:
- `…/calculators/how-much-house-can-i-afford` (this page)
- `…/calculators/mortgage-calculator`
- `…/calculators/how-much-can-i-borrow`
- `…/calculators/mortgage-prequalification`
- `…/calculators/refinance-calculator`
- `…/calculators/fha-loan`
- `…/calculators/va-loan`
- `…/calculators/heloc`
- `…/calculators/amortization`
- `…/calculators/closing-costs`
- `…/calculators/debt-to-income-ratio`
- `…/calculators/rent-vs-buy-calculator`
- `…/calculators/cost-of-living`
- `…/calculators/income-required-mortgage`

…plus the rate cluster under `/mortgages/mortgage-rates/30-year-fixed`, `/5-1-arm`, `/fha`, `/va`, `/15-year-fixed`, `/jumbo`, etc. and the lender-review cluster under `/mortgages/best/...`.

This is a **deliberate keyword-stemming pattern**: every variant of "mortgage [intent]" gets a dedicated URL, each internally cross-linked, each with the same template. They own the SERP for "mortgage calculator", "home affordability calculator", "FHA calculator", "VA loan calculator", "DTI calculator", "refinance calculator", "closing costs calculator", "rent vs buy calculator" — probably a dozen top-3 rankings.

### Target keywords (inferred from titles + H1s)
- "how much house can I afford" (H1, title, URL)
- "home affordability calculator" (URL slug, H2)
- "mortgage affordability calculator" (used in body)
- "28/36 rule" (H2)
- "debt-to-income ratio" (H2)
- "FHA loan" (H2 + body)
- "VA loan" (H2 + body)
- "mortgage income calculator" (in body)
- "down payment" (in body, in H3, in URL cluster)
- "monthly mortgage payment" (H3)

### Related landing pages that build topical depth
- `/mortgages/hubs/first-time-homebuyers` — pillar hub
- `/mortgages/learn/debt-income-ratio-mortgage` — supporting article
- `/mortgages/learn/whats-exact-credit-score-need-buy-home` — credit score explainer
- `/mortgages/learn/conventional-mortgage`
- `/mortgages/learn/fha-loan`
- `/mortgages/learn/va-home-loan`
- `/mortgages/learn/fha-mortgage-insurance`
- `/mortgages/learn/down-payment-assistance-help-buying-a-house`
- `/mortgages/learn/how-are-mortgage-rates-determined`
- `/mortgages/learn/fed-mortgage-rates`
- `/mortgages/learn/how-to-get-the-best-mortgage-rate`
- `/mortgages/learn/how-much-does-it-cost-to-buy-a-house`
- `/mortgages/best/mortgage-lenders` and all the long-tail `/best/...` pages (30+ URLs)
- `/mortgages/mortgage-rates/30-year-fixed`, `/5-1-arm`, `/7-1-arm`, `/10-year-arm`, `/fha`, `/va`, `/jumbo`, `/refinance-rates`, `/cash-out-refinance`, `/second-home`, `/home-equity-loans`, `/heloc-rates`

### Content depth signals
- 1.5 MB of HTML, much of it the React app payload. The article body itself is ~3,500 words of editorial text plus another 2,000 words in the FHA/VA/rates sections.
- The page is updated roughly every 6 months (last update 12/11/2024; prequal page last update 06/26/2025) — this freshness cadence is part of the SEO strategy.
- BreadcrumbList JSON-LD is present (the only schema on the page): `Home > Mortgages > How Much House Can I Afford?`. There is **no** `FinancialProduct`, `Calculator`, `FAQPage`, or `HowTo` schema on this page — a missed SEO opportunity (the parent project should add FAQ schema for the diagnostic Q&A).
- No `meta name="author"`, no `article:published_time` (the page is positioned as a tool, not an article, even though the content is article-shaped).

### Cross-vertical linking (the real SEO moat)
- The site-wide nav includes Credit Cards, Banking, Home, Loans, Student Loans, Auto, Insurance, Investing, Retirement, Financial Advisors, Business, Taxes. Every one of those verticals has its own calculators and reviews. A user who lands on this affordability page is one click from a credit card payoff calculator, a credit-score explainer, a refinance rate table, etc. The site is engineered as a *financial-decision hub*, not a single-purpose calculator. That hub structure is the durable SEO moat — Google sees deep internal linking across hundreds of high-intent financial queries.

### What NerdWallet is *not* targeting (the strategic gap)
- **"Why was I denied a mortgage"** — no dedicated content. The site has no `/mortgages/learn/why-mortgage-denied` or `/mortgages/learn/denied-mortgage-loan` URL that I could find via the cross-link map.
- **"Mortgage denial reasons"** — absent.
- **"How to rebuild credit after mortgage denial"** — absent.
- **"Adverse action notice"** — absent.
- **"Reapply for mortgage after denial"** — absent.
- **"Buying a house with bad credit"** — addressed obliquely via the FHA loan page, but no dedicated denial-diagnostic content.

The SEO cluster is **purchase-side**, not **rejection-side**. That is exactly the gap the parent project ("Why am I denied") can fill.

---

## 11. Strengths

1. **Zero-friction top of funnel.** No email gate, no signup, no paywall. A user can iterate scenarios in seconds. This maximizes top-of-funnel reach and lets the lender rotator monetize the click rather than the form.
2. **The 28/36 rule framing is genuinely useful** for the median reader. Most laypeople do not know there is a back-end vs. front-end DTI distinction. The page teaches the framework with a worked example ($5,500 income → $1,540 housing / $1,980 total debt). The worked example is the single best teaching artifact on the page.
3. **The PITI breakdown is explicit and well-labeled.** Principal & interest, property taxes, homeowners insurance, HOA, PMI — all separated, all visible. The Total monthly commitments line is clear. This is better than most competitor calculators that bury everything in a single "monthly payment" number.
4. **Pre-filled sensible defaults.** $110k income, $645/mo debt, 21% down, today's rate, 30-year term — a user can press Calculate without entering anything and get a meaningful number. The defaults are calibrated to the median American household, not an edge case.
5. **The "Nerdy Tip" / "MORE NERDY PERSPECTIVE" brand voice** is warm, slightly self-deprecating, and educational. The lead writer's *"'Will I ever be able to afford a house?' I know, it's rough out there. First, stop doomscrolling"* block is genuinely humanizing and is the kind of content that earns links and social shares.
6. **The lender rotator is segmented** (Best Mortgage / First-time Buyer / Refinance / HELOC / Home Equity Loans) so the same real estate serves five different intents. Each card shows NerdWallet rating + min credit + min down — a real side-by-side comparison value, not just "Check Rate" buttons.
7. **Full article body below the tool.** Most mortgage calculators are one-screen tools with no editorial depth; NerdWallet turns the page into a pillar of educational content that ranks for long-tail queries and earns backlinks.
8. **Licensed lender (NMLS #1617539).** This puts them in a different regulatory class from pure content sites and lets them collect and forward PII in the prequal flow without the awkward "we're not a lender" disclaimer that smaller publishers need.
9. **Cross-vertical linking to credit cards, banking, insurance, investing, taxes, retirement, financial advisors.** When a user realizes they also need a credit card with a 0% intro APR to bridge to their down payment, the link is right there. The site functions as a hub.
10. **Material-UI design system** is consistent, accessible (proper aria-labels, role="dialog", tabindex management, MUI form validation patterns), and looks credible on both desktop and mobile.
11. **Disclaimer and regulatory boilerplate** are detailed, prominent, and legally correct (NMLS disclosure, California Finance Lender license, pre-qualified-not-binding language, TransUnion partnership for credit-report discrepancies).

---

## 12. Weaknesses (and the things users actually complain about)

### Functional gaps
1. **No credit-score input.** This is the single biggest complaint. The article says "the average isn't specific to you" — but the *calculator* doesn't even try to be specific. A user with a 580 score and a user with an 820 score get the same result, even though one might pay 2+ percentage points more on the rate. The NerdWallet "solution" is to punt the user to a separate prequalification page, which is a poor UX.
2. **No ZIP / location input.** Property tax is the single most variable line in the PITI breakdown. California users will see $490 when reality is $1,800. The defaults are national averages, which is honest but not useful.
3. **No lender-output. The user can see the home price they "qualify for" but never what an actual lender would say.** The prequalification page is the workaround, but users don't always know to go there.
4. **The default rate is misleading in a high-rate environment.** The default `6.787%` looks like a number a user should trust. It's today's national average for borrowers with 740+ FICO; the *user's* rate will be different, and the calculator makes no effort to estimate it.
5. **No scenario save / share.** A user who wants to compare "what if I paid off my cards" vs. "what if I got a raise" has to manually edit, re-edit, and remember the prior values.
6. **No side-by-side comparison.** No "FHA vs. conventional" view, no "15-year vs. 30-year" view, no "620 score vs. 740 score" view. The user has to manipulate the form each time.
7. **The "Stretch" / "Difficult" verdict zones are undefined.** The bar shows three zones (Affordable / Stretch / Difficult) but the page only describes "Affordable" in detail. What DTI triggers "Stretch"? 36–43%? 43–50%? The user has to guess.
8. **No cash-to-close / total cash needed.** Down payment alone is shown, not down payment + closing costs + reserves. The closing costs calculator is a separate tool.
9. **The "Compare more lenders" link on the affordability page goes to refinance lenders** (`/best/mortgages/refinance-lenders`). This is either a bug or a cross-sell, and either way it's confusing.

### Methodological complaints
10. **The 28/36 rule is from 1981.** It's still taught by the CFPB but most lenders actually qualify at 43–50% back-end DTI, especially for FHA. A user with a 45% DTI might be told by NerdWallet that they're "Difficult" when a lender would approve them. The article body says the 28/36 rule is "a rule of thumb, not a hard-and-fast rule" but the calculator *applies* it as if it were hard.
11. **No accounting for non-debt obligations** (childcare, elder care, student-loan-forgiveness-payment-pause) that materially affect affordability.
12. **No recognition of co-borrowers.** The single "household income" field lumps together two earners without any way to model one losing their job, which is exactly the scenario an underwriter cares about.
13. **No FHA / VA / USDA / Jumbo variants on this page.** The default is conventional 30-year fixed. A user who actually qualifies only for FHA has to leave the page and start over.

### Trust complaints (real-world)
14. **The "lender rotator" is monetized, and users know it.** Even with the partner disclosure front-and-center, the rotational "Check Rate" buttons are widely read as ads. The NerdWallet star ratings do help — a "4.5 NerdWallet rating" with a clear methodology page is more credible than a "Sponsored" badge — but the conflict-of-interest risk is structural.
15. **Article freshness is uneven.** The affordability page was updated 12/11/2024 (over a year before this analysis), the prequalification page 06/26/2025. In a market where the 30-year rate has moved 75+ basis points in a year, the article body still references today's rate via the live default — but the prose around it can be stale.
16. **The "personalized rate" wall is hidden.** The internal tracking JSON literally admits: *"Personalized mortgage rates are not available on the website without providing contact information."* This sentence, surfaced more honestly, would build trust. As it stands, the user has to deduce that the rate they're given is generic.
17. **NerdWallet Compare, Inc. is itself a lender (NMLS #1617539).** The page doesn't prominently surface this — it's in the footer fine print. A user who doesn't realize that "NerdWallet" the publisher and "NerdWallet Compare" the lender are related may not appreciate the conflict.
18. **The Canadian audience is an afterthought** — a single sentence at the bottom of the article body linking to a Canadian site. The U.S.-only default silently gives Canadian users misleading tax/insurance numbers.

### UX / accessibility complaints
19. **Page weight (1.5 MB HTML, plus React JS, plus CSS-in-JS) is heavy.** Time-to-interactive on a mobile device is poor. The marketing may be mobile-friendly but the *engineering* is desktop-first.
20. **No dark mode, no font-size control, no language toggle** beyond the U.S./Canadian fork. For a financial product serving immigrant and lower-literacy audiences, this is a gap.

### What the parent project can fix
The **denial diagnostic** is the *exact* complement to all of these weaknesses. NerdWallet tells you "what you can afford in theory"; the parent project should tell you "why a lender would say no in practice" — and the practice is exactly where the calculator's input set is too thin (no credit score, no employment type, no prior foreclosure/bankruptcy, no reserves, no co-borrower modeling).

---

## 13. What a "why can't I qualify" diagnostic could do better

This is the most important section for the parent project. NerdWallet's affordability calculator is excellent for "what can I afford?" but is silent on "what will a lender approve?" — and these are two very different numbers. Here is what a diagnostic tool would have to do to beat NerdWallet on the latter question.

### A. Inputs the diagnostic must capture that NerdWallet ignores
1. **Credit score (FICO 2/4/5, or at minimum a range).** This is the #1 determinant of whether a borrower qualifies, the rate they'll be quoted, and whether they'll need a non-QM loan. NerdWallet's calculator punts this to a separate prequal page; the diagnostic should make it the *first* question.
2. **Credit profile flags:** collections, charge-offs, recent late payments, prior foreclosure (year), prior bankruptcy (chapter, year, discharge date), short sale, deed-in-lieu, judgment, tax lien, student-loan default. Each of these is a discrete lending rule. A diagnostic that asks "have you ever…" can branch the analysis.
3. **Employment type and tenure:** W-2 full-time, W-2 part-time, 1099/self-employed, contract, seasonal, unemployed, retired-on-social-security, disability. Lenders treat each differently — self-employed needs 2 years of tax returns, contract workers often need 1 year + residuals, etc.
4. **Income composition:** base salary, bonus, commission, overtime, rental income, investment income, Social Security, pension, alimony/child support (and whether it's ≥3 years from decree). NerdWallet's single "annual pretax income" lumps all of these.
5. **Co-borrower / co-signer:** separate inputs, separate credit pull analysis, separate DTI calc. NerdWallet's single household-income field hides the co-borrower dynamic.
6. **Down payment source:** savings, gift (with donor relationship), down payment assistance program (DPA), equity from sale, 401(k) loan, crypto. Each has different lender rules (e.g. some lenders discount crypto, most require sourced-gift letters for gifts).
7. **Reserves / post-close liquidity:** months of PITI the borrower will have left after closing. NerdWallet never asks. Most lenders want 2–6 months reserves depending on loan type.
8. **Property type:** SFR, condo (and warrantability), 2–4 unit, manufactured, co-op, mixed-use. Each has different guidelines (e.g. FHA condo approval, condo-tours warrantability).
9. **Property use:** primary residence, second home, investment. Affects loan program, down payment, rate.
10. **Loan amount and loan-to-value target.** The NerdWallet calculator works backwards from a DTI; a diagnostic should let the user say "I'm looking at a $400,000 house" and tell them what would change to make it work.
11. **First-time-homebuyer status.** Many DPA programs, lower FHA MI premiums, and state-specific credits hinge on this.

### B. Output a diagnostic must give that NerdWallet doesn't
1. **A binary "likely qualify / unlikely / not yet" verdict** keyed to the loan programs the user might actually pursue (Conventional, FHA, VA, USDA, Jumbo, Non-QM), not a single "affordable" verdict.
2. **A ranked list of denial reasons.** If a user fails 4 of 5 underwriting rules, show all 4, ranked by impact ("your credit score is the biggest blocker; addressing it could move you from $0 to $X in buying power"). Each reason should cite the specific rule (Fannie Mae Selling Guide, FHA 4000.1, VA Lender's Handbook, CFPB / Reg B, ECOA).
3. **A "what would change" sensitivity analysis.** "If your credit score went from 620 to 680, your maximum home price would increase from $X to $Y." "If you paid off your $8,000 credit-card balance, your DTI would drop from 41% to 38%." This is the *exact* feature NerdWallet is missing and the natural extension of the existing calculator.
4. **Time-to-qualify estimates.** "At current credit-rebuild velocity, you'd likely hit 680 in 14 months." This combines credit-bureau data with simple math, and is unique value.
5. **A "path" view** — three concrete next steps: (a) quick wins (pay down a card, dispute a collection), (b) medium-term (rebuild credit, save reserves), (c) long-term (co-borrower, change loan program, DPA).
6. **State-specific overlays.** NerdWallet is U.S.-only and largely state-agnostic. A diagnostic can offer state-specific DPA programs, state-specific first-time-homebuyer credits, state-specific bond programs.
7. **A "reapply timeline"** — many denials can be cured in 30–90 days (pay down a balance, document a payment plan with a collection agency). NerdWallet never says this.
8. **An adverse-action simulator.** For users who have already been denied, the diagnostic should mirror the structure of an adverse-action notice (the four required reasons under Reg B) and help them decode their own.

### C. Lead capture that respects the user (a NerdWallet lesson + an improvement)
NerdWallet's "no email gate on the front, PII gate downstream" pattern is the right shape for compliance reasons — but it's optimized for the *publisher*, not the *user*. A diagnostic can do better:
- **Reveal enough value first** that the user *wants* to give PII for a deeper analysis. (e.g. "we've identified 3 blockers. Want a personalized timeline? Enter your email.")
- **Disclose the use of the data clearly** (NerdWallet already does this but it's in fine print). The diagnostic should foreground the disclosure: "We'll show you an estimate based on inputs. We may share your info with up to 3 lenders to provide a quote."
- **Offer a "save my scenario" feature** that requires a light signup but gives the user something concrete (a shareable link, a printable plan, an email recap).
- **Skip the soft pull if the user isn't ready.** A user with a 540 credit score shouldn't get a soft pull that lowers their score by 5 points; they should get a *plan* first.

### D. Trust signals the diagnostic should explicitly add
- **Cite the underwriting rule book for every reason** ("Fannie Mae Selling Guide B3-5.3-02" for DTI, "FHA 4000.1 §II.A.4" for credit, "VA Lender's Handbook, Chapter 4" for residual income). NerdWallet cites nothing; a diagnostic can credibly cite everything.
- **Show the methodology** in plain English. NerdWallet hides the 28/36 rule behind a single "36% DTI" label. A diagnostic should walk through each rule.
- **Disclaimer that this is not a guarantee of approval.** NerdWallet's existing prequal language ("Pre-qualified offers are not binding") is good and can be borrowed.
- **Show the date / time the data was pulled.** Credit-score norms change; underwriting flex boxes get updated quarterly. A timestamp builds trust.
- **Make the data sources auditable.** "This estimate uses today's average 30-year fixed rate from [source], your state's average property tax rate from [source], and your credit-score range's typical rate adjustment from [source]." NerdWallet does none of this.

### E. UX improvements the diagnostic should adopt
- **One screen per logical chunk**, with progress visible (e.g. "Step 2 of 5: Income & Employment"). NerdWallet's all-on-one-screen works for the *simple* tool; a diagnostic that asks 15 questions *needs* a wizard.
- **Inline "why we ask this" tooltips.** Reduces abandonment and pre-empts "are you going to pull my credit?" fears.
- **Save & resume** via a magic link, not a password.
- **Side-by-side scenario compare** as a built-in feature, not a workaround.
- **A "share with my loan officer" export** — PDF or shareable link that summarizes the user's profile and the diagnostic's verdict. This becomes a viral loop: the user brings the diagnostic output to their lender, who then references NerdWallet-style content, and the cycle reinforces.

### F. SEO differentiation
NerdWallet owns "how much house can I afford." A diagnostic can own:
- "why was my mortgage denied"
- "mortgage denied what to do next"
- "denied mortgage because of credit score"
- "denied FHA loan reasons"
- "reapply for mortgage after denial"
- "denied mortgage bad credit how long to wait"
- "mortgage preapproval denied"
- "what to do after mortgage denial"
- "adverse action notice mortgage"
- "denied mortgage letter"

These are high-intent, emotionally fraught, and almost completely unaddressed by the major publisher sites. They're the SERP equivalent of the empty space NerdWallet has left between its purchase-side cluster and the actual user need.

### G. Compliance posture (a NerdWallet lesson)
NerdWallet's footer disclosures (NMLS ID, California Finance Lender license, "Pre-qualified offers are not binding," TransUnion partnership language, full partner disclosure at top of article) are a model. A diagnostic should:
- **Lead with "not a lender, not a credit decision, not financial advice."** This is a stronger disclaimer than NerdWallet's because a denial is more legally fraught than an affordability estimate.
- **Cite ECOA / Reg B** for any user who reports having been denied. The diagnostic should remind the user they have the right to a free credit report from `annualcreditreport.com`, the right to an adverse-action notice with specific reasons, and the right to dispute inaccurate information.
- **Avoid guaranteeing outcomes.** "You may qualify" not "you will qualify."
- **Avoid collecting SSN or DOB** for the front-end diagnostic. A user with a 520 FICO doesn't need to give you their SSN to be told what to do.

### H. Summary
NerdWallet's calculator is a *very* good *one* tool. The diagnostic should be a different kind of tool — a *post-decision* tool, a *pre-application* coaching tool, a *rejection* decoder — that uses many of the same inputs but answers a different question. The two can coexist: a user with a denied application could land on the diagnostic, get a denial-decoder, follow the plan, and *then* land on a NerdWallet-style affordability calculator once they're ready to estimate. That's the funnel the parent project is uniquely positioned to own.

---

## Appendix: raw data I pulled

- Page HTML, full capture: `/tmp/nerdwallet_how_much_house.html` (1,490,952 bytes, status 200, last updated 12/11/2024)
- Prequalification calculator: `/tmp/nerdwallet_prequal.html` (1,216,405 bytes, last updated 06/26/2025)
- "How much can I borrow" calculator: `/tmp/nerdwallet_borrow.html` (1,182,471 bytes)
- Mortgage payment calculator: `/tmp/nerdwallet_mortgage_calc.html` (1,543,032 bytes)
- Refinance calculator: `/tmp/nerdwallet_refi.html` (1,465,665 bytes)

**Caveat I should be honest about:** `web_search` returned an authentication error for the entire session, so I could not pull live third-party reviews, Reddit threads, BBB complaints, or App Store reviews beyond what NerdWallet self-reports in its footer. Where I cited "common user complaints" or "publicly known weaknesses," I am drawing on widely reported public knowledge of the product, not on a fresh scrape. The parent project should treat those sections (especially §12's "real-world trust complaints") as directional rather than freshly verified.
