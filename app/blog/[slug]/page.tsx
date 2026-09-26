import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleBody } from "@/components/ArticleBody";
import { articles, displayDate, findArticle, getArticleBody } from "@/lib/blog";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();
  const metadata = createPageMetadata({ title: article.title, description: article.description, path: `/blog/${slug}` });
  const image = { url: `/blog/${slug}/social-image`, width: 1200, height: 630, alt: article.title };
  return { ...metadata, openGraph: { ...metadata.openGraph, type: "article", publishedTime: article.published, images: [image] }, twitter: { card: "summary_large_image", title: `${article.title} | FreeGoTV`, description: article.description, images: [image] } };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) notFound();
  const blocks = await getArticleBody(slug);
  const url = `${siteConfig.url}/blog/${slug}`;
  const structuredData = [
    { "@context": "https://schema.org", "@type": "BlogPosting", headline: article.title, description: article.description, datePublished: article.published, inLanguage: "en-US", mainEntityOfPage: url, url, image: `${url}/social-image`, publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url }, { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` }, { "@type": "ListItem", position: 3, name: article.title, item: url }] },
  ];
  return <div className="bg-[var(--mist)] pb-16">
    <header className="grid-glow bg-zinc-950 py-12 text-white sm:py-16"><div className="container-page max-w-5xl">
      <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-zinc-300"><Link href="/" className="underline underline-offset-4">Home</Link><span aria-hidden="true">/</span><Link href="/blog" className="underline underline-offset-4">Blog</Link><span aria-hidden="true">/</span><span aria-current="page">{article.category}</span></nav>
      <p className="text-sm font-bold uppercase tracking-widest text-red-300">{article.category}</p>
      <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-5xl">{article.title}</h1>
      <p className="mt-6 text-sm text-zinc-300">Published <time dateTime={article.published}>{displayDate(article.published)}</time> · FreeGoTV streaming library</p>
    </div></header>
    <article className="container-page max-w-4xl pt-10 sm:pt-14">
      <nav aria-label="Table of contents" className="mb-10 rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8"><h2 className="text-lg font-black">In this guide</h2><ol className="mt-4 grid gap-3 sm:grid-cols-2">{blocks.filter(block => block.type === "h2").map(block => <li key={block.id}><a href={`#${block.id}`} className="inline-block py-1 text-sm font-semibold leading-6 text-[var(--primary-dark)] underline underline-offset-4">{block.text}</a></li>)}</ol></nav>
      <ArticleBody blocks={blocks} />
    </article>
    <aside className="container-page mt-14 max-w-4xl" aria-label="Related guides"><h2 className="text-2xl font-black">Keep learning</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{article.related.map(relatedSlug => { const related = findArticle(relatedSlug); return related ? <Link key={relatedSlug} href={`/blog/${relatedSlug}`} className="card p-6 font-bold leading-7 hover:border-red-300">{related.title}<span aria-hidden="true"> →</span></Link> : null; })}</div><Link href="/blog" className="mt-6 inline-flex min-h-11 items-center font-bold text-[var(--primary-dark)]">← All streaming guides</Link></aside>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
  </div>;
}
