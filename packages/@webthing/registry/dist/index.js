(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./EditableProps", "./RegistryContext"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./EditableProps"), require("./RegistryContext"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.EditableProps, global.RegistryContext);
    global.index = mod.exports;
  }
})(this, function (_exports, _EditableProps, _RegistryContext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "EditableProps", {
    enumerable: true,
    get: function get() {
      return _EditableProps.EditableProps;
    }
  });
  Object.defineProperty(_exports, "RegistryContext", {
    enumerable: true,
    get: function get() {
      return _RegistryContext.RegistryContext;
    }
  });
  Object.defineProperty(_exports, "RegistryProvider", {
    enumerable: true,
    get: function get() {
      return _RegistryContext.RegistryProvider;
    }
  });
  Object.defineProperty(_exports, "ComponentManifestMap", {
    enumerable: true,
    get: function get() {
      return _RegistryContext.ComponentManifestMap;
    }
  });
  Object.defineProperty(_exports, "RegistryContextType", {
    enumerable: true,
    get: function get() {
      return _RegistryContext.RegistryContextType;
    }
  });
  Object.defineProperty(_exports, "normalizeBlock", {
    enumerable: true,
    get: function get() {
      return _RegistryContext.normalizeBlock;
    }
  });
  Object.defineProperty(_exports, "isVoid", {
    enumerable: true,
    get: function get() {
      return _RegistryContext.isVoid;
    }
  });
  _exports.TemplateCategoryType = _exports.CategoryType = _exports.InlineTypes = _exports.BlockTypes = void 0;
  var BlockTypes;
  _exports.BlockTypes = BlockTypes;

  (function (BlockTypes) {
    BlockTypes["title"] = "@webthing/title";
    BlockTypes["header"] = "@webthing/header";
    BlockTypes["paragraph"] = "@webthing/paragraph";
    BlockTypes["blockquote"] = "@webthing/blockquote";
  })(BlockTypes || (_exports.BlockTypes = BlockTypes = {}));

  var InlineTypes;
  _exports.InlineTypes = InlineTypes;

  (function (InlineTypes) {
    InlineTypes["bold"] = "@webthing/bold";
    InlineTypes["link"] = "@webthing/link";
  })(InlineTypes || (_exports.InlineTypes = InlineTypes = {}));

  var CategoryType;
  _exports.CategoryType = CategoryType;

  (function (CategoryType) {
    CategoryType["inline"] = "text";
    CategoryType["block"] = "block";
    CategoryType["header"] = "header";
    CategoryType["text"] = "text";
    CategoryType["media"] = "media";
    CategoryType["embed"] = "embed";
  })(CategoryType || (_exports.CategoryType = CategoryType = {}));

  var TemplateCategoryType; // This will be fancier later.

  _exports.TemplateCategoryType = TemplateCategoryType;

  (function (TemplateCategoryType) {
    TemplateCategoryType["blog"] = "blog";
    TemplateCategoryType["card"] = "card";
    TemplateCategoryType["blank"] = "blank";
  })(TemplateCategoryType || (_exports.TemplateCategoryType = TemplateCategoryType = {}));
});