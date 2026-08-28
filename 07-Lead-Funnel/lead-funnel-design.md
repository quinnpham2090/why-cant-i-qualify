# PART 7 — LEAD GENERATION FUNNEL

## 7.1 Funnel Goals

The funnel is designed to maximize **high-intent mortgage leads** (the kind that close at industry-typical rates) while:
- Maintaining consumer trust
- Minimizing friction
- Reducing compliance risk
- Maximizing brand goodwill
- Generating qualified appointments

## 7.2 Two-Capture Strategy (Soft → Hard)

Most mortgage sites use ONE of two strategies:

| Strategy | Pros | Cons |
|---|---|---|
| **Lead capture BEFORE results** (Zillow, Rocket) | Higher form completion for those who submit; known contact info | Massive drop-off; 95%+ of visitors leave without ever seeing value |
| **Results BEFORE lead capture** (NerdWallet calculators) | Higher engagement; better brand impression | Lower contact capture; can't follow up anonymously |

**This product uses a TWO-STAGE approach:**

### Stage 1: Soft capture (after results)
> "Want to save these results? Enter your email."
- 2 fields: name + email
- Skip-able
- Used to send results PDF + educational follow-up sequence
- Conversion target: 35-50% of those who reach results

### Stage 2: Hard capture (before appointment)
> "Want a free 15-minute review with a licensed professional?"
- 4-5 fields: name, email, phone, ZIP, preferred contact time
- Required to book a call
- Conversion target: 8-15% of those who reach results

This captures emails from a much larger pool while still converting the high-intent subset into qualified appointments.

## 7.3 Full Funnel Architecture

```
                    ┌──────────────────────────────────┐
                    │  AWARENESS                      │
                    │  - Google (SEO + Ads)            │
                    │  - Facebook / Instagram          │
                    │  - YouTube                       │
                    │  - TikTok                        │
                    │  - Direct / Referral             │
                    └────────────────┬─────────────────┘
                                     │ click
                    ┌────────────────▼─────────────────┐
                    │  LANDING PAGE                    │
                    │  - Headline + subheadline        │
                    │  - Trust signals                 │
                    │  - Hero CTA                      │
                    │  - Educational content           │
                    │  - FAQ                           │
                    └────────────────┬─────────────────┘
                                     │ CTA click
                    ┌────────────────▼─────────────────┐
                    │  PRE-QUESTIONNAIRE               │
                    │  - "Here's what to know"         │
                    │  - Set expectations              │
                    │  - Disclaimer                    │
                    └────────────────┬─────────────────┘
                                     │ start
                    ┌────────────────▼─────────────────┐
                    │  QUESTIONNAIRE                   │
                    │  - 8-14 questions                │
                    │  - Progress bar                  │
                    │  - Conditional logic             │
                    │  - Save state                    │
                    └────────────────┬─────────────────┘
                                     │ complete
                    ┌────────────────▼─────────────────┐
                    │  RESULTS PAGE                    │
                    │  - Personalized diagnostic       │
                    │  - Pillars, obstacles, strengths │
                    │  - Educational content           │
                    │  - Soft CTA: save results        │
                    └────┬───────────────────┬─────────┘
                         │                   │
                ┌────────▼──────┐    ┌───────▼─────────┐
                │ EMAIL ONLY    │    │ FULL LEAD       │
                │ (Soft)        │    │ (Hard)          │
                │ - name+email  │    │ - name+email    │
                │ - 35-50%      │    │ - phone+ZIP     │
                │   of reachers │    │ - 8-15%         │
                └───────┬───────┘    │ - books call    │
                        │             └───────┬─────────┘
                        │                     │
                        │             ┌───────▼─────────┐
                        │             │ APPOINTMENT      │
                        │             │ - Calendar book  │
                        │             │ - Confirmation   │
                        │             └───────┬─────────┘
                        │                     │
                        │             ┌───────▼─────────┐
                        │             │ FOLLOW-UP        │
                        │             │ - Reminders      │
                        │             │ - Pre-call prep  │
                        │             │ - After call     │
                        │             └───────┬─────────┘
                        │                     │
                        │             ┌───────▼─────────┐
                        │             │ CONVERSION       │
                        │             │ - Application    │
                        │             │ - Preapproval    │
                        │             │ - Closing        │
                        │             └─────────────────┘
                        │
                ┌───────▼──────────────────────┐
                │ EMAIL NURTURE                 │
                │ - Day 0: Results + guide      │
                │ - Day 2: Educational on issue │
                │ - Day 5: Programs to explore  │
                │ - Day 10: Lender questions    │
                │ - Day 21: Re-engagement       │
                └───────┬──────────────────────┘
                        │
                ┌───────▼──────────────────────┐
                │ EVENTUAL CONVERSION           │
                │ - When ready, books call      │
                └───────────────────────────────┘
```

