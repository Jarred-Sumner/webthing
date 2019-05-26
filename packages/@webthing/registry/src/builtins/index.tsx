import FancyHeading from "./blocks/FancyHeading";
import Glitter from "./inlines/Glitter";
import Highlight from "./inlines/Highlight";
import Code from "./inlines/Code";

export const Blocks = {
  [FancyHeading.id]: FancyHeading
};

export const Inlines = {
  [Code.id]: Code,
  [Glitter.id]: Glitter,
  [Highlight.id]: Highlight
};
