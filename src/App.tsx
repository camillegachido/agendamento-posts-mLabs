import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './common/styles'
import { Header } from './components'
import Routes from './routes'

function App() {
   return (
      <>
         <GlobalStyle />
         <BrowserRouter>
            <Header />
            <Routes />
         </BrowserRouter>
      </>
   )
}

export default App
