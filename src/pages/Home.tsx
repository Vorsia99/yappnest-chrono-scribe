
import React, { useState } from 'react';
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
  MessageCircle as TikTok, 
  Youtube, 
  ArrowRight, 
  ChevronRight,
  Globe,
  Zap,
  PenTool,
  PinIcon as Pinterest, 
  Twitter as XIcon,
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
import { Badge } from '@/components/ui/badge';
import { InsightCard } from '@/components/analytics/InsightCard';

const Home = () => {
  const yearlyDiscount = 0.2; // 20% discount for yearly plans
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  
  const testimonials = [
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
  ];

  const platforms = [
    { name: "Instagram", icon: Instagram, color: "bg-gradient-to-r from-purple-500 to-pink-500", users: "1B+" },
    { name: "Facebook", icon: Facebook, color: "bg-blue-600", users: "2B+" },
    { name: "X / Twitter", icon: XIcon, color: "bg-black", users: "300M+" },
    { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700", users: "850M+" },
    { name: "TikTok", icon: TikTok, color: "bg-black", users: "1B+" },
    { name: "YouTube", icon: Youtube, color: "bg-red-500", users: "2B+" },
    { name: "Pinterest", icon: Pinterest, color: "bg-red-600", users: "400M+" },
    { name: "Threads", icon: Send, color: "bg-gray-800", users: "100M+" }
  ];

  const renderRatingStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} size={16} className={`${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
    ));
  };

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };
  
  const calculateYearlyPrice = (monthlyPrice: number) => {
    const yearlyPrice = monthlyPrice * 12 * (1 - yearlyDiscount);
    return (yearlyPrice / 12).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-yapp-pale-blue">
      {/* Navigation */}
      <nav className="py-4 sticky top-0 z-50 bg-yapp-pale-blue/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <YappLogo />
            <span className="text-yapp-deep-navy font-medium text-xl hidden sm:inline">yappHQ</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/features" className="text-yapp-deep-navy hover:opacity-80 transition-opacity">
              Features
            </Link>
            <Link to="/pricing" className="text-yapp-deep-navy hover:opacity-80 transition-opacity">
              Pricing
            </Link>
            <Link to="/dashboard" className="text-yapp-deep-navy hover:opacity-80 transition-opacity">
              Dashboard
            </Link>
            <Link to="/signup">
              <Button variant="cta-dark" className="rounded-full px-6 animate-fade-in">
                Start Free
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-yapp-deep-navy">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6 z-10">
              <Badge className="bg-indigo-100 text-indigo-800 mb-4 hover:bg-indigo-200 transition-colors">
                New: AI-powered content suggestions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-yapp-deep-navy font-bold max-w-xl leading-tight">
                Social media on <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">autopilot</span>
              </h1>
              <p className="text-xl text-yapp-deep-navy/80 max-w-xl">
                Schedule posts, manage your content lineup, and track performance—effortlessly across all major platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link to="/signup">
                  <Button variant="cta-dark" size="lg" className="rounded-full px-8 w-full sm:w-auto hover-scale">
                    Start your free trial
                  </Button>
                </Link>
                <Link to="/features">
                  <Button variant="outline" size="lg" className="rounded-full px-8 w-full sm:w-auto">
                    See how it works <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-yapp-deep-navy/60">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl blur-xl opacity-70"></div>
              <img 
                src="/lovable-uploads/3911b980-5e26-4666-8fac-1aaabccf13e8.png" 
                alt="yappHQ Dashboard Demo" 
                className="rounded-xl shadow-2xl relative z-10 hover-scale transition-all duration-300 border border-white/20"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 max-w-[200px] animate-fade-in">
                <p className="font-medium text-yapp-deep-navy text-sm">
                  "40% increase in engagement since using yappHQ!"
                </p>
                <div className="flex mt-2">
                  {renderRatingStars(5)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-yapp-deep-navy">10,000+</p>
              <p className="text-yapp-deep-navy/70">Active Users</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-yapp-deep-navy">5M+</p>
              <p className="text-yapp-deep-navy/70">Posts Scheduled</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-yapp-deep-navy">30%</p>
              <p className="text-yapp-deep-navy/70">Time Saved</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-yapp-deep-navy">99.9%</p>
              <p className="text-yapp-deep-navy/70">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section className="py-16 bg-gradient-to-b from-white to-yapp-pale-blue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-2">All Major Platforms</Badge>
            <h2 className="text-3xl text-yapp-deep-navy font-bold mb-4">Manage All Your Social Media</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Connect once, publish everywhere. Reach your audience where they are.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {platforms.map((platform) => (
              <div key={platform.name} className="flex flex-col items-center justify-center p-4 transition-all hover:scale-105 group">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-3 ${platform.color} shadow-lg group-hover:shadow-xl transition-all`}>
                  <platform.icon size={28} />
                </div>
                <p className="text-yapp-deep-navy font-medium">{platform.name}</p>
                <span className="text-sm text-yapp-deep-navy/60">{platform.users} users</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-24 bg-yapp-pale-blue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-2">Why Choose yappHQ</Badge>
            <h2 className="text-3xl text-yapp-deep-navy font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Our platform gives you all the tools you need to create, schedule, and analyze your social media content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <InsightCard
              title="Smart Scheduling"
              description="Schedule posts at optimal times based on your audience's activity patterns to maximize engagement."
              icon={<Calendar size={24} />}
              action="Learn More"
              actionVariant="outline"
              badge={{ text: "Time-Saving", color: "green" }}
            />
            <InsightCard
              title="AI Content Generation"
              description="Generate engaging content ideas and captions based on your brand voice and previous top-performing posts."
              icon={<PenTool size={24} />}
              action="Try Now"
              actionVariant="secondary"
              badge={{ text: "Popular", color: "blue" }}
            />
            <InsightCard
              title="Advanced Analytics"
              description="Get detailed insights into your content performance with beautiful, easy-to-understand charts and reports."
              icon={<BarChart3 size={24} />}
              action="View Demo"
              badge={{ text: "Data-Driven", color: "yellow" }}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/features">
              <Button variant="outline" size="lg" className="rounded-full animate-fade-in">
                Explore all features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-2">Success Stories</Badge>
            <h2 className="text-3xl text-yapp-deep-navy font-bold mb-4">Trusted By Thousands</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Join thousands of content creators and brands who trust yappHQ for their social media management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-100 rounded-bl-full -mt-0 -mr-0 opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-indigo-100"
                    />
                    <div>
                      <p className="font-medium text-yapp-deep-navy">{testimonial.name}</p>
                      <p className="text-sm text-yapp-deep-navy/70">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {renderRatingStars(testimonial.rating)}
                  </div>
                  <p className="text-yapp-deep-navy/80 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/testimonials">
              <Button variant="ghost" className="text-yapp-deep-navy hover:bg-indigo-50">
                Read more success stories <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-yapp-pale-blue to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-2">Simple Pricing</Badge>
            <h2 className="text-3xl text-yapp-deep-navy font-bold mb-4">Pick Your Perfect Plan</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Choose the plan that's right for you. All plans include access to all supported platforms.
            </p>
            
            <div className="inline-flex items-center rounded-full bg-white p-1 my-8 shadow-sm">
              <button 
                className={`px-4 py-2 rounded-full ${billingCycle === 'monthly' ? 'bg-yapp-deep-navy text-white' : 'text-yapp-deep-navy'} transition-colors`}
                type="button"
                onClick={toggleBillingCycle}
              >
                Monthly
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${billingCycle === 'yearly' ? 'bg-yapp-deep-navy text-white' : 'text-yapp-deep-navy'} transition-colors`}
                type="button"
                onClick={toggleBillingCycle}
              >
                Yearly <span className="text-xs text-green-600 font-medium ml-1">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-2">Free</h3>
                <div className="flex items-baseline mt-4 mb-6">
                  <span className="text-4xl font-bold text-yapp-deep-navy">$0</span>
                  <span className="text-yapp-deep-navy/70 ml-1">/month</span>
                </div>
                <p className="text-sm text-yapp-deep-navy/70 mb-6">Perfect for individuals just getting started</p>
                <Button variant="outline" className="w-full hover-scale">Get Started</Button>
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-yapp-deep-navy relative transform hover:scale-105 transition-transform">
              <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-3 py-1">
                POPULAR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-2">Pro</h3>
                <div className="flex items-baseline mt-4 mb-6">
                  <span className="text-4xl font-bold text-yapp-deep-navy">
                    ${billingCycle === 'monthly' ? '19.99' : calculateYearlyPrice(19.99)}
                  </span>
                  <span className="text-yapp-deep-navy/70 ml-1">/month</span>
                </div>
                <p className="text-sm text-yapp-deep-navy/70 mb-6">Great for creators and small businesses</p>
                <Button variant="cta-dark" className="w-full animate-pulse">Start Free Trial</Button>
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-2">Team</h3>
                <div className="flex items-baseline mt-4 mb-6">
                  <span className="text-4xl font-bold text-yapp-deep-navy">
                    ${billingCycle === 'monthly' ? '49.99' : calculateYearlyPrice(49.99)}
                  </span>
                  <span className="text-yapp-deep-navy/70 ml-1">/month</span>
                </div>
                <p className="text-sm text-yapp-deep-navy/70 mb-6">Ideal for agencies and larger teams</p>
                <Button variant="outline" className="w-full hover-scale">Start Free Trial</Button>
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

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-2">Comparison</Badge>
            <h2 className="text-3xl text-yapp-deep-navy font-bold mb-4">Why Choose yappHQ?</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              See how we compare to other social media management tools
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <Table className="w-full">
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="min-w-[180px] text-yapp-deep-navy">Features</TableHead>
                  <TableHead className="text-yapp-deep-navy font-medium bg-blue-50">yappHQ</TableHead>
                  <TableHead className="text-gray-600">Buffer</TableHead>
                  <TableHead className="text-gray-600">Hootsuite</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-yapp-deep-navy">Price (Monthly)</TableCell>
                  <TableCell className="font-medium text-yapp-deep-navy">From $0</TableCell>
                  <TableCell>From $6</TableCell>
                  <TableCell>From $99</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-yapp-deep-navy">Supported Platforms</TableCell>
                  <TableCell className="font-medium text-yapp-deep-navy">9</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>8</TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-yapp-deep-navy">Unlimited Scheduling</TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-yapp-deep-navy">Advanced Analytics</TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-yapp-deep-navy">Content Library</TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <X size={18} className="text-gray-400 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-yapp-deep-navy">AI Content Suggestions</TableCell>
                  <TableCell>
                    <Check size={18} className="text-green-600 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <X size={18} className="text-gray-400 mx-auto" />
                  </TableCell>
                  <TableCell>
                    <X size={18} className="text-gray-400 mx-auto" />
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-gray-50">
                  <TableCell className="font-medium text-yapp-deep-navy">Free Trial</TableCell>
                  <TableCell className="font-medium text-yapp-deep-navy">30 days</TableCell>
                  <TableCell>14 days</TableCell>
                  <TableCell>30 days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-yapp-pale-blue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="mb-2">Questions</Badge>
            <h2 className="text-3xl text-yapp-deep-navy font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Everything you need to know about yappHQ
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left hover:no-underline">
                  Which social media platforms are supported?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  yappHQ supports Instagram, Facebook, X (Twitter), LinkedIn, TikTok, YouTube, Pinterest, Threads, and Bluesky. We're constantly adding support for new platforms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left hover:no-underline">
                  Is there a limit to how many posts I can schedule?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  The Free plan includes up to 10 scheduled posts. Pro and Team plans include unlimited scheduling across all your connected platforms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left hover:no-underline">
                  Can I try yappHQ before committing?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  Yes! We offer a 30-day free trial on all paid plans, no credit card required. You'll have full access to all features during your trial period.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left hover:no-underline">
                  What happens if I exceed my plan limits?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  We'll notify you when you're approaching your plan limits. You can choose to upgrade your plan at any time to avoid disruptions to your scheduling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left hover:no-underline">
                  Can I cancel my subscription anytime?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your plan until the end of your billing period.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
        <div className="absolute inset-0 bg-grid-white/5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iLjUiIGQ9Ik0wIDYwaDYwbTAtNjBIMHY2MCIvPjwvZz48L3N2Zz4=')]"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl text-white font-bold mb-4 drop-shadow-md">Ready to streamline your social media?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who have simplified their workflow with yappHQ
          </p>
          <div className="flex flex-col items-center">
            <Link to="/signup">
              <Button variant="cta" size="lg" className="rounded-full px-8 hover-scale shadow-lg">
                Start your free trial
              </Button>
            </Link>
            <p className="text-white/90 text-sm mt-4">
              30 days free. No credit card required.
            </p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <YappLogo />
                <span className="text-yapp-deep-navy font-medium">yappHQ</span>
              </Link>
              <p className="text-yapp-deep-navy/70 max-w-xs">
                The all-in-one social media management platform for all major platforms.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors"><XIcon size={20} /></a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <div>
                <h3 className="font-medium text-yapp-deep-navy mb-4">Product</h3>
                <ul className="space-y-2">
                  <li><Link to="/features" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Features</Link></li>
                  <li><Link to="/pricing" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Pricing</Link></li>
                  <li><Link to="/analytics" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Analytics</Link></li>
                  <li><Link to="/integrations" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Integrations</Link></li>
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
                  <li><Link to="/legal" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors">Legal</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-yapp-deep-navy/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} yappHQ. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/terms" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-yapp-deep-navy/80 hover:text-yapp-deep-navy transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
