
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, PinIcon, MessageCircle, X, Unlink, Youtube } from "lucide-react";

export function PlatformSelector() {
  const platforms = [
    { id: "instagram", name: "Instagram", icon: Instagram, connected: true, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { id: "x", name: "X", icon: X, connected: true, color: "bg-black" },
    { id: "youtube", name: "YouTube", icon: Youtube, connected: true, color: "bg-red-500" },
    { id: "facebook", name: "Facebook", icon: Facebook, connected: false, color: "bg-blue-600" },
    { id: "tiktok", name: "TikTok", icon: MessageCircle, connected: false, color: "bg-black" },
    { id: "linkedin", name: "LinkedIn", icon: Linkedin, connected: false, color: "bg-blue-700" },
    { id: "pinterest", name: "Pinterest", icon: PinIcon, connected: false, color: "bg-red-600" },
  ];

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
              defaultChecked={platform.connected}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
