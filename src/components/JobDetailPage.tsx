import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  DollarSign,
  Building,
  Users,
  Calendar,
  ExternalLink,
  Bookmark,
  Share2,
  Star,
  Check,
  Globe,
  Home,
  Laptop,
  Heart,
  Twitter,
  Linkedin,
  Facebook,
  Link2,
  ChevronRight,
  Award,
  Target,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface JobDetailPageProps {
  jobId: string;
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function JobDetailPage({ jobId, onNavigate }: JobDetailPageProps) {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  const [hasApplied, setHasApplied] = React.useState(false);

  // Mock job data - in real app this would come from an API
  const jobData = {
    'job-1': {
      id: 'job-1',
      title: 'Senior UI/UX Designer',
      company: 'TechFlow Inc.',
      companySize: '500-1000 employees',
      location: 'San Francisco, CA',
      workType: 'Remote',
      type: 'Full-time',
      salary: '$120,000 - $150,000',
      posted: '2 days ago',
      applicants: 45,
      logo: 'https://images.unsplash.com/photo-1520865649274-dfc80824ab25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nbyUyMHRlY2glMjBzdGFydHVwfGVufDF8fHx8MTc1ODIzOTM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
      linkedinUrl: 'https://linkedin.com/jobs/view/12345',
      companyWebsite: 'https://techflow.com',
      description: `
        <p>We're looking for a Senior UI/UX Designer to join our growing product team at TechFlow Inc. You'll be responsible for designing user-centered digital experiences that delight our customers and drive business growth.</p>
        
        <h3>About TechFlow Inc.</h3>
        <p>TechFlow is a leading SaaS company serving over 10,000 businesses worldwide. We're passionate about creating technology that empowers teams to work more efficiently and collaboratively.</p>
        
        <h3>What You'll Do</h3>
        <p>As a Senior UI/UX Designer, you will:</p>
        <ul>
          <li>Lead design projects from concept to implementation</li>
          <li>Collaborate with product managers and engineers to define requirements</li>
          <li>Create wireframes, prototypes, and high-fidelity designs</li>
          <li>Conduct user research and usability testing</li>
          <li>Contribute to and maintain our design system</li>
          <li>Mentor junior designers and drive design excellence</li>
        </ul>
        
        <h3>What We Offer</h3>
        <p>We believe in taking care of our team members and offer comprehensive benefits including competitive salary, equity participation, flexible work arrangements, and continuous learning opportunities.</p>
      `,
      requirements: [
        '5+ years of UI/UX design experience',
        'Proficiency in Figma and design systems',
        'Strong portfolio showcasing user-centered design',
        'Experience with user research and testing methodologies',
        'Excellent communication and collaboration skills',
        'Bachelor\'s degree in Design, HCI, or related field'
      ],
      niceToHave: [
        'Experience with design systems at scale',
        'Knowledge of front-end development (HTML/CSS)',
        'Experience in B2B SaaS products',
        'Familiarity with analytics and A/B testing'
      ],
      benefits: [
        'Health, dental, and vision insurance',
        'Flexible remote work policy',
        '401(k) with company matching',
        'Unlimited PTO policy',
        '$2,000 annual learning budget',
        'Home office setup allowance',
        'Equity participation',
        'Quarterly team retreats'
      ],
      skills: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research', 'Design Systems', 'Wireframing'],
      companyDescription: 'TechFlow Inc. is a leading SaaS platform that helps businesses streamline their workflows and improve team collaboration.',
      applicationProcess: [
        'Submit your application with portfolio',
        'Initial screening call (30 minutes)',
        'Design challenge presentation',
        'Final interview with team',
        'Reference check and offer'
      ]
    }
  };

  const job = jobData[jobId as keyof typeof jobData] || jobData['job-1'];

  const relatedJobs = [
    {
      id: 'related-1',
      title: 'Product Designer',
      company: 'InnovateLabs',
      location: 'New York, NY',
      workType: 'Hybrid',
      salary: '$100,000 - $130,000',
      logo: 'https://images.unsplash.com/photo-1614790871804-fe037bdc1214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjByZW1vdGUlMjB3b3JrfGVufDF8fHx8MTc1ODI4NTY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'related-2',
      title: 'UX Researcher',
      company: 'DataCorp',
      location: 'Remote',
      workType: 'Remote',
      salary: '$95,000 - $125,000',
      logo: 'https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGRlc2lnbiUyMG9mZmljZXxlbnwxfHx8fDE3NTgyODU2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 'related-3',
      title: 'Design System Lead',
      company: 'ScaleTech',
      location: 'Seattle, WA',
      workType: 'On-site',
      salary: '$140,000 - $170,000',
      logo: 'https://images.unsplash.com/photo-1559523182-a284c3fb7cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcm9mZXNzaW9uYWwlMjBtZWV0aW5nfGVufDF8fHx8MTc1ODI4NTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast.success(isBookmarked ? 'Job removed from saved' : 'Job saved successfully');
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this job: ${job.title} at ${job.company}`;
    
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
        toast.success('Job link copied to clipboard');
        break;
    }
  };

  const handleApply = () => {
    window.open(job.linkedinUrl, '_blank');
    setHasApplied(true);
    toast.success('Redirecting to LinkedIn application...');
  };

  const getWorkTypeIcon = (workType: string) => {
    switch (workType.toLowerCase()) {
      case 'remote': return Home;
      case 'hybrid': return Laptop;
      case 'on-site': return Building;
      default: return Building;
    }
  };

  const getWorkTypeColor = (workType: string) => {
    switch (workType.toLowerCase()) {
      case 'remote': return 'bg-green-100 text-green-700';
      case 'hybrid': return 'bg-blue-100 text-blue-700';
      case 'on-site': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <section className="py-6 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('jobs')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jobs
          </Button>
        </div>
      </section>

      {/* Job Header */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Job Info */}
            <div className="flex-1">
              <div className="flex items-start gap-6 mb-6">
                {/* Company Logo */}
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200">
                  <ImageWithFallback
                    src={job.logo}
                    alt={job.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Job Details */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-3xl">{job.title}</h1>
                    {job.featured && (
                      <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-6 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      <span className="text-lg">{job.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>{job.companySize}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <Badge className={`${getWorkTypeColor(job.workType)} font-medium`}>
                      {React.createElement(getWorkTypeIcon(job.workType), { className: "w-3 h-3 mr-1" })}
                      {job.workType}
                    </Badge>
                    <Badge variant="secondary">{job.type}</Badge>
                    <div className="flex items-center gap-1 text-green-600 font-semibold">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Posted {job.posted}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {job.applicants} applicants
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Sidebar */}
            <div className="lg:w-80">
              <Card className="border-0 shadow-lg sticky top-8">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-lg py-3"
                      onClick={handleApply}
                      disabled={hasApplied}
                    >
                      {hasApplied ? (
                        <>
                          <Check className="w-5 h-5 mr-2" />
                          Applied
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Apply on LinkedIn
                        </>
                      )}
                    </Button>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={handleBookmark}
                      >
                        <Heart className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current text-red-600' : ''}`} />
                        {isBookmarked ? 'Saved' : 'Save Job'}
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => handleShare('copy')}
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>

                    <Separator />

                    {/* Share Options */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">Share this job</h4>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleShare('linkedin')}
                          className="flex-1 text-blue-700 border-blue-200 hover:bg-blue-50"
                        >
                          <Linkedin className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleShare('twitter')}
                          className="flex-1 text-blue-500 border-blue-200 hover:bg-blue-50"
                        >
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleShare('facebook')}
                          className="flex-1 text-blue-600 border-blue-200 hover:bg-blue-50"
                        >
                          <Facebook className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleShare('copy')}
                          className="flex-1"
                        >
                          <Link2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    {/* Company Info */}
                    <div>
                      <h4 className="text-sm font-medium mb-3">About {job.company}</h4>
                      <p className="text-sm text-gray-600 mb-3">{job.companyDescription}</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => window.open(job.companyWebsite, '_blank')}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Company Website
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Job Content */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Description */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h2 className="text-2xl flex items-center gap-2">
                    <BookOpen className="w-6 h-6" />
                    Job Description
                  </h2>
                </CardHeader>
                <CardContent>
                  <div 
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{ __html: job.description }}
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.7',
                      color: '#374151'
                    }}
                  />
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h2 className="text-2xl flex items-center gap-2">
                    <Target className="w-6 h-6" />
                    Requirements
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg mb-3">Required Qualifications</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h4 className="text-lg mb-3">Nice to Have</h4>
                      <ul className="space-y-2">
                        {job.niceToHave.map((nice, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <Star className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{nice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h2 className="text-2xl flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    Benefits & Perks
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {job.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Application Process */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h2 className="text-2xl flex items-center gap-2">
                    <Briefcase className="w-6 h-6" />
                    Application Process
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {job.applicationProcess.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Apply */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg mb-4">Ready to Apply?</h3>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 mb-3"
                    onClick={handleApply}
                    disabled={hasApplied}
                  >
                    {hasApplied ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Applied on LinkedIn
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Apply Now
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-gray-600">
                    You'll be redirected to LinkedIn to complete your application
                  </p>
                </CardContent>
              </Card>

              {/* Job Stats */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <h3 className="text-lg">Job Stats</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Applications</span>
                    <span className="font-medium">{job.applicants}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Posted</span>
                    <span className="font-medium">{job.posted}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Job Type</span>
                    <span className="font-medium">{job.type}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Work Style</span>
                    <span className="font-medium">{job.workType}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Jobs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Similar <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Opportunities</span>
            </h2>
            <p className="text-lg text-gray-600">
              Other jobs you might be interested in
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedJobs.map((relatedJob) => {
              const WorkTypeIcon = getWorkTypeIcon(relatedJob.workType);
              
              return (
                <Card 
                  key={relatedJob.id} 
                  className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                  onClick={() => onNavigate('jobs', 'detail', relatedJob.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200">
                        <ImageWithFallback
                          src={relatedJob.logo}
                          alt={relatedJob.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium group-hover:text-green-600 transition-colors line-clamp-2 mb-1">
                          {relatedJob.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{relatedJob.company}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {relatedJob.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={`${getWorkTypeColor(relatedJob.workType)} text-xs`}>
                          <WorkTypeIcon className="w-3 h-3 mr-1" />
                          {relatedJob.workType}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-green-600">
                          <DollarSign className="w-3 h-3" />
                          {relatedJob.salary}
                        </div>
                      </div>
                    </div>

                    <Button variant="outline" size="sm" className="w-full group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors">
                      View Details
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => onNavigate('jobs')}
              className="px-8 py-3"
            >
              View All Jobs
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}