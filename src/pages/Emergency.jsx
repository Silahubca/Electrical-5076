import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiClock, FiZap, FiAlertTriangle, FiShield, FiTool, FiCheck } = FiIcons;

const Emergency = () => {
  const emergencyTypes = [
    {
      icon: FiZap,
      title: 'Power Outages',
      description: 'Complete loss of electrical power to your home or business.',
      actions: ['Check circuit breakers', 'Verify with neighbors', 'Call ElectricPro immediately'],
      danger: 'high'
    },
    {
      icon: FiAlertTriangle,
      title: 'Sparking Outlets',
      description: 'Visible sparks from electrical outlets or switches.',
      actions: ['Turn off power at breaker', 'Do not touch the outlet', 'Call emergency service'],
      danger: 'critical'
    },
    {
      icon: FiZap,
      title: 'Burning Smells',
      description: 'Electrical burning odor from outlets, panels, or wiring.',
      actions: ['Turn off main power', 'Evacuate if necessary', 'Call 911 if fire suspected'],
      danger: 'critical'
    },
    {
      icon: FiAlertTriangle,
      title: 'Electrical Shocks',
      description: 'Getting shocked when touching appliances or switches.',
      actions: ['Stop using the appliance', 'Turn off power source', 'Contact electrician immediately'],
      danger: 'high'
    },
    {
      icon: FiZap,
      title: 'Flickering Lights',
      description: 'Lights dimming or flickering throughout your property.',
      actions: ['Check all areas affected', 'Note when it occurs', 'Schedule emergency inspection'],
      danger: 'medium'
    },
    {
      icon: FiTool,
      title: 'Storm Damage',
      description: 'Electrical damage from severe weather or fallen trees.',
      actions: ['Stay away from downed lines', 'Document damage safely', 'Call for emergency repair'],
      danger: 'high'
    }
  ];

  const safetyTips = [
    'Never touch electrical equipment with wet hands',
    'Keep water away from electrical outlets and appliances',
    'Don\'t overload circuits with too many devices',
    'Replace damaged electrical cords immediately',
    'Install GFCI outlets in wet areas',
    'Have your electrical system inspected annually'
  ];

  const responseProcess = [
    {
      step: '1',
      title: 'Call Our Emergency Line',
      description: 'Contact us immediately at (555) ELECTRIC for 24/7 emergency service.'
    },
    {
      step: '2',
      title: 'Emergency Assessment',
      description: 'Our dispatcher will assess your situation and provide immediate safety guidance.'
    },
    {
      step: '3',
      title: 'Rapid Response',
      description: 'A licensed electrician will be dispatched to your location within 30-60 minutes.'
    },
    {
      step: '4',
      title: 'Professional Repair',
      description: 'We\'ll quickly diagnose and repair the problem to restore your electrical service safely.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>24/7 Emergency Electrical Services | ElectricPro Emergency Electricians</title>
        <meta name="description" content="24/7 emergency electrical services for power outages, electrical fires, and urgent electrical problems. Licensed emergency electricians available now." />
        <meta name="keywords" content="emergency electrician, 24/7 electrical service, electrical emergency, power outage repair, emergency electrical repair" />
        <link rel="canonical" href="https://electricpro.com/emergency" />
      </Helmet>

      {/* Emergency Hero */}
      <section 
        className="text-white py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.9), rgba(185, 28, 28, 0.9)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiZap} className="w-12 h-12 text-red-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Electrical Emergency?
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Don't wait! Electrical emergencies can be dangerous. Our licensed emergency electricians are available 24/7 to help you right now.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <a
                href="tel:+1-555-ELECTRIC"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
              >
                <SafeIcon icon={FiPhone} className="w-6 h-6 mr-3" />
                CALL (555) ELECTRIC NOW
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center space-x-6 text-sm"
            >
              <div className="flex items-center">
                <SafeIcon icon={FiClock} className="w-5 h-5 mr-2" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiShield} className="w-5 h-5 mr-2" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center">
                <SafeIcon icon={FiTool} className="w-5 h-5 mr-2" />
                <span>30-60 Min Response</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Electrical Emergencies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recognize the signs of electrical emergencies and know what to do before help arrives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {emergencyTypes.map((emergency, index) => (
              <motion.div
                key={emergency.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                  emergency.danger === 'critical' 
                    ? 'border-red-500' 
                    : emergency.danger === 'high' 
                    ? 'border-orange-500' 
                    : 'border-yellow-500'
                }`}
              >
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    emergency.danger === 'critical' 
                      ? 'bg-red-100' 
                      : emergency.danger === 'high' 
                      ? 'bg-orange-100' 
                      : 'bg-yellow-100'
                  }`}>
                    <SafeIcon icon={emergency.icon} className={`w-6 h-6 ${
                      emergency.danger === 'critical' 
                        ? 'text-red-600' 
                        : emergency.danger === 'high' 
                        ? 'text-orange-600' 
                        : 'text-yellow-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{emergency.title}</h3>
                    <p className="text-gray-600 text-sm">{emergency.description}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What to do:</h4>
                  <ul className="space-y-1">
                    {emergency.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start text-sm text-gray-700">
                        <span className="text-green-500 mr-2">•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`text-xs font-semibold uppercase tracking-wide ${
                  emergency.danger === 'critical' 
                    ? 'text-red-600' 
                    : emergency.danger === 'high' 
                    ? 'text-orange-600' 
                    : 'text-yellow-600'
                }`}>
                  {emergency.danger} Priority
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Emergency Response Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fast, professional emergency electrical service when you need it most.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {responseProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Electrical Safety Tips
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Prevent electrical emergencies with these important safety guidelines for your home and business.
              </p>
              <ul className="space-y-4">
                {safetyTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mr-3 mt-1" />
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-red-600 text-white rounded-2xl p-8"
            >
              <div className="text-center">
                <SafeIcon icon={FiPhone} className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
                <p className="text-xl mb-6">Available 24 hours a day, 7 days a week</p>
                <a
                  href="tel:+1-555-ELECTRIC"
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 inline-block"
                >
                  (555) ELECTRIC
                </a>
                <p className="text-sm mt-4 opacity-90">
                  Licensed electricians • Fully insured • Rapid response
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.9), rgba(30, 64, 175, 0.9)), url('https://images.unsplash.com/photo-1621905252472-e52b5df73c80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
              Need Non-Emergency Electrical Service?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              For routine electrical work, installations, and maintenance, contact us for a free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Get Free Estimate
              </Link>
              <Link
                to="/services"
                className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Emergency;