
import React from 'react';
import { Button } from "@/components/ui/button";
import { Edit2, Trash2 } from "lucide-react";

const Dashboard = () => {
  // Sample data for scheduled posts
  const scheduledPosts = [
    {
      id: 1,
      type: "image",
      content: "Forest in fog",
      image: "/lovable-uploads/1f5dc3cd-0e25-4aa0-ba2f-889d901ac525.png",
      date: "April 20, 2024",
      time: "10:00 am"
    },
    {
      id: 2,
      type: "image",
      content: "Misty mountains",
      image: "/lovable-uploads/14e1f6ac-5248-44df-a433-8eaa03333e2e.png",
      date: "April 18, 2024",
      time: "2:00 pm"
    },
    {
      id: 3,
      type: "text",
      content: "New video coming next week. Stay tuned!",
      date: "April 16, 2024",
      time: "9:00 am"
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-normal text-yapp-deep-navy">Dashboard</h1>

      <div className="pb-4 border-b">
        <div className="flex space-x-6 mb-6">
          <button className="text-yapp-deep-navy border-b-2 border-yapp-deep-navy pb-2 font-medium">
            All posts
          </button>
          <button className="text-yapp-deep-navy/60 pb-2">
            Facebook
          </button>
          <button className="text-yapp-deep-navy/60 pb-2">
            Twitter
          </button>
          <button className="text-yapp-deep-navy/60 pb-2">
            LinkedIn
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 pb-4 mb-4 border-b">
        <div className="font-medium text-yapp-deep-navy">Status</div>
        <div className="font-medium text-yapp-deep-navy">Content</div>
        <div className="font-medium text-yapp-deep-navy">Scheduled date</div>
        <div className="font-medium text-yapp-deep-navy">Actions</div>
      </div>

      <div className="space-y-8">
        {scheduledPosts.map((post) => (
          <div key={post.id} className="grid grid-cols-4 gap-4 items-center pb-6 border-b">
            <div className="text-yapp-deep-navy">Scheduled</div>
            <div className="flex items-center gap-4">
              {post.type === "image" ? (
                <>
                  <img 
                    src={post.image} 
                    alt={post.content}
                    className="w-32 h-20 object-cover rounded"
                  />
                </>
              ) : (
                <>
                  <div className="text-yapp-deep-navy">Text post</div>
                  <div className="text-yapp-deep-navy">
                    {post.content}
                    <div className="text-sm text-yapp-deep-navy/60 mt-1">Text post</div>
                  </div>
                </>
              )}
            </div>
            <div className="text-yapp-deep-navy">
              {post.date}
              <br />
              {post.time}
            </div>
            <div className="flex gap-4">
              <button className="text-yapp-deep-navy">
                <Edit2 size={20} />
              </button>
              <button className="text-yapp-deep-navy">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
