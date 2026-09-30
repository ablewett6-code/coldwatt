import type { CollectionEntry } from 'astro:content';

export type Product = CollectionEntry<'products'>;

/** Every outbound product link goes through /go/ so geo-routing and link swaps happen in one place. */
export const goUrl = (id: string, store?: 'amazon') => `/go/${id}/${store ? `?store=${store}` : ''}`;

/** rel attributes Google asks for on paid/affiliate links. */
export const AFFILIATE_REL = 'sponsored nofollow noopener';

type SpecKey = keyof Product['data']['specs'];

export const SPEC_LABELS: Record<SpecKey, string> = {
  capacityWh: 'Capacity',
  outputW: 'Continuous AC output',
  surgeW: 'Surge output',
  solarInputW: 'Max solar input',
  chemistry: 'Battery chemistry',
  weightLb: 'Weight',
  acOutlets: 'AC outlets',
  upsMs: 'UPS switchover',
  chargeTempMinC: 'Lowest charging temp',
  dischargeTempMinC: 'Lowest operating temp',
  expandable: 'Expandable battery',
};

export const NOT_PUBLISHED = 'Not published';

export function formatSpec(key: SpecKey, value: unknown): string {
  if (value === null || value === undefined) return NOT_PUBLISHED;
  switch (key) {
    case 'capacityWh':
      return `${Number(value).toLocaleString('en-CA')} Wh`;
    case 'outputW':
    case 'surgeW':
    case 'solarInputW':
      return `${Number(value).toLocaleString('en-CA')} W`;
    case 'weightLb': {
      const kg = Number(value) * 0.4536;
      return `${value} lb (${kg.toFixed(1)} kg)`;
    }
    case 'upsMs':
      return `≤${value} ms`;
    case 'chargeTempMinC':
    case 'dischargeTempMinC': {
      const f = Math.round((Number(value) * 9) / 5 + 32);
      return `${value}°C (${f}°F)`;
    }
    case 'expandable':
      return value ? 'Yes' : 'No';
    default:
      return String(value);
  }
}

/** Plain-language cold-weather rating derived only from published specs. */
export function coldReadiness(p: Product): { label: string; tone: 'good' | 'warn' | 'unknown' } {
  const { chargeTempMinC, dischargeTempMinC } = p.data.specs;
  if (chargeTempMinC === null && dischargeTempMinC === null) {
    return { label: 'Cold limits not published', tone: 'unknown' };
  }
  if (dischargeTempMinC !== null && dischargeTempMinC <= -20) {
    return { label: 'Rated for deep cold', tone: 'good' };
  }
  return { label: 'Keep it indoors below freezing', tone: 'warn' };
}
