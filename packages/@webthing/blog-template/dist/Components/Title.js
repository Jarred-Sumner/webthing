(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "@emotion/styled-base", "../BlogPostSubtitle", "@webthing/core"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("@emotion/styled-base"), require("../BlogPostSubtitle"), require("@webthing/core"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.styledBase, global.BlogPostSubtitle, global.core);
    global.Title = mod.exports;
  }
})(this, function (_exports, _core, _styledBase, _BlogPostSubtitle, _core2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Title = Title;
  _exports.EditorTitle = _exports.H3 = void 0;
  _styledBase = _interopRequireDefault(_styledBase);
  _BlogPostSubtitle = _interopRequireDefault(_BlogPostSubtitle);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var H1 = (0, _styledBase["default"])("h1", {
    target: "e1mo6zue0",
    label: "H1"
  })("margin-top:0;margin-bottom:0;font-size:1.9em;line-height:1.15;word-wrap:break-word;font-family:var(--headings-font);text-align:", function (props) {
    return props.align || "left";
  }, ";margin-block-start:0.83em;margin-block-end:0.83em;&:first-of-type{margin-block-start:0;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL1RpdGxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhOEQiLCJmaWxlIjoiLi4vLi4vc3JjL0NvbXBvbmVudHMvVGl0bGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgQmxvZ1Bvc3RTdWJ0aXRsZSBmcm9tIFwiLi4vQmxvZ1Bvc3RTdWJ0aXRsZVwiO1xuaW1wb3J0IHsgV2VidGhpbmdDb250ZXh0LCBQb3N0LCBQYWdlVHlwZSB9IGZyb20gXCJAd2VidGhpbmcvY29yZVwiO1xuaW1wb3J0IHsgQWxpZ25Qcm9wIH0gZnJvbSBcIkB3ZWJ0aGluZy9yZWdpc3RyeVwiO1xuXG50eXBlIFRpdGxlUHJvcHMgPSB7XG4gIGFsaWduPzogQWxpZ25Qcm9wO1xuICBwYWdlVHlwZTogUGFnZVR5cGU7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHBvc3Q/OiBQb3N0O1xuICByZWY6IFJlYWN0LlJlZjxIVE1MRWxlbWVudD47XG59O1xuXG5jb25zdCBIMTogUmVhY3QuQ29tcG9uZW50VHlwZTxQYXJ0aWFsPFRpdGxlUHJvcHM+PiA9IHN0eWxlZC5oMWBcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxLjllbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWhlYWRpbmdzLWZvbnQpO1xuICB0ZXh0LWFsaWduOiAke3Byb3BzID0+IHByb3BzLmFsaWduIHx8IFwibGVmdFwifTtcblxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuODNlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMC44M2VtO1xuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSDM6IFJlYWN0LkNvbXBvbmVudFR5cGU8UGFydGlhbDxUaXRsZVByb3BzPj4gPSBzdHlsZWQuaDNgXG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5ncy1mb250KTtcbiAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiBwcm9wcy5hbGlnbiB8fCBcImxlZnRcIn07XG5cbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiB2YXIoLS1vZmZzZXQtYmlnKTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogdmFyKC0tb2Zmc2V0LW5vcm1hbCk7XG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjgzZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuODNlbTtcblxuICBoMSB7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogY3VycmVudENvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRWRpdG9yVGl0bGUgPSBIMTtcblxuZXhwb3J0IGZ1bmN0aW9uIFRpdGxlKHByb3BzOiBQYXJ0aWFsPFRpdGxlUHJvcHM+KSB7XG4gIGNvbnN0IHsgcGFnZVR5cGUsIHBvc3QgfSA9IFJlYWN0LnVzZUNvbnRleHQoV2VidGhpbmdDb250ZXh0KTtcblxuICBpZiAocGFnZVR5cGUgPT09IFwiZWRpdG9yXCIpIHtcbiAgICByZXR1cm4gPEgxIHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvSDE+O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8QmxvZ1Bvc3RTdWJ0aXRsZSBwb3N0PXtwb3N0fSAvPlxuXG4gICAgICAgIDxhIGhyZWY9e3Bvc3QudXJsfT5cbiAgICAgICAgICA8SDEgey4uLnByb3BzfT57cHJvcHMuY2hpbGRyZW59PC9IMT5cbiAgICAgICAgPC9hPlxuICAgICAgPC9IZWFkZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */"));
  var H3 = (0, _styledBase["default"])("h3", {
    target: "e1mo6zue1",
    label: "H3"
  })("margin-top:0;margin-bottom:0;line-height:1.35;word-wrap:break-word;font-family:var(--headings-font);text-align:", function (props) {
    return props.align || "left";
  }, ";margin-block-start:var(--offset-big);margin-block-end:var(--offset-normal);" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL1RpdGxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QnFFIiwiZmlsZSI6Ii4uLy4uL3NyYy9Db21wb25lbnRzL1RpdGxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IEJsb2dQb3N0U3VidGl0bGUgZnJvbSBcIi4uL0Jsb2dQb3N0U3VidGl0bGVcIjtcbmltcG9ydCB7IFdlYnRoaW5nQ29udGV4dCwgUG9zdCwgUGFnZVR5cGUgfSBmcm9tIFwiQHdlYnRoaW5nL2NvcmVcIjtcbmltcG9ydCB7IEFsaWduUHJvcCB9IGZyb20gXCJAd2VidGhpbmcvcmVnaXN0cnlcIjtcblxudHlwZSBUaXRsZVByb3BzID0ge1xuICBhbGlnbj86IEFsaWduUHJvcDtcbiAgcGFnZVR5cGU6IFBhZ2VUeXBlO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBwb3N0PzogUG9zdDtcbiAgcmVmOiBSZWFjdC5SZWY8SFRNTEVsZW1lbnQ+O1xufTtcblxuY29uc3QgSDE6IFJlYWN0LkNvbXBvbmVudFR5cGU8UGFydGlhbDxUaXRsZVByb3BzPj4gPSBzdHlsZWQuaDFgXG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMS45ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5ncy1mb250KTtcbiAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiBwcm9wcy5hbGlnbiB8fCBcImxlZnRcIn07XG5cbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjgzZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuODNlbTtcblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEgzOiBSZWFjdC5Db21wb25lbnRUeXBlPFBhcnRpYWw8VGl0bGVQcm9wcz4+ID0gc3R5bGVkLmgzYFxuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZ3MtZm9udCk7XG4gIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gcHJvcHMuYWxpZ24gfHwgXCJsZWZ0XCJ9O1xuXG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tb2Zmc2V0LWJpZyk7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLW9mZnNldC1ub3JtYWwpO1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAwLjgzZW07XG5cbiAgaDEge1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEVkaXRvclRpdGxlID0gSDE7XG5cbmV4cG9ydCBmdW5jdGlvbiBUaXRsZShwcm9wczogUGFydGlhbDxUaXRsZVByb3BzPikge1xuICBjb25zdCB7IHBhZ2VUeXBlLCBwb3N0IH0gPSBSZWFjdC51c2VDb250ZXh0KFdlYnRoaW5nQ29udGV4dCk7XG5cbiAgaWYgKHBhZ2VUeXBlID09PSBcImVkaXRvclwiKSB7XG4gICAgcmV0dXJuIDxIMSB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L0gxPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEJsb2dQb3N0U3VidGl0bGUgcG9zdD17cG9zdH0gLz5cblxuICAgICAgICA8YSBocmVmPXtwb3N0LnVybH0+XG4gICAgICAgICAgPEgxIHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvSDE+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvSGVhZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"));
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
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL1RpdGxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQzRCIiwiZmlsZSI6Ii4uLy4uL3NyYy9Db21wb25lbnRzL1RpdGxlLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IEJsb2dQb3N0U3VidGl0bGUgZnJvbSBcIi4uL0Jsb2dQb3N0U3VidGl0bGVcIjtcbmltcG9ydCB7IFdlYnRoaW5nQ29udGV4dCwgUG9zdCwgUGFnZVR5cGUgfSBmcm9tIFwiQHdlYnRoaW5nL2NvcmVcIjtcbmltcG9ydCB7IEFsaWduUHJvcCB9IGZyb20gXCJAd2VidGhpbmcvcmVnaXN0cnlcIjtcblxudHlwZSBUaXRsZVByb3BzID0ge1xuICBhbGlnbj86IEFsaWduUHJvcDtcbiAgcGFnZVR5cGU6IFBhZ2VUeXBlO1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBwb3N0PzogUG9zdDtcbiAgcmVmOiBSZWFjdC5SZWY8SFRNTEVsZW1lbnQ+O1xufTtcblxuY29uc3QgSDE6IFJlYWN0LkNvbXBvbmVudFR5cGU8UGFydGlhbDxUaXRsZVByb3BzPj4gPSBzdHlsZWQuaDFgXG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMS45ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5ncy1mb250KTtcbiAgdGV4dC1hbGlnbjogJHtwcm9wcyA9PiBwcm9wcy5hbGlnbiB8fCBcImxlZnRcIn07XG5cbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjgzZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDAuODNlbTtcblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEgzOiBSZWFjdC5Db21wb25lbnRUeXBlPFBhcnRpYWw8VGl0bGVQcm9wcz4+ID0gc3R5bGVkLmgzYFxuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMS4zNTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZ3MtZm9udCk7XG4gIHRleHQtYWxpZ246ICR7cHJvcHMgPT4gcHJvcHMuYWxpZ24gfHwgXCJsZWZ0XCJ9O1xuXG4gIG1hcmdpbi1ibG9jay1zdGFydDogdmFyKC0tb2Zmc2V0LWJpZyk7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IHZhcigtLW9mZnNldC1ub3JtYWwpO1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmhlYWRlcmBcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAwLjgzZW07XG5cbiAgaDEge1xuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEVkaXRvclRpdGxlID0gSDE7XG5cbmV4cG9ydCBmdW5jdGlvbiBUaXRsZShwcm9wczogUGFydGlhbDxUaXRsZVByb3BzPikge1xuICBjb25zdCB7IHBhZ2VUeXBlLCBwb3N0IH0gPSBSZWFjdC51c2VDb250ZXh0KFdlYnRoaW5nQ29udGV4dCk7XG5cbiAgaWYgKHBhZ2VUeXBlID09PSBcImVkaXRvclwiKSB7XG4gICAgcmV0dXJuIDxIMSB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L0gxPjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPEJsb2dQb3N0U3VidGl0bGUgcG9zdD17cG9zdH0gLz5cblxuICAgICAgICA8YSBocmVmPXtwb3N0LnVybH0+XG4gICAgICAgICAgPEgxIHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvSDE+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvSGVhZGVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */"
  });
  var EditorTitle = H1;
  _exports.EditorTitle = EditorTitle;

  function Title(props) {
    var _React$useContext = React.useContext(_core2.WebthingContext),
        pageType = _React$useContext.pageType,
        post = _React$useContext.post;

    if (pageType === "editor") {
      return (0, _core.jsx)(H1, props, props.children);
    } else {
      return (0, _core.jsx)(Header, null, (0, _core.jsx)(_BlogPostSubtitle["default"], {
        post: post
      }), (0, _core.jsx)("a", {
        href: post.url
      }, (0, _core.jsx)(H1, props, props.children)));
    }
  }
});