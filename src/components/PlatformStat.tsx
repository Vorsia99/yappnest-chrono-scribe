
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, X, Youtube, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlatformStatProps {
  platform: "instagram" | "x" | "youtube";
  followers: string;
  engagement: string;
  growth: string;
  posts: string;
}

export function PlatformStat({ platform, followers, engagement, growth, posts }: PlatformStatProps) {
  const platformIcons = {
    instagram: <Instagram className="h-5 w-5" />,
    x: <X className="h-5 w-5" />,
    youtube: <Youtube className="h-5 w-5" />,
  };

  const platformColors = {
    instagram: "from-purple-500 to-pink-500",
    x: "from-black to-gray-800",
    youtube: "from-red-500 to-red-600",
  };

  const platformNames = {
    instagram: "Instagram",
    x: "X",
    youtube: "YouTube",
  };

  return (
    <Card className="hover-scale shadow-soft">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-md font-medium">{platformNames[platform]}</CardTitle>
          <div className={cn("flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r text-white", platformColors[platform])}>
            {platformIcons[platform]}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-4">
          <div>
            <p className="text-sm text-muted-foreground">Followers</p>
            <div className="flex items-end space-x-1">
              <span className="text-2xl font-bold">{followers}</span>
              <span className="text-xs text-green-500 flex items-center pb-1">{growth} <TrendingUp className="h-3 w-3 ml-1" /></span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Engagement</p>
              <p className="text-lg font-medium">{engagement}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Posts</p>
              <p className="text-lg font-medium">{posts}</p>
            </div>
          </div>
          <div className="h-[60px] w-full mt-2 bg-gradient-to-r from-transparent via-muted/30 to-transparent rounded"></div>
        </div>
      </CardContent>
    </Card>
  );
}
