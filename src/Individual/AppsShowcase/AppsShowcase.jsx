import React, { useState } from 'react';
import { ChevronRight, } from 'lucide-react';
import AppCard from './AppCard';
import FeaturedCard from './FeaturedCard';


const topPicks = [
  {
    icon: '/apps/hr360.svg',
    iconColor: 'text-sky-600',
    name: 'HR360Cloud',
    description: 'Optimize your HR processes and manage employee data seamlessly—all in one secure, cloud-based platform.'
  },
  {
    icon:'/apps/iteam.svg',
    iconColor: 'text-green-600',
    name: 'iTeam',
    description: 'Empower your team and streamline project workflows—collaborate, manage tasks, and track progress from anywhere.'
  },  
  {
    icon: '/apps/easyforms.svg',
    iconColor: 'text-sky-600',
    name: 'EasyForms',
    description: 'Create, manage, and automate forms with ease—streamline data collection and improve workflow efficiency.'
  },
  {
    icon: '/apps/leadkonnekt.svg',
    iconColor: 'text-sky-600',
    name: 'LeadKonnekt',
    description: 'Effortlessly generate, manage, and optimize leads—simplify prospecting and enhance your customer acquisition strategy with LeadKonnekt.'
  },
  // {
  //   icon: '/apps/ams.svg',
  //   iconColor: 'text-blue-600',
  //   name: 'AMS',
  //   description: 'Streamline attendance tracking and manage your workforce effortlessly—anytime, anywhere.'
  // },
  {
    icon: '/apps/ischool.svg',
    iconColor: 'text-sky-600',
    name: 'iSchool',
    description: 'Streamline your school operations and manage student data effortlessly—all in one secure, cloud-based platform with iSchool.'
  },
  {
    icon:'/apps/ischoolforme.svg',
    iconColor: 'text-green-600',
    name: 'iSchoolForMe',
    description: 'Simplify your school management with iSchoolForMe—a subscription-based, cloud-powered platform to effortlessly handle student data, academic operations, and communication, all in one secure place.'
  },  
  {
    icon: '/apps/easyfee.svg',
    iconColor: 'text-sky-600',
    name: 'EasyFee',
    description: 'Manage school fees effortlessly with EasyFee—a secure, subscription-based platform designed to streamline payments, track records, and simplify fee collection in one user-friendly system.'
  },
];

// const moreApps = [
//   {
//     icon: '/apps/AMS.png',
//     iconColor: 'text-purple-600',
//     name: 'EasyForms',
//     description: 'Access your apps and files all in one place.'
//   },
//   {
//     icon: '/apps/AMS.png',
//     iconColor: 'text-blue-700',
//     name: 'HR360Cloud',
//     description: 'Safeguard your personal data and devices with an easy-to-use app. Requires a OSquare 365 Personal or Family plan.'
//   },
//   {
//     icon: '/apps/AMS.png',
//     iconColor: 'text-blue-500',
//     name: 'iSchool',
//     description: 'Save and share your files and photos, wherever you go.'
//   },
//   {
//     icon: '/public/apps/AMS.png',
//     iconColor: 'text-purple-600',
//     name: 'iSchool For Me',
//     description: 'Access your apps and files all in one place.'
//   },
//   {
//     icon: '/public/apps/AMS.png',
//     iconColor: 'text-blue-700',
//     name: 'iTeam',
//     description: 'Safeguard your personal data and devices with an easy-to-use app. Requires a OSquare 365 Personal or Family plan.'
//   },
//   {
//     icon: '/public/apps/AMS.png',
//     iconColor: 'text-blue-500',
//     name: 'Soul Whispers',
//     description: 'Save and share your files and photos, wherever you go.'
//   }
// ];

const AppsShowcase = () => {
  const [activeTab, setActiveTab] = useState('top-picks');

  // Determine which list of apps to display based on activeTab
  const displayedApps = activeTab === 'top-picks' ? topPicks : moreApps;

  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('https://your-image-url.com/path-to-image.jpg')" }}
      id='whats-included'
    >
      <div className="space-y-8">
        {/* Header */}
        <div>
          <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
            WHAT'S INCLUDED
          </span>
          <h2 className="mt-2 text-4xl font-semibold text-gray-900">
            Boost your potential with <span
            style={{
              fontFamily: 'Bhineka',
              fontSize: '3rem',
              background: 'linear-gradient(to right, #1E4FCD, #F36F7E)', // Replace with your desired colors
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
            className='mr-0'
          >
            O
          </span>Square
          </h2>
        </div>

        {/* Tabs */}
        {/* <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('top-picks')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'top-picks'
                ? 'bg-[#0F1B4C] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Top picks
          </button>
          <button
            onClick={() => setActiveTab('more-apps')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === 'more-apps'
                ? 'bg-[#0F1B4C] text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            More apps
          </button>
        </div> */}
        
        {/* Featured Card (conditionally rendered) */}
        <FeaturedCard activeTab={activeTab} />

        {/* Apps Grid */}
        <div className="lg:col-span-3 grid p-8 grid-cols-1 sm:grid-cols-4 gap-6">
          {displayedApps.map((app, index) => (
            <AppCard key={index} {...app} />
          ))}
        </div>

        {/* Explore All Link */}
        {/* <div className="flex justify-end">
          <a
            href="#"
            className="inline-flex items-center text-[#0F1B4C] font-semibold hover:underline group"
          >
            Explore all apps
            <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default AppsShowcase;
