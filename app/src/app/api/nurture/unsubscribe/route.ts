import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase";

export const runtime = "nodejs";

/**
 * Nurture unsubscribe (Stage 2 Phase 5, CAN-SPAM requirement). GET-only link
 * embedded in every nurture email: /api/nurture/unsubscribe?e=<email>&t=<hmac>
 * where t = HMAC-SHA256(lowercase email, NURTURE_CRON_SECRET). Renders a plain
 * confirmation page (no HTML email client surprises) and flips the lead to
 * nurture_status='unsubscribed' immediately.
 */

function tokenOk(email: string, token: string): boolean {
  const secret = process.env.NURTURE_CRON_SECRET;
  if (!secret) return false;
  const expected = createHmac("sha256", secret).update(email.toLowerCase()).digest("hex");
  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(token.toLowerCase(), "utf8");
  if (a.length !== b.length) {
    timingSafeEqual(a, a);
    return false;
  }
  return timingSafeEqual(a, b);
}

function page(title: string, body: string): string {
  return `<!doctype html>
<html lang="en">
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${title}</title>
<style>body{font-family:system-ui,sans-serif;max-width:32rem;margin:4rem auto;padding:0 1rem;color:#1a1a1a;line-height:1.6}h1{font-size:1.5rem}</style>
</head>
<body><h1>${title}</h1><p>${body}</p></body></html>`;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const email = (url.searchParams.get("e") ?? "").trim().toLowerCase();
  const token = url.searchParams.get("t") ?? "";

  if (!email || !token || !tokenOk(email, token)) {
    return new NextResponse(
      page(
        "Link no longer valid",
        "This unsubscribe link is missing or invalid. Reply to any email and we will remove you manually.",
      ),
      { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } },
    );
  }

  if (isSupabaseConfigured()) {
    const db = getSupabaseServer()!;
    const { error } = await db
      .from("leads")
      .update({ nurture_status: "unsubscribed", unsubscribed_at: new Date().toISOString() })
      .eq("email", email);
    if (error) {
      console.error("[nurture/unsubscribe] update failed", { error: error.message });
      return new NextResponse(
        page(
          "Something went wrong",
          "We could not process the unsubscribe automatically. Reply to any email and we will remove you manually.",
        ),
        { status: 500, headers: { "Content-Type": "text/html; charset=utf-8" } },
      );
    }
  }

  return new NextResponse(
    page(
      "You're unsubscribed",
      "You will not receive further education emails from us. This does not affect any request you made to be contacted about a loan — that is a separate consent.",
    ),
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}
