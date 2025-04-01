
import React, { useState } from 'react';
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
  ExternalLink,
  Check,
  CheckCircle2,
  FacebookIcon, 
  YoutubeIcon,
  Globe,
  Mail,
  AlertCircle,
  Star,
  ChevronDown,
  Heart
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

// Stats for the numbers section
const stats = [
  { number: "50,000+", label: "ACTIVE USERS" },
  { number: "2.4M+", label: "POSTS PUBLISHED" },
  { number: "15+", label: "PLATFORMS SUPPORTED" }
];

// Social platforms supported
const socialPlatforms = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "Instagram", icon: Instagram },
  { name: "Twitter", icon: Twitter },
  { name: "TikTok", icon: MessageCircle }, // Using MessageCircle as an alternative icon for TikTok
  { name: "LinkedIn", icon: Linkedin },
  { name: "YouTube", icon: YoutubeIcon },
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

// Main feature items
const mainFeatures = [
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

// Detailed features by section
const detailedFeatures = [
  {
    category: "PUBLISH",
    title: "Schedule and publish across all platforms",
    description: "Plan and schedule your content to the most popular platforms including Instagram, TikTok, Facebook, LinkedIn, Twitter, and more.",
    points: [
      "Auto-publish your content or get a notification when it's time to post",
      "Customize and repurpose your post for each platform",
      "See everything you have scheduled in a calendar or queue view"
    ],
    image: "/lovable-uploads/4aed08f4-0ed1-4d96-8503-d89403c37331.png",
    color: "bg-[#e6f2fa]"
  },
  {
    category: "CREATE",
    title: "Transform any idea into the perfect post",
    description: "Whether you're flying solo or working with a team, YappHQ has all the features to help you create, organize, and repurpose your content.",
    points: [
      "Import content from Canva, Dropbox, Google and more",
      "Visually organize your ideas into groups or themes",
      "Use our AI Assistant to generate engaging captions and ideas"
    ],
    image: "/lovable-uploads/ba0c2214-d335-407d-8fe1-1bfac7e65384.png",
    color: "bg-[#fde1d3]"
  },
  {
    category: "COLLABORATE",
    title: "Great content, created together",
    description: "Collaborate seamlessly with your team. Invite unlimited collaborators, assign roles and permissions, and keep everyone aligned.",
    points: [
      "Assign tasks and track progress in one place",
      "Create approval workflows for content review",
      "Keep all your assets and brand guidelines accessible to the team"
    ],
    image: "/lovable-uploads/f7301952-dc37-4ba5-93ae-10f7a91f2948.png",
    color: "bg-[#FEF7CD]"
  },
  {
    category: "ANALYZE",
    title: "Actionable insights, not just analytics",
    description: "Whether it's basic analytics or in-depth reporting, YappHQ helps you learn what works and how to improve.",
    points: [
      "See the best times, formats and frequencies to post",
      "Get demographic data about your audience", 
      "Identify your top-performing content for future strategy"
    ],
    image: "/lovable-uploads/5bad4b43-4fd5-44a2-9d2b-fe4639013fdb.png",
    color: "bg-[#E5DEFF]"
  },
];

// Pricing plans
const pricingPlans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      "Connect up to 3 channels",
      "10 scheduled posts per channel",
      "Basic analytics",
      "Content calendar",
      "Mobile app access"
    ],
    buttonText: "Get started",
    highlighted: false
  },
  {
    name: "Pro",
    price: "29",
    period: "per month",
    description: "For growing social media presence",
    features: [
      "Connect up to 10 channels",
      "Unlimited scheduled posts",
      "Advanced analytics",
      "AI content assistant",
      "Content approval workflow",
      "Priority support"
    ],
    buttonText: "Start 30-day free trial",
    highlighted: true
  },
  {
    name: "Team",
    price: "79",
    period: "per month",
    description: "For marketing teams",
    features: [
      "Connect unlimited channels",
      "Unlimited scheduled posts",
      "Advanced team collaboration",
      "Custom branded reports",
      "API access",
      "Dedicated account manager"
    ],
    buttonText: "Start 30-day free trial",
    highlighted: false
  }
];

