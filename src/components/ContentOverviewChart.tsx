
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Skeleton } from "@/components/ui/skeleton";

interface ContentOverviewChartProps {
  period: "7days" | "30days" | "90days" | "year";
  isLoading?: boolean;
}

export function ContentOverviewChart({ period, isLoading = false }: ContentOverviewChartProps) {
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
  
  // Custom tooltip formatter
  const formatTooltipValue = (value: number, name: string) => {
    if (name === 'engagement') return `${value}%`;
    if (name === 'reach') return value.toLocaleString();
    return value;
  };

  if (isLoading) {
    return (
      <div className="h-[300px] flex items-center justify-center">
        <Skeleton className="w-full h-full" />
      </div>
    );
  }

  return (
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
          <defs>
            <linearGradient id="engagement" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="reach" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="posts" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffc658" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f5" />
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12 }}
            tickMargin={10}
          />
          <YAxis 
            yAxisId="left" 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis 
            yAxisId="right" 
            orientation="right" 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(0)}K` : value}
          />
          <Tooltip 
            formatter={formatTooltipValue}
            contentStyle={{ 
              borderRadius: '8px',
              border: '1px solid #f1f1f1',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              fontSize: '12px'
            }}
          />
          <Legend 
            verticalAlign="top" 
            height={36}
            wrapperStyle={{ paddingTop: '10px' }}
          />
          <Area 
            yAxisId="left" 
            type="monotone" 
            dataKey="engagement" 
            name="Engagement (%)" 
            stroke="#8884d8" 
            fill="url(#engagement)" 
            activeDot={{ r: 6 }}
          />
          <Area 
            yAxisId="right" 
            type="monotone" 
            dataKey="reach" 
            name="Reach" 
            stroke="#82ca9d" 
            fill="url(#reach)"
            activeDot={{ r: 6 }}
          />
          <Area 
            yAxisId="left" 
            type="monotone" 
            dataKey="posts" 
            name="Posts" 
            stroke="#ffc658" 
            fill="url(#posts)"
            activeDot={{ r: 6 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
