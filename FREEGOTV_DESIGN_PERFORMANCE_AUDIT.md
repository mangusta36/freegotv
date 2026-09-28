# FreeGoTV Design, Performance, UX, and Accessibility Audit

**Audit date:** September 23, 2026  
**Scope:** Entire local FreeGoTV project and its 15 public content routes  
**Audit mode:** Read-only inspection and testing. No application source, dependency, or configuration fixes were made. This report is the only requested deliverable.

## 1. Executive summary

FreeGoTV is a visually coherent, modern, and unusually lightweight marketing site. Its strongest technical choices are the Next.js App Router, static prerendering of every public route, a small source surface, no image or font downloads, no third-party scripts, and restrained client-side state. The production build succeeds, TypeScript passes, all tested routes return HTTP 200, and browser inspection found no horizontal overflow at 320, 375, 390, 430, 768, 1024, 1280, 1440, or 1920 CSS pixels.

The site looks professional at first glance. The red, black, white, and zinc palette is consistently applied; the homepage explains the offer immediately; calls to action are prominent; cards and spacing form a dependable system; and the mobile layout is deliberately rearranged rather than merely scaled down. The CSS-rendered hero visual is sharp at every density and avoids a large LCP image.

The primary weaknesses are not raw speed. They are functional credibility and conversion readiness:

1. Every trial, contact, affiliate, and reseller form displays a success state without sending data anywhere.
2. “Client Area” is a link to the ordinary contact page, not a client area.
3. Paid-plan actions lead to a generic contact form; there is no checkout even though the FAQ says payment options appear at checkout.
4. Installation cards all lead to the same generic four-step section rather than device-specific guides.
5. White text on the main red button color measures only **3.85:1**, below WCAG AA for normal text; white on the WhatsApp green measures **1.98:1**.
6. Framer Motion is used for simple reveal, accordion, menu, and pricing transitions and adds about **45–48 kB** of first-load JavaScript on the routes that use the fuller animation bundle.
7. Motion does not honor `prefers-reduced-motion`, while the WhatsApp control continuously animates.
8. All internal routes declare the homepage as canonical, and the promised large social preview has no image.

### Overall assessment

| Area | Assessment |
|---|---|
| Visual professionalism | Good: polished and consistent, though generic in places |
| Homepage effectiveness | Good: proposition and main CTAs are clear above the fold |
| Performance | Very good in local lab testing; no field data was available |
| Lightweight architecture | Good, with a clear Framer Motion reduction opportunity |
| Responsive quality | Good; no overflow or broken grids at requested widths |
| Accessibility | Fair: strong structure/forms, but contrast, motion, target size, and control-state semantics need work |
| Conversion readiness | Weak: lead submission, client area, checkout, and detailed install flows are placeholders |
| Production readiness | Not ready for real acquisition until the functional placeholders are resolved |

No critical crash, routing failure, broken production build, failed local request, or horizontal overflow was found. The highest-severity findings are classified **High**, not Critical, because the site renders and navigates but cannot reliably complete its central business actions.

## 2. Audit method and limitations

### Inspected and tested

- All files in `app/`, `components/`, and `lib/`
- `package.json`, `pnpm-lock.yaml`, Next.js, Tailwind, PostCSS, TypeScript, and ESLint configuration
- Production build output and route bundle report
- Routes: `/`, `/pricing`, `/free-trial`, `/reseller`, `/install`, `/channels`, `/affiliate`, `/restream`, `/nfl`, `/contact`, `/faq`, `/privacy`, `/terms`, `/refund`, and `/disclaimer`
- Generated `/robots.txt` and `/sitemap.xml`
- Browser rendering at all nine requested widths
- Important desktop/mobile pages with Chromium screenshots
- Response status, rendered HTML size, DOM size, request count, failed requests, labels, headings, overflow, and local lab timing
- Color contrast calculations for the core palette

### Test results and limitations

