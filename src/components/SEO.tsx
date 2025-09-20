import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
  robots?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export function SEO({
  title = 'DesignerCrunch - AI Tools, Design Resources & Creative Inspiration',
  description = 'Discover the best AI design tools, free resources, UI kits, icons, and creative inspiration. Compare AI tools, download premium resources, and stay updated with design trends.',
  keywords = 'AI design tools, design resources, UI kits, icons, color palettes, design inspiration, Figma, Sketch, design trends, free resources',
  canonical,
  ogTitle,
  ogDescription,
  ogImage = 'https://designercrunch.com/og-image.jpg',
  ogType = 'website',
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  robots = 'index, follow',
  author,
  publishedTime,
  modifiedTime
}: SEOProps) {
  
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let metaTag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute(attribute, name);
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    };
    
    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let linkTag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', rel);
        document.head.appendChild(linkTag);
      }
      
      linkTag.setAttribute('href', href);
    };
    
    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', robots);
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Author
    if (author) {
      updateMetaTag('author', author);
    }
    
    // Canonical URL
    if (canonical) {
      updateLinkTag('canonical', canonical);
    }
    
    // Open Graph tags
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'DesignerCrunch', true);
    
    if (ogUrl) {
      updateMetaTag('og:url', ogUrl, true);
    }
    
    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:site', '@designercrunch');
    updateMetaTag('twitter:creator', '@designercrunch');
    updateMetaTag('twitter:title', twitterTitle || ogTitle || title);
    updateMetaTag('twitter:description', twitterDescription || ogDescription || description);
    updateMetaTag('twitter:image', twitterImage || ogImage);
    
    // Article specific tags
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
    }
    
    if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, true);
    }
    
    // Structured data
    if (structuredData) {
      let structuredDataScript = document.querySelector('#structured-data') as HTMLScriptElement;
      
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.id = 'structured-data';
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      
      structuredDataScript.textContent = JSON.stringify(structuredData);
    }
    
    // Additional SEO meta tags
    updateMetaTag('theme-color', '#FCD34D');
    updateMetaTag('msapplication-TileColor', '#FCD34D');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('format-detection', 'telephone=no');
    
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, ogUrl, twitterCard, twitterTitle, twitterDescription, twitterImage, structuredData, robots, author, publishedTime, modifiedTime]);

  return null;
}

