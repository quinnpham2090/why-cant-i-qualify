// @vitest-environment jsdom
/* eslint-disable @typescript-eslint/no-explicit-any */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act } from "react";
import { createRoot, type Root } from "react-dom/client";

/**
 * Click-level wizard walkthrough (Stage 4 QA follow-up).
 *
 * Reproduces the user-reported flow at DOM level: render the REAL
 * Questionnaire in jsdom, walk Goal -> Background -> … -> results clicking
 * buttons like a user would. If any step's Next is a dead end, the failing
 * assertion shows exactly where the wizard stopped.
 */

vi.mock("@/lib/funnel", () => ({ trackEvent: vi.fn() }));

import { Questionnaire } from "@/components/Questionnaire";

let container: HTMLElement;
let root: Root;

async function render(ui: React.ReactElement) {
  await act(async () => {
    root.render(ui);
  });
}

async function flush() {
  await act(async () => {});
}

function click(el: Element) {
  act(() => {
    el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
  });
}

function typeInto(el: HTMLInputElement, value: string) {
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value")!.set!;
  setter.call(el, value);
  act(() => {
    el.dispatchEvent(new Event("input", { bubbles: true }));
  });
}

function buttonByText(text: string): HTMLButtonElement {
  const hits = Array.from(container.querySelectorAll("button")).filter(
    (b) => (b.textContent ?? "").replace(/\s+/g, " ").trim() === text,
  );
  if (hits.length === 0) throw new Error(`button not found: ${text}`);
  return hits[hits.length - 1] as HTMLButtonElement;
}

/** The one visible step fieldset's legend (empty on the results view). */
function stepLegend(): string {
  return container.querySelector("legend")?.textContent ?? "";
}

function allChoiceButtons(): HTMLButtonElement[] {
  return Array.from(container.querySelectorAll("button")).filter((b) =>
    (b.getAttribute("class") ?? "").includes("rounded-lg border"),
  ) as HTMLButtonElement[];
}

function inputById(id: string): HTMLInputElement {
  const el = container.querySelector(`#${id}`) as HTMLInputElement | null;
  if (!el) throw new Error(`input not found: ${id}`);
  return el;
}

beforeEach(() => {
  (globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
  Element.prototype.scrollIntoView = vi.fn(); // jsdom lacks it
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  window.localStorage.clear();
});

describe("wizard walkthrough — every step must be passable", () => {
  it("walks Goal → Background → Income → … → results", async () => {
    await render(<Questionnaire />);

    // ── Step 1: Goal (all defaults are valid; price optional) ──────────────
    expect(stepLegend()).toContain("looking to do");
    click(buttonByText("Next →"));
    await flush();

    // ── Step 2: Programs (all optional; defaults valid) ─────────────────────
    expect(stepLegend()).toContain("Programs you may qualify for");
    click(buttonByText("Next →"));
    await flush();

    // ── Step 3: Background — the user-reported dead end ─────────────────────
    expect(stepLegend()).toContain("Your background");
    for (const b of allChoiceButtons()) click(b); // select every box
    typeInto(inputById("q-years-employed"), "5");
    click(buttonByText("Next →"));
    await flush();

    // ── Step 3: Income ──────────────────────────────────────────────────────
    expect(stepLegend()).toContain("Your income");
    typeInto(inputById("q-income"), "6000");
    click(buttonByText("Next →"));
    await flush();

    // ── Step 4: Co-Borrower (defaults: none) ────────────────────────────────
    expect(stepLegend()).toContain("Anyone applying with you?");
    click(buttonByText("Next →"));
    await flush();

    // ── Step 5: Credit (defaults: doesn't know score, no events) ───────────
    expect(stepLegend()).toContain("credit");
    click(buttonByText("Next →"));
    await flush();

    // ── Step 6: Assets (all optional) ───────────────────────────────────────
    expect(stepLegend()).toContain("assets");
    click(buttonByText("Next →"));
    await flush();

    // ── Step 7: Debt (defaults: no special debts) ───────────────────────────
    expect(stepLegend()).toContain("debt");
    click(buttonByText("See my readiness snapshot"));
    await flush();

    // ── Results ─────────────────────────────────────────────────────────────
    expect(stepLegend()).toBe(""); // no step fieldset anymore
    expect(container.textContent).toContain("Your Estimated Snapshot");
  });

  it("Background: clears the pre-filled years value and still advances (blank = optional)", async () => {
    await render(<Questionnaire />);
    click(buttonByText("Next →"));
    await flush();
    click(buttonByText("Next →")); // through Programs
    await flush();
    expect(stepLegend()).toContain("Your background");

    typeInto(inputById("q-years-employed"), "");
    click(buttonByText("Next →"));
    await flush();

    expect(stepLegend()).toContain("Your income");
  });

  it("Background: rejects a non-numeric years value with a visible error, then recovers", async () => {
    await render(<Questionnaire />);
    click(buttonByText("Next →"));
    await flush();
    click(buttonByText("Next →")); // through Programs
    await flush();

    typeInto(inputById("q-years-employed"), "abc");
    click(buttonByText("Next →"));
    await flush();

    expect(stepLegend()).toContain("Your background"); // stays put
    expect(container.textContent).toMatch(/years in your field as a number/i);

    typeInto(inputById("q-years-employed"), "4");
    click(buttonByText("Next →"));
    await flush();
    expect(stepLegend()).toContain("Your income");
  });
});