- `npm run build`: **passed**; all 20 generated entries were statically rendered.
- `npm run typecheck`: **passed**.
- Source-only ESLint (`app components lib`): **passed**.
- `npm run lint`: **failed** because ESLint also scans generated `.next` JavaScript; the reported seven errors are in generated Webpack files, not application source.
- Lighthouse was not installed, and installing it was outside this audit's authorization. Therefore no Lighthouse score is reported.
- The configured live URL `https://freegotv.eu.cc` could not be resolved from the audit environment, so local-versus-live comparison was not possible.
- No analytics/RUM source was present. LCP, CLS, and TBT below are local laboratory measurements, not real-user field data.
- INP requires real user interactions over a page lifetime. A defensible field INP could not be measured, so none is invented.
- Screenshots are temporary audit artifacts under `/tmp`; the durable findings are documented here.

## 3. Project architecture

### Stack and exact installed versions

| Concern | Implementation |
|---|---|
| Framework | Next.js **15.5.23**, App Router |
| UI runtime | React **19.2.8**, React DOM **19.2.8** |
| Language | TypeScript **5.9.3**, strict mode |
| Styling | Tailwind CSS **3.4.19** plus 36 lines of global CSS and CSS variables |
| Animation | Framer Motion **12.43.0** |
| Icons | Lucide React **0.468.0** |
| Fonts | Local system stack: Arial, Helvetica, sans-serif; no font network request |
| Images/media | No `public` media files, `<img>`, or `next/image` usage |
| Routing | File-system App Router; 15 content routes plus robots and sitemap |
| Rendering | All routes statically prerendered (`○`) in the production build |
| External scripts | None found |
| External destinations | Email, WhatsApp, and placeholder social links |

The installed versions above come from the lockfile, not the version ranges in `package.json`.

### Routing and rendering

The architecture is appropriate for a small production marketing site. `app/layout.tsx` supplies shared navigation, footer, floating support control, metadata, and Organization structured data. Route pages are Server Components by default. Only five components opt into client rendering:

- `Navbar` for route state and the mobile menu
- `FAQ` for accordion state
- `PricingTabs` for plan selection
- `ChannelExplorer` for filtering
- `RequestForm` for its simulated success state
- `Reveal` is also client-rendered solely for viewport animation

That boundary is mostly disciplined. Static page content stays on the server and is prerendered. The clearest avoidable client cost is `Reveal`, plus using Framer Motion for interactions that CSS, `<details>`, or a small local transition could handle.

### Dependencies

Every production dependency has verified usage:

- `next`, `react`, and `react-dom` form the runtime.
- `tailwindcss` drives all layout and component styling.
- `lucide-react` is used throughout pages and components.
- `framer-motion` is imported by four interactive/animated components.
- TypeScript and the React/Node type packages are used for compilation, although they belong more conventionally in `devDependencies`.

No production dependency is demonstrably unused. The explicit ESLint plugin set may overlap with `eslint-config-next`, but removing any package should wait for dependency-tree verification during implementation.

### Architectural concerns

- `RequestForm` has no server action, API route, endpoint, or external form service.
- Root metadata applies one homepage canonical to every route.
- There is no `loading.tsx`, `error.tsx`, or async application flow. That is acceptable for current static pages but insufficient once forms/checkout become real.
- `package.json` has no `packageManager` or `engines` field. The repository contains a pnpm lockfile, but Corepack pnpm failed under the available Node 24 runtime; npm could run the existing install. Toolchain pinning would improve reproducibility.
- Some page components compress entire sections onto single source lines. Runtime behavior is unaffected, but review and maintenance are harder.

## 4. Design analysis

### What works well

- **Brand consistency:** `#ff1744`, near-black surfaces, white, and zinc neutrals repeat consistently across all audited pages.
- **Hierarchy:** Every page has one clear `h1`; eyebrow, headline, supporting copy, and CTA patterns are predictable.
- **Homepage first impression:** At 1440 px the complete offer, two CTAs, two reassurance points, and a bespoke streaming mockup are visible in the first viewport. A visitor can understand “authorized TV streaming across devices with a free trial” quickly.
- **Homepage mobile composition:** At 375 px the CTA becomes full-width, reassurance points wrap cleanly, and the visual moves below the copy. This feels intentionally stacked.
- **Spacing and cards:** Reusable `container-page`, `section-space`, `card`, button, and heading styles create a stable rhythm.
- **Pricing:** Period and connection controls are discoverable, and price changes are visually prominent.
- **Footer:** Information architecture is comprehensive and legible on mobile and desktop.
- **Visual restraint:** There are no heavy carousels, videos, stock photos, or decorative asset downloads.
- **Internal-page consistency:** Shared page heroes and CTA panels give the site a coherent family resemblance.

