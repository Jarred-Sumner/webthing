import * as React from "react";
import {
  ComponentManifest,
  CategoryType,
  ImageURLShape,
  ImageURLInputShape
} from "../registry";
import { isValidElementType } from "react-is";
import {
  fromPairs,
  isArrayLike,
  last,
  isUndefined,
  isNull,
  isEqual,
  isEmpty,
  merge
} from "lodash";
import { Template } from "../components/WebthingContext";

const REQUIRED_KEYS = ["title", "src", "category"];

const normalizeImageURL = (input: ImageURLInputShape): ImageURLShape | null => {
  if (typeof input === "string") {
    return {
      "1x": input,
      "2x": input,
      "3x": input
    };
  } else if (isArrayLike(input)) {
    const _input = [2, 1, 0].map(index => {
      return last(
        input.slice(0, index).filter(row => !isNull(row) && !isUndefined(row))
      );
    });

    return {
      "1x": _input[0],
      "2x": _input[2],
      "3x": _input[3]
    };
  } else if (
    typeof input === "object" &&
    input !== null &&
    (input["1x"] || input["2x"] || input["3x"])
  ) {
    return {
      "1x": input["1x"],
      "2x": input["2x"],
      "3x": input["3x"]
    };
  } else {
    return {
      "1x": null,
      "2x": null,
      "3x": null
    };
  }
};

export type ComponentManifestMap = { [key: string]: ComponentManifest };
type SchemaValue = {
  isVoid?: boolean;
};

type MiniSlateSchema = {
  blocks: { [id: string]: SchemaValue };
  inlines: { [id: string]: SchemaValue };
};

type OnChangeFunction = (components: ComponentManifestMap) => void;

export type RegistryContextType = {
  Inlines: ComponentManifestMap;
  Blocks: ComponentManifestMap;
  schema: MiniSlateSchema;
  onChangeBlocks: OnChangeFunction;
  onChangeInlines: OnChangeFunction;
  onChangeDevelopmentComponents: (
    blocks: ComponentManifestMap,
    inlines: ComponentManifestMap
  ) => void;
  onInsert: (
    blocks: ComponentManifestMap,
    inlines: ComponentManifestMap
  ) => void;
};

export const RegistryContext = React.createContext<RegistryContextType>({
  Inlines: {},
  Blocks: {},
  schema: {
    blocks: {},
    inlines: {}
  },
  onChangeDevelopmentComponents: (
    _blocks: ComponentManifestMap,
    _inlines: ComponentManifestMap
  ) => {},
  onChangeBlocks: (_blocks: ComponentManifestMap) => {},
  onChangeInlines: (_inlines: ComponentManifestMap) => {},
  onInsert: (
    _blocks: ComponentManifestMap,
    _inlines: ComponentManifestMap
  ) => {}
});

type Props = {
  initialInlines: ComponentManifestMap;
  initialBlocks: ComponentManifestMap;
  children: React.ReactChildren;
  template: Template;
};

type StateWithoutContext = {
  blocks: ComponentManifestMap;
  inlines: ComponentManifestMap;
  schema: MiniSlateSchema;
};

type State = StateWithoutContext & {
  contextValue: RegistryContextType;
};

export const isVoid = (manifest: ComponentManifest) =>
  !!manifest.isVoid || manifest.category === CategoryType.embed;

let _lastSchema;
const computeSchema = (
  blocks: ComponentManifestMap,
  inlines: ComponentManifestMap
): MiniSlateSchema => {
  const schema: MiniSlateSchema = {
    blocks: {},
    inlines: {}
  };

  Object.keys(blocks).forEach(blockID => {
    schema.blocks[blockID] = {
      isVoid: isVoid(blocks[blockID]) ? true : undefined
    };
  });

  Object.keys(inlines).forEach(inlineID => {
    schema.inlines[inlineID] = {
      isVoid: isVoid(inlines[inlineID]) ? true : undefined
    };
  });

  if (isEqual(_lastSchema, schema)) {
    return _lastSchema;
  } else {
    _lastSchema = schema;
    return schema;
  }
};

