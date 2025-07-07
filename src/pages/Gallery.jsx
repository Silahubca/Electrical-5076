import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Gallery = () => {
  const projects = [
    {
      title: 'Residential Panel Upgrade',
      description: 'Complete 200-amp panel upgrade for modern home',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Residential'
    },
    {
      title: 'Commercial Lighting Installation',
      description: 'LED lighting system for office building',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Commercial'
    },
    {
      title: 'Emergency Storm Repair',
      description: 'Power restoration after severe weather',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Emergency'
    },
    {
      title: 'Industrial Wiring Project',
      description: 'Complete electrical system for warehouse',
      image: 'https://images.unsplash.com/photo-1621905252472-e52b5df73c80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Industrial'
    },
    {
      title: 'Smart Home Integration',
      description: 'Modern smart home electrical setup',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Residential'
    },
    {
      title: 'Outdoor Lighting Design',
      description: 'Beautiful landscape lighting installation',
      image: 'https://images.unsplash.com/photo-1621905251970-b1a2a3ab1e8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Residential'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Project Gallery | ElectricPro Services Work Examples</title>
        <meta name="description" content="View examples of our professional electrical work including residential, commercial, and emergency projects completed by ElectricPro Services." />
        <meta name="keywords" content="electrical projects, electrical work examples, electrical gallery, electrical contractor portfolio" />
        <link rel="canonical" href="https://electricpro.com/gallery" />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="text-white py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 64, 175, 0.85)), url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Work Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              See examples of our professional electrical work across residential, commercial, and emergency projects.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;