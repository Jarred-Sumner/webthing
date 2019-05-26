(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./.."], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./.."));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._);
    global.templatePackage = mod.exports;
  }
})(this, function (_exports, _) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  var _ComponentMap;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var BlockTypes = _.registry.BlockTypes,
      InlineTypes = _.registry.InlineTypes,
      TemplateCategoryType = _.registry.TemplateCategoryType;
  var _default = {
    id: "@webthing/blog-template",
    title: "Blog",
    author: "@webthing",
    description: "Good for writing things and showing people.",
    category: TemplateCategoryType.blog,
    ComponentMap: (_ComponentMap = {}, _defineProperty(_ComponentMap, BlockTypes.title, BlockTypes.title), _defineProperty(_ComponentMap, BlockTypes.header, BlockTypes.header), _defineProperty(_ComponentMap, BlockTypes.paragraph, BlockTypes.paragraph), _defineProperty(_ComponentMap, BlockTypes.blockquote, BlockTypes.blockquote), _defineProperty(_ComponentMap, InlineTypes.bold, InlineTypes.bold), _defineProperty(_ComponentMap, InlineTypes.link, InlineTypes.link), _ComponentMap),
    dependencies: {
      "reading-time": "^1.2.0",
      "react-headroom": "^2.2.8"
    }
  };
  _exports["default"] = _default;
});