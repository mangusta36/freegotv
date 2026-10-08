# FREEGOTV FINAL DOMAIN SEO FORENSIC AUDIT

Audit date: 2026-10-08  
Project: `/home/mangusta/Documents/tahawebst`  
Official production origin: `https://www.freego4k.com`  
Canonical hostname: `www.freego4k.com`  
Mode: Read-only forensic audit, except creation of this report

## A. Executive verdict

**FAIL — ACTION REQUIRED**

Local implementation is internally consistent for the target canonical origin `https://www.freego4k.com`: rendered canonicals, `og:url`, sitemap URLs, robots sitemap directive, and JSON-LD first-party URLs all use the www host in local production build output.

Live production is not ready based on network verification from this environment. `www.freego4k.com` resolves as `NXDOMAIN`, `https://freego4k.com/` times out, and `http://freego4k.com/` returns HTTP 200 instead of redirecting to `https://www.freego4k.com/`. This blocks live Vercel migration verification, HTTPS verification, sitemap fetch verification, robots fetch verification, and Google Search Console readiness for the canonical www property.

Concise answers:

1. Old first-party domain absent from active production SEO output locally: **YES, locally verified**. Repository search found no active `freegotv.com` SEO references in source roots.
2. New www domain configured everywhere locally: **YES, locally verified** via source and rendered output.
3. Canonical, sitemap, robots, metadata, and JSON-LD consistent locally: **YES**.
4. All 11 published blog articles correctly configured locally: **YES**.
5. Live Vercel redirects and HTTPS working: **NO / NOT VERIFIED**. DNS and host behavior are failing.
6. Ready for Google Search Console: **NOT READY** until canonical www DNS/hosting and apex redirect are corrected and re-tested live.

## B. Domain configuration

Framework: Next.js App Router, Next `15.5.23` observed during `next build`; `package.json` declares `next: ^15.2.0`, React 19, TypeScript 5.7.

Routing architecture: `app/` App Router with static pages, static sitemap/robots routes, dynamic SSG blog routes at `/blog/[slug]`, and dynamic blog social image routes at `/blog/[slug]/social-image`.

Single source of truth:

- `lib/site-config.ts:3` sets `siteConfig.url = "https://www.freego4k.com"`.
- `lib/metadata.ts:13-22` builds canonical and `og:url` from `siteConfig.url + path`.
- `app/layout.tsx:9` sets `metadataBase: new URL(siteConfig.url)`.
- `app/sitemap.ts:8` builds static and blog URLs from `siteConfig.url`.
- `app/robots.ts:5` builds sitemap directive from `siteConfig.url`.
- `app/blog/[slug]/page.tsx:28-32` builds BlogPosting and BreadcrumbList URLs from `siteConfig.url`.

Redirect implementation:

- `next.config.ts:5-13` defines a host redirect from `freego4k.com` to `https://www.freego4k.com/:path*` with HTTP `301`.
- Local curl with `Host: freego4k.com` returned `301 Location: https://www.freego4k.com/pricing`.
- Local curl with `Host: freego4k.com` and query path returned `301 Location: https://www.freego4k.com/blog/iptv-technology-explained?utm=test`.

No environment-variable URL override was found in active source. `.env.local` exists but was not reported by the source URL search as containing target stale domains. `next build` reported `.env.local` loaded.

## C. Old-domain findings

Actionable old-domain references: **0 found in active source roots**.

Repository/source search covered `app`, `components`, `content`, `lib`, `public`, `scripts` for:

- `freegotv.com`
- `www.freegotv.com`
- `freego4k.com`
- `www.freego4k.com`
- `vercel.app`
- `localhost`
- `127.0.0.1`
- `example.com`
- `yourdomain.com`
- `placeholder.invalid`
- `UNRESOLVED`
- `http://`

Classified occurrences:

- A. Active first-party production reference: `https://www.freego4k.com` in `lib/site-config.ts` and QA script; correct.
- B. Legitimate redirect source: `freego4k.com` host condition in `next.config.ts`; correct intent.
- C. Legitimate third-party references: `https://schema.org`, `https://wa.me`, and external article citations; unchanged.
- D. Development-only URL: localhost/127.0.0.1 regex appears only inside `scripts/verify-production-domain.mjs` as a forbidden-pattern detector.
- E. Documentation/example: prior audit/report markdown files exist but were not treated as active source output.
- F. Stale incorrect production reference: none found locally.

