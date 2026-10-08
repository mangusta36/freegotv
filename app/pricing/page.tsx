import Link from "next/link";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { HomePricing } from "@/components/HomePricing";
import { PageHero } from "@/components/PageHero";
import { brandedHeading } from "@/lib/headings";
import { createPageMetadata } from "@/lib/metadata";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "FreeGoTV Pricing & IPTV Subscription Plans",
  description: "Compare FreeGoTV IPTV pricing by device count and subscription period. Review FreeGoTV plans, setup guidance, renewal help and the free trial before choosing.",
  path: "/pricing",
});

const helpItems = [
  "Choose the number of devices you want to use at the same time.",
  "Compare the Free Trial, monthly, quarterly, semi-annual and annual options.",
  "Use the setup guides before installing FreeGoTV on your preferred device.",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="FLEXIBLE ACCESS"
        title={<>FreeGoTV IPTV <span className="text-gradient">Pricing & Plans</span></>}
        description="Compare FreeGoTV subscription options by device count, billing period and renewal needs, then contact the team if you need help choosing."
      >
        <div className="mt-7 grid gap-3 text-sm text-zinc-300 sm:flex sm:flex-wrap sm:gap-4">
          <span className="inline-flex min-w-0 items-center gap-2 [overflow-wrap:anywhere]"><CheckCircle2 className="h-4 w-4 shrink-0 text-red-400" />Real prices from FreeGoTV plan data</span>
          <span className="inline-flex min-w-0 items-center gap-2 [overflow-wrap:anywhere]"><CheckCircle2 className="h-4 w-4 shrink-0 text-red-400" />Device-count selector</span>
        </div>
      </PageHero>

      <HomePricing
        eyebrow="FREEGOTV PRICING"
        title="Compare Plans by Device Count"
        description="Select a supported device quantity and review the matching FreeGoTV subscription prices."
      />

      <section className="section-space bg-[var(--mist)]">
        <div className="container-page grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-black tracking-tight">{brandedHeading("Need help choosing or renewing?")}</h2>
            <p className="mt-3 leading-7 text-zinc-600">If you are unsure which FreeGoTV plan fits your devices or how to renew a FreeGoTV subscription, ask on WhatsApp before paying.</p>
            <p className="mt-3 leading-7 text-zinc-600">For a more deliberate comparison, use the <Link href="/blog/evaluate-streaming-service" className="font-bold text-[var(--primary-dark)] underline underline-offset-4">streaming service evaluation guide</Link> to decide which devices, connection limits and support questions matter before choosing a plan.</p>
            <a href={getWhatsAppUrl(whatsappMessages.pricing)} className="btn-primary mt-6"><MessageCircle className="h-4 w-4" />Ask on WhatsApp</a>
          </div>
          <div className="grid gap-4">
            {helpItems.map((item, index) => (
              <article key={item} className="card flex gap-4 p-5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-red-50 text-sm font-black text-[var(--primary)]">0{index + 1}</span>
                <p className="pt-1 font-bold text-zinc-800">{item}</p>
              </article>
            ))}
            <p className="text-sm leading-7 text-zinc-600">Before choosing a FreeGoTV subscription, review the <Link href="/install" className="font-bold text-[var(--primary-dark)] underline underline-offset-4">FreeGoTV setup guides</Link>, explore the <Link href="/free-trial" className="font-bold text-[var(--primary-dark)] underline underline-offset-4">FreeGoTV free trial</Link>, or read how to <Link href="/blog/how-to-pay-for-freegotv-renewal" className="font-bold text-[var(--primary-dark)] underline underline-offset-4">pay for FreeGoTV renewal</Link>.</p>
          </div>
        </div>
      </section>

      <CTASection title="Still comparing FreeGoTV plans?" text="Talk to our team on WhatsApp about your devices and viewing needs before you choose." />
    </>
  );
}
