export default function loadIcons() {
  /**
   * @var {Object} icons Icons of simple-icons library
   */
  const icons = {
      github: require("simple-icons/icons/github"),
      twitter: require("simple-icons/icons/twitter"),
      linkedin: require("simple-icons/icons/linkedin"),
      jekyll: require("simple-icons/icons/jekyll"),
      netlify: require("simple-icons/icons/netlify"),
      tailwindcss: require("simple-icons/icons/tailwindcss"),
      simpleicons: require("simple-icons/icons/simpleicons"),
      webpack: require("simple-icons/icons/webpack"),
      opensuse: require("simple-icons/icons/opensuse"),
      ubuntu: require("simple-icons/icons/ubuntu"),
      visualstudiocode: require("simple-icons/icons/visualstudiocode"),
      slack: require("simple-icons/icons/slack"),
      telegram: require("simple-icons/icons/telegram"),
      whatsapp: require("simple-icons/icons/whatsapp"),
      googlehangoutsmeet: require("simple-icons/icons/googlehangoutsmeet"),
      gmail: require("simple-icons/icons/gmail"),
      protonmail: require("simple-icons/icons/protonmail"),
      mozillafirefox: require("simple-icons/icons/mozillafirefox"),
      duckduckgo: require("simple-icons/icons/duckduckgo"),
      googlechrome: require("simple-icons/icons/googlechrome"),
      tor: require("simple-icons/icons/tor"),
    },
    /**
     * @var {array} svgWrappers Collection of SVG Wrappers
     */
    svgWrappers = [].slice.call(document.querySelectorAll(".svg-wrapper")),
    addFillStyle = (element, color) => {
      element.style.fill = color;
    },
    /**
     * @desc Injects the SVG into the wrapper
     * @param {HTMLElement} wrapper The HTML DOM Object where the icon is going to inject into
     * @return void
     */
    replaceImgWithSvg = (wrapper) => {
      if (!wrapper.dataset.icon) {
        return;
      }

      wrapper.insertAdjacentHTML("afterbegin", icons[wrapper.dataset.icon].svg);

      if (!wrapper.dataset.class) {
        return;
      }

      let classList = wrapper.dataset.class.split(",").map((item) => item.trim());
      wrapper.querySelector("svg").classList.add(...classList);

      if (wrapper.dataset.fill) {
        wrapper.parentElement.addEventListener("mouseenter", () => {
          let color = `#${icons[wrapper.dataset.icon].hex}`;
          addFillStyle(wrapper.querySelector("svg"), color);
        });

        wrapper.parentElement.addEventListener("mouseleave", () => {
          // let color = `#${icons[wrapper.dataset.icon].hex}`;
          addFillStyle(wrapper.querySelector("svg"), "currentColor");
        });

        // wrapper.querySelector("svg").style.fill = color;
        // wrapper.parentElement.style.boxShadow = `0 1px 3px 0 ${color}, 0 1px 2px 0 ${color}`;
        //
      }
      // wrapper.querySelector("svg").style.fill = "#" + icons[wrapper.dataset.icon].hex;
    };

  svgWrappers.forEach(function (svgWrapper) {
    replaceImgWithSvg(svgWrapper);
  });
}
