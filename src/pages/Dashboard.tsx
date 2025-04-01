
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Edit2, Trash2, PlusCircle, Calendar, Clock, Send, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/DatePicker";
import { TimePicker } from "@/components/TimePicker";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import UpcomingPostCard from "@/components/UpcomingPostCard";
import PlatformStat from "@/components/PlatformStat";
import StatsCard from "@/components/StatsCard";

// Post types for TypeScript
interface Post {
  id: number;
  type: "image" | "text";
  content: string;
  image?: string;
  date: string;
  time: string;
  status: "draft" | "scheduled";
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
      status: "scheduled"
    },
    {
      id: 2,
      type: "image",
      content: "Misty mountains",
      image: "/lovable-uploads/14e1f6ac-5248-44df-a433-8eaa03333e2e.png",
      date: "April 18, 2024",
      time: "2:00 PM",
      status: "scheduled"
    },
    {
      id: 3,
      type: "text",
      content: "New video coming next week. Stay tuned!",
      date: "April 16, 2024",
      time: "9:00 AM",
      status: "scheduled"
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

  const { toast } = useToast();

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

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-normal text-yapp-deep-navy">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your social media activity</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="cta-dark" className="gap-2">
              <PlusCircle size={20} />
              Create New Post
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
                    <Send size={16} />
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

      {/* Upcoming Posts Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">Your Next Posts</h2>
          <Button variant="ghost" className="gap-2">
            View All <ArrowRight size={16} />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {scheduledPosts.slice(0, 4).map((post) => (
            <UpcomingPostCard 
              key={post.id} 
              post={post} 
              onDelete={() => handleDeletePost(post.id)}
              onEdit={() => handleEditPost(post)}
            />
          ))}
          {scheduledPosts.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center p-8 bg-muted rounded-lg">
              <p className="text-center text-muted-foreground mb-4">No upcoming posts. Create a new post to get started.</p>
              <Button variant="cta-dark" onClick={() => setIsDialogOpen(true)}>
                Create New Post
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Analytics Overview Section */}
      <div>
        <h2 className="text-xl font-medium mb-4">Analytics Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatsCard
            title="Total Posts Published"
            value="42"
            description="Published"
            trend="up"
            trendValue="+12% this month"
          />
          <StatsCard
            title="Total Engagement"
            value="3.5%"
            description="Avg. Engagement"
            trend="down"
            trendValue="-0.8% this month"
          />
          <StatsCard
            title="Total Reach"
            value="10K"
            description="Accounts Reached"
            trend="up"
            trendValue="+5% this month"
          />
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="gap-2">
            View Full Analytics <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      {/* Connected Accounts Section */}
      <div>
        <h2 className="text-xl font-medium mb-4">Connected Accounts</h2>
        <Card>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PlatformStat
                platform="Instagram"
                username="@yourusername"
                followers={5432}
                status="connected"
              />
              <PlatformStat
                platform="X"
                username="@yourusername"
                followers={2100}
                status="connected"
              />
              <PlatformStat
                platform="LinkedIn"
                username="Your Company"
                followers={1890}
                status="connected"
              />
            </div>
            <div className="mt-6 flex justify-center">
              <Button variant="outline">
                Manage All Accounts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scheduled Posts Table */}
      <div>
        <h2 className="text-xl font-medium mb-4">All Scheduled Posts</h2>
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4 pb-4 mb-4 border-b">
              <div className="font-medium text-yapp-deep-navy">Status</div>
              <div className="font-medium text-yapp-deep-navy">Content</div>
              <div className="font-medium text-yapp-deep-navy">Scheduled date</div>
              <div className="font-medium text-yapp-deep-navy">Actions</div>
            </div>

            <div className="space-y-8">
              {scheduledPosts.map((post) => (
                <div key={post.id} className="grid grid-cols-4 gap-4 items-center pb-6 border-b">
                  <div className="text-yapp-deep-navy">
                    {post.status === "draft" ? "Draft" : "Scheduled"}
                  </div>
                  <div className="flex items-center gap-4">
                    {post.type === "image" && post.image ? (
                      <>
                        <img 
                          src={post.image} 
                          alt={post.content}
                          className="w-32 h-20 object-cover rounded"
                        />
                      </>
                    ) : (
                      <>
                        <div className="text-yapp-deep-navy">{post.content}</div>
                      </>
                    )}
                  </div>
                  <div className="text-yapp-deep-navy">
                    {post.date}
                    <br />
                    {post.time}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="ghost" size="icon" onClick={() => handleEditPost(post)}>
                      <Edit2 size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDeletePost(post.id)}>
                      <Trash2 size={20} />
                    </Button>
                  </div>
                </div>
              ))}
              
              {scheduledPosts.length === 0 && (
                <div className="py-8 text-center text-muted-foreground">
                  No posts scheduled. Create your first post to get started.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
