
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUpIcon,
  BarChart, 
  Calendar, 
  Download, 
  TrendingUp, 
  Users, 
  Activity,
  FileText,
  Filter,
  Share,
  ArrowDown,
  Check,
  X
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlatformStat } from "@/components/PlatformStat";
import { Badge } from "@/components/ui/badge";
import { TopPerformingPosts } from "@/components/TopPerformingPosts";
import { StatsCard } from "@/components/StatsCard";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useState } from "react";
import { PlatformGrowthChart } from "@/components/analytics/PlatformGrowthChart";
import { ContentPerformanceChart } from "@/components/analytics/ContentPerformanceChart";
import { EngagementHeatmap } from "@/components/analytics/EngagementHeatmap";
import { DemographicsChart } from "@/components/analytics/DemographicsChart";
import { CollaborationTracker } from "@/components/analytics/CollaborationTracker";
import { InsightCard } from "@/components/analytics/InsightCard";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

const Analytics = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<string>("30days");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [selectedContentType, setSelectedContentType] = useState<string>("all-content");
  const [sponsoredOnly, setSponsoredOnly] = useState<boolean>(false);
  const [date, setDate] = useState<Date>();

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Sticky Header Section */}
      <div className="sticky top-0 z-10 bg-white px-6 py-4 border-b shadow-sm mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-yapp-deep-navy">Analytics</h1>
            <p className="text-muted-foreground">Track performance across all your social platforms</p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Custom date range</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
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
            <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="x">X</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
                <SelectItem value="threads">Threads</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
                <SelectItem value="pinterest">Pinterest</SelectItem>
                <SelectItem value="bluesky">Bluesky</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedContentType} onValueChange={setSelectedContentType}>
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
            <Button variant="outline" className="flex items-center gap-1">
              <Filter className="h-4 w-4" />
              <span className="hidden sm:inline">More Filters</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-1">
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </Button>
          </div>
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
          icon={<FileText className="h-4 w-4 text-muted-foreground" />} 
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

      {/* Platform Growth Chart */}
      <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl">Platform Growth</CardTitle>
              <CardDescription>Follower growth across platforms over time</CardDescription>
            </div>
            <Select defaultValue="followers">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select metric" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="followers">Followers</SelectItem>
                <SelectItem value="reach">Reach</SelectItem>
                <SelectItem value="engagement">Engagement</SelectItem>
                <SelectItem value="impressions">Impressions</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <PlatformGrowthChart platform={selectedPlatform} timeRange={selectedDateRange} />
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
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">Content Performance</CardTitle>
            <CardDescription>Performance by content type</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="chart" className="w-full">
              <TabsList className="grid grid-cols-2 w-[220px] mb-4">
                <TabsTrigger value="chart">Performance</TabsTrigger>
                <TabsTrigger value="heatmap">Engagement</TabsTrigger>
              </TabsList>
              <TabsContent value="chart" className="pt-2">
                <ContentPerformanceChart
                  contentType={selectedContentType}
                  platform={selectedPlatform}
                  timeRange={selectedDateRange}
                />
              </TabsContent>
              <TabsContent value="heatmap" className="pt-2">
                <EngagementHeatmap
                  platform={selectedPlatform}
                  contentType={selectedContentType}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">Audience Demographics</CardTitle>
            <CardDescription>Age, location and interests</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="age" className="w-full">
              <TabsList className="grid grid-cols-4 w-full mb-4">
                <TabsTrigger value="age">Age & Gender</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="interests">Interests</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              <TabsContent value="age" className="pt-2">
                <DemographicsChart 
                  type="age"
                  platform={selectedPlatform}
                  timeRange={selectedDateRange}
                  contentType={selectedContentType}
                />
              </TabsContent>
              <TabsContent value="location" className="pt-2">
                <DemographicsChart 
                  type="location"
                  platform={selectedPlatform}
                  timeRange={selectedDateRange}
                  contentType={selectedContentType}
                />
              </TabsContent>
              <TabsContent value="interests" className="pt-2">
                <DemographicsChart 
                  type="interests"
                  platform={selectedPlatform}
                  timeRange={selectedDateRange}
                  contentType={selectedContentType}
                />
              </TabsContent>
              <TabsContent value="activity" className="pt-2">
                <DemographicsChart 
                  type="activity"
                  platform={selectedPlatform}
                  timeRange={selectedDateRange}
                  contentType={selectedContentType}
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Top Performing Content */}
      <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl">Top Performing Content</CardTitle>
              <CardDescription>Your best content from the last 30 days</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="engagement">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engagement">Highest Engagement</SelectItem>
                  <SelectItem value="reach">Highest Reach</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="clicks">Most Clicks</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList className="inline-flex mb-4">
              <TabsTrigger value="all">All Platforms</TabsTrigger>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="x">X</TabsTrigger>
              <TabsTrigger value="youtube">YouTube</TabsTrigger>
              <TabsTrigger value="tiktok">TikTok</TabsTrigger>
              <TabsTrigger value="more">More</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <TopPerformingPosts />
            </TabsContent>
            
            <TabsContent value="instagram">
              <TopPerformingPosts platform="instagram" />
            </TabsContent>

            <TabsContent value="x">
              <TopPerformingPosts platform="x" />
            </TabsContent>

            <TabsContent value="youtube">
              <TopPerformingPosts platform="youtube" />
            </TabsContent>
            
            <TabsContent value="tiktok">
              <TopPerformingPosts platform="tiktok" />
            </TabsContent>
            
            <TabsContent value="more">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Button variant="outline">LinkedIn</Button>
                <Button variant="outline">Pinterest</Button>
                <Button variant="outline">Facebook</Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Insights & Recommendations */}
      <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl">Insights & Recommendations</CardTitle>
              <CardDescription>AI-powered recommendations based on your performance</CardDescription>
            </div>
            <Button variant="outline" size="sm">Refresh Insights</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <InsightCard
            title="Posting Time Optimization"
            description="Your Instagram Stories perform best at 6 PM on Wednesdays (avg. 5K views). Schedule more stories at this time!"
            action="Schedule a Story"
            icon={<Calendar className="h-5 w-5" />}
            actionVariant="default"
          />
          <InsightCard
            title="Collaboration Opportunity"
            description="Based on your audience (60% Female, 50% 18-24, interested in Fashion), you're a great fit for brands like Sephora and H&M."
            action="Pitch Now"
            icon={<Users className="h-5 w-5" />}
            actionVariant="outline"
          />
          <InsightCard
            title="Content Strategy"
            description="Your audience engages 40% more with behind-the-scenes stories. Post a story showing your daily routine!"
            action="Create Story"
            icon={<Activity className="h-5 w-5" />}
            actionVariant="default"
            badge={{text: "5-day streak", color: "green"}}
          />
        </CardContent>
      </Card>

      {/* Collaboration Tracker */}
      <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl">Collaboration Tracker</CardTitle>
              <CardDescription>Track your brand partnerships and sponsored content</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              Add Collaboration
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <CollaborationTracker platform={selectedPlatform} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
