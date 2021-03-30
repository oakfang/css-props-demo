import clone from "lodash.clonedeep";

export const darkTheme = {
  name: "dark",
  sizing: {
    md: "12px",
    lg: "16px",
    xl: "22px",
  },
  palette: {
    background: "#1e1e1e",
    foreground: "#d4d4d4",
    inactive: "#3a3d41",
    primary: "#007acc",
    secondary: "#9CDCFE",
  },
};

export const lightTheme = clone(darkTheme);
Object.assign(lightTheme, {
  name: "light",
});
Object.assign(lightTheme.palette, {
  background: "#fafafa",
  foreground: "#383a42",
  inactive: "#dbdbdc",
  primary: "#3bba54",
  secondary: "#00809b",
});
