
import React from "react";
import { PlatformSelector } from "@/components/PlatformSelector";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LockIcon } from "lucide-react";

interface StepPlatformsProps {
  formData: any;
  updateFormData: (data: any) => void;
  isFirstVisit: boolean;
}

export const StepPlatforms = ({ formData, updateFormData, isFirstVisit }: StepPlatformsProps) => {
  const handlePlatformsChange = (platforms: any[]) => {
    updateFormData({ selectedPlatforms: platforms });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Select platforms and accounts</h2>
        <p className="text-muted-foreground">Choose where you want to publish your content</p>
      </div>

      <div className="space-y-4 animate-fade-in">
        <TooltipProvider>
          <Tooltip open={isFirstVisit}>
            <TooltipTrigger asChild>
              <div>
                <PlatformSelector 
                  onChange={handlePlatformsChange}
                  initialPlatforms={formData.selectedPlatforms || []}
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
