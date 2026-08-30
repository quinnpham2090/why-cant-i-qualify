import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Integration tests for POST /api/capture-email (soft capture).
 * Stage 4 QA fixes 5 + 6: compact tier passthrough + per-field caps.
 *
 * Supabase is mocked with a chainable builder; the Resend-backed email
 * function is mocked at the module boundary. Rate limiting is reset per test.
 */

const h = vi.hoisted(() => ({
  holder: { db: null as unknown, calls: [] as { method: string; args: unknown[] }[] },
}));

vi.mock("@/lib/supabase", () => ({
  isSupabaseConfigured: vi.fn(() => true),
  getSupabaseServer: vi.fn(() => h.holder.db),
}));

vi.mock("@/lib/email", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@/lib/email")>()),
  sendResultsCopyEmail: vi.fn(async () => ({ sent: true })),
}));

import { POST } from "@/app/api/capture-email/route";
import { isSupabaseConfigured } from "@/lib/supabase";
import { resetRateLimits } from "@/lib/rate-limit";
import { sendResultsCopyEmail } from "@/lib/email";
import { findInsertWith, jsonRequest, makeChainDb } from "./helpers";

function mountDb(opts?: Parameters<typeof makeChainDb>[0]) {
  const chain = makeChainDb(opts);
  h.holder.db = chain.db;
  h.holder.calls = chain.calls;
  return chain;
}

const URL = "http://localhost:3000/api/capture-email";
const VALID_BODY = JSON.stringify({
  name: "Jane Buyer",
  email: "jane@example.com",
  consentGiven: true,
  summary: { tier: "workable", pitiMid: 2100, priceLow: 300000, priceHigh: 340000 },
});

beforeEach(() => {
  resetRateLimits();
  vi.clearAllMocks();
  vi.mocked(isSupabaseConfigured).mockReturnValue(true);
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("POST /api/capture-email — validation", () => {
  it("rejects malformed JSON with 400", async () => {
    const res = await POST(jsonRequest(URL, "{not json"));
    expect(res.status).toBe(400);
  });

  it("rejects a missing name with 400", async () => {
    const res = await POST(
      jsonRequest(URL, JSON.stringify({ email: "jane@example.com", consentGiven: true })),
    );
    expect(res.status).toBe(400);
    const j = (await res.json()) as { error?: string };
    expect(j.error).toMatch(/name/i);
  });

  it("rejects an invalid email with 400", async () => {
    const res = await POST(
      jsonRequest(URL, JSON.stringify({ name: "Jane", email: "nope", consentGiven: true })),
    );
    expect(res.status).toBe(400);
  });

  it("rejects a missing consent with 400", async () => {
    const res = await POST(
      jsonRequest(URL, JSON.stringify({ name: "Jane", email: "jane@example.com" })),
    );
    expect(res.status).toBe(400);
    const j = (await res.json()) as { error?: string };
    expect(j.error).toMatch(/consent/i);
  });

  it("rejects an oversized body with 413 (Stage 4 QA fix 6)", async () => {
    const big = JSON.stringify({ name: `{"pad":"${"a".repeat(4200)}"}` });
    const res = await POST(jsonRequest(URL, big));
    expect(res.status).toBe(413);
  });

  it("rejects a name over the 60-char field cap (Stage 4 QA fix 6)", async () => {
    const res = await POST(
      jsonRequest(URL, JSON.stringify({ name: "a".repeat(61), email: "jane@example.com", consentGiven: true })),
    );
    expect(res.status).toBe(400);
    const j = (await res.json()) as { error?: string };
    expect(j.error).toMatch(/name is too long/i);
  });

  it("rejects an email over the 254-char field cap (Stage 4 QA fix 6)", async () => {
    const res = await POST(
      jsonRequest(
        URL,
        JSON.stringify({ name: "Jane", email: `${"a".repeat(250)}@x.com`, consentGiven: true }),
      ),
    );
    expect(res.status).toBe(400);
    const j = (await res.json()) as { error?: string };
    expect(j.error).toMatch(/email is too long/i);
  });
});

describe("POST /api/capture-email — persistence + email", () => {
  it("creates a soft lead, records consent, and sends the results email", async () => {
    const chain = mountDb({
      single: { data: { id: "lead-1" }, error: null }, // fresh insert returns the id
    });
    const res = await POST(jsonRequest(URL, VALID_BODY));
    const j = (await res.json()) as { ok?: boolean; leadId?: string | null; emailSent?: boolean };

    expect(res.status).toBe(200);
    expect(j.ok).toBe(true);
    expect(j.leadId).toBe("lead-1");
    expect(j.emailSent).toBe(true);

    const leadRow = findInsertWith(chain.calls, "capture_type");
    expect(leadRow).not.toBeNull();
    expect(leadRow!.capture_type).toBe("soft");
    // Stage 4 QA fix 5: the machine tier passes validation untouched.
    expect(leadRow!.composite_tier).toBe("workable");

    const consentRow = chain.calls.find(
      (c) =>
        c.method === "insert" &&
        c.args[0] != null &&
        typeof c.args[0] === "object" &&
        "consent_type" in (c.args[0] as object),
    );
    expect(consentRow).toBeDefined();
    expect((consentRow!.args[0] as Record<string, unknown>).consent_type).toBe(
      "soft_capture_email",
    );

    expect(sendResultsCopyEmail).toHaveBeenCalledTimes(1);
  });

  it("never downgrades an existing hard capture during dedupe", async () => {
    const chain = mountDb({
      maybeSingle: { data: { id: "existing-1", capture_type: "hard" }, error: null },
    });
    const res = await POST(jsonRequest(URL, VALID_BODY));
    expect(res.status).toBe(200);

    // The only update in the route is the capture_type refresh — it must not
    // fire for a hard lead, and no second lead row may be created.
    expect(chain.calls.find((c) => c.method === "update")).toBeUndefined();
    expect(findInsertWith(chain.calls, "capture_type")).toBeNull();
  });

  it("refreshes an existing soft lead instead of duplicating it", async () => {
    const chain = mountDb({
      maybeSingle: { data: { id: "existing-2", capture_type: null }, error: null },
    });
    const res = await POST(jsonRequest(URL, VALID_BODY));
    const j = (await res.json()) as { leadId?: string | null };

    expect(res.status).toBe(200);
    expect(j.leadId).toBe("existing-2");
    expect(chain.calls.find((c) => c.method === "update")).toBeDefined();
    expect(findInsertWith(chain.calls, "capture_type")).toBeNull();
  });

  it("still sends the email when Supabase is unavailable (graceful degrade)", async () => {
    vi.mocked(isSupabaseConfigured).mockReturnValue(false);
    mountDb();

    const res = await POST(jsonRequest(URL, VALID_BODY));
    const j = (await res.json()) as { ok?: boolean; stored?: boolean; emailSent?: boolean };

    expect(res.status).toBe(200);
    expect(j.ok).toBe(true);
    expect(j.stored).toBe(false);
    expect(j.emailSent).toBe(true);
    expect(sendResultsCopyEmail).toHaveBeenCalledTimes(1);
  });
});
