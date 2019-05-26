// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in {{packageJSPath}}
import React from "react";
import { css } from "@emotion/core";
import tinycolor from "tinycolor2"; // This is a popular color library

// This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.
export default ({ children, background, ...otherProps }) => (
  <div
    {...otherProps}
    // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css={css`
      background-color: ${background};
      /* The text color should be readable on any background you choose */
      /* So we check if the background is dark and, when it is, we make the text color light */
      color: ${tinycolor(background).isDark()
        ? "var(--color-white)"
        : "var(--color-black)"};

      font-size: 24px;
      text-align: center;
      font-weight: 500;
      width: 100%;
      display: block;

      padding-top: var(--offset-normal);
      padding-bottom: var(--offset-normal);
      font-family: var(--headings-font);
    `}
  >
    {/* Don't forget to render children! If you forget, typing in your component won't work */}
    {children}
  </div>
);

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦{{packageJSPath}}
