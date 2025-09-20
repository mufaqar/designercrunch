import React from 'react';

interface AnalyticsProps {
  trackingId?: string;
  enableGTM?: boolean;
  gtmId?: string;
}

export function Analytics({ trackingId, enableGTM = false, gtmId }: AnalyticsProps) {
  React.useEffect(() => {
    // Google Analytics 4 (GA4) implementation
    if (trackingId) {
      // Load GA4 script
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script1);

      // Initialize GA4
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${trackingId}', {
          page_title: document.title,
          page_location: window.location.href,
          send_page_view: true,
          cookie_flags: 'SameSite=None;Secure',
          anonymize_ip: true
        });
      `;
      document.head.appendChild(script2);
    }

    // Google Tag Manager implementation
    if (enableGTM && gtmId) {
      // GTM Head script
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(gtmScript);

      // GTM Body noscript (add to body)
      const gtmNoscript = document.createElement('noscript');
      gtmNoscript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;
      document.body.insertBefore(gtmNoscript, document.body.firstChild);
    }

    // Performance monitoring
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        // Send LCP to analytics
        if (typeof gtag !== 'undefined') {
          gtag('event', 'LCP', {
            event_category: 'Web Vitals',
            value: Math.round(lastEntry.startTime),
            non_interaction: true,
          });
        }
      });
      
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (typeof gtag !== 'undefined') {
            gtag('event', 'FID', {
              event_category: 'Web Vitals',
              value: Math.round(entry.processingStart - entry.startTime),
              non_interaction: true,
            });
          }
        }
      });
      
      fidObserver.observe({ type: 'first-input', buffered: true });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      let clsEntries = [];
      let clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            const firstSessionEntry = clsEntries[0];
            const lastSessionEntry = clsEntries[clsEntries.length - 1];
            
            if (clsEntries.length === 0 || 
                entry.startTime - lastSessionEntry.startTime < 1000 ||
                entry.startTime - firstSessionEntry.startTime < 5000) {
              clsEntries.push(entry);
              clsValue += entry.value;
            }
          }
        }
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'CLS', {
            event_category: 'Web Vitals',
            value: Math.round(clsValue * 1000),
            non_interaction: true,
          });
        }
      });
      
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    }

    // Track page views on route changes
    const handleRouteChange = () => {
      if (typeof gtag !== 'undefined') {
        gtag('config', trackingId || '', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    // Listen for route changes (for SPA)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [trackingId, enableGTM, gtmId]);

  return null;
}

// Analytics event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
  
  // Also send to dataLayer for GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...parameters
    });
  }
};

export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle || document.title,
    });
  }
};

// Specific tracking functions for common events
export const analyticsEvents = {
  // Resource downloads
  trackResourceDownload: (resourceName: string, resourceType: string, format: string) => {
    trackEvent('download', {
      event_category: 'Resources',
      event_label: resourceName,
      resource_type: resourceType,
      file_format: format,
      value: 1
    });
  },

  // AI tool interactions
  trackAIToolView: (toolName: string, category: string) => {
    trackEvent('view_item', {
      event_category: 'AI Tools',
      event_label: toolName,
      item_category: category,
      content_type: 'ai_tool'
    });
  },

  trackAIToolComparison: (tool1: string, tool2: string) => {
    trackEvent('compare_tools', {
      event_category: 'AI Tools',
      tool_1: tool1,
      tool_2: tool2,
      content_type: 'comparison'
    });
  },

  // Blog interactions
  trackBlogRead: (articleTitle: string, category: string, readTime?: number) => {
    trackEvent('read_article', {
      event_category: 'Blog',
      event_label: articleTitle,
      article_category: category,
      read_time: readTime,
      content_type: 'article'
    });
  },

  // Job interactions
  trackJobView: (jobTitle: string, company: string, location: string) => {
    trackEvent('view_job', {
      event_category: 'Jobs',
      event_label: jobTitle,
      company: company,
      location: location,
      content_type: 'job_posting'
    });
  },

  trackJobApply: (jobTitle: string, company: string) => {
    trackEvent('apply_job', {
      event_category: 'Jobs',
      event_label: jobTitle,
      company: company,
      value: 1
    });
  },

  // Search interactions
  trackSearch: (searchTerm: string, searchType: string, resultsCount: number) => {
    trackEvent('search', {
      event_category: 'Search',
      search_term: searchTerm,
      search_type: searchType,
      results_count: resultsCount
    });
  },

  // Newsletter subscription
  trackNewsletterSignup: (source: string = 'footer') => {
    trackEvent('newsletter_signup', {
      event_category: 'Newsletter',
      source: source,
      value: 1
    });
  },

  // Form submissions
  trackFormSubmission: (formType: string, formName: string, success: boolean = true) => {
    trackEvent('form_submit', {
      event_category: 'Forms',
      form_type: formType,
      form_name: formName,
      success: success,
      value: success ? 1 : 0
    });
  },

  // Color palette interactions
  trackColorPaletteUse: (paletteName: string, paletteType: string, action: string) => {
    trackEvent('palette_interaction', {
      event_category: 'Color Palettes',
      palette_name: paletteName,
      palette_type: paletteType,
      action: action // 'copy', 'download', 'save'
    });
  },

  // Social sharing
  trackSocialShare: (platform: string, contentType: string, contentTitle: string) => {
    trackEvent('share', {
      event_category: 'Social',
      method: platform,
      content_type: contentType,
      item_id: contentTitle
    });
  },

  // Error tracking
  trackError: (errorType: string, errorMessage: string, page: string) => {
    trackEvent('exception', {
      event_category: 'Errors',
      description: `${errorType}: ${errorMessage}`,
      fatal: false,
      page: page
    });
  }
};

// Performance tracking
export const trackPerformance = () => {
  if ('performance' in window && 'PerformanceObserver' in window) {
    // Track navigation timing
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (navigation) {
          trackEvent('page_load_time', {
            event_category: 'Performance',
            value: Math.round(navigation.loadEventEnd - navigation.fetchStart),
            non_interaction: true
          });

          trackEvent('dom_content_loaded', {
            event_category: 'Performance', 
            value: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
            non_interaction: true
          });
        }
      }, 0);
    });
  }
};

// Consent management
export const initializeAnalyticsWithConsent = (hasConsent: boolean) => {
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'default', {
      analytics_storage: hasConsent ? 'granted' : 'denied',
      ad_storage: hasConsent ? 'granted' : 'denied',
      functionality_storage: hasConsent ? 'granted' : 'denied',
      personalization_storage: hasConsent ? 'granted' : 'denied'
    });
  }
};

// Update consent
export const updateAnalyticsConsent = (hasConsent: boolean) => {
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      analytics_storage: hasConsent ? 'granted' : 'denied',
      ad_storage: hasConsent ? 'granted' : 'denied'  
    });
  }
};