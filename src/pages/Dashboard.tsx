
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ArrowRight, 
  ArrowUp, 
  ArrowDown, 
  Calendar, 
  BarChart3, 
  Edit, 
  Users, 
  Instagram, 
  Twitter as X, 
  Linkedin, 
  Facebook, 
  Youtube, 
  Hash, 
  DollarSign, 
  Download,
  Bot,
  MessageSquare,
  CheckCircle,
  User
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlatformStat } from "@/components/PlatformStat";
import { StatsCard } from "@/components/StatsCard";
import { QuickActions } from "@/components/QuickActions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { UpcomingPostCard } from "@/components/UpcomingPostCard";
import { TopPerformingPosts } from "@/components/TopPerformingPosts";

// Sample posts data
const scheduledPosts = [
  {
    id: 1,
    type: "image",
    content: "Spring collection launch tomorrow!",
    image: "/lovable-uploads/1f5dc3cd-0e25-4aa0-ba2f-889d901ac525.png",
    date: "Today",
    time: "5:30 PM",
    status: "scheduled",
    platform: "instagram",
    prediction: "High Reach, +48% Engagement"
  },
  {
    id: 2,
    type: "image",
    content: "Behind the scenes of our latest shoot",
    image: "/lovable-uploads/14e1f6ac-5248-44df-a433-8eaa03333e2e.png",
    date: "Tomorrow",
    time: "10:00 AM",
    status: "scheduled",
    platform: "instagram",
    prediction: "Medium Reach, +12% Engagement"
  },
  {
    id: 3,
    type: "text",
    content: "Exciting announcement coming next week!",
    date: "Oct 15",
    time: "3:00 PM",
    status: "draft",
    platform: "x",
    prediction: "Low Reach, +5% Engagement"
  },
  {
    id: 4,
    type: "image",
    content: "New product teaser - coming soon!",
    image: "/lovable-uploads/1f5dc3cd-0e25-4aa0-ba2f-889d901ac525.png",
    date: "Oct 18",
    time: "12:00 PM",
    status: "scheduled",
    platform: "instagram",
    prediction: "Viral Potential, +62% Engagement"
  },
  {
    id: 5,
    type: "video",
    content: "How-to guide for our latest feature",
    date: "Oct 20",
    time: "2:00 PM",
    status: "scheduled",
    platform: "youtube",
    prediction: "High Reach, +35% Engagement"
  }
];

// AI suggestions data
const aiSuggestions = [
  {
    id: 1,
    content: "Post on Instagram at 6 PM on Wednesdays for 5K views",
    action: "Schedule a Post",
    actionLink: "/composer"
  },
  {
    id: 2,
    content: "Use #SpringVibes for 25% more engagement",
    action: "Add Hashtag",
    actionLink: "/composer"
  },
  {
    id: 3,
    content: "Respond to comments within 1 hour for 40% more follower retention",
    action: "View Comments",
    actionLink: "/engagement"
  }
];

// Trending hashtags data
const trendingHashtags = [
  { id: 1, tag: "#SpringVibes", posts: "1.2M", engagement: "+15%" },
  { id: 2, tag: "#SummerFashion", posts: "890K", engagement: "+22%" },
  { id: 3, tag: "#TravelGoals", posts: "2.5M", engagement: "+18%" },
  { id: 4, tag: "#FoodiesUnite", posts: "1.8M", engagement: "+10%" },
  { id: 5, tag: "#FitnessJourney", posts: "3.1M", engagement: "+25%" }
];

// Top engagers data
const topEngagers = [
  { 
    id: 1, 
    platform: "instagram", 
    username: "@fashionista", 
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=fashionista",
    likes: 50, 
    comments: 20, 
    shares: 10 
  },
  { 
    id: 2, 
    platform: "instagram", 
    username: "@styleicon", 
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=styleicon",
    likes: 45, 
    comments: 15, 
    shares: 8 
  },
  { 
    id: 3, 
    platform: "x", 
    username: "@trendsetter", 
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=trendsetter",
    likes: 38, 
    comments: 12, 
    shares: 15 
  }
];

