import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadForm from '../components/forms/LeadForm';

const { FiHome, FiBuilding, FiZap, FiTool, FiSettings, FiShield, FiClock, FiCheck } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiZap,
      title: 'Electrical Repairs',
      description: 'Expert diagnosis and repair of all electrical issues, from faulty outlets to complex wiring problems.',
      features: ['Circuit troubleshooting', 'Outlet repair', 'Switch replacement', 'Wiring fixes'],
      link: '/services/residential'
    },
    {
      icon: FiSettings,
      title: 'Panel Upgrades',
      description: 'Modernize your electrical panel to meet current codes and handle increased electrical demands.',
      features: ['200-amp service', 'Code compliance', 'Safety improvements', 'Increased capacity'],
      link: '/services/residential'
    },
    {
      icon: FiTool,
      title: 'Wiring Installation',
      description: 'Complete wiring services for new construction, renovations, and electrical system upgrades.',
      features: ['New construction', 'Rewiring', 'Additional circuits', 'Code compliance'],
      link: '/services/residential'
    },
    {
      icon: FiHome,
      title: 'Lighting Solutions',
      description: 'Professional lighting installation and design for both indoor and outdoor applications.',
      features: ['LED upgrades', 'Landscape lighting', 'Recessed lighting', 'Smart lighting'],
      link: '/services/residential'
    },
    {
      icon: FiBuilding,
      title: 'Commercial Services',
      description: 'Comprehensive electrical services for businesses, offices, and industrial facilities.',
      features: ['Commercial wiring', 'Maintenance', 'Power systems', 'Emergency service'],
      link: '/services/commercial'
    },
    {
      icon: FiShield,
      title: 'Safety Inspections',
      description: 'Thorough electrical safety inspections to identify potential hazards and code violations.',
      features: ['Safety assessment', 'Code compliance', 'Insurance inspections', 'Detailed reports'],
      link: '/contact'
    }
  ];

  const emergencyServices = [
    'Power outages',
    'Electrical fires',
    'Sparking outlets',
    'Burning smells',
    'Electrical shocks',
    'Storm damage'
  ];

  return (
    <>
      <Helmet>
        <title>Electrical Services | Residential & Commercial | ElectricPro Services</title>
        <meta name="description" content="Complete electrical services including repairs, installations, panel upgrades, and emergency service. Licensed electricians serving residential and commercial customers." />
        <meta name="keywords" content="electrical services, electrician, electrical repair, panel upgrade, wiring installation, commercial electrical, residential electrical" />
        <link rel="canonical" href="https://electricpro.com/services" />
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
              Professional Electrical Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              From simple repairs to complex installations, we provide comprehensive electrical solutions for homes and businesses. Licensed, insured, and available 24/7.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="tel:+1-555-ELECTRIC"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Call (555) ELECTRIC
              </a>
              <Link
                to="/contact"
                className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Get Free Estimate
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer a complete range of electrical services to meet all your residential and commercial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card p-8"
              >
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-2" />
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
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Residential */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiHome} className="w-12 h-12 text-yellow-500 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Residential Services</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Complete electrical solutions for your home, from simple repairs to major upgrades.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                  <span>Outlet & switch installation</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                  <span>Ceiling fan installation</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                  <span>Home rewiring</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                  <span>Smart home integration</span>
                </li>
              </ul>
              <Link
                to="/services/residential"
                className="btn-primary"
              >
                View Residential Services
              </Link>
            </motion.div>

            {/* Commercial */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiBuilding} className="w-12 h-12 text-yellow-500 mr-4" />
                <h2 className="text-3xl font-bold text-gray-900">Commercial Services</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Professional electrical solutions for businesses, offices, and industrial facilities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                  <span>Commercial wiring</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                  <span>Lighting systems</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                  <span>Power distribution</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3" />
                  <span>Preventive maintenance</span>
                </li>
              </ul>
              <Link
                to="/services/commercial"
                className="btn-primary"
              >
                View Commercial Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiClock} className="w-12 h-12 text-white mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold">24/7 Emergency Service</h2>
              </div>
              <p className="text-xl mb-8">
                Electrical emergencies don't wait for business hours. Our emergency electricians are available around the clock to handle urgent electrical issues.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {emergencyServices.map((service) => (
                  <div key={service} className="flex items-center">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 mr-2" />
                    <span className="capitalize">{service}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+1-555-ELECTRIC"
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center"
                >
                  Call Emergency Line
                </a>
                <Link
                  to="/emergency"
                  className="border-2 border-white hover:bg-white hover:text-red-600 font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6">Need Service Now?</h3>
              <LeadForm title="Emergency Service Request" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;