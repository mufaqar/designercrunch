import React from 'react';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Crown, 
  Check, 
  X,
  ExternalLink,
  Video,
  Image,
  PenTool,
  Code,
  MessageCircle,
  Briefcase,
  ChevronRight,
  Award,
  Users,
  Globe,
  Clock,
  DollarSign,
  Zap,
  Sparkles,
  Target,
  BarChart3,
  Plus,
  ArrowUpRight,
  Eye,
  Download,
  BookOpen
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface AIToolsHomeProps {
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function AIToolsHome({ onNavigate }: AIToolsHomeProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedTools, setSelectedTools] = React.useState<string[]>([]);
  const [sortBy, setSortBy] = React.useState('popularity');
  const [activeTab, setActiveTab] = React.useState('explore');

  const categories = [
    { id: 'video', name: 'AI Video Tools', icon: Video, color: 'from-red-500 to-pink-500', count: 24 },
    { id: 'image', name: 'AI Image Tools', icon: Image, color: 'from-blue-500 to-cyan-500', count: 32 },
    { id: 'writing', name: 'AI Writing Tools', icon: PenTool, color: 'from-green-500 to-emerald-500', count: 18 },
    { id: 'code', name: 'AI Code Tools', icon: Code, color: 'from-purple-500 to-violet-500', count: 15 },
    { id: 'chatbot', name: 'AI Chatbots', icon: MessageCircle, color: 'from-orange-500 to-amber-500', count: 12 },
    { id: 'business', name: 'AI Business Tools', icon: Briefcase, color: 'from-teal-500 to-cyan-500', count: 28 }
  ];

  const aiTools = [
    {
      id: 'midjourney',
      name: 'Midjourney',
      category: 'image',
      description: 'AI-powered image generation from text prompts with stunning artistic results.',
      logo: '🎨',
      rating: 4.8,
      reviews: 12450,
      pricing: '$10/month',
      features: ['High-quality images', 'Artistic styles', 'Commercial license', 'Discord integration'],
      pros: ['Exceptional quality', 'Artistic variety', 'Active community'],
      cons: ['Discord-only interface', 'Limited control'],
      countries: ['Global'],
      speed: 'Fast',
      popular: true,
      editorsChoice: true,
      freeVersion: false,
      website: 'https://midjourney.com'
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      category: 'chatbot',
      description: 'Advanced conversational AI for writing, coding, analysis, and creative tasks.',
      logo: '🤖',
      rating: 4.9,
      reviews: 45230,
      pricing: 'Free / $20/month',
      features: ['Natural conversations', 'Code generation', 'Writing assistance', 'Problem solving'],
      pros: ['Highly intelligent', 'Versatile', 'Regular updates'],
      cons: ['Usage limits', 'Knowledge cutoff'],
      countries: ['Global'],
      speed: 'Very Fast',
      popular: true,
      editorsChoice: true,
      freeVersion: true,
      website: 'https://chat.openai.com'
    },
    {
      id: 'runway',
      name: 'Runway ML',
      category: 'video',
      description: 'Professional AI video editing and generation platform for creators.',
      logo: '🎬',
      rating: 4.6,
      reviews: 8920,
      pricing: 'Free / $15/month',
      features: ['Video generation', 'AI editing', 'Real-time collaboration', 'Green screen'],
      pros: ['Professional features', 'User-friendly', 'Creative tools'],
      cons: ['Credit-based system', 'Learning curve'],
      countries: ['Global'],
      speed: 'Medium',
      popular: true,
      editorsChoice: false,
      freeVersion: true,
      website: 'https://runwayml.com'
    },
    {
      id: 'github-copilot',
      name: 'GitHub Copilot',
      category: 'code',
      description: 'AI pair programmer that helps you write code faster with intelligent suggestions.',
      logo: '💻',
      rating: 4.7,
      reviews: 15670,
      pricing: '$10/month',
      features: ['Code completion', 'Multiple languages', 'IDE integration', 'Context-aware'],
      pros: ['Excellent suggestions', 'Wide language support', 'IDE integration'],
      cons: ['Subscription required', 'Code quality varies'],
      countries: ['Global'],
      speed: 'Very Fast',
      popular: true,
      editorsChoice: true,
      freeVersion: false,
      website: 'https://github.com/features/copilot'
    },
    {
      id: 'jasper',
      name: 'Jasper AI',
      category: 'writing',
      description: 'AI writing assistant for marketing copy, blog posts, and business content.',
      logo: '✍️',
      rating: 4.5,
      reviews: 9850,
      pricing: '$49/month',
      features: ['Content templates', 'Brand voice', 'SEO optimization', 'Team collaboration'],
      pros: ['Business-focused', 'Brand consistency', 'Template variety'],
      cons: ['Expensive', 'Learning curve'],
      countries: ['US', 'UK', 'Canada', 'Australia'],
      speed: 'Fast',
      popular: true,
      editorsChoice: false,
      freeVersion: false,
      website: 'https://jasper.ai'
    },
    {
      id: 'notion-ai',
      name: 'Notion AI',
      category: 'business',
      description: 'AI-powered workspace that helps with writing, planning, and productivity.',
      logo: '📝',
      rating: 4.4,
      reviews: 7230,
      pricing: '$10/month',
      features: ['Writing assistance', 'Data analysis', 'Project planning', 'Document generation'],
      pros: ['Integrated workspace', 'Versatile', 'Good value'],
      cons: ['Limited AI features', 'Requires Notion knowledge'],
      countries: ['Global'],
      speed: 'Fast',
      popular: true,
      editorsChoice: false,
      freeVersion: true,
      website: 'https://notion.so'
    },
    {
      id: 'dall-e',
      name: 'DALL-E 3',
      category: 'image',
      description: 'OpenAI\'s advanced image generation model with exceptional prompt understanding.',
      logo: '🎭',
      rating: 4.7,
      reviews: 11200,
      pricing: '$20/month',
      features: ['High-resolution images', 'Precise prompts', 'Safety features', 'Commercial use'],
      pros: ['Excellent prompt following', 'High quality', 'Safe generation'],
      cons: ['ChatGPT Plus required', 'Limited generations'],
      countries: ['Global'],
      speed: 'Medium',
      popular: true,
      editorsChoice: true,
      freeVersion: false,
      website: 'https://openai.com/dall-e-3'
    },
    {
      id: 'claude',
      name: 'Claude',
      category: 'chatbot',
      description: 'Anthropic\'s AI assistant focused on being helpful, harmless, and honest.',
      logo: '🧠',
      rating: 4.6,
      reviews: 6840,
      pricing: 'Free / $20/month',
      features: ['Long conversations', 'Document analysis', 'Code assistance', 'Ethical responses'],
      pros: ['Great reasoning', 'Ethical approach', 'Long context'],
      cons: ['Limited availability', 'Conservative responses'],
      countries: ['US', 'UK'],
      speed: 'Fast',
      popular: false,
      editorsChoice: true,
      freeVersion: true,
      website: 'https://claude.ai'
    },
    {
      id: 'luma-ai',
      name: 'Luma AI',
      category: 'video',
      description: 'AI-powered video generation and 3D capture technology.',
      logo: '🌟',
      rating: 4.3,
      reviews: 3450,
      pricing: 'Free / $30/month',
      features: ['Video generation', '3D capture', 'Realistic motion', 'Mobile app'],
      pros: ['Cutting-edge tech', 'Mobile-first', 'Realistic results'],
      cons: ['New platform', 'Limited features', 'Queue times'],
      countries: ['Global'],
      speed: 'Slow',
      popular: false,
      editorsChoice: false,
      freeVersion: true,
      website: 'https://lumalabs.ai'
    },
    {
      id: 'cursor',
      name: 'Cursor',
      category: 'code',
      description: 'AI-first code editor that helps you build software faster.',
      logo: '⚡',
      rating: 4.8,
      reviews: 4560,
      pricing: 'Free / $20/month',
      features: ['AI code completion', 'Chat with codebase', 'Refactoring', 'Bug fixes'],
      pros: ['Excellent AI integration', 'Fast performance', 'Modern interface'],
      cons: ['Newer platform', 'Limited extensions'],
      countries: ['Global'],
      speed: 'Very Fast',
      popular: false,
      editorsChoice: true,
      freeVersion: true,
      website: 'https://cursor.sh'
    },
    {
      id: 'grammarly',
      name: 'Grammarly',
      category: 'writing',
      description: 'AI writing assistant for grammar, style, and tone improvement.',
      logo: '📚',
      rating: 4.5,
      reviews: 25670,
      pricing: 'Free / $12/month',
      features: ['Grammar checking', 'Style suggestions', 'Plagiarism detection', 'Browser extension'],
      pros: ['Comprehensive checking', 'Wide integration', 'Established platform'],
      cons: ['Can be overly conservative', 'Subscription for full features'],
      countries: ['Global'],
      speed: 'Very Fast',
      popular: true,
      editorsChoice: false,
      freeVersion: true,
      website: 'https://grammarly.com'
    },
    {
      id: 'zapier-ai',
      name: 'Zapier AI',
      category: 'business',
      description: 'AI-powered automation platform connecting your apps and workflows.',
      logo: '🔗',
      rating: 4.4,
      reviews: 8970,
      pricing: 'Free / $29/month',
      features: ['Workflow automation', 'AI suggestions', 'App integration', 'Natural language'],
      pros: ['Extensive integrations', 'User-friendly', 'Time-saving'],
      cons: ['Complex workflows can be expensive', 'Learning curve'],
      countries: ['Global'],
      speed: 'Fast',
      popular: true,
      editorsChoice: false,
      freeVersion: true,
      website: 'https://zapier.com'
    }
  ];

  const insights = [
    {
      title: "Best AI Video Editors in 2025",
      excerpt: "Compare the top AI-powered video editing tools and find the perfect fit for your creative projects.",
      readTime: "8 min read",
      category: "Video Tools",
      image: "https://images.unsplash.com/photo-1691381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4Mjc5NTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
      trending: true
    },
    {
      title: "Top Free AI Tools for Designers",
      excerpt: "Discover powerful AI tools that won't break the bank, perfect for freelancers and small teams.",
      readTime: "6 min read",
      category: "Free Tools",
      image: "https://images.unsplash.com/photo-1690094639172-6620fd026b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdml0eSUyMGFpfGVufDF8fHx8MTc1ODI3OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      trending: false
    },
    {
      title: "AI Writing Tools: Complete Comparison Guide",
      excerpt: "Detailed analysis of ChatGPT, Jasper, Copy.ai and other AI writing assistants.",
      readTime: "12 min read",
      category: "Writing Tools",
      image: "https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRvb2xzJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODI3OTgxMnww&ixlib=rb-4.1.0&q=80&w=1080",
      trending: true
    }
  ];

  const filteredTools = aiTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.pricing.includes('Free') ? -1 : 1;
      case 'popularity':
      default:
        return b.reviews - a.reviews;
    }
  });

  const handleToolSelect = (toolId: string) => {
    setSelectedTools(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const selectedToolsData = aiTools.filter(tool => selectedTools.includes(tool.id));

  const submitTool = () => {
    toast.success("Thanks for your submission! We'll review your tool shortly.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              <Sparkles className="w-4 h-4 mr-2" />
              2025's Top AI Tools Directory
            </Badge>
            
            <h1 className="text-4xl lg:text-7xl mb-6">
              Find & Compare the Best <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">AI Tools</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover, compare, and choose from the world's largest directory of AI tools. 
              From image generation to code completion, find the perfect AI solution for your needs.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-blue-500 transition-colors" />
              <Input
                type="text"
                placeholder="Search AI tools by name or feature..."
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
              onClick={() => setActiveTab('top-tools')}
            >
              <Crown className="w-5 h-5 mr-2" />
              View Top Tools
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => onNavigate('ai-tools', 'compare-selector')}
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              Compare Tools
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 rounded-xl text-lg border-2 hover:bg-gray-50 transition-all duration-300"
              onClick={submitTool}
            >
              <Plus className="w-5 h-5 mr-2" />
              Submit a Tool
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">120+</div>
              <div className="text-gray-600">AI Tools Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">50K+</div>
              <div className="text-gray-600">Monthly Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Explore by <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse AI tools organized by their primary use case and functionality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={category.id} 
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                  onClick={() => onNavigate('ai-tools', 'category', category.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg mb-1 group-hover:text-purple-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-500">{category.count} tools</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        Popular
                      </Badge>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
              <TabsList className="grid w-full max-w-lg grid-cols-3">
                <TabsTrigger value="explore">Explore Tools</TabsTrigger>
                <TabsTrigger value="top-tools">Top Tools</TabsTrigger>
                <TabsTrigger value="compare">Compare</TabsTrigger>
              </TabsList>

              <div className="flex gap-3">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Most Popular</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price">Free First</SelectItem>
                  </SelectContent>
                </Select>
                
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            <TabsContent value="explore" className="mt-0">
              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedTools.map((tool) => (
                  <Card key={tool.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="text-3xl">{tool.logo}</div>
                            <div>
                              <h3 className="text-lg mb-1 group-hover:text-blue-600 transition-colors">
                                {tool.name}
                              </h3>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="text-sm ml-1">{tool.rating}</span>
                                </div>
                                <span className="text-xs text-gray-500">({tool.reviews.toLocaleString()})</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-2">
                            {tool.editorsChoice && (
                              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                                <Award className="w-3 h-3 mr-1" />
                                Editor's Choice
                              </Badge>
                            )}
                            {tool.popular && (
                              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Popular
                              </Badge>
                            )}
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {tool.description}
                        </p>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Pricing</span>
                            <span className={`${tool.freeVersion ? 'text-green-600' : 'text-gray-900'}`}>
                              {tool.pricing}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-500">Speed</span>
                            <Badge variant="secondary" className="text-xs">
                              {tool.speed}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex gap-2 mb-4">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigate('ai-tools', 'tool', tool.id);
                            }}
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View Details
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToolSelect(tool.id);
                            }}
                            className={selectedTools.includes(tool.id) ? 'bg-blue-50 border-blue-500 text-blue-600' : ''}
                          >
                            {selectedTools.includes(tool.id) ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Plus className="w-4 h-4" />
                            )}
                          </Button>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {tool.features.slice(0, 2).map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="top-tools" className="mt-0">
              {/* Featured Top Tools */}
              <div className="mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {aiTools.filter(tool => tool.editorsChoice).slice(0, 2).map((tool) => (
                    <Card 
                      key={tool.id} 
                      className="overflow-hidden border-0 shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
                      onClick={() => onNavigate('ai-tools', 'tool', tool.id)}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="text-4xl">{tool.logo}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-2xl">{tool.name}</h3>
                              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                                <Crown className="w-3 h-3 mr-1" />
                                #1 Choice
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 mb-3">
                              <div className="flex items-center">
                                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                <span className="ml-1">{tool.rating}</span>
                              </div>
                              <span className="text-gray-500">({tool.reviews.toLocaleString()} reviews)</span>
                            </div>
                            <p className="text-gray-600 mb-4">{tool.description}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-sm mb-3">Why it's popular:</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {tool.pros.map((pro, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm">
                                <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                                <span>{pro}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Try {tool.name}
                          </Button>
                          <Button variant="outline">
                            <Eye className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* All Top Tools List */}
              <Card>
                <CardHeader>
                  <h3 className="text-xl">All Editor's Choice Tools</h3>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {aiTools.filter(tool => tool.editorsChoice).map((tool) => (
                      <div key={tool.id} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="text-2xl">{tool.logo}</div>
                        <div className="flex-1">
                          <h4 className="font-medium">{tool.name}</h4>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span>{tool.rating}</span>
                            <span>•</span>
                            <span>{tool.pricing}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Eye className="w-3 h-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compare" className="mt-0">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl mb-2">Compare AI Tools</h3>
                  <p className="text-gray-600">Select tools to compare side by side</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm text-gray-500">
                    {selectedTools.length} tools selected
                  </div>
                  {selectedTools.length >= 2 && (
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      onClick={() => onNavigate('ai-tools', 'compare', selectedTools.join(','))}
                    >
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Advanced Comparison
                    </Button>
                  )}
                </div>
              </div>

              {selectedTools.length === 0 ? (
                <Card className="p-12 text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg mb-2">No tools selected</h4>
                  <p className="text-gray-600 mb-6">
                    Choose tools from the Explore section to start comparing
                  </p>
                  <Button 
                    className="bg-black text-white hover:bg-gray-800"
                    onClick={() => setActiveTab('explore')}
                  >
                    Browse Tools
                  </Button>
                </Card>
              ) : selectedTools.length < 2 ? (
                <Card className="p-12 text-center">
                  <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg mb-2">Select more tools to compare</h4>
                  <p className="text-gray-600 mb-6">
                    You need at least 2 tools selected to start comparison
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button 
                      className="bg-black text-white hover:bg-gray-800"
                      onClick={() => setActiveTab('explore')}
                    >
                      Browse More Tools
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => onNavigate('ai-tools', 'compare', selectedTools.join(','))}
                      disabled={selectedTools.length < 2}
                    >
                      Advanced Comparison
                    </Button>
                  </div>
                </Card>
              ) : (
                <div className="space-y-8">
                  {/* Quick Comparison Table */}
                  <Card>
                    <CardHeader>
                      <h4 className="text-lg">Quick Comparison</h4>
                    </CardHeader>
                    <CardContent className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-40">Tool</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Pricing</TableHead>
                            <TableHead>Speed</TableHead>
                            <TableHead>Free Version</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {selectedToolsData.map((tool) => (
                            <TableRow key={tool.id}>
                              <TableCell>
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{tool.logo}</span>
                                  <div>
                                    <div className="font-medium">{tool.name}</div>
                                    <div className="text-xs text-gray-500">{tool.category}</div>
                                  </div>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span>{tool.rating}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <span className={tool.freeVersion ? 'text-green-600' : 'text-gray-900'}>
                                  {tool.pricing}
                                </span>
                              </TableCell>
                              <TableCell>
                                <Badge variant="secondary" className="text-xs">
                                  {tool.speed}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                {tool.freeVersion ? (
                                  <Check className="w-5 h-5 text-green-500" />
                                ) : (
                                  <X className="w-5 h-5 text-red-400" />
                                )}
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => onNavigate('ai-tools', 'tool', tool.id)}
                                  >
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button 
                                    size="sm" 
                                    variant="outline"
                                    onClick={() => handleToolSelect(tool.id)}
                                  >
                                    <X className="w-4 h-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                  {/* Pros & Cons Comparison */}
                  <Card>
                    <CardHeader>
                      <h4 className="text-lg">Pros & Cons</h4>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {selectedToolsData.map((tool) => (
                          <div key={tool.id} className="space-y-4">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{tool.logo}</span>
                              <span className="font-medium">{tool.name}</span>
                            </div>
                            
                            <div className="space-y-3">
                              <div>
                                <h5 className="text-sm font-medium text-green-600 mb-2">Pros</h5>
                                <div className="space-y-1">
                                  {tool.pros.map((pro, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-sm">
                                      <Check className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span>{pro}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div>
                                <h5 className="text-sm font-medium text-red-600 mb-2">Cons</h5>
                                <div className="space-y-1">
                                  {tool.cons.map((con, idx) => (
                                    <div key={idx} className="flex items-start gap-2 text-sm">
                                      <X className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                                      <span>{con}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* AI Recommendation Card */}
                  <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-blue-600" />
                        <h4 className="text-lg font-medium">AI Recommendations</h4>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex items-center gap-2 mb-2">
                            <GraduationCap className="w-4 h-4 text-green-600" />
                            <span className="font-medium text-sm">Best for Beginners</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">{selectedToolsData[0]?.name}</span> - Easy to use with great onboarding
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                          <div className="flex items-center gap-2 mb-2">
                            <Briefcase className="w-4 h-4 text-blue-600" />
                            <span className="font-medium text-sm">Best for Agencies</span>
                          </div>
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">{selectedToolsData[1]?.name || selectedToolsData[0]?.name}</span> - Professional features and scaling options
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Advanced Comparison Button */}
                  <Card className="p-8 text-center">
                    <h4 className="text-lg mb-2">Want More Detailed Analysis?</h4>
                    <p className="text-gray-600 mb-6">
                      Get AI scorecards, performance metrics, and country-wise analysis
                    </p>
                    <div className="flex gap-3 justify-center">
                      <Button 
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        onClick={() => onNavigate('ai-tools', 'compare', selectedTools.join(','))}
                      >
                        <BarChart3 className="w-5 h-5 mr-2" />
                        Advanced Comparison
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        onClick={() => onNavigate('ai-tools', 'compare-selector')}
                      >
                        <Search className="w-5 h-5 mr-2" />
                        Advanced Selector
                      </Button>
                    </div>
                  </Card>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Expert Insights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Expert <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest AI tool reviews, comparisons, and industry trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {insight.trending && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {insight.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {insight.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {insight.excerpt}
                  </p>
                  <Button size="sm" variant="outline" className="group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}