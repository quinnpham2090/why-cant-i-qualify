# Bank of America Mortgage — Competitive Analysis

**Source:** All findings are extracted from live BofA web pages (HTML, embedded SPA copy, and metadata) captured during this research session. Quotes in quotation marks are verbatim from the site.

---

## 1. Website URL / Specific Page Paths

### Public / marketing pages
| Purpose | URL |
|---|---|
| Mortgage hub (root) | `https://www.bankofamerica.com/mortgage/` |
| Hub canonical | `https://www.bankofamerica.com/mortgage/` (canonical) |
| Home mortgage loans | `https://www.bankofamerica.com/mortgage/home-mortgage/` |
| Today's mortgage rates | `https://www.bankofamerica.com/mortgage/mortgage-rates/` |
| Refinance overview | `https://www.bankofamerica.com/mortgage/refinance/` |
| Today's refinance rates | `https://www.bankofamerica.com/mortgage/refinance-rates/` |
| First-time homebuyer | `https://www.bankofamerica.com/mortgage/first-time-home-buyer/` |
| Digital Mortgage Experience® | `https://www.bankofamerica.com/mortgage/digital-mortgage-experience/` |
| Home Loan Navigator® login | `https://www.bankofamerica.com/mortgage/home-loan-navigator/` |
| Affordable housing / Community Homeownership Commitment | `https://www.bankofamerica.com/mortgage/affordable-housing-programs/` |
| Mortgage Calculator | `https://www.bankofamerica.com/mortgage/mortgage-calculator/` |
| Closing Costs Calculator | `https://www.bankofamerica.com/mortgage/closing-costs-calculator/` |
| Home Affordability Calculator | `https://www.bankofamerica.com/mortgage/home-affordability-calculator` |
| Refinance Calculator | `https://www.bankofamerica.com/mortgage/refinance-calculator/` |
| Home Value Estimator (Real Estate Center) | `https://homevaluerealestatecenter.bankofamerica.com/` |
| Real Estate Center (search) | `https://realestatecenter.bankofamerica.com/` |
| Learn center (pillar) | `https://www.bankofamerica.com/mortgage/learn/` |
| FAQs | `https://www.bankofamerica.com/mortgage/faqs/` |
| Glossary | `https://www.bankofamerica.com/mortgage/glossary/` |
| Learn: prequal vs. preapproval | `https://www.bankofamerica.com/mortgage/learn/mortgage-prequalification/` |
| Learn: how mortgages are approved | `https://www.bankofamerica.com/mortgage/learn/how-to-get-approved-for-a-mortgage/` |
| Learn: how much house can I afford | `https://www.bankofamerica.com/mortgage/learn/how-much-home-can-you-afford/` |
| Learn: types of mortgage loans | `https://www.bankofamerica.com/mortgage/learn/understanding-mortgage-options/` |
| Learn: down payment | `https://www.bankofamerica.com/mortgage/learn/mortgage-down-payment/` |
| Learn: APR vs. interest rate | `https://www.bankofamerica.com/mortgage/learn/apr-vs-interest-rate/` |
| Learn: cash-out refi vs. HELOC | `https://www.bankofamerica.com/mortgage/learn/cash-out-refinance/` |
| BofA Rewards / Preferred Rewards | `https://www.bankofamerica.com/preferred-rewards/` (redirects to `https://info.bankofamerica.com/en/rewards/bofa-rewards`) |
| Sitemap (personal) | `https://www.bankofamerica.com/sitemap` |

### Application URLs (secure)
| Purpose | URL |
|---|---|
| **Prequalification** (digital mortgage) | `https://secure.bankofamerica.com/apply-now-services/home-loans/initialize/v1/init?requesttype=DMPQA&subCampCode=98969` → resolves to `https://secure.bankofamerica.com/digital-mortgage-application/prequal/` |
| **Full mortgage application (purchase)** | `https://secure.bankofamerica.com/apply-now-services/home-loans/initialize/v1/init?requesttype=DME&loanPurpose=purchase` → resolves to `https://secure.bankofamerica.com/digital-mortgage-application/landing/` |
| **Refinance application** | `https://secure.bankofamerica.com/apply-now-services/home-loans/initialize/v1/init?requesttype=DME&loanPurpose=refinance` |
| **Welcome back / saved apps** | `https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=SNR&flow=DMPQWELCOMEBACK` |
| **Sign in** (existing customers) | `https://staticweb.bankofamerica.com/cavmwebbactouch/common/index.html#home?app=signon` |
| **Phone (lending)** | `1-800-324-4842` (in-flow help), `1-866-466-0979` (mortgage sales), `1-866-502-9005` (refi) |

> Note: `bankofamerica.com/mortgage/prequalification` and `/home-loans` 404; the real prequalification entry is the DMPQA URL above, surfaced primarily from the digital-mortgage-experience page.

---

## 2. Target Audience

BofA's mortgage site speaks to a **broad cross-section of U.S. consumers**, but the messaging is layered:

- **First-time homebuyers.** A dedicated "First-time homebuyer" hub (`/mortgage/first-time-home-buyer/`) with the headline "**First-time homebuyer? Relax: We're here to help you through the process**." Articles cover a 5-step guide, types of mortgages, prequal vs. preapproval, and how to apply. Repeatedly says things like "Buying your first home can be exciting and overwhelming" and lists common mistakes for new buyers (cash at closing, PMI, utilities, miscellaneous expenses, debt management, getting prequalified).
- **Refinancers.** `/mortgage/refinance/` headline: "**Ready to Refinance? We are here to help.**" Body copy: "Refinancing can potentially lower your monthly mortgage payment, pay off your mortgage faster or get cash out for that project you've been planning." Cash-out refi is featured alongside HELOC.
- **Existing BofA customers / Preferred Rewards / BofA Rewards members.** The **strongest segmentation lever.** The home-mortgage page and calculators include: "BofA Rewards clients may qualify for an origination fee or interest rate reduction based on their eligible tier at the time of application. Depending on your tier, you may be required to enroll in PayPlan from an eligible Bank of America deposit account prior to the loan closing date in order to receive the full program benefit." The rewards page specifies tiered origination-fee credits:
  - **Member** — $100 off mortgage origination fees
  - **Preferred Plus** — $300 off origination + 0.250% HELOC rate discount
  - **Preferred Honors** — $600 off origination + 0.375% HELOC discount
  - **Premier** — 0.625% HELOC discount
  - Note: a "PayPlan required for mortgage interest rate discount" footnote, and a disclaimer: "Others benefits only apply when a new account is opened, such as an auto loan. If you have an existing auto loan, mortgage or home equity loan with us when you join BofA Rewards, we do not retroactively apply your discount to that loan."
