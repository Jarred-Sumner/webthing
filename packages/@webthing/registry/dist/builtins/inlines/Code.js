(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/styled-base", "../../../registry"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/styled-base"), require("../../../registry"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledBase, global.registry);
    global.Code = mod.exports;
  }
})(this, function (_exports, _styledBase, _registry) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.Code = void 0;
  _styledBase = _interopRequireDefault(_styledBase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var CodeAsset1x = "https://codeblog-public.storage.googleapis.com/InlineCode.png";
  var CodeAsset2x = "https://codeblog-public.storage.googleapis.com/InlineCode@2x.png";
  var CodeAsset3x = "https://codeblog-public.storage.googleapis.com/InlineCode@3x.png";
  var InlineCodeComponent = (0, _styledBase["default"])("span", {
    target: "eghw3740",
    label: "InlineCodeComponent"
  })(process.env.NODE_ENV === "production" ? {
    name: "1mublpz",
    styles: "background-color:#eee;border-radius:1px;font-family:var(--monospace-font);font-weight:500;color:inherit;backface-visibility:hidden;"
  } : {
    name: "1mublpz",
    styles: "background-color:#eee;border-radius:1px;font-family:var(--monospace-font);font-weight:500;color:inherit;backface-visibility:hidden;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idWlsdGlucy9pbmxpbmVzL0NvZGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU11QyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvYnVpbHRpbnMvaW5saW5lcy9Db2RlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2RlQXNzZXQxeCBmcm9tIFwiQHdlYnRoaW5nL3JlZ2lzdHJ5L2Fzc2V0cy9pbmxpbmVzL0lubGluZUNvZGUucG5nXCI7XG5pbXBvcnQgQ29kZUFzc2V0MnggZnJvbSBcIkB3ZWJ0aGluZy9yZWdpc3RyeS9hc3NldHMvaW5saW5lcy9JbmxpbmVDb2RlQDJ4LnBuZ1wiO1xuaW1wb3J0IENvZGVBc3NldDN4IGZyb20gXCJAd2VidGhpbmcvcmVnaXN0cnkvYXNzZXRzL2lubGluZXMvSW5saW5lQ29kZUAzeC5wbmdcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3JlZ2lzdHJ5XCI7XG5cbmNvbnN0IElubGluZUNvZGVDb21wb25lbnQgPSBzdHlsZWQuc3BhbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ub3NwYWNlLWZvbnQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuYDtcblxuZXhwb3J0IGNvbnN0IENvZGUgPSB7XG4gIHRpdGxlOiBcIkNvZGVcIixcbiAgZGVzY3JpcHRpb246IFwiQSBzbWFsbCBhbW91bnQgb2YgY29kZSBuZXh0IHRvIHRleHQuXCIsXG4gIGNhdGVnb3J5OiBDYXRlZ29yeVR5cGUudGV4dCxcbiAgaWQ6IFwiQHdlYnRoaW5nL2lubGluZS1jb2RlXCIsXG4gIHNjcmVlbnNob3Q6IHtcbiAgICBcIjF4XCI6IENvZGVBc3NldDF4LFxuICAgIFwiMnhcIjogQ29kZUFzc2V0MngsXG4gICAgXCIzeFwiOiBDb2RlQXNzZXQzeFxuICB9LFxuICBDb21wb25lbnQ6IElubGluZUNvZGVDb21wb25lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvZGU7XG4iXX0= */"
  });
  var Code = {
    title: "Code",
    description: "A small amount of code next to text.",
    category: _registry.CategoryType.text,
    id: "@webthing/inline-code",
    screenshot: {
      "1x": CodeAsset1x,
      "2x": CodeAsset2x,
      "3x": CodeAsset3x
    },
    Component: InlineCodeComponent
  };
  _exports.Code = Code;
  var _default = Code;
  _exports["default"] = _default;
});