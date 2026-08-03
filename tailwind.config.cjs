/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — see spec section 2 (Design System)
        ink: {
          DEFAULT: '#0A0A0A', // primary background (near-black)
          950: '#000000',
          900: '#0A0A0A',
          850: '#111111',
          800: '#161616',
        },
        cyan: {
          // Single accessible cyan used consistently for accents/headings/links
          DEFAULT: '#37C1F0',
          bright: '#63CFF5',
          deep: '#1AA0D6',
        },
        offwhite: '#F2F2F2',
      },
      fontFamily: {
        // Bold geometric font for headings, clean sans for body
        heading: ['"Space Grotesk"', 'Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(55, 193, 240, 0.35)',
        'glow-lg': '0 0 40px rgba(55, 193, 240, 0.45)',
        'glow-sm': '0 0 12px rgba(55, 193, 240, 0.30)',
        // Layered depth for cards/surfaces on the dark canvas.
        card: '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 18px 40px -22px rgba(0,0,0,0.75)',
        'card-hover':
          '0 1px 0 0 rgba(255,255,255,0.08) inset, 0 24px 60px -24px rgba(0,0,0,0.85), 0 0 24px rgba(55,193,240,0.22)',
      },
      dropShadow: {
        glow: '0 0 10px rgba(55, 193, 240, 0.55)',
      },
      backgroundImage: {
        // Reusable radial cyan wash for section tops / hero backdrops.
        'radial-cyan':
          'radial-gradient(60% 55% at 50% 0%, rgba(55,193,240,0.14) 0%, rgba(55,193,240,0) 70%)',
        // Subtle top-lit surface sheen for cards.
        'surface-sheen':
          'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.015) 40%, rgba(255,255,255,0) 100%)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(55, 193, 240,0.55)' },
          '50%': { boxShadow: '0 0 22px 6px rgba(55, 193, 240,0.20)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        gridDrift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        gridDrift: 'gridDrift 8s linear infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
