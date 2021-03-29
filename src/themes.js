import clone from "lodash.clonedeep";

export const darkTheme = {
  sizing: {
    md: "12px",
    lg: "16px"
  },
  palette: {
    background: "#0b0c10",
    inactive: "#1f2933",
    primary: "#66fcf1",
    text: "#c5c6c7",
    secondary: "#45a29e"
  }
};

export const lightTheme = clone(darkTheme);
Object.assign(lightTheme.palette, {
  background: "#f5f5f5",
  inactive: "#dedede",
  text: "#1f1f1f",
  primary: "#32d25b",
  secondary: "#429e5a"
});
