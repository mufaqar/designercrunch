import React from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign,
  Building,
  Users,
  Calendar,
  ChevronDown,
  X,
  Bookmark,
  Share2,
  ExternalLink,
  Star,
  TrendingUp,
  Briefcase,
  Home,
  Laptop,
  ChevronRight,
  Globe,
  Heart,
  Eye
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

interface JobsPageProps {
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function JobsPage({ onNavigate }: JobsPageProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCountry, setSelectedCountry] = React.useState('');
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
  const [selectedJobTypes, setSelectedJobTypes] = React.useState<string[]>([]);
  const [salaryRange, setSalaryRange] = React.useState([0, 200000]);
  const [sortBy, setSortBy] = React.useState('recent');
  const [currentPage, setCurrentPage] = React.useState(1);
  const [savedJobs, setSavedJobs] = React.useState<string[]>([]);

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 
    'Netherlands', 'Australia', 'Singapore', 'Japan', 'Remote'
  ];

  const categories = [
    { id: 'ui-ux', name: 'UI/UX Design', count: 245 },
    { id: 'graphic', name: 'Graphic Design', count: 189 },
    { id: 'web-dev', name: 'Web Development', count: 156 },
    { id: 'mobile', name: 'Mobile Design', count: 134 },
    { id: 'product', name: 'Product Design', count: 198 },
    { id: 'branding', name: 'Branding', count: 87 },
    { id: 'ai-ml', name: 'AI/ML Design', count: 76 },
    { id: 'motion', name: 'Motion Graphics', count: 65 }
  ];

  const jobTypes = [
    { id: 'remote', name: 'Remote', icon: Home },
    { id: 'hybrid', name: 'Hybrid', icon: Laptop },
    { id: 'onsite', name: 'On-site', icon: Building }
  ];

  const mockJobs = [
    {
      id: 'job-1',
      title: 'Senior UI/UX Designer',
      company: 'TechFlow Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      workType: 'Remote',
      salary: '$120,000 - $150,000',
      posted: '2 days ago',
      description: 'We\'re looking for a Senior UI/UX Designer to join our growing product team. You\'ll be responsible for designing user-centered digital experiences...',
      tags: ['UI/UX', 'Figma', 'Prototyping', 'User Research'],
      logo: 'https://images.unsplash.com/photo-1520865649274-dfc80824ab25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nbyUyMHRlY2glMjBzdGFydHVwfGVufDF8fHx8MTc1ODIzOTM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
      applicants: 45,
      requirements: ['5+ years UI/UX experience', 'Figma proficiency', 'Portfolio required'],
      benefits: ['Health Insurance', 'Remote Work', '401k Match', 'Flexible PTO']
    },
    {
      id: 'job-2',
      title: 'Product Designer',
      company: 'InnovateLabs',
      location: 'New York, NY',
      type: 'Full-time',
      workType: 'Hybrid',
      salary: '$100,000 - $130,000',
      posted: '1 day ago',
      description: 'Join our product team to create intuitive and delightful user experiences for our B2B SaaS platform...',
      tags: ['Product Design', 'SaaS', 'B2B', 'Design Systems'],
      logo: 'https://images.unsplash.com/photo-1614790871804-fe037bdc1214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB3b3Jrc3BhY2UlMjByZW1vdGUlMjB3b3JrfGVufDF8fHx8MTc1ODI4NTY1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
      applicants: 28,
      requirements: ['3+ years product design', 'Design systems experience', 'Agile workflow'],
      benefits: ['Health Insurance', 'Hybrid Work', 'Learning Budget', 'Stock Options']
    },
    {
      id: 'job-3',
      title: 'Senior Graphic Designer',
      company: 'CreativeCorp',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      workType: 'On-site',
      salary: '$85,000 - $110,000',
      posted: '3 days ago',
      description: 'We\'re seeking a creative and experienced Graphic Designer to lead our brand design initiatives...',
      tags: ['Graphic Design', 'Branding', 'Print Design', 'Adobe Creative'],
      logo: 'https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGRlc2lnbiUyMG9mZmljZXxlbnwxfHx8fDE3NTgyODU2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: false,
      applicants: 67,
      requirements: ['4+ years graphic design', 'Adobe Creative Suite', 'Brand design portfolio'],
      benefits: ['Health Insurance', 'Dental', 'PTO', 'Creative Environment']
    },
    {
      id: 'job-4',
      title: 'AI/UX Designer',
      company: 'FutureAI',
      location: 'Austin, TX',
      type: 'Full-time',
      workType: 'Remote',
      salary: '$130,000 - $160,000',
      posted: '5 days ago',
      description: 'Join our AI team to design intuitive interfaces for machine learning tools and AI-powered applications...',
      tags: ['AI/UX', 'Machine Learning', 'Data Visualization', 'Innovation'],
      logo: 'https://images.unsplash.com/photo-1559523182-a284c3fb7cff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb2IlMjBpbnRlcnZpZXclMjBwcm9mZXNzaW9uYWwlMjBtZWV0aW5nfGVufDF8fHx8MTc1ODI4NTY2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      featured: true,
      applicants: 23,
      requirements: ['AI/ML design experience', 'Data visualization', 'Research skills'],
      benefits: ['Competitive Salary', 'Equity', 'Remote Work', 'Conference Budget']
    }
  ];

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    }
  };

  const handleJobTypeChange = (jobTypeId: string, checked: boolean) => {
    if (checked) {
      setSelectedJobTypes([...selectedJobTypes, jobTypeId]);
    } else {
      setSelectedJobTypes(selectedJobTypes.filter(id => id !== jobTypeId));
    }
  };

  const handleSaveJob = (jobId: string) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(savedJobs.filter(id => id !== jobId));
      toast.success('Job removed from saved');
    } else {
      setSavedJobs([...savedJobs, jobId]);
      toast.success('Job saved successfully');
    }
  };

  const handleShareJob = (job: any) => {
    const url = `${window.location.origin}/jobs/${job.id}`;
    navigator.clipboard.writeText(url);
    toast.success('Job link copied to clipboard');
  };

  const clearAllFilters = () => {
    setSelectedCountry('');
    setSelectedCategories([]);
    setSelectedJobTypes([]);
    setSalaryRange([0, 200000]);
    setSearchQuery('');
  };

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategories = selectedCategories.length === 0 || 
                             selectedCategories.some(cat => job.tags.some(tag => tag.toLowerCase().includes(cat)));
    
    const matchesJobTypes = selectedJobTypes.length === 0 ||
                           selectedJobTypes.some(type => job.workType.toLowerCase().includes(type));
    
    return matchesSearch && matchesCategories && matchesJobTypes;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case 'salary':
        const aSalary = parseInt(a.salary.replace(/[^0-9]/g, ''));
        const bSalary = parseInt(b.salary.replace(/[^0-9]/g, ''));
        return bSalary - aSalary;
      case 'popular':
        return b.applicants - a.applicants;
      case 'recent':
      default:
        return new Date(b.posted).getTime() - new Date(a.posted).getTime();
    }
  });

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <Badge className="mb-6 bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700">
              <Briefcase className="w-4 h-4 mr-2" />
              Curated from LinkedIn
            </Badge>
            
            <h1 className="text-4xl lg:text-7xl mb-6">
              Find Your Next <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Design Opportunity</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Curated design & tech jobs from LinkedIn, updated daily. 
              Discover remote, hybrid, and on-site opportunities from top companies.
            </p>
          </div>
          
          {/* Main Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-green-500 transition-colors" />
              <Input
                type="text"
                placeholder="Search job title, company, or keyword…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-16 pr-6 py-4 text-lg border-2 border-gray-200 focus:border-green-500 rounded-2xl shadow-lg group-focus-within:shadow-xl transition-all duration-300"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">850+</div>
              <div className="text-gray-600">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">120+</div>
              <div className="text-gray-600">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">65%</div>
              <div className="text-gray-600">Remote Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">Daily</div>
              <div className="text-gray-600">Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <div className="lg:w-80 space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Filters</h3>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={clearAllFilters}
                      className="text-gray-500 hover:text-red-600"
                    >
                      <X className="w-4 h-4 mr-1" />
                      Clear All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Country Filter */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Location</label>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              {country}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Category Filter */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Categories</label>
                    <div className="space-y-3 max-h-48 overflow-y-auto">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-3">
                          <Checkbox
                            id={category.id}
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={(checked) => handleCategoryChange(category.id, checked as boolean)}
                          />
                          <label htmlFor={category.id} className="text-sm flex-1 cursor-pointer">
                            {category.name}
                            <span className="text-gray-500 ml-1">({category.count})</span>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Job Type Filter */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">Work Type</label>
                    <div className="space-y-3">
                      {jobTypes.map((jobType) => {
                        const Icon = jobType.icon;
                        return (
                          <div key={jobType.id} className="flex items-center space-x-3">
                            <Checkbox
                              id={jobType.id}
                              checked={selectedJobTypes.includes(jobType.id)}
                              onCheckedChange={(checked) => handleJobTypeChange(jobType.id, checked as boolean)}
                            />
                            <label htmlFor={jobType.id} className="text-sm flex-1 cursor-pointer flex items-center gap-2">
                              <Icon className="w-4 h-4" />
                              {jobType.name}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Salary Range */}
                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Salary Range: ${salaryRange[0].toLocaleString()} - ${salaryRange[1].toLocaleString()}
                    </label>
                    <Slider
                      value={salaryRange}
                      onValueChange={setSalaryRange}
                      max={200000}
                      min={0}
                      step={10000}
                      className="w-full"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Jobs Listing */}
            <div className="flex-1">
              {/* Sort and Results Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <div>
                  <h2 className="text-2xl mb-1">Design Jobs</h2>
                  <p className="text-gray-600">
                    {sortedJobs.length} jobs found
                    {searchQuery && ` for "${searchQuery}"`}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <Button
                    variant={sortBy === 'recent' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy('recent')}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Recent
                  </Button>
                  <Button
                    variant={sortBy === 'popular' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy('popular')}
                  >
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Popular
                  </Button>
                  <Button
                    variant={sortBy === 'salary' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSortBy('salary')}
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    Salary
                  </Button>
                </div>
              </div>

              {/* Job Cards */}
              <div className="space-y-6">
                {sortedJobs.map((job) => {
                  const WorkTypeIcon = getWorkTypeIcon(job.workType);
                  const isSaved = savedJobs.includes(job.id);
                  
                  return (
                    <Card 
                      key={job.id} 
                      className={`group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white ${
                        job.featured ? 'ring-2 ring-green-200' : ''
                      }`}
                      onClick={() => onNavigate('jobs', 'detail', job.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          {/* Company Logo */}
                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200">
                            <ImageWithFallback
                              src={job.logo}
                              alt={job.company}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Job Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="text-lg font-semibold group-hover:text-green-600 transition-colors">
                                    {job.title}
                                  </h3>
                                  {job.featured && (
                                    <Badge className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-xs">
                                      <Star className="w-3 h-3 mr-1" />
                                      Featured
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center gap-4 text-gray-600 text-sm mb-2">
                                  <div className="flex items-center gap-1">
                                    <Building className="w-4 h-4" />
                                    {job.company}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {job.location}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {job.posted}
                                  </div>
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleSaveJob(job.id);
                                  }}
                                  className={`p-2 ${isSaved ? 'text-red-600 hover:text-red-700' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                  <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleShareJob(job);
                                  }}
                                  className="p-2 text-gray-500 hover:text-gray-700"
                                >
                                  <Share2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>

                            {/* Job Tags */}
                            <div className="flex items-center gap-3 mb-3">
                              <Badge className={`${getWorkTypeColor(job.workType)} font-medium`}>
                                <WorkTypeIcon className="w-3 h-3 mr-1" />
                                {job.workType}
                              </Badge>
                              <Badge variant="secondary">{job.type}</Badge>
                              <div className="flex items-center gap-1 text-sm text-green-600 font-medium">
                                <DollarSign className="w-4 h-4" />
                                {job.salary}
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                              {job.description}
                            </p>

                            {/* Skills Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {job.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            {/* Bottom Row */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <div className="flex items-center gap-1">
                                  <Users className="w-3 h-3" />
                                  {job.applicants} applicants
                                </div>
                                <div className="flex items-center gap-1">
                                  <Eye className="w-3 h-3" />
                                  LinkedIn sourced
                                </div>
                              </div>
                              
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600 transition-colors"
                              >
                                View Details
                                <ChevronRight className="w-4 h-4 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-3 hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors"
                >
                  Load More Jobs
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}