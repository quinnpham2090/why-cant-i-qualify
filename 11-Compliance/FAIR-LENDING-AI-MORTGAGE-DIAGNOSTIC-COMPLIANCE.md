# Fair-Lending & AI Compliance Report
## U.S. Consumer Mortgage Qualification Diagnostic Website Using AI to Produce an "Approval Likelihood" / Mortgage Readiness Assessment

> **Scope.** This report covers primary-source compliance obligations and enforcement risk for a website that (1) collects consumer financial inputs (income, debt, credit range, down payment, ZIP, etc.), (2) uses AI/ML to evaluate them and produce a score or "approval likelihood" or "mortgage readiness" assessment, and (3) captures leads. Citations are to the **statute**, **CFR**, **CFPB/HUD/DOJ guidance**, and **enforcement actions 2020–2026**, with verbatim quotes where the rule or guidance is dispositive.
>
> **One critical up‑front development.** On **April 22, 2026**, the CFPB issued a final rule that (a) eliminates the **disparate‑impact ("effects test") theory** under Regulation B / ECOA, and (b) narrows the **discouragement** prohibition. The rule is effective **July 21, 2026** (Document No. 2026-07804, 91 FR 21620). It does **not** eliminate Reg B coverage or the adverse-action requirements; it does materially change fair-lending litigation risk. The rule is heavily contested; the FTC and the federal prudential regulators have separately indicated they still expect supervised entities to test for AI bias. **Treat both regimes (effects-test liability and pre-rule compliance) as live exposure** until further court guidance. On the parallel FHA side, HUD has also proposed (Jan 14, 2026) to **remove its own 2013 discriminatory-effects implementing rule** (FR Doc 2026-00590), but the underlying FHA disparate‑impact theory recognized in **Inclusive Communities Project, Inc. v. TDHCA, 576 U.S. 519 (2015)** remains the governing Supreme Court doctrine.

---

## Table of Contents

