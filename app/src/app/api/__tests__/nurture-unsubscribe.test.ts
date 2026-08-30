import { createHmac } from "node:crypto";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Integration tests for GET /api/nurture/unsubscribe (CAN-SPAM opt-out).
 * Covers the HMAC token path, the immediate status flip, and failure modes.
 */

const h = vi.hoisted(() => ({
  holder: { db: null as unknown, calls: [] as { method: string; args: unknown[] }[] },
}));

vi.mock("@/lib/supabase", () => ({
  isSupabaseConfigured: vi.fn(() => true),
  getSupabaseServer: vi.fn(() => h.holder.db),
}));

import { GET } from "@/app/api/nurture/unsubscribe/route";
import { makeChainDb } from "./helpers";

function mountDb(opts?: Parameters<typeof makeChainDb>[0]) {
  const chain = makeChainDb(opts);
  h.holder.db = chain.db;
  h.holder.calls = chain.calls;
  return chain;
}

const SECRET = "test-secret";
const EMAIL = "nurture@example.com";

function tokenFor(email: string): string {
  return createHmac("sha256", SECRET).update(email.toLowerCase()).digest("hex");
}

function getUrl(email: string, token: string): string {
  return `http://localhost:3000/api/nurture/unsubscribe?e=${encodeURIComponent(email)}&t=${token}`;
}

beforeEach(() => {
  vi.stubEnv("NURTURE_CRON_SECRET", SECRET);
  mountDb();
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("GET /api/nurture/unsubscribe", () => {
  it("flips the lead to unsubscribed and renders a confirmation page", async () => {
    const res = await GET(new Request(getUrl(EMAIL, tokenFor(EMAIL))));
    expect(res.status).toBe(200);

    const html = await res.text();
    expect(html).toMatch(/unsubscribed/i);
    expect(res.headers.get("content-type")).toContain("text/html");

    const update = h.holder.calls.find((c) => c.method === "update");
    expect(update).toBeDefined();
    expect((update!.args[0] as Record<string, unknown>).nurture_status).toBe("unsubscribed");
    expect(h.holder.calls.find((c) => c.method === "eq")?.args).toEqual(["email", EMAIL]);
  });

  it("rejects an invalid token with 400 and touches nothing", async () => {
    const res = await GET(new Request(getUrl(EMAIL, "deadbeef")));
    expect(res.status).toBe(400);
    expect(h.holder.calls.find((c) => c.method === "update")).toBeUndefined();
  });

  it("rejects a token minted for a different email", async () => {
    const other = tokenFor("someone-else@example.com");
    const res = await GET(new Request(getUrl(EMAIL, other)));
    expect(res.status).toBe(400);
  });

  it("rejects a tampered email (token is bound to the exact address)", async () => {
    const res = await GET(
      new Request(getUrl("nurture+tampered@example.com", tokenFor(EMAIL))),
    );
    expect(res.status).toBe(400);
  });

  it("fails closed when the cron secret is not configured", async () => {
    vi.stubEnv("NURTURE_CRON_SECRET", "");
    const res = await GET(new Request(getUrl(EMAIL, tokenFor(EMAIL))));
    expect(res.status).toBe(400);
  });
});
