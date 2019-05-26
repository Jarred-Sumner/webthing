import * as React from "react";
import moment from "moment";
import readingTime from "reading-time";

const formatDateForEnvironment = date => {
  return moment(date).fromNow();
};

export const PublishedTimetamp = ({ publishedAt, status }) => {
  if (status === "published" && publishedAt) {
    return (
      <>
        <meta content={publishedAt.toISOString()} itemProp="datePublished" />
        <span className="Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--published">
          {formatDateForEnvironment(publishedAt)}
        </span>
      </>
    );
  } else if (status === "published") {
    return null;
  } else if (status === "draft") {
    return (
      <span className="Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--draft">
        Draft
      </span>
    );
  } else {
    return (
      <span className="Subtitle-datePublished Text--muted Subtitle-status Subtitle-status--hidden">
        Hidden
      </span>
    );
  }
};

export const BlogPostSubtitle = ({ post }) => {
  return (
    <div className="BlogPost-Subtitle">
      <a href={post.url}>
        <PublishedTimetamp
          publishedAt={post.publishedAt}
          status={post.status}
        />
      </a>

      {post.text && (
        <>
          <div className="Separator Separator--small" />

          <div className="ReadingTime">
            {readingTime(String(post.text).trim()).text}
          </div>
        </>
      )}

      {/* SEO stuff */}
      <meta itemProp="author.alternateName" content={post.author.subdomain} />
      <meta itemProp="author.identifier" content={post.author.subdomain} />
      {post.author.title && (
        <meta itemProp="author.name" content={post.author.title} />
      )}
    </div>
  );
};

export default BlogPostSubtitle;
