import React from 'react';
import { 
  ChevronLeft,
  Clock,
  Calendar,
  User,
  Share2,
  Bookmark,
  TrendingUp,
  Star,
  ExternalLink,
  ThumbsUp,
  MessageCircle,
  Eye,
  ArrowRight,
  Tag
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface AIInsightDetailPageProps {
  insightId: string;
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function AIInsightDetailPage({ insightId, onNavigate }: AIInsightDetailPageProps) {
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  // Mock insights data
  const insightsData = {
    'best-ai-video-editors-2025': {
      id: 'best-ai-video-editors-2025',
      title: "Best AI Video Editors in 2025",
      subtitle: "A comprehensive comparison of the top AI-powered video editing tools",
      excerpt: "Compare the top AI-powered video editing tools and find the perfect fit for your creative projects.",
      content: `
        <p>Artificial Intelligence has revolutionized video editing, making sophisticated editing techniques accessible to creators of all skill levels. In 2025, AI video editors offer features that were once exclusive to Hollywood studios.</p>
        
        <h2>Why Choose AI Video Editing?</h2>
        <p>AI video editing tools provide several advantages over traditional software:</p>
        <ul>
          <li><strong>Speed:</strong> Automate time-consuming tasks like color correction and audio sync</li>
          <li><strong>Accessibility:</strong> User-friendly interfaces that don't require years of training</li>
          <li><strong>Quality:</strong> AI algorithms can enhance footage in ways that manual editing cannot</li>
          <li><strong>Cost-effectiveness:</strong> Reduce the need for expensive professional editing services</li>
        </ul>

        <h2>Top AI Video Editing Tools for 2025</h2>
        
        <h3>1. Runway ML - The Creative Powerhouse</h3>
        <p>Runway ML leads the pack with its comprehensive suite of AI-powered video editing tools. From text-to-video generation to advanced motion tracking, it's perfect for creators who want cutting-edge features.</p>
        <p><strong>Best for:</strong> Professional creators, artists, and filmmakers</p>
        <p><strong>Pricing:</strong> Free tier available, paid plans from $15/month</p>
        
        <h3>2. Synthesia - AI Avatar Videos</h3>
        <p>Specializing in AI avatar creation, Synthesia allows you to create professional videos with realistic AI presenters in multiple languages.</p>
        <p><strong>Best for:</strong> Corporate training, marketing, and educational content</p>
        <p><strong>Pricing:</strong> Starting at $30/month</p>
        
        <h3>3. Luma AI - 3D Video Innovation</h3>
        <p>Luma AI brings 3D capabilities to video editing with its advanced neural rendering technology.</p>
        <p><strong>Best for:</strong> 3D content creators and technical professionals</p>
        <p><strong>Pricing:</strong> Free tier available, premium plans from $30/month</p>

        <h2>How to Choose the Right AI Video Editor</h2>
        <p>Consider these factors when selecting an AI video editing tool:</p>
        <ol>
          <li><strong>Your skill level:</strong> Beginners should prioritize ease of use</li>
          <li><strong>Project requirements:</strong> Consider output quality, format support, and special features</li>
          <li><strong>Budget:</strong> Factor in subscription costs and usage limits</li>
          <li><strong>Integration needs:</strong> Ensure compatibility with your existing workflow</li>
        </ol>

        <h2>The Future of AI Video Editing</h2>
        <p>As we look ahead, AI video editing will continue to evolve with improvements in:</p>
        <ul>
          <li>Real-time rendering capabilities</li>
          <li>More sophisticated content understanding</li>
          <li>Better integration with social media platforms</li>
          <li>Enhanced collaborative features</li>
        </ul>

        <p>The landscape of video editing is changing rapidly, and these AI tools are leading the charge. Whether you're a professional filmmaker or a content creator just starting out, there's an AI video editor that can help bring your vision to life.</p>
      `,
      author: {
        name: 'Sarah Chen',
        avatar: 'SC',
        bio: 'Senior Video Production Specialist with 8+ years in AI tools',
        social: '@sarahchen'
      },
      publishedDate: '2025-01-15',
      readTime: '8 min read',
      category: 'Video Tools',
      tags: ['AI Video', 'Video Editing', 'Creative Tools', 'Runway ML', 'Synthesia'],
      image: 'https://images.unsplash.com/photo-1691381287254-b3349c60bf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4Mjc5NTExfDA&ixlib=rb-4.1.0&q=80&w=1080',
      trending: true,
      featured: true,
      views: 12450,
      likes: 856,
      comments: 42,
      relatedTools: ['runway', 'synthesia', 'luma-ai'],
      relatedArticles: [
        { id: 'top-free-ai-tools', title: 'Top Free AI Tools for Designers', readTime: '6 min' },
        { id: 'ai-writing-comparison', title: 'AI Writing Tools: Complete Comparison Guide', readTime: '12 min' }
      ]
    },
    'top-free-ai-tools': {
      id: 'top-free-ai-tools',
      title: "Top Free AI Tools for Designers",
      subtitle: "Discover powerful AI tools that won't break the bank",
      excerpt: "Discover powerful AI tools that won't break the bank, perfect for freelancers and small teams.",
      content: `
        <p>As a designer, you're always looking for tools that can enhance your creativity without breaking the bank. Fortunately, the AI revolution has brought us numerous powerful tools with generous free tiers.</p>
        
        <h2>Why Free AI Tools Matter</h2>
        <p>Free AI tools democratize access to advanced technology, allowing designers of all backgrounds to:</p>
        <ul>
          <li>Experiment with cutting-edge AI features</li>
          <li>Build skills without financial commitment</li>
          <li>Create professional-quality work on a budget</li>
          <li>Test tools before investing in premium versions</li>
        </ul>

        <h2>Best Free AI Tools by Category</h2>
        
        <h3>Image Generation</h3>
        <p><strong>Leonardo AI:</strong> Offers 150 free credits daily for high-quality image generation</p>
        <p><strong>Stable Diffusion:</strong> Completely free and open-source image generation</p>
        
        <h3>Writing and Content</h3>
        <p><strong>ChatGPT:</strong> Free tier provides access to GPT-3.5 for writing assistance</p>
        <p><strong>Grammarly:</strong> Free grammar and style checking</p>
        
        <h3>Design Assistance</h3>
        <p><strong>Canva AI:</strong> Free AI-powered design suggestions and background removal</p>
        <p><strong>Remove.bg:</strong> Free background removal for images</p>

        <h2>Tips for Maximizing Free Tools</h2>
        <ol>
          <li>Use multiple tools to compare results</li>
          <li>Take advantage of free trials for premium features</li>
          <li>Join communities to learn best practices</li>
          <li>Monitor usage limits to plan your work</li>
        </ol>

        <p>These free AI tools prove that you don't need a massive budget to access powerful AI capabilities. Start with these options and upgrade as your needs grow.</p>
      `,
      author: {
        name: 'Marcus Rodriguez',
        avatar: 'MR',
        bio: 'Freelance Designer and AI Tool Enthusiast',
        social: '@marcusdesigns'
      },
      publishedDate: '2025-01-12',
      readTime: '6 min read',
      category: 'Free Tools',
      tags: ['Free AI', 'Design Tools', 'Budget-Friendly', 'Leonardo AI', 'Canva'],
      image: 'https://images.unsplash.com/photo-1690094639172-6620fd026b43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdml0eSUyMGFpfGVufDF8fHx8MTc1ODI3OTgxM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      trending: false,
      featured: false,
      views: 8920,
      likes: 634,
      comments: 28,
      relatedTools: ['chatgpt', 'grammarly'],
      relatedArticles: [
        { id: 'best-ai-video-editors-2025', title: 'Best AI Video Editors in 2025', readTime: '8 min' },
        { id: 'ai-writing-comparison', title: 'AI Writing Tools: Complete Comparison Guide', readTime: '12 min' }
      ]
    }
  };

  const insight = insightsData[insightId as keyof typeof insightsData];

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard!');
  };

  const handleLike = () => {
    toast.success('Thanks for your feedback!');
  };

  if (!insight) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Article not found</h1>
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
      <section className="py-8 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('home')}
            className="mb-6"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to AI Tools
          </Button>

          <div className="space-y-6">
            {/* Article Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <Badge variant="secondary">{insight.category}</Badge>
              {insight.trending && (
                <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(insight.publishedDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {insight.readTime}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {insight.views.toLocaleString()} views
              </div>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-3xl lg:text-5xl mb-4">{insight.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{insight.subtitle}</p>
            </div>

            {/* Author and Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback>{insight.author.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{insight.author.name}</div>
                  <div className="text-sm text-gray-600">{insight.author.bio}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleLike}>
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  {insight.likes}
                </Button>
                <Button variant="outline" size="sm" onClick={handleBookmark}>
                  <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                  Save
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden">
            <ImageWithFallback
              src={insight.image}
              alt={insight.title}
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: insight.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-lg mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {insight.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="text-lg">{insight.author.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg mb-2">About {insight.author.name}</h3>
                    <p className="text-gray-600 mb-3">{insight.author.bio}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">{insight.author.social}</span>
                      <Button variant="outline" size="sm">
                        Follow
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12">
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-xl">Discussion</h3>
                  <Badge variant="secondary">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    {insight.comments} comments
                  </Badge>
                </div>
                
                <div className="p-6 border border-gray-200 rounded-xl text-center text-gray-500">
                  <MessageCircle className="w-8 h-8 mx-auto mb-3 text-gray-400" />
                  <p>Comments section would be implemented here with user discussions and feedback.</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Related Tools */}
              {insight.relatedTools.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg mb-4">Related Tools</h3>
                    <div className="space-y-3">
                      {insight.relatedTools.map((toolId, index) => (
                        <div 
                          key={index} 
                          className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                          onClick={() => onNavigate('ai-tools', 'tool', toolId)}
                        >
                          <div className="text-2xl">
                            {toolId === 'runway' ? '🎬' : 
                             toolId === 'synthesia' ? '🎭' : 
                             toolId === 'luma-ai' ? '🌟' :
                             toolId === 'chatgpt' ? '🤖' :
                             toolId === 'grammarly' ? '📚' : '🔧'}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">
                              {toolId === 'runway' ? 'Runway ML' : 
                               toolId === 'synthesia' ? 'Synthesia' : 
                               toolId === 'luma-ai' ? 'Luma AI' :
                               toolId === 'chatgpt' ? 'ChatGPT' :
                               toolId === 'grammarly' ? 'Grammarly' : toolId}
                            </div>
                            <div className="text-xs text-gray-500">
                              {toolId.includes('video') || toolId === 'runway' || toolId === 'synthesia' || toolId === 'luma-ai' ? 'Video Tool' :
                               toolId === 'chatgpt' ? 'AI Chatbot' :
                               toolId === 'grammarly' ? 'Writing Tool' : 'AI Tool'}
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Article Stats */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-4">Article Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Views</span>
                      <span>{insight.views.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Likes</span>
                      <span>{insight.likes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Comments</span>
                      <span>{insight.comments}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Reading Time</span>
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {insight.relatedArticles.map((article, index) => (
                      <div 
                        key={index}
                        className="cursor-pointer group"
                        onClick={() => onNavigate('ai-tools', 'insight', article.id)}
                      >
                        <h4 className="text-sm font-medium group-hover:text-blue-600 transition-colors mb-1">
                          {article.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-4">
            Discover More AI Tools
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Explore our complete directory of AI tools and find the perfect solution for your needs.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100"
            onClick={() => onNavigate('home')}
          >
            Browse AI Tools
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}