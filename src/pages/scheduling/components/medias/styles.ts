import styled from 'styled-components'

export const Footer = styled.footer`
   width: calc(100% - 80px);
   position: fixed;
   bottom: 0;
   right: 0;
   background-color: #ffffff;

   display: flex;
   justify-content: flex-end;
   padding: 16px 40px;

   div {
      display: flex;
      justify-content: space-between;
      width: 490px;
   }
`

interface PropsButton {
   selected?: boolean
}
export const Button = styled.button<PropsButton>`
   border-radius: 50%;
   width: 33px;
   height: 33px;

   background: ${(props) =>
      props.selected
         ? 'linear-gradient(135deg, #EF9F2E 25%, #E02B4B 105.56%)'
         : '#fff'};

   border: ${(props) =>
      props.selected ? '1px solid #EF9F2E' : '1px solid #9e9e9e'};

   svg path {
      fill: ${(props) => (props.selected ? '#fff' : '#333333')};
   }

   &:hover {
      border-color: #ef9f2e;
      background-color: #fff3e0;
      cursor: pointer;

      svg path {
         fill: ${(props) => (!props.selected ? '#ef9f2e' : '#fff')};
      }
   }

   &:disabled {
      background-color: #dddddd;
      border: 1px solid #9e9e9e;

      cursor: default;

      svg path {
         fill: #989898;
      }
   }
`
