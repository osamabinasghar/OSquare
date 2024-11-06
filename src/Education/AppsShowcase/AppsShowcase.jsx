import React, { useState } from 'react';
import { Sticker, FileText, Table, Mail, Grid, Shield, Cloud, ChevronRight } from 'lucide-react';
import AppCard from './AppCard';
import FeaturedCard from './FeaturedCard';

const apps = [
  {
    icon: Sticker,
    iconColor: 'text-blue-600',
    name: 'AMS',
    description: 'Elevate your writing and create beautiful documents—anywhere, anytime.'
  },
  {
    icon: Sticker,
    iconColor: 'text-green-600',
    name: 'Aasaann',
    description: 'Turn data into insights with free and premium spreadsheets.'
  },
  {
    icon: Sticker,
    iconColor: 'text-sky-600',
    name: 'EasyFee',
    description: 'Manage your email, calendar, tasks, and contacts in one location.'
  },
  {
    icon: Sticker,
    iconColor: 'text-purple-600',
    name: 'EasyForms',
    description: 'Access your apps and files all in one place.'
  },
  {
    icon: Sticker,
    iconColor: 'text-blue-700',
    name: 'HR360Cloud',
    description: 'Safeguard your personal data and devices with an easy-to-use app. Requires a OSquare 365 Personal or Family plan.'
  },
  {
    icon: Sticker,
    iconColor: 'text-blue-500',
    name: 'iSchool',
    description: 'Save and share your files and photos, wherever you go.'
  },
  {
    icon: Sticker,
    iconColor: 'text-purple-600',
    name: 'iSchool For Me',
    description: 'Access your apps and files all in one place.'
  },
  {
    icon: Sticker,
    iconColor: 'text-blue-700',
    name: 'iTeam',
    description: 'Safeguard your personal data and devices with an easy-to-use app. Requires a OSquare 365 Personal or Family plan.'
  },
  {
    icon: Sticker,
    iconColor: 'text-blue-500',
    name: 'Soul Whispers',
    description: 'Save and share your files and photos, wherever you go.'
  }
];

const AppsShowcase = () => {
  const [activeTab, setActiveTab] = useState('top-picks');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id='whats-included'>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
            WHAT'S INCLUDED
          </span>
          <h2 className="mt-2 text-4xl font-semibold text-gray-900">
            Boost your potential with O Square
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4">
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
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured Card */}
          <FeaturedCard />
          
          {/* App Cards */}
          <div className="lg:col-span-4 grid sm:grid-cols-3 gap-6">
            {apps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>
        </div>

        {/* Explore All Link */}
        <div className="flex justify-end">
          <a
            href="#"
            className="inline-flex items-center text-[#0F1B4C] font-semibold hover:underline group"
          >
            Explore all apps
            <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppsShowcase;