import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useCMS } from '../context/CMSContext';

const { FiCalendar, FiUser, FiTag, FiArrowLeft, FiShare2, FiPhone } = FiIcons;

const BlogPost = () => {
  const { slug } = useParams();
  const { getBlogPost, blogPosts } = useCMS();
  const post = getBlogPost(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(shareUrl);
      alert('URL copied to clipboard!');
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.seoTitle || post.title}</title>
        <meta name="description" content={post.seoDescription || post.excerpt} />
        <meta name="keywords" content={post.seoKeywords || post.tags?.join(',')} />
        <link rel="canonical" href={`${window.location.origin}/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={shareUrl} />
        
        {/* Article specific */}
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:section" content={post.category} />
        {post.tags?.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Helmet>

      {/* Breadcrumb & Back */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              to="/blog"
              className="flex items-center text-yellow-600 hover:text-yellow-700 font-medium"
            >
              <SafeIcon icon={FiArrowLeft} className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <button 
              onClick={handleShare}
              className="flex items-center text-gray-600 hover:text-gray-700"
            >
              <SafeIcon icon={FiShare2} className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2" />
              <span>{format(new Date(post.publishedAt), 'MMMM d, yyyy')}</span>
              <span className="mx-2">•</span>
              <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <SafeIcon icon={FiTag} className="w-4 h-4 mr-2" />
              <span>{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
            {post.tags && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Professional Electrical Help?
            </h3>
            <p className="text-gray-700 mb-6">
              While these tips are helpful, some electrical work requires professional expertise. Contact ElectricPro Services for safe, reliable electrical solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1-555-ELECTRIC"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                Call (555) ELECTRIC
              </a>
              <Link
                to="/contact"
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 text-center"
              >
                Get Free Estimate
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-3">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2" />
                      <span>{format(new Date(relatedPost.publishedAt), 'MMM d, yyyy')}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-yellow-600 transition-colors">
                      <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                    <Link
                      to={`/blog/${relatedPost.slug}`}
                      className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogPost;