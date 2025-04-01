
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  BarChart, 
  MessageSquare, 
  Pencil, 
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#e6f2fa]">
      {/* Navigation */}
      <header className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg 
              width="40" 
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
            <span className="text-2xl font-medium ml-2 tracking-tight text-[#0c2f41]">YappHQ</span>
          </div>
          <nav className="hidden md:flex items-center space-x-10">
            <Link to="/features" className="text-[#0c2f41] hover:text-[#0c2f41]/80 font-medium text-sm tracking-wide transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-[#0c2f41] hover:text-[#0c2f41]/80 font-medium text-sm tracking-wide transition-colors">
              Pricing
            </Link>
            <Link to="/dashboard">
              <Button className="rounded-full bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white px-8 py-6 text-sm tracking-wide">
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
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#0c2f41] leading-tight tracking-tight">
                Social media<br />
                <span className="font-light">on autopilot</span>
              </h1>
              <p className="mt-8 text-xl text-[#0c2f41]/80 leading-relaxed tracking-wide max-w-lg">
                Schedule posts, manage your content lineup, and track performance—with remarkable simplicity.
              </p>
              <div className="mt-12">
                <Button className="rounded-full bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white px-10 py-7 text-base tracking-wide">
                  Get started
                </Button>
                <p className="mt-4 text-sm text-[#0c2f41]/60 tracking-wide">
                  Start your 30-day free trial. No credit card required.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-[#0c2f41]/5 shadow-xl">
                <img 
                  src="/lovable-uploads/9e72d57d-7dbe-4cff-b46c-383a608f383d.png" 
                  alt="YappHQ Dashboard Preview" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-[#0c2f41] text-white p-6 rounded-lg backdrop-blur-lg bg-opacity-95">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium tracking-wide text-lg">Advanced scheduling tools</p>
                      <p className="text-sm mt-1 opacity-80 tracking-wide">Powerful queue management</p>
                    </div>
                    <svg 
                      width="32" 
                      height="24" 
                      viewBox="0 0 40 32" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path d="M11.5 4L4 11.5L11.5 19" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M28.5 13L36 20.5L28.5 28" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 0L19 32" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Overview Section */}
        <section className="container mx-auto px-4 md:px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c2f41] mb-6 tracking-tight">
              Effortless social media management
            </h2>
            <p className="text-lg text-[#0c2f41]/80 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Powerful tools to automate your content workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 flex items-center justify-center bg-[#0c2f41]/5 rounded-full">
                  <Calendar className="w-6 h-6 text-[#0c2f41]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0c2f41] tracking-tight">Post scheduling</h3>
                <p className="mt-3 text-[#0c2f41]/80 leading-relaxed tracking-wide">
                  Plan and schedule posts in advance with effortless precision
                </p>
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 flex items-center justify-center bg-[#0c2f41]/5 rounded-full">
                  <Calendar className="w-6 h-6 text-[#0c2f41]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0c2f41] tracking-tight">Content calendar</h3>
                <p className="mt-3 text-[#0c2f41]/80 leading-relaxed tracking-wide">
                  Visualize your scheduled posts in an elegant calendar view
                </p>
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 flex items-center justify-center bg-[#0c2f41]/5 rounded-full">
                  <MessageSquare className="w-6 h-6 text-[#0c2f41]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0c2f41] tracking-tight">AI assistant</h3>
                <p className="mt-3 text-[#0c2f41]/80 leading-relaxed tracking-wide">
                  Generate engaging content ideas with remarkable intelligence
                </p>
              </div>
            </div>
            
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 flex items-center justify-center bg-[#0c2f41]/5 rounded-full">
                  <BarChart className="w-6 h-6 text-[#0c2f41]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#0c2f41] tracking-tight">Analytics</h3>
                <p className="mt-3 text-[#0c2f41]/80 leading-relaxed tracking-wide">
                  Measure performance of your social campaigns with elegant precision
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/features" className="inline-flex items-center text-[#0c2f41] font-medium hover:text-[#0c2f41]/80 tracking-wide transition-colors">
              Learn more about our features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
        
        {/* Feature Details Section */}
        <section className="container mx-auto px-4 md:px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/lovable-uploads/bc113fd0-18d2-4e4c-8f34-5f7480463c85.png" 
                alt="Features Screenshot" 
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-[#0c2f41] tracking-tight leading-tight">
                All the tools you need<br />in one place
              </h2>
              
              <div className="mt-12 space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="bg-[#0c2f41]/5 p-3 rounded-lg">
                      <Pencil className="w-5 h-5 text-[#0c2f41]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0c2f41] tracking-tight">Create</h3>
                    <p className="mt-2 text-[#0c2f41]/80 tracking-wide leading-relaxed">Compose new drafts with intuitive simplicity</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="bg-[#0c2f41]/5 p-3 rounded-lg">
                      <Send className="w-5 h-5 text-[#0c2f41]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0c2f41] tracking-tight">Publish</h3>
                    <p className="mt-2 text-[#0c2f41]/80 tracking-wide leading-relaxed">Deliver your content to every platform seamlessly</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="bg-[#0c2f41]/5 p-3 rounded-lg">
                      <Calendar className="w-5 h-5 text-[#0c2f41]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0c2f41] tracking-tight">Schedule</h3>
                    <p className="mt-2 text-[#0c2f41]/80 tracking-wide leading-relaxed">Queue up posts for future publishing with precision</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="bg-[#0c2f41]/5 p-3 rounded-lg">
                      <BarChart className="w-5 h-5 text-[#0c2f41]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0c2f41] tracking-tight">Analyse</h3>
                    <p className="mt-2 text-[#0c2f41]/80 tracking-wide leading-relaxed">Track key metrics and performance with beautiful clarity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-[#0c2f41] text-white py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
              Ready to streamline your social media?
            </h2>
            <p className="mt-6 text-white/90 max-w-2xl mx-auto tracking-wide leading-relaxed text-lg">
              Join thousands of marketers who have simplified their workflow with YappHQ
            </p>
            <div className="mt-12">
              <Button className="bg-white hover:bg-white/90 text-[#0c2f41] px-10 py-7 text-base font-medium tracking-wide rounded-full">
                Start your free trial
              </Button>
              <p className="mt-4 text-sm text-white/70 tracking-wide">
                30 days free. No credit card required.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0c2f41]/5 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-8 md:mb-0">
              <svg 
                width="24" 
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
              <span className="text-xl font-medium text-[#0c2f41] ml-2 tracking-tight">YappHQ</span>
            </div>
            
            <div className="flex space-x-10">
              <Link to="/features" className="text-[#0c2f41]/80 hover:text-[#0c2f41] tracking-wide text-sm transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-[#0c2f41]/80 hover:text-[#0c2f41] tracking-wide text-sm transition-colors">
                Pricing
              </Link>
              <Link to="/terms" className="text-[#0c2f41]/80 hover:text-[#0c2f41] tracking-wide text-sm transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-[#0c2f41]/80 hover:text-[#0c2f41] tracking-wide text-sm transition-colors">
                Privacy
              </Link>
            </div>
          </div>
          
          <div className="border-t border-[#0c2f41]/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#0c2f41]/60 text-sm tracking-wide">
              © {new Date().getFullYear()} YappHQ. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
