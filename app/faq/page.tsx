import { createPageMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";

export const metadata = createPageMetadata({ title: "Frequently Asked Questions", description: "Find answers about FreeGoTV trials, subscriptions, devices, sample channel availability, the EPG and basic streaming troubleshooting.", path: "/faq" });
export default function FAQPage() { return <><PageHero eyebrow="HELP CENTER" title={<>Your <span className="text-gradient">FreeGoTV questions,</span> answered.</>} description="A short, practical guide to how the service, trial, devices and support work." /><section className="section-space bg-[var(--mist)]"><div className="container-page"><FAQ /></div></section><CTASection title="Still have a question?" text="Our support team can help you choose the right next step." /></>;
}
