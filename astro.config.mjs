// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// NOTE: Update `site` to the real production domain before launch.
// It is used for canonical URLs, sitemap.xml and Open Graph absolute URLs.
export default defineConfig({
  site: 'https://bridginmarketing.com',
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
