import styled from 'styled-components'

export const Container = styled.section`
   width: calc(100% - 80px);
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);

   display: grid;
   grid-template:
      'social date visu' auto
      'text text visu' auto
      'upload upload visu' auto;

   grid-template-columns: 1fr 1fr 2fr;
   grid-column-gap: 40px;
   grid-row-gap: 40px;
`

interface PropsModal {
   gridArea: string
}

export const Modal = styled.article<PropsModal>`
   background-color: #fff;
   border: 1px solid #e0e0e0;
   border-radius: 4px;
   grid-area: ${(props) => props.gridArea};

   header {
      border-bottom: 1px solid #e0e0e0;
      padding: 8px 12px;
   }

   header h1 {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      margin: 0px;

      color: #333333;
   }

   main {
      padding: 8px 12px;
   }
`
