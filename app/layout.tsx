import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getWhatsAppUrl, siteConfig, whatsappMessages } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "FreeGoTV – Premium IPTV Streaming Plans", template: "%s | FreeGoTV" },
  description: siteConfig.description,
  openGraph: { type: "website", locale: "en_US", url: siteConfig.url, title: "FreeGoTV – Premium IPTV Streaming Plans", description: siteConfig.description, siteName: "FreeGoTV", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "FreeGoTV premium streaming" }] },
  twitter: { card: "summary_large_image", title: "FreeGoTV – Premium IPTV Streaming Plans", description: siteConfig.description, images: ["/twitter-image"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    contactPoint: [{ "@type": "ContactPoint", contactType: "customer support", url: getWhatsAppUrl(whatsappMessages.support), areaServed: "US" }],
  };
  return <html lang="en-US"><body className="min-w-0 antialiased"><a href="#main-content" className="fixed left-4 top-3 z-[60] -translate-y-24 rounded-lg bg-zinc-950 px-4 py-3 font-bold text-white shadow-xl transition-transform focus:translate-y-0">Skip to main content</a><Navbar /><main id="main-content" tabIndex={-1}>{children}</main><Footer /><WhatsAppButton /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></body></html>;
}
