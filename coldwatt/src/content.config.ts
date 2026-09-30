import { defineCollection, reference } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/* ─────────────────────────────  PRODUCTS  ─────────────────────────────
 * Single source of truth for every product on the site.
 * Comparison tables, spec boxes, CTA buttons and /go/ redirects all
 * read from src/data/products.json. Edit a product once → every page updates.
 */
const link = z.object({
  url: z.string(),
  merchant: z.string(), // shown on the button: "Check price at {merchant}"
  network: z.string().optional(), // e.g. "Impact", "Awin", "Direct" — for your records
  affiliate: z.boolean().default(false), // false until you're approved and paste your tracking link
});

const products = defineCollection({
  loader: file('src/data/products.json'),
  schema: z.object({
    brand: z.string(),
    name: z.string(),
    category: z.enum(['power-station', 'solar-panel', 'battery', 'heated-apparel', 'heater', 'accessory']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    status: z.enum(['active', 'discontinued']).default('active'),
    bestFor: z.string().optional(),
    shortVerdict: z.string().optional(),
    // Flip to true ONLY if you have personally used this product (e.g. a brand review unit).
    // Ratings and "hands-on" language only render when this is true.
    testedByUs: z.boolean().default(false),
    rating: z.number().min(0).max(10).nullable().default(null),
    specs: z.object({
      capacityWh: z.number().nullable().default(null),
      outputW: z.number().nullable().default(null),
      surgeW: z.number().nullable().default(null),
      solarInputW: z.number().nullable().default(null),
      chemistry: z.string().nullable().default(null),
      weightLb: z.number().nullable().default(null),
      acOutlets: z.number().nullable().default(null),
      upsMs: z.number().nullable().default(null),
      chargeTempMinC: z.number().nullable().default(null),
      dischargeTempMinC: z.number().nullable().default(null),
      expandable: z.boolean().nullable().default(null),
    }),
    // Set true only after checking every spec against the manufacturer's page.
    specsVerified: z.boolean().default(false),
    specsSource: z.string().optional(),
    // Your own cold-test results, if you ever test hands-on. Null otherwise — never estimate these.
    coldTest: z
      .object({
        ambientC: z.number(),
        deliveredWh: z.number(),
        roomTempWh: z.number().nullable().default(null),
        testDate: z.string(),
        notes: z.string().optional(),
        report: z.string().optional(), // article id of the test report
      })
      .nullable()
      .default(null),
    links: z.object({
      us: link,
      ca: link,
      amazonUs: link.optional(),
      amazonCa: link.optional(),
    }),
  }),
});

/* ─────────────────────────────  AUTHORS  ───────────────────────────── */
const authors = defineCollection({
  loader: file('src/data/authors.json'),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    // true for a brand byline (e.g. "ColdWatt Research"); marks it as an Organization in search data
    isOrganization: z.boolean().default(false),
    bio: z.string(),
    location: z.string().optional(),
    avatar: z.string().optional(),
    sameAs: z.array(z.string()).default([]),
  }),
});

/* ─────────────────────────────  ARTICLES  ─────────────────────────────
 * File path = URL. src/content/articles/power-stations/foo.mdx → /power-stations/foo/
 * `template` picks the layout: product | roundup | vs | guide | tool
 *   product = specs & buyer's guide for one model (research-based, no rating unless testedByUs)
 *   tool    = calculator or data page
 */
const faq = z.object({ q: z.string(), a: z.string() });

const articles = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().max(70, 'Keep titles under 70 characters for search results'),
    seoTitle: z.string().max(60).optional(),
    description: z.string().min(70).max(160, 'Meta descriptions over 160 characters get truncated'),
    template: z.enum(['product', 'roundup', 'vs', 'guide', 'tool']),
    author: reference('authors').default('owner'),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),

    // product: the model this page covers
    product: reference('products').optional(),
    // roundup & vs: products in display order
    products: z.array(reference('products')).default([]),
    // roundup: award label per product id, e.g. { "ecoflow-delta-3-plus": "Best overall" }
    awards: z.record(z.string(), z.string()).default({}),

    verdict: z.string().optional(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    faqs: z.array(faq).default([]),

    // vs pages: winner per use-case
    winners: z.array(z.object({ useCase: z.string(), winner: reference('products'), why: z.string() })).default([]),

    // Sources used for research-based pages. Rendered as a "Sources" list — this is your E-E-A-T.
    sources: z.array(z.object({ title: z.string(), url: z.string() })).default([]),
    // Items you must double-check before publishing. Shown as a yellow banner in `npm run dev` only.
    todo: z.array(z.string()).default([]),
  }),
});

export const collections = { products, authors, articles };
