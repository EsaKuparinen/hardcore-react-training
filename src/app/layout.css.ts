import { globalStyle } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";

import pattern from "../assets/duckling-pattern.png";

globalStyle("*", {
  boxSizing: "border-box"
});

globalStyle("html", {
  fontFamily: "Comic Sans Ms",
  backgroundImage: `url(${pattern.src})`
});

// TODO: add for logo element in layout.tsx
// max-width: 100%; height: auto;

export const mainLogo = style({
  maxWidth: "100%",
  height: "auto"
});
