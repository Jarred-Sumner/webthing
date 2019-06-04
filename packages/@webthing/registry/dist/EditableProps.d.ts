import tinycolor from "tinycolor2";
declare type ImageSource = string;
export declare enum EditablePropType {
    enum = "enum",
    color = "color",
    url = "url"
}
declare type EditablePropEnumValue = {
    label: string;
    value: string;
    icon?: ImageSource;
};
export declare type EditableProp = {
    type: EditablePropType;
    label?: string;
    icon?: ImageSource;
    required: boolean;
};
declare type EditablePropRawEnumValue = string | EditablePropEnumValue;
export declare type EditableEnumProp = EditableProp & {
    type: EditablePropType.enum;
    values: Array<EditablePropEnumValue>;
};
export declare type EditableURLProp = EditableProp & {
    type: EditablePropType.url;
};
export declare type EditableColorProp = EditableProp & {
    type: EditablePropType.color;
    presets: Array<tinycolor.ColorInputWithoutInstance>;
};
export declare type EditablePropMap = {
    [propName: string]: EditableProp;
};
declare type EditablePropsOptions = {
    label?: string;
    required?: boolean;
    icon?: ImageSource;
};
declare type EditablePropsEnumOptions = EditablePropsOptions & {
    values?: Array<EditablePropRawEnumValue>;
};
declare type EditablePropsColorOptions = EditablePropsOptions & {
    presets?: Array<tinycolor.ColorInput>;
};
declare type EditablePropsURLOptions = EditablePropsOptions;
export declare class EditableProps {
    static enum(options: EditablePropsEnumOptions): EditableEnumProp;
    static color(options: EditablePropsColorOptions): EditableColorProp;
    static url(options: EditablePropsURLOptions): EditableURLProp;
}
export declare const requiredProps: (editingProps: EditablePropMap) => string[];
export declare const getDefaultEditingProp: (editingProps: EditablePropMap, values: Object) => string;
export {};
