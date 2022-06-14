/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: {
          100: '#fffefe',
          200: '#f7f7f6',
          300: '#eff7f7',
          400: '#e7f5ff',
        },
        brown: {
          100: "#333235",
        },
        primary: {
          10: "#16447a",
          50: "#17457a",
          100: "#010f4b",
          200: "#000c49",
        },
        aqua: {
          100: "#0192fe",
        }
      }
    },
  },
  plugins: [],
}
