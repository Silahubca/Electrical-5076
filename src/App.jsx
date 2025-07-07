import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollProgress from './components/common/ScrollProgress';
import BackToTop from './components/common/BackToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import ResidentialServices from './pages/ResidentialServices';
import CommercialServices from './pages/CommercialServices';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ServiceAreas from './pages/ServiceAreas';
import Emergency from './pages/Emergency';
import Gallery from './pages/Gallery';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import CMSLogin from './pages/cms/CMSLogin';
import CMSDashboard from './pages/cms/CMSDashboard';
import CMSBlog from './pages/cms/CMSBlog';
import CMSPages from './pages/cms/CMSPages';
import { CMSProvider } from './context/CMSContext';
import './App.css';

function App() {
  return (
    <CMSProvider>
      <div className="App">
        <ScrollProgress />
        <ScrollToTop />
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/residential" element={<ResidentialServices />} />
            <Route path="/services/commercial" element={<CommercialServices />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/sitemap" element={<Sitemap />} />
            {/* CMS Routes */}
            <Route path="/cms/login" element={<CMSLogin />} />
            <Route path="/cms/dashboard" element={<CMSDashboard />} />
            <Route path="/cms/blog" element={<CMSBlog />} />
            <Route path="/cms/pages" element={<CMSPages />} />
            {/* Admin Routes (alias for CMS) */}
            <Route path="/admin" element={<CMSLogin />} />
            <Route path="/admin/dashboard" element={<CMSDashboard />} />
            <Route path="/admin/blog" element={<CMSBlog />} />
            <Route path="/admin/pages" element={<CMSPages />} />
          </Routes>
        </AnimatePresence>
        <Footer />
        <BackToTop />
      </div>
    </CMSProvider>
  );
}

export default App;