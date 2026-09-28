# FreeGoTV US keyword analysis

## Evidence and method

Source: `toutes les catégories-freegotv-en-us-23-09-2026.xlsx`, read in full with openpyxl, including all five worksheets. Export date: September 23, 2026; seed: freegotv; English; United States. No additional worksheets present.

Google: 18 raw keyword rows, 15 distinct keywords. Bing: 15 raw rows, 11 distinct keywords. Combined: 33 rows, 26 platform-keyword pairs, **22 distinct keyword strings**. Repeated rows are preserved below, not counted as additional demand.

Volumes and CPC are exported estimates, not Search Console impressions, clicks, visits or verified demand. The workbook does not specify the measurement period or methodology. No cross-platform addition was performed. `1.0K` is retained verbatim (approximately 1,000 if numerically interpreted). A dash means unavailable, not zero. All keyword intents below are analyst interpretations; search sheets do not supply intent labels.

ChatGPT and Gemini each contain an account-upgrade notice, not unlocked prompts, intent or sentiment data. This does not establish absence of searches. Instagram contains one hashtag and two account discoveries; it supplies neither proof of account ownership nor comparable web-search demand. Its brand hashtag estimate remains separate.

## Complete deduplicated mapping

G = Google; B = Bing; I = Instagram hashtag. Entries show volume / CPC in US dollars. “Missing” means the sheet has no row for that term. Restrictions apply even when a keyword has positive volume. No keyword warrants a new page in this implementation.

| Original keyword | Platform estimate / CPC | Intent and group | Existing destination | Prior adequacy | Placement / additional content decision and restrictions |
|---|---|---|---|---|---|
| freegotv | G 1.0K / 2.05; I 1.0K / 2.05 | Brand navigation | / | Partial | Homepage title, H1, short introduction; explain site purpose. Instagram value is independent; do not infer official social accounts. |
| freegotv iptv | G 140 / –; B 140 / – | Brand/service research | / | Partial | Homepage title and about heading; concise service description. Do not add the engine estimates. |
| freegotv subscription | G 10 / – | Subscription comparison | /pricing | Mostly | Existing plans plus clearer metadata, branded H1 and contextual setup/trial links. Prices and plan details locked. |
| freegotv iptv subscription | G 0 / –; B 0 / – | Subscription comparison | /pricing | Mostly | Same page and intent as subscription; no separate page or checkout. |
| freegotv iptv free trial | G 0 / –; B 0 / – | Trial evaluation | /free-trial | Mostly | IPTV trial title/description; retain existing 24-hour terms and form. Demo form is not connected to a backend. |
| freegotv app | G 20 / –; B 20 / – | App discovery/setup | /install | Partial | App & Installation Guide title; explain confirming app name and source. No official FreeGoTV app or download URL verified, so no app claim, APK or SoftwareApplication schema. |
| how to install freegotv | G 0 / – | Setup instructions | /install | Partial | Existing installation H1 and four general steps; distinguish general guidance from model-specific instructions. No unverified app steps. |
| freegotv channels list | G 10 / – | Channel research | /channels | Partial/demo only | Sample explorer metadata and branded H1; explicit demo warning. Actual channel catalog remains unavailable. |
| freegotv iptv channels | G 10 / – | Channel research | /channels | Partial/demo only | Same page, description and categories; no invented counts, rights or lineup. |
| freegotv reviews | G 30 / 2.22 | Independent reputation | None; / and /free-trial only provide first-party information | No | Excluded from targeting: no genuine verified reviews. No testimonials, ratings or review schema added. |
| freegotv iptv reviews | B 0 / – | Independent reputation | None | No | Same exclusion; do not relabel first-party marketing as reviews. |
| freegotv review reddit | G 0 / – | Third-party discussion | None | No | Excluded: no verified Reddit discussion supplied; no invented posts or endorsement. |
| freegotv login | B 40 / – | Account navigation | Existing Client Area → /contact, not a login page | No | Deferred despite positive volume. No working portal in project; destination cannot be changed. |
| freegotv iptv sign in | B 0 / – | Account access | /install general credential step; existing Client Area → /contact | Partial setup only; no login | Retain generic setup step; no dedicated login targeting or invented authentication. |
| freegotv not working | B 0 / – | Troubleshooting | /faq | No | Add basic internet/app/credential checks and safe error reporting advice; no diagnosis or outage guarantee. |
| freegotv down | B 0 / – | Current service status | /faq for general checks only | No live status | FAQ distinguishes checks from outage confirmation. Exact status intent deferred: no monitoring feed or “operational” claims. |
| freegotv epg | G 0 / – | Guide explanation/help | /faq | Partial homepage mention | Add EPG definition and time-zone check; no invented guide feed, refresh interval or complete coverage promise. |
| freegotv usa | G 0 / – | Regional suitability | /faq, with homepage context | No verified US availability | Add sample-list availability clarification; en-US language/metadata only. No US office or access guarantee. |
| freegotv live chat | G 0 / – | Contact channel navigation | /contact | Email/WhatsApp only | Existing contact page retained. No embedded live chat verified; keyword excluded from new copy, no new channel or response-time promise. |
| freegotv reseller | G 0 / – | Business inquiry | /reseller | Mostly | Branded description and US “program” spelling. Existing inquiry/pricing unchanged; no dashboard built. |
| freegotv coupon code | B 0 / – | Discount seeking | /pricing for published prices only | No confirmed coupon | Excluded from promotional targeting; no code, discount or redemption invented. |
| freegotv promo code | B 0 / – | Discount seeking | /pricing for published prices only | No confirmed promotion | Same decision; do not claim either a promotion or its permanent absence. |

