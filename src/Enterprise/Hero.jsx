import React from 'react';
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div 
      className="relative mx-auto max-w-full py-8 px-4 sm:px-6 md:px-10 bg-cover bg-center"
    >
      {/* Spline Background */}
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/e3apvWf2AKybvqvw/scene.splinecode" className="w-full h-full"/>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-8">
        {/* Hero Title */}
        <p className="mx-auto mb-2 max-w-lg text-xs sm:text-sm md:text-base text-gray-500 md:mb-6 lg:mb-8">
          OSquare For Enterprise
        </p>
        <h1 className="mb-4 text-1xl sm:text-1xl md:text-2xl lg:text-4xl font-bold text-blue-950 leading-tight">
          Empower Your Business to <br/>Thrive with O Square
        </h1>
        <p className="mx-auto mb-5 max-w-lg text-sm sm:text-base lg:text-lg text-gray-500 md:mb-6 lg:mb-8">
          Unlock the full potential of your teams with O Square, enabling them to collaborate seamlessly, and achieve exceptional business outcomes.
        </p>

        {/* Hero Button */}
        <div className="flex items-center justify-center space-x-4">
          <a
            href="#"
            className="inline-block rounded-md bg-blue-950 px-5 sm:px-8 py-3 sm:py-4 text-center font-semibold text-white transition-all duration-200 hover:bg-blue-800"
          >
            See plans and pricing
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="relative z-10 flex justify-center mb-8 sm:mb-12 md:mb-16">
        <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4 bg-grey-300 p-4 rounded-full ">
          <Link className="bg-[#172554] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-200" to="/enterprise">
            For Enterprise
          </Link>
          <Link className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-200" to="/">
            For Business
          </Link>
          <Link className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-200" to="/">
            For Education
          </Link>
          <Link className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-200" to="/">
            For Individual
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