### What limits the professional impression

- The letter-in-a-square logo, Arial typography, CSS dashboard mockups, and repeated icon-card pattern look polished but somewhat template-like. They do not provide strong product proof or a distinctive streaming identity.
- The homepage is **7,167 px tall at 375 px** and **7,483 px at 320 px**. Nothing is broken, but repeated cards, a second trial panel, devices, FAQ, CTA, and footer make the mobile journey long.
- CSS mockups display apparently real business metrics—such as “248” clients, “+18%,” “€4,280,” “1.2K clicks,” “€428,” and “99.98%”—without an “illustrative” label. This may reduce trust if visitors read them as verified claims.
- The floating WhatsApp control is visually dominant and can sit over bottom-right content on small screens, as observed on channels/contact captures.
- The navigation has nine primary links. It remains readable at 1440 px, but it is dense and switches to the mobile menu below the `xl` breakpoint.
- Social icons are visually finished but link to `#`, undermining the otherwise professional footer.

The existing palette, hero composition, reusable cards, section headings, CTA panels, and responsive grid system should remain. A wholesale redesign is not warranted.

## 5. Responsive analysis

### Measured results

| Width | Homepage document width | Horizontal overflow | Homepage height | Navigation mode |
|---:|---:|---|---:|---|
| 320 | 320 | None | 7,483 px | Menu button |
| 375 | 375 | None | 7,167 px | Menu button |
| 390 | 390 | None | 6,974 px | Menu button |
| 430 | 430 | None | 6,952 px | Menu button |
| 768 | viewport minus scrollbar | None | 5,270 px | Menu + Client Area |
| 1024 | viewport minus scrollbar | None | 4,525 px | Menu + Client Area |
| 1280 | viewport minus scrollbar | None | 4,317 px | Full navigation |
| 1440 | viewport minus scrollbar | None | 4,317 px | Full navigation |
| 1920 | viewport minus scrollbar | None | 4,317 px | Full navigation |

All important internal routes were additionally rendered at 375 and 1440 px. No text overflow, broken card grid, incorrectly scaled image, sticky-header collision, or failed route was observed.

### Mobile-specific findings

- The 320–430 px hero is readable, and both CTAs remain reachable.
- The pricing period selector intentionally scrolls horizontally; on mobile the “Semi-Annually” label is partially cut at the right edge, which hints at scrolling but makes the last option less immediately discoverable.
- Cards correctly collapse to one column, countries to two columns, and forms to one column.
- The 72 px sticky header is stable, and the menu is capped at the remaining viewport height with its own vertical scrolling.
- Pricing connection buttons are 44×44 px, which is good.
- Several other controls are smaller than 44 px: the social buttons are 36×36 px, the mobile period controls can be below 44 px high, and many text links have line-height-sized hit areas. These are not all WCAG 2.2 AA failures because spacing exceptions may apply, but they are less comfortable on touch screens.
- The floating support control can overlap page content while scrolling. It is especially noticeable over country/support cards near the right edge.
- Long mobile pages create substantial scrolling. The issue is content density, not a broken layout.

## 6. Performance results

### Production build output

| Route group | First Load JS |
|---|---:|
| Legal pages | 102 kB |
| Contact/free trial | 104 kB |
| Channels | 105 kB |
| Install/restream | 106 kB |
| Reseller | 107 kB |
| Homepage/FAQ/NFL | 149 kB |
| Affiliate/pricing | 150 kB |

- Shared first-load JavaScript: **102 kB** (Next build report)
- Compiled CSS: **28,823 bytes uncompressed** in one file
- Largest route-rendered HTML response: homepage, **79,077 bytes**
- Other content-route HTML responses: approximately **31–61 kB**
- Homepage rendered DOM: **397–399 elements**, a moderate size
- Images loaded: **0**
- Failed browser requests: **0**
- Render-blocking external fonts/scripts: **0**

### Local lab measurements

