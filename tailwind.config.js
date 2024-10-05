const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        written: ["Caveat"],
        header: ["Notable"],
        subheader: ["Inter Tight"],
        danfo: ["Danfo"],
        code: ["Source Code Pro"]
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      colors: {
        background: {
          default: "#161617",
          hover: "#222224"
        },
        text: {
          default: "#edeef0",
          body: "#777b84"
        },
        bubbles: {
          small: "#070708",
          medium: "#0d0d0d",
          large: "#000000"
        }
      },
    },
  },
  plugins: [],
};
