import enableLinkPropagation from "./js/enable-link-ropagation";
import loadIcons from "./js/load-icons";
import loadThemeMode from "./js/load-theme-mode";
import navigation from "./js/navigation";

document.addEventListener("DOMContentLoaded", () => {
  enableLinkPropagation();
  loadIcons();
  loadThemeMode();
  navigation();
});
