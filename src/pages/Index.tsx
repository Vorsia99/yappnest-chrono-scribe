
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  BarChart, 
  MessageSquare, 
  MessageCircle, 
  Users, 
  Sparkles, 
  Lightbulb, 
  Pencil, 
  Clock, 
  BarChartHorizontal, 
  BrainCircuit, 
  LucideIcon, 
  BookOpen,
  FileText,
  Video,
  Headphones,
  ChevronRight,
  Github,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Company logos for the trusted by section
const companyLogos = [
  { name: "Acme Inc", logo: "M" },
  { name: "Globex", logo: "G" },
  { name: "Stark Industries", logo: "S" },
  { name: "Umbrella Corp", logo: "U" },
  { name: "Wayne Enterprises", logo: "W" },
  { name: "Oscorp", logo: "O" },
];

// Workflow steps
const workflowSteps = [
  {
    icon: Lightbulb,
    title: "Generate Ideas",
    description: "Use our AI assistant to generate engaging content ideas tailored to your audience.",
  },
  {
    icon: Pencil,
    title: "Create Content",
    description: "Craft posts with our intuitive composer and AI-powered suggestions.",
  },
  {
    icon: Clock,
    title: "Schedule Posts",
    description: "Set up your content calendar and schedule posts for the perfect time.",
  },
  {
    icon: BarChartHorizontal,
    title: "Track Results",
    description: "Analyze performance metrics and optimize your social media strategy.",
  },
];

// Feature items
const features = [
  {
    icon: Calendar,
    title: "Content Calendar",
    description: "Plan your social content with an intuitive visual calendar."
  },
  {
    icon: BrainCircuit,
    title: "AI Post Generator",
    description: "Create engaging posts with the help of advanced AI."
  },
  {
    icon: MessageSquare,
    title: "Post Composer",
    description: "Design beautiful posts with our easy-to-use composer."
  },
  {
    icon: MessageCircle,
    title: "Content Library",
    description: "Store and organize all your media in one central location."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with role-based permissions."
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Track and analyze your social media performance."
  },
];

// Resource types
const resources = [
  {
    icon: FileText,
    title: "Guides & Articles",
    description: "Learn strategies and best practices for social media success.",
    link: "/resources/guides"
  },
  {
    icon: Video,
    title: "Tutorial Videos",
    description: "Step-by-step video guides to help you master YappHQ.",
    link: "/resources/videos"
  },
  {
    icon: Headphones,
    title: "Webinars",
    description: "Join live sessions with social media experts and our team.",
    link: "/resources/webinars"
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Detailed documentation to help you get the most out of YappHQ.",
    link: "/resources/docs"
  },
];

// Custom feature card component
const FeatureCard = ({ icon: Icon, title, description }: { icon: LucideIcon, title: string, description: string }) => (
  <Card className="hover-scale shadow-soft border-none">
    <CardHeader>
      <div className="bg-[#e6f2fa] p-3 w-14 h-14 rounded-lg mb-4 flex items-center justify-center">
        <Icon className="h-6 w-6 text-[#0c2f41]" />
      </div>
      <CardTitle className="text-[#0c2f41] text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-[#0c2f41]/80">{description}</p>
    </CardContent>
  </Card>
);

