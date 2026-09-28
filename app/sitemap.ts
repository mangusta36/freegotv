import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { articles } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/pricing", "/free-trial", "/reseller", "/install", "/channels", "/restream", "/nfl", "/contact", "/faq", "/privacy", "/terms", "/refund", "/disclaimer"];
  // Add lastModified only when a reliable content revision date is available.
  return [...routes.map((route) => ({ url: `${siteConfig.url}${route}` })), { url: `${siteConfig.url}/blog` }, ...articles.map(({ slug, modified }) => ({ url: `${siteConfig.url}/blog/${slug}`, lastModified: modified }))];
}
