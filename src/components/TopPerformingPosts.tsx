
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Instagram, ArrowRight } from 'lucide-react';

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
}

export const TopPerformingPosts = () => {
  // Sample top performing posts data
  const topPosts: TopPostProps[] = [
    {
      content: "Our product launch is coming soon!",
      image: "/lovable-uploads/1f5dc3cd-0e25-4aa0-ba2f-889d901ac525.png",
      platform: "Instagram",
      platformIcon: <Instagram size={16} />,
      metrics: {
        likes: 423,
        comments: 56,
        shares: 28,
        reach: 3450
      }
    },
    {
      content: "Behind the scenes of our design process",
      image: "/lovable-uploads/14e1f6ac-5248-44df-a433-8eaa03333e2e.png",
      platform: "Instagram",
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
      platform: "Instagram",
      platformIcon: <Instagram size={16} />,
      metrics: {
        likes: 287,
        comments: 38,
        shares: 47,
        reach: 3120
      }
    }
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Top Performing Posts</h2>
        <Button variant="ghost" className="gap-2">
          View All <ArrowRight size={16} />
        </Button>
      </div>
      
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-none">
        {topPosts.map((post, index) => (
          <Card key={index} className="bg-white hover-scale flex-shrink-0 w-[280px] shadow-soft">
            <CardContent className="p-4 space-y-3">
              {post.image && (
                <div className="h-32 w-full rounded overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.content}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="flex items-center gap-1.5">
                <span className="text-yapp-deep-navy">{post.platformIcon}</span>
                <span className="text-sm text-yapp-deep-navy/80">{post.platform}</span>
              </div>
              
              <p className="text-sm line-clamp-2 text-yapp-deep-navy font-medium">{post.content}</p>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-yapp-deep-navy/70">
                  <span className="block font-medium text-yapp-deep-navy">{post.metrics.likes}</span>
                  Likes
                </div>
                <div className="text-yapp-deep-navy/70">
                  <span className="block font-medium text-yapp-deep-navy">{post.metrics.comments}</span>
                  Comments
                </div>
                <div className="text-yapp-deep-navy/70">
                  <span className="block font-medium text-yapp-deep-navy">{post.metrics.shares}</span>
                  Shares
                </div>
                <div className="text-yapp-deep-navy/70">
                  <span className="block font-medium text-yapp-deep-navy">{post.metrics.reach}</span>
                  Reach
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
