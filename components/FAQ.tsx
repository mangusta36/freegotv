"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqItems } from "@/lib/faq";

export function FAQ({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="mx-auto max-w-3xl divide-y divide-zinc-200 rounded-3xl border border-zinc-200 bg-white px-5 shadow-soft sm:px-7">
    {faqItems.slice(0, limit).map((item, index) => <div key={item.question}>
      <button id={`faq-button-${index}`} type="button" onClick={() => setOpen(open === index ? null : index)} className="flex min-h-11 w-full items-center justify-between gap-5 py-5 text-left font-extrabold text-zinc-950" aria-controls={`faq-panel-${index}`} aria-expanded={open === index}>
        <span>{item.question}</span>{open === index ? <Minus aria-hidden="true" className="h-5 w-5 shrink-0 text-[var(--primary)]" /> : <Plus aria-hidden="true" className="h-5 w-5 shrink-0 text-zinc-500" />}
      </button>
      <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-button-${index}`} aria-hidden={open !== index} className={`grid transition-[grid-template-rows,opacity] duration-200 ${open === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><p className="pb-5 text-sm leading-7 text-zinc-600">{item.answer}</p></div></div>
    </div>)}
  </div>;
}