The mobile profile used a 390×844 viewport, cold cache, 4× CPU throttling, 150 ms latency, and approximately 1.6 Mbps download. Desktop used a 1440×900 viewport, cold cache, and no CPU/network throttling. Values are medians of three homepage runs.

| Metric | Mobile simulated constrained profile | Desktop local unthrottled |
|---|---:|---:|
| FCP | **616 ms** | **220 ms** |
| LCP | **616 ms** | **220 ms** |
| CLS | **0.000** | **0.000** |
| TBT | **114 ms** | **0 ms** |
| Load event | **1,243 ms** | **203 ms** |
| Resource requests observed | **13** | **26** |
| Transfer observed | **174,334 bytes** | **224,358 bytes** |

Desktop request count is higher because visible Next.js navigation links are prefetched; the collapsed mobile navigation does not expose the same set for immediate prefetch. That behavior can make later navigation faster and is not automatically a defect.

### Core Web Vitals interpretation

- **LCP:** Excellent in this local lab. The LCP is text because there is no hero image. Real hosting latency may change the result.
- **CLS:** Excellent; no shift was measured on almost all pages. The only nonzero sample was `/nfl` desktop at **0.00083**, effectively negligible.
- **INP:** No real-user field data exists, and a page-load lab cannot establish a valid site INP. The interactions are simple, but no numeric INP claim is made.
- **FCP/TBT:** Strong. One initial unthrottled 320 px run recorded 161 ms TBT, while subsequent unthrottled route runs were 0 ms; constrained three-run median was 114 ms.

### Performance risks and opportunities

- Framer Motion correlates with routes increasing from roughly 102–107 kB to 149–150 kB first-load JS. Removing the library completely from these simple interactions offers a measured opportunity of about **45–48 kB per affected initial route**, subject to confirmation after implementation.
- The continuous `box-shadow` pulse on the WhatsApp control repaints indefinitely and is not disabled for reduced motion.
- `Reveal` makes six otherwise static homepage cards client-animation participants. This is a small runtime cost but unnecessary for comprehension.
- No evidence of expensive render computation, runaway listeners, memory leaks, large images, font blocking, or third-party-script overhead was found.

## 7. Images and media

There are no project images or media assets to optimize. `public/` contains no files; source inspection found no `<img>` or `next/image`; browser inspection reported zero images on every tested page.

Consequences:

- There are no oversized, duplicate, uncompressed, incorrectly dimensioned, or improperly lazy-loaded images.
- There is no image-related LCP problem.
- Responsive visual sharpness is excellent because icons and hero mockups are SVG/CSS.
- There is no need to add WebP/AVIF merely for optimization.
- The tradeoff is brand/product authenticity: there is no product screenshot, content artwork, testimonial imagery, or social sharing image. If imagery is added later, the primary LCP visual should be prioritized rather than lazy-loaded, and below-fold media should use responsive dimensions and lazy loading.

## 8. Animations and interactions

### Appropriate uses

- Hover translations are subtle and consistently use transforms.
- Pricing changes use a short 180 ms opacity/translate transition.
- Accordion and mobile-menu transitions help users understand expanded state.
- The homepage reveal runs once rather than continuously.

### Concerns

- `FAQ` and `Navbar` animate `height: auto`, which requires layout work. The components are small, so no lag was observed, but CSS grid-template transitions or native disclosure behavior could be lighter.
- `Reveal` animates content solely for decoration and delivers additional client code.
- The WhatsApp `pulseSoft` animation changes `box-shadow` forever, causing repeated painting.
- No `prefers-reduced-motion` CSS or Framer `useReducedMotion` path exists.

No visible scroll lag, animation-induced layout shift, or excessive animated background was found in browser testing.

## 9. Code quality and lightweight architecture

### Strong points

- Small codebase: 653 source lines across app/components/lib at audit time.
- Clear reusable primitives for buttons, cards, headings, heroes, legal pages, and CTAs.
- Server Components are the default.
- State is local and minimal.
- Channel filtering uses `useMemo`, though the 12-item dataset would also be cheap without it.
- No duplicate third-party utilities, global state manager, data-fetching framework, or oversized UI kit.
- No unused imports or source ESLint errors were reported.
- Strict TypeScript passes.

### Maintainability concerns

