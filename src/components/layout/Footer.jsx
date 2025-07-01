import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiClock, FiZap, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Electrical Repairs', link: '/services' },
    { name: 'Panel Upgrades', link: '/services/residential' },
    { name: 'Wiring Installation', link: '/services' },
    { name: 'Lighting Installation', link: '/services' },
    { name: 'Outlet Installation', link: '/services/residential' },
    { name: 'Circuit Breaker Repair', link: '/services' },
    { name: 'Electrical Inspections', link: '/services' },
    { name: 'Emergency Services', link: '/emergency' }
  ];

  const serviceAreas = [
    { name: 'Downtown', link: '/service-areas' },
    { name: 'North Side', link: '/service-areas' },
    { name: 'South Side', link: '/service-areas' },
    { name: 'East End', link: '/service-areas' },
    { name: 'West End', link: '/service-areas' },
    { name: 'Suburbs', link: '/service-areas' },
    { name: 'Industrial District', link: '/service-areas' },
    { name: 'Commercial Zone', link: '/service-areas' }
  ];

  const quickLinks = [
    { name: 'About Us', link: '/about' },
    { name: 'Residential Services', link: '/services/residential' },
    { name: 'Commercial Services', link: '/services/commercial' },
    { name: 'Blog', link: '/blog' },
    { name: 'Contact Us', link: '/contact' },
    { name: 'Emergency Service', link: '/emergency' },
    { name: 'Service Areas', link: '/service-areas' },
    { name: 'Free Estimate', link: '/contact' }
  ];

  // Handle smooth scroll to top for same-page links
  const handleLinkClick = (e, link) => {
    // If it's a same-page link (like service-areas), scroll to top
    if (window.location.pathname === link) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiZap} className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold">ElectricPro</span>
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted electrical contractor providing professional, reliable, and safe electrical services for residential and commercial properties.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-yellow-500" />
                <a href="tel:+1-555-ELECTRIC" className="hover:text-yellow-500 transition-colors">
                  (555) ELECTRIC
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-yellow-500" />
                <a href="mailto:info@electricpro.com" className="hover:text-yellow-500 transition-colors">
                  info@electricpro.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-yellow-500 mt-1" />
                <span className="text-gray-300">
                  123 Main Street<br />
                  Your City, State 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiClock} className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-300">24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.link}
                    onClick={(e) => handleLinkClick(e, service.link)}
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link 
                    to={area.link}
                    onClick={(e) => handleLinkClick(e, area.link)}
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.link}
                    onClick={(e) => handleLinkClick(e, link.link)}
                    className="text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/electricpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <SafeIcon icon={FiFacebook} className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/electricpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                  aria-label="Follow us on Twitter"
                >
                  <SafeIcon icon={FiTwitter} className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/electricpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <SafeIcon icon={FiInstagram} className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/electricpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} ElectricPro Services. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy" 
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/sitemap" 
                className="text-gray-300 hover:text-yellow-500 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="text-xs text-gray-400 space-y-1">
              <p>Licensed Electrical Contractor • License #EC12345 • Fully Insured</p>
              <p>Serving residential and commercial customers with professional electrical services</p>
              <p>
                <Link 
                  to="/service-areas" 
                  className="hover:text-yellow-500 transition-colors"
                >
                  Service Areas:
                </Link>{' '}
                Downtown, North Side, South Side, East End, West End, Suburbs, Industrial District, Commercial Zone
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;