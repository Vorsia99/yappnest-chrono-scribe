
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ContentOverviewChartProps {
  period: "7days" | "30days" | "90days" | "year";
}

export function ContentOverviewChart({ period }: ContentOverviewChartProps) {
  // Generate sample data based on the selected period
  const generateData = () => {
    let data = [];
    const periods = {
      "7days": { count: 7, format: (i: number) => `Day ${i + 1}` },
      "30days": { count: 10, format: (i: number) => `Day ${i * 3}` },
      "90days": { count: 6, format: (i: number) => `Month ${Math.floor(i / 2) + 1}` },
      "year": { count: 12, format: (i: number) => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i] }
    };
    
    const { count, format } = periods[period];
    
    for (let i = 0; i < count; i++) {
      data.push({
        name: format(i),
        engagement: Math.floor(Math.random() * 100),
        reach: Math.floor(Math.random() * 5000) + 3000,
        posts: Math.floor(Math.random() * 10) + 1
      });
    }
    
    return data;
  };
  
  const data = generateData();

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Area 
                yAxisId="left" 
                type="monotone" 
                dataKey="engagement" 
                name="Engagement (%)" 
                stroke="#8884d8" 
                fill="#8884d8" 
                fillOpacity={0.3} 
              />
              <Area 
                yAxisId="right" 
                type="monotone" 
                dataKey="reach" 
                name="Reach" 
                stroke="#82ca9d" 
                fill="#82ca9d" 
                fillOpacity={0.3} 
              />
              <Area 
                yAxisId="left" 
                type="monotone" 
                dataKey="posts" 
                name="Posts" 
                stroke="#ffc658" 
                fill="#ffc658" 
                fillOpacity={0.3} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
