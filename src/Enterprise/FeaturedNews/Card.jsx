import React from 'react';
import { Bot } from 'lucide-react';

const Card = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Top Left Text */}
      <div className="p-4">
        {/* <p className="text-sm font-semibold text-gray-700">O Square</p> */}
        <img src="/icon.svg" alt="icon" width={25} />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 p-4">
        {/* Content Side */}
        <div className="p-8 lg:p-12 flex flex-col items-center justify-center text-center space-y-6">
          <div className="flex items-center space-x-2">
            {/* <Bot className="w-6 h-6 text-[#0F1B4C]" /> */}
            {/* <h2 className="text-2xl font-semibold text-gray-900">O Square</h2> */}
            <img src="/Logo.svg" alt="logo" width={100} />
            {/* <span
              style={{
                fontFamily: 'Bhineka',
                fontSize: '1rem',
                background: 'linear-gradient(to right, #1E4FCD, #F36F7E)', // Replace with your desired colors
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
              className='mr-0'
            >
              O
            </span>Square */}
          </div>

          <p className="text-lg text-gray-600">
          <span
            style={{
              fontFamily: 'Bhineka',
              fontSize: '1.4rem',
              // background: 'linear-gradient(to right, #1E4FCD, #F36F7E)', // Replace with your desired colors
              WebkitBackgroundClip: 'text',
              // color: 'transparent',
            }}
            className='mr-0'
          >
            O
          </span>Square is here to assist you with solutions, and support every step of the way..
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="inline-flex items-center px-6 py-3 bg-[#0F1B4C] text-white font-semibold rounded-md hover:bg-[#1a2b6d] transition-colors">
              Try Now
            </button>
            {/* <button className="inline-flex items-center px-6 py-3 bg-white text-[#0F1B4C] font-semibold rounded-md border border-[#0F1B4C] hover:bg-gray-50 transition-colors">
              Download the app
            </button> */}
          </div>
        </div>

        {/* Image Side */}
        <div className="relative bg-pink-50 p-8 lg:p-12 flex items-center justify-center">
          {/* <div className="absolute top-8 right-8 lg:right-12 max-w-xs">
            <div className="bg-pink-200 text-gray-900 px-6 py-3 rounded-full">
              <p className="font-medium">What should I name this cutie?</p>
            </div>
          </div> */}
          
          <img
            src="/banner.png"
            alt="Cute Siamese kitten"
            className="w-full h-[400px] object-cover rounded-xl"
          />

          {/* <div className="absolute bottom-8 right-8 lg:right-12">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg flex items-center space-x-3">
              <Bot className="w-5 h-5 text-blue-600" />
              <span className="text-gray-500">Talk to Copilot</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
