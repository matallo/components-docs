import styled, { createGlobalStyle } from "styled-components";
import {H2Styles, H3Styles, H4Styles} from '../../src/Headings'

// COPIED FROM BOOTSTRAP.CSS, DON'T EDIT

const MarkdownStyles = createGlobalStyle`
  .markdown-body {
    // BODY TEXT
    p {
      margin-bottom: ${p => `${p.theme.space[4]}px`};
    }
    strong {
      font-weight: ${p => p.theme.fontWeights.bold};
      color: ${p => p.theme.colors.brand.primary.navy};
    }
    .lead {
      margin-bottom: ${p => `${p.theme.space[4]}px`};
      font-size: 18px;
      font-weight: 300;
      line-height: 32px;
    }
    // LINKS
    a {
      font-weight: ${p => p.theme.fontWeights.bold};
    }
    // HEADINGS
    h1 {
      ${H2Styles}
      margin-bottom: 8px;
    }
    h2 {
      ${H3Styles}
      margin-bottom: 4px;
    }
    h3 {
      ${H4Styles}
      margin-bottom: 2px;
    }
    // LISTS
    ul,
    ol {
      padding-left: ${p => `${p.theme.space[5]}px`};
      margin-top: 0;
      margin-bottom: ${p => `${p.theme.space[4]}px`};
      ul,
      ol {
        margin-bottom: 0;
      }
    }
    ul {
      list-style-type: disc;
    }
    ol {
      list-style-type: decimal;
    }
    // TABLES
    table {
      display: table;
      width: 100%;
      max-width: 100%;
      max-width: 100%;
      margin-bottom: 24px;
      border-collapse: separate;
      background-color: #fff;
      border-spacing: 0;
    }
    thead {
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
      font-size: 14px;
      color: #2e4369;
    }
    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;
      font-size: 14px;
    }
    tr {
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;

      &:first-child {
        th {
            border-top: 0;
        }
      }
    }
    td,
    th {
      display: table-cell;
      vertical-align: inherit;
      padding: 24px 16px;
      line-height: 24px;
      border-top: 1px solid #f2f5f7;
      vertical-align: top;
    }
    // CODE
    pre {
      max-height: 300px;
      overflow-y: scroll;
    }
  }
`;

export default MarkdownStyles
