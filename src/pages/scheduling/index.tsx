import React from 'react'
import { Footer, Medias, Date, Text, Upload } from './components'
import * as S from './styles'
import * as G from '../../common/styles'

export function Scheduling(): JSX.Element {
   return (
      <>
         <S.Container>
            <G.Content className="content">
               <Medias />
               <Date />
               <Text />
               <Upload />
            </G.Content>
         </S.Container>
         <Footer />
      </>
   )
}

export default Scheduling
