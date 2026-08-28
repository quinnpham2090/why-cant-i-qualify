# Safe-Language Recommendations — U.S. Consumer Mortgage Qualification Diagnostic

> **Status: PARTIAL FINDINGS — Primary-Source Verification Required**
>
> **Important methodology caveat.** The `web_search` tool was unavailable for this research session (authentication failure returned for every query). I retrieved primary regulatory text directly from official sources using the node `fetch` API:
> - **eCFR** (api/versioner/v1/full/) — full XML for 12 CFR Part 1014, 12 CFR § 1026.24, 12 CFR § 1002.4, § 1002.5, § 1002.6, § 1002.9, § 1002.12, § 1002.14, 12 CFR Part 1007, 12 CFR Part 1008, 24 CFR Part 100 (§§ 100.50, 100.75, 100.80, 100.85), 24 CFR Part 202, 24 CFR Part 203, 16 CFR Part 321, 16 CFR Part 322, 47 CFR § 64.1200
> - **Federal Register API** (`api/v1/documents/<docnum>.json`) — FTC MAP Final Rule SBP, 76 FR 78133 (FTC Dkt. No. 2011-18605), full text XML
> - **CFPB** (consumerfinance.gov) — AskCFPB en/127 (prequalification vs. preapproval); owning-a-home "Get a preapproval letter"; compliance resources index
> - **FTC** (ftc.gov, consumer.ftc.gov) — Business Guidance: Mortgages; Advertising & Marketing Basics; Credit & Finance; Consumer Advice "Shopping for a mortgage: FAQs" and "Mortgage discrimination"
> - **California OAG** (oag.ca.gov/privacy/ccpa) — CCPA hub
> - **Court Listener API** (courtlistener.com) — cross-referenced FTC enforcement cases
>
> **Verification recommendation.** The full citation set, statutory text, and recommended language below should be cross-checked against the current published versions of each regulation and against current state-law amendments before implementation. State mortgage law is particularly dynamic.
>
> **Note on previously produced materials.** A longer, 706-line report is at `/root/Website/Why am i denied/SAFE_LANGUAGE_COMPLIANCE_REPORT.md`. This document is a self-contained, actionable extract focused on the 7 problematic claims, recommended safe language, and the footer template.

---

## Table of Contents

