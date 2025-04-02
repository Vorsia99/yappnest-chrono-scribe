
import React from 'react';
import { Link } from 'react-router-dom';
import YappLogo from '@/components/YappLogo';
import { Button } from '@/components/ui/button';
import { Calendar, BarChart3, LineChart, Send, Check, X, Instagram, Facebook, Linkedin, MessageCircle as TikTok, Youtube, PinIcon as Pinterest, Twitter as XIcon } from 'lucide-react';
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

const Home = () => {
  const yearlyDiscount = 0.2; // 20% discount for yearly plans
  
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
            <Link to="/signup">
              <Button variant="cta-dark" className="rounded-full px-6">
                Sign up
              </Button>
            </Link>
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
                Schedule posts, manage your content lineup, and track performance—effortlessly.
              </p>
              <div className="pt-4">
                <Link to="/signup">
                  <Button variant="cta-dark" size="lg" className="rounded-full px-8">
                    Get started
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/lovable-uploads/3911b980-5e26-4666-8fac-1aaabccf13e8.png" 
                  alt="yappHQ Dashboard Demo" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Platforms Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-yapp-deep-navy font-serif mb-4">Supported Platforms</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Manage all your social media accounts from one place. Connect once, publish everywhere.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Instagram", icon: Instagram, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
              { name: "Facebook", icon: Facebook, color: "bg-blue-600" },
              { name: "X / Twitter", icon: XIcon, color: "bg-black" },
              { name: "LinkedIn", icon: Linkedin, color: "bg-blue-700" },
              { name: "TikTok", icon: TikTok, color: "bg-black" },
              { name: "YouTube", icon: Youtube, color: "bg-red-500" },
              { name: "Pinterest", icon: Pinterest, color: "bg-red-600" },
              { name: "Threads", icon: Send, color: "bg-gray-800" }
            ].map((platform) => (
              <div key={platform.name} className="flex flex-col items-center justify-center p-4 transition-all hover:scale-105">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white mb-3 ${platform.color}`}>
                  <platform.icon size={28} />
                </div>
                <p className="text-yapp-deep-navy font-medium">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 0 to 1M+ Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-yapp-deep-navy font-serif mb-4">From 0 to 1M+ Followers</h2>
            <p className="text-yapp-deep-navy/80 text-xl max-w-3xl mx-auto">
              The journey to social media success begins with consistency. Let us help you build your audience and reach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="bg-white border-0 shadow-md overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yapp-deep-navy flex items-center justify-center text-white mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-yapp-deep-navy mb-2">Consistent Scheduling</h3>
                <p className="text-yapp-deep-navy/80">
                  Post consistently across all platforms without the daily hassle. Schedule once, reach everywhere.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yapp-deep-navy flex items-center justify-center text-white mb-4">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-yapp-deep-navy mb-2">Data-Driven Growth</h3>
                <p className="text-yapp-deep-navy/80">
                  Learn what works with detailed analytics. Optimize your content strategy based on performance data.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md overflow-hidden">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yapp-deep-navy flex items-center justify-center text-white mb-4">
                  <LineChart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-medium text-yapp-deep-navy mb-2">Scale Your Reach</h3>
                <p className="text-yapp-deep-navy/80">
                  As your audience grows, our tools scale with you. Go from zero followers to millions with the same platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-yapp-deep-navy font-serif mb-4">Trusted By</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Join thousands of content creators and brands who trust yappHQ for their social media management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                title: "Marketing Director",
                company: "Tech Innovations",
                quote: "yappHQ has transformed our social media strategy. We've seen a 40% increase in engagement since switching.",
                avatar: "https://i.pravatar.cc/100?img=1"
              },
              {
                name: "Michael Chen",
                title: "Content Creator",
                company: "2.3M followers",
                quote: "I manage 7 social accounts by myself, and yappHQ makes it feel effortless. The time I save is invaluable.",
                avatar: "https://i.pravatar.cc/100?img=2"
              },
              {
                name: "Emma Roberts",
                title: "Social Media Manager",
                company: "Global Retail",
                quote: "The analytics alone are worth the price. We finally understand which content works and why.",
                avatar: "https://i.pravatar.cc/100?img=3"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-100 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium text-yapp-deep-navy">{testimonial.name}</p>
                      <p className="text-sm text-yapp-deep-navy/70">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-yapp-deep-navy/80 italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-yapp-deep-navy font-serif mb-4">Simple, Transparent Pricing</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Choose the plan that's right for you. All plans include access to all supported platforms.
            </p>
            
            <div className="inline-flex items-center rounded-full bg-white p-1 my-8 shadow-sm">
              <button 
                className="px-4 py-2 rounded-full bg-yapp-deep-navy text-white" 
                type="button"
              >
                Monthly
              </button>
              <button 
                className="px-4 py-2 rounded-full text-yapp-deep-navy" 
                type="button"
              >
                Yearly <span className="text-xs text-green-600 font-medium ml-1">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
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
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-yapp-deep-navy relative">
              <div className="bg-yapp-deep-navy text-white text-xs font-bold px-3 py-1 absolute top-0 right-0">
                POPULAR
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-2">Pro</h3>
                <div className="flex items-baseline mt-4 mb-6">
                  <span className="text-4xl font-bold text-yapp-deep-navy">$19.99</span>
                  <span className="text-yapp-deep-navy/70 ml-1">/month</span>
                </div>
                <p className="text-sm text-yapp-deep-navy/70 mb-6">Great for creators and small businesses</p>
                <Button variant="cta-dark" className="w-full">Start Free Trial</Button>
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
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-medium text-yapp-deep-navy mb-2">Team</h3>
                <div className="flex items-baseline mt-4 mb-6">
                  <span className="text-4xl font-bold text-yapp-deep-navy">$49.99</span>
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

      {/* Why YappHQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-yapp-deep-navy font-serif mb-4">Why Choose yappHQ?</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              See how we compare to other social media management tools
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[180px] text-yapp-deep-navy">Features</TableHead>
                  <TableHead className="text-yapp-deep-navy font-medium">yappHQ</TableHead>
                  <TableHead className="text-gray-600">Buffer</TableHead>
                  <TableHead className="text-gray-600">Hootsuite</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-yapp-deep-navy">Price (Monthly)</TableCell>
                  <TableCell className="font-medium text-yapp-deep-navy">From $0</TableCell>
                  <TableCell>From $6</TableCell>
                  <TableCell>From $99</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-yapp-deep-navy">Supported Platforms</TableCell>
                  <TableCell className="font-medium text-yapp-deep-navy">9</TableCell>
                  <TableCell>6</TableCell>
                  <TableCell>8</TableCell>
                </TableRow>
                <TableRow>
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
                <TableRow>
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
                <TableRow>
                  <TableCell className="font-medium text-yapp-deep-navy">Team Collaboration</TableCell>
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
                <TableRow>
                  <TableCell className="font-medium text-yapp-deep-navy">Content Calendar</TableCell>
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
                <TableRow>
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
                <TableRow>
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
                <TableRow>
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
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-yapp-deep-navy font-serif mb-4">Frequently Asked Questions</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Everything you need to know about yappHQ
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left">
                  Which social media platforms are supported?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  yappHQ supports Instagram, Facebook, X (Twitter), LinkedIn, TikTok, YouTube, Pinterest, Threads, and Bluesky. We're constantly adding support for new platforms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left">
                  Is there a limit to how many posts I can schedule?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  The Free plan includes up to 10 scheduled posts. Pro and Team plans include unlimited scheduling across all your connected platforms.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left">
                  Can I try yappHQ before committing?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  Yes! We offer a 30-day free trial on all paid plans, no credit card required. You'll have full access to all features during your trial period.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left">
                  What happens if I exceed my plan limits?
                </AccordionTrigger>
                <AccordionContent className="text-yapp-deep-navy/80 pb-4">
                  We'll notify you when you're approaching your plan limits. You can choose to upgrade your plan at any time to avoid disruptions to your scheduling.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-200">
                <AccordionTrigger className="text-yapp-deep-navy py-4 font-medium text-left">
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
      <section className="bg-yapp-deep-navy py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl text-white font-serif mb-4">Ready to streamline your social media?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who have simplified their workflow with yappHQ
          </p>
          <div className="flex flex-col items-center">
            <Link to="/signup">
              <Button variant="cta" size="lg" className="rounded-full px-8">
                Start your free trial
              </Button>
            </Link>
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
              © {new Date().getFullYear()} yappHQ. All rights reserved.
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
