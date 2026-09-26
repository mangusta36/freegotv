import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: ReactNode; description: string; children?: ReactNode }) {
  return <section className="grid-glow relative overflow-hidden bg-zinc-950 py-16 text-white sm:py-20"><div className="hero-noise absolute inset-0 opacity-30" /><div className="container-page relative"><span className="eyebrow border-red-300/20 bg-white/10 text-red-100">{eyebrow}</span><h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">{description}</p>{children}</div></section>;
}
