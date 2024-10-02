<<<<<<< HEAD
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
  plugins: [],
=======
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  content: [
    "./resources/views/**/*.js",
    "./src/modules/router/errors.js",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        slate: colors.slate,
        zinc: colors.zinc,
        gray: colors.gray,
        stone: colors.stone,
        neutral: colors.neutral
      }
    },
  },
  plugins: [],
>>>>>>> 24dbde8 (merge X1 files)
}