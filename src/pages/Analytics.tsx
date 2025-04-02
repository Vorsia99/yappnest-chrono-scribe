
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpIcon, BarChart, Download, LineChart, PieChart, Calendar, TrendingUp, Users, Activity } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlatformStat } from "@/components/PlatformStat";
import { Badge } from "@/components/ui/badge";
import { TopPerformingPosts } from "@/components/TopPerformingPosts";
import { StatsCard } from "@/components/StatsCard";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  Tooltip,
  ComposedChart,
} from "recharts";

// Sample data for charts
const followerGrowthData = [
  { name: "Jan", instagram: 5200, youtube: 3800, x: 2400 },
  { name: "Feb", instagram: 5800, youtube: 4200, x: 2700 },
  { name: "Mar", instagram: 6500, youtube: 4600, x: 3100 },
  { name: "Apr", instagram: 7200, youtube: 5000, x: 3400 },
  { name: "May", instagram: 8100, youtube: 5500, x: 3800 },
  { name: "Jun", instagram: 9000, youtube: 6200, x: 4300 },
  { name: "Jul", instagram: 10000, youtube: 6800, x: 4900 },
  { name: "Aug", instagram: 11200, youtube: 7300, x: 5400 },
  { name: "Sep", instagram: 12500, youtube: 7800, x: 5800 },
  { name: "Oct", instagram: 13800, youtube: 8200, x: 6300 },
  { name: "Nov", instagram: 15400, youtube: 8500, x: 6800 },
  { name: "Dec", instagram: 17000, youtube: 8900, x: 7500 },
];

const contentPerformanceData = [
  { name: "Images", engagement: 4.8, reach: 12400 },
  { name: "Videos", engagement: 6.2, reach: 18600 },
  { name: "Carousels", engagement: 5.5, reach: 15800 },
  { name: "Stories", engagement: 3.9, reach: 9200 },
  { name: "Reels", engagement: 7.3, reach: 22500 },
];

const demographicData = [
  { name: "18-24", value: 35 },
  { name: "25-34", value: 40 },
  { name: "35-44", value: 15 },
  { name: "45-54", value: 7 },
  { name: "55+", value: 3 },
];

const EngagementHeatmap = () => (
  <div className="h-[250px] grid grid-cols-7 gap-1">
    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
      <div key={day} className="flex flex-col gap-1">
        <div className="text-xs text-center font-medium mb-1">{day}</div>
        {Array.from({ length: 6 }).map((_, i) => {
          const hour = 6 + i * 3; // 6AM, 9AM, 12PM, 3PM, 6PM, 9PM
          const hourLabel = hour <= 12 ? `${hour}AM` : `${hour - 12}PM`;
          // Random engagement between 1-10 for demo
          const engagement = Math.floor(Math.random() * 10) + 1;
          // Color based on engagement (1-10)
          const intensity = 20 + (engagement * 8);
          const bgColor = `bg-green-${intensity}`;
          
          return (
            <div 
              key={`${day}-${hour}`} 
              className={`h-6 rounded-sm border border-green-100 ${bgColor} hover:ring-2 hover:ring-offset-1 hover:ring-green-500 transition-all cursor-pointer`}
              title={`${day} ${hourLabel}: ${engagement}% engagement`}
            />
          );
        })}
      </div>
    ))}
  </div>
);

