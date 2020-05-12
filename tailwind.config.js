const plugin = require("tailwindcss/plugin");
const darkMode = require("./dark-mode");

module.exports = {
  purge: false,
  theme: {},
  variants: {
    backgroundColor: ["dark"],
    textColor: ["responsive", "hover", "focus", "dark", "dark-hover"],
  },
  plugins: [plugin(darkMode())],
};
