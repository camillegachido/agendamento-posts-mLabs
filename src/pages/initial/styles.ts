import styled from 'styled-components'

export const Center = styled.section`
   position: absolute;
   top: calc(50% + 44px);
   left: 50%;
   transform: translate(-50%, -50%);
   height: calc(100vh - 150px);

   img {
      max-height: calc(100% - 122px);
   }

   button {
      margin: 40px auto 0px auto;
   }
`
