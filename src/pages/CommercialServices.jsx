import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadForm from '../components/forms/LeadForm';

const { FiBuilding, FiZap, FiSettings, FiTool, FiShield, FiCheck, FiPhone, FiClock } = FiIcons;

const CommercialServices = () => {
  const services = [
    {
      icon: FiBuilding,
      title: 'Commercial Wiring',
      description: 'Complete electrical wiring solutions for offices, retail, and industrial facilities.',
      features: ['New construction', 'Tenant improvements', 'Code compliance', 'Power distribution'],
      industries: ['Offices', 'Retail', 'Warehouses', 'Manufacturing']
    },
    {
      icon: FiZap,
      title: 'Lighting Systems',
      description: 'Energy-efficient commercial lighting design and installation.',
      features: ['LED retrofits', 'Smart controls', 'Emergency lighting', 'Outdoor lighting'],
      industries: ['Restaurants', 'Hotels', 'Shopping Centers', 'Parking Lots']
    },
    {
      icon: FiSettings,
      title: 'Power Systems',
      description: 'High-voltage power distribution and electrical infrastructure.',
      features: ['Transformers', 'Switchgear', 'Motor controls', 'Backup generators'],
      industries: ['Hospitals', 'Data Centers', 'Schools', 'Government']
    },
    {
      icon: FiTool,
      title: 'Maintenance Programs',
      description: 'Preventive maintenance to keep your business running smoothly.',
      features: ['Scheduled inspections', 'Testing & diagnostics', 'Equipment upgrades', 'Emergency repairs'],
      industries: ['All Industries', 'Multi-tenant', 'Property Management', 'Facilities']
    }
  ];

  const industries = [
    { name: 'Office Buildings', icon: FiBuilding },
    { name: 'Retail Stores', icon: FiBuilding },
    { name: 'Restaurants', icon: FiBuilding },
    { name: 'Warehouses', icon: FiBuilding },
    { name: 'Manufacturing', icon: FiTool },
    { name: 'Healthcare', icon: FiShield },
    { name: 'Education', icon: FiBuilding },
    { name: 'Hospitality', icon: FiBuilding }
  ];

  return (
    <>
      <Helmet>
        <title>Commercial Electrical Services | Business Electricians | ElectricPro Services</title>
        <meta name="description" content="Professional commercial electrical services for businesses, offices, and industrial facilities. Licensed commercial electricians with 24/7 emergency service." />
        <meta name="keywords" content="commercial electrician, business electrical services, commercial wiring, industrial electrical, office electrical, retail electrical" />
        <link rel="canonical" href="https://electricpro.com/services/commercial" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Commercial Electrical Services
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Professional electrical solutions for businesses, offices, and industrial facilities. Keep your operations running with reliable commercial electrical services.
              </p>
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
                  className="border-2 border-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center"
                >
                  Get Commercial Quote
                </Link>
              </div>
              <div className="mt-6 flex items-center">
                <SafeIcon icon={FiClock} className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-gray-200">24/7 Emergency Commercial Service Available</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900"
            >
              <h2 className="text-2xl font-bold mb-6">Request Commercial Electrical Quote</h2>
              <LeadForm title="Get Commercial Electrical Quote" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Commercial Electrical Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrical services designed to keep your business operations running smoothly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card p-8"
              >
                <div className="flex items-start mb-6">
                  <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mr-6">
                    <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-700">
                          <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Industries Served:</h4>
                    <ul className="space-y-2">
                      {service.industries.map((industry) => (
                        <li key={industry} className="flex items-center text-gray-700">
                          <SafeIcon icon={FiBuilding} className="w-4 h-4 text-blue-500 mr-2" />
                          {industry}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="btn-primary"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commercial electrical expertise spans across multiple industries and business types.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <SafeIcon icon={industry.icon} className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Commercial Services */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              24/7 Commercial Emergency Service
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Electrical problems can shut down your business. Our emergency commercial electricians respond quickly to minimize downtime and get you back to business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-700 rounded-lg p-6">
                <h3 className="font-bold mb-2">Power Outages</h3>
                <p className="text-sm">Emergency power restoration for critical business operations.</p>
              </div>
              <div className="bg-red-700 rounded-lg p-6">
                <h3 className="font-bold mb-2">Equipment Failures</h3>
                <p className="text-sm">Rapid response for electrical equipment and system failures.</p>
              </div>
              <div className="bg-red-700 rounded-lg p-6">
                <h3 className="font-bold mb-2">Safety Hazards</h3>
                <p className="text-sm">Immediate response to electrical safety hazards and code violations.</p>
              </div>
            </div>
            <a
              href="tel:+1-555-ELECTRIC"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
              Call Emergency Line
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us for Commercial */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Businesses Choose ElectricPro
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We understand the unique electrical needs of commercial and industrial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiShield} className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Licensed & Bonded</h3>
              <p className="text-gray-600">Fully licensed commercial electrical contractors with proper bonding and insurance for large projects.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiClock} className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Minimal Downtime</h3>
              <p className="text-gray-600">We work efficiently to minimize business disruption and can schedule work during off-hours when needed.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiBuilding} className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Commercial Expertise</h3>
              <p className="text-gray-600">Specialized knowledge of commercial electrical codes, systems, and the unique needs of different industries.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommercialServices;