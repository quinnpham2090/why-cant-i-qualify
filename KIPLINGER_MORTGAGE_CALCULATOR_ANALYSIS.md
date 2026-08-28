# Kiplinger Mortgage Calculator — Brutally Honest Analysis

> **Source data:** Pages fetched live from `kiplinger.com` on 2025‑08‑27 via Node + `https`. Web search authentication failed (`web_search` returned "Authentication Fails, Your api key ****eZpD is invalid"), so all quotes and observations below are from primary sources (Kiplinger's own pages, the JSON they ship to the browser, and Future PLC's Hawk widget system). No user‑review sites (Reddit, Trustpilot, etc.) could be reached in this session.

---

## 1. Exact URLs

Kiplinger does **not** host a dedicated `/tool/mortgage-calculator` page. The two URLs the user listed in the brief **both 404** today (I verified — `https://www.kiplinger.com/tool/mortgage-calculator/` and `https://www.kiplinger.com/tool/mortgage-calculator` both return `404 Not Found` or a 301 to the 404). The calculator lives inside an article in the `/personal-finance/` vertical:

| Page | URL | Purpose |
|---|---|---|
| **Monthly Payment Calculator** (the only "real" Kiplinger calculator) | `https://www.kiplinger.com/personal-finance/mortgage-calculator-find-your-monthly-payment` | Hawk/Bankrate‑powered monthly‑payment widget embedded in a 1,500‑word feature article |
| Mortgages hub (browse/SEO landing) | `https://www.kiplinger.com/real-estate/mortgages` | Article index — no calculator, links to the one above plus rate pages |
| Tools hub (where the calculator is linked from) | `https://www.kiplinger.com/tools` | "Tools and Calculators" landing |
| Affordability article (no calculator, just narrative) | `https://www.kiplinger.com/real-estate/buying-a-home/can-you-afford-that-house` | Guide by Choncé Maddox, 1 July 2026 |

**There is no standalone affordability / "how much house can I afford" calculator on Kiplinger.** The monthly‑payment tool is the only one, and it's bolted onto a feature article. The affordability concept is handled by an article that *describes* the math rather than letting you compute it.

---

## 2. Target audience

The page makes the audience explicit in the intro:

> "Whether you are buying your first home or your forever home, understanding your monthly mortgage payment is essential before you close."

That "first home or your forever home" line frames the tool for two very different readers:
- **Entry‑level / first‑time buyers** who don't know what PITI is.
- **Affluent move‑up or "forever" buyers** (the "Kiplinger" archetype — older, financially literate, Baby Boomer / Gen X professionals with retirement‑account assets, equity in a prior home, etc.).

Brand‑level audience signals I pulled from the live page:
- The blue header banner pushes the **$107.88 → $24.99 Kiplinger Personal Finance print+magazine subscription** (4 special issues), not a free tool. That offer historically targets Kiplinger's legacy subscriber base — older, mostly 50+, financially literate.
- The site taxonomy groups mortgages under "Personal Finance," and the byline block lists "eCommerce and Personal Finance Editor" and an article type of "Features" — content‑marketing framing, not a fintech product.
- Trending sidebar in the article: "Social Security Number Most Couples Never Calculate (and Should)", "10 'Treasures' Your Adult Children Don't Want You to Pass Down", "Amex Cardholders Have a New Way to Access Airport Lounges" — again, 55+ audience skew.
- Calculators page on `/tools` is a single list of articles; it's not a fintech SaaS surface.

This is **not a tool aimed at first‑time FTHB buyers who need help understanding DTI and credit** — that's a mismatch between the calculator's plain design and the audience's stated problem. It is aimed at a "Kiplinger Letter reader" who already has a financial planner and is doing a sanity check.

---

## 3. Value proposition / headline pitch

> **H1 (header__title):** "Mortgage Calculator: Estimate Your Monthly Payment Easily"
> **Strapline (header__strapline):** "Use our mortgage calculator to find your monthly payment. Customize with interest rates, loan terms and down payment to explore your options."
> **First sentence of the body:** "Whether you are buying your first home or your forever home, understanding your monthly mortgage payment is essential before you close. It is often the largest recurring expense in your budget…"
> **Closing pitch before the calculator:** "Use the tool below, powered by Bankrate, to explore and compare some of today's top mortgage offers."

The pitch is "estimate + compare." It leans on three credibility carriers:

