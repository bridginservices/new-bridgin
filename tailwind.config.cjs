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
          DEFAULT: '#00E5FF',
          bright: '#22ECFF',
          deep: '#00B8CC',
        },
        offwhite: '#F2F2F2',
      },
      fontFamily: {
        // Bold geometric font for headings, clean sans for body
        heading: ['"Space Grotesk"', 'Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 229, 255, 0.35)',
        'glow-lg': '0 0 40px rgba(0, 229, 255, 0.45)',
        'glow-sm': '0 0 12px rgba(0, 229, 255, 0.30)',
      },
      dropShadow: {
        glow: '0 0 10px rgba(0, 229, 255, 0.55)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0,229,255,0.55)' },
          '50%': { boxShadow: '0 0 22px 6px rgba(0,229,255,0.20)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        gridDrift: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        gridDrift: 'gridDrift 8s linear infinite',
      },
    },
  },
  plugins: [],
};
