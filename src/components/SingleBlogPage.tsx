import React from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Eye,
  Heart,
  Share2,
  Bookmark,
  Twitter,
  Linkedin,
  Link2,
  MessageCircle,
  ThumbsUp,
  ChevronRight,
  Tag,
  TrendingUp,
  Award
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Separator } from './ui/separator';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShareSocialIcons } from './SocialIcons';
import { toast } from 'sonner@2.0.3';

interface SingleBlogPageProps {
  blogId: string;
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function SingleBlogPage({ blogId, onNavigate }: SingleBlogPageProps) {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);
  const [comment, setComment] = React.useState('');
  const [likes, setLikes] = React.useState(387);

  // Mock blog data - in real app this would come from an API
  const blogData = {
    'featured-1': {
      id: 'featured-1',
      title: 'The Future of AI in Design: Trends Shaping 2025',
      subtitle: 'Exploring how artificial intelligence is revolutionizing the design process and what it means for creatives.',
      content: `
        <p>Artificial Intelligence is no longer a futuristic concept—it's here, and it's transforming the design industry in unprecedented ways. As we move through 2025, AI tools are becoming essential companions for designers, augmenting creativity rather than replacing it.</p>

        <h2>The Current AI Design Landscape</h2>
        <p>From text-to-image generators like Midjourney and DALL-E to design assistants like Adobe Sensei, AI is making design more accessible and efficient. These tools are democratizing design, allowing non-designers to create professional-quality visuals while giving seasoned designers superpowers to iterate faster than ever before.</p>

        <blockquote>
          "AI doesn't replace creativity; it amplifies it. The future belongs to designers who can harness AI as a creative partner." - Sarah Chen
        </blockquote>

        <h2>Key Trends Shaping 2025</h2>
        
        <h3>1. Generative Design Systems</h3>
        <p>AI-powered design systems are evolving beyond static component libraries. They're becoming intelligent systems that can generate design variations, suggest improvements, and maintain consistency across products automatically.</p>

        <h3>2. Personalized User Experiences</h3>
        <p>AI is enabling hyper-personalized design experiences. Interfaces that adapt in real-time based on user behavior, preferences, and context are becoming the new standard.</p>

        <h3>3. Automated Accessibility</h3>
        <p>AI tools are making accessibility testing and implementation more seamless, automatically detecting issues and suggesting fixes to ensure designs are inclusive by default.</p>

        <h2>Challenges and Considerations</h2>
        <p>While AI offers incredible opportunities, it also presents challenges. Questions around copyright, authenticity, and the human touch in design are more relevant than ever. The key is finding the right balance between AI efficiency and human creativity.</p>

        <h2>Looking Ahead</h2>
        <p>The future of design isn't about AI replacing designers—it's about creating a symbiotic relationship where technology amplifies human creativity. Designers who embrace AI tools while maintaining their unique perspective and problem-solving skills will thrive in this new landscape.</p>

        <p>As we continue through 2025, the most successful designers will be those who view AI as a powerful tool in their creative arsenal, using it to push boundaries and explore new possibilities while never losing sight of the human experience at the heart of great design.</p>
      `,
      image: 'https://images.unsplash.com/photo-1738003946582-aabeabf5e009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZGVzaWdufGVufDF8fHx8MTc1ODIxNjk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'AI in Design',
      author: {
        name: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612e732?w=150',
        role: 'Lead UX Designer',
        bio: 'Sarah is a Lead UX Designer with 8+ years of experience in digital product design. She specializes in AI-human interaction design and has worked with top tech companies to integrate AI into user experiences.',
        twitter: '@sarahchen_ux',
        linkedin: 'sarahchen-ux'
      },
      readTime: '8 min read',
      publishDate: '2025-01-18',
      views: 12450,
      likes: 387,
      tags: ['AI', 'Design Systems', 'Future of Design', 'Technology', 'UX'],
      editorsChoice: true,
      trending: true
    }
  };

  const blog = blogData[blogId as keyof typeof blogData] || blogData['featured-1'];

  const relatedArticles = [
    {
      id: 'related-1',
      title: 'Building Design Systems with AI Assistance',
      image: 'https://images.unsplash.com/photo-1721714933699-1a7650a79754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc1ODI4NDg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Design Systems',
      readTime: '6 min read',
      author: 'Marcus Rodriguez'
    },
    {
      id: 'related-2',
      title: 'The Evolution of Creative Tools in 2025',
      image: 'https://images.unsplash.com/photo-1699419553689-1c7b2897a287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtpbmclMjBvbiUyMGNvbXB1dGVyfGVufDF8fHx8MTc1ODI4NDk0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Tools',
      readTime: '5 min read',
      author: 'Alex Thompson'
    },
    {
      id: 'related-3',
      title: 'Ethical Considerations in AI-Generated Design',
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwY3JlYXRpdml0eXxlbnwxfHx8fDE3NTgyMDExOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Ethics',
      readTime: '7 min read',
      author: 'Emily Johnson'
    }
  ];

