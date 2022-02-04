import React from 'react'
import { Link } from 'react-router-dom'

import * as S from './styles'
import Posts from './assets/posts.png'

export function Initial(): JSX.Element {
   return (
      <S.Center>
         <img src={Posts} alt="Logo mLabs" />
         <Link to="agendamento" className="link">
            <button type="button" className="hover">
               Agendar post
            </button>
         </Link>
      </S.Center>
   )
}

export default Initial
