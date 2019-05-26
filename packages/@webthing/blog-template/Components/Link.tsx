import styled from "@emotion/styled";
import LinkAsset1x from "@webthing/registry/assets/inlines/Link.png";
import LinkAsset2x from "@webthing/registry/assets/inlines/Link@2x.png";
import LinkAsset3x from "@webthing/registry/assets/inlines/Link@3x.png";
import LinkIconAsset2x from "@webthing/registry/assets/inlines/LinkIcon@2x.png";
import { EditableProps, CategoryType } from "@webthing/registry";

const LinkComponent = styled.a`
  color: ${props => props.color || "currentColor"};
  text-decoration: underline;
`;

export default {
  title: "Link",
  description: "Send readers to a different webpage",
  id: "@webthing-template/link",
  category: CategoryType.text,
  screenshot: {
    "1x": LinkAsset1x,
    "2x": LinkAsset2x,
    "3x": LinkAsset3x
  },
  Component: LinkComponent,
  editableProps: {
    href: EditableProps.url({
      required: true,
      label: "URL",
      icon: LinkIconAsset2x
    }),
    color: EditableProps.color({
      label: "Color",
      presets: ["var(--text-color)", "green", "orange", "purple", "pink"]
    })
  },
  defaultProps: {
    target: "_blank",
    color: "var(--text-color)"
  }
};