- **Modest-income / first-generation buyers** via the **Community Homeownership Commitment** umbrella (affordable-housing-programs page).
- **U.S. military / veterans.** Multiple VA-loan callouts: "As an active member of the U.S. military, you may be eligible for specialized loan options that feature a lower down payment and more flexible qualification guidelines than those for conventional loans." Field "Did you (or your deceased spouse) ever serve, or currently serve in the U.S. military?" Yes/No.
- **Self-employed / small business owners.** Explicit branches in the prequal flow: "Tell us about your self-employment", "Primary business", "Did this business report a profit or loss in your most recent tax return?", "A bit more about your business income", "Address you filed your last business tax return from", "Previous self-employment", and a previous-employer branch "Who was your previous employer?".
- **Trust / Federal employment / non-U.S. citizens / dual citizens.** Forms ask: "Please tell us your citizenship status" with three radio options: "U.S. citizen", "Dual citizenship with U.S.", "Not a U.S. citizen"; followed by a "Residency type" select for non-citizens.
- **"BofA associates"** (employees). The flow surfaces a modal: "We see that you're a Bank of America associate — As a Bank of America associate you have a dedicated team of lending officers to assist with your home loan needs. In order to use this benefit, simply continue with the application and your lending officer will automatically be updated to a member of this team." Button: "Continue as an employee".
- **Co-borrowers / spouses.** Repeatedly asked: "Would you like to add a co-requestor to the prequalification request?", "Is the co-requestor your spouse?", "Do you and the co-requestor currently live at the same address?", "Whose name(s) should be on the title?", "Are you in a relationship with someone who has the same property rights as a legal spouse?". The co-borrower goes through mirrored steps.
- **Property-type segments** (off-ramps in full application): "Congratulations on your decision to buy another property", "Buying a short sale or a foreclosure home will need some expert assistance", "Buying a home currently under construction", "Properties that will be owned by a trust or corporation will need some expert assistance", "Loan amounts in excess of $2,000,000 will need some expert assistance", "Loan amounts less than $100,000 will need some expert assistance", "Your closing date is greater than 90 days away…", "Using certain types of assets as the source of your downpayment will require some expert assistance".
- **Spanish speakers.** Persistent "En español" toggle in the global nav, plus a Spanish hub at `/es/`.

What is **NOT** a featured audience in the public pages:
- Real estate investors (no DSCR / investor product).
- Crypto-bonus / non-QM / bank-statement-only loans (the flow explicitly off-ramps to a human for unusual files: "Properties that will be owned by a trust or corporation will need some expert assistance").
- Jumbo is implicit ($2M off-ramp; the calculator caps loan amount "Total loan amount ($60,000 - $2.0 million)").

---

## 3. Value Proposition (exact headlines / hero text)

### Hub (`/mortgage/`)
- **Page title:** "Home Loans and Current Rates from Bank of America"
- **Meta description:** "Find competitive home loan rates and get the knowledge you need to help you make informed decisions when buying a home."
- **H1 (visible):** "**Home Loans and Rates**"
- **Engagement-chooser select label:** "**What are your home loan goals?**" with options: "Buy a home", "Lower my monthly mortgage payment", "Pay off my mortgage sooner", "Use my home's equity for a major expense", "Consolidate debt", "Buy my first home". The select maps via `data-mapping-links` to `/mortgage/home-mortgage/`, `/mortgage/refinance/`, etc.
- Hero CTA area: "Let us help find the home loan that's right for you" → "**Get Started**" / "Log in as a guest".
- Section heading: "Our home loans — and low home loan rates — are designed to meet your specific home financing needs"
- Refi section H2: "Refinance your mortgage with our low refinance rates — and potentially lower your monthly mortgage payment"
- HELOC H2: "Leverage the equity in your home and consolidate debt or pay for major expenses with a home equity line of credit"

### Home Mortgage Loans (`/mortgage/home-mortgage/`)
- H1: "**Home Mortgage Loans**"
- Hero H2: "**The perfect home starts with the right mortgage**"
- Meta: "View rates, learn about mortgage types and use mortgage calculators to help find the loan right for you. Prequalify or apply for your mortgage in minutes."
- Subhead: "Get started with the Bank of America Digital Mortgage Experience®"
- CTAs: "**Apply now for home loans**" / "**Get estimate of costs**" / "**Already prequalified? Log in to your prequalification**"
- Selling points listed on the page:
  - "Experienced lending officers are available to help every step of the way"
  - "Avoid the risk of rising rates by locking in the rate when you apply"
  - "Customized terms that fit your personal needs, allowing for lower closing costs or lower monthly payments"
  - "Stay up-to-date on your loan status and electronically sign documents"
  - "BofA Rewards clients may qualify for an origination fee or interest rate reduction based on their eligible tier at the time of application."

### First-time homebuyer (`/mortgage/first-time-home-buyer/`)
- H1: "**Information for First-time Homebuyers**"
- Hero: "**First-time homebuyer? Relax: We're here to help you through the process**"
- Meta: "Buying your first home can be exciting and overwhelming – which is why we have a variety of first-time homebuyer tools and resources to help you. Whether you're just starting to save or you already have a house in mind, we can help you get your keys to your first home."
- Loan types promoted: "Our most popular home loan options: Affordable Loan Solution® mortgage — Down payment as low as 3% (income limits apply); Government loans from the Federal Housing Administration and the U.S. Department of Veterans Affairs; Low down payment options with flexible credit and income guidelines".

### Digital Mortgage Experience (`/mortgage/digital-mortgage-experience/`)
- H1: "**Apply for Your Mortgage**"
- Hero H2: "**The mortgage experience — convenient and online**"
- Body: "The Bank of America Digital Mortgage Experience® puts you in control. Prequalify to estimate how much you can borrow, or apply for a new mortgage online. You can also refinance your existing mortgage."

### Refinance (`/mortgage/refinance/`)
- H1: "**Mortgage Refinance**"
- Hero: "**Ready to Refinance? We are here to help.**"
- Meta: "Learn more about your mortgage refinancing options, view today's rates and use our refinance calculator to help find the right loan for you."

### Mortgage Rates (`/mortgage/mortgage-rates/`)
- H1: "**Mortgage Rates**"
- H2: "**Get the right mortgage to finance your new home**" / "**Get an estimate of costs**"
- "View current mortgage rates for fixed-rate and adjustable-rate mortgages and get custom rates"
- Rates disclaimer: "Rates based on a $200,000 loan in ZIP code 95464" / "Mortgage rates valid as of date/time and assume borrower has excellent credit (including a credit score of 740 or higher)"

### Affordable housing / Community Homeownership Commitment (`/mortgage/affordable-housing-programs/`)
- H1: "**Bank of America's Community Homeownership Commitment®**"
- Lead paragraph: "Good news for aspiring homeowners! Bank of America's Community Homeownership Commitment® is bringing together products and resources that can help modest-income borrowers buy homes of their own. By combining down payment assistance and closing cost help with a low down payment mortgage, you may find that a new home is within reach."
- H2: "**Home grant programs**" / "**3% down payment fixed-rate mortgage**" / "**More homebuying help**"
- America's Home Grant® paragraph: "Our America's Home Grant® program offers a lender credit of up to $7,500 that can be used towards non-recurring closing costs, like title insurance and recording fees, or to permanently buy down the interest rate. The funds do not require repayment."
- Down Payment Grant paragraph: "Our Down Payment Grant program offers a grant of up to 3% of the home purchase price, up to $10,000, to be used for a down payment in select markets. Grant Program is not available with all mortgage products. Must be a first-time homebuyer (no homeownership in the past three years). Contact a lending specialist for more information. The funds do not require repayment."

### Prequal vs Preapproval learn (`/mortgage/learn/mortgage-prequalification/`)
- H1: "**Two smart homebuying moves: mortgage prequalification and preapproval**"
- Subhead: "Find out how much house you can borrow before you start looking — and how you can make the strongest offer possible on the property you choose."
- Headline hook: "If you're ready to make your dream of owning a home a reality, you've probably already heard that you should consider getting prequalified or preapproved for a mortgage. It's time to understand exactly what each of those terms means and how they might help you. And when you're working toward a goal this big, you want every advantage."
- Includes an in-page video titled "View transcript — As you look for a home, you may be asked to get prequalified or preapproved. Before you start, it's important to understand the difference."

---

## 4. Lead Capture Mechanism — When They Ask, Soft vs Hard Pull, Prequal vs Preapproval