## 7.4 When to Request Each Field

| Field | When | Why | Required? |
|---|---|---|---|
| State | Question 1 of questionnaire | Geographic relevance, license, regional cost | Required |
| Property type | Early | Drives conditional logic | Required |
| Income | Mid-questionnaire | Sensitive but needed | Required |
| Credit (band only) | Mid-questionnaire | Sensitive but needed (no exact score, no pull) | Required |
| Monthly debt | Mid-questionnaire | Needed for DTI | Required |
| Name | After results | Trust, personalization | Optional soft / Required hard |
| Email | After results | Save results, follow-up | Optional soft / Required hard |
| Phone | Before appointment | Direct contact | Required for hard |
| ZIP | Before appointment | Locality, license check | Required for hard |
| Preferred contact method | Before appointment | User preference | Required for hard |
| Best time to call | Before appointment | Reduce friction | Required for hard |
| SSN | **NEVER** | Would require full application compliance | Never |
| Date of birth | **NEVER on landing** | Only collected by LO post-lead | Never on this site |
| Bank account | **NEVER** | Only collected post-application | Never |
| W-2 / paystub upload | **NEVER** | Compliance, friction | Never on this site |

## 7.5 Trust-Building Disclosure Strategy

### At the very top of the page:
> "No SSN. No credit pull. No obligation. Just answers."

### On the questionnaire intro:
> "Your information is used only to generate your preliminary estimate. We do not perform a credit inquiry, and we don't sell your data."

### On the soft-capture form:
> "We'll only use your email to send you your results and helpful mortgage education. You can unsubscribe anytime."

### On the hard-capture form:
> "By submitting, you consent to be contacted by [Business Name], a licensed mortgage professional (NMLS #XXXXXX), about your mortgage options. We will not share your information with other lenders. Standard message rates may apply for SMS. Reply STOP to opt out."

### TCPA-compliant consent (if SMS used):
> "I consent to receive SMS messages from [Business Name]. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of service."

### After consent:
- Show a clear "thank you" with what happens next
- "We'll be in touch within 1 business day"
- "In the meantime, here's [educational content]"
- "Direct line: [phone] if you'd rather call us"

## 7.6 Specific Conversion Mechanisms

### 7.6.1 Primary CTA: "Schedule a Free 15-Minute Review"
- Cal.com or Calendly embed
- 15-min slots, 9 AM - 7 PM local time
- Buffer time between calls
- Auto-confirmation + reminder

### 7.6.2 Secondary CTA: "Email My Results"
- Soft capture (name + email)
- Triggers immediate email with PDF + results page link
- Starts nurture sequence

### 7.6.3 Tertiary CTA: "Text Me a Copy"
- Requires phone + TCPA consent
- Sends results link via SMS
- Higher friction, higher intent

### 7.6.4 Quaternary CTA: "Read the Full Guide"
- Links to SEO pillar content
- Builds brand and trust
- Lowest friction, lowest intent

### 7.6.5 Direct: "Call Me Now" / Phone Number
- For high-intent users who want to skip everything
- Prominent in header
- Trackable number (CallRail or similar)

## 7.7 Funnel Conversion Targets

### Conservative estimates
| Stage | Conversion | Reason |
|---|---|---|
| Visitor → questionnaire start | 5-8% | Industry typical for organic, 2-4% for paid |
| Questionnaire start → completion | 50-60% | Multi-step forms lose ~50% on average |
| Completion → results view | 95%+ | (auto-redirect after submission) |
| Results view → soft capture (email) | 30-40% | With strong results, motivated users convert |
| Results view → hard capture (full lead) | 8-15% | Most won't book immediately |
| Soft capture → eventual hard capture | 10-20% | Nurture sequence converts some over time |
| Hard capture → appointment booked | 60-80% | Self-selected high-intent |
| Appointment → application | 50-70% | Depends on quality of lead |
| Application → funded loan | 30-50% | Industry typical |
| **Overall: visitor → funded loan** | **~0.1-0.3%** | 0.1% conservative, 0.3% optimistic |

### Expected (most likely)
| Stage | Conversion |
|---|---|
| Visitor → questionnaire | 7% |
| Start → complete | 55% |
| Complete → soft capture | 35% |
| Complete → hard capture | 12% |
| Soft → hard (over time) | 15% |
| Hard → appointment | 70% |
| Appointment → application | 60% |
| Application → funded | 40% |
| **Overall: visitor → funded** | **~0.2%** |

### Excellent (top decile)
| Stage | Conversion |
|---|---|
| Visitor → questionnaire | 12% |
| Start → complete | 65% |
| Complete → soft capture | 50% |
| Complete → hard capture | 20% |
| Soft → hard (over time) | 25% |
| Hard → appointment | 80% |
| Appointment → application | 70% |
| Application → funded | 50% |
| **Overall: visitor → funded** | **~0.5%** |

