(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "lodash", "react", "./WebthingContext"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("lodash"), require("react"), require("./WebthingContext"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.lodash, global.react, global.WebthingContext);
    global.Webthing = mod.exports;
  }
})(this, function (_exports, _core, _lodash, React, _WebthingContext) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.WebthingProvider = void 0;
  React = _interopRequireWildcard(React);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  var normalizePost = function normalizePost(post, blog) {
    var _post$published_at = post.published_at,
        publishedAt = _post$published_at === void 0 ? null : _post$published_at,
        _post$editedAt = post.editedAt,
        editedAt = _post$editedAt === void 0 ? null : _post$editedAt,
        _post$photo_url = post.photo_url,
        photoURL = _post$photo_url === void 0 ? null : _post$photo_url;

    if (publishedAt) {
      publishedAt = new Date(publishedAt);
    }

    if (editedAt) {
      editedAt = new Date(editedAt);
    }

    return _objectSpread({}, post, {
      blog: blog,
      text: post.text || "",
      publishedAt: publishedAt,
      photoURL: photoURL,
      editedAt: editedAt,
      author: blog
    });
  };

  var WebthingProvider =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WebthingProvider, _React$Component);

    function WebthingProvider(props) {
      var _this;

      _classCallCheck(this, WebthingProvider);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(WebthingProvider).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "state", void 0);

      var state = {
        blog: _objectSpread({}, props.blog),
        posts: props.posts,
        post: props.post,
        template: props.template,
        pageType: props.pageType,
        environment: props.environment,
        BlogComponent: props.BlogComponent,
        BlogPostComponent: props.BlogPostComponent
      };

      if (props.post) {
        state.post = normalizePost(props.post, state.blog);
      }

      state.posts = props.posts.map(function (post) {
        return normalizePost(post, state.blog);
      });
      _this.state = state;
      return _this;
    }

    _createClass(WebthingProvider, [{
      key: "render",
      value: function render() {
        return (0, _core.jsx)(_WebthingContext.WebthingContext.Provider, {
          value: this.state
        }, this.props.children);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        var changes = {};

        if (props.BlogComponent !== state.BlogComponent) {
          changes.BlogComponent = props.BlogComponent;
        }

        if (props.BlogPostComponent !== state.BlogPostComponent) {
          changes.BlogPostComponent = props.BlogPostComponent;
        }

        if (props.template !== state.template) {
          changes.template = props.template;
        }

        if (props.pageType !== state.pageType) {
          changes.pageType = props.pageType;
        }

        var blog = state.blog;

        if (!(0, _lodash.isEqual)(props.blog, state.blog)) {
          changes.blog = props.blog;
          blog = changes.blog;
        }

        if (!props.post && state.post) {
          changes.post = null;
        } else if (props.post && props.post !== state.post && !(0, _lodash.isEqual)(normalizePost(props.post, blog), state.post)) {
          changes.post = normalizePost(props.post, blog);
        }

        changes.posts = (props.posts || []).map(function (post) {
          return normalizePost(post, props.blog);
        });
        return changes;
      }
    }]);

    return WebthingProvider;
  }(React.Component);

  _exports.WebthingProvider = WebthingProvider;

  _defineProperty(WebthingProvider, "defaultProps", {
    posts: [],
    post: null
  });
});