/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gotham Book", "sans-serif"],
        gotham_black: ["Gotham Black", "sans-serif"],
        gotham_book: ["Gotham Book", "sans-serif"],
        gotham_light: ["Gotham Light", "sans-serif"],
        gotham_bold: ["Gotham Bold", "sans-serif"]
      },
      colors: {
        yellow: {
          500: '#FFB612',
        },
        gray: {
          500: '#808080',
          800: '#333333'
        },
        red: {
          500: '#dc0a17',
        },
        green: {
          500: '#2FC022',
        }
      }
    },
  },
  plugins: [],
}