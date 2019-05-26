(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "scriptjs", "react-is"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("scriptjs"), require("react-is"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.scriptjs, global.reactIs);
    global.ComponentLoader = mod.exports;
  }
})(this, function (_exports, _core, _react, _scriptjs, ReactIs) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.ComponentLoader = _exports.loadAndEvalScript = _exports.loadScript = _exports.getModule = void 0;
  _react = _interopRequireDefault(_react);
  _scriptjs = _interopRequireDefault(_scriptjs);
  ReactIs = _interopRequireWildcard(ReactIs);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var getModule = function getModule(moduleName) {
    var mod = window[moduleName];

    if (ReactIs.isValidElementType(mod)) {
      return mod;
    } else if (_typeof(mod) === "object" && ReactIs.isValidElementType(mod["default"])) {
      return mod["default"];
    } else if (_typeof(mod) === "object" && ReactIs.isValidElementType(mod[moduleName])) {
      return mod[moduleName];
    } else {
      return null;
    }
  };

  _exports.getModule = getModule;

  var loadScript = function loadScript(url) {
    return new Promise(function (resolve, reject) {
      try {
        (0, _scriptjs["default"])(url, function () {
          return resolve();
        }, function () {
          return reject();
        });
      } catch (exception) {
        reject(exception);
      }
    });
  };

  _exports.loadScript = loadScript;

  var loadAndEvalScript = function loadAndEvalScript(url, moduleName) {
    return loadScript(url).then(function () {
      return getModule(moduleName);
    }, console.error);
  };

  _exports.loadAndEvalScript = loadAndEvalScript;

  var ComponentLoader =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ComponentLoader, _React$Component);

    function ComponentLoader(props) {
      var _this;

      _classCallCheck(this, ComponentLoader);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ComponentLoader).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "Component", void 0);

      _defineProperty(_assertThisInitialized(_this), "loadComponent", function () {
        var cacheBust = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!_this.props.src) {
          return;
        }

        return loadAndEvalScript(cacheBust ? _this.props.src + "?d=".concat(new Date().getTime()) : _this.props.src, _this.props.moduleName).then(function (Component) {
          _this.Component = Component;

          _this.setState({
            status: "completed",
            error: null
          });
        }, function (exception) {
          console.error(exception);

          _this.setState({
            error: exception,
            status: "error"
          });
        });
      });

      if (props.src) {
        _this.Component = getModule(props.moduleName);
      }

      _this.state = {
        status: _this.Component ? "completed" : "loading",
        error: null
      };
      return _this;
    }

    _createClass(ComponentLoader, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.state.status === "loading") {
          this.loadComponent(false);
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (prevProps.src !== this.props.src && this.props.src && this.state.status !== "completed") {
          this.loadComponent(true);
        }
      }
    }, {
      key: "componentDidCatch",
      value: function componentDidCatch(error) {
        console.error("[".concat(this.props.moduleName, "]"), error);
        this.setState({
          status: "error"
        });
      }
    }, {
      key: "render",
      value: function render() {
        var status = this.state.status;
        var Component = this.Component;

        if (status === "completed") {
          return (0, _core.jsx)(Component, _extends({
            ref: this.props.innerRef
          }, this.props.componentProps), this.props.children);
        } else {
          return _react["default"].createElement(this.props.wrapperTagName, {
            ref: this.props.innerRef
          }, this.props.children);
        }
      }
    }], [{
      key: "getDerivedStateFromError",
      value: function getDerivedStateFromError(_error) {
        return {
          status: "error"
        };
      }
    }]);

    return ComponentLoader;
  }(_react["default"].Component);

  _exports.ComponentLoader = ComponentLoader;
});