module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/webpack/main.bundle.css"],
  output: "_site/assets/webpack/main.bundle.css",
  // Clases de modo oscuro y que se añaden dinámicamente por data-attribute
  whitelist: [
    "dark-mode",
    "w-5",
    "w-full",
    "inline-block",
    "fill-current",
    "transition",
    "duration-500",
    "ease-in-out",
  ],
  extractors: [
    {
      extractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
        return broadMatches.concat(innerMatches);
      },
      extensions: ["html", "js"],
    },
  ],
};
