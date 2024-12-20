/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1570EF",
        secondary: "#D5D7DA",
        sidebarText: "#414651",
        black: "#181D27",
      },
      fontFamily: {
        satoshi: ["Satoshi-Regular", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
