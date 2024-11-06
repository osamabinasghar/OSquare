import React from 'react';
import { ArrowRight } from 'lucide-react';

const ChoosePlan = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-blue-50/30 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="max-w-xl">
            <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Get started
            </span>
            
            <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Choose your plan
            </h2>
            
            <p className="mt-6 text-xl text-gray-600">
              Create, share, and collaborate with your favorite apps—all in one place.
            </p>

            <div className="mt-10">
              <button className="group inline-flex items-center px-6 py-3 bg-[#0F1B4C] text-white font-semibold rounded-md hover:bg-[#1a2b6d] transition-colors">
                See plans and pricing
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80"
                alt="Woman using laptop"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-semibold">M365</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">OSquare</p>
                    <p className="text-sm text-gray-600">Premium apps included</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-xs">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-sm text-gray-900">
                    Access all premium features with your subscription
                  </p>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-pink-200 to-blue-200 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoosePlan;