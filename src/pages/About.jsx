import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiAward, FiShield, FiTool, FiCheck, FiPhone, FiClock, FiThumbsUp } = FiIcons;

const About = () => {
  const stats = [
    { icon: FiUsers, number: '5000+', label: 'Satisfied Customers' },
    { icon: FiTool, number: '15+', label: 'Years in Business' },
    { icon: FiAward, number: '100%', label: 'Licensed & Insured' },
    { icon: FiClock, number: '24/7', label: 'Emergency Service' }
  ];

  const values = [
    {
      icon: FiShield,
      title: 'Safety First',
      description: 'We prioritize safety in every electrical project, following all codes and best practices to protect you and your property.'
    },
    {
      icon: FiThumbsUp,
      title: 'Quality Work',
      description: 'Our experienced electricians deliver high-quality workmanship that stands the test of time, backed by comprehensive warranties.'
    },
    {
      icon: FiUsers,
      title: 'Customer Focus',
      description: 'We build lasting relationships with our customers through honest communication, fair pricing, and exceptional service.'
    }
  ];

  const team = [
    {
      name: 'Mike Anderson',
      role: 'Master Electrician & Owner',
      experience: '20+ years',
      specialties: ['Residential Wiring', 'Panel Upgrades', 'Code Compliance'],
      description: 'Mike founded ElectricPro Services with a commitment to providing safe, reliable electrical solutions for the community.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Commercial Electrical Specialist',
      experience: '15+ years',
      specialties: ['Commercial Wiring', 'Industrial Systems', 'Maintenance Programs'],
      description: 'Sarah leads our commercial division, ensuring businesses stay powered and operational with minimal downtime.'
    },
    {
      name: 'David Chen',
      role: 'Residential Service Manager',
      experience: '12+ years',
      specialties: ['Home Automation', 'LED Lighting', 'Emergency Repairs'],
      description: 'David manages our residential services, helping homeowners with everything from simple repairs to complete rewiring projects.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About ElectricPro Services | Licensed Electrical Contractors</title>
        <meta name="description" content="Learn about ElectricPro Services, your trusted electrical contractors with 15+ years of experience serving residential and commercial customers." />
        <meta name="keywords" content="about electricpro, electrical contractors, licensed electricians, electrical company history, experienced electricians" />
        <link rel="canonical" href="https://electricpro.com/about" />
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
              About ElectricPro Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Your trusted electrical contractor with over 15 years of experience providing safe, reliable electrical solutions for homes and businesses.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                ElectricPro Services was founded in 2009 with a simple mission: to provide safe, reliable, and professional electrical services to our community. What started as a small residential electrical repair business has grown into a full-service electrical contracting company serving both residential and commercial customers.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Over the years, we've built our reputation on quality workmanship, honest pricing, and exceptional customer service. Our team of licensed electricians brings decades of combined experience to every project, from simple outlet installations to complex commercial electrical systems.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Today, we're proud to be the trusted electrical contractor for thousands of satisfied customers throughout the metropolitan area. We continue to invest in the latest technology, training, and certifications to ensure we provide the highest quality electrical services available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+1-555-ELECTRIC"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  Call (555) ELECTRIC
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center"
                >
                  Get Free Estimate
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Professional electrician working"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Serving<br />the Community</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape how we serve our customers and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={value.icon} className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced team of licensed electricians is committed to providing exceptional service and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.experience} Experience</p>
                <p className="text-gray-700 mb-6">{member.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Licenses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Licensed & Certified
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We maintain all required licenses, certifications, and insurance to provide professional electrical services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiShield} className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Master Electrician License</h3>
              <p className="text-gray-600 text-sm">License #EC12345</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiAward} className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Fully Insured</h3>
              <p className="text-gray-600 text-sm">$2M Liability Coverage</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiCheck} className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Bonded Contractors</h3>
              <p className="text-gray-600 text-sm">Surety Bond Protected</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={FiTool} className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Continuing Education</h3>
              <p className="text-gray-600 text-sm">Always Current on Codes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with ElectricPro?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the difference that professional, reliable electrical service makes. Contact us today for your free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;