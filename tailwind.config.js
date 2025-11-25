/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Syncopate"', 'sans-serif'],
      },
      colors: {
        'brand-black': '#0a0a0a',
        'brand-silver': '#e2e2e2',
        'brand-gray': '#262626',
      },
      backgroundImage: {
        'noise': "url('https://grainy-gradients.vercel.app/noise.svg')", // Adding texture for "Edgy" feel
      }
    },
  },
  plugins: [],
}
