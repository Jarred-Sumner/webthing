import * as React from "react";
// @ts-ignore
import { HeadProvider } from "react-head";
import { WebthingProvider } from "./components/Webthing";
import {
  BlogComponentType,
  BlogPostComponentType,
  WebthingContext,
  WebthingContextInterface,
  Post,
  Blog,
  EnvironmentType,
  PageType,
  Template
} from "./components/WebthingContext";

import { isValidElementType } from "react-is";

export { Template };

type WebthingPostProps = WebthingContextInterface & {
  headTags?: [];
  template: Template;
  children: React.ReactNode;
};

export class WebthingError extends Error {}

const validateTemplate = (template: Template, throwOnError: boolean) => {
  const assert = (
    condition: boolean,
    message: string,
    hard: boolean = true
  ) => {
    if (condition) {
      return;
    }

    if (throwOnError && hard) {
      throw new WebthingError(message);
    } else {
      console.warn(new WebthingError(message));
    }
  };

  assert(
    isValidElementType(template.Blog),
    `Template must export a valid Blog component. Expected to see a React component for Blog, but the value for Blog is: ${
      template.Blog
    }`
  );

  assert(
    isValidElementType(template.BlogPost),
    `Template must export a valid BlogPost component. Expected to see a React component for BlogPost, but the value for BlogPost is: ${
      template.Blog
    }`
  );

  assert(
    typeof template.styles === "string",
    `Template should export styles as a string. Expected to see a string for styles but the value for styles is: ${
      template.styles
    }`,
    false
  );
};

export const WebthingRoot = (props: WebthingPostProps) => {
  if (props.pageType === "show") {
    return <WebthingPost {...props} />;
  } else if (props.pageType === "editor") {
    return <WebthingPostEditor {...props} />;
  } else if (props.pageType === "index") {
    return <WebthingIndexPage {...props} />;
  } else {
    return null;
  }
};

export const WebthingPost = (props: WebthingPostProps) => {
  const { template } = props;

  validateTemplate(template, false);

  const { Blog: BlogComponent, BlogPost: BlogPostComponent } = template;

  return (
    <HeadProvider headTags={props.headTags}>
      <WebthingProvider
        pageType="show"
        environment={props.environment}
        post={{ ...props.post, body: props.children }}
        blog={props.blog}
        BlogComponent={BlogComponent}
        template={template}
        BlogPostComponent={BlogPostComponent}
      >
        <WebthingContext.Consumer>
          {contextProps => (
            <BlogComponent {...contextProps}>{props.children}</BlogComponent>
          )}
        </WebthingContext.Consumer>
      </WebthingProvider>
    </HeadProvider>
  );
};

export const WebthingIndexPage = (props: WebthingPostProps) => {
  const { template } = props;

  validateTemplate(template, false);

  const { Blog: BlogComponent, BlogPost: BlogPostComponent } = template;

  return (
    <HeadProvider headTags={props.headTags}>
      <WebthingProvider
        pageType="index"
        environment={props.environment}
        posts={props.posts}
        blog={props.blog}
        template={template}
        BlogComponent={BlogComponent}
        BlogPostComponent={BlogPostComponent}
      >
        <WebthingContext.Consumer>
          {contextProps => (
            <BlogComponent {...contextProps}>
              {React.Children.map(props.children, (child, index) => {
                return (
                  <WebthingProvider
                    pageType="index"
                    environment={props.environment}
                    post={contextProps.posts[index]}
                    template={template}
                    posts={[]}
                    blog={props.blog}
                    BlogComponent={BlogComponent}
                    BlogPostComponent={BlogPostComponent}
                  >
                    <BlogPostComponent
                      {...contextProps}
                      post={contextProps.posts[index]}
                    >
                      {child}
                    </BlogPostComponent>
                  </WebthingProvider>
                );
              })}
            </BlogComponent>
          )}
        </WebthingContext.Consumer>
      </WebthingProvider>
    </HeadProvider>
  );
};

export const WebthingPostEditor = (props: WebthingPostProps) => {
  const { template } = props;

  validateTemplate(template, true);

  const { Blog: BlogComponent, BlogPost: BlogPostComponent } = template;

  return (
    <HeadProvider headTags={props.headTags}>
      <WebthingProvider
        pageType="editor"
        environment={props.environment}
        post={{ ...props.post, body: props.children }}
        blog={props.blog}
        BlogComponent={BlogComponent}
        template={template}
        BlogPostComponent={BlogPostComponent}
      >
        <WebthingContext.Consumer>
          {contextProps => (
            <BlogComponent {...contextProps}>{props.children}</BlogComponent>
          )}
        </WebthingContext.Consumer>
      </WebthingProvider>
    </HeadProvider>
  );
};

export const Webthing = WebthingContext.Consumer;
export default Webthing;

export {
  WebthingContext,
  WebthingContext as CodeblogContext,
  WebthingContextInterface,
  Post,
  Blog,
  BlogPostComponentType,
  BlogComponentType,
  EnvironmentType,
  PageType,
  WebthingProvider
};

export {
  BlogPostSEOTags,
  BlogSEOTags,
  Title,
  Meta,
  Link
} from "./components/SEOTags";
