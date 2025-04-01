
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendarIcon, BarChart2Icon, RefreshCcwIcon, BrainIcon, CheckIcon, ArrowRightIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Demo Request Received",
      description: "Our team will contact you shortly to schedule a demo.",
    });
  };

  const features = [
    {
      icon: <CalendarIcon className="h-10 w-10 text-primary" />,
      title: "Smart Scheduling",
      description: "AI-powered scheduling that finds the perfect time to post for maximum engagement."
    },
    {
      icon: <BarChart2Icon className="h-10 w-10 text-primary" />,
      title: "Advanced Analytics",
      description: "Comprehensive insights into your social media performance to help you grow."
    },
    {
      icon: <RefreshCcwIcon className="h-10 w-10 text-primary" />,
      title: "Cross-Platform Posting",
      description: "Post to all your social networks from one intuitive dashboard."
    },
    {
      icon: <BrainIcon className="h-10 w-10 text-primary" />,
      title: "AI Content Generation",
      description: "Generate engaging posts with our advanced AI assistant."
    }
  ];

  const trustLogos = [
    { name: "Forbes", logo: "/placeholder.svg" },
    { name: "TechCrunch", logo: "/placeholder.svg" },
    { name: "Wired", logo: "/placeholder.svg" },
    { name: "Fast Company", logo: "/placeholder.svg" },
    { name: "Business Insider", logo: "/placeholder.svg" },
    { name: "Entrepreneur", logo: "/placeholder.svg" }
  ];

  const roadmapSteps = [
    {
      title: "Idea to Content",
      description: "Transform your ideas into engaging social media content with our AI assistant.",
      icon: "💡"
    },
    {
      title: "Strategic Scheduling",
      description: "Schedule posts for optimal times to reach your target audience effectively.",
      icon: "📅"
    },
    {
      title: "Cross-Platform Publishing",
      description: "Publish seamlessly across all major social media platforms in one click.",
      icon: "🚀"
    },
    {
      title: "Analytics & Growth",
      description: "Measure performance, gain insights, and scale to over 1 million views.",
      icon: "📈"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-blue-100 to-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 animate-slide-in">
                Elevate Your Social Media Presence
              </h1>
              <p className="text-xl text-gray-700 max-w-xl animate-fade-in" style={{animationDelay: "0.2s"}}>
                Manage all your social media content in one place with AI-powered scheduling, analytics, and content creation.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{animationDelay: "0.4s"}}>
                <Button size="lg" className="hover-scale shadow-soft transition-all duration-300 bg-primary hover:bg-primary/90">
                  Get Started Free
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover-scale shadow-soft transition-all duration-300"
                  onClick={handleDemoRequest}
                >
                  Request Demo
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 animate-scale-in" style={{animationDelay: "0.5s"}}>
              <img 
                src="/placeholder.svg" 
                alt="YappHQ Dashboard Preview" 
                className="rounded-xl shadow-2xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 animate-fade-in">
            Trusted by 100+ Forward-Thinking Businesses
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {trustLogos.map((logo, index) => (
              <div 
                key={logo.name} 
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 animate-fade-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <img src={logo.logo} alt={logo.name} className="h-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Powerful Features for Social Media Success
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Everything you need to create, schedule, and analyze your social media content
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title} 
                className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100 animate-fade-in hover-scale"
                style={{animationDelay: `${0.15 * index}s`}}
              >
                <div className="mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-fade-in">
              <img 
                src="/placeholder.svg" 
                alt="AI Assistant" 
                className="rounded-xl shadow-xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2"
              />
            </div>
            <div className="lg:w-1/2 space-y-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Meet Your AI Content Assistant
              </h2>
              <p className="text-lg text-gray-700">
                Our advanced AI helps you generate engaging content, optimize your posts, and recommend the best strategies to grow your audience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 animate-fade-in" style={{animationDelay: "0.3s"}}>
                  <CheckIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Generate content ideas based on your brand voice</span>
                </li>
                <li className="flex items-start space-x-3 animate-fade-in" style={{animationDelay: "0.4s"}}>
                  <CheckIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Optimize captions for maximum engagement</span>
                </li>
                <li className="flex items-start space-x-3 animate-fade-in" style={{animationDelay: "0.5s"}}>
                  <CheckIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Suggest trending hashtags relevant to your content</span>
                </li>
                <li className="flex items-start space-x-3 animate-fade-in" style={{animationDelay: "0.6s"}}>
                  <CheckIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Analyze past performance to improve future content</span>
                </li>
              </ul>
              <Button className="mt-4 animate-fade-in hover-scale shadow-soft" style={{animationDelay: "0.7s"}}>
                Try AI Assistant <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Roadmap Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              From Idea to 1 Million+ Views
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our comprehensive platform guides you through every step of the content lifecycle
            </p>
          </div>
          
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute left-1/2 top-8 bottom-0 w-1 bg-primary/30 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {roadmapSteps.map((step, index) => (
                <div 
                  key={step.title} 
                  className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 animate-fade-in`}
                  style={{animationDelay: `${0.2 * index}s`}}
                >
                  <div className="md:w-1/2 flex justify-center">
                    <div className="bg-blue-50 w-16 h-16 flex items-center justify-center rounded-full text-3xl border-4 border-primary/20 shadow-md z-10 hover-scale">
                      {step.icon}
                    </div>
                  </div>
                  <div className={`md:w-1/2 p-6 bg-blue-50 rounded-xl shadow-md border border-blue-100 hover:shadow-xl transition-all duration-300 hover:bg-white ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Create, Schedule, Analyze, Grow
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our intuitive platform makes social media management effortless
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg group animate-fade-in hover-scale" style={{animationDelay: "0.1s"}}>
              <div className="h-48 bg-primary/20 relative overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Create Content" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2 text-gray-900">1. Create Engaging Content</h3>
                <p className="text-gray-700">Use our AI assistant to create compelling posts that resonate with your audience.</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg group animate-fade-in hover-scale" style={{animationDelay: "0.2s"}}>
              <div className="h-48 bg-primary/20 relative overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Schedule Posts" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2 text-gray-900">2. Schedule Strategically</h3>
                <p className="text-gray-700">Plan your content calendar and schedule posts for optimal engagement times.</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg group animate-fade-in hover-scale" style={{animationDelay: "0.3s"}}>
              <div className="h-48 bg-primary/20 relative overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Analyze Results" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-2 text-gray-900">3. Track Performance</h3>
                <p className="text-gray-700">Analyze your results with comprehensive analytics to optimize your strategy.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Link to="/dashboard">
              <Button size="lg" className="hover-scale shadow-soft">
                Start Creating Now <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Resources to Help You Succeed
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our guides, tutorials, and best practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/resources" className="group animate-fade-in hover-scale" style={{animationDelay: "0.1s"}}>
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-48 bg-primary/10 relative overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Blog" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">Blog</h3>
                  <p className="text-gray-700">Tips, trends, and insights to enhance your social media strategy.</p>
                </div>
              </div>
            </Link>

            <Link to="/resources" className="group animate-fade-in hover-scale" style={{animationDelay: "0.2s"}}>
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-48 bg-primary/10 relative overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Tutorials" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">Tutorials</h3>
                  <p className="text-gray-700">Step-by-step guides to master YappHQ features and tools.</p>
                </div>
              </div>
            </Link>

            <Link to="/resources" className="group animate-fade-in hover-scale" style={{animationDelay: "0.3s"}}>
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                <div className="h-48 bg-primary/10 relative overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="Case Studies" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">Case Studies</h3>
                  <p className="text-gray-700">Success stories and examples from brands using YappHQ.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Ready to Transform Your Social Media Strategy?
            </h2>
            <p className="text-lg text-gray-700">
              Join thousands of businesses using YappHQ to grow their social media presence
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-in" style={{animationDelay: "0.3s"}}>
              <Button size="lg" className="hover-scale shadow-soft bg-primary hover:bg-primary/90">
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-scale shadow-soft"
                onClick={handleDemoRequest}
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 animate-fade-in">
            <div>
              <h3 className="text-xl font-bold mb-4">YappHQ</h3>
              <p className="text-gray-400 mb-4">
                The all-in-one social media management platform powered by AI.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.1s"}}>
              <h3 className="text-xl font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Tutorials</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Support Center</Link></li>
                <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">API Documentation</Link></li>
              </ul>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 animate-fade-in" style={{animationDelay: "0.4s"}}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} YappHQ. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
