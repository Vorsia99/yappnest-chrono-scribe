
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, ArrowRight, Instagram, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-yapp-pale-blue">
      {/* Navigation */}
      <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
        <div className="container-custom flex items-center justify-between">
          <Link to="/" className="text-xl text-yapp-text-navy font-serif flex items-center gap-2">
            <svg 
              width="28" 
              height="28" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-yapp-text-navy"
            >
              <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>yappHQ</span>
          </Link>
          <div className="space-x-4">
            <Link to="/login" className="text-yapp-text-navy hover:text-yapp-deep-navy transition-colors">
              Login
            </Link>
            <Button variant="cta" className="shadow-md">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Improved with stronger messaging and visual elements */}
      <section className="py-16 md:py-24 bg-yapp-pale-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yapp-pale-blue via-yapp-pale-blue to-white opacity-70"></div>
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-6">
              <BadgeCheck className="mr-1 h-4 w-4" /> Trusted by 5000+ social media managers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-yapp-text-navy font-serif mb-6 leading-tight">
              Your <span className="text-blue-600">All-in-One</span> Social Media Command Center
            </h1>
            <p className="text-yapp-text-navy-light text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Schedule posts, analyze performance, and grow your audience across all platforms with our powerful AI-assisted tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="cta" size="lg" className="shadow-lg animate-fade-in group">
                Start Free Trial <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="animate-fade-in" style={{animationDelay: "100ms"}}>
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section - Enhanced with better spacing and actual brand logos */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container-custom">
          <p className="text-center text-yapp-text-navy-light mb-8 text-sm uppercase tracking-wider">Trusted by industry-leading brands</p>
          <div className="flex justify-around items-center gap-8 flex-wrap opacity-80">
            <div className="h-12 flex items-center grayscale hover:grayscale-0 transition-all">
              <span className="text-yapp-text-navy-light font-bold">Forbes</span>
            </div>
            <div className="h-12 flex items-center grayscale hover:grayscale-0 transition-all">
              <span className="text-yapp-text-navy-light font-bold">TechCrunch</span>
            </div>
            <div className="h-12 flex items-center grayscale hover:grayscale-0 transition-all">
              <span className="text-yapp-text-navy-light font-bold">Mashable</span>
            </div>
            <div className="h-12 flex items-center grayscale hover:grayscale-0 transition-all">
              <span className="text-yapp-text-navy-light font-bold">Entrepreneur</span>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms Section - Updated with actual icons */}
      <section className="py-16 bg-yapp-pale-blue">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl text-yapp-text-navy font-serif mb-3">
            All Your Social Platforms in One Place
          </h2>
          <p className="text-yapp-text-navy-light mb-10 max-w-2xl mx-auto">
            Connect and manage all your social accounts from a single dashboard
          </p>
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-y-8">
            <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
              <Instagram size={36} className="text-pink-600" />
              <span className="text-sm font-medium">Instagram</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
              <Twitter size={36} className="text-blue-400" />
              <span className="text-sm font-medium">Twitter</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
              <Facebook size={36} className="text-blue-600" />
              <span className="text-sm font-medium">Facebook</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
              <Linkedin size={36} className="text-blue-700" />
              <span className="text-sm font-medium">LinkedIn</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
              <Youtube size={36} className="text-red-600" />
              <span className="text-sm font-medium">YouTube</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Highlight - New section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-yapp-text-navy font-serif mb-3">
              Powerful Tools for Social Media Success
            </h2>
            <p className="text-yapp-text-navy-light max-w-2xl mx-auto">
              Everything you need to grow your audience and measure your impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-700">
                  <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-yapp-deep-navy">Smart Scheduling</h3>
              <p className="text-yapp-text-navy-light">
                Schedule posts at optimal times with our AI-powered recommendation engine for maximum engagement.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-green-700">
                  <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8M21 8C21 5.23858 18.7614 3 16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21M21 8H8M8 21V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 14L14 12V16L17 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-yapp-deep-navy">Advanced Analytics</h3>
              <p className="text-yapp-text-navy-light">
                Gain deep insights into your audience behavior, content performance, and growth opportunities.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-700">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18.2218 11.12C18.1852 10.7686 18.1202 10.4303 18.0328 10.1111C17.7068 8.99924 17.0561 8.00306 16.1555 7.26953C15.2549 6.536 14.1659 6.08688 13.0157 7.6906e-06M5.77817 11.12C5.81479 10.7686 5.87983 10.4303 5.96717 10.1111C6.29323 8.99924 6.94387 8.00306 7.84451 7.26953C8.74515 6.536 9.83414 6.08688 10.9843 7.6906e-06M16.95 19C16.6684 19.6612 16.2306 20.2361 15.6747 20.6699C15.1188 21.1037 14.4598 21.3843 13.7678 21.4871C13.0758 21.5899 12.3682 21.5113 11.7147 21.26C11.0611 21.0086 10.4854 20.5935 10.05 20.06M5 3L19 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2 text-yapp-deep-navy">Content Assistant</h3>
              <p className="text-yapp-text-navy-light">
                Create engaging content with AI-powered suggestions tailored to your brand voice and audience.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section - New addition */}
      <section className="py-16 bg-gradient-to-br from-yapp-pale-blue to-blue-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-yapp-text-navy font-serif mb-3">
              Loved by Social Media Managers
            </h2>
            <p className="text-yapp-text-navy-light">
              Hear from the professionals who transformed their workflow with yappHQ
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-medium text-gray-500">JD</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-yapp-text-navy italic mb-4">
                  "yappHQ helped me reduce my social media management time by 70%. The analytics insights led to a 45% increase in engagement across all our channels."
                </blockquote>
                <div>
                  <p className="font-medium text-yapp-deep-navy">Jessica Davis</p>
                  <p className="text-sm text-yapp-text-navy-light">Social Media Director, TechGrowth Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section - Updated with proper Accordion component */}
      <section className="bg-white py-16">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl text-yapp-text-navy font-serif text-center mb-10">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="platforms" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <span className="text-xl font-medium text-yapp-text-navy">Which social media platforms are supported?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-yapp-text-navy-light">
                  We currently support Instagram, Twitter, Facebook, LinkedIn, YouTube, TikTok, and Pinterest. Our team is constantly working to add more platforms based on customer demand.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="scheduling" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <span className="text-xl font-medium text-yapp-text-navy">Is there a limit to how many posts I can schedule?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-yapp-text-navy-light">
                  There is no limit to the number of posts you can schedule with our premium plans. Our starter plan includes up to 150 scheduled posts per month across all platforms.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="analytics" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <span className="text-xl font-medium text-yapp-text-navy">How accurate are the analytics?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-yapp-text-navy-light">
                  Our analytics provide real-time data directly from the social media platforms through their official APIs. The data is refreshed hourly for most metrics, and daily for more complex analytics.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="trial" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <span className="text-xl font-medium text-yapp-text-navy">Can I try yappHQ before committing?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-yapp-text-navy-light">
                  Yes, we offer a 30-day free trial with no credit card required. You'll get access to all premium features so you can fully evaluate how yappHQ fits into your workflow.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="support" className="border rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <span className="text-xl font-medium text-yapp-text-navy">What kind of support can I expect?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <p className="text-yapp-text-navy-light">
                  All plans include email support with a 24-hour response time. Premium plans add live chat support during business hours and priority response times. Enterprise plans include dedicated account management.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      {/* CTA Section - Enhanced with better visuals */}
      <section className="bg-gradient-to-r from-yapp-deep-navy to-blue-900 py-16 text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-serif mb-4">Ready to transform your social media?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Join thousands of marketers who have simplified their workflow with yappHQ
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="cta" size="lg" className="w-full sm:w-auto shadow-lg">
                Start your 30-day free trial
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Schedule a demo
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-6 flex items-center justify-center gap-2">
              <BadgeCheck className="h-4 w-4" />
              No credit card required • Full access to all features
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer - Restructured for better organization */}
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
                <span className="text-xl text-yapp-text-navy ml-2 font-serif">yappHQ</span>
              </div>
              <p className="text-sm text-yapp-text-navy-light">
                The all-in-one social media management platform that helps you schedule, publish, and analyze your content.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-yapp-text-navy-light hover:text-yapp-deep-navy">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-yapp-text-navy-light hover:text-yapp-deep-navy">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-yapp-text-navy-light hover:text-yapp-deep-navy">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-yapp-text-navy-light hover:text-yapp-deep-navy">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-yapp-text-navy mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">Pricing</Link></li>
                <li><Link to="/testimonials" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">Testimonials</Link></li>
                <li><Link to="/integrations" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-yapp-text-navy mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">Blog</Link></li>
                <li><Link to="/guides" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">Guides</Link></li>
                <li><Link to="/help" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">Help Center</Link></li>
                <li><Link to="/api" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base font-medium text-yapp-text-navy mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">About</Link></li>
                <li><Link to="/careers" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">Contact</Link></li>
                <li><Link to="/press" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">Press</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-yapp-border-light pt-8 flex flex-col md:flex-row justify-between">
            <div className="text-yapp-text-navy-light text-sm mb-4 md:mb-0">
              © 2025 yappHQ. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="/terms" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">
                Privacy
              </Link>
              <Link to="/cookies" className="text-yapp-text-navy-light text-sm hover:text-yapp-deep-navy transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
