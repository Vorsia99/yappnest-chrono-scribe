import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, BarChart3, Activity, Share2, UserCheck, ArrowRight, Download, ChevronUp, ChevronDown } from "lucide-react";
import { AnalyticsSummary } from '@/components/analytics/AnalyticsSummary';
import { PlatformGrowthChart } from '@/components/analytics/PlatformGrowthChart';
import { ContentPerformanceChart } from '@/components/analytics/ContentPerformanceChart';
import { DemographicsChart } from '@/components/analytics/DemographicsChart';
import { EngagementHeatmap } from '@/components/analytics/EngagementHeatmap';
import { CollaborationTracker } from '@/components/analytics/CollaborationTracker';
import { InsightCard } from '@/components/analytics/InsightCard';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { PreviousPostsTable } from "@/components/analytics/PreviousPostsTable";

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30days');
  const [platform, setPlatform] = useState('all');
  const [contentType, setContentType] = useState('all-content');
  const [isLoading, setIsLoading] = useState(false);
  
  const [sectionsState, setSectionsState] = useState({
    summary: true,
    contentPerformance: true,
    audienceInsights: true,
    engagementPatterns: true,
    collaborations: true,
    previousPosts: true
  });
  
  const toggleSection = (section: keyof typeof sectionsState) => {
    setSectionsState({
      ...sectionsState,
      [section]: !sectionsState[section]
    });
  };
  
  const handleFilterChange = (filterType: string, value: string) => {
    setIsLoading(true);
    
    if (filterType === 'timeRange') setTimeRange(value);
    if (filterType === 'platform') setPlatform(value);
    if (filterType === 'contentType') setContentType(value);
    
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="text-left">
          <h1 className="text-3xl font-normal text-yapp-deep-navy">Analytics</h1>
          <p className="text-muted-foreground">Track, analyze, and optimize your social media performance</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select value={timeRange} onValueChange={(value) => handleFilterChange('timeRange', value)}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="year">Last year</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={platform} onValueChange={(value) => handleFilterChange('platform', value)}>
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Platforms</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="twitter">Twitter</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={contentType} onValueChange={(value) => handleFilterChange('contentType', value)}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Content Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-content">All Content</SelectItem>
              <SelectItem value="posts">Posts</SelectItem>
              <SelectItem value="stories">Stories</SelectItem>
              <SelectItem value="reels">Reels</SelectItem>
              <SelectItem value="videos">Videos</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" className="gap-2">
            <Download size={16} /> Export
          </Button>
        </div>
      </div>
      
      {isLoading && (
        <div className="w-full h-1 bg-muted rounded overflow-hidden">
          <div className="h-full bg-yapp-misty-blue animate-progress-indeterminate"></div>
        </div>
      )}
      
      <Collapsible 
        open={sectionsState.summary} 
        onOpenChange={() => toggleSection('summary')}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1 h-auto">
                {sectionsState.summary ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>
            </CollapsibleTrigger>
            <h2 className="text-xl font-medium text-left">Key Insights</h2>
          </div>
        </div>
        
        <CollapsibleContent>
          <div className="mb-6">
            <AnalyticsSummary 
              timeRange={timeRange} 
              platform={platform} 
              contentType={contentType}
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      <Collapsible 
        open={sectionsState.contentPerformance} 
        onOpenChange={() => toggleSection('contentPerformance')}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1 h-auto">
                {sectionsState.contentPerformance ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>
            </CollapsibleTrigger>
            <h2 className="text-xl font-medium text-left">Content Performance</h2>
          </div>
        </div>
        
        <CollapsibleContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2 text-left">
                <CardTitle className="text-lg font-medium">Performance by Content Type</CardTitle>
              </CardHeader>
              <CardContent>
                <ContentPerformanceChart 
                  contentType={contentType}
                  platform={platform}
                  timeRange={timeRange}
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2 text-left">
                <CardTitle className="text-lg font-medium">Platform Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <PlatformGrowthChart 
                  platform={platform} 
                  timeRange={timeRange}
                />
              </CardContent>
            </Card>
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      <Collapsible 
        open={sectionsState.audienceInsights} 
        onOpenChange={() => toggleSection('audienceInsights')}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1 h-auto">
                {sectionsState.audienceInsights ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>
            </CollapsibleTrigger>
            <h2 className="text-xl font-medium text-left">Audience Insights</h2>
          </div>
        </div>
        
        <CollapsibleContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2 text-left">
                <CardTitle className="text-lg font-medium">Demographics</CardTitle>
              </CardHeader>
              <CardContent>
                <DemographicsChart 
                  type="age" 
                  platform={platform} 
                />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2 text-left">
                <CardTitle className="text-lg font-medium">Key Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InsightCard
                    icon={<UserCheck className="h-4 w-4" />}
                    title="Top Audience"
                    value="Women 25-34"
                    trend="+12%"
                    trendDirection="up"
                  />
                  <InsightCard
                    icon={<Activity className="h-4 w-4" />}
                    title="Peak Activity"
                    value="7-9 PM weekdays"
                    trend="+5%"
                    trendDirection="up"
                  />
                  <InsightCard
                    icon={<BarChart3 className="h-4 w-4" />}
                    title="Avg. Engagement"
                    value="4.8%"
                    trend="-0.3%"
                    trendDirection="down"
                  />
                  <InsightCard
                    icon={<Share2 className="h-4 w-4" />}
                    title="Shares Ratio"
                    value="2.4%"
                    trend="+0.7%"
                    trendDirection="up"
                  />
                </div>
                <Button variant="outline" className="w-full gap-2">
                  View Detailed Audience Report <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </CollapsibleContent>
      </Collapsible>
      
      <Collapsible 
        open={sectionsState.engagementPatterns} 
        onOpenChange={() => toggleSection('engagementPatterns')}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1 h-auto">
                {sectionsState.engagementPatterns ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>
            </CollapsibleTrigger>
            <h2 className="text-xl font-medium text-left">Engagement Patterns</h2>
          </div>
        </div>
        
        <CollapsibleContent>
          <Card className="mb-6">
            <CardHeader className="pb-2 text-left">
              <CardTitle className="text-lg font-medium">Weekly Engagement Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="engagement">
                <TabsList className="mb-4">
                  <TabsTrigger value="engagement">Engagement</TabsTrigger>
                  <TabsTrigger value="reach">Reach</TabsTrigger>
                  <TabsTrigger value="impressions">Impressions</TabsTrigger>
                </TabsList>
                <TabsContent value="engagement">
                  <EngagementHeatmap platform={platform} contentType={contentType} />
                </TabsContent>
                <TabsContent value="reach">
                  <EngagementHeatmap platform={platform} contentType={contentType} />
                </TabsContent>
                <TabsContent value="impressions">
                  <EngagementHeatmap platform={platform} contentType={contentType} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
      
      <Collapsible 
        open={sectionsState.collaborations} 
        onOpenChange={() => toggleSection('collaborations')}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1 h-auto">
                {sectionsState.collaborations ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>
            </CollapsibleTrigger>
            <h2 className="text-xl font-medium text-left">Collaborations & Mentions</h2>
          </div>
        </div>
        
        <CollapsibleContent>
          <Card className="mb-6">
            <CardHeader className="pb-2 text-left">
              <CardTitle className="text-lg font-medium">Collaborator Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <CollaborationTracker platform={platform} />
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
      
      <Collapsible 
        open={sectionsState.previousPosts} 
        onOpenChange={() => toggleSection('previousPosts')}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1 h-auto">
                {sectionsState.previousPosts ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>
            </CollapsibleTrigger>
            <h2 className="text-xl font-medium text-left">Previous Posts</h2>
          </div>
        </div>
        
        <CollapsibleContent>
          <div className="mb-6">
            <PreviousPostsTable />
          </div>
          
          <div className="flex justify-center mb-8">
            <Button variant="outline" className="gap-2">
              View All Posts <ArrowRight size={16} />
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <style jsx>{`
        @keyframes progress-indeterminate {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-progress-indeterminate {
          animation: progress-indeterminate 1.5s infinite linear;
          width: 50%;
        }
      `}</style>
    </div>
  );
};

export default Analytics;
