import styled, { createGlobalStyle } from 'styled-components'

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

  `

interface PropsButton {
   color: string
   backgroundColor: string
   borderColor: string
   width?: string
}

export const Button = styled.button<PropsButton>`
   color: ${(props) => props.color};
   text-align: center;

   display: block;

   background: ${(props) => props.backgroundColor};
   border: 1px solid ${(props) => props.borderColor};
   border-radius: 4px;
   box-shadow: none;
   padding: 12px 0px;
   width: ${(props) => props.width ?? '184px'};
   line-height: 19px;

   &:hover {
      cursor: pointer;
   }
`
