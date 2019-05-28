(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@emotion/styled-base", "react", "../BlogPostSubtitle", "@webthing/core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@emotion/styled-base"), require("react"), require("../BlogPostSubtitle"), require("@webthing/core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.styledBase, global.react, global.BlogPostSubtitle, global.core);
    global.Title = mod.exports;
  }
})(this, function (_exports, _core, _styledBase, React, _BlogPostSubtitle, _core2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Title = Title;
  _exports.EditorTitle = _exports.H3 = void 0;
  _styledBase = _interopRequireDefault(_styledBase);
  React = _interopRequireWildcard(React);
  _BlogPostSubtitle = _interopRequireDefault(_BlogPostSubtitle);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var H1 = (0, _styledBase["default"])("h1", {
    target: "e1mo6zue0",
    label: "H1"
  })("margin-top:0;margin-bottom:0;font-size:1.9em;line-height:1.15;word-wrap:break-word;font-family:var(--headings-font);text-align:", function (props) {
    return props.align || "left";
  }, ";margin-block-start:0.83em;margin-block-end:0.83em;&:first-of-type{margin-block-start:0;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL1RpdGxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjOEQiLCJmaWxlIjoiLi4vLi4vc3JjL0NvbXBvbmVudHMvVGl0bGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCbG9nUG9zdFN1YnRpdGxlIGZyb20gXCIuLi9CbG9nUG9zdFN1YnRpdGxlXCI7XG5pbXBvcnQgeyBXZWJ0aGluZ0NvbnRleHQsIFBvc3QsIFBhZ2VUeXBlIH0gZnJvbSBcIkB3ZWJ0aGluZy9jb3JlXCI7XG5pbXBvcnQgeyBBbGlnblByb3AgfSBmcm9tIFwiQHdlYnRoaW5nL3JlZ2lzdHJ5XCI7XG5cbnR5cGUgVGl0bGVQcm9wcyA9IHtcbiAgYWxpZ24/OiBBbGlnblByb3A7XG4gIHBhZ2VUeXBlOiBQYWdlVHlwZTtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgcG9zdD86IFBvc3Q7XG4gIHJlZjogUmVhY3QuUmVmPEhUTUxFbGVtZW50Pjtcbn07XG5cbmNvbnN0IEgxOiBSZWFjdC5Db21wb25lbnRUeXBlPFBhcnRpYWw8VGl0bGVQcm9wcz4+ID0gc3R5bGVkLmgxYFxuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDEuOWVtO1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZ3MtZm9udCk7XG4gIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gcHJvcHMuYWxpZ24gfHwgXCJsZWZ0XCJ9O1xuXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAwLjgzZW07XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIMzogUmVhY3QuQ29tcG9uZW50VHlwZTxQYXJ0aWFsPFRpdGxlUHJvcHM+PiA9IHN0eWxlZC5oM2BcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdzLWZvbnQpO1xuICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLmFsaWduIHx8IFwibGVmdFwifTtcblxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IHZhcigtLW9mZnNldC1iaWcpO1xuICBtYXJnaW4tYmxvY2stZW5kOiB2YXIoLS1vZmZzZXQtbm9ybWFsKTtcbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuODNlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC44M2VtO1xuXG4gIGgxIHtcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBFZGl0b3JUaXRsZSA9IEgxO1xuXG4vLyBIb29rIHdvdWxkIGJlIG5pY2VyLi4uYnV0IGknbSBoYXZpbmcgaXNzdWVzIHdpdGggbWthaW5nIHRoYXQgd29yayB3aXRoIFNTUi5cbmV4cG9ydCBmdW5jdGlvbiBUaXRsZShwcm9wczogUGFydGlhbDxUaXRsZVByb3BzPikge1xuICByZXR1cm4gKFxuICAgIDxXZWJ0aGluZ0NvbnRleHQuQ29uc3VtZXI+XG4gICAgICB7KHsgcGFnZVR5cGUsIHBvc3QgfSkgPT4ge1xuICAgICAgICBpZiAocGFnZVR5cGUgPT09IFwiZWRpdG9yXCIpIHtcbiAgICAgICAgICByZXR1cm4gPEgxIHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvSDE+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgICA8QmxvZ1Bvc3RTdWJ0aXRsZSBwb3N0PXtwb3N0fSAvPlxuXG4gICAgICAgICAgICAgIDxhIGhyZWY9e3Bvc3QudXJsfT5cbiAgICAgICAgICAgICAgICA8SDEgey4uLnByb3BzfT57cHJvcHMuY2hpbGRyZW59PC9IMT5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfX1cbiAgICA8L1dlYnRoaW5nQ29udGV4dC5Db25zdW1lcj5cbiAgKTtcbn1cbiJdfQ== */"));
  var H3 = (0, _styledBase["default"])("h3", {
    target: "e1mo6zue1",
    label: "H3"
  })("margin-top:0;margin-bottom:0;line-height:1.35;word-wrap:break-word;font-family:var(--headings-font);text-align:", function (props) {
    return props.align || "left";
  }, ";margin-block-start:var(--offset-big);margin-block-end:var(--offset-normal);" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL1RpdGxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQnFFIiwiZmlsZSI6Ii4uLy4uL3NyYy9Db21wb25lbnRzL1RpdGxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmxvZ1Bvc3RTdWJ0aXRsZSBmcm9tIFwiLi4vQmxvZ1Bvc3RTdWJ0aXRsZVwiO1xuaW1wb3J0IHsgV2VidGhpbmdDb250ZXh0LCBQb3N0LCBQYWdlVHlwZSB9IGZyb20gXCJAd2VidGhpbmcvY29yZVwiO1xuaW1wb3J0IHsgQWxpZ25Qcm9wIH0gZnJvbSBcIkB3ZWJ0aGluZy9yZWdpc3RyeVwiO1xuXG50eXBlIFRpdGxlUHJvcHMgPSB7XG4gIGFsaWduPzogQWxpZ25Qcm9wO1xuICBwYWdlVHlwZTogUGFnZVR5cGU7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHBvc3Q/OiBQb3N0O1xuICByZWY6IFJlYWN0LlJlZjxIVE1MRWxlbWVudD47XG59O1xuXG5jb25zdCBIMTogUmVhY3QuQ29tcG9uZW50VHlwZTxQYXJ0aWFsPFRpdGxlUHJvcHM+PiA9IHN0eWxlZC5oMWBcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxLjllbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdzLWZvbnQpO1xuICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLmFsaWduIHx8IFwibGVmdFwifTtcblxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuODNlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC44M2VtO1xuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSDM6IFJlYWN0LkNvbXBvbmVudFR5cGU8UGFydGlhbDxUaXRsZVByb3BzPj4gPSBzdHlsZWQuaDNgXG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5ncy1mb250KTtcbiAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiBwcm9wcy5hbGlnbiB8fCBcImxlZnRcIn07XG5cbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1vZmZzZXQtYmlnKTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tb2Zmc2V0LW5vcm1hbCk7XG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjgzZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuODNlbTtcblxuICBoMSB7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRWRpdG9yVGl0bGUgPSBIMTtcblxuLy8gSG9vayB3b3VsZCBiZSBuaWNlci4uLmJ1dCBpJ20gaGF2aW5nIGlzc3VlcyB3aXRoIG1rYWluZyB0aGF0IHdvcmsgd2l0aCBTU1IuXG5leHBvcnQgZnVuY3Rpb24gVGl0bGUocHJvcHM6IFBhcnRpYWw8VGl0bGVQcm9wcz4pIHtcbiAgcmV0dXJuIChcbiAgICA8V2VidGhpbmdDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgeyh7IHBhZ2VUeXBlLCBwb3N0IH0pID0+IHtcbiAgICAgICAgaWYgKHBhZ2VUeXBlID09PSBcImVkaXRvclwiKSB7XG4gICAgICAgICAgcmV0dXJuIDxIMSB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L0gxPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgICAgPEJsb2dQb3N0U3VidGl0bGUgcG9zdD17cG9zdH0gLz5cblxuICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LnVybH0+XG4gICAgICAgICAgICAgICAgPEgxIHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvSDE+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPC9XZWJ0aGluZ0NvbnRleHQuQ29uc3VtZXI+XG4gICk7XG59XG4iXX0= */"));
  _exports.H3 = H3;
  var Header = (0, _styledBase["default"])("header", {
    target: "e1mo6zue2",
    label: "Header"
  })(process.env.NODE_ENV === "production" ? {
    name: "157dr1o",
    styles: "display:block;margin-block-start:0.83em;margin-block-end:0.83em;h1{margin-block-start:0;margin-block-end:0;}a{color:currentColor;text-decoration:none;}a:hover{text-decoration:underline;}"
  } : {
    name: "157dr1o",
    styles: "display:block;margin-block-start:0.83em;margin-block-end:0.83em;h1{margin-block-start:0;margin-block-end:0;}a{color:currentColor;text-decoration:none;}a:hover{text-decoration:underline;}",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL1RpdGxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQzRCIiwiZmlsZSI6Ii4uLy4uL3NyYy9Db21wb25lbnRzL1RpdGxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQmxvZ1Bvc3RTdWJ0aXRsZSBmcm9tIFwiLi4vQmxvZ1Bvc3RTdWJ0aXRsZVwiO1xuaW1wb3J0IHsgV2VidGhpbmdDb250ZXh0LCBQb3N0LCBQYWdlVHlwZSB9IGZyb20gXCJAd2VidGhpbmcvY29yZVwiO1xuaW1wb3J0IHsgQWxpZ25Qcm9wIH0gZnJvbSBcIkB3ZWJ0aGluZy9yZWdpc3RyeVwiO1xuXG50eXBlIFRpdGxlUHJvcHMgPSB7XG4gIGFsaWduPzogQWxpZ25Qcm9wO1xuICBwYWdlVHlwZTogUGFnZVR5cGU7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHBvc3Q/OiBQb3N0O1xuICByZWY6IFJlYWN0LlJlZjxIVE1MRWxlbWVudD47XG59O1xuXG5jb25zdCBIMTogUmVhY3QuQ29tcG9uZW50VHlwZTxQYXJ0aWFsPFRpdGxlUHJvcHM+PiA9IHN0eWxlZC5oMWBcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxLjllbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdzLWZvbnQpO1xuICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLmFsaWduIHx8IFwibGVmdFwifTtcblxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuODNlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC44M2VtO1xuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSDM6IFJlYWN0LkNvbXBvbmVudFR5cGU8UGFydGlhbDxUaXRsZVByb3BzPj4gPSBzdHlsZWQuaDNgXG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5ncy1mb250KTtcbiAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiBwcm9wcy5hbGlnbiB8fCBcImxlZnRcIn07XG5cbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1vZmZzZXQtYmlnKTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tb2Zmc2V0LW5vcm1hbCk7XG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjgzZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuODNlbTtcblxuICBoMSB7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRWRpdG9yVGl0bGUgPSBIMTtcblxuLy8gSG9vayB3b3VsZCBiZSBuaWNlci4uLmJ1dCBpJ20gaGF2aW5nIGlzc3VlcyB3aXRoIG1rYWluZyB0aGF0IHdvcmsgd2l0aCBTU1IuXG5leHBvcnQgZnVuY3Rpb24gVGl0bGUocHJvcHM6IFBhcnRpYWw8VGl0bGVQcm9wcz4pIHtcbiAgcmV0dXJuIChcbiAgICA8V2VidGhpbmdDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgeyh7IHBhZ2VUeXBlLCBwb3N0IH0pID0+IHtcbiAgICAgICAgaWYgKHBhZ2VUeXBlID09PSBcImVkaXRvclwiKSB7XG4gICAgICAgICAgcmV0dXJuIDxIMSB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L0gxPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgICAgPEJsb2dQb3N0U3VidGl0bGUgcG9zdD17cG9zdH0gLz5cblxuICAgICAgICAgICAgICA8YSBocmVmPXtwb3N0LnVybH0+XG4gICAgICAgICAgICAgICAgPEgxIHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvSDE+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPC9XZWJ0aGluZ0NvbnRleHQuQ29uc3VtZXI+XG4gICk7XG59XG4iXX0= */"
  });
  var EditorTitle = H1; // Hook would be nicer...but i'm having issues with mkaing that work with SSR.

  _exports.EditorTitle = EditorTitle;

  function Title(props) {
    return (0, _core.jsx)(_core2.WebthingContext.Consumer, null, function (_ref) {
      var pageType = _ref.pageType,
          post = _ref.post;

      if (pageType === "editor") {
        return (0, _core.jsx)(H1, props, props.children);
      } else {
        return (0, _core.jsx)(Header, null, (0, _core.jsx)(_BlogPostSubtitle["default"], {
          post: post
        }), (0, _core.jsx)("a", {
          href: post.url
        }, (0, _core.jsx)(H1, props, props.children)));
      }
    });
  }
});