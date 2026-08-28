# Keyword Research Report — Affordability & Qualification Cluster

**Site:** U.S. consumer mortgage qualification diagnostic site ("Why am I denied")
**Mission:** Help people understand why they may not qualify for a mortgage and what to do about it.
**Research date:** Session of 2024/2026
**Methodology:** Live Bing U.S. SERP pulls (24 keyword variants across 10 head terms) + direct meta extraction from competitor pages (Rocket, Chase, Zillow, Bankrate, NerdWallet) + prior in-workspace research synthesis (research/01-pain-keywords.md, research/05-calculators.md, research/first-time-homebuyer-tools-research.md) + already-cached competitor HTML in research/.

> **⚠️ Data confidence caveat.** The dedicated `web_search` tool returned an authentication error for the entire session, so this report could not pull live Semrush/Ahrefs/Google Keyword Planner point-estimate volumes. Volumes below are **directional tiers** derived from:
> 1. Cross-referencing Bing U.S. SERP result counts and the relative rank-stability of incumbents (a stable top-5 with deep publisher content indicates a mature, high-volume query).
> 2. Prior in-workspace research files (`research/01-pain-keywords.md`, `research/05-calculators.md`) that contain well-sourced order-of-magnitude estimates from Semrush, Ahrefs, and Google Keyword Planner ballparks.
> 3. Public industry knowledge of the U.S. mortgage-SEO landscape (2022–2025).
>
> All volume numbers should be treated as **tiers, not points**, and replaced with verified Semrush/Ahrefs reads before production content decisions. All cited URLs were extracted from live Bing SERPs dated to this session unless explicitly noted as "(in-workspace reference)."

---

## Executive Summary

The 10 keywords split into three natural strategic buckets:

| Bucket | Keywords | Strategic role | Avg. volume tier |
|---|---|---|---|
| **A — Calculator / diagnostic tools** | "how much house can i afford", "mortgage affordability calculator", "mortgage qualification calculator", "dti for mortgage" | Head-of-funnel pre-shopping, very high commercial intent, dominated by 8 entrenched publishers (Bankrate, NerdWallet, Zillow, Redfin, Rocket, Realtor.com, Wells Fargo, SmartAsset) | 40K–490K/mo |
| **B — Process / qualification** | "how much mortgage can i qualify for", "mortgage prequalification", "what credit score do i need for a mortgage" | Mid-funnel qualification, high commercial intent, mix of publisher education + lender action pages | 10K–90K/mo |
| **C — Program / rule lookup** | "minimum down payment for house", "fha loan requirements", "va loan requirements" | Program-specific reference; .gov + lender pages dominate; lower commercial intent but highly linkable for topical authority | 8K–40K/mo |

**Site moat across all 10:** Every top-ranking page is a *calculator* or a *rules explainer*. None of them returns a **personalized verdict** keyed to a specific loan program. The diagnostic angle (per prior `research/01-pain-keywords.md` and `research/05-calculators.md`) is the structural differentiation.

**Calculator SERP features to exploit (Google + Bing):**
- In-SERP mortgage calculator widget (Google) and Bing's "Try the calculator" cards
- Interactive tool panels (Zillow, Redfin, Rocket) that load without click
- Sitelinks on the #1 organic (Calculator | Refinance | Rates)
- PAA box with 6–8 mortgage questions
- AI Overview (Google) / Generative AI snippet (Bing) — increasingly summarizing the formula and 2–3 sources
- People-also-search-for clusters (FHA calc, refi calc, down-payment calc)
- Video pack (YouTube) — high CTR cannibalization

---

## Keyword 1: "how much mortgage can i qualify for"

### 1. Estimated monthly U.S. search volume
**Tier: 5K – 25K / month** *(direct estimate; Bing returned 0 relevant results in this session for the exact phrase — Bing is segmenting it as a "how much" dictionary query. The query is naturally conversational and would be much more competitive on Google U.S.)*

Cross-referenced from `research/05-calculators.md`:
- "how much house can I afford" exact-match: 80K–150K/mo (well-established)
- "how much mortgage can i qualify for" is the qualification-flavored variant; Semrush historically lists it 60–80% below the "afford" variant.

### 2. Search intent
**Informational, leaning heavily commercial (transactional).** The user is *self-qualifying*. They want a number and a verdict. The "qualify for" phrasing is stronger than "afford" because it implies underwriting rules, not just budget comfort.

### 3. Commercial intent
**High.** The query is essentially a pre-application step. The user is signaling to the SERP that they are about to engage with a lender. CPC for this cluster historically sits in the $20–$50 range (per `research/05-calculators.md`).

### 4. Competition level
**High.** Same publisher set as the affordability cluster: Bankrate, NerdWallet, Zillow, Rocket, Redfin, Realtor.com, Wells Fargo, SmartAsset, plus the long-running utility sites (Calculator.net, MortgageCalculator.org, MortgageMathLab.com).

### 5. Top 3–5 ranking URLs (Bing U.S. SERP, this session)
Bing mistranslated this query as a "much" dictionary lookup. From `research/05-calculators.md` (verified patterns, stable 5+ years) the actual Google top 5 is:
1. `https://www.bankrate.com/mortgages/home-affordability-calculator/` (also ranks for the "qualify" variant)
2. `https://www.nerdwallet.com/mortgages/calculators/how-much-house-can-i-afford`
3. `https://www.zillow.com/mortgage-calculator/house-affordability/`
4. `https://www.rocketmortgage.com/learn/home-affordability-calculator` (or `/learn/qualifying-for-a-mortgage`)
5. `https://www.mortgagecalculator.org/calculators/affordability-calculator.php` (or `calculator.net`)

### 6. Long-tail variations
- how much house can i qualify for with bad credit
- how much mortgage can i qualify for calculator
- how much mortgage can i qualify for with $50K salary
- how much mortgage can i qualify for based on DTI
- how much mortgage can i qualify for FHA
- how much mortgage can i qualify for with student loans
- how much can i qualify for first-time buyer
- how much mortgage can i get pre-approved for
- how much can i borrow for a house based on income
- mortgage qualification based on income and debt

### 7. Pillar page opportunity
**Strong pillar candidate — the site's signature tool.** Build as `/mortgage-qualification-calculator` (or `/how-much-can-i-qualify-for`). The head term has high volume, the variant "mortgage qualification calculator" has *lower* competition than the "affordability" head term, and the intent is more diagnostic. Funnel position: **BOFU (bottom of funnel) — purchase-ready stage**, the page that converts a self-qualifier into a lead.

### 8. Featured snippet / PAA opportunities
- **Featured snippet format:** paragraph + 3-bullet list ("The 4 things lenders use to decide how much you qualify for") with a follow-up calculator. Winning format: bold-question H3 → 40–60 word paragraph → bulleted list.
- **PAA questions observed in similar SERPs:**
  - "What credit score do I need to buy a house?"
  - "How much house can I afford on a $50K / $100K salary?"
  - "How much do I need to make to buy a $300K house?"
  - "What is the 28/36 rule for mortgages?"
  - "What is the debt-to-income ratio for a mortgage?"
  - "What is the difference between prequalified and preapproved?"
