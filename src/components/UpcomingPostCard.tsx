
import { cn } from "@/lib/utils";
import { Edit2, Instagram, Trash2, X, Youtube } from "lucide-react";
import { Button } from "./ui/button";

interface Post {
  id: number;
  type: "image" | "text";
  content: string;
  image?: string;
  date: string;
  time: string;
  status: "draft" | "scheduled";
}

interface UpcomingPostCardProps {
  title?: string;
  platform?: "instagram" | "x" | "youtube";
  scheduledFor?: string;
  post?: Post;
  onDelete?: () => void;
  onEdit?: () => void;
}

export function UpcomingPostCard({ title, platform, scheduledFor, post, onDelete, onEdit }: UpcomingPostCardProps) {
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

  // If a post object is provided, use it; otherwise, use the direct props
  const displayTitle = post ? post.content : title;
  const displayScheduledFor = post ? `${post.date} at ${post.time}` : scheduledFor;
  
  // Default to instagram if no platform specified
  const displayPlatform = platform || "instagram";

  return (
    <div className="flex flex-col rounded-md border p-3 shadow-soft hover-scale">
      <div className="flex items-center space-x-3 mb-2">
        <div className={cn("flex h-8 w-8 items-center justify-center rounded-full text-white", platformColors[displayPlatform])}>
          {platformIcons[displayPlatform]}
        </div>
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">{displayTitle}</p>
          <p className="text-xs text-muted-foreground">{displayScheduledFor}</p>
        </div>
      </div>
      
      {(onEdit || onDelete) && (
        <div className="flex justify-end gap-2 mt-2 pt-2 border-t">
          {onEdit && (
            <Button variant="ghost" size="sm" onClick={onEdit}>
              <Edit2 className="h-4 w-4" />
            </Button>
          )}
          {onDelete && (
            <Button variant="ghost" size="sm" onClick={onDelete}>
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
