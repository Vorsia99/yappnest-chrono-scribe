
import React from 'react';
import { Link } from 'react-router-dom';

interface YappLogoProps {
  className?: string;
  textClassName?: string;
  showText?: boolean;
}

const YappLogo = ({ className, textClassName, showText = true }: YappLogoProps) => {
  return (
    <Link to="/" className={cn("inline-flex items-center", className)}>
      <svg 
        width="36" 
        height="24" 
        viewBox="0 0 40 25" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path d="M12 3L4 11L12 19" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 6L36 14L28 22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      
      {showText && (
        <span className={cn("ml-2.5 text-2xl font-normal leading-none", textClassName)}>
          yappHQ
        </span>
      )}
    </Link>
  );
};

import { cn } from '@/lib/utils';
export default YappLogo;