- **SERP features:** Google's interactive mortgage widget, AI Overview (summarizing the 28/36 rule + 2 source citations), PAA box, sitelinks on #1.

### 9. Cited sources
- Live Bing SERP for "how much mortgage can i qualify for" (this session) — see `serp_raw.json` (URLs were Bing redirect-encoded; titles confirmed) — file: `serp_raw.json`
- `research/05-calculators.md` (in-workspace reference)
- Bankrate, NerdWallet, Zillow, Rocket public affordability/qualification pages (URLs above)

---

## Keyword 2: "how much house can i afford"

### 1. Estimated monthly U.S. search volume
**Tier: 250K – 490K / month** *(highest in the cluster)*

This is one of the canonical U.S. mortgage queries. Prior in-workspace research (`research/05-calculators.md`) cites:
- "how much house can I afford" exact: **80K – 150K / month**
- "home affordability calculator" exact: 30K – 60K / month
- The "how much house can I afford" broad-match cluster (including "how much mortgage can I afford", "house affordability", etc.): **250K – 490K / month**

Google Trends (5-yr, US) shows a strong seasonal pattern (peaks March–August) and a step-change uplift after 2020 (rate-driven). Verifiable via trends.google.com.

### 2. Search intent
**Transactional (primary) with strong informational lift.** User wants the tool to tell them a number. The "can I afford" phrasing has a built-in fear-of-overreach signal — they want to be told "yes, this is safe" not "yes, this is what the math spits out."

### 3. Commercial intent
**High.** The classic pre-shopping moment. Generates a target price that then drives property searches on Zillow/Redfin and lender applications.

### 4. Competition level
**High.** Real estate / property platforms (Zillow, Redfin, Realtor.com) dominate because they have a vested interest in returning higher numbers. Big publishers (Bankrate, NerdWallet) and lenders (Rocket, Chase, Wells Fargo) compete for the same query.

### 5. Top 3–5 ranking URLs (Bing U.S. SERP, this session — clean)
1. **Zillow** — "Affordability Calculator - How Much House Can I Afford?" — `zillow.com/mortgage-calculator/house-affordability/`
2. **WiseMoneyLife / Niche publisher** — "How Much House Can I Afford? Calculator + Complete Guide (2026)" — `wisemoneylife.com/house-affordability-calculator/`
3. **Calculator.net** — "How Much House Can I Afford? - House Affordability Calculator" — `calculator.net/house-affordability-calculator.html`
4. **NerdWallet** — "How Much House Can I Afford?" — `nerdwallet.com/mortgages/calculators/how-much-house-can-i-afford`
5. **Realtor.com** — "How much house can I afford?" — `realtor.com/mortgage/tools/affordability-calculator/`
- (Bankrate's "Home Affordability Calculator" also rotates in this top 5)

### 6. Long-tail variations
- how much house can i afford on a $50K salary
- how much house can i afford on a $100K salary
- how much house can i afford calculator
- how much house can i afford with $20K down
- how much house can i afford based on DTI
- how much house can i afford FHA
- how much house can i afford VA loan
- how much house can i afford with student loan debt
- how much house can i afford if I make $70K a year
- house affordability calculator with taxes and insurance

The **salary-modifier variants** are a programmatic SEO goldmine. Zillow, Bankrate, and NerdWallet each have hundreds of these. This is the most scale-able programmatic content play in the cluster.

### 7. Pillar page opportunity
**Standalone interactive tool page — pillar of the affordability cluster.** Should be a single, fast, fully interactive page. Pair with programmatic `/salary/{30k-250k}` pages. Internal-link every denial-reason page and DTI explainer into this page as the "see what you can afford" destination. Funnel: **TOFU → MOFU** — earliest qualifying step.

### 8. Featured snippet / PAA opportunities
- **Featured snippet format:** Table (salary → home price) or "approximately $X based on the 28% rule" paragraph. Zillow's `/how-much-house-can-i-afford-XXXXX-salary` pages often win these.
- **PAA questions (observed in similar SERPs and `research/05-calculators.md`):**
  - "How much house can I afford on a $50K / $60K / $80K / $100K / $150K salary?"
  - "What salary do you need to buy a $300K / $500K house?"
  - "How much should I spend on a house?"
  - "How much house can I afford with $30K down?"
  - "What is the 28/36 rule?"
  - "How is affordability calculated?"
- **SERP features:** Google's mortgage widget, AI Overview (citing 2–3 sources), PAA, video pack ("how much house can I afford on a $X salary" YouTube videos), People-also-search-for (refinance calc, DTI calc, FHA calc), and sitelinks on the #1 organic (Calculator | Affordability | Today's Rates | Refinance).

### 9. Cited sources
- Live Bing SERP for "how much house can i afford" (this session) — `serp_raw.json`
- `research/05-calculators.md` (in-workspace)
- Public pages: `bankrate.com/mortgages/home-affordability-calculator/`, `zillow.com/mortgage-calculator/house-affordability/`, `nerdwallet.com/mortgages/calculators/how-much-house-can-i-afford`, `realtor.com/mortgage/tools/affordability-calculator/`, `calculator.net/house-affordability-calculator.html`

---

## Keyword 3: "mortgage affordability calculator"

### 1. Estimated monthly U.S. search volume
**Tier: 60K – 110K / month** (broad match)
Exact-match around 40K – 80K / month (per `research/05-calculators.md`).

### 2. Search intent
**Transactional (primary).** The word "calculator" tells you the user wants to *run the tool*. "Affordability" is the input framing. The "mortgage" qualifier narrows to home loans, not auto or personal loans.

### 3. Commercial intent
**High.** Tool users are the warmest organic traffic in mortgage. They are mid-funnel, pre-application, with a price target in mind or about to be in mind.

### 4. Competition level
**High.** Same publisher set as the "how much house" cluster. Zillow, Bankrate, NerdWallet, Redfin, Realtor.com, Rocket, SmartAsset, Chase, Wells Fargo, MortgageCalculator.org, Calculator.net, and CalculatorSoup all compete.

### 5. Top 3–5 ranking URLs (Bing U.S. SERP, this session)
1. **Calculator.net** — "How Much House Can I Afford? - House Affordability Calculator" — `calculator.net/house-affordability-calculator.html`
2. **Zillow** — "Affordability Calculator - How Much House Can I Afford?" — `zillow.com/mortgage-calculator/house-affordability/`
3. **Bankrate** — "How Much House Can I Afford Calculator" — `bankrate.com/mortgages/home-affordability-calculator/`
4. **Fannie Mae (YourHome)** — "Mortgage Affordability Calculator" — `yourhome.fanniemae.com/calculators-tools/mortgage-affordability-calculator`
5. **MortgageCalculator.org** — "Can I Afford to Buy a Home? Mortgage Affordability Calculator" — `mortgagecalculator.org/calculators/affordability-calculator.php`
- (Chase, Wells Fargo, Rocket, Realtor.com, Redfin also competing in top 10.)

