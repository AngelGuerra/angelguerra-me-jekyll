export default function navigation() {
  const shuffle = (arr) => {
      return arr
        .map((a) => [Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map((a) => a[1]);
    },
    Navigation = class {
      constructor(navigationItems) {
        this.navigationItems = navigationItems;
      }

      sayHello() {
        this.printMessage(shuffle(["👋️", "👋🏻️", "👋🏼️", "👋🏽️", "👋🏾️", "👋🏿️"]).join(" "));
      }

      sayBye() {
        this.printMessage(shuffle(["✊️", "✊🏻️", "✊🏼️", "✊🏽️", "✊🏾️", "✊🏿"]).join(" "));
      }

      debug() {
        console.debug(this);
      }

      print() {
        console.table(this.navigationItems, ["name", "emoji", "uri"]);
      }

      printTitle(title) {
        console.info(`%c${title}`, "color: #212121; font-weight: bold; font-size: 1.10rem;");
      }

      printMessage(message) {
        console.info(`%c${message}`, "color: #212121");
      }
    },
    NavigationItem = class {
      constructor(name, path, emoji, desc) {
        this.name = name;
        this.path = path;
        this.emoji = emoji;
        this.uri = `https://angelguerra.me${path}`;
        this.desc = desc;
      }
    },
    navigationItems = [
      new NavigationItem("home", "/", "🏡️", "Página principal"),
      new NavigationItem("uses", "/uses", "💻️", "Tecnologías que utilizo en mi día a día como desarrollador"),
    ],
    nav = new Navigation(navigationItems);

  nav.sayHello();
  nav.printTitle("Bienvenid@ a mi página web");
  nav.printMessage("Leer con voz de Diego 🐯️ (Ice Age): ¿Dónde está la navegación de la página? ¡Aquí está!");
  nav.print();
  nav.printMessage("Aquí te dejo el objeto menú, por si quieres trastear con él");
  nav.debug();
  nav.printMessage("¡Gracias por la visita! Salúdame, si te apetece, en Twitter -> @AngelLGuerra");
  nav.sayBye();
}
