import Paragraph from "./Components/Paragraph";
import RedText from "./Components/RedText";
import { BlockTypes, CategoryType } from "@webthing/registry";

// If you're just replacing a built-in component, you only need to pass the React componetn object
export const Blocks = {
  [BlockTypes.paragraph]: {
    Component: Paragraph
  }
};

export const Inlines = {
  ["@{{username}}/red-text"]: {
    // ID is required.
    id: "@{{username}}/red-text",
    title: "Red Text",
    description: "Make text red!",
    // Category is required.
    category: CategoryType.inline,
    screenshot: "",
    editableProps: {},
    defaultProps: {},
    Component: RedText
  }
};
