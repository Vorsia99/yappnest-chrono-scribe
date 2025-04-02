
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface EngagementHeatmapProps {
  platform?: string;
  contentType?: string;
  metric?: string;
}

export function EngagementHeatmap({ platform = 'all', contentType = 'all-content', metric = 'engagement' }: EngagementHeatmapProps) {
  const [viewType, setViewType] = useState<'engagement' | 'views'>('engagement');
  
  // Generate random data for the heatmap
  const generateHeatmapData = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const data: { [key: string]: { [key: string]: number } } = {};
    
    days.forEach(day => {
      data[day] = {};
      for (let hour = 0; hour < 24; hour++) {
        // Generate higher values for certain times (e.g., evenings, weekends)
        let baseValue = Math.random() * 5;
        
        // Boost evening hours (6PM-10PM)
        if (hour >= 18 && hour <= 22) {
          baseValue *= 1.5;
        }
        
        // Boost weekend days
        if (day === 'Sat' || day === 'Sun') {
          baseValue *= 1.3;
        }
        
        // Boost Wednesday evening for Instagram (fictional pattern)
        if (platform === 'instagram' && day === 'Wed' && hour >= 18 && hour <= 20) {
          baseValue *= 1.8;
        }
        
        // Adjust for content type
        if (contentType === 'stories' && viewType === 'views') {
          baseValue *= 1.2;
        }
        
        data[day][hour] = Math.min(10, baseValue);
      }
    });
    
    return data;
  };
  
  const heatmapData = generateHeatmapData();
  
  // Helper to get color intensity based on value
  const getColorIntensity = (value: number) => {
    // Scale from 0-10 to 100-900 for tailwind color scale
    const intensity = Math.floor((value / 10) * 800) + 100;
    const clampedIntensity = Math.min(900, Math.max(100, intensity));
    // Round to nearest 100
    const roundedIntensity = Math.round(clampedIntensity / 100) * 100;
    
    return viewType === 'engagement' 
      ? `bg-green-${roundedIntensity}` 
      : `bg-blue-${roundedIntensity}`;
  };
  
  // Helper to format hours for display
  const formatHour = (hour: number) => {
    if (hour === 0) return '12AM';
    if (hour === 12) return '12PM';
    return hour < 12 ? `${hour}AM` : `${hour - 12}PM`;
  };
  
  // Get best performing time
  const getBestTime = () => {
    let maxValue = -1;
    let bestDay = '';
    let bestHour = 0;
    
    Object.entries(heatmapData).forEach(([day, hours]) => {
      Object.entries(hours).forEach(([hourStr, value]) => {
        const hour = parseInt(hourStr, 10);
        if (value > maxValue) {
          maxValue = value;
          bestDay = day;
          bestHour = hour;
        }
      });
    });
    
    const metricDisplay = viewType === 'engagement' ? 'engagement' : 'views';
    const value = (maxValue * (viewType === 'engagement' ? 1 : 1000)).toFixed(1);
    const metricUnit = viewType === 'engagement' ? '%' : '';
    
    return `Highest ${metricDisplay} on ${bestDay} at ${formatHour(bestHour)} (${value}${metricUnit})`;
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setViewType('engagement')}
            className={`px-3 py-1 text-sm rounded-md ${viewType === 'engagement' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}
          >
            Engagement
          </button>
          <button 
            onClick={() => setViewType('views')}
            className={`px-3 py-1 text-sm rounded-md ${viewType === 'views' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}
          >
            Views
          </button>
        </div>
        <span className="text-xs text-muted-foreground">{getBestTime()}</span>
      </div>

      <div className="relative">
        {/* Hour labels (top) */}
        <div className="grid grid-cols-8 mb-1">
          <div className="text-xs text-right pr-2"></div>
          {[6, 9, 12, 15, 18, 21, 0].map((hour) => (
            <div key={hour} className="text-xs text-center col-span-1">
              {formatHour(hour)}
            </div>
          ))}
        </div>
        
        {/* Heatmap grid */}
        <div className="grid grid-cols-8 gap-1">
          {Object.entries(heatmapData).map(([day, hours]) => (
            <>
              {/* Day label */}
              <div key={`label-${day}`} className="flex items-center">
                <span className="text-xs font-medium">{day}</span>
              </div>
              
              {/* Hours for this day */}
              <div key={`hours-${day}`} className="col-span-7 grid grid-cols-24 gap-[1px]">
                {Array.from({ length: 24 }).map((_, hourIndex) => {
                  const value = hours[hourIndex];
                  const colorClass = getColorIntensity(value);
                  const tooltipText = `${day} ${formatHour(hourIndex)}: ${value.toFixed(1)}% engagement`;
                  
                  return (
                    <TooltipProvider key={`${day}-${hourIndex}`}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div 
                            className={`h-6 rounded-sm border ${colorClass} hover:ring-2 hover:ring-offset-1 hover:ring-yapp-misty-blue transition-all cursor-pointer`}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{tooltipText}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            </>
          ))}
        </div>
        
        <div className="mt-4 flex justify-between text-xs text-muted-foreground">
          <span>Lower {viewType === 'engagement' ? 'engagement' : 'views'}</span>
          <div className="flex items-center gap-1">
            <div className={`w-4 h-4 rounded-sm ${viewType === 'engagement' ? 'bg-green-200' : 'bg-blue-200'}`}></div>
            <div className={`w-4 h-4 rounded-sm ${viewType === 'engagement' ? 'bg-green-400' : 'bg-blue-400'}`}></div>
            <div className={`w-4 h-4 rounded-sm ${viewType === 'engagement' ? 'bg-green-600' : 'bg-blue-600'}`}></div>
            <div className={`w-4 h-4 rounded-sm ${viewType === 'engagement' ? 'bg-green-800' : 'bg-blue-800'}`}></div>
          </div>
          <span>Higher {viewType === 'engagement' ? 'engagement' : 'views'}</span>
        </div>
      </div>
    </div>
  );
}
