# ColdWatt — Winter Power Affiliate Site

A fast, SEO-first affiliate site about portable power for cold climates, built with [Astro](https://astro.build) and designed to run **free** on Cloudflare Pages.

"ColdWatt" is a placeholder name. Change it in one place: `src/site.config.ts`.

---

## Your launch checklist (the parts only you can do)

Everything below is free. Tick them off in order.

### 1. Make it yours (30 minutes)

- [ ] **Pick your site name.** Edit `name`, `url`, `tagline` and `contactEmail` in `src/site.config.ts`, and the `SITE_URL` line in `astro.config.mjs`. Until you buy a domain, use your free Cloudflare address (e.g. `https://coldwatt.pages.dev`).
- [ ] **Fill in your author bio** in `src/data/authors.json` — your name, and 2–3 honest sentences about why you care about winter power. Real details matter for Google's trust signals.
- [ ] **Fill in your legal name** (`legalName` in `src/site.config.ts`) — it appears in the privacy policy.
- [ ] **Set up a contact email.** A free Gmail is fine to start. Put it in `contactEmail`.

### 2. Put it online (about 20 minutes, free)

1. Create a free account at **github.com**, then click **New repository** → name it (e.g. `coldwatt`) → **Create**.
2. On the new repo page, click **uploading an existing file** and drag in everything from this folder **except** `node_modules` and `dist`. Click **Commit changes**.
3. Create a free account at **dash.cloudflare.com**.
4. Go to **Workers & Pages → Create → Pages → Connect to Git**, and pick your repository. (Cloudflare's menus change occasionally — look for the option to import a Git repository as a **Pages** project.)
5. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click **Save and Deploy**. In a minute or two your site is live at `https://your-project.pages.dev`.

From then on, any file you change on GitHub redeploys the site automatically.

The geo-routed "Check price" links (`/go/…`) start working automatically on Cloudflare — Canadian visitors go to Canadian stores, everyone else to US stores.

### 3. Tell Google about it (10 minutes)

- [ ] Add your site to **Google Search Console** (search.google.com/search-console) and submit `https://your-site/sitemap-index.xml`.
- [ ] In Cloudflare, turn on **Web Analytics** for the site (free, no cookies). The privacy policy already describes it — if you use something else, update `src/pages/privacy-policy.astro`.

### 4. Before you apply to affiliate programs

- [ ] **Clear the yellow editor notes.** Run the site locally (see below) and every page shows a yellow box listing things to verify or add. They never appear on the live site, but work through them.
- [ ] **Honour the promises in "How we research."** That page says you read owner reviews and revisit guides twice a year. Either do those things or edit `src/pages/how-we-research.astro` so it matches what you actually do.
- [ ] **Add more products.** Three models is thin for "best of" lists. Add 5–10 more to `src/data/products.json`, copying specs only from official spec sheets or manuals.
- [ ] **Wait for 10–15 solid pages and some traffic**, then apply. Suggested order:
  1. **AvantLink** and **Impact** (networks — one application unlocks many brands)
  2. **EcoFlow, Jackery, BLUETTI, Anker SOLIX, Goal Zero, Renogy** brand programs
  3. **Amazon Associates** (US and CA) last — for cheap accessories only. You need 3 sales within 180 days or the account closes.

### 5. Paperwork (when you're approved)

- [ ] **W-8BEN form** for every US-based program or network. It certifies you're Canadian so they don't withhold 30% of your commissions.
- [ ] **Report commissions as business income** on your Canadian tax return. GST/HST registration isn't required until you pass $30,000 in revenue over four consecutive quarters. Talk to an accountant once real money arrives — this isn't tax advice.
- [ ] If you join Amazon, set `AMAZON_ASSOCIATE = true` in `src/pages/affiliate-disclosure.astro` (Amazon requires that exact disclosure sentence).

### 6. When you're approved: add your affiliate links

Open `src/data/products.json`. For each product, replace the `url` in `links.us` and `links.ca` with your tracking link, set `"affiliate": true`, and note the `network`. Every button on the site updates on the next deploy.

---

## How the site works

| You want to… | Edit this |
|---|---|
| Change the site name, tagline, email | `src/site.config.ts` |
| Add or update a product, its specs or links | `src/data/products.json` |
| Write or edit an article | `src/content/articles/<topic>/<page-name>.md` |
| Turn on a new topic section (vehicles, gear) | Change `ACTIVE_PHASE` in `src/site.config.ts` |
| Edit legal pages | `src/pages/affiliate-disclosure.astro`, `privacy-policy.astro` |
| Change colours | Top of `src/styles/global.css` |

### Article templates

Every article is a Markdown file. The file's folder and name become its URL: `src/content/articles/power-stations/foo.md` → `/power-stations/foo/`.

Set `template:` in the article's header to choose a layout:

- `product` — specs & buyer's guide for one model (set `product: <id>`)
- `roundup` — "best X" list with comparison table and product cards (set `products:` and `awards:`)
- `vs` — head-to-head with winners by use case (set `products:` and `winners:`)
- `guide` — how-to / explainer
- `tool` — calculator or data page

Copy an existing article of the same type to start a new one. Set `draft: true` to keep a page off the live site while you work on it.

### Honesty rules built into the code

- **No ratings or Review schema** unless a product has `"testedByUs": true` in `products.json`. Only set that if you've genuinely used the product (e.g. a brand review unit — and say so on the page).
- **Unknown specs show "Not published."** Never fill in a spec you can't source.
- **Disclosure appears before the first affiliate link** on every article, and every affiliate link carries `rel="sponsored"`.
- **No hardcoded prices** — they go stale and Amazon's rules restrict them. Buttons say "Check price."

---

## Running it on your own computer (optional)

You only need this to preview changes before publishing. Install [Node.js](https://nodejs.org) (version 22 or newer), then in this folder:

```bash
npm install
npm run dev          # preview at http://localhost:4321 (shows yellow editor notes)
npm run build        # build the production site into dist/
npm run check-links  # after building: checks links, schema, titles and disclosures
```

## What's included

- **12 launch articles** across 4 topics: 2 free tools, 3 product guides, 2 roundups, 1 comparison, 3 guides
- **Trust pages:** About, How we research, Contact, Affiliate disclosure (FTC + Competition Bureau), Privacy policy (PIPEDA-aware template — have it reviewed)
- **SEO:** semantic HTML, canonical URLs, Open Graph, JSON-LD (Organization, WebSite, Article, Product, ItemList, BreadcrumbList, FAQPage, WebApplication), XML sitemap, robots.txt
- **Speed:** no web fonts, no framework JavaScript, ~13 KB of CSS for the whole site; the calculator is the only page with meaningful script
- **Conversion:** comparison tables that become cards on mobile, product cards, verdict boxes, sticky mobile buy bar on product pages, geo-routed `/go/` links
- `COLD-SPEC-RESEARCH.md` — how to grow the spec database (the site's link magnet)
- `CONTENT-PLAN.md` — the next 20 articles to write