  const comments = [
    {
      id: 1,
      author: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      content: 'Great insights! I\'ve been using AI tools in my workflow for the past year and the productivity gains are incredible. The key is knowing when to use AI and when to rely on human intuition.',
      timestamp: '2 hours ago',
      likes: 12
    },
    {
      id: 2,
      author: 'Lisa Zhang',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150',
      content: 'This article perfectly captures the current state of AI in design. I especially appreciate the point about AI amplifying creativity rather than replacing it. As designers, we need to embrace these tools.',
      timestamp: '5 hours ago',
      likes: 8
    }
  ];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
    toast.success(isLiked ? 'Removed from likes' : 'Added to likes');
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Removed from bookmarks' : 'Added to bookmarks');
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this article: ${blog.title}`;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard');
        break;
    }
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      toast.success('Comment posted successfully!');
      setComment('');
    }
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
      {/* Navigation */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('blogs')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex justify-center gap-2 mb-4">
              <Badge className="bg-blue-100 text-blue-600 hover:bg-blue-200">
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
            
            <h1 className="text-3xl lg:text-5xl mb-4 leading-tight">
              {blog.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {blog.subtitle}
            </p>

            {/* Article Meta */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(blog.publishDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{blog.views.toLocaleString()} views</span>
              </div>
            </div>

            {/* Social Actions */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleLike}
                className={isLiked ? 'bg-red-50 border-red-200 text-red-600' : ''}
              >
                <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                {likes}
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleBookmark}
                className={isBookmarked ? 'bg-blue-50 border-blue-200 text-blue-600' : ''}
              >
                <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                Save
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleShare('copy')}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-8">
            <ImageWithFallback
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
                style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  color: '#374151'
                }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <h4 className="text-lg mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 pt-8 border-t">
                <ShareSocialIcons 
                  url={window.location.href}
                  title={blog.title}
                  layout="horizontal"
                  size="md"
                />
              </div>

              {/* Author Bio */}
              <Card className="mt-12 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
                      <AvatarFallback>{blog.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="text-lg mb-1">{blog.author.name}</h4>
                      <p className="text-sm text-blue-600 mb-3">{blog.author.role}</p>
                      <p className="text-gray-600 mb-4">{blog.author.bio}</p>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm">
                          <Twitter className="w-4 h-4 mr-2" />
                          {blog.author.twitter}
                        </Button>
                        <Button variant="outline" size="sm">
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <div className="mt-12">
                <h3 className="text-2xl mb-6">Comments ({comments.length})</h3>
                
                {/* Add Comment */}
                <Card className="mb-8 border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg mb-4">Leave a comment</h4>
                    <Textarea
                      placeholder="Share your thoughts..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="mb-4"
                      rows={4}
                    />
                    <Button 
                      onClick={handleCommentSubmit}
                      disabled={!comment.trim()}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Post Comment
                    </Button>
                  </CardContent>
                </Card>

                {/* Comments List */}
                <div className="space-y-6">
                  {comments.map((comment) => (
                    <Card key={comment.id} className="border-0 shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <Avatar>
                            <AvatarImage src={comment.avatar} alt={comment.author} />
                            <AvatarFallback>{comment.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h5 className="font-medium">{comment.author}</h5>
                              <span className="text-sm text-gray-500">{comment.timestamp}</span>
                            </div>
                            <p className="text-gray-700 mb-3">{comment.content}</p>
                            <div className="flex items-center gap-4">
                              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-600">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                {comment.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-blue-600">
                                <MessageCircle className="w-4 h-4 mr-1" />
                                Reply
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Table of Contents */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <h4 className="text-lg">Table of Contents</h4>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      The Current AI Design Landscape
                    </a>
                    <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      Key Trends Shaping 2025
                    </a>
                    <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      Challenges and Considerations
                    </a>
                    <a href="#" className="block text-sm text-blue-600 hover:text-blue-800 transition-colors">
                      Looking Ahead
                    </a>
                  </CardContent>
                </Card>

                {/* Article Stats */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <div className="text-2xl mb-1">{blog.views.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Views</div>
                      </div>
                      <div>
                        <div className="text-2xl mb-1">{likes}</div>
                        <div className="text-sm text-gray-600">Likes</div>
                      </div>
                      <div>
                        <div className="text-2xl mb-1">{comments.length}</div>
                        <div className="text-sm text-gray-600">Comments</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Related <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-lg text-gray-600">
              Continue your learning journey with these handpicked articles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <Card 
                key={article.id} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                onClick={() => onNavigate('blogs', 'article', article.id)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-900 hover:bg-white">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{article.author}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('blogs')}
              className="px-8 py-3"
            >
              View All Articles
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}