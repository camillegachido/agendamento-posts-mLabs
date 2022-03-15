import React from 'react'

import * as G from '../../../../common/styles'
import { InitialHour, InitialDate } from './components'

export function Date(): JSX.Element {
   return (
      <G.Modal gridArea="date">
         <header>
            <h1>Data de publicação</h1>
         </header>
         <main className="container-button">
            <InitialDate />
            <InitialHour />
         </main>
      </G.Modal>
   )
}

export default Date
