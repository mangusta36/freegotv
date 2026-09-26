import Link from "next/link";
import type { ArticleBlock } from "@/lib/blog";

// Deliberately small, trusted-content format: plain text and explicit links only.
// No raw HTML, scripts, hidden fields or client-side Markdown runtime.
export function ArticleText({ text }: { text: string }) {
  return <>{text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
    const match = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (!match) return part;
    const [, label, href] = match;
    const className = "font-semibold text-[var(--primary-dark)] underline decoration-red-200 underline-offset-4 hover:decoration-current";
    return href.startsWith("/") ? <Link key={index} href={href} className={className}>{label}</Link> : <a key={index} href={href} className={className}>{label}</a>;
  })}</>;
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return <div data-article-body className="min-w-0 text-base leading-8 text-zinc-700 [overflow-wrap:anywhere] sm:text-lg">
    {blocks.map((block, index) => block.type === "h2"
      ? <h2 key={index} id={block.id} className="mb-5 mt-14 scroll-mt-28 text-2xl font-black leading-tight tracking-tight text-zinc-950 sm:text-3xl">{block.text}</h2>
      : block.type === "h3"
        ? <h3 key={index} id={block.id} className="mb-4 mt-9 scroll-mt-28 text-xl font-bold leading-snug text-zinc-950">{block.text}</h3>
        : <p key={index} className="mb-6"><ArticleText text={block.text} /></p>)}
  </div>;
}
