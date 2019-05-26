import BoldAsset1x from "@webthing/registry/assets/inlines/Bold.png";
import BoldAsset2x from "@webthing/registry/assets/inlines/Bold@2x.png";
import BoldAsset3x from "@webthing/registry/assets/inlines/Bold@3x.png";
import styled from "@emotion/styled";
import { CategoryType } from "@webthing/registry";

const BoldComponent = styled.strong`
  font-weight: 600;
  color: currentColor;
`;

export default {
  title: "Bold text",
  description: "B is for bold.",
  category: CategoryType.text,
  id: "@webthing/bold",
  screenshot: {
    "1x": BoldAsset1x,
    "2x": BoldAsset2x,
    "3x": BoldAsset3x
  },
  Component: BoldComponent
};
