import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useCMS } from '../../context/CMSContext';

const { FiArrowLeft, FiSave, FiEdit } = FiIcons;

const CMSPages = () => {
  const { isAuthenticated, pages, updatePageContent } = useCMS();
  const [selectedPage, setSelectedPage] = useState('home');
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/cms/login" replace />;
  }

  const pageList = [
    { id: 'home', name: 'Home Page', description: 'Main landing page content' },
    { id: 'about', name: 'About Us', description: 'Company information and team' },
    { id: 'services', name: 'Services', description: 'Service descriptions and pricing' },
    { id: 'contact', name: 'Contact', description: 'Contact information and forms' }
  ];

  const handleSave = () => {
    updatePageContent(selectedPage, content);
    setIsEditing(false);
    alert('Page content updated successfully!');
  };

  const handleEdit = (pageId) => {
    setSelectedPage(pageId);
    setContent(pages[pageId] || '');
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <Link
                to="/cms/dashboard"
                className="mr-4 text-gray-600 hover:text-gray-900"
              >
                <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Page Management</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Page List */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Pages</h2>
            <div className="space-y-2">
              {pageList.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handleEdit(page.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedPage === page.id
                      ? 'bg-yellow-50 border-yellow-200 text-yellow-800'
                      : 'hover:bg-gray-50 border-gray-200 text-gray-700'
                  } border`}
                >
                  <div className="font-medium">{page.name}</div>
                  <div className="text-sm opacity-75">{page.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Editor */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow p-6">
            {isEditing ? (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-medium text-gray-900">
                    Edit {pageList.find(p => p.id === selectedPage)?.name}
                  </h2>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md flex items-center"
                    >
                      <SafeIcon icon={FiSave} className="w-4 h-4 mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page Content (HTML)
                  </label>
                  <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={20}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 font-mono text-sm"
                    placeholder="Enter HTML content for this page..."
                  />
                </div>

                <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-medium text-yellow-800 mb-2">HTML Guidelines:</h3>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Use semantic HTML tags (h1, h2, p, ul, li, etc.)</li>
                    <li>• Add CSS classes for styling (text-center, font-bold, etc.)</li>
                    <li>• Include alt text for images</li>
                    <li>• Use relative URLs for internal links</li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <SafeIcon icon={FiEdit} className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h2 className="text-xl font-medium text-gray-900 mb-2">Select a Page to Edit</h2>
                <p className="text-gray-600">Choose a page from the sidebar to start editing its content.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSPages;