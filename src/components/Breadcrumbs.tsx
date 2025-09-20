import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { generateStructuredData } from './SEO';

interface BreadcrumbItem {
  name: string;
  url: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Generate structured data for breadcrumbs
  React.useEffect(() => {
    const structuredData = generateStructuredData.breadcrumb(
      items.map(item => ({ name: item.name, url: `https://designercrunch.com${item.url}` }))
    );
    
    let breadcrumbScript = document.querySelector('#breadcrumb-structured-data') as HTMLScriptElement;
    
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = 'breadcrumb-structured-data';
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }
    
    breadcrumbScript.textContent = JSON.stringify(structuredData);
    
    return () => {
      const script = document.querySelector('#breadcrumb-structured-data');
      if (script) {
        script.remove();
      }
    };
  }, [items]);

  if (items.length <= 1) {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`flex items-center space-x-1 text-sm text-gray-600 ${className}`}
    >
      <ol className="flex items-center space-x-1" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li 
            key={index}
            className="flex items-center space-x-1"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && (
              <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
            )}
            
            {item.isActive ? (
              <span
                className="text-gray-900 font-medium"
                aria-current="page"
                itemProp="name"
              >
                {index === 0 && <Home className="w-4 h-4 inline mr-1" aria-hidden="true" />}
                {item.name}
              </span>
            ) : (
              <a
                href={item.url}
                className="hover:text-yellow-600 transition-colors"
                itemProp="item"
              >
                <span itemProp="name">
                  {index === 0 && <Home className="w-4 h-4 inline mr-1" aria-hidden="true" />}
                  {item.name}
                </span>
              </a>
            )}
            
            <meta itemProp="position" content={`${index + 1}`} />
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Helper function to generate breadcrumbs based on current page
export const generateBreadcrumbs = (
  currentPage: string,
  subPage?: string,
  pageId?: string,
  customTitle?: string
): BreadcrumbItem[] => {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: '/' }
  ];

  switch (currentPage) {
    case 'ai-tools':
      breadcrumbs.push({ name: 'AI Tools', url: '/ai-tools' });
      
      if (subPage === 'category' && pageId) {
        const categoryName = pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        breadcrumbs.push({ 
          name: categoryName, 
          url: `/ai-tools/category/${pageId}`,
          isActive: true 
        });
      } else if (subPage === 'tool' && pageId) {
        const toolName = customTitle || pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        breadcrumbs.push({ 
          name: toolName, 
          url: `/ai-tools/${pageId}`,
          isActive: true 
        });
      } else if (subPage === 'compare') {
        breadcrumbs.push({ 
          name: 'Compare Tools', 
          url: '/ai-tools/compare',
          isActive: true 
        });
      } else if (!subPage) {
        breadcrumbs[breadcrumbs.length - 1].isActive = true;
      }
      break;

    case 'blogs':
      breadcrumbs.push({ name: 'Blog', url: '/blog' });
      
      if (subPage === 'article' && pageId) {
        const articleTitle = customTitle || pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        breadcrumbs.push({ 
          name: articleTitle, 
          url: `/blog/${pageId}`,
          isActive: true 
        });
      } else {
        breadcrumbs[breadcrumbs.length - 1].isActive = true;
      }
      break;

    case 'resources':
      breadcrumbs.push({ name: 'Resources', url: '/resources' });
      
      if (subPage === 'icons') {
        breadcrumbs.push({ name: 'Icons', url: '/resources/icons/all' });
        if (pageId && pageId !== 'all') {
          const categoryName = pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          breadcrumbs.push({ 
            name: categoryName, 
            url: `/resources/icons/${pageId}`,
            isActive: true 
          });
        } else {
          breadcrumbs[breadcrumbs.length - 1].isActive = true;
        }
      } else if (subPage === 'detail' && pageId) {
        const resourceName = customTitle || pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        breadcrumbs.push({ 
          name: resourceName, 
          url: `/resources/${pageId}`,
          isActive: true 
        });
      } else {
        breadcrumbs[breadcrumbs.length - 1].isActive = true;
      }
      break;

    case 'jobs':
      breadcrumbs.push({ name: 'Jobs', url: '/jobs' });
      
      if (subPage === 'detail' && pageId) {
        const jobTitle = customTitle || pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        breadcrumbs.push({ 
          name: jobTitle, 
          url: `/jobs/${pageId}`,
          isActive: true 
        });
      } else {
        breadcrumbs[breadcrumbs.length - 1].isActive = true;
      }
      break;

    case 'palettes':
      breadcrumbs.push({ 
        name: 'Color Palettes', 
        url: '/color-palettes',
        isActive: true 
      });
      break;

    case 'about':
      breadcrumbs.push({ 
        name: 'About', 
        url: '/about',
        isActive: true 
      });
      break;

    case 'contact':
      breadcrumbs.push({ 
        name: 'Contact', 
        url: '/contact',
        isActive: true 
      });
      break;

    case 'services':
      breadcrumbs.push({ 
        name: 'Services', 
        url: '/services',
        isActive: true 
      });
      break;

    case 'submit-resource':
      breadcrumbs.push({ 
        name: 'Submit Resource', 
        url: '/submit-resource',
        isActive: true 
      });
      break;

    case 'guest-writing':
      breadcrumbs.push({ 
        name: 'Guest Writing', 
        url: '/guest-writing',
        isActive: true 
      });
      break;

    case 'privacy':
      breadcrumbs.push({ 
        name: 'Privacy Policy', 
        url: '/privacy-policy',
        isActive: true 
      });
      break;

    case 'terms':
      breadcrumbs.push({ 
        name: 'Terms of Service', 
        url: '/terms-of-service',
        isActive: true 
      });
      break;

    case 'home':
    default:
      breadcrumbs[0].isActive = true;
      break;
  }

  return breadcrumbs;
};