/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['"./index.html"', "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'cs-light-gray': '#D9D9D9',
        'cs-orange': '#FE6100',
        'cs-red': 'red'
      },
      screens: {
        xs: '520px',
        sm: '664px',
        md: '850px',
        lg: '1004px',
        xl: '1080px',
        '2xl': '1264px',
        '3xl': '1404px'
      },
    },
  },
  plugins: [],
}

