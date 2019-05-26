(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/styled-base"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/styled-base"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledBase);
    global.Paragraph = mod.exports;
  }
})(this, function (_exports, _styledBase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Paragraph = void 0;
  _styledBase = _interopRequireDefault(_styledBase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var Paragraph = (0, _styledBase["default"])("p", {
    target: "e19trnp30"
  })(process.env.NODE_ENV === "production" ? {
    name: "e5l2yn",
    styles: "display:block;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0px;margin-inline-end:0px;line-height:1.6;font-family:var(--body-font);"
  } : {
    name: "e5l2yn",
    styles: "display:block;margin-block-start:1em;margin-block-end:1em;margin-inline-start:0px;margin-inline-end:0px;line-height:1.6;font-family:var(--body-font);",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL1BhcmFncmFwaC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRWlDIiwiZmlsZSI6Ii4uLy4uL3NyYy9Db21wb25lbnRzL1BhcmFncmFwaC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xuICBmb250LWZhbWlseTogdmFyKC0tYm9keS1mb250KTtcbmA7XG4iXX0= */"
  });
  _exports.Paragraph = Paragraph;
});