const Analytics = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Track performance across all your social platforms.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="x">X</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-content">
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Content Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-content">All Content</SelectItem>
              <SelectItem value="posts">Posts</SelectItem>
              <SelectItem value="stories">Stories</SelectItem>
              <SelectItem value="posts-stories">Posts + Stories</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      {/* Overview Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard 
          title="Total Reach" 
          value="120K" 
          description="+15% vs. last month" 
          icon={<Users className="h-4 w-4 text-muted-foreground" />} 
          trend="up" 
        />
        <StatsCard 
          title="Average Engagement" 
          value="4.8%" 
          description="+2.1% industry average" 
          icon={<Activity className="h-4 w-4 text-muted-foreground" />} 
          trend="up" 
        />
        <StatsCard 
          title="Total Posts" 
          value="85" 
          description="-5% vs. last month" 
          icon={<Calendar className="h-4 w-4 text-muted-foreground" />} 
          trend="down" 
          trendValue="-5%"
        />
        <StatsCard 
          title="Brand Appeal Score" 
          value="85/100" 
          description="High engagement audience" 
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />} 
          trend="up" 
        />
      </div>

      {/* Follower Growth Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Growth</CardTitle>
          <CardDescription>Follower growth across platforms over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[300px]" config={{
            instagram: { color: "#E1306C" },
            youtube: { color: "#FF0000" },
            x: { color: "#000000" }
          }}>
            <AreaChart
              data={followerGrowthData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
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
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="instagram" stroke="#E1306C" fillOpacity={1} fill="url(#colorInstagram)" />
              <Area type="monotone" dataKey="youtube" stroke="#FF0000" fillOpacity={1} fill="url(#colorYoutube)" />
              <Area type="monotone" dataKey="x" stroke="#000000" fillOpacity={1} fill="url(#colorX)" />
              <Legend />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Platform Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PlatformStat 
          platform="instagram"
          followers="18.2K"
          engagement="4.8%"
          growth="+120"
          posts="32"
        />
        <PlatformStat 
          platform="x"
          followers="12.4K"
          engagement="2.1%"
          growth="+86"
          posts="65"
        />
        <PlatformStat 
          platform="youtube"
          followers="8.5K"
          engagement="6.2%"
          growth="+45"
          posts="18"
        />
      </div>

      {/* Content Performance & Demographics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Content Performance</CardTitle>
            <CardDescription>Performance by content type</CardDescription>
            <Tabs defaultValue="chart" className="w-full">
              <TabsList className="grid grid-cols-2 w-[200px]">
                <TabsTrigger value="chart">Performance</TabsTrigger>
                <TabsTrigger value="heatmap">Heatmap</TabsTrigger>
              </TabsList>
              <TabsContent value="chart" className="pt-4">
                <ChartContainer className="h-[250px]" config={{
                  engagement: { color: "#4AFCA6" },
                  reach: { color: "#A3BFFA" }
                }}>
                  <ComposedChart
                    data={contentPerformanceData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar yAxisId="left" dataKey="engagement" name="Engagement %" fill="#4AFCA6" />
                    <Bar yAxisId="right" dataKey="reach" name="Reach" fill="#A3BFFA" />
                    <Legend />
                  </ComposedChart>
                </ChartContainer>
              </TabsContent>
              <TabsContent value="heatmap" className="pt-4">
                <EngagementHeatmap />
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Audience Demographics</CardTitle>
            <CardDescription>Age, location and interests</CardDescription>
            <Tabs defaultValue="age" className="w-full">
              <TabsList className="grid grid-cols-3 w-[300px]">
                <TabsTrigger value="age">Age & Gender</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="interests">Interests</TabsTrigger>
              </TabsList>
              <TabsContent value="age" className="pt-4 flex justify-center">
                <div className="flex flex-col items-center">
                  <div className="h-[220px] w-[220px] mb-4 relative">
                    <PieChart className="h-full w-full text-muted-foreground" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {demographicData.map((data) => (
                      <div key={data.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary"></div>
                        <span className="text-sm">{data.name}: {data.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="location" className="pt-4">
                <div className="h-[250px] flex items-center justify-center border rounded-md bg-muted/40">
                  <BarChart className="h-12 w-12 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Location data will appear here</span>
                </div>
              </TabsContent>
              <TabsContent value="interests" className="pt-4">
                <div className="h-[250px] border rounded-md bg-muted/40 p-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Fashion", "Tech", "Travel", "Food", "Fitness", "Beauty", "Gaming", "Music", "Art", "Sports"].map((interest, i) => {
                      // Random size and opacity for tag cloud effect
                      const size = Math.floor(Math.random() * 30) + 70; // 70-100%
                      const opacity = (Math.floor(Math.random() * 50) + 50) / 100; // 0.5-1.0
                      
                      return (
                        <span 
                          key={interest} 
                          className="px-3 py-1 bg-primary/20 rounded-full hover:bg-primary/30 cursor-pointer transition-all" 
                          style={{ 
                            fontSize: `${size}%`, 
                            opacity 
                          }}
                        >
                          {interest}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </div>

      {/* Top Performing Content */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performing Content</CardTitle>
          <CardDescription>Your best content from the last 30 days</CardDescription>
        </CardHeader>
        <CardContent className="pb-6">
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Platforms</TabsTrigger>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="x">X</TabsTrigger>
              <TabsTrigger value="youtube">YouTube</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <TopPerformingPosts />
            </TabsContent>
            
            <TabsContent value="instagram">
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Instagram top content will appear here</p>
              </div>
            </TabsContent>

            <TabsContent value="x">
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">X top content will appear here</p>
              </div>
            </TabsContent>

            <TabsContent value="youtube">
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">YouTube top content will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Insights & Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Insights & Recommendations</CardTitle>
          <CardDescription>AI-powered recommendations based on your performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            {
              title: "Posting Time Optimization",
              description: "Your Instagram Stories perform best at 6 PM on Wednesdays (avg. 5K views). Schedule more stories at this time!",
              action: "Schedule a Story",
              icon: <Calendar className="h-5 w-5" />
            },
            {
              title: "Collaboration Opportunity",
              description: "Based on your audience (60% Female, 50% 18-24, interested in Fashion), you're a great fit for brands like Sephora and H&M.",
              action: "Pitch Now",
              icon: <Users className="h-5 w-5" />
            },
            {
              title: "Content Strategy",
              description: "Your audience engages 40% more with behind-the-scenes stories. Post a story showing your daily routine!",
              action: "Create Story",
              icon: <Activity className="h-5 w-5" />
            }
          ].map((insight, i) => (
            <div key={i} className="flex gap-4 p-4 border rounded-lg hover:bg-slate-50 transition-colors">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {insight.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-lg">{insight.title}</h4>
                <p className="text-muted-foreground">{insight.description}</p>
              </div>
              <Button variant="outline" size="sm" className="whitespace-nowrap self-start">
                {insight.action}
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Collaboration Tracker */}
      <Card>
        <CardHeader>
          <CardTitle>Collaboration Tracker</CardTitle>
          <CardDescription>Track your brand partnerships and sponsored content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Brand</th>
                  <th className="text-left p-2">Campaign</th>
                  <th className="text-left p-2">Platform</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Performance</th>
                  <th className="text-left p-2">ROI</th>
                  <th className="text-left p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    brand: "Nike",
                    campaign: "Spring Collection",
                    platform: "Instagram",
                    type: "Post",
                    date: "Jun 5, 2023",
                    performance: "12K reach, 5.5% engagement",
                    roi: "$500",
                    status: "Completed"
                  },
                  {
                    brand: "Sephora",
                    campaign: "Beauty Tutorial",
                    platform: "Instagram",
                    type: "Story",
                    date: "Jun 10, 2023",
                    performance: "6K views, 300 replies",
                    roi: "$300",
                    status: "Pending Payment"
                  }
                ].map((collab, i) => (
                  <tr key={i} className="border-b hover:bg-slate-50 cursor-pointer">
                    <td className="p-2">{collab.brand}</td>
                    <td className="p-2">{collab.campaign}</td>
                    <td className="p-2">{collab.platform}</td>
                    <td className="p-2">{collab.type}</td>
                    <td className="p-2">{collab.date}</td>
                    <td className="p-2">{collab.performance}</td>
                    <td className="p-2">{collab.roi}</td>
                    <td className="p-2">
                      <Badge className={collab.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}>
                        {collab.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm">
              Add Collaboration
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
