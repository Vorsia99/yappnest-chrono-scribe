
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, CalendarIcon, BarChart2Icon, SendIcon, ZapIcon, UsersIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Request Received",
      description: "We'll contact you shortly to schedule a demo.",
    });
  };

  const features = [
    {
      icon: <CalendarIcon className="h-8 w-8 text-primary" />,
      title: "Post scheduling",
      description: "Plan and schedule posts in advance with ease"
    },
    {
      icon: <ZapIcon className="h-8 w-8 text-primary" />,
      title: "AI assistant",
      description: "Generate engaging content ideas in moments"
    },
    {
      icon: <SendIcon className="h-8 w-8 text-primary" />,
      title: "Content calendar",
      description: "Visualize your scheduled posts in a calendar view"
    },
    {
      icon: <BarChart2Icon className="h-8 w-8 text-primary" />,
      title: "Analytics",
      description: "Measure performance of your social campaigns"
    }
  ];

  const trustLogos = [
    { name: "Forbes", logo: "public/lovable-uploads/75b50b03-341f-44fc-8530-425dabe3b7fd.png" },
    { name: "TechCrunch", logo: "public/lovable-uploads/94630a6c-b9d0-47f8-b457-1f6ad3c85c91.png" },
    { name: "Wired", logo: "public/lovable-uploads/24102594-0adc-4b3d-809e-14335f90a250.png" },
    { name: "Fast Company", logo: "public/lovable-uploads/7dceb2d6-424a-4b74-bbaf-eefbd4464942.png" }
  ];

  return (
    <div className="min-h-screen bg-yapphq">
      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="text-yapphq-dark text-3xl font-bold flex items-center">
              <svg viewBox="0 0 36 24" fill="none" className="h-8 w-12 mr-2">
                <path d="M1 13L8 6L15 13L22 6L29 13L36 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              YappHQ
            </div>
          </Link>
          <div className="flex items-center gap-8">
            <Link to="/features" className="text-yapphq-dark font-medium hover:opacity-80">Features</Link>
            <Link to="/pricing" className="text-yapphq-dark font-medium hover:opacity-80">Pricing</Link>
            <Button className="rounded-full bg-primary text-white px-6">Sign up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yapphq-dark mb-6 animate-fade-in">
            Social media on autopilot
          </h1>
          <p className="text-xl text-yapphq-dark/80 mb-10 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Schedule posts, manage your content lineup, and track performance—effortlessly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full bg-primary text-white px-8 animate-fade-in animate-delay-200">
              Get started
            </Button>
            <Button 
              variant="outline"  
              size="lg" 
              className="rounded-full border-primary text-primary hover:bg-primary/5 animate-fade-in animate-delay-200"
              onClick={handleDemoRequest}
            >
              Request a demo
            </Button>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 relative max-w-4xl mx-auto animate-fade-in animate-delay-300">
          <div className="bg-foreground/5 backdrop-blur rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/placeholder.svg" 
              alt="YappHQ Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-yapphq-dark mb-4">
              Effortless social media management
            </h2>
            <p className="text-lg text-yapphq-dark/80">
              Powerful tools to automate your content workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-6 rounded-lg animate-fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-yapphq-dark">{feature.title}</h3>
                <p className="text-yapphq-dark/80">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-fade-in">
            <Link to="/features">
              <Button variant="link" className="text-primary font-medium group">
                Learn more about our features
                <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 md:py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-medium text-center mb-10 text-yapphq-dark/70 animate-fade-in">
            Trusted by innovative teams worldwide
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {trustLogos.map((logo, index) => (
              <div 
                key={logo.name}
                className="animate-fade-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <img src={logo.logo} alt={logo.name} className="h-8 md:h-10 opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-yapphq-dark mb-6">
                  Advanced scheduling tools
                </h2>
                <p className="text-lg text-yapphq-dark/80 mb-6">
                  Queue up content for multiple platforms and let our AI determine the optimal posting times for maximum engagement.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-yapphq-dark/80">Batch upload and schedule multiple posts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-yapphq-dark/80">AI-powered optimal time suggestions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-yapphq-dark/80">Cross-platform scheduling in one interface</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in animate-delay-100">
                <img 
                  src="/placeholder.svg" 
                  alt="Scheduling Interface" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Queue Management */}
      <section className="py-16 md:py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-white rounded-xl shadow-md overflow-hidden animate-fade-in">
                <img 
                  src="/placeholder.svg" 
                  alt="Queue Management" 
                  className="w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2 animate-fade-in animate-delay-100">
                <h2 className="text-3xl md:text-4xl font-bold text-yapphq-dark mb-6">
                  Powerful queue management
                </h2>
                <p className="text-lg text-yapphq-dark/80 mb-6">
                  Organize, prioritize, and visualize your content pipeline with our intuitive queue management system.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-yapphq-dark/80">Drag-and-drop interface for easy reorganization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-yapphq-dark/80">Content category tagging and filtering</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-yapphq-dark/80">Team collaboration and approval workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-yapphq-dark mb-6">
                  Real-time analytics
                </h2>
                <p className="text-lg text-yapphq-dark/80 mb-6">
                  Track engagement metrics across platforms and gain insights to optimize your social media strategy.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-yapphq-dark/80">Comprehensive performance dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-yapphq-dark/80">Audience growth and engagement trends</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-1 rounded mr-3 mt-1">
                      <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-yapphq-dark/80">Content performance comparison</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-in animate-delay-100">
                <img 
                  src="/placeholder.svg" 
                  alt="Analytics Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-yapphq-dark mb-4">
              From idea to 1M+ views
            </h2>
            <p className="text-lg text-yapphq-dark/80">
              Our streamlined workflow helps you create, schedule, and analyze high-performing content
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in" style={{animationDelay: "0ms"}}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-yapphq-dark">Create</h3>
                <p className="text-yapphq-dark/80">Compose new drafts with ease or use our AI to generate ideas</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in" style={{animationDelay: "100ms"}}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-yapphq-dark">Schedule</h3>
                <p className="text-yapphq-dark/80">Queue up posts for future publishing at optimal times</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in" style={{animationDelay: "200ms"}}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-yapphq-dark">Publish</h3>
                <p className="text-yapphq-dark/80">Deliver your content to every platform automatically</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in" style={{animationDelay: "300ms"}}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-yapphq-dark">Analyze</h3>
                <p className="text-yapphq-dark/80">Track key metrics and optimize your strategy</p>
              </div>
            </div>
            
            <div className="mt-12 text-center animate-fade-in" style={{animationDelay: "400ms"}}>
              <Button className="rounded-full bg-primary text-white px-8">
                Get started now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-yapphq-dark mb-4">
              Resources
            </h2>
            <p className="text-lg text-yapphq-dark/80">
              Explore guides and best practices to level up your social media strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link to="/resources" className="group animate-fade-in" style={{animationDelay: "0ms"}}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-md h-full">
                <div className="h-48 bg-primary/5 overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Guide" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 inline-block mb-3">
                    Guide
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-yapphq-dark group-hover:text-primary transition-colors">
                    Social Media Content Calendar Template
                  </h3>
                  <p className="text-yapphq-dark/80">
                    Organize your content strategy with our free template
                  </p>
                </div>
              </div>
            </Link>
            
            <Link to="/resources" className="group animate-fade-in" style={{animationDelay: "100ms"}}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-md h-full">
                <div className="h-48 bg-primary/5 overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Tutorial" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 inline-block mb-3">
                    Tutorial
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-yapphq-dark group-hover:text-primary transition-colors">
                    Creating Viral Content with AI
                  </h3>
                  <p className="text-yapphq-dark/80">
                    Learn how to leverage AI for generating engaging posts
                  </p>
                </div>
              </div>
            </Link>
            
            <Link to="/resources" className="group animate-fade-in" style={{animationDelay: "200ms"}}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-md h-full">
                <div className="h-48 bg-primary/5 overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Case Study" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 inline-block mb-3">
                    Case Study
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-yapphq-dark group-hover:text-primary transition-colors">
                    How Brand X Grew Their Audience by 200%
                  </h3>
                  <p className="text-yapphq-dark/80">
                    A deep dive into a successful social media strategy
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center animate-fade-in" style={{animationDelay: "300ms"}}>
            <Link to="/resources">
              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/5">
                View all resources
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-yapphq-dark mb-6">
              Ready to upgrade your social media?
            </h2>
            <p className="text-lg text-yapphq-dark/80 mb-8">
              Join thousands of brands using YappHQ to streamline their social media workflow
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full bg-primary text-white px-8">
                Get started free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-primary text-primary hover:bg-primary/5"
                onClick={handleDemoRequest}
              >
                Schedule a demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-1">
              <Link to="/" className="inline-block mb-6">
                <div className="text-yapphq-dark text-2xl font-bold flex items-center">
                  <svg viewBox="0 0 36 24" fill="none" className="h-6 w-9 mr-2">
                    <path d="M1 13L8 6L15 13L22 6L29 13L36 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  YappHQ
                </div>
              </Link>
              <p className="text-yapphq-dark/70 mb-4">
                The all-in-one social media management platform for growing brands.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-yapphq-dark/60 hover:text-yapphq-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-yapphq-dark/60 hover:text-yapphq-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-yapphq-dark/60 hover:text-yapphq-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-yapphq-dark/60 hover:text-yapphq-dark transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-yapphq-dark mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Features</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Pricing</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Integrations</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">What's New</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-yapphq-dark mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/resources" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Blog</Link></li>
                <li><Link to="/resources" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Guides</Link></li>
                <li><Link to="/resources" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Help Center</Link></li>
                <li><Link to="/resources" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Webinars</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-yapphq-dark mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">About</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Careers</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Contact</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-yapphq-dark mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Terms</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Privacy</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Cookies</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-yapphq-dark/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-yapphq-dark/60 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} YappHQ. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-yapphq-dark/60 hover:text-yapphq-dark text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-yapphq-dark/60 hover:text-yapphq-dark text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-yapphq-dark/60 hover:text-yapphq-dark text-sm transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