// SEO data for different page types
export const seoData = {
  home: {
    title: 'DesignerCrunch - AI Tools, Design Resources & Creative Inspiration',
    description: 'Discover the best AI design tools, free resources, UI kits, icons, and creative inspiration. Compare AI tools, download premium resources, and stay updated with design trends.',
    keywords: 'AI design tools, design resources, UI kits, icons, color palettes, design inspiration, Figma, Sketch, design trends, free resources, AI tool comparison',
    canonical: 'https://designercrunch.com/',
    ogType: 'website'
  },
  
  aiTools: {
    title: 'Best AI Design Tools 2024 - Reviews, Comparisons & Features | DesignerCrunch',
    description: 'Comprehensive reviews and comparisons of the best AI design tools. Find the perfect AI tool for your creative workflow with detailed features, pricing, and user reviews.',
    keywords: 'AI design tools 2024, AI tool comparison, best AI tools for designers, artificial intelligence design, AI graphic design tools, design automation tools',
    canonical: 'https://designercrunch.com/ai-tools',
    ogType: 'website'
  },
  
  resources: {
    title: 'Free Design Resources - Icons, UI Kits, Templates & More | DesignerCrunch',
    description: 'Download thousands of free design resources including icons, UI kits, templates, mockups, and illustrations. All resources are free for commercial use.',
    keywords: 'free design resources, free icons, UI kits, design templates, mockups, illustrations, commercial use, design assets',
    canonical: 'https://designercrunch.com/resources',
    ogType: 'website'
  },
  
  blogs: {
    title: 'Design Blog - Tutorials, Trends & Industry Insights | DesignerCrunch',
    description: 'Stay updated with the latest design trends, tutorials, and industry insights. Learn from expert designers and improve your creative skills.',
    keywords: 'design blog, design tutorials, design trends 2024, UI UX articles, design tips, creative inspiration, design industry news',
    canonical: 'https://designercrunch.com/blogs',
    ogType: 'website'
  },
  
  jobs: {
    title: 'Design Jobs & Career Opportunities | DesignerCrunch',
    description: 'Find the latest design job opportunities including UI/UX, graphic design, product design, and creative roles at top companies worldwide.',
    keywords: 'design jobs, UI UX jobs, graphic design careers, product designer jobs, creative jobs, design career opportunities',
    canonical: 'https://designercrunch.com/jobs',
    ogType: 'website'
  },
  
  colorPalettes: {
    title: 'Color Palettes & Color Scheme Generator | DesignerCrunch',
    description: 'Discover beautiful color palettes and generate custom color schemes for your design projects. Find trending colors and create harmonious combinations.',
    keywords: 'color palettes, color schemes, color generator, design colors, trending colors, color combinations, color theory',
    canonical: 'https://designercrunch.com/palettes',
    ogType: 'website'
  },
  
  about: {
    title: 'About DesignerCrunch - Your Creative Design Community',
    description: 'Learn about DesignerCrunch\'s mission to empower designers with the best AI tools, resources, and creative inspiration. Join our growing design community.',
    keywords: 'about DesignerCrunch, design community, creative platform, design resources platform, AI tools directory',
    canonical: 'https://designercrunch.com/about',
    ogType: 'website'
  },
  
  contact: {
    title: 'Contact Us - DesignerCrunch',
    description: 'Get in touch with the DesignerCrunch team. We\'d love to hear from you about partnerships, feedback, or any questions you might have.',
    keywords: 'contact DesignerCrunch, get in touch, design community support, partnerships, feedback',
    canonical: 'https://designercrunch.com/contact',
    ogType: 'website'
  },
  
  submitResource: {
    title: 'Submit Your Design Resource | DesignerCrunch',
    description: 'Share your design resources with our community. Submit icons, UI kits, templates, and other creative assets to help fellow designers.',
    keywords: 'submit design resource, share design assets, contribute resources, design community contribution',
    canonical: 'https://designercrunch.com/submit-resource',
    ogType: 'website'
  },
  
  guestWriting: {
    title: 'Write for DesignerCrunch - Guest Writing Opportunities',
    description: 'Share your design expertise with our community. Write tutorials, case studies, and insights for thousands of designers worldwide.',
    keywords: 'guest writing, design blog contributor, write for designers, design article submission, design thought leadership',
    canonical: 'https://designercrunch.com/guest-writing',
    ogType: 'website'
  },
  
  privacy: {
    title: 'Privacy Policy | DesignerCrunch',
    description: 'Learn how DesignerCrunch protects your privacy and handles your personal information. We\'re committed to transparency and data protection.',
    keywords: 'privacy policy, data protection, user privacy, GDPR compliance',
    canonical: 'https://designercrunch.com/privacy',
    ogType: 'website',
    robots: 'index, follow'
  },
  
  terms: {
    title: 'Terms of Service | DesignerCrunch',
    description: 'Read our terms of service to understand the rules and guidelines for using DesignerCrunch platform and community.',
    keywords: 'terms of service, user agreement, platform rules, legal terms',
    canonical: 'https://designercrunch.com/terms',
    ogType: 'website',
    robots: 'index, follow'
  }
};

// Generate structured data for different content types
export const generateStructuredData = {
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DesignerCrunch",
    "url": "https://designercrunch.com",
    "logo": "https://designercrunch.com/logo.png",
    "description": "Your daily dose of design inspiration. Discover AI tools, resources, tutorials, and opportunities in the creative industry.",
    "sameAs": [
      "https://twitter.com/designercrunch",
      "https://instagram.com/designercrunch",
      "https://dribbble.com/designercrunch",
      "https://linkedin.com/company/designercrunch"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-0123",
      "contactType": "Customer Service",
      "email": "hello@designercrunch.com"
    }
  }),
  
  website: () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DesignerCrunch",
    "url": "https://designercrunch.com",
    "description": "AI Tools, Design Resources & Creative Inspiration",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://designercrunch.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }),
  
  breadcrumb: (items: Array<{name: string, url: string}>) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }),
  
  article: (title: string, description: string, author: string, publishedDate: string, modifiedDate?: string, image?: string) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "DesignerCrunch",
      "logo": {
        "@type": "ImageObject",
        "url": "https://designercrunch.com/logo.png"
      }
    },
    "datePublished": publishedDate,
    "dateModified": modifiedDate || publishedDate,
    "image": image || "https://designercrunch.com/og-image.jpg",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": window.location.href
    }
  }),
  
  product: (name: string, description: string, price?: string, rating?: number, reviewCount?: number) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "DesignerCrunch"
    },
    "offers": price ? {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    } : undefined,
    "aggregateRating": rating ? {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount || 1,
      "bestRating": 5,
      "worstRating": 1
    } : undefined
  }),
  
  jobPosting: (title: string, company: string, location: string, description: string, salary?: string) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": title,
    "description": description,
    "hiringOrganization": {
      "@type": "Organization",
      "name": company
    },
    "jobLocation": {
      "@type": "Place",
      "address": location
    },
    "baseSalary": salary ? {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": {
        "@type": "QuantitativeValue",
        "value": salary
      }
    } : undefined,
    "datePosted": new Date().toISOString().split('T')[0],
    "employmentType": "FULL_TIME"
  })
};