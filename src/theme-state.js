import { lightTheme, darkTheme } from "./themes";

function applyTheme(theme) {
  Object.entries(theme.palette).forEach(([name, value]) => {
    document.body.style.setProperty(`--theme-${name}`, value);
  });

  Object.entries(theme.sizing).forEach(([name, value]) => {
    document.body.style.setProperty(`--theme-sizing-${name}`, value);
  });
}

let theme = matchMedia("(prefers-color-scheme: dark)")?.matches
  ? darkTheme
  : lightTheme;

applyTheme(theme);

export function switchTheme() {
  theme = theme === darkTheme ? lightTheme : darkTheme;
  applyTheme(theme);
}

export function getTheme() {
  return theme;
}
