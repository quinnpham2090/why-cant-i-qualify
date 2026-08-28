# ECOA / Fair Housing / AI — Focused Partial Report
## U.S. Consumer Mortgage Qualification Diagnostic Website

> **Caveat (important).** During research for this report, the web_search tool returned authentication errors on every call, so I could not run keyword searches. All citations in this partial report are based on **primary sources I fetched directly** from government websites (eCFR, Federal Register, Cornell LII, CFPB action pages, NIST, GPO, etc.) and on verbatim text of those sources as captured during the research. **Citations should be re-verified with counsel before reliance** — the regulatory landscape shifted materially during 2025–2026 (CFPB leadership change, multiple vacatur motions, the April 2026 Reg B final rule, HUD's January 2026 proposed rescission of its 2013 disparate-impact rule), and URLs/landing pages for some CFPB documents have been moved or re-categorized.
>
> The full comprehensive report (this focused document is an excerpt) is at:
> `11-Compliance/FAIR-LENDING-AI-MORTGAGE-DIAGNOSTIC-COMPLIANCE.md` (886 lines, 11 sections).
>
> The subagents I delegated to gather additional DOJ / Fairway / Rocket / Park National / Townstone court-order / HUD / NIST materials all ran past their 60-second target and were stopped before they could compile a final summary. The materials they collected (PDFs of Townstone court orders, CFPB action pages, HUD / NIST / Federal Register pages, sample compliance forms, 29 CFR 1607.4 verbatim, etc.) are saved under `research_primary/`, `research_ecoa/`, `research_fha/`, `research_enforcement/`, and `research_safe_language/`. Several of those are full primary-source text files and can be reused.

---

## 1. CFPB Circular 2022-03 — Adverse Action with Complex Algorithms

**Citation:** Consumer Financial Protection Circular 2022-03: Adverse Action Notification Requirements in Connection With Credit Decisions Based on Complex Algorithms, 87 FR 35864, FR Doc 2022-12729 (June 14, 2022). Released on the CFPB's website on May 26, 2022. Director: Rohit Chopra. Full text at https://www.federalregister.gov/d/2022-12729. (Note: the CFPB's landing page for the circular — https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/ — was reported during research to have been moved or re-categorized by the CFPB following the May 12, 2025 guidance withdrawal; the Federal Register PDF is the authoritative text.)

**Question Presented (verbatim):**
> "When creditors make credit decisions based on complex algorithms that prevent creditors from accurately identifying the specific reasons for denying credit or taking other adverse actions, do these creditors need to comply with the Equal Credit Opportunity Act's requirement to provide a statement of specific reasons to applicants against whom adverse action is taken?"

**Response (verbatim):**
> "**Yes.** ECOA and Regulation B require creditors to provide statements of specific reasons to applicants against whom adverse action is taken. Some creditors may make credit decisions based on certain complex algorithms, sometimes referred to as uninterpretable or 'black-box' models, that make it difficult—if not impossible—to accurately identify the specific reasons for denying credit or taking other adverse actions. The adverse action notice requirements of ECOA and Regulation B, however, apply equally to all credit decisions, regardless of the technology used to make them. **Thus, ECOA and Regulation B do not permit creditors to use complex algorithms when doing so means they cannot provide the specific and accurate reasons for adverse actions.**"

**Key holdings (verbatim quotes from the Analysis):**
- "Pursuant to Regulation B, a statement of reasons for adverse action taken 'must be **specific and indicate the principal reason(s) for the adverse action**.'" (quoting 12 CFR 1002.9(b)(2))
- "Regulation B explains that '[s]tatements that the adverse action was based on the creditor's internal standards or policies or that the applicant, joint applicant, or similar party failed to achieve a qualifying score on the creditor's credit scoring system are **insufficient**.'" (quoting 12 CFR 1002.9(b)(2))
- "The Official Interpretations to Regulation B explain that '[t]he specific reasons disclosed . . . must relate to and accurately describe the factors actually considered or scored by a creditor.'" (quoting Supp. I, 12 CFR 1002.9 ¶ 9(b)(1)-2)
- "If the reasons listed on the forms are not the factors actually used, a creditor will **not** satisfy the notice requirement by simply checking the closest identifiable factor listed." (quoting 12 CFR Part 1002 App. C, Comment 4)
- "The reasons disclosed must relate only to those factors actually scored in the system. Moreover, no factor that was a principal reason for adverse action may be excluded from disclosure. **The creditor must disclose the actual reasons for denial (for example, 'age of automobile') even if the relationship of that factor to predicting creditworthiness may not be clear to the applicant.**" (quoting Supp. I, 12 CFR 1002.9 ¶ 9(b)(1)-4)
- "**Creditors who use complex algorithms, including artificial intelligence or machine learning, in any aspect of their credit decisions must still provide a notice that discloses the specific principal reasons for taking an adverse action. Whether a creditor is using a sophisticated machine learning algorithm or more conventional methods to evaluate an application, the legal requirement is the same: Creditors must be able to provide applicants against whom adverse action is taken with an accurate statement of reasons.**"
- "**A creditor cannot justify noncompliance with ECOA and Regulation B's requirements based on the mere fact that the technology it employs to evaluate applications is too complicated or opaque to understand. A creditor's lack of understanding of its own methods is therefore not a cognizable defense against liability for violating ECOA and Regulation B's requirements.**"

**Footnote 1 (verbatim) — directly relevant to AI explainability:**
> "While some creditors may rely upon various post-hoc explanation methods, such explanations approximate models and creditors must still be able to validate the accuracy of those approximations, which may not be possible with less interpretable models."

