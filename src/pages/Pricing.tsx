import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import YappLogo from '@/components/YappLogo';
import { Button } from '@/components/ui/button';
import {
  Check,
  X,
  CreditCard,
  Shield,
  Zap,
  Users,
  BarChart3,
  Clock,
  MessageSquare
} from 'lucide-react';
import {
  Card,
  CardContent
} from "@/components/ui/card";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import PlanSelector from '@/components/PlanSelector';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const yearlyDiscount = 0.2; // 20% discount for yearly plans
  
  const calculateYearlyPrice = (monthlyPrice: number) => {
    const yearlyPrice = monthlyPrice * 12 * (1 - yearlyDiscount);
    return (yearlyPrice / 12).toFixed(2);
  };
  
  const plans = [
    {
      name: "Free",
      price: 0,
      description: "Perfect for individuals just getting started",
      features: [
        { name: "3 social profiles", included: true },
        { name: "10 scheduled posts", included: true },
        { name: "Basic analytics", included: true },
        { name: "Content calendar", included: false },
        { name: "Team collaboration", included: false }
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: 19.99,
      description: "Great for creators and small businesses",
      features: [
        { name: "Unlimited social profiles", included: true },
        { name: "Unlimited scheduled posts", included: true },
        { name: "Advanced analytics & reports", included: true },
        { name: "Content calendar", included: true },
        { name: "Multi-user access", included: false }
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Team",
      price: 49.99,
      description: "Ideal for agencies and larger teams",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "5 team members", included: true },
        { name: "Custom reporting", included: true },
        { name: "Priority support", included: true },
        { name: "Advanced permissions", included: true }
      ],
      cta: "Start Free Trial",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-yapp-pale-blue">
      {/* Navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/">
            <YappLogo />
          </Link>
          <div className="flex items-center gap-8">
            <Link to="/features" className="text-yapp-deep-navy hover:opacity-80">
              Features
            </Link>
            <Link to="/pricing" className="text-yapp-deep-navy font-medium hover:opacity-80">
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

      {/* Header */}
      <header className="py-16 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl text-yapp-deep-navy mb-6 text-center">Simple, Transparent Pricing</h1>
          <p className="text-xl text-yapp-deep-navy/80 max-w-2xl mx-auto">
            Choose the plan that's right for you. All plans include access to all supported platforms.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-yapp-deep-navy' : 'text-yapp-deep-navy/60'}`}>
              Monthly
            </span>
            <div className="flex items-center">
              <Switch 
                checked={billingCycle === 'yearly'}
                onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
              />
            </div>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-yapp-deep-navy' : 'text-yapp-deep-navy/60'}`}>
              Yearly <span className="text-sm text-green-600 font-medium">Save 20%</span>
            </span>
          </div>
        </div>
      </header>

      {/* Pricing Grid */}
      <section className="py-8 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl text-yapp-deep-navy font-serif mb-8 text-center">Choose Your Perfect Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`bg-white rounded-lg shadow-md overflow-hidden border ${
                  plan.popular ? 'border-2 border-yapp-deep-navy relative' : 'border-gray-100'
                }`}
              >
                {plan.popular && (
                  <div className="bg-yapp-deep-navy text-white text-xs font-bold px-3 py-1 absolute top-0 right-0">
                    POPULAR
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-medium text-yapp-deep-navy mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mt-4 mb-6">
                    <span className="text-4xl font-bold text-yapp-deep-navy">
                      {plan.price === 0 ? 'Free' : 
                      `$${billingCycle === 'yearly' ? calculateYearlyPrice(plan.price) : plan.price}`}
                    </span>
                    <span className="text-yapp-deep-navy/70 ml-1">/month</span>
                  </div>
                  <p className="text-sm text-yapp-deep-navy/70 mb-6">{plan.description}</p>
                  <Button 
                    variant={plan.popular ? "cta-dark" : "outline"} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/signup">{plan.cta}</Link>
                  </Button>
                </div>
                <div className="border-t border-gray-100 px-6 py-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-yapp-deep-navy">
                        {feature.included ? (
                          <Check size={16} className="mr-2 text-green-600 flex-shrink-0" />
                        ) : (
                          <X size={16} className="mr-2 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={!feature.included ? 'text-yapp-deep-navy/60' : ''}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-yapp-deep-navy font-serif mb-4 text-center">One Platform, All Your Social Media</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              All plans come with these powerful features to help you grow your social media presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yapp-deep-navy/10 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-yapp-deep-navy" />
                </div>
                <h3 className="text-lg font-medium text-yapp-deep-navy mb-2">All Major Platforms</h3>
                <p className="text-yapp-deep-navy/80">
                  Connect and manage content across Instagram, Facebook, X/Twitter, LinkedIn, TikTok, and more.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yapp-deep-navy/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-yapp-deep-navy" />
                </div>
                <h3 className="text-lg font-medium text-yapp-deep-navy mb-2">Secure & Reliable</h3>
                <p className="text-yapp-deep-navy/80">
                  Your data and account connections are always secure with enterprise-grade security.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yapp-deep-navy/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-yapp-deep-navy" />
                </div>
                <h3 className="text-lg font-medium text-yapp-deep-navy mb-2">Fast & Intuitive</h3>
                <p className="text-yapp-deep-navy/80">
                  Our platform is designed for speed and ease of use, so you can focus on creating great content.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yapp-deep-navy/10 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-yapp-deep-navy" />
                </div>
                <h3 className="text-lg font-medium text-yapp-deep-navy mb-2">In-depth Analytics</h3>
                <p className="text-yapp-deep-navy/80">
                  Understand your audience and content performance with detailed analytics and reporting.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yapp-deep-navy/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-yapp-deep-navy" />
                </div>
                <h3 className="text-lg font-medium text-yapp-deep-navy mb-2">Team Collaboration</h3>
                <p className="text-yapp-deep-navy/80">
                  Collaborate with your team to create, review, and schedule content together.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-yapp-deep-navy/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-yapp-deep-navy" />
                </div>
                <h3 className="text-lg font-medium text-yapp-deep-navy mb-2">Priority Support</h3>
                <p className="text-yapp-deep-navy/80">
                  Get help when you need it with our responsive customer support team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trusted by Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-yapp-deep-navy font-serif mb-4 text-center">Trusted by Creators & Brands</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Join thousands of satisfied users who've transformed their social media workflow.
            </p>
          </div>
        </div>
      </section>

      {/* How yappHQ Transforms Section */}
      <section className="py-16 bg-yapp-pale-blue">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-yapp-deep-navy font-serif mb-4 text-center">How yappHQ Transforms Your Social Media</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Our comprehensive platform streamlines your entire social media workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose yappHQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-yapp-deep-navy font-serif mb-4 text-center">Why Choose yappHQ</h2>
            <p className="text-yapp-deep-navy/80 max-w-2xl mx-auto">
              Our platform is designed to make social media management simple and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-yapp-deep-navy mb-2">Easy to Use</h3>
                <p className="text-yapp-deep-navy/80">
                  Our intuitive interface makes scheduling and managing content simple.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-yapp-deep-navy mb-2">Time-Saving</h3>
                <p className="text-yapp-deep-navy/80">
                  Batch your content creation and scheduling to save hours each week.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-yapp-deep-navy font-serif mb-4 text-center">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I change plans at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes! We offer a 30-day free trial on all paid plans with no credit card required."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support PayPal."
              },
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 14-day money-back guarantee if you're not satisfied with our service."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-yapp-deep-navy mb-2">{faq.question}</h3>
                <p className="text-yapp-deep-navy/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Updated with purple gradient background */}
      <section className="bg-gradient-to-br from-purple-900 to-indigo-900 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl text-white font-serif mb-4 text-center">Ready to grow your social presence?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who have simplified their workflow with yappHQ
          </p>
          <Button variant="cta" size="lg" className="rounded-full px-8" asChild>
            <Link to="/signup">Start your free trial</Link>
          </Button>
          <p className="text-white/70 text-sm mt-4">
            30 days free. No credit card required.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="border-t border-yapp-deep-navy/10 pt-8 flex flex-col md:flex-row justify-between items-center">
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

export default Pricing;
