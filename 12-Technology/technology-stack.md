# PART 12 — TECHNOLOGY STACK

## 12.1 Philosophy: Simplicity First

You are not a developer. The tech stack should:
- Be set up in days, not months
- Cost under $150/month to start
- Be maintainable by a non-developer using AI tools
- Have a clear upgrade path
- Handle compliance basics (HTTPS, backups, privacy)
- Be portable if you need to change later

## 12.2 Stack Options Compared

### Option A: **Lovable + Supabase** (RECOMMENDED for non-coders)

**Best for:** Solo non-technical MLO wanting to launch in 1-2 weeks

| Component | Tool | Cost |
|---|---|---|
| Frontend | Lovable (vibe-code) | $25-50/month |
| Backend | Supabase (Postgres + Auth + Storage) | $25/month |
| Hosting | Vercel (auto from Lovable) | Free-$20/month |
| Email | Resend | $20/month |
| SMS | Twilio | Pay per use |
| Calendar | Cal.com (cloud) | $12/month |
| Analytics | Plausible | $9/month |
| Domain | Cloudflare Registrar | $10/year |
| **Total** | | **~$100-150/month** |

**Pros:**
- Lovable is designed for non-coders using AI
- Supabase gives you a real database (Postgres) for free-tier scale
- 1-2 week launch possible
- Can use Claude Code / Cursor for advanced work later
- Easy to add custom code

**Cons:**
- Vibe-coding can be hit-or-miss
- Limited by Lovable's editor constraints
- May need developer help for advanced features
- Vendor lock-in risk (mitigated: Supabase is open-source, you can self-host)

### Option B: **Webflow + Memberstack + Airtable**

**Best for:** Marketer who wants polish and is okay with limitations

| Component | Tool | Cost |
|---|---|---|
| CMS / Frontend | Webflow | $23-235/month |
| Forms / Logic | Webflow + Logic | Included |
| Member / Lead data | Memberstack or Outseta | $25-100/month |
| Database | Airtable | $20/month |
| Email | ConvertKit or Mailchimp | $30-50/month |
| SMS | Twilio | Pay per use |
| Calendar | Calendly | $12/month |
| Analytics | Plausible | $9/month |
| **Total** | | **~$150-400/month** |

**Pros:**
- Beautiful design out of the box
- Visual editor
- Easy content management
- Good for non-developers

**Cons:**
- Limited logic (complex questionnaire hard)
- Expensive at scale
- Hard to add custom features
- Not great for AI integration
- Forms logic gets complex quickly

### Option C: **WordPress + Formidable + Airtable**

**Best for:** Traditional marketer familiar with WordPress

| Component | Tool | Cost |
|---|---|---|
| Hosting | Cloudways / Kinsta | $15-35/month |
| CMS | WordPress | Free |
| Forms | Formidable Pro | $50-100/year |
| Database | Airtable or WP DB | $20/month or free |
| Email | Mailgun / SendGrid | $15-35/month |
| Calendar | Calendly | $12/month |
| Analytics | Plausible | $9/month |
| **Total** | | **~$80-150/month** |

**Pros:**
- Familiar to most marketers
- Cheap
- Easy to find developers
- Lots of plugins

**Cons:**
- Security concerns (must maintain)
- Slower performance
- Plugin conflicts
- Harder AI integration
- Formidable Forms has limits

### Option D: **Next.js + Vercel + Supabase + Claude** (Custom)

**Best for:** Non-technical MLO who can use Claude Code / Cursor

| Component | Tool | Cost |
|---|---|---|
| Frontend + API | Next.js (TypeScript) | Free |
| Hosting | Vercel | $20/month |
| Database | Supabase | $25/month |
| Auth | Supabase Auth | Included |
| Email | Resend | $20/month |
| SMS | Twilio | Pay per use |
| Calendar | Cal.com (self-hosted or cloud) | $0-12/month |
| Analytics | Plausible | $9/month |
| AI | Claude API | $5-50/month |
| **Total** | | **~$100-150/month** |

**Pros:**
- Most flexibility
- AI-native (designed for AI generation)
- Best long-term scalability
- Modern best practices
- Can do anything you can imagine

**Cons:**
- Requires more technical comfort
- AI-assisted development required
- More things to maintain
- Higher learning curve

### Option E: **No-Builder Platforms** (Mortgage-specific)

**Best for:** MLOs who want a turnkey solution

