
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import YappLogo from '@/components/YappLogo';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  BarChart3, 
  LineChart, 
  Send, 
  Check, 
  X, 
  Instagram, 
  Facebook, 
  Linkedin, 
  MessageCircle, 
  Youtube, 
  PinIcon, 
  Twitter, 
  ArrowRight, 
  ChevronRight,
  Star
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  const yearlyDiscount = 0.2; // 20% discount for yearly plans
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("monthly");
  
  // Monitor scroll for sticky nav effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-yapp-pale-blue to-white">
      {/* Navigation - now with sticky behavior and current page highlight */}
      <nav className={cn(
        "py-4 transition-all duration-300 w-full z-50",
        isScrolled ? "sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm" : ""
      )}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <YappLogo />
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-yapp-deep-navy font-medium border-b-2 border-yapp-deep-navy">
              Home
            </Link>
            <Link to="/features" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy hover:border-b-2 hover:border-yapp-deep-navy/30 transition-all">
              Features
            </Link>
            <Link to="/pricing" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy hover:border-b-2 hover:border-yapp-deep-navy/30 transition-all">
              Pricing
            </Link>
            <Link to="/signup">
              <Button variant="cta-dark" className="rounded-full px-6 shadow-md hover:shadow-lg transition-all">
                Sign up
              </Button>
            </Link>
          </div>
          <Button variant="ghost" className="md:hidden">
            <span className="sr-only">Open menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </nav>

      {/* Hero Section - improved with clearer value propositions and better visual hierarchy */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent" aria-hidden="true"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
                Manage All Your Social Media in One Place
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-yapp-deep-navy font-semibold max-w-xl leading-tight md:leading-tight">
                Social media on <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">autopilot</span>
              </h1>
              <p className="text-lg md:text-xl text-yapp-deep-navy/80 max-w-xl">
                The all-in-one platform that helps you <strong>save 15+ hours per week</strong> with scheduling, analytics, and AI-powered content suggestions.
              </p>
              <div className="pt-4 flex flex-col md:flex-row gap-4 md:items-center">
                <Link to="/signup">
                  <Button variant="cta-dark" size="lg" className="rounded-full px-8 shadow-lg hover:translate-y-[-2px] transition-all w-full md:w-auto">
                    Start Free Trial
                    <ChevronRight size={18} />
                  </Button>
                </Link>
                <span className="text-sm text-yapp-deep-navy/70">No credit card required</span>
              </div>
              
              {/* Key stats section - social proof */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-gray-200/50 mt-8">
                <div className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-yapp-deep-navy">15K+</p>
                  <p className="text-sm text-yapp-deep-navy/70">Active Users</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-yapp-deep-navy">8</p>
                  <p className="text-sm text-yapp-deep-navy/70">Platforms</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-2xl md:text-3xl font-bold text-yapp-deep-navy">4.9/5</p>
                  <p className="text-sm text-yapp-deep-navy/70">User Rating</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-xl transform rotate-2"></div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-80 transition duration-1000"></div>
                <img 
                  src="/lovable-uploads/3911b980-5e26-4666-8fac-1aaabccf13e8.png" 
                  alt="yappHQ Dashboard showing social media analytics and scheduling interface" 
                  className="relative rounded-lg shadow-xl transition-all duration-300 group-hover:scale-[1.01]"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms Section - with actual platform logos and better visual organization */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">Compatible With</span>
            <h2 className="text-3xl text-yapp-deep-navy font-semibold mt-2 mb-4">One Platform, All Your Social Media</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Connect once and publish everywhere. Schedule content across all major social platforms with just a few clicks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: "Instagram", icon: Instagram, color: "bg-gradient-to-r from-purple-500 to-pink-500", description: "Photos & Stories" },
              { name: "Facebook", icon: Facebook, color: "bg-blue-600", description: "Posts & Groups" },
              { name: "X / Twitter", icon: Twitter, color: "bg-black", description: "Tweets & Threads" },
              { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700", description: "Business Updates" },
              { name: "TikTok", icon: MessageCircle, color: "bg-black", description: "Short Videos" },
              { name: "YouTube", icon: Youtube, color: "bg-red-500", description: "Video Content" },
              { name: "Pinterest", icon: PinIcon, color: "bg-red-600", description: "Pins & Boards" },
              { name: "Threads", icon: Send, color: "bg-gray-800", description: "Text Updates" }
            ].map((platform, index) => (
              <div 
                key={platform.name} 
                className="flex flex-col items-center justify-center p-5 transition-all rounded-lg bg-white shadow-sm hover:shadow-md border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-3 ${platform.color}`}>
                  <platform.icon size={28} />
                </div>
                <p className="text-yapp-deep-navy font-medium">{platform.name}</p>
                <p className="text-xs text-gray-500 mt-1">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights - with better visual hierarchy and specific benefits */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <span className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">From Zero to 1M+ Followers</span>
            <h2 className="text-3xl text-yapp-deep-navy font-semibold mt-2 mb-4">How yappHQ Transforms Your Social Media</h2>
            <p className="text-yapp-deep-navy/80 text-lg max-w-3xl mx-auto">
              Our suite of tools helps you build consistency, analyze performance, and grow your audience strategically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <Card className="bg-white border-0 shadow-md overflow-hidden group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-3">Smart Scheduling</h3>
                <p className="text-yapp-deep-navy/70">
                  Our AI analyzes the best times to post based on your audience's activity patterns, increasing engagement by up to 43%.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <Check size={16} className="mr-2 text-green-600" /> Bulk scheduling across platforms
                  </li>
                  <li className="flex items-center text-sm">
                    <Check size={16} className="mr-2 text-green-600" /> Content calendar view
                  </li>
                  <li className="flex items-center text-sm">
                    <Check size={16} className="mr-2 text-green-600" /> Time zone adaptation
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md overflow-hidden group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-3">In-depth Analytics</h3>
                <p className="text-yapp-deep-navy/70">
                  Get actionable insights on content performance, audience growth, and engagement metrics all in one dashboard.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <Check size={16} className="mr-2 text-green-600" /> Customizable reports
                  </li>
                  <li className="flex items-center text-sm">
                    <Check size={16} className="mr-2 text-green-600" /> Competitor analysis
                  </li>
                  <li className="flex items-center text-sm">
                    <Check size={16} className="mr-2 text-green-600" /> Performance tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md overflow-hidden group hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-3">AI Content Assistant</h3>
                <p className="text-yapp-deep-navy/70">
                  Writer's block? Our AI generates platform-specific content suggestions based on trending topics and your brand voice.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <Check size={16} className="mr-2 text-green-600" /> Hashtag recommendations
                  </li>
                  <li className="flex items-center text-sm">
                    <Check size={16} className="mr-2 text-green-600" /> Caption generation
                  </li>
                  <li className="flex items-center text-sm">
                    <Check size={16} className="mr-2 text-green-600" /> Content idea prompts
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section - adding social proof */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">Customer Success Stories</span>
            <h2 className="text-3xl text-yapp-deep-navy font-semibold mt-2 mb-4">Trusted By Creators & Brands</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Join thousands of content creators and brands who've transformed their social media strategy with yappHQ.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "Marketing Director",
                company: "Tech Innovations",
                quote: "yappHQ has transformed our social media strategy. We've seen a 40% increase in engagement since switching.",
                avatar: "https://i.pravatar.cc/100?img=1",
                rating: 5
              },
              {
                name: "Michael Chen",
                title: "Content Creator",
                company: "2.3M followers",
                quote: "I manage 7 social accounts by myself, and yappHQ makes it feel effortless. The time I save is invaluable.",
                avatar: "https://i.pravatar.cc/100?img=2",
                rating: 5
              },
              {
                name: "Emma Roberts",
                title: "Social Media Manager",
                company: "Global Retail",
                quote: "The analytics alone are worth the price. We finally understand which content works and why.",
                avatar: "https://i.pravatar.cc/100?img=3",
                rating: 4
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s profile picture`}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      loading="lazy"
                    />
                    <div>
                      <p className="font-medium text-yapp-deep-navy">{testimonial.name}</p>
                      <p className="text-sm text-yapp-deep-navy/70">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-yapp-deep-navy/80 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Case Study / Success Story - additional social proof */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">Success Story</span>
                <h3 className="text-2xl font-medium text-yapp-deep-navy mt-2 mb-4">From 10K to 500K followers in 6 months</h3>
                <p className="text-yapp-deep-navy/80 mb-4">
                  Fashion brand NeoStyle used yappHQ's scheduling and analytics to consistently post trending content at optimal times, resulting in exponential growth across Instagram and TikTok.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <div>
                    <p className="text-3xl font-bold text-yapp-deep-navy">12x</p>
                    <p className="text-sm text-yapp-deep-navy/70">ROI on social campaigns</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-yapp-deep-navy">+500%</p>
                    <p className="text-sm text-yapp-deep-navy/70">Engagement rate</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-yapp-deep-navy">-15</p>
                    <p className="text-sm text-yapp-deep-navy/70">Hours saved weekly</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-video bg-white p-3 rounded-xl shadow-md">
                  <div className="bg-gray-100 rounded-lg flex items-center justify-center h-full">
                    <p className="text-center text-gray-500">Growth chart visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - with better toggle and clearer value proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="bg-orange-50 text-orange-700 text-xs font-medium px-3 py-1 rounded-full">Simple & Transparent</span>
            <h2 className="text-3xl text-yapp-deep-navy font-semibold mt-2 mb-4">Choose Your Perfect Plan</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              All plans include our core features. Choose the one that fits your needs and scale as you grow.
            </p>
            
            <div className="inline-flex items-center rounded-full bg-white p-1 my-8 shadow-sm">
              <button 
                className={cn(
                  "px-4 py-2 rounded-full transition-all font-medium",
                  activeTab === "monthly" 
                    ? "bg-yapp-deep-navy text-white" 
                    : "text-yapp-deep-navy hover:bg-gray-100"
                )} 
                type="button"
                onClick={() => setActiveTab("monthly")}
              >
                Monthly
              </button>
              <button 
                className={cn(
                  "px-4 py-2 rounded-full transition-all font-medium",
                  activeTab === "yearly" 
                    ? "bg-yapp-deep-navy text-white" 
                    : "text-yapp-deep-navy hover:bg-gray-100"
                )} 
                type="button"
                onClick={() => setActiveTab("yearly")}
              >
                Yearly <span className="text-xs text-green-600 font-medium ml-1">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
              <div className="p-6">
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-2">Free</h3>
                <div className="flex items-baseline mt-4 mb-6">
                  <span className="text-4xl font-bold text-yapp-deep-navy">$0</span>
                  <span className="text-yapp-deep-navy/70 ml-1">/month</span>
                </div>
                <p className="text-sm text-yapp-deep-navy/70 mb-6">Perfect for individuals just getting started</p>
                <Button variant="outline" className="w-full">Get Started</Button>
              </div>
              <div className="border-t border-gray-100 px-6 py-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-yapp-deep-navy">
                    <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>3 social profiles</span>
                  </li>
                  <li className="flex items-center text-sm text-yapp-deep-navy">
                    <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>10 scheduled posts</span>
                  </li>
                  <li className="flex items-center text-sm text-yapp-deep-navy">
                    <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center text-sm text-yapp-deep-navy/60">
                    <X size={16} className="mr-2 text-gray-400 flex-shrink-0" />
                    <span>Content calendar</span>
                  </li>
                  <li className="flex items-center text-sm text-yapp-deep-navy/60">
                    <X size={16} className="mr-2 text-gray-400 flex-shrink-0" />
                    <span>Team collaboration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-yapp-deep-navy relative transform hover:scale-105 transition-all">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-xs font-bold px-4 py-1 text-white clip-tag">
                POPULAR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-2">Pro</h3>
                <div className="flex items-baseline mt-4 mb-6">
                  <span className="text-4xl font-bold text-yapp-deep-navy">${activeTab === "yearly" ? "$15.99" : "$19.99"}</span>
                  <span className="text-yapp-deep-navy/70 ml-1">/month</span>
                </div>
                <p className="text-sm text-yapp-deep-navy/70 mb-6">Great for creators and small businesses</p>
                <Button variant="cta-dark" className="w-full shadow-md">Start Free Trial</Button>
              </div>
              <div className="border-t border-gray-100 px-6 py-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-yapp-deep-navy">
                    <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>Unlimited social profiles</span>
                  </li>
                  <li className="flex items-center text-sm text-yapp-deep-navy">
                    <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>Unlimited scheduled posts</span>
                  </li>
                  <li className="flex items-center text-sm text-yapp-deep-navy">
                    <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>Advanced analytics & reports</span>
                  </li>
                  <li className="flex items-center text-sm text-yapp-deep-navy">
                    <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>Content calendar</span>
                  </li>
                  <li className="flex items-center text-sm text-yapp-deep-navy/60">
                    <X size={16} className="mr-2 text-gray-400 flex-shrink-0" />
                    <span>Multi-user access</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Team Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
              <div className="p-6">
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-2">Team</h3>
                <div className="flex items-baseline mt-4 mb-6">
                  <span className="text-4xl font-bold text-yapp-deep-navy">${activeTab === "yearly" ? "$39.99" : "$49.99"}</span>
                  <span className="text-yapp-deep-navy/70 ml-1">/month</span>
                </div>
                <p className="text-sm text-yapp-deep-navy/70 mb-6">Ideal for agencies and larger teams</p>
                <Button variant="outline" className="w-full">Start Free Trial</Button>
              </div>
              <div className="border-t border-gray-100 px-6 py-4">
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-yapp-deep-navy">
                    <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>Everything in Pro</span>
                  </li>
                  <li className="flex items-center text-sm text-yapp-deep-navy">
                    <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>5 team members</span>
                  </li>
                  <li className="flex items-center text-sm text-yapp-deep-navy">
                    <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>Custom reporting</span>
                  </li>
                  <li className="flex items-center text-sm text-yapp-deep-navy">
                    <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center text-sm text-yapp-deep-navy">
                    <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                    <span>Advanced permissions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section - with better visual organization */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="bg-teal-50 text-teal-700 text-xs font-medium px-3 py-1 rounded-full">Comparison</span>
            <h2 className="text-3xl text-yapp-deep-navy font-semibold mt-2 mb-4">Why Choose yappHQ?</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              See how we stack up against other social media management tools
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="min-w-[180px] text-yapp-deep-navy font-medium">Features</TableHead>
                  <TableHead className="text-yapp-deep-navy font-medium bg-blue-50">
                    <div className="flex flex-col">
                      <span className="text-lg">yappHQ</span>
                      <span className="text-xs font-normal text-blue-600">Our platform</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-gray-600">
                    <div className="flex flex-col">
                      <span className="text-base">Buffer</span>
                      <span className="text-xs font-normal text-gray-500">Competitor</span>
                    </div>
                  </TableHead>
                  <TableHead className="text-gray-600">
                    <div className="flex flex-col">
                      <span className="text-base">Hootsuite</span>
                      <span className="text-xs font-normal text-gray-500">Competitor</span>
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-yapp-deep-navy">Price (Monthly)</TableCell>
                  <TableCell className="font-medium text-yapp-deep-navy bg-blue-50/30">From $0</TableCell>
                  <TableCell>From $6</TableCell>
                  <TableCell>From $99</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-yapp-deep-navy">Supported Platforms</TableCell>
                  <TableCell className="font-medium text-yapp-deep-navy bg-blue-50/30">9</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>8</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-yapp-deep-navy">Unlimited Scheduling</TableCell>
                  <TableCell className="bg-blue-50/30">
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-yapp-deep-navy">Advanced Analytics</TableCell>
                  <TableCell className="bg-blue-50/30">
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-yapp-deep-navy">Team Collaboration</TableCell>
                  <TableCell className="bg-blue-50/30">
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-yapp-deep-navy">Content Calendar</TableCell>
                  <TableCell className="bg-blue-50/30">
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-yapp-deep-navy">Content Library</TableCell>
                  <TableCell className="bg-blue-50/30">
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <X size={18} className="text-gray-400 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-yapp-deep-navy">AI Content Suggestions</TableCell>
                  <TableCell className="bg-blue-50/30">
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <X size={18} className="text-gray-400 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <X size={18} className="text-gray-400 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50 transition-colors">
                  <TableCell className="font-medium text-yapp-deep-navy">Free Trial</TableCell>
                  <TableCell className="font-medium text-yapp-deep-navy bg-blue-50/30">30 days</TableCell>
                  <TableCell>14 days</TableCell>
                  <TableCell>30 days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section - with better styled accordion */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="bg-yellow-50 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">Questions & Answers</span>
            <h2 className="text-3xl text-yapp-deep-navy font-semibold mt-2 mb-4">Frequently Asked Questions</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Get answers to the most common questions about yappHQ
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left hover:text-blue-600 transition-colors">
                  Which social media platforms are supported?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  yappHQ supports Instagram, Facebook, X (Twitter), LinkedIn, TikTok, YouTube, Pinterest, and Threads. We're constantly adding support for new platforms and currently working on Bluesky integration.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left hover:text-blue-600 transition-colors">
                  Is there a limit to how many posts I can schedule?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  The Free plan includes up to 10 scheduled posts. Pro and Team plans include unlimited scheduling across all your connected platforms. If you have specific high-volume needs, please contact our sales team for custom enterprise solutions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left hover:text-blue-600 transition-colors">
                  Can I try yappHQ before committing?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  Yes! We offer a 30-day free trial on all paid plans with full access to all features, no credit card required. If you need more time to evaluate, our customer success team can extend your trial on a case-by-case basis.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left hover:text-blue-600 transition-colors">
                  What happens if I exceed my plan limits?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  We'll notify you when you're approaching your plan limits. You can choose to upgrade your plan at any time to avoid disruptions to your scheduling. We also offer a 3-day grace period if you temporarily exceed limits, ensuring your social media presence stays active.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left hover:text-blue-600 transition-colors">
                  Can I cancel my subscription anytime?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  Yes, you can cancel your subscription at any time through your account settings. If you cancel, you'll still have access to your plan until the end of your billing period. We don't offer prorated refunds for partial months, but you can downgrade to our free plan and keep your data.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left hover:text-blue-600 transition-colors">
                  How does the AI content assistant work?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  Our AI assistant analyzes your past content performance, audience engagement patterns, and trending topics in your industry to suggest content ideas tailored to your brand voice. It can help with caption generation, hashtag recommendations, and even create content variants optimized for different platforms.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section - with better visual impact */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-white font-semibold mb-4">Ready to streamline your social media?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Join over 15,000 marketers who have simplified their workflow with yappHQ
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/signup">
                <Button variant="cta" size="lg" className="rounded-full px-8 shadow-xl hover:shadow-2xl transition-all font-semibold">
                  Start your free trial
                  <ArrowRight size={16} />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white/10 hover:text-white">
                  Request a demo
                </Button>
              </Link>
            </div>
            <p className="text-white/80 text-sm mt-4">
              30 days free. No credit card required.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer - with better organization and accessibility */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <YappLogo className="mb-4" />
              <p className="text-yapp-deep-navy/70 max-w-xs">
                The all-in-one social media management platform for creators, businesses, and agencies.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Facebook">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Twitter">
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="Instagram">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:col-span-3">
              <div>
                <h3 className="font-medium text-yapp-deep-navy mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link to="/features" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Features</Link></li>
                  <li><Link to="/pricing" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Pricing</Link></li>
                  <li><Link to="/integrations" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Integrations</Link></li>
                  <li><Link to="/roadmap" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Roadmap</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-yapp-deep-navy mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><Link to="/blog" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Blog</Link></li>
                  <li><Link to="/help" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Help Center</Link></li>
                  <li><Link to="/guides" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Guides</Link></li>
                  <li><Link to="/api" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">API</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-yapp-deep-navy mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link to="/about" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">About</Link></li>
                  <li><Link to="/contact" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Contact</Link></li>
                  <li><Link to="/careers" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Careers</Link></li>
                  <li><Link to="/partners" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Partners</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 opacity-30" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-yapp-deep-navy/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} yappHQ. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <Link to="/terms" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy text-sm transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy text-sm transition-colors">
                Privacy
              </Link>
              <Link to="/security" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy text-sm transition-colors">
                Security
              </Link>
              <Link to="/sitemap" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Add structured data for SEO - hidden from users but visible to search engines */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "yappHQ",
          "description": "Social media management platform for scheduling posts, analytics, and content planning",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })
      }} />
    </div>
  );
};

export default Home;
