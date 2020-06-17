export default function loadIcons() {
  /**
   * @var {Object} icons Icons of simple-icons library
   */
  const icons = {
      amd: require("simple-icons/icons/amd"),
      asus: require("simple-icons/icons/asus"),
      brave: require("simple-icons/icons/brave"),
      citroen: require("simple-icons/icons/citroen"),
      duckduckgo: require("simple-icons/icons/duckduckgo"),
      duolingo: require("simple-icons/icons/duolingo"),
      github: require("simple-icons/icons/github"),
      gmail: require("simple-icons/icons/gmail"),
      googlechrome: require("simple-icons/icons/googlechrome"),
      hp: require("simple-icons/icons/hp"),
      huawei: require("simple-icons/icons/huawei"),
      intel: require("simple-icons/icons/intel"),
      jekyll: require("simple-icons/icons/jekyll"),
      linkedin: require("simple-icons/icons/linkedin"),
      mozillafirefox: require("simple-icons/icons/mozillafirefox"),
      netlify: require("simple-icons/icons/netlify"),
      opensuse: require("simple-icons/icons/opensuse"),
      protonmail: require("simple-icons/icons/protonmail"),
      samsung: require("simple-icons/icons/samsung"),
      simpleicons: require("simple-icons/icons/simpleicons"),
      slack: require("simple-icons/icons/slack"),
      steam: require("simple-icons/icons/steam"),
      tailwindcss: require("simple-icons/icons/tailwindcss"),
      telegram: require("simple-icons/icons/telegram"),
      tor: require("simple-icons/icons/tor"),
      twitter: require("simple-icons/icons/twitter"),
      ubuntu: require("simple-icons/icons/ubuntu"),
      unsplash: require("simple-icons/icons/unsplash"),
      vim: require("simple-icons/icons/vim"),
      visualstudiocode: require("simple-icons/icons/visualstudiocode"),
      webpack: require("simple-icons/icons/webpack"),
      whatsapp: require("simple-icons/icons/whatsapp"),
      xiaomi: require("simple-icons/icons/xiaomi"),
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
