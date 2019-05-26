(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "../registry", "react-is", "lodash"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("../registry"), require("react-is"), require("lodash"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.registry, global.reactIs, global.lodash);
    global.RegistryContext = mod.exports;
  }
})(this, function (_exports, _core, React, _registry, _reactIs, _lodash) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.normalizeBlock = normalizeBlock;
  _exports.normalizeInline = normalizeInline;
  _exports.RegistryProvider = _exports.isVoid = _exports.RegistryContext = void 0;
  React = _interopRequireWildcard(React);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

  function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var REQUIRED_KEYS = ["title", "src", "category"];

  var normalizeImageURL = function normalizeImageURL(input) {
    if (typeof input === "string") {
      return {
        "1x": input,
        "2x": input,
        "3x": input
      };
    } else if ((0, _lodash.isArrayLike)(input)) {
      var _input = [2, 1, 0].map(function (index) {
        return (0, _lodash.last)(input.slice(0, index).filter(function (row) {
          return !(0, _lodash.isNull)(row) && !(0, _lodash.isUndefined)(row);
        }));
      });

      return {
        "1x": _input[0],
        "2x": _input[2],
        "3x": _input[3]
      };
    } else if (_typeof(input) === "object" && input !== null && (input["1x"] || input["2x"] || input["3x"])) {
      return {
        "1x": input["1x"],
        "2x": input["2x"],
        "3x": input["3x"]
      };
    } else {
      return {
        "1x": null,
        "2x": null,
        "3x": null
      };
    }
  };

  var RegistryContext = React.createContext({
    Inlines: {},
    Blocks: {},
    schema: {
      blocks: {},
      inlines: {}
    },
    onChangeDevelopmentComponents: function onChangeDevelopmentComponents(_blocks, _inlines) {},
    onChangeBlocks: function onChangeBlocks(_blocks) {},
    onChangeInlines: function onChangeInlines(_inlines) {},
    onInsert: function onInsert(_blocks, _inlines) {}
  });
  _exports.RegistryContext = RegistryContext;

  var isVoid = function isVoid(manifest) {
    return !!manifest.isVoid || manifest.category === _registry.CategoryType.embed;
  };

  _exports.isVoid = isVoid;

  var _lastSchema;

  var computeSchema = function computeSchema(blocks, inlines) {
    var schema = {
      blocks: {},
      inlines: {}
    };
    Object.keys(blocks).forEach(function (blockID) {
      schema.blocks[blockID] = {
        isVoid: isVoid(blocks[blockID]) ? true : undefined
      };
    });
    Object.keys(inlines).forEach(function (inlineID) {
      schema.inlines[inlineID] = {
        isVoid: isVoid(inlines[inlineID]) ? true : undefined
      };
    });

    if ((0, _lodash.isEqual)(_lastSchema, schema)) {
      return _lastSchema;
    } else {
      _lastSchema = schema;
      return schema;
    }
  };

  var addAliases = function addAliases(inlines, blocks, template) {
    [[inlines, template.Components.Inlines], [blocks, template.Components.Blocks]].forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          manifestMap = _ref2[0],
          templateMap = _ref2[1];

      var needsMerge = Object.keys(templateMap).filter(function (key) {
        return manifestMap[key];
      });
      var needsAdded = Object.keys(templateMap).filter(function (key) {
        return !manifestMap[key];
      });
      needsAdded.forEach(function (key) {
        manifestMap[key] = templateMap[key];
      });
      Object.keys(manifestMap).filter(function (key) {
        return key.includes("@codeblog") || key.includes("@webthing");
      }).forEach(function (key) {
        var webthingAlias = key.replace("@codeblog", "@webthing");
        var codeblogAlias = key.replace("@webthing", "@codeblog");

        if (manifestMap[webthingAlias] && manifestMap[codeblogAlias] && manifestMap[webthingAlias] === manifestMap[codeblogAlias]) {
          return;
        }

        if (manifestMap[webthingAlias]) {
          manifestMap[key] = manifestMap[webthingAlias];
          manifestMap[codeblogAlias] = manifestMap[webthingAlias];
        } else if (manifestMap[codeblogAlias]) {
          manifestMap[webthingAlias] = manifestMap[key];
          manifestMap[codeblogAlias] = manifestMap[key];
        }
      });
      needsMerge.forEach(function (mergeKey) {
        var merged = manifestMap[mergeKey];

        if ((0, _reactIs.isValidElementType)(templateMap[mergeKey])) {
          merged.Component = templateMap[mergeKey]; // @ts-ignore
        } else {
          (0, _lodash.merge)(merged, templateMap[mergeKey]);
        }
      });
    });
  };

  var makeContextValue = function makeContextValue(_ref3, onChangeBlocks, onChangeInlines, onInsert, onChangeDevelopmentComponents, template) {
    var Inlines = _ref3.inlines,
        Blocks = _ref3.blocks,
        schema = _ref3.schema;
    addAliases(Inlines, Blocks, template);
    console.log({
      Inlines: Inlines,
      Blocks: Blocks
    });
    return {
      Inlines: Inlines,
      Blocks: Blocks,
      schema: schema,
      onChangeBlocks: onChangeBlocks,
      onChangeInlines: onChangeInlines,
      onInsert: onInsert,
      onChangeDevelopmentComponents: onChangeDevelopmentComponents
    };
  };

  function normalizeBlock(_ref4) {
    var title = _ref4.title,
        description = _ref4.description,
        screenshot = _ref4.screenshot,
        category = _ref4.category,
        placeholder = _ref4.placeholder,
        author = _ref4.author,
        src = _ref4.src,
        isRemote = _ref4.isRemote,
        isVoid = _ref4.isVoid,
        _ref4$multiLine = _ref4.multiLine,
        multiLine = _ref4$multiLine === void 0 ? false : _ref4$multiLine,
        Component = _ref4.Component,
        isDevelopment = _ref4.isDevelopment,
        _EditorComponent = _ref4.EditorComponent,
        editableProps = _ref4.editableProps,
        _ref4$defaultProps = _ref4.defaultProps,
        defaultProps = _ref4$defaultProps === void 0 ? {} : _ref4$defaultProps,
        id = _ref4.id;
    var EditorComponent = _EditorComponent || Component;

    if (defaultProps && Component) {
      Component.defaultProps = _objectSpread({}, defaultProps, Component.defaultProps || {});
      EditorComponent.defaultProps = _objectSpread({}, defaultProps, Component.defaultProps || {});
    }

    return {
      title: title,
      description: description,
      category: category,
      src: src,
      author: author,
      screenshot: normalizeImageURL(screenshot),
      isRemote: isRemote,
      multiLine: multiLine || false,
      isDevelopment: isDevelopment,
      isVoid: !!([_registry.CategoryType.embed, _registry.CategoryType.media].includes(category) || isVoid),
      placeholder: placeholder,
      Component: Component,
      EditorComponent: EditorComponent,
      editableProps: editableProps,
      defaultProps: _objectSpread({}, defaultProps || {}, {
        data: {}
      }),
      id: id
    };
  }

  function normalizeInline(_ref5) {
    var title = _ref5.title,
        description = _ref5.description,
        screenshot = _ref5.screenshot,
        placeholder = _ref5.placeholder,
        category = _ref5.category,
        src = _ref5.src,
        isRemote = _ref5.isRemote,
        isDevelopment = _ref5.isDevelopment,
        author = _ref5.author,
        Component = _ref5.Component,
        _EditorComponent = _ref5.EditorComponent,
        _ref5$editableProps = _ref5.editableProps,
        editableProps = _ref5$editableProps === void 0 ? {} : _ref5$editableProps,
        _ref5$defaultProps = _ref5.defaultProps,
        defaultProps = _ref5$defaultProps === void 0 ? {} : _ref5$defaultProps,
        id = _ref5.id;
    var EditorComponent = _EditorComponent || Component;

    if (defaultProps && Component) {
      Component.defaultProps = _objectSpread({}, defaultProps, Component.defaultProps || {});
      EditorComponent.defaultProps = _objectSpread({}, defaultProps, Component.defaultProps || {});
    }

    return {
      title: title,
      description: description,
      screenshot: normalizeImageURL(screenshot),
      isDevelopment: isDevelopment,
      placeholder: placeholder,
      Component: Component,
      author: author,
      src: src,
      isRemote: isRemote,
      EditorComponent: EditorComponent,
      category: category,
      id: id,
      editableProps: editableProps,
      defaultProps: _objectSpread({}, defaultProps || {}, {
        data: {}
      })
    };
  }

  var RegistryProvider =
  /*#__PURE__*/
  function (_React$PureComponent) {
    _inherits(RegistryProvider, _React$PureComponent);

    function RegistryProvider(props) {
      var _this;

      _classCallCheck(this, RegistryProvider);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RegistryProvider).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "handleChangeBlocks", function (blocks) {
        var stateWithoutContext = {
          blocks: _objectSpread({}, blocks),
          inlines: _this.state.inlines,
          schema: computeSchema(blocks, _this.state.inlines)
        };

        _this.setState(Object.assign(stateWithoutContext, {
          contextValue: makeContextValue(stateWithoutContext, _this.handleChangeBlocks, _this.handleChangeInlines, _this.handleInsert, _this.handleChangeDevelopmentComponents, _this.props.template)
        }));
      });

      _defineProperty(_assertThisInitialized(_this), "handleChangeDevelopmentComponents", function (blocks, inlines) {
        var blocksWithoutDevelopment = Object.entries(_this.state.blocks).filter(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
              _key = _ref7[0],
              block = _ref7[1];

          return !block.isDevelopment;
        });
        var inlinesWithoutDevelopment = Object.entries(_this.state.inlines).filter(function (_ref8) {
          var _ref9 = _slicedToArray(_ref8, 2),
              _key = _ref9[0],
              inline = _ref9[1];

          return !inline.isDevelopment;
        });

        var _inlines = (0, _lodash.fromPairs)([].concat(_toConsumableArray(inlinesWithoutDevelopment), _toConsumableArray(Object.entries(inlines).filter(function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 2),
              _ = _ref11[0],
              inline = _ref11[1];

          return REQUIRED_KEYS.every(function (key) {
            return !(0, _lodash.isEmpty)(inline[key]);
          });
        }).map(function (_ref12) {
          var _ref13 = _slicedToArray(_ref12, 2),
              key = _ref13[0],
              inline = _ref13[1];

          return [key, normalizeInline(inline)];
        }))));

        var _blocks = (0, _lodash.fromPairs)([].concat(_toConsumableArray(blocksWithoutDevelopment), _toConsumableArray(Object.entries(blocks).filter(function (_ref14) {
          var _ref15 = _slicedToArray(_ref14, 2),
              _ = _ref15[0],
              block = _ref15[1];

          return REQUIRED_KEYS.every(function (key) {
            return !(0, _lodash.isEmpty)(block[key]);
          });
        }).map(function (_ref16) {
          var _ref17 = _slicedToArray(_ref16, 2),
              key = _ref17[0],
              block = _ref17[1];

          return [key, normalizeBlock(block)];
        }))));

        var stateWithoutContext = {
          inlines: _inlines,
          blocks: _blocks,
          schema: computeSchema(_blocks, _inlines)
        };

        _this.setState(Object.assign(stateWithoutContext, {
          contextValue: makeContextValue(stateWithoutContext, _this.handleChangeBlocks, _this.handleChangeInlines, _this.handleInsert, _this.handleChangeDevelopmentComponents, _this.props.template)
        }));
      });

      _defineProperty(_assertThisInitialized(_this), "handleInsert", function (_blocks, _inlines) {
        var inlines = (0, _lodash.fromPairs)(Object.entries(_inlines).filter(function (_ref18) {
          var _ref19 = _slicedToArray(_ref18, 2),
              _ = _ref19[0],
              inline = _ref19[1];

          return REQUIRED_KEYS.every(function (key) {
            return !(0, _lodash.isEmpty)(inline[key]);
          });
        }).map(function (_ref20) {
          var _ref21 = _slicedToArray(_ref20, 2),
              key = _ref21[0],
              inline = _ref21[1];

          return [key, normalizeInline(inline)];
        }));
        var blocks = (0, _lodash.fromPairs)(Object.entries(_blocks).filter(function (_ref22) {
          var _ref23 = _slicedToArray(_ref22, 2),
              _ = _ref23[0],
              block = _ref23[1];

          return REQUIRED_KEYS.every(function (key) {
            return !(0, _lodash.isEmpty)(block[key]);
          });
        }).map(function (_ref24) {
          var _ref25 = _slicedToArray(_ref24, 2),
              key = _ref25[0],
              block = _ref25[1];

          return [key, normalizeBlock(block)];
        }));

        var __inlines = _objectSpread({}, _this.state.inlines, inlines);

        var __blocks = _objectSpread({}, _this.state.blocks, blocks);

        var stateWithoutContext = {
          inlines: __inlines,
          blocks: __blocks,
          schema: computeSchema(__blocks, __inlines)
        };

        _this.setState(Object.assign(stateWithoutContext, {
          contextValue: makeContextValue(stateWithoutContext, _this.handleChangeBlocks, _this.handleChangeInlines, _this.handleInsert, _this.handleChangeDevelopmentComponents, _this.props.template)
        }));
      });

      _defineProperty(_assertThisInitialized(_this), "handleChangeInlines", function (inlines) {
        var stateWithoutContext = {
          inlines: _objectSpread({}, inlines),
          blocks: _this.state.blocks,
          schema: computeSchema(_this.state.blocks, inlines)
        };

        _this.setState(Object.assign(stateWithoutContext, {
          contextValue: makeContextValue(stateWithoutContext, _this.handleChangeBlocks, _this.handleChangeInlines, _this.handleInsert, _this.handleChangeDevelopmentComponents, _this.props.template)
        }));
      });

      var _blocks2 = _objectSpread({}, props.initialBlocks);

      var _inlines2 = _objectSpread({}, props.initialInlines);

      var _stateWithoutContext = {
        blocks: _blocks2,
        inlines: _inlines2,
        schema: computeSchema(_blocks2, _inlines2)
      };
      _this.state = Object.assign(_stateWithoutContext, {
        contextValue: makeContextValue(_stateWithoutContext, _this.handleChangeBlocks, _this.handleChangeInlines, _this.handleInsert, _this.handleChangeDevelopmentComponents, _this.props.template)
      });
      return _this;
    }

    _createClass(RegistryProvider, [{
      key: "render",
      value: function render() {
        return (0, _core.jsx)(RegistryContext.Provider, {
          value: this.state.contextValue
        }, this.props.children);
      }
    }]);

    return RegistryProvider;
  }(React.PureComponent);

  _exports.RegistryProvider = RegistryProvider;
});