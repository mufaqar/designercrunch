import React from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Clock, 
  User, 
  Download,
  BookOpen,
  ArrowRight,
  Calendar,
  Tag,
  Heart,
  Share2,
  Bookmark,
  Eye,
  ChevronRight,
  Mail,
  Award
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface BlogsPageProps {
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function BlogsPage({ onNavigate }: BlogsPageProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('recent');

  const categories = [
    { id: 'all', name: 'All', count: 156 },
    { id: 'ui-ux', name: 'UI/UX', count: 42 },
    { id: 'graphic-design', name: 'Graphic Design', count: 38 },
    { id: 'web-app', name: 'Web & App Design', count: 34 },
    { id: 'ai-design', name: 'AI in Design', count: 28 },
    { id: 'branding', name: 'Branding', count: 14 }
  ];

  const featuredBlogs = [
    {
      id: 'featured-1',
      title: 'The Future of AI in Design: Trends Shaping 2025',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the design process and what it means for creatives.',
      image: 'https://images.unsplash.com/photo-1738003946582-aabeabf5e009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGVzaWdufGVufDF8fHx8MTc1ODIxNjk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'AI in Design',
      author: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612e732?w=150',
        role: 'Lead UX Designer'
      },
      readTime: '8 min read',
      publishDate: '2025-01-18',
      views: 12450,
      likes: 387,
      editorsChoice: true,
      trending: true
    },
    {
      id: 'featured-2',
      title: 'Building Accessible Design Systems: A Complete Guide',
      excerpt: 'Learn how to create inclusive design systems that work for everyone, from planning to implementation.',
      image: 'https://images.unsplash.com/photo-1721714933699-1a7650a79754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI4NDg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'UI/UX',
      author: {
        name: 'Marcus Rodriguez',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        role: 'Design System Lead'
      },
      readTime: '12 min read',
      publishDate: '2025-01-17',
      views: 8920,
      likes: 234,
      editorsChoice: true,
      trending: false
    },
    {
      id: 'featured-3',
      title: 'Typography in Digital Design: Best Practices for 2025',
      excerpt: 'Master the art of typography in digital interfaces with these essential principles and practical tips.',
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdml0eXxlbnwxfHx8fDE3NTgyMDExOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Graphic Design',
      author: {
        name: 'Emily Johnson',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        role: 'Senior Graphic Designer'
      },
      readTime: '6 min read',
      publishDate: '2025-01-16',
      views: 6780,
      likes: 189,
      editorsChoice: false,
      trending: true
    }
  ];

  const allBlogs = [
    ...featuredBlogs,
    {
      id: 'blog-4',
      title: 'Creating Stunning Brand Identities: From Concept to Completion',
      excerpt: 'A comprehensive guide to developing memorable brand identities that resonate with your target audience.',
      image: 'https://images.unsplash.com/photo-1633533448522-26ee3eab7961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMGlkZW50aXR5fGVufDF8fHx8MTc1ODE4OTYwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Branding',
      author: {
        name: 'David Kim',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        role: 'Brand Strategist'
      },
      readTime: '10 min read',
      publishDate: '2025-01-15',
      views: 5430,
      likes: 156,
      editorsChoice: false,
      trending: false
    },
    {
      id: 'blog-5',
      title: 'Mobile-First Design: Strategies for Modern Web Applications',
      excerpt: 'Learn how to design exceptional mobile experiences that scale beautifully across all devices.',
      image: 'https://images.unsplash.com/photo-1659035260002-11d486d6e9f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4Mjg0ODQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Web & App Design',
      author: {
        name: 'Lisa Zhang',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
        role: 'Mobile UX Designer'
      },
      readTime: '7 min read',
      publishDate: '2025-01-14',
      views: 4210,
      likes: 98,
      editorsChoice: false,
      trending: false
    },
    {
      id: 'blog-6',
      title: 'Color Psychology in UI Design: Choosing the Right Palette',
      excerpt: 'Understand how colors affect user behavior and learn to create emotionally engaging interfaces.',
      image: 'https://images.unsplash.com/photo-1623697899817-2e067e4a4036?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBibG9nJTIwd3JpdGluZyUyMGluc3BpcmF0aW9ufGVufDF8fHx8MTc1ODI4NDgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'UI/UX',
      author: {
        name: 'Alex Thompson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
        role: 'UI Designer'
      },
      readTime: '5 min read',
      publishDate: '2025-01-13',
      views: 3850,
      likes: 127,
      editorsChoice: false,
      trending: false
    }
  ];

  const popularBlogs = [
    { title: 'Design Systems 101: Getting Started', views: 15200, category: 'UI/UX' },
    { title: 'The Psychology of Color in Branding', views: 12800, category: 'Branding' },
    { title: 'Figma vs Sketch: Complete Comparison', views: 11400, category: 'Tools' },
    { title: 'Responsive Design Best Practices', views: 9600, category: 'Web Design' },
    { title: 'Typography Trends for 2025', views: 8300, category: 'Typography' }
  ];

  const tags = [
    'UI', 'UX', 'Branding', 'Typography', 'Color Theory', 'Design Systems', 
    'Accessibility', 'Mobile Design', 'Web Design', 'AI Tools', 'Figma', 
    'Adobe', 'Prototyping', 'User Research', 'Visual Design'
  ];

  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.views - a.views;
      case 'likes':
        return b.likes - a.likes;
      case 'recent':
      default:
        return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    }
  });

  const handleNewsletterSignup = () => {
    toast.success('Thanks for subscribing! You\'ll receive weekly design inspiration.');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              <BookOpen className="w-4 h-4 mr-2" />
              Design Insights & Tutorials
            </Badge>
            
            <h1 className="text-4xl lg:text-7xl mb-6">
              Your Daily Dose of <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Design Inspiration</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Latest insights, trends, and tutorials in design & creativity. 
              Learn from industry experts and level up your design skills.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-blue-500 transition-colors" />
              <Input
                type="text"
                placeholder="Search blogs & resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 pr-6 py-4 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-2xl shadow-lg group-focus-within:shadow-xl transition-all duration-300"
              />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Blogs
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 rounded-xl text-lg border-2 hover:bg-gray-50 transition-all duration-300"
              onClick={() => onNavigate('resources')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Free Vectors
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">150+</div>
              <div className="text-gray-600">Blog Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">25K+</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">4.9★</div>
              <div className="text-gray-600">Reader Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Featured <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked articles from our expert team and guest contributors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredBlogs.map((blog, index) => (
              <Card 
                key={blog.id} 
                className={`group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
                onClick={() => onNavigate('blogs', 'article', blog.id)}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/9]' : 'aspect-video'}`}>
                  <ImageWithFallback
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                      {blog.category}
                    </Badge>
                    {blog.editorsChoice && (
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <Award className="w-3 h-3 mr-1" />
                        Editor's Pick
                      </Badge>
                    )}
                    {blog.trending && (
                      <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className={`${index === 0 ? 'text-2xl' : 'text-lg'} mb-3 group-hover:text-blue-600 transition-colors`}>
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
                        <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-sm font-medium">{blog.author.name}</div>
                        <div className="text-xs text-gray-500">{blog.author.role}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {blog.views.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories & All Blogs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              {/* Categories Filter */}
              <div className="flex flex-wrap gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                      selectedCategory === category.name
                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                        : 'border-gray-300 hover:border-blue-600 hover:text-blue-600 bg-white'
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl mb-1">All Articles</h3>
                  <p className="text-gray-600">
                    {sortedBlogs.length} articles found
                    {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant={sortBy === 'recent' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy('recent')}
                  >
                    Most Recent
                  </Button>
                  <Button
                    variant={sortBy === 'popular' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy('popular')}
                  >
                    Most Popular
                  </Button>
                  <Button
                    variant={sortBy === 'likes' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy('likes')}
                  >
                    Most Liked
                  </Button>
                </div>
              </div>

              {/* Blog Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sortedBlogs.map((blog) => (
                  <Card 
                    key={blog.id} 
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                    onClick={() => onNavigate('blogs', 'article', blog.id)}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <ImageWithFallback
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                          {blog.category}
                        </Badge>
                        {blog.editorsChoice && (
                          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                            <Award className="w-3 h-3 mr-1" />
                            Pick
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg mb-3 group-hover:text-blue-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
                            <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-sm font-medium">{blog.author.name}</div>
                            <div className="text-xs text-gray-500">{formatDate(blog.publishDate)}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {blog.readTime}
                          </div>
                        </div>
                      </div>
                      
                      <Button className="w-full group-hover:bg-blue-600 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-80 space-y-8">
              {/* Newsletter Signup */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg mb-2">Get Weekly Design Inspiration</h4>
                    <p className="text-sm text-gray-600">
                      Join 50K+ designers receiving our best articles, resources, and design tips.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Input 
                      type="email" 
                      placeholder="Enter your email"
                      className="border-2 border-gray-200 focus:border-blue-500"
                    />
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={handleNewsletterSignup}
                    >
                      Subscribe for Free
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">
                    No spam, unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>

              {/* Popular Blogs */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    <h4 className="text-lg">Popular This Week</h4>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {popularBlogs.map((blog, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-medium mb-1 line-clamp-2">{blog.title}</h5>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Badge variant="secondary" className="text-xs">{blog.category}</Badge>
                          <span>•</span>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {blog.views.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Tags Cloud */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    <h4 className="text-lg">Popular Tags</h4>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <button
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 hover:bg-blue-100 hover:text-blue-600 rounded-full transition-colors"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}