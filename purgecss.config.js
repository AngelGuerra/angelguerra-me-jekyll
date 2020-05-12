module.exports = {
  content: ["_site/**/*.html", "_site/**/*.js"],
  css: ["_site/assets/webpack/main.bundle.css"],
  output: "_site/assets/webpack/main.bundle.css",
  whitelist: ["dark-mode"],
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
