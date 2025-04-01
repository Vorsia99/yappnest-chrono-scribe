
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, PinIcon, MessageCircle, X, Unlink, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Platform {
  id: string;
  name: string;
  icon: any;
  connected: boolean;
  color: string;
  supportsStories?: boolean;
  type?: "post" | "story"; // Add type property to the interface
}

interface PlatformSelectorProps {
  onChange?: (platforms: Platform[]) => void;
  initialPlatforms?: Platform[];
  contentType?: string;
}

export function PlatformSelector({ onChange, initialPlatforms = [], contentType = "post" }: PlatformSelectorProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedStoryPlatforms, setSelectedStoryPlatforms] = useState<string[]>([]);
  
  const platforms: Platform[] = [
    { id: "instagram", name: "Instagram", icon: Instagram, connected: true, color: "bg-gradient-to-r from-purple-500 to-pink-500", supportsStories: true },
    { id: "x", name: "X", icon: X, connected: true, color: "bg-black", supportsStories: false },
    { id: "youtube", name: "YouTube", icon: Youtube, connected: true, color: "bg-red-500", supportsStories: true },
    { id: "facebook", name: "Facebook", icon: Facebook, connected: false, color: "bg-blue-600", supportsStories: true },
    { id: "tiktok", name: "TikTok", icon: MessageCircle, connected: false, color: "bg-black", supportsStories: true },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, connected: false, color: "bg-blue-700", supportsStories: false },
    { id: "pinterest", name: "Pinterest", icon: PinIcon, connected: false, color: "bg-red-600", supportsStories: false },
  ];
  
  useEffect(() => {
    // Initialize with any platforms provided or default to connected platforms
    if (initialPlatforms && initialPlatforms.length > 0) {
      // Make sure to check for the type property safely
      setSelectedPlatforms(initialPlatforms.filter(p => p.type !== "story").map(p => p.id));
      setSelectedStoryPlatforms(initialPlatforms.filter(p => p.type === "story").map(p => p.id));
    } else {
      // By default, select the first connected platform only (free plan limit)
      const connectedPlatform = platforms.find(p => p.connected);
      if (connectedPlatform) {
        if (contentType === "post" || contentType === "both") {
          setSelectedPlatforms([connectedPlatform.id]);
        }
        if ((contentType === "story" || contentType === "both") && connectedPlatform.supportsStories) {
          setSelectedStoryPlatforms([connectedPlatform.id]);
        }
      }
    }
  }, [initialPlatforms, contentType]);

  const handlePlatformToggle = (platformId: string, checked: boolean, isStory: boolean = false) => {
    let updatedPlatforms;
    
    if (isStory) {
      if (checked) {
        // Free plan allows only one platform
        updatedPlatforms = [platformId];
      } else {
        updatedPlatforms = selectedStoryPlatforms.filter(id => id !== platformId);
      }
      
      setSelectedStoryPlatforms(updatedPlatforms);
    } else {
      if (checked) {
        // Free plan allows only one platform
        updatedPlatforms = [platformId];
      } else {
        updatedPlatforms = selectedPlatforms.filter(id => id !== platformId);
      }
      
      setSelectedPlatforms(updatedPlatforms);
    }
    
    if (onChange) {
      // Create properly typed objects with the type property explicitly set
      const selectedPlatformObjects = [
        ...platforms.filter(p => selectedPlatforms.includes(p.id)).map(p => ({...p, type: "post" as const})),
        ...platforms.filter(p => selectedStoryPlatforms.includes(p.id)).map(p => ({...p, type: "story" as const}))
      ];
      onChange(selectedPlatformObjects);
    }
  };

  // Only show story checkbox if contentType is "story" or "both"
  const showStoryCheckbox = contentType === "story" || contentType === "both";
  // Only show post checkbox if contentType is "post" or "both"
  const showPostCheckbox = contentType === "post" || contentType === "both";

  return (
    <div className="space-y-4">
      {platforms.map((platform) => (
        <div key={platform.id} className="flex items-center justify-between p-3 border rounded-md hover:bg-gray-50 transition-colors">
          <div className="flex items-center space-x-3">
            <div className={cn("flex h-8 w-8 items-center justify-center rounded-full text-white", platform.color)}>
              <platform.icon className="h-4 w-4" />
            </div>
            <div>
              <Label htmlFor={platform.id} className="cursor-pointer">{platform.name}</Label>
              {!platform.connected && (
                <p className="text-xs text-muted-foreground">Not connected</p>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {!platform.connected ? (
              <span className="text-xs text-muted-foreground flex items-center">
                <Unlink className="h-3 w-3 mr-1" /> Not connected
              </span>
            ) : (
              <>
                {showPostCheckbox && (
                  <div className="flex items-center space-x-1">
                    <Label htmlFor={`${platform.id}-post`} className="text-xs">Post</Label>
                    <Checkbox 
                      id={`${platform.id}-post`} 
                      checked={selectedPlatforms.includes(platform.id)}
                      onCheckedChange={(checked) => handlePlatformToggle(platform.id, !!checked)}
                    />
                  </div>
                )}
                
                {showStoryCheckbox && (
                  <TooltipProvider>
                    <div className="flex items-center space-x-1">
                      <Label htmlFor={`${platform.id}-story`} className="text-xs">Story</Label>
                      {platform.supportsStories ? (
                        <Checkbox 
                          id={`${platform.id}-story`} 
                          checked={selectedStoryPlatforms.includes(platform.id)}
                          onCheckedChange={(checked) => handlePlatformToggle(platform.id, !!checked, true)}
                        />
                      ) : (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="ml-1">
                              <Checkbox 
                                id={`${platform.id}-story`}
                                disabled={true}
                              />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Stories not supported on {platform.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                  </TooltipProvider>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
