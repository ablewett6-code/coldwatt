/**
 * ─────────────────────────────────────────────────────────────
 *  SITE SETTINGS — the one file to edit when you pick your name.
 * ─────────────────────────────────────────────────────────────
 *  "ColdWatt" is a placeholder. Change `name`, `url`, `tagline`
 *  and `contactEmail` here and every page, meta tag, schema block
 *  and legal page updates automatically.
 *
 *  Also update `site` in astro.config.mjs to match `url`.
 */

export const SITE = {
  name: 'ColdWatt',
  url: 'https://coldwattpower.ca', // no trailing slash
  tagline: 'Portable power for real Canadian winters.',
  description:
    'Independent research, calculators and buying guides for portable power stations and solar generators, built for places where winter means −30°C.',
  locale: 'en-CA',
  contactEmail: 'hello@coldwattpower.ca', // set up forwarding in Cloudflare → Email Routing
  // Legal entity shown in the privacy policy. A sole proprietor can use their own name.
  legalName: 'ColdWatt (operated by Ashton)', // swap in your full legal or business name when ready
  legalRegion: 'Alberta, Canada',
  // Default social share image (1200×630). Replace public/og-default.png with your own.
  defaultOgImage: '/og-default.png',
  twitterHandle: '', // e.g. '@coldwatt' — leave empty if none
  // Last time the legal pages were reviewed. Update when you edit them.
  legalUpdated: '2026-09-29',
} as const;

/** Primary author. Add more in src/data/authors.json. */
export const DEFAULT_AUTHOR = 'owner';

/** Content silos. Order here = order in navigation. */
export const SILOS = [
  {
    slug: 'power-stations',
    name: 'Power Stations',
    short: 'Power Stations',
    description:
      'Reviews, comparisons and buying guides for portable power stations — with real cold-weather capacity results.',
    phase: 1,
  },
  {
    slug: 'tools',
    name: 'Calculators & Cold-Weather Data',
    short: 'Tools',
    description:
      'Free winter runtime calculators and a cold-weather spec database: which power stations can charge below freezing, and how long they will really last.',
    phase: 1,
  },
  {
    slug: 'cabin-power',
    name: 'Cabin & Off-Grid Power',
    short: 'Cabin Power',
    description:
      'Solar generators, battery banks and full off-grid setups for cabins and cottages that see real winters.',
    phase: 1,
  },
  {
    slug: 'vehicle-power',
    name: 'Van, Truck & Camping Power',
    short: 'Vehicle Power',
    description:
      'Power for winter camping, truck campers, vans and RVs — setups that survive sub-zero nights.',
    phase: 2,
  },
  {
    slug: 'home-backup',
    name: 'Home Backup Power',
    short: 'Home Backup',
    description:
      'Keeping the furnace fan, fridge and sump pump running through a winter power outage.',
    phase: 1,
  },
  {
    slug: 'cold-weather-gear',
    name: 'Cold-Weather Gear',
    short: 'Gear',
    description:
      'Heated apparel, tent heaters, cold-rated sleeping bags and the gear that pairs with portable power.',
    phase: 3,
  },
] as const;

export type SiloSlug = (typeof SILOS)[number]['slug'];

/** Only silos whose phase is <= this number appear in navigation and get hub pages. */
export const ACTIVE_PHASE = 1;

export const activeSilos = () => SILOS.filter((s) => s.phase <= ACTIVE_PHASE);
export const getSilo = (slug: string) => SILOS.find((s) => s.slug === slug);
