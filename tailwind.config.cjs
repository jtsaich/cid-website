/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rosarivo: ["Rosarivo", "Noto Sans TC", "serif"],
        montserrat: ["Montserrat", "Noto Sans TC", "sans-serif"],
      },
      colors: {
        // Blues
        "blue-dark": "#012340",
        "blue-deep": "#024873",
        "blue-mid": "#3A6D8B",
        // Browns
        "brown-dark": "#836F59",
        "brown-deep": "#A58861",
        "brown-mid": "#B69F80",
        // Beiges
        "beige-mid": "#D9CCC1",
        "beige-light": "#F2EEEB",
        // Greens
        "green-deep": "#496966",
        // Reds
        "red-deep": "#914444",
        // Neutrals
        black: "#000000",
        white: "#FFFFFF",
      },
      screens: {
        "2xl": "1536px",
        "3xl": "1920px",
      },
      maxWidth: {
        "container-xs": "100%", // < 390px
        "container-sm": "344px", // >= 390px
        "container-md": "456px", // >= 640px
        "container-lg": "608px", // >= 768px
        "container-xl": "760px", // >= 1024px
        "container-2xl": "1064px", // >= 1280px
        "container-3xl": "1216px", // >= 1536px
        "container-4xl": "1520px", // >= 1920px
      },
      gridTemplateColumns: {
        19: "repeat(19, minmax(0, 1fr))",
        19: "repeat(19, minmax(0, 1fr))",
        27: "repeat(27, minmax(0, 1fr))",
        31: "repeat(31, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-19": "span 19 / span 19",
      },
      gridColumnStart: {
        15: "15",
        21: "21",
        23: "23",
      },
      fontSize: {
        title1: [
          "4.5rem",
          {
            lineHeight: 1.5,
            fontWeight: "normal",
          },
        ],
        title2: [
          "3.5rem",
          {
            lineHeight: 1.5,
            fontWeight: "normal",
          },
        ],
        title3: [
          "3rem",
          {
            lineHeight: 1.5,
            fontWeight: "normal",
          },
        ],
        headline1: [
          "2.5rem",
          {
            lineHeight: 1.4,
            fontWeight: "normal",
          },
        ],
        headline2: [
          "2.25rem",
          {
            lineHeight: 1.5,
            fontWeight: "normal",
          },
        ],
        headline3: [
          "2rem",
          {
            lineHeight: 1.5,
            fontWeight: "normal",
          },
        ],
        headline4: [
          "1.5rem",
          {
            lineHeight: 1.5,
            fontWeight: "normal",
          },
        ],
        subhead1: [
          "1.5rem",
          {
            lineHeight: 1.5,
            fontWeight: "semibold",
          },
        ],
        body1: [
          "1.25rem",
          {
            lineHeight: 1.6,
            fontWeight: "semibold",
          },
        ],
        body2: [
          "1.25rem",
          {
            lineHeight: 1.6,
            fontWeight: "normal",
          },
        ],
        body3: [
          "1rem",
          {
            lineHeight: 1.5,
            fontWeight: "semibold",
          },
        ],
        body4: [
          "1rem",
          {
            lineHeight: 1.5,
            fontWeight: "normal",
          },
        ],
      },
    },
  },
  plugins: [],
};
