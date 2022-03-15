import styled from 'styled-components'

export const Container = styled.section`
   width: 100%;
   margin: 90px auto;

   .content {
      display: grid;
      grid-template:
         'social date visu' auto
         'text text visu' auto
         'upload upload visu' auto;

      grid-template-columns: 1fr 1fr 2fr;
      grid-column-gap: 40px;
      grid-row-gap: 20px;
      padding: 0px;
      height: 655px;
   }
`
