// Home.js
import React from 'react';
import Hero from '../Home/Hero';
import Navbar from '../Home/Navbar';
import Howitworks from '../Home/HowItWorks/HowItWorks';
import FeaturedNews from '../Home/FeaturedNews/FeaturedNews';
import FeatureCards from '../Home/FeatureCards/FeatureCards';
import AppsShowcase from '../Home/AppsShowcase/AppsShowcase';

const Home = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <div className="pt-16"> {/* Adjust padding based on navbar height */}
        <Howitworks />
        <FeaturedNews />
        <FeatureCards />
        <AppsShowcase />
      </div>
    </>
  );
};

export default Home;
