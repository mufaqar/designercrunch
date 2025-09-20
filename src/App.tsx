import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedBlogs } from './components/FeaturedBlogs';
import { FeaturedResources } from './components/FeaturedResources';
import { ColorPalettes } from './components/ColorPalettes';
import { ColorPalettesPage } from './components/ColorPalettesPage';
import { AIToolsHome } from './components/AIToolsHome';
import { AIToolsCategoryPage } from './components/AIToolsCategoryPage';
import { AIToolDetailPage } from './components/AIToolDetailPage';
import { AIInsightDetailPage } from './components/AIInsightDetailPage';
import { AIToolsComparisonPage } from './components/AIToolsComparisonPage';
import { AIToolsComparisonSelector } from './components/AIToolsComparisonSelector';
import { BlogsPage } from './components/BlogsPage';
import { SingleBlogPage } from './components/SingleBlogPage';
import { JobsPage } from './components/JobsPage';
import { JobDetailPage } from './components/JobDetailPage';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { ResourcesPage } from './components/ResourcesPage';
import { ResourceDetailPage } from './components/ResourceDetailPage';
import { IconBrowsePage } from './components/IconBrowsePage';
import { SubmitResourcePage } from './components/SubmitResourcePage';
import { GuestWritingPage } from './components/GuestWritingPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { Services } from './components/Services';
import { Toaster } from './components/ui/sonner';
import { SEO, seoData, generateStructuredData } from './components/SEO';
import { useURLManagement } from './hooks/useURLManagement';

