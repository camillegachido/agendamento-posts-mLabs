import React, { useContext, useEffect, useState } from 'react'
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'

import Calendar from './assets/calendar-alt.png'

import * as G from '../../../../common/styles'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
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