## Priorities and coverage

1. Brand/service and subscription intent: clarify homepage and pricing while keeping distinct canonical pages.
2. App/install and channel intent: improve usefulness by explaining the project's actual limitations.
3. Trial, FAQ and reseller: serve meaningful zero-volume intent on existing routes.
4. Reviews, portal access, live status, promotions and live chat: wait for verified content/functionality and separate authorization where needed.

The supplied 22-term checklist matches the union of Google and Bing keywords. Instagram adds no distinct keyword but contributes two account records. All records, including duplicates and locked-platform notices, follow.

## Original workbook data

The following is a cell-level transcription, not translated or normalized. Sheet sizes: Google 26×8, Bing 23×8, ChatGPT 9×8, Gemini 9×8, Instagram 11×9. Rows 6–7 are blank; row 8 contains headers. Google CPC 2.05 and 2.22 are numeric cells; Instagram CPC "2.05" is a string. All exported volumes are strings. Intent and sentiment header names on locked sheets must not be mistaken for actual measurements.

### Google — original worksheet cells

Rows are in original order (array index + 1 = Excel row); columns run A onward. Null means an empty cell. Strings, numbers, original French labels, duplicate rows and platform metadata are preserved.

```json
[["Plateforme:","Google",null,null,null,null,null,null],["Terme de recherche:","freegotv",null,null,null,null,null,null],["Langue:","Anglais",null,null,null,null,null,null],["Pays:","États-Unis",null,null,null,null,null,null],["Recherchée le : (dd/mm/yyyy):","23/09/2026",null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],["Terme de recherche","Type de modificateur","Modificateur","Mot-clé","Langue","Pays","Volume","CPC (US$)"],["freegotv","Ordre alphabétique","a","freegotv app","en","us","20","-"],["freegotv","Ordre alphabétique","c","freegotv channels list","en","us","10","-"],["freegotv","Ordre alphabétique","c","freegotv iptv channels","en","us","10","-"],["freegotv","Ordre alphabétique","c","freegotv live chat","en","us","0","-"],["freegotv","Ordre alphabétique","e","freegotv epg","en","us","0","-"],["freegotv","Ordre alphabétique","i","freegotv iptv","en","us","140","-"],["freegotv","Ordre alphabétique","i","freegotv iptv channels","en","us","10","-"],["freegotv","Ordre alphabétique","l","freegotv live chat","en","us","0","-"],["freegotv","Ordre alphabétique","r","freegotv reseller","en","us","0","-"],["freegotv","Ordre alphabétique","r","freegotv review reddit","en","us","0","-"],["freegotv","Ordre alphabétique","s","freegotv subscription","en","us","10","-"],["freegotv","Ordre alphabétique","u","freegotv usa","en","us","0","-"],["freegotv","Questions","how","how to install freegotv","en","us","0","-"],["freegotv","Termes associés","-","freegotv","en","us","1.0K",2.05],["freegotv","Termes associés","-","freegotv iptv","en","us","140","-"],["freegotv","Termes associés","-","freegotv reviews","en","us","30",2.22],["freegotv","Termes associés","-","freegotv iptv subscription","en","us","0","-"],["freegotv","Termes associés","-","freegotv iptv free trial","en","us","0","-"]]
```

### Bing — original worksheet cells

Rows are in original order (array index + 1 = Excel row); columns run A onward. Null means an empty cell. Strings, numbers, original French labels, duplicate rows and platform metadata are preserved.

