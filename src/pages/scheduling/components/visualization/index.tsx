import React, { useState, useEffect } from 'react'
import { IPost } from '../../../../common/interfaces'

import * as G from '../../styles'
import * as S from './styles'

export function Visualization(): JSX.Element {
   const post: IPost = { socialMedias: [] }

   return (
      <G.Modal gridArea="visu">
         <header>
            <h1>Visualização do post</h1>
         </header>
         <main>
            {post.socialMedias.length > 0 ? (
               <p>aaaa</p>
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
