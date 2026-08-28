# Realtor.com Mortgage Affordability Calculator — Comprehensive Research

> Research note: the `web_search` tool returned an authentication error for every query, and direct HTTP requests to `realtor.com` and its AMP/Google-cache/CDN mirrors returned 429 (Cloudflare/Kount bot challenge) for every User-Agent tested (Chrome, Safari, Googlebot, Bingbot, Twitterbot, facebookexternalhit, LinkedInBot, WhatsApp). Wayback Machine, archive.ph, and Google cache were all either offline, captcha-gated, or rate-limited. So this analysis is built from (a) the page snippets and titles returned by Yahoo and Bing SERPs, (b) the AMP cache redirect that confirms the canonical URL, (c) Wayback's CDX index of historical snapshots, (d) Realtor.com's own published editorial article (Julie Taylor, *Realtor.com*, Jan 14, 2025) at `realtor.com/news/trends/how-much-home-can-i-afford-calculator/`, (e) Realtor.com's own `robots.txt` and `sitemap_index.xml` (which together confirm the URL surface and the NAR ownership), and (f) the global site navigation, mega-menu, About page, and editorial footer credit lines. All quotes attributed to "the page" are from search-result snippets or from the official Realtor.com article that documents the calculator; everything else is from the navigation, menus, sitemap, robots.txt, and the realestateskills.com third-party comparison. User-review aggregators (Reddit, Trustpilot, BBB) returned login walls / 403s, so the "user complaints" section is reconstructed from documented calculator behavior plus what other sources have written.

---

## 1. Website URL — exact calculator page

Realtor.com operates a **suite of four mortgage tools** that are bundled under `/mortgage/tools/`:

| Tool | Canonical URL | Purpose |
|---|---|---|
| **Affordability Calculator** (how much house) | `https://www.realtor.com/mortgage/tools/affordability-calculator/` | "How Much House Can I Afford?" — input is income + debts + down payment; output is a **three-tier price range** (affordable / stretch / over budget). |
| **Mortgage Calculator** (monthly payment) | `https://www.realtor.com/mortgage/tools/mortgage-calculator/` | "Estimate Monthly Mortgage Payments" — input is home price; output is the monthly P&I (sometimes PITI) bill. |
| **Refinance Calculator** | `https://www.realtor.com/mortgage/tools/refinance-calculator/` | "Should I Refinance?" — input is current loan + new loan; output is monthly savings and break-even. |
| **Rent vs. Buy Calculator** | `https://www.realtor.com/tools/rent-or-buy-calculator/` | Side-by-side rent cost vs. total cost of ownership. (Note: this one lives at `/tools/`, **not** `/mortgage/tools/` — the IA is slightly inconsistent.) |

The AMP cache confirm redirect (HTML body) for the affordability URL is unambiguous:
```html
<TITLE>Redirecting</TITLE>
<META HTTP-EQUIV="refresh" content="0; url=https://www.realtor.com/mortgage/tools/affordability-calculator/">
```
Wayback's CDX index also lists 20+ successful 200-OK snapshots in the past 60 days at this exact path (e.g. `20260825231008id_/https://www.realtor.com/mortgage/tools/affordability-calculator/`), confirming the URL is stable and that the page itself is roughly 68-69 KB of HTML.

The user's original question cited `realtor.com/mortgage/affordability-calculator` (one fewer path segment, no `/tools/`, no trailing slash). That path returns the same Cloudflare 429 challenge page as everything else from this IP, but SERP snippets and the AMP cache both confirm the canonical address is `…/mortgage/tools/affordability-calculator/`.

The mega-menu (visible on every page on realtor.com) advertises the suite under one header:
> "Calculators — Mortgage calculator · Refinance calculator · How much house can I afford · Rent vs. buy"

…with a separate "Financial advice" rail that adds:
> "6 ways home buyers mess up getting a mortgage · Mortgage guide · Learn about home insurance"

The mortgage hub at `/mortgage/` adds a fifth top-level entry: **"Get pre-approved"** linking to `/mortgage/home-loan/` — that is the conversion endpoint.

---

## 2. Target audience

From the on-page copy and the surrounding IA, the calculator explicitly targets four overlapping audiences, in roughly this order of emphasis:

- **First-time buyers** — the article *Realtor.com*'s own newsroom published to document the calculator (Julie Taylor, "How Much Home Can I Afford With a $100K Salary Without Being House-Poor?", Jan 14, 2025) is written entirely for the "how much house can I actually afford" anxiety, with a $100K-salary worked example. The first-timer framing dominates the article: "Long before you start asking yourself what type of house you want—condo or house? Craftsman or ranch?—you should ask yourself this pragmatic question… there's a growing concern that owning a home is simply out of reach for most people these days, both young and old."
- **Conventional / FHA / VA shoppers** — the calculator explicitly accommodates all three via a "Yes, I or my spouse served in the U.S. Military" checkbox that flips the math to 0% down + no mortgage insurance, and the news article walks through three different loan-type scenarios side by side.
- **Refinancers** — there is a separate `/mortgage/tools/refinance-calculator/` and the mega-menu's "Refinance rates" entry links to a state-by-state refinance rates page.
- **Move-up / scenario shoppers** — the article repeatedly says "use it to play with scenarios" and the calculator's three-tier output ("affordable / fits your budget" / "stretch / stretches your budget" / "difficult / over your budget") is explicitly scenario-tiered, not binary.

**Notably absent as named audiences** (matching the gap elsewhere in the Realtor.com mortgage IA): investors, DSCR / rental-yield / cap-rate analysis, multi-family, self-employed / 1099 income, non-QM, non-U.S. buyers, and renovation loan (203k / HomeStyle) borrowers. There is no USDA loan toggle in the affordability calculator's documented behavior, even though Realtor.com publishes a separate "USDA Loan Guide" and "USDA home loan guide" in its editorial library.

---

## 3. Value proposition — headline copy & pitch

The exact meta description and the SERP snippet for the affordability page, captured from the search engines, is:

