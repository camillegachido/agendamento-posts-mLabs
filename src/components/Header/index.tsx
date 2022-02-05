import React from 'react'
import * as G from '../../common/styles'
import * as S from './styles'
import Logo from './assets/logo.png'
import User from './assets/user.png'

export function Header(): JSX.Element {
   return (
      <S.Header>
         <G.Content>
            <S.Logo src={Logo} alt="Logo mLabs" />
            <S.User>
               <img src={User} alt="Ícone do usuário" />
               <p>Anselmo Carlos</p>
            </S.User>
         </G.Content>
      </S.Header>
   )
}

export default Header
