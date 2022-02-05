import React from 'react'
import { Footer, Medias } from './components'
import * as S from './styles'

export function Scheduling(): JSX.Element {
   return (
      <>
         <S.Container>
            <Medias />
         </S.Container>
         <Footer />
      </>
   )
}

export default Scheduling
