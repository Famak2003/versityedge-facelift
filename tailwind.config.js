/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      screens: {
        Lxl: "1420px",
        semiLarge: "1180px",
        Lmd: "900px",
        xlmobile: "560px",
        lmobile: "500px",
        mobile: "420px",
        smobile: "300px",
        ss: "370px",
        xs: "0px",
      },
      boxShadow: {
        "carousel-button-shadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
    },
  },
  plugins: [],
};
