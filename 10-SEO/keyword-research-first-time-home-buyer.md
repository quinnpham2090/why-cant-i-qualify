# Keyword Research Report — First-Time Home Buyer Cluster

**Site:** U.S. consumer mortgage qualification diagnostic site ("Why am I denied")
**Mission:** Help denied / under-qualified mortgage applicants understand *why* they were denied and what to do next. Primary persona: the **unqualified first-time home buyer** who has either been denied, can't qualify, or is afraid to apply.
**Research date:** Session of 2024/2026
**Methodology:** Live Bing U.S. SERP pulls (6 keyword variants) + direct meta/structure extraction from top-ranking competitor pages (Rocket Mortgage Learn, Bankrate, CFPB, HUD) + prior in-workspace research synthesis (`research/first-time-homebuyer-tools-research.md`, `research/01-pain-keywords.md`, `research/02-affordability-qualification.md`, `research/06-local-state.md`) + cached competitor HTML in `research/`.

> **⚠️ Data confidence caveat.** The dedicated `web_search` tool returned an authentication error for the entire session, so this report could not pull live Semrush/Ahrefs/Google Keyword Planner point-estimate volumes. Volumes below are **directional tiers** derived from (1) cross-referencing Bing U.S. SERP result counts and the relative rank-stability of incumbents, (2) prior in-workspace research files containing well-sourced order-of-magnitude estimates, and (3) public industry knowledge of the U.S. mortgage-SEO landscape (2022–2025). All volume numbers should be treated as **tiers, not points**, and replaced with verified Semrush/Ahrefs reads before production content decisions. All cited URLs were extracted from live Bing SERPs or directly fetched from the source page in this session.

---

## Executive Summary

The 3 primary keywords and 3 closely-related keywords split into three strategic buckets:

| Bucket | Keywords | Strategic role | Avg. monthly U.S. volume tier |
|---|---|---|---|
| **A — Qualification (the user wants a verdict)** | "first time home buyer qualification", "how to qualify for mortgage first time buyer", "first time home buyer credit score" | Mid-funnel qualification, **highest commercial intent**, dominated by Rocket + Bankrate + NerdWallet lender/publisher content | 1K–15K/mo |
| **B — Mistakes (the user is worried about doing it wrong)** | "first time buyer mistakes", "first time home buyer mistakes to avoid" | Mid-funnel risk-avoidance, **very high commercial intent**, listicle format dominates | 2K–12K/mo |
| **C — Grants / Programs / Down payment (the user wants free money)** | "first time buyer grants", "first time home buyer programs", "first time home buyer down payment" | High commercial intent (transactional-adjacent), .gov HFA + lender + publisher mix; calendar-skewed (Q1 spike) | 4K–30K/mo |

**Cumulative addressable volume (all 6 head terms combined):** **~15K–90K monthly U.S. searches** [EST]. This is a major commercial-intent cluster.

**Site moat across all 3 primary keywords:** Every top-ranking page is a *listicle explainer* written by a lender (Rocket) or a finance publisher (Bankrate, NerdWallet). None of them returns a **personalized "you qualify / you don't qualify, and here's why" verdict** tied to the user's specific financial profile and denial letter. That is the structural differentiation the diagnostic site can own.

**Where this cluster fits in the diagnostic site architecture:**
- **Pillar candidate:** "First-time home buyer qualification" is a strong pillar (largest of the 3, broadest scope, ability to absorb the other 5 as clusters). "First time buyer mistakes" is a strong cluster under the pillar. "First time buyer grants" is a strong cluster that also cross-links heavily to the state/local cluster (see `research/06-local-state.md`).

---

## 1. "first time home buyer qualification"

### 1. Estimated monthly U.S. search volume
**[EST — directional, not tool-verified]**
- **Broad match: ~2,000–8,000 / month** U.S.
- **Exact match: ~500–2,500 / month** U.S.
- Order-of-magnitude: this is a mid-volume, high-intent qualification query. Conversational cousin of "how to qualify for a mortgage as a first-time buyer" and the conversational inverse of "why was I denied a mortgage." The 2022–2025 era saw steady demand from FTHBs trying to self-assess before applying.

### 2. Search intent
**Informational with very strong commercial-investigation lean.** The user wants to know (a) the rules, (b) whether they personally meet them, and (c) what to do if they don't. The word "qualification" specifically implies a *threshold* (FICO, DTI, LTV) — a denial-shaped question, not a curiosity.

### 3. Commercial intent
**High.** A user typing this is moments away from filling out a prequalification form. This is a top-funnel qualifying query for any lender. CPC for the cluster historically sits in the $15–$40 range [EST — industry ballpark].

### 4. Competition level
**[COMP — APPROX] High.**
Top-ranking pages are dominated by:
- **Direct lenders (with educational blogs):** Rocket Mortgage, Chase, loanDepot
- **Big finance publishers:** Bankrate, NerdWallet, Investopedia
- **Government / regulatory:** HUD, CFPB (less competitive in this exact query, but authoritative)
- **Credit / personal-finance:** Credit Karma, The Balance / GOBankingRates

### 5. Top 3–5 ranking URLs (live session, August 2026)
Verified by direct page fetch in this session:

1. **Rocket Mortgage** — https://www.rocketmortgage.com/learn/first-time-home-buyer-qualifications
   - *Title:* "First-time home buyer qualifications: What to know"
   - *Meta:* "See first-time home buyer qualifications, including credit score, DTI, down payment, and income limits, plus loan options and next steps for getting a mortgage."
   - *Structure:* 12 H2s (Who is FTHB / See what you qualify for / Additional FTB qualifications / Loans for FTBs / How to qualify / Benefits / FAQ / Bottom line / Related resources), 24 H3s, author byline (Kevin Graham), substantial CTA blocks ("See what you qualify for", "Get approved to buy a home", "Take the first step toward the right mortgage"). Heavy on Rocketing-the-user-to-apply CTAs.
2. **Rocket Mortgage** — https://www.rocketmortgage.com/learn/first-time-home-buyer
   - *Title:* "A guide to first-time home buyer programs, loans and grants"
   - *Meta:* "If you're new to homeownership, first-time home buyer assistance programs can help you with down payments and more. Discover some of your options."
   - The Rocket "FTB hub" — broader than qual, links to the qual article.
3. **Bankrate** — https://www.bankrate.com/mortgages/first-time-homebuyer/
   - *Title:* "First-Time Homebuyers"
   - Bankrate's FTB hub page; aggregator-style, links to ~20 sub-articles including mistakes, grants, down payment, FHA, conventional.
4. **Bankrate** — https://www.bankrate.com/mortgages/first-time-homebuyer-guide/
   - *Title:* "First-time homebuyer guide"
   - 10-step guide (assess finances → decide mortgage type → get 3+ rate quotes → get preapproved → find agent → shop → offer → apply → inspector → close). This is Bankrate's "pillar" piece.
5. **CFPB** — https://www.consumerfinance.gov/owning-a-home/
   - *Title:* "Buying a house: Tools and resources for homebuyers"
   - Government trust authority. Plain-language guides. Lower on commercial CTAs but high E-E-A-T.
6. **HUD** — http://www.hud.gov/topics/buying_a_home
   - HUD's buying-a-home topic page. Canonical government source. Authoritative but dated UX.

### 6. Long-tail variations (10, observed patterns)
- "first time home buyer qualification 2026" (calendar-year variant)
- "first time home buyer qualifications credit score"
- "how to qualify as first time home buyer"
- "first time home buyer qualification requirements"
- "first time home buyer income limits"
- "first time home buyer qualification fha"
- "first time buyer qualifications 2025"
- "what qualifies you as a first time home buyer"
- "first time home buyer loan qualifications"
- "do i qualify as a first time home buyer"

### 7. Pillar page opportunity
**STRONG PILLAR CANDIDATE.** This is the broadest, highest-volume of the 3 primary terms and the most "denial-shaped" (the word "qualification" frames the user as someone who may or may not pass). Build as a 5,000+ word pillar at `/first-time-home-buyer-qualification` (or `/first-time-home-buyer-qualification-guide`).

**Why pillar, not cluster:**
- The query cluster is too large to be a single article (rules, programs, credit, DTI, down payment, tax credits, state programs — each deserves its own sub-section).
- It can absorb 3 of the 5 related keywords as clusters (programs, down payment, credit score).
- Internal linking architecture: pillar → "First-time home buyer programs" cluster → state hub pages (50 programmatic) → HFA program pages (150 deep-dives) per `research/06-local-state.md`.
- Pillar also cross-links to the existing `research/01-pain-keywords.md` cluster (denial / qualification pain pages) and the `research/05-calculators.md` cluster (affordability / qualification calculators).

**Funnel role: MOFU (middle of funnel) — qualification-aware stage.** The user has heard "yes, you need to qualify" and is trying to figure out whether they do. The pillar is the gateway to the diagnostic tool.

