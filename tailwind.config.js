// const { plugin } = require("tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        button: {
          main: "rgb(101,24,131)",
          "main-hover": "#5A6C7D",
        },
        primary: { main: "rgb(107,70,157)" },
        secondary: {
          main: "black",
          light: "rgba(122,121,169,0.648)",
        },
        font: {
          header: "#40008eb4",
          subtitle: "rgb(86,56,151)",
        },
      },
      animation: {
        enter: "enter 1s ease-in",
      },
      keyframes: {
        enter: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [],
};
