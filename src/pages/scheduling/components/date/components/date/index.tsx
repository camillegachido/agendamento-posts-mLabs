import React, { useContext, useEffect, useState } from 'react'
import DatePicker, { DayValue } from 'react-modern-calendar-datepicker'

import Calendar from '../../assets/calendar-alt.png'

import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { postContext } from '../../../../../../context/post'

export function InitialDate() {
   const { post, updatePost } = useContext(postContext)
   const [selectedDay, setSelectedDay] = useState<DayValue>(null)

   useEffect(() => {
      if (selectedDay) {
         const { year, month, day } = selectedDay

         updatePost({ ...post, date: `${year}-${month}-${day}` })
      }
   }, [selectedDay, post])

   const renderCustomInput = ({ ref }: any) => (
      <input
         readOnly
         ref={ref}
         placeholder="DD/MM"
         value={selectedDay ? `${selectedDay.day}/${selectedDay.month}` : ''}
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

export default InitialDate
