import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiMenu, FiX, FiZap, FiChevronDown } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'All Services', href: '/services' },
        { name: 'Residential', href: '/services/residential' },
        { name: 'Commercial', href: '/services/commercial' },
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Licensed & Insured • Available 24/7</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+1-555-ELECTRIC" className="flex items-center space-x-1 hover:text-yellow-400">
              <SafeIcon icon={FiPhone} className="w-4 h-4" />
              <span>(555) ELECTRIC</span>
            </a>
            <Link to="/cms/login" className="text-xs opacity-75 hover:opacity-100">
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <SafeIcon icon={FiZap} className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-blue-900">ElectricPro</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center space-x-1 text-gray-700 hover:text-yellow-500 font-medium transition-colors ${
                          isActive(item.href) ? 'text-yellow-500' : ''
                        }`}
                      >
                        <span>{item.name}</span>
                        <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
                      </button>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border py-2"
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-yellow-50 hover:text-yellow-500"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-gray-700 hover:text-yellow-500 font-medium transition-colors ${
                        isActive(item.href) ? 'text-yellow-500' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/emergency"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                Emergency Service
              </Link>
              <a href="tel:+1-555-ELECTRIC" className="btn-primary">
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block text-gray-700 hover:text-yellow-500 font-medium ${
                      isActive(item.href) ? 'text-yellow-500' : ''
                    }`}
                    onClick={handleMobileMenuClose}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.slice(1).map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block text-gray-600 hover:text-yellow-500"
                          onClick={handleMobileMenuClose}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t space-y-2">
                <Link
                  to="/emergency"
                  className="block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold text-center"
                  onClick={handleMobileMenuClose}
                >
                  Emergency Service
                </Link>
                <a href="tel:+1-555-ELECTRIC" className="block btn-primary text-center">
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
};

export default Header;