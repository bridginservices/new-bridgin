// ============================================================
// Site-wide configuration & brand constants.
// ⚠️ PLACEHOLDERS TO FILL BEFORE LAUNCH — see spec §14.
// ============================================================

export const site = {
  name: "bRIDGIN'",
  legalName: "bRIDGIN' Marketing Services",
  tagline: 'Bridging Brands to Digital Success.',
  description:
    "bRIDGIN' Marketing Services is a digital marketing agency helping local businesses grow online with SEO, performance marketing, social media, web & app development, and branding.",

  phone: '+91 95955 31212',
  phoneHref: 'tel:+919595531212',

  email: 'bridginservices@gmail.com',

  address: 'Nagpur, Maharashtra, India',

  // Google Maps embed src. Replace with an exact business pin when available.
  mapEmbedSrc:
    'https://www.google.com/maps?q=Nagpur%2C%20Maharashtra%2C%20India&output=embed',

  socials: {
    linkedin: 'https://www.linkedin.com/company/bridgin-marketing/',
    instagram:
      'https://www.instagram.com/bridgin__marketing?igsh=dTJjMHVud2xxcTR0',
    facebook: 'https://www.facebook.com/share/1Gaf5nYbwR/',
  },
};

// Primary navigation (spec §3)
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact Us', href: '/contact-us' },
];
