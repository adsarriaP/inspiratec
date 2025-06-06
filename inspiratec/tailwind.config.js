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
        animation: {
          floating: 'floating 3s ease-in-out infinite',
        },
        keyframes: {
          floating: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-15px)' },
          },
        },
      },
    },
    plugins: [],
  };
  