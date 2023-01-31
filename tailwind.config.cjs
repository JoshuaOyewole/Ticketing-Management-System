/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-200': 'rgba(225,102,0,0.95)',
        'primary-300': '#F78F20',
        'primary': 'rgb(225,102,0)',
        'grey':'rgb(237, 237, 237)',
        'primary-light': 'rgba(225,105,35,0.14)',
        'red': '#ff0000',
      },
      backgroundImage: {
        'slideshow': "url('./assets/bg.png')",
        'bg': "url('./assets/herobg.jpg')",
        'airport': "url('./assets/airport.jpg')",
        'airport2': "url('./assets/airport2.jpg')",
      },
      fontFamily: {
        'open': ['Open Sans', ...defaultTheme.fontFamily.sans],
        'poppin': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '1xl': '1440px',
      }
    },
  },
  plugins: [],
}
