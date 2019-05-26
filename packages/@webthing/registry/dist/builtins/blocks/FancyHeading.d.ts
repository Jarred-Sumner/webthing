/// <reference types="react" />
import { CategoryType, BackgroundProp, ColorProp, AlignProp } from "../../";
declare type FancyHeadingProps = {
    background?: BackgroundProp;
    color?: ColorProp;
    align: AlignProp;
};
declare const _default: {
    title: string;
    description: string;
    category: CategoryType;
    id: string;
    screenshot: {
        "1x": any;
        "2x": any;
        "3x": any;
    };
    editableProps: {
        background: import("../../EditableProps").EditableColorProp;
    };
    defaultProps: {
        background: string;
    };
    Component: import("react").FunctionComponent<FancyHeadingProps>;
};
export default _default;
