"use client";

import { useMemo, useState } from "react";
import { Search, Tv2 } from "lucide-react";
import { countries } from "@/lib/countries";
import { channelCategories, demoChannels } from "@/lib/channels";
import { CountryCard } from "./CountryCard";

export function ChannelExplorer() {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("All"); const [country, setCountry] = useState("All");
  const results = useMemo(() => demoChannels.filter((channel) => (category === "All" || channel.category === category) && (country === "All" || channel.country === country) && `${channel.name} ${channel.description}`.toLowerCase().includes(query.toLowerCase())), [query, category, country]);
  return <div>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">{countries.map((item) => <CountryCard key={item.name} country={item} selected={country === item.name} onClick={() => setCountry(country === item.name ? "All" : item.name)} />)}</div>
    <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-4 sm:p-5"><div className="relative"><Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-zinc-400" /><label htmlFor="channel-search" className="sr-only">Search demo channels</label><input id="channel-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search the demo channel list" className="h-12 w-full rounded-xl border border-zinc-200 bg-white pl-11 pr-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-[var(--primary)] focus:ring-2 focus:ring-red-100" /></div><div role="group" aria-label="Channel category" className="flex gap-2 overflow-x-auto pb-1">{channelCategories.map((item) => <button type="button" key={item} onClick={() => setCategory(item)} aria-pressed={category === item} className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${category === item ? "bg-[var(--primary-action)] text-white" : "bg-white text-zinc-600 hover:bg-zinc-200"}`}>{item}</button>)}</div></div>
    <div className="mt-5 flex items-center justify-between gap-4"><p aria-live="polite" className="text-sm text-zinc-600"><span className="font-bold text-zinc-950">{results.length}</span> demo channels shown {country !== "All" && `in ${country}`}</p>{country !== "All" && <button type="button" onClick={() => setCountry("All")} className="min-h-11 shrink-0 text-sm font-bold text-[var(--primary-dark)]">Clear country</button>}</div>
    {results.length ? <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{results.map((channel) => <article key={channel.name} className="card flex gap-4 p-5"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red-50 text-[var(--primary)]"><Tv2 className="h-5 w-5" /></div><div><div className="flex flex-wrap items-center gap-2"><h3 className="font-black">{channel.name}</h3><span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-bold text-zinc-500">{channel.category}</span></div><p className="mt-1 text-xs font-bold text-[var(--primary-dark)]">{channel.country}</p><p className="mt-2 text-sm leading-6 text-zinc-600">{channel.description}</p></div></article>)}</div> : <div className="mt-5 rounded-3xl border border-dashed border-zinc-300 py-16 text-center"><Tv2 className="mx-auto h-8 w-8 text-zinc-300" /><h3 className="mt-4 font-black">No demo channels match that search.</h3><p className="mt-2 text-sm text-zinc-500">Try a different category, country, or search term.</p></div>}
  </div>;
}
