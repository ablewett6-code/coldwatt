// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Keep this in sync with SITE.url in src/site.config.ts
const SITE_URL = 'https://coldwattpower.ca';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover',
  },
  integrations: [
    mdx(),
    sitemap({
      // Keep redirect links and utility pages out of the sitemap
      filter: (page) => !page.includes('/go/') && !page.includes('/404'),
    }),
  ],
});