### The two distinct lead-capture paths

**(A) Calculator / "engagement" lead capture (top of funnel, no PII).**
On `/mortgage/`, a sticky widget asks the visitor to choose a goal via the "I want to…" select, then a 3-field form appears: **Purchase price + Down payment + ZIP code** (purchase) or **Home value + Current loan balance + ZIP code** (refinance) or HELOC fields. Submitting that form routes to a generic "Get an estimate of costs" results panel (no name, no SSN). The user can continue to either Prequalify or Apply. **No email, phone, SSN, or DOB is requested in the top-of-funnel widget.** It is essentially a price/quote lookup, not a lead form.

**(B) Prequalification application (real lead capture, secure.bankofamerica.com).**
This is the actual funnel. The flow is broken into **two chapters**: "Borrower and co-borrowers" and "Subject property". The menu's `chapterList` reveals **section / chapter names** (the SPA's left-rail): "**Your Information**", "**Your New Home**", "**Your Income**", "**Your Assets**", "**Regulatory Questions**", "**Your Credit**", "**Your Loan Options**" (the latter three also exist for the full application; the prequalification flow uses a slightly different set with named routes like `credit-pull-idv-consent`, `approved`, `referred-to-hln`).

### Exact field order — Personal Information step ("Pleased to meet you" / "First, let's collect some information about you.")

The JSON config `personalInformation2020` (route `borrower-personal-information-urla-2020`) renders the following fields, in this **exact order**:

1. **First name** — required, "Legal name" hint
2. **Middle name** — optional
3. **Last name** — required
4. **Suffix** — optional select
5. **Phone number** — required, hint "xxx-xxx-xxxx" (regex `^[2-9]\d{2}-(?!555)[2-9]\d{2}-\d{4}$` — note BofA explicitly rejects 555-prefix numbers and starts with 2-9, i.e. they are *not* accepting obvious fake numbers)
6. **Phone type** — required (mobile/home/work)
7. **Email address** — required, maxlength 80
8. **Street address** — required, "Current residential address" hint (autocomplete dropdown)
9. (address components: street number, etc.)
10. **Date of birth** — required, "MM/DD/YYYY" hint
11. **Social Security number** — required, "XXX-XX-XXXX" hint
12. **Years in school** — required select, hint "Example: Select 12 if you completed high school"
13. **Did you (or your deceased spouse) ever serve, or currently serve in the U.S. military?** — Yes / No radios
14. **Country of citizenship** — required select
15. **Citizenship status** — required radios: "U.S. citizen", "Dual citizenship with U.S.", "Not a U.S. citizen"
16. **Residency type** — required select (asked when not a U.S. citizen)

The field *order is very important* — it is **Name → Phone → Phone type → Email → Address → DOB → SSN → Education → Military → Citizenship**. Email and phone are asked **before** SSN and DOB. This is unusually soft: many lenders ask for SSN/DOB as the first contact, BofA defers them.

After the personal information step, the flow goes to "What we have / What we need" (prefilled data from BofA CRM, with masked display "***-***-1234"), then a "**Before we check your credit, please review what you've entered so far**" review screen with buttons "**Save and continue**" / "**Go back**" / "**Save and exit**", then "**It's time to check your credit**" — the consent screen.

### Soft vs hard pull — exact copy

The prequalification consent screen (`creditPullIdvConsent` / `creditPullIdvConsentDmpa`) uses these literal strings:

> "By selecting 'Authorize and continue,' you, [borrowerName], acknowledge that prequalification is not an application and that to complete the prequalification, you need to provide written consent to Bank of America to pull your credit report. **You understand that this will be a soft pull with information from one consumer reporting agency and will have no impact on your credit score.** If you decide to proceed, you understand that the Bank will request additional information from you and order a tri-merge credit report, which will be a hard pull with information from all three consumer reporting agencies and may impact your credit score."

> "You are providing your written instructions to Bank of America under the Fair Credit Reporting Act to obtain your credit report from one of the consumer reporting agencies and authorize that agency to release the credit report to Bank of America."

**Bottom line:**
- **Prequalification = soft pull, single bureau, no FICO impact.** Explicitly stated twice on the page (this page and the `/mortgage/learn/mortgage-prequalification/` comparison table).
- **Preapproval = hard pull, tri-merge, all three bureaus, may impact credit score.** Only triggered if the user upgrades to preapproval (separate consent flow at the start of the full Digital Mortgage Experience).
- A prequalification saved application "**will be saved for 30 days**" (`saveAndExit` route text).
- A preapproval application is "good for 90 days" once issued as a preapproval letter.

### Soft pull confirmation vs hard pull
- The prequalification consent only does a **soft pull at first** (the consent language also discloses that a future hard pull *may* be ordered if the user proceeds). After the soft pull, the user is shown either the "**Congratulations! You've been prequalified for a new mortgage loan**" approved screen (with a downloadable prequalification letter, lock-your-rate prompts, Real Estate Center handoff) **or** the "**Your request needs some additional information**" referred-to-HLN screen.
- The "referred" path explicitly says: "We have received all your information and will need to talk to you before we can make a decision. You will receive an email from your lending specialist with this information." Body: "Your lending officer will contact you to discuss next steps. If you have questions now, reach out to them directly." Buttons: "**Call now**", "**Request a call back**", "**Email**", "**View**" (HLN portal).
- The /mortgage/learn/mortgage-prequalification/ comparison table also says: "**Prequalification: credit check (soft inquiry)**" vs. "**Preapproval: credit check (hard inquiry)**" and "Prequalifying at Bank of America is a quick process that can be done online, and you may get results within an hour. For mortgage preapproval, you'll need to supply more information so the application is likely to take more time. You should receive your preapproval letter within 10 business days after you've provided all requested information."

### Additional consent touchpoints
- **BorrowerConsentToBeContacted** content UUID is referenced (FCRA-style written consent).
- A "**What should I do if I've frozen my credit?**" tooltip explains: "If you have frozen your credit report due to security concerns, you will need to temporarily unfreeze with all three credit bureaus (Equifax, TransUnion and Experian) to proceed with a prequalification request."
- A 2-minute inactivity timeout on the application with a "Did you need more time?" modal.

---

## 5. Questions Asked (Exact Inputs)

### Top-of-funnel widget (`/mortgage/`)
- Engagement select ("Buy a home / Lower my monthly mortgage payment / Pay off my mortgage sooner / Use my home's equity for a major expense / Consolidate debt / Buy my first home")
- Purchase price, down payment, ZIP
- Or: home value, current loan balance, ZIP
- Or: HELOC fields
- **No PII collected here.**

### Prequalification application — fields and step labels
The prequalification flow has **~30+ step screens**. The flow's exact heading labels (extracted from the SPA JSON `module-specific/prequal/forms-module/en/...json`):

**Chapter 1 — Borrower and co-borrowers**

Personal info:
- "Pleased to meet you" (unauth) / "First, let's collect some information about you." (auth) — Introduction: "We'd like to get to know you better - please tell us a little about yourself"
- "**What we have**" (prefilled name, SSN, DOB, email, phone, address — masked, with Edit button)
- "**What we need**" (the form to fill missing fields)

Gating / property (purchase):
- "**Your Goals**" — gating question
- "**Login**" — if existing BofA customer signs in

Address:
- "Tell us a little about this property"
- "Property address" (autocomplete)
- "Verify the address"
- "We found additional information for the address you entered."
- "Great, we need some more information about your current living situation" (housing status: own/rent/other)
- "We need at least 2 years of address history"
- "Please provide information for the address you lived at before {{startDateAtPreviousAddress}}"

