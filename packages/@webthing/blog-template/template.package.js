import { registry } from "@webthing/core";

const { BlockTypes, InlineTypes, TemplateCategoryType } = registry;

export default {
  id: "@webthing/blog-template",
  title: "Blog",
  author: "@webthing",
  description: "Good for writing things and showing people.",
  category: TemplateCategoryType.blog,
  ComponentMap: {
    [BlockTypes.title]: BlockTypes.title,
    [BlockTypes.header]: BlockTypes.header,
    [BlockTypes.paragraph]: BlockTypes.paragraph,
    [BlockTypes.blockquote]: BlockTypes.blockquote,
    [InlineTypes.bold]: InlineTypes.bold,
    [InlineTypes.link]: InlineTypes.link
  },
  dependencies: {
    "reading-time": "^1.2.0",
    "react-headroom": "^2.2.8"
  }
};