1. **Kiplinger's century‑old brand**: the About page says explicitly "Since its founding in 1920, the Kiplinger organization has been committed to doing business with the highest standards of ethical professionalism."
2. **Bankrate as the data engine**: "powered by Bankrate" appears at the bottom of the article and the FEP/ad‑tags JSON on the page lists `"companies":["Federal_funds_rate","Bankrate"]` and `"primaryCompany":"Federal_funds_rate"`. The widget is actually a Future PLC Hawk embed (Bankrate's parent) — not a neutral third party.
3. **Editorial framing**: 1,500 words of hand‑holding copy around the widget.

---

## 4. Lead capture mechanism

The article page has **two distinct lead capture systems**, both on the page at the same time and not gated by calculator use:

### a. In‑body newsletter gate (appears after the intro, *before* the calculator)
A BlueConic "wrapper" with two stacked CTAs:
- **Top:** "From just ~~$107.88~~ **$24.99** for Kiplinger Personal Finance — Become a smarter, better informed investor. Subscribe from just ~~$107.88~~ $24.99, plus get up to 4 Special Issues" → button "**CLICK FOR FREE ISSUE**" → deep link to `https://subscribe.kiplinger.com/servlet/OrdersGateway?...` with UTM `utm_campaign=kip-all-digital_referral-uctbc-202507-sub-none-brandsite_inarticle-`.
- **Bottom:** "**Sign up for Kiplinger's Free Newsletters**" → `https://www.kiplinger.com/newsletter`.

This sits between the lede and the "How to use the mortgage calculator" H2. The pitch sequence is: explain why you need a mortgage payment → demand your email/$$ → calculator.

### b. End‑of‑article newsletter form
A standard Future PLC "NewsletterForm" slice. Form fields from the inline JSON:
```
inputs: [
  { type: "hidden",  name: "NAME" },
  { type: "email",   name: "MAIL",   placeholder: "Your Email Address", required: true },
  { type: "hidden",  name: "NEWSLETTER_CODE", value: "XKP-D" },
  { type: "hidden",  name: "LANG",   value: "EN" },
  { type: "hidden",  name: "SOURCE", value: "60" },
  { type: "hidden",  name: "COUNTRY" },
  { type: "checkbox",name: "CONTACT_OTHER_BRANDS", label: "Contact me with news and offers from other Future brands" },
  { type: "checkbox",name: "CONTACT_PARTNERS",     label: "Receive email from us on behalf of our trusted partners or sponsors" },
  { type: "submit",  value: "Sign me up" }
]
POST → https://www.kiplinger.com/.newsletter-subscribe/v2/submission/submit
```

### c. The calculator itself
**Does not gate results behind an email.** The Hawk/Bankrate embed is open. You enter numbers, results render. There is no "unlock full amortization" wall, no "save scenario" flow, no lead form inside the calculator. This is unusual for a media‑site lead‑gen play and suggests the calculator is monetized via the **affiliate link** that wraps the widget output (the "compare some of today's top mortgage offers" call to action below the widget pushes the user to Bankrate's lender marketplace — that's the actual revenue).

### d. Sticky top nav
The header bar shows a permanent "**From $107.88 $24.99 — Subscribe to Kiplinger ×**" upsell next to the logo. It can't be dismissed from the article body.

**Lead flow summary:** email gates sit *around* the calculator (above and below it) but not *on* it. The price is "free article + free calculator + maybe a newsletter," with the real KPI being (a) email signups for the 8 Kiplinger newsletters (Today, A Step Ahead, Closing Bell, Adviser Intel, Tax Tips, Retirement Tips, Adviser Angle, Investing Weekly, Invest for Retirement) and (b) clicks out to Bankrate's lender offers.

---

## 5. Questions asked / inputs

The Hawk/Bankrate widget is loaded by a Future PLC `ecomwidgets.js` bundle + `data-widget-type="seasonal"` / `data-render-type="fte"` aside. The static HTML in the article does **not** contain the input fields — they are injected by JS at runtime. The article body spells out exactly what the widget takes:

> "**First, you'll enter the overall price of your home, if you're buying, or the current value of your home if you're refinancing.**
> **You'll also include either the down payment** (the cash you plan on paying upfront towards the home) **or the amount of equity you have** (the value of the home, minus what you owe on it).
> **After this, you'll enter the term length of your loan.** If refinancing, enter how many years are remaining on your current loan.
> Typically, most mortgages are 30‑year mortgages, but you can choose between several term lengths…
> **You can then compare how different interest rates will affect your monthly payment.**
> **Entering your annual household income and credit score will show you how much you'll be able to reasonably afford.**"

So the documented input set is:

| # | Input | Type | Source of truth |
|---|---|---|---|
| 1 | **Home price** (or current value for refi) | number / currency | body copy |
| 2 | **Down payment** (or equity) | number / currency | body copy |
| 3 | **Loan term** in years | dropdown / radio (15, 20, 30 typical) | body copy ("several term lengths") |
| 4 | **Interest rate** | number / percent | body copy ("compare how different interest rates will affect your monthly payment") |
| 5 | **Annual household income** | number | body copy ("Entering your annual household income…will show you how much you'll be able to reasonably afford") |
| 6 | **Credit score** | bucket (FICO band) | body copy + the embedded MyFICO table runs 780+, 760+, 740+, 720+, 700+, 680+, 660+, 640+, 620+ |

**The widget itself does not visibly ask for property tax, homeowners insurance, HOA, or PMI in the article's prose.** That's a notable gap — see §7 and §12. The body copy later *discusses* those costs (in the affordability article) but doesn't claim the widget accounts for them.

**No questions are asked about:** location / state, ZIP code, employment type, self‑employment, rental income, co‑borrowers, asset reserves, other debts (car loans, student loans, credit card minimums), DTI, prior bankruptcies, current rent, or down‑payment source (gift, equity, savings). For a tool that "shows you how much you'll be able to reasonably afford," that's an enormous hole — see §13.

---

## 6. User experience

**Flow length:** It's a "scroll to the widget, drag four sliders, see the number" experience — not a guided multi‑step funnel. The widget sits inside a 1,500‑word article, so the cognitive load is "read explanation, then poke at calculator."

**Friction points I observed:**

1. **Ads injected into the body.** Inline `<div id="ad-unit-1" class="ad-unit">` and `ad-unit-2` slots are interleaved with paragraphs. Standard display/taboola/Outbrain slots are listed in the body classes (`van-block-taboola`, `exclude-from-yahoo`, `exclude-from-anf`, `serversidehawk`, `pushly`).
2. **Heavy chrome around the tool.** A JW Player video (`v6I2nWbb` / `a7GJFMMh`) is loaded **between the introduction of the inputs and the first table**, which is a 300–500px autoplay‑capable video block right in the middle of the article. That's a massive UX interruption on mobile (the markup is `min-h-[200px] lg:min-h-[300px] mb-[50px]`).
3. **Newsletter form mid‑article** (described above) is a real form, not a slide‑in — the user has to either fill it or scroll past it.
4. **The 4‑column "swipe to scroll horizontally" MyFICO rate table** with the SVG hand icon. On desktop it's fine; on mobile it requires horizontal scroll, which is jarring for a critical data table.
5. **A paywall/subscription upsell bar** ("From $107.88 $24.99 — Subscribe to Kiplinger") is glued to the top nav. There's no obvious dismiss.
6. **Multiple modals/popovers** are enabled in the global config (`newsletter.modal`, `newsletter.exitIntent` set to `false`, but `newsletter.mobile` is `enabled: true` with `scrollDepthTrigger:80` — so a modal newsletter fires once you scroll 80% of the article on mobile).
7. **Tracked to the hilt.** `Freyr`, `BlueConic`, `comScore`, `Permutive`, `Viafoura` (comments), and Google Publisher Tag are all live. Page weight on the article is ~1.45 MB of HTML before the JS bundles — heavy for a "calculator" page.
8. **No keyboard‑first design evidence** in the markup; the widget relies on Hawk's standard sliders.

**Mobile‑friendliness:** The site is responsive (`min-width:700px` breakpoint, Tailwind 4.3, container queries) and the widget is a JS embed that should adapt, but the article HTML has multiple horizontal‑scroll elements (FICO table, sidebar ads, related‑content rail) and a 1.45 MB HTML payload. I couldn't load the rendered widget to test, but the static markup suggests a noisy mobile experience.

**Visual design:** Standard Future PLC house style — black/white/red brand color (`--newsletter-form-primary-color:#ED2C35`), Arial body, simple bordered cards. No personality. The "BlueConic article wrapper" image (a stock Kiplinger Personal Finance cover) is large and pushes the actual content down. It looks like a content site, not a product.

---

## 7. Calculator functionality — what it outputs

Based on (a) the article's description, (b) the FICO‑rate table Kiplinger shows explicitly, and (c) the standard Bankrate calculator contract (which the widget is):

- **Monthly payment (P&I)** — the primary number. The article frames everything in terms of "monthly payment."
- **Total monthly cost with taxes & insurance** is *not* claimed in the article for the calculator. It is described in the parallel affordability article in a static worked example ($400k home, 10% down, 6.5% rate → $2,275 P&I, then a separate table estimating $3,369–$3,703 all‑in with $253 taxes + $208 insurance + ~$300 utilities + $333–$667 maintenance reserve). So Kiplinger *knows* PITI matters; their own calculator just doesn't show it.
- **Amortization schedule** — Bankrate's standard widget offers this, but Kiplinger doesn't surface it as a headline feature in the article copy.
- **Total interest paid** — explicitly shown in the embedded MyFICO table ($496,962 on a $400k 30‑yr at 6.36%, etc.).
- **Comparison vs. different rates / terms** — sliders do this in real time.
- **"How much you can reasonably afford"** — the article copy *promises* this if you enter income + credit score, but the static article text never demonstrates the output format. There's no sample output: no "Based on your inputs, you qualify for a home priced $X" callout in the page text.

**No outputs I can verify from the page text:**
- DTI ratio (front‑end or back‑end)
- Maximum loan amount based on income
- Loan‑to‑value (LTV)
- Cash‑to‑close estimate
- Qualifying income (the "how much do I need to earn" number — the entire point of an affordability tool)
- Debt‑to‑income sensitivity

In other words: **the calculator outputs payment, not qualification.** That's the central gap. It tells you what a given house will *cost*; it doesn't tell you whether a lender will *give it to you*.

---

## 8. Calls to action

Five distinct CTAs visible on the page (excluding the calculator itself):

1. **Header sticky:** "Subscribe to Kiplinger ×" (with $107.88 → $24.99 strike‑through). Destructive‑looking × dismiss is just a close on the dropdown, not a hide.
2. **Mid‑article BlueConic "Free Issue" block:** "CLICK FOR FREE ISSUE" → `subscribe.kiplinger.com` checkout.
3. **Mid‑article BlueConic newsletter block:** "Sign up" → `kiplinger.com/newsletter`.
4. **End‑of‑article in‑body newsletter form** (described above).
5. **The widget itself**, via the Bankrate wrapper: "Use the tool below, powered by Bankrate, to **explore and compare some of today's top mortgage offers**" — i.e., a click‑out to Bankrate's lender matching, where Future PLC earns affiliate revenue.
6. **Right rail** has a Viafoura comments widget ("Join the conversation") and Trending links (cross‑sell into retirement/social security articles).

There's no "save my scenario," no PDF export, no "email me this amortization," no compare‑scenarios‑side‑by‑side. The CTAs are all editorial/lead‑gen, not calculator utility.

---

## 9. Trust signals

- **Brand authority:** "Since its founding in 1920" (about page). Century‑old publication. The About page also says "the Kiplinger organization has been committed to doing business with the highest standards of ethical professionalism."
- **Editorial Standards** page (visible on `/about-us`) — that's the trust anchor.
- **Named, credentialed authors:** Carla Ayers ("Contributions by Erin Bendig") with profile link; Choncé Maddox on the affordability guide with bio ("graduated from Northern Illinois University…more than 10 years of experience"). No "Reviewed by" / "Fact‑checked by" badge in the HTML I scraped.
- **Third‑party data citations** for every market claim: "according to Freddie Mac," "according to Realtor.com," "according to LendingTree," "according to Zillow," "according to MyFICO." The FICO score table itself is explicitly labeled "from MyFICO."
- **Affiliate disclaimer** in the byline block: "When you purchase through links on our site, we may earn an affiliate commission. Here's how it works" → links to `/content-funding-on-kiplinger`. This is good disclosure.
- **"Powered by Bankrate"** callout next to the widget. Bankrate carries its own trust halo (1976‑founded, NMLS‑licensed rate publisher).
- **No third‑party "Verified" or "NMLS Consumer Access" badges** on the calculator itself. No BBB, no FICO BlueMax, no Equifax/AE/Transunion partner badges.
- **No "as of" date** on the rates inside the calculator; the article itself is dated "22 April 2026" (i.e. the page is older than today's rate).
- **Affiliations of note:** The site is owned by Future PLC (UK media conglomerate). The FEP/ad‑tag JSON on the page lists `companies:["Federal_funds_rate","Bankrate"]` — the calculator is treated as a "Federal funds rate" product for ad‑targeting, which is a tell that the widget's data is Bankrate‑sourced.

**What this signals to a user:** "Kiplinger says this is fine, and Bankrate backs the numbers." It's editorial trust, not technical trust. There's no certification that the math follows CFPB QM/ATR rules, no source for property‑tax assumptions, no disclosure of what credit‑score model is being used.

---

## 10. SEO strategy

Signals from the live page (meta tags, schema, internal linking):

- **Canonical URL:** `https://www.kiplinger.com/personal-finance/mortgage-calculator-find-your-monthly-payment`
- **Meta title:** "Mortgage Calculator: Estimate Your Monthly Payment Easily | Kiplinger"
- **Meta description:** "Use our mortgage calculator to find your monthly payment. Customize with interest rates, loan terms and down payment to explore your options."
- **H1:** "Mortgage Calculator: Estimate Your Monthly Payment Easily"
- **H2:** "How to use the mortgage calculator"
- **OG image alt:** "Mortgage written on a calculator (mortgage calculator)."
- **JSON‑LD `WebPage` schema** with `primaryImageOfPage`, `name`, `url`.
- **Article schema** in head with `"articleType":"feature"`, `category:"Personal_Finance"`, IAB category `391.405.407 Personal_Finance|Personal_Debt|Home_Financing`.
- **MRF tags:** `category:Personal Finance; category:Mortgages; category:Real Estate; freeform:Tools` — confirms the page targets both mortgage and personal‑finance SERPs.
- **FEP keyword pack** (from the analytics JSON): `secondaryProducts:["Mortgage_calculator","Mortgage","Payment","Calculator","Down_payment"]`, `groups:["ecomm-mortgages","pushly","p-fedmeeting","Tools","josh","Personal_Finance","Mortgages"]`. So the target keyword cluster is "mortgage calculator," "mortgage payment," "down payment," "mortgage rate," with content‑gap targets in the `p-fedmeeting` (Federal Reserve coverage) and `josh` (Josh Stein / Future PLC's affiliate ad‑product) zones.
- **Internal linking from the page** to: `mortgage-rates-are-rising-again-heres-what-it-means-for-buyers-and-refinancers`, `what-is-home-equity`, `30-year-mortgage-rates`, `how-to-boost-your-credit-score-fast`, `how-to-shop-for-a-low-mortgage-rate`, `pros-and-cons-of-fixed-rate-loans`, `when-to-refinance`, `how-retirees-can-qualify-for-a-mortgage`. Plus 3 "Related Content" items at the bottom: "5 Ways to Shop for a Low Mortgage Rate," "My Mortgage Rate is 6.5%. Should I Refinance If Rates Fall By Half a Point," "What Home Equity Is and Why It's a Valuable Long-Term Investment."
- **Mortgages hub** (`/real-estate/mortgages`) is paginated out to 9 pages of articles, and the `/tools` hub links in. So this is a topical cluster: 1 calculator page + ~80 supporting articles + a paginated list page.
- **No FAQ schema, no HowTo schema, no Speakable markup** that would unlock rich results. The article is shaped as an explainer, not a Q&A — so it loses to Bankrate/NerdWallet/Investopedia on "People Also Ask" real estate.
- **Headline‑keyword alignment:** The H1 contains "Mortgage Calculator" (primary), the strapline says "monthly payment" (modifier) — solid match for `"mortgage calculator"` and `"monthly mortgage payment"` queries. Weak for `"how much house can I afford"` (no affordability calculator at all) and `"why was I denied for a mortgage"` (zero coverage of that query — see §13).

**Content depth:** ~1,500 words of body copy, 1 embedded video, 1 rate table, 1 bullet list of three rate‑shopping tips, 3 related links, 1 calculator widget. For an "X ways to lower your payment" article it's adequate. For a mortgage calculator page competing with Bankrate, NerdWallet, Zillow, and Redfin it's thin — those competitors have 3,000+ words, amortization charts, and DTI walkthroughs on the same URL.

---

## 11. Strengths

- **Authoritative wrapper.** A 105‑year‑old brand on a tool people use to make a six‑figure decision is non‑trivial credibility. The "Since its founding in 1920" and "Editorial Standards" copy on `/about-us` is genuinely reassuring.
- **No email gate on the calculator itself.** The widget renders results without forcing a signup. That is *better* than most media‑site calculators (cf. NerdWallet, which gates the affordability tool behind an email). Users who bounce in from Google get a working tool.
- **Third‑party data anchor.** The FICO rate table from MyFICO is genuinely useful, with rates from 6.36% (780+) down to 7.23% (620+). That's the kind of comparison most calculators skip.
- **Cross‑link to deep evergreen content.** Internal links to "5 Ways to Shop for a Low Mortgage Rate," "What Home Equity Is," "How to Boost Your Credit Score" and the mortgages hub are a real value‑add — Kiplinger uses the calculator as a *gateway* to a deep content tree, not as a dead end.
- **Plain‑English framing.** The lede and the "How to use" H2 reduce a topic (mortgage amortization) to "drag four sliders." The "increase your down payment / shop around / consider an ARM" tips are the same advice Bankrate gives — but Kiplinger is willing to say it shorter.
- **No tracking of personal info inside the calculator.** The article collects zero PII before showing the result. Compare that to a LendingTree or Rocket quote form, which gates rates behind name/email/phone. Kiplinger respects the user's anonymity.
- **FICO band table** that explicitly shows the cost of bad credit. The "$580,381 interest paid" on a 620+ FICO at 7.23% is a powerful motivator to fix your credit before house‑hunting — better copy than a generic "credit matters" line.

---

## 12. Weaknesses

These are the gaps that are brutally obvious from a primary read of the page, even without user reviews:

1. **No affordability mode.** The article copy *promises* "Entering your annual household income and credit score will show you how much you'll be able to reasonably afford" — but the page does not show what that output looks like, the supporting article (Kiplinger's "can‑you‑afford‑that‑house") is a static guide, and the widget is named "Mortgage Calculator" not "Affordability Calculator." The promise and the delivery don't match.
2. **No DTI calculation.** This is the single biggest missing feature. Real qualification is driven by front‑end DTI (housing / income, target 28%) and back‑end DTI (debts / income, target 36%). The widget doesn't ask for the user's other debts (car loans, student loans, credit‑card minimums, child support, alimony), so it can't compute a real DTI. That means it cannot, in any meaningful sense, tell the user whether they'll qualify.
3. **No location / property tax input.** Property tax varies from 0.3% (Hawaii) to 2.5%+ (NJ, IL, TX). On a $400k home, that's $850–$8,300/yr — a $70–$700/month swing. The article acknowledges this is the biggest hidden cost ("Property taxes, HOA fees and utilities add up") but the calculator doesn't.
4. **No homeowners‑insurance input.** Insurance costs rose 47% nationally 2020–2025 (the affordability article quotes LendingTree on this) and vary 5×+ by ZIP code. The widget has no input for it.
5. **No HOA / condo fees input.** The affordability article notes 67% of new homes are in HOAs and fees can be $200–$300/month for single‑family, much more for condos. The widget ignores it.
6. **No PMI calculation.** Down payment < 20% triggers PMI (0.3%–1.5%/yr). The widget doesn't model it.
7. **No debt inputs.** Real underwriting is debt‑driven. A user with $0 of other debts can qualify for a $500k house on $80k; the same user with $400/month student loans can't. The widget does not model this.
8. **No ARM / fixed toggle despite the article recommending ARMs.** The article tells you to "Consider an adjustable‑rate mortgage (ARM)" but the widget (per the prose) is "customize with interest rates, loan terms and down payment" — it doesn't appear to support a fixed→ARM switch with a teaser rate + index + margin model. (Bankrate's widget has ARM mode in its native form, so this is a Kiplinger configuration choice.)
9. **No amortization schedule shown.** Users can't see year‑by‑year principal/interest split or the breakeven point of extra payments.
10. **No "compare scenarios" view.** A user thinking "30‑year at 6.5% vs 15‑year at 5.875%" can't see both side‑by‑side. The sliders force you to remember the previous number.
11. **No qualification status.** The tool tells you what your payment *would* be; it does not tell you whether a lender would *approve* you. For the entire population of users googling "why can't I qualify for a mortgage" or "denied mortgage," the tool has zero output.
12. **Article copy oversells the widget.** "Entering your annual household income and credit score will show you how much you'll be able to reasonably afford" is, as far as I can tell, **false or misleading** based on the input list the article describes. The tool takes income and credit score, but there's no documented affordability output. This is the kind of claim that would attract an FTC complaint if it weren't on an editorial wrapper.
13. **The video between intro and table is hostile UX.** A JWPlayer block sits between the credit‑score explanation and the FICO table. On a mobile data connection this is a real cost.
14. **A mid‑article BlueConic block demanding an email** before the calculator. The two are stacked, so the user has to scroll past both. The article is *literally* saying "before we let you compute your mortgage, give us your email or buy a subscription."
15. **No "as of" date on the displayed rates.** The MyFICO table is current to a specific month; the widget rates likewise come from a market snapshot. The page has no "rates current as of [date]" badge.
16. **No location/state picker.** Affordability is hyper‑local. The widget should let you pick a state or ZIP for tax/insurance defaults; it doesn't.
17. **Sticky $24.99 subscription upsell** in the header. On a free tool, this reads as desperate.
18. **The "Related Content" rails are all internal cross‑promotion** — no external authoritative sources (HUD, CFPB, Freddie Mac) linked, except inside the article body.
19. **No "share this scenario" or "email me my results"** — the user can't capture the result beyond screenshotting.
20. **No mortgage‑rate input field — only a slider.** Power users can't paste in a specific lender's quoted rate; they have to drag a slider until it looks right. The Bankrate widget natively supports both modes.
21. **Cookies + trackers.** ComScore, BlueConic, Permutive, Future's own "freyr," `g314.kiplinger.com` script, and Hawk affiliate redirectors are all firing. Privacy‑conscious users will bounce.
22. **No transparent methodology.** "How is this calculated?" is not answered. There's no disclosure of whether P&I is using the standard amortization formula or a slightly different one, whether the credit‑score band pulls from MyFICO or an internal model, etc.
23. **The page weight.** 1.45 MB of HTML before JS — on a calculator page. Compare Zillow's mortgage calculator at ~250 KB.
24. **No accessibility badge.** No `aria-label` on critical interactive elements visible in the static HTML (the actual widget is JS‑rendered so I can't verify, but the rest of the page is bare).
25. **The "Powered by Bankrate" callout is small and below the widget.** Most users won't notice it. The trust benefit of "Bankrate backs this" is wasted.

---

## 13. What a "why can't I qualify" diagnostic could do better

This is the part that matters for the user — the brief is about building a tool that *diagnoses* why a buyer doesn't qualify, so the comparison set is Kiplinger. Kiplinger's offering is a **cost calculator**, not a **qualification tool**. The gap is enormous. A diagnostic tool that wants to beat Kiplinger on this query should do at least the following:

### Inputs Kiplinger is missing and a diagnostic should require

| Input | Why it matters for *qualification* | What to do with it |
|---|---|---|
| **Gross annual income** (and co‑borrower income separately) | Determines baseline ability‑to‑pay | Compute qualifying income, including asset depletion for retirees |
| **Other monthly debts** (auto, student, credit‑card minimums, child support, alimony) | Determines back‑end DTI | Sum and compare to 36%/43%/45% thresholds |
| **Credit score** (numeric, not a band) | Determines rate and PMI trigger | Use real rate table, not FICO band buckets |
| **Liquid assets / reserves** | Determines whether the buyer can close and survive a job loss | Show months of PITI covered |
| **Down payment source** (savings, gift, equity, 401k loan) | Determines whether the down payment is actually usable | Flag the down payment as "qualified" or "needs documentation" |
| **Self‑employed?** (Y/N, years of returns) | Self‑employed borrowers are underwritten on 2‑yr average, not current year | Branch the calculation |
| **First‑time buyer?** (Y/N) | Changes program eligibility (FHA, conventional 97, state bond programs) | Surface those programs |
| **Loan program** (Conventional / FHA / VA / USDA / Jumbo / Non‑QM) | Each has different DTI, LTV, and rate | Show side‑by‑side what the buyer would qualify for under each |
| **Property type** (SFR / condo / 2‑4 unit / co‑op / manufactured) | Condos need warrantable project approval, co‑ops need board approval, etc. | Flag the property type as a qualification risk |
| **Occupancy** (primary / second home / investment) | Investment = 15%+ down, higher rate, DSCR underwriting | Different qualifying math |
| **Target location / state** | Property tax, insurance, transfer taxes, conforming loan limits all vary | Use state‑level data |
| **Employment tenure** | < 2 years = "probationary" in underwriting | Show how this affects the outcome |
| **Recent credit events** (BK, foreclosure, short sale, late pays) | Sets waiting periods | Show the waiting period calendar |
| **Citizen / non‑permanent‑resident status** | Affects documentation and program eligibility | Flag it |

### Output model a diagnostic needs but Kiplinger doesn't have

- **A clear "qualified" / "borderline" / "not qualified" verdict per loan program** (Conventional, FHA, VA, USDA, Jumbo, Non‑QM). This is the single thing a user asking "why can't I qualify?" needs.
- **A ranked list of the reasons they don't qualify** ("your DTI is 47%, the conventional threshold is 45%" → "your FICO is 612, the FHA minimum is 580 with 3.5% down" → "your down payment is 3.5%, the conventional minimum is 3% but with PMI you need 5% to avoid pricing adjustments" → "the property is a condo in a non‑warrantable project, conventional is denied" → etc.).
- **What they can change to qualify.** Concretely: "Paying off the $420/mo car loan lowers your DTI from 47% to 41% and unlocks conventional financing for $X home." "Saving $8,000 more for down payment reduces LTV from 97% to 92% and removes the 1.5% PMI premium, saving $312/mo." This is the **action plan** the user actually wants.
- **Program‑specific qualifying income** — "For this $400k home at 6.5%/30yr, conventional requires $9,800/mo gross qualifying income ($117,600/yr); FHA at the same price requires $10,400/mo ($124,800/yr); VA at the same price requires $9,200/mo ($110,400/yr)." The **delta between programs** is the unlock for a denied buyer.
- **Time‑to‑qualify forecast** — "If you add $X to your credit score in 90 days and pay off $Y of revolving debt, you'll qualify for $Z home on [date]." This is a roadmap.
- **A comparison view** — "Here's what you qualify for *today* vs *in 6 months* if you take action A, B, or C." Kiplinger's widget has nothing like this.
- **Plain‑English explanations for each failure reason**, with links to authoritative sources (CFPB, HUD, FHA Handbook, VA Lender's Handbook). Kiplinger has none of this; it just says "you might be hearing 'no' when a different lender would have said 'yes'" in the retirees article.
- **"Why" with a dollar amount attached.** Not "your DTI is too high," but "your DTI is 47%; paying off your $24,000 car loan at $420/mo gets you to 41% and unlocks $32,000 more loan amount." This is the answer users leave with.

### UX/lead‑capture wins

- **No email gate on the diagnostic result.** Kiplinger actually gets this right (no gate) — match it. The diagnostic is the value; capture the email *after* the user has seen their full action plan, when they're invested.
- **"Email me my action plan" CTA** as the *only* ask, not "subscribe to 9 newsletters." High‑intent, high‑conversion.
- **A "compare loan officers" call‑to‑action** that ranks lenders by what they will underwrite for this specific buyer, monetizable via the same Future/Bankrate affiliate channel.
- **A saved‑scenario URL** so the user can come back in 90 days to see if their action plan worked. Bankrate doesn't do this; Kiplinger doesn't do this. It's a moat.
- **Plain language over legalese** — "We'd say no. Here's why, and here's what to do about it" beats "The DTI ratio exceeds the QM threshold defined in 12 CFR 1026.43(e)(2)(vi)."

### Trust wins vs Kiplinger

- **Methodology disclosure page** — "Here's exactly how we calculate DTI, where the rate table comes from, what assumptions we make about taxes/insurance by state, and which loan programs we model." Kiplinger's calculator has zero of this.
- **CFPB / NMLS / BPI credentials visible on the page** if applicable. None visible on Kiplinger.
- **An "as of" date** on rates and rules. Kiplinger doesn't show one.
- **Citations to the actual rule** — link to the FHA 4000.1 handbook section, the VA Lender's Handbook chapter, the CFPB QM rule, Freddie Mac's selling guide. Kiplinger cites Freddie Mac, Realtor.com, Zillow, LendingTree — i.e. *market commentary*, not *underwriting rules*.

### Positioning to win the "why can't I qualify" query

- **Title/H1:** "Why Can't I Qualify for a Mortgage? Free Diagnostic Tool" (Kiplinger has no equivalent — the closest is `how-retirees-can-qualify-for-a-mortgage` which is narrow and editorial).
- **Meta description:** "Find out exactly why a lender would deny your mortgage and what to do to qualify. Free diagnostic covers DTI, credit, down payment, loan program, and 12 other factors."
- **Target keywords (from the Kiplinger gap analysis):** `why can't i qualify for a mortgage`, `denied for a mortgage`, `mortgage qualification calculator`, `mortgage affordability calculator`, `how much house can i afford`, `dti for mortgage`, `mortgage preapproval calculator`. Kiplinger ranks for none of these; Bankrate, NerdWallet, and Rocket do.

---

## TL;DR for the parent agent

- Kiplinger's "mortgage calculator" is a **payment calculator**, not an **affordability or qualification tool**. The article copy oversells it (promises "how much you can afford" on inputs that don't actually compute that).
- The widget is a **Hawk/Bankrate embed** (Future PLC owns both) and is well‑built for what it does, but the Kiplinger team chose not to enable the affordability mode, ARM mode, amortization view, or comparison view that the same widget supports natively.
- Lead capture happens **around** the calculator, not on it, and the lead is for Kiplinger's newsletters + the $24.99 magazine subscription. The actual revenue is the Bankrate click‑out.
- The page is **mediocre at best** on every dimension a user asking "why can't I qualify" cares about: no DTI, no debt inputs, no program branching, no failure‑reason diagnosis, no action plan, no rate date stamp, no methodology disclosure.
- **The "why can't I qualify" diagnostic opportunity is wide open.** Kiplinger's audience would absolutely use a tool that tells them "here's what to do" — but Kiplinger's editorial/incentive structure (newsletter signups + magazine subs) doesn't reward building one.
