import type { Country } from "@/lib/countries";

export function CountryCard({ country, selected = false, onClick }: { country: Country; selected?: boolean; onClick?: () => void }) {
  const content = <><span className="text-2xl" aria-hidden="true">{country.flag}</span><span><span className="block text-sm font-extrabold">{country.name}</span><span className="text-xs text-zinc-500">{country.code}</span></span></>;
  if (onClick) return <button type="button" onClick={onClick} aria-pressed={selected} className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 ${selected ? "border-[var(--primary)] bg-red-50" : "border-zinc-200 bg-white hover:border-red-200"}`}>{content}</button>;
  return <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-red-200">{content}</div>;
}
