import styled from "@emotion/styled";

export const BlockQuote = styled.blockquote`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1em;
  line-height: 1.8;
  border-left: 4px solid var(--text-color);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  padding-left: var(--offset-normal);
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  word-wrap: break-word;
  font-family: var(--headings-font);

  & + & {
    border-bottom-left-radius: 0;
  }
`;
