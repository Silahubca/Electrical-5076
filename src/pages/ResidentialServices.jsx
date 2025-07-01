import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadForm from '../components/forms/LeadForm';

const { FiHome, FiZap, FiSettings, FiTool, FiShield, FiCheck, FiPhone } = FiIcons;

const ResidentialServices = () => {
  const services = [
    {
      icon: FiZap,
      title: 'Electrical Repairs',
      description: 'Expert diagnosis and repair of all home electrical issues.',
      features: ['Outlet repair', 'Switch replacement', 'Circuit troubleshooting', 'Wiring fixes'],
      price: 'Starting at $89'
    },
    {
      icon: FiSettings,
      title: 'Panel Upgrades',
      description: 'Modernize your electrical panel for safety and capacity.',
      features: ['200-amp service', 'Code compliance', 'Safety improvements', 'Permit handling'],
      price: 'Starting at $1,200'
    },
    {
      icon: FiTool,
      title: 'Wiring Installation',
      description: 'Complete rewiring services for homes of all ages.',
      features: ['New construction', 'Home rewiring', 'Additional circuits', 'Code updates'],
      price: 'Custom quote'
    },
    {
      icon: FiHome,
      title: 'Lighting Solutions',
      description: 'Professional lighting installation and upgrades.',
      features: ['LED upgrades', 'Recessed lighting', 'Ceiling fans', 'Landscape lighting'],
      price: 'Starting at $150'
    },
    {
      icon: FiShield,
      title: 'Safety Inspections',
      description: 'Comprehensive electrical safety assessments.',
      features: ['Code compliance', 'Safety hazards', 'Insurance inspections', 'Detailed reports'],
      price: 'Starting at $199'
    }
  ];

  const emergencyServices = [
    'Power outages',
    'Sparking outlets',
    'Burning smells',
    'Electrical shocks',
    'Tripped breakers',
    'Storm damage'
  ];

  return (
    <>
      <Helmet>
        <title>Residential Electrical Services | Home Electricians | ElectricPro Services</title>
        <meta name="description" content="Professional residential electrical services including repairs, installations, panel upgrades, and safety inspections. Licensed electricians serving homeowners." />
        <meta name="keywords" content="residential electrician, home electrical services, electrical repair, panel upgrade, home rewiring, electrical installation" />
        <link rel="canonical" href="https://electricpro.com/services/residential" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Residential Electrical Services
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Complete electrical solutions for your home. From simple repairs to major upgrades, our licensed electricians ensure your home's electrical system is safe and reliable.
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
                  className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center"
                >
                  Get Free Estimate
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900"
            >
              <h2 className="text-2xl font-bold mb-6">Get Your Free Home Electrical Estimate</h2>
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Residential Electrical Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional electrical services to keep your home safe, efficient, and up to code.
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
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-yellow-600 mb-6">{service.price}</div>
                <Link
                  to="/contact"
                  className="btn-primary w-full text-center block"
                >
                  Get Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              24/7 Emergency Electrical Services
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Electrical emergencies can't wait. Our emergency electricians are available around the clock for urgent home electrical issues.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {emergencyServices.map((service) => (
              <div key={service} className="flex items-center justify-center bg-red-700 rounded-lg p-4">
                <SafeIcon icon={FiCheck} className="w-5 h-5 mr-2" />
                <span className="capitalize font-medium">{service}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="tel:+1-555-ELECTRIC"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
              Call Emergency Line Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Homeowners Choose ElectricPro
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing safe, reliable electrical services for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiShield} className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed electrical contractors with comprehensive insurance coverage for your protection.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiCheck} className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600">We stand behind our work with comprehensive warranties on all residential electrical services.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiHome} className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Home Specialists</h3>
              <p className="text-gray-600">Specialized expertise in residential electrical systems, from vintage homes to new construction.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResidentialServices;