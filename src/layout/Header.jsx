import React, { useState, useEffect, useRef } from 'react';
import { ChevronDownIcon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown when "Products" button is clicked
  const toggleDropdown = () => {
    setShowProductsDropdown(prevState => !prevState);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProductsDropdown(false);
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
            <img src="/Logo.svg" alt="OSquare" className="h-6" /> |
            <span className="text-lg text-[#212659] font-bold">O Square</span>

            {/* Navigation Links */}
            <div className="hidden lg:flex lg:gap-x-6 ml-8 relative">
              {/* Products Dropdown */}
              <div 
                className="relative"
                onClick={toggleDropdown}
                ref={dropdownRef}
              >
                <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                  Products
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                </button>
                
                {/* Full-Width Multi-Column Dropdown Menu */}
                {showProductsDropdown && (
                  <div className="absolute top-full mt-6 w-[70rem] bg-white border-t border-gray-200 shadow-lg z-20 shadow-xl overflow-y-auto scrollbar-hide"  style={{ maxHeight: '500px' }} >
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
              <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                Resources
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
              <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
                Support
                <ChevronDownIcon className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-x-8">
            <button className="text-sm text-gray-700 hover:text-gray-900 flex items-center">
              All OSquare
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-gray-900">
              <UserCircleIcon className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
