import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background: #E5E5E5;
  }
  
  .link{
    text-decoration: none;
  }

  .hover:hover{ cursor: pointer }
  `
