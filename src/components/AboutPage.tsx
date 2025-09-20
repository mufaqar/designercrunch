import React from 'react';
import { 
  Users, 
  Target, 
  Heart, 
  Award,
  Lightbulb,
  Globe,
  TrendingUp,
  Star,
  Coffee,
  Code,
  Palette,
  Camera,
  CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { AboutSocialIcons } from './SocialIcons';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const stats = [
    { label: 'Design Resources', value: '10,000+', icon: Palette },
    { label: 'Active Users', value: '500K+', icon: Users },
    { label: 'Articles Published', value: '2,500+', icon: Code },
    { label: 'Countries Reached', value: '150+', icon: Globe }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in building a supportive community where designers can learn, share, and grow together.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly explore new tools, techniques, and technologies to stay ahead of design trends.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Star,
      title: 'Quality Content',
      description: 'Every resource, article, and tool we share is carefully curated to provide maximum value to our community.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'We make design knowledge and resources accessible to everyone, regardless of their background or location.',
      color: 'from-green-500 to-teal-500'
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      bio: 'Former Google designer with 10+ years experience in product design and team leadership.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612e732?w=300',
      skills: ['Product Design', 'Leadership', 'Strategy']
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Content',
      bio: 'Award-winning writer and design educator, previously at Dribbble and Adobe.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      skills: ['Content Strategy', 'Education', 'Community']
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about creating tools that empower designers.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300',
      skills: ['React', 'Node.js', 'UI Development']
    },
    {
      name: 'Alex Thompson',
      role: 'Design Systems Lead',
      bio: 'Design systems expert with experience at Shopify and helping teams scale design.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      skills: ['Design Systems', 'Figma', 'Documentation']
    }
  ];

  const milestones = [
    { year: '2020', event: 'DesignerCrunch founded with a simple blog' },
    { year: '2021', event: 'Launched our first design resource library' },
    { year: '2022', event: 'Reached 100K monthly active users' },
    { year: '2023', event: 'Introduced AI-powered design tools directory' },
    { year: '2024', event: 'Expanded to include job board and services' },
    { year: '2025', event: 'Serving 500K+ designers worldwide' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            
            <h1 className="text-4xl lg:text-7xl mb-6">
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">DesignerCrunch</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Our mission is making design inspiration and free resources accessible to everyone in the creative community. 
              We believe great design shouldn't be limited by budget or background.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                DesignerCrunch was born from a simple observation: amazing design resources and knowledge were scattered 
                across the internet, often behind paywalls or hidden in obscure corners of the web.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We set out to change that by creating a centralized hub where designers of all levels could discover, 
                learn, and access the tools and inspiration they need to create exceptional work.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Free, high-quality design resources</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Educational content and tutorials</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Community-driven platform</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Career opportunities and growth</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTgyODU2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Design team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and every decision we make at DesignerCrunch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're a passionate group of designers, developers, and content creators dedicated to empowering the design community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg mb-2">{member.name}</h3>
                  <p className="text-blue-600 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our mission to democratize design
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-medium z-10">
                    {milestone.year}
                  </div>
                  <Card className="flex-1 border-0 shadow-lg">
                    <CardContent className="p-6">
                      <p className="text-gray-700">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Social */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => onNavigate('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Get in Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('services')}
            >
              Our Services
            </Button>
          </div>

          {/* Social Media Section */}
          <div className="pt-8 border-t">
            <AboutSocialIcons />
          </div>
        </div>
      </section>
    </div>
  );
}