```json
[["Plateforme:","Bing",null,null,null,null,null,null],["Terme de recherche:","freegotv",null,null,null,null,null,null],["Langue:","Anglais",null,null,null,null,null,null],["Pays:","États-Unis",null,null,null,null,null,null],["Recherchée le : (dd/mm/yyyy):","23/09/2026",null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],["Terme de recherche","Type de modificateur","Modificateur","Mot-clé","Langue","Pays","Volume","CPC (US$)"],["freegotv","Ordre alphabétique","a","freegotv app","en","us","20","-"],["freegotv","Ordre alphabétique","c","freegotv coupon code","en","us","0","-"],["freegotv","Ordre alphabétique","d","freegotv down","en","us","0","-"],["freegotv","Ordre alphabétique","i","freegotv iptv","en","us","140","-"],["freegotv","Ordre alphabétique","i","freegotv iptv subscription","en","us","0","-"],["freegotv","Ordre alphabétique","i","freegotv iptv sign in","en","us","0","-"],["freegotv","Ordre alphabétique","i","freegotv iptv reviews","en","us","0","-"],["freegotv","Ordre alphabétique","i","freegotv iptv free trial","en","us","0","-"],["freegotv","Ordre alphabétique","l","freegotv login","en","us","40","-"],["freegotv","Ordre alphabétique","n","freegotv not working","en","us","0","-"],["freegotv","Ordre alphabétique","p","freegotv promo code","en","us","0","-"],["freegotv","Ordre alphabétique","r","freegotv iptv reviews","en","us","0","-"],["freegotv","Ordre alphabétique","s","freegotv iptv sign in","en","us","0","-"],["freegotv","Ordre alphabétique","s","freegotv iptv subscription","en","us","0","-"],["freegotv","Ordre alphabétique","w","freegotv not working","en","us","0","-"]]
```

### ChatGPT — original worksheet cells

Rows are in original order (array index + 1 = Excel row); columns run A onward. Null means an empty cell. Strings, numbers, original French labels, duplicate rows and platform metadata are preserved.

```json
[["Plateforme:","ChatGPT",null,null,null,null,null,null],["Terme de recherche:","freegotv",null,null,null,null,null,null],["Langue:","Anglais",null,null,null,null,null,null],["Pays:","États-Unis",null,null,null,null,null,null],["Recherchée le : (dd/mm/yyyy):","23/09/2026",null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],["Terme de recherche","Prompt","Intention principale","Intention secondaire","Sentiment positif","Sentiment neutre","Sentiment négatif","Marques"],["Aucun prompt débloqué - mettez votre compte à niveau pour accéder à plus de données",null,null,null,null,null,null,null]]
```

### Gemini — original worksheet cells

Rows are in original order (array index + 1 = Excel row); columns run A onward. Null means an empty cell. Strings, numbers, original French labels, duplicate rows and platform metadata are preserved.

```json
[["Plateforme:","Gemini",null,null,null,null,null,null],["Terme de recherche:","freegotv",null,null,null,null,null,null],["Langue:","Anglais",null,null,null,null,null,null],["Pays:","États-Unis",null,null,null,null,null,null],["Recherchée le : (dd/mm/yyyy):","23/09/2026",null,null,null,null,null,null],[null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null],["Terme de recherche","Prompt","Intention principale","Intention secondaire","Sentiment positif","Sentiment neutre","Sentiment négatif","Marques"],["Aucun prompt débloqué - mettez votre compte à niveau pour accéder à plus de données",null,null,null,null,null,null,null]]
```

### Instagram — original worksheet cells

Rows are in original order (array index + 1 = Excel row); columns run A onward. Null means an empty cell. Strings, numbers, original French labels, duplicate rows and platform metadata are preserved.

```json
[["Plateforme:","Instagram",null,null,null,null,null,null,null],["Terme de recherche:","freegotv",null,null,null,null,null,null,null],["Langue:","Anglais",null,null,null,null,null,null,null],["Pays:","États-Unis",null,null,null,null,null,null,null],["Recherchée le : (dd/mm/yyyy):","23/09/2026",null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],[null,null,null,null,null,null,null,null,null],["Terme de recherche","Type","Mot-clé","Volume","CPC (US$)","Nom d’utilisateur","Nom complet","Privé","Vérifié"],["freegotv","Hashtags","freegotv","1.0K","2.05","-","-","-","-"],["freegotv","Personnes","-","-","-","freegotv","-","Non","Non"],["freegotv","Personnes","-","-","-","tvfreego","FreeGo TV","Non","Non"]]
```
