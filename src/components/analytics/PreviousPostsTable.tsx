
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Calendar, 
  Instagram, 
  Twitter, 
  Facebook, 
  Linkedin,
  BarChart3,
  Eye,
  Heart,
  MessageCircle,
  Bookmark,
  Share2,
  Download
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Interface for post data
interface Post {
  id: string;
  title: string;
  caption: string;
  datePosted: string;
  platform: "instagram" | "twitter" | "facebook" | "linkedin";
  reach: number;
  impressions: number;
  engagement: number;
  likes: number;
  comments: number;
  saves: number;
  shares: number;
  imageUrl?: string;
  postUrl: string;
}

// Mock data for previous posts
const mockPreviousPosts: Post[] = [
  {
    id: "p1",
    title: "Summer Collection Launch",
    caption: "Introducing our new summer collection with breathtaking designs #SummerVibes #NewCollection",
    datePosted: "2023-06-15",
    platform: "instagram",
    reach: 15420,
    impressions: 20150,
    engagement: 4.8,
    likes: 1250,
    comments: 89,
    saves: 32,
    shares: 45,
    imageUrl: "/lovable-uploads/1f5dc3cd-0e25-4aa0-ba2f-889d901ac525.png",
    postUrl: "https://instagram.com/post/123"
  },
  {
    id: "p2",
    title: "Product Feature: Mountain Mist",
    caption: "Dive into the freshness of our Mountain Mist collection, now available online and in stores! #MountainMist",
    datePosted: "2023-07-02",
    platform: "facebook",
    reach: 8950,
    impressions: 12300,
    engagement: 3.2,
    likes: 450,
    comments: 32,
    saves: 12,
    shares: 28,
    imageUrl: "/lovable-uploads/14e1f6ac-5248-44df-a433-8eaa03333e2e.png",
    postUrl: "https://facebook.com/post/456"
  },
  {
    id: "p3",
    title: "Industry Insights",
    caption: "Check out our latest blog post on emerging trends in the industry. Link in bio!",
    datePosted: "2023-07-25",
    platform: "linkedin",
    reach: 6320,
    impressions: 7840,
    engagement: 5.6,
    likes: 520,
    comments: 47,
    saves: 38,
    shares: 62,
    postUrl: "https://linkedin.com/post/789"
  },
  {
    id: "p4",
    title: "Quick Update",
    caption: "We're working on something exciting! Stay tuned for our announcement next week. #ComingSoon",
    datePosted: "2023-08-10",
    platform: "twitter",
    reach: 4280,
    impressions: 5690,
    engagement: 2.9,
    likes: 230,
    comments: 15,
    saves: 0,
    shares: 42,
    postUrl: "https://twitter.com/post/101112"
  },
  {
    id: "p5",
    title: "Behind the Scenes",
    caption: "Take a peek behind the scenes at our latest photoshoot! #BehindTheScenes #TeamWork",
    datePosted: "2023-08-18",
    platform: "instagram",
    reach: 12840,
    impressions: 15740,
    engagement: 5.2,
    likes: 1120,
    comments: 78,
    saves: 45,
    shares: 36,
    imageUrl: "/lovable-uploads/3911b980-5e26-4666-8fac-1aaabccf13e8.png",
    postUrl: "https://instagram.com/post/131415"
  }
];

interface PreviousPostsTableProps {
  limit?: number;
}

