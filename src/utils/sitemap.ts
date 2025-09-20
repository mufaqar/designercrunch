// Sitemap generation utility
export interface SitemapEntry {
  url: string;
  lastModified?: string;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const baseUrl = 'https://designercrunch.com';

// Static pages sitemap entries
export const staticSitemapEntries: SitemapEntry[] = [
  {
    url: `${baseUrl}/`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: 1.0
  },
  {
    url: `${baseUrl}/ai-tools`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: 0.9
  },
  {
    url: `${baseUrl}/resources`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: 0.9
  },
  {
    url: `${baseUrl}/blog`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: 0.8
  },
  {
    url: `${baseUrl}/jobs`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: 0.8
  },
  {
    url: `${baseUrl}/color-palettes`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.7
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.6
  },
  {
    url: `${baseUrl}/contact`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.6
  },
  {
    url: `${baseUrl}/services`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.6
  },
  {
    url: `${baseUrl}/submit-resource`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.5
  },
  {
    url: `${baseUrl}/guest-writing`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.5
  },
  {
    url: `${baseUrl}/privacy-policy`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'yearly',
    priority: 0.3
  },
  {
    url: `${baseUrl}/terms-of-service`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'yearly',
    priority: 0.3
  }
];

// Generate dynamic sitemap entries for AI tools
export const generateAIToolsSitemapEntries = (): SitemapEntry[] => {
  const aiToolCategories = [
    'ai-video-tools', 'ai-image-tools', 'ai-writing-tools', 
    'ai-code-tools', 'ai-chatbots', 'ai-business-tools'
  ];
  
  const entries: SitemapEntry[] = [];
  
  // Add category pages
  aiToolCategories.forEach(category => {
    entries.push({
      url: `${baseUrl}/ai-tools/category/${category}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.8
    });
  });
  
  // Add individual AI tool pages (mock data - replace with actual data)
  const mockAITools = [
    'midjourney', 'dalle-3', 'stable-diffusion', 'chatgpt', 'claude',
    'github-copilot', 'figma-ai', 'canva-ai', 'notion-ai', 'jasper'
  ];
  
  mockAITools.forEach(tool => {
    entries.push({
      url: `${baseUrl}/ai-tools/${tool}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.7
    });
  });
  
  return entries;
};

// Generate dynamic sitemap entries for resources
export const generateResourcesSitemapEntries = (): SitemapEntry[] => {
  const resourceCategories = ['icons', 'ui-kits', 'templates', 'mockups', 'illustrations', 'fonts'];
  const entries: SitemapEntry[] = [];
  
  // Add resource category pages
  resourceCategories.forEach(category => {
    entries.push({
      url: `${baseUrl}/resources/icons/${category}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.7
    });
  });
  
  // Add individual resource pages (mock data)
  const mockResources = [
    'minimal-icons-pack', 'dashboard-ui-kit', 'landing-page-templates',
    'device-mockups', 'abstract-illustrations', 'modern-font-bundle'
  ];
  
  mockResources.forEach(resource => {
    entries.push({
      url: `${baseUrl}/resources/${resource}`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'monthly',
      priority: 0.6
    });
  });
  
  return entries;
};

// Generate dynamic sitemap entries for blog posts
export const generateBlogSitemapEntries = (): SitemapEntry[] => {
  // Mock blog posts - replace with actual data
  const mockBlogPosts = [
    {
      slug: 'ai-design-tools-2024-ultimate-guide',
      lastModified: '2024-12-15'
    },
    {
      slug: 'figma-vs-sketch-2024-comparison',
      lastModified: '2024-12-10'
    },
    {
      slug: 'design-system-best-practices',
      lastModified: '2024-12-05'
    },
    {
      slug: 'color-theory-for-ui-designers',
      lastModified: '2024-11-28'
    },
    {
      slug: 'typography-trends-2024',
      lastModified: '2024-11-20'
    }
  ];
  
  return mockBlogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));
};

// Generate dynamic sitemap entries for jobs
export const generateJobsSitemapEntries = (): SitemapEntry[] => {
  // Mock job listings - replace with actual data
  const mockJobs = [
    'senior-ui-ux-designer-figma-2024',
    'product-designer-saas-remote',
    'graphic-designer-branding-agency',
    'design-system-lead-tech-company',
    'freelance-web-designer-contract'
  ];
  
  return mockJobs.map(job => ({
    url: `${baseUrl}/jobs/${job}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.6
  }));
};

// Generate complete sitemap
export const generateSitemap = (): SitemapEntry[] => {
  return [
    ...staticSitemapEntries,
    ...generateAIToolsSitemapEntries(),
    ...generateResourcesSitemapEntries(),
    ...generateBlogSitemapEntries(),
    ...generateJobsSitemapEntries()
  ];
};

// Generate XML sitemap string
export const generateXMLSitemap = (): string => {
  const entries = generateSitemap();
  
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const xmlNamespace = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  
  const urlEntries = entries.map(entry => {
    const lastmod = entry.lastModified ? `    <lastmod>${entry.lastModified}</lastmod>` : '';
    const changefreq = entry.changeFrequency ? `    <changefreq>${entry.changeFrequency}</changefreq>` : '';
    const priority = entry.priority ? `    <priority>${entry.priority}</priority>` : '';
    
    return `  <url>
    <loc>${entry.url}</loc>${lastmod ? '\n' + lastmod : ''}${changefreq ? '\n' + changefreq : ''}${priority ? '\n' + priority : ''}
  </url>`;
  }).join('\n');
  
  return `${xmlHeader}
${xmlNamespace}
${urlEntries}
</urlset>`;
};

// Generate robots.txt content
export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for politeness
Crawl-delay: 1

# Disallow admin or private areas (if any)
# Disallow: /admin/
# Disallow: /private/

# Allow common bot assets
Allow: /favicon.ico
Allow: /robots.txt
Allow: /sitemap.xml`;
};

// Generate JSON-LD for website
export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "DesignerCrunch",
        "description": "AI Tools, Design Resources & Creative Inspiration",
        "publisher": {
          "@id": `${baseUrl}/#organization`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US"
      },
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        "name": "DesignerCrunch",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "inLanguage": "en-US",
          "@id": `${baseUrl}/#/schema/logo/image/`,
          "url": `${baseUrl}/logo.png`,
          "contentUrl": `${baseUrl}/logo.png`,
          "width": 200,
          "height": 200,
          "caption": "DesignerCrunch"
        },
        "image": {
          "@id": `${baseUrl}/#/schema/logo/image/`
        },
        "sameAs": [
          "https://twitter.com/designercrunch",
          "https://instagram.com/designercrunch",
          "https://dribbble.com/designercrunch",
          "https://linkedin.com/company/designercrunch"
        ],
        "description": "Your daily dose of design inspiration. Discover AI tools, resources, tutorials, and opportunities in the creative industry."
      }
    ]
  };
};