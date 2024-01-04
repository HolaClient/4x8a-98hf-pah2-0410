/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./themes/default/*.ejs", "./themes/default/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwind base"),
    require("@tailwind components"),
    require("@tailwind utilities;"),
],
}

