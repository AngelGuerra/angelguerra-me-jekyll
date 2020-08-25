export default function enableLinkPropagation() {
  const dataContainers = [].slice.call(document.querySelectorAll("[data-clickpropagation]"));

  if (!dataContainers.length) {
    return;
  }

  dataContainers.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      const allLinks = event.currentTarget.querySelectorAll("a");

      if (!allLinks.length) {
        return false;
      }

      if (allLinks.length === 1) {
        allLinks[0].click();
      }

      const mainLinks = [].slice.call(allLinks).filter((node) => node.dataset.link && node.dataset.link === "main");

      if (!mainLinks.length) {
        return false;
      }

      mainLinks[0].click();
    });
  });
}
