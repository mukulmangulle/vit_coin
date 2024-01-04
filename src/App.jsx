import React from 'react'

import { Container } from '@mui/material'
import ListGroup from './ListGroup'
import { CoinProvider } from './context/coin/CoinContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CoinPage from './pages/CoinPage';
 import Home from './pages/Home';
import Navbar from './Componet/Navbar'

const App = () => {
  return (


    <CoinProvider>
      <Router>
        <Navbar/>
        <Container sx={{ padding: "80px 40px" }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/coin/:coinId' element={<CoinPage />} />
          </Routes>
          <ListGroup />
        </Container>
      </Router>
    </CoinProvider>

  )
}

export default App