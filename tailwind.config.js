/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#4ade80', // was 400
          400: '#22c55e', // was 500
          500: '#16a34a', // was 600 - Deeper base
          600: '#15803d', // was 700 - Deeper hover
          700: '#166534', // was 800
          800: '#14532d', // was 900
          900: '#052e16', // was 950
          950: '#021f0f', // custom darker
        },
      },
    },
  },
  plugins: [],
}