## D. Route-by-route verification

Local rendered production build was started with `npm run start -- -p 3000` after `npm run build`. Every intended indexable route returned HTTP 200 locally, exactly one canonical, matching `og:url`, and `index, follow`.

| Route | HTTP | Canonical | OG URL | Sitemap | Indexable | Status |
|---|---:|---|---|---|---|---|
| `/` | 200 | `https://www.freego4k.com` | `https://www.freego4k.com` | Yes | Yes | PASS local |
| `/pricing` | 200 | `https://www.freego4k.com/pricing` | Same | Yes | Yes | PASS local |
| `/free-trial` | 200 | `https://www.freego4k.com/free-trial` | Same | Yes | Yes | PASS local |
| `/reseller` | 200 | `https://www.freego4k.com/reseller` | Same | Yes | Yes | PASS local |
| `/install` | 200 | `https://www.freego4k.com/install` | Same | Yes | Yes | PASS local |
| `/channels` | 200 | `https://www.freego4k.com/channels` | Same | Yes | Yes | PASS local |
| `/restream` | 200 | `https://www.freego4k.com/restream` | Same | Yes | Yes | PASS local |
| `/nfl` | 200 | `https://www.freego4k.com/nfl` | Same | Yes | Yes | PASS local |
| `/contact` | 200 | `https://www.freego4k.com/contact` | Same | Yes | Yes | PASS local |
| `/faq` | 200 | `https://www.freego4k.com/faq` | Same | Yes | Yes | PASS local |
| `/privacy` | 200 | `https://www.freego4k.com/privacy` | Same | Yes | Yes | PASS local |
| `/terms` | 200 | `https://www.freego4k.com/terms` | Same | Yes | Yes | PASS local |
| `/refund` | 200 | `https://www.freego4k.com/refund` | Same | Yes | Yes | PASS local |
| `/disclaimer` | 200 | `https://www.freego4k.com/disclaimer` | Same | Yes | Yes | PASS local |
| `/blog` | 200 | `https://www.freego4k.com/blog` | Same | Yes | Yes | PASS local |
| `/blog/iptv-technology-explained` | 200 | `https://www.freego4k.com/blog/iptv-technology-explained` | Same | Yes | Yes | PASS local |
| `/blog/streaming-device-compatibility` | 200 | `https://www.freego4k.com/blog/streaming-device-compatibility` | Same | Yes | Yes | PASS local |
| `/blog/safe-iptv-setup-checklist` | 200 | `https://www.freego4k.com/blog/safe-iptv-setup-checklist` | Same | Yes | Yes | PASS local |
| `/blog/iptv-buffering-troubleshooting` | 200 | `https://www.freego4k.com/blog/iptv-buffering-troubleshooting` | Same | Yes | Yes | PASS local |
| `/blog/electronic-program-guide-explained` | 200 | `https://www.freego4k.com/blog/electronic-program-guide-explained` | Same | Yes | Yes | PASS local |
| `/blog/iptv-players-and-apps` | 200 | `https://www.freego4k.com/blog/iptv-players-and-apps` | Same | Yes | Yes | PASS local |
| `/blog/evaluate-streaming-service` | 200 | `https://www.freego4k.com/blog/evaluate-streaming-service` | Same | Yes | Yes | PASS local |
| `/blog/streaming-error-troubleshooting` | 200 | `https://www.freego4k.com/blog/streaming-error-troubleshooting` | Same | Yes | Yes | PASS local |
| `/blog/streaming-data-usage` | 200 | `https://www.freego4k.com/blog/streaming-data-usage` | Same | Yes | Yes | PASS local |
| `/blog/streaming-video-quality` | 200 | `https://www.freego4k.com/blog/streaming-video-quality` | Same | Yes | Yes | PASS local |
| `/blog/how-to-pay-for-freegotv-renewal` | 200 | `https://www.freego4k.com/blog/how-to-pay-for-freegotv-renewal` | Same | Yes | Yes | PASS local |

Redirect-only route behavior:

