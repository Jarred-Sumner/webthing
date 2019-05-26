import { css } from "@emotion/core";

const RedText = ({ children }) => (
  <span
    css={css`
      color: red;
    `}
  >
    {children}
  </span>
);

export default RedText;
