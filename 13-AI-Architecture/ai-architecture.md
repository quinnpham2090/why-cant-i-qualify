# PART 13 — AI ARCHITECTURE

## 13.1 AI Philosophy: Deterministic First, AI Second

The most important principle: **AI should NEVER make the credit decision.** AI is a *narrator*, not a *judge*.

```
┌─────────────────────────────────────────────────────────┐
│ LAYER 1: DETERMINISTIC RULES ENGINE                    │
│ (Calculates all numbers, identifies obstacles)         │
│ - Pure functions, no AI                                │
│ - Fully auditable                                      │
│ - Tested and verified                                  │
│ - Returns: scores, ranges, obstacle IDs                 │
└────────────────────┬────────────────────────────────────┘
                     │ structured data
┌────────────────────▼────────────────────────────────────┐
│ LAYER 2: AI EXPLANATION LAYER                          │
│ (Writes the human-readable copy)                       │
│ - Takes structured diagnostic data as input             │
│ - Outputs text only — no numbers, no decisions         │
│ - Prompt-engineered with strong guardrails             │
│ - Returns: educational paragraphs, suggestions         │
└────────────────────┬────────────────────────────────────┘
                     │ rendered output
┌────────────────────▼────────────────────────────────────┐
│ LAYER 3: HUMAN REVIEW TOUCHPOINTS                      │
│ (LO reviews AI output for sensitive cases)             │
│ - For HOT leads, LO reviews result before call         │
│ - For NURTURE leads, AI output is sufficient           │
└─────────────────────────────────────────────────────────┘
```

## 13.2 Where AI Is Used

### ✅ USES (Safe and Valuable)

#### 1. **Educational explanations of results**
- Input: "User has DTI 52%, credit 640, down payment 3.5%, self-employed 1.5 years"
- AI generates: Plain-English explanation of what this means, why it matters, and 2-3 next steps
- Constraint: AI must NOT change any numbers, only explain
- Output: Pre-written templates, lightly personalized

#### 2. **Plain-language summaries**
- "Translate" technical mortgage concepts into consumer-friendly copy
- E.g., "DTI" → "the percentage of your monthly income that goes to debts"
- All definitions reviewed and approved by compliance

#### 3. **Adaptive follow-up questions**
- If user selects "self-employed," AI may suggest asking about years in business
- If user selects "condo," AI may suggest asking about HOA status
- Rule-based, but AI can choose the best wording

#### 4. **Lead intent classification**
- Classify incoming leads by intent: hot / warm / nurture / future / low
- Based on questionnaire answers + engagement
- Replaces manual triage

#### 5. **Email personalization**
- Lightly personalize email content based on user's specific situation
- Reference their primary obstacle, their state, their timeline
- All emails reviewed and approved by compliance

#### 6. **LO call prep summaries**
- Generate a 1-page summary for the LO before a call
- Highlights: what the user said, their primary obstacle, suggested conversation topics
- **CRITICAL: AI is summarizing, not deciding what to say**

#### 7. **Educational content creation (with review)**
- Generate drafts of educational articles, blog posts, FAQs
- Always reviewed and edited by the MLO before publishing
- All content reviewed for compliance

#### 8. **SEO content optimization**
- Suggest meta descriptions, alt text, internal linking
- All final copy reviewed by the MLO

#### 9. **Chatbot / Q&A (V2+)**
- "What does FHA mean?" → AI answers from approved knowledge base
- "Why might I not qualify?" → AI walks through their results
- Always with "this is educational, not a lender decision" disclaimers

## 13.3 Where AI Is NOT Used

### ❌ CRITICAL DON'TS

#### 1. **Loan approval / denial**
- AI must NEVER say "you're approved" or "you'll be denied"
- All qualification decisions are made by humans (underwriters, lenders)
- AI only calculates preliminary, non-binding estimates

#### 2. **Loan amount determination**
- AI must NEVER output a guaranteed loan amount
- Always ranges, always with disclaimers
- "Approximately $X-Y based on the information provided"

