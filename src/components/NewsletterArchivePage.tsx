import React from 'react';
import { Mail, Calendar, Eye, Download, ArrowRight, Search, Filter, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NewsletterArchivePageProps {
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function NewsletterArchivePage({ onNavigate }: NewsletterArchivePageProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedYear, setSelectedYear] = React.useState('2024');
  const [sortBy, setSortBy] = React.useState('latest');

  // Mock newsletter data
  const newsletters = [
    {
      id: 'december-2024',
      title: 'AI Design Tools Roundup & Holiday Resources',
      description: 'Discover the best AI tools for designers, plus free holiday-themed resources to end the year strong.',
      date: '2024-12-15',
      views: 3420,
      featured: true,
      topics: ['AI Tools', 'Holiday Resources', 'Design Trends'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGljb25zJTIwZGVzaWdufGVufDF8fHx8MTc1ODI4NTY1OXww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 'november-2024',
      title: 'Black Friday Design Deals & New Icon Packs',
      description: 'The biggest design deals of the year plus 5 new free icon packs for your projects.',
      date: '2024-11-25',
      views: 4100,
      featured: false,
      topics: ['Black Friday', 'Icon Packs', 'Deals'],
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpY29uJTIwZGVzaWduJTIwZ3JpZHxlbnwxfHx8fDE3NTgyODU2NTl8MA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 'october-2024',
      title: 'Spooky Design Inspiration & Color Palettes',
      description: 'Halloween-themed designs, dark color palettes, and spooky typography for your seasonal projects.',
      date: '2024-10-31',
      views: 2850,
      featured: false,
      topics: ['Halloween', 'Color Palettes', 'Seasonal Design'],
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcnMlMjBwYWxldHRlfGVufDF8fHx8MTc1ODI4NTY1OXww&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 'september-2024',
      title: 'Back to School: Learning Resources & Tutorials',
      description: 'Essential design learning resources, tutorials, and courses to level up your skills this fall.',
      date: '2024-09-15',
      views: 3200,
      featured: true,
      topics: ['Education', 'Tutorials', 'Skill Development'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBkZXNpZ258ZW58MXx8fHwxNzU4Mjg1NjU5fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 'august-2024',
      title: 'Summer UI Trends & Mobile Design Patterns',
      description: 'The hottest UI trends this summer and essential mobile design patterns for better UX.',
      date: '2024-08-20',
      views: 3890,
      featured: false,
      topics: ['UI Trends', 'Mobile Design', 'UX Patterns'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBkZXNpZ258ZW58MXx8fHwxNzU4Mjg1NjU5fDA&ixlib=rb-4.1.0&q=80&w=400'
    },
    {
      id: 'july-2024',
      title: 'Design System Essentials & Component Libraries',
      description: 'Build better design systems with these essential resources and component library examples.',
      date: '2024-07-10',
      views: 4250,
      featured: true,
      topics: ['Design Systems', 'Components', 'UI Libraries'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW18ZW58MXx8fHwxNzU4Mjg1NjU5fDA&ixlib=rb-4.1.0&q=80&w=400'
    }
  ];

  const filteredNewsletters = newsletters.filter(newsletter => {
    const matchesSearch = newsletter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         newsletter.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         newsletter.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesYear = newsletter.date.startsWith(selectedYear);
    return matchesSearch && matchesYear;
  });

  const sortedNewsletters = [...filteredNewsletters].sort((a, b) => {
    switch (sortBy) {
      case 'views':
        return b.views - a.views;
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'latest':
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <Badge className="mb-4 bg-black text-white">
            <Mail className="w-4 h-4 mr-2" />
            Newsletter Archive
          </Badge>
          
          <h1 className="text-4xl lg:text-5xl mb-4">
            Design <span className="text-yellow-500">Newsletter</span> Archive
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our collection of design newsletters featuring the latest trends, 
            resources, and insights from the creative community.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-8">
          {/* Search */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search newsletters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3">
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="views">Most Viewed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Newsletter Grid */}
        <div className="space-y-6">
          {sortedNewsletters.map((newsletter) => (
            <Card key={newsletter.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-80 flex-shrink-0">
                  <div className="aspect-video md:aspect-square relative">
                    <ImageWithFallback
                      src={newsletter.image}
                      alt={newsletter.title}
                      className="w-full h-full object-cover"
                    />
                    {newsletter.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-black text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(newsletter.date)}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Eye className="w-3 h-3 mr-1" />
                          {newsletter.views.toLocaleString()} views
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl mb-3 hover:text-yellow-600 transition-colors cursor-pointer">
                        {newsletter.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {newsletter.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {newsletter.topics.map((topic, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      className="bg-black hover:bg-gray-800 text-white"
                      onClick={() => onNavigate('newsletter', 'view', newsletter.id)}
                    >
                      Read Newsletter
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {sortedNewsletters.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">No newsletters found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Subscription CTA */}
        <div className="mt-16 p-8 bg-black text-white rounded-lg text-center">
          <Mail className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
          <h2 className="text-2xl mb-4">Don't Miss Future Newsletters</h2>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Subscribe to receive our weekly design newsletter with the latest resources, 
            trends, and insights delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}