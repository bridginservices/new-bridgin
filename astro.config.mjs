// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// `site` is the canonical production origin. Used for canonical URLs,
// sitemap.xml and Open Graph absolute URLs. Keep `www` canonical and
// redirect the bare apex (bridginmarketing.com) to www in Cloudflare.
export default defineConfig({
  site: 'https://www.bridginmarketing.com',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
    mdx(),
  ],
  image: {
    // Allow optimizing remote Unsplash images referenced directly if needed.
    domains: ['images.unsplash.com'],
  },
});
