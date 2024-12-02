import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';
import Hero from '../Enterprise/Hero'
import Navbar from '../Enterprise/Navbar';
import Howitworks from '../Enterprise/HowItWorks/HowItWorks';
import FeaturedNews from '../Enterprise/FeaturedNews/FeaturedNews';
import AppsShowcase from '../Enterprise/AppsShowcase/AppsShowcase';
import FeaturedVideos from '../Enterprise/Innovation/FeaturedVideos';
// import BusinessValue from '../Enterprise/BusinessValue/BusinessValue';
import Pricing from '../Enterprise/Pricing/Pricing';
import CustomerStories from '../Enterprise/CustomerStories/CustomerStories';
import FeatureCards from '../Blogs/FeatureCards';
// import Innovation from '../Enterprise/Innovation/Innovation';
// import ChoosePlan from '../Enterprise/ChoosePlan';

const Enterprise = () => {
  useEffect(() => {
    // Check if the scroll position is greater than 0 (i.e., if the page is scrolled down)
    if (window.scrollY > 0) {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth',  // Smooth scroll
      });
    }
  }, []);
  return (
    <>
      <Hero />
      <Navbar />
      <div className="pt-16"> {/* Adjust padding based on navbar height */}
        <div id='how-it-works'></div>
        <Howitworks />
        <FeaturedNews />
        <AppsShowcase />
        <AnimatePresence>
          <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
            <FeaturedVideos />
            {/* <BusinessValue /> */}
            <Pricing />
            <CustomerStories />
            <FeatureCards />
            {/* <ChoosePlan /> */}
          </div>
        </AnimatePresence>
      </div>
    </>
  )
}

export default Enterprise