- Local `Host: freego4k.com` `/pricing`: HTTP 301 to `https://www.freego4k.com/pricing`.
- Local `Host: freego4k.com` `/blog/iptv-technology-explained?utm=test`: HTTP 301 to `https://www.freego4k.com/blog/iptv-technology-explained?utm=test`.

## E. Sitemap results

Local `/sitemap.xml` returned HTTP 200 and valid XML.

Counts:

- Total URLs: 26
- Static/page URLs: 15, including homepage and blog index
- Blog article URLs: 11
- Duplicate URLs: 0 found
- Wrong-domain URLs: 0 found
- Localhost/preview URLs: 0 found
- Missing intended blog URLs: 0 found
- Unexpected URLs: 0 found

Sitemap host: all URLs use `https://www.freego4k.com`.

Blog `lastmod` values:

- All 11 blog URLs include `<lastmod>2026-09-28</lastmod>`.
- This is sourced from `content/blog/index.json` article `modified` fields through `app/sitemap.ts`. These are content metadata dates; no independent git/content baseline was available to prove the dates correspond to actual edit timestamps.

Live sitemap:

- `https://www.freego4k.com/sitemap.xml` could not be fetched because `www.freego4k.com` returned DNS `NXDOMAIN`.

## F. Robots results

Local `/robots.txt` returned HTTP 200:

```txt
User-Agent: *
Allow: /

Sitemap: https://www.freego4k.com/sitemap.xml
```

Robots metadata:

- Rendered pages include `index, follow`.
- No accidental page-level `noindex` or `nofollow` found in local rendered output.
- No `X-Robots-Tag` blocking headers were observed in local checks.

Live robots:

- `https://www.freego4k.com/robots.txt` could not be fetched because `www.freego4k.com` returned DNS `NXDOMAIN`.

## G. Structured-data results

Schema types observed in local rendered output:

- Homepage: `FAQPage`, `Organization`
- Standard pages: `Organization`
- Blog articles: `BlogPosting`, `BreadcrumbList`, `Organization`

JSON-LD syntax:

- All inspected local JSON-LD blocks parsed successfully.
- Bad JSON-LD blocks: 0

First-party URL consistency:

- BlogPosting `url`, `mainEntityOfPage.@id`, `image`, author/publisher `url`: use `https://www.freego4k.com`.
- BreadcrumbList `item` values: use `https://www.freego4k.com`.
- Organization `url`: uses `https://www.freego4k.com`.
- Legitimate third-party JSON-LD context `https://schema.org` and WhatsApp contact URL are not first-party SEO URLs and were not flagged.

## H. Redirect results

Local redirect evidence:

- `curl -I -H 'Host: freego4k.com' http://127.0.0.1:3000/pricing` returned `HTTP/1.1 301 Moved Permanently` and `location: https://www.freego4k.com/pricing`.
- `curl -I -H 'Host: freego4k.com' 'http://127.0.0.1:3000/blog/iptv-technology-explained?utm=test'` returned `HTTP/1.1 301 Moved Permanently` and preserved the query string.
- `curl -I -H 'Host: www.freego4k.com' http://127.0.0.1:3000/pricing` returned HTTP 200.

Live redirect evidence:

- `http://freego4k.com/` returned HTTP 200 from `openresty/1.31.1.1`, not a redirect to `https://www.freego4k.com/`.
- `https://freego4k.com/` timed out.
- `http://www.freego4k.com/` failed DNS resolution.
- `https://www.freego4k.com/` failed DNS resolution.
- `https://freego4k.com/blog/iptv-technology-explained?utm=test` timed out.

Live DNS evidence:

- `freego4k.com` resolved to `54.149.79.189` and `34.216.117.25`.
- `www.freego4k.com` returned `NXDOMAIN`.

Conclusion: local application redirect intent is correct, but live DNS/hosting is not serving the canonical www deployment.

## I. Blog-by-blog results

All 11 published articles were individually audited locally from rendered HTML. Each returned HTTP 200, exactly one correct canonical, matching `og:url`, valid BlogPosting/BreadcrumbList JSON-LD, index/follow robots metadata, and sitemap inclusion.

