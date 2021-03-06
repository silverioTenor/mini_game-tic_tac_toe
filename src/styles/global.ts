import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #1D1E22;
    -webkit-font-smothing: antialiased;
  }

  body, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    color: #e3e3e3;
  }

  p, span {
    color: #e3e3e3;
  }

  button {
    cursor: pointer;
  }
`;