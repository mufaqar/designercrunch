import React from 'react';
import { 
  Search, 
  Plus, 
  X, 
  BarChart3, 
  TrendingUp,
  Users,
  Clock,
  Sparkles
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { toast } from 'sonner@2.0.3';

interface AIToolsComparisonSelectorProps {
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function AIToolsComparisonSelector({ onNavigate }: AIToolsComparisonSelectorProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedTools, setSelectedTools] = React.useState<string[]>([]);

  // Comprehensive AI tools database
  const allAITools = [
    {
      id: 'midjourney',
      name: 'Midjourney',
      logo: '🎨',
      category: 'AI Image Tools',
      rating: 4.8,
      pricing: '$10/month',
      description: 'AI-powered image generation with stunning artistic results',
      users: '2M+',
      trending: true
    },
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      logo: '🤖',
      category: 'AI Chatbots',
      rating: 4.9,
      pricing: 'Free / $20/month',
      description: 'Advanced conversational AI for multiple use cases',
      users: '100M+',
      trending: true
    },
    {
      id: 'dall-e',
      name: 'DALL-E 3',
      logo: '🎭',
      category: 'AI Image Tools',
      rating: 4.7,
      pricing: '$20/month',
      description: 'OpenAI\'s powerful image generation with precise prompts',
      users: '5M+',
      trending: true
    },
    {
      id: 'claude',
      name: 'Claude',
      logo: '🧠',
      category: 'AI Chatbots',
      rating: 4.6,
      pricing: 'Free / $20/month',
      description: 'Anthropic\'s AI assistant focused on being helpful and honest',
      users: '3M+',
      trending: false
    },
    {
      id: 'runway',
      name: 'Runway ML',
      logo: '🎬',
      category: 'AI Video Tools',
      rating: 4.6,
      pricing: 'Free / $15/month',
      description: 'Professional AI video editing and generation platform',
      users: '1M+',
      trending: true
    },
    {
      id: 'github-copilot',
      name: 'GitHub Copilot',
      logo: '💻',
      category: 'AI Code Tools',
      rating: 4.7,
      pricing: '$10/month',
      description: 'AI pair programmer for faster code development',
      users: '5M+',
      trending: false
    },
    {
      id: 'jasper',
      name: 'Jasper AI',
      logo: '✍️',
      category: 'AI Writing Tools',
      rating: 4.5,
      pricing: '$49/month',
      description: 'AI writing assistant for marketing and business content',
      users: '500K+',
      trending: false
    },
    {
      id: 'notion-ai',
      name: 'Notion AI',
      logo: '📝',
      category: 'AI Business Tools',
      rating: 4.4,
      pricing: '$10/month',
      description: 'AI-powered workspace for writing and productivity',
      users: '2M+',
      trending: false
    },
    {
      id: 'cursor',
      name: 'Cursor',
      logo: '⚡',
      category: 'AI Code Tools',
      rating: 4.8,
      pricing: 'Free / $20/month',
      description: 'AI-first code editor for faster software development',
      users: '200K+',
      trending: true
    },
    {
      id: 'grammarly',
      name: 'Grammarly',
      logo: '📚',
      category: 'AI Writing Tools',
      rating: 4.5,
      pricing: 'Free / $12/month',
      description: 'AI writing assistant for grammar and style improvement',
      users: '30M+',
      trending: false
    }
  ];

  // Recently compared tools (mock data)
  const recentComparisons = [
    {
      tools: ['ChatGPT', 'Claude', 'Gemini'],
      count: 1247,
      category: 'AI Chatbots'
    },
    {
      tools: ['Midjourney', 'DALL-E 3', 'Stable Diffusion'],
      count: 892,
      category: 'AI Image Tools'
    },
    {
      tools: ['GitHub Copilot', 'Cursor', 'Codeium'],
      count: 634,
      category: 'AI Code Tools'
    }
  ];

  // Trending comparisons
  const trendingComparisons = [
    {
      title: 'ChatGPT vs Claude vs Gemini',
      description: 'The ultimate AI chatbot comparison',
      comparisons: 1247,
      trend: '+23%'
    },
    {
      title: 'Midjourney vs DALL-E 3',
      description: 'Best AI image generators compared',
      comparisons: 892,
      trend: '+18%'
    },
    {
      title: 'GitHub Copilot vs Cursor',
      description: 'AI coding assistants head-to-head',
      comparisons: 634,
      trend: '+31%'
    }
  ];

  const filteredTools = allAITools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToolSelect = (toolId: string) => {
    if (selectedTools.includes(toolId)) {
      setSelectedTools(prev => prev.filter(id => id !== toolId));
    } else {
      if (selectedTools.length >= 4) {
        toast.error('You can compare up to 4 tools at once');
        return;
      }
      setSelectedTools(prev => [...prev, toolId]);
    }
  };

  const handleCompareNow = () => {
    if (selectedTools.length < 2) {
      toast.error('Please select at least 2 tools to compare');
      return;
    }
    onNavigate('ai-tools', 'compare', selectedTools.join(','));
  };

  const handleTrendingComparison = (title: string) => {
    // Extract tool names and map to IDs
    const toolMappings: { [key: string]: string } = {
      'ChatGPT': 'chatgpt',
      'Claude': 'claude',
      'Gemini': 'claude', // Using Claude as Gemini placeholder
      'Midjourney': 'midjourney',
      'DALL-E 3': 'dall-e',
      'Stable Diffusion': 'midjourney', // Using Midjourney as placeholder
      'GitHub Copilot': 'github-copilot',
      'Cursor': 'cursor',
      'Codeium': 'cursor' // Using Cursor as placeholder
    };

    if (title.includes('ChatGPT vs Claude vs Gemini')) {
      onNavigate('ai-tools', 'compare', 'chatgpt,claude,dall-e');
    } else if (title.includes('Midjourney vs DALL-E 3')) {
      onNavigate('ai-tools', 'compare', 'midjourney,dall-e');
    } else if (title.includes('GitHub Copilot vs Cursor')) {
      onNavigate('ai-tools', 'compare', 'github-copilot,cursor');
    }
  };

  const selectedToolsData = allAITools.filter(tool => selectedTools.includes(tool.id));

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              <BarChart3 className="w-4 h-4 mr-2" />
              Dynamic AI Tools Comparison
            </Badge>
            
            <h1 className="text-4xl lg:text-7xl mb-6">
              Compare <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">AI Tools</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Search, select, and compare AI tools side-by-side with real-time insights, 
              performance metrics, and expert recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Selector */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Selection */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl mb-2">Select AI Tools to Compare</h2>
                  <p className="text-gray-600">Search and add up to 4 tools for detailed comparison</p>
                </div>
                <div className="text-sm text-gray-500">
                  {selectedTools.length}/4 tools selected
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search AI Tool..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
                />
              </div>

              {/* Selected Tools Chips */}
              {selectedTools.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-medium">Selected Tools:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedToolsData.map((tool) => (
                      <div
                        key={tool.id}
                        className="flex items-center gap-2 px-3 py-2 bg-blue-50 border border-blue-200 rounded-lg"
                      >
                        <span className="text-lg">{tool.logo}</span>
                        <span className="font-medium">{tool.name}</span>
                        <button
                          onClick={() => handleToolSelect(tool.id)}
                          className="text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={handleCompareNow}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    disabled={selectedTools.length < 2}
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Compare Now ({selectedTools.length} tools)
                  </Button>
                </div>
              )}

              {/* Available Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTools.map((tool) => (
                  <Card
                    key={tool.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      selectedTools.includes(tool.id)
                        ? 'ring-2 ring-blue-500 bg-blue-50'
                        : 'hover:shadow-md'
                    }`}
                    onClick={() => handleToolSelect(tool.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{tool.logo}</span>
                          <div>
                            <h4 className="font-medium">{tool.name}</h4>
                            <p className="text-xs text-gray-500">{tool.category}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {tool.trending && (
                            <Badge className="bg-orange-100 text-orange-600 text-xs">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                          <button
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedTools.includes(tool.id)
                                ? 'bg-blue-500 border-blue-500 text-white'
                                : 'border-gray-300 hover:border-blue-500'
                            }`}
                          >
                            {selectedTools.includes(tool.id) ? (
                              <X className="w-3 h-3" />
                            ) : (
                              <Plus className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {tool.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-500">★</span>
                          <span>{tool.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{tool.users}</span>
                        </div>
                        <span className="font-medium">{tool.pricing}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recently Compared Tools */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <h3 className="text-xl">Recently Compared</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentComparisons.map((comparison, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => {
                      const toolIds = comparison.tools.map(name => {
                        const tool = allAITools.find(t => t.name === name);
                        return tool?.id || 'chatgpt';
                      });
                      onNavigate('ai-tools', 'compare', toolIds.slice(0, 3).join(','));
                    }}
                  >
                    <div>
                      <div className="font-medium text-sm">
                        {comparison.tools.join(' vs ')}
                      </div>
                      <div className="text-xs text-gray-500">{comparison.category}</div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {comparison.count} comparisons
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="text-xl">Trending Comparisons</h3>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendingComparisons.map((comparison, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => handleTrendingComparison(comparison.title)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="font-medium text-sm">{comparison.title}</div>
                      <Badge className="bg-green-100 text-green-600 text-xs">
                        {comparison.trend}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      {comparison.description}
                    </div>
                    <div className="text-xs text-gray-500">
                      {comparison.comparisons} comparisons this week
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardContent className="p-8 text-center">
              <h3 className="text-xl mb-4">Ready to Start Comparing?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Select at least 2 AI tools above to generate a comprehensive comparison 
                with features, pricing, performance metrics, and expert recommendations.
              </p>
              <Button
                onClick={() => {
                  // Auto-select trending comparison for demo
                  setSelectedTools(['chatgpt', 'claude']);
                  setTimeout(() => {
                    onNavigate('ai-tools', 'compare', 'chatgpt,claude');
                  }, 500);
                }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                size="lg"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Try Sample Comparison
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}