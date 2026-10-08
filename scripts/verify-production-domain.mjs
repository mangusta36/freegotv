import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const officialOrigin = "https://www.freego4k.com";
const officialHost = "www.freego4k.com";
const sourceRoots = ["app", "components", "content", "lib"];
const extraFiles = [".env.example", "README.md", "next.config.ts", "package.json"];
const failures = [];

function fail(message) {
  failures.push(message);
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return [fullPath];
  });
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

const siteConfig = read("lib/site-config.ts");
if (!siteConfig.includes(`url: "${officialOrigin}"`)) fail(`siteConfig.url is not ${officialOrigin}.`);
if (/url:\s*"https?:\/\/[^"]+\/"/.test(siteConfig)) fail("siteConfig.url must not include a trailing slash.");

const sitemap = read("app/sitemap.ts");
if (!sitemap.includes("siteConfig.url")) fail("Sitemap does not use siteConfig.url.");

const robots = read("app/robots.ts");
if (!robots.includes("siteConfig.url") || !robots.includes("/sitemap.xml")) fail("Robots sitemap does not use siteConfig.url.");

const layout = read("app/layout.tsx");
if (!layout.includes("metadataBase: new URL(siteConfig.url)")) fail("Root metadataBase does not use siteConfig.url.");

const sourceFiles = [
  ...sourceRoots.flatMap((dir) => walk(path.join(root, dir))),
  ...extraFiles.map((file) => path.join(root, file)).filter((file) => fs.existsSync(file)),
];

const wrongFirstPartyPatterns = [
  /https?:\/\/(?:www\.)?freegotv\.eu\.cc/gi,
  /https?:\/\/(?:www\.)?freegotv\.com/gi,
  /http:\/\/(?:www\.)?freego4k\.com/gi,
  /https:\/\/freego4k\.com/gi,
  /https?:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?/gi,
  /https?:\/\/[^"'\s)]+\.vercel\.app/gi,
  /\b(?:YOUR_DOMAIN|yourdomain\.com|placeholder\.invalid)\b/gi,
];

for (const file of sourceFiles) {
  const text = fs.readFileSync(file, "utf8");
  for (const pattern of wrongFirstPartyPatterns) {
    const matches = text.match(pattern);
    if (matches) fail(`${path.relative(root, file)} contains wrong first-party URL(s): ${[...new Set(matches)].join(", ")}`);
  }
}

if (!siteConfig.includes(officialHost)) fail(`Canonical host ${officialHost} not found in siteConfig.`);

if (failures.length) {
  console.error("Production domain QA failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Production domain QA passed for ${officialOrigin}.`);
