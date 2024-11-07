import React from 'react'
import { Globe } from 'lucide-react';

const footerData = {
    sections: [
    {
        title: "What's new",
        links: [
            { name: 'Surface Book 3', url: '/surface-book-3' },
            { name: 'Surface Pro', url: '/surface-pro' },
            { name: 'OSquare Copilot', url: '/osquare-copilot' },
            { name: 'OSquare 365', url: '/osquare-365' },
            { name: 'Windows 11 apps', url: '/windows-11-apps' }
        ]
    },
    {
        title: 'OSquare Store',
        links: [
            { name: 'Account profile', url: '/account-profile' },
            { name: 'Download Center', url: '/download-center' },
            { name: 'OSquare Store Support', url: '/store-support' },
            { name: 'Extended holiday returns', url: '/holiday-returns' },
            { name: 'Order tracking', url: '/order-tracking' },
            { name: 'Support', url: '/support' }
        ]
    },
    {
        title: 'Education',
        links: [
            { name: 'OSquare in education', url: '/osquare-in-education' },
            { name: 'Devices for education', url: '/devices-for-education' },
            { name: 'OSquare Teams for Education', url: '/osquare-teams-for-education' },
            { name: 'OSquare 365 Education', url: '/osquare-365-education' },
            { name: 'Office Education', url: '/office-education' },
            { name: 'Educator Training', url: '/educator-training' }
        ]
    },
    {
        title: 'Business',
        links: [
            {name: 'OSquare Cloud', url: '/osquare-cloud' },
            {name: 'OSquare Security', url: '/osquare-security' },
            {name: 'Azure', url: '/azure' },
            {name: 'Dynamics 365', url: '/dynamics-365' },
            {name: 'OSquare 365', url: '/osquare-365' },
            {name: 'OSquare Teams', url: '/osquare-teams' }
        ]
    },
    {
        title: 'Developer & IT',
        links: [
            {name: 'Developer Center', url: '/developer-center' },
            {name: 'Documentation', url: '/documentation' },
            {name: 'OSquare Learn', url: '/osquare-learn' },
            {name: 'OSquare Tech Community', url: '/osquare-tech-community' },
            {name: 'Azure Marketplace', url: '/azure-marketplace' },
            {name: 'AppSource', url: '/appsource' }
        ]
    },
    {
        title: 'Company',
        links: [
            {name: 'Careers', url: '/careers'},
            {name: 'About OSquare', url: '/about-osquare'},
            {name: 'Company news', url: '/company-news'},
            {name: 'Privacy at OSquare', url: '/privacy-at-osquare'},
            {name: 'Investors', url: '/investors'},
            {name: 'Sustainability', url: '/sustainability'}
        ]
    }
    ]
  };

const Footer1 = () => {
  return (
    <>
        <footer className="bg-gray-50  text-sm pb-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {/* {footerData.sections.map((section, index) => (
                <div key={index}>
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
                ))} */}
            </div>

            <div className="border-t border-gray-200 justify-center text-center  ">
              <div className=" justify-between md:space-y-0">
                <div className="flex items-center space-x-4">
                  {/* <Globe className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">English (Other)</span> */}
                </div>

                <p className="text-gray-500 text-sm md:text-base text-black justify-center align-center md:justify-start md:align-baseline">Powered by Innovador Solutions</p>
                
                {/* <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-500">
                  <a href="#" className="hover:text-gray-700 hover:underline">Contact OSquare</a>
                  <a href="#" className="hover:text-gray-700 hover:underline">Privacy</a>
                  <a href="#" className="hover:text-gray-700 hover:underline">Terms of use</a>
                  <a href="#" className="hover:text-gray-700 hover:underline">Trademarks</a>
                  <a href="#" className="hover:text-gray-700 hover:underline">About our ads</a>
                  <span>© OSquare {new Date().getFullYear()}</span>
                </div> */}
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer1