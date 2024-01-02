/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C778DD",
        white: "#FFFFFF",
        background: "#282C33",
        gray: "#ABB2BF",
      },
      screens: {
        mobile: "320px",
        GalaxyS8: "360px",
        iPhoneSE: "375px",
        iPhone12: "390px",
        Pixel7: "412px",
        iPhoneXR: "414px",
      },
      fontFamily: {
        default: ["'Fira Code', monospace"],
      },
    },
  },
  plugins: [],
};
