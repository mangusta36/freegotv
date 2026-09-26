import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, whatsappMessages } from "@/lib/site-config";

export function WhatsAppButton() {
  return <a href={getWhatsAppUrl(whatsappMessages.support)} aria-label="Contact FreeGoTV support on WhatsApp" className="mx-auto my-4 flex min-h-11 w-fit items-center gap-2 rounded-full bg-[#0b6b38] px-4 py-3 text-sm font-extrabold text-white shadow-xl shadow-green-950/20 transition hover:-translate-y-0.5 sm:fixed sm:bottom-7 sm:right-7 sm:z-40 sm:my-0 sm:animate-pulse-soft">
    <span className="rounded-full bg-white/10 px-2 py-1 text-xs">We are here!</span><MessageCircle aria-hidden="true" className="h-5 w-5" />
  </a>;
}