const addAliases = (
  inlines: ComponentManifestMap,
  blocks: ComponentManifestMap,
  template: Template
) => {
  [
    [inlines, template.Components.Inlines],
    [blocks, template.Components.Blocks]
  ].forEach(([manifestMap, templateMap]) => {
    const needsMerge = Object.keys(templateMap).filter(key => manifestMap[key]);

    const needsAdded = Object.keys(templateMap).filter(
      key => !manifestMap[key]
    );

    needsAdded.forEach(key => {
      manifestMap[key] = templateMap[key];
    });

    Object.keys(manifestMap)
      .filter(key => {
        return key.includes("@codeblog") || key.includes("@webthing");
      })
      .forEach(key => {
        const webthingAlias = key.replace("@codeblog", "@webthing");
        const codeblogAlias = key.replace("@webthing", "@codeblog");

        if (
          manifestMap[webthingAlias] &&
          manifestMap[codeblogAlias] &&
          manifestMap[webthingAlias] === manifestMap[codeblogAlias]
        ) {
          return;
        }

        if (manifestMap[webthingAlias]) {
          manifestMap[key] = manifestMap[webthingAlias];
          manifestMap[codeblogAlias] = manifestMap[webthingAlias];
        } else if (manifestMap[codeblogAlias]) {
          manifestMap[webthingAlias] = manifestMap[key];
          manifestMap[codeblogAlias] = manifestMap[key];
        }
      });

    needsMerge.forEach(mergeKey => {
      let merged = manifestMap[mergeKey];

      if (isValidElementType(templateMap[mergeKey])) {
        merged.Component = templateMap[mergeKey]; // @ts-ignore
      } else {
        merge(merged, templateMap[mergeKey]);
      }
    });
  });
};

const makeContextValue = (
  { inlines: Inlines, blocks: Blocks, schema }: StateWithoutContext,
  onChangeBlocks: OnChangeFunction,
  onChangeInlines: OnChangeFunction,
  onInsert: (
    blocks: ComponentManifestMap,
    inlines: ComponentManifestMap
  ) => void,
  onChangeDevelopmentComponents: (
    _blocks: ComponentManifestMap,
    _inlines: ComponentManifestMap
  ) => void,
  template: Template
): RegistryContextType => {
  addAliases(Inlines, Blocks, template);
  console.log({ Inlines, Blocks });

  return {
    Inlines,
    Blocks,
    schema,
    onChangeBlocks,
    onChangeInlines,
    onInsert,
    onChangeDevelopmentComponents
  };
};

export function normalizeBlock({
  title,
  description,
  screenshot,
  category,
  placeholder,
  author,
  src,
  isRemote,
  isVoid,
  multiLine = false,
  Component,
  isDevelopment,
  EditorComponent: _EditorComponent,
  editableProps,
  defaultProps = {},
  id
}: ComponentManifest) {
  const EditorComponent = _EditorComponent || Component;

  if (defaultProps && Component) {
    Component.defaultProps = {
      ...defaultProps,
      ...(Component.defaultProps || {})
    };

    EditorComponent.defaultProps = {
      ...defaultProps,
      ...(Component.defaultProps || {})
    };
  }

  return {
    title,
    description,
    category,
    src,
    author,
    screenshot: normalizeImageURL(screenshot),
    isRemote,
    multiLine: multiLine || false,
    isDevelopment,
    isVoid: !!(
      [CategoryType.embed, CategoryType.media].includes(category) || isVoid
    ),
    placeholder,
    Component,
    EditorComponent,
    editableProps,
    defaultProps: { ...(defaultProps || {}), data: {} },
    id
  };
}

export function normalizeInline({
  title,
  description,
  screenshot,
  placeholder,
  category,
  src,
  isRemote,
  isDevelopment,
  author,
  Component,
  EditorComponent: _EditorComponent,
  editableProps = {},
  defaultProps = {},
  id
}: ComponentManifest) {
  const EditorComponent = _EditorComponent || Component;

  if (defaultProps && Component) {
    Component.defaultProps = {
      ...defaultProps,
      ...(Component.defaultProps || {})
    };

    EditorComponent.defaultProps = {
      ...defaultProps,
      ...(Component.defaultProps || {})
    };
  }

  return {
    title,
    description,
    screenshot: normalizeImageURL(screenshot),
    isDevelopment,
    placeholder,
    Component,
    author,
    src,
    isRemote,
    EditorComponent,
    category,
    id,
    editableProps,
    defaultProps: { ...(defaultProps || {}), data: {} }
  };
}