export function PreviousPostsTable({ limit }: PreviousPostsTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [platformFilter, setPlatformFilter] = useState<string>("all");
  const [sortField, setSortField] = useState<keyof Post>("datePosted");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [isLoading, setIsLoading] = useState(false);
  
  // Filter and sort posts
  const filteredPosts = mockPreviousPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.caption.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPlatform = platformFilter === "all" || post.platform === platformFilter;
      return matchesSearch && matchesPlatform;
    })
    .sort((a, b) => {
      if (sortField === "datePosted") {
        return sortDirection === "asc" 
          ? new Date(a[sortField]).getTime() - new Date(b[sortField]).getTime()
          : new Date(b[sortField]).getTime() - new Date(a[sortField]).getTime();
      }
      
      if (typeof a[sortField] === 'number' && typeof b[sortField] === 'number') {
        return sortDirection === "asc" 
          ? (a[sortField] as number) - (b[sortField] as number)
          : (b[sortField] as number) - (a[sortField] as number);
      }
      
      // Default string comparison
      return sortDirection === "asc"
        ? String(a[sortField]).localeCompare(String(b[sortField]))
        : String(b[sortField]).localeCompare(String(a[sortField]));
    })
    .slice(0, limit);

  const handleSort = (field: keyof Post) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  // Function to render the platform icon
  const renderPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram":
        return <Instagram size={16} className="text-pink-600" />;
      case "twitter":
        return <Twitter size={16} className="text-blue-400" />;
      case "facebook":
        return <Facebook size={16} className="text-blue-600" />;
      case "linkedin":
        return <Linkedin size={16} className="text-blue-700" />;
      default:
        return null;
    }
  };
  
  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  const handleExportData = () => {
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      
      // Here you would normally trigger a CSV download or similar
      alert("Data export started! Your download will begin shortly.");
    }, 1500);
  };
  
  // If there are no posts after filtering
  if (filteredPosts.length === 0) {
    return (
      <Card className="w-full">
        <CardHeader className="text-left">
          <CardTitle className="text-xl font-medium">Previous Posts</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-10">
          <div className="text-center">
            <BarChart3 size={36} className="text-gray-400 mx-auto mb-3" />
            <h3 className="text-lg font-medium">No posts found</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-4">Try adjusting your filters or search terms</p>
            <Button onClick={() => { setSearchTerm(""); setPlatformFilter("all"); }}>
              Clear Filters
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader className="text-left">
        <CardTitle className="text-xl font-medium">Previous Posts</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-4 flex flex-col sm:flex-row items-start gap-2 justify-between border-b">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search posts..."
              className="pl-8 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <Select value={platformFilter} onValueChange={setPlatformFilter}>
              <SelectTrigger className="w-full sm:w-36">
                <SelectValue placeholder="All platforms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All platforms</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="linkedin">LinkedIn</SelectItem>
              </SelectContent>
            </Select>
            
            <Button 
              variant="outline" 
              className="gap-2"
              onClick={handleExportData}
              disabled={isLoading}
            >
              {isLoading ? "Exporting..." : "Export Data"}
              {!isLoading && <Download size={16} />}
            </Button>
          </div>
        </div>
        
        <div className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[250px] text-left cursor-pointer" onClick={() => handleSort("title")}>
                  <div className="flex items-center gap-2">
                    Post 
                    {sortField === "title" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </div>
                </TableHead>
                <TableHead className="w-[100px] text-left cursor-pointer" onClick={() => handleSort("platform")}>
                  <div className="flex items-center gap-2">
                    Platform
                    {sortField === "platform" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </div>
                </TableHead>
                <TableHead className="text-left cursor-pointer" onClick={() => handleSort("datePosted")}>
                  <div className="flex items-center gap-2">
                    Date Posted
                    {sortField === "datePosted" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </div>
                </TableHead>
                <TableHead className="text-left cursor-pointer" onClick={() => handleSort("reach")}>
                  <div className="flex items-center gap-2">
                    <Eye size={16} />
                    Reach
                    {sortField === "reach" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </div>
                </TableHead>
                <TableHead className="text-left cursor-pointer" onClick={() => handleSort("engagement")}>
                  <div className="flex items-center gap-2">
                    Engagement
                    {sortField === "engagement" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </div>
                </TableHead>
                <TableHead className="text-left cursor-pointer" onClick={() => handleSort("likes")}>
                  <div className="flex items-center gap-2">
                    <Heart size={16} />
                    {sortField === "likes" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </div>
                </TableHead>
                <TableHead className="text-left cursor-pointer" onClick={() => handleSort("comments")}>
                  <div className="flex items-center gap-2">
                    <MessageCircle size={16} />
                    {sortField === "comments" && (
                      sortDirection === "asc" ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                    )}
                  </div>
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPosts.map((post) => (
                <TableRow key={post.id} className="group">
                  <TableCell className="font-medium text-left">
                    <div className="flex items-center gap-3">
                      {post.imageUrl && (
                        <div className="h-10 w-10 rounded overflow-hidden flex-shrink-0">
                          <img src={post.imageUrl} alt={post.title} className="h-full w-full object-cover" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-sm line-clamp-1">{post.title}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{post.caption}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-left">
                    <div className="flex items-center gap-1">
                      {renderPlatformIcon(post.platform)}
                      <span className="text-xs capitalize">{post.platform}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-left">
                    <div className="flex items-center gap-1 text-sm">
                      <Calendar size={14} className="text-muted-foreground" />
                      {formatDate(post.datePosted)}
                    </div>
                  </TableCell>
                  <TableCell className="text-left">{post.reach.toLocaleString()}</TableCell>
                  <TableCell className="text-left">{post.engagement}%</TableCell>
                  <TableCell className="text-left">{post.likes.toLocaleString()}</TableCell>
                  <TableCell className="text-left">{post.comments.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => window.open(post.postUrl, '_blank')}
                      >
                        <Eye size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="h-8 w-8 p-0"
                        onClick={() => {/* Detailed analytics */}}
                      >
                        <BarChart3 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
