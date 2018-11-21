import { createGlobalStyle } from "styled-components";

const BaseStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
     v2.0 | 20110126
     License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
  }
  body {
    background-color: #FFF;
    color: ${p => p.theme.colors.ui.grey[2]};
    font-family: ${p => p.theme.fonts.normal};
    font-size: ${p => p.theme.fontSizes[2]};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-weight: ${p => p.theme.fontWeights.normal};
    line-height: ${p => p.theme.lineHeights.default};
    -webkit-text-rendering: optimizeLegibility;
    text-rendering: optimizeLegibility;
  }
  #__next {
    height: 100vh;
  }
  a {
    transition: color ease .15s;
    color: ${p => p.theme.colors.brand.primary.lightBlue};

    &:hover {
      color: ${p => p.theme.colors.ui.lightBlue[1]};
    }
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }
  abbr {
    border-bottom: 1px dotted #ddd;
  }
  button {
    margin: 0;
    border: 0;
    outline: none;
    font-family: ${p => p.theme.fonts.normal};
    cursor: pointer;
  }
  img,
  svg {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
  sup {
    top: -0.5em;
  }
  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }
  th {
    font-weight: bold;
    text-align: -internal-center;
  }
  code,
  pre {
    font-family: ${p => p.theme.fonts.mono};
  }
  code {
    padding: 2px 4px;
    font-size: 90%;
    color: #4a5860;
    background-color: #f2f5f7;
    border-radius: 3px;
  }
  pre {
    display: block;
    padding: 16px;
    margin: 0 0 24px;
    font-size: 14px;
    line-height: 24px;
    color: #4a5860;
    word-break: break-all;
    word-wrap: break-word;
    background-color: ${p => p.theme.colors.ui.grey[9]};
    border-radius: 3px;

    code {
      padding: 0;
      font-size: inherit;
      color: inherit;
      white-space: pre-wrap;
      background-color: transparent;
      border-radius: 0;
    }
  }
  @font-face {
    font-family: 'Averta';
    src: url('../static/fonts/TW-Averta-Regular.eot');
    src: url('../static/fonts/TW-Averta-Regular.eot?#iefix') format('embedded-opentype'),
         url('../static/fonts/TW-Averta-Regular.woff2') format('woff2'),
         url('../static/fonts/TW-Averta-Regular.woff') format('woff'),
         url('../static/fonts/TW-Averta-Regular.ttf') format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Averta';
    src: url('../static/fonts/TW-Averta-Semibold.eot');
    src: url('../static/fonts/TW-Averta-Semibold.eot?#iefix') format('embedded-opentype'),
         url('../static/fonts/TW-Averta-Semibold.woff2') format('woff2'),
         url('../static/fonts/TW-Averta-Semibold.woff') format('woff'),
         url('../static/fonts/TW-Averta-Semibold.ttf') format('truetype');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Averta';
    src: url('../static/fonts/TW-Averta-Bold.eot');
    src: url('../static/fonts/TW-Averta-Bold.eot?#iefix') format('embedded-opentype'),
         url('../static/fonts/TW-Averta-Bold.woff2') format('woff2'),
         url('../static/fonts/TW-Averta-Bold.woff') format('woff'),
         url('../static/fonts/TW-Averta-Bold.ttf') format('truetype');
    font-weight: 800;
  }
`;

export default BaseStyles
