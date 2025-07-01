import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiShield, FiClock, FiAward, FiUsers, FiThumbsUp, FiDollarSign } = FiIcons;

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FiShield,
      title: 'Licensed & Insured',
      description: 'Fully licensed electrical contractors with comprehensive insurance for your peace of mind.'
    },
    {
      icon: FiClock,
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency electrical services because electrical problems don\'t wait.'
    },
    {
      icon: FiAward,
      title: '15+ Years Experience',
      description: 'Experienced electricians with the expertise to handle any electrical challenge.'
    },
    {
      icon: FiUsers,
      title: '5000+ Happy Customers',
      description: 'Thousands of satisfied customers trust us with their electrical needs.'
    },
    {
      icon: FiThumbsUp,
      title: 'Quality Guaranteed',
      description: 'We stand behind our work with comprehensive warranties on all services.'
    },
    {
      icon: FiDollarSign,
      title: 'Upfront Pricing',
      description: 'Transparent, competitive pricing with no hidden fees or surprise charges.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose ElectricPro?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We're committed to providing exceptional electrical services with professionalism, reliability, and safety as our top priorities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <SafeIcon icon={reason.icon} className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;