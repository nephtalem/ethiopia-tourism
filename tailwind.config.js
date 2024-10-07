/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        halant: ["Halant", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },

      colors: {
        brown: "#75492D",
        darkbrown: "#45291B",
        lightBrown: "#BD9881",
        lightblue: "#387AC8",
      },
    },
  },
  plugins: [],
};
