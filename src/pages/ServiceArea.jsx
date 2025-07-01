import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiPhone, FiClock, FiTruck, FiUsers, FiAward } = FiIcons;

const ServiceArea = () => {
  const primaryAreas = [
    {
      name: 'Downtown',
      description: 'Serving the heart of the city with residential and commercial electrical services.',
      services: ['High-rise buildings', 'Historic homes', 'Business districts', 'Condominiums'],
      responseTime: '15-30 minutes'
    },
    {
      name: 'North Side',
      description: 'Comprehensive electrical services for suburban homes and local businesses.',
      services: ['Single-family homes', 'Shopping centers', 'Schools', 'Medical facilities'],
      responseTime: '20-35 minutes'
    },
    {
      name: 'South Side',
      description: 'Professional electrical contractors serving residential and industrial areas.',
      services: ['Residential neighborhoods', 'Manufacturing facilities', 'Warehouses', 'Retail stores'],
      responseTime: '20-35 minutes'
    },
    {
      name: 'East End',
      description: 'Reliable electrical services for growing communities and new developments.',
      services: ['New construction', 'Planned communities', 'Commercial centers', 'Home developments'],
      responseTime: '25-40 minutes'
    }
  ];

  const additionalAreas = [
    'West End', 'Suburbs', 'Industrial District', 'Commercial Zone',
    'Riverside', 'Hillside', 'Parkview', 'Midtown'
  ];

  const serviceStats = [
    { icon: FiTruck, number: '24/7', label: 'Emergency Response' },
    { icon: FiUsers, number: '5000+', label: 'Customers Served' },
    { icon: FiAward, number: '15+', label: 'Years Experience' },
    { icon: FiClock, number: '< 1 Hour', label: 'Average Response' }
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas | ElectricPro Services Coverage | Local Electricians</title>
        <meta name="description" content="ElectricPro Services covers all major areas in the metropolitan region. Professional electrical services available 24/7 with fast response times." />
        <meta name="keywords" content="electrical service areas, local electrician, electrical coverage area, emergency electrical service areas" />
        <link rel="canonical" href="https://electricpro.com/service-area" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Service Areas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Proudly serving residential and commercial customers throughout the metropolitan area with professional electrical services and emergency response.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Primary Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, reliable electrical services with guaranteed response times in our primary coverage areas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {primaryAreas.map((area, index) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start mb-6">
                  <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.name}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="flex items-center text-sm text-green-600 font-semibold">
                      <SafeIcon icon={FiClock} className="w-4 h-4 mr-2" />
                      Response Time: {area.responseTime}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">We Serve:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {area.services.map((service) => (
                      <li key={service} className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Link
                    to="/contact"
                    className="text-yellow-600 hover:text-yellow-700 font-semibold"
                  >
                    Get Service in {area.name} →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We also provide electrical services to these surrounding areas with competitive response times.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-yellow-50 hover:shadow-md transition-all duration-300"
              >
                <SafeIcon icon={FiMapPin} className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Info */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expanding Our Reach
              </h2>
              <p className="text-xl mb-6">
                Our service area continues to grow as we expand to serve more communities throughout the region. We're committed to providing the same high-quality electrical services to all areas we serve.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <SafeIcon icon={FiTruck} className="w-5 h-5 mr-3" />
                  <span>Fully equipped service vehicles</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiClock} className="w-5 h-5 mr-3" />
                  <span>24/7 emergency response</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiUsers} className="w-5 h-5 mr-3" />
                  <span>Licensed electricians in all areas</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+1-555-ELECTRIC"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Call (555) ELECTRIC
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center"
                >
                  Check Your Area
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 text-gray-900"
            >
              <h3 className="text-2xl font-bold mb-6">Don't See Your Area?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking to expand our service area. Contact us to see if we can provide electrical services in your location.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="font-medium">Emergency Service</span>
                  <span className="text-green-600 font-semibold">Available 24/7</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b">
                  <span className="font-medium">Free Estimates</span>
                  <span className="text-green-600 font-semibold">All Areas</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-medium">Licensed & Insured</span>
                  <span className="text-green-600 font-semibold">Guaranteed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;