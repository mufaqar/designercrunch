import React from 'react';
import { Facebook, Twitter, Youtube, Share } from 'lucide-react';

// Custom Pinterest and Behance icons since they're not in Lucide
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.166-2.005.035-2.868.182-.782 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.853 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.744 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.334.135-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.97-.527-2.297-1.155l-.624 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
  </svg>
);

const BehanceIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.89-1.502 1.16.906.26 1.576.72 2.022 1.37.448.66.672 1.45.672 2.38 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.69.767-.64.168-1.32.252-2.04.252H0V4.503h6.938v.001zM2.5 8.9h3.72c.555 0 1.02-.13 1.38-.39.35-.26.54-.65.54-1.18 0-.55-.18-.95-.54-1.2-.37-.25-.83-.37-1.38-.37H2.5v3.14zm0 5.54h4.19c.828 0 1.43-.2 1.8-.59.37-.39.56-.95.56-1.68 0-.72-.18-1.29-.55-1.68-.37-.4-.97-.59-1.8-.59H2.5v4.52h-.01zM15.5 4.503h8v1.31h-8v-1.31zm5.74 3.7c-.44-.02-.84.04-1.18.18-.33.15-.61.35-.82.61s-.38.58-.49.94c-.1.37-.15.78-.17 1.23h5.24c-.08-.86-.33-1.54-.73-2.02-.4-.49-.95-.73-1.63-.73l-.22-.01zm2.43 5.22c.33.2.6.45.81.77.2.33.34.69.42 1.09.08.4.12.8.12 1.21h-5.1c.03.85.24 1.49.63 1.91.4.43.93.64 1.6.64.51 0 .93-.13 1.27-.4.33-.27.56-.65.68-1.15h1.78c-.1.8-.39 1.48-.85 2.04-.46.56-1.09.98-1.89 1.26-.8.27-1.67.41-2.63.41-1.45 0-2.58-.43-3.39-1.29-.8-.86-1.2-2.16-1.2-3.9 0-.97.13-1.79.4-2.46.26-.67.63-1.21 1.11-1.63.48-.41 1.04-.71 1.68-.89.63-.18 1.32-.27 2.06-.27.96 0 1.8.17 2.53.52.72.35 1.3.85 1.73 1.49.42.64.63 1.42.63 2.33 0 .69-.12 1.33-.37 1.93-.25.61-.6 1.15-1.05 1.61-.46.47-1.01.83-1.66 1.08-.65.26-1.38.38-2.18.38-1.02 0-1.9-.2-2.64-.59-.74-.4-1.34-.97-1.79-1.72-.44-.75-.67-1.64-.67-2.68 0-1.27.26-2.33.78-3.17.52-.84 1.25-1.47 2.18-1.9.93-.42 2.01-.63 3.24-.63.89 0 1.7.13 2.44.4.73.26 1.38.65 1.93 1.17.55.52.98 1.15 1.29 1.89.32.74.47 1.58.47 2.5h-2.5c0-.41-.08-.77-.25-1.09-.17-.32-.39-.59-.67-.8-.28-.21-.59-.37-.94-.48-.35-.1-.72-.16-1.11-.16-.86 0-1.58.3-2.16.89-.57.6-.86 1.56-.86 2.88z"/>
  </svg>
);

interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  brandColor: string;
  shareUrl?: (url: string, title?: string) => string;
}

