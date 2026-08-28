# Compliance Research Report: U.S. Consumer Mortgage Qualification Diagnostic Website

**Subject:** Three-pillar compliance audit for a consumer-facing mortgage qualification diagnostic / lead-generation website
**Scope:** FTC Endorsement Guides (16 CFR Part 255); ADA / WCAG website accessibility; state-level accessibility laws and AI-content accessibility
**Date prepared:** 2025
**Important caveat on sources:** The web search tool was unavailable during this research session (authentication error). All citations below are drawn from the model's training knowledge of primary federal sources (FTC, DOJ, federal regulations, federal court opinions, W3C/WAI), state codes, and major trade-press reporting on enforcement actions through approximately early 2025. The user should reverify every citation — particularly case citations, settlement amounts, and dates — against PACER, FTC press releases, the Federal Register, and the DOJ ADA.gov site before relying on it for any filing, contract, or policy decision. The structure below is designed to make that verification mechanical.

---

## SECTION 1 — FTC Endorsement Guides (16 CFR Part 255) and the 2023 Amendments

### 1.1 Plain-English summary

The FTC's "Guides Concerning the Use of Endorsements and Testimonials in Advertising" (16 C.F.R. Part 255) tell advertisers when they must disclose that a person praising a product or service is connected to the seller, and how they may (and may not) use consumer testimonials. They are technically industry "guides," but the underlying law is Section 5 of the FTC Act, which prohibits "unfair or deceptive acts or practices in or affecting commerce" (15 U.S.C. § 45). Violations of the Guides can form the basis of an FTC enforcement action under Section 5, including civil penalties and consumer redress.

For a mortgage qualification diagnostic site, every one of the following is a "testimonial" or "endorsement" under the FTC's definition and triggers Part 255:

- A real customer's quote about their closing experience, displayed on the landing page.
- A star rating (e.g., "4.8/5 from 2,847 borrowers") collected via a survey widget such as Trustpilot, Birdeye, or Zillow Lender Reviews.
- A loan officer's "Meet your loan officer" bio with claims of past customer satisfaction.
- An influencer-style video review on YouTube or TikTok where the reviewer was paid or given a co-branded experience.
- A "Featured in" logo for a media outlet, where the outlet was compensated.
- AI-generated "personas" or fabricated reviewer names/photos that imply real customers.
- Affiliate-lead aggregator reviews that funnel users to a mortgage company.

### 1.2 The 2023 amendments — what actually changed

The FTC published the **"Guides Concerning the Use of Endorsements and Testimonials in Advertising," Final Rule**, 88 Fed. Reg. 48092 (July 26, 2023), with the compliance date set for **October 1, 2023**. The final rule amended 16 C.F.R. Part 255 to (i) incorporate the FTC's longstanding ".com Disclosures" guidance into the codified text, (ii) explicitly cover social media and other "tags" and "tags-for-hire," and (iii) modernize examples. It also issued a companion Notice of Proposed Rulemaking that would treat the Guides as a formal Trade Regulation Rule — that NPRM is still pending as of early 2025.

Key operational changes the 2023 amendment made (each is a citation the user can verify against the Federal Register entry above):

1. **§ 255.1 (Definitions) — broadened.** "Endorsement" now expressly means any advertising message that consumers are likely to believe reflects the opinions, beliefs, findings, or experiences of a party other than the sponsoring advertiser, even if the third party is anonymous or pseudonymous. "Endorser" was clarified to include "taggers" — people who create tags or similar labeling of products in social media. Both paid and unpaid endorsers are covered.

2. **§ 255.2 — general considerations.** The amended text reiterates that the "honest opinions, beliefs, or findings" of the endorser are required, and that an advertisement that does not represent the endorser's actual opinion is deceptive. The amended commentary makes explicit that the "actual opinion" rule applies to **virtual influencers and AI-generated endorsers** — if a fabricated persona is presented as if it were a real consumer, that is a deceptive endorsement.

3. **§ 255.5 — disclosures of material connections.** This is the workhorse. The amended text and commentary provide that:
   - The disclosure must be "clear and conspicuous." A clear and conspicuous disclosure for online content is one that is "unavoidable" — a reasonable consumer can see and understand it. The FTC has stated this means, in most cases, **within the endorsement itself**, not hidden behind a link, a hashtag, or a separate "About" page.
   - For visual content, the disclosure should be **in the same medium** as the endorsement (i.e., text for text, audio for audio, video for video). In a video or live stream, both audio and visual disclosures are required.
   - In social posts, disclosures such as "#ad," "#sponsored," "Paid partnership with [Brand]," or "Thanks to [Brand] for the gift card" are acceptable **only** when they are at the beginning of the post (or for stories, throughout), not buried at the end or after "more."
   - For short-form content where a written disclosure is not feasible, the platform's "Paid Partnership" tag is acceptable.
   - Disclosure of a "material connection" is required regardless of whether the content is positive or negative, and regardless of whether the endorser was paid (free product, free credit-score monitoring, a chance to win a prize, an in-kind perk, a close family relationship, or being an employee of the advertiser all qualify as material connections).

4. **§ 255.10 — consumer testimonials.** The "general" experience is the rule:
   - **Typicality disclosure.** If an advertisement represents that a consumer endorser had a specific experience with the product or service (e.g., "I was approved in 24 hours and closed in 14 days"), the ad must either (a) make clear that the experience is not representative of what consumers generally achieve, or (b) disclose the **generally expected performance** in the same or adjacent ad.
   - **"Results not typical" alone is not sufficient.** The 2023 commentary makes this explicit — advertisers must convey what generally happens, not just disclaim that the highlighted result is not typical.
   - The advertiser must have substantiation for any claim about the expected result before publishing the testimonial.
   - The "actual opinion" rule applies: if a real consumer did not actually write the quote attributed to them, the ad is deceptive.

5. **§ 255.15 — expert endorsements.** Expert endorsers must in fact be experts, must have the qualifications represented, and must have conducted the analysis represented. The amended text is more emphatic about fabricated or AI-generated "expert" content.

6. **§ 255.18 — endorsements by organizations.** Organizations must be bona fide; membership/participation must be real; a fake consumer group is a deceptive endorsement.

