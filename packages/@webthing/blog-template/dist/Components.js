(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./Components/Paragraph", "./Components/Quote", "./Components/Title", "./Components/Link", "./Components/Bold", "@webthing/registry"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./Components/Paragraph"), require("./Components/Quote"), require("./Components/Title"), require("./Components/Link"), require("./Components/Bold"), require("@webthing/registry"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Paragraph, global.Quote, global.Title, global.Link, global.Bold, global.registry);
    global.Components = mod.exports;
  }
})(this, function (_exports, _Paragraph, _Quote, _Title, _Link, _Bold, _registry) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Inlines = _exports.Blocks = void 0;
  _Link = _interopRequireDefault(_Link);
  _Bold = _interopRequireDefault(_Bold);

  var _Blocks, _Inlines;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var BlockQuoteAsset1x = "https://codeblog-public.storage.googleapis.com/BlockQuote.png";
  var BlockQuoteAsset2x = "https://codeblog-public.storage.googleapis.com/BlockQuote@2x.png";
  var BlockQuoteAsset3x = "https://codeblog-public.storage.googleapis.com/BlockQuote@3x.png";
  var H1Asset1x = "https://codeblog-public.storage.googleapis.com/H1.png";
  var H1Asset2x = "https://codeblog-public.storage.googleapis.com/H1@2x.png";
  var H1Asset3x = "https://codeblog-public.storage.googleapis.com/H1@3x.png";
  var H3Asset1x = "https://codeblog-public.storage.googleapis.com/H3.png";
  var H3Asset2x = "https://codeblog-public.storage.googleapis.com/H3@2x.png";
  var H3Asset3x = "https://codeblog-public.storage.googleapis.com/H3@3x.png";
  var ParagraphAsset1x = "https://codeblog-public.storage.googleapis.com/Paragraph.png";
  var ParagraphAsset2x = "https://codeblog-public.storage.googleapis.com/Paragraph@2x.png";
  var ParagraphAsset3x = "https://codeblog-public.storage.googleapis.com/Paragraph@3x.png";
  var Blocks = (_Blocks = {}, _defineProperty(_Blocks, _registry.BlockTypes.paragraph, {
    id: _registry.BlockTypes.paragraph,
    title: "Paragraph",
    category: _registry.CategoryType.block,
    isGrouped: true,
    placeholder: "Type '/' for magic",
    description: "The classic.",
    screenshot: {
      "1x": ParagraphAsset1x,
      "2x": ParagraphAsset2x,
      "3x": ParagraphAsset3x
    },
    Component: _Paragraph.Paragraph
  }), _defineProperty(_Blocks, _registry.BlockTypes.blockquote, {
    id: _registry.BlockTypes.blockquote,
    category: _registry.CategoryType.block,
    title: "Quote",
    multiLine: true,
    placeholder: "",
    description: "Add a quote",
    isGrouped: true,
    screenshot: {
      "1x": BlockQuoteAsset1x,
      "2x": BlockQuoteAsset2x,
      "3x": BlockQuoteAsset3x
    },
    Component: _Quote.BlockQuote,
    defaultProps: {
      align: "left"
    }
  }), _defineProperty(_Blocks, _registry.BlockTypes.title, {
    id: _registry.BlockTypes.title,
    title: "Title",
    category: _registry.CategoryType.header,
    placeholder: "Give it a name",
    description: "Big section heading",
    isGrouped: false,
    screenshot: {
      "1x": H1Asset1x,
      "2x": H1Asset2x,
      "3x": H1Asset3x
    },
    Component: _Title.Title,
    EditorComponent: _Title.EditorTitle,
    defaultProps: {
      align: "left",
      itemProp: "headline"
    }
  }), _defineProperty(_Blocks, _registry.BlockTypes.header, {
    id: _registry.BlockTypes.header,
    title: "Header",
    category: _registry.CategoryType.header,
    isGrouped: false,
    placeholder: "A new section",
    description: "Normal section header",
    screenshot: {
      "1x": H3Asset1x,
      "2x": H3Asset2x,
      "3x": H3Asset3x
    },
    Component: _Title.H3,
    defaultProps: {
      align: "left"
    }
  }), _Blocks);
  _exports.Blocks = Blocks;
  var Inlines = (_Inlines = {}, _defineProperty(_Inlines, _Link["default"].id, _Link["default"]), _defineProperty(_Inlines, _Bold["default"].id, _Bold["default"]), _Inlines);
  _exports.Inlines = Inlines;
});