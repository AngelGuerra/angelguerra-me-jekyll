/**
 * about:config -> ui.systemUsesDarkTheme: Establecido a mano, se puede eliminar
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
 */
const enableDarkMode = function ({ addVariant, theme, e }) {
  const darkSelector = theme("darkSelector", ".dark-mode");

  addVariant("dark", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${darkSelector} .${e(`dark${separator}${className}`)}`;
    });
  });

  addVariant("dark-hover", ({ modifySelectors, separator }) => {
    modifySelectors(({ className }) => {
      return `${darkSelector} .${e(`dark-hover${separator}${className}`)}:hover`;
    });
  });
};

module.exports = function () {
  return enableDarkMode;
};
