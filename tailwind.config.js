/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Avenir, helvetica, Arial, sans-serif",
    },

    extend: {
      screens: {
        md: "720px",
        lg: "920px",
      },
      colors: {
        grayishBlue: "#2c3e50",
        darkBlue: "#12002b",
        accentGreen: "#00bc77",
        lightGray: "#cccccc",
      },
    },
  },
  plugins: [],
};
