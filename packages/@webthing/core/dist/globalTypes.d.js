/// <reference types="@emotion/core"/>

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.globalTypesD = mod.exports;
  }
})(this, function () {
  "use strict";
});