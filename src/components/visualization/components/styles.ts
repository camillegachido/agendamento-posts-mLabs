import styled from 'styled-components'

export const Container = styled.div`
   background-color: #fff;
   border: 1px solid #e0e0e0;
   border-radius: 4px;
   width: 350px;

   .center {
      padding: 0px 12px;
   }

   header {
      display: flex;
      justify-content: flex-start;
      padding: 12px;

      .info {
         margin: 8px;
      }
   }

   main {
      padding: 0;

      img.principal {
         width: 100%;
         height: 350px;
         object-fit: cover;
         object-position: center;
      }
   }
`

interface PropsIcon {
   background: string
}

export const Icon = styled.div<PropsIcon>`
   border-radius: 50%;
   width: 40px;
   height: 40px;
   background: ${(props) => props.background};

   svg {
      display: block;
      margin: 8px auto;
   }
`

export const UserName = styled.p`
   margin: 0;
   font-weight: 500;
   font-size: 14px;
   line-height: 21px;
`
export const Description = styled.p`
   font-size: 14px;
   line-height: 21px;

   color: #4f4f4f;
`
