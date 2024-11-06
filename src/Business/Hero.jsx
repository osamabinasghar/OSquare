import React from 'react'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-5 py-32 md:px-10">
         <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
           {/* Hero Title */}
           <p className="mx-auto mb-2 max-w-lg text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
             OSquare FOR BUSINESS
           </p>
           <h1 className="mb-4 text-4xl font-bold md:text-6xl text-blue-950">
             Supercharge your productivity with OSquare
           </h1>
           <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-6 lg:mb-8">
             Get productivity apps, security, and storage with OSquare 365. Then add AI power with Copilot Pro.
           </p>
           {/* Hero Button */}
           <div className="flex items-stretch justify-center">
             <a
               href="#"
               className="mr-5 inline-block rounded-md bg-blue-950 px-8 py-4 text-center font-semibold text-white md:mr-6 lg:mr-8"
             >
               See plans and pricing
             </a>
           </div>
         </div>
         <div className="flex justify-center mb-16">
          <div className="flex justify-center items-center space-x-4 bg-white p-4 rounded-full shadow-md">
              <Link className='relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-200' to='/'>For Home</Link>
              <Link className='bg-[#172554] text-white relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-200' to='/business'>For Business</Link>
              <Link className='relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-200' to='/enterprise'>For Enterprise</Link>
              <Link className='relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-200' to='/education'>For Education</Link>
          </div>
          </div>
        </div>
    </>
  )
}

export default Hero