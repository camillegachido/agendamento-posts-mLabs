import React from 'react'
import * as S from './styles'
import Logo from './assets/logo.png'
import User from './assets/user.png'

export function Header(): JSX.Element {
   return (
      <S.Header>
         <S.Logo src={Logo} alt="Logo mLabs" />
         <S.User>
            <img src={User} alt="Ícone do usuário" />
            <p>Anselmo Carlos</p>
         </S.User>
      </S.Header>
   )
}

export default Header
