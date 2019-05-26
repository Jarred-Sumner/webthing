import CodeAsset1x from "../../assets/inlines/InlineCode.png";
import CodeAsset2x from "../../assets/inlines/InlineCode@2x.png";
import CodeAsset3x from "../../assets/inlines/InlineCode@3x.png";
import styled from "@emotion/styled";
import { CategoryType } from "../../";

const InlineCodeComponent = styled.span`
  background-color: #eee;
  border-radius: 1px;
  font-family: var(--monospace-font);
  font-weight: 500;
  color: inherit;
  backface-visibility: hidden;
`;

export const Code = {
  title: "Code",
  description: "A small amount of code next to text.",
  category: CategoryType.text,
  id: "@webthing/inline-code",
  screenshot: {
    "1x": CodeAsset1x,
    "2x": CodeAsset2x,
    "3x": CodeAsset3x
  },
  Component: InlineCodeComponent
};

export default Code;