// Recent engagement data
const recentEngagements = [
  {
    id: 1,
    platform: "instagram",
    username: "@customer123",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=customer123",
    content: "Love the new collection! When will it be available in stores?",
    time: "2 hours ago",
    post: "Spring collection preview"
  },
  {
    id: 2,
    platform: "x",
    username: "@fashionfan",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=fashionfan",
    content: "Your designs are amazing! Can't wait to see more.",
    time: "4 hours ago",
    post: "Design process sneak peek"
  },
  {
    id: 3,
    platform: "instagram",
    username: "@stylelover",
    avatar: "https://api.dicebear.com/7.x/lorelei/svg?seed=stylelover",
    content: "Will you be doing any collaborations this season?",
    time: "6 hours ago",
    post: "Collaboration announcement"
  }
];

// Monetization campaigns data
const monetizationCampaigns = [
  {
    id: 1,
    campaign: "Nike Spring Campaign",
    platform: "instagram",
    type: "Post",
    revenue: "$500",
    date: "Jun 5, 2023"
  },
  {
    id: 2,
    campaign: "Adidas Summer Sale",
    platform: "instagram",
    type: "Story",
    revenue: "$350",
    date: "Jul 12, 2023"
  },
  {
    id: 3,
    campaign: "H&M Fall Collection",
    platform: "youtube",
    type: "Video",
    revenue: "$850",
    date: "Aug 23, 2023"
  }
];

