
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BadgeCheck, ArrowRight, Instagram, Twitter, Facebook, Linkedin, Youtube, CheckCircle2, PlayCircle } from "lucide-react";

// New components for organization
import PlanSelector from '@/components/PlanSelector';
import FeatureCard from '@/components/FeatureCard';
import TestimonialCard from '@/components/TestimonialCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const Index = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Handle sticky CTA visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowStickyCTA(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-yapp-pale-blue">
      {/* Navigation - Updated with active state highlights */}
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
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-yapp-deep-navy font-medium border-b-2 border-yapp-deep-navy">
              Home
            </Link>
            <Link to="/features" className="text-yapp-text-navy hover:text-yapp-deep-navy transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-yapp-text-navy hover:text-yapp-deep-navy transition-colors">
              Pricing
            </Link>
          </div>
          <div className="space-x-4 flex items-center">
            <Link to="/login" className="text-yapp-text-navy hover:text-yapp-deep-navy transition-colors">
              Login
            </Link>
            <Button variant="cta-dark" className="shadow-md">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Improved with stronger messaging and visual elements */}
      <section ref={heroRef} className="py-16 md:py-24 bg-gradient-to-br from-yapp-pale-blue to-white relative overflow-hidden px-4 md:px-0">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-5 bg-repeat"></div>
        <div className="container-custom text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 mb-6">
              <BadgeCheck className="mr-1 h-4 w-4" /> Trusted by 5,000+ social media managers
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-yapp-text-navy font-serif mb-6 leading-tight">
              Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">All-in-One</span> Social Media Command Center
            </h1>
            <p className="text-yapp-text-navy-light text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              Schedule posts, analyze performance, and grow your audience across all platforms with our powerful AI-assisted tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button variant="cta-dark" size="lg" className="shadow-lg animate-fade-in group">
                Start Free Trial <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="animate-fade-in flex items-center" style={{animationDelay: "100ms"}}>
                <PlayCircle className="mr-2 h-5 w-5 text-yapp-deep-navy" />
                Watch Demo
              </Button>
            </div>
            
            {/* Adding a product preview image */}
            <div className="mt-12 md:mt-16 max-w-5xl mx-auto relative">
              <div className="bg-white shadow-xl rounded-lg border border-gray-200 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="YappHQ Dashboard Preview" 
                  className="w-full h-auto"
                  style={{ aspectRatio: '16/9' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 right-8 transform rotate-6 bg-white p-3 rounded-lg shadow-lg text-sm font-medium text-yapp-deep-navy">
                See how easy it is! →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals Section - Enhanced with better spacing and actual brand logos */}
      <section className="py-12 bg-white shadow-sm">
        <div className="container-custom px-4 md:px-0">
          <p className="text-center text-yapp-text-navy-light mb-8 text-sm uppercase tracking-wider">Trusted by industry-leading brands</p>
          <div className="grid grid-cols-2 md:flex md:justify-around items-center gap-8 md:gap-12 flex-wrap">
            <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <svg className="h-8" viewBox="0 0 100 30" fill="currentColor">
                <path d="M12.6 5.2H8.7v19.6h3.9V5.2zm26 0h-6.4v19.6H36v-7.5h2.6c4.3 0 7.9-2.4 7.9-6.1s-3.6-6-7.9-6zm.1 9H36V8.4h2.7c2.4 0 4.1 1 4.1 2.9 0 1.9-1.7 2.9-4.1 2.9zm17.2-9h-6.9v19.6h6.8c6.8 0 11.6-4.4 11.6-9.9 0-5.4-4.8-9.7-11.5-9.7zm-.2 16.4h-2.8V8.4h2.8c4.4 0 7.7 2.6 7.7 6.5s-3.3 6.7-7.7 6.7zM70 5.2h3.9v19H70V5.2zm14.3 0h-5.8v19.6h3.9v-6.6h1.9c4.4 0 7.7-2.9 7.7-6.5s-3.3-6.5-7.7-6.5zm0 9.7h-1.9V8.4h1.9c2.2 0 3.9 1.3 3.9 3.3s-1.7 3.2-3.9 3.2z"/>
              </svg>
            </div>
            <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <svg className="h-7" viewBox="0 0 180 30" fill="currentColor">
                <path d="M0 7.3h5.3v14.8h8.9v4.2H0V7.3zm15.5 0h5.3v19h-5.3v-19zm8.3 0h5.4l4.3 7.8 4.3-7.8h5.4l-7.1 12.1v6.9h-5.3v-6.9L23.8 7.3zM45 7.3h5.3v19H45v-19zm8.6 0h15v4.2h-9.7v3.3h9.1v4h-9.1v3.3h9.7v4.2H53.6V7.3zm17.1 0h8.7c1.8 0 3.3.5 4.3 1.4 1 .9 1.6 2.1 1.6 3.5 0 3-2 4.8-4.9 5.2l5.6 8.9h-6l-4.8-8.1h-.2v8.1h-5.3V7.3h1zm5.3 7.1h1.3c1.6 0 2.8-.7 2.8-2s-1.2-1.9-2.8-1.9H76V14.4zm10.3-7.1h5.3v10.7c0 2.9 1.2 4.3 3.7 4.3s3.7-1.4 3.7-4.3V7.3h5.3v10.5c0 5.8-3.3 8.7-9 8.7s-9-2.9-9-8.7V7.3zm22.1 0h5.4l4.3 7.8 4.3-7.8h5.4l-7.1 12.1v6.9H115v-6.9l-7.1-12.1zm16.2 0h15v4.2h-9.7v3.3h9.1v4h-9.1v3.3h9.7v4.2h-15V7.3zm17 0h15v4.2h-9.7v3.3h9.1v4h-9.1v3.3h9.7v4.2h-15V7.3zm17.7 19h-6l8-19h6.3l8 19h-6l-1.5-3.6h-7.3L159.3 26.3zm5.6-7.7h4.2l-2.1-5.5-2.1 5.5z"/>
              </svg>
            </div>
            <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <svg className="h-8" viewBox="0 0 140 30" fill="currentColor">
                <path d="M18.7 17.2c0-3.6-2.9-4.8-5.9-5.9-2.3-.9-4.1-1.5-4.1-3.1 0-1.5 1.4-2.3 2.8-2.3 1.9 0 2.8.9 3 2.7h5.6c-.4-4.5-3.7-6.6-8.4-6.6-4.1 0-8.3 2.2-8.3 6.7 0 3.4 2.8 4.6 5.9 5.7 2.3.9 4.2 1.3 4.2 3.3 0 1.4-1.4 2.4-3.2 2.4-2.3 0-3.5-1-3.7-3.2H1c.1 5.2 4 7.2 8.8 7.2 4.7-.1 8.9-2.3 8.9-6.9m17 6.6h5.5V14.3c0-3-1.4-5.3-5.5-5.3-2 0-4.1.7-5.4 2.8V2.6h-5.5v21.3h5.5v-9.4c0-2.5 1.3-3.3 2.7-3.3s2.7.8 2.7 3.3v9.3zm18.9-18.1c-1.8 0-3.5.7-4.6 2.1v-1.8h-5.5v17.8h5.5V14.4c0-2.5 1.3-3.4 2.7-3.4s2.7.8 2.7 3.4v9.4h5.5V12.9c.1-4.3-2.4-7.2-6.3-7.2m17.2 0c-5.9 0-9.3 4.4-9.3 9.2 0 5.3 3.9 9 9.5 9 3.7 0 6.9-1.6 8.4-5.2h-5c-.7 1-2 1.5-3.4 1.5-2 0-3.8-1-4-3.1h12.3c.8-6.2-3.4-11.4-8.5-11.4m-4 7.8c.4-1.8 1.9-2.9 3.8-2.9 1.9 0 3.3 1.1 3.4 2.9h-7.2zm29.9-7.5h-6.5l-4.3 10.5-4.3-10.5h-6.7l7.9 17.8h5.9l7.9-17.8z"/>
              </svg>
            </div>
            <div className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <svg className="h-7" viewBox="0 0 150 30" fill="currentColor">
                <path d="M10.4 6.5C4.7 6.5 0 11.1 0 16.8s4.7 10.3 10.4 10.3c5.7 0 10.4-4.6 10.4-10.3S16.1 6.5 10.4 6.5zm0 16.7c-3.5 0-6.4-2.9-6.4-6.4 0-3.5 2.9-6.4 6.4-6.4 3.5 0 6.4 2.9 6.4 6.4 0 3.5-2.9 6.4-6.4 6.4zM35.2 6.8h-4v12.6c0 3.5-2.8 6.3-6.3 6.3v4c5.7 0 10.3-4.6 10.3-10.3V6.8zm38.9 0v17h4v-17h-4zm-20.5 0c-4.7 0-8.6 3.8-8.6 8.6v8.4h4v-8.4c0-2.5 2-4.6 4.6-4.6 2.5 0 4.6 2 4.6 4.6v8.4h4v-8.4c-.1-4.3-2.4-7.2-6.3-7.2m17.2 0c-5.9 0-9.3 4.4-9.3 9.2 0 5.3 3.9 9 9.5 9 3.7 0 6.9-1.6 8.4-5.2h-5c-.7 1-2 1.5-3.4 1.5-2 0-3.8-1-4-3.1h12.3c.8-6.2-3.4-11.4-8.5-11.4z"/>
              </svg>
            </div>
          </div>
          
          {/* Additional trust signals */}
          <div className="flex justify-center flex-wrap gap-x-8 gap-y-3 mt-10">
            <div className="flex items-center text-sm text-yapp-text-navy-light">
              <CheckCircle2 className="w-4 h-4 mr-1 text-green-600" /> Fast setup
            </div>
            <div className="flex items-center text-sm text-yapp-text-navy-light">
              <CheckCircle2 className="w-4 h-4 mr-1 text-green-600" /> 30-day free trial
            </div>
            <div className="flex items-center text-sm text-yapp-text-navy-light">
              <CheckCircle2 className="w-4 h-4 mr-1 text-green-600" /> No credit card required
            </div>
            <div className="flex items-center text-sm text-yapp-text-navy-light">
              <CheckCircle2 className="w-4 h-4 mr-1 text-green-600" /> Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms Section - Updated with actual icons */}
      <section className="py-16 bg-yapp-pale-blue px-4 md:px-0">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl text-yapp-text-navy font-serif mb-3 text-center">
            One Platform, All Your Social Media
          </h2>
          <p className="text-yapp-text-navy-light mb-10 max-w-2xl mx-auto">
            Connect and manage all your social accounts from a single dashboard
          </p>
          <div className="flex justify-center items-center flex-wrap gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center text-white">
                <Instagram size={28} />
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white">
                <Twitter size={28} />
              </div>
              <span className="text-sm font-medium">Twitter</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white">
                <Facebook size={28} />
              </div>
              <span className="text-sm font-medium">Facebook</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center text-white">
                <Linkedin size={28} />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </div>
            <div className="flex flex-col items-center gap-2 hover:-translate-y-1 transition-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white">
                <Youtube size={28} />
              </div>
              <span className="text-sm font-medium">YouTube</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Highlight - Improved with consistent design */}
      <section className="py-16 bg-white px-4 md:px-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-yapp-text-navy font-serif mb-3 text-center">
              How yappHQ Transforms Your Social Media
            </h2>
            <p className="text-yapp-text-navy-light max-w-2xl mx-auto">
              Everything you need to grow your audience and measure your impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature cards with consistent styling */}
            {[
              {
                title: "Smart Scheduling",
                description: "Schedule posts at optimal times with our AI-powered recommendation engine for maximum engagement.",
                icon: "calendar",
                gradient: "from-blue-50 to-blue-100",
                iconBg: "bg-blue-100",
                iconColor: "text-blue-700"
              },
              {
                title: "Advanced Analytics",
                description: "Gain deep insights into your audience behavior, content performance, and growth opportunities.",
                icon: "chart",
                gradient: "from-green-50 to-green-100",
                iconBg: "bg-green-100", 
                iconColor: "text-green-700"
              },
              {
                title: "Content Assistant",
                description: "Create engaging content with AI-powered suggestions tailored to your brand voice and audience.",
                icon: "sparkles",
                gradient: "from-purple-50 to-purple-100",
                iconBg: "bg-purple-100",
                iconColor: "text-purple-700"
              },
              {
                title: "Team Collaboration",
                description: "Work seamlessly with your team to plan, create, review, and approve content together.",
                icon: "users",
                gradient: "from-amber-50 to-amber-100",
                iconBg: "bg-amber-100",
                iconColor: "text-amber-700"
              },
              {
                title: "Content Calendar",
                description: "Plan your content strategy with a visual calendar that makes scheduling a breeze.",
                icon: "calendar-days",
                gradient: "from-sky-50 to-sky-100",
                iconBg: "bg-sky-100",
                iconColor: "text-sky-700"
              },
              {
                title: "Performance Reports",
                description: "Generate beautiful reports to showcase your social media success to clients and stakeholders.",
                icon: "presentation-chart",
                gradient: "from-rose-50 to-rose-100",
                iconBg: "bg-rose-100",
                iconColor: "text-rose-700"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${feature.gradient} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={feature.iconColor}>
                    {feature.icon === 'calendar' && (
                      <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                    {feature.icon === 'chart' && (
                      <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                    {feature.icon === 'sparkles' && (
                      <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l3.293 3.293a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 0 1-1.414 0L2 14.414a1 1 0 0 1 0-1.414l9.9-9.9a1 1 0 0 1 1.414 0L13 3zm5 10l2.93-2.93a1 1 0 0 1 1.414 0l2.93 2.93a1 1 0 0 1 0 1.414l-2.93 2.93a1 1 0 0 1-1.414 0L18 14.414a1 1 0 0 1 0-1.414z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                    {feature.icon === 'users' && (
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                    {feature.icon === 'calendar-days' && (
                      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                    {feature.icon === 'presentation-chart' && (
                      <path d="M8 13v-1m4 1v-3m4 3V8M9 19l-2 2-2-2m16-4l-2 2-2-2M3 4h18m-1-2H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V3a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2 text-yapp-deep-navy">{feature.title}</h3>
                <p className="text-yapp-text-navy-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Demo/Preview Section - New addition */}
      <section className="py-16 bg-gradient-to-br from-yapp-deep-navy to-blue-900 text-white px-4 md:px-0">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-white font-serif mb-3 text-center">
              See yappHQ in Action
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Watch how easy it is to schedule and manage your social media content
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative bg-white/10 backdrop-blur-sm p-2 rounded-xl shadow-2xl">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <div className="bg-black/30 flex items-center justify-center">
                <Button variant="cta" size="lg" className="absolute inset-0 m-auto w-16 h-16 rounded-full flex items-center justify-center">
                  <PlayCircle className="h-10 w-10" />
                </Button>
                <img 
                  src="/placeholder.svg" 
                  alt="YappHQ Demo Video Thumbnail" 
                  className="w-full h-full object-cover opacity-70" 
                />
              </div>
            </div>
            <div className="absolute -bottom-6 right-8 transform rotate-2 bg-white p-3 rounded-lg shadow-lg font-medium text-yapp-deep-navy">
              See it in just 60 seconds!
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section - Enhanced with better design and spacing */}
      <section className="py-16 bg-gradient-to-br from-yapp-pale-blue to-blue-50 px-6 md:px-0">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-yapp-text-navy font-serif mb-3 text-center">
              Trusted by Creators & Brands
            </h2>
            <p className="text-yapp-text-navy-light">
              Hear from the professionals who transformed their workflow with yappHQ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-yapp-text-navy italic mb-4">
                  "YappHQ helped me reduce my social media management time by 70%. The analytics insights led to a 45% increase in engagement across all our channels."
                </blockquote>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <span className="text-lg font-medium text-gray-500">JD</span>
                  </div>
                  <div>
                    <p className="font-medium text-yapp-deep-navy">Jessica Davis</p>
                    <p className="text-sm text-yapp-text-navy-light">Social Media Director, TechGrowth Inc.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-yapp-text-navy italic mb-4">
                  "The content calendar and team collaboration tools have revolutionized how our marketing department works. We're now twice as productive with half the stress."
                </blockquote>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <span className="text-lg font-medium text-gray-500">MT</span>
                  </div>
                  <div>
                    <p className="font-medium text-yapp-deep-navy">Michael Torres</p>
                    <p className="text-sm text-yapp-text-navy-light">Marketing Manager, Bravo Solutions</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col gap-6">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-yapp-text-navy italic mb-4">
                  "The analytics dashboard provides insights I couldn't get anywhere else. It's like having a social media consultant built right into the platform."
                </blockquote>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <span className="text-lg font-medium text-gray-500">SP</span>
                  </div>
                  <div>
                    <p className="font-medium text-yapp-deep-navy">Sarah Patel</p>
                    <p className="text-sm text-yapp-text-navy-light">Freelance Social Media Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* "Find Your Plan" Quiz/Selector */}
      <section className="py-16 bg-white px-4 md:px-0">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl text-yapp-text-navy font-serif mb-3 text-center">
              Choose Your Perfect Plan
            </h2>
            <p className="text-yapp-text-navy-light max-w-2xl mx-auto">
              Answer a few quick questions to get a personalized recommendation
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-100 shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-4">How many social profiles do you manage?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="radio" id="profiles-1" name="profiles" className="w-4 h-4 text-blue-600" />
                    <label htmlFor="profiles-1" className="ml-2 text-yapp-text-navy">1-3 profiles</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="profiles-2" name="profiles" className="w-4 h-4 text-blue-600" />
                    <label htmlFor="profiles-2" className="ml-2 text-yapp-text-navy">4-10 profiles</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="profiles-3" name="profiles" className="w-4 h-4 text-blue-600" />
                    <label htmlFor="profiles-3" className="ml-2 text-yapp-text-navy">More than 10 profiles</label>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-4">Do you work with a team?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="radio" id="team-1" name="team" className="w-4 h-4 text-blue-600" />
                    <label htmlFor="team-1" className="ml-2 text-yapp-text-navy">Just me</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="team-2" name="team" className="w-4 h-4 text-blue-600" />
                    <label htmlFor="team-2" className="ml-2 text-yapp-text-navy">2-5 people</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" id="team-3" name="team" className="w-4 h-4 text-blue-600" />
                    <label htmlFor="team-3" className="ml-2 text-yapp-text-navy">More than 5 people</label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="cta-dark" size="lg" className="px-8">
                Find My Recommendation
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section - Updated with proper Accordion component */}
      <section className="bg-yapp-pale-blue py-16 px-4 md:px-0">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl md:text-3xl text-yapp-text-navy font-serif text-center mb-10">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="platforms" className="border bg-white rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-yapp-text-navy">Which social media platforms are supported?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-yapp-text-navy-light">
                  We currently support Instagram, Twitter, Facebook, LinkedIn, YouTube, TikTok, and Pinterest. Our team is constantly working to add more platforms based on customer demand.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="scheduling" className="border bg-white rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-yapp-text-navy">Is there a limit to how many posts I can schedule?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-yapp-text-navy-light">
                  There is no limit to the number of posts you can schedule with our premium plans. Our starter plan includes up to 150 scheduled posts per month across all platforms.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="analytics" className="border bg-white rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-yapp-text-navy">How accurate are the analytics?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-yapp-text-navy-light">
                  Our analytics provide real-time data directly from the social media platforms through their official APIs. The data is refreshed hourly for most metrics, and daily for more complex analytics.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="trial" className="border bg-white rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-yapp-text-navy">Can I try yappHQ before committing?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-yapp-text-navy-light">
                  Yes, we offer a 30-day free trial with no credit card required. You'll get access to all premium features so you can fully evaluate how yappHQ fits into your workflow.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="support" className="border bg-white rounded-lg overflow-hidden shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <span className="text-lg font-medium text-yapp-text-navy">What kind of support can I expect?</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="text-yapp-text-navy-light">
                  All plans include email support with a 24-hour response time. Premium plans add live chat support during business hours and priority response times. Enterprise plans include dedicated account management.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      {/* CTA Section - Enhanced with better visuals and PURPLE GRADIENT BACKGROUND */}
      <section className="bg-purple-gradient py-16 text-center px-4 md:px-0">
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
              <Button variant="cta" className="w-full sm:w-auto">
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
      
      {/* Sticky mobile CTA */}
      {showStickyCTA && isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-3 shadow-lg border-t border-gray-200 z-50 animate-slide-in-bottom">
          <Button variant="cta-dark" className="w-full">
            Try for Free — No Card Needed
          </Button>
        </div>
      )}
      
      {/* Footer - Restructured for better organization */}
      <footer className="bg-yapp-pale-blue py-12 px-4 md:px-0">
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
              © {new Date().getFullYear()} yappHQ. All rights reserved.
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
