import React from 'react'
import Hero from '../Education/Hero'
import Navbar from '../Education/Navbar'
import Howitworks from '../Education/Howitworks/HowItWorks'

const Education = () => {
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

export default Education