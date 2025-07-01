import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useCMS } from '../../context/CMSContext';

const { FiUser, FiFileText, FiSettings, FiBarChart3, FiLogOut, FiEdit, FiPlus } = FiIcons;

const CMSDashboard = () => {
  const { isAuthenticated, user, logout, blogPosts } = useCMS();

  if (!isAuthenticated) {
    return <Navigate to="/cms/login" replace />;
  }

  const stats = [
    { icon: FiFileText, label: 'Blog Posts', value: blogPosts.length },
    { icon: FiBarChart3, label: 'Featured Posts', value: blogPosts.filter(p => p.featured).length },
    { icon: FiEdit, label: 'Draft Posts', value: 0 },
    { icon: FiSettings, label: 'Categories', value: [...new Set(blogPosts.map(p => p.category))].length }
  ];

  const recentPosts = blogPosts.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CMS Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.name}</p>
            </div>
            <button
              onClick={logout}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <SafeIcon icon={FiLogOut} className="w-5 h-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center">
                <div className="bg-yellow-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <Link
                to="/cms/blog"
                className="flex items-center p-3 rounded-lg border-2 border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300"
              >
                <SafeIcon icon={FiPlus} className="w-5 h-5 text-yellow-600 mr-3" />
                <span className="font-medium text-gray-900">Create New Post</span>
              </Link>
              <Link
                to="/cms/blog"
                className="flex items-center p-3 rounded-lg border-2 border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300"
              >
                <SafeIcon icon={FiFileText} className="w-5 h-5 text-yellow-600 mr-3" />
                <span className="font-medium text-gray-900">Manage Blog</span>
              </Link>
              <Link
                to="/cms/pages"
                className="flex items-center p-3 rounded-lg border-2 border-gray-200 hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300"
              >
                <SafeIcon icon={FiEdit} className="w-5 h-5 text-yellow-600 mr-3" />
                <span className="font-medium text-gray-900">Edit Pages</span>
              </Link>
            </div>
          </motion.div>

          {/* Recent Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-lg shadow-md p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Blog Posts</h2>
              <Link
                to="/cms/blog"
                className="text-yellow-600 hover:text-yellow-700 font-medium"
              >
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 truncate">{post.title}</h3>
                    <p className="text-sm text-gray-600">{post.category} • {new Date(post.publishedAt).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {post.featured && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                    <Link
                      to={`/cms/blog?edit=${post.id}`}
                      className="text-yellow-600 hover:text-yellow-700"
                    >
                      <SafeIcon icon={FiEdit} className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CMSDashboard;