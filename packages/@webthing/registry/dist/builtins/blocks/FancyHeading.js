(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/styled-base", "tinycolor2", "../../"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/styled-base"), require("tinycolor2"), require("../../"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledBase, global.tinycolor2, global._);
    global.FancyHeading = mod.exports;
  }
})(this, function (_exports, _styledBase, _tinycolor, _) {
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
  }, ";margin-block-start:var(--offset-medium);padding-top:var(--offset-large);padding-bottom:var(--offset-large);margin-block-end:var(--offset-medium);overflow-x:hidden;max-width:100vw;@media (max-width:670px){&{margin-left:calc(-1 * var(--offset-normal));margin-right:calc(-1 * var(--offset-normal));padding-left:0;padding-right:0;width:100vw;}}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idWlsdGlucy9ibG9ja3MvRmFuY3lIZWFkaW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2J1aWx0aW5zL2Jsb2Nrcy9GYW5jeUhlYWRpbmcudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhbmN5SGVhZGluZ0Fzc2V0MXggZnJvbSBcIi4uLy4uL2Fzc2V0cy9ibG9ja3MvRmFuY3lIZWFkaW5nLnBuZ1wiO1xuaW1wb3J0IEZhbmN5SGVhZGluZ0Fzc2V0MnggZnJvbSBcIi4uLy4uL2Fzc2V0cy9ibG9ja3MvRmFuY3lIZWFkaW5nQDJ4LnBuZ1wiO1xuaW1wb3J0IEZhbmN5SGVhZGluZ0Fzc2V0M3ggZnJvbSBcIi4uLy4uL2Fzc2V0cy9ibG9ja3MvRmFuY3lIZWFkaW5nQDN4LnBuZ1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgdGlueWNvbG9yIGZyb20gXCJ0aW55Y29sb3IyXCI7XG5pbXBvcnQge1xuICBDYXRlZ29yeVR5cGUsXG4gIEJhY2tncm91bmRQcm9wLFxuICBDb2xvclByb3AsXG4gIEFsaWduUHJvcCxcbiAgRWRpdGFibGVQcm9wc1xufSBmcm9tIFwiLi4vLi4vXCI7XG5cbnR5cGUgRmFuY3lIZWFkaW5nUHJvcHMgPSB7XG4gIGJhY2tncm91bmQ/OiBCYWNrZ3JvdW5kUHJvcDtcbiAgY29sb3I/OiBDb2xvclByb3A7XG4gIGFsaWduOiBBbGlnblByb3A7XG59O1xuXG5jb25zdCBGYW5jeUhlYWRpbmdDb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFR5cGU8XG4gIEZhbmN5SGVhZGluZ1Byb3BzXG4+ID0gc3R5bGVkLmRpdmBcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKCgxMDB2dyAtIHZhcigtLWJsb2ctcG9zdC13aWR0aCkpIC8gLTIpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGMoKDEwMHZ3IC0gdmFyKC0tYmxvZy1wb3N0LXdpZHRoKSkgLyAtMik7XG4gIHBhZGRpbmctbGVmdDogY2FsYygoMTAwdncgLSB2YXIoLS1ibG9nLXBvc3Qtd2lkdGgpKSAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCgxMDB2dyAtIHZhcigtLWJsb2ctcG9zdC13aWR0aCkpIC8gMik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwdncgYXV0bztcbiAgZm9udC1zaXplOiAxLjc1ZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5ncy1mb250KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wczogRmFuY3lIZWFkaW5nUHJvcHMpID0+XG4gICAgcHJvcHMuYmFja2dyb3VuZCB8fCBcInZhcigtLXRleHQtY29sb3IpXCJ9O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICR7KHByb3BzOiBGYW5jeUhlYWRpbmdQcm9wcykgPT5cbiAgICB0aW55Y29sb3IocHJvcHMuYmFja2dyb3VuZCkuaXNEYXJrKClcbiAgICAgID8gXCJ2YXIoLS1jb2xvci13aGl0ZSlcIlxuICAgICAgOiBcInZhcigtLWNvbG9yLWJsYWNrKVwifTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1vZmZzZXQtbWVkaXVtKTtcbiAgcGFkZGluZy10b3A6IHZhcigtLW9mZnNldC1sYXJnZSk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1vZmZzZXQtbGFyZ2UpO1xuICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1vZmZzZXQtbWVkaXVtKTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA2NzBweCkge1xuICAgICYge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1vZmZzZXQtbm9ybWFsKSk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoLTEgKiB2YXIoLS1vZmZzZXQtbm9ybWFsKSk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogXCJGYW5jeSBIZWFkaW5nXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkZ1bGwtd2lkdGggaGVhZGluZyB3aXRoIGEgYmFja2dyb3VuZFwiLFxuICBjYXRlZ29yeTogQ2F0ZWdvcnlUeXBlLmhlYWRlcixcbiAgaWQ6IFwiQHdlYnRoaW5nL2ZhbmN5LWhlYWRpbmdcIixcbiAgc2NyZWVuc2hvdDoge1xuICAgIFwiMXhcIjogRmFuY3lIZWFkaW5nQXNzZXQxeCxcbiAgICBcIjJ4XCI6IEZhbmN5SGVhZGluZ0Fzc2V0MngsXG4gICAgXCIzeFwiOiBGYW5jeUhlYWRpbmdBc3NldDN4XG4gIH0sXG4gIGVkaXRhYmxlUHJvcHM6IHtcbiAgICBiYWNrZ3JvdW5kOiBFZGl0YWJsZVByb3BzLmNvbG9yKHtcbiAgICAgIGxhYmVsOiBcIkNvbG9yXCIsXG4gICAgICBwcmVzZXRzOiBbXCIjMzMzXCIsIFwicGlua1wiLCBcImJsdWVcIl1cbiAgICB9KVxuICB9LFxuICBkZWZhdWx0UHJvcHM6IHtcbiAgICBiYWNrZ3JvdW5kOiBcIiMzMzNcIlxuICB9LFxuICBDb21wb25lbnQ6IEZhbmN5SGVhZGluZ0NvbXBvbmVudFxufTtcbiJdfQ== */"));
  var _default = {
    title: "Fancy Heading",
    description: "Full-width heading with a background",
    category: _.CategoryType.header,
    id: "@webthing/fancy-heading",
    screenshot: {
      "1x": FancyHeadingAsset1x,
      "2x": FancyHeadingAsset2x,
      "3x": FancyHeadingAsset3x
    },
    editableProps: {
      background: _.EditableProps.color({
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