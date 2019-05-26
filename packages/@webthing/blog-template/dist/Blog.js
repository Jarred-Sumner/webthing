(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "./..", "./BlogPost", "react-headroom"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("./.."), require("./BlogPost"), require("react-headroom"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global._, global.BlogPost, global.reactHeadroom);
    global.Blog = mod.exports;
  }
})(this, function (_exports, _core, _react, _, _BlogPost, _reactHeadroom) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.Blog = void 0;
  _react = _interopRequireDefault(_react);
  _reactHeadroom = _interopRequireDefault(_reactHeadroom);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var title = "";
  var description = "";

  var Blog = function Blog(_ref) {
    var blog = _ref.blog,
        children = _ref.children,
        pageType = _ref.pageType;
    return (0, _core.jsx)("div", {
      itemScope: true,
      itemID: String(blog.id),
      itemType: "http://schema.org/Blog",
      className: "Blog"
    }, (0, _core.jsx)(_.BlogSEOTags, {
      blog: blog
    }), (0, _core.jsx)(_reactHeadroom["default"], null, (0, _core.jsx)("div", {
      className: "BlogHeader"
    }, (0, _core.jsx)("a", {
      href: blog.url,
      className: "BlogHeaderContent BlogHeaderContent--left"
    }, blog.photo_url ? (0, _core.jsx)("img", {
      src: blog.photo_url,
      width: 30,
      height: 30,
      className: "BlogHeader-image"
    }) : (0, _core.jsx)("div", {
      className: "BlogHeader-image BlogHeader-image--fallback"
    }), (0, _core.jsx)("div", {
      itemProp: "headline",
      className: "BlogTitle"
    }, title || blog.title)))), pageType === "index" ? (0, _core.jsx)("div", {
      className: "BlogIndex"
    }, (0, _core.jsx)("div", {
      className: "BlogPost-List"
    }, children)) :
    /* children is the current blog post */

    /* You probably want to go to BlogPost.js to modify this part */
    (0, _core.jsx)(_BlogPost.BlogPost, null, children));
  };

  _exports.Blog = Blog;
  var _default = Blog;
  _exports["default"] = _default;
});