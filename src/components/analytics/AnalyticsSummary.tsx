
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AnalyticsSummaryProps {
  platform?: string;
  timeRange?: string;
}

export function AnalyticsSummary({ platform = 'all', timeRange = '30days' }: AnalyticsSummaryProps) {
  // This would normally come from an API based on platform and timeRange
  const summaryData = {
    totalReach: '120K',
    reachChange: '+15%',
    engagement: '4.8%',
    engagementChange: '+0.7%',
    topContent: 'How to Style Summer Outfits',
    topContentPlatform: 'Instagram',
    topContentEngagement: '8.2%',
    bestPerformingDay: 'Wednesday',
    bestPerformingTime: '6-8 PM'
  };
  
  const platformName = platform === 'all' ? 'all platforms' : platform;
  const timeRangeLabel = timeRange === '7days' ? 'week' : 
                        timeRange === '30days' ? 'month' : 
                        timeRange === '90days' ? 'quarter' : 'year';

  return (
    <Card className="border-l-4 border-l-blue-500">
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Column 1: Key Metrics */}
          <div className="space-y-4 text-left">
            <h3 className="text-lg font-medium">Key Metrics</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <p className="text-sm text-muted-foreground">Reach</p>
                <div className="flex items-center gap-1">
                  <span className="font-normal">{summaryData.totalReach}</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{summaryData.reachChange}</Badge>
                </div>
              </div>
              
              <div className="flex justify-between items-baseline">
                <p className="text-sm text-muted-foreground">Engagement</p>
                <div className="flex items-center gap-1">
                  <span className="font-normal">{summaryData.engagement}</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{summaryData.engagementChange}</Badge>
                </div>
              </div>
              
              <div className="flex justify-between items-baseline">
                <p className="text-sm text-muted-foreground">New Followers</p>
                <span className="font-normal">+251</span>
              </div>
            </div>
          </div>
          
          {/* Column 2: Top Content */}
          <div className="space-y-4 text-left">
            <h3 className="text-lg font-normal">Top Content</h3>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Title</p>
                <p className="font-normal truncate">{summaryData.topContent}</p>
              </div>
              
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Platform</p>
                  <p className="font-normal">{summaryData.topContentPlatform}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Engagement</p>
                  <p className="font-normal">{summaryData.topContentEngagement}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 3: Summary */}
          <div className="space-y-4 text-left">
            <h3 className="text-lg font-normal">Summary</h3>
            <p className="text-sm text-muted-foreground">
              Your content is performing <span className="font-medium text-green-600">15% better</span> this {timeRangeLabel} across {platformName}.
              Best performing day is <span className="font-normal">{summaryData.bestPerformingDay}</span> at 
              <span className="font-normal"> {summaryData.bestPerformingTime}</span>.
            </p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-xs text-blue-800">
                <strong>Recommendation:</strong> Post more content on {summaryData.bestPerformingDay}s 
                between {summaryData.bestPerformingTime} to maximize engagement.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
