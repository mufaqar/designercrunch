import React from 'react';
import { 
  Upload, 
  Image, 
  Link2, 
  Tag, 
  Star, 
  Eye, 
  CheckCircle,
  AlertCircle,
  FileText,
  Palette,
  Code,
  Zap,
  Grid,
  Users,
  Award,
  Send
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

interface SubmitResourcePageProps {
  onNavigate: (page: string) => void;
}

export function SubmitResourcePage({ onNavigate }: SubmitResourcePageProps) {
  const [formData, setFormData] = React.useState({
    resourceType: '',
    title: '',
    description: '',
    longDescription: '',
    category: '',
    tags: '',
    downloadUrl: '',
    previewUrl: '',
    authorName: '',
    authorEmail: '',
    authorWebsite: '',
    licenseType: '',
    formats: [] as string[],
    fileSize: '',
    isPremium: false,
    agreeToTerms: false
  });

  const resourceTypes = [
    { id: 'icons', name: 'Icon Pack', icon: Zap, description: 'Collection of icons in various formats' },
    { id: 'ui-kit', name: 'UI Kit', icon: Grid, description: 'Complete UI component library' },
    { id: 'template', name: 'Template', icon: Code, description: 'Website or app template' },
    { id: 'mockup', name: 'Mockup', icon: Image, description: 'Device or scene mockup' },
    { id: 'illustration', name: 'Illustration', icon: Palette, description: 'Artwork or graphic illustration' },
    { id: 'font', name: 'Font', icon: FileText, description: 'Typography font family' }
  ];

  const categories = [
    'Web Design', 'Mobile Design', 'Branding', 'Print Design', 
    'UI/UX', 'Icons', 'Illustrations', 'Typography', 'Photography', 'Other'
  ];

  const formats = [
    'AI', 'PSD', 'Sketch', 'Figma', 'XD', 'SVG', 'PNG', 'JPG', 
    'PDF', 'EPS', 'HTML', 'CSS', 'React', 'Vue', 'Angular'
  ];

  const licenseTypes = [
    { id: 'free', name: 'Free for Commercial Use', description: 'No attribution required' },
    { id: 'attribution', name: 'Free with Attribution', description: 'Credit the author' },
    { id: 'personal', name: 'Personal Use Only', description: 'No commercial usage' },
    { id: 'premium', name: 'Premium License', description: 'Paid commercial license' }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormatToggle = (format: string) => {
    setFormData(prev => ({
      ...prev,
      formats: prev.formats.includes(format)
        ? prev.formats.filter(f => f !== format)
        : [...prev.formats, format]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }

    if (!formData.resourceType || !formData.title || !formData.description || !formData.authorEmail) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Resource submitted successfully! We\'ll review it within 24-48 hours.');
    
    // Reset form
    setFormData({
      resourceType: '',
      title: '',
      description: '',
      longDescription: '',
      category: '',
      tags: '',
      downloadUrl: '',
      previewUrl: '',
      authorName: '',
      authorEmail: '',
      authorWebsite: '',
      licenseType: '',
      formats: [],
      fileSize: '',
      isPremium: false,
      agreeToTerms: false
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="mb-6">
            <Badge className="mb-4 bg-black text-white">
              <Upload className="w-4 h-4 mr-2" />
              Submit Resource
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl mb-4">
              Share Your <span className="text-yellow-500">Design Resources</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Help the design community by sharing your amazing resources. Every submission 
              is reviewed by our team to ensure quality and value.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium mb-1">Reach Thousands</h3>
              <p className="text-sm text-gray-600">Get your work seen by designers worldwide</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-black" />
              </div>
              <h3 className="font-medium mb-1">Build Your Portfolio</h3>
              <p className="text-sm text-gray-600">Showcase your skills and gain recognition</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium mb-1">Quality Guarantee</h3>
              <p className="text-sm text-gray-600">All resources are reviewed for quality</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Resource Type */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Grid className="w-5 h-5" />
                Resource Type *
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resourceTypes.map((type) => {
                  const Icon = type.icon;
                  return (
                    <div
                      key={type.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        formData.resourceType === type.id
                          ? 'border-yellow-500 bg-yellow-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleInputChange('resourceType', type.id)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5" />
                        <h3 className="font-medium">{type.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600">{type.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="title">Resource Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="e.g., Minimal Icon Pack - 500+ Icons"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Short Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Brief description of your resource (max 160 characters)"
                  maxLength={160}
                  className="mt-2"
                  rows={3}
                />
                <p className="text-xs text-gray-500 mt-1">{formData.description.length}/160 characters</p>
              </div>

              <div>
                <Label htmlFor="longDescription">Detailed Description</Label>
                <Textarea
                  id="longDescription"
                  value={formData.longDescription}
                  onChange={(e) => handleInputChange('longDescription', e.target.value)}
                  placeholder="Provide a detailed description of your resource, its features, and use cases"
                  className="mt-2"
                  rows={5}
                />
              </div>

              <div>
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => handleInputChange('tags', e.target.value)}
                  placeholder="icon, minimal, web, mobile, ui (comma separated)"
                  className="mt-2"
                />
                <p className="text-xs text-gray-500 mt-1">Add relevant tags to help users find your resource</p>
              </div>
            </CardContent>
          </Card>

          {/* File Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5" />
                File Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="downloadUrl">Download URL *</Label>
                  <Input
                    id="downloadUrl"
                    type="url"
                    value={formData.downloadUrl}
                    onChange={(e) => handleInputChange('downloadUrl', e.target.value)}
                    placeholder="https://drive.google.com/..."
                    className="mt-2"
                  />
                  <p className="text-xs text-gray-500 mt-1">Google Drive, Dropbox, or your website</p>
                </div>
                <div>
                  <Label htmlFor="previewUrl">Preview Image URL</Label>
                  <Input
                    id="previewUrl"
                    type="url"
                    value={formData.previewUrl}
                    onChange={(e) => handleInputChange('previewUrl', e.target.value)}
                    placeholder="https://example.com/preview.jpg"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fileSize">File Size</Label>
                  <Input
                    id="fileSize"
                    value={formData.fileSize}
                    onChange={(e) => handleInputChange('fileSize', e.target.value)}
                    placeholder="e.g., 2.5 MB"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Formats Included</Label>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {formats.slice(0, 9).map(format => (
                      <div key={format} className="flex items-center space-x-2">
                        <Checkbox
                          id={format}
                          checked={formData.formats.includes(format)}
                          onCheckedChange={() => handleFormatToggle(format)}
                        />
                        <Label htmlFor={format} className="text-sm">{format}</Label>
                      </div>
                    ))}
                  </div>
                </div>
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
                <Label htmlFor="authorWebsite">Website/Portfolio (Optional)</Label>
                <Input
                  id="authorWebsite"
                  type="url"
                  value={formData.authorWebsite}
                  onChange={(e) => handleInputChange('authorWebsite', e.target.value)}
                  placeholder="https://yourportfolio.com"
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>

          {/* License */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                License & Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label>License Type *</Label>
                <RadioGroup 
                  value={formData.licenseType} 
                  onValueChange={(value) => handleInputChange('licenseType', value)}
                  className="mt-3"
                >
                  {licenseTypes.map(license => (
                    <div key={license.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                      <RadioGroupItem value={license.id} id={license.id} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={license.id} className="cursor-pointer">
                          {license.name}
                        </Label>
                        <p className="text-sm text-gray-600 mt-1">{license.description}</p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                />
                <Label htmlFor="agreeToTerms" className="text-sm">
                  I agree to the{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('terms')}
                    className="text-yellow-600 hover:underline"
                  >
                    Terms of Service
                  </button>
                  {' '}and confirm that I have the rights to share this resource *
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
              Submit Resource for Review
            </Button>
          </div>
        </form>

        {/* Guidelines */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5" />
            Submission Guidelines
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Resources must be original work or properly licensed</li>
            <li>• High-quality files with clear previews are preferred</li>
            <li>• Include comprehensive descriptions and relevant tags</li>
            <li>• Review process typically takes 24-48 hours</li>
            <li>• We reserve the right to reject submissions that don't meet our quality standards</li>
            <li>• Approved resources will be featured with proper attribution</li>
          </ul>
        </div>
      </div>
    </div>
  );
}