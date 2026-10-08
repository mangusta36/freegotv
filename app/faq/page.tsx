import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";

export const metadata = createPageMetadata({ title: "Frequently Asked Questions", description: "Find answers about FreeGoTV trials, subscriptions, devices, sample channel availability, the EPG and basic streaming troubleshooting.", path: "/faq" });
export default function FAQPage() { return <><PageHero eyebrow="HELP CENTER" title={<>Your <span className="text-gradient">FreeGoTV IPTV questions,</span> answered.</>} description="A short, practical guide to how the service, trial, devices and support work." /><section className="section-space bg-[var(--mist)]"><div className="container-page"><div className="mx-auto mb-8 max-w-3xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-soft sm:p-8"><h2 className="text-2xl font-black">Start with the question you need answered</h2><p className="mt-3 leading-7 text-zinc-600">For plan questions, compare pricing and device count first. For setup questions, identify your device and app. For playback errors, record the exact symptom and review the <Link href="/blog/streaming-error-troubleshooting" className="font-bold text-[var(--primary-dark)] underline underline-offset-4">streaming error troubleshooting guide</Link> before changing account details.</p></div><FAQ /></div></section><CTASection title="Still have a question?" text="Our support team can help you choose the right next step." /></>;
}
