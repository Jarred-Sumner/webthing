import * as React from "react";
import { WebthingProvider } from "./components/Webthing";
import { BlogComponentType, BlogPostComponentType, WebthingContext, WebthingContextInterface, Post, Blog, EnvironmentType, PageType, Template } from "./components/WebthingContext";
export { Template };
declare type WebthingPostProps = WebthingContextInterface & {
    headTags?: [];
    template: Template;
    children: React.ReactNode;
};
export declare class WebthingError extends Error {
}
export declare const WebthingRoot: (props: WebthingPostProps) => JSX.Element;
export declare const WebthingPost: (props: WebthingPostProps) => JSX.Element;
export declare const WebthingIndexPage: (props: WebthingPostProps) => JSX.Element;
export declare const WebthingPostEditor: (props: WebthingPostProps) => JSX.Element;
export declare const Webthing: React.ExoticComponent<React.ConsumerProps<WebthingContextInterface>>;
export default Webthing;
export { WebthingContext, WebthingContext as CodeblogContext, WebthingContextInterface, Post, Blog, BlogPostComponentType, BlogComponentType, EnvironmentType, PageType, WebthingProvider };
