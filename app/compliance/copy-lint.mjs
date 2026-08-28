#!/usr/bin/env node
/**
 * copy-lint — the forbidden-word gate (EXECUTION-PLAN.md §0 constraint #1).
 *
 * Scans user-facing string literals for MAP-Rule-prohibited claims and exits
 * non-zero on any violation so CI blocks the build.
 *
 * HOW IT AVOIDS FALSE POSITIVES:
 *  - Strips line comments and block comments, then extracts only quoted string
 *    literals, so code identifiers (e.g. USDA_ANNUAL_GUARANTEE_PCT) and code
 *    comments are never flagged.
 *  - Negation-aware: a match is ALLOWED when a negator (not/no/never/…) appears
 *    within a few words before it, so compliant disclaimer language passes:
 *      "It is not a pre-approval." / "No lender guarantees approval."
 *    while positive claims fail:
 *      "You're approved!" / "Get pre-approved in 60 seconds."
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SCAN_DIRS = ["src"];
const EXT = /\.(ts|tsx|js|jsx|mjs)$/;
const SKIP = [/node_modules/, /\.next/, /\.test\.(ts|tsx)$/, /__tests__/, /copy-lint/];

const NEGATORS = new Set([
  "not", "no", "never", "nor", "without", "isn't", "isnt", "aren't", "arent",
  "won't", "wont", "can't", "cant", "cannot", "don't", "dont", "doesn't",
  "doesnt", "didn't", "didnt", "hardly", "nothing", "doesn", "isn", "aren",
]);
const NEGATION_WINDOW = 6;

// Standard SAFE disclosure phrases. A match that falls inside one of these is
// allowed (e.g. "subject to credit approval" explicitly states there is NO
// guarantee, so it is safe). Case-insensitive.
const SAFE_PHRASES = [
  "subject to credit approval",
  "credit approval",
  "not a commitment to lend",
  "no lender guarantees",
  "subject to underwriter review",
];

// Prohibited positive-claim patterns. All are negation-aware except 100%.
const FORBIDDEN = [
  { name: "approved-claim", re: /\b(you'?re|you are|get|been|now|we'?re|they'?re)\s+approved\b/gi, negate: true },
  { name: "approval-language", re: /\bapprov\w*\b/gi, negate: true },
  { name: "guarantee", re: /\bguarante\w*\b/gi, negate: true },
  { name: "100-percent", re: /\b100\s?%/g, negate: false },
  { name: "instant-approval", re: /\binstant\w*\s+approv\w*\b/gi, negate: true },
  { name: "everyone-approved", re: /\beveryone\s+(is\s+)?(approved|qualifies)\b/gi, negate: true },
  { name: "bad-credit-ok", re: /\bbad\s+credit\s+(ok|okay|accepted|welcome|no problem)\b/gi, negate: true },
  { name: "no-credit-check", re: /\bno\s+credit\s+check\b/gi, negate: false },
  { name: "we-get-you-approved", re: /\bwe('ll|\s+will)\s+get\s+you\s+approved\b/gi, negate: true },
];

function* walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (!SKIP.some((s) => s.test(full))) yield* walk(full);
    } else if (EXT.test(full) && !SKIP.some((s) => s.test(full))) {
      yield full;
    }
  }
}

/** Remove block comments, then line comments (preserving "://" in URLs). */
function stripComments(src) {
  let out = src.replace(/\/\*[\s\S]*?\*\//g, "");
  out = out.replace(/(?<!:)\/\/[^\n]*/g, "");
  return out;
}

/** Extract the contents of single/double/template string literals. */
function extractStrings(src) {
  const results = [];
  const re = /"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    // Drop the surrounding quotes; strip ${...} interpolations for template text.
    let body = m[0].slice(1, -1);
    body = body.replace(/\$\{[\s\S]*?\}/g, " ");
    results.push({ text: body, index: m.index });
  }
  return results;
}

function lineOf(text, index) {
  return text.slice(0, index).split("\n").length;
}

function isNegated(strText, matchIndex) {
  const before = strText.slice(Math.max(0, matchIndex - 90), matchIndex);
  const words = before
    .split(/[\s,.;:()]+/)
    .filter(Boolean)
    .map((w) => w.toLowerCase().replace(/[^a-z']/g, ""));
  return words.slice(-NEGATION_WINDOW).some((w) => NEGATORS.has(w));
}

/** True if [matchIndex, matchIndex+len) falls inside a known-safe phrase. */
function overlapsSafePhrase(strText, matchIndex, len) {
  const lower = strText.toLowerCase();
  for (const phrase of SAFE_PHRASES) {
    let start = lower.indexOf(phrase);
    while (start !== -1) {
      const end = start + phrase.length;
      if (matchIndex >= start && matchIndex + len <= end) return true;
      start = lower.indexOf(phrase, start + 1);
    }
  }
  return false;
}

let violations = 0;
const files = [];
for (const dir of SCAN_DIRS) {
  const abs = join(ROOT, dir);
  try {
    for (const f of walk(abs)) files.push(f);
  } catch {
    /* dir missing */
  }
}

for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const rel = relative(ROOT, file);
  const noComments = stripComments(raw);
  for (const { text } of extractStrings(noComments)) {
    for (const { name, re, negate } of FORBIDDEN) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(text)) !== null) {
        const negated = negate && isNegated(text, m.index);
        const safe = overlapsSafePhrase(text, m.index, m[0].length);
        if (!negated && !safe) {
          const line = lineOf(raw, raw.indexOf(m[0]));
          console.error(`✗ ${rel}:${line}  [${name}]  "${m[0]}"  in: "${text.trim().slice(0, 90)}"`);
          violations++;
        }
        if (m.index === re.lastIndex) re.lastIndex++;
      }
    }
  }
}

if (violations > 0) {
  console.error(`\ncopy-lint: ${violations} prohibited-claim violation(s). Fix before building.`);
  process.exit(1);
} else {
  console.log(`copy-lint: OK — scanned ${files.length} file(s), no prohibited claims.`);
}
