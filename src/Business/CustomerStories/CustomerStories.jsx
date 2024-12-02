import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Testimonial from './Testimonial';
import TestimonialNav from './TestimonialNav';

const testimonials = [
  {
    id: 1,
    quote: "OSquare has transformed how our family stays connected and organized.",
    author: "Abid Hussain",
    role: "father",
    image: "https://images.unsplash.com/photo-1559734840-f9509ee5677f?auto=format&fit=crop&q=80",
    products: ['AMS', 'iTeam'],
  },
  {
    id: 2,
    quote: "OSquare has transformed how our family stays connected and organized.",
    author: "Sarah Chen",
    role: "mother",
    image: "https://images.unsplash.com/photo-1559734840-f9509ee5677f?auto=format&fit=crop&q=80",
    products: ['HR360']
  },
  {
    id: 3,
    quote: "I work with data, so I understand [its] importance for very large, organized [projects]. So having that toolset available for my kids is just incredibly powerful.",
    author: "Abid Hussain",
    role: "father",
    image: "https://images.unsplash.com/photo-1559734840-f9509ee5677f?auto=format&fit=crop&q=80",
    products: ['EasyForms', 'LeadKonnekt']
  },
  {
    id: 4,
    quote: "OSquare has transformed how our family stays connected and organized.",
    author: "Sarah Chen",
    role: "mother",
    image: "https://images.unsplash.com/photo-1559734840-f9509ee5677f?auto=format&fit=crop&q=80",
    products: ['AMS', 'iTeam', 'HR360', 'EasyForms', 'LeadKonnekt']
  }
];

const CustomerStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-pink-50/30 py-24" id='customer-stories'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
            CUSTOMERS STORIES
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-gray-900">
            See how customers accomplish more with OSquare
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <Testimonial key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <TestimonialNav
          total={testimonials.length}
          current={currentSlide}
          onChange={setCurrentSlide}
        />
      </div>
    </section>
  );
};

export default CustomerStories;