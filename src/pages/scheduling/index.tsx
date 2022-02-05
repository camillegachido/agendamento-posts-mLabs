import React from 'react'
import { Footer, Medias, Date } from './components'
import * as S from './styles'

export function Scheduling(): JSX.Element {
   return (
      <>
         <S.Container>
            <Medias />
            <Date />
         </S.Container>
         <Footer />
      </>
   )
}

export default Scheduling
