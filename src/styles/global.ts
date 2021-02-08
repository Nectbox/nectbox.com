import { css } from '@emotion/react';

export default css`
  * {
    box-sizing: border-box;
    list-style: none;
    outline: none;
    font-size: 1.6rem;
  }

  html {
    scrollbar-width: none;
    -ms-overflow-style: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;
    font-size: 62.5%;
  }

  body {
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    overscroll-behavior: none;
    overflow-x: hidden;
    overflow-y: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
