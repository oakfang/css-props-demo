import { switchTheme, getTheme } from "./theme-state";

export class ThemeEngine {
  static init() {
    return new ThemeEngine();
  }

  constructor() {
    this.themeSwitch = document.getElementById("theme-switch");
    this.setupEvents();
    this.registerTheme();
  }

  setupEvents() {
    this.themeSwitch.addEventListener("click", () => switchTheme());
  }

  registerTheme() {
    const theme = getTheme();
    Object.entries(theme.palette).forEach(([name, value]) => {
      try {
        CSS.registerProperty({
          name: `--theme-${name}`,
          syntax: "<color>",
          inherits: true,
          initialValue: value,
        });
      } catch {}
    });
  }
}