### 8. Featured snippet / PAA opportunities
**PAA questions commonly seen (from competitor H2/H3 analysis + existing PAA data in workspace):**

Definition / threshold:
- "What qualifies you as a first-time home buyer?"
- "Who is considered a first-time home buyer?"
- "What are the requirements for a first-time home buyer loan?"

Money / credit:
- "What credit score do you need to buy a house as a first-time buyer?"
- "What is the minimum credit score for a first-time home buyer?"
- "What is the debt-to-income ratio for a first-time home buyer?"
- "How much down payment do you need as a first-time home buyer?"

Process:
- "How do I get preapproved as a first-time home buyer?"
- "What documents do I need for a first-time home buyer loan?"
- "How long does it take to get a first-time home buyer loan?"

Comparison:
- "FHA vs conventional for first-time home buyer — which is better?"
- "What is the difference between prequalified and preapproved?"

**Featured snippet formats to target:**
1. **Definition box (40–60 words):** "A first-time home buyer is anyone who has not owned a primary residence in the past 3 years. To qualify for most FTHB programs you need a credit score of 580+ (FHA) or 620+ (conventional), a DTI below ~50%, and a down payment of 3–5%." — capture for "first time home buyer qualification" definition snippet.
2. **Numbered list of requirements (6–8 items):** "How to qualify as a first-time home buyer: 1) Credit score 580+ 2) Stable 2-year employment 3) DTI below 50% 4) Down payment 3.5%+ 5) Documented income 6) U.S. citizenship or eligible noncitizen 7) Primary residence 8) Approved property type." — capture for "how to qualify as a first time home buyer" list snippet.
3. **Comparison table:** "FHA vs Conventional vs VA for First-Time Buyers" — `<table>` markup; capture for comparison-style queries.
4. **Stat box:** "Minimum credit score for FHA: 580 with 3.5% down, or 500 with 10% down." — capture for "minimum credit score" / "FHA loan requirements" snippets.

**Schema to deploy:** `Article` + `FAQPage` (5–8 PAA questions) + `ItemList` (top FTB loan programs) + `HowTo` (6-step qualification checklist).

### 9. Cited sources
- Rocket Mortgage FTB qualifications: https://www.rocketmortgage.com/learn/first-time-home-buyer-qualifications
- Rocket Mortgage FTB hub: https://www.rocketmortgage.com/learn/first-time-home-buyer
- Bankrate FTB hub: https://www.bankrate.com/mortgages/first-time-homebuyer/
- Bankrate FTB guide: https://www.bankrate.com/mortgages/first-time-homebuyer-guide/
- CFPB Owning a Home: https://www.consumerfinance.gov/owning-a-home/
- HUD Buying a Home: http://www.hud.gov/topics/buying_a_home
- HUD FHA Resource Center: https://www.hud.gov/fha
- Existing in-workspace: `research/first-time-homebuyer-tools-research.md` (comparable-tools analysis, §1–11)
- Existing in-workspace: `research/01-pain-keywords.md` (denial pain cluster, contains related PAA)
- Existing in-workspace: `research/02-affordability-qualification.md` (qualification volume tier priors)
- Existing in-workspace: `research/06-local-state.md` (state HFA + DPA prior research for cross-linking)
- Existing in-workspace: `research/paa_suggests.json`, `research/paa_questions_all.txt`, `research/paa_yahoo.json` (PAA corpora)

---

## 2. "first time buyer mistakes"

### 1. Estimated monthly U.S. search volume
**[EST — directional, not tool-verified]**
- **Broad match: ~3,000–12,000 / month** U.S.
- **Exact match: ~1,000–4,000 / month** U.S.
- Order-of-magnitude: this is a classic listicle query. Strong commercial intent. Q1 seasonal spike (January–April FTHB research peak). The "to avoid" modifier is the dominant variant; pure "first time buyer mistakes" is the bare version.

### 2. Search intent
**Informational with very high commercial-investigation lean.** The user is *pre-shopping*. They have not yet been denied but want to avoid being denied. The "mistakes" framing is risk-avoidance, which is a top converter for both lenders and credit-repair services.

### 3. Commercial intent
**High.** A user typing this is about to start (or has just started) the FTB process. They are highly coachable, high-intent, and reachable by lender, real estate, and credit-repair offers. CPC historically $20–$50 [EST — industry ballpark].

