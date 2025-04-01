
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, PinIcon, MessageCircle, X, Unlink, Youtube } from "lucide-react";
import { useEffect, useState } from "react";

interface PlatformSelectorProps {
  onChange?: (platforms: any[]) => void;
  initialPlatforms?: any[];
}

export function PlatformSelector({ onChange, initialPlatforms = [] }: PlatformSelectorProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  
  const platforms = [
    { id: "instagram", name: "Instagram", icon: Instagram, connected: true, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { id: "x", name: "X", icon: X, connected: true, color: "bg-black" },
    { id: "youtube", name: "YouTube", icon: Youtube, connected: true, color: "bg-red-500" },
    { id: "facebook", name: "Facebook", icon: Facebook, connected: false, color: "bg-blue-600" },
    { id: "tiktok", name: "TikTok", icon: MessageCircle, connected: false, color: "bg-black" },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, connected: false, color: "bg-blue-700" },
    { id: "pinterest", name: "Pinterest", icon: PinIcon, connected: false, color: "bg-red-600" },
  ];
  
  useEffect(() => {
    // Initialize with any platforms provided or default to connected platforms
    if (initialPlatforms && initialPlatforms.length > 0) {
      setSelectedPlatforms(initialPlatforms.map(p => p.id));
    } else {
      // By default, select the first connected platform only (free plan limit)
      const connectedPlatform = platforms.find(p => p.connected);
      if (connectedPlatform) {
        setSelectedPlatforms([connectedPlatform.id]);
      }
    }
  }, [initialPlatforms]);

  const handlePlatformToggle = (platformId: string, checked: boolean) => {
    let updatedPlatforms;
    
    if (checked) {
      // Free plan allows only one platform
      updatedPlatforms = [platformId];
    } else {
      updatedPlatforms = selectedPlatforms.filter(id => id !== platformId);
    }
    
    setSelectedPlatforms(updatedPlatforms);
    
    if (onChange) {
      const selectedPlatformObjects = platforms.filter(p => 
        updatedPlatforms.includes(p.id)
      );
      onChange(selectedPlatformObjects);
    }
  };

  return (
    <div className="space-y-4">
      {platforms.map((platform) => (
        <div key={platform.id} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={cn("flex h-8 w-8 items-center justify-center rounded-full text-white", platform.color)}>
              <platform.icon className="h-4 w-4" />
            </div>
            <Label htmlFor={platform.id} className="cursor-pointer">
              {platform.name}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            {!platform.connected && (
              <span className="text-xs text-muted-foreground flex items-center">
                <Unlink className="h-3 w-3 mr-1" /> Not connected
              </span>
            )}
            <Checkbox 
              id={platform.id} 
              disabled={!platform.connected}
              checked={selectedPlatforms.includes(platform.id)}
              onCheckedChange={(checked) => handlePlatformToggle(platform.id, !!checked)}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
