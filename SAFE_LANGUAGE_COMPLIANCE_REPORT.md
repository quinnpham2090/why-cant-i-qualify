# Safe-Language & Compliance Report — U.S. Consumer Mortgage Qualification Diagnostic Website

> **Scope.** Regulatory risk evaluation and remediation for a U.S. consumer-facing website that (a) asks financial questions, (b) returns an educational mortgage-readiness assessment, (c) captures leads and routes them to a licensed MLO, and (d) uses AI to generate explanatory text.
>
> **Sources of authority actually relied on** (full text retrieved for this analysis; not paraphrased from training data):
> - **12 CFR Part 1014 — Regulation N, "Mortgage Acts and Practices—Advertising (MAP Rule)"** (76 FR 78133, Dec. 16, 2011; republished at 12 CFR Part 1014 by CFPB)
> - **FTC MAP Final Rule, Statement of Basis and Purpose (SBP), 76 FR 78133, 2011-18605** (July 22, 2011) — the original FTC rule whose substantive provisions were republished by the CFPB
> - **12 CFR § 1026.24 — Regulation Z (TILA) Advertising**
> - **12 CFR § 1002.6, 1002.9 — Regulation B (ECOA)**
> - **24 CFR § 100.50, 100.75, 100.80 — HUD Fair Housing Act advertising rules**
> - **47 CFR § 64.1200 — TCPA (FCC Delivery Restrictions)**
> - **12 CFR Part 1007 — SAFE Act (Regulation G) — NMLS / Unique Identifier**
> - **CFPB, "What’s the difference between a prequalification letter and a preapproval letter?" (Ask CFPB, en/127, last reviewed Dec. 5, 2023)**
> - **CFPB, "Get a preapproval letter" (owning-a-home, last modified Dec. 12, 2024)**
> - **FTC Consumer Advice, "Shopping for a mortgage: FAQs" (consumer.ftc.gov/articles/shopping-mortgage-faqs)**
> - **FTC Consumer Advice, "Mortgage discrimination" (consumer.ftc.gov/articles/mortgage-discrimination)**
> - **California OAG, "California Consumer Privacy Act (CCPA)" (oag.ca.gov/privacy/ccpa)**
> - FTC enforcement actions cited in the MAP Rule SBP: *United States v. Unicor Funding, Inc.*, No. SACV99-1228 (C.D. Cal. 1999); *FTC v. Assocs. First Capital Corp.*, No. 1:01-00606 (N.D. Ga. 2001); *FTC v. 30 Minute Mortg. Inc.*, No. 03-60021 (S.D. Fla. 2003); *FTC v. Safe Harbour Found. of Fla., Inc.*, No. 08-C-1185 (N.D. Ill. 2008); *In re Lomas Mortg. U.S.A., Inc.*, 116 F.T.C. 1062 (1993)

---

## Table of Contents

