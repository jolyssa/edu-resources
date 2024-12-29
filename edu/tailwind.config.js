/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        ibm: ['IBM Plex Mono', 'monospace'],
        rm: ['Roboto Mono', 'monospace']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }

    },
  },
  plugins: [],
}