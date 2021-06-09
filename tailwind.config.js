const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["public/index.html", "src/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
