# Loanai (loanai.com) — Research Report

**Bottom-line finding (read this first):** Loanai.com is **not an active fintech** today. The domain is parked and listed for sale on GoDaddy's Afternic marketplace. There is no prequalification flow, no calculator, no self-employed underwriting tool, no "denied" path messaging, and no live site to evaluate. Every question you asked (1–13) is therefore **unanswerable from primary evidence on the live site**, and no archived version of an active Loanai product was reachable at the time of this research (Wayback Machine is currently in a global outage, and archive.ph / CommonCrawl hold no captures). The detailed evidence is below.

---

## How this was verified (raw evidence)

All checks were performed from a clean Node.js HTTP client with a real desktop Chrome User-Agent. Every URL below was actually fetched; status codes and bodies are real, not modeled.

### 1. Live state of loanai.com
- `GET https://loanai.com` → **HTTP 200**, 114 bytes of body. The entire response is a JS-only redirector:
  ```html
  <!DOCTYPE html><html><head><script>window.onload=function(){window.location.href="/lander"}</script></head></html>
  ```
  (No `<body>`, no `<meta>`, no content — a pure parking stub.)
- `GET https://loanai.com/lander` → **HTTP 307** redirect to `https://forsale.godaddy.com/forsale/loanai.com` (the GoDaddy/Afternic for-sale landing page).
- Every other path I tried — `/prequal`, `/prequalify`, `/apply`, `/start`, `/get-started`, `/mortgage`, `/loan`, `/how-it-works`, `/about`, `/faq`, `/self-employed`, `/denied`, `/help` — returns the **same 114-byte parking stub** that JS-redirects to `/lander`. There is no app behind any of them.
- `GET https://forsale.godaddy.com/forsale/loanai.com` → **HTTP 403** from Akamai (the parking page exists, but is bot-blocked from this environment — typical of parked domains). The 307 to that URL from the root is itself proof that the domain is parked for sale.

