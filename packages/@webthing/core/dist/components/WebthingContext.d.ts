import * as React from "react";
export declare type PageType = "index" | "show" | "editor" | null;
export declare type EnvironmentType = "server" | "client";
export declare type BlogComponentProps = {
    blog: Blog;
    children: React.ReactNode;
    pageType: PageType;
};
export declare type BlogPostProps = {
    pageType: PageType;
    post: Post;
    children: React.ReactNode;
    environment: EnvironmentType;
};
export declare type BlogComponentType = React.ComponentType<BlogComponentProps>;
export declare type BlogPostComponentType = React.ComponentType<BlogPostProps>;
export declare type Template = {
    styles: string;
    Components: {
        Blocks: any;
        Inlines: any;
    };
    Blog: BlogComponentType;
    BlogPost: BlogPostComponentType;
};
export declare type Blog = {
    id: string;
    subdomain: string;
    url: string;
    title: string | null;
    description: string | null;
    photoURL: string | null;
};
export declare type Remix = {
    sourceURL: string;
    sourceName: string | null;
    sourceAuthor: string | null;
};
export declare type Post = {
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
export declare type WebthingContextInterface = {
    blog: Blog;
    pageType: PageType;
    post: Post | null;
    posts: Array<Post>;
    environment: EnvironmentType;
    template: Template;
    BlogComponent: BlogComponentType;
    BlogPostComponent: BlogPostComponentType;
};
export declare const WebthingContext: React.Context<WebthingContextInterface>;
