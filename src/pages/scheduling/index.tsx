import React from 'react'
import { Footer, Medias, Date, Text } from './components'
import * as S from './styles'

export function Scheduling(): JSX.Element {
   return (
      <>
         <S.Container>
            <Medias />
            <Date />
            <Text />
         </S.Container>
         <Footer />
      </>
   )
}

export default Scheduling
