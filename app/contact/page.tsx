import Link from "next/link";
import { Clock3, HelpCircle, MessageCircle, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { brandedHeading } from "@/lib/headings";
import { createPageMetadata } from "@/lib/metadata";
import { getWhatsAppUrl, siteConfig, whatsappMessages } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "Contact FreeGoTV Support",
  description: "Contact FreeGoTV on WhatsApp for subscription, free trial, setup and support questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="WE ARE HERE TO HELP"
        title={<>Talk to the <span className="text-gradient">FreeGoTV IPTV team.</span></>}
        description="Use WhatsApp for FreeGoTV plan questions, setup guidance, free trial requests and support."
      />
      <section className="section-space bg-[var(--mist)]">
        <div className="container-page grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="card p-6 sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-50 text-green-600">
              <MessageCircle className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight">{brandedHeading("Contact FreeGoTV on WhatsApp")}</h2>
            <p className="mt-3 leading-7 text-zinc-600">
              Tell us what you need help with and include your device type when the question is about setup or playback.
            </p>
            <a href={getWhatsAppUrl(whatsappMessages.support)} className="btn-primary mt-7 w-full sm:w-fit">Open WhatsApp</a>
            <p className="mt-4 text-sm font-bold text-zinc-500">{siteConfig.whatsappDisplay}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: ShieldCheck, title: "Plan questions", text: "Ask which FreeGoTV plan fits your device count and viewing needs.", href: "/pricing" },
              { icon: HelpCircle, title: "Setup help", text: "Review device setup guidance before contacting support.", href: "/install" },
              { icon: MessageCircle, title: "Free trial", text: "Request a FreeGoTV free trial without specifying a duration.", href: "/free-trial" },
              { icon: Clock3, title: "Support details", text: "Response details are shared in direct customer communication.", href: "/faq" },
            ].map(({ icon: Icon, title, text, href }) => (
              <Link key={title} href={href} className="card p-5 transition hover:-translate-y-1 hover:border-red-200">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-red-50 text-[var(--primary)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-black">{brandedHeading(title)}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
