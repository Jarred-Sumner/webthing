(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/styled-base", "tinycolor2", "../../../registry"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/styled-base"), require("tinycolor2"), require("../../../registry"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledBase, global.tinycolor2, global.registry);
    global.FancyHeading = mod.exports;
  }
})(this, function (_exports, _styledBase, _tinycolor, _registry) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _styledBase = _interopRequireDefault(_styledBase);
  _tinycolor = _interopRequireDefault(_tinycolor);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var FancyHeadingAsset1x = "https://codeblog-public.storage.googleapis.com/FancyHeading.png";
  var FancyHeadingAsset2x = "https://codeblog-public.storage.googleapis.com/FancyHeading@2x.png";
  var FancyHeadingAsset3x = "https://codeblog-public.storage.googleapis.com/FancyHeading@3x.png";
  var FancyHeadingComponent = (0, _styledBase["default"])("div", {
    target: "e1lc9uyk0",
    label: "FancyHeadingComponent"
  })("box-sizing:content-box;margin-left:calc((100vw - var(--blog-post-width)) / -2);margin-right:calc((100vw - var(--blog-post-width)) / -2);padding-left:calc((100vw - var(--blog-post-width)) / 2);padding-right:calc((100vw - var(--blog-post-width)) / 2);background-size:100vw auto;font-size:1.75em;font-family:var(--headings-font);text-align:center;background:", function (props) {
    return props.background || "var(--text-color)";
  }, ";width:100%;color:", function (props) {
    return (0, _tinycolor["default"])(props.background).isDark() ? "var(--color-white)" : "var(--color-black)";
  }, ";margin-block-start:var(--offset-medium);padding-top:var(--offset-large);padding-bottom:var(--offset-large);margin-block-end:var(--offset-medium);overflow-x:hidden;max-width:100vw;@media (max-width:670px){&{margin-left:calc(-1 * var(--offset-normal));margin-right:calc(-1 * var(--offset-normal));padding-left:0;padding-right:0;width:100vw;}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idWlsdGlucy9ibG9ja3MvRmFuY3lIZWFkaW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2J1aWx0aW5zL2Jsb2Nrcy9GYW5jeUhlYWRpbmcudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhbmN5SGVhZGluZ0Fzc2V0MXggZnJvbSBcIkB3ZWJ0aGluZy9yZWdpc3RyeS9hc3NldHMvYmxvY2tzL0ZhbmN5SGVhZGluZy5wbmdcIjtcbmltcG9ydCBGYW5jeUhlYWRpbmdBc3NldDJ4IGZyb20gXCJAd2VidGhpbmcvcmVnaXN0cnkvYXNzZXRzL2Jsb2Nrcy9GYW5jeUhlYWRpbmdAMngucG5nXCI7XG5pbXBvcnQgRmFuY3lIZWFkaW5nQXNzZXQzeCBmcm9tIFwiQHdlYnRoaW5nL3JlZ2lzdHJ5L2Fzc2V0cy9ibG9ja3MvRmFuY3lIZWFkaW5nQDN4LnBuZ1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgdGlueWNvbG9yIGZyb20gXCJ0aW55Y29sb3IyXCI7XG5pbXBvcnQge1xuICBDYXRlZ29yeVR5cGUsXG4gIEJhY2tncm91bmRQcm9wLFxuICBDb2xvclByb3AsXG4gIEFsaWduUHJvcFxufSBmcm9tIFwiLi4vLi4vLi4vcmVnaXN0cnlcIjtcblxudHlwZSBGYW5jeUhlYWRpbmdQcm9wcyA9IHtcbiAgYmFja2dyb3VuZD86IEJhY2tncm91bmRQcm9wO1xuICBjb2xvcj86IENvbG9yUHJvcDtcbiAgYWxpZ246IEFsaWduUHJvcDtcbn07XG5cbmNvbnN0IEZhbmN5SGVhZGluZ0NvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZTxcbiAgRmFuY3lIZWFkaW5nUHJvcHNcbj4gPSBzdHlsZWQuZGl2YFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoKDEwMHZ3IC0gdmFyKC0tYmxvZy1wb3N0LXdpZHRoKSkgLyAtMik7XG4gIG1hcmdpbi1yaWdodDogY2FsYygoMTAwdncgLSB2YXIoLS1ibG9nLXBvc3Qtd2lkdGgpKSAvIC0yKTtcbiAgcGFkZGluZy1sZWZ0OiBjYWxjKCgxMDB2dyAtIHZhcigtLWJsb2ctcG9zdC13aWR0aCkpIC8gMik7XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGMoKDEwMHZ3IC0gdmFyKC0tYmxvZy1wb3N0LXdpZHRoKSkgLyAyKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDB2dyBhdXRvO1xuICBmb250LXNpemU6IDEuNzVlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdzLWZvbnQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICR7KHByb3BzOiBGYW5jeUhlYWRpbmdQcm9wcykgPT5cbiAgICBwcm9wcy5iYWNrZ3JvdW5kIHx8IFwidmFyKC0tdGV4dC1jb2xvcilcIn07XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogJHsocHJvcHM6IEZhbmN5SGVhZGluZ1Byb3BzKSA9PlxuICAgIHRpbnljb2xvcihwcm9wcy5iYWNrZ3JvdW5kKS5pc0RhcmsoKVxuICAgICAgPyBcInZhcigtLWNvbG9yLXdoaXRlKVwiXG4gICAgICA6IFwidmFyKC0tY29sb3ItYmxhY2spXCJ9O1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IHZhcigtLW9mZnNldC1tZWRpdW0pO1xuICBwYWRkaW5nLXRvcDogdmFyKC0tb2Zmc2V0LWxhcmdlKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLW9mZnNldC1sYXJnZSk7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLW9mZnNldC1tZWRpdW0pO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG1heC13aWR0aDogMTAwdnc7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDY3MHB4KSB7XG4gICAgJiB7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLW9mZnNldC1ub3JtYWwpKTtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygtMSAqIHZhcigtLW9mZnNldC1ub3JtYWwpKTtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTAwdnc7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiBcIkZhbmN5IEhlYWRpbmdcIixcbiAgZGVzY3JpcHRpb246IFwiRnVsbC13aWR0aCBoZWFkaW5nIHdpdGggYSBiYWNrZ3JvdW5kXCIsXG4gIGNhdGVnb3J5OiBDYXRlZ29yeVR5cGUuaGVhZGVyLFxuICBpZDogXCJAd2VidGhpbmcvZmFuY3ktaGVhZGluZ1wiLFxuICBzY3JlZW5zaG90OiB7XG4gICAgXCIxeFwiOiBGYW5jeUhlYWRpbmdBc3NldDF4LFxuICAgIFwiMnhcIjogRmFuY3lIZWFkaW5nQXNzZXQyeCxcbiAgICBcIjN4XCI6IEZhbmN5SGVhZGluZ0Fzc2V0M3hcbiAgfSxcbiAgZWRpdGFibGVQcm9wczoge1xuICAgIGJhY2tncm91bmQ6IEVkaXRhYmxlUHJvcHMuY29sb3Ioe1xuICAgICAgbGFiZWw6IFwiQ29sb3JcIixcbiAgICAgIHByZXNldHM6IFtcIiMzMzNcIiwgXCJwaW5rXCIsIFwiYmx1ZVwiXVxuICAgIH0pXG4gIH0sXG4gIGRlZmF1bHRQcm9wczoge1xuICAgIGJhY2tncm91bmQ6IFwiIzMzM1wiXG4gIH0sXG4gIENvbXBvbmVudDogRmFuY3lIZWFkaW5nQ29tcG9uZW50XG59O1xuIl19 */"));
  var _default = {
    title: "Fancy Heading",
    description: "Full-width heading with a background",
    category: _registry.CategoryType.header,
    id: "@webthing/fancy-heading",
    screenshot: {
      "1x": FancyHeadingAsset1x,
      "2x": FancyHeadingAsset2x,
      "3x": FancyHeadingAsset3x
    },
    editableProps: {
      background: EditableProps.color({
        label: "Color",
        presets: ["#333", "pink", "blue"]
      })
    },
    defaultProps: {
      background: "#333"
    },
    Component: FancyHeadingComponent
  };
  _exports["default"] = _default;
});