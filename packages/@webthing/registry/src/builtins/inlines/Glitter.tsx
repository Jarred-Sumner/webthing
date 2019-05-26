import GlitterAsset1x from "@webthing/registry/assets/inlines/Glitter.png";
import GlitterAsset2x from "@webthing/registry/assets/inlines/Glitter@2x.png";
import GlitterAsset3x from "@webthing/registry/assets/inlines/Glitter@3x.png";
import styled from "@emotion/styled";
import { CategoryType } from "../../../registry";

const GlitterComponent = styled.span`
  background: linear-gradient(transparent, transparent),
    url(https://storage.googleapis.com/webthing-public/Glitter.gif) repeat 100px
      20px;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;

  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      display: inline-block;
    }
  }

  color: ${props => props.color || "pink"};
  letter-spacing: 1px;
  text-decoration: none;
`;

export const Glitter = {
  title: "Glitter text",
  description: "It gets everywhere.",
  category: CategoryType.text,
  id: "@webthing/glitter",
  screenshot: {
    "1x": GlitterAsset1x,
    "2x": GlitterAsset2x,
    "3x": GlitterAsset3x
  },
  Component: GlitterComponent
};

export default Glitter;