const socialPlatforms: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://facebook.com/designercrunch',
    icon: Facebook,
    brandColor: '#1877F2',
    shareUrl: (url: string, title?: string) => 
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/designercrunch',
    icon: Twitter,
    brandColor: '#1DA1F2',
    shareUrl: (url: string, title?: string) => 
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title || '')}&via=designercrunch`
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@designercrunch',
    icon: Youtube,
    brandColor: '#FF0000'
  },
  {
    name: 'Pinterest',
    url: 'https://pinterest.com/designercrunch',
    icon: PinterestIcon,
    brandColor: '#E60023',
    shareUrl: (url: string, title?: string) => 
      `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title || '')}`
  },
  {
    name: 'Behance',
    url: 'https://behance.net/designercrunch',
    icon: BehanceIcon,
    brandColor: '#1769FF'
  }
];

interface SocialIconsProps {
  variant?: 'follow' | 'share' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  layout?: 'horizontal' | 'vertical';
  showLabels?: boolean;
  title?: string;
  shareUrl?: string;
  shareTitle?: string;
  className?: string;
  platforms?: ('facebook' | 'twitter' | 'youtube' | 'pinterest' | 'behance')[];
}

export function SocialIcons({
  variant = 'follow',
  size = 'md',
  layout = 'horizontal',
  showLabels = false,
  title,
  shareUrl = '',
  shareTitle = '',
  className = '',
  platforms
}: SocialIconsProps) {
  
  // Filter platforms if specific ones are requested
  const activePlatforms = platforms 
    ? socialPlatforms.filter(platform => platforms.includes(platform.name.toLowerCase() as any))
    : socialPlatforms;

  // For sharing, only include platforms that support sharing
  const sharePlatforms = activePlatforms.filter(platform => platform.shareUrl);

  const displayPlatforms = variant === 'share' ? sharePlatforms : activePlatforms;

  const sizeClasses = {
    sm: variant === 'minimal' ? 'w-6 h-6' : 'w-8 h-8',
    md: variant === 'minimal' ? 'w-8 h-8' : 'w-10 h-10',
    lg: variant === 'minimal' ? 'w-10 h-10' : 'w-12 h-12'
  };

  const iconSizeClasses = {
    sm: variant === 'minimal' ? 'w-3 h-3' : 'w-4 h-4',
    md: variant === 'minimal' ? 'w-4 h-4' : 'w-5 h-5',
    lg: variant === 'minimal' ? 'w-5 h-5' : 'w-6 h-6'
  };

  const handleClick = (platform: SocialLink) => {
    let url = platform.url;
    
    if (variant === 'share' && platform.shareUrl && shareUrl) {
      url = platform.shareUrl(shareUrl, shareTitle);
    }
    
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const containerClasses = layout === 'horizontal' 
    ? 'flex items-center justify-center gap-3' 
    : 'flex flex-col items-center gap-3';

  return (
    <div className={`${containerClasses} ${className}`}>
      {title && (
        <div className={`${layout === 'horizontal' ? 'w-full text-center mb-4' : 'mb-2'}`}>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
      )}
      
      <div className={containerClasses}>
        {displayPlatforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <div key={platform.name} className="flex flex-col items-center">
              <button
                onClick={() => handleClick(platform)}
                className={`
                  ${sizeClasses[size]} 
                  ${variant === 'minimal' 
                    ? 'rounded-lg bg-gray-100 hover:bg-gray-200' 
                    : 'rounded-full border border-gray-300 hover:border-transparent'
                  }
                  flex items-center justify-center 
                  text-gray-600 hover:text-white 
                  transition-all duration-300 ease-in-out
                  ${variant === 'minimal' ? 'hover:scale-105' : 'transform hover:scale-110'}
                  group relative overflow-hidden
                `}
                style={{
                  '--brand-color': platform.brandColor
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  if (variant !== 'minimal') {
                    e.currentTarget.style.backgroundColor = platform.brandColor;
                    e.currentTarget.style.borderColor = platform.brandColor;
                  } else {
                    e.currentTarget.style.backgroundColor = platform.brandColor;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '';
                }}
                aria-label={
                  variant === 'share' 
                    ? `Share on ${platform.name}` 
                    : `Follow us on ${platform.name}`
                }
                title={
                  variant === 'share' 
                    ? `Share on ${platform.name}` 
                    : `Follow us on ${platform.name}`
                }
              >
                <Icon className={`${iconSizeClasses[size]} transition-colors duration-300`} />
              </button>
              
              {showLabels && (
                <span className="text-xs text-gray-600 mt-1 text-center">
                  {platform.name}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Specific components for different use cases
export function FollowSocialIcons({ className = '', ...props }: Omit<SocialIconsProps, 'variant'>) {
  return (
    <SocialIcons
      variant="follow"
      title="Follow DesignerCrunch"
      className={className}
      {...props}
    />
  );
}

// Minimal social icons for footer
export function MinimalSocialIcons({ className = '', ...props }: Omit<SocialIconsProps, 'variant' | 'title'>) {
  return (
    <SocialIcons
      variant="minimal"
      size="sm"
      layout="horizontal"
      className={className}
      {...props}
    />
  );
}

export function ShareSocialIcons({ 
  url, 
  title, 
  className = '', 
  ...props 
}: Omit<SocialIconsProps, 'variant'> & { url: string; title?: string }) {
  return (
    <SocialIcons
      variant="share"
      title="Share this"
      shareUrl={url}
      shareTitle={title}
      platforms={['facebook', 'twitter', 'pinterest']}
      className={className}
      {...props}
    />
  );
}

// Contact page social icons (no title, just icons)
export function ContactSocialIcons({ className = '', ...props }: Omit<SocialIconsProps, 'variant' | 'title'>) {
  return (
    <SocialIcons
      variant="follow"
      size="md"
      layout="horizontal"
      className={className}
      {...props}
    />
  );
}

// About page social icons with specific title
export function AboutSocialIcons({ className = '', ...props }: Omit<SocialIconsProps, 'variant'>) {
  return (
    <SocialIcons
      variant="follow"
      title="Connect with us on social platforms"
      size="lg"
      layout="horizontal"
      className={className}
      {...props}
    />
  );
}