import React, { useState } from 'react'
import DatePicker from 'react-modern-calendar-datepicker'

import Calendar from './assets/calendar-alt.png'
import Clock from './assets/clock.svg'

import * as G from '../../styles'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

function InitialDate() {
   const [selectedDay, setSelectedDay] = useState<any>(null)
   const renderCustomInput = ({ ref }: any) => (
      <input
         readOnly
         ref={ref} // necessary
         placeholder="DD/MM"
         value={selectedDay ? selectedDay.day : ''}
         style={{ backgroundImage: `url(${Calendar})` }}
         className="input-class" // a styling class
      />
   )

   return (
      <DatePicker
         value={selectedDay}
         onChange={(vl) => setSelectedDay(vl)}
         renderInput={renderCustomInput}
         shouldHighlightWeekends
      />
   )
}

function InitialHour() {
   const [selectedHour, setSelectedHour] = useState('')

   return (
      <input
         type="time"
         placeholder="HH:MM"
         value={selectedHour}
         style={{ backgroundImage: `url(${Clock})` }}
         className="input-class"
         onChange={({ target }) => setSelectedHour(target.value)}
      />
   )
}

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