export default function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [subPage, setSubPage] = React.useState<string>('');
  const [pageId, setPageId] = React.useState<string>('');

  const handleNavigate = (page: string, sub?: string, id?: string) => {
    setCurrentPage(page);
    setSubPage(sub || '');
    setPageId(id || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Use URL management hook for SEO-friendly URLs
  const { currentURL } = useURLManagement(currentPage, subPage, pageId, handleNavigate);

  // Get SEO data based on current page
  const getSEOData = () => {
    const baseUrl = 'https://designercrunch.com';
    const fullUrl = `${baseUrl}${currentURL}`;
    
    let seoConfig = { ...seoData.home };
    let structuredData = null;

    // Base structured data - always include organization and website
    const baseStructuredData = [
      generateStructuredData.organization(),
      generateStructuredData.website()
    ];

    switch (currentPage) {
      case 'home':
        seoConfig = { ...seoData.home };
        structuredData = baseStructuredData;
        break;
        
      case 'ai-tools':
        if (subPage === 'tool' && pageId) {
          // Individual AI tool page
          seoConfig = {
            title: `${pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - AI Tool Review & Features | DesignerCrunch`,
            description: `Comprehensive review of ${pageId.replace(/-/g, ' ')} AI tool. Features, pricing, pros & cons, and user reviews to help you decide.`,
            keywords: `${pageId.replace(/-/g, ' ')}, AI tool review, features, pricing, comparison`,
            canonical: fullUrl,
            ogType: 'article'
          };
          structuredData = [
            ...baseStructuredData,
            generateStructuredData.product(
              pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
              `AI tool for designers and developers`,
              undefined,
              4.5,
              150
            )
          ];
        } else if (subPage === 'category' && pageId) {
          // AI tools category page
          const categoryName = pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          seoConfig = {
            title: `Best ${categoryName} 2024 - Reviews & Comparisons | DesignerCrunch`,
            description: `Discover the best ${categoryName.toLowerCase()} with detailed reviews, comparisons, and features. Find the perfect AI tool for your needs.`,
            keywords: `${categoryName.toLowerCase()}, AI tools, comparison, reviews, best ${categoryName.toLowerCase()} 2024`,
            canonical: fullUrl,
            ogType: 'website'
          };
          structuredData = baseStructuredData;
        } else {
          seoConfig = { ...seoData.aiTools };
          structuredData = baseStructuredData;
        }
        break;
        
      case 'blogs':
        if (subPage === 'article' && pageId) {
          // Individual blog post
          const articleTitle = pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          seoConfig = {
            title: `${articleTitle} | DesignerCrunch Blog`,
            description: `Read our latest insights on ${articleTitle.toLowerCase()}. Expert tips, tutorials, and industry analysis for designers.`,
            keywords: `${articleTitle.toLowerCase()}, design blog, tutorial, tips, ${pageId.split('-').slice(0, 3).join(', ')}`,
            canonical: fullUrl,
            ogType: 'article',
            author: 'DesignerCrunch Team',
            publishedTime: new Date().toISOString()
          };
          structuredData = [
            ...baseStructuredData,
            generateStructuredData.article(
              articleTitle,
              `Expert insights on ${articleTitle.toLowerCase()}`,
              'DesignerCrunch Team',
              new Date().toISOString().split('T')[0]
            )
          ];
        } else {
          seoConfig = { ...seoData.blogs };
          structuredData = baseStructuredData;
        }
        break;
        
      case 'resources':
        if (subPage === 'detail' && pageId) {
          // Individual resource page
          const resourceName = pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          seoConfig = {
            title: `${resourceName} - Free Design Resource | DesignerCrunch`,
            description: `Download ${resourceName.toLowerCase()} for free. High-quality design resource for commercial use. Available in multiple formats.`,
            keywords: `${resourceName.toLowerCase()}, free design resource, download, commercial use, ${pageId.split('-').slice(0, 3).join(', ')}`,
            canonical: fullUrl,
            ogType: 'product'
          };
          structuredData = [
            ...baseStructuredData,
            generateStructuredData.product(
              resourceName,
              `Free design resource: ${resourceName.toLowerCase()}`,
              'Free',
              4.8,
              250
            )
          ];
        } else if (subPage === 'icons' && pageId) {
          // Icons category page
          const categoryName = pageId === 'all' ? 'All Icons' : pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          seoConfig = {
            title: `${categoryName} - Browse & Download Free Icons | DesignerCrunch`,
            description: `Browse and download ${categoryName.toLowerCase()} for free. High-quality SVG icons for commercial use in your design projects.`,
            keywords: `${categoryName.toLowerCase()}, free icons, SVG icons, download icons, design assets`,
            canonical: fullUrl,
            ogType: 'website'
          };
          structuredData = baseStructuredData;
        } else {
          seoConfig = { ...seoData.resources };
          structuredData = baseStructuredData;
        }
        break;
        
      case 'jobs':
        if (subPage === 'detail' && pageId) {
          // Individual job posting
          const jobTitle = pageId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          seoConfig = {
            title: `${jobTitle} - Design Job | DesignerCrunch`,
            description: `Apply for ${jobTitle.toLowerCase()} position. Find the latest design job opportunities and advance your creative career.`,
            keywords: `${jobTitle.toLowerCase()}, design job, career opportunity, ${pageId.split('-').slice(0, 3).join(', ')}`,
            canonical: fullUrl,
            ogType: 'article'
          };
          structuredData = [
            ...baseStructuredData,
            generateStructuredData.jobPosting(
              jobTitle,
              'Various Companies',
              'Remote/On-site',
              `${jobTitle} position available. Join a creative team and work on exciting projects.`
            )
          ];
        } else {
          seoConfig = { ...seoData.jobs };
          structuredData = baseStructuredData;
        }
        break;
        
      case 'palettes':
        seoConfig = { ...seoData.colorPalettes };
        structuredData = baseStructuredData;
        break;
        
      case 'about':
        seoConfig = { ...seoData.about };
        structuredData = baseStructuredData;
        break;
        
      case 'contact':
        seoConfig = { ...seoData.contact };
        structuredData = baseStructuredData;
        break;
        
      case 'submit-resource':
        seoConfig = { ...seoData.submitResource };
        structuredData = baseStructuredData;
        break;
        
      case 'guest-writing':
        seoConfig = { ...seoData.guestWriting };
        structuredData = baseStructuredData;
        break;
        
      case 'privacy':
        seoConfig = { ...seoData.privacy };
        structuredData = baseStructuredData;
        break;
        
      case 'terms':
        seoConfig = { ...seoData.terms };
        structuredData = baseStructuredData;
        break;
        
      default:
        seoConfig = { ...seoData.home };
        structuredData = baseStructuredData;
    }

    // Ensure canonical URL is set
    seoConfig.canonical = seoConfig.canonical || fullUrl;
    seoConfig.ogUrl = fullUrl;

    return {
      ...seoConfig,
      structuredData: {
        "@context": "https://schema.org",
        "@graph": structuredData
      }
    };
  };

  const seoConfig = getSEOData();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <AIToolsHome onNavigate={handleNavigate} />;
      
      case 'ai-tools':
        if (subPage === 'category' && pageId) {
          return <AIToolsCategoryPage categoryId={pageId} onNavigate={handleNavigate} />;
        } else if (subPage === 'tool' && pageId) {
          return <AIToolDetailPage toolId={pageId} onNavigate={handleNavigate} />;
        } else if (subPage === 'insight' && pageId) {
          return <AIInsightDetailPage insightId={pageId} onNavigate={handleNavigate} />;
        } else if (subPage === 'compare' && pageId) {
          // Parse comma-separated tool IDs for comparison
          const toolIds = pageId.split(',');
          return <AIToolsComparisonPage toolIds={toolIds} onNavigate={handleNavigate} />;
        } else if (subPage === 'compare-selector') {
          return <AIToolsComparisonSelector onNavigate={handleNavigate} />;
        }
        return <AIToolsHome onNavigate={handleNavigate} />;
      
      case 'blogs':
        if (subPage === 'article' && pageId) {
          return <SingleBlogPage blogId={pageId} onNavigate={handleNavigate} />;
        }
        return <BlogsPage onNavigate={handleNavigate} />;
      
      case 'resources':
        if (subPage === 'detail' && pageId) {
          return <ResourceDetailPage resourceId={pageId} onNavigate={handleNavigate} />;
        } else if (subPage === 'icons') {
          return <IconBrowsePage category={pageId} onNavigate={handleNavigate} />;
        }
        return <ResourcesPage onNavigate={handleNavigate} />;
      
      case 'palettes':
        return <ColorPalettesPage onNavigate={handleNavigate} subPage={subPage} articleId={pageId} />;
      
      case 'jobs':
        if (subPage === 'detail' && pageId) {
          return <JobDetailPage jobId={pageId} onNavigate={handleNavigate} />;
        }
        return <JobsPage onNavigate={handleNavigate} />;
      
      case 'services':
        return <Services />;
      
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      
      case 'submit-resource':
        return <SubmitResourcePage onNavigate={handleNavigate} />;
      
      case 'guest-writing':
        return <GuestWritingPage onNavigate={handleNavigate} />;
      
      case 'privacy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      
      case 'terms':
        return <TermsOfServicePage onNavigate={handleNavigate} />;
      
      default:
        return <AIToolsHome onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO {...seoConfig} />
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main role="main">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <Toaster />
    </div>
  );
}