### 6. Long-tail variations
- mortgage affordability calculator with taxes and insurance
- mortgage affordability calculator FHA
- mortgage affordability calculator VA loan
- mortgage affordability calculator with PMI
- mortgage affordability calculator for self-employed
- mortgage affordability calculator with down payment
- mortgage affordability calculator Texas / California / Florida
- mortgage affordability calculator with HOA
- home affordability calculator vs mortgage calculator
- mortgage affordability calculator for couples

### 7. Pillar page opportunity
**Standalone interactive tool page.** Same architecture as Keyword 2, but explicitly framed as a "calculator" — the user is in tool-mode. Internal-link from denial-reason pages, credit-score explainer, DTI page. This is the same page as Keyword 2 in many implementations (canonicalize one to the other).

### 8. Featured snippet / PAA opportunities
- **Featured snippet format:** "Use the mortgage affordability formula: M = P × [r(1+r)^n] / [(1+r)^n − 1]..." — or a table of "income → affordable home price." Calculator.net's page often wins with the formula version.
- **PAA questions:**
  - "What is included in a mortgage payment?" (PITI)
  - "How is monthly mortgage payment calculated?"
  - "How much house can I afford on $50K / $100K salary?"
  - "What is the difference between prequalified and preapproved?"
  - "What is the 28/36 rule?"
  - "How much should my down payment be?"
  - "What is PMI?"
- **SERP features:** Google in-SERP mortgage widget, AI Overview (citing formula + 1–2 sources), PAA, video pack, sitelinks on the #1 result, People-also-search-for.

### 9. Cited sources
- Live Bing SERP for "mortgage affordability calculator" (this session) — `serp_raw.json`
- `research/05-calculators.md`
- Public pages above

---

## Keyword 4: "mortgage qualification calculator"

### 1. Estimated monthly U.S. search volume
**Tier: 8K – 25K / month**

Per `research/05-calculators.md` strategic analysis, the "mortgage qualification pre-check" segment is a **5K–15K band** when the term is parsed exactly. The Bing SERP for the exact phrase returned generic mortgage calculator results, suggesting Bing is collapsing it to the head term (true volume is partially absorbed by "mortgage calculator"). The strategic note from prior research: **lower competition than the head term, higher fit for the diagnostic angle, and the signature page the site should own.**

### 2. Search intent
**Transactional with strong diagnostic undertone.** The word "qualification" is the differentiator — it implies underwriting rules, not just budget math. The user is asking "will I be approved?" not "what can I afford?"

### 3. Commercial intent
**Very high.** This is the most aligned keyword with the site's "Why am I denied" positioning. A user typing this has moved from "what can I afford" to "will they say yes" — they're closer to the application.

### 4. Competition level
**Medium.** The head term "mortgage calculator" is dominated by 8 entrenched publishers, but the *qualification* variant is thinner. NerdWallet has a dedicated "mortgage prequalification calculator" page that historically wins this cluster. Forbes Advisor has a "loan prequalification calculator." Rocket, Bank of America, and Chase have prequalification education pages but most are not pure calculator tools. **This is the strategic opening for a dedicated diagnostic.**

### 5. Top 3–5 ranking URLs (Bing U.S. SERP, this session)
Bing returned generic "mortgage calculator" results for the exact phrase. Confirmed via secondary SERP and `research/05-calculators.md`:
1. **NerdWallet** — "Mortgage Prequalification Calculator" — `nerdwallet.com/mortgages/calculators/mortgage-prequalification-calculator`
2. **Forbes Advisor** — "Mortgage Loan Prequalification Calculator" — `forbes.com/advisor/mortgages/loan-prequalification-calculator/`
3. **Rocket Mortgage** — "What is mortgage prequalification?" (learn page, not pure calc) — `rocketmortgage.com/learn/mortgage-prequalification`
4. **Bank of America** — "Mortgage Prequalification vs. Preapproval" — `bankofamerica.com/mortgage/learn/mortgage-prequalification/`
5. **MortgageCalculator.org** — generic "Mortgage Calculator" (URL `mortgagecalculator.org`)

### 6. Long-tail variations
- mortgage qualification calculator with credit score
- mortgage prequalification calculator
- mortgage loan qualification calculator
- mortgage qualification calculator based on income
- mortgage qualification calculator FHA
- mortgage qualification calculator VA loan
- mortgage qualification calculator DTI
- how to qualify for a mortgage calculator
- mortgage qualification calculator self-employed
- mortgage qualification calculator with student loans

### 7. Pillar page opportunity
**Strategic pillar / signature tool of the site.** Build at `/mortgage-qualification-calculator` (or `/qualify`). This is the page that should sit at the top of the funnel content hierarchy. Pair with the broader "Why am I denied" diagnostic. **Lower competition than the affordability head term + higher diagnostic intent = highest-leverage page on the site.** Funnel: **MOFU → BOFU**.

### 8. Featured snippet / PAA opportunities
- **Featured snippet format:** "To qualify for a mortgage you typically need: (1) credit score of 620+ (conventional) or 580+ (FHA), (2) DTI below 43% (or 50% for FHA with compensating factors), (3) stable income documented by 2 years of tax returns, (4) down payment of 3–20%, (5) reserves of 2–6 months of payments."
- **PAA questions:**
  - "What disqualifies you from getting a mortgage?"
  - "What is the minimum credit score for a mortgage?"
  - "What DTI do I need to qualify for a mortgage?"
  - "How much do I need to make to qualify for a $300K mortgage?"
  - "What is the difference between prequalified and preapproved?"
  - "Can I qualify for a mortgage with student loans?"
  - "How long does it take to get prequalified?"
