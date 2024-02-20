/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        "primary-blue-1": "#0a66c2",
        "primary-white-1": "#fff",
        "primary-green": "#42EC18",
        "primary-black": "#4C4E4E",
        "signal-yellow": "#F8BF03",
        "success-green": "#25A506",
        "primary-red": "#FF2121",
        black: "#000",
        "primary-white-2": "#eff1f3",
        "primary-black-7": "#cdcdce",
        "primary-blue-7": "#9dceff",
      },
      spacing: {},
      borderRadius: {
        "17xl": "36px",
      },
      fontSize: {
        xl: "20px",
        base: "16px",
        sm: "14px",
        lg: "18px",
        "5xl": "24px",
        "29xl": "48px",
        inherit: "inherit",
      },

      screens: {
        Lxl: "1420px",
        large: "1340px",
        semiLarge: "1180px",
        Lmd: "900px",
        ssm: "600px",
        xlmobile: "560px",
        lmobile: "500px",
        mobile: "431px",
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
