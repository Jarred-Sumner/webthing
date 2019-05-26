import * as React from "react";
import { ComponentManifest, CategoryType, ImageURLShape } from "./index";
import { Template } from "@webthing/core";
export declare type ComponentManifestMap = {
    [key: string]: ComponentManifest;
};
declare type SchemaValue = {
    isVoid?: boolean;
};
declare type MiniSlateSchema = {
    blocks: {
        [id: string]: SchemaValue;
    };
    inlines: {
        [id: string]: SchemaValue;
    };
};
declare type OnChangeFunction = (components: ComponentManifestMap) => void;
export declare type RegistryContextType = {
    Inlines: ComponentManifestMap;
    Blocks: ComponentManifestMap;
    schema: MiniSlateSchema;
    onChangeBlocks: OnChangeFunction;
    onChangeInlines: OnChangeFunction;
    onChangeDevelopmentComponents: (blocks: ComponentManifestMap, inlines: ComponentManifestMap) => void;
    onInsert: (blocks: ComponentManifestMap, inlines: ComponentManifestMap) => void;
};
export declare const RegistryContext: React.Context<RegistryContextType>;
declare type Props = {
    initialInlines: ComponentManifestMap;
    initialBlocks: ComponentManifestMap;
    children: React.ReactNode;
    template: Template;
};
declare type StateWithoutContext = {
    blocks: ComponentManifestMap;
    inlines: ComponentManifestMap;
    schema: MiniSlateSchema;
};
declare type State = StateWithoutContext & {
    contextValue: RegistryContextType;
};
export declare const isVoid: (manifest: ComponentManifest) => boolean;
export declare function normalizeBlock({ title, description, screenshot, category, placeholder, author, src, isRemote, isVoid, multiLine, Component, isDevelopment, EditorComponent: _EditorComponent, editableProps, defaultProps, id }: ComponentManifest): {
    title: string;
    description: string;
    category: CategoryType;
    src: string;
    author: string;
    screenshot: ImageURLShape;
    isRemote: boolean;
    multiLine: boolean;
    isDevelopment: boolean;
    isVoid: boolean;
    placeholder: string;
    Component: React.ComponentType<any>;
    EditorComponent: React.ComponentType<any>;
    editableProps: import("./EditableProps").EditablePropMap;
    defaultProps: {
        data: {};
    };
    id: string;
};
export declare function normalizeInline({ title, description, screenshot, placeholder, category, src, isRemote, isDevelopment, author, Component, EditorComponent: _EditorComponent, editableProps, defaultProps, id }: ComponentManifest): {
    title: string;
    description: string;
    screenshot: ImageURLShape;
    isDevelopment: boolean;
    placeholder: string;
    Component: React.ComponentType<any>;
    author: string;
    src: string;
    isRemote: boolean;
    EditorComponent: React.ComponentType<any>;
    category: CategoryType;
    id: string;
    editableProps: import("./EditableProps").EditablePropMap;
    defaultProps: {
        data: {};
    };
};
export declare class RegistryProvider extends React.PureComponent<Props, State> {
    constructor(props: Props);
    handleChangeBlocks: (blocks: ComponentManifestMap) => void;
    handleChangeDevelopmentComponents: (blocks: ComponentManifestMap, inlines: ComponentManifestMap) => void;
    handleInsert: (_blocks: ComponentManifestMap, _inlines: ComponentManifestMap) => void;
    handleChangeInlines: (inlines: ComponentManifestMap) => void;
    render(): JSX.Element;
}
export {};
