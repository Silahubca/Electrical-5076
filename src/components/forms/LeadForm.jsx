import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUser, FiPhone, FiMail, FiMessageSquare, FiSend } = FiIcons;

const LeadForm = ({ title = "Get Your Free Estimate", className = "" }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Lead form submission:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <div className={`text-center py-8 ${className}`}>
        <div className="bg-green-100 text-green-800 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Thank You!</h3>
          <p>We'll contact you within 24 hours with your free estimate.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your full name"
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: {
                  value: /^[+]?[1-9][\d]{0,15}$/,
                  message: 'Please enter a valid phone number'
                }
              })}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="(555) 123-4567"
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address'
                }
              })}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Type
          </label>
          <select
            {...register('serviceType')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            <option value="residential">Residential Services</option>
            <option value="commercial">Commercial Services</option>
            <option value="emergency">Emergency Repair</option>
            <option value="panel-upgrade">Panel Upgrade</option>
            <option value="wiring">Wiring Installation</option>
            <option value="lighting">Lighting Installation</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Description
          </label>
          <div className="relative">
            <SafeIcon icon={FiMessageSquare} className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <textarea
              {...register('message')}
              rows={4}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
              placeholder="Describe your electrical project or issue..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          {isSubmitting ? (
            <div className="spinner mr-2"></div>
          ) : (
            <SafeIcon icon={FiSend} className="w-5 h-5 mr-2" />
          )}
          {isSubmitting ? 'Sending...' : 'Get Free Estimate'}
        </button>

        <p className="text-xs text-gray-600 text-center">
          By submitting this form, you agree to be contacted by ElectricPro Services regarding your electrical project.
        </p>
      </form>
    </div>
  );
};

export default LeadForm;