export class RegistryProvider extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    const blocks = {
      ...props.initialBlocks
    };
    const inlines = {
      ...props.initialInlines
    };

    const stateWithoutContext = {
      blocks,
      inlines,
      schema: computeSchema(blocks, inlines)
    };

    this.state = Object.assign(stateWithoutContext, {
      contextValue: makeContextValue(
        stateWithoutContext,
        this.handleChangeBlocks,
        this.handleChangeInlines,
        this.handleInsert,
        this.handleChangeDevelopmentComponents,
        this.props.template
      )
    });
  }

  handleChangeBlocks = (blocks: ComponentManifestMap) => {
    const stateWithoutContext = {
      blocks: { ...blocks },
      inlines: this.state.inlines,
      schema: computeSchema(blocks, this.state.inlines)
    };

    this.setState(
      Object.assign(stateWithoutContext, {
        contextValue: makeContextValue(
          stateWithoutContext,
          this.handleChangeBlocks,
          this.handleChangeInlines,
          this.handleInsert,
          this.handleChangeDevelopmentComponents,
          this.props.template
        )
      })
    );
  };

  handleChangeDevelopmentComponents = (
    blocks: ComponentManifestMap,
    inlines: ComponentManifestMap
  ) => {
    const blocksWithoutDevelopment = Object.entries(this.state.blocks).filter(
      ([_key, block]) => !block.isDevelopment
    );

    const inlinesWithoutDevelopment = Object.entries(this.state.inlines).filter(
      ([_key, inline]) => !inline.isDevelopment
    );

    const _inlines = fromPairs([
      ...inlinesWithoutDevelopment,
      ...Object.entries(inlines)
        .filter(([_, inline]) => {
          return REQUIRED_KEYS.every(key => !isEmpty(inline[key]));
        })
        .map(([key, inline]) => [key, normalizeInline(inline)])
    ]);
    const _blocks = fromPairs([
      ...blocksWithoutDevelopment,
      ...Object.entries(blocks)
        .filter(([_, block]) => {
          return REQUIRED_KEYS.every(key => !isEmpty(block[key]));
        })
        .map(([key, block]) => [key, normalizeBlock(block)])
    ]);

    const stateWithoutContext = {
      inlines: _inlines,
      blocks: _blocks,
      schema: computeSchema(_blocks, _inlines)
    };

    this.setState(
      Object.assign(stateWithoutContext, {
        contextValue: makeContextValue(
          stateWithoutContext,
          this.handleChangeBlocks,
          this.handleChangeInlines,
          this.handleInsert,
          this.handleChangeDevelopmentComponents,
          this.props.template
        )
      })
    );
  };

  handleInsert = (
    _blocks: ComponentManifestMap,
    _inlines: ComponentManifestMap
  ) => {
    const inlines = fromPairs(
      Object.entries(_inlines)
        .filter(([_, inline]) => {
          return REQUIRED_KEYS.every(key => !isEmpty(inline[key]));
        })
        .map(([key, inline]) => [key, normalizeInline(inline)])
    );

    const blocks = fromPairs(
      Object.entries(_blocks)
        .filter(([_, block]) => {
          return REQUIRED_KEYS.every(key => !isEmpty(block[key]));
        })
        .map(([key, block]) => [key, normalizeBlock(block)])
    );

    const __inlines = {
      ...this.state.inlines,
      ...inlines
    };

    const __blocks = {
      ...this.state.blocks,
      ...blocks
    };

    const stateWithoutContext = {
      inlines: __inlines,
      blocks: __blocks,
      schema: computeSchema(__blocks, __inlines)
    };

    this.setState(
      Object.assign(stateWithoutContext, {
        contextValue: makeContextValue(
          stateWithoutContext,
          this.handleChangeBlocks,
          this.handleChangeInlines,
          this.handleInsert,
          this.handleChangeDevelopmentComponents,
          this.props.template
        )
      })
    );
  };

  handleChangeInlines = (inlines: ComponentManifestMap) => {
    const stateWithoutContext = {
      inlines: { ...inlines },
      blocks: this.state.blocks,
      schema: computeSchema(this.state.blocks, inlines)
    };

    this.setState(
      Object.assign(stateWithoutContext, {
        contextValue: makeContextValue(
          stateWithoutContext,
          this.handleChangeBlocks,
          this.handleChangeInlines,
          this.handleInsert,
          this.handleChangeDevelopmentComponents,
          this.props.template
        )
      })
    );
  };

  render() {
    return (
      <RegistryContext.Provider value={this.state.contextValue}>
        {this.props.children}
      </RegistryContext.Provider>
    );
  }
}
