# Redfin Mortgage Calculator — Research Notes

## Pages Fetched & Confirmed Live
- `/mortgage-calculator` — "Mortgage Calculator with PMI and Taxes | Redfin" (200 OK, ~172KB)
- `/how-much-house-can-i-afford` — "How Much House Can I Afford? - Home Affordability Calculator" (200 OK, ~215KB)
- `/refinance-calculator` — "Refinance Calculator | Redfin" (200 OK, ~158KB)
- `/home-equity-calculator` — "Home Equity Calculator | Redfin" (200 OK, ~157KB)
- `/rent-vs-buy-calculator` — "Rent vs. Buy Calculator | Redfin" (200 OK, ~183KB)
- `/mortgage-get-pre-approved` — "Rocket Connect" (interstitial, then hands off to Rocket Mortgage)
- `/mortgage-purchase-or-refinance` — landing for purchase vs refinance flow
- `/todays-mortgage-rates` — rates page (50 state landing pages generated)
- `/how-much-rent-can-i-afford`, `/what-is-my-home-worth`, `/why-redfin`, etc.
- Note: `/mortgage-calculator/affordability`, `/mortgage-calculator/monthly-payment`, `/mortgage-calculator/refinance` all 503/404 — those sub-URLs are NOT real; the actual tools live at the parent /kebab routes above.

## Calculator Tool Suite (confirmed URLs)
1. **Payment calculator** — `/mortgage-calculator`
2. **Affordability calculator** — `/how-much-house-can-i-afford`
3. **Refinance calculator** — `/refinance-calculator`
4. **Home equity calculator** — `/home-equity-calculator`
5. **Rent vs. buy calculator** — `/rent-vs-buy-calculator`
6. (referenced in nav) Home sale proceeds, rent affordability

## Form Inputs (Payment calculator)
- `homePriceStore` (Home price — "The amount you plan to offer for a home.")
- `downPaymentStore` (Down payment — "Cash you can pay when you close.")
- Veteran checkbox (frees the down payment)
- `mortgageInterestRate` ("Varies depending on lender and credit score.")
- Loan type (30-year fixed, 15-year, 5/1 ARM, 7/1 ARM, FHA, VA, Jumbo) — pre-populated rates per type
- Location search (powers local tax/insurance/HOA estimates)
- "Advanced options" — collapses more inputs (HOA, insurance, tax rate)

## Form Inputs (Affordability calculator)
- `annualIncome` (Annual household income — "Before taxes. Include any co-buyer's income.")
- `monthlyDebts` (Monthly debts — "Obligations like loan and debt payments or alimony, but not costs like groceries or utilities.")
- `cashDownPayment` (Cash)
- Veteran checkbox ("Active U.S. military, veterans, and spouses are eligible for a $0 down VA loan with no private mortgage insurance.")
- Location ("Where are you buying?")
- Outputs: debt-to-income ratio; "Add a location to see homes that fit your budget"

## Outputs (Payment calculator)
- Headline: `$1,658 per month`
- Breakdown rows: Principal and interest | Property taxes | HOA dues | Homeowners insurance
- (No amortization schedule, no total interest paid, no DTI ratio.)

## Outputs (Affordability calculator)
- Computes max home price
- Computes 28/36 DTI ratio (text only — "Follow the 28/36 debt-to-income rule")
- Cross-link: "Add a location to see homes that fit your budget"

## Trust Signals
- NMLS Rocket Mortgage, LLC #3030 disclosed in footer
- "Licensed in 50 states"
- 50-state rate landing pages
- "Data provided by Rocket Mortgage"
- "Updated September 2025" date stamp
- Fair Housing Act, NY SOPs, DRE license #01521930
- Walk Score trademark (Redfin owns it)
- Phone: 1-844-759-7732

## CTAs
- "Get prequalified" → /mortgage-get-pre-approved → hands off to Rocket Connect/Rocket Mortgage
- "Find an agent" → /real-estate-agents
- "Connect with a Rocket Mortgage Home Loan Expert" (refinance, home equity)
- "Get prequalified and secure your dream home" (affordability page module)
- Banner: "Planning to buy a home? Get expert advice from a Redfin agent — Our experienced local agents can answer your questions and guide you on strategies to afford the home you want."

## Headline / Value Prop (Payment calc)
"Estimate your mortgage payment, including the principal and interest, taxes, insurance, HOA, and PMI. Add your location for more accurate estimates."

## Headline / Value Prop (Affordability)
"How much house can I afford? — See what you can afford and find homes within your budget."

## Headline (Refinance)
"Let's see how much you can save each month by refinancing to a lower payment."

## Headline (Home Equity)
"Discover how much cash you have in your home and ways to access it."

## SEO Content Architecture
- 50 state-specific rate pages: `/todays-mortgage-rates/{state}`
- Guides: `/guides/mortgage-pre-approval`, `/guides/first-time-home-buyer-guide`, `/guides/first-time-home-buyer-programs`, `/guides/how-to-improve-your-credit-score`, `/guides/what-credit-score-is-needed-to-buy-a-house`, `/guides/how-to-make-a-down-payment`, `/guides/mortgage-loan-process`
- Blog: `/blog/mortgage-pre-approval/`, `/blog/should-you-sell-or-rent-your-home/`
- Mortgage nav: Today's mortgage rates | Today's refinance rates | Get prequalified | Home equity loan | Payment calculator | How much can I afford? | Home equity calculator | Refinance calculator | Rent vs. buy

## Identified Weaknesses / Gaps
- No credit-score input anywhere → DTI is described but never computed for the user with their score
- No "Why won't I qualify?" diagnostic flow
- No soft-pull or actual prequal from within calculator — hands off to Rocket
- No amortization schedule displayed
- No comparison vs. renting (separate page)
- No closing-costs estimator on the payment page
- No savings/asset input (cash-on-hand beyond down payment)
- No "what if I had a higher credit score" sensitivity
- No qualification diagnostic (DTI acceptable? PMI required? VA eligibility result? FHA limits?)
- Form does not validate income/loan ratios before showing the result
- Tax/insurance/HOA are only populated if a location is entered; otherwise left blank and the user has to know to fill them in
- All mortgage lending actually done by Rocket Mortgage (Redfin is the funnel / data-collection layer, NMLS #3030); Redfin collects the lead and routes to Rocket

## Tool Identity
- Server header: "Server: mortgage-marketplace"
- App name: `mortgage-marketplace`
- Mortgage API base: `https://mortgage.redfin.com`
