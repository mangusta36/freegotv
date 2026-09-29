import Link from "next/link";
import { Headphones, MonitorSmartphone, Radio, ShieldCheck, Sparkles, Tv2, Zap } from "lucide-react";
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { DeviceCard } from "@/components/DeviceCard";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { HomePricing } from "@/components/HomePricing";
import { articles, displayDate } from "@/lib/blog";
import { devices } from "@/lib/devices";
import { faqItems } from "@/lib/faq";
import { brandedHeading } from "@/lib/headings";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "FreeGoTV IPTV Plans, Pricing, Subscription & Setup", description: "Explore FreeGoTV IPTV pricing, subscription plans, free trial, channel information, supported devices, renewal help, setup guides and WhatsApp support.", path: "/", home: true });

const features = [
  { icon: Radio, title: "FreeGoTV channel information", text: "A considered catalog of live programming FreeGoTV is licensed or authorized to provide." },
  { icon: Sparkles, title: "Picture quality where available", text: "FreeGoTV streaming quality adapts to your compatible device and connection." },
  { icon: MonitorSmartphone, title: "FreeGoTV device support", text: "Use FreeGoTV across compatible big-screen, desktop and mobile devices." },
  { icon: Tv2, title: "FreeGoTV program guide", text: "Know what is on next with an easy-to-browse FreeGoTV program guide." },
  { icon: Zap, title: "FreeGoTV onboarding", text: "A practical FreeGoTV setup path with guidance that keeps each step easy to understand." },
  { icon: Headphones, title: "FreeGoTV support", text: "Get practical assistance from a responsive FreeGoTV support path." },
];

const featuredArticles = articles.filter((article) => ["streaming-device-compatibility", "safe-iptv-setup-checklist", "evaluate-streaming-service"].includes(article.slug));
const homeFaqItems = faqItems.slice(0, 5);
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function HomePage() {
  return <><Hero /><HomePricing />
    <section className="section-space bg-[var(--mist)]" id="about"><div className="container-page"><SectionHeading eyebrow="BUILT FOR EASY VIEWING" title="Get to know FreeGoTV IPTV." description="FreeGoTV is an IPTV streaming service. Use this site to compare FreeGoTV subscription options, learn about device setup, and review channel information before choosing a plan." /><p className="mt-5 max-w-3xl leading-7 text-zinc-600">Start with <Link href="/pricing" className="font-bold text-[var(--primary-dark)] underline underline-offset-4">FreeGoTV pricing and subscription plans</Link>, browse the <Link href="/channels" className="font-bold text-[var(--primary-dark)] underline underline-offset-4">FreeGoTV channel list</Link>, or read the <Link href="/faq" className="font-bold text-[var(--primary-dark)] underline underline-offset-4">FreeGoTV FAQ</Link>.</p><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{features.map((feature) => <FeatureCard key={feature.title} {...feature} />)}</div></div></section>
    <section className="section-space bg-white"><div className="container-page"><div className="grid-glow overflow-hidden rounded-[2rem] border border-red-500/25 bg-zinc-950 p-7 text-white shadow-glow sm:p-10 lg:grid lg:grid-cols-[1.25fr_.75fr] lg:items-center lg:gap-10 lg:p-14"><div><span className="eyebrow border-red-300/20 bg-white/10 text-red-100"><ShieldCheck className="h-3.5 w-3.5" />FREEGOTV FREE TRIAL</span><h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">{brandedHeading("Try FreeGoTV before you subscribe.")}</h2><p className="mt-4 max-w-xl leading-7 text-zinc-300">Explore the FreeGoTV experience first. Your free trial is simple to request, has no payment information required, and includes friendly setup guidance.</p><div className="mt-7"><CTAButton href="/free-trial">Start your FreeGoTV free trial</CTAButton></div></div><div className="mt-8 rounded-3xl border border-white/10 bg-white/[.06] p-6 lg:mt-0"><ShieldCheck className="h-9 w-9 text-red-400" /><p className="mt-5 text-3xl font-black">FreeGoTV Free Trial</p><p className="mt-2 text-sm leading-6 text-zinc-300">A simple way to test compatible devices, explore the FreeGoTV guide, and decide at your own pace.</p></div></div></div></section>
    <section className="section-space bg-[var(--mist)]"><div className="container-page"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="WATCH YOUR WAY" title="Set up FreeGoTV on the screens you already use." description="Review FreeGoTV devices and general setup steps, then confirm the right app for your device." /><CTAButton href="/install" variant="outline">FreeGoTV setup guides</CTAButton></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{devices.slice(0, 4).map((device) => <DeviceCard key={device.name} device={device} />)}</div></div></section>
    <section className="section-space bg-white"><div className="container-page"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><SectionHeading eyebrow="FREEGOTV GUIDES" title="Latest guides from FreeGoTV." description="Use these resources to compare devices, prepare setup and evaluate a streaming service before subscribing." /><CTAButton href="/blog" variant="outline">Visit the blog</CTAButton></div><div className="mt-10 grid gap-5 md:grid-cols-3">{featuredArticles.map((article) => <article key={article.slug} className="card flex flex-col p-6"><span className="eyebrow w-fit">{article.category}</span><h3 className="mt-5 text-xl font-black leading-snug"><Link href={`/blog/${article.slug}`} className="hover:text-[var(--primary-dark)]">{brandedHeading(article.title)}</Link></h3><p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">{article.description}</p><time dateTime={article.published} className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-zinc-400">{displayDate(article.published)}</time><Link href={`/blog/${article.slug}`} className="mt-4 inline-flex min-h-11 items-center font-bold text-[var(--primary-dark)]" aria-label={`Read ${article.title}`}>Read guide →</Link></article>)}</div></div></section>
    <section className="section-space bg-[var(--mist)]"><div className="container-page"><SectionHeading eyebrow="COMMON QUESTIONS" title="Answers before you get started." align="center" /><div className="mt-10"><FAQ limit={5} /></div></div></section><CTASection />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c") }} />
  </>;
}
