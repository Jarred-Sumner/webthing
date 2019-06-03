(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/styled-base", "../../"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/styled-base"), require("../../"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledBase, global._);
    global.Code = mod.exports;
  }
})(this, function (_exports, _styledBase, _) {
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
    target: "eghw3740"
  })(process.env.NODE_ENV === "production" ? {
    name: "1mublpz",
    styles: "background-color:#eee;border-radius:1px;font-family:var(--monospace-font);font-weight:500;color:inherit;backface-visibility:hidden;"
  } : {
    name: "1mublpz",
    styles: "background-color:#eee;border-radius:1px;font-family:var(--monospace-font);font-weight:500;color:inherit;backface-visibility:hidden;",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idWlsdGlucy9pbmxpbmVzL0NvZGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU11QyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvYnVpbHRpbnMvaW5saW5lcy9Db2RlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2RlQXNzZXQxeCBmcm9tIFwiLi4vLi4vYXNzZXRzL2lubGluZXMvSW5saW5lQ29kZS5wbmdcIjtcbmltcG9ydCBDb2RlQXNzZXQyeCBmcm9tIFwiLi4vLi4vYXNzZXRzL2lubGluZXMvSW5saW5lQ29kZUAyeC5wbmdcIjtcbmltcG9ydCBDb2RlQXNzZXQzeCBmcm9tIFwiLi4vLi4vYXNzZXRzL2lubGluZXMvSW5saW5lQ29kZUAzeC5wbmdcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlIH0gZnJvbSBcIi4uLy4uL1wiO1xuXG5jb25zdCBJbmxpbmVDb2RlQ29tcG9uZW50ID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm9zcGFjZS1mb250KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBDb2RlID0ge1xuICB0aXRsZTogXCJDb2RlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkEgc21hbGwgYW1vdW50IG9mIGNvZGUgbmV4dCB0byB0ZXh0LlwiLFxuICBjYXRlZ29yeTogQ2F0ZWdvcnlUeXBlLnRleHQsXG4gIGlkOiBcIkB3ZWJ0aGluZy9pbmxpbmUtY29kZVwiLFxuICBzY3JlZW5zaG90OiB7XG4gICAgXCIxeFwiOiBDb2RlQXNzZXQxeCxcbiAgICBcIjJ4XCI6IENvZGVBc3NldDJ4LFxuICAgIFwiM3hcIjogQ29kZUFzc2V0M3hcbiAgfSxcbiAgQ29tcG9uZW50OiBJbmxpbmVDb2RlQ29tcG9uZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2RlO1xuIl19 */"
  });
  var Code = {
    title: "Code",
    description: "A small amount of code next to text.",
    category: _.CategoryType.text,
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