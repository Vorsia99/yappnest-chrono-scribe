
import { cn } from "@/lib/utils";
import { Instagram, X, Youtube } from "lucide-react";

interface UpcomingPostCardProps {
  title: string;
  platform: "instagram" | "x" | "youtube";
  scheduledFor: string;
}

export function UpcomingPostCard({ title, platform, scheduledFor }: UpcomingPostCardProps) {
  const platformIcons = {
    instagram: <Instagram className="h-4 w-4" />,
    x: <X className="h-4 w-4" />,
    youtube: <Youtube className="h-4 w-4" />,
  };

  const platformColors = {
    instagram: "bg-gradient-to-r from-purple-500 to-pink-500",
    x: "bg-black",
    youtube: "bg-red-500",
  };

  return (
    <div className="flex items-center space-x-3 rounded-md border p-3 shadow-soft hover-scale">
      <div className={cn("flex h-8 w-8 items-center justify-center rounded-full text-white", platformColors[platform])}>
        {platformIcons[platform]}
      </div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-xs text-muted-foreground">{scheduledFor}</p>
      </div>
    </div>
  );
}
