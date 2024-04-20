/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./resources/views/**/*.ejs",
    "./resources/views/fallback/**/*.{html,js}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: colors
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}