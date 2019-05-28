(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@emotion/core", "react", "moment"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@emotion/core"), require("react"), require("moment"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.core, global.react, global.moment);
    global.BlogPostSubtitle = mod.exports;
  }
})(this, function (_exports, _core, React, _moment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = _exports.BlogPostSubtitle = _exports.PublishedTimetamp = void 0;
  React = _interopRequireWildcard(React);
  _moment = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

  var formatDateForEnvironment = function formatDateForEnvironment(date) {
    return (0, _moment["default"])(date).fromNow();
  };

  var PublishedTimetamp = function PublishedTimetamp(_ref) {
    var publishedAt = _ref.publishedAt,
        status = _ref.status;

    if (status === "published" && publishedAt) {
      return (0, _core.jsx)(React.Fragment, null, (0, _core.jsx)("meta", {
        content: publishedAt.toISOString(),
        itemProp: "datePublished"
      }), (0, _core.jsx)("span", {
        className: "Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--published"
      }, formatDateForEnvironment(publishedAt)));
    } else if (status === "published") {
      return null;
    } else if (status === "draft") {
      return (0, _core.jsx)("span", {
        className: "Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--draft"
      }, "Draft");
    } else {
      return (0, _core.jsx)("span", {
        className: "Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--hidden"
      }, "Hidden");
    }
  };

  _exports.PublishedTimetamp = PublishedTimetamp;

  var BlogPostSubtitle = function BlogPostSubtitle(_ref2) {
    var post = _ref2.post;
    return (0, _core.jsx)("div", {
      className: "BlogPost-Subtitle"
    }, (0, _core.jsx)("a", {
      href: post.url
    }, (0, _core.jsx)(PublishedTimetamp, {
      publishedAt: post.publishedAt,
      status: post.status
    })), (0, _core.jsx)("meta", {
      itemProp: "author.alternateName",
      content: post.author.subdomain
    }), (0, _core.jsx)("meta", {
      itemProp: "author.identifier",
      content: post.author.subdomain
    }), post.author.title && (0, _core.jsx)("meta", {
      itemProp: "author.name",
      content: post.author.title
    }));
  };

  _exports.BlogPostSubtitle = BlogPostSubtitle;
  var _default = BlogPostSubtitle;
  _exports["default"] = _default;
});