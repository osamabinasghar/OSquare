import React from 'react';
import { Bot } from 'lucide-react';

const Card = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Content Side */}
        <div className="p-8 lg:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-semibold text-gray-900">O Square</h2>
            </div>
            
            <p className="text-lg text-gray-600">
              O Square, your AI companion, is ready to support you whenever and wherever you need it.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="inline-flex items-center px-6 py-3 bg-[#0F1B4C] text-white font-semibold rounded-md hover:bg-[#1a2b6d] transition-colors">
              Try the free version
            </button>
            <button className="inline-flex items-center px-6 py-3 bg-white text-[#0F1B4C] font-semibold rounded-md border border-[#0F1B4C] hover:bg-gray-50 transition-colors">
              Download the app
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative bg-pink-50 p-8 lg:p-12">
          <div className="absolute top-8 right-8 lg:right-12 max-w-xs">
            <div className="bg-pink-200 text-gray-900 px-6 py-3 rounded-full">
              <p className="font-medium">What should I name this cutie?</p>
            </div>
          </div>
          
          <img
            src="https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?auto=format&fit=crop&q=80"
            alt="Cute Siamese kitten"
            className="w-full h-[400px] object-cover rounded-xl mt-16"
          />

          <div className="absolute bottom-8 right-8 lg:right-12">
            <div className="bg-white rounded-full px-6 py-3 shadow-lg flex items-center space-x-3">
              <Bot className="w-5 h-5 text-blue-600" />
              <span className="text-gray-500">Talk to Copilot</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;