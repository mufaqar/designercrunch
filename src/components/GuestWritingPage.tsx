import React from 'react';
import { 
  PenTool, 
  FileText, 
  Users, 
  Eye, 
  Star,
  TrendingUp,
  Award,
  CheckCircle,
  AlertCircle,
  Link2,
  Tag,
  Calendar,
  Send,
  BookOpen,
  Lightbulb,
  Target
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

interface GuestWritingPageProps {
  onNavigate: (page: string) => void;
}

export function GuestWritingPage({ onNavigate }: GuestWritingPageProps) {
  const [formData, setFormData] = React.useState({
    articleType: '',
    title: '',
    summary: '',
    outline: '',
    targetAudience: '',
    categories: [] as string[],
    tags: '',
    authorName: '',
    authorEmail: '',
    authorBio: '',
    authorWebsite: '',
    portfolioUrl: '',
    previousWork: '',
    estimatedLength: '',
    deliveryDate: '',
    hasOriginalImages: false,
    agreeToGuidelines: false
  });

  const articleTypes = [
    { 
      id: 'tutorial', 
      name: 'Tutorial/How-to', 
      icon: BookOpen, 
      description: 'Step-by-step guides and tutorials',
      examples: ['How to create a design system', 'Figma tips & tricks', 'CSS animations guide']
    },
    { 
      id: 'case-study', 
      name: 'Case Study', 
      icon: Target, 
      description: 'In-depth project breakdowns',
      examples: ['Mobile app redesign', 'Brand identity project', 'UX research findings']
    },
    { 
      id: 'opinion', 
      name: 'Opinion/Analysis', 
      icon: Lightbulb, 
      description: 'Industry insights and perspectives',
      examples: ['Future of web design', 'AI in design', 'Design trends analysis']
    },
    { 
      id: 'tools', 
      name: 'Tool Reviews', 
      icon: Star, 
      description: 'Reviews and comparisons of design tools',
      examples: ['Figma vs Sketch', 'Best prototyping tools', 'Free design resources']
    }
  ];

  const categories = [
    'UI/UX Design', 'Web Design', 'Mobile Design', 'Branding', 'Typography', 
    'Color Theory', 'Design Systems', 'Prototyping', 'User Research', 
    'Design Tools', 'Freelancing', 'Career Advice', 'Design Trends'
  ];

  const audienceTypes = [
    'Beginner Designers', 'Intermediate Designers', 'Senior Designers', 
    'Design Students', 'Freelancers', 'Design Teams', 'Product Managers'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCategoryToggle = (category: string) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToGuidelines) {
      toast.error('Please agree to the writing guidelines');
      return;
    }

    if (!formData.articleType || !formData.title || !formData.summary || !formData.authorEmail) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Article proposal submitted successfully! We\'ll get back to you within 3-5 business days.');
    
    // Reset form
    setFormData({
      articleType: '',
      title: '',
      summary: '',
      outline: '',
      targetAudience: '',
      categories: [],
      tags: '',
      authorName: '',
      authorEmail: '',
      authorBio: '',
      authorWebsite: '',
      portfolioUrl: '',
      previousWork: '',
      estimatedLength: '',
      deliveryDate: '',
      hasOriginalImages: false,
      agreeToGuidelines: false
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="mb-6">
            <Badge className="mb-4 bg-black text-white">
              <PenTool className="w-4 h-4 mr-2" />
              Guest Writing
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl mb-4">
              Write for <span className="text-yellow-500">DesignerCrunch</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Share your expertise with our community of designers and developers. 
              Help others learn while building your reputation as a thought leader.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium mb-1">Wide Reach</h3>
              <p className="text-sm text-gray-600">50K+ monthly readers in the design community</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-medium mb-1">SEO Benefits</h3>
              <p className="text-sm text-gray-600">Backlinks and increased online visibility</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium mb-1">Author Recognition</h3>
              <p className="text-sm text-gray-600">Full byline with bio and portfolio links</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Article Type */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Article Type *
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {articleTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <div
                      key={type.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        formData.articleType === type.id
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleInputChange('articleType', type.id)}
                    >
                      <div className="flex items-start gap-3">
                        <Icon className="w-5 h-5 mt-1" />
                        <div className="flex-1">
                          <h3 className="font-medium mb-1">{type.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                          <div className="text-xs text-gray-500">
                            <span className="font-medium">Examples:</span> {type.examples.join(', ')}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Article Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Article Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Article Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="e.g., How to Build a Design System from Scratch"
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">Make it compelling and specific</p>
              </div>

              <div>
                <Label htmlFor="summary">Article Summary *</Label>
                <Textarea
                  id="summary"
                  value={formData.summary}
                  onChange={(e) => handleInputChange('summary', e.target.value)}
                  placeholder="Provide a brief summary of what your article will cover and why it's valuable to our readers"
                  className="mt-2"
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="outline">Article Outline</Label>
                <Textarea
                  id="outline"
                  value={formData.outline}
                  onChange={(e) => handleInputChange('outline', e.target.value)}
                  placeholder="1. Introduction&#10;2. Main concepts&#10;3. Step-by-step guide&#10;4. Examples&#10;5. Conclusion"
                  className="mt-2"
                  rows={6}
                />
                <p className="text-xs text-gray-500 mt-1">List the main sections and key points you plan to cover</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="targetAudience">Target Audience *</Label>
                  <Select value={formData.targetAudience} onValueChange={(value) => handleInputChange('targetAudience', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select target audience" />
                    </SelectTrigger>
                    <SelectContent>
                      {audienceTypes.map(audience => (
                        <SelectItem key={audience} value={audience}>
                          {audience}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="estimatedLength">Estimated Word Count</Label>
                  <Select value={formData.estimatedLength} onValueChange={(value) => handleInputChange('estimatedLength', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select word count" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="800-1200">800-1,200 words</SelectItem>
                      <SelectItem value="1200-2000">1,200-2,000 words</SelectItem>
                      <SelectItem value="2000-3000">2,000-3,000 words</SelectItem>
                      <SelectItem value="3000+">3,000+ words</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Categories (Select all that apply)</Label>
                <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2">
                  {categories.map(category => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={category}
                        checked={formData.categories.includes(category)}
                        onCheckedChange={() => handleCategoryToggle(category)}
                      />
                      <Label htmlFor={category} className="text-sm">{category}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                  placeholder="design system, figma, ui components (comma separated)"
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>

          {/* Author Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Author Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="authorName">Your Name *</Label>
                  <Input
                    id="authorName"
                    value={formData.authorName}
                    onChange={(e) => handleInputChange('authorName', e.target.value)}
                    placeholder="John Doe"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="authorEmail">Email Address *</Label>
                  <Input
                    id="authorEmail"
                    type="email"
                    value={formData.authorEmail}
                    onChange={(e) => handleInputChange('authorEmail', e.target.value)}
                    placeholder="john@example.com"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="authorBio">Author Bio *</Label>
                <Textarea
                  id="authorBio"
                  value={formData.authorBio}
                  onChange={(e) => handleInputChange('authorBio', e.target.value)}
                  placeholder="Brief bio about yourself, your experience, and expertise (50-100 words)"
                  className="mt-2"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="authorWebsite">Website/Blog</Label>
                  <Input
                    id="authorWebsite"
                    type="url"
                    value={formData.authorWebsite}
                    onChange={(e) => handleInputChange('authorWebsite', e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                  <Input
                    id="portfolioUrl"
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => handleInputChange('portfolioUrl', e.target.value)}
                    placeholder="https://dribbble.com/username"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="previousWork">Previous Writing Experience</Label>
                <Textarea
                  id="previousWork"
                  value={formData.previousWork}
                  onChange={(e) => handleInputChange('previousWork', e.target.value)}
                  placeholder="List any previous articles, blogs, or publications you've written for (optional)"
                  className="mt-2"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Timeline & Images */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Timeline & Assets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="deliveryDate">Proposed Delivery Date</Label>
                <Input
                  id="deliveryDate"
                  type="date"
                  value={formData.deliveryDate}
                  onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">When do you plan to deliver the completed article?</p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="hasOriginalImages"
                  checked={formData.hasOriginalImages}
                  onCheckedChange={(checked) => handleInputChange('hasOriginalImages', checked)}
                />
                <Label htmlFor="hasOriginalImages" className="text-sm">
                  I can provide original images, screenshots, or graphics for the article
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Guidelines Agreement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Writing Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Our Content Standards:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Original, high-quality content only</li>
                  <li>• Actionable insights and practical value</li>
                  <li>• Proper grammar, spelling, and formatting</li>
                  <li>• Include relevant examples and visuals</li>
                  <li>• Cite sources and give proper attribution</li>
                  <li>• No promotional content or excessive self-promotion</li>
                </ul>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToGuidelines"
                  checked={formData.agreeToGuidelines}
                  onCheckedChange={(checked) => handleInputChange('agreeToGuidelines', checked)}
                />
                <Label htmlFor="agreeToGuidelines" className="text-sm">
                  I agree to follow the writing guidelines and understand that submitted articles will be reviewed before publication *
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-center">
            <Button 
              type="submit" 
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-4"
            >
              <Send className="w-5 h-5 mr-2" />
              Submit Article Proposal
            </Button>
          </div>
        </form>

        {/* Process Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">1</span>
              </div>
              <h3 className="font-medium mb-2">Submit Proposal</h3>
              <p className="text-sm text-gray-600">Send us your article idea and outline</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">2</span>
              </div>
              <h3 className="font-medium mb-2">Review Process</h3>
              <p className="text-sm text-gray-600">We'll review and provide feedback within 3-5 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">3</span>
              </div>
              <h3 className="font-medium mb-2">Publication</h3>
              <p className="text-sm text-gray-600">Once approved, we'll schedule your article for publication</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}