
import React, { useState, useEffect } from "react";
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
  const [activeTab, setActiveTab] = useState("instagram-post");
  const [captionLengths, setCaptionLengths] = useState<Record<string, number>>({});
  
  const contentType = formData.contentType || "post";
  const selectedPlatforms = formData.selectedPlatforms || [];

  const platforms = [
    { id: "instagram", name: "Instagram", icon: Instagram, maxLength: { post: 2200, story: 150 } },
    { id: "x", name: "X", icon: X, maxLength: { post: 280, story: 0 } },
    { id: "facebook", name: "Facebook", icon: Facebook, maxLength: { post: 5000, story: 200 } },
    { id: "youtube", name: "YouTube", icon: Youtube, maxLength: { post: 5000, story: 200 } },
    { id: "tiktok", name: "TikTok", icon: MessageCircle, maxLength: { post: 2200, story: 100 } },
  ];

  // Generate tabs based on selected platforms and content type
  const generateTabs = () => {
    const tabs: any[] = [];
    
    selectedPlatforms.forEach(platform => {
      const platformInfo = platforms.find(p => p.id === platform.id);
      if (!platformInfo) return;
      
      if (contentType === "post" || contentType === "both") {
        if (platform.type === "post" || !platform.type) {
          tabs.push({
            id: `${platform.id}-post`,
            name: `${platform.name} Post`,
            icon: platform.icon,
            maxLength: platformInfo.maxLength.post
          });
        }
      }
      
      if (contentType === "story" || contentType === "both") {
        if (platform.type === "story" || (platform.supportsStories && contentType === "story")) {
          tabs.push({
            id: `${platform.id}-story`,
            name: `${platform.name} Story`,
            icon: platform.icon,
            maxLength: platformInfo.maxLength.story
          });
        }
      }
    });
    
    return tabs;
  };
  
  const tabsData = generateTabs();
  
  // Set the first tab as active if no tab is selected or the active tab is not in tabsData
  useEffect(() => {
    if (tabsData.length > 0 && (!activeTab || !tabsData.find(tab => tab.id === activeTab))) {
      setActiveTab(tabsData[0].id);
    }
  }, [tabsData, activeTab]);

  const handleTitleChange = (e) => {
    updateFormData({ title: e.target.value });
  };

  const handleCaptionChange = (tabId, value) => {
    const [platformId, contentType] = tabId.split('-');
    const newCaptions = { 
      ...formData.captions, 
      [tabId]: value 
    };
    updateFormData({ captions: newCaptions });
    
    setCaptionLengths(prevLengths => ({
      ...prevLengths,
      [tabId]: value.length
    }));
  };

  const handleHashtagsChange = (tabId, value) => {
    const [platformId, contentType] = tabId.split('-');
    const newHashtags = { 
      ...formData.hashtags, 
      [tabId]: value 
    };
    updateFormData({ hashtags: newHashtags });
  };

  const handleCopyToAll = (type: 'post' | 'story') => {
    if (!activeTab) return;
    
    const [activePlatform, activeType] = activeTab.split('-');
    
    // Only copy to tabs of the same type (post to post, story to story)
    if (activeType !== type) return;
    
    const currentCaption = formData.captions?.[activeTab] || "";
    const currentHashtags = formData.hashtags?.[activeTab] || "";
    
    const newCaptions = { ...formData.captions };
    const newHashtags = { ...formData.hashtags };
    
    tabsData.forEach(tab => {
      const [_, tabType] = tab.id.split('-');
      if (tabType === type) {
        newCaptions[tab.id] = currentCaption;
        newHashtags[tab.id] = currentHashtags;
      }
    });
    
    updateFormData({ 
      captions: newCaptions,
      hashtags: newHashtags
    });
    
    // Update lengths
    const newLengths = { ...captionLengths };
    tabsData.forEach(tab => {
      const [_, tabType] = tab.id.split('-');
      if (tabType === type) {
        newLengths[tab.id] = currentCaption.length;
      }
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
      
        {tabsData.length > 0 ? (
          <Tabs 
            defaultValue={tabsData[0]?.id} 
            className="w-full"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="w-full justify-start mb-4 overflow-auto">
              {tabsData.map(tab => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id} 
                  className="gap-1"
                >
                  <tab.icon className="h-4 w-4" /> {tab.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabsData.map(tab => {
              const [platformId, type] = tab.id.split('-');
              const isStory = type === 'story';
              
              return (
                <TabsContent 
                  key={tab.id} 
                  value={tab.id}
                  className="animate-fade-in"
                >
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <TooltipProvider>
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium">
                            {isStory ? 'Story Caption' : 'Caption/Content'}
                          </label>
                          <Tooltip open={isFirstVisit && tab.id === tabsData[0]?.id}>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="sm" className="h-8 gap-1 text-xs">
                                <Sparkles className="h-3 w-3" /> AI Assist
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent side="left" className="max-w-xs">
                              <p>{isStory 
                                ? "Tip: Keep story captions short and engaging—use emojis or questions to grab attention!"
                                : "Tip: Customize captions for each platform to maximize impact."
                              }</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </TooltipProvider>
                      
                      <Textarea 
                        placeholder={`Write your ${isStory ? 'story' : platformId} content here...`} 
                        className={isStory ? "min-h-20" : "min-h-32"}
                        value={formData.captions?.[tab.id] || ""}
                        onChange={(e) => handleCaptionChange(tab.id, e.target.value)}
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>
                          {captionLengths[tab.id] || 0}/{tab.maxLength} characters
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
                          value={formData.hashtags?.[tab.id] || ""}
                          onChange={(e) => handleHashtagsChange(tab.id, e.target.value)}
                        />
                        <Button variant="ghost" size="sm" className="ml-2 gap-1">
                          <Sparkles className="h-4 w-4" /> Suggest
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        ) : (
          <div className="text-center p-6 border rounded-md">
            <p className="text-muted-foreground">Please select at least one platform in the previous step.</p>
          </div>
        )}
        
        {tabsData.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {contentType !== "story" && (
              <Button 
                variant="outline" 
                onClick={() => handleCopyToAll('post')}
              >
                Copy to All Posts
              </Button>
            )}
            
            {contentType !== "post" && (
              <Button 
                variant="outline" 
                onClick={() => handleCopyToAll('story')}
              >
                Copy to All Stories
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
