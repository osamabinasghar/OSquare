import React from 'react';
import { Bot, Palette } from 'lucide-react';

const FeatureCard = ({
  category,
  title,
  description,
  buttonText,
  buttonVariant = 'dark',
  bgColor = 'bg-white',
  image,
}) => {
  const Icon = category === 'Designer' ? Palette : Bot;

  return (
    <div className={`rounded-3xl overflow-hidden ${bgColor} transition-transform hover:scale-[1.02] duration-300`}>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover" // Ensure the image has the correct height and cover property
        />
      )}

      <div className="flex  flex-col justify-between p-8 h-full"> {/* Flexbox to make the button stick to bottom */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            {/* <Icon className="w-5 h-5" /> */}
            <span className="text-sm font-semibold">{category}</span>
          </div>
          <h3 className="text-2xl font-semibold mb-4 text-[#1a1a1a]">{title}</h3>
          <p className="text-gray-700">{description}</p>


          <button
            className={`mt-8 rounded-lg border border-[#233983] text-[#233983]
              inline-flex items-center gap-2 px-6 py-2.5 rounded-sm font-semibold
              transition-colors duration-200
              ${
                buttonVariant === 'dark'
                ? 'bg-[#172554] hover:bg-[#233983] text-white'
                : 'bg-white hover:bg-gray-100 text-[#233983]'
              }
              `}
              >
            {buttonText}
          </button>
        </div>       
      </div>
    </div>
  );
};

export default FeatureCard;