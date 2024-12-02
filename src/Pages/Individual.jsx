import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';
import Hero from '../Individual/Hero'
import Navbar from '../Individual/Navbar';
import Howitworks from '../Individual/HowItWorks/HowItWorks';
import FeaturedNews from '../Individual/FeaturedNews/FeaturedNews';
import FeatureCards from '../Blogs/FeatureCards';
import AppsShowcase from '../Individual/AppsShowcase/AppsShowcase';
import FeaturedVideos from '../Individual/Innovation/FeaturedVideos';
// import BusinessValue from '../Individual/BusinessValue/BusinessValue';
import Pricing from '../Individual/Pricing/Pricing';
import CustomerStories from '../Individual/CustomerStories/CustomerStories';
// import Innovation from '../Individual/Innovation/Innovation';
// import ChoosePlan from '../Individual/ChoosePlan';

const Individual = () => {
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

export default Individual