import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiStar } = FiIcons;

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Downtown Resident',
      rating: 5,
      text: 'ElectricPro saved the day when our power went out during a storm. They arrived within an hour and had everything fixed quickly. Professional and reliable!'
    },
    {
      name: 'Mike Chen',
      location: 'Business Owner',
      rating: 5,
      text: 'We needed a complete electrical upgrade for our office. The team was professional, clean, and completed the work on time and within budget. Highly recommend!'
    },
    {
      name: 'Jennifer Martinez',
      location: 'Homeowner',
      rating: 5,
      text: 'From the initial quote to the final inspection, everything was handled perfectly. They installed new outlets and upgraded our panel. Great service!'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our satisfied customers have to say about our electrical services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-600 text-sm">{testimonial.location}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;