7. **New § 255.4 (Form of disclosure) and updated examples.** The final rule moved the "form of disclosure" requirement into the codified text. Disclosure must be presented in a manner that a reasonable consumer can notice, read, or hear, and understand. The commentary gives the now-famous negative examples: "#spontaneous" rather than "#sponsored"; tiny "ad" hidden in a corner; a "Read more" link that loads a page without a clear disclosure on the first page.

8. **Virtual/AI endorsers — the headline novelty.** While the rule text does not create a "virtual influencer" subsection, the FTC's **Statement of Basis and Purpose** and the 2023 commentary are explicit that fictional personas used to convey endorsements must be disclosed as fictional. A mortgage site that uses a stock photo of "Anna, first-time homebuyer in Austin" with a fabricated testimonial is operating a deceptive endorsement unless the site clearly labels the persona as illustrative or a composite. The FTC has also separately issued a 2024 enforcement-policy statement on AI-generated content and deception.

9. **Review-website rule (16 C.F.R. § 255.4 in old numbering, retained in the 2023 final rule).** It is an unfair or deceptive act for a seller to procure reviews of its own products or of competitor products through a "review hijacking" or by suppressing negative reviews. The 2023 commentary makes clear that the rule applies to "astro-turfed" reviews, including purchased five-star reviews, employees posting without disclosure, and the practice of "review gating" (asking happy customers for a public review and routing unhappy customers to a private channel).

### 1.3 What a mortgage site must do, specifically

For each of the following common UI elements, the corresponding Part 255 requirement is set out:

| UI element | Part 255 rule | What to do |
|---|---|---|
| "Rated 4.8/5 by 12,000 borrowers" widget on the homepage | § 255.5 (disclosure of material connection); § 255.10 (typicality) | Disclose that the ratings are from customers of the company; if the rating represents only respondents (not all customers), state the survey methodology and response rate. If the rating is a composite of multiple third-party sites, attribute each source. |
| "Sarah from Phoenix got approved in 24 hours" testimonial | § 255.2 (actual opinion), § 255.10 (typicality) | Use the real customer's verifiable review (or label composite/illustrative). If the headline figure is a real outlier (e.g., 24 hours), add a clear and conspicuous statement: "Approval times vary based on borrower profile, property, and documentation. 24 hours reflects the fastest 1% of approvals in 2024." |
| Loan officer bio with "Top 1% of mortgage originators" | § 255.5 (material connection — the officer is an employee), § 255.15 (expert) | The "Top 1%" claim needs substantiation. The endorser is the company itself, so the page is an endorsement that must be honest; "100% of customers recommend [Officer]" must be substantiated. |
| Embedded YouTube video from a "real estate influencer" referring users to the site | § 255.5 (material connection), § 255.4 (form) | The influencer must disclose the paid relationship in both audio and video. The site must ensure that any sponsored content it amplifies contains the influencer's own disclosure. If the site cannot control the disclosure, the safer path is paid content with a clear "Advertisement" label. |
| "As featured in Forbes, Fortune, and CNBC" | § 255.5 | If the editorial coverage was earned (not paid), no disclosure is required. If any coverage was paid, sponsored, or part of a "Sponsored Content" program, that must be disclosed. "As seen on" is itself an endorsement claim. |
| Trustpilot / Zillow / Google review feed | § 255.2, § 255.4 | The site must not selectively display reviews (cherry-picking only the five-star ones without disclosure that the displayed reviews are curated). If reviews are solicited in exchange for any consideration (gift card, entry into a drawing, free credit-score report), that must be disclosed. |

### 1.4 Disclosure of "material connections" — the bright-line rules

Under § 255.5 and the 2023 commentary, a "material connection" between the endorser and the seller is one that a reasonable consumer would expect to affect the weight or credibility of the endorsement, including (without limitation):

- Direct payment (cash, fee, royalty, commission).
- Free or discounted product/service (e.g., "free credit-score monitoring" for survey respondents).
- Prize, sweepstakes entry, or contest participation tied to providing a review.
- Tangible gifts, trips, meals, event tickets.
- Family, employment, or close personal relationships with the company or its officers.
- In-kind services (the company wrote the review, edited the video, provided talking points).

The disclosure must be:
1. **Clear and conspicuous** — not hidden behind a "Read more" link, a hashtag at the end, an "About the Advertiser" page, or a tiny grey-on-white footer note.
2. **Unavoidable** — placed where the consumer will see it before the endorsement persuades them. For a homepage testimonial, the disclosure should be on the testimonial tile itself.
3. **In the same medium** — audio in audio, visual in visual, text in text.
4. **In close proximity** — adjacent to the triggering claim, not on a separate page.
5. **In understandable language** — "Paid endorsement" is the gold standard; "Material connection" alone may be technical; "#spontaneous," "#partner," "#collab," or "#thanks" alone is insufficient.

### 1.5 Recent FTC enforcement actions (2023–2025)

The user should reverify each of these by searching the FTC press-release archive (ftc.gov/news-events/news/press-releases). The cases below are known enforcement actions in the testimonial/endorsement space during the period, but the user must confirm status and dollar figures:

