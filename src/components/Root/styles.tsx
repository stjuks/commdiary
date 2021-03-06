import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  button,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: currentColor;
    font: inherit;
    vertical-align: baseline;
  }

  ${({ theme }) => `
    html {
      font-family: sans-serif;
      font-size: 16px;
    }

    body {
      margin: 0;
    }

    li {
      list-style-type: none;
    }

    select {
      border-radius: 0;
      background: transparent;
      border: none;
      overflow: hidden;
      color: currentColor;
      appearance: none;
    }

    a {
      text-decoration: none;
    }

    select:hover {
      cursor: pointer;
    }

    .ReactModal__Overlay.ReactModal__Overlay--after-open {
      background-color: rgba(0, 0, 0, 0.5) !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tooltip {
      position: relative;

      :hover:after {
        content: attr(data-tooltip);
        color: white;
        position: absolute;
        border-radius: 0.25rem;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
        top: calc(100% + 0.5rem);
        transform: translateX(-50%);
        left: 50%;
        background: rgba(0, 0, 0, .75);
      }
    }
  `}
`;
