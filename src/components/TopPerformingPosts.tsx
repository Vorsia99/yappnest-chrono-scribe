
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Instagram, Twitter, Youtube, TikTok } from 'lucide-react';
import { Badge } from './ui/badge';

interface TopPostProps {
  content: string;
  image?: string;
  platform: string;
  platformIcon: React.ReactNode;
  metrics: {
    likes: number;
    comments: number;
    shares: number;
    reach: number;
  };
  sponsored?: boolean;
  sponsoredBy?: string;
}

interface TopPerformingPostsProps {
  platform?: string;
}

export const TopPerformingPosts = ({ platform = 'all' }: TopPerformingPostsProps) => {
  // Sample top performing posts data
  const topPosts: TopPostProps[] = [
    {
      content: "Our product launch is coming soon!",
      image: "/lovable-uploads/1f5dc3cd-0e25-4aa0-ba2f-889d901ac525.png",
      platform: "instagram",
      platformIcon: <Instagram size={16} />,
      metrics: {
        likes: 423,
        comments: 56,
        shares: 28,
        reach: 3450
      },
      sponsored: true,
      sponsoredBy: "Nike"
    },
    {
      content: "Behind the scenes of our design process",
      image: "/lovable-uploads/14e1f6ac-5248-44df-a433-8eaa03333e2e.png",
      platform: "instagram",
      platformIcon: <Instagram size={16} />,
      metrics: {
        likes: 352,
        comments: 42,
        shares: 19,
        reach: 2890
      }
    },
    {
      content: "Tips for growing your social media presence",
      platform: "x",
      platformIcon: <Twitter size={16} />,
      metrics: {
        likes: 287,
        comments: 38,
        shares: 47,
        reach: 3120
      }
    },
    {
      content: "How to create engaging content for your audience",
      platform: "youtube",
      platformIcon: <Youtube size={16} />,
      image: "/lovable-uploads/9e72d57d-7dbe-4cff-b46c-383a608f383d.png",
      metrics: {
        likes: 568,
        comments: 124,
        shares: 92,
        reach: 8750
      }
    },
    {
      content: "Quick tutorial on our latest features",
      platform: "tiktok",
      platformIcon: <TikTok size={16} />,
      image: "/lovable-uploads/bc113fd0-18d2-4e4c-8f34-5f7480463c85.png",
      metrics: {
        likes: 1423,
        comments: 256,
        shares: 184,
        reach: 12500
      },
      sponsored: true,
      sponsoredBy: "Sephora"
    }
  ];

  // Filter posts based on platform
  const filteredPosts = platform === 'all' ? 
    topPosts : 
    topPosts.filter(post => post.platform === platform);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Top Performing Posts</h2>
        <Button variant="ghost" className="gap-2">
          View All <ArrowRight size={16} />
        </Button>
      </div>
      
      {filteredPosts.length > 0 ? (
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="bg-white hover:shadow-md transition-shadow duration-300 flex-shrink-0 w-[280px]">
              <CardContent className="p-4 space-y-3">
                {post.image && (
                  <div className="h-32 w-full rounded-md overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.content}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                <div className="flex items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-yapp-deep-navy">{post.platformIcon}</span>
                    <span className="text-sm text-yapp-deep-navy/80">{post.platform}</span>
                  </div>
                  {post.sponsored && (
                    <Badge variant="outline" className="text-xs bg-yellow-50">
                      Sponsored
                    </Badge>
                  )}
                </div>
                
                <p className="text-sm line-clamp-2 text-yapp-deep-navy font-medium">{post.content}</p>
                
                {post.sponsored && (
                  <p className="text-xs text-yapp-text-navy-light">Sponsored by {post.sponsoredBy}</p>
                )}
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-yapp-deep-navy/70">
                    <span className="block font-medium text-yapp-deep-navy">{post.metrics.likes.toLocaleString()}</span>
                    Likes
                  </div>
                  <div className="text-yapp-deep-navy/70">
                    <span className="block font-medium text-yapp-deep-navy">{post.metrics.comments.toLocaleString()}</span>
                    Comments
                  </div>
                  <div className="text-yapp-deep-navy/70">
                    <span className="block font-medium text-yapp-deep-navy">{post.metrics.shares.toLocaleString()}</span>
                    Shares
                  </div>
                  <div className="text-yapp-deep-navy/70">
                    <span className="block font-medium text-yapp-deep-navy">{post.metrics.reach.toLocaleString()}</span>
                    Reach
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                  {post.platform === 'instagram' && (
                    <Button variant="outline" size="sm" className="shrink-0">
                      Repost
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center border rounded-md p-8 text-center">
          <p className="text-muted-foreground mb-2">No top performing posts found for this filter.</p>
          <Button variant="outline" size="sm">View all platforms</Button>
        </div>
      )}
    </div>
  );
};