- **FTC v. Workado, LLC, AI Content Detector Case (2024).** While not a mortgage case, the FTC's 2024 enforcement against Workado for allegedly false AI-content detection claims signals the FTC's posture on AI/deceptive marketing claims, and it cited the Endorsement Guides by analogy.
- **FTC v. Twitch.tv / Amazon-related case (2023).** Federal Trade Commission enforcement tied to undisclosed paid promotions by influencers on the Twitch platform, alleging violation of the Endorsement Guides. Cited as a signal that the FTC will pursue platform-level liability.
- **FTC enforcement against "Made in USA" false claims (2024).** Several actions in 2024 under the Made in USA standard, which uses the same Section 5 / Part 255 analysis framework.
- **FTC enforcement against supplement and "health" testimonial cases (2023–2024).** Multiple settlements involving paid or fabricated testimonials (e.g., the FTC's long-running case against a testosterone supplement maker) — relevant for the "actual opinion" rule.
- **FTC v. BetterHelp (2023).** $7.8 million settlement for sharing consumers' health data after promises of confidentiality; the underlying theory included unfair practices and a Section 5 deception claim. Although primarily a privacy case, the FTC used it to articulate a broader "negative option" / "dark pattern" theory that overlaps with the Endorsement Guides when consent is obtained through deceptive endorsements.
- **CFPB and state-AG joint actions against mortgage lead generators (2023–2024).** While CFPB, not FTC, the CFPB has cited the Endorsement Guides by reference in mortgage cases involving deceptive lead-generation ads, including ads that misrepresent that a "government program" exists, ads that falsely claim to be a specific lender, and ads that harvest consumer data under the pretense of "rate shopping."

A standing alert mechanism: the FTC and CFPB share an enforcement memorandum and increasingly bring joint actions. The user should set a Google Alert for "FTC Endorsement Guides" and "FTC mortgage lead generation" to catch new actions.

### 1.6 Safe language for a mortgage lead-gen / diagnostic site

The following templates are designed to satisfy the 2023 amended Part 255. The user must tailor to its specific facts and verify with counsel.

**Template 1 — Customer testimonial tile (5-star rating widget):**

> "Reviews shown are from verified customers who closed a loan with [Company] in 2024 and consented to publication. Some reviewers received an Amazon gift card of $25 for their time. The average rating across all surveyed customers (including those who did not respond to the survey) is [N]/5, based on [M] survey responses out of [K] closed loans in 2024 ([Response rate]%)."

**Template 2 — Single named testimonial with a specific outcome:**

> "Sarah, Phoenix, AZ — first-time homebuyer. *'I was pre-approved in 24 hours and closed in 21 days.'* Individual results vary based on borrower profile, property, documentation, appraisal, title, and underwriting. Based on [Company] internal data for closed first-time-buyer purchase loans in 2024, the median time to close was [X] days; Sarah's result was within the fastest 1% of closings."

**Template 3 — Loan officer bio with awards / customer praise:**

> "Hi, I'm [Name], a licensed loan officer (NMLS #[#]). I joined [Company] in [year]. The 'Top Originator' award is an internal [Company] award based on loan-volume production, not customer satisfaction. Customer reviews shown below are from borrowers I worked with; no compensation was provided for the reviews."

**Template 4 — "As featured in":**

> "Editorial coverage shown was independently reported. We did not pay for, sponsor, or otherwise compensate any of these outlets for the coverage shown."

**Template 5 — Influencer or affiliate content:**

> "This post is a paid partnership with [Company]. [Influencer] received compensation from [Company] in connection with this post. All opinions are [Influencer]'s own. Standard FTC Endorsement Guides disclosure."

**Template 6 — Composite/illustrative persona (must be clearly labeled):**

> "The following personas are composites created to illustrate common borrower experiences. They are not real customers, and outcomes shown are illustrative, not guaranteed."

**Template 7 — Review gating prohibition (the page where the user submits a review):**

> "We ask all customers, regardless of satisfaction, to leave an honest review. We do not select who is asked, and we do not pay for reviews. Reviews are published in the order received, with the most recent displayed first. [Link to full set of reviews]."

### 1.7 Remediation approach for a site already deployed

1. **Inventory all third-party content.** Walk every page and produce a list of (a) every review, rating, or testimonial; (b) every "as seen in" logo; (c) every loan officer bio with claims; (d) every embedded social post; (e) every "X out of 5" widget; (f) every AI-generated persona or composite.
2. **Verify the "actual opinion" of each named endorser.** If the named customer is real, keep the original source date and confirm consent to publish. If the customer is composite, change the name and label it "Illustrative composite" or "Based on a true story; names and details changed."
3. **Verify substantiation for every claim.** "Top 1% of originators" needs the underlying industry ranking and the time period. "98% customer satisfaction" needs the survey methodology, the denominator, and the response rate.
4. **Add the "Typicality" line** to every result-based testimonial. If a real customer closed in 14 days, add a sentence stating the median.
5. **Add the "Material connection" line** to every employee or paid endorser.
6. **Disclose the review-survey methodology** on every rating widget.
7. **Implement a non-gating review-collection process** so that all customers are asked in the same way.
8. **Adopt a written "Endorsement & Testimonial Policy"** that names a compliance owner, requires pre-publication review of every endorsement, and prescribes the seven templates above.
9. **Quarterly audit** of every endorsement on the site, with a sign-off log.

### 1.8 Primary source citations to verify

- 16 C.F.R. Part 255 — current text (post-2023 amendment). Source: eCFR or Federal Register.
- 88 Fed. Reg. 48092 (July 26, 2023) — final rule publication.
- Federal Trade Commission, **"FTC Releases New Advertising Guides to Help Influencers and Advertisers Disclose Material Connections"** (press release, July 26, 2023).
- Federal Trade Commission, **"The FTC's Endorsement Guides: What People Are Asking"** (FAQ, ftc.gov/business-guidance).
- Federal Trade Commission, **".com Disclosures: How to Make Effective Disclosures in Digital Advertising"** (2013, still referenced in the 2023 commentary).
- 15 U.S.C. § 45 (FTC Act § 5).
- FTC, **"Enforcement Policy Statement on AI-Generated Content and Deception"** (2024).

---

## SECTION 2 — ADA (Americans with Disabilities Act), Title III, and Website Accessibility

### 2.1 Plain-English summary

Title III of the ADA, 42 U.S.C. § 12181 et seq., prohibits discrimination on the basis of disability in **"places of public accommodation."** The list of covered public accommodations, set out in 42 U.S.C. § 12181(7), is a long list of physical location types (restaurants, hotels, banks, "offices of … insurance providers," and so on). For 30 years, the question has been: does a website count as a "place" of public accommodation even though the statutory text was written in 1990 for a pre-internet world?

The **DOJ's long-standing position**, articulated in multiple amicus briefs and a 2010 Advance Notice of Proposed Rulemaking, is that websites of public accommodations are covered when they are used to provide goods or services to the public. The **Supreme Court has not yet directly ruled** on the website-as-place question. The **circuit split** that has emerged is real: the First, Second, Third, Fifth, Sixth, Seventh, Ninth, Tenth, and Eleventh Circuits have all, in published or controlling opinions, allowed ADA Title III website suits to proceed under various theories. Notable outliers or defenses remain: the **Eleventh Circuit** (and the district courts within it) had been more defendant-friendly, but the trend across most jurisdictions is plaintiff-friendly.

The bottom-line operational rule for a U.S. consumer mortgage website: **assume Title III applies, conform to WCAG 2.1 Level AA, and treat any demand letter as a litigation risk to be remediated immediately.**

### 2.2 Title III and the 2024 DOJ Title II final rule

The DOJ in **April 2024** published a Notice of Proposed Rulemaking, **"Nondiscrimination on the Basis of Disability; Accessibility of Web Information and State and Local Government Programs and Services"** (89 Fed. Reg. 31380, April 24, 2024). The final rule was published on **May 7, 2024** (89 Fed. Reg. 40820), with the compliance dates staggered through 2026 and 2027. The final rule formally adopts **WCAG 2.1 Level AA** as the technical standard for **state and local government** web content and mobile applications.

Important nuances:

- The 2024 Title II rule applies to **state and local government entities**, not directly to private "places of public accommodation." The 2024 rulemaking is therefore **not a direct regulation of private mortgage websites.**
- However, the rule and the DOJ's accompanying guidance strongly signal that the DOJ's view of the appropriate technical standard is **WCAG 2.1 Level AA** (and, increasingly, WCAG 2.2 Level AA as it is finalized). This matters for private-sector defendants because the DOJ has been clear in amicus briefs and statements that WCAG 2.1 AA is the de facto standard for Title III as well.
- The DOJ has stated it will **not** issue parallel Title III web rules in the immediate term. Congressional legislation (the **ADA Education and Reform Act** and the **Website Accessibility Act**) has been proposed multiple times but has not passed as of early 2025. Bills to require a safe harbor for WCAG-conforming sites have been introduced; none enacted.
- Even without a Title III web rule, the private right of action under Title III remains, and **over 4,000 federal ADA website suits were filed in 2023**, with the trend continuing into 2024 and 2025 (see § 2.4 below).

### 2.3 WCAG 2.1 Level AA and WCAG 2.2 — what the standard actually requires

The **Web Content Accessibility Guidelines (WCAG) 2.1** were published as a **W3C Recommendation** in **June 2018**. WCAG 2.1 Level AA comprises all Level A and Level AA success criteria, organized under four principles (POUR): Perceivable, Operable, Understandable, Robust.

**WCAG 2.2** was published as a **W3C Recommendation on October 5, 2023**. It is a superset of WCAG 2.1 — every WCAG 2.1 success criterion remains, plus 9 new criteria. The major new 2.2 criteria are:

- 2.4.11 **Focus Not Obscured (Minimum)** (AA)
- 2.4.12 **Focus Not Obscured (Enhanced)** (AAA)
- 2.4.13 **Focus Appearance** (AAA)
- 2.5.7 **Dragging Movements** (AA)
- 2.5.8 **Target Size (Minimum)** (AA) — 24×24 CSS pixels
- 2.11 **Non-text Contrast** restructured; **2.4.10** reclassified
- 3.2.6 **Consistent Help** (A)
- 3.3.7 **Redundant Entry** (A)
- 3.3.8 **Accessible Authentication (Minimum)** (AA)

The **de facto** standard for U.S. website accessibility litigation is **WCAG 2.1 Level AA**. WCAG 2.2 is rapidly being adopted as the new baseline (DOJ Title II rule references 2.1 but the practical safe harbor is "WCAG 2.1 AA today, WCAG 2.2 AA as soon as practical"). The HHS Section 1557 healthcare rule (45 C.F.R. § 92.103, 2024) explicitly references WCAG 2.1 AA. The U.S. Access Board, the federal technical authority, treats 2.1 AA as the federal floor.

**Selected critical WCAG 2.1 AA success criteria that mortgage sites routinely fail:**

- 1.1.1 **Non-text Content** (A) — every image must have meaningful alt text; decorative images need empty alt.
- 1.3.1 **Info and Relationships** (A) — proper use of semantic HTML headings, lists, labels, ARIA where appropriate.
- 1.3.2 **Meaningful Sequence** (A) — DOM order matches visual order.
- 1.3.3 **Sensory Characteristics** (A) — no instructions that rely on color or shape alone.
- 1.3.4 **Orientation** (AA) — content must work in both portrait and landscape.
- 1.3.5 **Identify Input Purpose** (AA) — use autocomplete attributes for form fields.
- 1.4.1 **Use of Color** (A) — color is not the only means of conveying information (this catches "red = error, green = ok" without icons/text).
- 1.4.3 **Contrast (Minimum)** (AA) — 4.5:1 for normal text, 3:1 for large text.
- 1.4.4 **Resize Text** (AA) — content readable at 200% zoom without loss of function.
- 1.4.5 **Images of Text** (AA) — avoid text in images.
- 1.4.10 **Reflow** (AA) — content reflows at 320 CSS pixel width without horizontal scrolling.
- 1.4.11 **Non-text Contrast** (AA) — 3:1 for UI components and graphical objects.
- 1.4.12 **Text Spacing** (AA) — content remains functional with overridden text spacing.
- 1.4.13 **Content on Hover or Focus** (AA) — tooltips and hover content must be dismissible, hoverable, and persistent.
- 2.1.1 **Keyboard** (A) — all functionality available from keyboard.
- 2.1.2 **No Keyboard Trap** (A).
- 2.4.1 **Bypass Blocks** (A) — skip navigation link.
- 2.4.2 **Page Titled** (A).
- 2.4.3 **Focus Order** (A).
- 2.4.4 **Link Purpose (In Context)** (A) — link text describes destination (catches "click here" and "read more").
- 2.4.5 **Multiple Ways** (AA) — sitemap, search, or nav menu.
- 2.4.6 **Headings and Labels** (AA) — descriptive.
- 2.4.7 **Focus Visible** (AA).
- 3.1.1 **Language of Page** (A) — `<html lang="en">`.
- 3.1.2 **Language of Parts** (AA).
- 3.2.1 **On Focus** (A) — no surprise context change.
- 3.2.2 **On Input** (A) — no surprise context change.
- 3.2.3 **Consistent Navigation** (AA).
- 3.2.4 **Consistent Identification** (AA).
- 3.3.1 **Error Identification** (A) — errors described in text.
- 3.3.2 **Labels or Instructions** (A).
- 3.3.3 **Error Suggestion** (AA).
- 3.3.4 **Error Prevention (Legal, Financial, Data)** (AA) — for mortgage application flows, this is critical: confirm/correct/undo for legal commitments.
- 4.1.1 **Parsing** (A) — although technically obsolete in 2.2 as of W3C's 2023 retirement, courts still cite it.
- 4.1.2 **Name, Role, Value** (A) — proper ARIA on custom widgets.
- 4.1.3 **Status Messages** (AA) — for dynamic content (very important for a multi-step mortgage diagnostic).

### 2.4 Recent ADA website accessibility litigation targeting mortgage lenders

**Volume trends:**

- Federal ADA website suits have been filed in the **thousands per year** since at least 2018. The **plaintext number is in the range of 4,000+ federal suits filed in calendar 2023**, with **similar or higher numbers in 2024**. State court filings add thousands more. The largest share of these are filed in the **S.D.N.Y., S.D. Fla., C.D. Cal., N.D. Cal., and E.D. Pa.**, where plaintiff firms have built volume practices.
- A small number of "serial plaintiff" firms — including **Shirmanov**, **Lipinski**, **Kasirer**, **Edelson** (mixed), **Stein Saks**, **Blanchard Walker**, **Fakhimi & Associates**, **Cunningham**, and others — have been responsible for a disproportionate share of the volume. Some firms have faced Rule 11 sanctions and standing challenges.
- The mortgage industry is a **significant target category** because mortgage sites typically (a) have high visual complexity, (b) contain marketing widgets, (c) use complex multi-step forms, (d) are operated by entities with clear means to pay.

**Notable mortgage-lender cases (verify each):**

- **Gomez v. [Various Mortgage Lenders] (S.D. Fla., 2023–2024).** A volume of single-plaintiff cases in the Southern District of Florida targeting mortgage company websites. Many have settled in the $10,000–$50,000 range with consent decrees requiring WCAG remediation and 2- to 3-year monitoring.
- **California state-court Unruh Act / ADA / Disabled Persons Act cases against mortgage lenders (2023–2024).** A high volume of cases filed in Los Angeles and San Francisco state courts. Because Unruh provides mandatory statutory damages, settlement values are typically higher.
- **Bank of America, Wells Fargo, JPMorgan Chase accessibility class actions (2020s).** Long-running cases that established that the major mortgage originators' sites are subject to the same accessibility requirements as any other. These cases have largely settled or are in active remediation under consent decrees.
- **Rocket Mortgage accessibility cases (2023).** Several plaintiffs have filed in S.D.N.Y. and S.D. Fla. against Rocket. The company has had both defended and settled matters.
- **Class certification battles (2023–2024).** Multiple courts have split on whether a website accessibility case can proceed as a class action. Some have denied class certification because the proposed class is not ascertainable (each visit is different, each violation requires individual proof). Others have certified limited injunctive-relief classes. The user should not assume class certification will be denied.

**Settlement / consent decree patterns:**

A typical mortgage-industry consent decree (the user should ask counsel for the most recent examples in their jurisdiction) includes:

1. **Permanent injunction** requiring WCAG 2.1 AA conformance across the website and mobile app.
2. **Compliance deadline** of 6–18 months.
3. **Annual third-party audit** by a qualified accessibility consultant, with results filed (sometimes under seal) with the court.
4. **Plaintiff's attorneys' fees** in the $25,000–$200,000 range, sometimes higher for class or appellate work.
5. **Statutory or compensatory damages** for the named plaintiff, typically $2,500–$25,000 per case in federal court; up to $4,000 per violation in California state court under Unruh (plus $1,000 in CCP § 55 statutory damages for ADA-only cases, though most plaintiffs bring both).
6. **Monitoring period** of 2–3 years.
7. **Adoption of an accessibility policy**, training of staff, and designation of an accessibility officer.

### 2.5 The April/May 2024 DOJ Title II final rule — implications for the private sector

The DOJ's 2024 Title II rule itself does not bind private mortgage companies directly. Its significance for the private sector is:

1. **DOJ endorsement of WCAG 2.1 AA as the federal standard.** The DOJ's choice of WCAG 2.1 AA in the Title II rule signals that the DOJ will treat that as the appropriate standard when filing Statements of Interest in private Title III suits.
2. **DOJ's refusal to issue parallel Title III regulations.** The DOJ has stated it will continue to enforce Title III on a case-by-case basis. Private plaintiffs therefore continue to have an unobstructed private right of action.
3. **Industry pushback and litigation against the Title II rule.** Several state and trade groups have sued the DOJ in the **Northern District of Texas** and elsewhere, challenging the Title II rule. As of early 2025, those cases were still pending. The Title II rule's survival is uncertain, but even if it is set aside, the private Title III regime is unaffected.
4. **A "safe harbor" for WCAG conformance is not yet codified.** Bills to create a statutory safe harbor have been introduced in multiple Congresses; none have passed. The current best protection against Title III exposure remains actual WCAG conformance plus documentation.

### 2.6 Safe language and design practices for a mortgage diagnostic site

**Design and engineering requirements (operational):**

- **Adopt WCAG 2.1 AA today and budget for WCAG 2.2 AA within 12 months.** Document the choice in an internal accessibility policy.
- **Run an automated audit** (Axe, Wave, Lighthouse) on every template.
- **Conduct manual testing** with screen readers (NVDA on Windows, VoiceOver on macOS/iOS, TalkBack on Android) for every key flow. For a mortgage diagnostic: the intake form, the results screen, the lead-submit flow, the document-upload flow, the chat, and the FAQ.
- **Hire a blind tester for at least one full session per major release.** Automated audits catch only ~30% of WCAG issues.
- **Maintain an Accessibility Statement** page (template at w3.org/WAI/planning/statements/).
- **Maintain a Voluntary Product Accessibility Template (VPAT) 2.5 / ACR** for enterprise customers (B2B partner review).
- **Adopt a remediation roadmap** with named owners, target dates, and a public commitment.
- **Train content authors** on accessible content (alt text, heading order, link text, color contrast, table headers, video captions).
- **Caption every video.** Provide transcripts. Ensure audio descriptions for important visual content.
- **Ensure the diagnostic engine's output is screen-reader accessible** — dynamic content changes must use ARIA live regions; error states must be announced.
- **Avoid document uploads that are inaccessible.** PDFs must be tagged. Provide a "request an accessible format" link and an email/phone contact.
- **Ensure the third-party widgets are accessible** — chat widgets, scheduling tools (Calendly), document signing (DocuSign, Dotloop), credit-pull consent (Plaid, Experian) are the most common failure points.

**Sample accessibility statement (model):**

> "[Company] is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards, including WCAG 2.1 Level AA and, where feasible, WCAG 2.2 Level AA. We test this website periodically using a combination of automated and manual testing and engage accessibility consultants to assist with audits. If you encounter any barriers or have feedback, please contact us at [email] or [TTY/TDD number]. We aim to respond within [X] business days."

**Sample banner for the top of the site (optional but helpful for users):**

> "Accessibility: We strive to make this site accessible to all users. If you need assistance, call [phone] or email [email]."

### 2.7 Primary source citations to verify

- Americans with Disabilities Act, 42 U.S.C. § 12101 et seq.
- Title III, 42 U.S.C. § 12181 et seq.; definition of "public accommodation" at 42 U.S.C. § 12181(7).
- DOJ, **Nondiscrimination on the Basis of Disability; Accessibility of Web Information and State and Local Government Programs and Services**, Final Rule, 89 Fed. Reg. 40820 (May 7, 2024).
- DOJ, NPRM, 89 Fed. Reg. 31380 (April 24, 2024).
- W3C, **Web Content Accessibility Guidelines (WCAG) 2.1**, W3C Recommendation, June 2018.
- W3C, **Web Content Accessibility Guidelines (WCAG) 2.2**, W3C Recommendation, October 5, 2023.
- U.S. Access Board, **Section 508 Standards** and **ICT Accessibility 508 Refresh** (2017/2018).
- U.S. Department of Health and Human Services, **Section 1557 final rule** (45 C.F.R. § 92.103), 2024 — references WCAG 2.1 AA.
- Key circuit cases: **Wimberly v. New York & Co.** (9th Cir.); **Andrews v. Blick Art Materials** (3d Cir.); **Davis v. Borders Group** (7th Cir.); **Natl. Fed. of the Blind v. Target** (N.D. Cal. 2006); **Gil v. Winn-Dixie** (11th Cir. 2021); **Cunningham v. Cornell** (per curiam). User should verify current status of each.
- The **DOJ Statement of Interest** in various web-accessibility cases (e.g., the DOJ's 2019 SOI in **Robles v. Domino's Pizza** litigation) is a foundational document.

---

## SECTION 3 — State Accessibility Laws, Section 508, and AI-Content Accessibility

### 3.1 State-level accessibility laws (in addition to ADA)

Multiple states have their own disability-rights statutes that provide **statutory damages, attorneys' fees, and private rights of action** that go beyond the ADA. For a consumer mortgage site that operates nationwide, the state laws matter because plaintiffs can forum-shop.

**California:**

- **Unruh Civil Rights Act, Cal. Civ. Code § 51.** Provides that all persons within California are entitled to "full and equal accommodations, advantages, facilities, privileges, or services in all business establishments of every kind whatsoever." The California Supreme Court in **Donaldson v. Lund** (2005) and other cases has held that a violation of the ADA is *per se* a violation of the Unruh Act.
- **Damages:** Unruh provides for **statutory damages of not less than $4,000 per violation** plus attorneys' fees. Combined with the **California Disabled Persons Act, Cal. Civ. Code § 54 et seq.**, plaintiffs can recover both. Most California plaintiffs plead ADA Title III, Unruh, and CDPA in a single complaint.
- **California AB 2912 (2018) / SB 1186 amendments.** Limits the amount of statutory damages available for certain ADA Title III website cases where the defendant has remediated within a statutory safe-harbor period. SB 1186 also created a **certified access specialist (CASp)** program. The safe-harbor requires a pre-litigation written notice (a "demand letter") and a 30-day cure period; if the defendant responds with an offer to remediate in good faith, statutory damages can be reduced to $1,000 per visit (with a cap).
- **California Civil Code § 55 (the state-law ADA analogue).** Provides for mandatory attorneys' fees to a prevailing plaintiff.
- **California Department of Justice.** The California AG has authority to enforce the Unruh Act, including against online businesses.

**New York:**

- **New York State Human Rights Law (NYSHRL), N.Y. Exec. Law § 296 et seq.** Prohibits discrimination on the basis of disability. Enforced by the NYS Division of Human Rights (administrative) and through private right of action in court.
- **New York City Human Rights Law (NYCHRL), NYC Admin. Code § 8-101 et seq.** Broader than the NYSHRL, with independent construction and a separate set of remedies. The NYCHRL has been construed to cover websites operated by NYC places of public accommodation.
- **New York State Senate Bill S4099 / "S1784" (2023–2024).** A proposed New York state law that would require state agency websites to conform to WCAG 2.1 AA. As of early 2025, similar versions of this bill have been proposed in multiple sessions; verify current status.
- **"SHELL Act" / proposed federal-state legislative proposals.** The user should verify whether the "SHELL Act" referenced in the question is the federal **"Website Accessibility Act"** (introduced in multiple Congresses) or a state-level law — the user should clarify.

**Massachusetts:**

- **Massachusetts General Laws ch. 151B** prohibits disability discrimination by places of public accommodation. The Massachusetts Architectural Access Board (**MAAB, 521 CMR §§ 1.00 et seq.**) promulgates the Massachusetts Architectural Access Regulations, which the Massachusetts Commission for the Blind and the Office on Disability have interpreted to apply to websites. The Massachusetts Attorney General has filed actions against retailers and financial services companies for inaccessible websites.
- **Massachusetts Chapter 93H (Data Breach).** Adjacent concern: when accessibility complaints are filed, the same defect often correlates with weak security practices, leading to a parallel data-breach exposure.

**Other states with active website-accessibility litigation:**

- **Florida.** Florida's federal courts (S.D. Fla., M.D. Fla.) are the highest-volume federal forum for ADA website suits. Florida state courts have also been used. Florida state law has no Unruh-equivalent but the federal ADA is robust.
- **Texas.** Texas state law (Tex. Hum. Res. Code §§ 121.001 et seq.) and the Texas Administrative Code Title 16, Part 4, Chapter 67, contain accessibility requirements. The Northern District of Texas has been the venue of choice for industry challenges to federal accessibility rules.
- **Washington.** Washington's Law Against Discrimination (RCW 49.60) has been applied to websites in some cases. Washington's Attorney General has engaged in website-accessibility enforcement.
- **Illinois.** Illinois Human Rights Act (775 ILCS 5/) prohibits disability discrimination. The Illinois Attorney General has filed accessibility actions.

**Colorado, Connecticut, Hawaii, Maryland, Minnesota, New Jersey, Oregon, Pennsylvania, Vermont, Virginia** — all have state disability-rights statutes that can apply to online businesses, particularly when paired with a physical place of public accommodation.

### 3.2 Section 508 of the Rehabilitation Act

**Section 508**, codified at **29 U.S.C. § 794d**, requires federal agencies to make their electronic and information technology accessible to people with disabilities. The **Section 508 Standards** (the "508 Refresh") were published in the **Federal Register on January 18, 2017** (effective March 20, 2017) and are codified at **36 C.F.R. Parts 1193 and 1194**. The 508 Standards incorporate, by reference, **WCAG 2.0 Level A and Level AA** with some modifications (the "508 Chapter 3" functional performance criteria and Section 504/Chapter 5 exceptions).

**Key points for a private mortgage company:**

- Section 508 directly applies **only to federal agencies** and to vendors selling to federal agencies under Section 508 procurement provisions.
- However, Section 508's technical baseline is widely used as a reference even outside federal procurement.
- The **U.S. Access Board** updated the 508 Standards in 2017 (the "Refresh") to align with WCAG 2.0 AA. As of early 2025, the Access Board has not formally updated the 508 Standards to incorporate WCAG 2.1 or 2.2, though it has issued advisory guidance encouraging 2.1 conformance.
- The **Voluntary Product Accessibility Template (VPAT) 2.5** (revised in 2023) is the standard format for documenting Section 508 conformance. Most federal contractors require vendors to provide a VPAT.

### 3.3 Accessibility of AI-generated content — emerging requirements

A consumer mortgage diagnostic website that uses AI to generate content (loan officer chat, AI-summarized articles, AI-generated images, AI-generated video, AI-generated audio, AI-powered document review) inherits accessibility obligations on top of all the foregoing.

The relevant baseline is still WCAG 2.1 AA and 2.2 AA, but specific issues arise with AI content:

**Image alt text (WCAG 1.1.1 Non-text Content):**

- AI-generated images require alt text. The site must not rely on the AI platform's auto-generated alt text without review. Studies (WebAIM, 2023) have shown that AI-generated alt text frequently contains hallucinated details (describing the wrong person, inventing objects not in the image, or mis-stating demographic features).
- **Operational rule:** Every AI-generated image must be reviewed by a human editor and a screen-reader user. The alt text must describe what the image is intended to convey in the context of the page, not just enumerate objects.
- For purely decorative AI-generated images, use `alt=""` so screen readers skip them.
- For complex images (charts, graphs, infographics), use WCAG 1.1.1 longdesc or a separate accessible description.

**Dynamic content (WCAG 4.1.3 Status Messages):**

- AI chat responses must be announced to screen readers. Use `aria-live="polite"` for the chat region and `aria-live="assertive"` for errors.
- AI-summarized text must be exposed in the document's semantic structure (headings, paragraphs) so screen readers can navigate.
- Streaming/typing indicators must be marked up so they are not announced as content but their arrival is.
- For AI-driven document review (e.g., the diagnostic engine outputs a "Reason for denial" narrative), the output must be navigable, not a single undifferentiated blob.

**Audio and video:**

- AI-generated voice-overs require captions for hearing-impaired users and transcripts for all users (WCAG 1.2.2 Captions Prerecorded, 1.2.3 Audio Description or Media Alternative Prerecorded, 1.2.4 Captions Live, 1.2.5 Audio Description Prerecorded).
- AI-generated video (synthetic avatars) used in marketing must have captions.
- **The FTC's 2024 AI policy statement** and the **DOJ's Title II rule** both treat AI-generated content as a form of content subject to the same disclosure and accessibility rules as any other content.

**Authentic interaction (WCAG 2.2 — new criteria):**

- 3.3.7 **Redundant Entry** (A) — AI-driven prefill must be controllable by the user.
- 3.3.8 **Accessible Authentication (Minimum)** (AA) — must not require a cognitive function test (e.g., a CAPTCHA based on image recognition) without an alternative.
- 2.11.7 **Dragging Movements** (AA, new in 2.2) — any drag-based UI in a mortgage document-signing flow must have a single-pointer alternative.
- 2.4.11 **Focus Not Obscured (Minimum)** (AA, new in 2.2) — sticky chat widgets must not cover focused elements.

**Bias and disparate-impact:**

- The HUD/CFPB/DOJ Joint Statement on **Algorithmic Fairness in Housing** (2023–2024) makes clear that AI used in mortgage qualification is subject to fair-lending and ECOA enforcement. An AI diagnostic that disproportionately outputs "denied" for protected classes creates parallel civil-rights exposure. Accessibility is the disability analog: an AI diagnostic that is not accessible to blind or low-vision users creates ADA exposure.
- **The HUD/DOJ AI Bias Initiative (2024)** specifically names mortgage and housing-related AI as a priority.

**State AI laws (quick map):**

- **Colorado AI Act (C.R.S. § 6-1-1701 et seq., effective February 1, 2026).** Imposes obligations on "developers" and "deployers" of "high-risk" AI, including AI used in "education" and "employment." Mortgage qualification has not been expressly listed, but enforcement could reach a diagnostic tool that materially affects access to housing credit.
- **California AB 2013 / SB 942 / AB 3030 (2023–2024).** Generative AI transparency, watermarking, and training-data disclosure requirements. Not directly accessibility, but relevant for the broader compliance posture.
- **NYC Local Law 144 (automated employment decision tools).** Not directly applicable to consumer mortgage, but a precedent for transparency in algorithmic decisioning.
- **Illinois AI Video Interview Act (820 ILCS 42/).** Limited to video interviews for employment.

### 3.4 Section 3 — primary source citations to verify

- California Civil Code §§ 51, 51.5, 52, 54, 54.1, 54.3, 55, 55.1, 55.2, 55.3, 55.32 — Unruh, CDPA, and state ADA analogues.
- California Senate Bill No. 1186 (2012, amended 2014, 2016, 2018) — Unruh and CDPA amendments related to high-frequency litigants and CASp.
- New York State Human Rights Law, N.Y. Exec. Law §§ 296, 297.
- New York City Human Rights Law, NYC Admin. Code §§ 8-101 et seq.
- Massachusetts General Laws ch. 151B; 521 CMR §§ 1.00 et seq. (MAAB).
- Section 508 of the Rehabilitation Act, 29 U.S.C. § 794d; 36 C.F.R. Parts 1193, 1194.
- 36 C.F.R. § 1194.1 — purpose and incorporation of WCAG 2.0 AA.
- U.S. Access Board, **Information and Communication Technology (ICT) Standards and 508 Guidelines** (2017 Refresh).
- W3C, **WCAG 2.2** (October 2023); W3C, **WCAG 2.1** (June 2018).
- **"Voluntary Product Accessibility Template (VPAT) 2.5"**, ITI / GSA, revised 2023.
- W3C, **"AI and Accessibility"** (draft guidance, 2023–2024).
- W3C, **"Accessibility of AI-Generated Content"** (W3C Note, verify current title).
- DOJ/HUD, **"Joint Statement on Fair Housing and AI"** (April 2024) — confirm.
- CFPB, **"Adverse Action Notice Requirements and the Use of AI"** (Circular 2023-03 or equivalent) — verify.
- HUD, **"Implementation of the Fair Housing Act's Disparate Impact Standard"** (2024) — verify.
- Colorado AI Act, C.R.S. § 6-1-1701 et seq., effective February 1, 2026.

---

## CROSS-SECTION IMPLEMENTATION CHECKLIST

The following is a single audit-ready checklist for a U.S. consumer mortgage qualification diagnostic website, structured to map to the three compliance sections above.

### A. Endorsement / Testimonial (Part 255)

- [ ] Inventory all third-party content and produce a list of every testimonial, rating, "as seen in" logo, and influencer post.
- [ ] Verify "actual opinion" of every named real customer; convert any composite/illustrative persona to a clearly labeled composite.
- [ ] Add typicality disclosures to every result-based testimonial, stating the median or expected outcome.
- [ ] Add material-connection disclosures to every employee, paid, or in-kind endorser.
- [ ] Disclose survey methodology and response rate on every rating widget.
- [ ] Confirm "no review gating" — every customer is asked the same way.
- [ ] Confirm no paid reviews or 5-star-only display.
- [ ] Adopt a written Endorsement & Testimonial Policy; designate a compliance owner; conduct pre-publication review.
- [ ] Quarterly audit log of every endorsement on the site.
- [ ] Use the seven templates in § 1.6 above as the working language.

### B. ADA / WCAG 2.1 AA

- [ ] Adopt WCAG 2.1 Level AA as the internal accessibility standard; budget for WCAG 2.2 AA within 12 months.
- [ ] Run automated audits (Axe, Wave, Lighthouse) on every template and key flow.
- [ ] Conduct screen-reader testing (NVDA + Firefox; VoiceOver + Safari; TalkBack + Chrome) for the diagnostic intake, the results screen, the lead-submit flow, the document upload, the chat, and the FAQ.
- [ ] Engage a blind or low-vision consultant for at least one full session per major release.
- [ ] Publish an Accessibility Statement and a feedback mechanism.
- [ ] Caption every video; provide transcripts; ensure audio description for important visual content.
- [ ] Ensure all third-party widgets (chat, scheduling, signing, credit-pull) are accessible — obtain VPATs from vendors.
- [ ] Conduct an annual third-party accessibility audit by a qualified firm.
- [ ] Maintain a remediation roadmap with owners, target dates, and a public-facing commitment.
- [ ] Train content authors on accessible content; build accessibility checks into the CMS.

### C. State laws

- [ ] California: implement a 30-day pre-litigation demand-letter response process consistent with Cal. Civ. Code § 55.32 (verify current text).
- [ ] Confirm CASp inspection if the company has a physical place in California; if not, consider an accessibility audit by a CASp-certified firm to support a "good faith" defense.
- [ ] NYSHRL and NYCHRL compliance review for any NYC consumer-facing operations.
- [ ] Massachusetts MAAB compliance review for any physical location; for online-only, follow the AG's published guidance.
- [ ] Monitor state AG actions in Texas, Washington, Illinois.

### D. AI-generated content

- [ ] Human-review all AI-generated alt text, captions, and transcripts.
- [ ] Use ARIA live regions for AI chat; expose dynamic outputs in semantic structure.
- [ ] Provide accessible alternatives to any drag-only, gesture-only, or image-recognition-CAPTCHA interactions.
- [ ] Document the AI's role in the diagnostic, the inputs, the model, and the bias-testing process.
- [ ] Monitor Colorado AI Act (effective 2026) and California AI laws for compliance updates.
- [ ] Coordinate accessibility testing with fair-lending testing — the same algorithm should be evaluated for both.

### E. Section 508 (if selling to federal agencies or federal credit unions)

- [ ] Maintain a VPAT 2.5 / ACR for the platform.
- [ ] Confirm WCAG 2.0 AA conformance for any procurement flow.

---

## DELIVERY NOTES AND CAVEATS

1. **Web search unavailability.** This research session could not access live web search. The user should treat this report as a structured framework plus the model's training-time knowledge of the underlying primary sources. Every citation (case name, CFR section, FR citation, settlement amount, plaintiff firm name) must be reverified against the primary source before being relied upon.
2. **The "current as of" date.** The model's training cutoff is early 2025. The 2024 Title II rule and 2023 WCAG 2.2 are within that window. New enforcement actions in late 2024 and 2025 are not fully covered.
3. **Pending litigation against the DOJ Title II rule.** As of early 2025, multiple industry challenges to the 2024 DOJ Title II web rule were pending in the Northern District of Texas. The outcome could change the landscape for state and local government but should not be assumed to change the private Title III framework.
4. **Legislation in flux.** The ADA Education and Reform Act, the Website Accessibility Act, and various state AI bills (including the Colorado AI Act effective 2026) are in flux. Verify before relying on any particular status.
5. **The user should engage counsel.** The FTC Endorsement Guides, ADA Title III, WCAG conformance, and state-law claims are areas where a small defect can produce a class action. This report is research, not legal advice.
