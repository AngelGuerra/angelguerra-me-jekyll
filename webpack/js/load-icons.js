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
    },
    /**
     * @var {array} svgWrappers Collection of SVG Wrappers
     */
    svgWrappers = [].slice.call(document.querySelectorAll(".svg-wrapper")),
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
      // wrapper.querySelector("svg").style.fill = "#" + icons[wrapper.dataset.icon].hex;
    };

  svgWrappers.forEach(function (svgWrapper) {
    replaceImgWithSvg(svgWrapper);
  });
}