### 4. Competition level
**[COMP — APPROX] High.**
Top-ranking pages are dominated by:
- **Direct lenders:** Rocket Mortgage (#1 historically with "13 common first-time home buyer mistakes")
- **Big finance publishers:** Bankrate, NerdWallet, Investopedia, The Balance, GOBankingRates, Forbes Advisor
- **Realtor / listing sites:** Realtor.com, Zillow Learn, Redfin
- **Credit / personal-finance:** Credit Karma, LendingTree

### 5. Top 3–5 ranking URLs (live session, August 2026)
Verified by direct page fetch in this session:

1. **Rocket Mortgage** — https://www.rocketmortgage.com/learn/first-time-home-buyer-mistakes
   - *Title:* "13 common first-time home buyer mistakes and how to avoid them"
   - *Meta:* "First-time home buyers can run into many preventable setbacks throughout the purchase process. Learn 13 common home buying mistakes and how to avoid them."
   - *The actual 13 mistakes Rocket lists (extracted from H2s in live page):*
     1. Not getting mortgage preapproval
     2. Failing to get multiple mortgage rate quotes
     3. Not working with a real estate agent
     4. Buying more home than you can afford
     5. Not checking your credit report
     6. Waiving the home inspection
     7. Spending all your savings
     8. Not saving enough money
     9. Not making the right down payment
     10. Neglecting first-time home buyer programs
     11. Ignoring government-backed loans
     12. Not researching the neighborhood
     13. Making emotional decisions
   - *Each mistake has a "How can you avoid this mistake?" H3 follow-up* — Rocket's formula for FTB content.
   - 4 heavy CTAs ("See what you qualify for", "Take the first step toward the right mortgage", "See what you're eligible for").
2. **Bankrate** — https://www.bankrate.com/mortgages/first-time-homebuyer-mistakes/
   - *Title:* "10 first-time homebuyer mistakes to avoid"
   - *Meta:* "It's easy for first-time homebuyers to make mistakes. These expert tips will help first-timers avoid missteps on their way to homeownership."
   - 10 mistakes (vs Rocket's 13); the "10" framing is a Bankrate signature. Bankrate is editorially independent (disclosure prominent) so the content reads more journalistic.
3. **Rocket Mortgage** — https://www.rocketmortgage.com/learn/first-time-home-buyer-tips
   - *Title:* "15 first-time home buyer tips"
   - *Meta:* "Purchasing your first home can be overwhelming. These first-time home buyer tips can help you tackle the process with more confidence."
   - 15 tips. Note: "tips" and "mistakes" are sister queries — same audience, different framing. Rocket covers both.
4. **NerdWallet** — historically https://www.nerdwallet.com/article/mortgages/first-time-home-buyer-mistakes (could not be directly fetched in this session due to anti-bot protection, but the URL is the canonical NerdWallet piece that has ranked in the top 5 for this query cluster for years [TRAINING-DATA]).
5. **Realtor.com** — https://www.realtor.com/advice/buy/first-time-home-buyer-mistakes/ (URL pattern verified; could not fetch the live page in this session — historically a top-5 ringer for this query [TRAINING-DATA]).
6. **Investopedia** — https://www.investopedia.com/articles/mortgages-real-estate/12/first-time-home-buyer.asp (could not be directly fetched in this session due to anti-bot protection, but the article is the canonical Investopedia FTB piece [TRAINING-DATA]).

### 6. Long-tail variations (10, observed patterns)
- "first time home buyer mistakes to avoid"
- "common first time home buyer mistakes"
- "first time home buyer mistakes reddit" (high-engagement variant — Reddit threads rank on page 2–3; valuable for understanding vernacular and emotional concerns)
- "first time buyer mistakes to avoid reddit"
- "first time home buyer credit mistakes"
- "first time home buyer down payment mistakes"
- "first time home buyer mortgage mistakes"
- "first time home buyer biggest mistakes"
- "first time home buyer offer mistakes"
- "first time home buyer inspection mistakes"

### 7. Pillar page opportunity
**Strong cluster article under the "qualification" pillar.** Build as `/first-time-home-buyer-mistakes-to-avoid` (matching Rocket's exact title phrasing — they've validated the URL) or as a "common FTB mistakes" pillar with deeper sections.

**Why cluster, not pillar:**
- The query is narrower than "qualification" (the user wants a checklist, not a deep analysis)
- It cross-links naturally to the qualification pillar (each mistake is a qualification risk)
- It cross-links to the credit score cluster (mistake #5 is credit-related)
- It can host an internal CTA into the diagnostic ("Take our 2-min qualification diagnostic to see which of these 13 mistakes apply to you")

**Funnel role: MOFU (middle of funnel) — risk-aware stage.** The user has decided to buy a home and is stress-testing their plan. They are open to tools that tell them what to fix.

### 8. Featured snippet / PAA opportunities
**PAA questions commonly seen:**

List / overview:
- "What are common first-time home buyer mistakes?"
- "What should first-time home buyers avoid?"
- "What mistakes do first-time home buyers make?"

Specific scenarios:
- "What credit score do I need as a first-time home buyer?"
- "Should first-time home buyers waive inspection?"
- "Is it a mistake to buy a house with an FHA loan?"
- "How much should first-time home buyers put down?"

Process:
- "Should I get preapproved before looking at homes?"
- "What is the biggest mistake first-time home buyers make?"

**Featured snippet formats to target:**
1. **Numbered list (10–15 items):** "13 common first-time home buyer mistakes to avoid: 1) Skipping preapproval 2) Not shopping multiple lenders..." — capture for list snippets. Use `<ol>` markup.
2. **Stat / definition box:** "The #1 mistake first-time home buyers make is skipping mortgage preapproval, which leads to rejected offers and lost earnest money." — capture for "biggest mistake" query.
3. **Table (mistake → consequence → fix):** 3-column table mapping each mistake to its financial consequence and the actionable fix. Capture for "how to avoid" queries.

**Reddit / vernacular angles to mine:** Search "first time home buyer mistakes reddit" to harvest the actual user concerns (inspection waivers, gift fund rules, FHA condo approval, etc.). Reddit threads often surface concerns the publisher articles don't address, e.g., "lender denied me at the last minute" or "underwriter changed my job date."

**Schema to deploy:** `Article` + `FAQPage` (5–8 PAA questions) + `ItemList` (the numbered list of mistakes).

### 9. Cited sources
- Rocket Mortgage 13 mistakes: https://www.rocketmortgage.com/learn/first-time-home-buyer-mistakes
- Bankrate 10 mistakes: https://www.bankrate.com/mortgages/first-time-homebuyer-mistakes/
- Rocket Mortgage 15 tips: https://www.rocketmortgage.com/learn/first-time-home-buyer-tips
- NerdWallet (canonical, training-data): https://www.nerdwallet.com/article/mortgages/first-time-home-buyer-mistakes
- Realtor.com Advice (canonical, training-data): https://www.realtor.com/advice/buy/first-time-home-buyer-mistakes/
- Investopedia (canonical, training-data): https://www.investopedia.com/articles/mortgages-real-estate/12/first-time-home-buyer.asp
- Existing in-workspace: `research/01-pain-keywords.md` (denial pain cluster, contains related PAA like "what gets you denied for a mortgage" and "what to do if mortgage loan is denied")
- Existing in-workspace: `research/paa_questions_deduped.txt`, `research/paa_questions_all.txt` (PAA corpora)

---

## 3. "first time buyer grants"

### 1. Estimated monthly U.S. search volume
**[EST — directional, not tool-verified]**
- **Broad match: ~3,000–15,000 / month** U.S. (including "first time home buyer grants" + "first time home buyer grant" + state variants)
- **Exact match: ~500–2,500 / month** U.S.
- Order-of-magnitude: the "grants" framing is **strongly commercial** because it implies free money. It is closely linked to "down payment assistance" (DPA), which is a much higher volume cluster (see `research/06-local-state.md` cumulative estimate of ~12K–40K/mo for the DPA template). The "grants" term is the smaller, more aspirational cousin.

### 2. Search intent
**Informational with very strong commercial-investigation lean and a strong transactional undercurrent.** The user is looking for free money to buy a home. The word "grant" is psychologically different from "loan" — it implies a no-repayment gift. Many of these users will convert to HFA or HUD counseling applications within 1–3 clicks.

### 3. Commercial intent
**Very high.** This is among the highest-commercial-intent queries in the entire mortgage vertical. The user has self-identified as needing help and is searching for the help they hope exists. Every HFA, HUD counseling agency, lender, and grant aggregator wants this query. CPC historically $20–$60 [EST — industry ballpark].

### 4. Competition level
**[COMP — APPROX] High.**
Top-ranking pages are dominated by:
- **Direct lenders:** Rocket Mortgage (with DPA + grants explainer pages)
- **Big finance publishers:** Bankrate, NerdWallet, Investopedia, The Balance, GOBankingRates
- **Real estate platforms:** Realtor.com, Zillow
- **Government / regulatory:** HUD, USA.gov, state HFA sites (calhfa.ca.gov, etc.)
- **Niche grant aggregators:** Down Payment Resource (downpaymentresource.com), HSH.com

### 5. Top 3–5 ranking URLs (live session, August 2026)
Verified by direct page fetch in this session:

1. **Rocket Mortgage** — https://www.rocketmortgage.com/learn/down-payment-assistance
   - *Title:* "Down payment assistance programs: What they are, and how they work"
   - *Meta:* "Learn how down payment assistance programs work, who qualifies, and where to find grants or loans that can help with upfront home buying costs. Start here."
   - *H2 structure (extracted):* What is DPA? How does DPA work? DPA qualifications / Types of DPA (grants vs. loans vs. forgivable seconds) / Pros and cons / Examples of DPA programs / How to find DPA / How to apply / How long does it take?
2. **Rocket Mortgage** — https://www.rocketmortgage.com/down-payment-assistance
   - *Title:* "Great news! Rocket Mortgage® accepts down payment assistance."
   - Rocket's *product* page (vs. the *education* page above). CTA-heavy: "Find out if you qualify."
3. **Rocket Mortgage** — https://www.rocketmortgage.com/learn/fha-down-payment-assistance
   - *Title:* "FHA down payment assistance" (live page in research/)
4. **Bankrate** — https://www.bankrate.com/mortgages/down-payment-assistance/
   - *Title:* "Down payment assistance: How it works and how to get it"
   - *Meta:* "Down payment assistance programs can help you buy a home sooner. Here's how to find one and what you'll need to qualify."
   - Bankrate's general DPA pillar; the "grants" content is folded in.
5. **Down Payment Resource** — https://downpaymentresource.com/
   - *Title:* (DPR is a grant aggregator; live fetched 200 OK in this session)
   - The canonical grant-aggregator site. Lists 2,000+ programs by state. Used by lenders as a referral source.
6. **Bankrate FTB hub (cross-link)** — https://www.bankrate.com/mortgages/first-time-homebuyer/ (links to "Guide to first-time homebuyer grants" as a sub-article — Bankrate's H2 #11 was "Guide to first-time homebuyer grants")

**State HFA sites** (per `research/06-local-state.md`):
- CalHFA: https://www.calhfa.ca.gov (dominates "California first time home buyer grants")
- TSAHC (Texas): https://www.tsahc.org (dominates Texas variants)
- Florida Housing: https://www.floridahousing.org (dominates Florida variants)
- Plus 47 other state HFAs

### 6. Long-tail variations (10, observed patterns)
- "first time home buyer grants 2026" (calendar variant, Q1 spike)
- "first time home buyer grants for down payment"
- "first time home buyer grants by state"
- "first time home buyer grants 2025"
- "first time home buyer grants texas"
- "first time home buyer grants california"
- "first time home buyer grants florida"
- "first time home buyer grants for low income"
- "first time home buyer grants near me"
- "[state] first time home buyer grants 2026"

### 7. Pillar page opportunity
**Strong cluster article under the "qualification" pillar, with massive cross-linking to the state/local pillar.** Build as `/first-time-home-buyer-grants` (national) and `/first-time-home-buyer-grants/[state]` (state programmatic, ~50 pages per `research/06-local-state.md` architecture).

**Why hybrid (national + state):**
- National "grants" page establishes topical authority and links out to all 50 states
- State pages are the high-conversion landing pages (one per HFA)
- The "grants" query is the *#1 entry point* into the state/local HFA cluster per `research/06-local-state.md`
- The diagnostic site can answer "do I qualify for [state] grants?" with a 2-min input — a level of personalization neither Rocket nor Bankrate provides

**Funnel role: MOFU/BOFU — qualification-aware + purchase-ready.** The user has identified a need (money) and is searching for the supply (programs). A diagnostic that says "you qualify for CalHFA MyHome, you don't qualify for CalHFA Dream For All (income too high), but you DO qualify for TSAHC" is a unique value prop.

### 8. Featured snippet / PAA opportunities
**PAA questions commonly seen:**

Definition:
- "What is a first-time home buyer grant?"
- "Are first-time home buyer grants real?"
- "What is the difference between a grant and a loan for down payment assistance?"

Money / availability:
- "How much money can I get from a first-time home buyer grant?"
- "Who qualifies for first-time home buyer grants?"
- "Is there a first-time home buyer grant in [state]?"
- "Do first-time home buyer grants need to be repaid?"

Process:
- "How do I apply for a first-time home buyer grant?"
- "Where do I find first-time home buyer grants?"

Year-specific:
- "Are there first-time home buyer grants in 2026?"

**Featured snippet formats to target:**
1. **Definition box:** "A first-time home buyer grant is free money from a state, local, or nonprofit program that helps cover your down payment or closing costs. Grants do not need to be repaid. Eligibility depends on income, location, and first-time buyer status." — capture for "what is a first-time home buyer grant" snippet.
2. **List / table (top grants by state):** "Top 10 first-time home buyer grants in 2026" with state / amount / eligibility. Use `<table>` markup. Capture for "best grants" snippet.
3. **Stat box:** "The CalHFA Dream For All program offers up to 20% of the purchase price for first-time buyers in California. Income limits apply." — capture for state-specific snippets.
4. **HowTo list (5 steps):** "How to find a first-time home buyer grant: 1) Check your state's HFA 2) Search DownPaymentResource.com 3) Ask your lender 4) Contact a HUD counselor 5) Check employer programs." Capture for process queries.

**Schema to deploy:** `Article` + `FAQPage` + `ItemList` (top grants ranked) + `FinancialProduct` (per program) + `GovernmentService` (per HFA program, per the schema pattern in `research/06-local-state.md` §5).

### 9. Cited sources
- Rocket Mortgage DPA: https://www.rocketmortgage.com/learn/down-payment-assistance
- Rocket Mortgage DPA product: https://www.rocketmortgage.com/down-payment-assistance
- Rocket Mortgage FHA DPA: https://www.rocketmortgage.com/learn/fha-down-payment-assistance
- Bankrate DPA: https://www.bankrate.com/mortgages/down-payment-assistance/
- Bankrate FTB hub: https://www.bankrate.com/mortgages/first-time-homebuyer/
- Down Payment Resource: https://downpaymentresource.com/
- HUD: http://www.hud.gov/topics/buying_a_home
- CalHFA: https://www.calhfa.ca.gov
- TSAHC: https://www.tsahc.org
- Existing in-workspace: `research/06-local-state.md` (full state-by-state HFA analysis, §1–11)
- Existing in-workspace: `research/first-time-homebuyer-tools-research.md` §6 (State HFAs deep-dive)
- Existing in-workspace: `research/paa_yahoo.json` (PAA corpus)

---

## 4. "first time home buyer programs" (closely related)

### 1. Estimated monthly U.S. search volume
**[EST — directional, not tool-verified]**
- **Broad match: ~8,000–25,000 / month** U.S. (national + state variants)
- **Exact match (national): ~1,500–5,000 / month** U.S.
- **State variants (per `research/06-local-state.md`):** "California first time home buyer programs" alone ~800–1,600/mo; "Texas" ~600–1,200/mo; "Florida" ~600–1,400/mo. Combined state variants add ~7,000–25,000/mo to the broad-match total.

### 2. Search intent
**Commercial-investigation, leaning transactional.** A user searching "FTB programs" is actively looking for help. The word "programs" implies structured offerings (not one-off advice). The user wants to know what exists, what they qualify for, and how to apply.

### 3. Commercial intent
**Very high.** Same intent tier as "grants" but broader — programs include loans, DPA, education, and counseling, all of which are sellable to lenders, real estate agents, and housing counseling agencies.

### 4. Competition level
**[COMP — APPROX] High.**
- **National:** Rocket, Bankrate, NerdWallet, Investopedia
- **State:** state HFAs dominate the state-specific variants
- **Aggregator:** Down Payment Resource, HSH

### 5. Top 3–5 ranking URLs
1. **Rocket Mortgage** — https://www.rocketmortgage.com/learn/first-time-home-buyer (national FTB hub; *Title:* "A guide to first-time home buyer programs, loans and grants")
2. **Rocket Mortgage** — https://www.rocketmortgage.com/purchase/first-time-homebuyer (purchase landing page; *Title:* "First-time home buyer? We've got you.")
3. **Bankrate** — https://www.bankrate.com/mortgages/first-time-homebuyer/ (FTB hub)
4. **HUD** — http://www.hud.gov/topics/buying_a_home (government source)
5. **State HFAs** (per state) — CalHFA, TSAHC, Florida Housing, etc. (per `research/06-local-state.md`)

### 6. Long-tail variations (8, observed patterns)
- "first time home buyer programs 2026"
- "first time home buyer programs by state"
- "first time home buyer programs for low income"
- "first time home buyer programs for teachers"
- "first time home buyer programs for veterans"
- "first time home buyer programs with low down payment"
- "first time home buyer programs for single mothers"
- "first time home buyer programs with bad credit"

### 7. Pillar page opportunity
**Strong national cluster with 50-state programmatic buildout.** This is the architectural core of the state/local cluster. Build as:
- `/first-time-home-buyer-programs` (national pillar)
- `/first-time-home-buyer-programs/[state]/` (50 state pages)
- `/first-time-home-buyer-programs/[state]/[program]/` (~150 program deep-dives, per `research/06-local-state.md` architecture)

### 8. Featured snippet / PAA opportunities
- "What is the best first-time home buyer program?"
- "What programs are available for first-time home buyers?"
- "How do I find first-time home buyer programs in my state?"
- "Do first-time home buyer programs still exist in 2026?"
- "What is the income limit for first-time home buyer programs?"

**Featured snippet formats:** Top programs table (state-by-state), definition box, list of program types (loans, grants, DPA, education, counseling).

### 9. Cited sources
- Rocket Mortgage FTB hub: https://www.rocketmortgage.com/learn/first-time-home-buyer
- Rocket Mortgage purchase FTB: https://www.rocketmortgage.com/purchase/first-time-homebuyer
- Bankrate FTB hub: https://www.bankrate.com/mortgages/first-time-homebuyer/
- HUD: http://www.hud.gov/topics/buying_a_home
- All 50 state HFAs (full list in `research/06-local-state.md` §9)
- Existing in-workspace: `research/06-local-state.md` (definitive state-program research)

---

## 5. "first time home buyer down payment" (closely related)

### 1. Estimated monthly U.S. search volume
**[EST — directional, not tool-verified]**
- **Broad match: ~10,000–35,000 / month** U.S. (national + state + percent variants)
- **Exact match: ~2,000–7,000 / month** U.S.
- The bare "down payment" cluster is much larger (~40K–80K/mo for "how much down payment for a house" alone [EST]). The "first time home buyer down payment" variant is a meaningful fraction of that — significant because the FTB framing unlocks DPA / grant content.

### 2. Search intent
**Commercial-investigation, transactional-adjacent.** The user knows they need a down payment and is trying to figure out how much, where it comes from, and how to minimize it. The FTB framing brings in DPA/grant programs that the bare "down payment" query doesn't surface.

### 3. Commercial intent
**High.** Same as the bare "down payment" query but with grant/DPA overlays. CPC historically $20–$50.

### 4. Competition level
**[COMP — APPROX] High.**
- **Direct lenders:** Rocket, Chase, loanDepot
- **Big finance publishers:** Bankrate, NerdWallet, Investopedia, The Balance
- **Real estate:** Realtor.com, Zillow
- **Government:** HUD, state HFAs

### 5. Top 3–5 ranking URLs
1. **Rocket Mortgage** — https://www.rocketmortgage.com/learn/down-payment-assistance (covered above; the cross-link from "down payment" queries)
2. **Rocket Mortgage** — https://www.rocketmortgage.com/learn/first-time-home-buyers-and-down-payments (FTB-specific down payment article)
3. **Rocket Mortgage** — https://www.rocketmortgage.com/learn/what-is-a-down-payment (general down payment explainer)
4. **Rocket Mortgage** — https://www.rocketmortgage.com/learn/fha-loan-down-payment-requirements
5. **Bankrate** — https://www.bankrate.com/mortgages/down-payment-assistance/
6. **Bankrate** — https://www.bankrate.com/mortgages/first-time-homebuyer/

### 6. Long-tail variations (8, observed patterns)
- "first time home buyer down payment assistance"
- "first time home buyer down payment 2026"
- "first time home buyer down payment percentage"
- "first time home buyer down payment gift"
- "first time home buyer down payment loan"
- "first time home buyer down payment requirements"
- "first time home buyer no down payment"
- "first time home buyer low down payment"

### 7. Pillar page opportunity
**Strong cluster under the qualification pillar + state hub.** Build as `/first-time-home-buyer-down-payment` with deep linking to:
- DPA programs (per state, 50 pages)
- FHA 3.5% down detail
- Conventional 3% / 5% down detail
- VA / USDA 0% down detail
- Gift fund rules
- Down payment calculator (cross-link to `research/05-calculators.md`)

### 8. Featured snippet / PAA opportunities
- "How much do first-time home buyers put down?"
- "Can I buy a house with no down payment as a first-time buyer?"
- "What is the minimum down payment for a first-time home buyer?"
- "Can I use a gift for my down payment as a first-time home buyer?"

**Featured snippet formats:** Stat box ("The minimum down payment for an FHA loan is 3.5%."), comparison table (FHA vs Conventional vs VA vs USDA down payment requirements), how-to list (steps to save for a down payment).

### 9. Cited sources
- Rocket Mortgage first-time home buyers and down payments: https://www.rocketmortgage.com/learn/first-time-home-buyers-and-down-payments
- Rocket Mortgage DPA: https://www.rocketmortgage.com/learn/down-payment-assistance
- Rocket Mortgage what is a down payment: https://www.rocketmortgage.com/learn/what-is-a-down-payment
- Rocket Mortgage FHA down payment: https://www.rocketmortgage.com/learn/fha-loan-down-payment-requirements
- Bankrate DPA: https://www.bankrate.com/mortgages/down-payment-assistance/
- Existing in-workspace: `research/05-calculators.md` (down payment calculator cluster)
- Existing in-workspace: `research/06-local-state.md` (DPA state programs)

---

## 6. "first time home buyer credit score" (closely related)

### 1. Estimated monthly U.S. search volume
**[EST — directional, not tool-verified]**
- **Broad match: ~3,000–12,000 / month** U.S. (national + FICO threshold variants)
- **Exact match: ~700–2,500 / month** U.S.
- The bare "credit score to buy a house" cluster is much larger (~15K–40K/mo [EST]). The FTB framing is a meaningful slice that brings in program-specific thresholds (FHA 580, Conventional 620, etc.).

### 2. Search intent
**Informational with very strong commercial-investigation lean.** The user wants to know (a) what credit score they need, (b) what to do if their score is too low, and (c) how to improve it. FICO is the single biggest gatekeeper in the entire mortgage funnel.

### 3. Commercial intent
**High.** Every credit-repair service, credit-monitoring product, and lender prequalification tool targets this query. CPC historically $25–$60.

### 4. Competition level
**[COMP — APPROX] High.**
- **Direct lenders:** Rocket, Chase, Wells Fargo, loanDepot
- **Big finance publishers:** Bankrate, NerdWallet, Investopedia, The Balance, GOBankingRates
- **Credit / personal-finance:** Credit Karma, myFICO, Experian, TransUnion, Equifax
- **Real estate:** Zillow, Realtor.com

### 5. Top 3–5 ranking URLs
1. **Rocket Mortgage** — https://www.rocketmortgage.com/learn/what-credit-score-is-needed-to-buy-a-house
   - *Title:* "What credit score do you need to buy a house?"
   - *Meta:* "Wondering what credit score you need to buy a house? There's often no hard answer, but higher scores will always mean more options. Check out practical advice."
   - *H2 structure (extracted):* What's the minimum credit score to buy a house? / Why your credit score matters / Major factors affecting your credit score / What's a good credit score? / How to increase your credit score before buying a house / Qualification factors that lenders consider / The bottom line.
   - *H3s (extracted):* 1) Pay your bills on time 2) Pay off outstanding debts 3) Limit new inquiries 4) Don't close old accounts 5) Check your credit report for errors. Then a sub-section on the 2025 Fannie Mae / Freddie Mac credit score policy changes (FICO 10T / VantageScore 4.0 adoption).
