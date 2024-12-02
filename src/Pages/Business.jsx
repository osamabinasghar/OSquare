import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';
import Hero from '../Business/Hero'
import Navbar from '../Business/Navbar';
import Howitworks from '../Business/HowItWorks/HowItWorks';
import FeaturedNews from '../Business/FeaturedNews/FeaturedNews';
import FeatureCards from '../Blogs/FeatureCards';
import AppsShowcase from '../Business/AppsShowcase/AppsShowcase';
import FeaturedVideos from '../Business/Innovation/FeaturedVideos';
// import BusinessValue from '../Business/BusinessValue/BusinessValue';
import Pricing from '../Business/Pricing/Pricing';
import CustomerStories from '../Business/CustomerStories/CustomerStories';
// import Innovation from '../Business/Innovation/Innovation';
// import ChoosePlan from '../Business/ChoosePlan';

const Business = () => {
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

export default Business