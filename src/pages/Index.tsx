
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isFaqOpen, setIsFaqOpen] = useState({
    platform: false,
    scheduling: false,
    analytics: false,
    trial: false,
  });

  const toggleFaq = (faqId: string) => {
    setIsFaqOpen(prevState => ({
      ...prevState,
      [faqId]: !prevState[faqId]
    }));
  };

  return (
    <div className="min-h-screen bg-yapp-pale-blue">
      {/* Navigation */}
      <nav className="bg-white py-4 shadow-sm">
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="text-xl text-yapp-text-navy font-serif">
            YappHQ
          </Link>
          <div className="space-x-4">
            <Link to="/login" className="text-yapp-text-navy">
              Login
            </Link>
            <Button variant="cta">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-yapp-pale-blue">
        <div className="container-custom text-center">
          <h1 className="text-5xl text-yapp-text-navy font-serif mb-6">
            Streamline Your Social Media Management
          </h1>
          <p className="text-yapp-text-navy-light text-lg mb-8 max-w-3xl mx-auto">
            The all-in-one platform to schedule, publish, and analyze your social media content.
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="cta">
              Start Free Trial
            </Button>
            <Button variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex justify-around items-center gap-8 flex-wrap">
            <img src="https://via.placeholder.com/80" alt="Company 1" className="h-12" />
            <img src="https://via.placeholder.com/80" alt="Company 2" className="h-12" />
            <img src="https://via.placeholder.com/80" alt="Company 3" className="h-12" />
            <img src="https://via.placeholder.com/80" alt="Company 4" className="h-12" />
          </div>
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section className="py-16 bg-yapp-pale-blue">
        <div className="container-custom text-center">
          <h2 className="text-3xl text-yapp-text-navy font-serif mb-8">
            Supported Platforms
          </h2>
          <div className="flex justify-center space-x-8 flex-wrap gap-y-6">
            <img src="https://via.placeholder.com/60" alt="Platform 1" className="h-10" />
            <img src="https://via.placeholder.com/60" alt="Platform 2" className="h-10" />
            <img src="https://via.placeholder.com/60" alt="Platform 3" className="h-10" />
            <img src="https://via.placeholder.com/60" alt="Platform 4" className="h-10" />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="bg-yapp-pale-blue py-16">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl text-yapp-text-navy font-serif text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-yapp-border-light">
              <button 
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                onClick={() => toggleFaq('platform')}
              >
                <span className="text-xl text-yapp-text-navy font-serif">Which social media platforms are supported?</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transform transition-transform duration-300 ${isFaqOpen.platform ? 'rotate-180' : ''}`}>
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isFaqOpen.platform && (
                <div className="py-4 text-yapp-text-navy-light">
                  We currently support Instagram, X, YouTube, Facebook, TikTok, LinkedIn, and Pinterest.
                </div>
              )}
            </div>
            
            <div className="border-b border-yapp-border-light">
              <button 
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                onClick={() => toggleFaq('scheduling')}
              >
                <span className="text-xl text-yapp-text-navy font-serif">Is there a limit to how many posts I can schedule?</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transform transition-transform duration-300 ${isFaqOpen.scheduling ? 'rotate-180' : ''}`}>
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isFaqOpen.scheduling && (
                <div className="py-4 text-yapp-text-navy-light">
                  There is no limit to the number of posts you can schedule with our premium plans.
                </div>
              )}
            </div>
            
            <div className="border-b border-yapp-border-light">
              <button 
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                onClick={() => toggleFaq('analytics')}
              >
                <span className="text-xl text-yapp-text-navy font-serif">How accurate are the analytics?</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transform transition-transform duration-300 ${isFaqOpen.analytics ? 'rotate-180' : ''}`}>
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isFaqOpen.analytics && (
                <div className="py-4 text-yapp-text-navy-light">
                  Our analytics provide real-time data directly from the social media platforms.
                </div>
              )}
            </div>
            
            <div className="border-b border-yapp-border-light">
              <button 
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                onClick={() => toggleFaq('trial')}
              >
                <span className="text-xl text-yapp-text-navy font-serif">Can I try YappHQ before committing?</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transform transition-transform duration-300 ${isFaqOpen.trial ? 'rotate-180' : ''}`}>
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isFaqOpen.trial && (
                <div className="py-4 text-yapp-text-navy-light">
                  Yes, we offer a 30-day free trial with no credit card required.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-yapp-deep-navy py-16 text-center">
        <div className="container-custom">
          <h2 className="text-3xl text-white font-serif mb-4">Ready to streamline your social media?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who have simplified their workflow with YappHQ
          </p>
          <div className="flex flex-col items-center">
            <button className="bg-white text-yapp-deep-navy rounded px-8 py-3 font-medium text-base">
              Start your free trial
            </button>
            <p className="text-white/70 text-sm mt-4">
              30 days free. No credit card required.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-yapp-pale-blue py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yapp-text-navy"
                >
                  <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xl text-yapp-text-navy ml-2 font-serif">YappHQ</span>
              </div>
              <p className="text-sm text-yapp-text-navy-light">
                The all-in-one social media management platform that helps you schedule, publish, and analyze your content.
              </p>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-yapp-text-navy mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-yapp-text-navy-light text-sm">Features</Link></li>
                <li><Link to="/pricing" className="text-yapp-text-navy-light text-sm">Pricing</Link></li>
                <li><Link to="/testimonials" className="text-yapp-text-navy-light text-sm">Testimonials</Link></li>
                <li><Link to="/integrations" className="text-yapp-text-navy-light text-sm">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-yapp-text-navy mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-yapp-text-navy-light text-sm">Blog</Link></li>
                <li><Link to="/guides" className="text-yapp-text-navy-light text-sm">Guides</Link></li>
                <li><Link to="/help" className="text-yapp-text-navy-light text-sm">Help Center</Link></li>
                <li><Link to="/api" className="text-yapp-text-navy-light text-sm">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-yapp-text-navy mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-yapp-text-navy-light text-sm">About</Link></li>
                <li><Link to="/careers" className="text-yapp-text-navy-light text-sm">Careers</Link></li>
                <li><Link to="/contact" className="text-yapp-text-navy-light text-sm">Contact</Link></li>
                <li><Link to="/press" className="text-yapp-text-navy-light text-sm">Press</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-yapp-border-light pt-8 flex flex-col md:flex-row justify-between">
            <div className="text-yapp-text-navy-light text-sm mb-4 md:mb-0">
              © 2025 YappHQ. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="/terms" className="text-yapp-text-navy-light text-sm">
                Terms
              </Link>
              <Link to="/privacy" className="text-yapp-text-navy-light text-sm">
                Privacy
              </Link>
              <Link to="/cookies" className="text-yapp-text-navy-light text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
