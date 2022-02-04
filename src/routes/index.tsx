import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Initial from '../pages/initial'

function Router() {
   return (
      <Routes>
         <Route path="/" element={<Initial />} />
      </Routes>
   )
}

export default Router
