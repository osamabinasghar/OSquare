import React from 'react';
import Spline from '@splinetool/react-spline';

const Slider = () => {
  return (
    <div className="relative w-full h-screen" style={{objectFit: 'contain'}}>
       <Spline scene="https://prod.spline.design/e3apvWf2AKybvqvw/scene.splinecode" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Centered Text
        </h1>
      </div>
    </div>
  );
}

export default Slider;
