
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDown, ArrowUp, Calendar, ChevronDown, Edit, Filter, MoreHorizontal, Pencil, Search, Trash2, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { UpcomingPostCard } from "@/components/UpcomingPostCard";
import { useState } from "react";

const Queue = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [contentTypeFilter, setContentTypeFilter] = useState("all");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("date-desc");

  const scheduledPosts = [
    { id: 1, title: "Summer Collection Launch", type: "post", platform: "instagram", status: "scheduled", date: "Jun 15, 2023", time: "10:00 AM" },
    { id: 2, title: "Product Tutorial Video", type: "post", platform: "youtube", status: "scheduled", date: "Jun 16, 2023", time: "2:30 PM" },
    { id: 3, title: "Industry News Update", type: "post", platform: "twitter", status: "scheduled", date: "Jun 18, 2023", time: "9:00 AM" },
    { id: 4, title: "Customer Testimonial", type: "post", platform: "facebook", status: "draft", date: "-", time: "-" },
    { id: 5, title: "Behind the Scenes", type: "story", platform: "instagram", status: "scheduled", date: "Jun 20, 2023", time: "3:45 PM" },
    { id: 6, title: "Product Announcement", type: "post", platform: "linkedin", status: "failed", date: "Jun 10, 2023", time: "11:00 AM" },
    { id: 7, title: "Weekly Tips and Tricks", type: "story", platform: "tiktok", status: "published", date: "Jun 8, 2023", time: "5:00 PM" },
    { id: 8, title: "Company Update", type: "post", platform: "instagram", status: "scheduled", date: "Jun 22, 2023", time: "1:15 PM" },
    { id: 9, title: "Holiday Promotion", type: "story", platform: "facebook", status: "scheduled", date: "Jun 25, 2023", time: "11:30 AM" },
  ];

  const platformColors = {
    instagram: "bg-gradient-to-r from-purple-500 to-pink-500",
    youtube: "bg-red-500",
    twitter: "bg-blue-400",
    facebook: "bg-blue-600",
    linkedin: "bg-blue-700",
    tiktok: "bg-black",
    pinterest: "bg-red-600",
  };

  const typeIcons = {
    post: "grid",
    story: "circle-plus",
  };

  const typeColors = {
    post: "bg-green-100 text-green-800",
    story: "bg-pink-100 text-pink-800",
  };

  const statusColors = {
    scheduled: "bg-blue-100 text-blue-800",
    draft: "bg-gray-100 text-gray-800",
    published: "bg-green-100 text-green-800",
    failed: "bg-red-100 text-red-800",
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(filteredPosts.map(post => post.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== id));
    }
  };

  // Filter posts based on selected filters
  const filteredPosts = scheduledPosts.filter(post => {
    const matchesContentType = contentTypeFilter === "all" || post.type === contentTypeFilter;
    const matchesPlatform = platformFilter === "all" || post.platform === platformFilter;
    const matchesStatus = statusFilter === "all" || post.status === statusFilter;
    return matchesContentType && matchesPlatform && matchesStatus;
  });

  // Sort posts based on selected sort option
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case "date-asc":
        return a.date === "-" ? 1 : b.date === "-" ? -1 : a.date.localeCompare(b.date);
      case "date-desc":
        return a.date === "-" ? 1 : b.date === "-" ? -1 : b.date.localeCompare(a.date);
      case "platform":
        return a.platform.localeCompare(b.platform);
      case "status":
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Queue</h1>
          <p className="text-muted-foreground">Manage your scheduled and drafted content.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" /> View Calendar
          </Button>
          <Button className="bg-yapp-misty-blue hover:bg-yapp-misty-blue/90">
            <Pencil className="mr-2 h-4 w-4" /> Create Post
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <CardTitle>Content Queue</CardTitle>
            <div className="flex space-x-2 w-full md:w-auto">
              <div className="relative w-full md:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-8" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  
                  <div className="p-2">
                    <p className="text-sm font-medium mb-1">Content Type</p>
                    <Select value={contentTypeFilter} onValueChange={setContentTypeFilter}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="post">Post</SelectItem>
                        <SelectItem value="story">Story</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="p-2">
                    <p className="text-sm font-medium mb-1">Platform</p>
                    <Select value={platformFilter} onValueChange={setPlatformFilter}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Platforms" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Platforms</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                        <SelectItem value="tiktok">TikTok</SelectItem>
                        <SelectItem value="pinterest">Pinterest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="p-2">
                    <p className="text-sm font-medium mb-1">Status</p>
                    <Select value={statusFilter} onValueChange={setStatusFilter}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="All Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="scheduled">Scheduled</SelectItem>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="failed">Failed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <DropdownMenuSeparator />
                  
                  <div className="p-2">
                    <p className="text-sm font-medium mb-1">Sort by</p>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Date (Newest first)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="date-desc">Date (Newest first)</SelectItem>
                        <SelectItem value="date-asc">Date (Oldest first)</SelectItem>
                        <SelectItem value="platform">Platform</SelectItem>
                        <SelectItem value="status">Status</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <DropdownMenuSeparator />
                  
                  <div className="p-2 flex justify-end">
                    <Button variant="outline" size="sm" onClick={() => {
                      setContentTypeFilter("all");
                      setPlatformFilter("all");
                      setStatusFilter("all");
                      setSortBy("date-desc");
                    }}>
                      Reset Filters
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="list" className="space-y-4">
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            </TabsList>
            
            <TabsContent value="list" className="space-y-4">
              {selectedItems.length > 0 && (
                <div className="flex items-center justify-between bg-blue-50 p-3 rounded-md">
                  <span>{selectedItems.length} item(s) selected</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Calendar className="mr-2 h-3 w-3" /> Reschedule
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-3 w-3" /> Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      <Trash2 className="mr-2 h-3 w-3" /> Delete
                    </Button>
                  </div>
                </div>
              )}
              
              {sortedPosts.length > 0 ? (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">
                          <Checkbox 
                            checked={selectedItems.length === filteredPosts.length && filteredPosts.length > 0} 
                            onCheckedChange={handleSelectAll}
                          />
                        </TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Platform</TableHead>
                        <TableHead>
                          <div className="flex items-center space-x-1">
                            <span>Status</span>
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>
                          <div className="flex items-center space-x-1">
                            <span>Date</span>
                            {sortBy === "date-desc" ? (
                              <ArrowDown className="h-4 w-4" />
                            ) : sortBy === "date-asc" ? (
                              <ArrowUp className="h-4 w-4" />
                            ) : null}
                          </div>
                        </TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead className="w-12"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedPosts.map((post) => (
                        <TableRow key={post.id} className="hover-scale">
                          <TableCell>
                            <Checkbox 
                              checked={selectedItems.includes(post.id)} 
                              onCheckedChange={(checked) => handleSelectItem(post.id, !!checked)}
                            />
                          </TableCell>
                          <TableCell>
                            <HoverCard>
                              <HoverCardTrigger asChild>
                                <Badge className={`${(typeColors as any)[post.type]} cursor-pointer`}>
                                  {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                                </Badge>
                              </HoverCardTrigger>
                              <HoverCardContent className="w-80">
                                <UpcomingPostCard 
                                  title={post.title}
                                  platform={post.platform as any}
                                  scheduledFor={`${post.date} at ${post.time}`}
                                />
                              </HoverCardContent>
                            </HoverCard>
                          </TableCell>
                          <TableCell>
                            <div className="font-medium">{post.title}</div>
                          </TableCell>
                          <TableCell>
                            <Badge className={`${(platformColors as any)[post.platform]} text-white border-0`}>
                              {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className={`${(statusColors as any)[post.status]}`}>
                              {post.status.charAt(0).toUpperCase() + post.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>{post.date}</TableCell>
                          <TableCell>{post.time}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" /> Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Calendar className="mr-2 h-4 w-4" /> Reschedule
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center border rounded-md p-8 text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mb-3" />
                  <h3 className="text-lg font-medium mb-1">No content found</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    No scheduled content matches your filters.
                  </p>
                  <Button onClick={() => {
                    setContentTypeFilter("all");
                    setPlatformFilter("all");
                    setStatusFilter("all");
                  }}>
                    Reset Filters
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="calendar">
              <div className="h-[500px] flex items-center justify-center border rounded-md">
                <div className="text-center">
                  <Calendar className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">Calendar View</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Calendar view will be shown here
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Queue;
