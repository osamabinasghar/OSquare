import React, { useState, useEffect } from "react";
import { Globe, Facebook, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer2 = () => {
  const footerData = {
    sections: [
    {
        title: "What's new",
        links: [
            { name: 'Surface Book 3', url: '' },
            { name: 'Surface Pro', url: '' },
            { name: 'OSquare Copilot', url: '' },
            { name: 'OSquare 365', url: '' },
            { name: 'Windows 11 apps', url: '' },
        ]
    },
    {
        title: 'Enterprise',
        links: [
            { name: 'Human Resource', url: '' },
            { name: 'Project Management', url: '' },
            { name: 'Customer Relationship Management', url: '' },
            { name: 'Forms & Workflows', url: '' },
            { name: 'Dedicated Server', url: '' },
            { name: 'Live Support', url: '' },
            { name: 'Customisation', url: '' },
        ]
    },
    {
      title: 'Business',
      links: [
        { name: 'Human Resource', url: '' },
        { name: 'Project Management', url: '' },
        { name: 'Customer Relationship Management', url: '' },
        { name: 'Forms & Workflows', url: '' },
      ]
    },
    {
        title: 'Education',
        links: [
            { name: 'Human Resource', url: '' },
            { name: 'School Management System', url: '' },
            { name: 'Fee Management', url: '' },
            { name: 'Forms', url: '' },
            { name: 'Mobile App', url: '' },
        ]
    },
    {
        title: 'Individual',
        links: [
            { name: 'Project Management', url: '' },
            { name: 'Customer Relationship Management', url: '' },
            { name: 'Forms', url: '' },
            { name: 'Calender', url: '' },
        ]
    },
    ]};

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Track scroll position to toggle "Back to Top" button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-gray-50 pt-12 text-sm pb-5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {footerData.sections.map((section, index) => (
              <div
                key={index}
                className={`${
                  index === 0
                    ? "col-span-2 lg:col-span-2 md:border-r md:pr-6 border-gradient-to-r from-violet-600 to-indigo-600"
                    : ""
                }`}
              >
                <h3 className="font-semibold text-gray-600 mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-gray-500 hover:text-gray-700 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 mb-2 border-t border-gradient-to-r from-violet-600 to-indigo-600">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <Globe className="h-5 w-5 text-gray-500" />
                <span className="text-gray-600">English (Other)</span>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-500">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-900 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                {/* <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a> */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-900 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              Powered by{" "}
              <img src="/Innovador-Solutions.svg" alt="innovador solutions" width={100} />
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-500">
              <a href="#" className="hover:text-gray-700 hover:underline">
                Contact OSquare
              </a>
              <a href="#" className="hover:text-gray-700 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-700 hover:underline">
                Terms of use
              </a>
              <span>© OSquare {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        {showScrollToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 bg-[#172554] text-white p-3 rounded-full shadow-lg hover:bg-[#172554]/75 focus:outline-none transition"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </footer>
    </>
  );
};

export default Footer2;
