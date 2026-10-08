import type { ReactNode } from "react";
import { brandedHeading } from "@/lib/headings";

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: ReactNode; description: string; children?: ReactNode }) {
  const heading = typeof title === "string" ? brandedHeading(title) : title;
  return <section className="grid-glow relative overflow-hidden bg-zinc-950 py-14 text-white sm:py-20"><div className="hero-noise absolute inset-0 opacity-30" /><div className="container-page relative min-w-0"><span className="eyebrow max-w-full [overflow-wrap:anywhere] border-red-300/20 bg-white/10 text-red-100">{eyebrow}</span><h1 className="mt-5 max-w-[17rem] text-[clamp(1.45rem,7vw,3rem)] font-black leading-tight tracking-tight [overflow-wrap:anywhere] sm:max-w-4xl sm:text-5xl">{heading}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 [overflow-wrap:anywhere] sm:text-lg">{description}</p>{children}</div></section>;
}
