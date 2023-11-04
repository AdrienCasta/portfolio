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
          /**
           * Step: 1
           * Usage: Backgrounds
           * Pairs with: Steps 11, 12 text
           */
          1: "#FDFCFE",
          /**
           * Step: 2
           * Usage: Backgrounds
           * Pairs with: Steps 11, 12 text
           */
          2: "#FAF8FF",
          /**
           * Step: 2
           * Usage: Backgrounds
           * Pairs with: Steps 11, 12 text
           */
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
          /**
           * Usage: Backgrounds
           * Pairs with: Steps 11, 12 text
           */
          1: "#14121F",
          /**
           * Usage: Backgrounds
           * Pairs with: Steps 11, 12 text
           */
          2: "#1B1525",
          /**
           * Usage: Interactive components
           * Pairs with: Steps 11 labels, Step 12 text
           */
          3: "#291F43",
          /**
           * Usage: Interactive components
           * Pairs with: Steps 11, 12 labels
           */
          4: "#33255B",
          /**
           * Usage: Interactive components
           * Pairs with: Step 12 labels
           */
          5: "#3C2E69",
          /**
           * Usage: Borders and separators
           * Pairs with: Steps 1–5 backgrounds
           */
          6: "#473876",
          /**
           * Usage: Borders and separators
           * Pairs with: Steps 1–5 backgrounds
           */
          7: "#56468B",
          /**
           * Usage: Borders, focus rings
           * Pairs with: Steps 1–5 backgrounds
           */
          8: "#6958AD",
          /**
           * Usage: Solid backgrounds, buttons
           * Pairs with: White text
           */
          9: "#6958AD",
          /**
           * Usage: Solid backgrounds, buttons
           * Pairs with: White text
           */
          10: "#7D66D9",
          /**
           * Usage: Secondary text, links
           * Pairs with: Background colors
           */
          11: "#BAA7FF",
          /**
           * Usage: High-contrast text
           * Pairs with: Background colors
           */
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
