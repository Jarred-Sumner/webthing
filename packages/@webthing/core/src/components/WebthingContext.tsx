import * as React from "react";

export type PageType = "index" | "show" | "editor" | null;
export type EnvironmentType = "server" | "client";

export type BlogComponentProps = {
  blog: Blog;
  children: React.ReactNode;
  pageType: PageType;
};

export type BlogPostProps = {
  pageType: PageType;
  post: Post;
  children: React.ReactNode;
  environment: EnvironmentType;
};

export type BlogComponentType = React.ComponentType<BlogComponentProps>;
export type BlogPostComponentType = React.ComponentType<BlogPostProps>;

export type Template = {
  styles: string;
  Components: {
    Blocks: any;
    Inlines: any;
  };

  Blog: BlogComponentType;
  BlogPost: BlogPostComponentType;
};

export type Blog = {
  id: string;
  subdomain: string;
  url: string;
  title: string | null;
  description: string | null;
  photoURL: string | null;
};

export type Remix = {
  sourceURL: string;
  sourceName: string | null;
  sourceAuthor: string | null;
};

export type Post = {
  id: number;
  slug: string;
  url: string;
  isRemix: boolean;
  title: string;
  body: React.ReactNode;
  remix: Remix | null;
  text: string;
  photoURL: string | null;
  summary: string;
  code: string;
  publishedAt: Date;
  status: "published" | "draft" | "trash";
  editedAt: Date;
  author: Blog;
  blog: Blog;
};

export type WebthingContextInterface = {
  blog: Blog;
  pageType: PageType;
  post: Post | null;
  posts: Array<Post>;
  environment: EnvironmentType;
  template: Template;
  BlogComponent: BlogComponentType;
  BlogPostComponent: BlogPostComponentType;
};

export const WebthingContext = React.createContext<WebthingContextInterface>(
  null
);