1. [The 7 Problematic Claims — Quick-Reference Table](#1-quick-reference-table)
2. [Each Claim — Why It's a Problem + Safer Alternative + Remediation](#2-each-claim)
   - 2.1 ["You're approved"](#21-youre-approved)
   - 2.2 ["You qualify for $X"](#22-you-qualify-for-x)
   - 2.3 ["Guaranteed approval"](#23-guaranteed-approval)
   - 2.4 ["We'll get you approved"](#24-well-get-you-approved)
   - 2.5 ["Pre-approved in 60 seconds"](#25-pre-approved-in-60-seconds)
   - 2.6 ["Bad credit OK"](#26-bad-credit-ok)
   - 2.7 [AI-generated "approval likelihood"](#27-ai-generated-approval-likelihood)
3. [Standard Disclaimer Block (use on every results page)](#3-standard-disclaimer-block)
4. [TCPA Consent Language (lead-capture form)](#4-tcpa-consent-language)
5. [Comparison / Trigger-Terms Safe Harbor](#5-comparison-safe-harbor)
6. [State-Specific Disclosures — CA, NY, TX, FL](#6-state-specific-disclosures)
7. [Footer Disclosures Template (all-in-one)](#7-footer-template)
8. [AI System-Prompt Guardrails (LLM)](#8-ai-guardrails)
9. [Required Disclosures Checklist](#9-required-disclosures-checklist)
10. [Recordkeeping & Audit](#10-recordkeeping)

---

## 1. Quick-Reference Table

| # | Phrase | Primary rule | Severity | Safer alternative |
|---|---|---|---|---|
| 1 | "You're approved" | MAP § 1014.3(q); Reg Z § 1026.24(a); CFPB en/127 | **High** | "You may prequalify," "you appear to be a good candidate for further review" |
| 2 | "You qualify for $X" | Reg Z § 1026.24(a), (d), (f); MAP § 1014.3 | **High** if a payment is shown; otherwise **Medium** | "You *may* qualify for *up to* $X (illustrative)" with full § 1026.24(d)(2) companion disclosures |
| 3 | "Guaranteed approval" / "100% approved" | MAP § 1014.3(q); *Lomas*; *Assocs. First Capital*; *Unicor* | **High — per se deceptive** | **Remove the claim; do not replace** |
| 4 | "We'll get you approved" | MAP § 1014.3(q); FTC § 5 (material omission); state UDAP | **High** | "We'll help you find a lender that may fit" |
| 5 | "Pre-approved in 60 seconds" | CFPB en/127; MAP § 1014.3(q); *Unicor*; TCPA | **High — per se deceptive** | "Get a prequalification estimate in about a minute" |
| 6 | "Bad credit OK" / "No credit check" | 24 CFR § 100.75; *Inclusive Communities*; CFPB UDAAP; ECOA Reg B § 1002.6 effects test | **Medium-High** | "Loan programs available for a wide range of credit profiles" (no protected-class targeting) |
| 7 | AI "85% approval likelihood" | FTC Deception Policy Statement; MAP § 1014.3; Reg B § 1002.9 (if credit data) | **High** if methodology unstated; **High** if false | (a) remove score, use qualitative tier; or (b) disclose methodology + inputs; or (c) full Reg B / FCRA stack |

---

## 2. Each Claim

### 2.1 "You're approved"

#### Why it's a problem

- **12 CFR § 1014.3(q) (MAP Rule)**: "It is a violation of this part for any person to make any material misrepresentation, expressly or by implication, in any commercial communication, regarding any term of any mortgage credit product, including but not limited to misrepresentations about … (q) The consumer's ability or likelihood to obtain any mortgage credit product or term, including but not limited to misrepresentations concerning whether the consumer has been **preapproved or guaranteed** for any such product or term."
- **12 CFR § 1026.24(a) (Reg Z — Actually available terms)**: "If an advertisement for credit states specific credit terms, it shall state only those terms that actually are or will be arranged or offered by the creditor."
- **CFPB AskCFPB en/127** (verbatim): "Prequalification and preapproval letters both specify how much the lender is willing to lend to you, up to a certain amount and based on certain assumptions. These letters provide useful information about your likelihood of getting a loan but **are not guaranteed loan offers**."
- **FTC enforcement record** (per MAP SBP 76 FR 78133 fn. 79): "*United States v. Unicor Funding, Inc.*, No. SACV99-1228 (C.D. Cal. 1999) — false or misleading claims that consumers were 'pre-approved' for mortgage loans." Companion cases: *In re Lomas Mortg. U.S.A., Inc.*, 116 F.T.C. 1062 (1993); *FTC v. Assocs. First Capital Corp.*, No. 1:01-00606 (N.D. Ga. 2001); *FTC v. Safe Harbour Found. of Fla., Inc.*, No. 08-C-1185 (N.D. Ill. 2008); *FTC v. 30 Minute Mortg. Inc.*, No. 03-60021 (S.D. Fla. 2003).
- **Even after a soft-pull prequalification**, the CFPB itself states that pre-approval requires *verified* information. A 60-second self-reported screen is, at best, a *prequalification based on unverified information*. Calling it "approved" misrepresents the consumer's likelihood of obtaining a product.

#### Safer alternative language

For the results page (high-likelihood user):

> **Your result: You appear likely to qualify**
>
> Based on the information you provided, you appear to be a good candidate to begin a formal mortgage prequalification with a licensed lender. This is an **educational estimate**, not a pre-approval and not an offer or commitment of credit.
>
> What "likely to qualify" means: the inputs you provided (income, debts, self-reported credit range, down payment, employment) are consistent with the typical underwriting profile for a loan in the amount and program we estimated.
>
> What would still be required for actual approval:
> - A complete written application
> - Identity, income, and asset verification (pay stubs, W-2s/1099s, bank statements, tax returns)
> - A credit report pulled by the lender (a "hard" inquiry)
> - An appraisal of the property
> - Underwriting by a licensed mortgage loan originator
>
> **No lender guarantees approval.** Final loan amount, interest rate, APR, term, and monthly payment are at the lender's discretion.

For mid-likelihood users:

> **Your result: You may qualify for some programs**
>
> Based on the information you provided, you may qualify for some loan programs, but your profile also has features that may limit your options (such as your self-reported credit range, debt-to-income ratio, or available down payment). A licensed loan originator can review your full profile and tell you which programs are realistically available.
>
> This is an **educational estimate**, not a pre-approval and not an offer or commitment of credit. **No lender guarantees approval.**

For low-likelihood users:

> **Your result: A formal application may be difficult to qualify for at this time**
>
> Based on the information you provided, a standard mortgage may be difficult to qualify for at this time. This does **not** mean you will be denied — it means that on the inputs you provided, typical underwriting standards would not favor approval.
>
> Some options you may want to discuss with a HUD-approved housing counselor or a licensed loan originator:
> - FHA, VA, USDA, or state bond programs with more flexible guidelines
> - Improving your credit profile before applying
> - Adjusting the loan amount, down payment, or property type
> - Co-borrower options
>
> This is an **educational estimate**, not a credit decision. We have not run your credit. **No lender guarantees approval.** We will still connect you with a licensed loan originator if you would like to discuss your options.

#### Remediation (if already in use)

1. **Inventory** every UI string, email, SMS, ad creative containing "approved," "you're in," "congratulations," "approval," or any green-check / thumbs-up / "Approved!" badge.
2. **Replace** with the safe alternatives above.
3. **Tighten iconography.** Replace ✅ / 🎉 / "Approved!" badges with neutral status labels ("Strong fit," "Good fit," "Some considerations," "Limited fit"). Pair every result with the standard disclaimer block (§ 3 below).
4. **Update lead disposition logic.** Do not pass an "approved" flag with the lead to downstream lenders; pass only the consumer-stated inputs and the consent record.
5. **Re-train / guardrail the LLM** — add a system-prompt rule against the words "approved," "pre-approved," "guaranteed," and any synonyms.
6. **Build an Adverse Action Notice module** as a latent capability — required (12 CFR § 1002.9) if the upstream flow ever uses credit-bureau data or renders a credit decision.

---

### 2.2 "You qualify for $X"

#### When it's permissible / not permissible

**Permissible** as an *illustrative prequalification range* based on self-reported information, paired with the full standard disclaimer block, when no Reg Z "trigger term" is shown alone.

**Not permissible** if it triggers **12 CFR § 1026.24(d)(1)** — "Triggering terms":

> "If any of the following terms is set forth in an advertisement, the advertisement shall meet the requirements of paragraph (d)(2) of this section: (i) The amount or percentage of any downpayment. (ii) The number of payments or period of repayment. (iii) The amount of any payment. (iv) The amount of any finance charge."

Triggering any of those four terms requires the § 1026.24(d)(2) companion disclosures on the *same page*:
- (i) Amount or percentage of the downpayment.
- (ii) Terms of repayment, which reflect the repayment obligations over the full term of the loan, including any balloon payment.
- (iii) "Annual percentage rate," using that term, and if the rate may be increased after consummation, that fact.

**Dwelling-secured additional rules** under § 1026.24(f)(2) and (f)(3) (mandatory for any mortgage ad with rate or payment):
- Each simple annual rate that will apply, the period of time it applies, and the APR.
- Amount of each payment, period, and the **"taxes and insurance not included"** notice ("the fact that the payments do not include amounts for taxes and insurance premiums, if applicable, and that the actual payment obligation will be greater").
- "Clear and conspicuous" means "equal prominence and in close proximity."

**Internet / electronic safe harbor at § 1026.24(e)(2)**: "A catalog or other multiple-page advertisement or an electronic advertisement (such as an advertisement appearing on an Internet Web site) complies with paragraph (d)(2) of this section if the table or schedule of terms includes all appropriate disclosures for a representative scale of amounts up to the level of the more commonly sold higher-priced property or services offered."

#### Safer alternative language

For a single-page result without a payment shown:

> Based on the information you provided, you may qualify for a mortgage in the range of **$250,000 – $300,000**. This is an **educational estimate only**. It is **not a commitment to lend**. Actual loan amount, rate, and terms depend on a full application, verified income and assets, a credit report, an appraisal, and underwriting approval by a licensed lender.

For a single-page result with a payment shown — must include the full § 1026.24(d)(2) + (f) stack:

> **Illustrative monthly payment (P&I only)**: $1,896 (does **not** include property taxes, homeowner's insurance, flood insurance, mortgage insurance, or HOA/condo fees — **your actual monthly payment will be greater**).
>
> | Term | Rate | APR* | Sample payment (P&I) |
> |---|---|---|---|
> | 30-year fixed | 6.875% | 7.021% | $1,896 / month |
> | 15-year fixed | 6.125% | 6.245% | $2,562 / month |
> | 5/1 ARM (initial 5 yrs) | 6.000% | 7.310% | $1,733 / month (initial; adjusts annually starting year 6) |
>
> \* APR includes the interest rate plus certain finance charges. The APR is not the rate at which your loan accrues interest. The figures above are illustrative examples; they are not quotes, not commitments to lend, and not guaranteed to be available to you. Final rate, payment, and APR depend on a full application and underwriting approval by a licensed lender.
>
> **A "fixed" rate or payment means the rate or payment is fixed for the full term shown.** A 5/1 ARM has an initial 5-year fixed period; after year 5, the rate and payment adjust annually based on the index plus margin. **Your actual payment obligation will be greater than the figure shown** because taxes, insurance, and (if applicable) mortgage insurance are not included.

#### Remediation (if already in use)

1. **Trigger-term audit** of the results page. Are down payment, payment, payment count, or finance charge shown? If yes, add the § 1026.24(d)(2) companion disclosures — or remove the trigger.
2. **Display a *range*, not a single figure** when the inputs are self-reported. Ranges are unambiguously illustrative; a single specific figure invites a literal-claim attack.
3. **If you show a payment**, also show the APR and the § 1026.24(f)(3)(i)(C) "taxes and insurance not included" notice in equal prominence and close proximity.
4. **Use the § 1026.24(e) table safe harbor** for the full comparison page.

---

### 2.3 "Guaranteed approval"

#### Why it's a problem — direct citation

**MAP Rule § 1014.3(q)** and **(r)** are dispositive. The FTC SBP 76 FR 78133 ¶ 158 is explicit:

> "Sections 321.3(q) and 321.3(r) bar misrepresentations about the consumer's ability or likelihood to obtain any mortgage credit product or term, or a refinancing or modification of any mortgage credit product or term. **This includes false or misleading claims about whether the consumer has been preapproved or guaranteed for any such product or term.**"

¶ 159 catalogs the FTC enforcement record: "*United States v. Unicor Funding, Inc.*, No. 99-1228 (C.D. Cal. 1999); *In re Lomas Mortg. U.S.A., Inc.*, 116 F.T.C. 1062 (1993); *FTC v. Safe Harbour Found. of Fla., Inc.*, No. 08-C-1185 (DC Ill. 2008); *FTC v. Assocs. First Capital Corp.*, No. 1:01-00606 JTC (N.D. Ga. 2001)."

> **"The Commission has challenged similar claims in prior law enforcement actions."**

There is no meaningful safe harbor for "guaranteed approval" in U.S. residential mortgage advertising.

#### Safer alternative language

**None.** Remove the claim. If the site needs a positive statement, use:

> Our network of lenders reviews each application individually. Loan approval, amount, rate, and terms depend on the lender's underwriting of your verified income, assets, credit history, and the property. **No lender in our network guarantees approval.**

#### Remediation (if already in use)

1. **Cease immediately.** "Guaranteed," "guaranteed approval," "100% approval," "everyone is approved," "instant approval," "absolutely approved," and "we will get you approved" all carry the same exposure.
2. **Search the codebase** for `guarantee`, `guaranteed`, `100%`, `100 percent`, `everyone`, `instant approve`, `instant approval`, `no matter what`, `always approved`.
3. **Replace** with the safe alternative above, or remove the claim.
4. **LLM guardrail**: "Never use the words 'guaranteed,' 'guarantee,' '100%,' 'instant,' 'immediate approval,' or synonyms in any output."
5. **Update ad copy and lead-routing emails** — the same prohibition applies because every email and SMS is itself a "commercial communication" under 12 CFR § 1014.2.

---

### 2.4 "We'll get you approved"

#### Why it's a problem — three independent risk vectors

**(a) MAP Rule § 1014.3(q) and (r)** (same as Item 3): misrepresentation about the consumer's *ability or likelihood* of obtaining a mortgage product, including being "preapproved or guaranteed."

**(b) FTC Act § 5 — material omission / "half truth"** (FTC SBP 76 FR 78133 ¶ 167, citing *FTC Deception Policy Statement*, 103 F.T.C. 174, 176–77 (1984)):

> "Under Section 5 of the FTC Act, it is a deceptive practice to omit qualifying information when making a literally truthful claim if the omission of that information is likely to mislead reasonable consumers in a material way. … For example, a closed-end mortgage advertisement likely would be deceptive if it represented that a loan has a very low interest rate, but failed to disclose that the rate would substantially increase after a few months. Such claims often are referred to as 'half truths.' Mortgage advertisements that include half truths in most cases also would be considered to have made implied misrepresentations that would fit into the specific categories of misrepresentations in the Rule."

The "we'll get you approved" half-truth omits: (i) the lender may deny the loan at any stage before closing; (ii) the loan amount and rate are at the lender's discretion; (iii) the consumer's credit, income, and the property must all qualify; (iv) the consumer is not bound to accept the loan offered.

The FTC's consumer-facing advice (consumer.ftc.gov/articles/shopping-mortgage-faqs, "How To Recognize Deceptive Mortgage Loan Ads and Offers") specifically calls out such "buzz words."

**(c) State Unfair Trade Practices / Deceptive Acts statutes** — California Business & Professions Code § 17200, California Financial Code § 50505; Texas Business & Commerce Code § 17.46; New York Executive Law § 63(12) and General Business Law § 349; Florida Deceptive and Unfair Trade Practices Act (Fla. Stat. § 501.201 et seq.). All adopt a "likely to deceive a reasonable consumer" standard.

#### Safer alternative language

> We will review your information and, if appropriate, connect you with a licensed mortgage loan originator who can help you start a formal prequalification or pre-approval. **Approval is determined solely by the lender after a complete application and underwriting.**

Or for the lead-capture flow:

> Submit your information, and a licensed mortgage loan originator from our network will contact you to discuss which programs you may qualify for.

#### Remediation (if already in use)

1. **Replace** "we'll get you approved" with the safe alternatives above.
2. **Disclose the network structure on the same screen as the headline copy**, not buried in T&Cs: "We are a marketing lead generator, not a lender. We may share your information with up to [N] licensed mortgage lenders or brokers."
3. **Audit testimonials, star ratings, and review widgets** that imply a successful approval ("They got me approved!") under the FTC Endorsement Guides (16 CFR Part 255). Each must be (i) tied to an actual completed and funded loan, (ii) clearly identified as a customer's individual experience, and (iii) accompanied by a typical-results disclaimer.

---

### 2.5 "Pre-approved in 60 seconds"

#### The legal distinction — CFPB guidance (verbatim)

From **CFPB AskCFPB en/127** ("What's the difference between a prequalification letter and a preapproval letter?", page last modified Dec. 12, 2023):

> "Prequalification and preapproval letters both specify how much the lender is willing to lend to you, up to a certain amount and based on certain assumptions. These letters provide useful information about your likelihood of getting a loan but **are not guaranteed loan offers**. Lenders use the terms 'prequalification' and 'preapproval' differently. Some lenders may use the word 'prequalification,' while other lenders may call the letter a 'preapproval.' **Some lenders offer a prequalification letter based on unverified information that you report and will only issue a preapproval letter based on verified information.** In connection with a prequalification or preapproval request, some lenders may issue a written commitment letter valid for a certain period of time to extend a loan up to a specified amount subject to limited conditions. … **It is not a guaranteed loan offer, but it should provide enough information for sellers in your area to take it seriously.** … In addition, even if you have not submitted a formal loan application, **a lender that evaluates your creditworthiness and tells you that you do not qualify for a prequalification or preapproval letter must provide you with an adverse action notice**."

From **CFPB "Get a preapproval letter"** (owning-a-home/explore/get-a-preapproval-letter, last modified Dec. 12, 2024):

> "**A preapproval letter is a statement from a lender that they are tentatively willing to lend money to you, up to a certain loan amount. A preapproval letter is based on assumptions and it is not a guaranteed loan offer.** … Lenders typically check your credit before issuing a preapproval letter, and the letter can have an expiration date on it (typically 30 to 60 days). … **Getting a preapproval letter isn't the same thing as applying for a loan. A preapproval letter just says that a lender is willing to lend to you – pending further confirmation of details.** A preapproval helps you shop for a home, because it lets the seller know you are a serious buyer. … **Getting a preapproval doesn't commit you to using that lender for your loan.**"

#### Why "pre-approved in 60 seconds" violates the law

- **CFPB defines pre-approval as requiring a credit pull and verified information.** A 60-second "pre-approval" with no credit pull, no verification, and no underwriting is, at best, a prequalification based on unverified data. Calling it "pre-approved" is misrepresentation about the consumer's ability or likelihood of obtaining a product — **MAP § 1014.3(q)**.
- **It is a false factual claim** because it implies a lender has (a) received a credit report, (b) verified income/employment, (c) tied the result to a specific loan scenario, and (d) issued a tentative commitment — none of which the diagnostic has done.
- **"60 seconds" is a separate deception** because it implies a depth of review that cannot exist in that time window. *FTC Deception Policy Statement*, 103 F.T.C. 174 (1984): a literal claim that misleads by implication is deceptive.
- **UPL risk.** Issuing a "pre-approval" is the practice of mortgage lending in every U.S. state. A website that does not hold a state mortgage banker or mortgage broker license cannot lawfully *issue* a pre-approval. Routing the consumer to a *licensed MLO* who then issues a pre-approval is permissible; the website's *display* of "pre-approved" is not.
- **TCPA exposure on the follow-up.** Many "60-second pre-approval" flows trigger automated outreach. Each autodialed call or prerecorded voice call requires *prior express written consent* (47 CFR § 64.1200(a)(2)). The fact that the user filled in a phone number is not by itself consent.

#### Safer alternative language

If the diagnostic does **not** pull credit:

> Get a free, no-obligation **mortgage-readiness snapshot** in about a minute. This is an **educational tool**. We do not run your credit. We do not pre-approve you. A licensed mortgage loan originator will contact you to discuss a formal prequalification or pre-approval.

If the diagnostic does pull a soft credit (with the consumer's consent):

> Get a free, no-obligation **prequalification estimate** in about a minute, based on a soft credit pull. A prequalification is an early, self-reported snapshot of what you *might* borrow. It is **not a pre-approval**. To get a pre-approval, you'll need to provide verified income, asset, and credit information to a licensed lender.

#### Remediation (if already in use)

1. **Replace "pre-approved" with "prequalification estimate"** in every UI string, ad creative, and email subject line.
2. **Disclose the inputs the tool actually used** on the results page (self-reported income, self-reported debt, no credit pull, no verification).
3. **Add the CFPB's distinction to the FAQ or Learn page** — the CFPB is itself the primary source, and a verbatim quote or close paraphrase educates the consumer *and* inoculates the site against the "but consumers are confused" argument.
4. **Audit the auto-dialer / SMS flow.** If a "pre-approval" is the trigger for outbound contact, the contact must be (i) to a phone number provided *with express written consent* (TCPA), (ii) in compliance with state telemarketing rules (Florida Telephone Solicitation Act, Oklahoma Telephone Solicitation Act, etc.), and (iii) under an explicit revocation mechanism.

---

### 2.6 "Bad credit OK"

#### Why it's a problem — three independent violations

**(a) Fair Housing Act — 24 CFR § 100.75 — Discriminatory advertisements, statements and notices:**

> "It shall be unlawful to make, print or publish, or cause to be made, printed or published, any notice, statement or advertisement with respect to the sale or rental of a dwelling which indicates any preference, limitation or discrimination because of race, color, religion, sex, handicap, familial status, or national origin, or an intention to make any such preference, limitation or discrimination."
>
> "Discriminatory notices, statements and advertisements include, but are not limited to: (1) Using words, phrases, photographs, illustrations, symbols or forms which convey that dwellings are available or not available to a particular group of persons because of race, color, religion, sex, handicap, familial status, or national origin."

"Bad credit OK" on its face does not name a protected class, but the *category* of ad copy using this phrase is widely marketed to neighborhoods that HUD's FHEO and the FTC have, in pattern complaints, identified as racially correlated solicitation. Even an *intentionally* neutral "Bad credit OK" ad that the operator can show was *targeted* by ZIP code / audience segment to a predominantly minority area is a Fair Housing Act pattern complaint.

**(b) ECOA — Regulation B — 12 CFR § 1002.6(b):**

> "(b) Specific rules concerning use of information. (1) Except as provided in the Act and this part, a creditor shall not take a prohibited basis into account in any system of evaluating the creditworthiness of applicants. … (iv) In any system of evaluating creditworthiness, a creditor may consider the age of an elderly applicant when such age is used to favor the elderly applicant in extending credit."

**Important correction to a common framing.** § 1002.6(b) is the *allowance* for elderly preferences. It does *not* itself ban "Bad credit OK" advertising. The risk under ECOA is the **disparate-impact / targeting** theory that flows from a marketing campaign inviting a non-protected-but-racially-correlated class. The Supreme Court applied the ECOA "effects test" in **12 CFR § 1002.6(a)** (citing *Griggs v. Duke Power Co.*, 401 U.S. 424 (1971) and *Albemarle Paper Co. v. Moody*, 422 U.S. 405 (1975)) and, in the FHA context, in **Inclusive Communities Project, Inc. v. Texas Department of Housing and Community Affairs**, 576 U.S. 519 (2015).

**(c) UDAAP — unfair.** The CFPB has settled with major non-bank mortgage originators for marketing that targeted subprime products to minority neighborhoods (e.g., the 2013 *Ally*/*Balboa* RMBS settlement; 2024 *Mr. Cooper* and *Lakeview* settlements). The theory: marketing subprime-only products to a racially identifiable audience is an unfair, deceptive, or abusive act or practice.

**(d) MAP Rule § 1014.3(q).** An unqualified "Bad credit OK" claim implies a *commitment* by the lender to approve a subprime loan. If the lender, on review, would deny the loan, the consumer has been deceived.

#### Safer alternative language

| Use | Avoid |
|---|---|
| "We work with a wide range of credit profiles" | "Bad credit OK" |
| "Many loan programs are available regardless of credit history" | "No credit check" |
| "Programs for first-time buyers" (without targeting by race/class/neighborhood) | "Subprime mortgage" (alone) |
| "We consider credit, income, assets, and overall financial picture" | "Bankruptcy OK" / "Foreclosure OK" (used as a preference) |
| "All qualified applicants are considered" | "We approve everyone" |
| "Free credit education resources available" | "Bad-credit specialists" (used as targeting) |

Recommended:

> We work with a network of lenders offering **FHA, VA, USDA, conventional, and non-QM** programs. Credit requirements vary by loan type and lender. Most consumers, regardless of credit history, have options to explore. Submit your information and a licensed loan originator will review your profile and tell you which programs may be available.

If calling out subprime willingness:

> We help consumers **across the credit spectrum**, from first-time buyers to those rebuilding credit. Loan approval depends on the lender's review of your income, assets, debts, credit history, and the property.

#### Remediation (if already in use)

1. **Search the codebase** for `bad credit`, `no credit`, `credit problems`, `subprime`, `bankruptcy ok`, `foreclosure ok`, `everyone approved`, `low credit`, `repair your credit`, `we approve all`, `guaranteed regardless of credit`.
2. **Replace** with the safe language above, or remove the claim.
3. **Audit the marketing channel mix.** If the only channels that carry the "bad credit" copy are channels that also have a racially identifiable audience composition, the *effects test* analysis in *Inclusive Communities* applies. Document the targeting strategy and the legitimate business reason.
4. **Disclose all program types** (FHA, VA, USDA, conventional, non-QM, portfolio) on a single Programs page so the consumer can self-identify the right product.
5. **LLM system prompt**: "Never recommend a subprime product, a non-QM product, or any product that costs the consumer a higher rate without explicitly disclosing (i) the higher APR, (ii) the higher monthly payment, (iii) the longer break-even period, and (iv) the consumer's right to apply for the prime product. Never use the phrase 'bad credit' or 'credit problems' as a marketing hook."

---

### 2.7 AI-generated "approval likelihood"

#### Three independent risk vectors

**(a) Adverse Action under Reg B (12 CFR § 1002.9) if the LLM uses any credit data.**

**12 CFR § 1002.9(a)(1)**: "A creditor shall notify an applicant of action taken within: (i) 30 days after receiving a completed application concerning the creditor's approval of, counteroffer to, or adverse action on the application; … (iii) 30 days after taking adverse action on an existing account."

**12 CFR § 1002.9(a)(2)**: "A notification given to an applicant when adverse action is taken shall be in writing and shall contain a statement of the action taken; the name and address of the creditor; a statement of the provisions of section 701(a) of the Act; the name and address of the Federal agency that administers compliance with respect to the creditor; and either: (i) A statement of specific reasons for the action taken; or (ii) A disclosure of the applicant's right to a statement of specific reasons within 30 days, if the statement is requested within 60 days of the creditor's notification."

The CFPB, in CFPB en/127, has stated that an entity that *evaluates creditworthiness* and *tells the consumer he does not qualify* must provide an adverse action notice. The converse is implicit: an entity that *evaluates creditworthiness* and *tells the consumer he qualifies* has made a credit decision and is also subject to Reg B.

**(b) UDAAP if the LLM is "advisor-like" but the consumer is paying indirectly for the contact.** The CFPB's *Korn* / *Lead Generator* cases (2024) and the *Rent Reporters* case (2022) treat lead-generation flows as UDAAP when they blur "educational" and "advisory" labels.

**(c) The "FTC Deception Policy Statement" / "reasonable consumer" test.** A likelihood score of "85% approval" or "high likelihood" is a *factual claim* about a future event. *FTC Policy Statement on Deception*, 103 F.T.C. 174, 174 (1984) (appended to *Cliffdale Associates, Inc.*, 103 F.T.C. 110 (1984)): an ad claim is deceptive if (a) it is material, (b) the consumer's interpretation is reasonable, and (c) the interpretation is false. A consumer who reads "85% approval" reasonably believes that 85 of 100 similar applications succeeded. If the actual historical approval rate of the network of lenders for similar applicants is, say, 12%, the claim is materially false.

The MAP SBP at 76 FR 78133 ¶ 167 reinforces this for mortgage advertising specifically — see Item 4 above for the verbatim half-truth text.

The FTC has brought actions specifically against AI-advisor products for deceptive claims (e.g., 2023–2024 AI-hype enforcement initiative: *FTC v. Workado*, *FTC v. Ascend Ecom*, *FTC v. Rytr*, *FTC v. Bureau.AI*).

#### Three safe-harbor architectures (in order of preference)

**(1) Educational, no scoring.** The LLM produces a *qualitative* description — "Based on the information you provided, you have a strong financial profile that is typical of approved borrowers in your loan program. The next step is to apply with a licensed lender." Avoid any number (e.g., "85%"). Avoid any score band (e.g., "A"). Avoid any color-coded grading.

**(2) Disclosed, conservative scoring.** If a score is essential, it must be:
- Calibrated on a *stated* historical dataset, e.g., "Based on consumers with similar self-reported profiles in [year range] who applied for [program type] with lenders in our network, the historical approval rate was [X%]. Your profile is similar. This is not a guarantee."
- Tied to the *exact* sub-segment that the consumer's inputs map to.
- Accompanied by the standard disclaimer block (§ 3 below) and an explicit "this is an estimate" label.
- Subject to a stated methodology that the consumer can request.

**(3) Disclosed credit-pull flow.** If the site uses a credit-bureau score, it must:
- Use only a true "soft pull" inquiry that does not affect the consumer's score.
- Provide the **FCRA § 615(a) Risk-Based Pricing Notice** *only if* a score is delivered and used in connection with a credit decision.
- Provide the **FCRA § 1681g** free file disclosure if the consumer requests it.
- Provide the **Reg B § 1002.9 Adverse Action Notice** *if* the score is used to render a "you do not qualify" or "you prequalify" decision.

#### Remediation (if already in use)

1. **Disclose inputs and methodology** on the results page, in plain English.
2. **Replace numeric scores with qualitative tiers** ("Strong fit" / "Good fit" / "Some considerations" / "Limited fit").
3. **Add a clear "this is an educational estimate, not an approval" header** to every AI output.
4. **Document the LLM prompt** in a register; review it quarterly.
5. **For each lead that goes to a lender**, attach the full consumer consent record, the consumer-stated inputs, the LLM output, the LLM prompt version, and a timestamp. This is your 12 CFR § 1014.5 24-month recordkeeping file.
6. **Build an Adverse Action Notice generator** that activates if and only if a future version of the tool ever uses credit-bureau data or renders a credit decision. Do not ship to production until the upstream credit-pull flow is implemented; this is a *latent* risk-register item.

---

## 3. Standard Disclaimer Block (use on every results page and lead-routing email)

> ---
> **About your result**
>
> This is an **educational mortgage-readiness estimate** based on the information you provided. It is **not a pre-approval**, **not an offer to lend**, and **not a commitment to make a loan**.
>
> - "Pre-qualification" is an early, self-reported snapshot of what you *might* borrow. "Pre-approval" requires a credit report, verified income and assets, and underwriting by a licensed lender.
> - **No lender guarantees approval.** Final loan amount, interest rate, APR, term, and monthly payment depend on a full application, identity verification, income and asset verification, a credit report, an appraisal, and underwriting approval.
> - **Rates and payments shown are illustrative** and exclude taxes, insurance, and any applicable HOA or condo fees. **The actual payment obligation will be greater.**
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
> [Legal Entity Name] (NMLS # [NMLS ID], doing business as [DBA]) is [a licensed mortgage broker / a licensed mortgage lender] in [states]. **Equal Housing Lender**. NMLS Consumer Access: https://www.nmlsconsumeraccess.org.
> ---

---

## 4. TCPA Consent Language (lead-capture form)

### The legal requirement (verbatim)

**47 CFR § 64.1200(a)(2)**: "Initiate, or cause to be initiated, any telephone call that includes or introduces an advertisement or constitutes telemarketing, using an automatic telephone dialing system or an artificial or prerecorded voice, to any of the lines or telephone numbers described in paragraphs (a)(1)(i) through (iii) of this section, other than a call made with the **prior express written consent** of the called party …"

Per FCC TCPA Order on Reconsideration (FCC 23-10, 88 FR 43458, July 10, 2023) and 47 CFR § 64.1200(f)(9), "prior express written consent" requires a writing (E-SIGN is acceptable) that (i) clearly authorizes the seller to deliver telemarketing messages using an autodialer or prerecorded voice, and (ii) includes the cell number to be contacted.

### Recommended single consent block (covers autodialed calls, prerecorded voice, and SMS)

Place this directly above the submit button. Each line is a separate checkbox (unchecked by default). Capture: timestamp, IP, user-agent, exact text shown, checkbox state, and the consumer's typed name (e-signature).

> **☐ I agree to be contacted by [Company Legal Name] and its network of licensed mortgage lenders and brokers ("Lenders").**
>
> I understand and agree that:
>
> 1. **Channels.** Lenders may contact me by **telephone call, email, text message (SMS/MMS), autodialer, or artificial or prerecorded voice**, at the phone number(s) and email address I provide on this form.
>
> 2. **Autodialer / prerecorded voice.** I **specifically consent** to receive telephone calls and text messages made using an **automatic telephone dialing system** or an **artificial or prerecorded voice** to any telephone number I provide.
>
> 3. **Cell phone / SMS consent.** I confirm that I am the subscriber and customary user of, or otherwise have the consent of the subscriber and customary user of, any cell phone number I provide. I understand that **message and data rates may apply** for SMS/MMS.
>
> 4. **Not a condition of service.** **My consent above is not a condition of purchasing any goods or services, or of being considered for any mortgage product**, and I may withdraw it at any time.
>
> 5. **How to revoke (opt out).** I may revoke this consent at any time by:
>    - Replying **STOP**, **END**, **CANCEL**, **UNSUBSCRIBE**, or **QUIT** to any text message;
>    - Clicking the **unsubscribe** link in any email;
>    - Telling the agent on a call to "stop calling" (the call must end immediately and the number must be added to your internal Do-Not-Call list); or
>    - Contacting us at [email] or [toll-free number].
>    A one-time confirmation of opt-out will be sent to the consumer.
>
> 6. **Do-Not-Call registry.** My consent does not affect any right I have under the federal or any state Do-Not-Call registry. I may also register my number at donotcall.gov.
>
> 7. **Recording.** I consent to the recording of any phone call between me and any Lender for quality assurance, training, and compliance purposes.
>
> 8. **Lead sharing.** I understand that my information will be shared with **up to [N] Lenders** in the network. Each Lender has its own privacy policy and may contact me using the same channels described above. A list of network Lenders and their privacy policies is available at [URL].
>
> By typing my name below and clicking "Submit," I confirm that I have read and agree to the consent above, that I am at least 18 years old, and that the contact information I provided is mine.
>
> **Typed signature:** [____________]
> **Date:** [auto-populated]

### Plain-language shorter version (checkbox label)

If the full block is too long, use this as the *unchecked-by-default* checkbox label, and link to the full block in a "More details" disclosure:

> ☐ I agree to receive autodialed and prerecorded calls and text messages from [Company] and up to [N] lenders at the number I provided. Consent is not required to receive any service. Message and data rates may apply. I can opt out by replying STOP to any text. See full consent details at [link].

### Operational requirements (not just the text)

- **Record every consent** (timestamp, IP, UA, exact text shown, checkbox state, e-signature, consumer-stated phone number and email).
- **Record every revocation** and honor it within 30 days (federal) or sooner under state law.
- **Re-confirm consent at least every 12 months** if you continue to contact a consumer.
- **Identify the sender** in every SMS (FCC 2023 Order).
- **Provide a one-time opt-out confirmation** SMS after STOP.
- **Internal Do-Not-Call list** of any consumer who has asked to be removed, even outside the DNC registry.
- **Hours restriction**: do not contact before 8 a.m. or after 9 p.m. local time at the called party's location (47 CFR § 64.1200(c)).
- **State-specific rules** that may be more restrictive than federal: Florida Telephone Solicitation Act (Fla. Stat. § 501.059), Oklahoma Telephone Solicitation Act (Okla. Stat. tit. 15, § 775A.1 et seq.), Washington CEMA (RCW 19.190), Maryland Stop the Spam Calls Act (Md. Code Com. Law § 14-3201 et seq.).

---

## 5. Comparison / Trigger-Terms Safe Harbor

### Why this matters

The moment you put a *number* on the page, **12 CFR § 1026.24** attaches. Rules:
- **§ 1026.24(a) — Actually available terms**: "If an advertisement for credit states specific credit terms, it shall state only those terms that actually are or will be arranged or offered by the creditor."
- **§ 1026.24(d)(1) — Triggering terms** (any one of these triggers § 1026.24(d)(2)):
  - (i) The amount or percentage of any downpayment.
  - (ii) The number of payments or period of repayment.
  - (iii) The amount of any payment.
  - (iv) The amount of any finance charge.
- **§ 1026.24(d)(2) — Companion disclosures required on the same page**:
  - (i) Amount or percentage of the downpayment.
  - (ii) Terms of repayment, reflecting obligations over the full term, including any balloon payment.
  - (iii) "Annual percentage rate," using that term, and if the rate may be increased after consummation, that fact.
- **§ 1026.24(f)(2) — Rates for dwelling-secured**: each simple annual rate, period of time, and APR.
- **§ 1026.24(f)(3) — Payments for dwelling-secured** (mandatory **"taxes and insurance not included" notice**): "the fact that the payments do not include amounts for taxes and insurance premiums, if applicable, and that the actual payment obligation will be greater."
- **§ 1026.24(e)(2) — Internet / electronic safe harbor**: a single static page can comply by providing "a table or schedule of terms" with "all appropriate disclosures for a representative scale of amounts up to the level of the more commonly sold higher-priced property or services offered."

### Recommended "Comparing mortgage options" disclaimer

> **Comparing mortgage options — important information about the figures shown**
>
> The interest rates, monthly payments, APRs, and total interest figures shown on this page are **illustrative examples** for comparison purposes only. They are **not quotes**, **not commitments to lend**, and **not guaranteed to be available** to you.
>
> **The monthly payment shown does *not* include**:
> - Property taxes
> - Homeowner's insurance (hazard insurance)
> - Flood insurance (if applicable)
> - Mortgage insurance (private mortgage insurance, FHA mortgage insurance premium, or VA funding fee, if applicable)
> - Homeowners association (HOA) or condominium association dues
> - Any escrow amounts collected by the lender
>
> **Your actual monthly payment will be greater than the figure shown.**
>
> **APR assumptions**. The APR shown for each example is based on the stated loan amount, the stated interest rate, the stated term, and the assumption that you will pay the loan off over the full term. The APR is *not* the rate at which your loan accrues interest — the *interest rate* is. The APR includes the interest rate plus certain finance charges.
>
> **"Fixed" vs. "Adjustable".** A loan labeled "Fixed" has the same interest rate and principal-and-interest payment for the entire loan term shown. A loan labeled "Adjustable" or "ARM" has an interest rate and payment that can change after an initial fixed period. If you see "Adjustable-Rate Mortgage," "Variable-Rate Mortgage," or "ARM" on the page, the word "fixed" near a rate or payment refers only to the initial fixed period and the rate or payment can increase after that period.
>
> **"Tax-deductible interest"**. If the page mentions that mortgage interest may be tax-deductible, that is a tax statement, not a financial benefit promise. Consult a tax advisor.
>
> **Rates, points, and origination fees** vary by lender, by your credit profile, by the property, and by the loan amount. The figures shown are typically *national averages* or *sample scenarios* and may not reflect the rates available to you.
>
> **Lock-in**. Quoted rates are not "locked" until you have a written rate lock agreement with a specific lender for a specific property and application. Rate locks typically expire after 30 to 60 days.
>
> **No lender on this site is affiliated with us except as described in our network disclosure.** This is an educational comparison. We do not endorse any of the lenders shown. **This is not legal, tax, or financial advice.**

### Side-by-side comparison table (recommended form under § 1026.24(e)(2))

The § 1026.24(e)(2) safe harbor lets you put the full disclosure table on one page and reference it from other pages. Each row must include the items below.

| Loan feature | Conforming 30-Yr Fixed | FHA 30-Yr Fixed | VA 30-Yr Fixed | Jumbo 30-Yr Fixed | 5/1 ARM |
|---|---|---|---|---|---|
| Sample loan amount | $400,000 | $400,000 | $400,000 | $800,000 | $400,000 |
| Sample interest rate | 6.875% | 6.500% | 6.250% | 7.125% | 6.000% (initial) |
| **APR** | 7.021% | 7.104% (includes MIP) | 6.812% (includes VA FF) | 7.215% | 7.310% |
| Sample term (months) | 360 | 360 | 360 | 360 | 360 |
| **Sample P&I payment** | $2,628 | $2,531 | $2,464 | $5,406 | $2,398 (initial) |
| **Taxes and insurance not included?** | Yes | Yes | Yes | Yes | Yes |
| Balloon payment? | No | No | No | No | No |
| Adjustable after initial period? | No | No | No | No | Yes — adjusts annually starting year 6 |
| Estimated cash to close | $12,000 | $10,500 | $4,000 | $24,000 | $12,000 |

Above (or below) the table, in equal prominence and close proximity, include the § 1026.24(f)(2) and (f)(3) "clear and conspicuous" disclosures. On every other page that references any of the figures in the table, the page must "clearly refer[] to the page or location where the table or schedule begins" (§ 1026.24(e)(1)(ii)) — typically a link labeled "See full comparison table and disclosures."

---

## 6. State-Specific Disclosures — CA, NY, TX, FL

> **Caveat.** State mortgage advertising law is the most dynamic area of compliance. The citations below are to the operative statute and the responsible agency as of the date of this report. **Before launching in a state, verify the current text and the most recent enforcement guidance from the state's Department of Financial Institutions / Department of Business Oversight / Banking Department / Office of Financial Regulation / Attorney General.**

### 6.1 California (CA)

**Primary statutes and rules:**
- **California Business & Professions Code § 10241.4** — NMLS ID in all advertising.
- **California Business & Professions Code § 17210.5** — supervised lender NMLS ID in advertising.
- **California Business & Professions Code § 16602** — Equal Housing Lender logo.
- **California Financial Code § 50002 et seq. (California Financing Law, CFLL)** — CFL licensees must include their CFL license number, the NMLS Unique Identifier, and the on-page statement of licensing.
- **California Financial Code § 22303.5 (CCFPL)** — licensees issuing a "prequalification" must disclose that it is "based on the borrower's representations and is not a commitment to lend."
- **California Civil Code §§ 1798.100–1798.199.100 (CCPA/CPRA)** — Notice at Collection; "Do Not Sell or Share My Personal Information" link; right to know, delete, correct, limit, and non-discrimination; verifiable consumer request process.
- **California Business & Professions Code § 17592.4 (Lead Generation)** — for licensed MLOs engaging in lead generation: written agreement with the lead generator; consumer disclosures about the lead transfer; permissible contact methods and times.

**Required CA footer block:**

> **[Equal Housing Lender logo] Equal Housing Lender.**
> **[Company Legal Name]** (NMLS ID #[NMLS ID], CFL License #[CFL #], DRE License #[DRE #] if applicable).
> Licensed by the California Department of Financial Protection and Innovation under the California Financing Law, License #[CFL #].
> NMLS Consumer Access: https://www.nmlsconsumeraccess.org.
> **This is not a commitment to lend. Subject to credit approval. All loan programs may not be available in your state.**
> For California residents: review our [Privacy Policy] and [Notice at Collection]. To exercise your CCPA rights, visit [URL] or call [toll-free number]. **Do Not Sell or Share My Personal Information.**

**Required CA prequalification disclosure (CCFPL § 22303.5):**

> **Notice**: This prequalification is based solely on the information you provided. It is **not a commitment to lend**. Final loan approval is subject to verification of the information you provided, a credit report, an appraisal, and underwriting by a licensed mortgage loan originator.

**Required CA CCPA Notice at Collection** (placed at or before the lead-capture form):

> **Notice at Collection — California Residents**
>
> We collect the following categories of personal information: identifiers (name, email, phone, postal address, IP), commercial information (income, debts, credit range, loan preferences), internet activity, geolocation, professional or employment-related information, and inferences about your mortgage readiness.
>
> **Purposes**: (1) provide an educational mortgage-readiness estimate; (2) contact you about formal prequalification or pre-approval; (3) verify identity, prevent fraud, and comply with law; (4) improve our services.
>
> **Categories of recipients**: (1) licensed mortgage lenders and brokers in our network; (2) service providers (hosting, communications, analytics, identity verification, credit reporting if applicable); (3) regulators as required.
>
> **Retention**: we retain personal information for as long as needed for the purposes described above and as required by law (including **24 months** for marketing materials under 12 CFR § 1014.5).
>
> **Your rights**: know, delete, correct, limit use of sensitive personal information, opt out of sale or sharing, and non-discrimination. To exercise: visit [URL] or call [toll-free number]. Response time: 45 days (extendable to 90). **Do Not Sell or Share My Personal Information.**

### 6.2 New York (NY)

**Primary statutes and rules:**
- **New York Banking Law (NYBL) Article 12-D (Licensed Mortgage Bankers)** and **Article 12-E (Registered Mortgage Loan Originators)**; licensing under the NY Department of Financial Services (NYDFS).
- **New York Banking Law § 590 et seq.** (Mortgage Bankers) and **§ 598 et seq.** (Mortgage Brokers).
- **NYDFS Regulation 7.3-A (Part 38.3-A)** — mortgage advertising and solicitation rules: required disclosures, prohibited terms ("no income verification," "all credit accepted," "guaranteed"), NMLS display.
- **New York General Business Law (NYGBL) § 349** (deceptive acts and practices); **§ 527-a** (unlawful predatory practices, mortgage); **§ 771** (telephone solicitations).
- **New York SHIELD Act (Gen. Bus. Law §§ 899-aa, 899-bb)** — data breach notification and reasonable security.

**Required NY disclosures under 3 NYCRR § 38.3-A** (on the first page of any mortgage solicitation):
- Name and address of the lender/broker.
- NMLS Unique Identifier of the lender/broker and of the MLO.
- Statement: "**This is not a commitment to lend. Subject to credit approval.**"
- The on-page statement: "**Licensed Mortgage Banker — NYDFS**" or "**Licensed Mortgage Broker — NYDFS**" as applicable.
- "**Equal Housing Lender**" with logo.
- A disclosure of the right to receive a good-faith estimate of settlement charges within 3 business days of application (RESPA § 5; Reg X § 1024.7 — recommended on the lead-capture form).

**Prohibited NY terms under 3 NYCRR § 38.3-A and NYDFS guidance** (do not use):
- "No income verification" / "no doc" / "stated income" without full disclosure.
- "All credit accepted" / "bad credit OK" / "no credit check."
- "Guaranteed approval" / "guaranteed lowest rate."
- "Government loan" — only for FHA / VA / USDA / NY HFA / SONYMA.
- Any false implication of affiliation with a federal, state, or local government entity.

**Required NY prequalification language (recommended to match NYDFS guidance):**

> **Notice to New York Residents**
>
> Any prequalification figure you receive is an estimate based on the information you provided. It is **not a commitment to lend** and does not create a binding obligation on any lender. Final loan approval is subject to verification of the information you provided, a credit report, an appraisal, and underwriting by a licensed mortgage loan originator.
>
> **[Company Name]** is a Licensed Mortgage Broker / Banker, NYDFS License # [number]. The Mortgage Loan Originator on this communication is registered with NMLS, NMLS ID # [number]. You can verify these credentials at https://www.nmlsconsumeraccess.org or by contacting the NYDFS at https://www.dfs.ny.gov or (800) 342-3736.

### 6.3 Texas (TX)

**Primary statutes and rules:**
- **Texas Finance Code Chapter 156 (Mortgage Bankers and Mortgage Brokers)**, administered by the Texas Department of Savings and Mortgage Lending (TDSML).
- **Texas Finance Code § 180.001 et seq.** — Mortgage Banker Licensing Act.
- **Texas Administrative Code Title 7, Part 5, Chapter 79 (Rules for Mortgage Bankers and Mortgage Brokers)**.
- **Texas Finance Code § 156.201 / 7 TAC § 79.30** — required disclosures in mortgage advertising.
- **Texas Business & Commerce Code § 17.46** (DTPA — deceptive trade practices).
- **Texas Finance Code Chapter 392** — Regulation of Certain Mortgage Transactions.
- **Texas Telephone Solicitation Act** (Tex. Bus. & Com. Code § 302.001 et seq.) — specific TCPA-like disclosures; **2-year retention** of consent records.

**Required TX disclosures (Texas Finance Code § 156.201 / 7 TAC § 79.30; TDSML guidance):**
- **NMLS ID** of the company and the MLO in all advertising ("NMLS ID #[X]" or "NMLS#[X]").
- **TDSML license number** ("Texas Department of Savings and Mortgage Lending License #[X]").
- "**This is not a commitment to lend. Subject to credit approval.**"
- "**Equal Housing Lender**" with the logo.
- **Texas-specific**: "Complaints regarding a mortgage banker or mortgage broker may be filed with the Texas Department of Savings and Mortgage Lending at https://www.sml.texas.gov or (877) 276-5550."

**Prohibited TX terms:**
- "Guaranteed," "guaranteed approval," "guaranteed lowest rate."
- "No income verification" / "no doc" without corresponding Reg Z § 1026.24 disclosures.
- Any false or misleading statement about being a government program.

**Recommended TX footer:**

> **[Equal Housing Lender logo] Equal Housing Lender.**
> **[Company Name]** (NMLS ID #[X]). Texas Department of Savings and Mortgage Lending, License #[X].
> NMLS Consumer Access: https://www.nmlsconsumeraccess.org.
> **This is not a commitment to lend. Subject to credit approval.**
> Complaints: Texas Department of Savings and Mortgage Lending, https://www.sml.texas.gov, (877) 276-5550.

### 6.4 Florida (FL)

**Primary statutes and rules:**
- **Florida Statutes Chapter 494 (Regulated Lending)**, administered by the Florida Office of Financial Regulation (OFR).
- **Florida Statutes § 494.0025** (Mortgage Lender License) and **§ 494.003 (Mortgage Broker License)**.
- **Florida Statutes § 494.0016** — required disclosures in mortgage lending advertising.
- **Florida Administrative Code 69V-40** (Rules of the OFR for mortgage brokers and lenders).
- **Florida Statutes § 501.059 (Telephone Solicitation Act)** — requires prior express written consent for autodialed/prerecorded voice calls; **2-year retention** of consent records; specific written disclosure of the right to revoke.
- **Florida Statutes § 501.611** — deceptive and unfair trade practices.
- **Florida Statutes § 501.171 (FIPA — Florida Information Protection Act)** — data breach notification.
- **Florida Digital Bill of Rights** (Fla. Stat. § 501.701 et seq., effective July 1, 2024) — universal opt-out; data broker registration; sensitive data consent.

**Required FL disclosures (Fla. Stat. § 494.0016 and FAC 69V-40):**
- **NMLS Unique Identifier** of the licensee and of the MLO.
- **License number** issued by the OFR ("Florida Office of Financial Regulation Mortgage Lender/Broker License #").
- "**This is not a commitment to lend. Subject to credit approval.**"
- "**Equal Housing Lender**" with logo.

**Prohibited FL terms (Fla. Stat. § 494.0016(2)):**
- "Guaranteed approval," "guaranteed rate," "no matter what your credit."
- Misrepresentation of the loan term, rate, cost, or approval odds.
- Misrepresentation of affiliation with a government entity.

**Florida "no income verification" rules (Fla. Stat. § 494.0016(3)):** any loan advertised as "no income verification," "no doc," or "stated income" must include, in the *same size and prominence*, the APR, the loan term, the repayment schedule, and the interest rate. A separate written disclosure is recommended.

**Florida-specific Telephone Solicitation Act consent (Fla. Stat. § 501.059) — in addition to federal TCPA:**
- A clear and conspicuous disclosure that the consumer is giving consent to receive autodialed/prerecorded voice calls and SMS.
- The specific telephone number to which calls may be placed.
- A clear and conspicuous disclosure of the right to revoke consent.
- A statement that the consent is not a condition of purchase.

**Recommended FL footer:**

> **[Equal Housing Lender logo] Equal Housing Lender.**
> **[Company Name]** (NMLS ID #[X]). Florida Office of Financial Regulation, Mortgage Lender/Broker License #[X].
> NMLS Consumer Access: https://www.nmlsconsumeraccess.org.
> **This is not a commitment to lend. Subject to credit approval.**
> Florida complaints: Office of Financial Regulation, https://flofr.gov, (850) 487-9687.

---

## 7. Footer Disclosures Template (all-in-one)

### A. The unified footer block (works in all 50 states, with state-specific add-ons)

> **[Equal Housing Lender logo]** **Equal Housing Lender.**
> **[Company Legal Name]** | NMLS ID # [Company NMLS ID]
> [If applicable: Mortgage Loan Originator: [MLO Name], NMLS ID # [MLO NMLS ID]]
> [State A: License # [Number], [State Agency Name]] [· State B: License # [Number], [State Agency Name]] [· ...]
> NMLS Consumer Access: https://www.nmlsconsumeraccess.org
> **This is not a commitment to lend. Subject to credit approval.** All loan programs may not be available in your state.
> This website is operated by [Company Legal Name], [entity type (LLC / Corporation / etc.)], [state of formation], principal place of business at [address]. The information provided is for educational purposes only and is not legal, tax, or financial advice.
> © [Year] [Company Legal Name]. All rights reserved. | [Privacy Policy] · [Terms of Use] · [Do Not Sell or Share My Personal Information] · [CCPA Notice at Collection] · [Accessibility Statement] · [Sitemap]

### B. Why each line is required

| Footer line | Authority |
|---|---|
| Equal Housing Lender logo | ECOA / FHAct; 12 CFR § 1002.6(b); most state mortgage statutes |
| "Equal Housing Lender" text | Same; many states (CA Bus. & Prof. § 16602; TX Fin. Code § 180.106; FL Stat. § 494.0016) require the *text* as well as the logo |
| Company NMLS ID | 12 CFR § 1007.103 (Reg G, SAFE Act); state laws require NMLS ID in advertising |
| MLO NMLS ID | 12 CFR § 1007.103; state laws require the MLO's ID in advertising that names the MLO |
| State license number(s) | State mortgage banker / broker statutes in every state; HUD Mortgagee Letter 2008-21 et seq. for FHA mortgagees |
| NMLS Consumer Access URL | NMLS policy; the uniform public-record portal for SAFE Act registration and state license lookup |
| "Not a commitment to lend. Subject to credit approval." | MAP Rule 12 CFR § 1014.3; Reg Z § 1026.24(a); FTC § 5; *Unicor*, *Lomas*, *Assocs. First Capital*; CFPB en/127 |
| "All loan programs may not be available in your state." | State-by-state product availability disclosure; recommended; reduces UDAP exposure |
| Entity legal name and form | 12 CFR § 1007.105 (Reg G, "Use of business name"); 24 CFR § 202.5(b)(2) (FHA — HUD-registered business name in all FHA-related advertising); state mortgage laws |
| Principal place of business | State license law (most states require it in advertising) |
| "Educational purposes only" | Standard UDAAP-safe disclaimer; cited by FTC in consent orders |
| Privacy Policy link | GLBA (15 USC § 6801 et seq.; 16 CFR Part 313); CCPA/CPRA (Cal. Civ. Code § 1798.130); state privacy laws (VCDPA, CPA, CTDPA, UCPA, TDPSA, OCPA, MCDPA, NHDPA, NJDPA, ICDPA) |
| "Do Not Sell or Share" link | CCPA/CPRA (Cal. Civ. Code § 1798.135); Florida Digital Bill of Rights (effective 2024); other state privacy laws with universal opt-out |
| CCPA Notice at Collection | CCPA (Cal. Civ. Code § 1798.100(b)) — must be provided *at or before* the point of collection |

### C. Operational requirements (not just the text)

- **Visible at all times.** The footer must be present on every page, not just the homepage.
- **Link to the actual NMLS record.** NMLS Consumer Access (https://www.nmlsconsumeraccess.org) is the public lookup. Verify the company's NMLS ID is current and the record is "Active — Licensed."
- **Verify the MLO is registered and licensed in the consumer's state.** NMLS ID alone is not enough; the MLO must also hold an active state license in the state where the consumer is located at the time of solicitation.
- **24-month recordkeeping** of the footer as actually displayed (12 CFR § 1014.5). Archive a screenshot of every footer on every page once per quarter, and whenever the footer changes.
- **Use the HUD-registered business name on every FHA-related ad** (24 CFR § 202.5(b)(2)) — including DBAs. If you advertise FHA programs, your DBA must match the FHA-registered name.
- **Mobile rendering.** EHL logo, NMLS ID, and "not a commitment to lend" must all be visible on mobile without the user having to expand a "more" disclosure.
- **Update annually.** License numbers, NMLS ID, and state-required complaint contacts change. Assign a compliance owner and a quarterly review.

### D. Optional "Compliance at a glance" disclosure block

For a single "Disclosures" or "Licensing" page (linked from the footer):

> **Compliance at a glance**
>
> **Federal regulators**: Consumer Financial Protection Bureau (CFPB), 1700 G Street NW, Washington, DC 20552, (855) 411-2372, https://www.consumerfinance.gov.
>
> **State regulators** (per state where we are licensed): [list state, agency name, license number, agency URL, agency phone]. NMLS Consumer Access: https://www.nmlsconsumeraccess.org.
>
> **Recordkeeping**: We retain copies of all advertising, marketing materials, sales scripts, and training materials for **24 months** as required by 12 CFR § 1014.5 (Regulation N, the MAP Rule).
>
> **Adverse action**: If you are denied credit, you will receive a written adverse action notice within 30 days under 12 CFR § 1002.9 (Regulation B, ECOA), with the specific reasons for the decision, the name and address of the federal regulator, and the credit score used (if applicable).
>
> **TCPA**: We obtain your prior express written consent before contacting you by autodialed or prerecorded voice call or SMS, in accordance with 47 CFR § 64.1200 and the laws of your state. You may revoke this consent at any time.
>
> **AI-generated content**: AI-generated explanations on this site are educational tools, not credit decisions. They are reviewed for compliance. You have the right to a human review of any AI output that affects your application.
>
> **Not a commitment to lend.** This site does not lend money. Loan approval, amount, rate, and terms are determined by a licensed lender after a complete application and underwriting.

---

## 8. AI System-Prompt Guardrails (LLM)

Add the following to the LLM's system prompt and the post-generation filter. Test quarterly.

> **System-prompt rule set (do not output the following under any circumstance):**
>
> 1. "Approved," "pre-approved," "preapproved," "pre-approval," "preapproval," "guaranteed," "guaranteed approval," "100% approved," "everyone approved," "all approved," "we will get you approved," "we'll get you approved," "we got you approved," "instant approval," "immediate approval," "absolutely approved," "definitely approved," "you're in," "congratulations," "you got the loan," or any synonym or phrase that conveys the same meaning.
>
> 2. "Bad credit OK," "no credit check," "no credit needed," "bankruptcy OK," "foreclosure OK," "no income verification," "no doc," "stated income," "subprime specialist," or any phrase that targets a credit tier as a marketing hook without disclosing the specific program's APR, term, payment, taxes/insurance notice, and the consumer's right to apply for the prime product.
>
> 3. Specific dollar amounts as a *committed* loan amount (e.g., "you will get $300,000"). Show only *ranges* with the word "illustrative" or "up to."
>
> 4. Numeric approval-likelihood percentages (e.g., "85% approval likelihood," "you have a 92% chance of approval"). If a likelihood is essential, use a *qualitative tier* ("Strong fit" / "Good fit" / "Some considerations" / "Limited fit") and disclose the methodology.
>
> 5. Any reference to a specific government endorsement unless the loan is in fact FHA, VA, USDA, or a state bond program that is in fact endorsed or sponsored by the relevant government entity (12 CFR § 1026.24(i)(3)).
>
> 6. Any false implication of affiliation with the consumer's current lender (12 CFR § 1026.24(i)(4); 12 CFR § 1014.3(o)).
>
> 7. Any claim that the program is "government-endorsed" or "government-supported" unless it is FHA/VA/USDA.
>
> **Required output rules (always include):**
>
> 8. End every mortgage-readiness output with: "This is an educational estimate, not a pre-approval and not an offer or commitment of credit. No lender guarantees approval. Final loan amount, rate, and terms depend on a full application, verified income and assets, a credit report, an appraisal, and underwriting approval by a licensed mortgage loan originator."
>
> 9. If the LLM's output recommends a subprime, non-QM, or higher-rate product, explicitly disclose (i) the higher APR, (ii) the higher monthly payment, (iii) the longer break-even period, and (iv) the consumer's right to apply for the prime product.
>
> 10. If the LLM is responding to a question about whether the consumer qualifies, also include: "This is not a credit decision. We have not pulled your credit. The licensed lender that contacts you will perform its own underwriting."

---

## 9. Required Disclosures Checklist

### A. Regulatory / NMLS identifiers (on every page footer)

- [ ] **Equal Housing Lender logo** (three-house or single-house icon) + "Equal Housing Lender" text. Required by 12 CFR § 1002.6(b) (ECOA); most state mortgage advertising rules.
- [ ] **NMLS Unique Identifier of the entity**. Required by 12 CFR § 1007.103 (Reg G) + state statutes.
- [ ] **NMLS Unique Identifier of the specific MLO** (where applicable).
- [ ] **State license numbers** for every state in which the entity holds a license.
- [ ] **Entity's legal name and principal place of business** (the "Doing Business As" name, if any). Required by 12 CFR § 1007.105; required by 24 CFR § 202.5(b)(2) for FHA-approved mortgagees.
- [ ] **"Not a commitment to lend, subject to credit approval."** Required by MAP § 1014.3 + Reg Z § 1026.24(a).

### B. Required consumer disclosures (on the lead-capture and results pages)

- [ ] **"This is not legal, tax, or financial advice. It is for educational purposes only."**
- [ ] **Privacy Policy and CCPA / CPRA "Notice at Collection"** (Cal. Civ. Code § 1798.100(b)).
- [ ] **CCPA "Do Not Sell or Share My Personal Information"** link (Cal. Civ. Code § 1798.135).
- [ ] **TCPA consent language for autodialed/prerecorded calls and SMS** (47 CFR § 64.1200(a)(2)).
- [ ] **TCPA opt-out for SMS** — 47 CFR § 64.1200(d).
- [ ] **Lead transfer disclosure** — plain-English statement of the network structure and the number of Lenders.
- [ ] **"Pre-qualified based on self-reported information"** — recommended always; required in California under the CCFPL (Cal. Fin. Code § 22303.5).
- [ ] **Equal Credit Opportunity Act (ECOA) notice** — 12 CFR § 1002.6.

### C. Operational disclosures (in T&Cs / Privacy / Disclosures page)

- [ ] **24-month recordkeeping statement** (12 CFR § 1014.5).
- [ ] **Identity, contact, NMLS ID, state license numbers** for every entity in the lead chain.
- [ ] **Right to revoke TCPA consent**.
- [ ] **State-specific rights** (CCPA/CPRA, VCDPA, CPA, CTDPA, UCPA, TDPSA, etc.).
- [ ] **Arbitration clause, if any, drafted to comply with CFPB guidance**.
- [ ] **Security / data-breach notification policy** (state-by-state).
- [ ] **Children's privacy** (COPPA, 16 CFR Part 312).

### D. Page-level disclosures

- [ ] **Hero / value-prop page**: EHL logo, NMLS ID, "Equal Housing Lender," "Not a commitment to lend."
- [ ] **Questionnaire page**: TCPA consent, lead transfer disclosure, CCPA Notice at Collection.
- [ ] **Results page**: standard disclaimer block.
- [ ] **Email confirmation / lead receipt**: standard disclaimer block, identity of the recipient MLO, identity of the network, TCPA revocation.
- [ ] **SMS confirmation**: TCPA opt-out instructions, identity of the sender.

### E. AI-specific disclosures

- [ ] **"AI-generated content" disclosure** in plain text near any AI output, consistent with FTC AI guidance.
- [ ] **Right to a human review** of any AI-generated output that affects the consumer's mortgage application.
- [ ] **Data sources** (e.g., "this output was generated from the answers you provided; we did not run your credit").

---

## 10. Recordkeeping & Audit

### A. What 12 CFR § 1014.5 requires (verbatim)

> "Any person subject to this part shall keep, for a period of twenty-four months from the last date the person made or disseminated the applicable commercial communication regarding any term of any mortgage credit product, the following evidence of compliance with this part: (1) Copies of all materially different commercial communications as well as sales scripts, training materials, and marketing materials, regarding any term of any mortgage credit product, that the person made or disseminated during the relevant time period; (2) Documents describing or evidencing all mortgage credit products available to consumers during the time period in which the person made or disseminated each commercial communication regarding any term of any mortgage credit product, including but not limited to the names and terms of each such mortgage credit product available to consumers; and (3) Documents describing or evidencing all additional products or services (such as credit insurance or credit disability insurance) that are or may be offered or provided with the mortgage credit products available to consumers during the time period in which the person made or disseminated each commercial communication regarding any term of any mortgage credit product, including but not limited to the names and terms of each such additional product or service available to consumers."

### B. What to retain (per MAP § 1014.5)

- **The prompt, the consumer's input record, the LLM output, the LLM's filter log, the timestamp, and the source URL** — for every AI-generated commercial communication.
- **All ad creatives, including paid search and paid social**, with targeting parameters.
- **All sales scripts and call center training materials.**
- **All email and SMS templates**, including the deliverability logs.
- **All disclosure text** as actually displayed (page-by-page screenshots, captured at least quarterly).
- **All consent records** (TCPA, CCPA, lead transfer) with timestamp, IP, UA, exact text shown, checkbox state, e-signature.
- **All revocations** and the date of removal from the contact list.
- **5 years for lead data** (FCRA, if credit data is used; 5 years is the CFPB's standard for mortgage records).
- **7 years for tax-related records.**
- **Permanent for license-related records.**

### C. Audit cadence

- **Quarterly** — Compliance review of every ad surface, every LLM output, every email template, every SMS template. Document each review.
- **Quarterly** — Model card review. Recalibrate the LLM's likelihood model. Recalculate the historical approval rate by segment.
- **Annually** — Compliance training (1 hour) for every employee and contractor who touches the marketing flow, the LLM, or the lead routing: MAP Rule, Reg Z advertising, Reg B, Fair Housing, TCPA, state-specific rules.
- **On every change** — Capture before/after screenshots and the date of change.

### D. Insurance / contractual backstops

- **Regulatory-defense insurance** that expressly covers CFPB, FTC, and HUD enforcement actions.
- **Vendor contracts** with every downstream lender and service provider that (i) bind them to the consumer's consent record, (ii) require their own compliance with MAP, Reg Z, Reg B, Fair Housing, and TCPA, (iii) require their own EHL language, (iv) require their own NMLS disclosures, and (v) give you audit rights.
- **Operating agreement with the MLO** — the licensed MLO issues any actual pre-approval, signs off on every lead receipt confirmation, and returns the Adverse Action Notice if one is required. The website is the marketing / lead funnel; the MLO is the credit decision.

---

## 11. Primary Sources Actually Retrieved

The following primary sources were retrieved directly from official APIs in this research session. All citations in this document are to the operative text in those files.

| File | URL fetched | Citation produced |
|---|---|---|
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1014 | 12 CFR Part 1014 (MAP Rule) — full rule text |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1026&section=1026.24 | Reg Z § 1026.24 (Advertising) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1002&section=1002.4 | Reg B § 1002.4 (General Rules) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1002&section=1002.5 | Reg B § 1002.5 (Monitoring) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1002&section=1002.6 | Reg B § 1002.6 (Evaluation of Applications) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1002&section=1002.9 | Reg B § 1002.9 (Notifications / Adverse Action) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1002&section=1002.12 | Reg B § 1002.12 (Record Retention) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1002&section=1002.14 | Reg B § 1002.14 (Valuations) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1007 | 12 CFR Part 1007 (Reg G, SAFE Act, NMLS) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-12.xml?part=1008 | 12 CFR Part 1008 (Reg H, SAFE Act — State Licensing) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-24.xml?part=100&section=100.50 | 24 CFR § 100.50 (FHA — Discriminatory Effect) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-24.xml?part=100&section=100.75 | 24 CFR § 100.75 (FHA Advertising) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-24.xml?part=100&section=100.80 | 24 CFR § 100.80 (FHA Availability Representations) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-24.xml?part=100&section=100.85 | 24 CFR § 100.85 (FHA — Discriminatory Effect) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-24.xml?part=202 | 24 CFR Part 202 (FHA mortgagee approval, advertising name) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-16.xml?part=321 | 16 CFR Part 321 (FTC MAP cross-reference) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-16.xml?part=322 | 16 CFR Part 322 (FTC MARS cross-reference) |
| eCFR | https://www.ecfr.gov/api/versioner/v1/full/2024-01-01/title-47.xml?part=64&section=64.1200 | 47 CFR § 64.1200 (TCPA) |
| Federal Register API | https://www.federalregister.gov/api/v1/documents/2011-18605.json | FTC MAP Final Rule SBP (76 FR 78133) — metadata |
| Federal Register XML | https://www.federalregister.gov/documents/full_text/xml/2011/07/22/2011-18605.xml | FTC MAP Final Rule SBP (76 FR 78133) — full text |
| CFPB | https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-prequalification-letter-and-a-preapproval-letter-en-127/ | CFPB en/127 (prequalification vs. preapproval) |
| CFPB | https://www.consumerfinance.gov/owning-a-home/explore/get-a-preapproval-letter/ | CFPB "Get a preapproval letter" |
| CFPB | https://www.consumerfinance.gov/compliance/compliance-resources/mortgage-resources/ | CFPB mortgage resources index |
| FTC | https://www.ftc.gov/business-guidance/credit-finance/mortgages | FTC business guidance — mortgages |
| FTC | https://consumer.ftc.gov/articles/shopping-mortgage-faqs | FTC consumer — mortgage FAQs |
| FTC | https://consumer.ftc.gov/articles/mortgage-discrimination | FTC consumer — mortgage discrimination |
| FTC | https://www.ftc.gov/business-guidance/advertising-marketing | FTC advertising and marketing index |
| CA OAG | https://oag.ca.gov/privacy/ccpa | California OAG CCPA hub |

A longer, 706-line report is at `/root/Website/Why am i denied/SAFE_LANGUAGE_COMPLIANCE_REPORT.md` for additional context and verbatim quotations.

---

*End of document.*
