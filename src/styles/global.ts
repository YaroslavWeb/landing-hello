import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    overflow-x: hidden;

    min-height:  100vh;
    margin: 0;
    padding: 0;

    font-family: Inter, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.palette.gray};
    
    background-color: ${({ theme }) => theme.palette.white};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  ul {
    list-style-type: none;
  }

  li {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input {
    border: none;
  }

  button {
    font-family: Inter, sans-serif;
    background-color: transparent;
    border: none;
    outline: none;
  }
`
