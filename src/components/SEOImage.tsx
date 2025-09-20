import React from 'react';

interface SEOImageProps {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  srcSet?: string;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function SEOImage({
  src,
  alt,
  title,
  width,
  height,
  className = '',
  loading = 'lazy',
  sizes,
  srcSet,
  priority = false,
  onLoad,
  onError
}: SEOImageProps) {
  const [hasError, setHasError] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate responsive image sizes if not provided
  const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

  // If image fails to load, show a placeholder
  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center text-gray-500 text-sm ${className}`}
        style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : 'auto' }}
        role="img"
        aria-label={alt}
      >
        <span>Image not available</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
      className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      loading={priority ? 'eager' : loading}
      sizes={defaultSizes}
      srcSet={srcSet}
      onLoad={handleLoad}
      onError={handleError}
      // SEO-friendly attributes
      itemProp="image"
      // Accessibility improvements
      role="img"
      // Performance hints
      decoding="async"
      // Modern image optimization
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined,
        objectFit: 'cover',
        ...(!isLoaded && { backgroundColor: '#f3f4f6' })
      }}
    />
  );
}

// Higher-order component for generating responsive image URLs
export const withResponsiveImages = (baseUrl: string) => {
  return {
    small: `${baseUrl}?w=400&q=75`,
    medium: `${baseUrl}?w=800&q=80`,
    large: `${baseUrl}?w=1200&q=85`,
    xlarge: `${baseUrl}?w=1600&q=90`,
    
    // Generate srcSet string
    getSrcSet: () => [
      `${baseUrl}?w=400&q=75 400w`,
      `${baseUrl}?w=800&q=80 800w`,
      `${baseUrl}?w=1200&q=85 1200w`,
      `${baseUrl}?w=1600&q=90 1600w`
    ].join(', '),
    
    // Generate sizes for different breakpoints
    getSizes: (config?: {
      mobile?: string;
      tablet?: string;
      desktop?: string;
    }) => {
      const { mobile = '100vw', tablet = '50vw', desktop = '33vw' } = config || {};
      return `(max-width: 768px) ${mobile}, (max-width: 1200px) ${tablet}, ${desktop}`;
    }
  };
};

// Component for hero/banner images with optimized loading
export function HeroImage({
  src,
  alt,
  className = '',
  ...props
}: Omit<SEOImageProps, 'loading' | 'priority'>) {
  return (
    <SEOImage
      src={src}
      alt={alt}
      className={className}
      loading="eager"
      priority={true}
      {...props}
    />
  );
}

// Component for card/thumbnail images
export function ThumbnailImage({
  src,
  alt,
  className = '',
  ...props
}: SEOImageProps) {
  const responsiveUrls = withResponsiveImages(src);
  
  return (
    <SEOImage
      src={src}
      alt={alt}
      className={className}
      srcSet={responsiveUrls.getSrcSet()}
      sizes={responsiveUrls.getSizes({ mobile: '100vw', tablet: '50vw', desktop: '300px' })}
      loading="lazy"
      {...props}
    />
  );
}

// Hook for generating Open Graph image URLs
export const useOGImage = (
  title: string,
  subtitle?: string,
  imageUrl?: string
) => {
  const baseUrl = 'https://designercrunch.com';
  
  // If custom image provided, use it
  if (imageUrl) {
    return imageUrl;
  }
  
  // Generate dynamic OG image URL (you'd implement this on your server)
  const params = new URLSearchParams({
    title: title,
    subtitle: subtitle || '',
    width: '1200',
    height: '630'
  });
  
  return `${baseUrl}/api/og-image?${params.toString()}`;
};

// Component for structured data images
export function StructuredDataImage({
  src,
  alt,
  structuredDataType = 'ImageObject',
  caption,
  ...props
}: SEOImageProps & {
  structuredDataType?: string;
  caption?: string;
}) {
  React.useEffect(() => {
    // Add structured data for the image
    const structuredData = {
      "@context": "https://schema.org",
      "@type": structuredDataType,
      "url": src,
      "caption": caption || alt,
      "description": alt
    };
    
    const scriptId = `image-structured-data-${src.replace(/[^a-zA-Z0-9]/g, '')}`;
    let script = document.querySelector(`#${scriptId}`) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(structuredData);
    
    return () => {
      const existingScript = document.querySelector(`#${scriptId}`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [src, alt, caption, structuredDataType]);

  return <SEOImage src={src} alt={alt} {...props} />;
}