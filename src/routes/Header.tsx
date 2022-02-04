import React from 'react'
import { Route } from 'react-router-dom'

import { Header } from '../components/Header'

function Routes() {
   return <Route path="/" element={<Header />} />
}

export default Routes
