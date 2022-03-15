import React, { useContext } from 'react'
import { postContext } from '../../context/post'

import * as G from '../../common/styles'
import { Instagram } from './components/instagram'
import * as S from './styles'

export function Visualization(): JSX.Element {
   const { post } = useContext(postContext)

   return (
      <G.Modal gridArea="visu">
         <header>
            <h1>Visualização do post</h1>
         </header>
         <main>
            {post.socialMedias.length > 0 ? (
               <Instagram />
            ) : (
               <S.PostPreview>
                  <p>
                     Aguardando conteúdo. Informe os canais e as mídias
                     desejadas para visualização.
                  </p>
               </S.PostPreview>
            )}
         </main>
      </G.Modal>
   )
}

export default Visualization
