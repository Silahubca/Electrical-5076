import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useCMS } from '../../context/CMSContext';

const { FiPlus, FiEdit2, FiTrash2, FiEye, FiArrowLeft, FiSave, FiX } = FiIcons;

const CMSBlog = () => {
  const { isAuthenticated, blogPosts, createBlogPost, updateBlogPost, deleteBlogPost } = useCMS();
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    featured: false,
    seoTitle: '',
    seoDescription: '',
    seoKeywords: ''
  });

  if (!isAuthenticated) {
    return <Navigate to="/cms/login" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const postData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      slug: formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    };

    if (editingPost) {
      updateBlogPost(editingPost.id, postData);
      setEditingPost(null);
    } else {
      createBlogPost(postData);
      setIsCreating(false);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: '',
      tags: '',
      featured: false,
      seoTitle: '',
      seoDescription: '',
      seoKeywords: ''
    });
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      tags: post.tags?.join(', ') || '',
      featured: post.featured,
      seoTitle: post.seoTitle || '',
      seoDescription: post.seoDescription || '',
      seoKeywords: post.seoKeywords || ''
    });
    setIsCreating(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deleteBlogPost(id);
    }
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingPost(null);
    resetForm();
  };

  if (isCreating) {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-6">
              <div className="flex items-center">
                <button
                  onClick={handleCancel}
                  className="mr-4 text-gray-600 hover:text-gray-900"
                >
                  <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
                </button>
                <h1 className="text-2xl font-bold text-gray-900">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </h1>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <SafeIcon icon={FiX} className="w-4 h-4 mr-2 inline" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Post Content</h2>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Auto-generated from title if left empty"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={15}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 font-mono text-sm"
                    placeholder="Use HTML for formatting..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <input
                      type="text"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma-separated)</label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="tag1, tag2, tag3"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="rounded border-gray-300 text-yellow-600 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Featured Post</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">SEO Settings</h2>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SEO Title</label>
                  <input
                    type="text"
                    value={formData.seoTitle}
                    onChange={(e) => setFormData({ ...formData, seoTitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Optimized title for search engines"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SEO Description</label>
                  <textarea
                    value={formData.seoDescription}
                    onChange={(e) => setFormData({ ...formData, seoDescription: e.target.value })}
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Meta description for search engines"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">SEO Keywords</label>
                  <input
                    type="text"
                    value={formData.seoKeywords}
                    onChange={(e) => setFormData({ ...formData, seoKeywords: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="keyword1, keyword2, keyword3"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg transition-colors flex items-center"
              >
                <SafeIcon icon={FiSave} className="w-4 h-4 mr-2" />
                {editingPost ? 'Update Post' : 'Create Post'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

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
              <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
            </div>
            <button
              onClick={() => setIsCreating(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition-colors flex items-center"
            >
              <SafeIcon icon={FiPlus} className="w-4 h-4 mr-2" />
              New Post
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">All Posts ({blogPosts.length})</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-6 py-4 hover:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-medium text-gray-900">{post.title}</h3>
                      {post.featured && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{format(new Date(post.publishedAt), 'MMM d, yyyy')}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <a
                      href={`#/blog/${post.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-gray-600"
                      title="View Post"
                    >
                      <SafeIcon icon={FiEye} className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => handleEdit(post)}
                      className="p-2 text-gray-400 hover:text-gray-600"
                      title="Edit Post"
                    >
                      <SafeIcon icon={FiEdit2} className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-2 text-gray-400 hover:text-red-600"
                      title="Delete Post"
                    >
                      <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSBlog;