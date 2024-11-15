import React, { useState } from 'react';

// Custom image imports (example paths)
import amsImage from '/apps/ams.svg'; 
import iteamImage from '/apps/iteam.svg'; 
import hr360Image from '/apps/hr360.svg'; 
import easyformsImage from '/apps/easyforms.svg'; 
import leadkonnektImage from '/apps/leadkonnekt.svg'; 

const productIcons = {
  'AMS': amsImage,
  'iTeam': iteamImage,
  'HR360': hr360Image,
  'EasyForms': easyformsImage,
  'LeadKonnekt': leadkonnektImage,
};

const ProductBadge = ({ name }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const Icon = productIcons[name] || iteamImage; // Default to AMS image if not found

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div className="relative inline-flex items-center">
      <div
        className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-[#172554] cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={Icon} alt={name} className="w-8 h-8 mr-2" />
       
      </div>
      {tooltipVisible && (
        <div className="absolute left-0 bottom-full mb-1 bg-gray-700 text-white text-xs rounded py-1 px-2">
          {name}
        </div>
      )}
    </div>
  );
};

export default ProductBadge;