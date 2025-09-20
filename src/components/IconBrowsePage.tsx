import React from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Star, 
  Heart,
  Grid,
  List,
  ZoomIn,
  ZoomOut,
  Copy,
  Check,
  ArrowLeft,
  ChevronDown,
  Palette,
  Layers,
  Zap,
  Share2,
  BookmarkPlus,
  Settings,
  Package,
  Layout,
  Monitor,
  Smartphone,
  Tablet,
  Globe,
  Mail,
  Phone,
  Camera,
  Play,
  Music,
  Image,
  FileText,
  Folder,
  User,
  Calendar,
  Clock,
  MapPin,
  ShoppingCart,
  CreditCard,
  Home,
  Building,
  Car,
  Plane,
  Coffee,
  Pizza,
  Gift,
  ShieldCheck,
  Wifi,
  Battery,
  Volume2
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { toast } from 'sonner@2.0.3';

interface IconBrowsePageProps {
  category?: string;
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function IconBrowsePage({ category, onNavigate }: IconBrowsePageProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState(category || 'all');
  const [selectedStyle, setSelectedStyle] = React.useState('all');
  const [selectedFormat, setSelectedFormat] = React.useState('all');
  const [iconSize, setIconSize] = React.useState(32);
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = React.useState('popular');
  const [selectedIcons, setSelectedIcons] = React.useState<string[]>([]);
  const [copiedIcon, setCopiedIcon] = React.useState('');
  const [showFilters, setShowFilters] = React.useState(false);

  // Icon categories similar to Freepik
  const categories = [
    { id: 'all', name: 'All Icons', count: 2847 },
    { id: 'business', name: 'Business', count: 456 },
    { id: 'technology', name: 'Technology', count: 398 },
    { id: 'communication', name: 'Communication', count: 287 },
    { id: 'social', name: 'Social Media', count: 245 },
    { id: 'ecommerce', name: 'E-commerce', count: 234 },
    { id: 'travel', name: 'Travel', count: 189 },
    { id: 'education', name: 'Education', count: 167 },
    { id: 'health', name: 'Health & Medical', count: 145 },
    { id: 'food', name: 'Food & Drink', count: 134 },
    { id: 'entertainment', name: 'Entertainment', count: 123 },
    { id: 'weather', name: 'Weather', count: 98 },
    { id: 'sports', name: 'Sports', count: 87 },
    { id: 'transport', name: 'Transport', count: 76 }
  ];

  const styles = [
    { id: 'all', name: 'All Styles' },
    { id: 'outline', name: 'Outline' },
    { id: 'filled', name: 'Filled' },
    { id: 'duotone', name: 'Duotone' },
    { id: 'gradient', name: 'Gradient' }
  ];

  const formats = [
    { id: 'all', name: 'All Formats' },
    { id: 'svg', name: 'SVG' },
    { id: 'png', name: 'PNG' },
    { id: 'pdf', name: 'PDF' },
    { id: 'eps', name: 'EPS' }
  ];

  // Mock icon data - expanded collection
  const mockIcons = [
    // Business Icons
    { id: 'briefcase', name: 'Briefcase', category: 'business', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>', downloads: 1247, premium: false },
    { id: 'chart-bar', name: 'Chart Bar', category: 'business', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>', downloads: 987, premium: false },
    { id: 'target', name: 'Target', category: 'business', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>', downloads: 876, premium: false },
    { id: 'handshake', name: 'Handshake', category: 'business', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>', downloads: 654, premium: true },

    // Technology Icons
    { id: 'laptop', name: 'Laptop', category: 'technology', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>', downloads: 1456, premium: false },
    { id: 'smartphone', name: 'Smartphone', category: 'technology', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>', downloads: 1323, premium: false },
    { id: 'wifi', name: 'Wifi', category: 'technology', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/></svg>', downloads: 1098, premium: false },
    { id: 'database', name: 'Database', category: 'technology', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></svg>', downloads: 789, premium: false },

    // Communication Icons
    { id: 'mail', name: 'Mail', category: 'communication', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>', downloads: 1678, premium: false },
    { id: 'phone', name: 'Phone', category: 'communication', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>', downloads: 1543, premium: false },
    { id: 'message-circle', name: 'Message Circle', category: 'communication', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>', downloads: 1234, premium: false },

    // Social Media Icons  
    { id: 'share', name: 'Share', category: 'social', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16,6 12,2 8,6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>', downloads: 1876, premium: false },
    { id: 'heart', name: 'Heart', category: 'social', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>', downloads: 2134, premium: false },
    { id: 'thumbs-up', name: 'Thumbs Up', category: 'social', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h3.73a2 2 0 0 1 1.92 2.56z"/></svg>', downloads: 1432, premium: false },

    // E-commerce Icons
    { id: 'shopping-cart', name: 'Shopping Cart', category: 'ecommerce', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>', downloads: 1789, premium: false },
    { id: 'credit-card', name: 'Credit Card', category: 'ecommerce', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>', downloads: 1345, premium: false },
    { id: 'shopping-bag', name: 'Shopping Bag', category: 'ecommerce', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>', downloads: 987, premium: false },

    // Travel Icons
    { id: 'plane', name: 'Plane', category: 'travel', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>', downloads: 1234, premium: false },
    { id: 'map-pin', name: 'Map Pin', category: 'travel', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>', downloads: 1567, premium: false },
    { id: 'compass', name: 'Compass', category: 'travel', style: 'outline', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88"/></svg>', downloads: 756, premium: false }
  ];

  const filteredIcons = mockIcons.filter(icon => {
    const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         icon.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || icon.category === selectedCategory;
    const matchesStyle = selectedStyle === 'all' || icon.style === selectedStyle;
    return matchesSearch && matchesCategory && matchesStyle;
  });

  const sortedIcons = [...filteredIcons].sort((a, b) => {
    switch (sortBy) {
      case 'downloads':
        return b.downloads - a.downloads;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'newest':
        return Math.random() - 0.5; // Mock newest
      case 'popular':
      default:
        return b.downloads - a.downloads;
    }
  });

  const handleIconSelect = (iconId: string) => {
    setSelectedIcons(prev => 
      prev.includes(iconId) 
        ? prev.filter(id => id !== iconId)
        : [...prev, iconId]
    );
  };

  const handleCopySVG = (icon: any) => {
    navigator.clipboard.writeText(icon.svg);
    setCopiedIcon(icon.id);
    toast.success(`Copied ${icon.name} SVG to clipboard!`);
    setTimeout(() => setCopiedIcon(''), 2000);
  };

  const handleDownloadIcon = (icon: any) => {
    if (icon.premium) {
      toast.info("This is a premium icon. Sign up for Pro access!");
    } else {
      toast.success(`Downloading ${icon.name}...`);
    }
  };

  const handleDownloadSelected = () => {
    if (selectedIcons.length === 0) {
      toast.error('Please select icons to download');
      return;
    }
    toast.success(`Downloading ${selectedIcons.length} icons...`);
  };

  const IconCard = ({ icon }: { icon: any }) => (
    <Card 
      className={`group cursor-pointer transition-all duration-200 hover:shadow-lg ${
        selectedIcons.includes(icon.id) ? 'ring-2 ring-yellow-500' : ''
      }`}
      onClick={() => handleIconSelect(icon.id)}
    >
      <CardContent className="p-4">
        <div className="flex flex-col items-center space-y-3">
          {/* Icon Preview */}
          <div 
            className="flex items-center justify-center bg-gray-50 rounded-lg transition-colors group-hover:bg-gray-100 relative"
            style={{ 
              width: iconSize + 32, 
              height: iconSize + 32 
            }}
          >
            <div 
              className="text-gray-700"
              style={{ width: iconSize, height: iconSize }}
              dangerouslySetInnerHTML={{ __html: icon.svg }}
            />
            
            {/* Premium Badge */}
            {icon.premium && (
              <div className="absolute -top-1 -right-1">
                <Badge className="bg-yellow-500 text-black text-xs px-1">
                  PRO
                </Badge>
              </div>
            )}
          </div>
          
          {/* Icon Info */}
          <div className="text-center w-full">
            <h4 className="text-sm font-medium truncate">{icon.name}</h4>
            <p className="text-xs text-gray-500">{icon.downloads.toLocaleString()} downloads</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="sm"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                handleCopySVG(icon);
              }}
              className="w-8 h-8 p-0"
            >
              {copiedIcon === icon.id ? (
                <Check className="w-3 h-3 text-green-600" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                handleDownloadIcon(icon);
              }}
              className="w-8 h-8 p-0"
            >
              <Download className="w-3 h-3" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={(e) => {
                e.stopPropagation();
                // Add to favorites
              }}
              className="w-8 h-8 p-0"
            >
              <Heart className="w-3 h-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={() => onNavigate('resources')}
                className="hover:bg-gray-100"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Resources
              </Button>
              <div>
                <h1 className="text-2xl">Browse Icons</h1>
                <p className="text-gray-600 text-sm">{sortedIcons.length} icons available</p>
              </div>
            </div>
            
            {/* Selected Icons Actions */}
            {selectedIcons.length > 0 && (
              <div className="flex items-center gap-3">
                <Badge className="bg-yellow-500 text-black">
                  {selectedIcons.length} selected
                </Badge>
                <Button 
                  onClick={handleDownloadSelected}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Selected
                </Button>
              </div>
            )}
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search icons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex gap-2 items-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Style" />
                </SelectTrigger>
                <SelectContent>
                  {styles.map(style => (
                    <SelectItem key={style.id} value={style.id}>
                      {style.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Popular</SelectItem>
                  <SelectItem value="downloads">Downloads</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>

              {/* View Controls */}
              <div className="flex items-center gap-2 border border-gray-300 rounded-lg p-1">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIconSize(Math.max(16, iconSize - 8))}
                  disabled={iconSize <= 16}
                  className="w-8 h-8 p-0"
                >
                  <ZoomOut className="w-3 h-3" />
                </Button>
                <span className="text-xs w-8 text-center">{iconSize}px</span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIconSize(Math.min(64, iconSize + 8))}
                  disabled={iconSize >= 64}
                  className="w-8 h-8 p-0"
                >
                  <ZoomIn className="w-3 h-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Category Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 10).map((category) => (
              <Button
                key={category.id}
                size="sm"
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-black text-white" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {sortedIcons.map((icon) => (
            <IconCard key={icon.id} icon={icon} />
          ))}
        </div>

        {/* Empty State */}
        {sortedIcons.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">No icons found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Load More */}
        {sortedIcons.length > 0 && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => toast.info("Loading more icons...")}
            >
              Load More Icons
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}