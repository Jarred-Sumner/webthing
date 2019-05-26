(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "tinycolor2"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("tinycolor2"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.tinycolor2);
    global.EditableProps = mod.exports;
  }
})(this, function (_exports, _tinycolor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.getDefaultEditingProp = _exports.requiredProps = _exports.EditableProps = _exports.EditablePropType = void 0;
  _tinycolor = _interopRequireDefault(_tinycolor);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

  function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var EditablePropType;
  _exports.EditablePropType = EditablePropType;

  (function (EditablePropType) {
    EditablePropType["enum"] = "enum";
    EditablePropType["color"] = "color";
    EditablePropType["url"] = "url";
  })(EditablePropType || (_exports.EditablePropType = EditablePropType = {}));

  var normalizeEnumValues = function normalizeEnumValues(values) {
    return values.map(function (value) {
      if (typeof value === "string") {
        return {
          value: value,
          label: value
        };
      } else {
        return value;
      }
    });
  };

  var EditableProps =
  /*#__PURE__*/
  function () {
    function EditableProps() {
      _classCallCheck(this, EditableProps);
    }

    _createClass(EditableProps, null, [{
      key: "enum",
      value: function _enum(options) {
        var _options$values = options.values,
            values = _options$values === void 0 ? [] : _options$values,
            label = options.label,
            required = options.required,
            icon = options.icon;
        return {
          type: EditablePropType["enum"],
          label: label,
          required: required || false,
          icon: icon,
          values: normalizeEnumValues(values || [])
        };
      }
    }, {
      key: "color",
      value: function color(options) {
        var _options$presets = options.presets,
            presets = _options$presets === void 0 ? [] : _options$presets,
            label = options.label,
            required = options.required,
            icon = options.icon;
        return {
          type: EditablePropType.color,
          label: label,
          required: required || false,
          icon: icon,
          presets: presets.map(function (preset) {
            return (0, _tinycolor["default"])(preset).toHexString();
          })
        };
      }
    }, {
      key: "url",
      value: function url(options) {
        var label = options.label,
            required = options.required,
            icon = options.icon;
        return {
          type: EditablePropType.url,
          icon: icon,
          required: required || false,
          label: label
        };
      }
    }]);

    return EditableProps;
  }();

  _exports.EditableProps = EditableProps;

  var requiredProps = function requiredProps(editingProps) {
    return Object.entries(editingProps).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          _key = _ref2[0],
          prop = _ref2[1];

      return prop.required;
    }).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          _prop = _ref4[1];

      return key;
    });
  };

  _exports.requiredProps = requiredProps;

  var getDefaultEditingProp = function getDefaultEditingProp(editingProps, values) {
    var _required = requiredProps(editingProps);

    return _required.find(function (key) {
      return !values[key];
    });
  };

  _exports.getDefaultEditingProp = getDefaultEditingProp;
});