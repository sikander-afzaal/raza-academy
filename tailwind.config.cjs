const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        blackBg: "url(/black-bg.png)",
        orangeGr:
          "linear-gradient(90deg, #A15B3A -10.46%, rgba(194, 99, 54, 0.82) 41.35%, rgba(237, 119, 64, 0.92) 100.03%)",
      },
      colors: {
        orange: "#CC6600",
        lightOrange: "#FF9122",
        cream: "#F8F5F4",
      },
      boxShadow: {
        btn: " 0px 3.09939px 15.497px rgba(0, 0, 0, 0.38)",
      },
      maxWidth: {
        theme: "1500px",
      },
    },
  },
  plugins: [],
};