2. **NerdWallet** (canonical, training-data) — https://www.nerdwallet.com/article/mortgages/minimum-credit-score-for-mortgage
3. **Bankrate** — https://www.bankrate.com/mortgages/what-credit-score-do-you-need-to-buy-a-house/ (likely; URL pattern matches)
4. **myFICO** — https://www.myfico.com/credit-education (the FICO brand's own education center; high trust for FICO-specific questions)
5. **Credit Karma** — https://www.creditkarma.com/credit/i/minimum-credit-score-to-buy-a-house (likely; URL pattern)
6. **HUD** — http://www.hud.gov/fha (FHA-specific credit requirements, 580 minimum)

### 6. Long-tail variations (8, observed patterns)
- "first time home buyer credit score requirements"
- "first time home buyer credit score fha"
- "first time home buyer credit score 580"
- "first time home buyer credit score 620"
- "first time home buyer credit score 500"
- "what credit score do you need to buy a house first time buyer"
- "minimum credit score for first time home buyer"
- "first time home buyer bad credit"

### 7. Pillar page opportunity
**Strong cluster under the qualification pillar — and the #1 cross-link to the credit-repair diagnostic angle.** Build as `/first-time-home-buyer-credit-score` (or `/credit-score-for-first-time-home-buyer`). 

