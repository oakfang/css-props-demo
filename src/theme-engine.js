import { switchTheme, getTheme } from "./theme-state";

export class ThemeEngine {
  static init() {
    return new ThemeEngine();
  }

  constructor() {
    this.themeSwitch = document.getElementById("theme-switch");
    this.setupEvents();
  }

  setupEvents() {
    this.themeSwitch.addEventListener("click", () => {
      switchTheme();
    });
  }
}
