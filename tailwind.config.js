/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {


      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
    },
    colors: {
      'primary': '#0779e3',
      'secondary': '#E8AEB7',
      'tertiary': '#1F2041',
      'light': '#77D8D8',
      'mark': '#FFC857',
      'white': '#FBFFF1',
      'dark': '#000000'
    },
    fontFamily: {
      arima: ['Arima', 'sans-serif'],
      wide: ['wide', 'sans-serif'],
      inter: ['inter', 'sans-serif']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      gridTemplateColumns: {
        'header': '20% 75%',
      }
    }
  },
  plugins: [],
}
