import { ImageResponse } from "next/og";
import { articles, findArticle } from "@/lib/blog";

export const dynamic = "force-static";
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = findArticle(slug);
  if (!article) return new Response("Not found", { status: 404 });
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 70, background: "linear-gradient(130deg, #111111, #35121c)", color: "white" }}><div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}><span style={{ color: "#ff718b" }}>FreeGoTV</span><span>{article.category}</span></div><div style={{ display: "flex", fontSize: 58, fontWeight: 700, lineHeight: 1.15 }}>{article.title}</div><div style={{ display: "flex", fontSize: 24, color: "#d4d4d8" }}>THE STREAMING LIBRARY · PRACTICAL GUIDES</div></div>, { width: 1200, height: 630 });
}
