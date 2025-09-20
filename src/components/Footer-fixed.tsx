import React from 'react';
import { Twitter, Instagram, Dribbble, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    'Design Resources': [
      { label: 'Free Icons', page: 'resources' },
      { label: 'UI Kits', page: 'resources' },
      { label: 'Mockups', page: 'resources' },
      { label: 'Illustrations', page: 'resources' },
      { label: 'Templates', page: 'resources' }
    ],
    'Inspiration': [
      { label: 'UI/UX Blogs', page: 'blogs' },
      { label: 'Design Trends', page: 'blogs' },
      { label: 'Color Palettes', page: 'palettes' },
      { label: 'Typography', page: 'blogs' },
      { label: 'Branding', page: 'blogs' }
    ],
    'Community': [
      { label: 'Design Jobs', page: 'jobs' },
      { label: 'Freelance Work', page: 'jobs' },
      { label: 'Submit Resource', page: 'submit-resource' },
      { label: 'Guest Writing', page: 'guest-writing' },
      { label: 'Newsletter', page: 'home' }
    ],
    'Company': [
      { label: 'About Us', page: 'about' },
      { label: 'Our Services', page: 'services' },
      { label: 'Contact', page: 'contact' },
      { label: 'Privacy Policy', page: 'privacy' },
      { label: 'Terms of Service', page: 'terms' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Dribbble, href: '#', label: 'Dribbble' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div 
                className="flex items-center cursor-pointer mb-4" 
                onClick={() => onNavigate('home')}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded-sm"></div>
                  </div>
                  <h3 className="text-xl text-white">DesignerCrunch</h3>
                </div>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Your daily dose of design inspiration. Discover resources, 
                tutorials, and opportunities in the creative industry.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="w-9 h-9 border-gray-700 hover:border-yellow-500 hover:bg-gray-900"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label}>
                        <Icon className="w-4 h-4" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => onNavigate(link.page)}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-lg mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">
                Get the latest design resources and articles delivered weekly.
              </p>
            </div>
            <div className="flex gap-3 min-w-0 md:min-w-80">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:border-yellow-500"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black flex-shrink-0">
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2024 DesignerCrunch. All rights reserved.
            </div>
            
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              Made with <Heart className="w-4 h-4 text-yellow-500 fill-current" /> for the design community
            </div>
            
            <div className="flex gap-6 text-sm">
              <button 
                onClick={() => onNavigate('privacy')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => onNavigate('terms')}
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}