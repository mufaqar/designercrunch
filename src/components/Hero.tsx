import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">
            <span className="text-gray-900">Your Daily Dose of</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Design Inspiration
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover fresh design ideas, download free resources, explore color palettes, 
            and connect with opportunities in the creative industry.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search blogs, resources, color palettes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl shadow-sm"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => onNavigate('blogs')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-xl shadow-lg"
            >
              Explore Blogs
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              onClick={() => onNavigate('resources')}
              variant="outline" 
              className="border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 px-8 py-3 rounded-xl"
            >
              Download Free Vectors
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl text-gray-900 mb-1">1,200+</div>
              <div className="text-gray-600">Blog Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-gray-900 mb-1">5,000+</div>
              <div className="text-gray-600">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-gray-900 mb-1">800+</div>
              <div className="text-gray-600">Color Palettes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-gray-900 mb-1">150+</div>
              <div className="text-gray-600">Job Listings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}