
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sparkles, AlignLeft, Instagram, X, Facebook, Youtube, MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface StepContentProps {
  formData: any;
  updateFormData: (data: any) => void;
  isFirstVisit: boolean;
}

export const StepContent = ({ formData, updateFormData, isFirstVisit }: StepContentProps) => {
  const [activeTab, setActiveTab] = useState("instagram");
  const [captionLengths, setCaptionLengths] = useState({
    instagram: 0,
    x: 0,
    facebook: 0,
    youtube: 0,
    tiktok: 0,
  });
  
  const platforms = [
    { id: "instagram", name: "Instagram", icon: Instagram, maxLength: 2200 },
    { id: "x", name: "X", icon: X, maxLength: 280 },
    { id: "facebook", name: "Facebook", icon: Facebook, maxLength: 5000 },
    { id: "youtube", name: "YouTube", icon: Youtube, maxLength: 5000 },
    { id: "tiktok", name: "TikTok", icon: MessageCircle, maxLength: 2200 },
  ];

  const handleTitleChange = (e) => {
    updateFormData({ title: e.target.value });
  };

  const handleCaptionChange = (platform, value) => {
    const newCaptions = { ...formData.captions, [platform]: value };
    updateFormData({ captions: newCaptions });
    
    setCaptionLengths({
      ...captionLengths,
      [platform]: value.length
    });
  };

  const handleHashtagsChange = (platform, value) => {
    const newHashtags = { ...formData.hashtags, [platform]: value };
    updateFormData({ hashtags: newHashtags });
  };

  const handleCopyToAll = () => {
    const currentCaption = formData.captions[activeTab] || "";
    const currentHashtags = formData.hashtags[activeTab] || "";
    
    const newCaptions = {};
    const newHashtags = {};
    
    platforms.forEach(platform => {
      newCaptions[platform.id] = currentCaption;
      newHashtags[platform.id] = currentHashtags;
    });
    
    updateFormData({ 
      captions: newCaptions,
      hashtags: newHashtags
    });
    
    // Update lengths
    const newLengths = {};
    platforms.forEach(platform => {
      newLengths[platform.id] = currentCaption.length;
    });
    
    setCaptionLengths(newLengths);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Add title and captions</h2>
        <p className="text-muted-foreground">Customize your content for each platform</p>
      </div>

      <div className="space-y-6 animate-fade-in">
        <div className="space-y-2">
          <label className="text-sm font-medium">Title/Headline</label>
          <Input 
            placeholder="Enter post title or headline" 
            value={formData.title || ""}
            onChange={handleTitleChange}
          />
        </div>
      
        <Tabs 
          defaultValue="instagram" 
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="w-full justify-start mb-4 overflow-auto">
            {platforms.map(platform => (
              <TabsTrigger 
                key={platform.id} 
                value={platform.id} 
                className="gap-1"
              >
                <platform.icon className="h-4 w-4" /> {platform.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {platforms.map(platform => (
            <TabsContent 
              key={platform.id} 
              value={platform.id}
              className="animate-fade-in"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <TooltipProvider>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Caption/Content</label>
                      <Tooltip open={isFirstVisit && platform.id === "instagram"}>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                            <Sparkles className="h-3 w-3" /> AI Assist
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="max-w-xs">
                          <p>Tip: Customize captions for each platform to maximize impact.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TooltipProvider>
                  
                  <Textarea 
                    placeholder={`Write your ${platform.name} content here...`} 
                    className="min-h-32"
                    value={formData.captions?.[platform.id] || ""}
                    onChange={(e) => handleCaptionChange(platform.id, e.target.value)}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>
                      {captionLengths[platform.id] || 0}/{platform.maxLength} characters
                    </span>
                    <Button variant="ghost" size="sm" className="h-6 gap-1 text-xs">
                      <AlignLeft className="h-3 w-3" /> Format Text
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Hashtags</label>
                  <div className="flex items-center">
                    <Input 
                      placeholder="Add hashtags (separate with spaces)" 
                      value={formData.hashtags?.[platform.id] || ""}
                      onChange={(e) => handleHashtagsChange(platform.id, e.target.value)}
                    />
                    <Button variant="ghost" size="sm" className="ml-2 gap-1">
                      <Sparkles className="h-4 w-4" /> Suggest
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <Button 
          variant="outline" 
          className="mt-2"
          onClick={handleCopyToAll}
        >
          Copy to All Platforms
        </Button>
      </div>
    </div>
  );
};
