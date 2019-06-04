(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/styled-base", "@webthing/registry"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/styled-base"), require("@webthing/registry"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledBase, global.registry);
    global.Bold = mod.exports;
  }
})(this, function (_exports, _styledBase, _registry) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _styledBase = _interopRequireDefault(_styledBase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var BoldAsset1x = "https://codeblog-public.storage.googleapis.com/Bold.png";
  var BoldAsset2x = "https://codeblog-public.storage.googleapis.com/Bold@2x.png";
  var BoldAsset3x = "https://codeblog-public.storage.googleapis.com/Bold@3x.png";
  var BoldComponent = (0, _styledBase["default"])("strong", {
    target: "e14sevtr0",
    label: "BoldComponent"
  })(process.env.NODE_ENV === "production" ? {
    name: "15ae08g",
    styles: "font-weight:600;color:currentColor;"
  } : {
    name: "15ae08g",
    styles: "font-weight:600;color:currentColor;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL0JvbGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1tQyIsImZpbGUiOiIuLi8uLi9zcmMvQ29tcG9uZW50cy9Cb2xkLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCb2xkQXNzZXQxeCBmcm9tIFwiLi4vLi4vYXNzZXRzL2lubGluZXMvQm9sZC5wbmdcIjtcbmltcG9ydCBCb2xkQXNzZXQyeCBmcm9tIFwiLi4vLi4vYXNzZXRzL2lubGluZXMvQm9sZEAyeC5wbmdcIjtcbmltcG9ydCBCb2xkQXNzZXQzeCBmcm9tIFwiLi4vLi4vYXNzZXRzL2lubGluZXMvQm9sZEAzeC5wbmdcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlIH0gZnJvbSBcIkB3ZWJ0aGluZy9yZWdpc3RyeVwiO1xuXG5jb25zdCBCb2xkQ29tcG9uZW50ID0gc3R5bGVkLnN0cm9uZ2BcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6IFwiQm9sZCB0ZXh0XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkIgaXMgZm9yIGJvbGQuXCIsXG4gIGNhdGVnb3J5OiBDYXRlZ29yeVR5cGUudGV4dCxcbiAgaWQ6IFwiQGNvZGVibG9nL2JvbGRcIixcbiAgc2NyZWVuc2hvdDoge1xuICAgIFwiMXhcIjogQm9sZEFzc2V0MXgsXG4gICAgXCIyeFwiOiBCb2xkQXNzZXQyeCxcbiAgICBcIjN4XCI6IEJvbGRBc3NldDN4XG4gIH0sXG4gIENvbXBvbmVudDogQm9sZENvbXBvbmVudFxufTtcbiJdfQ== */"
  });
  var _default = {
    title: "Bold text",
    description: "B is for bold.",
    category: _registry.CategoryType.text,
    id: "@codeblog/bold",
    screenshot: {
      "1x": BoldAsset1x,
      "2x": BoldAsset2x,
      "3x": BoldAsset3x
    },
    Component: BoldComponent
  };
  _exports["default"] = _default;
});