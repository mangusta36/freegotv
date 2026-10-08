import Link from "next/link";
import { Facebook, Instagram, MessageCircle, Twitter } from "lucide-react";
import { brandedHeading } from "@/lib/headings";
import { footerNavigation } from "@/lib/navigation";
import { getWhatsAppUrl, siteConfig, whatsappMessages } from "@/lib/site-config";
import { Logo } from "./Logo";

const social = [{ icon: Twitter, label: "X", href: siteConfig.socialLinks.x }, { icon: Instagram, label: "Instagram", href: siteConfig.socialLinks.instagram }, { icon: Facebook, label: "Facebook", href: siteConfig.socialLinks.facebook }];
const configuredSocial = social.filter(({ href }) => href && href !== "#");

export function Footer() {
  return <footer className="bg-zinc-950 text-zinc-300"><div className="container-page pt-16 pb-8"><div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]"><div><Logo light /><p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">A modern streaming experience built for authorized content, clear setup and reliable support.</p><a href={getWhatsAppUrl(whatsappMessages.support)} className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white hover:text-red-300"><MessageCircle aria-hidden="true" className="h-4 w-4 text-[var(--primary)]" />WhatsApp {siteConfig.whatsappDisplay}</a>{configuredSocial.length > 0 && <div className="mt-6 flex gap-3">{configuredSocial.map(({ icon: Icon, label, href }) => <a key={label} href={href} aria-label={`FreeGoTV on ${label}`} className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-red-400 hover:bg-red-500 hover:text-white"><Icon aria-hidden="true" className="h-4 w-4" /></a>)}</div>}</div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">{Object.entries(footerNavigation).map(([title, links]) => <div key={title}><h2 className="text-sm font-black text-white">{brandedHeading(title)}</h2><ul className="mt-4 space-y-3">{links.map((link) => <li key={link.href}><Link href={link.href} className="inline-flex min-h-6 items-center text-sm text-zinc-400 transition hover:text-red-300">{link.label}</Link></li>)}</ul></div>)}</div></div>
      <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-7 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} FreeGoTV. All rights reserved.</p><p>Services are provided only for content and distribution rights we are authorized to offer.</p></div>
    </div></footer>;
}
