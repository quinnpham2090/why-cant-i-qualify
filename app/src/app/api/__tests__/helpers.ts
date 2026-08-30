import { vi } from "vitest";

/**
 * Shared test doubles for the API route integration suites.
 *
 * The Supabase client is used as a fluent chain that terminates in either
 * `.single()`, `.maybeSingle()`, or a bare await (PostgREST builder is
 * thenable). makeChainDb mimics exactly that shape and records every call so
 * tests can assert on the row objects passed to insert/update.
 */

export type DbResult = { data: unknown; error: unknown } | null;

export interface ChainCall {
  method: string;
  args: unknown[];
}

export interface ChainDb {
  db: Record<string, unknown>;
  calls: ChainCall[];
}

export function makeChainDb(
  opts: { single?: DbResult; maybeSingle?: DbResult; base?: DbResult } = {},
): ChainDb {
  const results = {
    single: opts.single ?? { data: null, error: null },
    maybeSingle: opts.maybeSingle ?? { data: null, error: null },
    base: opts.base ?? { data: null, error: null },
  };
  const calls: ChainCall[] = [];
  const proxy: Record<string, unknown> = {};
  const methods = ["from", "select", "insert", "update", "eq", "order", "limit", "in", "neq"];
  for (const m of methods) {
    proxy[m] = vi.fn((...args: unknown[]) => {
      calls.push({ method: m, args });
      return proxy;
    });
  }
  proxy.single = vi.fn(() => {
    calls.push({ method: "single", args: [] });
    return Promise.resolve(results.single);
  });
  proxy.maybeSingle = vi.fn(() => {
    calls.push({ method: "maybeSingle", args: [] });
    return Promise.resolve(results.maybeSingle);
  });
  proxy.then = (
    resolve?: (value: unknown) => unknown,
    reject?: (reason: unknown) => unknown,
  ) => Promise.resolve(results.base).then(resolve, reject);
  return { db: proxy, calls };
}

/** First insert whose row object carries the given key (e.g. capture_type). */
export function findInsertWith(calls: ChainCall[], key: string): Record<string, unknown> | null {
  for (const c of calls) {
    if (c.method !== "insert") continue;
    const row = c.args[0];
    if (row != null && typeof row === "object" && key in (row as object)) {
      return row as Record<string, unknown>;
    }
  }
  return null;
}

/** JSON POST request against localhost with a spoofable client IP header. */
export function jsonRequest(url: string, body: string, ip = "10.0.0.1"): Request {
  return new Request(url, {
    method: "POST",
    headers: { "content-type": "application/json", "x-forwarded-for": ip },
    body,
  });
}
