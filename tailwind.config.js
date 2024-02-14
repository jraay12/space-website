/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black1: "hsl(230, 35%, 7%)",
        white1: "hsl(0, 0%, 100%)",
        lightWhite: "hsl(231, 77%, 90%)",
      },
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
      },
      backgroundImage: {
        desktop: "url('/src/images/home/desktop.jpg')",
        mobile: "url('/src/images/home/mobile.jpg')",
        tablet: "url('/src/images/home/tablet.jpg')",
        destinationDesktop: "url('/src/images/destination/desktop.jpg')",
        destinationTablet: "url('/src/images/destination/tablet.jpg')",
        destinationMobile: "url('/src/images/destination/mobile.jpg')",
        CrewDesktop: "url('/src/images/crew/CrewDesktop.jpg')",
        CrewTablet: "url('/src/images/crew/CrewTablet.jpg')",
        CrewMobile: "url('/src/images/crew/CrewMobile.jpg')",
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
