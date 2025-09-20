import React from 'react';
import { Download, Heart, Eye, Star, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeaturedResourcesProps {
  onNavigate: (page: string) => void;
}

export function FeaturedResources({ onNavigate }: FeaturedResourcesProps) {
  const featuredResources = [
    {
      id: 1,
      title: "Modern UI Icon Pack",
      description: "500+ premium icons for web and mobile applications. Available in SVG, PNG, and Figma formats.",
      type: "Icons",
      format: "SVG, PNG, Figma",
      downloads: "12.5K",
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgyMjMyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      featured: true,
      free: true
    },
    {
      id: 2,
      title: "Abstract Background Collection",
      description: "Beautiful abstract backgrounds and patterns perfect for modern web design projects.",
      type: "Backgrounds",
      format: "AI, EPS, PNG",
      downloads: "8.2K",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1659076048099-4f8a331c7715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMGluc3BpcmF0aW9ufGVufDF8fHx8MTc1ODI3NzE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      free: true
    },
    {
      id: 3,
      title: "Dashboard UI Kit",
      description: "Complete dashboard template with 50+ components and screens for admin panels.",
      type: "UI Kit",
      format: "Figma, Sketch",
      downloads: "15.7K",
      rating: 4.8,
      reviews: 289,
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODE5OTE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      free: true
    },
    {
      id: 4,
      title: "Mobile App Mockups",
      description: "High-quality smartphone mockups for showcasing your mobile app designs.",
      type: "Mockups",
      format: "PSD, AI",
      downloads: "6.3K",
      rating: 4.6,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1636247497842-81ee9c80f9df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NTgyNTM3NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      free: true
    },
    {
      id: 5,
      title: "Illustration Pack",
      description: "Hand-drawn illustrations perfect for websites, presentations, and marketing materials.",
      type: "Illustrations",
      format: "AI, SVG, PNG",
      downloads: "9.1K",
      rating: 4.9,
      reviews: 167,
      image: "https://images.unsplash.com/photo-1659076048099-4f8a331c7715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMGluc3BpcmF0aW9ufGVufDF8fHx8MTc1ODI3NzE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      free: true
    },
    {
      id: 6,
      title: "Typography Bundle",
      description: "Modern font combinations and typography guidelines for digital design projects.",
      type: "Fonts",
      format: "OTF, TTF, WOFF",
      downloads: "11.4K",
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODE5OTE0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      free: true
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Icons': 'bg-blue-100 text-blue-700',
      'Backgrounds': 'bg-purple-100 text-purple-700',
      'UI Kit': 'bg-teal-100 text-teal-700',
      'Mockups': 'bg-green-100 text-green-700',
      'Illustrations': 'bg-orange-100 text-orange-700',
      'Fonts': 'bg-pink-100 text-pink-700'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Free <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download high-quality design resources including icons, UI kits, mockups, and illustrations - all completely free.
          </p>
        </div>

        {/* Featured Resource */}
        {featuredResources.filter(resource => resource.featured).map((resource) => (
          <Card key={resource.id} className="mb-12 overflow-hidden border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <ImageWithFallback
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-80 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Featured
                  </Badge>
                  {resource.free && (
                    <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                      Free
                    </Badge>
                  )}
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="secondary" className={`${getTypeColor(resource.type)} w-fit mb-4`}>
                    {resource.type}
                  </Badge>
                  <h3 className="text-2xl lg:text-3xl mb-4">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {resource.downloads} downloads
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {resource.rating} ({resource.reviews})
                    </div>
                    <div>Format: {resource.format}</div>
                  </div>
                  <div className="flex gap-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex-1 lg:flex-none">
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </Button>
                    <Button variant="outline" className="flex-shrink-0">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="icon">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredResources.filter(resource => !resource.featured).map((resource) => (
            <Card key={resource.id} className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <ImageWithFallback
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {resource.free && (
                    <Badge className="absolute top-4 left-4 bg-green-500 text-white">
                      Free
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                        <Eye className="w-4 h-4 mr-1" />
                        Preview
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <Badge variant="secondary" className={`${getTypeColor(resource.type)} mb-3`}>
                    {resource.type}
                  </Badge>
                  <h3 className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {resource.downloads}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {resource.rating}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={() => onNavigate('resources')}
            className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 px-8 py-3 rounded-xl"
          >
            Browse All Resources
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}