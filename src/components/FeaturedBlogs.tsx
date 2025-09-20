import React from 'react';
import { Clock, ArrowRight, Heart, Share2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FeaturedBlogsProps {
  onNavigate: (page: string) => void;
}

export function FeaturedBlogs({ onNavigate }: FeaturedBlogsProps) {
  const featuredBlogs = [
    {
      id: 1,
      title: "10 UI Design Trends That Will Dominate 2024",
      excerpt: "Explore the latest UI design trends shaping the digital landscape, from minimalist interfaces to bold color schemes.",
      category: "UI/UX",
      readTime: "8 min read",
      author: "Sarah Chen",
      date: "Dec 15, 2023",
      image: "https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMGRlc2lnbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTgyMjMyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 234,
      featured: true
    },
    {
      id: 2,
      title: "The Psychology of Color in Branding",
      excerpt: "Understanding how colors influence consumer behavior and decision-making in brand design.",
      category: "Branding",
      readTime: "12 min read",
      author: "Michael Rodriguez",
      date: "Dec 12, 2023",
      image: "https://images.unsplash.com/photo-1650402268468-7526b2502a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMHBhbGV0dGUlMjBkZXNpZ258ZW58MXx8fHwxNzU4MTgxMDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 189
    },
    {
      id: 3,
      title: "AI Tools Every Designer Should Know",
      excerpt: "Discover the latest AI-powered design tools that are revolutionizing creative workflows and productivity.",
      category: "AI in Design",
      readTime: "10 min read",
      author: "Emma Thompson",
      date: "Dec 10, 2023",
      image: "https://images.unsplash.com/photo-1659076048099-4f8a331c7715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMGluc3BpcmF0aW9ufGVufDF8fHx8MTc1ODI3NzE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 156
    },
    {
      id: 4,
      title: "Mobile-First Design Best Practices",
      excerpt: "Essential guidelines for creating responsive, mobile-optimized designs that deliver exceptional user experiences.",
      category: "Web & App Design",
      readTime: "6 min read",
      author: "David Kim",
      date: "Dec 8, 2023",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTgyMzk3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 98
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'UI/UX': 'bg-blue-100 text-blue-700',
      'Branding': 'bg-purple-100 text-purple-700',
      'AI in Design': 'bg-teal-100 text-teal-700',
      'Web & App Design': 'bg-green-100 text-green-700',
      'Graphic Design': 'bg-orange-100 text-orange-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up-to-date with the latest design trends, tutorials, and insights from industry experts.
          </p>
        </div>

        {/* Featured Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {featuredBlogs.slice(0, 2).map((blog, index) => (
            <Card key={blog.id} className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <ImageWithFallback
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {blog.featured && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className={getCategoryColor(blog.category)}>
                      {blog.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm">
                        {blog.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-sm">{blog.author}</div>
                        <div className="text-xs text-gray-500">{blog.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Heart className="w-4 h-4 mr-1" />
                      {blog.likes}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Regular Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredBlogs.slice(2).map((blog) => (
            <Card key={blog.id} className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <ImageWithFallback
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary" className={getCategoryColor(blog.category)}>
                      {blog.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">{blog.author}</div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Heart className="w-4 h-4 mr-1" />
                      {blog.likes}
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
            onClick={() => onNavigate('blogs')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-xl"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}