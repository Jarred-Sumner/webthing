import { TemplateCategoryType } from "@webthing/core/dist/registry";

// This file will eventually be compiled into a package.json by webthing cli
module.exports = {
  // These will appear when you search for a component
  title: "{{title}}",
  description: "TODO: Description",
  // This is optional but recommended. If the file doesn't exist, it will be ignored.
  screenshot: "./{{name}}.png",

  // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
  // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
  category: TemplateCategoryType.blog
};
