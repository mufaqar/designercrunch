import React from 'react';
import { 
  Download, 
  Copy, 
  Check, 
  Search, 
  Grid,
  List,
  ZoomIn,
  ZoomOut,
  Palette,
  Code,
  Heart,
  Share2,
  Filter,
  Package
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';

interface SVGIconViewerProps {
  packId: string;
  packTitle: string;
  onBack: () => void;
}

export function SVGIconViewer({ packId, packTitle, onBack }: SVGIconViewerProps) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [selectedIcons, setSelectedIcons] = React.useState<string[]>([]);
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [iconSize, setIconSize] = React.useState(32);
  const [copiedIcon, setCopiedIcon] = React.useState('');

  // Mock icon data - in a real app, this would come from an API
  const iconCategories = [
    'all', 'navigation', 'social', 'ecommerce', 'communication', 'files', 'media', 'business', 'ui'
  ];

  const mockIcons = [
    // Navigation
    { id: 'arrow-left', name: 'Arrow Left', category: 'navigation', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>' },
    { id: 'arrow-right', name: 'Arrow Right', category: 'navigation', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>' },
    { id: 'home', name: 'Home', category: 'navigation', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>' },
    { id: 'menu', name: 'Menu', category: 'navigation', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/></svg>' },
    { id: 'search', name: 'Search', category: 'navigation', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>' },
    
    // Social
    { id: 'heart', name: 'Heart', category: 'social', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>' },
    { id: 'share', name: 'Share', category: 'social', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16,6 12,2 8,6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>' },
    { id: 'message', name: 'Message', category: 'social', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' },
    
    // E-commerce
    { id: 'shopping-cart', name: 'Shopping Cart', category: 'ecommerce', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>' },
    { id: 'credit-card', name: 'Credit Card', category: 'ecommerce', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>' },
    { id: 'tag', name: 'Tag', category: 'ecommerce', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.814 8.814a2 2 0 0 0 2.828 0l6.586-6.586a2 2 0 0 0 0-2.828L12.586 2.586Z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>' },
    
    // Communication
    { id: 'mail', name: 'Mail', category: 'communication', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-10 5L2 7"/></svg>' },
    { id: 'phone', name: 'Phone', category: 'communication', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' },
    
    // Files
    { id: 'folder', name: 'Folder', category: 'files', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>' },
    { id: 'file', name: 'File', category: 'files', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>' },
    { id: 'download', name: 'Download', category: 'files', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>' },
    
    // Media
    { id: 'play', name: 'Play', category: 'media', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="6,3 20,12 6,21"/></svg>' },
    { id: 'pause', name: 'Pause', category: 'media', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/></svg>' },
    { id: 'camera', name: 'Camera', category: 'media', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m14.5 4-1.84 3H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7.66L14.5 4Z"/><circle cx="12" cy="13" r="3"/></svg>' },
    
    // Business
    { id: 'briefcase', name: 'Briefcase', category: 'business', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>' },
    { id: 'chart', name: 'Chart', category: 'business', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>' },
    
    // UI
    { id: 'settings', name: 'Settings', category: 'ui', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/></svg>' },
    { id: 'bell', name: 'Bell', category: 'ui', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>' }
  ];

  const filteredIcons = mockIcons.filter(icon => {
    const matchesSearch = icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         icon.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || icon.category === selectedCategory;
    return matchesSearch && matchesCategory;
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

  const handleDownloadIcon = (icon: any, format: string) => {
    toast.success(`Downloading ${icon.name} as ${format}...`);
  };

  const handleDownloadSelected = (format: string) => {
    if (selectedIcons.length === 0) {
      toast.error('Please select icons to download');
      return;
    }
    toast.success(`Downloading ${selectedIcons.length} icons as ${format}...`);
  };

  const IconDisplay = ({ icon }: { icon: any }) => (
    <div 
      className={`relative group cursor-pointer transition-all duration-200 ${
        selectedIcons.includes(icon.id) ? 'ring-2 ring-yellow-500' : ''
      }`}
      onClick={() => handleIconSelect(icon.id)}
    >
      <Card className="hover:shadow-lg transition-shadow">
        <CardContent className="p-4">
          <div className="flex flex-col items-center space-y-3">
            {/* Icon Preview */}
            <div 
              className="flex items-center justify-center bg-gray-50 rounded-lg transition-colors group-hover:bg-gray-100"
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
            </div>
            
            {/* Icon Info */}
            <div className="text-center w-full">
              <h4 className="text-sm font-medium truncate">{icon.name}</h4>
              <Badge variant="outline" className="text-xs mt-1">
                {icon.category}
              </Badge>
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
                  handleDownloadIcon(icon, 'SVG');
                }}
                className="w-8 h-8 p-0"
              >
                <Download className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Button 
                variant="ghost" 
                onClick={onBack}
                className="mb-2"
              >
                ← Back to {packTitle}
              </Button>
              <h1 className="text-2xl font-medium">Icon Viewer</h1>
              <p className="text-gray-600">{filteredIcons.length} icons available</p>
            </div>
            
            {/* Selected Icons Actions */}
            {selectedIcons.length > 0 && (
              <div className="flex items-center gap-3">
                <Badge className="bg-yellow-500 text-black">
                  {selectedIcons.length} selected
                </Badge>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleDownloadSelected('SVG')}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    SVG
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleDownloadSelected('PNG')}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    PNG
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-black text-white"
                    onClick={() => handleDownloadSelected('All')}
                  >
                    <Package className="w-4 h-4 mr-1" />
                    Download All
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search and Filter */}
            <div className="flex gap-3 flex-1 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search icons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {iconCategories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-3">
              {/* Icon Size */}
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIconSize(Math.max(16, iconSize - 8))}
                  disabled={iconSize <= 16}
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <span className="text-sm w-12 text-center">{iconSize}px</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIconSize(Math.min(64, iconSize + 8))}
                  disabled={iconSize >= 64}
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
              </div>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <Button
                  size="sm"
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  onClick={() => setViewMode('grid')}
                  className="rounded-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  onClick={() => setViewMode('list')}
                  className="rounded-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Icons Grid */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4' 
            : 'space-y-2'
        }`}>
          {filteredIcons.map((icon) => (
            viewMode === 'grid' ? (
              <IconDisplay key={icon.id} icon={icon} />
            ) : (
              <Card key={icon.id} className={`transition-all duration-200 ${
                selectedIcons.includes(icon.id) ? 'ring-2 ring-yellow-500' : ''
              }`}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center flex-shrink-0 cursor-pointer"
                      onClick={() => handleIconSelect(icon.id)}
                    >
                      <div 
                        className="w-6 h-6 text-gray-700"
                        dangerouslySetInnerHTML={{ __html: icon.svg }}
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium">{icon.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {icon.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCopySVG(icon)}
                      >
                        {copiedIcon === icon.id ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDownloadIcon(icon, 'SVG')}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          ))}
        </div>

        {/* Empty State */}
        {filteredIcons.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium mb-2">No icons found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}