import React from 'react';

const AppIcon = ({ app, index }) => {
  return (
    <div
      className="flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-lg transform transition-transform group-hover:scale-110"
      style={{ 
        opacity: 0,
        animation: `fadeIn 0.5s ease forwards ${index * 0.1}s`
      }}
    >
      <span className="text-blue-600 font-semibold">{app[0]}</span>
    </div>
  );
};

export default AppIcon;