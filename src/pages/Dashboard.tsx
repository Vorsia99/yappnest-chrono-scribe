
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Edit2, 
  Trash2, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Users, 
  BarChart3, 
  Activity, 
  ChevronDown, 
  ChevronUp,
  GlobeIcon,
  LayoutDashboard
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/DatePicker";
import { TimePicker } from "@/components/TimePicker";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { UpcomingPostCard } from "@/components/UpcomingPostCard";
import { PlatformStat } from "@/components/PlatformStat";
import { StatsCard } from "@/components/StatsCard";
import { QuickActions } from "@/components/QuickActions";
import { TopPerformingPosts } from "@/components/TopPerformingPosts";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { DashboardPostsTable } from "@/components/DashboardPostsTable";
import { ContentOverviewChart } from "@/components/ContentOverviewChart";

// Post types for TypeScript
interface Post {
  id: number;
  type: "image" | "text";
  content: string;
  image?: string;
  date: string;
  time: string;
  status: "draft" | "scheduled";
  prediction?: "positive" | "negative" | "neutral";
}

const Dashboard = () => {
  // Sample data for scheduled posts
  const [scheduledPosts, setScheduledPosts] = useState<Post[]>([
    {
      id: 1,
      type: "image",
      content: "Forest in fog",
      image: "/lovable-uploads/1f5dc3cd-0e25-4aa0-ba2f-889d901ac525.png",
      date: "April 20, 2024",
      time: "10:00 AM",
      status: "scheduled",
      prediction: "positive"
    },
    {
      id: 2,
      type: "image",
      content: "Misty mountains",
      image: "/lovable-uploads/14e1f6ac-5248-44df-a433-8eaa03333e2e.png",
      date: "April 18, 2024",
      time: "2:00 PM",
      status: "scheduled",
      prediction: "neutral"
    },
    {
      id: 3,
      type: "text",
      content: "New video coming next week. Stay tuned!",
      date: "April 16, 2024",
      time: "9:00 AM",
      status: "scheduled",
      prediction: "negative"
    }
  ]);

  // State for new post
  const [newPost, setNewPost] = useState<Omit<Post, 'id'>>({
    type: "text",
    content: "",
    date: "",
    time: "",
    status: "draft"
  });
  
  // State for selected image file
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  
  // State for dialog open/close
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // State for number of posts to display
  const [postsToDisplay, setPostsToDisplay] = useState(5);
  
  // State for section visibility
  const [sectionsState, setSectionsState] = useState({
    upcomingPosts: true,
    analytics: true,
    connectedAccounts: true,
    topPosts: true
  });
  
  // State for view type
  const [postsViewType, setPostsViewType] = useState<"cards" | "list">("cards");

  const { toast } = useToast();

  // Toggle section visibility
  const toggleSection = (section: keyof typeof sectionsState) => {
    setSectionsState({
      ...sectionsState,
      [section]: !sectionsState[section]
    });
  };

  // Handle content change
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost({
      ...newPost,
      content: e.target.value
    });
  };

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setNewPost({
        ...newPost,
        type: "image"
      });
      
      // Create a preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle date selection
  const handleDateChange = (date: Date | undefined) => {
    if (date) {
      const formattedDate = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      setNewPost({
        ...newPost,
        date: formattedDate
      });
    }
  };

  // Handle time selection
  const handleTimeChange = (time: string) => {
    setNewPost({
      ...newPost,
      time: time
    });
  };

  // Save as draft
  const handleSaveDraft = () => {
    if (!newPost.content) {
      toast({
        title: "Missing content",
        description: "Please add content to your post",
        variant: "destructive"
      });
      return;
    }

    const newId = scheduledPosts.length > 0 
      ? Math.max(...scheduledPosts.map(post => post.id)) + 1 
      : 1;
    
    const draftPost = {
      ...newPost,
      id: newId,
      status: "draft" as const,
      date: newPost.date || "Not scheduled",
      time: newPost.time || "Not scheduled",
      image: imagePreview || undefined
    };
    
    setScheduledPosts([...scheduledPosts, draftPost]);
    resetForm();
    setIsDialogOpen(false);
    
    toast({
      title: "Draft saved",
      description: "Your post has been saved as a draft"
    });
  };

  // Schedule post
  const handleSchedulePost = () => {
    if (!newPost.content) {
      toast({
        title: "Missing content",
        description: "Please add content to your post",
        variant: "destructive"
      });
      return;
    }

    if (!newPost.date || !newPost.time) {
      toast({
        title: "Missing schedule",
        description: "Please select a date and time for your post",
        variant: "destructive"
      });
      return;
    }

    const newId = scheduledPosts.length > 0 
      ? Math.max(...scheduledPosts.map(post => post.id)) + 1 
      : 1;
    
    const scheduledPost = {
      ...newPost,
      id: newId,
      status: "scheduled" as const,
      image: imagePreview || undefined
    };
    
    setScheduledPosts([...scheduledPosts, scheduledPost]);
    resetForm();
    setIsDialogOpen(false);
    
    toast({
      title: "Post scheduled",
      description: `Your post has been scheduled for ${scheduledPost.date} at ${scheduledPost.time}`
    });
  };

  // Delete post
  const handleDeletePost = (id: number) => {
    setScheduledPosts(scheduledPosts.filter(post => post.id !== id));
    toast({
      title: "Post deleted",
      description: "The post has been removed"
    });
  };
  
  // Edit post (opens dialog with post data)
  const handleEditPost = (post: Post) => {
    setNewPost({
      type: post.type,
      content: post.content,
      date: post.date,
      time: post.time,
      status: post.status,
      image: post.image
    });
    
    if (post.image) {
      setImagePreview(post.image);
    }
    
    setIsDialogOpen(true);
  };

  // Reset form
  const resetForm = () => {
    setNewPost({
      type: "text",
      content: "",
      date: "",
      time: "",
      status: "draft"
    });
    setSelectedImage(null);
    setImagePreview("");
  };

  // Handle posts to display change
  const handlePostsToDisplayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPostsToDisplay(Number(e.target.value));
  };
  
  // Render prediction badge
  const renderPredictionBadge = (prediction?: "positive" | "negative" | "neutral") => {
    if (!prediction) return null;
    
    const variants = {
      positive: "bg-green-100 text-green-800",
      negative: "bg-red-100 text-red-800",
      neutral: "bg-blue-100 text-blue-800"
    };
    
    return (
      <Badge className={variants[prediction]}>
        {prediction.charAt(0).toUpperCase() + prediction.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-normal text-yapp-deep-navy">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your social media activity</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="cta-dark" className="flex items-center gap-2">
              <Edit2 size={16} />
              <span>Create New Post</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Create New Post</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <Textarea 
                    placeholder="What's on your mind?"
                    className="resize-none h-32"
                    value={newPost.content}
                    onChange={handleContentChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Add Image</label>
                  <Input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange}
                    className="cursor-pointer"
                  />
                </div>
                {imagePreview && (
                  <div className="mt-4">
                    <p className="text-sm font-medium mb-2">Preview:</p>
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="max-h-48 rounded object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Schedule Date</label>
                  <DatePicker onDateChange={handleDateChange} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Schedule Time</label>
                  <TimePicker onTimeChange={handleTimeChange} />
                </div>
                <div className="flex flex-col gap-2 mt-6">
                  <Button 
                    variant="cta-dark"
                    className="w-full gap-2"
                    onClick={handleSchedulePost}
                  >
                    Schedule Post
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full gap-2"
                    onClick={handleSaveDraft}
                  >
                    Save as Draft
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Quick Actions Section */}
      <div className="mb-8">
        <h2 className="text-xl font-medium mb-4">Quick Actions</h2>
        <QuickActions />
      </div>

      {/* Upcoming Posts Section */}
      <Collapsible 
        open={sectionsState.upcomingPosts} 
        onOpenChange={() => toggleSection('upcomingPosts')}
        className="mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1 h-auto">
                {sectionsState.upcomingPosts ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>
            </CollapsibleTrigger>
            <h2 className="text-xl font-medium">Your Next Posts</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <select
                className="text-sm border rounded py-1 px-2 bg-white"
                value={postsViewType}
                onChange={(e) => setPostsViewType(e.target.value as "cards" | "list")}
              >
                <option value="cards">Card View</option>
                <option value="list">List View</option>
              </select>
              <label htmlFor="postsCount" className="text-sm text-yapp-deep-navy/70">Show:</label>
              <select 
                id="postsCount" 
                className="text-sm border rounded py-1 px-2 bg-white"
                value={postsToDisplay}
                onChange={handlePostsToDisplayChange}
              >
                <option value={5}>5 posts</option>
                <option value={10}>10 posts</option>
                <option value={20}>20 posts</option>
              </select>
            </div>
            <Button variant="ghost" className="gap-2">
              View All <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        
        <CollapsibleContent>
          {scheduledPosts.length === 0 ? (
            <div className="w-full flex flex-col items-center justify-center p-8 bg-yapp-pale-blue rounded-lg">
              <p className="text-center text-muted-foreground mb-4">No upcoming posts. Create a new post to get started.</p>
              <Button variant="cta-dark" onClick={() => setIsDialogOpen(true)}>
                Create New Post
              </Button>
            </div>
          ) : postsViewType === "cards" ? (
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
              {scheduledPosts.slice(0, postsToDisplay).map((post) => (
                <div key={post.id} className="flex-shrink-0 w-[280px]">
                  <UpcomingPostCard 
                    post={post} 
                    onDelete={() => handleDeletePost(post.id)}
                    onEdit={() => handleEditPost(post)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <DashboardPostsTable 
              posts={scheduledPosts.slice(0, postsToDisplay)} 
              onDelete={handleDeletePost} 
              onEdit={handleEditPost} 
            />
          )}
        </CollapsibleContent>
      </Collapsible>

      {/* Analytics Overview Section */}
      <Collapsible 
        open={sectionsState.analytics} 
        onOpenChange={() => toggleSection('analytics')}
        className="mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1 h-auto">
                {sectionsState.analytics ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>
            </CollapsibleTrigger>
            <h2 className="text-xl font-medium">Analytics Overview</h2>
          </div>
        </div>
        
        <CollapsibleContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatsCard
              title="Total Posts Published"
              value="42"
              description="Published"
              icon={<Activity className="h-4 w-4 text-muted-foreground" />}
              trend="up"
              trendValue="+12% this month"
            />
            <StatsCard
              title="Total Engagement"
              value="3.5%"
              description="Avg. Engagement"
              icon={<BarChart3 className="h-4 w-4 text-muted-foreground" />}
              trend="down"
              trendValue="-0.8% this month"
            />
            <StatsCard
              title="Total Reach"
              value="10K"
              description="Accounts Reached"
              icon={<Users className="h-4 w-4 text-muted-foreground" />}
              trend="up"
              trendValue="+5% this month"
            />
            <StatsCard
              title="Top Platform"
              value="Instagram"
              description="4.2% engagement"
              icon={<Activity className="h-4 w-4 text-muted-foreground" />}
              trend="up"
              trendValue="+1.5% this month"
            />
          </div>
          
          <div className="mt-6 mb-4">
            <Tabs defaultValue="30days" className="w-full">
              <TabsList>
                <TabsTrigger value="7days">7 Days</TabsTrigger>
                <TabsTrigger value="30days">30 Days</TabsTrigger>
                <TabsTrigger value="90days">90 Days</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
              </TabsList>
              <TabsContent value="7days" className="mt-4">
                <ContentOverviewChart period="7days" />
              </TabsContent>
              <TabsContent value="30days" className="mt-4">
                <ContentOverviewChart period="30days" />
              </TabsContent>
              <TabsContent value="90days" className="mt-4">
                <ContentOverviewChart period="90days" />
              </TabsContent>
              <TabsContent value="year" className="mt-4">
                <ContentOverviewChart period="year" />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="mt-4 flex justify-center gap-4">
            <Button variant="outline" className="gap-2">
              View Full Analytics <ArrowRight size={16} />
            </Button>
            <Button variant="outline" className="gap-2">
              Export Overview
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Connected Accounts Section */}
      <Collapsible 
        open={sectionsState.connectedAccounts} 
        onOpenChange={() => toggleSection('connectedAccounts')}
        className="mb-8"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1 h-auto">
                {sectionsState.connectedAccounts ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>
            </CollapsibleTrigger>
            <h2 className="text-xl font-medium">Connected Accounts</h2>
          </div>
        </div>
        
        <CollapsibleContent>
          <Card className="bg-yapp-pale-blue">
            <CardContent className="p-4">
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
                <Button variant="outline">
                  Manage All Accounts
                </Button>
                <Button variant="outline">
                  Connect More Accounts
                </Button>
              </div>
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>

      {/* Top Performing Posts Section */}
      <Collapsible 
        open={sectionsState.topPosts} 
        onOpenChange={() => toggleSection('topPosts')}
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1 h-auto">
                {sectionsState.topPosts ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>
            </CollapsibleTrigger>
            <h2 className="text-xl font-medium">Top Performing Posts</h2>
          </div>
        </div>
        
        <CollapsibleContent>
          <TopPerformingPosts limit={3} />
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Dashboard;
