import React from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Star, 
  Eye, 
  Heart,
  Tag,
  Grid,
  List,
  Palette,
  Image,
  Code,
  Zap,
  Crown,
  TrendingUp,
  Clock,
  User,
  ExternalLink,
  Bookmark,
  Share2,
  CheckCircle,
  Plus
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface ResourcesPageProps {
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function ResourcesPage({ onNavigate }: ResourcesPageProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = React.useState('latest');
  const [bookmarkedResources, setBookmarkedResources] = React.useState<string[]>([]);

  const categories = [
    { id: 'icons', name: 'Icons & Symbols', icon: Zap, count: 250, color: 'bg-black' },
    { id: 'ui-kits', name: 'UI Kits', icon: Grid, count: 45, color: 'bg-yellow-500' },
    { id: 'templates', name: 'Templates', icon: Code, count: 120, color: 'bg-black' },
    { id: 'mockups', name: 'Mockups', icon: Image, count: 180, color: 'bg-yellow-500' },
    { id: 'illustrations', name: 'Illustrations', icon: Palette, count: 85, color: 'bg-black' },
    { id: 'fonts', name: 'Fonts', icon: Tag, count: 65, color: 'bg-yellow-500' }
  ];

  const resources = [
    {
      id: 'minimal-icons-pack',
      title: 'Minimal Icons Pack - 500+ Icons',
      category: 'icons',
      description: 'Clean, minimal icons perfect for modern web and mobile applications. Available in SVG, PNG formats.',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaWNvbnMlMjBkZXNpZ258ZW58MXx8fHwxNzU4Mjg1NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      downloads: 15420,
      likes: 2340,
      rating: 4.9,
      fileSize: '2.5 MB',
      format: ['SVG', 'PNG', 'AI'],
      license: 'Commercial',
      author: 'DesignStudio',
      dateAdded: '2024-12-15',
      featured: true,
      premium: false,
      tags: ['icons', 'minimal', 'web', 'mobile', 'ui']
    },
    {
      id: 'dashboard-ui-kit',
      title: 'Modern Dashboard UI Kit',
      category: 'ui-kits',
      description: 'Complete dashboard UI kit with 50+ components, perfect for admin panels and analytics dashboards.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NTgyODU2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      downloads: 8950,
      likes: 1890,
      rating: 4.8,
      fileSize: '12.8 MB',
      format: ['Figma', 'Sketch', 'XD'],
      license: 'Commercial',
      author: 'UIDesigners',
      dateAdded: '2024-12-10',
      featured: true,
      premium: true,
      tags: ['dashboard', 'admin', 'analytics', 'components']
    },
    {
      id: 'landing-page-templates',
      title: 'SaaS Landing Page Templates',
      category: 'templates',
      description: 'Collection of 12 high-converting SaaS landing page templates with modern design and animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kaW5nJTIwcGFnZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTgyODU2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      downloads: 12300,
      likes: 2100,
      rating: 4.7,
      fileSize: '45.2 MB',
      format: ['HTML', 'CSS', 'Figma'],
      license: 'Commercial',
      author: 'WebTemplates',
      dateAdded: '2024-12-08',
      featured: false,
      premium: true,
      tags: ['saas', 'landing', 'template', 'conversion']
    },
    {
      id: 'device-mockups',
      title: 'Device Mockups Collection',
      category: 'mockups',
      description: 'Professional device mockups including iPhone, MacBook, iPad, and Android devices in various angles.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZpY2UlMjBtb2NrdXBzfGVufDF8fHx8MTc1ODI4NTY1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      downloads: 9870,
      likes: 1650,
      rating: 4.6,
      fileSize: '28.4 MB',
      format: ['PSD', 'Sketch', 'Figma'],
      license: 'Commercial',
      author: 'MockupStudio',
      dateAdded: '2024-12-05',
      featured: false,
      premium: false,
      tags: ['mockup', 'device', 'presentation', 'showcase']
    },
    {
      id: 'abstract-illustrations',
      title: 'Abstract Geometric Illustrations',
      category: 'illustrations',
      description: 'Set of 25 abstract geometric illustrations perfect for web headers, presentations, and branding.',
      image: 'https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTgyODU2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      downloads: 7420,
      likes: 1230,
      rating: 4.5,
      fileSize: '18.6 MB',
      format: ['SVG', 'AI', 'PNG'],
      license: 'Commercial',
      author: 'AbstractArt',
      dateAdded: '2024-12-03',
      featured: false,
      premium: false,
      tags: ['abstract', 'geometric', 'illustration', 'modern']
    },
    {
      id: 'modern-font-bundle',
      title: 'Modern Sans Serif Font Bundle',
      category: 'fonts',
      description: 'Collection of 8 modern sans serif fonts with multiple weights, perfect for branding and web design.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0eXBvZ3JhcGh5JTIwZm9udHN8ZW58MXx8fHwxNzU4Mjg1NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      downloads: 11200,
      likes: 1980,
      rating: 4.8,
      fileSize: '8.2 MB',
      format: ['OTF', 'TTF', 'WOFF'],
      license: 'Commercial',
      author: 'TypeFoundry',
      dateAdded: '2024-12-01',
      featured: true,
      premium: true,
      tags: ['font', 'typography', 'sans serif', 'modern']
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedResources = [...filteredResources].sort((a, b) => {
    switch (sortBy) {
      case 'downloads':
        return b.downloads - a.downloads;
      case 'rating':
        return b.rating - a.rating;
      case 'latest':
      default:
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    }
  });

  const handleBookmark = (resourceId: string) => {
    setBookmarkedResources(prev => 
      prev.includes(resourceId) 
        ? prev.filter(id => id !== resourceId)
        : [...prev, resourceId]
    );
  };

  const handleDownload = (resource: any) => {
    if (resource.premium) {
      toast.info("This is a premium resource. Sign up for Pro access!");
    } else {
      toast.success(`Downloading ${resource.title}...`);
    }
  };

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <Badge className="mb-6 bg-black text-white hover:bg-gray-800">
              <Download className="w-4 h-4 mr-2" />
              Free Design Resources
            </Badge>
            
            <h1 className="text-4xl lg:text-7xl mb-6">
              Premium <span className="text-yellow-500">Resources</span> for Free
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Download high-quality design resources including icons, UI kits, templates, and more. 
              All resources are free for commercial use.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-yellow-500 transition-colors" />
              <Input
                type="text"
                placeholder="Search resources by name, category, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 pr-6 py-4 text-lg border-2 border-gray-200 focus:border-yellow-500 rounded-xl shadow-sm group-focus-within:shadow-md transition-all duration-300"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2 text-black">750+</div>
              <div className="text-gray-600">Free Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 text-yellow-500">2M+</div>
              <div className="text-gray-600">Total Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 text-black">100%</div>
              <div className="text-gray-600">Commercial License</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Browse by <span className="text-yellow-500">Category</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find exactly what you need with our organized resource categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={category.id} 
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                  onClick={() => {
                    if (category.id === 'icons') {
                      onNavigate('resources', 'icons', 'all');
                    } else {
                      setSelectedCategory(category.id);
                    }
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300 mr-4`}>
                        <Icon className={`w-6 h-6 ${category.color === 'bg-black' ? 'text-white' : 'text-black'}`} />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1 group-hover:text-yellow-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-500">{category.count} resources</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        Free
                      </Badge>
                      <div className="w-5 h-5 text-gray-400 group-hover:text-yellow-600 transition-colors">
                        →
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl mb-4">
                <span className="text-yellow-500">Featured</span> Resources
              </h2>
              <p className="text-lg text-gray-600">
                Hand-picked premium resources from our collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <ImageWithFallback
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-black text-white">
                        <Crown className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-8 h-8 p-0 bg-white/80 hover:bg-white"
                        onClick={() => handleBookmark(resource.id)}
                      >
                        <Heart className={`w-4 h-4 ${bookmarkedResources.includes(resource.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl mb-2 group-hover:text-yellow-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {resource.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {resource.downloads.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                        {resource.rating}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {resource.author}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm text-gray-500">
                        <span>{resource.fileSize}</span> • <span>{resource.format.join(', ')}</span>
                      </div>
                      {resource.premium && (
                        <Badge className="bg-yellow-500 text-black text-xs">
                          Premium
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-black hover:bg-gray-800 text-white"
                        onClick={() => handleDownload(resource)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => onNavigate('resources', 'detail', resource.id)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl mb-2">All Resources</h2>
              <p className="text-gray-600">
                {sortedResources.length} resources found
                {selectedCategory !== 'All' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
              </p>
            </div>

            <div className="flex gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="downloads">Most Downloaded</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <Button
                  size="sm"
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  onClick={() => setViewMode('grid')}
                  className="rounded-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  onClick={() => setViewMode('list')}
                  className="rounded-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Resources Grid/List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {sortedResources.map((resource) => (
              <Card key={resource.id} className={`group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                  <div className={`overflow-hidden ${viewMode === 'list' ? 'aspect-square' : 'aspect-video'}`}>
                    <ImageWithFallback
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-2 right-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 bg-white/80 hover:bg-white"
                      onClick={() => handleBookmark(resource.id)}
                    >
                      <Heart className={`w-4 h-4 ${bookmarkedResources.includes(resource.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                    </Button>
                  </div>
                  {resource.premium && (
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-yellow-500 text-black text-xs">
                        Premium
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                  <div className="mb-3">
                    <h3 className={`mb-2 group-hover:text-yellow-600 transition-colors ${viewMode === 'list' ? 'text-lg' : 'text-base'}`}>
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {resource.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                    <div className="flex items-center">
                      <Download className="w-3 h-3 mr-1" />
                      {resource.downloads.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 mr-1 text-yellow-400 fill-current" />
                      {resource.rating}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {resource.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm"
                      className="flex-1 bg-black hover:bg-gray-800 text-white"
                      onClick={() => handleDownload(resource)}
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => onNavigate('resources', 'detail', resource.id)}
                    >
                      <Eye className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Want More <span className="text-yellow-500">Premium</span> Resources?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Upgrade to Pro and get access to our entire collection of premium design resources, 
            including exclusive templates, advanced UI kits, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg text-lg"
              onClick={() => onNavigate('services')}
            >
              Upgrade to Pro
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-4 rounded-lg text-lg border-2 border-gray-300 hover:bg-gray-50"
              onClick={() => onNavigate('contact')}
            >
              Request Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}