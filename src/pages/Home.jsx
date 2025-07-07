import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadForm from '../components/forms/LeadForm';
import ServiceCards from '../components/home/ServiceCards';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUs from '../components/home/WhyChooseUs';

const { FiPhone, FiClock, FiShield, FiAward, FiUsers, FiTool } = FiIcons;

const Home = () => {
  const stats = [
    { icon: FiUsers, number: '5000+', label: 'Happy Customers' },
    { icon: FiTool, number: '15+', label: 'Years Experience' },
    { icon: FiAward, number: '100%', label: 'Licensed & Insured' },
    { icon: FiClock, number: '24/7', label: 'Emergency Service' },
  ];

  return (
    <>
      <Helmet>
        <title>ElectricPro Services - Professional Electrical Contractors | Licensed & Insured</title>
        <meta name="description" content="Professional electrical services for residential and commercial properties. Licensed, insured, and available 24/7. Free estimates on all electrical work." />
        <meta name="keywords" content="electrician, electrical services, residential electrician, commercial electrician, electrical repair, panel upgrade, wiring installation" />
        <meta property="og:title" content="ElectricPro Services - Professional Electrical Contractors" />
        <meta property="og:description" content="Professional electrical services for residential and commercial properties. Licensed, insured, and available 24/7." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.origin} />
        <link rel="canonical" href={window.location.origin} />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 64, 175, 0.85)), url('https://images.unsplash.com/photo-1621905252472-e52b5df73c80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Professional{' '}
                <span className="text-yellow-400">Electrical</span>{' '}
                Services You Can Trust
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Licensed, insured, and experienced electricians providing safe, reliable electrical solutions for your home or business. Available 24/7 for emergencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+1-555-ELECTRIC"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Call (555) ELECTRIC
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 text-center backdrop-blur-sm"
                >
                  Get Free Estimate
                </Link>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <SafeIcon icon={FiShield} className="w-5 h-5 mr-2 text-yellow-400" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiClock} className="w-5 h-5 mr-2 text-yellow-400" />
                  <span>24/7 Emergency</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h2>
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Services Section */}
      <ServiceCards />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Emergency CTA */}
      <section 
        className="text-white py-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.9), rgba(185, 28, 28, 0.9)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Electrical Emergency? We're Here 24/7!
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Don't let electrical problems put your safety at risk. Our emergency electricians are standing by to help you right now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-555-ELECTRIC"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-xl"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                Call Emergency Line
              </a>
              <Link
                to="/emergency"
                className="border-2 border-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 text-center backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Your Community
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We proudly serve residential and commercial customers throughout the metropolitan area.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Downtown', 'North Side', 'South Side', 'East End', 'West End', 'Suburbs', 'Industrial District', 'Commercial Zone'].map((area) => (
              <div key={area} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/service-areas" className="btn-primary inline-block">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;