import { BriefcaseBusiness, CheckCircle2, MessageCircle, Settings2, ShieldCheck, UsersRound } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { ResellerVisual } from "@/components/ResellerVisual";
import { SectionHeading } from "@/components/SectionHeading";
import { createPageMetadata } from "@/lib/metadata";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/site-config";

export const metadata = createPageMetadata({
  title: "FreeGoTV Reseller Program",
  description: "Explore the FreeGoTV reseller program and contact FreeGoTV on WhatsApp to discuss reseller options for authorized streaming services.",
  path: "/reseller",
});

const benefits = [
  { icon: BriefcaseBusiness, title: "Reseller workspace", text: "Discuss tools and workflows for managing customer requests clearly." },
  { icon: UsersRound, title: "Customer organization", text: "Keep customer setup needs, device details and support conversations easier to follow." },
  { icon: Settings2, title: "Setup guidance", text: "Use practical device and installation guidance when helping customers get started." },
  { icon: ShieldCheck, title: "Authorized access focus", text: "Position your reseller activity around services FreeGoTV is authorized to offer." },
];

const steps = [
  { title: "Contact FreeGoTV", text: "Send your reseller interest and business context on WhatsApp." },
  { title: "Review options", text: "Discuss suitability, service scope, support expectations and next steps." },
  { title: "Start carefully", text: "Use clear customer communication and avoid unsupported promises." },
];

export default function ResellerPage() {
  return (
    <>
      <section className="grid-glow relative overflow-hidden bg-zinc-950 text-white">
        <div className="hero-noise absolute inset-0 opacity-40" />
        <div className="container-page relative grid min-h-[590px] items-center gap-8 py-16 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <span className="eyebrow border-red-300/20 bg-white/10 text-red-100">FOR AUTHORIZED DISTRIBUTORS</span>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-5xl">FreeGoTV <span className="text-gradient">Reseller Program</span></h1>
            <p className="mt-5 max-w-xl leading-7 text-zinc-300 sm:text-lg">A partner path for qualified distributors who want to discuss authorized FreeGoTV streaming options, customer setup and support expectations.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={getWhatsAppUrl(whatsappMessages.reseller)} className="btn-primary">Contact Us on WhatsApp</a>
              <CTAButton href="/pricing" variant="secondary">View subscriptions</CTAButton>
            </div>
          </div>
          <ResellerVisual />
        </div>
      </section>

      <section className="section-space bg-[var(--mist)]">
        <div className="container-page">
          <SectionHeading eyebrow="PARTNER ADVANTAGES" title="A customer-first reseller conversation." description="FreeGoTV does not publish reseller pricing on this page. Contact the team to discuss options that match your intended use case." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{benefits.map((benefit) => <FeatureCard key={benefit.title} {...benefit} />)}</div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow="HOW IT WORKS" title="Discuss the right reseller path." />
            <p className="mt-4 leading-7 text-zinc-600">The reseller program is handled through direct conversation so FreeGoTV can understand your business, customer needs and support model.</p>
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <article key={step.title} className="card flex gap-4 p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-red-50 text-sm font-black text-[var(--primary)]">0{index + 1}</span>
                <div>
                  <h3 className="font-black">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-16 sm:pb-20">
        <div className="grid-glow overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-12 text-white sm:px-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8 lg:px-14">
          <div>
            <span className="eyebrow border-red-300/20 bg-white/10 text-red-100"><CheckCircle2 className="h-3.5 w-3.5" />RESELLER OPTIONS</span>
            <h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight sm:text-4xl">Ask about reseller options.</h2>
            <p className="mt-3 max-w-xl text-zinc-300">Send FreeGoTV your reseller questions on WhatsApp. We will review the next step with you directly.</p>
          </div>
          <div className="mt-7 lg:mt-0">
            <a href={getWhatsAppUrl(whatsappMessages.reseller)} className="btn-primary"><MessageCircle className="h-4 w-4" />Ask on WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
