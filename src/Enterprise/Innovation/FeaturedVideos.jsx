import React, { useState } from 'react';
// import { ChevronRight } from 'lucide-react';

const FeaturedVideos = () => {
  // State to track the active video
  const [activeVideo, setActiveVideo] = useState(0);

  // Sample video URLs (replace these with actual URLs)
  const videoUrls = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/tgbNymZ7vqY',
    'https://www.youtube.com/embed/oHg5SJYRHA0',
    'https://www.youtube.com/embed/V-_O7nl0Ii0',
  ];

  // Button labels for each video
  const buttonLabels = [
    'ITeam',
    'AMS',
    'HR360 Cloud',
    'Easy Forms',
  ];

  return (
    <>
      {/* Header Section */}
      <div className="text-center mb-12" id='demos'>
        <span className="text-sm font-semibold text-blue-600 tracking-wider uppercase">
          DEMOS
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
          Innovate with OSquare
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Turn ideas into reality anytime, anywhere with powerful apps and cloud storage.
        </p>
      </div>

      {/* Button Row with Tabs */}
      <div className="flex items-center space-x-2 bg-gray-100  overflow-hidden p-1 mb-8 justify-center">
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveVideo(index)}
            className={`px-4 py-2 text-sm font-medium ${
              activeVideo === index
                ? 'text-black border-b-2 border-blue-600'
                : 'text-gray-500'
            } ${index === 0 ? 'rounded-l-full' : ''} ${
              index === buttonLabels.length - 1 ? 'rounded' : ''
            } transition-colors`}
          >
            {label}
          </button>
        ))}

      
      </div>

      {/* Video Frame */}
      <div className="flex justify-center">
        <div className="w-full max-w-3xl aspect-video border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src={videoUrls[activeVideo]}
            title={`Video ${activeVideo + 1}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default FeaturedVideos;
