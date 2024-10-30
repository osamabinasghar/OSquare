import React, { useState, useEffect  } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 830); // Adjust the scroll threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`w-full bg-white shadow-sm z-50 transition-all duration-300 ${isScrolled ? 'fixed top-0' : 'relative'} bg-whte text-black`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-gray-300">Solutions</a>
            <a href="#" className="hover:text-gray-300">Featured news</a>
            <a href="#" className="hover:text-gray-300">What's included</a>
            <a href="#" className="hover:text-gray-300">Plans</a>
            <a href="#" className="hover:text-gray-300">Customer stories</a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
          <a
               href="#"
               className="mr-5 inline-block rounded-md bg-blue-950 px-4 py-2 text-center font-semibold text-white md:mr-6 lg:mr-8"
             >
               See plans and pricing
             </a>
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
          <a href="#home" className="block px-4 py-2 text-sm hover:bg-gray-600">Home</a>
          <a href="#about" className="block px-4 py-2 text-sm hover:bg-gray-600">About</a>
          <a href="#services" className="block px-4 py-2 text-sm hover:bg-gray-600">Services</a>
          <a href="#contact" className="block px-4 py-2 text-sm hover:bg-gray-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;