import React, { useContext } from 'react'
import * as S from './styles'
import * as G from '../../../../common/styles'
import { postContext } from '../../../../context/post'

export function Footer(): JSX.Element {
   const { post } = useContext(postContext)

   const save = () => {
      console.log(post)
   }

   return (
      <S.Footer>
         <G.Content className="content">
            <div>
               <G.Button
                  backgroundColor="#fff"
                  borderColor="#fff"
                  color="#2F80ED"
                  width="90px"
               >
                  Cancelar
               </G.Button>
               <G.Button
                  onClick={save}
                  borderColor="#2F80ED"
                  backgroundColor="#fff"
                  color="#2F80ED"
               >
                  Salvar rascunho
               </G.Button>
               <G.Button
                  backgroundColor="#2F80ED"
                  color="#fff"
                  borderColor="#2F80ED"
               >
                  Agendar
               </G.Button>
            </div>
         </G.Content>
      </S.Footer>
   )
}

export default Footer
