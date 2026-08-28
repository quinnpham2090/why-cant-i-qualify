# PART 5 — USER EXPERIENCE & COMPLETE USER JOURNEY

## 5.1 Conversion Philosophy

The biggest lesson from competitor analysis: **most mortgage lead-gen sites fail because they demand too much too soon.** They ask for SSN, full income, exact credit score, and a hard credit pull before giving anything back.

This product inverts that:

> **Give value first → Diagnose second → Capture lead third → Convert to call fourth.**

## 5.2 User Journey Map (End-to-End)

```
Stage 1: AWARENESS          →  Lands on page from Google / FB / direct
Stage 2: HOOK               →  Reads headline, sees credibility, scrolls
Stage 3: CTA CLICK          →  "Start My Free Mortgage Check"
Stage 4: PRE-QUESTIONNAIRE  →  30-second "What this is" explainer
Stage 5: QUESTIONNAIRE      →  Multi-step, 7-12 questions
Stage 6: RESULTS            →  Personalized diagnostic report
Stage 7: EDUCATION          →  "Why this matters" expandable sections
Stage 8: LEAD CAPTURE       →  Soft ask: name + email
Stage 9: DEEPER DIAGNOSIS   →  Optional advanced questions
Stage 10: APPOINTMENT       →  Calendar booking or phone call request
Stage 11: FOLLOW-UP         →  Email/SMS nurture
Stage 12: CONVERSION        →  Application, preapproval, closing
```

## 5.3 LANDING PAGE (Stage 1-3)

### 5.3.1 Above-the-fold

**Headline (pick one based on A/B testing):**

> **A:** "Not Sure Why You Can't Qualify for a Mortgage?"
> **B:** "Find Out What May Be Holding You Back From Qualifying."
> **C:** "Mortgage Denied? Let's Figure Out Why — and What to Do Next."

**Subheadline:**

> Answer a few questions, get a free, confidential mortgage readiness snapshot — no credit pull, no SSN, no obligation. See what may be holding you back and what could improve your options in about 5 minutes.

**Primary CTA (button):**

> **Start My Free Mortgage Check** (or "Get My Mortgage Snapshot")

**Secondary CTA (less prominent):**

> "How does this work?"

