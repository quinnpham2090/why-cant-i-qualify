# Security Setup — "Why Can't I Qualify?"

Operational checklist for the security controls shipped in Stage 2 Phases 1.5–4.
No secrets belong in this repository; everything here is configured in the
Vercel dashboard and the respective vendor consoles.

## 1. Environment variables (Vercel → Project → Settings → Environment Variables)

Copy every variable from `.env.example` into Vercel for **Production** (and
**Preview** if you want preview deployments to write to a staging Supabase
project — recommended). Values currently only in the local `.env.local` must be
re-entered in Vercel; local files are never deployed.

| Variable | Where it comes from | Notes |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API | Anon key is public by design |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API | **Server-only.** Never expose, never rotate casually — rotating it logs out nothing but invalidates the running deployment until updated |
| `RESEND_API_KEY` | resend.com/api-keys | — |
| `EMAIL_FROM`, `EMAIL_TO` | — | `EMAIL_FROM` must be on a verified Resend domain |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Cloudflare dashboard → Turnstile | **Required before public launch** — see §2 |
| `NEXT_PUBLIC_CAL_LINK` | Cal.com event page | — |
| `NEXT_PUBLIC_SITE_URL` | — | Set the canonical production domain; sitemap/robots/OG fall back to the Vercel URL otherwise |
| `NEXT_ADMIN_API_KEY` | Generate: `node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"` | Guards `/api/admin/*` and the dashboard; rotate quarterly |
| `NURTURE_CRON_SECRET` | Same generator | Bearer token for `/api/nurture/send` |
| `NEXT_PUBLIC_TESTIMONIALS_ENABLED` | — | Keep `false` until the attorney gate clears testimonials |

## 2. Cloudflare Turnstile (anti-spam)

The lead route's Turnstile verification is a no-op **only while
`TURNSTILE_SECRET_KEY` is unset**. Before launch:

1. Create a Turnstile widget (Managed mode) for the production domain.
2. Put the site key in `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and the secret in
   `TURNSTILE_SECRET_KEY` (Vercel + local `.env.local`).
3. Verify: the lead form renders the widget; a lead submission without
   completing it returns an error from `/api/lead`.
4. Until keys are configured, the in-memory rate limit (5/min/IP) is the only
   bot defense — do not announce the URL publicly before enabling Turnstile.

## 3. Supabase hardening

1. **Apply `supabase/migrations/001-drop-anon-policies.sql`** (Dashboard → SQL
   Editor). This removes the anon INSERT policies so the public anon key can
   no longer bypass the app's rate limiting and consent enforcement by writing
   to the REST endpoint directly. RLS stays enabled; the app writes via the
   service role only.
2. Verify: `select * from pg_policies where policyname like 'anon_insert%';`
   must return zero rows, and a lead submitted through the site must still
   appear in `leads`.
3. Backups: enable daily backups (Supabase Pro) or set a weekly manual dump;
   MAP Rule 12 CFR 1014.5 requires ≥ 24-month retention of consent records.

## 4. Security headers

`src/proxy.ts` sets `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy`, and `Permissions-Policy` on all non-static routes. Next.js
16 renamed the middleware convention to `proxy` — do not "fix" the file name
back to `middleware.ts`. Verify after deploy:

```bash
curl -sI https://YOUR-DOMAIN/check | grep -iE "x-frame|x-content|referrer|permissions"
```

HSTS is added automatically by the Vercel edge. A nonce-based CSP is planned
V2 hardening (needs next.config header plumbing with nonces).

## 5. Admin dashboard access (Phase 4)

`/admin/leads` (server components) and `/api/admin/*` check `NEXT_ADMIN_API_KEY`.
The dashboard does not use cookies or sessions: treat the key as a bearer
secret, share it only with the operator/MLO, rotate quarterly, and change it
immediately if it appears in any log or URL bar history.

## 6. Logging & PII

Server route failures log to stderr (Vercel function logs) with **lead IDs
only** — never names, emails, or phone numbers. When adding logs, follow the
same rule; PII belongs in the database, not in log aggregation.
