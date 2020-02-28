import React from 'react';

import { css, Global } from '@emotion/core';

import { ColorModeContainer } from '../store';

const GlobalCSS = () => {
  const { mode } = ColorModeContainer.useContainer();
  return (
    <Global
      styles={css`
        /* reffer to this article: https://qiita.com/RinoTsuka/items/b30e03ce10aa38ac2a10#_reference-aab4ed4b3d365dfead76 */
        html {
          font-size: 62.5%;
          @font-face {
            font-family: 'Original Yu Gothic';
            src: local('Yu Gothic Medium');
            font-weight: 100;
          }
          @font-face {
            font-family: 'Original Yu Gothic';
            src: local('Yu Gothic Medium');
            font-weight: 200;
          }
          @font-face {
            font-family: 'Original Yu Gothic';
            src: local('Yu Gothic Medium');
            font-weight: 300;
          }
          @font-face {
            font-family: 'Original Yu Gothic';
            src: local('Yu Gothic Medium');
            font-weight: 400;
          }
          @font-face {
            font-family: 'Original Yu Gothic';
            src: local('Yu Gothic Bold');
            font-weight: bold;
          }

          body {
            overflow-x: hidden;

            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans', 'Noto Sans CJK JP',
              'Original Yu Gothic', 'Yu Gothic', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
              'Noto Sans Emoji';
            font-size: 1.6rem;
            background-color: ${mode ? '#ffffff' : '#09090f'};
            /*overscroll-behavior-y: none;*/
            transition: background-color 0.15s;

            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }

        #gatsby-focus-wrapper {
          display: flex;
          flex-flow: column;
          min-height: 100vh;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          width: 100%;
          font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;

          -webkit-hyphens: none;
          -moz-hyphens: none;
          -ms-hyphens: none;
          hyphens: none;
          line-height: 1.5;
          color: #c5c8c6;
          text-align: left;
          text-shadow: 0 1px rgba(0, 0, 0, 0.3);
          word-break: normal;

          -moz-tab-size: 4;
          -o-tab-size: 4;
          tab-size: 4;
          white-space: pre;
          word-spacing: normal;
          direction: ltr;
        }

        /* Code blocks */
        pre[class*='language-'] {
          width: 100%;
          overflow: auto;
          border-radius: 0.3em;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          width: 100%;
          background: #1d1f21;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          width: 100%;
          padding: 0.1em;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: #7c7c7c;
        }

        .token.punctuation {
          color: #c5c8c6;
        }

        .namespace {
          opacity: 0.7;
        }

        .token.property,
        .token.keyword,
        .token.tag {
          color: #96cbfe;
        }

        .token.class-name {
          color: #ffffb6;
          text-decoration: underline;
        }

        .token.boolean,
        .token.constant {
          color: #99cc99;
        }

        .token.symbol,
        .token.deleted {
          color: #f92672;
        }

        .token.number {
          color: #ff73fd;
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.inserted {
          color: #a8ff60;
        }

        .token.variable {
          color: #c6c5fe;
        }

        .token.operator {
          color: #ededed;
        }

        .token.entity {
          color: #ffffb6;
          cursor: help;
        }

        .token.url {
          color: #96cbfe;
        }

        .language-css .token.string,
        .style .token.string {
          color: #87c38a;
        }

        .token.atrule,
        .token.attr-value {
          color: #f9ee98;
        }

        .token.function {
          color: #dad085;
        }

        .token.regex {
          color: #e9c062;
        }

        .token.important {
          color: #fd971f;
        }

        .token.important,
        .token.bold {
          font-weight: bold;
        }

        .token.italic {
          font-style: italic;
        }

        /* thanks to this: https://qiita.com/Takumon/items/da8347f81a9f021b637f */
        .gatsby-highlight-code-line {
          display: block;
          width: 100%;
          padding-right: 0em;
          padding-left: 0.8rem;
          background-color: #1f1f30;
          border-left: 0.2em solid #b0b7d6;
        }

        .gatsby-highlight {
          width: 100%;
          margin: 0;
          background-color: ${mode ? '#09090f' : '#131313'};
        }

        .gatsby-highlight pre[class*='language-'] {
          background-color: transparent;
        }

        .gatsby-highlight pre[class*='language-'].line-numbers {
          padding-left: 4rem;

          .line-numbers-rows {
            padding-left: 1em;
          }
        }

        .gatsby-code-title {
          display: inline-block;
          padding: 1rem 1.2rem 1rem 1.2rem;

          margin-top: 2rem;

          font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
          font-size: 1.4rem;
          line-height: 1;
          color: #fff;
          background-color: ${mode ? '#09090f' : '#131313'};
          border-radius: 3px 3px 0 0;
        }

        .katex {
          display: flex;
          justify-content: center;
          padding: 2rem 0;
          overflow: scroll;
          font-size: 3rem;
        }

        .katex-html {
          .base {
          }
        }

        @media screen and (max-width: 1100px) {
        }
        @media screen and (max-width: 768px) {
        }
        @media screen and (max-width: 480px) {
          .gatsby-highlight {
            font-size: 1.4rem;
          }
          .gatsby-code-title {
            padding: 1.25rem;
            margin: 0;
            margin-top: 2rem;
            font-size: 1.25rem;
            > pre {
              width: 10%;
            }
          }

          .katex-html {
            .base {
              padding: 0.5rem;
            }
          }
        }
        @media screen and (max-height: 430px) {
        }
      `}
    />
  );
};

export default GlobalCSS;
