import React, { createContext, useContext, useState, useEffect } from 'react';

const CMSContext = createContext();

export const useCMS = () => {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
};

export const CMSProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [pages, setPages] = useState({});

  // Initialize with default blog posts
  useEffect(() => {
    const defaultPosts = [
      {
        id: '1',
        title: '5 Signs You Need an Electrical Panel Upgrade',
        slug: '5-signs-electrical-panel-upgrade',
        excerpt: 'Is your electrical panel keeping up with your modern electrical needs? Here are the warning signs that indicate it\'s time for an upgrade.',
        content: `
          <h2>Understanding Your Electrical Panel</h2>
          <p>Your electrical panel is the heart of your home's electrical system. It distributes electricity throughout your house and protects your circuits from overloads.</p>
          
          <h2>Warning Signs You Need an Upgrade</h2>
          
          <h3>1. Frequent Circuit Breaker Trips</h3>
          <p>If your circuit breakers are constantly tripping, it's a sign that your panel is overloaded or outdated.</p>
          
          <h3>2. Flickering Lights</h3>
          <p>Lights that flicker when you turn on appliances indicate your panel can't handle the electrical load.</p>
          
          <h3>3. Burning Smell</h3>
          <p>A burning smell near your electrical panel is a serious safety concern that requires immediate attention.</p>
          
          <h3>4. Old Age</h3>
          <p>Panels over 25 years old may not meet current electrical codes and safety standards.</p>
          
          <h3>5. Insufficient Outlets</h3>
          <p>If you're using multiple extension cords, your panel may not have enough circuits for your needs.</p>
          
          <h2>Benefits of Upgrading</h2>
          <ul>
            <li>Improved safety</li>
            <li>Increased home value</li>
            <li>Better electrical capacity</li>
            <li>Code compliance</li>
          </ul>
          
          <p>Contact ElectricPro Services for a professional electrical panel assessment and upgrade.</p>
        `,
        author: 'ElectricPro Team',
        publishedAt: new Date('2024-01-15'),
        category: 'Electrical Safety',
        tags: ['panel upgrade', 'electrical safety', 'home improvement'],
        featured: true,
        seoTitle: '5 Signs You Need an Electrical Panel Upgrade | ElectricPro Services',
        seoDescription: 'Learn the warning signs that indicate your electrical panel needs upgrading. Professional electrical panel services by licensed electricians.',
        seoKeywords: 'electrical panel upgrade, circuit breaker, electrical safety, panel replacement'
      },
      {
        id: '2',
        title: 'LED Lighting: Save Money and Energy',
        slug: 'led-lighting-save-money-energy',
        excerpt: 'Discover how switching to LED lighting can significantly reduce your energy bills while providing better illumination for your home or business.',
        content: `
          <h2>The LED Revolution</h2>
          <p>LED (Light Emitting Diode) technology has revolutionized the lighting industry, offering superior efficiency and longevity compared to traditional incandescent and fluorescent bulbs.</p>
          
          <h2>Energy Savings</h2>
          <p>LED lights use up to 75% less energy than incandescent bulbs and last 25 times longer. This translates to significant savings on your electricity bill.</p>
          
          <h2>Cost Comparison</h2>
          <ul>
            <li>LED bulbs: $2-10 each, last 25,000+ hours</li>
            <li>Incandescent bulbs: $1-2 each, last 1,000 hours</li>
            <li>CFL bulbs: $2-4 each, last 8,000 hours</li>
          </ul>
          
          <h2>Additional Benefits</h2>
          
          <h3>Environmental Impact</h3>
          <p>LEDs reduce carbon footprint and don't contain mercury like CFLs.</p>
          
          <h3>Better Light Quality</h3>
          <p>LEDs provide instant full brightness and are available in various color temperatures.</p>
          
          <h3>Durability</h3>
          <p>LEDs are more resistant to shock, vibration, and temperature changes.</p>
          
          <p>Ready to make the switch? Contact ElectricPro Services for professional LED lighting installation.</p>
        `,
        author: 'ElectricPro Team',
        publishedAt: new Date('2024-01-10'),
        category: 'Energy Efficiency',
        tags: ['LED lighting', 'energy savings', 'lighting upgrade'],
        featured: false,
        seoTitle: 'LED Lighting Benefits: Save Money and Energy | ElectricPro Services',
        seoDescription: 'Learn how LED lighting can reduce energy costs and improve your home lighting. Professional LED installation services available.',
        seoKeywords: 'LED lighting, energy efficient lighting, lighting installation, save money'
      },
      {
        id: '3',
        title: 'Common Electrical Problems in Older Homes',
        slug: 'common-electrical-problems-older-homes',
        excerpt: 'Older homes often have electrical systems that weren\'t designed for modern electrical demands. Learn about common issues and solutions.',
        content: `
          <h2>Electrical Challenges in Older Homes</h2>
          <p>Homes built before 1960 often have electrical systems that weren't designed for today's electrical demands. Here are the most common issues we encounter.</p>
          
          <h2>Common Problems</h2>
          
          <h3>Outdated Wiring</h3>
          <p>Knob-and-tube wiring and aluminum wiring can pose safety risks and may not be insurable.</p>
          
          <h3>Insufficient Power</h3>
          <p>Older homes typically have 60-100 amp service, while modern homes need 200 amps or more.</p>
          
          <h3>Lack of GFCI Protection</h3>
          <p>Ground Fault Circuit Interrupters are required in wet areas but weren't mandatory in older construction.</p>
          
          <h3>Overloaded Circuits</h3>
          <p>Too many devices on one circuit can cause overheating and fire hazards.</p>
          
          <h2>Solutions</h2>
          <ul>
            <li>Complete rewiring</li>
            <li>Electrical panel upgrade</li>
            <li>GFCI outlet installation</li>
            <li>Adding new circuits</li>
            <li>Grounding system upgrade</li>
          </ul>
          
          <h2>Signs You Need Professional Help</h2>
          <ul>
            <li>Frequent blown fuses or tripped breakers</li>
            <li>Dimming lights when appliances start</li>
            <li>Warm outlet covers or switch plates</li>
            <li>Burning smells</li>
            <li>Mild shock from appliances</li>
          </ul>
          
          <p>Don't ignore electrical problems in your older home. Contact ElectricPro Services for a comprehensive electrical inspection.</p>
        `,
        author: 'ElectricPro Team',
        publishedAt: new Date('2024-01-05'),
        category: 'Home Safety',
        tags: ['older homes', 'electrical problems', 'rewiring', 'safety'],
        featured: true,
        seoTitle: 'Common Electrical Problems in Older Homes | ElectricPro Services',
        seoDescription: 'Learn about common electrical issues in older homes and when to call a professional electrician. Expert electrical services for vintage properties.',
        seoKeywords: 'older home electrical problems, rewiring, electrical safety, vintage home electrician'
      }
    ];

    setBlogPosts(defaultPosts);
  }, []);

  // Check authentication status
  useEffect(() => {
    const authStatus = localStorage.getItem('cms_auth');
    const userData = localStorage.getItem('cms_user');
    
    if (authStatus === 'true' && userData) {
      setIsAuthenticated(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = (credentials) => {
    // Simple authentication - in production, this would be a real API call
    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      const userData = {
        id: '1',
        username: 'admin',
        name: 'Admin User',
        role: 'administrator'
      };
      
      setIsAuthenticated(true);
      setUser(userData);
      localStorage.setItem('cms_auth', 'true');
      localStorage.setItem('cms_user', JSON.stringify(userData));
      
      return { success: true };
    }
    
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('cms_auth');
    localStorage.removeItem('cms_user');
  };

  const createBlogPost = (postData) => {
    const newPost = {
      ...postData,
      id: Date.now().toString(),
      publishedAt: new Date(),
      author: user?.name || 'Admin'
    };
    
    setBlogPosts(prev => [newPost, ...prev]);
    return newPost;
  };

  const updateBlogPost = (id, postData) => {
    setBlogPosts(prev => 
      prev.map(post => 
        post.id === id ? { ...post, ...postData } : post
      )
    );
  };

  const deleteBlogPost = (id) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));
  };

  const getBlogPost = (slug) => {
    return blogPosts.find(post => post.slug === slug);
  };

  const updatePageContent = (pageId, content) => {
    setPages(prev => ({
      ...prev,
      [pageId]: content
    }));
  };

  const value = {
    isAuthenticated,
    user,
    blogPosts,
    pages,
    login,
    logout,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost,
    getBlogPost,
    updatePageContent
  };

  return (
    <CMSContext.Provider value={value}>
      {children}
    </CMSContext.Provider>
  );
};