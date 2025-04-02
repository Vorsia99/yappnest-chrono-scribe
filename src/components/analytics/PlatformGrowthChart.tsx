
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface PlatformGrowthChartProps {
  platform?: string;
  timeRange?: string;
}

// Sample data for the chart
const followerGrowthData = [
  { name: "Jan", instagram: 5200, youtube: 3800, x: 2400, tiktok: 6800, threads: 1500, linkedin: 950, pinterest: 1200, bluesky: 300, facebook: 7500 },
  { name: "Feb", instagram: 5800, youtube: 4200, x: 2700, tiktok: 7400, threads: 1800, linkedin: 1050, pinterest: 1400, bluesky: 500, facebook: 7800 },
  { name: "Mar", instagram: 6500, youtube: 4600, x: 3100, tiktok: 8100, threads: 2200, linkedin: 1150, pinterest: 1600, bluesky: 700, facebook: 8100 },
  { name: "Apr", instagram: 7200, youtube: 5000, x: 3400, tiktok: 8900, threads: 2600, linkedin: 1300, pinterest: 1750, bluesky: 900, facebook: 8500 },
  { name: "May", instagram: 8100, youtube: 5500, x: 3800, tiktok: 9800, threads: 3100, linkedin: 1500, pinterest: 1900, bluesky: 1100, facebook: 8900 },
  { name: "Jun", instagram: 9000, youtube: 6200, x: 4300, tiktok: 10800, threads: 3600, linkedin: 1700, pinterest: 2050, bluesky: 1300, facebook: 9300 },
  { name: "Jul", instagram: 10000, youtube: 6800, x: 4900, tiktok: 12000, threads: 4100, linkedin: 1900, pinterest: 2200, bluesky: 1500, facebook: 9800 },
  { name: "Aug", instagram: 11200, youtube: 7300, x: 5400, tiktok: 13400, threads: 4500, linkedin: 2100, pinterest: 2350, bluesky: 1700, facebook: 10200 },
  { name: "Sep", instagram: 12500, youtube: 7800, x: 5800, tiktok: 14900, threads: 5000, linkedin: 2350, pinterest: 2500, bluesky: 1900, facebook: 10700 },
  { name: "Oct", instagram: 13800, youtube: 8200, x: 6300, tiktok: 16500, threads: 5500, linkedin: 2600, pinterest: 2650, bluesky: 2100, facebook: 11300 },
  { name: "Nov", instagram: 15400, youtube: 8500, x: 6800, tiktok: 18300, threads: 6000, linkedin: 2800, pinterest: 2800, bluesky: 2300, facebook: 12000 },
  { name: "Dec", instagram: 17000, youtube: 8900, x: 7500, tiktok: 20000, threads: 6500, linkedin: 3000, pinterest: 3000, bluesky: 2500, facebook: 12800 },
];

export function PlatformGrowthChart({ platform = 'all', timeRange = '30days' }: PlatformGrowthChartProps) {
  // Filter the data based on the timeRange
  const filterDataByTimeRange = () => {
    let filteredData = [...followerGrowthData];
    
    if (timeRange === '90days') {
      return filteredData.slice(-9); // Last 9 months
    } else if (timeRange === '30days') {
      return filteredData.slice(-6); // Last 6 months
    } else if (timeRange === '7days') {
      return filteredData.slice(-3); // Last 3 months
    }
    
    return filteredData;
  };

  const filteredData = filterDataByTimeRange();

  return (
    <div className="w-full h-[350px]">
      <ChartContainer config={{
        instagram: { color: "#E1306C" },
        youtube: { color: "#FF0000" },
        x: { color: "#000000" },
        tiktok: { color: "#69C9D0" },
        threads: { color: "#313131" },
        linkedin: { color: "#0A66C2" },
        pinterest: { color: "#E60023" },
        bluesky: { color: "#0085FF" },
        facebook: { color: "#1877F2" }
      }}>
        <AreaChart
          data={filteredData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            {/* Gradient definitions for each platform */}
            <linearGradient id="colorInstagram" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E1306C" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#E1306C" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorYoutube" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF0000" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#FF0000" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorX" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorTiktok" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#69C9D0" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#69C9D0" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorThreads" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#313131" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#313131" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorLinkedin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0A66C2" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#0A66C2" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPinterest" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E60023" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#E60023" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorBluesky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0085FF" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#0085FF" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorFacebook" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1877F2" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#1877F2" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <ChartTooltip content={<ChartTooltipContent />} />
          
          {/* Show all platforms or just the selected one */}
          {(platform === 'all' || platform === 'instagram') && (
            <Area 
              type="monotone" 
              dataKey="instagram" 
              name="Instagram"
              stroke="#E1306C" 
              fillOpacity={1} 
              fill="url(#colorInstagram)" 
              animationDuration={1000}
            />
          )}
          
          {(platform === 'all' || platform === 'youtube') && (
            <Area 
              type="monotone" 
              dataKey="youtube" 
              name="YouTube"
              stroke="#FF0000" 
              fillOpacity={1} 
              fill="url(#colorYoutube)" 
              animationDuration={1000}
            />
          )}
          
          {(platform === 'all' || platform === 'x') && (
            <Area 
              type="monotone" 
              dataKey="x" 
              name="X"
              stroke="#000000" 
              fillOpacity={1} 
              fill="url(#colorX)" 
              animationDuration={1000}
            />
          )}
          
          {(platform === 'all' || platform === 'tiktok') && (
            <Area 
              type="monotone" 
              dataKey="tiktok" 
              name="TikTok"
              stroke="#69C9D0" 
              fillOpacity={1} 
              fill="url(#colorTiktok)" 
              animationDuration={1000}
            />
          )}
          
          {(platform === 'all' || platform === 'threads') && (
            <Area 
              type="monotone" 
              dataKey="threads" 
              name="Threads"
              stroke="#313131" 
              fillOpacity={1} 
              fill="url(#colorThreads)" 
              animationDuration={1000}
            />
          )}
          
          {(platform === 'all' || platform === 'linkedin') && (
            <Area 
              type="monotone" 
              dataKey="linkedin" 
              name="LinkedIn"
              stroke="#0A66C2" 
              fillOpacity={1} 
              fill="url(#colorLinkedin)" 
              animationDuration={1000}
            />
          )}
          
          {(platform === 'all' || platform === 'pinterest') && (
            <Area 
              type="monotone" 
              dataKey="pinterest" 
              name="Pinterest"
              stroke="#E60023" 
              fillOpacity={1} 
              fill="url(#colorPinterest)" 
              animationDuration={1000}
            />
          )}
          
          {(platform === 'all' || platform === 'bluesky') && (
            <Area 
              type="monotone" 
              dataKey="bluesky" 
              name="Bluesky"
              stroke="#0085FF" 
              fillOpacity={1} 
              fill="url(#colorBluesky)" 
              animationDuration={1000}
            />
          )}
          
          {(platform === 'all' || platform === 'facebook') && (
            <Area 
              type="monotone" 
              dataKey="facebook" 
              name="Facebook"
              stroke="#1877F2" 
              fillOpacity={1} 
              fill="url(#colorFacebook)" 
              animationDuration={1000}
            />
          )}
          
          <Legend />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}
