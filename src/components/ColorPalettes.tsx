import React from 'react';
import { Copy, Heart, Download, ArrowRight, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { toast } from 'sonner@2.0.3';

interface ColorPalettesProps {
  onNavigate: (page: string) => void;
}

export function ColorPalettes({ onNavigate }: ColorPalettesProps) {
  const [copiedColor, setCopiedColor] = React.useState<string | null>(null);

  const colorPalettes = [
    {
      id: 1,
      name: "Ocean Breeze",
      category: "Modern",
      colors: ["#0066CC", "#4A90E2", "#7FB3D3", "#B8E6FF", "#E8F7FF"],
      downloads: "2.1K",
      likes: 156,
      featured: true
    },
    {
      id: 2,
      name: "Sunset Gradient",
      category: "Vibrant",
      colors: ["#FF6B6B", "#FF8E53", "#FF6B9D", "#FFB8E1", "#F7E7FF"],
      downloads: "1.8K",
      likes: 234
    },
    {
      id: 3,
      name: "Forest Calm",
      category: "Minimal",
      colors: ["#2D5A27", "#4A7C59", "#7A9471", "#B8C5A6", "#E8F0E3"],
      downloads: "1.5K",
      likes: 189
    },
    {
      id: 4,
      name: "Royal Purple",
      category: "Modern",
      colors: ["#6A0DAD", "#8A2BE2", "#9370DB", "#C8A2C8", "#E6E6FA"],
      downloads: "2.3K",
      likes: 298
    },
    {
      id: 5,
      name: "Autumn Leaves",
      category: "Vibrant",
      colors: ["#D2691E", "#CD853F", "#DEB887", "#F5DEB3", "#FFF8DC"],
      downloads: "1.2K",
      likes: 142
    },
    {
      id: 6,
      name: "Mint Fresh",
      category: "Pastel",
      colors: ["#00CED1", "#48D1CC", "#98FB98", "#C0FFC0", "#F0FFF0"],
      downloads: "1.9K",
      likes: 201
    },
    {
      id: 7,
      name: "Monochrome",
      category: "Minimal",
      colors: ["#000000", "#333333", "#666666", "#CCCCCC", "#FFFFFF"],
      downloads: "3.1K",
      likes: 387
    },
    {
      id: 8,
      name: "Cherry Blossom",
      category: "Pastel",
      colors: ["#FFB7C5", "#FFC0CB", "#FFD1DC", "#FFE4E1", "#FFF0F5"],
      downloads: "1.7K",
      likes: 223
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Modern': 'bg-blue-100 text-blue-700',
      'Vibrant': 'bg-orange-100 text-orange-700',
      'Minimal': 'bg-gray-100 text-gray-700',
      'Pastel': 'bg-pink-100 text-pink-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const copyToClipboard = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(color);
      toast.success(`Copied ${color} to clipboard!`);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      toast.error('Failed to copy color');
    }
  };

  const downloadPalette = (palette: any) => {
    toast.success(`Downloaded ${palette.name} palette!`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Color <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Palettes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover curated color combinations and palettes to inspire your next design project. Copy colors instantly or download complete palettes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Modern', 'Vibrant', 'Minimal', 'Pastel'].map((category) => (
            <Button
              key={category}
              variant={category === 'All' ? 'default' : 'outline'}
              className={`rounded-full ${
                category === 'All' 
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700' 
                  : 'hover:bg-gray-50'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Palettes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {colorPalettes.map((palette) => (
            <Card key={palette.id} className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white">
              <CardContent className="p-0">
                {/* Color Preview */}
                <div className="relative">
                  <div className="h-32 flex">
                    {palette.colors.map((color, index) => (
                      <div
                        key={index}
                        className="flex-1 cursor-pointer transition-all duration-200 hover:scale-105 hover:z-10 relative group/color"
                        style={{ backgroundColor: color }}
                        onClick={() => copyToClipboard(color)}
                      >
                        <div className="absolute inset-0 bg-black/0 group-hover/color:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                          <div className="opacity-0 group-hover/color:opacity-100 transition-opacity duration-200 bg-white/90 rounded px-2 py-1 text-xs font-medium">
                            {copiedColor === color ? (
                              <div className="flex items-center gap-1 text-green-600">
                                <Check className="w-3 h-3" />
                                Copied!
                              </div>
                            ) : (
                              <div className="flex items-center gap-1">
                                <Copy className="w-3 h-3" />
                                {color}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {palette.featured && (
                    <Badge className="absolute top-2 left-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white text-xs">
                      Featured
                    </Badge>
                  )}
                </div>

                {/* Palette Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className={getCategoryColor(palette.category)}>
                      {palette.category}
                    </Badge>
                    <Button size="sm" variant="ghost" className="w-8 h-8 p-0">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <h3 className="text-lg mb-2">{palette.name}</h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 mr-1" />
                      {palette.downloads}
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {palette.likes}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700"
                      onClick={() => downloadPalette(palette)}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="flex-shrink-0">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Popular Color Combinations */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl mb-6 text-center">Popular Color Combinations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Blue + Orange", colors: ["#0066CC", "#FF8C00"] },
              { name: "Purple + Gold", colors: ["#6A0DAD", "#FFD700"] },
              { name: "Green + Pink", colors: ["#32CD32", "#FF69B4"] },
              { name: "Red + Teal", colors: ["#DC143C", "#20B2AA"] }
            ].map((combo, index) => (
              <div key={index} className="text-center">
                <div className="flex h-16 rounded-lg overflow-hidden mb-2 shadow-sm">
                  {combo.colors.map((color, colorIndex) => (
                    <div
                      key={colorIndex}
                      className="flex-1 cursor-pointer"
                      style={{ backgroundColor: color }}
                      onClick={() => copyToClipboard(color)}
                    ></div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">{combo.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            onClick={() => onNavigate('palettes')}
            className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 px-8 py-3 rounded-xl"
          >
            Explore All Palettes
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}