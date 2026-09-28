import { cache } from "react";
import { readFile } from "node:fs/promises";
import path from "node:path";
import entries from "@/content/blog/index.json";

export const articles = entries;
export type ArticleSummary = (typeof articles)[number];
export type ArticleParagraphBlock = { type: "p"; text: string };
export type ArticleHeadingBlock = { type: "h2" | "h3"; text: string; id?: string };
export type ArticleCalloutBlock = { type: "callout"; text: string };
export type ArticleListBlock = { type: "ul" | "ol"; items: string[] };
export type ArticleTableBlock = {
  type: "table";
  caption?: string;
  headers: string[];
  rows: string[][];
};
export type ArticleImageBlock = {
  type: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};
export type ArticleBlock = ArticleParagraphBlock | ArticleHeadingBlock | ArticleCalloutBlock | ArticleListBlock | ArticleTableBlock | ArticleImageBlock;
export const findArticle = (slug: string) => articles.find((article) => article.slug === slug);
export const getArticleBody = cache(async (slug: string): Promise<ArticleBlock[]> => {
  if (!findArticle(slug)) throw new Error("Unknown article");
  return JSON.parse(await readFile(path.join(process.cwd(), "content/blog", `${slug}.json`), "utf8"));
});
export function displayDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}
