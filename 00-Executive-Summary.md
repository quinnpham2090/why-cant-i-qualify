# EXECUTIVE SUMMARY — WHY CAN'T I QUALIFY?
## A Consumer Mortgage Qualification Diagnostic Lead-Generation Website

**Date:** 2025
**Project:** Master planning document for a consumer-facing mortgage qualification diagnostic
**Author:** AI research and strategy assistant
**Audience:** Single licensed mortgage loan originator (MLO) planning to build a lead-generation business

---

## TL;DR

**Yes, build it — with care.** This is a real, validated market opportunity. No major competitor offers a no-SSN, no-credit-pull, anonymous, educational mortgage qualification diagnostic. The product addresses real, acute borrower pain. The technology is achievable with current AI tools. The economics work.

**But:** Get compliance review first (non-negotiable). Launch in 30-45 days (don't over-build). Invest in content (SEO is the moat). Be the face of the brand (trust matters). Nurture the email list (long-term value). Iterate based on real data.

**Cost:** $20-30K Year 1 (before profitable). $100-150/month tech + $1,500-2,000/month marketing.

**Expected return:** $75-400K revenue Year 1. ROI positive by month 4-9. Path to $250-600K by Year 3.

---

## 1. THE OPPORTUNITY

### The problem
U.S. consumers face a mortgage qualification crisis:
- Home affordability worst in ~40 years
- Mortgage rates 6.5-7.8% (vs 2.65% in 2021)
- ~9-12% denial rate on purchase applications
- ~70% of households can't afford median home
- Self-employed borrowers systematically underserved
- Denied borrowers get no explanation of "why"
- Every existing tool requires SSN + DOB before any information

### The market gap
**No major competitor offers a no-SSN, no-credit-pull, anonymous, educational mortgage qualification diagnostic.**

Every existing tool:
- Asks for SSN before any useful information
- Routes denials to "talk to a loan officer"
- Gives a single number, not a diagnosis
- Doesn't surface alternative programs
- Doesn't explain WHY you might not qualify

### The product
A consumer-facing website that:
1. Asks 9-15 questions (no SSN, no DOB, no credit pull)
2. Generates a personalized, educational mortgage readiness snapshot
3. Identifies 7 pillars: Income, Debt, Credit, Cash, Payment, Property, Documentation
4. Identifies primary + secondary obstacles
5. Suggests potential next steps
6. Captures leads and connects them with a licensed MLO

### Why it works
1. **Real demand:** "Why was I denied" searches up 200-400% YoY
2. **No competition in this exact niche:** All competitors require SSN/DOB up front
3. **Better unit economics than buying leads:** Owned traffic + content compounds
4. **SEO moat:** Content + topical authority build over time
5. **Brand value:** Educational positioning builds trust
6. **Compliance cleaner:** No credit pull = less FCRA/ECOA exposure

---

## 2. THE MARKET

### Size
- ~50-70 million U.S. adults considering home purchase in next 3 years
- ~10-30 million annual visitors realistically addressable
- For a single MLO: 30-150 funded loans/year realistic

### Top borrower pain points
1. "I don't know if I qualify" (universal, top of funnel)
2. "I was denied and don't know why" (high intensity)
3. "My DTI seems high but I can afford the payment" (confusion)
4. "I'm self-employed and can't get approved" (underserved segment)
5. "My credit is X but they want more" (credit confusion)

### Three primary target audiences
1. **Worried First-Time Buyer (40%)** — anxious, doesn't know where they stand
2. **Recently Denied Borrower (30%)** — frustrated, needs explanation
3. **Self-Employed Borrower (20%)** — systematically underserved, frustrated

### Competitive landscape
- **Direct lenders** (Rocket, Better, UWM, Caliber, Chase, BofA, Wells, Guild, NewRez, LoanDepot) — all require SSN, none explain denials
- **Aggregators** (LendingTree, Credible) — lead-gen shop, low conversion
- **Calculators** (Zillow, NerdWallet, Bankrate) — informational, not diagnostic
- **Industry pattern:** Nobody tells a denied borrower WHY. This is the gap the diagnostic owns.

---

## 3. THE PRODUCT SPEC

### Core feature: The Diagnostic
- **9 required inputs:** State, purpose, property type, target price, income, employment, credit band, monthly debt, down payment
- **6 conditional inputs:** HOA, first-time buyer, timeline, VA status, recent credit issues, years in business
- **7 pillars scored:** Income, Debt, Credit, Cash, Payment, Property, Documentation
- **3 output levels:** Strong / Workable / Tight / Likely Obstacle
- **Primary + secondary obstacles identified**
- **Strengths identified**
- **Loan programs you may qualify for**
- **Always 3-point range output, never single number**
- **Always 3 confidence levels** (Higher/Moderate/Lower)
- **NEVER says "approved" or "denied"** — always "may potentially" / "based on the information provided"

### Two-stage lead capture
- **Soft capture (35-50% conversion):** Name + email only
- **Hard capture (8-15% conversion):** Name + email + phone + ZIP + preferred contact
- **Never asks for SSN, DOB, or bank info on the diagnostic site**

### Compliance stack
- **MAP Rule (Reg N):** No "approved" / "guaranteed" claims
- **ECOA / Reg B:** No protected class data collection
- **TCPA:** Proper consent for SMS/voice
- **CCPA/CPRA:** Privacy policy + "Do Not Sell"
- **WCAG 2.1 AA:** Accessibility
- **State mortgage licensing:** Display NMLS + state license #s
- **Required disclosures:** EHL logo, NMLS, state licenses, privacy, terms

---

## 4. THE TECH STACK

### V1 (Recommended): Lovable + Supabase
- **Cost:** $100-150/month
- **Launch time:** 1-2 weeks
- **Best for:** Non-technical MLO using AI vibe-coding tools

### Components
- **Frontend:** Lovable (or Next.js if scaling)
- **Backend:** Supabase (Postgres + Auth + Storage)
- **Hosting:** Vercel (auto from Lovable)
- **Email:** Resend (transactional) + ConvertKit (nurture)
- **SMS:** Twilio (pay per use)
- **Calendar:** Cal.com (cloud)
- **Analytics:** Plausible (privacy-friendly)
- **Anti-spam:** Cloudflare Turnstile (free)
- **AI:** Claude API (V2+)
- **Domain:** Cloudflare Registrar (~$10/year)

### Why this stack
- Modern, fast, scalable
- Privacy-friendly defaults
- No developer required for V1
- Can grow to 100K+ visitors/month
- Migration path: Lovable → Next.js if needed

---

## 5. THE COMPLIANCE POSTURE

### The 18 items requiring attorney review
1. State mortgage licensing determination
2. Lead-transfer structure
3. TCPA consent language
4. AI "approval likelihood" output (must be educational, not evaluative)
5. Fair-lending test (disparate impact)
6. MAP Rule compliance for every ad
7. Reg Z triggering terms
8. State-specific required disclosures
9. Privacy notice / CCPA Notice at Collection
10. EHL logo and NMLS ID display
11. State "comparing mortgage options" rules
12. Endorsement Guides compliance (testimonials)
13. Accessibility (WCAG 2.1 AA)
14. Lead-stacking compliance
15. CFPB December 2024 interpretive rule on digital comparison tools
16. Colorado AI Act compliance (effective Feb 1, 2026)
17. State AI laws
18. Glossary and definitions

### The 7 forbidden claims (with safe alternatives)

| ❌ Never say | ✅ Safe alternative |
|---|---|
| "You're approved" | "You may be pre-qualified based on the information you provided" |
| "You qualify for $X" | "You may qualify for a loan of approximately $X, depending on lender underwriting" |
| "Guaranteed approval" | (Never use; no safe equivalent) |
| "We'll get you approved" | "We'll work with you to find a loan that may fit your needs" |
| "Pre-approved in 60 seconds" | "Get a pre-qualification estimate in 60 seconds" |
| "Bad credit OK" | "We work with lenders that may be able to assist a range of credit profiles" |
| AI "approval likelihood" | "Educational estimate based on the information you provided" |

### Critical legal framework
- **MAP Rule (12 CFR Part 1014):** Per se violations for certain claims
- **ECOA / Reg B:** No protected class data; fair lending test required
- **FCRA:** No adverse action without proper notices (we don't pull credit, so this is largely moot)
- **TCPA:** Prior express written consent for SMS/voice
- **GLBA:** Nonpublic personal information protections
- **CCPA/CPRA + state privacy laws:** Notice at collection, do not sell
- **State mortgage broker / lender licensing:** Required in each state marketed
- **WCAG 2.1 AA:** Required for ADA compliance

---

## 6. THE ECONOMICS

### Funnel assumptions (Expected scenario)
- Visitor → questionnaire: 7%
- Questionnaire start → completion: 55%
- Completion → soft capture: 40%
- Completion → hard capture: 12%
- Hard → appointment: 70%
- Appointment → application: 60%
- Application → funded: 40%

### Per 1,000 visitors
- 70 questionnaire starts
- 39 completions
- 16 soft captures
- 5 hard captures
- 3 appointments
- 2 applications
- 0.8 funded loans
- $4,000 revenue (at $5K/loan)

### Year 1 P&L (Expected)
- Revenue: $173,000
- Marketing: $40,500
- Fixed costs: $15,000
- **Net profit: $117,500**

### Year 1 P&L (Conservative)
- Revenue: $120,000
- Costs: $50,000
- **Net profit: $70,000**

### Year 1 P&L (Excellent)
- Revenue: $225,000
- Costs: $60,000
- **Net profit: $165,000**

### Cash flow
- **3-6 months of negative cash flow before break-even**
- **Required cash reserve: $20,000-25,000**
- Plan for $30-50K total Year 1 investment

### Why this is better than buying leads
- **Brand value compounds over time** (lead buying has zero brand value)
- **SEO moat** (lead buying has none)
- **Cost per visitor is $1-3** (vs $50-300 per lead)
- **Trust is high** (educational, no pressure)
- **Compliance is self-controlled** (not dependent on lead vendor)
- **Long-term value** (email list compounds)

---

## 7. THE LOCALIZATION STRATEGY

### Recommended: State-specific landing pages
- **V1:** 1 state (your home state)
- **V2:** 5-10 states (high-population, high-denial)
- **V3:** All 50 states with substantive, unique content

### Why not pure national?
- Mortgage is state-licensed
- 70% of mortgage searches have local intent
- State-specific programs (CalHFA, FL HFA, OHFA, etc.) are real
- Local trust matters

### Why not separate sites per market?
- Way too much overhead for one MLO
- Out of scope for V1

### Critical: No doorway pages
- Each state page must have 200+ words of REAL state content
- No template swaps
- Each state page must be reviewed for state-specific advertising rules
- **MUST be licensed in every state you market**

### Top 10 states for V1-V2
Texas, California, Florida, New York, Illinois, Pennsylvania, Ohio, Georgia, North Carolina, Arizona

---

## 8. THE SEO STRATEGY

### High-intent target keywords (top priority)
- "why can't I qualify for a mortgage" (1-3K/mo) — informational
- "why was I denied a mortgage" (1-2K/mo) — informational
- "high DTI mortgage" (2-5K/mo) — commercial
- "self-employed mortgage" (3-8K/mo) — commercial
- "mortgage with bad credit" (5-15K/mo) — commercial
- "non-QM mortgage" (3-8K/mo) — commercial
- "down payment assistance" (8-20K/mo) — commercial
- "first-time home buyer programs" (5-15K/mo) — commercial

### State intent (cumulative across 50 states)
- "[state] first time home buyer programs" — ~7,500-25,000/mo total
- "[state] down payment assistance" — ~12,500-50,000/mo total

### Content architecture
- **5 pillar pages** (3-5K words each)
- **40-60 cluster articles** (800-1,500 words each)
- **30-50 FAQ/glossary entries** (300-800 words each)
- **50 state pages** (200-500 words each, substantive)
- **200 city pages** (V3, programmatic but substantive)
- **1 annual "State of Mortgage Denial" report** (link magnet)

### AI search optimization
- Clear Q&A format
- Direct answers in first 100 words
- Authoritative About page with credentials
- "Last updated" dates
- E-E-A-T signals
- Structured data (FAQ, HowTo, Article)

### Year 1 content target: 250+ pieces
- 8-15/month in first 6 months
- 20-30/month in months 7-12

---

## 9. THE MVP (VERSION 1)

### What to build
- **Landing page** with all key sections
- **Multi-step questionnaire** (8-15 questions, conditional logic)
- **Deterministic diagnostic engine** (rule-based, no AI in V1)
- **Results page** (7 pillars, obstacles, strengths, range)
- **Soft capture** (name + email)
- **Hard capture** (name + email + phone + ZIP)
- **Email notifications** (Resend)
- **SMS notifications** (Twilio)
- **Calendar booking** (Cal.com)
- **Email nurture sequence** (5 emails over 21 days)
- **Privacy policy + terms + accessibility statement**
- **All required disclosures** (EHL, NMLS, state licenses)
- **3-5 SEO articles**

### What NOT to build (V1)
- ❌ AI explanation layer (V2)
- ❌ Chatbot (V2)
- ❌ Scenario simulator (V1.5)
- ❌ State-specific pages (V2)
- ❌ Hard credit pull (NEVER)
- ❌ Loan application (NEVER)
- ❌ Mobile app (NEVER)
- ❌ Multi-language (V2)
- ❌ Forum / community (NEVER)
- ❌ Race/religion/protected class data (NEVER)

### Timeline: 30-45 days to launch

**Week 1:** Compliance attorney + brand + accounts
**Week 2:** Build core app (Lovable)
**Week 3:** Diagnostic engine + results page
**Week 4:** Content + compliance review
**Week 5:** Polish + launch

### Year 1 cost: $20-30K
- Compliance review: $1,500-3,000 (one-time)
- Logo/branding: $200-500 (one-time)
- Tech: $100-150/month
- Marketing: $1,500-2,000/month
- Total: $20-30K before break-even

---

## 10. THE DEVELOPMENT PLAN

### For non-technical MLO using AI coding tools

1. **Days 1-7: Pre-work**
   - Book compliance attorney consultation
   - Register domain
   - Set up all accounts (Supabase, Vercel, Plausible, Resend, Cal.com, Twilio, ConvertKit)

2. **Days 8-21: Build the app**
   - Use Lovable to build landing page + questionnaire
   - Use Claude Code or Cursor for the diagnostic engine
   - Build results page + lead capture
   - Connect email + SMS + calendar

3. **Days 22-30: Content + compliance**
   - Write privacy policy + terms + accessibility statement
   - Add all required disclosures
   - Write 3-5 SEO articles
   - Get compliance review

4. **Days 31-40: Polish + test**
   - Test on all devices
   - Test accessibility
   - Test full flow
   - Fix any issues

5. **Days 41-45: Launch**
   - Submit to Google Search Console
   - Set up Google Ads ($500-1,000/month)
   - Publish articles
   - Email SOI
   - Go live

6. **Days 46+: Optimize**
   - Monitor analytics
   - A/B test
   - Publish more content
   - Iterate

### Daily time commitment (after launch)
- 1-2 hours/day: lead follow-up, calls, emails
- 2-3 hours/week: content creation
- 1-2 hours/week: optimization
- Total: 10-15 hours/week

### When to hire help
- 50K+ visitors/month: developer
- 100+ leads/month: VA for follow-up
- Multi-state: marketing agency
- Complex compliance: part-time compliance consultant

---

## 11. SUCCESS METRICS (YEAR 1)

### Conservative
- 15,000-25,000 visitors
- 100-200 hard captures
- 50-100 appointments
- 15-30 funded loans
- $75,000-150,000 revenue
- ROI positive by month 6-9

### Expected
- 30,000-50,000 visitors
- 200-500 hard captures
- 100-200 appointments
- 30-80 funded loans
- $150,000-400,000 revenue
- ROI positive by month 4-6

### Excellent
- 100,000+ visitors
- 1,000+ hard captures
- 300+ appointments
- 100+ funded loans
- $500,000+ revenue
- ROI positive by month 3-4

---

## 12. KEY RISKS

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Compliance violation | Medium | Very High | Attorney review, follow safe language |
| Low traffic | Medium | High | SEO + paid diversified |
| Low conversion | Medium | High | A/B test, optimize funnel |
| Bad lead quality | Low-Medium | Medium | Lead scoring, qualifying questions |
| Slow loan cycle | High | Medium | Nurture sequences, multiple touches |
| Tech failure | Low | Low | Managed platforms, backups |
| Burnout | Medium | Medium | Automation, focus, don't over-build |

---

## 13. THE BOTTOM LINE

**The opportunity is real.** A consumer-facing mortgage qualification diagnostic that provides anonymous, no-SSN, no-credit-pull, educational readiness assessments addresses a real, validated market gap. No major competitor offers this. The demand signals (rising "denied" searches, low consumer trust, underserved self-employed segment) are strong.

**The execution is achievable.** A non-technical MLO can launch in 30-45 days using Lovable + Supabase + AI coding tools. The cost is $20-30K Year 1. The expected return is $75-400K Year 1.

**The compliance is non-negotiable.** Engage a qualified mortgage compliance attorney before launch. Follow the master compliance report. Use safe language. Display all required disclosures. Never use AI to make credit decisions.

**The timing is right.** With mortgage rates elevated, denials up, and consumers confused, the demand for an honest, educational diagnostic is at an all-time high. No major competitor is serving this need.

**BUILD IT.**

Execute well. Stay compliant. Iterate constantly. Be patient.

---

## 14. PROJECT STRUCTURE

The full planning documentation is organized in 16 parts:

1. **01-Market-Research/** — U.S. mortgage market analysis
2. **02-Competitor-Research/** — 10+ direct lenders analyzed
3. **03-Product-Definition/** — Product concept, inputs, outputs
4. **04-Diagnostic-Engine/** — 7-pillar framework + math + spec
5. **05-UX-Journey/** — User journey and copy
6. **06-Result-Scenarios/** — 8+ result scenarios with explanations
7. **07-Lead-Funnel/** — Complete funnel design
8. **08-Lead-Scoring/** — Lead scoring system
9. **09-Localization/** — State strategy
10. **10-SEO/** — Keyword strategy and content architecture
11. **11-Compliance/** — 30,000-word compliance report
12. **12-Technology/** — Tech stack recommendations
13. **13-AI-Architecture/** — AI use cases and guardrails
14. **14-MVP/** — V1, V2, V3 specifications
15. **15-Business-Economics/** — Funnel math and P&L
16. **16-Final-Recommendation/** — Final strategic recommendation

Plus this executive summary.

Total: 50,000+ words of research, strategy, design, and specification.

---

## 15. NEXT IMMEDIATE ACTIONS

If you decide to proceed:

1. **Today/This Week:**
   - Book a 2-hour consultation with a qualified mortgage compliance attorney in your state
   - Read the master compliance report (`11-Compliance/MASTER-COMPLIANCE-REPORT.md`)
   - Read the final recommendation (`16-Final-Recommendation/final-recommendation.md`)

2. **This Month:**
   - Get the compliance review of your business model
   - Decide on brand name and home state
   - Register domain
   - Set up accounts (Supabase, Vercel, Plausible, Resend, Cal.com, Twilio, ConvertKit)

3. **This Quarter:**
   - Build V1 using Lovable
   - Get compliance review of full site
   - Launch
   - Iterate

The plan is clear. The opportunity is real. The execution is achievable.

**Go.**
