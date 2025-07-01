import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadForm from '../components/forms/LeadForm';

const { FiMapPin, FiPhone, FiClock, FiTruck, FiUsers, FiAward, FiHome, FiBuilding, FiZap } = FiIcons;

const ServiceAreas = () => {
  const primaryAreas = [
    {
      name: 'Downtown',
      description: 'Serving the heart of the city with comprehensive electrical services for high-rise buildings, historic properties, and modern commercial spaces.',
      zipCodes: ['12345', '12346', '12347'],
      services: ['High-rise electrical', 'Historic home rewiring', 'Commercial buildings', 'Emergency service'],
      responseTime: '15-30 minutes',
      population: '85,000',
      highlights: ['24/7 Emergency Response', 'Historic Building Specialists', 'High-rise Certified']
    },
    {
      name: 'North Side',
      description: 'Comprehensive electrical services for suburban communities, family homes, and local businesses throughout the northern districts.',
      zipCodes: ['12350', '12351', '12352'],
      services: ['Residential rewiring', 'Panel upgrades', 'Smart home installation', 'Landscape lighting'],
      responseTime: '20-35 minutes',
      population: '120,000',
      highlights: ['Family-Owned Trusted', 'Smart Home Experts', 'Rapid Response']
    },
    {
      name: 'South Side',
      description: 'Professional electrical contractors serving growing residential neighborhoods and expanding industrial facilities.',
      zipCodes: ['12360', '12361', '12362'],
      services: ['New construction', 'Industrial electrical', 'Residential service', 'Code compliance'],
      responseTime: '20-35 minutes',
      population: '95,000',
      highlights: ['New Construction Specialists', 'Industrial Certified', 'Code Experts']
    },
    {
      name: 'East End',
      description: 'Reliable electrical services for new developments, planned communities, and modern commercial centers.',
      zipCodes: ['12370', '12371', '12372'],
      services: ['New developments', 'Commercial centers', 'Modern homes', 'Energy efficiency'],
      responseTime: '25-40 minutes',
      population: '110,000',
      highlights: ['New Development Experts', 'Energy Efficiency Focus', 'Modern Solutions']
    },
    {
      name: 'West End',
      description: 'Serving established neighborhoods and commercial districts with reliable electrical solutions.',
      zipCodes: ['12380', '12381', '12382'],
      services: ['Established homes', 'Commercial districts', 'Electrical upgrades', 'Maintenance'],
      responseTime: '25-40 minutes',
      population: '88,000',
      highlights: ['Established Community Focus', 'Upgrade Specialists', 'Maintenance Programs']
    },
    {
      name: 'Suburbs',
      description: 'Complete electrical services for suburban communities, from routine maintenance to major installations.',
      zipCodes: ['12390', '12391', '12392', '12393'],
      services: ['Suburban homes', 'Pool electrical', 'Outdoor lighting', 'Home automation'],
      responseTime: '30-45 minutes',
      population: '150,000',
      highlights: ['Suburban Specialists', 'Pool & Spa Electrical', 'Home Automation']
    }
  ];

  const serviceStats = [
    { icon: FiTruck, number: '24/7', label: 'Emergency Response', description: 'Available in all service areas' },
    { icon: FiUsers, number: '5000+', label: 'Customers Served', description: 'Across all locations' },
    { icon: FiMapPin, number: '50+', label: 'Square Miles', description: 'Service coverage area' },
    { icon: FiClock, number: '< 1 Hour', label: 'Average Response', description: 'In primary areas' }
  ];

  const serviceTypes = [
    {
      icon: FiHome,
      title: 'Residential Services',
      areas: 'All Areas',
      description: 'Complete home electrical solutions'
    },
    {
      icon: FiBuilding,
      title: 'Commercial Services',
      areas: 'All Areas',
      description: 'Business electrical installations'
    },
    {
      icon: FiZap,
      title: 'Emergency Services',
      areas: '24/7 Coverage',
      description: 'Urgent electrical repairs'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas | ElectricPro Coverage Map | Local Electrical Services</title>
        <meta name="description" content="ElectricPro Services covers Downtown, North Side, South Side, East End, West End, and Suburbs. Professional electrical services with fast response times in your area." />
        <meta name="keywords" content="electrical service areas, local electrician coverage, electrical contractors near me, service area map, electrical emergency coverage" />
        <link rel="canonical" href="https://electricpro.com/service-areas" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "ElectricPro Services",
            "serviceArea": primaryAreas.map(area => ({
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "40.7128",
                "longitude": "-74.0060"
              },
              "geoRadius": "10000",
              "name": area.name
            }))
          })}
        </script>
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
              Proudly serving over 650,000 residents across the metropolitan area with professional electrical services, emergency response, and guaranteed satisfaction.
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
                Check Your Area
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Coverage Stats */}
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
                <div className="text-gray-900 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.description}</div>
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
              Fast, reliable electrical services with guaranteed response times in our primary coverage areas. Licensed electricians serving your community.
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
                  <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.name}</h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <span className="font-semibold text-gray-900">Population:</span>
                        <span className="text-gray-600 ml-1">{area.population}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Response:</span>
                        <span className="text-green-600 ml-1 font-semibold">{area.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Service Specialties:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {area.services.map((service) => (
                      <div key={service} className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2 flex-shrink-0"></div>
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Zip Codes Served:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.zipCodes.map((zip) => (
                      <span
                        key={zip}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {zip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Area Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Link
                    to="/contact"
                    className="text-yellow-600 hover:text-yellow-700 font-semibold inline-flex items-center"
                  >
                    Get Service in {area.name}
                    <SafeIcon icon={FiMapPin} className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Types by Area */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services Available in All Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              No matter where you're located in our service area, you have access to our complete range of electrical services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceTypes.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 text-center hover:bg-yellow-50 hover:shadow-md transition-all duration-300"
              >
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-yellow-600 font-semibold mb-3">{service.areas}</p>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA with Service Request */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Schedule Service?
              </h2>
              <p className="text-xl mb-6">
                Our local electricians are standing by to serve your area. Fast response times, professional service, and guaranteed satisfaction.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <SafeIcon icon={FiClock} className="w-5 h-5 mr-3 text-yellow-400" />
                  <span>Same-day service available</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiTruck} className="w-5 h-5 mr-3 text-yellow-400" />
                  <span>Fully equipped service vehicles</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiUsers} className="w-5 h-5 mr-3 text-yellow-400" />
                  <span>Licensed electricians in your area</span>
                </li>
                <li className="flex items-center">
                  <SafeIcon icon={FiAward} className="w-5 h-5 mr-3 text-yellow-400" />
                  <span>100% satisfaction guarantee</span>
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
                  to="/emergency"
                  className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center"
                >
                  Emergency Service
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 text-gray-900"
            >
              <h3 className="text-2xl font-bold mb-6">Request Service in Your Area</h3>
              <LeadForm title="Schedule Service" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Area Coverage Map Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Expanding Service Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're continuously expanding our service area to serve more communities. Don't see your area listed? Contact us - we may still be able to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Industrial District</h3>
              <p className="text-gray-600 text-sm">Commercial & industrial electrical services</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Commercial Zone</h3>
              <p className="text-gray-600 text-sm">Business electrical installations</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Riverside</h3>
              <p className="text-gray-600 text-sm">Waterfront properties & marina electrical</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <h3 className="font-bold text-gray-900 mb-2">Hillside</h3>
              <p className="text-gray-600 text-sm">Hillside homes & challenging installations</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Check If We Serve Your Area
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreas;