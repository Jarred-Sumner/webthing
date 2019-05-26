(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "./WebthingContext", "react-head"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("./WebthingContext"), require("react-head"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.WebthingContext, global.reactHead);
    global.SEOTags = mod.exports;
  }
})(this, function (_exports, _core, React, _WebthingContext, _reactHead) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "Title", {
    enumerable: true,
    get: function get() {
      return _reactHead.Title;
    }
  });
  Object.defineProperty(_exports, "Meta", {
    enumerable: true,
    get: function get() {
      return _reactHead.Meta;
    }
  });
  Object.defineProperty(_exports, "Link", {
    enumerable: true,
    get: function get() {
      return _reactHead.Link;
    }
  });
  _exports.BlogSEOTags = _exports.BlogPostSEOTags = _exports.getBlogTitle = void 0;
  React = _interopRequireWildcard(React);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  var MetaTag = function MetaTag(props) {
    return (0, _core.jsx)(_reactHead.Meta, props);
  };

  var LinkTag = function LinkTag(props) {
    return (0, _core.jsx)(_reactHead.Link, props);
  };

  var getBlogTitle = function getBlogTitle(blog) {
    if (blog.title) {
      return "".concat(blog.title, " \u2013 Webthing");
    } else {
      return "@".concat(blog.subdomain, " \u2013 Webthing");
    }
  };

  _exports.getBlogTitle = getBlogTitle;

  var faviconMimeType = function faviconMimeType(photoURL) {
    if (photoURL.endsWith(".png")) {
      return "image/png";
    } else if (photoURL.endsWith(".jpg") || photoURL.endsWith(".jpeg")) {
      return "image/jpeg";
    } else if (photoURL.endsWith(".gif")) {
      return "image/gif";
    } else {
      return null;
    }
  };

  var RawBlogPostSEOTags = function RawBlogPostSEOTags(_ref) {
    var post = _ref.post,
        pageType = _ref.pageType;
    return (0, _core.jsx)(React.Fragment, null, (0, _core.jsx)("meta", {
      itemProp: "description",
      content: post.summary
    }), pageType === "show" && (0, _core.jsx)(React.Fragment, null, (0, _core.jsx)(MetaTag, {
      property: "article:publisher",
      content: "https://webthi.ng"
    }), post.title && (0, _core.jsx)(React.Fragment, null, (0, _core.jsx)(_reactHead.Title, null, post.title.trim(), " \u2013 Webthing"), (0, _core.jsx)(MetaTag, {
      property: "og:title",
      content: "".concat(post.title, " \u2013 Webthing")
    }), (0, _core.jsx)(MetaTag, {
      name: "twitter:title",
      content: "".concat(post.title, " \u2013 Webthing")
    })), post.summary && (0, _core.jsx)(React.Fragment, null, (0, _core.jsx)(MetaTag, {
      property: "og:description",
      content: post.summary
    }), (0, _core.jsx)(MetaTag, {
      name: "description",
      content: post.summary
    }), (0, _core.jsx)(MetaTag, {
      name: "twitter:description",
      content: post.summary
    })), (0, _core.jsx)(MetaTag, {
      property: "og:type",
      content: "article"
    }), (0, _core.jsx)(MetaTag, {
      property: "og:url",
      content: post.url
    }), post.publishedAt && (0, _core.jsx)(React.Fragment, null, (0, _core.jsx)(MetaTag, {
      property: "og:article:published_time",
      content: post.publishedAt.toISOString()
    }), (0, _core.jsx)(MetaTag, {
      property: "article:published_time",
      content: post.publishedAt.toISOString()
    })), post.photoURL && (0, _core.jsx)(React.Fragment, null, (0, _core.jsx)(MetaTag, {
      property: "og:image:url",
      content: post.photoURL
    }), (0, _core.jsx)(MetaTag, {
      name: "twitter:image",
      content: post.photoURL
    })), post.editedAt && (0, _core.jsx)(React.Fragment, null, (0, _core.jsx)(MetaTag, {
      property: "og:article:modified_time",
      content: post.editedAt.toISOString()
    }), (0, _core.jsx)(MetaTag, {
      property: "article:modified_time",
      content: post.editedAt.toISOString()
    }), (0, _core.jsx)("meta", {
      itemProp: "dateModified",
      content: post.editedAt.toISOString()
    }))));
  };

  var BlogPostSEOTags = function BlogPostSEOTags(_ref2) {
    var post = _ref2.post;
    return (0, _core.jsx)(_WebthingContext.WebthingContext.Consumer, null, function (_ref3) {
      var pageType = _ref3.pageType,
          otherProps = _objectWithoutProperties(_ref3, ["pageType"]);

      return (0, _core.jsx)(RawBlogPostSEOTags, _extends({}, otherProps, {
        pageType: pageType,
        post: post
      }));
    });
  };

  _exports.BlogPostSEOTags = BlogPostSEOTags;

  var BlogSEOTags = function BlogSEOTags(_ref4) {
    var blog = _ref4.blog;
    return (0, _core.jsx)(React.Fragment, null, (0, _core.jsx)(_reactHead.Title, null, getBlogTitle(blog)), (0, _core.jsx)(LinkTag, {
      rel: "alternate",
      type: "application/rss+xml",
      title: getBlogTitle(blog),
      href: blog.url + "/feed.atom"
    }), (0, _core.jsx)(MetaTag, {
      property: "og:title",
      content: getBlogTitle(blog)
    }), (0, _core.jsx)(MetaTag, {
      name: "twitter:title",
      content: getBlogTitle(blog)
    }), blog.photoURL && (0, _core.jsx)(LinkTag, {
      rel: "icon",
      type: faviconMimeType(blog.photoURL),
      href: blog.photoURL
    }), (0, _core.jsx)(MetaTag, {
      name: "twitter:card",
      content: "summary_large_image"
    }), (0, _core.jsx)(MetaTag, {
      property: "og:description",
      content: blog.description
    }), (0, _core.jsx)(MetaTag, {
      name: "twitter:description",
      content: blog.description
    }), (0, _core.jsx)(MetaTag, {
      name: "description",
      content: blog.description
    }), (0, _core.jsx)(MetaTag, {
      property: "og:site_name",
      content: getBlogTitle(blog)
    }), (0, _core.jsx)(MetaTag, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }));
  };

  _exports.BlogSEOTags = BlogSEOTags;
});