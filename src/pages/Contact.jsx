import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadForm from '../components/forms/LeadForm';

const { FiPhone, FiMail, FiMapPin, FiClock, FiMessageSquare, FiSend } = FiIcons;

const Contact = () => {
  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Call Us',
      info: '(555) ELECTRIC',
      link: 'tel:+1-555-ELECTRIC',
      description: '24/7 Emergency Service Available'
    },
    {
      icon: FiMail,
      title: 'Email Us',
      info: 'info@electricpro.com',
      link: 'mailto:info@electricpro.com',
      description: 'We respond within 2 hours'
    },
    {
      icon: FiMapPin,
      title: 'Visit Us',
      info: '123 Main Street, Your City, ST 12345',
      link: '#',
      description: 'Monday - Friday: 7AM - 6PM'
    },
    {
      icon: FiClock,
      title: 'Business Hours',
      info: 'Mon-Fri: 7AM-6PM, Sat: 8AM-4PM',
      link: '#',
      description: 'Emergency service available 24/7'
    }
  ];

  const serviceAreas = [
    'Downtown', 'North Side', 'South Side', 'East End',
    'West End', 'Suburbs', 'Industrial District', 'Commercial Zone'
  ];

  return (
    <>
      <Helmet>
        <title>Contact ElectricPro Services | Get Free Electrical Estimate</title>
        <meta name="description" content="Contact ElectricPro Services for professional electrical services. Get your free estimate today. Available 24/7 for emergency electrical repairs." />
        <meta name="keywords" content="contact electrician, electrical estimate, emergency electrical service, electrical contractor contact" />
        <link rel="canonical" href="https://electricpro.com/contact" />
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
              Contact ElectricPro Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Ready to get started on your electrical project? Contact us today for your free estimate or emergency electrical service.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Your Free Estimate</h2>
              <LeadForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={item.title} className="flex items-start">
                    <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <SafeIcon icon={item.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <a
                        href={item.link}
                        className="text-lg text-yellow-600 hover:text-yellow-700 font-medium"
                      >
                        {item.info}
                      </a>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency CTA */}
              <div className="mt-8 p-6 bg-red-600 text-white rounded-lg">
                <h3 className="text-xl font-bold mb-2">Electrical Emergency?</h3>
                <p className="mb-4">Don't wait! Call our 24/7 emergency line now.</p>
                <a
                  href="tel:+1-555-ELECTRIC"
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-all duration-300 inline-flex items-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Call Emergency Line
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We proudly serve residential and commercial customers throughout the metropolitan area.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900">{area}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust ElectricPro Services for all their electrical needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-555-ELECTRIC"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Call (555) ELECTRIC
              </a>
              <a
                href="mailto:info@electricpro.com"
                className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;