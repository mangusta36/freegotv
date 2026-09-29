"use client";

import { Check, MonitorSmartphone, Sparkles } from "lucide-react";
import { useState } from "react";
import { billingPeriods, connectionOptions, getPlan, planFeatures, type BillingPeriod } from "@/lib/pricing";
import { brandedHeading } from "@/lib/headings";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/site-config";

const orderedPeriods: BillingPeriod[] = ["trial", "monthly", "quarterly", "semiannual", "annual"];

type HomePricingProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

function PricingAction({ period }: { period: BillingPeriod }) {
  const href = period === "trial" ? "/free-trial" : getWhatsAppUrl(whatsappMessages.pricing);
  return (
    <a
      href={href}
      className="mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[var(--primary-action)] px-4 py-3 text-sm font-black text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-[var(--primary-action-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
    >
      {period === "trial" ? "Start free trial" : "Choose plan"}
      <span aria-hidden="true">→</span>
    </a>
  );
}

export function HomePricing({
  eyebrow = "PRICING / DEVICE SELECTION",
  title = "Choose the Plan That Fits You",
  description = "Select how many devices you want to use, then compare the existing FreeGoTV subscription options for that setup.",
}: HomePricingProps) {
  const [connections, setConnections] = useState<number>(1);

  return (
    <section id="pricing" className="relative isolate overflow-hidden bg-[#070707] pt-8 pb-16 text-white sm:pt-10 sm:pb-20 lg:pb-28">
      <div className="hero-noise absolute inset-0 opacity-[0.1]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute left-1/2 top-0 h-64 w-[min(58rem,90vw)] -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
      <div className="container-page relative min-w-0">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.055] px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-red-100">
            <MonitorSmartphone className="h-3.5 w-3.5 text-red-300" />
            {eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">{brandedHeading(title)}</h2>
          <p className="mx-auto mt-4 max-w-[21.5rem] text-base leading-7 text-zinc-300 [overflow-wrap:anywhere] sm:max-w-2xl sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-[1.5rem] border border-white/10 bg-white/[.045] p-4 shadow-[0_24px_70px_rgb(0_0_0_/_0.24)] sm:p-5">
          <p id="home-device-label" className="text-center text-sm font-black text-white">Choose your devices</p>
          <div role="group" aria-labelledby="home-device-label" className="mt-4 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center">
            {connectionOptions.map((count) => {
              const selected = connections === count;
              return (
                <button
                  key={count}
                  type="button"
                  onClick={() => setConnections(count)}
                  aria-pressed={selected}
                  className={`min-h-11 rounded-xl border px-3 py-2 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 sm:px-4 ${
                    selected
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white shadow-[0_14px_35px_rgb(255_23_68_/_0.28)]"
                      : "border-white/10 bg-zinc-950/70 text-zinc-300 hover:border-red-300/60 hover:text-white"
                  }`}
                >
                  <span>{count} {count === 1 ? "Device" : "Devices"}</span>
                  {selected && <span className="sr-only"> selected</span>}
                </button>
              );
            })}
          </div>
        </div>

        <div aria-live="polite" className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {orderedPeriods.map((period) => {
            const periodMeta = billingPeriods.find((item) => item.id === period);
            const plan = getPlan(period, connections);
            const recommended = plan.recommended;
            return (
              <article
                key={period}
                className={`relative flex flex-col rounded-[1.35rem] border p-4 transition duration-200 hover:-translate-y-1 ${
                  recommended
                    ? "border-red-400/50 bg-[linear-gradient(180deg,rgb(255_23_68_/_0.16),rgb(255_255_255_/_0.055))] shadow-[0_22px_60px_rgb(255_23_68_/_0.12)]"
                    : "border-white/10 bg-white/[.055] shadow-[0_18px_46px_rgb(0_0_0_/_0.2)]"
                }`}
              >
                {recommended && (
                  <span className="absolute -top-3 left-5 inline-flex items-center gap-1 rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-bold text-white">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most popular
                  </span>
                )}
                <p className="text-xs font-black uppercase tracking-[0.14em] text-red-200">{connections === 1 ? "1 Device" : `${connections} Devices`}</p>
                <h3 className="mt-3 text-lg font-black text-white">{brandedHeading(periodMeta?.label ?? period)}</h3>
                <p className="mt-1 min-h-5 text-xs font-semibold text-zinc-400">{periodMeta?.detail}</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-3xl font-black text-white">{plan.price === 0 ? "Free" : `${plan.currencySymbol}${plan.price}`}</span>
                  {plan.price > 0 && <span className="mb-1 text-sm text-zinc-400">{plan.periodText}</span>}
                </div>
                {plan.price === 0 && <p className="mt-1 text-sm text-zinc-400">{plan.periodText}, no payment details</p>}
                <ul className="my-4 space-y-2.5 border-y border-white/10 py-4 text-sm leading-6 text-zinc-300">
                  {planFeatures.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-red-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <PricingAction period={period} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
