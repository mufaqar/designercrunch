import React from 'react';
import { Mail, Send, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner@2.0.3';

export function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [isSubscribing, setIsSubscribing] = React.useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubscribing(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Successfully subscribed to our newsletter!');
    setEmail('');
    setIsSubscribing(false);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Newsletter Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
          <Mail className="w-8 h-8 text-white" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl lg:text-4xl text-white mb-4">
          Get Weekly Design Inspiration
        </h2>
        
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join 25,000+ designers and receive curated design resources, 
          color palettes, and industry insights delivered to your inbox every week.
        </p>

        {/* Subscription Form */}
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto mb-8">
          <div className="flex gap-3">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20 focus:border-white"
                disabled={isSubscribing}
              />
            </div>
            <Button 
              type="submit"
              disabled={isSubscribing}
              className="bg-white text-purple-600 hover:bg-white/90 px-6"
            >
              {isSubscribing ? (
                <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </>
              )}
            </Button>
          </div>
        </form>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm">4.9/5 from 1,200+ subscribers</span>
          </div>
          
          <div className="text-sm">
            ✨ Free weekly newsletters • No spam • Unsubscribe anytime
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
          <p className="text-white/90 italic mb-4">
            "DesignerCrunch's newsletter is the highlight of my week. The curated 
            resources and insights have significantly improved my design workflow."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white text-sm">
              AK
            </div>
            <div className="text-white/80">
              <div className="text-sm">Alex Kim</div>
              <div className="text-xs">Senior UI Designer at TechFlow</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}