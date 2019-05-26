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
    global.Link = mod.exports;
  }
})(this, function (_exports, _styledBase, _registry) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _styledBase = _interopRequireDefault(_styledBase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var LinkAsset1x = "https://codeblog-public.storage.googleapis.com/Link.png";
  var LinkAsset2x = "https://codeblog-public.storage.googleapis.com/Link@2x.png";
  var LinkAsset3x = "https://codeblog-public.storage.googleapis.com/Link@3x.png";
  var LinkIconAsset2x = "https://codeblog-public.storage.googleapis.com/LinkIcon@2x.png";
  var LinkComponent = (0, _styledBase["default"])("a", {
    target: "e1aun4pz0",
    label: "LinkComponent"
  })("color:", function (props) {
    return props.color || "currentColor";
  }, ";text-decoration:underline;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL0xpbmsudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU84QiIsImZpbGUiOiIuLi8uLi9zcmMvQ29tcG9uZW50cy9MaW5rLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IExpbmtBc3NldDF4IGZyb20gXCJAd2VidGhpbmcvcmVnaXN0cnkvYXNzZXRzL2lubGluZXMvTGluay5wbmdcIjtcbmltcG9ydCBMaW5rQXNzZXQyeCBmcm9tIFwiQHdlYnRoaW5nL3JlZ2lzdHJ5L2Fzc2V0cy9pbmxpbmVzL0xpbmtAMngucG5nXCI7XG5pbXBvcnQgTGlua0Fzc2V0M3ggZnJvbSBcIkB3ZWJ0aGluZy9yZWdpc3RyeS9hc3NldHMvaW5saW5lcy9MaW5rQDN4LnBuZ1wiO1xuaW1wb3J0IExpbmtJY29uQXNzZXQyeCBmcm9tIFwiQHdlYnRoaW5nL3JlZ2lzdHJ5L2Fzc2V0cy9pbmxpbmVzL0xpbmtJY29uQDJ4LnBuZ1wiO1xuaW1wb3J0IHsgRWRpdGFibGVQcm9wcywgQ2F0ZWdvcnlUeXBlIH0gZnJvbSBcIkB3ZWJ0aGluZy9yZWdpc3RyeVwiO1xuXG5jb25zdCBMaW5rQ29tcG9uZW50ID0gc3R5bGVkLmFgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yIHx8IFwiY3VycmVudENvbG9yXCJ9O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6IFwiTGlua1wiLFxuICBkZXNjcmlwdGlvbjogXCJTZW5kIHJlYWRlcnMgdG8gYSBkaWZmZXJlbnQgd2VicGFnZVwiLFxuICBpZDogXCJAd2VidGhpbmctdGVtcGxhdGUvbGlua1wiLFxuICBjYXRlZ29yeTogQ2F0ZWdvcnlUeXBlLnRleHQsXG4gIHNjcmVlbnNob3Q6IHtcbiAgICBcIjF4XCI6IExpbmtBc3NldDF4LFxuICAgIFwiMnhcIjogTGlua0Fzc2V0MngsXG4gICAgXCIzeFwiOiBMaW5rQXNzZXQzeFxuICB9LFxuICBDb21wb25lbnQ6IExpbmtDb21wb25lbnQsXG4gIGVkaXRhYmxlUHJvcHM6IHtcbiAgICBocmVmOiBFZGl0YWJsZVByb3BzLnVybCh7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGxhYmVsOiBcIlVSTFwiLFxuICAgICAgaWNvbjogTGlua0ljb25Bc3NldDJ4XG4gICAgfSksXG4gICAgY29sb3I6IEVkaXRhYmxlUHJvcHMuY29sb3Ioe1xuICAgICAgbGFiZWw6IFwiQ29sb3JcIixcbiAgICAgIHByZXNldHM6IFtcInZhcigtLXRleHQtY29sb3IpXCIsIFwiZ3JlZW5cIiwgXCJvcmFuZ2VcIiwgXCJwdXJwbGVcIiwgXCJwaW5rXCJdXG4gICAgfSlcbiAgfSxcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgdGFyZ2V0OiBcIl9ibGFua1wiLFxuICAgIGNvbG9yOiBcInZhcigtLXRleHQtY29sb3IpXCJcbiAgfVxufTtcbiJdfQ== */"));
  var _default = {
    title: "Link",
    description: "Send readers to a different webpage",
    id: "@webthing-template/link",
    category: _registry.CategoryType.text,
    screenshot: {
      "1x": LinkAsset1x,
      "2x": LinkAsset2x,
      "3x": LinkAsset3x
    },
    Component: LinkComponent,
    editableProps: {
      href: _registry.EditableProps.url({
        required: true,
        label: "URL",
        icon: LinkIconAsset2x
      }),
      color: _registry.EditableProps.color({
        label: "Color",
        presets: ["var(--text-color)", "green", "orange", "purple", "pink"]
      })
    },
    defaultProps: {
      target: "_blank",
      color: "var(--text-color)"
    }
  };
  _exports["default"] = _default;
});