- Many complete pages and components are written as very long single lines, making diffs and accessibility review difficult.
- `RequestForm` mixes UI state with a knowingly nonfunctional submit path.
- Pricing controls lack a semantic tab/radio model.
- The lint script includes generated output because `.next` is not excluded in flat config.
- Toolchain versions are not pinned with `packageManager`/`engines`.
- Types/compiler packages are in `dependencies` rather than `devDependencies`; this does not increase the browser bundle, but it weakens dependency intent.

## 10. UX and conversion journey

### New visitor journey

The homepage communicates the product, trial, device support, key features, and FAQ in a logical order. Pricing, installation, channels, and trial pages are all reachable from the main navigation. The primary CTA wording is consistent.

The journey breaks at the point of commitment:

- Trial submission is simulated.
- “Choose plan” goes to contact rather than a purchase/checkout path.
- “Client Area” is not a login or dashboard.
- Install cards do not provide device-specific instructions.
- Support hours are described as available in client communication/client area, but the public site has no actual client area or schedule.
- Social links do nothing.
- There are no real loading, submission failure, server validation, retry, or confirmation states.

These issues can cause lost leads and mistrust. No conversion-rate claim can be made without analytics.

## 11. Accessibility

### What is implemented well

- One `h1` per tested page and generally orderly `h2`/`h3` usage.
- Real buttons and links are used rather than clickable generic containers.
- Form fields are wrapped in visible labels.
- Channel search has a programmatic label.
- Menu and FAQ buttons expose `aria-expanded`.
- Decorative CTA arrows use `aria-hidden`.
- The floating support link and social icon links have accessible names.
- Inputs have visible focus rings; shared CTA buttons have `focus-visible` styling.
- The browser audit found zero unlabeled form controls.

### Problems

- White normal-sized text on `--primary: #ff1744` is **3.85:1**, below 4.5:1. The darker hover color reaches **5.10:1**.
- White on WhatsApp green is **1.98:1**. The desktop “We are here!” label fails normal-text contrast.
- Red-600 eyebrow text on red-50 is **4.41:1**, narrowly below 4.5:1 for normal-sized text.
- Motion lacks a reduced-motion alternative.
- Pricing period selection is visual only: the labeled container has no `tablist`/radio role, and buttons have no `aria-selected` or `aria-pressed`.
- Country and category filter buttons similarly omit `aria-pressed`.
- Accordion buttons do not connect to panels with `aria-controls`/panel IDs.
- Some touch/click targets are below 44×44 px; the 36×36 social buttons are the clearest example.
- Fixed WhatsApp UI can cover content at small sizes.
- There is no skip link to bypass the nine-item navigation.

## 12. Detailed issues table

