import Image from "next/image";
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
    return href.startsWith("/") ? <Link key={index} href={href} className={className}>{label}</Link> : <a key={index} href={href} className={className} rel="noopener noreferrer">{label}</a>;
  })}</>;
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return <div data-article-body className="min-w-0 text-base leading-8 text-zinc-700 [overflow-wrap:anywhere] sm:text-lg">
    {blocks.map((block, index) => {
      if (block.type === "h2") return <h2 key={index} id={block.id} className="mb-5 mt-14 scroll-mt-28 text-2xl font-black leading-tight tracking-tight text-zinc-950 sm:text-3xl">{block.text}</h2>;
      if (block.type === "h3") return <h3 key={index} id={block.id} className="mb-4 mt-9 scroll-mt-28 text-xl font-bold leading-snug text-zinc-950">{block.text}</h3>;
      if (block.type === "ul" || block.type === "ol") {
        const ListTag = block.type;
        return <ListTag key={index} className="mb-7 ml-5 list-outside space-y-3 marker:font-bold marker:text-[var(--primary-dark)]">
          {block.items.map((item, itemIndex) => <li key={itemIndex} className={block.type === "ul" ? "list-disc pl-2" : "list-decimal pl-2"}><ArticleText text={item} /></li>)}
        </ListTag>;
      }
      if (block.type === "table") return <figure key={index} className="my-10">
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 bg-white shadow-sm">
          <table className="min-w-[42rem] w-full border-collapse text-left text-sm leading-6 sm:text-base">
            {block.caption ? <caption className="caption-bottom px-5 py-3 text-left text-sm text-zinc-500">{block.caption}</caption> : null}
            <thead className="bg-zinc-950 text-white"><tr>{block.headers.map((header) => <th key={header} scope="col" className="px-5 py-4 align-top font-black">{header}</th>)}</tr></thead>
            <tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex} className="border-t border-zinc-200 odd:bg-white even:bg-zinc-50">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-5 py-4 align-top"><ArticleText text={cell} /></td>)}</tr>)}</tbody>
          </table>
        </div>
      </figure>;
      if (block.type === "image") return <figure key={index} className="my-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <Image src={block.src} alt={block.alt} width={block.width} height={block.height} sizes="(min-width: 1024px) 896px, calc(100vw - 40px)" className="h-auto w-full" />
        {block.caption ? <figcaption className="px-5 py-4 text-sm leading-6 text-zinc-500"><ArticleText text={block.caption} /></figcaption> : null}
      </figure>;
      if (block.type === "callout") return <aside key={index} className="my-8 rounded-2xl border-l-4 border-[var(--primary-dark)] bg-white p-5 text-base font-semibold leading-7 text-zinc-800 shadow-sm"><ArticleText text={block.text} /></aside>;
      if (block.type === "p") return <p key={index} className="mb-6"><ArticleText text={block.text} /></p>;
      return null;
    })}
  </div>;
}