// Testimonials
const testimonials = [
  {
    quote: "YappHQ has revolutionized our social media workflow. The AI-powered suggestions save us countless hours every week.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechGrowth",
    image: "/lovable-uploads/54d3a74d-c82e-484a-b880-a86359cf2a31.png"
  },
  {
    quote: "The analytics dashboard gives us insights we never had before. Now we can see exactly what content performs best with our audience.",
    author: "Michael Chen",
    role: "Social Media Manager",
    company: "StyleBrand",
    image: "/lovable-uploads/ddb78f1c-268e-40fa-bbfd-b1ca88bbdb71.png"
  },
  {
    quote: "The collaborative tools make it easy for our entire team to work together on our social campaigns. Approval workflows are seamless.",
    author: "Alex Rodriguez",
    role: "Content Creator",
    company: "MediaPulse",
    image: "/lovable-uploads/9a6e2943-4b65-4aa2-a818-3cbc466b397f.png"
  },
];

// Resources for the resources section
const resources = [
  {
    icon: FileText,
    title: "Social Media Guide",
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
    icon: Globe,
    title: "Platform Guide",
    description: "Specific recommendations for each social platform.",
    link: "/resources/platforms"
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
const Testimonial = ({ quote, author, role, company, image }: { quote: string; author: string; role: string; company: string; image?: string }) => (
  <Card className="bg-white border-none shadow-md h-full flex flex-col">
    <CardContent className="pt-6 pb-2 flex-grow">
      <div className="mb-4 text-amber-400 flex">
        <Star className="fill-amber-400" />
        <Star className="fill-amber-400" />
        <Star className="fill-amber-400" />
        <Star className="fill-amber-400" />
        <Star className="fill-amber-400" />
      </div>
      <p className="text-[#0c2f41]/80 italic mb-4">{quote}</p>
    </CardContent>
    <CardFooter className="flex items-center space-x-4">
      {image && (
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
      )}
      <div>
        <div className="font-semibold text-[#0c2f41]">{author}</div>
        <div className="text-sm text-[#0c2f41]/70">{role}, {company}</div>
      </div>
    </CardFooter>
  </Card>
);

// Pricing card component
const PricingCard = ({ plan }) => (
  <Card className={`h-full flex flex-col ${plan.highlighted ? 'border-2 border-primary shadow-lg relative' : 'border shadow'}`}>
    {plan.highlighted && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
        Most Popular
      </div>
    )}
    <CardHeader>
      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
      <div className="flex items-baseline mt-2">
        <span className="text-4xl font-bold">${plan.price}</span>
        <span className="ml-2 text-muted-foreground">/{plan.period}</span>
      </div>
      <CardDescription className="mt-2">{plan.description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-3">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className={`w-full ${plan.highlighted ? 'bg-primary hover:bg-primary/90' : 'bg-[#0c2f41] hover:bg-[#0c2f41]/90'}`}>
        {plan.buttonText}
      </Button>
    </CardFooter>
  </Card>
);

const Index = () => {
  const [email, setEmail] = useState('');
  
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
              <Button variant="outline" className="rounded-full border-[#0c2f41] text-[#0c2f41] hover:bg-[#0c2f41]/10">
                Log in
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
                Your content,<br />
                <span className="text-primary">everywhere</span>
              </h1>
              <p className="mt-6 text-xl text-[#0c2f41]/80 max-w-md">
                Plan, create, and share content with the most flexible social media toolkit. Start your 30-day free trial today.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <input 
                    type="email" 
                    placeholder="Enter your email..." 
                    className="px-4 py-3 rounded-md border border-gray-300 flex-grow"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button className="rounded-md bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white px-6 py-3">
                    Get started
                  </Button>
                </div>
                <p className="text-sm text-[#0c2f41]/70">
                  Free 30-day trial. No credit card required.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/b6a36866-8e04-4b30-903a-75cf3e116ed9.png" 
                alt="YappHQ Dashboard" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground py-1 px-3 rounded-full text-sm font-medium animate-pulse">
                New AI features!
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#0c2f41]">{stat.number}</div>
                <div className="text-sm font-medium text-[#0c2f41]/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="text-center mb-8">
            <p className="text-[#0c2f41]/70 font-medium mb-2">SUPPORTED PLATFORMS</p>
            <h2 className="text-2xl md:text-3xl font-playfair font-bold text-[#0c2f41]">
              Connect all your favorite platforms
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {socialPlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm mb-2">
                    <Icon className="h-8 w-8" />
                  </div>
                  <span className="text-sm font-medium text-[#0c2f41]">{platform.name}</span>
                </div>
              );
            })}
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
            {mainFeatures.map((feature, index) => (
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

        {/* Detailed Features Sections */}
        {detailedFeatures.map((feature, index) => (
          <section key={index} className={`${feature.color} py-16 md:py-24`}>
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "order-2" : "order-1"}>
                  <p className="text-sm font-semibold tracking-wider text-[#0c2f41]">{feature.category}</p>
                  <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0c2f41] mt-2">
                    {feature.title}
                  </h2>
                  <p className="mt-4 text-lg text-[#0c2f41]/80">
                    {feature.description}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="mt-1 mr-3 flex-shrink-0 w-5 h-5 text-primary" />
                        <span className="text-[#0c2f41]/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button className="bg-[#0c2f41] hover:bg-[#0c2f41]/90 text-white">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "order-1" : "order-2"}>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="rounded-lg shadow-lg w-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Process Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-white/30 rounded-lg">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0c2f41]">
              From idea to impact in four simple steps
            </h2>
            <p className="mt-4 text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              A streamlined workflow designed to maximize your social media presence
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
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* AI Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-[#0c2f41]/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Try the AI assistant
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
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
                    <li className="mb-2">Excited to announce our new product! Join us for the launch on [date] and be among the first to experience the future of [industry].</li>
                    <li className="mb-2">The wait is over! After months of development, we're thrilled to unveil our latest innovation. #ProductLaunch #Innovation</li>
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
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-[#fdf9e2]/50 rounded-lg">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0c2f41]">
              Loved by social media managers
            </h2>
            <p className="mt-4 text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              Hear what our customers have to say about YappHQ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0c2f41]">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              Start with a 30-day free trial. No credit card required.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-[#0c2f41]/70">
              Need a custom plan for your enterprise? <a href="#" className="text-primary font-medium">Contact us</a>
            </p>
          </div>
        </section>

        {/* Resources Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24 bg-[#e6f2fa]/50 rounded-lg">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0c2f41]">
              Resources to help you succeed
            </h2>
            <p className="mt-4 text-lg text-[#0c2f41]/80 max-w-2xl mx-auto">
              Explore our library of guides, tutorials, and tips to get the most out of YappHQ
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Link to={resource.link} key={index}>
                  <Card className="h-full hover:shadow-md transition-all border-none">
                    <CardHeader>
                      <div className="bg-white p-3 w-12 h-12 rounded-full mb-4 flex items-center justify-center shadow-sm">
                        <Icon className="h-6 w-6 text-[#0c2f41]" />
                      </div>
                      <CardTitle className="text-[#0c2f41]">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#0c2f41]/80">{resource.description}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="inline-flex items-center text-[#0c2f41] font-medium hover:underline">
                        Learn more
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="bg-[#0c2f41] rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-white mb-6">
              Ready to transform your social media presence?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Start your 30-day free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email..." 
                className="px-4 py-3 rounded-md border border-white/30 bg-white/10 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-white/30"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button className="rounded-md bg-primary hover:bg-primary/90 text-white px-6 py-3">
                Get started
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-1">
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
              <p className="text-[#0c2f41]/70 max-w-xs">
                The all-in-one social media toolkit for teams of all sizes.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#0c2f41] mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Features</Link></li>
                <li><Link to="/pricing" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Pricing</Link></li>
                <li><a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Integrations</a></li>
                <li><a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#0c2f41] mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link to="/resources" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Blog</Link></li>
                <li><a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Guides</a></li>
                <li><a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Support</a></li>
                <li><a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-[#0c2f41] mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">About</a></li>
                <li><a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Careers</a></li>
                <li><a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Privacy</a></li>
                <li><a href="#" className="text-[#0c2f41]/70 hover:text-[#0c2f41]">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#0c2f41]/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#0c2f41]/70">
              © {new Date().getFullYear()} YappHQ. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-[#0c2f41]/70 hover:text-[#0c2f41]">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-[#0c2f41]/70 hover:text-[#0c2f41]">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-[#0c2f41]/70 hover:text-[#0c2f41]">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
