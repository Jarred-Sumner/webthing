import styled from "@emotion/styled";
import BlogPostSubtitle from "../BlogPostSubtitle";
import { WebthingContext, Post, PageType, registry } from "@webthing/core";

const { AlignProp } = registry;

type TitleProps = {
  align?: AlignProp;
  pageType: PageType;
  children: React.ReactChildren;
  post?: Post;
  ref: React.Ref<HTMLElement>;
};

const H1: React.ComponentType<Partial<TitleProps>> = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.9em;
  line-height: 1.15;
  word-wrap: break-word;
  font-family: var(--headings-font);
  text-align: ${props => props.align || "left"};

  margin-block-start: 0.83em;
  margin-block-end: 0.83em;

  &:first-of-type {
    margin-block-start: 0;
  }
`;

export const H3: React.ComponentType<Partial<TitleProps>> = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.35;
  word-wrap: break-word;
  font-family: var(--headings-font);
  text-align: ${props => props.align || "left"};

  margin-block-start: var(--offset-big);
  margin-block-end: var(--offset-normal);
`;

const Header = styled.header`
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;

  h1 {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const EditorTitle = H1;

export function Title(props: Partial<TitleProps>) {
  const { pageType, post } = React.useContext(WebthingContext);

  if (pageType === "editor") {
    return <H1 {...props}>{props.children}</H1>;
  } else {
    return (
      <Header>
        <BlogPostSubtitle post={post} />

        <a href={post.url}>
          <H1 {...props}>{props.children}</H1>
        </a>
      </Header>
    );
  }
}
