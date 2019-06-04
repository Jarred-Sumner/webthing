(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/styled-base", "../../EditableProps", "../../", "tinycolor2"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/styled-base"), require("../../EditableProps"), require("../../"), require("tinycolor2"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledBase, global.EditableProps, global._, global.tinycolor2);
    global.Highlight = mod.exports;
  }
})(this, function (_exports, _styledBase, _EditableProps, _, _tinycolor) {
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
  }, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idWlsdGlucy9pbmxpbmVzL0hpZ2hsaWdodC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3NDIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9idWlsdGlucy9pbmxpbmVzL0hpZ2hsaWdodC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCBIaWdobGlnaHRBc3NldDF4IGZyb20gXCIuLi8uLi9hc3NldHMvaW5saW5lcy9IaWdobGlnaHQucG5nXCI7XG5pbXBvcnQgSGlnaGxpZ2h0QXNzZXQyeCBmcm9tIFwiLi4vLi4vYXNzZXRzL2lubGluZXMvSGlnaGxpZ2h0QDJ4LnBuZ1wiO1xuaW1wb3J0IEhpZ2hsaWdodEFzc2V0M3ggZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbmxpbmVzL0hpZ2hsaWdodEAzeC5wbmdcIjtcbmltcG9ydCB7IEVkaXRhYmxlUHJvcHMgfSBmcm9tIFwiLi4vLi4vRWRpdGFibGVQcm9wc1wiO1xuaW1wb3J0IHsgQ2F0ZWdvcnlUeXBlIH0gZnJvbSBcIi4uLy4uL1wiO1xuaW1wb3J0IHRpbnljb2xvciBmcm9tIFwidGlueWNvbG9yMlwiO1xuXG5jb25zdCBQUkVTRVRfQ09MT1JTID0ge1xuICBncmVlbjogXCIjOTlmZmNjXCIsXG4gIHBpbms6IFwiI2ZmY2NmZlwiLFxuICB5ZWxsb3c6IFwiI2ZmZmZjY1wiXG59O1xuXG5jb25zdCBIaWdobGlnaHRDb21wb25lbnQgPSBzdHlsZWQuc3BhbmBcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBsaW5lYXI7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jb2xvcn07XG4gIGNvbG9yOiAke3Byb3BzID0+ICh0aW55Y29sb3IocHJvcHMuY29sb3IpLmlzRGFyaygpID8gXCJ3aGl0ZVwiIDogXCIjMzMzXCIpfTtcbmA7XG5cbmV4cG9ydCBjb25zdCBIaWdobGlnaHQgPSB7XG4gIHRpdGxlOiBcIkhpZ2hsaWdodCB0ZXh0XCIsXG4gIGRlc2NyaXB0aW9uOiBcIldoeSBib2xkIHdoZW4geW91IGNhbiBoaWdobGlnaHQ/XCIsXG4gIGNhdGVnb3J5OiBDYXRlZ29yeVR5cGUudGV4dCxcbiAgaWQ6IFwiQHdlYnRoaW5nL2hpZ2hsaWdodFwiLFxuICBzY3JlZW5zaG90OiB7XG4gICAgXCIxeFwiOiBIaWdobGlnaHRBc3NldDF4LFxuICAgIFwiMnhcIjogSGlnaGxpZ2h0QXNzZXQyeCxcbiAgICBcIjN4XCI6IEhpZ2hsaWdodEFzc2V0M3hcbiAgfSxcbiAgZWRpdGFibGVQcm9wczoge1xuICAgIGNvbG9yOiBFZGl0YWJsZVByb3BzLmNvbG9yKHtcbiAgICAgIGxhYmVsOiBcIkNvbG9yXCIsXG4gICAgICBwcmVzZXRzOiBPYmplY3QudmFsdWVzKFBSRVNFVF9DT0xPUlMpXG4gICAgfSlcbiAgfSxcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgY29sb3I6IFBSRVNFVF9DT0xPUlMuZ3JlZW5cbiAgfSxcbiAgQ29tcG9uZW50OiBIaWdobGlnaHRDb21wb25lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhpZ2hsaWdodDtcbiJdfQ== */"));
  var Highlight = {
    title: "Highlight text",
    description: "Why bold when you can highlight?",
    category: _.CategoryType.text,
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