import React from 'react'
import { AnimatePresence } from 'framer-motion';
import Hero from '../Enterprise/Hero'
import Navbar from '../Enterprise/Navbar';
import Howitworks from '../Enterprise/HowItWorks/HowItWorks';
import FeaturedNews from '../Enterprise/FeaturedNews/FeaturedNews';
import FeatureCards from '../Enterprise/FeatureCards/FeatureCards';
import AppsShowcase from '../Enterprise/AppsShowcase/AppsShowcase';
import Innovation from '../Enterprise/Innovation/Innovation';
import CustomerStories from '../Enterprise/CustomerStories/CustomerStories';
import ChoosePlan from '../Enterprise/ChoosePlan';

const Enterprise = () => {
  return (
    <>
      <Hero />
      <Navbar />
      <div className="pt-16"> {/* Adjust padding based on navbar height */}
        <div id='how-it-works'></div>
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
  )
}

export default Enterprise