import tinycolor from "tinycolor2";

type ImageSource = string;

export enum EditablePropType {
  enum = "enum",
  color = "color",
  url = "url"
}

type EditablePropEnumValue = {
  label: string;
  value: string;
  icon?: ImageSource;
};

export type EditableProp = {
  type: EditablePropType;
  label?: string;
  icon?: ImageSource;
  required: boolean;
};

type EditablePropRawEnumValue = string | EditablePropEnumValue;

export type EditableEnumProp = EditableProp & {
  type: EditablePropType.enum;
  values: Array<EditablePropEnumValue>;
};

export type EditableURLProp = EditableProp & {
  type: EditablePropType.url;
};

export type EditableColorProp = EditableProp & {
  type: EditablePropType.color;
  presets: Array<tinycolor.ColorInputWithoutInstance>;
};

export type EditablePropMap = { [propName: string]: EditableProp };

const normalizeEnumValues = (values: Array<EditablePropRawEnumValue>) => {
  return values.map(value => {
    if (typeof value === "string") {
      return {
        value,
        label: value
      };
    } else {
      return value;
    }
  });
};

type EditablePropsOptions = {
  label?: string;
  required?: boolean;
  icon?: ImageSource;
};

type EditablePropsEnumOptions = EditablePropsOptions & {
  values?: Array<EditablePropRawEnumValue>;
};

type EditablePropsColorOptions = EditablePropsOptions & {
  presets?: Array<tinycolor.ColorInput>;
};

type EditablePropsURLOptions = EditablePropsOptions;

export class EditableProps {
  static enum(options: EditablePropsEnumOptions): EditableEnumProp {
    const { values = [], label, required, icon } = options;

    return {
      type: EditablePropType.enum,
      label,
      required: required || false,
      icon,
      values: normalizeEnumValues(values || [])
    };
  }

  static color(options: EditablePropsColorOptions): EditableColorProp {
    const { presets = [], label, required, icon } = options;

    return {
      type: EditablePropType.color,
      label,
      required: required || false,
      icon,
      presets: presets.map(preset => tinycolor(preset).toHexString())
    };
  }

  static url(options: EditablePropsURLOptions): EditableURLProp {
    const { label, required, icon } = options;

    return {
      type: EditablePropType.url,
      icon,
      required: required || false,
      label
    };
  }
}

export const requiredProps = (editingProps: EditablePropMap) =>
  Object.entries(editingProps)
    .filter(([_key, prop]) => prop.required)
    .map(([key, _prop]) => key);

export const getDefaultEditingProp = (
  editingProps: EditablePropMap,
  values: Object
) => {
  const _required = requiredProps(editingProps);

  return _required.find(key => !values[key]);
};
