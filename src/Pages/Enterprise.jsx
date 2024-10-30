import React from 'react'
import Hero from '../Enterprise/Hero'
import Navbar from '../Enterprise/Navbar'
import Howitworks from '../Enterprise/Howitworks/HowItWorks'

const Enterprise = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <div className="pt-16"> {/* Adjust padding based on navbar height */}
        <Howitworks />
      </div>
    </>
  )
}

export default Enterprise