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
      new NavigationItem("home", "/", "🏡️", "Main page"),
      new NavigationItem("uses", "/uses/", "💻️", "Techs used by me as a developer"),
      new NavigationItem("cookies", "/cookies/", "🍪", "Cookies policy"),
    ],
    nav = new Navigation(navigationItems);

  nav.sayHello();
  nav.printTitle("Welcome to my personal website!");
  nav.printMessage("Read with Diego's 🐯️ (Ice Age) voice: Where's the navigation? There it is!");
  nav.print();
  nav.printMessage("Thanks for your visit! 📣, if you want, in Twitter -> @AngelLGuerra");
  nav.sayBye();
}
