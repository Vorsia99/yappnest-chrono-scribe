import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { AlignLeft, Clock, Facebook, Image, Instagram, Linkedin, PinIcon, MessageCircle, SendHorizontal, Sparkles, X, Upload, Youtube, Pencil } from "lucide-react";
import { PlatformSelector } from "@/components/PlatformSelector";
import { DatePicker } from "@/components/DatePicker";
import { TimePicker } from "@/components/TimePicker";

const Composer = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Studio</h1>
          <p className="text-muted-foreground">Create and schedule content across multiple platforms.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            Save Draft
          </Button>
          <Button className="bg-yapp-misty-blue hover:bg-yapp-misty-blue/90">
            <SendHorizontal className="mr-2 h-4 w-4" /> Schedule Post
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Content</CardTitle>
              <CardDescription>Create your content for multiple platforms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Title/Headline</label>
                <Input placeholder="Enter post title or headline" />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Caption/Content</label>
                  <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                    <Sparkles className="h-3 w-3" /> AI Assist
                  </Button>
                </div>
                <Textarea 
                  placeholder="Write your post content here..." 
                  className="min-h-32"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0/2200 characters</span>
                  <Button variant="ghost" size="sm" className="h-6 gap-1 text-xs">
                    <AlignLeft className="h-3 w-3" /> Format Text
                  </Button>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Media</label>
                <div className="mt-2 border-2 border-dashed rounded-lg p-12 text-center">
                  <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground">Drag & drop your media files here, or <span className="text-yapp-misty-blue">browse</span></p>
                  <p className="text-xs text-muted-foreground mt-1">Supports JPG, PNG, MP4, MOV</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Hashtags</label>
                <div className="flex items-center">
                  <Input placeholder="Add hashtags (separate with spaces)" />
                  <Button variant="ghost" size="sm" className="ml-2 gap-1">
                    <Sparkles className="h-4 w-4" /> Suggest
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>See how your post will look</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="instagram" className="w-full">
                <TabsList className="w-full justify-start mb-4 overflow-auto">
                  <TabsTrigger value="instagram" className="gap-1">
                    <Instagram className="h-4 w-4" /> Instagram
                  </TabsTrigger>
                  <TabsTrigger value="x" className="gap-1">
                    <X className="h-4 w-4" /> X
                  </TabsTrigger>
                  <TabsTrigger value="facebook" className="gap-1">
                    <Facebook className="h-4 w-4" /> Facebook
                  </TabsTrigger>
                  <TabsTrigger value="youtube" className="gap-1">
                    <Youtube className="h-4 w-4" /> YouTube
                  </TabsTrigger>
                  <TabsTrigger value="tiktok" className="gap-1">
                    <MessageCircle className="h-4 w-4" /> TikTok
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="instagram">
                  <div className="bg-white rounded-lg shadow-md max-w-sm mx-auto p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="text-sm font-bold">your_account</p>
                      </div>
                    </div>
                    <div className="bg-gray-200 h-72 rounded flex items-center justify-center">
                      <Image className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="mt-3 space-y-2">
                      <p className="text-sm"><span className="font-bold">your_account</span> Your caption will appear here...</p>
                      <p className="text-xs text-blue-500">#hashtags #will #appear #here</p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="x">
                  <div className="bg-white rounded-lg shadow-md max-w-sm mx-auto p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="space-y-2 w-full">
                        <div className="flex justify-between">
                          <p className="text-sm font-bold">Your Account <span className="font-normal text-gray-500">@youraccount</span></p>
                          <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        <p className="text-sm">Your tweet content will appear here...</p>
                        <div className="bg-gray-200 h-48 rounded flex items-center justify-center mt-2">
                          <Image className="h-12 w-12 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="facebook">
                  <div className="h-72 flex items-center justify-center">
                    <p className="text-muted-foreground">Facebook preview will appear here</p>
                  </div>
                </TabsContent>

                <TabsContent value="youtube">
                  <div className="h-72 flex items-center justify-center">
                    <p className="text-muted-foreground">YouTube preview will appear here</p>
                  </div>
                </TabsContent>

                <TabsContent value="tiktok">
                  <div className="h-72 flex items-center justify-center">
                    <p className="text-muted-foreground">TikTok preview will appear here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Platforms</CardTitle>
              <CardDescription>Select platforms to publish to</CardDescription>
            </CardHeader>
            <CardContent>
              <PlatformSelector />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Schedule</CardTitle>
              <CardDescription>Choose when to publish</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Date</label>
                <DatePicker />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Time</label>
                <TimePicker />
              </div>
              <div className="pt-2">
                <Button variant="outline" className="w-full gap-2">
                  <Sparkles className="h-4 w-4" /> Recommend Optimal Time
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tools</CardTitle>
              <CardDescription>Enhance your content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <Pencil className="mr-2 h-4 w-4" /> AI Caption Writer
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Image className="mr-2 h-4 w-4" /> Image Editor
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Clock className="mr-2 h-4 w-4" /> Auto-Schedule
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Composer;