Some platforms are designed for mortgage LOs specifically:
- **Jungo** — CRM + landing pages + lead capture
- **Shape** — mortgage CRM with built-in tools
- **Bonzo** — mortgage lead management
- **Maxwell** — borrower portal + CRM
- **Byte** — mortgage CRM

**Pros:**
- Built for the industry
- Compliance-aware
- Integrated LOS
- Less DIY

**Cons:**
- Expensive ($200-500/month)
- Less customizable
- Won't have the "Why Can't I Qualify?" diagnostic
- May not match this concept's needs

## 12.3 RECOMMENDED: Option A or D (Lovable or Claude Code + Vercel/Supabase)

### Why these two

**Option A (Lovable) if:** You want to launch in 1-2 weeks and don't want to write code.

**Option D (Claude Code/Cursor + Vercel/Supabase) if:** You want to use AI coding tools and are willing to learn basics.

Both lead to a similar architecture:
- Modern web app
- Real database
- Email + SMS + calendar
- AI integration
- Privacy-friendly

### My recommendation for you: **Lovable + Supabase** to launch, **migrate to Option D** as you grow

**Why:**
1. Launch in 1-2 weeks (not months)
2. Validate the concept first
3. Migrate to a more powerful stack once validated
4. Save 2-3 months of build time
5. Use the proceeds from closed loans to fund a better stack

## 12.4 Architecture Diagram

```
┌────────────────────────────────────────────────────────┐
│                    USER BROWSER                        │
│  - Landing Page                                        │
│  - Questionnaire                                       │
│  - Results Page                                        │
│  - Lead Form                                           │
└─────────────────────┬──────────────────────────────────┘
                      │
        ┌─────────────▼──────────────┐
        │     CLOUDFLARE (CDN)       │
        │  - SSL                     │
        │  - DDoS protection         │
        │  - Caching                 │
        │  - Domain (DNS)            │
        └─────────────┬──────────────┘
                      │
        ┌─────────────▼──────────────┐
        │     VERCEL / LOVABLE       │
        │  - React / Next.js app     │
        │  - Edge functions          │
        │  - Static + SSR            │
        └─────────────┬──────────────┘
                      │
        ┌─────────────▼──────────────┐
        │       SUPABASE             │
        │  - Postgres DB             │
        │  - Auth (admin login)      │
        │  - Storage (PDFs, files)   │
        │  - Row-level security      │
        └─────────────┬──────────────┘
                      │
        ┌─────────────▼──────────────┐
        │    EXTERNAL SERVICES       │
        │  - Resend (email)          │
        │  - Twilio (SMS)            │
        │  - Cal.com (calendar)      │
        │  - Claude API (AI)         │
        │  - Plausible (analytics)   │
        │  - Cloudflare Turnstile    │
        │    (anti-spam)             │
        └────────────────────────────┘
```

## 12.5 Plain English Architecture