| Article slug | HTTP | Canonical/OG | JSON-LD | Sitemap | Indexable | Status |
|---|---:|---|---|---|---|---|
| `iptv-technology-explained` | 200 | Correct | Correct | Yes | Yes | PASS local |
| `streaming-device-compatibility` | 200 | Correct | Correct | Yes | Yes | PASS local |
| `safe-iptv-setup-checklist` | 200 | Correct | Correct | Yes | Yes | PASS local |
| `iptv-buffering-troubleshooting` | 200 | Correct | Correct | Yes | Yes | PASS local |
| `electronic-program-guide-explained` | 200 | Correct | Correct | Yes | Yes | PASS local |
| `iptv-players-and-apps` | 200 | Correct | Correct | Yes | Yes | PASS local |
| `evaluate-streaming-service` | 200 | Correct | Correct | Yes | Yes | PASS local |
| `streaming-error-troubleshooting` | 200 | Correct | Correct | Yes | Yes | PASS local |
| `streaming-data-usage` | 200 | Correct | Correct | Yes | Yes | PASS local |
| `streaming-video-quality` | 200 | Correct | Correct | Yes | Yes | PASS local |
| `how-to-pay-for-freegotv-renewal` | 200 | Correct | Correct | Yes | Yes | PASS local |

Blog content QA:

- `node scripts/verify-blog-word-counts.mjs` passed.
- Total meaningful article words: 29,773.
- Script verified article metadata fields, duplicate titles/slugs, related slugs, internal article links against expected routes, minimum article length, FAQ/conclusion sections, and sitemap blog mapping source.

## J. Automated tests

| Command | Exit code | Result |
|---|---:|---|
| `npm run qa:domain` | 0 | PASS. Production domain QA passed for `https://www.freego4k.com`. |
| `node scripts/verify-blog-word-counts.mjs` | 0 | PASS. 11 articles, 29,773 total meaningful words. |
| `npm run typecheck` | 0 | PASS. |
| `npm run lint` | 0 | PASS. |
| `npm run build` | 0 | PASS. Next build generated 45 static pages/routes. |

No dedicated package scripts were found for duplicate-content verification, rendered internal-link crawling, or pricing verification beyond the scripts listed in `package.json`.

## K. Regression findings

Confirmed:

- Article slugs were preserved in `content/blog/index.json` and generated in `generateStaticParams`.
- All 11 blog routes render locally.
- Pricing, WhatsApp, contact, homepage, and navigation code paths were not modified during this audit.
- Git status before report creation was clean.

Not verified:

- No pre-migration baseline was available for article content, article word counts before migration, blog images before migration, homepage content before migration, design before migration, or pricing before migration.
- Live Vercel deployment behavior could not be verified as correct because canonical www DNS fails and apex live behavior does not match expected Vercel redirect behavior.

Unexpected source/build effects:

- `npm run build` generated/updated `.next` build output as expected. No source files were modified by tests/build.

## L. Findings by severity

### CRITICAL

Finding ID: `CRIT-001`  
Severity: CRITICAL  
Affected URL: `https://www.freego4k.com/`, `https://www.freego4k.com/sitemap.xml`, `https://www.freego4k.com/robots.txt`  
Evidence: `curl` failed with `Could not resolve host: www.freego4k.com`; `nslookup www.freego4k.com` returned `NXDOMAIN`.  
Why it matters: The official canonical production origin is not reachable by DNS. Google and users cannot fetch the canonical host, sitemap, robots file, or canonical pages.  
Recommended fix: Configure DNS for `www.freego4k.com` to the Vercel project according to Vercel domain instructions, then verify SSL issuance and HTTP 200 responses on the canonical host.  
Blocks deployment/indexing: **Yes**.

Finding ID: `CRIT-002`  
Severity: CRITICAL  
Affected URL: `http://freego4k.com/` and `https://freego4k.com/`  
Evidence: `http://freego4k.com/` returned HTTP 200 from `openresty/1.31.1.1` instead of redirecting; `https://freego4k.com/` timed out. DNS for apex resolved to `54.149.79.189` and `34.216.117.25`.  
Why it matters: The secondary/apex hostname is not redirecting to the canonical www host in live production. This can split indexing signals, prevent HTTPS access, and indicate the apex is not attached to the intended Vercel deployment.  
Recommended fix: Attach/configure `freego4k.com` in Vercel or DNS so apex permanently redirects to `https://www.freego4k.com/*` with path and query preservation.  
Blocks deployment/indexing: **Yes**.

