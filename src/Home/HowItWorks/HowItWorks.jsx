import React, { useState, useCallback } from 'react';
import { Shield, Lightbulb, Zap } from 'lucide-react';
import Feature from './Feature';
import Button from '../../Button';


const initialFeatures = [
  {
    id: 'stay-safer',
    icon: Shield,
    title: 'Stay safer online',
    description: 'Safeguard photos, documents, phones, tablets, and computers with features designed to secure your digital life.',
    details: [
      'Advanced encryption for all your files',
      'Two-factor authentication',
      'Real-time threat detection',
      'Secure password manager'
    ],
    expanded: true,
    highlighted: true
  },
  {
    id: 'bring-ideas',
    icon: Lightbulb,
    title: 'Bring your ideas to life',
    description: 'Transform your concepts into reality with powerful tools for creativity and collaboration.',
    details: [
      'AI-powered brainstorming',
      'Real-time collaboration',
      'Smart templates library',
      'Version control system'
    ],
    expanded: false,
    highlighted: false
  },
  {
    id: 'power-tasks',
    icon: Zap,
    title: 'Power through tasks',
    description: 'Accomplish more in less time with AI-powered productivity tools and seamless integration.',
    details: [
      'Smart task automation',
      'Integrated workflow builder',
      'Progress analytics',
      'Cross-platform sync'
    ],
    expanded: false,
    highlighted: false
  }
];

const HowItWorks = () => {
  const [features, setFeatures] = useState(initialFeatures);
  const [activeImage, setActiveImage] = useState('stay-safer');

  const toggleFeature = useCallback((id) => {
    setFeatures(prev => prev.map(feature => ({
      ...feature,
      expanded: feature.id === id,
      highlighted: feature.id === id
    })));
    setActiveImage(id);
  }, []);

  const getImageForFeature = (id) => {
    const images = {
      'stay-safer': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80',
      'bring-ideas': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
      'power-tasks': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80'
    };
    return images[id];
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-purple-50 py-24" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          <span className="text-[#172554] font-semibold tracking-wide uppercase text-sm">
            HOW IT WORKS
          </span>
          <h2 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Help maximize your everyday
          </h2>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              {features.map((feature) => (
                <Feature
                  key={feature.id}
                  {...feature}
                  isExpanded={feature.expanded}
                  isHighlighted={feature.highlighted}
                  onToggle={() => toggleFeature(feature.id)}
                />
              ))}
            </div>

            <div className="relative lg:sticky lg:top-8">
              <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-2 shadow-xl ring-1 ring-gray-900/10 transition-all duration-500 ease-in-out">
                <img
                  src={getImageForFeature(activeImage)}
                  alt="Feature preview"
                  className="w-full h-[400px] object-cover rounded-2xl transition-opacity duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-50" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full blur-3xl opacity-50" />
            </div>
          </div>
        </div>
        <Button className="mt-16" text="" size='sm' variant="dark"/> <span className='leading-4'>Learn more about OSquare for home</span>
      </div>
    </section>
  );
};

export default HowItWorks;