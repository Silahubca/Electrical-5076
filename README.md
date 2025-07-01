# ElectricPro Services Website

A professional electrical services website built with React, Vite, and Tailwind CSS.

## SEO-Optimized Features

- Clean URLs (no hash routing)
- Server-side rendering support
- Structured data for local business
- Meta tags and Open Graph
- Sitemap and robots.txt
- Mobile-responsive design

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Deployment

This project is configured for deployment on:

- **Netlify**: Uses `_redirects` file for SPA routing
- **Apache**: Uses `.htaccess` for URL rewriting  
- **IIS**: Uses `web.config` for URL rewriting

### Netlify Deployment
1. Build command: `npm run build`
2. Publish directory: `dist`
3. The `_redirects` file handles SPA routing

### Apache Deployment
1. Upload `dist` folder contents to web root
2. The `.htaccess` file handles URL rewriting

### IIS Deployment
1. Upload `dist` folder contents to web root
2. The `web.config` file handles URL rewriting

## URL Structure

All URLs are SEO-friendly without hash routing:

- Home: `/`
- Services: `/services`
- About: `/about`
- Contact: `/contact`
- Blog: `/blog`
- Blog Post: `/blog/post-slug`
- Service Areas: `/service-areas`
- Emergency: `/emergency`

## CMS Access

- Login: `/cms/login` or `/admin`
- Credentials: admin / admin123