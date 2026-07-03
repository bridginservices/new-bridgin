import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog collection (spec §8) — add new posts as .md/.mdx in
// src/content/blog. `image` is a filename resolved from
// src/assets/images via the img() helper.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("bRIDGIN' Team"),
    image: z.string(),
    imageAlt: z.string(),
    readTime: z.string().default('5 min read'),
    tags: z.array(z.string()).default([]),
    // Flag AI/placeholder starter content to be replaced before launch.
    placeholder: z.boolean().default(false),
  }),
});

export const collections = { blog };
