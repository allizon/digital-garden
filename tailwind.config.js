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
      sans: ["Fira Sans", "Roboto", "Avenir Next"],
      body: ["Fira Sans", "Roboto"],
      display: ["Playfair Display", "Roboto Slab"],
      serif: ["Georgia"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
