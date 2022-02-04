import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Initial, Scheduling } from '../pages'

function Router() {
   return (
      <Routes>
         <Route path="/" element={<Initial />} />
         <Route path="agendamento" element={<Scheduling />} />
      </Routes>
   )
}

export default Router
