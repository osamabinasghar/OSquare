// Home.jsx
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from '../Home/Hero';
import Navbar from '../Home/Navbar';
import Howitworks from '../Home/HowItWorks/HowItWorks';
import FeaturedNews from '../Home/FeaturedNews/FeaturedNews';
import FeatureCards from '../Home/FeatureCards/FeatureCards';
import AppsShowcase from '../Home/AppsShowcase/AppsShowcase';
import Innovation from '../Home/Innovation/Innovation';
import CustomerStories from '../Home/CustomerStories/CustomerStories';
import ChoosePlan from '../Home/ChoosePlan';

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
        <AnimatePresence>
          <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
            <Innovation />
            <CustomerStories />
            <ChoosePlan />
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
