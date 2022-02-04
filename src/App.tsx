import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './common/styles'
import { Header } from './components'
import Routes from './routes'

function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes />
         </BrowserRouter>

         <GlobalStyle />
      </>
   )
}

export default App
