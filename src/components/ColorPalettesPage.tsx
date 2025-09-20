import React from 'react';
import { 
  Search, 
  Filter, 
  Heart, 
  Download, 
  Copy, 
  Check, 
  Eye, 
  Clock, 
  Bookmark, 
  Share2, 
  ArrowLeft,
  Star,
  ChevronRight,
  Palette,
  TrendingUp
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface ColorPalettesPageProps {
  onNavigate: (page: string, subPage?: string, id?: string) => void;
  subPage?: string;
  articleId?: string;
}

export function ColorPalettesPage({ onNavigate, subPage, articleId }: ColorPalettesPageProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);
  const [activeTab, setActiveTab] = React.useState('explore');

  const colorBlogs = [
    {
      id: 'color-psychology-2024',
      title: "The Psychology of Color in Modern Web Design",
      excerpt: "Discover how different colors influence user behavior and emotional responses in digital interfaces.",
      author: "Sarah Chen",
      readTime: "8 min read",
      date: "Dec 15, 2023",
      category: "Color Theory",
      image: "https://images.unsplash.com/photo-1631543763678-6e529a1b8c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaG9sb2d5JTIwY29sb3JzfGVufDF8fHx8MTc1ODI3ODIwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 342,
      views: 5600,
      featured: true
    },
    {
      id: 'trending-color-schemes',
      title: "15 Trending Color Schemes for 2024",
      excerpt: "Explore the most popular color combinations that are dominating design trends this year.",
      author: "Michael Rodriguez",
      readTime: "12 min read",
      date: "Dec 12, 2023",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1655141213092-b4563e4dd8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMHRoZW9yeSUyMGRlc2lnbnxlbnwxfHx8fDE3NTgyNzgxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 289,
      views: 4200
    },
    {
      id: 'brand-color-guide',
      title: "Creating a Cohesive Brand Color Palette",
      excerpt: "Step-by-step guide to developing colors that represent your brand identity and values.",
      author: "Emma Thompson",
      readTime: "10 min read",
      date: "Dec 10, 2023",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1650402268468-7526b2502a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGNvbG9ycyUyMGRlc2lnbnxlbnwxfHx8fDE3NTgyNzgyMDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 156,
      views: 3100
    },
    {
      id: 'accessibility-colors',
      title: "Color Accessibility in Digital Design",
      excerpt: "Learn how to create inclusive color schemes that work for everyone, including users with color vision deficiencies.",
      author: "David Kim",
      readTime: "6 min read",
      date: "Dec 8, 2023",
      category: "Accessibility",
      image: "https://images.unsplash.com/photo-1716471330501-b443b15a716f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwY29sb3JzfGVufDF8fHx8MTc1ODI3ODIwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 198,
      views: 2800
    },
    {
      id: 'seasonal-color-trends',
      title: "Seasonal Color Trends: Winter 2024 Palette Guide",
      excerpt: "Explore the cozy, sophisticated color palettes that are perfect for winter design projects.",
      author: "Lisa Park",
      readTime: "7 min read",
      date: "Dec 5, 2023",
      category: "Trends",
      image: "https://images.unsplash.com/photo-1655141213092-b4563e4dd8fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMHRoZW9yeSUyMGRlc2lnbnxlbnwxfHx8fDE3NTgyNzgxOTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 167,
      views: 2300
    },
    {
      id: 'color-harmony-principles',
      title: "Understanding Color Harmony: A Designer's Guide",
      excerpt: "Master the fundamental principles of color harmony and learn how to create visually pleasing combinations.",
      author: "Alex Johnson",
      readTime: "11 min read",
      date: "Dec 3, 2023",
      category: "Color Theory",
      image: "https://images.unsplash.com/photo-1631543763678-6e529a1b8c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaG9sb2d5JTIwY29sb3JzfGVufDF8fHx8MTc1ODI3ODIwNHww&ixlib=rb-4.1.0&q=80&w=1080",
      likes: 234,
      views: 3900
    }
  ];

  const colorPalettes = [
    {
      id: 'ocean-breeze',
      name: "Ocean Breeze",
      category: "Modern",
      colors: ["#0066CC", "#4A90E2", "#7FB3D3", "#B8E6FF", "#E8F7FF"],
      downloads: "2.1K",
      likes: 156,
      author: "Sarah Chen",
      tags: ["blue", "calm", "professional", "ocean"],
      featured: true
    },
    {
      id: 'sunset-gradient',
      name: "Sunset Gradient",
      category: "Vibrant",
      colors: ["#FF6B6B", "#FF8E53", "#FF6B9D", "#FFB8E1", "#F7E7FF"],
      downloads: "1.8K",
      likes: 234,
      author: "Michael Rodriguez",
      tags: ["warm", "vibrant", "sunset", "gradient"]
    },
    {
      id: 'forest-calm',
      name: "Forest Calm",
      category: "Minimal",
      colors: ["#2D5A27", "#4A7C59", "#7A9471", "#B8C5A6", "#E8F0E3"],
      downloads: "1.5K",
      likes: 189,
      author: "Emma Thompson",
      tags: ["green", "nature", "calm", "minimal"]
    },
    {
      id: 'royal-purple',
      name: "Royal Purple",
      category: "Modern",
      colors: ["#6A0DAD", "#8A2BE2", "#9370DB", "#C8A2C8", "#E6E6FA"],
      downloads: "2.3K",
      likes: 298,
      author: "David Kim",
      tags: ["purple", "royal", "elegant", "luxury"]
    },
    {
      id: 'autumn-leaves',
      name: "Autumn Leaves",
      category: "Vibrant",
      colors: ["#D2691E", "#CD853F", "#DEB887", "#F5DEB3", "#FFF8DC"],
      downloads: "1.2K",
      likes: 142,
      author: "Lisa Park",
      tags: ["autumn", "warm", "brown", "seasonal"]
    },
    {
      id: 'mint-fresh',
      name: "Mint Fresh",
      category: "Pastel",
      colors: ["#00CED1", "#48D1CC", "#98FB98", "#C0FFC0", "#F0FFF0"],
      downloads: "1.9K",
      likes: 201,
      author: "Alex Johnson",
      tags: ["mint", "fresh", "green", "pastel"]
    },
    {
      id: 'monochrome-elegance',
      name: "Monochrome Elegance",
      category: "Minimal",
      colors: ["#000000", "#333333", "#666666", "#CCCCCC", "#FFFFFF"],
      downloads: "3.1K",
      likes: 387,
      author: "Sarah Chen",
      tags: ["monochrome", "elegant", "minimal", "classic"]
    },
    {
      id: 'cherry-blossom',
      name: "Cherry Blossom",
      category: "Pastel",
      colors: ["#FFB7C5", "#FFC0CB", "#FFD1DC", "#FFE4E1", "#FFF0F5"],
      downloads: "1.7K",
      likes: 223,
      author: "Michael Rodriguez",
      tags: ["pink", "pastel", "soft", "spring"]
    },
    {
      id: 'electric-blues',
      name: "Electric Blues",
      category: "Vibrant",
      colors: ["#0047AB", "#1E90FF", "#00BFFF", "#87CEEB", "#E0F6FF"],
      downloads: "2.0K",
      likes: 176,
      author: "Emma Thompson",
      tags: ["blue", "electric", "vibrant", "tech"]
    },
    {
      id: 'earth-tones',
      name: "Earth Tones",
      category: "Modern",
      colors: ["#8B4513", "#A0522D", "#CD853F", "#DEB887", "#F5F5DC"],
      downloads: "1.6K",
      likes: 154,
      author: "David Kim",
      tags: ["earth", "brown", "natural", "warm"]
    },
    {
      id: 'cosmic-purple',
      name: "Cosmic Purple",
      category: "Vibrant",
      colors: ["#4B0082", "#663399", "#8A2BE2", "#BA55D3", "#DDA0DD"],
      downloads: "1.4K",
      likes: 167,
      author: "Lisa Park",
      tags: ["purple", "cosmic", "space", "vibrant"]
    },
    {
      id: 'soft-pastels',
      name: "Soft Pastels",
      category: "Pastel",
      colors: ["#FFE4E1", "#E6E6FA", "#F0F8FF", "#F5FFFA", "#FFF8DC"],
      downloads: "2.2K",
      likes: 245,
      author: "Alex Johnson",
      tags: ["pastel", "soft", "gentle", "light"]
    }
  ];

  const blogCategories = ['All', 'Color Theory', 'Trends', 'Branding', 'Accessibility', 'Psychology'];
  const paletteCategories = ['All', 'Modern', 'Vibrant', 'Minimal', 'Pastel'];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Modern': 'bg-blue-100 text-blue-700',
      'Vibrant': 'bg-orange-100 text-orange-700',
      'Minimal': 'bg-gray-100 text-gray-700',
      'Pastel': 'bg-pink-100 text-pink-700',
      'Color Theory': 'bg-purple-100 text-purple-700',
      'Trends': 'bg-green-100 text-green-700',
      'Branding': 'bg-yellow-100 text-yellow-700',
      'Accessibility': 'bg-teal-100 text-teal-700',
      'Psychology': 'bg-indigo-100 text-indigo-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const copyToClipboard = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(color);
      toast.success(`Copied ${color} to clipboard!`);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      toast.error('Failed to copy color');
    }
  };

  const downloadPalette = (palette: any) => {
    toast.success(`Downloaded ${palette.name} palette!`);
  };

  const filteredBlogs = colorBlogs.filter(blog => 
    selectedCategory === 'All' || blog.category === selectedCategory
  );

  const filteredPalettes = colorPalettes.filter(palette => 
    selectedCategory === 'All' || palette.category === selectedCategory
  );

  // Individual Article View
  if (subPage === 'article' && articleId) {
    const article = colorBlogs.find(blog => blog.id === articleId);
    if (!article) {
      return <div>Article not found</div>;
    }

    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Button 
            onClick={() => onNavigate('palettes')}
            variant="ghost" 
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Color Palettes
          </Button>

          <article>
            <header className="mb-12">
              <Badge className={`mb-4 ${getCategoryColor(article.category)}`}>
                {article.category}
              </Badge>
              <h1 className="text-4xl lg:text-5xl mb-6">{article.title}</h1>
              <p className="text-xl text-gray-600 mb-8">{article.excerpt}</p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-sm">{article.author}</div>
                    <div className="text-xs text-gray-500">{article.date}</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm gap-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {article.views} views
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-4 h-4 mr-1" />
                    {article.likes}
                  </div>
                </div>
              </div>

              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-96 object-cover rounded-xl mb-12"
              />
            </header>

            <div className="prose prose-lg max-w-none">
              <p>Color psychology plays a crucial role in modern web design, influencing how users perceive and interact with digital interfaces. Understanding the emotional and psychological impact of different colors can help designers create more effective and engaging user experiences.</p>

              <h2>The Science Behind Color Psychology</h2>
              <p>Colors have been scientifically proven to evoke specific emotional responses and influence behavior. This phenomenon occurs because our brains have evolved to associate certain colors with particular experiences, emotions, or states of being.</p>

              <h3>Primary Color Associations</h3>
              <ul>
                <li><strong>Blue:</strong> Trust, reliability, professionalism, and calmness</li>
                <li><strong>Red:</strong> Energy, urgency, passion, and attention-grabbing</li>
                <li><strong>Green:</strong> Growth, nature, harmony, and freshness</li>
                <li><strong>Yellow:</strong> Optimism, creativity, warmth, and friendliness</li>
                <li><strong>Purple:</strong> Luxury, creativity, mystery, and sophistication</li>
                <li><strong>Orange:</strong> Enthusiasm, confidence, energy, and playfulness</li>
              </ul>

              <h2>Applying Color Psychology in Web Design</h2>
              <p>When implementing color psychology in web design, consider your target audience, brand identity, and the specific actions you want users to take. Different industries and demographics may respond differently to various color schemes.</p>

              <h3>Call-to-Action Colors</h3>
              <p>The color of your call-to-action buttons can significantly impact conversion rates. Red and orange tend to create urgency, while green suggests "go" and blue builds trust. Test different colors to see what works best for your specific audience.</p>

              <h2>Cultural Considerations</h2>
              <p>Remember that color associations can vary across cultures. What represents prosperity in one culture might symbolize mourning in another. Always research your target audience's cultural background when designing for global markets.</p>

              <h2>Conclusion</h2>
              <p>By understanding and applying color psychology principles, designers can create more intuitive, engaging, and effective user interfaces. The key is to align your color choices with your brand message, user expectations, and desired outcomes.</p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Like ({article.likes})
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <section className="mt-16">
            <h3 className="text-2xl mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {colorBlogs.filter(blog => blog.id !== articleId).slice(0, 4).map((blog) => (
                <Card 
                  key={blog.id} 
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => onNavigate('palettes', 'article', blog.id)}
                >
                  <CardContent className="p-0">
                    <ImageWithFallback
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <Badge className={`mb-2 ${getCategoryColor(blog.category)}`}>
                        {blog.category}
                      </Badge>
                      <h4 className="text-lg mb-2">{blog.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{blog.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {blog.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  // Main Color Palettes Page
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">
            Color <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Palettes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore beautiful color combinations, learn color theory, and discover trending palettes for your next design project.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search color palettes, articles, or colors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-teal-500 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="explore">Explore</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
            </TabsList>

            <TabsContent value="explore" className="mt-0">
              {/* Color Palettes Section */}
              <section className="py-16">
                <div className="mb-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-2xl mb-2">Explore Color Palettes</h2>
                      <p className="text-gray-600">Discover curated color combinations for your projects</p>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </div>

                  {/* Category Filters */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {paletteCategories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full ${
                          selectedCategory === category 
                            ? 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700' 
                            : ''
                        }`}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Palettes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredPalettes.map((palette) => (
                    <Card key={palette.id} className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        {/* Color Preview */}
                        <div className="relative">
                          <div className="h-32 flex">
                            {palette.colors.map((color, index) => (
                              <div
                                key={index}
                                className="flex-1 cursor-pointer transition-all duration-200 hover:scale-105 hover:z-10 relative group/color"
                                style={{ backgroundColor: color }}
                                onClick={() => copyToClipboard(color)}
                              >
                                <div className="absolute inset-0 bg-black/0 group-hover/color:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                                  <div className="opacity-0 group-hover/color:opacity-100 transition-opacity duration-200 bg-white/90 rounded px-2 py-1 text-xs">
                                    {copiedColor === color ? (
                                      <div className="flex items-center gap-1 text-green-600">
                                        <Check className="w-3 h-3" />
                                        Copied!
                                      </div>
                                    ) : (
                                      <div className="flex items-center gap-1">
                                        <Copy className="w-3 h-3" />
                                        {color}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                          {palette.featured && (
                            <Badge className="absolute top-2 left-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>

                        {/* Palette Info */}
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <Badge variant="secondary" className={getCategoryColor(palette.category)}>
                              {palette.category}
                            </Badge>
                            <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                              <Heart className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <h3 className="text-lg mb-2">{palette.name}</h3>
                          <div className="text-xs text-gray-500 mb-3">by {palette.author}</div>
                          
                          <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                            <div className="flex items-center">
                              <Download className="w-4 h-4 mr-1" />
                              {palette.downloads}
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {palette.likes}
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {palette.tags.slice(0, 3).map((tag, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2">
                            <Button 
                              size="sm" 
                              className="flex-1 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
                              onClick={() => downloadPalette(palette)}
                            >
                              <Download className="w-4 h-4 mr-1" />
                              Download
                            </Button>
                            <Button size="sm" variant="outline" className="flex-shrink-0">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="articles" className="mt-0">
              {/* Color Blogs Section */}
              <section className="py-16">
                <div className="mb-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                    <div>
                      <h2 className="text-2xl mb-2">Color Theory & Design Articles</h2>
                      <p className="text-gray-600">Learn about color psychology, trends, and best practices</p>
                    </div>
                  </div>

                  {/* Category Filters */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {blogCategories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full ${
                          selectedCategory === category 
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700' 
                            : ''
                        }`}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Featured Article */}
                {filteredBlogs.filter(blog => blog.featured).map((blog) => (
                  <Card 
                    key={blog.id} 
                    className="mb-12 overflow-hidden border-0 shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                    onClick={() => onNavigate('palettes', 'article', blog.id)}
                  >
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="relative">
                          <ImageWithFallback
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-80 lg:h-full object-cover"
                          />
                          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                            Featured
                          </Badge>
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <Badge variant="secondary" className={`${getCategoryColor(blog.category)} w-fit mb-4`}>
                            {blog.category}
                          </Badge>
                          <h3 className="text-2xl lg:text-3xl mb-4 hover:text-purple-600 transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                            {blog.excerpt}
                          </p>
                          <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {blog.readTime}
                            </div>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {blog.views} views
                            </div>
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {blog.likes}
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white">
                              {blog.author.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <div className="text-sm">{blog.author}</div>
                              <div className="text-xs text-gray-500">{blog.date}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBlogs.filter(blog => !blog.featured).map((blog) => (
                    <Card 
                      key={blog.id} 
                      className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300"
                      onClick={() => onNavigate('palettes', 'article', blog.id)}
                    >
                      <CardContent className="p-0">
                        <div className="relative">
                          <ImageWithFallback
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4">
                            <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="p-5">
                          <Badge variant="secondary" className={`${getCategoryColor(blog.category)} mb-3`}>
                            {blog.category}
                          </Badge>
                          <h3 className="text-lg mb-2 group-hover:text-purple-600 transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {blog.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {blog.readTime}
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {blog.views}
                              </div>
                              <div className="flex items-center">
                                <Heart className="w-4 h-4 mr-1" />
                                {blog.likes}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </TabsContent>

            <TabsContent value="trending" className="mt-0">
              {/* Trending Section */}
              <section className="py-16">
                <div className="mb-12">
                  <h2 className="text-2xl mb-2 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-2 text-orange-500" />
                    Trending This Week
                  </h2>
                  <p className="text-gray-600">Popular color palettes and articles gaining attention</p>
                </div>

                {/* Trending Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <Card className="text-center p-6">
                    <Palette className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                    <div className="text-2xl mb-1">1,250+</div>
                    <div className="text-gray-600">Palettes Created</div>
                  </Card>
                  <Card className="text-center p-6">
                    <Download className="w-8 h-8 mx-auto mb-3 text-green-500" />
                    <div className="text-2xl mb-1">45.2K</div>
                    <div className="text-gray-600">Downloads This Week</div>
                  </Card>
                  <Card className="text-center p-6">
                    <Heart className="w-8 h-8 mx-auto mb-3 text-red-500" />
                    <div className="text-2xl mb-1">892</div>
                    <div className="text-gray-600">New Favorites</div>
                  </Card>
                </div>

                {/* Trending Palettes */}
                <div className="mb-12">
                  <h3 className="text-xl mb-6">Most Downloaded Palettes</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {colorPalettes.sort((a, b) => parseFloat(b.downloads) - parseFloat(a.downloads)).slice(0, 6).map((palette, index) => (
                      <Card key={palette.id} className="relative overflow-hidden">
                        <Badge className="absolute top-3 left-3 bg-orange-500 text-white z-10">
                          #{index + 1}
                        </Badge>
                        <CardContent className="p-0">
                          <div className="h-24 flex">
                            {palette.colors.map((color, colorIndex) => (
                              <div
                                key={colorIndex}
                                className="flex-1"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                          <div className="p-4">
                            <h4 className="text-lg mb-1">{palette.name}</h4>
                            <div className="flex items-center justify-between text-sm text-gray-500">
                              <span>{palette.downloads} downloads</span>
                              <span className="flex items-center">
                                <TrendingUp className="w-3 h-3 mr-1 text-orange-500" />
                                +15%
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Trending Articles */}
                <div>
                  <h3 className="text-xl mb-6">Trending Articles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {colorBlogs.sort((a, b) => b.views - a.views).slice(0, 4).map((blog, index) => (
                      <Card 
                        key={blog.id} 
                        className="cursor-pointer hover:shadow-lg transition-shadow"
                        onClick={() => onNavigate('palettes', 'article', blog.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Badge className="bg-orange-500 text-white flex-shrink-0">
                              #{index + 1}
                            </Badge>
                            <div className="flex-1">
                              <h4 className="text-lg mb-2 hover:text-purple-600 transition-colors">
                                {blog.title}
                              </h4>
                              <p className="text-gray-600 text-sm mb-3">{blog.excerpt}</p>
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span className="flex items-center">
                                  <Eye className="w-3 h-3 mr-1" />
                                  {blog.views} views
                                </span>
                                <span className="flex items-center">
                                  <TrendingUp className="w-3 h-3 mr-1 text-orange-500" />
                                  +{Math.floor(Math.random() * 30 + 10)}%
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </section>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}