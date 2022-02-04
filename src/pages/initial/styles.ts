import styled from 'styled-components'

export const Center = styled.section`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   button {
      color: #ffffff;
      text-align: center;

      display: block;
      margin: 70px auto 0px auto;

      background: #f2994a;
      border: 1px solid #e0812c;
      border-radius: 4px;
      box-shadow: none;
      padding: 12px 32px;
   }

   button: hover {
      cursor: pointer;
   }
`
