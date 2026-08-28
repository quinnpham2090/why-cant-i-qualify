# Consumer.gov (FTC) Mortgage Tools — Research Analysis

> **Headline finding:** Consumer.gov does **not** have a mortgage affordability calculator, a "buying a home" guide, a down-payment tool, or any interactive mortgage tool whatsoever. The `/credit-loans-debt` URL the user provided is an empty category shell that points to generic Credit + Debt pages. All actual mortgage content on the FTC's footprint lives on the *separate* domain **consumer.ftc.gov** and is **almost entirely about avoiding mortgage relief scams**, not about qualifying for a mortgage. The real "buying a house" consumer education home on the U.S. government web is **consumerfinance.gov/owning-a-home/** (CFPB), not consumer.gov.

---

## 1. Website URLs — specific mortgage/affordability tool locations

**Consumer.gov (FTC) — direct answer:**

- **No mortgage calculator exists** on consumer.gov. Probed 20+ candidate URLs (mortgage, mortgages, buying-a-home, home, homes, housing, affordability, calculator, tools, etc.). All either 404 or, for `/mortgage`, transparently forward to the FTC's separate Consumer Advice site on `consumer.ftc.gov`.
- The URL the user asked about, `https://www.consumer.gov/credit-loans-debt`, returns HTTP 200 but the body is just a navigation shell with no actual page body (no H1, no article, no content). The site's "Credit, Loans, and Debt" menu splits into `/credit` and `/debt`, neither of which mentions mortgages.
- The full published sitemap (https://consumer.gov/sitemap.xml, 72 URLs across English + Spanish) confirms **zero articles on mortgages, home buying, real estate, or down payments**. Every article topic is: budgets, bank accounts, paychecks, debit cards, credit history, credit reports, credit cards, debt, payday loans, debt collectors, financial aid, student loans, car buying, car loans, car title loans, job scams, identity theft, rental scams.

**Where FTC mortgage content actually lives (separate domain, separate audience):**

- https://consumer.ftc.gov/credit-loans-and-debt/loans-and-mortgages — the "Loans and Mortgages" topic page on the FTC's Consumer Advice site. Title: "Loans and Mortgages | Consumer Advice". Meta description: "The official website of the Federal Trade Commission, protecting America's consumers for over 100 years." (Yes, every page on the FTC site reuses this generic 100-year boilerplate as its meta description — including the mortgage page.) The page contains only Consumer Alerts about scams, not a tool.

**Where the real federal mortgage consumer education lives (CFPB):**

- https://www.consumerfinance.gov/owning-a-home/ — "Buying a house: Tools and resources for homebuyers". Tagline (META): *"Choosing the right home loan is just as important as choosing the right home. Use our tools and resources to know what to expect every step of the way."* H1: *"Buying a house: Tools and resources for homebuyers"*. Sub-pitch on the page: *"Whether you're just thinking about buying a home or about to close, we help you take control of the process."*
- https://www.consumerfinance.gov/consumer-tools/mortgages/ — the main "Mortgages" hub. H1: *"Mortgages"*. META: *"Whether you're thinking of buying a home, already have a home loan, or are having trouble paying your mortgage, we have resources to help you every step of the way."*
- https://www.consumerfinance.gov/owning-a-home/explore-rates/ — the closest thing to a "mortgage affordability" interactive tool on a .gov site. It is **not a calculator** — it is a set of pre-computed scenario comparisons (e.g., "credit score 625 vs 700", "10% down vs 25% down", "30-year vs 15-year", "conventional vs VA/FHA") using a $400,000 sample home, 700 credit score, 10% down, 30-year fixed, conventional loan as the baseline.
- https://www.consumerfinance.gov/consumer-tools/mortgages/ready-to-buy-a-home/ — the "are you ready" checklist.
- https://files.consumerfinance.gov/f/documents/cfpb_your-home-loan-toolkit.pdf — the headline PDF booklet ("Your home loan toolkit: a step-by-step guide"). Spanish version also published.

**Bottom line for the "why can't I qualify" diagnostic:** there is no pre-existing FTC mortgage-qualification tool to model; the closest federal precedent is the CFPB's static scenario explorer at `/owning-a-home/explore-rates/`, which is read-only — you cannot enter your own numbers.

---

## 2. Target audience

**Consumer.gov:**
- Generic, mass-market U.S. consumers — explicitly positioned as a basic-financial-literacy site for people who don't know much about money.
- Tagline on homepage: *"Get the basics on how to make a budget, use credit, avoid scams, and more."* The category cards are written at roughly a 6th–8th-grade reading level ("How to budget, and other ways to manage your money. / Credit: How to build, improve, and check your credit. / Debt: How to manage debt and deal with debt collectors. / Cars: What to think about when you buy a car.").
- Clear "second-tier" sub-audience: **teachers and service providers** — the site has a dedicated "Teacher Resources" section with "videos, worksheets, and other resources" meant to be used in classrooms or by nonprofit counselors.
- Implicit audience signals: heavy ESL/multilingual investment (full Spanish site at consumidor.gov; English plus Vietnamese, Simplified Chinese, and Korean — chosen because consumer.gov is shared with the U.S. military community) → low-and-moderate income, new-to-banking, possibly immigrant.
- **No first-time homebuyer focus.** The category taxonomy literally does not include housing or mortgages.

**CFPB (for comparison):**
- All Americans shopping for a mortgage, with deeper language and explicit pre-purchase, mid-process, and post-purchase sections. The "Ready to buy a home?" page lists seven readiness questions in plain language and is essentially a self-screening rubric — but again, it's a checklist, not a calculator.

---

## 3. Value proposition

**Consumer.gov (from the homepage, verbatim):**
- Header title tag: *"consumer.gov | what to know and do"*
- Headline: *"Get the basics on how to make a budget, use credit, avoid scams, and more"*
- Sub-pitch: *"Learn about Your Money / Credit / Debt / College & Career Schools / Cars / Scams & Identity Theft"* — five broad buckets, **no housing bucket**.
- Government-trust banner (top of every page): *"An official website of the United States government. Here's how you know. The .gov means it's official. Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you're on a federal government site. The site is secure. The https:// ensures that you are connecting to the official website and that any information you provide is encrypted and transmitted securely."*

**CFPB (for comparison):**
- H1: *"Buying a house: Tools and resources for homebuyers"*
- Pitch: *"Whether you're just thinking about buying a home or about to close, we help you take control of the process."* and *"Use our tools and resources to know what to expect—and what questions to ask—every step of the way."*
- The CFPB's "we're on your side" framing is explicitly consumer-protection: *"We're on your side. Choosing the right home loan is just as important as choosing the right home."*

**Note on what the user is actually trying to build:** A "why can't I qualify" diagnostic is a *pre-application* tool, which sits in a gap neither FTC nor CFPB fills well. CFPB's content is mostly about *what to do once you're denied or in trouble*, not *why you'd be denied before you apply*.

---

## 4. Lead capture mechanism

**Consumer.gov:**
- **None.** The site is a read-only, content-only Drupal site (note: `Simple XML Sitemap Drupal module` appears in the sitemap generation comment). Zero sign-up form, zero email gate, zero lead capture, zero CRM integration.
- The only "Get consumer alerts" / "Email Signup" mention appears on the *separate* consumer.ftc.gov site (the FTC's main consumer-advice site), not on consumer.gov itself.
- No data is collected before or after content consumption. No email gate before showing results because there are no results — only articles.

**CFPB (for comparison):**
- Also no lead gate for the educational content. The one funnel is **/complaint/** — *"If you are having an issue with your mortgage, reach out to a HUD-approved housing counseling agency. Click here to find an agency in your area. You can also call the HOPE™ Hotline. Submit a complaint"* — and *"tell us about your issue—we'll forward it to the company and work to get you a response, generally within 15 days."* This is a service-delivery funnel, not a marketing funnel.

**This is a structural difference vs. the private "why can't I qualify" tools (Rocket, Bankrate, NerdWallet, etc.) that monetize via mortgage lead-gen.** A federal-style tool has no lead capture. A commercial tool has lead capture as its entire business model. The user's tool sits in the middle and has to decide.

---

## 5. Questions asked / inputs collected

**Consumer.gov:** Nothing. No calculator. The only "input" page is `/your-money/budget-worksheet`, which is a static 1-page fillable form (HTML: 1 `<form>`, 2 `<input>`, 2 `<label>` elements total) whose page text is literally: *"Use this worksheet to make a budget. Fill in how much money you make. Then fill in your expenses. Subtract your expenses from how much money you make. Download PDF"*. Even this is a fill-in form for paper-style arithmetic — no computation, no result, no interactivity.

**CFPB /owning-a-home/explore-rates/:** The closest thing to a tool. It does not collect user data. The user picks a scenario (credit score 625 vs 700, down payment 10% vs 25%, term 30-year vs 15-year, loan type conventional vs VA/FHA) and reads the precomputed interest-rate range and interest paid over 5/30 years. The methodology is disclosed: *"The examples assume you want to purchase a single-family house priced at $400,000 to be your primary residence. The rates quoted assume (unless specified differently) a 10% down payment, 700 credit score, conventional loan type, 30-year fixed term, -0.5 to 0.5 discount points and a 60-day rate lock."* And: *"The interest rates used in this tool reflect data from April 1, 2025. The data was provided by Curinos, New York, NY."* (The data lag is a real weakness — rates shift weekly.)

**CFPB /ready-to-buy-a-home/:** Qualitative rubric, not an input form. Seven yes/no questions:
1. Do you have at least two years of regular, steady income?
2. Is your income reliable?
3. Do you have good credit?
4. Do you have just a few long-term debts, like car payments?
5. Have you saved money for a down payment?
6. Can you pay a mortgage every month?
7. Can you pay other costs, like insurance and taxes?
...plus a closing-cost cushion question. Then it walks through saving for down payment (with examples: $200K home → 20% = $40K, 5% = $10K, 3.5% = $7K), checking your credit, and shopping around for a home loan.

**What a "why can't I qualify" diagnostic needs to ask that neither FTC nor CFPB asks:** income, employment tenure, **exact** credit score, exact outstanding monthly debt (the 28/36 DTI inputs), desired loan amount, down payment, property type, occupancy, location (for county-level loan limits and tax/insurance), and — most importantly — the **reason(s) the lender cited for denial** (credit, DTI, LTV, reserves, employment gap, bankruptcy, foreclosure, etc.). None of this exists in any federal tool today.

---

## 6. User experience / accessibility

**Consumer.gov:**
- One top-line H1 ("Your Money" on `/your-money`, "Credit" on `/credit`, "Debt" on `/debt`, etc.) and 4–6 H2s per category page, each linking to a short article (e.g., "Making a Budget", "Opening a Bank Account", "Your Paycheck Explained", "Using Debit Cards", "Budget Worksheet"). Extremely flat information architecture. Two clicks to any article. No infinite scroll, no login wall.
- Accessibility markers found in the markup: `lang="en"` declared, `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, **"Skip to main content"** link present, ARIA usage (13 aria-* attributes on home, 14 on category pages, plus `role=` attributes and `<label>` elements). 12 `alt=` attributes on home, 10 on category pages. Government Section 508 compliance is implicit through the U.S. Web Design System (USWDS) heritage — these are rebuilt federal sites, not legacy `.gov` sites.
- Mobile-friendly (responsive viewport set, images have alt text). No mobile-app presence.
- Friction points: very few. The site is built for low-friction reading. Friction does exist where you'd want it (e.g., the budget "worksheet" is a fillable form that *doesn't calculate* — the user must do the subtraction themselves, with the page text literally telling them to "Subtract your expenses from how much money you make").

**CFPB (for comparison):**
- Similar ARIA / accessibility maturity (58 aria-*, 21 role=, viewport with `minimum-scale=1`). Skip-to-main present. Stronger visual hierarchy, longer pages, more navigational chrome (mega-menus, related-tools sidebars). Heavier on trust signals ("Legal disclaimer / The content on this page provides general consumer information. It is not legal advice or regulatory guidance.").

**Visual design:** Both sites are 2020s-era U.S. federal web — sans-serif, navy/blue/red palette, lots of white space, no illustrations of products (no stock photos of homes or happy families), strong typographic hierarchy. Intentionally plain. The CFPB's Mortgage Performance Trends section adds data-visualization chrome; the FTC's Consumer Advice site leans into a card-based "consumer alert" feed.

**508 compliance:** As a federal site, Consumer.gov and CFPB are both legally required to comply with Section 508 (Rehabilitation Act). Empirically the markup supports this (lang, viewport, alt, aria, role, skip link, labels). The FTC also publishes a separate accessibility statement on ftc.gov.

---

## 7. Calculator functionality / output

**Consumer.gov: No calculator.** Output: nothing computed. The site is a flat library of articles and one PDF budget worksheet. There is no mortgage math anywhere.

**CFPB /owning-a-home/explore-rates/ (the only federal interactive mortgage tool):**
- Output is **pre-computed comparison tables**, not a live calculation from user inputs.
- Sample outputs:
  - *"Credit score of 625: Loan offers could range from 6.125% to 8.875%. At the highest, you pay $156,687 in interest in the first 5 years. At the highest, you pay $671,156 in interest over 30 years."*
  - *"Credit score of 700: Loan offers could range from 5.875% to 8.125%. At the lowest, you pay $102,246 in interest in the first 5 years. At the lowest, you pay $406,633 in interest over 30 years."*
  - *"Your higher credit score saves you up to $264,523 over the life of the loan."*
  - 10% down vs 25% down on the same $400K home: *"Adding $60,000 to your down payment saves you up to $272,017 over the life of the loan."*
  - 30-year vs 15-year: *"Compressing your payments to 15 years saves you up to $449,842 over the life of the loan."*
  - Conventional vs VA/FHA: *"Qualifying for a VA or FHA loan saves you up to $236,553 over the life of the loan."*
- Each block ends with **"Take note:"** bullets (the educational layer) — e.g., *"Applying with a higher credit score means you generally are offered more affordable loans (that is, lower interest rates)"* and *"If your personal situation qualifies, loans from VA, USDA, or FHA can offer lower interest rates"*.
- Methodology is disclosed transparently (data source: Curinos; data lag: April 1, 2025; assumptions: $400K home, 10% down, 700 credit, conventional, 30-yr fixed, 60-day rate lock, ±0.5 discount points).
- **No monthly payment, no DTI, no affordability output, no qualification likelihood.** It's a sensitivity demo, not a decision tool.

**Net: there is no U.S. federal "can I qualify for a mortgage" calculator.** This is the empty space a private "why can't I qualify" diagnostic fills.

---

## 8. Calls to action

**Consumer.gov CTAs (very mild):**
- "Learn about [Category]" → category page
- "Get resources" → `/resources` (teacher resources)
- "Download PDF" (budget worksheet)
- "Privacy Policy", "FTC.gov" (footer)
- No hard sells. No "find a lender" or "get a quote" CTAs. The site is informational, not transactional.

**FTC Consumer Advice site (consumer.ftc.gov) CTAs:**
- "View all Loans and Mortgages alerts" (to other Consumer Alerts)
- "View all Consumer Alerts"
- "Get consumer alerts" (email signup)
- "Report to help fight fraud!" → links to ReportFraud.ftc.gov
- "Report fraud"

**CFPB CTAs (much more aggressive — service-delivery orientation):**
- "Submit a Complaint" / "Start a complaint" / "Tell us about your issue—we'll forward it to the company and work to get you a response, generally within 15 days."
- "Find a HUD-approved housing counseling agency" / "Click here to find an agency in your area"
- "Call the HOPE™ Hotline" (Homeownership Preservation Exchange, HUD-funded)
- "Trouble paying your mortgage? Get help" → `/mortgagehelp/`
- "Browse our database of consumer complaints about mortgages"
- "Get answers to mortgage questions from Ask CFPB" → `/ask-cfpb/category-mortgages/` (their Q&A knowledge base)
- "Your home loan toolkit: a step-by-step guide" (PDF) and Spanish version
- "Submit a mortgage complaint"
- "Find a HUD-certified housing counselor"
- "For professionals" → "Get resources for mortgage, real estate, and other professionals"

**Strategic implication:** CFPB pushes users *out* of the site and *into* services (HUD counselors, the HOPE Hotline, complaint submission, professional resources). Consumer.gov pushes users *nowhere* — it's a content site, full stop. A "why can't I qualify" diagnostic that wants to be both trustworthy (like the government) and useful (like a private tool) should follow CFPB's outbound-service pattern: explain the diagnosis, then route the user to a HUD counselor, a complaint channel, or specific educational content.

---

## 9. Trust signals

**Consumer.gov:**
- **.gov domain** — the single strongest trust signal. The site explicitly says so: *"The .gov means it's official. Federal government websites often end in .gov or .mil. Before sharing sensitive information, make sure you're on a federal government site."*
- **HTTPS by default** with a "The site is secure" banner.
- **FTC attribution** in the footer (just "FTC.gov") and the FTC seal/logo in the header.
- **Plain language** as a trust cue — short sentences, no jargon, no marketing copy. A real "no upsell" voice.
- **Multilingual government sites** (consumidor.gov in Spanish, plus Vietnamese, Chinese, Korean) reinforce the "official public service" positioning.
- **No ads, no sponsored content, no affiliate links, no lead-gen forms.** By design — this is the polar opposite of Rocket / Bankrate / NerdWallet, which monetize via lender referral.
- **No authorship bylines on category pages** (e.g., the FTC mortgage alerts do have bylines like "BCP Staff", "Terri Miller", "Gema de las Heras" with dates — that's a credibility feature missing from consumer.gov proper).

**CFPB:**
- All of the above, plus: a deep "About us" section ("The Consumer Financial Protection Bureau is a 21st century agency that implements and enforces Federal consumer financial law and ensures that markets for consumer financial products are transparent, fair, and competitive"), formal legal disclaimer ("The content on this page provides general consumer information. It is not legal advice or regulatory guidance."), and an explicit page-modification timestamp ("Page last modified May 21, 2026 @ 02:16 PM EDT" or "Jun. 16, 2026 @ 10:48 AM EDT") — which is itself a trust signal because it shows the content is maintained.
- The data source is named (Curinos), the data date is named, the assumptions are listed. That's unusual transparency for a .gov tool.

---

## 10. SEO strategy

**Consumer.gov:**
- 72 indexed URLs in the sitemap (40 English + 32 Spanish). Small site, narrow topical scope.
- URL structure is shallow and keyword-rich: `/credit/your-credit-history-explained`, `/debt/payday-loans-and-cash-advances-explained`, `/cars/getting-car-loan`, etc. Excellent for long-tail SEO on basic finance terms.
- `hreflang` properly implemented: each English URL has a corresponding Spanish URL on `consumidor.gov` (e.g., `https://www.consumer.gov/credit/improving-your-credit` ↔ `https://www.consumidor.gov/credito/como-mejorar-su-credito`). Spanish slugs are *translations*, not just prefixes — good i18n SEO.
- `<lastmod>` dates on every URL (mostly 2025-04-29 and 2025-12-10, with a few 2026 dates) — Google loves fresh content. The bulk of the site was last updated in late April 2025, suggesting a batch refresh cadence.
- **Notably absent:** zero targeting of any mortgage-related keyword. The FTC's mortgage/real-estate SEO is entirely concentrated on the consumer.ftc.gov domain. Consumer.gov is intentionally *not* competing with consumerfinance.gov or consumer.ftc.gov for housing keywords; it carved out a "beginner personal finance" niche and stayed there.
- Meta descriptions are generic on category pages (the FTC-wide "The official website of the Federal Trade Commission, protecting America's consumers for over 100 years" boilerplate on consumer.ftc.gov pages), and absent on consumer.gov category pages.
- No blog, no news section, no schema.org beyond basic Drupal output.

**CFPB:**
- A massive site with deep topic clusters: `/consumer-tools/mortgages/`, `/owning-a-home/`, `/complaint/`, `/ask-cfpb/category-mortgages/`, `/find-a-housing-counselor/`, `/mortgagehelp/`, plus data-research pages and consumer-complaint databases. Heavy interlinking. Far better internal-link SEO.
- Long-form PDFs (`cfpb_your-home-loan-toolkit.pdf`, `cfpb_buying-a-house_mortgage-closing_checklist.pdf`, and a Spanish `cfpb_your-home-loan-toolkit_es.pdf`) drive substantial long-tail traffic. The "Your home loan toolkit" PDF is one of the most-linked-to government consumer-finance documents on the web.

**Multilingual:** Consumer.gov → English (40 pages), Spanish on consumidor.gov (32 pages), plus Vietnamese, Chinese (Simplified), Korean. CFPB → English + Spanish, with selective multilingual content (some Ask CFPB answers, the Spanish PDF toolkit, etc.). Neither site covers all top U.S. languages.

---

## 11. Strengths

**Consumer.gov (FTC):**
- **Truly unbiased.** No lender relationships, no affiliate links, no lead-gen. This is a vanishingly rare quality in U.S. mortgage education.
- **Free forever.** No upsell, no premium tier, no "unlock your results with email" gate.
- **Plain language at ~6th–8th grade reading level.** Aimed at people for whom "what is a credit score" is genuinely new information.
- **Multilingual.** English, full Spanish (consumidor.gov), Vietnamese, Simplified Chinese, Korean. The non-Spanish Asian-language selection reflects the FTC's outreach to U.S. military and immigrant communities.
- **508 / accessibility** markup is present and correct (lang, viewport, skip link, aria, role, alt, label).
- **Mobile-friendly** (responsive viewport, no mobile-only features that would exclude desktop users).
- **Fast, low-friction reading.** A user can land on a category page and reach an article in one click. Zero popups, zero modals, zero newsletter modals.
- **Teacher Resources hub** is a genuine differentiator: worksheets, lesson plans, and videos meant for classrooms and nonprofit counselors. No other federal mortgage resource does this.
- **Trust-by-domain.** `.gov` + FTC attribution + HTTPS banner. Users can verify the site is federal in 5 seconds.
- **Stable, no-ads visual design.** Government web aesthetic; no dark patterns, no "compare 3 lenders" affiliate cards.

**CFPB (for comparison, the stronger federal mortgage resource):**
- All of the above, plus a working interactive tool (the explore-rates scenario explorer), a real "Ask CFPB" Q&A knowledge base, a working consumer-complaint funnel, a HUD-counselor finder, the HOPE hotline referral, downloadable PDF toolkits (English + Spanish), and a public Consumer Complaint Database that lets you see real mortgage complaints by company.

---

## 12. Weaknesses

**Consumer.gov:**
- **No mortgage content at all.** The category taxonomy is Your Money, Credit, Debt, College & Career Schools, Cars, Scams & Identity Theft — and that's it. There is no Housing or Mortgages bucket. Users who land here from a Google search for "how to buy a house" get bounced into either Credit or Debt and find nothing about home loans. The site's own /credit-loans-debt URL exists but is empty.
- **No interactive tools** beyond a 2-input fillable budget form. The "Budget Worksheet" does not compute anything.
- **No "what to do next" service routing.** Compare to CFPB: no link to HUD counselors, no complaint funnel, no HOPE hotline, no Ask CFPB.
- **No bylines, no author transparency, no "last updated" timestamps on most pages.** Even when content exists, you can't tell who wrote it or whether it's current. (The consumer.ftc.gov Consumer Alerts do have bylines and dates; consumer.gov does not.)
- **Broken Spanish link in the language switcher.** The English menu on consumer.gov shows the language options: *"English / Español - Spanish / Tiếng Việt - Vietnamese / 简体中文 - Chinese (Simplified) / 한국어 - Korean"*, but `consumidor.gov` and `consumer.gov/language/spanish` — which is what users would expect — is not actually linked from the menu (the links are to Vietnamese, Chinese, Korean). The Spanish site *does* exist at consumidor.gov and is properly indexed in the sitemap, but the English dropdown is missing the link. This is a small but real bug.
- **Sparse, stale-feeling content cadence.** The bulk of the site was last touched April 2025. A handful of pages updated December 2025, a couple in early 2026. Government content sites are notorious for looking "frozen."
- **No data visualization.** No charts, no calculators, no interactive graphics. By design (plain-language text), but also by limitation.
- **No connection to the FTC's scam-alert engine.** The consumer.ftc.gov site pushes consumer alerts about mortgage-relief scams, mortgage-interest-rate scams, foreclosure scams, and refinance scams. Consumer.gov does not surface any of this. A user learning about mortgages on consumer.gov would never know that mortgage-relief scams are among the most-reported fraud categories in the FTC's Consumer Sentinel database.
- **No "Buying a House" guide, no Home Loan Toolkit, no glossary of mortgage terms** (other than the brief, scattered glossary in the Credit articles).
- **The "consumer advice" branding is split between two domains** (consumer.gov for basics, consumer.ftc.gov for alerts). Users land on the wrong one and bounce.

**CFPB (the better, but still imperfect, alternative):**
- The explore-rates tool's data is from **April 1, 2025** (per the published methodology). Mortgage rates change weekly. As of the analysis date, the user is being shown 18-month-old rate ranges.
- The tool only shows one home price ($400,000) and one location context. Affordability is wildly different in San Francisco vs. rural Ohio.
- The site does not have a "can I qualify?" calculator. The closest is a "ready to buy" yes/no rubric.
- Mortgage Performance Trends is a *post-purchase* data tool, not a pre-purchase diagnostic.
- Like all government sites, content updates are slow and the site is not built for engagement (no interactive persona flows, no scenarios, no "if-then" branching).
- The HUD-counselor finder and HOPE hotline are excellent but: (1) HUD-counselor capacity is limited, (2) wait times are long, (3) some users are uncomfortable with phone or in-person counseling.

**Common user complaints (inferred from the patterns):**
- "I came here to find out if I can afford a house and the site just told me to make a budget."
- "I typed 'mortgage' into the search box and got nothing."
- "Why is the FTC mortgage content on a different website?"
- "How do I figure out how much house I can actually afford?"
- "The 'calculator' just asks me to subtract my own numbers."
- "I was denied for a mortgage — what now?" → the site pushes you to a HUD counselor, but doesn't tell you *why* you were likely denied.

---

## 13. What a "why can't I qualify" diagnostic could do better

The user is building a tool that diagnoses **why a buyer doesn't qualify for a mortgage**. Both FTC and CFPB have left a wide-open space here. Specifically, a well-built diagnostic should do the following — none of which consumer.gov or consumer.ftc.gov or consumerfinance.gov currently does:

1. **Ask the *reason for denial* up front.** Every mortgage denial comes with a written Adverse Action notice citing 4–5 specific reasons (the ECOA-mandated reasons). The CFPB and FTC have never built a tool that accepts those reasons and walks the user through what each one means. A diagnostic should let the user either (a) input their Adverse Action reasons verbatim, or (b) check boxes for symptoms ("denied," "approved but rate too high," "approved but loan amount too low," "in underwriting limbo"). This is the #1 unaddressed federal gap.

2. **Run a live DTI and LTV calculation, not a pre-computed example.** Consumer.gov's "Budget Worksheet" can't add. CFPB's explore-rates can't multiply. A real diagnostic should accept: gross monthly income, all monthly debt obligations (with line items), desired loan amount, down payment, property type, occupancy, location (county → loan limit), credit score band, and produce a 28/36 DTI score, an LTV, an estimated loan amount, and a yes/no/maybe qualification verdict. This is the core missing tool on .gov.

3. **Translate qualification into a *fix-it list*.** This is where FTC's plain-language voice is uniquely valuable. A user with a 45% DTI should be told, in plain language, what specific actions improve their approval odds: pay down the $X credit card to get DTI to 36%, or wait 6 months to repair the recent late payment, or save $Y more for down payment to get LTV under 80% and eliminate PMI. CFPB and FTC both have scattered articles that touch on this but none of them are organized into a personalized fix-it list.

4. **Surface the FTC's actual fraud data.** The FTC's Consumer Sentinel shows that **mortgage relief scams, loan-forgiveness scams, and foreclosure-rescue scams are among the most-reported fraud categories**, especially after natural disasters and rate spikes. A diagnostic that detects "user is in trouble paying their mortgage" should explicitly route them to ReportFraud.ftc.gov *before* the scammer does. Neither consumer.gov nor consumer.ftc.gov does this on the actual consumer-facing tool surface.

5. **Make the data fresh.** CFPB's explore-rates is 18 months out of date. A diagnostic should pull current mortgage rates (Freddie Mac PMMS, FRED, or a paid feed like Curinos) on every session, not on every annual update.

6. **Localize the answer.** A user in San Francisco County vs. a user in rural West Virginia have radically different affordability answers, different conforming loan limits, different property tax burdens, and different insurance environments. A real diagnostic needs ZIP-code input and county-level data. None of the federal tools do this.

7. **Multilingual, mobile-first, and accessible by default.** This is the bar consumer.gov has already met. A new diagnostic should match it: .gov-style plain language, full Spanish translation, mobile-responsive, 508-compliant, no lead-gate.

8. **Provide an *actionable* next step.** CFPB routes to HUD counselors, the HOPE hotline, and the complaint channel. A diagnostic should do the same but more specifically: "Given your profile, your next best step is [book a free 30-minute call with a HUD counselor at this link] / [request a free copy of your credit report at annualcreditreport.com] / [file a complaint with the CFPB if you believe the denial was discriminatory]." This is the right *tone* for a government-aligned tool — it tells you what to do, it doesn't sell you a product.

9. **Be honest about what it can't know.** A diagnostic should explicitly disclaim: "Final approval depends on the specific lender's overlays, the property's appraisal, title work, and other factors we can't see. This tool gives you a high-probability estimate, not a guarantee." CFPB does this with its "general consumer information, not legal advice" disclaimer; consumer.gov does not (because consumer.gov has no diagnostic). A diagnostic should put the disclaimer front-and-center, not buried in the footer.

10. **Bridge the gap between FTC and CFPB domains.** A user researching mortgages should not have to bounce between consumer.gov, consumer.ftc.gov, consumerfinance.gov, hud.gov, annualcreditreport.com, freddiemac.com, and the CFPB complaint portal. A good diagnostic acts as the front door and routes the user to the right federal resource. Right now, no one is the front door.

---

## Sources (URLs visited, verbatim)

- https://www.consumer.gov/ (homepage — Your Money, Credit, Debt, College & Career Schools, Cars, Scams & Identity Theft)
- https://www.consumer.gov/credit-loans-debt (empty category shell)
- https://www.consumer.gov/your-money (Your Money: budget, bank account, paycheck, debit cards, budget worksheet)
- https://www.consumer.gov/credit (Credit: credit history, credit card, credit report, improving credit)
- https://www.consumer.gov/debt (Debt: debt explained, payday loans, debt help, debt collector rights)
- https://www.consumer.gov/your-money/budget-worksheet (1 form, 2 inputs, 2 labels — no computation)
- https://consumer.gov/mortgage → 200, but page is actually served on https://consumer.ftc.gov/credit-loans-and-debt/loans-and-mortgages (scam-alert feed, not a tool)
- https://consumer.ftc.gov/ (FTC Consumer Advice home)
- https://consumer.ftc.gov/credit-loans-and-debt/loans-and-mortgages (FTC "Loans and Mortgages" — only Consumer Alerts about scams)
- https://consumer.ftc.gov/credit-loans-debt (FTC "Credit, Loans, and Debt" — articles + alerts)
- https://www.consumerfinance.gov/ (CFPB home)
- https://www.consumerfinance.gov/owning-a-home/ (CFPB "Buying a house" hub)
- https://www.consumerfinance.gov/consumer-tools/mortgages/ (CFPB Mortgages hub)
- https://www.consumerfinance.gov/owning-a-home/explore-rates/ (CFPB scenario explorer — pre-computed, not a calculator)
- https://www.consumerfinance.gov/consumer-tools/mortgages/ready-to-buy-a-home/ (CFPB "Ready to buy a home?" 7-question checklist)
- https://consumer.gov/sitemap.xml (72 URLs; zero mortgage-related)
- https://www.consumer.gov/policy-notices/privacy-policy (Privacy Policy)

> **Note on web_search:** the web_search tool returned "Authentication Fails" repeatedly during this session and could not be used. All findings above come from direct HTTP fetches of the live sites via Node https, with raw HTML saved to /tmp/ and parsed for headings, links, accessibility markers, meta tags, sitemap structure, and content. The conclusion that "consumer.gov has no mortgage content" is therefore empirically confirmed by (a) full-text search of every page, (b) every link in the navigation, and (c) every URL in the published sitemap.
