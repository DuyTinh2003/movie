/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#febb00",
        modal: "rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {},
      animation: {
        zoom: "zoom 0.6s linear",
        fadeIn: "fadeIn 0.6s linear",
        slideDown: "slideDown 0.4s linear 0.8s forwards",
        slideDown500: "slideDown 0.3s linear 0.5s forwards",
      },
    },
    keyframes: {
      zoom: {
        "0%": { transform: "scale(0)", opacity: "0" },
        "100%": { transform: "scale(1)", opacity: "1" },
      },
      slideDown: {
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
