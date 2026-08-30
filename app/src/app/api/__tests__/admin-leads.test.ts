import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * Integration tests for /api/admin/leads (Stage 4 QA fixes 2 + 4):
 *  - fix 2: the proxy no longer blocks X-API-Key; BOTH auth styles pass here,
 *    enforced through the shared src/lib/admin-auth.ts helpers.
 *  - fix 4: PATCH appends a structured entry to leads.activity_log.
 */

const h = vi.hoisted(() => ({
  holder: { db: null as unknown, calls: [] as { method: string; args: unknown[] }[] },
}));

vi.mock("@/lib/supabase", () => ({
  isSupabaseConfigured: vi.fn(() => true),
  getSupabaseServer: vi.fn(() => h.holder.db),
}));

import { GET, PATCH } from "@/app/api/admin/leads/route";
import { isSupabaseConfigured } from "@/lib/supabase";
import { makeChainDb } from "./helpers";

const KEY = "test-admin-key";
const URL = "http://localhost:3000/api/admin/leads";
const LEAD_ID = "3f8e9f5e-1c2b-4a3d-8e5f-0a9b8c7d6e5f"; // 36 chars, UUID-shaped

function mountDb(opts?: Parameters<typeof makeChainDb>[0]) {
  const chain = makeChainDb(opts);
  h.holder.db = chain.db;
  h.holder.calls = chain.calls;
  return chain;
}

function basicHeader(user = "ops"): string {
  return `Basic ${Buffer.from(`${user}:${KEY}`).toString("base64")}`;
}

beforeEach(() => {
  vi.stubEnv("NEXT_ADMIN_API_KEY", KEY);
  vi.clearAllMocks();
  vi.mocked(isSupabaseConfigured).mockReturnValue(true);
  mountDb({ base: { data: [], error: null } });
});

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("GET /api/admin/leads — auth (Stage 4 QA fix 2)", () => {
  it("accepts a valid X-API-Key header", async () => {
    const res = await GET(new Request(URL, { headers: { "x-api-key": KEY } }));
    expect(res.status).toBe(200);
  });

  it("accepts valid Basic credentials", async () => {
    const res = await GET(new Request(URL, { headers: { authorization: basicHeader() } }));
    expect(res.status).toBe(200);
  });

  it("rejects a wrong X-API-Key with 401", async () => {
    const res = await GET(new Request(URL, { headers: { "x-api-key": "wrong-key" } }));
    expect(res.status).toBe(401);
  });

  it("rejects a wrong Basic password with 401", async () => {
    const bad = `Basic ${Buffer.from("ops:not-the-key").toString("base64")}`;
    const res = await GET(new Request(URL, { headers: { authorization: bad } }));
    expect(res.status).toBe(401);
  });

  it("rejects an unauthenticated request with 401", async () => {
    const res = await GET(new Request(URL));
    expect(res.status).toBe(401);
  });

  it("filters by tier when the query param is valid", async () => {
    await GET(new Request(`${URL}?tier=hot`, { headers: { "x-api-key": KEY } }));
    const eq = h.holder.calls.find((c) => c.method === "eq");
    expect(eq?.args).toEqual(["lead_tier", "hot"]);
  });
});

describe("PATCH /api/admin/leads — updates + audit log (Stage 4 QA fix 4)", () => {
  it("appends a structured entry to activity_log on a status change", async () => {
    const chain = mountDb({
      single: {
        data: { status: "new", next_action: null, activity_log: ['{"prior":true}'] },
        error: null,
      },
    });
    const res = await PATCH(
      new Request(URL, {
        method: "PATCH",
        headers: { "content-type": "application/json", "x-api-key": KEY },
        body: JSON.stringify({ id: LEAD_ID, status: "contacted" }),
      }),
    );
    const j = (await res.json()) as { ok?: boolean };
    expect(res.status).toBe(200);
    expect(j.ok).toBe(true);

    const update = chain.calls.find((c) => c.method === "update");
    expect(update).toBeDefined();
    const row = update!.args[0] as Record<string, unknown>;
    expect(row.status).toBe("contacted");
    expect(row.last_contacted_at).toBeTypeOf("string");

    const log = row.activity_log as string[];
    expect(log).toHaveLength(2); // prior entry + the new one
    const parsed = JSON.parse(log[1]) as Record<string, unknown>;
    expect(parsed.field).toBe("status");
    expect(parsed.from).toBe("new");
    expect(parsed.to).toBe("contacted");
    expect(parsed.at).toBeTypeOf("string");
  });

  it("updates next_action without touching status", async () => {
    const chain = mountDb({
      single: { data: { status: "new", next_action: null, activity_log: [] }, error: null },
    });
    const res = await PATCH(
      new Request(URL, {
        method: "PATCH",
        headers: { "content-type": "application/json", "x-api-key": KEY },
        body: JSON.stringify({ id: LEAD_ID, nextAction: "Call Tuesday" }),
      }),
    );
    expect(res.status).toBe(200);
    const row = chain.calls.find((c) => c.method === "update")!.args[0] as Record<string, unknown>;
    expect(row.next_action).toBe("Call Tuesday");
    expect(row.status).toBeUndefined();
  });

  it("rejects a malformed lead id with 400", async () => {
    const res = await PATCH(
      new Request(URL, {
        method: "PATCH",
        headers: { "content-type": "application/json", "x-api-key": KEY },
        body: JSON.stringify({ id: "not-a-uuid", status: "contacted" }),
      }),
    );
    expect(res.status).toBe(400);
  });

  it("rejects an unknown status value with 400", async () => {
    const res = await PATCH(
      new Request(URL, {
        method: "PATCH",
        headers: { "content-type": "application/json", "x-api-key": KEY },
        body: JSON.stringify({ id: LEAD_ID, status: "promote_to_prince" }),
      }),
    );
    expect(res.status).toBe(400);
  });

  it("requires authentication for PATCH too", async () => {
    const res = await PATCH(
      new Request(URL, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: LEAD_ID, status: "contacted" }),
      }),
    );
    expect(res.status).toBe(401);
  });
});