// Dashboard main component
const Dashboard = () => {
  const navigate = useNavigate();
  const [calendarView, setCalendarView] = useState("month");

  // Get platform icon component
  const getPlatformIcon = (platform) => {
    const icons = {
      instagram: <Instagram className="h-4 w-4" />,
      x: <X className="h-4 w-4" />,
      linkedin: <Linkedin className="h-4 w-4" />,
      facebook: <Facebook className="h-4 w-4" />,
      youtube: <Youtube className="h-4 w-4" />
    };
    return icons[platform] || <Globe className="h-4 w-4" />;
  };

  const renderPredictionBadge = (prediction) => {
    if (prediction.includes("High") || prediction.includes("Viral")) {
      return (
        <Badge className="bg-[#4AFCA6] text-[#2D3748] hover:bg-[#4AFCA6]/80">
          {prediction}
        </Badge>
      );
    } else if (prediction.includes("Medium")) {
      return (
        <Badge className="bg-amber-400 text-[#2D3748] hover:bg-amber-400/80">
          {prediction}
        </Badge>
      );
    } else {
      return (
        <Badge className="bg-gray-400 hover:bg-gray-400/80">
          {prediction}
        </Badge>
      );
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-normal text-[#2D3748]">Dashboard</h1>
          <p className="text-[#4A5568]">Welcome back! Here's an overview of your social media activity</p>
        </div>
      </div>

      {/* Section 1: Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4 text-[#2D3748]">Quick Actions</h2>
        <QuickActions />
      </div>

      {/* Section 2: Quick Stats */}
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4 text-[#2D3748]">Quick Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            title="Scheduled Posts"
            value="24"
            description="Posts"
            icon={<Calendar className="h-4 w-4 text-muted-foreground" />}
            trend="up"
            trendValue="+5 this week"
          />
          <StatsCard
            title="Published This Week"
            value="18"
            description="Posts"
            icon={<CheckCircle className="h-4 w-4 text-muted-foreground" />}
            trend="up"
            trendValue="+3 this week"
          />
          <StatsCard
            title="Total Engagement"
            value="3.4K"
            description="Interactions"
            icon={<MessageSquare className="h-4 w-4 text-muted-foreground" />}
            trend="up"
            trendValue="+10% this month"
          />
          <StatsCard
            title="Growth Rate"
            value="+14%"
            description="This Month"
            icon={<ArrowUp className="h-4 w-4 text-muted-foreground" />}
            trend="up"
            trendValue="Higher than last month"
          />
        </div>
      </div>

      {/* Section 3: Scheduled Posts (Calendar View) */}
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl">Scheduled Posts</CardTitle>
            <CardDescription>View and manage your upcoming content</CardDescription>
          </div>
          <div className="flex gap-2">
            <TabsList className="bg-[#E2E8F0]">
              <TabsTrigger 
                value="month" 
                onClick={() => setCalendarView("month")}
                className={calendarView === "month" ? "bg-[#A3BFFA] text-white" : ""}
              >
                Month
              </TabsTrigger>
              <TabsTrigger 
                value="week" 
                onClick={() => setCalendarView("week")}
                className={calendarView === "week" ? "bg-[#A3BFFA] text-white" : ""}
              >
                Week
              </TabsTrigger>
              <TabsTrigger 
                value="day" 
                onClick={() => setCalendarView("day")}
                className={calendarView === "day" ? "bg-[#A3BFFA] text-white" : ""}
              >
                Day
              </TabsTrigger>
            </TabsList>
            <Button 
              className="bg-[#A3BFFA] hover:bg-[#7F9CF5] text-white"
              onClick={() => navigate('/composer')}
            >
              + New Post
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Calendar will be implemented in a future iteration */}
          <div className="aspect-[3/1] bg-[#E2E8F0] rounded-md flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#4A5568]">Calendar view will display here</p>
              <Button 
                variant="outline" 
                className="mt-4 border-[#A3BFFA]"
                onClick={() => navigate('/calendar')}
              >
                Go to Calendar View
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section 4: Upcoming Posts */}
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl">Upcoming Posts</CardTitle>
            <CardDescription>Next 7 days of scheduled content</CardDescription>
          </div>
          <Button variant="ghost" className="gap-2" onClick={() => navigate('/queue')}>
            View All <ArrowRight size={16} />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scheduledPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  {getPlatformIcon(post.platform)}
                  <span className="font-medium text-[#2D3748]">{post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}</span>
                </div>
                <p className="line-clamp-2 mb-2 text-[#4A5568]">{post.content}</p>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-[#4A5568]">{post.date}, {post.time}</span>
                  {renderPredictionBadge(post.prediction)}
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm" onClick={() => navigate('/composer')}>
                    <Edit size={14} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Section 5: Connected Accounts */}
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl">Connected Accounts</CardTitle>
            <CardDescription>Manage your social media accounts</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PlatformStat
              platform="instagram"
              username="@yourusername"
              followers="5,432"
              engagement="4.2%"
              growth="+2.3%"
              posts="128"
              status="connected"
            />
            <PlatformStat
              platform="x"
              username="@yourusername"
              followers="2,100"
              engagement="1.5%"
              growth="+0.8%"
              posts="95"
              status="connected"
            />
            <PlatformStat
              platform="linkedin"
              username="Your Company"
              followers="1,890"
              engagement="3.1%"
              growth="+1.4%"
              posts="42"
              status="connected"
            />
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <Button 
              variant="outline" 
              className="border-[#A3BFFA]"
              onClick={() => navigate('/settings')}
            >
              Manage All Accounts
            </Button>
            <Button 
              variant="outline" 
              className="border-[#A3BFFA]"
              onClick={() => navigate('/settings')}
            >
              Connect More Accounts
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Section 6: Top Performing Posts */}
      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl">Top Performing Posts</CardTitle>
            <CardDescription>Your best content this month</CardDescription>
          </div>
          <Button variant="ghost" className="gap-2" onClick={() => navigate('/analytics')}>
            View All <ArrowRight size={16} />
          </Button>
        </CardHeader>
        <CardContent>
          <TopPerformingPosts limit={3} />
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Section 7: Engagement Overview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-xl">Engagement Overview</CardTitle>
              <CardDescription>Recent interactions</CardDescription>
            </div>
            <Button variant="ghost" className="gap-2" onClick={() => navigate('/engagement')}>
              View All <ArrowRight size={16} />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEngagements.map((engagement) => (
                <div key={engagement.id} className="flex items-start gap-3 border-b pb-4 last:border-0">
                  <div className="h-8 w-8 rounded-full overflow-hidden">
                    <img
                      src={engagement.avatar}
                      alt={engagement.username}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{engagement.username}</span>
                      {getPlatformIcon(engagement.platform)}
                      <span className="text-xs text-[#4A5568]">{engagement.time}</span>
                    </div>
                    <p className="text-sm text-[#4A5568] mb-1">{engagement.content}</p>
                    <p className="text-xs text-[#A3BFFA]">on: {engagement.post}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => navigate('/engagement')}>
                    Reply
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 8: AI Suggestions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-xl">AI Suggestions</CardTitle>
              <CardDescription>Optimize your content</CardDescription>
            </div>
            <Button variant="ghost" className="gap-2" onClick={() => navigate('/ai-suggestions')}>
              View All <ArrowRight size={16} />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiSuggestions.map((suggestion) => (
                <div key={suggestion.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#A3BFFA]/20 flex items-center justify-center">
                      <Bot size={16} className="text-[#A3BFFA]" />
                    </div>
                    <p className="text-sm text-[#4A5568]">{suggestion.content}</p>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-[#A3BFFA] hover:bg-[#7F9CF5] text-white"
                    onClick={() => navigate(suggestion.actionLink)}
                  >
                    {suggestion.action}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Section 9: Monetization Tracker */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-xl">Monetization Tracker</CardTitle>
              <CardDescription>Your earnings from campaigns</CardDescription>
            </div>
            <Button variant="ghost" className="gap-2" onClick={() => navigate('/monetization')}>
              View All <ArrowRight size={16} />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 text-[#4A5568]">Campaign</th>
                    <th className="text-left py-2 text-[#4A5568]">Platform</th>
                    <th className="text-left py-2 text-[#4A5568]">Type</th>
                    <th className="text-left py-2 text-[#4A5568]">Revenue</th>
                    <th className="text-left py-2 text-[#4A5568]">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {monetizationCampaigns.map((campaign) => (
                    <tr key={campaign.id} className="border-b">
                      <td className="py-2 text-[#2D3748]">{campaign.campaign}</td>
                      <td className="py-2 text-[#4A5568] flex items-center gap-1">
                        {getPlatformIcon(campaign.platform)}
                        <span>{campaign.platform.charAt(0).toUpperCase() + campaign.platform.slice(1)}</span>
                      </td>
                      <td className="py-2 text-[#4A5568]">{campaign.type}</td>
                      <td className="py-2 text-[#2D3748] font-medium">{campaign.revenue}</td>
                      <td className="py-2 text-[#4A5568]">{campaign.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="font-medium text-[#2D3748]">Total Revenue: $1,700</p>
              <Button 
                variant="outline" 
                className="border-[#A3BFFA] flex items-center gap-2"
                onClick={() => navigate('/monetization')}
              >
                <Download size={14} />
                Export Report
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Section 10: Trending Hashtags */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-xl">Trending Hashtags</CardTitle>
              <CardDescription>Boost your reach</CardDescription>
            </div>
            <Button variant="ghost" className="gap-2">
              View All <ArrowRight size={16} />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {trendingHashtags.map((hashtag) => (
                <div key={hashtag.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#A3BFFA]/20 flex items-center justify-center">
                      <Hash size={16} className="text-[#A3BFFA]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#2D3748]">{hashtag.tag}</p>
                      <p className="text-xs text-[#4A5568]">{hashtag.posts} posts</p>
                    </div>
                  </div>
                  <Badge className="bg-[#4AFCA6] text-[#2D3748] hover:bg-[#4AFCA6]/80">
                    {hashtag.engagement} engagement
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Section 11: Top Engagers */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="text-xl">Top Engagers</CardTitle>
              <CardDescription>Your most active followers</CardDescription>
            </div>
            <Button variant="ghost" className="gap-2" onClick={() => navigate('/followers')}>
              View All <ArrowRight size={16} />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topEngagers.map((engager) => (
                <div key={engager.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full overflow-hidden">
                      <img 
                        src={engager.avatar} 
                        alt={engager.username} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#2D3748]">{engager.username}</span>
                        {getPlatformIcon(engager.platform)}
                      </div>
                      <p className="text-xs text-[#4A5568]">
                        {engager.likes} Likes, {engager.comments} Comments, {engager.shares} Shares
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-1"
                    onClick={() => navigate('/followers')}
                  >
                    <User size={14} />
                    Profile
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 12: Analytics Export */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Analytics Export</CardTitle>
            <CardDescription>Download your weekly report</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center p-8">
            <div className="h-24 w-24 rounded-full bg-[#A3BFFA]/20 flex items-center justify-center mb-4">
              <BarChart3 size={32} className="text-[#A3BFFA]" />
            </div>
            <p className="text-center text-[#4A5568] mb-6">
              Generate a comprehensive report with all your social media metrics and performance data
            </p>
            <div className="flex gap-4">
              <Button 
                className="bg-[#A3BFFA] hover:bg-[#7F9CF5] text-white"
                onClick={() => navigate('/analytics')}
              >
                Weekly Report
              </Button>
              <Button 
                variant="outline" 
                className="border-[#A3BFFA]"
                onClick={() => navigate('/analytics')}
              >
                Custom Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
