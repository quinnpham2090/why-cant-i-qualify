import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Integration tests for POST /api/lead (hard capture).
 * Stage 4 QA fix 3: submitted state is validated and persisted — no more
 * hardcoded "FL".
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
  sendConsumerConfirmation: vi.fn(async () => ({ sent: true })),
  sendMloNotification: vi.fn(async () => ({ sent: true })),
}));

import { POST } from "@/app/api/lead/route";
import { isSupabaseConfigured } from "@/lib/supabase";
import { resetRateLimits } from "@/lib/rate-limit";
import { findInsertWith, jsonRequest, makeChainDb } from "./helpers";

function mountDb(opts?: Parameters<typeof makeChainDb>[0]) {
  const chain = makeChainDb(opts);
  h.holder.db = chain.db;
  h.holder.calls = chain.calls;
  return chain;
}

const URL = "http://localhost:3000/api/lead";

function leadBody(overrides: Record<string, unknown> = {}): string {
  return JSON.stringify({
    name: "Jane Buyer",
    email: "jane@example.com",
    phone: "3055551234",
    zip: "33101",
    preferredTime: "morning",
    consentGiven: true,
    turnstileToken: "tok",
    compositeTier: "workable",
    engineVersion: "stage2",
    state: "FL",
    inputs: { grossMonthlyIncome: 6000, timelineMonths: 3, creditScoreSelfReported: 720 },
    result: {
      subScores: { income: { score: 90 }, debt: { score: 70 } },
      dtiBackEnd: 0.38,
      eligiblePrograms: ["fha", "conventional"],
      primaryObstacle: { category: "cash", summary: "savings gap" },
    },
    ...overrides,
  });
}

beforeEach(() => {
  resetRateLimits();
  vi.clearAllMocks();
  vi.mocked(isSupabaseConfigured).mockReturnValue(true);
  // Turnstile is not configured in the test env -> verifyTurnstile passes.
  vi.stubEnv("TURNSTILE_SECRET_KEY", "");
  mountDb({ single: { data: { id: "lead-1" }, error: null } });
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("POST /api/lead — happy path", () => {
  it("stores a scored hard capture with consent records and reports emails", async () => {
    const res = await POST(jsonRequest(URL, leadBody()));
    const j = (await res.json()) as {
      ok?: boolean;
      leadId?: string | null;
      emails?: { consumer?: boolean; mlo?: boolean };
    };

    expect(res.status).toBe(200);
    expect(j.ok).toBe(true);
    expect(j.leadId).toBe("lead-1");
    expect(j.emails?.consumer).toBe(true);
    expect(j.emails?.mlo).toBe(true);

    const leadRow = findInsertWith(h.holder.calls, "capture_type");
    expect(leadRow).not.toBeNull();
    expect(leadRow!.capture_type).toBe("hard");
    expect(typeof leadRow!.lead_score).toBe("number");
    expect(leadRow!.lead_score).toBeGreaterThanOrEqual(0);
    expect(typeof leadRow!.lead_tier).toBe("string");

    // Two consent records (TCPA + lead transfer) — MAP recordkeeping.
    const consentInserts = h.holder.calls.filter((c) => c.method === "insert");
    expect(consentInserts.length).toBeGreaterThanOrEqual(2);
  });
});

describe("POST /api/lead — state handling (Stage 4 QA fix 3)", () => {
  it("persists an explicit FL state", async () => {
    const res = await POST(jsonRequest(URL, leadBody({ state: "FL" })));
    expect(res.status).toBe(200);
    expect(findInsertWith(h.holder.calls, "capture_type")!.state).toBe("FL");
  });

  it("uppercases a lowercase state before persisting", async () => {
    const res = await POST(jsonRequest(URL, leadBody({ state: "fl" })));
    expect(res.status).toBe(200);
    expect(findInsertWith(h.holder.calls, "capture_type")!.state).toBe("FL");
  });

  it("defaults to FL when state is omitted (legacy clients)", async () => {
    const body = JSON.parse(leadBody()) as Record<string, unknown>;
    delete body.state;
    const res = await POST(jsonRequest(URL, JSON.stringify(body)));
    expect(res.status).toBe(200);
    expect(findInsertWith(h.holder.calls, "capture_type")!.state).toBe("FL");
  });

  it("rejects a non-served state with 400 instead of relabeling it", async () => {
    const res = await POST(jsonRequest(URL, leadBody({ state: "CA" })));
    expect(res.status).toBe(400);
    const j = (await res.json()) as { error?: string };
    expect(j.error).toMatch(/florida/i);
  });

  it("rejects an over-long state string via the field cap", async () => {
    const res = await POST(jsonRequest(URL, leadBody({ state: "FLORIDA" })));
    expect(res.status).toBe(400);
  });
});

describe("POST /api/lead — validation + rate limit", () => {
  it("rejects malformed JSON with 400", async () => {
    const res = await POST(jsonRequest(URL, "{nope"));
    expect(res.status).toBe(400);
  });

  it("rejects a missing consent with 400", async () => {
    const res = await POST(jsonRequest(URL, leadBody({ consentGiven: false })));
    expect(res.status).toBe(400);
    const j = (await res.json()) as { error?: string };
    expect(j.error).toMatch(/consent/i);
  });

  it("rejects an invalid email with 400", async () => {
    const res = await POST(jsonRequest(URL, leadBody({ email: "bad" })));
    expect(res.status).toBe(400);
  });

  it("rejects an invalid ZIP with 400", async () => {
    const res = await POST(jsonRequest(URL, leadBody({ zip: "ABC" })));
    expect(res.status).toBe(400);
  });

  it("rate-limits the 6th request from one IP with 429 + Retry-After", async () => {
    for (let i = 0; i < 5; i++) {
      const res = await POST(jsonRequest(URL, leadBody(), "11.0.0.9"));
      expect(res.status).toBe(200);
    }
    const sixth = await POST(jsonRequest(URL, leadBody(), "11.0.0.9"));
    expect(sixth.status).toBe(429);
    expect(sixth.headers.get("retry-after")).not.toBeNull();
  });
});
