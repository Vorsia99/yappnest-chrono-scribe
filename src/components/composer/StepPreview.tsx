
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Instagram, X, Facebook, Youtube, MessageCircle, Image, Pencil } from "lucide-react";

interface StepPreviewProps {
  formData: any;
  updateFormData: (data: any) => void;
  goToStep: (step: number) => void;
}

export const StepPreview = ({ formData, updateFormData, goToStep }: StepPreviewProps) => {
  const [activeTab, setActiveTab] = useState("instagram");
  
  const platforms = [
    { id: "instagram", name: "Instagram", icon: Instagram },
    { id: "x", name: "X", icon: X },
    { id: "facebook", name: "Facebook", icon: Facebook },
    { id: "youtube", name: "YouTube", icon: Youtube },
    { id: "tiktok", name: "TikTok", icon: MessageCircle }
  ];

  const handleEditContent = () => {
    goToStep(3);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-2">Preview and edit</h2>
        <p className="text-muted-foreground">See how your post will appear on each platform</p>
      </div>

      <Tabs 
        defaultValue="instagram" 
        className="w-full"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="w-full justify-start mb-4 overflow-auto">
          {platforms.map(platform => (
            <TabsTrigger key={platform.id} value={platform.id} className="gap-1">
              <platform.icon className="h-4 w-4" /> {platform.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {platforms.map(platform => (
          <TabsContent 
            key={platform.id} 
            value={platform.id}
            className="animate-fade-in"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <h3 className="text-lg font-medium mb-4">Preview</h3>
                
                {platform.id === "instagram" && (
                  <div className="bg-white rounded-lg shadow-md max-w-sm mx-auto p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="text-sm font-bold">your_account</p>
                      </div>
                    </div>
                    <div className="bg-gray-200 h-72 rounded flex items-center justify-center">
                      <Image className="h-12 w-12 text-gray-400" />
                    </div>
                    <div className="mt-3 space-y-2">
                      <p className="text-sm">
                        <span className="font-bold">your_account</span> {formData.captions?.[platform.id] || "Your caption will appear here..."}
                      </p>
                      <p className="text-xs text-blue-500">{formData.hashtags?.[platform.id] || "#hashtags #will #appear #here"}</p>
                    </div>
                  </div>
                )}
                
                {platform.id === "x" && (
                  <div className="bg-white rounded-lg shadow-md max-w-sm mx-auto p-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="space-y-2 w-full">
                        <div className="flex justify-between">
                          <p className="text-sm font-bold">Your Account <span className="font-normal text-gray-500">@youraccount</span></p>
                          <p className="text-xs text-gray-500">Just now</p>
                        </div>
                        <p className="text-sm">{formData.captions?.[platform.id] || "Your tweet content will appear here..."}</p>
                        {formData.mediaType === "media" && (
                          <div className="bg-gray-200 h-48 rounded flex items-center justify-center mt-2">
                            <Image className="h-12 w-12 text-gray-400" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                {(platform.id === "facebook" || platform.id === "youtube" || platform.id === "tiktok") && (
                  <div className="h-72 flex items-center justify-center border rounded-lg">
                    <p className="text-muted-foreground">{platform.name} preview will appear here</p>
                  </div>
                )}
              </div>
              
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-lg font-medium mb-4">Edit Options</h3>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={handleEditContent}
                >
                  <Pencil className="mr-2 h-4 w-4" /> Edit Content
                </Button>
                
                {(platform.id === "youtube" || platform.id === "tiktok") && (
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                  >
                    <Image className="mr-2 h-4 w-4" /> Change Cover Image
                  </Button>
                )}
                
                <div className="pt-4">
                  <h4 className="text-sm font-medium mb-2">Content Summary</h4>
                  <div className="rounded bg-gray-50 p-4 text-sm">
                    <p className="mb-2"><span className="font-medium">Title:</span> {formData.title || "No title provided"}</p>
                    <p className="mb-2"><span className="font-medium">Caption length:</span> {(formData.captions?.[platform.id] || "").length} characters</p>
                    <p><span className="font-medium">Media:</span> {formData.mediaType === "media" ? "Yes" : "Text only"}</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
