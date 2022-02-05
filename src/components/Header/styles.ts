import styled from 'styled-components'

export const Header = styled.header`
   width: 100%;
   position: fixed;
   top: 0;
   right: 0;
   background-color: #ffffff;

   div {
      display: flex;
      justify-content: space-between;
   }
`

export const Logo = styled.img`
   width: 115px;
   height: 48.2px;
`
export const User = styled.div`
   display: flex;

   img {
      width: 45px;
      height: 45px;
      margin-right: 16px;
   }

   p {
      font-size: 14px;
      font-weight: 500;
   }
`
