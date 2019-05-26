import * as React from "react";
import { Blog, BlogComponentType, BlogPostComponentType, WebthingContextInterface, EnvironmentType, PageType, Post, Template } from "./WebthingContext";
interface Props {
    blog: Blog;
    posts?: Array<Post>;
    post: Post;
    pageType: PageType;
    environment: EnvironmentType;
    template: Template;
    header?: React.ReactNode;
    children: React.ReactNode;
    BlogComponent: BlogComponentType;
    BlogPostComponent: BlogPostComponentType;
}
export declare class WebthingProvider extends React.Component<Props, WebthingContextInterface> {
    state: WebthingContextInterface;
    static defaultProps: {
        posts: Array<Post>;
        post: Post | null;
    };
    constructor(props: Props);
    static getDerivedStateFromProps(props: Props, state: WebthingContextInterface): Partial<WebthingContextInterface>;
    render(): JSX.Element;
}
export {};
