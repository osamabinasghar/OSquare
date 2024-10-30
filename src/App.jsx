import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Home from './Pages/Home'
import Business from './Pages/Business'
import Enterprise from './Pages/Enterprise'
import Education from './Pages/Education'
import Footer from './layout/Footer'

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/business' element={<Business/>} />
          <Route path='/enterprise' element={<Enterprise />} />
          <Route path='/education' element={<Education />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App