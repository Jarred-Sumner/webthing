import { CategoryType, EditableProps } from "@webthing/registry";

// This file will eventually be compiled into a package.json by webthing cli
module.exports = {
  name: "@{{username}}/{{name}}",
  version: "1.0.0",
  license: "MIT",
  webthing: {
    // These will appear when you search for a component
    title: "{{title}}",
    description: "TODO: Description",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: "./{{name}}.png",

    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: CategoryType.text,

    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {
      color: EditableProps.color({
        label: "Color",
        presets: ["pink", "blue", "blue"]
      })
    },

    // This lets you set default props if you want
    defaultProps: {
      color: "pink"
    }
  },

  // To add a dependency from npm, run:
  // webthing add {{name}} dependency-name
  //
  // For example:
  // webthing add {{name}} lodash
  dependencies: {}
};