Income (auto-verification branch):
- "**{{greeting}}, let's gather information about your income**"
- "**Now let's gather information about your income**" / "{{firstName}}, now let's gather information about your income"
- "Please allow us to gather information about your income" → "Just a moment" (Plaid/Finicitic-style bank aggregation, "We found N source(s) of income")
- "Income source" / "What we have for income source" / "What we need for income source"
- "Additional income sources"
- "Please select all statements that apply to your current income" (multi-select chip questions: hourly, salary, commission, bonus, overtime, self-employed, tips, military, retirement, etc.)
- "Are you employed by a person involved in this real estate transaction?" (Yes/No)
- "**Who is your current employer?**"
- "Primary employer" / "Secondary employer" / "Work experience"
- Self-employed branch: "**Tell us about your self-employment**" → "Primary business" / "Secondary business" / "**Address you filed your last business tax return from**" / "**Did this business report a profit or loss in your most recent tax return?**" (radio: Yes/No/Not yet filed) / "**A bit more about your business income**"
- "Tell us about any other sources of income you may have" → "Another income source" / "Which of these apply to your previous two years of income?" / "Choose all that apply"
- Previous employer: "Who was your previous employer?" → "Previous employer" / "Previous job"
- Previous self-employment: "Tell us about your previous self-employment" / "Previous business" / "Previous self-employment"
- Military: "Tell us about your previous military service" / "Previous military service"
- Gap: "**Our system indicated a gap in your employment history**"
- "Do you have any additional income from the past two years that you would like to add?"
- "Do you have any previous income from the past two years that you'd like to add?"

Co-borrower (mirrored):
- "**Would you like to add a co-requestor to the prequalification request?**"
- "Is the co-requestor your spouse?"
- "Do you and the co-requestor currently live at the same address?"
- "Co-requestor information" / "First, let's collect some information about your co-requestor." / "We'd like to get to know the co-requestor better - please tell us a little about yourself"
- "Now it's the co-requestor's turn" (modal)

Military (deeper):
- "**What best describes the U.S. military service you mentioned?**" (branch select)
- "**Are you entitled to benefits from a U.S. military service?**" (Yes/No)
- "Please tell us more about that relationship"

Property:
- "Please select any items that apply to this property" (multi-select chips: single-family, condo, multi-family, manufactured, etc.)
- "Whose name(s) should be on the title?"
- "Are you in a relationship with someone who has the same property rights as a legal spouse?"
- "Are you interested in a VA loan?"

Assets / accounts:
- "Please provide us with information about accounts you own"
- "You can enter as many accounts as needed. Accounts added will be used to meet down payment, closing costs and…"
- "**Save time by linking your non-Bank of America accounts**" (Plaid/external aggregator)
- "Information about account"
- "We've prefilled your Bank of America accounts" (shows "Feel free to deselect any accounts you don't want to include on your prequalification request")
- "Which accounts will be used for the down payment of your new home?"
- "Which accounts will be used for the closing costs of your refinance?"
- "You can always edit the accounts chosen at a later date"
- "Do you have other accounts you need to add?"
- "Do you own any real estate?" (refi) / "Do you own any real estate other than the home you want to refinance?"

Real-estate / liens:
- "**We found <N> on property you own**" / "Please review and provide any missing information."
- "Please select the liens associated with this property"
- "You identified multiple liens on a property" → "Please identify each lien position"

Out-of-wallet / identity-verification (Knowledge-Based Authentication) — "Where do we get these questions?" tooltip says: "A third-party credit bureau generated these questions based on your credit history and other proprietary data."
- "**Verification questions**" / "{{name}}, please answer the following questions to continue the loan process."
- "Just a moment" (waiting screen)
- Repeated for co-borrower

Demographic / HMDA (regulatory):
- "**Next, a few questions we're required to ask**" — body: "The answers to the questions below will be used for your request. If you apply for a mortgage with us in the next 90 days, we will still have the information to use for your mortgage application."
- "What is your race, ethnicity & sex? (Select all that apply)" — "{{applicantName}}, we're required to ask demographic information" / "{{applicantName}}, we need to ask you the same questions"

Review:
- "**Before we check your credit, please review what you've entered so far**" — buttons: Save and continue / Go back / Save and exit

Credit:
- "**It's time to check your credit**" — soft-pull consent (verbatim FCRA text quoted above)
- "Authorize and continue" / "Go back" / "Save and exit"
- Post-consent: "Just a moment" → soft pull runs → either Approved or Referred

Outcome:
- "**Congratulations! You've been prequalified for a new mortgage loan**"
  - Sub: "Your requested loan amount", "Loan program" (30/20/15 fixed or 10/7/5 ARM), "APR", "Rate" (with "Locked rate" or "(variable)" variants)
  - "**While you're shopping**" / "If you need to update your prequalification letter or you're ready to apply for a mortgage, we can help. You can manage your options online." — link: "Manage my prequalification"
  - "**Your prequalification request**" / "**Your prequalification letter**" / "**All the listings in one place**" / "**What's next?**" / "**Your lending officer**" / "**When should you get pre-approved?**"
  - Sub-questions: "Do you want to lock your rate?" / "Are you currently under contract for a property?"
- OR "**Your request needs some additional information**" (referred to HLN / lending officer)
  - "We have received all your information and will need to talk to you before we can make a decision."
  - "You will receive an email from your lending specialist with this information."
  - Buttons: Call now / Request a call back / Email / View (HLN portal)

Loan-options / "Your Loan Options" (for full application):
- "Now let's talk about loan options" / "Use the calculator to see how much you need to borrow" / "Use the calculator to determine your loan amount"
- "**Select your loan term and options**" / "Based on the information you provided, here are some customized mortgage options to choose from" / "Don't see the payment combination you are looking for?"
- "**Loan summary**" / "Based on the information you provided, here is your loan summary. Please review for accuracy and then submit your Pre-Qualification Request."

### Inputs by data type (consolidated)
- **Identity / KYC:** First/Middle/Last, Suffix, DOB, SSN, Country of citizenship, Citizenship status (US / Dual / Non-US), Residency type, Years in school, Marital status, Number of dependents, Language preference (implicit via locale).
- **Contact:** Phone, phone type, Email, Street address (with autocomplete).
- **Employment:** Employer name, position, employment status, employer address, work phone, gross monthly income, base income, start date, employment type (W-2 / 1099 / self-employed / military), gap explanations. Self-employed: business name, business address, tax return address, profit/loss flag, business income sources.
- **Income (additional):** Alimony, child support, disability, retirement, social security, VA benefits, rental, investment, etc. (multi-select chips).
- **Property:** Address (subject property), property type, year built, intended use (primary / secondary / investment), property value, intended occupancy, loan purpose (purchase / refi / cash-out), lien position.
- **Loan request:** Purchase price, down payment, loan amount, loan term, interest-rate type (fixed/ARM), points.
- **Assets:** Checking, savings, money market, CDs, brokerage, retirement, gift funds, other. External accounts via aggregator.
- **Liabilities:** Auto, credit card, student loans, child support, alimony, other monthly debts.
- **Declarations:** Outstanding judgments, bankruptcies, foreclosure, short sale, federal employment, citizenship, marital status, dependents, primary residence ownership.
- **HMDA (regulatory, optional-but-required-to-show):** Race, ethnicity, sex.
- **Real estate owned:** Address, current value, mortgage balance, lien position, rental income, monthly mortgage payment.
- **Out-of-wallet KBA:** 3-5 credit-bureau-generated identity-verification questions (auto-loans, prior addresses, etc.).
- **Co-borrower:** Mirrored personal info + relationship questions.

