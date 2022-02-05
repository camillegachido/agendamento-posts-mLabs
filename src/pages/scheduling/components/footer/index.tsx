import React from 'react'
import * as S from './styles'
import * as G from '../../../../common/styles'

export function Footer(): JSX.Element {
   return (
      <S.Footer>
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
      </S.Footer>
   )
}

export default Footer
