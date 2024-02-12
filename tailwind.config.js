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
      backgroundImage: {
        desktop: "url('/src/images/home/desktop.jpg')",
        mobile: "url('/src/images/home/mobile.jpg')",
        tablet: "url('/src/images/home/tablet.jpg')",
      },
      screens: {
        mobile: "375px",
        desktop: "1024px",
        tablet: "768px",
      },
    },
  },
  plugins: [],
};
