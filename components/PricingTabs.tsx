"use client";

import { useState } from "react";
import { billingPeriods, connectionOptions, getPlan, type BillingPeriod } from "@/lib/pricing";
import { PricingCard } from "./PricingCard";

export function PricingTabs({ compact = false }: { compact?: boolean }) {
  const [period, setPeriod] = useState<BillingPeriod>(compact ? "annual" : "monthly");
  const [connections, setConnections] = useState<number>(1);
  const plan = getPlan(period, connections);
  return <div>
    <div role="group" aria-label="Billing period" className="mx-auto flex max-w-full gap-1 overflow-x-auto rounded-2xl border border-zinc-200 bg-zinc-100 p-1.5 sm:max-w-fit">
      {billingPeriods.map((item) => <button type="button" onClick={() => setPeriod(item.id)} aria-pressed={period === item.id} key={item.id} className={`min-h-11 shrink-0 rounded-xl px-3 py-2 text-xs font-bold transition sm:px-4 ${period === item.id ? "bg-white text-[var(--primary-dark)] shadow-sm" : "text-zinc-500 hover:text-zinc-950"}`}><span className="block">{item.label}</span><span className="hidden text-[10px] font-medium opacity-70 md:block">{item.detail}</span></button>)}
    </div>
    {!compact && <div className="mt-7"><p id="connection-label" className="text-center text-sm font-bold text-zinc-700">Select simultaneous connections</p><div role="group" aria-labelledby="connection-label" className="mt-3 flex flex-wrap justify-center gap-2">{connectionOptions.map((count) => <button key={count} type="button" onClick={() => setConnections(count)} aria-pressed={connections === count} className={`grid h-11 w-11 place-items-center rounded-xl border text-sm font-black transition ${connections === count ? "border-[var(--primary-action)] bg-[var(--primary-action)] text-white" : "border-zinc-200 bg-white text-zinc-700 hover:border-red-300"}`}>{count}</button>)}</div></div>}
    <div aria-live="polite" className={`mt-9 grid gap-5 ${compact ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
      {compact ? [1, 2, 3].map((count) => { const item = getPlan(period, count); return <PricingCard key={count} period={period} connections={count} {...item} />; }) : <PricingCard period={period} connections={connections} {...plan} />}
    </div>
  </div>;
}
