/**
 * Loads dark theme (or not)
 */
export default function loadThemeMode() {
  /**
   * @desc Check dark mode user prefs
   * @returns {bool} if dark mode is enabled or not
   */
  const checkDarkMode = () => {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    /**
     * @desc Toggle dark mode
     * @param {bool} enable If dark mode has to be enabled or not
     * @return void
     */
    toggleDarkMode = (enable) => {
      if (enable) {
        document.documentElement.classList.add("dark-mode");
        return;
      }

      document.documentElement.classList.remove("dark-mode");
    };

  window.matchMedia("(prefers-color-scheme: dark)").addListener((e) => {
    toggleDarkMode(e.matches);
  });

  toggleDarkMode(checkDarkMode());
}
