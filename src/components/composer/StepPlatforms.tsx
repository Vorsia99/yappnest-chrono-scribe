
import React, { useEffect, useState } from "react";
import { PlatformSelector } from "@/components/PlatformSelector";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LockIcon, Grid, CirclePlus, PlusCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Platform {
  id: string;
  name: string;
  icon: any;
  connected: boolean;
  color: string;
}

interface StepPlatformsProps {
  formData: any;
  updateFormData: (data: any) => void;
  isFirstVisit: boolean;
}

export const StepPlatforms = ({ formData, updateFormData, isFirstVisit }: StepPlatformsProps) => {
  const [contentType, setContentType] = useState(formData.contentType || "post");

  // Handle content type selection (post, story, or both)
  const handleContentTypeChange = (type: string) => {
    setContentType(type);
    updateFormData({ contentType: type });
  };

  // Handle platform selection for posts and stories
  const handlePlatformsChange = (platforms: Platform[]) => {
    updateFormData({ selectedPlatforms: platforms });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Select platforms and accounts</h2>
        <p className="text-muted-foreground">Choose where you want to publish your content</p>
      </div>

      {/* Content Type Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 animate-fade-in">
        <Card 
          className={cn(
            "cursor-pointer hover:shadow-md transition-all hover:scale-105",
            contentType === "post" ? "border-yapp-misty-blue border-2" : ""
          )}
          onClick={() => handleContentTypeChange("post")}
        >
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="h-12 w-12 rounded-full bg-yapp-pale-blue flex items-center justify-center mb-3">
              <Grid className="h-6 w-6 text-yapp-deep-navy" />
            </div>
            <h3 className="font-medium">Post</h3>
            <p className="text-xs text-muted-foreground mt-1">Regular feed posts</p>
          </CardContent>
        </Card>

        <Card 
          className={cn(
            "cursor-pointer hover:shadow-md transition-all hover:scale-105",
            contentType === "story" ? "border-yapp-misty-blue border-2" : ""
          )}
          onClick={() => handleContentTypeChange("story")}
        >
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="h-12 w-12 rounded-full bg-yapp-pale-blue flex items-center justify-center mb-3">
              <CirclePlus className="h-6 w-6 text-yapp-deep-navy" />
            </div>
            <h3 className="font-medium">Story</h3>
            <p className="text-xs text-muted-foreground mt-1">Temporary 24hr updates</p>
          </CardContent>
        </Card>

        <Card 
          className={cn(
            "cursor-pointer hover:shadow-md transition-all hover:scale-105",
            contentType === "both" ? "border-yapp-misty-blue border-2" : ""
          )}
          onClick={() => handleContentTypeChange("both")}
        >
          <CardContent className="flex flex-col items-center justify-center p-6 text-center">
            <div className="h-12 w-12 rounded-full bg-yapp-pale-blue flex items-center justify-center mb-3">
              <PlusCircle className="h-6 w-6 text-yapp-deep-navy" />
            </div>
            <h3 className="font-medium">Post + Story</h3>
            <p className="text-xs text-muted-foreground mt-1">Create both simultaneously</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4 animate-fade-in">
        <TooltipProvider>
          <Tooltip open={isFirstVisit}>
            <TooltipTrigger asChild>
              <div>
                <PlatformSelector 
                  onChange={handlePlatformsChange}
                  initialPlatforms={formData.selectedPlatforms || []}
                  contentType={contentType}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent side="right" className="max-w-xs">
              <p>Free Plan: Post to 1 platform. Upgrade to Pro to post to all 9 platforms!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex items-center justify-between text-sm pt-2">
          <span className="text-muted-foreground">Selected accounts: 1/1</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <LockIcon size={14} />
                  <span>Free Plan Limit</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Upgrade to Pro to post to up to 5 accounts!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};
