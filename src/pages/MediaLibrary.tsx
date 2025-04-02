
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Search, 
  Upload, 
  FolderPlus, 
  Grid, 
  List, 
  Image as ImageIcon, 
  File, 
  Video,
  Music,
  MoreHorizontal,
  Download,
  Star,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sample images for demonstration
const imageItems = [
  { id: 1, name: "Campaign Banner.png", type: "image", size: "1.2 MB", modified: "2023-08-15", tags: ["marketing", "banner"], favorite: false },
  { id: 5, name: "Summer Campaign.png", type: "image", size: "0.9 MB", modified: "2023-08-18", tags: ["marketing", "summer"], favorite: true },
  { id: 8, name: "Team Photo.jpg", type: "image", size: "3.2 MB", modified: "2023-07-20", tags: ["team"], favorite: false },
  { id: 9, name: "Product Launch Cover.jpg", type: "image", size: "2.8 MB", modified: "2023-08-22", tags: ["product", "launch"], favorite: false },
  { id: 10, name: "Office Party.jpg", type: "image", size: "4.1 MB", modified: "2023-07-15", tags: ["team", "event"], favorite: true },
  { id: 11, name: "Logo Design Final.png", type: "image", size: "0.6 MB", modified: "2023-06-30", tags: ["branding", "logo"], favorite: false },
];

// Sample videos for demonstration
const videoItems = [
  { id: 2, name: "Product Video.mp4", type: "video", size: "8.5 MB", modified: "2023-08-10", tags: ["product"], favorite: false },
  { id: 12, name: "Customer Testimonial.mp4", type: "video", size: "12.3 MB", modified: "2023-08-05", tags: ["testimonial", "customer"], favorite: true },
  { id: 13, name: "How-To Tutorial.mp4", type: "video", size: "15.7 MB", modified: "2023-07-28", tags: ["tutorial", "how-to"], favorite: false },
  { id: 14, name: "Company Overview.mp4", type: "video", size: "22.4 MB", modified: "2023-06-15", tags: ["company", "overview"], favorite: false },
];

// Sample templates for demonstration
const templateItems = [
  { id: 3, name: "Social Template 1.psd", type: "template", size: "3.7 MB", modified: "2023-08-05", tags: ["social", "template"], favorite: true },
  { id: 7, name: "Instagram Story Template.psd", type: "template", size: "2.8 MB", modified: "2023-08-12", tags: ["social", "instagram"], favorite: false },
  { id: 15, name: "Newsletter Template.psd", type: "template", size: "4.2 MB", modified: "2023-07-25", tags: ["email", "newsletter"], favorite: false },
  { id: 16, name: "Social Media Calendar.xlsx", type: "template", size: "1.5 MB", modified: "2023-08-01", tags: ["social", "calendar"], favorite: true },
];

// Sample documents and other files
const otherItems = [
  { id: 4, name: "Brand Guidelines.pdf", type: "document", size: "2.1 MB", modified: "2023-07-28", tags: ["brand"], favorite: false },
  { id: 6, name: "Company Podcast.mp3", type: "audio", size: "5.3 MB", modified: "2023-08-01", tags: ["podcast"], favorite: false },
  { id: 17, name: "Q3 Marketing Plan.docx", type: "document", size: "1.8 MB", modified: "2023-08-20", tags: ["marketing", "plan"], favorite: true },
  { id: 18, name: "Customer Survey Results.csv", type: "data", size: "0.7 MB", modified: "2023-07-10", tags: ["customer", "data"], favorite: false },
];

// Combine all items for the "All Files" view
const allMediaItems = [...imageItems, ...videoItems, ...templateItems, ...otherItems];

// Recently modified items (last 7 days)
const getRecentItems = () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  return allMediaItems
    .filter(item => {
      const modifiedDate = new Date(item.modified);
      return modifiedDate >= sevenDaysAgo;
    })
    .sort((a, b) => new Date(b.modified).getTime() - new Date(a.modified).getTime());
};

// Favorite items
const favoriteItems = allMediaItems.filter(item => item.favorite);

// Sample folders for demonstration
const folders = [
  { id: 1, name: "Images", count: 45 },
  { id: 2, name: "Videos", count: 12 },
  { id: 3, name: "Templates", count: 23 },
  { id: 4, name: "Documents", count: 8 },
  { id: 5, name: "Audio", count: 5 },
  { id: 6, name: "Brand Assets", count: 17 },
  { id: 7, name: "Campaigns", count: 9 },
  { id: 8, name: "Social Media", count: 28 },
];