### Frontend (what users see)
- Built with **Next.js** (or Lovable) and **React**
- Hosted on **Vercel** (or Lovable's built-in)
- Loads fast, looks good, works on mobile
- The pages are static (cached) except the questionnaire and results
- The questionnaire has conditional logic — shows/hides questions based on prior answers
- The results page is generated per user

### Backend (the brain)
- **Supabase** is your database
- Stores: user questionnaire answers, lead info, results, email history
- **API routes** (Next.js) handle: form submission, email sending, calendar booking
- **Edge functions** handle: AI explanation generation (calls Claude API)
- **Cron jobs** handle: email drip sequences, daily analytics rollups

### Integrations
- **Resend** sends transactional email (results PDF, confirmations)
- **Mailgun or ConvertKit** sends marketing email (nurture sequences)
- **Twilio** sends SMS
- **Cal.com** or **Calendly** handles calendar booking
- **Claude API** generates personalized explanations
- **Plausible** tracks analytics (privacy-friendly, no cookies)
- **Cloudflare Turnstile** prevents spam submissions

### Admin Dashboard
- Simple admin panel (protected login)
- View leads, mark as contacted, see status
- View analytics
- Edit content
- Built into the Next.js app or use Airtable

## 12.6 Database Schema (Simplified)

### Table: `leads`
```sql
id (uuid)
created_at (timestamp)
name (text)
email (text)
phone (text)
state (text)
zip (text)
purpose (text)  -- purchase, refinance, etc.
property_type (text)
target_price (numeric)
down_payment (numeric)
annual_income (numeric)
employment_type (text)
credit_band (text)
monthly_debt (numeric)
timeline (text)
is_first_time_buyer (boolean)
has_hoa (boolean)
hoa_dues (numeric, nullable)
recent_credit_issues (jsonb)
lead_score (integer)
tier (text)  -- hot, warm, nurture, future, low
status (text)  -- new, contacted, booked, closed, lost
last_contacted_at (timestamp)
notes (text)
source (text)  -- google, facebook, direct
utm_params (jsonb)
consent_tcpa (boolean)
consent_email (boolean)
consent_sms (boolean)
ip_address (text)
user_agent (text)
```

### Table: `questionnaire_responses`
```sql
id (uuid)
created_at (timestamp)
session_id (text)  -- for anonymous users
answers (jsonb)  -- raw answers
ip_address (text)
user_agent (text)
referrer (text)
```

### Table: `results`
```sql
id (uuid)
created_at (timestamp)
session_id (text)
lead_id (uuid, nullable)
input_data (jsonb)
output_data (jsonb)  -- pillar scores, obstacles, ranges
ai_explanation (text)
confidence (text)  -- high, medium, low
```

### Table: `email_log`
```sql
id (uuid)
created_at (timestamp)
lead_id (uuid)
email_type (text)  -- welcome, day2_obstacle, etc.
sent_at (timestamp)
opened_at (timestamp, nullable)
clicked_at (timestamp, nullable)
```

### Table: `appointments`
```sql
id (uuid)
created_at (timestamp)
lead_id (uuid)
scheduled_at (timestamp)
duration (integer)  -- minutes
cal_event_id (text)
status (text)  -- scheduled, completed, no_show, cancelled
notes (text)
```

## 12.7 Compliance Tech Requirements

### Required
- ✅ **SSL/TLS** — all sites get this automatically (Vercel, Lovable, Cloudflare)
- ✅ **Cookie consent banner** — for GDPR/CCPA compliance
- ✅ **Privacy policy** — generated via Termly or Iubenda
- ✅ **Terms of use** — generated
- ✅ **HTTPS everywhere** — automatic
- ✅ **Backups** — Supabase has automatic backups
- ✅ **Data deletion** — implement on request
- ✅ **Audit log** — for admin actions
- ✅ **Anti-spam** — Cloudflare Turnstile (free)

### Recommended
- ✅ **DDoS protection** — Cloudflare (free tier)
- ✅ **CSP headers** — Content Security Policy
- ✅ **HSTS** — HTTP Strict Transport Security
- ✅ **X-Frame-Options** — prevent clickjacking
- ✅ **Rate limiting** — protect against abuse
- ✅ **WAF** — Web Application Firewall (Cloudflare Pro)

### Privacy-friendly analytics
- ✅ **Plausible** (no cookies, no consent banner needed in many jurisdictions)
- ❌ Avoid Google Analytics without proper consent

## 12.8 Data Retention & Security

### Retention policy
- **Questionnaire responses (anonymous):** 90 days
- **Lead data (with consent):** 7 years (mortgage industry norm)
- **Email logs:** 2 years
- **AI explanations:** 1 year
- **Analytics:** 2 years

### Security measures
- Encrypted at rest (Supabase default)
- Encrypted in transit (TLS)
- Row-level security (Supabase RLS)
- Principle of least privilege
- No SSN, no DOB, no bank account numbers collected
- IP addresses hashed after 30 days
- Regular security reviews

## 12.9 Cost Comparison Summary

### Monthly cost at MVP scale (1,000 visitors/month)
| Stack | Cost |
|---|---|
| **A: Lovable + Supabase** | **$100-150** |
| B: Webflow + Airtable | $150-400 |
| C: WordPress + Formidable | $80-150 |
| D: Next.js + Vercel + Supabase | $100-150 |
| E: Mortgage-specific platform | $200-500 |

### At 10,000 visitors/month
| Stack | Cost |
|---|---|
| **A: Lovable + Supabase** | **$200-300** (some overage) |
| B: Webflow + Airtable | $300-600 |
| D: Next.js + Vercel + Supabase | $200-300 |
| E: Mortgage-specific | $500-1,000 |

## 12.10 Build vs. Buy Decision

### For a non-technical MLO with limited time
**Buy first (off-the-shelf tools):**
- Calendar (Calendly/Cal.com)
- Email (ConvertKit/Mailchimp)
- Analytics (Plausible)
- AI (Claude API)

**Build custom:**
- The diagnostic engine (this is your secret sauce)
- The questionnaire with conditional logic
- The lead capture + routing
- The custom admin dashboard

### Why
The diagnostic engine is the only thing that's truly unique. Everything else is commodity.

## 12.11 Recommended Next Steps

### Week 1: Setup
1. Buy domain on Cloudflare
2. Set up Supabase project
3. Set up Vercel account
4. Set up Plausible
5. Set up Resend
6. Set up Cal.com (cloud)
7. Set up Cloudflare Turnstile

### Week 2: Build
1. Use Lovable or Claude Code to scaffold the app
2. Build landing page
3. Build questionnaire with conditional logic
4. Build results page
5. Build lead capture form
6. Connect email + SMS + calendar
7. Add basic admin dashboard

### Week 3: Content + Polish
1. Add 3-5 SEO articles
2. Add privacy policy + terms
3. Add compliance disclosures
4. Test on mobile
5. Get compliance review
6. Set up email drip sequence

### Week 4: Launch
1. Final QA
2. Set up Google Analytics 4 (if needed)
3. Submit to Google Search Console
4. Launch Google Ads
5. Publish on social
6. Email past clients / SOI

## 12.12 Common Mistakes to Avoid

❌ **Don't** use a custom backend when a managed service works
❌ **Don't** collect data you don't need (SSN, DOB, etc.)
❌ **Don't** skip backups
❌ **Don't** ignore mobile
❌ **Don't** skip accessibility (WCAG)
❌ **Don't** forget cookie consent if you use non-privacy-friendly analytics
❌ **Don't** use a free Vercel/Supabase tier in production (limits + lack of support)
❌ **Don't** build custom auth when Supabase Auth works
❌ **Don't** use multiple databases (one source of truth)
❌ **Don't** over-engineer V1 (ship ugly, ship fast)

## 12.13 Future Tech Investments (V2+)

### Tools to add
- **HubSpot** or **Pipedrive** for real CRM
- **Jungo / Shape** for mortgage-specific features
- **A/B testing tool** (VWO, Optimizely, or built-in)
- **Hotjar / Microsoft Clarity** for session replay
- **Sentry** for error monitoring
- **PostHog** for product analytics

### Capabilities to add
- Multi-language (Spanish V2)
- Conversational AI (V2)
- Document upload + AI extraction (V3)
- Multi-state (V2)
- Real-time chat (V2)

## 12.14 Exit Plan: When to Switch Stacks

### Stay on Lovable if:
- Under 50K visitors/month
- Standard features sufficient
- Not adding complex custom logic
- Single MLO operation

### Migrate to Next.js + Vercel + Supabase if:
- 50K+ visitors/month
- Need complex custom features
- Want full control
- Adding team / multiple LOs
- Need specific integrations

### Hire a developer if:
- Doing more than 5K LOC
- Need real-time features
- Want mobile app
- Need custom integrations
- Have $5K+/month tech budget

## 12.15 Specific Tool Recommendations

### Email
- **Resend** (transactional, modern API)
- **ConvertKit** (marketing automation, MLO-friendly)
- **Mailgun** (transactional, dev-friendly)
- ❌ Avoid Mailchimp (poor deliverability in 2024-2025)

### SMS
- **Twilio** (industry standard)
- **MessageBird** (EU-friendly)
- **Telnyx** (cost-effective)

### Calendar
- **Cal.com** (open source, free self-hosted, $12/mo cloud)
- **Calendly** (popular, $12/mo)
- **SavvyCal** (nicer UX, $12/mo)

### Analytics
- **Plausible** (privacy-friendly, $9/mo)
- **Fathom** (similar, $14/mo)
- ❌ Avoid Google Analytics without consent
- ✅ Add **Microsoft Clarity** (free session replay)

### Anti-Spam
- **Cloudflare Turnstile** (free, privacy-friendly)
- **hCaptcha** (privacy-friendly alternative to reCAPTCHA)
- ❌ Avoid reCAPTCHA (privacy concerns)

### AI
- **Claude Sonnet 4.5** (best quality, $3/$15 per 1M tokens)
- **Claude Haiku 4.5** (fast, cheap, $0.80/$4 per 1M tokens)
- **OpenAI GPT-4o-mini** (alternative, $0.15/$0.60 per 1M tokens)

### Compliance Tools
- **Termly** (privacy policy generator, $10/mo)
- **Iubenda** (privacy + cookie consent, $27/yr)
- **Usercentrics** (cookie consent, EU-focused)
- **Cookiebot** (cookie consent, $12/mo)
- **accessiBe** (accessibility overlay — controversial, may not actually solve ADA issues)
- **Manual WCAG audit** (best for serious compliance)
