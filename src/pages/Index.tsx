
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, BarChart, MessageSquare, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#e6f2fa]">
      {/* Navigation */}
      <header className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg 
              width="40" 
              height="32" 
              viewBox="0 0 40 32" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#0c2f41]"
            >
              <path d="M11.5 4L4 11.5L11.5 19" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28.5 13L36 20.5L28.5 28" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 0L19 32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-2xl font-bold text-[#0c2f41]">YappHQ</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-[#0c2f41] hover:text-[#0c2f41]/80 font-medium">
              Features
            </Link>
            <Link to="/pricing" className="text-[#0c2f41] hover:text-[#0c2f41]/80 font-medium">
              Pricing
            </Link>
            <Link to="/dashboard">
              <Button className="rounded-full bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white px-6">
                Sign up
              </Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-[#0c2f41]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-[#0c2f41] leading-tight">
                Social media<br />on autopilot
              </h1>
              <p className="mt-6 text-xl text-[#0c2f41]/80 max-w-md">
                Schedule posts, manage your content lineup, and track performance—effortlessly.
              </p>
              <div className="mt-8">
                <Button className="rounded-full bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white px-8 py-6 text-lg">
                  Get started
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-[#0c2f41] to-[#0c2f41]/80 p-6">
                <div className="relative aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 rounded-full border-2 border-white/30"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center space-x-2 text-white">
                      <svg 
                        width="32" 
                        height="24" 
                        viewBox="0 0 40 32" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11.5 4L4 11.5L11.5 19" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M28.5 13L36 20.5L28.5 28" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 0L19 32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-xl font-bold">YappHQ</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 bg-[#0c2f41] text-white p-4 rounded">
                  <p className="font-medium">Advanced scheduling tools</p>
                  <p className="text-sm mt-1 opacity-80">Powerful queue management</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0c2f41]">
              Effortless social media management
            </h2>
            <p className="mt-4 text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              Powerful tools to automate your content workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="flex items-start space-x-6">
              <div className="mt-1 bg-white/80 p-3 rounded-lg">
                <Calendar className="h-8 w-8 text-[#0c2f41]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0c2f41]">Post scheduling</h3>
                <p className="mt-2 text-[#0c2f41]/80">
                  Plan and schedule posts in advance with ease
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="mt-1 bg-white/80 p-3 rounded-lg">
                <MessageSquare className="h-8 w-8 text-[#0c2f41]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0c2f41]">Content calendar</h3>
                <p className="mt-2 text-[#0c2f41]/80">
                  Visualize your scheduled posts in a calendar view
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="mt-1 bg-white/80 p-3 rounded-lg">
                <MessageCircle className="h-8 w-8 text-[#0c2f41]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0c2f41]">AI assistant</h3>
                <p className="mt-2 text-[#0c2f41]/80">
                  Generate engaging content ideas in moments
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="mt-1 bg-white/80 p-3 rounded-lg">
                <BarChart className="h-8 w-8 text-[#0c2f41]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0c2f41]">Analytics</h3>
                <p className="mt-2 text-[#0c2f41]/80">
                  Measure performance of your social campaigns
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/features" className="inline-flex items-center text-[#0c2f41] font-medium hover:underline">
              Learn more about our features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#0c2f41] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold">
              Ready to streamline your social media?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Join thousands of marketers who have simplified their workflow with YappHQ
            </p>
            <div className="mt-8">
              <Button className="rounded-full bg-white hover:bg-white/90 text-[#0c2f41] px-8 py-6 text-lg font-medium">
                Start your free trial
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0c2f41]/5 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <svg 
                width="32" 
                height="24" 
                viewBox="0 0 40 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#0c2f41]"
              >
                <path d="M11.5 4L4 11.5L11.5 19" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M28.5 13L36 20.5L28.5 28" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19 0L19 32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-bold text-[#0c2f41]">YappHQ</span>
            </div>
            <div className="flex space-x-8">
              <Link to="/features" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">
                Features
              </Link>
              <Link to="/pricing" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">
                Pricing
              </Link>
              <Link to="/about" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">
                About
              </Link>
              <Link to="/contact" className="text-[#0c2f41]/80 hover:text-[#0c2f41]">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#0c2f41]/10 text-center text-[#0c2f41]/60 text-sm">
            © {new Date().getFullYear()} YappHQ. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
