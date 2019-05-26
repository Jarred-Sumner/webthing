(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./blocks/FancyHeading", "./inlines/Glitter", "./inlines/Highlight", "./inlines/Code"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./blocks/FancyHeading"), require("./inlines/Glitter"), require("./inlines/Highlight"), require("./inlines/Code"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.FancyHeading, global.Glitter, global.Highlight, global.Code);
    global.index = mod.exports;
  }
})(this, function (_exports, _FancyHeading, _Glitter, _Highlight, _Code) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Inlines = _exports.Blocks = void 0;
  _FancyHeading = _interopRequireDefault(_FancyHeading);
  _Glitter = _interopRequireDefault(_Glitter);
  _Highlight = _interopRequireDefault(_Highlight);
  _Code = _interopRequireDefault(_Code);

  var _Inlines;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Blocks = _defineProperty({}, _FancyHeading["default"].id, _FancyHeading["default"]);

  _exports.Blocks = Blocks;
  var Inlines = (_Inlines = {}, _defineProperty(_Inlines, _Code["default"].id, _Code["default"]), _defineProperty(_Inlines, _Glitter["default"].id, _Glitter["default"]), _defineProperty(_Inlines, _Highlight["default"].id, _Highlight["default"]), _Inlines);
  _exports.Inlines = Inlines;
});