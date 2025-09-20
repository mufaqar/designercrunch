import { useEffect } from 'react';

// URL mapping for different pages and subpages
export const urlPatterns = {
  home: '/',
  'ai-tools': {
    base: '/ai-tools',
    category: '/ai-tools/category/:categoryId',
    tool: '/ai-tools/:toolId',
    insight: '/ai-tools/insights/:insightId',
    compare: '/ai-tools/compare/:toolIds',
    'compare-selector': '/ai-tools/compare'
  },
  blogs: {
    base: '/blog',
    article: '/blog/:blogId'
  },
  resources: {
    base: '/resources',
    detail: '/resources/:resourceId',
    icons: '/resources/icons/:category'
  },
  palettes: '/color-palettes',
  jobs: {
    base: '/jobs',
    detail: '/jobs/:jobId'
  },
  services: '/services',
  about: '/about',
  contact: '/contact',
  'submit-resource': '/submit-resource',
  'guest-writing': '/guest-writing',
  privacy: '/privacy-policy',
  terms: '/terms-of-service'
};

// Generate URL based on page, subpage, and ID
export const generateURL = (page: string, subPage?: string, pageId?: string): string => {
  const pattern = urlPatterns[page as keyof typeof urlPatterns];
  
  if (typeof pattern === 'string') {
    return pattern;
  }
  
  if (typeof pattern === 'object' && pattern !== null) {
    if (!subPage) {
      return pattern.base || '/';
    }
    
    const subPattern = pattern[subPage as keyof typeof pattern] as string;
    if (!subPattern) {
      return pattern.base || '/';
    }
    
    if (pageId) {
      return subPattern.replace(/:[^/]+/g, pageId);
    }
    
    return subPattern.replace(/\/:[^/]+/g, '');
  }
  
  return '/';
};

// Parse URL to extract page, subpage, and ID
export const parseURL = (pathname: string): { page: string; subPage?: string; pageId?: string } => {
  // Handle home page
  if (pathname === '/') {
    return { page: 'home' };
  }
  
  // Handle AI tools pages
  if (pathname.startsWith('/ai-tools')) {
    if (pathname === '/ai-tools') {
      return { page: 'ai-tools' };
    }
    if (pathname === '/ai-tools/compare') {
      return { page: 'ai-tools', subPage: 'compare-selector' };
    }
    if (pathname.startsWith('/ai-tools/compare/')) {
      const toolIds = pathname.replace('/ai-tools/compare/', '');
      return { page: 'ai-tools', subPage: 'compare', pageId: toolIds };
    }
    if (pathname.startsWith('/ai-tools/category/')) {
      const categoryId = pathname.replace('/ai-tools/category/', '');
      return { page: 'ai-tools', subPage: 'category', pageId: categoryId };
    }
    if (pathname.startsWith('/ai-tools/insights/')) {
      const insightId = pathname.replace('/ai-tools/insights/', '');
      return { page: 'ai-tools', subPage: 'insight', pageId: insightId };
    }
    if (pathname.startsWith('/ai-tools/')) {
      const toolId = pathname.replace('/ai-tools/', '');
      return { page: 'ai-tools', subPage: 'tool', pageId: toolId };
    }
  }
  
  // Handle blog pages
  if (pathname.startsWith('/blog')) {
    if (pathname === '/blog') {
      return { page: 'blogs' };
    }
    const blogId = pathname.replace('/blog/', '');
    return { page: 'blogs', subPage: 'article', pageId: blogId };
  }
  
  // Handle resources pages
  if (pathname.startsWith('/resources')) {
    if (pathname === '/resources') {
      return { page: 'resources' };
    }
    if (pathname.startsWith('/resources/icons/')) {
      const category = pathname.replace('/resources/icons/', '');
      return { page: 'resources', subPage: 'icons', pageId: category };
    }
    if (pathname.startsWith('/resources/')) {
      const resourceId = pathname.replace('/resources/', '');
      return { page: 'resources', subPage: 'detail', pageId: resourceId };
    }
  }
  
  // Handle jobs pages
  if (pathname.startsWith('/jobs')) {
    if (pathname === '/jobs') {
      return { page: 'jobs' };
    }
    const jobId = pathname.replace('/jobs/', '');
    return { page: 'jobs', subPage: 'detail', pageId: jobId };
  }
  
  // Handle other pages
  const pageMap: Record<string, string> = {
    '/color-palettes': 'palettes',
    '/services': 'services',
    '/about': 'about',
    '/contact': 'contact',
    '/submit-resource': 'submit-resource',
    '/guest-writing': 'guest-writing',
    '/privacy-policy': 'privacy',
    '/terms-of-service': 'terms'
  };
  
  const page = pageMap[pathname];
  if (page) {
    return { page };
  }
  
  // Default to home if no match
  return { page: 'home' };
};

// Custom hook for URL management
export const useURLManagement = (
  currentPage: string,
  currentSubPage: string,
  currentPageId: string,
  onNavigate: (page: string, sub?: string, id?: string) => void
) => {
  // Update URL when page changes
  useEffect(() => {
    const newURL = generateURL(currentPage, currentSubPage, currentPageId);
    const currentURL = window.location.pathname;
    
    if (newURL !== currentURL) {
      window.history.pushState(null, '', newURL);
    }
  }, [currentPage, currentSubPage, currentPageId]);
  
  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const { page, subPage, pageId } = parseURL(window.location.pathname);
      onNavigate(page, subPage, pageId);
    };
    
    window.addEventListener('popstate', handlePopState);
    
    // Parse initial URL on load
    const initialURL = parseURL(window.location.pathname);
    if (initialURL.page !== currentPage || initialURL.subPage !== currentSubPage || initialURL.pageId !== currentPageId) {
      onNavigate(initialURL.page, initialURL.subPage, initialURL.pageId);
    }
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentPage, currentSubPage, currentPageId, onNavigate]);
  
  return {
    currentURL: generateURL(currentPage, currentSubPage, currentPageId),
    generateURL,
    parseURL
  };
};