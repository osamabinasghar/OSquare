import React from 'react';
import { ChevronRight } from 'lucide-react';

const AppCard = ({ icon: Icon, iconColor, name, description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div className={`${iconColor}`}>
          <Icon className="w-10 h-10" />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {name}
          </h3>
          <p className="text-gray-600">
            {description}
          </p>
        </div>

        <a
          href="#"
          className="inline-flex items-center text-sm font-semibold text-[#0F1B4C] hover:underline group"
        >
          Learn more
          <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
};

export default AppCard;