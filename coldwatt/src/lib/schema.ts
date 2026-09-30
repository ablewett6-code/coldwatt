/**
 * JSON-LD structured data builders.
 *
 * Deliberate choices:
 * - Product pages get Product schema WITHOUT Review/AggregateRating unless you have
 *   personally tested the product (testedByUs). Marking up reviews you didn't do
 *   violates Google's structured-data policies and risks a manual action.
 * - FAQPage is still emitted (harmless, helps AI search understand Q&A), but Google
 *   now only shows FAQ rich results for government and health sites — don't expect stars.
 */
import { SITE } from '../site.config';
import type { Product } from './products';

const abs = (path: string) => new URL(path, SITE.url).toString();

export const organization = () => ({
  '@type': 'Organization',
  '@id': abs('/#organization'),
  name: SITE.name,
  url: abs('/'),
  logo: abs('/favicon.svg'),
});

export const website = () => ({
  '@type': 'WebSite',
  '@id': abs('/#website'),
  name: SITE.name,
  url: abs('/'),
  description: SITE.description,
  inLanguage: SITE.locale,
  publisher: { '@id': abs('/#organization') },
});

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: abs(item.path),
  })),
});

export const person = (author: { id: string; name: string; sameAs?: string[] }) => ({
  '@type': 'Person',
  '@id': abs(`/about/#${author.id}`),
  name: author.name,
  url: abs('/about/'),
  ...(author.sameAs?.length ? { sameAs: author.sameAs } : {}),
});

export const article = (opts: {
  title: string;
  description: string;
  path: string;
  published: Date;
  updated?: Date;
  author: { id: string; name: string; sameAs?: string[] };
  image?: string;
}) => ({
  '@type': 'Article',
  headline: opts.title,
  description: opts.description,
  mainEntityOfPage: abs(opts.path),
  datePublished: opts.published.toISOString(),
  dateModified: (opts.updated ?? opts.published).toISOString(),
  author: person(opts.author),
  publisher: { '@id': abs('/#organization') },
  image: abs(opts.image ?? SITE.defaultOgImage),
  inLanguage: SITE.locale,
});

export const product = (p: Product, pagePath?: string) => {
  const d = p.data;
  const additionalProperty = Object.entries(d.specs)
    .filter(([, v]) => v !== null)
    .map(([k, v]) => ({ '@type': 'PropertyValue', name: k, value: String(v) }));

  const base: Record<string, unknown> = {
    '@type': 'Product',
    name: d.name,
    brand: { '@type': 'Brand', name: d.brand },
    category: d.category,
    ...(d.image ? { image: abs(d.image) } : {}),
    ...(pagePath ? { url: abs(pagePath) } : {}),
    ...(d.shortVerdict ? { description: d.shortVerdict } : {}),
    additionalProperty,
  };

  if (d.testedByUs && d.rating !== null) {
    base.review = {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: d.rating, bestRating: 10, worstRating: 0 },
      author: { '@id': abs('/#organization') },
    };
  }
  return base;
};

export const itemList = (items: { name: string; path: string }[]) => ({
  '@type': 'ItemList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    url: abs(it.path),
  })),
});

export const faqPage = (faqs: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const webApplication = (name: string, path: string, description: string) => ({
  '@type': 'WebApplication',
  name,
  url: abs(path),
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CAD' },
});

/** Wrap nodes into a single @graph document. */
export const graph = (...nodes: (object | null | undefined | false)[]) => ({
  '@context': 'https://schema.org',
  '@graph': nodes.filter(Boolean),
});
