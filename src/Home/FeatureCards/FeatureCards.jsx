import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    category: 'Designer',
    title: 'OSquare Designer',
    description: 'Unleash your creativity: Design and edit anything you can imagine with AI.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    buttonText: 'Learn more',
    buttonVariant: 'dark',
    bgColor: 'bg-purple-100'
  },
  {
    category: 'OSquare',
    title: 'Expanding OSquare availability',
    description: 'See expanded availability and purchase options for individuals and organizations, plus added value for subscribers.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80',
    buttonText: 'Read the blog',
    buttonVariant: 'dark',
    bgColor: 'bg-blue-50'
  },
  {
    category: 'OSquare',
    title: 'Get priority access',
    description: 'Enjoy priority access during peak times, get higher usage limits, and use OSquare in your favorite apps, like Word, Excel, PowerPoint, and Outlook.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80',
    buttonText: 'Explore OSquare Pro',
    buttonVariant: 'dark',
    bgColor: 'bg-orange-100'
  }
];

const FeatureCards = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;