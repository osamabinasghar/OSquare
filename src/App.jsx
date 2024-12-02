import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Individual from "./pages/Individual";
import Business from "./pages/Business";
import Enterprise from "./pages/Enterprise";
import Education from "./pages/Education";
import EnterprisePricing from "./Enterprise/Pricing";
import BusinessPricing from "./Business/Pricing";
import EducationPricing from "./Education/Pricing";
import IndividualPricing from "./Individual/Pricing";
import GetStarted from "./GetStarted";
import Footer from "./layout/Footer";
import './app.css'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Enterprise />} />
        <Route path="/business" element={<Business />} />
        <Route path="/education" element={<Education />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/enterprisepricing" element={<EnterprisePricing />} />
        <Route path="/businesspricing" element={<BusinessPricing />} />
        <Route path="/educationpricing" element={<EducationPricing />} />
        <Route path="/individualpricing" element={<IndividualPricing />} />
        <Route path="/get-started" element={<GetStarted  />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;