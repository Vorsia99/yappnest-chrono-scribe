
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface InsightCardProps {
  title: string;
  description?: string;
  value?: string;
  icon: React.ReactNode;
  action?: string;
  actionVariant?: 'default' | 'outline' | 'secondary';
  onActionClick?: () => void;
  trend?: string;
  trendDirection?: 'up' | 'down' | 'neutral';
  badge?: {
    text: string;
    color: 'green' | 'yellow' | 'red' | 'blue';
  };
}

export function InsightCard({
  title,
  description,
  value,
  icon,
  action,
  actionVariant = 'default',
  onActionClick,
  badge,
  trend,
  trendDirection
}: InsightCardProps) {
  return (
    <div className="flex gap-4 p-4 border rounded-lg hover:bg-slate-50 transition-colors animate-fade-in">
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-medium text-lg">{title}</h4>
          {badge && (
            <Badge className={cn(
              badge.color === 'green' && "bg-green-100 text-green-800",
              badge.color === 'yellow' && "bg-yellow-100 text-yellow-800",
              badge.color === 'red' && "bg-red-100 text-red-800",
              badge.color === 'blue' && "bg-blue-100 text-blue-800",
            )}>
              {badge.text}
            </Badge>
          )}
        </div>
        
        {value && <p className="text-xl font-medium mt-1">{value}</p>}
        
        {trend && (
          <div className="flex items-center gap-1 mt-1">
            <span className={cn(
              "text-sm font-medium",
              trendDirection === 'up' && "text-green-600",
              trendDirection === 'down' && "text-red-600",
              trendDirection === 'neutral' && "text-blue-600"
            )}>
              {trend}
            </span>
          </div>
        )}
        
        {description && <p className="text-muted-foreground mb-3 mt-1">{description}</p>}
        
        {action && (
          <Button 
            variant={actionVariant} 
            size="sm"
            onClick={onActionClick}
            className="mt-2"
          >
            {action}
          </Button>
        )}
      </div>
    </div>
  );
}