// Testimonial component
const Testimonial = ({ quote, author, role, company }: { quote: string; author: string; role: string; company: string }) => (
  <Card className="bg-white border-none shadow-md h-full flex flex-col">
    <CardContent className="pt-6 pb-2 flex-grow">
      <p className="text-[#0c2f41]/80 italic mb-4">{quote}</p>
    </CardContent>
    <CardFooter className="flex flex-col items-start">
      <div className="font-semibold text-[#0c2f41]">{author}</div>
      <div className="text-sm text-[#0c2f41]/70">{role}, {company}</div>
    </CardFooter>
  </Card>
);

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
            <Link to="/resources" className="text-[#0c2f41] hover:text-[#0c2f41]/80 font-medium">
              Resources
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

        {/* Trusted By Section */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="text-center mb-12">
            <p className="text-[#0c2f41]/70 font-medium mb-2">TRUSTED BY 100+ BUSINESSES</p>
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-[#0c2f41]">
              Powering social media for leading brands
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {companyLogos.map((company, index) => (
              <div key={index} className="bg-white/50 rounded-lg py-6 px-8 flex items-center justify-center shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0c2f41]/10 text-[#0c2f41] font-bold text-xl">
                  {company.logo}
                </div>
                <span className="ml-3 font-medium text-[#0c2f41]">{company.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-white/30 rounded-lg my-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0c2f41]">
              Powerful features to supercharge your social presence
            </h2>
            <p className="mt-4 text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              All the tools you need to create, schedule, and analyze your content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/features" className="inline-flex items-center text-[#0c2f41] font-medium hover:underline">
              Explore all features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* AI Assistant Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/70 rounded-lg p-6 shadow-md">
                <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-[#0c2f41]/10">
                  <div className="w-10 h-10 rounded-full bg-[#0c2f41] flex items-center justify-center text-white">
                    <span>AI</span>
                  </div>
                  <div className="bg-[#0c2f41]/5 rounded-lg p-4 flex-1">
                    <p className="text-[#0c2f41]">I need a post about our new product launch next week.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6 pb-6 border-b border-[#0c2f41]/10">
                  <div className="w-10 h-10 rounded-full bg-[#e6f2fa] flex items-center justify-center">
                    <BrainCircuit className="h-5 w-5 text-[#0c2f41]" />
                  </div>
                  <div className="bg-[#0c2f41]/5 rounded-lg p-4 flex-1">
                    <p className="text-[#0c2f41]">Here are 3 post ideas for your product launch:</p>
                    <ol className="mt-2 ml-6 list-decimal text-[#0c2f41]/80">
                      <li>Excited to announce our new product! Join us for the launch on [date] and be among the first to experience the future of [industry].</li>
                      <li>The wait is over! After months of development, we're thrilled to unveil our latest innovation. #ProductLaunch #Innovation</li>
                      <li>New beginnings start next week. Our team has been working tirelessly to create something special for you. Stay tuned for the big reveal!</li>
                    </ol>
                  </div>
                </div>

                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="Ask our AI assistant..." 
                    className="flex-1 p-3 rounded-l-lg border border-[#0c2f41]/20 focus:outline-none focus:ring-2 focus:ring-[#0c2f41]/30" 
                  />
                  <button className="bg-[#0c2f41] text-white p-3 rounded-r-lg">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0c2f41]">
                AI-powered assistant at your service
              </h2>
              <p className="mt-6 text-lg text-[#0c2f41]/80">
                Our AI assistant helps you generate engaging content ideas, craft compelling posts, and optimize your social media strategy with data-driven insights.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Generate post ideas based on your brand voice",
                  "Create captions that drive engagement",
                  "Analyze top-performing content for insights",
                  "Suggest optimal posting times based on audience activity"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full bg-[#0c2f41] text-white flex items-center justify-center">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4 8L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[#0c2f41]/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button className="bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white">
                  Try the AI assistant
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Roadmap / Workflow Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-white/30 rounded-lg">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0c2f41]">
              From idea to 1M+ views
            </h2>
            <p className="mt-4 text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              A streamlined workflow designed to maximize your social media impact
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[#0c2f41]/20 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md mb-6 z-10">
                      <Icon className="h-8 w-8 text-[#0c2f41]" />
                    </div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium bg-[#0c2f41] text-white px-3 py-1 rounded-full">
                      Step {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-[#0c2f41] mb-2 text-center">{step.title}</h3>
                    <p className="text-[#0c2f41]/70 text-center">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button className="bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white">
              Start your journey
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0c2f41]">
              Loved by social media managers
            </h2>
            <p className="mt-4 text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              Hear what our customers have to say about YappHQ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="YappHQ has revolutionized our social media workflow. The AI-powered suggestions save us countless hours every week."
              author="Sarah Johnson"
              role="Marketing Director"
              company="TechGrowth"
            />
            <Testimonial
              quote="The analytics dashboard gives us insights we never had before. Now we can see exactly what content performs best with our audience."
              author="Michael Chen"
              role="Social Media Manager"
              company="StyleBrand"
            />
            <Testimonial
              quote="The collaborative tools make it easy for our entire team to work together on our social campaigns. Approval workflows are seamless."
              author="Alex Rodriguez"
              role="Content Creator"
              company="MediaPulse"
            />
          </div>
        </section>

        {/* How to Use Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-white/30 rounded-lg">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0c2f41]">
              How to use YappHQ
            </h2>
            <p className="mt-4 text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              Get started in minutes with these simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: "1. Set up your account",
                description: "Create an account and connect your social media profiles to start managing them all in one place.",
                img: "bg-[#0c2f41]/10"
              },
              {
                title: "2. Create your content",
                description: "Use our composer and AI assistant to create engaging posts for your audience.",
                img: "bg-[#0c2f41]/15"
              },
              {
                title: "3. Schedule and analyze",
                description: "Plan your content calendar and track performance metrics to optimize your strategy.",
                img: "bg-[#0c2f41]/20"
              }
            ].map((step, index) => (
              <div key={index} className="flex flex-col">
                <div className={`${step.img} rounded-lg h-48 mb-6 flex items-center justify-center`}>
                  <div className="w-12 h-12 rounded-full bg-white text-[#0c2f41] flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0c2f41] mb-2">{step.title}</h3>
                <p className="text-[#0c2f41]/70">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white">
              View detailed tutorials
            </Button>
          </div>
        </section>

        {/* Resources Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0c2f41]">
              Resources to help you succeed
            </h2>
            <p className="mt-4 text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              Explore our library of guides, tutorials, and best practices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link key={index} to={resource.link} className="group">
                  <Card className="h-full hover:shadow-md transition-shadow border-none">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-[#e6f2fa] flex items-center justify-center mb-4 group-hover:bg-[#0c2f41] transition-colors">
                        <Icon className="h-6 w-6 text-[#0c2f41] group-hover:text-white transition-colors" />
                      </div>
                      <CardTitle className="text-[#0c2f41]">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#0c2f41]/70">{resource.description}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center text-[#0c2f41] font-medium group-hover:underline">
                        <span>Learn more</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
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
      <footer className="bg-[#0c2f41]/5 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
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
              <p className="text-[#0c2f41]/70 mb-6 max-w-md">
                YappHQ is the all-in-one social media management platform that helps businesses create, schedule, and analyze their content with ease.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[#0c2f41] hover:text-[#0c2f41]/80">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-[#0c2f41] hover:text-[#0c2f41]/80">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-[#0c2f41] hover:text-[#0c2f41]/80">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-[#0c2f41] hover:text-[#0c2f41]/80">
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-[#0c2f41] mb-4">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/features" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Features</Link></li>
                <li><Link to="/pricing" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Pricing</Link></li>
                <li><Link to="/integrations" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Integrations</Link></li>
                <li><Link to="/roadmap" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Roadmap</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-[#0c2f41] mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="/resources/guides" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Guides</Link></li>
                <li><Link to="/resources/blog" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Blog</Link></li>
                <li><Link to="/resources/webinars" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Webinars</Link></li>
                <li><Link to="/resources/help" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Help Center</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-[#0c2f41] mb-4">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">About us</Link></li>
                <li><Link to="/careers" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Careers</Link></li>
                <li><Link to="/contact" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Contact</Link></li>
                <li><Link to="/legal" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Legal</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#0c2f41]/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#0c2f41]/60 text-sm">
              © {new Date().getFullYear()} YappHQ. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-[#0c2f41]/60 text-sm hover:text-[#0c2f41]">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[#0c2f41]/60 text-sm hover:text-[#0c2f41]">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-[#0c2f41]/60 text-sm hover:text-[#0c2f41]">
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