export default function MediaLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("all");
  
  // Determine which items to display based on the active tab
  const getTabItems = () => {
    switch (activeTab) {
      case "images":
        return imageItems;
      case "videos":
        return videoItems;
      case "templates":
        return templateItems;
      case "recent":
        return getRecentItems();
      case "favorites":
        return favoriteItems;
      default:
        return allMediaItems;
    }
  };
  
  // Filter media items based on search query
  const filteredMedia = getTabItems().filter(item => {
    const matchesSearch = searchQuery === "" || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesSearch;
  });

  // Function to render the appropriate icon based on file type
  const renderFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-6 w-6 text-blue-500" />;
      case "video":
        return <Video className="h-6 w-6 text-purple-500" />;
      case "template":
        return <File className="h-6 w-6 text-orange-500" />;
      case "document":
        return <File className="h-6 w-6 text-green-500" />;
      case "audio":
        return <Music className="h-6 w-6 text-red-500" />;
      case "data":
        return <File className="h-6 w-6 text-teal-500" />;
      default:
        return <File className="h-6 w-6 text-gray-500" />;
    }
  };

  // Function to render media content for each tab
  const renderMediaContent = () => {
    return (
      <>
        {/* Breadcrumb navigation */}
        <div className="flex items-center text-sm mb-4">
          <Button variant="link" className="p-0 h-auto" onClick={() => setCurrentFolder(null)}>
            Media Library
          </Button>
          {currentFolder && (
            <>
              <span className="mx-2">/</span>
              <span className="font-medium">{currentFolder}</span>
            </>
          )}
        </div>
        
        {/* Folders section - only show if we're at root level and not in recent or favorites tabs */}
        {!currentFolder && 
         activeTab !== "recent" && 
         activeTab !== "favorites" && (
          <div className="mb-6">
            <h2 className="text-lg font-medium mb-3">Folders</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {folders.map((folder) => (
                <Card 
                  key={folder.id} 
                  className="cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => setCurrentFolder(folder.name)}
                >
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="bg-muted rounded-md p-2">
                      <FolderPlus className="h-6 w-6 text-yapp-misty-blue" />
                    </div>
                    <div>
                      <p className="font-medium">{folder.name}</p>
                      <p className="text-xs text-muted-foreground">{folder.count} items</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {/* Files section */}
        <div>
          <h2 className="text-lg font-medium mb-3">
            {currentFolder ? `Files in ${currentFolder}` : 
             activeTab === "recent" ? 'Recently Modified Files' :
             activeTab === "favorites" ? 'Favorite Files' :
             activeTab === "images" ? 'Images' :
             activeTab === "videos" ? 'Videos' :
             activeTab === "templates" ? 'Templates' :
             'All Files'}
          </h2>
          
          {filteredMedia.length === 0 ? (
            <div className="text-center py-20 border rounded-md bg-muted/20">
              <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
                <File className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="font-medium">No files found</h3>
              <p className="text-sm text-muted-foreground">Try adjusting your search or upload a new file.</p>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {filteredMedia.map((item) => (
                <Card key={item.id} className="cursor-pointer hover:bg-accent/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-muted flex items-center justify-center relative">
                      {renderFileIcon(item.type)}
                      {item.favorite && (
                        <div className="absolute top-2 right-2">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        </div>
                      )}
                    </div>
                    <div className="p-3">
                      <p className="font-medium text-sm truncate" title={item.name}>{item.name}</p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-xs text-muted-foreground">{item.size}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {item.modified}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Modified</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMedia.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium flex items-center gap-2">
                        {renderFileIcon(item.type)}
                        <span className="flex items-center gap-2">
                          {item.name}
                          {item.favorite && <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />}
                        </span>
                      </TableCell>
                      <TableCell className="capitalize">{item.type}</TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell>{item.modified}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Media Library</h1>
          <p className="text-muted-foreground">Organize and manage your media assets and templates.</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <FolderPlus className="mr-2 h-4 w-4" />
            New Folder
          </Button>
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Files
          </Button>
        </div>
      </div>

      {/* Search and view controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search files, folders or tags..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
            className="h-9 w-9"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
            className="h-9 w-9"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main content area */}
      <Tabs 
        defaultValue="all" 
        className="w-full" 
        value={activeTab}
        onValueChange={(value) => {
          setActiveTab(value);
          setCurrentFolder(null); // Reset folder when switching tabs
        }}
      >
        <TabsList>
          <TabsTrigger value="all">All Files</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-4">
          {renderMediaContent()}
        </TabsContent>
        
        <TabsContent value="images" className="space-y-4">
          {renderMediaContent()}
        </TabsContent>
        
        <TabsContent value="videos" className="space-y-4">
          {renderMediaContent()}
        </TabsContent>
        
        <TabsContent value="templates" className="space-y-4">
          {renderMediaContent()}
        </TabsContent>
        
        <TabsContent value="recent" className="space-y-4">
          {renderMediaContent()}
        </TabsContent>
        
        <TabsContent value="favorites" className="space-y-4">
          {renderMediaContent()}
        </TabsContent>
      </Tabs>
      
      {/* Cloud storage integration section */}
      <Card className="mt-6">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-lg font-medium">Cloud Storage</h2>
              <p className="text-sm text-muted-foreground">Connect to your favorite cloud storage services</p>
            </div>
            <Button>Connect Storage</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <Card className={cn("cursor-pointer border-2 border-dashed hover:border-primary/50", "border-transparent")}>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium">Google Drive</p>
                <p className="text-xs text-muted-foreground">Connect account</p>
              </CardContent>
            </Card>
            <Card className={cn("cursor-pointer border-2 border-dashed hover:border-primary/50", "border-transparent")}>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
                  <Upload className="h-6 w-6 text-blue-500" />
                </div>
                <p className="font-medium">Dropbox</p>
                <p className="text-xs text-muted-foreground">Connect account</p>
              </CardContent>
            </Card>
            <Card className={cn("cursor-pointer border-2 border-dashed hover:border-primary/50", "border-transparent")}>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-3">
                  <Upload className="h-6 w-6 text-green-500" />
                </div>
                <p className="font-medium">OneDrive</p>
                <p className="text-xs text-muted-foreground">Connect account</p>
              </CardContent>
            </Card>
            <Card className={cn("cursor-pointer border-2 border-dashed hover:border-primary/50", "border-transparent")}>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center mb-3">
                  <FolderPlus className="h-6 w-6 text-yellow-500" />
                </div>
                <p className="font-medium">Add Custom</p>
                <p className="text-xs text-muted-foreground">Other storage</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
