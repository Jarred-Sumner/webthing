(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "classnames", "./.."], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("classnames"), require("./.."));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.classnames, global._);
    global.BlogPost = mod.exports;
  }
})(this, function (_exports, _core, _react, _classnames, _) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.BlogPost = void 0;
  _react = _interopRequireDefault(_react);
  _classnames = _interopRequireDefault(_classnames);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var BlogPost = function BlogPost(_ref) {
    var pageType = _ref.pageType,
        post = _ref.post,
        children = _ref.children,
        environment = _ref.environment;
    return (0, _core.jsx)("article", {
      itemScope: true,
      itemProp: pageType === "index" ? "blogPosts" : "blogPost",
      itemType: "http://schema.org/BlogPosting",
      id: post.slug,
      itemID: post.slug,
      className: (0, _classnames["default"])("BlogPost", {
        "BlogPost--index": pageType === "index",
        "BlogPost--show": pageType === "show",
        "BlogPost--editor": pageType === "editor"
      })
    }, (0, _core.jsx)(_.BlogPostSEOTags, {
      post: post
    }), (0, _core.jsx)("div", {
      className: "BlogPost-Body"
    }, children));
  }; // You probably want to keep this as is
  // Previewing your post might break if you remove this part.


  var BlogPostContainer = function BlogPostContainer(props) {
    return (0, _core.jsx)(_.Webthing, null, function (_ref2) {
      var pageType = _ref2.pageType,
          environment = _ref2.environment,
          post = _ref2.post;
      return (0, _core.jsx)(BlogPost, {
        pageType: pageType,
        environment: environment,
        post: props.post || post
      }, props.children);
    });
  };

  _exports.BlogPost = BlogPostContainer;
  var _default = BlogPostContainer;
  _exports["default"] = _default;
});