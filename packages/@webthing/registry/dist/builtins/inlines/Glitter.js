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
    global.Glitter = mod.exports;
  }
})(this, function (_exports, _styledBase, _registry) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.Glitter = void 0;
  _styledBase = _interopRequireDefault(_styledBase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var GlitterAsset1x = "https://codeblog-public.storage.googleapis.com/Glitter.png";
  var GlitterAsset2x = "https://codeblog-public.storage.googleapis.com/Glitter@2x.png";
  var GlitterAsset3x = "https://codeblog-public.storage.googleapis.com/Glitter@3x.png";
  var GlitterComponent = (0, _styledBase["default"])("span", {
    target: "exbggtv0",
    label: "GlitterComponent"
  })("background:linear-gradient(transparent,transparent),url(https://storage.googleapis.com/webthing-public/Glitter.gif) repeat 100px 20px;-webkit-background-clip:text !important;-webkit-text-fill-color:transparent !important;@media not all and (min-resolution:0.001dpcm){@media{display:inline-block;}}color:", function (props) {
    return props.color || "pink";
  }, ";letter-spacing:1px;text-decoration:none;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idWlsdGlucy9pbmxpbmVzL0dsaXR0ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1vQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvYnVpbHRpbnMvaW5saW5lcy9HbGl0dGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbGl0dGVyQXNzZXQxeCBmcm9tIFwiQHdlYnRoaW5nL3JlZ2lzdHJ5L2Fzc2V0cy9pbmxpbmVzL0dsaXR0ZXIucG5nXCI7XG5pbXBvcnQgR2xpdHRlckFzc2V0MnggZnJvbSBcIkB3ZWJ0aGluZy9yZWdpc3RyeS9hc3NldHMvaW5saW5lcy9HbGl0dGVyQDJ4LnBuZ1wiO1xuaW1wb3J0IEdsaXR0ZXJBc3NldDN4IGZyb20gXCJAd2VidGhpbmcvcmVnaXN0cnkvYXNzZXRzL2lubGluZXMvR2xpdHRlckAzeC5wbmdcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3JlZ2lzdHJ5XCI7XG5cbmNvbnN0IEdsaXR0ZXJDb21wb25lbnQgPSBzdHlsZWQuc3BhbmBcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCksXG4gICAgdXJsKGh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS93ZWJ0aGluZy1wdWJsaWMvR2xpdHRlci5naWYpIHJlcGVhdCAxMDBweFxuICAgICAgMjBweDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIG5vdCBhbGwgYW5kIChtaW4tcmVzb2x1dGlvbjogMC4wMDFkcGNtKSB7XG4gICAgQG1lZGlhIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gIH1cblxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvciB8fCBcInBpbmtcIn07XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmA7XG5cbmV4cG9ydCBjb25zdCBHbGl0dGVyID0ge1xuICB0aXRsZTogXCJHbGl0dGVyIHRleHRcIixcbiAgZGVzY3JpcHRpb246IFwiSXQgZ2V0cyBldmVyeXdoZXJlLlwiLFxuICBjYXRlZ29yeTogQ2F0ZWdvcnlUeXBlLnRleHQsXG4gIGlkOiBcIkB3ZWJ0aGluZy9nbGl0dGVyXCIsXG4gIHNjcmVlbnNob3Q6IHtcbiAgICBcIjF4XCI6IEdsaXR0ZXJBc3NldDF4LFxuICAgIFwiMnhcIjogR2xpdHRlckFzc2V0MngsXG4gICAgXCIzeFwiOiBHbGl0dGVyQXNzZXQzeFxuICB9LFxuICBDb21wb25lbnQ6IEdsaXR0ZXJDb21wb25lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdsaXR0ZXI7XG4iXX0= */"));
  var Glitter = {
    title: "Glitter text",
    description: "It gets everywhere.",
    category: _registry.CategoryType.text,
    id: "@webthing/glitter",
    screenshot: {
      "1x": GlitterAsset1x,
      "2x": GlitterAsset2x,
      "3x": GlitterAsset3x
    },
    Component: GlitterComponent
  };
  _exports.Glitter = Glitter;
  var _default = Glitter;
  _exports["default"] = _default;
});