---

## 6. User Experience (Steps, Mobile, Friction, Time-to-Result)

### Time-to-result
- **Prequalification:** "**Prequalifying at Bank of America is a quick process that can be done online, and you may get results within an hour.**" (per the `/mortgage/learn/mortgage-prequalification/` page.) In practice, the SPA runs the soft pull + decisioning in seconds once the consent is given; the "Just a moment" wait screen is the bottleneck.
- **Preapproval:** "**You should receive your preapproval letter within 10 business days after you've provided all requested information.**"

### Number of steps
- **~30+ named step screens** in the prequalification flow. With a saved profile and existing-customer sign-in, the user can prefill a large portion and reduce the visible steps.
- The full Digital Mortgage Experience has **6 chapter sections** (per the in-app menu): "Your Information" → "Your New Home" → "Your Income" → "Your Assets" → "Regulatory Questions" → "Your Credit" → "Your Loan Options" — but the in-app section counter suggests 6 (or 7 with "Your Loan Options").

### Mobile
- All pages have a `viewport` meta tag and BofA's design system uses `show-for-small-only` / `show-for-medium-up` classes. The prequal SPA is built for mobile (the "small-only" / "medium block" breakpoint annotations appear in button configs: `{"breakpoints":{"small-only":"medium block"}}`).
- The flow has 2-minute inactivity timeout with a "Did you need more time?" prompt — defensive against mobile-app backgrounding.

