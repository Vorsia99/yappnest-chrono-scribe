
import React from 'react';
import { cn } from '@/lib/utils';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  gradient?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  className,
  gradient = "from-blue-50 to-blue-100"
}: FeatureCardProps) => {
  return (
    <div className={cn(
      `bg-gradient-to-br ${gradient} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow`,
      className
    )}>
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2 text-yapp-deep-navy">{title}</h3>
      <p className="text-yapp-text-navy-light">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