1. [ECOA & Regulation B (12 CFR Part 1002) — when a "diagnostic" is a creditor](#1-ecoa--regulation-b)
2. [Adverse Action Notices under Reg B 12 CFR 1002.9 and CFPB Circulars 2022-03 / 2023-03](#2-adverse-action)
3. [CFPB AI/ML Guidance Catalog (Circulars, Joint Statements, Reports)](#3-cfpb-aiml-guidance)
4. [Fair Housing Act (42 USC 3601 et seq.) and 24 CFR Part 100](#4-fha)
5. [Disparate Impact and the 2026 Reg B Final Rule](#5-disparate-impact)
6. [Enforcement Actions 2020–2026 (CFPB / DOJ / HUD)](#6-enforcement)
7. [Safe Language, Disclaimers and Remediation for an AI Mortgage Diagnostic](#7-safe-language)
8. [Safe-Architecture: How to Test for Disparate Impact and Avoid Proxy Bias](#8-testing)
9. [State Law Add-Ons (CA, NY, CO, IL, NJ, MA) — protected classes and AI rules](#9-state)
10. [Compliance Checklist for a "Mortgage Readiness / Approval Likelihood" Website](#10-checklist)
11. [Source File Index](#11-sources)

---

<a id="1-ecoa--regulation-b"></a>
## 1. ECOA & Regulation B (12 CFR Part 1002) — When a "Diagnostic" Is a Creditor

### 1.1 Statute — Equal Credit Opportunity Act, 15 USC 1691 et seq.

ECOA (Title VII of the Consumer Credit Protection Act) makes it **"unlawful for any creditor to discriminate against any applicant, with respect to any aspect of a credit transaction"** on a prohibited basis (race, color, religion, national origin, sex, marital status, age, public-assistance income, and good-faith assertion of CCPA rights). ECOA also requires a creditor that takes adverse action to provide a **"statement of specific reasons"** for the action.

> **15 USC 1691(a)(1)** (as quoted by the 2026 final rule at 91 FR 21620): "It shall be unlawful for any creditor to discriminate against any applicant, with respect to any aspect of a credit transaction (1) on the basis of race, color, religion, national origin, sex or marital status, or age (provided the applicant has the capacity to contract); (2) because all or part of the applicant's income derives from any public assistance program; or (3) because the applicant has in good faith exercised any right under [the Consumer Credit Protection Act]."

### 1.2 Regulation B definitions — 12 CFR 1002.2 (key terms, verbatim from eCFR)

**"Creditor"** — 12 CFR 1002.2(l):
> "Creditor means a person who, in the ordinary course of business, regularly participates in a credit decision, including setting the terms of the credit. The term creditor includes a creditor's assignee, transferee, or subrogee who so participates. **For purposes of §§ 1002.4(a) and (b), the term creditor also includes a person who, in the ordinary course of business, regularly refers applicants or prospective applicants to creditors, or selects or offers to select creditors to whom requests for credit may be made.** A person is not a creditor regarding any violation of the Act or this part committed by another creditor unless the person knew or had reasonable notice of the act, policy, or practice that constituted the violation before becoming involved in the credit transaction. The term does not include a person whose only participation in a credit transaction involves honoring a credit card."

**"Applicant"** — 12 CFR 1002.2(e):
> "Applicant means any person who requests or who has received an extension of credit from a creditor, and includes any person who is or may become contractually liable regarding an extension of credit. For purposes of § 1002.7(d), the term includes guarantors, sureties, endorsers, and similar parties."

**"Application"** — 12 CFR 1002.2(f):
> "Application means an oral or written request for an extension of credit that is made in accordance with procedures used by a creditor for the type of credit requested. The term application does not include the use of an account or line of credit to obtain an amount of credit that is within a previously established credit limit. **A completed application means an application in connection with which a creditor has received all the information that the creditor regularly obtains and considers in evaluating applications for the amount and type of credit requested** (including, but not limited to, credit reports, any additional information requested from the applicant, and any approvals or reports by governmental agencies or other persons that are necessary to guarantee, insure, or provide security for the credit or collateral). The creditor shall exercise reasonable diligence in obtaining such information."

**"Adverse action"** — 12 CFR 1002.2(c):
> "(1) The term means: (i) A refusal to grant credit in substantially the amount or on substantially the terms requested in an application unless the creditor makes a counteroffer (to grant credit in a different amount or on other terms) and the applicant uses or expressly accepts the credit offered; (ii) A termination of an account or an unfavorable change in the terms of an account that does not affect all or substantially all of a class of the creditor's accounts; or (iii) A refusal to increase the amount of credit available to an applicant who has made an application for an increase.
> (2) The term does not include: (i) A change in the terms of an account expressly agreed to by an applicant; (ii) Any action or forbearance relating to an account taken in connection with inactivity, default, or delinquency as to that account; (iii) A refusal or failure to authorize an account transaction at point of sale or loan, except when the refusal is a termination or an unfavorable change in the terms of an account that does not affect all or substantially all of a class of the creditor's accounts, or when the refusal is a denial of an application for an increase in the amount of credit available under the account; (iv) A refusal to extend credit because applicable law prohibits the creditor from extending the credit requested; or (v) A refusal to extend credit because the creditor does not offer the type of credit or credit plan requested."

**"Prohibited basis"** — 12 CFR 1002.2(z):
> "Prohibited basis means race, color, religion, national origin, sex, marital status, or age (provided that the applicant has the capacity to enter into a binding contract); the fact that all or part of the applicant's income derives from any public assistance program; or the fact that the applicant has in good faith exercised any right under the Consumer Credit Protection Act or any state law upon which an exemption has been granted by the Bureau."

(All text above is from the official eCFR at https://www.ecfr.gov/current/title-12/section-1002.2 as displayed Aug 27, 2026.)

### 1.3 When does a "diagnostic" website become a Reg B "creditor"?

There are **three independent trigger paths**:

1. **"Regularly participates in a credit decision"** (12 CFR 1002.2(l)). If the site (a) scores/ranks consumers with the **same kind of inputs** a creditor would use to underwrite, (b) **outputs a "credit decision"** (denial, approval, tier, price) rather than a general educational estimate, and (c) does so on a recurring basis, the site is a creditor. The "approval likelihood" or "mortgage readiness" label is irrelevant if the underlying function is to make or materially influence a credit decision.

2. **"Regularly refers applicants or prospective applicants to creditors, or selects or offers to select creditors to whom requests for credit may be made"** (12 CFR 1002.2(l), parenthetical — applies to § 1002.4 only). A lead-generation site that **routes the user's data to specific lenders** is a creditor for purposes of the **prohibited‑discouragement** rule (§ 1002.4(b)) and the general rules on advertising and equal treatment (§ 1002.4(a)). **Townstone Financial** is the on‑point example (see § 6.1 below): CFPB alleged Townstone was a creditor under both the lead-routing prong and the credit-decision prong.

3. **Indirect creditor via "person who regularly selects or offers to select creditors."** Same as #2. A diagnostic site that **tells a user which lender they should apply to** (or hard-routes their lead) is squarely inside the "selects or offers to select creditors" prong.

> **Practical implication for a diagnostic site.** If your site (a) tells the user whether they are "approved," "likely approved," or "not approved" in a way the user (or downstream lenders) reasonably understand to be a credit decision, or (b) **matches or routes the user to a particular lender** based on their inputs, you are functionally a creditor for § 1002.4(a) and (b) — meaning the full scope of ECOA/Reg B rules below apply to the lead‑capture and advertising functions even if the score is branded "educational."

### 1.4 "Application" trigger — when is the user an "applicant"?

The user is an "applicant" the moment they make **"an oral or written request for an extension of credit that is made in accordance with procedures used by a creditor for the type of credit requested"** (12 CFR 1002.2(f)). The request does not need to be a Reg B "completed application"; even an **incomplete** application can trigger certain notice obligations. The CFPB has been explicit:

> **CFPB, "What's the difference between a prequalification letter and a preapproval letter?"** (last reviewed Dec 5, 2023): "In addition, even if you have not submitted a formal loan application, **a lender that evaluates your creditworthiness and tells you that you do not qualify for a prequalification or preapproval letter must provide you with an adverse action notice.**" (https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-prequalification-letter-and-a-preapproval-letter-en-1995/)

A "diagnostic" that **evaluates the user's creditworthiness** and **tells them they do not qualify** is, under CFPB's own published guidance, treated as having made an adverse-action-equivalent decision that requires the Reg B notice. The label "educational" does not extinguish the obligation if the substance is a creditworthiness evaluation that produces a denial‑equivalent signal to the user.

### 1.5 Regulation B § 1002.4(b) — Discouragement of applicants (and prospective applicants)

> "A creditor shall not make any oral or written statement, in advertising or otherwise, to applicants or prospective applicants that would discourage on a prohibited basis a reasonable person from making or pursuing an application." (12 CFR 1002.4(b))

**2026 amendment (effective July 21, 2026, 91 FR 21620):** the rule is narrowed to prohibit **"statements of intent to discriminate in violation of ECOA"** and is **"not triggered merely by negative consumer impressions."** A creditor can also direct encouraging statements to one group of consumers without triggering discouragement as to non-recipients. Despite the narrowing, the FTC and the federal prudential regulators and state AGs may still treat a marketing channel that excludes or steers protected classes as fair-lending risk under the FHA and ECOA **disparate-treatment** theory. The CFPB at 91 FR 21620 expressly preserved the disparate-treatment standard: "creditors are still liable under other antidiscrimination statutes such as the FHA and State laws similar to ECOA, so the incentives for covered persons to implement policies or engage in practices that lead to disparate impact or discouragement may be restricted."

> **Practical implication for a diagnostic site.** The site must not (i) require protected-class information to be entered before the diagnostic runs, (ii) display or default to images, copy, or examples that signal a preference, (iii) charge different prices or route different leads based on ZIP, race, ethnicity, religion, sex, or any other prohibited factor, or (iv) collect data on protected characteristics for any purpose not affirmatively permitted by Reg B § 1002.5 (and the April 2026 rule narrowed the affirmative defenses). See § 4 below for the FHA parallel.

### 1.6 Reg B § 1002.5 — collection of monitoring information (race, ethnicity, sex)

A creditor may ask for race/ethnicity/sex **only** for monitoring purposes, must note on the form that providing the information is **voluntary**, and must not use the information to make the credit decision. A diagnostic site that requests these fields as part of the input set is operating outside the Reg B safe harbor and triggering both a Reg B violation and a § 1002.4(b) discouragement/discrimination concern. **Do not request this information pre‑decision.** (See § 1002.5(b) and the related Official Interpretation 5(b)-1; current eCFR text at https://www.ecfr.gov/current/title-12/section-1002.5.)

### 1.7 The Townstone case (lead‑generation site, ECOA, advertising, "redlining")

> See § 6.1 for the full Townstone analysis. The case remains the most important precedent for lead‑generation / pre‑qualification sites, although the consent order was **vacated** at the joint motion of the CFPB and Townstone on March 26, 2025 (CFPB press release Mar 28, 2025, https://www.consumerfinance.gov/about-us/newsroom/cfpb-seeks-to-vacate-abusive-unjust-case-against-townstone/). The court **denied** the joint motion to vacate on June 12, 2025 (CFPB Enforcement Action page, https://www.consumerfinance.gov/enforcement/actions/townstone-financial-inc-and-barry-sturner/). The consent order therefore remained in effect post‑denial but is not relied on by current CFPB leadership. The Townstone allegations remain a useful roadmap of what the prior CFPB leadership believed constituted a violation.

---

<a id="2-adverse-action"></a>
## 2. Adverse Action Notices under Reg B § 1002.9 and CFPB Circulars 2022-03 / 2023-03

### 2.1 12 CFR 1002.9 — verbatim

> "(a)(1) **When notification is required.** A creditor shall notify an applicant of action taken within:
>  (i) 30 days after receiving a completed application concerning the creditor's approval of, counteroffer to, or adverse action on the application;
>  (ii) 30 days after taking adverse action on an incomplete application, unless notice is provided in accordance with paragraph (c) of this section;
>  (iii) 30 days after taking adverse action on an existing account; or
>  (iv) 90 days after notifying the applicant of a counteroffer if the applicant does not expressly accept or use the credit offered.
>
> (a)(2) **Content of notification when adverse action is taken.** A notification given to an applicant when adverse action is taken shall be in writing and shall contain a statement of the action taken; the name and address of the creditor; a statement of the provisions of section 701(a) of the Act; the name and address of the Federal agency that administers compliance with respect to the creditor; and either:
>  (i) A statement of specific reasons for the action taken; or
>  (ii) A disclosure of the applicant's right to a statement of specific reasons within 30 days, if the statement is requested within 60 days of the creditor's notification. The disclosure shall include the name, address, and telephone number of the person or office from which the statement of reasons can be obtained. If the creditor chooses to provide the reasons orally, the creditor shall also disclose the applicant's right to have them confirmed in writing within 30 days of receiving the applicant's written request for confirmation.
>
> (b)(1) **ECOA notice.** To satisfy the disclosure requirements of paragraph (a)(2) of this section regarding section 701(a) of the Act, the creditor shall provide a notice that is substantially similar to the following: The Federal Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to enter into a binding contract); because all or part of the applicant's income derives from any public assistance program; or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act. The Federal agency that administers compliance with this law concerning this creditor is [name and address as specified by the appropriate agency or agencies listed in appendix A of this part].
>
> (b)(2) **Statement of specific reasons.** The statement of reasons for adverse action required by paragraph (a)(2)(i) of this section must be specific and indicate the principal reason(s) for the adverse action. **Statements that the adverse action was based on the creditor's internal standards or policies or that the applicant, joint applicant, or similar party failed to achieve a qualifying score on the creditor's credit scoring system are insufficient.**" (Emphasis added.)

(Source: 12 CFR 1002.9, current eCFR, https://www.ecfr.gov/current/title-12/section-1002.9.)

### 2.2 When does the AI need to issue an adverse action notice?

**Trigger test.** A diagnostic site that is a "creditor" must provide a § 1002.9 notice when it (1) refuses to provide the requested service, (2) provides a materially less favorable result (e.g., "approval likelihood" below a published threshold such that the user is told the result is a denial), or (3) routes or steers the user to a different lender, rate, or product. The 30‑day clock starts when the site takes the action.

**Threshold problems for a "diagnostic" site:**
- If the site **always** shows a probability score and never says "denied," the formal § 1002.9 trigger may not be pulled, but the site may still be a creditor under § 1002.2(l) and the **CFPB may take the position that the score + routing = adverse action** (see the 2022-03 circular).
- If the site **sometimes** says "based on your inputs, you do not qualify," that statement **is** adverse action. The CFPB FAQ on prequalification (cited in § 1.4 above) is on point: a credit‑worthiness evaluation that tells the user they do not qualify triggers the notice.
- **The "right to a statement of specific reasons within 30 days"** is mandatory if the creditor chooses the alternative‑disclosure path (12 CFR 1002.9(a)(2)(ii)).

### 2.3 CFPB Circular 2022-03 — Adverse Action Notice Requirements in Connection With Credit Decisions Based on Complex Algorithms

> Source: 87 FR 35864 (June 14, 2022), FR Doc 2022-12729, https://www.federalregister.gov/d/2022-12729. Released by CFPB on its website May 26, 2022. Director Rohit Chopra, signing.

**Question Presented (verbatim):** "When creditors make credit decisions based on complex algorithms that prevent creditors from accurately identifying the specific reasons for denying credit or taking other adverse actions, do these creditors need to comply with the Equal Credit Opportunity Act's requirement to provide a statement of specific reasons to applicants against whom adverse action is taken?"

**Response (verbatim):** "Yes. ECOA and Regulation B require creditors to provide statements of specific reasons to applicants against whom adverse action is taken. Some creditors may make credit decisions based on certain complex algorithms, sometimes referred to as uninterpretable or 'black-box' models, that make it difficult—if not impossible—to accurately identify the specific reasons for denying credit or taking other adverse actions. The adverse action notice requirements of ECOA and Regulation B, however, apply equally to all credit decisions, regardless of the technology used to make them. Thus, ECOA and Regulation B do not permit creditors to use complex algorithms when doing so means they cannot provide the specific and accurate reasons for adverse actions."

**Key holdings (verbatim quotes from the Analysis section):**
- "Pursuant to Regulation B, a statement of reasons for adverse action taken 'must be **specific and indicate the principal reason(s) for the adverse action**.'" (quoting 12 CFR 1002.9(b)(2))
- "Regulation B explains that '[s]tatements that the adverse action was based on the creditor's internal standards or policies or that the applicant, joint applicant, or similar party failed to achieve a qualifying score on the creditor's credit scoring system are **insufficient**.'" (quoting 12 CFR 1002.9(b)(2))
- "The Official Interpretations to Regulation B explain that '[t]he specific reasons disclosed . . . must relate to and accurately describe the factors actually considered or scored by a creditor.'"
- "If the reasons listed on the forms are not the factors actually used, a creditor will **not** satisfy the notice requirement by simply checking the closest identifiable factor listed." (quoting 12 CFR Part 1002 App. C, Comment 4)
- "The reasons disclosed must relate only to those factors actually scored in the system. Moreover, no factor that was a principal reason for adverse action may be excluded from disclosure. **The creditor must disclose the actual reasons for denial (for example, 'age of automobile') even if the relationship of that factor to predicting creditworthiness may not be clear to the applicant.**" (quoting Supp. I, 12 CFR 1002.9 para. 9(b)(1)-4)
- "Creditors who use complex algorithms, including artificial intelligence or machine learning, in any aspect of their credit decisions must still provide a notice that discloses the specific principal reasons for taking an adverse action. Whether a creditor is using a sophisticated machine learning algorithm or more conventional methods to evaluate an application, **the legal requirement is the same: Creditors must be able to provide applicants against whom adverse action is taken with an accurate statement of reasons.**"
- "**A creditor cannot justify noncompliance with ECOA and Regulation B's requirements based on the mere fact that the technology it employs to evaluate applications is too complicated or opaque to understand. A creditor's lack of understanding of its own methods is therefore not a cognizable defense against liability for violating ECOA and Regulation B's requirements.**" (Final paragraph, Analysis.)

**Fn. 1 (verbatim):** "While some creditors may rely upon various post-hoc explanation methods, such explanations approximate models and creditors must still be able to validate the accuracy of those approximations, which may not be possible with less interpretable models."

> **Practical implication for a diagnostic site.** The Circular is dispositive: the site must be **able to enumerate the principal reasons** for any "low" or "denial" output. Black‑box AI that cannot produce feature‑level explanations is not a defense. Site owners must build (or contract for) **interpretability** of the model's principal adverse‑action drivers, in production, before launching the score.

### 2.4 CFPB Circular 2023-03 — Adverse Action Notification Requirements and Proper Use of the CFPB's Sample Forms Provided in Regulation B

> Source: 89 FR 27361 (April 17, 2024), FR Doc 2024-08003, https://www.federalregister.gov/d/2024-08003. Released by CFPB on its website Sept 19, 2023. Director Rohit Chopra, signing.

**Note on naming:** This is **the** CFPB Circular 2023-03 on adverse action and AI/complex credit models. There is **no separate CFPB Circular 2023-03 on automated valuation models (AVMs)**. The AVM "Quality Control Standards" rule is a separate **interagency proposed rule** issued jointly by the FRB, FDIC, NCUA, OCC, and CFPB on **June 1, 2023** (Request for Comment, https://www.consumerfinance.gov/about-us/newsroom/agencies-request-comment-on-quality-control-standards-for-automated-valuation-models-proposed-rule/). The 2024 AVM final rule was issued in July 2024 (see § 3.3 below).

**Question Presented (verbatim):** "When using artificial intelligence or complex credit models, may creditors rely on the checklist of reasons provided in CFPB sample forms for adverse action notices even when those sample reasons do not accurately or specifically identify the reasons for the adverse action?"

**Response (verbatim):** "**No**, creditors may not rely on the checklist of reasons provided in the sample forms (currently codified in Regulation B) to satisfy their obligations under ECOA if those reasons do not specifically and accurately indicate the principal reason(s) for the adverse action. Nor, as a general matter, may creditors rely on overly broad or vague reasons to the extent that they obscure the specific and accurate reasons relied upon."

**Key holdings (verbatim quotes from the Analysis):**
- "Reliance on the checklist of reasons provided in the sample forms will satisfy a creditor's adverse action notification requirements only if the reasons disclosed are specific and indicate the principal reason(s) for the adverse action taken."
- "Some creditors use complex algorithms involving 'artificial intelligence' and other predictive decision-making technologies in their underwriting models. These complex algorithms sometimes rely on data that are harvested from consumer surveillance or data not typically found in a consumer's credit file or credit application."
- "**A creditor therefore may not rely solely on the unmodified checklist of reasons in the sample forms provided by the CFPB if the reasons provided on the sample forms do not reflect the principal reason(s) for the adverse action. As explained in Regulation B, '[i]f the reasons listed on the forms are not the factors actually used, a creditor will not satisfy the notice requirement by simply checking the closest identifiable factor listed.'**" (quoting 12 CFR Part 1002 App. C, Comment 4)
- "if the principal reason(s) a creditor actually relies on is not accurately reflected in the checklist of reasons in the sample forms, it is the duty of the creditor—if it chooses to use the sample forms—to either modify the form or check 'other' and include the appropriate explanation"
- "**Specificity is particularly important when creditors utilize complex algorithms. Consumers may not anticipate that certain data gathered outside of their application or credit file and fed into an algorithmic decision-making model may be a principal reason in a credit decision**, particularly if the data are not intuitively related to their finances or financial capacity."
- "**For instance, if a complex algorithm results in a denial of a credit application due to an applicant's chosen profession, a statement that the applicant had 'insufficient projected income' or 'income insufficient for amount of credit requested' would likely fail to meet the creditor's legal obligations.**" (Concrete example, page 27362.)
- "**For example, if a creditor decides to lower the limit on, or close altogether, a consumer's credit line based on behavioral data, such as the type of establishment at which a consumer shops or the type of goods purchased, it would likely be insufficient for the creditor to simply state 'purchasing history' or 'disfavored business patronage' as the principal reason for adverse action.**" (Concrete example, page 27362.)
- "the creditor would likely need to disclose more specific details about the consumer's purchasing history or patronage that led to the reduction or closure, such as the type of establishment, the location of the business, the type of goods purchased, or other relevant considerations, as appropriate."
- "The CFPB has also made clear that adverse action notice requirements apply equally to all credit decisions, regardless of whether the technology used to make them involves complex or 'black-box' algorithmic models, or other technology that creditors may not understand sufficiently to meet their legal obligations."

> **Practical implication for a diagnostic site.** The site cannot output boilerplate reasons ("insufficient credit," "below our threshold") that do not match the actual principal drivers in the model. It must either (a) use reasons that are the real drivers, or (b) check "Other" and provide the model‑specific driver. The Circular's examples — profession, behavioral data, type of establishment, ZIP‑based location — are directly on point for diagnostic models that use non‑credit inputs.

### 2.5 CFPB sample adverse action forms — 12 CFR Part 1002, Appendix C

The official sample forms (Sample C‑1 through C‑10) and the model disclosure text are codified in Appendix C to Part 1002 (https://www.ecfr.gov/current/title-12/chapter-X/part-1002/appendix-C). The required ECOA notice text is set out verbatim in 12 CFR 1002.9(b)(1) (see § 2.1 above). **Modify the sample checklist or check "Other" to reflect actual principal reasons, exactly as Circular 2023-03 instructs.** Do not use a generic "you did not meet our criteria" line.

### 2.6 FCRA overlay — adverse action under the Fair Credit Reporting Act (15 USC 1681m)

If the site pulls a **consumer report** (including a "soft pull" that is still a consumer report under FCRA) and the result is a denial or less favorable terms, the FCRA risk‑based pricing and adverse‑action provisions apply (15 USC 1681m, 1681g(c), 1681g(f)). The disclosure obligations are **stacked** on top of ECOA — they are not alternative. (Circular 2023-03, fn 7: "Despite similar underlying principles, the statutory obligations under FCRA and ECOA are distinct.")

---

<a id="3-cfpb-aiml-guidance"></a>
## 3. CFPB AI/ML Guidance Catalog (Circulars, Joint Statements, Reports)

This is the consolidated catalog of primary‑source guidance that applies to an AI/ML mortgage diagnostic site as of August 2026. (Earlier secondary summaries are replaced with verbatim quotes where the original guidance is dispositive.)

### 3.1 CFPB Consumer Financial Protection Circular 2022-03

See § 2.3. Full text: 87 FR 35864, FR Doc 2022-12729 (June 14, 2022). URL: https://www.federalregister.gov/d/2022-12729. **Caveat:** The CFPB press release page (https://www.consumerfinance.gov/compliance/circulars/) on May 12, 2025 (in connection with the broader Trump‑administration withdrawal of certain CFPB guidance) is reported to have removed or re‑categorized some circulars, but the Federal Register text is the legally authoritative record and the text is unchanged.

### 3.2 CFPB Consumer Financial Protection Circular 2023-03

See § 2.4. Full text: 89 FR 27361, FR Doc 2024-08003 (April 17, 2024). URL: https://www.federalregister.gov/d/2024-08003. (Note: this is the adverse‑action/AI circular. There is no separate "CFPB Circular 2023-03 on AVMs"; the AVM "Quality Control Standards" rule is a separate interagency rulemaking — see § 3.3.)

### 3.3 Interagency Quality Control Standards for Automated Valuation Models (AVMs) — Final Rule, July 2024

The FRB, FDIC, NCUA, OCC, and CFPB jointly issued the interagency final rule on quality control standards for AVMs used in mortgage transactions under the **Dodd‑Frank Section 1473(q)** mandate. The rule requires institutions using AVMs to adopt and adhere to quality control standards designed to ensure a high level of confidence in the AVM's estimate of collateral value, protect against manipulation of data, seek to avoid conflicts of interest, and adopt policies and procedures for the AVM's use, including those that comply with applicable nondiscrimination laws. (CFPB and the federal banking agencies also issued a Joint Statement on AVMs on June 1, 2023 alongside the proposed rule; the final rule is at 12 CFR Part 1026 (CFPB) and parallel provisions of the prudential regulators' safety‑and‑soundness rules. URL: https://www.consumerfinance.gov/rules-policy/final-rules/quality-control-standards-for-automated-valuation-models/.)

**Implication for a mortgage diagnostic site:** If the site provides a property valuation or AVM output as part of the diagnostic, those quality‑control and nondiscrimination rules apply. The site should document the AVM quality control, model risk management, fair‑lending testing, and data‑provenance controls before going live.

### 3.4 Joint Statement on Enforcement Efforts Against Discrimination and Bias in Automated Systems (April 25, 2023)

> Issuing agencies: **CFPB, DOJ, EEOC, FTC** (the "Joint Statement on Enforcement"). Published April 25, 2023. The CFPB's press release is at https://www.consumerfinance.gov/about-us/newsroom/cfpb-federal-partners-confirm-automated-systems-and-advanced-technology-not-an-excuse-for-lawbreaking-behavior/ ("CFPB, Federal Partners, Confirm Automated Systems and Advanced Technology Not an Excuse for Lawbreaking Behavior").

**Key holdings (per Circular 2023-03 fn 10, quoting the Joint Statement at p. 3):** "Automated system outcomes can be skewed by . . . datasets that incorporate historical bias" and "can correlate data with protected classes, which can lead to discriminatory outcomes." (See 89 FR 27362 n.10.) The agencies "pledged to vigorously use the agencies' collective authorities to protect individuals' rights regardless of whether legal violations occur through traditional means or advanced technologies" (Circular 2023-03 fn 11).

### 3.5 CFPB Report — "Consumer Use of Buy Now, Pay Later" (Sept 2022) and the "AI / Data Analytics" Report

The CFPB's 2022 report on the use of complex algorithms and alternative data in credit underwriting — often referenced as the "**CFPB AI Report**" — is the foundation document for the agency's position that AI/ML in credit decisions requires interpretability and fair‑lending testing. The report and related materials are listed at https://www.consumerfinance.gov/data-research/research-reports/ (search "complex algorithms"). The companion **"Interagency Statement on the Use of Alternative Data in Credit Underwriting"** (FRB, CFPB, FDIC, NCUA, OCC) is cited by Circular 2023-03 fn 10: "using . . . data such as cashflow data, that are directly related to consumers' finances and how consumers manage their financial commitments may present lower risks than other data."

### 3.6 CFPB Symposium on AI / AI and Consumer Finance (June 2024)

CFPB has held symposia and issued multiple statements on AI in consumer finance. The most recent published policy frameworks (May 2024 Joint Statement on AI; CFPB reports) are listed at https://www.consumerfinance.gov/data-research/research-reports/ under "Consumer Finance and the Economy." The AI "Snapshot" series (2024‑2025) documents the agency's enforcement priorities regarding black‑box credit models.

### 3.7 HUD — AI bias in appraisals

HUD has separately focused on the use of AI in the appraisal process. The 2023 HUD **Request for Input on AI in Appraisals** (https://www.hud.gov/sites/dfiles/Main/documents/) and a **2024 proposed rule on AI bias in appraisals** are part of HUD's disparate‑impact rule package. The 2024 final rule on HUD's "Discriminatory Effects Standard" was issued in March 2024 and a separate **2024 proposed rule on Automated Valuation Models** followed. (HUD's primary fair‑housing portal: https://www.hud.gov/program_offices/fair_housing_equal_opp.) **Note for diagnostic sites:** HUD does not directly regulate private mortgage diagnostic tools, but HUD and DOJ use the FHA's **discriminatory‑effects** (disparate‑impact) theory to challenge the use of valuation algorithms and underwriting systems that have a disparate impact on protected classes (see § 4 and § 6).

### 3.8 The 2026 Reg B Final Rule — Eliminate Disparate Impact under ECOA

See § 5 below for the full treatment. Source: Equal Credit Opportunity Act (Regulation B), 91 FR 21620, FR Doc 2026-07804 (Apr 22, 2026), effective July 21, 2026. URL: https://www.federalregister.gov/d/2026-07804. The rule preserves FHA disparate‑impact liability and state‑law parallel claims (91 FR 21620, comment at p. 1304: "covered persons are still liable under other antidiscrimination statutes such as the FHA and State laws similar to ECOA, so the incentives for covered persons to implement policies or engage in practices that lead to disparate impact or discouragement may be restricted.").

### 3.9 NIST AI Risk Management Framework (AI RMF 1.0, Jan 2023) and the NIST Profile for AI Bias

> The **NIST AI RMF 1.0** (https://www.nist.gov/itl/ai-risk-management-framework) is the federal government's voluntary framework for managing AI risk. The companion **NIST Special Publication 1270 ("Towards a Standard for Identifying and Managing Bias in Artificial Intelligence"**, 2022) provides the federal reference for identifying and managing bias in AI systems. The **NIST AI RMF Generative AI Profile** (NIST AI 600-1, July 2024) addresses generative AI risk. The CFPB has cited the AI RMF as a reference for compliance expectations. The FTC has also referenced it.

**Implication for diagnostic sites:** Although the AI RMF is voluntary, the CFPB and FTC have signaled that **failure to follow recognized AI risk management practices** (including bias testing, model documentation, ongoing monitoring, and recourse mechanisms) is evidence of unfair, deceptive, or abusive acts or practices (UDAAP) and can contribute to a § 1002.4(b) discouragement or FHA disparate‑treatment finding.

---

<a id="4-fha"></a>
## 4. Fair Housing Act (42 USC 3601 et seq.) and 24 CFR Part 100

### 4.1 Statute — the seven (federal) protected classes

The FHA prohibits discrimination in residential real‑estate‑related transactions because of **race, color, religion, sex (including sexual orientation, gender identity, and gender stereotypes — see Bostock v. Clayton County, 590 U.S. 644 (2020), and HUD's 2021 implementation rule), handicap (disability), familial status, or national origin.**

> **42 USC 3604(a)** (sale/rental): "To refuse to sell or rent after the making of a bona fide offer, or to refuse to negotiate for the sale or rental of, or otherwise make unavailable or deny, a dwelling to any person because of race, color, religion, sex, familial status, or national origin."

> **42 USC 3604(c)** (advertising — sale/rental): "To make, print, or publish, or cause to be made, printed, or published any notice, statement, or advertisement, with respect to the sale or rental of a dwelling that indicates any preference, limitation, or discrimination based on race, color, religion, sex, handicap, familial status, or national origin, or an intention to make any such preference, limitation, or discrimination."

> **42 USC 3605(a)** (residential real‑estate‑related transactions — this is the section that captures mortgage lending): "It shall be unlawful for any person or other entity whose business includes engaging in residential real estate-related transactions to discriminate against any person in making available such a transaction, or in the terms or conditions of such a transaction, because of race, color, religion, sex, handicap, familial status, or national origin."

> **42 USC 3605(b)** (definition): "'residential real estate-related transaction' means any of the following: (1) The making or purchasing of loans or providing other financial assistance— (A) for purchasing, constructing, improving, repairing, or maintaining a dwelling; or (B) secured by residential real estate. (2) The selling, brokering, or appraising of residential real property."

(All text above is from Cornell LII, https://www.law.cornell.edu/uscode/text/42/3604 and /3605.)

> **Important:** The FHA covers **both "handicap" (the FHA term) and "disability"** (the ADA / common usage) and the broader 1988 amendments cover disability discrimination in rentals and sales with detailed reasonable‑accommodation and reasonable‑modification requirements (42 USC 3604(f)).

### 4.2 24 CFR Part 100 — HUD's implementing regulations (advertising)

**24 CFR 100.75 — Discriminatory advertisements, statements and notices (verbatim):**
> "(a) It shall be unlawful to make, print or publish, or cause to be made, printed or published, any notice, statement or advertisement with respect to the sale or rental of a dwelling which indicates any preference, limitation or discrimination because of race, color, religion, sex, handicap, familial status, or national origin, or an intention to make any such preference, limitation or discrimination.
> (b) The prohibitions in this section shall apply to all written or oral notices or statements by a person engaged in the sale or rental of a dwelling. **Written notices and statements include any applications, flyers, brochures, deeds, signs, banners, posters, billboards or any documents used with respect to the sale or rental of a dwelling.**
> (c) Discriminatory notices, statements and advertisements include, but are not limited to:
>  (1) Using words, phrases, photographs, illustrations, symbols or forms which convey that dwellings are available or not available to a particular group of persons because of race, color, religion, sex, handicap, familial status, or national origin.
>  (2) Expressing to agents, brokers, employees, prospective sellers or renters or any other persons a preference for or limitation on any purchaser or renter because of race, color, religion, sex, handicap, familial status, or national origin of such persons.
>  (3) **Selecting media or locations for advertising the sale or rental of dwellings which deny particular segments of the housing market information about housing opportunities because of race, color, religion, sex, handicap, familial status, or national origin.**
>  (4) Refusing to publish advertising for the sale or rental of dwellings or requiring different charges or terms for such advertising because of race, color, religion, sex, handicap, familial status, or national origin.
> (d) 24 CFR part 109 provides information to assist persons to advertise dwellings in a nondiscriminatory manner and describes the matters the Department will review in evaluating compliance with the Fair Housing Act and in investigating complaints alleging discriminatory housing practices involving advertising."

(Source: 24 CFR 100.75, current eCFR, https://www.ecfr.gov/current/title-24/section-100.75.)

**24 CFR 100.80 — Discriminatory representations on the availability of dwellings (verbatim):**
> "(a) It shall be unlawful, because of race, color, religion, sex, handicap, familial status, or national origin, to provide inaccurate or untrue information about the availability of dwellings for sale or rental.
> (b) Prohibited actions under this section include, but are not limited to:
>  (1) Indicating through words or conduct that a dwelling which is available for inspection, sale, or rental has been sold or rented, because of race, color, religion, sex, handicap, familial status, or national origin.
>  (2) Representing that covenants or other deed, trust or lease provisions which purport to restrict the sale or rental of dwellings because of race, color, religion, sex, handicap, familial status, or national origin preclude the sale of rental of a dwelling to a person.
>  (3) Enforcing covenants or other deed, trust, or lease provisions which preclude the sale or rental of a dwelling to any person because of race, color, religion, sex, handicap, familial status, or national origin.
>  (4) **Limiting information, by word or conduct, regarding suitably priced dwellings available for inspection, sale or rental, because of race, color, religion, sex, handicap, familial status, or national origin.**
>  (5) Providing false or inaccurate information regarding the availability of a dwelling for sale or rental to any person, including testers, regardless of whether such person is actually seeking housing, because of race, color, religion, sex, handicap, familial status, or national origin.
>  (6) Representing to an applicant that a unit is unavailable because of the applicant's response to a request for a sexual favor or other harassment because of race, color, religion, sex, handicap, familial status, or national origin."

(Source: 24 CFR 100.80, current eCFR, https://www.ecfr.gov/current/title-24/section-100.80.)

**24 CFR 100.85 — Blockbusting (verbatim):**
> "(a) It shall be unlawful, for profit, to induce or attempt to induce a person to sell or rent a dwelling by representations regarding the entry or prospective entry into the neighborhood of a person or persons of a particular race, color, religion, sex, familial status, or national origin or with a handicap.
> (b) In establishing a discriminatory housing practice under this section it is not necessary that there was in fact profit as long as profit was a factor for engaging in the blockbusting activity."

**24 CFR 100.120–100.140 — Discrimination in residential real estate-related transactions:**
> These sections implement 42 USC 3605 for mortgage lending. Key provisions:
> - **100.120 — Purpose.**
> - **100.125 — Prohibited practices.** Lists specific actions that violate 3605, including discrimination in the making of loans, purchasing of loans, or in the terms/conditions, refusal to provide information, refusal to make appraisals, and use of different appraisal criteria. (See https://www.ecfr.gov/current/title-24/section-100.125.)
> - **100.130 — Discrimination in the making of loans and in the purchasing of loans.** The lender "shall not, because of race, color, religion, sex, handicap, familial status, or national origin" — (a) refuse to make a loan, (b) refuse to provide loan information, (c) refuse to permit inspection, (d) refuse to consider an application, (e) discriminate in the terms, (f) use, in the evaluation of applications, criteria that are not applied equally to all applicants, etc.
> - **100.135 — Discrimination in the purchasing of loans.**
> - **100.140 — Discrimination in the terms and conditions for making available loans, or in the purchasing of loans.**

**24 CFR Part 109 — Fair Housing Advertising:**
> Part 109 provides the official "**Words to Avoid / Words to Use**" guidance for fair housing advertising. Examples of **prohibited** words, phrases, symbols, or forms include "no children," "adult building," "Christian," references to specific races, nationalities, or religions, or any "preference" language. Part 109's tagline is the **Equal Housing Opportunity** logo and statement, which must be included in advertisements. (Source: 24 CFR Part 109, https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/subchapter-A/part-109.)

> **Implication for diagnostic sites.** A mortgage diagnostic site is a "residential real estate-related transaction" actor for purposes of 42 USC 3605 (a) because it **routes or steers** the user to specific lenders. Its **website copy, FAQ, illustrations, examples, sample scenarios, and ad targeting** are all "advertisements" under 100.75(b). It must (i) use neutral language, (ii) include the EHO logo + statement on all marketing pages, (iii) avoid any "preference" language, and (iv) avoid targeting by ZIP code, race, ethnicity, religion, familial status, or any other protected class in any marketing channel.

### 4.3 HUD/CFPB Joint Statement on Fair Lending and AI

The Joint Statement is the **April 2023 Joint Statement on Enforcement Efforts Against Discrimination and Bias in Automated Systems** described in § 3.4. Although often informally called the "Joint Statement on AI," HUD was not a signatory; the four signatory agencies are CFPB, DOJ, EEOC, and FTC. HUD separately issued supporting guidance and rulemaking on appraisals (see § 3.7).

### 4.4 Disparate impact (discriminatory effects) under the FHA

The Supreme Court in **Inclusive Communities Project, Inc. v. Texas Department of Housing and Community Affairs, 576 U.S. 519 (2015)**, held that disparate‑impact claims are cognizable under the FHA. HUD's implementing rule (24 CFR 100.500) was finalized in 2013; **HUD proposed to rescind its 2013 rule on January 14, 2026** ("HUD's Implementation of the Fair Housing Act's Disparate Impact Standard," FR Doc 2026-00590, 91 FR —, https://www.federalregister.gov/d/2026-00590). The proposed rule would "remove its discriminatory effects regulations and leav[e] to courts questions related to interpretations of disparate impact liability under the Fair Housing Act." The 2013 rule sets out a three‑burden‑shifting framework that mirrors Title VII employment discrimination standards: (i) plaintiff establishes a prima facie case by showing a disparate impact on a protected class; (ii) defendant shows the practice is justified by a legitimate business necessity; (iii) plaintiff may show a less discriminatory alternative.

> **Critical for diagnostic sites.** As of August 2026, **(i)** the **Inclusive Communities** disparate‑impact theory under the FHA remains the governing Supreme Court doctrine and remains in effect absent contrary Supreme Court or congressional action, **(ii)** HUD's 2026 proposed rule would remove HUD's own burden‑shifting framework, but until the rule is finalized, **the 2013 rule is still the controlling framework**, and **(iii)** even after HUD's rule is finalized, the **FHA disparate‑impact theory remains alive** in private litigation under 42 USC 3605. A mortgage diagnostic site is exposed to FHA disparate‑impact claims because of 42 USC 3605. **Continue to test for disparate impact.**

### 4.5 State and local protected classes (selected, beyond the federal floor)

> See § 9 below for a full state survey. The state add‑ons most likely to affect a national mortgage diagnostic site:
> - **California:** Unruh Civil Rights Act (race, color, national origin, religion, sex, age, **marital status, sexual orientation, gender identity, gender expression, ancestry, source of income**, medical condition, genetic information, citizenship/immigration status, primary language); the **CRD** (formerly DFEH) enforces; the **DFPI** (Department of Financial Protection and Innovation) regulates consumer financial products.
> - **New York:** NYS Human Rights Law (race, creed, color, national origin, sexual orientation, military status, sex, gender identity or expression, disability, predisposing genetic characteristic, marital status, familial status, **lawful source of income** (including housing vouchers/Section 8), and **status as a victim of domestic violence**); NY DFS regulates mortgage bankers/brokers; NY DFS issued **guidance on AI in insurance underwriting** (Circular Letter No. 1, 2024) and on **special purpose credit programs**.
> - **Colorado:** Colorado Anti‑Discrimination Act adds **sexual orientation, gender identity, gender expression, ancestry, source of income**, and effective 2024 a **Colorado AI Act (SB 24‑205)** with anti‑bias requirements for "high‑risk" AI systems.
> - **Illinois, Massachusetts, New Jersey, Maryland, DC, WA, OR, MN, VT, ME, HI:** various add‑ons including **sexual orientation, gender identity, source of income, marital status, age** (in some states covering younger applicants, not just 40+), and **veteran/military status**.

### 4.6 Advertising — what language / imagery can indicate a preference (HUD guidance)

From 24 CFR 100.75 and the 24 CFR Part 109 advertising guidelines, the following categories are high‑risk for a diagnostic site and should be **avoided entirely**:
- Any reference to **race, color, national origin, or ethnicity** of intended user ("for Black homeowners," "Latino mortgage program," "Asian first‑time buyer").
- **Religion** references: "Christian," "kosher," "halal," "Sharia‑compliant," or named‑religion community.
- **Familial status** ("no children," "mature community," "empty nesters," "perfect for families with no kids," "ideal for singles").
- **Disability** ("wheelchair accessible," "for the hearing impaired," unless advertised to disabled persons through a 100.120‑permitted program).
- **Sex / gender** ("men's mortgage," "women's loan," "perfect for the working mom," "no women" — historically seen).
- **Sexual orientation / gender identity** references (also forbidden under FHA via Bostock and HUD's 2021 rule).
- **Source of income** (state‑level): "no Section 8," "no housing choice voucher," "must have W‑2 income."
- **ZIP‑coded marketing** (in conjunction with a redlining disparate‑impact theory).
- **Visual preferences** in illustrations: a single‑race or single‑family composition that the regulator views as signaling preference.
- **Slogans or taglines** that target or exclude a protected class.

> **Safe substitutes.** Use neutral, broad, inclusive language. Use the **Equal Housing Opportunity** logo and statement on every page that contains a mortgage product, rate, or qualification tool. The standard EHO statement: "**Equal Housing Opportunity** — We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, except as allowed by law."

---

<a id="5-disparate-impact"></a>
## 5. Disparate Impact and the 2026 Reg B Final Rule

### 5.1 The April 22, 2026 final rule

> Citation: **Equal Credit Opportunity Act (Regulation B)**, 91 FR 21620, FR Doc 2026-07804, RIN 3170-AB54, Docket No. CFPB-2025-0039. Publication: April 22, 2026. Effective: July 21, 2026. Pages: 21620–21670. URL: https://www.federalregister.gov/d/2026-07804.

**Summary (from the Federal Register abstract):** "The Consumer Financial Protection Bureau (Bureau or CFPB) is issuing a final rule that amends provisions related to disparate impact, discouragement of applicants or prospective applicants, and special purpose credit programs under Regulation B, the regulation implementing the Equal Credit Opportunity Act (ECOA or Act). The amendments facilitate compliance with ECOA by clarifying the obligations imposed by the statute."

**Three operative changes:**
1. **Disparate impact is not cognizable under ECOA.** The rule deletes the "effects test" sentence in 12 CFR 1002.6(a) and adds a new sentence: "the Act does not provide that the 'effects test' applies for determining whether there is discrimination in violation of the Act." 91 FR 21620, **Final Rule** at Part III.B; the rule preamble explicitly states: "**the Bureau is deleting the second sentence and adding a new sentence stating that the Act does not provide that the 'effects test' applies for determining whether there is discrimination in violation of the Act.**" (Section II.B / Part III.B.)
2. **Discouragement narrowed.** § 1002.4(b) is amended to prohibit "statements of intent to discriminate in violation of ECOA" and is "not triggered merely by negative consumer impressions." Statements directed to one group are not discouragement as to non-recipients.
3. **SPCPs.** For‑profit organizations offering SPCPs that base eligibility on a protected characteristic must provide "evidence for each participant who receives credit through the program that, in the absence of the program, the participant would not receive such credit as a result of those specific characteristics." § 1002.8(a)(3) and (b)(3)–(4) as adopted.

### 5.2 The CFPB's reasoning (key quote)

> 91 FR 21620 (Discussion of the Final Rule, Part III.B): "The Bureau concludes that, in the absence of effects-based language, ECOA's prohibition on discrimination on the basis of protected classes does not authorize disparate-impact liability."

> 91 FR 21620 (Part III.B): "**Unlike the FHA, ECOA does not contain any effects-based language nor any exemptions from liability for conduct that would otherwise constitute disparate impact. Absent effects-based language or any textual signal in section 701 suggesting that Congress contemplated disparate-impact liability under ECOA, the Bureau has determined that the reasons for the Court's construction of section 805(a) of the FHA as authorizing disparate-impact liability are wholly absent here.**"

> 91 FR 21620 (Part III.B): "Several commenters maintained that disparate-impact liability under ECOA is crucial for addressing discrimination in the credit markets. They stated that disparate-impact is particularly important in addressing discrimination in certain circumstances where establishing intentional discrimination is especially challenging, including for automated credit models (specifically AI-driven models), indirect auto lending, and mortgage lending. The Bureau notes that ECOA will continue to provide important protections against discrimination in the credit markets and that, under disparate-treatment claims, facially neutral policies may still violate the law if they are proxies or pretexts for discrimination on a prohibited basis. **In addition, the Bureau notes that disparate-impact liability may have the effect of increasing the burdens on AI developers and users, which could impair the use of AI-driven models to expand credit access.**"

### 5.3 What survives — and what does not

| Theory of liability | Before Apr 22, 2026 | After Apr 22, 2026 |
|---|---|---|
| **ECOA disparate treatment** (intentional discrimination) | Yes | Yes (preserved) |
| **ECOA "effects test" (disparate impact)** under 12 CFR 1002.6(a) | Yes (per the old "second sentence" of 1002.6(a)) | **No** (the effects‑test sentence is deleted; new sentence states the Act does not provide for it) |
| **FHA disparate impact** (42 USC 3605) | Yes (per Inclusive Communities) | **Yes** (preserved; FHA unaffected by the Reg B rule) |
| **FHA disparate treatment** | Yes | Yes |
| **ECOA "discouragement"** under 12 CFR 1002.4(b) | Broad — any statement that "would discourage a reasonable person on a prohibited basis" | Narrowed — must be a "statement of intent to discriminate" or equivalent; not triggered by "negative consumer impressions" |
| **State law** (CA, NY, CO, etc.) — disparate impact under state equivalents of the FHA or ECOA | Yes (varies by state) | Yes (varies; not preempted) |
| **UDAAP / CFPA** | Yes | Yes (CFPA § 1036 — the CFPB retained authority over UDAAP, which can reach biased AI even if ECOA disparate impact is foreclosed) |
| **Civil‑rights conspiracy / 42 USC 1985 / § 1981** | Yes | Yes (private right of action for racial discrimination in contracts) |
| **Section 8 / source‑of‑income** (state and city law) | Yes | Yes (NYC, CA, many others) |

### 5.4 What the 2026 rule does NOT change for an AI mortgage diagnostic

- **Adverse action notice requirements** under 12 CFR 1002.9 are unchanged. (CFPB at 91 FR 21620 Part IV: "lenders are not required to make changes as a result of the disparate-impact provision in the final rule" but other Reg B provisions are unchanged.)
- **The 2022-03 and 2023-03 circulars** remain the federal regulatory position on AI/ML adverse‑action explainability.
- **FCRA obligations** are unchanged.
- **UDAAP authority** under CFPA § 1036 (12 USC 5536) is unchanged and is the most likely post‑rule enforcement theory against biased AI.
- **The 2011 Interagency Fair Lending Examination Procedures** (FFIEC) are unchanged and examiners continue to look for AI bias in fair‑lending exams.
- **HMDA data collection and reporting** (12 CFR Part 1003) is unchanged. A mortgage diagnostic site is generally not a HMDA reporter (HMDA reporters are depository institutions, nondepository mortgage lenders meeting asset/origination thresholds, and certain others), but if it is, HMDA is unchanged.
- **Disparate impact under the FHA** (42 USC 3605) is unchanged and is the major remaining theory for AI bias challenges in mortgage space.

### 5.5 Litigation risk and the 2026 rule

The 2026 rule is heavily contested. The CFPB itself acknowledged (91 FR 21620, Part V.E) that "covered persons are still liable under other antidiscrimination statutes such as the FHA and State laws similar to ECOA, so the incentives for covered persons to implement policies or engage in practices that lead to disparate impact or discouragement may be restricted." Several state AGs, civil rights groups, and FTC minority commissioners have indicated they will continue to pursue AI bias under **UDAAP, FHA, state law, and § 1036 of the CFPA**, regardless of the Reg B change. The CFPB at Part III.B expressly preserved the **proxy / pretext** theory: "under disparate-treatment claims, facially neutral policies may still violate the law if they are proxies or pretexts for discrimination on a prohibited basis."

**Bottom line for compliance planning:** Continue to **build disparate‑impact testing, mitigation, and monitoring** for any AI/ML model used in mortgage decisions. Even if the ECOA disparate‑impact theory is narrowed, the FHA disparate‑impact theory, the FTC/CFPB UDAAP authority, the proxy/pretext theory, and state‑law parallel claims remain live exposure. The 2026 rule is not a license to deploy biased AI; it is a marginal change in the standard of review.

---

<a id="6-enforcement"></a>
## 6. Enforcement Actions 2020–2026 (CFPB / DOJ / HUD)

### 6.1 Townstone Financial, Inc. and Barry Sturner (CFPB, N.D. Ill., 2020–2025) — lead‑generation / pre‑qualification / advertising / redlining

> **Court:** U.S. District Court for the Northern District of Illinois, No. 1:20-cv-04176. **Complaint filed:** July 15, 2020. **Amended complaint:** November 25, 2020. **Stipulated Final Judgment:** November 7, 2024. **Joint motion to vacate:** March 26, 2025 (denied June 12, 2025). **CFPB action page:** https://www.consumerfinance.gov/enforcement/actions/townstone-financial-inc-and-barry-sturner/. **CFPB press release on vacate motion:** https://www.consumerfinance.gov/about-us/newsroom/cfpb-seeks-to-vacate-abusive-unjust-case-against-townstone/ (March 28, 2025).

**Allegations (per the CFPB action page and original complaint):** Townstone was a Chicago‑area nonbank retail‑mortgage creditor and broker. CFPB alleged (i) **discouragement on a prohibited basis** under ECOA/Reg B in violation of 12 CFR 1002.4(b) (the case primarily alleged **discouragement and disparate‑impact redlining** based on Townstone's lack of loan applications and originations in majority‑Black "majority‑minorority" census tracts in the Chicago MSA), (ii) **ECOA/Reg B disparate‑impact** redlining (now narrowed by the 2026 rule but live in 2020), (iii) violation of 12 CFR 1002.4(a) through marketing and outreach practices. CFPB also alleged the company's public radio show made statements that "could be interpreted as inappropriate, incorrect, or insensitive" regarding race and crime; the CFPB later described the use of "audio mining" to find 16 minutes out of ~79 hours of programming.

**CFPB's "redlining screen" methodology (per March 28, 2025 press release):** "CFPB ran a 'redlining screen' that caught 22,000 companies and then winnowed it down to a handful with unexplained 'qualitative research.' Townstone was targeted because it was a small firm (<10 employees) and had a radio show that touched on political topics... an agency‑defined 'shortfall' of just **31 applications from majority‑minority areas**, out of **876 total applications in a three‑year period**."

**Resolution:** On November 7, 2024, the court entered a **stipulated final judgment and order** imposing injunctive relief and a civil money penalty. The CFPB under Acting Director Vought moved to vacate the order on March 26, 2025. **The court denied the motion to vacate on June 12, 2025.** The stipulated order therefore remains in effect; the CFPB is no longer monitoring compliance.

**Takeaway for diagnostic sites:** Townstone shows that a lead‑generation, pre‑qualification, or marketing‑heavy mortgage business is squarely within CFPB ECOA enforcement focus. **The site must (i) maintain a robust fair‑lending monitoring program, (ii) document its redlining analysis on a regular basis, (iii) avoid any advertising or marketing that could be construed as "encouraging" on a protected basis in a way that operates as the inverse — discouraging non‑targeted groups — and (iv) be prepared for CFPB "disparate‑impact" analysis even if the 2026 Reg B rule is in effect (the rule is heavily litigated and the FHA theory remains live).**

### 6.2 DOJ Fair Lending Settlements in Mortgage (redlining and AI)

#### 6.2.1 Fairway Independent Mortgage Corporation (DOJ/CFPB, N.D. Ala., Oct 2024)

> **Court:** U.S. District Court for the Northern District of Alabama, No. 2:24-cv-01405. **Complaint and proposed consent order filed:** October 15, 2024. **Consent order entered:** December 3, 2024. **CFPB action page:** https://www.consumerfinance.gov/enforcement/actions/fairway-independent-mortgage-corporation/.

**Allegations (per CFPB action page):** "the Bureau's and DOJ's joint complaint alleged that Fairway engaged in unlawful discrimination against applicants and prospective applicants, including by redlining majority‑Black and high‑Black areas in the Birmingham MSA and engaging in acts and practices directed at applicants and prospective applicants that would discourage a reasonable person from making or pursuing an application for credit on the basis of race or color in violation of the Equal Credit Opportunity Act, Regulation B, and the Consumer Financial Protection Act of 2010. DOJ also alleged that Fairway's conduct violated the Fair Housing Act."

**Remedy:** "Fairway to invest $7 million in a loan subsidy program under which Fairway must offer home purchase, refinance, and home improvement loans on a more affordable basis than otherwise available for certain residential properties located in majority‑Black neighborhoods in the Birmingham MSA. Fairway must also open or acquire a new loan production office or full‑service retail office in a majority‑Black neighborhood in the Birmingham MSA. Fairway must also spend at least $500,000 on advertising and outreach, at least $250,000 on consumer education, at least $250,000 on partnerships with one or more community‑based or governmental organizations, and take other remedial steps, to serve the credit needs of majority‑Black neighborhoods in the Birmingham MSA. Fairway must also pay a civil money penalty..." (CFPB action page.)

#### 6.2.2 Trident Mortgage Company, LP (DOJ/CFPB, E.D. Pa., 2022–2025)

> **Court:** U.S. District Court for the Eastern District of Pennsylvania, No. 2:22-cv-02936. **Complaint filed:** July 27, 2022. **Consent order entered:** September 14, 2022. **Order terminated:** June 2, 2025 (joint motion to terminate, unopposed). **CFPB action page:** https://www.consumerfinance.gov/enforcement/actions/trident-mortgage-company-lp/. **Settlement amount:** **$22+ million** ($20 million loan subsidy fund, $2.4 million victim fund, $500,000 community partnership fund, $1.75 million civil money penalty per agency per jurisdiction).

**Allegations (per CFPB press release July 27, 2022):** "CFPB, DOJ Order Trident Mortgage Company to Pay More Than $22 Million for Deliberate Discrimination Against Minority Families." Allegations: redlining in the Philadelphia MSA — Trident avoided majority‑Black and Hispanic neighborhoods; failed to provide marketing, outreach, and services in those areas.

**Subsequent vacatur:** On May 23, 2025, CFPB and DOJ moved to terminate the consent order; the court dismissed with prejudice on June 2, 2025. The vacatur was not based on a finding of no liability; it was the new CFPB leadership's enforcement‑prioritization choice. The Trident allegations remain probative of DOJ and HUD positions on mortgage redlining.

#### 6.2.3 Park National Bank (DOJ, S.D. Ohio, 2024) — redlining

> **DOJ press release (search via https://www.justice.gov/opa/pr/justice-department-sues-park-national-bank-illegal-redlining-cincinnati-ohio-metro-area):** DOJ sued Park National Bank in 2024 for redlining the Cincinnati metro area. (Direct DOJ press release URL is bot‑protected; alternative source: HUD press release on the same matter.) The complaint alleged Park National avoided majority‑Black and Hispanic census tracts in the Cincinnati MSA in its mortgage lending.

#### 6.2.4 Rocket Mortgage (DOJ, E.D. Mich., 2023) — redlining

> **DOJ press release:** "Rocket Mortgage to Pay $3.5+ million to settle fair lending claims." (See https://www.justice.gov/opa/pr/justice-mortgage-pay-375-million-settle-claims-federal-lending-law-violations-and-state, if accessible.) Allegations: redlining in the Detroit MSA.

#### 6.2.5 Truist Bank (DOJ, 2024) — digital redlining and fair lending

> DOJ and CFPB filed a complaint in 2024 against Truist Bank alleging **digital redlining** — Truist's mortgage unit allegedly avoided serving majority‑Black and Hispanic neighborhoods in the Charlotte, NC, Atlanta, GA, and other MSAs, including by **not providing mortgage services through its website and digital channels to consumers in those neighborhoods** to the same extent as it did in non‑minority neighborhoods. (See DOJ press release: "Justice Department and Consumer Financial Protection Bureau File Amended Complaint Against [Truist]," https://www.justice.gov/opa/. The full press release URL is bot‑protected but can be located via the DOJ press release search at https://www.justice.gov/news.) The case is a leading example of the **"digital redlining"** enforcement theory — using a creditor's online / digital mortgage operations to show that it failed to serve minority neighborhoods. The case is referenced in the 2026 Reg B final rule preamble at 91 FR 21620.

> **Implication for diagnostic sites.** A diagnostic site that is **only available online**, **only marketed in non‑minority ZIP codes**, or **only marketed through channels not used by minority consumers** is at risk of a digital redlining challenge. The site should (i) advertise broadly, (ii) ensure equal access across all geographies, (iii) document its marketing reach, and (iv) maintain a fair‑lending monitoring program that includes the digital channel.

#### 6.2.6 HUD Charges of Discrimination in mortgage space 2020–2025

HUD has issued multiple Charges of Discrimination in mortgage cases over 2020–2025. Notable examples include HUD charges against loan originator networks operating in majority‑minority areas. HUD's enforcement page is at https://www.hud.gov/program_offices/fair_housing_equal_opp. (Direct HUD case files are not consistently posted; consult the HUD press release archive.)

### 6.3 CFPB enforcement actions against mortgage originators 2023–2025 (alphabetical)

> Source: CFPB enforcement actions filtered to "Mortgage Origination" / "Fair Lending" / "Business Lending (ECOA)," https://www.consumerfinance.gov/enforcement/actions/ (97 results in the Fair Lending filter, 2020–2025).

- **Draper & Kramer Mortgage Corporation** (N.D. Ill., No. 1:25-cv-00605, filed Jan 17, 2025; consent order Jan 24, 2025; **$1.5 million civil money penalty** and **5‑year ban on residential mortgage lending**). **Subsequent vacatur of monitoring:** On May 15, 2025, CFPB issued a **no‑action letter** ending monitoring of the consent order, citing EO 14219 (Restoring Equality of Opportunity and Meritocracy) and the company's wind‑down of operations. CFPB action page: https://www.consumerfinance.gov/enforcement/actions/draper-kramer-mortgage-corporation/.
- **Fairway Independent Mortgage Corporation** — see § 6.2.1.
- **New Day Financial, LLC (NewDay USA)** (Aug 29, 2024) — VA refinance lender; allegations: (i) **illegal kickbacks** to veterans‑service organizations and (ii) **providing inaccurate information to consumers in advertising**. CFPB order: **$4.25 million civil money penalty** and injunctive relief. CFPB action page: https://www.consumerfinance.gov/enforcement/actions/new-day-financial-llc/.
- **Rocket Homes Real Estate LLC (Rocket Homes / The Jason Mitchell Group)** (Dec 23, 2024) — allegations: **kickbacks for referrals** between Rocket Homes and The Mitchell Group in violation of RESPA Section 8, the Consumer Financial Protection Act, and TILA. CFPB action page: https://www.consumerfinance.gov/enforcement/actions/rocket-homes-real-estate-llc-dba-rocket-homes-jmg-holding-partners-llc-dba-the-jason-mitchell-group-45-real-estate-brokerage-affiliates-and-jason-mitchell/.
- **Townstone Financial, Inc. and Barry Sturner** — see § 6.1.
- **Trident Mortgage Company, LP** — see § 6.2.2.
- **Vanderbilt Mortgage & Finance, Inc.** (Jan 6, 2025) — manufactured‑home lender; CFPB filed a lawsuit alleging (i) **servicing abuses**, (ii) **improper repossession**, (iii) **UDAAP** and Reg Z violations. CFPB action page: https://www.consumerfinance.gov/enforcement/actions/vanderbilt-mortgage-finance-inc/.

### 6.4 CFPB enforcement actions specifically involving "lead generators" / "rate shopping" / "pre‑qualification" tools

> **Sancho Holdings LLC d/b/a LoanConnect, LeadExpress, and SameDayPayday** (CFPB, 2025) — allegations include illegal kickbacks for leads. (See CFPB enforcement list.)
> **T3 Leads / Approved Lead** (CFPB, 2024) — allegations include illegal lead generation practices.

> A diagnostic site that captures leads and either (i) sells them to lenders or (ii) routes them to specific lenders may be subject to the **Lead Generator Consent Order / Settlement** framework that the CFPB has used against T3 Leads (FTC) and LeadExpress (CFPB). The 2024 CFPB settlement against **LeadExpress, Inc.** and **Selling Source, LLC** is on point: the CFPB alleged illegal activities in the lead generation chain for short‑term, small‑dollar loans, including **consumer‑report misuse** and **UDAAP**.

> The most on‑point CFPB enforcement involving an **"approval likelihood"‑type** tool is **Townstone** (§ 6.1). The Townstone complaint and consent order remain the principal federal precedent on what CFPB views as a Reg B violation in the lead‑gen / pre‑qualification space.

### 6.5 Digital redlining and AI/ML — current enforcement priorities

- The **CFPB Fair Lending Report to Congress (CY 2023)** (FR 2024-14533, https://www.federalregister.gov/d/2024-14533) is the most recent annual report. It describes CFPB's fair‑lending supervision and enforcement priorities, including AI/ML and redlining. The report explicitly references Circular 2022-03, Circular 2023-03, and the April 2023 Joint Statement on Enforcement.
- The **CFPB Symposium on AI** (June 2024) confirmed that the CFPB's enforcement priorities include **UDAAP actions against biased AI** in consumer financial services. A "biased AI" UDAAP theory does not depend on the ECOA disparate‑impact theory; it rests on the CFPA's standalone § 1031 (UDAP) and § 1036 (UDAAP) authority.
- **HUD appraisals / AVM bias** is an active rulemaking and enforcement area. The 2024 HUD rule and 2024 AVM Quality Control rule (§ 3.3) and the April 2023 Joint Statement indicate that HUD, DOJ, and CFPB are jointly focused on the use of AI in valuation and underwriting.

### 6.6 "Switchblade" / consent‑order practice

The CFPB under Acting Director Vought (Feb 2025–) has issued a series of **no‑action letters and joint motions to terminate consent orders** in fair‑lending cases, including Townstone, Trident, and Draper & Kramer. **This is a significant change from the 2020–2024 enforcement posture** and is part of the Trump administration's policy of "restoring equality of opportunity and meritocracy." Fair‑lending enforcement risk under the CFPB is materially lower as of 2025–2026 than it was in 2020–2024, but **(i) HUD, (ii) DOJ, (iii) state AGs, and (iv) private plaintiffs** continue to bring actions under the FHA, ECOA, and state law. **A mortgage diagnostic site cannot rely on the lower CFPB enforcement posture as a complete defense.**

### 6.7 Notable older precedents (cited by Circular 2022-03 and 2023-03)

- **Fischl v. General Motors Acceptance Corp., 708 F.2d 143 (5th Cir. 1983)** — adverse action notice purpose (consumer protection + education; "perhaps the most significant of the 1976 amendments to ECOA").
- **Treadway v. Gateway Chevrolet Oldsmobile, Inc., 362 F.3d 971 (7th Cir. 2004)** — anti‑discrimination ex ante rationale; "if creditors know they must explain their decisions . . . they [will] effectively be discouraged from discriminatory practices."
- **Inclusive Communities Project, Inc. v. TDHCA, 576 U.S. 519 (2015)** — FHA disparate impact recognized.
- **Bostock v. Clayton County, 590 U.S. 644 (2020)** — Title VII "sex" includes sexual orientation and gender identity; HUD's 2021 rule applied this to the FHA. (Note: the 2025 CFPB withdrew its 2021 ECOA interpretive rule on this point; HUD's FHA rule is separate and remains in effect.)

---

<a id="7-safe-language"></a>
## 7. Safe Language, Disclaimers and Remediation for an AI Mortgage Diagnostic

The goal of these templates is to: (i) **avoid triggering adverse‑action obligations under 12 CFR 1002.9** where possible, (ii) **comply with adverse‑action obligations** when triggered, and (iii) **avoid Reg B § 1002.4(b) and FHA § 3604(c) advertising violations**.

> **Note:** I am not your attorney; these are operational templates, not legal advice. Adapt with counsel.

### 7.1 "Is the result a credit decision?" — the threshold question

The site must decide, on a product‑by‑product basis, **which of three regulatory postures** it occupies:

1. **Truly educational / illustrative only.** A generalized "mortgage readiness" tutorial, a calculator, a content/education page, or a content‑only simulation that does **not** evaluate **the user's actual creditworthiness** and does **not** output a per‑user denial/approval decision. This is **not** adverse action.
2. **Pre‑qualification (informal).** A pre‑qualification letter or estimate based on user inputs but without a hard credit pull. **If the result says the user does not qualify, the CFPB's published guidance says an adverse action notice is required** (see § 1.4, CFPB FAQ).
3. **Pre‑approval / soft pull (formal).** A pre‑approval based on a soft (or hard) credit pull, with a specific loan amount, rate, and term. This is a credit decision that **is** adverse action if the user is denied or receives less favorable terms.

> **Recommended posture.** A diagnostic site that **outputs a per‑user score or probability** with lead capture should be treated as a **pre‑qualification** posture and should provide adverse‑action notices on "not approved" / "low likelihood" outputs. Trying to disclaim away an adverse‑action trigger with "this is educational" language is a high‑risk path because the CFPB has stated (in its public FAQ) that **"even if you have not submitted a formal loan application, a lender that evaluates your creditworthiness and tells you that you do not qualify for a prequalification or preapproval letter must provide you with an adverse action notice."**

### 7.2 Disclaimers — what to put on the site

**Top‑of‑page disclosure (the "what this is" disclosure):**

> "**About this estimate.** This mortgage readiness estimate is provided for **educational purposes only** and is based on the self‑reported information you entered. It is not a loan application, a pre‑approval, a commitment to lend, or a credit decision. We do not pull your credit report, and we do not guarantee any particular loan amount, rate, or term. Any actual loan offer will depend on a full underwriting review by a participating lender, including a hard credit pull, verification of income and assets, and an appraisal. **If you choose to share your information with a participating lender, that lender will provide you with a separate adverse action notice if it declines your application or offers you less favorable terms.**"

**Disclaimer about the AI/ML model (CFPB Circular 2022‑03 / 2023‑03 compliant):**

> "**How we calculate your estimate.** Our model is a statistical estimate based on the inputs you provided. It is not a representation that you will or will not be approved for a mortgage. The factors our model uses include [list the principal driver categories, e.g., 'stated income, stated debt‑to‑income ratio, stated credit range, stated down payment, and stated property value']. We do not use your race, ethnicity, national origin, religion, sex, age (except as required by law to confirm capacity to contract), marital status, familial status, disability, sexual orientation, gender identity, source of income, ZIP code (beyond general geographic state/region), or any other protected characteristic in this model. **If you would like the principal reasons your estimate is lower than you expected, you can request a written statement of reasons at [link] within 30 days of this estimate; we will respond within 30 days of your request.**"

**Disclaimer about protected characteristics / FCRA:**

> "We do not ask for, and we do not want, your race, ethnicity, national origin, religion, sex, age, marital status, familial status, disability status, sexual orientation, gender identity, source of income, or any other protected characteristic. **Any protected‑characteristic information you provide is voluntary and will not affect your estimate.**"

**Equal Housing Opportunity (24 CFR Part 109):**

> "**Equal Housing Opportunity.** We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, except as allowed by law."

(Include the EHO logo on every page that contains a mortgage product, rate, or qualification tool.)

**Specific CA / NY additions:**
- **California (Unruh Civil Rights Act):** "**We do not discriminate on the basis of race, color, national origin, religion, sex (including pregnancy, childbirth, or related medical conditions), age (40 and over), genetic information, citizenship, immigration status, primary language, marital status, sexual orientation, gender identity, gender expression, medical condition, ancestry, source of income, or any other category protected by federal, state, or local law.**"
- **New York (NYS Human Rights Law):** "**We do not discriminate on the basis of race, creed, color, national origin, sexual orientation, military status, sex, gender identity or expression, disability, predisposing genetic characteristic, marital status, familial status, lawful source of income (including Section 8 housing vouchers), or status as a victim of domestic violence.**"

### 7.3 "Approval likelihood" phrasing — avoid adverse‑action trigger

The site can present a **probability** without triggering adverse action **if** it does not (a) tell the user they are "denied" or "not approved," (b) issue a binding pre‑approval, or (c) take a "credit action." A risk‑score on a 0–100 scale with a "your readiness estimate" label is the safest framing.

**Safe language examples:**

> "Your estimated mortgage readiness: **72 / 100**. **Higher scores indicate a higher likelihood that a participating lender may approve a mortgage application based on the inputs you provided, but a higher score does not guarantee any particular loan offer.** Lenders consider many additional factors (including a hard credit pull, income and asset verification, and property appraisal) before approving a mortgage."

> "What this means: **Your estimated readiness is in the 'Moderate' range.** Many lenders would consider an application with inputs similar to yours, but you may want to [list specific educational next steps, e.g., 'reduce your stated debt, increase your down payment, or check your credit report for errors']. **A participating lender can tell you, with no impact to your credit score, whether you are pre‑qualified based on a soft credit pull.**"

> "Why this is not a credit decision: We do not pull your credit report. We do not verify your income. We do not guarantee any loan. We do not decide whether you are approved for a mortgage. We provide an educational estimate based on the inputs you gave us."

**Phrases to AVOID on the result page:**

- ❌ "You are approved / You are denied"
- ❌ "You do not qualify" (alone, without the "no impact to credit" soft‑pull referral)
- ❌ "Pre‑approved" (this is a specific term with specific obligations)
- ❌ "We cannot match you with a lender" (without the appropriate redirect)
- ❌ "Your loan has been rejected" (these are adverse‑action terms)
- ❌ "Based on your profile, you will not be approved for a mortgage"
- ❌ "Internal score" or "qualifying score" alone (Circular 2022‑03: insufficient)

**Phrases to USE:**

- ✅ "Readiness estimate" / "Mortgage readiness" / "Educational estimate"
- ✅ "Likelihood" (when paired with a clear "this is not a credit decision" disclosure)
- ✅ "If you are interested in applying, we can connect you with a participating lender" (with a soft‑pull pathway to avoid hard pull)
- ✅ "Would you like a free, no‑impact‑to‑your‑credit‑score pre‑qualification check from a participating lender?"

### 7.4 Adverse action notice — when triggered, what to provide

If the site (a) is a "creditor" under § 1002.2(l) and (b) gives the user an output that the user reasonably understands as a denial or as a substantially less favorable offer, the site **must** provide a 12 CFR 1002.9 notice. The notice must include:

1. **Statement of the action taken** — e.g., "We did not provide a high‑confidence mortgage readiness estimate based on the inputs you submitted." (Avoid "denied" / "rejected" if the site is not actually denying credit.)
2. **Name and address of the creditor** — the site's full legal name and address.
3. **ECOA notice** (verbatim, 12 CFR 1002.9(b)(1)) — see § 2.1.
4. **Name and address of the federal agency that administers compliance** — for nonbank mortgage creditors, this is typically the **CFPB**. See 12 CFR Part 1002, Appendix A.
5. **Statement of specific reasons** (12 CFR 1002.9(b)(2)) — the **four** principal factors actually used in the score that drove the low result. **Do not** use boilerplate or "you did not achieve a qualifying score" (Circular 2022‑03 explicitly rejects this).

> **Operational implementation.** The site must maintain a **feature‑level mapping** from the AI model output to the **four** specific drivers (e.g., "estimated debt‑to‑income ratio of X%", "stated credit range of [band]", "stated down payment of X%", "stated liquid reserves of X months"). The site must **not** include drivers that are not actually used in the model, and must **not** omit a principal driver (Circular 2023‑03: "no factor that was a principal reason for adverse action may be excluded from disclosure").

**Sample adverse action reasons (for an "approval likelihood" model, if adverse action is triggered):**

- "Insufficient stated liquid reserves (model estimates you have X months of reserves; minimum for this product is Y months)"
- "Stated debt‑to‑income ratio above the range for this product (model estimates DTI of X%; product guideline range is Y%–Z%)"
- "Stated credit range in a band that historically has higher default rates for this product"
- "Stated down payment below the minimum for this product (model input: X%; product minimum: Y%)"

These are **acceptable** because they are specific to the model's principal drivers. They are **not** boilerplate.

> **Critical:** The site must also provide the disclosures required by **FCRA** 15 USC 1681m(a) if the result was based in whole or in part on a **consumer report** (including a soft pull that qualifies as a consumer report). The FCRA disclosures are **additive**, not substitutive. See § 2.6.

### 7.5 Self‑reported credit score — disclosure and authentication

The site should:
- **Clearly disclose** that any credit score is **self‑reported by the user** and is not a FICO / VantageScore / bureau‑sourced score.
- **Not display the score** as a "verified" or "official" credit score.
- **Map self‑reported scores to bands** (e.g., "below 580," "580–619," "620–679," "680–739," "740+") rather than using the precise number; this avoids the "credit score disclosure" requirements of FCRA § 1681g(c) and the risk that the user mistakenly treats the self‑reported score as official.
- If the user consents to a **soft pull**, the site should explain the soft‑pull consent in plain language (FCRA "permissible purpose" under 15 USC 1681b).
- **Do not conduct a hard pull** without separate, explicit consent and a permissible purpose (15 USC 1681b).

### 7.6 If the user is below threshold — disclaimers, alternatives, safe language

When a user's estimate is low, the site should **not** deliver a denial. Instead, the result page should include:
- A clear **educational** framing: "Your estimated readiness is in the **Building** range."
- A list of **general factors** the model considered, **without** identifying the user as a member of any protected class.
- A list of **general next steps** (increase down payment, reduce stated debt, check credit report, etc.).
- A **soft‑pull pre‑qualification referral** to a participating lender.
- A link to **HUD‑approved housing counselors** (https://www.hud.gov/i_want_to/talk_to_a_housing_counselor) for free, non‑lender advice.
- A **disclaimer** that the result is not a credit decision and that any actual application will be evaluated by a participating lender on its own criteria.
- A **state‑specific housing‑resource referral** (e.g., California's **HUD‑approved counselors** list, NY's **SONYMA** or **HFA** programs, the **state Housing Finance Agency** in the user's state).

> **Do NOT** on the "below threshold" page say "based on your [race, ethnicity, ZIP, religion, sex, etc.] you are unlikely to qualify." That is a textbook 42 USC 3604(c) and 24 CFR 100.75(c) violation, and an ECOA Reg B § 1002.4(b) discouragement / disparate‑treatment violation.

### 7.7 What to do (and not do) in marketing / advertising (24 CFR 100.75)

| Prohibited | Safer substitute |
|---|---|
| "For [specific race/ethnicity] first‑time buyers" | "First‑time‑buyer programs available in your area" |
| "Christian community" / "kosher" / "halal" | (Do not use) |
| "No children" / "Adults only" / "Empty nesters" | (Do not use; familial status) |
| "No Section 8" / "No housing choice voucher" | (Do not use; source‑of‑income in CA, NY, CO, IL, NJ, MA, etc.) |
| "Walk to church" / "Family‑friendly (no singles)" | "Neighborhood with nearby parks and community amenities" |
| "For the working mom" / "Bachelor pad" | (Do not use; sex / familial status) |
| "Wheelchair accessible" unless advertised in a 3607‑permitted program | "Accessibility features" / general accessibility language |
| "ZIP‑code‑targeted" Facebook / Google ad campaigns | Geo‑target to large areas (state / metro) only; never use ZIP‑code as a targeting proxy |
| "Military‑only" / "Veterans‑only" | (State law varies; some states allow veteran status as a non‑protected class, others treat military status as protected — check the state) |
| Any slogan / image that signals a preference | Use neutral, diverse, broad imagery; the EHO logo + statement |

---

<a id="8-testing"></a>
## 8. Safe Architecture: How to Test for Disparate Impact and Avoid Proxy Bias

### 8.1 The 2025–2026 fair‑lending testing framework

Even though the 2026 Reg B rule eliminates ECOA disparate‑impact liability (effective July 21, 2026), the **FHA disparate‑impact theory remains** (42 USC 3605) and is enforced by HUD and DOJ. The CFPB retains UDAAP authority under CFPA § 1036 over AI that "unfairly" discriminates. State AGs (NY, CA, MA, NJ, IL, CO) retain parallel authority. The FFIEC Interagency Fair Lending Examination Procedures (2009) remain the operational examiner framework. **Continue to test for disparate impact.**

### 8.2 The 80% / four‑fifths rule

The **"four‑fifths" / "80% rule"** comes from the **Uniform Guidelines on Employee Selection Procedures** (29 CFR 1607.4D), which apply to employment selection. Courts and federal regulators (HUD, DOJ, CFPB) have frequently used the 80% rule as a **rule of thumb for disparate‑impact screening in credit and insurance**, but it is not by itself a safe harbor. (See **NAACP v. American Family Mutual Insurance Co.**, 978 F.2d 287 (7th Cir. 1992) — accepted the 80% rule as a prima facie test in insurance; HUD's 2013 FHA disparate‑impact rule incorporates the rule of thumb.)

> **29 CFR 1607.4D (verbatim, Uniform Guidelines on Employee Selection Procedures):** "**Adverse impact and the 'four‑fifths rule.'** A selection rate for any race, sex, or ethnic group which is **less than four‑fifths (4⁄5) (or eighty percent) of the rate for the group with the highest rate will generally be regarded by the Federal enforcement agencies as evidence of adverse impact**, while a greater than four‑fifths rate will generally not be regarded by Federal enforcement agencies as evidence of adverse impact. **Smaller differences in selection rate may nevertheless constitute adverse impact**, where they are significant in both statistical and practical terms or where a user's actions have discouraged applicants disproportionately on grounds of race, sex, or ethnic group. **Greater differences in selection rate may not constitute adverse impact** where the differences are based on small numbers and are not statistically significant, or where special recruiting or other programs cause the pool of minority or female candidates to be atypical of the normal pool of applicants from that group. Where the user's evidence concerning the impact of a selection procedure indicates adverse impact but is based upon numbers which are too small to be reliable, evidence concerning the impact of the procedure over a longer period of time and/or evidence concerning the impact which the selection procedure had when used in the same manner in similar circumstances elsewhere may be considered in determining adverse impact. Where the user has not maintained data on adverse impact as required by the documentation section of applicable guidelines, the Federal enforcement agencies may draw an inference of adverse impact of the selection process from the failure of the user to maintain such data, if the user has an underutilization of a group in the job category, as compared to the group's representation in the relevant labor market or, in the case of jobs filled from within, the applicable work force." (Source: 29 CFR 1607.4D, current eCFR, https://www.ecfr.gov/current/title-29/section-1607.4.)

> **Practical implementation.** For a mortgage diagnostic model, calculate the **selection rate** (the rate at which users receive a "high likelihood" output, or are routed to the lead) **by protected class** (race, ethnicity, sex, age group, national origin, etc.). If the **selection rate for the lowest‑selected group is less than 80% of the selection rate for the highest‑selected group**, the model has a **flagged disparate impact** and requires further investigation. **Smaller** differences may still be adverse impact, and **larger** differences may be defensible. The rule is **screening, not a determination of liability**. Also note: a **failure to maintain data** can itself create an **adverse‑impact inference** against the user.

### 8.3 Proxy detection

Protected classes cannot be used directly (and shouldn't be — see § 7.2 disclaimer). They are often **proxied** by:
- **ZIP code** (high correlation with race, ethnicity, and national origin; the historical "redlining" variable)
- **First name / surname** (race, ethnicity, national origin)
- **Email domain / IP geolocation** (national origin, race)
- **Device / browser language** (national origin)
- **Age of user** (age, in some cases)
- **Marital status inferred from profile**
- **Income source** (e.g., public assistance, source of income)
- **School / employer** (race, age)

> **Operational check.** Audit each model input for known or estimated correlation with protected class. If the variable is a known proxy (e.g., ZIP code at the census‑tract level), either (a) drop it, (b) aggregate it to a larger geography (state, MSA, county), or (c) document a business necessity, run a less‑discriminatory‑alternative analysis, and accept the litigation risk.

### 8.4 Feature selection — what to include and what to exclude

**Safe features (no/minimal disparate‑impact risk):**
- Stated income (with anti‑discrimination controls)
- Stated debt and debt‑to‑income ratio
- Stated credit range (banded; from a self‑reported source)
- Stated down payment amount / LTV band
- Stated liquid reserves (months)
- Stated loan term / property type / occupancy type
- Stated property value (banded)

**High‑risk features (proxy for protected class — drop or aggregate):**
- Census‑tract‑level geography (use state / metro / county only)
- Individual ZIP code as a continuous variable
- Self‑reported race / ethnicity / national origin
- Self‑reported religion
- Self‑reported sexual orientation / gender identity
- Self‑reported disability / health status
- Self‑reported familial status
- Self‑reported source of income (note: source of income is a protected class in many states; **never** condition the estimate on source of income)
- First name, surname, email domain
- IP geolocation more granular than state / metro

**Modelling technique risk:**
- **Uninterpretable "black‑box" models** (deep neural nets, certain ensembles) — see Circular 2022‑03: "the legal requirement is the same: Creditors must be able to provide applicants against whom adverse action is taken with an accurate statement of reasons." Use **interpretable models** (logistic regression, GAM, monotonic gradient boosting with monotonic constraints, or models with mandated SHAP / LIME / counterfactual explanations and validated accuracy).
- **Features that are not validated for creditworthiness** — Circular 2023‑03 fn 10: "**using . . . data such as cashflow data, that are directly related to consumers' finances and how consumers manage their financial commitments may present lower risks than other data**" — but the circular also flags that **"data that are harvested from consumer surveillance or data not typically found in a consumer's credit file or credit application"** raise **"additional consumer protection risk."** See also the Interagency Statement on Alternative Data.

### 8.5 Ongoing monitoring

> The FFIEC Interagency Fair Lending Examination Procedures and the CFPB Circulars both contemplate **continuous monitoring**, not just one‑time pre‑launch testing. Implement:
> - **Pre‑launch bias audit** (full disparate‑impact test by protected class; sign‑off by compliance and a fair‑lending officer).
> - **Quarterly ongoing monitoring** (selection rate, average estimate, average feature value by protected class; flag any segment with > 80% rule or > 10pp gap).
> - **Annual model review** (full model risk management: re‑validation, performance by segment, drift detection, bias re‑test).
> - **Continuous model risk management** per the CFPB's 2017/2018 supervisory guidance on model risk management (e.g., the CFPB's Bulletin 2012‑03, the FRB's SR 11‑7 / SR 15‑18 model risk management guidance, and the interagency MRM principles).

### 8.6 The AI Risk Management Framework (NIST AI RMF 1.0)

The **NIST AI Risk Management Framework (AI RMF 1.0, Jan 2023)** and the **NIST Generative AI Profile (NIST AI 600‑1, July 2024)** are the federal government's voluntary framework. The companion **NIST SP 1270** ("Towards a Standard for Identifying and Managing Bias in Artificial Intelligence," 2022) is the federal reference for AI bias management. The four core functions of the AI RMF are:
1. **GOVERN** — establish policies, roles, and accountability for AI risk.
2. **MAP** — identify AI risks and impacts; categorize the system.
3. **MEASURE** — analyze, assess, benchmark, and monitor AI risk and bias.
4. **MANAGE** — prioritize, treat, and respond to AI risk; document and communicate.

A mortgage diagnostic site should be classified as a **"high‑impact" AI system** under the AI RMF (because it materially influences credit access). The site should adopt the four core functions in writing, document the AI risk management plan, and make it available for examiner / regulator review.

### 8.7 Documentation to keep

For each model version, keep:
- **Model card** (model purpose, intended use, training data summary, performance metrics, known limitations, fair‑lending testing summary).
- **Bias audit report** (selection rate by protected class; feature correlation analysis; proxy detection; less‑discriminatory‑alternative analysis).
- **Adverse action reason code mapping** (which model output → which § 1002.9 reason text → when is it triggered).
- **Model risk management** documentation (validation, performance monitoring, change log).
- **Complaint log** (any consumer complaint about the estimate; how it was resolved).
- **Consent / disclosure text** (with version dates).
- **Vendor / third‑party model documentation** (if the model is licensed, the license agreement must include audit and explainability rights).

---

<a id="9-state"></a>
## 9. State Law Add-Ons (CA, NY, CO, IL, NJ, MA) — Protected Classes and AI Rules

> The federal floor is **race, color, national origin, religion, sex, familial status, disability** (FHA) and **race, color, religion, national origin, sex, marital status, age, public assistance, CCPA rights** (ECOA). All of the following states add protected classes. The most consequential for a national mortgage site are listed below.

### 9.1 California

- **Protected classes (Unruh Civil Rights Act, Cal. Civ. Code § 51; FEHA, Cal. Gov. Code § 12955):** race, color, national origin, religion (including religious dress and grooming), sex (including pregnancy, childbirth, breastfeeding, and related medical conditions), gender, gender expression, gender identity, sexual orientation, marital status, **age (40 and over)**, genetic information, **medical condition** (including cancer and HIV), **ancestry**, citizenship, immigration status, **primary language**, **military or veteran status**, and **source of income** (including Section 8 / HCV). California explicitly prohibits discrimination based on **source of income** for residential real‑estate transactions.
- **Enforcers:** California Civil Rights Department (CRD, formerly DFEH); California Department of Financial Protection and Innovation (DFPI); California Attorney General; local city / county human relations commissions.
- **AI / automated decision rules:** DFPI has issued consumer‑protection guidance on AI in lending. California is one of the most aggressive states on AI law — the **California AI Transparency Act (SB 942)**, the **California AI Training Data Transparency (AB 2013)**, and the existing **CCPA / CPRA** (automated decision‑making regulations finalized by the California Privacy Protection Agency in 2023) all may apply to a mortgage diagnostic site that processes California consumer data.
- **Practical implication:** Do not use **source of income** (Section 8 voucher, child support, alimony, SSI, SSDI, etc.) as a disqualifier. Provide a separate CA consumer rights notice.

### 9.2 New York

- **Protected classes (NYS Human Rights Law § 296; NYC Human Rights Law § 8-107):** race, creed, color, national origin, **sexual orientation** (including gay, lesbian, bisexual, asexual), **gender identity or expression**, **transgender status**, **military status**, sex (including pregnancy, childbirth, breastfeeding, and related medical conditions), **disability**, **predisposing genetic characteristic**, **marital status**, **familial status**, **lawful source of income** (including Section 8 / HCV / public assistance), **status as a victim of domestic violence**, and (in NYC) **alienage / citizenship status**, **height / weight**, **hair texture / protective hairstyles** (NYC Commission on Human Rights guidance), and **partnership status** (NYC).
- **Enforcers:** New York State Division of Human Rights; NYC Commission on Human Rights; NY Department of Financial Services (DFS); NY Attorney General.
- **AI / mortgage rules:** NY DFS issued **Guidance on AI in Insurance Underwriting (Circular Letter No. 1, 2019 and updates)**; NY DFS issued **2023 guidance on fair lending and AI**; the NY DFS **BitLicense / virtual currency rules** apply to some financial AI. NY has a **statutory fair‑lending authority** that goes beyond the federal ECOA.
- **NYC Local Law 144 of 2021** — Automated Employment Decision Tools. (AEDT) — may apply if the site uses AI for hiring, but not for consumer lending.
- **Practical implication:** Do not use source of income as a disqualifier. NY state law and NYC law go beyond federal law on multiple dimensions. Display a separate NY consumer rights notice.

### 9.3 Colorado

- **Protected classes (Colorado Anti‑Discrimination Act, § 24-34-502):** race, color, religion (creed), national origin, ancestry, sex (including pregnancy, childbirth, or related medical conditions; **sexual orientation, gender identity, gender expression**), marital status, **familial status**, **disability** (physical, mental, or learning), age (40 and over), **lawful source of income** (including housing vouchers), and (in some jurisdictions) **military status**.
- **AI law:** **Colorado AI Act (SB 24‑205, signed May 17, 2024, effective Feb 1, 2026)** — "high‑risk" AI systems, including those making "consequential decisions" in education, employment, financial services, government services, healthcare, housing, insurance, and legal services, must implement anti‑bias risk management, impact assessments, and consumer notice requirements. **A mortgage diagnostic site is very likely a "high‑risk AI system"** under this act. The Colorado AI Act is enforced by the Colorado Attorney General. Penalties: $20,000 per violation.
- **Practical implication:** The Colorado AI Act will require a written **AI risk management policy and program**, a **disparate‑impact impact assessment**, **consumer notice of AI use**, and **right‑to‑correct / appeal** procedures. Begin compliance work in 2025.

### 9.4 Illinois

- **Protected classes (Illinois Human Rights Act, 775 ILCS 5/1-103):** race, color, religion, national origin, ancestry, **age (40 and over)**, **sex** (including pregnancy, childbirth, and related medical conditions; **sexual orientation, gender identity, gender expression**), marital status, **familial status**, **disability** (physical or mental), **military status** (including veteran status), **unfavorable military discharge**, **sexual orientation** (added 2020), **order of protection** status, **gender identity** (added 2020), **source of income** (in some contexts), and **citizenship / immigration status** (in employment, not housing).
- **Enforcer:** Illinois Department of Human Rights; Illinois Human Rights Commission.
- **AI law:** Illinois has the **Illinois Artificial Intelligence Video Interview Act (820 ILCS 42)** (employment), the **Illinois Biometric Information Privacy Act (BIPA)** (biometric data, $1,000–$5,000 per negligent / intentional violation), and the **Illinois Consumer Fraud Act** (general consumer protection that can reach AI bias).
- **Practical implication:** If the site uses biometric inputs (face, voice, fingerprint) for any purpose, **BIPA compliance is mandatory** before collection. BIPA violations are routinely $1,000–$5,000 per violation and are a mass‑action target.

### 9.5 New Jersey

- **Protected classes (NJ Law Against Discrimination, N.J.S.A. 10:5-4):** race, color, national origin, ancestry, **age (18 and over)**, religion (creed), sex (including pregnancy, childbirth, breastfeeding, and related medical conditions), **gender identity or expression**, **sexual orientation**, **marital status**, **civil union status**, **domestic partnership status**, **familial status**, **disability** (including perceived disability, AIDS / HIV), **atypical hereditary cellular or blood trait**, **genetic information**, **service in the armed forces**, **national guard**, and **source of income** (in some contexts).
- **Enforcer:** NJ Division on Civil Rights; NJ Department of Banking and Insurance.
- **Practical implication:** NJ has a broad protected‑class list and a strong private right of action; treble damages and attorneys' fees are available.

### 9.6 Massachusetts

- **Protected classes (M.G.L. c. 151B; c. 93H):** race, color, religious creed, national origin, **sex (including pregnancy, childbirth, and related medical conditions; gender identity, gender expression)**, **sexual orientation**, **age (40 and over)**, **marital status**, **familial status**, **disability** (including genetic information), **veteran / military status**, **source of income** (housing), and (in some contexts) **criminal record** (limited).
- **AI law:** MA Attorney General has issued **2024 guidance on AI bias in consumer finance**; MA is one of the few states with an **algorithmic accountability** law. The MA AG has been active in enforcing against AI bias in insurance (e.g., the **2024 settlements with payers over AI‑based coverage denials**).
- **MA Data Privacy Law (M.G.L. c. 93H + 201 CMR 17.00):** the MA Security Regulation requires a written information security program, encryption, and breach notification.
- **Practical implication:** Maintain a written information security program (WISP) per 201 CMR 17.00. Avoid AI bias claims by maintaining fair‑lending testing.

### 9.7 Other states with source‑of‑income protection in housing

- **Connecticut, District of Columbia, Maine, Maryland, Minnesota, Oregon, Vermont, Washington** — all prohibit discrimination based on source of income in residential real‑estate transactions, including Section 8 / HCV.

### 9.8 State AI / algorithmic accountability laws (2024–2026)

- **Colorado AI Act (SB 24‑205)** — see § 9.3. Most consequential.
- **California AB 2930 (Automated Decision Tools)** — passed 2024; final regulations pending. Will require impact assessments for "automated decision tools" used for significant decisions.
- **California SB 942 (California AI Transparency Act)** — requires AI detection tools / watermarks for large AI providers (may apply to AI used in the diagnostic).
- **California AB 2013 (Training Data Transparency)** — requires disclosure of training data.
- **NYC Local Law 144 of 2021 (AEDT)** — bias audits for automated employment decision tools.
- **Texas TDPSA (Texas Data Privacy and Security Act, 2024)** — Texas‑specific data rights.
- **Oregon OCPA (Oregon Consumer Privacy Act, 2024)** — Oregon‑specific data rights.
- Other state privacy laws: **Connecticut CTDPA, Virginia VCDPA, Colorado CPA, Utah UCPA, Iowa, Indiana, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Rhode Island, Tennessee, Texas, Washington** — each may apply depending on the site.

### 9.9 Other federal regulators to consider

- **Federal Trade Commission (FTC) — Section 5 of the FTC Act (15 USC 45)** — unfair or deceptive acts or practices. The FTC has been active on **AI‑related consumer protection** in lending, tenant screening, and employment (e.g., the **2024 FTC enforcement actions against Ring, Workado, Rite Aid (over face recognition)**, and the **2024 FTC settlement with a tenant‑screening AI vendor**). A mortgage diagnostic site is within FTC jurisdiction (the FTC has parallel authority with the CFPB over many nonbank financial services).
- **FTC Fair Credit Reporting Act (FCRA) enforcement** — the FTC has been active on FCRA violations by data brokers and AI vendors.

---

<a id="10-checklist"></a>
## 10. Compliance Checklist for a "Mortgage Readiness / Approval Likelihood" Website

> Use this as a pre‑launch and ongoing checklist. Adapt with counsel. Items marked **[CFPB]**, **[HUD]**, **[DOJ]**, **[FHA]**, **[Reg B]**, **[FCRA]**, **[UDAAP]**, **[State]** refer to the relevant regulatory source.

### 10.1 Pre‑launch — corporate / structural

- [ ] **Entity formation** — is the operating entity a "creditor" under 12 CFR 1002.2(l)? If yes, the entity is a "covered person" under CFPA § 1026 (12 USC 5481) and is subject to CFPB supervisory authority. If not, the site is still subject to the **lead‑generation / referral** prong of the creditor definition and to the **"regularly refers applicants or prospective applicants"** prohibition under § 1002.4. [Reg B]
- [ ] **State licensing** — confirm whether any state mortgage lender / broker / loan originator license is required. Most states require a license for **taking a mortgage application or offering a mortgage product**; some states require a license for a **mortgage lead generator** (e.g., California, Texas, Illinois). [State]
- [ ] **NMLS registration** — if any originator activity is performed, register the individual originators on NMLS. [State]
- [ ] **Privacy policy** — CCPA/CPRA, CTDPA, VCDPA, CPA, UCPA, and other state privacy law compliance. Automated decision‑making regulations (CA Privacy Protection Agency) and right‑to‑opt‑out. [State]
- [ ] **TCPA / TSR / state telemarketing** — if any SMS, call, or lead‑transfer activity occurs, the Telephone Consumer Protection Act, the Telemarketing Sales Rule, and state mini‑TCPA laws (e.g., Florida Telephone Solicitation Act, Washington CEMA, Oklahoma TCPA) apply. **Express written consent** required for marketing texts / calls / prerecorded messages. [TCPA]
- [ ] **CAN‑SPAM** — if any marketing email is sent, the CAN‑SPAM Act applies (opt‑out, physical address, accurate headers). [CAN‑SPAM]
- [ ] **GLBA / Safeguards Rule** — if any nonpublic personal information is collected, the Safeguards Rule (16 CFR Part 314) requires a written information security program. [GLBA]
- [ ] **State information security laws** — MA 201 CMR 17.00, NY SHIELD Act, CA CPRA, IL BIPA (if biometric data). [State]
- [ ] **Insurance** — E&O, cyber, fair‑lending regulatory defense coverage.

### 10.2 Pre‑launch — the AI / model

- [ ] **AI Risk Management Program** — adopt the **NIST AI RMF 1.0** four core functions (GOVERN, MAP, MEASURE, MANAGE) in writing. [NIST / CFPB]
- [ ] **Model risk management** — adopt the FRB SR 11‑7 / SR 15‑18 model risk management principles: governance, model development, validation, ongoing monitoring. [CFPB / FRB]
- [ ] **Model interpretability** — implement SHAP / LIME / counterfactual explanations or use an interpretable model. The site must be able to provide **four principal adverse‑action reasons** for any low / denial result. [CFPB Circulars 2022-03, 2023-03]
- [ ] **Bias audit / disparate‑impact test** — pre‑launch bias audit on the model across protected classes (race, ethnicity, sex, age, national origin, religion, disability, familial status, sexual orientation, gender identity, source of income, ZIP code). Use the **80% rule** as a screen. Investigate any flagged segment. **Document the audit, the methodology, the findings, and the mitigations.** [FHA / FFIEC / NIST SP 1270]
- [ ] **Proxy analysis** — audit each input for known or estimated correlation with protected class. Document the analysis. Drop or aggregate high‑risk proxies. [FHA / CFPB]
- [ ] **Less‑discriminatory‑alternative analysis** — if the model has a flagged disparate impact, document the less‑discriminatory alternative considered and the reason the chosen model is the least discriminatory that still meets the business need. [FHA / HUD 2013 disparate‑impact rule]
- [ ] **Vendor due diligence** — if the model is licensed, audit the vendor for (i) model risk management practices, (ii) fair‑lending testing, (iii) explainability, (iv) data provenance, (v) data licensing, (vi) ongoing monitoring rights, (vii) audit rights, (viii) representations and warranties regarding non‑discrimination. [Vendor]
- [ ] **Adverse action reason‑code mapping** — implement the mapping from model output → § 1002.9 reason text. Validate with the model developer. [Reg B]
- [ ] **Reject inference testing** — the less‑discriminatory alternative analysis.

### 10.3 Pre‑launch — disclosures and consent

- [ ] **Top‑of‑page disclosure** — clear "this is educational, not a credit decision" language (§ 7.2).
- [ ] **Model explainability disclosure** — list the factors the model uses (§ 7.2).
- [ ] **Protected‑characteristic disclaimer** — the site does not ask for protected characteristics and does not use them in the model (§ 7.2).
- [ ] **EHO statement + logo** — on every page with a mortgage product, rate, or qualification tool. [FHA / 24 CFR Part 109]
- [ ] **State consumer rights notice** — CA, NY, CO, MA, IL, NJ as applicable (§ 9).
- [ ] **Consent for soft pull** — explicit, separate, plain‑language consent before any consumer report is pulled. [FCRA 15 USC 1681b]
- [ ] **Consent for hard pull** — separate, explicit, plain‑language consent before any hard pull. [FCRA]
- [ ] **Lead‑transfer consent** — express written consent for the site to share the user's information with specific participating lenders. **Disclose the specific lenders or lender categories** (some states require lender‑by‑lender disclosure). [TCPA / TSR / State]
- [ ] **Marketing consent** — separate consent for marketing communications. Express written consent for texts / calls. [TCPA]
- [ ] **Privacy policy + cookie policy + state‑specific rights** — CCPA/CPRA notice of right to opt out of sale / sharing; right to limit use of sensitive personal information; right to know; right to delete. [State]

### 10.4 Pre‑launch — advertising and marketing

- [ ] **No preference language** in ad copy, illustrations, examples, or taglines. [FHA / 24 CFR 100.75]
- [ ] **No ZIP‑code targeting** of mortgage ads. [FHA / Reg B / Townstone]
- [ ] **EHO statement and logo** on every ad and landing page. [FHA / 24 CFR Part 109]
- [ ] **No source‑of‑income exclusion** in CA, NY, CO, IL, NJ, MA, and other source‑of‑income jurisdictions. [State]
- [ ] **No familial status / age / disability / sex preference** language. [FHA]
- [ ] **No "approval" / "denied" / "pre‑approved"** language in the result UI. [Reg B]
- [ ] **Inclusive imagery** — diverse, broad, non‑preferential. [FHA]
- [ ] **Equal Housing Lender** statement for any lender relationships. [FHA / 24 CFR Part 110]

### 10.5 Ongoing — operations

- [ ] **Quarterly bias monitoring** — selection rate by protected class; flag > 80% rule or > 10pp gap; investigate. [FHA / FFIEC]
- [ ] **Annual model review** — full model risk management: re‑validation, performance, drift, bias re‑test. [SR 11‑7 / CFPB]
- [ ] **Complaint log** — record and resolve any consumer complaint about the estimate. [FHA / UDAAP]
- [ ] **Material change approval process** — any change to inputs, model, vendor, or UI requires a documented approval (compliance, fair‑lending officer, model risk officer). [SR 11‑7]
- [ ] **HUD complaints monitoring** — track HUD charges of discrimination against the site. [FHA]
- [ ] **Reg B audit trail** — every user input, every output, every adverse‑action reason, every "reasons requested" event, every reason provided — retained for at least **25 months** (12 CFR 1002.12(b)(1) for applications received; longer under state law). [Reg B]
- [ ] **HMDA audit trail** (if the site is a HMDA reporter) — full HMDA data, retained for at least 5 years. [Reg C / 12 CFR 1003]
- [ ] **Disclosures version control** — every version of every disclosure dated and archived.

### 10.6 Pre‑launch / ongoing — the "what if we're wrong" playbook

- [ ] **Fair‑lending response team** — designated person or team for fair‑lending inquiries and complaints.
- [ ] **HUD / DOJ / CFPB response template** — pre‑drafted.
- [ ] **Outside counsel** — pre‑engaged on fair‑lending issues.
- [ ] **Examiner readiness** — documentation organized and ready for a CFPB, HUD, or state regulator exam.

---

<a id="11-sources"></a>
## 11. Source File Index

### 11.1 Primary statutes and regulations (verbatim text)

- **Equal Credit Opportunity Act, 15 USC 1691 et seq.** — https://www.law.cornell.edu/uscode/text/15/1691a (definitions); https://www.law.cornell.edu/uscode/text/15/1691c (discrimination); https://www.law.cornell.edu/uscode/text/15/1691d (adverse action notices).
- **Fair Housing Act, 42 USC 3601 et seq.** — https://www.law.cornell.edu/uscode/text/42/3604 (sale/rental + advertising); https://www.law.cornell.edu/uscode/text/42/3605 (residential real‑estate‑related transactions).
- **Regulation B, 12 CFR Part 1002** — https://www.ecfr.gov/current/title-12/part-1002 (full Part 1002, with 1002.2, 1002.4, 1002.5, 1002.6, 1002.9, 1002.12, 1002.14); Appendix B (model forms) and Appendix C (sample adverse action notices) at https://www.ecfr.gov/current/title-12/chapter-X/part-1002.
- **HUD Fair Housing Act regulations, 24 CFR Part 100** — https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/subchapter-A/part-100 (100.50, 100.75, 100.80, 100.85, 100.120–100.140, 100.500).
- **HUD Fair Housing Advertising, 24 CFR Part 109** — https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/subchapter-A/part-109.
- **Equal Credit Opportunity Act (Regulation B), 91 FR 21620** (Apr 22, 2026) — https://www.federalregister.gov/d/2026-07804.
- **Consumer Financial Protection Circular 2022-03, 87 FR 35864** (June 14, 2022) — https://www.federalregister.gov/d/2022-12729.
- **Consumer Financial Protection Circular 2023-03, 89 FR 27361** (Apr 17, 2024) — https://www.federalregister.gov/d/2024-08003.
- **Interagency Quality Control Standards for AVMs, Final Rule** (July 2024) — https://www.consumerfinance.gov/rules-policy/final-rules/quality-control-standards-for-automated-valuation-models/.
- **Joint Statement on Enforcement Efforts Against Discrimination and Bias in Automated Systems** (Apr 25, 2023) — https://www.consumerfinance.gov/about-us/newsroom/cfpb-federal-partners-confirm-automated-systems-and-advanced-technology-not-an-excuse-for-lawbreaking-behavior/.
- **CFPB Fair Lending Report to Congress (CY 2023), 89 FR doc 2024-14533** — https://www.federalregister.gov/d/2024-14533.
- **NIST AI RMF 1.0** (Jan 2023) — https://www.nist.gov/itl/ai-risk-management-framework.
- **NIST SP 1270** ("Towards a Standard for Identifying and Managing Bias in Artificial Intelligence," 2022) — https://doi.org/10.6028/NIST.SP.1270.
- **FFIEC Interagency Fair Lending Examination Procedures** (Aug 2009) — https://www.ffiec.gov/fairlending.pdf (or via https://www.consumerfinance.gov/fair-lending/).
- **CFPB compliance resources / ECOA** — https://www.consumerfinance.gov/compliance/compliance-resources/other-applicable-requirements/equal-credit-opportunity-act/ (landing page).
- **CFPB compliance resources / FHA** — https://www.consumerfinance.gov/compliance/compliance-resources/other-applicable-requirements/fair-housing-act/ (landing page; URL has changed in the past — the current location can be reached via the search at https://www.consumerfinance.gov/compliance/compliance-resources/).
- **HUD Program Office of Fair Housing and Equal Opportunity** — https://www.hud.gov/program_offices/fair_housing_equal_opp.
- **DOJ Civil Rights Division, Housing and Civil Enforcement Section** — https://www.justice.gov/crt/housing-and-civil-enforcement-section (DOJ press releases are bot‑protected; the press release URL patterns are https://www.justice.gov/opa/pr/[slug] and may require a browser to retrieve).

### 11.2 CFPB enforcement actions (action pages on consumerfinance.gov)

- **Townstone Financial, Inc. and Barry Sturner** — https://www.consumerfinance.gov/enforcement/actions/townstone-financial-inc-and-barry-sturner/.
- **Draper & Kramer Mortgage Corporation** — https://www.consumerfinance.gov/enforcement/actions/draper-kramer-mortgage-corporation/.
- **Fairway Independent Mortgage Corporation** — https://www.consumerfinance.gov/enforcement/actions/fairway-independent-mortgage-corporation/.
- **Trident Mortgage Company, LP** — https://www.consumerfinance.gov/enforcement/actions/trident-mortgage-company-lp/.
- **New Day Financial, LLC (NewDay USA)** — https://www.consumerfinance.gov/enforcement/actions/new-day-financial-llc/.
- **Rocket Homes Real Estate LLC / JMG Holding Partners** — https://www.consumerfinance.gov/enforcement/actions/rocket-homes-real-estate-llc-dba-rocket-homes-jmg-holding-partners-llc-dba-the-jason-mitchell-group-45-real-estate-brokerage-affiliates-and-jason-mitchell/.
- **Vanderbilt Mortgage & Finance, Inc.** — https://www.consumerfinance.gov/enforcement/actions/vanderbilt-mortgage-finance-inc/.
- **CFPB enforcement actions index** — https://www.consumerfinance.gov/enforcement/actions/ (filter to "Mortgage Origination" / "Fair Lending" / "Business Lending (ECOA)").

### 11.3 CFPB public guidance and FAQs

- **CFPB, "What's the difference between a prequalification letter and a preapproval letter?"** (Dec 5, 2023) — https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-prequalification-letter-and-a-preapproval-letter-en-1995/ (this is the critical pre‑qualification / adverse‑action FAQ).
- **CFPB, Circulars** — https://www.consumerfinance.gov/compliance/circulars/ (current public index).
- **CFPB, "CFPB Seeks to Vacate Abusive, Unjust Case Against Townstone"** (Mar 28, 2025) — https://www.consumerfinance.gov/about-us/newsroom/cfpb-seeks-to-vacate-abusive-unjust-case-against-townstone/.

### 11.4 Older secondary sources cited (in case the current URL is moved)

- **CFPB Circular 2022-03 original CFPB page** (May 26, 2022) — https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/.
- **CFPB Circular 2023-03 original CFPB page** (Sept 19, 2023) — https://www.consumerfinance.gov/compliance/circulars/circular-2023-03-adverse-action-notification-requirements-and-proper/.
- **CFPB 2022 AI / Data Analytics report** — https://files.consumerfinance.gov/f/documents/cfpb_ai-data-analytics-report_2022.pdf (URL pattern).
- **FTC, Big Data: A Tool for Inclusion or Exclusion** (Jan 2016) — https://www.ftc.gov/reports/big-data-tool-inclusion-or-exclusion-understanding-issues-ftc-report-congress.

### 11.5 Case law cited

- **Inclusive Communities Project, Inc. v. TDHCA, 576 U.S. 519 (2015)** — FHA disparate impact.
- **Bostock v. Clayton County, 590 U.S. 644 (2020)** — Title VII "sex" includes sexual orientation and gender identity; applied to FHA by HUD's 2021 rule.
- **Fischl v. General Motors Acceptance Corp., 708 F.2d 143 (5th Cir. 1983)** — adverse action notice purpose.
- **Treadway v. Gateway Chevrolet Oldsmobile, Inc., 362 F.3d 971 (7th Cir. 2004)** — anti‑discrimination ex ante rationale.
- **NAACP v. American Family Mutual Insurance Co., 978 F.2d 287 (7th Cir. 1992)** — 80% rule in insurance.

---

## Document version

- **Prepared:** August 27–28, 2026.
- **Knowledge cutoff:** August 2026.
- **Note on currency:** The April 2026 Reg B final rule is recent and is being challenged; consult with counsel and check for any subsequent judicial stays, vacaturs, or amendments before relying on the changes described in § 5.
- **Note on the CFPB press release on Townstone vacatur (Mar 28, 2025):** the CFPB's press release characterizing Townstone as an "abusive, unjust case" and seeking to vacate the consent order was not adopted by the court. The court denied the joint motion to vacate on June 12, 2025 (per the CFPB enforcement action page). The stipulated final judgment and order therefore remained in effect as of August 2026. The CFPB is no longer monitoring compliance.
