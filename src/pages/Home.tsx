
import React from 'react';
import { Link } from 'react-router-dom';
import YappLogo from '@/components/YappLogo';
import { Button } from '@/components/ui/button';
import { Calendar, BarChart3, LineChart, Send } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-yapp-pale-blue">
      {/* Navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <YappLogo />
          <div className="flex items-center gap-8">
            <Link to="/features" className="text-yapp-deep-navy hover:opacity-80">
              Features
            </Link>
            <Link to="/pricing" className="text-yapp-deep-navy hover:opacity-80">
              Pricing
            </Link>
            <Button variant="cta-dark" className="rounded-full px-6">
              Sign up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-5xl text-yapp-deep-navy font-normal max-w-xl leading-tight">
                Social media on autopilot
              </h1>
              <p className="text-xl text-yapp-deep-navy/80 max-w-xl">
                Schedule posts, manage your contentineup, and track performance—effortlessly.
              </p>
              <div className="pt-4">
                <Button variant="cta-dark" size="lg" className="rounded-full px-8">
                  Get started
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/lovable-uploads/3911b980-5e26-4666-8fac-1aaabccf13e8.png" 
                  alt="YappHQ Dashboard Demo" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-yapp-deep-navy mb-4">Features</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="feature-card">
              <div className="space-y-4">
                <Calendar className="h-8 w-8 text-yapp-deep-navy" />
                <h3 className="text-xl font-medium text-yapp-deep-navy">Post scheduling</h3>
                <p className="text-yapp-deep-navy/80">
                  Plan and schedule posts in advance with ease
                </p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="space-y-4">
                <Send className="h-8 w-8 text-yapp-deep-navy" />
                <h3 className="text-xl font-medium text-yapp-deep-navy">Publish</h3>
                <p className="text-yapp-deep-navy/80">
                  Deliver your content to every platform
                </p>
              </div>
            </div>
            
            <div className="feature-card">
              <div className="space-y-4">
                <BarChart3 className="h-8 w-8 text-yapp-deep-navy" />
                <h3 className="text-xl font-medium text-yapp-deep-navy">Analytics</h3>
                <p className="text-yapp-deep-navy/80">
                  Track key metrics and performance
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/features" className="text-yapp-deep-navy inline-flex items-center gap-2 text-lg hover:underline">
              Learn more about our features
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-yapp-deep-navy py-16 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl text-white mb-4">Ready to streamline your social media?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who have simplified their workflow with YappHQ
          </p>
          <div className="flex flex-col items-center">
            <Button variant="cta" size="lg" className="rounded-full px-8">
              Start your free trial
            </Button>
            <p className="text-white/70 text-sm mt-4">
              30 days free. No credit card required.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <YappLogo className="mb-4" />
              <p className="text-yapp-deep-navy/70 max-w-xs">
                The all-in-one social media management platform for all major platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8 md:mt-0">
              <div>
                <h3 className="font-medium text-yapp-deep-navy mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link to="/features" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy">Features</Link></li>
                  <li><Link to="/pricing" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy">Pricing</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-yapp-deep-navy mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/blog" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy">Blog</Link></li>
                  <li><Link to="/help" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy">Help Center</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-yapp-deep-navy mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy">About</Link></li>
                  <li><Link to="/contact" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-yapp-deep-navy/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-yapp-deep-navy/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} YappHQ. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="/terms" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy text-sm">
                Terms
              </Link>
              <Link to="/privacy" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy text-sm">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
