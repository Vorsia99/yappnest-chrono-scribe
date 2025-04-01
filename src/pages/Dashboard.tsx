import React from 'react';
import { CalendarIcon, ListChecksIcon, PenSquareIcon, BarChart3Icon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StatsCard } from '@/components/StatsCard';
import { PlatformStat } from '@/components/PlatformStat';
import { UpcomingPostCard } from '@/components/UpcomingPostCard';

const Dashboard = () => {
  const stats = [
    { 
      title: "Total Posts", 
      value: "128", 
      change: "+12%", 
      trend: "up",
      description: "From last month"
    },
    { 
      title: "Engagement Rate", 
      value: "4.3%", 
      change: "+0.8%", 
      trend: "up",
      description: "From last month"
    },
    { 
      title: "Followers", 
      value: "12.8K", 
      change: "+1.2K", 
      trend: "up",
      description: "From last month"
    },
    { 
      title: "Avg. Response Time", 
      value: "45min", 
      change: "-10min", 
      trend: "down",
      description: "From last month"
    }
  ];

  const platformStats = [
    { platform: "Instagram", followers: "8.5K", engagement: "4.2%" },
    { platform: "Twitter", followers: "12.3K", engagement: "3.8%" },
    { platform: "Facebook", followers: "5.7K", engagement: "2.9%" },
    { platform: "LinkedIn", followers: "3.2K", engagement: "5.1%" }
  ];

  const upcomingPosts = [
    { 
      title: "Product launch announcement", 
      platform: "Instagram", 
      scheduledFor: "Today, 3:00 PM",
      image: "/placeholder.svg"
    },
    { 
      title: "Weekly industry insights", 
      platform: "LinkedIn", 
      scheduledFor: "Tomorrow, 9:00 AM",
      image: "/placeholder.svg"
    },
    { 
      title: "Customer success story", 
      platform: "Facebook, Twitter", 
      scheduledFor: "Jul 15, 2:30 PM",
      image: "/placeholder.svg"
    }
  ];

  const quickActions = [
    { title: "Create Post", icon: PenSquareIcon, path: "/composer", color: "bg-blue-50 text-blue-600" },
    { title: "View Calendar", icon: CalendarIcon, path: "/calendar", color: "bg-purple-50 text-purple-600" },
    { title: "Manage Queue", icon: ListChecksIcon, path: "/queue", color: "bg-green-50 text-green-600" },
    { title: "Analytics", icon: BarChart3Icon, path: "/analytics", color: "bg-amber-50 text-amber-600" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button>New Post</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatsCard 
            key={stat.title}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            trend={stat.trend}
            description={stat.description}
          />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-full lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Platform Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {platformStats.map((stat) => (
                  <PlatformStat
                    key={stat.platform}
                    platform={stat.platform}
                    followers={stat.followers}
                    engagement={stat.engagement}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-full lg:col-span-4">
          <Card className="h-full">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Upcoming Posts</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingPosts.map((post, index) => (
                  <UpcomingPostCard 
                    key={index}
                    title={post.title}
                    platform={post.platform}
                    scheduledFor={post.scheduledFor}
                    image={post.image}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-full">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action) => (
                  <Button
                    key={action.title}
                    variant="outline"
                    className="h-auto py-6 flex flex-col items-center justify-center text-center gap-2 hover:bg-secondary transition-colors"
                    asChild
                  >
                    <a href={action.path}>
                      <div className={`p-2 rounded-full ${action.color} mb-2`}>
                        <action.icon className="h-6 w-6" />
                      </div>
                      <span>{action.title}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
