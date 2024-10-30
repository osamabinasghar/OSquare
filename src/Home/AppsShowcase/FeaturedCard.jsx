import React from 'react';
import { ChevronRight } from 'lucide-react';

const FeaturedCard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="relative z-10 p-6 flex flex-col h-full">
        <div className="flex-1 space-y-6">
          <h3 className="text-2xl font-semibold">
            Apps to manage your everyday
          </h3>
          <p className="text-gray-300">
            Get the apps, security, and storage you need to accomplish your goals.
          </p>
        </div>

        <div className="mt-8">
          <button className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Learn more
            <ChevronRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
        alt="Productivity"
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
      />
    </div>
  );
};

export default FeaturedCard;