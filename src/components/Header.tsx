import React from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, sub?: string, id?: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');
  const searchRef = React.useRef<HTMLDivElement>(null);

  const menuItems = [
    { label: 'Home', value: 'home' },
    { label: 'AI Tools', value: 'ai-tools' },
    { label: 'Resources', value: 'resources' },
    { label: 'Blogs', value: 'blogs' },
    { label: 'Color Palettes', value: 'palettes' },
    { label: 'Jobs', value: 'jobs' },
    { label: 'Services', value: 'services' },
    { label: 'Contact', value: 'contact' }
  ];

  // Close search dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // You can implement search logic here
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
              </div>
              <h1 className="text-xl font-medium text-black">DesignerCrunch</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className={`relative py-2 transition-all duration-200 group ${
                  currentPage === item.value 
                    ? 'text-yellow-600' 
                    : 'text-gray-900 hover:text-yellow-600'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-600 transition-all duration-200 ${
                  currentPage === item.value 
                    ? 'scale-x-100' 
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative" ref={searchRef}>
            {!isSearchOpen ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Search className="w-5 h-5 text-gray-600" />
              </Button>
            ) : (
              <div className="absolute right-0 top-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 w-80 z-50">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Search blogs, vectors, tools…"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="pl-10 pr-4 py-2 border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                      autoFocus
                    />
                  </div>
                  <Button 
                    size="sm" 
                    onClick={handleSearch}
                    className="bg-black hover:bg-gray-800 text-white px-4"
                  >
                    Search
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Search Icon */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {isSearchOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-16 bg-white border-b border-gray-200 shadow-lg z-40">
            <div className="p-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search blogs, vectors, tools…"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pl-10 pr-4 py-2 border-gray-300 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                    autoFocus
                  />
                </div>
                <Button 
                  size="sm" 
                  onClick={handleSearch}
                  className="bg-black hover:bg-gray-800 text-white px-4"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    onNavigate(item.value);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-2 px-4 transition-colors hover:text-yellow-600 hover:bg-yellow-50 rounded-lg ${
                    currentPage === item.value 
                      ? 'text-yellow-600 bg-yellow-50' 
                      : 'text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}