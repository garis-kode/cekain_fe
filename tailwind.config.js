/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50:  '#003D4D',
          100: '#004C66',
          200: '#005A80',
          300: '#006999',
          400: '#0077B3',
          500: '#0086CC',
          600: '#0094E6',
          700: '#00A3FF',
          800: '#00B2FF',
          900: '#00C1FF',
          950: '#F1FAFF',
          1000: '#E4EFF9',

        },
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}

