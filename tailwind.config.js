const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.js",
    "./src/pages/**/*.md",
    "./src/pages/**/*.mdx",
    "./src/components/**/*.js",
  ],
  theme: {
    colors: {
      white: colors.white,
      gray: colors.slate,
      blue: colors.sky,
      purple: colors.violet,
      yellow: colors.amber,
    },
    fontFamily: {
      sans: ["Fira Sans", "Roboto", "Avenir Next"],
      body: ["Fira Sans", "Roboto"],
      display: ["Playfair Display", "Roboto Slab"],
      serif: ["Georgia"],
    },
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            h2: {
              color: theme("colors.purple.200"),
              marginTop: "1.0rem",
              marginBottom: "0.5rem",
            },
            p: {
              marginTop: "0.5rem",
            },
          },
        },
        lg: {
          css: {
            p: {
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            },
          },
        },
        "2xl": {
          css: {
            p: {
              color: theme("colors.yellow.100"),
              marginTop: "0.5rem",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
