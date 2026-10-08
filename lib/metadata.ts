import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  home?: boolean;
};

export function createPageMetadata({ title, description, path, home = false }: PageMetadata): Metadata {
  const socialTitle = home ? title : `${title} | FreeGoTV`;
  const url = `${siteConfig.url}${path}`;

  return {
    title: home ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: socialTitle,
      description,
      siteName: "FreeGoTV",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "FreeGoTV premium streaming" }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/twitter-image"],
    },
  };
}
