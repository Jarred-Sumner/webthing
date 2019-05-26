import * as React from "react";
import {
  Post,
  Blog,
  WebthingContext,
  WebthingContextInterface
} from "./WebthingContext";

// @ts-ignore
import { Title, Meta, Link } from "react-head";

export { Title, Meta, Link };

const MetaTag = (props: any) => <Meta {...props} />;
const LinkTag = (props: any) => <Link {...props} />;

export const getBlogTitle = (blog: Blog) => {
  if (blog.title) {
    return `${blog.title} – Webthing`;
  } else {
    return `@${blog.subdomain} – Webthing`;
  }
};

const faviconMimeType = (photoURL: string) => {
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

const RawBlogPostSEOTags = ({ post, pageType }: WebthingContextInterface) => (
  <>
    <meta itemProp="description" content={post.summary} />
    {pageType === "show" && (
      <>
        <MetaTag property="article:publisher" content="https://webthi.ng" />

        {post.title && (
          <>
            <Title>{post.title.trim()} – Webthing</Title>
            <MetaTag property="og:title" content={`${post.title} – Webthing`} />
            <MetaTag
              name="twitter:title"
              content={`${post.title} – Webthing`}
            />
          </>
        )}

        {post.summary && (
          <>
            <MetaTag property="og:description" content={post.summary} />
            <MetaTag name="description" content={post.summary} />
            <MetaTag name="twitter:description" content={post.summary} />
          </>
        )}
        <MetaTag property="og:type" content="article" />
        <MetaTag property="og:url" content={post.url} />
        {post.publishedAt && (
          <>
            <MetaTag
              property="og:article:published_time"
              content={post.publishedAt.toISOString()}
            />
            <MetaTag
              property="article:published_time"
              content={post.publishedAt.toISOString()}
            />
          </>
        )}

        {post.photoURL && (
          <>
            <MetaTag property="og:image:url" content={post.photoURL} />
            <MetaTag name="twitter:image" content={post.photoURL} />
          </>
        )}

        {post.editedAt && (
          <>
            <MetaTag
              property="og:article:modified_time"
              content={post.editedAt.toISOString()}
            />
            <MetaTag
              property="article:modified_time"
              content={post.editedAt.toISOString()}
            />
            <meta
              itemProp="dateModified"
              content={post.editedAt.toISOString()}
            />
          </>
        )}
      </>
    )}
  </>
);

export const BlogPostSEOTags = ({ post }: { post: Post }) => (
  <WebthingContext.Consumer>
    {({ pageType, ...otherProps }) => (
      <RawBlogPostSEOTags {...otherProps} pageType={pageType} post={post} />
    )}
  </WebthingContext.Consumer>
);

export const BlogSEOTags = ({ blog }: { blog: Blog }) => (
  <>
    <Title>{getBlogTitle(blog)}</Title>
    <LinkTag
      rel="alternate"
      type="application/rss+xml"
      title={getBlogTitle(blog)}
      href={blog.url + "/feed.atom"}
    />
    <MetaTag property="og:title" content={getBlogTitle(blog)} />
    <MetaTag name="twitter:title" content={getBlogTitle(blog)} />

    {blog.photoURL && (
      <LinkTag
        rel="icon"
        type={faviconMimeType(blog.photoURL)}
        href={blog.photoURL}
      />
    )}

    <MetaTag name="twitter:card" content="summary_large_image" />
    <MetaTag property="og:description" content={blog.description} />
    <MetaTag name="twitter:description" content={blog.description} />

    <MetaTag name="description" content={blog.description} />
    <MetaTag property="og:site_name" content={getBlogTitle(blog)} />
    <MetaTag name="viewport" content="width=device-width, initial-scale=1" />
  </>
);