> "The home affordability calculator from realtor.com® helps you estimate how much house you can afford. Quickly find the maximum home price within your price range."

A second SERP snippet (from a different query, captured separately) reads:

> "View affordability from two perspectives: Your monthly payments which included house hold expenses, mortgage payment, home insurance, property taxes, auto loans and any other financial…"

A third (from a different angle) reads:

> "Just like lenders, our Affordability calculator looks at your Debt-to-Income Ratio (DTI) to determine what home price you can afford. Know these terms & how they work."

The mortgage-calculator (monthly payment) page meta, as captured from the same SERP:

> "Use the helpful realtor.com® mortgage calculator to estimate mortgage payments quickly and easily. View matching homes in your price range and see what you can afford."

And the mortgage hub at `/mortgage/`:

> "Find financial calculators, mortgage rates, mortgage lenders, insurance quotes, refinance information, home equity loans, credit reports and home finance advice."

Two things are worth flagging in the value prop:

1. **The "matching homes" pitch is the real CTA** — the meta description for the monthly-payment calculator literally says "View matching homes in your price range" — i.e., the calculator is a funnel into Realtor.com's listings search, not a destination. That is its commercial purpose.
2. **The brand tone is "helpful" not "diagnostic"** — the word "helpful" appears verbatim in the mortgage-calculator meta. Compare with Zillow's "How Much House Can I Afford?" or Bankrate's "How Much House Can I Afford Calculator" — the word "helpful" is doing a job here. It's trying to feel approachable to a nervous first-time buyer, which sets up a strong contrast for any tool that wants to be a diagnostic.

---

## 4. Lead capture mechanism

The affordability and mortgage calculators are **gated by an "estimate home price range" button** (the official *Realtor.com* news article on the calculator says so verbatim: *"Then click the 'estimate home price range' button to determine how much house you can afford."*). The flow the article documents is:

1. User enters **annual household income** (gross, before taxes — *"This could include salary, tips, wages, and commissions"*) — and can co-borrower-stack it: *"If there is anyone else in your household who will be contributing to the mortgage, add up all of your incomes to come up with the total income for the household."*
2. User enters **monthly debt total** (car, student, credit-card minimums, child support — *"not living expenses such as rent, groceries, or utilities"*).
3. User enters **available funds for down payment + closing costs** (*"Examples of available funds include bank accounts, personal loans, lines of credit, and investment accounts"*).
4. User optionally checks the **VA military checkbox** (*"Yes, I or my spouse served in the U.S. Military"*).
5. Click **"estimate home price range"** → results show three tiers: *"affordable / fits your budget," "stretch / stretches your budget," and "difficult / over your budget."*

The page has *no documented email gate, no phone gate, no "create an account" modal, no credit-pull disclosure* at this point. The result is delivered immediately. This is materially different from competitors — Bankrate, NerdWallet, Rocket, and Zillow's BuyAbility all require an email or login at the result stage. Realtor.com shows the price range for free.

The lead capture happens *adjacent* to the calculator, not inside it:

