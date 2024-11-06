import React, { useState, useCallback } from "react";
import {
  tab1Features,
  tab2Features,
  tab3Features,
  tab1Images,
  tab2Images,
  tab3Images,
} from "./featuresData";
import Feature from "./Feature";

const HowItWorks = () => {
  const [features, setFeatures] = useState(tab1Features);
  const [activeImage, setActiveImage] = useState("accordion-1");
  const [tabs, setTabs] = useState(1);

  const toggleFeature = useCallback((id) => {
    setFeatures((prev) =>
      prev.map((feature) => ({
        ...feature,
        expanded: feature.id === id,
        highlighted: feature.id === id,
      }))
    );
    setActiveImage(id);
  }, []);

  const getImageForFeature = (id) => {
    let images;
    if (tabs === 1) images = tab1Images;
    else if (tabs === 2) images = tab2Images;
    else if (tabs === 3) images = tab3Images;
    else if (tabs === 4) images = tab4Images;
    else if (tabs === 5) images = tab5Images;

    return images[id];
  };

  const handleTabChange = (tabIndex) => {
    setTabs(tabIndex);
    switch (tabIndex) {
      case 1:
        setFeatures(tab1Features);
        setActiveImage("accordion-1"); // Reset active image for each tab
        break;
      case 2:
        setFeatures(tab2Features);
        setActiveImage("accordion-2");
        break;
      case 3:
        setFeatures(tab3Features);
        setActiveImage("accordion-3");
        break;
      default:
        setFeatures(tab1Features);
        setActiveImage("accordion-1");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-purple-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <span className="text-[#172554] font-semibold tracking-wide uppercase text-sm">
            SOLUTIONS
          </span>
          <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Leverage productivity <br />
            of businesses
          </h2>

          <div className="space-x-2 mt-8">
            <button
              className={`rounded-3xl font-semibold transition-all duration-200 p-3 ${
                tabs === 1 ? "text-white bg-[#172554]" : "text-[#172554] bg-[#DBE2E5]"
              }`}
              onClick={() => handleTabChange(1)}
            >
              Unleash Creative Potential
            </button>
            <button
              className={`rounded-3xl font-semibold transition-all duration-200 p-3 ${
                tabs === 2 ? "text-white bg-[#172554]" : "text-[#172554] bg-[#DBE2E5]"
              }`}
              onClick={() => handleTabChange(2)}
            >
              Boost Efficiency
            </button>
            <button
              className={`rounded-3xl font-semibold transition-all duration-200 p-3 ${
                tabs === 3 ? "text-white bg-[#172554]" : "text-[#172554] bg-[#DBE2E5]"
              }`}
              onClick={() => handleTabChange(3)}
            >
              Work Confidently
            </button>
          </div>


          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {features.map((feature) => (
                <Feature
                  key={feature.id}
                  {...feature}
                  isExpanded={feature.expanded}
                  isHighlighted={feature.highlighted}
                  onToggle={() => toggleFeature(feature.id)}
                />
              ))}
            </div>

            <div className="relative lg:sticky lg:top-8">
              <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-2 shadow-xl ring-1 ring-gray-900/10 transition-all duration-500 ease-in-out">
                <img
                  src={getImageForFeature(activeImage)}
                  alt="Feature preview"
                  className="w-full h-[400px] object-cover rounded-2xl transition-opacity duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-50" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
