// ============================================================
// The 10 bRIDGIN' services (spec §4.3 / §6).
// `icon` maps to a key in src/components/ServiceIcon.astro.
// Each entry powers both the rotating wheel and its own
// /services/[slug] page (Astro getStaticPaths).
// ============================================================

export const services = [
  {
    slug: 'seo',
    name: 'SEO',
    icon: 'search',
    tagline: 'Get found when it matters most.',
    excerpt:
      'Climb the search rankings with technical, on-page and local SEO that turns searches into customers.',
    description:
      'Search Engine Optimization is the long-term engine of sustainable growth. We audit, fix and future-proof your website so it ranks for the terms your customers actually search — driving qualified, compounding, zero-cost traffic month after month.',
    included: [
      'Technical SEO audit & site health fixes',
      'Keyword research & search-intent mapping',
      'On-page optimization (titles, meta, headings, schema)',
      'Local SEO & Google Business Profile alignment',
      'Content strategy for target keywords',
      'Monthly rank tracking & transparent reporting',
    ],
    benefits: [
      'Rank on page one for high-intent keywords',
      'Compounding, zero-cost organic traffic',
      'Higher trust and credibility with buyers',
    ],
  },
  {
    slug: 'performance-marketing',
    name: 'Performance Marketing',
    icon: 'target',
    tagline: 'Every rupee accountable to results.',
    excerpt:
      'Data-driven paid campaigns across Google & Meta engineered for measurable ROI, not vanity metrics.',
    description:
      'Performance marketing is advertising held accountable to outcomes. We build, test and scale paid campaigns across Google, Meta and beyond — optimizing every rupee toward leads, sales and return on ad spend you can actually see.',
    included: [
      'Full-funnel Google & Meta ads strategy',
      'Campaign setup, tracking & conversion pixels',
      'Audience research & creative testing',
      'A/B testing of copy, creative & landing pages',
      'Budget pacing & bid optimization',
      'Weekly ROAS & performance reporting',
    ],
    benefits: [
      'Predictable, scalable lead & sales flow',
      'Clear return on every advertising rupee',
      'Fast market feedback to refine your offer',
    ],
  },
  {
    slug: 'social-media-management',
    name: 'Social Media Management',
    icon: 'chat',
    tagline: 'Show up like the brand you are.',
    excerpt:
      'Consistent, on-brand content and community management that turns followers into customers.',
    description:
      'Social Media Management keeps your brand present, polished and engaging. From content calendars to community replies, we handle the day-to-day so your channels consistently reflect the quality of your business.',
    included: [
      'Monthly content calendar & strategy',
      'Post, reel & story design and scheduling',
      'Caption writing & hashtag strategy',
      'Community management & engagement',
      'Profile optimization across platforms',
      'Monthly growth & engagement reporting',
    ],
    benefits: [
      'A consistent, professional brand presence',
      'Stronger engagement and community trust',
      'More inbound inquiries from social channels',
    ],
  },
  {
    slug: 'content-marketing',
    name: 'Content Marketing',
    icon: 'pen',
    tagline: 'Content that earns attention.',
    excerpt:
      'Strategic blogs, videos and storytelling that build authority and pull the right audience in.',
    description:
      'Content Marketing builds trust before the sale. We craft blogs, scripts, and storytelling that answer your audience’s questions, showcase your expertise, and quietly guide prospects toward choosing you.',
    included: [
      'Content strategy & editorial calendar',
      'SEO blog & article writing',
      'Video & reel scripting',
      'Email & newsletter content',
      'Lead magnets & downloadable assets',
      'Performance tracking & topic refinement',
    ],
    benefits: [
      'Position your brand as the category authority',
      'Attract high-intent audiences organically',
      'Fuel SEO, social and email with one engine',
    ],
  },
  {
    slug: 'google-my-business',
    name: 'Google My Business (GMB)',
    icon: 'pin',
    tagline: 'Own your local map presence.',
    excerpt:
      'Optimize and manage your Google Business Profile to capture ready-to-buy local customers.',
    description:
      'Your Google Business Profile is often the first impression a local customer gets. We optimize, verify and actively manage it so you show up in the map pack, look credible, and convert nearby searches into visits and calls.',
    included: [
      'Profile setup, verification & optimization',
      'Category, service & attribute tuning',
      'Photo, offer & post management',
      'Review generation strategy & responses',
      'Local keyword & map-pack optimization',
      'Insights & call/direction tracking',
    ],
    benefits: [
      'Appear in the local map pack',
      'Turn nearby searches into calls & visits',
      'Build trust through reviews & fresh content',
    ],
  },
  {
    slug: 'website-development',
    name: 'Website Development',
    icon: 'code',
    tagline: 'Fast, beautiful, built to convert.',
    excerpt:
      'Premium, mobile-first websites that load fast, rank well, and turn visitors into customers.',
    description:
      'Your website is your hardest-working salesperson. We design and build fast, secure, mobile-first sites with clean code and conversion-focused UX — so every visitor has a clear path from curiosity to contact.',
    included: [
      'UX strategy & responsive design',
      'Custom, performance-first development',
      'On-page SEO foundations & schema',
      'CMS setup for easy self-editing',
      'Analytics, forms & integrations',
      'Speed, security & accessibility optimization',
    ],
    benefits: [
      'A premium first impression on every device',
      'Faster load times and better search rankings',
      'More inquiries from a conversion-led design',
    ],
  },
  {
    slug: 'app-development',
    name: 'App Development',
    icon: 'phone',
    tagline: 'Put your brand in their pocket.',
    excerpt:
      'Intuitive, reliable mobile apps that deepen loyalty and open new revenue channels.',
    description:
      'App Development turns loyal customers into a direct channel you own. We design and build intuitive, reliable mobile experiences — from concept to launch — that keep your brand one tap away.',
    included: [
      'Product discovery & feature scoping',
      'UI/UX design & prototyping',
      'iOS & Android development',
      'API & backend integration',
      'QA testing & app-store deployment',
      'Post-launch support & iteration',
    ],
    benefits: [
      'A direct, always-on channel to customers',
      'Deeper loyalty and repeat engagement',
      'New revenue and service opportunities',
    ],
  },
  {
    slug: 'product-designing',
    name: 'Product Designing',
    icon: 'layers',
    tagline: 'Design people love to use.',
    excerpt:
      'User-centered product and interface design that makes digital experiences effortless.',
    description:
      'Product Designing shapes how people experience your digital product. We combine research, wireframing and polished UI to create interfaces that feel intuitive, look stunning, and drive the actions that matter.',
    included: [
      'User research & journey mapping',
      'Wireframing & interactive prototypes',
      'High-fidelity UI design systems',
      'Usability testing & iteration',
      'Design-to-dev handoff assets',
      'Accessibility & responsive design',
    ],
    benefits: [
      'Intuitive experiences that reduce drop-off',
      'A consistent, scalable design system',
      'Higher conversion through better UX',
    ],
  },
  {
    slug: 'graphic-designing',
    name: 'Graphic Designing',
    icon: 'palette',
    tagline: 'Visuals that stop the scroll.',
    excerpt:
      'On-brand graphics, creatives and marketing collateral designed to grab attention and convert.',
    description:
      'Graphic Designing gives your brand its voice in visuals. From social creatives to print collateral, we design eye-catching, on-brand assets that communicate clearly and make your business impossible to ignore.',
    included: [
      'Social media creatives & ad graphics',
      'Brochures, flyers & print collateral',
      'Packaging & label design',
      'Presentation & pitch-deck design',
      'Infographics & data visuals',
      'Brand-consistent templates',
    ],
    benefits: [
      'Instantly recognizable, professional visuals',
      'Higher engagement on ads and social',
      'Consistent brand look across every channel',
    ],
  },
  {
    slug: 'branding',
    name: 'Branding',
    icon: 'star',
    tagline: 'Build a brand people remember.',
    excerpt:
      'Strategic identity, voice and positioning that make your business memorable and trusted.',
    description:
      'Branding is the feeling people have about your business. We craft your identity, voice and positioning from the ground up — building a cohesive brand that earns recognition, trust and premium perception.',
    included: [
      'Brand strategy & positioning',
      'Logo & visual identity system',
      'Color, typography & brand guidelines',
      'Brand voice & messaging framework',
      'Collateral & template design',
      'Rollout across digital touchpoints',
    ],
    benefits: [
      'A memorable, cohesive brand identity',
      'Premium perception and pricing power',
      'Trust that shortens the path to purchase',
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
