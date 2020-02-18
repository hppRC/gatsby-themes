import React from 'react';

import { css, Global } from '@emotion/core';

export default () => (
  <Global
    styles={css`
      /*!
      * ress.css • v2.0.1
      * MIT License
      * github.com/filipelinhares/ress
      */
      /* # =================================================================
      # Global selectors
      # ================================================================= */
      html {
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%; /* Prevent adjustments of font size after orientation changes in iOS */
        word-break: break-word;
        -moz-tab-size: 4;
        tab-size: 4;
      }

      *,
      ::before,
      ::after {
        box-sizing: inherit;
        background-repeat: no-repeat;
      }

      ::before,
      ::after {
        text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
        vertical-align: inherit;
      }

      * {
        padding: 0;
        margin: 0;
      }

      /* # =================================================================
      # General elements
      # ================================================================= */

      hr {
        height: 0; /* Add the correct box sizing in Firefox */
        overflow: visible; /* Show the overflow in Edge and IE */
      }

      details,
      main {
        display: block;
      }

      summary {
        display: list-item; /* Add the correct display in all browsers */
      }

      small {
        font-size: 80%;
      }

      [hidden] {
        display: none; /* Add the correct display in IE */
      }

      abbr[title] {
        /* Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari */
        text-decoration: underline;
        text-decoration: underline dotted;
        border-bottom: none; /* Remove the bottom border in Chrome 57 */
      }

      a {
        text-decoration: none;
        background-color: transparent; /* Remove the gray background on active links in IE 10 */
      }

      a:active,
      a:hover {
        outline-width: 0; /* Remove the outline when hovering in all browsers */
      }

      code,
      kbd,
      pre,
      samp {
        font-family: monospace; /* Specify the font family of code elements */
      }

      pre {
        font-size: 1em;
      }

      b,
      strong {
        font-weight: bolder; /* Add the correct font weight in Chrome, Edge, and Safari */
      }

      /* https://gist.github.com/unruthless/413930 */
      sub,
      sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      /* # =================================================================
  # Forms
  # ================================================================= */

      input {
        border-radius: 0;
      }

      /* Replace pointer cursor in disabled elements */
      [disabled] {
        cursor: default;
      }

      [type='number']::-webkit-inner-spin-button,
      [type='number']::-webkit-outer-spin-button {
        height: auto; /* Correct the cursor style of increment and decrement buttons in Chrome */
      }

      [type='search'] {
        -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */
        outline-offset: -2px; /* Correct the outline style in Safari */
      }

      [type='search']::-webkit-search-decoration {
        -webkit-appearance: none; /* Remove the inner padding in Chrome and Safari on macOS */
      }

      textarea {
        overflow: auto; /* Internet Explorer 11+ */
        resize: vertical; /* Specify textarea resizability */
      }

      li {
        list-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font: inherit; /* Specify font inheritance of form elements */
      }

      optgroup {
        font-weight: bold; /* Restore the font weight unset by the previous rule */
      }

      button {
        overflow: visible;
      }

      button,
      select {
        text-transform: none; /* Firefox 40+, Internet Explorer 11- */
      }

      /* Apply cursor pointer to button elements */
      button,
      [type='button'],
      [type='reset'],
      [type='submit'],
      [role='button'] {
        cursor: pointer;
      }

      button,
      html [type='button'],
      [type='reset'],
      [type='submit'] {
        -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */
      }

      /* Remove the default button styling in all browsers */
      button,
      input,
      select,
      textarea {
        background-color: transparent;
        border-style: none;
      }

      /* Style select like a standard input */
      select {
        -moz-appearance: none; /* Firefox 36+ */
        -webkit-appearance: none; /* Chrome 41+ */
      }

      select::-ms-expand {
        display: none; /* Internet Explorer 11+ */
      }

      select::-ms-value {
        color: currentColor; /* Internet Explorer 11+ */
      }

      legend {
        display: table;
        max-width: 100%;
        color: inherit;
        white-space: normal;
        border: 0;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button; /* Correct the inability to style clickable types in iOS and Safari */
        font: inherit;
      }

      /* Remove inner padding and border in Firefox 4+ */
      button::-moz-focus-inner,
      [type='button']::-moz-focus-inner,
      [type='reset']::-moz-focus-inner,
      [type='submit']::-moz-focus-inner {
        padding: 0;
        border-style: none;
      }

      /* Replace focus style removed in the border reset above */
      button:-moz-focusring,
      [type='button']::-moz-focus-inner,
      [type='reset']::-moz-focus-inner,
      [type='submit']::-moz-focus-inner {
        outline: 1px dotted ButtonText;
      }

      /* # =================================================================
      # Specify media element style
      # ================================================================= */

      img {
        border-style: none;
      }

      /* Add the correct vertical alignment in Chrome, Firefox, and Opera */
      progress {
        vertical-align: baseline;
      }

      svg:not([fill]) {
        fill: currentColor;
      }

      /* # =================================================================
      # Accessibility
      # ================================================================= */

      /* Hide content from screens but not screenreaders */
      @media screen {
        [hidden~='screen'] {
          display: inherit;
        }
        [hidden~='screen']:not(:active):not(:focus):not(:target) {
          position: absolute !important;
          clip: rect(0 0 0 0) !important;
        }
      }

      /* Specify the progress cursor of updating elements */
      [aria-busy='true'] {
        cursor: progress;
      }

      /* Specify the pointer cursor of trigger elements */
      [aria-controls] {
        cursor: pointer;
      }

      /* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */
      [aria-disabled] {
        cursor: default;
      }
    `}
  />
);
