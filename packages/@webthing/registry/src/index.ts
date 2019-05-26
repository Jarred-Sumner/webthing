import { EditablePropMap } from "./EditableProps";

export enum BlockTypes {
  title = "@webthing/title",
  header = "@webthing/header",
  paragraph = "@webthing/paragraph",
  blockquote = "@webthing/blockquote"
}

export enum InlineTypes {
  bold = "@webthing/bold",
  link = "@webthing/link"
}

export type ComponentTypes = BlockTypes & InlineTypes;

export enum CategoryType {
  inline = "text",
  block = "block",
  header = "header",
  text = "text",
  media = "media",
  embed = "embed"
}

export enum TemplateCategoryType {
  blog = "blog",
  card = "card",
  blank = "blank"
}

// This will be fancier later.
export type BackgroundProp = string;
export type ColorProp = string;
export type AlignProp = "left" | "right" | "center";

export { EditableProps } from "./EditableProps";

export type WebthingPackageJSON = {
  name: string;
  version: string;
  license: "MIT";
  webthing: {
    title: string; // This appears in the search results
    description: string; // This appears in the search results
    screenshot?: string; // This appears in the search results

    editableProps?: EditablePropMap;
    defaultProps?: { [key: string]: string };
  };
  dependencies: { [key: string]: string };
};

export type ImageURLInputShape =
  | string
  | Array<string>
  | {
      ["1x"]?: string | null;
      ["2x"]?: string | null;
      ["3x"]?: string | null;
    };

export type ImageURLShape = {
  ["1x"]: string;
  ["2x"]: string;
  ["3x"]: string;
};

export type ComponentManifest = {
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
  defaultProps?: { [key: string]: string | Object };
  id: string;
};

export type TemplateManifest = {
  id: string;
  title: string;
  author: string;
  description: string;
  src: string | null;
  category: TemplateCategoryType;

  screenshot: ImageURLShape;
  isRemote: boolean;

  isDevelopment?: boolean;
  Components: { [from in ComponentTypes]: React.ElementType<any> };
};

export type TemplateManifestInput = {};
export {
  RegistryContext,
  RegistryProvider,
  ComponentManifestMap,
  RegistryContextType,
  normalizeBlock,
  isVoid
} from "./RegistryContext";