#### 3. **Interest rate determination**
- AI must NEVER promise a specific rate
- Rates are quoted only by licensed lenders
- AI may say "rates today are approximately X%" but with appropriate disclaimers

#### 4. **Credit decisions**
- No automated adverse action
- No automated redlining
- No automated disparate impact
- FCRA-compliant adverse action notices only come from licensed creditors

#### 5. **Replacement of underwriting**
- AI cannot make decisions a licensed underwriter would make
- All credit decisions require human review
- AI is at most a "pre-qualification" tool, not a "qualification" tool

#### 6. **Personalized financial advice**
- AI cannot give personalized financial advice
- All advice must be clearly labeled as "general educational information"
- For personal advice, refer to a licensed professional

#### 7. **Disparate impact on protected classes**
- The system must NOT use race, religion, national origin, sex, familial status, disability, age, or any other protected class
- Even indirectly — must audit inputs and outputs for disparate impact
- AI model must be tested for fairness

## 13.4 AI Implementation Architecture

### Model selection

**Recommended for V1:**
- **Anthropic Claude** (Sonnet 4.5 or Haiku 4.5) for explanations
- **OpenAI GPT-4o-mini** as backup
- **Local rule engine** (TypeScript) for all calculations

**Why Claude:**
- Strong instruction-following
- Better at "stay in role" prompts
- Lower hallucination rates on structured data
- Good with guardrails

### Prompt engineering

**System prompt for explanation layer:**
```
You are an educational assistant for a mortgage readiness diagnostic tool. 
You take structured diagnostic data and produce plain-English explanations 
of what the data means.

CRITICAL RULES:
1. You are NOT a lender, creditor, or underwriter.
2. You NEVER approve or deny any loan.
3. You NEVER guarantee qualification, loan amount, rate, or approval.
4. You use language like "may," "could," "potentially," "based on the information provided."
5. You use phrases like "preliminary," "educational," "estimate," "not a commitment to lend."
6. You ALWAYS end with a recommendation to speak with a licensed mortgage professional.
7. You NEVER provide financial advice — only general education.
8. You NEVER use language that discriminates or could be considered discriminatory.
9. You ALWAYS use the data provided in the structured input — never invent numbers.
10. If asked a question outside your scope, redirect to a licensed professional.

USER'S DIAGNOSTIC DATA:
{{structured_data}}

YOUR TASK:
Write a 2-3 sentence explanation of their primary obstacle, why it matters, 
and 2-3 potential next steps. Use consumer-friendly language (Flesch 60+).
```

### Output validation

After AI generates text, validate:
- Doesn't contain "approved," "denied," "guaranteed," "qualified" (without "may potentially")
- Doesn't contain fake numbers
- Has disclaimer language
- Has CTA to licensed professional
- Under word limit
- No protected-class references

If validation fails: fall back to template text.

## 13.5 Data Flow

```
User submits questionnaire
        │
        ▼
┌────────────────────────────────────────┐
│ 1. Validate inputs (server-side)       │
│    - Drop malicious payloads           │
│    - Clamp values to reasonable ranges │
│    - Sanitize for AI                   │
└────────────────┬───────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────┐
│ 2. Run deterministic rule engine       │
│    - Calculate DTI, LTV, etc.          │
│    - Score each pillar                 │
│    - Identify obstacles                │
│    - Output: structured data object    │
└────────────────┬───────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────┐
│ 3. Send to AI for explanation          │
│    - Structured data only              │
│    - System prompt with rules          │
│    - Output: human-readable text       │
└────────────────┬───────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────┐
│ 4. Validate AI output                  │
│    - Forbidden word check              │
│    - Length check                      │
│    - Disclaimer presence               │
│    - Fall back if needed               │
└────────────────┬───────────────────────┘
                 │
                 ▼
┌────────────────────────────────────────┐
│ 5. Render to user                      │
│    - Combine rule data + AI text       │
│    - Apply styling                     │
└────────────────────────────────────────┘
```

## 13.6 Failure Modes & Fallbacks

### If AI service is down
- Fall back to pre-written templates
- Templates cover all 8+ scenarios
- User experience: identical, just less personalized

