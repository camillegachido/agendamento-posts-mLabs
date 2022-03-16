import React, { useContext } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

import { postContext } from '../../context/post'

import * as G from '../../common/styles'
import { Instagram, Linkedin } from './components'
import * as S from './styles'
import { EMedias } from '../../common/interfaces'

export function Visualization(): JSX.Element {
   const { post } = useContext(postContext)

   return (
      <G.Modal gridArea="visu">
         <header>
            <h1>Visualização do post</h1>
         </header>
         <main>
            {post.socialMedias.length > 0 ? (
               <S.HasPostPreview>
                  <ScrollContainer className="row">
                     <div className="row">
                        <Instagram
                           show={post.socialMedias.includes(EMedias.instagram)}
                        />
                        <Linkedin
                           show={post.socialMedias.includes(EMedias.linkedin)}
                        />
                     </div>
                  </ScrollContainer>
               </S.HasPostPreview>
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