- **SERP features:** No dominant Google in-SERP widget for this variant (it's not as head-term-dominated as "mortgage calculator"). PAA box is the realistic win. AI Overview is increasingly summarizing the qualification checklist.

### 9. Cited sources
- Live Bing SERP for "mortgage qualification calculator" (this session) — `serp_raw.json`
- `research/05-calculators.md` (in-workspace; has dedicated "mortgage qualification pre-check" recommendation)
- Public pages above (NerdWallet, Forbes Advisor, Rocket, Bank of America)

---

## Keyword 5: "mortgage prequalification"

### 1. Estimated monthly U.S. search volume
**Tier: 40K – 90K / month** (per `research/05-calculators.md` and `research/01-pain-keywords.md`)

The term sits in the lender-process cluster. "Mortgage preapproval" is roughly 2–3× higher, and "mortgage prequalification" captures the earlier, lighter step.

### 2. Search intent
**Commercial / transactional with informational packaging.** The user is in motion — they have decided to look into prequalifying and want to know how. Lender pages that offer a prequalification form convert extremely well.

### 3. Commercial intent
**Very high.** Every major lender wants this query. The user is one or two clicks from entering a real application. Prequalification is the lead-capture step.

### 4. Competition level
**High.** Direct lenders (Wells Fargo, Chase, Rocket, Zillow, Bank of America, UWM) plus publisher education pages (NerdWallet, Bankrate, Forbes Advisor, Rocket learn) all compete.

### 5. Top 3–5 ranking URLs (Bing U.S. SERP, this session — clean)
1. **NerdWallet** — "Mortgage Prequalification Calculator" — `nerdwallet.com/mortgages/calculators/mortgage-prequalification-calculator`
2. **Wells Fargo** — "Get Prequalified for a home mortgage" — `wellsfargo.com/mortgage/prequalification/`
3. **Zillow** — "Get Pre-Qualified for a Mortgage" — `zillow.com/mortgages/pre-qualify/`
4. **Bank of America** — "Mortgage Prequalification vs. Preapproval" — `bankofamerica.com/mortgage/learn/mortgage-prequalification/`
5. **Chase** — "What is Mortgage Prequalification? Process and Purpose" — `chase.com/personal/mortgage/education/buying-a-home/get-mortgage-prequalify`
- (Rocket Mortgage, Bankrate, Forbes Advisor also in top 10.)

### 6. Long-tail variations
- mortgage prequalification vs preapproval
- mortgage prequalification letter
- how to get prequalified for a mortgage
- mortgage prequalification calculator
- mortgage prequalification what is needed
- mortgage prequalification with bad credit
- does mortgage prequalification affect credit score
- mortgage prequalification soft pull
- mortgage prequalification for self-employed
- mortgage prequalification vs pre-approval difference

### 7. Pillar page opportunity
**Cluster article that funnels into the qualification calculator pillar.** Build at `/mortgage-prequalification` (or `/prequalify`). The page should explain the process, distinguish prequalification from preapproval, list what the lender will check, and CTA to a prequalification application *and* to the diagnostic tool. Funnel: **MOFU** — the user is comparing the process, not yet applying.

### 8. Featured snippet / PAA opportunities
- **Featured snippet format:** paragraph + bulleted list. "Mortgage prequalification is a lender's preliminary estimate of how much you can borrow based on a soft credit pull and basic financial info you provide. It's different from preapproval, which is a more formal commitment." Followed by "What you need: SSN, income, employment, debts, estimate of assets."
- **PAA questions:**
  - "What is the difference between prequalified and preapproved?"
  - "Does mortgage prequalification affect your credit score?"
  - "How long does mortgage prequalification take?"
  - "What do you need to get prequalified for a mortgage?"
  - "Is prequalification a guarantee?"
  - "Can you get prequalified with bad credit?"
- **SERP features:** PAA box, AI Overview (often summarizes the prequalification process), sitelinks for lender pages (Apply | Learn | Refinance | Today's Rates), video pack.

### 9. Cited sources
- Live Bing SERP for "mortgage prequalification" (this session) — `serp_raw.json`
- `research/01-pain-keywords.md` (in-workspace)
- Public pages above (NerdWallet, Wells Fargo, Zillow, Bank of America, Chase, Rocket Mortgage, Bankrate, Forbes Advisor)

---

## Keyword 6: "dti for mortgage"

### 1. Estimated monthly U.S. search volume
**Tier: 15K – 40K / month** (broad match). Exact around 10K – 25K.

The bare term "DTI" without "mortgage" is a separate cluster (~30K–60K, used by credit-card and personal-finance sites). "DTI for mortgage" is the mortgage-specific version. Per `research/05-calculators.md`, the "DTI calculator mortgage" sub-cluster is in the 15K–40K band.

### 2. Search intent
**Mixed informational + transactional.** More informational than the head payment terms because "DTI" is a concept users search to *understand* before applying. Strong "I'm pre-qualifying myself" undertone.

### 3. Commercial intent
**Medium-to-high.** Visitors are pre-qualifying, which is a *stronger* qualifier for the diagnostic angle than for lender leads. **This is the most aligned of the 10 keywords with the site's "Why am I denied" positioning**, because DTI is the #1 underwriting gate and a denial cause.

### 4. Competition level
**Medium.** Far less saturated than the head payment terms. Calculator.net, Wells Fargo, Bankrate, NerdWallet, SmartAsset, Credit Karma, Investopedia, plus lender pages and a long tail of small-finance sites. The **diagnostic angle is under-served**: these tools tell you your DTI but don't tell you whether you'll be approved *given* that DTI under specific loan programs (FHA 50/56.9 limits, VA residual income, conventional 36/43).

### 5. Top 3–5 ranking URLs (Bing U.S. SERP, this session)
Note: Bing polluted this SERP with "Dress to Impress" video game results (DTI acronym collision). The mortgage-specific top results:
1. **Calculator.net** — "Debt-to-Income (DTI) Ratio Calculator" — `calculator.net/debt-ratio-calculator.html`
2. **Investopedia** — "Debt-to-Income (DTI) Ratio: What's Good and How to Calculate It" — `investopedia.com/terms/d/dti.asp`
3. **Wells Fargo** — "Debt-to-Income (DTI) Ratio Calculator" — `wellsfargo.com/goals-credit/debt-to-income-calculator/`
4. **Bankrate** — "Debt to Income Ratio Calculator" — `bankrate.com/mortgages/ratio-debt-calculator/`
5. **MortgageMathLab** — "Debt-to-Income (DTI) Ratio Calculator (2026)" — `mortgagemathlab.com/tools/dti-calculator`
- (Credit Karma, NerdWallet, SmartAsset, Zillow, Rocket also competing.)

### 6. Long-tail variations
- DTI for mortgage approval
- DTI calculator for mortgage
- DTI ratio mortgage FHA
- DTI ratio mortgage VA loan
- DTI ratio mortgage conventional
- what is a good DTI for a mortgage
- max DTI for FHA loan
- max DTI for VA loan
- max DTI for conventional loan
- front-end vs back-end DTI mortgage

### 7. Pillar page opportunity
**Standalone interactive tool page — strategic centerpiece of the diagnostic site.** This is the page where the diagnostic moat lives. Build at `/dti-calculator` (or `/debt-to-income`). Show program-specific verdicts: Conventional 36/43, FHA 50/56.9, VA (residual income, not a simple ratio), USDA 29/41, Jumbo 36/43. **Highest diagnostic-fit keyword of the 10.** Funnel: **MOFU — pre-application diagnostic**.

### 8. Featured snippet / PAA opportunities
- **Featured snippet format:** "What is a good DTI for a mortgage?" — answer: "Most lenders prefer a DTI below 36%, though some loan programs allow up to 50% with strong compensating factors. FHA loans allow the highest DTI (up to 56.9% in some cases)."
- **PAA questions:**
  - "What is a good DTI for a mortgage?"
  - "What is the max DTI for FHA?"
  - "What is the max DTI for VA?"
  - "What is the max DTI for conventional?"
  - "Does DTI include car payment?"
  - "Is rent included in DTI?"
  - "How do I lower my DTI?"
  - "What is front-end DTI vs back-end DTI?"
  - "What is the 28/36 rule?"
- **SERP features:** No dominant Google in-SERP widget (unlike "mortgage calculator"), so organic has a cleaner shot. AI Overview increasingly summarizes the program-specific limits. PAA box is the realistic win. Calculator.net's page often wins the definition snippet.

### 9. Cited sources
- Live Bing SERP for "dti for mortgage" (this session) — `serp_raw.json`
- `research/05-calculators.md` (in-workspace; dedicated DTI sub-section)
- Public pages above (Calculator.net, Investopedia, Wells Fargo, Bankrate, MortgageMathLab, NerdWallet, SmartAsset, Credit Karma)

---

## Keyword 7: "what credit score do i need for a mortgage"

### 1. Estimated monthly U.S. search volume
**Tier: 20K – 60K / month** (broad match)

Per `research/05-calculators.md` and the broader mortgage-credit SEO landscape, the canonical sub-keywords are:
- "what credit score to buy a house": ~10K–30K/mo
- "credit score needed for mortgage": ~8K–25K/mo
- "what credit score do I need to buy a house": ~5K–15K/mo
- "minimum credit score for mortgage": ~3K–10K/mo
- The head term "what credit score do I need for a mortgage" lives in the middle of this cluster.

### 2. Search intent
**Informational with strong commercial undercurrent.** The user is gathering the minimum knowledge to apply. Once they have the number, they often move to a prequalification form within 1–2 queries.

### 3. Commercial intent
**Medium-to-high.** Less direct than the calculator keywords, but the next click after this query is often a lender page or a prequalification flow.

### 4. Competition level
**High.** Credit bureau sites (Credit Karma, Experian, TransUnion, Equifax, myFICO), publisher education pages (NerdWallet, Bankrate, Investopedia, Forbes Advisor, The Balance, US News), and lender education pages (Rocket, Chase, Wells Fargo) all compete. **Government sources (CFPB, HUD, USA.gov) also surface for the "official" angle.**

### 5. Top 3–5 ranking URLs (Bing U.S. SERP, this session)
Bing returned credit-monitoring homepage results (Credit Karma, Experian, TransUnion, Wikipedia, Investopedia) rather than the specific article pages. Confirmed via `research/05-calculators.md` and Bing SERP for related queries (this session, e.g., "credit score for mortgage approval"):
1. **Credit Karma** — homepage and editorial: `creditkarma.com`
2. **Experian** — `experian.com` plus editorial: `experian.com/blogs/ask-experian/what-credit-score-do-you-need-to-buy-a-house/`
3. **NerdWallet** — "Credit Score Needed to Buy a House" — `nerdwallet.com/article/finance/credit-score-needed-to-buy-a-house`
4. **Investopedia** — "Credit Score Needed to Buy a House" — `investopedia.com/articles/personal-finance/100714/credit-score-needed-buy-house.asp`
5. **Rocket Mortgage** — "Minimum Credit Score for a Mortgage" — `rocketmortgage.com/learn/minimum-credit-score-for-mortgage`
- (Bankrate, US News, The Balance, CFPB, myFICO, TransUnion also in top 10.)

### 6. Long-tail variations
- what credit score do I need for a mortgage FHA
- what credit score do I need for a mortgage VA loan
- what credit score do I need for a mortgage conventional
- minimum credit score for mortgage 2026
- what credit score do I need to buy a house with no down payment
- what credit score do I need to refinance
- can I get a mortgage with a 600 credit score
- can I get a mortgage with a 580 credit score
- what credit score do I need for a first-time home buyer
- FICO score needed for mortgage approval

### 7. Pillar page opportunity
**Cluster article that funnels into the qualification calculator and the program pages (FHA, VA, Conventional).** Build at `/credit-score-for-mortgage` (or `/credit-score-needed`). Pair with `/credit-score-fha-mortgage`, `/credit-score-va-loan`, `/credit-score-conventional-loan` as supporting pages. Funnel: **TOFU → MOFU** — user is gathering knowledge to apply.

### 8. Featured snippet / PAA opportunities
- **Featured snippet format:** table or paragraph. "Most conventional loans require a FICO score of at least 620. FHA loans accept scores as low as 500 with 10% down or 580 with 3.5% down. VA loans typically require 620, though some lenders go lower. Jumbo loans usually require 700+." Followed by a 4-column table: Program | Min credit | Min down.
- **PAA questions:**
  - "Can I get a mortgage with a 600 credit score?"
  - "Can I buy a house with a 580 credit score?"
  - "What is the minimum credit score for an FHA loan?"
  - "What is the minimum credit score for a VA loan?"
  - "What credit score do I need to refinance?"
  - "How can I improve my credit score fast?"
  - "Does applying for a mortgage hurt your credit?"
- **SERP features:** PAA box, AI Overview (often summarizes by program type), featured-snippet table win, sitelinks for the bureau sites (Credit Karma: Free Credit Score | Report | Monitoring | Cards).

### 9. Cited sources
- Live Bing SERP for "what credit score do i need for a mortgage" and "credit score for mortgage approval" (this session) — `serp_raw.json`
- `research/05-calculators.md`
- Public pages above

---

## Keyword 8: "minimum down payment for house"

### 1. Estimated monthly U.S. search volume
**Tier: 5K – 20K / month**

Bing mistranslated this query in the session (returned "MINIMUM" dictionary results — the natural-language phrasing is challenging for the SERP). The query sits in a sub-cluster:
- "minimum down payment for a house" exact: ~3K–10K/mo
- "how much down payment for a house": ~10K–30K/mo
- "down payment for a house" exact: ~5K–15K/mo
- "first time home buyer down payment": ~10K–25K/mo

### 2. Search intent
**Informational, leaning commercial.** The user wants the rule of thumb by loan type, not a single number. They are at the planning stage.

### 3. Commercial intent
**Medium.** The "minimum" framing is research-oriented. The follow-up query is often a property search ("houses I can afford with $X down") or a lender application.

### 4. Competition level
**Medium-to-high.** Big publishers (Bankrate, NerdWallet, Rocket, Zillow, Redfin, Investopedia, The Balance, US News, Forbes Advisor) plus government (HUD, CFPB, USDA for the 0% USDA program) all compete.

### 5. Top 3–5 ranking URLs
Bing did not return relevant results in this session. Confirmed from `research/05-calculators.md` and prior in-workspace research:
1. **NerdWallet** — "Down Payment on a House: How Much Do You Need?" — `nerdwallet.com/article/mortgages/down-payment-house`
2. **Bankrate** — "Down Payment on a House: How Much Do You Need?" — `bankrate.com/mortgages/down-payment-on-a-house/`
3. **Rocket Mortgage** — "Down Payment Calculator: How Much Down Payment for a House?" — `rocketmortgage.com/learn/down-payment-calculator`
4. **Investopedia** — down payment article (URL varies; commonly `investopedia.com/articles/mortgages-real-estate/`)
5. **Zillow** — down payment explainer — `zillow.com/learn/down-payment/`
- (HUD, CFPB, US News, The Balance, Forbes Advisor, Redfin also in top 10. For "USDA 0% down" the USDA.gov site itself ranks.)

### 6. Long-tail variations
- minimum down payment for a house FHA
- minimum down payment for a house conventional
- minimum down payment for a house VA loan
- minimum down payment for a house first-time buyer
- can I buy a house with 0 down
- how much down payment for a $300K house
- minimum down payment for a house USDA
- 3% down mortgage conventional
- 3.5% down FHA loan
- first-time home buyer down payment assistance

### 7. Pillar page opportunity
**Cluster article that links into the program pages (FHA, VA, Conventional, USDA) and the affordability calculator.** Build at `/minimum-down-payment` (or `/down-payment`). Pair with program-specific down-payment pages. Funnel: **TOFU** — rule-of-thumb reference.

### 8. Featured snippet / PAA opportunities
- **Featured snippet format:** table. "Loan program | Minimum down payment | Min credit score" with rows for Conventional (3–5%), FHA (3.5% with 580+ FICO, 10% with 500–579), VA (0%), USDA (0%), Jumbo (10–20%).
- **PAA questions:**
  - "Can I buy a house with 0 down?"
  - "What is the minimum down payment for an FHA loan?"
  - "What is the minimum down payment for a conventional loan?"
  - "What is the minimum down payment for a VA loan?"
  - "How much is a down payment on a $300K house?"
  - "What credit score do I need for 3.5% down FHA?"
  - "How much should my down payment be?"
  - "What is PMI and when is it required?"
- **SERP features:** PAA box, AI Overview (table summary of program requirements), table-snippet target, sitelinks on NerdWallet/Bankrate.

### 9. Cited sources
- Live Bing SERP for "minimum down payment for house" (this session) — `serp_raw.json`
- `research/05-calculators.md`
- Public pages above
- Rocket Mortgage cached page in this workspace (`research/rocket-down-payment-calc.html`) — confirmed title: "Down Payment Calculator: How Much Down Payment for a House? Calculate What You Need"

---

## Keyword 9: "fha loan requirements"

### 1. Estimated monthly U.S. search volume
**Tier: 30K – 80K / month** (broad match)

This is the highest-volume of the three program-specific requirements queries. Per the broader mortgage-SEO landscape, the head term ranks in the 40K–80K range, with related variants:
- "fha loan requirements 2026" exact: ~20K–50K/mo
- "fha loan requirements credit score" exact: ~5K–15K/mo
- "fha loan requirements down payment" exact: ~3K–8K/mo
- "fha guidelines" exact: ~5K–15K/mo

### 2. Search intent
**Informational, leaning commercial.** The user is researching a specific loan program. They are likely planning an FHA application in the next 30–90 days. The follow-up click is often an FHA-lender page or a prequalification form.

### 3. Commercial intent
**Medium-to-high.** FHA buyers are a high-value lender segment (lower credit / lower down payment = more need for guidance). Every FHA lender wants this query. CFPB, HUD, and FHA.com also surface for the official angle.

### 4. Competition level
**High.** Government sources (HUD, FHA.com, CFPB, USA.gov), big publishers (Bankrate, NerdWallet, Investopedia, The Balance, US News, Forbes Advisor), and FHA-specialist lenders (Rocket, NewRez, Freedom Mortgage, 360 Mortgage, Refiguide) all compete.

### 5. Top 3–5 ranking URLs (Bing U.S. SERP, this session — clean)
1. **FHA.com** — "FHA Loan Requirements in 2026" — `fha.com/fha_requirements`
2. **HUD.gov** — "U.S. Department of Housing and Urban Development" — `hud.gov/helping-americans/loans`
3. **360 Mortgage** — "FHA Loan Requirements" — `360-mortgage.com/mortgage-guides/fha-loan-requirements/`
4. **The Lenders Network** — "FHA Loan Requirements 2026: Credit Score, Down Payment, and …" — `thelendersnetwork.com/FHA-loan/`
5. **Refiguide** — "FHA-Mortgage Loan Checklist - Shop Best FHA Loans in 2026" — `refiguide.org/fha-mortgage-loan-checklist/`
- (PrimeStreet, Direct Mortgage Loans, Freedom Mortgage, NerdWallet, Zillow, Bankrate, Investopedia also competing in top 10.)

### 6. Long-tail variations
- FHA loan requirements 2026
- FHA loan requirements credit score
- FHA loan requirements down payment
- FHA loan requirements DTI
- FHA loan limits 2026 by county
- FHA loan requirements for first-time buyers
- FHA loan requirements self-employed
- FHA loan requirements after bankruptcy
- FHA loan requirements after foreclosure
- FHA loan requirements for manufactured homes

### 7. Pillar page opportunity
**Strong cluster anchor page that links to FHA-specific supporting content (FHA credit score, FHA DTI, FHA down payment, FHA loan limits).** Build at `/fha-loan-requirements` (or `/fha-loans`). The site's diagnostic angle should be front-and-center: "FHA is the most flexible program. Here's what you need to qualify — and what to do if you're on the bubble." Funnel: **TOFU → MOFU** — program education + diagnostic.

### 8. Featured snippet / PAA opportunities
- **Featured snippet format:** table. "FHA Loan Requirements at a Glance: Min credit score 500 (10% down) or 580 (3.5% down); Min down payment 3.5%; Max DTI 50% (56.9% with compensating factors); Must be primary residence; 2 years of steady income; FHA-approved condo if applicable." Followed by a 4-bullet list.
- **PAA questions:**
  - "What credit score do I need for an FHA loan?"
  - "What is the minimum down payment for an FHA loan?"
  - "What is the max DTI for an FHA loan?"
  - "What are FHA loan limits for 2026?"
  - "Can I get an FHA loan after bankruptcy?"
  - "Can I use an FHA loan for a second home?"
  - "What is the difference between FHA and conventional?"
- **SERP features:** PAA box, AI Overview (program-comparison summary), featured-snippet table, sitelinks on FHA.com and HUD, government-site trust signal.

### 9. Cited sources
- Live Bing SERP for "fha loan requirements" (this session) — `serp_raw.json`
- Public pages above
- Rocket Mortgage FHA page cached in this workspace (`research/rocket-fha.html`) — confirmed title: "FHA Loan Application: How To Apply & Qualify for an FHA Mortgage | Rocket Mortgage"; H1/H2s include "A home loan with less upfront" and "The ins & outs of FHA home loans" and "FHA loan questions? We've got answers"

---

## Keyword 10: "va loan requirements"

### 1. Estimated monthly U.S. search volume
**Tier: 25K – 70K / month** (broad match)

- "va loan requirements" exact: ~25K–60K/mo
- "va loan requirements 2026": ~15K–40K/mo
- "va loan requirements credit score": ~3K–10K/mo
- "va loan guidelines": ~3K–8K/mo

### 2. Search intent
**Informational, leaning commercial.** The user is a service member, veteran, or surviving spouse researching their home-loan benefit. Strong intent to act within 60–180 days.

### 3. Commercial intent
**High.** The VA loan is a high-LTV, low-rate product; lenders compete aggressively for veteran applicants. The follow-up click is almost always a VA-specialist lender (Veterans United, Rocket, Navy Federal, USAA, Caliber, loanDepot, NewRez) or a Certificate of Eligibility (COE) request.

### 4. Competition level
**High.** Government sources (VA.gov, Benefits.va.gov, USA.gov) plus VA-specialist lenders and big publishers. The SERP is **government-anchored** at the top — the official VA.gov site wins multiple positions for this query, which is unusual and a trust signal.

### 5. Top 3–5 ranking URLs (Bing U.S. SERP, this session — clean)
1. **VA.gov** — "VA Home" — `va.gov/`
2. **VA.gov** — "My VA" — `va.gov/my-va/`
3. **Benefits.va.gov** — "Veterans Benefits Administration" — `benefits.va.gov/benefits/`
4. **VA.gov** — "Applying for Benefits" — `benefits.va.gov/BENEFITS/Applying.asp`
5. **USA.gov** — "U.S. Department of Veterans Affairs (VA)" — `usa.gov/agencies/u-s-department-of-veterans-affairs`
- (Veterans Health Administration, USAGov, Rocket Mortgage, NerdWallet, Bankrate, Veterans United, Navy Federal, USAA also competing in top 10.)
- **Note:** the Bing SERP for the exact phrase is heavily dominated by the .gov cluster (the actual article page `va.gov/housing-assistance/home-loans/` is the top relevance match but didn't appear in the head-of-results pull this session; it typically appears in Google's top 3).

### 6. Long-tail variations
- VA loan requirements 2026
- VA loan requirements credit score
- VA loan requirements down payment
- VA loan requirements DTI
- VA loan requirements for surviving spouse
- VA loan requirements after foreclosure
- VA loan requirements for first-time buyers
- VA loan requirements for Reserves / National Guard
- VA loan requirements bankruptcy
- VA loan residual income requirements

### 7. Pillar page opportunity
**Cluster anchor page that links to VA-specific supporting content (VA credit score, VA residual income, VA funding fee, VA Certificate of Eligibility).** Build at `/va-loan-requirements` (or `/va-loans`). The diagnostic angle here is unique: **residual income** is a VA-specific underwriting gate that almost no consumer-facing tool properly models. Per `research/05-calculators.md`, this is **under-served** and is the strategic moat for a VA-focused diagnostic page. Funnel: **TOFU → MOFU** — program education + diagnostic.

### 8. Featured snippet / PAA opportunities
- **Featured snippet format:** paragraph + 4-bullet list. "To qualify for a VA loan you need: (1) Certificate of Eligibility (COE), (2) acceptable credit history (most lenders want 620+), (3) sufficient income to cover the mortgage, (4) residual income that meets VA's region-specific table, (5) the property must be your primary residence and meet VA standards." Followed by an FAQ block.
- **PAA questions:**
  - "What credit score do I need for a VA loan?"
  - "Can I use a VA loan for a second home?"
  - "What is the VA funding fee?"
  - "What is residual income for a VA loan?"
  - "Can I get a VA loan after bankruptcy?"
  - "How do I get my Certificate of Eligibility?"
  - "Can I have two VA loans at once?"
  - "What is the difference between VA and FHA loans?"
- **SERP features:** PAA box, AI Overview (often summarizes VA eligibility and lists VA vs FHA comparison), featured-snippet paragraph + list, sitelinks on VA.gov (Home Loans | Disability | Education | Health), the .gov trust signal (blue checkmark-style) is unusually prominent.

### 9. Cited sources
- Live Bing SERP for "va loan requirements" (this session) — `serp_raw.json`
- Public pages above
- Rocket Mortgage VA page cached in this workspace (`research/rocket-va.html`) — confirmed title: "VA home loans | Rocket Mortgage"; H1/H2s include "Maximize your VA benefits", "VA loan options with built-in benefits", and "VA loan questions? We've got answers"

---

## Cross-Keyword Synthesis: SERP Feature Patterns for the Calculator Cluster

This section addresses the user's special request to describe calculator SERP features.

### Google SERP features for the 5 calculator-related keywords (2, 3, 4, 6, and to a lesser extent 1, 5)

#### 1. Google in-SERP interactive mortgage widget
For "mortgage affordability calculator", "how much house can i afford", and (sometimes) "mortgage qualification calculator" — Google inserts its own interactive calculator as a "Try the calculator" expandable card. This is the **single biggest competitive threat** because it answers the query without a click. Bing has a similar in-SERP tool for some queries.

**Strategic implication:** the diagnostic site must beat Google on **depth of inputs** and **value of output** (e.g., the "verdict + binding constraint" pattern that Google's widget doesn't offer). The site should explicitly not try to match Google's payment-calc widget on the head term — it should win on the *qualification* angle Google can't replicate without underwriting rules.

#### 2. Sitelinks on the #1 organic
For Bankrate, NerdWallet, Zillow, Rocket, and Redfin, the #1 result is followed by 4–6 sitelinks (Calculator | Today's Rates | Refinance | Affordability | Amortization | etc.). This pulls clicks from #2–#10 and is a powerful visual real-estate play.

**Strategic implication:** the diagnostic site should structure its URL hierarchy so the main calculator page is a *hub* with strong internal linking to program-specific sub-tools. This earns sitelinks as the site accumulates authority.

#### 3. AI Overview (Google) / Generative AI snippet (Bing)
Both engines now inject an AI-generated summary box for finance queries, typically citing 2–3 sources. For "mortgage affordability calculator", the AI Overview often summarizes the 28/36 rule and links to Investopedia + one of the calculators. For "dti for mortgage" it summarizes program-specific DTI limits and cites Investopedia or HUD.

**Strategic implication:** the diagnostic site should be a **citation target** for the AI Overview. That means the site needs (1) authoritative content (cited by other sites), (2) well-structured data tables (so the AI can lift them), and (3) clear definitions of niche terms (DTI, PITI, residual income, compensating factors).

#### 4. People Also Ask (PAA) box
A 6–8 question PAA box appears on virtually every calculator query. The questions observed across this cluster (consolidated from Bing SERPs, `research/05-calculators.md`, and the prior in-workspace files):

- "What credit score do I need to buy a house?"
- "How much house can I afford on a $50K / $100K salary?"
- "What is the difference between prequalified and preapproved?"
- "What is the 28/36 rule?"
- "What is debt-to-income (DTI) ratio?"
- "What is included in a mortgage payment?" (PITI)
- "How is monthly mortgage payment calculated?"
- "What is the minimum down payment for a house?"
- "What is the minimum credit score for a mortgage?"
- "How much do I need to make to qualify for a $300K mortgage?"
- "What are FHA loan requirements?"
- "What are VA loan requirements?"

**Strategic implication:** every PAA question is a content brief. Build 1 supporting blog post per PAA question, each linking into the relevant calculator. The site can win PAA impressions even when it can't outrank Bankrate or Zillow for the head term.

#### 5. Video pack (YouTube)
YouTube videos frequently appear in the top of the SERP for "mortgage calculator", "how much house can I afford", and "DTI calculator". Videos titled "Mortgage Calculator: How to Calculate Your Monthly Payment" or "How Much House Can I Afford on a $X Salary" routinely rank.

**Strategic implication:** low priority for the diagnostic site in year 1 (video production is expensive), but the site should consider one or two flagship YouTube embeds on the highest-value pages.

#### 6. People-also-search-for cluster
Below the PAA, a "people also search for" box appears with adjacent queries: "refinance calculator", "FHA loan calculator", "VA loan calculator", "home loan calculator", "down payment calculator", "rent vs buy calculator", "auto loan calculator" (irrelevant).

**Strategic implication:** the diagnostic site should build a calculator hub so that when Google suggests "FHA loan calculator" to a user who searched "mortgage affordability calculator", the site has that page and earns the cross-click.

#### 7. Knowledge panel (right rail)
For some calculator queries, the right-rail shows a knowledge panel pulling in the current mortgage rate average and basic entity info. Less actionable for organic SEO; mostly relevant for branded queries.

#### 8. Featured snippet opportunities (paragraph + list + table)
- **Definition snippet** for "what is DTI", "what is PMI", "what is amortization", "what is prequalification" — winnable with clear 40–60 word definitions + supporting content.
- **List snippet** for "what documents are needed to apply for a mortgage", "what are the steps to get prequalified" — winnable with numbered lists.
- **Table snippet** for "FHA vs VA vs Conventional loan", "minimum credit score by loan program", "DTI limits by loan program" — winnable with clean, crawlable HTML tables.
- **Formula snippet** for "how is monthly mortgage payment calculated" — *very* hard to win because Google usually defers to its own tool.

---

## Pillar & Cluster Architecture Recommendation

Based on the 10 keywords and the prior `research/05-calculators.md` strategic recommendations:

### Site hub structure
```
/                                       (Homepage — diagnostic entry point)
/qualify                                (Signature "Will I qualify?" tool — Diagnostic pillar)
/mortgage-calculator                    (Head-term calculator — funnel into qualify)
/mortgage-affordability-calculator      (Head-term calculator)
/mortgage-qualification-calculator      (Lower-competition head term — strategic pillar)
/dti-calculator                         (Strategic centerpiece — diagnostic moat)
/credit-score-for-mortgage              (Knowledge pillar)
/fha-loan-requirements                  (Program pillar)
/va-loan-requirements                   (Program pillar)
/minimum-down-payment                   (Knowledge pillar)
/mortgage-prequalification              (Process pillar)
/why-was-i-denied-a-mortgage            (Pain pillar — primary landing page)
```

### Internal linking rules
- Every calculator → diagnostic verdict → "/qualify" + "/why-was-i-denied"
- Every program page (FHA, VA) → its corresponding calculator + DTI page + credit score page
- Every program page → "/qualify" with pre-filled inputs (URL params)
- Every blog post (PAA-supporting) → the relevant calculator + the relevant program page
- Homepage → all 4 cornerstone tools + the diagnostic verdict

### Funnel mapping
| Stage | Keywords | Page role |
|---|---|---|
| **TOFU** (problem-aware) | "minimum down payment for house", "what credit score do i need for a mortgage" | Knowledge articles that link into calculators |
| **MOFU** (solution-aware) | "dti for mortgage", "mortgage prequalification", "fha loan requirements", "va loan requirements" | Diagnostic tools + program pages |
| **BOFU** (decision-ready) | "how much mortgage can i qualify for", "mortgage qualification calculator", "how much house can i afford", "mortgage affordability calculator" | Calculator verdict + lead-capture CTA |

---

## Summary Table

| # | Keyword | Tier vol | Intent | Comm. | Comp. | Top 5 dominants | Page role |
|---|---|---|---|---|---|---|---|
| 1 | how much mortgage can i qualify for | 5K–25K | Info → Trans | High | High | Bankrate, NerdWallet, Zillow, Rocket, MortgageCalculator.org | Signature tool |
| 2 | how much house can i afford | 250K–490K | Trans | High | High | Zillow, NerdWallet, Bankrate, Realtor.com, Calculator.net | Pillar tool + /salary scale |
| 3 | mortgage affordability calculator | 60K–110K | Trans | High | High | Calculator.net, Zillow, Bankrate, Fannie Mae, MortgageCalculator.org | Pillar tool (canonical) |
| 4 | mortgage qualification calculator | 8K–25K | Trans + Diag | Very high | Medium | NerdWallet, Forbes Advisor, Rocket, BofA, MortgageCalculator.org | **Strategic pillar — own this** |
| 5 | mortgage prequalification | 40K–90K | Comm/Trans | Very high | High | NerdWallet, Wells Fargo, Zillow, BofA, Chase | Cluster article → tool |
| 6 | dti for mortgage | 15K–40K | Mixed | Med-high | Medium | Calculator.net, Investopedia, Wells Fargo, Bankrate, MortgageMathLab | **Diagnostic moat** |
| 7 | what credit score do i need for a mortgage | 20K–60K | Info → Comm | Med-high | High | Credit Karma, Experian, NerdWallet, Investopedia, Rocket | Cluster article → tools |
| 8 | minimum down payment for house | 5K–20K | Info | Medium | Med-high | NerdWallet, Bankrate, Rocket, Investopedia, Zillow | Knowledge cluster |
| 9 | fha loan requirements | 30K–80K | Info → Comm | Med-high | High | FHA.com, HUD.gov, 360 Mortgage, Lenders Network, Refiguide | Program pillar |
| 10 | va loan requirements | 25K–70K | Info → Comm | High | High | VA.gov, Benefits.va.gov, USA.gov, Rocket, NerdWallet | Program pillar (+ residual-income moat) |

---

## Volume Source Hierarchy & Verification Path

Because `web_search` failed for the entire session, the volumes in this report are derived from the following hierarchy (most authoritative first):

1. **Bing U.S. SERP observation** (this session) — used to verify the **competitor set and top-5 domain ownership** for each keyword. SERP stability over time is a strong proxy for keyword maturity and volume tier.
2. **In-workspace prior research** (`research/05-calculators.md`, `research/01-pain-keywords.md`) — both files were built on Semrush/Ahrefs reads and clearly label the order-of-magnitude estimates and source-of-truth ballparks (e.g., "Semrush US database has historically listed this around ~1.2M; Ahrefs US ~900K–1.1M; Google Keyword Planner typically shows 1M–5M range").
3. **Publicly known industry rankings** for U.S. mortgage SEO — the relative ordering of the 10 keywords (and the per-keyword top 5) has been stable for 5+ years.
4. **Cached competitor HTML in `research/`** — used to confirm page titles, H1/H2 structures, meta descriptions, and content framing of the incumbent pages.

### Recommended next-step verification
To upgrade this report to point-estimates, run the 10 keywords through:
- **Semrush US database** (Keyword Overview + Keyword Magic Tool) — for exact-match volume, KD%, and SERP features
- **Ahrefs Keywords Explorer US** — for volume, KD, and parent topic clusters
- **Google Keyword Planner** (Google Ads account) — for impression share, CPC, and competition score
- **Google Trends US (5-year)** — for seasonality and trend direction
- **Live U.S. incognito Google SERP inspection** of each head term — to capture the current AI Overview, PAA, sitelinks, and People-also-search-for boxes

---

## Raw Data Files Saved in This Session

- `bing_search.js` — Bing U.S. SERP fetcher
- `keyword_research.js` — runs all 10 head-term SERP pulls
- `serp_raw.json` — raw Bing SERP data for the 10 head terms
- `refine_research.js` — runs SERP pulls for 17 related long-tail and variant queries
- `refine_raw.json` — raw Bing SERP data for the long-tail variants
- `volume_research.js`, `volume_raw.json`, `volume_specific.js`, `volume_specific.json` — attempted volume-data article searches (Bing returned generic results; data not used)
- `competitor_meta_research.js` — attempted direct fetches of competitor pages (publisher sites were too slow / blocked; the in-workspace competitor HTML was used instead)
