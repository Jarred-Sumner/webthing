import React from "react";
import { BlogSEOTags } from "@webthing/core";
import { BlogPost } from "./BlogPost";

export const Blog = ({ blog, children, pageType }) => (
  <div
    itemScope
    itemID={String(blog.id)}
    itemType="http://schema.org/Blog"
    className="Blog"
  >
    <BlogSEOTags blog={blog} />

    {pageType === "index" ? (
      <div className="BlogIndex">
        {/* children is the list of blog posts */}
        <div className="BlogPost-List">{children}</div>
      </div>
    ) : (
      /* children is the current blog post */
      /* You probably want to go to BlogPost.js to modify this part */
      <BlogPost>{children}</BlogPost>
    )}

    {/*----- Footer shown on every page goes here  -----*/}
  </div>
);

export default Blog;
