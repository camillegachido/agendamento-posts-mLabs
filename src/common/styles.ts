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

  .container-button{
     display: flex;
     justify-content: space-between;
  }

  input[type="time" i]{
     font-family: 'Poppins', sans-serif;
  }

  input[type="time"]::-webkit-calendar-picker-indicator {
   display: none;
  }

  .input-class{
      border: 1px solid #949494;
      line-height: 21px;
      color: #828282;
      padding: 12px 8px 12px 34px;
      background-position: left 15px top 15px;
      background-repeat: no-repeat;
      background-color:  #fff;
      width: 80px;
      border-radius: 4px;
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
