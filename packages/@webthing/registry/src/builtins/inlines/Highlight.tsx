import styled from "@emotion/styled";
import HighlightAsset1x from "@webthing/registry/assets/inlines/Highlight.png";
import HighlightAsset2x from "@webthing/registry/assets/inlines/Highlight@2x.png";
import HighlightAsset3x from "@webthing/registry/assets/inlines/Highlight@3x.png";
import { EditableProps } from "../../EditableProps";
import { CategoryType } from "../../../registry";
import tinycolor from "tinycolor2";

const PRESET_COLORS = {
  green: "#99ffcc",
  pink: "#ffccff",
  yellow: "#ffffcc"
};

const HighlightComponent = styled.span`
  border-radius: 5px;
  padding-left: 0;
  padding-right: 0;
  transition: background-color 0.1s linear;

  background-color: ${props => props.color};
  color: ${props => (tinycolor(props.color).isDark() ? "white" : "#333")};
`;

export const Highlight = {
  title: "Highlight text",
  description: "Why bold when you can highlight?",
  category: CategoryType.text,
  id: "@webthing/highlight",
  screenshot: {
    "1x": HighlightAsset1x,
    "2x": HighlightAsset2x,
    "3x": HighlightAsset3x
  },
  editableProps: {
    color: EditableProps.color({
      label: "Color",
      presets: Object.values(PRESET_COLORS)
    })
  },
  defaultProps: {
    color: PRESET_COLORS.green
  },
  Component: HighlightComponent
};

export default Highlight;
