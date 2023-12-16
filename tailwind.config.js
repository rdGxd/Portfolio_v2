/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#C778DD",
      white: "#FFFFFF",
      background: "#282C33",
      gray: "#ABB2BF",
    },
    extend: {},
    fontFamily: {
      default: ['"Fira Code"'],
    },
  },
  plugins: [],
};
