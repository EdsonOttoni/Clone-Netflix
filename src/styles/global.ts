import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #__next {
    width: 100%;
    height: 100%;
    text-size-adjust: 100%;
  }

  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColorPrimary};
    text-rendering: optimizeLegibility;
  }

  html, body, input, textarea, button {
    font-size: 14px;
    font-weight: 400;
    font-family: sans-serif;
  }

  input, textarea {
    color: ${(props) => props.theme.secondaryColor};
  }


  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`
