import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | ElectricPro Services</title>
        <meta name="description" content="ElectricPro Services terms of service. Read our service terms and conditions for electrical work." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Effective Date:</strong> January 1, 2024
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Service Agreement</h2>
              <p className="text-gray-700 mb-6">
                By engaging ElectricPro Services for electrical work, you agree to these terms and conditions. All electrical work is performed by licensed electricians in accordance with local electrical codes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Estimates and Pricing</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Free estimates are provided for most electrical work</li>
                <li>Estimates are valid for 30 days unless otherwise specified</li>
                <li>Final pricing may vary based on actual conditions discovered</li>
                <li>Emergency service rates may apply for after-hours calls</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Warranties</h2>
              <p className="text-gray-700 mb-4">We provide warranties on our electrical work:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>1-year warranty on labor for most electrical installations</li>
                <li>Manufacturer warranties apply to all electrical components</li>
                <li>Emergency repairs carry a 90-day warranty on labor</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Payment is due upon completion of work unless other arrangements are made</li>
                <li>We accept cash, check, and major credit cards</li>
                <li>Large projects may require a deposit</li>
                <li>Past due accounts may be subject to finance charges</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Safety and Access</h2>
              <p className="text-gray-700 mb-6">
                Customer must provide safe access to work areas and ensure pets are secured. We reserve the right to postpone work if conditions are unsafe.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                Our liability is limited to the cost of the electrical work performed. We maintain comprehensive insurance for additional protection.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>ElectricPro Services</strong><br />
                  123 Main Street<br />
                  Your City, State 12345<br />
                  Phone: (555) ELECTRIC<br />
                  Email: info@electricpro.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Terms;