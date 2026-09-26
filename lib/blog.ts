import { cache } from "react";
import { readFile } from "node:fs/promises";
import path from "node:path";
import entries from "@/content/blog/index.json";

export const articles = entries;
export type ArticleSummary = (typeof articles)[number];
export type ArticleBlock = { type: "p" | "h2" | "h3"; text: string; id?: string };
export const findArticle = (slug: string) => articles.find((article) => article.slug === slug);
export const getArticleBody = cache(async (slug: string): Promise<ArticleBlock[]> => {
  if (!findArticle(slug)) throw new Error("Unknown article");
  return JSON.parse(await readFile(path.join(process.cwd(), "content/blog", `${slug}.json`), "utf8"));
});
export function displayDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}