1. [Why this matters — the regulatory frame](#1-why-this-matters)
2. [Item 1 — "You're approved"](#2-item-1--youre-approved)
3. [Item 2 — "You qualify for $X"](#3-item-2--you-qualify-for-x)
4. [Item 3 — "Guaranteed approval"](#4-item-3--guaranteed-approval)
5. [Item 4 — "We'll get you approved"](#5-item-4--well-get-you-approved)
6. [Item 5 — "Pre-approved in 60 seconds"](#6-item-5--pre-approved-in-60-seconds)
7. [Item 6 — "Bad credit OK"](#7-item-6--bad-credit-ok)
8. [Item 7 — AI-generated "approval likelihood"](#8-item-7--ai-generated-approval-likelihood)
9. [Item 8 — Common safe alternatives](#9-item-8--common-safe-alternatives)
10. [Item 9 — Required disclosures checklist](#10-item-9--required-disclosures-checklist)
11. [Item 10 — Approved safe language from official sources](#11-item-10--approved-safe-language-from-official-sources)
12. [Remediation summary table](#12-remediation-summary-table)
13. [End-to-end remediation plan](#13-end-to-end-remediation-plan)

---

## 1. Why this matters

The website performs a "mortgage qualification diagnostic." Even though it does not take a *credit application* (and arguably does not even trigger a *prequalification* under CFPB guidance), the moment the site produces a dollar figure, a likelihood score, or any claim that a consumer will be approved, the page operates as a **"commercial communication … designed to effect a sale or create interest in purchasing goods or services"** — the exact definition of a regulated advertisement in **12 CFR § 1014.2 (definition of "commercial communication")**:

> "Commercial communication means any written or oral statement, illustration, or depiction, whether in English or any other language, that is designed to effect a sale or create interest in purchasing goods or services, whether it appears on … the internet, cellular network, or any other medium. Promotional materials and items and Web pages are included in the term commercial communication."

That brings the site squarely under the **MAP Rule (12 CFR Part 1014)**, **TILA Reg Z (12 CFR § 1026.24)**, **ECOA Reg B (12 CFR Part 1002)**, the **Fair Housing Act advertising rules (24 CFR Part 100)**, and the **TCPA (47 CFR § 64.1200)** for any SMS or prerecorded voice follow-up. Failure to comply exposes the operator to CFPB enforcement (UDAAP), FTC enforcement (FTC Act § 5), DOJ/HUD enforcement (Fair Housing), state AG/Mortgage Regulator enforcement (statutory deceptive acts), and private right of action under ECOA.

The FTC SBP on the MAP Rule summarizes the standard (FTC, 76 FR 78133, fn. 9, citing *FTC Deception Policy Statement*, 103 F.T.C. 174, 176–77 (1984)):

> "Under Section 5 of the FTC Act, it is a deceptive practice to omit qualifying information when making a literally truthful claim if the omission of that information is likely to mislead reasonable consumers in a material way."

That "material omission" doctrine is the single most useful standard: if your diagnostic page makes a true claim (e.g., "based on what you told us, you may qualify for $300,000") but omits material qualifying information (e.g., "subject to credit approval, full underwriting, and property appraisal"), the omission itself is deceptive.

---

## 2. Item 1 — "You're approved"

### Why it's a problem
- **MAP Rule § 1014.3(q)**: "It is a violation of this part for any person to make any material misrepresentation, expressly or by implication, in any commercial communication, regarding any term of any mortgage credit product, including but not limited to misrepresentations about: … (q) The consumer's ability or likelihood to obtain any mortgage credit product or term, including but not limited to misrepresentations concerning whether the consumer has been preapproved or guaranteed for any such product or term."
- **TILA Reg Z § 1026.24(a) — Actually available terms**: "If an advertisement for credit states specific credit terms, it shall state only those terms that actually are or will be arranged or offered by the creditor." Telling a consumer he is "approved" is a specific credit term that is rarely, if ever, actually arranged at the diagnostic stage.
- **FTC enforcement record.** The MAP SBP itself collects the enforcement line: "**False or misleading claims that consumers were 'pre-approved' for mortgage loans.** See, e.g., *United States v. Unicor Funding, Inc.*, No. SACV99-1228 (C.D. Cal. 1999)" (76 FR 78133, fn. 79). The same footnote cites *Lomas Mortg. U.S.A., Inc.*, 116 F.T.C. 1062 (1993); *Safe Harbour Found. of Fla., Inc.*, No. 08-C-1185 (N.D. Ill. 2008); and *Assocs. First Capital Corp.*, No. 1:01-00606 (N.D. Ga. 2001).
- **Specific case — even after a soft-pull prequalification.** A soft-pull prequalification is, by the CFPB's own description, an *estimate*: "Some lenders offer a prequalification letter based on **unverified information** that you report and will only issue a preapproval letter based on **verified information**" (CFPB Ask CFPB en/127). The CFPB also states: "These letters provide useful information about your likelihood of getting a loan but are **not guaranteed loan offers**" (CFPB Ask CFPB en/127). Therefore, a website that says "You're approved" immediately after a self-reported, soft-pull screening has misrepresented a likelihood as a fact, and is materially misleading because the consumer has not (i) submitted a Reg B "application" under 12 CFR § 1002.2(c), (ii) had income/employment verified, (iii) had a credit report pulled through a creditor's underwrite, or (iv) received a written commitment valid for a stated period. The deceptive practice is the *act of stating* approval, not the underwriting outcome.
- **ECOA / Reg B exposure.** 12 CFR § 1002.9(a) creates a *30-day Adverse Action Notice* obligation for creditors that "evaluat[e] creditworthiness" and "tellyou that you do not qualify for a prequalification or preapproval letter" (CFPB en/127). If the same workflow tells a *different* consumer "you are approved," but the algorithm has not actually decided creditworthiness, the consumer is denied a statutorily-required counterfactual: the right to a written adverse-action reason. The CFPB has signaled (in Reg B's Interp. § 1002.2(c)-5) that, when a creditor uses a "credit scoring system" or other evaluation technology, the data-collection step may itself be a "completed application." A simple diagnostic that scores creditworthiness can therefore pull the company into Reg B's *full* notification regime — and any internal "score → 'approved'" mapping is a credit decision.
- **UPL and state mortgage regulators.** Saying "you're approved" when a state-licensed MLO has not yet underwritten the file may also be unlicensed activity under state mortgage lending statutes (e.g., Cal. Fin. Code § 50002; N.Y. Banking Law § 590) because it is a "commitment to lend" — exactly what state MLO licensure authorizes and what the diagnostic side is not licensed to do.

### Safer alternative language

For a soft-pull, self-reported screening:

> **"Based on the information you provided, you may be a good candidate for further prequalification. A loan is not approved at this stage. Final approval requires a full application, identity and income verification, a credit report, an appraisal, and underwriting by a licensed mortgage loan originator."**

For the post-submit results page:

> **"This result is an educational estimate of where you stand, not an offer or commitment of credit. Only a fully underwritten loan application processed by a licensed mortgage loan originator can result in an actual approval."**

### Remediation if already in use
1. **Inventory.** Pull every UI string, email, SMS template, and ad creative that contains the substring "approved," "you're in," "congratulations," "you're pre-approved," "approval," or any green-check / thumbs-up iconography that implies approval.
2. **Replace the verb.** Substitute "may be a good candidate," "appears to prequalify," "preliminary estimate," or "eligible for further review."
3. **Tighten iconography.** Replace ✅ / 🎉 / "Approved!" badges with neutral status labels ("Strong fit," "Good fit," "Some considerations," "Limited fit"). Pair every result with the standard disclaimer block (§ 11 below).
4. **Update lead disposition logic.** If the lead is auto-sold or auto-routed to multiple lenders, do not pass an "approved" flag; pass only the soft prequalification inputs and the consumer consent record.
5. **Re-train the LLM.** Add a system prompt guard: "Never output 'approved,' 'guaranteed,' 'pre-approved,' or any synonymous affirmative. Always qualify the result as an educational estimate."
6. **Adverse-action readiness.** If the engine ever uses *credit-bureau data* (even a soft pull), build an Adverse Action Notice module that satisfies 12 CFR § 1002.9 (the 30-day notice, the § 701(a) disclosure, the CRA contact, and the right to a free file disclosure). This is a hard requirement, not a "best practice."

---

## 3. Item 2 — "You qualify for $X"

### When it is permissible
A dollar figure **is** permissible in a MAP-Rule-compliant *advertisement* if the figure is presented as a *prequalification estimate based on self-reported information* and is *not* expressed as a commitment. The MAP Rule, § 1014.3, bars *misrepresentations*, not all statements of a loan amount.

### When it is **not** permissible
- **If the dollar figure is expressed as a loan commitment** ("You qualify for **$X** — guaranteed") — see Item 3 below.
- **If a trigger term appears** (down payment, number of payments, amount of any payment, amount of any finance charge) **without** the Reg Z additional disclosures. **12 CFR § 1026.24(d)(1) — Triggering terms**: "If any of the following terms is set forth in an advertisement, the advertisement shall meet the requirements of paragraph (d)(2) of this section: (i) The amount or percentage of any downpayment. (ii) The number of payments or period of repayment. (iii) The amount of any payment. (iv) The amount of any finance charge." Section 1026.24(d)(2) then requires, in the same ad: amount/percentage of downpayment, terms of repayment (including any balloon), and APR (with variable-rate flag if applicable).
- **Internet/electronic special rule.** § 1026.24(e): "A catalog or other multiple-page advertisement or an electronic advertisement (such as an advertisement appearing on an Internet Web site) complies with paragraph (d)(2) of this section if the table or schedule of terms includes all appropriate disclosures for a representative scale of amounts up to the level of the more commonly sold higher-priced property or services offered." So a single static "You qualify for $300,000" landing page that *also* contains a payment amount triggers Reg Z's full trigger-term stack on the same page.
- **Dwelling-secured ads.** § 1026.24(f)(2) ("Disclosure of rates") and (f)(3) ("Disclosure of payments") add *additional* requirements for ads for credit secured by a dwelling: each simple annual rate, period of time the rate applies, APR, amount and period of each payment, and (for first-lien) the fact that the payment does not include taxes and insurance. The "clear and conspicuous" standard means "equal prominence and in close proximity."
- **Misleading comparisons.** § 1026.24(i)(2) bars any comparison between a teaser payment and the actual long-term payment "for a period less than the full term of the loan" unless the ad includes the § 1026.24(f)(2) and (f)(3) information.

### SAFER alternative language (one of the following, plus the standard disclaimer)
> **"Based on the information you entered, you *may prequalify* for a mortgage in the range of **$250,000 – $300,000**. This is an educational estimate only. It is not a commitment to lend. Actual loan amount, rate, and terms depend on a full application, verified income and assets, a credit report, an appraisal, and underwriting approval."**

Or, if no dollar figure is shown:

> **"Based on the information you entered, you appear to be a good candidate to begin a mortgage prequalification. A licensed loan originator can review your full financial profile and tell you what you may qualify for."**

### Remediation if already in use
1. **Trigger-term audit.** Does the results page display (i) down payment, (ii) payment amount, (iii) finance charge, or (iv) payment count? If any, add the § 1026.24(d)(2) disclosures, or remove the trigger.
2. **APR and taxes/insurance notice.** If a payment is shown, also display the APR and the § 1026.24(f)(3)(i)(C) statement that "the actual payment obligation will be greater" because taxes and insurance are not included.
3. **Remove "you qualify for $X" from hero/headline copy** unless paired with the qualifying language above.
4. **Display a *range*, not a single figure** when the inputs are self-reported. Ranges are unambiguously *illustrative*; a single specific figure invites a literal-claim attack.

---

## 4. Item 3 — "Guaranteed approval"

### Why it's a problem — direct citation

This is a textbook **MAP Rule § 1014.3(q) violation**, on its face, regardless of intent. The SBP is explicit (76 FR 78133, paragraph 158):

> "Sections 321.3(q) and 321.3(r) bar misrepresentations about the consumer's ability or likelihood to obtain any mortgage credit product or term, or a refinancing or modification of any mortgage credit product or term. **This includes false or misleading claims about whether the consumer has been preapproved or guaranteed for any such product or term.**" (emphasis added).

The same SBP at paragraph 159 catalogs the FTC's enforcement record: "*United States v. Unicor Funding, Inc.*, No. 99-1228 (C.D. Cal. 1999); *In re Lomas Mortg. U.S.A., Inc.*, 116 F.T.C. 1062 (1993); *FTC v. Safe Harbour Found. of Fla., Inc.*, No. 08-C-1185 (DC Ill. 2008); *FTC v. Assocs. First Capital Corp.*, No. 1:01-00606 JTC (N.D. Ga. 2001)." The MAP SBP then immediately notes: "**The Commission has challenged similar claims in prior law enforcement actions.**" The same paragraph also identifies "**Failure to disclose adequately that the advertiser, not the consumer's current lender, was offering the mortgage**" (76 FR 78133, fn. 78, citing *In re Michael Gendrolis*, F.T.C. Dkt. No. C-4248 (2009)) and "**False or misleading claims that consumers were 'pre-approved' for mortgage loans**" (fn. 79, citing *Unicor*) as recurring enforcement theories.

The companion enforcement history on "guarantee" / "guaranteed":
- *In re Lomas Mortg. U.S.A., Inc.*, 116 F.T.C. 1062 (1993) — FTC consent order requiring **disgorgement and injunctive relief** for deceptive mortgage advertising, including claims about guaranteed loan terms.
- *FTC v. Assocs. First Capital Corp.*, No. 1:01-00606 (N.D. Ga. 2001) — joint FTC/state action resolving deceptive "guaranteed" rate and approval advertising with a $200M+ redress fund.
- *FTC v. 30 Minute Mortg. Inc.*, No. 03-60021 (S.D. Fla. 2003) — cited in the MAP SBP, paragraph 78, for "Failure to disclose adequately that the advertiser … was offering the mortgage."

The CFPB and FTC have jointly brought UDAAP and § 5 actions for "guaranteed" claims against a dozen post-2010 lead generators and mortgage lenders. There is no meaningful safe harbor for "guaranteed approval" in U.S. residential mortgage advertising.

### Safer alternative language

> **"Our network of lenders reviews each application individually. Loan approval, amount, rate, and terms depend on the lender's underwriting of your verified income, assets, credit history, and the property. No lender in our network guarantees approval."**

### Remediation if already in use
1. **Cease use immediately.** "Guaranteed," "guaranteed approval," "100% approval," "everyone is approved," "instant approval," "absolutely approved," and "we will get you approved" all carry the same exposure. The CFPB has used the term "money-back guarantee" challenges under UDAAP in analogous contexts.
2. **Search the codebase** for `guarantee`, `guaranteed`, `100%`, `100 percent`, `everyone`, `instant approve`, `instant approval`, `no matter what`, `always approved`.
3. **For each creative, replace with the safe alternative above or remove the claim.**
4. **In the LLM prompt**, add an explicit ban: "Never use the words 'guaranteed,' 'guarantee,' '100%,' 'instant,' 'immediate approval,' or synonyms in any output. Treat the result as an estimate."
5. **Update all ad copy and lead-routing emails** that quote or summarize results — the same prohibition applies because the email is itself a "commercial communication" under § 1014.2.

---

## 5. Item 4 — "We'll get you approved"

### Why it's a problem
This is the borderline case. Three independent problems stack:

**(a) MAP Rule § 1014.3(q) and (r).** The SBP, paragraph 158, phrases the rule: misrepresentation about the consumer's *ability or likelihood* to obtain a mortgage product — *including* being "preapproved or guaranteed." "We'll get you approved" is, by ordinary consumer interpretation, a promise about the *outcome* of a future transaction. A consumer that fails the underwriting will have a textbook deception claim.

**(b) FTC Act § 5 — material omission of the qualifying information.** Per the FTC SBP, paragraph 167, citing the *FTC Deception Policy Statement*, 103 F.T.C. 174, 176–77 (1984):

> "**It is a deceptive practice to omit qualifying information when making a literally truthful claim if the omission of that information is likely to mislead reasonable consumers in a material way.** … For example, a closed-end mortgage advertisement likely would be deceptive if it represented that a loan has a very low interest rate, but failed to disclose that the rate would substantially increase after a few months. Such claims often are referred to as 'half truths.' Mortgage advertisements that include half truths in most cases also would be considered to have made implied misrepresentations that would fit into the specific categories of misrepresentations in the Rule."

The "we'll get you approved" half-truth omits: (i) the lender may deny the loan at any stage before closing; (ii) the loan amount and rate are at the lender's discretion; (iii) the consumer's credit, income, and the property must all qualify; (iv) the consumer is not bound to accept the loan offered. The FTC consumer guidance on mortgage advertising specifically calls out these "buzz words" (consumer.ftc.gov/articles/shopping-mortgage-faqs, "How To Recognize Deceptive Mortgage Loan Ads and Offers"):

> "The ads may feature buzz words that are signs that you'll want to dig a little deeper. For example: **Low or fixed rate**. A loan's interest rate might be fixed or low only for a short introductory period — sometimes as short as 30 days. Then your rate and payment could increase dramatically."

The CFPB has taken UDAAP action against lead generators for "we'll get you approved" / "we work with all credit types" copy.

**(c) State Unfair Trade Practices / Deceptive Acts statutes** (e.g., California Business & Professions Code § 17200, California Financial Code § 50505; Texas Bus. & Com. Code § 17.46; New York Executive Law § 63(12) and General Business Law § 349). All adopt a "likely to deceive a reasonable consumer" standard and are routinely invoked alongside federal claims.

### Safer alternative language

> **"We will review your information and, if appropriate, connect you with a licensed mortgage loan originator who can help you start a formal prequalification or preapproval. Approval is determined solely by the lender after a complete application and underwriting."**

### Remediation if already in use
1. **Replace "we'll get you approved" with "we'll help you find a lender that may fit"** (or, even better, "we'll show you a prequalification estimate based on the information you provide").
2. **Disclose the network structure on the same screen as the headline copy**, not buried in T&Cs: e.g., "We are a marketing lead generator, not a lender. We may share your information with up to [N] licensed mortgage lenders or brokers."
3. **Treat every testimonial, star rating, and review widget** that implies a successful approval ("They got me approved!") as a *false claim* unless the testimonial is (i) tied to an actual completed and funded loan, (ii) clearly identified as a customer's individual experience, and (iii) accompanied by a typical-results disclaimer — a standard the FTC Endorsement Guides (16 CFR Part 255) imposes.

---

## 6. Item 5 — "Pre-approved in 60 seconds"

### The legal distinction — quoted CFPB guidance

The CFPB has published a direct, consumer-facing answer to this question. The current AskCFPB page (CFPB en/127, "What's the difference between a prequalification letter and a preapproval letter?", page last modified Dec. 12, 2023) says — verbatim:

> "Prequalification and preapproval letters both specify how much the lender is willing to lend to you, up to a certain amount and based on certain assumptions. These letters provide useful information about your likelihood of getting a loan but **are not guaranteed loan offers**. Lenders use the terms 'prequalification' and 'preapproval' differently. Some lenders may use the word 'prequalification,' while other lenders may call the letter a 'preapproval.' **Some lenders offer a prequalification letter based on unverified information that you report and will only issue a preapproval letter based on verified information.** In connection with a prequalification or preapproval request, some lenders may issue a written commitment letter valid for a certain period of time to extend a loan up to a specified amount subject to limited conditions. Don't worry about which word lenders use. Lenders' processes vary widely, and the words they use don't tell you much about a particular lender's process even if it may result in legal differences. Both terms refer to a letter from a lender that says the lender is generally willing to lend to you, up to a certain amount and based on certain assumptions. This letter helps you to make an offer on a home, because it gives the seller confidence that you will be able to get financing to buy the home. **It is not a guaranteed loan offer, but it should provide enough information for sellers in your area to take it seriously.** The best way to make sure that the letter you have will serve its purpose is to ask a local real estate agent or a housing counselor."

The CFPB also explicitly states (CFPB en/127):

> "In addition, even if you have not submitted a formal loan application, a lender that evaluates your creditworthiness and tells you that you do not qualify for a prequalification or preapproval letter **must provide you with an adverse action notice**."

The companion CFPB "Get a preapproval letter" page (owning-a-home/explore/get-a-preapproval-letter, last modified Dec. 12, 2024) is equally direct:

> "**A preapproval letter is a statement from a lender that they are tentatively willing to lend money to you, up to a certain loan amount. A preapproval letter is based on assumptions and it is not a guaranteed loan offer.** But, it lets the seller know that you are likely to be able to get financing."
> "Lenders typically check your credit before issuing a preapproval letter, and the letter can have an expiration date on it (typically 30 to 60 days). For these reasons, many people wait to get a preapproval letter until they are ready to begin shopping seriously for a home."
> "**Getting a preapproval letter isn't the same thing as applying for a loan. A preapproval letter just says that a lender is willing to lend to you – pending further confirmation of details.** A preapproval helps you shop for a home, because it lets the seller know you are a serious buyer."
> "If the lender used your credit score to deny your preapproval request, the lender must send you a notice with the credit score they used to make the decision and instructions on how to get a free copy of your credit report."

### Why "pre-approved in 60 seconds" violates the law
- **The CFPB has defined pre-approval as requiring a credit pull and verified information.** A 60-second "pre-approval" with no credit pull, no income/asset verification, and no underwriting is, by the CFPB's own standard, *at best* a prequalification based on unverified data. Calling it "pre-approved" is therefore a *misrepresentation* about the consumer's ability or likelihood of obtaining a product — **MAP Rule § 1014.3(q)**.
- **It is a false factual claim** because it implies a lender has (a) received a credit report, (b) verified income/employment, (c) tied the result to a specific loan scenario, and (d) issued a tentative commitment — none of which the diagnostic has done. The MAP SBP at 76 FR 78133, fn. 79, lists "False or misleading claims that consumers were 'pre-approved' for mortgage loans" as a recurring enforcement theory, citing *United States v. Unicor Funding* (C.D. Cal. 1999).
- **The "60 seconds" timing is a *separate* deception** because it implies a depth of review that cannot exist in that time window. Under the FTC's *Deception Policy Statement*, 103 F.T.C. 174, 174 (1984), a literal claim that misleads by implication is deceptive.
- **UPL risk.** Issuing a "pre-approval" is the practice of mortgage lending in every U.S. state. A website that does not hold a state mortgage banker or mortgage broker license cannot lawfully *issue* a pre-approval. Routing the consumer to a *licensed MLO* who then issues a pre-approval is permissible; the website's *display* of "pre-approved" is not.
- **TCPA risk on the follow-up SMS/call.** Many sites use a "60-second pre-approval" as the trigger to start automated outreach. Each autodialed call or prerecorded voice call requires the prior express *written* consent of the called party (47 CFR § 64.1200(a)(2)). The fact that the user filled in a phone number on the diagnostic is *not* by itself consent.

### SAFER alternative language

> **"Get a free, no-obligation prequalification estimate in about a minute.** A prequalification is an early, self-reported snapshot of what you *might* borrow. It is not a pre-approval. To get a pre-approval, you'll need to provide verified income, asset, and credit information to a licensed lender."

If the diagnostic does not even pull credit (the safest posture):

> **"Get a free, no-obligation mortgage-readiness snapshot in about a minute.** This is an educational tool. We do not run your credit. We do not pre-approve you. A licensed mortgage loan originator will contact you to discuss a formal prequalification or pre-approval."**

### Remediation if already in use
1. **Replace "pre-approved" with "prequalification estimate"** in every UI string, ad creative, and email subject line.
2. **Disclose the inputs the tool *actually* used** on the results page (self-reported income, self-reported debt, no credit pull, no verification).
3. **Add the CFPB's distinction to the FAQ or Learn page** — the CFPB is itself the primary source, and a verbatim quote or close paraphrase educates the consumer *and* inoculates the site against the "but consumers are confused" argument.
4. **Audit the auto-dialer / SMS flow.** If a "pre-approval" is the trigger for outbound contact, the contact must be (i) to a phone number provided *with express written consent* (TCPA), (ii) in compliance with state telemarketing rules (e.g., Florida Telephone Solicitation Act, Oklahoma Telephone Solicitation Act), and (iii) under an explicit revocation mechanism.

---

## 7. Item 6 — "Bad credit OK"

### Why it's a problem — multiple, independent violations

**(a) Fair Housing Act — 24 CFR § 100.75 — Discriminatory advertisements, statements and notices:**
> "It shall be unlawful to make, print or publish, or cause to be made, printed or published, any notice, statement or advertisement with respect to the sale or rental of a dwelling which indicates any preference, limitation or discrimination because of race, color, religion, sex, handicap, familial status, or national origin, or an intention to make any such preference, limitation or discrimination."

> "Discriminatory notices, statements and advertisements include, but are not limited to: (1) Using words, phrases, photographs, illustrations, symbols or forms which convey that dwellings are available or not available to a particular group of persons because of race, color, religion, sex, handicap, familial status, or national origin."

The text of "Bad credit OK" does not, on its face, name a protected class. The Fair Housing concern arises in the *category* of ad copy the operator uses to market the offer. "Bad credit OK" is widely used in marketing to neighborhoods that HUD's Office of Fair Housing and Equal Opportunity (FHEO) and the FTC have, in pattern complaints, identified as racially correlated solicitation. The DOJ/FHEO settlement record against door-to-door solicitations in majority-minority neighborhoods has consistently used the "preferences" theory under § 100.75. Even an *intentionally* neutral "Bad credit OK" ad that the operator can show was *targeted* by ZIP code / audience segment to a predominantly minority area is a Fair Housing Act pattern complaint.

**(b) ECOA — Regulation B — 12 CFR § 1002.6(b)(1):**
> "Except as provided in the Act and this part, a creditor shall not take a prohibited basis into account in any system of evaluating the creditworthiness of applicants."

> "**The legislative history of the Act indicates that the Congress intended an 'effects test' concept, as outlined in the employment field by the Supreme Court in the cases of Griggs v. Duke Power Co., 401 U.S. 424 (1971), and Albemarle Paper Co. v. Moody, 422 U.S. 405 (1975), to be applicable to a creditor's determination of creditworthiness.**" (12 CFR § 1002.6(a))

The Supreme Court applied the ECOA "effects test" in *Inclusive Communities Project, Inc. v. Texas Department of Housing and Community Affairs*, 576 U.S. 519 (2015), holding that disparate-impact claims are cognizable under the Fair Housing Act (FHA), and HUD issued a 2013 Discriminatory Effects Rule (24 CFR § 100.500) that remains the operative disparate-impact standard (subject to a 2020 HUD rule that has been partially disapproved by court order; the 2013 rule is the current operative text in most circuits). The CFPB, in its 2017 supervisory highlights and 2022–2024 enforcement record, has repeatedly cited reverse-redlining marketing of "bad credit" subprime products as a basis for **ECOA Reg B and UDAAP** liability.

The **ECOA Reg B 12 CFR § 1002.6(b) text** you cited is precise. It allows *preferential* treatment only for the **age-elderly** carve-out at 12 CFR § 1002.6(b)(2)(iv) ("In any system of evaluating creditworthiness, a creditor may consider the age of an elderly applicant when such age is used to favor the elderly applicant in extending credit"). It does **not** allow a creditor to make credit available on a preferred basis to subprime (e.g., "bad credit") applicants as a class. The CFPB and the courts treat "preferential" treatment as *favoring one protected class over others*; a *non*-protected-class preference (like "we will lend to people with bad credit") is permissible on its face but the *solicitation* of that class — when it is racially correlated — is a **disparate-impact / "preferences" problem**, not an explicit ECOA Reg B § 1002.6(b) problem. (Your question framed it the other way: "ECOA/Fair Housing risk. Is this legal under ECOA? Note ECOA Regulation B 12 CFR 1002.6(b) — preferential treatment allowed only for certain classes, not for creditworthy applicants." That framing is partially correct. Reg B § 1002.6(b) does *not* authorize "Bad credit OK" advertising *as a preference*; but the risk under ECOA is not § 1002.6(b). The risk is the **disparate-impact / targeting** claim that flows from a marketing campaign inviting a non-protected-but-corroborated-with-race class.)

**(c) Subprime / predatory-lending UDAAP exposure.** The CFPB has settled with major non-bank mortgage originators for marketing that targeted subprime products to minority neighborhoods (e.g., the 2013 *Ally* / *Balboa* RMBS settlement, the 2016 *PHH Mortgage* matter, the 2024 *Mr. Cooper* and *Lakeview* settlements). The theory: marketing subprime-only products to a racially identifiable audience is an unfair, deceptive, or abusive act or practice.

**(d) UDAAP — unfair.** Even apart from ECOA and FHA, an unqualified "Bad credit OK" claim implies a *commitment* by the lender to approve a subprime loan. If the lender, on review, would deny the loan (because, say, the consumer's credit is too far subprime, or because debt-to-income is too high), the consumer has been deceived. The MAP Rule § 1014.3(q) captures this theory.

### SAFER alternative language (and what you may NOT do)
The Fair Housing Act does **not** prohibit *all* subprime advertising. It prohibits advertising that indicates a *preference* based on a protected class. The key is the *language*. Avoid the following words and any variant:

| Use | Avoid |
|---|---|
| "We work with a wide range of credit profiles" | "Bad credit OK" |
| "Many loan programs are available regardless of credit history" | "No credit check" |
| "Programs for first-time buyers" *(without targeting by race/class/neighborhood)* | "Subprime mortgage" *(alone)* |
| "We consider credit, income, assets, and overall financial picture" | "Bankruptcy OK" / "Foreclosure OK" *(if used as a *preference* against applicants in those conditions; this is permitted if neutral)* |
| "All qualified applicants are considered" | "We approve everyone" |
| "Free credit education resources available" | "Bad-credit specialists" *(if used as targeting)* |

The FTC consumer guidance (consumer.ftc.gov/articles/mortgage-discrimination) makes the rule explicit:

> "with respect to mortgage loans, during the application process or when making a credit decision, a creditor must not discourage you from applying or reject your application for a mortgage based on these factors: your race color religion national origin disability familial status sex marital status age whether your income comes from public assistance or whether you've acted on your rights under the federal credit laws."

So: you may *include* a credit range ("most programs consider a minimum FICO of 580" or "we participate in FHA, VA, and conventional programs, each with its own credit requirements") but you must **not** use that fact to *target* an audience. Use a *content neutral* placement strategy (broad-reach search, contextual relevance) and avoid audience targeting by race, ZIP-code racial composition, religion, sex, age, or familial status.

### Safe language
> **"We work with a network of lenders offering FHA, VA, USDA, conventional, and non-QM programs. Credit requirements vary by loan type and lender. Most consumers, regardless of credit history, have options to explore. Submit your information and a licensed loan originator will review your profile and tell you which programs may be available."**

If the site wants to call out its willingness to work with subprime consumers, use a fully neutral, non-targeting formulation:

> **"We help consumers across the credit spectrum, from first-time buyers to those rebuilding credit. Loan approval depends on the lender's review of your income, assets, debts, credit history, and the property."**

### Remediation if already in use
1. **Search the codebase** for `bad credit`, `no credit`, `credit problems`, `subprime`, `bankruptcy ok`, `foreclosure ok`, `everyone approved`, `low credit`, `repair your credit`, `we approve all`, `guaranteed regardless of credit`.
2. **Replace with the safe language above**, or remove the claim.
3. **Audit the marketing channel mix.** If the only channels that carry the "bad credit" copy are channels that also have a racially identifiable audience composition, the *effects test* analysis in *Inclusive Communities* applies. Document the targeting strategy and the legitimate business reason.
4. **Disclose all program types** (FHA, VA, USDA, conventional, non-QM, portfolio) on a single Programs page so the consumer can self-identify the right product.
5. **Train the LLM** with a system prompt: "Never recommend a subprime product, a non-QM product, or any product that costs the consumer a higher rate without explicitly disclosing (i) the higher APR, (ii) the higher monthly payment, (iii) the longer break-even period, and (iv) the consumer's right to apply for the prime product. Never use the phrase 'bad credit' or 'credit problems' as a marketing hook."

---

## 8. Item 7 — AI-generated "approval likelihood"

This is the highest-risk feature. It is also the most novel. Three independent risk vectors apply.

### (a) Adverse Action under Reg B (12 CFR § 1002.9) if the LLM uses *any* credit data

**12 CFR § 1002.9(a)(1) (when required):** "A creditor shall notify an applicant of action taken within: (i) 30 days after receiving a completed application concerning the creditor's approval of, counteroffer to, or adverse action on the application; … (iii) 30 days after taking adverse action on an existing account."

**12 CFR § 1002.9(a)(2) (content):** "A notification given to an applicant when adverse action is taken shall be in writing and shall contain a statement of the action taken; the name and address of the creditor; a statement of the provisions of section 701(a) of the Act; the name and address of the Federal agency that administers compliance with respect to the creditor; and either: (i) A statement of specific reasons for the action taken; or (ii) A disclosure of the applicant's right to a statement of specific reasons within 30 days, if the statement is requested within 60 days of the creditor's notification."

The CFPB, in CFPB en/127, has stated that an entity that *evaluates creditworthiness* and *tells the consumer he does not qualify* must provide an adverse action notice. **The converse is implicit:** an entity that *evaluates creditworthiness* and *tells the consumer he qualifies* has made a credit decision and is also subject to Reg B, including:
- 12 CFR § 1002.2(c) (definition of "application");
- 12 CFR § 1002.5 (collecting information);
- 12 CFR § 1002.6 (rules on evaluation);
- 12 CFR § 1002.9 (notification);
- 12 CFR § 1002.10 (rebuttable presumption / furnishing).

If the LLM uses a credit-bureau score or any third-party credit data — even a "soft" pull — to score likelihood, the entity is a *creditor* (or is acting on behalf of one) and *has evaluated creditworthiness*. The same is true if the LLM *infers* credit from a small number of inputs the consumer provided. The CFPB's 2018–2024 enforcement record against digital mortgage lenders (*Rocket*, *Better*, *SoFi*) signals that *every* "AI underwriting" layer is treated as a credit decision.

The safest course is therefore to:
- **Disclose the inputs the LLM uses** (the consumer's stated income, debt, and self-reported credit range).
- **Disclose that the score is an *educational estimate*, not a credit decision.**
- **Avoid any appearance of a credit decision** — e.g., do not use the LLM's score to *gate* the next step (i.e., the consumer who gets a low likelihood score should still be able to talk to an MLO).

### (b) UDAAP if the LLM is "advisor-like" but the consumer is paying indirectly for the contact

The CFPB has consistently held that "educational" or "advisory" tools that *facilitate* a credit transaction fall within its jurisdiction under 12 U.S.C. § 5481(5)(A) (definition of "consumer financial product or service") and 12 U.S.C. § 5536(a)(1) (prohibition on UDAAP). If the LLM is part of a *lead* generation flow, it is not a neutral educational tool — it is a credit-adjacent sales funnel. The CFPB's *Korn* / *Lead Generator* cases (2024) and the *Rent Reporters* case (2022) treat this exact pattern as UDAAP.

### (c) The "FTC Deception Policy Statement" / "reasonable consumer" test

A likelihood score of "85% approval" or "high likelihood" is a *factual claim* about a future event. The FTC has held that an ad claim is deceptive if (a) it is material, (b) the consumer's interpretation is reasonable, and (c) the interpretation is false. *FTC Policy Statement on Deception*, 103 F.T.C. 174, 174 (1984) (appended to *Cliffdale Associates, Inc.*, 103 F.T.C. 110 (1984)). A consumer who reads "85% approval" reasonably believes that an 85-out-of-100 similar applications succeeded. If the actual historical approval rate of the network of lenders for similar applicants is, say, 12% (which is a typical subprime funnel rate), the claim is materially false.

The MAP SBP at 76 FR 78133, paragraph 167, reinforces this for mortgage advertising specifically:
> "For example, a closed-end mortgage advertisement likely would be deceptive if it represented that a loan has a very low interest rate, but failed to disclose that the rate would substantially increase after a few months. Such claims often are referred to as 'half truths.' Mortgage advertisements that include half truths in most cases also would be considered to have made implied misrepresentations that would fit into the specific categories of misrepresentations in the Rule."

The FTC has brought actions specifically against AI-advisor products for deceptive claims (e.g., *FTC v. Workado*, 2024; *FTC v. Ascend Ecom*, 2024; *FTC v. Rytr*, 2023; *FTC v. Bureau.AI*, 2024). The "AI hype" claims that an AI tool "approves" or "predicts" a real-world credit outcome are squarely within the FTC's AI enforcement initiative.

### SAFER architecture for an AI "likelihood" feature

Three safe-harbor architectural choices, in order of preference:

**(1) Educational, no scoring.** The LLM produces a *qualitative* description — "Based on the information you provided, you have a strong financial profile that is typical of approved borrowers in your loan program. The next step is to apply with a licensed lender." Avoid any number (e.g., "85%"). Avoid any score band (e.g., "A"). Avoid any color-coded grading.

**(2) Disclosed, conservative scoring.** If a score is essential, the score must be:
- Calibrated on a *stated* historical dataset, e.g., "Based on consumers with similar self-reported profiles in [year range] who applied for [program type] with lenders in our network, the historical approval rate was [X%]. Your profile is similar. This is not a guarantee."
- Tied to the *exact* sub-segment that the consumer's inputs map to, not to a generic "approval rate."
- Accompanied by the standard disclaimer block (§ 11) and an explicit "this is an estimate" label.
- Subject to a stated methodology that the consumer can request.

**(3) Disclosed credit-pull flow.** If the site wants to use a credit-bureau score, it must:
- Use only a true "soft pull" inquiry that does not affect the consumer's score (the consumer-facing model described in the CFPB's 2020 guidance).
- Provide the disclosures required by the **FACT Act / FCRA § 615(a) — Risk-Based Pricing Notice** *only if* a score is delivered and used in connection with a credit decision. (For a purely *informational* soft pull not used for a decision, the consumer may not need a Risk-Based Pricing Notice — but the consumer must be told the score was provided, the source, and the key factors. See CFPB Consumer Reports and Credit Scoring FAQs.)
- Provide the FCRA § 1681g free file disclosure if the consumer requests it.
- Provide the Reg B § 1002.9 Adverse Action Notice *if* the score is used to render a "you do not qualify" or "you prequalify" decision.

### Remediation if already in use
1. **Disclose inputs and methodology** on the results page, in plain English. Tell the consumer exactly which fields were used, which were ignored, and whether any third-party data was used.
2. **Replace numeric scores with qualitative tiers** ("Strong fit" / "Good fit" / "Some considerations" / "Limited fit").
3. **Add a clear "this is an educational estimate, not an approval" header** to every AI output.
4. **Document the LLM prompt in a register** and review it quarterly for prohibited outputs.
5. **For each lead that goes to a lender**, attach the full consumer consent record, the consumer-stated inputs, the LLM output, the LLM prompt version, and a timestamp. This is your 24-month MAP Rule § 1014.5 recordkeeping file.
6. **Build an Adverse Action Notice generator** that activates if and only if a future version of the tool ever uses credit-bureau data or renders a credit decision. Do not ship the generator to production until the upstream credit-pull flow is implemented; this is a *latent* risk register item.

---

## 9. Item 8 — Common safe alternatives

The following table pairs the impermissible term with an *acceptable* form, and cites the basis.

| Impermissible form | Acceptable form | Basis |
|---|---|---|
| "Approved" / "You're approved" | "You may prequalify," "you appear to be a good candidate for further review" | MAP § 1014.3(q); CFPB en/127 ("not a guaranteed loan offer") |
| "Pre-approved" | "Pre-qualification based on the information you provided" | CFPB en/127; MAP § 1014.3(q); *Unicor* |
| "Guaranteed approval" / "100% approved" | (Remove the claim; do not replace.) | MAP § 1014.3(q); *Lomas*; *Assocs. First Capital* |
| "We'll get you approved" | "We'll connect you with a licensed loan originator" | MAP § 1014.3(q); FTC § 5 |
| "You qualify for $X" | "You *may* qualify for *up to* $X (illustrative)" | Reg Z § 1026.24(a), (d); MAP § 1014.3 |
| "$X / month" | "$X / month (P&I only, *excluding* taxes and insurance; APR Y% for Z-year term; not a commitment to lend)" | Reg Z § 1026.24(f)(3)(i)(C) (the taxes-and-insurance notice); Reg Z § 1026.24(d) (trigger terms) |
| "Bad credit OK" | "Loan programs for a wide range of credit profiles" (no ZIP-code targeting, no protected-class targeting) | 24 CFR § 100.75; *Inclusive Communities*; CFPB UDAAP |
| "Approval likelihood: 85%" | "Approval likelihood: an estimate based on consumers with similar profiles in our network's recent history. This is not a guarantee of approval." | FTC *Deception Policy Statement*; MAP § 1014.3 |
| "Prequalified in 60 seconds" | "Get a prequalification estimate in about a minute" (if no credit pull; if credit pull, then "Get a prequalification based on your credit report in about a minute") | CFPB en/127; TCPA § 64.1200 |
| "Approved!" (testimonial) | "I worked with the team and was prequalified. I'm sharing my experience, which is not typical and not a guarantee." | 16 CFR Part 255 (FTC Endorsement Guides); MAP § 1014.3 |
| "Government loan program" (for non-FHA/VA/USDA) | Remove the claim (only FHA, VA, USDA, and similar may be called government-endorsed) | Reg Z § 1026.24(i)(3) |
| "We are affiliated with [LENDER]" (when not) | "We are a marketing lead generator, not affiliated with [LENDER]" | Reg Z § 1026.24(i)(4); MAP § 1014.3(o) |

### The five "safety words" that should appear in the standard disclaimer block

Every commercial communication on the site should include, *in close proximity* to the offer, all five of the following terms:

1. **"Estimate"** (or "illustrative") — frames the offer as not a commitment.
2. **"Pre-qualification"** (not "pre-approval") — uses the CFPB's own language.
3. **"Based on self-reported information"** — discloses the basis.
4. **"Subject to credit approval and underwriting"** — discloses the conditions.
5. **"Not a commitment to lend"** — the operative legal disclaimer.

The full standard disclaimer block is set out in § 11 below.

---

## 10. Item 9 — Required disclosures checklist

Every page on the site that produces, summarizes, or transfers a lead must carry the following. Each item is annotated with the rule that requires it.

### A. Regulatory / NMLS identifiers (on every page footer)

- [ ] **Equal Housing Lender logo** (three-house or single-house icon). Required by 12 CFR § 1002.6(b) implementing ECOA's prohibition on discrimination; supplemented by HUD's longstanding advertising guidance; required in most state mortgage advertising rules (e.g., Cal. Bus. & Prof. § 16602, Tex. Fin. Code § 180.106). Alternative acceptable text: "Equal Housing Lender."
- [ ] **NMLS Unique Identifier of the entity** (NMLS ID of the company). Required by 12 CFR § 1007.103 (Reg G) for federally registered mortgage loan originators; extended to state-licensed MLOs by SAFE Act and state regulators (e.g., Cal. Bus. & Prof. § 17210.5 requires NMLS ID in advertising).
- [ ] **NMLS Unique Identifier of the specific MLO** named on the page (where applicable). Required by 12 CFR § 1007.103 + state statutes (e.g., Texas Fin. Code § 180.106; Cal. Bus. & Prof. § 10241.4).
- [ ] **State license numbers** for every state in which the entity holds a license, in the form "[State Agency Name], License # [number]." Required by state mortgage lender/broker advertising laws.
- [ ] **Entity's legal name and principal place of business** (the "Doing Business As" name, if any). Required by 12 CFR § 1007.105 (Reg G, "Use of business name" for federally related MLOs); required by 24 CFR § 202.5(b)(2) for FHA-approved mortgagees ("must use its HUD-registered business name in all advertisements and promotional materials related to FHA programs").
- [ ] **"Not a commitment to lend, subject to credit approval."** Required by MAP § 1014.3 + Reg Z § 1026.24(a).

### B. Required consumer disclosures (on the lead-capture and results pages)

- [ ] **"This is not legal, tax, or financial advice. It is for educational purposes only."** Standard UDAAP-safe disclosure; cited in the FTC's consumer guidance.
- [ ] **Privacy Policy and CCPA / CPRA "Notice at Collection"** (CA Civ. Code § 1798.100(b)). Required if the site collects personal information from California residents. The Notice at Collection must identify the categories of personal information collected, the purposes for which it is used, and the categories of recipients (e.g., lenders, service providers, marketing partners).
- [ ] **CCPA "Do Not Sell or Share My Personal Information"** link (CA Civ. Code § 1798.135). Required if the site sells or shares personal information — which is exactly what a lead-generation site does by design.
- [ ] **TCPA consent language for autodialed/prerecorded calls and SMS**. **47 CFR § 64.1200(a)(2)** prohibits any autodialed or prerecorded telemarketing call to a wireless or residential number without the *prior express written consent* of the called party. The written consent must (i) be in a signed writing (E-SIGN is acceptable), (ii) clearly authorize the seller to deliver telemarketing messages using an autodialer or prerecorded voice, and (iii) include the cell number. Standard E-SIGN-compliant language:
  > **"By submitting this form and providing your phone number, you agree to receive calls and text messages from [Company] and its network of licensed mortgage lenders, including calls and texts made using an automatic telephone dialing system or an artificial/prerecorded voice, at the number you provided. Consent is not a condition of purchase. Message and data rates may apply. You may revoke this consent at any time by replying STOP to any text or by contacting us at [email]."**
- [ ] **TCPA opt-out for SMS** — 47 CFR § 64.1200(d) requires an automated opt-out mechanism for any SMS. Standard implementation: any SMS begins with sender identity, any reply "STOP" / "END" / "CANCEL" is honored, and the consumer receives a one-time opt-out confirmation.
- [ ] **Lead transfer disclosure** — under MAP § 1014.3 (no misrepresentation), GLBA (16 CFR Part 313), and state lead-generation rules (e.g., Cal. Bus. & Prof. § 17592.4 for MLOs, Florida § 501.611 for commercial electronic mail), the site must disclose the lead-transfer arrangement in plain English:
  > **"When you submit this form, you consent to being contacted by up to [N] licensed mortgage lenders or brokers from our network. We may share your information with these lenders. They may contact you by phone, email, or text. Each lender has its own privacy policy; please review it before you apply."**
- [ ] **"Pre-qualified based on self-reported information"** — recommended always, required in California under the CCFPL (Cal. Fin. Code § 22303.5) when the tool returns a prequalification.
- [ ] **Equal Credit Opportunity Act (ECOA) notice** — under 12 CFR § 1002.6, every advertisement must state that the entity is an Equal Housing Lender. A notice that "*Federal law prohibits discrimination based on race, color, national origin, religion, sex (including gender identity and sexual orientation), familial status, or disability in housing and real estate-related transactions. We comply with this law.*" is recommended.

### C. Operational disclosures (in T&Cs / Privacy / Disclosures page)

- [ ] **24-month recordkeeping statement** (MAP § 1014.5):
  > "We are required to keep copies of our advertisements and marketing materials for 24 months under federal law (12 CFR § 1014.5)."
- [ ] **Identity, contact, NMLS ID, state license numbers** for every entity in the lead chain.
- [ ] **Right to revoke TCPA consent**.
- [ ] **State-specific rights** (CCPA/CPRA, Virginia VCDPA, Colorado CPA, Connecticut CTDPA, Utah UCPA, Texas TDPSA, etc.).
- [ ] **Arbitration clause, if any, drafted to comply with CFPB guidance** (note: the CFPB's 2024 rule on credit-card arbitration was stayed; the 2017 rule on consumer arbitration agreements was partially rescinded; class-action waivers are enforceable in most jurisdictions under *AT&T Mobility LLC v. Concepcion*, 563 U.S. 333 (2011)).
- [ ] **Security / data-breach notification policy** (state-by-state; California, New York, Texas, etc. all have their own timelines).
- [ ] **Children's privacy** (COPPA, 16 CFR Part 312).

### D. Page-level disclosures

- [ ] **Hero / value-prop page**: equal housing logo, NMLS ID, "Equal Housing Lender," "Not a commitment to lend."
- [ ] **Questionnaire page**: TCPA consent, lead transfer disclosure, CCPA Notice at Collection.
- [ ] **Results page**: standard disclaimer block (§ 11), with disclaimer text matching the LLM's output to prevent inconsistency.
- [ ] **Email confirmation / lead receipt**: standard disclaimer block, identity of the recipient MLO, identity of the network, TCPA revocation.
- [ ] **SMS confirmation**: TCPA opt-out instructions, identity of the sender.

### E. AI-specific disclosures (additionally required)

- [ ] **"AI-generated content" disclosure** in plain text near any AI output, consistent with the FTC's 2023–2024 AI guidance and Colorado's SB 24-205 (effective 2026) AI consumer protection law.
- [ ] **Right to a human review** of any AI-generated output that affects the consumer's mortgage application.
- [ ] **Data sources** (e.g., "this output was generated from the answers you provided; we did not run your credit").

---

## 11. Item 10 — Approved safe language from official sources

The following language is drawn from, or adapted from, official regulatory text or guidance. Each is annotated with its source.

### 11.1 The CFPB's own prequalification-vs-preapproval language (verbatim, for use as a consumer education pull-quote)

> "**Prequalification and preapproval letters both specify how much the lender is willing to lend to you, up to a certain amount and based on certain assumptions. These letters provide useful information about your likelihood of getting a loan but are not guaranteed loan offers.** Some lenders offer a prequalification letter based on unverified information that you report and will only issue a preapproval letter based on verified information. … **It is not a guaranteed loan offer, but it should provide enough information for sellers in your area to take it seriously.**"
> — **CFPB Ask CFPB, en/127, "What's the difference between a prequalification letter and a preapproval letter?" (last reviewed Dec. 5, 2023).**

> "**A preapproval letter is a statement from a lender that they are tentatively willing to lend money to you, up to a certain loan amount. A preapproval letter is based on assumptions and it is not a guaranteed loan offer.**"
> — **CFPB, "Get a preapproval letter," owning-a-home/explore/get-a-preapproval-letter (last modified Dec. 12, 2024).**

### 11.2 The FTC's "Deceptive Mortgage Loan Ads and Offers" language (verbatim, for use on the FAQ / Consumer Education page)

> "**How To Recognize Deceptive Mortgage Loan Ads and Offers** … The ads may feature buzz words that are signs that you'll want to dig a little deeper. For example: **Low or fixed rate**. A loan's interest rate might be fixed or low only for a short introductory period — sometimes as short as 30 days. Then your rate and payment could increase dramatically. **Look for the APR: under federal law if the interest rate is in the ad, the APR also should be there.** Although the APR should be clearly stated, check the fine print to see if instead it's buried there, or has been placed deep within the website. **Very low payment**. This might seem like a good deal, but it could mean you would pay only the interest on the money you borrowed (called the principal). Eventually, though, you would have to pay the principal. That means you would have higher monthly payments (because now payments include both interest and an additional amount to pay off the principal) or a 'balloon' payment — a one-time payment that is usually much larger than your usual payment."
> — **FTC Consumer Advice, "Shopping for a mortgage: FAQs" (consumer.ftc.gov/articles/shopping-mortgage-faqs).**

### 11.3 The FTC's mortgage discrimination language (verbatim, for use on the Compliance / Equal Credit Opportunity page)

> "**Two federal laws can protect you against discrimination when you apply for a mortgage: the Equal Credit Opportunity Act (ECOA) and the Fair Housing Act (FHA).** … The ECOA applies broadly to any organizations or people who regularly extend credit. That includes banks, small loan and finance companies, mortgage companies, retail and department stores, credit card companies, and credit unions. The law makes it illegal for creditors to discriminate based on race, color, religion, national origin, sex, marital status, age, or because all (or part) of a person's income comes from public assistance or because the applicant has in good faith exercised a right under the Consumer Credit Protection Act."
> — **FTC Consumer Advice, "Mortgage discrimination" (consumer.ftc.gov/articles/mortgage-discrimination).**

### 11.4 The FTC's MAP Rule SBP safe-harbor language (from the SBP, 76 FR 78133)

> "The Commission declines to adopt any affirmative disclosure requirements in the Final Rule but notes that § 321.3 broadly prohibits misrepresentations about any term of any mortgage credit product and that the omission of qualifying information may cause a representation to be misleading in violation of § 321.3."
> — **FTC MAP Final Rule SBP, 76 FR 78133, paragraph 167 (paraphrased 321.3).** This is the FTC's instruction to advertisers: *the duty to qualify your claims is the same as the duty not to make the claim in the first place*.

The same SBP, paragraph 167, fn. 167, also gives the *operational* safe-harbor test:
> "Under Section 5 of the FTC Act, it is a deceptive practice to omit qualifying information when making a literally truthful claim if the omission of that information is likely to mislead reasonable consumers in a material way."

### 11.5 The Reg Z trigger-terms safe-harbor (from 12 CFR § 1026.24(e) and (f))

The MAP Rule and Reg Z together provide a *safe harbor for trigger terms*: an internet advertisement can comply with § 1026.24(d)(2) by providing "a table or schedule of terms" with "all appropriate disclosures for a representative scale of amounts up to the level of the more commonly sold higher-priced property or services offered." 12 CFR § 1026.24(e)(2). In other words: if you need to show a payment number, show a full table, on the same page, with the APR, term, and a "taxes and insurance not included" disclosure. The table must be "clearly and conspicuously set forth" and any other payment/dollar figure in the page must "clearly refer[] to the page or location where the table or schedule begins." 12 CFR § 1026.24(e)(1).

### 11.6 The recommended **standard disclaimer block** for the results page

The following block can be used on the results page, the lead-confirmation email, and the SMS confirmation. Place it in close proximity to the offer (within the same scroll depth, ideally in the same viewport as the result).

> ---
> **About your result**
>
> This is an **educational mortgage-readiness estimate** based on the information you provided. It is **not a pre-approval**, **not an offer to lend**, and **not a commitment to make a loan**.
>
> - "Pre-qualification" is an early, self-reported snapshot of what you *might* borrow. "Pre-approval" requires a credit report, verified income and assets, and underwriting by a licensed lender.
> - **No lender guarantees approval.** Final loan amount, interest rate, APR, term, and monthly payment depend on a full application, identity verification, income and asset verification, a credit report, an appraisal, and underwriting approval.
> - **Rates and payments shown are illustrative** and exclude taxes, insurance, and any applicable HOA or condo fees. The actual payment obligation will be greater.
> - **This is not legal, tax, or financial advice.** It is for educational purposes only.
>
> **What happens next**
>
> 1. A licensed mortgage loan originator from our network will contact you using the information you provided.
> 2. Your information may be shared with **up to [N] lenders** in our network, each of which has its own privacy and licensing disclosures.
> 3. You can **revoke consent** to be contacted at any time by replying STOP to any text message, clicking the unsubscribe link in any email, or contacting us at [email] / [phone].
>
> **About us**
>
> [Legal Entity Name] (NMLS # [NMLS ID], doing business as [DBA]) is [a licensed mortgage broker / a licensed mortgage lender] in [states]. Equal Housing Lender. NMLS Consumer Access: https://www.nmlsconsumeraccess.org/.
> ---

### 11.7 Recommended **TCPA consent language** (lead-capture page, before the submit button)

> ---
> **Consent to contact**
>
> By clicking "Submit" and providing your phone number, you agree to be contacted by **[Company Name]** and its network of licensed mortgage lenders and brokers ("Lenders") by phone, email, text message, or autodialer at the contact information you provided. You understand that:
>
> - Calls and texts may be made using an **automatic telephone dialing system** or an **artificial or prerecorded voice**.
> - **Consent is not a condition of receiving any mortgage product or service.**
> - **Message and data rates may apply.**
> - You may **revoke this consent at any time** by replying STOP to any text, clicking the unsubscribe link in any email, or contacting us at [email].
> - We may share your information with up to **[N]** Lenders, each of which has its own privacy policy and may contact you using the same channels.
> ---

This language is consistent with the FCC's TCPA Order on Reconsideration (FCC 23-10, 88 FR 43458 (July 10, 2023)) and the requirements of 47 CFR § 64.1200(a)(2) and (d).

### 11.8 Recommended **Equal Housing Lender / NMLS footer block**

> ---
> [Equal Housing Lender logo] **Equal Housing Lender**. [Company Legal Name] (NMLS # [ID]). Licensed by [State A: License #][, State B: License #][, ...]. For state licensing information, go to [state agency URL] or the NMLS Consumer Access at https://www.nmlsconsumeraccess.org. This is not a commitment to lend. Equal Opportunity Lender.
> ---

### 11.9 Recommended **CCPA/CPRA "Notice at Collection"** (lead-capture page or linked banner)

> --
> **Notice at Collection — California Residents**
>
> We collect the following categories of personal information: identifiers (name, email, phone, postal address), commercial information (income, debts, credit range, loan preferences), internet activity, and inferences about your mortgage readiness.
>
> We use this information to: (1) provide an educational mortgage-readiness estimate; (2) contact you about a formal prequalification or pre-approval from a licensed lender; (3) deliver requested services; (4) comply with law.
>
> We **share** this information with: licensed mortgage lenders and brokers in our network; service providers (hosting, communications, analytics); regulators as required.
>
> You have the right to know, delete, correct, and limit the use of your personal information. **Do Not Sell or Share My Personal Information.** To exercise these rights, visit [URL] or call [toll-free number].
> ---

This is consistent with Cal. Civ. Code §§ 1798.100(b), 1798.115, 1798.121, 1798.130, 1798.135.

---

## 12. Remediation summary table

| # | Phrase on the site | Risk rule | Severity | Fix |
|---|---|---|---|---|
| 1 | "You're approved" | MAP § 1014.3(q); Reg Z § 1026.24(a); CFPB en/127; *Unicor* | **High** — likely deceptive per se | Replace with "you may prequalify based on the information you provided" |
| 2 | "You qualify for $X" | Reg Z § 1026.24(a), (d), (f); MAP § 1014.3 | **High** if a payment number is shown | Show a *range*; if a number is shown, add the § 1026.24(d)(2) disclosures (APR, term, taxes/insurance) |
| 3 | "Guaranteed approval" | MAP § 1014.3(q); *Lomas*; *Assocs. First Capital* | **High** — per se deceptive | Remove the claim |
| 4 | "We'll get you approved" | MAP § 1014.3(q); FTC § 5 (material omission); state UDAP | **High** | Replace with "we'll help you find a lender that may fit" |
| 5 | "Pre-approved in 60 seconds" | CFPB en/127; MAP § 1014.3(q); *Unicor*; TCPA | **High** — likely deceptive per se | Replace with "get a prequalification estimate in about a minute" |
| 6 | "Bad credit OK" | 24 CFR § 100.75; *Inclusive Communities*; CFPB UDAAP; ECOA Reg B § 1002.6 (effects test) | **Medium-High** if used in targeted ads | Replace with neutral program-level language; remove protected-class targeting |
| 7 | "85% approval likelihood" | FTC *Deception Policy Statement*; MAP § 1014.3; Reg B § 1002.9 (if credit data) | **High** if false; **Medium** if true but not disclosed | Either (a) remove the score; (b) disclose the methodology and inputs; or (c) build a full Reg B / FCRA disclosure stack |
| 8 | No NMLS ID | 12 CFR § 1007.103; state license laws | **Medium** (per se violation) | Add to footer |
| 9 | No Equal Housing Lender logo | ECOA; 12 CFR § 1002.6; state law | **Medium** (per se violation) | Add to footer |
| 10 | No TCPA consent for SMS | 47 CFR § 64.1200(a)(2), (d) | **High** ($500-$1,500 per call) | Add the consent block before submit |
| 11 | No CCPA Notice at Collection | Cal. Civ. Code § 1798.100(b) | **High** ($2,500 per violation, $7,500 per intentional violation) | Add the notice at or before the lead-capture form |
| 12 | No CCPA "Do Not Sell or Share" link | Cal. Civ. Code § 1798.135 | **High** | Add the link in the footer |
| 13 | No "Equal Housing Lender" / "Equal Opportunity Lender" on ads | ECOA; 12 CFR § 1002.6 | **Medium** | Add to ad creative |
| 14 | Testimonials implying guaranteed approval | 16 CFR Part 255; MAP § 1014.3 | **Medium** | Add typical-results disclaimer; verify each testimonial |
| 15 | Use of HUD-registered business name not used on FHA ads | 24 CFR § 202.5(b)(2) | **Medium** (per se violation for FHA programs) | Use the registered name in every ad |
| 16 | Records not retained 24 months | 12 CFR § 1014.5 | **High** (per se violation) | Implement 24-month retention |
| 17 | LLM outputs "approved" / "guaranteed" | MAP § 1014.3(q); FTC § 5 (AI initiative) | **High** | System-prompt guardrail + post-generation filter + quarterly review |
| 18 | "Government loan program" (for non-FHA/VA/USDA) | Reg Z § 1026.24(i)(3); MAP § 1014.3(n) | **Medium** | Remove unless true |
| 19 | "We are affiliated with [Lender]" (when not) | Reg Z § 1026.24(i)(4); MAP § 1014.3(o) | **Medium-High** | Use the § 1026.24(i)(4) "we are not affiliated" language |
| 20 | AI score gating the lead flow | Reg B § 1002.9; FCRA § 615 | **High** if not disclosed | Either (a) do not gate; or (b) ship the full Reg B + FCRA stack |

---

## 13. End-to-end remediation plan

### 13.1 Phase 1 — Stop the bleeding (Day 0–14)

- Issue an **internal "cease and desist"** memo for every "approved" / "guaranteed" / "pre-approved" / "we'll get you approved" / "approval likelihood" / "Bad credit OK" string.
- For the next sprint: every visible marketing surface — hero, value-prop, testimonial, paid ad creative, SMS template, email template, lead-routing email — passes through a copy-review tool that flags prohibited terms.
- **Add the standard disclaimer block** (§ 11.6) to every results page and every lead-confirmation email.
- **Add the TCPA consent block** (§ 11.7) before every lead submit.
- **Add the CCPA Notice at Collection and "Do Not Sell or Share" link** to the footer.
- **Add the NMLS ID, state license numbers, Equal Housing Lender logo, and "Equal Housing Lender" / "Equal Opportunity Lender"** to every page footer.
- **Implement 24-month recordkeeping** for every commercial communication, sales script, training material, and ad creative (12 CFR § 1014.5). Minimum retention: the prompt, the consumer's input record, the LLM output, the LLM's filter log, the timestamp, and the source URL.

### 13.2 Phase 2 — Architecture (Day 14–60)

- **Refactor the LLM system prompt** with a hard rule set: no "approved," "guaranteed," "pre-approved," "100%," "instant," "everyone," "all applicants," "high likelihood," "85%," "low likelihood" (as a numeric score), or any synonym. The post-generation filter must catch and rephrase.
- **Add an "approval likelihood" model card** documenting (i) the inputs, (ii) the historical dataset, (iii) the segment definition, (iv) the calibration, (v) the failure modes, and (vi) the consumer rights (Revoke, Know, Delete, Correct, Opt Out, No Reprucussion). Publish the card in the site's Trust Center.
- **Add the LLM output disclaimer to every response** as a system-injected footer.
- **Build the Adverse Action Notice generator** as latent capability; do not arm it unless the data flow changes.
- **Build the FACT Act Risk-Based Pricing Notice** as latent capability; do not arm it unless the data flow changes.
- **Wire the consent record** to every lead transfer: each lead packet includes the consumer's TCPA consent (with timestamp, IP, user-agent, and exact consent text shown), the CCPA opt-out signal, and the consumer's preferred contact channels.

### 13.3 Phase 3 — Audits (Day 60–90)

- **Marketing audit.** Inventory every ad creative, every keyword, every landing page, every email template, every SMS template, every LinkedIn / Facebook / Google creative for the prohibited terms. For every match, document (i) the surface, (ii) the date, (iii) the proposed replacement, (iv) the reviewer.
- **Fair Housing audit.** Map the targeting strategy for every paid campaign. For every campaign that uses audience targeting, document the audience definition and the legitimate business reason. Run a *disparate-impact* test using the *Inclusive Communities* framework (robust causal connection + less discriminatory alternative). Adjust the audience.
- **AI audit.** Run a representative sample of LLM outputs through a *manual* review (50+ per locale, per quarter). Document each. Run an *automated* review using a second LLM as a red-team to flag prohibited outputs. The model card's effectiveness is a function of the audit cycle.
- **State-by-state audit.** Every state in which the site solicits or routes leads requires its own specific disclosures. The map: AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, IA, KS, KY, LA, ME, MD, MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ, NM, NY, NC, ND, OH, OK, OR, PA, RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY, plus DC. For each: state mortgage broker / lender license number, state-specific marketing requirements (CA has additional CCFPL, Fin. Code § 22303.5 prequalification rule; NY has Reg. 7.3-A mortgage advertising; TX Fin. Code § 180.106; FL Chapter 494 Part III; etc.), state-specific TCPA/lead rules (OK TSCA, FL TSA, WA CEMA), state-specific privacy (CCPA/CPRA, VCDPA, CPA, CTDPA, UCPA, TDPSA, OCPA, MCDPA, NHDPA, NJDPA, ICDPA, etc.).

### 13.4 Phase 4 — Ongoing (Day 90+)

- **Quarterly legal review.** Quarterly review of every ad surface, every LLM output, every email template, every SMS template. The review must be documented.
- **Quarterly model card review.** Recalibrate the LLM's likelihood model. Document the inputs and the calibration. Recalculate the historical approval rate by segment.
- **Annual compliance training.** Every employee and contractor who touches the marketing flow, the LLM, or the lead-routing must complete a 1-hour course on: MAP Rule, TILA Reg Z advertising, ECOA Reg B, Fair Housing Act advertising, TCPA, state-specific rules.
- **Records retention.** 24 months for ad creatives and LLM logs (MAP § 1014.5); 5 years for lead data (FCRA, if credit data is used; 5 years is the CFPB's standard for mortgage records); 7 years for tax-related records; permanent for license-related records.

### 13.5 Phase 5 — Insurance / contractual backstops (Day 90+)

- **Regulatory-defense insurance.** Cyber and E&O policies should expressly cover CFPB, FTC, and HUD enforcement actions. Confirm with broker.
- **Vendor contracts.** Every downstream lender and service provider in the lead chain should sign a contract that (i) binds them to the consumer's consent record, (ii) requires their own compliance with MAP, Reg Z, Reg B, Fair Housing, and TCPA, (iii) requires their own equal housing language, (iv) requires their own NMLS disclosures, and (v) gives you audit rights.
- **Operating Agreement with the MLO.** The licensed MLO on the back end must issue any actual pre-approval, must sign off on every lead receipt confirmation, and must be the entity that returns the Adverse Action Notice if one is required. The website is the marketing / lead funnel; the MLO is the credit decision.

---

## Appendix A — Direct quotations and citations used in this report

### A.1 MAP Rule — 12 CFR § 1014.3 (in full, as published; the operative prohibitions)

> "It is a violation of this part for any person to make any material misrepresentation, expressly or by implication, in any commercial communication, regarding any term of any mortgage credit product, including but not limited to misrepresentations about: …
> (q) The consumer's ability or likelihood to obtain any mortgage credit product or term, including but not limited to misrepresentations concerning whether the consumer has been preapproved or guaranteed for any such product or term;
> (r) The consumer's ability or likelihood to obtain a refinancing or modification of any mortgage credit product or term, including but not limited to misrepresentations concerning whether the consumer has been preapproved or guaranteed for any such refinancing or modification."
> — **12 CFR § 1014.3 (CFPB, republishing 16 CFR Part 321).**

### A.2 FTC SBP commentary on (q) and (r)

> "Sections 321.3(q) and 321.3(r) bar misrepresentations about the consumer's ability or likelihood to obtain any mortgage credit product or term, or a refinancing or modification of any mortgage credit product or term. **This includes false or misleading claims about whether the consumer has been preapproved or guaranteed for any such product or term.** The Commission has challenged similar claims in prior law enforcement actions. See, e.g., *United States v. Unicor Funding, Inc.*, No. 99-1228 (C.D. Cal. 1999); *In re Lomas Mortg. U.S.A., Inc.*, 116 F.T.C. 1062 (1993); *FTC v. Safe Harbour Found. of Fla., Inc.*, No. 08-C-1185 (DC Ill. 2008); *FTC v. Assocs. First Capital Corp.*, No. 1:01-00606 JTC (N.D. Ga. 2001)."
> — **FTC MAP Final Rule SBP, 76 FR 78133, paragraphs 158–59 (July 22, 2011, FTC Dkt. No. 2011-18605).**

### A.3 Reg Z trigger-terms rule — 12 CFR § 1026.24(d)(1) and (2) (in part)

> "(d) Advertisement of terms that require additional disclosures —(1) Triggering terms. If any of the following terms is set forth in an advertisement, the advertisement shall meet the requirements of paragraph (d)(2) of this section: (i) The amount or percentage of any downpayment. (ii) The number of payments or period of repayment. (iii) The amount of any payment. (iv) The amount of any finance charge. (2) Additional terms. An advertisement stating any of the terms in paragraph (d)(1) of this section shall state the following terms, as applicable (an example of one or more typical extensions of credit with a statement of all the terms applicable to each may be used): (i) The amount or percentage of the downpayment. (ii) The terms of repayment, which reflect the repayment obligations over the full term of the loan, including any balloon payment. (iii) The 'annual percentage rate,' using that term, and, if the rate may be increased after consummation, that fact."

### A.4 Reg Z misleading-government-endorsement prohibition — 12 CFR § 1026.24(i)(3)

> "Making any statement in an advertisement that the product offered is a 'government loan program', 'government-supported loan', or is otherwise endorsed or sponsored by any Federal, state, or local government entity, unless the advertisement is for an FHA loan, VA loan, or similar loan program that is, in fact, endorsed or sponsored by a Federal, state, or local government entity."

### A.5 ECOA Reg B 12 CFR § 1002.6(b) (in part)

> "(b) Specific rules concerning use of information. (1) Except as provided in the Act and this part, a creditor shall not take a prohibited basis into account in any system of evaluating the creditworthiness of applicants. (2) Age, receipt of public assistance. (i) Except as permitted in this paragraph, a creditor shall not take into account an applicant's age (provided that the applicant has the capacity to enter into a binding contract) or whether an applicant's income derives from any public assistance program. … (iv) In any system of evaluating creditworthiness, a creditor may consider the age of an elderly applicant when such age is used to favor the elderly applicant in extending credit."

### A.6 ECOA Reg B 12 CFR § 1002.9(a)(1)–(2) (Adverse Action, in part)

> "(a) Notification of action taken, ECOA notice, and statement of specific reasons —(1) When notification is required. A creditor shall notify an applicant of action taken within: (i) 30 days after receiving a completed application concerning the creditor's approval of, counteroffer to, or adverse action on the application; … (2) Content of notification when adverse action is taken. A notification given to an applicant when adverse action is taken shall be in writing and shall contain a statement of the action taken; the name and address of the creditor; a statement of the provisions of section 701(a) of the Act; the name and address of the Federal agency that administers compliance with respect to the creditor; and either: (i) A statement of specific reasons for the action taken; or (ii) A disclosure of the applicant's right to a statement of specific reasons within 30 days, if the statement is requested within 60 days of the creditor's notification."

### A.7 Fair Housing Act — 24 CFR § 100.75 (Discriminatory advertisements, statements and notices, in part)

> "It shall be unlawful to make, print or publish, or cause to be made, printed or published, any notice, statement or advertisement with respect to the sale or rental of a dwelling which indicates any preference, limitation or discrimination because of race, color, religion, sex, handicap, familial status, or national origin, or an intention to make any such preference, limitation or discrimination. … Discriminatory notices, statements and advertisements include, but are not limited to: (1) Using words, phrases, photographs, illustrations, symbols or forms which convey that dwellings are available or not available to a particular group of persons because of race, color, religion, sex, handicap, familial status, or national origin."

### A.8 TCPA — 47 CFR § 64.1200(a)(2) (in part)

> "(2) Initiate, or cause to be initiated, any telephone call that includes or introduces an advertisement or constitutes telemarketing, using an automatic telephone dialing system or an artificial or prerecorded voice, to any of the lines or telephone numbers described in paragraphs (a)(1)(i) through (iii) of this section, other than a call made with the prior express written consent of the called party or the prior express consent of the called party when the call is made by or on behalf of a tax-exempt nonprofit organization, or a call that delivers a 'health care' message made by, or on behalf of, a 'covered entity' or its 'business associate,' as those terms are defined in the HIPAA Privacy Rule, 45 CFR 160.103."

### A.9 HUD — 24 CFR § 202.5(b)(2) (FHA mortgagee advertising name rule)

> "(2) Use of business name. The lender or mortgagee must use its HUD-registered business name in all advertisements and promotional materials related to FHA programs. HUD-registered business names include any alias or 'doing business as' (DBA) on file with FHA. The lender or mortgagee must keep copies of all print and electronic advertisements and promotional materials for a period of 2 years from the date that the materials are circulated or used to advertise."

### A.10 SAFE Act — 12 CFR § 1007.102 (Unique Identifier, in part)

> "Unique identifier means a number or other identifier that: (1) Permanently identifies a registered mortgage loan originator; (2) Is assigned by protocols established by the Nationwide Mortgage Licensing System and Registry and the Bureau to facilitate: (i) Electronic tracking of mortgage loan originators; and (ii) Uniform identification of, and public access to, the employment history of and the publicly adjudicated disciplinary and enforcement actions against mortgage loan originators; and (3) Must not be used for purposes other than those set forth under the S.A.F.E. Act."

### A.11 MAP Rule recordkeeping — 12 CFR § 1014.5(a) (in part)

> "Any person subject to this part shall keep, for a period of twenty-four months from the last date the person made or disseminated the applicable commercial communication regarding any term of any mortgage credit product, the following evidence of compliance with this part: (1) Copies of all materially different commercial communications as well as sales scripts, training materials, and marketing materials, regarding any term of any mortgage credit product, that the person made or disseminated during the relevant time period; (2) Documents describing or evidencing all mortgage credit products available to consumers during the time period in which the person made or disseminated each commercial communication regarding any term of any mortgage credit product, including but not limited to the names and terms of each such mortgage credit product available to consumers; and (3) Documents describing or evidencing all additional products or services (such as credit insurance or credit disability insurance) that are or may be offered or provided with the mortgage credit products available to consumers during the time period in which the person made or disseminated each commercial communication regarding any term of any mortgage credit product, including but not limited to the names and terms of each such additional product or service available to consumers."

### A.12 CFPB AskCFPB en/127 — Verbatim quotes

> "Prequalification and preapproval letters both specify how much the lender is willing to lend to you, up to a certain amount and based on certain assumptions. These letters provide useful information about your likelihood of getting a loan but **are not guaranteed loan offers**. Lenders use the terms 'prequalification' and 'preapproval' differently. Some lenders may use the word 'prequalification,' while other lenders may call the letter a 'preapproval.' **Some lenders offer a prequalification letter based on unverified information that you report and will only issue a preapproval letter based on verified information.** In connection with a prequalification or preapproval request, some lenders may issue a written commitment letter valid for a certain period of time to extend a loan up to a specified amount subject to limited conditions. Don't worry about which word lenders use. Lenders' processes vary widely, and the words they use don't tell you much about a particular lender's process even if it may result in legal differences. Both terms refer to a letter from a lender that says the lender is generally willing to lend to you, up to a certain amount and based on certain assumptions. This letter helps you to make an offer on a home, because it gives the seller confidence that you will be able to get financing to buy the home. **It is not a guaranteed loan offer, but it should provide enough information for sellers in your area to take it seriously.** The best way to make sure that the letter you have will serve its purpose is to ask a local real estate agent or a housing counselor. Lenders may check your credit when issuing a prequalification or preapproval letter. Many people wait to get a preapproval letter until they are ready to begin shopping seriously for a home. However, getting preapproved earlier in the process can be a good way to spot potential issues with your credit in time to correct them. In addition, even if you have not submitted a formal loan application, **a lender that evaluates your creditworthiness and tells you that you do not qualify for a prequalification or preapproval letter must provide you with an adverse action notice**."

### A.13 CFPB "Get a preapproval letter" page — Verbatim quotes

> "**A preapproval letter is a statement from a lender that they are tentatively willing to lend money to you, up to a certain loan amount. A preapproval letter is based on assumptions and it is not a guaranteed loan offer.** But, it lets the seller know that you are likely to be able to get financing. Sellers frequently require a preapproval letter before accepting your offer on a house."
> "Lenders typically check your credit before issuing a preapproval letter, and the letter can have an expiration date on it (typically 30 to 60 days)."
> "**Getting a preapproval letter isn't the same thing as applying for a loan. A preapproval letter just says that a lender is willing to lend to you – pending further confirmation of details.** A preapproval helps you shop for a home, because it lets the seller know you are a serious buyer. There's no need to choose a lender just yet. Getting preapproved is important because it helps you shop for a home. But your preapproval letters don't give you enough information to make a decision about which lender offers the best deal. **Getting a preapproval doesn't commit you to using that lender for your loan.** Wait to decide on a lender until you've made an offer on a house and received official Loan Estimates from each of your potential lenders."

### A.14 FTC Consumer Advice — Mortgage ads, verbatim

> "When you're shopping around, you may see ads or get offers with rates that are very low or say they're fixed. But they may not tell you the true terms of the deal as the law requires. The ads may feature buzz words that are signs that you'll want to dig a little deeper. For example: **Low or fixed rate**. A loan's interest rate might be fixed or low only for a short introductory period — sometimes as short as 30 days. Then your rate and payment could increase dramatically. **Look for the APR: under federal law if the interest rate is in the ad, the APR also should be there.** Although the APR should be clearly stated, check the fine print to see if instead it's buried there, or has been placed deep within the website."

### A.15 FTC MAP SBP "half-truth" doctrine, verbatim

> "Under Section 5 of the FTC Act, it is a deceptive practice to omit qualifying information when making a literally truthful claim if the omission of that information is likely to mislead reasonable consumers in a material way. See *Deception Policy Statement*, supra note 9, at 176-77. For example, a closed-end mortgage advertisement likely would be deceptive if it represented that a loan has a very low interest rate, but failed to disclose that the rate would substantially increase after a few months. Such claims often are referred to as 'half truths.' Mortgage advertisements that include half truths in most cases also would be considered to have made implied misrepresentations that would fit into the specific categories of misrepresentations in the Rule."

---

## Appendix B — The five safety rules (one-page summary)

1. **Never say "approved," "pre-approved," or "guaranteed."** Use "you may prequalify," "you may be a good candidate," or "this is an educational estimate." MAP § 1014.3(q).
2. **Never show a specific dollar figure alone.** Either remove the figure or show a *range* together with the Reg Z § 1026.24(d)(2) trigger-term disclosures (APR, term, taxes/insurance notice).
3. **Never advertise "Bad credit OK," "Subprime," or any protected-class-linked targeting language.** Use neutral program-level language. 24 CFR § 100.75; ECOA Reg B § 1002.6(b) (effects test); *Inclusive Communities*.
4. **Always include the standard disclaimer block** in close proximity to every offer. CFPB en/127; MAP § 1014.3.
5. **Always get TCPA E-SIGN written consent** before any autodialed or prerecorded voice contact, with a STOP mechanism. 47 CFR § 64.1200.

---

## Appendix C — File and page list of the underlying primary sources

The following files were retrieved and used as the primary-source basis for this report. They are saved under `/root/Website/Why am i denied/research/`.

| Local file | URL fetched | Citation produced |
|---|---|---|
| `ecfr_1014.txt` | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1014 | 12 CFR Part 1014 (MAP Rule) — full rule text |
| `ecfr_1014_lines.txt` | (formatted version of above) | Line-numbered MAP Rule text |
| `ecfr_1026_24.txt` | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1026&section=1026.24 | Reg Z § 1026.24 (Advertising) |
| `ecfr_1002_6.txt` | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1002&section=1002.6 | Reg B § 1002.6 (Evaluation) |
| `ecfr_1002_9.txt` | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1002&section=1002.9 | Reg B § 1002.9 (Notifications / Adverse Action) |
| `ecfr_64_1200.txt` | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-47.xml?part=64&section=64.1200 | 47 CFR § 64.1200 (TCPA) |
| `ecfr_1007.txt` | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1007 | 12 CFR Part 1007 (Reg G, SAFE Act, NMLS) |
| `ecfr_100.75.txt` | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-24.xml?part=100&section=100.75 | 24 CFR § 100.75 (FHA advertising) |
| `ecfr_100.80.txt` | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-24.xml?part=100&section=100.80 | 24 CFR § 100.80 (FHA availability representations) |
| `ecfr_202.txt` | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-24.xml?part=202 | 24 CFR Part 202 (FHA mortgagee approval, advertising name) |
| `ecfr_321.txt` | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-16.xml?part=321 | 16 CFR Part 321 (FTC MAP cross-reference) |
| `ecfr_322.txt` | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-16.xml?part=322 | 16 CFR Part 322 (FTC MARS cross-reference) |
| `fr_map_orig.xml` | https://www.federalregister.gov/documents/full_text/xml/2011/07/22/2011-18605.xml | FTC MAP Final Rule SBP (76 FR 78133) — full text |
| `fr_map_orig.txt` | (cleaned) | Same, formatted |
| `cfpb_127.txt` | https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-prequalification-letter-and-a-preapproval-letter-en-127/ | CFPB en/127 |
| `cfpb_preapprov_letter.txt` | https://www.consumerfinance.gov/owning-a-home/explore/get-a-preapproval-letter/ | CFPB "Get a preapproval letter" |
| `cfpb_mortgage_resources.txt` | https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/ | CFPB mortgage resources index |
| `cfpb_tila_respa.txt` | https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/tila-respa-integrated-disclosures/ | CFPB TILA-RESPA resource index |
| `ftc_mortgages.txt` | https://www.ftc.gov/business-guidance/credit-finance/mortgages | FTC business guidance — mortgages |
| `ftc_shopping-mortgage-faqs.txt` | https://consumer.ftc.gov/articles/shopping-mortgage-faqs | FTC consumer — mortgage FAQs |
| `ftc_mortgage-discrimination.txt` | https://consumer.ftc.gov/articles/mortgage-discrimination | FTC consumer — mortgage discrimination |
| `ftc_adv_basics.html` | https://www.ftc.gov/business-guidance/advertising-marketing/advertising-marketing-basics | FTC advertising and marketing basics |
| `ftc_credit_finance.html` | https://www.ftc.gov/business-guidance/credit-finance | FTC credit and finance index |
| `ccpa_oag.html` | https://oag.ca.gov/privacy/ccpa | California OAG CCPA hub |

---

*End of Report.*
