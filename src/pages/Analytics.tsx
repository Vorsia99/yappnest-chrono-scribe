
import { useState } from "react";
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
  X,
  ChevronDown,
  ChevronUp,
  Loader2
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlatformStat } from "@/components/PlatformStat";
import { Badge } from "@/components/ui/badge";
import { TopPerformingPosts } from "@/components/TopPerformingPosts";
import { StatsCard } from "@/components/StatsCard";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ContentOverviewChart } from "@/components/ContentOverviewChart";
import { AnalyticsSummary } from "@/components/analytics/AnalyticsSummary";

const Analytics = () => {
  const [selectedDateRange, setSelectedDateRange] = useState<string>("30days");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [selectedContentType, setSelectedContentType] = useState<string>("all-content");
  const [sponsoredOnly, setSponsoredOnly] = useState<boolean>(false);
  const [date, setDate] = useState<Date>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCollapsedPlatformGrowth, setIsCollapsedPlatformGrowth] = useState<boolean>(false);
  const [isCollapsedContentPerformance, setIsCollapsedContentPerformance] = useState<boolean>(false);
  const [isCollapsedTopContent, setIsCollapsedTopContent] = useState<boolean>(false);
  const [isCollapsedInsights, setIsCollapsedInsights] = useState<boolean>(false);

  // Simulate loading when changing filters
  const handleFilterChange = (callback: Function, value: any) => {
    setIsLoading(true);
    callback(value);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <div className="space-y-6 animate-fade-in pb-12">
      {/* Sticky Header Section */}
      <div className="sticky top-0 z-10 bg-background px-4 md:px-6 py-4 border-b shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 max-w-7xl mx-auto">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground text-sm md:text-base">Track performance across all your social platforms</p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "w-[180px] md:w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Custom date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={(date) => {
                    setDate(date);
                    setIsLoading(true);
                    setTimeout(() => setIsLoading(false), 500);
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Select 
              value={selectedDateRange} 
              onValueChange={(value) => handleFilterChange(setSelectedDateRange, value)}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Time Period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">Past year</SelectItem>
              </SelectContent>
            </Select>
            
            <Select 
              value={selectedPlatform} 
              onValueChange={(value) => handleFilterChange(setSelectedPlatform, value)}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="x">X</SelectItem>
                <SelectItem value="youtube">YouTube</SelectItem>
                <SelectItem value="tiktok">TikTok</SelectItem>
                <SelectItem value="threads">Threads</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
              onClick={() => {
                const data = { platform: selectedPlatform, dateRange: selectedDateRange };
                console.log('Exporting data:', data);
                // In a real app, this would trigger a download
              }}
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Export</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {isLoading && (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="h-10 w-10 animate-spin text-muted-foreground" />
          </div>
        )}
        
        {!isLoading && (
          <>
            {/* Key Metrics Summary Section */}
            <div className="mb-8">
              <AnalyticsSummary 
                platform={selectedPlatform} 
                timeRange={selectedDateRange} 
              />
            </div>
            
            {/* Overview Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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

            {/* Platform Growth Chart - Collapsible */}
            <Collapsible 
              open={!isCollapsedPlatformGrowth}
              onOpenChange={() => setIsCollapsedPlatformGrowth(!isCollapsedPlatformGrowth)}
              className="mb-6"
            >
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Platform Growth</CardTitle>
                      <CardDescription>Follower growth across platforms over time</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Select defaultValue="followers">
                        <SelectTrigger className="w-[150px]">
                          <SelectValue placeholder="Select metric" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="followers">Followers</SelectItem>
                          <SelectItem value="reach">Reach</SelectItem>
                          <SelectItem value="engagement">Engagement</SelectItem>
                        </SelectContent>
                      </Select>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          {isCollapsedPlatformGrowth ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronUp className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                  </div>
                </CardHeader>
                <CollapsibleContent>
                  <CardContent>
                    <ContentOverviewChart period={selectedDateRange as any} />
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* Platform Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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

            {/* Content Performance Section - Collapsible */}
            <Collapsible 
              open={!isCollapsedContentPerformance}
              onOpenChange={() => setIsCollapsedContentPerformance(!isCollapsedContentPerformance)}
              className="mb-6"
            >
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Content Performance</CardTitle>
                      <CardDescription>Performance by content type</CardDescription>
                    </div>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        {isCollapsedContentPerformance ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronUp className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </CardHeader>
                <CollapsibleContent>
                  <CardContent>
                    {/* Content Overview */}
                    <div className="bg-muted/20 p-4 rounded-lg mb-4">
                      <h3 className="font-medium mb-2">Content Overview</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Total Content</p>
                          <p className="text-2xl font-semibold">86</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Videos</p>
                          <p className="text-2xl font-semibold">24</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Images</p>
                          <p className="text-2xl font-semibold">42</p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">Text Posts</p>
                          <p className="text-2xl font-semibold">20</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Select value={selectedContentType} onValueChange={setSelectedContentType}>
                          <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Content Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all-content">All Content</SelectItem>
                            <SelectItem value="posts">Posts</SelectItem>
                            <SelectItem value="stories">Stories</SelectItem>
                            <SelectItem value="posts-stories">Posts + Stories</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button 
                          variant={sponsoredOnly ? "default" : "outline"} 
                          size="sm" 
                          onClick={() => setSponsoredOnly(!sponsoredOnly)}
                        >
                          Sponsored Only
                        </Button>
                      </div>
                    </div>
                    
                    <ContentOverviewChart period={selectedDateRange as any} />
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* Top Performing Content - Collapsible */}
            <Collapsible 
              open={!isCollapsedTopContent}
              onOpenChange={() => setIsCollapsedTopContent(!isCollapsedTopContent)}
              className="mb-6"
            >
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
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
                        </SelectContent>
                      </Select>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          {isCollapsedTopContent ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronUp className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                  </div>
                </CardHeader>
                <CollapsibleContent>
                  <CardContent>
                    <Tabs defaultValue="all" className="space-y-4">
                      <TabsList className="inline-flex mb-4">
                        <TabsTrigger value="all">All Platforms</TabsTrigger>
                        <TabsTrigger value="instagram">Instagram</TabsTrigger>
                        <TabsTrigger value="x">X</TabsTrigger>
                        <TabsTrigger value="youtube">YouTube</TabsTrigger>
                        <TabsTrigger value="tiktok">TikTok</TabsTrigger>
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
                    </Tabs>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>

            {/* Insights & Recommendations - Collapsible */}
            <Collapsible 
              open={!isCollapsedInsights}
              onOpenChange={() => setIsCollapsedInsights(!isCollapsedInsights)}
              className="mb-6"
            >
              <Card className="shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">Insights & Recommendations</CardTitle>
                      <CardDescription>AI-powered recommendations based on your performance</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">Refresh Insights</Button>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          {isCollapsedInsights ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronUp className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                  </div>
                </CardHeader>
                <CollapsibleContent>
                  <CardContent className="space-y-4 pt-4">
                    {/* Insights content would go here */}
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-blue-500 mt-1" /> 
                        <div>
                          <h3 className="font-medium">Posting Time Optimization</h3>
                          <p className="text-sm text-muted-foreground">
                            Your Instagram Stories perform best at 6 PM on Wednesdays (avg. 5K views). 
                            Schedule more stories at this time!
                          </p>
                          <Button variant="default" size="sm" className="mt-2">
                            Schedule a Story
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 border border-purple-100 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-purple-500 mt-1" />
                        <div>
                          <h3 className="font-medium">Collaboration Opportunity</h3>
                          <p className="text-sm text-muted-foreground">
                            Based on your audience (60% Female, 50% 18-24, interested in Fashion), 
                            you're a great fit for brands like Sephora and H&M.
                          </p>
                          <Button variant="outline" size="sm" className="mt-2">
                            Pitch Now
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Activity className="h-5 w-5 text-green-500 mt-1" />
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium">Content Strategy</h3>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">5-day streak</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Your audience engages 40% more with behind-the-scenes stories. 
                            Post a story showing your daily routine!
                          </p>
                          <Button variant="default" size="sm" className="mt-2">
                            Create Story
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          </>
        )}
      </div>
    </div>
  );
};

export default Analytics;
