
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 animate-fade-in">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 animate-fade-in">
          Resources
        </h1>
        
        <p className="text-xl text-gray-700 max-w-3xl mb-12 animate-fade-in" style={{animationDelay: "0.1s"}}>
          Explore our collection of guides, tutorials, and best practices to help you master social media management with YappHQ.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Placeholder for resource items that would be dynamically generated */}
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div 
              key={item} 
              className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale"
              style={{animationDelay: `${0.1 * index}s`}}
            >
              <div className="h-48 bg-primary/10 relative overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt={`Resource ${item}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-3">
                  {index % 3 === 0 ? 'Guide' : index % 3 === 1 ? 'Tutorial' : 'Case Study'}
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Resource Title {item}</h3>
                <p className="text-gray-700 mb-4">Short description of this resource and what users will learn or gain from it.</p>
                <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-primary/10 rounded-xl p-8 text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Need Custom Support?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our team of social media experts is here to help you succeed. Schedule a consultation today.
          </p>
          <Button size="lg" className="hover-scale shadow-soft">
            Contact Our Team
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
