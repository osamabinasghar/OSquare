import React, { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion';
import Hero from '../Education/Hero'
import Navbar from '../Education/Navbar';
import Howitworks from '../Education/HowItWorks/HowItWorks';
import FeaturedNews from '../Education/FeaturedNews/FeaturedNews';
import FeatureCards from '../Blogs/FeatureCards';
import AppsShowcase from '../Education/AppsShowcase/AppsShowcase';
import FeaturedVideos from '../Education/Innovation/FeaturedVideos';
// import BusinessValue from '../Education/BusinessValue/BusinessValue';
import Pricing from '../Education/Pricing/Pricing';
import CustomerStories from '../Education/CustomerStories/CustomerStories';
// import Innovation from '../Education/Innovation/Innovation';
// import ChoosePlan from '../Education/ChoosePlan';

const Education = () => {
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

export default Education