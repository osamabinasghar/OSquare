import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);
  const [showSupportDropdown, setShowSupportDropdown] = useState(false);

  const productsDropdownRef = useRef(null);
  const resourcesDropdownRef = useRef(null);
  const supportDropdownRef = useRef(null);

  // Toggle dropdown when "Products" button is clicked
  const toggleProductsDropdown = () => {
    setShowProductsDropdown(prevState => !prevState);
    setShowResourcesDropdown(false); // Close other dropdown
  };

  // Toggle dropdown when "Resources" button is clicked
  const toggleResourcesDropdown = () => {
    setShowResourcesDropdown(prevState => !prevState);
    setShowProductsDropdown(false); // Close other dropdown
  };

  const toggleSupportDropdown = () => {
    setShowSupportDropdown(prev => !prev);
    setShowProductsDropdown(false);
    setShowResourcesDropdown(false);
  };

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsDropdownRef.current && !productsDropdownRef.current.contains(event.target) &&
        resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target) &&
        supportDropdownRef.current && !supportDropdownRef.current.contains(event.target)
      ) {
        setShowProductsDropdown(false);
        setShowResourcesDropdown(false);
        setShowSupportDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full">
      <header className="bg-white shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-5">
          <div className="flex items-center gap-x-6">
          <a href="/">
            <span className='flex items-center'>
              <img src='/icon.svg' className='h-8 mr-2' /> {/* Adjust margin here */}
              <span style={{fontSize: '2rem'}}>|</span>
              <img src="/Logo.svg" alt="OSquare" className="h-8 ml-2" /> {/* Adjust margin here */}
            </span>
          </a>

            {/* Navigation Links */}
            <div className="hidden lg:flex lg:gap-x-6 ml-8 relative">
              
              {/* Products Dropdown */}
              <div 
                className="relative"
                onClick={toggleProductsDropdown}
                ref={productsDropdownRef}
              >
                <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                  Products
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>
                
                {/* Full-Width Multi-Column Dropdown Menu */}
                {showProductsDropdown && (
                  <div className="absolute top-full mt-7 w-[70rem] bg-white border-t border-gray-200 shadow-lg z-20 shadow-xl overflow-y-auto scrollbar-hide"  style={{ maxHeight: '500px' }} >
                    <div className="mx-auto max-w-7xl p-6 grid grid-cols-5 border-b-2 border-blue-900">
                      {/* Column 1 */}
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-2">For home</h3>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Pricing for home</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">For families</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">For individuals</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">For students</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">See all home</a>
                      </div>

                      {/* Column 2 */}
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-2">For business</h3>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Pricing for business</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">For small business</a>
                      </div>

                      {/* Column 3 */}
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-2">For enterprise</h3>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Pricing for enterprise</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">For enterprise</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">For frontline workers</a>
                      </div>

                      {/* Column 4 */}
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-2">Apps and services</h3>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Microsoft 365 Copilot</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Excel</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Microsoft Teams</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Word</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">OneDrive</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">See all apps and services</a>
                      </div>

                      {/* Column 5 */}
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm mb-2">More</h3>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Microsoft Office</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Windows 365</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Microsoft Viva</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Microsoft Authenticator</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">What's new</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Planner</a>
                        <a href="#" className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">Clipchamp</a>
                      </div>
                    </div>
                  </div>
                )}

              </div>

              <a href="#" className="text-sm text-gray-700 hover:text-gray-900">
                Plans and pricing
              </a>

              {/* Single-Column Dropdown for Resources */}
              <div 
                className="relative"
                onClick={toggleResourcesDropdown}
                ref={resourcesDropdownRef}
              >
                <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                  Resources
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>

                {showResourcesDropdown && (
                  <div className="absolute top-full mt-7 w-56 bg-white border border-gray-200 shadow-lg z-20">
                    <ul className="p-4 border-b-2 border-blue-900">
                      <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a href="#">Documentation</a>
                      </li>
                      <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a href="#">API Reference</a>
                      </li>
                      <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a href="#">Community Forum</a>
                      </li>
                      <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a href="#">Tutorials</a>
                      </li>
                      <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a href="#">Blog</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              {/* Support Dropdown */}
              <div 
                className="relative"
                onClick={toggleSupportDropdown}
                ref={supportDropdownRef}
              >
                <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                  Support
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>

                {showSupportDropdown && (
                  <div className="absolute top-full mt-7 w-56 bg-white border border-gray-200 shadow-lg z-20">
                    <ul className="p-4 border-b-2 border-blue-900">
                      <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a href="#">Contact Support</a>
                      </li>
                      <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a href="#">Live Chat</a>
                      </li>
                      <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a href="#">Submit a Ticket</a>
                      </li>
                      <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a href="#">Help Center</a>
                      </li>
                      <li className="block text-sm text-gray-700 hover:bg-gray-100 p-2 rounded">
                        <a href="#">FAQ</a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