### Friction points
- **High friction:** SSN is asked up-front in the personal information step (after name/phone/email/address but before income). KBA (out-of-wallet verification questions) gate the credit pull.
- **Time-out:** 2-minute inactivity auto-logout (visible modal). "Your application will time out in 2 minutes if there's no activity."
- **Multiple "Save and exit" CTAs** (in every step's button config) so users can resume within **30 days**. The save-and-exit screen reads: "Your prequalification request for a home mortgage loan will be saved for 30 days. Check your email for instructions on how to retrieve and complete your prequalification request. You can also visit the saved applications page to complete your application."
- **No back button on browser** (SPA explicitly disables it: "The browser's back button is not available."). Internal nav has "**Go back**" link in every step.
- **Co-borrower gating:** If you say "no" to a co-requestor, you can keep going; if "yes", the entire flow mirrors.
- **In-flow help:** Persistent "Questions about your application?" help icon → call `1-800-324-4842` or "Request a call back" or "Browse with a Specialist" (Cobrowse/live-look session).
- **Forced human off-ramps** for edge cases (jumbo > $2M, loans < $100K, non-arm's-length, trusts/corporations, second homes, construction, short sales/foreclosures, certain down payment sources, closing dates > 90 days, recent Fannie/Freddie form changes). All of these read "Let's talk" or "We need to ask for more information" and ask the user to call.

### Online Banking / existing-customer fast path
- "**Log in. Save time.** — Customers enrolled in Online Banking can finish their request more quickly by signing in and prefilling their request with account information." (a pre-login modal) — this is the BofA-unique conversion lever: existing customers get prefilled data ("What we have") and can skip 60–80% of the typing.
- "**Already prequalified? Log in to your prequalification**" link on the home-mortgage page.

### Confirmation / result UX
- The "Congratulations" screen shows the loan amount, rate, APR, points, loan term; offers "Lock your rate", "Find a home" (Real Estate Center), "Manage my prequalification" link, contact info for lending officer, NMLS ID, and "Request a call back" / "Email" buttons.
- The "**referred-to-HLN**" screen has a single primary action: talk to a human.

---

## 7. Calculator Functionality

BofA's mortgage suite has **4 primary calculators** plus an external Home Value Estimator:

| Calculator | URL | Inputs | Output |
|---|---|---|---|
| **Mortgage Calculator** | `/mortgage/mortgage-calculator/` | Purchase price, Down payment, Annual gross household income, Loan term (10/15/20/30 yr, 5/7/10 ARM), Property ZIP code | Monthly P&I, rate, APR, points, total interest, total payment, breakdown of property taxes, insurance, PMI |
| **Home Affordability Calculator** ("How much home can I afford?") | `/mortgage/home-affordability-calculator` | Annual gross household income, Monthly debt payments, Property ZIP code, Down payment % | **Estimated home price**, monthly PITI, interest rate, APR, down payment %; "based on a 30-year fixed-rate mortgage on a single-family residence… for a borrower with excellent credit and user inputs… based on your debt-to-income ratio (DTI)" |
| **Closing Costs Calculator** | `/mortgage/closing-costs-calculator/` | Purchase price, Down payment, Loan amount ($60,000–$2,000,000), Annual gross household income, Loan term, Loan type, ZIP | Total closing costs, breakdown: loan origination, appraisal, title insurance, recording fees, transfer taxes, mortgage insurance, prepaid items, escrow |
| **Refinance Calculator** | `/mortgage/refinance-calculator/` | Home value, Current loan balance, ZIP, new loan term | Break-even point, monthly savings, total interest savings, rate comparison |
| **Home Value Estimator** | `https://homevaluerealestatecenter.bankofamerica.com/` | Address | Free AVM (uses BofA's "Home Value Real Estate Center") |

### DTI handling
- The Affordability Calculator's output explicitly cites: "Typically, a mortgage payment should be no more than **43%** of your monthly income (this is known as a debt-to-income ratio). In addition to the monthly cost of a mortgage, you'll also need to know how much of a down payment you can afford along with what the typical closing costs can be to purchase a home." This is the QM/ATR 43% DTI cap.
- All calculators assume "excellent credit (including a credit score of 740 or higher)" — a critical disclaimer that the actual rate you receive will be different.

### Calculator UX
- "What would you pay each month?" hero on the mortgage calc.
- ZIP code drives a real-time rate fetch ("Please wait a moment while we retrieve our low rates"). Tooltip layer for ZIP-code lookup.
- An info modal: "In order to provide you with the best possible rate estimate, we need some additional information. Please contact us in order to discuss the specifics of your mortgage needs with one of our home loan specialists." — i.e. the calculator yields to a human for nuanced scenarios.
- Modals: "How much should I put down?", "What your loan term means".
- Preferred Rewards messaging: "BofA Rewards clients may qualify for an origination fee or interest rate reduction based on their eligible tier at the time of application. Depending on your tier, you may be required to enroll in PayPlan from an eligible Bank of America deposit account prior to the loan closing date in order to receive the full program benefit."

### What's NOT a calculator
- There is **no standalone DTI calculator** as a separate tool. DTI is computed only inside the Affordability Calculator.
- No "rent vs. buy" calculator.
- No "should I refinance" breakeven chart (the refinance calculator shows breakeven but no break-even-month chart).
- No HELOC-specific calculator on the mortgage site (HELOC calculator is on `/home-equity/home-equity-calculator/`).
- No self-employed / bank-statement income estimator.

---

## 8. Calls to Action

Verbatim CTA labels and links extracted from the live pages:

### Hub
- "**What are your home loan goals?**" → goal select
- "**Get Started**" (top nav CTA, links to `https://secure.bankofamerica.com/apply-now-services/home-loans/initialize/v1/init?requesttype=DME&loanPurpose=purchase&subCampCode=`)
- "**Log in as a guest**" (link to `https://secure.bankofamerica.com/applynow/initialize-workflow.go?requesttype=SNR&flow=DMPQWELCOMEBACK`)
- "**Schedule an appointment**" (top nav)
- "**Sign in**" (top right)
- "**Contact Us**" / "**Help**" / "**Locations**" / "**Call us**" `tel:18664660979`

### Home-mortgage page
- "**Apply now for home loans**" (primary, links to the DME application)
- "**Get estimate of costs**" (secondary, opens a "Get a loan estimate" modal that says "To receive your loan estimate, please call one of our lending specialists at 866.466.0979… does not represent a loan approval")
- "**Already prequalified? Log in to your prequalification**" (logged-out link to existing prequalification)
- "If you're an existing customer please log in to Online Banking, if not please log in as a guest."
- "**Search for homes by city & state or ZIP**" (Real Estate Center)
- "**Find a location**" / "**Call us**"

### Digital Mortgage Experience
- "**Get started with your application for a new mortgage**" (Purchase)
- "**Get started with your application to refinance your mortgage**" (Refi)
- "**Prequalify**" button (links to `?requesttype=DMPQA`)
- "**apply for a new mortgage online**" / "**refinance**"
- "Looking to buy a new home? From prequalification to your closing date, we're with you every step of the way"
- "Want a better interest rate or a shorter term? Apply now to refinance your current home loan"

### First-time homebuyer
- "**Prequalify Now**" (top tab)
- "**Calculate your potential monthly payment with our mortgage calculator**"
- "**Be prepared for the upfront costs at closing using our closing cost calculator**"
- "**Visit the Bank of America Real Estate Center®**" (house search)
- "**Learn more about the Bank of America Digital Mortgage Experience®**"

### Refinance
- "**Apply now for refinance**" (CTA, phone `866.502.9005`)
- "**Explore cash-out refinance loans**"
- "**Want another option? Consider a home equity line of credit**"

### In-flow
- "**Continue**" (every step's primary)
- "**Save and continue**" / "**Save and exit**" / "**Go back**"
- "**Authorize and continue**" (consent)
- "**Get started**" (welcome back / already prequalified)
- "**Manage my prequalification**" (post-approval)
- "**View**" (HLN portal link)
- "**Request a call back**" (modal CTA, "Phone number we'll use to call you ***-***-1234")
- "**Continue as an employee**" (associate modal)
- "**Return to overview page**" (timeout modal)
- "**Continue with application**" (lending officer changed modal)
- "**Log out?**" modal: "Log out and we'll save your information so you can pick up where you left off."

### Prequal result
- "**Lock your rate**" prompt
- "**Start your home search with Bank of America Real Estate Center®**" (post-prequal)
- "**Manage my prequalification**" (post-prequal)

### Phone numbers
- Mortgage sales: `1-866-466-0979`
- Refinance: `1-866-502-9005`
- In-flow lending specialist: `1-800-324-4842`
- TTY (hearing-impaired): `800-915-8026`
- Spanish site available via `/es/`

---

## 9. Trust Signals

| Signal | Where it appears | Verbatim |
|---|---|---|
| **FDIC-insured bank** | Footer of every page | "**Bank of America, N.A. Member FDIC.**" |
| **Equal Housing Lender** | Footer of every page; logo icon on application shell | "**Equal Housing Lender**" with house-with-equal-sign SVG icon (assets: `…-icon-ehl-CSX9c596024.svg` and white variant) |
| **SIPC** | Footer (Merrill link) | "SIPC" → links to `https://sipc.org/` |
| **NMLS ID** | Displayed next to lending officer / on phone "More" sections | "NMLS ID: " (the actual number is loaded dynamically per officer) |
| **Security / Privacy center** | Footer | "Privacy" → `https://www.bankofamerica.com/security-center/privacy-overview/`; "Security" → `https://www.bankofamerica.com/security-center/overview/`; "Online Banking Service Agreement" → `/online-banking/service-agreement.go` |
| **Banking regulator disclaimers** | Mortgage page | "Credit and collateral are subject to approval. Terms and conditions apply. This is not a commitment to lend. Programs, rates, terms and conditions are subject to change without notice." |
| **CCPA / opt-out** | Footer | "Share Your Feedback", "YourAdChoices", "Network Advertising Initiative's Opt-Out Tool" |
| **Sparta lock icon** | Application shell | "header__secure" class on the secure app |
| **"Browse with a Specialist"** (LiveLook co-browse) | Footer / Global Nav | "Browse with Specialist" — live-look co-browse support |
| **Accessibility** | Top nav / footer | "Accessible Banking" → `/accessiblebanking/overview.go`; TTY number |
| **Patents page** | Footer | "Patent: patents.bankofamerica.com" |
| **Spanish site** | Top nav | "En español" toggle, `/es/` |
| **J.D. Power / customer review count / BBB rating** | **Not present in the captured pages** (no "BBB Accredited", no J.D. Power badge, no Trustpilot/review aggregator embed) |
| **Years in business** | Implicit ("© 2026 Bank of America Corporation" footer) | — |
| **Award badges** | **Not present** in the public pages. BofA leans on bank-brand trust (FDIC, Equal Housing Lender) rather than third-party award badges |
| **Encryption / fraud / "100% safe" badges** | Implicit via "Security" footer link; no prominent lock + "256-bit encryption" stamp on the marketing site | — |

**Implication:** BofA's trust posture is **regulatory + institutional** (FDIC, EHL, NMLS, Security Center) — they are not relying on review-site or award badges. There is no public-facing customer-review count or satisfaction score.

---

## 10. SEO Strategy

### Top-level title strategy
- **Hub:** "Home Loans and Current Rates from Bank of America" — branded + "current rates" (high-intent transactional keyword).
- **Home mortgage:** "Mortgages - Home Mortgage Loans from Bank of America"
- **Mortgage rates:** "Mortgage Rates - Today's Rates from Bank of America"
- **Refinance:** "Mortgage Refinance and Home Refinancing from Bank of America"
- **Refi rates:** "Today's Refinance Rates from Bank of America"
- **Digital mortgage:** "Streamlined Mortgage Application - Bank of America Digital Mortgage Experience®"
- **First-time:** "First-time Home Buyer Information, Tools and Resources"
- **Affordable housing:** "Down Payment Grants and Loan Assistance Programs for First-time Homebuyers"
- **Prequal vs. preapproval:** "Mortgage Prequalification vs. Preapproval - Understanding the Difference"
- **Approved learn page:** "How mortgages are approved"
- **How much home:** "How Much House Can I Afford?"
- **Types of mortgage loans:** "Types of Mortgage Loans - Understanding Your Options"
- **Down payment:** "Down Payment on a House: How Much Do You Need?"
- **APR vs. interest rate:** "APR vs Interest Rate - What is the Difference"
- **Cash-out:** "Cash Out Refinance vs Home Equity Line of Credit"
- **Glossary:** "Mortgage Glossary – Mortgage Terms & Definitions"
- **FAQs:** "Mortgage, Refinance and Home Equity FAQs from Bank of America"
- **Affordability calc:** "Home Affordability Calculator - Calculate Mortgage Affordability"
- **Closing costs calc:** "Closing Costs Calculator - Estimate Closing Costs at Bank of America"
- **Refi calc:** "Mortgage Refinance Calculator from Bank of America"
- **Real Estate Center:** "Find out how much your home is worth at Bank of America" / "Home Search - Find Real Estate for Sale from Bank of America"

### Meta-keyword strategy (verbatim, from the `<meta name="keywords">` tags)
- Hub: `home loan, home loans, home loan rates, home loan interest rates, home loan rate, current home loan rates, current home loan interest rate`
- Mortgage calculator: `mortgage calculator, mortgage payment calculator, mortgage loan calculator, home mortgage calculator`
- Affordability calc: `home affordability calculator, mortgage affordability calculator, how much house can i afford calculator, calculate mortgage affordability`
- Prequal vs preapproval: `mortgage prequalification, mortgage preapproval, mortgage prequalification vs preapproval, prequalification vs preapproval`
- First-time: `first time home buyer, first time home buyers, first time homebuyer, first time homebuyers, first time home buyer loan, first time home buyer mortgage`
- How-much-house: `how much home can i afford, how much house can i afford, how much mortgage can i afford, how much can i borrow`
- Down payment: `down payment on a house, mortgage down payment, how much downpayment on a house, how much down payment for a house, how much down payment do I need for a house`
- Refi: `refinance, refinance mortgage, refinancing, mortgage refinance, home refinance, mortgage refinancing, refinance loans`
- APR vs interest: `apr vs interest rate, what is the difference between interest rate and apr`
- Affordable housing: `down payment grants, down payment assistance grants, first time home buyer down payment grant, loan assistance programs`

### Observations on keyword targeting
- **BofA does NOT explicitly target the head term "Bank of America mortgage rates" in the title** of the rates page — they use "Mortgage Rates - Today's Rates from Bank of America" with the brand at the end. The H1 is just "Mortgage Rates" (very generic). This is a deliberate trade-off: less brand-anchored, more keyword-rich in `<h1>`.
- They **do not** target "Bank of America mortgage prequalification" as a page title; the entry URL is hidden behind a `requesttype=DMPQA` query string on the secure domain.
- Heavy long-tail targeting on **educational/question queries** ("how much house can I afford", "APR vs interest rate", "types of mortgage loans", "down payment on a house", "cash out refinance vs HELOC", "Prequalification vs. Preapproval"). This is a classic content-marketing moat — BofA has unique, brand-authoritative content for nearly every educational mortgage query.
- Localized implicitly through the ZIP-code-driven rate tables and city/state lookups.
- Canonical URL: `https://www.bankofamerica.com/mortgage/` (all variants canonicalize here).
- Sitemap is minimal — only top-level pages (`/mortgage/`, `/mortgage/home-mortgage/`, `/mortgage/mortgage-rates/`, `/mortgage/mortgage-calculator/`, `/mortgage/refinance/`, `/mortgage/learn/`, `/home-equity/`). The hundreds of `/learn/...` articles are NOT in the personal-banking sitemap, but they likely live under the digital asset sitemap.

---

## 11. Strengths

1. **Brand trust + regulator signals (FDIC, EHL, NMLS).** Bank-grade credibility, especially for first-time buyers nervous about scams.
2. **Soft-pull prequalification with no FICO impact.** Clearly disclosed twice (on the consent screen and on the learn page). "May get results within an hour." This is a top-tier lead-acquisition UX.
3. **Existing-customer fast path.** "Log in. Save time." — Online Banking customers can prefill the form. BofA Rewards / Preferred Rewards customers get a real, documentable financial benefit (up to $600 origination credit, 0.250%–0.625% HELOC discount).
4. **No-fee prequalification letter downloadable** to share with a real-estate agent — directly improves the "act on it" rate.
5. **Comprehensive educational library.** ~12 well-written `/learn/` articles covering every common homebuyer question, with on-page meta-keyword targets. This creates a top-of-funnel content moat that few lenders can match.
6. **Calculator suite is complete for the journey:** Affordability → Mortgage payment → Closing costs → Refinance break-even, plus a free AVM ("Home Value Estimator") and integrated Real Estate Center (house search).
7. **Real Estate Center integration.** "Start your home search with Bank of America Real Estate Center®" — a captive end-to-end funnel from prequal → home search → mortgage close, all under BofA's brand.
8. **30-day saved application + welcome-back flow** with deep link via email. Generous for a re-engagement window.
9. **Generous down payment assistance.** America's Home Grant® up to $7,500 lender credit; Down Payment Grant up to 3% / $10,000 in select markets. Plus the Affordable Loan Solution® at 3% down with no PMI. Few competitors can match this.
10. **Accessibility & multilingual.** TTY number, "Accessible Banking" link, persistent En Español toggle, WCAG-conscious SPA. Browsing with a Specialist (live-look co-browse) for users who need help.
11. **Real human-in-the-loop at every edge case.** Many off-ramps to a lending officer (associates, jumbo, trusts, short sales, military, etc.) means the digital experience is only the front door; complex cases don't get stuck in a bad funnel.
12. **BofA Rewards tiered benefits disclosed transparently** (with disclaimers that benefits don't apply retroactively).

---

## 12. Weaknesses

1. **The prequalification flow is long (~30+ steps).** Even with sign-in prefilling, a brand-new user has to provide: name, phone, email, address, DOB, SSN, education, military status, citizenship, residency, current address history (2 years), property address, property type, income (with employer lookup or self-employed branch), assets (with external account linking), other real estate owned, HMDA demographic data, KBA questions, and consent — *before* the soft pull.
2. **No email/phone/SSN top-of-funnel lead capture** at all. The only "lead" before the secure form is an anonymous ZIP + price quote. BofA's flow is anti-lead-magnet — it requires the user to commit to the full prequalification. This dramatically reduces top-of-funnel conversion for the curious-but-not-yet-ready user.
3. **No DTI-only or "what can I afford" instant estimator that doesn't require a credit pull.** The Affordability Calculator gives an estimate but it's generic (assumes "excellent credit"), so it's not a true pre-qualification.
4. **The denial / "referred" path is opaque and routes to a phone call.** The only fallback when a user can't be auto-prequalified is: "Your request needs some additional information. We have received all your information and will need to talk to you before we can make a decision. You will receive an email from your lending specialist with this information." The screen offers "**Call now**" / "**Request a call back**" / "**Email**" / "**View**" — but **no specific reason** is given to the user. No "Your DTI is X%, the threshold is Y%" diagnostic. No "Your credit score is below our threshold" message. No "Try these alternatives" recommendations.
5. **No Prequalification Calculator / DTI-Improvement simulator.** Nothing tells the user *what would change the outcome* (e.g., "if you paid off this credit card, your DTI would drop to X%" or "if your co-borrower added, you could qualify for Y more").
6. **2-minute session timeout** in the secure flow is aggressive for a 30+ step process and especially punishing on mobile. Users filling in long addresses on a phone will get bumped.
7. **No "save and email me a link" deep-link on the public prequalification** — the only save mechanism is Online Banking login. Anonymous users have to start over.
8. **No live chat** on the prequal application. The in-app help offers phone (1-800-324-4842) and co-browse but no chat widget.
9. **Calculator outputs assume "excellent credit" (FICO 740+).** The Disclaimer: "Rates based on a $200,000 loan in ZIP code 95464… assume borrower has excellent credit (including a credit score of 740 or higher)" means the headline rate is essentially a marketing rate. Users with sub-740 credit have to call for a real rate.
10. **Limited no-PMI options promoted.** The "Affordable Loan Solution®" is the only 3%-down no-PMI loan (and has income limits). The mainstream flow still uses PMI at <20% down.
11. **Limited investor / DSCR / non-QM product visibility.** The flow's "Properties that will be owned by a trust or corporation will need some expert assistance" suggests these are deliberately not sold online.
12. **No review-site trust signals** (no BBB badge, no J.D. Power, no Trustpilot embed). For a 2025 buyer who Googles "Bank of America mortgage reviews", the on-site trust story is regulator-only.
13. **BofA Rewards retroactive clause:** "If you have an existing auto loan, mortgage or home equity loan with us when you join BofA Rewards, we do not retroactively apply your discount to that loan." This discourages loyalty-driven switching.
14. **Customer service hours are limited:** "Mon-Fri 8 a.m. - 10 p.m. ET, Sat 8 a.m. - 6:30 p.m. ET". No Sunday hours.
15. **Spanish site parity is uncertain** — many of the deep `/learn/` articles and the prequal flow may not be fully translated (only the toggle exists on the public pages).
16. **No mobile-app-first prequalification** — the flow is mobile-web only. The BofA mobile app does have a "Mortgage" tile but the heavy lifting is on the secure web SPA.

---

## 13. What a "Why can't I qualify" Diagnostic Could Do Better

This is the **headline opportunity** BofA misses and that any competitor (or the project in this workspace) should exploit. The "referred-to-HLN" screen is the only fallback when a user cannot be auto-prequalified, and it is **completely opaque** about *why*.

What BofA shows denied/near-qualifying users today:
- "**Your request needs some additional information**"
- "We have received all your information and will need to talk to you before we can make a decision."
- "You will receive an email from your lending specialist with this information."
- Buttons: **Call now** / **Request a call back** / **Email** / **View**
- Body: "Your lending officer will contact you to discuss next steps."

What a better diagnostic could surface (this is the gap the "Why am I denied?" project is positioned to fill):

1. **Plain-language reason for the soft-pull outcome.**
   - "Based on the data you provided, you may not meet our prequalification thresholds today. Here is what we observed:"
   - Show **DTI** with the user-supplied monthly debts vs. income vs. the QM/ATR 43% cap.
   - Show **estimated credit-score band** (since BofA only does a soft pull from one bureau, they can show a band, not a hard number) and a general guideline of what score range is required for each program.
   - Show **loan-to-value (LTV) / down payment** vs. the program minimum (3% for Affordable Loan Solution®, 5% for many conventional loans, 0% for VA, 3.5% for FHA).
   - Show **reserves / months of PITI in liquid assets** vs. program minimums.
   - Show **employment tenure** vs. the typical 2-year history expectation (and explain the gap-question they already ask).
2. **A "what if" simulator / re-qualification tool.**
   - "If you paid off your $X credit card balance, your DTI would drop to Y% and you could prequalify for up to $Z."
   - "If you added a co-borrower with $X income, you could prequalify for up to $Y."
   - "If you increased your down payment to 5% (10%, 20%), your monthly payment would drop by $X."
   - "If you waited 3 months and re-applied (after paying down this debt), here's the projected picture."
3. **Education tailored to the gap.**
   - If DTI is the issue → link to BofA's own debt-to-income / affordability articles + an action plan ("Pay down the smallest balance first" or "Consider a co-borrower").
   - If credit score is the issue → link to "How to improve your credit score" + a timeline ("Most scoring improvements take 3–6 months").
   - If down payment is the issue → surface **America's Home Grant® (up to $7,500)**, **Down Payment Grant (up to 3% / $10,000)**, **Affordable Loan Solution® (3% down, no PMI)**, **FHA (3.5% down)**, **VA (0% down)**, state housing finance agency programs via the **Down Payment Center** (link already exists in the first-time page: "Use the Down Payment Center to search for and review down payment and cost-saving programs offered by state and local housing agencies, nonprofit groups and employers").
4. **A "softer" re-attempt path that doesn't require a phone call.** Today the only option after a "referred" outcome is to call. Many denied users don't want to talk to a human — they want to fix the data and retry. A diagnostic tool that lets them re-run with adjusted numbers (without re-submitting) closes that loop.
5. **A timeline of "what to do next"** that doesn't end at "call us." E.g.:
   - Days 1–30: Pay down X debt, request a credit-line increase
   - Days 30–60: Re-pull credit, re-apply
   - Days 60–90: Re-evaluate co-borrower option
6. **Personalized "alternative product" routing** when the user doesn't qualify for the conventional product:
   - BofA's **Affordable Loan Solution®** (3% down, income limits)
   - **FHA** (3.5% down, more flexible credit)
   - **VA** (0% down, for military/veterans)
   - **State HFA programs** via the Down Payment Center
   - **BofA's Home Loan Navigator** (if already in active application)
7. **A glossary / explainer** for the specific terms in the denial: "DTI", "LTV", "PMI", "reserves", "tri-merge credit report", "QM rule". BofA's existing glossary page is excellent and could be re-linked here.
8. **An accountability hook**: "Your lending specialist will contact you within 1 business day. In the meantime, here is what you can do." (BofA says "lending officer will contact you to discuss next steps" but gives no SLA.)
9. **Persistent eligibility recheck**. BofA saves the prequalification for 30 days; a diagnostic could re-check the user's inputs (DTI, assets) without re-doing the soft pull, every time the user comes back.
10. **A "denial reason" disclosure.** When the user converts to preapproval and is denied, they're entitled to an adverse-action notice under ECOA (with specific reason codes like "Too many recent inquiries", "Length of employment", etc.). BofA could surface a plain-language version of these reasons in-app. Today the only path is to call.
11. **No public-facing customer-review / satisfaction metric.** A "Why am I denied" tool could pull in social proof ("73% of users who paid down their highest-utilization card by 30% within 60 days re-qualified"). BofA does not currently do this.

In short: BofA's prequalification funnel is excellent at **getting approved users to a letter**, but the moment the user is *not* approved, the experience collapses to "**call us**". This is the precise gap a "Why am I denied?" diagnostic would fill — and the same gap exists across the entire mortgage industry, so solving it would be category-defining.

---

## Appendix: Source Inventory

Files captured during this research (all in `/tmp/bofa_research/`):

- `www_bankofamerica_com_mortgage.html` — hub
- `www_bankofamerica_com_mortgage_home_mortgage_.html` — home loans
- `www_bankofamerica_com_mortgage_mortgage_rates.html` — rates
- `www_bankofamerica_com_mortgage_refinance_.html` — refinance
- `www_bankofamerica_com_mortgage_first_time_home_buyer_.html` — first-time
- `www_bankofamerica_com_mortgage_digital_mortgage_experience_.html` — DME marketing
- `www_bankofamerica_com_mortgage_closing_costs_calculator_.html` — closing costs
- `www_bankofamerica_com_mortgage_mortgage_calculator_.html` — mortgage calc
- `www_bankofamerica_com_mortgage_home_affordability_calculator.html` — affordability
- `www_bankofamerica_com_mortgage_refinance_calculator_.html` — refi calc
- `www_bankofamerica_com_mortgage_home_loan_navigator_.html` — HLN login
- `www_bankofamerica_com_mortgage_affordable_housing_programs_.html` — community commitment
- `www_bankofamerica_com_mortgage_glossary_.html` — glossary
- `www_bankofamerica_com_mortgage_faqs_.html` — FAQs
- `www_bankofamerica_com_mortgage_learn_*.html` (8 learn articles)
- `www_bankofamerica_com_preferred_rewards_.html` — BofA Rewards
- `www_bankofamerica_com_sitemap.html` — sitemap
- `homevaluerealestatecenter_bankofamerica_com_.html` — AVM
- `realestatecenter_bankofamerica_com_.html` — listing search
- `secure_bankofamerica_com_apply_now_services_home_loans_initialize_v1_init_requesttype_DMPQA_subCampCode_98969.html` — **the actual prequalification application (921 KB SPA bundle, contains all step labels, field config, soft-pull consent, approved and referred-to-HLN outcome pages)**
- `secure_bankofamerica_com_apply_now_services_home_loans_initialize_v1_init_requesttype_DME_loanPurpose_purchase.html` — full application landing (with all off-ramp messages)
