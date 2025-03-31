
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

const Queue = () => {
  const scheduledPosts = [
    { id: 1, title: "Summer Collection Launch", platform: "instagram", status: "scheduled", date: "Jun 15, 2023", time: "10:00 AM" },
    { id: 2, title: "Product Tutorial Video", platform: "youtube", status: "scheduled", date: "Jun 16, 2023", time: "2:30 PM" },
    { id: 3, title: "Industry News Update", platform: "twitter", status: "scheduled", date: "Jun 18, 2023", time: "9:00 AM" },
    { id: 4, title: "Customer Testimonial", platform: "facebook", status: "draft", date: "-", time: "-" },
    { id: 5, title: "Behind the Scenes", platform: "instagram", status: "scheduled", date: "Jun 20, 2023", time: "3:45 PM" },
    { id: 6, title: "Product Announcement", platform: "linkedin", status: "failed", date: "Jun 10, 2023", time: "11:00 AM" },
    { id: 7, title: "Weekly Tips and Tricks", platform: "tiktok", status: "published", date: "Jun 8, 2023", time: "5:00 PM" },
  ];

  const platformColors = {
    instagram: "bg-gradient-to-r from-purple-500 to-pink-500",
    youtube: "bg-red-500",
    twitter: "bg-blue-400",
    facebook: "bg-blue-600",
    linkedin: "bg-blue-700",
    tiktok: "bg-black",
  };

  const statusColors = {
    scheduled: "bg-blue-100 text-blue-800",
    draft: "bg-gray-100 text-gray-800",
    published: "bg-green-100 text-green-800",
    failed: "bg-red-100 text-red-800",
  };

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
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Checkbox id="platform" className="mr-2" />
                    <label htmlFor="platform">Platform</label>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Checkbox id="status" className="mr-2" />
                    <label htmlFor="status">Status</label>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Checkbox id="date" className="mr-2" />
                    <label htmlFor="date">Date Range</label>
                  </DropdownMenuItem>
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
            
            <TabsContent value="list">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">
                        <Checkbox />
                      </TableHead>
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
                          <ArrowDown className="h-4 w-4" />
                        </div>
                      </TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead className="w-12"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduledPosts.map((post) => (
                      <TableRow key={post.id} className="hover-scale">
                        <TableCell>
                          <Checkbox />
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
