# PART 14 — MVP SPECIFICATION

## 14.1 Guiding Principle: Launch Ugly, Launch Fast

The biggest risk is **over-building before launch**. The MVP should be live, generating leads, and being improved in 30 days — not perfect, not polished, but **working**.

## 14.2 VERSION 1 (MVP) — Launch in 30-45 Days

### Goal
Generate 10-30 qualified leads per month, validate the concept, learn from real users.

### Pages (5)
1. **Landing page** — single-page, all key sections
2. **Questionnaire** — multi-step form, 8-12 questions
3. **Results page** — personalized diagnostic
4. **Thank you / Lead capture** — soft + hard capture
5. **Privacy policy + Terms** — required for compliance

### Questions
- 9 required: state, purpose, property type, target price, income, employment, credit band, monthly debt, down payment
- 3-5 conditional: HOA (if condo), first-time buyer, timeline, VA status
- Save state in browser (don't lose progress)

### Diagnostic Logic
- **Deterministic rule engine only (no AI in V1)**
- Pre-written templates for obstacle explanations
- 5 pillar scores
- Primary + secondary obstacle
- Estimated range
- Confidence indicator

### Results
- Range output (not single number)
- 5 pillar cards with Strong/Workable/Tight/Obstacle
- Primary obstacle explanation
- 2-3 secondary obstacles
- 2-3 strengths
- Loan program suggestions
- "Schedule a free 15-min review" CTA

### Lead Capture
- **Soft:** name + email (optional after results)
- **Hard:** name + email + phone + ZIP + preferred contact (before appointment)
- Calendly or Cal.com embed
- Email to LO via simple notification (Resend or SendGrid)

### CRM
- **V1:** Simple Airtable base (or Google Sheet)
- Each lead = one row
- All lead data captured
- Status: New / Contacted / Booked / Closed / Lost
- Manual review and follow-up

### Email
- **Resend** or **Postmark** for transactional
- Day 0: Results PDF + welcome
- Day 2: Educational on primary obstacle
- Day 5: Loan programs
- Day 10: Lender questions
- Day 21: Re-engagement
- Monthly newsletter
- Total: 5 emails + monthly drip

### SMS
- **Twilio** (V1.5)
- 3 SMS in first 21 days
- TCPA-compliant opt-in
- Reply STOP honored

### Analytics
- **Plausible** (privacy-friendly, simple)
- Track: page views, questionnaire starts, completions, soft captures, hard captures, appointment bookings
- Custom events for each stage

### Compliance (V1 minimum)
- Privacy policy (Termly or custom)
- Terms of use
- TCPA consent (if SMS)
- Equal Housing Opportunity logo
- NMLS disclosure
- State license numbers
- "Not an approval" disclaimer
- CCPA "Do Not Sell" link (even if no data sale)

### Hosting
- **Recommended: Vercel + Supabase** (or Lovable + Supabase for non-coder)
- Custom domain
- SSL
- CDN
- Backups (managed by platform)
- Cost: $20-50/month for MVP scale

### Tech stack (V1)
- **Frontend:** Next.js (TypeScript) or Lovable
- **Backend:** Supabase (Postgres + Auth + Storage)
- **Hosting:** Vercel
- **Forms:** Built-in (no third party)
- **Email:** Resend
- **Calendar:** Cal.com (self-hosted) or Calendly (paid)
- **Analytics:** Plausible
- **Domain:** Cloudflare Registrar (~$10/year)

### Total V1 Cost Estimate
| Item | Monthly |
|---|---|
| Vercel Pro | $20 |
| Supabase Pro | $25 |
| Resend | $20 |
| Plausible | $9 |
| Cal.com (Cloud) | $12 |
| Domain | $1 |
| SMS (Twilio) | $10-30 (per message) |
| **Total** | **~$100-150/month** |

Plus one-time:
- Compliance attorney review: $1,500-3,000
- Initial content (5-10 articles): $500-1,500 (or DIY)
- Brand / logo: $0-500
- Total one-time: $2,000-5,000

### V1 Timeline
- Week 1: Compliance attorney consultation, finalize questionnaire
- Week 2: Build the diagnostic engine + questionnaire
- Week 3: Build landing page + results page + lead capture
- Week 4: Compliance review, content polish, testing
- Week 5: Launch

### V1 Marketing
- **SEO:** 3-5 high-intent articles published before launch
  - "Why Can't I Qualify for a Mortgage?"
  - "5 Common Reasons for Mortgage Denial"
  - "How to Improve Your DTI Before Applying"
  - "Self-Employed Mortgage Qualification"
  - "FHA Loan Requirements in [State]"
- **Google Ads:** $500-1,000 test budget in first month
  - High-intent keywords: "why can't i qualify for a mortgage", "mortgage denied", "mortgage qualification calculator"
- **Organic social:** 1-2 posts/week on LinkedIn, Facebook
- **Personal network:** Email past clients, SOI, real estate agent partners

### V1 Success Metrics
- 500-1,000 unique visitors in first 30 days
- 5-10% questionnaire start rate
- 50-65% questionnaire completion rate
- 30-40% soft capture (email)
- 8-15% hard capture (full lead)
- 50-70% appointment show rate
- 1-3 funded loans in first 90 days
- ROI positive by month 4-6

---

## 14.3 VERSION 2 (Months 3-6) — Optimize & Expand

### Goal
Scale to 30-100 leads/month, optimize funnel, add features that proved valuable in V1.

### New Pages
- **State-specific landing pages** (5-10 states)
- **3-5 additional SEO articles** per month
- **Loan program detail pages** (FHA, VA, conventional, etc.)
- **Obstacle-specific pages** (DTI, credit, self-employed)
- **About / credentials / NMLS page**

### Questions
- **Add:** "What's your biggest concern about qualifying?" (open-text, for content ideas)
- **Add:** Co-borrower support
- **Add:** Refinance path with current loan balance

### Diagnostic Logic
- **V2.0:** Add Claude AI explanation layer for personalized text
- **V2.5:** Add "what-if" scenarios ("What if I paid off my credit card?")
- **V2.5:** Add Monte Carlo or range visualization

### Results
- **V2.0:** Personalized AI explanations (with safety rails)
- **V2.5:** Confidence ranges visualized
- **V2.5:** "Improve my score" mini-simulator

### Lead Capture
- **V2.0:** Live chat widget (Crisp, Intercom, or Tawk)
- **V2.5:** Two-way SMS conversations
- **V2.5:** Auto-confirm + reminder system

### CRM
- **V2.0:** Move from Airtable to a real CRM
  - **Recommended:** HubSpot Free (good for solo), Pipedrive, or mortgage-specific (Jungo, Shape, Bonzo, Byte)
- **V2.5:** LOS integration
- **V2.5:** Automated lead routing by state

### Email
- **V2.0:** Behavioral triggers (if user clicks certain articles, send related)
- **V2.0:** A/B test subject lines
- **V2.5:** Re-engagement for stalled leads

### SMS
- **V2.0:** Two-way SMS with LO replies
- **V2.5:** Auto-responder for after-hours

### Analytics
- **V2.0:** Funnel visualization (Mixpanel or PostHog)
- **V2.5:** Microsoft Clarity for session replay
- **V2.5:** Cohort analysis

### Compliance (V2)
- Accessibility audit (WCAG 2.1 AA)
- State-by-state compliance review (if expanding)
- Documented AI governance policy
- Data retention policy
- Penetration testing
- SOC 2 prep (if scaling to enterprise)

### Marketing (V2)
- **Google Ads:** Scale to $2,000-5,000/month
- **Facebook Ads:** Add retargeting, lookalike audiences
- **LSA:** Test Google Local Services Ads
- **Partner referrals:** Real estate agents, financial planners
- **Content:** 2-3 SEO articles/month
- **YouTube:** Start a channel (long-form educational)

### V2 Success Metrics
- 5,000-10,000 visitors/month
- 50-150 leads/month (soft + hard)
- 5-15 appointments/month
- 3-8 funded loans/month
- CAC < $500 per funded loan
- LTV > $5,000 per closed loan (after expenses)

---

## 14.4 VERSION 3 (Months 6-12) — Scale & Dominate

### Goal
Become the recognized authority in mortgage qualification diagnosis. 100-300 leads/month.

### Pages
- **50 state pages** (programmatic but substantive)
- **Top 200 city pages** (programmatic)
- **30+ SEO articles** (pillar + cluster)
- **Comparison pages** (vs. Rocket, vs. LendingTree, etc.)
- **Resource center** (guides, checklists, templates)
- **Video hub** (YouTube embeds)
- **Loan officer bio pages** (if adding team)

### Questions
- **V3:** Save partial questionnaires (capture email early if user abandons)
- **V3:** Progressive profiling (ask more over time, not all at once)
- **V3:** Multilingual (Spanish at minimum)

### Diagnostic Logic
- **V3:** ML-based personalization (track what advice converts)
- **V3:** Predictive lead scoring (which leads will close)
- **V3:** Conversational AI follow-up
- **V3:** Document upload + AI extraction (V3.5)

### Results
- **V3:** Interactive what-if simulator
- **V3:** Side-by-side loan program comparison
- **V3:** Save and return to results

### Lead Capture
- **V3:** Conversational AI for tier-1 questions
- **V3:** Predictive dialer integration
- **V3:** Calendar with intelligent scheduling
- **V3:** Multi-channel outreach (email + SMS + voicemail drop)

### CRM
- **V3:** Full mortgage-specific CRM
- **V3:** Marketing automation platform
- **V3:** Reporting dashboard

### Compliance (V3)
- Full AI governance documentation
- State-specific legal review (every state)
- WCAG 2.1 AA certified
- Annual penetration testing
- Privacy policy versioning
- Documented data flows
- Vendor due diligence

### Marketing (V3)
- **Google Ads:** $5,000-15,000/month, multi-state
- **Facebook/Instagram:** $2,000-5,000/month
- **TikTok:** $1,000-3,000/month
- **SEO:** 5+ articles/month, aggressive link building
- **PR:** Trade publications, podcast tours
- **Partnerships:** Real estate franchises, financial advisors
- **Affiliates:** Possible referral partner program

### V3 Success Metrics
- 30,000-100,000 visitors/month
- 500-2,000 leads/month
- 50-200 appointments/month
- 15-50 funded loans/month
- 5-10 LO team
- Exit optionality (acquisition target for mortgage lead gen rollup)

---

## 14.5 What NOT to Build (In Any Version)

❌ **Hard credit pulls** — never in V1, V2, or V3. Too much compliance overhead, too much friction.
❌ **Loan application** — out of scope. Send to a lender for that.
❌ **Rate shopping** — let lenders quote rates. Don't compete on rate.
❌ **Multi-lender marketplace** — out of scope. You're one MLO, not a marketplace.
❌ **Crypto / alt-investment** — out of scope.
❌ **Forums / community** — too much moderation overhead.
❌ **Mobile app** — web is fine. App is expensive and unnecessary.
❌ **In-house LOS** — use existing platforms (Encompass, LendingPad, etc.)
❌ **Custom underwriting** — never. The diagnostic is education, not underwriting.
❌ **Race / religion / protected-class data collection** — never.
❌ **Lead selling** — never. Your leads stay your leads.
❌ **Predatory urgency** — never.

---

## 14.6 Risk Mitigations

| Risk | Mitigation |
|---|---|
| Compliance violation | Legal review, regular audits, "do not say" list |
| Low traffic | SEO content + paid ads, partnership with agents |
| Low conversion | A/B test headlines, CTAs, questionnaire length |
| Bad leads | Lead scoring filters, qualifying questions |
| Reputation damage | Honest messaging, real LOs, no false promises |
| Tech failure | Managed platforms, backups, monitoring |
| Burnout | Automation, templates, focused scope |

---

## 14.7 Exit Criteria (When to Move to Next Version)

### V1 → V2
- 50+ soft captures AND 20+ hard captures in first 30 days
- At least 1 closed loan attributed to the site
- Funnel metrics stable
- Compliance review passed

### V2 → V3
- 200+ leads/month
- LTV positive
- 5+ funded loans/month from site
- Documented proof of concept

### Don't move to next version if:
- Current version is broken
- Compliance issues unresolved
- ROI not positive