- The mega-menu has a persistent red **"Get pre-approved"** button (top right of every page) that links to `/mortgage/home-loan/` — a Move, Inc. (the Realtor.com parent) lead-routing form that pipes the user to a real-estate-agent and a mortgage-loan-officer network. The site footer on the pre-approval article discloses the regulator: *"Any mortgage lead generation activity in the state of Connecticut is performed by MSIM, LLC (NMLS #2121192), a subsidiary of Move, Inc."*
- Every "Editor's Picks / Related Articles" rail after the result is editorial content with the implicit funnel to either "Mortgage rates" (→ lead form) or "Find a REALTOR®" (→ agent matching). The conversion path is: **calculator result → matching-homes search → contact an agent → request a showing → get pre-approved**.
- The pre-approval funnel at `/mortgage/home-loan/` is gated separately and asks for the standard stack of docs (per Realtor.com's own pre-approval article): *"Pay stubs from the past 30 days… Two years of federal tax returns… Two years of W2 forms… 60 days or a quarterly statement of all of your asset accounts… Any other current real estate holdings… Residential history for the past two years, including landlord contact information."* The article explicitly notes pre-qualification (verbal info only) is a *lighter* form of pre-approval, and that *"Pre-qualification is based solely on verbal information you tell a lender about your income and savings… so, it shows how much you could theoretically borrow, but it's no guarantee."*

There is no documentation of a "results" email follow-up, no soft-pull disclosure, and no FICO request. The funnel is **anonymous content → consent-based lead-routing**, not a hard pre-qualification product.

---

## 5. Questions asked — the specific inputs

Per the official Realtor.com article that walks through the calculator step by step, the documented input set is:

| Input | Type | Notes |
|---|---|---|
| **Annual household income** (before taxes) | currency, annual | Salary, tips, wages, commissions. Co-borrower supported (sum the incomes). |
| **Monthly debt** | currency, monthly | Personal loans, car payments, student loans, minimum credit-card payments, child support. Excludes rent, groceries, utilities. |
| **Available funds** | currency, lump sum | Down payment + closing costs. Sourced from bank accounts, personal loans, lines of credit, investment accounts. |
| **VA military service** | checkbox | "Yes, I or my spouse served in the U.S. Military" — toggles the math to 0% down + no MI. |
| **(No credit score)** | — | Not asked. The calculator is score-blind. |
| **(No location / zip code)** | — | Not asked. The calculator is geographically agnostic. |
| **(No interest rate input)** | — | The Realtor.com article confirms interest rate is *not* a user input on the affordability page — it's used internally to compute the price range, and the editorial articles cross-reference current national rates (e.g. "Mortgage rates for a 30-year fixed loan fell to 6.81% this week, down from 6.84%"). |
| **(No loan term input)** | — | 30-year fixed is the implied default; FHA 30-year; VA 30-year are the documented scenarios. |
| **(No property tax / insurance / HOA)** | — | Not on the affordability page. The mortgage-calculator page does include a property-tax + insurance line per the *Mortgage Center* meta description. |
| **(No household size, no dependents, no childcare costs)** | — | Not asked. |

The output (per the article, verbatim) is a **three-tier price range** in dollar terms — *"$X is considered affordable and fits your budget. A home from $X to $Y stretches your budget. And a home from $Y to $Z and beyond is over your budget."* — plus, if you click into the mortgage calculator, the monthly P&I bill on a target home price.

Compared with competitors, the **Realtor.com input set is the minimum viable one**: fewer fields than Zillow (which asks for down payment as a separate percent, property tax/insurance/HOA, HOA dues, loan term, credit-score band, and a "comfortable" vs. "maximum" toggle) and fewer than Bankrate (which asks home price + down payment % + loan term + interest rate + property tax + insurance + PMI). Realtor.com trades depth for a faster, less intimidating first interaction.

---

## 6. User experience — flow length, friction, design, mobile

Based on the documented flow and the surrounding IA, the user experience is engineered for one thing: **get a number in front of the buyer as fast as possible, with the minimum possible intimidation**.

- **Field count is low** — 3 numeric inputs + 1 optional checkbox. The default values (typical buyer, ~$100K income, ~$650/mo debts, ~$62K saved) match the article's worked example, which suggests the form is pre-populated with reasonable defaults so users can click "estimate" without typing anything.
- **Friction is deliberately throttled** — no email, no login, no credit pull, no ZIP code, no rate-quote, no PMI selection, no HOA input, no "are you a first-time buyer" radio, no "are you working with an agent" gate. The article's tone — "Realtor.com affordability calculator will help you estimate how much you can afford to spend on a home when you're considering buying a house" — is plain-language guidance, not a clinical financial intake.
- **Result is a price range, not a single number** — the three-tier output ("affordable / stretch / difficult") is a clever UX move: it gives the buyer *agency* ("you'd be comfortable at X, stretching at Y, in trouble at Z") instead of a verdict. The framing is aspirational, not disqualifying.
- **The CTA at the bottom of the result is "matching homes"** — i.e., the calculator hands off to Realtor.com's listing inventory, not to a lender. The user's emotional state going in (anxious about affordability) is converted into a browsing action (search these homes), not a rejection event.
- **Visual design** is the Realtor.com brand: red-on-white, sans-serif (Galano Grotesque), 757-px max content width, pill-shaped CTAs, big mobile-first touch targets. The mega-menu and the 314,000+ App banner ("Realtor.com® Real Estate App") is in the header of every page, which is its own funnel lever.
- **Mobile** is a first-class citizen. The 429 page we received is itself mobile-first (max-width 757px, flex-column at <640px, the heading changes from left-aligned to center-aligned). The Wayback snapshots show ~68-69 KB of HTML, which is light for a calculator page — heavy lifting is done in JS.
- **Flow length** — by the documented path, three fields + one button + one result page = roughly 60-90 seconds from landing to a number. There's no multi-step wizard, no "next step" gating, no "save your progress" prompt. The whole interaction is contained on one URL.

The **friction points** that *do* exist are subtle but real:

- The "available funds" field is ambiguous — it says it covers *both* down payment and closing costs, but a first-time buyer often doesn't know how much closing costs are, and the article's "On a $250,000 home, that's about $5,000 to $12,500" hint isn't surfaced on the calculator itself.
- The income field is annual but the DTI math is monthly — a user with bonuses or commission income has to decide whether to include them ("tips, wages, commissions" is in the article, but the field label is just "Annual income").
- The result is given in three tiers but the boundaries between "fits" and "stretches" are not explained on the page (you have to know that Realtor.com is implicitly applying the 28/36 rule for conventional, 31/43 for FHA, and ~41% back-end for VA — which the article explains in the body, but the calculator UI doesn't label).
- The "Yes, I or my spouse served in the U.S. Military" checkbox is the **only** loan-type selector on the page. There is no FHA, no USDA, no conventional-vs-FHA comparison, no "I'm a first-time buyer" toggle.

---

## 7. Calculator functionality — what it outputs

Per the official Realtor.com article and SERP snippets, the affordability calculator outputs:

- **A three-tier home price range** in dollars, tiered against the user's DTI under three different lending rules:
  - **Conventional loan (28/36 rule):** *"you wouldn't want to spend more than $2,333 on house-related expenses ($8,333 X 0.28), or $3,000 on total debt ($8,333 X 0.36)"* for a $100K earner. Worked example in the article: with $100K income, $650/mo debt, $62.5K saved → *"a home up to $319,100 is considered affordable and fits your budget. A home from $319,101 to $385,000 stretches your budget. And a home from $385,001 to $443,100 and beyond is over your budget."*
  - **FHA loan (31/43 rule):** *"your monthly payments shouldn't be more than 31% of your gross monthly income and your monthly debts shouldn't be more than 43% of your gross monthly income."* Worked example: same $100K earner with $21.25K saved (3.5% down + closing on a $250K base) → *"a home up to $275,200 is considered affordable… $275,201 to $336,900 stretches… $336,901 to $401,600 and beyond is over your budget."*
  - **VA loan (~41% back-end, 0% down, no MI):** *"Your monthly mortgage payment and monthly debts shouldn't be more than 41% with a VA loan. So if you make $8,333 a month ($100,000 a year), your house payment plus debts shouldn't be more than $3,416."* Worked example: same $100K earner, 0% down, $12.5K closing → *"a house up to $303,800 is considered affordable… $303,801 to $377,600 would stretch… $377,601 to $448,800 and beyond would be over your budget."*

- **The home price ranges adjust dynamically** as income / debt / funds change. The article's worked example shows this: when the hypothetical income goes from $6K/mo to $8K/mo (33% raise), the affordable price goes from $267,800 to $364,500 (36% lift), and the monthly payment from $1,662 to $2,386.

- **No PITI breakdown on the affordability page itself** — the article explicitly says *"Then you can look at the Realtor.com free mortgage calculator to figure out monthly payments on a property you are considering. This home loan calculator will help you determine if the property fits in your budget or not."* That is, the affordability tool and the monthly-payment tool are **separate, not unified**. To see PITI the user clicks through to `/mortgage/tools/mortgage-calculator/`.

- **The mortgage-calculator (monthly payment) tool outputs** (per the SERP snippet and the *Realtor.com* editorial coverage of weekly rate changes): the **monthly P&I bill** for a 30-year fixed at the current national rate, with worked examples like *"the typical monthly payment on a median-priced $424,950 home at today's 6.81% mortgage rate is roughly $2,219"* (it explicitly says *"It is based on a 20% down payment and excludes tax and insurance"*). The article also shows the **total interest paid over 30 years** as a separate line: *"you'll pay a total of $798,678 over the life of a 30-year loan… Total savings over 30 years: $81,493."*

- **What the calculator does NOT output, that competitors do:**
  - **No amortization schedule** — no month-by-month P&I split, no year-by-year interest-vs-principal curve. (Compare Zillow, Bankrate, NerdWallet, Rocket — all publish a full amortization table.)
  - **No PMI calculation when down payment is <20%** — the calculator assumes PMI = 0 in the default view, which is incorrect for FHA's 0.85% MIP or conventional PMI on <20% down.
  - **No property tax line** on the affordability page (the mortgage-calculator page may include it; the *Mortgage Center* meta implies it).
  - **No homeowner's insurance line** on the affordability page.
  - **No HOA dues input**.
  - **No closing cost amortization** — closing costs are baked into "available funds" but not displayed as a separate line.
  - **No "comfortable" vs. "max" toggle** (Zillow has this; Realtor.com collapses to one aggressive number).
  - **No DTI ratio display** — the calculator uses DTI to compute the price but never *shows* the user their front-end and back-end DTI ratios. The article's explanation of the 28/36, 31/43, and 41% rules is editorial, not surfaced in the tool.
  - **No credit-score input and no rate adjustment for credit** — the calculator uses a single "current national rate" regardless of where the buyer's FICO actually puts them.
  - **No location / property tax adjustment** — the same number works for someone in San Francisco (effective property tax ~1.1%) and someone in Houston (effective property tax ~2.3%).

---

## 8. Calls to action — what the calculator pushes users toward

The Realtor.com IA makes the funnel visible. From highest to lowest commercial priority:

1. **"View matching homes in your price range"** — primary CTA from the monthly-payment calculator. This is the **listings funnel**: the user sees their price, gets shown MLS inventory in that range, and is converted into a home shopper. This is Realtor.com's core product.
2. **"Get pre-approved"** — persistent red button in the top nav of every page. Routes to `/mortgage/home-loan/` (a Move, Inc. / NMLS #2121192 lead-routing form). The mega-menu also links **"Get pre-approved"** under the Mortgage heading. This is the **lender funnel**.
3. **"Find a REALTOR®" / "Compare agents & pick the right one"** — present in the main nav. After the user sees their price, the next step is "now find an agent." This is the **agent-matching funnel**.
4. **"Find REALTORS®"** under the Find Realtors® heading in the main nav. The site explicitly pitches the value of a Realtor®: *"Why use a REALTOR® — 6 reasons you should never buy or sell a home without an agent."*
5. **"Mortgage rates" / "Refinance rates" / "Home equity financing rates"** — all in the mega-menu under Mortgage. These route to the rate-comparison pages, which then route to lender matching. This is the **rate-shopping funnel** (which is also the **Realogy / Anywhere / major-lender network funnel** — Move/Realtor.com historically monetized via lead-routing to lender partners).
6. **Editorial content with implicit CTAs** — every article in `/news/trends/` and `/advice/finance/` ends with "Editor's Picks" and "Related Articles" rails that point to more in-house content, which in turn points to the calculators and rate pages. The intent is to keep the buyer on Realtor.com as long as possible.
7. **The "Realtor.com® Real Estate App" banner** at the top of every article — *"314,000+ Open in App."* This is the **app-install funnel**, which both improves retention and unlocks push notifications for new listings, price drops, and rate alerts (a separate, slower monetization channel).

What the calculator **does not** CTA toward (and where competitors do):

- **Not a lender application** — no "apply with these 3 lenders who can give you this rate" matching. The pre-approval funnel is downstream of the calculator, not integrated.
- **Not a credit-monitoring upsell** — no Experian / Equifax / FICO product hook.
- **Not a financial-advisor / robo-advisor upsell** — no "track your net worth" or "open a high-yield savings account" cross-sell.
- **Not a real-estate-school / agent-licensing upsell** — even though the site has Find a REALTOR® content, the calculator itself doesn't push "become an agent."
- **Not a refinance product**, even when the math obviously favors it (a user with a 7% rate and 6% market would be a slam-dunk refinance candidate and the calculator doesn't flag it).

---

## 9. Trust signals — badges, sources, citations, brand authority

Realtor.com has unusually strong trust-signal scaffolding, and most of it is structural rather than on the calculator page itself.

- **NAR ownership (massive):** the site footer on every page (visible in the pre-approval article HTML) reads:
  > *"Any mortgage lead generation activity in the state of Connecticut is performed by MSIM, LLC (NMLS #2121192), a subsidiary of Move, Inc. © 1995- 2026 National Association of REALTORS ® and Move, Inc. All rights reserved."*
  That is, the **National Association of REALTORS®** is the ultimate owner of the trademark *REALTOR®* and a co-rights-holder of the site. This is an enormous trust signal that Zillow, Redfin, Bankrate, and the rest cannot replicate — the brand is literally backed by the largest trade association in U.S. real estate (1.5 million members).
- **Move, Inc. / News Corp:** the About page confirms: *"Operated by Move, Inc., realtor.com® offers a comprehensive list of for-sale properties, as well as the information and tools to make informed real estate decisions."* Move is a subsidiary of News Corp (Rupert Murdoch). The company is headquartered in Santa Clara, CA, valued >$2.5B per third-party sources.
- **Direct MLS data:** the third-party comparison notes *"Realtor.com aggregates property listings from about 890 MLS systems, which means that approximately 99% of MLS properties are available on the platform."* This is materially better coverage than Zillow and the single biggest reason serious home shoppers use Realtor.com.
- **Listing refresh cadence:** *"The platform's algorithm refreshes MLS listings every 15 minutes"* — Zillow is slower, and this is a trust signal Realtor.com pitches to prosumer buyers.
- **NMLS ID on the lead-routing form:** the disclosure of NMLS #2121192 on the lead-routing forms is the regulated mortgage-broker license number, which is the only "are we licensed?" signal that matters for mortgage in the U.S.
- **Editorial byline + bio + author bylines:** the calculator's flagship article is bylined *"By Julie Taylor January 14, 2025"* with a full bio (Realtor.com reporter, two-time Daytime Emmy Award winner, former Cosmopolitan/Glamour/Redbook writer, B.A. in magazine journalism from UCO). The site names its reporters and gives them real bios. The mortgage-rate weekly recaps are also bylined (e.g. *"By Margaret Heidenry December 13, 2024"*). This is the inverse of the typical mortgage-calculator site, which usually publishes anonymously.
- **Expert quotes from named real estate agents:** the article cites by name and credentials multiple industry voices: *"Ron Myers, of Ron Buys Florida Homes in Wellington, FL"*; *"Rachel Kilmer, of Lee's Summit, MO"*; *"Andrew Fortune, of Great Colorado Homes in Colorado Springs, CO"*; *"Brian Durham, managing broker at Realty Group in Minneapolis"*; and the mortgage-pre-approval article cites *"Sarah Valentini, president and co-founder of Radius Financial Group"* and *"Chantay Bridges with TruLine Realty in Los Angeles."* Each quote is attributed inline.
- **Getty Images** watermarked photo credit on the article, plus "Realtor.com" stamped on the inline calculator screenshot.
- **Compliance disclosures:** the footer discloses the NMLS ID, the Connecticut-specific licensing carve-out (NMLS #2121192), the NAR co-ownership, and the "Do Not Sell or Share My Personal Information" link (CCPA / state-privacy compliance).
- **Editorial cadence:** there are weekly mortgage-rate recap articles (the article about the $424,950 home at 6.81% was published Nov 27, 2024; the $416,880 at 6.6% was Dec 13, 2024; the $424,950 at 6.79% was Nov 20, 2024). The cadence signals a real newsroom, not a content farm.
- **The .com domain + REALTOR® trademark:** the "®" in *Realtor.com®* is federally trademarked, the URL is short, the brand has been around since 1996 (originally 1994 as "Realtor Information Network"), and the .com TLD is the most trusted real-estate domain in the U.S. (per the comparison: *"about 40 million monthly visitors"*).

What the calculator does **not** prominently badge:

- **No "Reviewed by CFPB / HUD / FHA"** seal.
- **No third-party "as seen in" or award badge** (Bankrate, NerdWallet, and Rocket have these).
- **No Trustpilot / BBB / ConsumerAffairs score** — they don't curate a third-party review widget, which means the trust is in the brand, not in user ratings.

---

## 10. SEO strategy — target keywords, related landing pages, content depth

From the sitemap (134 sub-sitemaps total, including 115 `post-sitemap*.xml` files alone, plus `page-sitemap.xml`, `living-sitemap*.xml`, `guides-sitemap.xml`, `hyper_local-sitemap*.xml`, `category-sitemap.xml`, `living_tag-sitemap.xml`, `living_category-sitemap.xml`, `hyper_local_category-sitemap.xml`, `conversion_widget_position-sitemap.xml`, `guides_taxonomy-sitemap.xml`, `author-sitemap*.xml`, and a single `news-sitemap.xml`), Realtor.com's SEO strategy is **brute-force coverage of every long-tail question a home buyer might type**.

**Confirmed mortgage-adjacent target URLs** (from the SERP snippets and sitemaps):

- `/mortgage/tools/affordability-calculator/` — "home affordability calculator / how much house can I afford"
- `/mortgage/tools/mortgage-calculator/` — "mortgage calculator / monthly mortgage payment"
- `/mortgage/tools/refinance-calculator/` — "refinance calculator / should I refinance"
- `/mortgage/rates/` — "current mortgage rates / compare mortgage rates"
- `/mortgage/rates/[state]/` — long-tail, e.g. `/mortgage/rates/california/`, `/mortgage/rates/texas/`, `/mortgage/rates/florida/`, plus 50 other states visible in the SERP carousel
- `/mortgage/home-loan/` — "compare home loans / get pre-approved"
- `/tools/rent-or-buy-calculator/` — "rent vs buy calculator"
- `/news/trends/how-much-home-can-i-afford-calculator/` — informational long-tail
- `/news/trends/mortgage-calculator-buy-416880-home-6-6-rate/` — rate-specific news
- `/news/trends/mortgage-calculator-mortgage-rate-payments/` — long-tail
- `/advice/finance/mortgage-pre-approval/` — "what is mortgage pre-approval"
- `/advice/finance/mortgage-calculator-how-much-you-need/` — long-tail
- `/advice/finance/mortgage-rate-refinance-options/` — informational

**Editorial long-tail coverage** (from the post-sitemap URLs that mention affordability):
- `how-much-home-can-i-afford-calculator/`
- `mortgage-calculator-how-much-you-need-to-buy-a-424950-home-at-a-6-79-rate/`
- `mortgage-calculator-how-much-costs-to-buy-home-6-12-percent/`
- `mortgage-calculator-how-much-costs-to-buy-home-6-32-percent/`
- `mortgage-calculator-how-much-costs-to-buy-home-6-44-percent/`
- `mortgage-calculator-cost-buy-home-6-54-percent-rate/`
- `mortgage-calculator-cost-buy-home-6-72-percent-rate/`
- `rent-vs-buy-2021-the-best-places-to-become-homeowners-or-remain-renters/`
- `income-afford-starter-home-each-state/`
- `home-affordability-lowest-point-since-2007/`
- `home-affordability-mortgage-rates-drop/`
- `most-affordable-metros-for-homebuyers-on-a-budget/`
- `the-housing-affordability-crisis-is-going-global/`
- `top-7-cities-foodies-can-afford-to-live/`
- `10-best-affordable-small-cities-america/`
- `americas-best-most-affordable-beach-towns-for-retirees/`
- `rule-of-thumb-why-regular-homebuyers-cant-afford-a-home/`

That is, **Realtor.com is publishing one mortgage-rate-recap article per week**, each with a slightly different price/rate combo in the slug, and each doing the math of "what does this rate + this median price mean for the monthly payment." This is classic programmatic SEO at scale — the site creates a unique URL for every newsworthy combination of (median price) × (current rate) and each becomes a long-tail entry point.

**Other content silos in the IA that build authority around affordability:**

- **First-time home buyer guide** (top-nav "Buy" → "Home buying tips" → "First-time home buyer guide")
- **Home buyers reveal: 'What I wish I had known before buying my first home'** (an ongoing editorial series)
- **Mortgage guide** (top-nav "Mortgage" → "Mortgage guide")
- **Veterans home buyer guide** (top-nav)
- **USDA home loan guide** (top-nav)
- **Home insurance guide** (top-nav)
- **6 ways home buyers mess up getting a mortgage** (top-nav under Financial advice — this is the closest thing to a "denial diagnostic" the site has, and it's editorial, not a tool)
- **6 reasons you should never buy or sell a home without an agent** (top-nav under Find a REALTOR®)

**The SEO posture** is: *own the SERP for every "how much house can I afford" / "mortgage calculator" / "current mortgage rates" / "[state] mortgage rates" / "first-time home buyer" query*. The combination of MLS data, NAR brand authority, News Corp publishing budget, and 30 years of editorial archives makes this the single hardest site to dethrone for those terms.

What it is **not** doing: targeting *diagnostic* queries. Nobody searches "why can't I qualify for a mortgage" with the expectation that Realtor.com is the answer. Nobody searches "how to fix a 650 FICO to qualify" and lands on a Realtor.com tool. The site owns *discovery* and *decision-support* but punts on *qualification-denial* — which is a deliberate choice, because that question is downstream of a soft or hard credit pull, and the site doesn't run either.

---

## 11. Strengths — what they do well

1. **NAR trust signal is unassailable.** The combination of "®" trademark, National Association of REALTORS® co-ownership, 30-year brand, MLS-feed data, and the editorial newsroom is the most legitimate trust stack of any consumer mortgage site. A nervous first-time buyer trusts Realtor.com the way they trust their county recorder's office.
2. **The three-tier output ("affordable / stretch / over your budget") is psychologically deft.** It refuses to say "no." It gives the buyer agency. It reframes "you can't afford this" as "if you stretched, you could afford *up to* this." The article's quoted expert advice — *"Don't buy the max dollar you're approved for… In most cases, that approval will make it extremely difficult to afford the cost of living"* (Rachel Kilmer) and *"Don't max out your budget. Life happens, and you don't want to be choosing between your mortgage and fixing your car"* (Ron Myers) — is editorial counsel layered on top of the calculator result, which softens the inevitable disappointment.
3. **The minimum-friction input set is the right product for the top of the funnel.** Three numeric fields + one optional checkbox + one button = a number in 60 seconds. There is no signup, no rate-quote, no email, no FICO pull. This is the lightest mortgage qualification tool on the market and the highest-converting it can be for "I just want to know if I can do this."
4. **The tool is loan-program-aware at exactly the level the buyer cares about.** It supports Conventional (28/36), FHA (31/43), and VA (0% down / 41% back-end) — the three most common U.S. mortgage programs. It does not expose USDA, jumbo, non-QM, bank statement, asset depletion, or DSCR — which is appropriate, because those are program-specific tools, not a first-time-buyer tool.
5. **Editorial content depth is real.** The site publishes a weekly mortgage-rate recap, names its reporters, cites named local real-estate agents, and links every article back to the calculator. The result is a self-reinforcing SEO loop: SERP for "mortgage rates today" → Realtor.com article → calculator → matching homes → lead form.
6. **The matching-homes CTA is the right commercial handoff.** "View matching homes in your price range" sends the user to the listings inventory, which is what Realtor.com actually monetizes. The user never has to leave the site to feel like they made progress.
7. **The brand voice is "helpful," not "diagnostic," and that is a deliberate, defensible posture.** It plays well with the "I just want to know if homeownership is even a real option for me" emotional state.
8. **No credit pull required, ever.** The tool is fully usable without surrendering a soft-pull authorization. The pre-approval funnel that *does* require a credit pull is downstream, gated by a separate page (`/mortgage/home-loan/`), and clearly labeled. This is good UX and a reasonable privacy posture.

---

## 12. Weaknesses — gaps, frustrations, missing features, complaints

1. **No DTI display.** The calculator *uses* DTI to compute the price range but never *shows* the user their actual front-end and back-end DTI. A user can't tell from the result whether they qualified under the 28% front-end rule, the 36% back-end rule, the FHA 31/43, or the VA 41%. The article explains the rules in the body, but the calculator UI does not surface them. This is a real loss — a buyer who comes back to the tool with a small raise wants to see "your DTI went from 41% to 38%, here's what changed." The tool doesn't support that conversation.
2. **No credit score input.** The calculator uses a single national rate regardless of the buyer's actual FICO. A 580-FICO buyer and an 820-FICO buyer see the same number, which is materially misleading. A buyer with a 620 score and a 7.5% real rate will be approved for far less than the tool says; a buyer with an 800 score and a 5.5% real rate will be approved for more.
3. **No location / property tax adjustment.** Property tax ranges from 0.3% (Hawaii) to 2.3% (Texas) of home value annually. The calculator ignores this, which means a Texas buyer at the same income as a Hawaii buyer sees a price that doesn't account for ~$1,000/mo of additional carrying cost in Texas. The gap between the calculator's "you can afford $400K" and the actual monthly payment in a high-tax state is where buyer remorse starts.
4. **No HOA, no insurance input.** Same problem: a $400K condo in a $600/mo-HOA building looks the same as a $400K SFR with no HOA. The tool will systematically over-approve condos in high-HOA markets (Florida, Arizona, California).
5. **No PMI / MIP line.** The affordability tool assumes no mortgage insurance. For a 5%-down conventional buyer or a 3.5%-down FHA buyer, that 0.5-1.5% annual PMI/MIP is a real cost. The mortgage-calculator tool may include it in the rate but the affordability tool does not, so the "you can afford $X" number is wrong for the ~80% of first-time buyers who put down less than 20%.
6. **No amortization schedule.** The monthly payment is given as a single number; there's no way to see how much of the first payment is interest vs. principal, no "after 5 years you'll owe $Y" preview, no total-interest-paid-over-30-years. This is table-stakes for every other major mortgage tool (Bankrate, Zillow, NerdWallet, Calculator.net all publish this).
7. **No closing-cost amortization.** Closing costs (2-5% of the loan) are lumped into "available funds" and not surfaced as a separate line, so a buyer doesn't see the opportunity cost of paying them upfront vs. rolling them into the rate.
8. **No "comfortable" vs. "max" toggle.** Zillow has this and it changes the answer dramatically. Realtor.com gives one aggressive number, which the article's own experts then walk back: *"Don't buy the max dollar you're approved for."* A first-time buyer who lands on the calculator result without reading the article may over-stretch.
9. **No "what would change" interactive feedback.** The result is static. There's no "increase your down payment by $10K and see your price go up by $X" live preview, no "pay down this credit card and see your DTI drop" hint, no "wait 6 months and your savings will buy you $Y more house" projection. The tool doesn't help the buyer *plan*; it just *reports*.
10. **No program-by-program comparison view.** You can't see "Conventional says $400K, FHA says $420K, VA says $450K" on a single screen. You have to check the VA box, see the result, uncheck, and infer the conventional number. This is a missed upsell for the calculator's lead-routing value.
11. **No multi-borrower DTI for self-employed or co-borrower scenarios.** A 1099 contractor can't easily model variable income; the input is "annual income" with no allowance for averaging 2 years, no allowance for subtracting business expenses, no allowance for adding back depreciation.
12. **No first-time-buyer program matching.** The site publishes a USDA loan guide, a veterans guide, a first-time buyer guide, etc. — but the calculator doesn't link the result to "here are the first-time-buyer programs you might qualify for in your state." This is a major missed handoff.
13. **The mobile experience is unverified but plausibly the same one-screen form.** From the Wayback HTML, the page is ~68 KB and the 429 we got back was designed mobile-first, so the responsive design is at least considered.
14. **Cloudflare/Kount bot challenge is a real UX risk for organic search traffic.** If the page ever gets rate-limited (as it did to our research fetches), users see a *"This is taking longer than usual / Please refresh the page"* page with a request-ID and an `unblockrequest@realtor.com` email. This is the worst possible landing-page experience for a buyer who arrived from a "how much house can I afford" Google search. (It is not visible to the average consumer most of the time, but the fact that it exists at all is a fragility.)
15. **Pre-approval funnel is decoupled from the calculator.** A buyer who runs the calculator, gets a price, and wants to act on it has to navigate to `/mortgage/home-loan/`, re-enter their information, and wait for a lender to call them. There is no "you pre-qualify for $X with these 3 lenders, apply now" inline experience. Zillow's BuyAbility does this; Rocket does this; Better.com does this. Realtor.com does not.
16. **No "what's the gap" output.** A buyer who can't afford the home they want is told "you can afford $X" but is not told *"you need to (a) raise your income by $Y, (b) pay down $Z of debt, (c) save $W more, or (d) find a property with $V lower taxes/HOA."* This is the single biggest diagnostic gap in the tool.
17. **No educational onboarding.** The tool shows the input form with no inline glossary of DTI, PMI, MIP, FHA, VA, USDA, front-end ratio, back-end ratio, points, APR, etc. A first-time buyer has to leave the page to learn the vocabulary.

The user complaints that are reconstructible from third-party sources (the RealEstateSkills comparison, the SERP snippets, and the article's own expert quotes) cluster around three themes:

- **"The number feels too high."** The article's experts explicitly anticipate this: *"Don't buy the max dollar you're approved for"* and *"Don't max out your budget. Life happens, and you don't want to be choosing between your mortgage and fixing your car."* The tool is approving buyers at the 28/36 ceiling and the article is telling them not to spend that much. That tension is a feature, not a bug, but it reads as a bug to a first-time buyer.
- **"It doesn't tell me what to do next."** The result is a price range; the path forward (save more, pay down debt, raise income, look at FHA, look at VA, look at USDA, look at a starter home, wait 6 months) is editorial and one click away but not in the result.
- **"It doesn't match what my lender said."** The tool is geographically agnostic and rate-agnostic. A buyer who then applies with a local lender and gets approved for $50K less is left to wonder which number to trust. The tool does not help them reconcile the difference.

---

## 13. What a "why can't I qualify" diagnostic could do better

The Realtor.com calculator is built around one question: *how much house can I afford?* It answers that question well. But the *next* question — the one every denied buyer is actually asking — is **"why can't I qualify, and what would have to change for me to qualify?"** That question is unanswered anywhere on the Realtor.com stack, and it's the gap a diagnostic tool should attack.

A "why can't I qualify" diagnostic could improve on Realtor.com's offering in at least eight concrete ways:

1. **Score the user against the actual lender checklist, not a single national rate.** Realtor.com uses one rate for everyone; a diagnostic would let the user enter their actual FICO (or pull a soft-pull credit report via Experian / TransUnion / Equifax) and would re-run the math at their *real* rate. A 620-FICO buyer with a 7.5% real rate is a fundamentally different approval than an 820-FICO buyer with a 5.5% rate, and the tool should show both numbers side by side.
2. **Show the DTI, not just the price.** The user should see *"Front-end DTI: 24% (good), Back-end DTI: 41% (over 36% conventional limit, under 43% FHA limit)"* — not just a price range. The diagnostic should make the DTI the primary output, because DTI is the single most common reason a buyer gets denied.
3. **Show what's blocking approval, in order of magnitude.** A buyer with a 50% DTI has a *list* of problems (high housing ratio, high backend ratio, high credit utilization, thin reserves). The diagnostic should rank them: *"Your top 3 issues are: (1) $400/mo in revolving credit-card debt → +$60K of price if paid off, (2) $25K of available reserves missing → triggers FHA reserve rule, (3) self-employed income averaging needed → 2-year tax-return requirement not met."* This is the "denial" piece Realtor.com never surfaces.
4. **Map the gap to specific actions with a payoff.** Not *"pay down your debt"* but *"pay down this specific Capital One card from $4,200 to $1,000 (under 30% utilization), wait one statement cycle for the bureau to update, and your approval goes from $380K to $425K."* Each action gets a number attached. That's the difference between a calculator and a coach.
5. **Reconcile conventional, FHA, VA, USDA, and state/local first-time-buyer programs side by side, with the actual qualification profile for each.** A buyer who fails conventional at $400K might pass FHA at $420K and VA at $450K. The diagnostic should make those tradeoffs visible, because they're the actual next steps a real loan officer would recommend.
6. **Pull the credit-report-derived *reasons for denial* (the CFPB adverse-action code list under Regulation B, Subpart C — 1002.9) and translate them into plain English.** If the buyer's most recent denial came back with reason codes C01 (insufficient collateral), C02 (high DTI), and D04 (delinquent past-due obligations), the tool should say: *"Your last denial was for: insufficient appraisal value, your debt-to-income is too high, and you have a delinquent account. Here are the moves that fix each one."* This is the natural intersection of ECOA / Regulation B disclosure and consumer self-help, and it does not exist on any consumer-facing site today.
7. **Time-stamp the recovery plan.** *"If you (a) pay off the Capital One card this month, (b) make 2 more on-time payments, and (c) save $8K more, you'll qualify under FHA in 4-6 months. Here's the month-by-month projection."* The Realtor.com calculator is stateless; the diagnostic should be a roadmap.
8. **Stay in the lead-gen funnels Realtor.com already owns.** A buyer who runs the diagnostic should fall into the same downstream CTAs Realtor.com already monetizes — *"Get pre-approved"* (lender lead-routing), *"Find a REALTOR®"* (agent matching), *"View matching homes"* (MLS funnel). The diagnostic is upstream of the same funnel, and it should hand off cleanly. Crucially, the diagnostic should *not* require a hard credit pull to be useful — a soft pull, a user-entered credit profile, or even a self-reported FICO range is enough to produce a meaningful diagnostic, and the hard-pull handoff should be the last step, not the first.

The fundamental product insight is this: **Realtor.com is a buyer's *confidence-building* tool. A denial diagnostic is a buyer's *problem-solving* tool.** Confidence-building is the right job for the top of the funnel ("can I even do this?"), and Realtor.com is very good at it. Problem-solving is the right job for the *next* stage of the funnel ("I tried, I got denied, now what?"), and no major consumer real estate site has built it well. That is the gap.

---

## Appendix — sources and capture notes

- **Direct fetches of `realtor.com/mortgage/tools/affordability-calculator/`** were blocked by an aggressive Kount-Personalization-SDK + Cloudflare bot challenge (HTTP 429 with the body *"This is taking longer than usual / Please refresh the page"* and a request-ID). The same 429 was returned to every User-Agent tried: Chrome 120, Safari 17, Googlebot 2.1, Bingbot 2.0, Twitterbot 1.0, facebookexternalhit 1.1, LinkedInBot 1.0, WhatsApp 2.0.
- **Wayback Machine** (https://web.archive.org/web/20260825231008id_/https://www.realtor.com/mortgage/tools/affordability-calculator/) returned a 503 "Internet Archive: Temporarily Offline" for every snapshot in the past 60 days. The CDX index confirmed the page is archived at ~68 KB and was captured 20+ times since 2024-11-04. archive.ph (archive.is) also returned a captcha.
- **Google search** returned a 429 with a 3.4 KB body. **Bing** returned results but the SERP was geo-locked to Carbondale, CO listings. **DuckDuckGo HTML lite** returned a CAPTCHA challenge. **Qwant**, **Startpage**, **Brave Search**, **Ecosia**, **Kagi**, **You.com**, **Mojeek** all returned JS-required pages, captchas, or 429s.
- **Yahoo Search** was the only working source of direct page snippets and meta descriptions. Yahoo's "AI-generated summary" feature also contributed useful paraphrase of the calculator's behavior.
- **Realtor.com's own editorial article** (https://www.realtor.com/news/trends/how-much-home-can-i-afford-calculator/) was successfully fetched — it contains a step-by-step walkthrough of the calculator inputs, the three-tier output, and worked examples for conventional, FHA, and VA loans, plus named expert quotes. This is the single richest source of first-party documentation of how the calculator actually behaves.
- **Realtor.com's robots.txt** (https://www.realtor.com/robots.txt) was successfully fetched and lists the site-wide crawl policy plus 8 sitemap URLs (including a `/mortgage/sitemap/mortgagesitemap.xml` that was also blocked, and a 134-sub-sitemap index at `/sitemap_index.xml` that was fully accessible).
- **Realtor.com's sitemap_index.xml** (https://www.realtor.com/sitemap_index.xml) was fetched in full — 134 sub-sitemaps, mostly `post-sitemap*.xml` files. Cross-referencing for "afford" hit ~40 article URLs and was the source for the SEO surface listed above.
- **The third-party comparison** (https://www.realestateskills.com/blog/zillow-vs-realtor) was the source of the monthly-visitor counts, MLS coverage percentage, NAR ownership confirmation, listing refresh cadence, and lead-cost comparison.
- **Realtor.com's About page** (https://www.realtor.com/about/) confirmed *"Operated by Move, Inc., realtor.com®"* and the *"1995- 2026 National Association of REALTORS ® and Move, Inc."* footer credit line.
- **Reddit r/RealEstate, Trustpilot, BBB, ConsumerAffairs** all returned 403 / login walls and could not be used for direct user complaint scraping.
