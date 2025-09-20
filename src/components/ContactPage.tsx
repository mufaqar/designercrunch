import React from 'react';
import { 
  Send,
  Mail,
  Phone,
  Clock,
  MapPin,
  Building,
  Users,
  FileText,
  DollarSign,
  Heart,
  Upload,
  Check,
  Globe,
  AlertCircle,
  Shield,
  User,
  MessageSquare,
  FileX,
  CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ContactSocialIcons } from './SocialIcons';
import { toast } from 'sonner@2.0.3';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+1',
    purpose: '',
    message: '',
    file: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [captchaVerified, setCaptchaVerified] = React.useState(false);
  const [selectedPurpose, setSelectedPurpose] = React.useState('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const contactPurposes = [
    {
      id: 'services',
      title: 'Services Inquiry',
      description: 'Looking for website, mobile app, or design services.',
      icon: Building,
      color: 'from-blue-600 to-purple-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      id: 'partnership',
      title: 'Partnership',
      description: 'Collaborate or partner with us.',
      icon: Users,
      color: 'from-green-600 to-teal-600',
      bgColor: 'bg-green-50 hover:bg-green-100'
    },
    {
      id: 'buyout',
      title: 'Business Buyout',
      description: 'Interested in acquiring DesignerCrunch.',
      icon: DollarSign,
      color: 'from-yellow-600 to-orange-600',
      bgColor: 'bg-yellow-50 hover:bg-yellow-100'
    },
    {
      id: 'article',
      title: 'Article Submission',
      description: 'Publish your design-related articles with us.',
      icon: FileText,
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100'
    },
    {
      id: 'advertisement',
      title: 'Advertisement',
      description: 'Promote your brand on DesignerCrunch.',
      icon: Heart,
      color: 'from-red-600 to-pink-600',
      bgColor: 'bg-red-50 hover:bg-red-100'
    }
  ];

  const countryCodes = [
    { code: '+1', country: 'US/CA', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+49', country: 'DE', flag: '🇩🇪' },
    { code: '+33', country: 'FR', flag: '🇫🇷' },
    { code: '+91', country: 'IN', flag: '🇮🇳' },
    { code: '+92', country: 'PK', flag: '🇵🇰' },
    { code: '+86', country: 'CN', flag: '🇨🇳' },
    { code: '+81', country: 'JP', flag: '🇯🇵' },
    { code: '+61', country: 'AU', flag: '🇦🇺' },
    { code: '+31', country: 'NL', flag: '🇳🇱' }
  ];

  const purposeOptions = [
    { value: 'services', label: 'Services Inquiry' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'buyout', label: 'Business Buyout' },
    { value: 'article', label: 'Article Submission' },
    { value: 'advertisement', label: 'Advertisement' },
    { value: 'support', label: 'General Support' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' }
  ];

  const handlePurposeClick = (purposeId: string) => {
    setSelectedPurpose(purposeId);
    setFormData({ ...formData, purpose: purposeId });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormData({ ...formData, file });
  };

  const removeFile = () => {
    setFormData({ ...formData, file: null });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const simulateCaptcha = () => {
    // Simulate captcha verification
    setTimeout(() => {
      setCaptchaVerified(true);
      toast.success('Captcha verified successfully');
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaVerified) {
      toast.error('Please verify that you are not a robot');
      return;
    }

    if (!formData.fullName || !formData.email || !formData.purpose || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
    }, 2000);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-green-200">
            <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl mb-4">Thank You!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thanks for reaching out! Our team will get back to you within 24 hours.
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
              >
                Send Another Message
              </Button>
              <Button 
                onClick={() => onNavigate('home')}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <Badge className="mb-6 bg-black text-white hover:bg-gray-800">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            
            <h1 className="text-4xl lg:text-7xl mb-6">
              Let's Connect with <span className="text-yellow-500">DesignerCrunch</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Whether you need services, want to partner, advertise, or contribute – we'd love to hear from you.
              Our team is here to help bring your ideas to life.
            </p>
          </div>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2 text-black">24h</div>
              <div className="text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 text-yellow-500">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 text-black">Global</div>
              <div className="text-gray-600">Remote Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Purpose Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              How Can We <span className="text-yellow-500">Help You?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the category that best describes your inquiry to get connected with the right team member.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactPurposes.map((purpose) => {
              const Icon = purpose.icon;
              const isSelected = selectedPurpose === purpose.id;
              
              return (
                <Card 
                  key={purpose.id}
                  className={`group cursor-pointer transition-all duration-300 border-2 hover:shadow-xl ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50 shadow-lg' 
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                  onClick={() => handlePurposeClick(purpose.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl ${purpose.bgColor} flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                      isSelected ? 'scale-110' : 'group-hover:scale-105'
                    }`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-r ${purpose.color} bg-clip-text text-transparent`} />
                    </div>
                    <h3 className="text-lg mb-2 group-hover:text-blue-600 transition-colors">
                      {purpose.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {purpose.description}
                    </p>
                    {isSelected && (
                      <Badge className="mt-3 bg-blue-600 text-white">
                        <Check className="w-3 h-3 mr-1" />
                        Selected
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              );
            })}
            
            {/* General Contact Card */}
            <Card 
              className={`group cursor-pointer transition-all duration-300 border-2 border-dashed border-gray-300 hover:border-gray-400 ${
                selectedPurpose === 'other' ? 'border-blue-500 bg-blue-50' : ''
              }`}
              onClick={() => handlePurposeClick('other')}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                  <MessageSquare className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg mb-2 group-hover:text-gray-700 transition-colors">
                  Something Else?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Have a different inquiry? We're here to help with any questions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl">
                <CardHeader className="pb-6">
                  <h3 className="text-2xl">Send Us a Message</h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-medium mb-2 block">
                        Full Name *
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className="pl-12 py-3 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email Address *
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="pl-12 py-3 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium mb-2 block">
                        Phone Number
                      </Label>
                      <div className="flex gap-3">
                        <Select value={formData.countryCode} onValueChange={(value) => handleInputChange('countryCode', value)}>
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {countryCodes.map((country) => (
                              <SelectItem key={country.code} value={country.code}>
                                <div className="flex items-center gap-2">
                                  <span>{country.flag}</span>
                                  <span>{country.code}</span>
                                  <span className="text-xs text-gray-500">{country.country}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <div className="relative flex-1">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="pl-12 py-3 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Purpose */}
                    <div>
                      <Label htmlFor="purpose" className="text-sm font-medium mb-2 block">
                        Purpose of Contact *
                      </Label>
                      <Select 
                        value={formData.purpose} 
                        onValueChange={(value) => {
                          handleInputChange('purpose', value);
                          setSelectedPurpose(value);
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select the purpose of your inquiry" />
                        </SelectTrigger>
                        <SelectContent>
                          {purposeOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message / Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide details about your project, inquiry, or how we can help you..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="min-h-32 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">
                        Attach File (Optional)
                      </Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                        {formData.file ? (
                          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center gap-3">
                              <FileText className="w-8 h-8 text-blue-600" />
                              <div className="text-left">
                                <p className="text-sm font-medium">{formData.file.name}</p>
                                <p className="text-xs text-gray-500">{formatFileSize(formData.file.size)}</p>
                              </div>
                            </div>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={removeFile}
                              className="text-red-600 hover:text-red-700"
                            >
                              <FileX className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                            <p className="text-gray-600 mb-2">Drop your file here or click to browse</p>
                            <p className="text-xs text-gray-500">Supports: PDF, DOC, DOCX, PNG, JPG (Max 10MB)</p>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => fileInputRef.current?.click()}
                              className="mt-3"
                            >
                              Choose File
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Captcha */}
                    <div>
                      <Label className="text-sm font-medium mb-3 block">
                        Security Verification *
                      </Label>
                      <div className="bg-gray-100 p-4 rounded-lg border">
                        {!captchaVerified ? (
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-6 border-2 border-gray-400 rounded bg-white cursor-pointer hover:border-blue-500 transition-colors" onClick={simulateCaptcha}></div>
                            <span className="text-sm">I'm not a robot</span>
                            <Shield className="w-5 h-5 text-gray-500" />
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 text-green-600">
                            <div className="w-6 h-6 border-2 border-green-500 rounded bg-green-500 flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm">Verified</span>
                            <Shield className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || !captchaVerified}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-4"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="text-xl">Contact Information</h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Support Email</h4>
                      <p className="text-blue-600">support@designercrunch.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Business Hours</h4>
                      <p className="text-gray-600 text-sm">Mon – Fri, 9AM – 6PM PKT</p>
                      <p className="text-gray-500 text-xs">Usually respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Globe className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Location</h4>
                      <p className="text-gray-600 text-sm">Remote / Global Team</p>
                      <p className="text-gray-500 text-xs">Serving clients worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Contact Info */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="text-xl">Additional Contact Info</h3>
                  <p className="text-gray-600 text-sm">Connect with us on social media</p>
                </CardHeader>
                <CardContent>
                  <ContactSocialIcons />
                </CardContent>
              </Card>

              {/* FAQ Quick Links */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="text-xl">Quick Help</h3>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" size="sm" className="w-full justify-start text-left">
                    <AlertCircle className="w-4 h-4 mr-3" />
                    Service Pricing & Packages
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-left">
                    <Users className="w-4 h-4 mr-3" />
                    Partnership Opportunities
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-left">
                    <FileText className="w-4 h-4 mr-3" />
                    Article Submission Guidelines
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start text-left">
                    <Heart className="w-4 h-4 mr-3" />
                    Advertising Options
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}