**Trust signals below CTA:**
- 🔒 No credit pull. No SSN required.
- ⏱ Takes about 5 minutes
- 🎓 100% educational — no commitment
- Licensed Mortgage Professional (NMLS #XXXXXX)
- Equal Housing Opportunity

**Visual:**
- Real photo of a licensed MLO (your headshot, not stock)
- Not a generic stock photo
- Suggests "this is a real person, not a faceless algorithm"

### 5.3.2 Below-the-fold sections

**Section: "What You'll Get" (3 columns)**
1. **Your Estimated Purchase Range** — see what may be comfortable
2. **Your Likely Obstacles** — understand what may be holding you back
3. **Your Potential Next Steps** — concrete actions you can take

**Section: "Who This Is For" (3 cards)**
1. **Worried first-time buyers** who don't know if they qualify
2. **Recently denied borrowers** who want to understand why
3. **Self-employed borrowers** frustrated that traditional calculators don't fit

**Section: "How It Works" (3 steps)**
1. Answer ~10 questions (anonymous, no credit pull)
2. Get your personalized mortgage readiness snapshot
3. Decide if you'd like to speak with a licensed professional

**Section: "Why Trust This?" (5 trust signals)**
- Licensed Mortgage Loan Originator (NMLS #)
- 100% educational, no commitment
- Your information stays private
- Real human licensed professional
- No "bait and switch" — what you see is what you get

**Section: "Frequently Asked Questions" (SEO-rich FAQ)**
- Is this a credit pull?
- Is this an approval?
- How accurate is this?
- Will I be contacted by multiple lenders?
- Do I have to share my SSN?
- What if my credit is "not sure"?
- What if I'm self-employed?
- How much does this cost?
- Is this a preapproval?
- What happens after I get my results?

**Section: Bottom CTA repeat**
- "Ready to find out? Start My Free Mortgage Check"

**Footer:**
- Privacy Policy
- Terms of Use
- NMLS ID
- State Licensing Disclosures
- Equal Housing Opportunity logo
- Contact info
- Disclosures: "This is a preliminary educational assessment, not a mortgage application, preapproval, or commitment to lend."

## 5.4 PRE-QUESTIONNAIRE MODAL (Stage 4)

When user clicks "Start My Free Mortgage Check," show a brief overlay:

> **Before we start, here's what to know:**
> 
> ✓ This takes about 5 minutes
> ✓ You don't need to provide your SSN
> ✓ We don't perform a hard credit inquiry
> ✓ Your answers are confidential and used only to generate your results
> ✓ You can stop at any time
> 
> **This is an educational tool. It is not a mortgage application, preapproval, or commitment to lend. Final qualification requires a full lender review.**
> 
> [Start] [Maybe later]

## 5.5 QUESTIONNAIRE (Stage 5)

### 5.5.1 Design principles
- One question per screen (max two for related inputs)
- Progress bar at top
- Save state in browser (don't lose progress on refresh)
- Mobile-first design (most mortgage searches are on mobile)
- Conditional logic — skip irrelevant questions
- Don't ask the same thing twice
- Optional fields clearly marked "(optional)"
- Real-time validation (e.g., "Please enter a number")

### 5.5.2 Question flow (target 7-12 questions)

#### Q1: Location
> **What state are you in?**
> - Dropdown of all 50 states
> - Required

#### Q2: Purpose
> **What's the goal?**
> - 🏠 Buying a home
> - 🔁 Refinancing
> - 💵 Cash-out refinance
> - 🤔 Just exploring
> - Required

#### Q3: Property type
> **What type of property?**
> - 🏡 Single-family house
> - 🏘️ Townhouse / PUD
> - 🏢 Condo
> - 🏬 Multi-family (2-4 units)
> - 🏚️ Manufactured / mobile home
> - Required

#### Q4: First-time buyer?
> **Are you a first-time home buyer?**
> - Yes
> - No
> - Required

#### Q5: Target price
> **Roughly what's your target purchase price?**
> - Slider: $50k – $2M
> - Or text input
> - Required for purchase, optional for refinance
> - Help text: "Don't worry about being exact. A ballpark is fine."

#### Q6 (conditional, if refi): Current value & balance
> - "What's your home's estimated value?"
> - "What's your current loan balance?"

#### Q7: Annual household income
> **What's your total annual household income (before taxes)?**
> - Text input, $ — help text: "Include all income you'll use to qualify, including spouse/partner if applicable"
> - Required

#### Q8: Employment type
> **How is your income earned?**
> - W-2 employee
> - Self-employed / business owner
> - Commission-based
> - Hourly / variable
> - Retired
> - Other
> - Required

#### Q9 (conditional, if self-employed): Years in business
> **How long have you been in business?**
> - < 1 year
> - 1-2 years
> - 2-5 years
> - 5+ years

#### Q10: Credit score band
> **What's your approximate credit score?**
> - 760 or higher (Excellent)
> - 720-759 (Very Good)
> - 680-719 (Good)
> - 620-679 (Fair)
> - 580-619 (Poor)
> - Below 580
> - Not sure / I'd rather not say
> - Required
> - Help: "An estimate is fine. We don't pull your credit."

#### Q11: Monthly debt
> **What are your total monthly debt payments? (auto loans, student loans, credit cards minimums, child support, etc., excluding rent/mortgage)**
> - Text input, $ — slider also
> - Help: "Estimate is fine. Include the minimum payment for each."

#### Q12: Down payment / cash
> **How much cash do you have available for down payment and closing costs?**
> - Text input, $
> - Help: "Include savings, gift funds, etc."

#### Q13 (conditional, if condo): HOA
> **Is there an HOA, and if so, what are the monthly dues?**
> - Yes, $X / month
> - No

#### Q14: Timeline
> **When are you hoping to buy?**
> - Within 30 days
> - 1-3 months
> - 3-6 months
> - 6-12 months
> - Just researching
> - Required

#### Q15: VA / military status (optional)
> **Have you served in the U.S. military?**
> - Yes, I'm a veteran
> - Yes, I'm active duty
> - Yes, I'm an eligible spouse
> - No
> - (Optional but unlocks VA program suggestion)

#### Q16: Recent credit issues (optional)
> **In the past 2 years, have you had any of the following? (select all)**
> - Bankruptcy
> - Foreclosure
> - Short sale
> - Late mortgage payments
> - Collections / judgments
> - None of the above
> - (Optional, helps refine credit pillar)

### 5.5.3 Total question count
- **Minimum path:** 8 questions (purchase, W-2, single family, not VA, no recent issues)
- **Maximum path:** 12-14 questions (purchase, self-employed, condo, recent issues, VA)
- Target completion: 5-7 minutes

### 5.5.4 Progress bar
- Show: "Question 3 of 9" or progress percentage
- Use a calm, encouraging tone: "Almost there!"
- Don't show "Q3/15" — feels clinical
- Show time estimate: "~2 minutes left"

## 5.6 LOADING SCREEN (between questionnaire and results)

**Visual:** Animated bar with calm, encouraging copy

> "Crunching the numbers..."
> "Reviewing your profile..."
> "Building your snapshot..."

**OR (better):** Show a few interesting educational tidbits while loading:
- "📊 Did you know? Most loan programs look at back-end DTI, not just the mortgage payment."
- "💡 FHA loans allow lower credit scores than conventional loans."
- "🏠 Reserves — savings left after closing — matter more than many people realize."

This is an opportunity to subtly educate AND build anticipation.

## 5.7 RESULTS PAGE (Stage 6-7)

### 5.7.1 Layout

```
┌────────────────────────────────────────────────────────┐
│  YOUR MORTGAGE READINESS SNAPSHOT                      │
│  Preliminary educational estimate                      │
│  [Disclaimer: Not an approval or commitment]           │
├────────────────────────────────────────────────────────┤
│                                                        │
│  ESTIMATED COMFORTABLE PURCHASE RANGE                  │
│                                                        │
│  $X – $Y                                               │
│                                                        │
│  (range bar)                                           │
│                                                        │
│  Your target: $Z → [within range / above range]        │
│                                                        │
├────────────────────────────────────────────────────────┤
│  ESTIMATED MONTHLY PAYMENT (PITI)                      │
│  P&I  $X                                               │
│  Taxes  $Y                                             │
│  Insurance  $Z                                         │
│  HOA  $A | PMI/MIP  $B                                 │
│  ────────                                              │
│  Total  $TOTAL                                         │
├────────────────────────────────────────────────────────┤
│  ESTIMATED DTI                                         │
│  Back-end: XX%  (Front-end: YY%)                       │
│  Conventional limit: 36-45% | FHA limit: up to 56.9%   │
├────────────────────────────────────────────────────────┤
│  YOUR READINESS PILLARS                               │
│                                                        │
│  Income          🟢 Strong                             │
│  Debt            🟡 Workable                           │
│  Credit          🟡 Workable                           │
│  Cash            🟠 Tight                              │
│  Payment         🟡 Workable                           │
│  Property        🟢 Strong                             │
│  Documentation   🟡 Workable                           │
│                                                        │
├────────────────────────────────────────────────────────┤
│  PRIMARY POTENTIAL OBSTACLE                            │
│                                                        │
│  📍 CASH-TO-CLOSE                                      │
│                                                        │
│  Your down payment may be lower than the typical       │
│  3-20% required, depending on loan program. Plus       │
│  closing costs (typically 2-5% of price) and prepaids. │
│                                                        │
│  POTENTIAL STEPS:                                      │
│  • Explore down payment assistance programs in [state]│
│  • Consider FHA (3.5% down) or VA (0% down if eligible)│
│  • Discuss gift fund rules with a licensed LO          │
│                                                        │
├────────────────────────────────────────────────────────┤
│  SECONDARY POTENTIAL OBSTACLES                         │
│  • DTI is at the upper end of workable                 │
│  • Reserves may be thin after closing                  │
├────────────────────────────────────────────────────────┤
│  POTENTIAL STRENGTHS                                   │
│  ✓ Your credit range may qualify for competitive rates│
│  ✓ W-2 income is generally straightforward to document │
│  ✓ Single-family properties have fewer approval hurdles│
├────────────────────────────────────────────────────────┤
│  LOAN PROGRAMS YOU MAY POTENTIALLY QUALIFY FOR         │
│  • Conventional (if credit 680+)                      │
│  • FHA (3.5% down if credit 580+)                      │
│  • VA (0% down if eligible)                            │
│  • State-specific first-time buyer programs in [state] │
├────────────────────────────────────────────────────────┤
│  WHAT A LICENSED PROFESSIONAL WOULD REVIEW             │
│  • Full credit report (with your permission)           │
│  • Income documentation (W-2s, paystubs, tax returns)  │
│  • Asset documentation                                 │
│  • Property appraisal                                  │
│  • Title and insurance                                 │
├────────────────────────────────────────────────────────┤
│                                                        │
│  [Schedule a Free 15-Minute Review →]                  │
│  [📧 Email My Results]    [📱 Text My Results]          │
│                                                        │
│  📞 Or call me directly: [phone]                       │
│  [Your headshot and "NMLS #XXXXXX"]                    │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### 5.7.2 Each pillar is expandable

Clicking a pillar opens a 1-paragraph educational explanation:

> **Income — Workable**
> 
> Your W-2 income with 2+ years on the job is generally considered stable by most lenders. Some programs allow income from a new job after 30 days if you're in the same field. Variable income (commission, bonuses, overtime) may be averaged over 2 years.

### 5.7.3 Trust elements on results page
- Your photo, name, NMLS #, license states
- "Equal Housing Opportunity" logo
- "Licensed in [state list]"
- Disclaimers

## 5.8 LEAD CAPTURE (Stage 8)

### 5.8.1 When to ask
**Two-stage approach:**

**Soft ask immediately after results:**
> "Want to save these results? Enter your email to receive a copy."
> - Only asks for: name + email
> - Optional
> - Skip-able: "No thanks, just continue"
> - Low friction

**Full ask after they read results:**
> "Want a free 15-minute review with a licensed mortgage professional?"
> - Asks for: name, email, phone, ZIP, preferred contact method, best time
> - Required to book
> - Sets expectations: "We'll contact you within 1 business day"

### 5.8.2 Form design
- 4-5 fields max
- Inline validation
- Mobile keyboard optimization
- Clear privacy language
- TCPA consent for SMS (if SMS offered)
- Email consent clearly states what they'll receive

## 5.9 APPOINTMENT BOOKING (Stage 10)

### 5.9.1 Options
1. **Calendar widget** (Calendly / Cal.com / SavvyCal) — pick a 15-min slot
2. **Phone request** — "When's a good time to call you?"
3. **"Call me now"** — direct click-to-call (during business hours)

### 5.9.2 Confirmation
- Email confirmation with calendar invite
- SMS reminder 1 hour before
- Reschedule link
- "Add to calendar" buttons

## 5.10 FOLLOW-UP SEQUENCE (Stage 11)

### 5.10.1 Email 1 (immediate)
- "Here's your mortgage readiness snapshot"
- PDF version of results
- "Schedule your free review" CTA
- "Read our guide to mortgage qualification" (link to pillar content)

### 5.10.2 Email 2 (Day 2)
- Subject: "About your [primary obstacle]..."
- Educational content about their specific obstacle
- "How to improve your DTI" or "Understanding your credit score"
- Soft CTA to schedule

### 5.10.3 Email 3 (Day 5)
- "3 loan programs worth exploring"
- Based on their profile
- Educational

### 5.10.4 Email 4 (Day 10)
- "5 questions to ask any lender"
- Comparison-shopping framework
- Establishes you as a trusted advisor, not a salesperson

### 5.10.5 Email 5 (Day 21)
- "Are you still thinking about buying?"
- Re-engagement
- Final CTA

### 5.10.6 SMS (if consent given)
- Day 0: "Hi [name], thanks for using [Site]. I'm [LO Name], NMLS #. I'm here to help with your mortgage questions. Reply STOP to opt out. - [Business]"
- Day 2: Friendly check-in
- Day 7: "Any questions about your results?"

## 5.11 MICROCOPY GUIDELINES

### Tone
- Calm, not urgent
- Educational, not salesy
- Honest, not promotional
- Specific, not generic
- Empathetic, not condescending

### Examples

❌ **Don't say:** "You're pre-approved! Get your rate now!"
✅ **Do say:** "This is a preliminary estimate. Pre-approval requires a full lender review."

❌ **Don't say:** "Don't worry, we can get you approved!"
✅ **Do say:** "There may be options to explore. A licensed professional can review your specific situation."

❌ **Don't say:** "Act now! Rates are going up!"
✅ **Do say:** "Rates change frequently. Locking a rate requires a formal loan application."

❌ **Don't say:** "We have lenders ready to compete for your business!"
✅ **Do say:** "If you'd like, a licensed mortgage professional can review your options."

## 5.12 MOBILE EXPERIENCE

- All forms fully responsive
- Touch-friendly tap targets (min 44px)
- Sticky CTA at bottom of questionnaire
- "Save and continue" link via email (in case of interruption)
- Apple Pay / Google Pay for any paid features (not used in MVP)
- Minimize typing — use sliders, dropdowns, radio buttons
- Auto-advance where possible (e.g., select state → auto-advance)

## 5.13 ACCESSIBILITY

- WCAG 2.1 AA compliance
- Keyboard navigation throughout
- Screen reader friendly
- Color contrast meets AA
- Form labels properly associated
- Skip-to-content link
- Captions for any videos
- Plain language (Flesch reading ease 60+)

## 5.14 CONVERSION OPTIMIZATION PRINCIPLES

1. **Show value before asking** — never ask for email before showing results
2. **Reduce friction** — minimum required fields
3. **Build trust progressively** — not all at once
4. **Make CTAs specific** — "Schedule my free review" not "Submit"
5. **Use real names and photos** — not "the lender"
6. **Match tone to intent** — empathetic, not aggressive
7. **Speed matters** — page load < 2s, results in < 5s
8. **Reduce anxiety** — clear disclaimers, no SSN, no credit pull
9. **Provide multiple next steps** — book, email, read, call
10. **Capture partial data** — save abandoned questionnaires, email them
