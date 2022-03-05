const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/pages/**/*.js", "./src/components/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Avenir Next"],
      body: ["Roboto"],
      display: ["Roboto Slab"],
      serif: ["Georgia"],
    },
  },
};