| ID | Affected page/component | File and line | Description and evidence | User impact | Severity | Recommended solution |
|---|---|---|---|---|---|---|
| FGT-01 | All request forms | `components/RequestForm.tsx:7-11` | Submit only prevents default and sets `sent=true`; the success copy explicitly says it “would send” in a live deployment. No server action/API exists. | Visitors believe a trial/contact/application was sent when nothing was delivered. | **High** | Connect to an authenticated server action/API or approved form provider; add server validation, pending, error, retry, and genuine confirmation states. |
| FGT-02 | Header Client Area | `components/Navbar.tsx:22,31` | Both Client Area links point to `/contact`. | Returning customers cannot reach account functions; label and destination conflict. | **High** | Link to the real authenticated portal, or rename/remove the CTA until one exists. |
| FGT-03 | Paid-plan conversion | `components/PricingCard.tsx:15`; `lib/faq.ts:8` | “Choose plan” routes to generic contact while FAQ says payment methods appear at secure checkout. No checkout route exists. | Purchase intent meets an unexpected manual step; trust and completion suffer. | **High** | Create the intended checkout/lead flow and make pricing/FAQ wording match the real process. |
| FGT-04 | Install/device cards | `components/DeviceCard.tsx:12`; `app/install/page.tsx:10-12` | Every device's “View guide” points to one generic four-step flow. | Users cannot get the promised device-specific setup help. | **High** | Add per-device guides/anchors with exact official app, sign-in, and troubleshooting steps. |
| FGT-05 | All primary buttons | `app/globals.css:6,23-27` | Calculated white-on-primary contrast is 3.85:1; normal 14 px bold button text needs 4.5:1. | Low-vision users may struggle to read the primary action. | **Medium** | Use the existing darker red (5.10:1) or another brand-safe color that passes in default state. |
| FGT-06 | Floating WhatsApp control | `components/WhatsAppButton.tsx:5-6`; `tailwind.config.ts:14-15` | White-on-green is 1.98:1; fixed control overlaps bottom-right content; box-shadow animates continuously. | Readability, distraction, motion sensitivity, and obscured content on mobile. | **Medium** | Darken text/background combination, reserve safe page space or collapse intelligently, and stop animation under reduced motion. |
| FGT-07 | Site animations | `components/Reveal.tsx:7`; `FAQ.tsx:15`; `Navbar.tsx:28`; `PricingTabs.tsx:17`; `app/globals.css:15` | No `prefers-reduced-motion` handling; smooth scrolling is always enabled. | Motion-sensitive users cannot opt out. | **Medium** | Add a reduced-motion media query and conditional Framer behavior; disable smooth scrolling and continuous pulse when requested. |
| FGT-08 | Animated routes | Same animation files as FGT-07 | Next build reports 149–150 kB first-load JS versus 102–107 kB on simpler routes, a 45–48 kB measured difference. Interactions are simple. | More parse/hydration work, especially on low-end mobile. | **Medium** | Replace reveal/menu/accordion/pricing effects with CSS/native primitives where behavior remains equivalent; remeasure before removing the dependency. |
| FGT-09 | Pricing selector | `components/PricingTabs.tsx:13-18` | Visual tabs have only a container `aria-label`; no tablist/radio semantics or selected-state attribute. Mobile strip overflows horizontally. | Screen-reader state is unclear; last periods are less discoverable on small screens. | **Medium** | Use tabs or radio-group semantics, roving/arrow-key behavior as appropriate, `aria-selected`/`aria-pressed`, and a clearer mobile affordance. |
| FGT-10 | Channel filters | `components/ChannelExplorer.tsx:13-15`; `components/CountryCard.tsx:5` | Selected country/category is conveyed visually but not with `aria-pressed`; result updates are not announced. | Assistive-technology users may not know filter state or result changes. | **Medium** | Add pressed state and an `aria-live="polite"` result summary. |
| FGT-11 | Footer social links | `lib/site-config.ts:8-12`; `components/Footer.tsx:7,10` | X, Instagram, and Facebook all use `#`. | Controls look real but only jump to the page top. | **Medium** | Add real destinations and safe external-link behavior, or omit the icons until accounts exist. |
| FGT-12 | SEO metadata | `app/layout.tsx:12-14` | Rendered `/pricing` and `/contact` both emitted `https://freegotv.eu.cc` as canonical. `summary_large_image` has no image tag. | Search engines may consolidate internal pages into the homepage; shared links lack intended preview media. | **High** | Generate route-specific canonicals and add a real OG/Twitter image (or change the card type). |
| FGT-13 | Illustrative dashboards | `components/ResellerVisual.tsx:6`; `app/affiliate/page.tsx:13`; `app/restream/page.tsx:12` | Specific revenue, growth, approval, and reliability figures appear without being labeled demo data. | Visitors may interpret design mockup values as substantiated company claims. | **Medium** | Mark them clearly as illustrative/sample data or replace with neutral UI placeholders backed by real facts. |
| FGT-14 | Homepage/mobile content length | `app/page.tsx:23-26`; shared footer | Browser measurement: 7,483 px at 320 and 7,167 px at 375. Layout is intact but card-heavy. | Key decision content and footer require extensive scrolling. | **Low** | After analytics/user testing, consider reducing repeated mobile card detail or progressive disclosure without removing essential proof. |
| FGT-15 | Touch targets | `components/Footer.tsx:10`; `PricingTabs.tsx:14`; navigation text links | Social controls are explicitly 36×36; multiple text/period controls are below 44 px in browser geometry. | Less comfortable for users with motor impairments or one-handed mobile use. | **Medium** | Increase the clearest action targets to at least 44×44 where practical and maintain adequate spacing for smaller inline links. |
| FGT-16 | Accordion relationships | `components/FAQ.tsx:11-15` | Buttons expose expansion state but no `aria-controls`; panels have no IDs/region association. | Screen-reader relationship between question and answer is weaker than necessary. | **Low** | Add stable IDs, `aria-controls`, and labelled panel semantics, or use a well-implemented native disclosure. |
| FGT-17 | Build linting | `eslint.config.mjs:6-7`; `package.json:8` | `npm run lint` scans `.next` and reports seven generated-code errors, while source-only ESLint passes. | CI can fail or hide genuine source lint problems in generated noise. | **Medium** | Ignore `.next`, coverage, and other generated directories in flat ESLint config. |
| FGT-18 | Toolchain reproducibility | `package.json`; `pnpm-lock.yaml` | pnpm lockfile exists but `packageManager`/Node engines are absent; Corepack pnpm failed under available Node 24, while npm ran the installed tree. | Fresh builds may vary or fail across environments. | **Low** | Pin supported Node and pnpm versions and document the canonical install/build command. |
| FGT-19 | Support information | `app/contact/page.tsx:8`; `lib/faq.ts:7` | Contact page does not state hours; FAQ says hours are in the client area, which is actually the contact page. | Users cannot set expectations for support response. | **Medium** | Publish truthful hours/time zone and response expectations, then align FAQ and client communications. |
| FGT-20 | Navigation bypass | `app/layout.tsx:20`; `components/Navbar.tsx` | Sticky site-wide navigation has nine primary items but no skip-to-content link or main ID. | Keyboard users repeat a long tab sequence on every page. | **Low** | Add a visible-on-focus skip link targeting the main content. |
| FGT-21 | Source readability | Examples: `app/affiliate/page.tsx:13`; `app/nfl/page.tsx:11`; `components/RequestForm.tsx:11` | Entire complex pages/components are on single lines. | Reviews, diffs, and future defect isolation are harder. | **Low** | Apply the project's formatter and keep logical JSX blocks multiline; no UI change required. |
| FGT-22 | Distinctive proof/brand assets | `components/Logo.tsx:5-7`; `components/Hero.tsx:16-24`; `app/globals.css:16` | Lettermark, system Arial, and CSS mockups are fast and coherent but provide limited authentic product proof. | Site can feel generic despite good polish. | **Low** | Preserve the palette/layout; add only verified proof such as a real product capture, rights/availability explanation, or support evidence. Keep assets optimized. |

