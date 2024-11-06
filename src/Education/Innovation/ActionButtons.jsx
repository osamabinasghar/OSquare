import React from 'react';
import { Shield } from 'lucide-react';

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      <button className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all text-gray-900 font-semibold">
        <span>The OSquare app</span>
      </button>
      
      <button className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-all text-gray-900 font-semibold">
        <Shield className="w-5 h-5 mr-2 text-blue-600" />
        <span>OSquare</span>
      </button>
    </div>
  );
};

export default ActionButtons;