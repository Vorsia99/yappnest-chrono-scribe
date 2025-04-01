
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Calendar, Instagram, LineChart, ListChecks, PenSquare, TrendingUp, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UpcomingPostCard } from "@/components/UpcomingPostCard";
import { StatsCard } from "@/components/StatsCard";

const Dashboard = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your social media presence.</p>
        </div>
        <Button className="bg-yapp-misty-blue hover:bg-yapp-misty-blue/90">
          <PenSquare className="mr-2 h-4 w-4" /> Create New Post
        </Button>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard 
              title="Total Posts" 
              value="128" 
              description="+14% from last month" 
              icon={<ListChecks className="h-4 w-4 text-muted-foreground" />} 
              trend="up" 
            />
            <StatsCard 
              title="Engagement Rate" 
              value="4.6%" 
              description="+2.1% from last month" 
              icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />} 
              trend="up" 
            />
            <StatsCard 
              title="Scheduled Posts" 
              value="12" 
              description="Next 7 days" 
              icon={<Calendar className="h-4 w-4 text-muted-foreground" />} 
              trend="neutral" 
            />
            <StatsCard 
              title="Total Reach" 
              value="245K" 
              description="+18% from last month" 
              icon={<BarChart className="h-4 w-4 text-muted-foreground" />} 
              trend="up" 
            />
          </div>

          <div className="grid gap-4 md:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Engagement Overview</CardTitle>
                <CardDescription>View engagement across all platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center border rounded-md bg-muted/40">
                  <LineChart className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-muted-foreground">Engagement chart will appear here</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Posts</CardTitle>
                <CardDescription>Your next scheduled posts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <UpcomingPostCard 
                  title="Summer product launch announcement" 
                  platform="instagram" 
                  scheduledFor="Today, 2:30 PM" 
                />
                <UpcomingPostCard 
                  title="Weekly tips and tricks video" 
                  platform="youtube" 
                  scheduledFor="Tomorrow, 10:00 AM" 
                />
                <UpcomingPostCard 
                  title="Industry news update thread" 
                  platform="x" 
                  scheduledFor="Jun 15, 9:00 AM" 
                />
                <Button variant="outline" className="w-full">View All Scheduled Posts</Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Instagram Performance</CardTitle>
                <Instagram className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18.2K</div>
                <p className="text-xs text-muted-foreground">Followers (+120 this week)</p>
                <div className="mt-4 h-[60px] flex items-center justify-center border rounded-md bg-muted/40">
                  <LineChart className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">X Performance</CardTitle>
                <X className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.4K</div>
                <p className="text-xs text-muted-foreground">Followers (+86 this week)</p>
                <div className="mt-4 h-[60px] flex items-center justify-center border rounded-md bg-muted/40">
                  <LineChart className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">YouTube Performance</CardTitle>
                <Youtube className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.5K</div>
                <p className="text-xs text-muted-foreground">Subscribers (+45 this week)</p>
                <div className="mt-4 h-[60px] flex items-center justify-center border rounded-md bg-muted/40">
                  <LineChart className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Analytics</CardTitle>
              <CardDescription>
                View detailed performance metrics across all platforms
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <BarChart className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Analytics Dashboard</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Detailed analytics will be available here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Calendar</CardTitle>
              <CardDescription>
                View and manage your upcoming content schedule
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-4 text-lg font-medium">Content Calendar</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your scheduled content will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;
