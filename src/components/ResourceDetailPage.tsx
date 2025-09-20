import React from 'react';
import { 
  ArrowLeft,
  Download, 
  Star, 
  Eye, 
  Heart,
  Share2,
  Bookmark,
  Calendar,
  User,
  Package,
  FileText,
  Image,
  Palette,
  Code,
  Zap,
  Grid,
  Copy,
  Check,
  ExternalLink,
  Shield,
  Crown,
  Tag,
  Clock,
  ThumbsUp,
  MessageCircle,
  Layers,
  Monitor,
  Smartphone,
  Tablet
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SVGIconViewer } from './SVGIconViewer';
import { toast } from 'sonner@2.0.3';

interface ResourceDetailPageProps {
  resourceId: string;
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function ResourceDetailPage({ resourceId, onNavigate }: ResourceDetailPageProps) {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [selectedFormat, setSelectedFormat] = React.useState('SVG');
  const [selectedSize, setSelectedSize] = React.useState('All Sizes');
  const [copiedText, setCopiedText] = React.useState('');
  const [showIconViewer, setShowIconViewer] = React.useState(false);

  // Mock resource data - in a real app, this would come from an API
  const resourcesData = {
    'minimal-icons-pack': {
      id: 'minimal-icons-pack',
      title: 'Minimal Icons Pack - 500+ Icons',
      category: 'icons',
      description: 'A comprehensive collection of 500+ clean, minimal icons perfect for modern web and mobile applications. Each icon is carefully crafted with pixel-perfect precision and available in multiple formats.',
      longDescription: 'This icon pack includes essential icons for web and mobile applications, covering categories like navigation, social media, e-commerce, productivity, and more. All icons follow a consistent design language with clean lines and minimal aesthetics.',
      images: [
        'https://images.unsplash.com/photo-1558655146-9f40138edfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaWNvbnMlMjBkZXNpZ258ZW58MXx8fHwxNzU4Mjg1NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY29uJTIwZGVzaWduJTIwZ3JpZHxlbnwxfHx8fDE3NTgyODU2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGljb25zJTIwZGVzaWdufGVufDF8fHx8MTc1ODI4NTY1OXww&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      downloads: 15420,
      likes: 2340,
      views: 45600,
      rating: 4.9,
      reviewCount: 287,
      fileSize: '2.5 MB',
      formats: ['SVG', 'PNG', 'AI', 'EPS'],
      sizes: ['16px', '24px', '32px', '48px', '64px', 'All Sizes'],
      license: 'Commercial',
      author: {
        name: 'DesignStudio',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGhvdG98ZW58MXx8fHwxNzU4Mjg1NjU5fDA&ixlib=rb-4.1.0&q=80&w=150',
        followers: 12400,
        verified: true
      },
      dateAdded: '2024-12-15',
      featured: true,
      premium: false,
      tags: ['icons', 'minimal', 'web', 'mobile', 'ui', 'interface', 'clean', 'modern'],
      iconCategories: [
        { name: 'Navigation', count: 45, icons: ['arrow-left', 'arrow-right', 'home', 'menu', 'search'] },
        { name: 'Social Media', count: 38, icons: ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'] },
        { name: 'E-commerce', count: 42, icons: ['shopping-cart', 'credit-card', 'wallet', 'bag', 'gift'] },
        { name: 'Communication', count: 35, icons: ['mail', 'phone', 'message', 'chat', 'notification'] },
        { name: 'Files & Folders', count: 28, icons: ['folder', 'file', 'download', 'upload', 'cloud'] },
        { name: 'Media', count: 32, icons: ['play', 'pause', 'stop', 'volume', 'camera'] }
      ],
      specs: {
        strokeWidth: '1.5px',
        gridSize: '24x24px',
        cornerRadius: '2px',
        colorSupport: 'Monochrome & Color variants',
        compatibility: 'All design tools'
      },
      usageExamples: [
        {
          title: 'Web Application',
          description: 'Perfect for modern web interfaces',
          preview: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NTgyODU2NTl8MA&ixlib=rb-4.1.0&q=80&w=300'
        },
        {
          title: 'Mobile App',
          description: 'Optimized for mobile interfaces',
          preview: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzU4Mjg1NjU5fDA&ixlib=rb-4.1.0&q=80&w=300'
        }
      ]
    },
    'dashboard-ui-kit': {
      id: 'dashboard-ui-kit',
      title: 'Modern Dashboard UI Kit',
      category: 'ui-kits',
      description: 'Complete dashboard UI kit with 50+ components, perfect for admin panels and analytics dashboards.',
      longDescription: 'A comprehensive UI kit designed specifically for dashboard and admin panel interfaces. Includes components for data visualization, navigation, forms, and user management.',
      images: [
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NTgyODU2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
      ],
      downloads: 8950,
      likes: 1890,
      views: 23400,
      rating: 4.8,
      reviewCount: 156,
      fileSize: '12.8 MB',
      formats: ['Figma', 'Sketch', 'XD', 'AI'],
      license: 'Commercial',
      author: {
        name: 'UIDesigners',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9maWxlJTIwcGhvdG98ZW58MXx8fHwxNzU4Mjg1NjU5fDA&ixlib=rb-4.1.0&q=80&w=150',
        followers: 8900,
        verified: true
      },
      dateAdded: '2024-12-10',
      featured: true,
      premium: true,
      tags: ['dashboard', 'admin', 'analytics', 'components', 'ui-kit', 'modern'],
      components: [
        { name: 'Navigation Sidebar', count: 5 },
        { name: 'Data Tables', count: 8 },
        { name: 'Charts & Graphs', count: 12 },
        { name: 'Cards & Widgets', count: 15 },
        { name: 'Forms & Inputs', count: 10 }
      ]
    }
  };

  const resource = resourcesData[resourceId as keyof typeof resourcesData];

  if (!resource) {
    return (
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl mb-4">Resource Not Found</h1>
          <Button onClick={() => onNavigate('resources')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Button>
        </div>
      </div>
    );
  }

  const handleDownload = (format: string, size?: string) => {
    if (resource.premium) {
      toast.info("This is a premium resource. Sign up for Pro access!");
    } else {
      const sizeText = size ? ` (${size})` : '';
      toast.success(`Downloading ${resource.title} - ${format}${sizeText}...`);
    }
  };

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopiedText(''), 2000);
  };

  // Show icon viewer if requested
  if (showIconViewer && resource.category === 'icons') {
    return (
      <SVGIconViewer 
        packId={resource.id}
        packTitle={resource.title}
        onBack={() => setShowIconViewer(false)}
      />
    );
  }

  const relatedResources = [
    {
      id: 'icon-pack-2',
      title: 'Business Icons Collection',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGljb25zJTIwZGVzaWdufGVufDF8fHx8MTc1ODI4NTY1OXww&ixlib=rb-4.1.0&q=80&w=300',
      downloads: 8920,
      rating: 4.7
    },
    {
      id: 'ui-elements',
      title: 'Modern UI Elements',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGVsZW1lbnRzfGVufDF8fHx8MTc1ODI4NTY1OXww&ixlib=rb-4.1.0&q=80&w=300',
      downloads: 6450,
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('resources')}
            className="hover:bg-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Resources
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Resource Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{resource.category}</Badge>
                    {resource.featured && (
                      <Badge className="bg-black text-white">
                        <Crown className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                    {resource.premium && (
                      <Badge className="bg-yellow-500 text-black">
                        Premium
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-3xl lg:text-4xl mb-4">{resource.title}</h1>
                  <p className="text-lg text-gray-600 mb-4">{resource.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {resource.downloads.toLocaleString()} downloads
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {resource.views.toLocaleString()} views
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                      {resource.rating} ({resource.reviewCount} reviews)
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 ml-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <Heart className={`w-4 h-4 ${isBookmarked ? 'text-red-500 fill-current' : ''}`} />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <ImageWithFallback
                  src={resource.author.avatar}
                  alt={resource.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{resource.author.name}</h3>
                    {resource.author.verified && (
                      <Badge variant="outline" className="text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{resource.author.followers.toLocaleString()} followers</p>
                </div>
                <Button size="sm" variant="outline">Follow</Button>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="mb-8">
              <div className="space-y-4">
                {resource.images.map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden border">
                    <ImageWithFallback
                      src={image}
                      alt={`${resource.title} preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs Content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="specs">Specs</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl mb-3">About this resource</h3>
                    <p className="text-gray-600 mb-4">{resource.longDescription}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {resource.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Icon Categories for icon packs */}
                  {resource.category === 'icons' && 'iconCategories' in resource && (
                    <div>
                      <h3 className="text-xl mb-4">What's Included</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {resource.iconCategories.map((category, index) => (
                          <Card key={index} className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{category.name}</h4>
                              <Badge variant="secondary">{category.count} icons</Badge>
                            </div>
                            <div className="flex gap-2 text-sm text-gray-500">
                              {category.icons.slice(0, 3).map((icon, i) => (
                                <span key={i}>{icon}</span>
                              ))}
                              {category.icons.length > 3 && <span>+{category.icons.length - 3} more</span>}
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Usage Examples */}
                  {'usageExamples' in resource && (
                    <div>
                      <h3 className="text-xl mb-4">Usage Examples</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {resource.usageExamples.map((example, index) => (
                          <Card key={index} className="overflow-hidden">
                            <div className="aspect-video">
                              <ImageWithFallback
                                src={example.preview}
                                alt={example.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <CardContent className="p-4">
                              <h4 className="font-medium mb-2">{example.title}</h4>
                              <p className="text-sm text-gray-600">{example.description}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="preview" className="mt-6">
                <div className="space-y-6">
                  <h3 className="text-xl">Live Preview</h3>
                  
                  {resource.category === 'icons' && (
                    <div>
                      <div className="flex gap-4 mb-4">
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex items-center gap-2"
                        >
                          <Grid className="w-4 h-4" />
                          Grid View
                        </Button>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">16px</Button>
                          <Button size="sm" variant="outline">24px</Button>
                          <Button size="sm" variant="default" className="bg-black">32px</Button>
                          <Button size="sm" variant="outline">48px</Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-8 gap-4 p-6 bg-gray-50 rounded-lg">
                        {Array.from({ length: 32 }, (_, i) => (
                          <div key={i} className="aspect-square bg-white rounded border flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
                            <div className="w-6 h-6 bg-black rounded-sm"></div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-sm text-gray-500">
                          Showing 32 of 500+ icons. Download to get the complete collection.
                        </p>
                        <Button 
                          onClick={() => setShowIconViewer(true)}
                          className="bg-black hover:bg-gray-800 text-white"
                        >
                          <Grid className="w-4 h-4 mr-2" />
                          Browse All Icons
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="specs" className="mt-6">
                <div className="space-y-6">
                  <h3 className="text-xl">Technical Specifications</h3>
                  
                  {'specs' in resource && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(resource.specs).map(([key, value], index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <dt className="font-medium text-sm text-gray-500 uppercase tracking-wide">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </dt>
                          <dd className="mt-1 text-lg">{value}</dd>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <dt className="font-medium text-sm text-gray-500 uppercase tracking-wide">File Size</dt>
                      <dd className="mt-1 text-lg">{resource.fileSize}</dd>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <dt className="font-medium text-sm text-gray-500 uppercase tracking-wide">License</dt>
                      <dd className="mt-1 text-lg">{resource.license}</dd>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <dt className="font-medium text-sm text-gray-500 uppercase tracking-wide">Formats</dt>
                      <dd className="mt-1 text-lg">{resource.formats.join(', ')}</dd>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <dt className="font-medium text-sm text-gray-500 uppercase tracking-wide">Date Added</dt>
                      <dd className="mt-1 text-lg">{new Date(resource.dateAdded).toLocaleDateString()}</dd>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl">Reviews & Ratings</h3>
                    <Button size="sm" variant="outline">Write a Review</Button>
                  </div>

                  <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl mb-1">{resource.rating}</div>
                      <div className="flex items-center justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">{resource.reviewCount} reviews</div>
                    </div>
                    
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-2 mb-1">
                          <span className="text-sm w-3">{rating}</span>
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-yellow-400 h-2 rounded-full" 
                              style={{ width: `${Math.random() * 80 + 10}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sample Reviews */}
                  <div className="space-y-4">
                    {[
                      { name: 'Sarah Johnson', rating: 5, date: '2024-12-10', comment: 'Excellent icon pack! Clean design and perfect for our web application.' },
                      { name: 'Mike Chen', rating: 4, date: '2024-12-08', comment: 'Great variety of icons. Would love to see more business-specific icons.' },
                      { name: 'Emma Wilson', rating: 5, date: '2024-12-05', comment: 'Perfect for mobile app development. Highly recommended!' }
                    ].map((review, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                            <div>
                              <div className="font-medium text-sm">{review.name}</div>
                              <div className="flex items-center gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                        <p className="text-sm text-gray-600">{review.comment}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Download Section */}
              <Card className="p-6">
                <h3 className="text-lg mb-4">Download Options</h3>
                
                {/* Format Selection */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Format</label>
                    <div className="grid grid-cols-2 gap-2">
                      {resource.formats.map((format) => (
                        <Button
                          key={format}
                          size="sm"
                          variant={selectedFormat === format ? "default" : "outline"}
                          onClick={() => setSelectedFormat(format)}
                          className={selectedFormat === format ? "bg-black text-white" : ""}
                        >
                          {format}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Size Selection for icons */}
                  {resource.category === 'icons' && 'sizes' in resource && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Size</label>
                      <div className="grid grid-cols-2 gap-2">
                        {resource.sizes.map((size) => (
                          <Button
                            key={size}
                            size="sm"
                            variant={selectedSize === size ? "default" : "outline"}
                            onClick={() => setSelectedSize(size)}
                            className={selectedSize === size ? "bg-black text-white" : ""}
                          >
                            {size}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Download Button */}
                <Button 
                  className="w-full bg-black hover:bg-gray-800 text-white mb-3"
                  onClick={() => handleDownload(selectedFormat, selectedSize)}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download {selectedFormat}
                </Button>

                {/* Browse Icons Button for icon packs */}
                {resource.category === 'icons' && (
                  <Button 
                    variant="outline"
                    className="w-full mb-3"
                    onClick={() => setShowIconViewer(true)}
                  >
                    <Grid className="w-4 h-4 mr-2" />
                    Browse All Icons
                  </Button>
                )}

                {resource.premium && (
                  <p className="text-xs text-gray-500 text-center">
                    Requires Pro subscription
                  </p>
                )}

                {/* License Info */}
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shield className="w-4 h-4" />
                    <span>Commercial License</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Free for commercial and personal use
                  </p>
                </div>
              </Card>

              {/* File Info */}
              <Card className="p-6">
                <h3 className="text-lg mb-4">File Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">File Size</span>
                    <span>{resource.fileSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Downloads</span>
                    <span>{resource.downloads.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Added</span>
                    <span>{new Date(resource.dateAdded).toLocaleDateString()}</span>
                  </div>
                </div>
              </Card>

              {/* Related Resources */}
              <Card className="p-6">
                <h3 className="text-lg mb-4">Related Resources</h3>
                <div className="space-y-3">
                  {relatedResources.map((related) => (
                    <div 
                      key={related.id}
                      className="flex gap-3 cursor-pointer hover:bg-gray-50 rounded p-2 -m-2 transition-colors"
                      onClick={() => onNavigate('resources', 'detail', related.id)}
                    >
                      <div className="w-12 h-12 rounded bg-gray-200 flex-shrink-0">
                        <ImageWithFallback
                          src={related.image}
                          alt={related.title}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium line-clamp-2">{related.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <span>{related.downloads.toLocaleString()} downloads</span>
                          <div className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                            {related.rating}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}