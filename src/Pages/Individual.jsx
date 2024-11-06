// Individual.jsx
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Hero from '../Individual/Hero';
import Navbar from '../Individual/Navbar';
import Howitworks from '../Individual/HowItWorks/HowItWorks';
import FeaturedNews from '../Individual/FeaturedNews/FeaturedNews';
import FeatureCards from '../Individual/FeatureCards/FeatureCards';
import AppsShowcase from '../Individual/AppsShowcase/AppsShowcase';
import Innovation from '../Individual/Innovation/Innovation';
import CustomerStories from '../Individual/CustomerStories/CustomerStories';
import ChoosePlan from '../Individual/ChoosePlan';

const Individual = () => {
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

export default Individual;
