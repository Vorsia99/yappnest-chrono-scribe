
import { useState } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
  Bar,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";

interface ContentPerformanceChartProps {
  contentType?: string;
  platform?: string;
  timeRange?: string;
}

const contentPerformanceData = [
  { name: "Images", engagement: 4.8, reach: 12400 },
  { name: "Videos", engagement: 6.2, reach: 18600 },
  { name: "Carousels", engagement: 5.5, reach: 15800 },
  { name: "Stories", engagement: 3.9, reach: 9200 },
  { name: "Reels", engagement: 7.3, reach: 22500 },
];

const sponsoredContentData = [
  { name: "Images", engagement: 4.2, reach: 10200 },
  { name: "Videos", engagement: 5.8, reach: 16800 },
  { name: "Carousels", engagement: 5.1, reach: 14500 },
  { name: "Stories", engagement: 3.6, reach: 8500 },
  { name: "Reels", engagement: 6.9, reach: 20000 },
];

export function ContentPerformanceChart({ contentType = 'all-content', platform = 'all', timeRange = '30days' }: ContentPerformanceChartProps) {
  const [metric, setMetric] = useState<string>("engagement");
  const [showSponsored, setShowSponsored] = useState<boolean>(false);
  
  // Filter data based on content type
  const filterData = () => {
    const sourceData = showSponsored ? sponsoredContentData : contentPerformanceData;
    
    if (contentType === 'posts') {
      return sourceData.filter(item => item.name !== 'Stories');
    }
    if (contentType === 'stories') {
      return sourceData.filter(item => item.name === 'Stories');
    }
    
    return sourceData;
  };
  
  const data = filterData();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Select value={metric} onValueChange={setMetric}>
          <SelectTrigger className="w-[180px] text-sm">
            <SelectValue placeholder="Select metric" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engagement">Engagement Rate</SelectItem>
            <SelectItem value="reach">Reach</SelectItem>
            <SelectItem value="impressions">Impressions</SelectItem>
            <SelectItem value="clicks">Clicks</SelectItem>
          </SelectContent>
        </Select>
        
        <Toggle 
          aria-label="Toggle sponsored content"
          pressed={showSponsored}
          onPressedChange={setShowSponsored}
          className="ml-auto text-sm"
        >
          Sponsored Only
        </Toggle>
      </div>
      
      {showSponsored && (
        <div className="text-sm text-muted-foreground bg-yapp-pale-blue p-3 rounded-md text-left">
          Showing sponsored content metrics • Avg. Engagement: 5.1% • Avg. Reach: 14,000
        </div>
      )}
      
      <div className="h-[300px]">
        <ChartContainer config={{
          engagement: { color: "#4AFCA6" },
          reach: { color: "#A3BFFA" }
        }}>
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <ChartTooltip content={<ChartTooltipContent />} />
            {metric === 'engagement' && (
              <Bar 
                yAxisId="left" 
                dataKey="engagement" 
                name="Engagement %" 
                fill="#4AFCA6" 
                radius={[4, 4, 0, 0]}
                animationDuration={800}
              />
            )}
            {metric === 'reach' && (
              <Bar 
                yAxisId="right" 
                dataKey="reach" 
                name="Reach" 
                fill="#A3BFFA" 
                radius={[4, 4, 0, 0]}
                animationDuration={800}
              />
            )}
            <Legend />
          </ComposedChart>
        </ChartContainer>
      </div>
    </div>
  );
}
