import { Check, Sparkles } from "lucide-react";
import { planFeatures, type BillingPeriod } from "@/lib/pricing";
import { brandedHeading } from "@/lib/headings";
import { CTAButton } from "./CTAButton";

export function PricingCard({ period, connections, price, periodText, currencySymbol = "$", recommended = false }: { period: BillingPeriod; connections: number; price: number; periodText: string; currencySymbol?: string; recommended?: boolean }) {
  return <article className={`relative flex h-full flex-col rounded-3xl border p-6 transition duration-200 hover:-translate-y-1 ${recommended ? "border-[var(--primary)] bg-zinc-950 text-white shadow-glow" : "border-zinc-200 bg-white text-zinc-950 shadow-soft"}`}>
    {recommended && <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-[var(--primary-action)] px-3 py-1 text-xs font-bold text-white"><Sparkles aria-hidden="true" className="h-3.5 w-3.5" />Most popular</span>}
    <p className={`text-sm font-bold ${recommended ? "text-red-200" : "text-zinc-500"}`}>{connections === 1 ? "1 Connection" : `${connections} Connections`}</p>
    <h3 className="mt-3 text-xl font-black">{brandedHeading(period === "trial" ? "Free Trial" : "FreeGoTV Access")}</h3>
    <div className="mt-5 flex items-end gap-1"><span className="text-4xl font-black">{price === 0 ? "Free" : `${currencySymbol}${price}`}</span>{price > 0 && <span className={`mb-1 text-sm ${recommended ? "text-zinc-400" : "text-zinc-500"}`}>{periodText}</span>}</div>
    {price === 0 && <p className={`mt-1 text-sm ${recommended ? "text-zinc-300" : "text-zinc-500"}`}>{periodText}, no payment details</p>}
    <ul className={`my-7 space-y-3 border-y py-6 text-sm ${recommended ? "border-white/10 text-zinc-200" : "border-zinc-100 text-zinc-600"}`}>
      {planFeatures.map((feature) => <li key={feature} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />{feature}</li>)}
    </ul>
    <CTAButton href={period === "trial" ? "/free-trial" : "/contact"} variant={recommended ? "primary" : "outline"} className="mt-auto w-full">{period === "trial" ? "Start free trial" : "Choose plan"}</CTAButton>
  </article>;
}
