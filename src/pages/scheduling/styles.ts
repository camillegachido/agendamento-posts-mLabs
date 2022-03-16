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

      grid-template-columns: 300px 300px 600px;
      grid-column-gap: 40px;
      grid-row-gap: 20px;
      padding: 0px;
      height: 655px;
   }
`
