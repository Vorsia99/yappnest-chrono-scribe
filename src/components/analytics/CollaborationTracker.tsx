
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Check, MoreHorizontal, Download, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface CollaborationTrackerProps {
  platform?: string;
}

interface Collaboration {
  id: number;
  brand: string;
  campaign: string;
  platform: string;
  type: string;
  date: string;
  performance: string;
  roi: string;
  status: 'Completed' | 'Pending Payment' | 'Active' | 'Failed';
}

export function CollaborationTracker({ platform = 'all' }: CollaborationTrackerProps) {
  const [selectedCollabs, setSelectedCollabs] = useState<number[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedCollab, setSelectedCollab] = useState<Collaboration | null>(null);
  
  const collaborations: Collaboration[] = [
    {
      id: 1,
      brand: "Nike",
      campaign: "Spring Collection",
      platform: "instagram",
      type: "Post",
      date: "Jun 5, 2023",
      performance: "12K reach, 5.5% engagement",
      roi: "$500",
      status: "Completed"
    },
    {
      id: 2,
      brand: "Sephora",
      campaign: "Beauty Tutorial",
      platform: "instagram",
      type: "Story",
      date: "Jun 10, 2023",
      performance: "6K views, 300 replies",
      roi: "$300",
      status: "Pending Payment"
    },
    {
      id: 3,
      brand: "Adidas",
      campaign: "Summer Launch",
      platform: "youtube",
      type: "Post",
      date: "Jun 15, 2023",
      performance: "8.2K views, 4.8% engagement",
      roi: "$650",
      status: "Active"
    },
    {
      id: 4,
      brand: "Apple",
      campaign: "Product Review",
      platform: "tiktok",
      type: "Post",
      date: "Jun 20, 2023",
      performance: "15K views, 10.2% engagement",
      roi: "$800",
      status: "Active"
    }
  ];
  
  // Filter collaborations based on selected platform
  const filteredCollaborations = platform === 'all' 
    ? collaborations 
    : collaborations.filter(collab => collab.platform === platform);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedCollabs(filteredCollaborations.map(collab => collab.id));
    } else {
      setSelectedCollabs([]);
    }
  };

  const handleSelectCollab = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedCollabs([...selectedCollabs, id]);
    } else {
      setSelectedCollabs(selectedCollabs.filter(collabId => collabId !== id));
    }
  };
  
  const handleViewDetails = (collab: Collaboration) => {
    setSelectedCollab(collab);
    setOpenDialog(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return "bg-green-100 text-green-800";
      case 'Pending Payment':
        return "bg-yellow-100 text-yellow-800";
      case 'Active':
        return "bg-blue-100 text-blue-800";
      case 'Failed':
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  const getPlatformName = (platformId: string) => {
    const platforms: Record<string, string> = {
      instagram: "Instagram",
      youtube: "YouTube",
      tiktok: "TikTok",
      x: "X",
      threads: "Threads",
      linkedin: "LinkedIn",
      pinterest: "Pinterest",
      facebook: "Facebook",
      bluesky: "Bluesky"
    };
    
    return platforms[platformId] || platformId;
  };

  return (
    <div className="space-y-4">
      {selectedCollabs.length > 0 && (
        <div className="flex items-center justify-between bg-blue-50 p-3 rounded-md">
          <span>{selectedCollabs.length} collaboration(s) selected</span>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-3 w-3" /> Export Report
            </Button>
            <Button variant="outline" size="sm" className="text-destructive">
              Mark as Paid
            </Button>
          </div>
        </div>
      )}
      
      <div className="rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="p-2 text-left w-[30px]">
                  <Checkbox 
                    checked={selectedCollabs.length === filteredCollaborations.length && filteredCollaborations.length > 0} 
                    onCheckedChange={handleSelectAll}
                  />
                </th>
                <th className="p-2 text-left">Brand</th>
                <th className="p-2 text-left">Campaign</th>
                <th className="p-2 text-left">Platform</th>
                <th className="p-2 text-left">Type</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Performance</th>
                <th className="p-2 text-left">ROI</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left w-[50px]"></th>
              </tr>
            </thead>
            <tbody>
              {filteredCollaborations.length > 0 ? (
                filteredCollaborations.map((collab) => (
                  <tr 
                    key={collab.id} 
                    className="border-t hover:bg-muted/20 transition-colors"
                  >
                    <td className="p-2">
                      <Checkbox 
                        checked={selectedCollabs.includes(collab.id)} 
                        onCheckedChange={(checked) => handleSelectCollab(collab.id, !!checked)}
                      />
                    </td>
                    <td className="p-2 font-medium">{collab.brand}</td>
                    <td className="p-2">{collab.campaign}</td>
                    <td className="p-2">{getPlatformName(collab.platform)}</td>
                    <td className="p-2">{collab.type}</td>
                    <td className="p-2">{collab.date}</td>
                    <td className="p-2">{collab.performance}</td>
                    <td className="p-2 font-medium">{collab.roi}</td>
                    <td className="p-2">
                      <Badge className={getStatusColor(collab.status)}>
                        {collab.status}
                      </Badge>
                    </td>
                    <td className="p-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleViewDetails(collab)}>
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" /> Download Report
                          </DropdownMenuItem>
                          {collab.status === 'Pending Payment' && (
                            <>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                <Check className="mr-2 h-4 w-4" /> Mark as Paid
                              </DropdownMenuItem>
                            </>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10} className="p-6 text-center text-muted-foreground">
                    No collaborations found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Collaboration Details</DialogTitle>
            <DialogDescription>
              Campaign details and performance metrics.
            </DialogDescription>
          </DialogHeader>
          {selectedCollab && (
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium mb-1">Brand</h4>
                  <p>{selectedCollab.brand}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Campaign</h4>
                  <p>{selectedCollab.campaign}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Platform</h4>
                  <p>{getPlatformName(selectedCollab.platform)}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Type</h4>
                  <p>{selectedCollab.type}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Date</h4>
                  <p>{selectedCollab.date}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-1">Status</h4>
                  <Badge className={getStatusColor(selectedCollab.status)}>
                    {selectedCollab.status}
                  </Badge>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-1">Performance</h4>
                <p className="text-muted-foreground">{selectedCollab.performance}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium mb-1">Return on Investment</h4>
                <p className="text-xl font-bold">{selectedCollab.roi}</p>
              </div>
              
              <div className="bg-muted/30 p-3 rounded-md">
                <h4 className="text-sm font-medium mb-2">Audience Demographics</h4>
                <p className="text-sm text-muted-foreground">60% Female, 50% 18-24, primarily interested in Fashion</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDialog(false)}>Close</Button>
            <Button>Download Report</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
