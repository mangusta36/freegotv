import { Check, MessageCircle, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { createPageMetadata } from "@/lib/metadata";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "FreeGoTV IPTV Free Trial",
  description: "Explore the FreeGoTV IPTV free trial, with no payment details required. Review FreeGoTV device guidance and trial information before selecting a subscription.",
  path: "/free-trial",
});

export default function FreeTrialPage() {
  return (
    <>
      <PageHero
        eyebrow="NO PAYMENT DETAILS"
        title={<>Start with a <span className="text-gradient">FreeGoTV Free Trial.</span></>}
        description="Try the FreeGoTV experience first. We will help you choose a supported device and send clear, authorized setup details."
      />
      <section className="section-space bg-[var(--mist)]">
        <div className="container-page grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div className="lg:pt-5">
            <span className="eyebrow"><PlayCircle className="h-3.5 w-3.5" />TRY FREEGOTV</span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">Simple to request. Easy to evaluate.</h2>
            <p className="mt-4 leading-7 text-zinc-600">Use the FreeGoTV free trial to check your devices, program guide and the experience that matters to you before choosing a FreeGoTV subscription.</p>
            <ul className="mt-7 space-y-4">{["No payment information required", "Friendly help getting set up", "Compatible device guidance", "Clear, authorized access only"].map((item, index) => {
              const Icons = [ShieldCheck, Sparkles, Check, Check];
              const Icon = Icons[index];
              return <li key={item} className="flex items-center gap-3 font-bold text-zinc-800"><span className="grid h-8 w-8 place-items-center rounded-xl bg-red-50 text-[var(--primary)]"><Icon className="h-4 w-4" /></span>{item}</li>;
            })}</ul>
          </div>
          <div className="card p-6 sm:p-8">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-50 text-green-600">
              <MessageCircle className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-2xl font-black">Request your FreeGoTV Free Trial on WhatsApp</h2>
            <p className="mt-3 leading-7 text-zinc-600">Send FreeGoTV your device type and any setup questions. Our team will guide you from there.</p>
            <a href={getWhatsAppUrl(whatsappMessages.trial)} className="btn-primary mt-7 w-full">Request free trial</a>
          </div>
        </div>
      </section>
    </>
  );
}
