import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&display=swap');

  * {
    border: 0;
    box-sizing: border-box;
    font-family: ${theme.fontFamily};
    margin: 0;
    outline: none !important;
    padding: 0;

    ::before,
    ::after {
      box-sizing: inherit;
    }

    ::-moz-selection {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.base.white};
    }

    ::selection {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.base.white};
    }
  }

  

  body,
  html {
    background-color: ${theme.colors.base.white};
    background-color: ${theme.colors.base.black};
    opacity: 1;
    background-image: linear-gradient(to right, ${theme.colors.primary}, ${theme.colors.primary} 100px, ${theme.colors.base.black} 100px, ${theme.colors.base.black} );
    background-size: 200px 100%;
    color: ${theme.colors.base.black};
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 24px;
    -webkit-font-smoothing: antialiased;
  }

  body {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: ${theme.colors.base.black}66;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }

  #root {
    position: relative;
    z-index: 2;
  }
`;

export default GlobalStyle;
