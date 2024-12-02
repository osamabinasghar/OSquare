import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 550);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = [
      'how-it-works',
      'featured-news',
      'whats-included',
      'demos',
      'plans',
      'customer-stories'
    ];

    const handleScroll = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && window.scrollY >= section.offsetTop - 80) {
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
    setIsResourcesOpen(false);
    const section = document.getElementById(link);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`w-full bg-white shadow-sm z-50 transition-all duration-300 border-t-1 ${isScrolled ? 'fixed top-0' : 'relative'} bg-white text-black`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            <a
              href="#how-it-works"
              onClick={() => handleLinkClick('how-it-works')}
              className={`hover:text-gray-300 ${activeLink === 'how-it-works' ? 'border-b-2 border-blue-950' : ''}`}
            >
              Solutions
            </a>
            <a
              href="#featured-news"
              onClick={() => handleLinkClick('featured-news')}
              className={`hover:text-gray-300 ${activeLink === 'featured-news' ? 'border-b-2 border-blue-950' : ''}`}
            >
              Featured news
            </a>
            <a
              href="#whats-included"
              onClick={() => handleLinkClick('whats-included')}
              className={`hover:text-gray-300 ${activeLink === 'whats-included' ? 'border-b-2 border-blue-950' : ''}`}
            >
              What's included
            </a>
            {/* <a
              href="#demos"
              onClick={() => handleLinkClick('demos')}
              className={`hover:text-gray-300 ${activeLink === 'demos' ? 'border-b-2 border-blue-950' : ''}`}
            >
              Demos
            </a> */}
            <a
              href="#plans"
              onClick={() => handleLinkClick('plans')}
              className={`hover:text-gray-300 ${activeLink === 'plans' ? 'border-b-2 border-blue-950' : ''}`}
            >
              Plans
            </a>
            <a
              href="#customer-stories"
              onClick={() => handleLinkClick('customer-stories')}
              className={`hover:text-gray-300 ${activeLink === 'customer-stories' ? 'border-b-2 border-blue-950' : ''}`}
            >
              Customer stories
            </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/enterprisepricing"
              className="mr-5 inline-block rounded-md bg-blue-950 px-4 py-2 text-center font-semibold text-white md:mr-6 lg:mr-8"
            >
              Try Now
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a href="#home" className="block px-4 py-2 text-sm hover:bg-gray-600" onClick={() => handleLinkClick('home')}>Home</a>
          <a href="#about" className="block px-4 py-2 text-sm hover:bg-gray-600" onClick={() => handleLinkClick('about')}>About</a>
          <a href="#services" className="block px-4 py-2 text-sm hover:bg-gray-600" onClick={() => handleLinkClick('services')}>Services</a>
          <a href="#contact" className="block px-4 py-2 text-sm hover:bg-gray-600" onClick={() => handleLinkClick('contact')}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
