import React from 'react';
import { 
  ArrowLeft,
  Star, 
  TrendingUp, 
  Check, 
  X,
  ExternalLink,
  Award,
  Users,
  Globe,
  Clock,
  Zap,
  Shield,
  BarChart3,
  PieChart,
  TrendingDown,
  MapPin,
  Play,
  Info,
  Filter,
  Download,
  MessageCircle,
  BookOpen,
  Headphones,
  FileText,
  Cpu,
  DollarSign,
  Calendar,
  Target,
  Lightbulb,
  Building,
  GraduationCap,
  Briefcase,
  Plus,
  Minus,
  RotateCcw,
  Share2,
  Heart,
  Eye,
  ThumbsUp,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Settings
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';
import { Separator } from './ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface AIToolsComparisonPageProps {
  toolIds: string[];
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function AIToolsComparisonPage({ toolIds, onNavigate }: AIToolsComparisonPageProps) {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [showOnlyDifferences, setShowOnlyDifferences] = React.useState(false);
  const [showOnlyFreeTools, setShowOnlyFreeTools] = React.useState(false);
  const [showOnlyApiReady, setShowOnlyApiReady] = React.useState(false);
  const [expandedSections, setExpandedSections] = React.useState<string[]>(['features']);
  const [priceRange, setPriceRange] = React.useState([0, 100]);

  // Mock comprehensive tool data for comparison
  const toolsData = {
    'midjourney': {
      id: 'midjourney',
      name: 'Midjourney',
      tagline: 'AI Art Generation Redefined',
      logo: '🎨',
      category: 'image',
      rating: 4.8,
      reviews: 12450,
      pricing: '$10/month',
      priceValue: 10,
      website: 'https://midjourney.com',
      
      // AI Scorecard
      scorecard: {
        usability: 85,
        speed: 80,
        pricing: 70,
        accuracy: 95,
        support: 75,
        overall: 81
      },
      
      // Features comparison
      features: {
        'Image Generation': { supported: true, quality: 'excellent' },
        'Commercial License': { supported: true, quality: 'good' },
        'API Access': { supported: false, quality: null },
        'Batch Processing': { supported: true, quality: 'good' },
        'Custom Models': { supported: false, quality: null },
        'Real-time Generation': { supported: false, quality: null },
        'Image Editing': { supported: true, quality: 'basic' },
        'Style Transfer': { supported: true, quality: 'excellent' },
        'Upscaling': { supported: true, quality: 'excellent' },
        'Background Removal': { supported: false, quality: null }
      },
      
      platforms: ['Web', 'Discord'],
      countries: ['Global'],
      serverPerformance: {
        uptime: 99.2,
        avgResponseTime: '15s',
        regions: 5
      },
      integrations: ['Discord', 'Web App'],
      
      // Detailed insights
      pros: ['Exceptional artistic quality', 'Active community', 'Regular updates', 'Unique art styles'],
      cons: ['Discord-only interface', 'No API', 'Limited control', 'Queue times'],
      
      useCases: {
        beginners: { suitable: true, score: 85, reason: 'Easy to use with simple prompts' },
        agencies: { suitable: true, score: 90, reason: 'High-quality output for client work' },
        enterprise: { suitable: false, score: 40, reason: 'Limited API and integration options' }
      },
      
      roadmap: [
        { feature: 'API Access', status: 'planned', eta: 'Q3 2025' },
        { feature: 'Video Generation', status: 'in-development', eta: 'Q2 2025' },
        { feature: 'Fine-tuning', status: 'research', eta: 'TBD' }
      ],
      
      community: {
        userBase: '2M+',
        supportChannels: ['Discord', 'Help Center', 'Community Forum'],
        documentationQuality: 75,
        responseTime: '2-4 hours'
      },
      
      sentiment: {
        positive: 78,
        neutral: 15,
        negative: 7,
        keywords: ['amazing quality', 'creative', 'expensive', 'discord only']
      },
      
      countryPerformance: {
        'US': { performance: 95, userSatisfaction: 88 },
        'EU': { performance: 90, userSatisfaction: 85 },
        'Asia': { performance: 85, userSatisfaction: 82 },
        'Other': { performance: 80, userSatisfaction: 78 }
      },
      
      demoVideo: 'https://images.unsplash.com/photo-1690094639172-6620fd026b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdml0eSUyMGFpfGVufDF8fHx8MTc1ODI3OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    
    'dall-e': {
      id: 'dall-e',
      name: 'DALL-E 3',
      tagline: 'OpenAI\'s Powerful Image Generator',
      logo: '🎭',
      category: 'image',
      rating: 4.7,
      reviews: 11200,
      pricing: '$20/month',
      priceValue: 20,
      website: 'https://openai.com/dall-e-3',
      
      scorecard: {
        usability: 92,
        speed: 75,
        pricing: 60,
        accuracy: 90,
        support: 85,
        overall: 80
      },
      
      features: {
        'Image Generation': { supported: true, quality: 'excellent' },
        'Commercial License': { supported: true, quality: 'excellent' },
        'API Access': { supported: true, quality: 'excellent' },
        'Batch Processing': { supported: true, quality: 'good' },
        'Custom Models': { supported: false, quality: null },
        'Real-time Generation': { supported: false, quality: null },
        'Image Editing': { supported: true, quality: 'good' },
        'Style Transfer': { supported: true, quality: 'good' },
        'Upscaling': { supported: false, quality: null },
        'Background Removal': { supported: false, quality: null }
      },
      
      platforms: ['Web', 'API', 'ChatGPT Plus'],
      countries: ['Global'],
      serverPerformance: {
        uptime: 99.8,
        avgResponseTime: '8s',
        regions: 12
      },
      integrations: ['OpenAI API', 'ChatGPT', 'Third-party apps'],
      
      pros: ['Excellent prompt understanding', 'API access', 'High reliability', 'Safety features'],
      cons: ['Requires ChatGPT Plus', 'Limited generations', 'Higher cost', 'Less artistic styles'],
      
      useCases: {
        beginners: { suitable: true, score: 90, reason: 'User-friendly with ChatGPT integration' },
        agencies: { suitable: true, score: 85, reason: 'Reliable with commercial licensing' },
        enterprise: { suitable: true, score: 95, reason: 'Full API access and enterprise features' }
      },
      
      roadmap: [
        { feature: 'Video Generation', status: 'planned', eta: 'Q4 2025' },
        { feature: 'Image Editing', status: 'in-development', eta: 'Q1 2025' },
        { feature: 'Custom Styles', status: 'research', eta: 'TBD' }
      ],
      
      community: {
        userBase: '5M+',
        supportChannels: ['Help Center', 'Developer Forum', 'Email Support'],
        documentationQuality: 95,
        responseTime: '1-2 hours'
      },
      
      sentiment: {
        positive: 75,
        neutral: 18,
        negative: 7,
        keywords: ['reliable', 'expensive', 'good quality', 'prompt following']
      },
      
      countryPerformance: {
        'US': { performance: 98, userSatisfaction: 92 },
        'EU': { performance: 95, userSatisfaction: 88 },
        'Asia': { performance: 92, userSatisfaction: 85 },
        'Other': { performance: 88, userSatisfaction: 82 }
      },
      
      demoVideo: 'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRvb2xzJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODI3OTgxMnww&ixlib=rb-4.1.0&q=80&w=1080'
    },
    
    'chatgpt': {
      id: 'chatgpt',
      name: 'ChatGPT',
      tagline: 'Advanced Conversational AI',
      logo: '🤖',
      category: 'chatbot',
      rating: 4.9,
      reviews: 45230,
      pricing: 'Free / $20',
      priceValue: 0,
      website: 'https://chat.openai.com',
      
      scorecard: {
        usability: 95,
        speed: 90,
        pricing: 85,
        accuracy: 88,
        support: 80,
        overall: 88
      },
      
      features: {
        'Text Generation': { supported: true, quality: 'excellent' },
        'Code Generation': { supported: true, quality: 'excellent' },
        'API Access': { supported: true, quality: 'excellent' },
        'Custom Instructions': { supported: true, quality: 'good' },
        'File Upload': { supported: true, quality: 'good' },
        'Web Browsing': { supported: true, quality: 'good' },
        'Image Analysis': { supported: true, quality: 'excellent' },
        'Voice Input': { supported: true, quality: 'good' },
        'Plugins': { supported: true, quality: 'good' },
        'Fine-tuning': { supported: true, quality: 'excellent' }
      },
      
      platforms: ['Web', 'Mobile', 'API', 'Desktop'],
      countries: ['Global'],
      serverPerformance: {
        uptime: 99.9,
        avgResponseTime: '2s',
        regions: 15
      },
      integrations: ['OpenAI API', 'Zapier', 'Microsoft', 'Third-party apps'],
      
      pros: ['Versatile capabilities', 'Fast responses', 'Free tier available', 'Excellent reasoning'],
      cons: ['Usage limits on free tier', 'Knowledge cutoff', 'Can hallucinate', 'Subscription for latest model'],
      
      useCases: {
        beginners: { suitable: true, score: 95, reason: 'Easy to use, free tier available' },
        agencies: { suitable: true, score: 90, reason: 'Versatile for multiple use cases' },
        enterprise: { suitable: true, score: 95, reason: 'API access, enterprise features available' }
      },
      
      roadmap: [
        { feature: 'GPT-5', status: 'in-development', eta: 'Q3 2025' },
        { feature: 'Advanced Voice', status: 'rolling-out', eta: 'Q1 2025' },
        { feature: 'Memory Features', status: 'beta', eta: 'Available' }
      ],
      
      community: {
        userBase: '100M+',
        supportChannels: ['Help Center', 'Community Forum', 'Developer Support'],
        documentationQuality: 90,
        responseTime: '1-3 hours'
      },
      
      sentiment: {
        positive: 82,
        neutral: 12,
        negative: 6,
        keywords: ['helpful', 'smart', 'usage limits', 'versatile']
      },
      
      countryPerformance: {
        'US': { performance: 99, userSatisfaction: 94 },
        'EU': { performance: 98, userSatisfaction: 91 },
        'Asia': { performance: 96, userSatisfaction: 88 },
        'Other': { performance: 94, userSatisfaction: 85 }
      },
      
      demoVideo: 'https://images.unsplash.com/photo-1691381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4Mjc5NTExfDA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  };

  const tools = toolIds.map(id => toolsData[id as keyof typeof toolsData]).filter(Boolean);

  // Safety check - ensure we have valid tools
  if (tools.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">No valid tools found</h1>
          <p className="text-gray-600 mb-6">The selected tools could not be loaded.</p>
          <Button onClick={() => onNavigate('home')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to AI Tools
          </Button>
        </div>
      </div>
    );
  }

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Comparison link copied to clipboard!');
  };

  const getQualityIcon = (quality: string | null) => {
    switch (quality) {
      case 'excellent': return <div className="w-3 h-3 bg-green-500 rounded-full" />;
      case 'good': return <div className="w-3 h-3 bg-blue-500 rounded-full" />;
      case 'basic': return <div className="w-3 h-3 bg-yellow-500 rounded-full" />;
      default: return <X className="w-4 h-4 text-gray-400" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100';
    if (score >= 60) return 'text-blue-600 bg-blue-100';
    if (score >= 40) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-blue-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (tools.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">No tools selected for comparison</h1>
          <Button onClick={() => onNavigate('home')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to AI Tools
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('home')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to AI Tools
            </Button>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share Comparison
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl mb-2">
              AI Tools <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">Comparison</span>
            </h1>
            <p className="text-lg text-gray-600">
              Deep insights and side-by-side analysis of {tools.length} selected AI tools
            </p>
          </div>

          {/* Tool Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {tools.map((tool) => (
              <Card key={tool.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{tool.logo}</div>
                    <div className="flex-1">
                      <h3 className="text-lg mb-1">{tool.name}</h3>
                      <p className="text-sm text-gray-600">{tool.tagline}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{tool.rating}</span>
                      <span className="text-xs text-gray-500">({tool.reviews.toLocaleString()})</span>
                    </div>
                    <div className="text-lg">{tool.pricing}</div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      size="sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Try Now
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => onNavigate('ai-tools', 'tool', tool.id)}
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-4 p-4 bg-white rounded-xl border">
            <div className="flex items-center gap-2">
              <Switch 
                checked={showOnlyDifferences} 
                onCheckedChange={setShowOnlyDifferences}
                id="differences"
              />
              <label htmlFor="differences" className="text-sm">Show only differences</label>
            </div>
            <div className="flex items-center gap-2">
              <Switch 
                checked={showOnlyFreeTools} 
                onCheckedChange={setShowOnlyFreeTools}
                id="free"
              />
              <label htmlFor="free" className="text-sm">Free tools only</label>
            </div>
            <div className="flex items-center gap-2">
              <Switch 
                checked={showOnlyApiReady} 
                onCheckedChange={setShowOnlyApiReady}
                id="api"
              />
              <label htmlFor="api" className="text-sm">API-ready tools</label>
            </div>
          </div>
        </div>
      </section>

      {/* Main Comparison Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-3xl grid-cols-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="insights">Insights</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="space-y-8">
                {/* AI Scorecard */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      <h3 className="text-xl">AI Scorecard</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info className="w-4 h-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Automated ratings across key performance metrics</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Scorecard Metrics */}
                      <div className="space-y-4">
                        {Object.keys(tools[0]?.scorecard || {}).map((metric) => (
                          <div key={metric} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="capitalize text-sm font-medium">{metric}</span>
                              <div className="flex gap-2">
                                {tools.map((tool) => (
                                  <span key={tool.id} className={`px-2 py-1 rounded text-xs ${getScoreColor(tool.scorecard?.[metric as keyof typeof tool.scorecard] || 0)}`}>
                                    {tool.scorecard?.[metric as keyof typeof tool.scorecard] || 0}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-1">
                              {tools.map((tool) => (
                                <div key={tool.id} className="flex items-center gap-2">
                                  <span className="text-xs w-16">{tool.name}</span>
                                  <Progress 
                                    value={tool.scorecard?.[metric as keyof typeof tool.scorecard] || 0} 
                                    className="flex-1 h-2"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Overall Scores Chart */}
                      <div className="space-y-4">
                        <h4 className="text-lg">Overall Scores</h4>
                        {tools.map((tool, index) => (
                          <div key={tool.id} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <span className="text-2xl">{tool.logo}</span>
                                <span>{tool.name}</span>
                              </div>
                              <span className={`px-3 py-1 rounded-full text-sm ${getScoreColor(tool.scorecard.overall)}`}>
                                {tool.scorecard.overall}/100
                              </span>
                            </div>
                            <Progress 
                              value={tool.scorecard?.overall || 0} 
                              className="h-3"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* User Sentiment */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      <h3 className="text-xl">User Sentiment Analysis</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {tools.map((tool) => (
                        <div key={tool.id} className="space-y-4">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{tool.logo}</span>
                            <span className="font-medium">{tool.name}</span>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-green-600">Positive</span>
                              <span className="text-sm">{tool.sentiment.positive}%</span>
                            </div>
                            <Progress value={tool.sentiment.positive} className="h-2" />
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Neutral</span>
                              <span className="text-sm">{tool.sentiment.neutral}%</span>
                            </div>
                            <Progress value={tool.sentiment.neutral} className="h-2" />
                            
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-red-600">Negative</span>
                              <span className="text-sm">{tool.sentiment.negative}%</span>
                            </div>
                            <Progress value={tool.sentiment.negative} className="h-2" />
                          </div>
                          
                          <div>
                            <h5 className="text-sm font-medium mb-2">Common Keywords</h5>
                            <div className="flex flex-wrap gap-1">
                              {(tool.sentiment?.keywords || []).map((keyword, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {keyword}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Country Performance Map */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      <h3 className="text-xl">Global Performance</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Region</TableHead>
                            {tools.map((tool) => (
                              <TableHead key={tool.id} className="text-center">
                                <div className="flex items-center gap-1 justify-center">
                                  <span className="text-lg">{tool.logo}</span>
                                  <span className="text-xs">{tool.name}</span>
                                </div>
                              </TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {Object.keys(tools[0]?.countryPerformance || {}).map((region) => (
                            <TableRow key={region}>
                              <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  {region}
                                </div>
                              </TableCell>
                              {tools.map((tool) => (
                                <TableCell key={tool.id} className="text-center">
                                  <div className="space-y-1">
                                    <div className="text-sm font-medium">
                                      {tool.countryPerformance?.[region]?.performance || 0}%
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      Satisfaction: {tool.countryPerformance?.[region]?.userSatisfaction || 0}%
                                    </div>
                                  </div>
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl">Feature Comparison</h3>
                    <div className="text-sm text-gray-500">
                      Click on features to see detailed explanations
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-48">Feature</TableHead>
                          {tools.map((tool) => (
                            <TableHead key={tool.id} className="text-center min-w-32">
                              <div className="flex items-center gap-2 justify-center">
                                <span className="text-2xl">{tool.logo}</span>
                                <span>{tool.name}</span>
                              </div>
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.keys(tools[0]?.features || {}).map((feature) => {
                          const hasVariation = tools.some(tool => 
                            tools.some(otherTool => 
                              tool.features?.[feature]?.supported !== otherTool.features?.[feature]?.supported
                            )
                          );
                          
                          if (showOnlyDifferences && !hasVariation) return null;
                          
                          return (
                            <TableRow key={feature}>
                              <TableCell className="font-medium">
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger className="text-left cursor-help">
                                      {feature}
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Click to learn more about this feature</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </TableCell>
                              {tools.map((tool) => (
                                <TableCell key={tool.id} className="text-center">
                                  <div className="flex items-center justify-center gap-2">
                                    {tool.features?.[feature]?.supported ? (
                                      <>
                                        <Check className="w-5 h-5 text-green-500" />
                                        {getQualityIcon(tool.features[feature]?.quality)}
                                      </>
                                    ) : (
                                      <X className="w-5 h-5 text-red-400" />
                                    )}
                                  </div>
                                </TableCell>
                              ))}
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                      Excellent
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full" />
                      Good
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      Basic
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pricing" className="mt-8">
              <div className="space-y-8">
                {/* Pricing Visualizer */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      <h3 className="text-xl">Pricing Comparison</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {tools.map((tool, index) => (
                        <Card key={tool.id} className={`relative ${index === 1 ? 'border-blue-500 shadow-lg' : ''}`}>
                          {index === 1 && (
                            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                              Best Value
                            </Badge>
                          )}
                          <CardContent className="p-6 text-center">
                            <div className="text-3xl mb-2">{tool.logo}</div>
                            <h4 className="text-lg mb-2">{tool.name}</h4>
                            <div className="text-2xl mb-4">{tool.pricing}</div>
                            
                            <div className="space-y-2 mb-6">
                              <div className="flex justify-between text-sm">
                                <span>Rating</span>
                                <span>{tool.rating}★</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Reviews</span>
                                <span>{tool.reviews.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span>Overall Score</span>
                                <span>{tool.scorecard.overall}/100</span>
                              </div>
                            </div>
                            
                            <Button 
                              className="w-full" 
                              variant={index === 1 ? 'default' : 'outline'}
                            >
                              Choose {tool.name}
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Price Range Filter */}
                <Card>
                  <CardHeader>
                    <h3 className="text-xl">Filter by Price Range</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Price Range: ${priceRange[0]} - ${priceRange[1]}/month</span>
                        <Button variant="outline" size="sm" onClick={() => setPriceRange([0, 100])}>
                          Reset
                        </Button>
                      </div>
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={100}
                        step={5}
                        className="w-full"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        {tools.filter(tool => 
                          tool.priceValue >= priceRange[0] && tool.priceValue <= priceRange[1]
                        ).map((tool) => (
                          <div key={tool.id} className="p-4 border rounded-lg">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl">{tool.logo}</span>
                              <span className="font-medium">{tool.name}</span>
                            </div>
                            <div className="text-lg text-blue-600">{tool.pricing}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="mt-8">
              <div className="space-y-8">
                {/* Server Performance */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Cpu className="w-5 h-5" />
                      <h3 className="text-xl">Server Performance</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Tool</TableHead>
                            <TableHead>Uptime</TableHead>
                            <TableHead>Response Time</TableHead>
                            <TableHead>Server Regions</TableHead>
                            <TableHead>Performance Score</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tools.map((tool) => (
                            <TableRow key={tool.id}>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <span className="text-2xl">{tool.logo}</span>
                                  <span>{tool.name}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                  {tool.serverPerformance.uptime}%
                                </div>
                              </TableCell>
                              <TableCell>{tool.serverPerformance.avgResponseTime}</TableCell>
                              <TableCell>{tool.serverPerformance.regions} regions</TableCell>
                              <TableCell>
                                <Badge className={getScoreColor(tool.scorecard.speed)}>
                                  {tool.scorecard.speed}/100
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                {/* Platform Support */}
                <Card>
                  <CardHeader>
                    <h3 className="text-xl">Platform Support</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {tools.map((tool) => (
                        <div key={tool.id} className="space-y-4">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{tool.logo}</span>
                            <span className="font-medium">{tool.name}</span>
                          </div>
                          <div className="space-y-2">
                            <h5 className="text-sm font-medium">Supported Platforms</h5>
                            <div className="flex flex-wrap gap-1">
                              {tool.platforms.map((platform, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {platform}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h5 className="text-sm font-medium">Integrations</h5>
                            <div className="flex flex-wrap gap-1">
                              {tool.integrations.map((integration, idx) => (
                                <Badge key={idx} variant="outline" className="text-xs">
                                  {integration}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="insights" className="mt-8">
              <div className="space-y-8">
                {/* Pros & Cons */}
                <Card>
                  <CardHeader>
                    <h3 className="text-xl">Pros & Cons Analysis</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {tools.map((tool) => (
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
                                    <ThumbsUp className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
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
                                    <AlertCircle className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
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

                {/* Best Use Cases */}
                <Card>
                  <CardHeader>
                    <h3 className="text-xl">Best Use Cases</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {['beginners', 'agencies', 'enterprise'].map((userType) => (
                        <div key={userType} className="space-y-3">
                          <h4 className="text-lg capitalize flex items-center gap-2">
                            {userType === 'beginners' && <GraduationCap className="w-5 h-5" />}
                            {userType === 'agencies' && <Building className="w-5 h-5" />}
                            {userType === 'enterprise' && <Briefcase className="w-5 h-5" />}
                            {userType}
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {tools.map((tool) => (
                              <div key={tool.id} className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xl">{tool.logo}</span>
                                  <span className="font-medium">{tool.name}</span>
                                  <Badge className={getScoreColor(tool.useCases[userType as keyof typeof tool.useCases].score)}>
                                    {tool.useCases[userType as keyof typeof tool.useCases].score}/100
                                  </Badge>
                                </div>
                                <p className="text-sm text-gray-600">
                                  {tool.useCases[userType as keyof typeof tool.useCases].reason}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Roadmap & Updates */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <h3 className="text-xl">Roadmap & Upcoming Features</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {tools.map((tool) => (
                        <div key={tool.id} className="space-y-4">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{tool.logo}</span>
                            <span className="font-medium">{tool.name}</span>
                          </div>
                          
                          <div className="space-y-3">
                            {tool.roadmap.map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 border rounded-lg">
                                <div>
                                  <div className="font-medium text-sm">{item.feature}</div>
                                  <div className="text-xs text-gray-500">{item.eta}</div>
                                </div>
                                <Badge 
                                  variant={item.status === 'in-development' ? 'default' : 
                                          item.status === 'planned' ? 'secondary' : 'outline'}
                                  className="text-xs"
                                >
                                  {item.status}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="community" className="mt-8">
              <div className="space-y-8">
                {/* Community & Support */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <h3 className="text-xl">Community & Support</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Tool</TableHead>
                            <TableHead>User Base</TableHead>
                            <TableHead>Support Channels</TableHead>
                            <TableHead>Documentation</TableHead>
                            <TableHead>Response Time</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {tools.map((tool) => (
                            <TableRow key={tool.id}>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <span className="text-2xl">{tool.logo}</span>
                                  <span>{tool.name}</span>
                                </div>
                              </TableCell>
                              <TableCell>{tool.community.userBase}</TableCell>
                              <TableCell>
                                <div className="flex flex-wrap gap-1">
                                  {tool.community.supportChannels.map((channel, idx) => (
                                    <Badge key={idx} variant="outline" className="text-xs">
                                      {channel}
                                    </Badge>
                                  ))}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Progress value={tool.community.documentationQuality} className="w-16 h-2" />
                                  <span className="text-sm">{tool.community.documentationQuality}%</span>
                                </div>
                              </TableCell>
                              <TableCell>{tool.community.responseTime}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                {/* Interactive Demos */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Play className="w-5 h-5" />
                      <h3 className="text-xl">Video Demos</h3>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {tools.map((tool) => (
                        <div key={tool.id} className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{tool.logo}</span>
                            <span className="font-medium">{tool.name}</span>
                          </div>
                          <div className="relative group cursor-pointer">
                            <ImageWithFallback
                              src={tool.demoVideo}
                              alt={`${tool.name} demo`}
                              className="w-full h-32 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                              <Play className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">
                            Watch {tool.name} in action
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-4">
            Ready to Choose Your AI Tool?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Based on this comparison, select the tool that best fits your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Target className="w-5 h-5 mr-2" />
              Get Personalized Recommendation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Plus className="w-5 h-5 mr-2" />
              Compare More Tools
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <MessageCircle className="w-5 h-5 mr-2" />
              Submit Your Review
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}