## 7.8 Pricing Strategy for Paid Traffic

| Source | Typical CPC | Typical CPL | Notes |
|---|---|---|---|
| Google Search (high-intent) | $15-50 | $80-300 | Most expensive but highest intent |
| Google LSA (Local Services Ads) | $20-80 per lead | $80-200 | Lower friction, pay per lead |
| Facebook/Instagram | $5-15 | $50-150 | Harder to convert, requires nurture |
| TikTok | $3-10 | $40-100 | Younger audience, less mortgage intent |
| Bing | $5-15 | $50-150 | Older, often higher income |
| Display retargeting | $1-5 | $20-50 | Warm traffic only |

### Budget recommendation (MVP first 90 days)
- Total: $1,500-3,000/month
- 70% Google Search (high-intent keywords)
- 20% Facebook/Instagram (awareness + retargeting)
- 10% Testing (TikTok, Bing, LSA)

### Expected CPL (Conservative)
- Google Search: $150
- Facebook: $80
- Mixed: $120
- Soft captures (email only) may be 30-50% cheaper

## 7.9 Email Nurture Sequence (Detailed)

### Email 1: Immediate — Results + Welcome
- Subject: "Your Mortgage Readiness Snapshot is here"
- Content:
  - PDF of their results
  - "Here's what to do next" — based on primary obstacle
  - 1 primary CTA: "Schedule your free 15-min review"
  - 1 secondary CTA: "Read the full guide"
- From: "[Your Name], [Business Name]"
- Personal: Use their name, mention their state

### Email 2: Day 2 — Educational on Primary Obstacle
- Subject: "About your [primary obstacle]..."
- Content:
  - 300-500 word educational article on the obstacle
  - 3 specific actions they can take
  - Soft CTA: "Want help thinking through this? Free 15-min call."
- Personal: Use their name

### Email 3: Day 5 — Loan Programs
- Subject: "3 loan programs worth exploring in [state]"
- Content:
  - 3 loan programs (FHA, conventional, etc.) with pros/cons
  - Why each might fit their profile
  - Soft CTA: "Schedule a call to discuss which is right for you"
- Personal: Reference their profile (purchase, target price, etc.)

### Email 4: Day 10 — How to Compare Lenders
- Subject: "5 questions to ask any lender"
- Content:
  - 5 specific questions
  - Why each matters
  - Implicit positioning: "I'm a licensed professional who answers these questions"
- CTA: "Want a no-pressure conversation? Book a call."

### Email 5: Day 21 — Re-engagement
- Subject: "Still thinking about buying?"
- Content:
  - Short check-in
  - Reference their results
  - Final CTA: "I'm here when you're ready"
- If no engagement → move to monthly newsletter

### Email 6+: Monthly Newsletter
- Mortgage market updates
- Tips
- New content
- Light CTA

## 7.10 SMS Sequence (if consent)

### SMS 1: Immediate
> "Hi [name], this is [LO Name] from [Business]. Thanks for using our mortgage readiness tool. I'm a licensed mortgage pro (NMLS #). I'll be in touch soon. Reply STOP to opt out."

### SMS 2: Day 1 (if no appointment booked)
> "Hi [name], any questions about your mortgage results? Happy to chat for 15 min — no commitment. - [LO Name]"

### SMS 3: Day 7 (if no engagement)
> "[name], rates and programs change often. A quick call could save you thousands over the life of the loan. Free 15-min review. - [LO Name]"

### Frequency: Never more than 2 SMS/week. Always opt-out clear.

## 7.11 Compliance Hooks in the Funnel

1. **NMLS Consumer Access link** — must be on landing page
2. **Equal Housing Opportunity logo** — on every page
3. **State license disclosures** — on landing page, results page, lead form
4. **TCPA consent language** — if SMS used
5. **CAN-SPAM compliance** — physical address in every email, unsubscribe link
6. **Privacy policy** — linked from every form
7. **Terms of use** — linked from every form
8. **Clear "this is not an approval"** — on results page
9. **Cookie consent banner** — GDPR/CCPA compliance
10. **"Do not sell my info"** — CCPA/CPRA requirement

## 7.12 What NOT to Do (Anti-Patterns)

❌ Don't ask for SSN on the questionnaire
❌ Don't require a "find a lender" form before showing results
❌ Don't sell leads to multiple lenders
❌ Don't use urgency language ("rates going up today only!")
❌ Don't promise approvals
❌ Don't hide that this is one MLO, not "lenders competing"
❌ Don't make false social proof claims
❌ Don't dark-pattern users into giving more info
❌ Don't require a phone call to get results emailed
❌ Don't auto-dial without TCPA consent
❌ Don't bury unsubscribe links
