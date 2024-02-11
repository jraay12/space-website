/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "hsl(230, 35%, 7%)",
        white: "hsl(0, 0%, 100%)",
        lightWhite: "hsl(231, 77%, 90%)",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
