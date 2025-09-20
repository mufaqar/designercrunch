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
  ChevronLeft,
  Award,
  ArrowUpDown,
  Grid3X3,
  List,
  Plus,
  Globe,
  Clock,
  Users,
  Zap
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

interface AIToolsCategoryPageProps {
  categoryId: string;
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function AIToolsCategoryPage({ categoryId, onNavigate }: AIToolsCategoryPageProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortBy, setSortBy] = React.useState('popularity');
  const [filterBy, setFilterBy] = React.useState('all');
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

  const categories = {
    'video': { 
      name: 'AI Video Tools', 
      icon: Video, 
      color: 'from-red-500 to-pink-500',
      description: 'Create, edit, and enhance videos with AI-powered tools for content creators, marketers, and filmmakers.',
      count: 24
    },
    'image': { 
      name: 'AI Image Tools', 
      icon: Image, 
      color: 'from-blue-500 to-cyan-500',
      description: 'Generate, edit, and optimize images using artificial intelligence for design, marketing, and creative projects.',
      count: 32
    },
    'writing': { 
      name: 'AI Writing Tools', 
      icon: PenTool, 
      color: 'from-green-500 to-emerald-500',
      description: 'Enhance your writing with AI assistants for content creation, copywriting, and communication.',
      count: 18
    },
    'code': { 
      name: 'AI Code Tools', 
      icon: Code, 
      color: 'from-purple-500 to-violet-500',
      description: 'Accelerate development with AI-powered coding assistants, code generation, and debugging tools.',
      count: 15
    },
    'chatbot': { 
      name: 'AI Chatbots', 
      icon: MessageCircle, 
      color: 'from-orange-500 to-amber-500',
      description: 'Intelligent conversational AI for customer service, productivity, and personal assistance.',
      count: 12
    },
    'business': { 
      name: 'AI Business Tools', 
      icon: Briefcase, 
      color: 'from-teal-500 to-cyan-500',
      description: 'Streamline operations, automate workflows, and enhance productivity with business-focused AI solutions.',
      count: 28
    }
  };

