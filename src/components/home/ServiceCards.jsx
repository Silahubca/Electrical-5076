import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiHome, FiBuilding, FiZap, FiTool, FiShield, FiClock } = FiIcons;

const ServiceCards = () => {
  const services = [
    {
      icon: FiHome,
      title: 'Residential Services',
      description: 'Complete electrical solutions for your home including wiring, outlets, lighting, and panel upgrades.',
      features: ['Outlet Installation', 'Lighting Upgrades', 'Panel Replacement', 'Wiring Repair'],
      link: '/services/residential'
    },
    {
      icon: FiBuilding,
      title: 'Commercial Services',
      description: 'Professional electrical services for businesses, offices, and industrial facilities.',
      features: ['Commercial Wiring', 'Lighting Systems', 'Power Distribution', 'Maintenance'],
      link: '/services/commercial'
    },
    {
      icon: FiZap,
      title: 'Emergency Repairs',
      description: '24/7 emergency electrical services for urgent repairs and safety issues.',
      features: ['Power Outages', 'Electrical Faults', 'Safety Hazards', 'Urgent Repairs'],
      link: '/emergency'
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
            Our Electrical Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            From simple repairs to complete electrical installations, we provide comprehensive electrical services for all your needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card p-8 text-center"
            >
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center text-gray-700">
                    <SafeIcon icon={FiTool} className="w-4 h-4 text-yellow-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={service.link}
                className="btn-primary w-full text-center block"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="btn-secondary"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;