## 13. Lightweight optimization opportunities

Prioritize measured, low-complexity changes:

1. **Reduce/remove Framer Motion only after reproducing interactions.** Potential first-load reduction is approximately 45–48 kB on affected routes based on the production route report. Risk: animation and focus behavior can regress if replacements are rushed.
2. **Remove decorative client animation from feature cards.** `Reveal` turns static content into client-managed animated nodes. CSS plus reduced-motion support can preserve the feel.
3. **Use native/CSS disclosure and menu transitions where appropriate.** This also simplifies height animation.
4. **Review desktop route prefetch deliberately.** The desktop lab observed 26 requests versus 13 mobile because nine visible nav links are eligible for prefetch. Keep prefetch for likely routes; consider disabling it only for low-probability campaign pages after real navigation data.
5. **Do not add image optimization infrastructure yet.** There are no images. If authentic imagery is introduced, optimize the actual added files rather than adding complexity preemptively.
6. **Keep the system font unless stronger brand differentiation is worth the font cost.** The current font strategy is excellent for speed.
7. **Move type/compiler packages to dev dependency intent during normal dependency maintenance.** This will not materially change client JavaScript by itself.

## 14. Prioritized action plan

### Priority 1 — functionality, trust, and conversion

1. Implement real submission for trial, contact, affiliate, and reseller forms, including secure validation, abuse controls, pending/error/success states, and data handling disclosures.  
   **Benefit:** restores the site's core lead-generation function. **Complexity:** medium–high. **Risk:** privacy, deliverability, spam, and backend failure handling.
2. Decide and implement the real plan purchase path; align pricing, checkout, FAQ, refund, and confirmation wording.  
   **Benefit:** removes the largest paid-conversion break. **Complexity:** high. **Risk:** payment, tax, consumer-law, and subscription lifecycle requirements.
