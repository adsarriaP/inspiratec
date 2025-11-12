/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        inspiraYellow: '#D8C60E',
        inspiraPurple: '#B10ED8',
      },
    },
  },
  plugins: [],
}

