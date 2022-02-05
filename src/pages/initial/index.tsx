import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import * as G from '../../common/styles'
import Posts from './assets/posts.png'

export function Initial(): JSX.Element {
   return (
      <S.Center>
         <img src={Posts} alt="Logo mLabs" />
         <Link to="agendamento" className="link">
            <G.Button
               backgroundColor="#f2994a"
               color="#fff"
               borderColor="#e0812c"
            >
               Agendar post
            </G.Button>
         </Link>
      </S.Center>
   )
}

export default Initial
