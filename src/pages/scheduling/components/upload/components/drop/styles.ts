import styled from 'styled-components'

export const DropContainer = styled.div`
   border: 1px dashed #bdbdbd;
   border-radius: 4px;
   padding: 28px 0px;

   p {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: center;

      color: #828282;
   }

   img {
      display: block;
      margin: auto;
   }
`

export const ButtonFile = styled.div`
   position: relative;

   button {
      margin: auto;
   }

   .hide-file {
      position: absolute;
      z-index: 1000;
      opacity: 0;
      cursor: pointer;
      right: 0;
      top: 0;
      height: 100%;
      font-size: 24px;
      width: 100%;
   }
`
