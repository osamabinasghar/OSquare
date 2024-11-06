import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './layout/Header'
// import Home from './Pages/Home'
import Individual from './Pages/Individual'
import Business from './Pages/Business'
import Enterprise from './Pages/Enterprise'
import Education from './Pages/Education'
import Footer from './layout/Footer'
import Slider from './Slider'

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/enterprise" replace />} />
          <Route path='/enterprise' element={<Enterprise />} />
          <Route path='/business' element={<Business/>} />
          <Route path='/education' element={<Education />} />
          <Route path='/Indudual' element={<Individual />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Slider /> */}
    </>
  )
}

export default App