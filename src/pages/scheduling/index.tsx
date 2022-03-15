import React, { useState } from 'react'

import { Footer, Medias, Date, Text, Upload, Visualization } from './components'

import { EMedias } from '../../common/interfaces'

import * as S from './styles'
import * as G from '../../common/styles'

export function Scheduling(): JSX.Element {
   const [medias, setMedias] = useState<EMedias[]>([])

   return (
      <>
         <S.Container>
            <G.Content className="content">
               <Medias />
               <Date />
               <Text />
               <Upload />
               <Visualization />
            </G.Content>
         </S.Container>
         <Footer />
      </>
   )
}

export default Scheduling
