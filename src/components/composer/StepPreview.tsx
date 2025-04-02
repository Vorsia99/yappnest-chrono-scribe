
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, Image, Edit } from "lucide-react";

export const StepPreview = ({ formData, updateFormData, goToStep }) => {
  const getPlatformIcon = (platformId) => {
    switch(platformId) {
      case 'facebook': return <Facebook className="h-6 w-6" />;
      case 'instagram': return <Instagram className="h-6 w-6" />;
      case 'twitter': return <Twitter className="h-6 w-6" />;
      case 'youtube': return <Youtube className="h-6 w-6" />;
      default: return null;
    }
  };

  const getPlatformName = (platformId) => {
    switch(platformId) {
      case 'facebook': return 'Facebook';
      case 'instagram': return 'Instagram';
      case 'twitter': return 'Twitter';
      case 'youtube': return 'YouTube';
      default: return platformId;
    }
  };

  // If no platforms were selected, show a message
  if (!formData.selectedPlatforms || formData.selectedPlatforms.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium mb-2">No platforms selected</h3>
        <p className="text-muted-foreground mb-4">Please go back and select at least one platform.</p>
        <Button variant="outline" onClick={() => goToStep(2)}>Go Back to Platform Selection</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Preview Your Posts</h2>
        <p className="text-muted-foreground mb-6">This is how your posts will look on each platform</p>
      </div>

      <Tabs defaultValue={formData.selectedPlatforms[0]} className="w-full">
        <TabsList className="mb-4">
          {formData.selectedPlatforms.map(platformId => (
            <TabsTrigger key={platformId} value={platformId} className="flex items-center gap-2">
              {getPlatformIcon(platformId)}
              <span>{getPlatformName(platformId)}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {formData.selectedPlatforms.map(platformId => (
          <TabsContent key={platformId} value={platformId} className="mt-0">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                      {getPlatformIcon(platformId)}
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">{getPlatformName(platformId)}</p>
                      <p className="text-sm text-muted-foreground">@youraccount</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => goToStep(3)} className="flex items-center gap-1">
                    <Edit className="h-4 w-4" /> Edit
                  </Button>
                </div>
                
                <div className="mb-4">
                  {formData.mediaType && (
                    <div className="aspect-video bg-muted rounded-md overflow-hidden mb-4 flex items-center justify-center">
                      <Image className="h-12 w-12 text-muted-foreground" />
                    </div>
                  )}
                  <p className="whitespace-pre-line">
                    {formData.captions && (formData.captions[platformId] || formData.captions.global || "No caption added yet.")}
                  </p>
                  {formData.hashtags && formData.hashtags[platformId] && (
                    <p className="text-blue-500 mt-2">
                      {formData.hashtags[platformId].split(' ').map((tag, i) => (
                        <span key={i} className="mr-1">{tag}</span>
                      ))}
                    </p>
                  )}
                </div>

                <div className="border-t pt-4 mt-4">
                  <p className="text-sm text-muted-foreground">Post Preview</p>
                  <div className="flex items-center mt-2 gap-2">
                    <div className="h-5 w-20 bg-muted rounded"></div>
                    <div className="h-5 w-16 bg-muted rounded"></div>
                    <div className="h-5 w-24 bg-muted rounded"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
