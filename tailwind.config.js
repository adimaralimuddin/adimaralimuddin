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
          main: "#3C4A57",
          "main-hover": "#5A6C7D",
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
