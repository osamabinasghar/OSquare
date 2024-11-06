import React from 'react';
import Header from './Header';
import ActionButtons from './ActionButtons';
import VideoSection from './VideoSection';

const Innovation = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <ActionButtons />
        <VideoSection />
      </div>
    </section>
  );
};

export default Innovation;