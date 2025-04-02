
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PieChart, LineChart, BarChart } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart as RechartsLineChart,
  Line
} from "recharts";

interface DemographicsChartProps {
  type: 'age' | 'location' | 'interests' | 'activity';
  platform?: string;
  timeRange?: string;
  contentType?: string;
}

const demographicData = [
  { name: "18-24", value: 35 },
  { name: "25-34", value: 40 },
  { name: "35-44", value: 15 },
  { name: "45-54", value: 7 },
  { name: "55+", value: 3 },
];

const genderData = [
  { name: "Female", value: 60 },
  { name: "Male", value: 37 },
  { name: "Other", value: 3 },
];

const locationData = [
  { name: "United States", value: 40 },
  { name: "United Kingdom", value: 15 },
  { name: "Canada", value: 12 },
  { name: "Australia", value: 8 },
  { name: "Germany", value: 6 },
  { name: "France", value: 5 },
  { name: "Others", value: 14 },
];

const interestData = [
  { name: "Fashion", value: 75 },
  { name: "Tech", value: 60 },
  { name: "Travel", value: 55 },
  { name: "Food", value: 45 },
  { name: "Fitness", value: 40 },
  { name: "Beauty", value: 35 },
  { name: "Gaming", value: 30 },
  { name: "Music", value: 25 },
  { name: "Art", value: 20 },
  { name: "Sports", value: 15 },
];

const activityData = [
  { name: "Mon", value: 65 },
  { name: "Tue", value: 70 },
  { name: "Wed", value: 85 },
  { name: "Thu", value: 90 },
  { name: "Fri", value: 80 },
  { name: "Sat", value: 60 },
  { name: "Sun", value: 50 },
];

const COLORS = ['#4AFCA6', '#A3BFFA', '#FF9CAC', '#FFB347', '#9966CC'];

export function DemographicsChart({ 
  type, 
  platform = 'all', 
  timeRange = '30days',
  contentType = 'all-content' 
}: DemographicsChartProps) {
  
  const [chartView, setChartView] = useState<'chart' | 'data'>('chart');

  // Render Age & Gender chart
  const renderAgeChart = () => (
    <div className="flex flex-col h-[300px]">
      <div className="flex justify-center flex-1">
        <ChartContainer config={{
          age: { color: "#4AFCA6" },
          gender: { color: "#A3BFFA" },
        }}>
          <RechartsPieChart>
            <Pie
              data={demographicData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              nameKey="name"
              label
              animationDuration={800}
            >
              {demographicData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
            <Legend />
          </RechartsPieChart>
        </ChartContainer>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <div className="flex flex-col items-center">
          <h4 className="text-sm font-medium mb-2">Gender</h4>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-blue-100">Female: 60%</Badge>
            <Badge variant="outline" className="bg-pink-100">Male: 37%</Badge>
            <Badge variant="outline" className="bg-gray-100">Other: 3%</Badge>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Render Location chart
  const renderLocationChart = () => (
    <div className="h-[300px]">
      <ChartContainer config={{
        location: { color: "#A3BFFA" },
      }}>
        <RechartsBarChart
          data={locationData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis 
            dataKey="name" 
            type="category" 
            scale="band"
            tick={{ fontSize: 12 }}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar 
            dataKey="value" 
            name="Percentage" 
            fill="#A3BFFA" 
            radius={[0, 4, 4, 0]}
            animationDuration={800}
          />
        </RechartsBarChart>
      </ChartContainer>
    </div>
  );
  
  // Render Interests chart
  const renderInterestsChart = () => (
    <div className="h-[300px]">
      <div className="h-full flex flex-wrap justify-center items-center gap-3 p-6 overflow-y-auto">
        {interestData.map((interest, idx) => {
          const size = Math.max(70, Math.min(130, (interest.value / 10 + 70)));
          const opacity = Math.max(0.5, Math.min(1, interest.value / 100));
          
          return (
            <span 
              key={interest.name} 
              className="px-3 py-1 bg-yapp-misty-blue/20 rounded-full hover:bg-yapp-misty-blue/30 cursor-pointer transition-all" 
              style={{ 
                fontSize: `${size}%`, 
                opacity,
                transform: `rotate(${Math.random() * 10 - 5}deg)`
              }}
            >
              {interest.name}
            </span>
          );
        })}
      </div>
    </div>
  );
  
  // Render Activity chart
  const renderActivityChart = () => (
    <div className="h-[300px]">
      <ChartContainer config={{
        activity: { color: "#4AFCA6" },
      }}>
        <RechartsLineChart
          data={activityData}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            name="Activity Level" 
            stroke="#4AFCA6" 
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            animationDuration={800}
          />
        </RechartsLineChart>
      </ChartContainer>
      
      <div className="mt-4 text-center text-sm text-muted-foreground">
        <p>Your audience is most active on Thursdays at 6-8 PM</p>
      </div>
    </div>
  );

  // Render chart based on type
  const renderChart = () => {
    switch (type) {
      case 'age':
        return renderAgeChart();
      case 'location':
        return renderLocationChart();
      case 'interests':
        return renderInterestsChart();
      case 'activity':
        return renderActivityChart();
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setChartView('chart')}
            className={`px-3 py-1 text-xs rounded-md ${chartView === 'chart' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}
          >
            Chart
          </button>
          <button 
            onClick={() => setChartView('data')}
            className={`px-3 py-1 text-xs rounded-md ${chartView === 'data' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-600'}`}
          >
            Data Table
          </button>
        </div>
        
        {/* Chart type icon */}
        <div className="flex items-center gap-2">
          {type === 'age' && <PieChart size={16} className="text-muted-foreground" />}
          {type === 'location' && <BarChart size={16} className="text-muted-foreground" />}
          {type === 'interests' && <BarChart size={16} className="text-muted-foreground" />}
          {type === 'activity' && <LineChart size={16} className="text-muted-foreground" />}
          <span className="text-xs text-muted-foreground">
            {platform === 'all' ? 'All platforms' : platform}
          </span>
        </div>
      </div>

      {chartView === 'chart' ? (
        renderChart()
      ) : (
        <div className="h-[300px] overflow-y-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">{type === 'age' ? 'Age Group' : type === 'location' ? 'Location' : type === 'interests' ? 'Interest' : 'Day'}</th>
                <th className="text-left p-2">Percentage</th>
              </tr>
            </thead>
            <tbody>
              {(type === 'age' ? demographicData : 
                type === 'location' ? locationData : 
                type === 'interests' ? interestData : 
                activityData).map((item) => (
                <tr key={item.name} className="border-b hover:bg-slate-50">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.value}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
