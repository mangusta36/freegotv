import { PageHero } from "./PageHero";

export type LegalSection = { heading: string; text: string };

export function LegalPage({ label, title, intro, sections }: { label: string; title: string; intro: string; sections: LegalSection[] }) {
  return <><PageHero eyebrow={label} title={title} description={intro} /><article className="section-space bg-[var(--mist)]"><div className="container-page mx-auto max-w-3xl"><div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft sm:p-10"><p className="text-sm font-bold text-zinc-500">Last updated: August 18, 2026</p>{sections.map((section) => <section key={section.heading} className="mt-9"><h2 className="text-xl font-black text-zinc-950">{section.heading}</h2><p className="mt-3 leading-7 text-zinc-600">{section.text}</p></section>)}</div></div></article></>;
}
