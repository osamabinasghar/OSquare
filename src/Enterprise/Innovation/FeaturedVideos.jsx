import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
// import { ChevronRight } from 'lucide-react';

const FeaturedVideos = () => {
  // State to track the active video
  const [activeVideo, setActiveVideo] = useState(0);

  // Sample video URLs (replace these with actual URLs)
  const videoUrls = [
    '/apps/HR360-Banner.png',
    '/apps/iTeam-Banner.png',
    '/apps/EasyForms-Banner.png',
    '/apps/LeadKonnekt-Banner.png',
    '/apps/AMS-Banner.png',
    // 'https://www.youtube.com/embed/V-_O7nl0Ii0',
  ];

  // Button labels for each video
  const buttonLabels = [
    'HR360 Cloud',
    'ITeam',
    'Easy Forms',
    'Lead Konnekt',
    'AMS',
  ];

  return (
    <>
      {/* Header Section */}
      <div className="text-center mb-12" id='demos'>
        {/* <span className="text-sm font-semibold text-[#172554] tracking-wider uppercase">
          DEMOS
        </span> */}
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
          Innovate with <span
            style={{
              fontFamily: 'Bhineka',
              fontSize: '3.5rem',
              background: 'linear-gradient(to right, #1E4FCD, #F36F7E)', // Replace with your desired colors
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
            className='mr-0'
          >
            O
          </span>Square
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Turn ideas into reality anytime, anywhere with powerful apps and cloud storage.
        </p>
      </div>

      {/* Button Row with Tabs */}
      {/* <div className="flex items-center space-x-2 bg-gray-100  overflow-hidden p-1 mb-8 justify-center">
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveVideo(index)}
            className={`px-4 py-2 text-sm font-medium ${
              activeVideo === index
                ? 'text-black border-b-2 border-[#172554]'
                : 'text-gray-500'
            } ${index === 0 ? 'rounded-l-full' : ''} ${
              index === buttonLabels.length - 1 ? 'rounded' : ''
            } transition-colors`}
          >
            {label}
          </button>
        ))}
      </div> */}

      {/* Video Frame */}
      {/* <div className="flex justify-center">
        <div className="w-full max-w-4xl aspect-video border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden mb-5">
          <iframe
            className="w-full h-full"
            src={videoUrls[activeVideo]}
            title={`Video ${activeVideo + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}
      
      {/* <Spline scene="https://prod.spline.design/V1-rpuARnj-Y6Tbp/scene.splinecode" /> */}
      
      <div className="flex justify-center">
        <div
          className="w-full max-w-4xl aspect-video border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden mb-5 flex justify-center items-center"
        >
          <Spline
            scene="https://prod.spline.design/V1-rpuARnj-Y6Tbp/scene.splinecode"
            style={{ width: "100%", height: "100%" }} // Ensures Spline takes up full container space
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedVideos;
