import type { Metadata } from "next";
import { getSupabaseServer, isSupabaseConfigured } from "@/lib/supabase";
import { StatusSelect } from "@/components/admin/StatusSelect";

export const metadata: Metadata = {
  title: "Lead Dashboard",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

/**
 * Operator lead dashboard (Stage 2 Phase 4). Access is gated by the proxy's
 * Basic-auth challenge (src/proxy.ts) — by the time this renders, the admin
 * key has been validated. Data is read directly from Supabase (service role,
 * server component); status updates go through /api/admin/leads from the
 * client StatusSelect component (it owns an onChange handler, so it cannot
 * live in this Server Component file — Stage 4 QA fix 1).
 */

interface LeadRow {
  id: string;
  created_at: string;
  name: string | null;
  email: string | null;
  phone: string | null;
  zip: string | null;
  preferred_time: string | null;
  status: string | null;
  next_action: string | null;
  last_contacted_at: string | null;
  capture_type: string | null;
  lead_score: number | null;
  lead_tier: string | null;
  composite_tier: string | null;
}

const TIER_BADGE: Record<string, string> = {
  hot: "bg-[#fde8e8] text-[#8c1d18] border-[#f5c2c0]",
  warm: "bg-[#fef3c7] text-[#78350f] border-[#fde68a]",
  nurture: "bg-accent-soft text-ink border-rule",
  future_buyer: "bg-paper-2 text-ink-2 border-rule",
  low_intent: "bg-paper-2 text-ink-3 border-rule",
};

const fmtDate = (iso: string | null): string =>
  iso
    ? new Date(iso).toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : "—";

function ScorePill({ score, tier }: { score: number | null; tier: string | null }) {
  const badge = (tier && TIER_BADGE[tier]) || "bg-paper-2 text-ink-3 border-rule";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${badge}`}>
      {tier ? tier.replace("_", " ") : "unscored"}
      {score != null && <span className="tnum font-mono">{score}</span>}
    </span>
  );
}

export default async function AdminLeadsPage() {
  let leads: LeadRow[] | null = null;
  let error: string | null = null;

  if (isSupabaseConfigured()) {
    const db = getSupabaseServer()!;
    const { data, error: dbError } = await db
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);
    if (dbError) error = dbError.message;
    else leads = (data ?? []) as unknown as LeadRow[];
  } else {
    error = "Supabase is not configured on this deployment.";
  }

  const counts = (leads ?? []).reduce<Record<string, number>>((acc, l) => {
    const t = l.lead_tier ?? "unscored";
    acc[t] = (acc[t] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="font-display text-3xl text-ink">Lead Dashboard</h1>
      <p className="mt-1 text-sm text-ink-2">
        Latest {leads?.length ?? 0} leads. Tier and score are computed at capture
        time (Part 8 §8.2). Status changes save immediately.
      </p>

      {error && (
        <p role="alert" className="mt-6 rounded-lg border border-rule bg-paper-2 p-4 text-sm text-ink">
          {error}
        </p>
      )}

      {leads && (
        <>
          <div className="mt-6 flex flex-wrap gap-2">
            {["hot", "warm", "nurture", "future_buyer", "low_intent", "unscored"].map((t) => (
              <span
                key={t}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${TIER_BADGE[t] ?? "bg-paper-2 text-ink-3 border-rule"}`}
              >
                {t.replace("_", " ")}: {counts[t] ?? 0}
              </span>
            ))}
          </div>

          <div className="mt-6 overflow-x-auto rounded-xl border border-rule bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-rule text-left text-xs uppercase tracking-wide text-ink-3">
                  <th className="px-4 py-3">Received</th>
                  <th className="px-4 py-3">Lead</th>
                  <th className="px-4 py-3">Tier / Score</th>
                  <th className="px-4 py-3">Contact</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Next action</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-4 py-8 text-center text-ink-3">
                      No leads yet.
                    </td>
                  </tr>
                )}
                {leads.map((l) => (
                  <tr key={l.id} className="border-b border-rule last:border-0 align-top">
                    <td className="px-4 py-3 whitespace-nowrap text-ink-2 tnum text-xs">
                      {fmtDate(l.created_at)}
                      <div className="text-[11px] text-ink-3">{l.capture_type ?? "hard"}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-medium text-ink">{l.name ?? "—"}</div>
                      <div className="text-xs text-ink-2">
                        {l.composite_tier ? `engine tier: ${l.composite_tier}` : "no diagnostic"}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <ScorePill score={l.lead_score} tier={l.lead_tier} />
                    </td>
                    <td className="px-4 py-3 text-xs">
                      <div className="text-ink">{l.email ?? "—"}</div>
                      <div className="text-ink-2">{l.phone ?? "no phone"}</div>
                      <div className="text-ink-3">
                        ZIP {l.zip ?? "—"}
                        {l.preferred_time ? ` · prefers ${l.preferred_time}` : ""}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <StatusSelect leadId={l.id} current={l.status} />
                      <div className="mt-1 text-[11px] text-ink-3">
                        {l.last_contacted_at ? `touched ${fmtDate(l.last_contacted_at)}` : "not contacted"}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-xs text-ink-2">{l.next_action ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </main>
  );
}
