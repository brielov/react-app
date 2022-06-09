/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        standalone: { raw: "(display-mode: standalone)" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
