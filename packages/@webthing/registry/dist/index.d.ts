/// <reference types="react" />
import { EditablePropMap } from "./EditableProps";
export declare enum BlockTypes {
    title = "@webthing/title",
    header = "@webthing/header",
    paragraph = "@webthing/paragraph",
    blockquote = "@webthing/blockquote"
}
export declare enum InlineTypes {
    bold = "@webthing/bold",
    link = "@webthing/link"
}
export declare type ComponentTypes = BlockTypes & InlineTypes;
export declare enum CategoryType {
    inline = "text",
    block = "block",
    header = "header",
    text = "text",
    media = "media",
    embed = "embed"
}
export declare enum TemplateCategoryType {
    blog = "blog",
    card = "card",
    blank = "blank"
}
export declare type BackgroundProp = string;
export declare type ColorProp = string;
export declare type AlignProp = "left" | "right" | "center";
export { EditableProps } from "./EditableProps";
export declare type WebthingPackageJSON = {
    name: string;
    version: string;
    license: "MIT";
    webthing: {
        title: string;
        description: string;
        screenshot?: string;
        editableProps?: EditablePropMap;
        defaultProps?: {
            [key: string]: string;
        };
    };
    dependencies: {
        [key: string]: string;
    };
};
export declare type ImageURLInputShape = string | Array<string> | {
    ["1x"]?: string | null;
    ["2x"]?: string | null;
    ["3x"]?: string | null;
};
export declare type ImageURLShape = {
    ["1x"]: string;
    ["2x"]: string;
    ["3x"]: string;
};
export declare type ComponentManifest = {
    title: string;
    description: string;
    screenshot: ImageURLShape | null;
    author: string | null;
    category: CategoryType;
    placeholder: string | null;
    multiLine?: boolean;
    isDevelopment?: boolean;
    src: string | null;
    isRemote: boolean;
    isVoid?: boolean;
    Component: React.ComponentType<any> | null;
    EditorComponent: React.ComponentType<any> | null;
    editableProps?: EditablePropMap;
    defaultProps?: {
        [key: string]: string | Object;
    };
    id: string;
};
export declare type TemplateManifest = {
    id: string;
    title: string;
    author: string;
    description: string;
    src: string | null;
    category: TemplateCategoryType;
    screenshot: ImageURLShape;
    isRemote: boolean;
    isDevelopment?: boolean;
    Components: {
        [from in ComponentTypes]: React.ElementType<any>;
    };
};
export declare type TemplateManifestInput = {};
export { RegistryContext, RegistryProvider, ComponentManifestMap, RegistryContextType, normalizeBlock, isVoid } from "./RegistryContext";
