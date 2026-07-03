# bRIDGIN' Marketing Services — Website

A premium, animated, fully responsive marketing website for **bRIDGIN'** — a digital
marketing agency. Black + cyan brand identity, GSAP scroll animations, a signature
self-rotating 3D services wheel, Swiper hero/testimonial sliders, and an Astro
content-collection blog.

## Tech stack

- **Astro 5** (static-first, islands architecture)
- **Tailwind CSS 3** (`tailwind.config.cjs`)
- **GSAP + ScrollTrigger** (scroll reveals, wheel easing, hero text)
- **Swiper.js** (hero banner, services mobile carousel, testimonials)
- **astro:assets** → automatic WebP + responsive `srcset` + lazy loading
- **@astrojs/sitemap** (`sitemap-index.xml`) + `robots.txt`
- **@astrojs/mdx** (blog content collection)

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build -> ./dist
npm run preview  # preview the production build
```

> The `dist/` output is fully static — deploy to Netlify, Vercel or Cloudflare Pages.

## Project structure

```
src/
  components/   Navbar, Footer, HeroSlider, ServicesWheel, TestimonialSlider,
                CTASection, WhyChooseUs, ServiceCard, ProjectCard, BlogCard,
                Icon, Logo, SEO, PageHeader, SectionHeading, StarRating, OurStory
  layouts/      BaseLayout.astro  (head/SEO, nav, footer, global scroll reveal)
  data/         site.js, services.js, projects.js, testimonials.js, hero.js
  content/blog/ 3 starter posts (Markdown) + content.config.ts schema
  pages/        index, about-us, services/[index|[slug]], projects,
                blogs/[index|[slug]], contact-us, privacy-policy, terms, 404
  assets/images/ site imagery (optimized at build)
  styles/global.css  design tokens + component classes
public/         favicon.svg, robots.txt, og/og-default.jpg
```

Pages built: **22** — home, about, services overview, 10 service pages, projects,
blog listing, 3 blog posts, contact, privacy, terms, 404.

---

## ⚠️ Placeholders to fill before launch

All placeholders are centralized where possible — mainly in **`src/data/site.js`**:

| Item | Where | Notes |
|------|-------|-------|
| **Phone number** | `src/data/site.js` (`phone`, `phoneHref`) | Powers Call Now button, footer, contact page |
| **Email** | `src/data/site.js` (`email`) | |
| **Address** | `src/data/site.js` (`address`) | |
| **Google Map pin** | `src/data/site.js` (`mapEmbedSrc`) + `src/pages/contact-us.astro` | Currently a generic embed |
| **Production domain** | `astro.config.mjs` (`site`), `public/robots.txt` | Used for canonical URLs, sitemap & OG absolute URLs |
| **Contact form backend** | `src/pages/contact-us.astro` (see comment) | Wire to Formspree or Netlify Forms — form is validated client-side only until then |
| **Blog content** | `src/content/blog/*.md` | 3 starter posts marked `placeholder: true` |
| **Project images / metrics** | `src/data/projects.js` | Marked `placeholder: true` |

### About the imagery

Unsplash blocks unauthenticated automated downloads from this environment, so the
current photos were sourced by keyword from **loremflickr** (Creative-Commons
Flickr images) and saved to `src/assets/images/`. **Replace these with licensed or
branded photography before launch.** Every image already carries descriptive
`alt` + `title` attributes (see `src/data/hero.js`, `projects.js`, and the blog
frontmatter), so you only need to swap the files (keep the same filenames) — no
markup changes required.

The brand **logo** is a code-based SVG wordmark (`src/components/Logo.astro`) — no
external asset needed.

---

## Design system

- Background `#0A0A0A` · Text `#FFFFFF` / `#F2F2F2` · Accent cyan `#00E5FF`
- Headings: **Space Grotesk** · Body: **Inter** (Google Fonts)
- Tokens & utility classes live in `tailwind.config.cjs` + `src/styles/global.css`
  (`.btn-primary`, `.surface`, `.reveal`, `.cyber-grid`, `.glow-blob`, etc.)

## Accessibility & performance

- Semantic landmarks, skip-link, keyboard-accessible nav/drawer/sliders (Swiper a11y + keyboard)
- ARIA labels on the wheel, carousels and mobile menu
- Respects `prefers-reduced-motion` (animations disabled, `.reveal` shown immediately)
- Progressive enhancement: `.no-js` fallback reveals content if JS is off
- Images optimized to WebP with responsive `srcset`; hero image eager, everything else lazy

## SEO

- Per-page `<title>` / `<meta description>`, Open Graph + Twitter Card, canonical URLs
- `ProfessionalService` JSON-LD (`BaseLayout.astro`)
- `sitemap-index.xml` (generated) + `robots.txt`
