import { theme } from "@/theme.css";
import { style } from "@vanilla-extract/css";

export const clock = style({
  marginBlock: theme.spacing.m,
  border: "3px solid rgb(0 0 0)",
  borderRadius: "10px",
  padding: "1em"
});

export const nightTime = style({
  backgroundColor: theme.color.black,
  color: theme.color.white
});