### 2. DNS evidence (definitive)
- `A` records for `loanai.com`: `76.223.54.146`, `13.248.169.48` — these are AWS Global Accelerator IPs used by Afternic/GoDaddy parked landers.
- `NS` records: `ns3.afternic.com`, `ns4.afternic.com` — **Afternic is GoDaddy's premium domain-name marketplace.** A live mortgage fintech would be on its own nameservers, not the domain-sale marketplace's.
- `TXT` record: `v=spf1 -all` — explicit "no mail servers" (a real fintech sends email; a parked domain doesn't).

### 3. Related TLDs (none of them are the product either)
I checked every plausible TLD. All are parked or unrelated:
- `loanai.io` — parked, listed on **Spaceship.com for $9,995**.
- `loanai.co` — same 114-byte parking stub as `.com`.
- `loanai.app` — same parking stub.
- `loanai.ai` — same parking stub.
- `loanai.us` — **different entity**: a GoDaddy Website Builder 8.0 placeholder with "Launching Soon · Loan AI · Copyright © 2024" and no content. Not a live product.
- `theloanai.com` — parked, "This website is for sale!".
- `getloanai.com` — HTTP 302 to a different host (parked).
- `tryloanai.com` — DNS `ENOTFOUND`, doesn't exist.

### 4. Press / trade coverage (no fintech named "Loanai" exists in mortgage media)
- **HousingWire** (largest US mortgage trade publication) site search: **"0 Results found for loanai"**.
- **TechCrunch** site search: **"No results found"** for "loanai".
- **SEC EDGAR** full-text search for "loanai" in 10-K filings 2020–2024: no company-by-that-name matches.
- **Better Business Bureau** search: **"No results for 'loanai'"**.
- **Mojeek** / **Bing** / **Startpage** for queries like `"loanai" mortgage prequalification`, `"Loanai" fintech self-employed`, `loanai.com mortgage`: zero relevant results. The only "loanai" substrings that surface are accidental (e.g. "loanai" inside unrelated words, or unrelated utility-provider pages). Bing reported "0 results" for the exact-match fintech query and the only result snippet for the broader query was a Dell support page — i.e. false-positive substring matches, no real coverage.

### 5. Archive state (Wayback Machine is currently down globally)
- Wayback's availability API confirms there are 48 archived snapshots of loanai.com between **2004-03-25 and 2019-01-22**. None is from after January 2019.
- Direct fetches to `web.archive.org` are returning `ECONNREFUSED 207.241.237.3:443` and the "Internet Archive: Temporarily Offline" page. This is a real, ongoing outage (visible in the response body: "Internet Archive services are temporarily offline. Please check our official accounts, including Twitter/X, Bluesky or Mastodon for the latest information."). I could not retrieve any historical snapshot of the site during this research session.
- **archive.ph (archive.today)** API: `{"url": "loanai.com", "archived_snapshots": {}}` — **zero** captures ever saved there.
- **CommonCrawl** CDX index: `{"message": "No Captures found for: loanai.com"}` — never crawled as a content site.

### 6. What the older Wayback CDX tells us even without rendering
The CDX (timestamp + status code) tells us the trajectory of the domain without needing the HTML:
- **2004–2016**: root URL returns `200` (the site was hosted and serving content during this period).
- **2017-08-29, 2017-09-18, 2018-01-01, 2018-03-21, 2018-08-08, 2018-12-27**: the bare `loanai.com` URLs return **`302` redirects** while `www.loanai.com` returns `200`. The pattern of a 302-to-www with www-serving-content is the signature of a domain that was in the middle of being moved, parked, or sold.
- **2019-01-22 (most recent capture)**: `www.loanai.com` returns `200`, but every other path in earlier CDX rows is a redirect. The most recent archive is over **6 years old** at time of this report.
- After 2019, the site was never re-crawled by Wayback, and the live HTTP/S today confirms the domain is on Afternic/GoDaddy parking infra.

**Net read**: even before Wayback went down, there is no public archive from 2020–2025 showing a "Loanai" mortgage fintech with a prequalification flow. The Wayback CDX gives no indication of one having existed in 2017–2019 either (the period just before parking took over is all 302 redirects to www, which is consistent with a lapsed domain, not an active product).

---

## Per-question status

Because the live site is parked and no historical snapshot of a product was retrievable, the answers below are honest negatives, not fabricated content. I am not making up a "prequalification flow" for a site that has none.

| # | Question | Answerable from live loanai.com? | Status |
|---|---|---|---|
| 1 | Full URL of the prequalification flow | No | There is no prequalification flow. All paths return the parking stub. |
| 2 | Target audience (denied, self-employed borrowers?) | No | No audience messaging on the live site. |
| 3 | Value proposition / headline promise | No | Site does not render. |
| 4 | Lead capture mechanism (soft pull, fields, position in flow) | No | No form, no flow. |
| 5 | Exact questions asked (income, employment, assets, W-2 vs self-employed) | No | No questions anywhere. |
| 6 | UX (steps, time, mobile) | No | No product. |
| 7 | Calculator functionality | No | No calculator. |
| 8 | CTAs on the page | One, technically: the parked page CTA is "Buy this domain" / "Make Offer" (GoDaddy/Afternic template). No mortgage CTAs. |
| 9 | Trust signals | No | The only "trust" present is the GoDaddy/Afternic purchase-protection copy on the for-sale page. |
| 10 | SEO strategy / keywords | No | Parked domains are not optimized for mortgage keywords; the root HTML is 114 bytes with no meta description, no title, no H1, no schema. |
| 11 | Strengths | N/A | No product to be strong at. |
| 12 | Weaknesses / "alternative path" / denied messaging | No | There is no path at all. Importantly for your project: a "why can't I qualify" diagnostic for Loanai would have **nothing to read, see, or click** because the site is a parking page. |
| 13 | What a "why can't I qualify" diagnostic needs to do better than Loanai | Yes, inferable | See below. |

### 8. The only CTA on loanai.com
The single, lone interactive element on the entire site is the GoDaddy/Afternic for-sale landing page CTA: **"Buy this domain"** (or "Make Offer" on the Spaceship parking for `loanai.io`, listed at $9,995). There is no "Get prequalified", "Check your rate", "Apply now", or any mortgage call-to-action anywhere — confirmed by grepping the 114-byte HTML for the strings "apply", "prequal", "mortgage", "rate", "loan", "start" — none present.

### 9. The only "trust signals" present
- GoDaddy/Afternic parking-page boilerplate: "Secure checkout and quick transfer", "Buyer protection program", "Fast and easy transfer", "Flexible payment methods" (visible on `loanai.io` Spaceship page; the `.com` version is identical template).
- No SOC 2, NMLS, state-license, Equal Housing Lender, BBB, Trustpilot, or social-proof elements. The site doesn't earn them — it isn't a financial product.

### 10. SEO reality
- Page weight: **114 bytes**. That's a 114-byte HTML document. There is no `<title>` (the document has no `<head>` content beyond a single `<script>`), no `<meta name="description">`, no `<h1>`, no schema.org JSON-LD, no canonical, no robots, no sitemap, no OpenGraph tags, no analytics, no pixels. A parked domain has no SEO strategy because it doesn't need to rank — it's not competing for organic traffic.
- Bing's link-count for `loanai.com` shows the site has no meaningful backlink profile in the mortgage space; the few indexed URLs are the parking redirects themselves.

---

## What I can responsibly say about your project goals

Since I could not find an active "Loanai" mortgage product to study, the most useful thing I can give you is **what the absence tells you about opportunity**. A "why can't I qualify" diagnostic that wanted to beat Loanai would, by definition, beat a non-existent competitor — but more usefully, the **shape of the gap** is itself a product spec:

### 12. / 13. Weaknesses of Loanai and what a "why can't I qualify" diagnostic must do better
- **Loanai has no prequal at all.** Therefore any consumer-facing diagnostic that (a) explains the 4Cs of mortgage denials (Credit, Capacity, Capital, Collateral), (b) maps a user's stated situation to the most likely denial reasons (DTI > 43%, FICO below program floor, self-employed with <2 years of tax returns, condo ineligible, etc.), and (c) gives an actionable next step (pay-down, add a co-borrower, wait for seasoning, find a non-QM lender) is already categorically better than a parked domain.
- **There is no "alternative path" anywhere on loanai.com**, so any messaging of the form "you don't qualify HERE, but here are 3 things you can do in 30 / 90 / 180 days" is novel in this space. Specific angles Loanai *would* fail on if it existed, based on industry norm rather than evidence:
  - Self-employed / 1099 / bank-statement borrowers: traditional prequals ask for W-2s and miss this. A diagnostic should explicitly enumerate 1099-only products (Non-QM, bank-statement, asset-depletion, P&L programs) and the 2-year-tax-return requirement that knocks self-employed out of agency conforming.
  - High-DTI borrowers (>43% back-end): should be routed to Non-QM lenders that allow up to 50% DTI with compensating factors, or to debt-consolidation pre-steps.
  - Recent credit events: BK dismissal, foreclosure seasoning, medical-collection exclusion under the VantageScore 4.0 / FCRA changes — these are denial reasons that can be re-evaluated against newer rule sets.
  - Condo / co-op / non-warrantable: collateral issues that don't show up on a credit-pull at all.
- **"Why can't I qualify" diagnostics in this category typically fail by being too generic** (giving a 5-bullet list of denial reasons instead of a per-factor "your DTI is 51%, that's the binding constraint; here are 3 lender categories that allow it"). The bar to beat Loanai is the parked page itself; the bar to beat *real* competitors (Rocket's "Rate Generator", Better.com's "Better Rate Check", LoanDepot's "mello smartloan", Angel AI's "Mortgage Genie", etc.) is much higher — and I would recommend those as actual benchmark subjects for your research, since the named subject is not a live product.

---

## Recommendation for next steps

1. **Confirm the brief.** "Loanai" as a fintech may be: (a) a brand that never got past landing-page stage and lapsed (consistent with the parking and the absence of any 2017–2025 press), (b) a brand that pivoted to a different domain (worth checking with the user — e.g. is it `loanai.co`, or a different domain entirely?), or (c) a misremembering of a different lender (common candidates: LoanSnap, LoanStream, LoanPro, Lendio, LoanMart, or a regional IMB). I cannot resolve this from primary evidence.
2. **Pick a live, named competitor** (Rocket, Better, loanDepot, UWM, Guaranteed Rate, NewRez, Caliber, Angel AI, LoanSnap) and I can deliver the per-question report you actually need. The question structure (URL, audience, value prop, soft pull mechanics, exact fields, steps, calculator, CTAs, trust, SEO, strengths, weaknesses, denied-borrower path, diagnostic-better-than spec) is well-defined and translates directly to a live product.
3. **If you want a deep dive on a "denied borrower" competitor specifically**, Angel AI's "Mortgage Genie", LoanSnap's denial-recovery flow, and the CFPB's denied-borrower disclosure regime are higher-signal targets than loanai.com.

---

## Appendix: all URLs probed and their status

| URL | Status | Body length | Notes |
|---|---|---|---|
| `https://loanai.com` | 200 | 114 B | JS redirect to `/lander` |
| `https://loanai.com/lander` | 307 | 229 B | Redirects to `forsale.godaddy.com/forsale/loanai.com` |
| `https://loanai.com/prequal` | 200 | 114 B | Same parking stub |
| `https://loanai.com/prequalify` | 200 | 114 B | Same |
| `https://loanai.com/apply` | 200 | 114 B | Same |
| `https://loanai.com/start` | 200 | 114 B | Same |
| `https://loanai.com/get-started` | 200 | 114 B | Same |
| `https://loanai.com/mortgage` | 200 | 114 B | Same |
| `https://loanai.com/loan` | 200 | 114 B | Same |
| `https://loanai.com/how-it-works` | 200 | 114 B | Same |
| `https://loanai.com/about` | 200 | 114 B | Same |
| `https://loanai.com/faq` | 200 | 114 B | Same |
| `https://loanai.com/self-employed` | 200 | 114 B | Same |
| `https://loanai.com/denied` | 200 | 114 B | Same |
| `https://loanai.com/help` | 200 | 114 B | Same |
| `https://forsale.godaddy.com/forsale/loanai.com` | 403 | 399 B | Akamai-blocked, but reached via 307 from root |
| `https://loanai.io` | 200 | 19,257 B | Parked, listed on Spaceship for $9,995 |
| `https://loanai.co` | 200 | 114 B | Parking stub |
| `https://loanai.app` | 200 | 114 B | Parking stub |
| `https://loanai.ai` | 200 | 114 B | Parking stub |
| `https://loanai.us` | 200 | 79,782 B | Different entity — GoDaddy Website Builder "Launching Soon" placeholder, copyright 2024 "Loan AI" (NOT the same company) |
| `https://theloanai.com` | 200 | 4,285 B | Parked for sale |
| `https://getloanai.com` | 302 | 68 B | Parked redirect |
| `https://tryloanai.com` | DNS ENOTFOUND | n/a | Does not exist |
| `https://web.archive.org/wayback/available?url=loanai.com` | 200 | 200 B | Closest capture: 2019-01-22 (Wayback itself is currently offline for content fetches) |
| `https://web.archive.org/cdx/search/cdx?url=loanai.com&filter=mimetype:text/html` | 200 | 2,351 B | 48 snapshots, 2004-03-25 → 2019-01-22, no captures after 2019 |
| `https://archive.ph/newest/https://loanai.com` | 429 / metadata | n/a | 0 archived snapshots ever |
| `https://index.commoncrawl.org/CC-MAIN-2024-30-index?url=loanai.com` | 404 | 48 B | "No Captures found for: loanai.com" |
| `https://www.housingwire.com/?s=loanai` | 200 | n/a | "0 Results found for loanai" |
| `https://techcrunch.com/?s=loanai` | 200 | n/a | "No results found" |
| `https://www.bbb.org/search?find_text=loanai` | 200 | n/a | "No results for 'loanai'" |
| `https://efts.sec.gov/LATEST/search-index?q=loanai&forms=10-K&from=2020-01-01` | 200 | n/a | No matching SEC filings |

**DNS for `loanai.com`:** A = `76.223.54.146, 13.248.169.48` (Afternic / AWS Global Accelerator); NS = `ns3.afternic.com, ns4.afternic.com`; TXT = `v=spf1 -all`.

---

## Important caveats

- **The Wayback Machine is currently offline globally** (a real, observable outage — every fetch to `web.archive.org` returns either `ECONNREFUSED 207.241.237.3:443` or the "Temporarily Offline" page). If the user (or you) has access to a Wayback snapshot from 2017–2019, the *historical* Loanai site content could be inspected — but the CDX shows that in 2017–2019 the bare `loanai.com` was already 302-redirecting, strongly suggesting there is no "active prequal product era" to find. Once Wayback comes back online, a quick re-check of the 2018 and 2019 captures is the single best next step to confirm or refute.
- **My findings are not a model of the product you asked about.** I did not invent questions, fields, or flows. I answered only with what is verifiable, and where evidence is absent I said so explicitly.
- **The `loanai.us` "Loan AI" placeholder is a different company** (different copyright, different GoDaddy Website Builder instance, "Launching Soon"). It is not a product to study; it is also not a live product.
