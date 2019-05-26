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
    global.Glitter = mod.exports;
  }
})(this, function (_exports, _styledBase, _) {
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
  }, ";letter-spacing:1px;text-decoration:none;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idWlsdGlucy9pbmxpbmVzL0dsaXR0ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1vQyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvYnVpbHRpbnMvaW5saW5lcy9HbGl0dGVyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbGl0dGVyQXNzZXQxeCBmcm9tIFwiLi4vLi4vYXNzZXRzL2lubGluZXMvR2xpdHRlci5wbmdcIjtcbmltcG9ydCBHbGl0dGVyQXNzZXQyeCBmcm9tIFwiLi4vLi4vYXNzZXRzL2lubGluZXMvR2xpdHRlckAyeC5wbmdcIjtcbmltcG9ydCBHbGl0dGVyQXNzZXQzeCBmcm9tIFwiLi4vLi4vYXNzZXRzL2lubGluZXMvR2xpdHRlckAzeC5wbmdcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlIH0gZnJvbSBcIi4uLy4uL1wiO1xuXG5jb25zdCBHbGl0dGVyQ29tcG9uZW50ID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQpLFxuICAgIHVybChodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vd2VidGhpbmctcHVibGljL0dsaXR0ZXIuZ2lmKSByZXBlYXQgMTAwcHhcbiAgICAgIDIwcHg7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0ICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXG4gIEBtZWRpYSBub3QgYWxsIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xuICAgIEBtZWRpYSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICB9XG5cbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3IgfHwgXCJwaW5rXCJ9O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgR2xpdHRlciA9IHtcbiAgdGl0bGU6IFwiR2xpdHRlciB0ZXh0XCIsXG4gIGRlc2NyaXB0aW9uOiBcIkl0IGdldHMgZXZlcnl3aGVyZS5cIixcbiAgY2F0ZWdvcnk6IENhdGVnb3J5VHlwZS50ZXh0LFxuICBpZDogXCJAd2VidGhpbmcvZ2xpdHRlclwiLFxuICBzY3JlZW5zaG90OiB7XG4gICAgXCIxeFwiOiBHbGl0dGVyQXNzZXQxeCxcbiAgICBcIjJ4XCI6IEdsaXR0ZXJBc3NldDJ4LFxuICAgIFwiM3hcIjogR2xpdHRlckFzc2V0M3hcbiAgfSxcbiAgQ29tcG9uZW50OiBHbGl0dGVyQ29tcG9uZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHbGl0dGVyO1xuIl19 */"));
  var Glitter = {
    title: "Glitter text",
    description: "It gets everywhere.",
    category: _.CategoryType.text,
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