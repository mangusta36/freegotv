import { CTAButton } from "./CTAButton";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/site-config";

export function CTASection({ title = "Ready for a better way to stream?", text = "Explore FreeGoTV with a no-pressure trial and our helpful setup team." }: { title?: string; text?: string }) {
  return <section className="container-page pb-16 sm:pb-20"><div className="grid-glow overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-12 text-white sm:px-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8 lg:px-14"><div><span className="eyebrow border-red-300/20 bg-white/10 text-red-100">FREEGOTV ACCESS</span><h2 className="mt-4 max-w-xl text-3xl font-black tracking-tight sm:text-4xl">{title}</h2><p className="mt-3 max-w-xl text-zinc-300">{text}</p></div><div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-0"><CTAButton href="/free-trial">Start free trial</CTAButton><a href={getWhatsAppUrl(whatsappMessages.support)} className="btn-secondary">Talk on WhatsApp</a></div></div></section>;
}