  const allTools = [
    // Video Tools
    {
      id: 'runway',
      name: 'Runway ML',
      category: 'video',
      description: 'Professional AI video editing and generation platform for creators and filmmakers with advanced features.',
      logo: '🎬',
      rating: 4.6,
      reviews: 8920,
      pricing: 'Free / $15/month',
      features: ['Video generation', 'AI editing', 'Real-time collaboration', 'Green screen', 'Motion tracking'],
      pros: ['Professional features', 'User-friendly', 'Creative tools', 'Regular updates'],
      cons: ['Credit-based system', 'Learning curve', 'Expensive for heavy use'],
      countries: ['Global'],
      speed: 'Medium',
      popular: true,
      editorsChoice: false,
      freeVersion: true,
      website: 'https://runwayml.com',
      founded: '2018',
      employees: '51-200'
    },
    {
      id: 'luma-ai',
      name: 'Luma AI',
      category: 'video',
      description: 'AI-powered video generation and 3D capture technology for creating realistic video content.',
      logo: '🌟',
      rating: 4.3,
      reviews: 3450,
      pricing: 'Free / $30/month',
      features: ['Video generation', '3D capture', 'Realistic motion', 'Mobile app', 'Scene understanding'],
      pros: ['Cutting-edge tech', 'Mobile-first', 'Realistic results', 'Easy to use'],
      cons: ['New platform', 'Limited features', 'Queue times', 'Beta quality'],
      countries: ['Global'],
      speed: 'Slow',
      popular: false,
      editorsChoice: false,
      freeVersion: true,
      website: 'https://lumalabs.ai',
      founded: '2021',
      employees: '11-50'
    },
    {
      id: 'synthesia',
      name: 'Synthesia',
      category: 'video',
      description: 'Create professional AI videos with realistic avatars and voiceovers in minutes.',
      logo: '🎭',
      rating: 4.4,
      reviews: 5670,
      pricing: '$30/month',
      features: ['AI avatars', 'Text-to-speech', 'Multi-language', 'Templates', 'Brand customization'],
      pros: ['Professional quality', 'Easy to use', 'Multiple languages', 'Time-saving'],
      cons: ['Expensive', 'Limited customization', 'Subscription only'],
      countries: ['Global'],
      speed: 'Fast',
      popular: true,
      editorsChoice: true,
      freeVersion: false,
      website: 'https://synthesia.io',
      founded: '2017',
      employees: '101-250'
    },
    // Image Tools
    {
      id: 'midjourney',
      name: 'Midjourney',
      category: 'image',
      description: 'AI-powered image generation from text prompts with stunning artistic results and creative flexibility.',
      logo: '🎨',
      rating: 4.8,
      reviews: 12450,
      pricing: '$10/month',
      features: ['High-quality images', 'Artistic styles', 'Commercial license', 'Discord integration', 'Upscaling'],
      pros: ['Exceptional quality', 'Artistic variety', 'Active community', 'Regular updates'],
      cons: ['Discord-only interface', 'Limited control', 'No API'],
      countries: ['Global'],
      speed: 'Fast',
      popular: true,
      editorsChoice: true,
      freeVersion: false,
      website: 'https://midjourney.com',
      founded: '2021',
      employees: '11-50'
    },
    {
      id: 'dall-e',
      name: 'DALL-E 3',
      category: 'image',
      description: 'OpenAI\'s advanced image generation model with exceptional prompt understanding and safety features.',
      logo: '🎭',
      rating: 4.7,
      reviews: 11200,
      pricing: '$20/month',
      features: ['High-resolution images', 'Precise prompts', 'Safety features', 'Commercial use', 'ChatGPT integration'],
      pros: ['Excellent prompt following', 'High quality', 'Safe generation', 'Easy to use'],
      cons: ['ChatGPT Plus required', 'Limited generations', 'Expensive'],
      countries: ['Global'],
      speed: 'Medium',
      popular: true,
      editorsChoice: true,
      freeVersion: false,
      website: 'https://openai.com/dall-e-3',
      founded: '2022',
      employees: '1000+'
    },
    // Writing Tools
    {
      id: 'jasper',
      name: 'Jasper AI',
      category: 'writing',
      description: 'AI writing assistant for marketing copy, blog posts, and business content with brand voice capabilities.',
      logo: '✍️',
      rating: 4.5,
      reviews: 9850,
      pricing: '$49/month',
      features: ['Content templates', 'Brand voice', 'SEO optimization', 'Team collaboration', 'Plagiarism checker'],
      pros: ['Business-focused', 'Brand consistency', 'Template variety', 'Team features'],
      cons: ['Expensive', 'Learning curve', 'Credit limits'],
      countries: ['US', 'UK', 'Canada', 'Australia'],
      speed: 'Fast',
      popular: true,
      editorsChoice: false,
      freeVersion: false,
      website: 'https://jasper.ai',
      founded: '2021',
      employees: '101-250'
    },
    {
      id: 'grammarly',
      name: 'Grammarly',
      category: 'writing',
      description: 'AI writing assistant for grammar, style, and tone improvement with comprehensive writing support.',
      logo: '📚',
      rating: 4.5,
      reviews: 25670,
      pricing: 'Free / $12/month',
      features: ['Grammar checking', 'Style suggestions', 'Plagiarism detection', 'Browser extension', 'Team features'],
      pros: ['Comprehensive checking', 'Wide integration', 'Established platform', 'Free version'],
      cons: ['Can be overly conservative', 'Subscription for full features'],
      countries: ['Global'],
      speed: 'Very Fast',
      popular: true,
      editorsChoice: false,
      freeVersion: true,
      website: 'https://grammarly.com',
      founded: '2009',
      employees: '501-1000'
    },
    // Code Tools
    {
      id: 'github-copilot',
      name: 'GitHub Copilot',
      category: 'code',
      description: 'AI pair programmer that helps you write code faster with intelligent suggestions and context awareness.',
      logo: '💻',
      rating: 4.7,
      reviews: 15670,
      pricing: '$10/month',
      features: ['Code completion', 'Multiple languages', 'IDE integration', 'Context-aware', 'Documentation'],
      pros: ['Excellent suggestions', 'Wide language support', 'IDE integration', 'Microsoft backing'],
      cons: ['Subscription required', 'Code quality varies', 'Privacy concerns'],
      countries: ['Global'],
      speed: 'Very Fast',
      popular: true,
      editorsChoice: true,
      freeVersion: false,
      website: 'https://github.com/features/copilot',
      founded: '2021',
      employees: '1000+'
    },
    {
      id: 'cursor',
      name: 'Cursor',
      category: 'code',
      description: 'AI-first code editor that helps you build software faster with advanced AI integration.',
      logo: '⚡',
      rating: 4.8,
      reviews: 4560,
      pricing: 'Free / $20/month',
      features: ['AI code completion', 'Chat with codebase', 'Refactoring', 'Bug fixes', 'Code generation'],
      pros: ['Excellent AI integration', 'Fast performance', 'Modern interface', 'Free tier'],
      cons: ['Newer platform', 'Limited extensions', 'Beta features'],
      countries: ['Global'],
      speed: 'Very Fast',
      popular: false,
      editorsChoice: true,
      freeVersion: true,
      website: 'https://cursor.sh',
      founded: '2023',
      employees: '11-50'
    },
    // Chatbots
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      category: 'chatbot',
      description: 'Advanced conversational AI for writing, coding, analysis, and creative tasks with broad capabilities.',
      logo: '🤖',
      rating: 4.9,
      reviews: 45230,
      pricing: 'Free / $20/month',
      features: ['Natural conversations', 'Code generation', 'Writing assistance', 'Problem solving', 'Web browsing'],
      pros: ['Highly intelligent', 'Versatile', 'Regular updates', 'Free tier'],
      cons: ['Usage limits', 'Knowledge cutoff', 'Can hallucinate'],
      countries: ['Global'],
      speed: 'Very Fast',
      popular: true,
      editorsChoice: true,
      freeVersion: true,
      website: 'https://chat.openai.com',
      founded: '2022',
      employees: '1000+'
    },
    {
      id: 'claude',
      name: 'Claude',
      category: 'chatbot',
      description: 'Anthropic\'s AI assistant focused on being helpful, harmless, and honest with strong reasoning.',
      logo: '🧠',
      rating: 4.6,
      reviews: 6840,
      pricing: 'Free / $20/month',
      features: ['Long conversations', 'Document analysis', 'Code assistance', 'Ethical responses', 'File uploads'],
      pros: ['Great reasoning', 'Ethical approach', 'Long context', 'Document analysis'],
      cons: ['Limited availability', 'Conservative responses', 'Newer platform'],
      countries: ['US', 'UK'],
      speed: 'Fast',
      popular: false,
      editorsChoice: true,
      freeVersion: true,
      website: 'https://claude.ai',
      founded: '2023',
      employees: '51-200'
    },
    // Business Tools
    {
      id: 'notion-ai',
      name: 'Notion AI',
      category: 'business',
      description: 'AI-powered workspace that helps with writing, planning, and productivity in collaborative environments.',
      logo: '📝',
      rating: 4.4,
      reviews: 7230,
      pricing: '$10/month',
      features: ['Writing assistance', 'Data analysis', 'Project planning', 'Document generation', 'Team collaboration'],
      pros: ['Integrated workspace', 'Versatile', 'Good value', 'Team features'],
      cons: ['Limited AI features', 'Requires Notion knowledge', 'Learning curve'],
      countries: ['Global'],
      speed: 'Fast',
      popular: true,
      editorsChoice: false,
      freeVersion: true,
      website: 'https://notion.so',
      founded: '2023',
      employees: '101-250'
    },
    {
      id: 'zapier-ai',
      name: 'Zapier AI',
      category: 'business',
      description: 'AI-powered automation platform connecting your apps and workflows with intelligent suggestions.',
      logo: '🔗',
      rating: 4.4,
      reviews: 8970,
      pricing: 'Free / $29/month',
      features: ['Workflow automation', 'AI suggestions', 'App integration', 'Natural language', 'Smart triggers'],
      pros: ['Extensive integrations', 'User-friendly', 'Time-saving', 'Free tier'],
      cons: ['Complex workflows can be expensive', 'Learning curve', 'Limited AI features'],
      countries: ['Global'],
      speed: 'Fast',
      popular: true,
      editorsChoice: false,
      freeVersion: true,
      website: 'https://zapier.com',
      founded: '2023',
      employees: '501-1000'
    }
  ];

  const currentCategory = categories[categoryId as keyof typeof categories];
  const Icon = currentCategory?.icon;

  const categoryTools = allTools.filter(tool => tool.category === categoryId);

  const filteredTools = categoryTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterBy === 'all' || 
                         (filterBy === 'free' && tool.freeVersion) ||
                         (filterBy === 'popular' && tool.popular) ||
                         (filterBy === 'editors-choice' && tool.editorsChoice);
    return matchesSearch && matchesFilter;
  });

  const sortedTools = [...filteredTools].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.pricing.includes('Free') ? -1 : 1;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'popularity':
      default:
        return b.reviews - a.reviews;
    }
  });

  const handleToolClick = (toolId: string) => {
    onNavigate('ai-tools', 'tool', toolId);
  };

  if (!currentCategory) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Category not found</h1>
          <Button onClick={() => onNavigate('home')}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('home')}
              className="mb-4"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to AI Tools
            </Button>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${currentCategory.color} flex items-center justify-center`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl mb-2">{currentCategory.name}</h1>
              <p className="text-lg text-gray-600 max-w-3xl">
                {currentCategory.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <div className="text-2xl mb-1">{currentCategory.count}</div>
              <div className="text-sm text-gray-600">Total Tools</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <div className="text-2xl mb-1">{categoryTools.filter(t => t.freeVersion).length}</div>
              <div className="text-sm text-gray-600">Free Tools</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <div className="text-2xl mb-1">{categoryTools.filter(t => t.editorsChoice).length}</div>
              <div className="text-sm text-gray-600">Editor's Choice</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border">
              <div className="text-2xl mb-1">{(categoryTools.reduce((sum, t) => sum + t.rating, 0) / categoryTools.length).toFixed(1)}★</div>
              <div className="text-sm text-gray-600">Avg. Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Listing */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search tools..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tools</SelectItem>
                  <SelectItem value="free">Free Only</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="editors-choice">Editor's Choice</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                  <SelectItem value="price">Free First</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex rounded-lg border">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-lg text-gray-600">
              {sortedTools.length} tools found
            </div>
          </div>

          {/* Tools Grid/List */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedTools.map((tool) => (
                <Card 
                  key={tool.id} 
                  className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleToolClick(tool.id)}
                >
                  <CardContent className="p-6">
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
                      
                      <div className="flex flex-col gap-1">
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

                    <div className="space-y-2 mb-4">
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

                    <div className="flex flex-wrap gap-1 mb-4">
                      {tool.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToolClick(tool.id);
                      }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedTools.map((tool) => (
                <Card 
                  key={tool.id} 
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => handleToolClick(tool.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="text-4xl">{tool.logo}</div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl group-hover:text-blue-600 transition-colors">
                            {tool.name}
                          </h3>
                          <div className="flex items-center gap-1">
                            {tool.editorsChoice && (
                              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">
                                Editor's Choice
                              </Badge>
                            )}
                            {tool.popular && (
                              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs">
                                Popular
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span>{tool.rating}</span>
                          </div>
                          <span className="text-gray-500">({tool.reviews.toLocaleString()} reviews)</span>
                          <span className={`${tool.freeVersion ? 'text-green-600' : 'text-gray-900'}`}>
                            {tool.pricing}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {tool.speed}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-600 mb-3">{tool.description}</p>
                        
                        <div className="flex flex-wrap gap-1">
                          {tool.features.slice(0, 5).map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <Button 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleToolClick(tool.id);
                          }}
                        >
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Website
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {sortedTools.length === 0 && (
            <div className="text-center py-20">
              <div className="text-gray-400 mb-4">
                <Search className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg mb-2">No tools found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}