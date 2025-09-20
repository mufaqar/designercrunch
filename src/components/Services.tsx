import React from 'react';
import { 
  Code, 
  Palette, 
  Monitor, 
  Smartphone, 
  ShoppingCart, 
  Star,
  Quote,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Youtube,
  Calendar,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
  ThumbsUp
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';

export function Services() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const services = [
    {
      icon: Palette,
      title: "Branding",
      description: "Complete brand identity design including logos, color schemes, typography, and brand guidelines that make your business memorable.",
      features: ["Logo Design", "Brand Guidelines", "Business Cards", "Letterheads"]
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging digital experiences for web and mobile applications.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"]
    },
    {
      icon: Code,
      title: "Affordable Website Design",
      description: "Professional, responsive websites that look great and perform excellently across all devices and browsers.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile Friendly"]
    },
    {
      icon: Smartphone,
      title: "React.js / Next.js Development",
      description: "Modern, fast, and scalable web applications built with the latest React technologies and best practices.",
      features: ["Modern Framework", "Server-side Rendering", "API Integration", "Performance Optimized"]
    },
    {
      icon: Code,
      title: "Custom WordPress Development",
      description: "Custom WordPress solutions including themes, plugins, and full website development tailored to your needs.",
      features: ["Custom Themes", "Plugin Development", "WooCommerce", "Maintenance"]
    },
    {
      icon: ShoppingCart,
      title: "eCommerce Development",
      description: "Full-featured online stores with secure payment processing, inventory management, and conversion optimization.",
      features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics"]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Design Creative UI for Antlere online survey tool",
      date: "January, 2017",
      categories: ["Branding", "UI", "Website"],
      image: "https://images.unsplash.com/photo-1678667720699-5c0fc04ac166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU4MjQ4MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 2,
      title: "Design and Develop Website for teddingtonlegal Law firm",
      date: "September, 2017",
      categories: ["Branding", "UI", "Website"],
      image: "https://images.unsplash.com/photo-1603985585179-3d71c35a537c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTgyNjkxMzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 3,
      title: "Lenzmark Hunt free deer hunting gps & tracker app",
      date: "January, 2017",
      categories: ["Branding", "UI", "Website"],
      image: "https://images.unsplash.com/photo-1658863025658-4a259cc68fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMHBvcnRmb2xpb3xlbnwxfHx8fDE3NTgyNzc2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      id: 4,
      title: "Design & Develop Online Store for vegetables & Fruits",
      date: "June, 2018",
      categories: ["Branding", "UI", "Website"],
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODIzMTMwOXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const testimonials = [
    {
      name: "Nicole Billett",
      text: "I use Mufaqar for my website and really enjoy working with him. He is responsive and efficient and works to a brief really well. Whenever we need to review, update or enhance our website Mufaqar is always our first choice.",
      rating: 5
    },
    {
      name: "Jonathan Croning",
      text: "Working with you it has been pleasure for me, I would love to work with you for a long time. Fast in Communication and Payment, Very Happy",
      rating: 5
    },
    {
      name: "Deanaryan",
      text: "Thank you so much! Big help, great job, everything is working now! Mufaqar really knows what to do, could explain in clear marked screenshots where I can help myself in future, and he did more than I had expected!",
      rating: 5
    }
  ];

  const stats = [
    { number: "150+", label: "Active strategic partnerships" },
    { number: "98%", label: "Clients willing to refer us" },
    { number: "500+", label: "Five-star reviews" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your enquiry! We'll contact you shortly.");
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-100">
            <CheckCircle className="w-4 h-4 mr-2" />
            On demand. Ready to start within few days.
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl mb-6">
            Tell us about your <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">needs</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get custom solutions, recommendations, and estimates. Confidentiality & same day response guaranteed!
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Nationally Top-Rated <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Smart Design. Quality Research. Forward-Thinking Strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl mb-2">{service.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">
              What We've <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">Created</span>
            </h2>
            <p className="text-lg text-gray-600">
              You'll Love To See Some Of Our Best Projects. Take A Look!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-sm">{project.date}</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.categories.map((category, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl text-gray-800 mb-2">Our Clients</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm">Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              We'd Love To Hear From You
            </h2>
            <p className="text-xl text-white/90">
              Get Custom Solutions, Recommendations, Resumes, or, Estimates. Confidentiality & Same Day Response Guaranteed!
            </p>
          </div>

          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Mobile Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Mobile Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Company</label>
                    <Input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-50"
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-xl"
                  >
                    Enquire Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>

              <div className="mt-8 text-center">
                <h4 className="text-lg mb-4">What's next?</h4>
                <p className="text-gray-600">One of our Team Lead will contact you shortly</p>
                <div className="mt-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mr-3">
                    MI
                  </div>
                  <div className="text-left">
                    <div className="text-sm">Mufaqar Islam</div>
                    <div className="text-xs text-gray-500">Team Lead</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">
              Our Clients <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-blue-600 mr-3" />
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm mr-3">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm">{testimonial.name}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl text-gray-800 mb-2">98% of clients recommend us</p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl mb-6">Reach Us</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400" />
                  <div>
                    <p>134 B Ahmed Housing Scheme</p>
                    <p>Multan Road Lahore Pakistan</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <p>T: +92 333 4753 749</p>
                </div>
              </div>

              <div>
                <h4 className="text-lg mb-4">Join Our Social Community</h4>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-gray-700 hover:bg-gray-800">
                    <Youtube className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-6">Let's Discuss What's Next</h3>
              <p className="text-gray-400 mb-6">Have a project or a question? We'd love to hear from you.</p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}