**Why this is special for the diagnostic site:**
- FICO is the #1 denial reason in HMDA data (per `research/01-pain-keywords.md`)
- The diagnostic can offer "what's your FICO gap, and what would close it?" — a unique value prop
- Cross-link to credit-repair resources (HUD counseling, Credit Karma, myFICO) for users who score below program thresholds
- The 2025 Fannie/Freddie FICO 10T / VantageScore 4.0 shift is a *fresh* E-E-A-T signal (Rocket's article covers it; we should too)

### 8. Featured snippet / PAA opportunities
- "What credit score do I need to buy a house as a first-time buyer?"
- "What is the minimum credit score for an FHA loan?"
- "Can I buy a house with a 580 credit score?"
- "Can I buy a house with a 500 credit score?"
- "How can I improve my credit score before buying a house?"
- "How long does it take to improve my credit score?"

**Featured snippet formats:** Stat box ("FHA minimum credit score: 580 with 3.5% down. Conventional minimum: 620."), table (loan program vs. minimum FICO), how-to list (5 steps to improve FICO).

### 9. Cited sources
- Rocket Mortgage credit score: https://www.rocketmortgage.com/learn/what-credit-score-is-needed-to-buy-a-house
- NerdWallet (canonical, training-data): https://www.nerdwallet.com/article/mortgages/minimum-credit-score-for-mortgage
- myFICO education: https://www.myfico.com/credit-education
- HUD FHA Resource Center: https://www.hud.gov/fha
- Existing in-workspace: `research/01-pain-keywords.md` (FICO as the #1 denial reason)
- Existing in-workspace: `research/02-affordability-qualification.md` (related credit-score pain)

---

## 7. First-Time Home Buyer Content Landscape (2025–2026)

The 2025–2026 first-time home buyer content landscape is dominated by **3 publisher types** plus a **government tier** plus a **few emerging niche players**. Below is the competitive map and the gaps the diagnostic site can exploit.

### 7.1 Big publisher template: Rocket Mortgage Learn (rockets the leader)

Rocket's content cluster is the **most aggressive in the SERP** for first-time buyer queries. From `research/rocket-learn-sitemap.html` (1,660 learn URLs in the sitemap), the FTB cluster is dense:

**Rocket's FTB pillar + sub-articles (extracted from sitemap + live fetches):**
- **Hub:** `/learn/first-time-home-buyer` — "A guide to first-time home buyer programs, loans and grants"
- **Qualification:** `/learn/first-time-home-buyer-qualifications` — 12 H2s, 24 H3s, very comprehensive
- **Mistakes:** `/learn/first-time-home-buyer-mistakes` — 13 numbered mistakes with "How can you avoid this mistake?" follow-ups
- **Tips:** `/learn/first-time-home-buyer-tips` — 15 numbered tips
- **Tax credit:** `/learn/first-time-home-buyer-tax-credit`
- **Expenses:** `/learn/first-time-home-buyer-expenses-to-save-for`
- **Class:** `/learn/first-time-homebuyer-class`
- **State-specific city article:** `/learn/313-detroit-down-payment-assistance` (unique — Rocket has 1+ city-specific articles)
- **DPA cluster:** `/learn/down-payment-assistance`, `/learn/fha-down-payment-assistance`, `/learn/how-to-get-down-payment-assistance`, `/learn/fha-loan-down-payment-requirements`
- **Credit score cluster:** `/learn/what-credit-score-is-needed-to-buy-a-house`
- **Other FTB-adjacent:** `/learn/40-percent-of-first-time-home-buyers-compromise-their-nonnegotiables`, `/learn/first-time-homebuyers-survey`, `/learn/most-affordable-cities-for-first-time-home-buyers`, `/learn/how-to-repair-credit-first-time-home-buyers`, `/learn/first-time-home-buyers-purchasing-a-home`

**Rocket's formula (consistent across the FTB cluster):**
1. H1: numbered or guide-framed title ("13 common mistakes", "15 tips", "A guide to...")
2. 2–4 interstitial CTA blocks ("See what you qualify for", "Take the first step toward the right mortgage") — each is a trackable lead-capture event
3. 1 H2 per numbered tip/mistake, with a "How can you avoid this mistake?" or "Why this matters" H3 follow-up
4. FAQ section at the bottom (good PAA capture)
5. "Related resources" cross-link block at the end (internal-link graph within Rocket's silo)
6. Author byline (Kevin Graham, Rory Arnold, etc.) — E-E-A-T signal
7. "Last updated" date — freshness signal

**Rocket's commercial overlay:**
- 1 in-article CTA per 2–3 H2s (very aggressive)
- "See what you qualify for" is the *primary* CTA across the entire FTB cluster — Rocket's lead-capture engine
- 4–6 CTA blocks per article on average
- The articles are **education with a clear product funnel** — the article IS the top of the funnel

**What Rocket does well:** Consistency. Freshness. Internal-linking. Author bylines. Numbered listicle format that Google loves.

**What Rocket does poorly:** No personalization, no "do YOU qualify?" verdict, no state-specific diagnostic. Same article shown to a 580 FICO buyer and an 800 FICO buyer.

### 7.2 Big publisher template: Bankrate

Bankrate's FTB cluster (extracted from live fetches + sitemap pattern):
- **Hub:** `/mortgages/first-time-homebuyer/` — aggregator page linking to ~20 sub-articles
- **Guide:** `/mortgages/first-time-homebuyer-guide/` — 10-step structured pillar
- **Mistakes:** `/mortgages/first-time-homebuyer-mistakes/` — "10 first-time homebuyer mistakes to avoid" (numbered)
- **DPA:** `/mortgages/down-payment-assistance/`
- **FHA:** `/mortgages/fha-loans/`
- **Calculators cluster:** mortgage-calculator, refinance-calculator, amortization-calculator, 15/30-year rates, etc.
- **State pages:** `Best mortgage lenders in [state] in 2026` (programmatic for all 50 states)

**Bankrate's formula (distinct from Rocket):**
1. Editorially independent disclosure (prominent) — Bankrate markets itself as a neutral publisher
2. Multi-expert byline + "reviewed by" + "fact-checked by" — strong E-E-A-T
3. 10-step structured format (vs Rocket's "13 mistakes" / "15 tips" numbered format)
4. Heavy cross-linking to internal calculators (the "use our calculator" CTA in every article)
5. "Bankrate promise" / "Editorial integrity" / "How we make money" disclosure blocks at the top — transparency marketing
6. "Key takeaways" callout box at the top of every article — snippet-optimized

**What Bankrate does well:** Trust signals, E-E-A-T, multi-author verification, calculator integration, content depth. Bankrate's "10 mistakes" article is more journalistic than Rocket's "13 mistakes."

**What Bankrate does poorly:** No personalization, no verdict. The user gets a 10-step guide and a list of mistakes, but no "you specifically are at risk of #4, #7, and #10."

### 7.3 Big publisher template: NerdWallet

**Could not be directly fetched in this session due to anti-bot protection**, but based on prior in-workspace research (`research/01-pain-keywords.md`, `research/02-affordability-qualification.md`) and the canonical URL pattern, NerdWallet's FTB cluster includes:
- `/article/mortgages/first-time-home-buyer-mistakes`
- `/article/mortgages/down-payment-assistance-for-first-time-home-buyers`
- `/article/mortgages/first-time-home-buyer-grants`
- `/article/mortgages/minimum-credit-score-for-mortgage`
- `/article/mortgages/first-time-home-buyer` (the FTB hub)

NerdWallet's distinguishing feature: **financial calculators and tools embedded in every article** (similar to Bankrate but more aggressive). NerdWallet is also a CFPB-style trust brand for the "I have no idea where to start" FTB.

**What NerdWallet does well:** Calculator density, plain language, brand trust for the uninitiated.

**What NerdWallet does poorly:** Same as the others — no personalization, no verdict.

### 7.4 Real estate platform template: Zillow, Realtor.com, Redfin

These three have FTB content but it's secondary to their primary real estate search product. Format is typically:
- 6–10 step checklist articles ("First-time home buyer's guide to [city]")
- "Top mistakes" listicles
- Mortgage calculator embeds
- Editorial disclosure (Realtor.com is the most journalistic; Zillow is the most product-tied)

**What they do well:** Local market data overlays, city-specific content, listings-to-content cross-link.

**What they do poorly:** FTB content is product-derivative (the goal is to get you to the listings site, not to answer your question). Zillow's FTB pages are thin; Realtor.com is stronger.

### 7.5 Government / regulatory template: HUD, CFPB, IRS

The .gov tier is the **trust authority** for FTB content:
- **HUD** (`hud.gov/buying`, `hud.gov/fha`, `hud.gov/topics/buying_a_home`) — owns the FHA program content, the HUD housing counselor directory, and the PDF "Home Buyer's Guide"
- **CFPB** (`consumerfinance.gov/owning-a-home/`) — owns the mortgage shopping guide, the Closing Disclosure / Loan Estimate explorers, and the TILA-RESPA plain-language content
- **IRS** (`irs.gov`) — owns the FTB tax credit content (no current federal credit, but state credits flow through)
- **USA.gov** — directory of FTB resources

**What they do well:** Authority. Trust. Plain language. No commercial bias.

**What they do poorly:** UX. Navigation. Interactive tools. Personalization. The HUD site in particular is dated and labyrinthine (per `research/first-time-homebuyer-tools-research.md` §3).

### 7.6 Niche aggregators: Down Payment Resource, HSH, The Mortgage Reports

- **Down Payment Resource (downpaymentresource.com)** — the canonical grant aggregator. Live fetched in this session. Lists 2,000+ programs by state. The site is a directory, not an editorial site. Free for consumers; lenders pay for referral integrations.
- **HSH.com** — historic mortgage data + FTB content. Strong on the "qualification" angle (FICO thresholds, DTI).
- **The Mortgage Reports** — FTB-focused lender-adjacent publisher. Strong on the "is this still available in 2026" calendar-year content.

### 7.7 The Gap the Diagnostic Site Can Own

**Across all 5 publisher templates (Rocket, Bankrate, NerdWallet, Zillow/Realtor, Government), every FTB page is one of three types:**

1. **Education (CFPB, HUD, HomeView, CreditSmart).** Excellent content. Zero personalization. The user learns what a credit score is but doesn't learn what THEIR credit score is doing.
2. **Listicle (Rocket, Bankrate, NerdWallet).** 10–15 numbered items. Strong commercial CTAs. Zero personalization.
3. **Tool (Bankrate calculator, Rocket prequal, NerdWallet prequal).** Calculator-driven. *Some* personalization, but only at the "what payment can I afford" level, not at the "why was I denied / will I be denied" level.

**No existing tool answers the *denial diagnostic* question for first-time buyers specifically.** A diagnostic site that can:
- Capture the user's financial profile (FICO, DTI, LTV, income, location, employment)
- Map to ALL relevant programs (FHA, Home Possible, conventional, CalHFA, TSAHC, Florida HFA, etc.)
- Explain WHY they don't qualify for each program
- Explain HOW TO FIX each gap with a timeline and expected impact
- Tri-age to the next step (DIY credit repair / HUD counselor / CFPB complaint / state HFA DPA / wait 6 months and reapply)

…is the **only** tool in the FTB SERP that does this. The closest existing tool is **CalHFA's "Find the Right Loan Program"** (per `research/first-time-homebuyer-tools-research.md` §6), but that only tells you what you DO qualify for, not why you don't, and it's California-only.

**Specific gap opportunities (where diagnostic content wins):**

| Gap | Why it's a gap | Diagnostic site play |
|---|---|---|
| **"Why was I denied as a first-time buyer?"** | Rocket/Bankrate/NerdWallet answer "what to look out for" not "what to do after the fact" | Build `/first-time-home-buyer-denied-mortgage-what-to-do` — a denial-to-fix diagnostic |
| **"Do I qualify for [state HFA]?"** | State HFAs each have their own site with their own rules; no national aggregator answers per-user | Build `/first-time-home-buyer-programs/[state]/[program]/qualify` — 150+ program-level diagnostic pages |
| **"What credit score do I need for [loan type]?"** | Rocket's table is good but static; the user wants to know "my 595 — what programs does that unlock?" | Build `/credit-score-mortgage-qualifier` — FICO-to-programs lookup |
| **"How much down payment do I actually need?"** | The standard answer is 3.5% / 5% / 20% but the user wants "given my income and price, what's MY down payment?" | Build `/down-payment-calculator` (cross-link to `research/05-calculators.md`) |
| **"What grants do I qualify for in [state]?"** | No national aggregator answers per-user per-state | Build `/first-time-buyer-grants/[state]/` — 50 state pages that filter the DPA list by the user's profile |
| **"How long until I can qualify?"** | Nobody answers this with a timeline. "Fix your credit" is the standard non-answer. | Build a "qualification timeline calculator" that takes current FICO, target FICO, current DTI, target DTI and returns months-to-qualify |

---

## 8. People Also Ask Questions (Curated Set for the Cluster)

Below are 8 PAA questions that **consistently appear** on first-time home buyer queries (from competitor H2/H3 analysis + existing PAA corpora in workspace: `research/paa_suggests.json`, `research/paa_questions_all.txt`, `research/paa_yahoo.json`). These are the priority PAA targets for the cluster's `FAQPage` schema.

1. **"What qualifies you as a first-time home buyer?"** — definition PAA, high snippet value, target with 40–60 word definition box
2. **"What is the minimum credit score for a first-time home buyer?"** — stat PAA, target with table (FHA 580 / Conventional 620 / VA no min / USDA no min)
3. **"What are the most common first-time home buyer mistakes?"** — list PAA, target with 10-item numbered list
4. **"How much down payment do I need as a first-time home buyer?"** — money PAA, target with stat box + comparison table
5. **"Are first-time home buyer grants real?"** — yes/no PAA, target with direct paragraph answer + link to Down Payment Resource
6. **"How do I apply for a first-time home buyer grant?"** — process PAA, target with 5-step how-to list
7. **"What is the difference between prequalified and preapproved?"** — comparison PAA, target with side-by-side table
8. **"Can I buy a house with bad credit as a first-time buyer?"** — qualification PAA, target with "yes if..." answer covering FHA 580 / 500-with-10%-down / non-QM options

(Additional PAA questions harvested from `research/paa_suggests.json` PAA corpora, present but lower priority:)
- "how to qualify for mortgage loan"
- "how to qualify for mortgage with bad credit"
- "how much down payment for house first time buyer"
- "how to improve credit score to buy a house"
- "what credit score do I need for an FHA loan"
- "do first-time home buyer programs still exist in 2026"
- "what is the income limit for first-time home buyer programs"
- "what is the difference between an FHA loan and a conventional loan"

---

## 9. State-Specific First-Time Buyer Grant Programs: Heavily Searched but Underserved

Per `research/06-local-state.md` (which has the definitive state-by-state HFA analysis), the **most heavily searched but underserved state HFA programs** are concentrated in the 10 priority states (CA, TX, FL, NY, PA, OH, GA, IL, NC, MI) plus a few specific programs in other states. The diagnostic site should prioritize these:

### 9.1 California — CalHFA (well-served, but Dream For All has a freshness problem)
- **Volume tier:** 800–1,600/mo for "California first time home buyer programs" + 1,000–2,500/mo for "California down payment assistance" (combined ~2,000–4,000/mo)
- **CalHFA Dream For All** (2023–2025 shared appreciation loan) has been a *news-driven* query spike every year since launch. The 2025 round opened with a lottery in March; the 2026 round status will drive Q1 search volume.
- **CalHFA MyHome Assistance** (up to 3.5% of purchase price, deferred second) is a steady evergreen program.
- **CalHFA CalPLUS** (zip-zero-interest second) is a niche program.
- **CalHFA Conventional + CalHFA FHA** are the program-level pages.
- **Gap:** CalHFA's own program matcher exists but is state-only and doesn't diagnose denial. A national diagnostic that includes CA programs in its recommendation engine is the play.
- **Sources:** https://www.calhfa.ca.gov, `research/06-local-state.md` §2.1

### 9.2 Texas — TSAHC (underserved, two programs under one roof)
- **Volume tier:** 600–1,200/mo for "Texas first time home buyer programs" + 800–1,500/mo for "Texas down payment assistance" (combined ~1,500–2,700/mo)
- **TSAHC Homes for Texas Heroes** (teacher, police, fire, EMT, military, veteran, nurse) is one of the most distinctive state programs in the U.S. — yet the TSAHC site is dated.
- **TSAHC Home Sweet Texas Loan** (grant up to ~5% of loan amount) is the highest-grant-percentage program in any state.
- **Gap:** TSAHC's own site is functionally a brochure, not a diagnostic. The Heroes program is heavily searched (the keyword "homes for texas heroes" is the #1 brand search for TSAHC) but underserved by non-TSAHC publishers.
- **Sources:** https://www.tsahc.org, `research/06-local-state.md` §2.2

### 9.3 Florida — Florida Housing Finance Corporation (well-known brand, under-explained programs)
- **Volume tier:** 600–1,400/mo for "Florida first time home buyer programs" + 800–1,800/mo for "Florida down payment assistance" (combined ~1,500–3,200/mo)
- **Florida HFA Preferred (3% / 4% / 5% second-mortgage options)** is the program.
- **Hometown Heroes** (down payment + closing for community employees — police, fire, teacher, nurse, etc.) is Florida's answer to Texas Heroes.
- **HFA Military Heroes** is a separate program.
- **Gap:** Florida's retiree + relocation + hurricane-recovery buyer population overlaps poorly with the standard FTB content. The diagnostic site can serve this overlap with "Florida retiree + first-time buyer" content.
- **Sources:** https://www.floridahousing.org, `research/06-local-state.md` §2.3

### 9.4 New York — NY HCR / SONYMA (heavily searched, deeply under-explained)
- **Volume tier:** ~500–1,000/mo for "New York first time home buyer programs" + 600–1,500/mo for "New York down payment assistance" (combined ~1,200–2,500/mo)
- **SONYMA (State of New York Mortgage Agency)** Achieving the Dream + Low Interest Rate programs are the mainstays.
- **NYC HPD HomeFirst** is the city-specific NYC down payment assistance program (up to $100,000 for some first-time buyers in NYC — one of the largest in the country).
- **NY State of Homes** is a newer brand.
- **Gap:** NYC HPD HomeFirst is the most generous DPA in any major U.S. city and is *wildly* under-served by the publisher ecosystem. The diagnostic site can own this query with a 2-min "NYC HPD HomeFirst qualifier" tool.
- **Sources:** https://hcr.ny.gov, https://www.nyc.gov/site/hpd, `research/06-local-state.md` §2.4

### 9.5 Pennsylvania — PHFA (well-known brand, narrow programs)
- **Volume tier:** ~400–800/mo combined
- **PHFA (Pennsylvania Housing Finance Agency) Keystone Home Loan + Keystone Government Loan + HFA Preferred Risk Sharing** are the programs.
- **PHFA grants** (up to ~$10,000 in some counties) are the high-value angle.
- **Sources:** https://www.phfa.org

### 9.6 Ohio — OHFA (specific Heroes + Grads programs)
- **Volume tier:** ~300–700/mo combined
- **OHFA (Ohio Housing Finance Agency) Grants for Grads** (down payment help for recent college graduates) is uniquely targeted.
- **Ohio Heroes** (first responders, military, healthcare workers) is the parallel.
- **Sources:** https://ohiohome.org

### 9.7 Illinois — IHDA + Chicago DPD (SmartBuy is unique)
- **Volume tier:** ~400–800/mo combined
- **IHDA (Illinois Housing Development Authority)** is the state agency.
- **IL SmartBuy** is a *student-loan-forgiveness-as-down-payment* program unique to Illinois. If a buyer has student loan debt, they can apply to have up to $40,000 in student loans forgiven *as* the down payment. This is one of the most distinctive state programs in the U.S. and is *woefully* under-explained by national publishers.
- **Chicago DPD** homebuyer assistance is the city-specific layer.
- **Gap:** IL SmartBuy should be a content pillar of its own. The diagnostic site can own "student loan forgiveness for home buyers" — a query cluster that crosses first-time buyer + student loan pain.
- **Sources:** https://www.ihda.org, `research/06-local-state.md` §2.7

### 9.8 Georgia — DCA + Invest Atlanta (Hot Atlanta + HOPE)
- **Volume tier:** ~300–700/mo combined
- **Georgia Dream (DCA)** is the state program.
- **Atlanta Invest Atlanta + Westside Future Fund + BeltLine** are city-specific programs.
- **Sources:** https://www.dca.georgia.gov, https://www.investatlanta.com

### 9.9 North Carolina — NCHFA (well-known state, NC Home Advantage strong)
- **Volume tier:** ~300–700/mo combined
- **NCHFA (NC Housing Finance Agency) NC Home Advantage Mortgage** is the flagship (3% down + 2% DPA + MCC potential).
- **NC Home Advantage Tax Credit** is a Mortgage Credit Certificate (MCC) — worth up to $2,000/year in federal tax credit.
- **Sources:** https://www.nchfa.com

### 9.10 Michigan — MSHDA (industrial Midwest, MI Home Loan brand)
- **Volume tier:** ~300–600/mo combined
- **MSHDA (Michigan State Housing Development Authority) MI Home Loan + MI Home Loan Flex + MI Home Loan Down Payment** are the program cluster.
- **Sources:** https://www.michigan.gov/mshda

### 9.11 Heavily-searched state-specific programs that are underserved (cross-cutting gaps)
Per `research/06-local-state.md` §4 + §6, these specific programs are heavily searched but lack good consumer-facing diagnostic content:

1. **CalHFA Dream For All** — high intent, news-driven, status-of-program queries spike every spring
2. **TSAHC Homes for Texas Heroes** — niche but high conversion (eligibility is professional, so the search is high-intent)
3. **Florida Hometown Heroes** — same as Texas Heroes, different state
4. **NYC HPD HomeFirst** — the most generous urban DPA in the U.S. and under-served
5. **IL SmartBuy** — student loan + home buyer crossover, unique in the U.S.
6. **GA Atlanta BeltLine / Invest Atlanta intown homebuyer** — city-specific, niche
7. **NC Home Advantage Mortgage** — high search, mid-quality publisher content
8. **MI Home Loan Flex** — well-known brand, under-explained eligibility

**The diagnostic site's play:** Build a `/first-time-home-buyer-grants/[state]/` page for each of the 50 states that:
- Lists every program in the state with a "do I qualify?" 3-question input
- Returns "you qualify / you might qualify / you don't qualify" with the program-specific reason
- Cross-links to the HFA's official site for the application
- Triage: if you don't qualify anywhere, links to the credit-repair cluster (`research/01-pain-keywords.md`)

This is the page type the publishers (Rocket, Bankrate, NerdWallet) cannot build because they have no relationship with the HFAs and no personalization engine. The diagnostic site can.

---

## 10. Architecture Recommendation

Based on the 3 primary keywords + 3 closely-related keywords, the recommended site architecture is:

```
/first-time-home-buyer-qualification/         [PILLAR — absorbs mistakes, programs, down payment, credit score as clusters]
├── /first-time-home-buyer-qualification/credit-score/        [CLUSTER]
├── /first-time-home-buyer-qualification/down-payment/        [CLUSTER — bridges to state/DPA]
├── /first-time-home-buyer-qualification/fha-vs-conventional/ [CLUSTER]
├── /first-time-home-buyer-qualification/preapproval/         [CLUSTER]
├── /first-time-home-buyer-mistakes/                          [CLUSTER — top-5 listicle]
├── /first-time-home-buyer-denied/                            [CLUSTER — denial diagnostic — the gap nobody serves]
└── /first-time-home-buyer-qualification/[state]/             [CLUSTER — bridges to state HFA pages]

/first-time-home-buyer-programs/              [PILLAR #2 — programmatic + state]
├── /first-time-home-buyer-programs/[state]/                  [50 PAGES]
│   ├── /first-time-home-buyer-programs/[state]/[program]/    [~150 PAGES per `research/06-local-state.md`]
│   └── /first-time-home-buyer-programs/[state]/[metro]/      [~150 PAGES]

/first-time-home-buyer-grants/                [CLUSTER under #2 — high commercial intent]
├── /first-time-home-buyer-grants/[state]/                    [50 PAGES]
└── /first-time-home-buyer-grants/[state]/[program]/          [~150 PAGES]

/first-time-home-buyer-down-payment/          [CLUSTER]
├── /first-time-home-buyer-down-payment/assistance/           [bridges to grants]
├── /first-time-home-buyer-down-payment/gift-funds/
├── /first-time-home-buyer-down-payment/fha-3-5-percent/
└── /first-time-home-buyer-down-payment/calculator/           [cross-link to `research/05-calculators.md`]

/first-time-home-buyer-credit-score/          [CLUSTER — the #1 denial reason]
├── /first-time-home-buyer-credit-score/fha-580/
├── /first-time-home-buyer-credit-score/conventional-620/
├── /first-time-home-buyer-credit-score/improve-fast/
└── /first-time-home-buyer-credit-score/qualifier/            [DIAGNOSTIC TOOL]
```

**Estimated total FTB cluster build:** 1 + 1 + 6 + ~350 (state + program) + 6 + 5 = **~370 pages** at full national + state build. This is a 6–9 month build at 40–60 pages/month.

**Internal linking rules:**
- Pillar links down to all clusters
- Clusters link up to pillar
- State pages link up to all relevant clusters AND to the national programs pillar
- All pages cross-link to the relevant denial-pain pages from `research/01-pain-keywords.md`
- All pages cross-link to the calculator cluster from `research/05-calculators.md`
- All FTB state pages link to the HFA + HUD + Census + FHFA per E-E-A-T requirements in `research/06-local-state.md` §11

---

## 11. Competitor URLs Reference Table

Below is a flat list of every competitor URL cited in this report, organized by keyword cluster and SERP tier.

### 11.1 "first time home buyer qualification" competitors
- https://www.rocketmortgage.com/learn/first-time-home-buyer-qualifications (direct fetch, 200 OK, 1.77 MB)
- https://www.rocketmortgage.com/learn/first-time-home-buyer (direct fetch, 200 OK, 1.75 MB)
- https://www.bankrate.com/mortgages/first-time-homebuyer/ (direct fetch, 200 OK, 579 KB)
- https://www.bankrate.com/mortgages/first-time-homebuyer-guide/ (direct fetch, 200 OK, 890 KB)
- https://www.consumerfinance.gov/owning-a-home/ (direct fetch, 200 OK, 149 KB)
- http://www.hud.gov/topics/buying_a_home (direct fetch, 200 OK, 122 KB)
- https://www.hud.gov/buying/loans (direct fetch, 200 OK, 122 KB)

### 11.2 "first time buyer mistakes" competitors
- https://www.rocketmortgage.com/learn/first-time-home-buyer-mistakes (direct fetch, 200 OK, 1.77 MB)
- https://www.bankrate.com/mortgages/first-time-homebuyer-mistakes/ (direct fetch, 200 OK, 777 KB)
- https://www.rocketmortgage.com/learn/first-time-home-buyer-tips (direct fetch, 200 OK, 1.79 MB)
- https://www.nerdwallet.com/article/mortgages/first-time-home-buyer-mistakes (canonical; not directly fetched in this session)
- https://www.realtor.com/advice/buy/first-time-home-buyer-mistakes/ (canonical; not directly fetched in this session)
- https://www.investopedia.com/articles/mortgages-real-estate/12/first-time-home-buyer.asp (canonical; 403 in this session)

### 11.3 "first time buyer grants" + "programs" competitors
- https://www.rocketmortgage.com/learn/down-payment-assistance (direct fetch, 200 OK, 1.75 MB)
- https://www.rocketmortgage.com/down-payment-assistance (canonical, product page)
- https://www.rocketmortgage.com/learn/fha-down-payment-assistance (direct fetch, 200 OK, 1.74 MB)
- https://www.rocketmortgage.com/learn/how-to-get-down-payment-assistance (canonical)
- https://www.bankrate.com/mortgages/down-payment-assistance/ (direct fetch, 200 OK, 769 KB)
- https://www.bankrate.com/mortgages/fha-loans/ (direct fetch, 200 OK, 569 KB)
- https://downpaymentresource.com/ (direct fetch, 200 OK, 84 KB — grant aggregator)

### 11.4 "first time home buyer credit score" competitors
- https://www.rocketmortgage.com/learn/what-credit-score-is-needed-to-buy-a-house (direct fetch, 200 OK, 1.77 MB)
- https://www.nerdwallet.com/article/mortgages/minimum-credit-score-for-mortgage (canonical; not fetched)
- https://www.myfico.com/credit-education (canonical, training-data)
- https://www.creditkarma.com/credit/i/minimum-credit-score-to-buy-a-house (canonical, training-data)

### 11.5 State HFA + DPA competitors (per `research/06-local-state.md`)
- CalHFA: https://www.calhfa.ca.gov
- TSAHC: https://www.tsahc.org
- Florida Housing: https://www.floridahousing.org
- NY HCR: https://hcr.ny.gov
- PHFA: https://www.phfa.org
- OHFA: https://ohiohome.org
- IHDA: https://www.ihda.org
- Georgia DCA: https://www.dca.georgia.gov
- NCHFA: https://www.nchfa.com
- MSHDA: https://www.michigan.gov/mshda
- HUD: http://www.hud.gov/topics/buying_a_home
- Down Payment Resource: https://downpaymentresource.com/

---

## 12. Confidence Notes & Caveats

**What this report is confident in (high confidence):**
- The competitive landscape (which publisher types rank for FTB queries) is highly stable.
- The Rocket + Bankrate + NerdWallet + .gov template is well-established.
- Rocket's 13-mistake / 15-tip numbered-listicle format is the template.
- The state HFA structure (50 state agencies) is institutional fact.
- PAA question patterns in the FTB SERP are stable.

**What this report is approximate in (medium confidence):**
- All volume numbers are tier estimates, not point estimates. Replace with verified Semrush/Ahrefs reads before production.
- Specific ranking order is subject to SERP shift; the publisher categories are stable but exact positions change.
- "Top 5 ranking URL" lists are based on direct fetches in this session + canonical URL patterns; a live SERP pull on a different day or from a different IP may show different ordering.

**What requires live verification (low confidence):**
- All 2026 dollar amounts (DPA caps, income limits, conforming loan limits).
- Current program availability (which programs are open vs. closed for new applications).
- New 2025/2026 program launches.
- CalHFA Dream For All 2026 round status (drives Q1 search spike).
- FHA loan limit changes for 2026.
- Fannie Mae / Freddie Mac credit score policy changes (FICO 10T / VantageScore 4.0).

**Verification sources (when web access is restored):**
- Each HFA's official site for current program pages.
- HUD's FHA loan limit page for current county-level limits.
- FHFA's HPI page for current median home prices by state.
- Census ACS for current median household income.
- NCSHA for the state HFA directory and recent legislative updates.
- Fannie Mae / Freddie Mac seller guides for current credit score policy.

---

**End of report.**
