import React from 'react';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative py-10 px-4 sm:px-6 md:px-10 bg-cover bg-center" style={{
      backgroundImage: "url('/Slider3.jpg')",
    }}>
      
      {/* Overlay (Optional) */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto mb-4 w-full max-w-3xl text-center md:mb-8 lg:mb-4 mt-5">
        {/* Hero Title */}
        <p className="mx-auto mb-2 max-w-lg text-xs sm:text-sm md:text-base text-black md:mb-6 lg:mb-8">
          OSquare For Education
        </p>
        <h1 className="mb-4 text-1xl sm:text-1xl md:text-2xl lg:text-4xl font-bold text-blue-950 leading-tight">
          Revolutionize Education with <br />{' '}
          <span
            style={{
              fontFamily: 'Bhineka',
              fontSize: '3rem',
              background: 'linear-gradient(to right, #1E4FCD, #F36F7E)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            O
          </span>
          Square
        </h1>
        <p className="mx-auto mb-5 max-w-lg text-sm sm:text-base lg:text-lg text-black md:mb-6 lg:mb-8">
          Empower students to thrive both in and outside the classroom with O Square Education’s personalized tools.
        </p>

        {/* Hero Button */}
        <div className="flex items-center justify-center space-x-4">
          <Link
            to="/educationpricing"
            className="inline-block rounded-md bg-blue-950 px-5 sm:px-8 py-3 sm:py-4 text-center font-semibold text-white transition-all duration-200 hover:bg-blue-800"
          >
            Try Now
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="relative z-10 flex justify-center mb-8 sm:mb-12 md:mb-16">
        <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4 bg-white p-4 rounded-full shadow-lg">
          <Link
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-200"
            to="/"
          >
            For Enterprise
          </Link>
          <Link
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-200"
            to="/business"
          >
            For Business
          </Link>
          <Link
            className="bg-[#172554] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-200"
            to="/education"
          >
            For Education
          </Link>
          <Link
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-200"
            to="/individual"
          >
            For Individual
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;