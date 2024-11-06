import React from 'react'
import Hero from '../Business/Hero'
import Navbar from '../Business/Navbar'
import Howitworks from '../Business/Howitworks/HowItWorks'

const Business = () => {
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

export default Business