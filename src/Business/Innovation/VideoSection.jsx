import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import AppIcon from './AppIcon';

const apps = ['Word', 'Excel', 'PowerPoint', 'Teams', 'OneDrive', 'Outlook'];

const VideoSection = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Create and share content with the OSquare app
        </h2>
        <a href="#" className="text-blue-600 font-semibold hover:underline">
          The OSquare app
        </a>
      </div>

      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-purple-400 aspect-video group cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-8 opacity-90">
            {apps.map((app, index) => (
              <AppIcon key={app} app={app} index={index} />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-blue-600 ml-1" />
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="#"
          className="inline-flex items-center text-blue-600 font-semibold hover:underline group"
        >
          Learn more about OSquare
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default VideoSection;