### If AI generates forbidden language
- Validation catches it
- Fall back to template
- Log incident for review

### If AI hallucinates a number
- Validation catches (no numbers in AI output, only in rule output)
- Fall back to template

### If AI is biased
- Regular auditing of AI outputs
- Spot-check for protected-class implications
- Quarterly fairness review
- Pre-prompt testing

## 13.7 Compliance Hooks

### Document AI usage
- "We use AI to generate educational explanations of your mortgage readiness results. AI does NOT make any credit decision. All credit decisions are made by licensed professionals."

### Adverse action
- The system does NOT perform adverse action
- We don't pull credit, we don't deny anyone
- The "obstacles" we identify are educational, not decisions
- This is a key compliance point — review with attorney

### ECOA / Fair Lending
- The questionnaire must NOT collect:
  - Race
  - Religion
  - National origin
  - Sex / gender
  - Age
  - Marital status
  - Familial status (children)
  - Disability
- AI outputs must be tested for disparate impact
- The system must give the same diagnostic regardless of demographics

### CCPA / Privacy
- AI processing must be disclosed in privacy policy
- User must be able to opt out of AI-generated content
- Data must not be used to train future models without consent

## 13.8 Cost Considerations

### Per-diagnostic AI cost
- Input: ~500 tokens of structured data + system prompt
- Output: ~300 tokens of text
- Claude Sonnet 4.5: ~$0.003 per diagnostic
- Claude Haiku 4.5: ~$0.0003 per diagnostic
- OpenAI GPT-4o-mini: ~$0.0005 per diagnostic

### At 1,000 diagnostics/month
- Claude Sonnet: $3/month
- Claude Haiku: $0.30/month
- Trivial cost — quality is more important

### Recommendation
- Use **Claude Sonnet 4.5** for V1 (quality matters)
- Switch to **Haiku** for V2 at higher volumes
- Use **rule-based templates** for fallbacks (free)

## 13.9 Future AI Capabilities (V3+)

### Conversational AI
- User can ask follow-up questions about their results
- "Why might my DTI be a problem?"
- "What if I paid off my car?"
- AI responds from approved knowledge base + their diagnostic

### Document analysis (post-lead)
- User uploads paystubs / W-2
- AI extracts key data
- LO reviews and uses for pre-approval (NOT a credit decision)

### Predictive lead scoring
- AI predicts likelihood of conversion based on:
  - Questionnaire data
  - Engagement
  - Demographic (NOT for discriminatory purposes)
  - Historical patterns
- Used for prioritization, not for discrimination

### Personalized educational content
- "Based on your situation, here are 3 articles that might help"
- All articles pre-approved, not generated fresh

### Voice / phone AI (V3+)
- Inbound call handling for hot leads
- "Press 1 to schedule, 2 for questions, 3 for an agent"
- Or full conversational AI for tier-1 questions
- Always with option to talk to human
- TCPA-compliant

## 13.10 Recommended LLM Architecture for V1

**Stack:**
- **Model:** Claude Sonnet 4.5 (via Anthropic API)
- **Fallback:** Pre-written templates (no AI call)
- **Validation:** Rule-based forbidden-word checker
- **Logging:** Every AI call logged for compliance review
- **Cost cap:** $50/month initially, with alerts

**Prompts (in code, version-controlled):**
- `system_explain_obstacle.txt`
- `system_explain_strength.txt`
- `system_explain_program.txt`
- `system_email_personalize.txt`
- `system_call_prep_summary.txt`

**All prompts reviewed by compliance attorney before going live.**

## 13.11 What to Build vs What NOT to Build

### ✅ Build
- Rule engine (all numbers, all scoring)
- AI explanation layer (text only, with validation)
- Email personalization
- LO call prep summaries

### ❌ Don't build
- Fully automated loan decisions
- Voice AI handling credit decisions
- Real-time credit decisions
- AI that talks to consumers about specific lender rates
- AI that recommends specific loan products (only suggests categories)
- AI that asks for or processes SSN/DOB
