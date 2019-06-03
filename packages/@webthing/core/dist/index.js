(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "react-head", "./components/Webthing", "./components/WebthingContext", "react-is", "./components/SEOTags"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("react-head"), require("./components/Webthing"), require("./components/WebthingContext"), require("react-is"), require("./components/SEOTags"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.reactHead, global.Webthing, global.WebthingContext, global.reactIs, global.SEOTags);
    global.index = mod.exports;
  }
})(this, function (_exports, _core, React, _reactHead, _Webthing, _WebthingContext, _reactIs, _SEOTags) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "WebthingProvider", {
    enumerable: true,
    get: function get() {
      return _Webthing.WebthingProvider;
    }
  });
  Object.defineProperty(_exports, "BlogComponentType", {
    enumerable: true,
    get: function get() {
      return _WebthingContext.BlogComponentType;
    }
  });
  Object.defineProperty(_exports, "BlogPostComponentType", {
    enumerable: true,
    get: function get() {
      return _WebthingContext.BlogPostComponentType;
    }
  });
  Object.defineProperty(_exports, "WebthingContext", {
    enumerable: true,
    get: function get() {
      return _WebthingContext.WebthingContext;
    }
  });
  Object.defineProperty(_exports, "CodeblogContext", {
    enumerable: true,
    get: function get() {
      return _WebthingContext.WebthingContext;
    }
  });
  Object.defineProperty(_exports, "WebthingContextInterface", {
    enumerable: true,
    get: function get() {
      return _WebthingContext.WebthingContextInterface;
    }
  });
  Object.defineProperty(_exports, "Post", {
    enumerable: true,
    get: function get() {
      return _WebthingContext.Post;
    }
  });
  Object.defineProperty(_exports, "Blog", {
    enumerable: true,
    get: function get() {
      return _WebthingContext.Blog;
    }
  });
  Object.defineProperty(_exports, "EnvironmentType", {
    enumerable: true,
    get: function get() {
      return _WebthingContext.EnvironmentType;
    }
  });
  Object.defineProperty(_exports, "PageType", {
    enumerable: true,
    get: function get() {
      return _WebthingContext.PageType;
    }
  });
  Object.defineProperty(_exports, "Template", {
    enumerable: true,
    get: function get() {
      return _WebthingContext.Template;
    }
  });
  Object.defineProperty(_exports, "BlogPostSEOTags", {
    enumerable: true,
    get: function get() {
      return _SEOTags.BlogPostSEOTags;
    }
  });
  Object.defineProperty(_exports, "BlogSEOTags", {
    enumerable: true,
    get: function get() {
      return _SEOTags.BlogSEOTags;
    }
  });
  Object.defineProperty(_exports, "Title", {
    enumerable: true,
    get: function get() {
      return _SEOTags.Title;
    }
  });
  Object.defineProperty(_exports, "Meta", {
    enumerable: true,
    get: function get() {
      return _SEOTags.Meta;
    }
  });
  Object.defineProperty(_exports, "Link", {
    enumerable: true,
    get: function get() {
      return _SEOTags.Link;
    }
  });
  _exports["default"] = _exports.Webthing = _exports.WebthingPostEditor = _exports.WebthingIndexPage = _exports.WebthingPost = _exports.WebthingRoot = _exports.WebthingError = void 0;
  React = _interopRequireWildcard(React);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  var WebthingError =
  /*#__PURE__*/
  function (_Error) {
    _inherits(WebthingError, _Error);

    function WebthingError() {
      _classCallCheck(this, WebthingError);

      return _possibleConstructorReturn(this, _getPrototypeOf(WebthingError).apply(this, arguments));
    }

    return WebthingError;
  }(_wrapNativeSuper(Error));

  _exports.WebthingError = WebthingError;

  var validateTemplate = function validateTemplate(template, throwOnError) {
    var assert = function assert(condition, message) {
      var hard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (condition) {
        return;
      }

      if (throwOnError && hard) {
        throw new WebthingError(message);
      } else {
        console.warn(new WebthingError(message));
      }
    };

    assert((0, _reactIs.isValidElementType)(template.Blog), "Template must export a valid Blog component. Expected to see a React component for Blog, but the value for Blog is: ".concat(template.Blog));
    assert((0, _reactIs.isValidElementType)(template.BlogPost), "Template must export a valid BlogPost component. Expected to see a React component for BlogPost, but the value for BlogPost is: ".concat(template.Blog));
    assert(typeof template.styles === "string", "Template should export styles as a string. Expected to see a string for styles but the value for styles is: ".concat(template.styles), false);
  };

  var WebthingRoot = function WebthingRoot(props) {
    if (props.pageType === "show") {
      return (0, _core.jsx)(WebthingPost, props);
    } else if (props.pageType === "editor") {
      return (0, _core.jsx)(WebthingPostEditor, props);
    } else if (props.pageType === "index") {
      return (0, _core.jsx)(WebthingIndexPage, props);
    } else {
      return null;
    }
  };

  _exports.WebthingRoot = WebthingRoot;

  var WebthingPost = function WebthingPost(props) {
    var template = props.template;
    validateTemplate(template, false);
    var BlogComponent = template.Blog,
        BlogPostComponent = template.BlogPost;
    return (0, _core.jsx)(_reactHead.HeadProvider, {
      headTags: props.headTags
    }, (0, _core.jsx)(_Webthing.WebthingProvider, {
      pageType: "show",
      environment: props.environment,
      post: _objectSpread({}, props.post, {
        body: props.children
      }),
      blog: props.blog,
      BlogComponent: BlogComponent,
      template: template,
      BlogPostComponent: BlogPostComponent
    }, (0, _core.jsx)(_WebthingContext.WebthingContext.Consumer, null, function (contextProps) {
      return (0, _core.jsx)(BlogComponent, contextProps, props.children);
    })));
  };

  _exports.WebthingPost = WebthingPost;

  var WebthingIndexPage = function WebthingIndexPage(props) {
    var template = props.template;
    validateTemplate(template, false);
    var BlogComponent = template.Blog,
        BlogPostComponent = template.BlogPost;
    return (0, _core.jsx)(_reactHead.HeadProvider, {
      headTags: props.headTags
    }, (0, _core.jsx)(_Webthing.WebthingProvider, {
      pageType: "index",
      environment: props.environment,
      posts: props.posts,
      blog: props.blog,
      template: template,
      BlogComponent: BlogComponent,
      BlogPostComponent: BlogPostComponent
    }, (0, _core.jsx)(_WebthingContext.WebthingContext.Consumer, null, function (contextProps) {
      return (0, _core.jsx)(BlogComponent, contextProps, React.Children.map(props.children, function (child, index) {
        return (0, _core.jsx)(_Webthing.WebthingProvider, {
          pageType: "index",
          environment: props.environment,
          post: contextProps.posts[index],
          posts: props.posts,
          blog: props.blog,
          template: template,
          BlogComponent: BlogComponent,
          BlogPostComponent: BlogPostComponent
        }, (0, _core.jsx)(BlogPostComponent, _extends({}, contextProps, {
          post: contextProps.posts[index]
        }), child));
      }));
    })));
  };

  _exports.WebthingIndexPage = WebthingIndexPage;

  var WebthingPostEditor = function WebthingPostEditor(props) {
    var template = props.template;
    validateTemplate(template, true);
    var BlogComponent = template.Blog,
        BlogPostComponent = template.BlogPost;
    return (0, _core.jsx)(_reactHead.HeadProvider, {
      headTags: props.headTags
    }, (0, _core.jsx)(_Webthing.WebthingProvider, {
      pageType: "editor",
      environment: props.environment,
      post: _objectSpread({}, props.post, {
        body: props.children
      }),
      blog: props.blog,
      BlogComponent: BlogComponent,
      template: template,
      BlogPostComponent: BlogPostComponent
    }, (0, _core.jsx)(_WebthingContext.WebthingContext.Consumer, null, function (contextProps) {
      return (0, _core.jsx)(BlogComponent, contextProps, props.children);
    })));
  };

  _exports.WebthingPostEditor = WebthingPostEditor;
  var Webthing = _WebthingContext.WebthingContext.Consumer;
  _exports.Webthing = Webthing;
  var _default = Webthing;
  _exports["default"] = _default;
});