import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | ElectricPro Services</title>
        <meta name="description" content="ElectricPro Services privacy policy. Learn how we protect your personal information and maintain your privacy." />
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
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Effective Date:</strong> January 1, 2024
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you request a quote, schedule service, or contact us. This may include:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Name and contact information</li>
                <li>Address and property details</li>
                <li>Service requests and preferences</li>
                <li>Payment information</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li>Provide electrical services and support</li>
                <li>Process payments and manage accounts</li>
                <li>Communicate about services and appointments</li>
                <li>Improve our services and customer experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share information only as necessary to provide services or as required by law.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p className="text-gray-700 mb-6">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg mt-4">
                <p className="text-gray-700">
                  <strong>ElectricPro Services</strong><br />
                  123 Main Street<br />
                  Your City, State 12345<br />
                  Phone: (555) ELECTRIC<br />
                  Email: privacy@electricpro.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Privacy;