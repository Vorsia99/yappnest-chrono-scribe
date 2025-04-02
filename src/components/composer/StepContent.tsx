
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, Sparkles, AlignLeft, Hash } from "lucide-react";

export const StepContent = ({ formData, updateFormData, isFirstVisit }) => {
  const [title, setTitle] = useState(formData.title || "");
  const [captions, setCaptions] = useState(formData.captions || {});
  const [hashtags, setHashtags] = useState(formData.hashtags || {});

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    updateFormData({ title: e.target.value });
  };

  const handleCaptionChange = (platform, value) => {
    const newCaptions = { ...captions, [platform]: value };
    setCaptions(newCaptions);
    updateFormData({ captions: newCaptions });
  };

  const handleHashtagChange = (platform, value) => {
    const newHashtags = { ...hashtags, [platform]: value };
    setHashtags(newHashtags);
    updateFormData({ hashtags: newHashtags });
  };

  const generateAIContent = (platform) => {
    // In a real app, this would call an AI service
    const dummyAIContent = `This is an AI-generated caption for ${platform}. It's engaging and optimized for this platform's audience.`;
    handleCaptionChange(platform, dummyAIContent);
  };

  const platforms = [
    { id: 'global', name: 'All Platforms', icon: <AlignLeft /> },
    ...(formData.selectedPlatforms || []).includes('facebook') ? [{ id: 'facebook', name: 'Facebook', icon: <Facebook /> }] : [],
    ...(formData.selectedPlatforms || []).includes('instagram') ? [{ id: 'instagram', name: 'Instagram', icon: <Instagram /> }] : [],
    ...(formData.selectedPlatforms || []).includes('twitter') ? [{ id: 'twitter', name: 'Twitter', icon: <Twitter /> }] : [],
    ...(formData.selectedPlatforms || []).includes('youtube') ? [{ id: 'youtube', name: 'YouTube', icon: <Youtube /> }] : []
  ];

  // If no platforms were selected, show a message
  if (formData.selectedPlatforms?.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No platforms selected</h3>
        <p className="text-muted-foreground mb-4">Please go back and select at least one platform.</p>
        <Button variant="outline">Go Back to Platform Selection</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Create Content</h2>
        <p className="text-muted-foreground mb-6">Write captions and add hashtags for your post</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="post-title">Post Title (For internal reference)</Label>
          <Input 
            id="post-title"
            placeholder="Enter a title for this post"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <Tabs defaultValue="global" className="w-full">
          <TabsList className="mb-4">
            {platforms.map(platform => (
              <TabsTrigger key={platform.id} value={platform.id} className="flex items-center gap-2">
                {platform.icon}
                <span>{platform.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {platforms.map(platform => (
            <TabsContent key={platform.id} value={platform.id} className="mt-0 space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <Label htmlFor={`caption-${platform.id}`}>Caption</Label>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => generateAIContent(platform.id)}
                      className="h-8"
                    >
                      <Sparkles className="h-4 w-4 mr-1" /> Generate with AI
                    </Button>
                  </div>
                  <Textarea 
                    id={`caption-${platform.id}`}
                    placeholder="Write your caption here..."
                    className="min-h-[150px]"
                    value={captions[platform.id] || ""}
                    onChange={(e) => handleCaptionChange(platform.id, e.target.value)}
                  />
                  
                  {platform.id !== 'global' && (
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-2">
                        <Label htmlFor={`hashtags-${platform.id}`} className="flex items-center">
                          <Hash className="h-4 w-4 mr-1" /> Hashtags
                        </Label>
                        <span className="text-xs text-muted-foreground">Separate with spaces</span>
                      </div>
                      <Input
                        id={`hashtags-${platform.id}`}
                        placeholder="#yapp #marketing #socialmedia"
                        value={hashtags[platform.id] || ""}
                        onChange={(e) => handleHashtagChange(platform.id, e.target.value)}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              {platform.id === 'global' && (
                <div className="bg-muted/50 p-4 rounded-md text-sm">
                  <p className="font-medium">About Global Captions</p>
                  <p className="text-muted-foreground">This caption will be used for all platforms unless you specify a custom caption for a specific platform.</p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
