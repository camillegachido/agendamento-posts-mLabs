import React from 'react'
import * as S from './styles'
import Posts from './assets/posts.png'

export function Initial(): JSX.Element {
   return (
      <S.Center>
         <img src={Posts} alt="Logo mLabs" />
         <button type="button">Agendar post</button>
      </S.Center>
   )
}

export default Initial