3. Make “Client Area” truthful—real portal destination or renamed support CTA.  
   **Benefit:** immediate clarity and trust. **Complexity:** low if renamed, high if the portal must be built. **Risk:** exposing an unfinished/authentication route.
4. Supply real device-specific install guides.  
   **Benefit:** fulfills a major promise and reduces support friction. **Complexity:** medium. **Risk:** instructions becoming stale; establish ownership/versioning.
5. Correct route canonicals and social metadata.  
   **Benefit:** protects discoverability and link presentation. **Complexity:** low–medium. **Risk:** incorrect absolute URLs if environment handling is not tested.

### Priority 2 — accessibility, mobile comfort, and performance

1. Correct main-red and WhatsApp text contrast while preserving the brand palette.  
   **Benefit:** WCAG readability and clearer actions. **Complexity:** low. **Risk:** minor visual change.
2. Add reduced-motion behavior; stop the pulse for affected users.  
   **Benefit:** accessibility and lower continuous repaint cost. **Complexity:** low. **Risk:** none if tested.
3. Add semantic selected states to pricing and channel controls; improve FAQ relationships and result announcements.  
   **Benefit:** screen-reader and keyboard clarity. **Complexity:** medium. **Risk:** state/keyboard regression without tests.
4. Prevent the floating support control from covering mobile content and enlarge priority touch targets.  
   **Benefit:** more comfortable small-screen use. **Complexity:** low–medium. **Risk:** CTA visibility tradeoff.
5. Replace simple Framer Motion use with lighter primitives, then compare route bundles and interaction quality.  
   **Benefit:** potential 45–48 kB reduction on affected first loads. **Complexity:** medium. **Risk:** visual/focus regressions.
6. Mark dashboard figures as illustrative or use verified values.  
   **Benefit:** improves trust and claim hygiene. **Complexity:** low. **Risk:** none.

### Priority 3 — refinement and maintainability

1. Add real social destinations or remove placeholders.
2. Publish support hours/response expectations.
3. Add a skip link.
4. Exclude generated output from linting and pin Node/pnpm versions.
5. Format long JSX lines for maintainability.
6. Use analytics and user testing to decide whether the long mobile homepage should be shortened.
7. Add authentic, optimized product proof only when verified content is available.

## 15. Final conclusion

### Does FreeGoTV currently look professional?

**Yes, visually.** It is consistent, modern, readable, and more polished than a typical unfinished marketing site. The design becomes less professional when users encounter placeholder social links, mock metrics, a mislabeled client area, or a form that admits it did not send.

### Is the homepage visually effective?

**Yes.** The proposition, free-trial offer, primary actions, quality/device message, and support promise are clear. The desktop hero is strong, and the mobile hero is intentionally composed. Its main design weaknesses are generic proof/branding and excessive mobile length, not hierarchy or responsiveness.

### Is the website lightweight?

**Mostly yes.** Static rendering, no images, no fonts, no third-party scripts, 28.8 kB uncompressed CSS, and 102–150 kB first-load JS are strong. Framer Motion is the one material avoidable weight for the simplicity of the effects.

### Is the mobile experience well optimized?

**The layout is, the complete journey is not.** All requested widths render without horizontal overflow or broken grids, but pages are long, some targets are small, the pricing strip needs clearer discoverability, and the floating support control can cover content.

### Are there unnecessary animations or dependencies?

**There are no clearly unused production dependencies.** Framer Motion is used, but its cost is disproportionate to the simple effects and is the best dependency-reduction candidate. The continuous WhatsApp pulse is the least useful animation and lacks reduced-motion handling.

### What are the most important changes needed?

Real form delivery, a truthful client-area/purchase journey, device-specific guides, correct canonicals, accessible contrast/motion, and semantic interactive states—in that order.

### Which existing components should remain unchanged in concept?

Keep the brand palette concept, overall homepage structure, hero composition, shared page hero, card/grid language, section-heading hierarchy, CTA panels, static App Router architecture, system-font loading strategy, icon approach, pricing visual presentation, and responsive breakpoints. They work well. Improvements should correct function, semantics, evidence, and efficiency rather than replace the site's identity.

