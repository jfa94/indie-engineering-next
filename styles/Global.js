import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${props => props.theme.colors.siteBackground};
    color: ${props => props.theme.colors.defaultFont};
    line-height: 1.4rem;
    font-family: ${props => props.theme.fonts.site[0]}, "sans-serif";
    letter-spacing: 0.02rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.site[0]}, "sans-serif";
    font-weight: 900;
    color: ${props => props.theme.colors.headerFont};
  }

  body {
    background-color: ${props => props.theme.colors.siteBackground};
    margin: 0;
    padding: 0;
  }

  /*
   * Remove text-shadow in selection highlight:
   * https://twitter.com/miketaylr/status/12228805301
   *
   * Vendor-prefixed and regular ::selection selectors cannot be combined:
   * https://stackoverflow.com/a/16982510/7133471
   *
   * Customize the background color to match your design.
   */

  ::-moz-selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  ::selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  /*
   * A better looking default horizontal rule
   */

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1rem 0;
    padding: 0;
  }

  /*
   * Remove the gap between audio, canvas, iframes,
   * images, videos and the bottom of their containers:
   * https://github.com/h5bp/html5-boilerplate/issues/440
   */

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  /*
   * Remove default fieldset styles.
   */

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  /*
   * Allow only vertical resizing of textareas.
   */

  textarea {
    resize: vertical;
  }


  /*
   * Hide visually and from screen readers
   */

  .hidden,
  [hidden] {
    display: none !important;
  }

  /*
   * Hide only visually, but have it available for screen readers:
   * https://snook.ca/archives/html_and_css/hiding-content-for-accessibility
   *
   * 1. For long content, line feeds are not interpreted as spaces and small width
   *    causes content to wrap 1 word per line:
   *    https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
   */

  .sr-only {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    /* 1 */
  }

  /*
   * Extends the .sr-only class to allow the element
   * to be focusable when navigated to via the keyboard:
   * https://www.drupal.org/node/897638
   */

  .sr-only.focusable:active,
  .sr-only.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    white-space: inherit;
    width: auto;
  }

  /*
   * Hide visually and from screen readers, but maintain layout
   */

  .invisible {
    visibility: hidden;
  }

  /*
   * Clearfix: contain floats
   *
   * For modern browsers
   * 1. The space content is one way to avoid an Opera bug when the
   *    \`contenteditable\` attribute is included anywhere else in the document.
   *    Otherwise it causes space to appear at the top and bottom of elements
   *    that receive the \`clearfix\` class.
   * 2. The use of \`table\` rather than \`block\` is only necessary if using
   *    \`:before\` to contain the top-margins of child elements.
   */

  .clearfix::before,
  .clearfix::after {
    content: " ";
    display: table;
  }

  .clearfix::after {
    clear: both;
  }
`
