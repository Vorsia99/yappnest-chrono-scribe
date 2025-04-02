
import React from 'react';
import { cn } from '@/lib/utils';

export interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  initials?: string;
  image?: string;
  rating?: number;
  className?: string;
}

const TestimonialCard = ({
  quote,
  name,
  title,
  company,
  initials,
  image,
  rating = 5,
  className
}: TestimonialCardProps) => {
  return (
    <div className={cn("bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow", className)}>
      <div className="flex flex-col gap-6">
        {rating > 0 && (
          <div className="flex items-center mb-2">
            {[...Array(rating)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        )}
        
        <blockquote className="text-yapp-text-navy italic mb-4">
          "{quote}"
        </blockquote>
        
        <div className="flex items-center mt-auto">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
              <span className="text-lg font-medium text-gray-500">{initials || name.charAt(0)}</span>
            </div>
          )}
          
          <div>
            <p className="font-medium text-yapp-deep-navy">{name}</p>
            <p className="text-sm text-yapp-text-navy-light">{title}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
