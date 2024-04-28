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
      keyframes: {
        toastInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        toastInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        toastInRight: "toastInRight 0.5s",
        toastInLeft: "toastInLeft 0.5s",
      },
    },
  },
  plugins: [],
};
