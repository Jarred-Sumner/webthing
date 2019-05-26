(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/styled-base", "../../EditableProps", "../../../registry", "tinycolor2"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/styled-base"), require("../../EditableProps"), require("../../../registry"), require("tinycolor2"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledBase, global.EditableProps, global.registry, global.tinycolor2);
    global.Highlight = mod.exports;
  }
})(this, function (_exports, _styledBase, _EditableProps, _registry, _tinycolor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.Highlight = void 0;
  _styledBase = _interopRequireDefault(_styledBase);
  _tinycolor = _interopRequireDefault(_tinycolor);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var HighlightAsset1x = "https://codeblog-public.storage.googleapis.com/Highlight.png";
  var HighlightAsset2x = "https://codeblog-public.storage.googleapis.com/Highlight@2x.png";
  var HighlightAsset3x = "https://codeblog-public.storage.googleapis.com/Highlight@3x.png";
  var PRESET_COLORS = {
    green: "#99ffcc",
    pink: "#ffccff",
    yellow: "#ffffcc"
  };
  var HighlightComponent = (0, _styledBase["default"])("span", {
    target: "e12ftqrn0",
    label: "HighlightComponent"
  })("border-radius:5px;padding-left:0;padding-right:0;transition:background-color 0.1s linear;background-color:", function (props) {
    return props.color;
  }, ";color:", function (props) {
    return (0, _tinycolor["default"])(props.color).isDark() ? "white" : "#333";
  }, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idWlsdGlucy9pbmxpbmVzL0hpZ2hsaWdodC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3NDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9idWlsdGlucy9pbmxpbmVzL0hpZ2hsaWdodC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBIaWdobGlnaHRBc3NldDF4IGZyb20gXCJAd2VidGhpbmcvcmVnaXN0cnkvYXNzZXRzL2lubGluZXMvSGlnaGxpZ2h0LnBuZ1wiO1xuaW1wb3J0IEhpZ2hsaWdodEFzc2V0MnggZnJvbSBcIkB3ZWJ0aGluZy9yZWdpc3RyeS9hc3NldHMvaW5saW5lcy9IaWdobGlnaHRAMngucG5nXCI7XG5pbXBvcnQgSGlnaGxpZ2h0QXNzZXQzeCBmcm9tIFwiQHdlYnRoaW5nL3JlZ2lzdHJ5L2Fzc2V0cy9pbmxpbmVzL0hpZ2hsaWdodEAzeC5wbmdcIjtcbmltcG9ydCB7IEVkaXRhYmxlUHJvcHMgfSBmcm9tIFwiLi4vLi4vRWRpdGFibGVQcm9wc1wiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlIH0gZnJvbSBcIi4uLy4uLy4uL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgdGlueWNvbG9yIGZyb20gXCJ0aW55Y29sb3IyXCI7XG5cbmNvbnN0IFBSRVNFVF9DT0xPUlMgPSB7XG4gIGdyZWVuOiBcIiM5OWZmY2NcIixcbiAgcGluazogXCIjZmZjY2ZmXCIsXG4gIHllbGxvdzogXCIjZmZmZmNjXCJcbn07XG5cbmNvbnN0IEhpZ2hsaWdodENvbXBvbmVudCA9IHN0eWxlZC5zcGFuYFxuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjFzIGxpbmVhcjtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcbiAgY29sb3I6ICR7cHJvcHMgPT4gKHRpbnljb2xvcihwcm9wcy5jb2xvcikuaXNEYXJrKCkgPyBcIndoaXRlXCIgOiBcIiMzMzNcIil9O1xuYDtcblxuZXhwb3J0IGNvbnN0IEhpZ2hsaWdodCA9IHtcbiAgdGl0bGU6IFwiSGlnaGxpZ2h0IHRleHRcIixcbiAgZGVzY3JpcHRpb246IFwiV2h5IGJvbGQgd2hlbiB5b3UgY2FuIGhpZ2hsaWdodD9cIixcbiAgY2F0ZWdvcnk6IENhdGVnb3J5VHlwZS50ZXh0LFxuICBpZDogXCJAd2VidGhpbmcvaGlnaGxpZ2h0XCIsXG4gIHNjcmVlbnNob3Q6IHtcbiAgICBcIjF4XCI6IEhpZ2hsaWdodEFzc2V0MXgsXG4gICAgXCIyeFwiOiBIaWdobGlnaHRBc3NldDJ4LFxuICAgIFwiM3hcIjogSGlnaGxpZ2h0QXNzZXQzeFxuICB9LFxuICBlZGl0YWJsZVByb3BzOiB7XG4gICAgY29sb3I6IEVkaXRhYmxlUHJvcHMuY29sb3Ioe1xuICAgICAgbGFiZWw6IFwiQ29sb3JcIixcbiAgICAgIHByZXNldHM6IE9iamVjdC52YWx1ZXMoUFJFU0VUX0NPTE9SUylcbiAgICB9KVxuICB9LFxuICBkZWZhdWx0UHJvcHM6IHtcbiAgICBjb2xvcjogUFJFU0VUX0NPTE9SUy5ncmVlblxuICB9LFxuICBDb21wb25lbnQ6IEhpZ2hsaWdodENvbXBvbmVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGlnaGxpZ2h0O1xuIl19 */"));
  var Highlight = {
    title: "Highlight text",
    description: "Why bold when you can highlight?",
    category: _registry.CategoryType.text,
    id: "@webthing/highlight",
    screenshot: {
      "1x": HighlightAsset1x,
      "2x": HighlightAsset2x,
      "3x": HighlightAsset3x
    },
    editableProps: {
      color: _EditableProps.EditableProps.color({
        label: "Color",
        presets: Object.values(PRESET_COLORS)
      })
    },
    defaultProps: {
      color: PRESET_COLORS.green
    },
    Component: HighlightComponent
  };
  _exports.Highlight = Highlight;
  var _default = Highlight;
  _exports["default"] = _default;
});