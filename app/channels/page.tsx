import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";
import { Info } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ChannelExplorer } from "@/components/ChannelExplorer";

export const metadata = createPageMetadata({ title: "IPTV Channel List — Sample Explorer", description: "Browse the FreeGoTV sample channel list by category and country. This demo is not a confirmed lineup; verify availability before choosing a subscription.", path: "/channels" });
export default function ChannelsPage() { return <><PageHero eyebrow="EXPLORE THE GUIDE" title={<>FreeGoTV IPTV <span className="text-gradient">Channel List</span></>} description="Browse sample IPTV channels by country and category. This explorer demonstrates the list, not confirmed channels included in a subscription." /><section className="section-space bg-[var(--mist)]"><div className="container-page"><div className="mb-8 flex gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-950"><Info className="mt-0.5 h-5 w-5 shrink-0" />This is a demo catalog, not a confirmed subscription lineup. Sample names and country labels do not establish channel availability or broadcasting rights. Confirm your specific channels and region before subscribing.</div><ChannelExplorer /><p className="mt-8 text-sm leading-7 text-zinc-600">Read the <Link href="/faq" className="font-bold text-[var(--primary-dark)] underline underline-offset-4">channel availability FAQ</Link> or return to the <Link href="/" className="font-bold text-[var(--primary-dark)] underline underline-offset-4">FreeGoTV overview</Link>.</p></div></section></>;
}
