import styled from 'styled-components'

import Post from './assets/post-preview.png'

export const PostPreview = styled.div`
   background-image: url(${Post});
   background-repeat: no-repeat;
   background-position: bottom;
   margin: auto;

   height: 445px;
   width: 380px;

   p {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: center;

      color: #828282;
   }
`
