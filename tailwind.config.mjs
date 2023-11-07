/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      sans: ['"Gabarito"', ...defaultTheme.fontFamily.sans],
      serif: ['"Vollkorn"', ...defaultTheme.fontFamily.serif],
      fontFamily: {
        heading: "Gabarito",
        body: "Vollkorn",
      },
      colors: {
        violet: {
          1: "#FDFCFE",
          2: "#FAF8FF",
          3: "#F4F0FE",
          4: "#EBE4FF",
          5: "#E1D9FF",
          6: "#D4CAFE",
          7: "#C2B5F5",
          8: "#AA99EC",
          9: "#6E56CF",
          10: "#654DC4",
          11: "#6550B9",
          12: "#2F265F",
        },
        "violet-dark": {
          1: "#14121F",
          2: "#1B1525",
          3: "#291F43",
          4: "#33255B",
          5: "#3C2E69",
          6: "#473876",
          7: "#56468B",
          8: "#6958AD",
          9: "#6958AD",
          10: "#7D66D9",
          11: "#BAA7FF",
          12: "#E2DDFE",
        },
      },
      background: {},
      backgroundImage: ({ theme }) => ({
        dots: `radial-gradient(${theme(
          "colors.violet.6"
        )} 1px, transparent 1px)`,
        "dots-dark": `radial-gradient(${theme(
          "colors.violet-dark.6"
        )} 1px, transparent 1px)`,
      }),
    },
  },
  plugins: [],
};
