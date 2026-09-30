/**
 * Cloudflare Pages Function — geo-routed affiliate redirects.
 *
 *   /go/ecoflow-delta-3-plus/          → Canadian visitors get the .ca store, everyone else the US store
 *   /go/ecoflow-delta-3-plus/?store=amazon → Amazon.ca / Amazon.com instead (if set in products.json)
 *
 * Reads links straight from src/data/products.json, so updating a link there
 * updates every button on the site after the next deploy.
 *
 * This runs automatically on Cloudflare Pages — no setup needed. On any other host,
 * the static fallback pages in src/pages/go/ take over (they use the visitor's time zone instead).
 */
import products from '../../src/data/products.json';

const bySlug = Object.fromEntries(products.map((p) => [p.id, p]));

export async function onRequestGet({ request, params }) {
  const slug = String(params.slug || '').replace(/\/$/, '');
  const product = bySlug[slug];

  if (!product) {
    return Response.redirect(new URL('/', request.url).toString(), 302);
  }

  const country = request.cf?.country || request.headers.get('cf-ipcountry') || 'US';
  const isCanada = country === 'CA';
  const wantsAmazon = new URL(request.url).searchParams.get('store') === 'amazon';

  let link;
  if (wantsAmazon) {
    link = isCanada ? product.links.amazonCa : product.links.amazonUs;
  }
  link = link || (isCanada ? product.links.ca : product.links.us);

  return new Response(null, {
    status: 302,
    headers: {
      Location: link.url,
      // Never cache: the destination depends on who is clicking.
      'Cache-Control': 'private, no-store',
      'X-Robots-Tag': 'noindex, nofollow',
      'Referrer-Policy': 'no-referrer-when-downgrade',
    },
  });
}
