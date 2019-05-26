import React from "react";
import { BlogSEOTags } from "@webthing/core";
import { BlogPost } from "./BlogPost";
import Headroom from "react-headroom";

const title = "";
const description = "";

export const Blog = ({ blog, children, pageType }) => (
  <div
    itemScope
    itemID={String(blog.id)}
    itemType="http://schema.org/Blog"
    className="Blog"
  >
    <BlogSEOTags blog={blog} />

    {/*----- Header shown on every page goes here  -----*/}
    <Headroom>
      <div className="BlogHeader">
        <a
          href={blog.url}
          className="BlogHeaderContent BlogHeaderContent--left"
        >
          {blog.photo_url ? (
            <img
              src={blog.photo_url}
              width={30}
              height={30}
              className="BlogHeader-image"
            />
          ) : (
            <div className="BlogHeader-image BlogHeader-image--fallback" />
          )}
          <div itemProp="headline" className="BlogTitle">
            {title || blog.title}
          </div>
        </a>
      </div>
    </Headroom>

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
