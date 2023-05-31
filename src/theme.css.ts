import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  spacing: {
    s: "0.5em",
    m: "1em",
    l: "2em"
  },

  color: {
    black: "rgb(0 0 0)",
    white: "rgb(255 255 255"
  }
});
