import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiTool, FiUsers, FiPhone, FiFileText, FiMapPin, FiZap } = FiIcons;

const Sitemap = () => {
  const siteStructure = [
    {
      section: 'Main Pages',
      icon: FiHome,
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Service Areas', url: '/service-areas' }
      ]
    },
    {
      section: 'Services',
      icon: FiTool,
      links: [
        { name: 'All Services', url: '/services' },
        { name: 'Residential Services', url: '/services/residential' },
        { name: 'Commercial Services', url: '/services/commercial' },
        { name: 'Emergency Services', url: '/emergency' }
      ]
    },
    {
      section: 'Resources',
      icon: FiFileText,
      links: [
        { name: 'Blog', url: '/blog' },
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Sitemap', url: '/sitemap' }
      ]
    },
    {
      section: 'Service Areas',
      icon: FiMapPin,
      links: [
        { name: 'Downtown Service', url: '/service-areas#downtown' },
        { name: 'North Side Service', url: '/service-areas#north-side' },
        { name: 'South Side Service', url: '/service-areas#south-side' },
        { name: 'East End Service', url: '/service-areas#east-end' },
        { name: 'West End Service', url: '/service-areas#west-end' },
        { name: 'Suburban Service', url: '/service-areas#suburbs' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap | ElectricPro Services</title>
        <meta name="description" content="Complete sitemap for ElectricPro Services website. Find all pages and electrical services information." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Website Sitemap</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find all pages and information about ElectricPro Services. Navigate easily to any section of our website.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteStructure.map((section, index) => (
              <motion.div
                key={section.section}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <SafeIcon icon={section.icon} className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.section}</h2>
                </div>
                
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.url}
                        className="text-gray-700 hover:text-yellow-600 transition-colors flex items-center group"
                      >
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-yellow-600 transition-colors"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-blue-900 text-white rounded-lg p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Need Electrical Service?</h2>
            <p className="text-xl mb-8">
              Don't wait - contact ElectricPro Services for all your electrical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-555-ELECTRIC"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                Call (555) ELECTRIC
              </a>
              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Free Estimate
              </Link>
              <Link
                to="/emergency"
                className="bg-red-600 hover:bg-red-700 font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiZap} className="w-5 h-5 mr-2" />
                Emergency Service
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;