/** @type {import('tailwindcss').Config} */
import {colors}  from "./src/colors";
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: colors
    },
  },
  plugins: [],
}

