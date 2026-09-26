import type { LucideIcon } from "lucide-react";

export function FeatureCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return <article className="card group p-6 transition duration-200 hover:-translate-y-1">
    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-red-50 text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-white"><Icon className="h-5 w-5" /></div>
    <h3 className="mt-5 text-lg font-extrabold text-zinc-950">{title}</h3>
    <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
  </article>;
}
