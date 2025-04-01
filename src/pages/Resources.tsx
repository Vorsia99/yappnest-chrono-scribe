
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';

const Resources = () => {
  const resourceCategories = [
    { name: 'Guide', color: 'bg-primary/10 text-primary' },
    { name: 'Tutorial', color: 'bg-blue-100 text-blue-700' },
    { name: 'Case Study', color: 'bg-green-100 text-green-700' },
    { name: 'Template', color: 'bg-purple-100 text-purple-700' },
    { name: 'Webinar', color: 'bg-amber-100 text-amber-700' },
  ];
  
  const resources = [
    {
      title: "Creating a Content Calendar That Works",
      description: "Learn how to organize your social media strategy with an effective content calendar system",
      category: "Guide",
      image: "/placeholder.svg"
    },
    {
      title: "Mastering Instagram Algorithm in 2023",
      description: "Understand the latest Instagram algorithm changes and how to optimize your content",
      category: "Tutorial",
      image: "/placeholder.svg"
    },
    {
      title: "How Fashion Brand X Grew Their Audience by 200%",
      description: "A detailed case study on successful audience growth strategies",
      category: "Case Study",
      image: "/placeholder.svg"
    },
    {
      title: "Social Media Metrics Tracker",
      description: "Download our free template to track and analyze your social media performance",
      category: "Template",
      image: "/placeholder.svg"
    },
    {
      title: "AI Content Creation Masterclass",
      description: "Watch our in-depth webinar on leveraging AI for social media content",
      category: "Webinar",
      image: "/placeholder.svg"
    },
    {
      title: "Building a Personal Brand on LinkedIn",
      description: "Step-by-step guide to establishing a strong personal brand",
      category: "Guide",
      image: "/placeholder.svg"
    },
    {
      title: "TikTok Marketing for Beginners",
      description: "Learn the basics of creating engaging TikTok content that converts",
      category: "Tutorial",
      image: "/placeholder.svg"
    },
    {
      title: "B2B Social Media Strategy Template",
      description: "Structured template for B2B companies to plan their social media content",
      category: "Template",
      image: "/placeholder.svg"
    },
    {
      title: "How Startup Y Achieved Viral Growth",
      description: "Case study on a tech startup's journey to social media success",
      category: "Case Study",
      image: "/placeholder.svg"
    }
  ];
  
  const getCategoryColor = (category) => {
    const foundCategory = resourceCategories.find(c => c.name === category);
    return foundCategory ? foundCategory.color : 'bg-gray-100 text-gray-700';
  };

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

      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-yapphq-dark hover:opacity-80 mb-8 animate-fade-in">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-yapphq-dark animate-fade-in">
          Resources
        </h1>
        
        <p className="text-xl text-yapphq-dark/80 max-w-3xl mb-12 animate-fade-in" style={{animationDelay: "0.1s"}}>
          Explore our collection of guides, tutorials, and best practices to help you master social media management.
        </p>
        
        {/* Resource Filter */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <Button variant="outline" className="rounded-full bg-white text-yapphq-dark hover:bg-primary/5 border-yapphq-dark/20">
            All Resources
          </Button>
          {resourceCategories.map((category, index) => (
            <Button 
              key={category.name}
              variant="outline" 
              className="rounded-full bg-white text-yapphq-dark hover:bg-primary/5 border-yapphq-dark/20"
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div 
              key={resource.title} 
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group animate-fade-in hover-scale"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="h-48 bg-primary/5 relative overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${getCategoryColor(resource.category)}`}>
                  {resource.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-yapphq-dark">{resource.title}</h3>
                <p className="text-yapphq-dark/80 mb-4">{resource.description}</p>
                <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/5 rounded-lg p-8 text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yapphq-dark">
            Need Custom Support?
          </h2>
          <p className="text-lg text-yapphq-dark/80 mb-6">
            Our team of social media experts is here to help you succeed. Schedule a consultation today.
          </p>
          <Button size="lg" className="rounded-full bg-primary text-white px-8 hover-scale shadow-soft">
            Contact Our Team
          </Button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2">
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
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-yapphq-dark mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">All Resources</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Guides</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Templates</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Webinars</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-yapphq-dark mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">About</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Contact</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Privacy</a></li>
                <li><a href="#" className="text-yapphq-dark/70 hover:text-yapphq-dark transition-colors">Terms</a></li>
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Resources;
