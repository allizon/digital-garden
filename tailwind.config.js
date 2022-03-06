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
    },
    fontFamily: {
      sans: ["Roboto", "Avenir Next"],
      body: ["Roboto"],
      display: ["Roboto Slab"],
      serif: ["Georgia"],
    },
  },
};
