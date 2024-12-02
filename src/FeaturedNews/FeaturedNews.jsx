import React from 'react';
import Card from './Card';

const FeaturedNews = () => {
  return (
    <>
    <div className='pb-8' id='featured-news'></div>
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <header>
          <span className="text-sm font-semibold uppercase tracking-wider text-gray-600">
            FEATURED NEWS
          </span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-semibold text-gray-900">
            Discover what's happening with <span className='mr-0'></span>
            <span
              style={{
                fontFamily: 'Bhineka',
                fontSize: '3.5rem',
                background: 'linear-gradient(to right, #1E4FCD, #F36F7E)', // Replace with your desired colors
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
              className='mr-0'
            >
              O
            </span>Square
          </h1>
        </header>

        <Card />
      </div>
    </section>
    </>
  );
};

export default FeaturedNews;