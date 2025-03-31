
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Download, LineChart, PieChart } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlatformStat } from "@/components/PlatformStat";

const Analytics = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Track performance across all your social platforms.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Platform Growth</CardTitle>
          <CardDescription>Follower growth across platforms over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-center justify-center border rounded-md bg-muted/40">
            <LineChart className="h-12 w-12 text-muted-foreground" />
            <span className="ml-2 text-muted-foreground">Growth chart will appear here</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <PlatformStat 
          platform="instagram"
          followers="18.2K"
          engagement="4.8%"
          growth="+120"
          posts="32"
        />
        <PlatformStat 
          platform="twitter"
          followers="12.4K"
          engagement="2.1%"
          growth="+86"
          posts="65"
        />
        <PlatformStat 
          platform="youtube"
          followers="8.5K"
          engagement="6.2%"
          growth="+45"
          posts="18"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Content Performance</CardTitle>
            <CardDescription>Performance by content type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center border rounded-md bg-muted/40">
              <BarChart className="h-12 w-12 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Performance chart will appear here</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Audience Demographics</CardTitle>
            <CardDescription>Age, location and interests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-center justify-center border rounded-md bg-muted/40">
              <PieChart className="h-12 w-12 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Demographics chart will appear here</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Content</CardTitle>
          <CardDescription>Your best content from the last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Platforms</TabsTrigger>
              <TabsTrigger value="instagram">Instagram</TabsTrigger>
              <TabsTrigger value="twitter">Twitter</TabsTrigger>
              <TabsTrigger value="youtube">YouTube</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="hover-scale shadow-soft">
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Content Preview</span>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                          Instagram
                        </Badge>
                        <span className="text-sm text-muted-foreground">Jun 5, 2023</span>
                      </div>
                      <p className="font-medium truncate">Product showcase post #{i}</p>
                      <div className="mt-2 flex justify-between text-sm">
                        <span>4.8K likes</span>
                        <span>120 comments</span>
                        <span>58 shares</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="instagram">
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Instagram top content will appear here</p>
              </div>
            </TabsContent>

            <TabsContent value="twitter">
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Twitter top content will appear here</p>
              </div>
            </TabsContent>

            <TabsContent value="youtube">
              <div className="h-[300px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">YouTube top content will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
