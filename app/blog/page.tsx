import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { articles, displayDate } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({ title: "FreeGoTV Streaming Setup & IPTV Guides", description: "FreeGoTV guides for IPTV setup, streaming devices, payment and renewal help, troubleshooting, program guides and picture quality.", path: "/blog" });

export default function BlogPage() {
  return <><PageHero eyebrow="THE FREEGOTV LIBRARY" title={<>Understand your <span className="text-gradient">FreeGoTV setup.</span></>} description="Practical FreeGoTV guides for payment, renewal, setup, devices, troubleshooting and streaming decisions. Start with a question, follow the evidence, and make informed choices." />
    <section className="section-space bg-[var(--mist)]"><div className="container-page">
      <h2 className="mb-8 text-2xl font-black">Explore the guides</h2>
      <div className="grid gap-6 md:grid-cols-2">{articles.map((article, index) => <article key={article.slug} className="card flex flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3"><span className="eyebrow">{article.category}</span><span aria-hidden="true" className="text-3xl font-black text-red-100">{String(index + 1).padStart(2, "0")}</span></div>
        <h3 className="mt-5 text-2xl font-black leading-snug"><Link href={`/blog/${article.slug}`} className="hover:text-[var(--primary-dark)]">{article.title}</Link></h3>
        <p className="mt-4 flex-1 leading-7 text-zinc-600">{article.description}</p>
        <time dateTime={article.published} className="mt-6 text-sm text-zinc-500">{displayDate(article.published)}</time>
        <Link href={`/blog/${article.slug}`} className="mt-4 inline-flex min-h-11 items-center font-bold text-[var(--primary-dark)]" aria-label={`Read ${article.title}`}>Read the guide →</Link>
      </article>)}</div>
    </div></section></>;
}