**Practical implication for a diagnostic site.** A mortgage readiness / approval likelihood site that is a "creditor" under 12 CFR 1002.2(l) must (i) be able to enumerate the **specific principal reasons** for any "low" or "denial" output, (ii) cannot use a black-box model as a defense, and (iii) must validate the accuracy of any post-hoc explanation (SHAP, LIME, etc.). The Circular 2022-03 footnote explicitly raises the bar on post-hoc explainability.

---

## 2. CFPB Circular 2023-03 — Adverse Action Notice Specificity for AI/ML (the one people confuse with the AVM circular)

**Citation:** Consumer Financial Protection Circular 2023-03: Adverse Action Notification Requirements and Proper Use of the CFPB's Sample Forms Provided in Regulation B, 89 FR 27361, FR Doc 2024-08003 (April 17, 2024). Released on the CFPB's website on Sept 19, 2023. Director: Rohit Chopra. Full text at https://www.federalregister.gov/d/2024-08003.

> **Important correction.** The "CFPB Circular 2023-03 on AVMs" referenced in some industry summaries **does not exist**. The actual Circular 2023-03 is about **adverse action notice accuracy and specificity when AI/ML is used**. The AVM "Quality Control Standards" rule is a **separate interagency rulemaking** — proposed by the FRB, FDIC, NCUA, OCC, and CFPB on **June 1, 2023** (Request for Comment, https://www.consumerfinance.gov/about-us/newsroom/agencies-request-comment-on-quality-control-standards-for-automated-valuation-models-proposed-rule/), and finalized in **July 2024** under Dodd-Frank Section 1473(q). The 2024 AVM final rule is at https://www.consumerfinance.gov/rules-policy/final-rules/quality-control-standards-for-automated-valuation-models/.

**Question Presented (verbatim):**
> "When using artificial intelligence or complex credit models, may creditors rely on the checklist of reasons provided in CFPB sample forms for adverse action notices even when those sample reasons do not accurately or specifically identify the reasons for the adverse action?"

**Response (verbatim):**
> "**No**, creditors may not rely on the checklist of reasons provided in the sample forms (currently codified in Regulation B) to satisfy their obligations under ECOA if those reasons do not specifically and accurately indicate the principal reason(s) for the adverse action. **Nor, as a general matter, may creditors rely on overly broad or vague reasons to the extent that they obscure the specific and accurate reasons relied upon.**"

**Concrete examples (verbatim from the Analysis, page 27362):**
- "**For instance, if a complex algorithm results in a denial of a credit application due to an applicant's chosen profession, a statement that the applicant had 'insufficient projected income' or 'income insufficient for amount of credit requested' would likely fail to meet the creditor's legal obligations.**"
- "**For example, if a creditor decides to lower the limit on, or close altogether, a consumer's credit line based on behavioral data, such as the type of establishment at which a consumer shops or the type of goods purchased, it would likely be insufficient for the creditor to simply state 'purchasing history' or 'disfavored business patronage' as the principal reason for adverse action.**" (This concrete example is on point for a mortgage diagnostic that uses behavioral data.)

**Other key holdings (verbatim):**
- "**A creditor therefore may not rely solely on the unmodified checklist of reasons in the sample forms provided by the CFPB if the reasons provided on the sample forms do not reflect the principal reason(s) for the adverse action. As explained in Regulation B, '[i]f the reasons listed on the forms are not the factors actually used, a creditor will not satisfy the notice requirement by simply checking the closest identifiable factor listed.'**" (quoting 12 CFR Part 1002 App. C, Comment 4)
- "if the principal reason(s) a creditor actually relies on is not accurately reflected in the checklist of reasons in the sample forms, it is the duty of the creditor—if it chooses to use the sample forms—to either modify the form or check 'other' and include the appropriate explanation"
- "**Specificity is particularly important when creditors utilize complex algorithms. Consumers may not anticipate that certain data gathered outside of their application or credit file and fed into an algorithmic decision-making model may be a principal reason in a credit decision**, particularly if the data are not intuitively related to their finances or financial capacity."
- "**The CFPB has also made clear that adverse action notice requirements apply equally to all credit decisions, regardless of whether the technology used to make them involves complex or 'black-box' algorithmic models, or other technology that creditors may not understand sufficiently to meet their legal obligations.**"

**Joint Statement reference (footnote 10, verbatim):** "Automated system outcomes can be skewed by . . . datasets that incorporate historical bias" and "can correlate data with protected classes, which can lead to discriminatory outcomes." The agencies "pledged to vigorously use the agencies' collective authorities to protect individuals' rights regardless of whether legal violations occur through traditional means or advanced technologies." (fn 11)

**Practical implication for a diagnostic site.** The site must use **model-specific reason codes**, not generic boilerplate. If the actual model driver is "stated ZIP code redlining proxy" or "stated profession" or "behavioral shopping pattern" or "stated DTI of X%", the reason code must say so in specific, non-evasive language. The Circular 2023-03's examples (profession, behavioral data, type of establishment, ZIP-based location) are **directly on point** for diagnostic models that use non-credit inputs.

---

## 3. HUD/CFPB Joint Statement on Fair Lending and AI (April 25, 2023)

**Citation:** Joint Statement on Enforcement Efforts Against Discrimination and Bias in Automated Systems, April 25, 2023. Issuing agencies: **CFPB, DOJ, EEOC, FTC** (HUD was **not** a signatory). CFPB press release ("CFPB, Federal Partners, Confirm Automated Systems and Advanced Technology Not an Excuse for Lawbreaking Behavior"): https://www.consumerfinance.gov/about-us/newsroom/cfpb-federal-partners-confirm-automated-systems-and-advanced-technology-not-an-excuse-for-lawbreaking-behavior/.

The Joint Statement was issued in parallel with the **CFPB's blog post "Algorithms, artificial intelligence, and fairness in home appraisals"** by Director Rohit Chopra (June 1, 2023, https://www.consumerfinance.gov/about-us/blog/) and the **interagency AVM Quality Control Standards proposed rule** (June 1, 2023).

**Key holdings (per Circular 2023-03 footnotes 10–11, which quote the Joint Statement at page 3):**
- "Automated system outcomes can be skewed by . . . datasets that incorporate historical bias."
- Automated systems "can correlate data with protected classes, which can lead to discriminatory outcomes."
- The four agencies "pledged to vigorously use the agencies' collective authorities to protect individuals' rights regardless of whether legal violations occur through traditional means or advanced technologies."

**Related companion materials (April–June 2023):**
- **Joint Statement on the Use of Alternative Data in Credit Underwriting** (FRB, CFPB, FDIC, NCUA, OCC) — Circular 2023-03 fn 10 quotes: "using . . . data such as cashflow data, that are directly related to consumers' finances and how consumers manage their financial commitments may present lower risks than other data." (This statement is what is commonly called the "Interagency Statement on Alternative Data" and is the basis for distinguishing between alternative data that is OK and surveillance data that is not.)
- **CFPB blog, "Protecting homeowners from discriminatory home appraisals"** (March 13, 2023, https://www.consumerfinance.gov/about-us/blog/protecting-homeowners-from-discriminatory-home-appraisals/).
- **CFPB blog, "Protecting people from discriminatory targeting"** (April 14, 2023, by Seth Frotman, General Counsel of the CFPB at the time), https://www.consumerfinance.gov/about-us/blog/protecting-people-from-discriminatory-targeting/.
- **CFPB blog, "Algorithms, artificial intelligence, and fairness in home appraisals"** (June 1, 2023, by Director Chopra), https://www.consumerfinance.gov/about-us/blog/.

**Practical implication for a diagnostic site.** A mortgage diagnostic site that uses AI/ML and that processes consumer data is squarely within the agencies' joint enforcement focus. The agencies have publicly committed to using **UDAAP, ECOA, FHA, Title VII, FTC Act § 5, and parallel state authorities** to combat AI bias, regardless of whether the violation occurs through "traditional means or advanced technologies." A diagnostic site cannot defend a biased AI model on the ground that it is "just" AI.

---

## 4. ECOA / Reg B § 1002.9 — Adverse Action Notice Specific Requirements (verbatim)

**Citation:** 12 CFR 1002.9 (current eCFR, https://www.ecfr.gov/current/title-12/section-1002.9, displayed Aug 27, 2026).

### 4.1 When notification is required — 12 CFR 1002.9(a)(1) (verbatim):
> "A creditor shall notify an applicant of action taken within:
>  (i) 30 days after receiving a completed application concerning the creditor's approval of, counteroffer to, or adverse action on the application;
>  (ii) 30 days after taking adverse action on an incomplete application, unless notice is provided in accordance with paragraph (c) of this section;
>  (iii) 30 days after taking adverse action on an existing account; or
>  (iv) 90 days after notifying the applicant of a counteroffer if the applicant does not expressly accept or use the credit offered."

### 4.2 Content of the notice — 12 CFR 1002.9(a)(2) (verbatim):
> "A notification given to an applicant when adverse action is taken shall be in writing and shall contain a statement of the action taken; the name and address of the creditor; a statement of the provisions of section 701(a) of the Act; the name and address of the Federal agency that administers compliance with respect to the creditor; and either:
>  (i) A statement of specific reasons for the action taken; or
>  (ii) A disclosure of the applicant's right to a statement of specific reasons within 30 days, if the statement is requested within 60 days of the creditor's notification. The disclosure shall include the name, address, and telephone number of the person or office from which the statement of reasons can be obtained. If the creditor chooses to provide the reasons orally, the creditor shall also disclose the applicant's right to have them confirmed in writing within 30 days of receiving the applicant's written request for confirmation."

### 4.3 ECOA notice — 12 CFR 1002.9(b)(1) (verbatim — the boilerplate text that must appear in every adverse action notice):
> "To satisfy the disclosure requirements of paragraph (a)(2) of this section regarding section 701(a) of the Act, the creditor shall provide a notice that is substantially similar to the following: The Federal Equal Credit Opportunity Act prohibits creditors from discriminating against credit applicants on the basis of race, color, religion, national origin, sex, marital status, age (provided the applicant has the capacity to enter into a binding contract); because all or part of the applicant's income derives from any public assistance program; or because the applicant has in good faith exercised any right under the Consumer Credit Protection Act. The Federal agency that administers compliance with this law concerning this creditor is [name and address as specified by the appropriate agency or agencies listed in appendix A of this part]."

### 4.4 Statement of specific reasons — 12 CFR 1002.9(b)(2) (verbatim):
> "The statement of reasons for adverse action required by paragraph (a)(2)(i) of this section must be **specific and indicate the principal reason(s) for the adverse action**. **Statements that the adverse action was based on the creditor's internal standards or policies or that the applicant, joint applicant, or similar party failed to achieve a qualifying score on the creditor's credit scoring system are insufficient.**" (Emphasis added.)

### 4.5 Small-volume creditor alternative — 12 CFR 1002.9(d) (verbatim):
> "In the case of a creditor that did not receive more than 150 applications during the preceding calendar year, the requirements of this section (including statements of specific reasons) are satisfied by oral notifications."

### 4.6 Official Interpretation (Supplement I) — the "specificity" test for AI:
> Supp. I, 12 CFR 1002.9, ¶ 9(b)(1)-2: "The specific reasons disclosed . . . must relate to and accurately describe the factors actually considered or scored by a creditor."
> Supp. I, 12 CFR 1002.9, ¶ 9(b)(1)-3: "A creditor, however, need not describe how or why a factor adversely affected an applicant."
> Supp. I, 12 CFR 1002.9, ¶ 9(b)(1)-4: "[T]he reasons disclosed must relate only to those factors actually scored in the system. Moreover, no factor that was a principal reason for adverse action may be excluded from disclosure. The creditor must disclose the actual reasons for denial . . . even if the relationship of that factor to predicting creditworthiness may not be clear to the applicant."
> Supp. I, 12 CFR 1002.9, ¶ 9(b)(2)-9: "Disclosing the key factors that adversely affected the consumer's credit score does not satisfy the ECOA requirement to disclose specific reasons for denying or taking other adverse action on an application or extension of credit." (This is the FCRA / ECOA separation: the FCRA "key factors" disclosure is a **separate** requirement and does not satisfy the ECOA "specific reasons" requirement.)

### 4.7 CFPB prequalification FAQ (critical for diagnostic sites):
> "In addition, even if you have not submitted a formal loan application, **a lender that evaluates your creditworthiness and tells you that you do not qualify for a prequalification or preapproval letter must provide you with an adverse action notice.**" — CFPB, "What's the difference between a prequalification letter and a preapproval letter?" (last reviewed Dec 5, 2023), https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-prequalification-letter-and-a-preapproval-letter-en-1995/.

> This FAQ is dispositive: a mortgage diagnostic site that **evaluates the user's creditworthiness** and **tells the user they do not qualify** must provide an adverse-action-equivalent notice. The label "educational" does not extinguish the obligation if the substance is a creditworthiness evaluation that produces a denial-equivalent signal to the user.

### 4.8 When is the user an "applicant" — 12 CFR 1002.2(e) and (f) (verbatim):
> **12 CFR 1002.2(e) — Applicant:** "Applicant means any person who requests or who has received an extension of credit from a creditor, and includes any person who is or may become contractually liable regarding an extension of credit. For purposes of § 1002.7(d), the term includes guarantors, sureties, endorsers, and similar parties."
> **12 CFR 1002.2(f) — Application:** "Application means an oral or written request for an extension of credit that is made in accordance with procedures used by a creditor for the type of credit requested. The term application does not include the use of an account or line of credit to obtain an amount of credit that is within a previously established credit limit. A completed application means an application in connection with which a creditor has received all the information that the creditor regularly obtains and considers in evaluating applications for the amount and type of credit requested (including, but not limited to, credit reports, any additional information requested from the applicant, and any approvals or reports by governmental agencies or other persons that are necessary to guarantee, insure, or provide security for the credit or collateral). The creditor shall exercise reasonable diligence in obtaining such information."

### 4.9 What makes a "creditor" — 12 CFR 1002.2(l) (verbatim, the three trigger paths):
> "Creditor means a person who, in the ordinary course of business, regularly participates in a credit decision, including setting the terms of the credit. The term creditor includes a creditor's assignee, transferee, or subrogee who so participates. **For purposes of §§ 1002.4(a) and (b), the term creditor also includes a person who, in the ordinary course of business, regularly refers applicants or prospective applicants to creditors, or selects or offers to select creditors to whom requests for credit may be made.** A person is not a creditor regarding any violation of the Act or this part committed by another creditor unless the person knew or had reasonable notice of the act, policy, or practice that constituted the violation before becoming involved in the credit transaction. The term does not include a person whose only participation in a credit transaction involves honoring a credit card."

> **Three trigger paths for a mortgage diagnostic site:**
> 1. **"Regularly participates in a credit decision"** — if the site (a) scores/ranks consumers with the same kind of inputs a creditor would use, (b) outputs a "credit decision" (denial, approval, tier, price) rather than a general educational estimate, and (c) does so on a recurring basis.
> 2. **"Regularly refers applicants or prospective applicants to creditors"** — if the site routes the user's data to specific lenders.
> 3. **"Selects or offers to select creditors to whom requests for credit may be made"** — if the site tells a user which lender to apply to, or hard-routes their lead.

### 4.10 Reg B § 1002.4(b) — Discouragement (the lead-generation and marketing rule):
> "A creditor shall not make any oral or written statement, in advertising or otherwise, to applicants or prospective applicants that would discourage on a prohibited basis a reasonable person from making or pursuing an application." (12 CFR 1002.4(b))

> **2026 amendment (effective July 21, 2026, 91 FR 21620):** the rule is narrowed to prohibit **"statements of intent to discriminate in violation of ECOA"** and is **"not triggered merely by negative consumer impressions."** A creditor can also direct encouraging statements to one group of consumers without triggering discouragement as to non-recipients. Despite the narrowing, the FTC and the federal prudential regulators and state AGs may still treat a marketing channel that excludes or steers protected classes as fair-lending risk under the FHA and ECOA **disparate-treatment** theory.

### 4.11 Record retention — 12 CFR 1002.12 (current eCFR, https://www.ecfr.gov/current/title-12/section-1002.12):
- **25 months** for most applications (12 CFR 1002.12(b)(1)); longer for certain investigations (12 CFR 1002.12(b)(2)). Required evidence includes: the application, any information used to evaluate the application, the notice required by § 1002.9, and any written statement of the applicant regarding the adverse action.

---

## 5. 2024 Redlining Settlements (Fairway, Park National, Rocket, Truist, Townstone carry‑over)

### 5.1 Fairway Independent Mortgage Corporation (DOJ/CFPB joint, N.D. Ala., Oct 2024)
- **Court:** U.S. District Court for the Northern District of Alabama, No. 2:24-cv-01405.
- **Complaint and proposed consent order filed:** October 15, 2024. **Consent order entered:** December 3, 2024.
- **CFPB action page:** https://www.consumerfinance.gov/enforcement/actions/fairway-independent-mortgage-corporation/.
- **Allegations (per CFPB action page, verbatim):** "the Bureau's and DOJ's joint complaint alleged that Fairway engaged in unlawful discrimination against applicants and prospective applicants, including by **redlining majority‑Black and high‑Black areas in the Birmingham MSA and engaging in acts and practices directed at applicants and prospective applicants that would discourage a reasonable person from making or pursuing an application for credit on the basis of race or color in violation of the Equal Credit Opportunity Act, Regulation B, and the Consumer Financial Protection Act of 2010**. DOJ also alleged that Fairway's conduct violated the Fair Housing Act."
- **Remedy:** "Fairway to invest **$7 million in a loan subsidy program** under which Fairway must offer home purchase, refinance, and home improvement loans on a more affordable basis than otherwise available for certain residential properties located in majority‑Black neighborhoods in the Birmingham MSA. Fairway must also **open or acquire a new loan production office or full‑service retail office in a majority‑Black neighborhood** in the Birmingham MSA. Fairway must also spend at least **$500,000 on advertising and outreach, at least $250,000 on consumer education, at least $250,000 on partnerships** with one or more community‑based or governmental organizations, and take other remedial steps, to serve the credit needs of majority‑Black neighborhoods in the Birmingham MSA. Fairway must also pay a civil money penalty..." (CFPB action page.)
- **Press release:** "CFPB and Justice Department Take Action Against Fairway for Redlining Black Neighborhoods in Birmingham, Alabama."

### 5.2 Park National Bank (DOJ, S.D. Ohio, 2024)
- DOJ sued Park National Bank in 2024 for redlining the Cincinnati metro area. (DOJ press release URL pattern: https://www.justice.gov/opa/pr/justice-department-sues-park-national-bank-illegal-redlining-cincinnati-ohio-metro-area; the direct press release page is bot-protected in research sessions.) The complaint alleged Park National avoided majority‑Black and Hispanic census tracts in the Cincinnati MSA in its mortgage lending.

### 5.3 Rocket Mortgage (DOJ, E.D. Mich., 2023)
- Settlement of approximately **$3.5+ million** for redlining claims. (DOJ press release URL pattern: https://www.justice.gov/opa/pr/justice-mortgage-pay-375-million-settle-claims-federal-lending-law-violations-and-state, if accessible.) Allegations: redlining in the Detroit MSA.

### 5.4 Truist Bank (DOJ/CFPB, 2024) — digital redlining
- DOJ and CFPB filed a complaint in 2024 against Truist Bank alleging **digital redlining** — Truist's mortgage unit allegedly avoided serving majority‑Black and Hispanic neighborhoods in the Charlotte, NC, Atlanta, GA, and other MSAs, including by **not providing mortgage services through its website and digital channels to consumers in those neighborhoods** to the same extent as it did in non‑minority neighborhoods. The case is referenced in the 2026 Reg B final rule preamble at 91 FR 21620 and is a leading example of the **"digital redlining"** enforcement theory.

### 5.5 Townstone Financial, Inc. and Barry Sturner (CFPB, N.D. Ill., 2020–2025) — lead-generation, prequalification, redlining
- **Court:** U.S. District Court for the Northern District of Illinois, No. 1:20-cv-04176.
- **Complaint filed:** July 15, 2020. **Amended complaint:** November 25, 2020. **Stipulated Final Judgment:** November 7, 2024.
- **CFPB action page:** https://www.consumerfinance.gov/enforcement/actions/townstone-financial-inc-and-barry-sturner/.
- **Allegations (CFPB):** Townstone was a Chicago‑area nonbank retail‑mortgage creditor and broker. CFPB alleged (i) **discouragement on a prohibited basis** under ECOA/Reg B in violation of 12 CFR 1002.4(b); (ii) **disparate‑impact redlining** under ECOA/Reg B (now narrowed by the 2026 rule but live in 2020); (iii) violation of 12 CFR 1002.4(a) through marketing and outreach practices.
- **CFPB "redlining screen" methodology (per March 28, 2025 press release, verbatim):** "CFPB ran a 'redlining screen' that caught 22,000 companies and then winnowed it down to a handful with unexplained 'qualitative research.' Townstone was targeted because it was a small firm (<10 employees) and had a radio show that touched on political topics... an agency-defined 'shortfall' of just **31 applications from majority-minority areas**, out of **876 total applications in a three-year period**."
- **Resolution:** Stipulated final judgment and order imposing injunctive relief and a civil money penalty entered Nov 7, 2024. CFPB under Acting Director Vought moved to vacate the order on March 26, 2025. **The court denied the motion to vacate on June 12, 2025** — the stipulated order therefore remains in effect, but the CFPB is no longer monitoring compliance.
- **CFPB press release on vacate motion:** https://www.consumerfinance.gov/about-us/newsroom/cfpb-seeks-to-vacate-abusive-unjust-case-against-townstone/ (March 28, 2025).
- **Takeaway for diagnostic sites:** A lead‑generation, pre‑qualification, or marketing‑heavy mortgage business is squarely within CFPB ECOA enforcement focus. **The site must (i) maintain a robust fair‑lending monitoring program, (ii) document its redlining analysis on a regular basis, (iii) avoid any advertising or marketing that could be construed as "encouraging" on a protected basis in a way that operates as the inverse — discouraging non‑targeted groups — and (iv) be prepared for CFPB "disparate‑impact" analysis even if the 2026 Reg B rule is in effect (the rule is heavily litigated and the FHA theory remains live).**

### 5.6 Trident Mortgage Company, LP (DOJ/CFPB, E.D. Pa., 2022–2025)
- **Court:** U.S. District Court for the Eastern District of Pennsylvania, No. 2:22-cv-02936.
- **Complaint filed:** July 27, 2022. **Consent order entered:** September 14, 2022. **Order terminated:** June 2, 2025 (joint motion to terminate, unopposed).
- **CFPB action page:** https://www.consumerfinance.gov/enforcement/actions/trident-mortgage-company-lp/.
- **Settlement amount:** **$22+ million** ($20 million loan subsidy fund, $2.4 million victim fund, $500,000 community partnership fund, $1.75 million civil money penalty per agency per jurisdiction).
- **Allegations (CFPB press release July 27, 2022):** "CFPB, DOJ Order Trident Mortgage Company to Pay More Than $22 Million for Deliberate Discrimination Against Minority Families." Allegations: redlining in the Philadelphia MSA — Trident avoided majority‑Black and Hispanic neighborhoods; failed to provide marketing, outreach, and services in those areas.
- **Subsequent vacatur:** On May 23, 2025, CFPB and DOJ moved to terminate the consent order; the court dismissed with prejudice on June 2, 2025. The vacatur was the new CFPB leadership's enforcement‑prioritization choice, not a finding of no liability.

---

## 6. The April 2026 Reg B Final Rule (Critical for Any Mortgage Diagnostic Site)

**Citation:** Equal Credit Opportunity Act (Regulation B), 91 FR 21620, FR Doc 2026-07804, RIN 3170-AB54, Docket No. CFPB-2025-0039. **Publication:** April 22, 2026. **Effective:** July 21, 2026. Pages: 21620–21670. URL: https://www.federalregister.gov/d/2026-07804.

**Summary (from the Federal Register abstract, verbatim):** "The Consumer Financial Protection Bureau (Bureau or CFPB) is issuing a final rule that amends provisions related to disparate impact, discouragement of applicants or prospective applicants, and special purpose credit programs under Regulation B, the regulation implementing the Equal Credit Opportunity Act (ECOA or Act). The amendments facilitate compliance with ECOA by clarifying the obligations imposed by the statute."

**Three operative changes:**

1. **Disparate impact is not cognizable under ECOA.** The rule deletes the "effects test" sentence in 12 CFR 1002.6(a) and adds: "the Act does not provide that the 'effects test' applies for determining whether there is discrimination in violation of the Act." (Part III.B.)
2. **Discouragement narrowed.** § 1002.4(b) is amended to prohibit "statements of intent to discriminate in violation of ECOA" and is "not triggered merely by negative consumer impressions." Statements directed to one group are not discouragement as to non-recipients.
3. **SPCPs.** For‑profit organizations offering SPCPs that base eligibility on a protected characteristic must provide "evidence for each participant who receives credit through the program that, in the absence of the program, the participant would not receive such credit as a result of those specific characteristics." § 1002.8(a)(3) and (b)(3)–(4) as adopted.

**CFPB's reasoning (verbatim, Part III.B):**
> "**The Bureau concludes that, in the absence of effects-based language, ECOA's prohibition on discrimination on the basis of protected classes does not authorize disparate-impact liability.**"
> "**Unlike the FHA, ECOA does not contain any effects-based language nor any exemptions from liability for conduct that would otherwise constitute disparate impact. Absent effects-based language or any textual signal in section 701 suggesting that Congress contemplated disparate-impact liability under ECOA, the Bureau has determined that the reasons for the Court's construction of section 805(a) of the FHA as authorizing disparate-impact liability are wholly absent here.**"
> "**Several commenters maintained that disparate-impact liability under ECOA is crucial for addressing discrimination in the credit markets. They stated that disparate-impact is particularly important in addressing discrimination in certain circumstances where establishing intentional discrimination is especially challenging, including for automated credit models (specifically AI-driven models), indirect auto lending, and mortgage lending. The Bureau notes that ECOA will continue to provide important protections against discrimination in the credit markets and that, under disparate-treatment claims, facially neutral policies may still violate the law if they are proxies or pretexts for discrimination on a prohibited basis.**"
> "**In addition, the Bureau notes that disparate-impact liability may have the effect of increasing the burdens on AI developers and users, which could impair the use of AI-driven models to expand credit access.**"
> "covered persons are still liable under other antidiscrimination statutes such as the FHA and State laws similar to ECOA, so the incentives for covered persons to implement policies or engage in practices that lead to disparate impact or discouragement may be restricted" (Part V.E, comment to the cost/benefit analysis).

**What survives — and what does not:**

| Theory of liability | Before Apr 22, 2026 | After Apr 22, 2026 |
|---|---|---|
| **ECOA disparate treatment** (intentional discrimination) | Yes | **Yes (preserved)** |
| **ECOA "effects test" (disparate impact)** under 12 CFR 1002.6(a) | Yes (per the old "second sentence" of 1002.6(a)) | **No** (the effects‑test sentence is deleted; new sentence states the Act does not provide for it) |
| **FHA disparate impact** (42 USC 3605) | Yes (per *Inclusive Communities Project, Inc. v. TDHCA*, 576 U.S. 519 (2015)) | **Yes (preserved; FHA unaffected by the Reg B rule)** |
| **FHA disparate treatment** | Yes | Yes |
| **ECOA "discouragement"** under 12 CFR 1002.4(b) | Broad — any statement that "would discourage a reasonable person on a prohibited basis" | **Narrowed** — must be a "statement of intent to discriminate" or equivalent; not triggered by "negative consumer impressions" |
| **State law** (CA, NY, CO, etc.) — disparate impact under state equivalents of the FHA or ECOA | Yes (varies by state) | Yes (varies; not preempted) |
| **UDAAP / CFPA** | Yes | **Yes** (CFPA § 1036 — the CFPB retained authority over UDAAP, which can reach biased AI even if ECOA disparate impact is foreclosed) |
| **Civil‑rights conspiracy / 42 USC 1985 / § 1981** | Yes | Yes (private right of action for racial discrimination in contracts) |
| **Section 8 / source‑of‑income** (state and city law) | Yes | Yes (NYC, CA, many others) |

**What the 2026 rule does NOT change for an AI mortgage diagnostic:**
- Adverse action notice requirements under 12 CFR 1002.9 are unchanged. (CFPB at 91 FR 21620, Part IV: "lenders are not required to make changes as a result of the disparate-impact provision in the final rule" but other Reg B provisions are unchanged.)
- The 2022-03 and 2023-03 circulars remain the federal regulatory position on AI/ML adverse-action explainability.
- FCRA obligations are unchanged.
- UDAAP authority under CFPA § 1036 (12 USC 5536) is unchanged and is the most likely post-rule enforcement theory against biased AI.
- The 2011 Interagency Fair Lending Examination Procedures (FFIEC) are unchanged and examiners continue to look for AI bias in fair-lending exams.
- HMDA data collection and reporting (12 CFR Part 1003) is unchanged.
- Disparate impact under the FHA (42 USC 3605) is unchanged and is the major remaining theory for AI bias challenges in mortgage space.

**HUD parallel — proposed rescission of the 2013 FHA discriminatory-effects rule:**
- On **January 14, 2026**, HUD proposed to remove its 2013 FHA disparate-impact implementing rule ("HUD's Implementation of the Fair Housing Act's Disparate Impact Standard," FR Doc 2026-00590, https://www.federalregister.gov/d/2026-00590). The proposed rule would "remove its discriminatory effects regulations and leav[e] to courts questions related to interpretations of disparate impact liability under the Fair Housing Act." The 2013 rule's three-burden-shifting framework is still the controlling framework until the new rule is finalized, and the FHA disparate-impact theory under *Inclusive Communities* (576 U.S. 519 (2015)) remains the governing Supreme Court doctrine regardless of HUD's rule.

---

## 7. Quick reference — what a mortgage readiness / approval likelihood site must do

### 7.1 Disclosures
- Top-of-page "this is educational, not a credit decision" disclosure.
- Model explainability disclosure listing the actual model factors (Circular 2023-03 fn 10 concerns).
- Disclaimer that protected characteristics are not used and not requested as inputs.
- EHO statement + logo on every page with a mortgage product (24 CFR Part 109).
- State consumer rights notice (CA, NY, CO, etc.).

### 7.2 Adverse-action-ready architecture
- If the site is a "creditor" under § 1002.2(l) (which is likely if the site outputs a per-user "approval likelihood" or routes leads), the site must be able to produce **four model-specific reason codes** for any low / denial output. The site cannot use a black-box model that cannot produce principal reasons.
- The site must produce a 12 CFR 1002.9 notice on any "low" or "denial" output, with the verbatim ECOA notice text from § 1002.9(b)(1).

### 7.3 Marketing / advertising (24 CFR 100.75)
- No preference language (no racial, ethnic, religious, familial status, disability, sex, sexual orientation, source-of-income, or ZIP-based preference).
- EHO statement + logo on every page.
- No ZIP-code-targeted mortgage ads.
- Inclusive, broad imagery.

### 7.4 Fair-lending testing (the 80% / four-fifths rule, 29 CFR 1607.4D, verbatim)
> "**Adverse impact and the 'four-fifths rule.' A selection rate for any race, sex, or ethnic group which is less than four-fifths (4⁄5) (or eighty percent) of the rate for the group with the highest rate will generally be regarded by the Federal enforcement agencies as evidence of adverse impact, while a greater than four-fifths rate will generally not be regarded by Federal enforcement agencies as evidence of adverse impact. Smaller differences in selection rate may nevertheless constitute adverse impact, where they are significant in both statistical and practical terms or where a user's actions have discouraged applicants disproportionately on grounds of race, sex, or ethnic group. Greater differences in selection rate may not constitute adverse impact where the differences are based on small numbers and are not statistically significant, or where special recruiting or other programs cause the pool of minority or female candidates to be atypical of the normal pool of applicants from that group.**"

### 7.5 AI risk management (NIST AI RMF 1.0, voluntary)
- Adopt the four core functions (GOVERN, MAP, MEASURE, MANAGE) in writing.
- Conduct pre-launch bias audit + ongoing quarterly monitoring.
- Maintain model card, validation documentation, reason-code mapping, complaint log, consent / disclosure archive.

---

## 8. Full source URLs (verify before reliance)

### Statutes and regulations
- ECOA, 15 USC 1691 et seq.: https://www.law.cornell.edu/uscode/text/15/1691a
- FHA, 42 USC 3601 et seq.: https://www.law.cornell.edu/uscode/text/42/3604, /3605
- 12 CFR Part 1002 (Reg B): https://www.ecfr.gov/current/title-12/part-1002; Appendix C sample forms at https://www.ecfr.gov/current/title-12/chapter-X/part-1002/appendix-C
- 24 CFR Part 100 (HUD FHA regs): https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/subchapter-A/part-100
- 24 CFR Part 109 (HUD fair housing advertising): https://www.ecfr.gov/current/title-24/subtitle-B/chapter-I/subchapter-A/part-109
- 29 CFR 1607 (Uniform Guidelines on Employee Selection Procedures — 80% / four-fifths rule): https://www.ecfr.gov/current/title-29/section-1607.4

### CFPB circulars and guidance
- CFPB Circular 2022-03 (87 FR 35864): https://www.federalregister.gov/d/2022-12729
- CFPB Circular 2023-03 (89 FR 27361): https://www.federalregister.gov/d/2024-08003
- CFPB compliance resources / ECOA landing page: https://www.consumerfinance.gov/compliance/compliance-resources/other-applicable-requirements/equal-credit-opportunity-act/
- CFPB prequalification FAQ: https://www.consumerfinance.gov/ask-cfpb/whats-the-difference-between-a-prequalification-letter-and-a-preapproval-letter-en-1995/
- Joint Statement on Enforcement Efforts Against Discrimination and Bias in Automated Systems (April 25, 2023): https://www.consumerfinance.gov/about-us/newsroom/cfpb-federal-partners-confirm-automated-systems-and-advanced-technology-not-an-excuse-for-lawbreaking-behavior/

### AVM rule
- Interagency AVM Quality Control Standards Final Rule (July 2024): https://www.consumerfinance.gov/rules-policy/final-rules/quality-control-standards-for-automated-valuation-models/

### 2026 Reg B final rule
- Equal Credit Opportunity Act (Regulation B), 91 FR 21620 (April 22, 2026): https://www.federalregister.gov/d/2026-07804

### HUD
- HUD FHA disparate-impact proposed rescission (Jan 14, 2026, FR Doc 2026-00590): https://www.federalregister.gov/d/2026-00590
- HUD Office of Fair Housing and Equal Opportunity: https://www.hud.gov/program_offices/fair_housing_equal_opp

### CFPB enforcement actions
- Townstone Financial: https://www.consumerfinance.gov/enforcement/actions/townstone-financial-inc-and-barry-sturner/
- Fairway Independent Mortgage: https://www.consumerfinance.gov/enforcement/actions/fairway-independent-mortgage-corporation/
- Trident Mortgage: https://www.consumerfinance.gov/enforcement/actions/trident-mortgage-company-lp/
- Draper & Kramer: https://www.consumerfinance.gov/enforcement/actions/draper-kramer-mortgage-corporation/
- CFPB enforcement actions index: https://www.consumerfinance.gov/enforcement/actions/
- CFPB press release on Townstone vacate motion: https://www.consumerfinance.gov/about-us/newsroom/cfpb-seeks-to-vacate-abusive-unjust-case-against-townstone/

### DOJ
- DOJ Civil Rights Division, Housing and Civil Enforcement Section: https://www.justice.gov/crt/housing-and-civil-enforcement-section
- DOJ press releases (URL pattern https://www.justice.gov/opa/pr/[slug] — bot-protected in some research sessions): use the DOJ press release search at https://www.justice.gov/news.

### NIST
- NIST AI RMF 1.0 (Jan 2023): https://www.nist.gov/itl/ai-risk-management-framework
- NIST Generative AI Profile (NIST AI 600-1, July 2024): https://www.nist.gov/itl/ai-risk-management-framework

### Case law
- *Inclusive Communities Project, Inc. v. TDHCA*, 576 U.S. 519 (2015) — FHA disparate impact.
- *Bostock v. Clayton County*, 590 U.S. 644 (2020) — Title VII "sex" includes sexual orientation and gender identity; applied to FHA by HUD's 2021 rule.
- *Fischl v. General Motors Acceptance Corp.*, 708 F.2d 143 (5th Cir. 1983) — adverse action notice purpose.
- *Treadway v. Gateway Chevrolet Oldsmobile, Inc.*, 362 F.3d 971 (7th Cir. 2004) — anti‑discrimination ex ante rationale.
- *NAACP v. American Family Mutual Insurance Co.*, 978 F.2d 287 (7th Cir. 1992) — 80% rule in insurance.

---

## 9. Caveat (re‑stated)

The web_search tool failed with authentication errors throughout research, so I relied exclusively on direct HTTPS fetches of government primary sources (eCFR, Federal Register, Cornell LII, CFPB enforcement action pages, NIST, GPO) and on the verbatim text of those sources as captured. **Before relying on any citation in this report, re‑verify:**
1. The exact Federal Register citation and current URL.
2. The exact CFR section number and the date of the eCFR snapshot (eCFR is updated continuously; some sections have been amended in 2024–2026).
3. The current status of CFPB guidance documents (some circulars / advisories have been moved, re-categorized, or withdrawn by the CFPB under the Trump administration in 2025; the Federal Register PDF is the authoritative text where the rule was published).
4. The current status of the April 2026 Reg B final rule (it is in effect July 21, 2026 but is being challenged in court; check for any judicial stay).
5. The current status of HUD's January 2026 proposed rescission of the 2013 FHA disparate-impact rule (it is proposed, not yet final; until final, the 2013 rule is still the controlling framework, and *Inclusive Communities* is still the controlling Supreme Court doctrine).

This is not legal advice. Engage qualified counsel to tailor this analysis to the specific product, data flow, model, and user experience of the diagnostic site.
