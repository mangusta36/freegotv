"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNavigation } from "@/lib/navigation";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === href : pathname.startsWith(href);
  const isHome = pathname === "/";
  return (
    <header
      onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}
      className={`top-0 z-50 border-b backdrop-blur ${isHome ? "absolute inset-x-0 border-white/10 bg-zinc-950/35" : "sticky border-zinc-200/90 bg-white/95"}`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-5">
        <Logo light={isHome} />
        <nav aria-label="Main navigation" className="hidden xl:flex xl:items-center xl:gap-3 2xl:gap-5">
          {mainNavigation.map((item) => <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`whitespace-nowrap text-[11px] font-bold transition 2xl:text-xs ${isHome ? "hover:text-red-200" : "hover:text-[var(--primary-dark)]"} ${isActive(item.href) ? "text-[var(--primary)]" : isHome ? "text-zinc-200" : "text-zinc-600"}`}>{item.label}</Link>)}
        </nav>
        <Link href="/contact" className="hidden min-h-11 rounded-xl bg-[var(--primary-action)] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--primary-action-hover)] sm:inline-flex sm:items-center">Client Area</Link>
        <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-controls="mobile-navigation" aria-expanded={open} className={`grid h-11 w-11 place-items-center rounded-xl border xl:hidden ${isHome ? "border-white/15 text-white" : "border-zinc-200 text-zinc-900"}`}>
          {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>
      <nav id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!open} className={`overflow-hidden transition-[max-height,opacity] duration-200 xl:hidden ${isHome ? "bg-zinc-950" : "bg-white"} ${open ? `max-h-[calc(100vh-72px)] border-t opacity-100 ${isHome ? "border-white/10" : "border-zinc-100"}` : "invisible max-h-0 pointer-events-none opacity-0"}`}>
          <div className="container-page flex max-h-[calc(100vh-72px)] flex-col gap-1 overflow-y-auto py-4">
            {mainNavigation.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`rounded-xl px-4 py-3 text-sm font-bold ${isActive(item.href) ? "bg-red-500/10 text-[var(--primary)]" : isHome ? "text-zinc-200 hover:bg-white/[.06]" : "text-zinc-700 hover:bg-zinc-50"}`}>{item.label}</Link>)}
            <Link onClick={() => setOpen(false)} href="/contact" className="btn-primary mt-2">Client Area</Link>
          </div>
      </nav>
    </header>
  );
}
