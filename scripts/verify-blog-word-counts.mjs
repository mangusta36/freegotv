import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const blogDir = path.join(root, "content", "blog");
const entries = JSON.parse(fs.readFileSync(path.join(blogDir, "index.json"), "utf8"));
const sitemapSource = fs.readFileSync(path.join(root, "app", "sitemap.ts"), "utf8");

const expectedRoutes = new Set([
  "/",
  "/blog",
  "/pricing",
  "/free-trial",
  "/refund",
  "/install",
  "/channels",
  "/faq",
  ...entries.map((article) => `/blog/${article.slug}`),
]);

const failures = [];
const seenTitles = new Set();
const seenSlugs = new Set();
let totalWords = 0;

function fail(message) {
  failures.push(message);
}

function wordCount(blocks) {
  const text = blocks
    .filter((block) => ["p", "h2", "h3"].includes(block.type))
    .map((block) => block.text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"))
    .join(" ");
  return (text.match(/[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*/g) || []).length;
}

function linksIn(blocks) {
  return blocks.flatMap((block) => [...block.text.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map((match) => ({ label: match[1], href: match[2] })));
}

function hasHeading(blocks, pattern) {
  return blocks.some((block) => ["h2", "h3"].includes(block.type) && pattern.test(block.text));
}

if (entries.length < 10) fail(`Expected at least 10 articles in content/blog/index.json, found ${entries.length}.`);

for (const article of entries) {
  if (seenSlugs.has(article.slug)) fail(`Duplicate slug: ${article.slug}`);
  seenSlugs.add(article.slug);

  if (seenTitles.has(article.title)) fail(`Duplicate title: ${article.title}`);
  seenTitles.add(article.title);

  for (const field of ["title", "description", "primaryKeyword", "intent", "category", "published"]) {
    if (!article[field]) fail(`${article.slug} is missing metadata field: ${field}`);
  }
  if (!Array.isArray(article.secondaryKeywords) || article.secondaryKeywords.length === 0) fail(`${article.slug} is missing secondary keywords.`);
  if (!Array.isArray(article.related) || article.related.length === 0) fail(`${article.slug} is missing related article links.`);

  const bodyPath = path.join(blogDir, `${article.slug}.json`);
  if (!fs.existsSync(bodyPath)) {
    fail(`${article.slug} is missing body file.`);
    continue;
  }

  const blocks = JSON.parse(fs.readFileSync(bodyPath, "utf8"));
  const count = wordCount(blocks);
  totalWords += count;
  console.log(`${article.slug}: ${count} words`);

  if (count < 2500) fail(`${article.slug} has ${count} words; expected at least 2500.`);
  if (!blocks.some((block) => block.type === "h2")) fail(`${article.slug} is missing H2 sections.`);
  if (!blocks.some((block) => block.type === "h3")) fail(`${article.slug} is missing H3 subsections.`);
  if (!hasHeading(blocks, /^(FAQ|Frequently asked questions)$/i)) fail(`${article.slug} is missing an FAQ section.`);
  if (!hasHeading(blocks, /conclusion/i)) fail(`${article.slug} is missing a conclusion section.`);

  const links = linksIn(blocks);
  if (!links.some((link) => link.label === "FreeGoTV" && link.href === "/")) fail(`${article.slug} is missing a clickable FreeGoTV homepage link in body content.`);
  const internalLinks = links.filter((link) => link.href.startsWith("/"));
  if (internalLinks.length < 3) fail(`${article.slug} has fewer than three internal body links.`);

  for (const link of internalLinks) {
    const route = link.href.split("#")[0] || "/";
    if (!expectedRoutes.has(route)) fail(`${article.slug} links to an unknown internal route: ${link.href}`);
  }

  for (const related of article.related) {
    if (!seenSlugs.has(related) && !entries.some((entry) => entry.slug === related)) fail(`${article.slug} has unknown related article slug: ${related}`);
  }
}

for (const article of entries) {
  if (!sitemapSource.includes("...articles.map")) fail("Sitemap does not include blog article mapping.");
  if (!sitemapSource.includes("lastModified: published")) fail("Sitemap does not use article publication dates for blog lastModified.");
}

console.log(`Total meaningful article words: ${totalWords}`);
if (totalWords < 25000) fail(`Total article word count is ${totalWords}; expected at least 25000.`);

if (failures.length) {
  console.error("\nBlog verification failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Blog verification passed.");
