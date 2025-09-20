import React from 'react';
import { 
  Star, 
  TrendingUp, 
  Crown, 
  Check, 
  X,
  ExternalLink,
  ChevronLeft,
  Award,
  Users,
  Globe,
  Clock,
  Calendar,
  Building,
  Shield,
  Zap,
  Heart,
  Share2,
  BookOpen,
  Play,
  Download,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
  BarChart3,
  Plus
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Progress } from './ui/progress';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface AIToolDetailPageProps {
  toolId: string;
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function AIToolDetailPage({ toolId, onNavigate }: AIToolDetailPageProps) {
  const [activeTab, setActiveTab] = React.useState('overview');
  const [isFavorited, setIsFavorited] = React.useState(false);

  // Mock tool data - in a real app this would come from an API
  const toolsData = {
    'midjourney': {
      id: 'midjourney',
      name: 'Midjourney',
      category: 'image',
      categoryName: 'AI Image Tools',
      description: 'AI-powered image generation from text prompts with stunning artistic results and creative flexibility.',
      longDescription: 'Midjourney is a revolutionary AI image generation platform that transforms text descriptions into stunning visual artwork. Using advanced machine learning algorithms, it creates highly detailed, artistic images that range from photorealistic to fantastical styles. Perfect for artists, designers, marketers, and anyone looking to bring their creative visions to life.',
      logo: '🎨',
      rating: 4.8,
      reviews: 12450,
      pricing: '$10/month',
      pricingPlans: [
        { name: 'Basic', price: '$10', period: 'month', features: ['~200 image generations', 'General commercial terms', 'Access to member gallery', '3 concurrent fast jobs'] },
        { name: 'Standard', price: '$30', period: 'month', features: ['~15 hrs fast generations', 'Unlimited relaxed generations', 'General commercial terms', '3 concurrent fast jobs', 'Stealth mode'] },
        { name: 'Pro', price: '$60', period: 'month', features: ['~30 hrs fast generations', 'Unlimited relaxed generations', 'General commercial terms', '12 concurrent fast jobs', 'Stealth mode'] }
      ],
      features: ['High-quality images', 'Artistic styles', 'Commercial license', 'Discord integration', 'Upscaling', 'Variation generation'],
      pros: ['Exceptional quality', 'Artistic variety', 'Active community', 'Regular updates', 'Easy to use', 'Great for creative work'],
      cons: ['Discord-only interface', 'Limited control', 'No API', 'Queue times during peak', 'Learning curve for prompts'],
      countries: ['Global'],
      speed: 'Fast',
      popular: true,
      editorsChoice: true,
      freeVersion: false,
      website: 'https://midjourney.com',
      founded: '2021',
      employees: '11-50',
      headquarters: 'San Francisco, CA',
      funding: '$100M+',
      tags: ['Image Generation', 'AI Art', 'Creative Tools', 'Design', 'Marketing'],
      alternatives: ['DALL-E 3', 'Stable Diffusion', 'Adobe Firefly', 'Leonardo AI'],
      useCases: [
        'Digital art creation',
        'Marketing visuals',
        'Concept art',
        'Social media content',
        'Book illustrations',
        'Product mockups'
      ],
      tutorials: [
        { title: 'Getting Started with Midjourney', duration: '5 min', type: 'Guide' },
        { title: 'Advanced Prompting Techniques', duration: '12 min', type: 'Video' },
        { title: 'Commercial Use Guidelines', duration: '8 min', type: 'Guide' }
      ],
      screenshots: [
        'https://images.unsplash.com/photo-1690094639172-6620fd026b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdml0eSUyMGFpfGVufDF8fHx8MTc1ODI3OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRvb2xzJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1ODI3OTgxMnww&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      reviews_data: [
        { id: 1, user: 'Sarah Chen', avatar: 'SC', rating: 5, date: '2 days ago', content: 'Absolutely incredible! The quality of images Midjourney produces is mind-blowing. Perfect for my design projects.' },
        { id: 2, user: 'Marcus Rodriguez', avatar: 'MR', rating: 4, date: '1 week ago', content: 'Great tool, but the Discord interface can be overwhelming for beginners. Once you get used to it, it\'s amazing.' },
        { id: 3, user: 'Emily Zhang', avatar: 'EZ', rating: 5, date: '2 weeks ago', content: 'Game-changer for content creation. The artistic styles are incredible and the community is very helpful.' }
      ]
    },
    'chatgpt': {
      id: 'chatgpt',
      name: 'ChatGPT',
      category: 'chatbot',
      categoryName: 'AI Chatbots',
      description: 'Advanced conversational AI for writing, coding, analysis, and creative tasks with broad capabilities.',
      longDescription: 'ChatGPT is OpenAI\'s flagship conversational AI that has revolutionized how people interact with artificial intelligence. It excels at understanding context, generating human-like responses, and assisting with a wide variety of tasks from creative writing to code debugging.',
      logo: '🤖',
      rating: 4.9,
      reviews: 45230,
      pricing: 'Free / $20/month',
      pricingPlans: [
        { name: 'Free', price: '$0', period: 'month', features: ['Access to GPT-3.5', 'Standard response speed', 'Limited availability during peak times'] },
        { name: 'Plus', price: '$20', period: 'month', features: ['Access to GPT-4', 'Faster response times', 'Priority access', 'Access to latest features', 'Web browsing', 'Custom GPTs'] }
      ],
      features: ['Natural conversations', 'Code generation', 'Writing assistance', 'Problem solving', 'Web browsing', 'File analysis'],
      pros: ['Highly intelligent', 'Versatile', 'Regular updates', 'Free tier', 'Great reasoning', 'Easy to use'],
      cons: ['Usage limits', 'Knowledge cutoff', 'Can hallucinate', 'Internet required'],
      countries: ['Global'],
      speed: 'Very Fast',
      popular: true,
      editorsChoice: true,
      freeVersion: true,
      website: 'https://chat.openai.com',
      founded: '2022',
      employees: '1000+',
      headquarters: 'San Francisco, CA',
      funding: '$10B+',
      tags: ['Conversational AI', 'Writing', 'Coding', 'Analysis', 'Education'],
      alternatives: ['Claude', 'Gemini', 'Perplexity', 'Microsoft Copilot'],
      useCases: [
        'Content writing',
        'Code assistance',
        'Research and analysis',
        'Education and tutoring',
        'Creative brainstorming',
        'Customer support'
      ],
      tutorials: [
        { title: 'ChatGPT Basics for Beginners', duration: '10 min', type: 'Video' },
        { title: 'Advanced Prompting Strategies', duration: '15 min', type: 'Guide' },
        { title: 'Using ChatGPT for Business', duration: '20 min', type: 'Course' }
      ],
      screenshots: [
        'https://images.unsplash.com/photo-1691381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4Mjc5NTExfDA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      reviews_data: [
        { id: 1, user: 'David Kim', avatar: 'DK', rating: 5, date: '1 day ago', content: 'Incredible AI assistant. Helps me with everything from coding to creative writing. The GPT-4 model is incredibly smart.' },
        { id: 2, user: 'Lisa Johnson', avatar: 'LJ', rating: 5, date: '3 days ago', content: 'Been using it daily for work. Saves me hours on research and writing tasks. Worth every penny.' },
        { id: 3, user: 'Alex Thompson', avatar: 'AT', rating: 4, date: '1 week ago', content: 'Very impressive, but sometimes gives outdated information. The reasoning capabilities are excellent though.' }
      ]
    }
  };

  const tool = toolsData[toolId as keyof typeof toolsData];

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
    toast.success(isFavorited ? 'Removed from favorites' : 'Added to favorites');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  const handleTryTool = () => {
    window.open(tool?.website, '_blank');
  };

  if (!tool) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Tool not found</h1>
          <Button onClick={() => onNavigate('home')}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const ratingDistribution = [
    { stars: 5, percentage: 65 },
    { stars: 4, percentage: 25 },
    { stars: 3, percentage: 7 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-8 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              onClick={() => onNavigate('ai-tools', 'category', tool.category)}
              className="mb-4"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Back to {tool.categoryName}
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-start gap-6 mb-6">
                <div className="text-6xl">{tool.logo}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl lg:text-4xl">{tool.name}</h1>
                    <div className="flex gap-2">
                      {tool.editorsChoice && (
                        <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                          <Award className="w-3 h-3 mr-1" />
                          Editor's Choice
                        </Badge>
                      )}
                      {tool.popular && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-4">{tool.description}</p>
                  
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-xl ml-1">{tool.rating}</span>
                      </div>
                      <span className="text-gray-500">({tool.reviews.toLocaleString()} reviews)</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{tool.employees} employees</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">Founded {tool.founded}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {tool.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      onClick={handleTryTool}
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Try {tool.name}
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={handleFavorite}
                    >
                      <Heart className={`w-5 h-5 mr-2 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
                      {isFavorited ? 'Favorited' : 'Add to Favorites'}
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      onClick={handleShare}
                    >
                      <Share2 className="w-5 h-5 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Card */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg">Pricing</h3>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl mb-2">
                    <span className={tool.freeVersion ? 'text-green-600' : 'text-gray-900'}>
                      {tool.pricing}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Available in: {tool.countries.join(', ')}
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Speed: {tool.speed}
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      {tool.freeVersion ? 'Free version available' : 'Paid only'}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg">Quick Stats</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded</span>
                    <span>{tool.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Employees</span>
                    <span>{tool.employees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Headquarters</span>
                    <span>{tool.headquarters}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Funding</span>
                    <span>{tool.funding}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Alternatives */}
              <Card>
                <CardHeader>
                  <h3 className="text-lg">Similar Tools</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tool.alternatives.map((alt, index) => (
                      <div key={index} className="text-sm text-blue-600 hover:underline cursor-pointer">
                        {alt}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-2xl grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="compare">Compare</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  {/* Description */}
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl">About {tool.name}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {tool.longDescription}
                      </p>
                      
                      {/* Screenshots */}
                      {tool.screenshots && (
                        <div className="space-y-4">
                          <h4 className="text-lg">Screenshots</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {tool.screenshots.map((screenshot, index) => (
                              <div key={index} className="rounded-lg overflow-hidden border">
                                <ImageWithFallback
                                  src={screenshot}
                                  alt={`${tool.name} screenshot ${index + 1}`}
                                  className="w-full h-48 object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Use Cases */}
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl">Use Cases</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {tool.useCases.map((useCase, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            <span>{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  {/* Pros & Cons */}
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg">Pros & Cons</h3>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="text-sm mb-2 text-green-600">Pros</h4>
                        <div className="space-y-1">
                          {tool.pros.map((pro, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <Check className="w-3 h-3 text-green-500 flex-shrink-0" />
                              <span>{pro}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="text-sm mb-2 text-red-600">Cons</h4>
                        <div className="space-y-1">
                          {tool.cons.map((con, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <X className="w-3 h-3 text-red-500 flex-shrink-0" />
                              <span>{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Features */}
                  <Card>
                    <CardHeader>
                      <h3 className="text-lg">Key Features</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {tool.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tool.pricingPlans.map((plan, index) => (
                  <Card key={index} className={`relative ${plan.name === 'Standard' ? 'border-blue-500 shadow-lg' : ''}`}>
                    {plan.name === 'Standard' && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <h3 className="text-xl">{plan.name}</h3>
                      <div className="text-3xl">
                        <span className="text-gray-900">${plan.price}</span>
                        <span className="text-sm text-gray-500">/{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {plan.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button 
                        className="w-full" 
                        variant={plan.name === 'Standard' ? 'default' : 'outline'}
                        onClick={handleTryTool}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Reviews Summary */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <h3 className="text-xl">Rating Overview</h3>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-2">{tool.rating}</div>
                        <div className="flex justify-center mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className={`w-5 h-5 ${star <= Math.floor(tool.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <div className="text-sm text-gray-600">{tool.reviews.toLocaleString()} reviews</div>
                      </div>
                      
                      <div className="space-y-2">
                        {ratingDistribution.map((rating) => (
                          <div key={rating.stars} className="flex items-center gap-3 text-sm">
                            <span className="w-8">{rating.stars}★</span>
                            <Progress value={rating.percentage} className="flex-1" />
                            <span className="w-10 text-right">{rating.percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Reviews List */}
                <div className="lg:col-span-2 space-y-4">
                  {tool.reviews_data.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarFallback>{review.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="font-medium">{review.user}</div>
                                <div className="flex items-center gap-2">
                                  <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                      <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                    ))}
                                  </div>
                                  <span className="text-sm text-gray-500">{review.date}</span>
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                            <p className="text-gray-600 mb-3">{review.content}</p>
                            <div className="flex items-center gap-4">
                              <Button variant="ghost" size="sm">
                                <ThumbsUp className="w-4 h-4 mr-2" />
                                Helpful
                              </Button>
                              <Button variant="ghost" size="sm">
                                <ThumbsDown className="w-4 h-4 mr-2" />
                                Not helpful
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tutorials" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tool.tutorials.map((tutorial, index) => (
                  <Card key={index} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          {tutorial.type === 'Video' ? (
                            <Play className="w-5 h-5 text-blue-600" />
                          ) : tutorial.type === 'Course' ? (
                            <BookOpen className="w-5 h-5 text-blue-600" />
                          ) : (
                            <Download className="w-5 h-5 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <Badge variant="secondary" className="text-xs">
                            {tutorial.type}
                          </Badge>
                        </div>
                      </div>
                      <h3 className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {tutorial.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {tutorial.duration}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="compare" className="mt-8">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-xl">Quick Comparison</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tool.alternatives.slice(0, 4).map((alternative, index) => {
                        // Map alternative names to tool IDs
                        const alternativeId = alternative === 'DALL-E 3' ? 'dall-e' :
                                            alternative === 'ChatGPT' ? 'chatgpt' :
                                            alternative === 'Midjourney' ? 'midjourney' :
                                            alternative === 'Claude' ? 'claude' :
                                            alternative.toLowerCase().replace(/\s+/g, '-');
                        
                        return (
                          <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between">
                              <span className="text-lg">{alternative}</span>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => onNavigate('ai-tools', 'compare', `${tool.id},${alternativeId}`)}
                              >
                                <BarChart3 className="w-4 h-4 mr-1" />
                                Compare
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-xl">Advanced Comparison</h3>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center p-8">
                      <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h4 className="text-lg mb-2">Compare Multiple Tools</h4>
                      <p className="text-gray-600 mb-6">
                        Get detailed insights with AI scorecards, sentiment analysis, and performance metrics
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={() => onNavigate('ai-tools', 'compare', `${tool.id},dall-e,chatgpt`)}
                        >
                          <Award className="w-4 h-4 mr-2" />
                          Compare Top 3 Tools
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => onNavigate('home')}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Custom Comparison
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}