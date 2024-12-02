import React from 'react';
import { ChevronDown } from 'lucide-react';

const Feature = ({
  icon: Icon,
  title,
  description,
  isExpanded,
  isHighlighted,
  onToggle
}) => {
  return (
    <div 
      className={`group rounded-xl transition-all duration-200 ${
        isHighlighted ? 'bg-white/50 shadow-lg ring-1 ring-gray-900/5' : ''
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start text-left p-4"
      >
        <div className="mr-4 mt-1">
          <div className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${
            isHighlighted 
              ? 'bg-[#172554] text-white'
              : 'bg-blue-100 text-[#172554] group-hover:bg-blue-200'
          }`}>
            <Icon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className={`text-lg font-semibold transition-colors ${
              isHighlighted 
                ? 'text-[#172554]'
                : 'text-gray-900 group-hover:text-[#172554]'
            }`}>
              {title}
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </div>
          <div
            className={`mt-2 text-gray-600 transition-all duration-200 ${
              isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            {description}
          </div>
        </div>
      </button>
    </div>
  );
};

export default Feature;