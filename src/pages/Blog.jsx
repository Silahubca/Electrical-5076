import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useCMS } from '../context/CMSContext';

const { FiCalendar, FiUser, FiTag, FiArrowRight } = FiIcons;

const Blog = () => {
  const { blogPosts } = useCMS();
  
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Electrical Tips & Advice Blog | ElectricPro Services</title>
        <meta name="description" content="Expert electrical tips, safety advice, and industry insights from professional electricians. Learn about electrical maintenance, upgrades, and safety." />
        <meta name="keywords" content="electrical tips, electrical safety, electrical blog, electrician advice, electrical maintenance, electrical upgrades" />
        <link rel="canonical" href="https://electricpro.com/blog" />
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
              Electrical Tips & Advice
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Stay informed with expert electrical tips, safety advice, and industry insights from our team of professional electricians.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600">
                Our most popular and important electrical safety and maintenance tips.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2" />
                      <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
                      <span className="mx-2">•</span>
                      <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-yellow-600 transition-colors">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <SafeIcon icon={FiTag} className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-600">{post.category}</span>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="flex items-center text-yellow-600 hover:text-yellow-700 font-semibold transition-colors"
                      >
                        Read More
                        <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Stay up to date with the latest electrical tips and industry news.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2" />
                    <span>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-yellow-600 transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
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
              Need Professional Electrical Help?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              While these tips are helpful, some electrical work requires professional expertise. Contact us for safe, reliable electrical services.
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

export default Blog;