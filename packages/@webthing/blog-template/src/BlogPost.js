import React from "react";
import classNames from "classnames";
import { Webthing, BlogPostSEOTags as SEOTags } from "@webthing/core";

const BlogPost = ({ pageType, post, children, environment }) => (
  <article
    itemScope
    itemProp={pageType === "index" ? "blogPosts" : "blogPost"}
    itemType="http://schema.org/BlogPosting"
    id={post.slug}
    itemID={post.slug}
    className={classNames("BlogPost", {
      "BlogPost--index": pageType === "index",
      "BlogPost--show": pageType === "show",
      "BlogPost--editor": pageType === "editor"
    })}
  >
    <SEOTags post={post} />

    <div className="BlogPost-Body">
      {/* This is where your post content goes! */}
      {children}
    </div>
  </article>
);

// You probably want to keep this as is
// Previewing your post might break if you remove this part.
const BlogPostContainer = props => (
  <Webthing>
    {({ pageType, environment, post }) => (
      <BlogPost
        pageType={pageType}
        environment={environment}
        post={props.post || post}
      >
        {props.children}
      </BlogPost>
    )}
  </Webthing>
);

export { BlogPostContainer as BlogPost };
export default BlogPostContainer;
