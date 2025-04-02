
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  MessageSquare, 
  MessageCircle, 
  AtSign, 
  Heart, 
  MoreHorizontal 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface EngagementItem {
  id: string;
  platform: string;
  username: string;
  avatar?: string;
  content: string;
  time: string;
  type: 'comment' | 'message' | 'mention';
  read: boolean;
}

const mockEngagementData: EngagementItem[] = [
  {
    id: '1',
    platform: 'Instagram',
    username: 'sarah_design',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: 'Love this content! Will you be posting more tips like this?',
    time: '5m ago',
    type: 'comment',
    read: false
  },
  {
    id: '2',
    platform: 'X',
    username: 'tech_mark',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: 'Just shared your post with my network. Great insights!',
    time: '12m ago',
    type: 'comment',
    read: false
  },
  {
    id: '3',
    platform: 'Instagram',
    username: 'jenny_marketing',
    content: 'Hi there! I\'d love to collaborate on a project. Could we discuss via DM?',
    time: '34m ago',
    type: 'message',
    read: true
  },
  {
    id: '4',
    platform: 'Facebook',
    username: 'alex_jones',
    avatar: 'https://randomuser.me/api/portraits/men/78.jpg',
    content: 'Can you provide more details about your services?',
    time: '1h ago',
    type: 'message',
    read: true
  },
  {
    id: '5',
    platform: 'LinkedIn',
    username: 'professional_kate',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    content: '@yappHQ Your latest article was so insightful! Would love to discuss further.',
    time: '3h ago',
    type: 'mention',
    read: true
  }
];

const Engagement = () => {
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState<EngagementItem[]>(mockEngagementData);
  
  const filteredItems = items.filter(item => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  const markAsRead = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, read: true } : item
    ));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'comment':
        return <MessageCircle className="h-4 w-4" />;
      case 'message':
        return <MessageSquare className="h-4 w-4" />;
      case 'mention':
        return <AtSign className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Engagement</h1>
        <p className="text-muted-foreground">
          Manage comments, direct messages, and mentions across all your connected platforms.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
            <TabsTrigger value="comment" onClick={() => setFilter("comment")}>Comments</TabsTrigger>
            <TabsTrigger value="message" onClick={() => setFilter("message")}>Messages</TabsTrigger>
            <TabsTrigger value="mention" onClick={() => setFilter("mention")}>Mentions</TabsTrigger>
          </TabsList>
          
          <Button variant="outline" size="sm">
            Mark all as read
          </Button>
        </div>

        <TabsContent value="all" className="mt-0">
          <Card>
            <CardContent className="p-0">
              <div className="divide-y">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <div key={item.id} className={`p-4 flex items-start gap-3 ${!item.read ? 'bg-muted/30' : ''}`}>
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={item.avatar} />
                        <AvatarFallback>{item.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">@{item.username}</span>
                            <Badge variant="outline" className="text-xs flex items-center gap-1">
                              {getTypeIcon(item.type)}
                              <span className="capitalize">{item.type}</span>
                            </Badge>
                            <Badge variant="secondary" className="text-xs">{item.platform}</Badge>
                          </div>
                          <span className="text-xs text-muted-foreground">{item.time}</span>
                        </div>
                        
                        <p className="text-sm">{item.content}</p>
                        
                        <div className="flex items-center gap-2 pt-1">
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            Reply
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <Heart className="h-4 w-4 mr-1" /> Like
                          </Button>
                          {!item.read && (
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-8 px-2"
                              onClick={() => markAsRead(item.id)}
                            >
                              Mark as read
                            </Button>
                          )}
                          <div className="ml-auto">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Hide</DropdownMenuItem>
                                <DropdownMenuItem>Report</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center">
                    <p className="text-muted-foreground">No items found.</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="comment" className="mt-0">
          {/* The same layout will be used for filtered items */}
          <Card>
            <CardContent className="p-0">
              {/* Content for comments tab */}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="message" className="mt-0">
          {/* Content for messages tab */}
          <Card>
            <CardContent className="p-0">
              {/* Content for messages tab */}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="mention" className="mt-0">
          {/* Content for mentions tab */}
          <Card>
            <CardContent className="p-0">
              {/* Content for mentions tab */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Engagement;
