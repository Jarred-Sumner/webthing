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
    global.Quote = mod.exports;
  }
})(this, function (_exports, _styledBase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.BlockQuote = void 0;
  _styledBase = _interopRequireDefault(_styledBase);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var BlockQuote = (0, _styledBase["default"])("blockquote", {
    target: "efym4m60"
  })(process.env.NODE_ENV === "production" ? {
    name: "ggpwg1",
    styles: "margin-top:0;margin-bottom:0;font-size:1em;line-height:1.8;border-left:4px solid var(--text-color);border-top-left-radius:2px;border-bottom-left-radius:2px;padding-left:var(--offset-normal);padding-top:0.25em;padding-bottom:0.25em;word-wrap:break-word;font-family:var(--headings-font);& + &{border-bottom-left-radius:0;}"
  } : {
    name: "ggpwg1",
    styles: "margin-top:0;margin-bottom:0;font-size:1em;line-height:1.8;border-left:4px solid var(--text-color);border-top-left-radius:2px;border-bottom-left-radius:2px;padding-left:var(--offset-normal);padding-top:0.25em;padding-bottom:0.25em;word-wrap:break-word;font-family:var(--headings-font);& + &{border-bottom-left-radius:0;}",
    map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21wb25lbnRzL1F1b3RlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFMkMiLCJmaWxlIjoiLi4vLi4vc3JjL0NvbXBvbmVudHMvUXVvdGUudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmV4cG9ydCBjb25zdCBCbG9ja1F1b3RlID0gc3R5bGVkLmJsb2NrcXVvdGVgXG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBsaW5lLWhlaWdodDogMS44O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXRleHQtY29sb3IpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAycHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDJweDtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1vZmZzZXQtbm9ybWFsKTtcbiAgcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZ3MtZm9udCk7XG5cbiAgJiArICYge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIH1cbmA7XG4iXX0= */"
  });
  _exports.BlockQuote = BlockQuote;
});