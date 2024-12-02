import React from 'react';
import { ChevronRight } from 'lucide-react';

const FeaturedCard = ({ activeTab }) => {
  // Set background image and text based on activeTab
  const backgroundImage =
    activeTab === 'top-picks'
      ? "url('https://static.tildacdn.com/tild3339-3562-4238-b038-666363383163/Group_1.png')"
      : "url('https://images.unsplash.com/photo-1500627965408-b5f2c8793f17?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
  
  const cardTitle =
    activeTab === 'top-picks'
      ? "Apps to manage your everyday"
      : "Discover more apps for enhanced productivity";
  const cardDescription =
    activeTab === 'top-picks'
      ? "Get the apps, security, and storage you need to accomplish your goals."
      : "Explore apps designed to help you work smarter and faster.";

  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-cover bg-center text-white h-screen sm:h-[60vh] md:h-[80vh]"
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50"></div>

      <div className="text-black absolute bottom-0 left-0 z-10 p-6 space-y-6">
        <h3 className="text-2xl font-semibold">{cardTitle}</h3>
        <p className="text-black">{cardDescription}</p>
        <div className="mt-8">
          {/* <button className="inline-flex items-center px-6 py-3 text-white bg-black text-gray rounded-md font-semibold hover:bg-gray-500 transition-colors">
            Learn more
            <ChevronRight className="ml-2 w-4 h-4" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
