/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./resources/views/**.ejs", "./resources/views/default/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