### HIGH

None found in local source/rendered SEO output.

### MEDIUM

Finding ID: `MED-001`  
Severity: MEDIUM  
Affected file: `app/sitemap.ts:8` and `content/blog/index.json` article `modified` fields  
Evidence: Sitemap uses article `modified` values; all current blog sitemap `lastmod` values are `2026-09-28`. No baseline or git-content timestamp proof was available to independently verify these dates as actual modification dates.  
Why it matters: Fabricated or stale `lastmod` values can reduce sitemap trust. The values may be correct, but this audit cannot prove that from available evidence.  
Recommended fix: Ensure article `modified` values are updated only when meaningful content changes occur, ideally by editorial process or git-derived content metadata.  
Blocks deployment/indexing: **No**.

### LOW

Finding ID: `LOW-001`  
Severity: LOW  
Affected file: `lib/site-config.ts:7-11`  
Evidence: `socialLinks` values are `"#"` placeholders. They were not emitted as active SEO URL failures in rendered metadata during this audit.  
Why it matters: If surfaced in UI later, placeholder social links can create poor UX or weak brand trust.  
Recommended fix: Replace with real social URLs or remove unused placeholders before exposing them.  
Blocks deployment/indexing: **No**.

## M. Remaining manual Vercel tasks

Required before production readiness:

- Add/fix DNS for `www.freego4k.com` so it resolves to the intended Vercel deployment.
- Add/fix apex `freego4k.com` in Vercel/DNS so it permanently redirects to `https://www.freego4k.com/*`.
- Verify Vercel SSL certificates for both apex and www.
- Re-run live checks for homepage, sitemap, robots, a static route, a blog route, apex redirect, HTTP-to-HTTPS redirect, and query preservation.

No Search Console Change of Address recommendation is made because this audit did not establish a controlled, previously indexed old domain migration from `freegotv.com`.

## N. Google Search Console readiness

Status: **NOT READY**

The local implementation is ready in shape, and the sitemap URL intended for submission is:

`https://www.freego4k.com/sitemap.xml`

Do not submit yet from this audit's evidence because the canonical www host does not resolve live. After DNS/SSL/redirect fixes, re-test and then submit the sitemap to the `https://www.freego4k.com` property. URL inspection is appropriate only after the canonical host returns live HTTP 200 and robots/sitemap are fetchable.

## O. Final compliance matrix

| Check | Expected | Actual evidence |
|---|---|---|
| Official origin | `https://www.freego4k.com` | Configured in `lib/site-config.ts:3`; live DNS for www fails |
| Canonical host | `www.freego4k.com` | Local rendered canonicals use www; live host NXDOMAIN |
| Wrong-host canonicals | 0 | 0 local rendered |
| Duplicate canonicals | 0 | 0 local rendered; exactly one per route |
| Wrong-host OG URLs | 0 | 0 local rendered |
| Wrong-host JSON-LD URLs | 0 | 0 local rendered |
| Old first-party domain SEO references | 0 | 0 found in active source/rendered checks |
| Wrong-host sitemap URLs | 0 | 0 local sitemap |
| Duplicate sitemap URLs | 0 | 0 local sitemap |
| Missing indexable blog URLs | 0 | 0 local sitemap; all 11 included |
| Robots sitemap | `https://www.freego4k.com/sitemap.xml` | Correct locally |
| Broken internal links | 0 | 0 found by blog verifier for article links; no rendered crawl script exists |
| Accidental production noindex | 0 | 0 local rendered |
| Redirect loops | 0 | 0 local; live redirect not correctly configured |
| Local QA | PASS | `qa:domain`, blog verifier, typecheck, lint, build all passed |
| Build | PASS | `npm run build` exit 0 |
| Live DNS | VERIFIED / NOT VERIFIED | **NOT VERIFIED / FAIL**: www NXDOMAIN |
| Live SSL | VERIFIED / NOT VERIFIED | **NOT VERIFIED**: canonical host does not resolve; apex HTTPS times out |
| Live redirect | VERIFIED / NOT VERIFIED | **NOT VERIFIED / FAIL**: apex HTTP returns 200, HTTPS times out |
| GSC readiness | READY / NOT READY / CONDITIONAL | **NOT READY** |

