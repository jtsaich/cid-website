/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rosarivo': ['Rosarivo', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'deep-blue': '#024873',
        'dark-brown': '#836F59',
        'light-beige': '#F2EEEB',
        'mid-beige': '#D9CCC1',
      },
    },
  },
  plugins: [],
}